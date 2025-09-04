(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();var Bm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zd={exports:{}},di={},eu={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Us=Symbol.for("react.element"),Um=Symbol.for("react.portal"),qm=Symbol.for("react.fragment"),Qm=Symbol.for("react.strict_mode"),Ym=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Hm=Symbol.for("react.context"),Gm=Symbol.for("react.forward_ref"),Km=Symbol.for("react.suspense"),Vm=Symbol.for("react.memo"),Xm=Symbol.for("react.lazy"),xc=Symbol.iterator;function Jm(e){return e===null||typeof e!="object"?null:(e=xc&&e[xc]||e["@@iterator"],typeof e=="function"?e:null)}var tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nu=Object.assign,ru={};function Yr(e,t,r){this.props=e,this.context=t,this.refs=ru,this.updater=r||tu}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function su(){}su.prototype=Yr.prototype;function cl(e,t,r){this.props=e,this.context=t,this.refs=ru,this.updater=r||tu}var dl=cl.prototype=new su;dl.constructor=cl;nu(dl,Yr.prototype);dl.isPureReactComponent=!0;var gc=Array.isArray,au=Object.prototype.hasOwnProperty,ul={current:null},iu={key:!0,ref:!0,__self:!0,__source:!0};function ou(e,t,r){var s,a={},i=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)au.call(t,s)&&!iu.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:Us,type:e,key:i,ref:o,props:a,_owner:ul.current}}function Zm(e,t){return{$$typeof:Us,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Us}function e0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var vc=/\/+/g;function Ri(e,t){return typeof e=="object"&&e!==null&&e.key!=null?e0(""+e.key):t.toString(36)}function ja(e,t,r,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Us:case Um:o=!0}}if(o)return o=e,a=a(o),e=s===""?"."+Ri(o,0):s,gc(a)?(r="",e!=null&&(r=e.replace(vc,"$&/")+"/"),ja(a,t,r,"",function(u){return u})):a!=null&&(fl(a)&&(a=Zm(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(vc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,s=s===""?".":s+":",gc(e))for(var l=0;l<e.length;l++){i=e[l];var c=s+Ri(i,l);o+=ja(i,t,r,c,a)}else if(c=Jm(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=s+Ri(i,l++),o+=ja(i,t,r,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ks(e,t,r){if(e==null)return e;var s=[],a=0;return ja(e,s,"","",function(i){return t.call(r,i,a++)}),s}function t0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var jt={current:null},Na={transition:null},n0={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Na,ReactCurrentOwner:ul};function lu(){throw Error("act(...) is not supported in production builds of React.")}Ne.Children={map:Ks,forEach:function(e,t,r){Ks(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Ks(e,function(){t++}),t},toArray:function(e){return Ks(e,function(t){return t})||[]},only:function(e){if(!fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ne.Component=Yr;Ne.Fragment=qm;Ne.Profiler=Ym;Ne.PureComponent=cl;Ne.StrictMode=Qm;Ne.Suspense=Km;Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0;Ne.act=lu;Ne.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=nu({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=ul.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)au.call(t,c)&&!iu.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:Us,type:e.type,key:a,ref:i,props:s,_owner:o}};Ne.createContext=function(e){return e={$$typeof:Hm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wm,_context:e},e.Consumer=e};Ne.createElement=ou;Ne.createFactory=function(e){var t=ou.bind(null,e);return t.type=e,t};Ne.createRef=function(){return{current:null}};Ne.forwardRef=function(e){return{$$typeof:Gm,render:e}};Ne.isValidElement=fl;Ne.lazy=function(e){return{$$typeof:Xm,_payload:{_status:-1,_result:e},_init:t0}};Ne.memo=function(e,t){return{$$typeof:Vm,type:e,compare:t===void 0?null:t}};Ne.startTransition=function(e){var t=Na.transition;Na.transition={};try{e()}finally{Na.transition=t}};Ne.unstable_act=lu;Ne.useCallback=function(e,t){return jt.current.useCallback(e,t)};Ne.useContext=function(e){return jt.current.useContext(e)};Ne.useDebugValue=function(){};Ne.useDeferredValue=function(e){return jt.current.useDeferredValue(e)};Ne.useEffect=function(e,t){return jt.current.useEffect(e,t)};Ne.useId=function(){return jt.current.useId()};Ne.useImperativeHandle=function(e,t,r){return jt.current.useImperativeHandle(e,t,r)};Ne.useInsertionEffect=function(e,t){return jt.current.useInsertionEffect(e,t)};Ne.useLayoutEffect=function(e,t){return jt.current.useLayoutEffect(e,t)};Ne.useMemo=function(e,t){return jt.current.useMemo(e,t)};Ne.useReducer=function(e,t,r){return jt.current.useReducer(e,t,r)};Ne.useRef=function(e){return jt.current.useRef(e)};Ne.useState=function(e){return jt.current.useState(e)};Ne.useSyncExternalStore=function(e,t,r){return jt.current.useSyncExternalStore(e,t,r)};Ne.useTransition=function(){return jt.current.useTransition()};Ne.version="18.3.1";eu.exports=Ne;var d=eu.exports;const yt=Jd(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=d,s0=Symbol.for("react.element"),a0=Symbol.for("react.fragment"),i0=Object.prototype.hasOwnProperty,o0=r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l0={key:!0,ref:!0,__self:!0,__source:!0};function cu(e,t,r){var s,a={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)i0.call(t,s)&&!l0.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:s0,type:e,key:i,ref:o,props:a,_owner:o0.current}}di.Fragment=a0;di.jsx=cu;di.jsxs=cu;Zd.exports=di;var n=Zd.exports,uo={},du={exports:{}},Lt={},uu={exports:{}},fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,R){var $=_.length;_.push(R);e:for(;0<$;){var z=$-1>>>1,D=_[z];if(0<a(D,R))_[z]=R,_[$]=D,$=z;else break e}}function r(_){return _.length===0?null:_[0]}function s(_){if(_.length===0)return null;var R=_[0],$=_.pop();if($!==R){_[0]=$;e:for(var z=0,D=_.length,O=D>>>1;z<O;){var Z=2*(z+1)-1,re=_[Z],L=Z+1,V=_[L];if(0>a(re,$))L<D&&0>a(V,re)?(_[z]=V,_[L]=$,z=L):(_[z]=re,_[Z]=$,z=Z);else if(L<D&&0>a(V,$))_[z]=V,_[L]=$,z=L;else break e}}return R}function a(_,R){var $=_.sortIndex-R.sortIndex;return $!==0?$:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,p=null,m=3,b=!1,y=!1,j=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(_){for(var R=r(u);R!==null;){if(R.callback===null)s(u);else if(R.startTime<=_)s(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=r(u)}}function N(_){if(j=!1,x(_),!y)if(r(c)!==null)y=!0,Y(E);else{var R=r(u);R!==null&&H(N,R.startTime-_)}}function E(_,R){y=!1,j&&(j=!1,v(g),g=-1),b=!0;var $=m;try{for(x(R),p=r(c);p!==null&&(!(p.expirationTime>R)||_&&!P());){var z=p.callback;if(typeof z=="function"){p.callback=null,m=p.priorityLevel;var D=z(p.expirationTime<=R);R=e.unstable_now(),typeof D=="function"?p.callback=D:p===r(c)&&s(c),x(R)}else s(c);p=r(c)}if(p!==null)var O=!0;else{var Z=r(u);Z!==null&&H(N,Z.startTime-R),O=!1}return O}finally{p=null,m=$,b=!1}}var T=!1,S=null,g=-1,w=5,k=-1;function P(){return!(e.unstable_now()-k<w)}function A(){if(S!==null){var _=e.unstable_now();k=_;var R=!0;try{R=S(!0,_)}finally{R?U():(T=!1,S=null)}}else T=!1}var U;if(typeof h=="function")U=function(){h(A)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,q=G.port2;G.port1.onmessage=A,U=function(){q.postMessage(null)}}else U=function(){C(A,0)};function Y(_){S=_,T||(T=!0,U())}function H(_,R){g=C(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||b||(y=!0,Y(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var $=m;m=R;try{return _()}finally{m=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var $=m;m=_;try{return R()}finally{m=$}},e.unstable_scheduleCallback=function(_,R,$){var z=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?z+$:z):$=z,_){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=$+D,_={id:f++,callback:R,priorityLevel:_,startTime:$,expirationTime:D,sortIndex:-1},$>z?(_.sortIndex=$,t(u,_),r(c)===null&&_===r(u)&&(j?(v(g),g=-1):j=!0,H(N,$-z))):(_.sortIndex=D,t(c,_),y||b||(y=!0,Y(E))),_},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(_){var R=m;return function(){var $=m;m=R;try{return _.apply(this,arguments)}finally{m=$}}}})(fu);uu.exports=fu;var c0=uu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0=d,It=c0;function J(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mu=new Set,ks={};function fr(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(ks[e]=t,e=0;e<t.length;e++)mu.add(t[e])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fo=Object.prototype.hasOwnProperty,u0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yc={},bc={};function f0(e){return fo.call(bc,e)?!0:fo.call(yc,e)?!1:u0.test(e)?bc[e]=!0:(yc[e]=!0,!1)}function m0(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function h0(e,t,r,s){if(t===null||typeof t>"u"||m0(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Nt(e,t,r,s,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ct[e]=new Nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ct[t]=new Nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ct[e]=new Nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ct[e]=new Nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ct[e]=new Nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ct[e]=new Nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ct[e]=new Nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ct[e]=new Nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ct[e]=new Nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ml=/[\-:]([a-z])/g;function hl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ml,hl);ct[t]=new Nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ml,hl);ct[t]=new Nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ml,hl);ct[t]=new Nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ct[e]=new Nt(e,1,!1,e.toLowerCase(),null,!1,!1)});ct.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ct[e]=new Nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function pl(e,t,r,s){var a=ct.hasOwnProperty(t)?ct[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(h0(t,r,a,s)&&(r=null),s||a===null?f0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var jn=d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),vr=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),xl=Symbol.for("react.strict_mode"),mo=Symbol.for("react.profiler"),hu=Symbol.for("react.provider"),pu=Symbol.for("react.context"),gl=Symbol.for("react.forward_ref"),ho=Symbol.for("react.suspense"),po=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),xu=Symbol.for("react.offscreen"),wc=Symbol.iterator;function Xr(e){return e===null||typeof e!="object"?null:(e=wc&&e[wc]||e["@@iterator"],typeof e=="function"?e:null)}var He=Object.assign,_i;function ds(e){if(_i===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);_i=t&&t[1]||""}return`
`+_i+e}var Ai=!1;function Ii(e,t){if(!e||Ai)return"";Ai=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=s.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ai=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ds(e):""}function p0(e){switch(e.tag){case 5:return ds(e.type);case 16:return ds("Lazy");case 13:return ds("Suspense");case 19:return ds("SuspenseList");case 0:case 2:case 15:return e=Ii(e.type,!1),e;case 11:return e=Ii(e.type.render,!1),e;case 1:return e=Ii(e.type,!0),e;default:return""}}function xo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yr:return"Fragment";case vr:return"Portal";case mo:return"Profiler";case xl:return"StrictMode";case ho:return"Suspense";case po:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pu:return(e.displayName||"Context")+".Consumer";case hu:return(e._context.displayName||"Context")+".Provider";case gl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vl:return t=e.displayName||null,t!==null?t:xo(e.type)||"Memo";case Rn:t=e._payload,e=e._init;try{return xo(e(t))}catch{}}return null}function x0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xo(t);case 8:return t===xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function g0(e){var t=gu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){s=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){e._valueTracker||(e._valueTracker=g0(e))}function vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=gu(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function go(e,t){var r=t.checked;return He({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function jc(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=Yn(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yu(e,t){t=t.checked,t!=null&&pl(e,"checked",t,!1)}function vo(e,t){yu(e,t);var r=Yn(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yo(e,t.type,r):t.hasOwnProperty("defaultValue")&&yo(e,t.type,Yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function yo(e,t,r){(t!=="number"||Oa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var us=Array.isArray;function Rr(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Yn(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function bo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(J(91));return He({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(J(92));if(us(r)){if(1<r.length)throw Error(J(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Yn(r)}}function bu(e,t){var r=Yn(t.value),s=Yn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function Sc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Js,ju=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Js=Js||document.createElement("div"),Js.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Js.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ss(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v0=["Webkit","ms","Moz","O"];Object.keys(hs).forEach(function(e){v0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hs[t]=hs[e]})});function Nu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||hs.hasOwnProperty(e)&&hs[e]?(""+t).trim():t+"px"}function ku(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=Nu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var y0=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jo(e,t){if(t){if(y0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(J(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(J(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(J(61))}if(t.style!=null&&typeof t.style!="object")throw Error(J(62))}}function No(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ko=null;function yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var So=null,_r=null,Ar=null;function Cc(e){if(e=Ys(e)){if(typeof So!="function")throw Error(J(280));var t=e.stateNode;t&&(t=pi(t),So(e.stateNode,e.type,t))}}function Su(e){_r?Ar?Ar.push(e):Ar=[e]:_r=e}function Cu(){if(_r){var e=_r,t=Ar;if(Ar=_r=null,Cc(e),t)for(e=0;e<t.length;e++)Cc(t[e])}}function Eu(e,t){return e(t)}function Pu(){}var Li=!1;function Tu(e,t,r){if(Li)return e(t,r);Li=!0;try{return Eu(e,t,r)}finally{Li=!1,(_r!==null||Ar!==null)&&(Pu(),Cu())}}function Cs(e,t){var r=e.stateNode;if(r===null)return null;var s=pi(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(J(231,t,typeof r));return r}var Co=!1;if(gn)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){Co=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{Co=!1}function b0(e,t,r,s,a,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var ps=!1,Fa=null,$a=!1,Eo=null,w0={onError:function(e){ps=!0,Fa=e}};function j0(e,t,r,s,a,i,o,l,c){ps=!1,Fa=null,b0.apply(w0,arguments)}function N0(e,t,r,s,a,i,o,l,c){if(j0.apply(this,arguments),ps){if(ps){var u=Fa;ps=!1,Fa=null}else throw Error(J(198));$a||($a=!0,Eo=u)}}function mr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ru(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ec(e){if(mr(e)!==e)throw Error(J(188))}function k0(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(J(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return Ec(a),e;if(i===s)return Ec(a),t;i=i.sibling}throw Error(J(188))}if(r.return!==s.return)r=a,s=i;else{for(var o=!1,l=a.child;l;){if(l===r){o=!0,r=a,s=i;break}if(l===s){o=!0,s=a,r=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===r){o=!0,r=i,s=a;break}if(l===s){o=!0,s=i,r=a;break}l=l.sibling}if(!o)throw Error(J(189))}}if(r.alternate!==s)throw Error(J(190))}if(r.tag!==3)throw Error(J(188));return r.stateNode.current===r?e:t}function _u(e){return e=k0(e),e!==null?Au(e):null}function Au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Au(e);if(t!==null)return t;e=e.sibling}return null}var Iu=It.unstable_scheduleCallback,Pc=It.unstable_cancelCallback,S0=It.unstable_shouldYield,C0=It.unstable_requestPaint,Ve=It.unstable_now,E0=It.unstable_getCurrentPriorityLevel,bl=It.unstable_ImmediatePriority,Lu=It.unstable_UserBlockingPriority,Ba=It.unstable_NormalPriority,P0=It.unstable_LowPriority,Du=It.unstable_IdlePriority,ui=null,an=null;function T0(e){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(ui,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:A0,R0=Math.log,_0=Math.LN2;function A0(e){return e>>>=0,e===0?32:31-(R0(e)/_0|0)|0}var Zs=64,ea=4194304;function fs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ua(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~a;l!==0?s=fs(l):(i&=o,i!==0&&(s=fs(i)))}else o=r&~a,o!==0?s=fs(o):i!==0&&(s=fs(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-Vt(t),a=1<<r,s|=e[r],t&=~a;return s}function I0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L0(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Vt(i),l=1<<o,c=a[o];c===-1?(!(l&r)||l&s)&&(a[o]=I0(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function Po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zu(){var e=Zs;return Zs<<=1,!(Zs&4194240)&&(Zs=64),e}function Di(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function qs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=r}function D0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Vt(r),i=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~i}}function wl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Vt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var _e=0;function Mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ou,jl,Fu,$u,Bu,To=!1,ta=[],Mn=null,On=null,Fn=null,Es=new Map,Ps=new Map,In=[],z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tc(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ps.delete(t.pointerId)}}function Zr(e,t,r,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ys(t),t!==null&&jl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function M0(e,t,r,s,a){switch(t){case"focusin":return Mn=Zr(Mn,e,t,r,s,a),!0;case"dragenter":return On=Zr(On,e,t,r,s,a),!0;case"mouseover":return Fn=Zr(Fn,e,t,r,s,a),!0;case"pointerover":var i=a.pointerId;return Es.set(i,Zr(Es.get(i)||null,e,t,r,s,a)),!0;case"gotpointercapture":return i=a.pointerId,Ps.set(i,Zr(Ps.get(i)||null,e,t,r,s,a)),!0}return!1}function Uu(e){var t=Zn(e.target);if(t!==null){var r=mr(t);if(r!==null){if(t=r.tag,t===13){if(t=Ru(r),t!==null){e.blockedOn=t,Bu(e.priority,function(){Fu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ka(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ro(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);ko=s,r.target.dispatchEvent(s),ko=null}else return t=Ys(r),t!==null&&jl(t),e.blockedOn=r,!1;t.shift()}return!0}function Rc(e,t,r){ka(e)&&r.delete(t)}function O0(){To=!1,Mn!==null&&ka(Mn)&&(Mn=null),On!==null&&ka(On)&&(On=null),Fn!==null&&ka(Fn)&&(Fn=null),Es.forEach(Rc),Ps.forEach(Rc)}function es(e,t){e.blockedOn===t&&(e.blockedOn=null,To||(To=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,O0)))}function Ts(e){function t(a){return es(a,e)}if(0<ta.length){es(ta[0],e);for(var r=1;r<ta.length;r++){var s=ta[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Mn!==null&&es(Mn,e),On!==null&&es(On,e),Fn!==null&&es(Fn,e),Es.forEach(t),Ps.forEach(t),r=0;r<In.length;r++)s=In[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<In.length&&(r=In[0],r.blockedOn===null);)Uu(r),r.blockedOn===null&&In.shift()}var Ir=jn.ReactCurrentBatchConfig,qa=!0;function F0(e,t,r,s){var a=_e,i=Ir.transition;Ir.transition=null;try{_e=1,Nl(e,t,r,s)}finally{_e=a,Ir.transition=i}}function $0(e,t,r,s){var a=_e,i=Ir.transition;Ir.transition=null;try{_e=4,Nl(e,t,r,s)}finally{_e=a,Ir.transition=i}}function Nl(e,t,r,s){if(qa){var a=Ro(e,t,r,s);if(a===null)Yi(e,t,s,Qa,r),Tc(e,s);else if(M0(a,e,t,r,s))s.stopPropagation();else if(Tc(e,s),t&4&&-1<z0.indexOf(e)){for(;a!==null;){var i=Ys(a);if(i!==null&&Ou(i),i=Ro(e,t,r,s),i===null&&Yi(e,t,s,Qa,r),i===a)break;a=i}a!==null&&s.stopPropagation()}else Yi(e,t,s,null,r)}}var Qa=null;function Ro(e,t,r,s){if(Qa=null,e=yl(s),e=Zn(e),e!==null)if(t=mr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ru(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qa=e,null}function qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E0()){case bl:return 1;case Lu:return 4;case Ba:case P0:return 16;case Du:return 536870912;default:return 16}default:return 16}}var Dn=null,kl=null,Sa=null;function Qu(){if(Sa)return Sa;var e,t=kl,r=t.length,s,a="value"in Dn?Dn.value:Dn.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(s=1;s<=o&&t[r-s]===a[i-s];s++);return Sa=a.slice(e,1<s?1-s:void 0)}function Ca(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function na(){return!0}function _c(){return!1}function Dt(e){function t(r,s,a,i,o){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?na:_c,this.isPropagationStopped=_c,this}return He(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Dt(Wr),Qs=He({},Wr,{view:0,detail:0}),B0=Dt(Qs),zi,Mi,ts,fi=He({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ts&&(ts&&e.type==="mousemove"?(zi=e.screenX-ts.screenX,Mi=e.screenY-ts.screenY):Mi=zi=0,ts=e),zi)},movementY:function(e){return"movementY"in e?e.movementY:Mi}}),Ac=Dt(fi),U0=He({},fi,{dataTransfer:0}),q0=Dt(U0),Q0=He({},Qs,{relatedTarget:0}),Oi=Dt(Q0),Y0=He({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=Dt(Y0),H0=He({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G0=Dt(H0),K0=He({},Wr,{data:0}),Ic=Dt(K0),V0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=J0[e])?!!t[e]:!1}function Cl(){return Z0}var eh=He({},Qs,{key:function(e){if(e.key){var t=V0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ca(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?X0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?Ca(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ca(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),th=Dt(eh),nh=He({},fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lc=Dt(nh),rh=He({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),sh=Dt(rh),ah=He({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ih=Dt(ah),oh=He({},fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lh=Dt(oh),ch=[9,13,27,32],El=gn&&"CompositionEvent"in window,xs=null;gn&&"documentMode"in document&&(xs=document.documentMode);var dh=gn&&"TextEvent"in window&&!xs,Yu=gn&&(!El||xs&&8<xs&&11>=xs),Dc=String.fromCharCode(32),zc=!1;function Wu(e,t){switch(e){case"keyup":return ch.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function uh(e,t){switch(e){case"compositionend":return Hu(t);case"keypress":return t.which!==32?null:(zc=!0,Dc);case"textInput":return e=t.data,e===Dc&&zc?null:e;default:return null}}function fh(e,t){if(br)return e==="compositionend"||!El&&Wu(e,t)?(e=Qu(),Sa=kl=Dn=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&t.locale!=="ko"?null:t.data;default:return null}}var mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mh[e.type]:t==="textarea"}function Gu(e,t,r,s){Su(s),t=Ya(t,"onChange"),0<t.length&&(r=new Sl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var gs=null,Rs=null;function hh(e){af(e,0)}function mi(e){var t=Nr(e);if(vu(t))return e}function ph(e,t){if(e==="change")return t}var Ku=!1;if(gn){var Fi;if(gn){var $i="oninput"in document;if(!$i){var Oc=document.createElement("div");Oc.setAttribute("oninput","return;"),$i=typeof Oc.oninput=="function"}Fi=$i}else Fi=!1;Ku=Fi&&(!document.documentMode||9<document.documentMode)}function Fc(){gs&&(gs.detachEvent("onpropertychange",Vu),Rs=gs=null)}function Vu(e){if(e.propertyName==="value"&&mi(Rs)){var t=[];Gu(t,Rs,e,yl(e)),Tu(hh,t)}}function xh(e,t,r){e==="focusin"?(Fc(),gs=t,Rs=r,gs.attachEvent("onpropertychange",Vu)):e==="focusout"&&Fc()}function gh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mi(Rs)}function vh(e,t){if(e==="click")return mi(t)}function yh(e,t){if(e==="input"||e==="change")return mi(t)}function bh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jt=typeof Object.is=="function"?Object.is:bh;function _s(e,t){if(Jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!fo.call(t,a)||!Jt(e[a],t[a]))return!1}return!0}function $c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bc(e,t){var r=$c(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=$c(r)}}function Xu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ju(){for(var e=window,t=Oa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Oa(e.document)}return t}function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wh(e){var t=Ju(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Xu(r.ownerDocument.documentElement,r)){if(s!==null&&Pl(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=Bc(r,i);var o=Bc(r,s);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jh=gn&&"documentMode"in document&&11>=document.documentMode,wr=null,_o=null,vs=null,Ao=!1;function Uc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ao||wr==null||wr!==Oa(s)||(s=wr,"selectionStart"in s&&Pl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),vs&&_s(vs,s)||(vs=s,s=Ya(_o,"onSelect"),0<s.length&&(t=new Sl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=wr)))}function ra(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var jr={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},Bi={},Zu={};gn&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function hi(e){if(Bi[e])return Bi[e];if(!jr[e])return e;var t=jr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Zu)return Bi[e]=t[r];return e}var ef=hi("animationend"),tf=hi("animationiteration"),nf=hi("animationstart"),rf=hi("transitionend"),sf=new Map,qc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(e,t){sf.set(e,t),fr(t,[e])}for(var Ui=0;Ui<qc.length;Ui++){var qi=qc[Ui],Nh=qi.toLowerCase(),kh=qi[0].toUpperCase()+qi.slice(1);Hn(Nh,"on"+kh)}Hn(ef,"onAnimationEnd");Hn(tf,"onAnimationIteration");Hn(nf,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(rf,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function Qc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,N0(s,t,void 0,e),e.currentTarget=null}function af(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var o=s.length-1;0<=o;o--){var l=s[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&a.isPropagationStopped())break e;Qc(a,l,u),i=c}else for(o=0;o<s.length;o++){if(l=s[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&a.isPropagationStopped())break e;Qc(a,l,u),i=c}}}if($a)throw e=Eo,$a=!1,Eo=null,e}function $e(e,t){var r=t[Mo];r===void 0&&(r=t[Mo]=new Set);var s=e+"__bubble";r.has(s)||(of(t,e,2,!1),r.add(s))}function Qi(e,t,r){var s=0;t&&(s|=4),of(r,e,s,t)}var sa="_reactListening"+Math.random().toString(36).slice(2);function As(e){if(!e[sa]){e[sa]=!0,mu.forEach(function(r){r!=="selectionchange"&&(Sh.has(r)||Qi(r,!1,e),Qi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sa]||(t[sa]=!0,Qi("selectionchange",!1,t))}}function of(e,t,r,s){switch(qu(t)){case 1:var a=F0;break;case 4:a=$0;break;default:a=Nl}r=a.bind(null,t,r,e),a=void 0,!Co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Yi(e,t,r,s,a){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=s.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Zn(l),o===null)return;if(c=o.tag,c===5||c===6){s=i=o;continue e}l=l.parentNode}}s=s.return}Tu(function(){var u=i,f=yl(r),p=[];e:{var m=sf.get(e);if(m!==void 0){var b=Sl,y=e;switch(e){case"keypress":if(Ca(r)===0)break e;case"keydown":case"keyup":b=th;break;case"focusin":y="focus",b=Oi;break;case"focusout":y="blur",b=Oi;break;case"beforeblur":case"afterblur":b=Oi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=sh;break;case ef:case tf:case nf:b=W0;break;case rf:b=ih;break;case"scroll":b=B0;break;case"wheel":b=lh;break;case"copy":case"cut":case"paste":b=G0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Lc}var j=(t&4)!==0,C=!j&&e==="scroll",v=j?m!==null?m+"Capture":null:m;j=[];for(var h=u,x;h!==null;){x=h;var N=x.stateNode;if(x.tag===5&&N!==null&&(x=N,v!==null&&(N=Cs(h,v),N!=null&&j.push(Is(h,N,x)))),C)break;h=h.return}0<j.length&&(m=new b(m,y,null,r,f),p.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&r!==ko&&(y=r.relatedTarget||r.fromElement)&&(Zn(y)||y[vn]))break e;if((b||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,b?(y=r.relatedTarget||r.toElement,b=u,y=y?Zn(y):null,y!==null&&(C=mr(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(b=null,y=u),b!==y)){if(j=Ac,N="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(j=Lc,N="onPointerLeave",v="onPointerEnter",h="pointer"),C=b==null?m:Nr(b),x=y==null?m:Nr(y),m=new j(N,h+"leave",b,r,f),m.target=C,m.relatedTarget=x,N=null,Zn(f)===u&&(j=new j(v,h+"enter",y,r,f),j.target=x,j.relatedTarget=C,N=j),C=N,b&&y)t:{for(j=b,v=y,h=0,x=j;x;x=xr(x))h++;for(x=0,N=v;N;N=xr(N))x++;for(;0<h-x;)j=xr(j),h--;for(;0<x-h;)v=xr(v),x--;for(;h--;){if(j===v||v!==null&&j===v.alternate)break t;j=xr(j),v=xr(v)}j=null}else j=null;b!==null&&Yc(p,m,b,j,!1),y!==null&&C!==null&&Yc(p,C,y,j,!0)}}e:{if(m=u?Nr(u):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var E=ph;else if(Mc(m))if(Ku)E=yh;else{E=gh;var T=xh}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=vh);if(E&&(E=E(e,u))){Gu(p,E,r,f);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&yo(m,"number",m.value)}switch(T=u?Nr(u):window,e){case"focusin":(Mc(T)||T.contentEditable==="true")&&(wr=T,_o=u,vs=null);break;case"focusout":vs=_o=wr=null;break;case"mousedown":Ao=!0;break;case"contextmenu":case"mouseup":case"dragend":Ao=!1,Uc(p,r,f);break;case"selectionchange":if(jh)break;case"keydown":case"keyup":Uc(p,r,f)}var S;if(El)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else br?Wu(e,r)&&(g="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(g="onCompositionStart");g&&(Yu&&r.locale!=="ko"&&(br||g!=="onCompositionStart"?g==="onCompositionEnd"&&br&&(S=Qu()):(Dn=f,kl="value"in Dn?Dn.value:Dn.textContent,br=!0)),T=Ya(u,g),0<T.length&&(g=new Ic(g,e,null,r,f),p.push({event:g,listeners:T}),S?g.data=S:(S=Hu(r),S!==null&&(g.data=S)))),(S=dh?uh(e,r):fh(e,r))&&(u=Ya(u,"onBeforeInput"),0<u.length&&(f=new Ic("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:u}),f.data=S))}af(p,t)})}function Is(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ya(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Cs(e,r),i!=null&&s.unshift(Is(e,i,a)),i=Cs(e,t),i!=null&&s.push(Is(e,i,a))),e=e.return}return s}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yc(e,t,r,s,a){for(var i=t._reactName,o=[];r!==null&&r!==s;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,a?(c=Cs(r,i),c!=null&&o.unshift(Is(r,c,l))):a||(c=Cs(r,i),c!=null&&o.push(Is(r,c,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Ch=/\r\n?/g,Eh=/\u0000|\uFFFD/g;function Wc(e){return(typeof e=="string"?e:""+e).replace(Ch,`
`).replace(Eh,"")}function aa(e,t,r){if(t=Wc(t),Wc(e)!==t&&r)throw Error(J(425))}function Wa(){}var Io=null,Lo=null;function Do(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zo=typeof setTimeout=="function"?setTimeout:void 0,Ph=typeof clearTimeout=="function"?clearTimeout:void 0,Hc=typeof Promise=="function"?Promise:void 0,Th=typeof queueMicrotask=="function"?queueMicrotask:typeof Hc<"u"?function(e){return Hc.resolve(null).then(e).catch(Rh)}:zo;function Rh(e){setTimeout(function(){throw e})}function Wi(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Ts(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Ts(t)}function $n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),sn="__reactFiber$"+Hr,Ls="__reactProps$"+Hr,vn="__reactContainer$"+Hr,Mo="__reactEvents$"+Hr,_h="__reactListeners$"+Hr,Ah="__reactHandles$"+Hr;function Zn(e){var t=e[sn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[vn]||r[sn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Gc(e);e!==null;){if(r=e[sn])return r;e=Gc(e)}return t}e=r,r=e.parentNode}return null}function Ys(e){return e=e[sn]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(J(33))}function pi(e){return e[Ls]||null}var Oo=[],kr=-1;function Gn(e){return{current:e}}function Ue(e){0>kr||(e.current=Oo[kr],Oo[kr]=null,kr--)}function Oe(e,t){kr++,Oo[kr]=e.current,e.current=t}var Wn={},xt=Gn(Wn),Ct=Gn(!1),or=Wn;function Or(e,t){var r=e.type.contextTypes;if(!r)return Wn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Et(e){return e=e.childContextTypes,e!=null}function Ha(){Ue(Ct),Ue(xt)}function Kc(e,t,r){if(xt.current!==Wn)throw Error(J(168));Oe(xt,t),Oe(Ct,r)}function lf(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(J(108,x0(e)||"Unknown",a));return He({},r,s)}function Ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,or=xt.current,Oe(xt,e),Oe(Ct,Ct.current),!0}function Vc(e,t,r){var s=e.stateNode;if(!s)throw Error(J(169));r?(e=lf(e,t,or),s.__reactInternalMemoizedMergedChildContext=e,Ue(Ct),Ue(xt),Oe(xt,e)):Ue(Ct),Oe(Ct,r)}var fn=null,xi=!1,Hi=!1;function cf(e){fn===null?fn=[e]:fn.push(e)}function Ih(e){xi=!0,cf(e)}function Kn(){if(!Hi&&fn!==null){Hi=!0;var e=0,t=_e;try{var r=fn;for(_e=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}fn=null,xi=!1}catch(a){throw fn!==null&&(fn=fn.slice(e+1)),Iu(bl,Kn),a}finally{_e=t,Hi=!1}}return null}var Sr=[],Cr=0,Ka=null,Va=0,Mt=[],Ot=0,lr=null,mn=1,hn="";function Xn(e,t){Sr[Cr++]=Va,Sr[Cr++]=Ka,Ka=e,Va=t}function df(e,t,r){Mt[Ot++]=mn,Mt[Ot++]=hn,Mt[Ot++]=lr,lr=e;var s=mn;e=hn;var a=32-Vt(s)-1;s&=~(1<<a),r+=1;var i=32-Vt(t)+a;if(30<i){var o=a-a%5;i=(s&(1<<o)-1).toString(32),s>>=o,a-=o,mn=1<<32-Vt(t)+a|r<<a|s,hn=i+e}else mn=1<<i|r<<a|s,hn=e}function Tl(e){e.return!==null&&(Xn(e,1),df(e,1,0))}function Rl(e){for(;e===Ka;)Ka=Sr[--Cr],Sr[Cr]=null,Va=Sr[--Cr],Sr[Cr]=null;for(;e===lr;)lr=Mt[--Ot],Mt[Ot]=null,hn=Mt[--Ot],Mt[Ot]=null,mn=Mt[--Ot],Mt[Ot]=null}var At=null,_t=null,qe=!1,Kt=null;function uf(e,t){var r=Ft(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Xc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,At=e,_t=$n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,At=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=lr!==null?{id:mn,overflow:hn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ft(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,At=e,_t=null,!0):!1;default:return!1}}function Fo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $o(e){if(qe){var t=_t;if(t){var r=t;if(!Xc(e,t)){if(Fo(e))throw Error(J(418));t=$n(r.nextSibling);var s=At;t&&Xc(e,t)?uf(s,r):(e.flags=e.flags&-4097|2,qe=!1,At=e)}}else{if(Fo(e))throw Error(J(418));e.flags=e.flags&-4097|2,qe=!1,At=e}}}function Jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;At=e}function ia(e){if(e!==At)return!1;if(!qe)return Jc(e),qe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Do(e.type,e.memoizedProps)),t&&(t=_t)){if(Fo(e))throw ff(),Error(J(418));for(;t;)uf(e,t),t=$n(t.nextSibling)}if(Jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){_t=$n(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=At?$n(e.stateNode.nextSibling):null;return!0}function ff(){for(var e=_t;e;)e=$n(e.nextSibling)}function Fr(){_t=At=null,qe=!1}function _l(e){Kt===null?Kt=[e]:Kt.push(e)}var Lh=jn.ReactCurrentBatchConfig;function ns(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(J(309));var s=r.stateNode}if(!s)throw Error(J(147,e));var a=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(J(284));if(!r._owner)throw Error(J(290,e))}return e}function oa(e,t){throw e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zc(e){var t=e._init;return t(e._payload)}function mf(e){function t(v,h){if(e){var x=v.deletions;x===null?(v.deletions=[h],v.flags|=16):x.push(h)}}function r(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function s(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function a(v,h){return v=Qn(v,h),v.index=0,v.sibling=null,v}function i(v,h,x){return v.index=x,e?(x=v.alternate,x!==null?(x=x.index,x<h?(v.flags|=2,h):x):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,h,x,N){return h===null||h.tag!==6?(h=eo(x,v.mode,N),h.return=v,h):(h=a(h,x),h.return=v,h)}function c(v,h,x,N){var E=x.type;return E===yr?f(v,h,x.props.children,N,x.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rn&&Zc(E)===h.type)?(N=a(h,x.props),N.ref=ns(v,h,x),N.return=v,N):(N=Ia(x.type,x.key,x.props,null,v.mode,N),N.ref=ns(v,h,x),N.return=v,N)}function u(v,h,x,N){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=to(x,v.mode,N),h.return=v,h):(h=a(h,x.children||[]),h.return=v,h)}function f(v,h,x,N,E){return h===null||h.tag!==7?(h=ar(x,v.mode,N,E),h.return=v,h):(h=a(h,x),h.return=v,h)}function p(v,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=eo(""+h,v.mode,x),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Vs:return x=Ia(h.type,h.key,h.props,null,v.mode,x),x.ref=ns(v,null,h),x.return=v,x;case vr:return h=to(h,v.mode,x),h.return=v,h;case Rn:var N=h._init;return p(v,N(h._payload),x)}if(us(h)||Xr(h))return h=ar(h,v.mode,x,null),h.return=v,h;oa(v,h)}return null}function m(v,h,x,N){var E=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:l(v,h,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vs:return x.key===E?c(v,h,x,N):null;case vr:return x.key===E?u(v,h,x,N):null;case Rn:return E=x._init,m(v,h,E(x._payload),N)}if(us(x)||Xr(x))return E!==null?null:f(v,h,x,N,null);oa(v,x)}return null}function b(v,h,x,N,E){if(typeof N=="string"&&N!==""||typeof N=="number")return v=v.get(x)||null,l(h,v,""+N,E);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Vs:return v=v.get(N.key===null?x:N.key)||null,c(h,v,N,E);case vr:return v=v.get(N.key===null?x:N.key)||null,u(h,v,N,E);case Rn:var T=N._init;return b(v,h,x,T(N._payload),E)}if(us(N)||Xr(N))return v=v.get(x)||null,f(h,v,N,E,null);oa(h,N)}return null}function y(v,h,x,N){for(var E=null,T=null,S=h,g=h=0,w=null;S!==null&&g<x.length;g++){S.index>g?(w=S,S=null):w=S.sibling;var k=m(v,S,x[g],N);if(k===null){S===null&&(S=w);break}e&&S&&k.alternate===null&&t(v,S),h=i(k,h,g),T===null?E=k:T.sibling=k,T=k,S=w}if(g===x.length)return r(v,S),qe&&Xn(v,g),E;if(S===null){for(;g<x.length;g++)S=p(v,x[g],N),S!==null&&(h=i(S,h,g),T===null?E=S:T.sibling=S,T=S);return qe&&Xn(v,g),E}for(S=s(v,S);g<x.length;g++)w=b(S,v,g,x[g],N),w!==null&&(e&&w.alternate!==null&&S.delete(w.key===null?g:w.key),h=i(w,h,g),T===null?E=w:T.sibling=w,T=w);return e&&S.forEach(function(P){return t(v,P)}),qe&&Xn(v,g),E}function j(v,h,x,N){var E=Xr(x);if(typeof E!="function")throw Error(J(150));if(x=E.call(x),x==null)throw Error(J(151));for(var T=E=null,S=h,g=h=0,w=null,k=x.next();S!==null&&!k.done;g++,k=x.next()){S.index>g?(w=S,S=null):w=S.sibling;var P=m(v,S,k.value,N);if(P===null){S===null&&(S=w);break}e&&S&&P.alternate===null&&t(v,S),h=i(P,h,g),T===null?E=P:T.sibling=P,T=P,S=w}if(k.done)return r(v,S),qe&&Xn(v,g),E;if(S===null){for(;!k.done;g++,k=x.next())k=p(v,k.value,N),k!==null&&(h=i(k,h,g),T===null?E=k:T.sibling=k,T=k);return qe&&Xn(v,g),E}for(S=s(v,S);!k.done;g++,k=x.next())k=b(S,v,g,k.value,N),k!==null&&(e&&k.alternate!==null&&S.delete(k.key===null?g:k.key),h=i(k,h,g),T===null?E=k:T.sibling=k,T=k);return e&&S.forEach(function(A){return t(v,A)}),qe&&Xn(v,g),E}function C(v,h,x,N){if(typeof x=="object"&&x!==null&&x.type===yr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Vs:e:{for(var E=x.key,T=h;T!==null;){if(T.key===E){if(E=x.type,E===yr){if(T.tag===7){r(v,T.sibling),h=a(T,x.props.children),h.return=v,v=h;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rn&&Zc(E)===T.type){r(v,T.sibling),h=a(T,x.props),h.ref=ns(v,T,x),h.return=v,v=h;break e}r(v,T);break}else t(v,T);T=T.sibling}x.type===yr?(h=ar(x.props.children,v.mode,N,x.key),h.return=v,v=h):(N=Ia(x.type,x.key,x.props,null,v.mode,N),N.ref=ns(v,h,x),N.return=v,v=N)}return o(v);case vr:e:{for(T=x.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){r(v,h.sibling),h=a(h,x.children||[]),h.return=v,v=h;break e}else{r(v,h);break}else t(v,h);h=h.sibling}h=to(x,v.mode,N),h.return=v,v=h}return o(v);case Rn:return T=x._init,C(v,h,T(x._payload),N)}if(us(x))return y(v,h,x,N);if(Xr(x))return j(v,h,x,N);oa(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(r(v,h.sibling),h=a(h,x),h.return=v,v=h):(r(v,h),h=eo(x,v.mode,N),h.return=v,v=h),o(v)):r(v,h)}return C}var $r=mf(!0),hf=mf(!1),Xa=Gn(null),Ja=null,Er=null,Al=null;function Il(){Al=Er=Ja=null}function Ll(e){var t=Xa.current;Ue(Xa),e._currentValue=t}function Bo(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Lr(e,t){Ja=e,Al=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(St=!0),e.firstContext=null)}function Ut(e){var t=e._currentValue;if(Al!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(Ja===null)throw Error(J(308));Er=e,Ja.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var er=null;function Dl(e){er===null?er=[e]:er.push(e)}function pf(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,Dl(t)):(r.next=a.next,a.next=r),t.interleaved=r,yn(e,s)}function yn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var _n=!1;function zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bn(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Ce&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,yn(e,r)}return a=s.interleaved,a===null?(t.next=t,Dl(s)):(t.next=a.next,a.next=t),s.interleaved=t,yn(e,r)}function Ea(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,wl(e,r)}}function ed(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=o:i=i.next=o,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Za(e,t,r,s){var a=e.updateQueue;_n=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(i!==null){var p=a.baseState;o=0,f=u=c=null,l=i;do{var m=l.lane,b=l.eventTime;if((s&m)===m){f!==null&&(f=f.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,j=l;switch(m=t,b=r,j.tag){case 1:if(y=j.payload,typeof y=="function"){p=y.call(b,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,m=typeof y=="function"?y.call(b,p,m):y,m==null)break e;p=He({},p,m);break e;case 2:_n=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else b={eventTime:b,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=b,c=p):f=f.next=b,o|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(f===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);dr|=o,e.lanes=o,e.memoizedState=p}}function td(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(J(191,a));a.call(s)}}}var Ws={},on=Gn(Ws),Ds=Gn(Ws),zs=Gn(Ws);function tr(e){if(e===Ws)throw Error(J(174));return e}function Ml(e,t){switch(Oe(zs,t),Oe(Ds,e),Oe(on,Ws),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wo(t,e)}Ue(on),Oe(on,t)}function Br(){Ue(on),Ue(Ds),Ue(zs)}function gf(e){tr(zs.current);var t=tr(on.current),r=wo(t,e.type);t!==r&&(Oe(Ds,e),Oe(on,r))}function Ol(e){Ds.current===e&&(Ue(on),Ue(Ds))}var Ye=Gn(0);function ei(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gi=[];function Fl(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var Pa=jn.ReactCurrentDispatcher,Ki=jn.ReactCurrentBatchConfig,cr=0,We=null,tt=null,st=null,ti=!1,ys=!1,Ms=0,Dh=0;function ft(){throw Error(J(321))}function $l(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Jt(e[r],t[r]))return!1;return!0}function Bl(e,t,r,s,a,i){if(cr=i,We=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pa.current=e===null||e.memoizedState===null?Fh:$h,e=r(s,a),ys){i=0;do{if(ys=!1,Ms=0,25<=i)throw Error(J(301));i+=1,st=tt=null,t.updateQueue=null,Pa.current=Bh,e=r(s,a)}while(ys)}if(Pa.current=ni,t=tt!==null&&tt.next!==null,cr=0,st=tt=We=null,ti=!1,t)throw Error(J(300));return e}function Ul(){var e=Ms!==0;return Ms=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?We.memoizedState=st=e:st=st.next=e,st}function qt(){if(tt===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=tt.next;var t=st===null?We.memoizedState:st.next;if(t!==null)st=t,tt=e;else{if(e===null)throw Error(J(310));tt=e,e={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},st===null?We.memoizedState=st=e:st=st.next=e}return st}function Os(e,t){return typeof t=="function"?t(e):t}function Vi(e){var t=qt(),r=t.queue;if(r===null)throw Error(J(311));r.lastRenderedReducer=e;var s=tt,a=s.baseQueue,i=r.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}s.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,s=s.baseState;var l=o=null,c=null,u=i;do{var f=u.lane;if((cr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,o=s):c=c.next=p,We.lanes|=f,dr|=f}u=u.next}while(u!==null&&u!==i);c===null?o=s:c.next=l,Jt(s,t.memoizedState)||(St=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do i=a.lane,We.lanes|=i,dr|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Xi(e){var t=qt(),r=t.queue;if(r===null)throw Error(J(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Jt(i,t.memoizedState)||(St=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,s]}function vf(){}function yf(e,t){var r=We,s=qt(),a=t(),i=!Jt(s.memoizedState,a);if(i&&(s.memoizedState=a,St=!0),s=s.queue,ql(jf.bind(null,r,s,e),[e]),s.getSnapshot!==t||i||st!==null&&st.memoizedState.tag&1){if(r.flags|=2048,Fs(9,wf.bind(null,r,s,a,t),void 0,null),at===null)throw Error(J(349));cr&30||bf(r,t,a)}return a}function bf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function wf(e,t,r,s){t.value=r,t.getSnapshot=s,Nf(t)&&kf(e)}function jf(e,t,r){return r(function(){Nf(t)&&kf(e)})}function Nf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Jt(e,r)}catch{return!0}}function kf(e){var t=yn(e,1);t!==null&&Xt(t,e,1,-1)}function nd(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Os,lastRenderedState:e},t.queue=e,e=e.dispatch=Oh.bind(null,We,e),[t.memoizedState,e]}function Fs(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function Sf(){return qt().memoizedState}function Ta(e,t,r,s){var a=nn();We.flags|=e,a.memoizedState=Fs(1|t,r,void 0,s===void 0?null:s)}function gi(e,t,r,s){var a=qt();s=s===void 0?null:s;var i=void 0;if(tt!==null){var o=tt.memoizedState;if(i=o.destroy,s!==null&&$l(s,o.deps)){a.memoizedState=Fs(t,r,i,s);return}}We.flags|=e,a.memoizedState=Fs(1|t,r,i,s)}function rd(e,t){return Ta(8390656,8,e,t)}function ql(e,t){return gi(2048,8,e,t)}function Cf(e,t){return gi(4,2,e,t)}function Ef(e,t){return gi(4,4,e,t)}function Pf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tf(e,t,r){return r=r!=null?r.concat([e]):null,gi(4,4,Pf.bind(null,t,e),r)}function Ql(){}function Rf(e,t){var r=qt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&$l(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function _f(e,t){var r=qt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&$l(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function Af(e,t,r){return cr&21?(Jt(r,t)||(r=zu(),We.lanes|=r,dr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=r)}function zh(e,t){var r=_e;_e=r!==0&&4>r?r:4,e(!0);var s=Ki.transition;Ki.transition={};try{e(!1),t()}finally{_e=r,Ki.transition=s}}function If(){return qt().memoizedState}function Mh(e,t,r){var s=qn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},Lf(e))Df(t,r);else if(r=pf(e,t,r,s),r!==null){var a=wt();Xt(r,e,s,a),zf(r,t,s)}}function Oh(e,t,r){var s=qn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(Lf(e))Df(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,r);if(a.hasEagerState=!0,a.eagerState=l,Jt(l,o)){var c=t.interleaved;c===null?(a.next=a,Dl(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=pf(e,t,a,s),r!==null&&(a=wt(),Xt(r,e,s,a),zf(r,t,s))}}function Lf(e){var t=e.alternate;return e===We||t!==null&&t===We}function Df(e,t){ys=ti=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function zf(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,wl(e,r)}}var ni={readContext:Ut,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},Fh={readContext:Ut,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:rd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ta(4194308,4,Pf.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ta(4,2,e,t)},useMemo:function(e,t){var r=nn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=nn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Mh.bind(null,We,e),[s.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:nd,useDebugValue:Ql,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=nd(!1),t=e[0];return e=zh.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=We,a=nn();if(qe){if(r===void 0)throw Error(J(407));r=r()}else{if(r=t(),at===null)throw Error(J(349));cr&30||bf(s,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,rd(jf.bind(null,s,i,e),[e]),s.flags|=2048,Fs(9,wf.bind(null,s,i,r,t),void 0,null),r},useId:function(){var e=nn(),t=at.identifierPrefix;if(qe){var r=hn,s=mn;r=(s&~(1<<32-Vt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ms++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Dh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$h={readContext:Ut,useCallback:Rf,useContext:Ut,useEffect:ql,useImperativeHandle:Tf,useInsertionEffect:Cf,useLayoutEffect:Ef,useMemo:_f,useReducer:Vi,useRef:Sf,useState:function(){return Vi(Os)},useDebugValue:Ql,useDeferredValue:function(e){var t=qt();return Af(t,tt.memoizedState,e)},useTransition:function(){var e=Vi(Os)[0],t=qt().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:yf,useId:If,unstable_isNewReconciler:!1},Bh={readContext:Ut,useCallback:Rf,useContext:Ut,useEffect:ql,useImperativeHandle:Tf,useInsertionEffect:Cf,useLayoutEffect:Ef,useMemo:_f,useReducer:Xi,useRef:Sf,useState:function(){return Xi(Os)},useDebugValue:Ql,useDeferredValue:function(e){var t=qt();return tt===null?t.memoizedState=e:Af(t,tt.memoizedState,e)},useTransition:function(){var e=Xi(Os)[0],t=qt().memoizedState;return[e,t]},useMutableSource:vf,useSyncExternalStore:yf,useId:If,unstable_isNewReconciler:!1};function Ht(e,t){if(e&&e.defaultProps){t=He({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Uo(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:He({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var vi={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=wt(),a=qn(e),i=pn(s,a);i.payload=t,r!=null&&(i.callback=r),t=Bn(e,i,a),t!==null&&(Xt(t,e,a,s),Ea(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=wt(),a=qn(e),i=pn(s,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Bn(e,i,a),t!==null&&(Xt(t,e,a,s),Ea(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=wt(),s=qn(e),a=pn(r,s);a.tag=2,t!=null&&(a.callback=t),t=Bn(e,a,s),t!==null&&(Xt(t,e,s,r),Ea(t,e,s))}};function sd(e,t,r,s,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,o):t.prototype&&t.prototype.isPureReactComponent?!_s(r,s)||!_s(a,i):!0}function Mf(e,t,r){var s=!1,a=Wn,i=t.contextType;return typeof i=="object"&&i!==null?i=Ut(i):(a=Et(t)?or:xt.current,s=t.contextTypes,i=(s=s!=null)?Or(e,a):Wn),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vi,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ad(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&vi.enqueueReplaceState(t,t.state,null)}function qo(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},zl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Ut(i):(i=Et(t)?or:xt.current,a.context=Or(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Uo(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&vi.enqueueReplaceState(a,a.state,null),Za(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t){try{var r="",s=t;do r+=p0(s),s=s.return;while(s);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Ji(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Qo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Uh=typeof WeakMap=="function"?WeakMap:Map;function Of(e,t,r){r=pn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){si||(si=!0,el=s),Qo(e,t)},r}function Ff(e,t,r){r=pn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Qo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Qo(e,t),typeof s!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function id(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Uh;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=np.bind(null,e,t,r),t.then(e,e))}function od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ld(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=pn(-1,1),t.tag=2,Bn(r,t,1))),r.lanes|=1),e)}var qh=jn.ReactCurrentOwner,St=!1;function bt(e,t,r,s){t.child=e===null?hf(t,null,r,s):$r(t,e.child,r,s)}function cd(e,t,r,s,a){r=r.render;var i=t.ref;return Lr(t,a),s=Bl(e,t,r,s,i,a),r=Ul(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,bn(e,t,a)):(qe&&r&&Tl(t),t.flags|=1,bt(e,t,s,a),t.child)}function dd(e,t,r,s,a){if(e===null){var i=r.type;return typeof i=="function"&&!Jl(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,$f(e,t,i,s,a)):(e=Ia(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(r=r.compare,r=r!==null?r:_s,r(o,s)&&e.ref===t.ref)return bn(e,t,a)}return t.flags|=1,e=Qn(i,s),e.ref=t.ref,e.return=t,t.child=e}function $f(e,t,r,s,a){if(e!==null){var i=e.memoizedProps;if(_s(i,s)&&e.ref===t.ref)if(St=!1,t.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(St=!0);else return t.lanes=e.lanes,bn(e,t,a)}return Yo(e,t,r,s,a)}function Bf(e,t,r){var s=t.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(Tr,Rt),Rt|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Oe(Tr,Rt),Rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:r,Oe(Tr,Rt),Rt|=s}else i!==null?(s=i.baseLanes|r,t.memoizedState=null):s=r,Oe(Tr,Rt),Rt|=s;return bt(e,t,a,r),t.child}function Uf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Yo(e,t,r,s,a){var i=Et(r)?or:xt.current;return i=Or(t,i),Lr(t,a),r=Bl(e,t,r,s,i,a),s=Ul(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,bn(e,t,a)):(qe&&s&&Tl(t),t.flags|=1,bt(e,t,r,a),t.child)}function ud(e,t,r,s,a){if(Et(r)){var i=!0;Ga(t)}else i=!1;if(Lr(t,a),t.stateNode===null)Ra(e,t),Mf(t,r,s),qo(t,r,s,a),s=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=Et(r)?or:xt.current,u=Or(t,u));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==s||c!==u)&&ad(t,o,s,u),_n=!1;var m=t.memoizedState;o.state=m,Za(t,s,o,a),c=t.memoizedState,l!==s||m!==c||Ct.current||_n?(typeof f=="function"&&(Uo(t,r,f,s),c=t.memoizedState),(l=_n||sd(t,r,l,s,m,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),o.props=s,o.state=c,o.context=u,s=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,xf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ht(t.type,l),o.props=u,p=t.pendingProps,m=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ut(c):(c=Et(r)?or:xt.current,c=Or(t,c));var b=r.getDerivedStateFromProps;(f=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==c)&&ad(t,o,s,c),_n=!1,m=t.memoizedState,o.state=m,Za(t,s,o,a);var y=t.memoizedState;l!==p||m!==y||Ct.current||_n?(typeof b=="function"&&(Uo(t,r,b,s),y=t.memoizedState),(u=_n||sd(t,r,u,s,m,y,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,y,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,y,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=y),o.props=s,o.state=y,o.context=c,s=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),s=!1)}return Wo(e,t,r,s,i,a)}function Wo(e,t,r,s,a,i){Uf(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return a&&Vc(t,r,!1),bn(e,t,i);s=t.stateNode,qh.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=$r(t,e.child,null,i),t.child=$r(t,null,l,i)):bt(e,t,l,i),t.memoizedState=s.state,a&&Vc(t,r,!0),t.child}function qf(e){var t=e.stateNode;t.pendingContext?Kc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kc(e,t.context,!1),Ml(e,t.containerInfo)}function fd(e,t,r,s,a){return Fr(),_l(a),t.flags|=256,bt(e,t,r,s),t.child}var Ho={dehydrated:null,treeContext:null,retryLane:0};function Go(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qf(e,t,r){var s=t.pendingProps,a=Ye.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Oe(Ye,a&1),e===null)return $o(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,i?(s=t.mode,i=t.child,o={mode:"hidden",children:o},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=wi(o,s,0,null),e=ar(e,s,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Go(r),t.memoizedState=Ho,e):Yl(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Qh(e,t,o,s,l,a,r);if(i){i=s.fallback,o=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(o&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Qn(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Qn(l,i):(i=ar(i,o,r,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,o=e.child.memoizedState,o=o===null?Go(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~r,t.memoizedState=Ho,s}return i=e.child,e=i.sibling,s=Qn(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Yl(e,t){return t=wi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function la(e,t,r,s){return s!==null&&_l(s),$r(t,e.child,null,r),e=Yl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qh(e,t,r,s,a,i,o){if(r)return t.flags&256?(t.flags&=-257,s=Ji(Error(J(422))),la(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,a=t.mode,s=wi({mode:"visible",children:s.children},a,0,null),i=ar(i,a,o,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&$r(t,e.child,null,o),t.child.memoizedState=Go(o),t.memoizedState=Ho,i);if(!(t.mode&1))return la(e,t,o,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(J(419)),s=Ji(i,s,void 0),la(e,t,o,s)}if(l=(o&e.childLanes)!==0,St||l){if(s=at,s!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,yn(e,a),Xt(s,e,a,-1))}return Xl(),s=Ji(Error(J(421))),la(e,t,o,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=rp.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,_t=$n(a.nextSibling),At=t,qe=!0,Kt=null,e!==null&&(Mt[Ot++]=mn,Mt[Ot++]=hn,Mt[Ot++]=lr,mn=e.id,hn=e.overflow,lr=t),t=Yl(t,s.children),t.flags|=4096,t)}function md(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Bo(e.return,t,r)}function Zi(e,t,r,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=r,i.tailMode=a)}function Yf(e,t,r){var s=t.pendingProps,a=s.revealOrder,i=s.tail;if(bt(e,t,s.children,r),s=Ye.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&md(e,r,t);else if(e.tag===19)md(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Oe(Ye,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&ei(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Zi(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ei(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Zi(t,!0,r,null,i);break;case"together":Zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ra(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,r=Qn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Qn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Yh(e,t,r){switch(t.tag){case 3:qf(t),Fr();break;case 5:gf(t);break;case 1:Et(t.type)&&Ga(t);break;case 4:Ml(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;Oe(Xa,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Oe(Ye,Ye.current&1),t.flags|=128,null):r&t.child.childLanes?Qf(e,t,r):(Oe(Ye,Ye.current&1),e=bn(e,t,r),e!==null?e.sibling:null);Oe(Ye,Ye.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Yf(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Oe(Ye,Ye.current),s)break;return null;case 22:case 23:return t.lanes=0,Bf(e,t,r)}return bn(e,t,r)}var Wf,Ko,Hf,Gf;Wf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ko=function(){};Hf=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,tr(on.current);var i=null;switch(r){case"input":a=go(e,a),s=go(e,s),i=[];break;case"select":a=He({},a,{value:void 0}),s=He({},s,{value:void 0}),i=[];break;case"textarea":a=bo(e,a),s=bo(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Wa)}jo(r,s);var o;r=null;for(u in a)if(!s.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ks.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in s){var c=s[u];if(l=a!=null?a[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(i||(i=[]),i.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ks.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&$e("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Gf=function(e,t,r,s){r!==s&&(t.flags|=4)};function rs(e,t){if(!qe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Wh(e,t,r){var s=t.pendingProps;switch(Rl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(t),null;case 1:return Et(t.type)&&Ha(),mt(t),null;case 3:return s=t.stateNode,Br(),Ue(Ct),Ue(xt),Fl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Kt!==null&&(rl(Kt),Kt=null))),Ko(e,t),mt(t),null;case 5:Ol(t);var a=tr(zs.current);if(r=t.type,e!==null&&t.stateNode!=null)Hf(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(J(166));return mt(t),null}if(e=tr(on.current),ia(t)){s=t.stateNode,r=t.type;var i=t.memoizedProps;switch(s[sn]=t,s[Ls]=i,e=(t.mode&1)!==0,r){case"dialog":$e("cancel",s),$e("close",s);break;case"iframe":case"object":case"embed":$e("load",s);break;case"video":case"audio":for(a=0;a<ms.length;a++)$e(ms[a],s);break;case"source":$e("error",s);break;case"img":case"image":case"link":$e("error",s),$e("load",s);break;case"details":$e("toggle",s);break;case"input":jc(s,i),$e("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},$e("invalid",s);break;case"textarea":kc(s,i),$e("invalid",s)}jo(r,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&aa(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&aa(s.textContent,l,e),a=["children",""+l]):ks.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&$e("scroll",s)}switch(r){case"input":Xs(s),Nc(s,i,!0);break;case"textarea":Xs(s),Sc(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Wa)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(r,{is:s.is}):(e=o.createElement(r),r==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,r),e[sn]=t,e[Ls]=s,Wf(e,t,!1,!1),t.stateNode=e;e:{switch(o=No(r,s),r){case"dialog":$e("cancel",e),$e("close",e),a=s;break;case"iframe":case"object":case"embed":$e("load",e),a=s;break;case"video":case"audio":for(a=0;a<ms.length;a++)$e(ms[a],e);a=s;break;case"source":$e("error",e),a=s;break;case"img":case"image":case"link":$e("error",e),$e("load",e),a=s;break;case"details":$e("toggle",e),a=s;break;case"input":jc(e,s),a=go(e,s),$e("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=He({},s,{value:void 0}),$e("invalid",e);break;case"textarea":kc(e,s),a=bo(e,s),$e("invalid",e);break;default:a=s}jo(r,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?ku(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ju(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Ss(e,c):typeof c=="number"&&Ss(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ks.hasOwnProperty(i)?c!=null&&i==="onScroll"&&$e("scroll",e):c!=null&&pl(e,i,c,o))}switch(r){case"input":Xs(e),Nc(e,s,!1);break;case"textarea":Xs(e),Sc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Yn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?Rr(e,!!s.multiple,i,!1):s.defaultValue!=null&&Rr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Wa)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return mt(t),null;case 6:if(e&&t.stateNode!=null)Gf(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(J(166));if(r=tr(zs.current),tr(on.current),ia(t)){if(s=t.stateNode,r=t.memoizedProps,s[sn]=t,(i=s.nodeValue!==r)&&(e=At,e!==null))switch(e.tag){case 3:aa(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&aa(s.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[sn]=t,t.stateNode=s}return mt(t),null;case 13:if(Ue(Ye),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(qe&&_t!==null&&t.mode&1&&!(t.flags&128))ff(),Fr(),t.flags|=98560,i=!1;else if(i=ia(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(J(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(J(317));i[sn]=t}else Fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;mt(t),i=!1}else Kt!==null&&(rl(Kt),Kt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Ye.current&1?nt===0&&(nt=3):Xl())),t.updateQueue!==null&&(t.flags|=4),mt(t),null);case 4:return Br(),Ko(e,t),e===null&&As(t.stateNode.containerInfo),mt(t),null;case 10:return Ll(t.type._context),mt(t),null;case 17:return Et(t.type)&&Ha(),mt(t),null;case 19:if(Ue(Ye),i=t.memoizedState,i===null)return mt(t),null;if(s=(t.flags&128)!==0,o=i.rendering,o===null)if(s)rs(i,!1);else{if(nt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ei(e),o!==null){for(t.flags|=128,rs(i,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)i=r,e=s,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Oe(Ye,Ye.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ve()>qr&&(t.flags|=128,s=!0,rs(i,!1),t.lanes=4194304)}else{if(!s)if(e=ei(o),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),rs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!qe)return mt(t),null}else 2*Ve()-i.renderingStartTime>qr&&r!==1073741824&&(t.flags|=128,s=!0,rs(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(r=i.last,r!==null?r.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ve(),t.sibling=null,r=Ye.current,Oe(Ye,s?r&1|2:r&1),t):(mt(t),null);case 22:case 23:return Vl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Rt&1073741824&&(mt(t),t.subtreeFlags&6&&(t.flags|=8192)):mt(t),null;case 24:return null;case 25:return null}throw Error(J(156,t.tag))}function Hh(e,t){switch(Rl(t),t.tag){case 1:return Et(t.type)&&Ha(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(),Ue(Ct),Ue(xt),Fl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ol(t),null;case 13:if(Ue(Ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ue(Ye),null;case 4:return Br(),null;case 10:return Ll(t.type._context),null;case 22:case 23:return Vl(),null;case 24:return null;default:return null}}var ca=!1,pt=!1,Gh=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Pr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Ge(e,t,s)}else r.current=null}function Vo(e,t,r){try{r()}catch(s){Ge(e,t,s)}}var hd=!1;function Kh(e,t){if(Io=qa,e=Ju(),Pl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,u=0,f=0,p=e,m=null;t:for(;;){for(var b;p!==r||a!==0&&p.nodeType!==3||(l=o+a),p!==i||s!==0&&p.nodeType!==3||(c=o+s),p.nodeType===3&&(o+=p.nodeValue.length),(b=p.firstChild)!==null;)m=p,p=b;for(;;){if(p===e)break t;if(m===r&&++u===a&&(l=o),m===i&&++f===s&&(c=o),(b=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=b}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Lo={focusedElem:e,selectionRange:r},qa=!1,ie=t;ie!==null;)if(t=ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ie=e;else for(;ie!==null;){t=ie;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,C=y.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?j:Ht(t.type,j),C);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(N){Ge(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,ie=e;break}ie=t.return}return y=hd,hd=!1,y}function bs(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Vo(t,r,i)}a=a.next}while(a!==s)}}function yi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Xo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Kf(e){var t=e.alternate;t!==null&&(e.alternate=null,Kf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[Ls],delete t[Mo],delete t[_h],delete t[Ah])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vf(e){return e.tag===5||e.tag===3||e.tag===4}function pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Wa));else if(s!==4&&(e=e.child,e!==null))for(Jo(e,t,r),e=e.sibling;e!==null;)Jo(e,t,r),e=e.sibling}function Zo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Zo(e,t,r),e=e.sibling;e!==null;)Zo(e,t,r),e=e.sibling}var ot=null,Gt=!1;function Sn(e,t,r){for(r=r.child;r!==null;)Xf(e,t,r),r=r.sibling}function Xf(e,t,r){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(ui,r)}catch{}switch(r.tag){case 5:pt||Pr(r,t);case 6:var s=ot,a=Gt;ot=null,Sn(e,t,r),ot=s,Gt=a,ot!==null&&(Gt?(e=ot,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ot.removeChild(r.stateNode));break;case 18:ot!==null&&(Gt?(e=ot,r=r.stateNode,e.nodeType===8?Wi(e.parentNode,r):e.nodeType===1&&Wi(e,r),Ts(e)):Wi(ot,r.stateNode));break;case 4:s=ot,a=Gt,ot=r.stateNode.containerInfo,Gt=!0,Sn(e,t,r),ot=s,Gt=a;break;case 0:case 11:case 14:case 15:if(!pt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Vo(r,t,o),a=a.next}while(a!==s)}Sn(e,t,r);break;case 1:if(!pt&&(Pr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(l){Ge(r,t,l)}Sn(e,t,r);break;case 21:Sn(e,t,r);break;case 22:r.mode&1?(pt=(s=pt)||r.memoizedState!==null,Sn(e,t,r),pt=s):Sn(e,t,r);break;default:Sn(e,t,r)}}function xd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Gh),t.forEach(function(s){var a=sp.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function Wt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,Gt=!1;break e;case 3:ot=l.stateNode.containerInfo,Gt=!0;break e;case 4:ot=l.stateNode.containerInfo,Gt=!0;break e}l=l.return}if(ot===null)throw Error(J(160));Xf(i,o,a),ot=null,Gt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){Ge(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jf(t,e),t=t.sibling}function Jf(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(t,e),tn(e),s&4){try{bs(3,e,e.return),yi(3,e)}catch(j){Ge(e,e.return,j)}try{bs(5,e,e.return)}catch(j){Ge(e,e.return,j)}}break;case 1:Wt(t,e),tn(e),s&512&&r!==null&&Pr(r,r.return);break;case 5:if(Wt(t,e),tn(e),s&512&&r!==null&&Pr(r,r.return),e.flags&32){var a=e.stateNode;try{Ss(a,"")}catch(j){Ge(e,e.return,j)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=r!==null?r.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&yu(a,i),No(l,o);var u=No(l,i);for(o=0;o<c.length;o+=2){var f=c[o],p=c[o+1];f==="style"?ku(a,p):f==="dangerouslySetInnerHTML"?ju(a,p):f==="children"?Ss(a,p):pl(a,f,p,u)}switch(l){case"input":vo(a,i);break;case"textarea":bu(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Rr(a,!!i.multiple,b,!1):m!==!!i.multiple&&(i.defaultValue!=null?Rr(a,!!i.multiple,i.defaultValue,!0):Rr(a,!!i.multiple,i.multiple?[]:"",!1))}a[Ls]=i}catch(j){Ge(e,e.return,j)}}break;case 6:if(Wt(t,e),tn(e),s&4){if(e.stateNode===null)throw Error(J(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(j){Ge(e,e.return,j)}}break;case 3:if(Wt(t,e),tn(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Ts(t.containerInfo)}catch(j){Ge(e,e.return,j)}break;case 4:Wt(t,e),tn(e);break;case 13:Wt(t,e),tn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Gl=Ve())),s&4&&xd(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(pt=(u=pt)||f,Wt(t,e),pt=u):Wt(t,e),tn(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(ie=e,f=e.child;f!==null;){for(p=ie=f;ie!==null;){switch(m=ie,b=m.child,m.tag){case 0:case 11:case 14:case 15:bs(4,m,m.return);break;case 1:Pr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){s=m,r=m.return;try{t=s,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){Ge(s,r,j)}}break;case 5:Pr(m,m.return);break;case 22:if(m.memoizedState!==null){vd(p);continue}}b!==null?(b.return=m,ie=b):vd(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{a=p.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Nu("display",o))}catch(j){Ge(e,e.return,j)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){Ge(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Wt(t,e),tn(e),s&4&&xd(e);break;case 21:break;default:Wt(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Vf(r)){var s=r;break e}r=r.return}throw Error(J(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Ss(a,""),s.flags&=-33);var i=pd(e);Zo(e,i,a);break;case 3:case 4:var o=s.stateNode.containerInfo,l=pd(e);Jo(e,l,o);break;default:throw Error(J(161))}}catch(c){Ge(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vh(e,t,r){ie=e,Zf(e)}function Zf(e,t,r){for(var s=(e.mode&1)!==0;ie!==null;){var a=ie,i=a.child;if(a.tag===22&&s){var o=a.memoizedState!==null||ca;if(!o){var l=a.alternate,c=l!==null&&l.memoizedState!==null||pt;l=ca;var u=pt;if(ca=o,(pt=c)&&!u)for(ie=a;ie!==null;)o=ie,c=o.child,o.tag===22&&o.memoizedState!==null?yd(a):c!==null?(c.return=o,ie=c):yd(a);for(;i!==null;)ie=i,Zf(i),i=i.sibling;ie=a,ca=l,pt=u}gd(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,ie=i):gd(e)}}function gd(e){for(;ie!==null;){var t=ie;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pt||yi(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!pt)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Ht(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&td(t,i,s);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}td(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ts(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}pt||t.flags&512&&Xo(t)}catch(m){Ge(t,t.return,m)}}if(t===e){ie=null;break}if(r=t.sibling,r!==null){r.return=t.return,ie=r;break}ie=t.return}}function vd(e){for(;ie!==null;){var t=ie;if(t===e){ie=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ie=r;break}ie=t.return}}function yd(e){for(;ie!==null;){var t=ie;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{yi(4,t)}catch(c){Ge(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(c){Ge(t,a,c)}}var i=t.return;try{Xo(t)}catch(c){Ge(t,i,c)}break;case 5:var o=t.return;try{Xo(t)}catch(c){Ge(t,o,c)}}}catch(c){Ge(t,t.return,c)}if(t===e){ie=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ie=l;break}ie=t.return}}var Xh=Math.ceil,ri=jn.ReactCurrentDispatcher,Wl=jn.ReactCurrentOwner,Bt=jn.ReactCurrentBatchConfig,Ce=0,at=null,Ze=null,lt=0,Rt=0,Tr=Gn(0),nt=0,$s=null,dr=0,bi=0,Hl=0,ws=null,kt=null,Gl=0,qr=1/0,un=null,si=!1,el=null,Un=null,da=!1,zn=null,ai=0,js=0,tl=null,_a=-1,Aa=0;function wt(){return Ce&6?Ve():_a!==-1?_a:_a=Ve()}function qn(e){return e.mode&1?Ce&2&&lt!==0?lt&-lt:Lh.transition!==null?(Aa===0&&(Aa=zu()),Aa):(e=_e,e!==0||(e=window.event,e=e===void 0?16:qu(e.type)),e):1}function Xt(e,t,r,s){if(50<js)throw js=0,tl=null,Error(J(185));qs(e,r,s),(!(Ce&2)||e!==at)&&(e===at&&(!(Ce&2)&&(bi|=r),nt===4&&Ln(e,lt)),Pt(e,s),r===1&&Ce===0&&!(t.mode&1)&&(qr=Ve()+500,xi&&Kn()))}function Pt(e,t){var r=e.callbackNode;L0(e,t);var s=Ua(e,e===at?lt:0);if(s===0)r!==null&&Pc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&Pc(r),t===1)e.tag===0?Ih(bd.bind(null,e)):cf(bd.bind(null,e)),Th(function(){!(Ce&6)&&Kn()}),r=null;else{switch(Mu(s)){case 1:r=bl;break;case 4:r=Lu;break;case 16:r=Ba;break;case 536870912:r=Du;break;default:r=Ba}r=om(r,em.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function em(e,t){if(_a=-1,Aa=0,Ce&6)throw Error(J(327));var r=e.callbackNode;if(Dr()&&e.callbackNode!==r)return null;var s=Ua(e,e===at?lt:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=ii(e,s);else{t=s;var a=Ce;Ce|=2;var i=nm();(at!==e||lt!==t)&&(un=null,qr=Ve()+500,sr(e,t));do try{ep();break}catch(l){tm(e,l)}while(1);Il(),ri.current=i,Ce=a,Ze!==null?t=0:(at=null,lt=0,t=nt)}if(t!==0){if(t===2&&(a=Po(e),a!==0&&(s=a,t=nl(e,a))),t===1)throw r=$s,sr(e,0),Ln(e,s),Pt(e,Ve()),r;if(t===6)Ln(e,s);else{if(a=e.current.alternate,!(s&30)&&!Jh(a)&&(t=ii(e,s),t===2&&(i=Po(e),i!==0&&(s=i,t=nl(e,i))),t===1))throw r=$s,sr(e,0),Ln(e,s),Pt(e,Ve()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(J(345));case 2:Jn(e,kt,un);break;case 3:if(Ln(e,s),(s&130023424)===s&&(t=Gl+500-Ve(),10<t)){if(Ua(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){wt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=zo(Jn.bind(null,e,kt,un),t);break}Jn(e,kt,un);break;case 4:if(Ln(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var o=31-Vt(s);i=1<<o,o=t[o],o>a&&(a=o),s&=~i}if(s=a,s=Ve()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Xh(s/1960))-s,10<s){e.timeoutHandle=zo(Jn.bind(null,e,kt,un),s);break}Jn(e,kt,un);break;case 5:Jn(e,kt,un);break;default:throw Error(J(329))}}}return Pt(e,Ve()),e.callbackNode===r?em.bind(null,e):null}function nl(e,t){var r=ws;return e.current.memoizedState.isDehydrated&&(sr(e,t).flags|=256),e=ii(e,t),e!==2&&(t=kt,kt=r,t!==null&&rl(t)),e}function rl(e){kt===null?kt=e:kt.push.apply(kt,e)}function Jh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],i=a.getSnapshot;a=a.value;try{if(!Jt(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t){for(t&=~Hl,t&=~bi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Vt(t),s=1<<r;e[r]=-1,t&=~s}}function bd(e){if(Ce&6)throw Error(J(327));Dr();var t=Ua(e,0);if(!(t&1))return Pt(e,Ve()),null;var r=ii(e,t);if(e.tag!==0&&r===2){var s=Po(e);s!==0&&(t=s,r=nl(e,s))}if(r===1)throw r=$s,sr(e,0),Ln(e,t),Pt(e,Ve()),r;if(r===6)throw Error(J(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jn(e,kt,un),Pt(e,Ve()),null}function Kl(e,t){var r=Ce;Ce|=1;try{return e(t)}finally{Ce=r,Ce===0&&(qr=Ve()+500,xi&&Kn())}}function ur(e){zn!==null&&zn.tag===0&&!(Ce&6)&&Dr();var t=Ce;Ce|=1;var r=Bt.transition,s=_e;try{if(Bt.transition=null,_e=1,e)return e()}finally{_e=s,Bt.transition=r,Ce=t,!(Ce&6)&&Kn()}}function Vl(){Rt=Tr.current,Ue(Tr)}function sr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ph(r)),Ze!==null)for(r=Ze.return;r!==null;){var s=r;switch(Rl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ha();break;case 3:Br(),Ue(Ct),Ue(xt),Fl();break;case 5:Ol(s);break;case 4:Br();break;case 13:Ue(Ye);break;case 19:Ue(Ye);break;case 10:Ll(s.type._context);break;case 22:case 23:Vl()}r=r.return}if(at=e,Ze=e=Qn(e.current,null),lt=Rt=t,nt=0,$s=null,Hl=bi=dr=0,kt=ws=null,er!==null){for(t=0;t<er.length;t++)if(r=er[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,i=r.pending;if(i!==null){var o=i.next;i.next=a,s.next=o}r.pending=s}er=null}return e}function tm(e,t){do{var r=Ze;try{if(Il(),Pa.current=ni,ti){for(var s=We.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}ti=!1}if(cr=0,st=tt=We=null,ys=!1,Ms=0,Wl.current=null,r===null||r.return===null){nt=1,$s=t,Ze=null;break}e:{var i=e,o=r.return,l=r,c=t;if(t=lt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=od(o);if(b!==null){b.flags&=-257,ld(b,o,l,i,t),b.mode&1&&id(i,u,t),t=b,c=u;var y=t.updateQueue;if(y===null){var j=new Set;j.add(c),t.updateQueue=j}else y.add(c);break e}else{if(!(t&1)){id(i,u,t),Xl();break e}c=Error(J(426))}}else if(qe&&l.mode&1){var C=od(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ld(C,o,l,i,t),_l(Ur(c,l));break e}}i=c=Ur(c,l),nt!==4&&(nt=2),ws===null?ws=[i]:ws.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=Of(i,c,t);ed(i,v);break e;case 1:l=c;var h=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Un===null||!Un.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var N=Ff(i,l,t);ed(i,N);break e}}i=i.return}while(i!==null)}sm(r)}catch(E){t=E,Ze===r&&r!==null&&(Ze=r=r.return);continue}break}while(1)}function nm(){var e=ri.current;return ri.current=ni,e===null?ni:e}function Xl(){(nt===0||nt===3||nt===2)&&(nt=4),at===null||!(dr&268435455)&&!(bi&268435455)||Ln(at,lt)}function ii(e,t){var r=Ce;Ce|=2;var s=nm();(at!==e||lt!==t)&&(un=null,sr(e,t));do try{Zh();break}catch(a){tm(e,a)}while(1);if(Il(),Ce=r,ri.current=s,Ze!==null)throw Error(J(261));return at=null,lt=0,nt}function Zh(){for(;Ze!==null;)rm(Ze)}function ep(){for(;Ze!==null&&!S0();)rm(Ze)}function rm(e){var t=im(e.alternate,e,Rt);e.memoizedProps=e.pendingProps,t===null?sm(e):Ze=t,Wl.current=null}function sm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Hh(r,t),r!==null){r.flags&=32767,Ze=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{nt=6,Ze=null;return}}else if(r=Wh(r,t,Rt),r!==null){Ze=r;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);nt===0&&(nt=5)}function Jn(e,t,r){var s=_e,a=Bt.transition;try{Bt.transition=null,_e=1,tp(e,t,r,s)}finally{Bt.transition=a,_e=s}return null}function tp(e,t,r,s){do Dr();while(zn!==null);if(Ce&6)throw Error(J(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(J(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(D0(e,i),e===at&&(Ze=at=null,lt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||da||(da=!0,om(Ba,function(){return Dr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Bt.transition,Bt.transition=null;var o=_e;_e=1;var l=Ce;Ce|=4,Wl.current=null,Kh(e,r),Jf(r,e),wh(Lo),qa=!!Io,Lo=Io=null,e.current=r,Vh(r),C0(),Ce=l,_e=o,Bt.transition=i}else e.current=r;if(da&&(da=!1,zn=e,ai=a),i=e.pendingLanes,i===0&&(Un=null),T0(r.stateNode),Pt(e,Ve()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(si)throw si=!1,e=el,el=null,e;return ai&1&&e.tag!==0&&Dr(),i=e.pendingLanes,i&1?e===tl?js++:(js=0,tl=e):js=0,Kn(),null}function Dr(){if(zn!==null){var e=Mu(ai),t=Bt.transition,r=_e;try{if(Bt.transition=null,_e=16>e?16:e,zn===null)var s=!1;else{if(e=zn,zn=null,ai=0,Ce&6)throw Error(J(331));var a=Ce;for(Ce|=4,ie=e.current;ie!==null;){var i=ie,o=i.child;if(ie.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ie=u;ie!==null;){var f=ie;switch(f.tag){case 0:case 11:case 15:bs(8,f,i)}var p=f.child;if(p!==null)p.return=f,ie=p;else for(;ie!==null;){f=ie;var m=f.sibling,b=f.return;if(Kf(f),f===u){ie=null;break}if(m!==null){m.return=b,ie=m;break}ie=b}}}var y=i.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var C=j.sibling;j.sibling=null,j=C}while(j!==null)}}ie=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,ie=o;else e:for(;ie!==null;){if(i=ie,i.flags&2048)switch(i.tag){case 0:case 11:case 15:bs(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,ie=v;break e}ie=i.return}}var h=e.current;for(ie=h;ie!==null;){o=ie;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ie=x;else e:for(o=h;ie!==null;){if(l=ie,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yi(9,l)}}catch(E){Ge(l,l.return,E)}if(l===o){ie=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,ie=N;break e}ie=l.return}}if(Ce=a,Kn(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(ui,e)}catch{}s=!0}return s}finally{_e=r,Bt.transition=t}}return!1}function wd(e,t,r){t=Ur(r,t),t=Of(e,t,1),e=Bn(e,t,1),t=wt(),e!==null&&(qs(e,1,t),Pt(e,t))}function Ge(e,t,r){if(e.tag===3)wd(e,e,r);else for(;t!==null;){if(t.tag===3){wd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Un===null||!Un.has(s))){e=Ur(r,e),e=Ff(t,e,1),t=Bn(t,e,1),e=wt(),t!==null&&(qs(t,1,e),Pt(t,e));break}}t=t.return}}function np(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=wt(),e.pingedLanes|=e.suspendedLanes&r,at===e&&(lt&r)===r&&(nt===4||nt===3&&(lt&130023424)===lt&&500>Ve()-Gl?sr(e,0):Hl|=r),Pt(e,t)}function am(e,t){t===0&&(e.mode&1?(t=ea,ea<<=1,!(ea&130023424)&&(ea=4194304)):t=1);var r=wt();e=yn(e,t),e!==null&&(qs(e,t,r),Pt(e,r))}function rp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),am(e,r)}function sp(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(J(314))}s!==null&&s.delete(t),am(e,r)}var im;im=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ct.current)St=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return St=!1,Yh(e,t,r);St=!!(e.flags&131072)}else St=!1,qe&&t.flags&1048576&&df(t,Va,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Ra(e,t),e=t.pendingProps;var a=Or(t,xt.current);Lr(t,r),a=Bl(null,t,s,e,a,r);var i=Ul();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Et(s)?(i=!0,Ga(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,zl(t),a.updater=vi,t.stateNode=a,a._reactInternals=t,qo(t,s,e,r),t=Wo(null,t,s,!0,i,r)):(t.tag=0,qe&&i&&Tl(t),bt(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Ra(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=ip(s),e=Ht(s,e),a){case 0:t=Yo(null,t,s,e,r);break e;case 1:t=ud(null,t,s,e,r);break e;case 11:t=cd(null,t,s,e,r);break e;case 14:t=dd(null,t,s,Ht(s.type,e),r);break e}throw Error(J(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),Yo(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),ud(e,t,s,a,r);case 3:e:{if(qf(t),e===null)throw Error(J(387));s=t.pendingProps,i=t.memoizedState,a=i.element,xf(e,t),Za(t,s,null,r);var o=t.memoizedState;if(s=o.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Ur(Error(J(423)),t),t=fd(e,t,s,r,a);break e}else if(s!==a){a=Ur(Error(J(424)),t),t=fd(e,t,s,r,a);break e}else for(_t=$n(t.stateNode.containerInfo.firstChild),At=t,qe=!0,Kt=null,r=hf(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Fr(),s===a){t=bn(e,t,r);break e}bt(e,t,s,r)}t=t.child}return t;case 5:return gf(t),e===null&&$o(t),s=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Do(s,a)?o=null:i!==null&&Do(s,i)&&(t.flags|=32),Uf(e,t),bt(e,t,o,r),t.child;case 6:return e===null&&$o(t),null;case 13:return Qf(e,t,r);case 4:return Ml(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=$r(t,null,s,r):bt(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),cd(e,t,s,a,r);case 7:return bt(e,t,t.pendingProps,r),t.child;case 8:return bt(e,t,t.pendingProps.children,r),t.child;case 12:return bt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Oe(Xa,s._currentValue),s._currentValue=o,i!==null)if(Jt(i.value,o)){if(i.children===a.children&&!Ct.current){t=bn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(i.tag===1){c=pn(-1,r&-r),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Bo(i.return,r,t),l.lanes|=r;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(J(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Bo(o,r,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}bt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Lr(t,r),a=Ut(a),s=s(a),t.flags|=1,bt(e,t,s,r),t.child;case 14:return s=t.type,a=Ht(s,t.pendingProps),a=Ht(s.type,a),dd(e,t,s,a,r);case 15:return $f(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),Ra(e,t),t.tag=1,Et(s)?(e=!0,Ga(t)):e=!1,Lr(t,r),Mf(t,s,a),qo(t,s,a,r),Wo(null,t,s,!0,e,r);case 19:return Yf(e,t,r);case 22:return Bf(e,t,r)}throw Error(J(156,t.tag))};function om(e,t){return Iu(e,t)}function ap(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,r,s){return new ap(e,t,r,s)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ip(e){if(typeof e=="function")return Jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gl)return 11;if(e===vl)return 14}return 2}function Qn(e,t){var r=e.alternate;return r===null?(r=Ft(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ia(e,t,r,s,a,i){var o=2;if(s=e,typeof e=="function")Jl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case yr:return ar(r.children,a,i,t);case xl:o=8,a|=8;break;case mo:return e=Ft(12,r,t,a|2),e.elementType=mo,e.lanes=i,e;case ho:return e=Ft(13,r,t,a),e.elementType=ho,e.lanes=i,e;case po:return e=Ft(19,r,t,a),e.elementType=po,e.lanes=i,e;case xu:return wi(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hu:o=10;break e;case pu:o=9;break e;case gl:o=11;break e;case vl:o=14;break e;case Rn:o=16,s=null;break e}throw Error(J(130,e==null?e:typeof e,""))}return t=Ft(o,r,t,a),t.elementType=e,t.type=s,t.lanes=i,t}function ar(e,t,r,s){return e=Ft(7,e,s,t),e.lanes=r,e}function wi(e,t,r,s){return e=Ft(22,e,s,t),e.elementType=xu,e.lanes=r,e.stateNode={isHidden:!1},e}function eo(e,t,r){return e=Ft(6,e,null,t),e.lanes=r,e}function to(e,t,r){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function op(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Di(0),this.expirationTimes=Di(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Di(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Zl(e,t,r,s,a,i,o,l,c){return e=new op(e,t,r,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ft(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},zl(i),e}function lp(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function lm(e){if(!e)return Wn;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(J(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(J(171))}if(e.tag===1){var r=e.type;if(Et(r))return lf(e,r,t)}return t}function cm(e,t,r,s,a,i,o,l,c){return e=Zl(r,s,!0,e,a,i,o,l,c),e.context=lm(null),r=e.current,s=wt(),a=qn(r),i=pn(s,a),i.callback=t??null,Bn(r,i,a),e.current.lanes=a,qs(e,a,s),Pt(e,s),e}function ji(e,t,r,s){var a=t.current,i=wt(),o=qn(a);return r=lm(r),t.context===null?t.context=r:t.pendingContext=r,t=pn(i,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Bn(a,t,o),e!==null&&(Xt(e,a,o,i),Ea(e,a,o)),o}function oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ec(e,t){jd(e,t),(e=e.alternate)&&jd(e,t)}function cp(){return null}var dm=typeof reportError=="function"?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}Ni.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));ji(e,t,null,null)};Ni.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){ji(null,e,null,null)}),t[vn]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=$u();e={blockedOn:null,target:e,priority:t};for(var r=0;r<In.length&&t!==0&&t<In[r].priority;r++);In.splice(r,0,e),r===0&&Uu(e)}};function nc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ki(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nd(){}function dp(e,t,r,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var u=oi(o);i.call(u)}}var o=cm(t,s,e,0,null,!1,!1,"",Nd);return e._reactRootContainer=o,e[vn]=o.current,As(e.nodeType===8?e.parentNode:e),ur(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var u=oi(c);l.call(u)}}var c=Zl(e,0,!1,null,null,!1,!1,"",Nd);return e._reactRootContainer=c,e[vn]=c.current,As(e.nodeType===8?e.parentNode:e),ur(function(){ji(t,c,r,s)}),c}function Si(e,t,r,s,a){var i=r._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var c=oi(o);l.call(c)}}ji(t,o,e,a)}else o=dp(r,t,e,a,s);return oi(o)}Ou=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=fs(t.pendingLanes);r!==0&&(wl(t,r|1),Pt(t,Ve()),!(Ce&6)&&(qr=Ve()+500,Kn()))}break;case 13:ur(function(){var s=yn(e,1);if(s!==null){var a=wt();Xt(s,e,1,a)}}),ec(e,1)}};jl=function(e){if(e.tag===13){var t=yn(e,134217728);if(t!==null){var r=wt();Xt(t,e,134217728,r)}ec(e,134217728)}};Fu=function(e){if(e.tag===13){var t=qn(e),r=yn(e,t);if(r!==null){var s=wt();Xt(r,e,t,s)}ec(e,t)}};$u=function(){return _e};Bu=function(e,t){var r=_e;try{return _e=e,t()}finally{_e=r}};So=function(e,t,r){switch(t){case"input":if(vo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=pi(s);if(!a)throw Error(J(90));vu(s),vo(s,a)}}}break;case"textarea":bu(e,r);break;case"select":t=r.value,t!=null&&Rr(e,!!r.multiple,t,!1)}};Eu=Kl;Pu=ur;var up={usingClientEntryPoint:!1,Events:[Ys,Nr,pi,Su,Cu,Kl]},ss={findFiberByHostInstance:Zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fp={bundleType:ss.bundleType,version:ss.version,rendererPackageName:ss.rendererPackageName,rendererConfig:ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_u(e),e===null?null:e.stateNode},findFiberByHostInstance:ss.findFiberByHostInstance||cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{ui=ua.inject(fp),an=ua}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=up;Lt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nc(t))throw Error(J(200));return lp(e,t,null,r)};Lt.createRoot=function(e,t){if(!nc(e))throw Error(J(299));var r=!1,s="",a=dm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Zl(e,1,!1,null,null,r,!1,s,a),e[vn]=t.current,As(e.nodeType===8?e.parentNode:e),new tc(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=_u(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return ur(e)};Lt.hydrate=function(e,t,r){if(!ki(t))throw Error(J(200));return Si(null,e,t,!0,r)};Lt.hydrateRoot=function(e,t,r){if(!nc(e))throw Error(J(405));var s=r!=null&&r.hydratedSources||null,a=!1,i="",o=dm;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=cm(t,null,e,1,r??null,a,!1,i,o),e[vn]=t.current,As(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Ni(t)};Lt.render=function(e,t,r){if(!ki(t))throw Error(J(200));return Si(null,e,t,!1,r)};Lt.unmountComponentAtNode=function(e){if(!ki(e))throw Error(J(40));return e._reactRootContainer?(ur(function(){Si(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1};Lt.unstable_batchedUpdates=Kl;Lt.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!ki(r))throw Error(J(200));if(e==null||e._reactInternals===void 0)throw Error(J(38));return Si(e,t,r,!1,s)};Lt.version="18.3.1-next-f1338f8080-20240426";function um(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(um)}catch(e){console.error(e)}}um(),du.exports=Lt;var mp=du.exports,kd=mp;uo.createRoot=kd.createRoot,uo.hydrateRoot=kd.hydrateRoot;const hp="modulepreload",pp=function(e){return"/"+e},Sd={},rc=function(t,r,s){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=pp(i),i in Sd)return;Sd[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let f=a.length-1;f>=0;f--){const p=a[f];if(p.href===i&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":hp,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var Cd="popstate";function xp(e={}){function t(s,a){let{pathname:i,search:o,hash:l}=s.location;return sl("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:Bs(a)}return vp(t,r,null,e)}function Qe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gp(){return Math.random().toString(36).substring(2,10)}function Ed(e,t){return{usr:e.state,key:e.key,idx:t}}function sl(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Gr(t):t,state:r,key:t&&t.key||s||gp()}}function Bs({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function vp(e,t,r,s={}){let{window:a=document.defaultView,v5Compat:i=!1}=s,o=a.history,l="POP",c=null,u=f();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function f(){return(o.state||{idx:null}).idx}function p(){l="POP";let C=f(),v=C==null?null:C-u;u=C,c&&c({action:l,location:j.location,delta:v})}function m(C,v){l="PUSH";let h=sl(j.location,C,v);r&&r(h,C),u=f()+1;let x=Ed(h,u),N=j.createHref(h);try{o.pushState(x,"",N)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;a.location.assign(N)}i&&c&&c({action:l,location:j.location,delta:1})}function b(C,v){l="REPLACE";let h=sl(j.location,C,v);r&&r(h,C),u=f();let x=Ed(h,u),N=j.createHref(h);o.replaceState(x,"",N),i&&c&&c({action:l,location:j.location,delta:0})}function y(C){return yp(C)}let j={get action(){return l},get location(){return e(a,o)},listen(C){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Cd,p),c=C,()=>{a.removeEventListener(Cd,p),c=null}},createHref(C){return t(a,C)},createURL:y,encodeLocation(C){let v=y(C);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:b,go(C){return o.go(C)}};return j}function yp(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Bs(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function fm(e,t,r="/"){return bp(e,t,r,!1)}function bp(e,t,r,s){let a=typeof t=="string"?Gr(t):t,i=wn(a.pathname||"/",r);if(i==null)return null;let o=mm(e);wp(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=Ap(i);l=Rp(o[c],u,s)}return l}function mm(e,t=[],r=[],s=""){let a=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(Qe(c.relativePath.startsWith(s),`Absolute route path "${c.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(s.length));let u=xn([s,c.relativePath]),f=r.concat(c);i.children&&i.children.length>0&&(Qe(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),mm(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Pp(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let c of hm(i.path))a(i,o,c)}),t}function hm(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(s.length===0)return a?[i,""]:[i];let o=hm(s.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),a&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function wp(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Tp(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var jp=/^:[\w-]+$/,Np=3,kp=2,Sp=1,Cp=10,Ep=-2,Pd=e=>e==="*";function Pp(e,t){let r=e.split("/"),s=r.length;return r.some(Pd)&&(s+=Ep),t&&(s+=kp),r.filter(a=>!Pd(a)).reduce((a,i)=>a+(jp.test(i)?Np:i===""?Sp:Cp),s)}function Tp(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function Rp(e,t,r=!1){let{routesMeta:s}=e,a={},i="/",o=[];for(let l=0;l<s.length;++l){let c=s[l],u=l===s.length-1,f=i==="/"?t:t.slice(i.length)||"/",p=li({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),m=c.route;if(!p&&u&&r&&!s[s.length-1].route.index&&(p=li({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!p)return null;Object.assign(a,p.params),o.push({params:a,pathname:xn([i,p.pathname]),pathnameBase:zp(xn([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=xn([i,p.pathnameBase]))}return o}function li(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=_p(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((u,{paramName:f,isOptional:p},m)=>{if(f==="*"){let y=l[m]||"";o=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const b=l[m];return p&&!b?u[f]=void 0:u[f]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function _p(e,t=!1,r=!0){Qt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function Ap(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Qt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function wn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function Ip(e,t="/"){let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Gr(e):e;return{pathname:r?r.startsWith("/")?r:Lp(r,t):t,search:Mp(s),hash:Op(a)}}function Lp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function no(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Dp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function sc(e){let t=Dp(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function ac(e,t,r,s=!1){let a;typeof e=="string"?a=Gr(e):(a={...e},Qe(!a.pathname||!a.pathname.includes("?"),no("?","pathname","search",a)),Qe(!a.pathname||!a.pathname.includes("#"),no("#","pathname","hash",a)),Qe(!a.search||!a.search.includes("#"),no("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=r;else{let p=t.length-1;if(!s&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}l=p>=0?t[p]:"/"}let c=Ip(a,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}var xn=e=>e.join("/").replace(/\/\/+/g,"/"),zp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Mp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Op=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var pm=["POST","PUT","PATCH","DELETE"];new Set(pm);var $p=["GET",...pm];new Set($p);var Kr=d.createContext(null);Kr.displayName="DataRouter";var Ci=d.createContext(null);Ci.displayName="DataRouterState";d.createContext(!1);var xm=d.createContext({isTransitioning:!1});xm.displayName="ViewTransition";var Bp=d.createContext(new Map);Bp.displayName="Fetchers";var Up=d.createContext(null);Up.displayName="Await";var Zt=d.createContext(null);Zt.displayName="Navigation";var Hs=d.createContext(null);Hs.displayName="Location";var Yt=d.createContext({outlet:null,matches:[],isDataRoute:!1});Yt.displayName="Route";var ic=d.createContext(null);ic.displayName="RouteError";function qp(e,{relative:t}={}){Qe(Vr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=d.useContext(Zt),{hash:a,pathname:i,search:o}=Gs(e,{relative:t}),l=i;return r!=="/"&&(l=i==="/"?r:xn([r,i])),s.createHref({pathname:l,search:o,hash:a})}function Vr(){return d.useContext(Hs)!=null}function rt(){return Qe(Vr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Hs).location}var gm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vm(e){d.useContext(Zt).static||d.useLayoutEffect(e)}function Ae(){let{isDataRoute:e}=d.useContext(Yt);return e?ax():Qp()}function Qp(){Qe(Vr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Kr),{basename:t,navigator:r}=d.useContext(Zt),{matches:s}=d.useContext(Yt),{pathname:a}=rt(),i=JSON.stringify(sc(s)),o=d.useRef(!1);return vm(()=>{o.current=!0}),d.useCallback((c,u={})=>{if(Qt(o.current,gm),!o.current)return;if(typeof c=="number"){r.go(c);return}let f=ac(c,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:xn([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,i,a,e])}var Yp=d.createContext(null);function Wp(e){let t=d.useContext(Yt).outlet;return t&&d.createElement(Yp.Provider,{value:e},t)}function Hp(){let{matches:e}=d.useContext(Yt),t=e[e.length-1];return t?t.params:{}}function Gs(e,{relative:t}={}){let{matches:r}=d.useContext(Yt),{pathname:s}=rt(),a=JSON.stringify(sc(r));return d.useMemo(()=>ac(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function Gp(e,t){return ym(e,t)}function ym(e,t,r,s){var v;Qe(Vr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=d.useContext(Zt),{matches:i}=d.useContext(Yt),o=i[i.length-1],l=o?o.params:{},c=o?o.pathname:"/",u=o?o.pathnameBase:"/",f=o&&o.route;{let h=f&&f.path||"";bm(c,!f||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let p=rt(),m;if(t){let h=typeof t=="string"?Gr(t):t;Qe(u==="/"||((v=h.pathname)==null?void 0:v.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${h.pathname}" was given in the \`location\` prop.`),m=h}else m=p;let b=m.pathname||"/",y=b;if(u!=="/"){let h=u.replace(/^\//,"").split("/");y="/"+b.replace(/^\//,"").split("/").slice(h.length).join("/")}let j=fm(e,{pathname:y});Qt(f||j!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Qt(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=Zp(j&&j.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:xn([u,a.encodeLocation?a.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?u:xn([u,a.encodeLocation?a.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,r,s);return t&&C?d.createElement(Hs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},C):C}function Kp(){let e=sx(),t=Fp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},i={padding:"2px 4px",backgroundColor:s},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:i},"ErrorBoundary")," or"," ",d.createElement("code",{style:i},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:a},r):null,o)}var Vp=d.createElement(Kp,null),Xp=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(Yt.Provider,{value:this.props.routeContext},d.createElement(ic.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Jp({routeContext:e,match:t,children:r}){let s=d.useContext(Kr);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(Yt.Provider,{value:e},r)}function Zp(e,t=[],r=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,i=r==null?void 0:r.errors;if(i!=null){let c=a.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id])!==void 0);Qe(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let o=!1,l=-1;if(r)for(let c=0;c<a.length;c++){let u=a[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:f,errors:p}=r,m=u.route.loader&&!f.hasOwnProperty(u.route.id)&&(!p||p[u.route.id]===void 0);if(u.route.lazy||m){o=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((c,u,f)=>{let p,m=!1,b=null,y=null;r&&(p=i&&u.route.id?i[u.route.id]:void 0,b=u.route.errorElement||Vp,o&&(l<0&&f===0?(bm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,y=null):l===f&&(m=!0,y=u.route.hydrateFallbackElement||null)));let j=t.concat(a.slice(0,f+1)),C=()=>{let v;return p?v=b:m?v=y:u.route.Component?v=d.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=c,d.createElement(Jp,{match:u,routeContext:{outlet:c,matches:j,isDataRoute:r!=null},children:v})};return r&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?d.createElement(Xp,{location:r.location,revalidation:r.revalidation,component:b,error:p,children:C(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):C()},null)}function oc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ex(e){let t=d.useContext(Kr);return Qe(t,oc(e)),t}function tx(e){let t=d.useContext(Ci);return Qe(t,oc(e)),t}function nx(e){let t=d.useContext(Yt);return Qe(t,oc(e)),t}function lc(e){let t=nx(e),r=t.matches[t.matches.length-1];return Qe(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function rx(){return lc("useRouteId")}function sx(){var s;let e=d.useContext(ic),t=tx("useRouteError"),r=lc("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function ax(){let{router:e}=ex("useNavigate"),t=lc("useNavigate"),r=d.useRef(!1);return vm(()=>{r.current=!0}),d.useCallback(async(a,i={})=>{Qt(r.current,gm),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...i}))},[e,t])}var Td={};function bm(e,t,r){!t&&!Td[e]&&(Td[e]=!0,Qt(!1,r))}d.memo(ix);function ix({routes:e,future:t,state:r}){return ym(e,void 0,r,t)}function ox({to:e,replace:t,state:r,relative:s}){Qe(Vr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=d.useContext(Zt);Qt(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=d.useContext(Yt),{pathname:o}=rt(),l=Ae(),c=ac(e,sc(i),o,s==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:r,relative:s})},[l,u,s,t,r]),null}function lx(e){return Wp(e.context)}function ze(e){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function cx({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:a,static:i=!1}){Qe(!Vr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:o,navigator:a,static:i,future:{}}),[o,a,i]);typeof r=="string"&&(r=Gr(r));let{pathname:c="/",search:u="",hash:f="",state:p=null,key:m="default"}=r,b=d.useMemo(()=>{let y=wn(c,o);return y==null?null:{location:{pathname:y,search:u,hash:f,state:p,key:m},navigationType:s}},[o,c,u,f,p,m,s]);return Qt(b!=null,`<Router basename="${o}"> is not able to match the URL "${c}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:d.createElement(Zt.Provider,{value:l},d.createElement(Hs.Provider,{children:t,value:b}))}function dx({children:e,location:t}){return Gp(al(e),t)}function al(e,t=[]){let r=[];return d.Children.forEach(e,(s,a)=>{if(!d.isValidElement(s))return;let i=[...t,a];if(s.type===d.Fragment){r.push.apply(r,al(s.props.children,i));return}Qe(s.type===ze,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=al(s.props.children,i)),r.push(o)}),r}var La="get",Da="application/x-www-form-urlencoded";function Ei(e){return e!=null&&typeof e.tagName=="string"}function ux(e){return Ei(e)&&e.tagName.toLowerCase()==="button"}function fx(e){return Ei(e)&&e.tagName.toLowerCase()==="form"}function mx(e){return Ei(e)&&e.tagName.toLowerCase()==="input"}function hx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function px(e,t){return e.button===0&&(!t||t==="_self")&&!hx(e)}function il(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let s=e[r];return t.concat(Array.isArray(s)?s.map(a=>[r,a]):[[r,s]])},[]))}function xx(e,t){let r=il(e);return t&&t.forEach((s,a)=>{r.has(a)||t.getAll(a).forEach(i=>{r.append(a,i)})}),r}var fa=null;function gx(){if(fa===null)try{new FormData(document.createElement("form"),0),fa=!1}catch{fa=!0}return fa}var vx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ro(e){return e!=null&&!vx.has(e)?(Qt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Da}"`),null):e}function yx(e,t){let r,s,a,i,o;if(fx(e)){let l=e.getAttribute("action");s=l?wn(l,t):null,r=e.getAttribute("method")||La,a=ro(e.getAttribute("enctype"))||Da,i=new FormData(e)}else if(ux(e)||mx(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(s=c?wn(c,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||La,a=ro(e.getAttribute("formenctype"))||ro(l.getAttribute("enctype"))||Da,i=new FormData(l,e),!gx()){let{name:u,type:f,value:p}=e;if(f==="image"){let m=u?`${u}.`:"";i.append(`${m}x`,"0"),i.append(`${m}y`,"0")}else u&&i.append(u,p)}}else{if(Ei(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=La,s=null,a=Da,o=e}return i&&a==="text/plain"&&(o=i,i=void 0),{action:s,method:r.toLowerCase(),encType:a,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function cc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bx(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&wn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function wx(e,t){if(e.id in t)return t[e.id];try{let r=await rc(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jx(e){return e!=null&&typeof e.page=="string"}function Nx(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function kx(e,t,r){let s=await Promise.all(e.map(async a=>{let i=t.routes[a.route.id];if(i){let o=await wx(i,r);return o.links?o.links():[]}return[]}));return Px(s.flat(1).filter(Nx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Rd(e,t,r,s,a,i){let o=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,l=(c,u)=>{var f;return r[u].pathname!==c.pathname||((f=r[u].route.path)==null?void 0:f.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return i==="assets"?t.filter((c,u)=>o(c,u)||l(c,u)):i==="data"?t.filter((c,u)=>{var p;let f=s.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(o(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let m=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Sx(e,t,{includeHydrateFallback:r}={}){return Cx(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let i=[a.module];return a.clientActionModule&&(i=i.concat(a.clientActionModule)),a.clientLoaderModule&&(i=i.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(i=i.concat(a.hydrateFallbackModule)),a.imports&&(i=i.concat(a.imports)),i}).flat(1))}function Cx(e){return[...new Set(e)]}function Ex(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function Px(e,t){let r=new Set,s=new Set(t);return e.reduce((a,i)=>{if(t&&!jx(i)&&i.as==="script"&&i.href&&s.has(i.href))return a;let l=JSON.stringify(Ex(i));return r.has(l)||(r.add(l),a.push({key:l,link:i})),a},[])}function wm(){let e=d.useContext(Kr);return cc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Tx(){let e=d.useContext(Ci);return cc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var dc=d.createContext(void 0);dc.displayName="FrameworkContext";function jm(){let e=d.useContext(dc);return cc(e,"You must render this element inside a <HydratedRouter> element"),e}function Rx(e,t){let r=d.useContext(dc),[s,a]=d.useState(!1),[i,o]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:f,onTouchStart:p}=t,m=d.useRef(null);d.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let j=v=>{v.forEach(h=>{o(h.isIntersecting)})},C=new IntersectionObserver(j,{threshold:.5});return m.current&&C.observe(m.current),()=>{C.disconnect()}}},[e]),d.useEffect(()=>{if(s){let j=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(j)}}},[s]);let b=()=>{a(!0)},y=()=>{a(!1),o(!1)};return r?e!=="intent"?[i,m,{}]:[i,m,{onFocus:as(l,b),onBlur:as(c,y),onMouseEnter:as(u,b),onMouseLeave:as(f,y),onTouchStart:as(p,b)}]:[!1,m,{}]}function as(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function _x({page:e,...t}){let{router:r}=wm(),s=d.useMemo(()=>fm(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?d.createElement(Ix,{page:e,matches:s,...t}):null}function Ax(e){let{manifest:t,routeModules:r}=jm(),[s,a]=d.useState([]);return d.useEffect(()=>{let i=!1;return kx(e,t,r).then(o=>{i||a(o)}),()=>{i=!0}},[e,t,r]),s}function Ix({page:e,matches:t,...r}){let s=rt(),{manifest:a,routeModules:i}=jm(),{basename:o}=wm(),{loaderData:l,matches:c}=Tx(),u=d.useMemo(()=>Rd(e,t,c,a,s,"data"),[e,t,c,a,s]),f=d.useMemo(()=>Rd(e,t,c,a,s,"assets"),[e,t,c,a,s]),p=d.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let y=new Set,j=!1;if(t.forEach(v=>{var x;let h=a.routes[v.route.id];!h||!h.hasLoader||(!u.some(N=>N.route.id===v.route.id)&&v.route.id in l&&((x=i[v.route.id])!=null&&x.shouldRevalidate)||h.hasClientLoader?j=!0:y.add(v.route.id))}),y.size===0)return[];let C=bx(e,o,"data");return j&&y.size>0&&C.searchParams.set("_routes",t.filter(v=>y.has(v.route.id)).map(v=>v.route.id).join(",")),[C.pathname+C.search]},[o,l,s,a,u,t,e,i]),m=d.useMemo(()=>Sx(f,a),[f,a]),b=Ax(f);return d.createElement(d.Fragment,null,p.map(y=>d.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...r})),m.map(y=>d.createElement("link",{key:y,rel:"modulepreload",href:y,...r})),b.map(({key:y,link:j})=>d.createElement("link",{key:y,...j})))}function Lx(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Nm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Nm&&(window.__reactRouterVersion="7.7.1")}catch{}function Dx({basename:e,children:t,window:r}){let s=d.useRef();s.current==null&&(s.current=xp({window:r,v5Compat:!0}));let a=s.current,[i,o]=d.useState({action:a.action,location:a.location}),l=d.useCallback(c=>{d.startTransition(()=>o(c))},[o]);return d.useLayoutEffect(()=>a.listen(l),[a,l]),d.createElement(cx,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a})}var km=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sm=d.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:a,reloadDocument:i,replace:o,state:l,target:c,to:u,preventScrollReset:f,viewTransition:p,...m},b){let{basename:y}=d.useContext(Zt),j=typeof u=="string"&&km.test(u),C,v=!1;if(typeof u=="string"&&j&&(C=u,Nm))try{let w=new URL(window.location.href),k=u.startsWith("//")?new URL(w.protocol+u):new URL(u),P=wn(k.pathname,y);k.origin===w.origin&&P!=null?u=P+k.search+k.hash:v=!0}catch{Qt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let h=qp(u,{relative:a}),[x,N,E]=Rx(s,m),T=Fx(u,{replace:o,state:l,target:c,preventScrollReset:f,relative:a,viewTransition:p});function S(w){t&&t(w),w.defaultPrevented||T(w)}let g=d.createElement("a",{...m,...E,href:C||h,onClick:v||i?t:S,ref:Lx(b,N),target:c,"data-discover":!j&&r==="render"?"true":void 0});return x&&!j?d.createElement(d.Fragment,null,g,d.createElement(_x,{page:h})):g});Sm.displayName="Link";var zx=d.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:a=!1,style:i,to:o,viewTransition:l,children:c,...u},f){let p=Gs(o,{relative:u.relative}),m=rt(),b=d.useContext(Ci),{navigator:y,basename:j}=d.useContext(Zt),C=b!=null&&Qx(p)&&l===!0,v=y.encodeLocation?y.encodeLocation(p).pathname:p.pathname,h=m.pathname,x=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;r||(h=h.toLowerCase(),x=x?x.toLowerCase():null,v=v.toLowerCase()),x&&j&&(x=wn(x,j)||x);const N=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let E=h===v||!a&&h.startsWith(v)&&h.charAt(N)==="/",T=x!=null&&(x===v||!a&&x.startsWith(v)&&x.charAt(v.length)==="/"),S={isActive:E,isPending:T,isTransitioning:C},g=E?t:void 0,w;typeof s=="function"?w=s(S):w=[s,E?"active":null,T?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let k=typeof i=="function"?i(S):i;return d.createElement(Sm,{...u,"aria-current":g,className:w,ref:f,style:k,to:o,viewTransition:l},typeof c=="function"?c(S):c)});zx.displayName="NavLink";var Mx=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:a,state:i,method:o=La,action:l,onSubmit:c,relative:u,preventScrollReset:f,viewTransition:p,...m},b)=>{let y=Ux(),j=qx(l,{relative:u}),C=o.toLowerCase()==="get"?"get":"post",v=typeof l=="string"&&km.test(l),h=x=>{if(c&&c(x),x.defaultPrevented)return;x.preventDefault();let N=x.nativeEvent.submitter,E=(N==null?void 0:N.getAttribute("formmethod"))||o;y(N||x.currentTarget,{fetcherKey:t,method:E,navigate:r,replace:a,state:i,relative:u,preventScrollReset:f,viewTransition:p})};return d.createElement("form",{ref:b,method:C,action:j,onSubmit:s?c:h,...m,"data-discover":!v&&e==="render"?"true":void 0})});Mx.displayName="Form";function Ox(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cm(e){let t=d.useContext(Kr);return Qe(t,Ox(e)),t}function Fx(e,{target:t,replace:r,state:s,preventScrollReset:a,relative:i,viewTransition:o}={}){let l=Ae(),c=rt(),u=Gs(e,{relative:i});return d.useCallback(f=>{if(px(f,t)){f.preventDefault();let p=r!==void 0?r:Bs(c)===Bs(u);l(e,{replace:p,state:s,preventScrollReset:a,relative:i,viewTransition:o})}},[c,l,u,r,s,t,e,a,i,o])}function Em(e){Qt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=d.useRef(il(e)),r=d.useRef(!1),s=rt(),a=d.useMemo(()=>xx(s.search,r.current?null:t.current),[s.search]),i=Ae(),o=d.useCallback((l,c)=>{const u=il(typeof l=="function"?l(new URLSearchParams(a)):l);r.current=!0,i("?"+u,c)},[i,a]);return[a,o]}var $x=0,Bx=()=>`__${String(++$x)}__`;function Ux(){let{router:e}=Cm("useSubmit"),{basename:t}=d.useContext(Zt),r=rx();return d.useCallback(async(s,a={})=>{let{action:i,method:o,encType:l,formData:c,body:u}=yx(s,t);if(a.navigate===!1){let f=a.fetcherKey||Bx();await e.fetch(f,r,a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function qx(e,{relative:t}={}){let{basename:r}=d.useContext(Zt),s=d.useContext(Yt);Qe(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),i={...Gs(e||".",{relative:t})},o=rt();if(e==null){i.search=o.search;let l=new URLSearchParams(i.search),c=l.getAll("index");if(c.some(f=>f==="")){l.delete("index"),c.filter(p=>p).forEach(p=>l.append("index",p));let f=l.toString();i.search=f?`?${f}`:""}}return(!e||e===".")&&a.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:xn([r,i.pathname])),Bs(i)}function Qx(e,{relative:t}={}){let r=d.useContext(xm);Qe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Cm("useViewTransitionState"),a=Gs(e,{relative:t});if(!r.isTransitioning)return!1;let i=wn(r.currentLocation.pathname,s)||r.currentLocation.pathname,o=wn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return li(a.pathname,o)!=null||li(a.pathname,i)!=null}function Yx({size:e=22,spinning:t=!1}){return n.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[n.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),n.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),n.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),n.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),n.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),n.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Wx(){const e=Ae(),{pathname:t}=rt(),r=d.useRef({}),s=d.useRef({}),[a,i]=d.useState(!1),o=d.useRef(null),l=x=>{if(navigator.vibrate)switch(x){case"light":navigator.vibrate(20);break;case"medium":navigator.vibrate(35);break;case"heavy":navigator.vibrate(50);break;case"double":navigator.vibrate([30,50,30]);break;case"success":navigator.vibrate([20,50,20,50,20]);break;default:navigator.vibrate(25)}};d.useCallback(()=>{var x;if(["/","/play","/swipe","/profile"].includes(t)){const N=((x=o.current)==null?void 0:x.scrollTop)||0,E=window.scrollY||window.pageYOffset||0,T=N>0?N:E;console.log(`Saving scroll for ${t}: main=${N}, window=${E}, saved=${T}`),r.current[t]=T}},[t]),d.useEffect(()=>{let x=null;const N=()=>{x&&cancelAnimationFrame(x),x=requestAnimationFrame(()=>{var T;if(["/","/play","/swipe","/profile"].includes(t)){const S=((T=o.current)==null?void 0:T.scrollTop)||0,g=window.scrollY||window.pageYOffset||0,w=S>0?S:g;r.current[t]=w,console.log(`Scroll position updated for ${t}: ${w}`)}})};window.addEventListener("scroll",N,{passive:!0});const E=o.current;return E&&E.addEventListener("scroll",N,{passive:!0}),()=>{x&&cancelAnimationFrame(x),window.removeEventListener("scroll",N),E&&E.removeEventListener("scroll",N)}},[t]),d.useEffect(()=>{if(o.current&&o.current.classList.add("navigating"),["/profile/","/quiz/","/practice/","/play/classic","/settings","/about"].some(E=>t.startsWith(E)))window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20);else{const E=r.current[t];if(console.log(`Attempting to restore scroll for ${t}: ${E}`),E!=null&&E>0){const T=(S=0)=>{S>=5||(o.current?(o.current.scrollTop=E,setTimeout(()=>{var w;const g=((w=o.current)==null?void 0:w.scrollTop)||0;Math.abs(g-E)>10?(window.scrollTo(0,E),setTimeout(()=>{const k=window.scrollY||window.pageYOffset||0;console.log(`Restore attempt ${S+1}: main=${g}, window=${k}, target=${E}`),Math.abs(k-E)>10&&Math.abs(g-E)>10&&T(S+1)},20)):console.log(`Successfully restored scroll to ${g}`)},20)):window.scrollTo(0,E))};T(0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}else window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}},[t]);const[c,u]=d.useState(!1),[f,p]=d.useState({open:!1,go:null}),[m,b]=d.useState(!1);d.useEffect(()=>{const x=()=>{b(document.body.classList.contains("hide-bottom-nav"))};x();const N=new MutationObserver(x);return N.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>N.disconnect()},[]),d.useEffect(()=>{const x=new MutationObserver(()=>{u(document.body.classList.contains("modal-open"))});return x.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>x.disconnect()},[]);const j=c||m||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(x=>x.test(t)),C=x=>x==="/"?t==="/":t.startsWith(x),v=d.useCallback(()=>{console.log("Scrolling to top"),window.scrollTo({top:0,behavior:"smooth"}),o.current&&o.current.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},[]),h=({path:x,icon:N,label:E,emoji:T})=>{const S=C(x),[g,w]=d.useState(!1),k=d.useCallback(()=>{var q;const P=Date.now();if(S){const Y=s.current[x]||0;console.log(`Active tab clicked. Time since last tap: ${P-Y}ms`),P-Y<500?(console.log("Double tap detected!"),v(),l("double"),s.current[x]=0):s.current[x]=P;return}if(["/","/play","/swipe","/profile"].includes(t)){const Y=((q=o.current)==null?void 0:q.scrollTop)||0,H=window.scrollY||window.pageYOffset||0,_=Y>0?Y:H;console.log(`Manually saving scroll before navigation from ${t}: ${_}`),r.current[t]=_}const A=s.current[x]||0;if(P-A<500){console.log("Double tap on inactive tab - navigating and scrolling to top"),r.current[x]=0,x==="/play"?(i(!0),l("double"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1),setTimeout(v,100)},200)):(l("double"),e(x),setTimeout(v,100)),s.current[x]=0;return}s.current[x]=P,w(!0),setTimeout(()=>w(!1),600);const U=()=>{if(x==="/play"){i(!0),l("heavy"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1)},200);return}l("medium"),e(x)};if(localStorage.getItem("qp_in_question")==="true"){p({open:!0,go:U});return}U()},[S,x,t,e,v,l]);return n.jsxs("button",{type:"button",onClick:k,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${S?"scale-110":"scale-100 hover:scale-105"}
          ${g?"animate-bounce":""}`,"aria-current":S?"page":void 0,children:[S&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),n.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),n.jsx("div",{className:`leading-none text-2xl transition-transform ${S?"scale-125":""} ${x==="/play"&&a?"animate-spin":""}`,children:T||N}),n.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${S?"text-white":"text-base-muted/80"}`,children:E})]})};return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("style",{children:`
        .hide-bottom-nav nav[role="navigation"] {
         display: none !important;
        }
        main.navigating {
          visibility: hidden;
        }
        main {
          scroll-behavior: auto !important;
        }
      `}),n.jsx("main",{ref:o,className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:j||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:j||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto"},children:n.jsx(lx,{})}),f.open&&n.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[n.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[n.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),n.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),n.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{l("medium"),p({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),n.jsx("button",{onClick:()=>{l("heavy");const x=f.go;p({open:!1,go:null}),x==null||x()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),n.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!j&&n.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[n.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),n.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),n.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[n.jsx(h,{path:"/",emoji:"🏠",label:"Home"}),n.jsx(h,{path:"/play",icon:n.jsx(Yx,{size:26,spinning:a}),label:"Play"}),n.jsx(h,{path:"/swipe",emoji:"📚",label:"Swipe"}),n.jsx(h,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function ci(){return ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},ci.apply(null,arguments)}function Hx(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Gx(e){d.useEffect(e,[])}var Kx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function $t(e,t){var r=t===void 0?{}:t,s=r.volume,a=s===void 0?1:s,i=r.playbackRate,o=i===void 0?1:i,l=r.soundEnabled,c=l===void 0?!0:l,u=r.interrupt,f=u===void 0?!1:u,p=r.onload,m=Hx(r,Kx),b=yt.useRef(null),y=yt.useRef(!1),j=yt.useState(null),C=j[0],v=j[1],h=yt.useState(null),x=h[0],N=h[1],E=function(){typeof p=="function"&&p.call(this),y.current&&v(this.duration()*1e3),N(this)};Gx(function(){return rc(()=>import("./howler-7c1db281.js").then(k=>k.h),[]).then(function(k){if(!y.current){var P;b.current=(P=k.Howl)!==null&&P!==void 0?P:k.default.Howl,y.current=!0,new b.current(ci({src:Array.isArray(e)?e:[e],volume:a,rate:o,onload:E},m))}}),function(){y.current=!1}}),yt.useEffect(function(){b.current&&x&&N(new b.current(ci({src:Array.isArray(e)?e:[e],volume:a,onload:E},m)))},[JSON.stringify(e)]),yt.useEffect(function(){x&&(x.volume(a),m.sprite||x.rate(o))},[x,a,o]);var T=yt.useCallback(function(k){typeof k>"u"&&(k={}),!(!x||!c&&!k.forceSoundEnabled)&&(f&&x.stop(),k.playbackRate&&x.rate(k.playbackRate),x.play(k.id))},[x,c,f]),S=yt.useCallback(function(k){x&&x.stop(k)},[x]),g=yt.useCallback(function(k){x&&x.pause(k)},[x]),w=[T,{sound:x,stop:S,pause:g,duration:C}];return w}class Vx{constructor(){console.log("UserService initialized")}getUserData(t){try{if(!t)return console.log("No phone provided to getUserData"),null;const s=JSON.parse(localStorage.getItem("users")||"{}")[t]||{},a=JSON.parse(localStorage.getItem(`user_profile_${t}`)||"{}"),i={...s,phone:t,username:a.name||s.username||"",email:a.email||"",city:a.city||"",state:a.state||"",country:a.country||""};return console.log("getUserData merged result:",i),i}catch(r){return console.error("Error in getUserData:",r),null}}getUserDataByIdentifier(t){try{const r=this.getUserData(t);if(r)return r;const s=JSON.parse(localStorage.getItem("users")||"{}");for(let a in s)if(s[a].username===t)return this.getUserData(a);return null}catch(r){return console.error("Error in getUserDataByIdentifier:",r),null}}userExists(t){try{return JSON.parse(localStorage.getItem("users")||"{}").hasOwnProperty(t)}catch(r){return console.error("Error checking if user exists:",r),!1}}createUser(t,r){try{console.log("Creating user:",t,r);const s=JSON.parse(localStorage.getItem("users")||"{}");return s[t]={username:r.username,password:r.password||"123456",avatar:r.avatar,gender:r.gender,ageGroup:r.ageGroup,phone:t,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(s)),this.setCurrentUser(t),console.log("User created successfully"),!0}catch(s){return console.error("Error creating user:",s),!1}}setCurrentUser(t){try{const r=this.getUserData(t);if(!r)return!1;const s={phone:t,username:r.username,avatar:r.avatar,gender:r.gender,ageGroup:r.ageGroup};localStorage.setItem("currentUser",JSON.stringify(s));const a=JSON.parse(localStorage.getItem("qp_player")||"{}");return a.name=r.username,localStorage.setItem("qp_player",JSON.stringify(a)),console.log("Current user set:",s),!0}catch(r){return console.error("Error setting current user:",r),!1}}updateUserProfile(t,r){try{if(console.log("Updating profile for:",t,r),r.name){const l=JSON.parse(localStorage.getItem("users")||"{}");if(l[t]){l[t].username=r.name;const c=l[t].password;l[t].password=c,localStorage.setItem("users",JSON.stringify(l))}}const s=`user_profile_${t}`,i={...JSON.parse(localStorage.getItem(s)||"{}"),...r};localStorage.setItem(s,JSON.stringify(i));const o=JSON.parse(localStorage.getItem("currentUser")||"{}");if(o.phone===t){o.username=r.name||o.username,localStorage.setItem("currentUser",JSON.stringify(o));const l=JSON.parse(localStorage.getItem("qp_player")||"{}");l.name=r.name||l.name,localStorage.setItem("qp_player",JSON.stringify(l))}return console.log("Profile updated successfully"),!0}catch(s){return console.error("Error updating profile:",s),!1}}getCurrentUser(){try{const t=JSON.parse(localStorage.getItem("currentUser")||"{}");return t.phone?this.getUserData(t.phone):null}catch(t){return console.error("Error getting current user:",t),null}}signOut(){try{return localStorage.removeItem("currentUser"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),console.log("User signed out"),!0}catch(t){return console.error("Error signing out:",t),!1}}}const Je=new Vx;window.userService=Je;class Xx{constructor(){this.STORAGE_KEYS={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on",GAME_STATS:"game_stats_",DAILY_PROGRESS:"daily_progress_",QUEST_DATA:"quest_data_",STREAK_DATA:"streak_data_",GAME_HISTORY:"game_history_"}}getCoins(){return this.safeGet(this.STORAGE_KEYS.COINS,0)}setCoins(t){return this.safeSet(this.STORAGE_KEYS.COINS,t),t}addCoins(t,r=""){const a=this.getCoins()+t;this.setCoins(a);const i=Je.getCurrentUser();return i!=null&&i.phone&&(this.logCoinTransaction(i.phone,t,r),this.updateDailyCoins(i.phone,t)),a}spendCoins(t,r=""){const s=this.getCoins();if(s<t)return!1;const a=s-t;this.setCoins(a);const i=Je.getCurrentUser();return i!=null&&i.phone&&this.logCoinTransaction(i.phone,-t,r),!0}getXP(){return this.safeGet(this.STORAGE_KEYS.XP,0)}setXP(t){return this.safeSet(this.STORAGE_KEYS.XP,t),t}addXP(t){const s=this.getXP()+t;this.setXP(s),this.checkAndUpdateLevel(s);const a=Je.getCurrentUser();return a!=null&&a.phone&&this.updateDailyXP(a.phone,t),s}getLevel(){return this.safeGet(this.STORAGE_KEYS.LEVEL,1)}setLevel(t){return this.safeSet(this.STORAGE_KEYS.LEVEL,t),t}checkAndUpdateLevel(t=null){const r=t||this.getXP(),s=this.getLevel();let a=1,i=0;for(;i<=r;)a++,i=100*a*(a-1);if(a--,a>s){this.setLevel(a);const o=50*(a-s);return this.addCoins(o,`Level up to ${a}!`),!0}return!1}initializeUserData(t){if(!t)return;const r=this.getUserStats(t);if(r)return r;const s={stats:{totalQuizzes:0,totalPractice:0,totalCorrect:0,totalWrong:0,winStreak:0,bestStreak:0,highScore:0,gamesPlayed:0},quests:{daily:[{id:"quiz_3",type:"quiz",target:3,current:0,reward:60,completed:!1},{id:"practice_15",type:"practice",target:15,current:0,reward:100,completed:!1},{id:"win_5",type:"win_streak",target:5,current:0,reward:150,completed:!1},{id:"speed_run",type:"speed_run",target:1,current:0,reward:80,completed:!1}]},streak:{current:0,lastPlayedDate:null,longestStreak:0}};return this.safeSet(this.STORAGE_KEYS.GAME_STATS+t,s.stats),this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,s.quests),this.safeSet(this.STORAGE_KEYS.STREAK_DATA+t,s.streak),this.resetDailyProgress(t),s}getUserStats(t){return t?this.safeGet(this.STORAGE_KEYS.GAME_STATS+t,null):null}updateUserStats(t,r){if(!t)return null;const a={...this.getUserStats(t)||{},...r};return this.safeSet(this.STORAGE_KEYS.GAME_STATS+t,a),a}getDailyProgress(t){if(!t)return null;const r=this.safeGet(this.STORAGE_KEYS.DAILY_PROGRESS+t,null),s=new Date().toDateString();return!r||r.date!==s?this.resetDailyProgress(t):r}resetDailyProgress(t){if(!t)return null;const r={date:new Date().toDateString(),quizzesPlayed:0,practiceCompleted:0,coinsEarned:0,xpEarned:0,questsCompleted:[]};return this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,r),this.resetDailyQuests(t),r}updateDailyCoins(t,r){if(!t)return;const s=this.getDailyProgress(t);s&&(s.coinsEarned+=r,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,s))}updateDailyXP(t,r){if(!t)return;const s=this.getDailyProgress(t);s&&(s.xpEarned+=r,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,s))}getQuestData(t){return t?this.safeGet(this.STORAGE_KEYS.QUEST_DATA+t,null):null}resetDailyQuests(t){if(!t)return null;const r={daily:[{id:"quiz_3",type:"quiz",target:3,current:0,reward:60,completed:!1},{id:"practice_15",type:"practice",target:15,current:0,reward:100,completed:!1},{id:"win_5",type:"win_streak",target:5,current:0,reward:150,completed:!1},{id:"speed_run",type:"speed_run",target:1,current:0,reward:80,completed:!1}]};return this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,r),r}updateQuestProgress(t,r,s=1){if(!t)return null;const a=this.getQuestData(t);if(!(a!=null&&a.daily))return null;let i=0;const o={...a,daily:a.daily.map(l=>{if(l.type===r&&!l.completed){const c=Math.min(l.current+s,l.target),u=c>=l.target;return u&&!l.completed&&(i+=l.reward,this.addCoins(l.reward,`Quest completed: ${l.id}`)),{...l,current:c,completed:u}}return l})};return this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,o),{updatedQuests:o,coinsEarned:i}}getStreakData(t){return t?this.safeGet(this.STORAGE_KEYS.STREAK_DATA+t,{current:0,lastPlayedDate:null,longestStreak:0}):null}updateStreak(t){if(!t)return null;const r=this.getStreakData(t),s=new Date().toDateString(),a=new Date(Date.now()-864e5).toDateString();return r.lastPlayedDate===s||(r.lastPlayedDate===a?r.current++:r.current=1,r.lastPlayedDate=s,r.longestStreak=Math.max(r.current,r.longestStreak),this.safeSet(this.STORAGE_KEYS.STREAK_DATA+t,r),r.current%7===0&&this.addCoins(100,"7-day streak bonus!")),r}recordQuizSession(t,r){const{score:s,totalQuestions:a,category:i,difficulty:o="medium",mode:l="classic"}=r,f=s*5+(s===a?20:0),p=s*10;if(this.addCoins(f,`Quiz: ${s}/${a}`),this.addXP(p),t){const m=this.getUserStats(t)||this.initializeUserData(t).stats;m.totalQuizzes++,m.totalCorrect+=s,m.totalWrong+=a-s,m.gamesPlayed++,s>=a*.7?(m.winStreak++,m.bestStreak=Math.max(m.winStreak,m.bestStreak)):m.winStreak=0,m.highScore=Math.max(m.highScore,s),this.updateUserStats(t,m);const b=this.getDailyProgress(t);b.quizzesPlayed++,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,b),this.updateQuestProgress(t,"quiz",1),m.winStreak>=5&&this.updateQuestProgress(t,"win_streak",m.winStreak),this.updateStreak(t),this.addToHistory(t,{type:"quiz",mode:l,category:i,score:s,totalQuestions:a,difficulty:o,coinsEarned:f,xpEarned:p,timestamp:new Date().toISOString()})}return{coinsEarned:f,xpEarned:p,newTotal:this.getCoins(),newXP:this.getXP(),newLevel:this.getLevel()}}recordPracticeSession(t,r){const{questionsCompleted:s,correctAnswers:a,category:i="general"}=r,o=s*2,l=s*5;if(this.addCoins(o,`Practice: ${s} questions`),this.addXP(l),t){const c=this.getUserStats(t)||this.initializeUserData(t).stats;c.totalPractice+=s,c.totalCorrect+=a,c.totalWrong+=s-a,this.updateUserStats(t,c);const u=this.getDailyProgress(t);u.practiceCompleted+=s,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,u),this.updateQuestProgress(t,"practice",s),this.updateStreak(t),this.addToHistory(t,{type:"practice",category:i,questionsCompleted:s,correctAnswers:a,coinsEarned:o,xpEarned:l,timestamp:new Date().toISOString()})}return{coinsEarned:o,xpEarned:l,newTotal:this.getCoins(),newXP:this.getXP()}}getGameHistory(t){return t?this.safeGet(this.STORAGE_KEYS.GAME_HISTORY+t,[]):[]}addToHistory(t,r){if(!t)return;const s=this.getGameHistory(t);s.unshift(r),s.length>50&&s.pop(),this.safeSet(this.STORAGE_KEYS.GAME_HISTORY+t,s)}getTodaySummary(t){var a;const r=t||((a=Je.getCurrentUser())==null?void 0:a.phone),s={totalCoins:this.getCoins(),totalXP:this.getXP(),level:this.getLevel(),xpProgress:this.getXP()%100,xpNeeded:100,todayCoins:0,todayXP:0,streak:0,questProgress:0,activeQuests:0};if(r){const i=this.getDailyProgress(r),o=this.getStreakData(r),l=this.getQuestData(r),c=this.getUserStats(r);if(i&&(s.todayCoins=i.coinsEarned,s.todayXP=i.xpEarned),o&&(s.streak=o.current),l!=null&&l.daily){const u=l.daily.filter(f=>f.completed).length;s.questProgress=Math.round(u/l.daily.length*100),s.activeQuests=l.daily.filter(f=>!f.completed).length}c&&(s.rank=23,s.winStreak=c.winStreak)}return s}logCoinTransaction(t,r,s){if(!t)return;const a="coin_transactions_"+t,i=this.safeGet(a,[]);i.push({amount:r,reason:s,timestamp:new Date().toISOString(),balance:this.getCoins()}),i.length>100&&i.shift(),this.safeSet(a,i)}safeGet(t,r=null){try{const s=localStorage.getItem(t);return s?JSON.parse(s):r}catch{return r}}safeSet(t,r){try{return localStorage.setItem(t,JSON.stringify(r)),!0}catch{return!1}}clearAllData(){Object.values(this.STORAGE_KEYS).forEach(t=>{typeof t=="string"&&!t.includes("_")&&localStorage.removeItem(t)})}clearUserData(t){if(!t)return;[this.STORAGE_KEYS.GAME_STATS+t,this.STORAGE_KEYS.DAILY_PROGRESS+t,this.STORAGE_KEYS.QUEST_DATA+t,this.STORAGE_KEYS.STREAK_DATA+t,this.STORAGE_KEYS.GAME_HISTORY+t,"coin_transactions_"+t].forEach(s=>localStorage.removeItem(s))}}const be=new Xx;var Pm={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((r,s)=>{e.exports=s()})(Bm,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},a,i=!s.document&&!!s.postMessage,o=s.IS_PAPA_WORKER||!1,l={},c=0,u={};function f(g){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(w){var k=E(w);k.chunkSize=parseInt(k.chunkSize),w.step||w.chunk||(k.chunkSize=null),this._handle=new j(k),(this._handle.streamer=this)._config=k}).call(this,g),this.parseChunk=function(w,k){var P=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<P){let U=this._config.newline;U||(A=this._config.quoteChar||'"',U=this._handle.guessLineEndings(w,A)),w=[...w.split(U).slice(P)].join(U)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(A=this._config.beforeFirstChunk(w))!==void 0&&(w=A),this.isFirstChunk=!1,this._halted=!1;var P=this._partialLine+w,A=(this._partialLine="",this._handle.parse(P,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(w=A.meta.cursor,P=(this._finished||(this._partialLine=P.substring(w-this._baseIndex),this._baseIndex=w),A&&A.data&&(this._rowCount+=A.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),o)s.postMessage({results:A,workerId:u.WORKER_ID,finished:P});else if(S(this._config.chunk)&&!k){if(this._config.chunk(A,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=A=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(A.data),this._completeResults.errors=this._completeResults.errors.concat(A.errors),this._completeResults.meta=A.meta),this._completed||!P||!S(this._config.complete)||A&&A.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),P||A&&A.meta.paused||this._nextChunk(),A}this._halted=!0},this._sendError=function(w){S(this._config.error)?this._config.error(w):o&&this._config.error&&s.postMessage({workerId:u.WORKER_ID,error:w,finished:!1})}}function p(g){var w;(g=g||{}).chunkSize||(g.chunkSize=u.RemoteChunkSize),f.call(this,g),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(w=new XMLHttpRequest,this._config.withCredentials&&(w.withCredentials=this._config.withCredentials),i||(w.onload=T(this._chunkLoaded,this),w.onerror=T(this._chunkError,this)),w.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var k,P=this._config.downloadRequestHeaders;for(k in P)w.setRequestHeader(k,P[k])}var A;this._config.chunkSize&&(A=this._start+this._config.chunkSize-1,w.setRequestHeader("Range","bytes="+this._start+"-"+A));try{w.send(this._config.downloadRequestBody)}catch(U){this._chunkError(U.message)}i&&w.status===0&&this._chunkError()}},this._chunkLoaded=function(){w.readyState===4&&(w.status<200||400<=w.status?this._chunkError():(this._start+=this._config.chunkSize||w.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(w),this.parseChunk(w.responseText)))},this._chunkError=function(k){k=w.statusText||k,this._sendError(new Error(k))}}function m(g){(g=g||{}).chunkSize||(g.chunkSize=u.LocalChunkSize),f.call(this,g);var w,k,P=typeof FileReader<"u";this.stream=function(A){this._input=A,k=A.slice||A.webkitSlice||A.mozSlice,P?((w=new FileReader).onload=T(this._chunkLoaded,this),w.onerror=T(this._chunkError,this)):w=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var A=this._input,U=(this._config.chunkSize&&(U=Math.min(this._start+this._config.chunkSize,this._input.size),A=k.call(A,this._start,U)),w.readAsText(A,this._config.encoding));P||this._chunkLoaded({target:{result:U}})},this._chunkLoaded=function(A){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(A.target.result)},this._chunkError=function(){this._sendError(w.error)}}function b(g){var w;f.call(this,g=g||{}),this.stream=function(k){return w=k,this._nextChunk()},this._nextChunk=function(){var k,P;if(!this._finished)return k=this._config.chunkSize,w=k?(P=w.substring(0,k),w.substring(k)):(P=w,""),this._finished=!w,this.parseChunk(P)}}function y(g){f.call(this,g=g||{});var w=[],k=!0,P=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(A){this._input=A,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){P&&w.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),w.length?this.parseChunk(w.shift()):k=!0},this._streamData=T(function(A){try{w.push(typeof A=="string"?A:A.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(w.shift()))}catch(U){this._streamError(U)}},this),this._streamError=T(function(A){this._streamCleanUp(),this._sendError(A)},this),this._streamEnd=T(function(){this._streamCleanUp(),P=!0,this._streamData("")},this),this._streamCleanUp=T(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(g){var w,k,P,A,U=Math.pow(2,53),G=-U,q=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Y=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,H=this,_=0,R=0,$=!1,z=!1,D=[],O={data:[],errors:[],meta:{}};function Z(M){return g.skipEmptyLines==="greedy"?M.join("").trim()==="":M.length===1&&M[0].length===0}function re(){if(O&&P&&(V("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),P=!1),g.skipEmptyLines&&(O.data=O.data.filter(function(K){return!Z(K)})),L()){let K=function(ee,oe){S(g.transformHeader)&&(ee=g.transformHeader(ee,oe)),D.push(ee)};if(O)if(Array.isArray(O.data[0])){for(var M=0;L()&&M<O.data.length;M++)O.data[M].forEach(K);O.data.splice(0,1)}else O.data.forEach(K)}function I(K,ee){for(var oe=g.header?{}:[],ne=0;ne<K.length;ne++){var B=ne,Q=K[ne],Q=((le,W)=>(te=>(g.dynamicTypingFunction&&g.dynamicTyping[te]===void 0&&(g.dynamicTyping[te]=g.dynamicTypingFunction(te)),(g.dynamicTyping[te]||g.dynamicTyping)===!0))(le)?W==="true"||W==="TRUE"||W!=="false"&&W!=="FALSE"&&((te=>{if(q.test(te)&&(te=parseFloat(te),G<te&&te<U))return 1})(W)?parseFloat(W):Y.test(W)?new Date(W):W===""?null:W):W)(B=g.header?ne>=D.length?"__parsed_extra":D[ne]:B,Q=g.transform?g.transform(Q,B):Q);B==="__parsed_extra"?(oe[B]=oe[B]||[],oe[B].push(Q)):oe[B]=Q}return g.header&&(ne>D.length?V("FieldMismatch","TooManyFields","Too many fields: expected "+D.length+" fields but parsed "+ne,R+ee):ne<D.length&&V("FieldMismatch","TooFewFields","Too few fields: expected "+D.length+" fields but parsed "+ne,R+ee)),oe}var F;O&&(g.header||g.dynamicTyping||g.transform)&&(F=1,!O.data.length||Array.isArray(O.data[0])?(O.data=O.data.map(I),F=O.data.length):O.data=I(O.data,0),g.header&&O.meta&&(O.meta.fields=D),R+=F)}function L(){return g.header&&D.length===0}function V(M,I,F,K){M={type:M,code:I,message:F},K!==void 0&&(M.row=K),O.errors.push(M)}S(g.step)&&(A=g.step,g.step=function(M){O=M,L()?re():(re(),O.data.length!==0&&(_+=M.data.length,g.preview&&_>g.preview?k.abort():(O.data=O.data[0],A(O,H))))}),this.parse=function(M,I,F){var K=g.quoteChar||'"',K=(g.newline||(g.newline=this.guessLineEndings(M,K)),P=!1,g.delimiter?S(g.delimiter)&&(g.delimiter=g.delimiter(M),O.meta.delimiter=g.delimiter):((K=((ee,oe,ne,B,Q)=>{var le,W,te,ce;Q=Q||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var ve=0;ve<Q.length;ve++){for(var pe,xe=Q[ve],fe=0,Se=0,de=0,we=(te=void 0,new v({comments:B,delimiter:xe,newline:oe,preview:10}).parse(ee)),Ie=0;Ie<we.data.length;Ie++)ne&&Z(we.data[Ie])?de++:(pe=we.data[Ie].length,Se+=pe,te===void 0?te=pe:0<pe&&(fe+=Math.abs(pe-te),te=pe));0<we.data.length&&(Se/=we.data.length-de),(W===void 0||fe<=W)&&(ce===void 0||ce<Se)&&1.99<Se&&(W=fe,le=xe,ce=Se)}return{successful:!!(g.delimiter=le),bestDelimiter:le}})(M,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess)).successful?g.delimiter=K.bestDelimiter:(P=!0,g.delimiter=u.DefaultDelimiter),O.meta.delimiter=g.delimiter),E(g));return g.preview&&g.header&&K.preview++,w=M,k=new v(K),O=k.parse(w,I,F),re(),$?{meta:{paused:!0}}:O||{meta:{paused:!1}}},this.paused=function(){return $},this.pause=function(){$=!0,k.abort(),w=S(g.chunk)?"":w.substring(k.getCharIndex())},this.resume=function(){H.streamer._halted?($=!1,H.streamer.parseChunk(w,!0)):setTimeout(H.resume,3)},this.aborted=function(){return z},this.abort=function(){z=!0,k.abort(),O.meta.aborted=!0,S(g.complete)&&g.complete(O),w=""},this.guessLineEndings=function(ee,K){ee=ee.substring(0,1048576);var K=new RegExp(C(K)+"([^]*?)"+C(K),"gm"),F=(ee=ee.replace(K,"")).split("\r"),K=ee.split(`
`),ee=1<K.length&&K[0].length<F[0].length;if(F.length===1||ee)return`
`;for(var oe=0,ne=0;ne<F.length;ne++)F[ne][0]===`
`&&oe++;return oe>=F.length/2?`\r
`:"\r"}}function C(g){return g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(g){var w=(g=g||{}).delimiter,k=g.newline,P=g.comments,A=g.step,U=g.preview,G=g.fastMode,q=null,Y=!1,H=g.quoteChar==null?'"':g.quoteChar,_=H;if(g.escapeChar!==void 0&&(_=g.escapeChar),(typeof w!="string"||-1<u.BAD_DELIMITERS.indexOf(w))&&(w=","),P===w)throw new Error("Comment character same as delimiter");P===!0?P="#":(typeof P!="string"||-1<u.BAD_DELIMITERS.indexOf(P))&&(P=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var R=0,$=!1;this.parse=function(z,D,O){if(typeof z!="string")throw new Error("Input must be a string");var Z=z.length,re=w.length,L=k.length,V=P.length,M=S(A),I=[],F=[],K=[],ee=R=0;if(!z)return fe();if(G||G!==!1&&z.indexOf(H)===-1){for(var oe=z.split(k),ne=0;ne<oe.length;ne++){if(K=oe[ne],R+=K.length,ne!==oe.length-1)R+=k.length;else if(O)return fe();if(!P||K.substring(0,V)!==P){if(M){if(I=[],ce(K.split(w)),Se(),$)return fe()}else ce(K.split(w));if(U&&U<=ne)return I=I.slice(0,U),fe(!0)}}return fe()}for(var B=z.indexOf(w,R),Q=z.indexOf(k,R),le=new RegExp(C(_)+C(H),"g"),W=z.indexOf(H,R);;)if(z[R]===H)for(W=R,R++;;){if((W=z.indexOf(H,W+1))===-1)return O||F.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:I.length,index:R}),pe();if(W===Z-1)return pe(z.substring(R,W).replace(le,H));if(H===_&&z[W+1]===_)W++;else if(H===_||W===0||z[W-1]!==_){B!==-1&&B<W+1&&(B=z.indexOf(w,W+1));var te=ve((Q=Q!==-1&&Q<W+1?z.indexOf(k,W+1):Q)===-1?B:Math.min(B,Q));if(z.substr(W+1+te,re)===w){K.push(z.substring(R,W).replace(le,H)),z[R=W+1+te+re]!==H&&(W=z.indexOf(H,R)),B=z.indexOf(w,R),Q=z.indexOf(k,R);break}if(te=ve(Q),z.substring(W+1+te,W+1+te+L)===k){if(K.push(z.substring(R,W).replace(le,H)),xe(W+1+te+L),B=z.indexOf(w,R),W=z.indexOf(H,R),M&&(Se(),$))return fe();if(U&&I.length>=U)return fe(!0);break}F.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:I.length,index:R}),W++}}else if(P&&K.length===0&&z.substring(R,R+V)===P){if(Q===-1)return fe();R=Q+L,Q=z.indexOf(k,R),B=z.indexOf(w,R)}else if(B!==-1&&(B<Q||Q===-1))K.push(z.substring(R,B)),R=B+re,B=z.indexOf(w,R);else{if(Q===-1)break;if(K.push(z.substring(R,Q)),xe(Q+L),M&&(Se(),$))return fe();if(U&&I.length>=U)return fe(!0)}return pe();function ce(de){I.push(de),ee=R}function ve(de){var we=0;return we=de!==-1&&(de=z.substring(W+1,de))&&de.trim()===""?de.length:we}function pe(de){return O||(de===void 0&&(de=z.substring(R)),K.push(de),R=Z,ce(K),M&&Se()),fe()}function xe(de){R=de,ce(K),K=[],Q=z.indexOf(k,R)}function fe(de){if(g.header&&!D&&I.length&&!Y){var we=I[0],Ie=Object.create(null),dt=new Set(we);let Le=!1;for(let Me=0;Me<we.length;Me++){let Xe=we[Me];if(Ie[Xe=S(g.transformHeader)?g.transformHeader(Xe,Me):Xe]){let zt,X=Ie[Xe];for(;zt=Xe+"_"+X,X++,dt.has(zt););dt.add(zt),we[Me]=zt,Ie[Xe]++,Le=!0,(q=q===null?{}:q)[zt]=Xe}else Ie[Xe]=1,we[Me]=Xe;dt.add(Xe)}Le&&console.warn("Duplicate headers found and renamed."),Y=!0}return{data:I,errors:F,meta:{delimiter:w,linebreak:k,aborted:$,truncated:!!de,cursor:ee+(D||0),renamedHeaders:q}}}function Se(){A(fe()),I=[],F=[]}},this.abort=function(){$=!0},this.getCharIndex=function(){return R}}function h(g){var w=g.data,k=l[w.workerId],P=!1;if(w.error)k.userError(w.error,w.file);else if(w.results&&w.results.data){var A={abort:function(){P=!0,x(w.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:N,resume:N};if(S(k.userStep)){for(var U=0;U<w.results.data.length&&(k.userStep({data:w.results.data[U],errors:w.results.errors,meta:w.results.meta},A),!P);U++);delete w.results}else S(k.userChunk)&&(k.userChunk(w.results,A,w.file),delete w.results)}w.finished&&!P&&x(w.workerId,w.results)}function x(g,w){var k=l[g];S(k.userComplete)&&k.userComplete(w),k.terminate(),delete l[g]}function N(){throw new Error("Not implemented.")}function E(g){if(typeof g!="object"||g===null)return g;var w,k=Array.isArray(g)?[]:{};for(w in g)k[w]=E(g[w]);return k}function T(g,w){return function(){g.apply(w,arguments)}}function S(g){return typeof g=="function"}return u.parse=function(g,w){var k=(w=w||{}).dynamicTyping||!1;if(S(k)&&(w.dynamicTypingFunction=k,k={}),w.dynamicTyping=k,w.transform=!!S(w.transform)&&w.transform,!w.worker||!u.WORKERS_SUPPORTED)return k=null,u.NODE_STREAM_INPUT,typeof g=="string"?(g=(P=>P.charCodeAt(0)!==65279?P:P.slice(1))(g),k=new(w.download?p:b)(w)):g.readable===!0&&S(g.read)&&S(g.on)?k=new y(w):(s.File&&g instanceof File||g instanceof Object)&&(k=new m(w)),k.stream(g);(k=(()=>{var P;return!!u.WORKERS_SUPPORTED&&(P=(()=>{var A=s.URL||s.webkitURL||null,U=r.toString();return u.BLOB_URL||(u.BLOB_URL=A.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",U,")();"],{type:"text/javascript"})))})(),(P=new s.Worker(P)).onmessage=h,P.id=c++,l[P.id]=P)})()).userStep=w.step,k.userChunk=w.chunk,k.userComplete=w.complete,k.userError=w.error,w.step=S(w.step),w.chunk=S(w.chunk),w.complete=S(w.complete),w.error=S(w.error),delete w.worker,k.postMessage({input:g,config:w,workerId:k.id})},u.unparse=function(g,w){var k=!1,P=!0,A=",",U=`\r
`,G='"',q=G+G,Y=!1,H=null,_=!1,R=((()=>{if(typeof w=="object"){if(typeof w.delimiter!="string"||u.BAD_DELIMITERS.filter(function(D){return w.delimiter.indexOf(D)!==-1}).length||(A=w.delimiter),typeof w.quotes!="boolean"&&typeof w.quotes!="function"&&!Array.isArray(w.quotes)||(k=w.quotes),typeof w.skipEmptyLines!="boolean"&&typeof w.skipEmptyLines!="string"||(Y=w.skipEmptyLines),typeof w.newline=="string"&&(U=w.newline),typeof w.quoteChar=="string"&&(G=w.quoteChar),typeof w.header=="boolean"&&(P=w.header),Array.isArray(w.columns)){if(w.columns.length===0)throw new Error("Option columns is empty");H=w.columns}w.escapeChar!==void 0&&(q=w.escapeChar+G),w.escapeFormulae instanceof RegExp?_=w.escapeFormulae:typeof w.escapeFormulae=="boolean"&&w.escapeFormulae&&(_=/^[=+\-@\t\r].*$/)}})(),new RegExp(C(G),"g"));if(typeof g=="string"&&(g=JSON.parse(g)),Array.isArray(g)){if(!g.length||Array.isArray(g[0]))return $(null,g,Y);if(typeof g[0]=="object")return $(H||Object.keys(g[0]),g,Y)}else if(typeof g=="object")return typeof g.data=="string"&&(g.data=JSON.parse(g.data)),Array.isArray(g.data)&&(g.fields||(g.fields=g.meta&&g.meta.fields||H),g.fields||(g.fields=Array.isArray(g.data[0])?g.fields:typeof g.data[0]=="object"?Object.keys(g.data[0]):[]),Array.isArray(g.data[0])||typeof g.data[0]=="object"||(g.data=[g.data])),$(g.fields||[],g.data||[],Y);throw new Error("Unable to serialize unrecognized input");function $(D,O,Z){var re="",L=(typeof D=="string"&&(D=JSON.parse(D)),typeof O=="string"&&(O=JSON.parse(O)),Array.isArray(D)&&0<D.length),V=!Array.isArray(O[0]);if(L&&P){for(var M=0;M<D.length;M++)0<M&&(re+=A),re+=z(D[M],M);0<O.length&&(re+=U)}for(var I=0;I<O.length;I++){var F=(L?D:O[I]).length,K=!1,ee=L?Object.keys(O[I]).length===0:O[I].length===0;if(Z&&!L&&(K=Z==="greedy"?O[I].join("").trim()==="":O[I].length===1&&O[I][0].length===0),Z==="greedy"&&L){for(var oe=[],ne=0;ne<F;ne++){var B=V?D[ne]:ne;oe.push(O[I][B])}K=oe.join("").trim()===""}if(!K){for(var Q=0;Q<F;Q++){0<Q&&!ee&&(re+=A);var le=L&&V?D[Q]:Q;re+=z(O[I][le],Q)}I<O.length-1&&(!Z||0<F&&!ee)&&(re+=U)}}return re}function z(D,O){var Z,re;return D==null?"":D.constructor===Date?JSON.stringify(D).slice(1,25):(re=!1,_&&typeof D=="string"&&_.test(D)&&(D="'"+D,re=!0),Z=D.toString().replace(R,q),(re=re||k===!0||typeof k=="function"&&k(D,O)||Array.isArray(k)&&k[O]||((L,V)=>{for(var M=0;M<V.length;M++)if(-1<L.indexOf(V[M]))return!0;return!1})(Z,u.BAD_DELIMITERS)||-1<Z.indexOf(A)||Z.charAt(0)===" "||Z.charAt(Z.length-1)===" ")?G+Z+G:Z)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!i&&!!s.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=v,u.ParserHandle=j,u.NetworkStreamer=p,u.FileStreamer=m,u.StringStreamer=b,u.ReadableStreamStreamer=y,s.jQuery&&((a=s.jQuery).fn.parse=function(g){var w=g.config||{},k=[];return this.each(function(U){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var G=0;G<this.files.length;G++)k.push({file:this.files[G],inputElem:this,instanceConfig:a.extend({},w)})}),P(),this;function P(){if(k.length===0)S(g.complete)&&g.complete();else{var U,G,q,Y,H=k[0];if(S(g.before)){var _=g.before(H.file,H.inputElem);if(typeof _=="object"){if(_.action==="abort")return U="AbortError",G=H.file,q=H.inputElem,Y=_.reason,void(S(g.error)&&g.error({name:U},G,q,Y));if(_.action==="skip")return void A();typeof _.config=="object"&&(H.instanceConfig=a.extend(H.instanceConfig,_.config))}else if(_==="skip")return void A()}var R=H.instanceConfig.complete;H.instanceConfig.complete=function($){S(R)&&R($,H.file,H.inputElem),A()},u.parse(H.file,H.instanceConfig)}}function A(){k.splice(0,1),P()}}),o&&(s.onmessage=function(g){g=g.data,u.WORKER_ID===void 0&&g&&(u.WORKER_ID=g.workerId),typeof g.input=="string"?s.postMessage({workerId:u.WORKER_ID,results:u.parse(g.input,g.config),finished:!0}):(s.File&&g.input instanceof File||g.input instanceof Object)&&(g=u.parse(g.input,g.config))&&s.postMessage({workerId:u.WORKER_ID,results:g,finished:!0})}),(p.prototype=Object.create(f.prototype)).constructor=p,(m.prototype=Object.create(f.prototype)).constructor=m,(b.prototype=Object.create(b.prototype)).constructor=b,(y.prototype=Object.create(f.prototype)).constructor=y,u})})(Pm);var Jx=Pm.exports;const hr=Jd(Jx);function Pi({startRect:e,targetRef:t,count:r=12,onDone:s}){return d.useEffect(()=>{const a=t==null?void 0:t.current;if(!e||!a){s==null||s();return}const i=a.getBoundingClientRect(),o=document.createElement("div");o.style.position="fixed",o.style.inset="0",o.style.pointerEvents="none",o.style.zIndex="9999",document.body.appendChild(o);const l=i.left+i.width/2,c=i.top+i.height/2,u=e.left+e.width/2,f=e.top+e.height/2,p=200;let m=0;function b(y){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const C=u,v=f,h=l,x=c;j.style.transform=`translate(${C}px, ${v}px) scale(1)`,o.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${p}ms cubic-bezier(.2,.8,.2,1), opacity ${p}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${h}px, ${x}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),m+=1,m===r&&(o.remove(),s==null||s())},p+50)}for(let y=0;y<r;y++)setTimeout(()=>b(),y*60);return()=>{try{o.remove()}catch{}}},[e,t,r,s]),null}const ht={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},_d=e=>Math.floor(e/ht.XP_PER_LEVEL)+1,Zx=e=>{const t=e%ht.XP_PER_LEVEL;return{current:t,required:ht.XP_PER_LEVEL,percentage:t/ht.XP_PER_LEVEL*100}};function eg({player:e,size:t="normal",showLevel:r=!0,showName:s=!0}){const a=ht.AVATARS.find(o=>o.id===e.avatar)||ht.AVATARS[0],i={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`${i[t]} rounded-full bg-gradient-to-br ${a.bgColor} flex items-center justify-center shadow-lg`,children:n.jsx("span",{children:a.emoji})}),r&&n.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:(()=>{const o=JSON.parse(localStorage.getItem("currentUser")||"{}");return o.username?o.username.split(" ")[0]:e.name})()}),n.jsx("div",{className:"text-xs text-base-muted",children:a.name})]})]})}function tg({current:e,required:t,level:r,animate:s=!0}){const[a,i]=d.useState(0),o=e/t*100;return d.useEffect(()=>{if(s){const l=setTimeout(()=>{i(o)},100);return()=>clearTimeout(l)}else i(o)},[o,s]),n.jsxs("div",{className:"w-full",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs font-medium",children:["Level ",r]}),n.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),n.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${a}%`},children:n.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}const Tm=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],Rm=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],_m=[...Tm.filter(e=>e.slug!=="more"),...Rm];function ng({onClick:e}){return n.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:e,children:[n.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),n.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),n.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),n.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),n.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]})}function rg({actions:e}){return n.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,r)=>n.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[n.jsx("div",{className:"text-2xl",children:t.icon}),n.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},r))})}function sg({categories:e,onCategorySelect:t}){return n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),n.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(r=>n.jsxs("button",{onClick:()=>t(r),className:`bg-gradient-to-br ${r.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[n.jsx("div",{className:"text-3xl",children:r.icon}),n.jsx("div",{className:"text-xs font-bold text-white text-center",children:r.name}),r.questions>0&&n.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[r.questions," Qs"]})]},r.name))})]})}function ag({onClick:e,isPulsing:t}){return n.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium",children:"Practice Mode"}),n.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),n.jsx("div",{className:"text-xl",children:"→"})]})}function ig({dailyQ:e,isFlipped:t,picked:r,onAnswer:s,dailyCompleted:a,DAILY_Q_COINS:i,DAILY_Q_XP:o}){return a?n.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"✅"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}):e?n.jsx("div",{className:"flip-card mb-6",children:n.jsxs("div",{className:`flip-card-inner ${t?"flipped":""}`,children:[n.jsx("div",{className:"flip-card-front",children:n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),n.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",i," coins +",o," XP"]})]}),n.jsx("p",{className:"text-sm mb-4 text-base-muted",children:e.prompt}),n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.options.map((l,c)=>{const u=c===e.answerIndex,f=r===c,p=r!==null;return n.jsx("button",{onClick:m=>s(c,m),disabled:r!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${p?u?"border-green-500 bg-green-500/20":f?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${r!==null?"cursor-not-allowed":"cursor-pointer"}`,children:l},c)})})]})}),n.jsx("div",{className:"flip-card-back absolute inset-0",children:n.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[n.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),n.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),n.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",i," coins & ",o," XP!"]}),n.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}):null}function og({show:e,onClose:t,player:r,changeAvatar:s,GAME_CONSTANTS:a}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:i=>i.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.AVATARS.map(i=>{const o=!r.unlockedAvatars.includes(i.id),l=r.avatar===i.id;return n.jsxs("button",{onClick:()=>{o||(s(i.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":o?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:o,children:[n.jsx("div",{className:`text-4xl mb-2 ${o?"grayscale":""}`,children:i.emoji}),n.jsx("div",{className:"text-sm font-medium",children:i.name}),o&&n.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",i.unlockLevel]}),l&&n.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},i.id)})})]})}):null}function lg({show:e,onClose:t,categories:r,onCategorySelect:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:a=>a.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:r.map(a=>n.jsxs("button",{onClick:()=>{t(),s(a)},className:`bg-gradient-to-br ${a.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[n.jsx("div",{className:"text-3xl",children:a.icon}),n.jsx("div",{className:"text-sm font-bold text-white",children:a.name}),n.jsxs("div",{className:"text-xs text-white/80",children:[a.questions," questions"]})]},a.name))})]})}):null}function cg({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"magic-gradient h-full"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[be.getCoins()," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function dg({show:e,onClose:t,selectedCategory:r,difficulty:s,setDifficulty:a,count:i,setCount:o,timer:l,setTimer:c,onStart:u}){return!e||!r?null:n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:r.icon}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium",children:["Category: ",r.name]}),n.jsxs("div",{className:"text-xs text-base-muted",children:[r.questions," questions available"]})]})]})}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>a(f),className:`py-2 rounded-xl border ${s===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),n.jsx("input",{type:"number",value:l,onChange:f=>c(Number(f.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function ug({show:e,onClose:t,allCategories:r,category:s,setCategory:a,difficulty:i,setDifficulty:o,count:l,setCount:c,onStart:u}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),n.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:r.map(f=>n.jsxs("button",{onClick:()=>a(f.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===f.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[n.jsx("div",{className:"text-xl",children:f.icon}),n.jsx("div",{className:"text-[10px] text-center",children:f.name})]},f.slug))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>c(f),className:`py-2 rounded-xl border ${l===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}function fg({player:e,onContinue:t}){const[r,s]=d.useState(()=>sessionStorage.getItem("justSignedUp")==="true"?(sessionStorage.removeItem("justSignedUp"),!1):sessionStorage.getItem("welcomeShown")!=="true"),[a,i]=d.useState(!1),[o,l]=d.useState(!1),[c,u]=d.useState(""),[f,p]=d.useState(""),[m,b]=d.useState("Champion"),[y,j]=d.useState(1),[C,v]=d.useState(0),[h,x]=d.useState(0),N=()=>{try{const g=new Audio("/sounds/welcome.mp3");g.volume=.6,g.play()}catch{console.log("Welcome sound not available")}},E=()=>{navigator.vibrate&&navigator.vibrate([100,50,100])};d.useEffect(()=>{if((()=>{const U=JSON.parse(localStorage.getItem("currentUser")||"{}");let G="Champion",q=1,Y=0,H=0;if(U.phone){const R=JSON.parse(localStorage.getItem(`user_profile_${U.phone}`)||"{}"),z=JSON.parse(localStorage.getItem("users")||"{}")[U.phone]||{};R.name?G=R.name.split(" ")[0]:z.username?G=z.username.split(" ")[0]:U.username&&(G=U.username.split(" ")[0]),G&&G!=="Champion"&&(G=G.charAt(0).toUpperCase()+G.slice(1).toLowerCase())}else U.username&&(G=U.username.split(" ")[0]);const _=JSON.parse(localStorage.getItem("qp_player")||"{}");q=(e==null?void 0:e.level)||_.level||1,Y=(e==null?void 0:e.coins)||_.coins||0,H=(e==null?void 0:e.currentStreak)||_.currentStreak||0,G!=="Champion"&&G!==_.name&&(_.name=G,localStorage.setItem("qp_player",JSON.stringify(_))),b(G),j(q),v(Y),x(H)})(),!r){t();return}sessionStorage.setItem("welcomeShown","true"),document.body.classList.add("hide-bottom-nav"),N(),E();const w=["🦉","🐧","🦝","🦜","🦕","🐙","🦊","🐸","🦁","🐨"];p(w[Math.floor(Math.random()*w.length)]);const k=setInterval(()=>{l(U=>!U)},2e3),P=["🎯 New challenges await!","🏆 Ready to be a champion?","🌟 Your brain adventure starts now!","🎨 Time for fun learning!","🎪 The quiz circus is open!","🚀 Blast off to knowledge!","🎭 Let's play and learn!","🌈 Rainbow of questions ahead!"];u(P[Math.floor(Math.random()*P.length)]);const A=setInterval(()=>{u(P[Math.floor(Math.random()*P.length)])},3e3);return()=>{document.body.classList.remove("hide-bottom-nav"),clearInterval(k),clearInterval(A)}},[r,t,e]);const T=()=>{try{const g=new Audio("/sounds/tap.mp3");g.volume=.5,g.play()}catch{console.log("Click sound not available")}navigator.vibrate&&navigator.vibrate(20),i(!0),document.body.classList.remove("hide-bottom-nav"),setTimeout(()=>{s(!1),t()},400)};if(!r)return null;const S=()=>{const g=new Date().getHours();return g<12?"Good morning":g<17?"Good afternoon":"Good evening"};return n.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${a?"opacity-0 scale-95":"opacity-100 scale-100"}`,children:[n.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fda085 75%, #f5a375 90%, #e08060 100%)"}}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[[{top:"10%",left:"15%",size:"24px",delay:"0s"},{top:"20%",left:"75%",size:"20px",delay:"0.5s"},{top:"15%",left:"45%",size:"28px",delay:"1s"},{top:"30%",left:"85%",size:"22px",delay:"1.5s"},{top:"8%",left:"60%",size:"26px",delay:"2s"}].map((g,w)=>n.jsx("div",{className:"absolute animate-twinkle",style:{top:g.top,left:g.left,fontSize:g.size,animationDelay:g.delay},children:"⭐"},`star-${w}`)),n.jsxs("div",{className:"absolute top-10 left-0 w-full",children:[n.jsx("div",{className:"cloud cloud1",children:"☁️"}),n.jsx("div",{className:"cloud cloud2",children:"☁️"})]})]}),n.jsxs("div",{className:"relative z-10 text-center px-6 w-full max-w-sm mx-auto",children:[n.jsx("div",{className:`text-8xl mb-4 transition-transform duration-500 ${o?"scale-110 rotate-6":"scale-100 rotate-0"}`,children:f}),n.jsxs("div",{className:"relative rounded-3xl px-6 py-4 mb-6 shadow-xl overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"}),n.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rotate-45"}),n.jsxs("div",{className:"relative",children:[n.jsxs("h1",{className:"text-3xl font-bold text-purple-800",children:["Hello, ",m,"! 👋"]}),n.jsx("p",{className:"text-sm text-purple-600 mt-1",children:S()})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-6",children:[n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-100 to-orange-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:y}),n.jsx("div",{className:"text-xs text-orange-600",children:"Level"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-2xl font-bold text-teal-800",children:C}),n.jsx("div",{className:"text-xs text-teal-600",children:"Coins"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-200 via-red-100 to-pink-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🔥"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:h}),n.jsx("div",{className:"text-xs text-orange-600",children:"Streak"})]})]})]}),n.jsx("div",{className:"h-4"}),n.jsx("div",{className:"text-white/90 font-medium animate-fade-slide mb-6",children:c}),n.jsxs("button",{onClick:T,className:"group relative w-full",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"}),n.jsxs("div",{className:`relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-5 px-8 rounded-full font-bold text-xl shadow-2xl 
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
      `})]})}const Ad=(e=new Date)=>e.toLocaleDateString("en-CA"),Id=(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},mg=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function Ld(){const[e,t]=d.useState(()=>{const xe=sessionStorage.getItem("justSignedUp"),fe=sessionStorage.getItem("justSignedIn");return xe==="true"||fe==="true"?(sessionStorage.removeItem("justSignedUp"),sessionStorage.removeItem("justSignedIn"),sessionStorage.setItem("welcomeShown","true"),!1):sessionStorage.getItem("welcomeShown")!=="true"}),r=Ae(),s=Nn(),{player:a,levelProgress:i,useEnergy:o,changeAvatar:l}=s,[c]=$t("/sounds/correct.mp3",{volume:.6}),[u]=$t("/sounds/wrong.mp3",{volume:.6}),[f]=$t("/sounds/coin.mp3",{volume:.75}),[p]=$t("/sounds/levelup.mp3",{volume:.8}),m=d.useRef(a.level),b=d.useRef(null);d.useEffect(()=>{const xe=()=>{};return window.addEventListener("focus",xe),()=>window.removeEventListener("focus",xe)},[]),d.useEffect(()=>{a.level>m.current&&(p==null||p(),m.current=a.level)},[a.level,p]);const[y,j]=d.useState(!1),[C,v]=d.useState(null),[h,x]=d.useState(!1),[N,E]=d.useState("medium"),[T,S]=d.useState(10),[g,w]=d.useState(45),[k,P]=d.useState(!1),[A,U]=d.useState(!1),[G,q]=d.useState(null),[Y,H]=d.useState(null),[_,R]=d.useState(!1),[$,z]=d.useState(!1),[D,O]=d.useState(null),Z=10,re=5,[L,V]=d.useState(!1),[M,I]=d.useState(!1),[F,K]=d.useState("general-knowledge"),[ee,oe]=d.useState("medium"),[ne,B]=d.useState(10),[Q,le]=d.useState(()=>Id("dq_daily_log",{})[Ad()]===!0);d.useEffect(()=>{const xe=sessionStorage.getItem("homeScrollPosition");xe&&window.scrollTo(0,parseInt(xe));const fe=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",fe),()=>window.removeEventListener("scroll",fe)},[]),d.useEffect(()=>{if(Q)return;(async()=>{var fe;try{const Se=await fetch("/data/quiz_questions_bank.csv").then(dt=>dt.text()),{data:de}=hr.parse(Se,{header:!0,skipEmptyLines:!0});if(!de.length)throw new Error("empty");const we=de[Math.floor(Math.random()*de.length)],Ie=[we.option1,we.option2,we.option3,we.option4].filter(Boolean);q({category:we.category||"General",prompt:we.question,options:Ie,answerIndex:["A","B","C","D"].indexOf((fe=we.answer)==null?void 0:fe.toUpperCase())||0})}catch{q({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[Q]);const W=(xe,fe)=>{if(Y!==null)return;H(xe);const Se=xe===G.answerIndex;if(Se){if(c(),fe!=null&&fe.currentTarget&&b.current){const de=fe.currentTarget.getBoundingClientRect();f(),O({startRect:de,count:10,amount:re})}}else u();setTimeout(()=>{if(z(!0),R(!0),Se){const de=Ad();mg("dq_daily_log",{...Id("dq_daily_log",{}),[de]:!0}),le(!0);const we=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(we+1));const Ie=Je.getCurrentUser();Ie!=null&&Ie.phone&&be.updateStreak(Ie.phone)}},600)},te=xe=>{if(xe.slug==="more"){j(!0);return}v(xe),x(!0)},ce=()=>{console.log("Starting quiz with energy:",a.energy),console.log("Category:",C.slug),r(`/quiz/${C.slug}`,{state:{mode:"quiz",difficulty:N,count:T,timer:{type:"per_q",seconds:g},source:"adventure"}}),x(!1)},ve=()=>{console.log("Starting practice, category:",F),r(`/quiz/${F}`,{state:{mode:"practice",difficulty:ee,count:ne,timer:{type:"off",seconds:0}}}),I(!1)},pe=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>{sessionStorage.setItem("questsFromHome","true"),r("/profile/quests")}},{icon:"🔥",label:"Streak",color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>r("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>r("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>r("/profile/rewards")}];return n.jsxs(n.Fragment,{children:[e&&n.jsx(fg,{player:a,onContinue:()=>t(!1)}),n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),n.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[n.jsx("style",{jsx:!0,children:`
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
        `}),D&&n.jsx(Pi,{startRect:D.startRect,targetRef:b,count:D.count,onDone:()=>{if(!L){const xe=Je.getCurrentUser();xe!=null&&xe.phone?(be.addCoins(D.amount,"Daily Challenge"),be.addXP(Z),be.updateQuestProgress(xe.phone,"daily_challenge",1)):(be.addCoins(D.amount,"Daily Challenge"),be.addXP(Z)),V(!0)}O(null)}}),n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"flex justify-between items-start mb-4",children:[n.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>U(!0),children:n.jsx(eg,{player:a,size:"small",showLevel:!0,showName:!0})}),n.jsx("div",{className:"flex gap-2",children:n.jsxs("button",{ref:b,onClick:()=>P(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold",children:be.getCoins()})]})})]}),n.jsx(tg,{current:i.current,required:i.required,level:a.level,animate:!0})]}),n.jsx(ng,{onClick:()=>r("/play")}),n.jsx(rg,{actions:pe}),n.jsx(ig,{dailyQ:G,isFlipped:$,picked:Y,onAnswer:W,dailyCompleted:Q,DAILY_Q_COINS:re,DAILY_Q_XP:Z}),n.jsx(sg,{categories:Tm,onCategorySelect:te}),n.jsx(ag,{onClick:()=>I(!0),isPulsing:a.energy<10}),n.jsx(og,{show:A,onClose:()=>U(!1),player:a,changeAvatar:l,GAME_CONSTANTS:ht}),n.jsx(dg,{show:h,onClose:()=>x(!1),selectedCategory:C,difficulty:N,setDifficulty:E,count:T,setCount:S,timer:g,setTimer:w,onStart:ce}),n.jsx(ug,{show:M,onClose:()=>I(!1),allCategories:_m,category:F,setCategory:K,difficulty:ee,setDifficulty:oe,count:ne,setCount:B,onStart:ve}),n.jsx(lg,{show:y,onClose:()=>j(!1),categories:Rm,onCategorySelect:te}),n.jsx(cg,{show:k,onClose:()=>P(!1),coins:a.coins,onNavigateToPlay:()=>{P(!1),r("/play")}})]})]})]})}const ma={OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},ha={get:(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function Ti(){const[e,t]=d.useState(()=>be.getCoins()),[r,s]=d.useState(()=>be.getXP()),[a,i]=d.useState(()=>be.getLevel()),[o,l]=d.useState(()=>ha.get(ma.OWNED_CHARACTERS,[])),[c,u]=d.useState(()=>ha.get(ma.SOUND,!0));d.useEffect(()=>{const N=Je.getCurrentUser();N!=null&&N.phone&&be.initializeUserData(N.phone)},[]);const f=d.useCallback(N=>{const E=be.addCoins(N,"Game reward");return t(E),E},[]),p=d.useCallback(N=>{const E=be.addXP(N);s(E);const T=be.getLevel();return T>a&&i(T),E},[a]),m=d.useCallback((N,E="Purchase")=>{if(be.spendCoins(N,E)){const T=be.getCoins();return t(T),!0}return!1},[]),b=d.useCallback(N=>{l(E=>{const T=[...new Set([...E,N])];return ha.set(ma.OWNED_CHARACTERS,T),T})},[]),y=d.useCallback(()=>be.checkAndUpdateLevel(),[]);d.useEffect(()=>{ha.set(ma.SOUND,c)},[c]);const j=d.useCallback((N,E,T,S,g)=>{const w=Je.getCurrentUser(),k=be.recordQuizSession(w==null?void 0:w.phone,{score:N,totalQuestions:E,category:T,difficulty:S,mode:g});return t(k.newTotal),s(k.newXP),i(k.newLevel),k},[]),C=d.useCallback((N,E,T)=>{const S=Je.getCurrentUser(),g=be.recordPracticeSession(S==null?void 0:S.phone,{questionsCompleted:N,correctAnswers:E,category:T});return t(g.newTotal),s(g.newXP),g},[]),v=d.useCallback(()=>{const N=Je.getCurrentUser();return N!=null&&N.phone?be.getUserStats(N.phone):null},[]),h=d.useCallback(()=>{const N=Je.getCurrentUser();return N!=null&&N.phone?be.getQuestData(N.phone):null},[]),x=d.useCallback(()=>{const N=Je.getCurrentUser();return be.getTodaySummary(N==null?void 0:N.phone)},[]);return{coins:e,xp:r,level:a,ownedCharacters:o,soundOn:c,addCoins:f,addXp:p,spendCoins:m,unlockCharacter:b,setSoundOn:u,checkLevelUp:y,recordQuizComplete:j,recordPracticeComplete:C,getUserStats:v,getQuestData:h,getTodaySummary:x,nextLevelThreshold:100*a*(a-1),xpProgress:r/Math.max(1,100*a*(a-1))}}const hg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],rn=hg.slice(0,6),nr=360/rn.length,Am={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},Cn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},ir=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Dd=e=>(e%360+360)%360,uc=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},zr=(e,t=.7)=>{try{const r=new Audio(e);r.volume=t,r.play()}catch{}};function pg({run:e,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:i,onBack:o,spinning:l,angle:c,transition:u,result:f,showCallout:p,glowColor:m,soundOn:b,setSoundOn:y,showSparkle:j,pulseIdx:C,nextProgressIdx:v,pendingProgressIdx:h,coinBurstTick:x,lastAnswerWasCorrect:N}){const E=100*s*(s-1),[T,S]=d.useState(!1),g=d.useRef(0),w=d.useRef(null),k=d.useRef(null),[P,A]=d.useState({dx:110,dy:-260}),[U,G]=d.useState(!1);return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(h==null)return;S(!1);const q=setTimeout(()=>S(!0),30);return()=>clearTimeout(q)},[h]),d.useEffect(()=>{var Y,H,_,R;if(!x||!N||x===g.current)return;g.current=x;try{const $=(H=(Y=k==null?void 0:k.current)==null?void 0:Y.getBoundingClientRect)==null?void 0:H.call(Y),z=(R=(_=w==null?void 0:w.current)==null?void 0:_.getBoundingClientRect)==null?void 0:R.call(_);if($&&z){const D=$.left+$.width/2,O=$.top+$.height/2,Z=z.left+z.width/2,re=z.top+z.height/2;A({dx:Z-D,dy:re-O})}}catch{}b&&zr("/sounds/coin.mp3",.7),G(!0);const q=setTimeout(()=>G(!1),700);return()=>clearTimeout(q)},[x,b,N]),n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-8",children:[n.jsx("button",{onClick:o,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[n.jsxs("div",{className:"text-[11px]",children:["Lvl ",s," • ",r,"/",E]}),n.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:n.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(r/E,1)*100}%`}})})]}),n.jsxs("button",{ref:w,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),n.jsx("button",{onClick:()=>y(!b),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:n.jsx("span",{className:"text-lg",children:b?"🔊":"🔇"})})]}),a.length>0&&n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:a.map(q=>{const Y=rn.find(_=>ir(_.name)===q),H=Am[q];return n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:n.jsx("span",{className:"text-sm",children:Y==null?void 0:Y.icon})}),n.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:H})]},q)})})}),n.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:n.jsxs("div",{className:"w-80 max-w-full",children:[n.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),n.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(q=>{const Y=["#FF9800","#FFC107","#cadd75ff"],H=!!e.progress[q];return n.jsxs("div",{className:"relative h-full bg-white/10",children:[n.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:H?q===h?T?"100%":"0%":v===q&&h==null?"0%":"100%":"0%",backgroundColor:Y[q],transition:q===h?"width 1200ms ease-out":"none"}}),C===q&&n.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:n.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),j===q&&n.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},q)})},e.qIndex)]})}),n.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:n.jsxs("div",{ref:k,className:"relative w-96 h-96 rounded-full select-none",children:[m&&n.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${m}40, 0 0 40px 12px ${m}60`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[rn.map((q,Y)=>{const H=Y*nr,_=H+nr,R=nr>180?1:0,$=Math.PI*H/180,z=Math.PI*_/180,D=50+45*Math.cos($),O=50-45*Math.sin($),Z=50+45*Math.cos(z),re=50-45*Math.sin(z),L=H+nr/2,V=28,M=50+V*Math.cos(L*Math.PI/180),I=50-V*Math.sin(L*Math.PI/180);return n.jsxs("g",{children:[n.jsx("path",{d:`M50,50 L${D},${O} A45,45 0 ${R} 0 ${Z},${re} Z`,fill:q.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),n.jsx("text",{x:M,y:I,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:q.icon})]},Y)}),n.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),n.jsx("button",{onClick:i,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:n.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:n.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),p&&f&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:n.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[n.jsx("span",{className:"mr-2",children:f.cat.icon}),f.cat.name]})}),U&&n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(q=>n.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${q*80}ms forwards`,"--coin-dx":`${P.dx}px`,"--coin-dy":`${P.dy}px`},children:n.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},q))]})]})}),n.jsx("div",{className:"text-center",children:n.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}var za={linear:function(e,t,r,s){var a=r-t;return a*e/s+t},easeInQuad:function(e,t,r,s){var a=r-t;return a*(e/=s)*e+t},easeOutQuad:function(e,t,r,s){var a=r-t;return-a*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e+t},easeOutCubic:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,r,s){var a=r-t;return-a*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,s){var a=r-t;return-a*Math.cos(e/s*(Math.PI/2))+a+t},easeOutSine:function(e,t,r,s){var a=r-t;return a*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,r,s){var a=r-t;return-a/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,r,s){var a=r-t;return e==0?t:a*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,r,s){var a=r-t;return e==s?t+a:a*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,r,s){var a=r-t;return e===0?t:e===s?t+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,s){var a=r-t;return-a*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,r,s){var a=r-t;return a*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t)},easeOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),i*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/o)+a+t)},easeInOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s/2)===2?t+a:(o||(o=s*(.3*1.5)),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o)*.5+a+t)},easeInBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*(e/=s)*e*((a+1)*e-a)+t},easeOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*((e=e/s-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),(e/=s/2)<1?i/2*(e*e*(((a*=1.525)+1)*e-a))+t:i/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(e,t,r,s){var a=r-t,i;return i=za.easeOutBounce(s-e,0,a,s),a-i+t},easeOutBounce:function(e,t,r,s){var a=r-t;return(e/=s)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,s){var a=r-t,i;return e<s/2?(i=za.easeInBounce(e*2,0,a,s),i*.5+t):(i=za.easeOutBounce(e*2-s,0,a,s),i*.5+a*.5+t)}},xg=za;function gg(e){return e*Math.PI/180}function Tt(e,t){return e+Math.random()*(t-e)}function vg(e,t){return Math.floor(e+Math.random()*(t-e+1))}var Ns;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(Ns||(Ns={}));var An;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(An||(An={}));const yg=1e3/60;class bg{constructor(t,r,s,a){this.getOptions=r;const{colors:i,initialVelocityX:o,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=a,this.w=Tt(5,20),this.h=Tt(5,20),this.radius=Tt(5,10),this.vx=typeof o=="number"?Tt(-o,o):Tt(o.min,o.max),this.vy=typeof l=="number"?Tt(-l,0):Tt(l.min,l.max),this.shape=vg(0,2),this.angle=gg(Tt(0,360)),this.angularSpin=Tt(-.2,.2),this.color=i[Math.floor(Math.random()*i.length)],this.rotateY=Tt(0,1),this.rotationDirection=Tt(0,1)?An.Positive:An.Negative}update(t){const{gravity:r,wind:s,friction:a,opacity:i,drawShape:o}=this.getOptions(),l=t/yg;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=r*l,this.vx+=s*l,this.vx*=a**l,this.vy*=a**l,this.rotateY>=1&&this.rotationDirection===An.Positive?this.rotationDirection=An.Negative:this.rotateY<=-1&&this.rotationDirection===An.Negative&&(this.rotationDirection=An.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=i,this.context.lineCap="round",this.context.lineWidth=2,o&&typeof o=="function")o.call(this,this.context);else switch(this.shape){case Ns.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case Ns.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case Ns.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class wg{constructor(t,r){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=a=>{this.particles.splice(a,1)},this.getParticle=()=>{const a=Tt(this.x,this.w+this.x),i=Tt(this.y,this.h+this.y);return new bg(this.context,this.getOptions,a,i)},this.animate=a=>{const{canvas:i,context:o,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:f,numberOfPieces:p,debug:m,tweenFunction:b,tweenDuration:y}=this.getOptions();if(!u)return!1;const j=this.particles.length,C=f?j:l;if(C<p){c!==p&&(this.tweenProgress=0,this.tweenFrom=C,this.lastNumberOfPieces=p),this.tweenProgress=Math.min(y,Math.max(0,this.tweenProgress+a));const v=b(this.tweenProgress,this.tweenFrom,p,y),h=Math.round(v-C);for(let x=0;x<h;x++)this.particles.push(this.getParticle());this.particlesGenerated+=h}m&&(o.font="12px sans-serif",o.fillStyle="#333",o.textAlign="right",o.fillText(`Particles: ${j}`,i.width-10,i.height-20));for(let v=this.particles.length-1;v>=0;v--){const h=this.particles[v];h.update(a),(h.y>i.height||h.y<-100||h.x>i.width+100||h.x<-100)&&(f&&C<=p?this.particles[v]=this.getParticle():this.removeParticleAt(v))}return j>0||C<p},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=r}}const fc={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:xg.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class jg{constructor(t,r){this.lastFrameTime=0,this.setOptionsWithDefaults=a=>{const i={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...i,...fc,...a},Object.assign(this,a.confettiSource)},this.update=(a=0)=>{const{options:{run:i,onConfettiComplete:o,frameRate:l},canvas:c,context:u}=this,f=Math.min(a-this.lastFrameTime,50);if(l&&f<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=a-(l?f%l:0),i&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(f)?this.rafId=requestAnimationFrame(this.update):(o&&typeof o=="function"&&this.generator.particlesGenerated>0&&o.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new wg(this.canvas,()=>this.options),this.options=r,this.update()}get options(){return this._options}set options(t){var a,i;const r=(a=this._options)==null?void 0:a.run,s=(i=this._options)==null?void 0:i.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&r===!1&&this.update()}}const Ng=yt.createRef();class mc extends yt.Component{constructor(t){super(t),this.canvas=yt.createRef(),this.canvas=t.canvasRef||Ng}componentDidMount(){if(this.canvas.current){const t=so(this.props)[0];this.confetti=new jg(this.canvas.current,t)}}componentDidUpdate(){const t=so(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,r]=so(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...r.style};return n.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...r,style:s})}}mc.defaultProps={...fc};mc.displayName="ReactConfetti";function so(e){const t={},r={},s={},a=[...Object.keys(fc),"confettiSource","drawShape","onConfettiComplete","frameRate"],i=["canvasRef"];for(const o in e){const l=e[o];a.includes(o)?t[o]=l:i.includes(o)?i[o]=l:s[o]=l}return[t,s,r]}const Im=yt.forwardRef((e,t)=>n.jsx(mc,{canvasRef:t,...e}));function zd({question:e,category:t,onAnswer:r,run:s,timeLeft:a,usedLifelines:i,onUseLifeline:o,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:f,onTimeUpBackToWheel:p,soundOn:m}){const[b,y]=d.useState(null),[j,C]=d.useState(!1),[v,h]=d.useState(!1),x=d.useRef(null),N=d.useRef(null),[E,T]=d.useState(null);d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(!j||!x.current)return;const w=x.current.getBoundingClientRect();T({x:w.left,y:w.top-300,w:w.width,h:8})},[j]);const S=w=>{if(j)return;y(w),C(!0);const k=w===e.correctIndex;uc(k?[50,30,50]:[200]),m&&zr(k?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{r(k,null)},1500)},g=b===e.correctIndex;return n.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:n.jsxs("div",{ref:N,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("div",{className:"mb-4",children:n.jsx("button",{onClick:()=>h(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:`text-4xl font-black mb-2 ${a<=10?"text-red-400 animate-pulse":"text-white"}`,children:a}),n.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:n.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${a<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${a/30*100}%`}})})]}),n.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[n.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-lg font-bold",children:t.name}),n.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),n.jsx("h2",{ref:x,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),n.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((w,k)=>{const P=l.includes(k),A=b===k,U=k===e.correctIndex;let G="bg-white/10 border-white/20",q="opacity-100";return P?q="opacity-30":j&&A?G=U?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&U?G="bg-green-500/30 border-green-400":A&&(G="bg-white/20 border-white/40"),n.jsx("button",{onClick:()=>S(k),disabled:j||P,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${G} ${q} ${!j&&!P?"hover:bg-white/15 active:scale-98":""}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+k)}),n.jsx("span",{className:"font-medium flex-1",children:w}),c&&n.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[k]),"%"]})]})},k)})}),!j&&n.jsxs("div",{className:"flex gap-4 mb-8",children:[n.jsx("button",{onClick:()=>o("fifty"),disabled:i.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),n.jsx("button",{onClick:()=>o("audience"),disabled:i.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&n.jsxs("div",{className:"relative text-center",children:[g&&n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsx(Im,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:E||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),n.jsx("button",{onClick:()=>r(g,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),f&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),n.jsx("button",{onClick:p,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),v&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>h(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Md({category:e,onComplete:t,isBonus:r=!1,soundOn:s=!0}){return d.useEffect(()=>{s&&zr("/sounds/flush.mp3",.8);const a=setTimeout(t,1e3);return uc([50]),()=>clearTimeout(a)},[t,s]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),r?n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[n.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),n.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:n.jsx("span",{className:"text-6xl",children:"⭐"})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[n.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[n.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),n.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),n.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:n.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function kg({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:n.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function Sg({onSelect:e}){return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[n.jsxs("header",{className:"text-center mb-12",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),n.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),n.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-6",children:rn.map(t=>{const r=Am[ir(t.name)];return n.jsxs("button",{onClick:()=>e(ir(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[n.jsx("div",{className:"text-4xl mb-3",children:t.icon}),n.jsx("div",{className:"font-black text-lg mb-1",children:r}),n.jsx("div",{className:"text-sm opacity-75",children:t.name})]},ir(t.name))})})]})})}function Cg({onBack:e}){const{coins:t,xp:r,level:s,ownedCharacters:a,soundOn:i,unlockCharacter:o,setSoundOn:l}=Ti(),[c,u]=d.useState("wheel"),[f,p]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[m,b]=d.useState([]),[y,j]=d.useState(null),[C,v]=d.useState(null),[h,x]=d.useState(30),[N,E]=d.useState([]),[T,S]=d.useState(null),[g,w]=d.useState(null),[k,P]=d.useState(!1),[A,U]=d.useState(0),[G,q]=d.useState("none"),[Y,H]=d.useState(!1),[_,R]=d.useState(null),[$,z]=d.useState(!1),[D,O]=d.useState(null),[Z,re]=d.useState(-1),[L,V]=d.useState(0),[M,I]=d.useState(null),[F,K]=d.useState(null),[ee,oe]=d.useState(!1),[ne,B]=d.useState(null),[Q,le]=d.useState(-1),[W,te]=d.useState([!1,!1,!1]),[ce,ve]=d.useState(!1),[pe,xe]=d.useState(!1),fe=d.useRef(null),Se=d.useRef(null),de=d.useRef(null),we=d.useMemo(()=>{var se;return((se=window.matchMedia)==null?void 0:se.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>(Ie(),dt(),window.history.pushState({mode:"classic"},"",window.location.href),()=>Le()),[]),d.useEffect(()=>{const se=me=>{me.preventDefault(),e()};return window.addEventListener("popstate",se),()=>window.removeEventListener("popstate",se)},[e]),d.useEffect(()=>(c==="question"&&h>0&&!pe?fe.current=setTimeout(()=>{x(se=>{const me=se-1;return me===10&&i&&zr("/sounds/tick.mp3",.8),me})},1e3):c==="question"&&h===0&&P(!0),()=>{fe.current&&clearTimeout(fe.current)}),[c,h,i,pe]),d.useEffect(()=>{if(c!=="wheel"||M==null)return;re(M),i&&zr("/sounds/progress.mp3",.6),le(M);const se=setTimeout(()=>le(-1),900),me=setTimeout(()=>re(-1),900),Fe=setTimeout(()=>{ne&&(ne==="streakFlash"?u("streakFlash"):ne==="characterPicker"?u("characterPicker"):Xe(),B(null)),I(null)},1800);return()=>{clearTimeout(se),clearTimeout(me),clearTimeout(Fe)}},[c,M,ne,i]),d.useEffect(()=>{c!=="wheel"||!ce||(V(se=>se+1),ve(!1))},[c,ce]),d.useEffect(()=>{if(c!=="wheel"||F==null)return;const me=setTimeout(()=>{I(F),K(null)},ee?1800:0);return()=>clearTimeout(me)},[c,F,ee]);const Ie=async()=>{try{const me=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Fe}=hr.parse(me,{header:!0,skipEmptyLines:!0,transformHeader:ke=>ke.trim().toLowerCase()}),Pe=Fe.map((ke,it)=>{var kn;const vt=[ke.option1,ke.option2,ke.option3,ke.option4].map(pr=>(pr||"").trim()).filter(Boolean);if(vt.length<4)return null;let ln={a:0,b:1,c:2,d:3}[(kn=ke.answer)==null?void 0:kn.toLowerCase()];return ln===void 0&&(ln=vt.findIndex(pr=>pr.toLowerCase()===(ke.answer||"").toLowerCase())),ln===-1&&(ln=0),{id:ke.id||`q_${it}`,prompt:(ke.question||"").trim(),options:vt,correctIndex:ln,category:(ke.category||ke.subject||"general knowledge").trim(),difficulty:(ke.difficulty||"medium").toLowerCase(),explanation:(ke.explanation||"").trim()}}).filter(Boolean);b(Pe)}catch(se){console.error("Failed to load questions:",se),b([])}},dt=()=>{const se=new Audio("/sounds/spin.mp3");se.loop=!0,se.volume=.6,Se.current=se},Le=()=>{if(fe.current&&clearTimeout(fe.current),de.current&&(clearTimeout(de.current),de.current=null),Se.current){try{Se.current.pause()}catch{}Se.current=null}},Me=()=>{p({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),te([!1,!1,!1]),j(null),v(null),w(null),E([]),S(null),P(!1),V(0)},Xe=()=>{e(),Me()},zt=()=>{if(i&&Se.current){try{Se.current.currentTime=0,Se.current.play()}catch{}de.current&&clearTimeout(de.current),de.current=setTimeout(()=>{X()},2e3)}},X=()=>{if(de.current&&(clearTimeout(de.current),de.current=null),Se.current)try{Se.current.pause(),Se.current.currentTime=0}catch{}},ae=()=>{if(Y)return;R(null),z(!1),O(null),H(!0),zt();const se=Math.floor(Math.random()*rn.length),me=rn[se],Fe=Dd(A),Pe=se*nr+nr/2,ke=(Math.random()-.5)*(nr*.3),it=360-Pe+ke;let vt=Dd(it-Fe);const en=Cn.FULL_TURNS*360+vt,ln=A+en+Cn.OVERSHOOT;q(`transform ${we?1e3:Cn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),U(ln),uc([20,50,20]),setTimeout(()=>{q(`transform ${we?200:Cn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),U(kn=>kn-Cn.OVERSHOOT)},we?1e3:Cn.DURATION),setTimeout(()=>{X(),H(!1),R({cat:me,index:se}),v(me),O(me.color),z(!0),setTimeout(()=>{z(!1),u("interstitial")},1500),setTimeout(()=>O(null),1e3)},(we?1e3:Cn.DURATION)+(we?200:Cn.SETTLE_DURATION)+100)},ge=()=>{const se=m.filter(Fe=>{const Pe=Fe.category.toLowerCase(),ke=C.name.toLowerCase();return Pe.includes(ke)||ke.includes(Pe)});let me;se.length>0?me=se[Math.floor(Math.random()*se.length)]:me=m[Math.floor(Math.random()*m.length)],me?(j(me),x(30),E([]),S(null),P(!1),xe(!1),u("question")):u("wheel")},Ee=(se,me,Fe=!1)=>{if(!Fe){xe(!0);return}const Pe=f.qIndex,ke=[...f.progress];ke[Pe]=!0;const it=[...W];if(it[Pe]=!!se,te(it),p(vt=>({...vt,progress:ke,qIndex:vt.qIndex+1})),se&&(be.addCoins(5,"Classic Mode - Correct Answer"),be.addXP(1),ve(!0)),K(Pe),oe(!!se),Pe===2){const vt=it.every(Boolean);B(vt?"streakFlash":"modes")}else B(null);u("wheel")},Ke=se=>{if(!(f.lifelines[se]||!y)){if(p(me=>({...me,lifelines:{...me.lifelines,[se]:!0}})),se==="fifty"){const Fe=y.options.map((Pe,ke)=>ke).filter(Pe=>Pe!==y.correctIndex).slice(0,2);E(Fe)}else if(se==="audience"){const me=40+Math.random()*25;let Fe=100-me;const Pe=[0,0,0,0];Pe[y.correctIndex]=Math.round(me);const ke=[0,1,2,3].filter(it=>it!==y.correctIndex);ke.forEach((it,vt)=>{if(vt===ke.length-1)Pe[it]=Fe;else{const en=Math.floor(Math.random()*Fe);Pe[it]=en,Fe-=en}}),S(Pe)}}},je=se=>{w(se),u("bonusInterstitial")},gt=se=>{se&&g&&(o(g),i&&zr("/sounds/coin.mp3",1)),setTimeout(()=>{Xe()},3e3)},De=()=>{u("wheel")};switch(c){case"wheel":return n.jsx(pg,{run:f,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:ae,onBack:e,spinning:Y,angle:A,transition:G,result:_,showCallout:$,glowColor:D,soundOn:i,setSoundOn:l,showSparkle:Z,pulseIdx:Q,coinBurstTick:L,pendingProgressIdx:M,lastAnswerWasCorrect:ee,nextProgressIdx:F});case"interstitial":return n.jsx(Md,{category:C,onComplete:ge,soundOn:i});case"streakFlash":return n.jsx(kg,{onDone:()=>u("characterPicker")});case"question":return n.jsx(zd,{question:y,category:C,onAnswer:Ee,run:f,timeLeft:h,usedLifelines:f.lifelines,onUseLifeline:Ke,eliminatedOptions:N,audienceData:T,onBack:De,timeUp:k,onTimeUpBackToWheel:()=>{P(!1),u("wheel")},soundOn:i});case"characterPicker":return n.jsx(Sg,{onSelect:je});case"bonusInterstitial":return n.jsx(Md,{category:rn.find(se=>ir(se.name)===g),onComplete:()=>u("bonusQuestion"),isBonus:!0,soundOn:i});case"bonusQuestion":if(!y){const se=rn.find(me=>ir(me.name)===g);if(se&&m.length>0){const me=m.filter(Pe=>{const ke=Pe.category.toLowerCase(),it=se.name.toLowerCase();return ke.includes(it)||it.includes(ke)}),Fe=me.length>0?me[Math.floor(Math.random()*me.length)]:m[Math.floor(Math.random()*m.length)];j(Fe),x(30)}return n.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:n.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return n.jsx(zd,{question:y,category:rn.find(se=>ir(se.name)===g)||rn[0],onAnswer:gt,run:{...f,lifelines:{fifty:!0,audience:!0}},timeLeft:h,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:e,soundOn:i});default:return n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),n.jsx("button",{onClick:()=>u("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function Eg({lives:e,maxLives:t=3}){const[r,s]=d.useState(null),[a,i]=d.useState(e);return d.useEffect(()=>{e<a?(s(a-1),setTimeout(()=>s(null),600)):e>a&&(s(e-1),setTimeout(()=>s(null),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"relative",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[n.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((o,l)=>n.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:n.jsxs("div",{className:"relative",children:[l<e?n.jsxs("div",{className:`relative ${l===r&&e>a?"heart-gained":""}`,children:[n.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&n.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):n.jsx("div",{className:`relative ${l===r&&e<a?"heart-lost":""}`,children:n.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===r&&e>a&&n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[n.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),n.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),n.jsx("div",{className:"pr-1",children:n.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&n.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:n.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function Pg({question:e,onAnswer:t,lives:r,questionCount:s,correctStreak:a,totalScore:i,currentDifficulty:o,timeLeft:l,showFeedback:c,lastAnswerCorrect:u,checkpoint:f,onBack:p,soundOn:m,setSoundOn:b}){const[y,j]=d.useState(null),[C,v]=d.useState(!1),[h,x]=d.useState(!1),N={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},E=N[o];d.useEffect(()=>{a>0&&a%5===0&&c&&u&&(v(!0),setTimeout(()=>v(!1),3e3))},[a,c,u]),d.useEffect(()=>{c&&u&&(x(!0),setTimeout(()=>x(!1),1e3))},[c,u]);const T=S=>{c||(j(S),t(S))};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:E.emoji}),n.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),n.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-8 slide-in",children:[n.jsx("button",{onClick:p,className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"◀️"})}),n.jsx(Eg,{lives:r}),n.jsx("button",{onClick:()=>b(!m),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:m?"🔊":"🔇"})})]}),n.jsx("div",{className:`glass-card rounded-3xl p-2 shadow-xl mb-2 mt-12 slide-in bg-gradient-to-r ${E.accentGradient}`,style:{animationDelay:"0.1s"},children:n.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${E.color} bg-clip-text text-transparent ${h?"score-pulse":""}`,children:i}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),c&&u&&n.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",N[o]?o==="EASY"?10:o==="MEDIUM"?20:o==="HARD"?30:o==="EXPERT"?50:100:10]})})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-black text-white",children:s}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:`text-3xl font-black text-orange-400 ${a>0?"streak-flame":""}`,children:a}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),n.jsxs("div",{className:"flex justify-between items-center mb-1 slide-in",style:{animationDelay:"0.2s"},children:[n.jsx("div",{className:`px-4 py-3 rounded-full bg-gradient-to-r ${E.color} text-white shadow-lg`,children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:E.emoji}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:E.label}),n.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),n.jsx("div",{className:"relative",children:n.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[n.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),n.jsx("div",{className:"relative z-10",children:n.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),n.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[n.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),n.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),n.jsx("div",{className:"space-y-3",children:e.options.map((S,g)=>{const w=["A","B","C","D"],k=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let P="glass-card border border-white/10",A="";return c&&(g===e.correctIndex?(P="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",A="correct-bounce"):y===g&&!u&&(P="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",A="wrong-shake")),n.jsx("button",{onClick:()=>T(g),disabled:c,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${P} ${A} 
                  ${c?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+g*.05}s`},children:n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${k[g]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:w[g]}),n.jsx("span",{className:"flex-1 text-left font-medium text-white",children:S}),c&&g===e.correctIndex&&n.jsx("span",{className:"text-2xl",children:"✅"}),c&&y===g&&!u&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},g)})}),c&&n.jsx("div",{className:"mt-6 text-center slide-in",children:n.jsx("p",{className:"text-sm font-medium text-white/70",children:u?E.motivationalText:"No worries! Keep trying! 💪"})}),f>0&&n.jsx("div",{className:"mt-4 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:n.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏁"}),n.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",f]})]})})})]}),C&&n.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),n.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),n.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})})]})}function Tg({score:e,questionsAnswered:t,highScore:r,checkpoint:s,onRestart:a,onContinue:i,onBack:o}){const l=e>r,[c,u]=d.useState(!1),[f,p]=d.useState(0),[m,b]=d.useState(!1),y=d.useRef(null);d.useEffect(()=>{const x=e/60;let N=0;const E=setInterval(()=>{N+=x,N>=e?(p(e),clearInterval(E),l&&(u(!0),setTimeout(()=>u(!1),5e3))):p(Math.floor(N))},2e3/60);return setTimeout(()=>b(!0),2200),()=>clearInterval(E)},[e,l]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const C=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),c&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((v,h)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:n.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},h))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[n.jsxs("div",{className:"mb-8 slide-up",children:[n.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&n.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:n.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"🏆"}),n.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),n.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),m&&n.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:n.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${C.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[n.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:C.emoji}),n.jsx("h2",{className:"text-3xl font-black mb-2",children:C.title}),n.jsx("p",{className:"text-white/80 mb-4",children:C.subtitle}),n.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((v,h)=>n.jsx("span",{className:`text-2xl ${h<C.stars?"star-pop":""}`,style:{animationDelay:`${2.5+h*.1}s`},children:h<C.stars?"⭐":"☆"},h))})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),n.jsx("div",{ref:y,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:f}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"📊"}),n.jsx("div",{className:"text-4xl font-black text-white",children:t}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(r,e)]})})]})]}),n.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:n.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),n.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&i&&n.jsx("button",{onClick:i,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏁"}),n.jsxs("span",{children:["Continue from Question ",s]})]})}),n.jsx("button",{onClick:a,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎮"}),n.jsx("span",{children:"Play Again"})]})}),n.jsx("button",{onClick:o,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏠"}),n.jsx("span",{children:"Back to Games"})]})})]})]})]})}const Od={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function Rg({onBack:e,isFromQuest:t}){const{coins:r,xp:s,level:a,soundOn:i,addCoins:o,addXp:l,setSoundOn:c}=Ti(),[u,f]=d.useState("playing"),[p,m]=d.useState(3),[b,y]=d.useState(0),[j,C]=d.useState(0),[v,h]=d.useState(0),[x,N]=d.useState("EASY"),[E,T]=d.useState([]),[S,g]=d.useState(null),[w,k]=d.useState(30),[P,A]=d.useState(!1),[U,G]=d.useState(!1),[q,Y]=d.useState(0),[H,_]=d.useState(!1),R=d.useRef(null),$=d.useRef(new Set);d.useEffect(()=>(D(),I(),window.history.pushState({mode:"survival"},"",window.location.href),()=>{R.current&&clearTimeout(R.current)}),[]),d.useEffect(()=>(u==="playing"&&S&&w>0&&!P&&(R.current=setTimeout(()=>{k(W=>W<=1?(V(),0):(W===6&&i&&Q("/sounds/tick.mp3",.8),W-1))},1e3)),()=>{R.current&&clearTimeout(R.current)}),[u,S,w,P,i]),d.useEffect(()=>{const W=z(b);W!==x&&(N(W),i&&Q("/sounds/levelup.mp3",.6))},[b,x,i]),d.useEffect(()=>{b>0&&b%10===0&&(M(),Y(b),i&&Q("/sounds/checkpoint.mp3",.7))},[b,i]),d.useEffect(()=>{const W=te=>{te.preventDefault(),_(!0),window.history.pushState({mode:"survival"},"",window.location.href)};return window.addEventListener("popstate",W),()=>{window.removeEventListener("popstate",W)}},[]);const z=W=>W>=100?"LEGENDARY":W>=50?"EXPERT":W>=25?"HARD":W>=10?"MEDIUM":"EASY",D=async()=>{try{const te=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:ce}=hr.parse(te,{header:!0,skipEmptyLines:!0,transformHeader:pe=>pe.trim().toLowerCase()}),ve=ce.map((pe,xe)=>{var we;const fe=[pe.option1,pe.option2,pe.option3,pe.option4].map(Ie=>(Ie||"").trim()).filter(Boolean);if(fe.length<4)return null;let de={a:0,b:1,c:2,d:3}[(we=pe.answer)==null?void 0:we.toLowerCase()];return de===void 0&&(de=fe.findIndex(Ie=>Ie.toLowerCase()===(pe.answer||"").toLowerCase())),de===-1&&(de=0),{id:pe.id||`q_${xe}`,prompt:(pe.question||"").trim(),options:fe,correctIndex:de,category:(pe.category||pe.subject||"general").trim(),difficulty:(pe.difficulty||"medium").toLowerCase()}}).filter(Boolean);T(ve),O(ve)}catch(W){console.error("Failed to load questions:",W)}},O=(W=E)=>{const te=W.filter(xe=>!$.current.has(xe.id));te.length===0&&($.current.clear(),te.push(...W));const ce=x.toLowerCase();let ve=te.filter(xe=>xe.difficulty===ce||xe.difficulty==="medium");ve.length===0&&(ve=te);const pe=ve[Math.floor(Math.random()*ve.length)];pe&&($.current.add(pe.id),g(pe),k(Od[x].timer),A(!1))},Z=W=>{if(P)return;const te=W===S.correctIndex;G(te),A(!0),te?re():L(),setTimeout(()=>{(p>0||te)&&(y(ce=>ce+1),O())},1500)},re=()=>{const W=Od[x].points;h(te=>te+W),C(te=>{const ce=te+1;if(t){const ve=JSON.parse(localStorage.getItem("questProgress")||"{}");ve.winStreak=Math.max(ve.winStreak||0,ce),ve.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(ve)),ce>=5&&console.log("Win streak quest completed!")}return ce%5===0&&p<3&&(m(ve=>Math.min(ve+1,3)),i&&Q("/sounds/lifeup.mp3",.8)),ce}),o(Math.floor(W/10)),l(1),i&&Q("/sounds/correct.mp3",.7)},L=()=>{C(0),m(W=>{const te=W-1;return te<=0&&(f("gameOver"),K()),te}),i&&Q("/sounds/wrong.mp3",.7),le([200])},V=()=>{L()},M=()=>{const W={questionCount:b,totalScore:v,lives:p,correctStreak:j,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(W))},I=()=>{const W=localStorage.getItem("survival_checkpoint");if(W)try{const te=JSON.parse(W);Date.now()-te.timestamp<864e5?(y(te.questionCount),h(te.totalScore),m(te.lives),C(te.correctStreak),Y(te.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(te){console.error("Failed to load checkpoint:",te)}},F=()=>{localStorage.removeItem("survival_checkpoint"),Y(0)},K=()=>{const W=parseInt(localStorage.getItem("survival_highscore")||"0");v>W&&(localStorage.setItem("survival_highscore",v.toString()),localStorage.setItem("survival_highquestions",b.toString()))},ee=()=>{f("playing"),m(3),y(0),C(0),h(0),N("EASY"),$.current.clear(),F(),O()},oe=()=>{f("playing"),O()},ne=()=>{_(!0)},B=()=>{if(t){const W=JSON.parse(localStorage.getItem("questProgress")||"{}");W.winStreak=Math.max(W.winStreak||0,j),W.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(W)),window.location.href="/profile/quests"}else window.history.go(-1),e()},Q=(W,te=.5)=>{try{const ce=new Audio(W);ce.volume=te,ce.play()}catch{}},le=W=>{navigator.vibrate&&navigator.vibrate(W)};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),u==="gameOver"?n.jsxs(n.Fragment,{children:[n.jsx(Tg,{score:v,questionsAnswered:b,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:q,onRestart:ee,onContinue:q>0?oe:null,onBack:ne}),H&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>_(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:B,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):S?n.jsxs(n.Fragment,{children:[n.jsx(Pg,{question:S,onAnswer:Z,lives:p,questionCount:b,correctStreak:j,totalScore:v,currentDifficulty:x,timeLeft:w,showFeedback:P,lastAnswerCorrect:U,checkpoint:q,onBack:ne,soundOn:i,setSoundOn:c}),H&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>_(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:B,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const rr=[{id:1,name:"Sandy Beach",emoji:"🏖️",theme:{background:"from-yellow-300 via-orange-300 to-blue-400",accent:"from-yellow-400 to-orange-400",cardBg:"from-amber-500/20 to-yellow-500/20",unlockGradient:"from-yellow-400 to-amber-500"},difficulty:"EASY",difficultyRange:{min:0,max:9},questionDifficulty:["easy"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:10,gemChance:.3,gemBonus:5,speedBonus:3,perfectBonus:50,treasurePiece:"🧩",completionCoins:30},description:"Start your adventure on the sunny shores! Easy questions to warm up.",unlockRequirement:null,visualElements:{bgEmojis:["🌊","🐚","🦀","⛱️","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","✨"]}},{id:2,name:"Jungle Cave",emoji:"🌴",theme:{background:"from-green-400 via-emerald-500 to-teal-600",accent:"from-green-500 to-emerald-600",cardBg:"from-green-500/20 to-emerald-500/20",unlockGradient:"from-green-400 to-emerald-500"},difficulty:"EASY-MEDIUM",difficultyRange:{min:10,max:24},questionDifficulty:["easy","medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:15,gemChance:.35,gemBonus:7,speedBonus:5,perfectBonus:75,treasurePiece:"🗝️",completionCoins:50},description:"Explore the mysterious jungle caves! Watch out for tricky vines!",unlockRequirement:{island:1,treasurePiece:!0},visualElements:{bgEmojis:["🌿","🦜","🐒","🦋","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🌟"]}},{id:3,name:"Crystal Mountain",emoji:"⛰️",theme:{background:"from-purple-400 via-pink-400 to-indigo-500",accent:"from-purple-500 to-pink-500",cardBg:"from-purple-500/20 to-pink-500/20",unlockGradient:"from-purple-400 to-pink-500"},difficulty:"MEDIUM",difficultyRange:{min:25,max:49},questionDifficulty:["medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:20,gemChance:.4,gemBonus:10,speedBonus:7,perfectBonus:100,treasurePiece:"💎",completionCoins:75},description:"Climb the sparkling crystal peaks! Medium challenges await!",unlockRequirement:{island:2,treasurePiece:!0},visualElements:{bgEmojis:["✨","🔮","⭐","🌟","💫"],diggingEmoji:"⚒️",foundEmojis:["💎","🪙","🌈"]}},{id:4,name:"Pirate Ship",emoji:"🏴‍☠️",theme:{background:"from-slate-600 via-blue-600 to-cyan-500",accent:"from-slate-700 to-blue-700",cardBg:"from-slate-500/20 to-blue-500/20",unlockGradient:"from-slate-500 to-blue-600"},difficulty:"MEDIUM-HARD",difficultyRange:{min:50,max:99},questionDifficulty:["medium","hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:30,gemChance:.45,gemBonus:15,speedBonus:10,perfectBonus:150,treasurePiece:"🗺️",completionCoins:100},description:"Ahoy matey! Navigate the pirate ship's challenging puzzles!",unlockRequirement:{island:3,treasurePiece:!0},visualElements:{bgEmojis:["⚓","🦜","💀","🌊","⛵"],diggingEmoji:"🗡️",foundEmojis:["💎","🪙","👑"]}},{id:5,name:"Volcano Peak",emoji:"🌋",theme:{background:"from-red-500 via-orange-500 to-yellow-500",accent:"from-red-600 to-orange-600",cardBg:"from-red-500/20 to-orange-500/20",unlockGradient:"from-red-500 to-orange-500"},difficulty:"HARD",difficultyRange:{min:100,max:1/0},questionDifficulty:["hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:50,gemChance:.5,gemBonus:25,speedBonus:15,perfectBonus:200,treasurePiece:"👑",completionCoins:150},description:"The ultimate challenge! Can you conquer the volcano?",unlockRequirement:{island:4,treasurePiece:!0},visualElements:{bgEmojis:["🔥","🌋","💥","⚡","🔴"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🏆"]}}],Be={SHOVELS_PER_ISLAND:3,QUESTIONS_PER_ISLAND:3,SPEED_BONUS_THRESHOLD:5,MIN_CORRECT_FOR_TREASURE:2,FINAL_TREASURE_REWARD:200,FINAL_TREASURE_TITLE:"Treasure Master",DIGGING_ANIMATION_DURATION:1500,REWARD_DISPLAY_DURATION:2e3,TRANSITION_DURATION:500,STORAGE_KEYS:{PROGRESS:"treasureHunt_progress",STATS:"treasureHunt_stats",UNLOCKED_ISLANDS:"treasureHunt_unlocked",COMPLETED_ISLANDS:"treasureHunt_completed",TREASURE_PIECES:"treasureHunt_pieces"},SOUNDS:{DIG:"/sounds/dig.mp3",TREASURE_FOUND:"/sounds/treasure.mp3",GEM_FOUND:"/sounds/gem.mp3",WRONG:"/sounds/wrong.mp3",ISLAND_COMPLETE:"/sounds/islandcomplete.mp3",ISLAND_UNLOCK:"/sounds/unlock.mp3",FINAL_TREASURE:"/sounds/victory.mp3",TICK:"/sounds/tick.mp3",SHOVEL_BREAK:"/sounds/break.mp3"}},dn=e=>rr.find(t=>t.id===e),_g=(e,t)=>{const r=dn(e);if(!r.unlockRequirement)return!0;const s=t[r.unlockRequirement.island];return s&&s.treasurePiece},Ag=(e,t)=>{const r={0:["Keep trying! You'll get it! 💪","Don't give up! Adventure awaits! 🌟","Practice makes perfect! 🎯"],1:["Good effort! Almost there! 🌈","Nice try! Keep going! ⭐","You're learning fast! 🚀"],2:["Awesome! You found treasure! 🏆","Great job, explorer! 🎉","You're amazing! ✨"],3:["PERFECT! You're a champion! 👑","INCREDIBLE! Master explorer! 🌟","LEGENDARY performance! 🏆"]},s=r[e]||r[0];return s[Math.floor(Math.random()*s.length)]},Ig=e=>rr.map(t=>{var r;return{id:t.id,piece:t.rewards.treasurePiece,collected:((r=e[t.id])==null?void 0:r.treasurePiece)||!1}});function Lg({islands:e,islandProgress:t,onSelectIsland:r,onBack:s,soundOn:a,setSoundOn:i,totalStats:o}){const[l,c]=d.useState(!1),u=Ig(t),f=u.filter(m=>m.collected).length,p=Math.round(f/e.length*100);return d.useEffect(()=>(document.body.style.position="fixed",document.body.style.overflow="hidden",document.body.style.width="100%",document.body.style.height="100%",()=>{document.body.style.position="",document.body.style.overflow="",document.body.style.width="",document.body.style.height=""}),[]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 overflow-hidden flex flex-col",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:"absolute top-10 cloud-drift",style:{animationDelay:"0s"},children:n.jsx("div",{className:"text-6xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-12 cloud-drift",style:{animationDelay:"7s",animationDuration:"25s"},children:n.jsx("div",{className:"text-5xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-10 right-12",children:n.jsx("div",{className:"text-6xl pulse-animation opacity-80",children:"☀️"})}),n.jsx("div",{className:"absolute top-16 left-20 float-animation opacity-60",children:n.jsx("div",{className:"text-2xl",children:"🦜"})})]}),n.jsxs("div",{className:"relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:s,className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅"})}),n.jsx("div",{className:"glass-card rounded-2xl px-3 py-2 shadow-lg",children:n.jsxs("div",{className:"text-white font-bold text-center",children:[n.jsx("div",{className:"text-[10px] opacity-90",children:"TREASURE HUNT"}),n.jsx("div",{className:"text-sm",children:"🏝️ Island Explorer 🏝️"})]})}),n.jsx("button",{onClick:()=>i(!a),className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:a?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 shadow-xl mt-2",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white font-bold text-sm",children:"Adventure Progress"}),n.jsxs("span",{className:"text-white font-bold text-sm",children:[p,"%"]})]}),n.jsx("div",{className:"w-full h-2.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000",style:{width:`${p}%`}})}),n.jsx("button",{onClick:()=>c(!0),className:"mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{children:"🏆"}),n.jsxs("span",{children:["Treasure Pieces: ",f,"/5"]}),n.jsx("span",{children:"🏆"})]})})]})]}),n.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-4",children:n.jsxs("div",{className:"w-full max-w-md",children:[n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.slice(0,4).map(m=>{const b=t[m.id],y=b==null?void 0:b.unlocked,j=b==null?void 0:b.treasurePiece,C=b==null?void 0:b.perfectScore;return n.jsxs("button",{onClick:()=>r(m.id),disabled:!y,className:`relative aspect-square rounded-2xl transition-all ${y?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${y?m.theme.background:"from-gray-400 to-gray-500"}`,children:y&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]})}),!y&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:m.id})}),C&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${y?"bounce-animation":""}`,children:y?m.emoji:"❓"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:m.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${y?"bg-white/30":"bg-black/30"} text-white`,children:m.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:m.rewards.treasurePiece}),(b==null?void 0:b.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[b.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},m.id)})}),n.jsx("div",{className:"flex justify-center mt-3",children:e.slice(4,5).map(m=>{const b=t[m.id],y=b==null?void 0:b.unlocked,j=b==null?void 0:b.treasurePiece,C=b==null?void 0:b.perfectScore;return n.jsxs("button",{onClick:()=>r(m.id),disabled:!y,className:`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${y?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsxs("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${y?m.theme.background:"from-gray-400 to-gray-500"}`,children:[y&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]}),!y&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse"})]}),!y&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:m.id})}),C&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${y?"bounce-animation":""}`,children:y?m.emoji:"👑"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:m.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${y?"bg-white/30":"bg-black/30"} text-white`,children:m.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:m.rewards.treasurePiece}),(b==null?void 0:b.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[b.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},m.id)})})]})}),n.jsx("div",{className:"relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+3rem)]",children:n.jsx("div",{className:"bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💰"}),n.jsx("div",{className:"text-yellow-300 font-black text-lg",children:o.totalCoinsEarned}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Total Coins"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💎"}),n.jsx("div",{className:"text-cyan-300 font-black text-lg",children:o.totalGemsFound}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Gems Found"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"📝"}),n.jsxs("div",{className:"text-green-300 font-black text-lg",children:[o.totalCorrectAnswers,"/",o.totalQuestionsAnswered]}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Correct"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl",children:[n.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-6",children:"🏆 Treasure Collection 🏆"}),n.jsx("div",{className:"flex justify-center gap-4 mb-6",children:u.map((m,b)=>n.jsx("div",{className:`text-5xl ${m.collected?"":"opacity-30 grayscale"}`,children:m.collected?m.piece:"❓"},m.id))}),n.jsx("div",{className:"text-center text-white mb-6",children:f===5?n.jsxs("div",{children:[n.jsx("p",{className:"text-lg font-bold mb-2",children:"🎉 COMPLETE! 🎉"}),n.jsx("p",{className:"text-sm opacity-90",children:"You're a true Treasure Master!"})]}):n.jsx("p",{className:"text-sm opacity-90",children:"Collect all 5 pieces to unlock the final treasure!"})}),n.jsx("button",{onClick:()=>c(!1),className:"w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors",children:"Close"})]})})]})}function Dg({island:e,progress:t,onStart:r,onClose:s,soundOn:a}){const[i,o]=d.useState(!1);d.useEffect(()=>{o(!0)},[]),d.useEffect(()=>{const m=b=>{s()};return window.history.pushState({islandDetail:!0},"",window.location.pathname),window.addEventListener("popstate",m),()=>window.removeEventListener("popstate",m)},[s]);const l=(t==null?void 0:t.attempts)>0,c=t==null?void 0:t.treasurePiece;t==null||t.perfectScore;const u=(t==null?void 0:t.bestScore)||0,f=()=>{if(a){const m=new Audio("/sounds/start.mp3");m.volume=.5,m.play().catch(()=>{})}r()},p=m=>{const b=Math.floor(m/60),y=m%60;return`${b}:${y.toString().padStart(2,"0")}`};return n.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:`relative w-full max-w-sm bg-gradient-to-br ${e.theme.background} rounded-2xl shadow-2xl ${i?"slide-up":""}`,children:[n.jsx("div",{className:"relative p-4 pb-2",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-2 pulse-animation",children:e.emoji}),n.jsx("h2",{className:"text-2xl font-black text-white",children:e.name}),n.jsx("div",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2",children:n.jsxs("span",{className:"text-white font-bold text-sm",children:["Level ",e.id," • ",e.difficulty]})})]})}),n.jsxs("div",{className:"px-4 py-3 space-y-2",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Time"}),n.jsx("div",{className:"text-white font-bold",children:p(e.timeLimit)})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Questions"}),n.jsx("div",{className:"text-white font-bold",children:Be.QUESTIONS_PER_ISLAND})]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:e.rewards.treasurePiece}),n.jsx("span",{className:"text-white font-medium",children:"To Win"})]}),n.jsxs("span",{className:"text-white font-bold",children:[e.requiredCorrect,"/3 Correct"]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:[n.jsx("div",{className:"text-white font-bold text-sm mb-2",children:"Rewards"}),n.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💰"}),n.jsx("div",{className:"text-white/70 text-xs",children:e.rewards.perCorrectAnswer})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💎"}),n.jsxs("div",{className:"text-white/70 text-xs",children:[Math.round(e.rewards.gemChance*100),"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"⚡"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.speedBonus]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"🏆"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.perfectBonus]})]})]})]}),l&&n.jsx("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((m,b)=>n.jsx("span",{className:"text-lg",children:b<u?"⭐":"☆"},b))}),n.jsxs("div",{className:"text-white text-sm",children:[n.jsxs("span",{className:"font-bold",children:[u,"/3"]})," • ",t.attempts," tries"]}),c&&n.jsx("div",{className:"text-2xl",children:e.rewards.treasurePiece})]})})]}),n.jsxs("div",{className:"p-4 pt-2 space-y-2",children:[n.jsx("button",{onClick:f,className:"w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("span",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏴‍☠️"}),n.jsx("span",{children:l?"Play Again":"Start Adventure"}),n.jsx("span",{className:"text-xl",children:"🏴‍☠️"})]})}),n.jsx("button",{onClick:s,className:"w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors",children:"Back to Map"})]})]})]})}function zg({shovelsRemaining:e,showBreak:t=!1}){const[r,s]=d.useState(!1),[a,i]=d.useState(e),o=3;return d.useEffect(()=>{e<a&&(s(!0),setTimeout(()=>s(!1),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"inline-block",children:[n.jsx("style",{jsx:!0,children:`
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
                  `,children:u||f?"⛏️":"🪦"}),f&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 40 40",children:[n.jsx("path",{d:"M20,10 L18,20 L22,30",stroke:"#ff4444",strokeWidth:"2",fill:"none",opacity:"0.8",className:"shovel-crack"}),n.jsx("path",{d:"M15,15 L20,20 L25,18",stroke:"#ff4444",strokeWidth:"1.5",fill:"none",opacity:"0.6",className:"shovel-crack",style:{animationDelay:"0.1s"}})]})}),n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[n.jsx("span",{className:"absolute top-0 left-1/2 text-xs shovel-fall",children:"💔"}),n.jsx("span",{className:"absolute top-1/2 left-0 text-xs shovel-fall",style:{animationDelay:"0.2s"},children:"✨"}),n.jsx("span",{className:"absolute top-1/2 right-0 text-xs shovel-fall",style:{animationDelay:"0.3s"},children:"💥"})]})]}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:`text-xs font-bold ${u?"text-blue-600":"text-white/30"}`,children:c+1})})]},c)})}),e===0&&n.jsx("span",{className:"text-red-400 text-sm font-bold animate-pulse ml-2",children:"No shovels left!"}),e===1&&n.jsx("span",{className:"text-red-500 text-sm font-bold ml-2",children:"Last chance!"})]})})]})}function Mg({island:e,foundGem:t,onComplete:r}){const[s,a]=d.useState("digging"),[i,o]=d.useState(!1),[l,c]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(f=>setTimeout(f,800)),a("revealing"),o(!0),t&&(await new Promise(f=>setTimeout(f,400)),c(!0)),await new Promise(f=>setTimeout(f,1e3)),a("complete"),await new Promise(f=>setTimeout(f,300)),r()})()},[t,r]),n.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),s==="digging"&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-8xl dig-animation",children:e.visualElements.diggingEmoji}),[...Array(8)].map((u,f)=>n.jsx("div",{className:"dirt-particle text-4xl",style:{"--fly-x":`${(Math.random()-.5)*200}px`,"--fly-y":`${-Math.random()*150-50}px`,left:"50%",top:"60%",animationDelay:`${f*.1}s`},children:"🟫"},f)),n.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2",children:n.jsx("div",{className:"text-6xl opacity-50",children:"💨"})})]}),s==="revealing"&&n.jsxs("div",{className:"relative",children:[i&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect"})}),n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"text-7xl treasure-reveal treasure-float",children:"💰"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{left:"-30px"},children:"🪙"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{right:"-30px",animationDelay:"0.5s"},children:"🪙"}),n.jsx("div",{className:"absolute text-4xl coin-spin",style:{top:"-30px",animationDelay:"1s"},children:"🪙"})]}),[...Array(6)].map((u,f)=>n.jsx("div",{className:"absolute text-3xl star-burst",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) rotate(${f*60}deg) translateY(-40px)`,animationDelay:`${f*.1}s`},children:"⭐"},f))]}),l&&n.jsxs("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-6xl gem-sparkle",children:"💎"}),n.jsx("div",{className:"absolute -top-2 -left-2 text-2xl animate-pulse",children:"✨"}),n.jsx("div",{className:"absolute -top-2 -right-2 text-2xl animate-pulse",style:{animationDelay:"0.3s"},children:"✨"}),n.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse",style:{animationDelay:"0.6s"},children:"✨"})]}),n.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("span",{className:"text-cyan-300 font-black text-lg drop-shadow-lg",children:"RARE GEM!"})})]}),n.jsx("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2 text-center",children:n.jsx("div",{className:"text-white font-black text-2xl drop-shadow-lg",children:t?"AMAZING FIND!":"TREASURE FOUND!"})})]}),s==="complete"&&n.jsx("div",{className:"relative opacity-0 transition-opacity duration-300",children:n.jsx("div",{className:"text-7xl",children:"✅"})})]})}function Og({island:e,question:t,questionNumber:r,totalQuestions:s,shovelsRemaining:a,timeRemaining:i,coinsEarned:o,gemsFound:l,onAnswer:c,onQuit:u,soundOn:f,setSoundOn:p}){const[m,b]=d.useState(null),[y,j]=d.useState(!1),[C,v]=d.useState(!1),[h,x]=d.useState(!1),[N,E]=d.useState(!1),[T,S]=d.useState(!1),[g,w]=d.useState(!1),k=d.useRef(null);d.useEffect(()=>{b(null),j(!1),v(!1),x(!1),E(!1),w(!1)},[t]),d.useEffect(()=>{const q=Y=>{Y.stopImmediatePropagation(),T||(S(!0),window.history.pushState({questionScreen:!0},"",window.location.pathname))};return window.history.pushState({questionScreen:!0},"",window.location.pathname),window.addEventListener("popstate",q,!0),()=>window.removeEventListener("popstate",q,!0)},[T]);const P=q=>{const Y=Math.floor(q/60),H=q%60;return`${Y}:${H.toString().padStart(2,"0")}`},A=()=>i<=10?"critical":i<=30?"warning":"normal",U=q=>{if(g||y)return;b(q),w(!0);const Y=q===t.correctIndex;v(Y),setTimeout(()=>{if(j(!0),f)if(Y){const H=new Audio("/sounds/dig.mp3");H.volume=.5,H.play().catch(()=>{})}else{const H=new Audio("/sounds/wrong.mp3");H.volume=.5,H.play().catch(()=>{})}Y&&(x(!0),Math.random()<e.rewards.gemChance&&setTimeout(()=>{if(E(!0),f){const _=new Audio("/sounds/gem.mp3");_.volume=.6,_.play().catch(()=>{})}},800)),setTimeout(()=>{c(q)},Y?2e3:1500)},300)},G=A();return n.jsxs("div",{className:`min-h-screen bg-gradient-to-br ${e.theme.background} relative overflow-hidden`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.visualElements.bgEmojis.map((q,Y)=>n.jsx("div",{className:"absolute text-7xl opacity-10 float-animation",style:{top:`${20+Y*15}%`,left:`${10+Y*18}%`,animationDelay:`${Y*.5}s`,animationDuration:`${3+Y}s`},children:q},Y))}),n.jsxs("div",{className:"relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:()=>S(!0),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅️"})}),n.jsx("div",{className:"glass-card rounded-xl px-3 py-1.5 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xl",children:e.emoji}),n.jsx("span",{className:"text-gray-800 font-bold text-sm",children:e.name})]})}),n.jsx("button",{onClick:()=>p(!f),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:f?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 shadow-xl mb-3",children:[n.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-xl font-black ${G==="critical"?"text-red-600 time-pulse-critical":G==="warning"?"text-orange-600":"text-gray-800"}`,children:P(i)}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Time"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-xl font-black text-gray-800",children:[r,"/",s]}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Question"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-orange-600",children:o}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Coins"}),y&&C&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-orange-600 font-bold text-xs coin-float",children:["+",e.rewards.perCorrectAnswer]})})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-blue-600",children:l}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Gems"}),N&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:"text-blue-600 text-xl gem-sparkle",children:"💎"})})]})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar",style:{width:`${(r-1)/s*100}%`}})})})]}),n.jsx("div",{className:"flex justify-center mb-3 pt-2",children:n.jsx(zg,{shovelsRemaining:a,showBreak:y&&!C})})]}),n.jsxs("div",{className:"px-3 pt-8 slide-in",children:[n.jsxs("div",{ref:k,className:`glass-card rounded-2xl shadow-xl p-4 mb-4 ${y&&!C?"wrong-shake":""}`,children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wider",children:["Question ",r]})}),n.jsx("h2",{className:"text-lg font-bold text-center text-gray-800 leading-relaxed",children:t.prompt})]}),n.jsx("div",{className:"space-y-2.5",children:t.options.map((q,Y)=>{const H=["A","B","C","D"],_=m===Y,R=Y===t.correctIndex;let $="glass-card option-card",z="border border-gray-800/20";return y&&(R?($+=" correct-pulse",z="border-2 border-green-500 bg-green-400/20"):_&&!C&&($+=" wrong-shake",z="border-2 border-red-500 bg-red-400/20"),$+=" disabled"),n.jsx("button",{onClick:()=>U(Y),disabled:g,className:`w-full p-3 rounded-xl shadow-lg ${$} ${z}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${Y===0?"from-blue-400 to-blue-500":Y===1?"from-green-400 to-green-500":Y===2?"from-yellow-400 to-yellow-500":"from-purple-400 to-purple-500"} text-white font-bold text-lg flex items-center justify-center shadow-md`,children:H[Y]}),n.jsx("span",{className:"flex-1 text-left font-medium text-gray-800 text-sm",children:q}),y&&R&&n.jsx("span",{className:"text-2xl",children:"✅"}),y&&_&&!C&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},Y)})}),y&&n.jsx("div",{className:"mt-3 text-center slide-in",children:n.jsx("p",{className:"text-base font-bold text-gray-800",children:C?`Great job! Let's dig for treasure! ${e.visualElements.diggingEmoji}`:"Oops! Your shovel broke! Try the next question! 💪"})})]}),h&&n.jsx(Mg,{island:e,foundGem:N,onComplete:()=>x(!1)}),T&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🗺️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the Island?"}),n.jsx("p",{className:"text-white/70",children:"Your progress won't be saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>S(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Leave Island"})]})]})})]})}function Fg({island:e,session:t,earnedTreasure:r,onRetry:s,onContinue:a,soundOn:i}){const[o,l]=d.useState(0),[c,u]=d.useState(!1),[f,p]=d.useState(!1),m=t.correctAnswers===Be.QUESTIONS_PER_ISLAND,b=Ag(t.correctAnswers,e.id);return d.useEffect(()=>{const y=t.coinsEarned,j=2e3,C=30,v=y/C;let h=0;const x=setInterval(()=>{h+=v,h>=y?(l(y),clearInterval(x),r&&setTimeout(()=>u(!0),500),setTimeout(()=>p(!0),r?1500:500)):l(Math.floor(h))},j/C);return()=>clearInterval(x)},[t.coinsEarned,r]),n.jsxs("div",{className:`fixed inset-0 bg-gradient-to-br ${e.theme.background} overflow-hidden flex flex-col`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:m&&[...Array(10)].map((y,j)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,fontSize:`${20+Math.random()*20}px`},children:["🎉","⭐","🎊","✨"][Math.floor(Math.random()*4)]},j))}),n.jsxs("div",{className:"relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4",children:[n.jsxs("div",{className:"mb-3 text-center slide-up",children:[n.jsx("h1",{className:"text-2xl font-black text-white mb-2",children:r?"TREASURE FOUND!":"ISLAND COMPLETE!"}),n.jsx("div",{className:"text-5xl bounce-animation",children:r?e.rewards.treasurePiece:"🏝️"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up",style:{animationDelay:"0.2s",background:"rgba(46, 46, 32, 0.25)"},children:[n.jsxs("div",{className:"text-center mb-2",children:[n.jsxs("div",{className:"text-3xl font-black text-white mb-1",children:[t.correctAnswers,"/",Be.QUESTIONS_PER_ISLAND]}),n.jsx("div",{className:"text-white/80 font-medium",children:"Questions Correct"})]}),f&&n.jsx("div",{className:"flex justify-center gap-2 mb-2",children:[...Array(3)].map((y,j)=>n.jsx("div",{className:`text-3xl ${j<t.correctAnswers?"star-pop":""}`,style:{animationDelay:`${j*.2}s`},children:j<t.correctAnswers?"⭐":"☆"},j))}),c&&r&&n.jsxs("div",{className:"text-center mb-2",children:[n.jsx("div",{className:"text-5xl treasure-shine mb-1",children:e.rewards.treasurePiece}),n.jsx("div",{className:"text-white font-bold text-lg",children:"Treasure Piece Earned!"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-3xl font-black text-yellow-300",children:o}),n.jsx("div",{className:"text-white/70 text-sm",children:"Coins Earned"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:"💎"}),n.jsx("div",{className:"text-3xl font-black text-cyan-300",children:t.gemsFound}),n.jsx("div",{className:"text-white/70 text-sm",children:"Gems Found"})]})]}),n.jsx("div",{className:"text-center p-4 bg-white/10 rounded-1xl",children:n.jsx("p",{className:"text-white font-medium text-lg",children:b})}),m&&n.jsx("div",{className:"mt-4 text-center",children:n.jsx("div",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",children:n.jsx("span",{className:"text-white font-black text-lg",children:"💯 PERFECT SCORE! 💯"})})})]}),n.jsxs("div",{className:"space-y-3 w-full max-w-md slide-up",style:{animationDelay:"0.4s"},children:[!r&&n.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🔄"}),n.jsx("span",{children:"Try Again"})]})}),n.jsx("button",{onClick:a,className:"w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🗺️"}),n.jsx("span",{children:"Back to Map"})]})})]})]})]})}function $g({totalStats:e,onContinue:t,soundOn:r}){const[s,a]=d.useState(!1),[i,o]=d.useState(!1),[l,c]=d.useState(!1),[u,f]=d.useState(!1),[p,m]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(y=>setTimeout(y,500)),a(!0),await new Promise(y=>setTimeout(y,1e3)),o(!0),m(!0),await new Promise(y=>setTimeout(y,800)),c(!0),await new Promise(y=>setTimeout(y,1e3)),f(!0)})()},[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),p&&n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(15)].map((b,y)=>n.jsx("div",{className:"absolute firework",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animationDelay:`${Math.random()*2}s`,fontSize:`${40+Math.random()*40}px`},children:["✨","⭐","💫","🌟"][Math.floor(Math.random()*4)]},y))}),n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((b,y)=>n.jsx("div",{className:"absolute coin-rain",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`,fontSize:`${20+Math.random()*20}px`},children:["🪙","💰","💎"][Math.floor(Math.random()*3)]},y))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"LEGENDARY!"}),n.jsx("div",{className:"text-8xl bounce-animation",children:"👑"})]}),s&&n.jsxs("div",{className:`relative mb-8 ${s?"chest-appear":""}`,children:[n.jsx("div",{className:`text-[150px] ${i?"chest-open":""}`,children:"📦"}),i&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:rr.map((b,y)=>n.jsx("div",{className:"absolute text-6xl float-animation treasure-glow",style:{transform:`rotate(${y*72}deg) translateY(-100px)`,animationDelay:`${y*.2}s`},children:b.rewards.treasurePiece},b.id))})]}),l&&n.jsxs("div",{className:"glass-card rounded-3xl p-6 max-w-md w-full mb-6",children:[n.jsx("h2",{className:"text-2xl font-black text-white text-center mb-6",children:"🏆 FINAL TREASURE UNLOCKED! 🏆"}),n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-2",children:"💰"}),n.jsx("div",{className:"text-4xl font-black text-white",children:Be.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/90 font-medium",children:"Bonus Coins!"})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🏝️"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Islands"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🧩"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Treasures"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💰"}),n.jsx("div",{className:"text-2xl font-black text-yellow-300",children:e.totalCoinsEarned+Be.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Coins"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💎"}),n.jsx("div",{className:"text-2xl font-black text-cyan-300",children:e.totalGemsFound}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Gems"})]})]}),u&&n.jsxs("div",{className:"text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🏆"}),n.jsx("div",{className:"text-xl font-black text-white title-shine",children:Be.FINAL_TREASURE_TITLE}),n.jsx("div",{className:"text-white/90 text-sm mt-1",children:"New Title Unlocked!"})]})]}),l&&n.jsx("button",{onClick:t,className:"w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎉"}),n.jsx("span",{children:"Complete Adventure"}),n.jsx("span",{className:"text-2xl",children:"🎉"})]})}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(10)].map((b,y)=>n.jsx("div",{className:"absolute text-2xl sparkle-animation",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`},children:"✨"},y))})]})]})}function Bg({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,addCoins:i,addXp:o,setSoundOn:l}=Ti(),[c,u]=d.useState(!1),[f,p]=d.useState("map"),[m,b]=d.useState(null),[y,j]=d.useState([]),[C,v]=d.useState(()=>{const D=localStorage.getItem(Be.STORAGE_KEYS.PROGRESS);if(D)try{return JSON.parse(D)}catch(O){console.error("Failed to load progress:",O)}return rr.reduce((O,Z)=>(O[Z.id]={unlocked:Z.id===1,completed:!1,treasurePiece:!1,perfectScore:!1,bestScore:0,attempts:0},O),{})}),[h,x]=d.useState({islandId:null,questions:[],currentQuestionIndex:0,shovelsRemaining:Be.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:300,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:null}),[N,E]=d.useState(()=>{const D=localStorage.getItem(Be.STORAGE_KEYS.STATS);if(D)try{return JSON.parse(D)}catch(O){console.error("Failed to load stats:",O)}return{totalCoinsEarned:0,totalGemsFound:0,totalTreasurePieces:0,totalQuestionsAnswered:0,totalCorrectAnswers:0,islandsCompleted:0,gameCompleted:!1}}),T=d.useRef(null),S=d.useRef(null);d.useEffect(()=>(g(),window.history.pushState({mode:"treasureHunt"},"",window.location.href),()=>{T.current&&clearInterval(T.current)}),[]),d.useEffect(()=>{localStorage.setItem(Be.STORAGE_KEYS.PROGRESS,JSON.stringify(C))},[C]),d.useEffect(()=>{localStorage.setItem(Be.STORAGE_KEYS.STATS,JSON.stringify(N))},[N]),d.useEffect(()=>(f==="playing"&&h.timeRemaining>0?T.current=setInterval(()=>{x(D=>{const O=D.timeRemaining-1;return O<=0?(U(),{...D,timeRemaining:0}):(O===30&&a&&R(Be.SOUNDS.TICK,.6),{...D,timeRemaining:O})})},1e3):T.current&&clearInterval(T.current),()=>{T.current&&clearInterval(T.current)}),[f,h.timeRemaining,a]),d.useEffect(()=>{const D=O=>{O.preventDefault(),f==="map"&&!c?(u(!0),window.history.pushState({mode:"treasureHunt"},"",window.location.href)):f!=="map"&&(p("map"),b(null),window.history.pushState({mode:"treasureHunt"},"",window.location.href))};return window.addEventListener("popstate",D),()=>window.removeEventListener("popstate",D)},[f,c]);const g=async()=>{try{const O=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Z}=hr.parse(O,{header:!0,skipEmptyLines:!0,transformHeader:L=>L.trim().toLowerCase()}),re=Z.map((L,V)=>{var K;const M=[L.option1,L.option2,L.option3,L.option4].map(ee=>(ee||"").trim()).filter(Boolean);if(M.length<4)return null;let F={a:0,b:1,c:2,d:3}[(K=L.answer)==null?void 0:K.toLowerCase()];return F===void 0&&(F=M.findIndex(ee=>ee.toLowerCase()===(L.answer||"").toLowerCase())),F===-1&&(F=0),{id:L.id||`q_${V}`,prompt:(L.question||"").trim(),options:M,correctIndex:F,category:(L.category||L.subject||"general").trim(),difficulty:(L.difficulty||"medium").toLowerCase()}}).filter(Boolean);j(re)}catch(D){console.error("Failed to load questions:",D)}},w=D=>{const O=dn(D);if(!O||y.length===0)return[];let Z=y.filter(L=>O.questionDifficulty.includes(L.difficulty));return Z.length<Be.QUESTIONS_PER_ISLAND&&(Z=y),[...Z].sort(()=>Math.random()-.5).slice(0,Be.QUESTIONS_PER_ISLAND)},k=D=>{if(!_g(D,C)){a&&R("/sounds/locked.mp3",.5),$([100]);return}b(D),p("island-detail"),a&&R("/sounds/select.mp3",.5)},P=D=>{const O=dn(D),Z=w(D);x({islandId:D,questions:Z,currentQuestionIndex:0,shovelsRemaining:Be.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:O.timeLimit,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:Date.now()}),S.current=Date.now(),p("playing"),a&&R("/sounds/start.mp3",.6)},A=D=>{const O=h.questions[h.currentQuestionIndex],Z=D===O.correctIndex,re=(Date.now()-S.current)/1e3;x(L=>{const V={...L,questionTimes:[...L.questionTimes,re]};if(Z){const M=dn(L.islandId);let I=M.rewards.perCorrectAnswer;re<Be.SPEED_BONUS_THRESHOLD&&(I+=M.rewards.speedBonus),Math.random()<M.rewards.gemChance&&(I+=M.rewards.gemBonus,V.gemsFound=L.gemsFound+1),V.correctAnswers=L.correctAnswers+1,V.coinsEarned=L.coinsEarned+I}else V.wrongAnswers=L.wrongAnswers+1,V.shovelsRemaining=L.shovelsRemaining-1,$([200]);return V}),setTimeout(()=>{const L=h.currentQuestionIndex+1;h.shovelsRemaining===0&&!Z||L>=Be.QUESTIONS_PER_ISLAND?G():(x(V=>({...V,currentQuestionIndex:L})),S.current=Date.now())},Z?2e3:1500)},U=()=>{G()},G=()=>{const D=dn(h.islandId),O=h.correctAnswers>=D.requiredCorrect,Z=h.correctAnswers===Be.QUESTIONS_PER_ISLAND;let re=h.coinsEarned;Z&&(re+=D.rewards.perfectBonus),O&&(re+=D.rewards.completionCoins),v(V=>{const M={...V},I=M[h.islandId];if(I.completed=!0,I.attempts+=1,O&&!I.treasurePiece){I.treasurePiece=!0;const F=rr.find(K=>K.id===h.islandId+1);F&&M[F.id]&&(M[F.id].unlocked=!0,a&&setTimeout(()=>R(Be.SOUNDS.ISLAND_UNLOCK,.7),2e3))}return Z&&(I.perfectScore=!0),I.bestScore=Math.max(I.bestScore||0,h.correctAnswers),M}),E(V=>({...V,totalCoinsEarned:V.totalCoinsEarned+re,totalGemsFound:V.totalGemsFound+h.gemsFound,totalTreasurePieces:V.totalTreasurePieces+(O&&!C[h.islandId].treasurePiece?1:0),totalQuestionsAnswered:V.totalQuestionsAnswered+(h.correctAnswers+h.wrongAnswers),totalCorrectAnswers:V.totalCorrectAnswers+h.correctAnswers,islandsCompleted:V.islandsCompleted+(C[h.islandId].completed?0:1)})),i(re),o(h.correctAnswers),x(V=>({...V,coinsEarned:re})),a&&R(O?Be.SOUNDS.TREASURE_FOUND:Be.SOUNDS.ISLAND_COMPLETE,.7),rr.every(V=>{var M;return((M=C[V.id])==null?void 0:M.treasurePiece)===!0})&&!N.gameCompleted?(E(V=>({...V,gameCompleted:!0})),setTimeout(()=>{p("final-treasure"),a&&R(Be.SOUNDS.FINAL_TREASURE,.8)},3e3)):p("reward")},q=()=>{P(h.islandId)},Y=()=>{p("map"),b(null)},H=()=>{i(Be.FINAL_TREASURE_REWARD),o(10),E(D=>({...D,totalCoinsEarned:D.totalCoinsEarned+Be.FINAL_TREASURE_REWARD})),p("map")},_=()=>{window.history.go(-1),e()},R=(D,O=.5)=>{try{const Z=new Audio(D);Z.volume=O,Z.play()}catch(Z){console.error("Failed to play sound:",Z)}},$=D=>{navigator.vibrate&&navigator.vibrate(D)};d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);let z=null;switch(f){case"map":z=n.jsx(Lg,{islands:rr,islandProgress:C,onSelectIsland:k,onBack:()=>u(!0),soundOn:a,setSoundOn:l,totalStats:N});break;case"island-detail":z=n.jsx(Dg,{island:dn(m),progress:C[m],onStart:()=>P(m),onClose:()=>p("map"),soundOn:a});break;case"playing":z=n.jsx(Og,{island:dn(h.islandId),question:h.questions[h.currentQuestionIndex],questionNumber:h.currentQuestionIndex+1,totalQuestions:Be.QUESTIONS_PER_ISLAND,shovelsRemaining:h.shovelsRemaining,timeRemaining:h.timeRemaining,coinsEarned:h.coinsEarned,gemsFound:h.gemsFound,onAnswer:A,onQuit:()=>p("map"),soundOn:a,setSoundOn:l});break;case"reward":z=n.jsx(Fg,{island:dn(h.islandId),session:h,earnedTreasure:h.correctAnswers>=dn(h.islandId).requiredCorrect,onRetry:q,onContinue:Y,soundOn:a});break;case"final-treasure":z=n.jsx($g,{totalStats:N,onContinue:H,soundOn:a});break;default:z=null}return n.jsxs(n.Fragment,{children:[z,c&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🏝️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave Treasure Hunt?"}),n.jsx("p",{className:"text-white/70",children:"Your island progress is saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>u(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:_,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}const Ug=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Lm=Ug.slice(0,6),ao=360/Lm.length;function qg({onModeSelect:e,onNavigateHome:t}){return n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("header",{className:"flex items-center mb-8",children:n.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),n.jsxs("div",{className:"space-y-8",children:[n.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[Lm.map((r,s)=>{const a=s*ao,i=a+ao,o=ao>180?1:0,l=Math.PI*a/180,c=Math.PI*i/180,u=50+40*Math.cos(l),f=50-40*Math.sin(l),p=50+40*Math.cos(c),m=50-40*Math.sin(c);return n.jsx("path",{d:`M50,50 L${u},${f} A40,40 0 ${o} 0 ${p},${m} Z`,fill:r.color,stroke:"white",strokeWidth:"0.5"},s)}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),n.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),n.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),n.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),n.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),n.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),n.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsx("div",{className:"text-2xl mb-2",children:"💀"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),n.jsxs("button",{onClick:()=>e("treasureHunt"),className:"aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 opacity-20",children:[n.jsx("div",{className:"absolute top-2 right-2 text-4xl animate-pulse",children:"🏝️"}),n.jsx("div",{className:"absolute bottom-2 left-2 text-3xl animate-bounce",style:{animationDelay:"0.5s"},children:"⛏️"}),n.jsx("div",{className:"absolute top-1/2 right-4 text-2xl animate-pulse",style:{animationDelay:"1s"},children:"💎"})]}),n.jsx("div",{className:"text-2xl mb-2 relative z-10",children:"🏴‍☠️"}),n.jsx("h4",{className:"text-lg font-black text-white relative z-10",children:"TREASURE HUNT"}),n.jsx("div",{className:"absolute bottom-2 right-2",children:n.jsx("span",{className:"text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold",children:"NEW!"})})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📱"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function Qg(){const[e,t]=d.useState(null),r=Ae(),s=rt();d.useEffect(()=>{const l=new URLSearchParams(s.search);l.get("mode")==="survival"&&l.get("from")==="quest"&&t("survival")},[s]);const a=l=>{l==="classic"?t("classic"):l==="survival"?t("survival"):l==="treasureHunt"&&t("treasureHunt")},i=()=>{r("/")},o=()=>{t(null)};if(e==="classic")return n.jsx(Cg,{onBack:o});if(e==="survival"){const c=new URLSearchParams(s.search).get("from")==="quest";return n.jsx(Rg,{onBack:o,isFromQuest:c})}return e==="treasureHunt"?n.jsx(Bg,{onBack:o}):n.jsx(qg,{onModeSelect:a,onNavigateHome:i})}const Yg=({session:e,mode:t,category:r,difficulty:s,timerConfig:a,onComplete:i,onQuit:o})=>{const l=Ae(),[c,u]=d.useState(0),[f,p]=d.useState([]),[m,b]=d.useState([]),[y,j]=d.useState([]),[C,v]=d.useState(!1),[h,x]=d.useState(null),[N,E]=d.useState(Date.now()),[T,S]=d.useState(0),[g,w]=d.useState([]),[k,P]=d.useState(!1),[A,U]=d.useState(!1),[G,q]=d.useState({}),[Y,H]=d.useState({}),[_,R]=d.useState([]);d.useState(!0);const[$,z]=d.useState([]),[D,O]=d.useState(0),[Z,re]=d.useState(0),[L,V]=d.useState(!1),[M,I]=d.useState(!1),[F,K]=d.useState(""),[ee,oe]=d.useState(!1),[ne,B]=d.useState(!1),[Q,le]=d.useState(!0),[W,te]=d.useState(!1),[ce,ve]=d.useState(0),[pe,xe]=d.useState(0),[fe,Se]=d.useState(null),[de,we]=d.useState(0),Ie=d.useRef(null),dt=d.useRef(null),Le=t==="practice",Me=f[c],Xe=he=>{try{const ue=new Audio(he);ue.volume=.6,ue.play()}catch{console.log("Sound not available:",he)}},zt=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],X=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:zt,ae=X[c]||X[0]||zt[0],ge=X.length;d.useEffect(()=>{X.length>0&&(p(new Array(X.length).fill(null)),b(new Array(X.length).fill(!1)),R(new Array(X.length).fill(!1)),j(new Array(X.length).fill((a==null?void 0:a.seconds)||45)))},[X.length,a==null?void 0:a.seconds]);const Ee=()=>{if(k){K("Once per quiz"),setTimeout(()=>K(""),1e3);return}if(Me!==null){K("Already answered"),setTimeout(()=>K(""),1e3);return}if(!ae)return;const ue=[0,1,2,3].filter(ye=>ye!==ae.answerIndex).sort(()=>Math.random()-.5).slice(0,2);q({...G,[c]:ue}),P(!0)},Ke=()=>{if(A){K("Once per quiz"),setTimeout(()=>K(""),1e3);return}if(Me!==null){K("Already answered"),setTimeout(()=>K(""),1e3);return}if(!ae)return;const he=ae.answerIndex,ue=[0,0,0,0],ye=40+Math.floor(Math.random()*31);ue[he]=ye;let et=100-ye;const Re=[0,1,2,3].filter(Te=>Te!==he);for(let Te=0;Te<Re.length-1;Te++){const ut=Math.min(et-(Re.length-1-Te),et/2),cn=Math.floor(Math.random()*(ut+1));ue[Re[Te]]=cn,et-=cn}ue[Re[Re.length-1]]=et,H({...Y,[c]:ue}),U(!0)},je=()=>{const he=new Date;return`${he.getFullYear()}-${he.getMonth()+1}-${he.getDate()}`},gt=()=>{Le&&window.location.search.includes("from=quest")?l("/profile/quests",{state:{questCompleted:!0,questType:"practiceQuestions"}}):o()},De=d.useCallback((he,ue)=>{if(!ae||Le&&_[c]||G[c]&&G[c].includes(he))return;const ye=[...f];if(ye[c]=f[c]===he?null:he,p(ye),E(Date.now()),Le&&!g.includes(c)&&ye[c]!==null){const Re=g.length+1;if(S(Re),w(Te=>[...Te,c]),window.location.search.includes("from=quest")){let Te={};try{const cn=localStorage.getItem("questProgress");cn&&(Te=JSON.parse(cn))}catch(cn){console.error("Error reading progress:",cn)}const ut=Te.practiceQuestions||0;Te.practiceQuestions=Math.max(ut,Re),Te.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(Te)),console.log("Saved practice progress:",Te.practiceQuestions),window.dispatchEvent(new CustomEvent("questProgressUpdate",{detail:{practiceQuestions:Te.practiceQuestions}}))}}ye[c]!==null&&(le(!1),clearInterval(dt.current));const et=ye[c]===ae.answerIndex;if(et){const Re=pe+1;xe(Re),O(Te=>Te+1),re(0),Le&&(ve(Te=>Te+1),Xe("/sounds/correct.mp3"),setTimeout(()=>Xe("/sounds/coin.mp3"),500),B(!0),setTimeout(()=>B(!1),2e3),Se({type:"correct",stars:1,coins:10}),setTimeout(()=>Se(null),2e3))}else ye[c]!==null&&(xe(0),O(0),re(Re=>Re+1),Le&&(c===0&&$.length,Xe("/sounds/wrong.mp3")));if(z(Re=>[...Re.slice(-2),et]),ye[c]!==null&&m[c]){const Re=[...m];Re[c]=!1,b(Re)}Le&&ye[c]!==null&&(oe(!0),R(Re=>{const Te=[...Re];return Te[c]=!0,Te}),setTimeout(()=>{const Re=document.querySelector(".main-scrollable-container");if(Re){const Te=Re.scrollHeight,ut=Re.clientHeight;Te>ut&&Re.scrollTo({top:Te-ut,behavior:"smooth"})}},300)),!Le&&ye[c]!==null&&(clearTimeout(Ie.current),Ie.current=setTimeout(()=>{c<ge-1?me():(V(!0),v(!0))},5e3))},[ae,Le,_,c,f,m,ge,pe,G,$,D,T,g]),se=()=>{E(Date.now()),c>0&&(clearInterval(dt.current),le(!1),u(he=>he-1),oe(!1),Le&&f[c-1]!==null&&setTimeout(()=>oe(!0),100))},me=()=>{if(E(Date.now()),clearInterval(dt.current),Me===null){const he=[...m];he[c]=!0,b(he),xe(0)}le(!1),oe(!1),c<ge-1?(u(he=>he+1),Le&&f[c+1]!==null?setTimeout(()=>oe(!0),100):setTimeout(()=>le(!0),100)):V(!0)},Fe=()=>{E(Date.now());const he=[...m];he[c]=!0,b(he),xe(0),me()},Pe=()=>{const he=X.reduce((ue,ye,et)=>ue+(f[et]===ye.answerIndex?1:0),0);if(Le&&window.location.search.includes("from=quest")){const ue=f.filter(et=>et!==null).length,ye=JSON.parse(localStorage.getItem("questProgress")||"{}");ye.practiceQuestions=Math.min(ue,15),ye.date=je(),localStorage.setItem("questProgress",JSON.stringify(ye)),console.log("Final practice progress saved:",ye.practiceQuestions)}if(Le)i&&i({questions:X,answers:f,skipped:m,correct:he,total:ge,mode:t,category:r,difficulty:s,earnedStars:ce,finalStreak:pe});else{const ue=he*10;we(ue),te(!0),setTimeout(()=>{Xe("/sounds/coin.mp3"),B(!0),setTimeout(()=>B(!1),3e3)},1e3)}},ke=()=>{i&&i({questions:X,answers:f,skipped:m,correct:X.reduce((he,ue,ye)=>he+(f[ye]===ue.answerIndex?1:0),0),total:ge,mode:t,category:r,difficulty:s,earnedStars:0,earnedCoins:de,finalStreak:pe})};d.useEffect(()=>{if(!(C||h!==null||L||!Q||f[c]!==null))return dt.current=setInterval(()=>{j(he=>{const ue=[...he],ye=ue[c];return ye<=1?(clearInterval(dt.current),c===ge-1?(Date.now()-N>=5e3&&V(!0),ue):(x(c),ue)):(ue[c]=ye-1,ue)})},1e3),()=>clearInterval(dt.current)},[C,h,c,L,ge,Q,f,N]),d.useEffect(()=>{f[c]===null&&!L&&!h?le(!0):le(!1)},[c,f,L,h]);const it=he=>{const ue=Math.floor(he/60),ye=he%60;return`${ue}:${ye.toString().padStart(2,"0")}`},vt=(c+1)/X.length*100,en=f.filter(he=>he!==null).length,ln=m.filter(Boolean).length,kn=y[c]||0,pr=X.reduce((he,ue,ye)=>he+(f[ye]===ue.answerIndex?1:0),0);return n.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[fe&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",fe.coins," Coins!"]})}),ne&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((he,ue)=>n.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${ue*150}ms`,animationDuration:"2s"},children:"🪙"},ue))}),n.jsxs("div",{className:`main-scrollable-container flex-1 flex flex-col ${Le&&Me!==null?"overflow-y-auto":"overflow-hidden"}`,children:[n.jsxs("div",{className:"bg-gray-900 flex-shrink-0",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-800 shadow-lg",children:[n.jsxs("button",{onClick:()=>I(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"font-medium",children:"Back"})]}),n.jsx("div",{className:"flex-1"}),n.jsxs("div",{className:"flex items-center gap-2",children:[Le&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),n.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:"--"})]}),n.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),n.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:pe})]})]}),n.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${kn<=10?"bg-red-600/20 text-red-400 animate-pulse":kn<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:it(kn)})]})]}),n.jsxs("div",{className:"px-4 pb-1 bg-gray-900",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",c+1," of ",ge]}),n.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(vt),"% Complete"]})]}),n.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${vt}%`}})}),n.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:ge}).map((he,ue)=>n.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${ue===c?"bg-white scale-125":f[ue]!==null?"bg-green-500":m[ue]?"bg-yellow-500":"bg-gray-600"}`},ue))}),n.jsx("div",{className:"text-center mt-4",children:n.jsx("span",{className:"text-xs text-gray-500",children:ae.category})})]})]}),n.jsx("div",{className:`px-4 flex flex-col ${Le&&Me!==null?"pb-36":"flex-1 justify-between pb-[180px]"}`,children:n.jsxs("div",{className:"flex-1 flex flex-col justify-center max-h-full",children:[n.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-6 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[n.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),n.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",c+1]}),n.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:ae.prompt}),ae.difficulty&&n.jsx("div",{className:"mt-3 inline-block",children:n.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${ae.difficulty==="easy"?"bg-green-500/20 text-green-300":ae.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:ae.difficulty.toUpperCase()})})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:ae.options.map((he,ue)=>{const ye=Me===ue,et=ue===ae.answerIndex,Re=Le&&Me!==null&&ee,Te=G[c]&&G[c].includes(ue);let ut="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";Te?ut+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(ut+="cursor-pointer ",Re?ye&&et?ut+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":ye&&!et?ut+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!ye&&et?ut+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":ut+="bg-gray-700 border-gray-600 text-gray-400":ye?ut+="bg-gray-600 border-gray-500 text-white":ut+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const cn=["🅰️","🅱️","🅲️","🅳️"];return n.jsx("button",{onClick:$m=>De(ue,$m),disabled:Le&&_[c],className:ut,children:n.jsxs("div",{className:"flex items-center gap-2 w-full",children:[n.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:cn[ue]}),n.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:he}),Y[c]&&Y[c][ue]>0&&!Te&&n.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[Y[c][ue],"%"]}),Re&&ye&&et&&!Te&&n.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),Re&&ye&&!et&&!Te&&n.jsx("div",{className:"text-lg",children:"😔"}),Re&&!ye&&et&&!Te&&n.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},ue)})}),Le&&ee&&Me!==null&&n.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:n.jsxs("div",{className:"flex gap-3",children:[n.jsx("div",{className:"text-lg flex-shrink-0",children:Me===ae.answerIndex?"🎊":"💡"}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h4",{className:`font-semibold mb-3 text-sm ${Me===ae.answerIndex?"text-green-400":"text-blue-400"}`,children:Me===ae.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),ae.explanation&&n.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:ae.explanation})]})]})})]})})]}),n.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-50",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 backdrop-blur-xl"}),n.jsxs("div",{className:"relative p-4 pb-8",children:[!Le&&n.jsxs("div",{className:"flex justify-center gap-3 mb-4",children:[n.jsxs("button",{onClick:Ee,disabled:Me!==null,className:`${k?"bg-white/5 text-gray-500":"bg-gradient-to-r from-orange-500 to-orange-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"⚡"}),"50:50"]}),n.jsxs("button",{onClick:Ke,disabled:Me!==null,className:`${A?"bg-white/5 text-gray-500":"bg-gradient-to-r from-purple-500 to-purple-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"👥"}),"Ask Friends"]})]}),n.jsxs("div",{className:"flex gap-2 mb-3",children:[n.jsx("button",{onClick:se,disabled:c===0,className:`flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                disabled:opacity-30 disabled:cursor-not-allowed
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                hover:bg-white/15 text-white shadow-xl`,children:"Previous"}),n.jsx("button",{onClick:Fe,disabled:Me!==null,className:`flex-1 py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95 shadow-xl ${Me!==null?"bg-white/5 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600"}`,children:"Skip"}),n.jsx("button",{onClick:me,className:`flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:from-blue-600 hover:to-indigo-600
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                text-white shadow-xl`,children:c===ge-1?"Finish":"Next"})]}),n.jsxs("button",{onClick:()=>V(!0),className:`w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-600
              py-4 rounded-2xl font-bold text-white transition-all transform active:scale-[0.98]
              shadow-2xl shadow-green-500/25 relative overflow-hidden group`,children:[n.jsx("div",{className:"absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"}),n.jsx("span",{className:"relative",children:"Submit Quiz"})]})]})]}),W&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quiz Complete!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Here's how you performed"}),n.jsxs("div",{className:"bg-gray-700/50 rounded-2xl p-4 mb-6 space-y-3",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Questions Attempted:"}),n.jsxs("span",{className:"text-white font-semibold",children:[en," / ",ge]})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Correct Answers:"}),n.jsx("span",{className:"text-green-400 font-semibold",children:pr})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Accuracy:"}),n.jsxs("span",{className:"text-blue-400 font-semibold",children:[en>0?Math.round(pr/en*100):0,"%"]})]}),n.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-yellow-300 flex items-center gap-1",children:"🪙 Coins Earned:"}),n.jsx("span",{className:"text-yellow-400 font-bold text-lg",children:de})]})})]}),n.jsx("button",{onClick:ke,className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors",children:"Continue"})]})}),M&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>I(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),n.jsx("button",{onClick:gt,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),L&&!W&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),n.jsxs("p",{className:"text-gray-400 mb-4",children:[en," of ",ge," answered • ",ln," skipped"]}),Le&&n.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:n.jsxs("div",{className:"flex justify-center gap-6",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:ce}),n.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:"--"}),n.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{V(!1),x(null),E(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),n.jsx("button",{onClick:he=>{he.preventDefault(),he.stopPropagation(),console.log("Submit button clicked"),Pe()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),h===c&&!L&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),n.jsx("button",{onClick:()=>{x(null),E(Date.now()),c<X.length-1?me():V(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:c<X.length-1?"Continue":"See Results"})]})}),F&&n.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:F}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},is=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Wg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),Hg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Gg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Kg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Vg=()=>n.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Xg=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[],returnPath:null,fromQuest:!1},onRetake:t=()=>{},onReview:r=()=>{},onNavigate:s=(c,u)=>{},isRetake:a=!1,isPractice:i=!1,player:o={level:1,coins:0,combo:0,energy:5},categories:l=[]})=>{const[c,u]=d.useState(o.coins),f=d.useRef(null),[p,m]=d.useState(null),[b]=$t("/sounds/coin.mp3",{volume:.75}),[y,j]=d.useState(!1),[C,v]=d.useState(!1),[h,x]=d.useState(0),[N,E]=d.useState(!1),[T,S]=d.useState(!1),g=()=>{if(console.log("QuizResults handleBack:",{fromQuest:e.fromQuest,returnPath:e.returnPath,isPractice:e.isPractice||i}),e.fromQuest){const I=e.isPractice||i?"practiceQuestions":"dailyQuizzes";e.isPractice||i?s("/profile/quests"):s("/profile/quests",{state:{questCompleted:!0,questType:I,increment:1}})}else{const I=e.returnPath||"/";s(I)}},{correct:w,total:k,category:P,categorySlug:A,difficulty:U,mode:G,elapsedMs:q}=e,Y=k?Math.round(w/k*100):0,H=Y===100,_=Y>=80,R=Math.floor(q/1e3),$=k>0?Math.floor(R/k):0,z=i?e.earnedCoins||0:Math.round(w*5*(H?1.5:_?1.2:1)),D=is.find(I=>I.slug===P)||is[0],Z=(()=>H?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:Y>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:Y>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:Y>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:Y>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{!p&&!y&&u(o.coins)},[o.coins,p,y]),d.useEffect(()=>{e.coinsProcessed||z>0&&f.current&&setTimeout(()=>{if(f.current.getBoundingClientRect(),b)try{b()}catch(I){console.error("Error playing coin sound:",I)}else console.warn("Coin sound not loaded");m({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(z,10),amount:z}),j(!0),e.coinsProcessed=!0},500)},[]),d.useEffect(()=>{document.documentElement.scrollIntoView({behavior:"smooth",block:"start"}),(H||_)&&(v(!0),setTimeout(()=>v(!1),3e3));let I=0;const F=w/20,K=setInterval(()=>{I+=F,I>=w?(x(w),clearInterval(K)):x(Math.floor(I))},50);return()=>clearInterval(K)},[w,H,_]);const re=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:w,total:k}],L=()=>{try{const I=localStorage.getItem("qp_recent");if(I)return JSON.parse(I).slice(0,10).map(K=>K.slug||K.cat).filter(K=>K&&K!==e.categorySlug)}catch(I){console.error("Error reading recent categories:",I)}return[]},V=()=>{const I=A||P,F=U||"medium",K=L(),ee=(l||is||[]).filter(B=>B.slug!==I&&!K.slice(0,3).includes(B.slug)),ne=(()=>{if(ee.length===0){const B=(l||is||[]).filter(Q=>Q.slug!==I);return B[Math.floor(Math.random()*B.length)]||(l||is)[0]}return ee[Math.floor(Math.random()*ee.length)]})();if(Y<60)return i?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${I}`,{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}})},{icon:ne.icon,title:ne.name,desc:"Fresh start with new topic",color:ne.gradient,action:()=>s(`/quiz/${ne.slug}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>r()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${I}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:F!=="easy"?"🎯":"🔄",title:F!=="easy"?"Easy Mode":"Try Again",desc:F!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>F!=="easy"?s(`/quiz/${I}`,{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}):t()},{icon:ne.icon,title:ne.name,desc:"Try something different",color:ne.gradient,action:()=>s(`/quiz/${ne.slug}`,{mode:"quiz",difficulty:"easy",count:10,timer:{type:"per_q",seconds:45}})}];if(Y>=80)return F==="hard"&&Y>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${I}`,{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}})},{icon:ne.icon,title:`${ne.name} Challenge`,desc:"Hard mode, new topic",color:ne.gradient,action:()=>s(`/quiz/${ne.slug}`,{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}})}]:[{icon:F==="hard"?"🔥":"🎯",title:F==="hard"?"Perfect Score Challenge":"Hard Mode",desc:F==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${I}`,{mode:"quiz",difficulty:"hard",count:F==="hard"?10:20,timer:{type:"per_q",seconds:30}})},{icon:ne.icon,title:ne.name,desc:"Master new topics",color:ne.gradient,action:()=>s(`/quiz/${ne.slug}`,{mode:"quiz",difficulty:F,count:10,timer:{type:"per_q",seconds:45}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${I}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}})}];{const B=Y<70;return[{icon:B?"📚":"🎯",title:B?"Practice More":"Try Again",desc:B?"Improve accuracy":"Beat your score",color:B?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:B?()=>s(`/quiz/${I}`,{mode:"practice",difficulty:F,count:10,timer:{type:"off",seconds:0}}):()=>t()},{icon:ne.icon,title:ne.name,desc:"Explore new topics",color:ne.gradient,action:()=>s(`/quiz/${ne.slug}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:45}})},{icon:F==="easy"?"⬆️":"💪",title:F==="easy"?"Medium Difficulty":"More Questions",desc:F==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${I}`,{mode:"quiz",difficulty:F==="easy"?"medium":F,count:F==="easy"?10:20,timer:{type:"per_q",seconds:45}})}]}},M=yt.useMemo(()=>V(),[Y,i,e.categorySlug,e.difficulty]);return n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4",children:[p&&n.jsx(Pi,{startRect:p.startRect,targetRef:f,count:p.count,onDone:()=>{p.amount>0&&!T&&(console.log("[QuizResults] Coins already added by GameDataService"),S(!0),u(be.getCoins())),m(null)}}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),C&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:n.jsx("div",{className:"text-8xl animate-bounce",children:H?"🎉":"⭐"})}),n.jsxs("div",{className:"flex justify-between items-center mb-6",children:[n.jsxs("button",{onClick:g,className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center gap-2",children:[n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"text-sm font-medium",children:"Back"})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",o.level]}),n.jsxs("button",{ref:f,onClick:()=>E(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[c," 🪙"]})]})]}),n.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${Z.color}`,children:[n.jsx("span",{className:"text-2xl",children:Z.emoji}),n.jsx("span",{className:"font-semibold",children:Z.text})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[h,"/",k]}),n.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[n.jsx("span",{className:"text-xl",children:D.icon}),n.jsx("span",{children:D.name})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[Y,"%"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[$,"s"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:z>0?`+${z}`:"0"}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),n.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Kg,{}),n.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),o.combo>0&&n.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[n.jsx(Vg,{}),o.combo," streak"]})]}),n.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:re.map((I,F)=>n.jsx("div",{className:`flex-1 rounded-t transition-all ${F===re.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${I.score/I.total*100}%`,minHeight:"4px"}},F))}),n.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("button",{onClick:r,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[n.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Review"}),n.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),n.jsx(Gg,{})]})]}),n.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Try Again"}),n.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),n.jsx(Hg,{})]})})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),M.map((I,F)=>n.jsx("button",{onClick:I.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${I.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:n.jsx("span",{className:"text-xl",children:I.icon})}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium text-sm",children:I.title}),n.jsx("div",{className:"text-xs text-white/40",children:I.desc})]})]}),n.jsx(Wg,{})]})},F))]}),n.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:n.jsx("button",{onClick:()=>s("/profile/history",{replace:!0}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),N&&n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:I=>{I.target===I.currentTarget&&E(!1)},children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:I=>I.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[o.coins," Coins"]})]})]}),n.jsx("button",{onClick:()=>E(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-o.coins%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${o.coins%100}%`}})})]}),n.jsx("button",{onClick:()=>{E(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})},Jg=({questions:e,answers:t,skipped:r,onBack:s,onRetake:a,fromHistory:i=!1})=>{const o=Ae(),l=()=>{i?o("/profile/history",{replace:!0}):s?s():o(-1)},c=e.reduce((p,m,b)=>p+(t[b]===m.answerIndex?1:0),0),u=(r==null?void 0:r.filter(Boolean).length)||0,f=e.length-c-u;return n.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),n.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),n.jsx("div",{className:"w-16"})," "]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[n.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),n.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),n.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),n.jsx("div",{className:"text-lg font-bold text-red-400",children:f})]}),n.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),n.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),n.jsx("ol",{className:"space-y-4",children:e.map((p,m)=>{const b=t[m],y=!b&&b!==0,j=b===p.answerIndex;return n.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",m+1,". ",p.prompt]}),p.category&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",p.category," • Difficulty: ",p.difficulty||"Medium"]})]}),n.jsx("div",{className:"ml-2",children:y?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:p.options.map((C,v)=>{const h=b===v,x=v===p.answerIndex;let N="w-full text-left px-3 py-2 rounded-xl border transition-all ";return x?N+="bg-green-600/20 border-green-500/50 text-green-300":h&&!x?N+="bg-red-600/20 border-red-500/50 text-red-300":N+="bg-base-bg/40 border-base-border text-base-muted",n.jsxs("div",{className:N,children:[n.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][v],"."]}),C,x&&n.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),h&&!x&&n.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},v)})}),p.explanation&&n.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[n.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),n.jsx("div",{className:"text-sm text-base-muted",children:p.explanation})]})]},p.id||m)})}),n.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[n.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),a&&n.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:a,children:"Retake Quiz"})]})]})},Zg="qp_resume",Fd="qp_mistakes",$d="qp_stats",Bd="qp_lastset",Ud="qp_recent",qd="qp_review_snapshot",ev=50,os=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Ma=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),tv=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),Dm=e=>{const t=e.slice();for(let r=t.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[t[r],t[s]]=[t[s],t[r]]}return t},nv=(e,t,r)=>Math.max(t,Math.min(r,e)),ls=(e,t)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}};async function rv(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const r=await t.text(),{data:s}=hr.parse(r,{header:!0,skipEmptyLines:!0,transformHeader:i=>String(i).trim().toLowerCase()}),a={a:0,b:1,c:2,d:3};return s.map((i,o)=>{var m;const l=[i.option1,i.option2,i.option3,i.option4].map(b=>(b??"").trim());if(l.some(b=>!b))return null;let c=-1;const u=String(i.answer??"").trim();if(a[u.toLowerCase()]!==void 0)c=a[u.toLowerCase()];else{const b=l.findIndex(y=>y.toLowerCase()===u.toLowerCase());c=b>=0?b:0}const f=String(i.category??i.subject??"General Knowledge").trim(),p=String(i.difficulty??"medium").toLowerCase().trim();return{id:((m=i.id)==null?void 0:m.trim())||`q_${o}`,category:f,difficulty:p,prompt:String(i.question??"").trim(),options:l,answerIndex:c,explanation:String(i.explanation??"").trim()}}).filter(Boolean)}function sv(e,{categorySlug:t,difficulty:r,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",r),console.log("count:",s),console.log("Total questions available:",e.length);const i=t==="mixed"?()=>!0:f=>Ma(f.category)===t,o=r?f=>(f.difficulty||"medium")===r:()=>!0,l=e.filter(f=>i(f)&&o(f));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(f=>`"${f.category}" -> "${Ma(f.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(f=>Ma(f.category)))]),{questions:[],poolSize:0};const u=tv(l,Math.min(s,l.length)).map(f=>{const p=Dm([0,1,2,3]),m=p.map(y=>f.options[y]),b=p.indexOf(f.answerIndex);return{...f,options:m,answerIndex:b}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function av(){const e=Ae(),{category:t}=Hp(),r=rt(),{energy:s,useEnergy:a,player:i,updateDailyStreak:o}=Nn(),l=new URLSearchParams(r.search),c=l.get("review")==="1",u=l.get("retake")==="1",f=r.state||{},p=f.mode||"quiz",m=String(f.difficulty||"medium").toLowerCase(),b=f.returnPath||null,y=f.fromQuest||!1,j=nv(Number(f.count||10),1,50),C=f.timer||{type:"per_q",seconds:45};f.resume,f.daily,f.source;const v=u||!!f.retake,h=!!f.fromHistory,x=p==="practice";console.log("Quiz Component - Mode Detection:",{routerState:f,mode:p,isPractice:x,location:r.pathname,state:r.state});const[N,E]=d.useState([]),[T,S]=d.useState(!0),[g,w]=d.useState(""),[k,P]=d.useState({questions:[]}),[A,U]=d.useState("quiz"),[G,q]=d.useState(null),[Y,H]=d.useState(null),[_,R]=d.useState(0);d.useEffect(()=>{let L=!0;return(async()=>{try{const V=await rv();if(!L)return;E(V)}catch(V){console.error(V),w("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{S(!1)}})(),()=>{L=!1}},[]),d.useEffect(()=>{if(T||g||c||N.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",p),console.log("Difficulty:",m),console.log("Count:",j);const L=sv(N,{categorySlug:t,difficulty:m,count:j});if(L.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(N.map(V=>Ma(V.category)))].slice(0,10)),w(`No questions found for "${os(t)}" with difficulty "${m}"`);return}console.log("Session built with",L.questions.length,"questions"),P(L),H(Date.now()),R(0),U("quiz")},[N,t,p,m,j,r.state,r.search]),d.useEffect(()=>{if(A!=="quiz"||!Y)return;const L=setInterval(()=>{R(Date.now()-Y)},1e3);return()=>clearInterval(L)},[A,Y]);const $=d.useCallback(L=>{if(console.log("Quiz completed - Mode:",p,"isPractice:",x,"Results:",L),console.log("handleQuizComplete called at:",new Date().toISOString()),window._quizCompleting){console.warn("Quiz completion already in progress, ignoring duplicate call");return}if(window._quizCompleting=!0,setTimeout(()=>{window._quizCompleting=!1},1e3),!L||!L.questions){console.error("Invalid results object:",L);return}const V=L.questions.filter((F,K)=>L.answers[K]!==null&&L.answers[K]!==F.answerIndex).map(F=>F.id);try{const F=ls(Fd,[]),K=Array.from(new Set([...V,...F]));localStorage.setItem(Fd,JSON.stringify(K))}catch(F){console.error("Error saving mistakes:",F)}try{const F=ls($d,{sessions:[]});F.sessions.push({cat:os(t),mode:x?"practice":"quiz",total:L.total,correct:L.correct,skipped:L.skipped.filter(Boolean).length,ms:_,timestamp:Date.now(),earnedXP:x?0:L.correct*10,earnedCoins:x?0:L.correct*5}),localStorage.setItem($d,JSON.stringify(F))}catch(F){console.error("Error saving stats:",F)}const M={ts:Date.now(),slug:t,categoryLabel:os(t),mode:x?"practice":"quiz",difficulty:m,total:L.total,timer:x?null:C,ms:_,attempted:L.answers.filter(F=>F!==null).length,correct:L.correct,questions:L.questions,answers:L.answers,skipped:L.skipped,isPractice:x};try{localStorage.setItem(Bd,JSON.stringify(M)),localStorage.setItem(qd,JSON.stringify({questions:L.questions,answers:L.answers,skipped:L.skipped}));const F=ls(Ud,[]),ee=[{id:M.ts,ts:M.ts,cat:M.categoryLabel,slug:t,mode:x?"Practice":"Quiz",total:L.total,correct:L.correct,ms:_,snapshot:M},...F].slice(0,ev);localStorage.setItem(Ud,JSON.stringify(ee))}catch(F){console.error("Error saving snapshot:",F)}localStorage.removeItem(Zg);const I=Je.getCurrentUser();if(I!=null&&I.phone)if(x){const F=be.recordPracticeSession(I.phone,{questionsCompleted:L.total,correctAnswers:L.correct,category:t});L.earnedCoins=F.coinsEarned}else{const F=be.recordQuizSession(I.phone,{score:L.correct,totalQuestions:L.total,category:t,difficulty:m,mode:"quiz"});L.earnedCoins=F.coinsEarned}else L.earnedCoins=0;o(),console.log("Setting review snapshot with:",{returnPath:b||"/",fromQuest:y||!1}),q({...L,category:os(t),categorySlug:t,difficulty:m,mode:x?"practice":"quiz",elapsedMs:_,isPractice:x,hasTimer:!x,earnedXP:x?0:L.correct*10,earnedCoins:x?L.earnedCoins||0:L.correct*5,returnPath:b||"/",fromQuest:y||!1}),U("results")},[t,p,C,_,x,b,y]),z=()=>{const L=new Date;return`${L.getFullYear()}-${L.getMonth()+1}-${L.getDate()}`};d.useCallback(L=>{if(x&&y){const V=JSON.parse(localStorage.getItem("questProgress")||"{}"),M=V.practiceQuestions||0,I=Math.min(M+L,15);V.practiceQuestions=I,V.date=z(),localStorage.setItem("questProgress",JSON.stringify(V)),console.log("Practice progress updated:",I)}},[x,y]);const D=d.useCallback(()=>{b?e(b,{replace:!0}):h?e("/profile/history",{replace:!0,state:null}):e("/")},[h,e,b]),O=d.useCallback(()=>{console.log("Retake requested - Mode:",p,"isPractice:",x);const L=ls(Bd,null);if(!L||L.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:x?"practice":"quiz",difficulty:m,count:j,timer:x?null:C,retake:!0}});return}const V=L.questions.map(M=>{const I=Dm([0,1,2,3]);return{...M,options:I.map(F=>M.options[F]),answerIndex:I.indexOf(M.answerIndex)}});P({questions:V,poolSize:V.length}),H(Date.now()),R(0),U("quiz"),window.scrollTo(0,0)},[t,p,m,j,C,e,x]),Z=d.useCallback((L=null)=>{if(L)q(L);else if(!G){const V=ls(qd,null);V&&q({questions:V.questions||[],answers:V.answers||[],skipped:V.skipped||[]})}U("review")},[G]),re=d.useCallback(()=>{h?e("/profile/history",{replace:!0}):U("results")},[h,e]);return T?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):g?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-red-400",children:g})}):(console.log("Render - Current view:",A,"Session questions:",k.questions.length,"Mode:",p,"isPractice:",x),n.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:n.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[A==="quiz"&&k.questions.length>0&&n.jsx(Yg,{session:k,mode:x?"practice":"quiz",category:os(t),difficulty:m,timerConfig:x?null:C,onComplete:$,onQuit:D,isPractice:x}),A==="results"&&G&&n.jsx(Xg,{results:G,onRetake:O,onReview:()=>Z(G),isRetake:v,isPractice:x,player:i,categories:_m,onNavigate:(L,V)=>{console.log("onNavigate called with:",L,V),V!=null&&V.state?e(L,{state:V.state,replace:V.replace||!1}):e(L)}}),A==="review"&&G&&n.jsx(Jg,{questions:G.questions||[],answers:G.answers||[],skipped:G.skipped||[],onBack:re,onRetake:O,fromHistory:h,isPractice:x})]})}))}const Tn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Vn=360/Tn.length,iv=42,io=3e3,Qd=10,Yd=260,ov="cubic-bezier(.15,.7,.1,1)",lv="cubic-bezier(.2,.7,.2,1)",En=5,cv=5,dv=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function uv({muted:e=!1,size:t=18}){return n.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&n.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function fv({q:e,locked:t,onPick:r,result:s}){if(!e)return null;const a=[e.option1,e.option2,e.option3,e.option4];return n.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[n.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),n.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),a.map((i,o)=>{const l=s&&i===e.answer,c=s&&s.pick===i&&i!==e.answer;return n.jsx("button",{disabled:t||!!s,onClick:()=>r(i),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:i},o)}),s&&n.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?n.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):n.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",n.jsx("b",{children:e.answer})]}),e.explanation&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function mv(){const e=Ae(),[t]=$t("/sounds/correct.mp3",{volume:.7}),[r]=$t("/sounds/wrong.mp3",{volume:.7}),[s,a]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(En).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(En).fill(null)}]),[i,o]=d.useState(0),[l,c]=d.useState(1),u=s.reduce((M,I)=>M+I.scores.reduce((F,K)=>F+(K??0),0),0),[f,p]=d.useState(!0),m=d.useRef(null);d.useEffect(()=>{const M=new Audio("/sounds/spin.mp3");return M.loop=!0,M.volume=.7,m.current=M,()=>{try{M.pause(),M.src=""}catch{}}},[]);const b=()=>{if(f&&m.current)try{m.current.currentTime=0,m.current.play()}catch{}},y=()=>{if(m.current)try{m.current.pause(),m.current.currentTime=0}catch{}},[j,C]=d.useState(0),[v,h]=d.useState("none"),[x,N]=d.useState(!1),[E,T]=d.useState(null),[S,g]=d.useState(null),w=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[k,P]=d.useState([]);d.useEffect(()=>{(async()=>{try{const M=await fetch("/data/quiz_questions_bank.csv").then(ee=>ee.text()),{data:I}=hr.parse(M,{header:!0,skipEmptyLines:!0,transformHeader:ee=>String(ee).trim().toLowerCase()}),F={a:0,b:1,c:2,d:3},K=I.map((ee,oe)=>{var te;const ne=(ee.question??"").trim();if(!ne)return null;const B=[ee.option1,ee.option2,ee.option3,ee.option4].map(ce=>String(ce??"").trim());if(B.some(ce=>!ce))return null;let Q=String(ee.answer??"").trim(),le=F[Q.toLowerCase()];if(le===void 0){const ce=B.findIndex(ve=>ve.toLowerCase()===Q.toLowerCase());le=ce>=0?ce:0}const W=B[le];return{id:((te=ee.id)==null?void 0:te.trim())||`ps_${oe}`,question:ne,option1:B[0],option2:B[1],option3:B[2],option4:B[3],answer:W,explanation:String(ee.explanation??"").trim(),catSlug:dv(ee.category??ee.subject??"general knowledge"),difficulty:String(ee.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);P(K)}catch{P([])}})()},[]);const[A,U]=d.useState(null),[G,q]=d.useState(null),[Y,H]=d.useState(!1),_=M=>(M%360+360)%360,R=M=>_(M),$=l>En;function z(){if(s.length>=4)return;const M=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],I=M[(s.length*2+1)%M.length];a(F=>[...F,{name:`Player ${F.length+1}`,color:I,scores:Array(En).fill(null)}])}function D(){s.length<=2||(a(M=>M.slice(0,-1)),o(M=>Math.min(M,s.length-2)))}function O(M){a(I=>I.map((F,K)=>K===i?{...F,scores:F.scores.map((ee,oe)=>oe===l-1?M:ee)}:F))}function Z(){if(x||$)return;T(null),g(null),U(null),q(null),N(!0),b();const M=Math.floor(Math.random()*Tn.length),I=Tn[M],F=Vn*.28,K=(Math.random()*2-1)*F,ee=_(j),oe=180,B=M*Vn+Vn/2+K;let Q=R(B-ee-oe);const le=iv*360+Q,W=j+le+Qd;h(`transform ${w?800:io}ms ${ov}`),C(W);try{navigator.vibrate&&!w&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{h(`transform ${w?160:Yd}ms ${lv}`),C(te=>te-Qd)},w?800:io),setTimeout(()=>{if(y(),N(!1),T(M),g(I.color),I.soon)return;const te=k.filter(ve=>ve.catSlug===I.slug&&ve.difficulty==="easy"),ce=te.length?te:k.filter(ve=>ve.catSlug===I.slug);if(ce.length){const ve=ce[Math.floor(Math.random()*ce.length)];U(ve)}else U({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(w?800:io)+(w?160:Yd)+40)}function re(M){if(!A||G)return;const I=M===A.answer;if(q({correct:I,pick:M}),I){t(),H(!0),setTimeout(()=>H(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}O(cv)}else{r();try{navigator.vibrate&&navigator.vibrate([4])}catch{}O(0)}}function L(){const M=(i+1)%s.length,I=M===0?l+1:l;o(M),c(I),T(null),g(null),U(null),q(null)}function V(){const M=s.map(K=>K.scores.reduce((ee,oe)=>ee+(oe??0),0)),I=Math.max(...M),F=s.filter((K,ee)=>M[ee]===I).map(K=>K.name).join(", ");alert(`${F} win${F.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[Y&&n.jsx(Im,{numberOfPieces:120,recycle:!1}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),n.jsx("button",{onClick:()=>p(M=>!M),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":f?"Mute sound":"Unmute sound",title:f?"Sound on":"Sound off",children:n.jsx(uv,{muted:!f})})]}),n.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-sm",children:["Round ",n.jsx("b",{children:Math.min(l,En)}),"/",n.jsx("b",{children:En})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:z,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),n.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),n.jsx("button",{onClick:D,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),n.jsxs("div",{className:"text-sm",children:["Pot: ",n.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[n.jsxs("colgroup",{children:[n.jsx("col",{style:{width:"42%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"13%"}})]}),n.jsx("thead",{children:n.jsxs("tr",{className:"text-base-muted",children:[n.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:En}).map((M,I)=>n.jsxs("th",{className:"font-medium text-center",children:["R",I+1]},I)),n.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),n.jsx("tbody",{children:s.map((M,I)=>{const F=M.scores.reduce((ee,oe)=>ee+(oe??0),0),K=I===i;return n.jsxs("tr",{className:K?"bg-white/6":"",children:[n.jsx("td",{className:"py-1 pr-1",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:M.color}}),n.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:M.name,onChange:ee=>a(oe=>oe.map((ne,B)=>B===I?{...ne,name:ee.target.value}:ne))})]})}),M.scores.map((ee,oe)=>n.jsx("td",{className:"text-center",children:ee===null?"–":ee},oe)),n.jsx("td",{className:"text-right pr-1 font-semibold",children:F})]},I)})})]})})]}),n.jsx("section",{className:"flex flex-col items-center",children:n.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[S&&n.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${S}33, 0 0 30px 8px ${S}44`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:v},"aria-label":"Category wheel",role:"group",children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Tn.map((M,I)=>{const F=I*Vn,K=F+Vn,ee=Vn>180?1:0,oe=Math.PI*F/180,ne=Math.PI*K/180,B=50+50*Math.cos(oe),Q=50-50*Math.sin(oe),le=50+50*Math.cos(ne),W=50-50*Math.sin(ne),te=E===I;return n.jsxs("g",{style:{opacity:E==null?.95:te?1:.78,filter:E!=null&&!te?"blur(0.6px)":"none"},children:[n.jsx("path",{d:`M50,50 L${B},${Q} A50,50 0 ${ee} 0 ${le},${W} Z`,fill:M.color,stroke:te?`${M.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:te?"1.2":"0.6"}),n.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${F+Vn/2} 50 50) translate(12 0)`,children:n.jsxs("tspan",{children:[M.label,M.soon?" (soon)":""]})})]},M.slug)}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),n.jsx("button",{onClick:Z,disabled:x||$,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",x||$?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),E!=null&&!x&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:n.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[n.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:Tn[E].color}}),Tn[E].label]})})]})}),n.jsx("section",{className:"mt-4",children:$?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),n.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",n.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),n.jsx("button",{className:"btn-primary w-full",onClick:V,children:"End match"})]}):E!=null&&Tn[E].soon?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-lg font-semibold mb-1",children:Tn[E].label}),n.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),n.jsx("button",{className:"btn-primary",onClick:Z,disabled:x,children:"Re-spin"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",n.jsx("span",{style:{color:s[i].color},children:s[i].name})," ","| Round ",l,"/",En]}),n.jsx(fv,{q:A,locked:x||!A,onPick:re,result:G}),G&&n.jsx("div",{className:"mt-3 flex justify-center",children:n.jsx("button",{className:"btn-primary",onClick:L,children:"Next turn"})})]})})]}),n.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const hv=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return n.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[n.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),n.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(r=>n.jsxs("button",{onClick:()=>e(r.id,r.title),className:`rounded-3xl bg-gradient-to-br ${r.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[n.jsx("span",{className:"text-5xl",children:r.emoji}),n.jsx("span",{className:"text-white font-bold text-lg text-center",children:r.title})]},r.id))})]})},pv=()=>{Ae(),Nn();const[e,t]=d.useState([]),[r,s]=d.useState(0),[a,i]=d.useState({}),[o,l]=d.useState(0),[c,u]=d.useState(5),[f,p]=d.useState(0),[m,b]=d.useState(!0),[y,j]=d.useState(null),[C,v]=d.useState(!0),[h,x]=d.useState(null),[N,E]=d.useState(""),[T,S]=d.useState(!1),[g,w]=d.useState(""),[k,P]=d.useState(!1),[A,U]=d.useState(!1),[G,q]=d.useState(!1),[Y,H]=d.useState(!1),[_,R]=d.useState(!1),[$,z]=d.useState(!1),[D,O]=d.useState(0),[Z,re]=d.useState(0),[L,V]=d.useState(-1),[M,I]=d.useState(-1),[F,K]=d.useState({}),[ee,oe]=d.useState({}),ne=d.useRef(null),B=d.useRef(null),[Q]=$t("/sounds/correct.mp3",{volume:.6}),[le]=$t("/sounds/wrong.mp3",{volume:.6}),[W]=$t("/sounds/coin.mp3",{volume:.75}),te=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],ce=()=>{t([]),s(0),i({}),l(0),u(5),p(0),b(!0),j(null),S(!1),w(""),P(!1),U(!1),q(!1),H(!1),R(!1),z(!1),O(0),re(0),V(-1),I(-1),K({}),oe({}),x(null),E(""),pe(null)};d.useEffect(()=>(ce(),v(!0),()=>{document.body.classList.remove("hide-bottom-nav"),ce(),B.current&&clearTimeout(B.current)}),[]),d.useEffect(()=>{const X=ae=>{!C&&e.length>0&&(ae.preventDefault(),U(!0))};return!C&&e.length>0&&window.history.pushState({inQuiz:!0},"",window.location.pathname),window.addEventListener("popstate",X),()=>window.removeEventListener("popstate",X)},[C,e.length]),d.useEffect(()=>{!C&&e.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[C,e.length]),d.useEffect(()=>{!C&&e.length>0&&H(!0)},[C,e.length]);const[ve,pe]=d.useState(null);d.useEffect(()=>{const X=ae=>{var ge;if(Y&&!G){const Ee=ae.target.closest('button[type="button"]'),Ke=(ge=Ee==null?void 0:Ee.querySelector(".text-\\[10px\\]"))==null?void 0:ge.textContent;Ke&&["Home","Play","Profile","Swipe"].includes(Ke)&&(ae.preventDefault(),ae.stopPropagation(),pe({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[Ke]),U(!0))}};return document.addEventListener("click",X,!0),()=>document.removeEventListener("click",X,!0)},[Y,G]),d.useEffect(()=>{const X=ne.current;if(!X)return;let ae=!1,ge=0,Ee=null;const Ke=se=>{!C&&e.length>0&&se.preventDefault()},je=se=>{ge=se.touches[0].clientY,ae=!1},gt=se=>{!C&&e.length>0&&!A&&!k&&se.preventDefault()},De=se=>{if(ae||A||k)return;const me=se.changedTouches[0].clientY,Fe=ge-me;if(Math.abs(Fe)>30){if(ae=!0,Ee&&clearTimeout(Ee),Fe>0&&r<e.length-1){const Pe=r+1;s(Pe),X.scrollTo({top:Pe*window.innerHeight,behavior:"smooth"})}else if(Fe<0&&r>0){const Pe=r-1;s(Pe),X.scrollTo({top:Pe*window.innerHeight,behavior:"smooth"})}Ee=setTimeout(()=>{ae=!1},800)}};return X.addEventListener("touchstart",je,{passive:!1}),X.addEventListener("touchmove",gt,{passive:!1}),X.addEventListener("touchend",De,{passive:!1}),X.addEventListener("wheel",Ke,{passive:!1}),()=>{X.removeEventListener("touchstart",je),X.removeEventListener("touchmove",gt),X.removeEventListener("touchend",De),X.removeEventListener("wheel",Ke),Ee&&clearTimeout(Ee)}},[r,e.length,C]),d.useEffect(()=>{const X=ne.current;X&&(A||k?(X.style.overflow="hidden",X.style.touchAction="none"):(X.style.overflow="auto",X.style.touchAction="auto"))},[A,k]),d.useEffect(()=>{(A||k)&&B.current&&(clearTimeout(B.current),B.current=null)},[A,k]);const xe=async X=>{try{const ge=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Ee}=hr.parse(ge,{header:!0,skipEmptyLines:!0}),gt=Ee.map((De,se)=>{var Pe,ke;const me=[De.option1,De.option2,De.option3,De.option4].filter(Boolean),Fe={A:0,B:1,C:2,D:3};return{id:De.id||`q_${se}`,prompt:De.question,options:me,answerIndex:Fe[(Pe=De.answer)==null?void 0:Pe.toUpperCase()]||0,category:De.category||"General Knowledge",difficulty:((ke=De.difficulty)==null?void 0:ke.toLowerCase())||"medium",explanation:De.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(De=>De.prompt&&De.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(De=>({...De,mascot:te[Math.floor(Math.random()*te.length)]}));t(gt),b(!1)}catch(ae){console.error("Failed to load questions:",ae),b(!1)}},fe=X=>X===1||X===3||X===7||X===10||X===15||X===20||X>20&&X%5===0,Se=(X,ae)=>{if(a[X]!==void 0)return;const ge=e.find(je=>je.id===X),Ee=ae===ge.answerIndex,Ke=e.findIndex(je=>je.id===X);if(i(je=>({...je,[X]:ae})),O(je=>je+1),re(je=>je+1),Ee){if(Q(),l(je=>je+1),p(je=>je+10),z(!0),setTimeout(()=>{W()},300),setTimeout(()=>z(!1),2e3),de(),fe(Ke+1)){const je=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];w(je[Math.floor(Math.random()*je.length)]),S(!0),setTimeout(()=>S(!1),2e3)}}else if(le(),l(0),R(!0),setTimeout(()=>R(!1),1500),u(je=>{const gt=Math.max(0,je-1);return gt===0&&setTimeout(()=>P(!0),500),gt}),c>1&&fe(Ke+1)){const je=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];w(je[Math.floor(Math.random()*je.length)]),S(!0),setTimeout(()=>S(!1),2e3)}(c>1||Ee)&&(B.current=setTimeout(()=>{we()},2500))},de=()=>{const X=document.createElement("div");X.style.position="fixed",X.style.inset="0",X.style.pointerEvents="none",X.style.zIndex="1000",document.body.appendChild(X);const ae=["🎉","✨","⭐","🎊","🌟"];for(let ge=0;ge<20;ge++){const Ee=document.createElement("div");Ee.textContent=ae[Math.floor(Math.random()*ae.length)],Ee.style.position="fixed",Ee.style.left=`${Math.random()*100}%`,Ee.style.top="-50px",Ee.style.fontSize="24px",Ee.style.animation=`fall ${2+Math.random()*2}s ease-out`,X.appendChild(Ee)}setTimeout(()=>X.remove(),4e3)},we=()=>{if(!(A||k)&&r<e.length-1){const X=r+1,ae=document.getElementById(`question-${X}`);ae==null||ae.scrollIntoView({behavior:"smooth"}),s(X)}},Ie=X=>{const ae=e.findIndex(je=>je.id===X);if(L>=0&&D<5){j(`After ${5-D} attempts`),setTimeout(()=>j(null),2e3);return}const ge=e[ae],Ke=[0,1,2,3].filter(je=>je!==ge.answerIndex).sort(()=>Math.random()-.5).slice(0,2);K({...F,[X]:Ke}),V(ae),O(0)},dt=X=>{const ae=e.findIndex(se=>se.id===X);if(M>=0&&Z<5){j(`After ${5-Z} attempts`),setTimeout(()=>j(null),2e3);return}const Ee=e[ae].answerIndex,Ke=[0,0,0,0],je=40+Math.floor(Math.random()*31);Ke[Ee]=je;let gt=100-je;const De=[0,1,2,3].filter(se=>se!==Ee);for(let se=0;se<De.length-1;se++){const me=Math.floor(Math.random()*(gt/2));Ke[De[se]]=me,gt-=me}Ke[De[De.length-1]]=gt,oe({...ee,[X]:Ke}),I(ae),re(0)},Le=(X,ae)=>{ce(),x(X),E(ae),v(!1),xe()},Me=()=>{pe("/swipe"),U(!0)},Xe=()=>{q(!0),U(!1),document.body.classList.remove("hide-bottom-nav")},zt=()=>{const X=Object.keys(a).filter(ae=>{const ge=e.find(Ee=>Ee.id===ae);return a[ae]===(ge==null?void 0:ge.answerIndex)}).length;return d.useEffect(()=>{document.body.classList.add("hide-bottom-nav");const ae=setTimeout(()=>{f>0&&be.addCoins(f,"Swipe Quiz Session"),ce(),H(!1),q(!1),v(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(ae),document.body.classList.remove("hide-bottom-nav")}},[]),n.jsx("div",{className:"fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),n.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(a).length})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),n.jsx("div",{className:"text-2xl font-bold text-green-400",children:X})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",f]})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),n.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(ae,ge)=>n.jsx("span",{className:ge<c?"":"opacity-30",children:"❤️"},ge))})]})]})]})})};return G?n.jsx(zt,{}):C?n.jsx(hv,{onSelect:Le}):m?n.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading questions..."})}):n.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[n.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[n.jsx("button",{onClick:Me,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("div",{className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:f})]}),n.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🔥"}),n.jsx("span",{className:"font-bold text-orange-400",children:o})]})]}),n.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(X,ae)=>n.jsx("span",{className:`${ae<c?"text-red-500":"text-gray-600 opacity-30"} ${_&&ae===c-1?"animate-heartLoss":""}`,children:"❤️"},ae))})]}),N&&n.jsx("div",{className:"text-center py-1",children:n.jsx("span",{className:"text-xs text-gray-400",children:N})})]}),$&&n.jsx("div",{className:"fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-yellow-500 text-white px-4 py-2 rounded-full font-bold animate-coinFloat",children:"+10 🪙"})}),n.jsx("div",{ref:ne,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:e.map((X,ae)=>n.jsx(xv,{question:X,index:ae,answered:a[X.id],onAnswer:ge=>Se(X.id,ge),onFiftyFifty:()=>Ie(X.id),onAudience:()=>dt(X.id),eliminated:F[X.id]||[],audiencePercentages:ee[X.id],canUseFiftyFifty:L<0||D>=5,canUseAudience:M<0||Z>=5},X.id))}),k&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"😔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),n.jsx("button",{onClick:()=>{q(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),A&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>U(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),n.jsx("button",{onClick:Xe,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),T&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:n.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:g})}),y&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:y})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},xv=({question:e,index:t,answered:r,onAnswer:s,onFiftyFifty:a,onAudience:i,eliminated:o,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:u})=>{const f=p=>{switch(p){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return n.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[n.jsx("div",{className:"flex justify-center py-2",children:n.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),n.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[n.jsxs("div",{className:`bg-gradient-to-br ${f(e.difficulty)} p-6 rounded-3xl mb-4`,children:[n.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),n.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),n.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((p,m)=>{const b=r!==void 0,y=r===m,j=m===e.answerIndex,C=o.includes(m);let v="w-full p-4 rounded-2xl font-medium transition-all ";return C?v+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":b?j?v+="bg-green-500 text-white":y?v+="bg-red-500 text-white":v+="bg-gray-700 text-gray-400":v+="bg-gray-800 text-white hover:bg-gray-700",n.jsx("button",{onClick:()=>!b&&!C&&s(m),disabled:b||C,className:v,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][m]}),n.jsx("span",{className:"flex-1 text-left",children:p}),l&&l[m]>0&&n.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[m],"%"]}),b&&j&&n.jsx("span",{children:"✓"})]})},m)})}),!r&&n.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[n.jsx("button",{onClick:a,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),n.jsx("button",{onClick:i,disabled:!u,className:`px-4 py-2 rounded-lg font-medium text-sm ${u?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),n.jsx("div",{className:"text-center mt-3 mb-2",children:n.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),n.jsx("div",{className:"text-center mt-12 mb-4",children:n.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function gv(){const[e]=Em(),t=Ae();return rt(),d.useEffect(()=>{const r=e.get("category"),s=e.get("difficulty"),a=e.get("from")==="quest",i=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports","mixed"],o=["easy","medium","hard"],l=r==="random"?i[Math.floor(Math.random()*i.length)]:r||"mixed",c=s==="random"?o[Math.floor(Math.random()*o.length)]:s||"medium";console.log("QuizPlay - fromQuest:",a),console.log("QuizPlay - returnPath will be:",a?"/quests":"/"),t(`/quiz/${l}`,{replace:!0,state:{mode:"quiz",difficulty:c,count:5,timer:{type:"per_q",seconds:45},fromQuest:a,returnPath:a?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"20px"},children:"Starting your quiz..."})}function vv(){const[e]=Em(),t=Ae();return d.useEffect(()=>{const r=e.get("questions")||"15",s=e.get("difficulty")||"easy",a=e.get("category")||"mixed",i=e.get("from")==="quest",o=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports"],l=a==="random"?o[Math.floor(Math.random()*o.length)]:a;console.log("PracticeStart - Launching practice mode:",{category:l,difficulty:s,questions:r,fromQuest:i}),t(`/quiz/${l}`,{replace:!0,state:{mode:"practice",difficulty:s,count:parseInt(r),timer:{type:"off",seconds:0},fromQuest:i,questType:i?"practiceQuestions":null,returnPath:i?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #10B981 0%, #059669 100%)",color:"white",fontSize:"20px"},children:"Loading practice questions..."})}function yv(){var b;const e=Ae(),[t,r]=d.useState(""),[s,a]=d.useState(null),{player:i,levelProgress:o}=Nn(),c=(()=>{const y=JSON.parse(localStorage.getItem("currentUser")||"{}");return((y.phone?JSON.parse(localStorage.getItem(`user_profile_${y.phone}`)||"{}"):{}).name||y.username||(i==null?void 0:i.name)||"Player").split(" ")[0]})(),u=()=>{if((s==null?void 0:s.todayCoins)!==void 0)return s.todayCoins;try{const y=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),j=new Date().setHours(0,0,0,0);return y.sessions.filter(v=>new Date(v.timestamp).setHours(0,0,0,0)===j).reduce((v,h)=>v+(h.earnedCoins||0),0)}catch{return 0}},f={name:c,rank:(s==null?void 0:s.rank)||23,streak:(s==null?void 0:s.streak)||(i==null?void 0:i.currentStreak)||0,todayQuizzes:((b=s==null?void 0:s.daily)==null?void 0:b.quizzesPlayed)||3,todayCoins:u()};d.useEffect(()=>{const y=new Date().getHours();y<12?r("Good morning"):y<17?r("Good afternoon"):r("Good evening")},[]),d.useEffect(()=>{const y=()=>{const j=Je.getCurrentUser();if(j!=null&&j.phone){be.initializeUserData(j.phone);const C=be.getTodaySummary(j.phone);a(C)}};return y(),window.addEventListener("focus",y),()=>window.removeEventListener("focus",y)},[]);const p=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,m=s!=null&&s.xpProgress?s.xpProgress/(s.xpNeeded||100)*100:o.required>0?o.current/o.required*100:0;return n.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-10 px-3",children:[n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("div",{children:n.jsxs("h1",{className:"text-2xl font-bold px-3",children:[t,", ",c," 👋"]})}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-10 h-10 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:n.jsx("span",{className:"text-xl",children:"⚙️"})})]}),n.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[n.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:c[0].toUpperCase()}),n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"text-lg font-semibold",children:c}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",(s==null?void 0:s.level)||i.level||1]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[(s==null?void 0:s.totalCoins)||i.coins||0," 🪙"]}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",f.rank]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[n.jsx("span",{children:"XP Progress"}),n.jsxs("span",{children:[(s==null?void 0:s.xpProgress)||o.current,"/",(s==null?void 0:s.xpNeeded)||o.required]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${m}%`}})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",f.streak]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",f.todayCoins]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),n.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${p} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),n.jsxs("div",{className:"relative flex items-start justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),n.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),n.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),n.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("/profile/history"),className:`${p} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),n.jsx("div",{className:"text-3xl mb-3",children:"📊"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),n.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",f.todayQuizzes," today"]})]}),n.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${p} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),n.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),n.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${p} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[n.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),n.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),n.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${p} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),n.jsxs("div",{className:"mt-4 space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${p} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"🔥"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[f.streak," days strong"]})]})]})}),n.jsx("button",{onClick:()=>e("/profile/quests"),className:`${p} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"⚡"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[(s==null?void 0:s.activeQuests)||2," active goals"]})]})]})})]}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:`${p} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),n.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),n.jsx("div",{className:"text-white/40",children:"→"})]})})]}),n.jsx("div",{className:"h-6"})]})}const cs="🪙",pa={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},xa=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function bv(){var m,b;const e=Ae(),{player:t}=Nn(),r={global:pa.global.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y),friends:pa.friends.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y),india:pa.india.map(y=>y.you?{...y,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:y)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",r.friends[0]);const[s,a]=d.useState({days:2,hours:14,minutes:17}),[i,o]=d.useState("global"),l=r[i]||r.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(m=l.find(y=>y.you))==null?void 0:m.score);const c=l.find(y=>y.you),u=l.slice(0,3),f=l.slice(3);d.useEffect(()=>{const y=setInterval(()=>{a(j=>j.minutes>0?{...j,minutes:j.minutes-1}:j.hours>0?{...j,hours:j.hours-1,minutes:59}:j.days>0?{...j,days:j.days-1,hours:23,minutes:59}:j)},6e4);return()=>clearInterval(y)},[]);const p=y=>{const j=Math.max(...l.map(v=>v.score)),C=y/j*100;return C>=90?xa[0]:C>=70?xa[1]:C>=40?xa[2]:xa[3]};return n.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-5",children:[n.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),n.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),n.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${p(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:"text-2xl mb-1",children:p(c==null?void 0:c.score).icon}),n.jsxs("div",{className:"text-sm font-bold text-white",children:[p(c==null?void 0:c.score).name," League"]}),n.jsx("div",{className:"text-xs text-white/80",children:i==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),n.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:pa.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(y=>n.jsxs("button",{onClick:()=>o(y.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${i===y.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[n.jsx("div",{children:y.label}),n.jsx("div",{className:`text-[10px] ${i===y.key?"text-black/70":"text-white/60"}`,children:y.count})]},y.key))}),n.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),n.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[n.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),n.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),n.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",i==="global"?"Global":i==="friends"?"Friends":"India"]})]})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",cs]}),n.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),n.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),n.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),n.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),n.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),n.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[u[1]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ga,{src:u[1].avatar,fallback:u[1].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:va(u[1].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[1].score," ",cs]})]}),u[0]&&n.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ga,{src:u[0].avatar,fallback:u[0].name,size:72}),n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx(wv,{})}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),n.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:va(u[0].name,8)}),n.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[u[0].score," ",cs]}),n.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),u[2]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ga,{src:u[2].avatar,fallback:u[2].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:va(u[2].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[2].score," ",cs]})]})]})]})]}),f.length>0&&n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[n.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[n.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),n.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),n.jsx("ul",{className:"space-y-1.5",children:f.map((y,j)=>n.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${y.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${j*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(jv,{n:y.rank,you:y.you}),n.jsx(ga,{src:y.avatar,fallback:y.name,size:36}),n.jsxs("div",{className:"flex flex-col leading-tight",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm font-semibold",children:va(y.name,12)}),n.jsx("span",{className:"text-xs",children:y.country}),y.friend&&n.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),n.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${y.you?"text-black/70":"text-white/60"}`,children:[n.jsx("span",{children:y.handle}),n.jsxs("span",{children:["🔥",y.streak]})]})]})]}),n.jsxs("div",{className:"flex flex-col items-end",children:[n.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[n.jsx("span",{children:y.score}),n.jsx("span",{className:y.you?"opacity-90":"opacity-80",children:cs})]}),n.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${y.trend.startsWith("+")?"bg-green-500/20 text-green-400":y.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:y.trend})]})]},`${i}-${y.rank}`))})]}),c&&c.rank>1&&n.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[n.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),n.jsx("div",{className:"text-xs text-white/70 mb-3",children:i==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((b=l[c.rank-2])==null?void 0:b.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(i==="friends"&&c.rank===1)&&n.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function ga({src:e,fallback:t,size:r=56}){const s=Nv(t);return n.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:r,height:r},children:e?n.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):n.jsx("span",{className:"text-sm font-semibold",children:s})})}function wv(){return n.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[n.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[n.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),n.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),n.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function jv({n:e,you:t}){return n.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function va(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function Nv(e=""){var r;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((r=t[1])==null?void 0:r[0])||"")).toUpperCase()}const kv="qp_recent",Sv="qp_review_snapshot",Wd=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function Cv(){const[e,t]=d.useState("quizzes"),[r,s]=d.useState(null),[a,i]=d.useState(!1),[o,l]=d.useState("all"),[c,u]=d.useState("all"),[f,p]=d.useState("date"),[m,b]=d.useState([]),[y,j]=d.useState(!0),C=Ae(),v=S=>{if(!S)return"00:00";const g=Math.floor(S/1e3),w=Math.floor(g/60),k=g%60;return`${String(w).padStart(2,"0")}:${String(k).padStart(2,"0")}`},h=S=>{if(!S)return"Unknown";const g=new Date(S),k=Math.floor((new Date-g)/(1e3*60*60*24));return k===0?"Today":k===1?"Yesterday":k<7?`${k} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][g.getMonth()]} ${g.getDate()}`};d.useEffect(()=>{let S=!1;j(!0);const g=P=>{try{return JSON.parse(P)}catch{return null}},w=P=>encodeURIComponent(String(P).trim().toLowerCase().replace(/\s+/g,"-")),k=P=>{var z,D,O,Z;const A=Number(P.ts??P.timestamp??P.id)||Date.now(),U=Number(P.ms)||0,G=Number(P.total)||0,q=Number(P.correct)||0,H=String(P.mode||"").toLowerCase().includes("practice")?"practice":"quiz",_=((z=P.snapshot)==null?void 0:z.category)||((D=P.snapshot)==null?void 0:D.categoryLabel)||P.cat||P.category||"Unknown",R=((O=P.snapshot)==null?void 0:O.categoryParam)||w(_),$=String(((Z=P.snapshot)==null?void 0:Z.difficulty)||P.difficulty||"medium").toLowerCase();return{id:P.id??A,type:H,category:_,categoryParam:R,difficulty:$,score:q,total:G,accuracy:G?Math.round(q/G*100):0,time:v(U),ms:U,date:h(A),timestamp:A,snapshot:P.snapshot??null,mode:P.mode||(H==="practice"?"Practice":"Quiz")}};try{const P=localStorage.getItem(kv),A=P?g(P):null,G=(Array.isArray(A)&&A.length?A:Wd).map(k).filter(q=>q&&q.timestamp).sort((q,Y)=>Y.timestamp-q.timestamp);S||b(G)}catch(P){console.error("Error loading history:",P),S||b(Wd)}finally{S||j(!1)}return()=>{S=!0}},[]);const x=d.useMemo(()=>{const S=new Set(m.map(g=>g.category));return Array.from(S)},[m]),N=d.useMemo(()=>{let S=m.filter(g=>e==="quizzes"?g.type==="quiz":g.type==="practice");return o!=="all"&&(S=S.filter(g=>g.category===o)),c!=="all"&&(S=S.filter(g=>g.difficulty===c)),S.sort((g,w)=>f==="date"?w.timestamp-g.timestamp:f==="score"?w.accuracy-g.accuracy:f==="time"?g.ms-w.ms:0),S},[m,e,o,c,f]),E=d.useMemo(()=>{if(N.length===0)return null;const S=N.reduce((P,A)=>P+A.score,0),g=N.reduce((P,A)=>P+A.total,0),w=g?Math.round(S/g*100):0,k=N.reduce((P,A)=>P+A.ms,0);return{count:N.length,avgAccuracy:w,totalTime:v(k),bestScore:Math.max(...N.map(P=>P.accuracy))}},[N]),T=S=>S>=80?"text-green-400":S>=60?"text-blue-400":S>=40?"text-yellow-400":"text-red-400";return y?n.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading history..."})}):n.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[n.jsx("div",{className:"",children:n.jsxs("div",{className:"px-4 pt-4 pb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("button",{onClick:()=>C("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),n.jsx("button",{onClick:()=>i(!a),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:n.jsx(Tv,{})})]}),n.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),n.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),n.jsxs("div",{className:"px-4 pb-20",children:[n.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:n.jsx("div",{className:"flex items-center",children:n.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(S=>n.jsxs("button",{onClick:()=>t(S.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===S.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[n.jsx("span",{className:"mr-1",children:S.icon}),S.label]},S.value))})})}),E&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[n.jsx(ya,{label:"Total",value:E.count}),n.jsx(ya,{label:"Avg Score",value:`${E.avgAccuracy}%`,color:T(E.avgAccuracy)}),n.jsx(ya,{label:"Best Score",value:`${E.bestScore}%`,color:"text-green-400"}),n.jsx(ya,{label:"Total Time",value:E.totalTime})]})}),a&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),n.jsxs("select",{value:o,onChange:S=>l(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All Categories"}),x.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),n.jsxs("select",{value:c,onChange:S=>u(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All"}),n.jsx("option",{value:"easy",children:"Easy"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"hard",children:"Hard"})]})]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),n.jsxs("select",{value:f,onChange:S=>p(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"date",children:"Date"}),n.jsx("option",{value:"score",children:"Score"}),n.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),N.length===0?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📚"}),n.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),n.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):n.jsx("div",{className:"space-y-3",children:N.map((S,g)=>n.jsx(Ev,{item:S,index:g,onClick:()=>s(S)},S.id))})]}),r&&n.jsx(Pv,{item:r,onClose:()=>s(null)})]})}function ya({label:e,value:t,color:r="text-white"}){return n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),n.jsx("div",{className:`text-lg font-bold ${r}`,children:t})]})}function Ev({item:e,index:t,onClick:r}){const s=o=>o>=80?"from-green-500/20 to-green-600/10 border-green-500/30":o>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":o>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",i=(o=>{const l=o==null?void 0:o.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return n.jsxs("div",{onClick:r,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),n.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${i.bg} ${i.text} ${i.border} border`,children:e.difficulty}),n.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),n.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[n.jsxs("span",{children:["⏱ ",e.time]}),n.jsx("span",{children:e.mode})]}),n.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function Pv({item:e,onClose:t}){const r=Ae();return d.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:n.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),n.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Category"}),n.jsx("span",{className:"text-white font-medium",children:e.category})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Difficulty"}),n.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Accuracy"}),n.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-white/60",children:"Time"}),n.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&n.jsx("button",{onClick:()=>{t(),localStorage.setItem(Sv,JSON.stringify(e.snapshot)),r(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),n.jsx("button",{onClick:()=>{var s;t(),r(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function Tv(){return n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Rv=d.createContext({});function zm(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const _v=typeof window<"u",Av=_v?d.useLayoutEffect:d.useEffect,Mm=d.createContext(null);function Iv(e){return typeof e=="object"&&e!==null}function Lv(e){return Iv(e)&&"offsetHeight"in e}const Dv=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class zv extends d.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=r.offsetParent,a=Lv(s)&&s.offsetWidth||0,i=this.props.sizeRef.current;i.height=r.offsetHeight||0,i.width=r.offsetWidth||0,i.top=r.offsetTop,i.left=r.offsetLeft,i.right=a-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Mv({children:e,isPresent:t,anchorX:r,root:s}){const a=d.useId(),i=d.useRef(null),o=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(Dv);return d.useInsertionEffect(()=>{const{width:c,height:u,top:f,left:p,right:m}=o.current;if(t||!i.current||!c||!u)return;const b=r==="left"?`left: ${p}`:`right: ${m}`;i.current.dataset.motionPopId=a;const y=document.createElement("style");l&&(y.nonce=l);const j=s??document.head;return j.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${b}px !important;
            top: ${f}px !important;
          }
        `),()=>{j.contains(y)&&j.removeChild(y)}},[t]),n.jsx(zv,{isPresent:t,childRef:i,sizeRef:o,children:d.cloneElement(e,{ref:i})})}const Ov=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:i,mode:o,anchorX:l,root:c})=>{const u=zm(Fv),f=d.useId();let p=!0,m=d.useMemo(()=>(p=!1,{id:f,initial:t,isPresent:r,custom:a,onExitComplete:b=>{u.set(b,!0);for(const y of u.values())if(!y)return;s&&s()},register:b=>(u.set(b,!1),()=>u.delete(b))}),[r,u,s]);return i&&p&&(m={...m}),d.useMemo(()=>{u.forEach((b,y)=>u.set(y,!1))},[r]),d.useEffect(()=>{!r&&!u.size&&s&&s()},[r]),o==="popLayout"&&(e=n.jsx(Mv,{isPresent:r,anchorX:l,root:c,children:e})),n.jsx(Mm.Provider,{value:m,children:e})};function Fv(){return new Map}function $v(e=!0){const t=d.useContext(Mm);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:a}=t,i=d.useId();d.useEffect(()=>{if(e)return a(i)},[e]);const o=d.useCallback(()=>e&&s&&s(i),[i,s,e]);return!r&&s?[!1,o]:[!0]}const ba=e=>e.key||"";function Hd(e){const t=[];return d.Children.forEach(e,r=>{d.isValidElement(r)&&t.push(r)}),t}const oo=({children:e,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:i="sync",propagate:o=!1,anchorX:l="left",root:c})=>{const[u,f]=$v(o),p=d.useMemo(()=>Hd(e),[e]),m=o&&!u?[]:p.map(ba),b=d.useRef(!0),y=d.useRef(p),j=zm(()=>new Map),[C,v]=d.useState(p),[h,x]=d.useState(p);Av(()=>{b.current=!1,y.current=p;for(let T=0;T<h.length;T++){const S=ba(h[T]);m.includes(S)?j.delete(S):j.get(S)!==!0&&j.set(S,!1)}},[h,m.length,m.join("-")]);const N=[];if(p!==C){let T=[...p];for(let S=0;S<h.length;S++){const g=h[S],w=ba(g);m.includes(w)||(T.splice(S,0,g),N.push(g))}return i==="wait"&&N.length&&(T=N),x(Hd(T)),v(p),null}const{forceRender:E}=d.useContext(Rv);return n.jsx(n.Fragment,{children:h.map(T=>{const S=ba(T),g=o&&!u?!1:p===h||m.includes(S),w=()=>{if(j.has(S))j.set(S,!0);else return;let k=!0;j.forEach(P=>{P||(k=!1)}),k&&(E==null||E(),x(y.current),o&&(f==null||f()),s&&s())};return n.jsx(Ov,{isPresent:g,initial:!b.current||r?void 0:!1,custom:t,presenceAffectsLayout:a,mode:i,root:c,onExitComplete:g?void 0:w,anchorX:l,children:T},S)})})},Bv=()=>{const e=Ae(),[t,r]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const B=sessionStorage.getItem("navigationSource");B&&r(B)}},[]);const s=B=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=B)},a=()=>{e(-1)},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}};Nn();const[l,c]=d.useState(4),[u,f]=d.useState(be.getCoins()),[p,m]=d.useState(4),[b,y]=d.useState(!1),[j,C]=d.useState(!1),[v,h]=d.useState(0),[x,N]=d.useState(0),[E,T]=d.useState("cycle"),[S,g]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[w,k]=d.useState([0,1,2,3]),[P,A]=d.useState(!1),[U,G]=d.useState(!1),[q,Y]=d.useState(null),[H,_]=d.useState(null),[R,$]=d.useState(!1),[z,D]=d.useState(null),[O,Z]=d.useState(!1),re=d.useRef(null),L=d.useRef(null),V=d.useRef(null);d.useEffect(()=>{re.current=new Audio("/sounds/reward.mp3"),L.current=new Audio("/sounds/reward_progress.mp3"),[re,L].forEach(B=>{var Q;(Q=B.current)==null||Q.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const M=B=>{try{B.current&&(B.current.currentTime=0,B.current.play().catch(Q=>console.log("Audio play failed:",Q)))}catch(Q){console.log("Sound play error:",Q)}},I=(B,Q)=>{if(B>l){_(Q),G(!0);return}B===l&&K(B,Q)},F=B=>{var le;const Q=(le=V.current)==null?void 0:le.querySelector(`[data-index="${B}"]`);if(Q){const W=Q.getBoundingClientRect(),te=window.pageYOffset||document.documentElement.scrollTop,ce=W.top+te-window.innerHeight/2+50;window.scrollTo({top:ce,behavior:"smooth"})}},K=(B,Q)=>{if(!w.includes(B)){if(Q.cost>0&&u<Q.cost){_(Q),G(!0);return}Q.cost>0&&(f(le=>le-Q.cost),be.addCoins(-Q.cost,`Reward Purchase: ${Q.label}`)),M(re),A(!0),_(Q),k(le=>[...le,B]),setTimeout(()=>{A(!1),Q.type==="coins"?(h(Q.value),y(!0),setTimeout(()=>{f(le=>le+Q.value),be.addCoins(Q.value,`Reward Claimed: ${Q.label}`),setTimeout(()=>{y(!1),h(0)},500)},300)):Q.type==="life"?(N(Q.value),C(!0),setTimeout(()=>{m(le=>le+Q.value),setTimeout(()=>{C(!1),N(0)},500)},300)):(D({icon:Q.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{D(null),Z(!0),ee(Q),Q.type==="vehicle"&&T(Q.value),setTimeout(()=>{Z(!1)},500)},800)),setTimeout(()=>{if(l<i.length-1){const le=l+1;F(le),setTimeout(()=>{$(!0),M(L),c(le),setTimeout(()=>{$(!1)},500)},300)}},1200)},1500)}},ee=B=>{g(Q=>Q.find(W=>W.icon===B.icon)?Q.map(W=>W.icon===B.icon?{...W,count:W.count+1}:W):[...Q,{type:B.type,icon:B.icon,name:B.label,count:1}])},oe=B=>30+B*100,ne=()=>30+l*100;return n.jsxs("div",{className:"rewards-page",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"non-sticky-header",children:n.jsx("button",{className:"back-button",onClick:a,children:"← Back"})}),n.jsxs("div",{className:"sticky-section",children:[n.jsxs("div",{className:"header-wrapper",children:[n.jsxs("div",{className:"title-row",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"title",children:"Rewards"}),n.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),n.jsx("button",{className:"play-quiz-btn",onClick:()=>s("/play"),children:"Play Quiz"})]}),n.jsx("div",{className:"balance-row",children:n.jsx("div",{className:"balance-item",children:n.jsxs("div",{children:[n.jsx("div",{className:"balance-label",children:"Balance"}),n.jsxs("div",{className:`balance-value ${b?"animating":""}`,children:[u.toLocaleString()," 🪙",b&&n.jsxs("span",{className:"value-change",children:["+",v]})]})]})})})]}),n.jsx("div",{className:"stats-cards-container",children:n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"❤️"}),n.jsxs("div",{className:`info-value ${j?"animating":""}`,children:[p,j&&n.jsxs("span",{className:"value-change",children:["+",x]})]}),n.jsx("div",{className:"info-label",children:"Lives"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"⭐"}),n.jsx("div",{className:"info-value",children:"5"}),n.jsx("div",{className:"info-label",children:"Level"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:o[E].icon}),n.jsx("div",{className:"info-value",children:o[E].name}),n.jsx("div",{className:"info-label",children:"Vehicle"})]}),n.jsxs("div",{className:`cards-section ${O?"animating":""}`,children:[n.jsx("div",{className:"cards-label",children:"Your Cards"}),n.jsx("div",{className:"card-grid",children:S.map((B,Q)=>n.jsxs("div",{className:"card-item",onClick:()=>Y(B),children:[n.jsxs("div",{className:"large-card",children:[n.jsx("div",{className:"large-card-icon",children:B.icon}),n.jsx("div",{className:"large-card-name",children:B.name})]}),B.count>1&&n.jsx("div",{className:"card-count-badge",children:B.count})]},Q))})]})]})})]}),n.jsx("div",{className:"scrollable-journey",children:n.jsx("div",{className:"journey-container",ref:V,children:n.jsxs("div",{className:"journey-track",children:[n.jsx("div",{className:"curvy-road",children:n.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),n.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),n.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),n.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-l/(i.length-1)*1500})]})}),n.jsxs("div",{className:"avatar-tracker",style:{top:`${ne()}px`},children:[n.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:B=>{B.target.style.display="none"}}),n.jsx("div",{className:"tracker-vehicle",children:o[E].icon})]}),n.jsx("div",{className:"rewards-list",children:i.map((B,Q)=>{const le=Q%2===0,W=Q>l,te=w.includes(Q),ce=Q===l;return n.jsx("div",{className:"reward-row","data-index":Q,style:{top:`${oe(Q)}px`},children:n.jsxs("div",{className:`reward-item ${le?"left":"right"}`,children:[n.jsxs("div",{className:`checkpoint ${ce?"current":te?"claimed":W?"locked":""}`,onClick:()=>I(Q,B),children:[n.jsx("div",{className:"checkpoint-icon",children:B.icon}),n.jsx("div",{className:"checkpoint-value",children:B.label.split(" ")[0]}),B.milestone&&n.jsx("div",{className:"milestone-badge",children:"BONUS"}),W&&n.jsx("div",{className:"lock-icon",children:"🔒"})]}),n.jsxs("div",{className:"reward-info",children:[n.jsx("div",{className:"reward-name",children:B.label}),n.jsxs("div",{className:"step-label",children:["Step ",Q+1]})]})]})},B.id)})})]})})}),z&&n.jsx("div",{className:"flying-card",style:{left:`${z.startX}px`,top:`${z.startY}px`,"--startX":`${z.startX}px`},children:z.icon}),n.jsx(oo,{children:q&&n.jsx("div",{className:"claim-overlay",onClick:()=>Y(null),children:n.jsxs("div",{className:"modal",onClick:B=>B.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:q.icon}),n.jsx("div",{className:"card-detail-name",children:q.name}),n.jsxs("div",{className:"card-detail-desc",children:["You have ",q.count," of these cards"]}),n.jsx("div",{className:"modal-buttons",children:n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>Y(null),children:"Close"})})]})})}),n.jsx(oo,{children:P&&H&&n.jsx("div",{className:"claim-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("div",{className:"modal-title",children:"WELL DONE!"}),n.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),n.jsx("div",{className:"modal-icon",children:H.icon}),n.jsxs("div",{className:"modal-value",children:["+",H.value," ",H.type==="coins"?"Coins":H.type==="life"?"Lives":H.label]})]})})}),n.jsx(oo,{children:U&&H&&n.jsx("div",{className:"claim-overlay",onClick:()=>G(!1),children:n.jsxs("div",{className:"modal",onClick:B=>B.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:"🪙"}),n.jsx("div",{className:"modal-title",children:"Need More Coins"}),n.jsx("div",{className:"modal-subtitle",children:H.cost>0?`You need ${H.cost-u} more coins`:"Complete previous rewards first"}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>s("/play"),children:"Play Quiz"}),n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>G(!1),children:"Cancel"})]})]})})})]})},wa=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function Uv(){const[e,t]=d.useState(null),r=wa.filter(a=>a.unlocked).length,s=Math.round(r/wa.length*100);return n.jsxs("div",{className:"badges-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Badge Collection"}),n.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),n.jsxs("div",{className:"progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Collection Progress"}),n.jsxs("span",{className:"progress-value",children:[r,"/",wa.length]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),n.jsx("div",{className:"badges-grid",children:wa.map(a=>n.jsxs("div",{className:`badge-card ${a.unlocked?"unlocked":""}`,style:{"--badge-color":a.color},onClick:()=>t(a),children:[n.jsx("div",{className:"badge-glow"}),n.jsx("div",{className:"badge-emoji",children:a.emoji}),n.jsx("div",{className:"badge-name",children:a.name}),!a.unlocked&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"badge-progress",children:n.jsx("div",{className:"badge-progress-fill",style:{width:`${a.progress}%`}})}),n.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},a.id))}),n.jsxs("div",{className:"tips-card",children:[n.jsxs("div",{className:"tips-title",children:[n.jsx("span",{children:"💡"}),n.jsx("span",{children:"Pro Tip"})]}),n.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&n.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:n.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),n.jsx("h3",{className:"modal-title",children:e.name}),n.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),n.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&n.jsxs("div",{className:"modal-progress-section",children:[n.jsx("div",{className:"modal-progress-label",children:"Progress"}),n.jsx("div",{className:"modal-progress-bar",children:n.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),n.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),n.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const qv=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function Qv(){const{player:e,addCoins:t}=Nn(),[r,s]=d.useState(qv),[a,i]=d.useState(null),[o,l]=d.useState((e==null?void 0:e.coins)||0),[c,u]=d.useState(!1),[f,p]=d.useState([]),m=r.length,b=r.filter(C=>C.current>=C.target).length,y=Math.round(b/m*100);d.useEffect(()=>{const C=setInterval(()=>{p(v=>{const h={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...v.slice(-4),h]})},3e3);return()=>clearInterval(C)},[]);const j=(C,v)=>{i(C),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{s(h=>h.map(x=>x.id===C?{...x,claimed:!0}:x)),l(h=>h+v),i(null),u(!0),setTimeout(()=>u(!1),2e3)},600)};return n.jsxs("div",{className:"achievements-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",o.toLocaleString()]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),n.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),n.jsxs("div",{className:"progress-overview",children:[n.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),n.jsxs("div",{className:"overview-header",children:[n.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),n.jsxs("div",{className:"overview-stats",children:[n.jsx("span",{className:"trophy-icon",children:"🏆"}),n.jsxs("span",{className:"overview-value",children:[b,"/",m]})]})]}),n.jsx("div",{className:"progress-bar-main",children:n.jsx("div",{className:"progress-fill-main",style:{width:`${y}%`}})})]}),n.jsx("div",{className:"achievements-list",children:r.map(C=>{const v=Math.min(100,Math.round(C.current/C.target*100)),h=v===100,x=C.color+"CC";return n.jsxs("div",{className:`achievement-card ${h?"completed":""}`,style:{"--card-color":C.color,"--card-color-dark":x},children:[n.jsx("div",{className:"card-glow"}),h&&C.claimed&&n.jsx("div",{className:"completed-badge",children:"✓"}),n.jsxs("div",{className:"card-content",children:[n.jsx("div",{className:"achievement-icon",children:C.icon}),n.jsxs("div",{className:"achievement-details",children:[n.jsx("div",{className:"achievement-title",children:C.title}),n.jsx("div",{className:"achievement-subtitle",children:C.subtitle}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${v}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{children:[C.current,"/",C.target]}),n.jsxs("span",{className:"reward-badge",children:["🪙 ",C.reward]})]})]})]}),n.jsx("button",{onClick:()=>j(C.id,C.reward),disabled:!h||C.claimed,className:`claim-button ${C.claimed?"claimed":h?"can-claim":"in-progress"} ${a===C.id?"claiming":""}`,children:C.claimed?"✓":h?"CLAIM!":`${v}%`})]})]},C.id)})}),c&&n.jsx("div",{className:"celebration",children:"🎉"})]})}function Yv(){const{player:e,updateDailyStreak:t}=Nn(),r=(e==null?void 0:e.currentStreak)||0,s=(e==null?void 0:e.bestStreak)||0,a=(e==null?void 0:e.totalDays)||0;e!=null&&e.coins;const i=Ae(),o=new Date,l=o.getDay(),c=()=>{const R=new Date(o);return R.setDate(o.getDate()-o.getDay()),R.toISOString().split("T")[0]},[u,f]=d.useState(null),[p,m]=d.useState(!1),[b,y]=d.useState(null),[j,C]=d.useState(null),[v,h]=d.useState(!1),x=d.useRef(null),N=d.useRef(null),[E]=$t("/sounds/coin.mp3",{volume:.75}),[T]=$t("/sounds/correct.mp3",{volume:.6}),[S,g]=d.useState(()=>{const R=localStorage.getItem("streaks_claimed")||"[]",$=JSON.parse(R),z=c(),D=$.filter(O=>O!==`week_${z}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(D)),D});d.useEffect(()=>{const R=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const z=document.querySelector("main");z&&(z.scrollTop=0)};R(),requestAnimationFrame(R);const $=setTimeout(R,100);return()=>clearTimeout($)},[]),d.useEffect(()=>{h(!0),setTimeout(()=>h(!1),3e3)},[]);const w=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],k=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],P=R=>{const $=S.includes(`week_${c()}_day_${R}`);if(R===0)return{isCompleted:!0,isClaimed:$,canClaim:!$,isLocked:!1};const z=r>=R,D=z&&!$,O=r<R;return{isCompleted:z,isClaimed:$,canClaim:D,isLocked:O}},A=(R,$,z)=>{const D=P($);if(D.isLocked){C({day:$,currentStreak:r}),setTimeout(()=>C(null),2e3);return}D.isClaimed||D.canClaim&&(f({...R,day:$}),m(!1),setTimeout(()=>{m(!0),T(),setTimeout(()=>{if(R.type==="coins"){const re=parseInt(R.reward);if(N.current&&x.current){const L=N.current.getBoundingClientRect();E(),y({startRect:L,count:10,amount:re})}}const O=`week_${c()}_day_${$}`,Z=[...S,O];g(Z),localStorage.setItem("streaks_claimed",JSON.stringify(Z))},500),setTimeout(()=>{f(null),m(!1)},2500)},500))},U=(R,$)=>{if(w[$].dayIndex===l)return r>0?"today-completed":"today-pending";if($<w.findIndex(D=>D.dayIndex===l)){const D=w.findIndex(O=>O.dayIndex===l)-$;return r>=D?"completed":"missed"}else return"future"},G=[{days:3,emoji:"⚡",label:"Starter",achieved:r>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:r>=7},{days:30,emoji:"💎",label:"Champion",achieved:r>=30},{days:100,emoji:"👑",label:"Legend",achieved:r>=100}],q=G.find(R=>R.days>r)||G[G.length-1],Y=Math.min(100,r/q.days*100),H=()=>{window.location.href="/play"},_=()=>{i(-1)};return n.jsxs("div",{className:"streaks-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),b&&n.jsx(Pi,{startRect:b.startRect,targetRef:x,count:b.count,onDone:()=>{be.addCoins(b.amount,`Streak Reward - Day ${b.day||""}`),y(null)}}),n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-top",children:[n.jsx("button",{className:"back-button",onClick:_,children:"← Back"}),n.jsxs("div",{className:"coin-pill",ref:x,id:"coin-pill",children:[n.jsx("span",{className:"coin-icon",children:"🪙"}),n.jsx("span",{className:"coin-amount",children:be.getCoins()})]})]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"STREAKS"}),n.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),n.jsxs("div",{className:"streak-hero",children:[n.jsx("div",{className:"fire-animation",children:"🔥"}),n.jsx("div",{className:"streak-number",children:r}),n.jsx("div",{className:"streak-label",children:"DAY STREAK"}),n.jsxs("div",{className:"stats-row",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:s}),n.jsx("div",{className:"stat-label",children:"Best Streak"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:a}),n.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),n.jsxs("div",{className:"weekly-progress-card",children:[n.jsxs("div",{className:"weekly-header",children:[n.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),n.jsxs("div",{className:"weekly-counter",children:[n.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),n.jsxs("span",{className:"weekly-counter-text",children:[Math.min(r,7),"/7"]})]})]}),n.jsx("div",{className:"weekly-days",children:w.map((R,$)=>{const z=U(R.dayIndex,$),D=R.dayIndex===l;return n.jsxs("div",{className:"day-item",children:[n.jsx("div",{className:`day-circle ${z}`,children:z==="completed"||z==="today-completed"?"":R.short}),n.jsx("div",{className:`day-label ${D?"today":""}`,children:R.label})]},$)})}),n.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),n.jsx("div",{className:"rewards-grid",children:k.map((R,$)=>{const z=P(R.day);return n.jsxs("div",{className:`reward-item ${z.isLocked?"locked":z.canClaim?"can-claim":z.isClaimed?"completed":""}`,onClick:D=>A(R,R.day),children:[n.jsxs("div",{className:"reward-day",children:["Day ",R.day]}),n.jsx("div",{className:"reward-icon",children:R.icon}),n.jsx("div",{className:"reward-text",children:R.label})]},$)})})]}),n.jsxs("div",{className:"milestone-section",children:[n.jsx("div",{className:"milestone-header",children:"Next Milestone"}),n.jsxs("div",{className:"milestone-progress",children:[n.jsxs("div",{className:"milestone-info",children:[n.jsxs("div",{className:"milestone-current",children:[n.jsx("span",{className:"milestone-emoji",children:q.emoji}),n.jsx("span",{className:"milestone-text",children:q.label})]}),n.jsxs("span",{className:"milestone-target",children:[r,"/",q.days," days"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${Y}%`}})})]})]}),n.jsx("div",{className:"motivational-text",children:r===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${r} strong! Keep going to unlock more rewards!`}),n.jsxs("button",{className:"play-button",onClick:H,children:[n.jsx("span",{children:"Continue Streak"}),n.jsx("span",{children:"→"})]}),j&&n.jsxs("div",{className:"locked-message",children:[n.jsx("span",{className:"locked-message-icon",children:"🔒"}),n.jsx("span",{className:"locked-message-text",children:j.day===1&&j.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${j.day} streak to unlock this reward!`})]}),u&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"modal-overlay"}),n.jsx("div",{className:"reward-modal",ref:N,children:n.jsxs("div",{className:"gift-box",children:[n.jsxs("div",{className:"gift-box-body",children:[n.jsx("div",{className:"gift-box-ribbon"}),n.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),n.jsx("div",{className:`gift-box-lid ${p?"opening":""}`,children:n.jsx("div",{className:"gift-box-bow",children:"🎀"})}),n.jsxs("div",{className:`gift-content ${p?"show":""}`,children:[n.jsx("div",{className:"gift-content-icon",children:u.icon}),n.jsxs("div",{className:"gift-content-title",children:["Day ",u.day]}),n.jsx("div",{className:"gift-content-desc",children:u.label})]})]})})]}),v&&n.jsx("div",{className:"celebration",children:"🎉"})]})}const Wv=()=>{const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},ol=()=>{const e=localStorage.getItem("questProgress");return e?JSON.parse(e):{}},Gd=(e,t)=>{const r=ol();r[e]=t,r.date=Wv(),localStorage.setItem("questProgress",JSON.stringify(r))};function Hv(){const{player:e}=Nn(),t=Ae(),r=rt(),s=ol(),[a,i]=d.useState([{id:1,title:"Play 3 quizzes today",progress:s.dailyQuizzes||0,target:3,reward:60,claimed:s.dailyQuizzesClaimed||!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy",questType:"dailyQuizzes",route:"/quiz/play",routeParams:"?category=random&difficulty=random&from=quest"},{id:3,title:"Practice 15 questions",progress:s.practiceQuestions||0,target:15,reward:100,claimed:s.practiceQuestionsClaimed||!1,icon:"📚",color:"#FFD93D",difficulty:"Easy",questType:"practiceQuestions",route:"/practice/start",routeParams:"?questions=15&difficulty=easy&category=random&from=quest"},{id:4,title:"Win 5 in a row",progress:s.winStreak||0,target:5,reward:150,claimed:s.winStreakClaimed||!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard",questType:"winStreak",route:"/play",routeParams:"?mode=survival&from=quest"},{id:5,title:"Complete a speed run",progress:s.speedRun||0,target:1,reward:120,claimed:s.speedRunClaimed||!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium",questType:"speedRun",route:"/swipe/random-mix",routeParams:"?from=quest"}]),[o,l]=d.useState(be.getCoins()),[c,u]=d.useState(null),[f,p]=d.useState(0),m=d.useRef(null),[b,y]=d.useState(null);d.useEffect(()=>{const N=()=>{const T=ol();i(S=>S.map(g=>{const w=g.questType;return T[w]!==void 0?{...g,progress:T[w]}:g}))};window.addEventListener("storage",N);const E=()=>N();return window.addEventListener("focus",E),()=>{window.removeEventListener("storage",N),window.removeEventListener("focus",E)}},[]),d.useEffect(()=>{const N=T=>{console.log("Quest progress update received:",T.detail),i(S=>S.map(g=>g.questType==="practiceQuestions"&&T.detail.practiceQuestions?{...g,progress:T.detail.practiceQuestions}:g))};window.addEventListener("questProgressUpdate",N);const E=setInterval(()=>{try{const T=localStorage.getItem("questProgress");if(T){const S=JSON.parse(T);i(g=>g.map(w=>w.questType==="practiceQuestions"&&S.practiceQuestions&&w.progress!==S.practiceQuestions?{...w,progress:S.practiceQuestions}:w))}}catch(T){console.error("Error checking progress:",T)}},1e3);return()=>{window.removeEventListener("questProgressUpdate",N),clearInterval(E)}},[]),d.useEffect(()=>{var N;if((N=r.state)!=null&&N.questCompleted){const{questType:E,increment:T}=r.state;i(S=>S.map(g=>{if(g.questType===E){const w=Math.min(g.progress+(T||1),g.target);return Gd(E,w),{...g,progress:w}}return g})),window.history.replaceState({},document.title)}},[r]),d.useEffect(()=>{const N=a.filter(E=>E.progress>=E.target).length;p(Math.round(N/a.length*100))},[a]),d.useEffect(()=>{l((e==null?void 0:e.coins)||0)},[e==null?void 0:e.coins]);const j=N=>{navigator.vibrate&&navigator.vibrate([20]),sessionStorage.setItem("activeQuest",JSON.stringify({id:N.id,type:N.questType,title:N.title,currentProgress:N.progress,target:N.target})),t(N.route+N.routeParams)},C=()=>{sessionStorage.getItem("questsFromHome")==="true"?(sessionStorage.removeItem("questsFromHome"),t("/")):t("/profile")},v=N=>{navigator.vibrate&&navigator.vibrate([20,10,20]);try{const E=new Audio("/sounds/coin.mp3");E.volume=.75,E.play()}catch{console.log("Sound not available")}u(N.id),y({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(N.reward/10,10),amount:N.reward,questTitle:N.title}),setTimeout(()=>{i(E=>E.map(T=>T.id===N.id?(Gd(T.questType+"Claimed",!0),{...T,claimed:!0}):T)),u(null)},600)},h=N=>{switch(N){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},x=()=>{const N=new Date,E=new Date(N);E.setDate(E.getDate()+1),E.setHours(5,0,0,0);const T=E-N,S=Math.floor(T/(1e3*60*60)),g=Math.floor(T%(1e3*60*60)/(1e3*60));return`${S}h ${g}m`};return n.jsxs("div",{className:"quests-screen",children:[b&&n.jsx(Pi,{startRect:b.startRect,targetRef:m,count:b.count,onDone:()=>{l(N=>N+b.amount),be.addCoins(b.amount,`Quest Reward: ${b.questTitle||"Completed"}`),y(null)}}),n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"animated-bg",children:[n.jsx("div",{className:"floating-icon",children:"🎮"}),n.jsx("div",{className:"floating-icon",children:"🎯"}),n.jsx("div",{className:"floating-icon",children:"🏆"}),n.jsx("div",{className:"floating-icon",children:"⭐"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:C,children:"← Back"}),n.jsxs("div",{className:"coins-display",ref:m,children:["🪙 ",o]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Daily Quests"}),n.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),n.jsxs("div",{className:"daily-progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Today's Progress"}),n.jsxs("span",{className:"progress-value",children:[f,"%"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${f}%`}})})]}),n.jsx("div",{className:"quests-list",children:a.map(N=>{const E=Math.min(100,Math.round(N.progress/N.target*100)),T=E===100,S=N.color+"CC";return n.jsxs("div",{className:`quest-card ${T?"completed":""}`,style:{"--quest-color":N.color,"--quest-color-dark":S},children:[n.jsx("div",{className:"quest-accent"}),T&&N.claimed&&n.jsx("div",{className:"completed-checkmark",children:"✓"}),n.jsxs("div",{className:"quest-content",children:[n.jsx("div",{className:`quest-icon-container ${c===N.id?"animating":""}`,children:N.icon}),n.jsxs("div",{className:"quest-details",children:[n.jsxs("div",{className:"quest-header",children:[n.jsx("span",{className:"quest-title",children:N.title}),n.jsx("span",{className:"difficulty-badge",style:{background:`${h(N.difficulty)}20`,color:h(N.difficulty)},children:N.difficulty})]}),n.jsxs("div",{className:"progress-info",children:[n.jsx("div",{className:"mini-progress-bar",children:n.jsx("div",{className:"mini-progress-fill",style:{width:`${E}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{className:"progress-numbers",children:[N.progress,"/",N.target]}),n.jsxs("span",{className:"reward-display",children:["🪙 ",N.reward]})]})]})]}),n.jsx("button",{onClick:()=>{T&&!N.claimed?v(N):T||j(N)},disabled:N.claimed,className:`action-button ${N.claimed?"claimed":T?"can-claim":"in-progress"}`,style:!T&&!N.claimed?{"--quest-color":N.color,"--quest-color-dark":S}:{},children:N.claimed?"✓":T?"Claim":"Do it"})]})]},N.id)})}),n.jsxs("div",{className:"timer-card",children:[n.jsx("div",{className:"timer-icon",children:"⏰"}),n.jsx("div",{className:"timer-label",children:"New Quests In"}),n.jsx("div",{className:"timer-value",children:x()})]}),c&&n.jsx("div",{className:"reward-animation",children:"🪙"})]})}function hc({title:e,subtitle:t,children:r}){const s=Ae();return n.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&n.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),n.jsx("div",{className:"w-[68px]"})]}),r]})}function Gv(){const e=Ae(),[t,r]=d.useState(!0),[s,a]=d.useState(!0),[i,o]=d.useState(!0),[l,c]=d.useState(!1),[u,f]=d.useState("");d.useEffect(()=>{const m=Je.getCurrentUser();m&&m.phone&&f(m.phone)},[]);const p=()=>{const b=JSON.parse(localStorage.getItem("currentUser")||"{}").phone;localStorage.removeItem("currentUser"),localStorage.removeItem("qp_player"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),b?e("/auth/signin",{replace:!0,state:{phone:b}}):e("/auth",{replace:!0})};return n.jsxs(n.Fragment,{children:[n.jsx(hc,{title:"Settings",subtitle:"Make it yours",children:n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-2",children:[n.jsx("div",{className:"px-4 pt-3 pb-1",children:n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Preferences"})}),n.jsxs("div",{className:"divide-y divide-white/10",children:[n.jsx(gr,{icon:"🔊",label:"Sound",subtitle:"Game sounds & effects",right:n.jsx(lo,{on:t,set:r})}),n.jsx(gr,{icon:"📳",label:"Haptics",subtitle:"Vibration feedback",right:n.jsx(lo,{on:s,set:a})}),n.jsx(gr,{icon:"🔔",label:"Notifications",subtitle:"Daily reminders",right:n.jsx(lo,{on:i,set:o})})]})]}),n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-2",children:[n.jsx("div",{className:"px-4 pt-3 pb-1",children:n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Account"})}),n.jsxs("div",{className:"divide-y divide-white/10",children:[n.jsx(gr,{icon:"📱",label:"Phone Number",subtitle:u||"Not available",right:n.jsx("span",{className:"text-white/40 text-sm",children:"🔒"})}),n.jsx(gr,{icon:"✏️",label:"Edit Profile",subtitle:"Update your details",right:n.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/edit")}),n.jsx(gr,{icon:"🔒",label:"Privacy Policy",subtitle:"Your data is safe",right:n.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/privacy")})]})]}),n.jsxs("button",{className:`w-full rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-900/30 to-pink-900/30 
                       py-4 text-red-300 font-semibold backdrop-blur-sm
                       transition-all duration-200 hover:from-red-900/40 hover:to-pink-900/40 
                       active:scale-[0.98] flex items-center justify-center gap-2`,onClick:()=>c(!0),children:[n.jsx("span",{children:"🚪"}),n.jsx("span",{children:"Sign Out"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:n.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-4 animate-bounce",children:"👋"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leaving Already?"}),n.jsx("p",{className:"text-white/60 text-sm",children:"You'll need to sign in again to continue your quiz journey"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>c(!1),className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Stay"}),n.jsx("button",{onClick:p,className:`flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 
                         hover:from-red-600 hover:to-pink-600 transition-all duration-200 
                         font-semibold text-white shadow-lg`,children:"Sign Out"})]})]})})]})}function gr({icon:e,label:t,subtitle:r,right:s,onClick:a}){return n.jsxs("button",{type:"button",onClick:a,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition-all duration-200`,children:[n.jsxs("div",{className:"flex items-center gap-3",children:[e&&n.jsx("span",{className:"text-xl",children:e}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-semibold text-white",children:t}),r&&n.jsx("div",{className:"text-xs text-white/50 mt-0.5",children:r})]})]}),s]})}function lo({on:e,set:t}){return n.jsx("span",{onClick:r=>{r.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-12 h-7 items-center rounded-full transition-all duration-300 px-1 shadow-inner",e?"bg-gradient-to-r from-green-400 to-emerald-500 justify-end":"bg-gray-600 justify-start"].join(" "),role:"switch","aria-checked":e,children:n.jsx("span",{className:["w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300",e?"scale-110":"scale-100"].join(" ")})})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var Qr;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(Qr||(Qr={}));class co extends Error{constructor(t,r,s){super(t),this.message=t,this.code=r,this.data=s}}const Kv=e=>{var t,r;return e!=null&&e.androidBridge?"android":!((r=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||r===void 0)&&r.bridge?"ios":"web"},Vv=e=>{const t=e.CapacitorCustomPlatform||null,r=e.Capacitor||{},s=r.Plugins=r.Plugins||{},a=()=>t!==null?t.name:Kv(e),i=()=>a()!=="web",o=p=>{const m=u.get(p);return!!(m!=null&&m.platforms.has(a())||l(p))},l=p=>{var m;return(m=r.PluginHeaders)===null||m===void 0?void 0:m.find(b=>b.name===p)},c=p=>e.console.error(p),u=new Map,f=(p,m={})=>{const b=u.get(p);if(b)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),b.proxy;const y=a(),j=l(p);let C;const v=async()=>(!C&&y in m?C=typeof m[y]=="function"?C=await m[y]():C=m[y]:t!==null&&!C&&"web"in m&&(C=typeof m.web=="function"?C=await m.web():C=m.web),C),h=(g,w)=>{var k,P;if(j){const A=j==null?void 0:j.methods.find(U=>w===U.name);if(A)return A.rtype==="promise"?U=>r.nativePromise(p,w.toString(),U):(U,G)=>r.nativeCallback(p,w.toString(),U,G);if(g)return(k=g[w])===null||k===void 0?void 0:k.bind(g)}else{if(g)return(P=g[w])===null||P===void 0?void 0:P.bind(g);throw new co(`"${p}" plugin is not implemented on ${y}`,Qr.Unimplemented)}},x=g=>{let w;const k=(...P)=>{const A=v().then(U=>{const G=h(U,g);if(G){const q=G(...P);return w=q==null?void 0:q.remove,q}else throw new co(`"${p}.${g}()" is not implemented on ${y}`,Qr.Unimplemented)});return g==="addListener"&&(A.remove=async()=>w()),A};return k.toString=()=>`${g.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:g,writable:!1,configurable:!1}),k},N=x("addListener"),E=x("removeListener"),T=(g,w)=>{const k=N({eventName:g},w),P=async()=>{const U=await k;E({eventName:g,callbackId:U},w)},A=new Promise(U=>k.then(()=>U({remove:P})));return A.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await P()},A},S=new Proxy({},{get(g,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return j?T:N;case"removeListener":return E;default:return x(w)}}});return s[p]=S,u.set(p,{name:p,proxy:S,platforms:new Set([...Object.keys(m),...j?[y]:[]])}),S};return r.convertFileSrc||(r.convertFileSrc=p=>p),r.getPlatform=a,r.handleError=c,r.isNativePlatform=i,r.isPluginAvailable=o,r.registerPlugin=f,r.Exception=co,r.DEBUG=!!r.DEBUG,r.isLoggingEnabled=!!r.isLoggingEnabled,r},Xv=e=>e.Capacitor=Vv(e),ll=Xv(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),pc=ll.registerPlugin;class Om{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,r){let s=!1;this.listeners[t]||(this.listeners[t]=[],s=!0),this.listeners[t].push(r);const i=this.windowListeners[t];i&&!i.registered&&this.addWindowListener(i),s&&this.sendRetainedArgumentsForEvent(t);const o=async()=>this.removeListener(t,r);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,r,s){const a=this.listeners[t];if(!a){if(s){let i=this.retainedEventArguments[t];i||(i=[]),i.push(r),this.retainedEventArguments[t]=i}return}a.forEach(i=>i(r))}hasListeners(t){var r;return!!(!((r=this.listeners[t])===null||r===void 0)&&r.length)}registerWindowListener(t,r){this.windowListeners[r]={registered:!1,windowEventName:t,pluginEventName:r,handler:s=>{this.notifyListeners(r,s)}}}unimplemented(t="not implemented"){return new ll.Exception(t,Qr.Unimplemented)}unavailable(t="not available"){return new ll.Exception(t,Qr.Unavailable)}async removeListener(t,r){const s=this.listeners[t];if(!s)return;const a=s.indexOf(r);this.listeners[t].splice(a,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const r=this.retainedEventArguments[t];r&&(delete this.retainedEventArguments[t],r.forEach(s=>{this.notifyListeners(t,s)}))}}const Kd=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Vd=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Jv extends Om{async getCookies(){const t=document.cookie,r={};return t.split(";").forEach(s=>{if(s.length<=0)return;let[a,i]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=Vd(a).trim(),i=Vd(i).trim(),r[a]=i}),r}async setCookie(t){try{const r=Kd(t.key),s=Kd(t.value),a=`; expires=${(t.expires||"").replace("expires=","")}`,i=(t.path||"/").replace("path=",""),o=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${r}=${s||""}${a}; path=${i}; ${o};`}catch(r){return Promise.reject(r)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(r){return Promise.reject(r)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const r of t)document.cookie=r.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}pc("CapacitorCookies",{web:()=>new Jv});const Zv=async e=>new Promise((t,r)=>{const s=new FileReader;s.onload=()=>{const a=s.result;t(a.indexOf(",")>=0?a.split(",")[1]:a)},s.onerror=a=>r(a),s.readAsDataURL(e)}),ey=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(a=>a.toLocaleLowerCase()).reduce((a,i,o)=>(a[i]=e[t[o]],a),{})},ty=(e,t=!0)=>e?Object.entries(e).reduce((s,a)=>{const[i,o]=a;let l,c;return Array.isArray(o)?(c="",o.forEach(u=>{l=t?encodeURIComponent(u):u,c+=`${i}=${l}&`}),c.slice(0,-1)):(l=t?encodeURIComponent(o):o,c=`${i}=${l}`),`${s}&${c}`},"").substr(1):null,ny=(e,t={})=>{const r=Object.assign({method:e.method||"GET",headers:e.headers},t),a=ey(e.headers)["content-type"]||"";if(typeof e.data=="string")r.body=e.data;else if(a.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[o,l]of Object.entries(e.data||{}))i.set(o,l);r.body=i.toString()}else if(a.includes("multipart/form-data")||e.data instanceof FormData){const i=new FormData;if(e.data instanceof FormData)e.data.forEach((l,c)=>{i.append(c,l)});else for(const l of Object.keys(e.data))i.append(l,e.data[l]);r.body=i;const o=new Headers(r.headers);o.delete("content-type"),r.headers=o}else(a.includes("application/json")||typeof e.data=="object")&&(r.body=JSON.stringify(e.data));return r};class ry extends Om{async request(t){const r=ny(t,t.webFetchExtra),s=ty(t.params,t.shouldEncodeUrlParams),a=s?`${t.url}?${s}`:t.url,i=await fetch(a,r),o=i.headers.get("content-type")||"";let{responseType:l="text"}=i.ok?t:{};o.includes("application/json")&&(l="json");let c,u;switch(l){case"arraybuffer":case"blob":u=await i.blob(),c=await Zv(u);break;case"json":c=await i.json();break;case"document":case"text":default:c=await i.text()}const f={};return i.headers.forEach((p,m)=>{f[m]=p}),{data:c,headers:f,status:i.status,url:i.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}pc("CapacitorHttp",{web:()=>new ry});const Xd=pc("App",{web:()=>rc(()=>import("./web-673e5f34.js"),[]).then(e=>new e.AppWeb)});function sy(){const e=Ae(),[t,r]=d.useState(!1),[s,a]=d.useState(!1),[i,o]=d.useState(!1),[l,c]=d.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""}),[u,f]=d.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""});d.useEffect(()=>{const j=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!j.phone){const N=JSON.parse(localStorage.getItem("users")||"{}"),E=Object.keys(N).find(T=>N[T].username===j.username);if(E)j.phone=E,localStorage.setItem("currentUser",JSON.stringify(j));else{e("/profile");return}}const C=Je.getUserData(j.phone);C.password;const v=JSON.parse(localStorage.getItem(`user_profile_${j.phone}`)||"{}"),h=N=>N?N.charAt(0).toUpperCase()+N.slice(1).toLowerCase():"",x={name:v.name||j.username||C.username||"",phone:j.phone||"",gender:h(v.gender||j.gender||C.gender||""),ageGroup:v.ageGroup||j.ageGroup||C.ageGroup||"",city:v.city||"",email:v.email||"",state:v.state||"",country:v.country||""};c(x),f(x)},[e]),d.useEffect(()=>{if(t){const j=JSON.stringify(l)!==JSON.stringify(u);o(j)}},[u,l,t]);const p=()=>{r(!0),f({...l}),o(!1)},m=()=>{r(!1),f({...l}),o(!1)},b=()=>{const j=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!j.phone)return;Je.updateUserProfile(j.phone,u)&&(c({...u}),r(!1),o(!1),a(!0),setTimeout(()=>a(!1),3e3))},y=(j,C)=>{f(v=>({...v,[j]:C}))};return n.jsxs(hc,{title:"Edit Profile",subtitle:"Update your information",children:[s&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsx("div",{className:"bg-green-500/20 border border-green-500/50 rounded-2xl px-8 py-4 backdrop-blur-sm animate-bounce",children:n.jsxs("div",{className:"flex items-center gap-2 text-green-400 font-semibold text-lg",children:[n.jsx("span",{children:"Profile updated"}),n.jsx("span",{className:"text-2xl",children:"✓"})]})})}),n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-4",children:[n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Basic Information"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(Pn,{label:"Name",value:t?u.name:l.name,onChange:j=>y("name",j),placeholder:"Your full name",disabled:!t}),n.jsx(Pn,{label:"Phone",value:l.phone,disabled:!0,icon:"🔒",helperText:"Cannot be changed"}),n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[t?n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Gender"}),n.jsxs("select",{value:u.gender||"",onChange:j=>y("gender",j.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[n.jsx("option",{value:"",children:"Not set"}),n.jsx("option",{value:"Male",children:"Male"}),n.jsx("option",{value:"Female",children:"Female"}),n.jsx("option",{value:"Other",children:"Other"})]})]}):n.jsx(Pn,{label:"Gender",value:l.gender||"Not set",disabled:!0}),t?n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Age Group"}),n.jsxs("select",{value:u.ageGroup||"",onChange:j=>y("ageGroup",j.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[n.jsx("option",{value:"",children:"Not set"}),n.jsx("option",{value:"under-5",children:"Under 5 yrs"}),n.jsx("option",{value:"5-10",children:"5-10 yrs"}),n.jsx("option",{value:"11-15",children:"11-15 yrs"}),n.jsx("option",{value:"16-20",children:"16-20 yrs"}),n.jsx("option",{value:"20+",children:"20+ yrs"})]})]}):n.jsx(Pn,{label:"Age Group",value:l.ageGroup||"Not set",disabled:!0})]})]})]}),n.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-4",children:[n.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Contact & Location"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx(Pn,{label:"Email",value:t?u.email:l.email,onChange:j=>y("email",j),placeholder:"yourname@example.com",type:"email",helperText:t?"Optional":l.email?"":"Not provided",disabled:!t}),n.jsx(Pn,{label:"City",value:t?u.city:l.city,onChange:j=>y("city",j),placeholder:"Add your city name",disabled:!t}),n.jsx(Pn,{label:"State",value:t?u.state:l.state,onChange:j=>y("state",j),placeholder:"Your state/province",disabled:!t}),n.jsx(Pn,{label:"Country",value:t?u.country:l.country,onChange:j=>y("country",j),placeholder:"Your country",disabled:!t})]})]}),t?n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:m,className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Cancel"}),n.jsx("button",{onClick:b,disabled:!i,className:`flex-1 py-3 rounded-2xl font-semibold text-white shadow-lg
                         transition-all duration-200 ${i?"bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 cursor-pointer":"bg-gray-600 cursor-not-allowed opacity-50"}`,children:"Save Changes"})]}):n.jsx("button",{onClick:p,className:`w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Edit"})]})})]})}function Pn({label:e,value:t,onChange:r,disabled:s,placeholder:a,type:i="text",icon:o,helperText:l}){return n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:e}),n.jsxs("div",{className:"relative",children:[n.jsx("input",{type:i,value:t||"",onChange:c=>r&&r(c.target.value),disabled:s,placeholder:a,className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                   text-white placeholder-white/30 transition-all duration-200
                   ${s?"opacity-50 cursor-not-allowed":"hover:bg-white/10 focus:bg-white/10 focus:border-white/30 focus:outline-none"}`}),o&&n.jsx("span",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/50",children:o})]}),l&&n.jsx("p",{className:"text-xs text-white/40 mt-1",children:l})]})}function ay(){const e=Ae();return n.jsx(hc,{title:"Privacy Policy",subtitle:"Your data, your control",children:n.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:n.jsx("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-8",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🔒"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Privacy Policy"}),n.jsx("p",{className:"text-white/60 text-lg mb-6",children:"Will be updated soon"}),n.jsxs("div",{className:"space-y-3 text-left text-white/50 text-sm",children:[n.jsx("p",{children:"• Your data is encrypted and secure"}),n.jsx("p",{children:"• We never share your personal information"}),n.jsx("p",{children:"• You can delete your account anytime"}),n.jsx("p",{children:"• Minimal data collection for best experience"})]}),n.jsx("button",{onClick:()=>e(-1),className:`mt-8 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Got it"})]})})})})}const iy=async e=>!!JSON.parse(localStorage.getItem("users")||"{}")[e],oy=e=>JSON.parse(localStorage.getItem("users")||"{}")[e],ly=()=>!!localStorage.getItem("currentUser");function cy(){const e=Ae(),t=rt(),[r,s]=d.useState(()=>{var p;return sessionStorage.getItem("tempPhone")||((p=t.state)==null?void 0:p.phone)||""}),[a,i]=d.useState(()=>sessionStorage.getItem("tempCountryCode")||"+91"),[o,l]=d.useState(!1),[c,u]=d.useState("");d.useEffect(()=>{sessionStorage.setItem("tempPhone",r),sessionStorage.setItem("tempCountryCode",a)},[r,a]);const f=async()=>{u("");const p=r.replace(/\D/g,"");if(p.length!==10){u("Please enter a 10 digit phone number");return}l(!0);const m=a+p;await iy(m)?e("/auth/signin",{state:{phone:m}}):e("/auth/avatar",{state:{phone:m}}),l(!1)};return d.useEffect(()=>{var p,m;if(!((p=t.state)!=null&&p.preventAutoSubmit)&&!((m=t.state)!=null&&m.fromAvatar)&&r&&r.length===10){const b=setTimeout(()=>{f()},500);return()=>clearTimeout(b)}},[]),n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #aa529bff 0%, #6d4397ff 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"5%",left:"10%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"15%",right:"10%",animationDelay:"5s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",left:"15%",animationDelay:"10s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"75%",right:"20%",animationDelay:"15s"},children:"🎯"}),n.jsx("div",{className:"floating-icon",style:{top:"85%",left:"25%",animationDelay:"20s"},children:"🪙"})]}),n.jsx("div",{className:"mascot",style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:n.jsx("div",{style:{fontSize:"100px"},children:"🎮"})}),n.jsxs("div",{className:"content-card",children:[n.jsx("h1",{className:"title",children:"Ready to Play?"}),n.jsx("p",{className:"subtitle",children:"Enter your phone to start!"}),n.jsxs("div",{className:"phone-input-group",style:{display:"flex",gap:"8px",marginBottom:"24px",alignItems:"center",justifyContent:"center"},children:[n.jsxs("select",{className:"country-select",value:a,onChange:p=>i(p.target.value),style:{width:"auto",minWidth:"95px",padding:"16px 8px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",background:"white",transition:"all 0.3s",color:"#333",textAlign:"center"},children:[n.jsx("option",{value:"+91",children:"🇮🇳 +91"}),n.jsx("option",{value:"+1",children:"🇺🇸 +1"}),n.jsx("option",{value:"+44",children:"🇬🇧 +44"}),n.jsx("option",{value:"+86",children:"🇨🇳 +86"}),n.jsx("option",{value:"+81",children:"🇯🇵 +81"})]}),n.jsx("input",{type:"tel",className:"phone-input",placeholder:"Phone number",value:r,onChange:p=>{const m=p.target.value.replace(/\D/g,"");m.length<=10&&(s(m),c&&u(""))},maxLength:"10",inputMode:"numeric",pattern:"[0-9]*",style:{flex:1,padding:"16px",paddingLeft:"12px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"18px",fontWeight:"600",transition:"all 0.3s",background:"white",color:"#333",WebkitTextFillColor:"#333"}})]}),r.length>0&&r.length<10&&n.jsxs("p",{style:{color:"#f59e0b",fontSize:"14px",textAlign:"center",marginTop:"-16px",marginBottom:"16px"},children:["Enter ",10-r.length," more digit",10-r.length>1?"s":""]}),n.jsxs("button",{className:"submit-button",onClick:f,disabled:o,style:{width:"100%",padding:"18px",background:r.length===10?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:r.length===10?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[o?"Loading...":"Start Adventure!",n.jsx("span",{children:"→"})]}),c&&n.jsx("p",{className:"error-message",style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginTop:"12px",fontWeight:"600"},children:c})]})]})}function dy(){const e=rt(),t=Ae(),{phone:r}=e.state||{},[s,a]=d.useState(""),[i,o]=d.useState(!1),[l,c]=d.useState(""),[u,f]=d.useState(!1),[p,m]=d.useState(!1),[b,y]=d.useState(""),j=oy(r),[C,v]=d.useState(!1),[h,x]=d.useState(""),[N,E]=d.useState(!1);d.useEffect(()=>{if(localStorage.getItem("rememberCredentials")==="true"&&m(!0),r){const A=JSON.parse(localStorage.getItem(`user_profile_${r}`)||"{}"),G=JSON.parse(localStorage.getItem("users")||"{}")[r]||{},q=A.name||G.username||(j==null?void 0:j.username)||"";y(q)}},[r,j]);const T=async()=>{if(!s){c("Please enter your password");return}f(!0),c(""),await new Promise(P=>setTimeout(P,500)),j&&j.password===s?(Je.setCurrentUser(r),p&&localStorage.setItem("rememberCredentials","true"),t("/",{replace:!0})):(c("Wrong password"),f(!1),setTimeout(()=>c(""),3e3))},S=()=>{alert("OTP feature coming soon!")},g=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode");const P=(r==null?void 0:r.slice(-10))||"";t("/auth",{replace:!0,state:{phone:P,preventAutoSubmit:!0}})},w=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode"),t("/auth",{replace:!0,state:{isNewAccount:!0}})},k=P=>{P.key==="Enter"&&T()};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[n.jsx("button",{className:"back-button",onClick:g,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:P=>P.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:P=>P.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"decorative-icons",children:[n.jsx("div",{className:"floating-icon",style:{top:"10%",left:"5%",animationDelay:"0s"},children:"🎮"}),n.jsx("div",{className:"floating-icon",style:{top:"20%",right:"10%",animationDelay:"2s"},children:"🏆"}),n.jsx("div",{className:"floating-icon",style:{top:"70%",left:"8%",animationDelay:"4s"},children:"⭐"}),n.jsx("div",{className:"floating-icon",style:{top:"80%",right:"5%",animationDelay:"6s"},children:"🎯"})]}),n.jsxs("div",{className:"content-card",style:{background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"32px",width:"90%",maxWidth:"400px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)",margin:"0 auto"},children:[(j==null?void 0:j.avatar)&&n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px",animation:"bounce 2s infinite"},children:j.avatar.emoji}),n.jsxs("div",{className:"welcome-back",children:[n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Welcome Back! 👋"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"24px"},children:b?`Hey ${b}!`:"Good to see you again!"})]}),n.jsx("div",{className:"phone-display",style:{fontSize:"18px",fontWeight:"600",color:"#667eea",marginBottom:"24px",textAlign:"center",padding:"12px",background:"rgba(102, 126, 234, 0.1)",borderRadius:"12px"},children:r}),n.jsxs("div",{style:{position:"relative",marginBottom:"16px"},children:[n.jsx("input",{type:i?"text":"password",className:"phone-input",placeholder:"Enter your password",value:s,onChange:P=>{a(P.target.value),l&&c("")},onKeyPress:k,style:{width:"100%",paddingRight:"45px",border:l?"2px solid #ef4444":"2px solid #e2e8f0",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"},autoFocus:!0}),n.jsx("button",{type:"button",onClick:()=>o(!i),style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px",color:"#667eea"},"aria-label":i?"Hide password":"Show password",children:i?"👁️":"👁️‍🗨️"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[n.jsx("input",{type:"checkbox",id:"rememberMe",checked:p,onChange:P=>m(P.target.checked),style:{width:"18px",height:"18px",cursor:"pointer",accentColor:"#667eea"}}),n.jsx("label",{htmlFor:"rememberMe",style:{fontSize:"14px",color:"#64748b",cursor:"pointer",userSelect:"none"},children:"Remember me"})]}),l&&n.jsxs("div",{style:{color:"#f59e0b",fontSize:"13px",textAlign:"center",marginTop:"-12px",marginBottom:"16px",fontWeight:"500"},children:["⚠️ ",l]}),n.jsx("button",{className:"submit-button",onClick:T,disabled:u,style:{width:"100%",padding:"18px",background:u?"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:u?"not-allowed":"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"20px"},children:u?n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Signing in..."}),n.jsx("span",{className:"animate-spin",children:"⚙️"})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{children:"Sign In"}),n.jsx("span",{children:"🎮"})]})}),n.jsx("div",{className:"divider",style:{textAlign:"center",margin:"20px 0",position:"relative"},children:n.jsx("span",{className:"divider-text",style:{background:"rgba(255, 255, 255, 0.95)",padding:"0 16px",position:"relative",color:"#94a3b8",fontSize:"14px"},children:"OR"})}),n.jsx("button",{className:"otp-button",onClick:S,style:{width:"100%",padding:"16px",background:"white",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",color:"#667eea",cursor:"pointer",transition:"all 0.3s",marginBottom:"12px"},onMouseEnter:P=>{P.currentTarget.style.background="rgba(102, 126, 234, 0.05)",P.currentTarget.style.borderColor="#667eea"},onMouseLeave:P=>{P.currentTarget.style.background="white",P.currentTarget.style.borderColor="#e2e8f0"},children:"Send OTP Instead"}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px",paddingTop:"20px",borderTop:"1px solid #e2e8f0"},children:[n.jsx("a",{href:"#",onClick:P=>{P.preventDefault(),v(!0)},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Forgot password?"}),n.jsx("a",{href:"#",onClick:P=>{P.preventDefault(),w()},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Create new account"})]})]}),C&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:n.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🔐"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Reset Password"}),n.jsx("p",{className:"text-white/60 text-sm",children:"Enter your new password"})]}),n.jsxs("div",{className:"relative mb-4",children:[n.jsx("input",{type:i?"text":"password",value:h,onChange:P=>x(P.target.value),placeholder:"New password (min 6 characters)",className:`w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 
                        text-white placeholder-white/50`,autoFocus:!0}),n.jsx("button",{type:"button",onClick:()=>o(!i),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white",style:{background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px"},children:i?"👁️":"👁️‍🗨️"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{v(!1),x("")},className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Cancel"}),n.jsx("button",{onClick:()=>{if(h.length>=6){const P=JSON.parse(localStorage.getItem("users")||"{}");P[r]&&(P[r].password=h,localStorage.setItem("users",JSON.stringify(P)),v(!1),x(""),a(h),E(!0),setTimeout(()=>E(!1),2e3))}else alert("Password must be at least 6 characters")},className:`flex-1 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 
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
      `})]})}function uy(){const e=rt(),t=Ae(),{phone:r}=e.state||{},[s,a]=d.useState(()=>{var c;if((c=e.state)!=null&&c.avatar)return e.state.avatar;const l=sessionStorage.getItem("tempAvatar");return l?JSON.parse(l):null}),i=[{id:1,emoji:"🤖",name:"Robot",color:"#667eea"},{id:2,emoji:"🦄",name:"Unicorn",color:"#ec4899"},{id:3,emoji:"🐉",name:"Dragon",color:"#10b981"},{id:4,emoji:"🧙",name:"Wizard",color:"#8b5cf6"},{id:5,emoji:"👨‍🚀",name:"Astronaut",color:"#3b82f6"},{id:6,emoji:"🥷",name:"Ninja",color:"#1f2937"}];d.useEffect(()=>{s&&sessionStorage.setItem("tempAvatar",JSON.stringify(s))},[s]);const o=()=>{s&&t("/auth/username",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #1e3a8a 0%, #3730a3 35%, #6d28d9 70%, #a78bfa 100%)"},children:[n.jsx("button",{className:"back-button",onClick:()=>t("/auth",{state:{phone:r==null?void 0:r.replace(/^\+\d{1,3}/,""),fromAvatar:!0}}),style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.15)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:l=>l.target.style.background="rgba(255,255,255,0.25)",onMouseLeave:l=>l.target.style.background="rgba(255,255,255,0.15)",children:n.jsx("span",{style:{fontSize:"24px",color:"rgba(194, 128, 190, 0.9)"},children:"‹"})}),n.jsxs("div",{className:"content-card",style:{background:"rgba(248, 250, 252, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"24px 20px",width:"95%",maxWidth:"100%",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)"},children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot active",style:{background:"#3730a3"}}),n.jsx("div",{className:"dot",style:{background:"#bf89ceff"}})]}),n.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #1e3a8a 0%, #6d28d9 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Pick Your Hero!"}),n.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"32px"},children:"Choose your quiz champion"}),n.jsx("div",{className:"avatar-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px",marginBottom:"32px",padding:"0",maxWidth:"500px",margin:"0 auto 32px auto"},children:i.map(l=>n.jsxs("div",{className:`avatar-card ${(s==null?void 0:s.id)===l.id?"selected":""}`,onClick:()=>a(l),style:{aspectRatio:"1",borderRadius:"20px",background:(s==null?void 0:s.id)===l.id?"linear-gradient(135deg, rgba(55, 48, 163, 0.1), rgba(109, 40, 217, 0.1))":"white",border:(s==null?void 0:s.id)===l.id?"3px solid #3730a3":"3px solid transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.3s",boxShadow:(s==null?void 0:s.id)===l.id?"0 4px 20px rgba(55, 48, 163, 0.2)":"0 2px 10px rgba(0, 0, 0, 0.05)",transform:(s==null?void 0:s.id)===l.id?"scale(1.05)":"scale(1)"},onMouseEnter:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1.05)",c.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.15)")},onMouseLeave:c=>{(s==null?void 0:s.id)!==l.id&&(c.currentTarget.style.transform="scale(1)",c.currentTarget.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.05)")},children:[n.jsx("div",{className:"avatar-emoji",style:{fontSize:"40px",marginBottom:"8px"},children:l.emoji}),n.jsx("div",{className:"avatar-name",style:{fontSize:"14px",fontWeight:"600",color:(s==null?void 0:s.id)===l.id?"#3730a3":"#64748b"},children:l.name})]},l.id))}),n.jsxs("button",{className:"submit-button",disabled:!s,onClick:o,style:{width:"100%",padding:"18px",background:s?"linear-gradient(135deg, #3730a3 0%, #6d28d9 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:s?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",boxShadow:s?"0 4px 20px rgba(55, 48, 163, 0.3)":"none"},onMouseEnter:l=>{s&&(l.currentTarget.style.transform="translateY(-2px)",l.currentTarget.style.boxShadow="0 6px 30px rgba(55, 48, 163, 0.4)")},onMouseLeave:l=>{s&&(l.currentTarget.style.transform="translateY(0)",l.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.3)")},children:["Continue",n.jsx("span",{children:"→"})]})]})]})}function fy(){const e=rt(),t=Ae(),{phone:r,avatar:s}=e.state||{},[a,i]=d.useState(""),[o,l]=d.useState(""),[c,u]=d.useState(""),[f,p]=d.useState(""),[m,b]=d.useState(""),y=[{value:"under-5",label:"Under 5 yrs"},{value:"5-10",label:"5-10 yrs"},{value:"11-15",label:"11-15 yrs"},{value:"16-20",label:"16-20 yrs"},{value:"20+",label:"20+ yrs"}],j=()=>{if(b(""),!a){b("Please enter your name");return}if(!o||o.length<6){b("Password must be at least 6 characters");return}if(!c){b("Please select your gender");return}if(!f){b("Please select your age group");return}const v=o||"123456",h=JSON.parse(localStorage.getItem("users")||"{}");h[r]={username:a,gender:c,ageGroup:f,avatar:s,password:v,phone:r,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(h)),localStorage.setItem("currentUser",JSON.stringify({phone:r,username:a,gender:c,ageGroup:f,avatar:s}));const x={name:a,level:1,coins:0,currentStreak:0,xp:0};localStorage.setItem("qp_player",JSON.stringify(x)),localStorage.setItem("userName",a),t("/welcome",{state:{username:a},replace:!0})},C=()=>{t("/auth/avatar",{state:{phone:r,avatar:s}})};return n.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #6b46c1 0%, #9333ea 50%, #ec4899 100%)"},children:[n.jsx("button",{className:"back-button",onClick:C,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:v=>v.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:v=>v.target.style.background="rgba(255,255,255,0.2)",children:n.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),n.jsxs("div",{className:"content-card",children:[n.jsxs("div",{className:"progress-dots",children:[n.jsx("div",{className:"dot"}),n.jsx("div",{className:"dot active",style:{background:"#9333ea"}})]}),n.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px"},children:s==null?void 0:s.emoji}),n.jsx("h1",{className:"title",style:{background:"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Almost Done!"}),n.jsx("p",{className:"subtitle",children:"Tell us about yourself"}),n.jsxs("div",{style:{marginBottom:"24px"},children:[n.jsx("input",{type:"text",className:"phone-input",placeholder:"Enter your name...",value:a,onChange:v=>i(v.target.value),style:{width:"100%",marginBottom:"20px",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"}}),n.jsx("input",{type:"password",className:"phone-input",placeholder:"Create a password...",value:o,onChange:v=>l(v.target.value),style:{width:"100%",marginBottom:"20px",marginTop:"10px"}}),n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Gender"}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx("button",{onClick:()=>u("male"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="male"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="male"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="male"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👦 Male"}),n.jsx("button",{onClick:()=>u("female"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="female"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="female"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="female"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👧 Female"}),n.jsx("button",{onClick:()=>u("other"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:c==="other"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:c==="other"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:c==="other"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"🌈 Other"})]})]}),n.jsxs("div",{style:{marginBottom:"20px"},children:[n.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Age Group"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px"},children:y.map(v=>n.jsx("button",{onClick:()=>p(v.value),style:{padding:"10px 4px",border:"2px solid",borderColor:f===v.value?"#9333ea":"#e9d5ff",borderRadius:"12px",background:f===v.value?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:f===v.value?"#9333ea":"#64748b",transition:"all 0.3s"},children:v.label},v.value))})]}),m&&n.jsx("div",{style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginBottom:"16px"},children:m})]}),n.jsx("button",{className:"submit-button",onClick:j,disabled:!a||!c||!f,style:{width:"100%",padding:"18px",background:a&&c&&f?"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:a&&c&&f?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:"Let's Start! 🚀"})]})]})}function my(){var p;const e=Ae(),t=rt(),[r,s]=d.useState(!1),[a,i]=d.useState(!1),[o,l]=d.useState(!1),c=((p=t.state)==null?void 0:p.username)||localStorage.getItem("userName")||"Champion",u=c.length>12;d.useEffect(()=>{sessionStorage.setItem("justSignedUp","true"),setTimeout(()=>s(!0),100),setTimeout(()=>i(!0),2e3)},[]);const f=()=>{l(!0),setTimeout(()=>{e("/",{replace:!0})},350)};return n.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity",style:{background:"radial-gradient(circle at center, #1a1a2e 0%, #0f0f0f 100%)",opacity:o?.3:1,transitionDuration:"400ms"},children:[n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(147, 51, 234, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out infinite"}}),n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(236, 72, 153, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 0.5s infinite"}}),n.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 1s infinite"}}),n.jsx("div",{className:"absolute",style:{width:"80px",height:"80px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(147, 51, 234, 0.4))",boxShadow:"0 0 60px 20px rgba(147, 51, 234, 0.6)",animation:"glow 2s ease-in-out infinite"}})]}),n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:[...Array(12)].map((m,b)=>n.jsx("div",{className:"absolute",style:{width:"2px",height:"100%",background:"linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.3), transparent)",transform:`rotate(${b*30}deg)`,animation:`fadeInOut 2.5s ease-in-out ${b*.1}s infinite`}},b))}),n.jsx("div",{className:`absolute z-10 transition-all duration-1000
        ${r?"opacity-100":"opacity-0"}`,style:{top:"calc(50% - 200px)",left:"50%",transform:"translateX(-50%)",textAlign:"center",width:"90%",maxWidth:"500px"},children:n.jsxs("h1",{style:{color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif",letterSpacing:"1px",textShadow:"0 0 30px rgba(147, 51, 234, 0.5)",animation:"fadeInUp 1s ease-out forwards",margin:0},children:[n.jsx("div",{style:{fontSize:"48px",fontWeight:"bold",marginBottom:u?"-5px":"-10px"},children:"Welcome"}),n.jsx("div",{style:{fontSize:"48px",fontWeight:"bold",wordWrap:"break-word",overflowWrap:"break-word",lineHeight:u?"1.2":"1.1",padding:"0 20px",marginTop:u?"5px":"0"},children:c})]})}),a&&n.jsx("div",{className:"absolute z-10",style:{bottom:"250px",left:"50%",transform:"translateX(-50%)"},children:n.jsxs("button",{onClick:f,className:"welcome-start-button",style:{background:"linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",color:"white",padding:"18px 40px",borderRadius:"50px",fontSize:"20px",fontWeight:"bold",border:"none",cursor:"pointer",transform:"scale(1)",transition:"all 0.3s ease",display:"inline-flex",alignItems:"center",gap:"12px",boxShadow:"0 4px 30px rgba(147, 51, 234, 0.4)",animation:"slideUp 0.5s ease-out forwards",whiteSpace:"nowrap"},onMouseEnter:m=>{m.currentTarget.style.transform="scale(1.05)",m.currentTarget.style.boxShadow="0 6px 40px rgba(147, 51, 234, 0.6)"},onMouseLeave:m=>{m.currentTarget.style.transform="scale(1)",m.currentTarget.style.boxShadow="0 4px 30px rgba(147, 51, 234, 0.4)"},children:["Let's Learn ",n.jsx("span",{style:{fontSize:"24px"},children:"🚀"})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function hy(){return d.useState(!1),null}const py={name:(()=>{const e=JSON.parse(localStorage.getItem("currentUser")||"{}");return e.username?e.username.split(" ")[0]:"Player"})(),avatar:"wizard",level:1,totalXP:0,energy:ht.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function xy(){const[e,t]=d.useState(()=>{const u=localStorage.getItem(ht.STORAGE_KEYS.PLAYER),f=JSON.parse(localStorage.getItem("currentUser")||"{}");if(u){const p=JSON.parse(u);return f.username&&(p.name=f.username.split(" ")[0]),p}return py});d.useEffect(()=>{localStorage.setItem(ht.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<ht.MAX_ENERGY&&e.energyRegenAt){const u=setInterval(()=>{const f=Date.now();f>=e.energyRegenAt&&t(p=>({...p,energy:Math.min(p.energy+1,ht.MAX_ENERGY),energyRegenAt:p.energy+1<ht.MAX_ENERGY?f+ht.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(u)}},[e.energy,e.energyRegenAt]);const r=d.useCallback(u=>{t(f=>{const p=f.totalXP+u,m=_d(f.totalXP),b=_d(p);let y=[...f.unlockedAvatars];return b>m&&ht.AVATARS.forEach(j=>{j.unlockLevel===b&&!y.includes(j.id)&&y.push(j.id)}),{...f,totalXP:p,level:b,unlockedAvatars:y}})},[]),s=d.useCallback(u=>{console.log("[DEPRECATED] addCoins called with:",u)},[]),a=d.useCallback((u=1)=>e.energy<u?!1:(t(f=>({...f,energy:f.energy-u,energyRegenAt:f.energyRegenAt||Date.now()+ht.ENERGY_REGEN_TIME})),!0),[e.energy]),i=d.useCallback(u=>{t(f=>{const p=u?f.comboStreak+1:0;return{...f,comboStreak:p,bestCombo:Math.max(f.bestCombo,p)}})},[]),o=d.useCallback(()=>{t(u=>({...u,comboStreak:0}))},[]),l=d.useCallback(u=>{e.unlockedAvatars.includes(u)&&t(f=>({...f,avatar:u}))},[e.unlockedAvatars]),c=d.useCallback(()=>{const u=new Date().toDateString();t(f=>{if(f.lastPlayedDate===u)return f;const p=new Date;p.setDate(p.getDate()-1);const m=p.toDateString();let b=f.currentStreak;return f.lastPlayedDate===m?b=f.currentStreak+1:(f.lastPlayedDate,b=1),{...f,currentStreak:b,bestStreak:Math.max(f.bestStreak,b),totalDays:f.totalDays+1,lastPlayedDate:u}})},[]);return{player:e,addXP:r,addCoins:s,useEnergy:a,updateCombo:i,resetCombo:o,changeAvatar:l,updateDailyStreak:c,levelProgress:Zx(e.totalXP)}}window.history.replaceState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.history.pushState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.userService=Je;const Fm=d.createContext(null),Nn=()=>{const e=d.useContext(Fm);if(!e)throw new Error("useGame must be used within GameProvider");return e};function gy({children:e}){const t=xy(),r=Ti(),s={...t,coins:r.coins,xp:r.xp,level:r.level,recordQuizComplete:r.recordQuizComplete,recordPracticeComplete:r.recordPracticeComplete,getTodaySummary:r.getTodaySummary};return n.jsx(Fm.Provider,{value:s,children:e})}function vy(){const[e,t]=d.useState(!1),[r,s]=d.useState(!1);return d.useEffect(()=>{(()=>{const i=ly();s(i),t(!0)})()},[]),d.useEffect(()=>{let a=0,i=null,o=null;return(async()=>{try{o=await Xd.addListener("backButton",()=>{const c=window.location.pathname;c==="/"||c==="/home"?(a++,a===1?(console.log("Press back again to exit"),i=setTimeout(()=>{a=0},2e3)):a===2&&(clearTimeout(i),Xd.minimizeApp())):window.history.back()})}catch(c){console.error("Error setting up back button handler:",c)}})(),()=>{o&&typeof o.remove=="function"&&o.remove(),i&&clearTimeout(i)}},[]),e?!r&&!window.location.pathname.startsWith("/auth")?(window.location.href="/auth",null):n.jsxs(gy,{children:[n.jsxs(dx,{children:[n.jsx(ze,{path:"/auth",element:n.jsx(cy,{})}),n.jsx(ze,{path:"/auth/signin",element:n.jsx(dy,{})}),n.jsx(ze,{path:"/auth/avatar",element:n.jsx(uy,{})}),n.jsx(ze,{path:"/auth/username",element:n.jsx(fy,{})}),n.jsx(ze,{path:"/welcome",element:n.jsx(my,{})}),n.jsxs(ze,{element:n.jsx(Wx,{}),children:[n.jsx(ze,{path:"/",element:n.jsx(Ld,{})}),n.jsx(ze,{path:"/play",element:n.jsx(Qg,{})}),n.jsx(ze,{path:"/play/party",element:n.jsx(mv,{})}),n.jsx(ze,{path:"/profile",element:n.jsx(yv,{})}),n.jsx(ze,{path:"/profile/leaderboard",element:n.jsx(bv,{})}),n.jsx(ze,{path:"/profile/history",element:n.jsx(Cv,{})}),n.jsx(ze,{path:"/profile/rewards",element:n.jsx(Bv,{})}),n.jsx(ze,{path:"/profile/badges",element:n.jsx(Uv,{})}),n.jsx(ze,{path:"/profile/achievements",element:n.jsx(Qv,{})}),n.jsx(ze,{path:"/profile/streaks",element:n.jsx(Yv,{})}),n.jsx(ze,{path:"/profile/quests",element:n.jsx(Hv,{})}),n.jsx(ze,{path:"/profile/settings",element:n.jsx(Gv,{})}),n.jsx(ze,{path:"/profile/edit",element:n.jsx(sy,{})}),n.jsx(ze,{path:"/profile/privacy",element:n.jsx(ay,{})}),n.jsx(ze,{path:"/swipe",element:n.jsx(pv,{})}),n.jsx(ze,{path:"/leaders",element:n.jsx(ox,{to:"/profile/leaderboard",replace:!0})}),n.jsx(ze,{path:"/quiz/:category",element:n.jsx(av,{})}),n.jsx(ze,{path:"/quiz/play",element:n.jsx(gv,{})}),n.jsx(ze,{path:"/practice/start",element:n.jsx(vv,{})}),n.jsx(ze,{path:"*",element:n.jsx(Ld,{})})]})]}),n.jsx(hy,{})]}):n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#000"},children:n.jsx("div",{style:{color:"#fff"},children:"Loading..."})})}uo.createRoot(document.getElementById("root")).render(n.jsx(yt.StrictMode,{children:n.jsx(Dx,{children:n.jsx(vy,{})})}));export{Om as W,Bm as c,Jd as g};
