(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var y0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Td(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pd={exports:{}},eo={},zd={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ms=Symbol.for("react.element"),b0=Symbol.for("react.portal"),w0=Symbol.for("react.fragment"),j0=Symbol.for("react.strict_mode"),N0=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),C0=Symbol.for("react.forward_ref"),E0=Symbol.for("react.suspense"),_0=Symbol.for("react.memo"),R0=Symbol.for("react.lazy"),Jl=Symbol.iterator;function T0(e){return e===null||typeof e!="object"?null:(e=Jl&&e[Jl]||e["@@iterator"],typeof e=="function"?e:null)}var Ld={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Md=Object.assign,Dd={};function Mr(e,t,n){this.props=e,this.context=t,this.refs=Dd,this.updater=n||Ld}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Id(){}Id.prototype=Mr.prototype;function Wa(e,t,n){this.props=e,this.context=t,this.refs=Dd,this.updater=n||Ld}var Va=Wa.prototype=new Id;Va.constructor=Wa;Md(Va,Mr.prototype);Va.isPureReactComponent=!0;var Zl=Array.isArray,Ad=Object.prototype.hasOwnProperty,Ga={current:null},Fd={key:!0,ref:!0,__self:!0,__source:!0};function Od(e,t,n){var s,i={},o=null,a=null;if(t!=null)for(s in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ad.call(t,s)&&!Fd.hasOwnProperty(s)&&(i[s]=t[s]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)i[s]===void 0&&(i[s]=l[s]);return{$$typeof:Ms,type:e,key:o,ref:a,props:i,_owner:Ga.current}}function P0(e,t){return{$$typeof:Ms,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ms}function z0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ec=/\/+/g;function yo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?z0(""+e.key):t.toString(36)}function fi(e,t,n,s,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ms:case b0:a=!0}}if(a)return a=e,i=i(a),e=s===""?"."+yo(a,0):s,Zl(i)?(n="",e!=null&&(n=e.replace(ec,"$&/")+"/"),fi(i,t,n,"",function(d){return d})):i!=null&&(Xa(i)&&(i=P0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ec,"$&/")+"/")+e)),t.push(i)),1;if(a=0,s=s===""?".":s+":",Zl(e))for(var l=0;l<e.length;l++){o=e[l];var c=s+yo(o,l);a+=fi(o,t,n,c,i)}else if(c=T0(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=s+yo(o,l++),a+=fi(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Bs(e,t,n){if(e==null)return e;var s=[],i=0;return fi(e,s,"","",function(o){return t.call(n,o,i++)}),s}function L0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},mi={transition:null},M0={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:mi,ReactCurrentOwner:Ga};function $d(){throw Error("act(...) is not supported in production builds of React.")}ye.Children={map:Bs,forEach:function(e,t,n){Bs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bs(e,function(){t++}),t},toArray:function(e){return Bs(e,function(t){return t})||[]},only:function(e){if(!Xa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ye.Component=Mr;ye.Fragment=w0;ye.Profiler=N0;ye.PureComponent=Wa;ye.StrictMode=j0;ye.Suspense=E0;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;ye.act=$d;ye.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Md({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ga.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Ad.call(t,c)&&!Fd.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];s.children=l}return{$$typeof:Ms,type:e.type,key:i,ref:o,props:s,_owner:a}};ye.createContext=function(e){return e={$$typeof:S0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:k0,_context:e},e.Consumer=e};ye.createElement=Od;ye.createFactory=function(e){var t=Od.bind(null,e);return t.type=e,t};ye.createRef=function(){return{current:null}};ye.forwardRef=function(e){return{$$typeof:C0,render:e}};ye.isValidElement=Xa;ye.lazy=function(e){return{$$typeof:R0,_payload:{_status:-1,_result:e},_init:L0}};ye.memo=function(e,t){return{$$typeof:_0,type:e,compare:t===void 0?null:t}};ye.startTransition=function(e){var t=mi.transition;mi.transition={};try{e()}finally{mi.transition=t}};ye.unstable_act=$d;ye.useCallback=function(e,t){return vt.current.useCallback(e,t)};ye.useContext=function(e){return vt.current.useContext(e)};ye.useDebugValue=function(){};ye.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};ye.useEffect=function(e,t){return vt.current.useEffect(e,t)};ye.useId=function(){return vt.current.useId()};ye.useImperativeHandle=function(e,t,n){return vt.current.useImperativeHandle(e,t,n)};ye.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};ye.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};ye.useMemo=function(e,t){return vt.current.useMemo(e,t)};ye.useReducer=function(e,t,n){return vt.current.useReducer(e,t,n)};ye.useRef=function(e){return vt.current.useRef(e)};ye.useState=function(e){return vt.current.useState(e)};ye.useSyncExternalStore=function(e,t,n){return vt.current.useSyncExternalStore(e,t,n)};ye.useTransition=function(){return vt.current.useTransition()};ye.version="18.3.1";zd.exports=ye;var u=zd.exports;const pt=Td(u);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0=u,I0=Symbol.for("react.element"),A0=Symbol.for("react.fragment"),F0=Object.prototype.hasOwnProperty,O0=D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$0={key:!0,ref:!0,__self:!0,__source:!0};function Bd(e,t,n){var s,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(s in t)F0.call(t,s)&&!$0.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:I0,type:e,key:o,ref:a,props:i,_owner:O0.current}}eo.Fragment=A0;eo.jsx=Bd;eo.jsxs=Bd;Pd.exports=eo;var r=Pd.exports,Jo={},Ud={exports:{}},Pt={},qd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,L){var M=E.length;E.push(L);e:for(;0<M;){var P=M-1>>>1,$=E[P];if(0<i($,L))E[P]=L,E[M]=$,M=P;else break e}}function n(E){return E.length===0?null:E[0]}function s(E){if(E.length===0)return null;var L=E[0],M=E.pop();if(M!==L){E[0]=M;e:for(var P=0,$=E.length,O=$>>>1;P<O;){var ne=2*(P+1)-1,B=E[ne],te=ne+1,ae=E[te];if(0>i(B,M))te<$&&0>i(ae,B)?(E[P]=ae,E[te]=M,P=te):(E[P]=B,E[ne]=M,P=ne);else if(te<$&&0>i(ae,M))E[P]=ae,E[te]=M,P=te;else break e}}return L}function i(E,L){var M=E.sortIndex-L.sortIndex;return M!==0?M:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],d=[],f=1,p=null,h=3,w=!1,y=!1,j=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(E){for(var L=n(d);L!==null;){if(L.callback===null)s(d);else if(L.startTime<=E)s(d),L.sortIndex=L.expirationTime,t(c,L);else break;L=n(d)}}function C(E){if(j=!1,x(E),!y)if(n(c)!==null)y=!0,G(R);else{var L=n(d);L!==null&&D(C,L.startTime-E)}}function R(E,L){y=!1,j&&(j=!1,g(v),v=-1),w=!0;var M=h;try{for(x(L),p=n(c);p!==null&&(!(p.expirationTime>L)||E&&!_());){var P=p.callback;if(typeof P=="function"){p.callback=null,h=p.priorityLevel;var $=P(p.expirationTime<=L);L=e.unstable_now(),typeof $=="function"?p.callback=$:p===n(c)&&s(c),x(L)}else s(c);p=n(c)}if(p!==null)var O=!0;else{var ne=n(d);ne!==null&&D(C,ne.startTime-L),O=!1}return O}finally{p=null,h=M,w=!1}}var z=!1,k=null,v=-1,b=5,N=-1;function _(){return!(e.unstable_now()-N<b)}function A(){if(k!==null){var E=e.unstable_now();N=E;var L=!0;try{L=k(!0,E)}finally{L?q():(z=!1,k=null)}}else z=!1}var q;if(typeof m=="function")q=function(){m(A)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,W=J.port2;J.port1.onmessage=A,q=function(){W.postMessage(null)}}else q=function(){S(A,0)};function G(E){k=E,z||(z=!0,q())}function D(E,L){v=S(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,G(R))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var M=h;h=L;try{return E()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var M=h;h=E;try{return L()}finally{h=M}},e.unstable_scheduleCallback=function(E,L,M){var P=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?P+M:P):M=P,E){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=M+$,E={id:f++,callback:L,priorityLevel:E,startTime:M,expirationTime:$,sortIndex:-1},M>P?(E.sortIndex=M,t(d,E),n(c)===null&&E===n(d)&&(j?(g(v),v=-1):j=!0,D(C,M-P))):(E.sortIndex=$,t(c,E),y||w||(y=!0,G(R))),E},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(E){var L=h;return function(){var M=h;h=L;try{return E.apply(this,arguments)}finally{h=M}}}})(Qd);qd.exports=Qd;var B0=qd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=u,Tt=B0;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yd=new Set,xs={};function ir(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(xs[e]=t,e=0;e<t.length;e++)Yd.add(t[e])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zo=Object.prototype.hasOwnProperty,q0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tc={},nc={};function Q0(e){return Zo.call(nc,e)?!0:Zo.call(tc,e)?!1:q0.test(e)?nc[e]=!0:(tc[e]=!0,!1)}function Y0(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H0(e,t,n,s){if(t===null||typeof t>"u"||Y0(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,n,s,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ct[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ct[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ct[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ct[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ct[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ct[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ct[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ct[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ct[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ka=/[\-:]([a-z])/g;function Ja(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ka,Ja);ct[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ka,Ja);ct[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ka,Ja);ct[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ct[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});ct.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ct[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Za(e,t,n,s){var i=ct.hasOwnProperty(t)?ct[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H0(t,n,i,s)&&(n=null),s||i===null?Q0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,s=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var vn=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Us=Symbol.for("react.element"),lr=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),el=Symbol.for("react.strict_mode"),ea=Symbol.for("react.profiler"),Hd=Symbol.for("react.provider"),Wd=Symbol.for("react.context"),tl=Symbol.for("react.forward_ref"),ta=Symbol.for("react.suspense"),na=Symbol.for("react.suspense_list"),nl=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),Vd=Symbol.for("react.offscreen"),rc=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=rc&&e[rc]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Object.assign,bo;function ns(e){if(bo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bo=t&&t[1]||""}return`
`+bo+e}var wo=!1;function jo(e,t){if(!e||wo)return"";wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var s=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){s=d}e.call(t.prototype)}else{try{throw Error()}catch(d){s=d}e()}}catch(d){if(d&&s&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=s.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{wo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ns(e):""}function W0(e){switch(e.tag){case 5:return ns(e.type);case 16:return ns("Lazy");case 13:return ns("Suspense");case 19:return ns("SuspenseList");case 0:case 2:case 15:return e=jo(e.type,!1),e;case 11:return e=jo(e.type.render,!1),e;case 1:return e=jo(e.type,!0),e;default:return""}}function ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case lr:return"Portal";case ea:return"Profiler";case el:return"StrictMode";case ta:return"Suspense";case na:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wd:return(e.displayName||"Context")+".Consumer";case Hd:return(e._context.displayName||"Context")+".Provider";case tl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nl:return t=e.displayName||null,t!==null?t:ra(e.type)||"Memo";case kn:t=e._payload,e=e._init;try{return ra(e(t))}catch{}}return null}function V0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ra(t);case 8:return t===el?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function G0(e){var t=Gd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){s=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qs(e){e._valueTracker||(e._valueTracker=G0(e))}function Xd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Gd(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sa(e,t){var n=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sc(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kd(e,t){t=t.checked,t!=null&&Za(e,"checked",t,!1)}function ia(e,t){Kd(e,t);var n=On(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oa(e,t.type,n):t.hasOwnProperty("defaultValue")&&oa(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oa(e,t,n){(t!=="number"||_i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var rs=Array.isArray;function br(e,t,n,s){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&s&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function aa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(H(92));if(rs(n)){if(1<n.length)throw Error(H(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function Jd(e,t){var n=On(t.value),s=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function ac(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function la(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qs,eu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qs=Qs||document.createElement("div"),Qs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X0=["Webkit","ms","Moz","O"];Object.keys(os).forEach(function(e){X0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),os[t]=os[e]})});function tu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||os.hasOwnProperty(e)&&os[e]?(""+t).trim():t+"px"}function nu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,i=tu(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,i):e[n]=i}}var K0=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(e,t){if(t){if(K0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function da(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ua=null;function rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fa=null,wr=null,jr=null;function lc(e){if(e=As(e)){if(typeof fa!="function")throw Error(H(280));var t=e.stateNode;t&&(t=io(t),fa(e.stateNode,e.type,t))}}function ru(e){wr?jr?jr.push(e):jr=[e]:wr=e}function su(){if(wr){var e=wr,t=jr;if(jr=wr=null,lc(e),t)for(e=0;e<t.length;e++)lc(t[e])}}function iu(e,t){return e(t)}function ou(){}var No=!1;function au(e,t,n){if(No)return e(t,n);No=!0;try{return iu(e,t,n)}finally{No=!1,(wr!==null||jr!==null)&&(ou(),su())}}function vs(e,t){var n=e.stateNode;if(n===null)return null;var s=io(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,t,typeof n));return n}var ma=!1;if(mn)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){ma=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{ma=!1}function J0(e,t,n,s,i,o,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var as=!1,Ri=null,Ti=!1,ha=null,Z0={onError:function(e){as=!0,Ri=e}};function em(e,t,n,s,i,o,a,l,c){as=!1,Ri=null,J0.apply(Z0,arguments)}function tm(e,t,n,s,i,o,a,l,c){if(em.apply(this,arguments),as){if(as){var d=Ri;as=!1,Ri=null}else throw Error(H(198));Ti||(Ti=!0,ha=d)}}function or(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cc(e){if(or(e)!==e)throw Error(H(188))}function nm(e){var t=e.alternate;if(!t){if(t=or(e),t===null)throw Error(H(188));return t!==e?null:e}for(var n=e,s=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(s=i.return,s!==null){n=s;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cc(i),e;if(o===s)return cc(i),t;o=o.sibling}throw Error(H(188))}if(n.return!==s.return)n=i,s=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,s=o;break}if(l===s){a=!0,s=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,s=i;break}if(l===s){a=!0,s=o,n=i;break}l=l.sibling}if(!a)throw Error(H(189))}}if(n.alternate!==s)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:t}function cu(e){return e=nm(e),e!==null?du(e):null}function du(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=du(e);if(t!==null)return t;e=e.sibling}return null}var uu=Tt.unstable_scheduleCallback,dc=Tt.unstable_cancelCallback,rm=Tt.unstable_shouldYield,sm=Tt.unstable_requestPaint,Ge=Tt.unstable_now,im=Tt.unstable_getCurrentPriorityLevel,sl=Tt.unstable_ImmediatePriority,fu=Tt.unstable_UserBlockingPriority,Pi=Tt.unstable_NormalPriority,om=Tt.unstable_LowPriority,mu=Tt.unstable_IdlePriority,to=null,rn=null;function am(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(to,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:dm,lm=Math.log,cm=Math.LN2;function dm(e){return e>>>=0,e===0?32:31-(lm(e)/cm|0)|0}var Ys=64,Hs=4194304;function ss(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?s=ss(l):(o&=a,o!==0&&(s=ss(o)))}else a=n&~i,a!==0?s=ss(a):o!==0&&(s=ss(o));if(s===0)return 0;if(t!==0&&t!==s&&!(t&i)&&(i=s&-s,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-Ht(t),i=1<<n,s|=e[n],t&=~i;return s}function um(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fm(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ht(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&s)&&(i[a]=um(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hu(){var e=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),e}function ko(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ds(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=n}function mm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ht(n),o=1<<i;t[i]=0,s[i]=-1,e[i]=-1,n&=~o}}function il(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-Ht(n),i=1<<s;i&t|e[s]&t&&(e[s]|=t),n&=~i}}var Ee=0;function pu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xu,ol,gu,vu,yu,xa=!1,Ws=[],Pn=null,zn=null,Ln=null,ys=new Map,bs=new Map,En=[],hm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uc(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":ys.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(t.pointerId)}}function Qr(e,t,n,s,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:o,targetContainers:[i]},t!==null&&(t=As(t),t!==null&&ol(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pm(e,t,n,s,i){switch(t){case"focusin":return Pn=Qr(Pn,e,t,n,s,i),!0;case"dragenter":return zn=Qr(zn,e,t,n,s,i),!0;case"mouseover":return Ln=Qr(Ln,e,t,n,s,i),!0;case"pointerover":var o=i.pointerId;return ys.set(o,Qr(ys.get(o)||null,e,t,n,s,i)),!0;case"gotpointercapture":return o=i.pointerId,bs.set(o,Qr(bs.get(o)||null,e,t,n,s,i)),!0}return!1}function bu(e){var t=Wn(e.target);if(t!==null){var n=or(t);if(n!==null){if(t=n.tag,t===13){if(t=lu(n),t!==null){e.blockedOn=t,yu(e.priority,function(){gu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);ua=s,n.target.dispatchEvent(s),ua=null}else return t=As(n),t!==null&&ol(t),e.blockedOn=n,!1;t.shift()}return!0}function fc(e,t,n){hi(e)&&n.delete(t)}function xm(){xa=!1,Pn!==null&&hi(Pn)&&(Pn=null),zn!==null&&hi(zn)&&(zn=null),Ln!==null&&hi(Ln)&&(Ln=null),ys.forEach(fc),bs.forEach(fc)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,xa||(xa=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,xm)))}function ws(e){function t(i){return Yr(i,e)}if(0<Ws.length){Yr(Ws[0],e);for(var n=1;n<Ws.length;n++){var s=Ws[n];s.blockedOn===e&&(s.blockedOn=null)}}for(Pn!==null&&Yr(Pn,e),zn!==null&&Yr(zn,e),Ln!==null&&Yr(Ln,e),ys.forEach(t),bs.forEach(t),n=0;n<En.length;n++)s=En[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)bu(n),n.blockedOn===null&&En.shift()}var Nr=vn.ReactCurrentBatchConfig,Li=!0;function gm(e,t,n,s){var i=Ee,o=Nr.transition;Nr.transition=null;try{Ee=1,al(e,t,n,s)}finally{Ee=i,Nr.transition=o}}function vm(e,t,n,s){var i=Ee,o=Nr.transition;Nr.transition=null;try{Ee=4,al(e,t,n,s)}finally{Ee=i,Nr.transition=o}}function al(e,t,n,s){if(Li){var i=ga(e,t,n,s);if(i===null)Mo(e,t,s,Mi,n),uc(e,s);else if(pm(i,e,t,n,s))s.stopPropagation();else if(uc(e,s),t&4&&-1<hm.indexOf(e)){for(;i!==null;){var o=As(i);if(o!==null&&xu(o),o=ga(e,t,n,s),o===null&&Mo(e,t,s,Mi,n),o===i)break;i=o}i!==null&&s.stopPropagation()}else Mo(e,t,s,null,n)}}var Mi=null;function ga(e,t,n,s){if(Mi=null,e=rl(s),e=Wn(e),e!==null)if(t=or(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function wu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(im()){case sl:return 1;case fu:return 4;case Pi:case om:return 16;case mu:return 536870912;default:return 16}default:return 16}}var Rn=null,ll=null,pi=null;function ju(){if(pi)return pi;var e,t=ll,n=t.length,s,i="value"in Rn?Rn.value:Rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(s=1;s<=a&&t[n-s]===i[o-s];s++);return pi=i.slice(e,1<s?1-s:void 0)}function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vs(){return!0}function mc(){return!1}function zt(e){function t(n,s,i,o,a){this._reactName=n,this._targetInst=i,this.type=s,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Vs:mc,this.isPropagationStopped=mc,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=zt(Dr),Is=Qe({},Dr,{view:0,detail:0}),ym=zt(Is),So,Co,Hr,no=Qe({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(So=e.screenX-Hr.screenX,Co=e.screenY-Hr.screenY):Co=So=0,Hr=e),So)},movementY:function(e){return"movementY"in e?e.movementY:Co}}),hc=zt(no),bm=Qe({},no,{dataTransfer:0}),wm=zt(bm),jm=Qe({},Is,{relatedTarget:0}),Eo=zt(jm),Nm=Qe({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),km=zt(Nm),Sm=Qe({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cm=zt(Sm),Em=Qe({},Dr,{data:0}),pc=zt(Em),_m={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tm[e])?!!t[e]:!1}function dl(){return Pm}var zm=Qe({},Is,{key:function(e){if(e.key){var t=_m[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dl,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lm=zt(zm),Mm=Qe({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xc=zt(Mm),Dm=Qe({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dl}),Im=zt(Dm),Am=Qe({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fm=zt(Am),Om=Qe({},no,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$m=zt(Om),Bm=[9,13,27,32],ul=mn&&"CompositionEvent"in window,ls=null;mn&&"documentMode"in document&&(ls=document.documentMode);var Um=mn&&"TextEvent"in window&&!ls,Nu=mn&&(!ul||ls&&8<ls&&11>=ls),gc=String.fromCharCode(32),vc=!1;function ku(e,t){switch(e){case"keyup":return Bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function qm(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(vc=!0,gc);case"textInput":return e=t.data,e===gc&&vc?null:e;default:return null}}function Qm(e,t){if(dr)return e==="compositionend"||!ul&&ku(e,t)?(e=ju(),pi=ll=Rn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nu&&t.locale!=="ko"?null:t.data;default:return null}}var Ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ym[e.type]:t==="textarea"}function Cu(e,t,n,s){ru(s),t=Di(t,"onChange"),0<t.length&&(n=new cl("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var cs=null,js=null;function Hm(e){Au(e,0)}function ro(e){var t=mr(e);if(Xd(t))return e}function Wm(e,t){if(e==="change")return t}var Eu=!1;if(mn){var _o;if(mn){var Ro="oninput"in document;if(!Ro){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),Ro=typeof bc.oninput=="function"}_o=Ro}else _o=!1;Eu=_o&&(!document.documentMode||9<document.documentMode)}function wc(){cs&&(cs.detachEvent("onpropertychange",_u),js=cs=null)}function _u(e){if(e.propertyName==="value"&&ro(js)){var t=[];Cu(t,js,e,rl(e)),au(Hm,t)}}function Vm(e,t,n){e==="focusin"?(wc(),cs=t,js=n,cs.attachEvent("onpropertychange",_u)):e==="focusout"&&wc()}function Gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ro(js)}function Xm(e,t){if(e==="click")return ro(t)}function Km(e,t){if(e==="input"||e==="change")return ro(t)}function Jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:Jm;function Ns(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var i=n[s];if(!Zo.call(t,i)||!Vt(e[i],t[i]))return!1}return!0}function jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nc(e,t){var n=jc(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jc(n)}}function Ru(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ru(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tu(){for(var e=window,t=_i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_i(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zm(e){var t=Tu(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ru(n.ownerDocument.documentElement,n)){if(s!==null&&fl(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(s.start,i);s=s.end===void 0?o:Math.min(s.end,i),!e.extend&&o>s&&(i=s,s=o,o=i),i=Nc(n,o);var a=Nc(n,s);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var eh=mn&&"documentMode"in document&&11>=document.documentMode,ur=null,va=null,ds=null,ya=!1;function kc(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ya||ur==null||ur!==_i(s)||(s=ur,"selectionStart"in s&&fl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ds&&Ns(ds,s)||(ds=s,s=Di(va,"onSelect"),0<s.length&&(t=new cl("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=ur)))}function Gs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionend:Gs("Transition","TransitionEnd")},To={},Pu={};mn&&(Pu=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function so(e){if(To[e])return To[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pu)return To[e]=t[n];return e}var zu=so("animationend"),Lu=so("animationiteration"),Mu=so("animationstart"),Du=so("transitionend"),Iu=new Map,Sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,t){Iu.set(e,t),ir(t,[e])}for(var Po=0;Po<Sc.length;Po++){var zo=Sc[Po],th=zo.toLowerCase(),nh=zo[0].toUpperCase()+zo.slice(1);Bn(th,"on"+nh)}Bn(zu,"onAnimationEnd");Bn(Lu,"onAnimationIteration");Bn(Mu,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(Du,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rh=new Set("cancel close invalid load scroll toggle".split(" ").concat(is));function Cc(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,tm(s,t,void 0,e),e.currentTarget=null}function Au(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],i=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var a=s.length-1;0<=a;a--){var l=s[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Cc(i,l,d),o=c}else for(a=0;a<s.length;a++){if(l=s[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Cc(i,l,d),o=c}}}if(Ti)throw e=ha,Ti=!1,ha=null,e}function Ae(e,t){var n=t[ka];n===void 0&&(n=t[ka]=new Set);var s=e+"__bubble";n.has(s)||(Fu(t,e,2,!1),n.add(s))}function Lo(e,t,n){var s=0;t&&(s|=4),Fu(n,e,s,t)}var Xs="_reactListening"+Math.random().toString(36).slice(2);function ks(e){if(!e[Xs]){e[Xs]=!0,Yd.forEach(function(n){n!=="selectionchange"&&(rh.has(n)||Lo(n,!1,e),Lo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xs]||(t[Xs]=!0,Lo("selectionchange",!1,t))}}function Fu(e,t,n,s){switch(wu(t)){case 1:var i=gm;break;case 4:i=vm;break;default:i=al}n=i.bind(null,t,n,e),i=void 0,!ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Mo(e,t,n,s,i){var o=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var a=s.tag;if(a===3||a===4){var l=s.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=s.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Wn(l),a===null)return;if(c=a.tag,c===5||c===6){s=o=a;continue e}l=l.parentNode}}s=s.return}au(function(){var d=o,f=rl(n),p=[];e:{var h=Iu.get(e);if(h!==void 0){var w=cl,y=e;switch(e){case"keypress":if(xi(n)===0)break e;case"keydown":case"keyup":w=Lm;break;case"focusin":y="focus",w=Eo;break;case"focusout":y="blur",w=Eo;break;case"beforeblur":case"afterblur":w=Eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Im;break;case zu:case Lu:case Mu:w=km;break;case Du:w=Fm;break;case"scroll":w=ym;break;case"wheel":w=$m;break;case"copy":case"cut":case"paste":w=Cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=xc}var j=(t&4)!==0,S=!j&&e==="scroll",g=j?h!==null?h+"Capture":null:h;j=[];for(var m=d,x;m!==null;){x=m;var C=x.stateNode;if(x.tag===5&&C!==null&&(x=C,g!==null&&(C=vs(m,g),C!=null&&j.push(Ss(m,C,x)))),S)break;m=m.return}0<j.length&&(h=new w(h,y,null,n,f),p.push({event:h,listeners:j}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==ua&&(y=n.relatedTarget||n.fromElement)&&(Wn(y)||y[hn]))break e;if((w||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=d,y=y?Wn(y):null,y!==null&&(S=or(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=d),w!==y)){if(j=hc,C="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(j=xc,C="onPointerLeave",g="onPointerEnter",m="pointer"),S=w==null?h:mr(w),x=y==null?h:mr(y),h=new j(C,m+"leave",w,n,f),h.target=S,h.relatedTarget=x,C=null,Wn(f)===d&&(j=new j(g,m+"enter",y,n,f),j.target=x,j.relatedTarget=S,C=j),S=C,w&&y)t:{for(j=w,g=y,m=0,x=j;x;x=ar(x))m++;for(x=0,C=g;C;C=ar(C))x++;for(;0<m-x;)j=ar(j),m--;for(;0<x-m;)g=ar(g),x--;for(;m--;){if(j===g||g!==null&&j===g.alternate)break t;j=ar(j),g=ar(g)}j=null}else j=null;w!==null&&Ec(p,h,w,j,!1),y!==null&&S!==null&&Ec(p,S,y,j,!0)}}e:{if(h=d?mr(d):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var R=Wm;else if(yc(h))if(Eu)R=Km;else{R=Gm;var z=Vm}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Xm);if(R&&(R=R(e,d))){Cu(p,R,n,f);break e}z&&z(e,h,d),e==="focusout"&&(z=h._wrapperState)&&z.controlled&&h.type==="number"&&oa(h,"number",h.value)}switch(z=d?mr(d):window,e){case"focusin":(yc(z)||z.contentEditable==="true")&&(ur=z,va=d,ds=null);break;case"focusout":ds=va=ur=null;break;case"mousedown":ya=!0;break;case"contextmenu":case"mouseup":case"dragend":ya=!1,kc(p,n,f);break;case"selectionchange":if(eh)break;case"keydown":case"keyup":kc(p,n,f)}var k;if(ul)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else dr?ku(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Nu&&n.locale!=="ko"&&(dr||v!=="onCompositionStart"?v==="onCompositionEnd"&&dr&&(k=ju()):(Rn=f,ll="value"in Rn?Rn.value:Rn.textContent,dr=!0)),z=Di(d,v),0<z.length&&(v=new pc(v,e,null,n,f),p.push({event:v,listeners:z}),k?v.data=k:(k=Su(n),k!==null&&(v.data=k)))),(k=Um?qm(e,n):Qm(e,n))&&(d=Di(d,"onBeforeInput"),0<d.length&&(f=new pc("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:d}),f.data=k))}Au(p,t)})}function Ss(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Di(e,t){for(var n=t+"Capture",s=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=vs(e,n),o!=null&&s.unshift(Ss(e,o,i)),o=vs(e,t),o!=null&&s.push(Ss(e,o,i))),e=e.return}return s}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ec(e,t,n,s,i){for(var o=t._reactName,a=[];n!==null&&n!==s;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&d!==null&&(l=d,i?(c=vs(n,o),c!=null&&a.unshift(Ss(n,c,l))):i||(c=vs(n,o),c!=null&&a.push(Ss(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var sh=/\r\n?/g,ih=/\u0000|\uFFFD/g;function _c(e){return(typeof e=="string"?e:""+e).replace(sh,`
`).replace(ih,"")}function Ks(e,t,n){if(t=_c(t),_c(e)!==t&&n)throw Error(H(425))}function Ii(){}var ba=null,wa=null;function ja(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Na=typeof setTimeout=="function"?setTimeout:void 0,oh=typeof clearTimeout=="function"?clearTimeout:void 0,Rc=typeof Promise=="function"?Promise:void 0,ah=typeof queueMicrotask=="function"?queueMicrotask:typeof Rc<"u"?function(e){return Rc.resolve(null).then(e).catch(lh)}:Na;function lh(e){setTimeout(function(){throw e})}function Do(e,t){var n=t,s=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(s===0){e.removeChild(i),ws(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=i}while(n);ws(t)}function Mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),nn="__reactFiber$"+Ir,Cs="__reactProps$"+Ir,hn="__reactContainer$"+Ir,ka="__reactEvents$"+Ir,ch="__reactListeners$"+Ir,dh="__reactHandles$"+Ir;function Wn(e){var t=e[nn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hn]||n[nn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tc(e);e!==null;){if(n=e[nn])return n;e=Tc(e)}return t}e=n,n=e.parentNode}return null}function As(e){return e=e[nn]||e[hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function io(e){return e[Cs]||null}var Sa=[],hr=-1;function Un(e){return{current:e}}function Fe(e){0>hr||(e.current=Sa[hr],Sa[hr]=null,hr--)}function Ie(e,t){hr++,Sa[hr]=e.current,e.current=t}var $n={},mt=Un($n),Nt=Un(!1),er=$n;function _r(e,t){var n=e.type.contextTypes;if(!n)return $n;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function kt(e){return e=e.childContextTypes,e!=null}function Ai(){Fe(Nt),Fe(mt)}function Pc(e,t,n){if(mt.current!==$n)throw Error(H(168));Ie(mt,t),Ie(Nt,n)}function Ou(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(H(108,V0(e)||"Unknown",i));return Qe({},n,s)}function Fi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,er=mt.current,Ie(mt,e),Ie(Nt,Nt.current),!0}function zc(e,t,n){var s=e.stateNode;if(!s)throw Error(H(169));n?(e=Ou(e,t,er),s.__reactInternalMemoizedMergedChildContext=e,Fe(Nt),Fe(mt),Ie(mt,e)):Fe(Nt),Ie(Nt,n)}var ln=null,oo=!1,Io=!1;function $u(e){ln===null?ln=[e]:ln.push(e)}function uh(e){oo=!0,$u(e)}function qn(){if(!Io&&ln!==null){Io=!0;var e=0,t=Ee;try{var n=ln;for(Ee=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}ln=null,oo=!1}catch(i){throw ln!==null&&(ln=ln.slice(e+1)),uu(sl,qn),i}finally{Ee=t,Io=!1}}return null}var pr=[],xr=0,Oi=null,$i=0,Lt=[],Mt=0,tr=null,cn=1,dn="";function Yn(e,t){pr[xr++]=$i,pr[xr++]=Oi,Oi=e,$i=t}function Bu(e,t,n){Lt[Mt++]=cn,Lt[Mt++]=dn,Lt[Mt++]=tr,tr=e;var s=cn;e=dn;var i=32-Ht(s)-1;s&=~(1<<i),n+=1;var o=32-Ht(t)+i;if(30<o){var a=i-i%5;o=(s&(1<<a)-1).toString(32),s>>=a,i-=a,cn=1<<32-Ht(t)+i|n<<i|s,dn=o+e}else cn=1<<o|n<<i|s,dn=e}function ml(e){e.return!==null&&(Yn(e,1),Bu(e,1,0))}function hl(e){for(;e===Oi;)Oi=pr[--xr],pr[xr]=null,$i=pr[--xr],pr[xr]=null;for(;e===tr;)tr=Lt[--Mt],Lt[Mt]=null,dn=Lt[--Mt],Lt[Mt]=null,cn=Lt[--Mt],Lt[Mt]=null}var Rt=null,_t=null,Oe=!1,Yt=null;function Uu(e,t){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Rt=e,_t=Mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Rt=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tr!==null?{id:cn,overflow:dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Rt=e,_t=null,!0):!1;default:return!1}}function Ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ea(e){if(Oe){var t=_t;if(t){var n=t;if(!Lc(e,t)){if(Ca(e))throw Error(H(418));t=Mn(n.nextSibling);var s=Rt;t&&Lc(e,t)?Uu(s,n):(e.flags=e.flags&-4097|2,Oe=!1,Rt=e)}}else{if(Ca(e))throw Error(H(418));e.flags=e.flags&-4097|2,Oe=!1,Rt=e}}}function Mc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rt=e}function Js(e){if(e!==Rt)return!1;if(!Oe)return Mc(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ja(e.type,e.memoizedProps)),t&&(t=_t)){if(Ca(e))throw qu(),Error(H(418));for(;t;)Uu(e,t),t=Mn(t.nextSibling)}if(Mc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_t=Mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=Rt?Mn(e.stateNode.nextSibling):null;return!0}function qu(){for(var e=_t;e;)e=Mn(e.nextSibling)}function Rr(){_t=Rt=null,Oe=!1}function pl(e){Yt===null?Yt=[e]:Yt.push(e)}var fh=vn.ReactCurrentBatchConfig;function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var s=n.stateNode}if(!s)throw Error(H(147,e));var i=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function Zs(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dc(e){var t=e._init;return t(e._payload)}function Qu(e){function t(g,m){if(e){var x=g.deletions;x===null?(g.deletions=[m],g.flags|=16):x.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function s(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Fn(g,m),g.index=0,g.sibling=null,g}function o(g,m,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<m?(g.flags|=2,m):x):(g.flags|=2,m)):(g.flags|=1048576,m)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,x,C){return m===null||m.tag!==6?(m=qo(x,g.mode,C),m.return=g,m):(m=i(m,x),m.return=g,m)}function c(g,m,x,C){var R=x.type;return R===cr?f(g,m,x.props.children,C,x.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===kn&&Dc(R)===m.type)?(C=i(m,x.props),C.ref=Wr(g,m,x),C.return=g,C):(C=Ni(x.type,x.key,x.props,null,g.mode,C),C.ref=Wr(g,m,x),C.return=g,C)}function d(g,m,x,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Qo(x,g.mode,C),m.return=g,m):(m=i(m,x.children||[]),m.return=g,m)}function f(g,m,x,C,R){return m===null||m.tag!==7?(m=Jn(x,g.mode,C,R),m.return=g,m):(m=i(m,x),m.return=g,m)}function p(g,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=qo(""+m,g.mode,x),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Us:return x=Ni(m.type,m.key,m.props,null,g.mode,x),x.ref=Wr(g,null,m),x.return=g,x;case lr:return m=Qo(m,g.mode,x),m.return=g,m;case kn:var C=m._init;return p(g,C(m._payload),x)}if(rs(m)||Ur(m))return m=Jn(m,g.mode,x,null),m.return=g,m;Zs(g,m)}return null}function h(g,m,x,C){var R=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:l(g,m,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Us:return x.key===R?c(g,m,x,C):null;case lr:return x.key===R?d(g,m,x,C):null;case kn:return R=x._init,h(g,m,R(x._payload),C)}if(rs(x)||Ur(x))return R!==null?null:f(g,m,x,C,null);Zs(g,x)}return null}function w(g,m,x,C,R){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(x)||null,l(m,g,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Us:return g=g.get(C.key===null?x:C.key)||null,c(m,g,C,R);case lr:return g=g.get(C.key===null?x:C.key)||null,d(m,g,C,R);case kn:var z=C._init;return w(g,m,x,z(C._payload),R)}if(rs(C)||Ur(C))return g=g.get(x)||null,f(m,g,C,R,null);Zs(m,C)}return null}function y(g,m,x,C){for(var R=null,z=null,k=m,v=m=0,b=null;k!==null&&v<x.length;v++){k.index>v?(b=k,k=null):b=k.sibling;var N=h(g,k,x[v],C);if(N===null){k===null&&(k=b);break}e&&k&&N.alternate===null&&t(g,k),m=o(N,m,v),z===null?R=N:z.sibling=N,z=N,k=b}if(v===x.length)return n(g,k),Oe&&Yn(g,v),R;if(k===null){for(;v<x.length;v++)k=p(g,x[v],C),k!==null&&(m=o(k,m,v),z===null?R=k:z.sibling=k,z=k);return Oe&&Yn(g,v),R}for(k=s(g,k);v<x.length;v++)b=w(k,g,v,x[v],C),b!==null&&(e&&b.alternate!==null&&k.delete(b.key===null?v:b.key),m=o(b,m,v),z===null?R=b:z.sibling=b,z=b);return e&&k.forEach(function(_){return t(g,_)}),Oe&&Yn(g,v),R}function j(g,m,x,C){var R=Ur(x);if(typeof R!="function")throw Error(H(150));if(x=R.call(x),x==null)throw Error(H(151));for(var z=R=null,k=m,v=m=0,b=null,N=x.next();k!==null&&!N.done;v++,N=x.next()){k.index>v?(b=k,k=null):b=k.sibling;var _=h(g,k,N.value,C);if(_===null){k===null&&(k=b);break}e&&k&&_.alternate===null&&t(g,k),m=o(_,m,v),z===null?R=_:z.sibling=_,z=_,k=b}if(N.done)return n(g,k),Oe&&Yn(g,v),R;if(k===null){for(;!N.done;v++,N=x.next())N=p(g,N.value,C),N!==null&&(m=o(N,m,v),z===null?R=N:z.sibling=N,z=N);return Oe&&Yn(g,v),R}for(k=s(g,k);!N.done;v++,N=x.next())N=w(k,g,v,N.value,C),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?v:N.key),m=o(N,m,v),z===null?R=N:z.sibling=N,z=N);return e&&k.forEach(function(A){return t(g,A)}),Oe&&Yn(g,v),R}function S(g,m,x,C){if(typeof x=="object"&&x!==null&&x.type===cr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Us:e:{for(var R=x.key,z=m;z!==null;){if(z.key===R){if(R=x.type,R===cr){if(z.tag===7){n(g,z.sibling),m=i(z,x.props.children),m.return=g,g=m;break e}}else if(z.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===kn&&Dc(R)===z.type){n(g,z.sibling),m=i(z,x.props),m.ref=Wr(g,z,x),m.return=g,g=m;break e}n(g,z);break}else t(g,z);z=z.sibling}x.type===cr?(m=Jn(x.props.children,g.mode,C,x.key),m.return=g,g=m):(C=Ni(x.type,x.key,x.props,null,g.mode,C),C.ref=Wr(g,m,x),C.return=g,g=C)}return a(g);case lr:e:{for(z=x.key;m!==null;){if(m.key===z)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(g,m.sibling),m=i(m,x.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Qo(x,g.mode,C),m.return=g,g=m}return a(g);case kn:return z=x._init,S(g,m,z(x._payload),C)}if(rs(x))return y(g,m,x,C);if(Ur(x))return j(g,m,x,C);Zs(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,x),m.return=g,g=m):(n(g,m),m=qo(x,g.mode,C),m.return=g,g=m),a(g)):n(g,m)}return S}var Tr=Qu(!0),Yu=Qu(!1),Bi=Un(null),Ui=null,gr=null,xl=null;function gl(){xl=gr=Ui=null}function vl(e){var t=Bi.current;Fe(Bi),e._currentValue=t}function _a(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function kr(e,t){Ui=e,xl=gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(jt=!0),e.firstContext=null)}function Ft(e){var t=e._currentValue;if(xl!==e)if(e={context:e,memoizedValue:t,next:null},gr===null){if(Ui===null)throw Error(H(308));gr=e,Ui.dependencies={lanes:0,firstContext:e}}else gr=gr.next=e;return t}var Vn=null;function yl(e){Vn===null?Vn=[e]:Vn.push(e)}function Hu(e,t,n,s){var i=t.interleaved;return i===null?(n.next=n,yl(t)):(n.next=i.next,i.next=n),t.interleaved=n,pn(e,s)}function pn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Sn=!1;function bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Ne&2){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,pn(e,n)}return i=s.interleaved,i===null?(t.next=t,yl(s)):(t.next=i.next,i.next=t),s.interleaved=t,pn(e,n)}function gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,il(e,n)}}function Ic(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function qi(e,t,n,s){var i=e.updateQueue;Sn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?o=d:a.next=d,a=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;a=0,f=d=c=null,l=o;do{var h=l.lane,w=l.eventTime;if((s&h)===h){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,j=l;switch(h=t,w=n,j.tag){case 1:if(y=j.payload,typeof y=="function"){p=y.call(w,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,h=typeof y=="function"?y.call(w,p,h):y,h==null)break e;p=Qe({},p,h);break e;case 2:Sn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=w,c=p):f=f.next=w,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(f===null&&(c=p),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);rr|=a,e.lanes=a,e.memoizedState=p}}function Ac(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],i=s.callback;if(i!==null){if(s.callback=null,s=n,typeof i!="function")throw Error(H(191,i));i.call(s)}}}var Fs={},sn=Un(Fs),Es=Un(Fs),_s=Un(Fs);function Gn(e){if(e===Fs)throw Error(H(174));return e}function wl(e,t){switch(Ie(_s,t),Ie(Es,e),Ie(sn,Fs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:la(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=la(t,e)}Fe(sn),Ie(sn,t)}function Pr(){Fe(sn),Fe(Es),Fe(_s)}function Vu(e){Gn(_s.current);var t=Gn(sn.current),n=la(t,e.type);t!==n&&(Ie(Es,e),Ie(sn,n))}function jl(e){Es.current===e&&(Fe(sn),Fe(Es))}var Ue=Un(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=[];function Nl(){for(var e=0;e<Ao.length;e++)Ao[e]._workInProgressVersionPrimary=null;Ao.length=0}var vi=vn.ReactCurrentDispatcher,Fo=vn.ReactCurrentBatchConfig,nr=0,qe=null,Ze=null,rt=null,Yi=!1,us=!1,Rs=0,mh=0;function dt(){throw Error(H(321))}function kl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function Sl(e,t,n,s,i,o){if(nr=o,qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vi.current=e===null||e.memoizedState===null?gh:vh,e=n(s,i),us){o=0;do{if(us=!1,Rs=0,25<=o)throw Error(H(301));o+=1,rt=Ze=null,t.updateQueue=null,vi.current=yh,e=n(s,i)}while(us)}if(vi.current=Hi,t=Ze!==null&&Ze.next!==null,nr=0,rt=Ze=qe=null,Yi=!1,t)throw Error(H(300));return e}function Cl(){var e=Rs!==0;return Rs=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?qe.memoizedState=rt=e:rt=rt.next=e,rt}function Ot(){if(Ze===null){var e=qe.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=rt===null?qe.memoizedState:rt.next;if(t!==null)rt=t,Ze=e;else{if(e===null)throw Error(H(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},rt===null?qe.memoizedState=rt=e:rt=rt.next=e}return rt}function Ts(e,t){return typeof t=="function"?t(e):t}function Oo(e){var t=Ot(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var s=Ze,i=s.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}s.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,s=s.baseState;var l=a=null,c=null,d=o;do{var f=d.lane;if((nr&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),s=d.hasEagerState?d.eagerState:e(s,d.action);else{var p={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,a=s):c=c.next=p,qe.lanes|=f,rr|=f}d=d.next}while(d!==null&&d!==o);c===null?a=s:c.next=l,Vt(s,t.memoizedState)||(jt=!0),t.memoizedState=s,t.baseState=a,t.baseQueue=c,n.lastRenderedState=s}if(e=n.interleaved,e!==null){i=e;do o=i.lane,qe.lanes|=o,rr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $o(e){var t=Ot(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var s=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Vt(o,t.memoizedState)||(jt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,s]}function Gu(){}function Xu(e,t){var n=qe,s=Ot(),i=t(),o=!Vt(s.memoizedState,i);if(o&&(s.memoizedState=i,jt=!0),s=s.queue,El(Zu.bind(null,n,s,e),[e]),s.getSnapshot!==t||o||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,Ps(9,Ju.bind(null,n,s,i,t),void 0,null),st===null)throw Error(H(349));nr&30||Ku(n,t,i)}return i}function Ku(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ju(e,t,n,s){t.value=n,t.getSnapshot=s,ef(t)&&tf(e)}function Zu(e,t,n){return n(function(){ef(t)&&tf(e)})}function ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function tf(e){var t=pn(e,1);t!==null&&Wt(t,e,1,-1)}function Fc(e){var t=en();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:e},t.queue=e,e=e.dispatch=xh.bind(null,qe,e),[t.memoizedState,e]}function Ps(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function nf(){return Ot().memoizedState}function yi(e,t,n,s){var i=en();qe.flags|=e,i.memoizedState=Ps(1|t,n,void 0,s===void 0?null:s)}function ao(e,t,n,s){var i=Ot();s=s===void 0?null:s;var o=void 0;if(Ze!==null){var a=Ze.memoizedState;if(o=a.destroy,s!==null&&kl(s,a.deps)){i.memoizedState=Ps(t,n,o,s);return}}qe.flags|=e,i.memoizedState=Ps(1|t,n,o,s)}function Oc(e,t){return yi(8390656,8,e,t)}function El(e,t){return ao(2048,8,e,t)}function rf(e,t){return ao(4,2,e,t)}function sf(e,t){return ao(4,4,e,t)}function of(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,n){return n=n!=null?n.concat([e]):null,ao(4,4,of.bind(null,t,e),n)}function _l(){}function lf(e,t){var n=Ot();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&kl(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function cf(e,t){var n=Ot();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&kl(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function df(e,t,n){return nr&21?(Vt(n,t)||(n=hu(),qe.lanes|=n,rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,jt=!0),e.memoizedState=n)}function hh(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var s=Fo.transition;Fo.transition={};try{e(!1),t()}finally{Ee=n,Fo.transition=s}}function uf(){return Ot().memoizedState}function ph(e,t,n){var s=An(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},ff(e))mf(t,n);else if(n=Hu(e,t,n,s),n!==null){var i=gt();Wt(n,e,s,i),hf(n,t,s)}}function xh(e,t,n){var s=An(e),i={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(ff(e))mf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Vt(l,a)){var c=t.interleaved;c===null?(i.next=i,yl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Hu(e,t,i,s),n!==null&&(i=gt(),Wt(n,e,s,i),hf(n,t,s))}}function ff(e){var t=e.alternate;return e===qe||t!==null&&t===qe}function mf(e,t){us=Yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hf(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,il(e,n)}}var Hi={readContext:Ft,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},gh={readContext:Ft,useCallback:function(e,t){return en().memoizedState=[e,t===void 0?null:t],e},useContext:Ft,useEffect:Oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yi(4194308,4,of.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yi(4194308,4,e,t)},useInsertionEffect:function(e,t){return yi(4,2,e,t)},useMemo:function(e,t){var n=en();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=en();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=ph.bind(null,qe,e),[s.memoizedState,e]},useRef:function(e){var t=en();return e={current:e},t.memoizedState=e},useState:Fc,useDebugValue:_l,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=Fc(!1),t=e[0];return e=hh.bind(null,e[1]),en().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=qe,i=en();if(Oe){if(n===void 0)throw Error(H(407));n=n()}else{if(n=t(),st===null)throw Error(H(349));nr&30||Ku(s,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Oc(Zu.bind(null,s,o,e),[e]),s.flags|=2048,Ps(9,Ju.bind(null,s,o,n,t),void 0,null),n},useId:function(){var e=en(),t=st.identifierPrefix;if(Oe){var n=dn,s=cn;n=(s&~(1<<32-Ht(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=Rs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vh={readContext:Ft,useCallback:lf,useContext:Ft,useEffect:El,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:sf,useMemo:cf,useReducer:Oo,useRef:nf,useState:function(){return Oo(Ts)},useDebugValue:_l,useDeferredValue:function(e){var t=Ot();return df(t,Ze.memoizedState,e)},useTransition:function(){var e=Oo(Ts)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Gu,useSyncExternalStore:Xu,useId:uf,unstable_isNewReconciler:!1},yh={readContext:Ft,useCallback:lf,useContext:Ft,useEffect:El,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:sf,useMemo:cf,useReducer:$o,useRef:nf,useState:function(){return $o(Ts)},useDebugValue:_l,useDeferredValue:function(e){var t=Ot();return Ze===null?t.memoizedState=e:df(t,Ze.memoizedState,e)},useTransition:function(){var e=$o(Ts)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Gu,useSyncExternalStore:Xu,useId:uf,unstable_isNewReconciler:!1};function qt(e,t){if(e&&e.defaultProps){t=Qe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ra(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:Qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lo={isMounted:function(e){return(e=e._reactInternals)?or(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=gt(),i=An(e),o=un(s,i);o.payload=t,n!=null&&(o.callback=n),t=Dn(e,o,i),t!==null&&(Wt(t,e,i,s),gi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=gt(),i=An(e),o=un(s,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Dn(e,o,i),t!==null&&(Wt(t,e,i,s),gi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),s=An(e),i=un(n,s);i.tag=2,t!=null&&(i.callback=t),t=Dn(e,i,s),t!==null&&(Wt(t,e,s,n),gi(t,e,s))}};function $c(e,t,n,s,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ns(n,s)||!Ns(i,o):!0}function pf(e,t,n){var s=!1,i=$n,o=t.contextType;return typeof o=="object"&&o!==null?o=Ft(o):(i=kt(t)?er:mt.current,s=t.contextTypes,o=(s=s!=null)?_r(e,i):$n),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=lo,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bc(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&lo.enqueueReplaceState(t,t.state,null)}function Ta(e,t,n,s){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},bl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ft(o):(o=kt(t)?er:mt.current,i.context=_r(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ra(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&lo.enqueueReplaceState(i,i.state,null),qi(e,n,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t){try{var n="",s=t;do n+=W0(s),s=s.return;while(s);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bh=typeof WeakMap=="function"?WeakMap:Map;function xf(e,t,n){n=un(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){Vi||(Vi=!0,Ba=s),Pa(e,t)},n}function gf(e,t,n){n=un(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;n.payload=function(){return s(i)},n.callback=function(){Pa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Pa(e,t),typeof s!="function"&&(In===null?In=new Set([this]):In.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Uc(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new bh;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(n)||(i.add(n),e=Mh.bind(null,e,t,n),t.then(e,e))}function qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qc(e,t,n,s,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=un(-1,1),t.tag=2,Dn(n,t,1))),n.lanes|=1),e)}var wh=vn.ReactCurrentOwner,jt=!1;function xt(e,t,n,s){t.child=e===null?Yu(t,null,n,s):Tr(t,e.child,n,s)}function Yc(e,t,n,s,i){n=n.render;var o=t.ref;return kr(t,i),s=Sl(e,t,n,s,o,i),n=Cl(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(Oe&&n&&ml(t),t.flags|=1,xt(e,t,s,i),t.child)}function Hc(e,t,n,s,i){if(e===null){var o=n.type;return typeof o=="function"&&!Il(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vf(e,t,o,s,i)):(e=Ni(n.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ns,n(a,s)&&e.ref===t.ref)return xn(e,t,i)}return t.flags|=1,e=Fn(o,s),e.ref=t.ref,e.return=t,t.child=e}function vf(e,t,n,s,i){if(e!==null){var o=e.memoizedProps;if(Ns(o,s)&&e.ref===t.ref)if(jt=!1,t.pendingProps=s=o,(e.lanes&i)!==0)e.flags&131072&&(jt=!0);else return t.lanes=e.lanes,xn(e,t,i)}return za(e,t,n,s,i)}function yf(e,t,n){var s=t.pendingProps,i=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(yr,Et),Et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(yr,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:n,Ie(yr,Et),Et|=s}else o!==null?(s=o.baseLanes|n,t.memoizedState=null):s=n,Ie(yr,Et),Et|=s;return xt(e,t,i,n),t.child}function bf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function za(e,t,n,s,i){var o=kt(n)?er:mt.current;return o=_r(t,o),kr(t,i),n=Sl(e,t,n,s,o,i),s=Cl(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(Oe&&s&&ml(t),t.flags|=1,xt(e,t,n,i),t.child)}function Wc(e,t,n,s,i){if(kt(n)){var o=!0;Fi(t)}else o=!1;if(kr(t,i),t.stateNode===null)bi(e,t),pf(t,n,s),Ta(t,n,s,i),s=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ft(d):(d=kt(n)?er:mt.current,d=_r(t,d));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==s||c!==d)&&Bc(t,a,s,d),Sn=!1;var h=t.memoizedState;a.state=h,qi(t,s,a,i),c=t.memoizedState,l!==s||h!==c||Nt.current||Sn?(typeof f=="function"&&(Ra(t,n,f,s),c=t.memoizedState),(l=Sn||$c(t,n,l,s,h,c,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),a.props=s,a.state=c,a.context=d,s=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{a=t.stateNode,Wu(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:qt(t.type,l),a.props=d,p=t.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ft(c):(c=kt(n)?er:mt.current,c=_r(t,c));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||h!==c)&&Bc(t,a,s,c),Sn=!1,h=t.memoizedState,a.state=h,qi(t,s,a,i);var y=t.memoizedState;l!==p||h!==y||Nt.current||Sn?(typeof w=="function"&&(Ra(t,n,w,s),y=t.memoizedState),(d=Sn||$c(t,n,d,s,h,y,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=y),a.props=s,a.state=y,a.context=c,s=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),s=!1)}return La(e,t,n,s,o,i)}function La(e,t,n,s,i,o){bf(e,t);var a=(t.flags&128)!==0;if(!s&&!a)return i&&zc(t,n,!1),xn(e,t,o);s=t.stateNode,wh.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&a?(t.child=Tr(t,e.child,null,o),t.child=Tr(t,null,l,o)):xt(e,t,l,o),t.memoizedState=s.state,i&&zc(t,n,!0),t.child}function wf(e){var t=e.stateNode;t.pendingContext?Pc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pc(e,t.context,!1),wl(e,t.containerInfo)}function Vc(e,t,n,s,i){return Rr(),pl(i),t.flags|=256,xt(e,t,n,s),t.child}var Ma={dehydrated:null,treeContext:null,retryLane:0};function Da(e){return{baseLanes:e,cachePool:null,transitions:null}}function jf(e,t,n){var s=t.pendingProps,i=Ue.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ie(Ue,i&1),e===null)return Ea(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=s.children,e=s.fallback,o?(s=t.mode,o=t.child,a={mode:"hidden",children:a},!(s&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=fo(a,s,0,null),e=Jn(e,s,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Da(n),t.memoizedState=Ma,e):Rl(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return jh(e,t,a,s,l,i,n);if(o){o=s.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:s.children};return!(a&1)&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Fn(i,c),s.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Fn(l,o):(o=Jn(o,a,n,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,a=e.child.memoizedState,a=a===null?Da(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ma,s}return o=e.child,e=o.sibling,s=Fn(o,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function Rl(e,t){return t=fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ei(e,t,n,s){return s!==null&&pl(s),Tr(t,e.child,null,n),e=Rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jh(e,t,n,s,i,o,a){if(n)return t.flags&256?(t.flags&=-257,s=Bo(Error(H(422))),ei(e,t,a,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,i=t.mode,s=fo({mode:"visible",children:s.children},i,0,null),o=Jn(o,i,a,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,t.mode&1&&Tr(t,e.child,null,a),t.child.memoizedState=Da(a),t.memoizedState=Ma,o);if(!(t.mode&1))return ei(e,t,a,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var l=s.dgst;return s=l,o=Error(H(419)),s=Bo(o,s,void 0),ei(e,t,a,s)}if(l=(a&e.childLanes)!==0,jt||l){if(s=st,s!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,pn(e,i),Wt(s,e,i,-1))}return Dl(),s=Bo(Error(H(421))),ei(e,t,a,s)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Dh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_t=Mn(i.nextSibling),Rt=t,Oe=!0,Yt=null,e!==null&&(Lt[Mt++]=cn,Lt[Mt++]=dn,Lt[Mt++]=tr,cn=e.id,dn=e.overflow,tr=t),t=Rl(t,s.children),t.flags|=4096,t)}function Gc(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),_a(e.return,t,n)}function Uo(e,t,n,s,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=n,o.tailMode=i)}function Nf(e,t,n){var s=t.pendingProps,i=s.revealOrder,o=s.tail;if(xt(e,t,s.children,n),s=Ue.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gc(e,n,t);else if(e.tag===19)Gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ie(Ue,s),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Uo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Uo(t,!0,n,null,o);break;case"together":Uo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,n=Fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nh(e,t,n){switch(t.tag){case 3:wf(t),Rr();break;case 5:Vu(t);break;case 1:kt(t.type)&&Fi(t);break;case 4:wl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;Ie(Bi,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Ie(Ue,Ue.current&1),t.flags|=128,null):n&t.child.childLanes?jf(e,t,n):(Ie(Ue,Ue.current&1),e=xn(e,t,n),e!==null?e.sibling:null);Ie(Ue,Ue.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return Nf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Ue,Ue.current),s)break;return null;case 22:case 23:return t.lanes=0,yf(e,t,n)}return xn(e,t,n)}var kf,Ia,Sf,Cf;kf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ia=function(){};Sf=function(e,t,n,s){var i=e.memoizedProps;if(i!==s){e=t.stateNode,Gn(sn.current);var o=null;switch(n){case"input":i=sa(e,i),s=sa(e,s),o=[];break;case"select":i=Qe({},i,{value:void 0}),s=Qe({},s,{value:void 0}),o=[];break;case"textarea":i=aa(e,i),s=aa(e,s),o=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ii)}ca(n,s);var a;n=null;for(d in i)if(!s.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(xs.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in s){var c=s[d];if(l=i!=null?i[d]:void 0,s.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(xs.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Ae("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Cf=function(e,t,n,s){n!==s&&(t.flags|=4)};function Vr(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function kh(e,t,n){var s=t.pendingProps;switch(hl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return kt(t.type)&&Ai(),ut(t),null;case 3:return s=t.stateNode,Pr(),Fe(Nt),Fe(mt),Nl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Js(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yt!==null&&(Qa(Yt),Yt=null))),Ia(e,t),ut(t),null;case 5:jl(t);var i=Gn(_s.current);if(n=t.type,e!==null&&t.stateNode!=null)Sf(e,t,n,s,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(H(166));return ut(t),null}if(e=Gn(sn.current),Js(t)){s=t.stateNode,n=t.type;var o=t.memoizedProps;switch(s[nn]=t,s[Cs]=o,e=(t.mode&1)!==0,n){case"dialog":Ae("cancel",s),Ae("close",s);break;case"iframe":case"object":case"embed":Ae("load",s);break;case"video":case"audio":for(i=0;i<is.length;i++)Ae(is[i],s);break;case"source":Ae("error",s);break;case"img":case"image":case"link":Ae("error",s),Ae("load",s);break;case"details":Ae("toggle",s);break;case"input":sc(s,o),Ae("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},Ae("invalid",s);break;case"textarea":oc(s,o),Ae("invalid",s)}ca(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?s.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ks(s.textContent,l,e),i=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ks(s.textContent,l,e),i=["children",""+l]):xs.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ae("scroll",s)}switch(n){case"input":qs(s),ic(s,o,!0);break;case"textarea":qs(s),ac(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=Ii)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=a.createElement(n,{is:s.is}):(e=a.createElement(n),n==="select"&&(a=e,s.multiple?a.multiple=!0:s.size&&(a.size=s.size))):e=a.createElementNS(e,n),e[nn]=t,e[Cs]=s,kf(e,t,!1,!1),t.stateNode=e;e:{switch(a=da(n,s),n){case"dialog":Ae("cancel",e),Ae("close",e),i=s;break;case"iframe":case"object":case"embed":Ae("load",e),i=s;break;case"video":case"audio":for(i=0;i<is.length;i++)Ae(is[i],e);i=s;break;case"source":Ae("error",e),i=s;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),i=s;break;case"details":Ae("toggle",e),i=s;break;case"input":sc(e,s),i=sa(e,s),Ae("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=Qe({},s,{value:void 0}),Ae("invalid",e);break;case"textarea":oc(e,s),i=aa(e,s),Ae("invalid",e);break;default:i=s}ca(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?nu(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&eu(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&gs(e,c):typeof c=="number"&&gs(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xs.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ae("scroll",e):c!=null&&Za(e,o,c,a))}switch(n){case"input":qs(e),ic(e,s,!1);break;case"textarea":qs(e),ac(e);break;case"option":s.value!=null&&e.setAttribute("value",""+On(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?br(e,!!s.multiple,o,!1):s.defaultValue!=null&&br(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ii)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)Cf(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(H(166));if(n=Gn(_s.current),Gn(sn.current),Js(t)){if(s=t.stateNode,n=t.memoizedProps,s[nn]=t,(o=s.nodeValue!==n)&&(e=Rt,e!==null))switch(e.tag){case 3:Ks(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ks(s.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[nn]=t,t.stateNode=s}return ut(t),null;case 13:if(Fe(Ue),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&_t!==null&&t.mode&1&&!(t.flags&128))qu(),Rr(),t.flags|=98560,o=!1;else if(o=Js(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(H(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[nn]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ut(t),o=!1}else Yt!==null&&(Qa(Yt),Yt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Ue.current&1?et===0&&(et=3):Dl())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return Pr(),Ia(e,t),e===null&&ks(t.stateNode.containerInfo),ut(t),null;case 10:return vl(t.type._context),ut(t),null;case 17:return kt(t.type)&&Ai(),ut(t),null;case 19:if(Fe(Ue),o=t.memoizedState,o===null)return ut(t),null;if(s=(t.flags&128)!==0,a=o.rendering,a===null)if(s)Vr(o,!1);else{if(et!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Qi(e),a!==null){for(t.flags|=128,Vr(o,!1),s=a.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)o=n,e=s,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ie(Ue,Ue.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ge()>Lr&&(t.flags|=128,s=!0,Vr(o,!1),t.lanes=4194304)}else{if(!s)if(e=Qi(a),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Oe)return ut(t),null}else 2*Ge()-o.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,s=!0,Vr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ge(),t.sibling=null,n=Ue.current,Ie(Ue,s?n&1|2:n&1),t):(ut(t),null);case 22:case 23:return Ml(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Et&1073741824&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function Sh(e,t){switch(hl(t),t.tag){case 1:return kt(t.type)&&Ai(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pr(),Fe(Nt),Fe(mt),Nl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jl(t),null;case 13:if(Fe(Ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(Ue),null;case 4:return Pr(),null;case 10:return vl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var ti=!1,ft=!1,Ch=typeof WeakSet=="function"?WeakSet:Set,se=null;function vr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){He(e,t,s)}else n.current=null}function Aa(e,t,n){try{n()}catch(s){He(e,t,s)}}var Xc=!1;function Eh(e,t){if(ba=Li,e=Tu(),fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var i=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,d=0,f=0,p=e,h=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||s!==0&&p.nodeType!==3||(c=a+s),p.nodeType===3&&(a+=p.nodeValue.length),(w=p.firstChild)!==null;)h=p,p=w;for(;;){if(p===e)break t;if(h===n&&++d===i&&(l=a),h===o&&++f===s&&(c=a),(w=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(wa={focusedElem:e,selectionRange:n},Li=!1,se=t;se!==null;)if(t=se,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,se=e;else for(;se!==null;){t=se;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,S=y.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?j:qt(t.type,j),S);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(C){He(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,se=e;break}se=t.return}return y=Xc,Xc=!1,y}function fs(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Aa(t,n,o)}i=i.next}while(i!==s)}}function co(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function Fa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ef(e){var t=e.alternate;t!==null&&(e.alternate=null,Ef(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nn],delete t[Cs],delete t[ka],delete t[ch],delete t[dh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _f(e){return e.tag===5||e.tag===3||e.tag===4}function Kc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oa(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ii));else if(s!==4&&(e=e.child,e!==null))for(Oa(e,t,n),e=e.sibling;e!==null;)Oa(e,t,n),e=e.sibling}function $a(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for($a(e,t,n),e=e.sibling;e!==null;)$a(e,t,n),e=e.sibling}var ot=null,Qt=!1;function bn(e,t,n){for(n=n.child;n!==null;)Rf(e,t,n),n=n.sibling}function Rf(e,t,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(to,n)}catch{}switch(n.tag){case 5:ft||vr(n,t);case 6:var s=ot,i=Qt;ot=null,bn(e,t,n),ot=s,Qt=i,ot!==null&&(Qt?(e=ot,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(Qt?(e=ot,n=n.stateNode,e.nodeType===8?Do(e.parentNode,n):e.nodeType===1&&Do(e,n),ws(e)):Do(ot,n.stateNode));break;case 4:s=ot,i=Qt,ot=n.stateNode.containerInfo,Qt=!0,bn(e,t,n),ot=s,Qt=i;break;case 0:case 11:case 14:case 15:if(!ft&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Aa(n,t,a),i=i.next}while(i!==s)}bn(e,t,n);break;case 1:if(!ft&&(vr(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(l){He(n,t,l)}bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:n.mode&1?(ft=(s=ft)||n.memoizedState!==null,bn(e,t,n),ft=s):bn(e,t,n);break;default:bn(e,t,n)}}function Jc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ch),t.forEach(function(s){var i=Ih.bind(null,e,s);n.has(s)||(n.add(s),s.then(i,i))})}}function Ut(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var i=n[s];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,Qt=!1;break e;case 3:ot=l.stateNode.containerInfo,Qt=!0;break e;case 4:ot=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(ot===null)throw Error(H(160));Rf(o,a,i),ot=null,Qt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){He(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tf(t,e),t=t.sibling}function Tf(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ut(t,e),Kt(e),s&4){try{fs(3,e,e.return),co(3,e)}catch(j){He(e,e.return,j)}try{fs(5,e,e.return)}catch(j){He(e,e.return,j)}}break;case 1:Ut(t,e),Kt(e),s&512&&n!==null&&vr(n,n.return);break;case 5:if(Ut(t,e),Kt(e),s&512&&n!==null&&vr(n,n.return),e.flags&32){var i=e.stateNode;try{gs(i,"")}catch(j){He(e,e.return,j)}}if(s&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Kd(i,o),da(l,a);var d=da(l,o);for(a=0;a<c.length;a+=2){var f=c[a],p=c[a+1];f==="style"?nu(i,p):f==="dangerouslySetInnerHTML"?eu(i,p):f==="children"?gs(i,p):Za(i,f,p,d)}switch(l){case"input":ia(i,o);break;case"textarea":Jd(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?br(i,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?br(i,!!o.multiple,o.defaultValue,!0):br(i,!!o.multiple,o.multiple?[]:"",!1))}i[Cs]=o}catch(j){He(e,e.return,j)}}break;case 6:if(Ut(t,e),Kt(e),s&4){if(e.stateNode===null)throw Error(H(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){He(e,e.return,j)}}break;case 3:if(Ut(t,e),Kt(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{ws(t.containerInfo)}catch(j){He(e,e.return,j)}break;case 4:Ut(t,e),Kt(e);break;case 13:Ut(t,e),Kt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(zl=Ge())),s&4&&Jc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ft=(d=ft)||f,Ut(t,e),ft=d):Ut(t,e),Kt(e),s&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(se=e,f=e.child;f!==null;){for(p=se=f;se!==null;){switch(h=se,w=h.child,h.tag){case 0:case 11:case 14:case 15:fs(4,h,h.return);break;case 1:vr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){s=h,n=h.return;try{t=s,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){He(s,n,j)}}break;case 5:vr(h,h.return);break;case 22:if(h.memoizedState!==null){ed(p);continue}}w!==null?(w.return=h,se=w):ed(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=tu("display",a))}catch(j){He(e,e.return,j)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(j){He(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ut(t,e),Kt(e),s&4&&Jc(e);break;case 21:break;default:Ut(t,e),Kt(e)}}function Kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_f(n)){var s=n;break e}n=n.return}throw Error(H(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(gs(i,""),s.flags&=-33);var o=Kc(e);$a(e,o,i);break;case 3:case 4:var a=s.stateNode.containerInfo,l=Kc(e);Oa(e,l,a);break;default:throw Error(H(161))}}catch(c){He(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _h(e,t,n){se=e,Pf(e)}function Pf(e,t,n){for(var s=(e.mode&1)!==0;se!==null;){var i=se,o=i.child;if(i.tag===22&&s){var a=i.memoizedState!==null||ti;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ft;l=ti;var d=ft;if(ti=a,(ft=c)&&!d)for(se=i;se!==null;)a=se,c=a.child,a.tag===22&&a.memoizedState!==null?td(i):c!==null?(c.return=a,se=c):td(i);for(;o!==null;)se=o,Pf(o),o=o.sibling;se=i,ti=l,ft=d}Zc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,se=o):Zc(e)}}function Zc(e){for(;se!==null;){var t=se;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ft||co(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!ft)if(n===null)s.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:qt(t.type,n.memoizedProps);s.componentDidUpdate(i,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ac(t,o,s);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ac(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ws(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}ft||t.flags&512&&Fa(t)}catch(h){He(t,t.return,h)}}if(t===e){se=null;break}if(n=t.sibling,n!==null){n.return=t.return,se=n;break}se=t.return}}function ed(e){for(;se!==null;){var t=se;if(t===e){se=null;break}var n=t.sibling;if(n!==null){n.return=t.return,se=n;break}se=t.return}}function td(e){for(;se!==null;){var t=se;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{co(4,t)}catch(c){He(t,n,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(c){He(t,i,c)}}var o=t.return;try{Fa(t)}catch(c){He(t,o,c)}break;case 5:var a=t.return;try{Fa(t)}catch(c){He(t,a,c)}}}catch(c){He(t,t.return,c)}if(t===e){se=null;break}var l=t.sibling;if(l!==null){l.return=t.return,se=l;break}se=t.return}}var Rh=Math.ceil,Wi=vn.ReactCurrentDispatcher,Tl=vn.ReactCurrentOwner,At=vn.ReactCurrentBatchConfig,Ne=0,st=null,Je=null,lt=0,Et=0,yr=Un(0),et=0,zs=null,rr=0,uo=0,Pl=0,ms=null,wt=null,zl=0,Lr=1/0,an=null,Vi=!1,Ba=null,In=null,ni=!1,Tn=null,Gi=0,hs=0,Ua=null,wi=-1,ji=0;function gt(){return Ne&6?Ge():wi!==-1?wi:wi=Ge()}function An(e){return e.mode&1?Ne&2&&lt!==0?lt&-lt:fh.transition!==null?(ji===0&&(ji=hu()),ji):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:wu(e.type)),e):1}function Wt(e,t,n,s){if(50<hs)throw hs=0,Ua=null,Error(H(185));Ds(e,n,s),(!(Ne&2)||e!==st)&&(e===st&&(!(Ne&2)&&(uo|=n),et===4&&_n(e,lt)),St(e,s),n===1&&Ne===0&&!(t.mode&1)&&(Lr=Ge()+500,oo&&qn()))}function St(e,t){var n=e.callbackNode;fm(e,t);var s=zi(e,e===st?lt:0);if(s===0)n!==null&&dc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&dc(n),t===1)e.tag===0?uh(nd.bind(null,e)):$u(nd.bind(null,e)),ah(function(){!(Ne&6)&&qn()}),n=null;else{switch(pu(s)){case 1:n=sl;break;case 4:n=fu;break;case 16:n=Pi;break;case 536870912:n=mu;break;default:n=Pi}n=Of(n,zf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zf(e,t){if(wi=-1,ji=0,Ne&6)throw Error(H(327));var n=e.callbackNode;if(Sr()&&e.callbackNode!==n)return null;var s=zi(e,e===st?lt:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Xi(e,s);else{t=s;var i=Ne;Ne|=2;var o=Mf();(st!==e||lt!==t)&&(an=null,Lr=Ge()+500,Kn(e,t));do try{zh();break}catch(l){Lf(e,l)}while(1);gl(),Wi.current=o,Ne=i,Je!==null?t=0:(st=null,lt=0,t=et)}if(t!==0){if(t===2&&(i=pa(e),i!==0&&(s=i,t=qa(e,i))),t===1)throw n=zs,Kn(e,0),_n(e,s),St(e,Ge()),n;if(t===6)_n(e,s);else{if(i=e.current.alternate,!(s&30)&&!Th(i)&&(t=Xi(e,s),t===2&&(o=pa(e),o!==0&&(s=o,t=qa(e,o))),t===1))throw n=zs,Kn(e,0),_n(e,s),St(e,Ge()),n;switch(e.finishedWork=i,e.finishedLanes=s,t){case 0:case 1:throw Error(H(345));case 2:Hn(e,wt,an);break;case 3:if(_n(e,s),(s&130023424)===s&&(t=zl+500-Ge(),10<t)){if(zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Na(Hn.bind(null,e,wt,an),t);break}Hn(e,wt,an);break;case 4:if(_n(e,s),(s&4194240)===s)break;for(t=e.eventTimes,i=-1;0<s;){var a=31-Ht(s);o=1<<a,a=t[a],a>i&&(i=a),s&=~o}if(s=i,s=Ge()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Rh(s/1960))-s,10<s){e.timeoutHandle=Na(Hn.bind(null,e,wt,an),s);break}Hn(e,wt,an);break;case 5:Hn(e,wt,an);break;default:throw Error(H(329))}}}return St(e,Ge()),e.callbackNode===n?zf.bind(null,e):null}function qa(e,t){var n=ms;return e.current.memoizedState.isDehydrated&&(Kn(e,t).flags|=256),e=Xi(e,t),e!==2&&(t=wt,wt=n,t!==null&&Qa(t)),e}function Qa(e){wt===null?wt=e:wt.push.apply(wt,e)}function Th(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var i=n[s],o=i.getSnapshot;i=i.value;try{if(!Vt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~Pl,t&=~uo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ht(t),s=1<<n;e[n]=-1,t&=~s}}function nd(e){if(Ne&6)throw Error(H(327));Sr();var t=zi(e,0);if(!(t&1))return St(e,Ge()),null;var n=Xi(e,t);if(e.tag!==0&&n===2){var s=pa(e);s!==0&&(t=s,n=qa(e,s))}if(n===1)throw n=zs,Kn(e,0),_n(e,t),St(e,Ge()),n;if(n===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,wt,an),St(e,Ge()),null}function Ll(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(Lr=Ge()+500,oo&&qn())}}function sr(e){Tn!==null&&Tn.tag===0&&!(Ne&6)&&Sr();var t=Ne;Ne|=1;var n=At.transition,s=Ee;try{if(At.transition=null,Ee=1,e)return e()}finally{Ee=s,At.transition=n,Ne=t,!(Ne&6)&&qn()}}function Ml(){Et=yr.current,Fe(yr)}function Kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,oh(n)),Je!==null)for(n=Je.return;n!==null;){var s=n;switch(hl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ai();break;case 3:Pr(),Fe(Nt),Fe(mt),Nl();break;case 5:jl(s);break;case 4:Pr();break;case 13:Fe(Ue);break;case 19:Fe(Ue);break;case 10:vl(s.type._context);break;case 22:case 23:Ml()}n=n.return}if(st=e,Je=e=Fn(e.current,null),lt=Et=t,et=0,zs=null,Pl=uo=rr=0,wt=ms=null,Vn!==null){for(t=0;t<Vn.length;t++)if(n=Vn[t],s=n.interleaved,s!==null){n.interleaved=null;var i=s.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,s.next=a}n.pending=s}Vn=null}return e}function Lf(e,t){do{var n=Je;try{if(gl(),vi.current=Hi,Yi){for(var s=qe.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}Yi=!1}if(nr=0,rt=Ze=qe=null,us=!1,Rs=0,Tl.current=null,n===null||n.return===null){et=1,zs=t,Je=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=lt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=qc(a);if(w!==null){w.flags&=-257,Qc(w,a,l,o,t),w.mode&1&&Uc(o,d,t),t=w,c=d;var y=t.updateQueue;if(y===null){var j=new Set;j.add(c),t.updateQueue=j}else y.add(c);break e}else{if(!(t&1)){Uc(o,d,t),Dl();break e}c=Error(H(426))}}else if(Oe&&l.mode&1){var S=qc(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Qc(S,a,l,o,t),pl(zr(c,l));break e}}o=c=zr(c,l),et!==4&&(et=2),ms===null?ms=[o]:ms.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=xf(o,c,t);Ic(o,g);break e;case 1:l=c;var m=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(In===null||!In.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=gf(o,l,t);Ic(o,C);break e}}o=o.return}while(o!==null)}If(n)}catch(R){t=R,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(1)}function Mf(){var e=Wi.current;return Wi.current=Hi,e===null?Hi:e}function Dl(){(et===0||et===3||et===2)&&(et=4),st===null||!(rr&268435455)&&!(uo&268435455)||_n(st,lt)}function Xi(e,t){var n=Ne;Ne|=2;var s=Mf();(st!==e||lt!==t)&&(an=null,Kn(e,t));do try{Ph();break}catch(i){Lf(e,i)}while(1);if(gl(),Ne=n,Wi.current=s,Je!==null)throw Error(H(261));return st=null,lt=0,et}function Ph(){for(;Je!==null;)Df(Je)}function zh(){for(;Je!==null&&!rm();)Df(Je)}function Df(e){var t=Ff(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?If(e):Je=t,Tl.current=null}function If(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sh(n,t),n!==null){n.flags&=32767,Je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{et=6,Je=null;return}}else if(n=kh(n,t,Et),n!==null){Je=n;return}if(t=t.sibling,t!==null){Je=t;return}Je=t=e}while(t!==null);et===0&&(et=5)}function Hn(e,t,n){var s=Ee,i=At.transition;try{At.transition=null,Ee=1,Lh(e,t,n,s)}finally{At.transition=i,Ee=s}return null}function Lh(e,t,n,s){do Sr();while(Tn!==null);if(Ne&6)throw Error(H(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(mm(e,o),e===st&&(Je=st=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ni||(ni=!0,Of(Pi,function(){return Sr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=At.transition,At.transition=null;var a=Ee;Ee=1;var l=Ne;Ne|=4,Tl.current=null,Eh(e,n),Tf(n,e),Zm(wa),Li=!!ba,wa=ba=null,e.current=n,_h(n),sm(),Ne=l,Ee=a,At.transition=o}else e.current=n;if(ni&&(ni=!1,Tn=e,Gi=i),o=e.pendingLanes,o===0&&(In=null),am(n.stateNode),St(e,Ge()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],s(i.value,{componentStack:i.stack,digest:i.digest});if(Vi)throw Vi=!1,e=Ba,Ba=null,e;return Gi&1&&e.tag!==0&&Sr(),o=e.pendingLanes,o&1?e===Ua?hs++:(hs=0,Ua=e):hs=0,qn(),null}function Sr(){if(Tn!==null){var e=pu(Gi),t=At.transition,n=Ee;try{if(At.transition=null,Ee=16>e?16:e,Tn===null)var s=!1;else{if(e=Tn,Tn=null,Gi=0,Ne&6)throw Error(H(331));var i=Ne;for(Ne|=4,se=e.current;se!==null;){var o=se,a=o.child;if(se.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(se=d;se!==null;){var f=se;switch(f.tag){case 0:case 11:case 15:fs(8,f,o)}var p=f.child;if(p!==null)p.return=f,se=p;else for(;se!==null;){f=se;var h=f.sibling,w=f.return;if(Ef(f),f===d){se=null;break}if(h!==null){h.return=w,se=h;break}se=w}}}var y=o.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var S=j.sibling;j.sibling=null,j=S}while(j!==null)}}se=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,se=a;else e:for(;se!==null;){if(o=se,o.flags&2048)switch(o.tag){case 0:case 11:case 15:fs(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,se=g;break e}se=o.return}}var m=e.current;for(se=m;se!==null;){a=se;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,se=x;else e:for(a=m;se!==null;){if(l=se,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:co(9,l)}}catch(R){He(l,l.return,R)}if(l===a){se=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,se=C;break e}se=l.return}}if(Ne=i,qn(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(to,e)}catch{}s=!0}return s}finally{Ee=n,At.transition=t}}return!1}function rd(e,t,n){t=zr(n,t),t=xf(e,t,1),e=Dn(e,t,1),t=gt(),e!==null&&(Ds(e,1,t),St(e,t))}function He(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(In===null||!In.has(s))){e=zr(n,e),e=gf(t,e,1),t=Dn(t,e,1),e=gt(),t!==null&&(Ds(t,1,e),St(t,e));break}}t=t.return}}function Mh(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,st===e&&(lt&n)===n&&(et===4||et===3&&(lt&130023424)===lt&&500>Ge()-zl?Kn(e,0):Pl|=n),St(e,t)}function Af(e,t){t===0&&(e.mode&1?(t=Hs,Hs<<=1,!(Hs&130023424)&&(Hs=4194304)):t=1);var n=gt();e=pn(e,t),e!==null&&(Ds(e,t,n),St(e,n))}function Dh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Af(e,n)}function Ih(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(H(314))}s!==null&&s.delete(t),Af(e,n)}var Ff;Ff=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Nt.current)jt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return jt=!1,Nh(e,t,n);jt=!!(e.flags&131072)}else jt=!1,Oe&&t.flags&1048576&&Bu(t,$i,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;bi(e,t),e=t.pendingProps;var i=_r(t,mt.current);kr(t,n),i=Sl(null,t,s,e,i,n);var o=Cl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(s)?(o=!0,Fi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bl(t),i.updater=lo,t.stateNode=i,i._reactInternals=t,Ta(t,s,e,n),t=La(null,t,s,!0,o,n)):(t.tag=0,Oe&&o&&ml(t),xt(null,t,i,n),t=t.child),t;case 16:s=t.elementType;e:{switch(bi(e,t),e=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=Fh(s),e=qt(s,e),i){case 0:t=za(null,t,s,e,n);break e;case 1:t=Wc(null,t,s,e,n);break e;case 11:t=Yc(null,t,s,e,n);break e;case 14:t=Hc(null,t,s,qt(s.type,e),n);break e}throw Error(H(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:qt(s,i),za(e,t,s,i,n);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:qt(s,i),Wc(e,t,s,i,n);case 3:e:{if(wf(t),e===null)throw Error(H(387));s=t.pendingProps,o=t.memoizedState,i=o.element,Wu(e,t),qi(t,s,null,n);var a=t.memoizedState;if(s=a.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=zr(Error(H(423)),t),t=Vc(e,t,s,n,i);break e}else if(s!==i){i=zr(Error(H(424)),t),t=Vc(e,t,s,n,i);break e}else for(_t=Mn(t.stateNode.containerInfo.firstChild),Rt=t,Oe=!0,Yt=null,n=Yu(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),s===i){t=xn(e,t,n);break e}xt(e,t,s,n)}t=t.child}return t;case 5:return Vu(t),e===null&&Ea(t),s=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ja(s,i)?a=null:o!==null&&ja(s,o)&&(t.flags|=32),bf(e,t),xt(e,t,a,n),t.child;case 6:return e===null&&Ea(t),null;case 13:return jf(e,t,n);case 4:return wl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Tr(t,null,s,n):xt(e,t,s,n),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:qt(s,i),Yc(e,t,s,i,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ie(Bi,s._currentValue),s._currentValue=a,o!==null)if(Vt(o.value,a)){if(o.children===i.children&&!Nt.current){t=xn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(o.tag===1){c=un(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),_a(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(H(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),_a(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}xt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,kr(t,n),i=Ft(i),s=s(i),t.flags|=1,xt(e,t,s,n),t.child;case 14:return s=t.type,i=qt(s,t.pendingProps),i=qt(s.type,i),Hc(e,t,s,i,n);case 15:return vf(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:qt(s,i),bi(e,t),t.tag=1,kt(s)?(e=!0,Fi(t)):e=!1,kr(t,n),pf(t,s,i),Ta(t,s,i,n),La(null,t,s,!0,e,n);case 19:return Nf(e,t,n);case 22:return yf(e,t,n)}throw Error(H(156,t.tag))};function Of(e,t){return uu(e,t)}function Ah(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,s){return new Ah(e,t,n,s)}function Il(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fh(e){if(typeof e=="function")return Il(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tl)return 11;if(e===nl)return 14}return 2}function Fn(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ni(e,t,n,s,i,o){var a=2;if(s=e,typeof e=="function")Il(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case cr:return Jn(n.children,i,o,t);case el:a=8,i|=8;break;case ea:return e=Dt(12,n,t,i|2),e.elementType=ea,e.lanes=o,e;case ta:return e=Dt(13,n,t,i),e.elementType=ta,e.lanes=o,e;case na:return e=Dt(19,n,t,i),e.elementType=na,e.lanes=o,e;case Vd:return fo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hd:a=10;break e;case Wd:a=9;break e;case tl:a=11;break e;case nl:a=14;break e;case kn:a=16,s=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=Dt(a,n,t,i),t.elementType=e,t.type=s,t.lanes=o,t}function Jn(e,t,n,s){return e=Dt(7,e,s,t),e.lanes=n,e}function fo(e,t,n,s){return e=Dt(22,e,s,t),e.elementType=Vd,e.lanes=n,e.stateNode={isHidden:!1},e}function qo(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function Qo(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Oh(e,t,n,s,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ko(0),this.expirationTimes=ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Al(e,t,n,s,i,o,a,l,c){return e=new Oh(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bl(o),e}function $h(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function $f(e){if(!e)return $n;e=e._reactInternals;e:{if(or(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var n=e.type;if(kt(n))return Ou(e,n,t)}return t}function Bf(e,t,n,s,i,o,a,l,c){return e=Al(n,s,!0,e,i,o,a,l,c),e.context=$f(null),n=e.current,s=gt(),i=An(n),o=un(s,i),o.callback=t??null,Dn(n,o,i),e.current.lanes=i,Ds(e,i,s),St(e,s),e}function mo(e,t,n,s){var i=t.current,o=gt(),a=An(i);return n=$f(n),t.context===null?t.context=n:t.pendingContext=n,t=un(o,a),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Dn(i,t,a),e!==null&&(Wt(e,i,a,o),gi(e,i,a)),a}function Ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fl(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function Bh(){return null}var Uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ol(e){this._internalRoot=e}ho.prototype.render=Ol.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));mo(e,t,null,null)};ho.prototype.unmount=Ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sr(function(){mo(null,e,null,null)}),t[hn]=null}};function ho(e){this._internalRoot=e}ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=vu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&bu(e)}};function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function Uh(e,t,n,s,i){if(i){if(typeof s=="function"){var o=s;s=function(){var d=Ki(a);o.call(d)}}var a=Bf(t,s,e,0,null,!1,!1,"",id);return e._reactRootContainer=a,e[hn]=a.current,ks(e.nodeType===8?e.parentNode:e),sr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var l=s;s=function(){var d=Ki(c);l.call(d)}}var c=Al(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=c,e[hn]=c.current,ks(e.nodeType===8?e.parentNode:e),sr(function(){mo(t,c,n,s)}),c}function xo(e,t,n,s,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Ki(a);l.call(c)}}mo(t,a,e,i)}else a=Uh(n,t,e,i,s);return Ki(a)}xu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ss(t.pendingLanes);n!==0&&(il(t,n|1),St(t,Ge()),!(Ne&6)&&(Lr=Ge()+500,qn()))}break;case 13:sr(function(){var s=pn(e,1);if(s!==null){var i=gt();Wt(s,e,1,i)}}),Fl(e,1)}};ol=function(e){if(e.tag===13){var t=pn(e,134217728);if(t!==null){var n=gt();Wt(t,e,134217728,n)}Fl(e,134217728)}};gu=function(e){if(e.tag===13){var t=An(e),n=pn(e,t);if(n!==null){var s=gt();Wt(n,e,t,s)}Fl(e,t)}};vu=function(){return Ee};yu=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}};fa=function(e,t,n){switch(t){case"input":if(ia(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var i=io(s);if(!i)throw Error(H(90));Xd(s),ia(s,i)}}}break;case"textarea":Jd(e,n);break;case"select":t=n.value,t!=null&&br(e,!!n.multiple,t,!1)}};iu=Ll;ou=sr;var qh={usingClientEntryPoint:!1,Events:[As,mr,io,ru,su,Ll]},Gr={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qh={bundleType:Gr.bundleType,version:Gr.version,rendererPackageName:Gr.rendererPackageName,rendererConfig:Gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cu(e),e===null?null:e.stateNode},findFiberByHostInstance:Gr.findFiberByHostInstance||Bh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ri.isDisabled&&ri.supportsFiber)try{to=ri.inject(Qh),rn=ri}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qh;Pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$l(t))throw Error(H(200));return $h(e,t,null,n)};Pt.createRoot=function(e,t){if(!$l(e))throw Error(H(299));var n=!1,s="",i=Uf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Al(e,1,!1,null,null,n,!1,s,i),e[hn]=t.current,ks(e.nodeType===8?e.parentNode:e),new Ol(t)};Pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=cu(t),e=e===null?null:e.stateNode,e};Pt.flushSync=function(e){return sr(e)};Pt.hydrate=function(e,t,n){if(!po(t))throw Error(H(200));return xo(null,e,t,!0,n)};Pt.hydrateRoot=function(e,t,n){if(!$l(e))throw Error(H(405));var s=n!=null&&n.hydratedSources||null,i=!1,o="",a=Uf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Bf(t,null,e,1,n??null,i,!1,o,a),e[hn]=t.current,ks(e),s)for(e=0;e<s.length;e++)n=s[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ho(t)};Pt.render=function(e,t,n){if(!po(t))throw Error(H(200));return xo(null,e,t,!1,n)};Pt.unmountComponentAtNode=function(e){if(!po(e))throw Error(H(40));return e._reactRootContainer?(sr(function(){xo(null,null,e,!1,function(){e._reactRootContainer=null,e[hn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Ll;Pt.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!po(n))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return xo(e,t,n,!1,s)};Pt.version="18.3.1-next-f1338f8080-20240426";function qf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qf)}catch(e){console.error(e)}}qf(),Ud.exports=Pt;var Yh=Ud.exports,od=Yh;Jo.createRoot=od.createRoot,Jo.hydrateRoot=od.hydrateRoot;const Hh="modulepreload",Wh=function(e){return"/"+e},ad={},Qf=function(t,n,s){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Wh(o),o in ad)return;ad[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!s)for(let f=i.length-1;f>=0;f--){const p=i[f];if(p.href===o&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":Hh,a||(d.as="script",d.crossOrigin=""),d.href=o,document.head.appendChild(d),a)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};var ld="popstate";function Vh(e={}){function t(s,i){let{pathname:o,search:a,hash:l}=s.location;return Ya("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(s,i){return typeof i=="string"?i:Ls(i)}return Xh(t,n,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Gh(){return Math.random().toString(36).substring(2,10)}function cd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ya(e,t,n=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ar(t):t,state:n,key:t&&t.key||s||Gh()}}function Ls({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function Xh(e,t,n,s={}){let{window:i=document.defaultView,v5Compat:o=!1}=s,a=i.history,l="POP",c=null,d=f();d==null&&(d=0,a.replaceState({...a.state,idx:d},""));function f(){return(a.state||{idx:null}).idx}function p(){l="POP";let S=f(),g=S==null?null:S-d;d=S,c&&c({action:l,location:j.location,delta:g})}function h(S,g){l="PUSH";let m=Ya(j.location,S,g);n&&n(m,S),d=f()+1;let x=cd(m,d),C=j.createHref(m);try{a.pushState(x,"",C)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(C)}o&&c&&c({action:l,location:j.location,delta:1})}function w(S,g){l="REPLACE";let m=Ya(j.location,S,g);n&&n(m,S),d=f();let x=cd(m,d),C=j.createHref(m);a.replaceState(x,"",C),o&&c&&c({action:l,location:j.location,delta:0})}function y(S){return Kh(S)}let j={get action(){return l},get location(){return e(i,a)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(ld,p),c=S,()=>{i.removeEventListener(ld,p),c=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let g=y(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:w,go(S){return a.go(S)}};return j}function Kh(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),$e(n,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Ls(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function Yf(e,t,n="/"){return Jh(e,t,n,!1)}function Jh(e,t,n,s){let i=typeof t=="string"?Ar(t):t,o=gn(i.pathname||"/",n);if(o==null)return null;let a=Hf(e);Zh(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let d=dp(o);l=lp(a[c],d,s)}return l}function Hf(e,t=[],n=[],s=""){let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&($e(c.relativePath.startsWith(s),`Absolute route path "${c.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(s.length));let d=fn([s,c.relativePath]),f=n.concat(c);o.children&&o.children.length>0&&($e(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Hf(o.children,t,f,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:op(d,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of Wf(o.path))i(o,a,c)}),t}function Wf(e){let t=e.split("/");if(t.length===0)return[];let[n,...s]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(s.length===0)return i?[o,""]:[o];let a=Wf(s.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Zh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ap(t.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var ep=/^:[\w-]+$/,tp=3,np=2,rp=1,sp=10,ip=-2,dd=e=>e==="*";function op(e,t){let n=e.split("/"),s=n.length;return n.some(dd)&&(s+=ip),t&&(s+=np),n.filter(i=>!dd(i)).reduce((i,o)=>i+(ep.test(o)?tp:o===""?rp:sp),s)}function ap(e,t){return e.length===t.length&&e.slice(0,-1).every((s,i)=>s===t[i])?e[e.length-1]-t[t.length-1]:0}function lp(e,t,n=!1){let{routesMeta:s}=e,i={},o="/",a=[];for(let l=0;l<s.length;++l){let c=s[l],d=l===s.length-1,f=o==="/"?t:t.slice(o.length)||"/",p=Ji({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},f),h=c.route;if(!p&&d&&n&&!s[s.length-1].route.index&&(p=Ji({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:fn([o,p.pathname]),pathnameBase:hp(fn([o,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(o=fn([o,p.pathnameBase]))}return a}function Ji(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,s]=cp(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:s.reduce((d,{paramName:f,isOptional:p},h)=>{if(f==="*"){let y=l[h]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const w=l[h];return p&&!w?d[f]=void 0:d[f]=(w||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:a,pattern:e}}function cp(e,t=!1,n=!0){Gt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),s]}function dp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function gn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,s=e.charAt(n);return s&&s!=="/"?null:e.slice(n)||"/"}function up(e,t="/"){let{pathname:n,search:s="",hash:i=""}=typeof e=="string"?Ar(e):e;return{pathname:n?n.startsWith("/")?n:fp(n,t):t,search:pp(s),hash:xp(i)}}function fp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yo(e,t,n,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function mp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bl(e){let t=mp(e);return t.map((n,s)=>s===t.length-1?n.pathname:n.pathnameBase)}function Ul(e,t,n,s=!1){let i;typeof e=="string"?i=Ar(e):(i={...e},$e(!i.pathname||!i.pathname.includes("?"),Yo("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),Yo("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),Yo("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!s&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}l=p>=0?t[p]:"/"}let c=up(i,l),d=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}var fn=e=>e.join("/").replace(/\/\/+/g,"/"),hp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),pp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function gp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Vf=["POST","PUT","PATCH","DELETE"];new Set(Vf);var vp=["GET",...Vf];new Set(vp);var Fr=u.createContext(null);Fr.displayName="DataRouter";var go=u.createContext(null);go.displayName="DataRouterState";u.createContext(!1);var Gf=u.createContext({isTransitioning:!1});Gf.displayName="ViewTransition";var yp=u.createContext(new Map);yp.displayName="Fetchers";var bp=u.createContext(null);bp.displayName="Await";var Xt=u.createContext(null);Xt.displayName="Navigation";var Os=u.createContext(null);Os.displayName="Location";var $t=u.createContext({outlet:null,matches:[],isDataRoute:!1});$t.displayName="Route";var ql=u.createContext(null);ql.displayName="RouteError";function wp(e,{relative:t}={}){$e(Or(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=u.useContext(Xt),{hash:i,pathname:o,search:a}=$s(e,{relative:t}),l=o;return n!=="/"&&(l=o==="/"?n:fn([n,o])),s.createHref({pathname:l,search:a,hash:i})}function Or(){return u.useContext(Os)!=null}function on(){return $e(Or(),"useLocation() may be used only in the context of a <Router> component."),u.useContext(Os).location}var Xf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Kf(e){u.useContext(Xt).static||u.useLayoutEffect(e)}function bt(){let{isDataRoute:e}=u.useContext($t);return e?Ap():jp()}function jp(){$e(Or(),"useNavigate() may be used only in the context of a <Router> component.");let e=u.useContext(Fr),{basename:t,navigator:n}=u.useContext(Xt),{matches:s}=u.useContext($t),{pathname:i}=on(),o=JSON.stringify(Bl(s)),a=u.useRef(!1);return Kf(()=>{a.current=!0}),u.useCallback((c,d={})=>{if(Gt(a.current,Xf),!a.current)return;if(typeof c=="number"){n.go(c);return}let f=Ul(c,JSON.parse(o),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:fn([t,f.pathname])),(d.replace?n.replace:n.push)(f,d.state,d)},[t,n,o,i,e])}var Np=u.createContext(null);function kp(e){let t=u.useContext($t).outlet;return t&&u.createElement(Np.Provider,{value:e},t)}function Sp(){let{matches:e}=u.useContext($t),t=e[e.length-1];return t?t.params:{}}function $s(e,{relative:t}={}){let{matches:n}=u.useContext($t),{pathname:s}=on(),i=JSON.stringify(Bl(n));return u.useMemo(()=>Ul(e,JSON.parse(i),s,t==="path"),[e,i,s,t])}function Cp(e,t){return Jf(e,t)}function Jf(e,t,n,s){var g;$e(Or(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=u.useContext(Xt),{matches:o}=u.useContext($t),a=o[o.length-1],l=a?a.params:{},c=a?a.pathname:"/",d=a?a.pathnameBase:"/",f=a&&a.route;{let m=f&&f.path||"";Zf(c,!f||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let p=on(),h;if(t){let m=typeof t=="string"?Ar(t):t;$e(d==="/"||((g=m.pathname)==null?void 0:g.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${m.pathname}" was given in the \`location\` prop.`),h=m}else h=p;let w=h.pathname||"/",y=w;if(d!=="/"){let m=d.replace(/^\//,"").split("/");y="/"+w.replace(/^\//,"").split("/").slice(m.length).join("/")}let j=Yf(e,{pathname:y});Gt(f||j!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),Gt(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Pp(j&&j.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:fn([d,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?d:fn([d,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,s);return t&&S?u.createElement(Os.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},S):S}function Ep(){let e=Ip(),t=gp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:s},o={padding:"2px 4px",backgroundColor:s},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=u.createElement(u.Fragment,null,u.createElement("p",null,"💿 Hey developer 👋"),u.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",u.createElement("code",{style:o},"ErrorBoundary")," or"," ",u.createElement("code",{style:o},"errorElement")," prop on your route.")),u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:i},n):null,a)}var _p=u.createElement(Ep,null),Rp=class extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?u.createElement($t.Provider,{value:this.props.routeContext},u.createElement(ql.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Tp({routeContext:e,match:t,children:n}){let s=u.useContext(Fr);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),u.createElement($t.Provider,{value:e},n)}function Pp(e,t=[],n=null,s=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=n==null?void 0:n.errors;if(o!=null){let c=i.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);$e(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let a=!1,l=-1;if(n)for(let c=0;c<i.length;c++){let d=i[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=c),d.route.id){let{loaderData:f,errors:p}=n,h=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!p||p[d.route.id]===void 0);if(d.route.lazy||h){a=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((c,d,f)=>{let p,h=!1,w=null,y=null;n&&(p=o&&d.route.id?o[d.route.id]:void 0,w=d.route.errorElement||_p,a&&(l<0&&f===0?(Zf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,y=null):l===f&&(h=!0,y=d.route.hydrateFallbackElement||null)));let j=t.concat(i.slice(0,f+1)),S=()=>{let g;return p?g=w:h?g=y:d.route.Component?g=u.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,u.createElement(Tp,{match:d,routeContext:{outlet:c,matches:j,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?u.createElement(Rp,{location:n.location,revalidation:n.revalidation,component:w,error:p,children:S(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):S()},null)}function Ql(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zp(e){let t=u.useContext(Fr);return $e(t,Ql(e)),t}function Lp(e){let t=u.useContext(go);return $e(t,Ql(e)),t}function Mp(e){let t=u.useContext($t);return $e(t,Ql(e)),t}function Yl(e){let t=Mp(e),n=t.matches[t.matches.length-1];return $e(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Dp(){return Yl("useRouteId")}function Ip(){var s;let e=u.useContext(ql),t=Lp("useRouteError"),n=Yl("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[n]}function Ap(){let{router:e}=zp("useNavigate"),t=Yl("useNavigate"),n=u.useRef(!1);return Kf(()=>{n.current=!0}),u.useCallback(async(i,o={})=>{Gt(n.current,Xf),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var ud={};function Zf(e,t,n){!t&&!ud[e]&&(ud[e]=!0,Gt(!1,n))}u.memo(Fp);function Fp({routes:e,future:t,state:n}){return Jf(e,void 0,n,t)}function Op({to:e,replace:t,state:n,relative:s}){$e(Or(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=u.useContext(Xt);Gt(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=u.useContext($t),{pathname:a}=on(),l=bt(),c=Ul(e,Bl(o),a,s==="path"),d=JSON.stringify(c);return u.useEffect(()=>{l(JSON.parse(d),{replace:t,state:n,relative:s})},[l,d,s,t,n]),null}function $p(e){return kp(e.context)}function nt(e){$e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Bp({basename:e="/",children:t=null,location:n,navigationType:s="POP",navigator:i,static:o=!1}){$e(!Or(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),l=u.useMemo(()=>({basename:a,navigator:i,static:o,future:{}}),[a,i,o]);typeof n=="string"&&(n=Ar(n));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:h="default"}=n,w=u.useMemo(()=>{let y=gn(c,a);return y==null?null:{location:{pathname:y,search:d,hash:f,state:p,key:h},navigationType:s}},[a,c,d,f,p,h,s]);return Gt(w!=null,`<Router basename="${a}"> is not able to match the URL "${c}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:u.createElement(Xt.Provider,{value:l},u.createElement(Os.Provider,{children:t,value:w}))}function Up({children:e,location:t}){return Cp(Ha(e),t)}function Ha(e,t=[]){let n=[];return u.Children.forEach(e,(s,i)=>{if(!u.isValidElement(s))return;let o=[...t,i];if(s.type===u.Fragment){n.push.apply(n,Ha(s.props.children,o));return}$e(s.type===nt,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$e(!s.props.index||!s.props.children,"An index route cannot have child routes.");let a={id:s.props.id||o.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(a.children=Ha(s.props.children,o)),n.push(a)}),n}var ki="get",Si="application/x-www-form-urlencoded";function vo(e){return e!=null&&typeof e.tagName=="string"}function qp(e){return vo(e)&&e.tagName.toLowerCase()==="button"}function Qp(e){return vo(e)&&e.tagName.toLowerCase()==="form"}function Yp(e){return vo(e)&&e.tagName.toLowerCase()==="input"}function Hp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Wp(e,t){return e.button===0&&(!t||t==="_self")&&!Hp(e)}var si=null;function Vp(){if(si===null)try{new FormData(document.createElement("form"),0),si=!1}catch{si=!0}return si}var Gp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ho(e){return e!=null&&!Gp.has(e)?(Gt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Si}"`),null):e}function Xp(e,t){let n,s,i,o,a;if(Qp(e)){let l=e.getAttribute("action");s=l?gn(l,t):null,n=e.getAttribute("method")||ki,i=Ho(e.getAttribute("enctype"))||Si,o=new FormData(e)}else if(qp(e)||Yp(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(s=c?gn(c,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||ki,i=Ho(e.getAttribute("formenctype"))||Ho(l.getAttribute("enctype"))||Si,o=new FormData(l,e),!Vp()){let{name:d,type:f,value:p}=e;if(f==="image"){let h=d?`${d}.`:"";o.append(`${h}x`,"0"),o.append(`${h}y`,"0")}else d&&o.append(d,p)}}else{if(vo(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ki,s=null,i=Si,a=e}return o&&i==="text/plain"&&(a=o,o=void 0),{action:s,method:n.toLowerCase(),encType:i,formData:o,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Hl(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Kp(e,t,n){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${n}`:t&&gn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function Jp(e,t){if(e.id in t)return t[e.id];try{let n=await Qf(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Zp(e){return e!=null&&typeof e.page=="string"}function ex(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function tx(e,t,n){let s=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let a=await Jp(o,n);return a.links?a.links():[]}return[]}));return ix(s.flat(1).filter(ex).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function fd(e,t,n,s,i,o){let a=(c,d)=>n[d]?c.route.id!==n[d].route.id:!0,l=(c,d)=>{var f;return n[d].pathname!==c.pathname||((f=n[d].route.path)==null?void 0:f.endsWith("*"))&&n[d].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,d)=>a(c,d)||l(c,d)):o==="data"?t.filter((c,d)=>{var p;let f=s.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(a(c,d)||l(c,d))return!0;if(c.route.shouldRevalidate){let h=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function nx(e,t,{includeHydrateFallback:n}={}){return rx(e.map(s=>{let i=t.routes[s.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function rx(e){return[...new Set(e)]}function sx(e){let t={},n=Object.keys(e).sort();for(let s of n)t[s]=e[s];return t}function ix(e,t){let n=new Set,s=new Set(t);return e.reduce((i,o)=>{if(t&&!Zp(o)&&o.as==="script"&&o.href&&s.has(o.href))return i;let l=JSON.stringify(sx(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function e0(){let e=u.useContext(Fr);return Hl(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function ox(){let e=u.useContext(go);return Hl(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Wl=u.createContext(void 0);Wl.displayName="FrameworkContext";function t0(){let e=u.useContext(Wl);return Hl(e,"You must render this element inside a <HydratedRouter> element"),e}function ax(e,t){let n=u.useContext(Wl),[s,i]=u.useState(!1),[o,a]=u.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:d,onMouseLeave:f,onTouchStart:p}=t,h=u.useRef(null);u.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let j=g=>{g.forEach(m=>{a(m.isIntersecting)})},S=new IntersectionObserver(j,{threshold:.5});return h.current&&S.observe(h.current),()=>{S.disconnect()}}},[e]),u.useEffect(()=>{if(s){let j=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(j)}}},[s]);let w=()=>{i(!0)},y=()=>{i(!1),a(!1)};return n?e!=="intent"?[o,h,{}]:[o,h,{onFocus:Xr(l,w),onBlur:Xr(c,y),onMouseEnter:Xr(d,w),onMouseLeave:Xr(f,y),onTouchStart:Xr(p,w)}]:[!1,h,{}]}function Xr(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function lx({page:e,...t}){let{router:n}=e0(),s=u.useMemo(()=>Yf(n.routes,e,n.basename),[n.routes,e,n.basename]);return s?u.createElement(dx,{page:e,matches:s,...t}):null}function cx(e){let{manifest:t,routeModules:n}=t0(),[s,i]=u.useState([]);return u.useEffect(()=>{let o=!1;return tx(e,t,n).then(a=>{o||i(a)}),()=>{o=!0}},[e,t,n]),s}function dx({page:e,matches:t,...n}){let s=on(),{manifest:i,routeModules:o}=t0(),{basename:a}=e0(),{loaderData:l,matches:c}=ox(),d=u.useMemo(()=>fd(e,t,c,i,s,"data"),[e,t,c,i,s]),f=u.useMemo(()=>fd(e,t,c,i,s,"assets"),[e,t,c,i,s]),p=u.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let y=new Set,j=!1;if(t.forEach(g=>{var x;let m=i.routes[g.route.id];!m||!m.hasLoader||(!d.some(C=>C.route.id===g.route.id)&&g.route.id in l&&((x=o[g.route.id])!=null&&x.shouldRevalidate)||m.hasClientLoader?j=!0:y.add(g.route.id))}),y.size===0)return[];let S=Kp(e,a,"data");return j&&y.size>0&&S.searchParams.set("_routes",t.filter(g=>y.has(g.route.id)).map(g=>g.route.id).join(",")),[S.pathname+S.search]},[a,l,s,i,d,t,e,o]),h=u.useMemo(()=>nx(f,i),[f,i]),w=cx(f);return u.createElement(u.Fragment,null,p.map(y=>u.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...n})),h.map(y=>u.createElement("link",{key:y,rel:"modulepreload",href:y,...n})),w.map(({key:y,link:j})=>u.createElement("link",{key:y,...j})))}function ux(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var n0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{n0&&(window.__reactRouterVersion="7.7.1")}catch{}function fx({basename:e,children:t,window:n}){let s=u.useRef();s.current==null&&(s.current=Vh({window:n,v5Compat:!0}));let i=s.current,[o,a]=u.useState({action:i.action,location:i.location}),l=u.useCallback(c=>{u.startTransition(()=>a(c))},[a]);return u.useLayoutEffect(()=>i.listen(l),[i,l]),u.createElement(Bp,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i})}var r0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s0=u.forwardRef(function({onClick:t,discover:n="render",prefetch:s="none",relative:i,reloadDocument:o,replace:a,state:l,target:c,to:d,preventScrollReset:f,viewTransition:p,...h},w){let{basename:y}=u.useContext(Xt),j=typeof d=="string"&&r0.test(d),S,g=!1;if(typeof d=="string"&&j&&(S=d,n0))try{let b=new URL(window.location.href),N=d.startsWith("//")?new URL(b.protocol+d):new URL(d),_=gn(N.pathname,y);N.origin===b.origin&&_!=null?d=_+N.search+N.hash:g=!0}catch{Gt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=wp(d,{relative:i}),[x,C,R]=ax(s,h),z=xx(d,{replace:a,state:l,target:c,preventScrollReset:f,relative:i,viewTransition:p});function k(b){t&&t(b),b.defaultPrevented||z(b)}let v=u.createElement("a",{...h,...R,href:S||m,onClick:g||o?t:k,ref:ux(w,C),target:c,"data-discover":!j&&n==="render"?"true":void 0});return x&&!j?u.createElement(u.Fragment,null,v,u.createElement(lx,{page:m})):v});s0.displayName="Link";var mx=u.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:s="",end:i=!1,style:o,to:a,viewTransition:l,children:c,...d},f){let p=$s(a,{relative:d.relative}),h=on(),w=u.useContext(go),{navigator:y,basename:j}=u.useContext(Xt),S=w!=null&&wx(p)&&l===!0,g=y.encodeLocation?y.encodeLocation(p).pathname:p.pathname,m=h.pathname,x=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(m=m.toLowerCase(),x=x?x.toLowerCase():null,g=g.toLowerCase()),x&&j&&(x=gn(x,j)||x);const C=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let R=m===g||!i&&m.startsWith(g)&&m.charAt(C)==="/",z=x!=null&&(x===g||!i&&x.startsWith(g)&&x.charAt(g.length)==="/"),k={isActive:R,isPending:z,isTransitioning:S},v=R?t:void 0,b;typeof s=="function"?b=s(k):b=[s,R?"active":null,z?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let N=typeof o=="function"?o(k):o;return u.createElement(s0,{...d,"aria-current":v,className:b,ref:f,style:N,to:a,viewTransition:l},typeof c=="function"?c(k):c)});mx.displayName="NavLink";var hx=u.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:s,replace:i,state:o,method:a=ki,action:l,onSubmit:c,relative:d,preventScrollReset:f,viewTransition:p,...h},w)=>{let y=yx(),j=bx(l,{relative:d}),S=a.toLowerCase()==="get"?"get":"post",g=typeof l=="string"&&r0.test(l),m=x=>{if(c&&c(x),x.defaultPrevented)return;x.preventDefault();let C=x.nativeEvent.submitter,R=(C==null?void 0:C.getAttribute("formmethod"))||a;y(C||x.currentTarget,{fetcherKey:t,method:R,navigate:n,replace:i,state:o,relative:d,preventScrollReset:f,viewTransition:p})};return u.createElement("form",{ref:w,method:S,action:j,onSubmit:s?c:m,...h,"data-discover":!g&&e==="render"?"true":void 0})});hx.displayName="Form";function px(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function i0(e){let t=u.useContext(Fr);return $e(t,px(e)),t}function xx(e,{target:t,replace:n,state:s,preventScrollReset:i,relative:o,viewTransition:a}={}){let l=bt(),c=on(),d=$s(e,{relative:o});return u.useCallback(f=>{if(Wp(f,t)){f.preventDefault();let p=n!==void 0?n:Ls(c)===Ls(d);l(e,{replace:p,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[c,l,d,n,s,t,e,i,o,a])}var gx=0,vx=()=>`__${String(++gx)}__`;function yx(){let{router:e}=i0("useSubmit"),{basename:t}=u.useContext(Xt),n=Dp();return u.useCallback(async(s,i={})=>{let{action:o,method:a,encType:l,formData:c,body:d}=Xp(s,t);if(i.navigate===!1){let f=i.fetcherKey||vx();await e.fetch(f,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:d,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:d,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function bx(e,{relative:t}={}){let{basename:n}=u.useContext(Xt),s=u.useContext($t);$e(s,"useFormAction must be used inside a RouteContext");let[i]=s.matches.slice(-1),o={...$s(e||".",{relative:t})},a=on();if(e==null){o.search=a.search;let l=new URLSearchParams(o.search),c=l.getAll("index");if(c.some(f=>f==="")){l.delete("index"),c.filter(p=>p).forEach(p=>l.append("index",p));let f=l.toString();o.search=f?`?${f}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:fn([n,o.pathname])),Ls(o)}function wx(e,{relative:t}={}){let n=u.useContext(Gf);$e(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=i0("useViewTransitionState"),i=$s(e,{relative:t});if(!n.isTransitioning)return!1;let o=gn(n.currentLocation.pathname,s)||n.currentLocation.pathname,a=gn(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Ji(i.pathname,a)!=null||Ji(i.pathname,o)!=null}function jx({size:e=22,spinning:t=!1}){return r.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:r.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[r.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),r.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),r.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),r.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),r.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),r.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),r.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Nx(){const e=bt(),{pathname:t}=on(),n=u.useRef({}),s=u.useRef(0),[i,o]=u.useState(!1),a=u.useRef({});u.useEffect(()=>{a.current={refresh:new Audio("/sounds/refresh.mp3"),tap:new Audio("/sounds/tap.mp3"),whoosh:new Audio("/sounds/whoosh.mp3")},Object.values(a.current).forEach(D=>{D.volume=.5})},[]);const l=D=>{const E=a.current[D];E&&(E.currentTime=0,E.play().catch(()=>{}))},c=D=>{if(navigator.vibrate)switch(D){case"light":navigator.vibrate(10);break;case"medium":navigator.vibrate(20);break;case"heavy":navigator.vibrate(40);break;case"double":navigator.vibrate([20,50,20]);break;case"success":navigator.vibrate([10,50,10,50,10]);break;default:navigator.vibrate(15)}};u.useEffect(()=>{if(t.startsWith("/profile/")){window.scrollTo(0,0);const D=document.querySelector("main");D&&(D.scrollTop=0)}else{const D=n.current[t];D!==void 0?window.scrollTo(0,D):window.scrollTo(0,0)}},[t]);const d=()=>{n.current[t]=window.scrollY},f=["/","/play","/profile"].includes(t),[p,h]=u.useState(!1),[w,y]=u.useState({open:!1,go:null}),[j,S]=u.useState(!1);u.useEffect(()=>{const D=()=>{S(document.body.classList.contains("hide-bottom-nav"))};D();const E=new MutationObserver(D);return E.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>E.disconnect()},[]),u.useEffect(()=>{const D=new MutationObserver(()=>{h(document.body.classList.contains("modal-open"))});return D.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>D.disconnect()},[]);const m=p||j||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(D=>D.test(t)),x=D=>D==="/"?t==="/":t.startsWith(D),C=u.useRef(0),[R,z]=u.useState(!1),[k,v]=u.useState(0),[b,N]=u.useState(!1),[_,A]=u.useState(0),q=D=>{!f||b||window.scrollY===0&&(C.current=D.touches[0].clientY)},J=D=>{if(!(!f||b)&&window.scrollY===0){const E=D.touches[0].clientY-C.current;if(E>0){z(!0);const L=Math.min(E,120);v(L),A(Math.min(L/60*100,100)),E>60&&E<65&&c("light")}}},W=()=>{R&&k>60&&(N(!0),l("refresh"),c("success"),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{N(!1),A(0)},1500)),z(!1),v(0)},G=({path:D,icon:E,label:L,emoji:M})=>{const P=x(D),[$,O]=u.useState(!1),ne=()=>{d(),O(!0),setTimeout(()=>O(!1),600);const B=()=>{if(D==="/play"){o(!0),l("whoosh"),c("medium"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1)},200);return}if(P){const ae=Date.now();ae-s.current<500&&(window.scrollTo({top:0,behavior:"smooth"}),l("tap"),c("double")),s.current=ae}else l("tap"),c("light"),e(D)};if(localStorage.getItem("qp_in_question")==="true"&&!P){y({open:!0,go:B});return}B()};return r.jsxs("button",{type:"button",onClick:ne,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${P?"scale-110":"scale-100 hover:scale-105"}
          ${$?"animate-bounce":""}`,"aria-current":P?"page":void 0,children:[P&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),r.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),r.jsx("div",{className:`leading-none text-2xl transition-transform ${P?"scale-125":""} ${D==="/play"&&i?"animate-spin":""}`,children:M||E}),r.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${P?"text-white":"text-base-muted/80"}`,children:L})]})};return r.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",onTouchStart:q,onTouchMove:J,onTouchEnd:W,children:[r.jsx("style",{children:`
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
      `}),(R||b)&&r.jsxs("div",{className:"fixed left-1/2 z-50 flex flex-col items-center transition-all duration-300",style:{top:b?"60px":`${Math.max(20,Math.min(k-20,80))}px`,transform:"translateX(-50%) scale("+(b?1.1:1)+")"},children:[r.jsxs("div",{className:"relative mb-2",children:[r.jsxs("svg",{width:"48",height:"48",className:b?"animate-spin":"",children:[r.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"rgba(255,255,255,0.2)",strokeWidth:"4"}),r.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"url(#gradient)",strokeWidth:"4",strokeDasharray:`${_*1.26} 126`,strokeLinecap:"round",transform:"rotate(-90 24 24)"}),r.jsx("defs",{children:r.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[r.jsx("stop",{offset:"0%",stopColor:"#6366F1"}),r.jsx("stop",{offset:"50%",stopColor:"#22C55E"}),r.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),r.jsx("div",{className:"absolute inset-0 grid place-items-center",children:r.jsx("span",{className:"text-2xl",children:b?"🎉":"⬇"})})]}),r.jsx("span",{className:`text-sm font-medium text-white px-3 py-1 rounded-full bg-white/20 backdrop-blur
            ${b?"rainbow-text":""}`,children:b?"Refreshed! 🌟":k>60?"Release! 🚀":"Pull down..."}),b&&r.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(6)].map((D,E)=>r.jsx("span",{className:"absolute text-2xl",style:{left:`${-30+E*15}px`,animation:"confetti 1s ease-out forwards",animationDelay:`${E*.1}s`},children:["🎊","✨","⭐","🎈","🎉","💫"][E]},E))})]}),r.jsx("main",{className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:m||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:m||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto",transform:R&&!b?`translateY(${k*.5}px)`:void 0,transition:R||b?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)":void 0},children:r.jsx($p,{})}),w.open&&r.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[r.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[r.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),r.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),r.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>{c("light"),y({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),r.jsx("button",{onClick:()=>{c("medium");const D=w.go;y({open:!1,go:null}),D==null||D()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),r.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!m&&r.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[r.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),r.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),r.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[r.jsx(G,{path:"/",emoji:"🏠",label:"Home"}),r.jsx(G,{path:"/play",icon:r.jsx(jx,{size:26,spinning:i}),label:"Play"}),r.jsx(G,{path:"/swipe",emoji:"📚",label:"Swipe"}),r.jsx(G,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Zi.apply(null,arguments)}function kx(e,t){if(e==null)return{};var n={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;n[s]=e[s]}return n}function Sx(e){u.useEffect(e,[])}var Cx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function It(e,t){var n=t===void 0?{}:t,s=n.volume,i=s===void 0?1:s,o=n.playbackRate,a=o===void 0?1:o,l=n.soundEnabled,c=l===void 0?!0:l,d=n.interrupt,f=d===void 0?!1:d,p=n.onload,h=kx(n,Cx),w=pt.useRef(null),y=pt.useRef(!1),j=pt.useState(null),S=j[0],g=j[1],m=pt.useState(null),x=m[0],C=m[1],R=function(){typeof p=="function"&&p.call(this),y.current&&g(this.duration()*1e3),C(this)};Sx(function(){return Qf(()=>import("./howler-15351d2c.js").then(N=>N.h),[]).then(function(N){if(!y.current){var _;w.current=(_=N.Howl)!==null&&_!==void 0?_:N.default.Howl,y.current=!0,new w.current(Zi({src:Array.isArray(e)?e:[e],volume:i,rate:a,onload:R},h))}}),function(){y.current=!1}}),pt.useEffect(function(){w.current&&x&&C(new w.current(Zi({src:Array.isArray(e)?e:[e],volume:i,onload:R},h)))},[JSON.stringify(e)]),pt.useEffect(function(){x&&(x.volume(i),h.sprite||x.rate(a))},[x,i,a]);var z=pt.useCallback(function(N){typeof N>"u"&&(N={}),!(!x||!c&&!N.forceSoundEnabled)&&(f&&x.stop(),N.playbackRate&&x.rate(N.playbackRate),x.play(N.id))},[x,c,f]),k=pt.useCallback(function(N){x&&x.stop(N)},[x]),v=pt.useCallback(function(N){x&&x.pause(N)},[x]),b=[z,{sound:x,stop:k,pause:v,duration:S}];return b}var o0={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((n,s)=>{e.exports=s()})(y0,function n(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},i,o=!s.document&&!!s.postMessage,a=s.IS_PAPA_WORKER||!1,l={},c=0,d={};function f(v){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(b){var N=R(b);N.chunkSize=parseInt(N.chunkSize),b.step||b.chunk||(N.chunkSize=null),this._handle=new j(N),(this._handle.streamer=this)._config=N}).call(this,v),this.parseChunk=function(b,N){var _=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<_){let q=this._config.newline;q||(A=this._config.quoteChar||'"',q=this._handle.guessLineEndings(b,A)),b=[...b.split(q).slice(_)].join(q)}this.isFirstChunk&&k(this._config.beforeFirstChunk)&&(A=this._config.beforeFirstChunk(b))!==void 0&&(b=A),this.isFirstChunk=!1,this._halted=!1;var _=this._partialLine+b,A=(this._partialLine="",this._handle.parse(_,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(b=A.meta.cursor,_=(this._finished||(this._partialLine=_.substring(b-this._baseIndex),this._baseIndex=b),A&&A.data&&(this._rowCount+=A.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),a)s.postMessage({results:A,workerId:d.WORKER_ID,finished:_});else if(k(this._config.chunk)&&!N){if(this._config.chunk(A,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=A=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(A.data),this._completeResults.errors=this._completeResults.errors.concat(A.errors),this._completeResults.meta=A.meta),this._completed||!_||!k(this._config.complete)||A&&A.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),_||A&&A.meta.paused||this._nextChunk(),A}this._halted=!0},this._sendError=function(b){k(this._config.error)?this._config.error(b):a&&this._config.error&&s.postMessage({workerId:d.WORKER_ID,error:b,finished:!1})}}function p(v){var b;(v=v||{}).chunkSize||(v.chunkSize=d.RemoteChunkSize),f.call(this,v),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(N){this._input=N,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(b=new XMLHttpRequest,this._config.withCredentials&&(b.withCredentials=this._config.withCredentials),o||(b.onload=z(this._chunkLoaded,this),b.onerror=z(this._chunkError,this)),b.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var N,_=this._config.downloadRequestHeaders;for(N in _)b.setRequestHeader(N,_[N])}var A;this._config.chunkSize&&(A=this._start+this._config.chunkSize-1,b.setRequestHeader("Range","bytes="+this._start+"-"+A));try{b.send(this._config.downloadRequestBody)}catch(q){this._chunkError(q.message)}o&&b.status===0&&this._chunkError()}},this._chunkLoaded=function(){b.readyState===4&&(b.status<200||400<=b.status?this._chunkError():(this._start+=this._config.chunkSize||b.responseText.length,this._finished=!this._config.chunkSize||this._start>=(N=>(N=N.getResponseHeader("Content-Range"))!==null?parseInt(N.substring(N.lastIndexOf("/")+1)):-1)(b),this.parseChunk(b.responseText)))},this._chunkError=function(N){N=b.statusText||N,this._sendError(new Error(N))}}function h(v){(v=v||{}).chunkSize||(v.chunkSize=d.LocalChunkSize),f.call(this,v);var b,N,_=typeof FileReader<"u";this.stream=function(A){this._input=A,N=A.slice||A.webkitSlice||A.mozSlice,_?((b=new FileReader).onload=z(this._chunkLoaded,this),b.onerror=z(this._chunkError,this)):b=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var A=this._input,q=(this._config.chunkSize&&(q=Math.min(this._start+this._config.chunkSize,this._input.size),A=N.call(A,this._start,q)),b.readAsText(A,this._config.encoding));_||this._chunkLoaded({target:{result:q}})},this._chunkLoaded=function(A){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(A.target.result)},this._chunkError=function(){this._sendError(b.error)}}function w(v){var b;f.call(this,v=v||{}),this.stream=function(N){return b=N,this._nextChunk()},this._nextChunk=function(){var N,_;if(!this._finished)return N=this._config.chunkSize,b=N?(_=b.substring(0,N),b.substring(N)):(_=b,""),this._finished=!b,this.parseChunk(_)}}function y(v){f.call(this,v=v||{});var b=[],N=!0,_=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(A){this._input=A,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){_&&b.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),b.length?this.parseChunk(b.shift()):N=!0},this._streamData=z(function(A){try{b.push(typeof A=="string"?A:A.toString(this._config.encoding)),N&&(N=!1,this._checkIsFinished(),this.parseChunk(b.shift()))}catch(q){this._streamError(q)}},this),this._streamError=z(function(A){this._streamCleanUp(),this._sendError(A)},this),this._streamEnd=z(function(){this._streamCleanUp(),_=!0,this._streamData("")},this),this._streamCleanUp=z(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(v){var b,N,_,A,q=Math.pow(2,53),J=-q,W=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,G=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,D=this,E=0,L=0,M=!1,P=!1,$=[],O={data:[],errors:[],meta:{}};function ne(T){return v.skipEmptyLines==="greedy"?T.join("").trim()==="":T.length===1&&T[0].length===0}function B(){if(O&&_&&(ae("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+d.DefaultDelimiter+"'"),_=!1),v.skipEmptyLines&&(O.data=O.data.filter(function(V){return!ne(V)})),te()){let V=function(Z,X){k(v.transformHeader)&&(Z=v.transformHeader(Z,X)),$.push(Z)};if(O)if(Array.isArray(O.data[0])){for(var T=0;te()&&T<O.data.length;T++)O.data[T].forEach(V);O.data.splice(0,1)}else O.data.forEach(V)}function I(V,Z){for(var X=v.header?{}:[],U=0;U<V.length;U++){var ee=U,F=V[U],F=((Q,K)=>(ie=>(v.dynamicTypingFunction&&v.dynamicTyping[ie]===void 0&&(v.dynamicTyping[ie]=v.dynamicTypingFunction(ie)),(v.dynamicTyping[ie]||v.dynamicTyping)===!0))(Q)?K==="true"||K==="TRUE"||K!=="false"&&K!=="FALSE"&&((ie=>{if(W.test(ie)&&(ie=parseFloat(ie),J<ie&&ie<q))return 1})(K)?parseFloat(K):G.test(K)?new Date(K):K===""?null:K):K)(ee=v.header?U>=$.length?"__parsed_extra":$[U]:ee,F=v.transform?v.transform(F,ee):F);ee==="__parsed_extra"?(X[ee]=X[ee]||[],X[ee].push(F)):X[ee]=F}return v.header&&(U>$.length?ae("FieldMismatch","TooManyFields","Too many fields: expected "+$.length+" fields but parsed "+U,L+Z):U<$.length&&ae("FieldMismatch","TooFewFields","Too few fields: expected "+$.length+" fields but parsed "+U,L+Z)),X}var Y;O&&(v.header||v.dynamicTyping||v.transform)&&(Y=1,!O.data.length||Array.isArray(O.data[0])?(O.data=O.data.map(I),Y=O.data.length):O.data=I(O.data,0),v.header&&O.meta&&(O.meta.fields=$),L+=Y)}function te(){return v.header&&$.length===0}function ae(T,I,Y,V){T={type:T,code:I,message:Y},V!==void 0&&(T.row=V),O.errors.push(T)}k(v.step)&&(A=v.step,v.step=function(T){O=T,te()?B():(B(),O.data.length!==0&&(E+=T.data.length,v.preview&&E>v.preview?N.abort():(O.data=O.data[0],A(O,D))))}),this.parse=function(T,I,Y){var V=v.quoteChar||'"',V=(v.newline||(v.newline=this.guessLineEndings(T,V)),_=!1,v.delimiter?k(v.delimiter)&&(v.delimiter=v.delimiter(T),O.meta.delimiter=v.delimiter):((V=((Z,X,U,ee,F)=>{var Q,K,ie,ke;F=F||[",","	","|",";",d.RECORD_SEP,d.UNIT_SEP];for(var fe=0;fe<F.length;fe++){for(var me,Se=F[fe],_e=0,Re=0,he=0,we=(ie=void 0,new g({comments:ee,delimiter:Se,newline:X,preview:10}).parse(Z)),Ce=0;Ce<we.data.length;Ce++)U&&ne(we.data[Ce])?he++:(me=we.data[Ce].length,Re+=me,ie===void 0?ie=me:0<me&&(_e+=Math.abs(me-ie),ie=me));0<we.data.length&&(Re/=we.data.length-he),(K===void 0||_e<=K)&&(ke===void 0||ke<Re)&&1.99<Re&&(K=_e,Q=Se,ke=Re)}return{successful:!!(v.delimiter=Q),bestDelimiter:Q}})(T,v.newline,v.skipEmptyLines,v.comments,v.delimitersToGuess)).successful?v.delimiter=V.bestDelimiter:(_=!0,v.delimiter=d.DefaultDelimiter),O.meta.delimiter=v.delimiter),R(v));return v.preview&&v.header&&V.preview++,b=T,N=new g(V),O=N.parse(b,I,Y),B(),M?{meta:{paused:!0}}:O||{meta:{paused:!1}}},this.paused=function(){return M},this.pause=function(){M=!0,N.abort(),b=k(v.chunk)?"":b.substring(N.getCharIndex())},this.resume=function(){D.streamer._halted?(M=!1,D.streamer.parseChunk(b,!0)):setTimeout(D.resume,3)},this.aborted=function(){return P},this.abort=function(){P=!0,N.abort(),O.meta.aborted=!0,k(v.complete)&&v.complete(O),b=""},this.guessLineEndings=function(Z,V){Z=Z.substring(0,1048576);var V=new RegExp(S(V)+"([^]*?)"+S(V),"gm"),Y=(Z=Z.replace(V,"")).split("\r"),V=Z.split(`
`),Z=1<V.length&&V[0].length<Y[0].length;if(Y.length===1||Z)return`
`;for(var X=0,U=0;U<Y.length;U++)Y[U][0]===`
`&&X++;return X>=Y.length/2?`\r
`:"\r"}}function S(v){return v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(v){var b=(v=v||{}).delimiter,N=v.newline,_=v.comments,A=v.step,q=v.preview,J=v.fastMode,W=null,G=!1,D=v.quoteChar==null?'"':v.quoteChar,E=D;if(v.escapeChar!==void 0&&(E=v.escapeChar),(typeof b!="string"||-1<d.BAD_DELIMITERS.indexOf(b))&&(b=","),_===b)throw new Error("Comment character same as delimiter");_===!0?_="#":(typeof _!="string"||-1<d.BAD_DELIMITERS.indexOf(_))&&(_=!1),N!==`
`&&N!=="\r"&&N!==`\r
`&&(N=`
`);var L=0,M=!1;this.parse=function(P,$,O){if(typeof P!="string")throw new Error("Input must be a string");var ne=P.length,B=b.length,te=N.length,ae=_.length,T=k(A),I=[],Y=[],V=[],Z=L=0;if(!P)return _e();if(J||J!==!1&&P.indexOf(D)===-1){for(var X=P.split(N),U=0;U<X.length;U++){if(V=X[U],L+=V.length,U!==X.length-1)L+=N.length;else if(O)return _e();if(!_||V.substring(0,ae)!==_){if(T){if(I=[],ke(V.split(b)),Re(),M)return _e()}else ke(V.split(b));if(q&&q<=U)return I=I.slice(0,q),_e(!0)}}return _e()}for(var ee=P.indexOf(b,L),F=P.indexOf(N,L),Q=new RegExp(S(E)+S(D),"g"),K=P.indexOf(D,L);;)if(P[L]===D)for(K=L,L++;;){if((K=P.indexOf(D,K+1))===-1)return O||Y.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:I.length,index:L}),me();if(K===ne-1)return me(P.substring(L,K).replace(Q,D));if(D===E&&P[K+1]===E)K++;else if(D===E||K===0||P[K-1]!==E){ee!==-1&&ee<K+1&&(ee=P.indexOf(b,K+1));var ie=fe((F=F!==-1&&F<K+1?P.indexOf(N,K+1):F)===-1?ee:Math.min(ee,F));if(P.substr(K+1+ie,B)===b){V.push(P.substring(L,K).replace(Q,D)),P[L=K+1+ie+B]!==D&&(K=P.indexOf(D,L)),ee=P.indexOf(b,L),F=P.indexOf(N,L);break}if(ie=fe(F),P.substring(K+1+ie,K+1+ie+te)===N){if(V.push(P.substring(L,K).replace(Q,D)),Se(K+1+ie+te),ee=P.indexOf(b,L),K=P.indexOf(D,L),T&&(Re(),M))return _e();if(q&&I.length>=q)return _e(!0);break}Y.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:I.length,index:L}),K++}}else if(_&&V.length===0&&P.substring(L,L+ae)===_){if(F===-1)return _e();L=F+te,F=P.indexOf(N,L),ee=P.indexOf(b,L)}else if(ee!==-1&&(ee<F||F===-1))V.push(P.substring(L,ee)),L=ee+B,ee=P.indexOf(b,L);else{if(F===-1)break;if(V.push(P.substring(L,F)),Se(F+te),T&&(Re(),M))return _e();if(q&&I.length>=q)return _e(!0)}return me();function ke(he){I.push(he),Z=L}function fe(he){var we=0;return we=he!==-1&&(he=P.substring(K+1,he))&&he.trim()===""?he.length:we}function me(he){return O||(he===void 0&&(he=P.substring(L)),V.push(he),L=ne,ke(V),T&&Re()),_e()}function Se(he){L=he,ke(V),V=[],F=P.indexOf(N,L)}function _e(he){if(v.header&&!$&&I.length&&!G){var we=I[0],Ce=Object.create(null),Te=new Set(we);let Xe=!1;for(let ht=0;ht<we.length;ht++){let it=we[ht];if(Ce[it=k(v.transformHeader)?v.transformHeader(it,ht):it]){let Pe,De=Ce[it];for(;Pe=it+"_"+De,De++,Te.has(Pe););Te.add(Pe),we[ht]=Pe,Ce[it]++,Xe=!0,(W=W===null?{}:W)[Pe]=it}else Ce[it]=1,we[ht]=it;Te.add(it)}Xe&&console.warn("Duplicate headers found and renamed."),G=!0}return{data:I,errors:Y,meta:{delimiter:b,linebreak:N,aborted:M,truncated:!!he,cursor:Z+($||0),renamedHeaders:W}}}function Re(){A(_e()),I=[],Y=[]}},this.abort=function(){M=!0},this.getCharIndex=function(){return L}}function m(v){var b=v.data,N=l[b.workerId],_=!1;if(b.error)N.userError(b.error,b.file);else if(b.results&&b.results.data){var A={abort:function(){_=!0,x(b.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:C,resume:C};if(k(N.userStep)){for(var q=0;q<b.results.data.length&&(N.userStep({data:b.results.data[q],errors:b.results.errors,meta:b.results.meta},A),!_);q++);delete b.results}else k(N.userChunk)&&(N.userChunk(b.results,A,b.file),delete b.results)}b.finished&&!_&&x(b.workerId,b.results)}function x(v,b){var N=l[v];k(N.userComplete)&&N.userComplete(b),N.terminate(),delete l[v]}function C(){throw new Error("Not implemented.")}function R(v){if(typeof v!="object"||v===null)return v;var b,N=Array.isArray(v)?[]:{};for(b in v)N[b]=R(v[b]);return N}function z(v,b){return function(){v.apply(b,arguments)}}function k(v){return typeof v=="function"}return d.parse=function(v,b){var N=(b=b||{}).dynamicTyping||!1;if(k(N)&&(b.dynamicTypingFunction=N,N={}),b.dynamicTyping=N,b.transform=!!k(b.transform)&&b.transform,!b.worker||!d.WORKERS_SUPPORTED)return N=null,d.NODE_STREAM_INPUT,typeof v=="string"?(v=(_=>_.charCodeAt(0)!==65279?_:_.slice(1))(v),N=new(b.download?p:w)(b)):v.readable===!0&&k(v.read)&&k(v.on)?N=new y(b):(s.File&&v instanceof File||v instanceof Object)&&(N=new h(b)),N.stream(v);(N=(()=>{var _;return!!d.WORKERS_SUPPORTED&&(_=(()=>{var A=s.URL||s.webkitURL||null,q=n.toString();return d.BLOB_URL||(d.BLOB_URL=A.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",q,")();"],{type:"text/javascript"})))})(),(_=new s.Worker(_)).onmessage=m,_.id=c++,l[_.id]=_)})()).userStep=b.step,N.userChunk=b.chunk,N.userComplete=b.complete,N.userError=b.error,b.step=k(b.step),b.chunk=k(b.chunk),b.complete=k(b.complete),b.error=k(b.error),delete b.worker,N.postMessage({input:v,config:b,workerId:N.id})},d.unparse=function(v,b){var N=!1,_=!0,A=",",q=`\r
`,J='"',W=J+J,G=!1,D=null,E=!1,L=((()=>{if(typeof b=="object"){if(typeof b.delimiter!="string"||d.BAD_DELIMITERS.filter(function($){return b.delimiter.indexOf($)!==-1}).length||(A=b.delimiter),typeof b.quotes!="boolean"&&typeof b.quotes!="function"&&!Array.isArray(b.quotes)||(N=b.quotes),typeof b.skipEmptyLines!="boolean"&&typeof b.skipEmptyLines!="string"||(G=b.skipEmptyLines),typeof b.newline=="string"&&(q=b.newline),typeof b.quoteChar=="string"&&(J=b.quoteChar),typeof b.header=="boolean"&&(_=b.header),Array.isArray(b.columns)){if(b.columns.length===0)throw new Error("Option columns is empty");D=b.columns}b.escapeChar!==void 0&&(W=b.escapeChar+J),b.escapeFormulae instanceof RegExp?E=b.escapeFormulae:typeof b.escapeFormulae=="boolean"&&b.escapeFormulae&&(E=/^[=+\-@\t\r].*$/)}})(),new RegExp(S(J),"g"));if(typeof v=="string"&&(v=JSON.parse(v)),Array.isArray(v)){if(!v.length||Array.isArray(v[0]))return M(null,v,G);if(typeof v[0]=="object")return M(D||Object.keys(v[0]),v,G)}else if(typeof v=="object")return typeof v.data=="string"&&(v.data=JSON.parse(v.data)),Array.isArray(v.data)&&(v.fields||(v.fields=v.meta&&v.meta.fields||D),v.fields||(v.fields=Array.isArray(v.data[0])?v.fields:typeof v.data[0]=="object"?Object.keys(v.data[0]):[]),Array.isArray(v.data[0])||typeof v.data[0]=="object"||(v.data=[v.data])),M(v.fields||[],v.data||[],G);throw new Error("Unable to serialize unrecognized input");function M($,O,ne){var B="",te=(typeof $=="string"&&($=JSON.parse($)),typeof O=="string"&&(O=JSON.parse(O)),Array.isArray($)&&0<$.length),ae=!Array.isArray(O[0]);if(te&&_){for(var T=0;T<$.length;T++)0<T&&(B+=A),B+=P($[T],T);0<O.length&&(B+=q)}for(var I=0;I<O.length;I++){var Y=(te?$:O[I]).length,V=!1,Z=te?Object.keys(O[I]).length===0:O[I].length===0;if(ne&&!te&&(V=ne==="greedy"?O[I].join("").trim()==="":O[I].length===1&&O[I][0].length===0),ne==="greedy"&&te){for(var X=[],U=0;U<Y;U++){var ee=ae?$[U]:U;X.push(O[I][ee])}V=X.join("").trim()===""}if(!V){for(var F=0;F<Y;F++){0<F&&!Z&&(B+=A);var Q=te&&ae?$[F]:F;B+=P(O[I][Q],F)}I<O.length-1&&(!ne||0<Y&&!Z)&&(B+=q)}}return B}function P($,O){var ne,B;return $==null?"":$.constructor===Date?JSON.stringify($).slice(1,25):(B=!1,E&&typeof $=="string"&&E.test($)&&($="'"+$,B=!0),ne=$.toString().replace(L,W),(B=B||N===!0||typeof N=="function"&&N($,O)||Array.isArray(N)&&N[O]||((te,ae)=>{for(var T=0;T<ae.length;T++)if(-1<te.indexOf(ae[T]))return!0;return!1})(ne,d.BAD_DELIMITERS)||-1<ne.indexOf(A)||ne.charAt(0)===" "||ne.charAt(ne.length-1)===" ")?J+ne+J:ne)}},d.RECORD_SEP=String.fromCharCode(30),d.UNIT_SEP=String.fromCharCode(31),d.BYTE_ORDER_MARK="\uFEFF",d.BAD_DELIMITERS=["\r",`
`,'"',d.BYTE_ORDER_MARK],d.WORKERS_SUPPORTED=!o&&!!s.Worker,d.NODE_STREAM_INPUT=1,d.LocalChunkSize=10485760,d.RemoteChunkSize=5242880,d.DefaultDelimiter=",",d.Parser=g,d.ParserHandle=j,d.NetworkStreamer=p,d.FileStreamer=h,d.StringStreamer=w,d.ReadableStreamStreamer=y,s.jQuery&&((i=s.jQuery).fn.parse=function(v){var b=v.config||{},N=[];return this.each(function(q){if(!(i(this).prop("tagName").toUpperCase()==="INPUT"&&i(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var J=0;J<this.files.length;J++)N.push({file:this.files[J],inputElem:this,instanceConfig:i.extend({},b)})}),_(),this;function _(){if(N.length===0)k(v.complete)&&v.complete();else{var q,J,W,G,D=N[0];if(k(v.before)){var E=v.before(D.file,D.inputElem);if(typeof E=="object"){if(E.action==="abort")return q="AbortError",J=D.file,W=D.inputElem,G=E.reason,void(k(v.error)&&v.error({name:q},J,W,G));if(E.action==="skip")return void A();typeof E.config=="object"&&(D.instanceConfig=i.extend(D.instanceConfig,E.config))}else if(E==="skip")return void A()}var L=D.instanceConfig.complete;D.instanceConfig.complete=function(M){k(L)&&L(M,D.file,D.inputElem),A()},d.parse(D.file,D.instanceConfig)}}function A(){N.splice(0,1),_()}}),a&&(s.onmessage=function(v){v=v.data,d.WORKER_ID===void 0&&v&&(d.WORKER_ID=v.workerId),typeof v.input=="string"?s.postMessage({workerId:d.WORKER_ID,results:d.parse(v.input,v.config),finished:!0}):(s.File&&v.input instanceof File||v.input instanceof Object)&&(v=d.parse(v.input,v.config))&&s.postMessage({workerId:d.WORKER_ID,results:v,finished:!0})}),(p.prototype=Object.create(f.prototype)).constructor=p,(h.prototype=Object.create(f.prototype)).constructor=h,(w.prototype=Object.create(w.prototype)).constructor=w,(y.prototype=Object.create(f.prototype)).constructor=y,d})})(o0);var Ex=o0.exports;const $r=Td(Ex);function Vl({startRect:e,targetRef:t,count:n=12,onDone:s}){return u.useEffect(()=>{const i=t==null?void 0:t.current;if(!e||!i){s==null||s();return}const o=i.getBoundingClientRect(),a=document.createElement("div");a.style.position="fixed",a.style.inset="0",a.style.pointerEvents="none",a.style.zIndex="9999",document.body.appendChild(a);const l=o.left+o.width/2,c=o.top+o.height/2,d=e.left+e.width/2,f=e.top+e.height/2,p=200;let h=0;function w(y){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const S=d,g=f,m=l,x=c;j.style.transform=`translate(${S}px, ${g}px) scale(1)`,a.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${p}ms cubic-bezier(.2,.8,.2,1), opacity ${p}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${m}px, ${x}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),h+=1,h===n&&(a.remove(),s==null||s())},p+50)}for(let y=0;y<n;y++)setTimeout(()=>w(),y*60);return()=>{try{a.remove()}catch{}}},[e,t,n,s]),null}const at={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},md=e=>Math.floor(e/at.XP_PER_LEVEL)+1,_x=e=>{const t=e%at.XP_PER_LEVEL;return{current:t,required:at.XP_PER_LEVEL,percentage:t/at.XP_PER_LEVEL*100}};function Rx({player:e,size:t="normal",showLevel:n=!0,showName:s=!0}){const i=at.AVATARS.find(a=>a.id===e.avatar)||at.AVATARS[0],o={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:`${o[t]} rounded-full bg-gradient-to-br ${i.bgColor} flex items-center justify-center shadow-lg`,children:r.jsx("span",{children:i.emoji})}),n&&r.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&r.jsxs("div",{children:[r.jsx("div",{className:"font-bold text-sm",children:e.name}),r.jsx("div",{className:"text-xs text-base-muted",children:i.name})]})]})}function Tx({current:e,required:t,level:n,animate:s=!0}){const[i,o]=u.useState(0),a=e/t*100;return u.useEffect(()=>{if(s){const l=setTimeout(()=>{o(a)},100);return()=>clearTimeout(l)}else o(a)},[a,s]),r.jsxs("div",{className:"w-full",children:[r.jsxs("div",{className:"flex justify-between items-center mb-1",children:[r.jsxs("span",{className:"text-xs font-medium",children:["Level ",n]}),r.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),r.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${i}%`},children:r.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}function Px({current:e,max:t=at.MAX_ENERGY,regenAt:n}){const[s,i]=u.useState("");u.useEffect(()=>{if(n&&e<t){const a=()=>{const c=Date.now(),d=Math.max(0,n-c),f=Math.floor(d/6e4),p=Math.floor(d%6e4/1e3);i(`${f}:${p.toString().padStart(2,"0")}`)};a();const l=setInterval(a,1e3);return()=>clearInterval(l)}},[n,e,t]);const o=Array.from({length:t},(a,l)=>l<e);return r.jsxs("div",{className:"flex items-center gap-1",children:[r.jsx("div",{className:"flex gap-0.5",children:o.map((a,l)=>r.jsx("span",{className:`text-lg transition-all duration-300 ${a?"text-red-500 scale-110":"text-gray-600 scale-90"}`,children:a?"❤️":"🖤"},l))}),e<t&&s&&r.jsxs("span",{className:"text-xs text-base-muted ml-2",children:["+1 in ",s]})]})}const a0=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],l0=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],c0=[...a0.filter(e=>e.slug!=="more"),...l0];function zx({onClick:e}){return r.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:e,children:[r.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),r.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),r.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),r.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),r.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]})}function Lx({actions:e}){return r.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,n)=>r.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[r.jsx("div",{className:"text-2xl",children:t.icon}),r.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},n))})}function Mx({categories:e,onCategorySelect:t}){return r.jsxs("div",{className:"mb-6",children:[r.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),r.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(n=>r.jsxs("button",{onClick:()=>t(n),className:`bg-gradient-to-br ${n.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[r.jsx("div",{className:"text-3xl",children:n.icon}),r.jsx("div",{className:"text-xs font-bold text-white text-center",children:n.name}),n.questions>0&&r.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[n.questions," Qs"]})]},n.name))})]})}function Dx({onClick:e,isPulsing:t}){return r.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),r.jsxs("div",{className:"text-left",children:[r.jsx("div",{className:"font-medium",children:"Practice Mode"}),r.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),r.jsx("div",{className:"text-xl",children:"→"})]})}function Ix({dailyQ:e,isFlipped:t,picked:n,onAnswer:s,dailyCompleted:i,DAILY_Q_COINS:o,DAILY_Q_XP:a}){return i?r.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"text-3xl",children:"✅"}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),r.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}):e?r.jsx("div",{className:"flip-card mb-6",children:r.jsxs("div",{className:`flip-card-inner ${t?"flipped":""}`,children:[r.jsx("div",{className:"flip-card-front",children:r.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[r.jsxs("div",{className:"flex justify-between items-center mb-4",children:[r.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),r.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",o," coins +",a," XP"]})]}),r.jsx("p",{className:"text-sm mb-4 text-base-muted",children:e.prompt}),r.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.options.map((l,c)=>{const d=c===e.answerIndex,f=n===c,p=n!==null;return r.jsx("button",{onClick:h=>s(c,h),disabled:n!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${p?d?"border-green-500 bg-green-500/20":f?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${n!==null?"cursor-not-allowed":"cursor-pointer"}`,children:l},c)})})]})}),r.jsx("div",{className:"flip-card-back absolute inset-0",children:r.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[r.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),r.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),r.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",o," coins & ",a," XP!"]}),r.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}):null}function Ax({show:e,onClose:t,player:n,changeAvatar:s,GAME_CONSTANTS:i}){return e?r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:o=>{o.target===o.currentTarget&&t()},children:r.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:o=>o.stopPropagation(),children:[r.jsxs("div",{className:"flex justify-between items-center mb-4",children:[r.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),r.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),r.jsx("div",{className:"grid grid-cols-2 gap-4",children:i.AVATARS.map(o=>{const a=!n.unlockedAvatars.includes(o.id),l=n.avatar===o.id;return r.jsxs("button",{onClick:()=>{a||(s(o.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":a?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:a,children:[r.jsx("div",{className:`text-4xl mb-2 ${a?"grayscale":""}`,children:o.emoji}),r.jsx("div",{className:"text-sm font-medium",children:o.name}),a&&r.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",o.unlockLevel]}),l&&r.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},o.id)})})]})}):null}function Fx({show:e,onClose:t,categories:n,onCategorySelect:s}){return e?r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:r.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:i=>i.stopPropagation(),children:[r.jsxs("div",{className:"flex justify-between items-center mb-4",children:[r.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),r.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),r.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:n.map(i=>r.jsxs("button",{onClick:()=>{t(),s(i)},className:`bg-gradient-to-br ${i.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[r.jsx("div",{className:"text-3xl",children:i.icon}),r.jsx("div",{className:"text-sm font-bold text-white",children:i.name}),r.jsxs("div",{className:"text-xs text-white/80",children:[i.questions," questions"]})]},i.name))})]})}):null}function Ox({show:e,onClose:t,coins:n,onNavigateToPlay:s}){return e?r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:r.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:i=>i.stopPropagation(),children:[r.jsx("div",{className:"absolute inset-0 opacity-10",children:r.jsx("div",{className:"magic-gradient h-full"})}),r.jsxs("div",{className:"relative",children:[r.jsxs("div",{className:"flex items-center justify-between mb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),r.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[n," Coins"]})]})]}),r.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),r.jsxs("div",{className:"mb-6",children:[r.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),r.jsxs("div",{className:"space-y-3",children:[r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),r.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),r.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),r.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),r.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),r.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),r.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),r.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),r.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),r.jsxs("div",{className:"mb-6",children:[r.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[r.jsx("span",{children:"Next reward"}),r.jsxs("span",{children:[100-n%100," coins to go"]})]}),r.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${n%100}%`}})})]}),r.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function $x({show:e,onClose:t,selectedCategory:n,difficulty:s,setDifficulty:i,count:o,setCount:a,timer:l,setTimer:c,onStart:d}){return!e||!n?null:r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:r.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:f=>f.stopPropagation(),children:[r.jsxs("div",{className:"flex justify-between items-center mb-4",children:[r.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),r.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),r.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"text-2xl",children:n.icon}),r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium",children:["Category: ",n.name]}),r.jsxs("div",{className:"text-xs text-base-muted",children:[n.questions," questions available"]})]})]})}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),r.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>r.jsx("button",{onClick:()=>i(f),className:`py-2 rounded-xl border ${s===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),r.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>r.jsx("button",{onClick:()=>a(f),className:`py-2 rounded-xl border ${o===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),r.jsxs("div",{className:"mb-6",children:[r.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),r.jsx("input",{type:"number",value:l,onChange:f=>c(Number(f.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),r.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function Bx({show:e,onClose:t,allCategories:n,category:s,setCategory:i,difficulty:o,setDifficulty:a,count:l,setCount:c,onStart:d}){return e?r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:r.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:f=>f.stopPropagation(),children:[r.jsxs("div",{className:"flex justify-between items-center mb-4",children:[r.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),r.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),r.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:n.map(f=>r.jsxs("button",{onClick:()=>i(f.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===f.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[r.jsx("div",{className:"text-xl",children:f.icon}),r.jsx("div",{className:"text-[10px] text-center",children:f.name})]},f.slug))})]}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),r.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>r.jsx("button",{onClick:()=>a(f),className:`py-2 rounded-xl border ${o===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),r.jsxs("div",{className:"mb-6",children:[r.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),r.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>r.jsx("button",{onClick:()=>c(f),className:`py-2 rounded-xl border ${l===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),r.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}const hd=(e=new Date)=>e.toLocaleDateString("en-CA"),pd=(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},Ux=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function xd(){const e=bt(),{player:t,addXP:n,addCoins:s,levelProgress:i,useEnergy:o,changeAvatar:a}=yn(),[l]=It("/sounds/correct.mp3",{volume:.6}),[c]=It("/sounds/wrong.mp3",{volume:.6}),[d]=It("/sounds/coin.mp3",{volume:.75}),[f]=It("/sounds/levelup.mp3",{volume:.8}),p=u.useRef(t.level),h=u.useRef(null);u.useEffect(()=>{const me=()=>{};return window.addEventListener("focus",me),()=>window.removeEventListener("focus",me)},[]),u.useEffect(()=>{t.level>p.current&&(f==null||f(),p.current=t.level)},[t.level,f]);const[w,y]=u.useState(!1),[j,S]=u.useState(null),[g,m]=u.useState(!1),[x,C]=u.useState("medium"),[R,z]=u.useState(10),[k,v]=u.useState(45),[b,N]=u.useState(!1),[_,A]=u.useState(!1),[q,J]=u.useState(null),[W,G]=u.useState(null),[D,E]=u.useState(!1),[L,M]=u.useState(!1),[P,$]=u.useState(null),O=10,ne=5,[B,te]=u.useState(!1),[ae,T]=u.useState(!1),[I,Y]=u.useState("general-knowledge"),[V,Z]=u.useState("medium"),[X,U]=u.useState(10),[ee,F]=u.useState(()=>pd("dq_daily_log",{})[hd()]===!0);u.useEffect(()=>{const me=sessionStorage.getItem("homeScrollPosition");me&&window.scrollTo(0,parseInt(me));const Se=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",Se),()=>window.removeEventListener("scroll",Se)},[]),u.useEffect(()=>{if(ee)return;(async()=>{var Se;try{const _e=await fetch("/data/quiz_questions_bank.csv").then(Ce=>Ce.text()),{data:Re}=$r.parse(_e,{header:!0,skipEmptyLines:!0});if(!Re.length)throw new Error("empty");const he=Re[Math.floor(Math.random()*Re.length)],we=[he.option1,he.option2,he.option3,he.option4].filter(Boolean);J({category:he.category||"General",prompt:he.question,options:we,answerIndex:["A","B","C","D"].indexOf((Se=he.answer)==null?void 0:Se.toUpperCase())||0})}catch{J({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[ee]);const Q=(me,Se)=>{if(W!==null)return;G(me);const _e=me===q.answerIndex;if(_e){if(l(),Se!=null&&Se.currentTarget&&h.current){const Re=Se.currentTarget.getBoundingClientRect();d(),$({startRect:Re,count:10,amount:ne})}}else c();setTimeout(()=>{if(M(!0),E(!0),_e){const Re=hd();Ux("dq_daily_log",{...pd("dq_daily_log",{}),[Re]:!0}),F(!0);const he=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(he+1))}},600)},K=me=>{if(me.slug==="more"){y(!0);return}S(me),m(!0)},ie=()=>{console.log("Starting quiz with energy:",t.energy),console.log("Category:",j.slug),e(`/quiz/${j.slug}`,{state:{mode:"quiz",difficulty:x,count:R,timer:{type:"per_q",seconds:k},source:"adventure"}}),m(!1)},ke=()=>{console.log("Starting practice, category:",I),e(`/quiz/${I}`,{state:{mode:"practice",difficulty:V,count:X,timer:{type:"off",seconds:0}}}),T(!1)},fe=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>e("/profile/quests")},{icon:"🔥",label:`${t.bestCombo} Best`,color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>e("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>e("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>e("/profile/rewards")}];return r.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[r.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),r.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[r.jsx("style",{jsx:!0,children:`
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
        `}),P&&r.jsx(Vl,{startRect:P.startRect,targetRef:h,count:P.count,onDone:()=>{B||(n(O),s(P.amount),te(!0)),$(null)}}),r.jsxs("div",{className:"mb-8",children:[r.jsxs("div",{className:"flex justify-between items-start mb-4",children:[r.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>A(!0),children:r.jsx(Rx,{player:t,size:"normal",showLevel:!0,showName:!0})}),r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsxs("div",{className:"flex gap-2",children:[r.jsxs("button",{ref:h,onClick:()=>N(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[r.jsx("span",{className:"text-lg",children:"🪙"}),r.jsx("span",{className:"font-bold",children:t.coins})]}),r.jsx("button",{onClick:()=>e("/profile"),className:"w-10 h-10 rounded-full bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"⚙️"})]}),r.jsx(Px,{current:t.energy,regenAt:t.energyRegenAt})]})]}),r.jsx(Tx,{current:i.current,required:i.required,level:t.level,animate:!0})]}),r.jsx(zx,{onClick:()=>e("/play")}),r.jsx(Lx,{actions:fe}),r.jsx(Ix,{dailyQ:q,isFlipped:L,picked:W,onAnswer:Q,dailyCompleted:ee,DAILY_Q_COINS:ne,DAILY_Q_XP:O}),r.jsx(Mx,{categories:a0,onCategorySelect:K}),r.jsx(Dx,{onClick:()=>T(!0),isPulsing:t.energy<10}),r.jsx(Ax,{show:_,onClose:()=>A(!1),player:t,changeAvatar:a,GAME_CONSTANTS:at}),r.jsx($x,{show:g,onClose:()=>m(!1),selectedCategory:j,difficulty:x,setDifficulty:C,count:R,setCount:z,timer:k,setTimer:v,onStart:ie}),r.jsx(Bx,{show:ae,onClose:()=>T(!1),allCategories:c0,category:I,setCategory:Y,difficulty:V,setDifficulty:Z,count:X,setCount:U,onStart:ke}),r.jsx(Fx,{show:w,onClose:()=>y(!1),categories:l0,onCategorySelect:K}),r.jsx(Ox,{show:b,onClose:()=>N(!1),coins:t.coins,onNavigateToPlay:()=>{N(!1),e("/play")}})]})]})}const Jt={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},Zt={get:(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function d0(){const[e,t]=u.useState(()=>Zt.get(Jt.COINS,0)),[n,s]=u.useState(()=>Zt.get(Jt.XP,0)),[i,o]=u.useState(()=>Zt.get(Jt.LEVEL,1)),[a,l]=u.useState(()=>Zt.get(Jt.OWNED_CHARACTERS,[])),[c,d]=u.useState(()=>Zt.get(Jt.SOUND,!0));return u.useEffect(()=>Zt.set(Jt.COINS,e),[e]),u.useEffect(()=>Zt.set(Jt.XP,n),[n]),u.useEffect(()=>Zt.set(Jt.LEVEL,i),[i]),u.useEffect(()=>Zt.set(Jt.OWNED_CHARACTERS,a),[a]),u.useEffect(()=>Zt.set(Jt.SOUND,c),[c]),{coins:e,xp:n,level:i,ownedCharacters:a,soundOn:c,addCoins:y=>t(j=>j+y),addXp:y=>s(j=>j+y),unlockCharacter:y=>{l(j=>[...new Set([...j,y])])},setSoundOn:d,checkLevelUp:()=>{const y=100*i*(i-1);return n>=y?(o(j=>j+1),!0):!1},nextLevelThreshold:100*i*(i-1),xpProgress:n/(100*i*(i-1))}}const qx=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],tn=qx.slice(0,6),Xn=360/tn.length,u0={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},wn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},Zn=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),gd=e=>(e%360+360)%360,Gl=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},Cr=(e,t=.7)=>{try{const n=new Audio(e);n.volume=t,n.play()}catch{}};function Qx({run:e,coins:t,xp:n,level:s,ownedCharacters:i,onSpin:o,onBack:a,spinning:l,angle:c,transition:d,result:f,showCallout:p,glowColor:h,soundOn:w,setSoundOn:y,showSparkle:j,pulseIdx:S,nextProgressIdx:g,pendingProgressIdx:m,coinBurstTick:x,lastAnswerWasCorrect:C}){const R=100*s*(s-1),[z,k]=u.useState(!1),v=u.useRef(0),b=u.useRef(null),N=u.useRef(null),[_,A]=u.useState({dx:110,dy:-260}),[q,J]=u.useState(!1);return u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),u.useEffect(()=>{if(m==null)return;k(!1);const W=setTimeout(()=>k(!0),30);return()=>clearTimeout(W)},[m]),u.useEffect(()=>{var G,D,E,L;if(!x||!C||x===v.current)return;v.current=x;try{const M=(D=(G=N==null?void 0:N.current)==null?void 0:G.getBoundingClientRect)==null?void 0:D.call(G),P=(L=(E=b==null?void 0:b.current)==null?void 0:E.getBoundingClientRect)==null?void 0:L.call(E);if(M&&P){const $=M.left+M.width/2,O=M.top+M.height/2,ne=P.left+P.width/2,B=P.top+P.height/2;A({dx:ne-$,dy:B-O})}}catch{}w&&Cr("/sounds/coin.mp3",.7),J(!0);const W=setTimeout(()=>J(!1),700);return()=>clearTimeout(W)},[x,w,C]),r.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:r.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[r.jsxs("header",{className:"flex items-center justify-between mb-8",children:[r.jsx("button",{onClick:a,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[r.jsxs("div",{className:"text-[11px]",children:["Lvl ",s," • ",n,"/",R]}),r.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:r.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(n/R,1)*100}%`}})})]}),r.jsxs("button",{ref:b,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),r.jsx("button",{onClick:()=>y(!w),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:r.jsx("span",{className:"text-lg",children:w?"🔊":"🔇"})})]}),i.length>0&&r.jsx("div",{className:"flex justify-center mb-6",children:r.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:i.map(W=>{const G=tn.find(E=>Zn(E.name)===W),D=u0[W];return r.jsxs("div",{className:"flex flex-col items-center",children:[r.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:r.jsx("span",{className:"text-sm",children:G==null?void 0:G.icon})}),r.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:D})]},W)})})}),r.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:r.jsxs("div",{className:"w-80 max-w-full",children:[r.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),r.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(W=>{const G=["#FF9800","#FFC107","#cadd75ff"],D=!!e.progress[W];return r.jsxs("div",{className:"relative h-full bg-white/10",children:[r.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:D?W===m?z?"100%":"0%":g===W&&m==null?"0%":"100%":"0%",backgroundColor:G[W],transition:W===m?"width 1200ms ease-out":"none"}}),S===W&&r.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:r.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),j===W&&r.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},W)})},e.qIndex)]})}),r.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:r.jsxs("div",{ref:N,className:"relative w-96 h-96 rounded-full select-none",children:[h&&r.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${h}40, 0 0 40px 12px ${h}60`}}),r.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:d},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[tn.map((W,G)=>{const D=G*Xn,E=D+Xn,L=Xn>180?1:0,M=Math.PI*D/180,P=Math.PI*E/180,$=50+45*Math.cos(M),O=50-45*Math.sin(M),ne=50+45*Math.cos(P),B=50-45*Math.sin(P),te=D+Xn/2,ae=28,T=50+ae*Math.cos(te*Math.PI/180),I=50-ae*Math.sin(te*Math.PI/180);return r.jsxs("g",{children:[r.jsx("path",{d:`M50,50 L${$},${O} A45,45 0 ${L} 0 ${ne},${B} Z`,fill:W.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),r.jsx("text",{x:T,y:I,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:W.icon})]},G)}),r.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),r.jsx("button",{onClick:o,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),r.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:r.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:r.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),p&&f&&r.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:r.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[r.jsx("span",{className:"mr-2",children:f.cat.icon}),f.cat.name]})}),q&&r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(W=>r.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${W*80}ms forwards`,"--coin-dx":`${_.dx}px`,"--coin-dy":`${_.dy}px`},children:r.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},W))]})]})}),r.jsx("div",{className:"text-center",children:r.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}var Ci={linear:function(e,t,n,s){var i=n-t;return i*e/s+t},easeInQuad:function(e,t,n,s){var i=n-t;return i*(e/=s)*e+t},easeOutQuad:function(e,t,n,s){var i=n-t;return-i*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,n,s){var i=n-t;return(e/=s/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,s){var i=n-t;return i*(e/=s)*e*e+t},easeOutCubic:function(e,t,n,s){var i=n-t;return i*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,n,s){var i=n-t;return(e/=s/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,s){var i=n-t;return i*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,n,s){var i=n-t;return-i*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,n,s){var i=n-t;return(e/=s/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,s){var i=n-t;return i*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,n,s){var i=n-t;return i*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,s){var i=n-t;return(e/=s/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,s){var i=n-t;return-i*Math.cos(e/s*(Math.PI/2))+i+t},easeOutSine:function(e,t,n,s){var i=n-t;return i*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,n,s){var i=n-t;return-i/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,n,s){var i=n-t;return e==0?t:i*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,n,s){var i=n-t;return e==s?t+i:i*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,n,s){var i=n-t;return e===0?t:e===s?t+i:(e/=s/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,n,s){var i=n-t;return-i*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,n,s){var i=n-t;return i*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,n,s){var i=n-t;return(e/=s/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,n,s){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=s)===1?t+i:(a||(a=s*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/a))+t)},easeOutElastic:function(e,t,n,s){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=s)===1?t+i:(a||(a=s*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),o*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/a)+i+t)},easeInOutElastic:function(e,t,n,s){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=s/2)===2?t+i:(a||(a=s*(.3*1.5)),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/a))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/a)*.5+i+t)},easeInBack:function(e,t,n,s,i){var o=n-t;return i===void 0&&(i=1.70158),o*(e/=s)*e*((i+1)*e-i)+t},easeOutBack:function(e,t,n,s,i){var o=n-t;return i===void 0&&(i=1.70158),o*((e=e/s-1)*e*((i+1)*e+i)+1)+t},easeInOutBack:function(e,t,n,s,i){var o=n-t;return i===void 0&&(i=1.70158),(e/=s/2)<1?o/2*(e*e*(((i*=1.525)+1)*e-i))+t:o/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t},easeInBounce:function(e,t,n,s){var i=n-t,o;return o=Ci.easeOutBounce(s-e,0,i,s),i-o+t},easeOutBounce:function(e,t,n,s){var i=n-t;return(e/=s)<1/2.75?i*(7.5625*e*e)+t:e<2/2.75?i*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?i*(7.5625*(e-=2.25/2.75)*e+.9375)+t:i*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,n,s){var i=n-t,o;return e<s/2?(o=Ci.easeInBounce(e*2,0,i,s),o*.5+t):(o=Ci.easeOutBounce(e*2-s,0,i,s),o*.5+i*.5+t)}},Yx=Ci;function Hx(e){return e*Math.PI/180}function Ct(e,t){return e+Math.random()*(t-e)}function Wx(e,t){return Math.floor(e+Math.random()*(t-e+1))}var ps;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(ps||(ps={}));var Cn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(Cn||(Cn={}));const Vx=1e3/60;class Gx{constructor(t,n,s,i){this.getOptions=n;const{colors:o,initialVelocityX:a,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=i,this.w=Ct(5,20),this.h=Ct(5,20),this.radius=Ct(5,10),this.vx=typeof a=="number"?Ct(-a,a):Ct(a.min,a.max),this.vy=typeof l=="number"?Ct(-l,0):Ct(l.min,l.max),this.shape=Wx(0,2),this.angle=Hx(Ct(0,360)),this.angularSpin=Ct(-.2,.2),this.color=o[Math.floor(Math.random()*o.length)],this.rotateY=Ct(0,1),this.rotationDirection=Ct(0,1)?Cn.Positive:Cn.Negative}update(t){const{gravity:n,wind:s,friction:i,opacity:o,drawShape:a}=this.getOptions(),l=t/Vx;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=n*l,this.vx+=s*l,this.vx*=i**l,this.vy*=i**l,this.rotateY>=1&&this.rotationDirection===Cn.Positive?this.rotationDirection=Cn.Negative:this.rotateY<=-1&&this.rotationDirection===Cn.Negative&&(this.rotationDirection=Cn.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,a&&typeof a=="function")a.call(this,this.context);else switch(this.shape){case ps.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case ps.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case ps.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class Xx{constructor(t,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=i=>{this.particles.splice(i,1)},this.getParticle=()=>{const i=Ct(this.x,this.w+this.x),o=Ct(this.y,this.h+this.y);return new Gx(this.context,this.getOptions,i,o)},this.animate=i=>{const{canvas:o,context:a,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:d,recycle:f,numberOfPieces:p,debug:h,tweenFunction:w,tweenDuration:y}=this.getOptions();if(!d)return!1;const j=this.particles.length,S=f?j:l;if(S<p){c!==p&&(this.tweenProgress=0,this.tweenFrom=S,this.lastNumberOfPieces=p),this.tweenProgress=Math.min(y,Math.max(0,this.tweenProgress+i));const g=w(this.tweenProgress,this.tweenFrom,p,y),m=Math.round(g-S);for(let x=0;x<m;x++)this.particles.push(this.getParticle());this.particlesGenerated+=m}h&&(a.font="12px sans-serif",a.fillStyle="#333",a.textAlign="right",a.fillText(`Particles: ${j}`,o.width-10,o.height-20));for(let g=this.particles.length-1;g>=0;g--){const m=this.particles[g];m.update(i),(m.y>o.height||m.y<-100||m.x>o.width+100||m.x<-100)&&(f&&S<=p?this.particles[g]=this.getParticle():this.removeParticleAt(g))}return j>0||S<p},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=n}}const Xl={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:Yx.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class Kx{constructor(t,n){this.lastFrameTime=0,this.setOptionsWithDefaults=i=>{const o={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...o,...Xl,...i},Object.assign(this,i.confettiSource)},this.update=(i=0)=>{const{options:{run:o,onConfettiComplete:a,frameRate:l},canvas:c,context:d}=this,f=Math.min(i-this.lastFrameTime,50);if(l&&f<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=i-(l?f%l:0),o&&(d.fillStyle="white",d.clearRect(0,0,c.width,c.height)),this.generator.animate(f)?this.rafId=requestAnimationFrame(this.update):(a&&typeof a=="function"&&this.generator.particlesGenerated>0&&a.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new Xx(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(t){var i,o;const n=(i=this._options)==null?void 0:i.run,s=(o=this._options)==null?void 0:o.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&n===!1&&this.update()}}const Jx=pt.createRef();class Kl extends pt.Component{constructor(t){super(t),this.canvas=pt.createRef(),this.canvas=t.canvasRef||Jx}componentDidMount(){if(this.canvas.current){const t=Wo(this.props)[0];this.confetti=new Kx(this.canvas.current,t)}}componentDidUpdate(){const t=Wo(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,n]=Wo(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return r.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...n,style:s})}}Kl.defaultProps={...Xl};Kl.displayName="ReactConfetti";function Wo(e){const t={},n={},s={},i=[...Object.keys(Xl),"confettiSource","drawShape","onConfettiComplete","frameRate"],o=["canvasRef"];for(const a in e){const l=e[a];i.includes(a)?t[a]=l:o.includes(a)?o[a]=l:s[a]=l}return[t,s,n]}const f0=pt.forwardRef((e,t)=>r.jsx(Kl,{canvasRef:t,...e}));function vd({question:e,category:t,onAnswer:n,run:s,timeLeft:i,usedLifelines:o,onUseLifeline:a,eliminatedOptions:l,audienceData:c,onBack:d,timeUp:f,onTimeUpBackToWheel:p,soundOn:h}){useHideBottomNav();const[w,y]=u.useState(null),[j,S]=u.useState(!1),[g,m]=u.useState(!1),x=u.useRef(null),C=u.useRef(null),[R,z]=u.useState(null);u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),u.useEffect(()=>{if(!j||!x.current)return;const b=x.current.getBoundingClientRect();z({x:b.left,y:b.top-300,w:b.width,h:8})},[j]);const k=b=>{if(j)return;y(b),S(!0);const N=b===e.correctIndex;Gl(N?[50,30,50]:[200]),h&&Cr(N?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{n(N,null)},1500)},v=w===e.correctIndex;return r.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:r.jsxs("div",{ref:C,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[r.jsx("div",{className:"mb-4",children:r.jsx("button",{onClick:()=>m(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),r.jsxs("div",{className:"text-center mb-6",children:[r.jsx("div",{className:`text-4xl font-black mb-2 ${i<=10?"text-red-400 animate-pulse":"text-white"}`,children:i}),r.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:r.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${i<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${i/30*100}%`}})})]}),r.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[r.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),r.jsxs("div",{children:[r.jsx("div",{className:"text-lg font-bold",children:t.name}),r.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),r.jsx("h2",{ref:x,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),r.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((b,N)=>{const _=l.includes(N),A=w===N,q=N===e.correctIndex;let J="bg-white/10 border-white/20",W="opacity-100";return _?W="opacity-30":j&&A?J=q?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&q?J="bg-green-500/30 border-green-400":A&&(J="bg-white/20 border-white/40"),r.jsx("button",{onClick:()=>k(N),disabled:j||_,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${J} ${W} ${!j&&!_?"hover:bg-white/15 active:scale-98":""}`,children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+N)}),r.jsx("span",{className:"font-medium flex-1",children:b}),c&&r.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[N]),"%"]})]})},N)})}),!j&&r.jsxs("div",{className:"flex gap-4 mb-8",children:[r.jsx("button",{onClick:()=>a("fifty"),disabled:o.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),r.jsx("button",{onClick:()=>a("audience"),disabled:o.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&r.jsxs("div",{className:"relative text-center",children:[v&&r.jsx("div",{className:"absolute inset-0 pointer-events-none",children:r.jsx(f0,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:R||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),r.jsx("button",{onClick:()=>n(v,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),f&&r.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:r.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[r.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),r.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),r.jsx("button",{onClick:p,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),g&&r.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:r.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[r.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),r.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),r.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function yd({category:e,onComplete:t,isBonus:n=!1,soundOn:s=!0}){return u.useEffect(()=>{s&&Cr("/sounds/flush.mp3",.8);const i=setTimeout(t,1e3);return Gl([50]),()=>clearTimeout(i)},[t,s]),u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),n?r.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[r.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),r.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:r.jsx("span",{className:"text-6xl",children:"⭐"})})]}):r.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:r.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[r.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[r.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),r.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),r.jsxs("div",{className:"relative z-10 text-center",children:[r.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),r.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:r.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function Zx({onDone:e}){return u.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),r.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:r.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function eg({onSelect:e}){return r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:r.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[r.jsxs("header",{className:"text-center mb-12",children:[r.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),r.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),r.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),r.jsx("div",{className:"grid grid-cols-2 gap-6",children:tn.map(t=>{const n=u0[Zn(t.name)];return r.jsxs("button",{onClick:()=>e(Zn(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[r.jsx("div",{className:"text-4xl mb-3",children:t.icon}),r.jsx("div",{className:"font-black text-lg mb-1",children:n}),r.jsx("div",{className:"text-sm opacity-75",children:t.name})]},Zn(t.name))})})]})})}function tg({onBack:e}){const{coins:t,xp:n,level:s,ownedCharacters:i,soundOn:o,addCoins:a,addXp:l,unlockCharacter:c,setSoundOn:d}=d0(),[f,p]=u.useState("wheel"),[h,w]=u.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[y,j]=u.useState([]),[S,g]=u.useState(null),[m,x]=u.useState(null),[C,R]=u.useState(30),[z,k]=u.useState([]),[v,b]=u.useState(null),[N,_]=u.useState(null),[A,q]=u.useState(!1),[J,W]=u.useState(0),[G,D]=u.useState("none"),[E,L]=u.useState(!1),[M,P]=u.useState(null),[$,O]=u.useState(!1),[ne,B]=u.useState(null),[te,ae]=u.useState(-1),[T,I]=u.useState(0),[Y,V]=u.useState(null),[Z,X]=u.useState(null),[U,ee]=u.useState(!1),[F,Q]=u.useState(null),[K,ie]=u.useState(-1),[ke,fe]=u.useState([!1,!1,!1]),[me,Se]=u.useState(!1),[_e,Re]=u.useState(!1),he=u.useRef(null),we=u.useRef(null),Ce=u.useRef(null),Te=u.useMemo(()=>{var oe;return((oe=window.matchMedia)==null?void 0:oe.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);u.useEffect(()=>(Xe(),ht(),()=>it()),[]),u.useEffect(()=>(f==="question"&&C>0&&!_e?he.current=setTimeout(()=>{R(oe=>{const le=oe-1;return le===10&&o&&Cr("/sounds/tick.mp3",.8),le})},1e3):f==="question"&&C===0&&q(!0),()=>{he.current&&clearTimeout(he.current)}),[f,C,o,_e]),u.useEffect(()=>{if(f!=="wheel"||Y==null)return;ae(Y),o&&Cr("/sounds/progress.mp3",.6),ie(Y);const oe=setTimeout(()=>ie(-1),900),le=setTimeout(()=>ae(-1),900),pe=setTimeout(()=>{F&&(F==="streakFlash"?p("streakFlash"):F==="characterPicker"?p("characterPicker"):(e(),Pe()),Q(null)),V(null)},1800);return()=>{clearTimeout(oe),clearTimeout(le),clearTimeout(pe)}},[f,Y,F,o,e]),u.useEffect(()=>{f!=="wheel"||!me||(I(oe=>oe+1),Se(!1))},[f,me]),u.useEffect(()=>{if(f!=="wheel"||Z==null)return;const le=setTimeout(()=>{V(Z),X(null)},U?1800:0);return()=>clearTimeout(le)},[f,Z,U]);const Xe=async()=>{try{const le=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:pe}=$r.parse(le,{header:!0,skipEmptyLines:!0,transformHeader:xe=>xe.trim().toLowerCase()}),je=pe.map((xe,Le)=>{var ve;const tt=[xe.option1,xe.option2,xe.option3,xe.option4].map(Ve=>(Ve||"").trim()).filter(Boolean);if(tt.length<4)return null;let ce={a:0,b:1,c:2,d:3}[(ve=xe.answer)==null?void 0:ve.toLowerCase()];return ce===void 0&&(ce=tt.findIndex(Ve=>Ve.toLowerCase()===(xe.answer||"").toLowerCase())),ce===-1&&(ce=0),{id:xe.id||`q_${Le}`,prompt:(xe.question||"").trim(),options:tt,correctIndex:ce,category:(xe.category||xe.subject||"general knowledge").trim(),difficulty:(xe.difficulty||"medium").toLowerCase(),explanation:(xe.explanation||"").trim()}}).filter(Boolean);j(je)}catch(oe){console.error("Failed to load questions:",oe),j([])}},ht=()=>{const oe=new Audio("/sounds/spin.mp3");oe.loop=!0,oe.volume=.6,we.current=oe},it=()=>{if(he.current&&clearTimeout(he.current),Ce.current&&(clearTimeout(Ce.current),Ce.current=null),we.current){try{we.current.pause()}catch{}we.current=null}},Pe=()=>{w({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),fe([!1,!1,!1]),g(null),x(null),_(null),k([]),b(null),q(!1),I(0)},De=()=>{if(o&&we.current){try{we.current.currentTime=0,we.current.play()}catch{}Ce.current&&clearTimeout(Ce.current),Ce.current=setTimeout(()=>{Ke()},2e3)}},Ke=()=>{if(Ce.current&&(clearTimeout(Ce.current),Ce.current=null),we.current)try{we.current.pause(),we.current.currentTime=0}catch{}},Br=()=>{if(E)return;P(null),O(!1),B(null),L(!0),De();const oe=Math.floor(Math.random()*tn.length),le=tn[oe],pe=gd(J),je=oe*Xn+Xn/2,xe=(Math.random()-.5)*(Xn*.3),Le=360-je+xe;let tt=gd(Le-pe);const de=wn.FULL_TURNS*360+tt,ce=J+de+wn.OVERSHOOT;D(`transform ${Te?1e3:wn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),W(ce),Gl([20,50,20]),setTimeout(()=>{D(`transform ${Te?200:wn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),W(ve=>ve-wn.OVERSHOOT)},Te?1e3:wn.DURATION),setTimeout(()=>{Ke(),L(!1),P({cat:le,index:oe}),x(le),B(le.color),O(!0),setTimeout(()=>{O(!1),p("interstitial")},1500),setTimeout(()=>B(null),1e3)},(Te?1e3:wn.DURATION)+(Te?200:wn.SETTLE_DURATION)+100)},re=()=>{const oe=y.filter(pe=>{const je=pe.category.toLowerCase(),xe=m.name.toLowerCase();return je.includes(xe)||xe.includes(je)});let le;oe.length>0?le=oe[Math.floor(Math.random()*oe.length)]:le=y[Math.floor(Math.random()*y.length)],le?(g(le),R(30),k([]),b(null),q(!1),Re(!1),p("question")):p("wheel")},ue=(oe,le,pe=!1)=>{if(!pe){Re(!0);return}const je=h.qIndex,xe=[...h.progress];xe[je]=!0;const Le=[...ke];if(Le[je]=!!oe,fe(Le),w(tt=>({...tt,progress:xe,qIndex:tt.qIndex+1})),oe&&(a(5),l(1),Se(!0)),X(je),ee(!!oe),je===2){const tt=Le.every(Boolean);Q(tt?"streakFlash":"modes")}else Q(null);p("wheel")},ze=oe=>{if(!(h.lifelines[oe]||!S)){if(w(le=>({...le,lifelines:{...le.lifelines,[oe]:!0}})),oe==="fifty"){const pe=S.options.map((je,xe)=>xe).filter(je=>je!==S.correctIndex).slice(0,2);k(pe)}else if(oe==="audience"){const le=40+Math.random()*25;let pe=100-le;const je=[0,0,0,0];je[S.correctIndex]=Math.round(le);const xe=[0,1,2,3].filter(Le=>Le!==S.correctIndex);xe.forEach((Le,tt)=>{if(tt===xe.length-1)je[Le]=pe;else{const de=Math.floor(Math.random()*pe);je[Le]=de,pe-=de}}),b(je)}}},be=oe=>{_(oe),p("bonusInterstitial")},We=oe=>{oe&&N&&(c(N),o&&Cr("/sounds/coin.mp3",1)),setTimeout(()=>{e(),Pe()},3e3)},ge=()=>{p("wheel")};switch(f){case"wheel":return r.jsx(Qx,{run:h,coins:t,xp:n,level:s,ownedCharacters:i,onSpin:Br,onBack:e,spinning:E,angle:J,transition:G,result:M,showCallout:$,glowColor:ne,soundOn:o,setSoundOn:d,showSparkle:te,pulseIdx:K,coinBurstTick:T,pendingProgressIdx:Y,lastAnswerWasCorrect:U,nextProgressIdx:Z});case"interstitial":return r.jsx(yd,{category:m,onComplete:re,soundOn:o});case"streakFlash":return r.jsx(Zx,{onDone:()=>p("characterPicker")});case"question":return r.jsx(vd,{question:S,category:m,onAnswer:ue,run:h,timeLeft:C,usedLifelines:h.lifelines,onUseLifeline:ze,eliminatedOptions:z,audienceData:v,onBack:ge,timeUp:A,onTimeUpBackToWheel:()=>{q(!1),p("wheel")},soundOn:o});case"characterPicker":return r.jsx(eg,{onSelect:be});case"bonusInterstitial":return r.jsx(yd,{category:tn.find(oe=>Zn(oe.name)===N),onComplete:()=>p("bonusQuestion"),isBonus:!0,soundOn:o});case"bonusQuestion":if(!S){const oe=tn.find(le=>Zn(le.name)===N);if(oe&&y.length>0){const le=y.filter(je=>{const xe=je.category.toLowerCase(),Le=oe.name.toLowerCase();return xe.includes(Le)||Le.includes(xe)}),pe=le.length>0?le[Math.floor(Math.random()*le.length)]:y[Math.floor(Math.random()*y.length)];g(pe),R(30)}return r.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:r.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return r.jsx(vd,{question:S,category:tn.find(oe=>Zn(oe.name)===N)||tn[0],onAnswer:We,run:{...h,lifelines:{fifty:!0,audience:!0}},timeLeft:C,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:e,soundOn:o});default:return r.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),r.jsx("button",{onClick:()=>p("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function ng({lives:e,maxLives:t=3}){const[n,s]=u.useState(null),[i,o]=u.useState(e);return u.useEffect(()=>{e<i?(s(i-1),setTimeout(()=>s(null),600)):e>i&&(s(e-1),setTimeout(()=>s(null),1e3)),o(e)},[e,i]),r.jsxs("div",{className:"relative",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:"flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[r.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((a,l)=>r.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:r.jsxs("div",{className:"relative",children:[l<e?r.jsxs("div",{className:`relative ${l===n&&e>i?"heart-gained":""}`,children:[r.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&r.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):r.jsx("div",{className:`relative ${l===n&&e<i?"heart-lost":""}`,children:r.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===n&&e>i&&r.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[r.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),r.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),r.jsx("div",{className:"pr-1",children:r.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&r.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:r.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:r.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function rg({question:e,onAnswer:t,lives:n,questionCount:s,correctStreak:i,totalScore:o,currentDifficulty:a,timeLeft:l,showFeedback:c,lastAnswerCorrect:d,checkpoint:f,onBack:p,soundOn:h,setSoundOn:w}){const[y,j]=u.useState(!1),[S,g]=u.useState(null),[m,x]=u.useState(!1),[C,R]=u.useState(!1),z={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},k=z[a];u.useEffect(()=>{i>0&&i%5===0&&c&&d&&(x(!0),setTimeout(()=>x(!1),3e3))},[i,c,d]),u.useEffect(()=>{c&&d&&(R(!0),setTimeout(()=>R(!1),1e3))},[c,d]);const v=b=>{c||(g(b),t(b))};return u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),r.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[r.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:k.emoji}),r.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),r.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),r.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),r.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+1rem)]",children:[r.jsxs("div",{className:"flex justify-between items-center mb-4 slide-in",children:[r.jsx("button",{onClick:()=>j(!0),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:r.jsx("span",{className:"text-xl",children:"◀️"})}),r.jsx(ng,{lives:n}),r.jsx("button",{onClick:()=>w(!h),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:r.jsx("span",{className:"text-xl",children:h?"🔊":"🔇"})})]}),r.jsx("div",{className:`glass-card rounded-3xl p-4 shadow-xl mb-4 slide-in bg-gradient-to-r ${k.accentGradient}`,style:{animationDelay:"0.1s"},children:r.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${k.color} bg-clip-text text-transparent ${C?"score-pulse":""}`,children:o}),r.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),c&&d&&r.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:r.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",z[a]?a==="EASY"?10:a==="MEDIUM"?20:a==="HARD"?30:a==="EXPERT"?50:100:10]})})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-3xl font-black text-white",children:s}),r.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),r.jsxs("div",{className:"text-center relative",children:[r.jsx("div",{className:`text-3xl font-black text-orange-400 ${i>0?"streak-flame":""}`,children:i}),r.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),r.jsxs("div",{className:"flex justify-between items-center mb-6 slide-in",style:{animationDelay:"0.2s"},children:[r.jsx("div",{className:`px-4 py-2 rounded-full bg-gradient-to-r ${k.color} text-white shadow-lg`,children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:k.emoji}),r.jsxs("div",{children:[r.jsx("div",{className:"font-bold text-sm",children:k.label}),r.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),r.jsx("div",{className:"relative",children:r.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[r.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[r.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),r.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),r.jsx("div",{className:"relative z-10",children:r.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),r.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[r.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[r.jsx("div",{className:"text-center mb-2",children:r.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),r.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),r.jsx("div",{className:"space-y-3",children:e.options.map((b,N)=>{const _=["A","B","C","D"],A=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let q="glass-card border border-white/10",J="";return c&&(N===e.correctIndex?(q="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",J="correct-bounce"):S===N&&!d&&(q="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",J="wrong-shake")),r.jsx("button",{onClick:()=>v(N),disabled:c,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${q} ${J} 
                  ${c?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+N*.05}s`},children:r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${A[N]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:_[N]}),r.jsx("span",{className:"flex-1 text-left font-medium text-white",children:b}),c&&N===e.correctIndex&&r.jsx("span",{className:"text-2xl",children:"✅"}),c&&S===N&&!d&&r.jsx("span",{className:"text-2xl",children:"❌"})]})},N)})}),c&&r.jsx("div",{className:"mt-6 text-center slide-in",children:r.jsx("p",{className:"text-sm font-medium text-white/70",children:d?k.motivationalText:"No worries! Keep trying! 💪"})}),f>0&&r.jsx("div",{className:"mt-6 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:r.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-xl",children:"🏁"}),r.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",f]})]})})})]}),m&&r.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:r.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),r.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),r.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})}),y&&r.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:r.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[r.jsxs("div",{className:"text-center mb-6",children:[r.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),r.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),r.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>j(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),r.jsx("button",{onClick:p,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}function sg({score:e,questionsAnswered:t,highScore:n,checkpoint:s,onRestart:i,onContinue:o,onBack:a}){const l=e>n,[c,d]=u.useState(!1),[f,p]=u.useState(0),[h,w]=u.useState(!1),y=u.useRef(null);u.useEffect(()=>{const x=e/60;let C=0;const R=setInterval(()=>{C+=x,C>=e?(p(e),clearInterval(R),l&&(d(!0),setTimeout(()=>d(!1),5e3))):p(Math.floor(C))},2e3/60);return setTimeout(()=>w(!0),2200),()=>clearInterval(R)},[e,l]),u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const S=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return r.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),r.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),r.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),c&&r.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((g,m)=>r.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:r.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},m))}),r.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[r.jsxs("div",{className:"mb-8 slide-up",children:[r.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&r.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:r.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"text-3xl",children:"🏆"}),r.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),r.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),h&&r.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:r.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${S.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[r.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:S.emoji}),r.jsx("h2",{className:"text-3xl font-black mb-2",children:S.title}),r.jsx("p",{className:"text-white/80 mb-4",children:S.subtitle}),r.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((g,m)=>r.jsx("span",{className:`text-2xl ${m<S.stars?"star-pop":""}`,style:{animationDelay:`${2.5+m*.1}s`},children:m<S.stars?"⭐":"☆"},m))})]})}),r.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[r.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[r.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),r.jsx("div",{ref:y,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:f}),r.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),r.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:r.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),r.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[r.jsx("div",{className:"text-4xl mb-2",children:"📊"}),r.jsx("div",{className:"text-4xl font-black text-white",children:t}),r.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),r.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:r.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(n,e)]})})]})]}),r.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:r.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),r.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&o&&r.jsx("button",{onClick:o,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:r.jsxs("div",{className:"flex items-center justify-center gap-3",children:[r.jsx("span",{className:"text-2xl",children:"🏁"}),r.jsxs("span",{children:["Continue from Question ",s]})]})}),r.jsx("button",{onClick:i,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:r.jsxs("div",{className:"flex items-center justify-center gap-3",children:[r.jsx("span",{className:"text-2xl",children:"🎮"}),r.jsx("span",{children:"Play Again"})]})}),r.jsx("button",{onClick:a,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:r.jsxs("div",{className:"flex items-center justify-center gap-3",children:[r.jsx("span",{className:"text-2xl",children:"🏠"}),r.jsx("span",{children:"Back to Games"})]})})]})]})]})}const bd={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function ig({onBack:e}){const{coins:t,xp:n,level:s,soundOn:i,addCoins:o,addXp:a,setSoundOn:l}=d0(),[c,d]=u.useState("playing"),[f,p]=u.useState(3),[h,w]=u.useState(0),[y,j]=u.useState(0),[S,g]=u.useState(0),[m,x]=u.useState("EASY"),[C,R]=u.useState([]),[z,k]=u.useState(null),[v,b]=u.useState(30),[N,_]=u.useState(!1),[A,q]=u.useState(!1),[J,W]=u.useState(0),G=u.useRef(null),D=u.useRef(new Set);u.useEffect(()=>(L(),te(),()=>{G.current&&clearTimeout(G.current)}),[]),u.useEffect(()=>(c==="playing"&&z&&v>0&&!N&&(G.current=setTimeout(()=>{b(X=>X<=1?(ne(),0):(X===6&&i&&V("/sounds/tick.mp3",.8),X-1))},1e3)),()=>{G.current&&clearTimeout(G.current)}),[c,z,v,N,i]),u.useEffect(()=>{const X=E(h);X!==m&&(x(X),i&&V("/sounds/levelup.mp3",.6))},[h,m,i]),u.useEffect(()=>{h>0&&h%10===0&&(B(),W(h),i&&V("/sounds/checkpoint.mp3",.7))},[h,i]);const E=X=>X>=100?"LEGENDARY":X>=50?"EXPERT":X>=25?"HARD":X>=10?"MEDIUM":"EASY",L=async()=>{try{const U=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:ee}=$r.parse(U,{header:!0,skipEmptyLines:!0,transformHeader:Q=>Q.trim().toLowerCase()}),F=ee.map((Q,K)=>{var me;const ie=[Q.option1,Q.option2,Q.option3,Q.option4].map(Se=>(Se||"").trim()).filter(Boolean);if(ie.length<4)return null;let fe={a:0,b:1,c:2,d:3}[(me=Q.answer)==null?void 0:me.toLowerCase()];return fe===void 0&&(fe=ie.findIndex(Se=>Se.toLowerCase()===(Q.answer||"").toLowerCase())),fe===-1&&(fe=0),{id:Q.id||`q_${K}`,prompt:(Q.question||"").trim(),options:ie,correctIndex:fe,category:(Q.category||Q.subject||"general").trim(),difficulty:(Q.difficulty||"medium").toLowerCase()}}).filter(Boolean);R(F),M(F)}catch(X){console.error("Failed to load questions:",X)}},M=(X=C)=>{const U=X.filter(K=>!D.current.has(K.id));U.length===0&&(D.current.clear(),U.push(...X));const ee=m.toLowerCase();let F=U.filter(K=>K.difficulty===ee||K.difficulty==="medium");F.length===0&&(F=U);const Q=F[Math.floor(Math.random()*F.length)];Q&&(D.current.add(Q.id),k(Q),b(bd[m].timer),_(!1))},P=X=>{if(N)return;const U=X===z.correctIndex;q(U),_(!0),U?$():O(),setTimeout(()=>{(f>0||U)&&(w(ee=>ee+1),M())},1500)},$=()=>{const X=bd[m].points;g(U=>U+X),j(U=>{const ee=U+1;return ee%5===0&&f<3&&(p(F=>Math.min(F+1,3)),i&&V("/sounds/lifeup.mp3",.8)),ee}),o(Math.floor(X/10)),a(1),i&&V("/sounds/correct.mp3",.7)},O=()=>{j(0),p(X=>{const U=X-1;return U<=0&&(d("gameOver"),T()),U}),i&&V("/sounds/wrong.mp3",.7),Z([200])},ne=()=>{O()},B=()=>{const X={questionCount:h,totalScore:S,lives:f,correctStreak:y,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(X))},te=()=>{const X=localStorage.getItem("survival_checkpoint");if(X)try{const U=JSON.parse(X);Date.now()-U.timestamp<864e5?(w(U.questionCount),g(U.totalScore),p(U.lives),j(U.correctStreak),W(U.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(U){console.error("Failed to load checkpoint:",U)}},ae=()=>{localStorage.removeItem("survival_checkpoint"),W(0)},T=()=>{const X=parseInt(localStorage.getItem("survival_highscore")||"0");S>X&&(localStorage.setItem("survival_highscore",S.toString()),localStorage.setItem("survival_highquestions",h.toString()))},I=()=>{d("playing"),p(3),w(0),j(0),g(0),x("EASY"),D.current.clear(),ae(),M()},Y=()=>{d("playing"),M()},V=(X,U=.5)=>{try{const ee=new Audio(X);ee.volume=U,ee.play()}catch{}},Z=X=>{navigator.vibrate&&navigator.vibrate(X)};return u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),c==="gameOver"?r.jsx(sg,{score:S,questionsAnswered:h,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:J,onRestart:I,onContinue:J>0?Y:null,onBack:e}):z?r.jsx(rg,{question:z,onAnswer:P,lives:f,questionCount:h,correctStreak:y,totalScore:S,currentDifficulty:m,timeLeft:v,showFeedback:N,lastAnswerCorrect:A,checkpoint:J,onBack:e,soundOn:i,setSoundOn:l}):r.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:r.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const og=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],m0=og.slice(0,6),Vo=360/m0.length;function ag({onModeSelect:e,onNavigateHome:t}){return r.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:r.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[r.jsx("header",{className:"flex items-center mb-8",children:r.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),r.jsxs("div",{className:"space-y-8",children:[r.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[r.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:r.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[m0.map((n,s)=>{const i=s*Vo,o=i+Vo,a=Vo>180?1:0,l=Math.PI*i/180,c=Math.PI*o/180,d=50+40*Math.cos(l),f=50-40*Math.sin(l),p=50+40*Math.cos(c),h=50-40*Math.sin(c);return r.jsx("path",{d:`M50,50 L${d},${f} A40,40 0 ${a} 0 ${p},${h} Z`,fill:n.color,stroke:"white",strokeWidth:"0.5"},s)}),r.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),r.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),r.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),r.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),r.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),r.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),r.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98]",children:[r.jsx("div",{className:"text-2xl mb-2",children:"💀"}),r.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),r.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-red-400 to-pink-500 p-4 text-left opacity-60",children:[r.jsx("div",{className:"text-2xl mb-2",children:"💰"}),r.jsx("h4",{className:"text-lg font-black text-white",children:"TREASURE MINE"})]}),r.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[r.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),r.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),r.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[r.jsx("div",{className:"text-2xl mb-2",children:"📱"}),r.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function lg(){const[e,t]=u.useState(null),n=bt(),s=a=>{a==="classic"?t("classic"):a==="survival"&&t("survival")},i=()=>{n("/")},o=()=>{t(null)};return e==="classic"?r.jsx(tg,{onBack:o}):e==="survival"?r.jsx(ig,{onBack:o}):r.jsx(ag,{onModeSelect:s,onNavigateHome:i})}const cg=({session:e,mode:t,category:n,difficulty:s,timerConfig:i,onComplete:o,onQuit:a})=>{const[l,c]=u.useState(0),[d,f]=u.useState([]),[p,h]=u.useState([]),[w,y]=u.useState([]),[j,S]=u.useState(!1),[g,m]=u.useState(null),[x,C]=u.useState(Date.now()),[R,z]=u.useState(!1),[k,v]=u.useState(!1),[b,N]=u.useState({}),[_,A]=u.useState({}),[q,J]=u.useState([]);u.useState(!0);const[W,G]=u.useState(null),[D,E]=u.useState([]),[L,M]=u.useState(0),[P,$]=u.useState(0),[O,ne]=u.useState(!1),[B,te]=u.useState(!1),[ae,T]=u.useState(""),[I,Y]=u.useState(!1),[V,Z]=u.useState(!1),[X,U]=u.useState(!0),[ee,F]=u.useState(!1),[Q,K]=u.useState(0),[ie,ke]=u.useState(0),[fe,me]=u.useState(0),[Se,_e]=u.useState(null),[Re,he]=u.useState(0),we=u.useRef(null),Ce=u.useRef(null),Te=t==="practice",Xe=d[l],ht=de=>{try{const ce=new Audio(de);ce.volume=.6,ce.play()}catch{console.log("Sound not available:",de)}},it=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],Pe=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:it,De=Pe[l]||Pe[0]||it[0],Ke=Pe.length;u.useEffect(()=>{Pe.length>0&&(f(new Array(Pe.length).fill(null)),h(new Array(Pe.length).fill(!1)),J(new Array(Pe.length).fill(!1)),y(new Array(Pe.length).fill((i==null?void 0:i.seconds)||45)))},[Pe.length,i==null?void 0:i.seconds]);const Br=()=>{if(R){T("Once per quiz"),setTimeout(()=>T(""),1e3);return}if(Xe!==null){T("Already answered"),setTimeout(()=>T(""),1e3);return}if(!De)return;const ce=[0,1,2,3].filter(ve=>ve!==De.answerIndex).sort(()=>Math.random()-.5).slice(0,2);N({...b,[l]:ce}),z(!0)},re=()=>{if(k){T("Once per quiz"),setTimeout(()=>T(""),1e3);return}if(Xe!==null){T("Already answered"),setTimeout(()=>T(""),1e3);return}if(!De)return;const de=De.answerIndex,ce=[0,0,0,0],ve=40+Math.floor(Math.random()*31);ce[de]=ve;let Ve=100-ve;const Me=[0,1,2,3].filter(Ye=>Ye!==de);for(let Ye=0;Ye<Me.length-1;Ye++){const Be=Math.min(Ve-(Me.length-1-Ye),Ve/2),Bt=Math.floor(Math.random()*(Be+1));ce[Me[Ye]]=Bt,Ve-=Bt}ce[Me[Me.length-1]]=Ve,A({..._,[l]:ce}),v(!0)},ue=u.useCallback((de,ce)=>{if(!De||Te&&q[l]||b[l]&&b[l].includes(de))return;const ve=[...d];ve[l]=d[l]===de?null:de,f(ve),C(Date.now()),ve[l]!==null&&(U(!1),clearInterval(Ce.current));const Ve=ve[l]===De.answerIndex;if(Ve){const Me=fe+1;if(me(Me),M(Ye=>Ye+1),$(0),Te){K(Bt=>Bt+1);const Ye=10;ke(Bt=>Bt+Ye);let Be=null;if(l===0&&D.length===0)Be={emoji:"🎯",message:"Perfect start! You're a natural!"};else if(L===2)Be={emoji:"🔥",message:"2 in a row! Keep it up!"};else if(L===3)Be={emoji:"⚡",message:"3 streak! You're on fire!"};else if(L===5)Be={emoji:"🚀",message:"5 streak! Unstoppable!"};else if(L===10)Be={emoji:"👑",message:"10 streak! Legendary!"};else if(D[D.length-1]===!1)Be={emoji:"💪",message:"Great recovery! Back on track!"};else if(l===Math.floor(Ke*.25)-1)Be={emoji:"🎬",message:"25% done! Looking good!"};else if(l===Math.floor(Ke*.5)-1)Be={emoji:"⭐",message:"Halfway there! Keep going!"};else if(l===Math.floor(Ke*.75)-1)Be={emoji:"🏁",message:"Almost done! Final push!"};else{const Bt=[{emoji:"✨",message:"Excellent!"},{emoji:"🎉",message:"Well done!"},{emoji:"💯",message:"Perfect!"},{emoji:"🌟",message:"Brilliant!"}];Be=Bt[Math.floor(Math.random()*Bt.length)]}setTimeout(()=>{G(Be),setTimeout(()=>G(null),3e3)},2e3),ht("/sounds/correct.mp3"),setTimeout(()=>ht("/sounds/coin.mp3"),500),Z(!0),setTimeout(()=>Z(!1),2e3),_e({type:"correct",stars:1,coins:10}),setTimeout(()=>_e(null),2e3)}}else if(ve[l]!==null&&(me(0),M(0),$(Me=>Me+1),Te)){let Me=null;if(l===0&&D.length===0)Me={emoji:"💡",message:"No worries! Let's learn together!"};else if(L>=3)Me={emoji:"💫",message:"Good run! Keep trying!"};else if(P===2)Me={emoji:"🤗",message:"It's okay! Take your time!"};else if(P>=3)Me={emoji:"💪",message:"Don't give up! You've got this!"};else{const Ye=[{emoji:"🤔",message:"Almost there!"},{emoji:"💭",message:"Good try!"},{emoji:"🎯",message:"Next one!"}];Me=Ye[Math.floor(Math.random()*Ye.length)]}setTimeout(()=>{G(Me),setTimeout(()=>G(null),3e3)},1e3),ht("/sounds/wrong.mp3")}if(E(Me=>[...Me.slice(-2),Ve]),ve[l]!==null&&p[l]){const Me=[...p];Me[l]=!1,h(Me)}Te&&ve[l]!==null&&(Y(!0),J(Me=>{const Ye=[...Me];return Ye[l]=!0,Ye})),!Te&&ve[l]!==null&&(clearTimeout(we.current),we.current=setTimeout(()=>{l<Ke-1?be():(ne(!0),S(!0))},5e3))},[De,Te,q,l,d,p,Ke,fe,b]),ze=()=>{C(Date.now()),l>0&&(clearInterval(Ce.current),U(!1),c(de=>de-1),Y(!1),Te&&d[l-1]!==null&&setTimeout(()=>Y(!0),100))},be=()=>{if(C(Date.now()),clearInterval(Ce.current),Xe===null){const de=[...p];de[l]=!0,h(de),me(0)}U(!1),Y(!1),l<Ke-1?(c(de=>de+1),Te&&d[l+1]!==null?setTimeout(()=>Y(!0),100):setTimeout(()=>U(!0),100)):ne(!0)},We=()=>{C(Date.now());const de=[...p];de[l]=!0,h(de),me(0),be()},ge=()=>{const de=Pe.reduce((ce,ve,Ve)=>ce+(d[Ve]===ve.answerIndex?1:0),0);if(Te)o&&o({questions:Pe,answers:d,skipped:p,correct:de,total:Ke,mode:t,category:n,difficulty:s,earnedStars:Q,earnedCoins:ie,finalStreak:fe});else{const ce=de*10;he(ce),F(!0),setTimeout(()=>{ht("/sounds/coin.mp3"),Z(!0),setTimeout(()=>Z(!1),3e3)},1e3)}},oe=()=>{o&&o({questions:Pe,answers:d,skipped:p,correct:Pe.reduce((de,ce,ve)=>de+(d[ve]===ce.answerIndex?1:0),0),total:Ke,mode:t,category:n,difficulty:s,earnedStars:0,earnedCoins:Re,finalStreak:fe})};u.useEffect(()=>{if(!(j||g!==null||O||!X||d[l]!==null))return Ce.current=setInterval(()=>{y(de=>{const ce=[...de],ve=ce[l];return ve<=1?(clearInterval(Ce.current),l===Ke-1?(Date.now()-x>=5e3&&ne(!0),ce):(m(l),ce)):(ce[l]=ve-1,ce)})},1e3),()=>clearInterval(Ce.current)},[j,g,l,O,Ke,X,d,x]),u.useEffect(()=>{d[l]===null&&!O&&!g?U(!0):U(!1)},[l,d,O,g]);const le=de=>{const ce=Math.floor(de/60),ve=de%60;return`${ce}:${ve.toString().padStart(2,"0")}`},pe=(l+1)/Pe.length*100,je=d.filter(de=>de!==null).length,xe=p.filter(Boolean).length,Le=w[l]||0,tt=Pe.reduce((de,ce,ve)=>de+(d[ve]===ce.answerIndex?1:0),0);return r.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[Se&&r.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:r.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",Se.coins," Coins!"]})}),Te&&W&&r.jsx("div",{className:"fixed top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-fadeInOut max-w-2xl w-full px-4",children:r.jsx("div",{className:"bg-gradient-to-br from-gray-800/95 to-gray-900/95 text-white p-6 rounded-3xl shadow-2xl backdrop-blur-sm border border-gray-700/50",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-4xl mb-3",children:W.emoji}),r.jsx("div",{className:"text-xl font-bold leading-relaxed tracking-wide",children:W.message})]})})}),V&&r.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((de,ce)=>r.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${ce*150}ms`,animationDuration:"2s"},children:"🪙"},ce))}),r.jsxs("div",{className:"sticky top-0 flex items-center justify-between px-4 py-2 bg-gray-900 flex-shrink-0 z-40 border-b border-gray-800 shadow-lg",children:[r.jsxs("button",{onClick:()=>te(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),r.jsx("span",{className:"font-medium",children:"Back"})]}),r.jsx("div",{className:"flex-1"}),r.jsxs("div",{className:"flex items-center gap-2",children:[Te&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[r.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),r.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:ie})]}),r.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[r.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),r.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:fe})]})]}),r.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${Le<=10?"bg-red-600/20 text-red-400 animate-pulse":Le<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:le(Le)})]})]}),r.jsxs("div",{className:"px-4 pb-1 flex-shrink-0 bg-gray-900 relative z-30",children:[r.jsxs("div",{className:"flex justify-between items-center mb-1",children:[r.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",l+1," of ",Ke]}),r.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(pe),"% Complete"]})]}),r.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${pe}%`}})}),r.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:Ke}).map((de,ce)=>r.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${ce===l?"bg-white scale-125":d[ce]!==null?"bg-green-500":p[ce]?"bg-yellow-500":"bg-gray-600"}`},ce))}),r.jsx("div",{className:"text-center mt-4",children:r.jsx("span",{className:"text-xs text-gray-500",children:De.category})})]}),r.jsxs("div",{className:"flex-1 px-4 flex flex-col overflow-y-auto pb-36",children:[r.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-8 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[r.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),r.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),r.jsxs("div",{className:"relative text-center",children:[r.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",l+1]}),r.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:De.prompt}),De.difficulty&&r.jsx("div",{className:"mt-3 inline-block",children:r.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${De.difficulty==="easy"?"bg-green-500/20 text-green-300":De.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:De.difficulty.toUpperCase()})})]})]}),r.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:De.options.map((de,ce)=>{const ve=Xe===ce,Ve=ce===De.answerIndex,Me=Te&&Xe!==null&&I,Ye=b[l]&&b[l].includes(ce);let Be="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";Ye?Be+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(Be+="cursor-pointer ",Me?ve&&Ve?Be+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":ve&&!Ve?Be+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!ve&&Ve?Be+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":Be+="bg-gray-700 border-gray-600 text-gray-400":ve?Be+="bg-gray-600 border-gray-500 text-white":Be+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const Bt=["🅰️","🅱️","🅲️","🅳️"];return r.jsx("button",{onClick:v0=>ue(ce,v0),disabled:Te&&q[l],className:Be,children:r.jsxs("div",{className:"flex items-center gap-2 w-full",children:[r.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:Bt[ce]}),r.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:de}),_[l]&&_[l][ce]>0&&!Ye&&r.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[_[l][ce],"%"]}),Me&&ve&&Ve&&!Ye&&r.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),Me&&ve&&!Ve&&!Ye&&r.jsx("div",{className:"text-lg",children:"😔"}),Me&&!ve&&Ve&&!Ye&&r.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},ce)})}),Te&&I&&Xe!==null&&r.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:r.jsxs("div",{className:"flex gap-3",children:[r.jsx("div",{className:"text-lg flex-shrink-0",children:Xe===De.answerIndex?"🎊":"💡"}),r.jsxs("div",{className:"flex-1",children:[r.jsx("h4",{className:`font-semibold mb-3 text-sm ${Xe===De.answerIndex?"text-green-400":"text-blue-400"}`,children:Xe===De.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),De.explanation&&r.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:De.explanation})]})]})})]}),r.jsxs("div",{className:"fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm p-4 pb-8 z-50",children:[!Te&&r.jsxs("div",{className:"flex justify-center gap-2 mb-4",children:[r.jsxs("button",{onClick:Br,disabled:Xe!==null,className:`${R?"bg-gray-700/50 text-gray-500/50":"bg-orange-600 hover:bg-orange-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm`,children:[r.jsx("span",{children:"⚡"}),"50:50"]}),r.jsxs("button",{onClick:re,disabled:Xe!==null,className:`${k?"bg-gray-700/50 text-gray-500/50":"bg-purple-600 hover:bg-purple-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm`,children:[r.jsx("span",{children:"👥"}),"Ask Friends"]})]}),r.jsxs("div",{className:"flex gap-2 mb-2",children:[r.jsx("button",{onClick:ze,disabled:l===0,className:"flex-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 py-2 rounded-lg font-medium transition-colors text-sm",children:"Previous"}),r.jsx("button",{onClick:We,disabled:Xe!==null,className:`flex-1 py-2 rounded-lg font-medium transition-colors text-sm ${Xe!==null?"bg-gray-600/50 text-gray-400/50 cursor-not-allowed":"bg-yellow-600 hover:bg-yellow-700"}`,children:"Skip"}),r.jsx("button",{onClick:be,className:"flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium transition-colors text-sm",children:l===Ke-1?"Finish":"Next"})]}),r.jsx("button",{onClick:()=>ne(!0),className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-2.5 rounded-lg font-medium transition-colors text-sm",children:"Submit"})]}),ee&&r.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[r.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),r.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quiz Complete!"}),r.jsx("p",{className:"text-gray-400 mb-6",children:"Here's how you performed"}),r.jsxs("div",{className:"bg-gray-700/50 rounded-2xl p-4 mb-6 space-y-3",children:[r.jsxs("div",{className:"flex justify-between items-center",children:[r.jsx("span",{className:"text-gray-300",children:"Questions Attempted:"}),r.jsxs("span",{className:"text-white font-semibold",children:[je," / ",Ke]})]}),r.jsxs("div",{className:"flex justify-between items-center",children:[r.jsx("span",{className:"text-gray-300",children:"Correct Answers:"}),r.jsx("span",{className:"text-green-400 font-semibold",children:tt})]}),r.jsxs("div",{className:"flex justify-between items-center",children:[r.jsx("span",{className:"text-gray-300",children:"Accuracy:"}),r.jsxs("span",{className:"text-blue-400 font-semibold",children:[je>0?Math.round(tt/je*100):0,"%"]})]}),r.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:r.jsxs("div",{className:"flex justify-between items-center",children:[r.jsx("span",{className:"text-yellow-300 flex items-center gap-1",children:"🪙 Coins Earned:"}),r.jsx("span",{className:"text-yellow-400 font-bold text-lg",children:Re})]})})]}),r.jsx("button",{onClick:oe,className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors",children:"Continue"})]})}),B&&r.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[r.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),r.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),r.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>te(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),r.jsx("button",{onClick:a,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),O&&!ee&&r.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[r.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),r.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),r.jsxs("p",{className:"text-gray-400 mb-4",children:[je," of ",Ke," answered • ",xe," skipped"]}),Te&&r.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:r.jsxs("div",{className:"flex justify-center gap-6",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),r.jsx("div",{className:"text-yellow-400 font-bold",children:Q}),r.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),r.jsx("div",{className:"text-yellow-400 font-bold",children:ie}),r.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>{ne(!1),m(null),C(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),r.jsx("button",{onClick:de=>{de.preventDefault(),de.stopPropagation(),console.log("Submit button clicked"),ge()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),g===l&&!O&&r.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[r.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),r.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),r.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),r.jsx("button",{onClick:()=>{m(null),C(Date.now()),l<Pe.length-1?be():ne(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:l<Pe.length-1?"Continue":"See Results"})]})}),ae&&r.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:ae}),r.jsx("style",{jsx:!0,children:`
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
        `})]})},Kr=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],dg=()=>r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),ug=()=>r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),fg=()=>r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),mg=()=>r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),hg=()=>r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),pg=()=>r.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),xg=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[]},onRetake:t=()=>{},onReview:n=()=>{},onNavigate:s=(d,f)=>{},isRetake:i=!1,isPractice:o=!1,player:a={level:1,coins:0,combo:0,energy:5},categories:l=[],addCoins:c=()=>{}})=>{const[d,f]=u.useState(a.coins),p=u.useRef(null),[h,w]=u.useState(null),[y]=It("/sounds/coin.mp3",{volume:.75}),[j,S]=u.useState(!1),[g,m]=u.useState(!1),[x,C]=u.useState(0),[R,z]=u.useState(!1),[k,v]=u.useState(!1),{correct:b,total:N,category:_,categorySlug:A,difficulty:q,mode:J,elapsedMs:W}=e,G=N?Math.round(b/N*100):0,D=G===100,E=G>=80,L=Math.floor(W/1e3),M=N>0?Math.floor(L/N):0,P=o?e.earnedCoins||0:Math.round(b*5*(D?1.5:E?1.2:1)),$=Kr.find(I=>I.slug===_)||Kr[0],ne=(()=>D?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:G>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:G>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:G>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:G>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();u.useEffect(()=>{!h&&!j&&f(a.coins)},[a.coins,h,j]),u.useEffect(()=>{P>0&&!j&&!k&&p.current&&setTimeout(()=>{p.current.getBoundingClientRect(),y==null||y(),w({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(P,10),amount:P}),S(!0)},500)},[P,o,j,y]),u.useEffect(()=>{(D||E)&&(m(!0),setTimeout(()=>m(!1),3e3));let I=0;const Y=b/20,V=setInterval(()=>{I+=Y,I>=b?(C(b),clearInterval(V)):C(Math.floor(I))},50);return()=>clearInterval(V)},[b,D,E]);const B=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:b,total:N}],te=()=>{try{const I=localStorage.getItem("qp_recent");if(I)return JSON.parse(I).slice(0,10).map(V=>V.slug||V.cat).filter(V=>V&&V!==e.categorySlug)}catch(I){console.error("Error reading recent categories:",I)}return[]},ae=()=>{const I=A||_,Y=q||"medium",V=te(),Z=(l||Kr||[]).filter(ee=>ee.slug!==I&&!V.slice(0,3).includes(ee.slug)),U=(()=>{if(Z.length===0){const ee=(l||Kr||[]).filter(F=>F.slug!==I);return ee[Math.floor(Math.random()*ee.length)]||(l||Kr)[0]}return Z[Math.floor(Math.random()*Z.length)]})();if(G<60)return o?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${I}`,{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}})},{icon:U.icon,title:U.name,desc:"Fresh start with new topic",color:U.gradient,action:()=>s(`/quiz/${U.slug}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>n()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${I}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:Y!=="easy"?"🎯":"🔄",title:Y!=="easy"?"Easy Mode":"Try Again",desc:Y!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>Y!=="easy"?s(`/quiz/${I}`,{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}):t()},{icon:U.icon,title:U.name,desc:"Try something different",color:U.gradient,action:()=>s(`/quiz/${U.slug}`,{mode:"quiz",difficulty:"easy",count:10,timer:{type:"per_q",seconds:45}})}];if(G>=80)return Y==="hard"&&G>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${I}`,{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}})},{icon:U.icon,title:`${U.name} Challenge`,desc:"Hard mode, new topic",color:U.gradient,action:()=>s(`/quiz/${U.slug}`,{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}})}]:[{icon:Y==="hard"?"🔥":"🎯",title:Y==="hard"?"Perfect Score Challenge":"Hard Mode",desc:Y==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${I}`,{mode:"quiz",difficulty:"hard",count:Y==="hard"?10:20,timer:{type:"per_q",seconds:30}})},{icon:U.icon,title:U.name,desc:"Master new topics",color:U.gradient,action:()=>s(`/quiz/${U.slug}`,{mode:"quiz",difficulty:Y,count:10,timer:{type:"per_q",seconds:45}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${I}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}})}];{const ee=G<70;return[{icon:ee?"📚":"🎯",title:ee?"Practice More":"Try Again",desc:ee?"Improve accuracy":"Beat your score",color:ee?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:ee?()=>s(`/quiz/${I}`,{mode:"practice",difficulty:Y,count:10,timer:{type:"off",seconds:0}}):()=>t()},{icon:U.icon,title:U.name,desc:"Explore new topics",color:U.gradient,action:()=>s(`/quiz/${U.slug}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:45}})},{icon:Y==="easy"?"⬆️":"💪",title:Y==="easy"?"Medium Difficulty":"More Questions",desc:Y==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${I}`,{mode:"quiz",difficulty:Y==="easy"?"medium":Y,count:Y==="easy"?10:20,timer:{type:"per_q",seconds:45}})}]}},T=pt.useMemo(()=>ae(),[G,o,e.categorySlug,e.difficulty]);return r.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4",children:[h&&r.jsx(Vl,{startRect:h.startRect,targetRef:p,count:h.count,onDone:()=>{h.amount>0&&!k&&(console.log("[QuizResults] Adding coins once:",h.amount),c(h.amount),v(!0),f(a.coins+h.amount)),w(null)}}),r.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),g&&r.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:r.jsx("div",{className:"text-8xl animate-bounce",children:D?"🎉":"⭐"})}),r.jsxs("div",{className:"flex justify-between items-center mb-6",children:[r.jsx("button",{onClick:()=>s("/"),className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all",children:r.jsx(ug,{})}),r.jsxs("div",{className:"flex gap-2",children:[r.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",a.level]}),r.jsxs("button",{ref:p,onClick:()=>z(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[d," 🪙"]})]})]}),r.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),r.jsxs("div",{className:"relative text-center",children:[r.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${ne.color}`,children:[r.jsx("span",{className:"text-2xl",children:ne.emoji}),r.jsx("span",{className:"font-semibold",children:ne.text})]}),r.jsxs("div",{className:"mb-6",children:[r.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[x,"/",N]}),r.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[r.jsx("span",{className:"text-xl",children:$.icon}),r.jsx("span",{children:$.name})]})]}),r.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"text-3xl font-bold",children:[G,"%"]}),r.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"text-3xl font-bold",children:[M,"s"]}),r.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:P>0?`+${P}`:"0"}),r.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),r.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(hg,{}),r.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),a.combo>0&&r.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[r.jsx(pg,{}),a.combo," streak"]})]}),r.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:B.map((I,Y)=>r.jsx("div",{className:`flex-1 rounded-t transition-all ${Y===B.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${I.score/I.total*100}%`,minHeight:"4px"}},Y))}),r.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[r.jsxs("button",{onClick:n,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[r.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),r.jsxs("div",{className:"relative flex items-center justify-between",children:[r.jsxs("div",{className:"text-left",children:[r.jsx("div",{className:"font-semibold",children:"Review"}),r.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),r.jsx(mg,{})]})]}),r.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"text-left",children:[r.jsx("div",{className:"font-semibold",children:"Try Again"}),r.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),r.jsx(fg,{})]})})]}),r.jsxs("div",{className:"space-y-3",children:[r.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),T.map((I,Y)=>r.jsx("button",{onClick:I.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${I.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:r.jsx("span",{className:"text-xl",children:I.icon})}),r.jsxs("div",{className:"text-left",children:[r.jsx("div",{className:"font-medium text-sm",children:I.title}),r.jsx("div",{className:"text-xs text-white/40",children:I.desc})]})]}),r.jsx(dg,{})]})},Y))]}),r.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:r.jsx("button",{onClick:()=>s("/profile/history",{replace:!0}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),R&&r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:I=>{I.target===I.currentTarget&&z(!1)},children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:I=>I.stopPropagation(),children:[r.jsx("div",{className:"absolute inset-0 opacity-10",children:r.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),r.jsxs("div",{className:"relative",children:[r.jsxs("div",{className:"flex items-center justify-between mb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),r.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[a.coins," Coins"]})]})]}),r.jsx("button",{onClick:()=>z(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),r.jsxs("div",{className:"mb-6",children:[r.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),r.jsxs("div",{className:"space-y-3",children:[r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),r.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),r.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),r.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),r.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),r.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),r.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),r.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),r.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),r.jsxs("div",{className:"mb-6",children:[r.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[r.jsx("span",{children:"Next reward"}),r.jsxs("span",{children:[100-a.coins%100," coins to go"]})]}),r.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${a.coins%100}%`}})})]}),r.jsx("button",{onClick:()=>{z(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})},gg=({questions:e,answers:t,skipped:n,onBack:s,onRetake:i,fromHistory:o=!1})=>{const a=bt(),l=()=>{o?a("/profile/history",{replace:!0}):s?s():a(-1)},c=e.reduce((p,h,w)=>p+(t[w]===h.answerIndex?1:0),0),d=(n==null?void 0:n.filter(Boolean).length)||0,f=e.length-c-d;return r.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),r.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),r.jsx("div",{className:"w-16"})," "]}),r.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[r.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[r.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),r.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),r.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[r.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),r.jsx("div",{className:"text-lg font-bold text-red-400",children:f})]}),r.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[r.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),r.jsx("div",{className:"text-lg font-bold text-amber-400",children:d})]})]}),r.jsx("ol",{className:"space-y-4",children:e.map((p,h)=>{const w=t[h],y=!w&&w!==0,j=w===p.answerIndex;return r.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[r.jsxs("div",{className:"flex items-start justify-between mb-3",children:[r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",h+1,". ",p.prompt]}),p.category&&r.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",p.category," • Difficulty: ",p.difficulty||"Medium"]})]}),r.jsx("div",{className:"ml-2",children:y?r.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?r.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):r.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:p.options.map((S,g)=>{const m=w===g,x=g===p.answerIndex;let C="w-full text-left px-3 py-2 rounded-xl border transition-all ";return x?C+="bg-green-600/20 border-green-500/50 text-green-300":m&&!x?C+="bg-red-600/20 border-red-500/50 text-red-300":C+="bg-base-bg/40 border-base-border text-base-muted",r.jsxs("div",{className:C,children:[r.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][g],"."]}),S,x&&r.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),m&&!x&&r.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},g)})}),p.explanation&&r.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[r.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),r.jsx("div",{className:"text-sm text-base-muted",children:p.explanation})]})]},p.id||h)})}),r.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[r.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),i&&r.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:i,children:"Retake Quiz"})]})]})},vg="qp_resume",wd="qp_mistakes",jd="qp_stats",Nd="qp_lastset",kd="qp_recent",Sd="qp_review_snapshot",yg=50,Jr=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Ei=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),bg=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),h0=e=>{const t=e.slice();for(let n=t.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[t[n],t[s]]=[t[s],t[n]]}return t},wg=(e,t,n)=>Math.max(t,Math.min(n,e)),Zr=(e,t)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}};async function jg(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const n=await t.text(),{data:s}=$r.parse(n,{header:!0,skipEmptyLines:!0,transformHeader:o=>String(o).trim().toLowerCase()}),i={a:0,b:1,c:2,d:3};return s.map((o,a)=>{var h;const l=[o.option1,o.option2,o.option3,o.option4].map(w=>(w??"").trim());if(l.some(w=>!w))return null;let c=-1;const d=String(o.answer??"").trim();if(i[d.toLowerCase()]!==void 0)c=i[d.toLowerCase()];else{const w=l.findIndex(y=>y.toLowerCase()===d.toLowerCase());c=w>=0?w:0}const f=String(o.category??o.subject??"General Knowledge").trim(),p=String(o.difficulty??"medium").toLowerCase().trim();return{id:((h=o.id)==null?void 0:h.trim())||`q_${a}`,category:f,difficulty:p,prompt:String(o.question??"").trim(),options:l,answerIndex:c,explanation:String(o.explanation??"").trim()}}).filter(Boolean)}function Ng(e,{categorySlug:t,difficulty:n,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",n),console.log("count:",s),console.log("Total questions available:",e.length);const o=t==="mixed"?()=>!0:f=>Ei(f.category)===t,a=n?f=>(f.difficulty||"medium")===n:()=>!0,l=e.filter(f=>o(f)&&a(f));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(f=>`"${f.category}" -> "${Ei(f.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(f=>Ei(f.category)))]),{questions:[],poolSize:0};const d=bg(l,Math.min(s,l.length)).map(f=>{const p=h0([0,1,2,3]),h=p.map(y=>f.options[y]),w=p.indexOf(f.answerIndex);return{...f,options:h,answerIndex:w}});return console.log("Final questions:",d.length),{questions:d,poolSize:l.length}}function kg(){const e=bt(),{category:t}=Sp(),n=on(),{energy:s,useEnergy:i,player:o,addCoins:a,addXP:l,updateDailyStreak:c}=yn(),d=new URLSearchParams(n.search),f=d.get("review")==="1",p=d.get("retake")==="1",h=n.state||{},w=h.mode||"quiz",y=String(h.difficulty||"medium").toLowerCase(),j=wg(Number(h.count||10),1,50),S=h.timer||{type:"per_q",seconds:45};h.resume,h.daily,h.source;const g=p||!!h.retake,m=!!h.fromHistory,x=w==="practice";console.log("Quiz Component - Mode Detection:",{routerState:h,mode:w,isPractice:x,location:n.pathname,state:n.state});const[C,R]=u.useState([]),[z,k]=u.useState(!0),[v,b]=u.useState(""),[N,_]=u.useState({questions:[]}),[A,q]=u.useState("quiz"),[J,W]=u.useState(null),[G,D]=u.useState(null),[E,L]=u.useState(0);u.useEffect(()=>{let B=!0;return(async()=>{try{const te=await jg();if(!B)return;R(te)}catch(te){console.error(te),b("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{k(!1)}})(),()=>{B=!1}},[]),u.useEffect(()=>{if(z||v||f||C.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",w),console.log("Difficulty:",y),console.log("Count:",j);const B=Ng(C,{categorySlug:t,difficulty:y,count:j});if(B.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(C.map(te=>Ei(te.category)))].slice(0,10)),b(`No questions found for "${Jr(t)}" with difficulty "${y}"`);return}console.log("Session built with",B.questions.length,"questions"),_(B),D(Date.now()),L(0),q("quiz")},[C,t,w,y,j,n.state,n.search]),u.useEffect(()=>{if(A!=="quiz"||!G)return;const B=setInterval(()=>{L(Date.now()-G)},1e3);return()=>clearInterval(B)},[A,G]);const M=u.useCallback(B=>{if(console.log("Quiz completed - Mode:",w,"isPractice:",x,"Results:",B),!B||!B.questions){console.error("Invalid results object:",B);return}const te=B.questions.filter((T,I)=>B.answers[I]!==null&&B.answers[I]!==T.answerIndex).map(T=>T.id);try{const T=Zr(wd,[]),I=Array.from(new Set([...te,...T]));localStorage.setItem(wd,JSON.stringify(I))}catch(T){console.error("Error saving mistakes:",T)}try{const T=Zr(jd,{sessions:[]});T.sessions.push({cat:Jr(t),mode:x?"practice":"quiz",total:B.total,correct:B.correct,skipped:B.skipped.filter(Boolean).length,ms:E,timestamp:Date.now(),earnedXP:x?0:B.correct*10,earnedCoins:x?0:B.correct*5}),localStorage.setItem(jd,JSON.stringify(T))}catch(T){console.error("Error saving stats:",T)}const ae={ts:Date.now(),slug:t,categoryLabel:Jr(t),mode:x?"practice":"quiz",difficulty:y,total:B.total,timer:x?null:S,ms:E,attempted:B.answers.filter(T=>T!==null).length,correct:B.correct,questions:B.questions,answers:B.answers,skipped:B.skipped,isPractice:x};try{localStorage.setItem(Nd,JSON.stringify(ae)),localStorage.setItem(Sd,JSON.stringify({questions:B.questions,answers:B.answers,skipped:B.skipped}));const T=Zr(kd,[]),Y=[{id:ae.ts,ts:ae.ts,cat:ae.categoryLabel,slug:t,mode:x?"Practice":"Quiz",total:B.total,correct:B.correct,ms:E,snapshot:ae},...T].slice(0,yg);localStorage.setItem(kd,JSON.stringify(Y))}catch(T){console.error("Error saving snapshot:",T)}if(localStorage.removeItem(vg),x&&B.earnedCoins?B.earnedCoins:!x&&B.correct>0&&B.correct*5,!x&&B.correct>0){const T=B.correct*10;l(T)}c(),W({...B,category:Jr(t),categorySlug:t,difficulty:y,mode:x?"practice":"quiz",elapsedMs:E,isPractice:x,hasTimer:!x,earnedXP:x?0:B.correct*10,earnedCoins:x?B.earnedCoins||0:B.correct*5}),q("results")},[t,w,S,E,x]),P=u.useCallback(()=>{m?e("/profile/history",{replace:!0,state:null}):e("/")},[m,e]),$=u.useCallback(()=>{console.log("Retake requested - Mode:",w,"isPractice:",x);const B=Zr(Nd,null);if(!B||B.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:x?"practice":"quiz",difficulty:y,count:j,timer:x?null:S,retake:!0}});return}const te=B.questions.map(ae=>{const T=h0([0,1,2,3]);return{...ae,options:T.map(I=>ae.options[I]),answerIndex:T.indexOf(ae.answerIndex)}});_({questions:te,poolSize:te.length}),D(Date.now()),L(0),q("quiz"),window.scrollTo(0,0)},[t,w,y,j,S,e,x]),O=u.useCallback((B=null)=>{if(B)W(B);else if(!J){const te=Zr(Sd,null);te&&W({questions:te.questions||[],answers:te.answers||[],skipped:te.skipped||[]})}q("review")},[J]),ne=u.useCallback(()=>{m?e("/profile/history",{replace:!0}):q("results")},[m,e]);return z?r.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:r.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):v?r.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:r.jsx("div",{className:"text-sm text-red-400",children:v})}):(console.log("Render - Current view:",A,"Session questions:",N.questions.length,"Mode:",w,"isPractice:",x),r.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:r.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[A==="quiz"&&N.questions.length>0&&r.jsx(cg,{session:N,mode:x?"practice":"quiz",category:Jr(t),difficulty:y,timerConfig:x?null:S,onComplete:M,onQuit:P,isPractice:x}),A==="results"&&J&&r.jsx(xg,{results:J,onRetake:$,onReview:()=>O(J),isRetake:g,isPractice:x,player:o,categories:c0,addCoins:a,onNavigate:(B,te)=>{te!=null&&te.replace?e(B,{replace:!0,state:te}):e(B,{state:te})}}),A==="review"&&J&&r.jsx(gg,{questions:J.questions||[],answers:J.answers||[],skipped:J.skipped||[],onBack:ne,onRetake:$,fromHistory:m,isPractice:x})]})}))}const Nn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Qn=360/Nn.length,Sg=42,Go=3e3,Cd=10,Ed=260,Cg="cubic-bezier(.15,.7,.1,1)",Eg="cubic-bezier(.2,.7,.2,1)",jn=5,_g=5,Rg=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function Tg({muted:e=!1,size:t=18}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[r.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),r.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&r.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function Pg({q:e,locked:t,onPick:n,result:s}){if(!e)return null;const i=[e.option1,e.option2,e.option3,e.option4];return r.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[r.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),r.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),i.map((o,a)=>{const l=s&&o===e.answer,c=s&&s.pick===o&&o!==e.answer;return r.jsx("button",{disabled:t||!!s,onClick:()=>n(o),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:o},a)}),s&&r.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?r.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):r.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",r.jsx("b",{children:e.answer})]}),e.explanation&&r.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function zg(){const e=bt(),[t]=It("/sounds/correct.mp3",{volume:.7}),[n]=It("/sounds/wrong.mp3",{volume:.7}),[s,i]=u.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(jn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(jn).fill(null)}]),[o,a]=u.useState(0),[l,c]=u.useState(1),d=s.reduce((T,I)=>T+I.scores.reduce((Y,V)=>Y+(V??0),0),0),[f,p]=u.useState(!0),h=u.useRef(null);u.useEffect(()=>{const T=new Audio("/sounds/spin.mp3");return T.loop=!0,T.volume=.7,h.current=T,()=>{try{T.pause(),T.src=""}catch{}}},[]);const w=()=>{if(f&&h.current)try{h.current.currentTime=0,h.current.play()}catch{}},y=()=>{if(h.current)try{h.current.pause(),h.current.currentTime=0}catch{}},[j,S]=u.useState(0),[g,m]=u.useState("none"),[x,C]=u.useState(!1),[R,z]=u.useState(null),[k,v]=u.useState(null),b=u.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[N,_]=u.useState([]);u.useEffect(()=>{(async()=>{try{const T=await fetch("/data/quiz_questions_bank.csv").then(Z=>Z.text()),{data:I}=$r.parse(T,{header:!0,skipEmptyLines:!0,transformHeader:Z=>String(Z).trim().toLowerCase()}),Y={a:0,b:1,c:2,d:3},V=I.map((Z,X)=>{var ie;const U=(Z.question??"").trim();if(!U)return null;const ee=[Z.option1,Z.option2,Z.option3,Z.option4].map(ke=>String(ke??"").trim());if(ee.some(ke=>!ke))return null;let F=String(Z.answer??"").trim(),Q=Y[F.toLowerCase()];if(Q===void 0){const ke=ee.findIndex(fe=>fe.toLowerCase()===F.toLowerCase());Q=ke>=0?ke:0}const K=ee[Q];return{id:((ie=Z.id)==null?void 0:ie.trim())||`ps_${X}`,question:U,option1:ee[0],option2:ee[1],option3:ee[2],option4:ee[3],answer:K,explanation:String(Z.explanation??"").trim(),catSlug:Rg(Z.category??Z.subject??"general knowledge"),difficulty:String(Z.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);_(V)}catch{_([])}})()},[]);const[A,q]=u.useState(null),[J,W]=u.useState(null),[G,D]=u.useState(!1),E=T=>(T%360+360)%360,L=T=>E(T),M=l>jn;function P(){if(s.length>=4)return;const T=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],I=T[(s.length*2+1)%T.length];i(Y=>[...Y,{name:`Player ${Y.length+1}`,color:I,scores:Array(jn).fill(null)}])}function $(){s.length<=2||(i(T=>T.slice(0,-1)),a(T=>Math.min(T,s.length-2)))}function O(T){i(I=>I.map((Y,V)=>V===o?{...Y,scores:Y.scores.map((Z,X)=>X===l-1?T:Z)}:Y))}function ne(){if(x||M)return;z(null),v(null),q(null),W(null),C(!0),w();const T=Math.floor(Math.random()*Nn.length),I=Nn[T],Y=Qn*.28,V=(Math.random()*2-1)*Y,Z=E(j),X=180,ee=T*Qn+Qn/2+V;let F=L(ee-Z-X);const Q=Sg*360+F,K=j+Q+Cd;m(`transform ${b?800:Go}ms ${Cg}`),S(K);try{navigator.vibrate&&!b&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{m(`transform ${b?160:Ed}ms ${Eg}`),S(ie=>ie-Cd)},b?800:Go),setTimeout(()=>{if(y(),C(!1),z(T),v(I.color),I.soon)return;const ie=N.filter(fe=>fe.catSlug===I.slug&&fe.difficulty==="easy"),ke=ie.length?ie:N.filter(fe=>fe.catSlug===I.slug);if(ke.length){const fe=ke[Math.floor(Math.random()*ke.length)];q(fe)}else q({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(b?800:Go)+(b?160:Ed)+40)}function B(T){if(!A||J)return;const I=T===A.answer;if(W({correct:I,pick:T}),I){t(),D(!0),setTimeout(()=>D(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}O(_g)}else{n();try{navigator.vibrate&&navigator.vibrate([4])}catch{}O(0)}}function te(){const T=(o+1)%s.length,I=T===0?l+1:l;a(T),c(I),z(null),v(null),q(null),W(null)}function ae(){const T=s.map(V=>V.scores.reduce((Z,X)=>Z+(X??0),0)),I=Math.max(...T),Y=s.filter((V,Z)=>T[Z]===I).map(V=>V.name).join(", ");alert(`${Y} win${Y.includes(",")?"":"s"} the pot of ${d} coins! 🎉`),e("/play")}return r.jsxs("div",{className:"min-h-screen bg-black text-white",children:[G&&r.jsx(f0,{numberOfPieces:120,recycle:!1}),r.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[r.jsxs("header",{className:"flex items-center justify-between mb-4",children:[r.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),r.jsxs("div",{className:"text-center",children:[r.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),r.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),r.jsx("button",{onClick:()=>p(T=>!T),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":f?"Mute sound":"Unmute sound",title:f?"Sound on":"Sound off",children:r.jsx(Tg,{muted:!f})})]}),r.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsxs("div",{className:"text-sm",children:["Round ",r.jsx("b",{children:Math.min(l,jn)}),"/",r.jsx("b",{children:jn})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("button",{onClick:P,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),r.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),r.jsx("button",{onClick:$,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),r.jsxs("div",{className:"text-sm",children:["Pot: ",r.jsx("b",{className:"text-yellow-300",children:d})," 🪙"]})]}),r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[r.jsxs("colgroup",{children:[r.jsx("col",{style:{width:"42%"}}),r.jsx("col",{style:{width:"9%"}}),r.jsx("col",{style:{width:"9%"}}),r.jsx("col",{style:{width:"9%"}}),r.jsx("col",{style:{width:"9%"}}),r.jsx("col",{style:{width:"9%"}}),r.jsx("col",{style:{width:"13%"}})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-base-muted",children:[r.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:jn}).map((T,I)=>r.jsxs("th",{className:"font-medium text-center",children:["R",I+1]},I)),r.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),r.jsx("tbody",{children:s.map((T,I)=>{const Y=T.scores.reduce((Z,X)=>Z+(X??0),0),V=I===o;return r.jsxs("tr",{className:V?"bg-white/6":"",children:[r.jsx("td",{className:"py-1 pr-1",children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:T.color}}),r.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:T.name,onChange:Z=>i(X=>X.map((U,ee)=>ee===I?{...U,name:Z.target.value}:U))})]})}),T.scores.map((Z,X)=>r.jsx("td",{className:"text-center",children:Z===null?"–":Z},X)),r.jsx("td",{className:"text-right pr-1 font-semibold",children:Y})]},I)})})]})})]}),r.jsx("section",{className:"flex flex-col items-center",children:r.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[k&&r.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${k}33, 0 0 30px 8px ${k}44`}}),r.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:g},"aria-label":"Category wheel",role:"group",children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Nn.map((T,I)=>{const Y=I*Qn,V=Y+Qn,Z=Qn>180?1:0,X=Math.PI*Y/180,U=Math.PI*V/180,ee=50+50*Math.cos(X),F=50-50*Math.sin(X),Q=50+50*Math.cos(U),K=50-50*Math.sin(U),ie=R===I;return r.jsxs("g",{style:{opacity:R==null?.95:ie?1:.78,filter:R!=null&&!ie?"blur(0.6px)":"none"},children:[r.jsx("path",{d:`M50,50 L${ee},${F} A50,50 0 ${Z} 0 ${Q},${K} Z`,fill:T.color,stroke:ie?`${T.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:ie?"1.2":"0.6"}),r.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${Y+Qn/2} 50 50) translate(12 0)`,children:r.jsxs("tspan",{children:[T.label,T.soon?" (soon)":""]})})]},T.slug)}),r.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),r.jsx("button",{onClick:ne,disabled:x||M,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",x||M?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),r.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),R!=null&&!x&&r.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:r.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[r.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:Nn[R].color}}),Nn[R].label]})})]})}),r.jsx("section",{className:"mt-4",children:M?r.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[r.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),r.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",r.jsx("b",{className:"text-yellow-300",children:d})," coins."]}),r.jsx("button",{className:"btn-primary w-full",onClick:ae,children:"End match"})]}):R!=null&&Nn[R].soon?r.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[r.jsx("div",{className:"text-lg font-semibold mb-1",children:Nn[R].label}),r.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),r.jsx("button",{className:"btn-primary",onClick:ne,disabled:x,children:"Re-spin"})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",r.jsx("span",{style:{color:s[o].color},children:s[o].name})," ","| Round ",l,"/",jn]}),r.jsx(Pg,{q:A,locked:x||!A,onPick:B,result:J}),J&&r.jsx("div",{className:"mt-3 flex justify-center",children:r.jsx("button",{className:"btn-primary",onClick:te,children:"Next turn"})})]})})]}),r.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const Lg=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return r.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[r.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),r.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(n=>r.jsxs("button",{onClick:()=>e(n.id,n.title),className:`rounded-3xl bg-gradient-to-br ${n.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[r.jsx("span",{className:"text-5xl",children:n.emoji}),r.jsx("span",{className:"text-white font-bold text-lg text-center",children:n.title})]},n.id))})]})},Mg=()=>{bt();const{player:e,addCoins:t,addXP:n}=yn(),[s,i]=u.useState([]),[o,a]=u.useState(0),[l,c]=u.useState({}),[d,f]=u.useState(0),[p,h]=u.useState(5),[w,y]=u.useState(0),[j,S]=u.useState(!0),[g,m]=u.useState(null),[x,C]=u.useState(!0),[R,z]=u.useState(null),[k,v]=u.useState(""),[b,N]=u.useState(!1),[_,A]=u.useState(""),[q,J]=u.useState(!1),[W,G]=u.useState(!1),[D,E]=u.useState(!1),[L,M]=u.useState(!1),[P,$]=u.useState(!1),[O,ne]=u.useState(!1),[B,te]=u.useState(0),[ae,T]=u.useState(0),[I,Y]=u.useState(-1),[V,Z]=u.useState(-1),[X,U]=u.useState({}),[ee,F]=u.useState({}),Q=u.useRef(null),K=u.useRef(null),[ie]=It("/sounds/correct.mp3",{volume:.6}),[ke]=It("/sounds/wrong.mp3",{volume:.6}),[fe]=It("/sounds/coin.mp3",{volume:.75}),me=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],Se=()=>{i([]),a(0),c({}),f(0),h(5),y(0),S(!0),m(null),N(!1),A(""),J(!1),G(!1),E(!1),M(!1),$(!1),ne(!1),te(0),T(0),Y(-1),Z(-1),U({}),F({}),z(null),v(""),Re(null)};u.useEffect(()=>(Se(),C(!0),()=>{document.body.classList.remove("hide-bottom-nav"),Se(),K.current&&clearTimeout(K.current)}),[]),u.useEffect(()=>{!x&&s.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[x,s.length]),u.useEffect(()=>{!x&&s.length>0&&M(!0)},[x,s.length]);const[_e,Re]=u.useState(null);u.useEffect(()=>{const re=ue=>{var ze;if(L&&!D){const be=ue.target.closest('button[type="button"]'),We=(ze=be==null?void 0:be.querySelector(".text-\\[10px\\]"))==null?void 0:ze.textContent;We&&["Home","Play","Profile","Swipe"].includes(We)&&(ue.preventDefault(),ue.stopPropagation(),Re({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[We]),G(!0))}};return document.addEventListener("click",re,!0),()=>document.removeEventListener("click",re,!0)},[L,D]),u.useEffect(()=>{const re=Q.current;if(!re)return;let ue=!1,ze=0,be=null;const We=pe=>{!x&&s.length>0&&pe.preventDefault()},ge=pe=>{ze=pe.touches[0].clientY,ue=!1},oe=pe=>{!x&&s.length>0&&!W&&!q&&pe.preventDefault()},le=pe=>{if(ue||W||q)return;const je=pe.changedTouches[0].clientY,xe=ze-je;if(Math.abs(xe)>30){if(ue=!0,be&&clearTimeout(be),xe>0&&o<s.length-1){const Le=o+1;a(Le),re.scrollTo({top:Le*window.innerHeight,behavior:"smooth"})}else if(xe<0&&o>0){const Le=o-1;a(Le),re.scrollTo({top:Le*window.innerHeight,behavior:"smooth"})}be=setTimeout(()=>{ue=!1},800)}};return re.addEventListener("touchstart",ge,{passive:!1}),re.addEventListener("touchmove",oe,{passive:!1}),re.addEventListener("touchend",le,{passive:!1}),re.addEventListener("wheel",We,{passive:!1}),()=>{re.removeEventListener("touchstart",ge),re.removeEventListener("touchmove",oe),re.removeEventListener("touchend",le),re.removeEventListener("wheel",We),be&&clearTimeout(be)}},[o,s.length,x]),u.useEffect(()=>{const re=Q.current;re&&(W||q?(re.style.overflow="hidden",re.style.touchAction="none"):(re.style.overflow="auto",re.style.touchAction="auto"))},[W,q]),u.useEffect(()=>{(W||q)&&K.current&&(clearTimeout(K.current),K.current=null)},[W,q]);const he=async re=>{try{const ze=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:be}=$r.parse(ze,{header:!0,skipEmptyLines:!0}),oe=be.map((le,pe)=>{var Le,tt;const je=[le.option1,le.option2,le.option3,le.option4].filter(Boolean),xe={A:0,B:1,C:2,D:3};return{id:le.id||`q_${pe}`,prompt:le.question,options:je,answerIndex:xe[(Le=le.answer)==null?void 0:Le.toUpperCase()]||0,category:le.category||"General Knowledge",difficulty:((tt=le.difficulty)==null?void 0:tt.toLowerCase())||"medium",explanation:le.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(le=>le.prompt&&le.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(le=>({...le,mascot:me[Math.floor(Math.random()*me.length)]}));i(oe),S(!1)}catch(ue){console.error("Failed to load questions:",ue),S(!1)}},we=re=>re===1||re===3||re===7||re===10||re===15||re===20||re>20&&re%5===0,Ce=(re,ue)=>{if(l[re]!==void 0)return;const ze=s.find(ge=>ge.id===re),be=ue===ze.answerIndex,We=s.findIndex(ge=>ge.id===re);if(c(ge=>({...ge,[re]:ue})),te(ge=>ge+1),T(ge=>ge+1),be){if(ie(),f(ge=>ge+1),y(ge=>ge+10),ne(!0),setTimeout(()=>{fe()},300),setTimeout(()=>ne(!1),2e3),Te(),we(We+1)){const ge=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];A(ge[Math.floor(Math.random()*ge.length)]),N(!0),setTimeout(()=>N(!1),2e3)}}else if(ke(),f(0),$(!0),setTimeout(()=>$(!1),1500),h(ge=>{const oe=Math.max(0,ge-1);return oe===0&&setTimeout(()=>J(!0),500),oe}),p>1&&we(We+1)){const ge=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];A(ge[Math.floor(Math.random()*ge.length)]),N(!0),setTimeout(()=>N(!1),2e3)}(p>1||be)&&(K.current=setTimeout(()=>{Xe()},2500))},Te=()=>{const re=document.createElement("div");re.style.position="fixed",re.style.inset="0",re.style.pointerEvents="none",re.style.zIndex="1000",document.body.appendChild(re);const ue=["🎉","✨","⭐","🎊","🌟"];for(let ze=0;ze<20;ze++){const be=document.createElement("div");be.textContent=ue[Math.floor(Math.random()*ue.length)],be.style.position="fixed",be.style.left=`${Math.random()*100}%`,be.style.top="-50px",be.style.fontSize="24px",be.style.animation=`fall ${2+Math.random()*2}s ease-out`,re.appendChild(be)}setTimeout(()=>re.remove(),4e3)},Xe=()=>{if(!(W||q)&&o<s.length-1){const re=o+1,ue=document.getElementById(`question-${re}`);ue==null||ue.scrollIntoView({behavior:"smooth"}),a(re)}},ht=re=>{const ue=s.findIndex(ge=>ge.id===re);if(I>=0&&B<5){m(`After ${5-B} attempts`),setTimeout(()=>m(null),2e3);return}const ze=s[ue],We=[0,1,2,3].filter(ge=>ge!==ze.answerIndex).sort(()=>Math.random()-.5).slice(0,2);U({...X,[re]:We}),Y(ue),te(0)},it=re=>{const ue=s.findIndex(pe=>pe.id===re);if(V>=0&&ae<5){m(`After ${5-ae} attempts`),setTimeout(()=>m(null),2e3);return}const be=s[ue].answerIndex,We=[0,0,0,0],ge=40+Math.floor(Math.random()*31);We[be]=ge;let oe=100-ge;const le=[0,1,2,3].filter(pe=>pe!==be);for(let pe=0;pe<le.length-1;pe++){const je=Math.floor(Math.random()*(oe/2));We[le[pe]]=je,oe-=je}We[le[le.length-1]]=oe,F({...ee,[re]:We}),Z(ue),T(0)},Pe=(re,ue)=>{Se(),z(re),v(ue),C(!1),he()},De=()=>{Re("/swipe"),G(!0)},Ke=()=>{E(!0),G(!1),document.body.classList.remove("hide-bottom-nav")},Br=()=>{const re=Object.keys(l).filter(ue=>{const ze=s.find(be=>be.id===ue);return l[ue]===(ze==null?void 0:ze.answerIndex)}).length;return u.useEffect(()=>{document.body.classList.add("hide-bottom-nav");const ue=setTimeout(()=>{t(w),Se(),M(!1),E(!1),C(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(ue),document.body.classList.remove("hide-bottom-nav")}},[]),r.jsx("div",{className:"fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4",children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[r.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),r.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[r.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),r.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(l).length})]}),r.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[r.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),r.jsx("div",{className:"text-2xl font-bold text-green-400",children:re})]}),r.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[r.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),r.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",w]})]}),r.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[r.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),r.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(ue,ze)=>r.jsx("span",{className:ze<p?"":"opacity-30",children:"❤️"},ze))})]})]})]})})};return D?r.jsx(Br,{}):x?r.jsx(Lg,{onSelect:Pe}):j?r.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:r.jsx("div",{className:"text-white",children:"Loading questions..."})}):r.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[r.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[r.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[r.jsx("button",{onClick:De,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsxs("div",{className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[r.jsx("span",{children:"🪙"}),r.jsx("span",{className:"font-bold text-yellow-400",children:w})]}),r.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[r.jsx("span",{children:"🔥"}),r.jsx("span",{className:"font-bold text-orange-400",children:d})]})]}),r.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(re,ue)=>r.jsx("span",{className:`${ue<p?"text-red-500":"text-gray-600 opacity-30"} ${P&&ue===p-1?"animate-heartLoss":""}`,children:"❤️"},ue))})]}),k&&r.jsx("div",{className:"text-center py-1",children:r.jsx("span",{className:"text-xs text-gray-400",children:k})})]}),O&&r.jsx("div",{className:"fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:r.jsx("div",{className:"bg-yellow-500 text-white px-4 py-2 rounded-full font-bold animate-coinFloat",children:"+10 🪙"})}),r.jsx("div",{ref:Q,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:s.map((re,ue)=>r.jsx(Dg,{question:re,index:ue,answered:l[re.id],onAnswer:ze=>Ce(re.id,ze),onFiftyFifty:()=>ht(re.id),onAudience:()=>it(re.id),eliminated:X[re.id]||[],audiencePercentages:ee[re.id],canUseFiftyFifty:I<0||B>=5,canUseAudience:V<0||ae>=5},re.id))}),q&&r.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[r.jsx("div",{className:"text-5xl mb-4",children:"😔"}),r.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),r.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),r.jsx("button",{onClick:()=>{E(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),W&&r.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[r.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),r.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),r.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>G(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),r.jsx("button",{onClick:Ke,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),b&&r.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:r.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:_})}),g&&r.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:r.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:g})}),r.jsx("style",{jsx:!0,children:`
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
      `})]})},Dg=({question:e,index:t,answered:n,onAnswer:s,onFiftyFifty:i,onAudience:o,eliminated:a,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:d})=>{const f=p=>{switch(p){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return r.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[r.jsx("div",{className:"flex justify-center py-2",children:r.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),r.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[r.jsxs("div",{className:`bg-gradient-to-br ${f(e.difficulty)} p-6 rounded-3xl mb-4`,children:[r.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),r.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),r.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((p,h)=>{const w=n!==void 0,y=n===h,j=h===e.answerIndex,S=a.includes(h);let g="w-full p-4 rounded-2xl font-medium transition-all ";return S?g+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":w?j?g+="bg-green-500 text-white":y?g+="bg-red-500 text-white":g+="bg-gray-700 text-gray-400":g+="bg-gray-800 text-white hover:bg-gray-700",r.jsx("button",{onClick:()=>!w&&!S&&s(h),disabled:w||S,className:g,children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][h]}),r.jsx("span",{className:"flex-1 text-left",children:p}),l&&l[h]>0&&r.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[h],"%"]}),w&&j&&r.jsx("span",{children:"✓"})]})},h)})}),!n&&r.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[r.jsx("button",{onClick:i,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),r.jsx("button",{onClick:o,disabled:!d,className:`px-4 py-2 rounded-lg font-medium text-sm ${d?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),r.jsx("div",{className:"text-center mt-3 mb-2",children:r.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),r.jsx("div",{className:"text-center mt-12 mb-4",children:r.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function Ig(){const e=bt(),[t,n]=u.useState(""),{player:s,levelProgress:i}=yn(),o=()=>{try{const d=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),f=new Date().setHours(0,0,0,0);return d.sessions.filter(h=>new Date(h.timestamp).setHours(0,0,0,0)===f&&h.mode==="quiz").reduce((h,w)=>h+(w.earnedCoins||0),0)}catch{return 0}},a={name:(s==null?void 0:s.name)||"Player",rank:23,streak:(s==null?void 0:s.currentStreak)||0,todayQuizzes:3,todayCoins:o()};u.useEffect(()=>{const d=new Date().getHours();d<12?n("Good morning"):d<17?n("Good afternoon"):n("Good evening")},[]);const l=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,c=i.required>0?i.current/i.required*100:0;return r.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-12 px-3",children:[r.jsxs("div",{className:"mb-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsxs("div",{children:[r.jsxs("h1",{className:"text-2xl font-bold",children:[t," 👋"]}),r.jsx("p",{className:"text-white/60 text-sm",children:"Ready for today's challenge?"})]}),r.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-12 h-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:r.jsx("span",{className:"text-xl",children:"⚙️"})})]}),r.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[r.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[r.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:a.name[0]}),r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"text-lg font-semibold",children:s.name||"Player"}),r.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",s.level]})]}),r.jsxs("div",{className:"text-right",children:[r.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[s.coins," 🪙"]}),r.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",a.rank]})]})]}),r.jsxs("div",{className:"mb-3",children:[r.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[r.jsx("span",{children:"XP Progress"}),r.jsxs("span",{children:[i.current,"/",i.required]})]}),r.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${c}%`}})})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[r.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",a.streak]}),r.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),r.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[r.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",a.todayCoins]}),r.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),r.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${l} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[r.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),r.jsxs("div",{className:"relative flex items-start justify-between",children:[r.jsxs("div",{children:[r.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),r.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),r.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[r.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),r.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("button",{onClick:()=>e("/profile/history"),className:`${l} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[r.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),r.jsx("div",{className:"text-3xl mb-3",children:"📊"}),r.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),r.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),r.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",a.todayQuizzes," today"]})]}),r.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${l} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[r.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),r.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),r.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),r.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),r.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),r.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${l} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[r.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),r.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),r.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),r.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),r.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),r.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${l} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[r.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),r.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),r.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),r.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),r.jsxs("div",{className:"mt-4 space-y-3",children:[r.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[r.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${l} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"text-2xl",children:"🔥"}),r.jsxs("div",{children:[r.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),r.jsxs("div",{className:"text-[11px] opacity-80",children:[a.streak," days strong"]})]})]})}),r.jsx("button",{onClick:()=>e("/profile/quests"),className:`${l} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"text-2xl",children:"⚡"}),r.jsxs("div",{children:[r.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),r.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),r.jsx("button",{onClick:()=>e("/profile/settings"),className:`${l} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),r.jsxs("div",{children:[r.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),r.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),r.jsx("div",{className:"text-white/40",children:"→"})]})})]}),r.jsx("div",{className:"h-6"})]})}const es="🪙",ii={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},oi=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function Ag(){var h,w;const e=bt(),{player:t}=yn(),n={global:ii.global.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y),friends:ii.friends.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y),india:ii.india.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",n.friends[0]);const[s,i]=u.useState({days:2,hours:14,minutes:17}),[o,a]=u.useState("global"),l=n[o]||n.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(h=l.find(y=>y.you))==null?void 0:h.score);const c=l.find(y=>y.you),d=l.slice(0,3),f=l.slice(3);u.useEffect(()=>{const y=j=>{j.preventDefault(),e(-1)};return window.addEventListener("popstate",y),()=>{window.removeEventListener("popstate",y)}},[e]),u.useEffect(()=>{const y=setInterval(()=>{i(j=>j.minutes>0?{...j,minutes:j.minutes-1}:j.hours>0?{...j,hours:j.hours-1,minutes:59}:j.days>0?{...j,days:j.days-1,hours:23,minutes:59}:j)},6e4);return()=>clearInterval(y)},[]);const p=y=>{const j=Math.max(...l.map(g=>g.score)),S=y/j*100;return S>=90?oi[0]:S>=70?oi[1]:S>=40?oi[2]:oi[3]};return r.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[r.jsxs("div",{className:"flex items-center justify-between mb-5",children:[r.jsx("button",{onClick:()=>e("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),r.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),r.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),r.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${p(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[r.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),r.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),r.jsxs("div",{className:"relative z-10",children:[r.jsx("div",{className:"text-2xl mb-1",children:p(c==null?void 0:c.score).icon}),r.jsxs("div",{className:"text-sm font-bold text-white",children:[p(c==null?void 0:c.score).name," League"]}),r.jsx("div",{className:"text-xs text-white/80",children:o==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),r.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:ii.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(y=>r.jsxs("button",{onClick:()=>a(y.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${o===y.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[r.jsx("div",{children:y.label}),r.jsx("div",{className:`text-[10px] ${o===y.key?"text-black/70":"text-white/60"}`,children:y.count})]},y.key))}),r.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),r.jsxs("div",{children:[r.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),r.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[r.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),r.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),r.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",o==="global"?"Global":o==="friends"?"Friends":"India"]})]})]})]}),r.jsxs("div",{className:"text-right",children:[r.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",es]}),r.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),r.jsxs("div",{className:"mb-6",children:[r.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),r.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[r.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),r.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),r.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),r.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),r.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[d[1]&&r.jsxs("div",{className:"flex flex-col items-center",children:[r.jsxs("div",{className:"relative mb-2",children:[r.jsx(ai,{src:d[1].avatar,fallback:d[1].name,size:56}),r.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),r.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:li(d[1].name,8)}),r.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[d[1].score," ",es]})]}),d[0]&&r.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[r.jsxs("div",{className:"relative mb-2",children:[r.jsx(ai,{src:d[0].avatar,fallback:d[0].name,size:72}),r.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:r.jsx(Fg,{})}),r.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),r.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:li(d[0].name,8)}),r.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[d[0].score," ",es]}),r.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),d[2]&&r.jsxs("div",{className:"flex flex-col items-center",children:[r.jsxs("div",{className:"relative mb-2",children:[r.jsx(ai,{src:d[2].avatar,fallback:d[2].name,size:56}),r.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),r.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:li(d[2].name,8)}),r.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[d[2].score," ",es]})]})]})]})]}),f.length>0&&r.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[r.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[r.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),r.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),r.jsx("ul",{className:"space-y-1.5",children:f.map((y,j)=>r.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${y.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${j*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[r.jsxs("div",{className:"flex items-center gap-2.5",children:[r.jsx(Og,{n:y.rank,you:y.you}),r.jsx(ai,{src:y.avatar,fallback:y.name,size:36}),r.jsxs("div",{className:"flex flex-col leading-tight",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-sm font-semibold",children:li(y.name,12)}),r.jsx("span",{className:"text-xs",children:y.country}),y.friend&&r.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),r.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${y.you?"text-black/70":"text-white/60"}`,children:[r.jsx("span",{children:y.handle}),r.jsxs("span",{children:["🔥",y.streak]})]})]})]}),r.jsxs("div",{className:"flex flex-col items-end",children:[r.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[r.jsx("span",{children:y.score}),r.jsx("span",{className:y.you?"opacity-90":"opacity-80",children:es})]}),r.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${y.trend.startsWith("+")?"bg-green-500/20 text-green-400":y.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:y.trend})]})]},`${o}-${y.rank}`))})]}),c&&c.rank>1&&r.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[r.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),r.jsx("div",{className:"text-xs text-white/70 mb-3",children:o==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((w=l[c.rank-2])==null?void 0:w.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(o==="friends"&&c.rank===1)&&r.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),r.jsx("style",{jsx:!0,children:`
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
      `})]})}function ai({src:e,fallback:t,size:n=56}){const s=$g(t);return r.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:n,height:n},children:e?r.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):r.jsx("span",{className:"text-sm font-semibold",children:s})})}function Fg(){return r.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[r.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[r.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),r.jsx("defs",{children:r.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[r.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),r.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),r.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function Og({n:e,you:t}){return r.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function li(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function $g(e=""){var n;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((n=t[1])==null?void 0:n[0])||"")).toUpperCase()}const Bg="qp_recent",Ug="qp_review_snapshot",_d=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function qg(){const[e,t]=u.useState("quizzes"),[n,s]=u.useState(null),[i,o]=u.useState(!1),[a,l]=u.useState("all"),[c,d]=u.useState("all"),[f,p]=u.useState("date"),[h,w]=u.useState([]),[y,j]=u.useState(!0),S=bt(),g=k=>{if(!k)return"00:00";const v=Math.floor(k/1e3),b=Math.floor(v/60),N=v%60;return`${String(b).padStart(2,"0")}:${String(N).padStart(2,"0")}`},m=k=>{if(!k)return"Unknown";const v=new Date(k),N=Math.floor((new Date-v)/(1e3*60*60*24));return N===0?"Today":N===1?"Yesterday":N<7?`${N} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][v.getMonth()]} ${v.getDate()}`};u.useEffect(()=>{let k=!1;j(!0);const v=_=>{try{return JSON.parse(_)}catch{return null}},b=_=>encodeURIComponent(String(_).trim().toLowerCase().replace(/\s+/g,"-")),N=_=>{var P,$,O,ne;const A=Number(_.ts??_.timestamp??_.id)||Date.now(),q=Number(_.ms)||0,J=Number(_.total)||0,W=Number(_.correct)||0,D=String(_.mode||"").toLowerCase().includes("practice")?"practice":"quiz",E=((P=_.snapshot)==null?void 0:P.category)||(($=_.snapshot)==null?void 0:$.categoryLabel)||_.cat||_.category||"Unknown",L=((O=_.snapshot)==null?void 0:O.categoryParam)||b(E),M=String(((ne=_.snapshot)==null?void 0:ne.difficulty)||_.difficulty||"medium").toLowerCase();return{id:_.id??A,type:D,category:E,categoryParam:L,difficulty:M,score:W,total:J,accuracy:J?Math.round(W/J*100):0,time:g(q),ms:q,date:m(A),timestamp:A,snapshot:_.snapshot??null,mode:_.mode||(D==="practice"?"Practice":"Quiz")}};try{const _=localStorage.getItem(Bg),A=_?v(_):null,J=(Array.isArray(A)&&A.length?A:_d).map(N).filter(W=>W&&W.timestamp).sort((W,G)=>G.timestamp-W.timestamp);k||w(J)}catch(_){console.error("Error loading history:",_),k||w(_d)}finally{k||j(!1)}return()=>{k=!0}},[]);const x=u.useMemo(()=>{const k=new Set(h.map(v=>v.category));return Array.from(k)},[h]),C=u.useMemo(()=>{let k=h.filter(v=>e==="quizzes"?v.type==="quiz":v.type==="practice");return a!=="all"&&(k=k.filter(v=>v.category===a)),c!=="all"&&(k=k.filter(v=>v.difficulty===c)),k.sort((v,b)=>f==="date"?b.timestamp-v.timestamp:f==="score"?b.accuracy-v.accuracy:f==="time"?v.ms-b.ms:0),k},[h,e,a,c,f]),R=u.useMemo(()=>{if(C.length===0)return null;const k=C.reduce((_,A)=>_+A.score,0),v=C.reduce((_,A)=>_+A.total,0),b=v?Math.round(k/v*100):0,N=C.reduce((_,A)=>_+A.ms,0);return{count:C.length,avgAccuracy:b,totalTime:g(N),bestScore:Math.max(...C.map(_=>_.accuracy))}},[C]),z=k=>k>=80?"text-green-400":k>=60?"text-blue-400":k>=40?"text-yellow-400":"text-red-400";return y?r.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:r.jsx("div",{className:"text-white",children:"Loading history..."})}):r.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[r.jsx("div",{className:"",children:r.jsxs("div",{className:"px-4 pt-4 pb-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("button",{onClick:()=>S("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),r.jsx("button",{onClick:()=>o(!i),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:r.jsx(Hg,{})})]}),r.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),r.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),r.jsxs("div",{className:"px-4 pb-20",children:[r.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:r.jsx("div",{className:"flex items-center",children:r.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(k=>r.jsxs("button",{onClick:()=>t(k.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===k.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[r.jsx("span",{className:"mr-1",children:k.icon}),k.label]},k.value))})})}),R&&r.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:r.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[r.jsx(ci,{label:"Total",value:R.count}),r.jsx(ci,{label:"Avg Score",value:`${R.avgAccuracy}%`,color:z(R.avgAccuracy)}),r.jsx(ci,{label:"Best Score",value:`${R.bestScore}%`,color:"text-green-400"}),r.jsx(ci,{label:"Total Time",value:R.totalTime})]})}),i&&r.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),r.jsxs("select",{value:a,onChange:k=>l(k.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[r.jsx("option",{value:"all",children:"All Categories"}),x.map(k=>r.jsx("option",{value:k,children:k},k))]})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),r.jsxs("select",{value:c,onChange:k=>d(k.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[r.jsx("option",{value:"all",children:"All"}),r.jsx("option",{value:"easy",children:"Easy"}),r.jsx("option",{value:"medium",children:"Medium"}),r.jsx("option",{value:"hard",children:"Hard"})]})]}),r.jsxs("div",{className:"flex-1",children:[r.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),r.jsxs("select",{value:f,onChange:k=>p(k.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[r.jsx("option",{value:"date",children:"Date"}),r.jsx("option",{value:"score",children:"Score"}),r.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),C.length===0?r.jsxs("div",{className:"text-center py-12",children:[r.jsx("div",{className:"text-4xl mb-3",children:"📚"}),r.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),r.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):r.jsx("div",{className:"space-y-3",children:C.map((k,v)=>r.jsx(Qg,{item:k,index:v,onClick:()=>s(k)},k.id))})]}),n&&r.jsx(Yg,{item:n,onClose:()=>s(null)})]})}function ci({label:e,value:t,color:n="text-white"}){return r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),r.jsx("div",{className:`text-lg font-bold ${n}`,children:t})]})}function Qg({item:e,index:t,onClick:n}){const s=a=>a>=80?"from-green-500/20 to-green-600/10 border-green-500/30":a>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":a>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",o=(a=>{const l=a==null?void 0:a.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return r.jsxs("div",{onClick:n,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[r.jsxs("div",{className:"flex items-start justify-between mb-3",children:[r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[r.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),r.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${o.bg} ${o.text} ${o.border} border`,children:e.difficulty}),r.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),r.jsxs("div",{className:"text-right",children:[r.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),r.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),r.jsxs("div",{className:"flex items-center justify-between text-xs",children:[r.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[r.jsxs("span",{children:["⏱ ",e.time]}),r.jsx("span",{children:e.mode})]}),r.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function Yg({item:e,onClose:t}){const n=bt();return u.useEffect(()=>{const s=i=>{i.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),r.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:r.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),r.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-white/60",children:"Category"}),r.jsx("span",{className:"text-white font-medium",children:e.category})]}),r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-white/60",children:"Difficulty"}),r.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-white/60",children:"Score"}),r.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-white/60",children:"Accuracy"}),r.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-white/60",children:"Time"}),r.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&r.jsx("button",{onClick:()=>{t(),localStorage.setItem(Ug,JSON.stringify(e.snapshot)),n(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),r.jsx("button",{onClick:()=>{var s;t(),n(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function Hg(){return r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Wg=u.createContext({});function p0(e){const t=u.useRef(null);return t.current===null&&(t.current=e()),t.current}const Vg=typeof window<"u",Gg=Vg?u.useLayoutEffect:u.useEffect,x0=u.createContext(null);function Xg(e){return typeof e=="object"&&e!==null}function Kg(e){return Xg(e)&&"offsetHeight"in e}const Jg=u.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Zg extends u.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const s=n.offsetParent,i=Kg(s)&&s.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function ev({children:e,isPresent:t,anchorX:n,root:s}){const i=u.useId(),o=u.useRef(null),a=u.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=u.useContext(Jg);return u.useInsertionEffect(()=>{const{width:c,height:d,top:f,left:p,right:h}=a.current;if(t||!o.current||!c||!d)return;const w=n==="left"?`left: ${p}`:`right: ${h}`;o.current.dataset.motionPopId=i;const y=document.createElement("style");l&&(y.nonce=l);const j=s??document.head;return j.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${d}px !important;
            ${w}px !important;
            top: ${f}px !important;
          }
        `),()=>{j.contains(y)&&j.removeChild(y)}},[t]),r.jsx(Zg,{isPresent:t,childRef:o,sizeRef:a,children:u.cloneElement(e,{ref:o})})}const tv=({children:e,initial:t,isPresent:n,onExitComplete:s,custom:i,presenceAffectsLayout:o,mode:a,anchorX:l,root:c})=>{const d=p0(nv),f=u.useId();let p=!0,h=u.useMemo(()=>(p=!1,{id:f,initial:t,isPresent:n,custom:i,onExitComplete:w=>{d.set(w,!0);for(const y of d.values())if(!y)return;s&&s()},register:w=>(d.set(w,!1),()=>d.delete(w))}),[n,d,s]);return o&&p&&(h={...h}),u.useMemo(()=>{d.forEach((w,y)=>d.set(y,!1))},[n]),u.useEffect(()=>{!n&&!d.size&&s&&s()},[n]),a==="popLayout"&&(e=r.jsx(ev,{isPresent:n,anchorX:l,root:c,children:e})),r.jsx(x0.Provider,{value:h,children:e})};function nv(){return new Map}function rv(e=!0){const t=u.useContext(x0);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:i}=t,o=u.useId();u.useEffect(()=>{if(e)return i(o)},[e]);const a=u.useCallback(()=>e&&s&&s(o),[o,s,e]);return!n&&s?[!1,a]:[!0]}const di=e=>e.key||"";function Rd(e){const t=[];return u.Children.forEach(e,n=>{u.isValidElement(n)&&t.push(n)}),t}const Xo=({children:e,custom:t,initial:n=!0,onExitComplete:s,presenceAffectsLayout:i=!0,mode:o="sync",propagate:a=!1,anchorX:l="left",root:c})=>{const[d,f]=rv(a),p=u.useMemo(()=>Rd(e),[e]),h=a&&!d?[]:p.map(di),w=u.useRef(!0),y=u.useRef(p),j=p0(()=>new Map),[S,g]=u.useState(p),[m,x]=u.useState(p);Gg(()=>{w.current=!1,y.current=p;for(let z=0;z<m.length;z++){const k=di(m[z]);h.includes(k)?j.delete(k):j.get(k)!==!0&&j.set(k,!1)}},[m,h.length,h.join("-")]);const C=[];if(p!==S){let z=[...p];for(let k=0;k<m.length;k++){const v=m[k],b=di(v);h.includes(b)||(z.splice(k,0,v),C.push(v))}return o==="wait"&&C.length&&(z=C),x(Rd(z)),g(p),null}const{forceRender:R}=u.useContext(Wg);return r.jsx(r.Fragment,{children:m.map(z=>{const k=di(z),v=a&&!d?!1:p===m||h.includes(k),b=()=>{if(j.has(k))j.set(k,!0);else return;let N=!0;j.forEach(_=>{_||(N=!1)}),N&&(R==null||R(),x(y.current),a&&(f==null||f()),s&&s())};return r.jsx(tv,{isPresent:v,initial:!w.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:v?void 0:b,anchorX:l,children:z},k)})})},sv=()=>{const[e,t]=u.useState(null);u.useEffect(()=>{if(typeof window<"u"){const F=sessionStorage.getItem("navigationSource");F&&t(F)}},[]);const n=F=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=F)},s=()=>{if(typeof window<"u"){const F=sessionStorage.getItem("navigationSource");window.location.href="/profile",sessionStorage.removeItem("navigationSource")}},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},{player:a,addCoins:l}=yn(),[c,d]=u.useState(4),[f,p]=u.useState((a==null?void 0:a.coins)||0),[h,w]=u.useState(4),[y,j]=u.useState(!1),[S,g]=u.useState(!1),[m,x]=u.useState(0),[C,R]=u.useState(0),[z,k]=u.useState("cycle"),[v,b]=u.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[N,_]=u.useState([0,1,2,3]),[A,q]=u.useState(!1),[J,W]=u.useState(!1),[G,D]=u.useState(null),[E,L]=u.useState(null),[M,P]=u.useState(!1),[$,O]=u.useState(null),[ne,B]=u.useState(!1),te=u.useRef(null),ae=u.useRef(null),T=u.useRef(null);u.useEffect(()=>{te.current=new Audio("/sounds/reward.mp3"),ae.current=new Audio("/sounds/reward_progress.mp3"),[te,ae].forEach(F=>{var Q;(Q=F.current)==null||Q.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const I=F=>{try{F.current&&(F.current.currentTime=0,F.current.play().catch(Q=>console.log("Audio play failed:",Q)))}catch(Q){console.log("Sound play error:",Q)}},Y=(F,Q)=>{if(F>c){L(Q),W(!0);return}F===c&&Z(F,Q)},V=F=>{var K;const Q=(K=T.current)==null?void 0:K.querySelector(`[data-index="${F}"]`);if(Q){const ie=Q.getBoundingClientRect(),ke=window.pageYOffset||document.documentElement.scrollTop,fe=ie.top+ke-window.innerHeight/2+50;window.scrollTo({top:fe,behavior:"smooth"})}},Z=(F,Q)=>{if(!N.includes(F)){if(Q.cost>0&&f<Q.cost){L(Q),W(!0);return}Q.cost>0&&(p(K=>K-Q.cost),l(-Q.cost)),I(te),q(!0),L(Q),_(K=>[...K,F]),setTimeout(()=>{q(!1),Q.type==="coins"?(x(Q.value),j(!0),setTimeout(()=>{p(K=>K+Q.value),l(Q.value),setTimeout(()=>{j(!1),x(0)},500)},300)):Q.type==="life"?(R(Q.value),g(!0),setTimeout(()=>{w(K=>K+Q.value),setTimeout(()=>{g(!1),R(0)},500)},300)):(O({icon:Q.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{O(null),B(!0),X(Q),Q.type==="vehicle"&&k(Q.value),setTimeout(()=>{B(!1)},500)},800)),setTimeout(()=>{if(c<i.length-1){const K=c+1;V(K),setTimeout(()=>{P(!0),I(ae),d(K),setTimeout(()=>{P(!1)},500)},300)}},1200)},1500)}},X=F=>{b(Q=>Q.find(ie=>ie.icon===F.icon)?Q.map(ie=>ie.icon===F.icon?{...ie,count:ie.count+1}:ie):[...Q,{type:F.type,icon:F.icon,name:F.label,count:1}])},U=F=>30+F*100,ee=()=>30+c*100;return r.jsxs("div",{className:"rewards-page",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsx("div",{className:"non-sticky-header",children:r.jsx("button",{className:"back-button",onClick:s,children:"← Back"})}),r.jsxs("div",{className:"sticky-section",children:[r.jsxs("div",{className:"header-wrapper",children:[r.jsxs("div",{className:"title-row",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"title",children:"Rewards"}),r.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),r.jsx("button",{className:"play-quiz-btn",onClick:()=>n("/play"),children:"Play Quiz"})]}),r.jsx("div",{className:"balance-row",children:r.jsx("div",{className:"balance-item",children:r.jsxs("div",{children:[r.jsx("div",{className:"balance-label",children:"Balance"}),r.jsxs("div",{className:`balance-value ${y?"animating":""}`,children:[f.toLocaleString()," 🪙",y&&r.jsxs("span",{className:"value-change",children:["+",m]})]})]})})})]}),r.jsx("div",{className:"stats-cards-container",children:r.jsxs("div",{className:"info-grid",children:[r.jsxs("div",{className:"info-card",children:[r.jsx("div",{className:"info-icon",children:"❤️"}),r.jsxs("div",{className:`info-value ${S?"animating":""}`,children:[h,S&&r.jsxs("span",{className:"value-change",children:["+",C]})]}),r.jsx("div",{className:"info-label",children:"Lives"})]}),r.jsxs("div",{className:"info-card",children:[r.jsx("div",{className:"info-icon",children:"⭐"}),r.jsx("div",{className:"info-value",children:"5"}),r.jsx("div",{className:"info-label",children:"Level"})]}),r.jsxs("div",{className:"info-card",children:[r.jsx("div",{className:"info-icon",children:o[z].icon}),r.jsx("div",{className:"info-value",children:o[z].name}),r.jsx("div",{className:"info-label",children:"Vehicle"})]}),r.jsxs("div",{className:`cards-section ${ne?"animating":""}`,children:[r.jsx("div",{className:"cards-label",children:"Your Cards"}),r.jsx("div",{className:"card-grid",children:v.map((F,Q)=>r.jsxs("div",{className:"card-item",onClick:()=>D(F),children:[r.jsxs("div",{className:"large-card",children:[r.jsx("div",{className:"large-card-icon",children:F.icon}),r.jsx("div",{className:"large-card-name",children:F.name})]}),F.count>1&&r.jsx("div",{className:"card-count-badge",children:F.count})]},Q))})]})]})})]}),r.jsx("div",{className:"scrollable-journey",children:r.jsx("div",{className:"journey-container",ref:T,children:r.jsxs("div",{className:"journey-track",children:[r.jsx("div",{className:"curvy-road",children:r.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[r.jsx("defs",{children:r.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[r.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),r.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),r.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),r.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-c/(i.length-1)*1500})]})}),r.jsxs("div",{className:"avatar-tracker",style:{top:`${ee()}px`},children:[r.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:F=>{F.target.style.display="none"}}),r.jsx("div",{className:"tracker-vehicle",children:o[z].icon})]}),r.jsx("div",{className:"rewards-list",children:i.map((F,Q)=>{const K=Q%2===0,ie=Q>c,ke=N.includes(Q),fe=Q===c;return r.jsx("div",{className:"reward-row","data-index":Q,style:{top:`${U(Q)}px`},children:r.jsxs("div",{className:`reward-item ${K?"left":"right"}`,children:[r.jsxs("div",{className:`checkpoint ${fe?"current":ke?"claimed":ie?"locked":""}`,onClick:()=>Y(Q,F),children:[r.jsx("div",{className:"checkpoint-icon",children:F.icon}),r.jsx("div",{className:"checkpoint-value",children:F.label.split(" ")[0]}),F.milestone&&r.jsx("div",{className:"milestone-badge",children:"BONUS"}),ie&&r.jsx("div",{className:"lock-icon",children:"🔒"})]}),r.jsxs("div",{className:"reward-info",children:[r.jsx("div",{className:"reward-name",children:F.label}),r.jsxs("div",{className:"step-label",children:["Step ",Q+1]})]})]})},F.id)})})]})})}),$&&r.jsx("div",{className:"flying-card",style:{left:`${$.startX}px`,top:`${$.startY}px`,"--startX":`${$.startX}px`},children:$.icon}),r.jsx(Xo,{children:G&&r.jsx("div",{className:"claim-overlay",onClick:()=>D(null),children:r.jsxs("div",{className:"modal",onClick:F=>F.stopPropagation(),children:[r.jsx("div",{className:"modal-icon",children:G.icon}),r.jsx("div",{className:"card-detail-name",children:G.name}),r.jsxs("div",{className:"card-detail-desc",children:["You have ",G.count," of these cards"]}),r.jsx("div",{className:"modal-buttons",children:r.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>D(null),children:"Close"})})]})})}),r.jsx(Xo,{children:A&&E&&r.jsx("div",{className:"claim-overlay",children:r.jsxs("div",{className:"modal",children:[r.jsx("div",{className:"modal-title",children:"WELL DONE!"}),r.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),r.jsx("div",{className:"modal-icon",children:E.icon}),r.jsxs("div",{className:"modal-value",children:["+",E.value," ",E.type==="coins"?"Coins":E.type==="life"?"Lives":E.label]})]})})}),r.jsx(Xo,{children:J&&E&&r.jsx("div",{className:"claim-overlay",onClick:()=>W(!1),children:r.jsxs("div",{className:"modal",onClick:F=>F.stopPropagation(),children:[r.jsx("div",{className:"modal-icon",children:"🪙"}),r.jsx("div",{className:"modal-title",children:"Need More Coins"}),r.jsx("div",{className:"modal-subtitle",children:E.cost>0?`You need ${E.cost-f} more coins`:"Complete previous rewards first"}),r.jsxs("div",{className:"modal-buttons",children:[r.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>n("/play"),children:"Play Quiz"}),r.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>W(!1),children:"Cancel"})]})]})})})]})},ui=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function iv(){const[e,t]=u.useState(null),n=ui.filter(i=>i.unlocked).length,s=Math.round(n/ui.length*100);return r.jsxs("div",{className:"badges-screen",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:"header",children:[r.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),r.jsxs("div",{className:"title-section",children:[r.jsx("h1",{className:"main-title",children:"Badge Collection"}),r.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),r.jsxs("div",{className:"progress-card",children:[r.jsxs("div",{className:"progress-header",children:[r.jsx("span",{className:"progress-label",children:"Collection Progress"}),r.jsxs("span",{className:"progress-value",children:[n,"/",ui.length]})]}),r.jsx("div",{className:"progress-bar-container",children:r.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),r.jsx("div",{className:"badges-grid",children:ui.map(i=>r.jsxs("div",{className:`badge-card ${i.unlocked?"unlocked":""}`,style:{"--badge-color":i.color},onClick:()=>t(i),children:[r.jsx("div",{className:"badge-glow"}),r.jsx("div",{className:"badge-emoji",children:i.emoji}),r.jsx("div",{className:"badge-name",children:i.name}),!i.unlocked&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"badge-progress",children:r.jsx("div",{className:"badge-progress-fill",style:{width:`${i.progress}%`}})}),r.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},i.id))}),r.jsxs("div",{className:"tips-card",children:[r.jsxs("div",{className:"tips-title",children:[r.jsx("span",{children:"💡"}),r.jsx("span",{children:"Pro Tip"})]}),r.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&r.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:r.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[r.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),r.jsx("h3",{className:"modal-title",children:e.name}),r.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),r.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&r.jsxs("div",{className:"modal-progress-section",children:[r.jsx("div",{className:"modal-progress-label",children:"Progress"}),r.jsx("div",{className:"modal-progress-bar",children:r.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),r.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),r.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const ov=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function av(){const{player:e,addCoins:t}=yn(),[n,s]=u.useState(ov),[i,o]=u.useState(null),[a,l]=u.useState((e==null?void 0:e.coins)||0),[c,d]=u.useState(!1),[f,p]=u.useState([]),h=n.length,w=n.filter(S=>S.current>=S.target).length,y=Math.round(w/h*100);u.useEffect(()=>{const S=setInterval(()=>{p(g=>{const m={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...g.slice(-4),m]})},3e3);return()=>clearInterval(S)},[]);const j=(S,g)=>{o(S),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{s(m=>m.map(x=>x.id===S?{...x,claimed:!0}:x)),l(m=>m+g),o(null),d(!0),setTimeout(()=>d(!1),2e3)},600)};return r.jsxs("div",{className:"achievements-screen",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:"floating-shapes",children:[r.jsx("div",{className:"shape shape-1"}),r.jsx("div",{className:"shape shape-2"})]}),r.jsxs("div",{className:"header",children:[r.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),r.jsxs("div",{className:"coins-display",children:["🪙 ",a.toLocaleString()]}),r.jsxs("div",{className:"title-section",children:[r.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),r.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),r.jsxs("div",{className:"progress-overview",children:[r.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),r.jsxs("div",{className:"overview-header",children:[r.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),r.jsxs("div",{className:"overview-stats",children:[r.jsx("span",{className:"trophy-icon",children:"🏆"}),r.jsxs("span",{className:"overview-value",children:[w,"/",h]})]})]}),r.jsx("div",{className:"progress-bar-main",children:r.jsx("div",{className:"progress-fill-main",style:{width:`${y}%`}})})]}),r.jsx("div",{className:"achievements-list",children:n.map(S=>{const g=Math.min(100,Math.round(S.current/S.target*100)),m=g===100,x=S.color+"CC";return r.jsxs("div",{className:`achievement-card ${m?"completed":""}`,style:{"--card-color":S.color,"--card-color-dark":x},children:[r.jsx("div",{className:"card-glow"}),m&&S.claimed&&r.jsx("div",{className:"completed-badge",children:"✓"}),r.jsxs("div",{className:"card-content",children:[r.jsx("div",{className:"achievement-icon",children:S.icon}),r.jsxs("div",{className:"achievement-details",children:[r.jsx("div",{className:"achievement-title",children:S.title}),r.jsx("div",{className:"achievement-subtitle",children:S.subtitle}),r.jsxs("div",{className:"progress-container",children:[r.jsx("div",{className:"progress-bar",children:r.jsx("div",{className:"progress-fill",style:{width:`${g}%`}})}),r.jsxs("div",{className:"progress-text",children:[r.jsxs("span",{children:[S.current,"/",S.target]}),r.jsxs("span",{className:"reward-badge",children:["🪙 ",S.reward]})]})]})]}),r.jsx("button",{onClick:()=>j(S.id,S.reward),disabled:!m||S.claimed,className:`claim-button ${S.claimed?"claimed":m?"can-claim":"in-progress"} ${i===S.id?"claiming":""}`,children:S.claimed?"✓":m?"CLAIM!":`${g}%`})]})]},S.id)})}),c&&r.jsx("div",{className:"celebration",children:"🎉"})]})}function lv(){const{player:e,addCoins:t,updateDailyStreak:n}=yn(),s=(e==null?void 0:e.currentStreak)||0,i=(e==null?void 0:e.bestStreak)||0,o=(e==null?void 0:e.totalDays)||0,a=(e==null?void 0:e.coins)||0,l=new Date,c=l.getDay(),d=()=>{const M=new Date(l);return M.setDate(l.getDate()-l.getDay()),M.toISOString().split("T")[0]},[f,p]=u.useState(null),[h,w]=u.useState(!1),[y,j]=u.useState(null),[S,g]=u.useState(null),[m,x]=u.useState(!1),C=u.useRef(null),R=u.useRef(null),[z]=It("/sounds/coin.mp3",{volume:.75}),[k]=It("/sounds/correct.mp3",{volume:.6}),[v,b]=u.useState(()=>{const M=localStorage.getItem("streaks_claimed")||"[]",P=JSON.parse(M),$=d(),O=P.filter(ne=>ne!==`week_${$}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(O)),O});u.useEffect(()=>{const M=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const $=document.querySelector("main");$&&($.scrollTop=0)};M(),requestAnimationFrame(M);const P=setTimeout(M,100);return()=>clearTimeout(P)},[]),u.useEffect(()=>{x(!0),setTimeout(()=>x(!1),3e3)},[]);const N=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],_=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],A=M=>{const P=v.includes(`week_${d()}_day_${M}`);if(M===0)return{isCompleted:!0,isClaimed:P,canClaim:!P,isLocked:!1};const $=s>=M,O=$&&!P,ne=s<M;return{isCompleted:$,isClaimed:P,canClaim:O,isLocked:ne}},q=(M,P,$)=>{const O=A(P);if(O.isLocked){g({day:P,currentStreak:s}),setTimeout(()=>g(null),2e3);return}O.isClaimed||O.canClaim&&(p({...M,day:P}),w(!1),setTimeout(()=>{w(!0),k(),setTimeout(()=>{if(M.type==="coins"){const te=parseInt(M.reward);if(R.current&&C.current){const ae=R.current.getBoundingClientRect();z(),j({startRect:ae,count:10,amount:te})}}const ne=`week_${d()}_day_${P}`,B=[...v,ne];b(B),localStorage.setItem("streaks_claimed",JSON.stringify(B))},500),setTimeout(()=>{p(null),w(!1)},2500)},500))},J=(M,P)=>{const $=P+1,O=N[P].dayIndex===c;return s>=$?O?"today-completed":"completed":O?"today-pending":$<=s+1?"pending":"future"},W=[{days:3,emoji:"⚡",label:"Starter",achieved:s>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:s>=7},{days:30,emoji:"💎",label:"Champion",achieved:s>=30},{days:100,emoji:"👑",label:"Legend",achieved:s>=100}],G=W.find(M=>M.days>s)||W[W.length-1],D=Math.min(100,s/G.days*100),E=()=>{window.location.href="/play"},L=()=>{window.location.href="/profile"};return r.jsxs("div",{className:"streaks-screen",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),y&&r.jsx(Vl,{startRect:y.startRect,targetRef:C,count:y.count,onDone:()=>{t(y.amount),j(null)}}),r.jsxs("div",{className:"header",children:[r.jsxs("div",{className:"header-top",children:[r.jsx("button",{className:"back-button",onClick:L,children:"← Back"}),r.jsxs("div",{className:"coin-pill",ref:C,id:"coin-pill",children:[r.jsx("span",{className:"coin-icon",children:"🪙"}),r.jsx("span",{className:"coin-amount",children:a})]})]}),r.jsxs("div",{className:"title-section",children:[r.jsx("h1",{className:"main-title",children:"STREAKS"}),r.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),r.jsxs("div",{className:"streak-hero",children:[r.jsx("div",{className:"fire-animation",children:"🔥"}),r.jsx("div",{className:"streak-number",children:s}),r.jsx("div",{className:"streak-label",children:"DAY STREAK"}),r.jsxs("div",{className:"stats-row",children:[r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-value",children:i}),r.jsx("div",{className:"stat-label",children:"Best Streak"})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-value",children:o}),r.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),r.jsxs("div",{className:"weekly-progress-card",children:[r.jsxs("div",{className:"weekly-header",children:[r.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),r.jsxs("div",{className:"weekly-counter",children:[r.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),r.jsxs("span",{className:"weekly-counter-text",children:[Math.min(s,7),"/7"]})]})]}),r.jsx("div",{className:"weekly-days",children:N.map((M,P)=>{const $=J(M.dayIndex,P),O=M.dayIndex===c;return r.jsxs("div",{className:"day-item",children:[r.jsx("div",{className:`day-circle ${$}`,children:$==="completed"||$==="today-completed"?"":M.short}),r.jsx("div",{className:`day-label ${O?"today":""}`,children:M.label})]},P)})}),r.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),r.jsx("div",{className:"rewards-grid",children:_.map((M,P)=>{const $=A(M.day);return r.jsxs("div",{className:`reward-item ${$.isLocked?"locked":$.canClaim?"can-claim":$.isClaimed?"completed":""}`,onClick:O=>q(M,M.day),children:[r.jsxs("div",{className:"reward-day",children:["Day ",M.day]}),r.jsx("div",{className:"reward-icon",children:M.icon}),r.jsx("div",{className:"reward-text",children:M.label})]},P)})})]}),r.jsxs("div",{className:"milestone-section",children:[r.jsx("div",{className:"milestone-header",children:"Next Milestone"}),r.jsxs("div",{className:"milestone-progress",children:[r.jsxs("div",{className:"milestone-info",children:[r.jsxs("div",{className:"milestone-current",children:[r.jsx("span",{className:"milestone-emoji",children:G.emoji}),r.jsx("span",{className:"milestone-text",children:G.label})]}),r.jsxs("span",{className:"milestone-target",children:[s,"/",G.days," days"]})]}),r.jsx("div",{className:"progress-bar-container",children:r.jsx("div",{className:"progress-bar-fill",style:{width:`${D}%`}})})]})]}),r.jsx("div",{className:"motivational-text",children:s===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${s} strong! Keep going to unlock more rewards!`}),r.jsxs("button",{className:"play-button",onClick:E,children:[r.jsx("span",{children:"Continue Streak"}),r.jsx("span",{children:"→"})]}),S&&r.jsxs("div",{className:"locked-message",children:[r.jsx("span",{className:"locked-message-icon",children:"🔒"}),r.jsx("span",{className:"locked-message-text",children:S.day===1&&S.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${S.day} streak to unlock this reward!`})]}),f&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"modal-overlay"}),r.jsx("div",{className:"reward-modal",ref:R,children:r.jsxs("div",{className:"gift-box",children:[r.jsxs("div",{className:"gift-box-body",children:[r.jsx("div",{className:"gift-box-ribbon"}),r.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),r.jsx("div",{className:`gift-box-lid ${h?"opening":""}`,children:r.jsx("div",{className:"gift-box-bow",children:"🎀"})}),r.jsxs("div",{className:`gift-content ${h?"show":""}`,children:[r.jsx("div",{className:"gift-content-icon",children:f.icon}),r.jsxs("div",{className:"gift-content-title",children:["Day ",f.day]}),r.jsx("div",{className:"gift-content-desc",children:f.label})]})]})})]}),m&&r.jsx("div",{className:"celebration",children:"🎉"})]})}const cv=[{id:1,title:"Play 3 quizzes today",progress:2,target:3,reward:60,claimed:!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy"},{id:2,title:"Score 8+ twice",progress:1,target:2,reward:80,claimed:!1,icon:"🎯",color:"#4ECDC4",difficulty:"Medium"},{id:3,title:"Practice 15 questions",progress:15,target:15,reward:100,claimed:!0,icon:"📚",color:"#FFD93D",difficulty:"Easy"},{id:4,title:"Win 5 in a row",progress:3,target:5,reward:150,claimed:!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard"},{id:5,title:"Complete a speed run",progress:0,target:1,reward:120,claimed:!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium"}];function dv(){const{player:e,addCoins:t}=yn(),[n,s]=u.useState(cv),[i,o]=u.useState((e==null?void 0:e.coins)||0),[a,l]=u.useState(null),[c,d]=u.useState(0);u.useEffect(()=>{const w=n.filter(y=>y.progress>=y.target).length;d(Math.round(w/n.length*100))},[n]);const f=(w,y)=>{navigator.vibrate&&navigator.vibrate([20,10,20]),l(w),setTimeout(()=>{s(j=>j.map(S=>S.id===w?{...S,claimed:!0}:S)),o(j=>j+y),t(y),l(null)},600)},p=w=>{switch(w){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},h=()=>{const w=new Date,y=new Date(w);y.setDate(y.getDate()+1),y.setHours(5,0,0,0);const j=y-w,S=Math.floor(j/(1e3*60*60)),g=Math.floor(j%(1e3*60*60)/(1e3*60));return`${S}h ${g}m`};return r.jsxs("div",{className:"quests-screen",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:"animated-bg",children:[r.jsx("div",{className:"floating-icon",children:"🎮"}),r.jsx("div",{className:"floating-icon",children:"🎯"}),r.jsx("div",{className:"floating-icon",children:"🏆"}),r.jsx("div",{className:"floating-icon",children:"⭐"})]}),r.jsxs("div",{className:"header",children:[r.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),r.jsxs("div",{className:"coins-display",children:["🪙 ",i]}),r.jsxs("div",{className:"title-section",children:[r.jsx("h1",{className:"main-title",children:"Daily Quests"}),r.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),r.jsxs("div",{className:"daily-progress-card",children:[r.jsxs("div",{className:"progress-header",children:[r.jsx("span",{className:"progress-label",children:"Today's Progress"}),r.jsxs("span",{className:"progress-value",children:[c,"%"]})]}),r.jsx("div",{className:"progress-bar-container",children:r.jsx("div",{className:"progress-bar-fill",style:{width:`${c}%`}})})]}),r.jsx("div",{className:"quests-list",children:n.map(w=>{const y=Math.min(100,Math.round(w.progress/w.target*100)),j=y===100,S=w.color+"CC";return r.jsxs("div",{className:`quest-card ${j?"completed":""}`,style:{"--quest-color":w.color,"--quest-color-dark":S},children:[r.jsx("div",{className:"quest-accent"}),j&&w.claimed&&r.jsx("div",{className:"completed-checkmark",children:"✓"}),r.jsxs("div",{className:"quest-content",children:[r.jsx("div",{className:`quest-icon-container ${a===w.id?"animating":""}`,children:w.icon}),r.jsxs("div",{className:"quest-details",children:[r.jsxs("div",{className:"quest-header",children:[r.jsx("span",{className:"quest-title",children:w.title}),r.jsx("span",{className:"difficulty-badge",style:{background:`${p(w.difficulty)}20`,color:p(w.difficulty)},children:w.difficulty})]}),r.jsxs("div",{className:"progress-info",children:[r.jsx("div",{className:"mini-progress-bar",children:r.jsx("div",{className:"mini-progress-fill",style:{width:`${y}%`}})}),r.jsxs("div",{className:"progress-text",children:[r.jsxs("span",{className:"progress-numbers",children:[w.progress,"/",w.target]}),r.jsxs("span",{className:"reward-display",children:["🪙 ",w.reward]})]})]})]}),r.jsx("button",{onClick:()=>j&&!w.claimed&&f(w.id,w.reward),disabled:w.claimed,className:`action-button ${w.claimed?"claimed":j?"can-claim":"in-progress"}`,style:!j&&!w.claimed?{"--quest-color":w.color,"--quest-color-dark":S}:{},children:w.claimed?"✓":j?"Claim":"Do it"})]})]},w.id)})}),r.jsxs("div",{className:"timer-card",children:[r.jsx("div",{className:"timer-icon",children:"⏰"}),r.jsx("div",{className:"timer-label",children:"New Quests In"}),r.jsx("div",{className:"timer-value",children:h()})]}),a&&r.jsx("div",{className:"reward-animation",children:"🪙"})]})}function uv({title:e,subtitle:t,children:n}){const s=bt();return r.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&r.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),r.jsx("div",{className:"w-[68px]"})]}),n]})}function fv(){const e=bt(),[t,n]=u.useState(!0),[s,i]=u.useState(!0),[o,a]=u.useState(!0);return r.jsxs(uv,{title:"Settings",subtitle:"Make it yours",children:[r.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[r.jsx(ts,{label:"Sound",right:r.jsx(Ko,{on:t,set:n})}),r.jsx(ts,{label:"Haptics",right:r.jsx(Ko,{on:s,set:i})}),r.jsx(ts,{label:"Notifications",right:r.jsx(Ko,{on:o,set:a})}),r.jsx(ts,{label:"Edit Profile",right:r.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),r.jsx(ts,{label:"Privacy Policy",right:r.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),r.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function ts({label:e,right:t,onClick:n}){return r.jsxs("button",{type:"button",onClick:n,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[r.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function Ko({on:e,set:t}){return r.jsx("span",{onClick:n=>{n.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:r.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}const mv={name:"Player",avatar:"wizard",level:1,totalXP:0,coins:0,energy:at.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function hv(){const[e,t]=u.useState(()=>{const d=localStorage.getItem(at.STORAGE_KEYS.PLAYER);return d?JSON.parse(d):mv});u.useEffect(()=>{localStorage.setItem(at.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),u.useEffect(()=>{if(e.energy<at.MAX_ENERGY&&e.energyRegenAt){const d=setInterval(()=>{const f=Date.now();f>=e.energyRegenAt&&t(p=>({...p,energy:Math.min(p.energy+1,at.MAX_ENERGY),energyRegenAt:p.energy+1<at.MAX_ENERGY?f+at.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(d)}},[e.energy,e.energyRegenAt]);const n=u.useCallback(d=>{t(f=>{const p=f.totalXP+d,h=md(f.totalXP),w=md(p);let y=[...f.unlockedAvatars];return w>h&&at.AVATARS.forEach(j=>{j.unlockLevel===w&&!y.includes(j.id)&&y.push(j.id)}),{...f,totalXP:p,level:w,unlockedAvatars:y}})},[]),s=u.useCallback(d=>{const p=new Error().stack;console.log("[COINS DEBUG] ================"),console.log("[COINS DEBUG] Amount:",d),console.log("[COINS DEBUG] Called from:",p.split(`
`)[2]),console.log("[COINS DEBUG] Full trace:",p),t(h=>(console.log("[COINS DEBUG] Current:",h.coins,"→ New:",h.coins+d),{...h,coins:h.coins+d}))},[]),i=u.useCallback((d=1)=>e.energy<d?!1:(t(f=>({...f,energy:f.energy-d,energyRegenAt:f.energyRegenAt||Date.now()+at.ENERGY_REGEN_TIME})),!0),[e.energy]),o=u.useCallback(d=>{t(f=>{const p=d?f.comboStreak+1:0;return{...f,comboStreak:p,bestCombo:Math.max(f.bestCombo,p)}})},[]),a=u.useCallback(()=>{t(d=>({...d,comboStreak:0}))},[]),l=u.useCallback(d=>{e.unlockedAvatars.includes(d)&&t(f=>({...f,avatar:d}))},[e.unlockedAvatars]),c=u.useCallback(()=>{const d=new Date().toDateString();t(f=>{if(f.lastPlayedDate===d)return f;const p=new Date;p.setDate(p.getDate()-1);const h=p.toDateString();let w=f.currentStreak;return f.lastPlayedDate===h?w=f.currentStreak+1:(f.lastPlayedDate,w=1),{...f,currentStreak:w,bestStreak:Math.max(f.bestStreak,w),totalDays:f.totalDays+1,lastPlayedDate:d}})},[]);return{player:e,addXP:n,addCoins:s,useEnergy:i,updateCombo:o,resetCombo:a,changeAvatar:l,updateDailyStreak:c,levelProgress:_x(e.totalXP)}}const g0=u.createContext(null),yn=()=>{const e=u.useContext(g0);if(!e)throw new Error("useGame must be used within GameProvider");return e};function pv({children:e}){const t=hv();return r.jsx(g0.Provider,{value:t,children:e})}function xv(){return r.jsx(pv,{children:r.jsx(Up,{children:r.jsxs(nt,{element:r.jsx(Nx,{}),children:[r.jsx(nt,{path:"/",element:r.jsx(xd,{})}),r.jsx(nt,{path:"/play",element:r.jsx(lg,{})}),r.jsx(nt,{path:"/play/party",element:r.jsx(zg,{})}),r.jsx(nt,{path:"/profile",element:r.jsx(Ig,{})}),r.jsx(nt,{path:"/profile/leaderboard",element:r.jsx(Ag,{})}),r.jsx(nt,{path:"/profile/history",element:r.jsx(qg,{})}),r.jsx(nt,{path:"/profile/rewards",element:r.jsx(sv,{})}),r.jsx(nt,{path:"/profile/badges",element:r.jsx(iv,{})}),r.jsx(nt,{path:"/profile/achievements",element:r.jsx(av,{})}),r.jsx(nt,{path:"/profile/streaks",element:r.jsx(lv,{})}),r.jsx(nt,{path:"/profile/quests",element:r.jsx(dv,{})}),r.jsx(nt,{path:"/profile/settings",element:r.jsx(fv,{})}),r.jsx(nt,{path:"/swipe",element:r.jsx(Mg,{})}),r.jsx(nt,{path:"/leaders",element:r.jsx(Op,{to:"/profile/leaderboard",replace:!0})}),r.jsx(nt,{path:"/quiz/:category",element:r.jsx(kg,{})}),r.jsx(nt,{path:"*",element:r.jsx(xd,{})})]})})})}Jo.createRoot(document.getElementById("root")).render(r.jsx(pt.StrictMode,{children:r.jsx(fx,{children:r.jsx(xv,{})})}));export{y0 as c,Td as g};
