(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var x0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tu={exports:{}},to={},zu={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=Symbol.for("react.element"),g0=Symbol.for("react.portal"),v0=Symbol.for("react.fragment"),y0=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),w0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),k0=Symbol.for("react.forward_ref"),N0=Symbol.for("react.suspense"),S0=Symbol.for("react.memo"),C0=Symbol.for("react.lazy"),Jl=Symbol.iterator;function E0(e){return e===null||typeof e!="object"?null:(e=Jl&&e[Jl]||e["@@iterator"],typeof e=="function"?e:null)}var Mu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lu=Object.assign,Fu={};function Fr(e,t,n){this.props=e,this.context=t,this.refs=Fu,this.updater=n||Mu}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Iu(){}Iu.prototype=Fr.prototype;function Ya(e,t,n){this.props=e,this.context=t,this.refs=Fu,this.updater=n||Mu}var Va=Ya.prototype=new Iu;Va.constructor=Ya;Lu(Va,Fr.prototype);Va.isPureReactComponent=!0;var Zl=Array.isArray,Du=Object.prototype.hasOwnProperty,Ga={current:null},Au={key:!0,ref:!0,__self:!0,__source:!0};function Ou(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Du.call(t,r)&&!Au.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ls,type:e,key:o,ref:a,props:i,_owner:Ga.current}}function _0(e,t){return{$$typeof:Ls,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ka(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ls}function R0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ec=/\/+/g;function bo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?R0(""+e.key):t.toString(36)}function mi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ls:case g0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+bo(a,0):r,Zl(i)?(n="",e!=null&&(n=e.replace(ec,"$&/")+"/"),mi(i,t,n,"",function(u){return u})):i!=null&&(Ka(i)&&(i=_0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ec,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Zl(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+bo(o,l);a+=mi(o,t,n,c,i)}else if(c=E0(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+bo(o,l++),a+=mi(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Us(e,t,n){if(e==null)return e;var r=[],i=0;return mi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function P0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gt={current:null},pi={transition:null},T0={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:pi,ReactCurrentOwner:Ga};function $u(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Us,forEach:function(e,t,n){Us(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Us(e,function(){t++}),t},toArray:function(e){return Us(e,function(t){return t})||[]},only:function(e){if(!Ka(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Component=Fr;he.Fragment=v0;he.Profiler=b0;he.PureComponent=Ya;he.StrictMode=y0;he.Suspense=N0;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T0;he.act=$u;he.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lu({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ga.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Du.call(t,c)&&!Au.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ls,type:e.type,key:i,ref:o,props:r,_owner:a}};he.createContext=function(e){return e={$$typeof:j0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:w0,_context:e},e.Consumer=e};he.createElement=Ou;he.createFactory=function(e){var t=Ou.bind(null,e);return t.type=e,t};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:k0,render:e}};he.isValidElement=Ka;he.lazy=function(e){return{$$typeof:C0,_payload:{_status:-1,_result:e},_init:P0}};he.memo=function(e,t){return{$$typeof:S0,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=pi.transition;pi.transition={};try{e()}finally{pi.transition=t}};he.unstable_act=$u;he.useCallback=function(e,t){return gt.current.useCallback(e,t)};he.useContext=function(e){return gt.current.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e){return gt.current.useDeferredValue(e)};he.useEffect=function(e,t){return gt.current.useEffect(e,t)};he.useId=function(){return gt.current.useId()};he.useImperativeHandle=function(e,t,n){return gt.current.useImperativeHandle(e,t,n)};he.useInsertionEffect=function(e,t){return gt.current.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return gt.current.useLayoutEffect(e,t)};he.useMemo=function(e,t){return gt.current.useMemo(e,t)};he.useReducer=function(e,t,n){return gt.current.useReducer(e,t,n)};he.useRef=function(e){return gt.current.useRef(e)};he.useState=function(e){return gt.current.useState(e)};he.useSyncExternalStore=function(e,t,n){return gt.current.useSyncExternalStore(e,t,n)};he.useTransition=function(){return gt.current.useTransition()};he.version="18.3.1";zu.exports=he;var d=zu.exports;const pt=Pu(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0=d,M0=Symbol.for("react.element"),L0=Symbol.for("react.fragment"),F0=Object.prototype.hasOwnProperty,I0=z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D0={key:!0,ref:!0,__self:!0,__source:!0};function Bu(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)F0.call(t,r)&&!D0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:M0,type:e,key:o,ref:a,props:i,_owner:I0.current}}to.Fragment=L0;to.jsx=Bu;to.jsxs=Bu;Tu.exports=to;var s=Tu.exports,Jo={},Uu={exports:{}},Tt={},qu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,z){var L=E.length;E.push(z);e:for(;0<L;){var T=L-1>>>1,A=E[T];if(0<i(A,z))E[T]=z,E[L]=A,L=T;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var z=E[0],L=E.pop();if(L!==z){E[0]=L;e:for(var T=0,A=E.length,O=A>>>1;T<O;){var ee=2*(T+1)-1,$=E[ee],Z=ee+1,ce=E[Z];if(0>i($,L))Z<A&&0>i(ce,$)?(E[T]=ce,E[Z]=L,T=Z):(E[T]=$,E[ee]=L,T=ee);else if(Z<A&&0>i(ce,L))E[T]=ce,E[Z]=L,T=Z;else break e}}return z}function i(E,z){var L=E.sortIndex-z.sortIndex;return L!==0?L:E.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],f=1,x=null,p=3,w=!1,b=!1,j=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=E)r(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(u)}}function S(E){if(j=!1,h(E),!b)if(n(c)!==null)b=!0,Y(R);else{var z=n(u);z!==null&&D(S,z.startTime-E)}}function R(E,z){b=!1,j&&(j=!1,g(v),v=-1),w=!0;var L=p;try{for(h(z),x=n(c);x!==null&&(!(x.expirationTime>z)||E&&!_());){var T=x.callback;if(typeof T=="function"){x.callback=null,p=x.priorityLevel;var A=T(x.expirationTime<=z);z=e.unstable_now(),typeof A=="function"?x.callback=A:x===n(c)&&r(c),h(z)}else r(c);x=n(c)}if(x!==null)var O=!0;else{var ee=n(u);ee!==null&&D(S,ee.startTime-z),O=!1}return O}finally{x=null,p=L,w=!1}}var M=!1,N=null,v=-1,y=5,k=-1;function _(){return!(e.unstable_now()-k<y)}function F(){if(N!==null){var E=e.unstable_now();k=E;var z=!0;try{z=N(!0,E)}finally{z?q():(M=!1,N=null)}}else M=!1}var q;if(typeof m=="function")q=function(){m(F)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,W=te.port2;te.port1.onmessage=F,q=function(){W.postMessage(null)}}else q=function(){C(F,0)};function Y(E){N=E,M||(M=!0,q())}function D(E,z){v=C(function(){E(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,Y(R))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var L=p;p=z;try{return E()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,z){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var L=p;p=E;try{return z()}finally{p=L}},e.unstable_scheduleCallback=function(E,z,L){var T=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?T+L:T):L=T,E){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=L+A,E={id:f++,callback:z,priorityLevel:E,startTime:L,expirationTime:A,sortIndex:-1},L>T?(E.sortIndex=L,t(u,E),n(c)===null&&E===n(u)&&(j?(g(v),v=-1):j=!0,D(S,L-T))):(E.sortIndex=A,t(c,E),b||w||(b=!0,Y(R))),E},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(E){var z=p;return function(){var L=p;p=z;try{return E.apply(this,arguments)}finally{p=L}}}})(Wu);qu.exports=Wu;var A0=qu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=d,Pt=A0;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qu=new Set,xs={};function ir(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(xs[e]=t,e=0;e<t.length;e++)Qu.add(t[e])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zo=Object.prototype.hasOwnProperty,$0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tc={},nc={};function B0(e){return Zo.call(nc,e)?!0:Zo.call(tc,e)?!1:$0.test(e)?nc[e]=!0:(tc[e]=!0,!1)}function U0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q0(e,t,n,r){if(t===null||typeof t>"u"||U0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function vt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){at[e]=new vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];at[t]=new vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){at[e]=new vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){at[e]=new vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){at[e]=new vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){at[e]=new vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){at[e]=new vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){at[e]=new vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){at[e]=new vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xa=/[\-:]([a-z])/g;function Ja(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xa,Ja);at[t]=new vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xa,Ja);at[t]=new vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xa,Ja);at[t]=new vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){at[e]=new vt(e,1,!1,e.toLowerCase(),null,!1,!1)});at.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){at[e]=new vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Za(e,t,n,r){var i=at.hasOwnProperty(t)?at[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q0(t,n,i,r)&&(n=null),r||i===null?B0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yn=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qs=Symbol.for("react.element"),cr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),el=Symbol.for("react.strict_mode"),ea=Symbol.for("react.profiler"),Hu=Symbol.for("react.provider"),Yu=Symbol.for("react.context"),tl=Symbol.for("react.forward_ref"),ta=Symbol.for("react.suspense"),na=Symbol.for("react.suspense_list"),nl=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),Vu=Symbol.for("react.offscreen"),rc=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=rc&&e[rc]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Object.assign,wo;function ns(e){if(wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wo=t&&t[1]||""}return`
`+wo+e}var jo=!1;function ko(e,t){if(!e||jo)return"";jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ns(e):""}function W0(e){switch(e.tag){case 5:return ns(e.type);case 16:return ns("Lazy");case 13:return ns("Suspense");case 19:return ns("SuspenseList");case 0:case 2:case 15:return e=ko(e.type,!1),e;case 11:return e=ko(e.type.render,!1),e;case 1:return e=ko(e.type,!0),e;default:return""}}function ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case cr:return"Portal";case ea:return"Profiler";case el:return"StrictMode";case ta:return"Suspense";case na:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yu:return(e.displayName||"Context")+".Consumer";case Hu:return(e._context.displayName||"Context")+".Provider";case tl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nl:return t=e.displayName||null,t!==null?t:ra(e.type)||"Memo";case Sn:t=e._payload,e=e._init;try{return ra(e(t))}catch{}}return null}function Q0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ra(t);case 8:return t===el?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function H0(e){var t=Gu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ws(e){e._valueTracker||(e._valueTracker=H0(e))}function Ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sa(e,t){var n=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xu(e,t){t=t.checked,t!=null&&Za(e,"checked",t,!1)}function ia(e,t){Xu(e,t);var n=$n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oa(e,t.type,n):t.hasOwnProperty("defaultValue")&&oa(e,t.type,$n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oa(e,t,n){(t!=="number"||Ri(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var rs=Array.isArray;function wr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function aa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(rs(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$n(n)}}function Ju(e,t){var n=$n(t.value),r=$n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ac(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function la(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qs,ed=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qs=Qs||document.createElement("div"),Qs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y0=["Webkit","ms","Moz","O"];Object.keys(os).forEach(function(e){Y0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),os[t]=os[e]})});function td(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||os.hasOwnProperty(e)&&os[e]?(""+t).trim():t+"px"}function nd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=td(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var V0=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(e,t){if(t){if(V0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function ua(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var da=null;function rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fa=null,jr=null,kr=null;function lc(e){if(e=Ds(e)){if(typeof fa!="function")throw Error(U(280));var t=e.stateNode;t&&(t=oo(t),fa(e.stateNode,e.type,t))}}function rd(e){jr?kr?kr.push(e):kr=[e]:jr=e}function sd(){if(jr){var e=jr,t=kr;if(kr=jr=null,lc(e),t)for(e=0;e<t.length;e++)lc(t[e])}}function id(e,t){return e(t)}function od(){}var No=!1;function ad(e,t,n){if(No)return e(t,n);No=!0;try{return id(e,t,n)}finally{No=!1,(jr!==null||kr!==null)&&(od(),sd())}}function vs(e,t){var n=e.stateNode;if(n===null)return null;var r=oo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var ma=!1;if(pn)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){ma=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{ma=!1}function G0(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var as=!1,Pi=null,Ti=!1,pa=null,K0={onError:function(e){as=!0,Pi=e}};function X0(e,t,n,r,i,o,a,l,c){as=!1,Pi=null,G0.apply(K0,arguments)}function J0(e,t,n,r,i,o,a,l,c){if(X0.apply(this,arguments),as){if(as){var u=Pi;as=!1,Pi=null}else throw Error(U(198));Ti||(Ti=!0,pa=u)}}function or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ld(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cc(e){if(or(e)!==e)throw Error(U(188))}function Z0(e){var t=e.alternate;if(!t){if(t=or(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cc(i),e;if(o===r)return cc(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function cd(e){return e=Z0(e),e!==null?ud(e):null}function ud(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ud(e);if(t!==null)return t;e=e.sibling}return null}var dd=Pt.unstable_scheduleCallback,uc=Pt.unstable_cancelCallback,em=Pt.unstable_shouldYield,tm=Pt.unstable_requestPaint,Ve=Pt.unstable_now,nm=Pt.unstable_getCurrentPriorityLevel,sl=Pt.unstable_ImmediatePriority,fd=Pt.unstable_UserBlockingPriority,zi=Pt.unstable_NormalPriority,rm=Pt.unstable_LowPriority,md=Pt.unstable_IdlePriority,no=null,sn=null;function sm(e){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(no,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:am,im=Math.log,om=Math.LN2;function am(e){return e>>>=0,e===0?32:31-(im(e)/om|0)|0}var Hs=64,Ys=4194304;function ss(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ss(l):(o&=a,o!==0&&(r=ss(o)))}else a=n&~i,a!==0?r=ss(a):o!==0&&(r=ss(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ht(t),i=1<<n,r|=e[n],t&=~i;return r}function lm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ht(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=lm(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pd(){var e=Hs;return Hs<<=1,!(Hs&4194240)&&(Hs=64),e}function So(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=n}function um(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ht(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function il(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ce=0;function hd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xd,ol,gd,vd,yd,xa=!1,Vs=[],zn=null,Mn=null,Ln=null,ys=new Map,bs=new Map,_n=[],dm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dc(e,t){switch(e){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":ys.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(t.pointerId)}}function Wr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ds(t),t!==null&&ol(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fm(e,t,n,r,i){switch(t){case"focusin":return zn=Wr(zn,e,t,n,r,i),!0;case"dragenter":return Mn=Wr(Mn,e,t,n,r,i),!0;case"mouseover":return Ln=Wr(Ln,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ys.set(o,Wr(ys.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,bs.set(o,Wr(bs.get(o)||null,e,t,n,r,i)),!0}return!1}function bd(e){var t=Vn(e.target);if(t!==null){var n=or(t);if(n!==null){if(t=n.tag,t===13){if(t=ld(n),t!==null){e.blockedOn=t,yd(e.priority,function(){gd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);da=r,n.target.dispatchEvent(r),da=null}else return t=Ds(n),t!==null&&ol(t),e.blockedOn=n,!1;t.shift()}return!0}function fc(e,t,n){hi(e)&&n.delete(t)}function mm(){xa=!1,zn!==null&&hi(zn)&&(zn=null),Mn!==null&&hi(Mn)&&(Mn=null),Ln!==null&&hi(Ln)&&(Ln=null),ys.forEach(fc),bs.forEach(fc)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,xa||(xa=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,mm)))}function ws(e){function t(i){return Qr(i,e)}if(0<Vs.length){Qr(Vs[0],e);for(var n=1;n<Vs.length;n++){var r=Vs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zn!==null&&Qr(zn,e),Mn!==null&&Qr(Mn,e),Ln!==null&&Qr(Ln,e),ys.forEach(t),bs.forEach(t),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)bd(n),n.blockedOn===null&&_n.shift()}var Nr=yn.ReactCurrentBatchConfig,Li=!0;function pm(e,t,n,r){var i=Ce,o=Nr.transition;Nr.transition=null;try{Ce=1,al(e,t,n,r)}finally{Ce=i,Nr.transition=o}}function hm(e,t,n,r){var i=Ce,o=Nr.transition;Nr.transition=null;try{Ce=4,al(e,t,n,r)}finally{Ce=i,Nr.transition=o}}function al(e,t,n,r){if(Li){var i=ga(e,t,n,r);if(i===null)Fo(e,t,r,Fi,n),dc(e,r);else if(fm(i,e,t,n,r))r.stopPropagation();else if(dc(e,r),t&4&&-1<dm.indexOf(e)){for(;i!==null;){var o=Ds(i);if(o!==null&&xd(o),o=ga(e,t,n,r),o===null&&Fo(e,t,r,Fi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Fo(e,t,r,null,n)}}var Fi=null;function ga(e,t,n,r){if(Fi=null,e=rl(r),e=Vn(e),e!==null)if(t=or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ld(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fi=e,null}function wd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nm()){case sl:return 1;case fd:return 4;case zi:case rm:return 16;case md:return 536870912;default:return 16}default:return 16}}var Pn=null,ll=null,xi=null;function jd(){if(xi)return xi;var e,t=ll,n=t.length,r,i="value"in Pn?Pn.value:Pn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return xi=i.slice(e,1<r?1-r:void 0)}function gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gs(){return!0}function mc(){return!1}function zt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Gs:mc,this.isPropagationStopped=mc,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gs)},persist:function(){},isPersistent:Gs}),t}var Ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=zt(Ir),Is=Qe({},Ir,{view:0,detail:0}),xm=zt(Is),Co,Eo,Hr,ro=Qe({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ul,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(Co=e.screenX-Hr.screenX,Eo=e.screenY-Hr.screenY):Eo=Co=0,Hr=e),Co)},movementY:function(e){return"movementY"in e?e.movementY:Eo}}),pc=zt(ro),gm=Qe({},ro,{dataTransfer:0}),vm=zt(gm),ym=Qe({},Is,{relatedTarget:0}),_o=zt(ym),bm=Qe({},Ir,{animationName:0,elapsedTime:0,pseudoElement:0}),wm=zt(bm),jm=Qe({},Ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),km=zt(jm),Nm=Qe({},Ir,{data:0}),hc=zt(Nm),Sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _m(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Em[e])?!!t[e]:!1}function ul(){return _m}var Rm=Qe({},Is,{key:function(e){if(e.key){var t=Sm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ul,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pm=zt(Rm),Tm=Qe({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xc=zt(Tm),zm=Qe({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ul}),Mm=zt(zm),Lm=Qe({},Ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fm=zt(Lm),Im=Qe({},ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dm=zt(Im),Am=[9,13,27,32],dl=pn&&"CompositionEvent"in window,ls=null;pn&&"documentMode"in document&&(ls=document.documentMode);var Om=pn&&"TextEvent"in window&&!ls,kd=pn&&(!dl||ls&&8<ls&&11>=ls),gc=String.fromCharCode(32),vc=!1;function Nd(e,t){switch(e){case"keyup":return Am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function $m(e,t){switch(e){case"compositionend":return Sd(t);case"keypress":return t.which!==32?null:(vc=!0,gc);case"textInput":return e=t.data,e===gc&&vc?null:e;default:return null}}function Bm(e,t){if(dr)return e==="compositionend"||!dl&&Nd(e,t)?(e=jd(),xi=ll=Pn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kd&&t.locale!=="ko"?null:t.data;default:return null}}var Um={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Um[e.type]:t==="textarea"}function Cd(e,t,n,r){rd(r),t=Ii(t,"onChange"),0<t.length&&(n=new cl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cs=null,js=null;function qm(e){Dd(e,0)}function so(e){var t=pr(e);if(Ku(t))return e}function Wm(e,t){if(e==="change")return t}var Ed=!1;if(pn){var Ro;if(pn){var Po="oninput"in document;if(!Po){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),Po=typeof bc.oninput=="function"}Ro=Po}else Ro=!1;Ed=Ro&&(!document.documentMode||9<document.documentMode)}function wc(){cs&&(cs.detachEvent("onpropertychange",_d),js=cs=null)}function _d(e){if(e.propertyName==="value"&&so(js)){var t=[];Cd(t,js,e,rl(e)),ad(qm,t)}}function Qm(e,t,n){e==="focusin"?(wc(),cs=t,js=n,cs.attachEvent("onpropertychange",_d)):e==="focusout"&&wc()}function Hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return so(js)}function Ym(e,t){if(e==="click")return so(t)}function Vm(e,t){if(e==="input"||e==="change")return so(t)}function Gm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:Gm;function ks(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zo.call(t,i)||!Vt(e[i],t[i]))return!1}return!0}function jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kc(e,t){var n=jc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jc(n)}}function Rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pd(){for(var e=window,t=Ri();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ri(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Km(e){var t=Pd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rd(n.ownerDocument.documentElement,n)){if(r!==null&&fl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=kc(n,o);var a=kc(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xm=pn&&"documentMode"in document&&11>=document.documentMode,fr=null,va=null,us=null,ya=!1;function Nc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ya||fr==null||fr!==Ri(r)||(r=fr,"selectionStart"in r&&fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),us&&ks(us,r)||(us=r,r=Ii(va,"onSelect"),0<r.length&&(t=new cl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fr)))}function Ks(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionend:Ks("Transition","TransitionEnd")},To={},Td={};pn&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function io(e){if(To[e])return To[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Td)return To[e]=t[n];return e}var zd=io("animationend"),Md=io("animationiteration"),Ld=io("animationstart"),Fd=io("transitionend"),Id=new Map,Sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){Id.set(e,t),ir(t,[e])}for(var zo=0;zo<Sc.length;zo++){var Mo=Sc[zo],Jm=Mo.toLowerCase(),Zm=Mo[0].toUpperCase()+Mo.slice(1);Un(Jm,"on"+Zm)}Un(zd,"onAnimationEnd");Un(Md,"onAnimationIteration");Un(Ld,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(Fd,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ep=new Set("cancel close invalid load scroll toggle".split(" ").concat(is));function Cc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,J0(r,t,void 0,e),e.currentTarget=null}function Dd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Cc(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Cc(i,l,u),o=c}}}if(Ti)throw e=pa,Ti=!1,pa=null,e}function Ae(e,t){var n=t[Na];n===void 0&&(n=t[Na]=new Set);var r=e+"__bubble";n.has(r)||(Ad(t,e,2,!1),n.add(r))}function Lo(e,t,n){var r=0;t&&(r|=4),Ad(n,e,r,t)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function Ns(e){if(!e[Xs]){e[Xs]=!0,Qu.forEach(function(n){n!=="selectionchange"&&(ep.has(n)||Lo(n,!1,e),Lo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xs]||(t[Xs]=!0,Lo("selectionchange",!1,t))}}function Ad(e,t,n,r){switch(wd(t)){case 1:var i=pm;break;case 4:i=hm;break;default:i=al}n=i.bind(null,t,n,e),i=void 0,!ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Fo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Vn(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}ad(function(){var u=o,f=rl(n),x=[];e:{var p=Id.get(e);if(p!==void 0){var w=cl,b=e;switch(e){case"keypress":if(gi(n)===0)break e;case"keydown":case"keyup":w=Pm;break;case"focusin":b="focus",w=_o;break;case"focusout":b="blur",w=_o;break;case"beforeblur":case"afterblur":w=_o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Mm;break;case zd:case Md:case Ld:w=wm;break;case Fd:w=Fm;break;case"scroll":w=xm;break;case"wheel":w=Dm;break;case"copy":case"cut":case"paste":w=km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=xc}var j=(t&4)!==0,C=!j&&e==="scroll",g=j?p!==null?p+"Capture":null:p;j=[];for(var m=u,h;m!==null;){h=m;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,g!==null&&(S=vs(m,g),S!=null&&j.push(Ss(m,S,h)))),C)break;m=m.return}0<j.length&&(p=new w(p,b,null,n,f),x.push({event:p,listeners:j}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==da&&(b=n.relatedTarget||n.fromElement)&&(Vn(b)||b[hn]))break e;if((w||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,w?(b=n.relatedTarget||n.toElement,w=u,b=b?Vn(b):null,b!==null&&(C=or(b),b!==C||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=u),w!==b)){if(j=pc,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(j=xc,S="onPointerLeave",g="onPointerEnter",m="pointer"),C=w==null?p:pr(w),h=b==null?p:pr(b),p=new j(S,m+"leave",w,n,f),p.target=C,p.relatedTarget=h,S=null,Vn(f)===u&&(j=new j(g,m+"enter",b,n,f),j.target=h,j.relatedTarget=C,S=j),C=S,w&&b)t:{for(j=w,g=b,m=0,h=j;h;h=lr(h))m++;for(h=0,S=g;S;S=lr(S))h++;for(;0<m-h;)j=lr(j),m--;for(;0<h-m;)g=lr(g),h--;for(;m--;){if(j===g||g!==null&&j===g.alternate)break t;j=lr(j),g=lr(g)}j=null}else j=null;w!==null&&Ec(x,p,w,j,!1),b!==null&&C!==null&&Ec(x,C,b,j,!0)}}e:{if(p=u?pr(u):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var R=Wm;else if(yc(p))if(Ed)R=Vm;else{R=Hm;var M=Qm}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(R=Ym);if(R&&(R=R(e,u))){Cd(x,R,n,f);break e}M&&M(e,p,u),e==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&oa(p,"number",p.value)}switch(M=u?pr(u):window,e){case"focusin":(yc(M)||M.contentEditable==="true")&&(fr=M,va=u,us=null);break;case"focusout":us=va=fr=null;break;case"mousedown":ya=!0;break;case"contextmenu":case"mouseup":case"dragend":ya=!1,Nc(x,n,f);break;case"selectionchange":if(Xm)break;case"keydown":case"keyup":Nc(x,n,f)}var N;if(dl)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else dr?Nd(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(kd&&n.locale!=="ko"&&(dr||v!=="onCompositionStart"?v==="onCompositionEnd"&&dr&&(N=jd()):(Pn=f,ll="value"in Pn?Pn.value:Pn.textContent,dr=!0)),M=Ii(u,v),0<M.length&&(v=new hc(v,e,null,n,f),x.push({event:v,listeners:M}),N?v.data=N:(N=Sd(n),N!==null&&(v.data=N)))),(N=Om?$m(e,n):Bm(e,n))&&(u=Ii(u,"onBeforeInput"),0<u.length&&(f=new hc("onBeforeInput","beforeinput",null,n,f),x.push({event:f,listeners:u}),f.data=N))}Dd(x,t)})}function Ss(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ii(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=vs(e,n),o!=null&&r.unshift(Ss(e,o,i)),o=vs(e,t),o!=null&&r.push(Ss(e,o,i))),e=e.return}return r}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ec(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=vs(n,o),c!=null&&a.unshift(Ss(n,c,l))):i||(c=vs(n,o),c!=null&&a.push(Ss(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var tp=/\r\n?/g,np=/\u0000|\uFFFD/g;function _c(e){return(typeof e=="string"?e:""+e).replace(tp,`
`).replace(np,"")}function Js(e,t,n){if(t=_c(t),_c(e)!==t&&n)throw Error(U(425))}function Di(){}var ba=null,wa=null;function ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ka=typeof setTimeout=="function"?setTimeout:void 0,rp=typeof clearTimeout=="function"?clearTimeout:void 0,Rc=typeof Promise=="function"?Promise:void 0,sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Rc<"u"?function(e){return Rc.resolve(null).then(e).catch(ip)}:ka;function ip(e){setTimeout(function(){throw e})}function Io(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ws(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ws(t)}function Fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),nn="__reactFiber$"+Dr,Cs="__reactProps$"+Dr,hn="__reactContainer$"+Dr,Na="__reactEvents$"+Dr,op="__reactListeners$"+Dr,ap="__reactHandles$"+Dr;function Vn(e){var t=e[nn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hn]||n[nn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pc(e);e!==null;){if(n=e[nn])return n;e=Pc(e)}return t}e=n,n=e.parentNode}return null}function Ds(e){return e=e[nn]||e[hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function oo(e){return e[Cs]||null}var Sa=[],hr=-1;function qn(e){return{current:e}}function Oe(e){0>hr||(e.current=Sa[hr],Sa[hr]=null,hr--)}function Ie(e,t){hr++,Sa[hr]=e.current,e.current=t}var Bn={},ft=qn(Bn),jt=qn(!1),er=Bn;function Rr(e,t){var n=e.type.contextTypes;if(!n)return Bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function kt(e){return e=e.childContextTypes,e!=null}function Ai(){Oe(jt),Oe(ft)}function Tc(e,t,n){if(ft.current!==Bn)throw Error(U(168));Ie(ft,t),Ie(jt,n)}function Od(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,Q0(e)||"Unknown",i));return Qe({},n,r)}function Oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bn,er=ft.current,Ie(ft,e),Ie(jt,jt.current),!0}function zc(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=Od(e,t,er),r.__reactInternalMemoizedMergedChildContext=e,Oe(jt),Oe(ft),Ie(ft,e)):Oe(jt),Ie(jt,n)}var cn=null,ao=!1,Do=!1;function $d(e){cn===null?cn=[e]:cn.push(e)}function lp(e){ao=!0,$d(e)}function Wn(){if(!Do&&cn!==null){Do=!0;var e=0,t=Ce;try{var n=cn;for(Ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}cn=null,ao=!1}catch(i){throw cn!==null&&(cn=cn.slice(e+1)),dd(sl,Wn),i}finally{Ce=t,Do=!1}}return null}var xr=[],gr=0,$i=null,Bi=0,Mt=[],Lt=0,tr=null,un=1,dn="";function Hn(e,t){xr[gr++]=Bi,xr[gr++]=$i,$i=e,Bi=t}function Bd(e,t,n){Mt[Lt++]=un,Mt[Lt++]=dn,Mt[Lt++]=tr,tr=e;var r=un;e=dn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var o=32-Ht(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,un=1<<32-Ht(t)+i|n<<i|r,dn=o+e}else un=1<<o|n<<i|r,dn=e}function ml(e){e.return!==null&&(Hn(e,1),Bd(e,1,0))}function pl(e){for(;e===$i;)$i=xr[--gr],xr[gr]=null,Bi=xr[--gr],xr[gr]=null;for(;e===tr;)tr=Mt[--Lt],Mt[Lt]=null,dn=Mt[--Lt],Mt[Lt]=null,un=Mt[--Lt],Mt[Lt]=null}var Rt=null,_t=null,$e=!1,Wt=null;function Ud(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Rt=e,_t=Fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Rt=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tr!==null?{id:un,overflow:dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Rt=e,_t=null,!0):!1;default:return!1}}function Ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ea(e){if($e){var t=_t;if(t){var n=t;if(!Mc(e,t)){if(Ca(e))throw Error(U(418));t=Fn(n.nextSibling);var r=Rt;t&&Mc(e,t)?Ud(r,n):(e.flags=e.flags&-4097|2,$e=!1,Rt=e)}}else{if(Ca(e))throw Error(U(418));e.flags=e.flags&-4097|2,$e=!1,Rt=e}}}function Lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rt=e}function Zs(e){if(e!==Rt)return!1;if(!$e)return Lc(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ja(e.type,e.memoizedProps)),t&&(t=_t)){if(Ca(e))throw qd(),Error(U(418));for(;t;)Ud(e,t),t=Fn(t.nextSibling)}if(Lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_t=Fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=Rt?Fn(e.stateNode.nextSibling):null;return!0}function qd(){for(var e=_t;e;)e=Fn(e.nextSibling)}function Pr(){_t=Rt=null,$e=!1}function hl(e){Wt===null?Wt=[e]:Wt.push(e)}var cp=yn.ReactCurrentBatchConfig;function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function ei(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fc(e){var t=e._init;return t(e._payload)}function Wd(e){function t(g,m){if(e){var h=g.deletions;h===null?(g.deletions=[m],g.flags|=16):h.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=On(g,m),g.index=0,g.sibling=null,g}function o(g,m,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<m?(g.flags|=2,m):h):(g.flags|=2,m)):(g.flags|=1048576,m)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,h,S){return m===null||m.tag!==6?(m=Wo(h,g.mode,S),m.return=g,m):(m=i(m,h),m.return=g,m)}function c(g,m,h,S){var R=h.type;return R===ur?f(g,m,h.props.children,S,h.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Sn&&Fc(R)===m.type)?(S=i(m,h.props),S.ref=Yr(g,m,h),S.return=g,S):(S=Ni(h.type,h.key,h.props,null,g.mode,S),S.ref=Yr(g,m,h),S.return=g,S)}function u(g,m,h,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=Qo(h,g.mode,S),m.return=g,m):(m=i(m,h.children||[]),m.return=g,m)}function f(g,m,h,S,R){return m===null||m.tag!==7?(m=Jn(h,g.mode,S,R),m.return=g,m):(m=i(m,h),m.return=g,m)}function x(g,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Wo(""+m,g.mode,h),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case qs:return h=Ni(m.type,m.key,m.props,null,g.mode,h),h.ref=Yr(g,null,m),h.return=g,h;case cr:return m=Qo(m,g.mode,h),m.return=g,m;case Sn:var S=m._init;return x(g,S(m._payload),h)}if(rs(m)||Ur(m))return m=Jn(m,g.mode,h,null),m.return=g,m;ei(g,m)}return null}function p(g,m,h,S){var R=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return R!==null?null:l(g,m,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case qs:return h.key===R?c(g,m,h,S):null;case cr:return h.key===R?u(g,m,h,S):null;case Sn:return R=h._init,p(g,m,R(h._payload),S)}if(rs(h)||Ur(h))return R!==null?null:f(g,m,h,S,null);ei(g,h)}return null}function w(g,m,h,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(h)||null,l(m,g,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qs:return g=g.get(S.key===null?h:S.key)||null,c(m,g,S,R);case cr:return g=g.get(S.key===null?h:S.key)||null,u(m,g,S,R);case Sn:var M=S._init;return w(g,m,h,M(S._payload),R)}if(rs(S)||Ur(S))return g=g.get(h)||null,f(m,g,S,R,null);ei(m,S)}return null}function b(g,m,h,S){for(var R=null,M=null,N=m,v=m=0,y=null;N!==null&&v<h.length;v++){N.index>v?(y=N,N=null):y=N.sibling;var k=p(g,N,h[v],S);if(k===null){N===null&&(N=y);break}e&&N&&k.alternate===null&&t(g,N),m=o(k,m,v),M===null?R=k:M.sibling=k,M=k,N=y}if(v===h.length)return n(g,N),$e&&Hn(g,v),R;if(N===null){for(;v<h.length;v++)N=x(g,h[v],S),N!==null&&(m=o(N,m,v),M===null?R=N:M.sibling=N,M=N);return $e&&Hn(g,v),R}for(N=r(g,N);v<h.length;v++)y=w(N,g,v,h[v],S),y!==null&&(e&&y.alternate!==null&&N.delete(y.key===null?v:y.key),m=o(y,m,v),M===null?R=y:M.sibling=y,M=y);return e&&N.forEach(function(_){return t(g,_)}),$e&&Hn(g,v),R}function j(g,m,h,S){var R=Ur(h);if(typeof R!="function")throw Error(U(150));if(h=R.call(h),h==null)throw Error(U(151));for(var M=R=null,N=m,v=m=0,y=null,k=h.next();N!==null&&!k.done;v++,k=h.next()){N.index>v?(y=N,N=null):y=N.sibling;var _=p(g,N,k.value,S);if(_===null){N===null&&(N=y);break}e&&N&&_.alternate===null&&t(g,N),m=o(_,m,v),M===null?R=_:M.sibling=_,M=_,N=y}if(k.done)return n(g,N),$e&&Hn(g,v),R;if(N===null){for(;!k.done;v++,k=h.next())k=x(g,k.value,S),k!==null&&(m=o(k,m,v),M===null?R=k:M.sibling=k,M=k);return $e&&Hn(g,v),R}for(N=r(g,N);!k.done;v++,k=h.next())k=w(N,g,v,k.value,S),k!==null&&(e&&k.alternate!==null&&N.delete(k.key===null?v:k.key),m=o(k,m,v),M===null?R=k:M.sibling=k,M=k);return e&&N.forEach(function(F){return t(g,F)}),$e&&Hn(g,v),R}function C(g,m,h,S){if(typeof h=="object"&&h!==null&&h.type===ur&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case qs:e:{for(var R=h.key,M=m;M!==null;){if(M.key===R){if(R=h.type,R===ur){if(M.tag===7){n(g,M.sibling),m=i(M,h.props.children),m.return=g,g=m;break e}}else if(M.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Sn&&Fc(R)===M.type){n(g,M.sibling),m=i(M,h.props),m.ref=Yr(g,M,h),m.return=g,g=m;break e}n(g,M);break}else t(g,M);M=M.sibling}h.type===ur?(m=Jn(h.props.children,g.mode,S,h.key),m.return=g,g=m):(S=Ni(h.type,h.key,h.props,null,g.mode,S),S.ref=Yr(g,m,h),S.return=g,g=S)}return a(g);case cr:e:{for(M=h.key;m!==null;){if(m.key===M)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){n(g,m.sibling),m=i(m,h.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Qo(h,g.mode,S),m.return=g,g=m}return a(g);case Sn:return M=h._init,C(g,m,M(h._payload),S)}if(rs(h))return b(g,m,h,S);if(Ur(h))return j(g,m,h,S);ei(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,h),m.return=g,g=m):(n(g,m),m=Wo(h,g.mode,S),m.return=g,g=m),a(g)):n(g,m)}return C}var Tr=Wd(!0),Qd=Wd(!1),Ui=qn(null),qi=null,vr=null,xl=null;function gl(){xl=vr=qi=null}function vl(e){var t=Ui.current;Oe(Ui),e._currentValue=t}function _a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sr(e,t){qi=e,xl=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(xl!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(qi===null)throw Error(U(308));vr=e,qi.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var Gn=null;function yl(e){Gn===null?Gn=[e]:Gn.push(e)}function Hd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yl(t)):(n.next=i.next,i.next=n),t.interleaved=n,xn(e,r)}function xn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Cn=!1;function bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xn(e,n)}return i=r.interleaved,i===null?(t.next=t,yl(r)):(t.next=i.next,i.next=t),r.interleaved=t,xn(e,n)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}function Ic(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wi(e,t,n,r){var i=e.updateQueue;Cn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(o!==null){var x=i.baseState;a=0,f=u=c=null,l=o;do{var p=l.lane,w=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,j=l;switch(p=t,w=n,j.tag){case 1:if(b=j.payload,typeof b=="function"){x=b.call(w,x,p);break e}x=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=j.payload,p=typeof b=="function"?b.call(w,x,p):b,p==null)break e;x=Qe({},x,p);break e;case 2:Cn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else w={eventTime:w,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=w,c=x):f=f.next=w,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(f===null&&(c=x),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);rr|=a,e.lanes=a,e.memoizedState=x}}function Dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var As={},on=qn(As),Es=qn(As),_s=qn(As);function Kn(e){if(e===As)throw Error(U(174));return e}function wl(e,t){switch(Ie(_s,t),Ie(Es,e),Ie(on,As),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:la(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=la(t,e)}Oe(on),Ie(on,t)}function zr(){Oe(on),Oe(Es),Oe(_s)}function Vd(e){Kn(_s.current);var t=Kn(on.current),n=la(t,e.type);t!==n&&(Ie(Es,e),Ie(on,n))}function jl(e){Es.current===e&&(Oe(on),Oe(Es))}var qe=qn(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=[];function kl(){for(var e=0;e<Ao.length;e++)Ao[e]._workInProgressVersionPrimary=null;Ao.length=0}var yi=yn.ReactCurrentDispatcher,Oo=yn.ReactCurrentBatchConfig,nr=0,We=null,Je=null,tt=null,Hi=!1,ds=!1,Rs=0,up=0;function ct(){throw Error(U(321))}function Nl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function Sl(e,t,n,r,i,o){if(nr=o,We=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yi.current=e===null||e.memoizedState===null?pp:hp,e=n(r,i),ds){o=0;do{if(ds=!1,Rs=0,25<=o)throw Error(U(301));o+=1,tt=Je=null,t.updateQueue=null,yi.current=xp,e=n(r,i)}while(ds)}if(yi.current=Yi,t=Je!==null&&Je.next!==null,nr=0,tt=Je=We=null,Hi=!1,t)throw Error(U(300));return e}function Cl(){var e=Rs!==0;return Rs=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?We.memoizedState=tt=e:tt=tt.next=e,tt}function Ot(){if(Je===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=tt===null?We.memoizedState:tt.next;if(t!==null)tt=t,Je=e;else{if(e===null)throw Error(U(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},tt===null?We.memoizedState=tt=e:tt=tt.next=e}return tt}function Ps(e,t){return typeof t=="function"?t(e):t}function $o(e){var t=Ot(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=Je,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var f=u.lane;if((nr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var x={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=x,a=r):c=c.next=x,We.lanes|=f,rr|=f}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Vt(r,t.memoizedState)||(wt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,We.lanes|=o,rr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bo(e){var t=Ot(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Vt(o,t.memoizedState)||(wt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Gd(){}function Kd(e,t){var n=We,r=Ot(),i=t(),o=!Vt(r.memoizedState,i);if(o&&(r.memoizedState=i,wt=!0),r=r.queue,El(Zd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,Ts(9,Jd.bind(null,n,r,i,t),void 0,null),nt===null)throw Error(U(349));nr&30||Xd(n,t,i)}return i}function Xd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jd(e,t,n,r){t.value=n,t.getSnapshot=r,ef(t)&&tf(e)}function Zd(e,t,n){return n(function(){ef(t)&&tf(e)})}function ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function tf(e){var t=xn(e,1);t!==null&&Yt(t,e,1,-1)}function Ac(e){var t=tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:e},t.queue=e,e=e.dispatch=mp.bind(null,We,e),[t.memoizedState,e]}function Ts(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nf(){return Ot().memoizedState}function bi(e,t,n,r){var i=tn();We.flags|=e,i.memoizedState=Ts(1|t,n,void 0,r===void 0?null:r)}function lo(e,t,n,r){var i=Ot();r=r===void 0?null:r;var o=void 0;if(Je!==null){var a=Je.memoizedState;if(o=a.destroy,r!==null&&Nl(r,a.deps)){i.memoizedState=Ts(t,n,o,r);return}}We.flags|=e,i.memoizedState=Ts(1|t,n,o,r)}function Oc(e,t){return bi(8390656,8,e,t)}function El(e,t){return lo(2048,8,e,t)}function rf(e,t){return lo(4,2,e,t)}function sf(e,t){return lo(4,4,e,t)}function of(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,n){return n=n!=null?n.concat([e]):null,lo(4,4,of.bind(null,t,e),n)}function _l(){}function lf(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cf(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function uf(e,t,n){return nr&21?(Vt(n,t)||(n=pd(),We.lanes|=n,rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function dp(e,t){var n=Ce;Ce=n!==0&&4>n?n:4,e(!0);var r=Oo.transition;Oo.transition={};try{e(!1),t()}finally{Ce=n,Oo.transition=r}}function df(){return Ot().memoizedState}function fp(e,t,n){var r=An(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ff(e))mf(t,n);else if(n=Hd(e,t,n,r),n!==null){var i=xt();Yt(n,e,r,i),pf(n,t,r)}}function mp(e,t,n){var r=An(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ff(e))mf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Vt(l,a)){var c=t.interleaved;c===null?(i.next=i,yl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Hd(e,t,i,r),n!==null&&(i=xt(),Yt(n,e,r,i),pf(n,t,r))}}function ff(e){var t=e.alternate;return e===We||t!==null&&t===We}function mf(e,t){ds=Hi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}var Yi={readContext:At,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},pp={readContext:At,useCallback:function(e,t){return tn().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:Oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bi(4194308,4,of.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return bi(4,2,e,t)},useMemo:function(e,t){var n=tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fp.bind(null,We,e),[r.memoizedState,e]},useRef:function(e){var t=tn();return e={current:e},t.memoizedState=e},useState:Ac,useDebugValue:_l,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=Ac(!1),t=e[0];return e=dp.bind(null,e[1]),tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=We,i=tn();if($e){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),nt===null)throw Error(U(349));nr&30||Xd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Oc(Zd.bind(null,r,o,e),[e]),r.flags|=2048,Ts(9,Jd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=tn(),t=nt.identifierPrefix;if($e){var n=dn,r=un;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Rs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=up++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hp={readContext:At,useCallback:lf,useContext:At,useEffect:El,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:sf,useMemo:cf,useReducer:$o,useRef:nf,useState:function(){return $o(Ps)},useDebugValue:_l,useDeferredValue:function(e){var t=Ot();return uf(t,Je.memoizedState,e)},useTransition:function(){var e=$o(Ps)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Gd,useSyncExternalStore:Kd,useId:df,unstable_isNewReconciler:!1},xp={readContext:At,useCallback:lf,useContext:At,useEffect:El,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:sf,useMemo:cf,useReducer:Bo,useRef:nf,useState:function(){return Bo(Ps)},useDebugValue:_l,useDeferredValue:function(e){var t=Ot();return Je===null?t.memoizedState=e:uf(t,Je.memoizedState,e)},useTransition:function(){var e=Bo(Ps)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Gd,useSyncExternalStore:Kd,useId:df,unstable_isNewReconciler:!1};function Ut(e,t){if(e&&e.defaultProps){t=Qe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ra(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var co={isMounted:function(e){return(e=e._reactInternals)?or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xt(),i=An(e),o=fn(r,i);o.payload=t,n!=null&&(o.callback=n),t=In(e,o,i),t!==null&&(Yt(t,e,i,r),vi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xt(),i=An(e),o=fn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=In(e,o,i),t!==null&&(Yt(t,e,i,r),vi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xt(),r=An(e),i=fn(n,r);i.tag=2,t!=null&&(i.callback=t),t=In(e,i,r),t!==null&&(Yt(t,e,r,n),vi(t,e,r))}};function $c(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ks(n,r)||!ks(i,o):!0}function hf(e,t,n){var r=!1,i=Bn,o=t.contextType;return typeof o=="object"&&o!==null?o=At(o):(i=kt(t)?er:ft.current,r=t.contextTypes,o=(r=r!=null)?Rr(e,i):Bn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&co.enqueueReplaceState(t,t.state,null)}function Pa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},bl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=At(o):(o=kt(t)?er:ft.current,i.context=Rr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ra(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&co.enqueueReplaceState(i,i.state,null),Wi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mr(e,t){try{var n="",r=t;do n+=W0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Uo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ta(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gp=typeof WeakMap=="function"?WeakMap:Map;function xf(e,t,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gi||(Gi=!0,Ba=r),Ta(e,t)},n}function gf(e,t,n){n=fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ta(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ta(e,t),typeof r!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Uc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tp.bind(null,e,t,n),t.then(e,e))}function qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=fn(-1,1),t.tag=2,In(n,t,1))),n.lanes|=1),e)}var vp=yn.ReactCurrentOwner,wt=!1;function ht(e,t,n,r){t.child=e===null?Qd(t,null,n,r):Tr(t,e.child,n,r)}function Qc(e,t,n,r,i){n=n.render;var o=t.ref;return Sr(t,i),r=Sl(e,t,n,r,o,i),n=Cl(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gn(e,t,i)):($e&&n&&ml(t),t.flags|=1,ht(e,t,r,i),t.child)}function Hc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Il(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vf(e,t,o,r,i)):(e=Ni(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ks,n(a,r)&&e.ref===t.ref)return gn(e,t,i)}return t.flags|=1,e=On(o,r),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ks(o,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,gn(e,t,i)}return za(e,t,n,r,i)}function yf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(br,Et),Et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(br,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ie(br,Et),Et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ie(br,Et),Et|=r;return ht(e,t,i,n),t.child}function bf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function za(e,t,n,r,i){var o=kt(n)?er:ft.current;return o=Rr(t,o),Sr(t,i),n=Sl(e,t,n,r,o,i),r=Cl(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gn(e,t,i)):($e&&r&&ml(t),t.flags|=1,ht(e,t,n,i),t.child)}function Yc(e,t,n,r,i){if(kt(n)){var o=!0;Oi(t)}else o=!1;if(Sr(t,i),t.stateNode===null)wi(e,t),hf(t,n,r),Pa(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=At(u):(u=kt(n)?er:ft.current,u=Rr(t,u));var f=n.getDerivedStateFromProps,x=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";x||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Bc(t,a,r,u),Cn=!1;var p=t.memoizedState;a.state=p,Wi(t,r,a,i),c=t.memoizedState,l!==r||p!==c||jt.current||Cn?(typeof f=="function"&&(Ra(t,n,f,r),c=t.memoizedState),(l=Cn||$c(t,n,l,r,p,c,u))?(x||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Yd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ut(t.type,l),a.props=u,x=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=At(c):(c=kt(n)?er:ft.current,c=Rr(t,c));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==x||p!==c)&&Bc(t,a,r,c),Cn=!1,p=t.memoizedState,a.state=p,Wi(t,r,a,i);var b=t.memoizedState;l!==x||p!==b||jt.current||Cn?(typeof w=="function"&&(Ra(t,n,w,r),b=t.memoizedState),(u=Cn||$c(t,n,u,r,p,b,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ma(e,t,n,r,o,i)}function Ma(e,t,n,r,i,o){bf(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&zc(t,n,!1),gn(e,t,o);r=t.stateNode,vp.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Tr(t,e.child,null,o),t.child=Tr(t,null,l,o)):ht(e,t,l,o),t.memoizedState=r.state,i&&zc(t,n,!0),t.child}function wf(e){var t=e.stateNode;t.pendingContext?Tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tc(e,t.context,!1),wl(e,t.containerInfo)}function Vc(e,t,n,r,i){return Pr(),hl(i),t.flags|=256,ht(e,t,n,r),t.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function jf(e,t,n){var r=t.pendingProps,i=qe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ie(qe,i&1),e===null)return Ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=mo(a,r,0,null),e=Jn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fa(n),t.memoizedState=La,e):Rl(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return yp(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=On(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=On(l,o):(o=Jn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Fa(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=La,r}return o=e.child,e=o.sibling,r=On(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rl(e,t){return t=mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ti(e,t,n,r){return r!==null&&hl(r),Tr(t,e.child,null,n),e=Rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yp(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Uo(Error(U(422))),ti(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=mo({mode:"visible",children:r.children},i,0,null),o=Jn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Tr(t,e.child,null,a),t.child.memoizedState=Fa(a),t.memoizedState=La,o);if(!(t.mode&1))return ti(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(U(419)),r=Uo(o,r,void 0),ti(e,t,a,r)}if(l=(a&e.childLanes)!==0,wt||l){if(r=nt,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,xn(e,i),Yt(r,e,i,-1))}return Fl(),r=Uo(Error(U(421))),ti(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_t=Fn(i.nextSibling),Rt=t,$e=!0,Wt=null,e!==null&&(Mt[Lt++]=un,Mt[Lt++]=dn,Mt[Lt++]=tr,un=e.id,dn=e.overflow,tr=t),t=Rl(t,r.children),t.flags|=4096,t)}function Gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_a(e.return,t,n)}function qo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function kf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ht(e,t,r.children,n),r=qe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gc(e,n,t);else if(e.tag===19)Gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ie(qe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qo(t,!0,n,null,o);break;case"together":qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=On(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=On(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bp(e,t,n){switch(t.tag){case 3:wf(t),Pr();break;case 5:Vd(t);break;case 1:kt(t.type)&&Oi(t);break;case 4:wl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ie(Ui,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ie(qe,qe.current&1),t.flags|=128,null):n&t.child.childLanes?jf(e,t,n):(Ie(qe,qe.current&1),e=gn(e,t,n),e!==null?e.sibling:null);Ie(qe,qe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(qe,qe.current),r)break;return null;case 22:case 23:return t.lanes=0,yf(e,t,n)}return gn(e,t,n)}var Nf,Ia,Sf,Cf;Nf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ia=function(){};Sf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Kn(on.current);var o=null;switch(n){case"input":i=sa(e,i),r=sa(e,r),o=[];break;case"select":i=Qe({},i,{value:void 0}),r=Qe({},r,{value:void 0}),o=[];break;case"textarea":i=aa(e,i),r=aa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Di)}ca(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xs.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ae("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Cf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vr(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wp(e,t,n){var r=t.pendingProps;switch(pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return kt(t.type)&&Ai(),ut(t),null;case 3:return r=t.stateNode,zr(),Oe(jt),Oe(ft),kl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wt!==null&&(Wa(Wt),Wt=null))),Ia(e,t),ut(t),null;case 5:jl(t);var i=Kn(_s.current);if(n=t.type,e!==null&&t.stateNode!=null)Sf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return ut(t),null}if(e=Kn(on.current),Zs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[nn]=t,r[Cs]=o,e=(t.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<is.length;i++)Ae(is[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":sc(r,o),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ae("invalid",r);break;case"textarea":oc(r,o),Ae("invalid",r)}ca(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Js(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Js(r.textContent,l,e),i=["children",""+l]):xs.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Ws(r),ic(r,o,!0);break;case"textarea":Ws(r),ac(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Di)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[nn]=t,e[Cs]=r,Nf(e,t,!1,!1),t.stateNode=e;e:{switch(a=ua(n,r),n){case"dialog":Ae("cancel",e),Ae("close",e),i=r;break;case"iframe":case"object":case"embed":Ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<is.length;i++)Ae(is[i],e);i=r;break;case"source":Ae("error",e),i=r;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),i=r;break;case"details":Ae("toggle",e),i=r;break;case"input":sc(e,r),i=sa(e,r),Ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Qe({},r,{value:void 0}),Ae("invalid",e);break;case"textarea":oc(e,r),i=aa(e,r),Ae("invalid",e);break;default:i=r}ca(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?nd(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ed(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&gs(e,c):typeof c=="number"&&gs(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xs.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ae("scroll",e):c!=null&&Za(e,o,c,a))}switch(n){case"input":Ws(e),ic(e,r,!1);break;case"textarea":Ws(e),ac(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$n(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?wr(e,!!r.multiple,o,!1):r.defaultValue!=null&&wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)Cf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=Kn(_s.current),Kn(on.current),Zs(t)){if(r=t.stateNode,n=t.memoizedProps,r[nn]=t,(o=r.nodeValue!==n)&&(e=Rt,e!==null))switch(e.tag){case 3:Js(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Js(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=t,t.stateNode=r}return ut(t),null;case 13:if(Oe(qe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&_t!==null&&t.mode&1&&!(t.flags&128))qd(),Pr(),t.flags|=98560,o=!1;else if(o=Zs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[nn]=t}else Pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ut(t),o=!1}else Wt!==null&&(Wa(Wt),Wt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?Ze===0&&(Ze=3):Fl())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return zr(),Ia(e,t),e===null&&Ns(t.stateNode.containerInfo),ut(t),null;case 10:return vl(t.type._context),ut(t),null;case 17:return kt(t.type)&&Ai(),ut(t),null;case 19:if(Oe(qe),o=t.memoizedState,o===null)return ut(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Vr(o,!1);else{if(Ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Qi(e),a!==null){for(t.flags|=128,Vr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ie(qe,qe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ve()>Lr&&(t.flags|=128,r=!0,Vr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Qi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!$e)return ut(t),null}else 2*Ve()-o.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,Vr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ve(),t.sibling=null,n=qe.current,Ie(qe,r?n&1|2:n&1),t):(ut(t),null);case 22:case 23:return Ll(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Et&1073741824&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function jp(e,t){switch(pl(t),t.tag){case 1:return kt(t.type)&&Ai(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),Oe(jt),Oe(ft),kl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jl(t),null;case 13:if(Oe(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));Pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(qe),null;case 4:return zr(),null;case 10:return vl(t.type._context),null;case 22:case 23:return Ll(),null;case 24:return null;default:return null}}var ni=!1,dt=!1,kp=typeof WeakSet=="function"?WeakSet:Set,se=null;function yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(e,t,r)}else n.current=null}function Da(e,t,n){try{n()}catch(r){He(e,t,r)}}var Kc=!1;function Np(e,t){if(ba=Li,e=Pd(),fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,f=0,x=e,p=null;t:for(;;){for(var w;x!==n||i!==0&&x.nodeType!==3||(l=a+i),x!==o||r!==0&&x.nodeType!==3||(c=a+r),x.nodeType===3&&(a+=x.nodeValue.length),(w=x.firstChild)!==null;)p=x,x=w;for(;;){if(x===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++f===r&&(c=a),(w=x.nextSibling)!==null)break;x=p,p=x.parentNode}x=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(wa={focusedElem:e,selectionRange:n},Li=!1,se=t;se!==null;)if(t=se,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,se=e;else for(;se!==null;){t=se;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var j=b.memoizedProps,C=b.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?j:Ut(t.type,j),C);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(S){He(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,se=e;break}se=t.return}return b=Kc,Kc=!1,b}function fs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Da(t,n,o)}i=i.next}while(i!==r)}}function uo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ef(e){var t=e.alternate;t!==null&&(e.alternate=null,Ef(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nn],delete t[Cs],delete t[Na],delete t[op],delete t[ap])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _f(e){return e.tag===5||e.tag===3||e.tag===4}function Xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(Oa(e,t,n),e=e.sibling;e!==null;)Oa(e,t,n),e=e.sibling}function $a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($a(e,t,n),e=e.sibling;e!==null;)$a(e,t,n),e=e.sibling}var st=null,qt=!1;function wn(e,t,n){for(n=n.child;n!==null;)Rf(e,t,n),n=n.sibling}function Rf(e,t,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(no,n)}catch{}switch(n.tag){case 5:dt||yr(n,t);case 6:var r=st,i=qt;st=null,wn(e,t,n),st=r,qt=i,st!==null&&(qt?(e=st,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(qt?(e=st,n=n.stateNode,e.nodeType===8?Io(e.parentNode,n):e.nodeType===1&&Io(e,n),ws(e)):Io(st,n.stateNode));break;case 4:r=st,i=qt,st=n.stateNode.containerInfo,qt=!0,wn(e,t,n),st=r,qt=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Da(n,t,a),i=i.next}while(i!==r)}wn(e,t,n);break;case 1:if(!dt&&(yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){He(n,t,l)}wn(e,t,n);break;case 21:wn(e,t,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,wn(e,t,n),dt=r):wn(e,t,n);break;default:wn(e,t,n)}}function Jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kp),t.forEach(function(r){var i=Mp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:st=l.stateNode,qt=!1;break e;case 3:st=l.stateNode.containerInfo,qt=!0;break e;case 4:st=l.stateNode.containerInfo,qt=!0;break e}l=l.return}if(st===null)throw Error(U(160));Rf(o,a,i),st=null,qt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){He(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pf(t,e),t=t.sibling}function Pf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Bt(t,e),Jt(e),r&4){try{fs(3,e,e.return),uo(3,e)}catch(j){He(e,e.return,j)}try{fs(5,e,e.return)}catch(j){He(e,e.return,j)}}break;case 1:Bt(t,e),Jt(e),r&512&&n!==null&&yr(n,n.return);break;case 5:if(Bt(t,e),Jt(e),r&512&&n!==null&&yr(n,n.return),e.flags&32){var i=e.stateNode;try{gs(i,"")}catch(j){He(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Xu(i,o),ua(l,a);var u=ua(l,o);for(a=0;a<c.length;a+=2){var f=c[a],x=c[a+1];f==="style"?nd(i,x):f==="dangerouslySetInnerHTML"?ed(i,x):f==="children"?gs(i,x):Za(i,f,x,u)}switch(l){case"input":ia(i,o);break;case"textarea":Ju(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?wr(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?wr(i,!!o.multiple,o.defaultValue,!0):wr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Cs]=o}catch(j){He(e,e.return,j)}}break;case 6:if(Bt(t,e),Jt(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){He(e,e.return,j)}}break;case 3:if(Bt(t,e),Jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ws(t.containerInfo)}catch(j){He(e,e.return,j)}break;case 4:Bt(t,e),Jt(e);break;case 13:Bt(t,e),Jt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(zl=Ve())),r&4&&Jc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(dt=(u=dt)||f,Bt(t,e),dt=u):Bt(t,e),Jt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(se=e,f=e.child;f!==null;){for(x=se=f;se!==null;){switch(p=se,w=p.child,p.tag){case 0:case 11:case 14:case 15:fs(4,p,p.return);break;case 1:yr(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(j){He(r,n,j)}}break;case 5:yr(p,p.return);break;case 22:if(p.memoizedState!==null){eu(x);continue}}w!==null?(w.return=p,se=w):eu(x)}f=f.sibling}e:for(f=null,x=e;;){if(x.tag===5){if(f===null){f=x;try{i=x.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=x.stateNode,c=x.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=td("display",a))}catch(j){He(e,e.return,j)}}}else if(x.tag===6){if(f===null)try{x.stateNode.nodeValue=u?"":x.memoizedProps}catch(j){He(e,e.return,j)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;f===x&&(f=null),x=x.return}f===x&&(f=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Bt(t,e),Jt(e),r&4&&Jc(e);break;case 21:break;default:Bt(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_f(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gs(i,""),r.flags&=-33);var o=Xc(e);$a(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Xc(e);Oa(e,l,a);break;default:throw Error(U(161))}}catch(c){He(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sp(e,t,n){se=e,Tf(e)}function Tf(e,t,n){for(var r=(e.mode&1)!==0;se!==null;){var i=se,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ni;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||dt;l=ni;var u=dt;if(ni=a,(dt=c)&&!u)for(se=i;se!==null;)a=se,c=a.child,a.tag===22&&a.memoizedState!==null?tu(i):c!==null?(c.return=a,se=c):tu(i);for(;o!==null;)se=o,Tf(o),o=o.sibling;se=i,ni=l,dt=u}Zc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,se=o):Zc(e)}}function Zc(e){for(;se!==null;){var t=se;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dt||uo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Dc(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var x=f.dehydrated;x!==null&&ws(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}dt||t.flags&512&&Aa(t)}catch(p){He(t,t.return,p)}}if(t===e){se=null;break}if(n=t.sibling,n!==null){n.return=t.return,se=n;break}se=t.return}}function eu(e){for(;se!==null;){var t=se;if(t===e){se=null;break}var n=t.sibling;if(n!==null){n.return=t.return,se=n;break}se=t.return}}function tu(e){for(;se!==null;){var t=se;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{uo(4,t)}catch(c){He(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){He(t,i,c)}}var o=t.return;try{Aa(t)}catch(c){He(t,o,c)}break;case 5:var a=t.return;try{Aa(t)}catch(c){He(t,a,c)}}}catch(c){He(t,t.return,c)}if(t===e){se=null;break}var l=t.sibling;if(l!==null){l.return=t.return,se=l;break}se=t.return}}var Cp=Math.ceil,Vi=yn.ReactCurrentDispatcher,Pl=yn.ReactCurrentOwner,Dt=yn.ReactCurrentBatchConfig,we=0,nt=null,Ge=null,ot=0,Et=0,br=qn(0),Ze=0,zs=null,rr=0,fo=0,Tl=0,ms=null,bt=null,zl=0,Lr=1/0,ln=null,Gi=!1,Ba=null,Dn=null,ri=!1,Tn=null,Ki=0,ps=0,Ua=null,ji=-1,ki=0;function xt(){return we&6?Ve():ji!==-1?ji:ji=Ve()}function An(e){return e.mode&1?we&2&&ot!==0?ot&-ot:cp.transition!==null?(ki===0&&(ki=pd()),ki):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:wd(e.type)),e):1}function Yt(e,t,n,r){if(50<ps)throw ps=0,Ua=null,Error(U(185));Fs(e,n,r),(!(we&2)||e!==nt)&&(e===nt&&(!(we&2)&&(fo|=n),Ze===4&&Rn(e,ot)),Nt(e,r),n===1&&we===0&&!(t.mode&1)&&(Lr=Ve()+500,ao&&Wn()))}function Nt(e,t){var n=e.callbackNode;cm(e,t);var r=Mi(e,e===nt?ot:0);if(r===0)n!==null&&uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uc(n),t===1)e.tag===0?lp(nu.bind(null,e)):$d(nu.bind(null,e)),sp(function(){!(we&6)&&Wn()}),n=null;else{switch(hd(r)){case 1:n=sl;break;case 4:n=fd;break;case 16:n=zi;break;case 536870912:n=md;break;default:n=zi}n=Of(n,zf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zf(e,t){if(ji=-1,ki=0,we&6)throw Error(U(327));var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var r=Mi(e,e===nt?ot:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xi(e,r);else{t=r;var i=we;we|=2;var o=Lf();(nt!==e||ot!==t)&&(ln=null,Lr=Ve()+500,Xn(e,t));do try{Rp();break}catch(l){Mf(e,l)}while(1);gl(),Vi.current=o,we=i,Ge!==null?t=0:(nt=null,ot=0,t=Ze)}if(t!==0){if(t===2&&(i=ha(e),i!==0&&(r=i,t=qa(e,i))),t===1)throw n=zs,Xn(e,0),Rn(e,r),Nt(e,Ve()),n;if(t===6)Rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ep(i)&&(t=Xi(e,r),t===2&&(o=ha(e),o!==0&&(r=o,t=qa(e,o))),t===1))throw n=zs,Xn(e,0),Rn(e,r),Nt(e,Ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Yn(e,bt,ln);break;case 3:if(Rn(e,r),(r&130023424)===r&&(t=zl+500-Ve(),10<t)){if(Mi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ka(Yn.bind(null,e,bt,ln),t);break}Yn(e,bt,ln);break;case 4:if(Rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ht(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cp(r/1960))-r,10<r){e.timeoutHandle=ka(Yn.bind(null,e,bt,ln),r);break}Yn(e,bt,ln);break;case 5:Yn(e,bt,ln);break;default:throw Error(U(329))}}}return Nt(e,Ve()),e.callbackNode===n?zf.bind(null,e):null}function qa(e,t){var n=ms;return e.current.memoizedState.isDehydrated&&(Xn(e,t).flags|=256),e=Xi(e,t),e!==2&&(t=bt,bt=n,t!==null&&Wa(t)),e}function Wa(e){bt===null?bt=e:bt.push.apply(bt,e)}function Ep(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rn(e,t){for(t&=~Tl,t&=~fo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ht(t),r=1<<n;e[n]=-1,t&=~r}}function nu(e){if(we&6)throw Error(U(327));Cr();var t=Mi(e,0);if(!(t&1))return Nt(e,Ve()),null;var n=Xi(e,t);if(e.tag!==0&&n===2){var r=ha(e);r!==0&&(t=r,n=qa(e,r))}if(n===1)throw n=zs,Xn(e,0),Rn(e,t),Nt(e,Ve()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,bt,ln),Nt(e,Ve()),null}function Ml(e,t){var n=we;we|=1;try{return e(t)}finally{we=n,we===0&&(Lr=Ve()+500,ao&&Wn())}}function sr(e){Tn!==null&&Tn.tag===0&&!(we&6)&&Cr();var t=we;we|=1;var n=Dt.transition,r=Ce;try{if(Dt.transition=null,Ce=1,e)return e()}finally{Ce=r,Dt.transition=n,we=t,!(we&6)&&Wn()}}function Ll(){Et=br.current,Oe(br)}function Xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rp(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(pl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ai();break;case 3:zr(),Oe(jt),Oe(ft),kl();break;case 5:jl(r);break;case 4:zr();break;case 13:Oe(qe);break;case 19:Oe(qe);break;case 10:vl(r.type._context);break;case 22:case 23:Ll()}n=n.return}if(nt=e,Ge=e=On(e.current,null),ot=Et=t,Ze=0,zs=null,Tl=fo=rr=0,bt=ms=null,Gn!==null){for(t=0;t<Gn.length;t++)if(n=Gn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Gn=null}return e}function Mf(e,t){do{var n=Ge;try{if(gl(),yi.current=Yi,Hi){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hi=!1}if(nr=0,tt=Je=We=null,ds=!1,Rs=0,Pl.current=null,n===null||n.return===null){Ze=1,zs=t,Ge=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=ot,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,x=f.tag;if(!(f.mode&1)&&(x===0||x===11||x===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=qc(a);if(w!==null){w.flags&=-257,Wc(w,a,l,o,t),w.mode&1&&Uc(o,u,t),t=w,c=u;var b=t.updateQueue;if(b===null){var j=new Set;j.add(c),t.updateQueue=j}else b.add(c);break e}else{if(!(t&1)){Uc(o,u,t),Fl();break e}c=Error(U(426))}}else if($e&&l.mode&1){var C=qc(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Wc(C,a,l,o,t),hl(Mr(c,l));break e}}o=c=Mr(c,l),Ze!==4&&(Ze=2),ms===null?ms=[o]:ms.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=xf(o,c,t);Ic(o,g);break e;case 1:l=c;var m=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dn===null||!Dn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=gf(o,l,t);Ic(o,S);break e}}o=o.return}while(o!==null)}If(n)}catch(R){t=R,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(1)}function Lf(){var e=Vi.current;return Vi.current=Yi,e===null?Yi:e}function Fl(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),nt===null||!(rr&268435455)&&!(fo&268435455)||Rn(nt,ot)}function Xi(e,t){var n=we;we|=2;var r=Lf();(nt!==e||ot!==t)&&(ln=null,Xn(e,t));do try{_p();break}catch(i){Mf(e,i)}while(1);if(gl(),we=n,Vi.current=r,Ge!==null)throw Error(U(261));return nt=null,ot=0,Ze}function _p(){for(;Ge!==null;)Ff(Ge)}function Rp(){for(;Ge!==null&&!em();)Ff(Ge)}function Ff(e){var t=Af(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?If(e):Ge=t,Pl.current=null}function If(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jp(n,t),n!==null){n.flags&=32767,Ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ze=6,Ge=null;return}}else if(n=wp(n,t,Et),n!==null){Ge=n;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Ze===0&&(Ze=5)}function Yn(e,t,n){var r=Ce,i=Dt.transition;try{Dt.transition=null,Ce=1,Pp(e,t,n,r)}finally{Dt.transition=i,Ce=r}return null}function Pp(e,t,n,r){do Cr();while(Tn!==null);if(we&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(um(e,o),e===nt&&(Ge=nt=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ri||(ri=!0,Of(zi,function(){return Cr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Dt.transition,Dt.transition=null;var a=Ce;Ce=1;var l=we;we|=4,Pl.current=null,Np(e,n),Pf(n,e),Km(wa),Li=!!ba,wa=ba=null,e.current=n,Sp(n),tm(),we=l,Ce=a,Dt.transition=o}else e.current=n;if(ri&&(ri=!1,Tn=e,Ki=i),o=e.pendingLanes,o===0&&(Dn=null),sm(n.stateNode),Nt(e,Ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gi)throw Gi=!1,e=Ba,Ba=null,e;return Ki&1&&e.tag!==0&&Cr(),o=e.pendingLanes,o&1?e===Ua?ps++:(ps=0,Ua=e):ps=0,Wn(),null}function Cr(){if(Tn!==null){var e=hd(Ki),t=Dt.transition,n=Ce;try{if(Dt.transition=null,Ce=16>e?16:e,Tn===null)var r=!1;else{if(e=Tn,Tn=null,Ki=0,we&6)throw Error(U(331));var i=we;for(we|=4,se=e.current;se!==null;){var o=se,a=o.child;if(se.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(se=u;se!==null;){var f=se;switch(f.tag){case 0:case 11:case 15:fs(8,f,o)}var x=f.child;if(x!==null)x.return=f,se=x;else for(;se!==null;){f=se;var p=f.sibling,w=f.return;if(Ef(f),f===u){se=null;break}if(p!==null){p.return=w,se=p;break}se=w}}}var b=o.alternate;if(b!==null){var j=b.child;if(j!==null){b.child=null;do{var C=j.sibling;j.sibling=null,j=C}while(j!==null)}}se=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,se=a;else e:for(;se!==null;){if(o=se,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fs(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,se=g;break e}se=o.return}}var m=e.current;for(se=m;se!==null;){a=se;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,se=h;else e:for(a=m;se!==null;){if(l=se,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:uo(9,l)}}catch(R){He(l,l.return,R)}if(l===a){se=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,se=S;break e}se=l.return}}if(we=i,Wn(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(no,e)}catch{}r=!0}return r}finally{Ce=n,Dt.transition=t}}return!1}function ru(e,t,n){t=Mr(n,t),t=xf(e,t,1),e=In(e,t,1),t=xt(),e!==null&&(Fs(e,1,t),Nt(e,t))}function He(e,t,n){if(e.tag===3)ru(e,e,n);else for(;t!==null;){if(t.tag===3){ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dn===null||!Dn.has(r))){e=Mr(n,e),e=gf(t,e,1),t=In(t,e,1),e=xt(),t!==null&&(Fs(t,1,e),Nt(t,e));break}}t=t.return}}function Tp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xt(),e.pingedLanes|=e.suspendedLanes&n,nt===e&&(ot&n)===n&&(Ze===4||Ze===3&&(ot&130023424)===ot&&500>Ve()-zl?Xn(e,0):Tl|=n),Nt(e,t)}function Df(e,t){t===0&&(e.mode&1?(t=Ys,Ys<<=1,!(Ys&130023424)&&(Ys=4194304)):t=1);var n=xt();e=xn(e,t),e!==null&&(Fs(e,t,n),Nt(e,n))}function zp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Df(e,n)}function Mp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),Df(e,n)}var Af;Af=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||jt.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,bp(e,t,n);wt=!!(e.flags&131072)}else wt=!1,$e&&t.flags&1048576&&Bd(t,Bi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wi(e,t),e=t.pendingProps;var i=Rr(t,ft.current);Sr(t,n),i=Sl(null,t,r,e,i,n);var o=Cl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(r)?(o=!0,Oi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bl(t),i.updater=co,t.stateNode=i,i._reactInternals=t,Pa(t,r,e,n),t=Ma(null,t,r,!0,o,n)):(t.tag=0,$e&&o&&ml(t),ht(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fp(r),e=Ut(r,e),i){case 0:t=za(null,t,r,e,n);break e;case 1:t=Yc(null,t,r,e,n);break e;case 11:t=Qc(null,t,r,e,n);break e;case 14:t=Hc(null,t,r,Ut(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),za(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),Yc(e,t,r,i,n);case 3:e:{if(wf(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Yd(e,t),Wi(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Mr(Error(U(423)),t),t=Vc(e,t,r,n,i);break e}else if(r!==i){i=Mr(Error(U(424)),t),t=Vc(e,t,r,n,i);break e}else for(_t=Fn(t.stateNode.containerInfo.firstChild),Rt=t,$e=!0,Wt=null,n=Qd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pr(),r===i){t=gn(e,t,n);break e}ht(e,t,r,n)}t=t.child}return t;case 5:return Vd(t),e===null&&Ea(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ja(r,i)?a=null:o!==null&&ja(r,o)&&(t.flags|=32),bf(e,t),ht(e,t,a,n),t.child;case 6:return e===null&&Ea(t),null;case 13:return jf(e,t,n);case 4:return wl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tr(t,null,r,n):ht(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),Qc(e,t,r,i,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ie(Ui,r._currentValue),r._currentValue=a,o!==null)if(Vt(o.value,a)){if(o.children===i.children&&!jt.current){t=gn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=fn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),_a(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(U(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),_a(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ht(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sr(t,n),i=At(i),r=r(i),t.flags|=1,ht(e,t,r,n),t.child;case 14:return r=t.type,i=Ut(r,t.pendingProps),i=Ut(r.type,i),Hc(e,t,r,i,n);case 15:return vf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),wi(e,t),t.tag=1,kt(r)?(e=!0,Oi(t)):e=!1,Sr(t,n),hf(t,r,i),Pa(t,r,i,n),Ma(null,t,r,!0,e,n);case 19:return kf(e,t,n);case 22:return yf(e,t,n)}throw Error(U(156,t.tag))};function Of(e,t){return dd(e,t)}function Lp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new Lp(e,t,n,r)}function Il(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fp(e){if(typeof e=="function")return Il(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tl)return 11;if(e===nl)return 14}return 2}function On(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ni(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Il(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ur:return Jn(n.children,i,o,t);case el:a=8,i|=8;break;case ea:return e=Ft(12,n,t,i|2),e.elementType=ea,e.lanes=o,e;case ta:return e=Ft(13,n,t,i),e.elementType=ta,e.lanes=o,e;case na:return e=Ft(19,n,t,i),e.elementType=na,e.lanes=o,e;case Vu:return mo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hu:a=10;break e;case Yu:a=9;break e;case tl:a=11;break e;case nl:a=14;break e;case Sn:a=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=Ft(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Jn(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function mo(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=Vu,e.lanes=n,e.stateNode={isHidden:!1},e}function Wo(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function Qo(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ip(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=So(0),this.expirationTimes=So(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=So(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dl(e,t,n,r,i,o,a,l,c){return e=new Ip(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ft(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bl(o),e}function Dp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $f(e){if(!e)return Bn;e=e._reactInternals;e:{if(or(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(kt(n))return Od(e,n,t)}return t}function Bf(e,t,n,r,i,o,a,l,c){return e=Dl(n,r,!0,e,i,o,a,l,c),e.context=$f(null),n=e.current,r=xt(),i=An(n),o=fn(r,i),o.callback=t??null,In(n,o,i),e.current.lanes=i,Fs(e,i,r),Nt(e,r),e}function po(e,t,n,r){var i=t.current,o=xt(),a=An(i);return n=$f(n),t.context===null?t.context=n:t.pendingContext=n,t=fn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=In(i,t,a),e!==null&&(Yt(e,i,a,o),vi(e,i,a)),a}function Ji(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Al(e,t){su(e,t),(e=e.alternate)&&su(e,t)}function Ap(){return null}var Uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ol(e){this._internalRoot=e}ho.prototype.render=Ol.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));po(e,t,null,null)};ho.prototype.unmount=Ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sr(function(){po(null,e,null,null)}),t[hn]=null}};function ho(e){this._internalRoot=e}ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=vd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_n.length&&t!==0&&t<_n[n].priority;n++);_n.splice(n,0,e),n===0&&bd(e)}};function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function iu(){}function Op(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ji(a);o.call(u)}}var a=Bf(t,r,e,0,null,!1,!1,"",iu);return e._reactRootContainer=a,e[hn]=a.current,Ns(e.nodeType===8?e.parentNode:e),sr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ji(c);l.call(u)}}var c=Dl(e,0,!1,null,null,!1,!1,"",iu);return e._reactRootContainer=c,e[hn]=c.current,Ns(e.nodeType===8?e.parentNode:e),sr(function(){po(t,c,n,r)}),c}function go(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Ji(a);l.call(c)}}po(t,a,e,i)}else a=Op(n,t,e,i,r);return Ji(a)}xd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ss(t.pendingLanes);n!==0&&(il(t,n|1),Nt(t,Ve()),!(we&6)&&(Lr=Ve()+500,Wn()))}break;case 13:sr(function(){var r=xn(e,1);if(r!==null){var i=xt();Yt(r,e,1,i)}}),Al(e,1)}};ol=function(e){if(e.tag===13){var t=xn(e,134217728);if(t!==null){var n=xt();Yt(t,e,134217728,n)}Al(e,134217728)}};gd=function(e){if(e.tag===13){var t=An(e),n=xn(e,t);if(n!==null){var r=xt();Yt(n,e,t,r)}Al(e,t)}};vd=function(){return Ce};yd=function(e,t){var n=Ce;try{return Ce=e,t()}finally{Ce=n}};fa=function(e,t,n){switch(t){case"input":if(ia(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oo(r);if(!i)throw Error(U(90));Ku(r),ia(r,i)}}}break;case"textarea":Ju(e,n);break;case"select":t=n.value,t!=null&&wr(e,!!n.multiple,t,!1)}};id=Ml;od=sr;var $p={usingClientEntryPoint:!1,Events:[Ds,pr,oo,rd,sd,Ml]},Gr={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bp={bundleType:Gr.bundleType,version:Gr.version,rendererPackageName:Gr.rendererPackageName,rendererConfig:Gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cd(e),e===null?null:e.stateNode},findFiberByHostInstance:Gr.findFiberByHostInstance||Ap,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{no=si.inject(Bp),sn=si}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p;Tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$l(t))throw Error(U(200));return Dp(e,t,null,n)};Tt.createRoot=function(e,t){if(!$l(e))throw Error(U(299));var n=!1,r="",i=Uf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Dl(e,1,!1,null,null,n,!1,r,i),e[hn]=t.current,Ns(e.nodeType===8?e.parentNode:e),new Ol(t)};Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=cd(t),e=e===null?null:e.stateNode,e};Tt.flushSync=function(e){return sr(e)};Tt.hydrate=function(e,t,n){if(!xo(t))throw Error(U(200));return go(null,e,t,!0,n)};Tt.hydrateRoot=function(e,t,n){if(!$l(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Uf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Bf(t,null,e,1,n??null,i,!1,o,a),e[hn]=t.current,Ns(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ho(t)};Tt.render=function(e,t,n){if(!xo(t))throw Error(U(200));return go(null,e,t,!1,n)};Tt.unmountComponentAtNode=function(e){if(!xo(e))throw Error(U(40));return e._reactRootContainer?(sr(function(){go(null,null,e,!1,function(){e._reactRootContainer=null,e[hn]=null})}),!0):!1};Tt.unstable_batchedUpdates=Ml;Tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xo(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return go(e,t,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function qf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qf)}catch(e){console.error(e)}}qf(),Uu.exports=Tt;var Up=Uu.exports,ou=Up;Jo.createRoot=ou.createRoot,Jo.hydrateRoot=ou.hydrateRoot;const qp="modulepreload",Wp=function(e){return"/"+e},au={},Wf=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Wp(o),o in au)return;au[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const x=i[f];if(x.href===o&&(!a||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":qp,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((f,x)=>{u.addEventListener("load",f),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};var lu="popstate";function Qp(e={}){function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Qa("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ms(i)}return Yp(t,n,null,e)}function Be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hp(){return Math.random().toString(36).substring(2,10)}function cu(e,t){return{usr:e.state,key:e.key,idx:t}}function Qa(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ar(t):t,state:n,key:t&&t.key||r||Hp()}}function Ms({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Yp(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l="POP",c=null,u=f();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function f(){return(a.state||{idx:null}).idx}function x(){l="POP";let C=f(),g=C==null?null:C-u;u=C,c&&c({action:l,location:j.location,delta:g})}function p(C,g){l="PUSH";let m=Qa(j.location,C,g);n&&n(m,C),u=f()+1;let h=cu(m,u),S=j.createHref(m);try{a.pushState(h,"",S)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(S)}o&&c&&c({action:l,location:j.location,delta:1})}function w(C,g){l="REPLACE";let m=Qa(j.location,C,g);n&&n(m,C),u=f();let h=cu(m,u),S=j.createHref(m);a.replaceState(h,"",S),o&&c&&c({action:l,location:j.location,delta:0})}function b(C){return Vp(C)}let j={get action(){return l},get location(){return e(i,a)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(lu,x),c=C,()=>{i.removeEventListener(lu,x),c=null}},createHref(C){return t(i,C)},createURL:b,encodeLocation(C){let g=b(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:w,go(C){return a.go(C)}};return j}function Vp(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Be(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Ms(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Qf(e,t,n="/"){return Gp(e,t,n,!1)}function Gp(e,t,n,r){let i=typeof t=="string"?Ar(t):t,o=vn(i.pathname||"/",n);if(o==null)return null;let a=Hf(e);Kp(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=ah(o);l=ih(a[c],u,r)}return l}function Hf(e,t=[],n=[],r=""){let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Be(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let u=mn([r,c.relativePath]),f=n.concat(c);o.children&&o.children.length>0&&(Be(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Hf(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:rh(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of Yf(o.path))i(o,a,c)}),t}function Yf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Yf(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Kp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Xp=/^:[\w-]+$/,Jp=3,Zp=2,eh=1,th=10,nh=-2,uu=e=>e==="*";function rh(e,t){let n=e.split("/"),r=n.length;return n.some(uu)&&(r+=nh),t&&(r+=Zp),n.filter(i=>!uu(i)).reduce((i,o)=>i+(Xp.test(o)?Jp:o===""?eh:th),r)}function sh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ih(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",x=Zi({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),p=c.route;if(!x&&u&&n&&!r[r.length-1].route.index&&(x=Zi({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!x)return null;Object.assign(i,x.params),a.push({params:i,pathname:mn([o,x.pathname]),pathnameBase:dh(mn([o,x.pathnameBase])),route:p}),x.pathnameBase!=="/"&&(o=mn([o,x.pathnameBase]))}return a}function Zi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=oh(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,{paramName:f,isOptional:x},p)=>{if(f==="*"){let b=l[p]||"";a=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const w=l[p];return x&&!w?u[f]=void 0:u[f]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function oh(e,t=!1,n=!0){Gt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ah(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function vn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function lh(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ar(e):e;return{pathname:n?n.startsWith("/")?n:ch(n,t):t,search:fh(r),hash:mh(i)}}function ch(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ho(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bl(e){let t=uh(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Ul(e,t,n,r=!1){let i;typeof e=="string"?i=Ar(e):(i={...e},Be(!i.pathname||!i.pathname.includes("?"),Ho("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),Ho("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),Ho("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let x=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),x-=1;i.pathname=p.join("/")}l=x>=0?t[x]:"/"}let c=lh(i,l),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}var mn=e=>e.join("/").replace(/\/\/+/g,"/"),dh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ph(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Vf=["POST","PUT","PATCH","DELETE"];new Set(Vf);var hh=["GET",...Vf];new Set(hh);var Or=d.createContext(null);Or.displayName="DataRouter";var vo=d.createContext(null);vo.displayName="DataRouterState";d.createContext(!1);var Gf=d.createContext({isTransitioning:!1});Gf.displayName="ViewTransition";var xh=d.createContext(new Map);xh.displayName="Fetchers";var gh=d.createContext(null);gh.displayName="Await";var Kt=d.createContext(null);Kt.displayName="Navigation";var Os=d.createContext(null);Os.displayName="Location";var $t=d.createContext({outlet:null,matches:[],isDataRoute:!1});$t.displayName="Route";var ql=d.createContext(null);ql.displayName="RouteError";function vh(e,{relative:t}={}){Be($r(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=d.useContext(Kt),{hash:i,pathname:o,search:a}=$s(e,{relative:t}),l=o;return n!=="/"&&(l=o==="/"?n:mn([n,o])),r.createHref({pathname:l,search:a,hash:i})}function $r(){return d.useContext(Os)!=null}function Xt(){return Be($r(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Os).location}var Kf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xf(e){d.useContext(Kt).static||d.useLayoutEffect(e)}function yt(){let{isDataRoute:e}=d.useContext($t);return e?Lh():yh()}function yh(){Be($r(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Or),{basename:t,navigator:n}=d.useContext(Kt),{matches:r}=d.useContext($t),{pathname:i}=Xt(),o=JSON.stringify(Bl(r)),a=d.useRef(!1);return Xf(()=>{a.current=!0}),d.useCallback((c,u={})=>{if(Gt(a.current,Kf),!a.current)return;if(typeof c=="number"){n.go(c);return}let f=Ul(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:mn([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,o,i,e])}var bh=d.createContext(null);function wh(e){let t=d.useContext($t).outlet;return t&&d.createElement(bh.Provider,{value:e},t)}function jh(){let{matches:e}=d.useContext($t),t=e[e.length-1];return t?t.params:{}}function $s(e,{relative:t}={}){let{matches:n}=d.useContext($t),{pathname:r}=Xt(),i=JSON.stringify(Bl(n));return d.useMemo(()=>Ul(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function kh(e,t){return Jf(e,t)}function Jf(e,t,n,r){var g;Be($r(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=d.useContext(Kt),{matches:o}=d.useContext($t),a=o[o.length-1],l=a?a.params:{},c=a?a.pathname:"/",u=a?a.pathnameBase:"/",f=a&&a.route;{let m=f&&f.path||"";Zf(c,!f||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let x=Xt(),p;if(t){let m=typeof t=="string"?Ar(t):t;Be(u==="/"||((g=m.pathname)==null?void 0:g.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${m.pathname}" was given in the \`location\` prop.`),p=m}else p=x;let w=p.pathname||"/",b=w;if(u!=="/"){let m=u.replace(/^\//,"").split("/");b="/"+w.replace(/^\//,"").split("/").slice(m.length).join("/")}let j=Qf(e,{pathname:b});Gt(f||j!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),Gt(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=_h(j&&j.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:mn([u,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:mn([u,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,r);return t&&C?d.createElement(Os.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},C):C}function Nh(){let e=Mh(),t=ph(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:o},"ErrorBoundary")," or"," ",d.createElement("code",{style:o},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),n?d.createElement("pre",{style:i},n):null,a)}var Sh=d.createElement(Nh,null),Ch=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement($t.Provider,{value:this.props.routeContext},d.createElement(ql.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Eh({routeContext:e,match:t,children:n}){let r=d.useContext(Or);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement($t.Provider,{value:e},n)}function _h(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=n==null?void 0:n.errors;if(o!=null){let c=i.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);Be(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let a=!1,l=-1;if(n)for(let c=0;c<i.length;c++){let u=i[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:f,errors:x}=n,p=u.route.loader&&!f.hasOwnProperty(u.route.id)&&(!x||x[u.route.id]===void 0);if(u.route.lazy||p){a=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((c,u,f)=>{let x,p=!1,w=null,b=null;n&&(x=o&&u.route.id?o[u.route.id]:void 0,w=u.route.errorElement||Sh,a&&(l<0&&f===0?(Zf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,b=null):l===f&&(p=!0,b=u.route.hydrateFallbackElement||null)));let j=t.concat(i.slice(0,f+1)),C=()=>{let g;return x?g=w:p?g=b:u.route.Component?g=d.createElement(u.route.Component,null):u.route.element?g=u.route.element:g=c,d.createElement(Eh,{match:u,routeContext:{outlet:c,matches:j,isDataRoute:n!=null},children:g})};return n&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?d.createElement(Ch,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:C(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):C()},null)}function Wl(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rh(e){let t=d.useContext(Or);return Be(t,Wl(e)),t}function Ph(e){let t=d.useContext(vo);return Be(t,Wl(e)),t}function Th(e){let t=d.useContext($t);return Be(t,Wl(e)),t}function Ql(e){let t=Th(e),n=t.matches[t.matches.length-1];return Be(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function zh(){return Ql("useRouteId")}function Mh(){var r;let e=d.useContext(ql),t=Ph("useRouteError"),n=Ql("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Lh(){let{router:e}=Rh("useNavigate"),t=Ql("useNavigate"),n=d.useRef(!1);return Xf(()=>{n.current=!0}),d.useCallback(async(i,o={})=>{Gt(n.current,Kf),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var du={};function Zf(e,t,n){!t&&!du[e]&&(du[e]=!0,Gt(!1,n))}d.memo(Fh);function Fh({routes:e,future:t,state:n}){return Jf(e,void 0,n,t)}function Ih({to:e,replace:t,state:n,relative:r}){Be($r(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=d.useContext(Kt);Gt(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=d.useContext($t),{pathname:a}=Xt(),l=yt(),c=Ul(e,Bl(o),a,r==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:n,relative:r})},[l,u,r,t,n]),null}function Dh(e){return wh(e.context)}function et(e){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ah({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){Be(!$r(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:a,navigator:i,static:o,future:{}}),[a,i,o]);typeof n=="string"&&(n=Ar(n));let{pathname:c="/",search:u="",hash:f="",state:x=null,key:p="default"}=n,w=d.useMemo(()=>{let b=vn(c,a);return b==null?null:{location:{pathname:b,search:u,hash:f,state:x,key:p},navigationType:r}},[a,c,u,f,x,p,r]);return Gt(w!=null,`<Router basename="${a}"> is not able to match the URL "${c}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:d.createElement(Kt.Provider,{value:l},d.createElement(Os.Provider,{children:t,value:w}))}function Oh({children:e,location:t}){return kh(Ha(e),t)}function Ha(e,t=[]){let n=[];return d.Children.forEach(e,(r,i)=>{if(!d.isValidElement(r))return;let o=[...t,i];if(r.type===d.Fragment){n.push.apply(n,Ha(r.props.children,o));return}Be(r.type===et,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ha(r.props.children,o)),n.push(a)}),n}var Si="get",Ci="application/x-www-form-urlencoded";function yo(e){return e!=null&&typeof e.tagName=="string"}function $h(e){return yo(e)&&e.tagName.toLowerCase()==="button"}function Bh(e){return yo(e)&&e.tagName.toLowerCase()==="form"}function Uh(e){return yo(e)&&e.tagName.toLowerCase()==="input"}function qh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wh(e,t){return e.button===0&&(!t||t==="_self")&&!qh(e)}var ii=null;function Qh(){if(ii===null)try{new FormData(document.createElement("form"),0),ii=!1}catch{ii=!0}return ii}var Hh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yo(e){return e!=null&&!Hh.has(e)?(Gt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ci}"`),null):e}function Yh(e,t){let n,r,i,o,a;if(Bh(e)){let l=e.getAttribute("action");r=l?vn(l,t):null,n=e.getAttribute("method")||Si,i=Yo(e.getAttribute("enctype"))||Ci,o=new FormData(e)}else if($h(e)||Uh(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(r=c?vn(c,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||Si,i=Yo(e.getAttribute("formenctype"))||Yo(l.getAttribute("enctype"))||Ci,o=new FormData(l,e),!Qh()){let{name:u,type:f,value:x}=e;if(f==="image"){let p=u?`${u}.`:"";o.append(`${p}x`,"0"),o.append(`${p}y`,"0")}else u&&o.append(u,x)}}else{if(yo(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Si,r=null,i=Ci,a=e}return o&&i==="text/plain"&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Hl(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vh(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&vn(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Gh(e,t){if(e.id in t)return t[e.id];try{let n=await Wf(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Kh(e){return e!=null&&typeof e.page=="string"}function Xh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Jh(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let a=await Gh(o,n);return a.links?a.links():[]}return[]}));return nx(r.flat(1).filter(Xh).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function fu(e,t,n,r,i,o){let a=(c,u)=>n[u]?c.route.id!==n[u].route.id:!0,l=(c,u)=>{var f;return n[u].pathname!==c.pathname||((f=n[u].route.path)==null?void 0:f.endsWith("*"))&&n[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>a(c,u)||l(c,u)):o==="data"?t.filter((c,u)=>{var x;let f=r.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(a(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let p=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((x=n[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function Zh(e,t,{includeHydrateFallback:n}={}){return ex(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function ex(e){return[...new Set(e)]}function tx(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function nx(e,t){let n=new Set,r=new Set(t);return e.reduce((i,o)=>{if(t&&!Kh(o)&&o.as==="script"&&o.href&&r.has(o.href))return i;let l=JSON.stringify(tx(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function e0(){let e=d.useContext(Or);return Hl(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function rx(){let e=d.useContext(vo);return Hl(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Yl=d.createContext(void 0);Yl.displayName="FrameworkContext";function t0(){let e=d.useContext(Yl);return Hl(e,"You must render this element inside a <HydratedRouter> element"),e}function sx(e,t){let n=d.useContext(Yl),[r,i]=d.useState(!1),[o,a]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:f,onTouchStart:x}=t,p=d.useRef(null);d.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let j=g=>{g.forEach(m=>{a(m.isIntersecting)})},C=new IntersectionObserver(j,{threshold:.5});return p.current&&C.observe(p.current),()=>{C.disconnect()}}},[e]),d.useEffect(()=>{if(r){let j=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(j)}}},[r]);let w=()=>{i(!0)},b=()=>{i(!1),a(!1)};return n?e!=="intent"?[o,p,{}]:[o,p,{onFocus:Kr(l,w),onBlur:Kr(c,b),onMouseEnter:Kr(u,w),onMouseLeave:Kr(f,b),onTouchStart:Kr(x,w)}]:[!1,p,{}]}function Kr(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ix({page:e,...t}){let{router:n}=e0(),r=d.useMemo(()=>Qf(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?d.createElement(ax,{page:e,matches:r,...t}):null}function ox(e){let{manifest:t,routeModules:n}=t0(),[r,i]=d.useState([]);return d.useEffect(()=>{let o=!1;return Jh(e,t,n).then(a=>{o||i(a)}),()=>{o=!0}},[e,t,n]),r}function ax({page:e,matches:t,...n}){let r=Xt(),{manifest:i,routeModules:o}=t0(),{basename:a}=e0(),{loaderData:l,matches:c}=rx(),u=d.useMemo(()=>fu(e,t,c,i,r,"data"),[e,t,c,i,r]),f=d.useMemo(()=>fu(e,t,c,i,r,"assets"),[e,t,c,i,r]),x=d.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let b=new Set,j=!1;if(t.forEach(g=>{var h;let m=i.routes[g.route.id];!m||!m.hasLoader||(!u.some(S=>S.route.id===g.route.id)&&g.route.id in l&&((h=o[g.route.id])!=null&&h.shouldRevalidate)||m.hasClientLoader?j=!0:b.add(g.route.id))}),b.size===0)return[];let C=Vh(e,a,"data");return j&&b.size>0&&C.searchParams.set("_routes",t.filter(g=>b.has(g.route.id)).map(g=>g.route.id).join(",")),[C.pathname+C.search]},[a,l,r,i,u,t,e,o]),p=d.useMemo(()=>Zh(f,i),[f,i]),w=ox(f);return d.createElement(d.Fragment,null,x.map(b=>d.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),p.map(b=>d.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),w.map(({key:b,link:j})=>d.createElement("link",{key:b,...j})))}function lx(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var n0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{n0&&(window.__reactRouterVersion="7.7.1")}catch{}function cx({basename:e,children:t,window:n}){let r=d.useRef();r.current==null&&(r.current=Qp({window:n,v5Compat:!0}));let i=r.current,[o,a]=d.useState({action:i.action,location:i.location}),l=d.useCallback(c=>{d.startTransition(()=>a(c))},[a]);return d.useLayoutEffect(()=>i.listen(l),[i,l]),d.createElement(Ah,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i})}var r0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s0=d.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:f,viewTransition:x,...p},w){let{basename:b}=d.useContext(Kt),j=typeof u=="string"&&r0.test(u),C,g=!1;if(typeof u=="string"&&j&&(C=u,n0))try{let y=new URL(window.location.href),k=u.startsWith("//")?new URL(y.protocol+u):new URL(u),_=vn(k.pathname,b);k.origin===y.origin&&_!=null?u=_+k.search+k.hash:g=!0}catch{Gt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=vh(u,{relative:i}),[h,S,R]=sx(r,p),M=mx(u,{replace:a,state:l,target:c,preventScrollReset:f,relative:i,viewTransition:x});function N(y){t&&t(y),y.defaultPrevented||M(y)}let v=d.createElement("a",{...p,...R,href:C||m,onClick:g||o?t:N,ref:lx(w,S),target:c,"data-discover":!j&&n==="render"?"true":void 0});return h&&!j?d.createElement(d.Fragment,null,v,d.createElement(ix,{page:m})):v});s0.displayName="Link";var ux=d.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:a,viewTransition:l,children:c,...u},f){let x=$s(a,{relative:u.relative}),p=Xt(),w=d.useContext(vo),{navigator:b,basename:j}=d.useContext(Kt),C=w!=null&&vx(x)&&l===!0,g=b.encodeLocation?b.encodeLocation(x).pathname:x.pathname,m=p.pathname,h=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(m=m.toLowerCase(),h=h?h.toLowerCase():null,g=g.toLowerCase()),h&&j&&(h=vn(h,j)||h);const S=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let R=m===g||!i&&m.startsWith(g)&&m.charAt(S)==="/",M=h!=null&&(h===g||!i&&h.startsWith(g)&&h.charAt(g.length)==="/"),N={isActive:R,isPending:M,isTransitioning:C},v=R?t:void 0,y;typeof r=="function"?y=r(N):y=[r,R?"active":null,M?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let k=typeof o=="function"?o(N):o;return d.createElement(s0,{...u,"aria-current":v,className:y,ref:f,style:k,to:a,viewTransition:l},typeof c=="function"?c(N):c)});ux.displayName="NavLink";var dx=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:a=Si,action:l,onSubmit:c,relative:u,preventScrollReset:f,viewTransition:x,...p},w)=>{let b=xx(),j=gx(l,{relative:u}),C=a.toLowerCase()==="get"?"get":"post",g=typeof l=="string"&&r0.test(l),m=h=>{if(c&&c(h),h.defaultPrevented)return;h.preventDefault();let S=h.nativeEvent.submitter,R=(S==null?void 0:S.getAttribute("formmethod"))||a;b(S||h.currentTarget,{fetcherKey:t,method:R,navigate:n,replace:i,state:o,relative:u,preventScrollReset:f,viewTransition:x})};return d.createElement("form",{ref:w,method:C,action:j,onSubmit:r?c:m,...p,"data-discover":!g&&e==="render"?"true":void 0})});dx.displayName="Form";function fx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function i0(e){let t=d.useContext(Or);return Be(t,fx(e)),t}function mx(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:a}={}){let l=yt(),c=Xt(),u=$s(e,{relative:o});return d.useCallback(f=>{if(Wh(f,t)){f.preventDefault();let x=n!==void 0?n:Ms(c)===Ms(u);l(e,{replace:x,state:r,preventScrollReset:i,relative:o,viewTransition:a})}},[c,l,u,n,r,t,e,i,o,a])}var px=0,hx=()=>`__${String(++px)}__`;function xx(){let{router:e}=i0("useSubmit"),{basename:t}=d.useContext(Kt),n=zh();return d.useCallback(async(r,i={})=>{let{action:o,method:a,encType:l,formData:c,body:u}=Yh(r,t);if(i.navigate===!1){let f=i.fetcherKey||hx();await e.fetch(f,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function gx(e,{relative:t}={}){let{basename:n}=d.useContext(Kt),r=d.useContext($t);Be(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...$s(e||".",{relative:t})},a=Xt();if(e==null){o.search=a.search;let l=new URLSearchParams(o.search),c=l.getAll("index");if(c.some(f=>f==="")){l.delete("index"),c.filter(x=>x).forEach(x=>l.append("index",x));let f=l.toString();o.search=f?`?${f}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:mn([n,o.pathname])),Ms(o)}function vx(e,{relative:t}={}){let n=d.useContext(Gf);Be(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=i0("useViewTransitionState"),i=$s(e,{relative:t});if(!n.isTransitioning)return!1;let o=vn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=vn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Zi(i.pathname,a)!=null||Zi(i.pathname,o)!=null}function yx({size:e=22,spinning:t=!1}){return s.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[s.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),s.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),s.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),s.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),s.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),s.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function bx(){const e=yt(),{pathname:t}=Xt(),n=d.useRef({}),r=d.useRef(0),[i,o]=d.useState(!1),a=d.useRef({});d.useEffect(()=>{a.current={refresh:new Audio("/sounds/refresh.mp3"),tap:new Audio("/sounds/tap.mp3"),whoosh:new Audio("/sounds/whoosh.mp3")},Object.values(a.current).forEach(D=>{D.volume=.5})},[]);const l=D=>{const E=a.current[D];E&&(E.currentTime=0,E.play().catch(()=>{}))},c=D=>{if(navigator.vibrate)switch(D){case"light":navigator.vibrate(10);break;case"medium":navigator.vibrate(20);break;case"heavy":navigator.vibrate(40);break;case"double":navigator.vibrate([20,50,20]);break;case"success":navigator.vibrate([10,50,10,50,10]);break;default:navigator.vibrate(15)}};d.useEffect(()=>{if(t.startsWith("/profile/")){window.scrollTo(0,0);const D=document.querySelector("main");D&&(D.scrollTop=0)}else{const D=n.current[t];D!==void 0?window.scrollTo(0,D):window.scrollTo(0,0)}},[t]);const u=()=>{n.current[t]=window.scrollY},f=["/","/play","/profile"].includes(t),[x,p]=d.useState(!1),[w,b]=d.useState({open:!1,go:null}),[j,C]=d.useState(!1);d.useEffect(()=>{const D=()=>{C(document.body.classList.contains("hide-bottom-nav"))};D();const E=new MutationObserver(D);return E.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>E.disconnect()},[]),d.useEffect(()=>{const D=new MutationObserver(()=>{p(document.body.classList.contains("modal-open"))});return D.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>D.disconnect()},[]);const m=x||j||[/^\/quiz\//,/^\/practice\//,/^\/profile\//].some(D=>D.test(t)),h=D=>D==="/"?t==="/":t.startsWith(D),S=d.useRef(0),[R,M]=d.useState(!1),[N,v]=d.useState(0),[y,k]=d.useState(!1),[_,F]=d.useState(0),q=D=>{!f||y||window.scrollY===0&&(S.current=D.touches[0].clientY)},te=D=>{if(!(!f||y)&&window.scrollY===0){const E=D.touches[0].clientY-S.current;if(E>0){M(!0);const z=Math.min(E,120);v(z),F(Math.min(z/60*100,100)),E>60&&E<65&&c("light")}}},W=()=>{R&&N>60&&(k(!0),l("refresh"),c("success"),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{k(!1),F(0)},1500)),M(!1),v(0)},Y=({path:D,icon:E,label:z,emoji:L})=>{const T=h(D),[A,O]=d.useState(!1),ee=()=>{u(),O(!0),setTimeout(()=>O(!1),600);const $=()=>{if(D==="/play"){o(!0),l("whoosh"),c("medium"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1)},200);return}if(T){const ce=Date.now();ce-r.current<500&&(window.scrollTo({top:0,behavior:"smooth"}),l("tap"),c("double")),r.current=ce}else l("tap"),c("light"),e(D)};if(localStorage.getItem("qp_in_question")==="true"&&!T){b({open:!0,go:$});return}$()};return s.jsxs("button",{type:"button",onClick:ee,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${T?"scale-110":"scale-100 hover:scale-105"}
          ${A?"animate-bounce":""}`,"aria-current":T?"page":void 0,children:[T&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),s.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),s.jsx("div",{className:`leading-none text-2xl transition-transform ${T?"scale-125":""} ${D==="/play"&&i?"animate-spin":""}`,children:L||E}),s.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${T?"text-white":"text-base-muted/80"}`,children:z})]})};return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",onTouchStart:q,onTouchMove:te,onTouchEnd:W,children:[s.jsx("style",{children:`
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
      `}),(R||y)&&s.jsxs("div",{className:"fixed left-1/2 z-50 flex flex-col items-center transition-all duration-300",style:{top:y?"60px":`${Math.max(20,Math.min(N-20,80))}px`,transform:"translateX(-50%) scale("+(y?1.1:1)+")"},children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsxs("svg",{width:"48",height:"48",className:y?"animate-spin":"",children:[s.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"rgba(255,255,255,0.2)",strokeWidth:"4"}),s.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"url(#gradient)",strokeWidth:"4",strokeDasharray:`${_*1.26} 126`,strokeLinecap:"round",transform:"rotate(-90 24 24)"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#6366F1"}),s.jsx("stop",{offset:"50%",stopColor:"#22C55E"}),s.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),s.jsx("div",{className:"absolute inset-0 grid place-items-center",children:s.jsx("span",{className:"text-2xl",children:y?"🎉":"⬇"})})]}),s.jsx("span",{className:`text-sm font-medium text-white px-3 py-1 rounded-full bg-white/20 backdrop-blur
            ${y?"rainbow-text":""}`,children:y?"Refreshed! 🌟":N>60?"Release! 🚀":"Pull down..."}),y&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(6)].map((D,E)=>s.jsx("span",{className:"absolute text-2xl",style:{left:`${-30+E*15}px`,animation:"confetti 1s ease-out forwards",animationDelay:`${E*.1}s`},children:["🎊","✨","⭐","🎈","🎉","💫"][E]},E))})]}),s.jsx("main",{className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:m||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:m||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto",transform:R&&!y?`translateY(${N*.5}px)`:void 0,transition:R||y?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)":void 0},children:s.jsx(Dh,{})}),w.open&&s.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[s.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[s.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),s.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),s.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>{c("light"),b({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),s.jsx("button",{onClick:()=>{c("medium");const D=w.go;b({open:!1,go:null}),D==null||D()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),s.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!m&&s.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[s.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),s.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),s.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[s.jsx(Y,{path:"/",emoji:"🏠",label:"Home"}),s.jsx(Y,{path:"/play",icon:s.jsx(yx,{size:26,spinning:i}),label:"Play"}),s.jsx(Y,{path:"/swipe",emoji:"📚",label:"Swipe"}),s.jsx(Y,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function eo(){return eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eo.apply(null,arguments)}function wx(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function jx(e){d.useEffect(e,[])}var kx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function It(e,t){var n=t===void 0?{}:t,r=n.volume,i=r===void 0?1:r,o=n.playbackRate,a=o===void 0?1:o,l=n.soundEnabled,c=l===void 0?!0:l,u=n.interrupt,f=u===void 0?!1:u,x=n.onload,p=wx(n,kx),w=pt.useRef(null),b=pt.useRef(!1),j=pt.useState(null),C=j[0],g=j[1],m=pt.useState(null),h=m[0],S=m[1],R=function(){typeof x=="function"&&x.call(this),b.current&&g(this.duration()*1e3),S(this)};jx(function(){return Wf(()=>import("./howler-3ef4b86d.js").then(k=>k.h),[]).then(function(k){if(!b.current){var _;w.current=(_=k.Howl)!==null&&_!==void 0?_:k.default.Howl,b.current=!0,new w.current(eo({src:Array.isArray(e)?e:[e],volume:i,rate:a,onload:R},p))}}),function(){b.current=!1}}),pt.useEffect(function(){w.current&&h&&S(new w.current(eo({src:Array.isArray(e)?e:[e],volume:i,onload:R},p)))},[JSON.stringify(e)]),pt.useEffect(function(){h&&(h.volume(i),p.sprite||h.rate(a))},[h,i,a]);var M=pt.useCallback(function(k){typeof k>"u"&&(k={}),!(!h||!c&&!k.forceSoundEnabled)&&(f&&h.stop(),k.playbackRate&&h.rate(k.playbackRate),h.play(k.id))},[h,c,f]),N=pt.useCallback(function(k){h&&h.stop(k)},[h]),v=pt.useCallback(function(k){h&&h.pause(k)},[h]),y=[M,{sound:h,stop:N,pause:v,duration:C}];return y}var o0={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((n,r)=>{e.exports=r()})(x0,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},i,o=!r.document&&!!r.postMessage,a=r.IS_PAPA_WORKER||!1,l={},c=0,u={};function f(v){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(y){var k=R(y);k.chunkSize=parseInt(k.chunkSize),y.step||y.chunk||(k.chunkSize=null),this._handle=new j(k),(this._handle.streamer=this)._config=k}).call(this,v),this.parseChunk=function(y,k){var _=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<_){let q=this._config.newline;q||(F=this._config.quoteChar||'"',q=this._handle.guessLineEndings(y,F)),y=[...y.split(q).slice(_)].join(q)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(F=this._config.beforeFirstChunk(y))!==void 0&&(y=F),this.isFirstChunk=!1,this._halted=!1;var _=this._partialLine+y,F=(this._partialLine="",this._handle.parse(_,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(y=F.meta.cursor,_=(this._finished||(this._partialLine=_.substring(y-this._baseIndex),this._baseIndex=y),F&&F.data&&(this._rowCount+=F.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),a)r.postMessage({results:F,workerId:u.WORKER_ID,finished:_});else if(N(this._config.chunk)&&!k){if(this._config.chunk(F,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=F=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(F.data),this._completeResults.errors=this._completeResults.errors.concat(F.errors),this._completeResults.meta=F.meta),this._completed||!_||!N(this._config.complete)||F&&F.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),_||F&&F.meta.paused||this._nextChunk(),F}this._halted=!0},this._sendError=function(y){N(this._config.error)?this._config.error(y):a&&this._config.error&&r.postMessage({workerId:u.WORKER_ID,error:y,finished:!1})}}function x(v){var y;(v=v||{}).chunkSize||(v.chunkSize=u.RemoteChunkSize),f.call(this,v),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(y=new XMLHttpRequest,this._config.withCredentials&&(y.withCredentials=this._config.withCredentials),o||(y.onload=M(this._chunkLoaded,this),y.onerror=M(this._chunkError,this)),y.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var k,_=this._config.downloadRequestHeaders;for(k in _)y.setRequestHeader(k,_[k])}var F;this._config.chunkSize&&(F=this._start+this._config.chunkSize-1,y.setRequestHeader("Range","bytes="+this._start+"-"+F));try{y.send(this._config.downloadRequestBody)}catch(q){this._chunkError(q.message)}o&&y.status===0&&this._chunkError()}},this._chunkLoaded=function(){y.readyState===4&&(y.status<200||400<=y.status?this._chunkError():(this._start+=this._config.chunkSize||y.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(y),this.parseChunk(y.responseText)))},this._chunkError=function(k){k=y.statusText||k,this._sendError(new Error(k))}}function p(v){(v=v||{}).chunkSize||(v.chunkSize=u.LocalChunkSize),f.call(this,v);var y,k,_=typeof FileReader<"u";this.stream=function(F){this._input=F,k=F.slice||F.webkitSlice||F.mozSlice,_?((y=new FileReader).onload=M(this._chunkLoaded,this),y.onerror=M(this._chunkError,this)):y=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var F=this._input,q=(this._config.chunkSize&&(q=Math.min(this._start+this._config.chunkSize,this._input.size),F=k.call(F,this._start,q)),y.readAsText(F,this._config.encoding));_||this._chunkLoaded({target:{result:q}})},this._chunkLoaded=function(F){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(F.target.result)},this._chunkError=function(){this._sendError(y.error)}}function w(v){var y;f.call(this,v=v||{}),this.stream=function(k){return y=k,this._nextChunk()},this._nextChunk=function(){var k,_;if(!this._finished)return k=this._config.chunkSize,y=k?(_=y.substring(0,k),y.substring(k)):(_=y,""),this._finished=!y,this.parseChunk(_)}}function b(v){f.call(this,v=v||{});var y=[],k=!0,_=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(F){this._input=F,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){_&&y.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),y.length?this.parseChunk(y.shift()):k=!0},this._streamData=M(function(F){try{y.push(typeof F=="string"?F:F.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(y.shift()))}catch(q){this._streamError(q)}},this),this._streamError=M(function(F){this._streamCleanUp(),this._sendError(F)},this),this._streamEnd=M(function(){this._streamCleanUp(),_=!0,this._streamData("")},this),this._streamCleanUp=M(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(v){var y,k,_,F,q=Math.pow(2,53),te=-q,W=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Y=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,D=this,E=0,z=0,L=!1,T=!1,A=[],O={data:[],errors:[],meta:{}};function ee(P){return v.skipEmptyLines==="greedy"?P.join("").trim()==="":P.length===1&&P[0].length===0}function $(){if(O&&_&&(ce("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),_=!1),v.skipEmptyLines&&(O.data=O.data.filter(function(H){return!ee(H)})),Z()){let H=function(K,ue){N(v.transformHeader)&&(K=v.transformHeader(K,ue)),A.push(K)};if(O)if(Array.isArray(O.data[0])){for(var P=0;Z()&&P<O.data.length;P++)O.data[P].forEach(H);O.data.splice(0,1)}else O.data.forEach(H)}function I(H,K){for(var ue=v.header?{}:[],X=0;X<H.length;X++){var ne=X,B=H[X],B=((G,V)=>(ae=>(v.dynamicTypingFunction&&v.dynamicTyping[ae]===void 0&&(v.dynamicTyping[ae]=v.dynamicTypingFunction(ae)),(v.dynamicTyping[ae]||v.dynamicTyping)===!0))(G)?V==="true"||V==="TRUE"||V!=="false"&&V!=="FALSE"&&((ae=>{if(W.test(ae)&&(ae=parseFloat(ae),te<ae&&ae<q))return 1})(V)?parseFloat(V):Y.test(V)?new Date(V):V===""?null:V):V)(ne=v.header?X>=A.length?"__parsed_extra":A[X]:ne,B=v.transform?v.transform(B,ne):B);ne==="__parsed_extra"?(ue[ne]=ue[ne]||[],ue[ne].push(B)):ue[ne]=B}return v.header&&(X>A.length?ce("FieldMismatch","TooManyFields","Too many fields: expected "+A.length+" fields but parsed "+X,z+K):X<A.length&&ce("FieldMismatch","TooFewFields","Too few fields: expected "+A.length+" fields but parsed "+X,z+K)),ue}var Q;O&&(v.header||v.dynamicTyping||v.transform)&&(Q=1,!O.data.length||Array.isArray(O.data[0])?(O.data=O.data.map(I),Q=O.data.length):O.data=I(O.data,0),v.header&&O.meta&&(O.meta.fields=A),z+=Q)}function Z(){return v.header&&A.length===0}function ce(P,I,Q,H){P={type:P,code:I,message:Q},H!==void 0&&(P.row=H),O.errors.push(P)}N(v.step)&&(F=v.step,v.step=function(P){O=P,Z()?$():($(),O.data.length!==0&&(E+=P.data.length,v.preview&&E>v.preview?k.abort():(O.data=O.data[0],F(O,D))))}),this.parse=function(P,I,Q){var H=v.quoteChar||'"',H=(v.newline||(v.newline=this.guessLineEndings(P,H)),_=!1,v.delimiter?N(v.delimiter)&&(v.delimiter=v.delimiter(P),O.meta.delimiter=v.delimiter):((H=((K,ue,X,ne,B)=>{var G,V,ae,ke;B=B||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var je=0;je<B.length;je++){for(var ve,ze=B[je],Se=0,Ee=0,xe=0,De=(ae=void 0,new g({comments:ne,delimiter:ze,newline:ue,preview:10}).parse(K)),Fe=0;Fe<De.data.length;Fe++)X&&ee(De.data[Fe])?xe++:(ve=De.data[Fe].length,Ee+=ve,ae===void 0?ae=ve:0<ve&&(Se+=Math.abs(ve-ae),ae=ve));0<De.data.length&&(Ee/=De.data.length-xe),(V===void 0||Se<=V)&&(ke===void 0||ke<Ee)&&1.99<Ee&&(V=Se,G=ze,ke=Ee)}return{successful:!!(v.delimiter=G),bestDelimiter:G}})(P,v.newline,v.skipEmptyLines,v.comments,v.delimitersToGuess)).successful?v.delimiter=H.bestDelimiter:(_=!0,v.delimiter=u.DefaultDelimiter),O.meta.delimiter=v.delimiter),R(v));return v.preview&&v.header&&H.preview++,y=P,k=new g(H),O=k.parse(y,I,Q),$(),L?{meta:{paused:!0}}:O||{meta:{paused:!1}}},this.paused=function(){return L},this.pause=function(){L=!0,k.abort(),y=N(v.chunk)?"":y.substring(k.getCharIndex())},this.resume=function(){D.streamer._halted?(L=!1,D.streamer.parseChunk(y,!0)):setTimeout(D.resume,3)},this.aborted=function(){return T},this.abort=function(){T=!0,k.abort(),O.meta.aborted=!0,N(v.complete)&&v.complete(O),y=""},this.guessLineEndings=function(K,H){K=K.substring(0,1048576);var H=new RegExp(C(H)+"([^]*?)"+C(H),"gm"),Q=(K=K.replace(H,"")).split("\r"),H=K.split(`
`),K=1<H.length&&H[0].length<Q[0].length;if(Q.length===1||K)return`
`;for(var ue=0,X=0;X<Q.length;X++)Q[X][0]===`
`&&ue++;return ue>=Q.length/2?`\r
`:"\r"}}function C(v){return v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(v){var y=(v=v||{}).delimiter,k=v.newline,_=v.comments,F=v.step,q=v.preview,te=v.fastMode,W=null,Y=!1,D=v.quoteChar==null?'"':v.quoteChar,E=D;if(v.escapeChar!==void 0&&(E=v.escapeChar),(typeof y!="string"||-1<u.BAD_DELIMITERS.indexOf(y))&&(y=","),_===y)throw new Error("Comment character same as delimiter");_===!0?_="#":(typeof _!="string"||-1<u.BAD_DELIMITERS.indexOf(_))&&(_=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var z=0,L=!1;this.parse=function(T,A,O){if(typeof T!="string")throw new Error("Input must be a string");var ee=T.length,$=y.length,Z=k.length,ce=_.length,P=N(F),I=[],Q=[],H=[],K=z=0;if(!T)return Se();if(te||te!==!1&&T.indexOf(D)===-1){for(var ue=T.split(k),X=0;X<ue.length;X++){if(H=ue[X],z+=H.length,X!==ue.length-1)z+=k.length;else if(O)return Se();if(!_||H.substring(0,ce)!==_){if(P){if(I=[],ke(H.split(y)),Ee(),L)return Se()}else ke(H.split(y));if(q&&q<=X)return I=I.slice(0,q),Se(!0)}}return Se()}for(var ne=T.indexOf(y,z),B=T.indexOf(k,z),G=new RegExp(C(E)+C(D),"g"),V=T.indexOf(D,z);;)if(T[z]===D)for(V=z,z++;;){if((V=T.indexOf(D,V+1))===-1)return O||Q.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:I.length,index:z}),ve();if(V===ee-1)return ve(T.substring(z,V).replace(G,D));if(D===E&&T[V+1]===E)V++;else if(D===E||V===0||T[V-1]!==E){ne!==-1&&ne<V+1&&(ne=T.indexOf(y,V+1));var ae=je((B=B!==-1&&B<V+1?T.indexOf(k,V+1):B)===-1?ne:Math.min(ne,B));if(T.substr(V+1+ae,$)===y){H.push(T.substring(z,V).replace(G,D)),T[z=V+1+ae+$]!==D&&(V=T.indexOf(D,z)),ne=T.indexOf(y,z),B=T.indexOf(k,z);break}if(ae=je(B),T.substring(V+1+ae,V+1+ae+Z)===k){if(H.push(T.substring(z,V).replace(G,D)),ze(V+1+ae+Z),ne=T.indexOf(y,z),V=T.indexOf(D,z),P&&(Ee(),L))return Se();if(q&&I.length>=q)return Se(!0);break}Q.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:I.length,index:z}),V++}}else if(_&&H.length===0&&T.substring(z,z+ce)===_){if(B===-1)return Se();z=B+Z,B=T.indexOf(k,z),ne=T.indexOf(y,z)}else if(ne!==-1&&(ne<B||B===-1))H.push(T.substring(z,ne)),z=ne+$,ne=T.indexOf(y,z);else{if(B===-1)break;if(H.push(T.substring(z,B)),ze(B+Z),P&&(Ee(),L))return Se();if(q&&I.length>=q)return Se(!0)}return ve();function ke(xe){I.push(xe),K=z}function je(xe){var De=0;return De=xe!==-1&&(xe=T.substring(V+1,xe))&&xe.trim()===""?xe.length:De}function ve(xe){return O||(xe===void 0&&(xe=T.substring(z)),H.push(xe),z=ee,ke(H),P&&Ee()),Se()}function ze(xe){z=xe,ke(H),H=[],B=T.indexOf(k,z)}function Se(xe){if(v.header&&!A&&I.length&&!Y){var De=I[0],Fe=Object.create(null),ye=new Set(De);let _e=!1;for(let Ke=0;Ke<De.length;Ke++){let rt=De[Ke];if(Fe[rt=N(v.transformHeader)?v.transformHeader(rt,Ke):rt]){let Me,Le=Fe[rt];for(;Me=rt+"_"+Le,Le++,ye.has(Me););ye.add(Me),De[Ke]=Me,Fe[rt]++,_e=!0,(W=W===null?{}:W)[Me]=rt}else Fe[rt]=1,De[Ke]=rt;ye.add(rt)}_e&&console.warn("Duplicate headers found and renamed."),Y=!0}return{data:I,errors:Q,meta:{delimiter:y,linebreak:k,aborted:L,truncated:!!xe,cursor:K+(A||0),renamedHeaders:W}}}function Ee(){F(Se()),I=[],Q=[]}},this.abort=function(){L=!0},this.getCharIndex=function(){return z}}function m(v){var y=v.data,k=l[y.workerId],_=!1;if(y.error)k.userError(y.error,y.file);else if(y.results&&y.results.data){var F={abort:function(){_=!0,h(y.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:S,resume:S};if(N(k.userStep)){for(var q=0;q<y.results.data.length&&(k.userStep({data:y.results.data[q],errors:y.results.errors,meta:y.results.meta},F),!_);q++);delete y.results}else N(k.userChunk)&&(k.userChunk(y.results,F,y.file),delete y.results)}y.finished&&!_&&h(y.workerId,y.results)}function h(v,y){var k=l[v];N(k.userComplete)&&k.userComplete(y),k.terminate(),delete l[v]}function S(){throw new Error("Not implemented.")}function R(v){if(typeof v!="object"||v===null)return v;var y,k=Array.isArray(v)?[]:{};for(y in v)k[y]=R(v[y]);return k}function M(v,y){return function(){v.apply(y,arguments)}}function N(v){return typeof v=="function"}return u.parse=function(v,y){var k=(y=y||{}).dynamicTyping||!1;if(N(k)&&(y.dynamicTypingFunction=k,k={}),y.dynamicTyping=k,y.transform=!!N(y.transform)&&y.transform,!y.worker||!u.WORKERS_SUPPORTED)return k=null,u.NODE_STREAM_INPUT,typeof v=="string"?(v=(_=>_.charCodeAt(0)!==65279?_:_.slice(1))(v),k=new(y.download?x:w)(y)):v.readable===!0&&N(v.read)&&N(v.on)?k=new b(y):(r.File&&v instanceof File||v instanceof Object)&&(k=new p(y)),k.stream(v);(k=(()=>{var _;return!!u.WORKERS_SUPPORTED&&(_=(()=>{var F=r.URL||r.webkitURL||null,q=n.toString();return u.BLOB_URL||(u.BLOB_URL=F.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",q,")();"],{type:"text/javascript"})))})(),(_=new r.Worker(_)).onmessage=m,_.id=c++,l[_.id]=_)})()).userStep=y.step,k.userChunk=y.chunk,k.userComplete=y.complete,k.userError=y.error,y.step=N(y.step),y.chunk=N(y.chunk),y.complete=N(y.complete),y.error=N(y.error),delete y.worker,k.postMessage({input:v,config:y,workerId:k.id})},u.unparse=function(v,y){var k=!1,_=!0,F=",",q=`\r
`,te='"',W=te+te,Y=!1,D=null,E=!1,z=((()=>{if(typeof y=="object"){if(typeof y.delimiter!="string"||u.BAD_DELIMITERS.filter(function(A){return y.delimiter.indexOf(A)!==-1}).length||(F=y.delimiter),typeof y.quotes!="boolean"&&typeof y.quotes!="function"&&!Array.isArray(y.quotes)||(k=y.quotes),typeof y.skipEmptyLines!="boolean"&&typeof y.skipEmptyLines!="string"||(Y=y.skipEmptyLines),typeof y.newline=="string"&&(q=y.newline),typeof y.quoteChar=="string"&&(te=y.quoteChar),typeof y.header=="boolean"&&(_=y.header),Array.isArray(y.columns)){if(y.columns.length===0)throw new Error("Option columns is empty");D=y.columns}y.escapeChar!==void 0&&(W=y.escapeChar+te),y.escapeFormulae instanceof RegExp?E=y.escapeFormulae:typeof y.escapeFormulae=="boolean"&&y.escapeFormulae&&(E=/^[=+\-@\t\r].*$/)}})(),new RegExp(C(te),"g"));if(typeof v=="string"&&(v=JSON.parse(v)),Array.isArray(v)){if(!v.length||Array.isArray(v[0]))return L(null,v,Y);if(typeof v[0]=="object")return L(D||Object.keys(v[0]),v,Y)}else if(typeof v=="object")return typeof v.data=="string"&&(v.data=JSON.parse(v.data)),Array.isArray(v.data)&&(v.fields||(v.fields=v.meta&&v.meta.fields||D),v.fields||(v.fields=Array.isArray(v.data[0])?v.fields:typeof v.data[0]=="object"?Object.keys(v.data[0]):[]),Array.isArray(v.data[0])||typeof v.data[0]=="object"||(v.data=[v.data])),L(v.fields||[],v.data||[],Y);throw new Error("Unable to serialize unrecognized input");function L(A,O,ee){var $="",Z=(typeof A=="string"&&(A=JSON.parse(A)),typeof O=="string"&&(O=JSON.parse(O)),Array.isArray(A)&&0<A.length),ce=!Array.isArray(O[0]);if(Z&&_){for(var P=0;P<A.length;P++)0<P&&($+=F),$+=T(A[P],P);0<O.length&&($+=q)}for(var I=0;I<O.length;I++){var Q=(Z?A:O[I]).length,H=!1,K=Z?Object.keys(O[I]).length===0:O[I].length===0;if(ee&&!Z&&(H=ee==="greedy"?O[I].join("").trim()==="":O[I].length===1&&O[I][0].length===0),ee==="greedy"&&Z){for(var ue=[],X=0;X<Q;X++){var ne=ce?A[X]:X;ue.push(O[I][ne])}H=ue.join("").trim()===""}if(!H){for(var B=0;B<Q;B++){0<B&&!K&&($+=F);var G=Z&&ce?A[B]:B;$+=T(O[I][G],B)}I<O.length-1&&(!ee||0<Q&&!K)&&($+=q)}}return $}function T(A,O){var ee,$;return A==null?"":A.constructor===Date?JSON.stringify(A).slice(1,25):($=!1,E&&typeof A=="string"&&E.test(A)&&(A="'"+A,$=!0),ee=A.toString().replace(z,W),($=$||k===!0||typeof k=="function"&&k(A,O)||Array.isArray(k)&&k[O]||((Z,ce)=>{for(var P=0;P<ce.length;P++)if(-1<Z.indexOf(ce[P]))return!0;return!1})(ee,u.BAD_DELIMITERS)||-1<ee.indexOf(F)||ee.charAt(0)===" "||ee.charAt(ee.length-1)===" ")?te+ee+te:ee)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!o&&!!r.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=g,u.ParserHandle=j,u.NetworkStreamer=x,u.FileStreamer=p,u.StringStreamer=w,u.ReadableStreamStreamer=b,r.jQuery&&((i=r.jQuery).fn.parse=function(v){var y=v.config||{},k=[];return this.each(function(q){if(!(i(this).prop("tagName").toUpperCase()==="INPUT"&&i(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var te=0;te<this.files.length;te++)k.push({file:this.files[te],inputElem:this,instanceConfig:i.extend({},y)})}),_(),this;function _(){if(k.length===0)N(v.complete)&&v.complete();else{var q,te,W,Y,D=k[0];if(N(v.before)){var E=v.before(D.file,D.inputElem);if(typeof E=="object"){if(E.action==="abort")return q="AbortError",te=D.file,W=D.inputElem,Y=E.reason,void(N(v.error)&&v.error({name:q},te,W,Y));if(E.action==="skip")return void F();typeof E.config=="object"&&(D.instanceConfig=i.extend(D.instanceConfig,E.config))}else if(E==="skip")return void F()}var z=D.instanceConfig.complete;D.instanceConfig.complete=function(L){N(z)&&z(L,D.file,D.inputElem),F()},u.parse(D.file,D.instanceConfig)}}function F(){k.splice(0,1),_()}}),a&&(r.onmessage=function(v){v=v.data,u.WORKER_ID===void 0&&v&&(u.WORKER_ID=v.workerId),typeof v.input=="string"?r.postMessage({workerId:u.WORKER_ID,results:u.parse(v.input,v.config),finished:!0}):(r.File&&v.input instanceof File||v.input instanceof Object)&&(v=u.parse(v.input,v.config))&&r.postMessage({workerId:u.WORKER_ID,results:v,finished:!0})}),(x.prototype=Object.create(f.prototype)).constructor=x,(p.prototype=Object.create(f.prototype)).constructor=p,(w.prototype=Object.create(w.prototype)).constructor=w,(b.prototype=Object.create(f.prototype)).constructor=b,u})})(o0);var Nx=o0.exports;const Bs=Pu(Nx);function Vl({startRect:e,targetRef:t,count:n=12,onDone:r}){return d.useEffect(()=>{const i=t==null?void 0:t.current;if(!e||!i){r==null||r();return}const o=i.getBoundingClientRect(),a=document.createElement("div");a.style.position="fixed",a.style.inset="0",a.style.pointerEvents="none",a.style.zIndex="9999",document.body.appendChild(a);const l=o.left+o.width/2,c=o.top+o.height/2,u=e.left+e.width/2,f=e.top+e.height/2,x=200;let p=0;function w(b){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const C=u,g=f,m=l,h=c;j.style.transform=`translate(${C}px, ${g}px) scale(1)`,a.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${x}ms cubic-bezier(.2,.8,.2,1), opacity ${x}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${m}px, ${h}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),p+=1,p===n&&(a.remove(),r==null||r())},x+50)}for(let b=0;b<n;b++)setTimeout(()=>w(),b*60);return()=>{try{a.remove()}catch{}}},[e,t,n,r]),null}const it={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},mu=e=>Math.floor(e/it.XP_PER_LEVEL)+1,Sx=e=>{const t=e%it.XP_PER_LEVEL;return{current:t,required:it.XP_PER_LEVEL,percentage:t/it.XP_PER_LEVEL*100}};function Cx({player:e,size:t="normal",showLevel:n=!0,showName:r=!0}){const i=it.AVATARS.find(a=>a.id===e.avatar)||it.AVATARS[0],o={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:`${o[t]} rounded-full bg-gradient-to-br ${i.bgColor} flex items-center justify-center shadow-lg`,children:s.jsx("span",{children:i.emoji})}),n&&s.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),r&&s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-sm",children:e.name}),s.jsx("div",{className:"text-xs text-base-muted",children:i.name})]})]})}function Ex({current:e,required:t,level:n,animate:r=!0}){const[i,o]=d.useState(0),a=e/t*100;return d.useEffect(()=>{if(r){const l=setTimeout(()=>{o(a)},100);return()=>clearTimeout(l)}else o(a)},[a,r]),s.jsxs("div",{className:"w-full",children:[s.jsxs("div",{className:"flex justify-between items-center mb-1",children:[s.jsxs("span",{className:"text-xs font-medium",children:["Level ",n]}),s.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),s.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${i}%`},children:s.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}function _x({current:e,max:t=it.MAX_ENERGY,regenAt:n}){const[r,i]=d.useState("");d.useEffect(()=>{if(n&&e<t){const a=()=>{const c=Date.now(),u=Math.max(0,n-c),f=Math.floor(u/6e4),x=Math.floor(u%6e4/1e3);i(`${f}:${x.toString().padStart(2,"0")}`)};a();const l=setInterval(a,1e3);return()=>clearInterval(l)}},[n,e,t]);const o=Array.from({length:t},(a,l)=>l<e);return s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("div",{className:"flex gap-0.5",children:o.map((a,l)=>s.jsx("span",{className:`text-lg transition-all duration-300 ${a?"text-red-500 scale-110":"text-gray-600 scale-90"}`,children:a?"❤️":"🖤"},l))}),e<t&&r&&s.jsxs("span",{className:"text-xs text-base-muted ml-2",children:["+1 in ",r]})]})}const a0=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],l0=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],c0=[...a0.filter(e=>e.slug!=="more"),...l0];function Rx({onClick:e}){return s.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:e,children:[s.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),s.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),s.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),s.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),s.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]})}function Px({actions:e}){return s.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,n)=>s.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[s.jsx("div",{className:"text-2xl",children:t.icon}),s.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},n))})}function Tx({categories:e,onCategorySelect:t}){return s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),s.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(n=>s.jsxs("button",{onClick:()=>t(n),className:`bg-gradient-to-br ${n.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[s.jsx("div",{className:"text-3xl",children:n.icon}),s.jsx("div",{className:"text-xs font-bold text-white text-center",children:n.name}),n.questions>0&&s.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[n.questions," Qs"]})]},n.name))})]})}function zx({onClick:e,isPulsing:t}){return s.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-medium",children:"Practice Mode"}),s.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),s.jsx("div",{className:"text-xl",children:"→"})]})}function Mx({dailyQ:e,isFlipped:t,picked:n,onAnswer:r,dailyCompleted:i,DAILY_Q_COINS:o,DAILY_Q_XP:a}){return i?s.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"text-3xl",children:"✅"}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}):e?s.jsx("div",{className:"flip-card mb-6",children:s.jsxs("div",{className:`flip-card-inner ${t?"flipped":""}`,children:[s.jsx("div",{className:"flip-card-front",children:s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),s.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",o," coins +",a," XP"]})]}),s.jsx("p",{className:"text-sm mb-4 text-base-muted",children:e.prompt}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.options.map((l,c)=>{const u=c===e.answerIndex,f=n===c,x=n!==null;return s.jsx("button",{onClick:p=>r(c,p),disabled:n!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${x?u?"border-green-500 bg-green-500/20":f?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${n!==null?"cursor-not-allowed":"cursor-pointer"}`,children:l},c)})})]})}),s.jsx("div",{className:"flip-card-back absolute inset-0",children:s.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[s.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),s.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),s.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",o," coins & ",a," XP!"]}),s.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}):null}function Lx({show:e,onClose:t,player:n,changeAvatar:r,GAME_CONSTANTS:i}){return e?s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:o=>{o.target===o.currentTarget&&t()},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:o=>o.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),s.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-4",children:i.AVATARS.map(o=>{const a=!n.unlockedAvatars.includes(o.id),l=n.avatar===o.id;return s.jsxs("button",{onClick:()=>{a||(r(o.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":a?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:a,children:[s.jsx("div",{className:`text-4xl mb-2 ${a?"grayscale":""}`,children:o.emoji}),s.jsx("div",{className:"text-sm font-medium",children:o.name}),a&&s.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",o.unlockLevel]}),l&&s.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},o.id)})})]})}):null}function Fx({show:e,onClose:t,categories:n,onCategorySelect:r}){return e?s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:i=>i.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),s.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:n.map(i=>s.jsxs("button",{onClick:()=>{t(),r(i)},className:`bg-gradient-to-br ${i.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[s.jsx("div",{className:"text-3xl",children:i.icon}),s.jsx("div",{className:"text-sm font-bold text-white",children:i.name}),s.jsxs("div",{className:"text-xs text-white/80",children:[i.questions," questions"]})]},i.name))})]})}):null}function Ix({show:e,onClose:t,coins:n,onNavigateToPlay:r}){return e?s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:i=>i.stopPropagation(),children:[s.jsx("div",{className:"absolute inset-0 opacity-10",children:s.jsx("div",{className:"magic-gradient h-full"})}),s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),s.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[n," Coins"]})]})]}),s.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),s.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),s.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),s.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),s.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[s.jsx("span",{children:"Next reward"}),s.jsxs("span",{children:[100-n%100," coins to go"]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${n%100}%`}})})]}),s.jsx("button",{onClick:r,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function Dx({show:e,onClose:t,selectedCategory:n,difficulty:r,setDifficulty:i,count:o,setCount:a,timer:l,setTimer:c,onStart:u}){return!e||!n?null:s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:f=>f.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),s.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:n.icon}),s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium",children:["Category: ",n.name]}),s.jsxs("div",{className:"text-xs text-base-muted",children:[n.questions," questions available"]})]})]})}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>s.jsx("button",{onClick:()=>i(f),className:`py-2 rounded-xl border ${r===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>s.jsx("button",{onClick:()=>a(f),className:`py-2 rounded-xl border ${o===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),s.jsx("input",{type:"number",value:l,onChange:f=>c(Number(f.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function Ax({show:e,onClose:t,allCategories:n,category:r,setCategory:i,difficulty:o,setDifficulty:a,count:l,setCount:c,onStart:u}){return e?s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:f=>f.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),s.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),s.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:n.map(f=>s.jsxs("button",{onClick:()=>i(f.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${r===f.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[s.jsx("div",{className:"text-xl",children:f.icon}),s.jsx("div",{className:"text-[10px] text-center",children:f.name})]},f.slug))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>s.jsx("button",{onClick:()=>a(f),className:`py-2 rounded-xl border ${o===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>s.jsx("button",{onClick:()=>c(f),className:`py-2 rounded-xl border ${l===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}const pu=(e=new Date)=>e.toLocaleDateString("en-CA"),hu=(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},Ox=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function xu(){const e=yt(),{player:t,addXP:n,addCoins:r,levelProgress:i,useEnergy:o,changeAvatar:a}=bn(),[l]=It("/sounds/correct.mp3",{volume:.6}),[c]=It("/sounds/wrong.mp3",{volume:.6}),[u]=It("/sounds/coin.mp3",{volume:.75}),[f]=It("/sounds/levelup.mp3",{volume:.8}),x=d.useRef(t.level),p=d.useRef(null);d.useEffect(()=>{const ve=()=>{};return window.addEventListener("focus",ve),()=>window.removeEventListener("focus",ve)},[]),d.useEffect(()=>{t.level>x.current&&(f==null||f(),x.current=t.level)},[t.level,f]);const[w,b]=d.useState(!1),[j,C]=d.useState(null),[g,m]=d.useState(!1),[h,S]=d.useState("medium"),[R,M]=d.useState(10),[N,v]=d.useState(45),[y,k]=d.useState(!1),[_,F]=d.useState(!1),[q,te]=d.useState(null),[W,Y]=d.useState(null),[D,E]=d.useState(!1),[z,L]=d.useState(!1),[T,A]=d.useState(null),O=10,ee=5,[$,Z]=d.useState(!1),[ce,P]=d.useState(!1),[I,Q]=d.useState("general-knowledge"),[H,K]=d.useState("medium"),[ue,X]=d.useState(10),[ne,B]=d.useState(()=>hu("dq_daily_log",{})[pu()]===!0);d.useEffect(()=>{const ve=sessionStorage.getItem("homeScrollPosition");ve&&window.scrollTo(0,parseInt(ve));const ze=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",ze),()=>window.removeEventListener("scroll",ze)},[]),d.useEffect(()=>{if(ne)return;(async()=>{var ze;try{const Se=await fetch("/data/quiz_questions_bank.csv").then(Fe=>Fe.text()),{data:Ee}=Bs.parse(Se,{header:!0,skipEmptyLines:!0});if(!Ee.length)throw new Error("empty");const xe=Ee[Math.floor(Math.random()*Ee.length)],De=[xe.option1,xe.option2,xe.option3,xe.option4].filter(Boolean);te({category:xe.category||"General",prompt:xe.question,options:De,answerIndex:["A","B","C","D"].indexOf((ze=xe.answer)==null?void 0:ze.toUpperCase())||0})}catch{te({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[ne]);const G=(ve,ze)=>{if(W!==null)return;Y(ve);const Se=ve===q.answerIndex;if(Se){if(l(),ze!=null&&ze.currentTarget&&p.current){const Ee=ze.currentTarget.getBoundingClientRect();u(),A({startRect:Ee,count:10,amount:ee})}}else c();setTimeout(()=>{if(L(!0),E(!0),Se){const Ee=pu();Ox("dq_daily_log",{...hu("dq_daily_log",{}),[Ee]:!0}),B(!0);const xe=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(xe+1))}},600)},V=ve=>{if(ve.slug==="more"){b(!0);return}C(ve),m(!0)},ae=()=>{console.log("Starting quiz with energy:",t.energy),console.log("Category:",j.slug),e(`/quiz/${j.slug}`,{state:{mode:"quiz",difficulty:h,count:R,timer:{type:"per_q",seconds:N},source:"adventure"}}),m(!1)},ke=()=>{console.log("Starting practice, category:",I),e(`/quiz/${I}`,{state:{mode:"practice",difficulty:H,count:ue,timer:{type:"off",seconds:0}}}),P(!1)},je=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>e("/profile/quests")},{icon:"🔥",label:`${t.bestCombo} Best`,color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>e("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>e("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>e("/profile/rewards")}];return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[s.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),s.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[s.jsx("style",{jsx:!0,children:`
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
        `}),T&&s.jsx(Vl,{startRect:T.startRect,targetRef:p,count:T.count,onDone:()=>{$||(n(O),r(T.amount),Z(!0)),A(null)}}),s.jsxs("div",{className:"mb-8",children:[s.jsxs("div",{className:"flex justify-between items-start mb-4",children:[s.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>F(!0),children:s.jsx(Cx,{player:t,size:"normal",showLevel:!0,showName:!0})}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("button",{ref:p,onClick:()=>k(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[s.jsx("span",{className:"text-lg",children:"🪙"}),s.jsx("span",{className:"font-bold",children:t.coins})]}),s.jsx("button",{onClick:()=>e("/profile"),className:"w-10 h-10 rounded-full bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"⚙️"})]}),s.jsx(_x,{current:t.energy,regenAt:t.energyRegenAt})]})]}),s.jsx(Ex,{current:i.current,required:i.required,level:t.level,animate:!0})]}),s.jsx(Rx,{onClick:()=>e("/play")}),s.jsx(Px,{actions:je}),s.jsx(Mx,{dailyQ:q,isFlipped:z,picked:W,onAnswer:G,dailyCompleted:ne,DAILY_Q_COINS:ee,DAILY_Q_XP:O}),s.jsx(Tx,{categories:a0,onCategorySelect:V}),s.jsx(zx,{onClick:()=>P(!0),isPulsing:t.energy<10}),s.jsx(Lx,{show:_,onClose:()=>F(!1),player:t,changeAvatar:a,GAME_CONSTANTS:it}),s.jsx(Dx,{show:g,onClose:()=>m(!1),selectedCategory:j,difficulty:h,setDifficulty:S,count:R,setCount:M,timer:N,setTimer:v,onStart:ae}),s.jsx(Ax,{show:ce,onClose:()=>P(!1),allCategories:c0,category:I,setCategory:Q,difficulty:H,setDifficulty:K,count:ue,setCount:X,onStart:ke}),s.jsx(Fx,{show:w,onClose:()=>b(!1),categories:l0,onCategorySelect:V}),s.jsx(Ix,{show:y,onClose:()=>k(!1),coins:t.coins,onNavigateToPlay:()=>{k(!1),e("/play")}})]})]})}var Ei={linear:function(e,t,n,r){var i=n-t;return i*e/r+t},easeInQuad:function(e,t,n,r){var i=n-t;return i*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){var i=n-t;return-i*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e+t},easeOutCubic:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,n,r){var i=n-t;return-i*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,r){var i=n-t;return-i*Math.cos(e/r*(Math.PI/2))+i+t},easeOutSine:function(e,t,n,r){var i=n-t;return i*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,n,r){var i=n-t;return-i/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,n,r){var i=n-t;return e==0?t:i*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(e,t,n,r){var i=n-t;return e==r?t+i:i*(-Math.pow(2,-10*e/r)+1)+t},easeInOutExpo:function(e,t,n,r){var i=n-t;return e===0?t:e===r?t+i:(e/=r/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,n,r){var i=n-t;return-i*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(e,t,n,r){var i=n-t;return i*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t)},easeOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),o*Math.pow(2,-10*e)*Math.sin((e*r-l)*(2*Math.PI)/a)+i+t)},easeInOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r/2)===2?t+i:(a||(a=r*(.3*1.5)),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a)*.5+i+t)},easeInBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*(e/=r)*e*((i+1)*e-i)+t},easeOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*((e=e/r-1)*e*((i+1)*e+i)+1)+t},easeInOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),(e/=r/2)<1?o/2*(e*e*(((i*=1.525)+1)*e-i))+t:o/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t},easeInBounce:function(e,t,n,r){var i=n-t,o;return o=Ei.easeOutBounce(r-e,0,i,r),i-o+t},easeOutBounce:function(e,t,n,r){var i=n-t;return(e/=r)<1/2.75?i*(7.5625*e*e)+t:e<2/2.75?i*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?i*(7.5625*(e-=2.25/2.75)*e+.9375)+t:i*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,n,r){var i=n-t,o;return e<r/2?(o=Ei.easeInBounce(e*2,0,i,r),o*.5+t):(o=Ei.easeOutBounce(e*2-r,0,i,r),o*.5+i*.5+t)}},$x=Ei;function Bx(e){return e*Math.PI/180}function Ct(e,t){return e+Math.random()*(t-e)}function Ux(e,t){return Math.floor(e+Math.random()*(t-e+1))}var hs;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(hs||(hs={}));var En;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(En||(En={}));const qx=1e3/60;class Wx{constructor(t,n,r,i){this.getOptions=n;const{colors:o,initialVelocityX:a,initialVelocityY:l}=this.getOptions();this.context=t,this.x=r,this.y=i,this.w=Ct(5,20),this.h=Ct(5,20),this.radius=Ct(5,10),this.vx=typeof a=="number"?Ct(-a,a):Ct(a.min,a.max),this.vy=typeof l=="number"?Ct(-l,0):Ct(l.min,l.max),this.shape=Ux(0,2),this.angle=Bx(Ct(0,360)),this.angularSpin=Ct(-.2,.2),this.color=o[Math.floor(Math.random()*o.length)],this.rotateY=Ct(0,1),this.rotationDirection=Ct(0,1)?En.Positive:En.Negative}update(t){const{gravity:n,wind:r,friction:i,opacity:o,drawShape:a}=this.getOptions(),l=t/qx;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=n*l,this.vx+=r*l,this.vx*=i**l,this.vy*=i**l,this.rotateY>=1&&this.rotationDirection===En.Positive?this.rotationDirection=En.Negative:this.rotateY<=-1&&this.rotationDirection===En.Negative&&(this.rotationDirection=En.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,a&&typeof a=="function")a.call(this,this.context);else switch(this.shape){case hs.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case hs.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case hs.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class Qx{constructor(t,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=i=>{this.particles.splice(i,1)},this.getParticle=()=>{const i=Ct(this.x,this.w+this.x),o=Ct(this.y,this.h+this.y);return new Wx(this.context,this.getOptions,i,o)},this.animate=i=>{const{canvas:o,context:a,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:f,numberOfPieces:x,debug:p,tweenFunction:w,tweenDuration:b}=this.getOptions();if(!u)return!1;const j=this.particles.length,C=f?j:l;if(C<x){c!==x&&(this.tweenProgress=0,this.tweenFrom=C,this.lastNumberOfPieces=x),this.tweenProgress=Math.min(b,Math.max(0,this.tweenProgress+i));const g=w(this.tweenProgress,this.tweenFrom,x,b),m=Math.round(g-C);for(let h=0;h<m;h++)this.particles.push(this.getParticle());this.particlesGenerated+=m}p&&(a.font="12px sans-serif",a.fillStyle="#333",a.textAlign="right",a.fillText(`Particles: ${j}`,o.width-10,o.height-20));for(let g=this.particles.length-1;g>=0;g--){const m=this.particles[g];m.update(i),(m.y>o.height||m.y<-100||m.x>o.width+100||m.x<-100)&&(f&&C<=x?this.particles[g]=this.getParticle():this.removeParticleAt(g))}return j>0||C<x},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.getOptions=n}}const Gl={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:$x.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class Hx{constructor(t,n){this.lastFrameTime=0,this.setOptionsWithDefaults=i=>{const o={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...o,...Gl,...i},Object.assign(this,i.confettiSource)},this.update=(i=0)=>{const{options:{run:o,onConfettiComplete:a,frameRate:l},canvas:c,context:u}=this,f=Math.min(i-this.lastFrameTime,50);if(l&&f<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=i-(l?f%l:0),o&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(f)?this.rafId=requestAnimationFrame(this.update):(a&&typeof a=="function"&&this.generator.particlesGenerated>0&&a.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.generator=new Qx(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(t){var i,o;const n=(i=this._options)==null?void 0:i.run,r=(o=this._options)==null?void 0:o.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&r===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&n===!1&&this.update()}}const Yx=pt.createRef();class Kl extends pt.Component{constructor(t){super(t),this.canvas=pt.createRef(),this.canvas=t.canvasRef||Yx}componentDidMount(){if(this.canvas.current){const t=Vo(this.props)[0];this.confetti=new Hx(this.canvas.current,t)}}componentDidUpdate(){const t=Vo(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,n]=Vo(this.props),r={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return s.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...n,style:r})}}Kl.defaultProps={...Gl};Kl.displayName="ReactConfetti";function Vo(e){const t={},n={},r={},i=[...Object.keys(Gl),"confettiSource","drawShape","onConfettiComplete","frameRate"],o=["canvasRef"];for(const a in e){const l=e[a];i.includes(a)?t[a]=l:o.includes(a)?o[a]=l:r[a]=l}return[t,r,n]}const u0=pt.forwardRef((e,t)=>s.jsx(Kl,{canvasRef:t,...e})),Vx=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Qt=Vx.slice(0,6),rn=360/Qt.length,d0={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},Zt={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},jn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},en={get:(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}},Zn=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),gu=e=>(e%360+360)%360,Xl=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},Er=(e,t=.7)=>{try{const n=new Audio(e);n.volume=t,n.play()}catch{}};function vu({onModeSelect:e,onNavigateHome:t}){return s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center mb-8",children:[s.jsx("button",{onClick:t,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"}),s.jsx("h1",{className:"flex-1 text-center text-xl font-bold mb-12",children:"Choose a quiz mode"})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[Qt.map((n,r)=>{const i=r*rn,o=i+rn,a=rn>180?1:0,l=Math.PI*i/180,c=Math.PI*o/180,u=50+40*Math.cos(l),f=50-40*Math.sin(l),x=50+40*Math.cos(c),p=50-40*Math.sin(c);return s.jsx("path",{d:`M50,50 L${u},${f} A40,40 0 ${a} 0 ${x},${p} Z`,fill:n.color,stroke:"white",strokeWidth:"0.5"},r)}),s.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),s.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),s.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),s.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),s.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),s.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),s.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10 ",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💀"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-red-400 to-pink-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💰"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TREASURE MINE"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"📱"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function Gx({run:e,coins:t,xp:n,level:r,ownedCharacters:i,onSpin:o,onBack:a,spinning:l,angle:c,transition:u,result:f,showCallout:x,glowColor:p,soundOn:w,setSoundOn:b,showSparkle:j,pulseIdx:C,nextProgressIdx:g,pendingProgressIdx:m,coinBurstTick:h,lastAnswerWasCorrect:S}){const R=100*r*(r-1),[M,N]=d.useState(!1),v=d.useRef(0),y=d.useRef(null),k=d.useRef(null),[_,F]=d.useState({dx:110,dy:-260});d.useEffect(()=>{if(m==null)return;N(!1);const W=setTimeout(()=>N(!0),30);return()=>clearTimeout(W)},[m]);const[q,te]=d.useState(!1);return d.useEffect(()=>{var Y,D,E,z;if(!h||!S||h===v.current)return;v.current=h;try{const L=(D=(Y=k==null?void 0:k.current)==null?void 0:Y.getBoundingClientRect)==null?void 0:D.call(Y),T=(z=(E=y==null?void 0:y.current)==null?void 0:E.getBoundingClientRect)==null?void 0:z.call(E);if(L&&T){const A=L.left+L.width/2,O=L.top+L.height/2,ee=T.left+T.width/2,$=T.top+T.height/2;F({dx:ee-A,dy:$-O})}}catch{}w&&Er("/sounds/coin.mp3",.7),te(!0);const W=setTimeout(()=>te(!1),700);return()=>clearTimeout(W)},[h,w]),s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-8",children:[s.jsx("button",{onClick:a,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[s.jsxs("div",{className:"text-[11px]",children:["Lvl ",r," • ",n,"/",R]}),s.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:s.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(n/R,1)*100}%`}})})]}),s.jsxs("button",{ref:y,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),s.jsx("button",{onClick:()=>b(!w),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:s.jsx("span",{className:"text-lg",children:w?"🔊":"🔇"})})]}),i.length>0&&s.jsx("div",{className:"flex justify-center mb-6",children:s.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:i.map(W=>{const Y=Qt.find(E=>Zn(E.name)===W),D=d0[W];return s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:s.jsx("span",{className:"text-sm",children:Y==null?void 0:Y.icon})}),s.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:D})]},W)})})}),s.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:s.jsxs("div",{className:"w-80 max-w-full",children:[s.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),s.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(W=>{const Y=["#FF9800","#FFC107","#cadd75ff"],D=!!e.progress[W];return s.jsxs("div",{className:"relative h-full bg-white/10",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:D?W===m?M?"100%":"0%":g===W&&m==null?"0%":"100%":"0%",backgroundColor:Y[W],transition:W===m?"width 1200ms ease-out":"none"}}),C===W&&s.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:s.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),j===W&&s.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},W)})},e.qIndex)]})}),s.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:s.jsxs("div",{ref:k,className:"relative w-96 h-96 rounded-full select-none",children:[p&&s.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${p}40, 0 0 40px 12px ${p}60`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Qt.map((W,Y)=>{const D=Y*rn,E=D+rn,z=rn>180?1:0,L=Math.PI*D/180,T=Math.PI*E/180,A=50+45*Math.cos(L),O=50-45*Math.sin(L),ee=50+45*Math.cos(T),$=50-45*Math.sin(T),Z=D+rn/2,ce=28,P=50+ce*Math.cos(Z*Math.PI/180),I=50-ce*Math.sin(Z*Math.PI/180);return s.jsxs("g",{children:[s.jsx("path",{d:`M50,50 L${A},${O} A45,45 0 ${z} 0 ${ee},${$} Z`,fill:W.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),s.jsx("text",{x:P,y:I,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:W.icon})]},Y)}),s.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),s.jsx("button",{onClick:o,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:s.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:s.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),x&&f&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:s.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[s.jsx("span",{className:"mr-2",children:f.cat.icon}),f.cat.name]})}),q&&s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(W=>s.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${W*80}ms forwards`,"--coin-dx":`${_.dx}px`,"--coin-dy":`${_.dy}px`},children:s.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},W))]})]})}),s.jsx("div",{className:"text-center",children:s.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}function yu({category:e,onComplete:t,isBonus:n=!1,soundOn:r=!0}){return d.useEffect(()=>{r&&Er("/sounds/flush.mp3",.8);const i=setTimeout(t,1e3);return Xl([50]),()=>clearTimeout(i)},[t,r]),n?s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[s.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),s.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:s.jsx("span",{className:"text-6xl",children:"⭐"})})]}):s.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:s.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[s.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[s.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),s.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),s.jsxs("div",{className:"relative z-10 text-center",children:[s.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),s.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:s.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function Kx({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:s.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function bu({question:e,category:t,onAnswer:n,run:r,timeLeft:i,usedLifelines:o,onUseLifeline:a,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:f,onTimeUpBackToWheel:x,soundOn:p}){const[w,b]=d.useState(null),[j,C]=d.useState(!1),[g,m]=d.useState(!1),h=d.useRef(null),S=d.useRef(null),[R,M]=d.useState(null);d.useEffect(()=>{if(!j||!h.current)return;const y=h.current.getBoundingClientRect();M({x:y.left,y:y.top-300,w:y.width,h:8})},[j]);const N=y=>{if(j)return;b(y),C(!0);const k=y===e.correctIndex;Xl(k?[50,30,50]:[200]),p&&Er(k?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{n(k,null)},1500)},v=w===e.correctIndex;return s.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:s.jsxs("div",{ref:S,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsx("div",{className:"mb-4",children:s.jsx("button",{onClick:()=>m(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),s.jsxs("div",{className:"text-center mb-6",children:[s.jsx("div",{className:`text-4xl font-black mb-2 ${i<=10?"text-red-400 animate-pulse":"text-white"}`,children:i}),s.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:s.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${i<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${i/30*100}%`}})})]}),s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),s.jsxs("div",{children:[s.jsx("div",{className:"text-lg font-bold",children:t.name}),s.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",r.qIndex+1,"/3"]})]})]}),s.jsx("h2",{ref:h,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),s.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((y,k)=>{const _=l.includes(k),F=w===k,q=k===e.correctIndex;let te="bg-white/10 border-white/20",W="opacity-100";return _?W="opacity-30":j&&F?te=q?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&q?te="bg-green-500/30 border-green-400":F&&(te="bg-white/20 border-white/40"),s.jsx("button",{onClick:()=>N(k),disabled:j||_,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${te} ${W} ${!j&&!_?"hover:bg-white/15 active:scale-98":""}`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+k)}),s.jsx("span",{className:"font-medium flex-1",children:y}),c&&s.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[k]),"%"]})]})},k)})}),!j&&s.jsxs("div",{className:"flex gap-4 mb-8",children:[s.jsx("button",{onClick:()=>a("fifty"),disabled:o.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),s.jsx("button",{onClick:()=>a("audience"),disabled:o.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&s.jsxs("div",{className:"relative text-center",children:[v&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:s.jsx(u0,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:R||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),s.jsx("button",{onClick:()=>n(v,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),f&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Time’s up"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),s.jsx("button",{onClick:x,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),g&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You’ll lose this question’s progress."}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),s.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Xx({onSelect:e}){return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[s.jsxs("header",{className:"text-center mb-12",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),s.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),s.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-6",children:Qt.map(t=>{const n=d0[Zn(t.name)];return s.jsxs("button",{onClick:()=>e(Zn(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[s.jsx("div",{className:"text-4xl mb-3",children:t.icon}),s.jsx("div",{className:"font-black text-lg mb-1",children:n}),s.jsx("div",{className:"text-sm opacity-75",children:t.name})]},Zn(t.name))})})]})})}function Jx(){const[e,t]=d.useState("modes"),n=yt(),r=Xt(),[i,o]=d.useState(()=>en.get(Zt.COINS,0)),[a,l]=d.useState(()=>en.get(Zt.XP,0)),[c,u]=d.useState(()=>en.get(Zt.LEVEL,1)),[f,x]=d.useState(()=>en.get(Zt.OWNED_CHARACTERS,[])),[p,w]=d.useState(()=>en.get(Zt.SOUND,!0)),[b,j]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[C,g]=d.useState([]),[m,h]=d.useState(null),[S,R]=d.useState(null),[M,N]=d.useState(30),[v,y]=d.useState([]),[k,_]=d.useState(null),[F,q]=d.useState(null),[te,W]=d.useState(!1),[Y,D]=d.useState(0),[E,z]=d.useState("none"),[L,T]=d.useState(!1),[A,O]=d.useState(null),[ee,$]=d.useState(!1),[Z,ce]=d.useState(null),[P,I]=d.useState(-1),[Q,H]=d.useState(0),[K,ue]=d.useState(null),[X,ne]=d.useState(null),[B,G]=d.useState(!1),[V,ae]=d.useState(null),[ke,je]=d.useState(-1),[ve,ze]=d.useState([!1,!1,!1]),[Se,Ee]=d.useState(!1),[xe,De]=d.useState(!1),Fe=d.useRef(null),ye=d.useRef(null),_e=d.useRef(null),Ke=d.useMemo(()=>{var oe;return((oe=window.matchMedia)==null?void 0:oe.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>{try{localStorage.setItem("qp_in_question",JSON.stringify(e==="question"))}catch{}return()=>{try{localStorage.removeItem("qp_in_question")}catch{}}},[e]),d.useEffect(()=>(rt(),Me(),()=>Le()),[]),d.useEffect(()=>en.set(Zt.COINS,i),[i]),d.useEffect(()=>en.set(Zt.XP,a),[a]),d.useEffect(()=>en.set(Zt.LEVEL,c),[c]),d.useEffect(()=>en.set(Zt.OWNED_CHARACTERS,f),[f]),d.useEffect(()=>en.set(Zt.SOUND,p),[p]),d.useEffect(()=>(e==="question"&&M>0&&!xe?Fe.current=setTimeout(()=>{N(oe=>{const me=oe-1;return me===10&&p&&Er("/sounds/tick.mp3",.8),me})},1e3):e==="question"&&M===0&&W(!0),()=>{Fe.current&&clearTimeout(Fe.current)}),[e,M,p,xe]),d.useEffect(()=>{if(e!=="wheel"||K==null)return;I(K),p&&Er("/sounds/progress.mp3",.6),je(K);const oe=setTimeout(()=>je(-1),900),me=setTimeout(()=>I(-1),900),le=setTimeout(()=>{V&&(V==="streakFlash"?t("streakFlash"):V==="characterPicker"?t("characterPicker"):(t("modes"),J()),ae(null)),ue(null)},1800);return()=>{clearTimeout(oe),clearTimeout(me),clearTimeout(le)}},[e,K,V,p,Se]),d.useEffect(()=>{e!=="wheel"||!Se||(H(oe=>oe+1),Ee(!1))},[e,Se]);const rt=async()=>{try{const me=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:le}=Bs.parse(me,{header:!0,skipEmptyLines:!0,transformHeader:ie=>ie.trim().toLowerCase()}),re=le.map((ie,be)=>{var lt;const fe=[ie.option1,ie.option2,ie.option3,ie.option4].map(Br=>(Br||"").trim()).filter(Boolean);if(fe.length<4)return null;let Ne={a:0,b:1,c:2,d:3}[(lt=ie.answer)==null?void 0:lt.toLowerCase()];return Ne===void 0&&(Ne=fe.findIndex(Br=>Br.toLowerCase()===(ie.answer||"").toLowerCase())),Ne===-1&&(Ne=0),{id:ie.id||`q_${be}`,prompt:(ie.question||"").trim(),options:fe,correctIndex:Ne,category:(ie.category||ie.subject||"general knowledge").trim(),difficulty:(ie.difficulty||"medium").toLowerCase(),explanation:(ie.explanation||"").trim()}}).filter(Boolean);g(re)}catch(oe){console.error("Failed to load questions:",oe),g([])}},Me=()=>{const oe=new Audio("/sounds/spin.mp3");oe.loop=!0,oe.volume=.6,ye.current=oe},Le=()=>{if(Fe.current&&clearTimeout(Fe.current),_e.current&&(clearTimeout(_e.current),_e.current=null),ye.current){try{ye.current.pause()}catch{}ye.current=null}},Xe=()=>{if(p&&ye.current){try{ye.current.currentTime=0,ye.current.play()}catch{}_e.current&&clearTimeout(_e.current),_e.current=setTimeout(()=>{ar()},2e3)}},ar=()=>{if(_e.current&&(clearTimeout(_e.current),_e.current=null),ye.current)try{ye.current.pause(),ye.current.currentTime=0}catch{}},J=()=>{j({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),ze([!1,!1,!1]),h(null),R(null),q(null),y([]),_(null),W(!1),H(0)},de=()=>{if(L)return;O(null),$(!1),ce(null),T(!0),Xe();const oe=Math.floor(Math.random()*Qt.length),me=Qt[oe],le=gu(Y),re=oe*rn+rn/2,ie=(Math.random()-.5)*(rn*.3),be=360-re+ie;let fe=gu(be-le);const Te=jn.FULL_TURNS*360+fe,Ne=Y+Te+jn.OVERSHOOT;z(`transform ${Ke?1e3:jn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),D(Ne),Xl([20,50,20]),setTimeout(()=>{z(`transform ${Ke?200:jn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),D(lt=>lt-jn.OVERSHOOT)},Ke?1e3:jn.DURATION),setTimeout(()=>{ar(),T(!1),O({cat:me,index:oe}),R(me),ce(me.color),$(!0),setTimeout(()=>{$(!1),t("interstitial")},1500),setTimeout(()=>ce(null),1e3)},(Ke?1e3:jn.DURATION)+(Ke?200:jn.SETTLE_DURATION)+100)},Re=()=>{const oe=C.filter(le=>{const re=le.category.toLowerCase(),ie=S.name.toLowerCase();return re.includes(ie)||ie.includes(re)});let me;oe.length>0?me=oe[Math.floor(Math.random()*oe.length)]:me=C[Math.floor(Math.random()*C.length)],me?(h(me),N(30),y([]),_(null),W(!1),De(!1),t("question")):t("wheel")},ge=(oe,me,le=!1)=>{if(!le){De(!0);return}const re=b.qIndex,ie=[...b.progress];ie[re]=!0;const be=[...ve];if(be[re]=!!oe,ze(be),j(fe=>({...fe,progress:ie,qIndex:fe.qIndex+1})),oe&&(o(fe=>fe+5),l(fe=>fe+1),Ee(!0)),ne(re),G(!!oe),re===2){const fe=be.every(Boolean);ae(fe?"streakFlash":"modes")}else ae(null);t("wheel")},Ye=oe=>{if(!(b.lifelines[oe]||!m)){if(j(me=>({...me,lifelines:{...me.lifelines,[oe]:!0}})),oe==="fifty"){const le=m.options.map((re,ie)=>ie).filter(re=>re!==m.correctIndex).slice(0,2);y(le)}else if(oe==="audience"){const me=40+Math.random()*25;let le=100-me;const re=[0,0,0,0];re[m.correctIndex]=Math.round(me);const ie=[0,1,2,3].filter(be=>be!==m.correctIndex);ie.forEach((be,fe)=>{if(fe===ie.length-1)re[be]=le;else{const Te=Math.floor(Math.random()*le);re[be]=Te,le-=Te}}),_(re)}}},pe=oe=>{q(oe),t("bonusInterstitial")},mt=oe=>{oe&&F&&(x(me=>[...new Set([...me,F])]),p&&Er("/sounds/coin.mp3",1)),setTimeout(()=>{t("modes"),J()},3e3)},Pe=oe=>{oe==="classic"&&(J(),t("wheel"))},Ue=()=>{window.location.href="/",console.log("Navigate to home")},St=()=>{t("modes"),J()},an=()=>{t("wheel")};switch(d.useEffect(()=>{if(e!=="wheel"||X==null)return;const me=setTimeout(()=>{ue(X),ne(null)},B?1800:0);return()=>clearTimeout(me)},[e,X,B]),d.useEffect(()=>{const oe=new URLSearchParams(r.search);(oe.get("view")==="modes"||oe.get("view")==="home")&&(J(),t("modes"),n("/play",{replace:!0}))},[r.search]),e){case"modes":return s.jsx(vu,{onModeSelect:Pe,onNavigateHome:Ue});case"wheel":return s.jsx(Gx,{run:b,coins:i,xp:a,level:c,ownedCharacters:f,onSpin:de,onBack:St,spinning:L,angle:Y,transition:E,result:A,showCallout:ee,glowColor:Z,soundOn:p,setSoundOn:w,showSparkle:P,pulseIdx:ke,coinBurstTick:Q,pendingProgressIdx:K,lastAnswerWasCorrect:B,nextProgressIdx:X});case"interstitial":return s.jsx(yu,{category:S,onComplete:Re,soundOn:p});case"streakFlash":return s.jsx(Kx,{onDone:()=>t("bonusInterstitial")});case"question":return s.jsx(bu,{question:m,category:S,onAnswer:ge,run:b,timeLeft:M,usedLifelines:b.lifelines,onUseLifeline:Ye,eliminatedOptions:v,audienceData:k,onBack:an,timeUp:te,onTimeUpBackToWheel:()=>{W(!1),t("wheel")},soundOn:p});case"characterPicker":return s.jsx(Xx,{onSelect:pe});case"bonusInterstitial":return s.jsx(yu,{category:Qt.find(oe=>Zn(oe.name)===F),onComplete:()=>t("bonusQuestion"),isBonus:!0,soundOn:p});case"bonusQuestion":if(!m){const oe=Qt.find(me=>Zn(me.name)===F);if(oe&&C.length>0){const me=C.filter(re=>{const ie=re.category.toLowerCase(),be=oe.name.toLowerCase();return ie.includes(be)||be.includes(ie)}),le=me.length>0?me[Math.floor(Math.random()*me.length)]:C[Math.floor(Math.random()*C.length)];h(le),N(30)}return s.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:s.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return s.jsx(bu,{question:m,category:Qt.find(oe=>Zn(oe.name)===F)||Qt[0],onAnswer:mt,run:{...b,lifelines:{fifty:!0,audience:!0}},timeLeft:M,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:()=>t("modes")});default:return s.jsx(vu,{onModeSelect:Pe,onNavigateHome:Ue})}}const Zx=({session:e,mode:t,category:n,difficulty:r,timerConfig:i,onComplete:o,onQuit:a})=>{const[l,c]=d.useState(0),[u,f]=d.useState([]),[x,p]=d.useState([]),[w,b]=d.useState([]),[j,C]=d.useState(!1),[g,m]=d.useState(null),[h,S]=d.useState(Date.now()),[R,M]=d.useState(!1),[N,v]=d.useState(!1),[y,k]=d.useState({}),[_,F]=d.useState({}),[q,te]=d.useState([]);d.useState(!0);const[W,Y]=d.useState(null),[D,E]=d.useState([]),[z,L]=d.useState(0),[T,A]=d.useState(0),[O,ee]=d.useState(!1),[$,Z]=d.useState(!1),[ce,P]=d.useState(""),[I,Q]=d.useState(!1),[H,K]=d.useState(!1),[ue,X]=d.useState(!0),[ne,B]=d.useState(!1),[G,V]=d.useState(0),[ae,ke]=d.useState(0),[je,ve]=d.useState(0),[ze,Se]=d.useState(null),[Ee,xe]=d.useState(0),De=d.useRef(null),Fe=d.useRef(null),ye=t==="practice",_e=u[l],Ke=le=>{try{const re=new Audio(le);re.volume=.6,re.play()}catch{console.log("Sound not available:",le)}},rt=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],Me=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:rt,Le=Me[l]||Me[0]||rt[0],Xe=Me.length;d.useEffect(()=>{Me.length>0&&(f(new Array(Me.length).fill(null)),p(new Array(Me.length).fill(!1)),te(new Array(Me.length).fill(!1)),b(new Array(Me.length).fill((i==null?void 0:i.seconds)||45)))},[Me.length,i==null?void 0:i.seconds]);const ar=()=>{if(R){P("Once per quiz"),setTimeout(()=>P(""),1e3);return}if(_e!==null){P("Already answered"),setTimeout(()=>P(""),1e3);return}if(!Le)return;const re=[0,1,2,3].filter(ie=>ie!==Le.answerIndex).sort(()=>Math.random()-.5).slice(0,2);k({...y,[l]:re}),M(!0)},J=()=>{if(N){P("Once per quiz"),setTimeout(()=>P(""),1e3);return}if(_e!==null){P("Already answered"),setTimeout(()=>P(""),1e3);return}if(!Le)return;const le=Le.answerIndex,re=[0,0,0,0],ie=40+Math.floor(Math.random()*31);re[le]=ie;let be=100-ie;const fe=[0,1,2,3].filter(Te=>Te!==le);for(let Te=0;Te<fe.length-1;Te++){const Ne=Math.min(be-(fe.length-1-Te),be/2),lt=Math.floor(Math.random()*(Ne+1));re[fe[Te]]=lt,be-=lt}re[fe[fe.length-1]]=be,F({..._,[l]:re}),v(!0)},de=d.useCallback((le,re)=>{if(!Le||ye&&q[l]||y[l]&&y[l].includes(le))return;const ie=[...u];ie[l]=u[l]===le?null:le,f(ie),S(Date.now()),ie[l]!==null&&(X(!1),clearInterval(Fe.current));const be=ie[l]===Le.answerIndex;if(be){const fe=je+1;if(ve(fe),L(Te=>Te+1),A(0),ye){V(lt=>lt+1);const Te=10;ke(lt=>lt+Te);let Ne=null;if(l===0&&D.length===0)Ne={emoji:"🎯",message:"Perfect start! You're a natural!"};else if(z===2)Ne={emoji:"🔥",message:"2 in a row! Keep it up!"};else if(z===3)Ne={emoji:"⚡",message:"3 streak! You're on fire!"};else if(z===5)Ne={emoji:"🚀",message:"5 streak! Unstoppable!"};else if(z===10)Ne={emoji:"👑",message:"10 streak! Legendary!"};else if(D[D.length-1]===!1)Ne={emoji:"💪",message:"Great recovery! Back on track!"};else if(l===Math.floor(Xe*.25)-1)Ne={emoji:"🎬",message:"25% done! Looking good!"};else if(l===Math.floor(Xe*.5)-1)Ne={emoji:"⭐",message:"Halfway there! Keep going!"};else if(l===Math.floor(Xe*.75)-1)Ne={emoji:"🏁",message:"Almost done! Final push!"};else{const lt=[{emoji:"✨",message:"Excellent!"},{emoji:"🎉",message:"Well done!"},{emoji:"💯",message:"Perfect!"},{emoji:"🌟",message:"Brilliant!"}];Ne=lt[Math.floor(Math.random()*lt.length)]}setTimeout(()=>{Y(Ne),setTimeout(()=>Y(null),3e3)},2e3),Ke("/sounds/correct.mp3"),setTimeout(()=>Ke("/sounds/coin.mp3"),500),K(!0),setTimeout(()=>K(!1),2e3),Se({type:"correct",stars:1,coins:10}),setTimeout(()=>Se(null),2e3)}}else if(ie[l]!==null&&(ve(0),L(0),A(fe=>fe+1),ye)){let fe=null;if(l===0&&D.length===0)fe={emoji:"💡",message:"No worries! Let's learn together!"};else if(z>=3)fe={emoji:"💫",message:"Good run! Keep trying!"};else if(T===2)fe={emoji:"🤗",message:"It's okay! Take your time!"};else if(T>=3)fe={emoji:"💪",message:"Don't give up! You've got this!"};else{const Te=[{emoji:"🤔",message:"Almost there!"},{emoji:"💭",message:"Good try!"},{emoji:"🎯",message:"Next one!"}];fe=Te[Math.floor(Math.random()*Te.length)]}setTimeout(()=>{Y(fe),setTimeout(()=>Y(null),3e3)},1e3),Ke("/sounds/wrong.mp3")}if(E(fe=>[...fe.slice(-2),be]),ie[l]!==null&&x[l]){const fe=[...x];fe[l]=!1,p(fe)}ye&&ie[l]!==null&&(Q(!0),te(fe=>{const Te=[...fe];return Te[l]=!0,Te})),!ye&&ie[l]!==null&&(clearTimeout(De.current),De.current=setTimeout(()=>{l<Xe-1?ge():(ee(!0),C(!0))},5e3))},[Le,ye,q,l,u,x,Xe,je,y]),Re=()=>{S(Date.now()),l>0&&(clearInterval(Fe.current),X(!1),c(le=>le-1),Q(!1),ye&&u[l-1]!==null&&setTimeout(()=>Q(!0),100))},ge=()=>{if(S(Date.now()),clearInterval(Fe.current),_e===null){const le=[...x];le[l]=!0,p(le),ve(0)}X(!1),Q(!1),l<Xe-1?(c(le=>le+1),ye&&u[l+1]!==null?setTimeout(()=>Q(!0),100):setTimeout(()=>X(!0),100)):ee(!0)},Ye=()=>{S(Date.now());const le=[...x];le[l]=!0,p(le),ve(0),ge()},pe=()=>{const le=Me.reduce((re,ie,be)=>re+(u[be]===ie.answerIndex?1:0),0);if(ye)o&&o({questions:Me,answers:u,skipped:x,correct:le,total:Xe,mode:t,category:n,difficulty:r,earnedStars:G,earnedCoins:ae,finalStreak:je});else{const re=le*10;xe(re),B(!0),setTimeout(()=>{Ke("/sounds/coin.mp3"),K(!0),setTimeout(()=>K(!1),3e3)},1e3)}},mt=()=>{o&&o({questions:Me,answers:u,skipped:x,correct:Me.reduce((le,re,ie)=>le+(u[ie]===re.answerIndex?1:0),0),total:Xe,mode:t,category:n,difficulty:r,earnedStars:0,earnedCoins:Ee,finalStreak:je})};d.useEffect(()=>{if(!(j||g!==null||O||!ue||u[l]!==null))return Fe.current=setInterval(()=>{b(le=>{const re=[...le],ie=re[l];return ie<=1?(clearInterval(Fe.current),l===Xe-1?(Date.now()-h>=5e3&&ee(!0),re):(m(l),re)):(re[l]=ie-1,re)})},1e3),()=>clearInterval(Fe.current)},[j,g,l,O,Xe,ue,u,h]),d.useEffect(()=>{u[l]===null&&!O&&!g?X(!0):X(!1)},[l,u,O,g]);const Pe=le=>{const re=Math.floor(le/60),ie=le%60;return`${re}:${ie.toString().padStart(2,"0")}`},Ue=(l+1)/Me.length*100,St=u.filter(le=>le!==null).length,an=x.filter(Boolean).length,oe=w[l]||0,me=Me.reduce((le,re,ie)=>le+(u[ie]===re.answerIndex?1:0),0);return s.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[ze&&s.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:s.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",ze.coins," Coins!"]})}),ye&&W&&s.jsx("div",{className:"fixed top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-fadeInOut max-w-2xl w-full px-4",children:s.jsx("div",{className:"bg-gradient-to-br from-gray-800/95 to-gray-900/95 text-white p-6 rounded-3xl shadow-2xl backdrop-blur-sm border border-gray-700/50",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-4xl mb-3",children:W.emoji}),s.jsx("div",{className:"text-xl font-bold leading-relaxed tracking-wide",children:W.message})]})})}),H&&s.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((le,re)=>s.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${re*150}ms`,animationDuration:"2s"},children:"🪙"},re))}),s.jsxs("div",{className:"sticky top-0 flex items-center justify-between px-4 py-2 bg-gray-900 flex-shrink-0 z-40 border-b border-gray-800 shadow-lg",children:[s.jsxs("button",{onClick:()=>Z(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),s.jsx("span",{className:"font-medium",children:"Back"})]}),s.jsx("div",{className:"flex-1"}),s.jsxs("div",{className:"flex items-center gap-2",children:[ye&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[s.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),s.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:ae})]}),s.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[s.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),s.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:je})]})]}),s.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${oe<=10?"bg-red-600/20 text-red-400 animate-pulse":oe<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:Pe(oe)})]})]}),s.jsxs("div",{className:"px-4 pb-1 flex-shrink-0 bg-gray-900 relative z-30",children:[s.jsxs("div",{className:"flex justify-between items-center mb-1",children:[s.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",l+1," of ",Xe]}),s.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(Ue),"% Complete"]})]}),s.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${Ue}%`}})}),s.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:Xe}).map((le,re)=>s.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${re===l?"bg-white scale-125":u[re]!==null?"bg-green-500":x[re]?"bg-yellow-500":"bg-gray-600"}`},re))}),s.jsx("div",{className:"text-center mt-4",children:s.jsx("span",{className:"text-xs text-gray-500",children:Le.category})})]}),s.jsxs("div",{className:"flex-1 px-4 flex flex-col overflow-y-auto pb-36",children:[s.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-8 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[s.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),s.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),s.jsxs("div",{className:"relative text-center",children:[s.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",l+1]}),s.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:Le.prompt}),Le.difficulty&&s.jsx("div",{className:"mt-3 inline-block",children:s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${Le.difficulty==="easy"?"bg-green-500/20 text-green-300":Le.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Le.difficulty.toUpperCase()})})]})]}),s.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:Le.options.map((le,re)=>{const ie=_e===re,be=re===Le.answerIndex,fe=ye&&_e!==null&&I,Te=y[l]&&y[l].includes(re);let Ne="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";Te?Ne+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(Ne+="cursor-pointer ",fe?ie&&be?Ne+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":ie&&!be?Ne+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!ie&&be?Ne+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":Ne+="bg-gray-700 border-gray-600 text-gray-400":ie?Ne+="bg-gray-600 border-gray-500 text-white":Ne+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const lt=["🅰️","🅱️","🅲️","🅳️"];return s.jsx("button",{onClick:Br=>de(re,Br),disabled:ye&&q[l],className:Ne,children:s.jsxs("div",{className:"flex items-center gap-2 w-full",children:[s.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:lt[re]}),s.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:le}),_[l]&&_[l][re]>0&&!Te&&s.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[_[l][re],"%"]}),fe&&ie&&be&&!Te&&s.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),fe&&ie&&!be&&!Te&&s.jsx("div",{className:"text-lg",children:"😔"}),fe&&!ie&&be&&!Te&&s.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},re)})}),ye&&I&&_e!==null&&s.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:s.jsxs("div",{className:"flex gap-3",children:[s.jsx("div",{className:"text-lg flex-shrink-0",children:_e===Le.answerIndex?"🎊":"💡"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h4",{className:`font-semibold mb-3 text-sm ${_e===Le.answerIndex?"text-green-400":"text-blue-400"}`,children:_e===Le.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),Le.explanation&&s.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:Le.explanation})]})]})})]}),s.jsxs("div",{className:"fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm p-4 pb-8 z-50",children:[!ye&&s.jsxs("div",{className:"flex justify-center gap-2 mb-4",children:[s.jsxs("button",{onClick:ar,disabled:_e!==null,className:`${R?"bg-gray-700/50 text-gray-500/50":"bg-orange-600 hover:bg-orange-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm`,children:[s.jsx("span",{children:"⚡"}),"50:50"]}),s.jsxs("button",{onClick:J,disabled:_e!==null,className:`${N?"bg-gray-700/50 text-gray-500/50":"bg-purple-600 hover:bg-purple-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm`,children:[s.jsx("span",{children:"👥"}),"Ask Friends"]})]}),s.jsxs("div",{className:"flex gap-2 mb-2",children:[s.jsx("button",{onClick:Re,disabled:l===0,className:"flex-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 py-2 rounded-lg font-medium transition-colors text-sm",children:"Previous"}),s.jsx("button",{onClick:Ye,disabled:_e!==null,className:`flex-1 py-2 rounded-lg font-medium transition-colors text-sm ${_e!==null?"bg-gray-600/50 text-gray-400/50 cursor-not-allowed":"bg-yellow-600 hover:bg-yellow-700"}`,children:"Skip"}),s.jsx("button",{onClick:ge,className:"flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium transition-colors text-sm",children:l===Xe-1?"Finish":"Next"})]}),s.jsx("button",{onClick:()=>ee(!0),className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-2.5 rounded-lg font-medium transition-colors text-sm",children:"Submit"})]}),ne&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quiz Complete!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Here's how you performed"}),s.jsxs("div",{className:"bg-gray-700/50 rounded-2xl p-4 mb-6 space-y-3",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-gray-300",children:"Questions Attempted:"}),s.jsxs("span",{className:"text-white font-semibold",children:[St," / ",Xe]})]}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-gray-300",children:"Correct Answers:"}),s.jsx("span",{className:"text-green-400 font-semibold",children:me})]}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-gray-300",children:"Accuracy:"}),s.jsxs("span",{className:"text-blue-400 font-semibold",children:[St>0?Math.round(me/St*100):0,"%"]})]}),s.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-yellow-300 flex items-center gap-1",children:"🪙 Coins Earned:"}),s.jsx("span",{className:"text-yellow-400 font-bold text-lg",children:Ee})]})})]}),s.jsx("button",{onClick:mt,className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors",children:"Continue"})]})}),$&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>Z(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),s.jsx("button",{onClick:a,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),O&&!ne&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),s.jsxs("p",{className:"text-gray-400 mb-4",children:[St," of ",Xe," answered • ",an," skipped"]}),ye&&s.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:s.jsxs("div",{className:"flex justify-center gap-6",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),s.jsx("div",{className:"text-yellow-400 font-bold",children:G}),s.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),s.jsx("div",{className:"text-yellow-400 font-bold",children:ae}),s.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>{ee(!1),m(null),S(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),s.jsx("button",{onClick:le=>{le.preventDefault(),le.stopPropagation(),console.log("Submit button clicked"),pe()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),g===l&&!O&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),s.jsx("button",{onClick:()=>{m(null),S(Date.now()),l<Me.length-1?ge():ee(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:l<Me.length-1?"Continue":"See Results"})]})}),ce&&s.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:ce}),s.jsx("style",{jsx:!0,children:`
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
        `})]})},Xr=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],eg=()=>s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),tg=()=>s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),ng=()=>s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),rg=()=>s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),sg=()=>s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),ig=()=>s.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),og=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[]},onRetake:t=()=>{},onReview:n=()=>{},onNavigate:r=(u,f)=>{},isRetake:i=!1,isPractice:o=!1,player:a={level:1,coins:0,combo:0,energy:5},categories:l=[],addCoins:c=()=>{}})=>{const[u,f]=d.useState(a.coins),x=d.useRef(null),[p,w]=d.useState(null),[b]=It("/sounds/coin.mp3",{volume:.75}),[j,C]=d.useState(!1),[g,m]=d.useState(!1),[h,S]=d.useState(0),[R,M]=d.useState(!1),[N,v]=d.useState(!1),{correct:y,total:k,category:_,categorySlug:F,difficulty:q,mode:te,elapsedMs:W}=e,Y=k?Math.round(y/k*100):0,D=Y===100,E=Y>=80,z=Math.floor(W/1e3),L=k>0?Math.floor(z/k):0,T=o?e.earnedCoins||0:Math.round(y*5*(D?1.5:E?1.2:1)),A=Xr.find(I=>I.slug===_)||Xr[0],ee=(()=>D?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:Y>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:Y>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:Y>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:Y>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{!p&&!j&&f(a.coins)},[a.coins,p,j]),d.useEffect(()=>{T>0&&!j&&!N&&x.current&&setTimeout(()=>{x.current.getBoundingClientRect(),b==null||b(),w({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(T,10),amount:T}),C(!0)},500)},[T,o,j,b]),d.useEffect(()=>{(D||E)&&(m(!0),setTimeout(()=>m(!1),3e3));let I=0;const Q=y/20,H=setInterval(()=>{I+=Q,I>=y?(S(y),clearInterval(H)):S(Math.floor(I))},50);return()=>clearInterval(H)},[y,D,E]);const $=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:y,total:k}],Z=()=>{try{const I=localStorage.getItem("qp_recent");if(I)return JSON.parse(I).slice(0,10).map(H=>H.slug||H.cat).filter(H=>H&&H!==e.categorySlug)}catch(I){console.error("Error reading recent categories:",I)}return[]},ce=()=>{const I=F||_,Q=q||"medium",H=Z(),K=(l||Xr||[]).filter(ne=>ne.slug!==I&&!H.slice(0,3).includes(ne.slug)),X=(()=>{if(K.length===0){const ne=(l||Xr||[]).filter(B=>B.slug!==I);return ne[Math.floor(Math.random()*ne.length)]||(l||Xr)[0]}return K[Math.floor(Math.random()*K.length)]})();if(Y<60)return o?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>r(`/quiz/${I}`,{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}})},{icon:X.icon,title:X.name,desc:"Fresh start with new topic",color:X.gradient,action:()=>r(`/quiz/${X.slug}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>n()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>r(`/quiz/${I}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:Q!=="easy"?"🎯":"🔄",title:Q!=="easy"?"Easy Mode":"Try Again",desc:Q!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>Q!=="easy"?r(`/quiz/${I}`,{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}):t()},{icon:X.icon,title:X.name,desc:"Try something different",color:X.gradient,action:()=>r(`/quiz/${X.slug}`,{mode:"quiz",difficulty:"easy",count:10,timer:{type:"per_q",seconds:45}})}];if(Y>=80)return Q==="hard"&&Y>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>r(`/quiz/${I}`,{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}})},{icon:X.icon,title:`${X.name} Challenge`,desc:"Hard mode, new topic",color:X.gradient,action:()=>r(`/quiz/${X.slug}`,{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>r("/quiz/mixed",{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}})}]:[{icon:Q==="hard"?"🔥":"🎯",title:Q==="hard"?"Perfect Score Challenge":"Hard Mode",desc:Q==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>r(`/quiz/${I}`,{mode:"quiz",difficulty:"hard",count:Q==="hard"?10:20,timer:{type:"per_q",seconds:30}})},{icon:X.icon,title:X.name,desc:"Master new topics",color:X.gradient,action:()=>r(`/quiz/${X.slug}`,{mode:"quiz",difficulty:Q,count:10,timer:{type:"per_q",seconds:45}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>r(`/quiz/${I}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}})}];{const ne=Y<70;return[{icon:ne?"📚":"🎯",title:ne?"Practice More":"Try Again",desc:ne?"Improve accuracy":"Beat your score",color:ne?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:ne?()=>r(`/quiz/${I}`,{mode:"practice",difficulty:Q,count:10,timer:{type:"off",seconds:0}}):()=>t()},{icon:X.icon,title:X.name,desc:"Explore new topics",color:X.gradient,action:()=>r(`/quiz/${X.slug}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:45}})},{icon:Q==="easy"?"⬆️":"💪",title:Q==="easy"?"Medium Difficulty":"More Questions",desc:Q==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>r(`/quiz/${I}`,{mode:"quiz",difficulty:Q==="easy"?"medium":Q,count:Q==="easy"?10:20,timer:{type:"per_q",seconds:45}})}]}},P=pt.useMemo(()=>ce(),[Y,o,e.categorySlug,e.difficulty]);return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4",children:[p&&s.jsx(Vl,{startRect:p.startRect,targetRef:x,count:p.count,onDone:()=>{p.amount>0&&!N&&(console.log("[QuizResults] Adding coins once:",p.amount),c(p.amount),v(!0),f(a.coins+p.amount)),w(null)}}),s.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),g&&s.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:s.jsx("div",{className:"text-8xl animate-bounce",children:D?"🎉":"⭐"})}),s.jsxs("div",{className:"flex justify-between items-center mb-6",children:[s.jsx("button",{onClick:()=>r("/"),className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all",children:s.jsx(tg,{})}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",a.level]}),s.jsxs("button",{ref:x,onClick:()=>M(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[u," 🪙"]})]})]}),s.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),s.jsxs("div",{className:"relative text-center",children:[s.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${ee.color}`,children:[s.jsx("span",{className:"text-2xl",children:ee.emoji}),s.jsx("span",{className:"font-semibold",children:ee.text})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[h,"/",k]}),s.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[s.jsx("span",{className:"text-xl",children:A.icon}),s.jsx("span",{children:A.name})]})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"text-3xl font-bold",children:[Y,"%"]}),s.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"text-3xl font-bold",children:[L,"s"]}),s.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:T>0?`+${T}`:"0"}),s.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),s.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(sg,{}),s.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),a.combo>0&&s.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[s.jsx(ig,{}),a.combo," streak"]})]}),s.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:$.map((I,Q)=>s.jsx("div",{className:`flex-1 rounded-t transition-all ${Q===$.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${I.score/I.total*100}%`,minHeight:"4px"}},Q))}),s.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[s.jsxs("button",{onClick:n,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[s.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),s.jsxs("div",{className:"relative flex items-center justify-between",children:[s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-semibold",children:"Review"}),s.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),s.jsx(rg,{})]})]}),s.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-semibold",children:"Try Again"}),s.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),s.jsx(ng,{})]})})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),P.map((I,Q)=>s.jsx("button",{onClick:I.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${I.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:s.jsx("span",{className:"text-xl",children:I.icon})}),s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-medium text-sm",children:I.title}),s.jsx("div",{className:"text-xs text-white/40",children:I.desc})]})]}),s.jsx(eg,{})]})},Q))]}),s.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:s.jsx("button",{onClick:()=>r("/profile/history",{replace:!0}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),R&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:I=>{I.target===I.currentTarget&&M(!1)},children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:I=>I.stopPropagation(),children:[s.jsx("div",{className:"absolute inset-0 opacity-10",children:s.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),s.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[a.coins," Coins"]})]})]}),s.jsx("button",{onClick:()=>M(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),s.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),s.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),s.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),s.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[s.jsx("span",{children:"Next reward"}),s.jsxs("span",{children:[100-a.coins%100," coins to go"]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${a.coins%100}%`}})})]}),s.jsx("button",{onClick:()=>{M(!1),r("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})},ag=({questions:e,answers:t,skipped:n,onBack:r,onRetake:i,fromHistory:o=!1})=>{const a=yt(),l=()=>{o?a("/profile/history",{replace:!0}):r?r():a(-1)},c=e.reduce((x,p,w)=>x+(t[w]===p.answerIndex?1:0),0),u=(n==null?void 0:n.filter(Boolean).length)||0,f=e.length-c-u;return s.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),s.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),s.jsx("div",{className:"w-16"})," "]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[s.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),s.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),s.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),s.jsx("div",{className:"text-lg font-bold text-red-400",children:f})]}),s.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),s.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),s.jsx("ol",{className:"space-y-4",children:e.map((x,p)=>{const w=t[p],b=!w&&w!==0,j=w===x.answerIndex;return s.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",p+1,". ",x.prompt]}),x.category&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",x.category," • Difficulty: ",x.difficulty||"Medium"]})]}),s.jsx("div",{className:"ml-2",children:b?s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:x.options.map((C,g)=>{const m=w===g,h=g===x.answerIndex;let S="w-full text-left px-3 py-2 rounded-xl border transition-all ";return h?S+="bg-green-600/20 border-green-500/50 text-green-300":m&&!h?S+="bg-red-600/20 border-red-500/50 text-red-300":S+="bg-base-bg/40 border-base-border text-base-muted",s.jsxs("div",{className:S,children:[s.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][g],"."]}),C,h&&s.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),m&&!h&&s.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},g)})}),x.explanation&&s.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[s.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),s.jsx("div",{className:"text-sm text-base-muted",children:x.explanation})]})]},x.id||p)})}),s.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[s.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),i&&s.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:i,children:"Retake Quiz"})]})]})},lg="qp_resume",wu="qp_mistakes",ju="qp_stats",ku="qp_lastset",Nu="qp_recent",Su="qp_review_snapshot",cg=50,Jr=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),_i=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),ug=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),f0=e=>{const t=e.slice();for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t},dg=(e,t,n)=>Math.max(t,Math.min(n,e)),Zr=(e,t)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}};async function fg(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const n=await t.text(),{data:r}=Bs.parse(n,{header:!0,skipEmptyLines:!0,transformHeader:o=>String(o).trim().toLowerCase()}),i={a:0,b:1,c:2,d:3};return r.map((o,a)=>{var p;const l=[o.option1,o.option2,o.option3,o.option4].map(w=>(w??"").trim());if(l.some(w=>!w))return null;let c=-1;const u=String(o.answer??"").trim();if(i[u.toLowerCase()]!==void 0)c=i[u.toLowerCase()];else{const w=l.findIndex(b=>b.toLowerCase()===u.toLowerCase());c=w>=0?w:0}const f=String(o.category??o.subject??"General Knowledge").trim(),x=String(o.difficulty??"medium").toLowerCase().trim();return{id:((p=o.id)==null?void 0:p.trim())||`q_${a}`,category:f,difficulty:x,prompt:String(o.question??"").trim(),options:l,answerIndex:c,explanation:String(o.explanation??"").trim()}}).filter(Boolean)}function mg(e,{categorySlug:t,difficulty:n,count:r}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",n),console.log("count:",r),console.log("Total questions available:",e.length);const o=t==="mixed"?()=>!0:f=>_i(f.category)===t,a=n?f=>(f.difficulty||"medium")===n:()=>!0,l=e.filter(f=>o(f)&&a(f));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(f=>`"${f.category}" -> "${_i(f.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(f=>_i(f.category)))]),{questions:[],poolSize:0};const u=ug(l,Math.min(r,l.length)).map(f=>{const x=f0([0,1,2,3]),p=x.map(b=>f.options[b]),w=x.indexOf(f.answerIndex);return{...f,options:p,answerIndex:w}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function pg(){const e=yt(),{category:t}=jh(),n=Xt(),{energy:r,useEnergy:i,player:o,addCoins:a,addXP:l,updateDailyStreak:c}=bn(),u=new URLSearchParams(n.search),f=u.get("review")==="1",x=u.get("retake")==="1",p=n.state||{},w=p.mode||"quiz",b=String(p.difficulty||"medium").toLowerCase(),j=dg(Number(p.count||10),1,50),C=p.timer||{type:"per_q",seconds:45};p.resume,p.daily,p.source;const g=x||!!p.retake,m=!!p.fromHistory,h=w==="practice";console.log("Quiz Component - Mode Detection:",{routerState:p,mode:w,isPractice:h,location:n.pathname,state:n.state});const[S,R]=d.useState([]),[M,N]=d.useState(!0),[v,y]=d.useState(""),[k,_]=d.useState({questions:[]}),[F,q]=d.useState("quiz"),[te,W]=d.useState(null),[Y,D]=d.useState(null),[E,z]=d.useState(0);d.useEffect(()=>{let $=!0;return(async()=>{try{const Z=await fg();if(!$)return;R(Z)}catch(Z){console.error(Z),y("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{N(!1)}})(),()=>{$=!1}},[]),d.useEffect(()=>{if(M||v||f||S.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",w),console.log("Difficulty:",b),console.log("Count:",j);const $=mg(S,{categorySlug:t,difficulty:b,count:j});if($.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(S.map(Z=>_i(Z.category)))].slice(0,10)),y(`No questions found for "${Jr(t)}" with difficulty "${b}"`);return}console.log("Session built with",$.questions.length,"questions"),_($),D(Date.now()),z(0),q("quiz")},[S,t,w,b,j,n.state,n.search]),d.useEffect(()=>{if(F!=="quiz"||!Y)return;const $=setInterval(()=>{z(Date.now()-Y)},1e3);return()=>clearInterval($)},[F,Y]);const L=d.useCallback($=>{if(console.log("Quiz completed - Mode:",w,"isPractice:",h,"Results:",$),!$||!$.questions){console.error("Invalid results object:",$);return}const Z=$.questions.filter((P,I)=>$.answers[I]!==null&&$.answers[I]!==P.answerIndex).map(P=>P.id);try{const P=Zr(wu,[]),I=Array.from(new Set([...Z,...P]));localStorage.setItem(wu,JSON.stringify(I))}catch(P){console.error("Error saving mistakes:",P)}try{const P=Zr(ju,{sessions:[]});P.sessions.push({cat:Jr(t),mode:h?"practice":"quiz",total:$.total,correct:$.correct,skipped:$.skipped.filter(Boolean).length,ms:E,timestamp:Date.now(),earnedXP:h?0:$.correct*10,earnedCoins:h?0:$.correct*5}),localStorage.setItem(ju,JSON.stringify(P))}catch(P){console.error("Error saving stats:",P)}const ce={ts:Date.now(),slug:t,categoryLabel:Jr(t),mode:h?"practice":"quiz",difficulty:b,total:$.total,timer:h?null:C,ms:E,attempted:$.answers.filter(P=>P!==null).length,correct:$.correct,questions:$.questions,answers:$.answers,skipped:$.skipped,isPractice:h};try{localStorage.setItem(ku,JSON.stringify(ce)),localStorage.setItem(Su,JSON.stringify({questions:$.questions,answers:$.answers,skipped:$.skipped}));const P=Zr(Nu,[]),Q=[{id:ce.ts,ts:ce.ts,cat:ce.categoryLabel,slug:t,mode:h?"Practice":"Quiz",total:$.total,correct:$.correct,ms:E,snapshot:ce},...P].slice(0,cg);localStorage.setItem(Nu,JSON.stringify(Q))}catch(P){console.error("Error saving snapshot:",P)}if(localStorage.removeItem(lg),h&&$.earnedCoins?$.earnedCoins:!h&&$.correct>0&&$.correct*5,!h&&$.correct>0){const P=$.correct*10;l(P)}c(),W({...$,category:Jr(t),categorySlug:t,difficulty:b,mode:h?"practice":"quiz",elapsedMs:E,isPractice:h,hasTimer:!h,earnedXP:h?0:$.correct*10,earnedCoins:h?$.earnedCoins||0:$.correct*5}),q("results")},[t,w,C,E,h]),T=d.useCallback(()=>{m?e("/profile/history",{replace:!0,state:null}):e("/")},[m,e]),A=d.useCallback(()=>{console.log("Retake requested - Mode:",w,"isPractice:",h);const $=Zr(ku,null);if(!$||$.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:h?"practice":"quiz",difficulty:b,count:j,timer:h?null:C,retake:!0}});return}const Z=$.questions.map(ce=>{const P=f0([0,1,2,3]);return{...ce,options:P.map(I=>ce.options[I]),answerIndex:P.indexOf(ce.answerIndex)}});_({questions:Z,poolSize:Z.length}),D(Date.now()),z(0),q("quiz"),window.scrollTo(0,0)},[t,w,b,j,C,e,h]),O=d.useCallback(($=null)=>{if($)W($);else if(!te){const Z=Zr(Su,null);Z&&W({questions:Z.questions||[],answers:Z.answers||[],skipped:Z.skipped||[]})}q("review")},[te]),ee=d.useCallback(()=>{m?e("/profile/history",{replace:!0}):q("results")},[m,e]);return M?s.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:s.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):v?s.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:s.jsx("div",{className:"text-sm text-red-400",children:v})}):(console.log("Render - Current view:",F,"Session questions:",k.questions.length,"Mode:",w,"isPractice:",h),s.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:s.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[F==="quiz"&&k.questions.length>0&&s.jsx(Zx,{session:k,mode:h?"practice":"quiz",category:Jr(t),difficulty:b,timerConfig:h?null:C,onComplete:L,onQuit:T,isPractice:h}),F==="results"&&te&&s.jsx(og,{results:te,onRetake:A,onReview:()=>O(te),isRetake:g,isPractice:h,player:o,categories:c0,addCoins:a,onNavigate:($,Z)=>{Z!=null&&Z.replace?e($,{replace:!0,state:Z}):e($,{state:Z})}}),F==="review"&&te&&s.jsx(ag,{questions:te.questions||[],answers:te.answers||[],skipped:te.skipped||[],onBack:ee,onRetake:A,fromHistory:m,isPractice:h})]})}))}const Nn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Qn=360/Nn.length,hg=42,Go=3e3,Cu=10,Eu=260,xg="cubic-bezier(.15,.7,.1,1)",gg="cubic-bezier(.2,.7,.2,1)",kn=5,vg=5,yg=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function bg({muted:e=!1,size:t=18}){return s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),s.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&s.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function wg({q:e,locked:t,onPick:n,result:r}){if(!e)return null;const i=[e.option1,e.option2,e.option3,e.option4];return s.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[s.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),s.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),i.map((o,a)=>{const l=r&&o===e.answer,c=r&&r.pick===o&&o!==e.answer;return s.jsx("button",{disabled:t||!!r,onClick:()=>n(o),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!r&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:o},a)}),r&&s.jsxs("div",{className:"mt-3 text-sm",children:[r.correct?s.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):s.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",s.jsx("b",{children:e.answer})]}),e.explanation&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function jg(){const e=yt(),[t]=It("/sounds/correct.mp3",{volume:.7}),[n]=It("/sounds/wrong.mp3",{volume:.7}),[r,i]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(kn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(kn).fill(null)}]),[o,a]=d.useState(0),[l,c]=d.useState(1),u=r.reduce((P,I)=>P+I.scores.reduce((Q,H)=>Q+(H??0),0),0),[f,x]=d.useState(!0),p=d.useRef(null);d.useEffect(()=>{const P=new Audio("/sounds/spin.mp3");return P.loop=!0,P.volume=.7,p.current=P,()=>{try{P.pause(),P.src=""}catch{}}},[]);const w=()=>{if(f&&p.current)try{p.current.currentTime=0,p.current.play()}catch{}},b=()=>{if(p.current)try{p.current.pause(),p.current.currentTime=0}catch{}},[j,C]=d.useState(0),[g,m]=d.useState("none"),[h,S]=d.useState(!1),[R,M]=d.useState(null),[N,v]=d.useState(null),y=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[k,_]=d.useState([]);d.useEffect(()=>{(async()=>{try{const P=await fetch("/data/quiz_questions_bank.csv").then(K=>K.text()),{data:I}=Bs.parse(P,{header:!0,skipEmptyLines:!0,transformHeader:K=>String(K).trim().toLowerCase()}),Q={a:0,b:1,c:2,d:3},H=I.map((K,ue)=>{var ae;const X=(K.question??"").trim();if(!X)return null;const ne=[K.option1,K.option2,K.option3,K.option4].map(ke=>String(ke??"").trim());if(ne.some(ke=>!ke))return null;let B=String(K.answer??"").trim(),G=Q[B.toLowerCase()];if(G===void 0){const ke=ne.findIndex(je=>je.toLowerCase()===B.toLowerCase());G=ke>=0?ke:0}const V=ne[G];return{id:((ae=K.id)==null?void 0:ae.trim())||`ps_${ue}`,question:X,option1:ne[0],option2:ne[1],option3:ne[2],option4:ne[3],answer:V,explanation:String(K.explanation??"").trim(),catSlug:yg(K.category??K.subject??"general knowledge"),difficulty:String(K.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);_(H)}catch{_([])}})()},[]);const[F,q]=d.useState(null),[te,W]=d.useState(null),[Y,D]=d.useState(!1),E=P=>(P%360+360)%360,z=P=>E(P),L=l>kn;function T(){if(r.length>=4)return;const P=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],I=P[(r.length*2+1)%P.length];i(Q=>[...Q,{name:`Player ${Q.length+1}`,color:I,scores:Array(kn).fill(null)}])}function A(){r.length<=2||(i(P=>P.slice(0,-1)),a(P=>Math.min(P,r.length-2)))}function O(P){i(I=>I.map((Q,H)=>H===o?{...Q,scores:Q.scores.map((K,ue)=>ue===l-1?P:K)}:Q))}function ee(){if(h||L)return;M(null),v(null),q(null),W(null),S(!0),w();const P=Math.floor(Math.random()*Nn.length),I=Nn[P],Q=Qn*.28,H=(Math.random()*2-1)*Q,K=E(j),ue=180,ne=P*Qn+Qn/2+H;let B=z(ne-K-ue);const G=hg*360+B,V=j+G+Cu;m(`transform ${y?800:Go}ms ${xg}`),C(V);try{navigator.vibrate&&!y&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{m(`transform ${y?160:Eu}ms ${gg}`),C(ae=>ae-Cu)},y?800:Go),setTimeout(()=>{if(b(),S(!1),M(P),v(I.color),I.soon)return;const ae=k.filter(je=>je.catSlug===I.slug&&je.difficulty==="easy"),ke=ae.length?ae:k.filter(je=>je.catSlug===I.slug);if(ke.length){const je=ke[Math.floor(Math.random()*ke.length)];q(je)}else q({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(y?800:Go)+(y?160:Eu)+40)}function $(P){if(!F||te)return;const I=P===F.answer;if(W({correct:I,pick:P}),I){t(),D(!0),setTimeout(()=>D(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}O(vg)}else{n();try{navigator.vibrate&&navigator.vibrate([4])}catch{}O(0)}}function Z(){const P=(o+1)%r.length,I=P===0?l+1:l;a(P),c(I),M(null),v(null),q(null),W(null)}function ce(){const P=r.map(H=>H.scores.reduce((K,ue)=>K+(ue??0),0)),I=Math.max(...P),Q=r.filter((H,K)=>P[K]===I).map(H=>H.name).join(", ");alert(`${Q} win${Q.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return s.jsxs("div",{className:"min-h-screen bg-black text-white",children:[Y&&s.jsx(u0,{numberOfPieces:120,recycle:!1}),s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),s.jsx("button",{onClick:()=>x(P=>!P),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":f?"Mute sound":"Unmute sound",title:f?"Sound on":"Sound off",children:s.jsx(bg,{muted:!f})})]}),s.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"text-sm",children:["Round ",s.jsx("b",{children:Math.min(l,kn)}),"/",s.jsx("b",{children:kn})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:T,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),s.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),s.jsx("button",{onClick:A,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),s.jsxs("div",{className:"text-sm",children:["Pot: ",s.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[s.jsxs("colgroup",{children:[s.jsx("col",{style:{width:"42%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"13%"}})]}),s.jsx("thead",{children:s.jsxs("tr",{className:"text-base-muted",children:[s.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:kn}).map((P,I)=>s.jsxs("th",{className:"font-medium text-center",children:["R",I+1]},I)),s.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),s.jsx("tbody",{children:r.map((P,I)=>{const Q=P.scores.reduce((K,ue)=>K+(ue??0),0),H=I===o;return s.jsxs("tr",{className:H?"bg-white/6":"",children:[s.jsx("td",{className:"py-1 pr-1",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:P.color}}),s.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:P.name,onChange:K=>i(ue=>ue.map((X,ne)=>ne===I?{...X,name:K.target.value}:X))})]})}),P.scores.map((K,ue)=>s.jsx("td",{className:"text-center",children:K===null?"–":K},ue)),s.jsx("td",{className:"text-right pr-1 font-semibold",children:Q})]},I)})})]})})]}),s.jsx("section",{className:"flex flex-col items-center",children:s.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[N&&s.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${N}33, 0 0 30px 8px ${N}44`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:g},"aria-label":"Category wheel",role:"group",children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Nn.map((P,I)=>{const Q=I*Qn,H=Q+Qn,K=Qn>180?1:0,ue=Math.PI*Q/180,X=Math.PI*H/180,ne=50+50*Math.cos(ue),B=50-50*Math.sin(ue),G=50+50*Math.cos(X),V=50-50*Math.sin(X),ae=R===I;return s.jsxs("g",{style:{opacity:R==null?.95:ae?1:.78,filter:R!=null&&!ae?"blur(0.6px)":"none"},children:[s.jsx("path",{d:`M50,50 L${ne},${B} A50,50 0 ${K} 0 ${G},${V} Z`,fill:P.color,stroke:ae?`${P.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:ae?"1.2":"0.6"}),s.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${Q+Qn/2} 50 50) translate(12 0)`,children:s.jsxs("tspan",{children:[P.label,P.soon?" (soon)":""]})})]},P.slug)}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),s.jsx("button",{onClick:ee,disabled:h||L,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",h||L?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),R!=null&&!h&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:s.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[s.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:Nn[R].color}}),Nn[R].label]})})]})}),s.jsx("section",{className:"mt-4",children:L?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),s.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",s.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),s.jsx("button",{className:"btn-primary w-full",onClick:ce,children:"End match"})]}):R!=null&&Nn[R].soon?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-lg font-semibold mb-1",children:Nn[R].label}),s.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),s.jsx("button",{className:"btn-primary",onClick:ee,disabled:h,children:"Re-spin"})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",s.jsx("span",{style:{color:r[o].color},children:r[o].name})," ","| Round ",l,"/",kn]}),s.jsx(wg,{q:F,locked:h||!F,onPick:$,result:te}),te&&s.jsx("div",{className:"mt-3 flex justify-center",children:s.jsx("button",{className:"btn-primary",onClick:Z,children:"Next turn"})})]})})]}),s.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const kg=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return s.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[s.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),s.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(n=>s.jsxs("button",{onClick:()=>e(n.id,n.title),className:`rounded-3xl bg-gradient-to-br ${n.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[s.jsx("span",{className:"text-5xl",children:n.emoji}),s.jsx("span",{className:"text-white font-bold text-lg text-center",children:n.title})]},n.id))})]})},Ng=()=>{yt();const{player:e,addCoins:t,addXP:n}=bn(),[r,i]=d.useState([]),[o,a]=d.useState(0),[l,c]=d.useState({}),[u,f]=d.useState(0),[x,p]=d.useState(5),[w,b]=d.useState(0),[j,C]=d.useState(!0),[g,m]=d.useState(null),[h,S]=d.useState(!0),[R,M]=d.useState(null),[N,v]=d.useState(""),[y,k]=d.useState(!1),[_,F]=d.useState(""),[q,te]=d.useState(!1),[W,Y]=d.useState(!1),[D,E]=d.useState(!1),[z,L]=d.useState(!1),[T,A]=d.useState(!1),[O,ee]=d.useState(!1),[$,Z]=d.useState(0),[ce,P]=d.useState(0),[I,Q]=d.useState(-1),[H,K]=d.useState(-1),[ue,X]=d.useState({}),[ne,B]=d.useState({}),G=d.useRef(null),V=d.useRef(null),[ae]=It("/sounds/correct.mp3",{volume:.6}),[ke]=It("/sounds/wrong.mp3",{volume:.6}),[je]=It("/sounds/coin.mp3",{volume:.75}),ve=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],ze=()=>{i([]),a(0),c({}),f(0),p(5),b(0),C(!0),m(null),k(!1),F(""),te(!1),Y(!1),E(!1),L(!1),A(!1),ee(!1),Z(0),P(0),Q(-1),K(-1),X({}),B({}),M(null),v(""),Ee(null)};d.useEffect(()=>(ze(),S(!0),()=>{document.body.classList.remove("hide-bottom-nav"),ze(),V.current&&clearTimeout(V.current)}),[]),d.useEffect(()=>{!h&&r.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[h,r.length]),d.useEffect(()=>{!h&&r.length>0&&L(!0)},[h,r.length]);const[Se,Ee]=d.useState(null);d.useEffect(()=>{const J=de=>{var Re;if(z&&!D){const ge=de.target.closest('button[type="button"]'),Ye=(Re=ge==null?void 0:ge.querySelector(".text-\\[10px\\]"))==null?void 0:Re.textContent;Ye&&["Home","Play","Profile","Swipe"].includes(Ye)&&(de.preventDefault(),de.stopPropagation(),Ee({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[Ye]),Y(!0))}};return document.addEventListener("click",J,!0),()=>document.removeEventListener("click",J,!0)},[z,D]),d.useEffect(()=>{const J=G.current;if(!J)return;let de=!1,Re=0,ge=null;const Ye=Ue=>{!h&&r.length>0&&Ue.preventDefault()},pe=Ue=>{Re=Ue.touches[0].clientY,de=!1},mt=Ue=>{!h&&r.length>0&&!W&&!q&&Ue.preventDefault()},Pe=Ue=>{if(de||W||q)return;const St=Ue.changedTouches[0].clientY,an=Re-St;if(Math.abs(an)>30){if(de=!0,ge&&clearTimeout(ge),an>0&&o<r.length-1){const oe=o+1;a(oe),J.scrollTo({top:oe*window.innerHeight,behavior:"smooth"})}else if(an<0&&o>0){const oe=o-1;a(oe),J.scrollTo({top:oe*window.innerHeight,behavior:"smooth"})}ge=setTimeout(()=>{de=!1},800)}};return J.addEventListener("touchstart",pe,{passive:!1}),J.addEventListener("touchmove",mt,{passive:!1}),J.addEventListener("touchend",Pe,{passive:!1}),J.addEventListener("wheel",Ye,{passive:!1}),()=>{J.removeEventListener("touchstart",pe),J.removeEventListener("touchmove",mt),J.removeEventListener("touchend",Pe),J.removeEventListener("wheel",Ye),ge&&clearTimeout(ge)}},[o,r.length,h]),d.useEffect(()=>{const J=G.current;J&&(W||q?(J.style.overflow="hidden",J.style.touchAction="none"):(J.style.overflow="auto",J.style.touchAction="auto"))},[W,q]),d.useEffect(()=>{(W||q)&&V.current&&(clearTimeout(V.current),V.current=null)},[W,q]);const xe=async J=>{try{const Re=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:ge}=Bs.parse(Re,{header:!0,skipEmptyLines:!0}),mt=ge.map((Pe,Ue)=>{var oe,me;const St=[Pe.option1,Pe.option2,Pe.option3,Pe.option4].filter(Boolean),an={A:0,B:1,C:2,D:3};return{id:Pe.id||`q_${Ue}`,prompt:Pe.question,options:St,answerIndex:an[(oe=Pe.answer)==null?void 0:oe.toUpperCase()]||0,category:Pe.category||"General Knowledge",difficulty:((me=Pe.difficulty)==null?void 0:me.toLowerCase())||"medium",explanation:Pe.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(Pe=>Pe.prompt&&Pe.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(Pe=>({...Pe,mascot:ve[Math.floor(Math.random()*ve.length)]}));i(mt),C(!1)}catch(de){console.error("Failed to load questions:",de),C(!1)}},De=J=>J===1||J===3||J===7||J===10||J===15||J===20||J>20&&J%5===0,Fe=(J,de)=>{if(l[J]!==void 0)return;const Re=r.find(pe=>pe.id===J),ge=de===Re.answerIndex,Ye=r.findIndex(pe=>pe.id===J);if(c(pe=>({...pe,[J]:de})),Z(pe=>pe+1),P(pe=>pe+1),ge){if(ae(),f(pe=>pe+1),b(pe=>pe+10),ee(!0),setTimeout(()=>{je()},300),setTimeout(()=>ee(!1),2e3),ye(),De(Ye+1)){const pe=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];F(pe[Math.floor(Math.random()*pe.length)]),k(!0),setTimeout(()=>k(!1),2e3)}}else if(ke(),f(0),A(!0),setTimeout(()=>A(!1),1500),p(pe=>{const mt=Math.max(0,pe-1);return mt===0&&setTimeout(()=>te(!0),500),mt}),x>1&&De(Ye+1)){const pe=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];F(pe[Math.floor(Math.random()*pe.length)]),k(!0),setTimeout(()=>k(!1),2e3)}(x>1||ge)&&(V.current=setTimeout(()=>{_e()},2500))},ye=()=>{const J=document.createElement("div");J.style.position="fixed",J.style.inset="0",J.style.pointerEvents="none",J.style.zIndex="1000",document.body.appendChild(J);const de=["🎉","✨","⭐","🎊","🌟"];for(let Re=0;Re<20;Re++){const ge=document.createElement("div");ge.textContent=de[Math.floor(Math.random()*de.length)],ge.style.position="fixed",ge.style.left=`${Math.random()*100}%`,ge.style.top="-50px",ge.style.fontSize="24px",ge.style.animation=`fall ${2+Math.random()*2}s ease-out`,J.appendChild(ge)}setTimeout(()=>J.remove(),4e3)},_e=()=>{if(!(W||q)&&o<r.length-1){const J=o+1,de=document.getElementById(`question-${J}`);de==null||de.scrollIntoView({behavior:"smooth"}),a(J)}},Ke=J=>{const de=r.findIndex(pe=>pe.id===J);if(I>=0&&$<5){m(`After ${5-$} attempts`),setTimeout(()=>m(null),2e3);return}const Re=r[de],Ye=[0,1,2,3].filter(pe=>pe!==Re.answerIndex).sort(()=>Math.random()-.5).slice(0,2);X({...ue,[J]:Ye}),Q(de),Z(0)},rt=J=>{const de=r.findIndex(Ue=>Ue.id===J);if(H>=0&&ce<5){m(`After ${5-ce} attempts`),setTimeout(()=>m(null),2e3);return}const ge=r[de].answerIndex,Ye=[0,0,0,0],pe=40+Math.floor(Math.random()*31);Ye[ge]=pe;let mt=100-pe;const Pe=[0,1,2,3].filter(Ue=>Ue!==ge);for(let Ue=0;Ue<Pe.length-1;Ue++){const St=Math.floor(Math.random()*(mt/2));Ye[Pe[Ue]]=St,mt-=St}Ye[Pe[Pe.length-1]]=mt,B({...ne,[J]:Ye}),K(de),P(0)},Me=(J,de)=>{ze(),M(J),v(de),S(!1),xe()},Le=()=>{Ee("/swipe"),Y(!0)},Xe=()=>{E(!0),Y(!1),document.body.classList.remove("hide-bottom-nav")},ar=()=>{const J=Object.keys(l).filter(de=>{const Re=r.find(ge=>ge.id===de);return l[de]===(Re==null?void 0:Re.answerIndex)}).length;return d.useEffect(()=>{document.body.classList.add("hide-bottom-nav");const de=setTimeout(()=>{t(w),ze(),L(!1),E(!1),S(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(de),document.body.classList.remove("hide-bottom-nav")}},[]),s.jsx("div",{className:"fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),s.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[s.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),s.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(l).length})]}),s.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[s.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),s.jsx("div",{className:"text-2xl font-bold text-green-400",children:J})]}),s.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[s.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),s.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",w]})]}),s.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[s.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),s.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(de,Re)=>s.jsx("span",{className:Re<x?"":"opacity-30",children:"❤️"},Re))})]})]})]})})};return D?s.jsx(ar,{}):h?s.jsx(kg,{onSelect:Me}):j?s.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white",children:"Loading questions..."})}):s.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[s.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[s.jsx("button",{onClick:Le,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs("div",{className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[s.jsx("span",{children:"🪙"}),s.jsx("span",{className:"font-bold text-yellow-400",children:w})]}),s.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[s.jsx("span",{children:"🔥"}),s.jsx("span",{className:"font-bold text-orange-400",children:u})]})]}),s.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(J,de)=>s.jsx("span",{className:`${de<x?"text-red-500":"text-gray-600 opacity-30"} ${T&&de===x-1?"animate-heartLoss":""}`,children:"❤️"},de))})]}),N&&s.jsx("div",{className:"text-center py-1",children:s.jsx("span",{className:"text-xs text-gray-400",children:N})})]}),O&&s.jsx("div",{className:"fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:s.jsx("div",{className:"bg-yellow-500 text-white px-4 py-2 rounded-full font-bold animate-coinFloat",children:"+10 🪙"})}),s.jsx("div",{ref:G,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:r.map((J,de)=>s.jsx(Sg,{question:J,index:de,answered:l[J.id],onAnswer:Re=>Fe(J.id,Re),onFiftyFifty:()=>Ke(J.id),onAudience:()=>rt(J.id),eliminated:ue[J.id]||[],audiencePercentages:ne[J.id],canUseFiftyFifty:I<0||$>=5,canUseAudience:H<0||ce>=5},J.id))}),q&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-5xl mb-4",children:"😔"}),s.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),s.jsx("button",{onClick:()=>{E(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),W&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),s.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>Y(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),s.jsx("button",{onClick:Xe,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),y&&s.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:s.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:_})}),g&&s.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:s.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:g})}),s.jsx("style",{jsx:!0,children:`
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
      `})]})},Sg=({question:e,index:t,answered:n,onAnswer:r,onFiftyFifty:i,onAudience:o,eliminated:a,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:u})=>{const f=x=>{switch(x){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return s.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[s.jsx("div",{className:"flex justify-center py-2",children:s.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),s.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[s.jsxs("div",{className:`bg-gradient-to-br ${f(e.difficulty)} p-6 rounded-3xl mb-4`,children:[s.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),s.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),s.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((x,p)=>{const w=n!==void 0,b=n===p,j=p===e.answerIndex,C=a.includes(p);let g="w-full p-4 rounded-2xl font-medium transition-all ";return C?g+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":w?j?g+="bg-green-500 text-white":b?g+="bg-red-500 text-white":g+="bg-gray-700 text-gray-400":g+="bg-gray-800 text-white hover:bg-gray-700",s.jsx("button",{onClick:()=>!w&&!C&&r(p),disabled:w||C,className:g,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][p]}),s.jsx("span",{className:"flex-1 text-left",children:x}),l&&l[p]>0&&s.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[p],"%"]}),w&&j&&s.jsx("span",{children:"✓"})]})},p)})}),!n&&s.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[s.jsx("button",{onClick:i,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),s.jsx("button",{onClick:o,disabled:!u,className:`px-4 py-2 rounded-lg font-medium text-sm ${u?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),s.jsx("div",{className:"text-center mt-3 mb-2",children:s.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),s.jsx("div",{className:"text-center mt-12 mb-4",children:s.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function Cg(){const e=yt(),[t,n]=d.useState(""),{player:r,levelProgress:i}=bn(),o=()=>{try{const u=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),f=new Date().setHours(0,0,0,0);return u.sessions.filter(p=>new Date(p.timestamp).setHours(0,0,0,0)===f&&p.mode==="quiz").reduce((p,w)=>p+(w.earnedCoins||0),0)}catch{return 0}},a={name:(r==null?void 0:r.name)||"Player",rank:23,streak:(r==null?void 0:r.currentStreak)||0,todayQuizzes:3,todayCoins:o()};d.useEffect(()=>{const u=new Date().getHours();u<12?n("Good morning"):u<17?n("Good afternoon"):n("Good evening")},[]);const l=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,c=i.required>0?i.current/i.required*100:0;return s.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-12 px-3",children:[s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{children:[s.jsxs("h1",{className:"text-2xl font-bold",children:[t," 👋"]}),s.jsx("p",{className:"text-white/60 text-sm",children:"Ready for today's challenge?"})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-12 h-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:s.jsx("span",{className:"text-xl",children:"⚙️"})})]}),s.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[s.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:a.name[0]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"text-lg font-semibold",children:r.name||"Player"}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",r.level]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[r.coins," 🪙"]}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",a.rank]})]})]}),s.jsxs("div",{className:"mb-3",children:[s.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[s.jsx("span",{children:"XP Progress"}),s.jsxs("span",{children:[i.current,"/",i.required]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${c}%`}})})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",a.streak]}),s.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",a.todayCoins]}),s.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),s.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${l} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),s.jsxs("div",{className:"relative flex items-start justify-between",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),s.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),s.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),s.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{onClick:()=>e("/profile/history"),className:`${l} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),s.jsx("div",{className:"text-3xl mb-3",children:"📊"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),s.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",a.todayQuizzes," today"]})]}),s.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${l} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),s.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),s.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${l} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[s.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),s.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),s.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${l} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[s.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),s.jsxs("div",{className:"mt-4 space-y-3",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${l} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"🔥"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),s.jsxs("div",{className:"text-[11px] opacity-80",children:[a.streak," days strong"]})]})]})}),s.jsx("button",{onClick:()=>e("/profile/quests"),className:`${l} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"⚡"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:`${l} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),s.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),s.jsx("div",{className:"text-white/40",children:"→"})]})})]}),s.jsx("div",{className:"h-6"})]})}const es="🪙",oi={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},ai=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function Eg(){var p,w;const e=yt(),{player:t}=bn(),n={global:oi.global.map(b=>b.you?{...b,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:b),friends:oi.friends.map(b=>b.you?{...b,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:b),india:oi.india.map(b=>b.you?{...b,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:b)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",n.friends[0]);const[r,i]=d.useState({days:2,hours:14,minutes:17}),[o,a]=d.useState("global"),l=n[o]||n.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(p=l.find(b=>b.you))==null?void 0:p.score);const c=l.find(b=>b.you),u=l.slice(0,3),f=l.slice(3);d.useEffect(()=>{const b=j=>{j.preventDefault(),e(-1)};return window.addEventListener("popstate",b),()=>{window.removeEventListener("popstate",b)}},[e]),d.useEffect(()=>{const b=setInterval(()=>{i(j=>j.minutes>0?{...j,minutes:j.minutes-1}:j.hours>0?{...j,hours:j.hours-1,minutes:59}:j.days>0?{...j,days:j.days-1,hours:23,minutes:59}:j)},6e4);return()=>clearInterval(b)},[]);const x=b=>{const j=Math.max(...l.map(g=>g.score)),C=b/j*100;return C>=90?ai[0]:C>=70?ai[1]:C>=40?ai[2]:ai[3]};return s.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-5",children:[s.jsx("button",{onClick:()=>e("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),s.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",r.days,"d ",r.hours,"h ",r.minutes,"m"]})]}),s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),s.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${x(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),s.jsxs("div",{className:"relative z-10",children:[s.jsx("div",{className:"text-2xl mb-1",children:x(c==null?void 0:c.score).icon}),s.jsxs("div",{className:"text-sm font-bold text-white",children:[x(c==null?void 0:c.score).name," League"]}),s.jsx("div",{className:"text-xs text-white/80",children:o==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),s.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:oi.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(b=>s.jsxs("button",{onClick:()=>a(b.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${o===b.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[s.jsx("div",{children:b.label}),s.jsx("div",{className:`text-[10px] ${o===b.key?"text-black/70":"text-white/60"}`,children:b.count})]},b.key))}),s.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),s.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[s.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),s.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),s.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",o==="global"?"Global":o==="friends"?"Friends":"India"]})]})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",es]}),s.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),s.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),s.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),s.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),s.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),s.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[u[1]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(li,{src:u[1].avatar,fallback:u[1].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ci(u[1].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[1].score," ",es]})]}),u[0]&&s.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(li,{src:u[0].avatar,fallback:u[0].name,size:72}),s.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:s.jsx(_g,{})}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),s.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:ci(u[0].name,8)}),s.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[u[0].score," ",es]}),s.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),u[2]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(li,{src:u[2].avatar,fallback:u[2].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ci(u[2].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[2].score," ",es]})]})]})]})]}),f.length>0&&s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[s.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),s.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),s.jsx("ul",{className:"space-y-1.5",children:f.map((b,j)=>s.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${b.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${j*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx(Rg,{n:b.rank,you:b.you}),s.jsx(li,{src:b.avatar,fallback:b.name,size:36}),s.jsxs("div",{className:"flex flex-col leading-tight",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm font-semibold",children:ci(b.name,12)}),s.jsx("span",{className:"text-xs",children:b.country}),b.friend&&s.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),s.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${b.you?"text-black/70":"text-white/60"}`,children:[s.jsx("span",{children:b.handle}),s.jsxs("span",{children:["🔥",b.streak]})]})]})]}),s.jsxs("div",{className:"flex flex-col items-end",children:[s.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[s.jsx("span",{children:b.score}),s.jsx("span",{className:b.you?"opacity-90":"opacity-80",children:es})]}),s.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${b.trend.startsWith("+")?"bg-green-500/20 text-green-400":b.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:b.trend})]})]},`${o}-${b.rank}`))})]}),c&&c.rank>1&&s.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[s.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),s.jsx("div",{className:"text-xs text-white/70 mb-3",children:o==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((w=l[c.rank-2])==null?void 0:w.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(o==="friends"&&c.rank===1)&&s.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),s.jsx("style",{jsx:!0,children:`
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
      `})]})}function li({src:e,fallback:t,size:n=56}){const r=Pg(t);return s.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:n,height:n},children:e?s.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):s.jsx("span",{className:"text-sm font-semibold",children:r})})}function _g(){return s.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[s.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[s.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),s.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),s.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function Rg({n:e,you:t}){return s.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function ci(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function Pg(e=""){var n;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((n=t[1])==null?void 0:n[0])||"")).toUpperCase()}const Tg="qp_recent",zg="qp_review_snapshot",_u=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function Mg(){const[e,t]=d.useState("quizzes"),[n,r]=d.useState(null),[i,o]=d.useState(!1),[a,l]=d.useState("all"),[c,u]=d.useState("all"),[f,x]=d.useState("date"),[p,w]=d.useState([]),[b,j]=d.useState(!0),C=yt(),g=N=>{if(!N)return"00:00";const v=Math.floor(N/1e3),y=Math.floor(v/60),k=v%60;return`${String(y).padStart(2,"0")}:${String(k).padStart(2,"0")}`},m=N=>{if(!N)return"Unknown";const v=new Date(N),k=Math.floor((new Date-v)/(1e3*60*60*24));return k===0?"Today":k===1?"Yesterday":k<7?`${k} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][v.getMonth()]} ${v.getDate()}`};d.useEffect(()=>{let N=!1;j(!0);const v=_=>{try{return JSON.parse(_)}catch{return null}},y=_=>encodeURIComponent(String(_).trim().toLowerCase().replace(/\s+/g,"-")),k=_=>{var T,A,O,ee;const F=Number(_.ts??_.timestamp??_.id)||Date.now(),q=Number(_.ms)||0,te=Number(_.total)||0,W=Number(_.correct)||0,D=String(_.mode||"").toLowerCase().includes("practice")?"practice":"quiz",E=((T=_.snapshot)==null?void 0:T.category)||((A=_.snapshot)==null?void 0:A.categoryLabel)||_.cat||_.category||"Unknown",z=((O=_.snapshot)==null?void 0:O.categoryParam)||y(E),L=String(((ee=_.snapshot)==null?void 0:ee.difficulty)||_.difficulty||"medium").toLowerCase();return{id:_.id??F,type:D,category:E,categoryParam:z,difficulty:L,score:W,total:te,accuracy:te?Math.round(W/te*100):0,time:g(q),ms:q,date:m(F),timestamp:F,snapshot:_.snapshot??null,mode:_.mode||(D==="practice"?"Practice":"Quiz")}};try{const _=localStorage.getItem(Tg),F=_?v(_):null,te=(Array.isArray(F)&&F.length?F:_u).map(k).filter(W=>W&&W.timestamp).sort((W,Y)=>Y.timestamp-W.timestamp);N||w(te)}catch(_){console.error("Error loading history:",_),N||w(_u)}finally{N||j(!1)}return()=>{N=!0}},[]);const h=d.useMemo(()=>{const N=new Set(p.map(v=>v.category));return Array.from(N)},[p]),S=d.useMemo(()=>{let N=p.filter(v=>e==="quizzes"?v.type==="quiz":v.type==="practice");return a!=="all"&&(N=N.filter(v=>v.category===a)),c!=="all"&&(N=N.filter(v=>v.difficulty===c)),N.sort((v,y)=>f==="date"?y.timestamp-v.timestamp:f==="score"?y.accuracy-v.accuracy:f==="time"?v.ms-y.ms:0),N},[p,e,a,c,f]),R=d.useMemo(()=>{if(S.length===0)return null;const N=S.reduce((_,F)=>_+F.score,0),v=S.reduce((_,F)=>_+F.total,0),y=v?Math.round(N/v*100):0,k=S.reduce((_,F)=>_+F.ms,0);return{count:S.length,avgAccuracy:y,totalTime:g(k),bestScore:Math.max(...S.map(_=>_.accuracy))}},[S]),M=N=>N>=80?"text-green-400":N>=60?"text-blue-400":N>=40?"text-yellow-400":"text-red-400";return b?s.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white",children:"Loading history..."})}):s.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[s.jsx("div",{className:"",children:s.jsxs("div",{className:"px-4 pt-4 pb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("button",{onClick:()=>C("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),s.jsx("button",{onClick:()=>o(!i),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:s.jsx(Ig,{})})]}),s.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),s.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),s.jsxs("div",{className:"px-4 pb-20",children:[s.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:s.jsx("div",{className:"flex items-center",children:s.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(N=>s.jsxs("button",{onClick:()=>t(N.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===N.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[s.jsx("span",{className:"mr-1",children:N.icon}),N.label]},N.value))})})}),R&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[s.jsx(ui,{label:"Total",value:R.count}),s.jsx(ui,{label:"Avg Score",value:`${R.avgAccuracy}%`,color:M(R.avgAccuracy)}),s.jsx(ui,{label:"Best Score",value:`${R.bestScore}%`,color:"text-green-400"}),s.jsx(ui,{label:"Total Time",value:R.totalTime})]})}),i&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),s.jsxs("select",{value:a,onChange:N=>l(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All Categories"}),h.map(N=>s.jsx("option",{value:N,children:N},N))]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),s.jsxs("select",{value:c,onChange:N=>u(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All"}),s.jsx("option",{value:"easy",children:"Easy"}),s.jsx("option",{value:"medium",children:"Medium"}),s.jsx("option",{value:"hard",children:"Hard"})]})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),s.jsxs("select",{value:f,onChange:N=>x(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"date",children:"Date"}),s.jsx("option",{value:"score",children:"Score"}),s.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),S.length===0?s.jsxs("div",{className:"text-center py-12",children:[s.jsx("div",{className:"text-4xl mb-3",children:"📚"}),s.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),s.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):s.jsx("div",{className:"space-y-3",children:S.map((N,v)=>s.jsx(Lg,{item:N,index:v,onClick:()=>r(N)},N.id))})]}),n&&s.jsx(Fg,{item:n,onClose:()=>r(null)})]})}function ui({label:e,value:t,color:n="text-white"}){return s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),s.jsx("div",{className:`text-lg font-bold ${n}`,children:t})]})}function Lg({item:e,index:t,onClick:n}){const r=a=>a>=80?"from-green-500/20 to-green-600/10 border-green-500/30":a>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":a>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",o=(a=>{const l=a==null?void 0:a.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return s.jsxs("div",{onClick:n,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${r(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),s.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${o.bg} ${o.text} ${o.border} border`,children:e.difficulty}),s.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),s.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),s.jsxs("div",{className:"flex items-center justify-between text-xs",children:[s.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[s.jsxs("span",{children:["⏱ ",e.time]}),s.jsx("span",{children:e.mode})]}),s.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function Fg({item:e,onClose:t}){const n=yt();return d.useEffect(()=>{const r=i=>{i.key==="Escape"&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t]),s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:s.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),s.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Category"}),s.jsx("span",{className:"text-white font-medium",children:e.category})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Difficulty"}),s.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Score"}),s.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Accuracy"}),s.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-white/60",children:"Time"}),s.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&s.jsx("button",{onClick:()=>{t(),localStorage.setItem(zg,JSON.stringify(e.snapshot)),n(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),s.jsx("button",{onClick:()=>{var r;t(),n(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((r=e.snapshot)==null?void 0:r.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function Ig(){return s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Dg=d.createContext({});function m0(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const Ag=typeof window<"u",Og=Ag?d.useLayoutEffect:d.useEffect,p0=d.createContext(null);function $g(e){return typeof e=="object"&&e!==null}function Bg(e){return $g(e)&&"offsetHeight"in e}const Ug=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class qg extends d.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=Bg(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Wg({children:e,isPresent:t,anchorX:n,root:r}){const i=d.useId(),o=d.useRef(null),a=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(Ug);return d.useInsertionEffect(()=>{const{width:c,height:u,top:f,left:x,right:p}=a.current;if(t||!o.current||!c||!u)return;const w=n==="left"?`left: ${x}`:`right: ${p}`;o.current.dataset.motionPopId=i;const b=document.createElement("style");l&&(b.nonce=l);const j=r??document.head;return j.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${w}px !important;
            top: ${f}px !important;
          }
        `),()=>{j.contains(b)&&j.removeChild(b)}},[t]),s.jsx(qg,{isPresent:t,childRef:o,sizeRef:a,children:d.cloneElement(e,{ref:o})})}const Qg=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a,anchorX:l,root:c})=>{const u=m0(Hg),f=d.useId();let x=!0,p=d.useMemo(()=>(x=!1,{id:f,initial:t,isPresent:n,custom:i,onExitComplete:w=>{u.set(w,!0);for(const b of u.values())if(!b)return;r&&r()},register:w=>(u.set(w,!1),()=>u.delete(w))}),[n,u,r]);return o&&x&&(p={...p}),d.useMemo(()=>{u.forEach((w,b)=>u.set(b,!1))},[n]),d.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),a==="popLayout"&&(e=s.jsx(Wg,{isPresent:n,anchorX:l,root:c,children:e})),s.jsx(p0.Provider,{value:p,children:e})};function Hg(){return new Map}function Yg(e=!0){const t=d.useContext(p0);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=d.useId();d.useEffect(()=>{if(e)return i(o)},[e]);const a=d.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,a]:[!0]}const di=e=>e.key||"";function Ru(e){const t=[];return d.Children.forEach(e,n=>{d.isValidElement(n)&&t.push(n)}),t}const Ko=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:a=!1,anchorX:l="left",root:c})=>{const[u,f]=Yg(a),x=d.useMemo(()=>Ru(e),[e]),p=a&&!u?[]:x.map(di),w=d.useRef(!0),b=d.useRef(x),j=m0(()=>new Map),[C,g]=d.useState(x),[m,h]=d.useState(x);Og(()=>{w.current=!1,b.current=x;for(let M=0;M<m.length;M++){const N=di(m[M]);p.includes(N)?j.delete(N):j.get(N)!==!0&&j.set(N,!1)}},[m,p.length,p.join("-")]);const S=[];if(x!==C){let M=[...x];for(let N=0;N<m.length;N++){const v=m[N],y=di(v);p.includes(y)||(M.splice(N,0,v),S.push(v))}return o==="wait"&&S.length&&(M=S),h(Ru(M)),g(x),null}const{forceRender:R}=d.useContext(Dg);return s.jsx(s.Fragment,{children:m.map(M=>{const N=di(M),v=a&&!u?!1:x===m||p.includes(N),y=()=>{if(j.has(N))j.set(N,!0);else return;let k=!0;j.forEach(_=>{_||(k=!1)}),k&&(R==null||R(),h(b.current),a&&(f==null||f()),r&&r())};return s.jsx(Qg,{isPresent:v,initial:!w.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:v?void 0:y,anchorX:l,children:M},N)})})},Vg=()=>{const[e,t]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const B=sessionStorage.getItem("navigationSource");B&&t(B)}},[]);const n=B=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=B)},r=()=>{if(typeof window<"u"){const B=sessionStorage.getItem("navigationSource");window.location.href="/profile",sessionStorage.removeItem("navigationSource")}},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},{player:a,addCoins:l}=bn(),[c,u]=d.useState(4),[f,x]=d.useState((a==null?void 0:a.coins)||0),[p,w]=d.useState(4),[b,j]=d.useState(!1),[C,g]=d.useState(!1),[m,h]=d.useState(0),[S,R]=d.useState(0),[M,N]=d.useState("cycle"),[v,y]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[k,_]=d.useState([0,1,2,3]),[F,q]=d.useState(!1),[te,W]=d.useState(!1),[Y,D]=d.useState(null),[E,z]=d.useState(null),[L,T]=d.useState(!1),[A,O]=d.useState(null),[ee,$]=d.useState(!1),Z=d.useRef(null),ce=d.useRef(null),P=d.useRef(null);d.useEffect(()=>{Z.current=new Audio("/sounds/reward.mp3"),ce.current=new Audio("/sounds/reward_progress.mp3"),[Z,ce].forEach(B=>{var G;(G=B.current)==null||G.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const I=B=>{try{B.current&&(B.current.currentTime=0,B.current.play().catch(G=>console.log("Audio play failed:",G)))}catch(G){console.log("Sound play error:",G)}},Q=(B,G)=>{if(B>c){z(G),W(!0);return}B===c&&K(B,G)},H=B=>{var V;const G=(V=P.current)==null?void 0:V.querySelector(`[data-index="${B}"]`);if(G){const ae=G.getBoundingClientRect(),ke=window.pageYOffset||document.documentElement.scrollTop,je=ae.top+ke-window.innerHeight/2+50;window.scrollTo({top:je,behavior:"smooth"})}},K=(B,G)=>{if(!k.includes(B)){if(G.cost>0&&f<G.cost){z(G),W(!0);return}G.cost>0&&(x(V=>V-G.cost),l(-G.cost)),I(Z),q(!0),z(G),_(V=>[...V,B]),setTimeout(()=>{q(!1),G.type==="coins"?(h(G.value),j(!0),setTimeout(()=>{x(V=>V+G.value),l(G.value),setTimeout(()=>{j(!1),h(0)},500)},300)):G.type==="life"?(R(G.value),g(!0),setTimeout(()=>{w(V=>V+G.value),setTimeout(()=>{g(!1),R(0)},500)},300)):(O({icon:G.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{O(null),$(!0),ue(G),G.type==="vehicle"&&N(G.value),setTimeout(()=>{$(!1)},500)},800)),setTimeout(()=>{if(c<i.length-1){const V=c+1;H(V),setTimeout(()=>{T(!0),I(ce),u(V),setTimeout(()=>{T(!1)},500)},300)}},1200)},1500)}},ue=B=>{y(G=>G.find(ae=>ae.icon===B.icon)?G.map(ae=>ae.icon===B.icon?{...ae,count:ae.count+1}:ae):[...G,{type:B.type,icon:B.icon,name:B.label,count:1}])},X=B=>30+B*100,ne=()=>30+c*100;return s.jsxs("div",{className:"rewards-page",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsx("div",{className:"non-sticky-header",children:s.jsx("button",{className:"back-button",onClick:r,children:"← Back"})}),s.jsxs("div",{className:"sticky-section",children:[s.jsxs("div",{className:"header-wrapper",children:[s.jsxs("div",{className:"title-row",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"title",children:"Rewards"}),s.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),s.jsx("button",{className:"play-quiz-btn",onClick:()=>n("/play"),children:"Play Quiz"})]}),s.jsx("div",{className:"balance-row",children:s.jsx("div",{className:"balance-item",children:s.jsxs("div",{children:[s.jsx("div",{className:"balance-label",children:"Balance"}),s.jsxs("div",{className:`balance-value ${b?"animating":""}`,children:[f.toLocaleString()," 🪙",b&&s.jsxs("span",{className:"value-change",children:["+",m]})]})]})})})]}),s.jsx("div",{className:"stats-cards-container",children:s.jsxs("div",{className:"info-grid",children:[s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"❤️"}),s.jsxs("div",{className:`info-value ${C?"animating":""}`,children:[p,C&&s.jsxs("span",{className:"value-change",children:["+",S]})]}),s.jsx("div",{className:"info-label",children:"Lives"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"⭐"}),s.jsx("div",{className:"info-value",children:"5"}),s.jsx("div",{className:"info-label",children:"Level"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:o[M].icon}),s.jsx("div",{className:"info-value",children:o[M].name}),s.jsx("div",{className:"info-label",children:"Vehicle"})]}),s.jsxs("div",{className:`cards-section ${ee?"animating":""}`,children:[s.jsx("div",{className:"cards-label",children:"Your Cards"}),s.jsx("div",{className:"card-grid",children:v.map((B,G)=>s.jsxs("div",{className:"card-item",onClick:()=>D(B),children:[s.jsxs("div",{className:"large-card",children:[s.jsx("div",{className:"large-card-icon",children:B.icon}),s.jsx("div",{className:"large-card-name",children:B.name})]}),B.count>1&&s.jsx("div",{className:"card-count-badge",children:B.count})]},G))})]})]})})]}),s.jsx("div",{className:"scrollable-journey",children:s.jsx("div",{className:"journey-container",ref:P,children:s.jsxs("div",{className:"journey-track",children:[s.jsx("div",{className:"curvy-road",children:s.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),s.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),s.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),s.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-c/(i.length-1)*1500})]})}),s.jsxs("div",{className:"avatar-tracker",style:{top:`${ne()}px`},children:[s.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:B=>{B.target.style.display="none"}}),s.jsx("div",{className:"tracker-vehicle",children:o[M].icon})]}),s.jsx("div",{className:"rewards-list",children:i.map((B,G)=>{const V=G%2===0,ae=G>c,ke=k.includes(G),je=G===c;return s.jsx("div",{className:"reward-row","data-index":G,style:{top:`${X(G)}px`},children:s.jsxs("div",{className:`reward-item ${V?"left":"right"}`,children:[s.jsxs("div",{className:`checkpoint ${je?"current":ke?"claimed":ae?"locked":""}`,onClick:()=>Q(G,B),children:[s.jsx("div",{className:"checkpoint-icon",children:B.icon}),s.jsx("div",{className:"checkpoint-value",children:B.label.split(" ")[0]}),B.milestone&&s.jsx("div",{className:"milestone-badge",children:"BONUS"}),ae&&s.jsx("div",{className:"lock-icon",children:"🔒"})]}),s.jsxs("div",{className:"reward-info",children:[s.jsx("div",{className:"reward-name",children:B.label}),s.jsxs("div",{className:"step-label",children:["Step ",G+1]})]})]})},B.id)})})]})})}),A&&s.jsx("div",{className:"flying-card",style:{left:`${A.startX}px`,top:`${A.startY}px`,"--startX":`${A.startX}px`},children:A.icon}),s.jsx(Ko,{children:Y&&s.jsx("div",{className:"claim-overlay",onClick:()=>D(null),children:s.jsxs("div",{className:"modal",onClick:B=>B.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:Y.icon}),s.jsx("div",{className:"card-detail-name",children:Y.name}),s.jsxs("div",{className:"card-detail-desc",children:["You have ",Y.count," of these cards"]}),s.jsx("div",{className:"modal-buttons",children:s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>D(null),children:"Close"})})]})})}),s.jsx(Ko,{children:F&&E&&s.jsx("div",{className:"claim-overlay",children:s.jsxs("div",{className:"modal",children:[s.jsx("div",{className:"modal-title",children:"WELL DONE!"}),s.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),s.jsx("div",{className:"modal-icon",children:E.icon}),s.jsxs("div",{className:"modal-value",children:["+",E.value," ",E.type==="coins"?"Coins":E.type==="life"?"Lives":E.label]})]})})}),s.jsx(Ko,{children:te&&E&&s.jsx("div",{className:"claim-overlay",onClick:()=>W(!1),children:s.jsxs("div",{className:"modal",onClick:B=>B.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:"🪙"}),s.jsx("div",{className:"modal-title",children:"Need More Coins"}),s.jsx("div",{className:"modal-subtitle",children:E.cost>0?`You need ${E.cost-f} more coins`:"Complete previous rewards first"}),s.jsxs("div",{className:"modal-buttons",children:[s.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>n("/play"),children:"Play Quiz"}),s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>W(!1),children:"Cancel"})]})]})})})]})},fi=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function Gg(){const[e,t]=d.useState(null),n=fi.filter(i=>i.unlocked).length,r=Math.round(n/fi.length*100);return s.jsxs("div",{className:"badges-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Badge Collection"}),s.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),s.jsxs("div",{className:"progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Collection Progress"}),s.jsxs("span",{className:"progress-value",children:[n,"/",fi.length]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${r}%`}})})]}),s.jsx("div",{className:"badges-grid",children:fi.map(i=>s.jsxs("div",{className:`badge-card ${i.unlocked?"unlocked":""}`,style:{"--badge-color":i.color},onClick:()=>t(i),children:[s.jsx("div",{className:"badge-glow"}),s.jsx("div",{className:"badge-emoji",children:i.emoji}),s.jsx("div",{className:"badge-name",children:i.name}),!i.unlocked&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"badge-progress",children:s.jsx("div",{className:"badge-progress-fill",style:{width:`${i.progress}%`}})}),s.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},i.id))}),s.jsxs("div",{className:"tips-card",children:[s.jsxs("div",{className:"tips-title",children:[s.jsx("span",{children:"💡"}),s.jsx("span",{children:"Pro Tip"})]}),s.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&s.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:s.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[s.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),s.jsx("h3",{className:"modal-title",children:e.name}),s.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),s.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&s.jsxs("div",{className:"modal-progress-section",children:[s.jsx("div",{className:"modal-progress-label",children:"Progress"}),s.jsx("div",{className:"modal-progress-bar",children:s.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),s.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),s.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const Kg=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function Xg(){const{player:e,addCoins:t}=bn(),[n,r]=d.useState(Kg),[i,o]=d.useState(null),[a,l]=d.useState((e==null?void 0:e.coins)||0),[c,u]=d.useState(!1),[f,x]=d.useState([]),p=n.length,w=n.filter(C=>C.current>=C.target).length,b=Math.round(w/p*100);d.useEffect(()=>{const C=setInterval(()=>{x(g=>{const m={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...g.slice(-4),m]})},3e3);return()=>clearInterval(C)},[]);const j=(C,g)=>{o(C),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{r(m=>m.map(h=>h.id===C?{...h,claimed:!0}:h)),l(m=>m+g),o(null),u(!0),setTimeout(()=>u(!1),2e3)},600)};return s.jsxs("div",{className:"achievements-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"floating-shapes",children:[s.jsx("div",{className:"shape shape-1"}),s.jsx("div",{className:"shape shape-2"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",a.toLocaleString()]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),s.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),s.jsxs("div",{className:"progress-overview",children:[s.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),s.jsxs("div",{className:"overview-header",children:[s.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),s.jsxs("div",{className:"overview-stats",children:[s.jsx("span",{className:"trophy-icon",children:"🏆"}),s.jsxs("span",{className:"overview-value",children:[w,"/",p]})]})]}),s.jsx("div",{className:"progress-bar-main",children:s.jsx("div",{className:"progress-fill-main",style:{width:`${b}%`}})})]}),s.jsx("div",{className:"achievements-list",children:n.map(C=>{const g=Math.min(100,Math.round(C.current/C.target*100)),m=g===100,h=C.color+"CC";return s.jsxs("div",{className:`achievement-card ${m?"completed":""}`,style:{"--card-color":C.color,"--card-color-dark":h},children:[s.jsx("div",{className:"card-glow"}),m&&C.claimed&&s.jsx("div",{className:"completed-badge",children:"✓"}),s.jsxs("div",{className:"card-content",children:[s.jsx("div",{className:"achievement-icon",children:C.icon}),s.jsxs("div",{className:"achievement-details",children:[s.jsx("div",{className:"achievement-title",children:C.title}),s.jsx("div",{className:"achievement-subtitle",children:C.subtitle}),s.jsxs("div",{className:"progress-container",children:[s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill",style:{width:`${g}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{children:[C.current,"/",C.target]}),s.jsxs("span",{className:"reward-badge",children:["🪙 ",C.reward]})]})]})]}),s.jsx("button",{onClick:()=>j(C.id,C.reward),disabled:!m||C.claimed,className:`claim-button ${C.claimed?"claimed":m?"can-claim":"in-progress"} ${i===C.id?"claiming":""}`,children:C.claimed?"✓":m?"CLAIM!":`${g}%`})]})]},C.id)})}),c&&s.jsx("div",{className:"celebration",children:"🎉"})]})}function Jg(){const{player:e,addCoins:t,updateDailyStreak:n}=bn(),r=(e==null?void 0:e.currentStreak)||0,i=(e==null?void 0:e.bestStreak)||0,o=(e==null?void 0:e.totalDays)||0,a=(e==null?void 0:e.coins)||0,l=new Date,c=l.getDay(),u=()=>{const L=new Date(l);return L.setDate(l.getDate()-l.getDay()),L.toISOString().split("T")[0]},[f,x]=d.useState(null),[p,w]=d.useState(!1),[b,j]=d.useState(null),[C,g]=d.useState(null),[m,h]=d.useState(!1),S=d.useRef(null),R=d.useRef(null),[M]=It("/sounds/coin.mp3",{volume:.75}),[N]=It("/sounds/correct.mp3",{volume:.6}),[v,y]=d.useState(()=>{const L=localStorage.getItem("streaks_claimed")||"[]",T=JSON.parse(L),A=u(),O=T.filter(ee=>ee!==`week_${A}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(O)),O});d.useEffect(()=>{const L=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const A=document.querySelector("main");A&&(A.scrollTop=0)};L(),requestAnimationFrame(L);const T=setTimeout(L,100);return()=>clearTimeout(T)},[]),d.useEffect(()=>{h(!0),setTimeout(()=>h(!1),3e3)},[]);const k=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],_=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],F=L=>{const T=v.includes(`week_${u()}_day_${L}`);if(L===0)return{isCompleted:!0,isClaimed:T,canClaim:!T,isLocked:!1};const A=r>=L,O=A&&!T,ee=r<L;return{isCompleted:A,isClaimed:T,canClaim:O,isLocked:ee}},q=(L,T,A)=>{const O=F(T);if(O.isLocked){g({day:T,currentStreak:r}),setTimeout(()=>g(null),2e3);return}O.isClaimed||O.canClaim&&(x({...L,day:T}),w(!1),setTimeout(()=>{w(!0),N(),setTimeout(()=>{if(L.type==="coins"){const Z=parseInt(L.reward);if(R.current&&S.current){const ce=R.current.getBoundingClientRect();M(),j({startRect:ce,count:10,amount:Z})}}const ee=`week_${u()}_day_${T}`,$=[...v,ee];y($),localStorage.setItem("streaks_claimed",JSON.stringify($))},500),setTimeout(()=>{x(null),w(!1)},2500)},500))},te=(L,T)=>{const A=T+1,O=k[T].dayIndex===c;return r>=A?O?"today-completed":"completed":O?"today-pending":A<=r+1?"pending":"future"},W=[{days:3,emoji:"⚡",label:"Starter",achieved:r>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:r>=7},{days:30,emoji:"💎",label:"Champion",achieved:r>=30},{days:100,emoji:"👑",label:"Legend",achieved:r>=100}],Y=W.find(L=>L.days>r)||W[W.length-1],D=Math.min(100,r/Y.days*100),E=()=>{window.location.href="/play"},z=()=>{window.location.href="/profile"};return s.jsxs("div",{className:"streaks-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),b&&s.jsx(Vl,{startRect:b.startRect,targetRef:S,count:b.count,onDone:()=>{t(b.amount),j(null)}}),s.jsxs("div",{className:"header",children:[s.jsxs("div",{className:"header-top",children:[s.jsx("button",{className:"back-button",onClick:z,children:"← Back"}),s.jsxs("div",{className:"coin-pill",ref:S,id:"coin-pill",children:[s.jsx("span",{className:"coin-icon",children:"🪙"}),s.jsx("span",{className:"coin-amount",children:a})]})]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"STREAKS"}),s.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),s.jsxs("div",{className:"streak-hero",children:[s.jsx("div",{className:"fire-animation",children:"🔥"}),s.jsx("div",{className:"streak-number",children:r}),s.jsx("div",{className:"streak-label",children:"DAY STREAK"}),s.jsxs("div",{className:"stats-row",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:i}),s.jsx("div",{className:"stat-label",children:"Best Streak"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:o}),s.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),s.jsxs("div",{className:"weekly-progress-card",children:[s.jsxs("div",{className:"weekly-header",children:[s.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),s.jsxs("div",{className:"weekly-counter",children:[s.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),s.jsxs("span",{className:"weekly-counter-text",children:[Math.min(r,7),"/7"]})]})]}),s.jsx("div",{className:"weekly-days",children:k.map((L,T)=>{const A=te(L.dayIndex,T),O=L.dayIndex===c;return s.jsxs("div",{className:"day-item",children:[s.jsx("div",{className:`day-circle ${A}`,children:A==="completed"||A==="today-completed"?"":L.short}),s.jsx("div",{className:`day-label ${O?"today":""}`,children:L.label})]},T)})}),s.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),s.jsx("div",{className:"rewards-grid",children:_.map((L,T)=>{const A=F(L.day);return s.jsxs("div",{className:`reward-item ${A.isLocked?"locked":A.canClaim?"can-claim":A.isClaimed?"completed":""}`,onClick:O=>q(L,L.day),children:[s.jsxs("div",{className:"reward-day",children:["Day ",L.day]}),s.jsx("div",{className:"reward-icon",children:L.icon}),s.jsx("div",{className:"reward-text",children:L.label})]},T)})})]}),s.jsxs("div",{className:"milestone-section",children:[s.jsx("div",{className:"milestone-header",children:"Next Milestone"}),s.jsxs("div",{className:"milestone-progress",children:[s.jsxs("div",{className:"milestone-info",children:[s.jsxs("div",{className:"milestone-current",children:[s.jsx("span",{className:"milestone-emoji",children:Y.emoji}),s.jsx("span",{className:"milestone-text",children:Y.label})]}),s.jsxs("span",{className:"milestone-target",children:[r,"/",Y.days," days"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${D}%`}})})]})]}),s.jsx("div",{className:"motivational-text",children:r===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${r} strong! Keep going to unlock more rewards!`}),s.jsxs("button",{className:"play-button",onClick:E,children:[s.jsx("span",{children:"Continue Streak"}),s.jsx("span",{children:"→"})]}),C&&s.jsxs("div",{className:"locked-message",children:[s.jsx("span",{className:"locked-message-icon",children:"🔒"}),s.jsx("span",{className:"locked-message-text",children:C.day===1&&C.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${C.day} streak to unlock this reward!`})]}),f&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"modal-overlay"}),s.jsx("div",{className:"reward-modal",ref:R,children:s.jsxs("div",{className:"gift-box",children:[s.jsxs("div",{className:"gift-box-body",children:[s.jsx("div",{className:"gift-box-ribbon"}),s.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),s.jsx("div",{className:`gift-box-lid ${p?"opening":""}`,children:s.jsx("div",{className:"gift-box-bow",children:"🎀"})}),s.jsxs("div",{className:`gift-content ${p?"show":""}`,children:[s.jsx("div",{className:"gift-content-icon",children:f.icon}),s.jsxs("div",{className:"gift-content-title",children:["Day ",f.day]}),s.jsx("div",{className:"gift-content-desc",children:f.label})]})]})})]}),m&&s.jsx("div",{className:"celebration",children:"🎉"})]})}const Zg=[{id:1,title:"Play 3 quizzes today",progress:2,target:3,reward:60,claimed:!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy"},{id:2,title:"Score 8+ twice",progress:1,target:2,reward:80,claimed:!1,icon:"🎯",color:"#4ECDC4",difficulty:"Medium"},{id:3,title:"Practice 15 questions",progress:15,target:15,reward:100,claimed:!0,icon:"📚",color:"#FFD93D",difficulty:"Easy"},{id:4,title:"Win 5 in a row",progress:3,target:5,reward:150,claimed:!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard"},{id:5,title:"Complete a speed run",progress:0,target:1,reward:120,claimed:!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium"}];function ev(){const{player:e,addCoins:t}=bn(),[n,r]=d.useState(Zg),[i,o]=d.useState((e==null?void 0:e.coins)||0),[a,l]=d.useState(null),[c,u]=d.useState(0);d.useEffect(()=>{const w=n.filter(b=>b.progress>=b.target).length;u(Math.round(w/n.length*100))},[n]);const f=(w,b)=>{navigator.vibrate&&navigator.vibrate([20,10,20]),l(w),setTimeout(()=>{r(j=>j.map(C=>C.id===w?{...C,claimed:!0}:C)),o(j=>j+b),t(b),l(null)},600)},x=w=>{switch(w){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},p=()=>{const w=new Date,b=new Date(w);b.setDate(b.getDate()+1),b.setHours(5,0,0,0);const j=b-w,C=Math.floor(j/(1e3*60*60)),g=Math.floor(j%(1e3*60*60)/(1e3*60));return`${C}h ${g}m`};return s.jsxs("div",{className:"quests-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"animated-bg",children:[s.jsx("div",{className:"floating-icon",children:"🎮"}),s.jsx("div",{className:"floating-icon",children:"🎯"}),s.jsx("div",{className:"floating-icon",children:"🏆"}),s.jsx("div",{className:"floating-icon",children:"⭐"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",i]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Daily Quests"}),s.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),s.jsxs("div",{className:"daily-progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Today's Progress"}),s.jsxs("span",{className:"progress-value",children:[c,"%"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${c}%`}})})]}),s.jsx("div",{className:"quests-list",children:n.map(w=>{const b=Math.min(100,Math.round(w.progress/w.target*100)),j=b===100,C=w.color+"CC";return s.jsxs("div",{className:`quest-card ${j?"completed":""}`,style:{"--quest-color":w.color,"--quest-color-dark":C},children:[s.jsx("div",{className:"quest-accent"}),j&&w.claimed&&s.jsx("div",{className:"completed-checkmark",children:"✓"}),s.jsxs("div",{className:"quest-content",children:[s.jsx("div",{className:`quest-icon-container ${a===w.id?"animating":""}`,children:w.icon}),s.jsxs("div",{className:"quest-details",children:[s.jsxs("div",{className:"quest-header",children:[s.jsx("span",{className:"quest-title",children:w.title}),s.jsx("span",{className:"difficulty-badge",style:{background:`${x(w.difficulty)}20`,color:x(w.difficulty)},children:w.difficulty})]}),s.jsxs("div",{className:"progress-info",children:[s.jsx("div",{className:"mini-progress-bar",children:s.jsx("div",{className:"mini-progress-fill",style:{width:`${b}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{className:"progress-numbers",children:[w.progress,"/",w.target]}),s.jsxs("span",{className:"reward-display",children:["🪙 ",w.reward]})]})]})]}),s.jsx("button",{onClick:()=>j&&!w.claimed&&f(w.id,w.reward),disabled:w.claimed,className:`action-button ${w.claimed?"claimed":j?"can-claim":"in-progress"}`,style:!j&&!w.claimed?{"--quest-color":w.color,"--quest-color-dark":C}:{},children:w.claimed?"✓":j?"Claim":"Do it"})]})]},w.id)})}),s.jsxs("div",{className:"timer-card",children:[s.jsx("div",{className:"timer-icon",children:"⏰"}),s.jsx("div",{className:"timer-label",children:"New Quests In"}),s.jsx("div",{className:"timer-value",children:p()})]}),a&&s.jsx("div",{className:"reward-animation",children:"🪙"})]})}function tv({title:e,subtitle:t,children:n}){const r=yt();return s.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>r(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&s.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),s.jsx("div",{className:"w-[68px]"})]}),n]})}function nv(){const e=yt(),[t,n]=d.useState(!0),[r,i]=d.useState(!0),[o,a]=d.useState(!0);return s.jsxs(tv,{title:"Settings",subtitle:"Make it yours",children:[s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[s.jsx(ts,{label:"Sound",right:s.jsx(Xo,{on:t,set:n})}),s.jsx(ts,{label:"Haptics",right:s.jsx(Xo,{on:r,set:i})}),s.jsx(ts,{label:"Notifications",right:s.jsx(Xo,{on:o,set:a})}),s.jsx(ts,{label:"Edit Profile",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),s.jsx(ts,{label:"Privacy Policy",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),s.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function ts({label:e,right:t,onClick:n}){return s.jsxs("button",{type:"button",onClick:n,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[s.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function Xo({on:e,set:t}){return s.jsx("span",{onClick:n=>{n.stopPropagation(),t(r=>!r),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:s.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}const rv={name:"Player",avatar:"wizard",level:1,totalXP:0,coins:0,energy:it.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function sv(){const[e,t]=d.useState(()=>{const u=localStorage.getItem(it.STORAGE_KEYS.PLAYER);return u?JSON.parse(u):rv});d.useEffect(()=>{localStorage.setItem(it.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<it.MAX_ENERGY&&e.energyRegenAt){const u=setInterval(()=>{const f=Date.now();f>=e.energyRegenAt&&t(x=>({...x,energy:Math.min(x.energy+1,it.MAX_ENERGY),energyRegenAt:x.energy+1<it.MAX_ENERGY?f+it.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(u)}},[e.energy,e.energyRegenAt]);const n=d.useCallback(u=>{t(f=>{const x=f.totalXP+u,p=mu(f.totalXP),w=mu(x);let b=[...f.unlockedAvatars];return w>p&&it.AVATARS.forEach(j=>{j.unlockLevel===w&&!b.includes(j.id)&&b.push(j.id)}),{...f,totalXP:x,level:w,unlockedAvatars:b}})},[]),r=d.useCallback(u=>{const x=new Error().stack;console.log("[COINS DEBUG] ================"),console.log("[COINS DEBUG] Amount:",u),console.log("[COINS DEBUG] Called from:",x.split(`
`)[2]),console.log("[COINS DEBUG] Full trace:",x),t(p=>(console.log("[COINS DEBUG] Current:",p.coins,"→ New:",p.coins+u),{...p,coins:p.coins+u}))},[]),i=d.useCallback((u=1)=>e.energy<u?!1:(t(f=>({...f,energy:f.energy-u,energyRegenAt:f.energyRegenAt||Date.now()+it.ENERGY_REGEN_TIME})),!0),[e.energy]),o=d.useCallback(u=>{t(f=>{const x=u?f.comboStreak+1:0;return{...f,comboStreak:x,bestCombo:Math.max(f.bestCombo,x)}})},[]),a=d.useCallback(()=>{t(u=>({...u,comboStreak:0}))},[]),l=d.useCallback(u=>{e.unlockedAvatars.includes(u)&&t(f=>({...f,avatar:u}))},[e.unlockedAvatars]),c=d.useCallback(()=>{const u=new Date().toDateString();t(f=>{if(f.lastPlayedDate===u)return f;const x=new Date;x.setDate(x.getDate()-1);const p=x.toDateString();let w=f.currentStreak;return f.lastPlayedDate===p?w=f.currentStreak+1:(f.lastPlayedDate,w=1),{...f,currentStreak:w,bestStreak:Math.max(f.bestStreak,w),totalDays:f.totalDays+1,lastPlayedDate:u}})},[]);return{player:e,addXP:n,addCoins:r,useEnergy:i,updateCombo:o,resetCombo:a,changeAvatar:l,updateDailyStreak:c,levelProgress:Sx(e.totalXP)}}const h0=d.createContext(null),bn=()=>{const e=d.useContext(h0);if(!e)throw new Error("useGame must be used within GameProvider");return e};function iv({children:e}){const t=sv();return s.jsx(h0.Provider,{value:t,children:e})}function ov(){return s.jsx(iv,{children:s.jsx(Oh,{children:s.jsxs(et,{element:s.jsx(bx,{}),children:[s.jsx(et,{path:"/",element:s.jsx(xu,{})}),s.jsx(et,{path:"/play",element:s.jsx(Jx,{})}),s.jsx(et,{path:"/play/party",element:s.jsx(jg,{})}),s.jsx(et,{path:"/profile",element:s.jsx(Cg,{})}),s.jsx(et,{path:"/profile/leaderboard",element:s.jsx(Eg,{})}),s.jsx(et,{path:"/profile/history",element:s.jsx(Mg,{})}),s.jsx(et,{path:"/profile/rewards",element:s.jsx(Vg,{})}),s.jsx(et,{path:"/profile/badges",element:s.jsx(Gg,{})}),s.jsx(et,{path:"/profile/achievements",element:s.jsx(Xg,{})}),s.jsx(et,{path:"/profile/streaks",element:s.jsx(Jg,{})}),s.jsx(et,{path:"/profile/quests",element:s.jsx(ev,{})}),s.jsx(et,{path:"/profile/settings",element:s.jsx(nv,{})}),s.jsx(et,{path:"/swipe",element:s.jsx(Ng,{})}),s.jsx(et,{path:"/leaders",element:s.jsx(Ih,{to:"/profile/leaderboard",replace:!0})}),s.jsx(et,{path:"/quiz/:category",element:s.jsx(pg,{})}),s.jsx(et,{path:"*",element:s.jsx(xu,{})})]})})})}Jo.createRoot(document.getElementById("root")).render(s.jsx(pt.StrictMode,{children:s.jsx(cx,{children:s.jsx(ov,{})})}));export{x0 as c,Pu as g};
