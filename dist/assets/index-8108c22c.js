(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();var Uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eu={exports:{}},mo={},tu={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=Symbol.for("react.element"),qf=Symbol.for("react.portal"),Qf=Symbol.for("react.fragment"),Yf=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),Hf=Symbol.for("react.provider"),Gf=Symbol.for("react.context"),Vf=Symbol.for("react.forward_ref"),Xf=Symbol.for("react.suspense"),Kf=Symbol.for("react.memo"),Jf=Symbol.for("react.lazy"),gc=Symbol.iterator;function Zf(e){return e===null||typeof e!="object"?null:(e=gc&&e[gc]||e["@@iterator"],typeof e=="function"?e:null)}var nu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ru=Object.assign,su={};function Gr(e,t,r){this.props=e,this.context=t,this.refs=su,this.updater=r||nu}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function au(){}au.prototype=Gr.prototype;function cl(e,t,r){this.props=e,this.context=t,this.refs=su,this.updater=r||nu}var dl=cl.prototype=new au;dl.constructor=cl;ru(dl,Gr.prototype);dl.isPureReactComponent=!0;var vc=Array.isArray,ou=Object.prototype.hasOwnProperty,ul={current:null},iu={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,t,r){var s,a={},o=null,i=null;if(t!=null)for(s in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)ou.call(t,s)&&!iu.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:Ys,type:e,key:o,ref:i,props:a,_owner:ul.current}}function e0(e,t){return{$$typeof:Ys,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ml(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ys}function t0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var yc=/\/+/g;function _o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?t0(""+e.key):t.toString(36)}function Na(e,t,r,s,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ys:case qf:i=!0}}if(i)return i=e,a=a(i),e=s===""?"."+_o(i,0):s,vc(a)?(r="",e!=null&&(r=e.replace(yc,"$&/")+"/"),Na(a,t,r,"",function(u){return u})):a!=null&&(ml(a)&&(a=e0(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(yc,"$&/")+"/")+e)),t.push(a)),1;if(i=0,s=s===""?".":s+":",vc(e))for(var l=0;l<e.length;l++){o=e[l];var c=s+_o(o,l);i+=Na(o,t,r,c,a)}else if(c=Zf(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=s+_o(o,l++),i+=Na(o,t,r,c,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Js(e,t,r){if(e==null)return e;var s=[],a=0;return Na(e,s,"","",function(o){return t.call(r,o,a++)}),s}function n0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var bt={current:null},ka={transition:null},r0={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:ka,ReactCurrentOwner:ul};function cu(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Js,forEach:function(e,t,r){Js(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Js(e,function(){t++}),t},toArray:function(e){return Js(e,function(t){return t})||[]},only:function(e){if(!ml(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};je.Component=Gr;je.Fragment=Qf;je.Profiler=Wf;je.PureComponent=cl;je.StrictMode=Yf;je.Suspense=Xf;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0;je.act=cu;je.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=ru({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=ul.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)ou.call(t,c)&&!iu.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:Ys,type:e.type,key:a,ref:o,props:s,_owner:i}};je.createContext=function(e){return e={$$typeof:Gf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hf,_context:e},e.Consumer=e};je.createElement=lu;je.createFactory=function(e){var t=lu.bind(null,e);return t.type=e,t};je.createRef=function(){return{current:null}};je.forwardRef=function(e){return{$$typeof:Vf,render:e}};je.isValidElement=ml;je.lazy=function(e){return{$$typeof:Jf,_payload:{_status:-1,_result:e},_init:n0}};je.memo=function(e,t){return{$$typeof:Kf,type:e,compare:t===void 0?null:t}};je.startTransition=function(e){var t=ka.transition;ka.transition={};try{e()}finally{ka.transition=t}};je.unstable_act=cu;je.useCallback=function(e,t){return bt.current.useCallback(e,t)};je.useContext=function(e){return bt.current.useContext(e)};je.useDebugValue=function(){};je.useDeferredValue=function(e){return bt.current.useDeferredValue(e)};je.useEffect=function(e,t){return bt.current.useEffect(e,t)};je.useId=function(){return bt.current.useId()};je.useImperativeHandle=function(e,t,r){return bt.current.useImperativeHandle(e,t,r)};je.useInsertionEffect=function(e,t){return bt.current.useInsertionEffect(e,t)};je.useLayoutEffect=function(e,t){return bt.current.useLayoutEffect(e,t)};je.useMemo=function(e,t){return bt.current.useMemo(e,t)};je.useReducer=function(e,t,r){return bt.current.useReducer(e,t,r)};je.useRef=function(e){return bt.current.useRef(e)};je.useState=function(e){return bt.current.useState(e)};je.useSyncExternalStore=function(e,t,r){return bt.current.useSyncExternalStore(e,t,r)};je.useTransition=function(){return bt.current.useTransition()};je.version="18.3.1";tu.exports=je;var d=tu.exports;const gt=Zd(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=d,a0=Symbol.for("react.element"),o0=Symbol.for("react.fragment"),i0=Object.prototype.hasOwnProperty,l0=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c0={key:!0,ref:!0,__self:!0,__source:!0};function du(e,t,r){var s,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(s in t)i0.call(t,s)&&!c0.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:a0,type:e,key:o,ref:i,props:a,_owner:l0.current}}mo.Fragment=o0;mo.jsx=du;mo.jsxs=du;eu.exports=mo;var n=eu.exports,ui={},uu={exports:{}},It={},mu={exports:{}},fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,z){var Y=R.length;R.push(z);e:for(;0<Y;){var D=Y-1>>>1,I=R[D];if(0<a(I,z))R[D]=z,R[Y]=I,Y=D;else break e}}function r(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var z=R[0],Y=R.pop();if(Y!==z){R[0]=Y;e:for(var D=0,I=R.length,A=I>>>1;D<A;){var G=2*(D+1)-1,re=R[G],Z=G+1,F=R[Z];if(0>a(re,Y))Z<I&&0>a(F,re)?(R[D]=F,R[Z]=Y,D=Z):(R[D]=re,R[G]=Y,D=G);else if(Z<I&&0>a(F,Y))R[D]=F,R[Z]=Y,D=Z;else break e}}return z}function a(R,z){var Y=R.sortIndex-z.sortIndex;return Y!==0?Y:R.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],m=1,p=null,f=3,b=!1,y=!1,j=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var z=r(u);z!==null;){if(z.callback===null)s(u);else if(z.startTime<=R)s(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=r(u)}}function E(R){if(j=!1,g(R),!y)if(r(c)!==null)y=!0,Q(N);else{var z=r(u);z!==null&&U(E,z.startTime-R)}}function N(R,z){y=!1,j&&(j=!1,v(x),x=-1),b=!0;var Y=f;try{for(g(z),p=r(c);p!==null&&(!(p.expirationTime>z)||R&&!P());){var D=p.callback;if(typeof D=="function"){p.callback=null,f=p.priorityLevel;var I=D(p.expirationTime<=z);z=e.unstable_now(),typeof I=="function"?p.callback=I:p===r(c)&&s(c),g(z)}else s(c);p=r(c)}if(p!==null)var A=!0;else{var G=r(u);G!==null&&U(E,G.startTime-z),A=!1}return A}finally{p=null,f=Y,b=!1}}var T=!1,S=null,x=-1,w=5,k=-1;function P(){return!(e.unstable_now()-k<w)}function O(){if(S!==null){var R=e.unstable_now();k=R;var z=!0;try{z=S(!0,R)}finally{z?B():(T=!1,S=null)}}else T=!1}var B;if(typeof h=="function")B=function(){h(O)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,q=H.port2;H.port1.onmessage=O,B=function(){q.postMessage(null)}}else B=function(){C(O,0)};function Q(R){S=R,T||(T=!0,B())}function U(R,z){x=C(function(){R(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||b||(y=!0,Q(N))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var Y=f;f=z;try{return R()}finally{f=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Y=f;f=R;try{return z()}finally{f=Y}},e.unstable_scheduleCallback=function(R,z,Y){var D=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?D+Y:D):Y=D,R){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=Y+I,R={id:m++,callback:z,priorityLevel:R,startTime:Y,expirationTime:I,sortIndex:-1},Y>D?(R.sortIndex=Y,t(u,R),r(c)===null&&R===r(u)&&(j?(v(x),x=-1):j=!0,U(E,Y-D))):(R.sortIndex=I,t(c,R),y||b||(y=!0,Q(N))),R},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(R){var z=f;return function(){var Y=f;f=z;try{return R.apply(this,arguments)}finally{f=Y}}}})(fu);mu.exports=fu;var d0=mu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0=d,_t=d0;function X(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hu=new Set,Es={};function fr(e,t){Fr(e,t),Fr(e+"Capture",t)}function Fr(e,t){for(Es[e]=t,e=0;e<t.length;e++)hu.add(t[e])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mi=Object.prototype.hasOwnProperty,m0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bc={},wc={};function f0(e){return mi.call(wc,e)?!0:mi.call(bc,e)?!1:m0.test(e)?wc[e]=!0:(bc[e]=!0,!1)}function h0(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function p0(e,t,r,s){if(t===null||typeof t>"u"||h0(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function wt(e,t,r,s,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){lt[e]=new wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];lt[t]=new wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){lt[e]=new wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){lt[e]=new wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){lt[e]=new wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){lt[e]=new wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){lt[e]=new wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){lt[e]=new wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){lt[e]=new wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var fl=/[\-:]([a-z])/g;function hl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fl,hl);lt[t]=new wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fl,hl);lt[t]=new wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fl,hl);lt[t]=new wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){lt[e]=new wt(e,1,!1,e.toLowerCase(),null,!1,!1)});lt.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){lt[e]=new wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function pl(e,t,r,s){var a=lt.hasOwnProperty(t)?lt[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(p0(t,r,a,s)&&(r=null),s||a===null?f0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var Nn=u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zs=Symbol.for("react.element"),br=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),xl=Symbol.for("react.strict_mode"),fi=Symbol.for("react.profiler"),pu=Symbol.for("react.provider"),xu=Symbol.for("react.context"),gl=Symbol.for("react.forward_ref"),hi=Symbol.for("react.suspense"),pi=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),gu=Symbol.for("react.offscreen"),jc=Symbol.iterator;function es(e){return e===null||typeof e!="object"?null:(e=jc&&e[jc]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,Io;function fs(e){if(Io===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Io=t&&t[1]||""}return`
`+Io+e}var Lo=!1;function Ao(e,t){if(!e||Lo)return"";Lo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=s.stack.split(`
`),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==o[l]){var c=`
`+a[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{Lo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?fs(e):""}function x0(e){switch(e.tag){case 5:return fs(e.type);case 16:return fs("Lazy");case 13:return fs("Suspense");case 19:return fs("SuspenseList");case 0:case 2:case 15:return e=Ao(e.type,!1),e;case 11:return e=Ao(e.type.render,!1),e;case 1:return e=Ao(e.type,!0),e;default:return""}}function xi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case br:return"Portal";case fi:return"Profiler";case xl:return"StrictMode";case hi:return"Suspense";case pi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xu:return(e.displayName||"Context")+".Consumer";case pu:return(e._context.displayName||"Context")+".Provider";case gl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vl:return t=e.displayName||null,t!==null?t:xi(e.type)||"Memo";case _n:t=e._payload,e=e._init;try{return xi(e(t))}catch{}}return null}function g0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xi(t);case 8:return t===xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function v0(e){var t=vu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){s=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(i){s=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ea(e){e._valueTracker||(e._valueTracker=v0(e))}function yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=vu(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Fa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gi(e,t){var r=t.checked;return Ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Nc(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=Wn(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bu(e,t){t=t.checked,t!=null&&pl(e,"checked",t,!1)}function vi(e,t){bu(e,t);var r=Wn(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yi(e,t.type,r):t.hasOwnProperty("defaultValue")&&yi(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function yi(e,t,r){(t!=="number"||Fa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var hs=Array.isArray;function Ir(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Wn(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function bi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(X(91));return Ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(X(92));if(hs(r)){if(1<r.length)throw Error(X(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Wn(r)}}function wu(e,t){var r=Wn(t.value),s=Wn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ta,Nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ta.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ps(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y0=["Webkit","ms","Moz","O"];Object.keys(gs).forEach(function(e){y0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gs[t]=gs[e]})});function ku(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||gs.hasOwnProperty(e)&&gs[e]?(""+t).trim():t+"px"}function Su(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=ku(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var b0=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ji(e,t){if(t){if(b0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(X(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(X(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(X(61))}if(t.style!=null&&typeof t.style!="object")throw Error(X(62))}}function Ni(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=null;function yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Si=null,Lr=null,Ar=null;function Ec(e){if(e=Gs(e)){if(typeof Si!="function")throw Error(X(280));var t=e.stateNode;t&&(t=go(t),Si(e.stateNode,e.type,t))}}function Cu(e){Lr?Ar?Ar.push(e):Ar=[e]:Lr=e}function Eu(){if(Lr){var e=Lr,t=Ar;if(Ar=Lr=null,Ec(e),t)for(e=0;e<t.length;e++)Ec(t[e])}}function Pu(e,t){return e(t)}function Tu(){}var zo=!1;function Ru(e,t,r){if(zo)return e(t,r);zo=!0;try{return Pu(e,t,r)}finally{zo=!1,(Lr!==null||Ar!==null)&&(Tu(),Eu())}}function Ts(e,t){var r=e.stateNode;if(r===null)return null;var s=go(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(X(231,t,typeof r));return r}var Ci=!1;if(vn)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{Ci=!1}function w0(e,t,r,s,a,o,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(m){this.onError(m)}}var vs=!1,$a=null,Ba=!1,Ei=null,j0={onError:function(e){vs=!0,$a=e}};function N0(e,t,r,s,a,o,i,l,c){vs=!1,$a=null,w0.apply(j0,arguments)}function k0(e,t,r,s,a,o,i,l,c){if(N0.apply(this,arguments),vs){if(vs){var u=$a;vs=!1,$a=null}else throw Error(X(198));Ba||(Ba=!0,Ei=u)}}function hr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function _u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pc(e){if(hr(e)!==e)throw Error(X(188))}function S0(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(X(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return Pc(a),e;if(o===s)return Pc(a),t;o=o.sibling}throw Error(X(188))}if(r.return!==s.return)r=a,s=o;else{for(var i=!1,l=a.child;l;){if(l===r){i=!0,r=a,s=o;break}if(l===s){i=!0,s=a,r=o;break}l=l.sibling}if(!i){for(l=o.child;l;){if(l===r){i=!0,r=o,s=a;break}if(l===s){i=!0,s=o,r=a;break}l=l.sibling}if(!i)throw Error(X(189))}}if(r.alternate!==s)throw Error(X(190))}if(r.tag!==3)throw Error(X(188));return r.stateNode.current===r?e:t}function Iu(e){return e=S0(e),e!==null?Lu(e):null}function Lu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lu(e);if(t!==null)return t;e=e.sibling}return null}var Au=_t.unstable_scheduleCallback,Tc=_t.unstable_cancelCallback,C0=_t.unstable_shouldYield,E0=_t.unstable_requestPaint,Ve=_t.unstable_now,P0=_t.unstable_getCurrentPriorityLevel,bl=_t.unstable_ImmediatePriority,zu=_t.unstable_UserBlockingPriority,Ua=_t.unstable_NormalPriority,T0=_t.unstable_LowPriority,Du=_t.unstable_IdlePriority,fo=null,on=null;function R0(e){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(fo,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:L0,_0=Math.log,I0=Math.LN2;function L0(e){return e>>>=0,e===0?32:31-(_0(e)/I0|0)|0}var na=64,ra=4194304;function ps(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qa(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~a;l!==0?s=ps(l):(o&=i,o!==0&&(s=ps(o)))}else i=r&~a,i!==0?s=ps(i):o!==0&&(s=ps(o));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-Vt(t),a=1<<r,s|=e[r],t&=~a;return s}function A0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z0(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Vt(o),l=1<<i,c=a[i];c===-1?(!(l&r)||l&s)&&(a[i]=A0(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mu(){var e=na;return na<<=1,!(na&4194240)&&(na=64),e}function Do(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ws(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=r}function D0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Vt(r),o=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~o}}function wl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Vt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var Re=0;function Ou(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fu,jl,$u,Bu,Uu,Ti=!1,sa=[],On=null,Fn=null,$n=null,Rs=new Map,_s=new Map,An=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rc(e,t){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Rs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_s.delete(t.pointerId)}}function ns(e,t,r,s,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Gs(t),t!==null&&jl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function O0(e,t,r,s,a){switch(t){case"focusin":return On=ns(On,e,t,r,s,a),!0;case"dragenter":return Fn=ns(Fn,e,t,r,s,a),!0;case"mouseover":return $n=ns($n,e,t,r,s,a),!0;case"pointerover":var o=a.pointerId;return Rs.set(o,ns(Rs.get(o)||null,e,t,r,s,a)),!0;case"gotpointercapture":return o=a.pointerId,_s.set(o,ns(_s.get(o)||null,e,t,r,s,a)),!0}return!1}function qu(e){var t=er(e.target);if(t!==null){var r=hr(t);if(r!==null){if(t=r.tag,t===13){if(t=_u(r),t!==null){e.blockedOn=t,Uu(e.priority,function(){$u(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ri(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);ki=s,r.target.dispatchEvent(s),ki=null}else return t=Gs(r),t!==null&&jl(t),e.blockedOn=r,!1;t.shift()}return!0}function _c(e,t,r){Sa(e)&&r.delete(t)}function F0(){Ti=!1,On!==null&&Sa(On)&&(On=null),Fn!==null&&Sa(Fn)&&(Fn=null),$n!==null&&Sa($n)&&($n=null),Rs.forEach(_c),_s.forEach(_c)}function rs(e,t){e.blockedOn===t&&(e.blockedOn=null,Ti||(Ti=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,F0)))}function Is(e){function t(a){return rs(a,e)}if(0<sa.length){rs(sa[0],e);for(var r=1;r<sa.length;r++){var s=sa[r];s.blockedOn===e&&(s.blockedOn=null)}}for(On!==null&&rs(On,e),Fn!==null&&rs(Fn,e),$n!==null&&rs($n,e),Rs.forEach(t),_s.forEach(t),r=0;r<An.length;r++)s=An[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<An.length&&(r=An[0],r.blockedOn===null);)qu(r),r.blockedOn===null&&An.shift()}var zr=Nn.ReactCurrentBatchConfig,Qa=!0;function $0(e,t,r,s){var a=Re,o=zr.transition;zr.transition=null;try{Re=1,Nl(e,t,r,s)}finally{Re=a,zr.transition=o}}function B0(e,t,r,s){var a=Re,o=zr.transition;zr.transition=null;try{Re=4,Nl(e,t,r,s)}finally{Re=a,zr.transition=o}}function Nl(e,t,r,s){if(Qa){var a=Ri(e,t,r,s);if(a===null)Wo(e,t,s,Ya,r),Rc(e,s);else if(O0(a,e,t,r,s))s.stopPropagation();else if(Rc(e,s),t&4&&-1<M0.indexOf(e)){for(;a!==null;){var o=Gs(a);if(o!==null&&Fu(o),o=Ri(e,t,r,s),o===null&&Wo(e,t,s,Ya,r),o===a)break;a=o}a!==null&&s.stopPropagation()}else Wo(e,t,s,null,r)}}var Ya=null;function Ri(e,t,r,s){if(Ya=null,e=yl(s),e=er(e),e!==null)if(t=hr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=_u(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ya=e,null}function Qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P0()){case bl:return 1;case zu:return 4;case Ua:case T0:return 16;case Du:return 536870912;default:return 16}default:return 16}}var Dn=null,kl=null,Ca=null;function Yu(){if(Ca)return Ca;var e,t=kl,r=t.length,s,a="value"in Dn?Dn.value:Dn.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(s=1;s<=i&&t[r-s]===a[o-s];s++);return Ca=a.slice(e,1<s?1-s:void 0)}function Ea(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function aa(){return!0}function Ic(){return!1}function Lt(e){function t(r,s,a,o,i){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?aa:Ic,this.isPropagationStopped=Ic,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),t}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Lt(Vr),Hs=Ye({},Vr,{view:0,detail:0}),U0=Lt(Hs),Mo,Oo,ss,ho=Ye({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ss&&(ss&&e.type==="mousemove"?(Mo=e.screenX-ss.screenX,Oo=e.screenY-ss.screenY):Oo=Mo=0,ss=e),Mo)},movementY:function(e){return"movementY"in e?e.movementY:Oo}}),Lc=Lt(ho),q0=Ye({},ho,{dataTransfer:0}),Q0=Lt(q0),Y0=Ye({},Hs,{relatedTarget:0}),Fo=Lt(Y0),W0=Ye({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=Lt(W0),G0=Ye({},Vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V0=Lt(G0),X0=Ye({},Vr,{data:0}),Ac=Lt(X0),K0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Z0[e])?!!t[e]:!1}function Cl(){return eh}var th=Ye({},Hs,{key:function(e){if(e.key){var t=K0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ea(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?Ea(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ea(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nh=Lt(th),rh=Ye({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zc=Lt(rh),sh=Ye({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),ah=Lt(sh),oh=Ye({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ih=Lt(oh),lh=Ye({},ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ch=Lt(lh),dh=[9,13,27,32],El=vn&&"CompositionEvent"in window,ys=null;vn&&"documentMode"in document&&(ys=document.documentMode);var uh=vn&&"TextEvent"in window&&!ys,Wu=vn&&(!El||ys&&8<ys&&11>=ys),Dc=String.fromCharCode(32),Mc=!1;function Hu(e,t){switch(e){case"keyup":return dh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function mh(e,t){switch(e){case"compositionend":return Gu(t);case"keypress":return t.which!==32?null:(Mc=!0,Dc);case"textInput":return e=t.data,e===Dc&&Mc?null:e;default:return null}}function fh(e,t){if(jr)return e==="compositionend"||!El&&Hu(e,t)?(e=Yu(),Ca=kl=Dn=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wu&&t.locale!=="ko"?null:t.data;default:return null}}var hh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hh[e.type]:t==="textarea"}function Vu(e,t,r,s){Cu(s),t=Wa(t,"onChange"),0<t.length&&(r=new Sl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var bs=null,Ls=null;function ph(e){om(e,0)}function po(e){var t=Sr(e);if(yu(t))return e}function xh(e,t){if(e==="change")return t}var Xu=!1;if(vn){var $o;if(vn){var Bo="oninput"in document;if(!Bo){var Fc=document.createElement("div");Fc.setAttribute("oninput","return;"),Bo=typeof Fc.oninput=="function"}$o=Bo}else $o=!1;Xu=$o&&(!document.documentMode||9<document.documentMode)}function $c(){bs&&(bs.detachEvent("onpropertychange",Ku),Ls=bs=null)}function Ku(e){if(e.propertyName==="value"&&po(Ls)){var t=[];Vu(t,Ls,e,yl(e)),Ru(ph,t)}}function gh(e,t,r){e==="focusin"?($c(),bs=t,Ls=r,bs.attachEvent("onpropertychange",Ku)):e==="focusout"&&$c()}function vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return po(Ls)}function yh(e,t){if(e==="click")return po(t)}function bh(e,t){if(e==="input"||e==="change")return po(t)}function wh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:wh;function As(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!mi.call(t,a)||!Kt(e[a],t[a]))return!1}return!0}function Bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uc(e,t){var r=Bc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Bc(r)}}function Ju(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ju(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zu(){for(var e=window,t=Fa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Fa(e.document)}return t}function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jh(e){var t=Zu(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ju(r.ownerDocument.documentElement,r)){if(s!==null&&Pl(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(s.start,a);s=s.end===void 0?o:Math.min(s.end,a),!e.extend&&o>s&&(a=s,s=o,o=a),a=Uc(r,o);var i=Uc(r,s);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nh=vn&&"documentMode"in document&&11>=document.documentMode,Nr=null,_i=null,ws=null,Ii=!1;function qc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ii||Nr==null||Nr!==Fa(s)||(s=Nr,"selectionStart"in s&&Pl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ws&&As(ws,s)||(ws=s,s=Wa(_i,"onSelect"),0<s.length&&(t=new Sl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Nr)))}function oa(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var kr={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},Uo={},em={};vn&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function xo(e){if(Uo[e])return Uo[e];if(!kr[e])return e;var t=kr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in em)return Uo[e]=t[r];return e}var tm=xo("animationend"),nm=xo("animationiteration"),rm=xo("animationstart"),sm=xo("transitionend"),am=new Map,Qc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,t){am.set(e,t),fr(t,[e])}for(var qo=0;qo<Qc.length;qo++){var Qo=Qc[qo],kh=Qo.toLowerCase(),Sh=Qo[0].toUpperCase()+Qo.slice(1);Gn(kh,"on"+Sh)}Gn(tm,"onAnimationEnd");Gn(nm,"onAnimationIteration");Gn(rm,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(sm,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ch=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function Yc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,k0(s,t,void 0,e),e.currentTarget=null}function om(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var i=s.length-1;0<=i;i--){var l=s[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&a.isPropagationStopped())break e;Yc(a,l,u),o=c}else for(i=0;i<s.length;i++){if(l=s[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&a.isPropagationStopped())break e;Yc(a,l,u),o=c}}}if(Ba)throw e=Ei,Ba=!1,Ei=null,e}function Me(e,t){var r=t[Mi];r===void 0&&(r=t[Mi]=new Set);var s=e+"__bubble";r.has(s)||(im(t,e,2,!1),r.add(s))}function Yo(e,t,r){var s=0;t&&(s|=4),im(r,e,s,t)}var ia="_reactListening"+Math.random().toString(36).slice(2);function zs(e){if(!e[ia]){e[ia]=!0,hu.forEach(function(r){r!=="selectionchange"&&(Ch.has(r)||Yo(r,!1,e),Yo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ia]||(t[ia]=!0,Yo("selectionchange",!1,t))}}function im(e,t,r,s){switch(Qu(t)){case 1:var a=$0;break;case 4:a=B0;break;default:a=Nl}r=a.bind(null,t,r,e),a=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Wo(e,t,r,s,a){var o=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var i=s.tag;if(i===3||i===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=s.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;i=i.return}for(;l!==null;){if(i=er(l),i===null)return;if(c=i.tag,c===5||c===6){s=o=i;continue e}l=l.parentNode}}s=s.return}Ru(function(){var u=o,m=yl(r),p=[];e:{var f=am.get(e);if(f!==void 0){var b=Sl,y=e;switch(e){case"keypress":if(Ea(r)===0)break e;case"keydown":case"keyup":b=nh;break;case"focusin":y="focus",b=Fo;break;case"focusout":y="blur",b=Fo;break;case"beforeblur":case"afterblur":b=Fo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=ah;break;case tm:case nm:case rm:b=H0;break;case sm:b=ih;break;case"scroll":b=U0;break;case"wheel":b=ch;break;case"copy":case"cut":case"paste":b=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=zc}var j=(t&4)!==0,C=!j&&e==="scroll",v=j?f!==null?f+"Capture":null:f;j=[];for(var h=u,g;h!==null;){g=h;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,v!==null&&(E=Ts(h,v),E!=null&&j.push(Ds(h,E,g)))),C)break;h=h.return}0<j.length&&(f=new b(f,y,null,r,m),p.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&r!==ki&&(y=r.relatedTarget||r.fromElement)&&(er(y)||y[yn]))break e;if((b||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,b?(y=r.relatedTarget||r.toElement,b=u,y=y?er(y):null,y!==null&&(C=hr(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(b=null,y=u),b!==y)){if(j=Lc,E="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(j=zc,E="onPointerLeave",v="onPointerEnter",h="pointer"),C=b==null?f:Sr(b),g=y==null?f:Sr(y),f=new j(E,h+"leave",b,r,m),f.target=C,f.relatedTarget=g,E=null,er(m)===u&&(j=new j(v,h+"enter",y,r,m),j.target=g,j.relatedTarget=C,E=j),C=E,b&&y)t:{for(j=b,v=y,h=0,g=j;g;g=vr(g))h++;for(g=0,E=v;E;E=vr(E))g++;for(;0<h-g;)j=vr(j),h--;for(;0<g-h;)v=vr(v),g--;for(;h--;){if(j===v||v!==null&&j===v.alternate)break t;j=vr(j),v=vr(v)}j=null}else j=null;b!==null&&Wc(p,f,b,j,!1),y!==null&&C!==null&&Wc(p,C,y,j,!0)}}e:{if(f=u?Sr(u):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var N=xh;else if(Oc(f))if(Xu)N=bh;else{N=vh;var T=gh}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=yh);if(N&&(N=N(e,u))){Vu(p,N,r,m);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&yi(f,"number",f.value)}switch(T=u?Sr(u):window,e){case"focusin":(Oc(T)||T.contentEditable==="true")&&(Nr=T,_i=u,ws=null);break;case"focusout":ws=_i=Nr=null;break;case"mousedown":Ii=!0;break;case"contextmenu":case"mouseup":case"dragend":Ii=!1,qc(p,r,m);break;case"selectionchange":if(Nh)break;case"keydown":case"keyup":qc(p,r,m)}var S;if(El)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else jr?Hu(e,r)&&(x="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(x="onCompositionStart");x&&(Wu&&r.locale!=="ko"&&(jr||x!=="onCompositionStart"?x==="onCompositionEnd"&&jr&&(S=Yu()):(Dn=m,kl="value"in Dn?Dn.value:Dn.textContent,jr=!0)),T=Wa(u,x),0<T.length&&(x=new Ac(x,e,null,r,m),p.push({event:x,listeners:T}),S?x.data=S:(S=Gu(r),S!==null&&(x.data=S)))),(S=uh?mh(e,r):fh(e,r))&&(u=Wa(u,"onBeforeInput"),0<u.length&&(m=new Ac("onBeforeInput","beforeinput",null,r,m),p.push({event:m,listeners:u}),m.data=S))}om(p,t)})}function Ds(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Wa(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Ts(e,r),o!=null&&s.unshift(Ds(e,o,a)),o=Ts(e,t),o!=null&&s.push(Ds(e,o,a))),e=e.return}return s}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wc(e,t,r,s,a){for(var o=t._reactName,i=[];r!==null&&r!==s;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,a?(c=Ts(r,o),c!=null&&i.unshift(Ds(r,c,l))):a||(c=Ts(r,o),c!=null&&i.push(Ds(r,c,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var Eh=/\r\n?/g,Ph=/\u0000|\uFFFD/g;function Hc(e){return(typeof e=="string"?e:""+e).replace(Eh,`
`).replace(Ph,"")}function la(e,t,r){if(t=Hc(t),Hc(e)!==t&&r)throw Error(X(425))}function Ha(){}var Li=null,Ai=null;function zi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Di=typeof setTimeout=="function"?setTimeout:void 0,Th=typeof clearTimeout=="function"?clearTimeout:void 0,Gc=typeof Promise=="function"?Promise:void 0,Rh=typeof queueMicrotask=="function"?queueMicrotask:typeof Gc<"u"?function(e){return Gc.resolve(null).then(e).catch(_h)}:Di;function _h(e){setTimeout(function(){throw e})}function Ho(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Is(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Is(t)}function Bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),an="__reactFiber$"+Xr,Ms="__reactProps$"+Xr,yn="__reactContainer$"+Xr,Mi="__reactEvents$"+Xr,Ih="__reactListeners$"+Xr,Lh="__reactHandles$"+Xr;function er(e){var t=e[an];if(t)return t;for(var r=e.parentNode;r;){if(t=r[yn]||r[an]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Vc(e);e!==null;){if(r=e[an])return r;e=Vc(e)}return t}e=r,r=e.parentNode}return null}function Gs(e){return e=e[an]||e[yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(X(33))}function go(e){return e[Ms]||null}var Oi=[],Cr=-1;function Vn(e){return{current:e}}function Fe(e){0>Cr||(e.current=Oi[Cr],Oi[Cr]=null,Cr--)}function ze(e,t){Cr++,Oi[Cr]=e.current,e.current=t}var Hn={},ft=Vn(Hn),kt=Vn(!1),lr=Hn;function $r(e,t){var r=e.type.contextTypes;if(!r)return Hn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function St(e){return e=e.childContextTypes,e!=null}function Ga(){Fe(kt),Fe(ft)}function Xc(e,t,r){if(ft.current!==Hn)throw Error(X(168));ze(ft,t),ze(kt,r)}function lm(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(X(108,g0(e)||"Unknown",a));return Ye({},r,s)}function Va(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,lr=ft.current,ze(ft,e),ze(kt,kt.current),!0}function Kc(e,t,r){var s=e.stateNode;if(!s)throw Error(X(169));r?(e=lm(e,t,lr),s.__reactInternalMemoizedMergedChildContext=e,Fe(kt),Fe(ft),ze(ft,e)):Fe(kt),ze(kt,r)}var fn=null,vo=!1,Go=!1;function cm(e){fn===null?fn=[e]:fn.push(e)}function Ah(e){vo=!0,cm(e)}function Xn(){if(!Go&&fn!==null){Go=!0;var e=0,t=Re;try{var r=fn;for(Re=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}fn=null,vo=!1}catch(a){throw fn!==null&&(fn=fn.slice(e+1)),Au(bl,Xn),a}finally{Re=t,Go=!1}}return null}var Er=[],Pr=0,Xa=null,Ka=0,zt=[],Dt=0,cr=null,hn=1,pn="";function Jn(e,t){Er[Pr++]=Ka,Er[Pr++]=Xa,Xa=e,Ka=t}function dm(e,t,r){zt[Dt++]=hn,zt[Dt++]=pn,zt[Dt++]=cr,cr=e;var s=hn;e=pn;var a=32-Vt(s)-1;s&=~(1<<a),r+=1;var o=32-Vt(t)+a;if(30<o){var i=a-a%5;o=(s&(1<<i)-1).toString(32),s>>=i,a-=i,hn=1<<32-Vt(t)+a|r<<a|s,pn=o+e}else hn=1<<o|r<<a|s,pn=e}function Tl(e){e.return!==null&&(Jn(e,1),dm(e,1,0))}function Rl(e){for(;e===Xa;)Xa=Er[--Pr],Er[Pr]=null,Ka=Er[--Pr],Er[Pr]=null;for(;e===cr;)cr=zt[--Dt],zt[Dt]=null,pn=zt[--Dt],zt[Dt]=null,hn=zt[--Dt],zt[Dt]=null}var Rt=null,Tt=null,Be=!1,Gt=null;function um(e,t){var r=Mt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Jc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Rt=e,Tt=Bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Rt=e,Tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=cr!==null?{id:hn,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Mt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Rt=e,Tt=null,!0):!1;default:return!1}}function Fi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $i(e){if(Be){var t=Tt;if(t){var r=t;if(!Jc(e,t)){if(Fi(e))throw Error(X(418));t=Bn(r.nextSibling);var s=Rt;t&&Jc(e,t)?um(s,r):(e.flags=e.flags&-4097|2,Be=!1,Rt=e)}}else{if(Fi(e))throw Error(X(418));e.flags=e.flags&-4097|2,Be=!1,Rt=e}}}function Zc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rt=e}function ca(e){if(e!==Rt)return!1;if(!Be)return Zc(e),Be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zi(e.type,e.memoizedProps)),t&&(t=Tt)){if(Fi(e))throw mm(),Error(X(418));for(;t;)um(e,t),t=Bn(t.nextSibling)}if(Zc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Tt=Bn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Tt=null}}else Tt=Rt?Bn(e.stateNode.nextSibling):null;return!0}function mm(){for(var e=Tt;e;)e=Bn(e.nextSibling)}function Br(){Tt=Rt=null,Be=!1}function _l(e){Gt===null?Gt=[e]:Gt.push(e)}var zh=Nn.ReactCurrentBatchConfig;function as(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(X(309));var s=r.stateNode}if(!s)throw Error(X(147,e));var a=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var l=a.refs;i===null?delete l[o]:l[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(X(284));if(!r._owner)throw Error(X(290,e))}return e}function da(e,t){throw e=Object.prototype.toString.call(t),Error(X(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ed(e){var t=e._init;return t(e._payload)}function fm(e){function t(v,h){if(e){var g=v.deletions;g===null?(v.deletions=[h],v.flags|=16):g.push(h)}}function r(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function s(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function a(v,h){return v=Yn(v,h),v.index=0,v.sibling=null,v}function o(v,h,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<h?(v.flags|=2,h):g):(v.flags|=2,h)):(v.flags|=1048576,h)}function i(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,h,g,E){return h===null||h.tag!==6?(h=ti(g,v.mode,E),h.return=v,h):(h=a(h,g),h.return=v,h)}function c(v,h,g,E){var N=g.type;return N===wr?m(v,h,g.props.children,E,g.key):h!==null&&(h.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===_n&&ed(N)===h.type)?(E=a(h,g.props),E.ref=as(v,h,g),E.return=v,E):(E=Aa(g.type,g.key,g.props,null,v.mode,E),E.ref=as(v,h,g),E.return=v,E)}function u(v,h,g,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=ni(g,v.mode,E),h.return=v,h):(h=a(h,g.children||[]),h.return=v,h)}function m(v,h,g,E,N){return h===null||h.tag!==7?(h=or(g,v.mode,E,N),h.return=v,h):(h=a(h,g),h.return=v,h)}function p(v,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ti(""+h,v.mode,g),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Zs:return g=Aa(h.type,h.key,h.props,null,v.mode,g),g.ref=as(v,null,h),g.return=v,g;case br:return h=ni(h,v.mode,g),h.return=v,h;case _n:var E=h._init;return p(v,E(h._payload),g)}if(hs(h)||es(h))return h=or(h,v.mode,g,null),h.return=v,h;da(v,h)}return null}function f(v,h,g,E){var N=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:l(v,h,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zs:return g.key===N?c(v,h,g,E):null;case br:return g.key===N?u(v,h,g,E):null;case _n:return N=g._init,f(v,h,N(g._payload),E)}if(hs(g)||es(g))return N!==null?null:m(v,h,g,E,null);da(v,g)}return null}function b(v,h,g,E,N){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(g)||null,l(h,v,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Zs:return v=v.get(E.key===null?g:E.key)||null,c(h,v,E,N);case br:return v=v.get(E.key===null?g:E.key)||null,u(h,v,E,N);case _n:var T=E._init;return b(v,h,g,T(E._payload),N)}if(hs(E)||es(E))return v=v.get(g)||null,m(h,v,E,N,null);da(h,E)}return null}function y(v,h,g,E){for(var N=null,T=null,S=h,x=h=0,w=null;S!==null&&x<g.length;x++){S.index>x?(w=S,S=null):w=S.sibling;var k=f(v,S,g[x],E);if(k===null){S===null&&(S=w);break}e&&S&&k.alternate===null&&t(v,S),h=o(k,h,x),T===null?N=k:T.sibling=k,T=k,S=w}if(x===g.length)return r(v,S),Be&&Jn(v,x),N;if(S===null){for(;x<g.length;x++)S=p(v,g[x],E),S!==null&&(h=o(S,h,x),T===null?N=S:T.sibling=S,T=S);return Be&&Jn(v,x),N}for(S=s(v,S);x<g.length;x++)w=b(S,v,x,g[x],E),w!==null&&(e&&w.alternate!==null&&S.delete(w.key===null?x:w.key),h=o(w,h,x),T===null?N=w:T.sibling=w,T=w);return e&&S.forEach(function(P){return t(v,P)}),Be&&Jn(v,x),N}function j(v,h,g,E){var N=es(g);if(typeof N!="function")throw Error(X(150));if(g=N.call(g),g==null)throw Error(X(151));for(var T=N=null,S=h,x=h=0,w=null,k=g.next();S!==null&&!k.done;x++,k=g.next()){S.index>x?(w=S,S=null):w=S.sibling;var P=f(v,S,k.value,E);if(P===null){S===null&&(S=w);break}e&&S&&P.alternate===null&&t(v,S),h=o(P,h,x),T===null?N=P:T.sibling=P,T=P,S=w}if(k.done)return r(v,S),Be&&Jn(v,x),N;if(S===null){for(;!k.done;x++,k=g.next())k=p(v,k.value,E),k!==null&&(h=o(k,h,x),T===null?N=k:T.sibling=k,T=k);return Be&&Jn(v,x),N}for(S=s(v,S);!k.done;x++,k=g.next())k=b(S,v,x,k.value,E),k!==null&&(e&&k.alternate!==null&&S.delete(k.key===null?x:k.key),h=o(k,h,x),T===null?N=k:T.sibling=k,T=k);return e&&S.forEach(function(O){return t(v,O)}),Be&&Jn(v,x),N}function C(v,h,g,E){if(typeof g=="object"&&g!==null&&g.type===wr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Zs:e:{for(var N=g.key,T=h;T!==null;){if(T.key===N){if(N=g.type,N===wr){if(T.tag===7){r(v,T.sibling),h=a(T,g.props.children),h.return=v,v=h;break e}}else if(T.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===_n&&ed(N)===T.type){r(v,T.sibling),h=a(T,g.props),h.ref=as(v,T,g),h.return=v,v=h;break e}r(v,T);break}else t(v,T);T=T.sibling}g.type===wr?(h=or(g.props.children,v.mode,E,g.key),h.return=v,v=h):(E=Aa(g.type,g.key,g.props,null,v.mode,E),E.ref=as(v,h,g),E.return=v,v=E)}return i(v);case br:e:{for(T=g.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){r(v,h.sibling),h=a(h,g.children||[]),h.return=v,v=h;break e}else{r(v,h);break}else t(v,h);h=h.sibling}h=ni(g,v.mode,E),h.return=v,v=h}return i(v);case _n:return T=g._init,C(v,h,T(g._payload),E)}if(hs(g))return y(v,h,g,E);if(es(g))return j(v,h,g,E);da(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(r(v,h.sibling),h=a(h,g),h.return=v,v=h):(r(v,h),h=ti(g,v.mode,E),h.return=v,v=h),i(v)):r(v,h)}return C}var Ur=fm(!0),hm=fm(!1),Ja=Vn(null),Za=null,Tr=null,Il=null;function Ll(){Il=Tr=Za=null}function Al(e){var t=Ja.current;Fe(Ja),e._currentValue=t}function Bi(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Dr(e,t){Za=e,Il=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Nt=!0),e.firstContext=null)}function $t(e){var t=e._currentValue;if(Il!==e)if(e={context:e,memoizedValue:t,next:null},Tr===null){if(Za===null)throw Error(X(308));Tr=e,Za.dependencies={lanes:0,firstContext:e}}else Tr=Tr.next=e;return t}var tr=null;function zl(e){tr===null?tr=[e]:tr.push(e)}function pm(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,zl(t)):(r.next=a.next,a.next=r),t.interleaved=r,bn(e,s)}function bn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var In=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Un(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Se&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,bn(e,r)}return a=s.interleaved,a===null?(t.next=t,zl(s)):(t.next=a.next,a.next=t),s.interleaved=t,bn(e,r)}function Pa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,wl(e,r)}}function td(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function eo(e,t,r,s){var a=e.updateQueue;In=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?o=u:i.next=u,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==i&&(l===null?m.firstBaseUpdate=u:l.next=u,m.lastBaseUpdate=c))}if(o!==null){var p=a.baseState;i=0,m=u=c=null,l=o;do{var f=l.lane,b=l.eventTime;if((s&f)===f){m!==null&&(m=m.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,j=l;switch(f=t,b=r,j.tag){case 1:if(y=j.payload,typeof y=="function"){p=y.call(b,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,f=typeof y=="function"?y.call(b,p,f):y,f==null)break e;p=Ye({},p,f);break e;case 2:In=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[l]:f.push(l))}else b={eventTime:b,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(u=m=b,c=p):m=m.next=b,i|=f;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;f=l,l=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(1);if(m===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);ur|=i,e.lanes=i,e.memoizedState=p}}function nd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(X(191,a));a.call(s)}}}var Vs={},ln=Vn(Vs),Os=Vn(Vs),Fs=Vn(Vs);function nr(e){if(e===Vs)throw Error(X(174));return e}function Ml(e,t){switch(ze(Fs,t),ze(Os,e),ze(ln,Vs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wi(t,e)}Fe(ln),ze(ln,t)}function qr(){Fe(ln),Fe(Os),Fe(Fs)}function gm(e){nr(Fs.current);var t=nr(ln.current),r=wi(t,e.type);t!==r&&(ze(Os,e),ze(ln,r))}function Ol(e){Os.current===e&&(Fe(ln),Fe(Os))}var qe=Vn(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vo=[];function Fl(){for(var e=0;e<Vo.length;e++)Vo[e]._workInProgressVersionPrimary=null;Vo.length=0}var Ta=Nn.ReactCurrentDispatcher,Xo=Nn.ReactCurrentBatchConfig,dr=0,Qe=null,et=null,rt=null,no=!1,js=!1,$s=0,Dh=0;function ct(){throw Error(X(321))}function $l(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Kt(e[r],t[r]))return!1;return!0}function Bl(e,t,r,s,a,o){if(dr=o,Qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ta.current=e===null||e.memoizedState===null?$h:Bh,e=r(s,a),js){o=0;do{if(js=!1,$s=0,25<=o)throw Error(X(301));o+=1,rt=et=null,t.updateQueue=null,Ta.current=Uh,e=r(s,a)}while(js)}if(Ta.current=ro,t=et!==null&&et.next!==null,dr=0,rt=et=Qe=null,no=!1,t)throw Error(X(300));return e}function Ul(){var e=$s!==0;return $s=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Qe.memoizedState=rt=e:rt=rt.next=e,rt}function Bt(){if(et===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=rt===null?Qe.memoizedState:rt.next;if(t!==null)rt=t,et=e;else{if(e===null)throw Error(X(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},rt===null?Qe.memoizedState=rt=e:rt=rt.next=e}return rt}function Bs(e,t){return typeof t=="function"?t(e):t}function Ko(e){var t=Bt(),r=t.queue;if(r===null)throw Error(X(311));r.lastRenderedReducer=e;var s=et,a=s.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}s.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,s=s.baseState;var l=i=null,c=null,u=o;do{var m=u.lane;if((dr&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var p={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,i=s):c=c.next=p,Qe.lanes|=m,ur|=m}u=u.next}while(u!==null&&u!==o);c===null?i=s:c.next=l,Kt(s,t.memoizedState)||(Nt=!0),t.memoizedState=s,t.baseState=i,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do o=a.lane,Qe.lanes|=o,ur|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Jo(e){var t=Bt(),r=t.queue;if(r===null)throw Error(X(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);Kt(o,t.memoizedState)||(Nt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,s]}function vm(){}function ym(e,t){var r=Qe,s=Bt(),a=t(),o=!Kt(s.memoizedState,a);if(o&&(s.memoizedState=a,Nt=!0),s=s.queue,ql(jm.bind(null,r,s,e),[e]),s.getSnapshot!==t||o||rt!==null&&rt.memoizedState.tag&1){if(r.flags|=2048,Us(9,wm.bind(null,r,s,a,t),void 0,null),st===null)throw Error(X(349));dr&30||bm(r,t,a)}return a}function bm(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function wm(e,t,r,s){t.value=r,t.getSnapshot=s,Nm(t)&&km(e)}function jm(e,t,r){return r(function(){Nm(t)&&km(e)})}function Nm(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Kt(e,r)}catch{return!0}}function km(e){var t=bn(e,1);t!==null&&Xt(t,e,1,-1)}function rd(e){var t=rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:e},t.queue=e,e=e.dispatch=Fh.bind(null,Qe,e),[t.memoizedState,e]}function Us(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Sm(){return Bt().memoizedState}function Ra(e,t,r,s){var a=rn();Qe.flags|=e,a.memoizedState=Us(1|t,r,void 0,s===void 0?null:s)}function yo(e,t,r,s){var a=Bt();s=s===void 0?null:s;var o=void 0;if(et!==null){var i=et.memoizedState;if(o=i.destroy,s!==null&&$l(s,i.deps)){a.memoizedState=Us(t,r,o,s);return}}Qe.flags|=e,a.memoizedState=Us(1|t,r,o,s)}function sd(e,t){return Ra(8390656,8,e,t)}function ql(e,t){return yo(2048,8,e,t)}function Cm(e,t){return yo(4,2,e,t)}function Em(e,t){return yo(4,4,e,t)}function Pm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tm(e,t,r){return r=r!=null?r.concat([e]):null,yo(4,4,Pm.bind(null,t,e),r)}function Ql(){}function Rm(e,t){var r=Bt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&$l(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function _m(e,t){var r=Bt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&$l(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Im(e,t,r){return dr&21?(Kt(r,t)||(r=Mu(),Qe.lanes|=r,ur|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Nt=!0),e.memoizedState=r)}function Mh(e,t){var r=Re;Re=r!==0&&4>r?r:4,e(!0);var s=Xo.transition;Xo.transition={};try{e(!1),t()}finally{Re=r,Xo.transition=s}}function Lm(){return Bt().memoizedState}function Oh(e,t,r){var s=Qn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Am(e))zm(t,r);else if(r=pm(e,t,r,s),r!==null){var a=yt();Xt(r,e,s,a),Dm(r,t,s)}}function Fh(e,t,r){var s=Qn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Am(e))zm(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,l=o(i,r);if(a.hasEagerState=!0,a.eagerState=l,Kt(l,i)){var c=t.interleaved;c===null?(a.next=a,zl(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=pm(e,t,a,s),r!==null&&(a=yt(),Xt(r,e,s,a),Dm(r,t,s))}}function Am(e){var t=e.alternate;return e===Qe||t!==null&&t===Qe}function zm(e,t){js=no=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Dm(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,wl(e,r)}}var ro={readContext:$t,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},$h={readContext:$t,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:$t,useEffect:sd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ra(4194308,4,Pm.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ra(4,2,e,t)},useMemo:function(e,t){var r=rn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=rn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Oh.bind(null,Qe,e),[s.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:rd,useDebugValue:Ql,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=rd(!1),t=e[0];return e=Mh.bind(null,e[1]),rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Qe,a=rn();if(Be){if(r===void 0)throw Error(X(407));r=r()}else{if(r=t(),st===null)throw Error(X(349));dr&30||bm(s,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,sd(jm.bind(null,s,o,e),[e]),s.flags|=2048,Us(9,wm.bind(null,s,o,r,t),void 0,null),r},useId:function(){var e=rn(),t=st.identifierPrefix;if(Be){var r=pn,s=hn;r=(s&~(1<<32-Vt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=$s++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Dh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bh={readContext:$t,useCallback:Rm,useContext:$t,useEffect:ql,useImperativeHandle:Tm,useInsertionEffect:Cm,useLayoutEffect:Em,useMemo:_m,useReducer:Ko,useRef:Sm,useState:function(){return Ko(Bs)},useDebugValue:Ql,useDeferredValue:function(e){var t=Bt();return Im(t,et.memoizedState,e)},useTransition:function(){var e=Ko(Bs)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:vm,useSyncExternalStore:ym,useId:Lm,unstable_isNewReconciler:!1},Uh={readContext:$t,useCallback:Rm,useContext:$t,useEffect:ql,useImperativeHandle:Tm,useInsertionEffect:Cm,useLayoutEffect:Em,useMemo:_m,useReducer:Jo,useRef:Sm,useState:function(){return Jo(Bs)},useDebugValue:Ql,useDeferredValue:function(e){var t=Bt();return et===null?t.memoizedState=e:Im(t,et.memoizedState,e)},useTransition:function(){var e=Jo(Bs)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:vm,useSyncExternalStore:ym,useId:Lm,unstable_isNewReconciler:!1};function Wt(e,t){if(e&&e.defaultProps){t=Ye({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ui(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Ye({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var bo={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=yt(),a=Qn(e),o=xn(s,a);o.payload=t,r!=null&&(o.callback=r),t=Un(e,o,a),t!==null&&(Xt(t,e,a,s),Pa(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=yt(),a=Qn(e),o=xn(s,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Un(e,o,a),t!==null&&(Xt(t,e,a,s),Pa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=yt(),s=Qn(e),a=xn(r,s);a.tag=2,t!=null&&(a.callback=t),t=Un(e,a,s),t!==null&&(Xt(t,e,s,r),Pa(t,e,s))}};function ad(e,t,r,s,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,i):t.prototype&&t.prototype.isPureReactComponent?!As(r,s)||!As(a,o):!0}function Mm(e,t,r){var s=!1,a=Hn,o=t.contextType;return typeof o=="object"&&o!==null?o=$t(o):(a=St(t)?lr:ft.current,s=t.contextTypes,o=(s=s!=null)?$r(e,a):Hn),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bo,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function od(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&bo.enqueueReplaceState(t,t.state,null)}function qi(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Dl(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=$t(o):(o=St(t)?lr:ft.current,a.context=$r(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ui(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&bo.enqueueReplaceState(a,a.state,null),eo(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t){try{var r="",s=t;do r+=x0(s),s=s.return;while(s);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Zo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Qi(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var qh=typeof WeakMap=="function"?WeakMap:Map;function Om(e,t,r){r=xn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){ao||(ao=!0,el=s),Qi(e,t)},r}function Fm(e,t,r){r=xn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Qi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Qi(e,t),typeof s!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function id(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new qh;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=rp.bind(null,e,t,r),t.then(e,e))}function ld(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cd(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=xn(-1,1),t.tag=2,Un(r,t,1))),r.lanes|=1),e)}var Qh=Nn.ReactCurrentOwner,Nt=!1;function vt(e,t,r,s){t.child=e===null?hm(t,null,r,s):Ur(t,e.child,r,s)}function dd(e,t,r,s,a){r=r.render;var o=t.ref;return Dr(t,a),s=Bl(e,t,r,s,o,a),r=Ul(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,wn(e,t,a)):(Be&&r&&Tl(t),t.flags|=1,vt(e,t,s,a),t.child)}function ud(e,t,r,s,a){if(e===null){var o=r.type;return typeof o=="function"&&!Jl(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,$m(e,t,o,s,a)):(e=Aa(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:As,r(i,s)&&e.ref===t.ref)return wn(e,t,a)}return t.flags|=1,e=Yn(o,s),e.ref=t.ref,e.return=t,t.child=e}function $m(e,t,r,s,a){if(e!==null){var o=e.memoizedProps;if(As(o,s)&&e.ref===t.ref)if(Nt=!1,t.pendingProps=s=o,(e.lanes&a)!==0)e.flags&131072&&(Nt=!0);else return t.lanes=e.lanes,wn(e,t,a)}return Yi(e,t,r,s,a)}function Bm(e,t,r){var s=t.pendingProps,a=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(_r,Pt),Pt|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ze(_r,Pt),Pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:r,ze(_r,Pt),Pt|=s}else o!==null?(s=o.baseLanes|r,t.memoizedState=null):s=r,ze(_r,Pt),Pt|=s;return vt(e,t,a,r),t.child}function Um(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Yi(e,t,r,s,a){var o=St(r)?lr:ft.current;return o=$r(t,o),Dr(t,a),r=Bl(e,t,r,s,o,a),s=Ul(),e!==null&&!Nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,wn(e,t,a)):(Be&&s&&Tl(t),t.flags|=1,vt(e,t,r,a),t.child)}function md(e,t,r,s,a){if(St(r)){var o=!0;Va(t)}else o=!1;if(Dr(t,a),t.stateNode===null)_a(e,t),Mm(t,r,s),qi(t,r,s,a),s=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=$t(u):(u=St(r)?lr:ft.current,u=$r(t,u));var m=r.getDerivedStateFromProps,p=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==s||c!==u)&&od(t,i,s,u),In=!1;var f=t.memoizedState;i.state=f,eo(t,s,i,a),c=t.memoizedState,l!==s||f!==c||kt.current||In?(typeof m=="function"&&(Ui(t,r,m,s),c=t.memoizedState),(l=In||ad(t,r,l,s,f,c,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),i.props=s,i.state=c,i.context=u,s=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{i=t.stateNode,xm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Wt(t.type,l),i.props=u,p=t.pendingProps,f=i.context,c=r.contextType,typeof c=="object"&&c!==null?c=$t(c):(c=St(r)?lr:ft.current,c=$r(t,c));var b=r.getDerivedStateFromProps;(m=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==p||f!==c)&&od(t,i,s,c),In=!1,f=t.memoizedState,i.state=f,eo(t,s,i,a);var y=t.memoizedState;l!==p||f!==y||kt.current||In?(typeof b=="function"&&(Ui(t,r,b,s),y=t.memoizedState),(u=In||ad(t,r,u,s,f,y,c)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,y,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,y,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=y),i.props=s,i.state=y,i.context=c,s=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),s=!1)}return Wi(e,t,r,s,o,a)}function Wi(e,t,r,s,a,o){Um(e,t);var i=(t.flags&128)!==0;if(!s&&!i)return a&&Kc(t,r,!1),wn(e,t,o);s=t.stateNode,Qh.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&i?(t.child=Ur(t,e.child,null,o),t.child=Ur(t,null,l,o)):vt(e,t,l,o),t.memoizedState=s.state,a&&Kc(t,r,!0),t.child}function qm(e){var t=e.stateNode;t.pendingContext?Xc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xc(e,t.context,!1),Ml(e,t.containerInfo)}function fd(e,t,r,s,a){return Br(),_l(a),t.flags|=256,vt(e,t,r,s),t.child}var Hi={dehydrated:null,treeContext:null,retryLane:0};function Gi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qm(e,t,r){var s=t.pendingProps,a=qe.current,o=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ze(qe,a&1),e===null)return $i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=s.children,e=s.fallback,o?(s=t.mode,o=t.child,i={mode:"hidden",children:i},!(s&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=No(i,s,0,null),e=or(e,s,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Gi(r),t.memoizedState=Hi,e):Yl(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Yh(e,t,i,s,l,a,r);if(o){o=s.fallback,i=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(i&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Yn(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Yn(l,o):(o=or(o,i,r,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,i=e.child.memoizedState,i=i===null?Gi(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=Hi,s}return o=e.child,e=o.sibling,s=Yn(o,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Yl(e,t){return t=No({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ua(e,t,r,s){return s!==null&&_l(s),Ur(t,e.child,null,r),e=Yl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yh(e,t,r,s,a,o,i){if(r)return t.flags&256?(t.flags&=-257,s=Zo(Error(X(422))),ua(e,t,i,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,a=t.mode,s=No({mode:"visible",children:s.children},a,0,null),o=or(o,a,i,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,t.mode&1&&Ur(t,e.child,null,i),t.child.memoizedState=Gi(i),t.memoizedState=Hi,o);if(!(t.mode&1))return ua(e,t,i,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,o=Error(X(419)),s=Zo(o,s,void 0),ua(e,t,i,s)}if(l=(i&e.childLanes)!==0,Nt||l){if(s=st,s!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,bn(e,a),Xt(s,e,a,-1))}return Kl(),s=Zo(Error(X(421))),ua(e,t,i,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=sp.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Tt=Bn(a.nextSibling),Rt=t,Be=!0,Gt=null,e!==null&&(zt[Dt++]=hn,zt[Dt++]=pn,zt[Dt++]=cr,hn=e.id,pn=e.overflow,cr=t),t=Yl(t,s.children),t.flags|=4096,t)}function hd(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Bi(e.return,t,r)}function ei(e,t,r,s,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=r,o.tailMode=a)}function Ym(e,t,r){var s=t.pendingProps,a=s.revealOrder,o=s.tail;if(vt(e,t,s.children,r),s=qe.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hd(e,r,t);else if(e.tag===19)hd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(ze(qe,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&to(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),ei(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&to(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}ei(t,!0,r,null,o);break;case"together":ei(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _a(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ur|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(X(153));if(t.child!==null){for(e=t.child,r=Yn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Yn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Wh(e,t,r){switch(t.tag){case 3:qm(t),Br();break;case 5:gm(t);break;case 1:St(t.type)&&Va(t);break;case 4:Ml(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;ze(Ja,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(ze(qe,qe.current&1),t.flags|=128,null):r&t.child.childLanes?Qm(e,t,r):(ze(qe,qe.current&1),e=wn(e,t,r),e!==null?e.sibling:null);ze(qe,qe.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Ym(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ze(qe,qe.current),s)break;return null;case 22:case 23:return t.lanes=0,Bm(e,t,r)}return wn(e,t,r)}var Wm,Vi,Hm,Gm;Wm=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Vi=function(){};Hm=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,nr(ln.current);var o=null;switch(r){case"input":a=gi(e,a),s=gi(e,s),o=[];break;case"select":a=Ye({},a,{value:void 0}),s=Ye({},s,{value:void 0}),o=[];break;case"textarea":a=bi(e,a),s=bi(e,s),o=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ha)}ji(r,s);var i;r=null;for(u in a)if(!s.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Es.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in s){var c=s[u];if(l=a!=null?a[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(r||(r={}),r[i]=c[i])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Es.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Me("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Gm=function(e,t,r,s){r!==s&&(t.flags|=4)};function os(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Hh(e,t,r){var s=t.pendingProps;switch(Rl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(t),null;case 1:return St(t.type)&&Ga(),dt(t),null;case 3:return s=t.stateNode,qr(),Fe(kt),Fe(ft),Fl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ca(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gt!==null&&(rl(Gt),Gt=null))),Vi(e,t),dt(t),null;case 5:Ol(t);var a=nr(Fs.current);if(r=t.type,e!==null&&t.stateNode!=null)Hm(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(X(166));return dt(t),null}if(e=nr(ln.current),ca(t)){s=t.stateNode,r=t.type;var o=t.memoizedProps;switch(s[an]=t,s[Ms]=o,e=(t.mode&1)!==0,r){case"dialog":Me("cancel",s),Me("close",s);break;case"iframe":case"object":case"embed":Me("load",s);break;case"video":case"audio":for(a=0;a<xs.length;a++)Me(xs[a],s);break;case"source":Me("error",s);break;case"img":case"image":case"link":Me("error",s),Me("load",s);break;case"details":Me("toggle",s);break;case"input":Nc(s,o),Me("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},Me("invalid",s);break;case"textarea":Sc(s,o),Me("invalid",s)}ji(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var l=o[i];i==="children"?typeof l=="string"?s.textContent!==l&&(o.suppressHydrationWarning!==!0&&la(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&la(s.textContent,l,e),a=["children",""+l]):Es.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Me("scroll",s)}switch(r){case"input":ea(s),kc(s,o,!0);break;case"textarea":ea(s),Cc(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=Ha)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ju(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=i.createElement(r,{is:s.is}):(e=i.createElement(r),r==="select"&&(i=e,s.multiple?i.multiple=!0:s.size&&(i.size=s.size))):e=i.createElementNS(e,r),e[an]=t,e[Ms]=s,Wm(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ni(r,s),r){case"dialog":Me("cancel",e),Me("close",e),a=s;break;case"iframe":case"object":case"embed":Me("load",e),a=s;break;case"video":case"audio":for(a=0;a<xs.length;a++)Me(xs[a],e);a=s;break;case"source":Me("error",e),a=s;break;case"img":case"image":case"link":Me("error",e),Me("load",e),a=s;break;case"details":Me("toggle",e),a=s;break;case"input":Nc(e,s),a=gi(e,s),Me("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=Ye({},s,{value:void 0}),Me("invalid",e);break;case"textarea":Sc(e,s),a=bi(e,s),Me("invalid",e);break;default:a=s}ji(r,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Su(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Nu(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Ps(e,c):typeof c=="number"&&Ps(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Es.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Me("scroll",e):c!=null&&pl(e,o,c,i))}switch(r){case"input":ea(e),kc(e,s,!1);break;case"textarea":ea(e),Cc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Wn(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?Ir(e,!!s.multiple,o,!1):s.defaultValue!=null&&Ir(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ha)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dt(t),null;case 6:if(e&&t.stateNode!=null)Gm(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(X(166));if(r=nr(Fs.current),nr(ln.current),ca(t)){if(s=t.stateNode,r=t.memoizedProps,s[an]=t,(o=s.nodeValue!==r)&&(e=Rt,e!==null))switch(e.tag){case 3:la(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&la(s.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[an]=t,t.stateNode=s}return dt(t),null;case 13:if(Fe(qe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Be&&Tt!==null&&t.mode&1&&!(t.flags&128))mm(),Br(),t.flags|=98560,o=!1;else if(o=ca(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(X(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(X(317));o[an]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dt(t),o=!1}else Gt!==null&&(rl(Gt),Gt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?tt===0&&(tt=3):Kl())),t.updateQueue!==null&&(t.flags|=4),dt(t),null);case 4:return qr(),Vi(e,t),e===null&&zs(t.stateNode.containerInfo),dt(t),null;case 10:return Al(t.type._context),dt(t),null;case 17:return St(t.type)&&Ga(),dt(t),null;case 19:if(Fe(qe),o=t.memoizedState,o===null)return dt(t),null;if(s=(t.flags&128)!==0,i=o.rendering,i===null)if(s)os(o,!1);else{if(tt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=to(e),i!==null){for(t.flags|=128,os(o,!1),s=i.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)o=r,e=s,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ze(qe,qe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ve()>Yr&&(t.flags|=128,s=!0,os(o,!1),t.lanes=4194304)}else{if(!s)if(e=to(i),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),os(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Be)return dt(t),null}else 2*Ve()-o.renderingStartTime>Yr&&r!==1073741824&&(t.flags|=128,s=!0,os(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ve(),t.sibling=null,r=qe.current,ze(qe,s?r&1|2:r&1),t):(dt(t),null);case 22:case 23:return Xl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Pt&1073741824&&(dt(t),t.subtreeFlags&6&&(t.flags|=8192)):dt(t),null;case 24:return null;case 25:return null}throw Error(X(156,t.tag))}function Gh(e,t){switch(Rl(t),t.tag){case 1:return St(t.type)&&Ga(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(),Fe(kt),Fe(ft),Fl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ol(t),null;case 13:if(Fe(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(X(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(qe),null;case 4:return qr(),null;case 10:return Al(t.type._context),null;case 22:case 23:return Xl(),null;case 24:return null;default:return null}}var ma=!1,mt=!1,Vh=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Rr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){He(e,t,s)}else r.current=null}function Xi(e,t,r){try{r()}catch(s){He(e,t,s)}}var pd=!1;function Xh(e,t){if(Li=Qa,e=Zu(),Pl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,l=-1,c=-1,u=0,m=0,p=e,f=null;t:for(;;){for(var b;p!==r||a!==0&&p.nodeType!==3||(l=i+a),p!==o||s!==0&&p.nodeType!==3||(c=i+s),p.nodeType===3&&(i+=p.nodeValue.length),(b=p.firstChild)!==null;)f=p,p=b;for(;;){if(p===e)break t;if(f===r&&++u===a&&(l=i),f===o&&++m===s&&(c=i),(b=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=b}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ai={focusedElem:e,selectionRange:r},Qa=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,C=y.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?j:Wt(t.type,j),C);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(X(163))}}catch(E){He(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return y=pd,pd=!1,y}function Ns(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Xi(t,r,o)}a=a.next}while(a!==s)}}function wo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Ki(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Vm(e){var t=e.alternate;t!==null&&(e.alternate=null,Vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[an],delete t[Ms],delete t[Mi],delete t[Ih],delete t[Lh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xm(e){return e.tag===5||e.tag===3||e.tag===4}function xd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ji(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ha));else if(s!==4&&(e=e.child,e!==null))for(Ji(e,t,r),e=e.sibling;e!==null;)Ji(e,t,r),e=e.sibling}function Zi(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Zi(e,t,r),e=e.sibling;e!==null;)Zi(e,t,r),e=e.sibling}var ot=null,Ht=!1;function Cn(e,t,r){for(r=r.child;r!==null;)Km(e,t,r),r=r.sibling}function Km(e,t,r){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(fo,r)}catch{}switch(r.tag){case 5:mt||Rr(r,t);case 6:var s=ot,a=Ht;ot=null,Cn(e,t,r),ot=s,Ht=a,ot!==null&&(Ht?(e=ot,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ot.removeChild(r.stateNode));break;case 18:ot!==null&&(Ht?(e=ot,r=r.stateNode,e.nodeType===8?Ho(e.parentNode,r):e.nodeType===1&&Ho(e,r),Is(e)):Ho(ot,r.stateNode));break;case 4:s=ot,a=Ht,ot=r.stateNode.containerInfo,Ht=!0,Cn(e,t,r),ot=s,Ht=a;break;case 0:case 11:case 14:case 15:if(!mt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Xi(r,t,i),a=a.next}while(a!==s)}Cn(e,t,r);break;case 1:if(!mt&&(Rr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(l){He(r,t,l)}Cn(e,t,r);break;case 21:Cn(e,t,r);break;case 22:r.mode&1?(mt=(s=mt)||r.memoizedState!==null,Cn(e,t,r),mt=s):Cn(e,t,r);break;default:Cn(e,t,r)}}function gd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Vh),t.forEach(function(s){var a=ap.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function Yt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var o=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,Ht=!1;break e;case 3:ot=l.stateNode.containerInfo,Ht=!0;break e;case 4:ot=l.stateNode.containerInfo,Ht=!0;break e}l=l.return}if(ot===null)throw Error(X(160));Km(o,i,a),ot=null,Ht=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){He(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jm(t,e),t=t.sibling}function Jm(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yt(t,e),en(e),s&4){try{Ns(3,e,e.return),wo(3,e)}catch(j){He(e,e.return,j)}try{Ns(5,e,e.return)}catch(j){He(e,e.return,j)}}break;case 1:Yt(t,e),en(e),s&512&&r!==null&&Rr(r,r.return);break;case 5:if(Yt(t,e),en(e),s&512&&r!==null&&Rr(r,r.return),e.flags&32){var a=e.stateNode;try{Ps(a,"")}catch(j){He(e,e.return,j)}}if(s&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&bu(a,o),Ni(l,i);var u=Ni(l,o);for(i=0;i<c.length;i+=2){var m=c[i],p=c[i+1];m==="style"?Su(a,p):m==="dangerouslySetInnerHTML"?Nu(a,p):m==="children"?Ps(a,p):pl(a,m,p,u)}switch(l){case"input":vi(a,o);break;case"textarea":wu(a,o);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?Ir(a,!!o.multiple,b,!1):f!==!!o.multiple&&(o.defaultValue!=null?Ir(a,!!o.multiple,o.defaultValue,!0):Ir(a,!!o.multiple,o.multiple?[]:"",!1))}a[Ms]=o}catch(j){He(e,e.return,j)}}break;case 6:if(Yt(t,e),en(e),s&4){if(e.stateNode===null)throw Error(X(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(j){He(e,e.return,j)}}break;case 3:if(Yt(t,e),en(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Is(t.containerInfo)}catch(j){He(e,e.return,j)}break;case 4:Yt(t,e),en(e);break;case 13:Yt(t,e),en(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Gl=Ve())),s&4&&gd(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(mt=(u=mt)||m,Yt(t,e),mt=u):Yt(t,e),en(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(ae=e,m=e.child;m!==null;){for(p=ae=m;ae!==null;){switch(f=ae,b=f.child,f.tag){case 0:case 11:case 14:case 15:Ns(4,f,f.return);break;case 1:Rr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){s=f,r=f.return;try{t=s,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){He(s,r,j)}}break;case 5:Rr(f,f.return);break;case 22:if(f.memoizedState!==null){yd(p);continue}}b!==null?(b.return=f,ae=b):yd(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{a=p.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=ku("display",i))}catch(j){He(e,e.return,j)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){He(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Yt(t,e),en(e),s&4&&gd(e);break;case 21:break;default:Yt(t,e),en(e)}}function en(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Xm(r)){var s=r;break e}r=r.return}throw Error(X(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Ps(a,""),s.flags&=-33);var o=xd(e);Zi(e,o,a);break;case 3:case 4:var i=s.stateNode.containerInfo,l=xd(e);Ji(e,l,i);break;default:throw Error(X(161))}}catch(c){He(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kh(e,t,r){ae=e,Zm(e)}function Zm(e,t,r){for(var s=(e.mode&1)!==0;ae!==null;){var a=ae,o=a.child;if(a.tag===22&&s){var i=a.memoizedState!==null||ma;if(!i){var l=a.alternate,c=l!==null&&l.memoizedState!==null||mt;l=ma;var u=mt;if(ma=i,(mt=c)&&!u)for(ae=a;ae!==null;)i=ae,c=i.child,i.tag===22&&i.memoizedState!==null?bd(a):c!==null?(c.return=i,ae=c):bd(a);for(;o!==null;)ae=o,Zm(o),o=o.sibling;ae=a,ma=l,mt=u}vd(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,ae=o):vd(e)}}function vd(e){for(;ae!==null;){var t=ae;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:mt||wo(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!mt)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Wt(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&nd(t,o,s);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}nd(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Is(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(X(163))}mt||t.flags&512&&Ki(t)}catch(f){He(t,t.return,f)}}if(t===e){ae=null;break}if(r=t.sibling,r!==null){r.return=t.return,ae=r;break}ae=t.return}}function yd(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ae=r;break}ae=t.return}}function bd(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{wo(4,t)}catch(c){He(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(c){He(t,a,c)}}var o=t.return;try{Ki(t)}catch(c){He(t,o,c)}break;case 5:var i=t.return;try{Ki(t)}catch(c){He(t,i,c)}}}catch(c){He(t,t.return,c)}if(t===e){ae=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ae=l;break}ae=t.return}}var Jh=Math.ceil,so=Nn.ReactCurrentDispatcher,Wl=Nn.ReactCurrentOwner,Ft=Nn.ReactCurrentBatchConfig,Se=0,st=null,Je=null,it=0,Pt=0,_r=Vn(0),tt=0,qs=null,ur=0,jo=0,Hl=0,ks=null,jt=null,Gl=0,Yr=1/0,mn=null,ao=!1,el=null,qn=null,fa=!1,Mn=null,oo=0,Ss=0,tl=null,Ia=-1,La=0;function yt(){return Se&6?Ve():Ia!==-1?Ia:Ia=Ve()}function Qn(e){return e.mode&1?Se&2&&it!==0?it&-it:zh.transition!==null?(La===0&&(La=Mu()),La):(e=Re,e!==0||(e=window.event,e=e===void 0?16:Qu(e.type)),e):1}function Xt(e,t,r,s){if(50<Ss)throw Ss=0,tl=null,Error(X(185));Ws(e,r,s),(!(Se&2)||e!==st)&&(e===st&&(!(Se&2)&&(jo|=r),tt===4&&zn(e,it)),Ct(e,s),r===1&&Se===0&&!(t.mode&1)&&(Yr=Ve()+500,vo&&Xn()))}function Ct(e,t){var r=e.callbackNode;z0(e,t);var s=qa(e,e===st?it:0);if(s===0)r!==null&&Tc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Tc(r),t===1)e.tag===0?Ah(wd.bind(null,e)):cm(wd.bind(null,e)),Rh(function(){!(Se&6)&&Xn()}),r=null;else{switch(Ou(s)){case 1:r=bl;break;case 4:r=zu;break;case 16:r=Ua;break;case 536870912:r=Du;break;default:r=Ua}r=lf(r,ef.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ef(e,t){if(Ia=-1,La=0,Se&6)throw Error(X(327));var r=e.callbackNode;if(Mr()&&e.callbackNode!==r)return null;var s=qa(e,e===st?it:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=io(e,s);else{t=s;var a=Se;Se|=2;var o=nf();(st!==e||it!==t)&&(mn=null,Yr=Ve()+500,ar(e,t));do try{tp();break}catch(l){tf(e,l)}while(1);Ll(),so.current=o,Se=a,Je!==null?t=0:(st=null,it=0,t=tt)}if(t!==0){if(t===2&&(a=Pi(e),a!==0&&(s=a,t=nl(e,a))),t===1)throw r=qs,ar(e,0),zn(e,s),Ct(e,Ve()),r;if(t===6)zn(e,s);else{if(a=e.current.alternate,!(s&30)&&!Zh(a)&&(t=io(e,s),t===2&&(o=Pi(e),o!==0&&(s=o,t=nl(e,o))),t===1))throw r=qs,ar(e,0),zn(e,s),Ct(e,Ve()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(X(345));case 2:Zn(e,jt,mn);break;case 3:if(zn(e,s),(s&130023424)===s&&(t=Gl+500-Ve(),10<t)){if(qa(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){yt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Di(Zn.bind(null,e,jt,mn),t);break}Zn(e,jt,mn);break;case 4:if(zn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var i=31-Vt(s);o=1<<i,i=t[i],i>a&&(a=i),s&=~o}if(s=a,s=Ve()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Jh(s/1960))-s,10<s){e.timeoutHandle=Di(Zn.bind(null,e,jt,mn),s);break}Zn(e,jt,mn);break;case 5:Zn(e,jt,mn);break;default:throw Error(X(329))}}}return Ct(e,Ve()),e.callbackNode===r?ef.bind(null,e):null}function nl(e,t){var r=ks;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=io(e,t),e!==2&&(t=jt,jt=r,t!==null&&rl(t)),e}function rl(e){jt===null?jt=e:jt.push.apply(jt,e)}function Zh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],o=a.getSnapshot;a=a.value;try{if(!Kt(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zn(e,t){for(t&=~Hl,t&=~jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Vt(t),s=1<<r;e[r]=-1,t&=~s}}function wd(e){if(Se&6)throw Error(X(327));Mr();var t=qa(e,0);if(!(t&1))return Ct(e,Ve()),null;var r=io(e,t);if(e.tag!==0&&r===2){var s=Pi(e);s!==0&&(t=s,r=nl(e,s))}if(r===1)throw r=qs,ar(e,0),zn(e,t),Ct(e,Ve()),r;if(r===6)throw Error(X(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zn(e,jt,mn),Ct(e,Ve()),null}function Vl(e,t){var r=Se;Se|=1;try{return e(t)}finally{Se=r,Se===0&&(Yr=Ve()+500,vo&&Xn())}}function mr(e){Mn!==null&&Mn.tag===0&&!(Se&6)&&Mr();var t=Se;Se|=1;var r=Ft.transition,s=Re;try{if(Ft.transition=null,Re=1,e)return e()}finally{Re=s,Ft.transition=r,Se=t,!(Se&6)&&Xn()}}function Xl(){Pt=_r.current,Fe(_r)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Th(r)),Je!==null)for(r=Je.return;r!==null;){var s=r;switch(Rl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ga();break;case 3:qr(),Fe(kt),Fe(ft),Fl();break;case 5:Ol(s);break;case 4:qr();break;case 13:Fe(qe);break;case 19:Fe(qe);break;case 10:Al(s.type._context);break;case 22:case 23:Xl()}r=r.return}if(st=e,Je=e=Yn(e.current,null),it=Pt=t,tt=0,qs=null,Hl=jo=ur=0,jt=ks=null,tr!==null){for(t=0;t<tr.length;t++)if(r=tr[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,s.next=i}r.pending=s}tr=null}return e}function tf(e,t){do{var r=Je;try{if(Ll(),Ta.current=ro,no){for(var s=Qe.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}no=!1}if(dr=0,rt=et=Qe=null,js=!1,$s=0,Wl.current=null,r===null||r.return===null){tt=1,qs=t,Je=null;break}e:{var o=e,i=r.return,l=r,c=t;if(t=it,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var b=ld(i);if(b!==null){b.flags&=-257,cd(b,i,l,o,t),b.mode&1&&id(o,u,t),t=b,c=u;var y=t.updateQueue;if(y===null){var j=new Set;j.add(c),t.updateQueue=j}else y.add(c);break e}else{if(!(t&1)){id(o,u,t),Kl();break e}c=Error(X(426))}}else if(Be&&l.mode&1){var C=ld(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),cd(C,i,l,o,t),_l(Qr(c,l));break e}}o=c=Qr(c,l),tt!==4&&(tt=2),ks===null?ks=[o]:ks.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Om(o,c,t);td(o,v);break e;case 1:l=c;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(qn===null||!qn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=Fm(o,l,t);td(o,E);break e}}o=o.return}while(o!==null)}sf(r)}catch(N){t=N,Je===r&&r!==null&&(Je=r=r.return);continue}break}while(1)}function nf(){var e=so.current;return so.current=ro,e===null?ro:e}function Kl(){(tt===0||tt===3||tt===2)&&(tt=4),st===null||!(ur&268435455)&&!(jo&268435455)||zn(st,it)}function io(e,t){var r=Se;Se|=2;var s=nf();(st!==e||it!==t)&&(mn=null,ar(e,t));do try{ep();break}catch(a){tf(e,a)}while(1);if(Ll(),Se=r,so.current=s,Je!==null)throw Error(X(261));return st=null,it=0,tt}function ep(){for(;Je!==null;)rf(Je)}function tp(){for(;Je!==null&&!C0();)rf(Je)}function rf(e){var t=of(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?sf(e):Je=t,Wl.current=null}function sf(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Gh(r,t),r!==null){r.flags&=32767,Je=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Je=null;return}}else if(r=Hh(r,t,Pt),r!==null){Je=r;return}if(t=t.sibling,t!==null){Je=t;return}Je=t=e}while(t!==null);tt===0&&(tt=5)}function Zn(e,t,r){var s=Re,a=Ft.transition;try{Ft.transition=null,Re=1,np(e,t,r,s)}finally{Ft.transition=a,Re=s}return null}function np(e,t,r,s){do Mr();while(Mn!==null);if(Se&6)throw Error(X(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(X(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(D0(e,o),e===st&&(Je=st=null,it=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||fa||(fa=!0,lf(Ua,function(){return Mr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ft.transition,Ft.transition=null;var i=Re;Re=1;var l=Se;Se|=4,Wl.current=null,Xh(e,r),Jm(r,e),jh(Ai),Qa=!!Li,Ai=Li=null,e.current=r,Kh(r),E0(),Se=l,Re=i,Ft.transition=o}else e.current=r;if(fa&&(fa=!1,Mn=e,oo=a),o=e.pendingLanes,o===0&&(qn=null),R0(r.stateNode),Ct(e,Ve()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(ao)throw ao=!1,e=el,el=null,e;return oo&1&&e.tag!==0&&Mr(),o=e.pendingLanes,o&1?e===tl?Ss++:(Ss=0,tl=e):Ss=0,Xn(),null}function Mr(){if(Mn!==null){var e=Ou(oo),t=Ft.transition,r=Re;try{if(Ft.transition=null,Re=16>e?16:e,Mn===null)var s=!1;else{if(e=Mn,Mn=null,oo=0,Se&6)throw Error(X(331));var a=Se;for(Se|=4,ae=e.current;ae!==null;){var o=ae,i=o.child;if(ae.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ae=u;ae!==null;){var m=ae;switch(m.tag){case 0:case 11:case 15:Ns(8,m,o)}var p=m.child;if(p!==null)p.return=m,ae=p;else for(;ae!==null;){m=ae;var f=m.sibling,b=m.return;if(Vm(m),m===u){ae=null;break}if(f!==null){f.return=b,ae=f;break}ae=b}}}var y=o.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var C=j.sibling;j.sibling=null,j=C}while(j!==null)}}ae=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,ae=i;else e:for(;ae!==null;){if(o=ae,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ns(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,ae=v;break e}ae=o.return}}var h=e.current;for(ae=h;ae!==null;){i=ae;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,ae=g;else e:for(i=h;ae!==null;){if(l=ae,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:wo(9,l)}}catch(N){He(l,l.return,N)}if(l===i){ae=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,ae=E;break e}ae=l.return}}if(Se=a,Xn(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(fo,e)}catch{}s=!0}return s}finally{Re=r,Ft.transition=t}}return!1}function jd(e,t,r){t=Qr(r,t),t=Om(e,t,1),e=Un(e,t,1),t=yt(),e!==null&&(Ws(e,1,t),Ct(e,t))}function He(e,t,r){if(e.tag===3)jd(e,e,r);else for(;t!==null;){if(t.tag===3){jd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(qn===null||!qn.has(s))){e=Qr(r,e),e=Fm(t,e,1),t=Un(t,e,1),e=yt(),t!==null&&(Ws(t,1,e),Ct(t,e));break}}t=t.return}}function rp(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&r,st===e&&(it&r)===r&&(tt===4||tt===3&&(it&130023424)===it&&500>Ve()-Gl?ar(e,0):Hl|=r),Ct(e,t)}function af(e,t){t===0&&(e.mode&1?(t=ra,ra<<=1,!(ra&130023424)&&(ra=4194304)):t=1);var r=yt();e=bn(e,t),e!==null&&(Ws(e,t,r),Ct(e,r))}function sp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),af(e,r)}function ap(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(X(314))}s!==null&&s.delete(t),af(e,r)}var of;of=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)Nt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Nt=!1,Wh(e,t,r);Nt=!!(e.flags&131072)}else Nt=!1,Be&&t.flags&1048576&&dm(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;_a(e,t),e=t.pendingProps;var a=$r(t,ft.current);Dr(t,r),a=Bl(null,t,s,e,a,r);var o=Ul();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(s)?(o=!0,Va(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Dl(t),a.updater=bo,t.stateNode=a,a._reactInternals=t,qi(t,s,e,r),t=Wi(null,t,s,!0,o,r)):(t.tag=0,Be&&o&&Tl(t),vt(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(_a(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=ip(s),e=Wt(s,e),a){case 0:t=Yi(null,t,s,e,r);break e;case 1:t=md(null,t,s,e,r);break e;case 11:t=dd(null,t,s,e,r);break e;case 14:t=ud(null,t,s,Wt(s.type,e),r);break e}throw Error(X(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Wt(s,a),Yi(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Wt(s,a),md(e,t,s,a,r);case 3:e:{if(qm(t),e===null)throw Error(X(387));s=t.pendingProps,o=t.memoizedState,a=o.element,xm(e,t),eo(t,s,null,r);var i=t.memoizedState;if(s=i.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Qr(Error(X(423)),t),t=fd(e,t,s,r,a);break e}else if(s!==a){a=Qr(Error(X(424)),t),t=fd(e,t,s,r,a);break e}else for(Tt=Bn(t.stateNode.containerInfo.firstChild),Rt=t,Be=!0,Gt=null,r=hm(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Br(),s===a){t=wn(e,t,r);break e}vt(e,t,s,r)}t=t.child}return t;case 5:return gm(t),e===null&&$i(t),s=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,zi(s,a)?i=null:o!==null&&zi(s,o)&&(t.flags|=32),Um(e,t),vt(e,t,i,r),t.child;case 6:return e===null&&$i(t),null;case 13:return Qm(e,t,r);case 4:return Ml(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Ur(t,null,s,r):vt(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Wt(s,a),dd(e,t,s,a,r);case 7:return vt(e,t,t.pendingProps,r),t.child;case 8:return vt(e,t,t.pendingProps.children,r),t.child;case 12:return vt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,ze(Ja,s._currentValue),s._currentValue=i,o!==null)if(Kt(o.value,i)){if(o.children===a.children&&!kt.current){t=wn(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){i=o.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(o.tag===1){c=xn(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),Bi(o.return,r,t),l.lanes|=r;break}c=c.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(X(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Bi(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}vt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Dr(t,r),a=$t(a),s=s(a),t.flags|=1,vt(e,t,s,r),t.child;case 14:return s=t.type,a=Wt(s,t.pendingProps),a=Wt(s.type,a),ud(e,t,s,a,r);case 15:return $m(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Wt(s,a),_a(e,t),t.tag=1,St(s)?(e=!0,Va(t)):e=!1,Dr(t,r),Mm(t,s,a),qi(t,s,a,r),Wi(null,t,s,!0,e,r);case 19:return Ym(e,t,r);case 22:return Bm(e,t,r)}throw Error(X(156,t.tag))};function lf(e,t){return Au(e,t)}function op(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,r,s){return new op(e,t,r,s)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ip(e){if(typeof e=="function")return Jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gl)return 11;if(e===vl)return 14}return 2}function Yn(e,t){var r=e.alternate;return r===null?(r=Mt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Aa(e,t,r,s,a,o){var i=2;if(s=e,typeof e=="function")Jl(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case wr:return or(r.children,a,o,t);case xl:i=8,a|=8;break;case fi:return e=Mt(12,r,t,a|2),e.elementType=fi,e.lanes=o,e;case hi:return e=Mt(13,r,t,a),e.elementType=hi,e.lanes=o,e;case pi:return e=Mt(19,r,t,a),e.elementType=pi,e.lanes=o,e;case gu:return No(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pu:i=10;break e;case xu:i=9;break e;case gl:i=11;break e;case vl:i=14;break e;case _n:i=16,s=null;break e}throw Error(X(130,e==null?e:typeof e,""))}return t=Mt(i,r,t,a),t.elementType=e,t.type=s,t.lanes=o,t}function or(e,t,r,s){return e=Mt(7,e,s,t),e.lanes=r,e}function No(e,t,r,s){return e=Mt(22,e,s,t),e.elementType=gu,e.lanes=r,e.stateNode={isHidden:!1},e}function ti(e,t,r){return e=Mt(6,e,null,t),e.lanes=r,e}function ni(e,t,r){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lp(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Do(0),this.expirationTimes=Do(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Zl(e,t,r,s,a,o,i,l,c){return e=new lp(e,t,r,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Mt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dl(o),e}function cp(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function cf(e){if(!e)return Hn;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(X(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(X(171))}if(e.tag===1){var r=e.type;if(St(r))return lm(e,r,t)}return t}function df(e,t,r,s,a,o,i,l,c){return e=Zl(r,s,!0,e,a,o,i,l,c),e.context=cf(null),r=e.current,s=yt(),a=Qn(r),o=xn(s,a),o.callback=t??null,Un(r,o,a),e.current.lanes=a,Ws(e,a,s),Ct(e,s),e}function ko(e,t,r,s){var a=t.current,o=yt(),i=Qn(a);return r=cf(r),t.context===null?t.context=r:t.pendingContext=r,t=xn(o,i),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Un(a,t,i),e!==null&&(Xt(e,a,i,o),Pa(e,a,i)),i}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ec(e,t){Nd(e,t),(e=e.alternate)&&Nd(e,t)}function dp(){return null}var uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}So.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(X(409));ko(e,t,null,null)};So.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mr(function(){ko(null,e,null,null)}),t[yn]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<An.length&&t!==0&&t<An[r].priority;r++);An.splice(r,0,e),r===0&&qu(e)}};function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kd(){}function up(e,t,r,s,a){if(a){if(typeof s=="function"){var o=s;s=function(){var u=lo(i);o.call(u)}}var i=df(t,s,e,0,null,!1,!1,"",kd);return e._reactRootContainer=i,e[yn]=i.current,zs(e.nodeType===8?e.parentNode:e),mr(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var u=lo(c);l.call(u)}}var c=Zl(e,0,!1,null,null,!1,!1,"",kd);return e._reactRootContainer=c,e[yn]=c.current,zs(e.nodeType===8?e.parentNode:e),mr(function(){ko(t,c,r,s)}),c}function Eo(e,t,r,s,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var l=a;a=function(){var c=lo(i);l.call(c)}}ko(t,i,e,a)}else i=up(r,t,e,a,s);return lo(i)}Fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ps(t.pendingLanes);r!==0&&(wl(t,r|1),Ct(t,Ve()),!(Se&6)&&(Yr=Ve()+500,Xn()))}break;case 13:mr(function(){var s=bn(e,1);if(s!==null){var a=yt();Xt(s,e,1,a)}}),ec(e,1)}};jl=function(e){if(e.tag===13){var t=bn(e,134217728);if(t!==null){var r=yt();Xt(t,e,134217728,r)}ec(e,134217728)}};$u=function(e){if(e.tag===13){var t=Qn(e),r=bn(e,t);if(r!==null){var s=yt();Xt(r,e,t,s)}ec(e,t)}};Bu=function(){return Re};Uu=function(e,t){var r=Re;try{return Re=e,t()}finally{Re=r}};Si=function(e,t,r){switch(t){case"input":if(vi(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=go(s);if(!a)throw Error(X(90));yu(s),vi(s,a)}}}break;case"textarea":wu(e,r);break;case"select":t=r.value,t!=null&&Ir(e,!!r.multiple,t,!1)}};Pu=Vl;Tu=mr;var mp={usingClientEntryPoint:!1,Events:[Gs,Sr,go,Cu,Eu,Vl]},is={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fp={bundleType:is.bundleType,version:is.version,rendererPackageName:is.rendererPackageName,rendererConfig:is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Iu(e),e===null?null:e.stateNode},findFiberByHostInstance:is.findFiberByHostInstance||dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ha.isDisabled&&ha.supportsFiber)try{fo=ha.inject(fp),on=ha}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mp;It.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(t))throw Error(X(200));return cp(e,t,null,r)};It.createRoot=function(e,t){if(!nc(e))throw Error(X(299));var r=!1,s="",a=uf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Zl(e,1,!1,null,null,r,!1,s,a),e[yn]=t.current,zs(e.nodeType===8?e.parentNode:e),new tc(t)};It.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(X(188)):(e=Object.keys(e).join(","),Error(X(268,e)));return e=Iu(t),e=e===null?null:e.stateNode,e};It.flushSync=function(e){return mr(e)};It.hydrate=function(e,t,r){if(!Co(t))throw Error(X(200));return Eo(null,e,t,!0,r)};It.hydrateRoot=function(e,t,r){if(!nc(e))throw Error(X(405));var s=r!=null&&r.hydratedSources||null,a=!1,o="",i=uf;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=df(t,null,e,1,r??null,a,!1,o,i),e[yn]=t.current,zs(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new So(t)};It.render=function(e,t,r){if(!Co(t))throw Error(X(200));return Eo(null,e,t,!1,r)};It.unmountComponentAtNode=function(e){if(!Co(e))throw Error(X(40));return e._reactRootContainer?(mr(function(){Eo(null,null,e,!1,function(){e._reactRootContainer=null,e[yn]=null})}),!0):!1};It.unstable_batchedUpdates=Vl;It.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!Co(r))throw Error(X(200));if(e==null||e._reactInternals===void 0)throw Error(X(38));return Eo(e,t,r,!1,s)};It.version="18.3.1-next-f1338f8080-20240426";function mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mf)}catch(e){console.error(e)}}mf(),uu.exports=It;var hp=uu.exports,Sd=hp;ui.createRoot=Sd.createRoot,ui.hydrateRoot=Sd.hydrateRoot;const pp="modulepreload",xp=function(e){return"/"+e},Cd={},rc=function(t,r,s){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=xp(o),o in Cd)return;Cd[o]=!0;const i=o.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!s)for(let m=a.length-1;m>=0;m--){const p=a[m];if(p.href===o&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":pp,i||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),i)return new Promise((m,p)=>{u.addEventListener("load",m),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};var Ed="popstate";function gp(e={}){function t(s,a){let{pathname:o,search:i,hash:l}=s.location;return sl("",{pathname:o,search:i,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:Qs(a)}return yp(t,r,null,e)}function Ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ut(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function vp(){return Math.random().toString(36).substring(2,10)}function Pd(e,t){return{usr:e.state,key:e.key,idx:t}}function sl(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Kr(t):t,state:r,key:t&&t.key||s||vp()}}function Qs({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Kr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function yp(e,t,r,s={}){let{window:a=document.defaultView,v5Compat:o=!1}=s,i=a.history,l="POP",c=null,u=m();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function m(){return(i.state||{idx:null}).idx}function p(){l="POP";let C=m(),v=C==null?null:C-u;u=C,c&&c({action:l,location:j.location,delta:v})}function f(C,v){l="PUSH";let h=sl(j.location,C,v);r&&r(h,C),u=m()+1;let g=Pd(h,u),E=j.createHref(h);try{i.pushState(g,"",E)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;a.location.assign(E)}o&&c&&c({action:l,location:j.location,delta:1})}function b(C,v){l="REPLACE";let h=sl(j.location,C,v);r&&r(h,C),u=m();let g=Pd(h,u),E=j.createHref(h);i.replaceState(g,"",E),o&&c&&c({action:l,location:j.location,delta:0})}function y(C){return bp(C)}let j={get action(){return l},get location(){return e(a,i)},listen(C){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Ed,p),c=C,()=>{a.removeEventListener(Ed,p),c=null}},createHref(C){return t(a,C)},createURL:y,encodeLocation(C){let v=y(C);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:b,go(C){return i.go(C)}};return j}function bp(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Qs(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function ff(e,t,r="/"){return wp(e,t,r,!1)}function wp(e,t,r,s){let a=typeof t=="string"?Kr(t):t,o=jn(a.pathname||"/",r);if(o==null)return null;let i=hf(e);jp(i);let l=null;for(let c=0;l==null&&c<i.length;++c){let u=Lp(o);l=_p(i[c],u,s)}return l}function hf(e,t=[],r=[],s=""){let a=(o,i,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};c.relativePath.startsWith("/")&&(Ue(c.relativePath.startsWith(s),`Absolute route path "${c.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(s.length));let u=gn([s,c.relativePath]),m=r.concat(c);o.children&&o.children.length>0&&(Ue(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),hf(o.children,t,m,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Tp(u,o.index),routesMeta:m})};return e.forEach((o,i)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))a(o,i);else for(let c of pf(o.path))a(o,i,c)}),t}function pf(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(s.length===0)return a?[o,""]:[o];let i=pf(s.join("/")),l=[];return l.push(...i.map(c=>c===""?o:[o,c].join("/"))),a&&l.push(...i),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function jp(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Rp(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var Np=/^:[\w-]+$/,kp=3,Sp=2,Cp=1,Ep=10,Pp=-2,Td=e=>e==="*";function Tp(e,t){let r=e.split("/"),s=r.length;return r.some(Td)&&(s+=Pp),t&&(s+=Sp),r.filter(a=>!Td(a)).reduce((a,o)=>a+(Np.test(o)?kp:o===""?Cp:Ep),s)}function Rp(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function _p(e,t,r=!1){let{routesMeta:s}=e,a={},o="/",i=[];for(let l=0;l<s.length;++l){let c=s[l],u=l===s.length-1,m=o==="/"?t:t.slice(o.length)||"/",p=co({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),f=c.route;if(!p&&u&&r&&!s[s.length-1].route.index&&(p=co({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!p)return null;Object.assign(a,p.params),i.push({params:a,pathname:gn([o,p.pathname]),pathnameBase:Mp(gn([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=gn([o,p.pathnameBase]))}return i}function co(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=Ip(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((u,{paramName:m,isOptional:p},f)=>{if(m==="*"){let y=l[f]||"";i=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const b=l[f];return p&&!b?u[m]=void 0:u[m]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function Ip(e,t=!1,r=!0){Ut(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function Lp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ut(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function jn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function Ap(e,t="/"){let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Kr(e):e;return{pathname:r?r.startsWith("/")?r:zp(r,t):t,search:Op(s),hash:Fp(a)}}function zp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function ri(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Dp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function sc(e){let t=Dp(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function ac(e,t,r,s=!1){let a;typeof e=="string"?a=Kr(e):(a={...e},Ue(!a.pathname||!a.pathname.includes("?"),ri("?","pathname","search",a)),Ue(!a.pathname||!a.pathname.includes("#"),ri("#","pathname","hash",a)),Ue(!a.search||!a.search.includes("#"),ri("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,l;if(i==null)l=r;else{let p=t.length-1;if(!s&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),p-=1;a.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=Ap(a,l),u=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var gn=e=>e.join("/").replace(/\/\/+/g,"/"),Mp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Op=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Fp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $p(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var xf=["POST","PUT","PATCH","DELETE"];new Set(xf);var Bp=["GET",...xf];new Set(Bp);var Jr=d.createContext(null);Jr.displayName="DataRouter";var Po=d.createContext(null);Po.displayName="DataRouterState";d.createContext(!1);var gf=d.createContext({isTransitioning:!1});gf.displayName="ViewTransition";var Up=d.createContext(new Map);Up.displayName="Fetchers";var qp=d.createContext(null);qp.displayName="Await";var Jt=d.createContext(null);Jt.displayName="Navigation";var Xs=d.createContext(null);Xs.displayName="Location";var qt=d.createContext({outlet:null,matches:[],isDataRoute:!1});qt.displayName="Route";var oc=d.createContext(null);oc.displayName="RouteError";function Qp(e,{relative:t}={}){Ue(Zr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=d.useContext(Jt),{hash:a,pathname:o,search:i}=Ks(e,{relative:t}),l=o;return r!=="/"&&(l=o==="/"?r:gn([r,o])),s.createHref({pathname:l,search:i,hash:a})}function Zr(){return d.useContext(Xs)!=null}function nt(){return Ue(Zr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Xs).location}var vf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function yf(e){d.useContext(Jt).static||d.useLayoutEffect(e)}function _e(){let{isDataRoute:e}=d.useContext(qt);return e?ox():Yp()}function Yp(){Ue(Zr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Jr),{basename:t,navigator:r}=d.useContext(Jt),{matches:s}=d.useContext(qt),{pathname:a}=nt(),o=JSON.stringify(sc(s)),i=d.useRef(!1);return yf(()=>{i.current=!0}),d.useCallback((c,u={})=>{if(Ut(i.current,vf),!i.current)return;if(typeof c=="number"){r.go(c);return}let m=ac(c,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:gn([t,m.pathname])),(u.replace?r.replace:r.push)(m,u.state,u)},[t,r,o,a,e])}var Wp=d.createContext(null);function Hp(e){let t=d.useContext(qt).outlet;return t&&d.createElement(Wp.Provider,{value:e},t)}function Gp(){let{matches:e}=d.useContext(qt),t=e[e.length-1];return t?t.params:{}}function Ks(e,{relative:t}={}){let{matches:r}=d.useContext(qt),{pathname:s}=nt(),a=JSON.stringify(sc(r));return d.useMemo(()=>ac(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function Vp(e,t){return bf(e,t)}function bf(e,t,r,s){var v;Ue(Zr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=d.useContext(Jt),{matches:o}=d.useContext(qt),i=o[o.length-1],l=i?i.params:{},c=i?i.pathname:"/",u=i?i.pathnameBase:"/",m=i&&i.route;{let h=m&&m.path||"";wf(c,!m||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let p=nt(),f;if(t){let h=typeof t=="string"?Kr(t):t;Ue(u==="/"||((v=h.pathname)==null?void 0:v.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${h.pathname}" was given in the \`location\` prop.`),f=h}else f=p;let b=f.pathname||"/",y=b;if(u!=="/"){let h=u.replace(/^\//,"").split("/");y="/"+b.replace(/^\//,"").split("/").slice(h.length).join("/")}let j=ff(e,{pathname:y});Ut(m||j!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),Ut(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=ex(j&&j.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:gn([u,a.encodeLocation?a.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?u:gn([u,a.encodeLocation?a.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),o,r,s);return t&&C?d.createElement(Xs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...f},navigationType:"POP"}},C):C}function Xp(){let e=ax(),t=$p(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},o={padding:"2px 4px",backgroundColor:s},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:o},"ErrorBoundary")," or"," ",d.createElement("code",{style:o},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:a},r):null,i)}var Kp=d.createElement(Xp,null),Jp=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(qt.Provider,{value:this.props.routeContext},d.createElement(oc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Zp({routeContext:e,match:t,children:r}){let s=d.useContext(Jr);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(qt.Provider,{value:e},r)}function ex(e,t=[],r=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,o=r==null?void 0:r.errors;if(o!=null){let c=a.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);Ue(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let i=!1,l=-1;if(r)for(let c=0;c<a.length;c++){let u=a[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:m,errors:p}=r,f=u.route.loader&&!m.hasOwnProperty(u.route.id)&&(!p||p[u.route.id]===void 0);if(u.route.lazy||f){i=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((c,u,m)=>{let p,f=!1,b=null,y=null;r&&(p=o&&u.route.id?o[u.route.id]:void 0,b=u.route.errorElement||Kp,i&&(l<0&&m===0?(wf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),f=!0,y=null):l===m&&(f=!0,y=u.route.hydrateFallbackElement||null)));let j=t.concat(a.slice(0,m+1)),C=()=>{let v;return p?v=b:f?v=y:u.route.Component?v=d.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=c,d.createElement(Zp,{match:u,routeContext:{outlet:c,matches:j,isDataRoute:r!=null},children:v})};return r&&(u.route.ErrorBoundary||u.route.errorElement||m===0)?d.createElement(Jp,{location:r.location,revalidation:r.revalidation,component:b,error:p,children:C(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):C()},null)}function ic(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tx(e){let t=d.useContext(Jr);return Ue(t,ic(e)),t}function nx(e){let t=d.useContext(Po);return Ue(t,ic(e)),t}function rx(e){let t=d.useContext(qt);return Ue(t,ic(e)),t}function lc(e){let t=rx(e),r=t.matches[t.matches.length-1];return Ue(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function sx(){return lc("useRouteId")}function ax(){var s;let e=d.useContext(oc),t=nx("useRouteError"),r=lc("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function ox(){let{router:e}=tx("useNavigate"),t=lc("useNavigate"),r=d.useRef(!1);return yf(()=>{r.current=!0}),d.useCallback(async(a,o={})=>{Ut(r.current,vf),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...o}))},[e,t])}var Rd={};function wf(e,t,r){!t&&!Rd[e]&&(Rd[e]=!0,Ut(!1,r))}d.memo(ix);function ix({routes:e,future:t,state:r}){return bf(e,void 0,r,t)}function lx({to:e,replace:t,state:r,relative:s}){Ue(Zr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=d.useContext(Jt);Ut(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=d.useContext(qt),{pathname:i}=nt(),l=_e(),c=ac(e,sc(o),i,s==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:r,relative:s})},[l,u,s,t,r]),null}function cx(e){return Hp(e.context)}function Le(e){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dx({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:a,static:o=!1}){Ue(!Zr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:i,navigator:a,static:o,future:{}}),[i,a,o]);typeof r=="string"&&(r=Kr(r));let{pathname:c="/",search:u="",hash:m="",state:p=null,key:f="default"}=r,b=d.useMemo(()=>{let y=jn(c,i);return y==null?null:{location:{pathname:y,search:u,hash:m,state:p,key:f},navigationType:s}},[i,c,u,m,p,f,s]);return Ut(b!=null,`<Router basename="${i}"> is not able to match the URL "${c}${u}${m}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:d.createElement(Jt.Provider,{value:l},d.createElement(Xs.Provider,{children:t,value:b}))}function ux({children:e,location:t}){return Vp(al(e),t)}function al(e,t=[]){let r=[];return d.Children.forEach(e,(s,a)=>{if(!d.isValidElement(s))return;let o=[...t,a];if(s.type===d.Fragment){r.push.apply(r,al(s.props.children,o));return}Ue(s.type===Le,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!s.props.index||!s.props.children,"An index route cannot have child routes.");let i={id:s.props.id||o.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(i.children=al(s.props.children,o)),r.push(i)}),r}var za="get",Da="application/x-www-form-urlencoded";function To(e){return e!=null&&typeof e.tagName=="string"}function mx(e){return To(e)&&e.tagName.toLowerCase()==="button"}function fx(e){return To(e)&&e.tagName.toLowerCase()==="form"}function hx(e){return To(e)&&e.tagName.toLowerCase()==="input"}function px(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xx(e,t){return e.button===0&&(!t||t==="_self")&&!px(e)}function ol(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let s=e[r];return t.concat(Array.isArray(s)?s.map(a=>[r,a]):[[r,s]])},[]))}function gx(e,t){let r=ol(e);return t&&t.forEach((s,a)=>{r.has(a)||t.getAll(a).forEach(o=>{r.append(a,o)})}),r}var pa=null;function vx(){if(pa===null)try{new FormData(document.createElement("form"),0),pa=!1}catch{pa=!0}return pa}var yx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function si(e){return e!=null&&!yx.has(e)?(Ut(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Da}"`),null):e}function bx(e,t){let r,s,a,o,i;if(fx(e)){let l=e.getAttribute("action");s=l?jn(l,t):null,r=e.getAttribute("method")||za,a=si(e.getAttribute("enctype"))||Da,o=new FormData(e)}else if(mx(e)||hx(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(s=c?jn(c,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||za,a=si(e.getAttribute("formenctype"))||si(l.getAttribute("enctype"))||Da,o=new FormData(l,e),!vx()){let{name:u,type:m,value:p}=e;if(m==="image"){let f=u?`${u}.`:"";o.append(`${f}x`,"0"),o.append(`${f}y`,"0")}else u&&o.append(u,p)}}else{if(To(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=za,s=null,a=Da,i=e}return o&&a==="text/plain"&&(i=o,o=void 0),{action:s,method:r.toLowerCase(),encType:a,formData:o,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function cc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wx(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&jn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function jx(e,t){if(e.id in t)return t[e.id];try{let r=await rc(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Nx(e){return e!=null&&typeof e.page=="string"}function kx(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Sx(e,t,r){let s=await Promise.all(e.map(async a=>{let o=t.routes[a.route.id];if(o){let i=await jx(o,r);return i.links?i.links():[]}return[]}));return Tx(s.flat(1).filter(kx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function _d(e,t,r,s,a,o){let i=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,l=(c,u)=>{var m;return r[u].pathname!==c.pathname||((m=r[u].route.path)==null?void 0:m.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>i(c,u)||l(c,u)):o==="data"?t.filter((c,u)=>{var p;let m=s.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(i(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let f=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof f=="boolean")return f}return!0}):[]}function Cx(e,t,{includeHydrateFallback:r}={}){return Ex(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function Ex(e){return[...new Set(e)]}function Px(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function Tx(e,t){let r=new Set,s=new Set(t);return e.reduce((a,o)=>{if(t&&!Nx(o)&&o.as==="script"&&o.href&&s.has(o.href))return a;let l=JSON.stringify(Px(o));return r.has(l)||(r.add(l),a.push({key:l,link:o})),a},[])}function jf(){let e=d.useContext(Jr);return cc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Rx(){let e=d.useContext(Po);return cc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var dc=d.createContext(void 0);dc.displayName="FrameworkContext";function Nf(){let e=d.useContext(dc);return cc(e,"You must render this element inside a <HydratedRouter> element"),e}function _x(e,t){let r=d.useContext(dc),[s,a]=d.useState(!1),[o,i]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:p}=t,f=d.useRef(null);d.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let j=v=>{v.forEach(h=>{i(h.isIntersecting)})},C=new IntersectionObserver(j,{threshold:.5});return f.current&&C.observe(f.current),()=>{C.disconnect()}}},[e]),d.useEffect(()=>{if(s){let j=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(j)}}},[s]);let b=()=>{a(!0)},y=()=>{a(!1),i(!1)};return r?e!=="intent"?[o,f,{}]:[o,f,{onFocus:ls(l,b),onBlur:ls(c,y),onMouseEnter:ls(u,b),onMouseLeave:ls(m,y),onTouchStart:ls(p,b)}]:[!1,f,{}]}function ls(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Ix({page:e,...t}){let{router:r}=jf(),s=d.useMemo(()=>ff(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?d.createElement(Ax,{page:e,matches:s,...t}):null}function Lx(e){let{manifest:t,routeModules:r}=Nf(),[s,a]=d.useState([]);return d.useEffect(()=>{let o=!1;return Sx(e,t,r).then(i=>{o||a(i)}),()=>{o=!0}},[e,t,r]),s}function Ax({page:e,matches:t,...r}){let s=nt(),{manifest:a,routeModules:o}=Nf(),{basename:i}=jf(),{loaderData:l,matches:c}=Rx(),u=d.useMemo(()=>_d(e,t,c,a,s,"data"),[e,t,c,a,s]),m=d.useMemo(()=>_d(e,t,c,a,s,"assets"),[e,t,c,a,s]),p=d.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let y=new Set,j=!1;if(t.forEach(v=>{var g;let h=a.routes[v.route.id];!h||!h.hasLoader||(!u.some(E=>E.route.id===v.route.id)&&v.route.id in l&&((g=o[v.route.id])!=null&&g.shouldRevalidate)||h.hasClientLoader?j=!0:y.add(v.route.id))}),y.size===0)return[];let C=wx(e,i,"data");return j&&y.size>0&&C.searchParams.set("_routes",t.filter(v=>y.has(v.route.id)).map(v=>v.route.id).join(",")),[C.pathname+C.search]},[i,l,s,a,u,t,e,o]),f=d.useMemo(()=>Cx(m,a),[m,a]),b=Lx(m);return d.createElement(d.Fragment,null,p.map(y=>d.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...r})),f.map(y=>d.createElement("link",{key:y,rel:"modulepreload",href:y,...r})),b.map(({key:y,link:j})=>d.createElement("link",{key:y,...j})))}function zx(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var kf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{kf&&(window.__reactRouterVersion="7.7.1")}catch{}function Dx({basename:e,children:t,window:r}){let s=d.useRef();s.current==null&&(s.current=gp({window:r,v5Compat:!0}));let a=s.current,[o,i]=d.useState({action:a.action,location:a.location}),l=d.useCallback(c=>{d.startTransition(()=>i(c))},[i]);return d.useLayoutEffect(()=>a.listen(l),[a,l]),d.createElement(dx,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a})}var Sf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cf=d.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:a,reloadDocument:o,replace:i,state:l,target:c,to:u,preventScrollReset:m,viewTransition:p,...f},b){let{basename:y}=d.useContext(Jt),j=typeof u=="string"&&Sf.test(u),C,v=!1;if(typeof u=="string"&&j&&(C=u,kf))try{let w=new URL(window.location.href),k=u.startsWith("//")?new URL(w.protocol+u):new URL(u),P=jn(k.pathname,y);k.origin===w.origin&&P!=null?u=P+k.search+k.hash:v=!0}catch{Ut(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let h=Qp(u,{relative:a}),[g,E,N]=_x(s,f),T=$x(u,{replace:i,state:l,target:c,preventScrollReset:m,relative:a,viewTransition:p});function S(w){t&&t(w),w.defaultPrevented||T(w)}let x=d.createElement("a",{...f,...N,href:C||h,onClick:v||o?t:S,ref:zx(b,E),target:c,"data-discover":!j&&r==="render"?"true":void 0});return g&&!j?d.createElement(d.Fragment,null,x,d.createElement(Ix,{page:h})):x});Cf.displayName="Link";var Mx=d.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:i,viewTransition:l,children:c,...u},m){let p=Ks(i,{relative:u.relative}),f=nt(),b=d.useContext(Po),{navigator:y,basename:j}=d.useContext(Jt),C=b!=null&&Yx(p)&&l===!0,v=y.encodeLocation?y.encodeLocation(p).pathname:p.pathname,h=f.pathname,g=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;r||(h=h.toLowerCase(),g=g?g.toLowerCase():null,v=v.toLowerCase()),g&&j&&(g=jn(g,j)||g);const E=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let N=h===v||!a&&h.startsWith(v)&&h.charAt(E)==="/",T=g!=null&&(g===v||!a&&g.startsWith(v)&&g.charAt(v.length)==="/"),S={isActive:N,isPending:T,isTransitioning:C},x=N?t:void 0,w;typeof s=="function"?w=s(S):w=[s,N?"active":null,T?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let k=typeof o=="function"?o(S):o;return d.createElement(Cf,{...u,"aria-current":x,className:w,ref:m,style:k,to:i,viewTransition:l},typeof c=="function"?c(S):c)});Mx.displayName="NavLink";var Ox=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:a,state:o,method:i=za,action:l,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:p,...f},b)=>{let y=qx(),j=Qx(l,{relative:u}),C=i.toLowerCase()==="get"?"get":"post",v=typeof l=="string"&&Sf.test(l),h=g=>{if(c&&c(g),g.defaultPrevented)return;g.preventDefault();let E=g.nativeEvent.submitter,N=(E==null?void 0:E.getAttribute("formmethod"))||i;y(E||g.currentTarget,{fetcherKey:t,method:N,navigate:r,replace:a,state:o,relative:u,preventScrollReset:m,viewTransition:p})};return d.createElement("form",{ref:b,method:C,action:j,onSubmit:s?c:h,...f,"data-discover":!v&&e==="render"?"true":void 0})});Ox.displayName="Form";function Fx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ef(e){let t=d.useContext(Jr);return Ue(t,Fx(e)),t}function $x(e,{target:t,replace:r,state:s,preventScrollReset:a,relative:o,viewTransition:i}={}){let l=_e(),c=nt(),u=Ks(e,{relative:o});return d.useCallback(m=>{if(xx(m,t)){m.preventDefault();let p=r!==void 0?r:Qs(c)===Qs(u);l(e,{replace:p,state:s,preventScrollReset:a,relative:o,viewTransition:i})}},[c,l,u,r,s,t,e,a,o,i])}function Pf(e){Ut(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=d.useRef(ol(e)),r=d.useRef(!1),s=nt(),a=d.useMemo(()=>gx(s.search,r.current?null:t.current),[s.search]),o=_e(),i=d.useCallback((l,c)=>{const u=ol(typeof l=="function"?l(new URLSearchParams(a)):l);r.current=!0,o("?"+u,c)},[o,a]);return[a,i]}var Bx=0,Ux=()=>`__${String(++Bx)}__`;function qx(){let{router:e}=Ef("useSubmit"),{basename:t}=d.useContext(Jt),r=sx();return d.useCallback(async(s,a={})=>{let{action:o,method:i,encType:l,formData:c,body:u}=bx(s,t);if(a.navigate===!1){let m=a.fetcherKey||Ux();await e.fetch(m,r,a.action||o,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||i,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||i,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function Qx(e,{relative:t}={}){let{basename:r}=d.useContext(Jt),s=d.useContext(qt);Ue(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),o={...Ks(e||".",{relative:t})},i=nt();if(e==null){o.search=i.search;let l=new URLSearchParams(o.search),c=l.getAll("index");if(c.some(m=>m==="")){l.delete("index"),c.filter(p=>p).forEach(p=>l.append("index",p));let m=l.toString();o.search=m?`?${m}`:""}}return(!e||e===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:gn([r,o.pathname])),Qs(o)}function Yx(e,{relative:t}={}){let r=d.useContext(gf);Ue(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Ef("useViewTransitionState"),a=Ks(e,{relative:t});if(!r.isTransitioning)return!1;let o=jn(r.currentLocation.pathname,s)||r.currentLocation.pathname,i=jn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return co(a.pathname,i)!=null||co(a.pathname,o)!=null}function Wx({size:e=22,spinning:t=!1}){return n.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[n.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),n.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),n.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),n.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),n.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),n.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Hx(){const e=_e(),{pathname:t}=nt(),r=d.useRef({}),s=d.useRef({}),[a,o]=d.useState(!1),i=d.useRef(null),l=g=>{if(navigator.vibrate)switch(g){case"light":navigator.vibrate(20);break;case"medium":navigator.vibrate(35);break;case"heavy":navigator.vibrate(50);break;case"double":navigator.vibrate([30,50,30]);break;case"success":navigator.vibrate([20,50,20,50,20]);break;default:navigator.vibrate(25)}};d.useCallback(()=>{var g;if(["/","/play","/swipe","/profile"].includes(t)){const E=((g=i.current)==null?void 0:g.scrollTop)||0,N=window.scrollY||window.pageYOffset||0,T=E>0?E:N;console.log(`Saving scroll for ${t}: main=${E}, window=${N}, saved=${T}`),r.current[t]=T}},[t]),d.useEffect(()=>{let g=null;const E=()=>{g&&cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var T;if(["/","/play","/swipe","/profile"].includes(t)){const S=((T=i.current)==null?void 0:T.scrollTop)||0,x=window.scrollY||window.pageYOffset||0,w=S>0?S:x;r.current[t]=w,console.log(`Scroll position updated for ${t}: ${w}`)}})};window.addEventListener("scroll",E,{passive:!0});const N=i.current;return N&&N.addEventListener("scroll",E,{passive:!0}),()=>{g&&cancelAnimationFrame(g),window.removeEventListener("scroll",E),N&&N.removeEventListener("scroll",E)}},[t]),d.useEffect(()=>{if(i.current&&i.current.classList.add("navigating"),["/profile/","/quiz/","/practice/","/play/classic","/settings","/about"].some(N=>t.startsWith(N)))window.scrollTo(0,0),i.current&&(i.current.scrollTop=0),setTimeout(()=>{i.current&&i.current.classList.remove("navigating")},20);else{const N=r.current[t];if(console.log(`Attempting to restore scroll for ${t}: ${N}`),N!=null&&N>0){const T=(S=0)=>{S>=5||(i.current?(i.current.scrollTop=N,setTimeout(()=>{var w;const x=((w=i.current)==null?void 0:w.scrollTop)||0;Math.abs(x-N)>10?(window.scrollTo(0,N),setTimeout(()=>{const k=window.scrollY||window.pageYOffset||0;console.log(`Restore attempt ${S+1}: main=${x}, window=${k}, target=${N}`),Math.abs(k-N)>10&&Math.abs(x-N)>10&&T(S+1)},20)):console.log(`Successfully restored scroll to ${x}`)},20)):window.scrollTo(0,N))};T(0),setTimeout(()=>{i.current&&i.current.classList.remove("navigating")},20)}else window.scrollTo(0,0),i.current&&(i.current.scrollTop=0),setTimeout(()=>{i.current&&i.current.classList.remove("navigating")},20)}},[t]);const[c,u]=d.useState(!1),[m,p]=d.useState({open:!1,go:null}),[f,b]=d.useState(!1);d.useEffect(()=>{const g=()=>{b(document.body.classList.contains("hide-bottom-nav"))};g();const E=new MutationObserver(g);return E.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>E.disconnect()},[]),d.useEffect(()=>{const g=new MutationObserver(()=>{u(document.body.classList.contains("modal-open"))});return g.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>g.disconnect()},[]);const j=c||f||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(g=>g.test(t)),C=g=>g==="/"?t==="/":t.startsWith(g),v=d.useCallback(()=>{console.log("Scrolling to top"),window.scrollTo({top:0,behavior:"smooth"}),i.current&&i.current.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},[]),h=({path:g,icon:E,label:N,emoji:T})=>{const S=C(g),[x,w]=d.useState(!1),k=d.useCallback(()=>{var q;const P=Date.now();if(S){const Q=s.current[g]||0;console.log(`Active tab clicked. Time since last tap: ${P-Q}ms`),P-Q<500?(console.log("Double tap detected!"),v(),l("double"),s.current[g]=0):s.current[g]=P;return}if(["/","/play","/swipe","/profile"].includes(t)){const Q=((q=i.current)==null?void 0:q.scrollTop)||0,U=window.scrollY||window.pageYOffset||0,R=Q>0?Q:U;console.log(`Manually saving scroll before navigation from ${t}: ${R}`),r.current[t]=R}const O=s.current[g]||0;if(P-O<500){console.log("Double tap on inactive tab - navigating and scrolling to top"),r.current[g]=0,g==="/play"?(o(!0),l("double"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1),setTimeout(v,100)},200)):(l("double"),e(g),setTimeout(v,100)),s.current[g]=0;return}s.current[g]=P,w(!0),setTimeout(()=>w(!1),600);const B=()=>{if(g==="/play"){o(!0),l("heavy"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1)},200);return}l("medium"),e(g)};if(localStorage.getItem("qp_in_question")==="true"){p({open:!0,go:B});return}B()},[S,g,t,e,v,l]);return n.jsxs("button",{type:"button",onClick:k,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${S?"scale-110":"scale-100 hover:scale-105"}
          ${x?"animate-bounce":""}`,"aria-current":S?"page":void 0,children:[S&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),n.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),n.jsx("div",{className:`leading-none text-2xl transition-transform ${S?"scale-125":""} ${g==="/play"&&a?"animate-spin":""}`,children:T||E}),n.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${S?"text-white":"text-base-muted/80"}`,children:N})]})};return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("style",{children:`
        .hide-bottom-nav nav[role="navigation"] {
         display: none !important;
        }
        main.navigating {
          visibility: hidden;
        }
        main {
          scroll-behavior: auto !important;
        }
      `}),n.jsx("main",{ref:i,className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:j||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:j||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto"},children:n.jsx(cx,{})}),m.open&&n.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[n.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[n.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),n.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),n.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{l("medium"),p({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),n.jsx("button",{onClick:()=>{l("heavy");const g=m.go;p({open:!1,go:null}),g==null||g()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),n.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!j&&n.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[n.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),n.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),n.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[n.jsx(h,{path:"/",emoji:"🏠",label:"Home"}),n.jsx(h,{path:"/play",icon:n.jsx(Wx,{size:26,spinning:a}),label:"Play"}),n.jsx(h,{path:"/swipe",emoji:"📚",label:"Swipe"}),n.jsx(h,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},uo.apply(null,arguments)}function Gx(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Vx(e){d.useEffect(e,[])}var Xx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function Ot(e,t){var r=t===void 0?{}:t,s=r.volume,a=s===void 0?1:s,o=r.playbackRate,i=o===void 0?1:o,l=r.soundEnabled,c=l===void 0?!0:l,u=r.interrupt,m=u===void 0?!1:u,p=r.onload,f=Gx(r,Xx),b=gt.useRef(null),y=gt.useRef(!1),j=gt.useState(null),C=j[0],v=j[1],h=gt.useState(null),g=h[0],E=h[1],N=function(){typeof p=="function"&&p.call(this),y.current&&v(this.duration()*1e3),E(this)};Vx(function(){return rc(()=>import("./howler-f64501f8.js").then(k=>k.h),[]).then(function(k){if(!y.current){var P;b.current=(P=k.Howl)!==null&&P!==void 0?P:k.default.Howl,y.current=!0,new b.current(uo({src:Array.isArray(e)?e:[e],volume:a,rate:i,onload:N},f))}}),function(){y.current=!1}}),gt.useEffect(function(){b.current&&g&&E(new b.current(uo({src:Array.isArray(e)?e:[e],volume:a,onload:N},f)))},[JSON.stringify(e)]),gt.useEffect(function(){g&&(g.volume(a),f.sprite||g.rate(i))},[g,a,i]);var T=gt.useCallback(function(k){typeof k>"u"&&(k={}),!(!g||!c&&!k.forceSoundEnabled)&&(m&&g.stop(),k.playbackRate&&g.rate(k.playbackRate),g.play(k.id))},[g,c,m]),S=gt.useCallback(function(k){g&&g.stop(k)},[g]),x=gt.useCallback(function(k){g&&g.pause(k)},[g]),w=[T,{sound:g,stop:S,pause:x,duration:C}];return w}var Tf={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((r,s)=>{e.exports=s()})(Uf,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},a,o=!s.document&&!!s.postMessage,i=s.IS_PAPA_WORKER||!1,l={},c=0,u={};function m(x){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(w){var k=N(w);k.chunkSize=parseInt(k.chunkSize),w.step||w.chunk||(k.chunkSize=null),this._handle=new j(k),(this._handle.streamer=this)._config=k}).call(this,x),this.parseChunk=function(w,k){var P=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<P){let B=this._config.newline;B||(O=this._config.quoteChar||'"',B=this._handle.guessLineEndings(w,O)),w=[...w.split(B).slice(P)].join(B)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(O=this._config.beforeFirstChunk(w))!==void 0&&(w=O),this.isFirstChunk=!1,this._halted=!1;var P=this._partialLine+w,O=(this._partialLine="",this._handle.parse(P,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(w=O.meta.cursor,P=(this._finished||(this._partialLine=P.substring(w-this._baseIndex),this._baseIndex=w),O&&O.data&&(this._rowCount+=O.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),i)s.postMessage({results:O,workerId:u.WORKER_ID,finished:P});else if(S(this._config.chunk)&&!k){if(this._config.chunk(O,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=O=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(O.data),this._completeResults.errors=this._completeResults.errors.concat(O.errors),this._completeResults.meta=O.meta),this._completed||!P||!S(this._config.complete)||O&&O.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),P||O&&O.meta.paused||this._nextChunk(),O}this._halted=!0},this._sendError=function(w){S(this._config.error)?this._config.error(w):i&&this._config.error&&s.postMessage({workerId:u.WORKER_ID,error:w,finished:!1})}}function p(x){var w;(x=x||{}).chunkSize||(x.chunkSize=u.RemoteChunkSize),m.call(this,x),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(w=new XMLHttpRequest,this._config.withCredentials&&(w.withCredentials=this._config.withCredentials),o||(w.onload=T(this._chunkLoaded,this),w.onerror=T(this._chunkError,this)),w.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var k,P=this._config.downloadRequestHeaders;for(k in P)w.setRequestHeader(k,P[k])}var O;this._config.chunkSize&&(O=this._start+this._config.chunkSize-1,w.setRequestHeader("Range","bytes="+this._start+"-"+O));try{w.send(this._config.downloadRequestBody)}catch(B){this._chunkError(B.message)}o&&w.status===0&&this._chunkError()}},this._chunkLoaded=function(){w.readyState===4&&(w.status<200||400<=w.status?this._chunkError():(this._start+=this._config.chunkSize||w.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(w),this.parseChunk(w.responseText)))},this._chunkError=function(k){k=w.statusText||k,this._sendError(new Error(k))}}function f(x){(x=x||{}).chunkSize||(x.chunkSize=u.LocalChunkSize),m.call(this,x);var w,k,P=typeof FileReader<"u";this.stream=function(O){this._input=O,k=O.slice||O.webkitSlice||O.mozSlice,P?((w=new FileReader).onload=T(this._chunkLoaded,this),w.onerror=T(this._chunkError,this)):w=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var O=this._input,B=(this._config.chunkSize&&(B=Math.min(this._start+this._config.chunkSize,this._input.size),O=k.call(O,this._start,B)),w.readAsText(O,this._config.encoding));P||this._chunkLoaded({target:{result:B}})},this._chunkLoaded=function(O){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(O.target.result)},this._chunkError=function(){this._sendError(w.error)}}function b(x){var w;m.call(this,x=x||{}),this.stream=function(k){return w=k,this._nextChunk()},this._nextChunk=function(){var k,P;if(!this._finished)return k=this._config.chunkSize,w=k?(P=w.substring(0,k),w.substring(k)):(P=w,""),this._finished=!w,this.parseChunk(P)}}function y(x){m.call(this,x=x||{});var w=[],k=!0,P=!1;this.pause=function(){m.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){m.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(O){this._input=O,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){P&&w.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),w.length?this.parseChunk(w.shift()):k=!0},this._streamData=T(function(O){try{w.push(typeof O=="string"?O:O.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(w.shift()))}catch(B){this._streamError(B)}},this),this._streamError=T(function(O){this._streamCleanUp(),this._sendError(O)},this),this._streamEnd=T(function(){this._streamCleanUp(),P=!0,this._streamData("")},this),this._streamCleanUp=T(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(x){var w,k,P,O,B=Math.pow(2,53),H=-B,q=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Q=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,U=this,R=0,z=0,Y=!1,D=!1,I=[],A={data:[],errors:[],meta:{}};function G(L){return x.skipEmptyLines==="greedy"?L.join("").trim()==="":L.length===1&&L[0].length===0}function re(){if(A&&P&&(F("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),P=!1),x.skipEmptyLines&&(A.data=A.data.filter(function($){return!G($)})),Z()){let $=function(ee,oe){S(x.transformHeader)&&(ee=x.transformHeader(ee,oe)),I.push(ee)};if(A)if(Array.isArray(A.data[0])){for(var L=0;Z()&&L<A.data.length;L++)A.data[L].forEach($);A.data.splice(0,1)}else A.data.forEach($)}function W($,ee){for(var oe=x.header?{}:[],de=0;de<$.length;de++){var te=de,ne=$[de],ne=((J,_)=>(V=>(x.dynamicTypingFunction&&x.dynamicTyping[V]===void 0&&(x.dynamicTyping[V]=x.dynamicTypingFunction(V)),(x.dynamicTyping[V]||x.dynamicTyping)===!0))(J)?_==="true"||_==="TRUE"||_!=="false"&&_!=="FALSE"&&((V=>{if(q.test(V)&&(V=parseFloat(V),H<V&&V<B))return 1})(_)?parseFloat(_):Q.test(_)?new Date(_):_===""?null:_):_)(te=x.header?de>=I.length?"__parsed_extra":I[de]:te,ne=x.transform?x.transform(ne,te):ne);te==="__parsed_extra"?(oe[te]=oe[te]||[],oe[te].push(ne)):oe[te]=ne}return x.header&&(de>I.length?F("FieldMismatch","TooManyFields","Too many fields: expected "+I.length+" fields but parsed "+de,z+ee):de<I.length&&F("FieldMismatch","TooFewFields","Too few fields: expected "+I.length+" fields but parsed "+de,z+ee)),oe}var M;A&&(x.header||x.dynamicTyping||x.transform)&&(M=1,!A.data.length||Array.isArray(A.data[0])?(A.data=A.data.map(W),M=A.data.length):A.data=W(A.data,0),x.header&&A.meta&&(A.meta.fields=I),z+=M)}function Z(){return x.header&&I.length===0}function F(L,W,M,$){L={type:L,code:W,message:M},$!==void 0&&(L.row=$),A.errors.push(L)}S(x.step)&&(O=x.step,x.step=function(L){A=L,Z()?re():(re(),A.data.length!==0&&(R+=L.data.length,x.preview&&R>x.preview?k.abort():(A.data=A.data[0],O(A,U))))}),this.parse=function(L,W,M){var $=x.quoteChar||'"',$=(x.newline||(x.newline=this.guessLineEndings(L,$)),P=!1,x.delimiter?S(x.delimiter)&&(x.delimiter=x.delimiter(L),A.meta.delimiter=x.delimiter):(($=((ee,oe,de,te,ne)=>{var J,_,V,ce;ne=ne||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var pe=0;pe<ne.length;pe++){for(var he,$e=ne[pe],ue=0,Ne=0,ge=0,xe=(V=void 0,new v({comments:te,delimiter:$e,newline:oe,preview:10}).parse(ee)),ye=0;ye<xe.data.length;ye++)de&&G(xe.data[ye])?ge++:(he=xe.data[ye].length,Ne+=he,V===void 0?V=he:0<he&&(ue+=Math.abs(he-V),V=he));0<xe.data.length&&(Ne/=xe.data.length-ge),(_===void 0||ue<=_)&&(ce===void 0||ce<Ne)&&1.99<Ne&&(_=ue,J=$e,ce=Ne)}return{successful:!!(x.delimiter=J),bestDelimiter:J}})(L,x.newline,x.skipEmptyLines,x.comments,x.delimitersToGuess)).successful?x.delimiter=$.bestDelimiter:(P=!0,x.delimiter=u.DefaultDelimiter),A.meta.delimiter=x.delimiter),N(x));return x.preview&&x.header&&$.preview++,w=L,k=new v($),A=k.parse(w,W,M),re(),Y?{meta:{paused:!0}}:A||{meta:{paused:!1}}},this.paused=function(){return Y},this.pause=function(){Y=!0,k.abort(),w=S(x.chunk)?"":w.substring(k.getCharIndex())},this.resume=function(){U.streamer._halted?(Y=!1,U.streamer.parseChunk(w,!0)):setTimeout(U.resume,3)},this.aborted=function(){return D},this.abort=function(){D=!0,k.abort(),A.meta.aborted=!0,S(x.complete)&&x.complete(A),w=""},this.guessLineEndings=function(ee,$){ee=ee.substring(0,1048576);var $=new RegExp(C($)+"([^]*?)"+C($),"gm"),M=(ee=ee.replace($,"")).split("\r"),$=ee.split(`
`),ee=1<$.length&&$[0].length<M[0].length;if(M.length===1||ee)return`
`;for(var oe=0,de=0;de<M.length;de++)M[de][0]===`
`&&oe++;return oe>=M.length/2?`\r
`:"\r"}}function C(x){return x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(x){var w=(x=x||{}).delimiter,k=x.newline,P=x.comments,O=x.step,B=x.preview,H=x.fastMode,q=null,Q=!1,U=x.quoteChar==null?'"':x.quoteChar,R=U;if(x.escapeChar!==void 0&&(R=x.escapeChar),(typeof w!="string"||-1<u.BAD_DELIMITERS.indexOf(w))&&(w=","),P===w)throw new Error("Comment character same as delimiter");P===!0?P="#":(typeof P!="string"||-1<u.BAD_DELIMITERS.indexOf(P))&&(P=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var z=0,Y=!1;this.parse=function(D,I,A){if(typeof D!="string")throw new Error("Input must be a string");var G=D.length,re=w.length,Z=k.length,F=P.length,L=S(O),W=[],M=[],$=[],ee=z=0;if(!D)return ue();if(H||H!==!1&&D.indexOf(U)===-1){for(var oe=D.split(k),de=0;de<oe.length;de++){if($=oe[de],z+=$.length,de!==oe.length-1)z+=k.length;else if(A)return ue();if(!P||$.substring(0,F)!==P){if(L){if(W=[],ce($.split(w)),Ne(),Y)return ue()}else ce($.split(w));if(B&&B<=de)return W=W.slice(0,B),ue(!0)}}return ue()}for(var te=D.indexOf(w,z),ne=D.indexOf(k,z),J=new RegExp(C(R)+C(U),"g"),_=D.indexOf(U,z);;)if(D[z]===U)for(_=z,z++;;){if((_=D.indexOf(U,_+1))===-1)return A||M.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:W.length,index:z}),he();if(_===G-1)return he(D.substring(z,_).replace(J,U));if(U===R&&D[_+1]===R)_++;else if(U===R||_===0||D[_-1]!==R){te!==-1&&te<_+1&&(te=D.indexOf(w,_+1));var V=pe((ne=ne!==-1&&ne<_+1?D.indexOf(k,_+1):ne)===-1?te:Math.min(te,ne));if(D.substr(_+1+V,re)===w){$.push(D.substring(z,_).replace(J,U)),D[z=_+1+V+re]!==U&&(_=D.indexOf(U,z)),te=D.indexOf(w,z),ne=D.indexOf(k,z);break}if(V=pe(ne),D.substring(_+1+V,_+1+V+Z)===k){if($.push(D.substring(z,_).replace(J,U)),$e(_+1+V+Z),te=D.indexOf(w,z),_=D.indexOf(U,z),L&&(Ne(),Y))return ue();if(B&&W.length>=B)return ue(!0);break}M.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:W.length,index:z}),_++}}else if(P&&$.length===0&&D.substring(z,z+F)===P){if(ne===-1)return ue();z=ne+Z,ne=D.indexOf(k,z),te=D.indexOf(w,z)}else if(te!==-1&&(te<ne||ne===-1))$.push(D.substring(z,te)),z=te+re,te=D.indexOf(w,z);else{if(ne===-1)break;if($.push(D.substring(z,ne)),$e(ne+Z),L&&(Ne(),Y))return ue();if(B&&W.length>=B)return ue(!0)}return he();function ce(ge){W.push(ge),ee=z}function pe(ge){var xe=0;return xe=ge!==-1&&(ge=D.substring(_+1,ge))&&ge.trim()===""?ge.length:xe}function he(ge){return A||(ge===void 0&&(ge=D.substring(z)),$.push(ge),z=G,ce($),L&&Ne()),ue()}function $e(ge){z=ge,ce($),$=[],ne=D.indexOf(k,z)}function ue(ge){if(x.header&&!I&&W.length&&!Q){var xe=W[0],ye=Object.create(null),ht=new Set(xe);let Qt=!1;for(let at=0;at<xe.length;at++){let ke=xe[at];if(ye[ke=S(x.transformHeader)?x.transformHeader(ke,at):ke]){let De,At=ye[ke];for(;De=ke+"_"+At,At++,ht.has(De););ht.add(De),xe[at]=De,ye[ke]++,Qt=!0,(q=q===null?{}:q)[De]=ke}else ye[ke]=1,xe[at]=ke;ht.add(ke)}Qt&&console.warn("Duplicate headers found and renamed."),Q=!0}return{data:W,errors:M,meta:{delimiter:w,linebreak:k,aborted:Y,truncated:!!ge,cursor:ee+(I||0),renamedHeaders:q}}}function Ne(){O(ue()),W=[],M=[]}},this.abort=function(){Y=!0},this.getCharIndex=function(){return z}}function h(x){var w=x.data,k=l[w.workerId],P=!1;if(w.error)k.userError(w.error,w.file);else if(w.results&&w.results.data){var O={abort:function(){P=!0,g(w.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(S(k.userStep)){for(var B=0;B<w.results.data.length&&(k.userStep({data:w.results.data[B],errors:w.results.errors,meta:w.results.meta},O),!P);B++);delete w.results}else S(k.userChunk)&&(k.userChunk(w.results,O,w.file),delete w.results)}w.finished&&!P&&g(w.workerId,w.results)}function g(x,w){var k=l[x];S(k.userComplete)&&k.userComplete(w),k.terminate(),delete l[x]}function E(){throw new Error("Not implemented.")}function N(x){if(typeof x!="object"||x===null)return x;var w,k=Array.isArray(x)?[]:{};for(w in x)k[w]=N(x[w]);return k}function T(x,w){return function(){x.apply(w,arguments)}}function S(x){return typeof x=="function"}return u.parse=function(x,w){var k=(w=w||{}).dynamicTyping||!1;if(S(k)&&(w.dynamicTypingFunction=k,k={}),w.dynamicTyping=k,w.transform=!!S(w.transform)&&w.transform,!w.worker||!u.WORKERS_SUPPORTED)return k=null,u.NODE_STREAM_INPUT,typeof x=="string"?(x=(P=>P.charCodeAt(0)!==65279?P:P.slice(1))(x),k=new(w.download?p:b)(w)):x.readable===!0&&S(x.read)&&S(x.on)?k=new y(w):(s.File&&x instanceof File||x instanceof Object)&&(k=new f(w)),k.stream(x);(k=(()=>{var P;return!!u.WORKERS_SUPPORTED&&(P=(()=>{var O=s.URL||s.webkitURL||null,B=r.toString();return u.BLOB_URL||(u.BLOB_URL=O.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",B,")();"],{type:"text/javascript"})))})(),(P=new s.Worker(P)).onmessage=h,P.id=c++,l[P.id]=P)})()).userStep=w.step,k.userChunk=w.chunk,k.userComplete=w.complete,k.userError=w.error,w.step=S(w.step),w.chunk=S(w.chunk),w.complete=S(w.complete),w.error=S(w.error),delete w.worker,k.postMessage({input:x,config:w,workerId:k.id})},u.unparse=function(x,w){var k=!1,P=!0,O=",",B=`\r
`,H='"',q=H+H,Q=!1,U=null,R=!1,z=((()=>{if(typeof w=="object"){if(typeof w.delimiter!="string"||u.BAD_DELIMITERS.filter(function(I){return w.delimiter.indexOf(I)!==-1}).length||(O=w.delimiter),typeof w.quotes!="boolean"&&typeof w.quotes!="function"&&!Array.isArray(w.quotes)||(k=w.quotes),typeof w.skipEmptyLines!="boolean"&&typeof w.skipEmptyLines!="string"||(Q=w.skipEmptyLines),typeof w.newline=="string"&&(B=w.newline),typeof w.quoteChar=="string"&&(H=w.quoteChar),typeof w.header=="boolean"&&(P=w.header),Array.isArray(w.columns)){if(w.columns.length===0)throw new Error("Option columns is empty");U=w.columns}w.escapeChar!==void 0&&(q=w.escapeChar+H),w.escapeFormulae instanceof RegExp?R=w.escapeFormulae:typeof w.escapeFormulae=="boolean"&&w.escapeFormulae&&(R=/^[=+\-@\t\r].*$/)}})(),new RegExp(C(H),"g"));if(typeof x=="string"&&(x=JSON.parse(x)),Array.isArray(x)){if(!x.length||Array.isArray(x[0]))return Y(null,x,Q);if(typeof x[0]=="object")return Y(U||Object.keys(x[0]),x,Q)}else if(typeof x=="object")return typeof x.data=="string"&&(x.data=JSON.parse(x.data)),Array.isArray(x.data)&&(x.fields||(x.fields=x.meta&&x.meta.fields||U),x.fields||(x.fields=Array.isArray(x.data[0])?x.fields:typeof x.data[0]=="object"?Object.keys(x.data[0]):[]),Array.isArray(x.data[0])||typeof x.data[0]=="object"||(x.data=[x.data])),Y(x.fields||[],x.data||[],Q);throw new Error("Unable to serialize unrecognized input");function Y(I,A,G){var re="",Z=(typeof I=="string"&&(I=JSON.parse(I)),typeof A=="string"&&(A=JSON.parse(A)),Array.isArray(I)&&0<I.length),F=!Array.isArray(A[0]);if(Z&&P){for(var L=0;L<I.length;L++)0<L&&(re+=O),re+=D(I[L],L);0<A.length&&(re+=B)}for(var W=0;W<A.length;W++){var M=(Z?I:A[W]).length,$=!1,ee=Z?Object.keys(A[W]).length===0:A[W].length===0;if(G&&!Z&&($=G==="greedy"?A[W].join("").trim()==="":A[W].length===1&&A[W][0].length===0),G==="greedy"&&Z){for(var oe=[],de=0;de<M;de++){var te=F?I[de]:de;oe.push(A[W][te])}$=oe.join("").trim()===""}if(!$){for(var ne=0;ne<M;ne++){0<ne&&!ee&&(re+=O);var J=Z&&F?I[ne]:ne;re+=D(A[W][J],ne)}W<A.length-1&&(!G||0<M&&!ee)&&(re+=B)}}return re}function D(I,A){var G,re;return I==null?"":I.constructor===Date?JSON.stringify(I).slice(1,25):(re=!1,R&&typeof I=="string"&&R.test(I)&&(I="'"+I,re=!0),G=I.toString().replace(z,q),(re=re||k===!0||typeof k=="function"&&k(I,A)||Array.isArray(k)&&k[A]||((Z,F)=>{for(var L=0;L<F.length;L++)if(-1<Z.indexOf(F[L]))return!0;return!1})(G,u.BAD_DELIMITERS)||-1<G.indexOf(O)||G.charAt(0)===" "||G.charAt(G.length-1)===" ")?H+G+H:G)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!o&&!!s.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=v,u.ParserHandle=j,u.NetworkStreamer=p,u.FileStreamer=f,u.StringStreamer=b,u.ReadableStreamStreamer=y,s.jQuery&&((a=s.jQuery).fn.parse=function(x){var w=x.config||{},k=[];return this.each(function(B){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var H=0;H<this.files.length;H++)k.push({file:this.files[H],inputElem:this,instanceConfig:a.extend({},w)})}),P(),this;function P(){if(k.length===0)S(x.complete)&&x.complete();else{var B,H,q,Q,U=k[0];if(S(x.before)){var R=x.before(U.file,U.inputElem);if(typeof R=="object"){if(R.action==="abort")return B="AbortError",H=U.file,q=U.inputElem,Q=R.reason,void(S(x.error)&&x.error({name:B},H,q,Q));if(R.action==="skip")return void O();typeof R.config=="object"&&(U.instanceConfig=a.extend(U.instanceConfig,R.config))}else if(R==="skip")return void O()}var z=U.instanceConfig.complete;U.instanceConfig.complete=function(Y){S(z)&&z(Y,U.file,U.inputElem),O()},u.parse(U.file,U.instanceConfig)}}function O(){k.splice(0,1),P()}}),i&&(s.onmessage=function(x){x=x.data,u.WORKER_ID===void 0&&x&&(u.WORKER_ID=x.workerId),typeof x.input=="string"?s.postMessage({workerId:u.WORKER_ID,results:u.parse(x.input,x.config),finished:!0}):(s.File&&x.input instanceof File||x.input instanceof Object)&&(x=u.parse(x.input,x.config))&&s.postMessage({workerId:u.WORKER_ID,results:x,finished:!0})}),(p.prototype=Object.create(m.prototype)).constructor=p,(f.prototype=Object.create(m.prototype)).constructor=f,(b.prototype=Object.create(b.prototype)).constructor=b,(y.prototype=Object.create(m.prototype)).constructor=y,u})})(Tf);var Kx=Tf.exports;const pr=Zd(Kx);function Ro({startRect:e,targetRef:t,count:r=12,onDone:s}){return d.useEffect(()=>{const a=t==null?void 0:t.current;if(!e||!a){s==null||s();return}const o=a.getBoundingClientRect(),i=document.createElement("div");i.style.position="fixed",i.style.inset="0",i.style.pointerEvents="none",i.style.zIndex="9999",document.body.appendChild(i);const l=o.left+o.width/2,c=o.top+o.height/2,u=e.left+e.width/2,m=e.top+e.height/2,p=200;let f=0;function b(y){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const C=u,v=m,h=l,g=c;j.style.transform=`translate(${C}px, ${v}px) scale(1)`,i.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${p}ms cubic-bezier(.2,.8,.2,1), opacity ${p}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${h}px, ${g}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),f+=1,f===r&&(i.remove(),s==null||s())},p+50)}for(let y=0;y<r;y++)setTimeout(()=>b(),y*60);return()=>{try{i.remove()}catch{}}},[e,t,r,s]),null}const ut={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},Id=e=>Math.floor(e/ut.XP_PER_LEVEL)+1,Jx=e=>{const t=e%ut.XP_PER_LEVEL;return{current:t,required:ut.XP_PER_LEVEL,percentage:t/ut.XP_PER_LEVEL*100}};function Zx({player:e,size:t="normal",showLevel:r=!0,showName:s=!0}){const a=ut.AVATARS.find(i=>i.id===e.avatar)||ut.AVATARS[0],o={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`${o[t]} rounded-full bg-gradient-to-br ${a.bgColor} flex items-center justify-center shadow-lg`,children:n.jsx("span",{children:a.emoji})}),r&&n.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:(()=>{const i=JSON.parse(localStorage.getItem("currentUser")||"{}");return i.username?i.username.split(" ")[0]:e.name})()}),n.jsx("div",{className:"text-xs text-base-muted",children:a.name})]})]})}function eg({current:e,required:t,level:r,animate:s=!0}){const[a,o]=d.useState(0),i=e/t*100;return d.useEffect(()=>{if(s){const l=setTimeout(()=>{o(i)},100);return()=>clearTimeout(l)}else o(i)},[i,s]),n.jsxs("div",{className:"w-full",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs font-medium",children:["Level ",r]}),n.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),n.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${a}%`},children:n.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}const Rf=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],_f=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],If=[...Rf.filter(e=>e.slug!=="more"),..._f];function tg({onClick:e}){return n.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:e,children:[n.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),n.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),n.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),n.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),n.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]})}function ng({actions:e}){return n.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,r)=>n.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[n.jsx("div",{className:"text-2xl",children:t.icon}),n.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},r))})}function rg({categories:e,onCategorySelect:t}){return n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),n.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(r=>n.jsxs("button",{onClick:()=>t(r),className:`bg-gradient-to-br ${r.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[n.jsx("div",{className:"text-3xl",children:r.icon}),n.jsx("div",{className:"text-xs font-bold text-white text-center",children:r.name}),r.questions>0&&n.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[r.questions," Qs"]})]},r.name))})]})}function sg({onClick:e,isPulsing:t}){return n.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium",children:"Practice Mode"}),n.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),n.jsx("div",{className:"text-xl",children:"→"})]})}function ag({dailyQ:e,isFlipped:t,picked:r,onAnswer:s,dailyCompleted:a,DAILY_Q_COINS:o,DAILY_Q_XP:i}){return a?n.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"✅"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}):e?n.jsx("div",{className:"flip-card mb-6",children:n.jsxs("div",{className:`flip-card-inner ${t?"flipped":""}`,children:[n.jsx("div",{className:"flip-card-front",children:n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),n.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",o," coins +",i," XP"]})]}),n.jsx("p",{className:"text-sm mb-4 text-base-muted",children:e.prompt}),n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.options.map((l,c)=>{const u=c===e.answerIndex,m=r===c,p=r!==null;return n.jsx("button",{onClick:f=>s(c,f),disabled:r!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${p?u?"border-green-500 bg-green-500/20":m?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${r!==null?"cursor-not-allowed":"cursor-pointer"}`,children:l},c)})})]})}),n.jsx("div",{className:"flip-card-back absolute inset-0",children:n.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[n.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),n.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),n.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",o," coins & ",i," XP!"]}),n.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}):null}function og({show:e,onClose:t,player:r,changeAvatar:s,GAME_CONSTANTS:a}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:o=>{o.target===o.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:o=>o.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.AVATARS.map(o=>{const i=!r.unlockedAvatars.includes(o.id),l=r.avatar===o.id;return n.jsxs("button",{onClick:()=>{i||(s(o.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":i?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:i,children:[n.jsx("div",{className:`text-4xl mb-2 ${i?"grayscale":""}`,children:o.emoji}),n.jsx("div",{className:"text-sm font-medium",children:o.name}),i&&n.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",o.unlockLevel]}),l&&n.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},o.id)})})]})}):null}function ig({show:e,onClose:t,categories:r,onCategorySelect:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:a=>a.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:r.map(a=>n.jsxs("button",{onClick:()=>{t(),s(a)},className:`bg-gradient-to-br ${a.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[n.jsx("div",{className:"text-3xl",children:a.icon}),n.jsx("div",{className:"text-sm font-bold text-white",children:a.name}),n.jsxs("div",{className:"text-xs text-white/80",children:[a.questions," questions"]})]},a.name))})]})}):null}function lg({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"magic-gradient h-full"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[r," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function cg({show:e,onClose:t,selectedCategory:r,difficulty:s,setDifficulty:a,count:o,setCount:i,timer:l,setTimer:c,onStart:u}){return!e||!r?null:n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:m=>{m.target===m.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:m=>m.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:r.icon}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium",children:["Category: ",r.name]}),n.jsxs("div",{className:"text-xs text-base-muted",children:[r.questions," questions available"]})]})]})}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(m=>n.jsx("button",{onClick:()=>a(m),className:`py-2 rounded-xl border ${s===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(m=>n.jsx("button",{onClick:()=>i(m),className:`py-2 rounded-xl border ${o===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m},m))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),n.jsx("input",{type:"number",value:l,onChange:m=>c(Number(m.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function dg({show:e,onClose:t,allCategories:r,category:s,setCategory:a,difficulty:o,setDifficulty:i,count:l,setCount:c,onStart:u}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:m=>{m.target===m.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:m=>m.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),n.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:r.map(m=>n.jsxs("button",{onClick:()=>a(m.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===m.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[n.jsx("div",{className:"text-xl",children:m.icon}),n.jsx("div",{className:"text-[10px] text-center",children:m.name})]},m.slug))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(m=>n.jsx("button",{onClick:()=>i(m),className:`py-2 rounded-xl border ${o===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m.charAt(0).toUpperCase()+m.slice(1)},m))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(m=>n.jsx("button",{onClick:()=>c(m),className:`py-2 rounded-xl border ${l===m?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:m},m))})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}function ug({player:e,onContinue:t}){const[r,s]=d.useState(()=>sessionStorage.getItem("justSignedUp")==="true"?(sessionStorage.removeItem("justSignedUp"),!1):sessionStorage.getItem("welcomeShown")!=="true"),[a,o]=d.useState(!1),[i,l]=d.useState(!1),[c,u]=d.useState(""),[m,p]=d.useState(""),[f,b]=d.useState("Champion"),[y,j]=d.useState(1),[C,v]=d.useState(0),[h,g]=d.useState(0),E=()=>{try{const x=new Audio("/sounds/welcome.mp3");x.volume=.6,x.play()}catch{console.log("Welcome sound not available")}},N=()=>{navigator.vibrate&&navigator.vibrate([100,50,100])};d.useEffect(()=>{if((()=>{const B=JSON.parse(localStorage.getItem("currentUser")||"{}");let H="Champion",q=1,Q=0,U=0;if(B.phone){const z=JSON.parse(localStorage.getItem(`user_profile_${B.phone}`)||"{}"),D=JSON.parse(localStorage.getItem("users")||"{}")[B.phone]||{};z.name?H=z.name.split(" ")[0]:D.username?H=D.username.split(" ")[0]:B.username&&(H=B.username.split(" ")[0]),H&&H!=="Champion"&&(H=H.charAt(0).toUpperCase()+H.slice(1).toLowerCase())}else B.username&&(H=B.username.split(" ")[0]);const R=JSON.parse(localStorage.getItem("qp_player")||"{}");q=(e==null?void 0:e.level)||R.level||1,Q=(e==null?void 0:e.coins)||R.coins||0,U=(e==null?void 0:e.currentStreak)||R.currentStreak||0,H!=="Champion"&&H!==R.name&&(R.name=H,localStorage.setItem("qp_player",JSON.stringify(R))),b(H),j(q),v(Q),g(U)})(),!r){t();return}sessionStorage.setItem("welcomeShown","true"),document.body.classList.add("hide-bottom-nav"),E(),N();const w=["🦉","🐧","🦝","🦜","🦕","🐙","🦊","🐸","🦁","🐨"];p(w[Math.floor(Math.random()*w.length)]);const k=setInterval(()=>{l(B=>!B)},2e3),P=["🎯 New challenges await!","🏆 Ready to be a champion?","🌟 Your brain adventure starts now!","🎨 Time for fun learning!","🎪 The quiz circus is open!","🚀 Blast off to knowledge!","🎭 Let's play and learn!","🌈 Rainbow of questions ahead!"];u(P[Math.floor(Math.random()*P.length)]);const O=setInterval(()=>{u(P[Math.floor(Math.random()*P.length)])},3e3);return()=>{document.body.classList.remove("hide-bottom-nav"),clearInterval(k),clearInterval(O)}},[r,t,e]);const T=()=>{try{const x=new Audio("/sounds/tap.mp3");x.volume=.5,x.play()}catch{console.log("Click sound not available")}navigator.vibrate&&navigator.vibrate(20),o(!0),document.body.classList.remove("hide-bottom-nav"),setTimeout(()=>{s(!1),t()},400)};if(!r)return null;const S=()=>{const x=new Date().getHours();return x<12?"Good morning":x<17?"Good afternoon":"Good evening"};return n.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${a?"opacity-0 scale-95":"opacity-100 scale-100"}`,children:[n.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fda085 75%, #f5a375 90%, #e08060 100%)"}}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[[{top:"10%",left:"15%",size:"24px",delay:"0s"},{top:"20%",left:"75%",size:"20px",delay:"0.5s"},{top:"15%",left:"45%",size:"28px",delay:"1s"},{top:"30%",left:"85%",size:"22px",delay:"1.5s"},{top:"8%",left:"60%",size:"26px",delay:"2s"}].map((x,w)=>n.jsx("div",{className:"absolute animate-twinkle",style:{top:x.top,left:x.left,fontSize:x.size,animationDelay:x.delay},children:"⭐"},`star-${w}`)),n.jsxs("div",{className:"absolute top-10 left-0 w-full",children:[n.jsx("div",{className:"cloud cloud1",children:"☁️"}),n.jsx("div",{className:"cloud cloud2",children:"☁️"})]})]}),n.jsxs("div",{className:"relative z-10 text-center px-6 w-full max-w-sm mx-auto",children:[n.jsx("div",{className:`text-8xl mb-4 transition-transform duration-500 ${i?"scale-110 rotate-6":"scale-100 rotate-0"}`,children:m}),n.jsxs("div",{className:"relative rounded-3xl px-6 py-4 mb-6 shadow-xl overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"}),n.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rotate-45"}),n.jsxs("div",{className:"relative",children:[n.jsxs("h1",{className:"text-3xl font-bold text-purple-800",children:["Hello, ",f,"! 👋"]}),n.jsx("p",{className:"text-sm text-purple-600 mt-1",children:S()})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-6",children:[n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-100 to-orange-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:y}),n.jsx("div",{className:"text-xs text-orange-600",children:"Level"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-2xl font-bold text-teal-800",children:C}),n.jsx("div",{className:"text-xs text-teal-600",children:"Coins"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-200 via-red-100 to-pink-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🔥"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:h}),n.jsx("div",{className:"text-xs text-orange-600",children:"Streak"})]})]})]}),n.jsx("div",{className:"h-4"}),n.jsx("div",{className:"text-white/90 font-medium animate-fade-slide mb-6",children:c}),n.jsxs("button",{onClick:T,className:"group relative w-full",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"}),n.jsxs("div",{className:`relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-5 px-8 rounded-full font-bold text-xl shadow-2xl 
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
      `})]})}const Ld=(e=new Date)=>e.toLocaleDateString("en-CA"),Ad=(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},mg=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function zd(){const[e,t]=d.useState(()=>{const ue=sessionStorage.getItem("justSignedUp"),Ne=sessionStorage.getItem("justSignedIn");return ue==="true"||Ne==="true"?(sessionStorage.removeItem("justSignedUp"),sessionStorage.removeItem("justSignedIn"),sessionStorage.setItem("welcomeShown","true"),!1):sessionStorage.getItem("welcomeShown")!=="true"}),r=_e(),{player:s,addXP:a,addCoins:o,levelProgress:i,useEnergy:l,changeAvatar:c}=kn(),[u]=Ot("/sounds/correct.mp3",{volume:.6}),[m]=Ot("/sounds/wrong.mp3",{volume:.6}),[p]=Ot("/sounds/coin.mp3",{volume:.75}),[f]=Ot("/sounds/levelup.mp3",{volume:.8}),b=d.useRef(s.level),y=d.useRef(null);d.useEffect(()=>{const ue=()=>{};return window.addEventListener("focus",ue),()=>window.removeEventListener("focus",ue)},[]),d.useEffect(()=>{s.level>b.current&&(f==null||f(),b.current=s.level)},[s.level,f]);const[j,C]=d.useState(!1),[v,h]=d.useState(null),[g,E]=d.useState(!1),[N,T]=d.useState("medium"),[S,x]=d.useState(10),[w,k]=d.useState(45),[P,O]=d.useState(!1),[B,H]=d.useState(!1),[q,Q]=d.useState(null),[U,R]=d.useState(null),[z,Y]=d.useState(!1),[D,I]=d.useState(!1),[A,G]=d.useState(null),re=10,Z=5,[F,L]=d.useState(!1),[W,M]=d.useState(!1),[$,ee]=d.useState("general-knowledge"),[oe,de]=d.useState("medium"),[te,ne]=d.useState(10),[J,_]=d.useState(()=>Ad("dq_daily_log",{})[Ld()]===!0);d.useEffect(()=>{const ue=sessionStorage.getItem("homeScrollPosition");ue&&window.scrollTo(0,parseInt(ue));const Ne=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",Ne),()=>window.removeEventListener("scroll",Ne)},[]),d.useEffect(()=>{if(J)return;(async()=>{var Ne;try{const ge=await fetch("/data/quiz_questions_bank.csv").then(Qt=>Qt.text()),{data:xe}=pr.parse(ge,{header:!0,skipEmptyLines:!0});if(!xe.length)throw new Error("empty");const ye=xe[Math.floor(Math.random()*xe.length)],ht=[ye.option1,ye.option2,ye.option3,ye.option4].filter(Boolean);Q({category:ye.category||"General",prompt:ye.question,options:ht,answerIndex:["A","B","C","D"].indexOf((Ne=ye.answer)==null?void 0:Ne.toUpperCase())||0})}catch{Q({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[J]);const V=(ue,Ne)=>{if(U!==null)return;R(ue);const ge=ue===q.answerIndex;if(ge){if(u(),Ne!=null&&Ne.currentTarget&&y.current){const xe=Ne.currentTarget.getBoundingClientRect();p(),G({startRect:xe,count:10,amount:Z})}}else m();setTimeout(()=>{if(I(!0),Y(!0),ge){const xe=Ld();mg("dq_daily_log",{...Ad("dq_daily_log",{}),[xe]:!0}),_(!0);const ye=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(ye+1))}},600)},ce=ue=>{if(ue.slug==="more"){C(!0);return}h(ue),E(!0)},pe=()=>{console.log("Starting quiz with energy:",s.energy),console.log("Category:",v.slug),r(`/quiz/${v.slug}`,{state:{mode:"quiz",difficulty:N,count:S,timer:{type:"per_q",seconds:w},source:"adventure"}}),E(!1)},he=()=>{console.log("Starting practice, category:",$),r(`/quiz/${$}`,{state:{mode:"practice",difficulty:oe,count:te,timer:{type:"off",seconds:0}}}),M(!1)},$e=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>{sessionStorage.setItem("questsFromHome","true"),r("/profile/quests")}},{icon:"🔥",label:"Streak",color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>r("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>r("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>r("/profile/rewards")}];return n.jsxs(n.Fragment,{children:[e&&n.jsx(ug,{player:s,onContinue:()=>t(!1)}),n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),n.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[n.jsx("style",{jsx:!0,children:`
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
        `}),A&&n.jsx(Ro,{startRect:A.startRect,targetRef:y,count:A.count,onDone:()=>{F||(a(re),o(A.amount),L(!0)),G(null)}}),n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"flex justify-between items-start mb-4",children:[n.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>H(!0),children:n.jsx(Zx,{player:s,size:"small",showLevel:!0,showName:!0})}),n.jsx("div",{className:"flex gap-2",children:n.jsxs("button",{ref:y,onClick:()=>O(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold",children:s.coins})]})})]}),n.jsx(eg,{current:i.current,required:i.required,level:s.level,animate:!0})]}),n.jsx(tg,{onClick:()=>r("/play")}),n.jsx(ng,{actions:$e}),n.jsx(ag,{dailyQ:q,isFlipped:D,picked:U,onAnswer:V,dailyCompleted:J,DAILY_Q_COINS:Z,DAILY_Q_XP:re}),n.jsx(rg,{categories:Rf,onCategorySelect:ce}),n.jsx(sg,{onClick:()=>M(!0),isPulsing:s.energy<10}),n.jsx(og,{show:B,onClose:()=>H(!1),player:s,changeAvatar:c,GAME_CONSTANTS:ut}),n.jsx(cg,{show:g,onClose:()=>E(!1),selectedCategory:v,difficulty:N,setDifficulty:T,count:S,setCount:x,timer:w,setTimer:k,onStart:pe}),n.jsx(dg,{show:W,onClose:()=>M(!1),allCategories:If,category:$,setCategory:ee,difficulty:oe,setDifficulty:de,count:te,setCount:ne,onStart:he}),n.jsx(ig,{show:j,onClose:()=>C(!1),categories:_f,onCategorySelect:ce}),n.jsx(lg,{show:P,onClose:()=>O(!1),coins:s.coins,onNavigateToPlay:()=>{O(!1),r("/play")}})]})]})]})}const tn={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},nn={get:(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function uc(){const[e,t]=d.useState(()=>nn.get(tn.COINS,0)),[r,s]=d.useState(()=>nn.get(tn.XP,0)),[a,o]=d.useState(()=>nn.get(tn.LEVEL,1)),[i,l]=d.useState(()=>nn.get(tn.OWNED_CHARACTERS,[])),[c,u]=d.useState(()=>nn.get(tn.SOUND,!0));return d.useEffect(()=>nn.set(tn.COINS,e),[e]),d.useEffect(()=>nn.set(tn.XP,r),[r]),d.useEffect(()=>nn.set(tn.LEVEL,a),[a]),d.useEffect(()=>nn.set(tn.OWNED_CHARACTERS,i),[i]),d.useEffect(()=>nn.set(tn.SOUND,c),[c]),{coins:e,xp:r,level:a,ownedCharacters:i,soundOn:c,addCoins:y=>t(j=>j+y),addXp:y=>s(j=>j+y),unlockCharacter:y=>{l(j=>[...new Set([...j,y])])},setSoundOn:u,checkLevelUp:()=>{const y=100*a*(a-1);return r>=y?(o(j=>j+1),!0):!1},nextLevelThreshold:100*a*(a-1),xpProgress:r/(100*a*(a-1))}}const fg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],sn=fg.slice(0,6),rr=360/sn.length,Lf={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},En={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},ir=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Dd=e=>(e%360+360)%360,mc=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},Or=(e,t=.7)=>{try{const r=new Audio(e);r.volume=t,r.play()}catch{}};function hg({run:e,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:o,onBack:i,spinning:l,angle:c,transition:u,result:m,showCallout:p,glowColor:f,soundOn:b,setSoundOn:y,showSparkle:j,pulseIdx:C,nextProgressIdx:v,pendingProgressIdx:h,coinBurstTick:g,lastAnswerWasCorrect:E}){const N=100*s*(s-1),[T,S]=d.useState(!1),x=d.useRef(0),w=d.useRef(null),k=d.useRef(null),[P,O]=d.useState({dx:110,dy:-260}),[B,H]=d.useState(!1);return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(h==null)return;S(!1);const q=setTimeout(()=>S(!0),30);return()=>clearTimeout(q)},[h]),d.useEffect(()=>{var Q,U,R,z;if(!g||!E||g===x.current)return;x.current=g;try{const Y=(U=(Q=k==null?void 0:k.current)==null?void 0:Q.getBoundingClientRect)==null?void 0:U.call(Q),D=(z=(R=w==null?void 0:w.current)==null?void 0:R.getBoundingClientRect)==null?void 0:z.call(R);if(Y&&D){const I=Y.left+Y.width/2,A=Y.top+Y.height/2,G=D.left+D.width/2,re=D.top+D.height/2;O({dx:G-I,dy:re-A})}}catch{}b&&Or("/sounds/coin.mp3",.7),H(!0);const q=setTimeout(()=>H(!1),700);return()=>clearTimeout(q)},[g,b,E]),n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-8",children:[n.jsx("button",{onClick:i,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[n.jsxs("div",{className:"text-[11px]",children:["Lvl ",s," • ",r,"/",N]}),n.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:n.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(r/N,1)*100}%`}})})]}),n.jsxs("button",{ref:w,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),n.jsx("button",{onClick:()=>y(!b),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:n.jsx("span",{className:"text-lg",children:b?"🔊":"🔇"})})]}),a.length>0&&n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:a.map(q=>{const Q=sn.find(R=>ir(R.name)===q),U=Lf[q];return n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:n.jsx("span",{className:"text-sm",children:Q==null?void 0:Q.icon})}),n.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:U})]},q)})})}),n.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:n.jsxs("div",{className:"w-80 max-w-full",children:[n.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),n.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(q=>{const Q=["#FF9800","#FFC107","#cadd75ff"],U=!!e.progress[q];return n.jsxs("div",{className:"relative h-full bg-white/10",children:[n.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:U?q===h?T?"100%":"0%":v===q&&h==null?"0%":"100%":"0%",backgroundColor:Q[q],transition:q===h?"width 1200ms ease-out":"none"}}),C===q&&n.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:n.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),j===q&&n.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},q)})},e.qIndex)]})}),n.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:n.jsxs("div",{ref:k,className:"relative w-96 h-96 rounded-full select-none",children:[f&&n.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${f}40, 0 0 40px 12px ${f}60`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[sn.map((q,Q)=>{const U=Q*rr,R=U+rr,z=rr>180?1:0,Y=Math.PI*U/180,D=Math.PI*R/180,I=50+45*Math.cos(Y),A=50-45*Math.sin(Y),G=50+45*Math.cos(D),re=50-45*Math.sin(D),Z=U+rr/2,F=28,L=50+F*Math.cos(Z*Math.PI/180),W=50-F*Math.sin(Z*Math.PI/180);return n.jsxs("g",{children:[n.jsx("path",{d:`M50,50 L${I},${A} A45,45 0 ${z} 0 ${G},${re} Z`,fill:q.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),n.jsx("text",{x:L,y:W,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:q.icon})]},Q)}),n.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),n.jsx("button",{onClick:o,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:n.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:n.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),p&&m&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:n.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[n.jsx("span",{className:"mr-2",children:m.cat.icon}),m.cat.name]})}),B&&n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(q=>n.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${q*80}ms forwards`,"--coin-dx":`${P.dx}px`,"--coin-dy":`${P.dy}px`},children:n.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},q))]})]})}),n.jsx("div",{className:"text-center",children:n.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}var Ma={linear:function(e,t,r,s){var a=r-t;return a*e/s+t},easeInQuad:function(e,t,r,s){var a=r-t;return a*(e/=s)*e+t},easeOutQuad:function(e,t,r,s){var a=r-t;return-a*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e+t},easeOutCubic:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,r,s){var a=r-t;return-a*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,s){var a=r-t;return-a*Math.cos(e/s*(Math.PI/2))+a+t},easeOutSine:function(e,t,r,s){var a=r-t;return a*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,r,s){var a=r-t;return-a/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,r,s){var a=r-t;return e==0?t:a*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,r,s){var a=r-t;return e==s?t+a:a*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,r,s){var a=r-t;return e===0?t:e===s?t+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,s){var a=r-t;return-a*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,r,s){var a=r-t;return a*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,s){var a=r-t,o,i,l;return l=1.70158,i=0,o=a,e===0?t:(e/=s)===1?t+a:(i||(i=s*.3),o<Math.abs(a)?(o=a,l=i/4):l=i/(2*Math.PI)*Math.asin(a/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/i))+t)},easeOutElastic:function(e,t,r,s){var a=r-t,o,i,l;return l=1.70158,i=0,o=a,e===0?t:(e/=s)===1?t+a:(i||(i=s*.3),o<Math.abs(a)?(o=a,l=i/4):l=i/(2*Math.PI)*Math.asin(a/o),o*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/i)+a+t)},easeInOutElastic:function(e,t,r,s){var a=r-t,o,i,l;return l=1.70158,i=0,o=a,e===0?t:(e/=s/2)===2?t+a:(i||(i=s*(.3*1.5)),o<Math.abs(a)?(o=a,l=i/4):l=i/(2*Math.PI)*Math.asin(a/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/i))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/i)*.5+a+t)},easeInBack:function(e,t,r,s,a){var o=r-t;return a===void 0&&(a=1.70158),o*(e/=s)*e*((a+1)*e-a)+t},easeOutBack:function(e,t,r,s,a){var o=r-t;return a===void 0&&(a=1.70158),o*((e=e/s-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(e,t,r,s,a){var o=r-t;return a===void 0&&(a=1.70158),(e/=s/2)<1?o/2*(e*e*(((a*=1.525)+1)*e-a))+t:o/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(e,t,r,s){var a=r-t,o;return o=Ma.easeOutBounce(s-e,0,a,s),a-o+t},easeOutBounce:function(e,t,r,s){var a=r-t;return(e/=s)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,s){var a=r-t,o;return e<s/2?(o=Ma.easeInBounce(e*2,0,a,s),o*.5+t):(o=Ma.easeOutBounce(e*2-s,0,a,s),o*.5+a*.5+t)}},pg=Ma;function xg(e){return e*Math.PI/180}function Et(e,t){return e+Math.random()*(t-e)}function gg(e,t){return Math.floor(e+Math.random()*(t-e+1))}var Cs;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(Cs||(Cs={}));var Ln;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(Ln||(Ln={}));const vg=1e3/60;class yg{constructor(t,r,s,a){this.getOptions=r;const{colors:o,initialVelocityX:i,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=a,this.w=Et(5,20),this.h=Et(5,20),this.radius=Et(5,10),this.vx=typeof i=="number"?Et(-i,i):Et(i.min,i.max),this.vy=typeof l=="number"?Et(-l,0):Et(l.min,l.max),this.shape=gg(0,2),this.angle=xg(Et(0,360)),this.angularSpin=Et(-.2,.2),this.color=o[Math.floor(Math.random()*o.length)],this.rotateY=Et(0,1),this.rotationDirection=Et(0,1)?Ln.Positive:Ln.Negative}update(t){const{gravity:r,wind:s,friction:a,opacity:o,drawShape:i}=this.getOptions(),l=t/vg;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=r*l,this.vx+=s*l,this.vx*=a**l,this.vy*=a**l,this.rotateY>=1&&this.rotationDirection===Ln.Positive?this.rotationDirection=Ln.Negative:this.rotateY<=-1&&this.rotationDirection===Ln.Negative&&(this.rotationDirection=Ln.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,i&&typeof i=="function")i.call(this,this.context);else switch(this.shape){case Cs.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case Cs.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case Cs.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class bg{constructor(t,r){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=a=>{this.particles.splice(a,1)},this.getParticle=()=>{const a=Et(this.x,this.w+this.x),o=Et(this.y,this.h+this.y);return new yg(this.context,this.getOptions,a,o)},this.animate=a=>{const{canvas:o,context:i,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:m,numberOfPieces:p,debug:f,tweenFunction:b,tweenDuration:y}=this.getOptions();if(!u)return!1;const j=this.particles.length,C=m?j:l;if(C<p){c!==p&&(this.tweenProgress=0,this.tweenFrom=C,this.lastNumberOfPieces=p),this.tweenProgress=Math.min(y,Math.max(0,this.tweenProgress+a));const v=b(this.tweenProgress,this.tweenFrom,p,y),h=Math.round(v-C);for(let g=0;g<h;g++)this.particles.push(this.getParticle());this.particlesGenerated+=h}f&&(i.font="12px sans-serif",i.fillStyle="#333",i.textAlign="right",i.fillText(`Particles: ${j}`,o.width-10,o.height-20));for(let v=this.particles.length-1;v>=0;v--){const h=this.particles[v];h.update(a),(h.y>o.height||h.y<-100||h.x>o.width+100||h.x<-100)&&(m&&C<=p?this.particles[v]=this.getParticle():this.removeParticleAt(v))}return j>0||C<p},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=r}}const fc={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:pg.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class wg{constructor(t,r){this.lastFrameTime=0,this.setOptionsWithDefaults=a=>{const o={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...o,...fc,...a},Object.assign(this,a.confettiSource)},this.update=(a=0)=>{const{options:{run:o,onConfettiComplete:i,frameRate:l},canvas:c,context:u}=this,m=Math.min(a-this.lastFrameTime,50);if(l&&m<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=a-(l?m%l:0),o&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(m)?this.rafId=requestAnimationFrame(this.update):(i&&typeof i=="function"&&this.generator.particlesGenerated>0&&i.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new bg(this.canvas,()=>this.options),this.options=r,this.update()}get options(){return this._options}set options(t){var a,o;const r=(a=this._options)==null?void 0:a.run,s=(o=this._options)==null?void 0:o.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&r===!1&&this.update()}}const jg=gt.createRef();class hc extends gt.Component{constructor(t){super(t),this.canvas=gt.createRef(),this.canvas=t.canvasRef||jg}componentDidMount(){if(this.canvas.current){const t=ai(this.props)[0];this.confetti=new wg(this.canvas.current,t)}}componentDidUpdate(){const t=ai(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,r]=ai(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...r.style};return n.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...r,style:s})}}hc.defaultProps={...fc};hc.displayName="ReactConfetti";function ai(e){const t={},r={},s={},a=[...Object.keys(fc),"confettiSource","drawShape","onConfettiComplete","frameRate"],o=["canvasRef"];for(const i in e){const l=e[i];a.includes(i)?t[i]=l:o.includes(i)?o[i]=l:s[i]=l}return[t,s,r]}const Af=gt.forwardRef((e,t)=>n.jsx(hc,{canvasRef:t,...e}));function Md({question:e,category:t,onAnswer:r,run:s,timeLeft:a,usedLifelines:o,onUseLifeline:i,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:m,onTimeUpBackToWheel:p,soundOn:f}){const[b,y]=d.useState(null),[j,C]=d.useState(!1),[v,h]=d.useState(!1),g=d.useRef(null),E=d.useRef(null),[N,T]=d.useState(null);d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(!j||!g.current)return;const w=g.current.getBoundingClientRect();T({x:w.left,y:w.top-300,w:w.width,h:8})},[j]);const S=w=>{if(j)return;y(w),C(!0);const k=w===e.correctIndex;mc(k?[50,30,50]:[200]),f&&Or(k?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{r(k,null)},1500)},x=b===e.correctIndex;return n.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:n.jsxs("div",{ref:E,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("div",{className:"mb-4",children:n.jsx("button",{onClick:()=>h(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:`text-4xl font-black mb-2 ${a<=10?"text-red-400 animate-pulse":"text-white"}`,children:a}),n.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:n.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${a<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${a/30*100}%`}})})]}),n.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[n.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-lg font-bold",children:t.name}),n.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),n.jsx("h2",{ref:g,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),n.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((w,k)=>{const P=l.includes(k),O=b===k,B=k===e.correctIndex;let H="bg-white/10 border-white/20",q="opacity-100";return P?q="opacity-30":j&&O?H=B?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&B?H="bg-green-500/30 border-green-400":O&&(H="bg-white/20 border-white/40"),n.jsx("button",{onClick:()=>S(k),disabled:j||P,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${H} ${q} ${!j&&!P?"hover:bg-white/15 active:scale-98":""}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+k)}),n.jsx("span",{className:"font-medium flex-1",children:w}),c&&n.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[k]),"%"]})]})},k)})}),!j&&n.jsxs("div",{className:"flex gap-4 mb-8",children:[n.jsx("button",{onClick:()=>i("fifty"),disabled:o.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),n.jsx("button",{onClick:()=>i("audience"),disabled:o.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&n.jsxs("div",{className:"relative text-center",children:[x&&n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsx(Af,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:N||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),n.jsx("button",{onClick:()=>r(x,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),m&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),n.jsx("button",{onClick:p,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),v&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>h(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Od({category:e,onComplete:t,isBonus:r=!1,soundOn:s=!0}){return d.useEffect(()=>{s&&Or("/sounds/flush.mp3",.8);const a=setTimeout(t,1e3);return mc([50]),()=>clearTimeout(a)},[t,s]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),r?n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[n.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),n.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:n.jsx("span",{className:"text-6xl",children:"⭐"})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[n.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[n.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),n.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),n.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:n.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function Ng({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:n.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function kg({onSelect:e}){return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[n.jsxs("header",{className:"text-center mb-12",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),n.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),n.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-6",children:sn.map(t=>{const r=Lf[ir(t.name)];return n.jsxs("button",{onClick:()=>e(ir(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[n.jsx("div",{className:"text-4xl mb-3",children:t.icon}),n.jsx("div",{className:"font-black text-lg mb-1",children:r}),n.jsx("div",{className:"text-sm opacity-75",children:t.name})]},ir(t.name))})})]})})}function Sg({onBack:e}){const{coins:t,xp:r,level:s,ownedCharacters:a,soundOn:o,addCoins:i,addXp:l,unlockCharacter:c,setSoundOn:u}=uc(),[m,p]=d.useState("wheel"),[f,b]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[y,j]=d.useState([]),[C,v]=d.useState(null),[h,g]=d.useState(null),[E,N]=d.useState(30),[T,S]=d.useState([]),[x,w]=d.useState(null),[k,P]=d.useState(null),[O,B]=d.useState(!1),[H,q]=d.useState(0),[Q,U]=d.useState("none"),[R,z]=d.useState(!1),[Y,D]=d.useState(null),[I,A]=d.useState(!1),[G,re]=d.useState(null),[Z,F]=d.useState(-1),[L,W]=d.useState(0),[M,$]=d.useState(null),[ee,oe]=d.useState(null),[de,te]=d.useState(!1),[ne,J]=d.useState(null),[_,V]=d.useState(-1),[ce,pe]=d.useState([!1,!1,!1]),[he,$e]=d.useState(!1),[ue,Ne]=d.useState(!1),ge=d.useRef(null),xe=d.useRef(null),ye=d.useRef(null),ht=d.useMemo(()=>{var se;return((se=window.matchMedia)==null?void 0:se.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>(Qt(),at(),window.history.pushState({mode:"classic"},"",window.location.href),()=>ke()),[]),d.useEffect(()=>{const se=le=>{le.preventDefault(),e()};return window.addEventListener("popstate",se),()=>window.removeEventListener("popstate",se)},[e]),d.useEffect(()=>(m==="question"&&E>0&&!ue?ge.current=setTimeout(()=>{N(se=>{const le=se-1;return le===10&&o&&Or("/sounds/tick.mp3",.8),le})},1e3):m==="question"&&E===0&&B(!0),()=>{ge.current&&clearTimeout(ge.current)}),[m,E,o,ue]),d.useEffect(()=>{if(m!=="wheel"||M==null)return;F(M),o&&Or("/sounds/progress.mp3",.6),V(M);const se=setTimeout(()=>V(-1),900),le=setTimeout(()=>F(-1),900),Ae=setTimeout(()=>{ne&&(ne==="streakFlash"?p("streakFlash"):ne==="characterPicker"?p("characterPicker"):At(),J(null)),$(null)},1800);return()=>{clearTimeout(se),clearTimeout(le),clearTimeout(Ae)}},[m,M,ne,o]),d.useEffect(()=>{m!=="wheel"||!he||(W(se=>se+1),$e(!1))},[m,he]),d.useEffect(()=>{if(m!=="wheel"||ee==null)return;const le=setTimeout(()=>{$(ee),oe(null)},de?1800:0);return()=>clearTimeout(le)},[m,ee,de]);const Qt=async()=>{try{const le=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Ae}=pr.parse(le,{header:!0,skipEmptyLines:!0,transformHeader:ve=>ve.trim().toLowerCase()}),Pe=Ae.map((ve,Xe)=>{var Sn;const xt=[ve.option1,ve.option2,ve.option3,ve.option4].map(gr=>(gr||"").trim()).filter(Boolean);if(xt.length<4)return null;let cn={a:0,b:1,c:2,d:3}[(Sn=ve.answer)==null?void 0:Sn.toLowerCase()];return cn===void 0&&(cn=xt.findIndex(gr=>gr.toLowerCase()===(ve.answer||"").toLowerCase())),cn===-1&&(cn=0),{id:ve.id||`q_${Xe}`,prompt:(ve.question||"").trim(),options:xt,correctIndex:cn,category:(ve.category||ve.subject||"general knowledge").trim(),difficulty:(ve.difficulty||"medium").toLowerCase(),explanation:(ve.explanation||"").trim()}}).filter(Boolean);j(Pe)}catch(se){console.error("Failed to load questions:",se),j([])}},at=()=>{const se=new Audio("/sounds/spin.mp3");se.loop=!0,se.volume=.6,xe.current=se},ke=()=>{if(ge.current&&clearTimeout(ge.current),ye.current&&(clearTimeout(ye.current),ye.current=null),xe.current){try{xe.current.pause()}catch{}xe.current=null}},De=()=>{b({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),pe([!1,!1,!1]),v(null),g(null),P(null),S([]),w(null),B(!1),W(0)},At=()=>{e(),De()},xr=()=>{if(o&&xe.current){try{xe.current.currentTime=0,xe.current.play()}catch{}ye.current&&clearTimeout(ye.current),ye.current=setTimeout(()=>{We()},2e3)}},We=()=>{if(ye.current&&(clearTimeout(ye.current),ye.current=null),xe.current)try{xe.current.pause(),xe.current.currentTime=0}catch{}},K=()=>{if(R)return;D(null),A(!1),re(null),z(!0),xr();const se=Math.floor(Math.random()*sn.length),le=sn[se],Ae=Dd(H),Pe=se*rr+rr/2,ve=(Math.random()-.5)*(rr*.3),Xe=360-Pe+ve;let xt=Dd(Xe-Ae);const Zt=En.FULL_TURNS*360+xt,cn=H+Zt+En.OVERSHOOT;U(`transform ${ht?1e3:En.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),q(cn),mc([20,50,20]),setTimeout(()=>{U(`transform ${ht?200:En.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),q(Sn=>Sn-En.OVERSHOOT)},ht?1e3:En.DURATION),setTimeout(()=>{We(),z(!1),D({cat:le,index:se}),g(le),re(le.color),A(!0),setTimeout(()=>{A(!1),p("interstitial")},1500),setTimeout(()=>re(null),1e3)},(ht?1e3:En.DURATION)+(ht?200:En.SETTLE_DURATION)+100)},ie=()=>{const se=y.filter(Ae=>{const Pe=Ae.category.toLowerCase(),ve=h.name.toLowerCase();return Pe.includes(ve)||ve.includes(Pe)});let le;se.length>0?le=se[Math.floor(Math.random()*se.length)]:le=y[Math.floor(Math.random()*y.length)],le?(v(le),N(30),S([]),w(null),B(!1),Ne(!1),p("question")):p("wheel")},Ie=(se,le,Ae=!1)=>{if(!Ae){Ne(!0);return}const Pe=f.qIndex,ve=[...f.progress];ve[Pe]=!0;const Xe=[...ce];if(Xe[Pe]=!!se,pe(Xe),b(xt=>({...xt,progress:ve,qIndex:xt.qIndex+1})),se&&(i(5),l(1),$e(!0)),oe(Pe),te(!!se),Pe===2){const xt=Xe.every(Boolean);J(xt?"streakFlash":"modes")}else J(null);p("wheel")},Ce=se=>{if(!(f.lifelines[se]||!C)){if(b(le=>({...le,lifelines:{...le.lifelines,[se]:!0}})),se==="fifty"){const Ae=C.options.map((Pe,ve)=>ve).filter(Pe=>Pe!==C.correctIndex).slice(0,2);S(Ae)}else if(se==="audience"){const le=40+Math.random()*25;let Ae=100-le;const Pe=[0,0,0,0];Pe[C.correctIndex]=Math.round(le);const ve=[0,1,2,3].filter(Xe=>Xe!==C.correctIndex);ve.forEach((Xe,xt)=>{if(xt===ve.length-1)Pe[Xe]=Ae;else{const Zt=Math.floor(Math.random()*Ae);Pe[Xe]=Zt,Ae-=Zt}}),w(Pe)}}},Ge=se=>{P(se),p("bonusInterstitial")},we=se=>{se&&k&&(c(k),o&&Or("/sounds/coin.mp3",1)),setTimeout(()=>{At()},3e3)},pt=()=>{p("wheel")};switch(m){case"wheel":return n.jsx(hg,{run:f,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:K,onBack:e,spinning:R,angle:H,transition:Q,result:Y,showCallout:I,glowColor:G,soundOn:o,setSoundOn:u,showSparkle:Z,pulseIdx:_,coinBurstTick:L,pendingProgressIdx:M,lastAnswerWasCorrect:de,nextProgressIdx:ee});case"interstitial":return n.jsx(Od,{category:h,onComplete:ie,soundOn:o});case"streakFlash":return n.jsx(Ng,{onDone:()=>p("characterPicker")});case"question":return n.jsx(Md,{question:C,category:h,onAnswer:Ie,run:f,timeLeft:E,usedLifelines:f.lifelines,onUseLifeline:Ce,eliminatedOptions:T,audienceData:x,onBack:pt,timeUp:O,onTimeUpBackToWheel:()=>{B(!1),p("wheel")},soundOn:o});case"characterPicker":return n.jsx(kg,{onSelect:Ge});case"bonusInterstitial":return n.jsx(Od,{category:sn.find(se=>ir(se.name)===k),onComplete:()=>p("bonusQuestion"),isBonus:!0,soundOn:o});case"bonusQuestion":if(!C){const se=sn.find(le=>ir(le.name)===k);if(se&&y.length>0){const le=y.filter(Pe=>{const ve=Pe.category.toLowerCase(),Xe=se.name.toLowerCase();return ve.includes(Xe)||Xe.includes(ve)}),Ae=le.length>0?le[Math.floor(Math.random()*le.length)]:y[Math.floor(Math.random()*y.length)];v(Ae),N(30)}return n.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:n.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return n.jsx(Md,{question:C,category:sn.find(se=>ir(se.name)===k)||sn[0],onAnswer:we,run:{...f,lifelines:{fifty:!0,audience:!0}},timeLeft:E,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:e,soundOn:o});default:return n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),n.jsx("button",{onClick:()=>p("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function Cg({lives:e,maxLives:t=3}){const[r,s]=d.useState(null),[a,o]=d.useState(e);return d.useEffect(()=>{e<a?(s(a-1),setTimeout(()=>s(null),600)):e>a&&(s(e-1),setTimeout(()=>s(null),1e3)),o(e)},[e,a]),n.jsxs("div",{className:"relative",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[n.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((i,l)=>n.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:n.jsxs("div",{className:"relative",children:[l<e?n.jsxs("div",{className:`relative ${l===r&&e>a?"heart-gained":""}`,children:[n.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&n.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):n.jsx("div",{className:`relative ${l===r&&e<a?"heart-lost":""}`,children:n.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===r&&e>a&&n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[n.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),n.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),n.jsx("div",{className:"pr-1",children:n.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&n.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:n.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function Eg({question:e,onAnswer:t,lives:r,questionCount:s,correctStreak:a,totalScore:o,currentDifficulty:i,timeLeft:l,showFeedback:c,lastAnswerCorrect:u,checkpoint:m,onBack:p,soundOn:f,setSoundOn:b}){const[y,j]=d.useState(null),[C,v]=d.useState(!1),[h,g]=d.useState(!1),E={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},N=E[i];d.useEffect(()=>{a>0&&a%5===0&&c&&u&&(v(!0),setTimeout(()=>v(!1),3e3))},[a,c,u]),d.useEffect(()=>{c&&u&&(g(!0),setTimeout(()=>g(!1),1e3))},[c,u]);const T=S=>{c||(j(S),t(S))};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:N.emoji}),n.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),n.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-8 slide-in",children:[n.jsx("button",{onClick:p,className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"◀️"})}),n.jsx(Cg,{lives:r}),n.jsx("button",{onClick:()=>b(!f),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:f?"🔊":"🔇"})})]}),n.jsx("div",{className:`glass-card rounded-3xl p-2 shadow-xl mb-2 mt-12 slide-in bg-gradient-to-r ${N.accentGradient}`,style:{animationDelay:"0.1s"},children:n.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${N.color} bg-clip-text text-transparent ${h?"score-pulse":""}`,children:o}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),c&&u&&n.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",E[i]?i==="EASY"?10:i==="MEDIUM"?20:i==="HARD"?30:i==="EXPERT"?50:100:10]})})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-black text-white",children:s}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:`text-3xl font-black text-orange-400 ${a>0?"streak-flame":""}`,children:a}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),n.jsxs("div",{className:"flex justify-between items-center mb-1 slide-in",style:{animationDelay:"0.2s"},children:[n.jsx("div",{className:`px-4 py-3 rounded-full bg-gradient-to-r ${N.color} text-white shadow-lg`,children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:N.emoji}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:N.label}),n.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),n.jsx("div",{className:"relative",children:n.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[n.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),n.jsx("div",{className:"relative z-10",children:n.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),n.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[n.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),n.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),n.jsx("div",{className:"space-y-3",children:e.options.map((S,x)=>{const w=["A","B","C","D"],k=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let P="glass-card border border-white/10",O="";return c&&(x===e.correctIndex?(P="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",O="correct-bounce"):y===x&&!u&&(P="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",O="wrong-shake")),n.jsx("button",{onClick:()=>T(x),disabled:c,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${P} ${O} 
                  ${c?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+x*.05}s`},children:n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${k[x]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:w[x]}),n.jsx("span",{className:"flex-1 text-left font-medium text-white",children:S}),c&&x===e.correctIndex&&n.jsx("span",{className:"text-2xl",children:"✅"}),c&&y===x&&!u&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},x)})}),c&&n.jsx("div",{className:"mt-6 text-center slide-in",children:n.jsx("p",{className:"text-sm font-medium text-white/70",children:u?N.motivationalText:"No worries! Keep trying! 💪"})}),m>0&&n.jsx("div",{className:"mt-4 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:n.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏁"}),n.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",m]})]})})})]}),C&&n.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),n.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),n.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})})]})}function Pg({score:e,questionsAnswered:t,highScore:r,checkpoint:s,onRestart:a,onContinue:o,onBack:i}){const l=e>r,[c,u]=d.useState(!1),[m,p]=d.useState(0),[f,b]=d.useState(!1),y=d.useRef(null);d.useEffect(()=>{const g=e/60;let E=0;const N=setInterval(()=>{E+=g,E>=e?(p(e),clearInterval(N),l&&(u(!0),setTimeout(()=>u(!1),5e3))):p(Math.floor(E))},2e3/60);return setTimeout(()=>b(!0),2200),()=>clearInterval(N)},[e,l]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const C=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),c&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((v,h)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:n.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},h))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[n.jsxs("div",{className:"mb-8 slide-up",children:[n.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&n.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:n.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"🏆"}),n.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),n.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),f&&n.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:n.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${C.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[n.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:C.emoji}),n.jsx("h2",{className:"text-3xl font-black mb-2",children:C.title}),n.jsx("p",{className:"text-white/80 mb-4",children:C.subtitle}),n.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((v,h)=>n.jsx("span",{className:`text-2xl ${h<C.stars?"star-pop":""}`,style:{animationDelay:`${2.5+h*.1}s`},children:h<C.stars?"⭐":"☆"},h))})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),n.jsx("div",{ref:y,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:m}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"📊"}),n.jsx("div",{className:"text-4xl font-black text-white",children:t}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(r,e)]})})]})]}),n.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:n.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),n.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&o&&n.jsx("button",{onClick:o,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏁"}),n.jsxs("span",{children:["Continue from Question ",s]})]})}),n.jsx("button",{onClick:a,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎮"}),n.jsx("span",{children:"Play Again"})]})}),n.jsx("button",{onClick:i,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏠"}),n.jsx("span",{children:"Back to Games"})]})})]})]})]})}const Fd={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function Tg({onBack:e,isFromQuest:t}){const{coins:r,xp:s,level:a,soundOn:o,addCoins:i,addXp:l,setSoundOn:c}=uc(),[u,m]=d.useState("playing"),[p,f]=d.useState(3),[b,y]=d.useState(0),[j,C]=d.useState(0),[v,h]=d.useState(0),[g,E]=d.useState("EASY"),[N,T]=d.useState([]),[S,x]=d.useState(null),[w,k]=d.useState(30),[P,O]=d.useState(!1),[B,H]=d.useState(!1),[q,Q]=d.useState(0),[U,R]=d.useState(!1),z=d.useRef(null),Y=d.useRef(new Set);d.useEffect(()=>(I(),W(),window.history.pushState({mode:"survival"},"",window.location.href),()=>{z.current&&clearTimeout(z.current)}),[]),d.useEffect(()=>(u==="playing"&&S&&w>0&&!P&&(z.current=setTimeout(()=>{k(_=>_<=1?(F(),0):(_===6&&o&&ne("/sounds/tick.mp3",.8),_-1))},1e3)),()=>{z.current&&clearTimeout(z.current)}),[u,S,w,P,o]),d.useEffect(()=>{const _=D(b);_!==g&&(E(_),o&&ne("/sounds/levelup.mp3",.6))},[b,g,o]),d.useEffect(()=>{b>0&&b%10===0&&(L(),Q(b),o&&ne("/sounds/checkpoint.mp3",.7))},[b,o]),d.useEffect(()=>{const _=V=>{V.preventDefault(),R(!0),window.history.pushState({mode:"survival"},"",window.location.href)};return window.addEventListener("popstate",_),()=>{window.removeEventListener("popstate",_)}},[]);const D=_=>_>=100?"LEGENDARY":_>=50?"EXPERT":_>=25?"HARD":_>=10?"MEDIUM":"EASY",I=async()=>{try{const V=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:ce}=pr.parse(V,{header:!0,skipEmptyLines:!0,transformHeader:he=>he.trim().toLowerCase()}),pe=ce.map((he,$e)=>{var xe;const ue=[he.option1,he.option2,he.option3,he.option4].map(ye=>(ye||"").trim()).filter(Boolean);if(ue.length<4)return null;let ge={a:0,b:1,c:2,d:3}[(xe=he.answer)==null?void 0:xe.toLowerCase()];return ge===void 0&&(ge=ue.findIndex(ye=>ye.toLowerCase()===(he.answer||"").toLowerCase())),ge===-1&&(ge=0),{id:he.id||`q_${$e}`,prompt:(he.question||"").trim(),options:ue,correctIndex:ge,category:(he.category||he.subject||"general").trim(),difficulty:(he.difficulty||"medium").toLowerCase()}}).filter(Boolean);T(pe),A(pe)}catch(_){console.error("Failed to load questions:",_)}},A=(_=N)=>{const V=_.filter($e=>!Y.current.has($e.id));V.length===0&&(Y.current.clear(),V.push(..._));const ce=g.toLowerCase();let pe=V.filter($e=>$e.difficulty===ce||$e.difficulty==="medium");pe.length===0&&(pe=V);const he=pe[Math.floor(Math.random()*pe.length)];he&&(Y.current.add(he.id),x(he),k(Fd[g].timer),O(!1))},G=_=>{if(P)return;const V=_===S.correctIndex;H(V),O(!0),V?re():Z(),setTimeout(()=>{(p>0||V)&&(y(ce=>ce+1),A())},1500)},re=()=>{const _=Fd[g].points;h(V=>V+_),C(V=>{const ce=V+1;if(t){const pe=JSON.parse(localStorage.getItem("questProgress")||"{}");pe.winStreak=Math.max(pe.winStreak||0,ce),pe.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(pe)),ce>=5&&console.log("Win streak quest completed!")}return ce%5===0&&p<3&&(f(pe=>Math.min(pe+1,3)),o&&ne("/sounds/lifeup.mp3",.8)),ce}),i(Math.floor(_/10)),l(1),o&&ne("/sounds/correct.mp3",.7)},Z=()=>{C(0),f(_=>{const V=_-1;return V<=0&&(m("gameOver"),$()),V}),o&&ne("/sounds/wrong.mp3",.7),J([200])},F=()=>{Z()},L=()=>{const _={questionCount:b,totalScore:v,lives:p,correctStreak:j,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(_))},W=()=>{const _=localStorage.getItem("survival_checkpoint");if(_)try{const V=JSON.parse(_);Date.now()-V.timestamp<864e5?(y(V.questionCount),h(V.totalScore),f(V.lives),C(V.correctStreak),Q(V.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(V){console.error("Failed to load checkpoint:",V)}},M=()=>{localStorage.removeItem("survival_checkpoint"),Q(0)},$=()=>{const _=parseInt(localStorage.getItem("survival_highscore")||"0");v>_&&(localStorage.setItem("survival_highscore",v.toString()),localStorage.setItem("survival_highquestions",b.toString()))},ee=()=>{m("playing"),f(3),y(0),C(0),h(0),E("EASY"),Y.current.clear(),M(),A()},oe=()=>{m("playing"),A()},de=()=>{R(!0)},te=()=>{if(t){const _=JSON.parse(localStorage.getItem("questProgress")||"{}");_.winStreak=Math.max(_.winStreak||0,j),_.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(_)),window.location.href="/profile/quests"}else window.history.go(-1),e()},ne=(_,V=.5)=>{try{const ce=new Audio(_);ce.volume=V,ce.play()}catch{}},J=_=>{navigator.vibrate&&navigator.vibrate(_)};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),u==="gameOver"?n.jsxs(n.Fragment,{children:[n.jsx(Pg,{score:v,questionsAnswered:b,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:q,onRestart:ee,onContinue:q>0?oe:null,onBack:de}),U&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>R(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:te,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):S?n.jsxs(n.Fragment,{children:[n.jsx(Eg,{question:S,onAnswer:G,lives:p,questionCount:b,correctStreak:j,totalScore:v,currentDifficulty:g,timeLeft:w,showFeedback:P,lastAnswerCorrect:B,checkpoint:q,onBack:de,soundOn:o,setSoundOn:c}),U&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>R(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:te,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const sr=[{id:1,name:"Sandy Beach",emoji:"🏖️",theme:{background:"from-yellow-300 via-orange-300 to-blue-400",accent:"from-yellow-400 to-orange-400",cardBg:"from-amber-500/20 to-yellow-500/20",unlockGradient:"from-yellow-400 to-amber-500"},difficulty:"EASY",difficultyRange:{min:0,max:9},questionDifficulty:["easy"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:10,gemChance:.3,gemBonus:5,speedBonus:3,perfectBonus:50,treasurePiece:"🧩",completionCoins:30},description:"Start your adventure on the sunny shores! Easy questions to warm up.",unlockRequirement:null,visualElements:{bgEmojis:["🌊","🐚","🦀","⛱️","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","✨"]}},{id:2,name:"Jungle Cave",emoji:"🌴",theme:{background:"from-green-400 via-emerald-500 to-teal-600",accent:"from-green-500 to-emerald-600",cardBg:"from-green-500/20 to-emerald-500/20",unlockGradient:"from-green-400 to-emerald-500"},difficulty:"EASY-MEDIUM",difficultyRange:{min:10,max:24},questionDifficulty:["easy","medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:15,gemChance:.35,gemBonus:7,speedBonus:5,perfectBonus:75,treasurePiece:"🗝️",completionCoins:50},description:"Explore the mysterious jungle caves! Watch out for tricky vines!",unlockRequirement:{island:1,treasurePiece:!0},visualElements:{bgEmojis:["🌿","🦜","🐒","🦋","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🌟"]}},{id:3,name:"Crystal Mountain",emoji:"⛰️",theme:{background:"from-purple-400 via-pink-400 to-indigo-500",accent:"from-purple-500 to-pink-500",cardBg:"from-purple-500/20 to-pink-500/20",unlockGradient:"from-purple-400 to-pink-500"},difficulty:"MEDIUM",difficultyRange:{min:25,max:49},questionDifficulty:["medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:20,gemChance:.4,gemBonus:10,speedBonus:7,perfectBonus:100,treasurePiece:"💎",completionCoins:75},description:"Climb the sparkling crystal peaks! Medium challenges await!",unlockRequirement:{island:2,treasurePiece:!0},visualElements:{bgEmojis:["✨","🔮","⭐","🌟","💫"],diggingEmoji:"⚒️",foundEmojis:["💎","🪙","🌈"]}},{id:4,name:"Pirate Ship",emoji:"🏴‍☠️",theme:{background:"from-slate-600 via-blue-600 to-cyan-500",accent:"from-slate-700 to-blue-700",cardBg:"from-slate-500/20 to-blue-500/20",unlockGradient:"from-slate-500 to-blue-600"},difficulty:"MEDIUM-HARD",difficultyRange:{min:50,max:99},questionDifficulty:["medium","hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:30,gemChance:.45,gemBonus:15,speedBonus:10,perfectBonus:150,treasurePiece:"🗺️",completionCoins:100},description:"Ahoy matey! Navigate the pirate ship's challenging puzzles!",unlockRequirement:{island:3,treasurePiece:!0},visualElements:{bgEmojis:["⚓","🦜","💀","🌊","⛵"],diggingEmoji:"🗡️",foundEmojis:["💎","🪙","👑"]}},{id:5,name:"Volcano Peak",emoji:"🌋",theme:{background:"from-red-500 via-orange-500 to-yellow-500",accent:"from-red-600 to-orange-600",cardBg:"from-red-500/20 to-orange-500/20",unlockGradient:"from-red-500 to-orange-500"},difficulty:"HARD",difficultyRange:{min:100,max:1/0},questionDifficulty:["hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:50,gemChance:.5,gemBonus:25,speedBonus:15,perfectBonus:200,treasurePiece:"👑",completionCoins:150},description:"The ultimate challenge! Can you conquer the volcano?",unlockRequirement:{island:4,treasurePiece:!0},visualElements:{bgEmojis:["🔥","🌋","💥","⚡","🔴"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🏆"]}}],Oe={SHOVELS_PER_ISLAND:3,QUESTIONS_PER_ISLAND:3,SPEED_BONUS_THRESHOLD:5,MIN_CORRECT_FOR_TREASURE:2,FINAL_TREASURE_REWARD:200,FINAL_TREASURE_TITLE:"Treasure Master",DIGGING_ANIMATION_DURATION:1500,REWARD_DISPLAY_DURATION:2e3,TRANSITION_DURATION:500,STORAGE_KEYS:{PROGRESS:"treasureHunt_progress",STATS:"treasureHunt_stats",UNLOCKED_ISLANDS:"treasureHunt_unlocked",COMPLETED_ISLANDS:"treasureHunt_completed",TREASURE_PIECES:"treasureHunt_pieces"},SOUNDS:{DIG:"/sounds/dig.mp3",TREASURE_FOUND:"/sounds/treasure.mp3",GEM_FOUND:"/sounds/gem.mp3",WRONG:"/sounds/wrong.mp3",ISLAND_COMPLETE:"/sounds/islandcomplete.mp3",ISLAND_UNLOCK:"/sounds/unlock.mp3",FINAL_TREASURE:"/sounds/victory.mp3",TICK:"/sounds/tick.mp3",SHOVEL_BREAK:"/sounds/break.mp3"}},un=e=>sr.find(t=>t.id===e),Rg=(e,t)=>{const r=un(e);if(!r.unlockRequirement)return!0;const s=t[r.unlockRequirement.island];return s&&s.treasurePiece},_g=(e,t)=>{const r={0:["Keep trying! You'll get it! 💪","Don't give up! Adventure awaits! 🌟","Practice makes perfect! 🎯"],1:["Good effort! Almost there! 🌈","Nice try! Keep going! ⭐","You're learning fast! 🚀"],2:["Awesome! You found treasure! 🏆","Great job, explorer! 🎉","You're amazing! ✨"],3:["PERFECT! You're a champion! 👑","INCREDIBLE! Master explorer! 🌟","LEGENDARY performance! 🏆"]},s=r[e]||r[0];return s[Math.floor(Math.random()*s.length)]},Ig=e=>sr.map(t=>{var r;return{id:t.id,piece:t.rewards.treasurePiece,collected:((r=e[t.id])==null?void 0:r.treasurePiece)||!1}});function Lg({islands:e,islandProgress:t,onSelectIsland:r,onBack:s,soundOn:a,setSoundOn:o,totalStats:i}){const[l,c]=d.useState(!1),u=Ig(t),m=u.filter(f=>f.collected).length,p=Math.round(m/e.length*100);return d.useEffect(()=>(document.body.style.position="fixed",document.body.style.overflow="hidden",document.body.style.width="100%",document.body.style.height="100%",()=>{document.body.style.position="",document.body.style.overflow="",document.body.style.width="",document.body.style.height=""}),[]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 overflow-hidden flex flex-col",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:"absolute top-10 cloud-drift",style:{animationDelay:"0s"},children:n.jsx("div",{className:"text-6xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-12 cloud-drift",style:{animationDelay:"7s",animationDuration:"25s"},children:n.jsx("div",{className:"text-5xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-10 right-12",children:n.jsx("div",{className:"text-6xl pulse-animation opacity-80",children:"☀️"})}),n.jsx("div",{className:"absolute top-16 left-20 float-animation opacity-60",children:n.jsx("div",{className:"text-2xl",children:"🦜"})})]}),n.jsxs("div",{className:"relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:s,className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅"})}),n.jsx("div",{className:"glass-card rounded-2xl px-3 py-2 shadow-lg",children:n.jsxs("div",{className:"text-white font-bold text-center",children:[n.jsx("div",{className:"text-[10px] opacity-90",children:"TREASURE HUNT"}),n.jsx("div",{className:"text-sm",children:"🏝️ Island Explorer 🏝️"})]})}),n.jsx("button",{onClick:()=>o(!a),className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:a?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 shadow-xl mt-2",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white font-bold text-sm",children:"Adventure Progress"}),n.jsxs("span",{className:"text-white font-bold text-sm",children:[p,"%"]})]}),n.jsx("div",{className:"w-full h-2.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000",style:{width:`${p}%`}})}),n.jsx("button",{onClick:()=>c(!0),className:"mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{children:"🏆"}),n.jsxs("span",{children:["Treasure Pieces: ",m,"/5"]}),n.jsx("span",{children:"🏆"})]})})]})]}),n.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-4",children:n.jsxs("div",{className:"w-full max-w-md",children:[n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.slice(0,4).map(f=>{const b=t[f.id],y=b==null?void 0:b.unlocked,j=b==null?void 0:b.treasurePiece,C=b==null?void 0:b.perfectScore;return n.jsxs("button",{onClick:()=>r(f.id),disabled:!y,className:`relative aspect-square rounded-2xl transition-all ${y?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${y?f.theme.background:"from-gray-400 to-gray-500"}`,children:y&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]})}),!y&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:f.id})}),C&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${y?"bounce-animation":""}`,children:y?f.emoji:"❓"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:f.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${y?"bg-white/30":"bg-black/30"} text-white`,children:f.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:f.rewards.treasurePiece}),(b==null?void 0:b.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[b.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},f.id)})}),n.jsx("div",{className:"flex justify-center mt-3",children:e.slice(4,5).map(f=>{const b=t[f.id],y=b==null?void 0:b.unlocked,j=b==null?void 0:b.treasurePiece,C=b==null?void 0:b.perfectScore;return n.jsxs("button",{onClick:()=>r(f.id),disabled:!y,className:`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${y?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsxs("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${y?f.theme.background:"from-gray-400 to-gray-500"}`,children:[y&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]}),!y&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse"})]}),!y&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:f.id})}),C&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${y?"bounce-animation":""}`,children:y?f.emoji:"👑"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:f.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${y?"bg-white/30":"bg-black/30"} text-white`,children:f.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:f.rewards.treasurePiece}),(b==null?void 0:b.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[b.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},f.id)})})]})}),n.jsx("div",{className:"relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+3rem)]",children:n.jsx("div",{className:"bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💰"}),n.jsx("div",{className:"text-yellow-300 font-black text-lg",children:i.totalCoinsEarned}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Total Coins"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💎"}),n.jsx("div",{className:"text-cyan-300 font-black text-lg",children:i.totalGemsFound}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Gems Found"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"📝"}),n.jsxs("div",{className:"text-green-300 font-black text-lg",children:[i.totalCorrectAnswers,"/",i.totalQuestionsAnswered]}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Correct"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl",children:[n.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-6",children:"🏆 Treasure Collection 🏆"}),n.jsx("div",{className:"flex justify-center gap-4 mb-6",children:u.map((f,b)=>n.jsx("div",{className:`text-5xl ${f.collected?"":"opacity-30 grayscale"}`,children:f.collected?f.piece:"❓"},f.id))}),n.jsx("div",{className:"text-center text-white mb-6",children:m===5?n.jsxs("div",{children:[n.jsx("p",{className:"text-lg font-bold mb-2",children:"🎉 COMPLETE! 🎉"}),n.jsx("p",{className:"text-sm opacity-90",children:"You're a true Treasure Master!"})]}):n.jsx("p",{className:"text-sm opacity-90",children:"Collect all 5 pieces to unlock the final treasure!"})}),n.jsx("button",{onClick:()=>c(!1),className:"w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors",children:"Close"})]})})]})}function Ag({island:e,progress:t,onStart:r,onClose:s,soundOn:a}){const[o,i]=d.useState(!1);d.useEffect(()=>{i(!0)},[]),d.useEffect(()=>{const f=b=>{s()};return window.history.pushState({islandDetail:!0},"",window.location.pathname),window.addEventListener("popstate",f),()=>window.removeEventListener("popstate",f)},[s]);const l=(t==null?void 0:t.attempts)>0,c=t==null?void 0:t.treasurePiece;t==null||t.perfectScore;const u=(t==null?void 0:t.bestScore)||0,m=()=>{if(a){const f=new Audio("/sounds/start.mp3");f.volume=.5,f.play().catch(()=>{})}r()},p=f=>{const b=Math.floor(f/60),y=f%60;return`${b}:${y.toString().padStart(2,"0")}`};return n.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:`relative w-full max-w-sm bg-gradient-to-br ${e.theme.background} rounded-2xl shadow-2xl ${o?"slide-up":""}`,children:[n.jsx("div",{className:"relative p-4 pb-2",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-2 pulse-animation",children:e.emoji}),n.jsx("h2",{className:"text-2xl font-black text-white",children:e.name}),n.jsx("div",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2",children:n.jsxs("span",{className:"text-white font-bold text-sm",children:["Level ",e.id," • ",e.difficulty]})})]})}),n.jsxs("div",{className:"px-4 py-3 space-y-2",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Time"}),n.jsx("div",{className:"text-white font-bold",children:p(e.timeLimit)})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Questions"}),n.jsx("div",{className:"text-white font-bold",children:Oe.QUESTIONS_PER_ISLAND})]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:e.rewards.treasurePiece}),n.jsx("span",{className:"text-white font-medium",children:"To Win"})]}),n.jsxs("span",{className:"text-white font-bold",children:[e.requiredCorrect,"/3 Correct"]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:[n.jsx("div",{className:"text-white font-bold text-sm mb-2",children:"Rewards"}),n.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💰"}),n.jsx("div",{className:"text-white/70 text-xs",children:e.rewards.perCorrectAnswer})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💎"}),n.jsxs("div",{className:"text-white/70 text-xs",children:[Math.round(e.rewards.gemChance*100),"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"⚡"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.speedBonus]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"🏆"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.perfectBonus]})]})]})]}),l&&n.jsx("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((f,b)=>n.jsx("span",{className:"text-lg",children:b<u?"⭐":"☆"},b))}),n.jsxs("div",{className:"text-white text-sm",children:[n.jsxs("span",{className:"font-bold",children:[u,"/3"]})," • ",t.attempts," tries"]}),c&&n.jsx("div",{className:"text-2xl",children:e.rewards.treasurePiece})]})})]}),n.jsxs("div",{className:"p-4 pt-2 space-y-2",children:[n.jsx("button",{onClick:m,className:"w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("span",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏴‍☠️"}),n.jsx("span",{children:l?"Play Again":"Start Adventure"}),n.jsx("span",{className:"text-xl",children:"🏴‍☠️"})]})}),n.jsx("button",{onClick:s,className:"w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors",children:"Back to Map"})]})]})]})}function zg({shovelsRemaining:e,showBreak:t=!1}){const[r,s]=d.useState(!1),[a,o]=d.useState(e),i=3;return d.useEffect(()=>{e<a&&(s(!0),setTimeout(()=>s(!1),1e3)),o(e)},[e,a]),n.jsxs("div",{className:"inline-block",children:[n.jsx("style",{jsx:!0,children:`
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
                  `,children:u||m?"⛏️":"🪦"}),m&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 40 40",children:[n.jsx("path",{d:"M20,10 L18,20 L22,30",stroke:"#ff4444",strokeWidth:"2",fill:"none",opacity:"0.8",className:"shovel-crack"}),n.jsx("path",{d:"M15,15 L20,20 L25,18",stroke:"#ff4444",strokeWidth:"1.5",fill:"none",opacity:"0.6",className:"shovel-crack",style:{animationDelay:"0.1s"}})]})}),n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[n.jsx("span",{className:"absolute top-0 left-1/2 text-xs shovel-fall",children:"💔"}),n.jsx("span",{className:"absolute top-1/2 left-0 text-xs shovel-fall",style:{animationDelay:"0.2s"},children:"✨"}),n.jsx("span",{className:"absolute top-1/2 right-0 text-xs shovel-fall",style:{animationDelay:"0.3s"},children:"💥"})]})]}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:`text-xs font-bold ${u?"text-blue-600":"text-white/30"}`,children:c+1})})]},c)})}),e===0&&n.jsx("span",{className:"text-red-400 text-sm font-bold animate-pulse ml-2",children:"No shovels left!"}),e===1&&n.jsx("span",{className:"text-red-500 text-sm font-bold ml-2",children:"Last chance!"})]})})]})}function Dg({island:e,foundGem:t,onComplete:r}){const[s,a]=d.useState("digging"),[o,i]=d.useState(!1),[l,c]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(m=>setTimeout(m,800)),a("revealing"),i(!0),t&&(await new Promise(m=>setTimeout(m,400)),c(!0)),await new Promise(m=>setTimeout(m,1e3)),a("complete"),await new Promise(m=>setTimeout(m,300)),r()})()},[t,r]),n.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),s==="digging"&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-8xl dig-animation",children:e.visualElements.diggingEmoji}),[...Array(8)].map((u,m)=>n.jsx("div",{className:"dirt-particle text-4xl",style:{"--fly-x":`${(Math.random()-.5)*200}px`,"--fly-y":`${-Math.random()*150-50}px`,left:"50%",top:"60%",animationDelay:`${m*.1}s`},children:"🟫"},m)),n.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2",children:n.jsx("div",{className:"text-6xl opacity-50",children:"💨"})})]}),s==="revealing"&&n.jsxs("div",{className:"relative",children:[o&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect"})}),n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"text-7xl treasure-reveal treasure-float",children:"💰"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{left:"-30px"},children:"🪙"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{right:"-30px",animationDelay:"0.5s"},children:"🪙"}),n.jsx("div",{className:"absolute text-4xl coin-spin",style:{top:"-30px",animationDelay:"1s"},children:"🪙"})]}),[...Array(6)].map((u,m)=>n.jsx("div",{className:"absolute text-3xl star-burst",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) rotate(${m*60}deg) translateY(-40px)`,animationDelay:`${m*.1}s`},children:"⭐"},m))]}),l&&n.jsxs("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-6xl gem-sparkle",children:"💎"}),n.jsx("div",{className:"absolute -top-2 -left-2 text-2xl animate-pulse",children:"✨"}),n.jsx("div",{className:"absolute -top-2 -right-2 text-2xl animate-pulse",style:{animationDelay:"0.3s"},children:"✨"}),n.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse",style:{animationDelay:"0.6s"},children:"✨"})]}),n.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("span",{className:"text-cyan-300 font-black text-lg drop-shadow-lg",children:"RARE GEM!"})})]}),n.jsx("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2 text-center",children:n.jsx("div",{className:"text-white font-black text-2xl drop-shadow-lg",children:t?"AMAZING FIND!":"TREASURE FOUND!"})})]}),s==="complete"&&n.jsx("div",{className:"relative opacity-0 transition-opacity duration-300",children:n.jsx("div",{className:"text-7xl",children:"✅"})})]})}function Mg({island:e,question:t,questionNumber:r,totalQuestions:s,shovelsRemaining:a,timeRemaining:o,coinsEarned:i,gemsFound:l,onAnswer:c,onQuit:u,soundOn:m,setSoundOn:p}){const[f,b]=d.useState(null),[y,j]=d.useState(!1),[C,v]=d.useState(!1),[h,g]=d.useState(!1),[E,N]=d.useState(!1),[T,S]=d.useState(!1),[x,w]=d.useState(!1),k=d.useRef(null);d.useEffect(()=>{b(null),j(!1),v(!1),g(!1),N(!1),w(!1)},[t]),d.useEffect(()=>{const q=Q=>{Q.stopImmediatePropagation(),T||(S(!0),window.history.pushState({questionScreen:!0},"",window.location.pathname))};return window.history.pushState({questionScreen:!0},"",window.location.pathname),window.addEventListener("popstate",q,!0),()=>window.removeEventListener("popstate",q,!0)},[T]);const P=q=>{const Q=Math.floor(q/60),U=q%60;return`${Q}:${U.toString().padStart(2,"0")}`},O=()=>o<=10?"critical":o<=30?"warning":"normal",B=q=>{if(x||y)return;b(q),w(!0);const Q=q===t.correctIndex;v(Q),setTimeout(()=>{if(j(!0),m)if(Q){const U=new Audio("/sounds/dig.mp3");U.volume=.5,U.play().catch(()=>{})}else{const U=new Audio("/sounds/wrong.mp3");U.volume=.5,U.play().catch(()=>{})}Q&&(g(!0),Math.random()<e.rewards.gemChance&&setTimeout(()=>{if(N(!0),m){const R=new Audio("/sounds/gem.mp3");R.volume=.6,R.play().catch(()=>{})}},800)),setTimeout(()=>{c(q)},Q?2e3:1500)},300)},H=O();return n.jsxs("div",{className:`min-h-screen bg-gradient-to-br ${e.theme.background} relative overflow-hidden`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.visualElements.bgEmojis.map((q,Q)=>n.jsx("div",{className:"absolute text-7xl opacity-10 float-animation",style:{top:`${20+Q*15}%`,left:`${10+Q*18}%`,animationDelay:`${Q*.5}s`,animationDuration:`${3+Q}s`},children:q},Q))}),n.jsxs("div",{className:"relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:()=>S(!0),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅️"})}),n.jsx("div",{className:"glass-card rounded-xl px-3 py-1.5 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xl",children:e.emoji}),n.jsx("span",{className:"text-gray-800 font-bold text-sm",children:e.name})]})}),n.jsx("button",{onClick:()=>p(!m),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:m?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 shadow-xl mb-3",children:[n.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-xl font-black ${H==="critical"?"text-red-600 time-pulse-critical":H==="warning"?"text-orange-600":"text-gray-800"}`,children:P(o)}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Time"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-xl font-black text-gray-800",children:[r,"/",s]}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Question"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-orange-600",children:i}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Coins"}),y&&C&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-orange-600 font-bold text-xs coin-float",children:["+",e.rewards.perCorrectAnswer]})})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-blue-600",children:l}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Gems"}),E&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:"text-blue-600 text-xl gem-sparkle",children:"💎"})})]})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar",style:{width:`${(r-1)/s*100}%`}})})})]}),n.jsx("div",{className:"flex justify-center mb-3 pt-2",children:n.jsx(zg,{shovelsRemaining:a,showBreak:y&&!C})})]}),n.jsxs("div",{className:"px-3 pt-8 slide-in",children:[n.jsxs("div",{ref:k,className:`glass-card rounded-2xl shadow-xl p-4 mb-4 ${y&&!C?"wrong-shake":""}`,children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wider",children:["Question ",r]})}),n.jsx("h2",{className:"text-lg font-bold text-center text-gray-800 leading-relaxed",children:t.prompt})]}),n.jsx("div",{className:"space-y-2.5",children:t.options.map((q,Q)=>{const U=["A","B","C","D"],R=f===Q,z=Q===t.correctIndex;let Y="glass-card option-card",D="border border-gray-800/20";return y&&(z?(Y+=" correct-pulse",D="border-2 border-green-500 bg-green-400/20"):R&&!C&&(Y+=" wrong-shake",D="border-2 border-red-500 bg-red-400/20"),Y+=" disabled"),n.jsx("button",{onClick:()=>B(Q),disabled:x,className:`w-full p-3 rounded-xl shadow-lg ${Y} ${D}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${Q===0?"from-blue-400 to-blue-500":Q===1?"from-green-400 to-green-500":Q===2?"from-yellow-400 to-yellow-500":"from-purple-400 to-purple-500"} text-white font-bold text-lg flex items-center justify-center shadow-md`,children:U[Q]}),n.jsx("span",{className:"flex-1 text-left font-medium text-gray-800 text-sm",children:q}),y&&z&&n.jsx("span",{className:"text-2xl",children:"✅"}),y&&R&&!C&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},Q)})}),y&&n.jsx("div",{className:"mt-3 text-center slide-in",children:n.jsx("p",{className:"text-base font-bold text-gray-800",children:C?`Great job! Let's dig for treasure! ${e.visualElements.diggingEmoji}`:"Oops! Your shovel broke! Try the next question! 💪"})})]}),h&&n.jsx(Dg,{island:e,foundGem:E,onComplete:()=>g(!1)}),T&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🗺️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the Island?"}),n.jsx("p",{className:"text-white/70",children:"Your progress won't be saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>S(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Leave Island"})]})]})})]})}function Og({island:e,session:t,earnedTreasure:r,onRetry:s,onContinue:a,soundOn:o}){const[i,l]=d.useState(0),[c,u]=d.useState(!1),[m,p]=d.useState(!1),f=t.correctAnswers===Oe.QUESTIONS_PER_ISLAND,b=_g(t.correctAnswers,e.id);return d.useEffect(()=>{const y=t.coinsEarned,j=2e3,C=30,v=y/C;let h=0;const g=setInterval(()=>{h+=v,h>=y?(l(y),clearInterval(g),r&&setTimeout(()=>u(!0),500),setTimeout(()=>p(!0),r?1500:500)):l(Math.floor(h))},j/C);return()=>clearInterval(g)},[t.coinsEarned,r]),n.jsxs("div",{className:`fixed inset-0 bg-gradient-to-br ${e.theme.background} overflow-hidden flex flex-col`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:f&&[...Array(10)].map((y,j)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,fontSize:`${20+Math.random()*20}px`},children:["🎉","⭐","🎊","✨"][Math.floor(Math.random()*4)]},j))}),n.jsxs("div",{className:"relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4",children:[n.jsxs("div",{className:"mb-3 text-center slide-up",children:[n.jsx("h1",{className:"text-2xl font-black text-white mb-2",children:r?"TREASURE FOUND!":"ISLAND COMPLETE!"}),n.jsx("div",{className:"text-5xl bounce-animation",children:r?e.rewards.treasurePiece:"🏝️"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up",style:{animationDelay:"0.2s",background:"rgba(46, 46, 32, 0.25)"},children:[n.jsxs("div",{className:"text-center mb-2",children:[n.jsxs("div",{className:"text-3xl font-black text-white mb-1",children:[t.correctAnswers,"/",Oe.QUESTIONS_PER_ISLAND]}),n.jsx("div",{className:"text-white/80 font-medium",children:"Questions Correct"})]}),m&&n.jsx("div",{className:"flex justify-center gap-2 mb-2",children:[...Array(3)].map((y,j)=>n.jsx("div",{className:`text-3xl ${j<t.correctAnswers?"star-pop":""}`,style:{animationDelay:`${j*.2}s`},children:j<t.correctAnswers?"⭐":"☆"},j))}),c&&r&&n.jsxs("div",{className:"text-center mb-2",children:[n.jsx("div",{className:"text-5xl treasure-shine mb-1",children:e.rewards.treasurePiece}),n.jsx("div",{className:"text-white font-bold text-lg",children:"Treasure Piece Earned!"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-3xl font-black text-yellow-300",children:i}),n.jsx("div",{className:"text-white/70 text-sm",children:"Coins Earned"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:"💎"}),n.jsx("div",{className:"text-3xl font-black text-cyan-300",children:t.gemsFound}),n.jsx("div",{className:"text-white/70 text-sm",children:"Gems Found"})]})]}),n.jsx("div",{className:"text-center p-4 bg-white/10 rounded-1xl",children:n.jsx("p",{className:"text-white font-medium text-lg",children:b})}),f&&n.jsx("div",{className:"mt-4 text-center",children:n.jsx("div",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",children:n.jsx("span",{className:"text-white font-black text-lg",children:"💯 PERFECT SCORE! 💯"})})})]}),n.jsxs("div",{className:"space-y-3 w-full max-w-md slide-up",style:{animationDelay:"0.4s"},children:[!r&&n.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🔄"}),n.jsx("span",{children:"Try Again"})]})}),n.jsx("button",{onClick:a,className:"w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🗺️"}),n.jsx("span",{children:"Back to Map"})]})})]})]})]})}function Fg({totalStats:e,onContinue:t,soundOn:r}){const[s,a]=d.useState(!1),[o,i]=d.useState(!1),[l,c]=d.useState(!1),[u,m]=d.useState(!1),[p,f]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(y=>setTimeout(y,500)),a(!0),await new Promise(y=>setTimeout(y,1e3)),i(!0),f(!0),await new Promise(y=>setTimeout(y,800)),c(!0),await new Promise(y=>setTimeout(y,1e3)),m(!0)})()},[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),p&&n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(15)].map((b,y)=>n.jsx("div",{className:"absolute firework",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animationDelay:`${Math.random()*2}s`,fontSize:`${40+Math.random()*40}px`},children:["✨","⭐","💫","🌟"][Math.floor(Math.random()*4)]},y))}),n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((b,y)=>n.jsx("div",{className:"absolute coin-rain",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`,fontSize:`${20+Math.random()*20}px`},children:["🪙","💰","💎"][Math.floor(Math.random()*3)]},y))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"LEGENDARY!"}),n.jsx("div",{className:"text-8xl bounce-animation",children:"👑"})]}),s&&n.jsxs("div",{className:`relative mb-8 ${s?"chest-appear":""}`,children:[n.jsx("div",{className:`text-[150px] ${o?"chest-open":""}`,children:"📦"}),o&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:sr.map((b,y)=>n.jsx("div",{className:"absolute text-6xl float-animation treasure-glow",style:{transform:`rotate(${y*72}deg) translateY(-100px)`,animationDelay:`${y*.2}s`},children:b.rewards.treasurePiece},b.id))})]}),l&&n.jsxs("div",{className:"glass-card rounded-3xl p-6 max-w-md w-full mb-6",children:[n.jsx("h2",{className:"text-2xl font-black text-white text-center mb-6",children:"🏆 FINAL TREASURE UNLOCKED! 🏆"}),n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-2",children:"💰"}),n.jsx("div",{className:"text-4xl font-black text-white",children:Oe.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/90 font-medium",children:"Bonus Coins!"})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🏝️"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Islands"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🧩"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Treasures"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💰"}),n.jsx("div",{className:"text-2xl font-black text-yellow-300",children:e.totalCoinsEarned+Oe.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Coins"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💎"}),n.jsx("div",{className:"text-2xl font-black text-cyan-300",children:e.totalGemsFound}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Gems"})]})]}),u&&n.jsxs("div",{className:"text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🏆"}),n.jsx("div",{className:"text-xl font-black text-white title-shine",children:Oe.FINAL_TREASURE_TITLE}),n.jsx("div",{className:"text-white/90 text-sm mt-1",children:"New Title Unlocked!"})]})]}),l&&n.jsx("button",{onClick:t,className:"w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎉"}),n.jsx("span",{children:"Complete Adventure"}),n.jsx("span",{className:"text-2xl",children:"🎉"})]})}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(10)].map((b,y)=>n.jsx("div",{className:"absolute text-2xl sparkle-animation",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`},children:"✨"},y))})]})]})}function $g({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,addCoins:o,addXp:i,setSoundOn:l}=uc(),[c,u]=d.useState(!1),[m,p]=d.useState("map"),[f,b]=d.useState(null),[y,j]=d.useState([]),[C,v]=d.useState(()=>{const I=localStorage.getItem(Oe.STORAGE_KEYS.PROGRESS);if(I)try{return JSON.parse(I)}catch(A){console.error("Failed to load progress:",A)}return sr.reduce((A,G)=>(A[G.id]={unlocked:G.id===1,completed:!1,treasurePiece:!1,perfectScore:!1,bestScore:0,attempts:0},A),{})}),[h,g]=d.useState({islandId:null,questions:[],currentQuestionIndex:0,shovelsRemaining:Oe.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:300,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:null}),[E,N]=d.useState(()=>{const I=localStorage.getItem(Oe.STORAGE_KEYS.STATS);if(I)try{return JSON.parse(I)}catch(A){console.error("Failed to load stats:",A)}return{totalCoinsEarned:0,totalGemsFound:0,totalTreasurePieces:0,totalQuestionsAnswered:0,totalCorrectAnswers:0,islandsCompleted:0,gameCompleted:!1}}),T=d.useRef(null),S=d.useRef(null);d.useEffect(()=>(x(),window.history.pushState({mode:"treasureHunt"},"",window.location.href),()=>{T.current&&clearInterval(T.current)}),[]),d.useEffect(()=>{localStorage.setItem(Oe.STORAGE_KEYS.PROGRESS,JSON.stringify(C))},[C]),d.useEffect(()=>{localStorage.setItem(Oe.STORAGE_KEYS.STATS,JSON.stringify(E))},[E]),d.useEffect(()=>(m==="playing"&&h.timeRemaining>0?T.current=setInterval(()=>{g(I=>{const A=I.timeRemaining-1;return A<=0?(B(),{...I,timeRemaining:0}):(A===30&&a&&z(Oe.SOUNDS.TICK,.6),{...I,timeRemaining:A})})},1e3):T.current&&clearInterval(T.current),()=>{T.current&&clearInterval(T.current)}),[m,h.timeRemaining,a]),d.useEffect(()=>{const I=A=>{A.preventDefault(),m==="map"&&!c?(u(!0),window.history.pushState({mode:"treasureHunt"},"",window.location.href)):m!=="map"&&(p("map"),b(null),window.history.pushState({mode:"treasureHunt"},"",window.location.href))};return window.addEventListener("popstate",I),()=>window.removeEventListener("popstate",I)},[m,c]);const x=async()=>{try{const A=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:G}=pr.parse(A,{header:!0,skipEmptyLines:!0,transformHeader:Z=>Z.trim().toLowerCase()}),re=G.map((Z,F)=>{var $;const L=[Z.option1,Z.option2,Z.option3,Z.option4].map(ee=>(ee||"").trim()).filter(Boolean);if(L.length<4)return null;let M={a:0,b:1,c:2,d:3}[($=Z.answer)==null?void 0:$.toLowerCase()];return M===void 0&&(M=L.findIndex(ee=>ee.toLowerCase()===(Z.answer||"").toLowerCase())),M===-1&&(M=0),{id:Z.id||`q_${F}`,prompt:(Z.question||"").trim(),options:L,correctIndex:M,category:(Z.category||Z.subject||"general").trim(),difficulty:(Z.difficulty||"medium").toLowerCase()}}).filter(Boolean);j(re)}catch(I){console.error("Failed to load questions:",I)}},w=I=>{const A=un(I);if(!A||y.length===0)return[];let G=y.filter(Z=>A.questionDifficulty.includes(Z.difficulty));return G.length<Oe.QUESTIONS_PER_ISLAND&&(G=y),[...G].sort(()=>Math.random()-.5).slice(0,Oe.QUESTIONS_PER_ISLAND)},k=I=>{if(!Rg(I,C)){a&&z("/sounds/locked.mp3",.5),Y([100]);return}b(I),p("island-detail"),a&&z("/sounds/select.mp3",.5)},P=I=>{const A=un(I),G=w(I);g({islandId:I,questions:G,currentQuestionIndex:0,shovelsRemaining:Oe.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:A.timeLimit,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:Date.now()}),S.current=Date.now(),p("playing"),a&&z("/sounds/start.mp3",.6)},O=I=>{const A=h.questions[h.currentQuestionIndex],G=I===A.correctIndex,re=(Date.now()-S.current)/1e3;g(Z=>{const F={...Z,questionTimes:[...Z.questionTimes,re]};if(G){const L=un(Z.islandId);let W=L.rewards.perCorrectAnswer;re<Oe.SPEED_BONUS_THRESHOLD&&(W+=L.rewards.speedBonus),Math.random()<L.rewards.gemChance&&(W+=L.rewards.gemBonus,F.gemsFound=Z.gemsFound+1),F.correctAnswers=Z.correctAnswers+1,F.coinsEarned=Z.coinsEarned+W}else F.wrongAnswers=Z.wrongAnswers+1,F.shovelsRemaining=Z.shovelsRemaining-1,Y([200]);return F}),setTimeout(()=>{const Z=h.currentQuestionIndex+1;h.shovelsRemaining===0&&!G||Z>=Oe.QUESTIONS_PER_ISLAND?H():(g(F=>({...F,currentQuestionIndex:Z})),S.current=Date.now())},G?2e3:1500)},B=()=>{H()},H=()=>{const I=un(h.islandId),A=h.correctAnswers>=I.requiredCorrect,G=h.correctAnswers===Oe.QUESTIONS_PER_ISLAND;let re=h.coinsEarned;G&&(re+=I.rewards.perfectBonus),A&&(re+=I.rewards.completionCoins),v(F=>{const L={...F},W=L[h.islandId];if(W.completed=!0,W.attempts+=1,A&&!W.treasurePiece){W.treasurePiece=!0;const M=sr.find($=>$.id===h.islandId+1);M&&L[M.id]&&(L[M.id].unlocked=!0,a&&setTimeout(()=>z(Oe.SOUNDS.ISLAND_UNLOCK,.7),2e3))}return G&&(W.perfectScore=!0),W.bestScore=Math.max(W.bestScore||0,h.correctAnswers),L}),N(F=>({...F,totalCoinsEarned:F.totalCoinsEarned+re,totalGemsFound:F.totalGemsFound+h.gemsFound,totalTreasurePieces:F.totalTreasurePieces+(A&&!C[h.islandId].treasurePiece?1:0),totalQuestionsAnswered:F.totalQuestionsAnswered+(h.correctAnswers+h.wrongAnswers),totalCorrectAnswers:F.totalCorrectAnswers+h.correctAnswers,islandsCompleted:F.islandsCompleted+(C[h.islandId].completed?0:1)})),o(re),i(h.correctAnswers),g(F=>({...F,coinsEarned:re})),a&&z(A?Oe.SOUNDS.TREASURE_FOUND:Oe.SOUNDS.ISLAND_COMPLETE,.7),sr.every(F=>{var L;return((L=C[F.id])==null?void 0:L.treasurePiece)===!0})&&!E.gameCompleted?(N(F=>({...F,gameCompleted:!0})),setTimeout(()=>{p("final-treasure"),a&&z(Oe.SOUNDS.FINAL_TREASURE,.8)},3e3)):p("reward")},q=()=>{P(h.islandId)},Q=()=>{p("map"),b(null)},U=()=>{o(Oe.FINAL_TREASURE_REWARD),i(10),N(I=>({...I,totalCoinsEarned:I.totalCoinsEarned+Oe.FINAL_TREASURE_REWARD})),p("map")},R=()=>{window.history.go(-1),e()},z=(I,A=.5)=>{try{const G=new Audio(I);G.volume=A,G.play()}catch(G){console.error("Failed to play sound:",G)}},Y=I=>{navigator.vibrate&&navigator.vibrate(I)};d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);let D=null;switch(m){case"map":D=n.jsx(Lg,{islands:sr,islandProgress:C,onSelectIsland:k,onBack:()=>u(!0),soundOn:a,setSoundOn:l,totalStats:E});break;case"island-detail":D=n.jsx(Ag,{island:un(f),progress:C[f],onStart:()=>P(f),onClose:()=>p("map"),soundOn:a});break;case"playing":D=n.jsx(Mg,{island:un(h.islandId),question:h.questions[h.currentQuestionIndex],questionNumber:h.currentQuestionIndex+1,totalQuestions:Oe.QUESTIONS_PER_ISLAND,shovelsRemaining:h.shovelsRemaining,timeRemaining:h.timeRemaining,coinsEarned:h.coinsEarned,gemsFound:h.gemsFound,onAnswer:O,onQuit:()=>p("map"),soundOn:a,setSoundOn:l});break;case"reward":D=n.jsx(Og,{island:un(h.islandId),session:h,earnedTreasure:h.correctAnswers>=un(h.islandId).requiredCorrect,onRetry:q,onContinue:Q,soundOn:a});break;case"final-treasure":D=n.jsx(Fg,{totalStats:E,onContinue:U,soundOn:a});break;default:D=null}return n.jsxs(n.Fragment,{children:[D,c&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🏝️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave Treasure Hunt?"}),n.jsx("p",{className:"text-white/70",children:"Your island progress is saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>u(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:R,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}const Bg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],zf=Bg.slice(0,6),oi=360/zf.length;function Ug({onModeSelect:e,onNavigateHome:t}){return n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("header",{className:"flex items-center mb-8",children:n.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),n.jsxs("div",{className:"space-y-8",children:[n.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[zf.map((r,s)=>{const a=s*oi,o=a+oi,i=oi>180?1:0,l=Math.PI*a/180,c=Math.PI*o/180,u=50+40*Math.cos(l),m=50-40*Math.sin(l),p=50+40*Math.cos(c),f=50-40*Math.sin(c);return n.jsx("path",{d:`M50,50 L${u},${m} A40,40 0 ${i} 0 ${p},${f} Z`,fill:r.color,stroke:"white",strokeWidth:"0.5"},s)}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),n.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),n.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),n.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),n.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),n.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),n.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsx("div",{className:"text-2xl mb-2",children:"💀"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),n.jsxs("button",{onClick:()=>e("treasureHunt"),className:"aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 opacity-20",children:[n.jsx("div",{className:"absolute top-2 right-2 text-4xl animate-pulse",children:"🏝️"}),n.jsx("div",{className:"absolute bottom-2 left-2 text-3xl animate-bounce",style:{animationDelay:"0.5s"},children:"⛏️"}),n.jsx("div",{className:"absolute top-1/2 right-4 text-2xl animate-pulse",style:{animationDelay:"1s"},children:"💎"})]}),n.jsx("div",{className:"text-2xl mb-2 relative z-10",children:"🏴‍☠️"}),n.jsx("h4",{className:"text-lg font-black text-white relative z-10",children:"TREASURE HUNT"}),n.jsx("div",{className:"absolute bottom-2 right-2",children:n.jsx("span",{className:"text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold",children:"NEW!"})})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📱"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function qg(){const[e,t]=d.useState(null),r=_e(),s=nt();d.useEffect(()=>{const l=new URLSearchParams(s.search);l.get("mode")==="survival"&&l.get("from")==="quest"&&t("survival")},[s]);const a=l=>{l==="classic"?t("classic"):l==="survival"?t("survival"):l==="treasureHunt"&&t("treasureHunt")},o=()=>{r("/")},i=()=>{t(null)};if(e==="classic")return n.jsx(Sg,{onBack:i});if(e==="survival"){const c=new URLSearchParams(s.search).get("from")==="quest";return n.jsx(Tg,{onBack:i,isFromQuest:c})}return e==="treasureHunt"?n.jsx($g,{onBack:i}):n.jsx(Ug,{onModeSelect:a,onNavigateHome:o})}const Qg=({session:e,mode:t,category:r,difficulty:s,timerConfig:a,onComplete:o,onQuit:i})=>{const l=_e(),[c,u]=d.useState(0),[m,p]=d.useState([]),[f,b]=d.useState([]),[y,j]=d.useState([]),[C,v]=d.useState(!1),[h,g]=d.useState(null),[E,N]=d.useState(Date.now()),[T,S]=d.useState(0),[x,w]=d.useState([]),[k,P]=d.useState(!1),[O,B]=d.useState(!1),[H,q]=d.useState({}),[Q,U]=d.useState({}),[R,z]=d.useState([]);d.useState(!0);const[Y,D]=d.useState([]),[I,A]=d.useState(0),[G,re]=d.useState(0),[Z,F]=d.useState(!1),[L,W]=d.useState(!1),[M,$]=d.useState(""),[ee,oe]=d.useState(!1),[de,te]=d.useState(!1),[ne,J]=d.useState(!0),[_,V]=d.useState(!1),[ce,pe]=d.useState(0),[he,$e]=d.useState(0),[ue,Ne]=d.useState(0),[ge,xe]=d.useState(null),[ye,ht]=d.useState(0),Qt=d.useRef(null),at=d.useRef(null),ke=t==="practice",De=m[c],At=fe=>{try{const me=new Audio(fe);me.volume=.6,me.play()}catch{console.log("Sound not available:",fe)}},xr=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],We=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:xr,K=We[c]||We[0]||xr[0],ie=We.length;d.useEffect(()=>{We.length>0&&(p(new Array(We.length).fill(null)),b(new Array(We.length).fill(!1)),z(new Array(We.length).fill(!1)),j(new Array(We.length).fill((a==null?void 0:a.seconds)||45)))},[We.length,a==null?void 0:a.seconds]);const Ie=()=>{if(k){$("Once per quiz"),setTimeout(()=>$(""),1e3);return}if(De!==null){$("Already answered"),setTimeout(()=>$(""),1e3);return}if(!K)return;const me=[0,1,2,3].filter(be=>be!==K.answerIndex).sort(()=>Math.random()-.5).slice(0,2);q({...H,[c]:me}),P(!0)},Ce=()=>{if(O){$("Once per quiz"),setTimeout(()=>$(""),1e3);return}if(De!==null){$("Already answered"),setTimeout(()=>$(""),1e3);return}if(!K)return;const fe=K.answerIndex,me=[0,0,0,0],be=40+Math.floor(Math.random()*31);me[fe]=be;let Ze=100-be;const Te=[0,1,2,3].filter(Ee=>Ee!==fe);for(let Ee=0;Ee<Te.length-1;Ee++){const Ke=Math.min(Ze-(Te.length-1-Ee),Ze/2),dn=Math.floor(Math.random()*(Ke+1));me[Te[Ee]]=dn,Ze-=dn}me[Te[Te.length-1]]=Ze,U({...Q,[c]:me}),B(!0)},Ge=()=>{const fe=new Date;return`${fe.getFullYear()}-${fe.getMonth()+1}-${fe.getDate()}`},we=()=>{ke&&window.location.search.includes("from=quest")?l("/profile/quests",{state:{questCompleted:!0,questType:"practiceQuestions"}}):i()},pt=d.useCallback((fe,me)=>{if(!K||ke&&R[c]||H[c]&&H[c].includes(fe))return;const be=[...m];if(be[c]=m[c]===fe?null:fe,p(be),N(Date.now()),ke&&!x.includes(c)&&be[c]!==null){const Te=x.length+1;if(S(Te),w(Ee=>[...Ee,c]),window.location.search.includes("from=quest")){let Ee={};try{const dn=localStorage.getItem("questProgress");dn&&(Ee=JSON.parse(dn))}catch(dn){console.error("Error reading progress:",dn)}const Ke=Ee.practiceQuestions||0;Ee.practiceQuestions=Math.max(Ke,Te),Ee.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(Ee)),console.log("Saved practice progress:",Ee.practiceQuestions),window.dispatchEvent(new CustomEvent("questProgressUpdate",{detail:{practiceQuestions:Ee.practiceQuestions}}))}}be[c]!==null&&(J(!1),clearInterval(at.current));const Ze=be[c]===K.answerIndex;if(Ze){const Te=ue+1;if(Ne(Te),A(Ee=>Ee+1),re(0),ke){pe(Ke=>Ke+1);const Ee=10;$e(Ke=>Ke+Ee),At("/sounds/correct.mp3"),setTimeout(()=>At("/sounds/coin.mp3"),500),te(!0),setTimeout(()=>te(!1),2e3),xe({type:"correct",stars:1,coins:10}),setTimeout(()=>xe(null),2e3)}}else be[c]!==null&&(Ne(0),A(0),re(Te=>Te+1),ke&&(c===0&&Y.length,At("/sounds/wrong.mp3")));if(D(Te=>[...Te.slice(-2),Ze]),be[c]!==null&&f[c]){const Te=[...f];Te[c]=!1,b(Te)}ke&&be[c]!==null&&(oe(!0),z(Te=>{const Ee=[...Te];return Ee[c]=!0,Ee}),setTimeout(()=>{const Te=document.querySelector(".main-scrollable-container");if(Te){const Ee=Te.scrollHeight,Ke=Te.clientHeight;Ee>Ke&&Te.scrollTo({top:Ee-Ke,behavior:"smooth"})}},300)),!ke&&be[c]!==null&&(clearTimeout(Qt.current),Qt.current=setTimeout(()=>{c<ie-1?le():(F(!0),v(!0))},5e3))},[K,ke,R,c,m,f,ie,ue,H,Y,I,T,x]),se=()=>{N(Date.now()),c>0&&(clearInterval(at.current),J(!1),u(fe=>fe-1),oe(!1),ke&&m[c-1]!==null&&setTimeout(()=>oe(!0),100))},le=()=>{if(N(Date.now()),clearInterval(at.current),De===null){const fe=[...f];fe[c]=!0,b(fe),Ne(0)}J(!1),oe(!1),c<ie-1?(u(fe=>fe+1),ke&&m[c+1]!==null?setTimeout(()=>oe(!0),100):setTimeout(()=>J(!0),100)):F(!0)},Ae=()=>{N(Date.now());const fe=[...f];fe[c]=!0,b(fe),Ne(0),le()},Pe=()=>{const fe=We.reduce((me,be,Ze)=>me+(m[Ze]===be.answerIndex?1:0),0);if(ke&&window.location.search.includes("from=quest")){const me=m.filter(Ze=>Ze!==null).length,be=JSON.parse(localStorage.getItem("questProgress")||"{}");be.practiceQuestions=Math.min(me,15),be.date=Ge(),localStorage.setItem("questProgress",JSON.stringify(be)),console.log("Final practice progress saved:",be.practiceQuestions)}if(ke)o&&o({questions:We,answers:m,skipped:f,correct:fe,total:ie,mode:t,category:r,difficulty:s,earnedStars:ce,earnedCoins:he,finalStreak:ue});else{const me=fe*10;ht(me),V(!0),setTimeout(()=>{At("/sounds/coin.mp3"),te(!0),setTimeout(()=>te(!1),3e3)},1e3)}},ve=()=>{o&&o({questions:We,answers:m,skipped:f,correct:We.reduce((fe,me,be)=>fe+(m[be]===me.answerIndex?1:0),0),total:ie,mode:t,category:r,difficulty:s,earnedStars:0,earnedCoins:ye,finalStreak:ue})};d.useEffect(()=>{if(!(C||h!==null||Z||!ne||m[c]!==null))return at.current=setInterval(()=>{j(fe=>{const me=[...fe],be=me[c];return be<=1?(clearInterval(at.current),c===ie-1?(Date.now()-E>=5e3&&F(!0),me):(g(c),me)):(me[c]=be-1,me)})},1e3),()=>clearInterval(at.current)},[C,h,c,Z,ie,ne,m,E]),d.useEffect(()=>{m[c]===null&&!Z&&!h?J(!0):J(!1)},[c,m,Z,h]);const Xe=fe=>{const me=Math.floor(fe/60),be=fe%60;return`${me}:${be.toString().padStart(2,"0")}`},xt=(c+1)/We.length*100,Zt=m.filter(fe=>fe!==null).length,cn=f.filter(Boolean).length,Sn=y[c]||0,gr=We.reduce((fe,me,be)=>fe+(m[be]===me.answerIndex?1:0),0);return n.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[ge&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",ge.coins," Coins!"]})}),de&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((fe,me)=>n.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${me*150}ms`,animationDuration:"2s"},children:"🪙"},me))}),n.jsxs("div",{className:`main-scrollable-container flex-1 flex flex-col ${ke&&De!==null?"overflow-y-auto":"overflow-hidden"}`,children:[n.jsxs("div",{className:"bg-gray-900 flex-shrink-0",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-800 shadow-lg",children:[n.jsxs("button",{onClick:()=>W(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"font-medium",children:"Back"})]}),n.jsx("div",{className:"flex-1"}),n.jsxs("div",{className:"flex items-center gap-2",children:[ke&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),n.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:he})]}),n.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),n.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:ue})]})]}),n.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${Sn<=10?"bg-red-600/20 text-red-400 animate-pulse":Sn<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:Xe(Sn)})]})]}),n.jsxs("div",{className:"px-4 pb-1 bg-gray-900",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",c+1," of ",ie]}),n.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(xt),"% Complete"]})]}),n.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${xt}%`}})}),n.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:ie}).map((fe,me)=>n.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${me===c?"bg-white scale-125":m[me]!==null?"bg-green-500":f[me]?"bg-yellow-500":"bg-gray-600"}`},me))}),n.jsx("div",{className:"text-center mt-4",children:n.jsx("span",{className:"text-xs text-gray-500",children:K.category})})]})]}),n.jsx("div",{className:`px-4 flex flex-col ${ke&&De!==null?"pb-36":"flex-1 justify-between pb-[180px]"}`,children:n.jsxs("div",{className:"flex-1 flex flex-col justify-center max-h-full",children:[n.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-6 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[n.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),n.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",c+1]}),n.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:K.prompt}),K.difficulty&&n.jsx("div",{className:"mt-3 inline-block",children:n.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${K.difficulty==="easy"?"bg-green-500/20 text-green-300":K.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:K.difficulty.toUpperCase()})})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:K.options.map((fe,me)=>{const be=De===me,Ze=me===K.answerIndex,Te=ke&&De!==null&&ee,Ee=H[c]&&H[c].includes(me);let Ke="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";Ee?Ke+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(Ke+="cursor-pointer ",Te?be&&Ze?Ke+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":be&&!Ze?Ke+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!be&&Ze?Ke+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":Ke+="bg-gray-700 border-gray-600 text-gray-400":be?Ke+="bg-gray-600 border-gray-500 text-white":Ke+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const dn=["🅰️","🅱️","🅲️","🅳️"];return n.jsx("button",{onClick:Bf=>pt(me,Bf),disabled:ke&&R[c],className:Ke,children:n.jsxs("div",{className:"flex items-center gap-2 w-full",children:[n.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:dn[me]}),n.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:fe}),Q[c]&&Q[c][me]>0&&!Ee&&n.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[Q[c][me],"%"]}),Te&&be&&Ze&&!Ee&&n.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),Te&&be&&!Ze&&!Ee&&n.jsx("div",{className:"text-lg",children:"😔"}),Te&&!be&&Ze&&!Ee&&n.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},me)})}),ke&&ee&&De!==null&&n.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:n.jsxs("div",{className:"flex gap-3",children:[n.jsx("div",{className:"text-lg flex-shrink-0",children:De===K.answerIndex?"🎊":"💡"}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h4",{className:`font-semibold mb-3 text-sm ${De===K.answerIndex?"text-green-400":"text-blue-400"}`,children:De===K.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),K.explanation&&n.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:K.explanation})]})]})})]})})]}),n.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-50",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 backdrop-blur-xl"}),n.jsxs("div",{className:"relative p-4 pb-8",children:[!ke&&n.jsxs("div",{className:"flex justify-center gap-3 mb-4",children:[n.jsxs("button",{onClick:Ie,disabled:De!==null,className:`${k?"bg-white/5 text-gray-500":"bg-gradient-to-r from-orange-500 to-orange-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"⚡"}),"50:50"]}),n.jsxs("button",{onClick:Ce,disabled:De!==null,className:`${O?"bg-white/5 text-gray-500":"bg-gradient-to-r from-purple-500 to-purple-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"👥"}),"Ask Friends"]})]}),n.jsxs("div",{className:"flex gap-2 mb-3",children:[n.jsx("button",{onClick:se,disabled:c===0,className:`flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                disabled:opacity-30 disabled:cursor-not-allowed
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                hover:bg-white/15 text-white shadow-xl`,children:"Previous"}),n.jsx("button",{onClick:Ae,disabled:De!==null,className:`flex-1 py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95 shadow-xl ${De!==null?"bg-white/5 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600"}`,children:"Skip"}),n.jsx("button",{onClick:le,className:`flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:from-blue-600 hover:to-indigo-600
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                text-white shadow-xl`,children:c===ie-1?"Finish":"Next"})]}),n.jsxs("button",{onClick:()=>F(!0),className:`w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-600
              py-4 rounded-2xl font-bold text-white transition-all transform active:scale-[0.98]
              shadow-2xl shadow-green-500/25 relative overflow-hidden group`,children:[n.jsx("div",{className:"absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"}),n.jsx("span",{className:"relative",children:"Submit Quiz"})]})]})]}),_&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quiz Complete!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Here's how you performed"}),n.jsxs("div",{className:"bg-gray-700/50 rounded-2xl p-4 mb-6 space-y-3",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Questions Attempted:"}),n.jsxs("span",{className:"text-white font-semibold",children:[Zt," / ",ie]})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Correct Answers:"}),n.jsx("span",{className:"text-green-400 font-semibold",children:gr})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Accuracy:"}),n.jsxs("span",{className:"text-blue-400 font-semibold",children:[Zt>0?Math.round(gr/Zt*100):0,"%"]})]}),n.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-yellow-300 flex items-center gap-1",children:"🪙 Coins Earned:"}),n.jsx("span",{className:"text-yellow-400 font-bold text-lg",children:ye})]})})]}),n.jsx("button",{onClick:ve,className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors",children:"Continue"})]})}),L&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>W(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),n.jsx("button",{onClick:we,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),Z&&!_&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),n.jsxs("p",{className:"text-gray-400 mb-4",children:[Zt," of ",ie," answered • ",cn," skipped"]}),ke&&n.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:n.jsxs("div",{className:"flex justify-center gap-6",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:ce}),n.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:he}),n.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{F(!1),g(null),N(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),n.jsx("button",{onClick:fe=>{fe.preventDefault(),fe.stopPropagation(),console.log("Submit button clicked"),Pe()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),h===c&&!Z&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),n.jsx("button",{onClick:()=>{g(null),N(Date.now()),c<We.length-1?le():F(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:c<We.length-1?"Continue":"See Results"})]})}),M&&n.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:M}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},cs=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Yg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),Wg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Hg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Gg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Vg=()=>n.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Xg=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[],returnPath:null,fromQuest:!1},onRetake:t=()=>{},onReview:r=()=>{},onNavigate:s=(u,m)=>{},isRetake:a=!1,isPractice:o=!1,player:i={level:1,coins:0,combo:0,energy:5},categories:l=[],addCoins:c=()=>{}})=>{const[u,m]=d.useState(i.coins),p=d.useRef(null),[f,b]=d.useState(null),[y]=Ot("/sounds/coin.mp3",{volume:.75}),[j,C]=d.useState(!1),[v,h]=d.useState(!1),[g,E]=d.useState(0),[N,T]=d.useState(!1),[S,x]=d.useState(!1),w=()=>{if(console.log("QuizResults handleBack:",{fromQuest:e.fromQuest,returnPath:e.returnPath,isPractice:e.isPractice||o}),e.fromQuest){const M=e.isPractice||o?"practiceQuestions":"dailyQuizzes";e.isPractice||o?s("/profile/quests"):s("/profile/quests",{state:{questCompleted:!0,questType:M,increment:1}})}else{const M=e.returnPath||"/";s(M)}},{correct:k,total:P,category:O,categorySlug:B,difficulty:H,mode:q,elapsedMs:Q}=e,U=P?Math.round(k/P*100):0,R=U===100,z=U>=80,Y=Math.floor(Q/1e3),D=P>0?Math.floor(Y/P):0,I=o?e.earnedCoins||0:Math.round(k*5*(R?1.5:z?1.2:1)),A=cs.find(M=>M.slug===O)||cs[0],re=(()=>R?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:U>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:U>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:U>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:U>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{!f&&!j&&m(i.coins)},[i.coins,f,j]),d.useEffect(()=>{e.coinsProcessed||I>0&&p.current&&setTimeout(()=>{if(p.current.getBoundingClientRect(),y)try{y()}catch(M){console.error("Error playing coin sound:",M)}else console.warn("Coin sound not loaded");b({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(I,10),amount:I}),C(!0),e.coinsProcessed=!0},500)},[]),d.useEffect(()=>{document.documentElement.scrollIntoView({behavior:"smooth",block:"start"}),(R||z)&&(h(!0),setTimeout(()=>h(!1),3e3));let M=0;const $=k/20,ee=setInterval(()=>{M+=$,M>=k?(E(k),clearInterval(ee)):E(Math.floor(M))},50);return()=>clearInterval(ee)},[k,R,z]);const Z=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:k,total:P}],F=()=>{try{const M=localStorage.getItem("qp_recent");if(M)return JSON.parse(M).slice(0,10).map(ee=>ee.slug||ee.cat).filter(ee=>ee&&ee!==e.categorySlug)}catch(M){console.error("Error reading recent categories:",M)}return[]},L=()=>{const M=B||O,$=H||"medium",ee=F(),oe=(l||cs||[]).filter(ne=>ne.slug!==M&&!ee.slice(0,3).includes(ne.slug)),te=(()=>{if(oe.length===0){const ne=(l||cs||[]).filter(J=>J.slug!==M);return ne[Math.floor(Math.random()*ne.length)]||(l||cs)[0]}return oe[Math.floor(Math.random()*oe.length)]})();if(U<60)return o?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${M}`,{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}})},{icon:te.icon,title:te.name,desc:"Fresh start with new topic",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>r()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${M}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:$!=="easy"?"🎯":"🔄",title:$!=="easy"?"Easy Mode":"Try Again",desc:$!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>$!=="easy"?s(`/quiz/${M}`,{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}):t()},{icon:te.icon,title:te.name,desc:"Try something different",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{mode:"quiz",difficulty:"easy",count:10,timer:{type:"per_q",seconds:45}})}];if(U>=80)return $==="hard"&&U>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${M}`,{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}})},{icon:te.icon,title:`${te.name} Challenge`,desc:"Hard mode, new topic",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}})}]:[{icon:$==="hard"?"🔥":"🎯",title:$==="hard"?"Perfect Score Challenge":"Hard Mode",desc:$==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${M}`,{mode:"quiz",difficulty:"hard",count:$==="hard"?10:20,timer:{type:"per_q",seconds:30}})},{icon:te.icon,title:te.name,desc:"Master new topics",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{mode:"quiz",difficulty:$,count:10,timer:{type:"per_q",seconds:45}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${M}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}})}];{const ne=U<70;return[{icon:ne?"📚":"🎯",title:ne?"Practice More":"Try Again",desc:ne?"Improve accuracy":"Beat your score",color:ne?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:ne?()=>s(`/quiz/${M}`,{mode:"practice",difficulty:$,count:10,timer:{type:"off",seconds:0}}):()=>t()},{icon:te.icon,title:te.name,desc:"Explore new topics",color:te.gradient,action:()=>s(`/quiz/${te.slug}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:45}})},{icon:$==="easy"?"⬆️":"💪",title:$==="easy"?"Medium Difficulty":"More Questions",desc:$==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${M}`,{mode:"quiz",difficulty:$==="easy"?"medium":$,count:$==="easy"?10:20,timer:{type:"per_q",seconds:45}})}]}},W=gt.useMemo(()=>L(),[U,o,e.categorySlug,e.difficulty]);return n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4",children:[f&&n.jsx(Ro,{startRect:f.startRect,targetRef:p,count:f.count,onDone:()=>{f.amount>0&&!S&&(console.log("[QuizResults] Adding coins once:",f.amount),c(f.amount),x(!0),m(i.coins+f.amount)),b(null)}}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),v&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:n.jsx("div",{className:"text-8xl animate-bounce",children:R?"🎉":"⭐"})}),n.jsxs("div",{className:"flex justify-between items-center mb-6",children:[n.jsxs("button",{onClick:w,className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center gap-2",children:[n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"text-sm font-medium",children:"Back"})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",i.level]}),n.jsxs("button",{ref:p,onClick:()=>T(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[u," 🪙"]})]})]}),n.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${re.color}`,children:[n.jsx("span",{className:"text-2xl",children:re.emoji}),n.jsx("span",{className:"font-semibold",children:re.text})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[g,"/",P]}),n.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[n.jsx("span",{className:"text-xl",children:A.icon}),n.jsx("span",{children:A.name})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[U,"%"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[D,"s"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:I>0?`+${I}`:"0"}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),n.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Gg,{}),n.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),i.combo>0&&n.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[n.jsx(Vg,{}),i.combo," streak"]})]}),n.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:Z.map((M,$)=>n.jsx("div",{className:`flex-1 rounded-t transition-all ${$===Z.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${M.score/M.total*100}%`,minHeight:"4px"}},$))}),n.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("button",{onClick:r,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[n.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Review"}),n.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),n.jsx(Hg,{})]})]}),n.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Try Again"}),n.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),n.jsx(Wg,{})]})})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),W.map((M,$)=>n.jsx("button",{onClick:M.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${M.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:n.jsx("span",{className:"text-xl",children:M.icon})}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium text-sm",children:M.title}),n.jsx("div",{className:"text-xs text-white/40",children:M.desc})]})]}),n.jsx(Yg,{})]})},$))]}),n.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:n.jsx("button",{onClick:()=>s("/profile/history",{replace:!0}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),N&&n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:M=>{M.target===M.currentTarget&&T(!1)},children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:M=>M.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[i.coins," Coins"]})]})]}),n.jsx("button",{onClick:()=>T(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-i.coins%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${i.coins%100}%`}})})]}),n.jsx("button",{onClick:()=>{T(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})},Kg=({questions:e,answers:t,skipped:r,onBack:s,onRetake:a,fromHistory:o=!1})=>{const i=_e(),l=()=>{o?i("/profile/history",{replace:!0}):s?s():i(-1)},c=e.reduce((p,f,b)=>p+(t[b]===f.answerIndex?1:0),0),u=(r==null?void 0:r.filter(Boolean).length)||0,m=e.length-c-u;return n.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),n.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),n.jsx("div",{className:"w-16"})," "]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[n.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),n.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),n.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),n.jsx("div",{className:"text-lg font-bold text-red-400",children:m})]}),n.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),n.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),n.jsx("ol",{className:"space-y-4",children:e.map((p,f)=>{const b=t[f],y=!b&&b!==0,j=b===p.answerIndex;return n.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",f+1,". ",p.prompt]}),p.category&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",p.category," • Difficulty: ",p.difficulty||"Medium"]})]}),n.jsx("div",{className:"ml-2",children:y?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:p.options.map((C,v)=>{const h=b===v,g=v===p.answerIndex;let E="w-full text-left px-3 py-2 rounded-xl border transition-all ";return g?E+="bg-green-600/20 border-green-500/50 text-green-300":h&&!g?E+="bg-red-600/20 border-red-500/50 text-red-300":E+="bg-base-bg/40 border-base-border text-base-muted",n.jsxs("div",{className:E,children:[n.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][v],"."]}),C,g&&n.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),h&&!g&&n.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},v)})}),p.explanation&&n.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[n.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),n.jsx("div",{className:"text-sm text-base-muted",children:p.explanation})]})]},p.id||f)})}),n.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[n.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),a&&n.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:a,children:"Retake Quiz"})]})]})},Jg="qp_resume",$d="qp_mistakes",Bd="qp_stats",Ud="qp_lastset",qd="qp_recent",Qd="qp_review_snapshot",Zg=50,ds=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Oa=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),ev=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),Df=e=>{const t=e.slice();for(let r=t.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[t[r],t[s]]=[t[s],t[r]]}return t},tv=(e,t,r)=>Math.max(t,Math.min(r,e)),us=(e,t)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}};async function nv(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const r=await t.text(),{data:s}=pr.parse(r,{header:!0,skipEmptyLines:!0,transformHeader:o=>String(o).trim().toLowerCase()}),a={a:0,b:1,c:2,d:3};return s.map((o,i)=>{var f;const l=[o.option1,o.option2,o.option3,o.option4].map(b=>(b??"").trim());if(l.some(b=>!b))return null;let c=-1;const u=String(o.answer??"").trim();if(a[u.toLowerCase()]!==void 0)c=a[u.toLowerCase()];else{const b=l.findIndex(y=>y.toLowerCase()===u.toLowerCase());c=b>=0?b:0}const m=String(o.category??o.subject??"General Knowledge").trim(),p=String(o.difficulty??"medium").toLowerCase().trim();return{id:((f=o.id)==null?void 0:f.trim())||`q_${i}`,category:m,difficulty:p,prompt:String(o.question??"").trim(),options:l,answerIndex:c,explanation:String(o.explanation??"").trim()}}).filter(Boolean)}function rv(e,{categorySlug:t,difficulty:r,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",r),console.log("count:",s),console.log("Total questions available:",e.length);const o=t==="mixed"?()=>!0:m=>Oa(m.category)===t,i=r?m=>(m.difficulty||"medium")===r:()=>!0,l=e.filter(m=>o(m)&&i(m));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(m=>`"${m.category}" -> "${Oa(m.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(m=>Oa(m.category)))]),{questions:[],poolSize:0};const u=ev(l,Math.min(s,l.length)).map(m=>{const p=Df([0,1,2,3]),f=p.map(y=>m.options[y]),b=p.indexOf(m.answerIndex);return{...m,options:f,answerIndex:b}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function sv(){const e=_e(),{category:t}=Gp(),r=nt(),{energy:s,useEnergy:a,player:o,addCoins:i,addXP:l,updateDailyStreak:c}=kn(),u=new URLSearchParams(r.search),m=u.get("review")==="1",p=u.get("retake")==="1",f=r.state||{},b=f.mode||"quiz",y=String(f.difficulty||"medium").toLowerCase(),j=f.returnPath||null,C=f.fromQuest||!1,v=tv(Number(f.count||10),1,50),h=f.timer||{type:"per_q",seconds:45};f.resume,f.daily,f.source;const g=p||!!f.retake,E=!!f.fromHistory,N=b==="practice";console.log("Quiz Component - Mode Detection:",{routerState:f,mode:b,isPractice:N,location:r.pathname,state:r.state});const[T,S]=d.useState([]),[x,w]=d.useState(!0),[k,P]=d.useState(""),[O,B]=d.useState({questions:[]}),[H,q]=d.useState("quiz"),[Q,U]=d.useState(null),[R,z]=d.useState(null),[Y,D]=d.useState(0);d.useEffect(()=>{let F=!0;return(async()=>{try{const L=await nv();if(!F)return;S(L)}catch(L){console.error(L),P("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{w(!1)}})(),()=>{F=!1}},[]),d.useEffect(()=>{if(x||k||m||T.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",b),console.log("Difficulty:",y),console.log("Count:",v);const F=rv(T,{categorySlug:t,difficulty:y,count:v});if(F.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(T.map(L=>Oa(L.category)))].slice(0,10)),P(`No questions found for "${ds(t)}" with difficulty "${y}"`);return}console.log("Session built with",F.questions.length,"questions"),B(F),z(Date.now()),D(0),q("quiz")},[T,t,b,y,v,r.state,r.search]),d.useEffect(()=>{if(H!=="quiz"||!R)return;const F=setInterval(()=>{D(Date.now()-R)},1e3);return()=>clearInterval(F)},[H,R]);const I=d.useCallback(F=>{if(console.log("Quiz completed - Mode:",b,"isPractice:",N,"Results:",F),!F||!F.questions){console.error("Invalid results object:",F);return}const L=F.questions.filter((M,$)=>F.answers[$]!==null&&F.answers[$]!==M.answerIndex).map(M=>M.id);try{const M=us($d,[]),$=Array.from(new Set([...L,...M]));localStorage.setItem($d,JSON.stringify($))}catch(M){console.error("Error saving mistakes:",M)}try{const M=us(Bd,{sessions:[]});M.sessions.push({cat:ds(t),mode:N?"practice":"quiz",total:F.total,correct:F.correct,skipped:F.skipped.filter(Boolean).length,ms:Y,timestamp:Date.now(),earnedXP:N?0:F.correct*10,earnedCoins:N?0:F.correct*5}),localStorage.setItem(Bd,JSON.stringify(M))}catch(M){console.error("Error saving stats:",M)}const W={ts:Date.now(),slug:t,categoryLabel:ds(t),mode:N?"practice":"quiz",difficulty:y,total:F.total,timer:N?null:h,ms:Y,attempted:F.answers.filter(M=>M!==null).length,correct:F.correct,questions:F.questions,answers:F.answers,skipped:F.skipped,isPractice:N};try{localStorage.setItem(Ud,JSON.stringify(W)),localStorage.setItem(Qd,JSON.stringify({questions:F.questions,answers:F.answers,skipped:F.skipped}));const M=us(qd,[]),ee=[{id:W.ts,ts:W.ts,cat:W.categoryLabel,slug:t,mode:N?"Practice":"Quiz",total:F.total,correct:F.correct,ms:Y,snapshot:W},...M].slice(0,Zg);localStorage.setItem(qd,JSON.stringify(ee))}catch(M){console.error("Error saving snapshot:",M)}if(localStorage.removeItem(Jg),N&&F.earnedCoins?F.earnedCoins:!N&&F.correct>0&&F.correct*5,!N&&F.correct>0){const M=F.correct*10;l(M)}c(),console.log("Setting review snapshot with:",{returnPath:j||"/",fromQuest:C||!1}),U({...F,category:ds(t),categorySlug:t,difficulty:y,mode:N?"practice":"quiz",elapsedMs:Y,isPractice:N,hasTimer:!N,earnedXP:N?0:F.correct*10,earnedCoins:N?F.earnedCoins||0:F.correct*5,returnPath:j||"/",fromQuest:C||!1}),q("results")},[t,b,h,Y,N,j,C]),A=d.useCallback(()=>{j?e(j,{replace:!0}):E?e("/profile/history",{replace:!0,state:null}):e("/")},[E,e,j]),G=d.useCallback(()=>{console.log("Retake requested - Mode:",b,"isPractice:",N);const F=us(Ud,null);if(!F||F.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:N?"practice":"quiz",difficulty:y,count:v,timer:N?null:h,retake:!0}});return}const L=F.questions.map(W=>{const M=Df([0,1,2,3]);return{...W,options:M.map($=>W.options[$]),answerIndex:M.indexOf(W.answerIndex)}});B({questions:L,poolSize:L.length}),z(Date.now()),D(0),q("quiz"),window.scrollTo(0,0)},[t,b,y,v,h,e,N]),re=d.useCallback((F=null)=>{if(F)U(F);else if(!Q){const L=us(Qd,null);L&&U({questions:L.questions||[],answers:L.answers||[],skipped:L.skipped||[]})}q("review")},[Q]),Z=d.useCallback(()=>{E?e("/profile/history",{replace:!0}):q("results")},[E,e]);return x?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):k?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-red-400",children:k})}):(console.log("Render - Current view:",H,"Session questions:",O.questions.length,"Mode:",b,"isPractice:",N),n.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:n.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[H==="quiz"&&O.questions.length>0&&n.jsx(Qg,{session:O,mode:N?"practice":"quiz",category:ds(t),difficulty:y,timerConfig:N?null:h,onComplete:I,onQuit:A,isPractice:N}),H==="results"&&Q&&n.jsx(Xg,{results:Q,onRetake:G,onReview:()=>re(Q),isRetake:g,isPractice:N,player:o,categories:If,addCoins:i,onNavigate:(F,L)=>{console.log("onNavigate called with:",F,L),L!=null&&L.state?e(F,{state:L.state,replace:L.replace||!1}):e(F)}}),H==="review"&&Q&&n.jsx(Kg,{questions:Q.questions||[],answers:Q.answers||[],skipped:Q.skipped||[],onBack:Z,onRetake:G,fromHistory:E,isPractice:N})]})}))}const Rn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Kn=360/Rn.length,av=42,ii=3e3,Yd=10,Wd=260,ov="cubic-bezier(.15,.7,.1,1)",iv="cubic-bezier(.2,.7,.2,1)",Pn=5,lv=5,cv=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function dv({muted:e=!1,size:t=18}){return n.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&n.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function uv({q:e,locked:t,onPick:r,result:s}){if(!e)return null;const a=[e.option1,e.option2,e.option3,e.option4];return n.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[n.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),n.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),a.map((o,i)=>{const l=s&&o===e.answer,c=s&&s.pick===o&&o!==e.answer;return n.jsx("button",{disabled:t||!!s,onClick:()=>r(o),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:o},i)}),s&&n.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?n.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):n.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",n.jsx("b",{children:e.answer})]}),e.explanation&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function mv(){const e=_e(),[t]=Ot("/sounds/correct.mp3",{volume:.7}),[r]=Ot("/sounds/wrong.mp3",{volume:.7}),[s,a]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(Pn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(Pn).fill(null)}]),[o,i]=d.useState(0),[l,c]=d.useState(1),u=s.reduce((L,W)=>L+W.scores.reduce((M,$)=>M+($??0),0),0),[m,p]=d.useState(!0),f=d.useRef(null);d.useEffect(()=>{const L=new Audio("/sounds/spin.mp3");return L.loop=!0,L.volume=.7,f.current=L,()=>{try{L.pause(),L.src=""}catch{}}},[]);const b=()=>{if(m&&f.current)try{f.current.currentTime=0,f.current.play()}catch{}},y=()=>{if(f.current)try{f.current.pause(),f.current.currentTime=0}catch{}},[j,C]=d.useState(0),[v,h]=d.useState("none"),[g,E]=d.useState(!1),[N,T]=d.useState(null),[S,x]=d.useState(null),w=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[k,P]=d.useState([]);d.useEffect(()=>{(async()=>{try{const L=await fetch("/data/quiz_questions_bank.csv").then(ee=>ee.text()),{data:W}=pr.parse(L,{header:!0,skipEmptyLines:!0,transformHeader:ee=>String(ee).trim().toLowerCase()}),M={a:0,b:1,c:2,d:3},$=W.map((ee,oe)=>{var V;const de=(ee.question??"").trim();if(!de)return null;const te=[ee.option1,ee.option2,ee.option3,ee.option4].map(ce=>String(ce??"").trim());if(te.some(ce=>!ce))return null;let ne=String(ee.answer??"").trim(),J=M[ne.toLowerCase()];if(J===void 0){const ce=te.findIndex(pe=>pe.toLowerCase()===ne.toLowerCase());J=ce>=0?ce:0}const _=te[J];return{id:((V=ee.id)==null?void 0:V.trim())||`ps_${oe}`,question:de,option1:te[0],option2:te[1],option3:te[2],option4:te[3],answer:_,explanation:String(ee.explanation??"").trim(),catSlug:cv(ee.category??ee.subject??"general knowledge"),difficulty:String(ee.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);P($)}catch{P([])}})()},[]);const[O,B]=d.useState(null),[H,q]=d.useState(null),[Q,U]=d.useState(!1),R=L=>(L%360+360)%360,z=L=>R(L),Y=l>Pn;function D(){if(s.length>=4)return;const L=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],W=L[(s.length*2+1)%L.length];a(M=>[...M,{name:`Player ${M.length+1}`,color:W,scores:Array(Pn).fill(null)}])}function I(){s.length<=2||(a(L=>L.slice(0,-1)),i(L=>Math.min(L,s.length-2)))}function A(L){a(W=>W.map((M,$)=>$===o?{...M,scores:M.scores.map((ee,oe)=>oe===l-1?L:ee)}:M))}function G(){if(g||Y)return;T(null),x(null),B(null),q(null),E(!0),b();const L=Math.floor(Math.random()*Rn.length),W=Rn[L],M=Kn*.28,$=(Math.random()*2-1)*M,ee=R(j),oe=180,te=L*Kn+Kn/2+$;let ne=z(te-ee-oe);const J=av*360+ne,_=j+J+Yd;h(`transform ${w?800:ii}ms ${ov}`),C(_);try{navigator.vibrate&&!w&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{h(`transform ${w?160:Wd}ms ${iv}`),C(V=>V-Yd)},w?800:ii),setTimeout(()=>{if(y(),E(!1),T(L),x(W.color),W.soon)return;const V=k.filter(pe=>pe.catSlug===W.slug&&pe.difficulty==="easy"),ce=V.length?V:k.filter(pe=>pe.catSlug===W.slug);if(ce.length){const pe=ce[Math.floor(Math.random()*ce.length)];B(pe)}else B({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(w?800:ii)+(w?160:Wd)+40)}function re(L){if(!O||H)return;const W=L===O.answer;if(q({correct:W,pick:L}),W){t(),U(!0),setTimeout(()=>U(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}A(lv)}else{r();try{navigator.vibrate&&navigator.vibrate([4])}catch{}A(0)}}function Z(){const L=(o+1)%s.length,W=L===0?l+1:l;i(L),c(W),T(null),x(null),B(null),q(null)}function F(){const L=s.map($=>$.scores.reduce((ee,oe)=>ee+(oe??0),0)),W=Math.max(...L),M=s.filter(($,ee)=>L[ee]===W).map($=>$.name).join(", ");alert(`${M} win${M.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[Q&&n.jsx(Af,{numberOfPieces:120,recycle:!1}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),n.jsx("button",{onClick:()=>p(L=>!L),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":m?"Mute sound":"Unmute sound",title:m?"Sound on":"Sound off",children:n.jsx(dv,{muted:!m})})]}),n.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-sm",children:["Round ",n.jsx("b",{children:Math.min(l,Pn)}),"/",n.jsx("b",{children:Pn})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:D,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),n.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),n.jsx("button",{onClick:I,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),n.jsxs("div",{className:"text-sm",children:["Pot: ",n.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[n.jsxs("colgroup",{children:[n.jsx("col",{style:{width:"42%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"13%"}})]}),n.jsx("thead",{children:n.jsxs("tr",{className:"text-base-muted",children:[n.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:Pn}).map((L,W)=>n.jsxs("th",{className:"font-medium text-center",children:["R",W+1]},W)),n.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),n.jsx("tbody",{children:s.map((L,W)=>{const M=L.scores.reduce((ee,oe)=>ee+(oe??0),0),$=W===o;return n.jsxs("tr",{className:$?"bg-white/6":"",children:[n.jsx("td",{className:"py-1 pr-1",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:L.color}}),n.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:L.name,onChange:ee=>a(oe=>oe.map((de,te)=>te===W?{...de,name:ee.target.value}:de))})]})}),L.scores.map((ee,oe)=>n.jsx("td",{className:"text-center",children:ee===null?"–":ee},oe)),n.jsx("td",{className:"text-right pr-1 font-semibold",children:M})]},W)})})]})})]}),n.jsx("section",{className:"flex flex-col items-center",children:n.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[S&&n.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${S}33, 0 0 30px 8px ${S}44`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:v},"aria-label":"Category wheel",role:"group",children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Rn.map((L,W)=>{const M=W*Kn,$=M+Kn,ee=Kn>180?1:0,oe=Math.PI*M/180,de=Math.PI*$/180,te=50+50*Math.cos(oe),ne=50-50*Math.sin(oe),J=50+50*Math.cos(de),_=50-50*Math.sin(de),V=N===W;return n.jsxs("g",{style:{opacity:N==null?.95:V?1:.78,filter:N!=null&&!V?"blur(0.6px)":"none"},children:[n.jsx("path",{d:`M50,50 L${te},${ne} A50,50 0 ${ee} 0 ${J},${_} Z`,fill:L.color,stroke:V?`${L.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:V?"1.2":"0.6"}),n.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${M+Kn/2} 50 50) translate(12 0)`,children:n.jsxs("tspan",{children:[L.label,L.soon?" (soon)":""]})})]},L.slug)}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),n.jsx("button",{onClick:G,disabled:g||Y,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",g||Y?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),N!=null&&!g&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:n.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[n.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:Rn[N].color}}),Rn[N].label]})})]})}),n.jsx("section",{className:"mt-4",children:Y?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),n.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",n.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),n.jsx("button",{className:"btn-primary w-full",onClick:F,children:"End match"})]}):N!=null&&Rn[N].soon?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-lg font-semibold mb-1",children:Rn[N].label}),n.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),n.jsx("button",{className:"btn-primary",onClick:G,disabled:g,children:"Re-spin"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",n.jsx("span",{style:{color:s[o].color},children:s[o].name})," ","| Round ",l,"/",Pn]}),n.jsx(uv,{q:O,locked:g||!O,onPick:re,result:H}),H&&n.jsx("div",{className:"mt-3 flex justify-center",children:n.jsx("button",{className:"btn-primary",onClick:Z,children:"Next turn"})})]})})]}),n.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const fv=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return n.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[n.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),n.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(r=>n.jsxs("button",{onClick:()=>e(r.id,r.title),className:`rounded-3xl bg-gradient-to-br ${r.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[n.jsx("span",{className:"text-5xl",children:r.emoji}),n.jsx("span",{className:"text-white font-bold text-lg text-center",children:r.title})]},r.id))})]})},hv=()=>{_e();const{player:e,addCoins:t,addXP:r}=kn(),[s,a]=d.useState([]),[o,i]=d.useState(0),[l,c]=d.useState({}),[u,m]=d.useState(0),[p,f]=d.useState(5),[b,y]=d.useState(0),[j,C]=d.useState(!0),[v,h]=d.useState(null),[g,E]=d.useState(!0),[N,T]=d.useState(null),[S,x]=d.useState(""),[w,k]=d.useState(!1),[P,O]=d.useState(""),[B,H]=d.useState(!1),[q,Q]=d.useState(!1),[U,R]=d.useState(!1),[z,Y]=d.useState(!1),[D,I]=d.useState(!1),[A,G]=d.useState(!1),[re,Z]=d.useState(0),[F,L]=d.useState(0),[W,M]=d.useState(-1),[$,ee]=d.useState(-1),[oe,de]=d.useState({}),[te,ne]=d.useState({}),J=d.useRef(null),_=d.useRef(null),[V]=Ot("/sounds/correct.mp3",{volume:.6}),[ce]=Ot("/sounds/wrong.mp3",{volume:.6}),[pe]=Ot("/sounds/coin.mp3",{volume:.75}),he=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],$e=()=>{a([]),i(0),c({}),m(0),f(5),y(0),C(!0),h(null),k(!1),O(""),H(!1),Q(!1),R(!1),Y(!1),I(!1),G(!1),Z(0),L(0),M(-1),ee(-1),de({}),ne({}),T(null),x(""),Ne(null)};d.useEffect(()=>($e(),E(!0),()=>{document.body.classList.remove("hide-bottom-nav"),$e(),_.current&&clearTimeout(_.current)}),[]),d.useEffect(()=>{const K=ie=>{!g&&s.length>0&&(ie.preventDefault(),Q(!0))};return!g&&s.length>0&&window.history.pushState({inQuiz:!0},"",window.location.pathname),window.addEventListener("popstate",K),()=>window.removeEventListener("popstate",K)},[g,s.length]),d.useEffect(()=>{!g&&s.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[g,s.length]),d.useEffect(()=>{!g&&s.length>0&&Y(!0)},[g,s.length]);const[ue,Ne]=d.useState(null);d.useEffect(()=>{const K=ie=>{var Ie;if(z&&!U){const Ce=ie.target.closest('button[type="button"]'),Ge=(Ie=Ce==null?void 0:Ce.querySelector(".text-\\[10px\\]"))==null?void 0:Ie.textContent;Ge&&["Home","Play","Profile","Swipe"].includes(Ge)&&(ie.preventDefault(),ie.stopPropagation(),Ne({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[Ge]),Q(!0))}};return document.addEventListener("click",K,!0),()=>document.removeEventListener("click",K,!0)},[z,U]),d.useEffect(()=>{const K=J.current;if(!K)return;let ie=!1,Ie=0,Ce=null;const Ge=le=>{!g&&s.length>0&&le.preventDefault()},we=le=>{Ie=le.touches[0].clientY,ie=!1},pt=le=>{!g&&s.length>0&&!q&&!B&&le.preventDefault()},se=le=>{if(ie||q||B)return;const Ae=le.changedTouches[0].clientY,Pe=Ie-Ae;if(Math.abs(Pe)>30){if(ie=!0,Ce&&clearTimeout(Ce),Pe>0&&o<s.length-1){const ve=o+1;i(ve),K.scrollTo({top:ve*window.innerHeight,behavior:"smooth"})}else if(Pe<0&&o>0){const ve=o-1;i(ve),K.scrollTo({top:ve*window.innerHeight,behavior:"smooth"})}Ce=setTimeout(()=>{ie=!1},800)}};return K.addEventListener("touchstart",we,{passive:!1}),K.addEventListener("touchmove",pt,{passive:!1}),K.addEventListener("touchend",se,{passive:!1}),K.addEventListener("wheel",Ge,{passive:!1}),()=>{K.removeEventListener("touchstart",we),K.removeEventListener("touchmove",pt),K.removeEventListener("touchend",se),K.removeEventListener("wheel",Ge),Ce&&clearTimeout(Ce)}},[o,s.length,g]),d.useEffect(()=>{const K=J.current;K&&(q||B?(K.style.overflow="hidden",K.style.touchAction="none"):(K.style.overflow="auto",K.style.touchAction="auto"))},[q,B]),d.useEffect(()=>{(q||B)&&_.current&&(clearTimeout(_.current),_.current=null)},[q,B]);const ge=async K=>{try{const Ie=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Ce}=pr.parse(Ie,{header:!0,skipEmptyLines:!0}),pt=Ce.map((se,le)=>{var ve,Xe;const Ae=[se.option1,se.option2,se.option3,se.option4].filter(Boolean),Pe={A:0,B:1,C:2,D:3};return{id:se.id||`q_${le}`,prompt:se.question,options:Ae,answerIndex:Pe[(ve=se.answer)==null?void 0:ve.toUpperCase()]||0,category:se.category||"General Knowledge",difficulty:((Xe=se.difficulty)==null?void 0:Xe.toLowerCase())||"medium",explanation:se.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(se=>se.prompt&&se.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(se=>({...se,mascot:he[Math.floor(Math.random()*he.length)]}));a(pt),C(!1)}catch(ie){console.error("Failed to load questions:",ie),C(!1)}},xe=K=>K===1||K===3||K===7||K===10||K===15||K===20||K>20&&K%5===0,ye=(K,ie)=>{if(l[K]!==void 0)return;const Ie=s.find(we=>we.id===K),Ce=ie===Ie.answerIndex,Ge=s.findIndex(we=>we.id===K);if(c(we=>({...we,[K]:ie})),Z(we=>we+1),L(we=>we+1),Ce){if(V(),m(we=>we+1),y(we=>we+10),G(!0),setTimeout(()=>{pe()},300),setTimeout(()=>G(!1),2e3),ht(),xe(Ge+1)){const we=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];O(we[Math.floor(Math.random()*we.length)]),k(!0),setTimeout(()=>k(!1),2e3)}}else if(ce(),m(0),I(!0),setTimeout(()=>I(!1),1500),f(we=>{const pt=Math.max(0,we-1);return pt===0&&setTimeout(()=>H(!0),500),pt}),p>1&&xe(Ge+1)){const we=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];O(we[Math.floor(Math.random()*we.length)]),k(!0),setTimeout(()=>k(!1),2e3)}(p>1||Ce)&&(_.current=setTimeout(()=>{Qt()},2500))},ht=()=>{const K=document.createElement("div");K.style.position="fixed",K.style.inset="0",K.style.pointerEvents="none",K.style.zIndex="1000",document.body.appendChild(K);const ie=["🎉","✨","⭐","🎊","🌟"];for(let Ie=0;Ie<20;Ie++){const Ce=document.createElement("div");Ce.textContent=ie[Math.floor(Math.random()*ie.length)],Ce.style.position="fixed",Ce.style.left=`${Math.random()*100}%`,Ce.style.top="-50px",Ce.style.fontSize="24px",Ce.style.animation=`fall ${2+Math.random()*2}s ease-out`,K.appendChild(Ce)}setTimeout(()=>K.remove(),4e3)},Qt=()=>{if(!(q||B)&&o<s.length-1){const K=o+1,ie=document.getElementById(`question-${K}`);ie==null||ie.scrollIntoView({behavior:"smooth"}),i(K)}},at=K=>{const ie=s.findIndex(we=>we.id===K);if(W>=0&&re<5){h(`After ${5-re} attempts`),setTimeout(()=>h(null),2e3);return}const Ie=s[ie],Ge=[0,1,2,3].filter(we=>we!==Ie.answerIndex).sort(()=>Math.random()-.5).slice(0,2);de({...oe,[K]:Ge}),M(ie),Z(0)},ke=K=>{const ie=s.findIndex(le=>le.id===K);if($>=0&&F<5){h(`After ${5-F} attempts`),setTimeout(()=>h(null),2e3);return}const Ce=s[ie].answerIndex,Ge=[0,0,0,0],we=40+Math.floor(Math.random()*31);Ge[Ce]=we;let pt=100-we;const se=[0,1,2,3].filter(le=>le!==Ce);for(let le=0;le<se.length-1;le++){const Ae=Math.floor(Math.random()*(pt/2));Ge[se[le]]=Ae,pt-=Ae}Ge[se[se.length-1]]=pt,ne({...te,[K]:Ge}),ee(ie),L(0)},De=(K,ie)=>{$e(),T(K),x(ie),E(!1),ge()},At=()=>{Ne("/swipe"),Q(!0)},xr=()=>{R(!0),Q(!1),document.body.classList.remove("hide-bottom-nav")},We=()=>{const K=Object.keys(l).filter(ie=>{const Ie=s.find(Ce=>Ce.id===ie);return l[ie]===(Ie==null?void 0:Ie.answerIndex)}).length;return d.useEffect(()=>{document.body.classList.add("hide-bottom-nav");const ie=setTimeout(()=>{t(b),$e(),Y(!1),R(!1),E(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(ie),document.body.classList.remove("hide-bottom-nav")}},[]),n.jsx("div",{className:"fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),n.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(l).length})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),n.jsx("div",{className:"text-2xl font-bold text-green-400",children:K})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",b]})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),n.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(ie,Ie)=>n.jsx("span",{className:Ie<p?"":"opacity-30",children:"❤️"},Ie))})]})]})]})})};return U?n.jsx(We,{}):g?n.jsx(fv,{onSelect:De}):j?n.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading questions..."})}):n.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[n.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[n.jsx("button",{onClick:At,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("div",{className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:b})]}),n.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🔥"}),n.jsx("span",{className:"font-bold text-orange-400",children:u})]})]}),n.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(K,ie)=>n.jsx("span",{className:`${ie<p?"text-red-500":"text-gray-600 opacity-30"} ${D&&ie===p-1?"animate-heartLoss":""}`,children:"❤️"},ie))})]}),S&&n.jsx("div",{className:"text-center py-1",children:n.jsx("span",{className:"text-xs text-gray-400",children:S})})]}),A&&n.jsx("div",{className:"fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-yellow-500 text-white px-4 py-2 rounded-full font-bold animate-coinFloat",children:"+10 🪙"})}),n.jsx("div",{ref:J,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:s.map((K,ie)=>n.jsx(pv,{question:K,index:ie,answered:l[K.id],onAnswer:Ie=>ye(K.id,Ie),onFiftyFifty:()=>at(K.id),onAudience:()=>ke(K.id),eliminated:oe[K.id]||[],audiencePercentages:te[K.id],canUseFiftyFifty:W<0||re>=5,canUseAudience:$<0||F>=5},K.id))}),B&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"😔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),n.jsx("button",{onClick:()=>{R(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),q&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>Q(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),n.jsx("button",{onClick:xr,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),w&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:n.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:P})}),v&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:v})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},pv=({question:e,index:t,answered:r,onAnswer:s,onFiftyFifty:a,onAudience:o,eliminated:i,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:u})=>{const m=p=>{switch(p){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return n.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[n.jsx("div",{className:"flex justify-center py-2",children:n.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),n.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[n.jsxs("div",{className:`bg-gradient-to-br ${m(e.difficulty)} p-6 rounded-3xl mb-4`,children:[n.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),n.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),n.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((p,f)=>{const b=r!==void 0,y=r===f,j=f===e.answerIndex,C=i.includes(f);let v="w-full p-4 rounded-2xl font-medium transition-all ";return C?v+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":b?j?v+="bg-green-500 text-white":y?v+="bg-red-500 text-white":v+="bg-gray-700 text-gray-400":v+="bg-gray-800 text-white hover:bg-gray-700",n.jsx("button",{onClick:()=>!b&&!C&&s(f),disabled:b||C,className:v,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][f]}),n.jsx("span",{className:"flex-1 text-left",children:p}),l&&l[f]>0&&n.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[f],"%"]}),b&&j&&n.jsx("span",{children:"✓"})]})},f)})}),!r&&n.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[n.jsx("button",{onClick:a,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),n.jsx("button",{onClick:o,disabled:!u,className:`px-4 py-2 rounded-lg font-medium text-sm ${u?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),n.jsx("div",{className:"text-center mt-3 mb-2",children:n.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),n.jsx("div",{className:"text-center mt-12 mb-4",children:n.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function xv(){const[e]=Pf(),t=_e();return nt(),d.useEffect(()=>{const r=e.get("category"),s=e.get("difficulty"),a=e.get("from")==="quest",o=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports","mixed"],i=["easy","medium","hard"],l=r==="random"?o[Math.floor(Math.random()*o.length)]:r||"mixed",c=s==="random"?i[Math.floor(Math.random()*i.length)]:s||"medium";console.log("QuizPlay - fromQuest:",a),console.log("QuizPlay - returnPath will be:",a?"/quests":"/"),t(`/quiz/${l}`,{replace:!0,state:{mode:"quiz",difficulty:c,count:5,timer:{type:"per_q",seconds:45},fromQuest:a,returnPath:a?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"20px"},children:"Starting your quiz..."})}function gv(){const[e]=Pf(),t=_e();return d.useEffect(()=>{const r=e.get("questions")||"15",s=e.get("difficulty")||"easy",a=e.get("category")||"mixed",o=e.get("from")==="quest",i=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports"],l=a==="random"?i[Math.floor(Math.random()*i.length)]:a;console.log("PracticeStart - Launching practice mode:",{category:l,difficulty:s,questions:r,fromQuest:o}),t(`/quiz/${l}`,{replace:!0,state:{mode:"practice",difficulty:s,count:parseInt(r),timer:{type:"off",seconds:0},fromQuest:o,questType:o?"practiceQuestions":null,returnPath:o?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #10B981 0%, #059669 100%)",color:"white",fontSize:"20px"},children:"Loading practice questions..."})}function vv(){const e=_e(),[t,r]=d.useState(""),{player:s,levelProgress:a}=kn(),i=(()=>{const p=JSON.parse(localStorage.getItem("currentUser")||"{}");return((p.phone?JSON.parse(localStorage.getItem(`user_profile_${p.phone}`)||"{}"):{}).name||p.username||(s==null?void 0:s.name)||"Player").split(" ")[0]})(),l=()=>{try{const p=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),f=new Date().setHours(0,0,0,0);return p.sessions.filter(y=>new Date(y.timestamp).setHours(0,0,0,0)===f).reduce((y,j)=>y+(j.earnedCoins||0),0)}catch{return 0}},c={name:i,rank:23,streak:(s==null?void 0:s.currentStreak)||0,todayQuizzes:3,todayCoins:l()};d.useEffect(()=>{const p=new Date().getHours();p<12?r("Good morning"):p<17?r("Good afternoon"):r("Good evening")},[]);const u=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,m=a.required>0?a.current/a.required*100:0;return n.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-10 px-3",children:[n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("div",{children:n.jsxs("h1",{className:"text-2xl font-bold px-3",children:[t,", ",i," 👋"]})}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-10 h-10 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:n.jsx("span",{className:"text-xl",children:"⚙️"})})]}),n.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[n.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:i[0].toUpperCase()}),n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"text-lg font-semibold",children:i}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",s.level]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[s.coins," 🪙"]}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",c.rank]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[n.jsx("span",{children:"XP Progress"}),n.jsxs("span",{children:[a.current,"/",a.required]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${m}%`}})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",c.streak]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",c.todayCoins]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),n.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${u} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),n.jsxs("div",{className:"relative flex items-start justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),n.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),n.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),n.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("/profile/history"),className:`${u} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),n.jsx("div",{className:"text-3xl mb-3",children:"📊"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),n.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",c.todayQuizzes," today"]})]}),n.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${u} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),n.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),n.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${u} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[n.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),n.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),n.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${u} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),n.jsxs("div",{className:"mt-4 space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${u} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"🔥"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[c.streak," days strong"]})]})]})}),n.jsx("button",{onClick:()=>e("/profile/quests"),className:`${u} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"⚡"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:`${u} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),n.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),n.jsx("div",{className:"text-white/40",children:"→"})]})})]}),n.jsx("div",{className:"h-6"})]})}const ms="🪙",xa={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},ga=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function yv(){var f,b;const e=_e(),{player:t}=kn(),r={global:xa.global.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y),friends:xa.friends.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y),india:xa.india.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",r.friends[0]);const[s,a]=d.useState({days:2,hours:14,minutes:17}),[o,i]=d.useState("global"),l=r[o]||r.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(f=l.find(y=>y.you))==null?void 0:f.score);const c=l.find(y=>y.you),u=l.slice(0,3),m=l.slice(3);d.useEffect(()=>{const y=setInterval(()=>{a(j=>j.minutes>0?{...j,minutes:j.minutes-1}:j.hours>0?{...j,hours:j.hours-1,minutes:59}:j.days>0?{...j,days:j.days-1,hours:23,minutes:59}:j)},6e4);return()=>clearInterval(y)},[]);const p=y=>{const j=Math.max(...l.map(v=>v.score)),C=y/j*100;return C>=90?ga[0]:C>=70?ga[1]:C>=40?ga[2]:ga[3]};return n.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-5",children:[n.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),n.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),n.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${p(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:"text-2xl mb-1",children:p(c==null?void 0:c.score).icon}),n.jsxs("div",{className:"text-sm font-bold text-white",children:[p(c==null?void 0:c.score).name," League"]}),n.jsx("div",{className:"text-xs text-white/80",children:o==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),n.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:xa.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(y=>n.jsxs("button",{onClick:()=>i(y.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${o===y.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[n.jsx("div",{children:y.label}),n.jsx("div",{className:`text-[10px] ${o===y.key?"text-black/70":"text-white/60"}`,children:y.count})]},y.key))}),n.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),n.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[n.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),n.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),n.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",o==="global"?"Global":o==="friends"?"Friends":"India"]})]})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",ms]}),n.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),n.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),n.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),n.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),n.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),n.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[u[1]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(va,{src:u[1].avatar,fallback:u[1].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ya(u[1].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[1].score," ",ms]})]}),u[0]&&n.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(va,{src:u[0].avatar,fallback:u[0].name,size:72}),n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx(bv,{})}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),n.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:ya(u[0].name,8)}),n.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[u[0].score," ",ms]}),n.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),u[2]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(va,{src:u[2].avatar,fallback:u[2].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ya(u[2].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[2].score," ",ms]})]})]})]})]}),m.length>0&&n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[n.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[n.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),n.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),n.jsx("ul",{className:"space-y-1.5",children:m.map((y,j)=>n.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${y.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${j*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(wv,{n:y.rank,you:y.you}),n.jsx(va,{src:y.avatar,fallback:y.name,size:36}),n.jsxs("div",{className:"flex flex-col leading-tight",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm font-semibold",children:ya(y.name,12)}),n.jsx("span",{className:"text-xs",children:y.country}),y.friend&&n.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),n.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${y.you?"text-black/70":"text-white/60"}`,children:[n.jsx("span",{children:y.handle}),n.jsxs("span",{children:["🔥",y.streak]})]})]})]}),n.jsxs("div",{className:"flex flex-col items-end",children:[n.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[n.jsx("span",{children:y.score}),n.jsx("span",{className:y.you?"opacity-90":"opacity-80",children:ms})]}),n.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${y.trend.startsWith("+")?"bg-green-500/20 text-green-400":y.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:y.trend})]})]},`${o}-${y.rank}`))})]}),c&&c.rank>1&&n.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[n.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),n.jsx("div",{className:"text-xs text-white/70 mb-3",children:o==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((b=l[c.rank-2])==null?void 0:b.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(o==="friends"&&c.rank===1)&&n.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function va({src:e,fallback:t,size:r=56}){const s=jv(t);return n.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:r,height:r},children:e?n.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):n.jsx("span",{className:"text-sm font-semibold",children:s})})}function bv(){return n.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[n.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[n.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),n.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),n.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function wv({n:e,you:t}){return n.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function ya(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function jv(e=""){var r;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((r=t[1])==null?void 0:r[0])||"")).toUpperCase()}const Nv="qp_recent",kv="qp_review_snapshot",Hd=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function Sv(){const[e,t]=d.useState("quizzes"),[r,s]=d.useState(null),[a,o]=d.useState(!1),[i,l]=d.useState("all"),[c,u]=d.useState("all"),[m,p]=d.useState("date"),[f,b]=d.useState([]),[y,j]=d.useState(!0),C=_e(),v=S=>{if(!S)return"00:00";const x=Math.floor(S/1e3),w=Math.floor(x/60),k=x%60;return`${String(w).padStart(2,"0")}:${String(k).padStart(2,"0")}`},h=S=>{if(!S)return"Unknown";const x=new Date(S),k=Math.floor((new Date-x)/(1e3*60*60*24));return k===0?"Today":k===1?"Yesterday":k<7?`${k} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][x.getMonth()]} ${x.getDate()}`};d.useEffect(()=>{let S=!1;j(!0);const x=P=>{try{return JSON.parse(P)}catch{return null}},w=P=>encodeURIComponent(String(P).trim().toLowerCase().replace(/\s+/g,"-")),k=P=>{var D,I,A,G;const O=Number(P.ts??P.timestamp??P.id)||Date.now(),B=Number(P.ms)||0,H=Number(P.total)||0,q=Number(P.correct)||0,U=String(P.mode||"").toLowerCase().includes("practice")?"practice":"quiz",R=((D=P.snapshot)==null?void 0:D.category)||((I=P.snapshot)==null?void 0:I.categoryLabel)||P.cat||P.category||"Unknown",z=((A=P.snapshot)==null?void 0:A.categoryParam)||w(R),Y=String(((G=P.snapshot)==null?void 0:G.difficulty)||P.difficulty||"medium").toLowerCase();return{id:P.id??O,type:U,category:R,categoryParam:z,difficulty:Y,score:q,total:H,accuracy:H?Math.round(q/H*100):0,time:v(B),ms:B,date:h(O),timestamp:O,snapshot:P.snapshot??null,mode:P.mode||(U==="practice"?"Practice":"Quiz")}};try{const P=localStorage.getItem(Nv),O=P?x(P):null,H=(Array.isArray(O)&&O.length?O:Hd).map(k).filter(q=>q&&q.timestamp).sort((q,Q)=>Q.timestamp-q.timestamp);S||b(H)}catch(P){console.error("Error loading history:",P),S||b(Hd)}finally{S||j(!1)}return()=>{S=!0}},[]);const g=d.useMemo(()=>{const S=new Set(f.map(x=>x.category));return Array.from(S)},[f]),E=d.useMemo(()=>{let S=f.filter(x=>e==="quizzes"?x.type==="quiz":x.type==="practice");return i!=="all"&&(S=S.filter(x=>x.category===i)),c!=="all"&&(S=S.filter(x=>x.difficulty===c)),S.sort((x,w)=>m==="date"?w.timestamp-x.timestamp:m==="score"?w.accuracy-x.accuracy:m==="time"?x.ms-w.ms:0),S},[f,e,i,c,m]),N=d.useMemo(()=>{if(E.length===0)return null;const S=E.reduce((P,O)=>P+O.score,0),x=E.reduce((P,O)=>P+O.total,0),w=x?Math.round(S/x*100):0,k=E.reduce((P,O)=>P+O.ms,0);return{count:E.length,avgAccuracy:w,totalTime:v(k),bestScore:Math.max(...E.map(P=>P.accuracy))}},[E]),T=S=>S>=80?"text-green-400":S>=60?"text-blue-400":S>=40?"text-yellow-400":"text-red-400";return y?n.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading history..."})}):n.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[n.jsx("div",{className:"",children:n.jsxs("div",{className:"px-4 pt-4 pb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("button",{onClick:()=>C("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),n.jsx("button",{onClick:()=>o(!a),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:n.jsx(Pv,{})})]}),n.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),n.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),n.jsxs("div",{className:"px-4 pb-20",children:[n.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:n.jsx("div",{className:"flex items-center",children:n.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(S=>n.jsxs("button",{onClick:()=>t(S.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===S.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[n.jsx("span",{className:"mr-1",children:S.icon}),S.label]},S.value))})})}),N&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[n.jsx(ba,{label:"Total",value:N.count}),n.jsx(ba,{label:"Avg Score",value:`${N.avgAccuracy}%`,color:T(N.avgAccuracy)}),n.jsx(ba,{label:"Best Score",value:`${N.bestScore}%`,color:"text-green-400"}),n.jsx(ba,{label:"Total Time",value:N.totalTime})]})}),a&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),n.jsxs("select",{value:i,onChange:S=>l(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All Categories"}),g.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),n.jsxs("select",{value:c,onChange:S=>u(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All"}),n.jsx("option",{value:"easy",children:"Easy"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"hard",children:"Hard"})]})]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),n.jsxs("select",{value:m,onChange:S=>p(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"date",children:"Date"}),n.jsx("option",{value:"score",children:"Score"}),n.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),E.length===0?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📚"}),n.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),n.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):n.jsx("div",{className:"space-y-3",children:E.map((S,x)=>n.jsx(Cv,{item:S,index:x,onClick:()=>s(S)},S.id))})]}),r&&n.jsx(Ev,{item:r,onClose:()=>s(null)})]})}function ba({label:e,value:t,color:r="text-white"}){return n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),n.jsx("div",{className:`text-lg font-bold ${r}`,children:t})]})}function Cv({item:e,index:t,onClick:r}){const s=i=>i>=80?"from-green-500/20 to-green-600/10 border-green-500/30":i>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":i>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",o=(i=>{const l=i==null?void 0:i.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return n.jsxs("div",{onClick:r,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),n.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${o.bg} ${o.text} ${o.border} border`,children:e.difficulty}),n.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),n.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[n.jsxs("span",{children:["⏱ ",e.time]}),n.jsx("span",{children:e.mode})]}),n.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function Ev({item:e,onClose:t}){const r=_e();return d.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:n.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),n.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Category"}),n.jsx("span",{className:"text-white font-medium",children:e.category})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Difficulty"}),n.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Accuracy"}),n.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-white/60",children:"Time"}),n.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&n.jsx("button",{onClick:()=>{t(),localStorage.setItem(kv,JSON.stringify(e.snapshot)),r(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),n.jsx("button",{onClick:()=>{var s;t(),r(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function Pv(){return n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Tv=d.createContext({});function Mf(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const Rv=typeof window<"u",_v=Rv?d.useLayoutEffect:d.useEffect,Of=d.createContext(null);function Iv(e){return typeof e=="object"&&e!==null}function Lv(e){return Iv(e)&&"offsetHeight"in e}const Av=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class zv extends d.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=r.offsetParent,a=Lv(s)&&s.offsetWidth||0,o=this.props.sizeRef.current;o.height=r.offsetHeight||0,o.width=r.offsetWidth||0,o.top=r.offsetTop,o.left=r.offsetLeft,o.right=a-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Dv({children:e,isPresent:t,anchorX:r,root:s}){const a=d.useId(),o=d.useRef(null),i=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(Av);return d.useInsertionEffect(()=>{const{width:c,height:u,top:m,left:p,right:f}=i.current;if(t||!o.current||!c||!u)return;const b=r==="left"?`left: ${p}`:`right: ${f}`;o.current.dataset.motionPopId=a;const y=document.createElement("style");l&&(y.nonce=l);const j=s??document.head;return j.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${b}px !important;
            top: ${m}px !important;
          }
        `),()=>{j.contains(y)&&j.removeChild(y)}},[t]),n.jsx(zv,{isPresent:t,childRef:o,sizeRef:i,children:d.cloneElement(e,{ref:o})})}const Mv=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:o,mode:i,anchorX:l,root:c})=>{const u=Mf(Ov),m=d.useId();let p=!0,f=d.useMemo(()=>(p=!1,{id:m,initial:t,isPresent:r,custom:a,onExitComplete:b=>{u.set(b,!0);for(const y of u.values())if(!y)return;s&&s()},register:b=>(u.set(b,!1),()=>u.delete(b))}),[r,u,s]);return o&&p&&(f={...f}),d.useMemo(()=>{u.forEach((b,y)=>u.set(y,!1))},[r]),d.useEffect(()=>{!r&&!u.size&&s&&s()},[r]),i==="popLayout"&&(e=n.jsx(Dv,{isPresent:r,anchorX:l,root:c,children:e})),n.jsx(Of.Provider,{value:f,children:e})};function Ov(){return new Map}function Fv(e=!0){const t=d.useContext(Of);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:a}=t,o=d.useId();d.useEffect(()=>{if(e)return a(o)},[e]);const i=d.useCallback(()=>e&&s&&s(o),[o,s,e]);return!r&&s?[!1,i]:[!0]}const wa=e=>e.key||"";function Gd(e){const t=[];return d.Children.forEach(e,r=>{d.isValidElement(r)&&t.push(r)}),t}const li=({children:e,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:o="sync",propagate:i=!1,anchorX:l="left",root:c})=>{const[u,m]=Fv(i),p=d.useMemo(()=>Gd(e),[e]),f=i&&!u?[]:p.map(wa),b=d.useRef(!0),y=d.useRef(p),j=Mf(()=>new Map),[C,v]=d.useState(p),[h,g]=d.useState(p);_v(()=>{b.current=!1,y.current=p;for(let T=0;T<h.length;T++){const S=wa(h[T]);f.includes(S)?j.delete(S):j.get(S)!==!0&&j.set(S,!1)}},[h,f.length,f.join("-")]);const E=[];if(p!==C){let T=[...p];for(let S=0;S<h.length;S++){const x=h[S],w=wa(x);f.includes(w)||(T.splice(S,0,x),E.push(x))}return o==="wait"&&E.length&&(T=E),g(Gd(T)),v(p),null}const{forceRender:N}=d.useContext(Tv);return n.jsx(n.Fragment,{children:h.map(T=>{const S=wa(T),x=i&&!u?!1:p===h||f.includes(S),w=()=>{if(j.has(S))j.set(S,!0);else return;let k=!0;j.forEach(P=>{P||(k=!1)}),k&&(N==null||N(),g(y.current),i&&(m==null||m()),s&&s())};return n.jsx(Mv,{isPresent:x,initial:!b.current||r?void 0:!1,custom:t,presenceAffectsLayout:a,mode:o,root:c,onExitComplete:x?void 0:w,anchorX:l,children:T},S)})})},$v=()=>{const e=_e(),[t,r]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const J=sessionStorage.getItem("navigationSource");J&&r(J)}},[]);const s=J=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=J)},a=()=>{e(-1)},o=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],i={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},{player:l,addCoins:c}=kn(),[u,m]=d.useState(4),[p,f]=d.useState((l==null?void 0:l.coins)||0),[b,y]=d.useState(4),[j,C]=d.useState(!1),[v,h]=d.useState(!1),[g,E]=d.useState(0),[N,T]=d.useState(0),[S,x]=d.useState("cycle"),[w,k]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[P,O]=d.useState([0,1,2,3]),[B,H]=d.useState(!1),[q,Q]=d.useState(!1),[U,R]=d.useState(null),[z,Y]=d.useState(null),[D,I]=d.useState(!1),[A,G]=d.useState(null),[re,Z]=d.useState(!1),F=d.useRef(null),L=d.useRef(null),W=d.useRef(null);d.useEffect(()=>{F.current=new Audio("/sounds/reward.mp3"),L.current=new Audio("/sounds/reward_progress.mp3"),[F,L].forEach(J=>{var _;(_=J.current)==null||_.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const M=J=>{try{J.current&&(J.current.currentTime=0,J.current.play().catch(_=>console.log("Audio play failed:",_)))}catch(_){console.log("Sound play error:",_)}},$=(J,_)=>{if(J>u){Y(_),Q(!0);return}J===u&&oe(J,_)},ee=J=>{var V;const _=(V=W.current)==null?void 0:V.querySelector(`[data-index="${J}"]`);if(_){const ce=_.getBoundingClientRect(),pe=window.pageYOffset||document.documentElement.scrollTop,he=ce.top+pe-window.innerHeight/2+50;window.scrollTo({top:he,behavior:"smooth"})}},oe=(J,_)=>{if(!P.includes(J)){if(_.cost>0&&p<_.cost){Y(_),Q(!0);return}_.cost>0&&(f(V=>V-_.cost),c(-_.cost)),M(F),H(!0),Y(_),O(V=>[...V,J]),setTimeout(()=>{H(!1),_.type==="coins"?(E(_.value),C(!0),setTimeout(()=>{f(V=>V+_.value),c(_.value),setTimeout(()=>{C(!1),E(0)},500)},300)):_.type==="life"?(T(_.value),h(!0),setTimeout(()=>{y(V=>V+_.value),setTimeout(()=>{h(!1),T(0)},500)},300)):(G({icon:_.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{G(null),Z(!0),de(_),_.type==="vehicle"&&x(_.value),setTimeout(()=>{Z(!1)},500)},800)),setTimeout(()=>{if(u<o.length-1){const V=u+1;ee(V),setTimeout(()=>{I(!0),M(L),m(V),setTimeout(()=>{I(!1)},500)},300)}},1200)},1500)}},de=J=>{k(_=>_.find(ce=>ce.icon===J.icon)?_.map(ce=>ce.icon===J.icon?{...ce,count:ce.count+1}:ce):[..._,{type:J.type,icon:J.icon,name:J.label,count:1}])},te=J=>30+J*100,ne=()=>30+u*100;return n.jsxs("div",{className:"rewards-page",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"non-sticky-header",children:n.jsx("button",{className:"back-button",onClick:a,children:"← Back"})}),n.jsxs("div",{className:"sticky-section",children:[n.jsxs("div",{className:"header-wrapper",children:[n.jsxs("div",{className:"title-row",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"title",children:"Rewards"}),n.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),n.jsx("button",{className:"play-quiz-btn",onClick:()=>s("/play"),children:"Play Quiz"})]}),n.jsx("div",{className:"balance-row",children:n.jsx("div",{className:"balance-item",children:n.jsxs("div",{children:[n.jsx("div",{className:"balance-label",children:"Balance"}),n.jsxs("div",{className:`balance-value ${j?"animating":""}`,children:[p.toLocaleString()," 🪙",j&&n.jsxs("span",{className:"value-change",children:["+",g]})]})]})})})]}),n.jsx("div",{className:"stats-cards-container",children:n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"❤️"}),n.jsxs("div",{className:`info-value ${v?"animating":""}`,children:[b,v&&n.jsxs("span",{className:"value-change",children:["+",N]})]}),n.jsx("div",{className:"info-label",children:"Lives"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"⭐"}),n.jsx("div",{className:"info-value",children:"5"}),n.jsx("div",{className:"info-label",children:"Level"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:i[S].icon}),n.jsx("div",{className:"info-value",children:i[S].name}),n.jsx("div",{className:"info-label",children:"Vehicle"})]}),n.jsxs("div",{className:`cards-section ${re?"animating":""}`,children:[n.jsx("div",{className:"cards-label",children:"Your Cards"}),n.jsx("div",{className:"card-grid",children:w.map((J,_)=>n.jsxs("div",{className:"card-item",onClick:()=>R(J),children:[n.jsxs("div",{className:"large-card",children:[n.jsx("div",{className:"large-card-icon",children:J.icon}),n.jsx("div",{className:"large-card-name",children:J.name})]}),J.count>1&&n.jsx("div",{className:"card-count-badge",children:J.count})]},_))})]})]})})]}),n.jsx("div",{className:"scrollable-journey",children:n.jsx("div",{className:"journey-container",ref:W,children:n.jsxs("div",{className:"journey-track",children:[n.jsx("div",{className:"curvy-road",children:n.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),n.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),n.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),n.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-u/(o.length-1)*1500})]})}),n.jsxs("div",{className:"avatar-tracker",style:{top:`${ne()}px`},children:[n.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:J=>{J.target.style.display="none"}}),n.jsx("div",{className:"tracker-vehicle",children:i[S].icon})]}),n.jsx("div",{className:"rewards-list",children:o.map((J,_)=>{const V=_%2===0,ce=_>u,pe=P.includes(_),he=_===u;return n.jsx("div",{className:"reward-row","data-index":_,style:{top:`${te(_)}px`},children:n.jsxs("div",{className:`reward-item ${V?"left":"right"}`,children:[n.jsxs("div",{className:`checkpoint ${he?"current":pe?"claimed":ce?"locked":""}`,onClick:()=>$(_,J),children:[n.jsx("div",{className:"checkpoint-icon",children:J.icon}),n.jsx("div",{className:"checkpoint-value",children:J.label.split(" ")[0]}),J.milestone&&n.jsx("div",{className:"milestone-badge",children:"BONUS"}),ce&&n.jsx("div",{className:"lock-icon",children:"🔒"})]}),n.jsxs("div",{className:"reward-info",children:[n.jsx("div",{className:"reward-name",children:J.label}),n.jsxs("div",{className:"step-label",children:["Step ",_+1]})]})]})},J.id)})})]})})}),A&&n.jsx("div",{className:"flying-card",style:{left:`${A.startX}px`,top:`${A.startY}px`,"--startX":`${A.startX}px`},children:A.icon}),n.jsx(li,{children:U&&n.jsx("div",{className:"claim-overlay",onClick:()=>R(null),children:n.jsxs("div",{className:"modal",onClick:J=>J.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:U.icon}),n.jsx("div",{className:"card-detail-name",children:U.name}),n.jsxs("div",{className:"card-detail-desc",children:["You have ",U.count," of these cards"]}),n.jsx("div",{className:"modal-buttons",children:n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>R(null),children:"Close"})})]})})}),n.jsx(li,{children:B&&z&&n.jsx("div",{className:"claim-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("div",{className:"modal-title",children:"WELL DONE!"}),n.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),n.jsx("div",{className:"modal-icon",children:z.icon}),n.jsxs("div",{className:"modal-value",children:["+",z.value," ",z.type==="coins"?"Coins":z.type==="life"?"Lives":z.label]})]})})}),n.jsx(li,{children:q&&z&&n.jsx("div",{className:"claim-overlay",onClick:()=>Q(!1),children:n.jsxs("div",{className:"modal",onClick:J=>J.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:"🪙"}),n.jsx("div",{className:"modal-title",children:"Need More Coins"}),n.jsx("div",{className:"modal-subtitle",children:z.cost>0?`You need ${z.cost-p} more coins`:"Complete previous rewards first"}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>s("/play"),children:"Play Quiz"}),n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>Q(!1),children:"Cancel"})]})]})})})]})},ja=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function Bv(){const[e,t]=d.useState(null),r=ja.filter(a=>a.unlocked).length,s=Math.round(r/ja.length*100);return n.jsxs("div",{className:"badges-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Badge Collection"}),n.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),n.jsxs("div",{className:"progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Collection Progress"}),n.jsxs("span",{className:"progress-value",children:[r,"/",ja.length]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),n.jsx("div",{className:"badges-grid",children:ja.map(a=>n.jsxs("div",{className:`badge-card ${a.unlocked?"unlocked":""}`,style:{"--badge-color":a.color},onClick:()=>t(a),children:[n.jsx("div",{className:"badge-glow"}),n.jsx("div",{className:"badge-emoji",children:a.emoji}),n.jsx("div",{className:"badge-name",children:a.name}),!a.unlocked&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"badge-progress",children:n.jsx("div",{className:"badge-progress-fill",style:{width:`${a.progress}%`}})}),n.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},a.id))}),n.jsxs("div",{className:"tips-card",children:[n.jsxs("div",{className:"tips-title",children:[n.jsx("span",{children:"💡"}),n.jsx("span",{children:"Pro Tip"})]}),n.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&n.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:n.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),n.jsx("h3",{className:"modal-title",children:e.name}),n.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),n.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&n.jsxs("div",{className:"modal-progress-section",children:[n.jsx("div",{className:"modal-progress-label",children:"Progress"}),n.jsx("div",{className:"modal-progress-bar",children:n.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),n.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),n.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const Uv=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function qv(){const{player:e,addCoins:t}=kn(),[r,s]=d.useState(Uv),[a,o]=d.useState(null),[i,l]=d.useState((e==null?void 0:e.coins)||0),[c,u]=d.useState(!1),[m,p]=d.useState([]),f=r.length,b=r.filter(C=>C.current>=C.target).length,y=Math.round(b/f*100);d.useEffect(()=>{const C=setInterval(()=>{p(v=>{const h={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...v.slice(-4),h]})},3e3);return()=>clearInterval(C)},[]);const j=(C,v)=>{o(C),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{s(h=>h.map(g=>g.id===C?{...g,claimed:!0}:g)),l(h=>h+v),o(null),u(!0),setTimeout(()=>u(!1),2e3)},600)};return n.jsxs("div",{className:"achievements-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",i.toLocaleString()]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),n.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),n.jsxs("div",{className:"progress-overview",children:[n.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),n.jsxs("div",{className:"overview-header",children:[n.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),n.jsxs("div",{className:"overview-stats",children:[n.jsx("span",{className:"trophy-icon",children:"🏆"}),n.jsxs("span",{className:"overview-value",children:[b,"/",f]})]})]}),n.jsx("div",{className:"progress-bar-main",children:n.jsx("div",{className:"progress-fill-main",style:{width:`${y}%`}})})]}),n.jsx("div",{className:"achievements-list",children:r.map(C=>{const v=Math.min(100,Math.round(C.current/C.target*100)),h=v===100,g=C.color+"CC";return n.jsxs("div",{className:`achievement-card ${h?"completed":""}`,style:{"--card-color":C.color,"--card-color-dark":g},children:[n.jsx("div",{className:"card-glow"}),h&&C.claimed&&n.jsx("div",{className:"completed-badge",children:"✓"}),n.jsxs("div",{className:"card-content",children:[n.jsx("div",{className:"achievement-icon",children:C.icon}),n.jsxs("div",{className:"achievement-details",children:[n.jsx("div",{className:"achievement-title",children:C.title}),n.jsx("div",{className:"achievement-subtitle",children:C.subtitle}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${v}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{children:[C.current,"/",C.target]}),n.jsxs("span",{className:"reward-badge",children:["🪙 ",C.reward]})]})]})]}),n.jsx("button",{onClick:()=>j(C.id,C.reward),disabled:!h||C.claimed,className:`claim-button ${C.claimed?"claimed":h?"can-claim":"in-progress"} ${a===C.id?"claiming":""}`,children:C.claimed?"✓":h?"CLAIM!":`${v}%`})]})]},C.id)})}),c&&n.jsx("div",{className:"celebration",children:"🎉"})]})}function Qv(){const{player:e,addCoins:t,updateDailyStreak:r}=kn(),s=(e==null?void 0:e.currentStreak)||0,a=(e==null?void 0:e.bestStreak)||0,o=(e==null?void 0:e.totalDays)||0,i=(e==null?void 0:e.coins)||0,l=_e(),c=new Date,u=c.getDay(),m=()=>{const D=new Date(c);return D.setDate(c.getDate()-c.getDay()),D.toISOString().split("T")[0]},[p,f]=d.useState(null),[b,y]=d.useState(!1),[j,C]=d.useState(null),[v,h]=d.useState(null),[g,E]=d.useState(!1),N=d.useRef(null),T=d.useRef(null),[S]=Ot("/sounds/coin.mp3",{volume:.75}),[x]=Ot("/sounds/correct.mp3",{volume:.6}),[w,k]=d.useState(()=>{const D=localStorage.getItem("streaks_claimed")||"[]",I=JSON.parse(D),A=m(),G=I.filter(re=>re!==`week_${A}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(G)),G});d.useEffect(()=>{const D=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const A=document.querySelector("main");A&&(A.scrollTop=0)};D(),requestAnimationFrame(D);const I=setTimeout(D,100);return()=>clearTimeout(I)},[]),d.useEffect(()=>{E(!0),setTimeout(()=>E(!1),3e3)},[]);const P=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],O=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],B=D=>{const I=w.includes(`week_${m()}_day_${D}`);if(D===0)return{isCompleted:!0,isClaimed:I,canClaim:!I,isLocked:!1};const A=s>=D,G=A&&!I,re=s<D;return{isCompleted:A,isClaimed:I,canClaim:G,isLocked:re}},H=(D,I,A)=>{const G=B(I);if(G.isLocked){h({day:I,currentStreak:s}),setTimeout(()=>h(null),2e3);return}G.isClaimed||G.canClaim&&(f({...D,day:I}),y(!1),setTimeout(()=>{y(!0),x(),setTimeout(()=>{if(D.type==="coins"){const F=parseInt(D.reward);if(T.current&&N.current){const L=T.current.getBoundingClientRect();S(),C({startRect:L,count:10,amount:F})}}const re=`week_${m()}_day_${I}`,Z=[...w,re];k(Z),localStorage.setItem("streaks_claimed",JSON.stringify(Z))},500),setTimeout(()=>{f(null),y(!1)},2500)},500))},q=(D,I)=>{if(P[I].dayIndex===u)return s>0?"today-completed":"today-pending";if(I<P.findIndex(G=>G.dayIndex===u)){const G=P.findIndex(re=>re.dayIndex===u)-I;return s>=G?"completed":"missed"}else return"future"},Q=[{days:3,emoji:"⚡",label:"Starter",achieved:s>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:s>=7},{days:30,emoji:"💎",label:"Champion",achieved:s>=30},{days:100,emoji:"👑",label:"Legend",achieved:s>=100}],U=Q.find(D=>D.days>s)||Q[Q.length-1],R=Math.min(100,s/U.days*100),z=()=>{window.location.href="/play"},Y=()=>{l(-1)};return n.jsxs("div",{className:"streaks-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),j&&n.jsx(Ro,{startRect:j.startRect,targetRef:N,count:j.count,onDone:()=>{t(j.amount),C(null)}}),n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-top",children:[n.jsx("button",{className:"back-button",onClick:Y,children:"← Back"}),n.jsxs("div",{className:"coin-pill",ref:N,id:"coin-pill",children:[n.jsx("span",{className:"coin-icon",children:"🪙"}),n.jsx("span",{className:"coin-amount",children:i})]})]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"STREAKS"}),n.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),n.jsxs("div",{className:"streak-hero",children:[n.jsx("div",{className:"fire-animation",children:"🔥"}),n.jsx("div",{className:"streak-number",children:s}),n.jsx("div",{className:"streak-label",children:"DAY STREAK"}),n.jsxs("div",{className:"stats-row",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:a}),n.jsx("div",{className:"stat-label",children:"Best Streak"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:o}),n.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),n.jsxs("div",{className:"weekly-progress-card",children:[n.jsxs("div",{className:"weekly-header",children:[n.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),n.jsxs("div",{className:"weekly-counter",children:[n.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),n.jsxs("span",{className:"weekly-counter-text",children:[Math.min(s,7),"/7"]})]})]}),n.jsx("div",{className:"weekly-days",children:P.map((D,I)=>{const A=q(D.dayIndex,I),G=D.dayIndex===u;return n.jsxs("div",{className:"day-item",children:[n.jsx("div",{className:`day-circle ${A}`,children:A==="completed"||A==="today-completed"?"":D.short}),n.jsx("div",{className:`day-label ${G?"today":""}`,children:D.label})]},I)})}),n.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),n.jsx("div",{className:"rewards-grid",children:O.map((D,I)=>{const A=B(D.day);return n.jsxs("div",{className:`reward-item ${A.isLocked?"locked":A.canClaim?"can-claim":A.isClaimed?"completed":""}`,onClick:G=>H(D,D.day),children:[n.jsxs("div",{className:"reward-day",children:["Day ",D.day]}),n.jsx("div",{className:"reward-icon",children:D.icon}),n.jsx("div",{className:"reward-text",children:D.label})]},I)})})]}),n.jsxs("div",{className:"milestone-section",children:[n.jsx("div",{className:"milestone-header",children:"Next Milestone"}),n.jsxs("div",{className:"milestone-progress",children:[n.jsxs("div",{className:"milestone-info",children:[n.jsxs("div",{className:"milestone-current",children:[n.jsx("span",{className:"milestone-emoji",children:U.emoji}),n.jsx("span",{className:"milestone-text",children:U.label})]}),n.jsxs("span",{className:"milestone-target",children:[s,"/",U.days," days"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${R}%`}})})]})]}),n.jsx("div",{className:"motivational-text",children:s===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${s} strong! Keep going to unlock more rewards!`}),n.jsxs("button",{className:"play-button",onClick:z,children:[n.jsx("span",{children:"Continue Streak"}),n.jsx("span",{children:"→"})]}),v&&n.jsxs("div",{className:"locked-message",children:[n.jsx("span",{className:"locked-message-icon",children:"🔒"}),n.jsx("span",{className:"locked-message-text",children:v.day===1&&v.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${v.day} streak to unlock this reward!`})]}),p&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"modal-overlay"}),n.jsx("div",{className:"reward-modal",ref:T,children:n.jsxs("div",{className:"gift-box",children:[n.jsxs("div",{className:"gift-box-body",children:[n.jsx("div",{className:"gift-box-ribbon"}),n.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),n.jsx("div",{className:`gift-box-lid ${b?"opening":""}`,children:n.jsx("div",{className:"gift-box-bow",children:"🎀"})}),n.jsxs("div",{className:`gift-content ${b?"show":""}`,children:[n.jsx("div",{className:"gift-content-icon",children:p.icon}),n.jsxs("div",{className:"gift-content-title",children:["Day ",p.day]}),n.jsx("div",{className:"gift-content-desc",children:p.label})]})]})})]}),g&&n.jsx("div",{className:"celebration",children:"🎉"})]})}const Yv=()=>{const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},il=()=>{const e=localStorage.getItem("questProgress");return e?JSON.parse(e):{}},Vd=(e,t)=>{const r=il();r[e]=t,r.date=Yv(),localStorage.setItem("questProgress",JSON.stringify(r))};function Wv(){const{player:e,addCoins:t}=kn(),r=_e(),s=nt(),a=il(),[o,i]=d.useState([{id:1,title:"Play 3 quizzes today",progress:a.dailyQuizzes||0,target:3,reward:60,claimed:a.dailyQuizzesClaimed||!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy",questType:"dailyQuizzes",route:"/quiz/play",routeParams:"?category=random&difficulty=random&from=quest"},{id:3,title:"Practice 15 questions",progress:a.practiceQuestions||0,target:15,reward:100,claimed:a.practiceQuestionsClaimed||!1,icon:"📚",color:"#FFD93D",difficulty:"Easy",questType:"practiceQuestions",route:"/practice/start",routeParams:"?questions=15&difficulty=easy&category=random&from=quest"},{id:4,title:"Win 5 in a row",progress:a.winStreak||0,target:5,reward:150,claimed:a.winStreakClaimed||!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard",questType:"winStreak",route:"/play",routeParams:"?mode=survival&from=quest"},{id:5,title:"Complete a speed run",progress:a.speedRun||0,target:1,reward:120,claimed:a.speedRunClaimed||!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium",questType:"speedRun",route:"/swipe/random-mix",routeParams:"?from=quest"}]),[l,c]=d.useState((e==null?void 0:e.coins)||0),[u,m]=d.useState(null),[p,f]=d.useState(0),b=d.useRef(null),[y,j]=d.useState(null);d.useEffect(()=>{const N=()=>{const S=il();i(x=>x.map(w=>{const k=w.questType;return S[k]!==void 0?{...w,progress:S[k]}:w}))};window.addEventListener("storage",N);const T=()=>N();return window.addEventListener("focus",T),()=>{window.removeEventListener("storage",N),window.removeEventListener("focus",T)}},[]),d.useEffect(()=>{const N=S=>{console.log("Quest progress update received:",S.detail),i(x=>x.map(w=>w.questType==="practiceQuestions"&&S.detail.practiceQuestions?{...w,progress:S.detail.practiceQuestions}:w))};window.addEventListener("questProgressUpdate",N);const T=setInterval(()=>{try{const S=localStorage.getItem("questProgress");if(S){const x=JSON.parse(S);i(w=>w.map(k=>k.questType==="practiceQuestions"&&x.practiceQuestions&&k.progress!==x.practiceQuestions?{...k,progress:x.practiceQuestions}:k))}}catch(S){console.error("Error checking progress:",S)}},1e3);return()=>{window.removeEventListener("questProgressUpdate",N),clearInterval(T)}},[]),d.useEffect(()=>{var N;if((N=s.state)!=null&&N.questCompleted){const{questType:T,increment:S}=s.state;i(x=>x.map(w=>{if(w.questType===T){const k=Math.min(w.progress+(S||1),w.target);return Vd(T,k),{...w,progress:k}}return w})),window.history.replaceState({},document.title)}},[s]),d.useEffect(()=>{const N=o.filter(T=>T.progress>=T.target).length;f(Math.round(N/o.length*100))},[o]),d.useEffect(()=>{c((e==null?void 0:e.coins)||0)},[e==null?void 0:e.coins]);const C=N=>{navigator.vibrate&&navigator.vibrate([20]),sessionStorage.setItem("activeQuest",JSON.stringify({id:N.id,type:N.questType,title:N.title,currentProgress:N.progress,target:N.target})),r(N.route+N.routeParams)},v=()=>{sessionStorage.getItem("questsFromHome")==="true"?(sessionStorage.removeItem("questsFromHome"),r("/")):r("/profile")},h=N=>{navigator.vibrate&&navigator.vibrate([20,10,20]);try{const T=new Audio("/sounds/coin.mp3");T.volume=.75,T.play()}catch{console.log("Sound not available")}m(N.id),j({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(N.reward/10,10),amount:N.reward}),setTimeout(()=>{i(T=>T.map(S=>S.id===N.id?(Vd(S.questType+"Claimed",!0),{...S,claimed:!0}):S)),m(null)},600)},g=N=>{switch(N){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},E=()=>{const N=new Date,T=new Date(N);T.setDate(T.getDate()+1),T.setHours(5,0,0,0);const S=T-N,x=Math.floor(S/(1e3*60*60)),w=Math.floor(S%(1e3*60*60)/(1e3*60));return`${x}h ${w}m`};return n.jsxs("div",{className:"quests-screen",children:[y&&n.jsx(Ro,{startRect:y.startRect,targetRef:b,count:y.count,onDone:()=>{c(N=>N+y.amount),t(y.amount),j(null)}}),n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"animated-bg",children:[n.jsx("div",{className:"floating-icon",children:"🎮"}),n.jsx("div",{className:"floating-icon",children:"🎯"}),n.jsx("div",{className:"floating-icon",children:"🏆"}),n.jsx("div",{className:"floating-icon",children:"⭐"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:v,children:"← Back"}),n.jsxs("div",{className:"coins-display",ref:b,children:["🪙 ",l]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Daily Quests"}),n.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),n.jsxs("div",{className:"daily-progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Today's Progress"}),n.jsxs("span",{className:"progress-value",children:[p,"%"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${p}%`}})})]}),n.jsx("div",{className:"quests-list",children:o.map(N=>{const T=Math.min(100,Math.round(N.progress/N.target*100)),S=T===100,x=N.color+"CC";return n.jsxs("div",{className:`quest-card ${S?"completed":""}`,style:{"--quest-color":N.color,"--quest-color-dark":x},children:[n.jsx("div",{className:"quest-accent"}),S&&N.claimed&&n.jsx("div",{className:"completed-checkmark",children:"✓"}),n.jsxs("div",{className:"quest-content",children:[n.jsx("div",{className:`quest-icon-container ${u===N.id?"animating":""}`,children:N.icon}),n.jsxs("div",{className:"quest-details",children:[n.jsxs("div",{className:"quest-header",children:[n.jsx("span",{className:"quest-title",children:N.title}),n.jsx("span",{className:"difficulty-badge",style:{background:`${g(N.difficulty)}20`,color:g(N.difficulty)},children:N.difficulty})]}),n.jsxs("div",{className:"progress-info",children:[n.jsx("div",{className:"mini-progress-bar",children:n.jsx("div",{className:"mini-progress-fill",style:{width:`${T}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{className:"progress-numbers",children:[N.progress,"/",N.target]}),n.jsxs("span",{className:"reward-display",children:["🪙 ",N.reward]})]})]})]}),n.jsx("button",{onClick:()=>{S&&!N.claimed?h(N):S||C(N)},disabled:N.claimed,className:`action-button ${N.claimed?"claimed":S?"can-claim":"in-progress"}`,style:!S&&!N.claimed?{"--quest-color":N.color,"--quest-color-dark":x}:{},children:N.claimed?"✓":S?"Claim":"Do it"})]})]},N.id)})}),n.jsxs("div",{className:"timer-card",children:[n.jsx("div",{className:"timer-icon",children:"⏰"}),n.jsx("div",{className:"timer-label",children:"New Quests In"}),n.jsx("div",{className:"timer-value",children:E()})]}),u&&n.jsx("div",{className:"reward-animation",children:"🪙"})]})}function pc({title:e,subtitle:t,children:r}){const s=_e();return n.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&n.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),n.jsx("div",{className:"w-[68px]"})]}),r]})}class Hv{constructor(){console.log("UserService initialized")}getUserData(t){try{if(!t)return console.log("No phone provided to getUserData"),null;const s=JSON.parse(localStorage.getItem("users")||"{}")[t]||{},a=JSON.parse(localStorage.getItem(`user_profile_${t}`)||"{}"),o={...s,phone:t,username:a.name||s.username||"",email:a.email||"",city:a.city||"",state:a.state||"",country:a.country||""};return console.log("getUserData merged result:",o),o}catch(r){return console.error("Error in getUserData:",r),null}}userExists(t){try{return JSON.parse(localStorage.getItem("users")||"{}").hasOwnProperty(t)}catch(r){return console.error("Error checking if user exists:",r),!1}}createUser(t,r){try{console.log("Creating user:",t,r);const s=JSON.parse(localStorage.getItem("users")||"{}");return s[t]={username:r.username,password:r.password||"123456",avatar:r.avatar,gender:r.gender,ageGroup:r.ageGroup,phone:t,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(s)),this.setCurrentUser(t),console.log("User created successfully"),!0}catch(s){return console.error("Error creating user:",s),!1}}setCurrentUser(t){try{const r=this.getUserData(t);if(!r)return!1;const s={phone:t,username:r.username,avatar:r.avatar,gender:r.gender,ageGroup:r.ageGroup};localStorage.setItem("currentUser",JSON.stringify(s));const a=JSON.parse(localStorage.getItem("qp_player")||"{}");return a.name=r.username,localStorage.setItem("qp_player",JSON.stringify(a)),console.log("Current user set:",s),!0}catch(r){return console.error("Error setting current user:",r),!1}}updateUserProfile(t,r){try{if(console.log("Updating profile for:",t,r),r.name){const l=JSON.parse(localStorage.getItem("users")||"{}");if(l[t]){l[t].username=r.name;const c=l[t].password;l[t].password=c,localStorage.setItem("users",JSON.stringify(l))}}const s=`user_profile_${t}`,o={...JSON.parse(localStorage.getItem(s)||"{}"),...r};localStorage.setItem(s,JSON.stringify(o));const i=JSON.parse(localStorage.getItem("currentUser")||"{}");if(i.phone===t){i.username=r.name||i.username,localStorage.setItem("currentUser",JSON.stringify(i));const l=JSON.parse(localStorage.getItem("qp_player")||"{}");l.name=r.name||l.name,localStorage.setItem("qp_player",JSON.stringify(l))}return console.log("Profile updated successfully"),!0}catch(s){return console.error("Error updating profile:",s),!1}}getCurrentUser(){try{const t=JSON.parse(localStorage.getItem("currentUser")||"{}");return t.phone?this.getUserData(t.phone):null}catch(t){return console.error("Error getting current user:",t),null}}signOut(){try{return localStorage.removeItem("currentUser"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),console.log("User signed out"),!0}catch(t){return console.error("Error signing out:",t),!1}}}const Wr=new Hv;window.userService=Wr;function Gv(){const e=_e(),[t,r]=d.useState(!0),[s,a]=d.useState(!0),[o,i]=d.useState(!0),[l,c]=d.useState(!1),[u,m]=d.useState("");d.useEffect(()=>{const f=Wr.getCurrentUser();f&&f.phone&&m(f.phone)},[]);const p=()=>{const b=JSON.parse(localStorage.getItem("currentUser")||"{}").phone;localStorage.removeItem("currentUser"),localStorage.removeItem("qp_player"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),b?e("/auth/signin",{replace:!0,state:{phone:b}}):e("/auth",{replace:!0})};return n.jsxs(n.Fragment,{children:[n.jsx(pc,{title:"Settings",subtitle:"Make it yours",children:n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-2",children:[n.jsx("div",{className:"px-4 pt-3 pb-1",children:n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Preferences"})}),n.jsxs("div",{className:"divide-y divide-white/10",children:[n.jsx(yr,{icon:"🔊",label:"Sound",subtitle:"Game sounds & effects",right:n.jsx(ci,{on:t,set:r})}),n.jsx(yr,{icon:"📳",label:"Haptics",subtitle:"Vibration feedback",right:n.jsx(ci,{on:s,set:a})}),n.jsx(yr,{icon:"🔔",label:"Notifications",subtitle:"Daily reminders",right:n.jsx(ci,{on:o,set:i})})]})]}),n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-2",children:[n.jsx("div",{className:"px-4 pt-3 pb-1",children:n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Account"})}),n.jsxs("div",{className:"divide-y divide-white/10",children:[n.jsx(yr,{icon:"📱",label:"Phone Number",subtitle:u||"Not available",right:n.jsx("span",{className:"text-white/40 text-sm",children:"🔒"})}),n.jsx(yr,{icon:"✏️",label:"Edit Profile",subtitle:"Update your details",right:n.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/edit")}),n.jsx(yr,{icon:"🔒",label:"Privacy Policy",subtitle:"Your data is safe",right:n.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/privacy")})]})]}),n.jsxs("button",{className:`w-full rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-900/30 to-pink-900/30 
                       py-4 text-red-300 font-semibold backdrop-blur-sm
                       transition-all duration-200 hover:from-red-900/40 hover:to-pink-900/40 
                       active:scale-[0.98] flex items-center justify-center gap-2`,onClick:()=>c(!0),children:[n.jsx("span",{children:"🚪"}),n.jsx("span",{children:"Sign Out"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:n.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-4 animate-bounce",children:"👋"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leaving Already?"}),n.jsx("p",{className:"text-white/60 text-sm",children:"You'll need to sign in again to continue your quiz journey"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>c(!1),className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Stay"}),n.jsx("button",{onClick:p,className:`flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 
                         hover:from-red-600 hover:to-pink-600 transition-all duration-200 
                         font-semibold text-white shadow-lg`,children:"Sign Out"})]})]})})]})}function yr({icon:e,label:t,subtitle:r,right:s,onClick:a}){return n.jsxs("button",{type:"button",onClick:a,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition-all duration-200`,children:[n.jsxs("div",{className:"flex items-center gap-3",children:[e&&n.jsx("span",{className:"text-xl",children:e}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-semibold text-white",children:t}),r&&n.jsx("div",{className:"text-xs text-white/50 mt-0.5",children:r})]})]}),s]})}function ci({on:e,set:t}){return n.jsx("span",{onClick:r=>{r.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-12 h-7 items-center rounded-full transition-all duration-300 px-1 shadow-inner",e?"bg-gradient-to-r from-green-400 to-emerald-500 justify-end":"bg-gray-600 justify-start"].join(" "),role:"switch","aria-checked":e,children:n.jsx("span",{className:["w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300",e?"scale-110":"scale-100"].join(" ")})})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var Hr;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(Hr||(Hr={}));class di extends Error{constructor(t,r,s){super(t),this.message=t,this.code=r,this.data=s}}const Vv=e=>{var t,r;return e!=null&&e.androidBridge?"android":!((r=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},Xv=e=>{const t=e.CapacitorCustomPlatform||null,r=e.Capacitor||{},s=r.Plugins=r.Plugins||{},a=()=>t!==null?t.name:Vv(e),o=()=>a()!=="web",i=p=>{const f=u.get(p);return!!(f!=null&&f.platforms.has(a())||l(p))},l=p=>{var f;return(f=r.PluginHeaders)===null||f===void 0?void 0:f.find(b=>b.name===p)},c=p=>e.console.error(p),u=new Map,m=(p,f={})=>{const b=u.get(p);if(b)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),b.proxy;const y=a(),j=l(p);let C;const v=async()=>(!C&&y in f?C=typeof f[y]=="function"?C=await f[y]():C=f[y]:t!==null&&!C&&"web"in f&&(C=typeof f.web=="function"?C=await f.web():C=f.web),C),h=(x,w)=>{var k,P;if(j){const O=j==null?void 0:j.methods.find(B=>w===B.name);if(O)return O.rtype==="promise"?B=>r.nativePromise(p,w.toString(),B):(B,H)=>r.nativeCallback(p,w.toString(),B,H);if(x)return(k=x[w])===null||k===void 0?void 0:k.bind(x)}else{if(x)return(P=x[w])===null||P===void 0?void 0:P.bind(x);throw new di(`"${p}" plugin is not implemented on ${y}`,Hr.Unimplemented)}},g=x=>{let w;const k=(...P)=>{const O=v().then(B=>{const H=h(B,x);if(H){const q=H(...P);return w=q==null?void 0:q.remove,q}else throw new di(`"${p}.${x}()" is not implemented on ${y}`,Hr.Unimplemented)});return x==="addListener"&&(O.remove=async()=>w()),O};return k.toString=()=>`${x.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:x,writable:!1,configurable:!1}),k},E=g("addListener"),N=g("removeListener"),T=(x,w)=>{const k=E({eventName:x},w),P=async()=>{const B=await k;N({eventName:x,callbackId:B},w)},O=new Promise(B=>k.then(()=>B({remove:P})));return O.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await P()},O},S=new Proxy({},{get(x,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return j?T:E;case"removeListener":return N;default:return g(w)}}});return s[p]=S,u.set(p,{name:p,proxy:S,platforms:new Set([...Object.keys(f),...j?[y]:[]])}),S};return r.convertFileSrc||(r.convertFileSrc=p=>p),r.getPlatform=a,r.handleError=c,r.isNativePlatform=o,r.isPluginAvailable=i,r.registerPlugin=m,r.Exception=di,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},Kv=e=>e.Capacitor=Xv(e),ll=Kv(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),xc=ll.registerPlugin;class Ff{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,r){let s=!1;this.listeners[t]||(this.listeners[t]=[],s=!0),this.listeners[t].push(r);const o=this.windowListeners[t];o&&!o.registered&&this.addWindowListener(o),s&&this.sendRetainedArgumentsForEvent(t);const i=async()=>this.removeListener(t,r);return Promise.resolve({remove:i})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,r,s){const a=this.listeners[t];if(!a){if(s){let o=this.retainedEventArguments[t];o||(o=[]),o.push(r),this.retainedEventArguments[t]=o}return}a.forEach(o=>o(r))}hasListeners(t){var r;return!!(!((r=this.listeners[t])===null||r===void 0)&&r.length)}registerWindowListener(t,r){this.windowListeners[r]={registered:!1,windowEventName:t,pluginEventName:r,handler:s=>{this.notifyListeners(r,s)}}}unimplemented(t="not implemented"){return new ll.Exception(t,Hr.Unimplemented)}unavailable(t="not available"){return new ll.Exception(t,Hr.Unavailable)}async removeListener(t,r){const s=this.listeners[t];if(!s)return;const a=s.indexOf(r);this.listeners[t].splice(a,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const r=this.retainedEventArguments[t];r&&(delete this.retainedEventArguments[t],r.forEach(s=>{this.notifyListeners(t,s)}))}}const Xd=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Kd=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Jv extends Ff{async getCookies(){const t=document.cookie,r={};return t.split(";").forEach(s=>{if(s.length<=0)return;let[a,o]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=Kd(a).trim(),o=Kd(o).trim(),r[a]=o}),r}async setCookie(t){try{const r=Xd(t.key),s=Xd(t.value),a=`; expires=${(t.expires||"").replace("expires=","")}`,o=(t.path||"/").replace("path=",""),i=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${r}=${s||""}${a}; path=${o}; ${i};`}catch(r){return Promise.reject(r)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const r of t)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}xc("CapacitorCookies",{web:()=>new Jv});const Zv=async e=>new Promise((t,r)=>{const s=new FileReader;s.onload=()=>{const a=s.result;t(a.indexOf(",")>=0?a.split(",")[1]:a)},s.onerror=a=>r(a),s.readAsDataURL(e)}),ey=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(a=>a.toLocaleLowerCase()).reduce((a,o,i)=>(a[o]=e[t[i]],a),{})},ty=(e,t=!0)=>e?Object.entries(e).reduce((s,a)=>{const[o,i]=a;let l,c;return Array.isArray(i)?(c="",i.forEach(u=>{l=t?encodeURIComponent(u):u,c+=`${o}=${l}&`}),c.slice(0,-1)):(l=t?encodeURIComponent(i):i,c=`${o}=${l}`),`${s}&${c}`},"").substr(1):null,ny=(e,t={})=>{const r=Object.assign({method:e.method||"GET",headers:e.headers},t),a=ey(e.headers)["content-type"]||"";if(typeof e.data=="string")r.body=e.data;else if(a.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[i,l]of Object.entries(e.data||{}))o.set(i,l);r.body=o.toString()}else if(a.includes("multipart/form-data")||e.data instanceof FormData){const o=new FormData;if(e.data instanceof FormData)e.data.forEach((l,c)=>{o.append(c,l)});else for(const l of Object.keys(e.data))o.append(l,e.data[l]);r.body=o;const i=new Headers(r.headers);i.delete("content-type"),r.headers=i}else(a.includes("application/json")||typeof e.data=="object")&&(r.body=JSON.stringify(e.data));return r};class ry extends Ff{async request(t){const r=ny(t,t.webFetchExtra),s=ty(t.params,t.shouldEncodeUrlParams),a=s?`${t.url}?${s}`:t.url,o=await fetch(a,r),i=o.headers.get("content-type")||"";let{responseType:l="text"}=o.ok?t:{};i.includes("application/json")&&(l="json");let c,u;switch(l){case"arraybuffer":case"blob":u=await o.blob(),c=await Zv(u);break;case"json":c=await o.json();break;case"document":case"text":default:c=await o.text()}const m={};return o.headers.forEach((p,f)=>{m[f]=p}),{data:c,headers:m,status:o.status,url:o.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}xc("CapacitorHttp",{web:()=>new ry});const Jd=xc("App",{web:()=>rc(()=>import("./web-f5a3b73f.js"),[]).then(e=>new e.AppWeb)});function sy(){const e=_e(),[t,r]=d.useState(!1),[s,a]=d.useState(!1),[o,i]=d.useState(!1),[l,c]=d.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""}),[u,m]=d.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""});d.useEffect(()=>{const j=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!j.phone){const E=JSON.parse(localStorage.getItem("users")||"{}"),N=Object.keys(E).find(T=>E[T].username===j.username);if(N)j.phone=N,localStorage.setItem("currentUser",JSON.stringify(j));else{e("/profile");return}}const C=Wr.getUserData(j.phone);C.password;const v=JSON.parse(localStorage.getItem(`user_profile_${j.phone}`)||"{}"),h=E=>E?E.charAt(0).toUpperCase()+E.slice(1).toLowerCase():"",g={name:v.name||j.username||C.username||"",phone:j.phone||"",gender:h(v.gender||j.gender||C.gender||""),ageGroup:v.ageGroup||j.ageGroup||C.ageGroup||"",city:v.city||"",email:v.email||"",state:v.state||"",country:v.country||""};c(g),m(g)},[e]),d.useEffect(()=>{if(t){const j=JSON.stringify(l)!==JSON.stringify(u);i(j)}},[u,l,t]);const p=()=>{r(!0),m({...l}),i(!1)},f=()=>{r(!1),m({...l}),i(!1)},b=()=>{const j=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!j.phone)return;Wr.updateUserProfile(j.phone,u)&&(c({...u}),r(!1),i(!1),a(!0),setTimeout(()=>a(!1),3e3))},y=(j,C)=>{m(v=>({...v,[j]:C}))};return n.jsxs(pc,{title:"Edit Profile",subtitle:"Update your information",children:[s&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsx("div",{className:"bg-green-500/20 border border-green-500/50 rounded-2xl px-8 py-4 backdrop-blur-sm animate-bounce",children:n.jsxs("div",{className:"flex items-center gap-2 text-green-400 font-semibold text-lg",children:[n.jsx("span",{children:"Profile updated"}),n.jsx("span",{className:"text-2xl",children:"✓"})]})})}),n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-4",children:[n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Basic Information"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(Tn,{label:"Name",value:t?u.name:l.name,onChange:j=>y("name",j),placeholder:"Your full name",disabled:!t}),n.jsx(Tn,{label:"Phone",value:l.phone,disabled:!0,icon:"🔒",helperText:"Cannot be changed"}),n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[t?n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Gender"}),n.jsxs("select",{value:u.gender||"",onChange:j=>y("gender",j.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[n.jsx("option",{value:"",children:"Not set"}),n.jsx("option",{value:"Male",children:"Male"}),n.jsx("option",{value:"Female",children:"Female"}),n.jsx("option",{value:"Other",children:"Other"})]})]}):n.jsx(Tn,{label:"Gender",value:l.gender||"Not set",disabled:!0}),t?n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Age Group"}),n.jsxs("select",{value:u.ageGroup||"",onChange:j=>y("ageGroup",j.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[n.jsx("option",{value:"",children:"Not set"}),n.jsx("option",{value:"under-5",children:"Under 5 yrs"}),n.jsx("option",{value:"5-10",children:"5-10 yrs"}),n.jsx("option",{value:"11-15",children:"11-15 yrs"}),n.jsx("option",{value:"16-20",children:"16-20 yrs"}),n.jsx("option",{value:"20+",children:"20+ yrs"})]})]}):n.jsx(Tn,{label:"Age Group",value:l.ageGroup||"Not set",disabled:!0})]})]})]}),n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-4",children:[n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Contact & Location"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(Tn,{label:"Email",value:t?u.email:l.email,onChange:j=>y("email",j),placeholder:"yourname@example.com",type:"email",helperText:t?"Optional":l.email?"":"Not provided",disabled:!t}),n.jsx(Tn,{label:"City",value:t?u.city:l.city,onChange:j=>y("city",j),placeholder:"Add your city name",disabled:!t}),n.jsx(Tn,{label:"State",value:t?u.state:l.state,onChange:j=>y("state",j),placeholder:"Your state/province",disabled:!t}),n.jsx(Tn,{label:"Country",value:t?u.country:l.country,onChange:j=>y("country",j),placeholder:"Your country",disabled:!t})]})]}),t?n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:f,className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Cancel"}),n.jsx("button",{onClick:b,disabled:!o,className:`flex-1 py-3 rounded-2xl font-semibold text-white shadow-lg
                         transition-all duration-200 ${o?"bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 cursor-pointer":"bg-gray-600 cursor-not-allowed opacity-50"}`,children:"Save Changes"})]}):n.jsx("button",{onClick:p,className:`w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Edit"})]})})]})}function Tn({label:e,value:t,onChange:r,disabled:s,placeholder:a,type:o="text",icon:i,helperText:l}){return n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:e}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:o,value:t||"",onChange:c=>r&&r(c.target.value),disabled:s,placeholder:a,className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                   text-white placeholder-white/30 transition-all duration-200
                   ${s?"opacity-50 cursor-not-allowed":"hover:bg-white/10 focus:bg-white/10 focus:border-white/30 focus:outline-none"}`}),i&&n.jsx("span",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/50",children:i})]}),l&&n.jsx("p",{className:"text-xs text-white/40 mt-1",children:l})]})}function ay(){const e=_e();return n.jsx(pc,{title:"Privacy Policy",subtitle:"Your data, your control",children:n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsx("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🔒"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Privacy Policy"}),n.jsx("p",{className:"text-white/60 text-lg mb-6",children:"Will be updated soon"}),n.jsxs("div",{className:"space-y-3 text-left text-white/50 text-sm",children:[n.jsx("p",{children:"• Your data is encrypted and secure"}),n.jsx("p",{children:"• We never share your personal information"}),n.jsx("p",{children:"• You can delete your account anytime"}),n.jsx("p",{children:"• Minimal data collection for best experience"})]}),n.jsx("button",{onClick:()=>e(-1),className:`mt-8 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Got it"})]})})})})}const oy=async e=>!!JSON.parse(localStorage.getItem("users")||"{}")[e],iy=e=>JSON.parse(localStorage.getItem("users")||"{}")[e],ly=()=>!!localStorage.getItem("currentUser");function cy(){const e=_e(),t=nt(),[r,s]=d.useState(()=>{var p;return sessionStorage.getItem("tempPhone")||((p=t.state)==null?void 0:p.phone)||""}),[a,o]=d.useState(()=>sessionStorage.getItem("tempCountryCode")||"+91"),[i,l]=d.useState(!1),[c,u]=d.useState("");d.useEffect(()=>{sessionStorage.setItem("tempPhone",r),sessionStorage.setItem("tempCountryCode",a)},[r,a]);const m=async()=>{u("");const p=r.replace(/\D/g,"");if(p.length!==10){u("Please enter a 10 digit phone number");return}l(!0);const f=a+p;await oy(f)?e("/auth/signin",{state:{phone:f}}):e("/auth/avatar",{state:{phone:f}}),l(!1)};return d.useEffect(()=>{var p,f;if(!((p=t.state)!=null&&p.preventAutoSubmit)&&!((f=t.state)!=null&&f.fromAvatar)&&r&&r.length===10){const b=setTimeout(()=>{m()},500);return()=>clearTimeout(b)}},[]),n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #aa529bff 0%, #6d4397ff 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"5%",left:"10%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"15%",right:"10%",animationDelay:"5s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",left:"15%",animationDelay:"10s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"75%",right:"20%",animationDelay:"15s"},children:"🎯"}),n.jsx("div",{className:"floating-icon",style:{top:"85%",left:"25%",animationDelay:"20s"},children:"🪙"})]}),n.jsx("div",{className:"mascot",style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:n.jsx("div",{style:{fontSize:"100px"},children:"🎮"})}),n.jsxs("div",{className:"content-card",children:[n.jsx("h1",{className:"title",children:"Ready to Play?"}),n.jsx("p",{className:"subtitle",children:"Enter your phone to start!"}),n.jsxs("div",{className:"phone-input-group",style:{display:"flex",gap:"8px",marginBottom:"24px",alignItems:"center",justifyContent:"center"},children:[n.jsxs("select",{className:"country-select",value:a,onChange:p=>o(p.target.value),style:{width:"auto",minWidth:"95px",padding:"16px 8px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",background:"white",transition:"all 0.3s",color:"#333",textAlign:"center"},children:[n.jsx("option",{value:"+91",children:"🇮🇳 +91"}),n.jsx("option",{value:"+1",children:"🇺🇸 +1"}),n.jsx("option",{value:"+44",children:"🇬🇧 +44"}),n.jsx("option",{value:"+86",children:"🇨🇳 +86"}),n.jsx("option",{value:"+81",children:"🇯🇵 +81"})]}),n.jsx("input",{type:"tel",className:"phone-input",placeholder:"Phone number",value:r,onChange:p=>{const f=p.target.value.replace(/\D/g,"");f.length<=10&&(s(f),c&&u(""))},maxLength:"10",inputMode:"numeric",pattern:"[0-9]*",style:{flex:1,padding:"16px",paddingLeft:"12px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"18px",fontWeight:"600",transition:"all 0.3s",background:"white",color:"#333",WebkitTextFillColor:"#333"}})]}),r.length>0&&r.length<10&&n.jsxs("p",{style:{color:"#f59e0b",fontSize:"14px",textAlign:"center",marginTop:"-16px",marginBottom:"16px"},children:["Enter ",10-r.length," more digit",10-r.length>1?"s":""]}),n.jsxs("button",{className:"submit-button",onClick:m,disabled:i,style:{width:"100%",padding:"18px",background:r.length===10?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:r.length===10?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[i?"Loading...":"Start Adventure!",n.jsx("span",{children:"→"})]}),c&&n.jsx("p",{className:"error-message",style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginTop:"12px",fontWeight:"600"},children:c})]})]})}function dy(){const e=nt(),t=_e(),{phone:r}=e.state||{},[s,a]=d.useState(""),[o,i]=d.useState(!1),[l,c]=d.useState(""),[u,m]=d.useState(!1),[p,f]=d.useState(!1),[b,y]=d.useState(""),j=iy(r),[C,v]=d.useState(!1),[h,g]=d.useState(""),[E,N]=d.useState(!1);d.useEffect(()=>{if(localStorage.getItem("rememberCredentials")==="true"&&f(!0),r){const O=JSON.parse(localStorage.getItem(`user_profile_${r}`)||"{}"),H=JSON.parse(localStorage.getItem("users")||"{}")[r]||{},q=O.name||H.username||(j==null?void 0:j.username)||"";y(q)}},[r,j]);const T=async()=>{if(!s){c("Please enter your password");return}m(!0),c(""),await new Promise(P=>setTimeout(P,500)),j&&j.password===s?(Wr.setCurrentUser(r),p&&localStorage.setItem("rememberCredentials","true"),t("/",{replace:!0})):(c("Wrong password"),m(!1),setTimeout(()=>c(""),3e3))},S=()=>{alert("OTP feature coming soon!")},x=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode");const P=(r==null?void 0:r.slice(-10))||"";t("/auth",{replace:!0,state:{phone:P,preventAutoSubmit:!0}})},w=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode"),t("/auth",{replace:!0,state:{isNewAccount:!0}})},k=P=>{P.key==="Enter"&&T()};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[n.jsx("button",{className:"back-button",onClick:x,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:P=>P.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:P=>P.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"10%",left:"5%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",right:"10%",animationDelay:"2s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"70%",left:"8%",animationDelay:"4s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"80%",right:"5%",animationDelay:"6s"},children:"🎯"})]}),n.jsxs("div",{className:"content-card",style:{background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"32px",width:"90%",maxWidth:"400px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)",margin:"0 auto"},children:[(j==null?void 0:j.avatar)&&n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px",animation:"bounce 2s infinite"},children:j.avatar.emoji}),n.jsxs("div",{className:"welcome-back",children:[n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Welcome Back! 👋"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"24px"},children:b?`Hey ${b}!`:"Good to see you again!"})]}),n.jsx("div",{className:"phone-display",style:{fontSize:"18px",fontWeight:"600",color:"#667eea",marginBottom:"24px",textAlign:"center",padding:"12px",background:"rgba(102, 126, 234, 0.1)",borderRadius:"12px"},children:r}),n.jsxs("div",{style:{position:"relative",marginBottom:"16px"},children:[n.jsx("input",{type:o?"text":"password",className:"phone-input",placeholder:"Enter your password",value:s,onChange:P=>{a(P.target.value),l&&c("")},onKeyPress:k,style:{width:"100%",paddingRight:"45px",border:l?"2px solid #ef4444":"2px solid #e2e8f0",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"},autoFocus:!0}),n.jsx("button",{type:"button",onClick:()=>i(!o),style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px",color:"#667eea"},"aria-label":o?"Hide password":"Show password",children:o?"👁️":"👁️‍🗨️"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[n.jsx("input",{type:"checkbox",id:"rememberMe",checked:p,onChange:P=>f(P.target.checked),style:{width:"18px",height:"18px",cursor:"pointer",accentColor:"#667eea"}}),n.jsx("label",{htmlFor:"rememberMe",style:{fontSize:"14px",color:"#64748b",cursor:"pointer",userSelect:"none"},children:"Remember me"})]}),l&&n.jsxs("div",{style:{color:"#f59e0b",fontSize:"13px",textAlign:"center",marginTop:"-12px",marginBottom:"16px",fontWeight:"500"},children:["⚠️ ",l]}),n.jsx("button",{className:"submit-button",onClick:T,disabled:u,style:{width:"100%",padding:"18px",background:u?"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:u?"not-allowed":"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"20px"},children:u?n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Signing in..."}),n.jsx("span",{className:"animate-spin",children:"⚙️"})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Sign In"}),n.jsx("span",{children:"🎮"})]})}),n.jsx("div",{className:"divider",style:{textAlign:"center",margin:"20px 0",position:"relative"},children:n.jsx("span",{className:"divider-text",style:{background:"rgba(255, 255, 255, 0.95)",padding:"0 16px",position:"relative",color:"#94a3b8",fontSize:"14px"},children:"OR"})}),n.jsx("button",{className:"otp-button",onClick:S,style:{width:"100%",padding:"16px",background:"white",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",color:"#667eea",cursor:"pointer",transition:"all 0.3s",marginBottom:"12px"},onMouseEnter:P=>{P.currentTarget.style.background="rgba(102, 126, 234, 0.05)",P.currentTarget.style.borderColor="#667eea"},onMouseLeave:P=>{P.currentTarget.style.background="white",P.currentTarget.style.borderColor="#e2e8f0"},children:"Send OTP Instead"}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px",paddingTop:"20px",borderTop:"1px solid #e2e8f0"},children:[n.jsx("a",{href:"#",onClick:P=>{P.preventDefault(),v(!0)},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Forgot password?"}),n.jsx("a",{href:"#",onClick:P=>{P.preventDefault(),w()},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Create new account"})]})]}),C&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:n.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🔐"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Reset Password"}),n.jsx("p",{className:"text-white/60 text-sm",children:"Enter your new password"})]}),n.jsxs("div",{className:"relative mb-4",children:[n.jsx("input",{type:o?"text":"password",value:h,onChange:P=>g(P.target.value),placeholder:"New password (min 6 characters)",className:`w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 
                        text-white placeholder-white/50`,autoFocus:!0}),n.jsx("button",{type:"button",onClick:()=>i(!o),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white",style:{background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px"},children:o?"👁️":"👁️‍🗨️"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{v(!1),g("")},className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Cancel"}),n.jsx("button",{onClick:()=>{if(h.length>=6){const P=JSON.parse(localStorage.getItem("users")||"{}");P[r]&&(P[r].password=h,localStorage.setItem("users",JSON.stringify(P)),v(!1),g(""),a(h),N(!0),setTimeout(()=>N(!1),2e3))}else alert("Password must be at least 6 characters")},className:`flex-1 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 
                         hover:from-green-600 hover:to-emerald-600 transition-all duration-200 
                         font-semibold text-white shadow-lg`,children:"Reset"})]})]})}),E&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsx("div",{className:"bg-green-500 rounded-2xl px-8 py-6 animate-bounce-in",children:n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 animate-scale-in",children:n.jsx("span",{className:"text-green-500 text-3xl",children:"✓"})}),n.jsx("p",{className:"text-white font-semibold text-lg",children:"Password reset successfully!"})]})})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function uy(){const e=nt(),t=_e(),{phone:r}=e.state||{},[s,a]=d.useState(()=>{var c;if((c=e.state)!=null&&c.avatar)return e.state.avatar;const l=sessionStorage.getItem("tempAvatar");return l?JSON.parse(l):null}),o=[{id:1,emoji:"🤖",name:"Robot",color:"#667eea"},{id:2,emoji:"🦄",name:"Unicorn",color:"#ec4899"},{id:3,emoji:"🐉",name:"Dragon",color:"#10b981"},{id:4,emoji:"🧙",name:"Wizard",color:"#8b5cf6"},{id:5,emoji:"👨‍🚀",name:"Astronaut",color:"#3b82f6"},{id:6,emoji:"🥷",name:"Ninja",color:"#1f2937"}];d.useEffect(()=>{s&&sessionStorage.setItem("tempAvatar",JSON.stringify(s))},[s]);const i=()=>{s&&t("/auth/username",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #1e3a8a 0%, #3730a3 35%, #6d28d9 70%, #a78bfa 100%)"},children:[n.jsx("button",{className:"back-button",onClick:()=>t("/auth",{state:{phone:r==null?void 0:r.replace(/^\+\d{1,3}/,""),fromAvatar:!0}}),style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.15)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:l=>l.target.style.background="rgba(255,255,255,0.25)",onMouseLeave:l=>l.target.style.background="rgba(255,255,255,0.15)",children:n.jsx("span",{style:{fontSize:"24px",color:"rgba(194, 128, 190, 0.9)"},children:"‹"})}),n.jsxs("div",{className:"content-card",style:{background:"rgba(248, 250, 252, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"24px 20px",width:"95%",maxWidth:"100%",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)"},children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot active",style:{background:"#3730a3"}}),n.jsx("div",{className:"dot",style:{background:"#bf89ceff"}})]}),n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #1e3a8a 0%, #6d28d9 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Pick Your Hero!"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"32px"},children:"Choose your quiz champion"}),n.jsx("div",{className:"avatar-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px",marginBottom:"32px",padding:"0",maxWidth:"500px",margin:"0 auto 32px auto"},children:o.map(l=>n.jsxs("div",{className:`avatar-card ${(s==null?void 0:s.id)===l.id?"selected":""}`,onClick:()=>a(l),style:{aspectRatio:"1",borderRadius:"20px",background:(s==null?void 0:s.id)===l.id?"linear-gradient(135deg, rgba(55, 48, 163, 0.1), rgba(109, 40, 217, 0.1))":"white",border:(s==null?void 0:s.id)===l.id?"3px solid #3730a3":"3px solid transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.3s",boxShadow:(s==null?void 0:s.id)===l.id?"0 4px 20px rgba(55, 48, 163, 0.2)":"0 2px 10px rgba(0, 0, 0, 0.05)",transform:(s==null?void 0:s.id)===l.id?"scale(1.05)":"scale(1)"},onMouseEnter:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1.05)",c.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.15)")},onMouseLeave:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1)",c.currentTarget.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.05)")},children:[n.jsx("div",{className:"avatar-emoji",style:{fontSize:"40px",marginBottom:"8px"},children:l.emoji}),n.jsx("div",{className:"avatar-name",style:{fontSize:"14px",fontWeight:"600",color:(s==null?void 0:s.id)===l.id?"#3730a3":"#64748b"},children:l.name})]},l.id))}),n.jsxs("button",{className:"submit-button",disabled:!s,onClick:i,style:{width:"100%",padding:"18px",background:s?"linear-gradient(135deg, #3730a3 0%, #6d28d9 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:s?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",boxShadow:s?"0 4px 20px rgba(55, 48, 163, 0.3)":"none"},onMouseEnter:l=>{s&&(l.currentTarget.style.transform="translateY(-2px)",l.currentTarget.style.boxShadow="0 6px 30px rgba(55, 48, 163, 0.4)")},onMouseLeave:l=>{s&&(l.currentTarget.style.transform="translateY(0)",l.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.3)")},children:["Continue",n.jsx("span",{children:"→"})]})]})]})}function my(){const e=nt(),t=_e(),{phone:r,avatar:s}=e.state||{},[a,o]=d.useState(""),[i,l]=d.useState(""),[c,u]=d.useState(""),[m,p]=d.useState(""),[f,b]=d.useState(""),y=[{value:"under-5",label:"Under 5 yrs"},{value:"5-10",label:"5-10 yrs"},{value:"11-15",label:"11-15 yrs"},{value:"16-20",label:"16-20 yrs"},{value:"20+",label:"20+ yrs"}],j=()=>{if(b(""),!a){b("Please enter your name");return}if(!i||i.length<6){b("Password must be at least 6 characters");return}if(!c){b("Please select your gender");return}if(!m){b("Please select your age group");return}const v=i||"123456",h=JSON.parse(localStorage.getItem("users")||"{}");h[r]={username:a,gender:c,ageGroup:m,avatar:s,password:v,phone:r,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(h)),localStorage.setItem("currentUser",JSON.stringify({phone:r,username:a,gender:c,ageGroup:m,avatar:s}));const g={name:a,level:1,coins:0,currentStreak:0,xp:0};localStorage.setItem("qp_player",JSON.stringify(g)),localStorage.setItem("userName",a),t("/welcome",{state:{username:a},replace:!0})},C=()=>{t("/auth/avatar",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #6b46c1 0%, #9333ea 50%, #ec4899 100%)"},children:[n.jsx("button",{className:"back-button",onClick:C,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:v=>v.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:v=>v.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"content-card",children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot"}),n.jsx("div",{className:"dot active",style:{background:"#9333ea"}})]}),n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px"},children:s==null?void 0:s.emoji}),n.jsx("h1",{className:"title",style:{background:"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Almost Done!"}),n.jsx("p",{className:"subtitle",children:"Tell us about yourself"}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("input",{type:"text",className:"phone-input",placeholder:"Enter your name...",value:a,onChange:v=>o(v.target.value),style:{width:"100%",marginBottom:"20px",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"}}),n.jsx("input",{type:"password",className:"phone-input",placeholder:"Create a password...",value:i,onChange:v=>l(v.target.value),style:{width:"100%",marginBottom:"20px",marginTop:"10px"}}),n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Gender"}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx("button",{onClick:()=>u("male"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="male"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="male"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="male"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👦 Male"}),n.jsx("button",{onClick:()=>u("female"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="female"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="female"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="female"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👧 Female"}),n.jsx("button",{onClick:()=>u("other"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="other"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="other"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="other"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"🌈 Other"})]})]}),n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Age Group"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px"},children:y.map(v=>n.jsx("button",{onClick:()=>p(v.value),style:{padding:"10px 4px",border:"2px solid",borderColor:m===v.value?"#9333ea":"#e9d5ff",borderRadius:"12px",background:m===v.value?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:m===v.value?"#9333ea":"#64748b",transition:"all 0.3s"},children:v.label},v.value))})]}),f&&n.jsx("div",{style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginBottom:"16px"},children:f})]}),n.jsx("button",{className:"submit-button",onClick:j,disabled:!a||!c||!m,style:{width:"100%",padding:"18px",background:a&&c&&m?"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:a&&c&&m?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:"Let's Start! 🚀"})]})]})}function fy(){var p;const e=_e(),t=nt(),[r,s]=d.useState(!1),[a,o]=d.useState(!1),[i,l]=d.useState(!1),c=((p=t.state)==null?void 0:p.username)||localStorage.getItem("userName")||"Champion",u=c.length>12;d.useEffect(()=>{sessionStorage.setItem("justSignedUp","true"),setTimeout(()=>s(!0),100),setTimeout(()=>o(!0),2e3)},[]);const m=()=>{l(!0),setTimeout(()=>{e("/",{replace:!0})},350)};return n.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity",style:{background:"radial-gradient(circle at center, #1a1a2e 0%, #0f0f0f 100%)",opacity:i?.3:1,transitionDuration:"400ms"},children:[n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(147, 51, 234, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out infinite"}}),n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(236, 72, 153, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 0.5s infinite"}}),n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 1s infinite"}}),n.jsx("div",{className:"absolute",style:{width:"80px",height:"80px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(147, 51, 234, 0.4))",boxShadow:"0 0 60px 20px rgba(147, 51, 234, 0.6)",animation:"glow 2s ease-in-out infinite"}})]}),n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:[...Array(12)].map((f,b)=>n.jsx("div",{className:"absolute",style:{width:"2px",height:"100%",background:"linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.3), transparent)",transform:`rotate(${b*30}deg)`,animation:`fadeInOut 2.5s ease-in-out ${b*.1}s infinite`}},b))}),n.jsx("div",{className:`absolute z-10 transition-all duration-1000
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
      `})]})}function hy(){return d.useState(!1),null}const py={name:(()=>{const e=JSON.parse(localStorage.getItem("currentUser")||"{}");return e.username?e.username.split(" ")[0]:"Player"})(),avatar:"wizard",level:1,totalXP:0,coins:0,energy:ut.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function xy(){const[e,t]=d.useState(()=>{const u=localStorage.getItem(ut.STORAGE_KEYS.PLAYER),m=JSON.parse(localStorage.getItem("currentUser")||"{}");if(u){const p=JSON.parse(u);return m.username&&(p.name=m.username.split(" ")[0]),p}return py});d.useEffect(()=>{localStorage.setItem(ut.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<ut.MAX_ENERGY&&e.energyRegenAt){const u=setInterval(()=>{const m=Date.now();m>=e.energyRegenAt&&t(p=>({...p,energy:Math.min(p.energy+1,ut.MAX_ENERGY),energyRegenAt:p.energy+1<ut.MAX_ENERGY?m+ut.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(u)}},[e.energy,e.energyRegenAt]);const r=d.useCallback(u=>{t(m=>{const p=m.totalXP+u,f=Id(m.totalXP),b=Id(p);let y=[...m.unlockedAvatars];return b>f&&ut.AVATARS.forEach(j=>{j.unlockLevel===b&&!y.includes(j.id)&&y.push(j.id)}),{...m,totalXP:p,level:b,unlockedAvatars:y}})},[]),s=d.useCallback(u=>{const p=new Error().stack;console.log("[COINS DEBUG] ================"),console.log("[COINS DEBUG] Amount:",u),console.log("[COINS DEBUG] Called from:",p.split(`
`)[2]),console.log("[COINS DEBUG] Full trace:",p),t(f=>(console.log("[COINS DEBUG] Current:",f.coins,"→ New:",f.coins+u),{...f,coins:f.coins+u}))},[]),a=d.useCallback((u=1)=>e.energy<u?!1:(t(m=>({...m,energy:m.energy-u,energyRegenAt:m.energyRegenAt||Date.now()+ut.ENERGY_REGEN_TIME})),!0),[e.energy]),o=d.useCallback(u=>{t(m=>{const p=u?m.comboStreak+1:0;return{...m,comboStreak:p,bestCombo:Math.max(m.bestCombo,p)}})},[]),i=d.useCallback(()=>{t(u=>({...u,comboStreak:0}))},[]),l=d.useCallback(u=>{e.unlockedAvatars.includes(u)&&t(m=>({...m,avatar:u}))},[e.unlockedAvatars]),c=d.useCallback(()=>{const u=new Date().toDateString();t(m=>{if(m.lastPlayedDate===u)return m;const p=new Date;p.setDate(p.getDate()-1);const f=p.toDateString();let b=m.currentStreak;return m.lastPlayedDate===f?b=m.currentStreak+1:(m.lastPlayedDate,b=1),{...m,currentStreak:b,bestStreak:Math.max(m.bestStreak,b),totalDays:m.totalDays+1,lastPlayedDate:u}})},[]);return{player:e,addXP:r,addCoins:s,useEnergy:a,updateCombo:o,resetCombo:i,changeAvatar:l,updateDailyStreak:c,levelProgress:Jx(e.totalXP)}}window.history.replaceState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.history.pushState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.userService=Wr;const $f=d.createContext(null),kn=()=>{const e=d.useContext($f);if(!e)throw new Error("useGame must be used within GameProvider");return e};function gy({children:e}){const t=xy();return n.jsx($f.Provider,{value:t,children:e})}function vy(){const[e,t]=d.useState(!1),[r,s]=d.useState(!1);return d.useEffect(()=>{(()=>{const o=ly();s(o),t(!0)})()},[]),d.useEffect(()=>{let a=0,o=null,i=null;return(async()=>{try{i=await Jd.addListener("backButton",()=>{const c=window.location.pathname;c==="/"||c==="/home"?(a++,a===1?(console.log("Press back again to exit"),o=setTimeout(()=>{a=0},2e3)):a===2&&(clearTimeout(o),Jd.minimizeApp())):window.history.back()})}catch(c){console.error("Error setting up back button handler:",c)}})(),()=>{i&&typeof i.remove=="function"&&i.remove(),o&&clearTimeout(o)}},[]),e?!r&&!window.location.pathname.startsWith("/auth")?(window.location.href="/auth",null):n.jsxs(gy,{children:[n.jsxs(ux,{children:[n.jsx(Le,{path:"/auth",element:n.jsx(cy,{})}),n.jsx(Le,{path:"/auth/signin",element:n.jsx(dy,{})}),n.jsx(Le,{path:"/auth/avatar",element:n.jsx(uy,{})}),n.jsx(Le,{path:"/auth/username",element:n.jsx(my,{})}),n.jsx(Le,{path:"/welcome",element:n.jsx(fy,{})}),n.jsxs(Le,{element:n.jsx(Hx,{}),children:[n.jsx(Le,{path:"/",element:n.jsx(zd,{})}),n.jsx(Le,{path:"/play",element:n.jsx(qg,{})}),n.jsx(Le,{path:"/play/party",element:n.jsx(mv,{})}),n.jsx(Le,{path:"/profile",element:n.jsx(vv,{})}),n.jsx(Le,{path:"/profile/leaderboard",element:n.jsx(yv,{})}),n.jsx(Le,{path:"/profile/history",element:n.jsx(Sv,{})}),n.jsx(Le,{path:"/profile/rewards",element:n.jsx($v,{})}),n.jsx(Le,{path:"/profile/badges",element:n.jsx(Bv,{})}),n.jsx(Le,{path:"/profile/achievements",element:n.jsx(qv,{})}),n.jsx(Le,{path:"/profile/streaks",element:n.jsx(Qv,{})}),n.jsx(Le,{path:"/profile/quests",element:n.jsx(Wv,{})}),n.jsx(Le,{path:"/profile/settings",element:n.jsx(Gv,{})}),n.jsx(Le,{path:"/profile/edit",element:n.jsx(sy,{})}),n.jsx(Le,{path:"/profile/privacy",element:n.jsx(ay,{})}),n.jsx(Le,{path:"/swipe",element:n.jsx(hv,{})}),n.jsx(Le,{path:"/leaders",element:n.jsx(lx,{to:"/profile/leaderboard",replace:!0})}),n.jsx(Le,{path:"/quiz/:category",element:n.jsx(sv,{})}),n.jsx(Le,{path:"/quiz/play",element:n.jsx(xv,{})}),n.jsx(Le,{path:"/practice/start",element:n.jsx(gv,{})}),n.jsx(Le,{path:"*",element:n.jsx(zd,{})})]})]}),n.jsx(hy,{})]}):n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#000"},children:n.jsx("div",{style:{color:"#fff"},children:"Loading..."})})}ui.createRoot(document.getElementById("root")).render(n.jsx(gt.StrictMode,{children:n.jsx(Dx,{children:n.jsx(vy,{})})}));export{Ff as W,Uf as c,Zd as g};
