(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Fg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kh={exports:{}},Bo={},Xh={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),$g=Symbol.for("react.portal"),Ug=Symbol.for("react.fragment"),Bg=Symbol.for("react.strict_mode"),Wg=Symbol.for("react.profiler"),Hg=Symbol.for("react.provider"),qg=Symbol.for("react.context"),Yg=Symbol.for("react.forward_ref"),Gg=Symbol.for("react.suspense"),Vg=Symbol.for("react.memo"),Qg=Symbol.for("react.lazy"),Pu=Symbol.iterator;function Kg(e){return e===null||typeof e!="object"?null:(e=Pu&&e[Pu]||e["@@iterator"],typeof e=="function"?e:null)}var Jh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zh=Object.assign,em={};function As(e,t,n){this.props=e,this.context=t,this.refs=em,this.updater=n||Jh}As.prototype.isReactComponent={};As.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};As.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tm(){}tm.prototype=As.prototype;function hd(e,t,n){this.props=e,this.context=t,this.refs=em,this.updater=n||Jh}var md=hd.prototype=new tm;md.constructor=hd;Zh(md,As.prototype);md.isPureReactComponent=!0;var Ru=Array.isArray,nm=Object.prototype.hasOwnProperty,pd={current:null},rm={key:!0,ref:!0,__self:!0,__source:!0};function sm(e,t,n){var s,a={},i=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)nm.call(t,s)&&!rm.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:Qa,type:e,key:i,ref:o,props:a,_owner:pd.current}}function Xg(e,t){return{$$typeof:Qa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qa}function Jg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Au=/\/+/g;function yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jg(""+e.key):t.toString(36)}function Fi(e,t,n,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Qa:case $g:o=!0}}if(o)return o=e,a=a(o),e=s===""?"."+yl(o,0):s,Ru(a)?(n="",e!=null&&(n=e.replace(Au,"$&/")+"/"),Fi(a,t,n,"",function(d){return d})):a!=null&&(gd(a)&&(a=Xg(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Au,"$&/")+"/")+e)),t.push(a)),1;if(o=0,s=s===""?".":s+":",Ru(e))for(var l=0;l<e.length;l++){i=e[l];var c=s+yl(i,l);o+=Fi(i,t,n,c,a)}else if(c=Kg(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=s+yl(i,l++),o+=Fi(i,t,n,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ui(e,t,n){if(e==null)return e;var s=[],a=0;return Fi(e,s,"","",function(i){return t.call(n,i,a++)}),s}function Zg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Dt={current:null},$i={transition:null},ex={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:$i,ReactCurrentOwner:pd};function am(){throw Error("act(...) is not supported in production builds of React.")}xe.Children={map:ui,forEach:function(e,t,n){ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ui(e,function(){t++}),t},toArray:function(e){return ui(e,function(t){return t})||[]},only:function(e){if(!gd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};xe.Component=As;xe.Fragment=Ug;xe.Profiler=Wg;xe.PureComponent=hd;xe.StrictMode=Bg;xe.Suspense=Gg;xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ex;xe.act=am;xe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Zh({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=pd.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)nm.call(t,c)&&!rm.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];s.children=l}return{$$typeof:Qa,type:e.type,key:a,ref:i,props:s,_owner:o}};xe.createContext=function(e){return e={$$typeof:qg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hg,_context:e},e.Consumer=e};xe.createElement=sm;xe.createFactory=function(e){var t=sm.bind(null,e);return t.type=e,t};xe.createRef=function(){return{current:null}};xe.forwardRef=function(e){return{$$typeof:Yg,render:e}};xe.isValidElement=gd;xe.lazy=function(e){return{$$typeof:Qg,_payload:{_status:-1,_result:e},_init:Zg}};xe.memo=function(e,t){return{$$typeof:Vg,type:e,compare:t===void 0?null:t}};xe.startTransition=function(e){var t=$i.transition;$i.transition={};try{e()}finally{$i.transition=t}};xe.unstable_act=am;xe.useCallback=function(e,t){return Dt.current.useCallback(e,t)};xe.useContext=function(e){return Dt.current.useContext(e)};xe.useDebugValue=function(){};xe.useDeferredValue=function(e){return Dt.current.useDeferredValue(e)};xe.useEffect=function(e,t){return Dt.current.useEffect(e,t)};xe.useId=function(){return Dt.current.useId()};xe.useImperativeHandle=function(e,t,n){return Dt.current.useImperativeHandle(e,t,n)};xe.useInsertionEffect=function(e,t){return Dt.current.useInsertionEffect(e,t)};xe.useLayoutEffect=function(e,t){return Dt.current.useLayoutEffect(e,t)};xe.useMemo=function(e,t){return Dt.current.useMemo(e,t)};xe.useReducer=function(e,t,n){return Dt.current.useReducer(e,t,n)};xe.useRef=function(e){return Dt.current.useRef(e)};xe.useState=function(e){return Dt.current.useState(e)};xe.useSyncExternalStore=function(e,t,n){return Dt.current.useSyncExternalStore(e,t,n)};xe.useTransition=function(){return Dt.current.useTransition()};xe.version="18.3.1";Xh.exports=xe;var u=Xh.exports;const It=Qh(u);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx=u,nx=Symbol.for("react.element"),rx=Symbol.for("react.fragment"),sx=Object.prototype.hasOwnProperty,ax=tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ix={key:!0,ref:!0,__self:!0,__source:!0};function im(e,t,n){var s,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)sx.call(t,s)&&!ix.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:nx,type:e,key:i,ref:o,props:a,_owner:ax.current}}Bo.Fragment=rx;Bo.jsx=im;Bo.jsxs=im;Kh.exports=Bo;var r=Kh.exports,lc={},om={exports:{}},Kt={},lm={exports:{}},cm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,R){var L=O.length;O.push(R);e:for(;0<L;){var D=L-1>>>1,T=O[D];if(0<a(T,R))O[D]=R,O[L]=T,L=D;else break e}}function n(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var R=O[0],L=O.pop();if(L!==R){O[0]=L;e:for(var D=0,T=O.length,M=T>>>1;D<M;){var U=2*(D+1)-1,G=O[U],$=U+1,Z=O[$];if(0>a(G,L))$<T&&0>a(Z,G)?(O[D]=Z,O[$]=L,D=$):(O[D]=G,O[U]=L,D=U);else if($<T&&0>a(Z,L))O[D]=Z,O[$]=L,D=$;else break e}}return R}function a(O,R){var L=O.sortIndex-R.sortIndex;return L!==0?L:O.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],f=1,m=null,h=3,b=!1,g=!1,j=!1,k=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var R=n(d);R!==null;){if(R.callback===null)s(d);else if(R.startTime<=O)s(d),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(d)}}function N(O){if(j=!1,v(O),!g)if(n(c)!==null)g=!0,V(C);else{var R=n(d);R!==null&&H(N,R.startTime-O)}}function C(O,R){g=!1,j&&(j=!1,y(p),p=-1),b=!0;var L=h;try{for(v(R),m=n(c);m!==null&&(!(m.expirationTime>R)||O&&!A());){var D=m.callback;if(typeof D=="function"){m.callback=null,h=m.priorityLevel;var T=D(m.expirationTime<=R);R=e.unstable_now(),typeof T=="function"?m.callback=T:m===n(c)&&s(c),v(R)}else s(c);m=n(c)}if(m!==null)var M=!0;else{var U=n(d);U!==null&&H(N,U.startTime-R),M=!1}return M}finally{m=null,h=L,b=!1}}var I=!1,E=null,p=-1,w=5,S=-1;function A(){return!(e.unstable_now()-S<w)}function _(){if(E!==null){var O=e.unstable_now();S=O;var R=!0;try{R=E(!0,O)}finally{R?F():(I=!1,E=null)}}else I=!1}var F;if(typeof x=="function")F=function(){x(_)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,X=q.port2;q.port1.onmessage=_,F=function(){X.postMessage(null)}}else F=function(){k(_,0)};function V(O){E=O,I||(I=!0,F())}function H(O,R){p=k(function(){O(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||b||(g=!0,V(C))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var L=h;h=R;try{return O()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,R){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var L=h;h=O;try{return R()}finally{h=L}},e.unstable_scheduleCallback=function(O,R,L){var D=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?D+L:D):L=D,O){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=L+T,O={id:f++,callback:R,priorityLevel:O,startTime:L,expirationTime:T,sortIndex:-1},L>D?(O.sortIndex=L,t(d,O),n(c)===null&&O===n(d)&&(j?(y(p),p=-1):j=!0,H(N,L-D))):(O.sortIndex=T,t(c,O),g||b||(g=!0,V(C))),O},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(O){var R=h;return function(){var L=h;h=R;try{return O.apply(this,arguments)}finally{h=L}}}})(cm);lm.exports=cm;var ox=lm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx=u,Qt=ox;function re(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dm=new Set,Ca={};function Vr(e,t){Ns(e,t),Ns(e+"Capture",t)}function Ns(e,t){for(Ca[e]=t,e=0;e<t.length;e++)dm.add(t[e])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=Object.prototype.hasOwnProperty,cx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Du={},Lu={};function dx(e){return cc.call(Lu,e)?!0:cc.call(Du,e)?!1:cx.test(e)?Lu[e]=!0:(Du[e]=!0,!1)}function ux(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fx(e,t,n,s){if(t===null||typeof t>"u"||ux(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Lt(e,t,n,s,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){bt[e]=new Lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];bt[t]=new Lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){bt[e]=new Lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){bt[e]=new Lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){bt[e]=new Lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){bt[e]=new Lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){bt[e]=new Lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){bt[e]=new Lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){bt[e]=new Lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var xd=/[\-:]([a-z])/g;function vd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xd,vd);bt[t]=new Lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xd,vd);bt[t]=new Lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xd,vd);bt[t]=new Lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){bt[e]=new Lt(e,1,!1,e.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){bt[e]=new Lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function yd(e,t,n,s){var a=bt.hasOwnProperty(t)?bt[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fx(t,n,a,s)&&(n=null),s||a===null?dx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,s=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var Wn=lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fi=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),um=Symbol.for("react.provider"),fm=Symbol.for("react.context"),wd=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),fc=Symbol.for("react.suspense_list"),jd=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),hm=Symbol.for("react.offscreen"),Ou=Symbol.iterator;function Hs(e){return e===null||typeof e!="object"?null:(e=Ou&&e[Ou]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,bl;function sa(e){if(bl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bl=t&&t[1]||""}return`
`+bl+e}var wl=!1;function jl(e,t){if(!e||wl)return"";wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var s=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){s=d}e.call(t.prototype)}else{try{throw Error()}catch(d){s=d}e()}}catch(d){if(d&&s&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=s.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{wl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?sa(e):""}function hx(e){switch(e.tag){case 5:return sa(e.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return e=jl(e.type,!1),e;case 11:return e=jl(e.type.render,!1),e;case 1:return e=jl(e.type,!0),e;default:return""}}function hc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ts:return"Fragment";case es:return"Portal";case dc:return"Profiler";case bd:return"StrictMode";case uc:return"Suspense";case fc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fm:return(e.displayName||"Context")+".Consumer";case um:return(e._context.displayName||"Context")+".Provider";case wd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jd:return t=e.displayName||null,t!==null?t:hc(e.type)||"Memo";case Jn:t=e._payload,e=e._init;try{return hc(e(t))}catch{}}return null}function mx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hc(t);case 8:return t===bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function px(e){var t=mm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){s=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hi(e){e._valueTracker||(e._valueTracker=px(e))}function pm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=mm(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function mc(e,t){var n=t.checked;return Ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mu(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=Nr(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gm(e,t){t=t.checked,t!=null&&yd(e,"checked",t,!1)}function pc(e,t){gm(e,t);var n=Nr(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gc(e,t.type,n):t.hasOwnProperty("defaultValue")&&gc(e,t.type,Nr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gc(e,t,n){(t!=="number"||oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var aa=Array.isArray;function fs(e,t,n,s){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Nr(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function xc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(re(91));return Ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(re(92));if(aa(n)){if(1<n.length)throw Error(re(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nr(n)}}function xm(e,t){var n=Nr(t.value),s=Nr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function $u(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mi,ym=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mi=mi||document.createElement("div"),mi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ea(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gx=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(e){gx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ua[t]=ua[e]})});function bm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ua.hasOwnProperty(e)&&ua[e]?(""+t).trim():t+"px"}function wm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,a=bm(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,a):e[n]=a}}var xx=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yc(e,t){if(t){if(xx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(re(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(re(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(re(61))}if(t.style!=null&&typeof t.style!="object")throw Error(re(62))}}function bc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wc=null;function Nd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jc=null,hs=null,ms=null;function Uu(e){if(e=Ja(e)){if(typeof jc!="function")throw Error(re(280));var t=e.stateNode;t&&(t=Go(t),jc(e.stateNode,e.type,t))}}function jm(e){hs?ms?ms.push(e):ms=[e]:hs=e}function Nm(){if(hs){var e=hs,t=ms;if(ms=hs=null,Uu(e),t)for(e=0;e<t.length;e++)Uu(t[e])}}function km(e,t){return e(t)}function Sm(){}var Nl=!1;function Cm(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return km(e,t,n)}finally{Nl=!1,(hs!==null||ms!==null)&&(Sm(),Nm())}}function _a(e,t){var n=e.stateNode;if(n===null)return null;var s=Go(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(re(231,t,typeof n));return n}var Nc=!1;if(Ln)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Nc=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Nc=!1}function vx(e,t,n,s,a,i,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var fa=!1,lo=null,co=!1,kc=null,yx={onError:function(e){fa=!0,lo=e}};function bx(e,t,n,s,a,i,o,l,c){fa=!1,lo=null,vx.apply(yx,arguments)}function wx(e,t,n,s,a,i,o,l,c){if(bx.apply(this,arguments),fa){if(fa){var d=lo;fa=!1,lo=null}else throw Error(re(198));co||(co=!0,kc=d)}}function Qr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Em(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bu(e){if(Qr(e)!==e)throw Error(re(188))}function jx(e){var t=e.alternate;if(!t){if(t=Qr(e),t===null)throw Error(re(188));return t!==e?null:e}for(var n=e,s=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){n=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Bu(a),e;if(i===s)return Bu(a),t;i=i.sibling}throw Error(re(188))}if(n.return!==s.return)n=a,s=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,s=i;break}if(l===s){o=!0,s=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,s=a;break}if(l===s){o=!0,s=i,n=a;break}l=l.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==s)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?e:t}function _m(e){return e=jx(e),e!==null?Im(e):null}function Im(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Im(e);if(t!==null)return t;e=e.sibling}return null}var Tm=Qt.unstable_scheduleCallback,Wu=Qt.unstable_cancelCallback,Nx=Qt.unstable_shouldYield,kx=Qt.unstable_requestPaint,et=Qt.unstable_now,Sx=Qt.unstable_getCurrentPriorityLevel,kd=Qt.unstable_ImmediatePriority,Pm=Qt.unstable_UserBlockingPriority,uo=Qt.unstable_NormalPriority,Cx=Qt.unstable_LowPriority,Rm=Qt.unstable_IdlePriority,Wo=null,jn=null;function Ex(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Wo,e,void 0,(e.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:Tx,_x=Math.log,Ix=Math.LN2;function Tx(e){return e>>>=0,e===0?32:31-(_x(e)/Ix|0)|0}var pi=64,gi=4194304;function ia(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?s=ia(l):(i&=o,i!==0&&(s=ia(i)))}else o=n&~a,o!==0?s=ia(o):i!==0&&(s=ia(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-mn(t),a=1<<n,s|=e[n],t&=~a;return s}function Px(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rx(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-mn(i),l=1<<o,c=a[o];c===-1?(!(l&n)||l&s)&&(a[o]=Px(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function Sc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Am(){var e=pi;return pi<<=1,!(pi&4194240)&&(pi=64),e}function kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ka(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mn(t),e[t]=n}function Ax(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-mn(n),i=1<<a;t[a]=0,s[a]=-1,e[a]=-1,n&=~i}}function Sd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-mn(n),a=1<<s;a&t|e[s]&t&&(e[s]|=t),n&=~a}}var Pe=0;function Dm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lm,Cd,Om,Mm,zm,Cc=!1,xi=[],fr=null,hr=null,mr=null,Ia=new Map,Ta=new Map,tr=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hu(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Ia.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(t.pointerId)}}function Ys(e,t,n,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ja(t),t!==null&&Cd(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Lx(e,t,n,s,a){switch(t){case"focusin":return fr=Ys(fr,e,t,n,s,a),!0;case"dragenter":return hr=Ys(hr,e,t,n,s,a),!0;case"mouseover":return mr=Ys(mr,e,t,n,s,a),!0;case"pointerover":var i=a.pointerId;return Ia.set(i,Ys(Ia.get(i)||null,e,t,n,s,a)),!0;case"gotpointercapture":return i=a.pointerId,Ta.set(i,Ys(Ta.get(i)||null,e,t,n,s,a)),!0}return!1}function Fm(e){var t=Lr(e.target);if(t!==null){var n=Qr(t);if(n!==null){if(t=n.tag,t===13){if(t=Em(n),t!==null){e.blockedOn=t,zm(e.priority,function(){Om(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ec(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);wc=s,n.target.dispatchEvent(s),wc=null}else return t=Ja(n),t!==null&&Cd(t),e.blockedOn=n,!1;t.shift()}return!0}function qu(e,t,n){Ui(e)&&n.delete(t)}function Ox(){Cc=!1,fr!==null&&Ui(fr)&&(fr=null),hr!==null&&Ui(hr)&&(hr=null),mr!==null&&Ui(mr)&&(mr=null),Ia.forEach(qu),Ta.forEach(qu)}function Gs(e,t){e.blockedOn===t&&(e.blockedOn=null,Cc||(Cc=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,Ox)))}function Pa(e){function t(a){return Gs(a,e)}if(0<xi.length){Gs(xi[0],e);for(var n=1;n<xi.length;n++){var s=xi[n];s.blockedOn===e&&(s.blockedOn=null)}}for(fr!==null&&Gs(fr,e),hr!==null&&Gs(hr,e),mr!==null&&Gs(mr,e),Ia.forEach(t),Ta.forEach(t),n=0;n<tr.length;n++)s=tr[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Fm(n),n.blockedOn===null&&tr.shift()}var ps=Wn.ReactCurrentBatchConfig,ho=!0;function Mx(e,t,n,s){var a=Pe,i=ps.transition;ps.transition=null;try{Pe=1,Ed(e,t,n,s)}finally{Pe=a,ps.transition=i}}function zx(e,t,n,s){var a=Pe,i=ps.transition;ps.transition=null;try{Pe=4,Ed(e,t,n,s)}finally{Pe=a,ps.transition=i}}function Ed(e,t,n,s){if(ho){var a=Ec(e,t,n,s);if(a===null)Dl(e,t,s,mo,n),Hu(e,s);else if(Lx(a,e,t,n,s))s.stopPropagation();else if(Hu(e,s),t&4&&-1<Dx.indexOf(e)){for(;a!==null;){var i=Ja(a);if(i!==null&&Lm(i),i=Ec(e,t,n,s),i===null&&Dl(e,t,s,mo,n),i===a)break;a=i}a!==null&&s.stopPropagation()}else Dl(e,t,s,null,n)}}var mo=null;function Ec(e,t,n,s){if(mo=null,e=Nd(s),e=Lr(e),e!==null)if(t=Qr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Em(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mo=e,null}function $m(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sx()){case kd:return 1;case Pm:return 4;case uo:case Cx:return 16;case Rm:return 536870912;default:return 16}default:return 16}}var or=null,_d=null,Bi=null;function Um(){if(Bi)return Bi;var e,t=_d,n=t.length,s,a="value"in or?or.value:or.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(s=1;s<=o&&t[n-s]===a[i-s];s++);return Bi=a.slice(e,1<s?1-s:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vi(){return!0}function Yu(){return!1}function Xt(e){function t(n,s,a,i,o){this._reactName=n,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vi:Yu,this.isPropagationStopped=Yu,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),t}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Id=Xt(Ds),Xa=Ye({},Ds,{view:0,detail:0}),Fx=Xt(Xa),Sl,Cl,Vs,Ho=Ye({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Td,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?(Sl=e.screenX-Vs.screenX,Cl=e.screenY-Vs.screenY):Cl=Sl=0,Vs=e),Sl)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),Gu=Xt(Ho),$x=Ye({},Ho,{dataTransfer:0}),Ux=Xt($x),Bx=Ye({},Xa,{relatedTarget:0}),El=Xt(Bx),Wx=Ye({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=Xt(Wx),qx=Ye({},Ds,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yx=Xt(qx),Gx=Ye({},Ds,{data:0}),Vu=Xt(Gx),Vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kx[e])?!!t[e]:!1}function Td(){return Xx}var Jx=Ye({},Xa,{key:function(e){if(e.key){var t=Vx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Td,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zx=Xt(Jx),ev=Ye({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qu=Xt(ev),tv=Ye({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Td}),nv=Xt(tv),rv=Ye({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),sv=Xt(rv),av=Ye({},Ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iv=Xt(av),ov=[9,13,27,32],Pd=Ln&&"CompositionEvent"in window,ha=null;Ln&&"documentMode"in document&&(ha=document.documentMode);var lv=Ln&&"TextEvent"in window&&!ha,Bm=Ln&&(!Pd||ha&&8<ha&&11>=ha),Ku=String.fromCharCode(32),Xu=!1;function Wm(e,t){switch(e){case"keyup":return ov.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ns=!1;function cv(e,t){switch(e){case"compositionend":return Hm(t);case"keypress":return t.which!==32?null:(Xu=!0,Ku);case"textInput":return e=t.data,e===Ku&&Xu?null:e;default:return null}}function dv(e,t){if(ns)return e==="compositionend"||!Pd&&Wm(e,t)?(e=Um(),Bi=_d=or=null,ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bm&&t.locale!=="ko"?null:t.data;default:return null}}var uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uv[e.type]:t==="textarea"}function qm(e,t,n,s){jm(s),t=po(t,"onChange"),0<t.length&&(n=new Id("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var ma=null,Ra=null;function fv(e){np(e,0)}function qo(e){var t=as(e);if(pm(t))return e}function hv(e,t){if(e==="change")return t}var Ym=!1;if(Ln){var _l;if(Ln){var Il="oninput"in document;if(!Il){var Zu=document.createElement("div");Zu.setAttribute("oninput","return;"),Il=typeof Zu.oninput=="function"}_l=Il}else _l=!1;Ym=_l&&(!document.documentMode||9<document.documentMode)}function ef(){ma&&(ma.detachEvent("onpropertychange",Gm),Ra=ma=null)}function Gm(e){if(e.propertyName==="value"&&qo(Ra)){var t=[];qm(t,Ra,e,Nd(e)),Cm(fv,t)}}function mv(e,t,n){e==="focusin"?(ef(),ma=t,Ra=n,ma.attachEvent("onpropertychange",Gm)):e==="focusout"&&ef()}function pv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Ra)}function gv(e,t){if(e==="click")return qo(t)}function xv(e,t){if(e==="input"||e==="change")return qo(t)}function vv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gn=typeof Object.is=="function"?Object.is:vv;function Aa(e,t){if(gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var a=n[s];if(!cc.call(t,a)||!gn(e[a],t[a]))return!1}return!0}function tf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nf(e,t){var n=tf(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tf(n)}}function Vm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qm(){for(var e=window,t=oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oo(e.document)}return t}function Rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yv(e){var t=Qm(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vm(n.ownerDocument.documentElement,n)){if(s!==null&&Rd(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=nf(n,i);var o=nf(n,s);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bv=Ln&&"documentMode"in document&&11>=document.documentMode,rs=null,_c=null,pa=null,Ic=!1;function rf(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ic||rs==null||rs!==oo(s)||(s=rs,"selectionStart"in s&&Rd(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),pa&&Aa(pa,s)||(pa=s,s=po(_c,"onSelect"),0<s.length&&(t=new Id("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=rs)))}function yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ss={animationend:yi("Animation","AnimationEnd"),animationiteration:yi("Animation","AnimationIteration"),animationstart:yi("Animation","AnimationStart"),transitionend:yi("Transition","TransitionEnd")},Tl={},Km={};Ln&&(Km=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Yo(e){if(Tl[e])return Tl[e];if(!ss[e])return e;var t=ss[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Km)return Tl[e]=t[n];return e}var Xm=Yo("animationend"),Jm=Yo("animationiteration"),Zm=Yo("animationstart"),ep=Yo("transitionend"),tp=new Map,sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(e,t){tp.set(e,t),Vr(t,[e])}for(var Pl=0;Pl<sf.length;Pl++){var Rl=sf[Pl],wv=Rl.toLowerCase(),jv=Rl[0].toUpperCase()+Rl.slice(1);Cr(wv,"on"+jv)}Cr(Xm,"onAnimationEnd");Cr(Jm,"onAnimationIteration");Cr(Zm,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(ep,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nv=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function af(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,wx(s,t,void 0,e),e.currentTarget=null}function np(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],a=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var o=s.length-1;0<=o;o--){var l=s[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==i&&a.isPropagationStopped())break e;af(a,l,d),i=c}else for(o=0;o<s.length;o++){if(l=s[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==i&&a.isPropagationStopped())break e;af(a,l,d),i=c}}}if(co)throw e=kc,co=!1,kc=null,e}function Le(e,t){var n=t[Dc];n===void 0&&(n=t[Dc]=new Set);var s=e+"__bubble";n.has(s)||(rp(t,e,2,!1),n.add(s))}function Al(e,t,n){var s=0;t&&(s|=4),rp(n,e,s,t)}var bi="_reactListening"+Math.random().toString(36).slice(2);function Da(e){if(!e[bi]){e[bi]=!0,dm.forEach(function(n){n!=="selectionchange"&&(Nv.has(n)||Al(n,!1,e),Al(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bi]||(t[bi]=!0,Al("selectionchange",!1,t))}}function rp(e,t,n,s){switch($m(t)){case 1:var a=Mx;break;case 4:a=zx;break;default:a=Ed}n=a.bind(null,t,n,e),a=void 0,!Nc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Dl(e,t,n,s,a){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=s.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Lr(l),o===null)return;if(c=o.tag,c===5||c===6){s=i=o;continue e}l=l.parentNode}}s=s.return}Cm(function(){var d=i,f=Nd(n),m=[];e:{var h=tp.get(e);if(h!==void 0){var b=Id,g=e;switch(e){case"keypress":if(Wi(n)===0)break e;case"keydown":case"keyup":b=Zx;break;case"focusin":g="focus",b=El;break;case"focusout":g="blur",b=El;break;case"beforeblur":case"afterblur":b=El;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=nv;break;case Xm:case Jm:case Zm:b=Hx;break;case ep:b=sv;break;case"scroll":b=Fx;break;case"wheel":b=iv;break;case"copy":case"cut":case"paste":b=Yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Qu}var j=(t&4)!==0,k=!j&&e==="scroll",y=j?h!==null?h+"Capture":null:h;j=[];for(var x=d,v;x!==null;){v=x;var N=v.stateNode;if(v.tag===5&&N!==null&&(v=N,y!==null&&(N=_a(x,y),N!=null&&j.push(La(x,N,v)))),k)break;x=x.return}0<j.length&&(h=new b(h,g,null,n,f),m.push({event:h,listeners:j}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&n!==wc&&(g=n.relatedTarget||n.fromElement)&&(Lr(g)||g[On]))break e;if((b||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,b?(g=n.relatedTarget||n.toElement,b=d,g=g?Lr(g):null,g!==null&&(k=Qr(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(b=null,g=d),b!==g)){if(j=Gu,N="onMouseLeave",y="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(j=Qu,N="onPointerLeave",y="onPointerEnter",x="pointer"),k=b==null?h:as(b),v=g==null?h:as(g),h=new j(N,x+"leave",b,n,f),h.target=k,h.relatedTarget=v,N=null,Lr(f)===d&&(j=new j(y,x+"enter",g,n,f),j.target=v,j.relatedTarget=k,N=j),k=N,b&&g)t:{for(j=b,y=g,x=0,v=j;v;v=Jr(v))x++;for(v=0,N=y;N;N=Jr(N))v++;for(;0<x-v;)j=Jr(j),x--;for(;0<v-x;)y=Jr(y),v--;for(;x--;){if(j===y||y!==null&&j===y.alternate)break t;j=Jr(j),y=Jr(y)}j=null}else j=null;b!==null&&of(m,h,b,j,!1),g!==null&&k!==null&&of(m,k,g,j,!0)}}e:{if(h=d?as(d):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var C=hv;else if(Ju(h))if(Ym)C=xv;else{C=pv;var I=mv}else(b=h.nodeName)&&b.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=gv);if(C&&(C=C(e,d))){qm(m,C,n,f);break e}I&&I(e,h,d),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&gc(h,"number",h.value)}switch(I=d?as(d):window,e){case"focusin":(Ju(I)||I.contentEditable==="true")&&(rs=I,_c=d,pa=null);break;case"focusout":pa=_c=rs=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,rf(m,n,f);break;case"selectionchange":if(bv)break;case"keydown":case"keyup":rf(m,n,f)}var E;if(Pd)e:{switch(e){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else ns?Wm(e,n)&&(p="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Bm&&n.locale!=="ko"&&(ns||p!=="onCompositionStart"?p==="onCompositionEnd"&&ns&&(E=Um()):(or=f,_d="value"in or?or.value:or.textContent,ns=!0)),I=po(d,p),0<I.length&&(p=new Vu(p,e,null,n,f),m.push({event:p,listeners:I}),E?p.data=E:(E=Hm(n),E!==null&&(p.data=E)))),(E=lv?cv(e,n):dv(e,n))&&(d=po(d,"onBeforeInput"),0<d.length&&(f=new Vu("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=E))}np(m,t)})}function La(e,t,n){return{instance:e,listener:t,currentTarget:n}}function po(e,t){for(var n=t+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=_a(e,n),i!=null&&s.unshift(La(e,i,a)),i=_a(e,t),i!=null&&s.push(La(e,i,a))),e=e.return}return s}function Jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function of(e,t,n,s,a){for(var i=t._reactName,o=[];n!==null&&n!==s;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&d!==null&&(l=d,a?(c=_a(n,i),c!=null&&o.unshift(La(n,c,l))):a||(c=_a(n,i),c!=null&&o.push(La(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kv=/\r\n?/g,Sv=/\u0000|\uFFFD/g;function lf(e){return(typeof e=="string"?e:""+e).replace(kv,`
`).replace(Sv,"")}function wi(e,t,n){if(t=lf(t),lf(e)!==t&&n)throw Error(re(425))}function go(){}var Tc=null,Pc=null;function Rc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,Cv=typeof clearTimeout=="function"?clearTimeout:void 0,cf=typeof Promise=="function"?Promise:void 0,Ev=typeof queueMicrotask=="function"?queueMicrotask:typeof cf<"u"?function(e){return cf.resolve(null).then(e).catch(_v)}:Ac;function _v(e){setTimeout(function(){throw e})}function Ll(e,t){var n=t,s=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(s===0){e.removeChild(a),Pa(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=a}while(n);Pa(t)}function pr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),wn="__reactFiber$"+Ls,Oa="__reactProps$"+Ls,On="__reactContainer$"+Ls,Dc="__reactEvents$"+Ls,Iv="__reactListeners$"+Ls,Tv="__reactHandles$"+Ls;function Lr(e){var t=e[wn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[On]||n[wn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[wn])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ja(e){return e=e[wn]||e[On],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function as(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(re(33))}function Go(e){return e[Oa]||null}var Lc=[],is=-1;function Er(e){return{current:e}}function Me(e){0>is||(e.current=Lc[is],Lc[is]=null,is--)}function De(e,t){is++,Lc[is]=e.current,e.current=t}var kr={},_t=Er(kr),Ft=Er(!1),Br=kr;function ks(e,t){var n=e.type.contextTypes;if(!n)return kr;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function $t(e){return e=e.childContextTypes,e!=null}function xo(){Me(Ft),Me(_t)}function uf(e,t,n){if(_t.current!==kr)throw Error(re(168));De(_t,t),De(Ft,n)}function sp(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(re(108,mx(e)||"Unknown",a));return Ye({},n,s)}function vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kr,Br=_t.current,De(_t,e),De(Ft,Ft.current),!0}function ff(e,t,n){var s=e.stateNode;if(!s)throw Error(re(169));n?(e=sp(e,t,Br),s.__reactInternalMemoizedMergedChildContext=e,Me(Ft),Me(_t),De(_t,e)):Me(Ft),De(Ft,n)}var _n=null,Vo=!1,Ol=!1;function ap(e){_n===null?_n=[e]:_n.push(e)}function Pv(e){Vo=!0,ap(e)}function _r(){if(!Ol&&_n!==null){Ol=!0;var e=0,t=Pe;try{var n=_n;for(Pe=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}_n=null,Vo=!1}catch(a){throw _n!==null&&(_n=_n.slice(e+1)),Tm(kd,_r),a}finally{Pe=t,Ol=!1}}return null}var os=[],ls=0,yo=null,bo=0,Jt=[],Zt=0,Wr=null,In=1,Tn="";function Rr(e,t){os[ls++]=bo,os[ls++]=yo,yo=e,bo=t}function ip(e,t,n){Jt[Zt++]=In,Jt[Zt++]=Tn,Jt[Zt++]=Wr,Wr=e;var s=In;e=Tn;var a=32-mn(s)-1;s&=~(1<<a),n+=1;var i=32-mn(t)+a;if(30<i){var o=a-a%5;i=(s&(1<<o)-1).toString(32),s>>=o,a-=o,In=1<<32-mn(t)+a|n<<a|s,Tn=i+e}else In=1<<i|n<<a|s,Tn=e}function Ad(e){e.return!==null&&(Rr(e,1),ip(e,1,0))}function Dd(e){for(;e===yo;)yo=os[--ls],os[ls]=null,bo=os[--ls],os[ls]=null;for(;e===Wr;)Wr=Jt[--Zt],Jt[Zt]=null,Tn=Jt[--Zt],Jt[Zt]=null,In=Jt[--Zt],Jt[Zt]=null}var Vt=null,Gt=null,$e=!1,fn=null;function op(e,t){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Vt=e,Gt=pr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Vt=e,Gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wr!==null?{id:In,overflow:Tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Vt=e,Gt=null,!0):!1;default:return!1}}function Oc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mc(e){if($e){var t=Gt;if(t){var n=t;if(!hf(e,t)){if(Oc(e))throw Error(re(418));t=pr(n.nextSibling);var s=Vt;t&&hf(e,t)?op(s,n):(e.flags=e.flags&-4097|2,$e=!1,Vt=e)}}else{if(Oc(e))throw Error(re(418));e.flags=e.flags&-4097|2,$e=!1,Vt=e}}}function mf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Vt=e}function ji(e){if(e!==Vt)return!1;if(!$e)return mf(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rc(e.type,e.memoizedProps)),t&&(t=Gt)){if(Oc(e))throw lp(),Error(re(418));for(;t;)op(e,t),t=pr(t.nextSibling)}if(mf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(re(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Gt=pr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Gt=null}}else Gt=Vt?pr(e.stateNode.nextSibling):null;return!0}function lp(){for(var e=Gt;e;)e=pr(e.nextSibling)}function Ss(){Gt=Vt=null,$e=!1}function Ld(e){fn===null?fn=[e]:fn.push(e)}var Rv=Wn.ReactCurrentBatchConfig;function Qs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var s=n.stateNode}if(!s)throw Error(re(147,e));var a=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,e))}return e}function Ni(e,t){throw e=Object.prototype.toString.call(t),Error(re(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pf(e){var t=e._init;return t(e._payload)}function cp(e){function t(y,x){if(e){var v=y.deletions;v===null?(y.deletions=[x],y.flags|=16):v.push(x)}}function n(y,x){if(!e)return null;for(;x!==null;)t(y,x),x=x.sibling;return null}function s(y,x){for(y=new Map;x!==null;)x.key!==null?y.set(x.key,x):y.set(x.index,x),x=x.sibling;return y}function a(y,x){return y=yr(y,x),y.index=0,y.sibling=null,y}function i(y,x,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<x?(y.flags|=2,x):v):(y.flags|=2,x)):(y.flags|=1048576,x)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,x,v,N){return x===null||x.tag!==6?(x=Wl(v,y.mode,N),x.return=y,x):(x=a(x,v),x.return=y,x)}function c(y,x,v,N){var C=v.type;return C===ts?f(y,x,v.props.children,N,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Jn&&pf(C)===x.type)?(N=a(x,v.props),N.ref=Qs(y,x,v),N.return=y,N):(N=Ki(v.type,v.key,v.props,null,y.mode,N),N.ref=Qs(y,x,v),N.return=y,N)}function d(y,x,v,N){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Hl(v,y.mode,N),x.return=y,x):(x=a(x,v.children||[]),x.return=y,x)}function f(y,x,v,N,C){return x===null||x.tag!==7?(x=Ur(v,y.mode,N,C),x.return=y,x):(x=a(x,v),x.return=y,x)}function m(y,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Wl(""+x,y.mode,v),x.return=y,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fi:return v=Ki(x.type,x.key,x.props,null,y.mode,v),v.ref=Qs(y,null,x),v.return=y,v;case es:return x=Hl(x,y.mode,v),x.return=y,x;case Jn:var N=x._init;return m(y,N(x._payload),v)}if(aa(x)||Hs(x))return x=Ur(x,y.mode,v,null),x.return=y,x;Ni(y,x)}return null}function h(y,x,v,N){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(y,x,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fi:return v.key===C?c(y,x,v,N):null;case es:return v.key===C?d(y,x,v,N):null;case Jn:return C=v._init,h(y,x,C(v._payload),N)}if(aa(v)||Hs(v))return C!==null?null:f(y,x,v,N,null);Ni(y,v)}return null}function b(y,x,v,N,C){if(typeof N=="string"&&N!==""||typeof N=="number")return y=y.get(v)||null,l(x,y,""+N,C);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case fi:return y=y.get(N.key===null?v:N.key)||null,c(x,y,N,C);case es:return y=y.get(N.key===null?v:N.key)||null,d(x,y,N,C);case Jn:var I=N._init;return b(y,x,v,I(N._payload),C)}if(aa(N)||Hs(N))return y=y.get(v)||null,f(x,y,N,C,null);Ni(x,N)}return null}function g(y,x,v,N){for(var C=null,I=null,E=x,p=x=0,w=null;E!==null&&p<v.length;p++){E.index>p?(w=E,E=null):w=E.sibling;var S=h(y,E,v[p],N);if(S===null){E===null&&(E=w);break}e&&E&&S.alternate===null&&t(y,E),x=i(S,x,p),I===null?C=S:I.sibling=S,I=S,E=w}if(p===v.length)return n(y,E),$e&&Rr(y,p),C;if(E===null){for(;p<v.length;p++)E=m(y,v[p],N),E!==null&&(x=i(E,x,p),I===null?C=E:I.sibling=E,I=E);return $e&&Rr(y,p),C}for(E=s(y,E);p<v.length;p++)w=b(E,y,p,v[p],N),w!==null&&(e&&w.alternate!==null&&E.delete(w.key===null?p:w.key),x=i(w,x,p),I===null?C=w:I.sibling=w,I=w);return e&&E.forEach(function(A){return t(y,A)}),$e&&Rr(y,p),C}function j(y,x,v,N){var C=Hs(v);if(typeof C!="function")throw Error(re(150));if(v=C.call(v),v==null)throw Error(re(151));for(var I=C=null,E=x,p=x=0,w=null,S=v.next();E!==null&&!S.done;p++,S=v.next()){E.index>p?(w=E,E=null):w=E.sibling;var A=h(y,E,S.value,N);if(A===null){E===null&&(E=w);break}e&&E&&A.alternate===null&&t(y,E),x=i(A,x,p),I===null?C=A:I.sibling=A,I=A,E=w}if(S.done)return n(y,E),$e&&Rr(y,p),C;if(E===null){for(;!S.done;p++,S=v.next())S=m(y,S.value,N),S!==null&&(x=i(S,x,p),I===null?C=S:I.sibling=S,I=S);return $e&&Rr(y,p),C}for(E=s(y,E);!S.done;p++,S=v.next())S=b(E,y,p,S.value,N),S!==null&&(e&&S.alternate!==null&&E.delete(S.key===null?p:S.key),x=i(S,x,p),I===null?C=S:I.sibling=S,I=S);return e&&E.forEach(function(_){return t(y,_)}),$e&&Rr(y,p),C}function k(y,x,v,N){if(typeof v=="object"&&v!==null&&v.type===ts&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case fi:e:{for(var C=v.key,I=x;I!==null;){if(I.key===C){if(C=v.type,C===ts){if(I.tag===7){n(y,I.sibling),x=a(I,v.props.children),x.return=y,y=x;break e}}else if(I.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Jn&&pf(C)===I.type){n(y,I.sibling),x=a(I,v.props),x.ref=Qs(y,I,v),x.return=y,y=x;break e}n(y,I);break}else t(y,I);I=I.sibling}v.type===ts?(x=Ur(v.props.children,y.mode,N,v.key),x.return=y,y=x):(N=Ki(v.type,v.key,v.props,null,y.mode,N),N.ref=Qs(y,x,v),N.return=y,y=N)}return o(y);case es:e:{for(I=v.key;x!==null;){if(x.key===I)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(y,x.sibling),x=a(x,v.children||[]),x.return=y,y=x;break e}else{n(y,x);break}else t(y,x);x=x.sibling}x=Hl(v,y.mode,N),x.return=y,y=x}return o(y);case Jn:return I=v._init,k(y,x,I(v._payload),N)}if(aa(v))return g(y,x,v,N);if(Hs(v))return j(y,x,v,N);Ni(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(y,x.sibling),x=a(x,v),x.return=y,y=x):(n(y,x),x=Wl(v,y.mode,N),x.return=y,y=x),o(y)):n(y,x)}return k}var Cs=cp(!0),dp=cp(!1),wo=Er(null),jo=null,cs=null,Od=null;function Md(){Od=cs=jo=null}function zd(e){var t=wo.current;Me(wo),e._currentValue=t}function zc(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function gs(e,t){jo=e,Od=cs=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(zt=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(Od!==e)if(e={context:e,memoizedValue:t,next:null},cs===null){if(jo===null)throw Error(re(308));cs=e,jo.dependencies={lanes:0,firstContext:e}}else cs=cs.next=e;return t}var Or=null;function Fd(e){Or===null?Or=[e]:Or.push(e)}function up(e,t,n,s){var a=t.interleaved;return a===null?(n.next=n,Fd(t)):(n.next=a.next,a.next=n),t.interleaved=n,Mn(e,s)}function Mn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zn=!1;function $d(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,we&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,Mn(e,n)}return a=s.interleaved,a===null?(t.next=t,Fd(s)):(t.next=a.next,a.next=t),s.interleaved=t,Mn(e,n)}function Hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Sd(e,n)}}function gf(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function No(e,t,n,s){var a=e.updateQueue;Zn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?i=d:o.next=d,o=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=c))}if(i!==null){var m=a.baseState;o=0,f=d=c=null,l=i;do{var h=l.lane,b=l.eventTime;if((s&h)===h){f!==null&&(f=f.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,j=l;switch(h=t,b=n,j.tag){case 1:if(g=j.payload,typeof g=="function"){m=g.call(b,m,h);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=j.payload,h=typeof g=="function"?g.call(b,m,h):g,h==null)break e;m=Ye({},m,h);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else b={eventTime:b,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=b,c=m):f=f.next=b,o|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);if(f===null&&(c=m),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);qr|=o,e.lanes=o,e.memoizedState=m}}function xf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=n,typeof a!="function")throw Error(re(191,a));a.call(s)}}}var Za={},Nn=Er(Za),Ma=Er(Za),za=Er(Za);function Mr(e){if(e===Za)throw Error(re(174));return e}function Ud(e,t){switch(De(za,t),De(Ma,e),De(Nn,Za),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vc(t,e)}Me(Nn),De(Nn,t)}function Es(){Me(Nn),Me(Ma),Me(za)}function hp(e){Mr(za.current);var t=Mr(Nn.current),n=vc(t,e.type);t!==n&&(De(Ma,e),De(Nn,n))}function Bd(e){Ma.current===e&&(Me(Nn),Me(Ma))}var He=Er(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ml=[];function Wd(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var qi=Wn.ReactCurrentDispatcher,zl=Wn.ReactCurrentBatchConfig,Hr=0,qe=null,ot=null,ht=null,So=!1,ga=!1,Fa=0,Av=0;function kt(){throw Error(re(321))}function Hd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gn(e[n],t[n]))return!1;return!0}function qd(e,t,n,s,a,i){if(Hr=i,qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qi.current=e===null||e.memoizedState===null?Mv:zv,e=n(s,a),ga){i=0;do{if(ga=!1,Fa=0,25<=i)throw Error(re(301));i+=1,ht=ot=null,t.updateQueue=null,qi.current=Fv,e=n(s,a)}while(ga)}if(qi.current=Co,t=ot!==null&&ot.next!==null,Hr=0,ht=ot=qe=null,So=!1,t)throw Error(re(300));return e}function Yd(){var e=Fa!==0;return Fa=0,e}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?qe.memoizedState=ht=e:ht=ht.next=e,ht}function rn(){if(ot===null){var e=qe.alternate;e=e!==null?e.memoizedState:null}else e=ot.next;var t=ht===null?qe.memoizedState:ht.next;if(t!==null)ht=t,ot=e;else{if(e===null)throw Error(re(310));ot=e,e={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},ht===null?qe.memoizedState=ht=e:ht=ht.next=e}return ht}function $a(e,t){return typeof t=="function"?t(e):t}function Fl(e){var t=rn(),n=t.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=e;var s=ot,a=s.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}s.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,s=s.baseState;var l=o=null,c=null,d=i;do{var f=d.lane;if((Hr&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),s=d.hasEagerState?d.eagerState:e(s,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=m,o=s):c=c.next=m,qe.lanes|=f,qr|=f}d=d.next}while(d!==null&&d!==i);c===null?o=s:c.next=l,gn(s,t.memoizedState)||(zt=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=c,n.lastRenderedState=s}if(e=n.interleaved,e!==null){a=e;do i=a.lane,qe.lanes|=i,qr|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=rn(),n=t.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=e;var s=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);gn(i,t.memoizedState)||(zt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,s]}function mp(){}function pp(e,t){var n=qe,s=rn(),a=t(),i=!gn(s.memoizedState,a);if(i&&(s.memoizedState=a,zt=!0),s=s.queue,Gd(vp.bind(null,n,s,e),[e]),s.getSnapshot!==t||i||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,Ua(9,xp.bind(null,n,s,a,t),void 0,null),pt===null)throw Error(re(349));Hr&30||gp(n,t,a)}return a}function gp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xp(e,t,n,s){t.value=n,t.getSnapshot=s,yp(t)&&bp(e)}function vp(e,t,n){return n(function(){yp(t)&&bp(e)})}function yp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gn(e,n)}catch{return!0}}function bp(e){var t=Mn(e,1);t!==null&&pn(t,e,1,-1)}function vf(e){var t=bn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:e},t.queue=e,e=e.dispatch=Ov.bind(null,qe,e),[t.memoizedState,e]}function Ua(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function wp(){return rn().memoizedState}function Yi(e,t,n,s){var a=bn();qe.flags|=e,a.memoizedState=Ua(1|t,n,void 0,s===void 0?null:s)}function Qo(e,t,n,s){var a=rn();s=s===void 0?null:s;var i=void 0;if(ot!==null){var o=ot.memoizedState;if(i=o.destroy,s!==null&&Hd(s,o.deps)){a.memoizedState=Ua(t,n,i,s);return}}qe.flags|=e,a.memoizedState=Ua(1|t,n,i,s)}function yf(e,t){return Yi(8390656,8,e,t)}function Gd(e,t){return Qo(2048,8,e,t)}function jp(e,t){return Qo(4,2,e,t)}function Np(e,t){return Qo(4,4,e,t)}function kp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sp(e,t,n){return n=n!=null?n.concat([e]):null,Qo(4,4,kp.bind(null,t,e),n)}function Vd(){}function Cp(e,t){var n=rn();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&Hd(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Ep(e,t){var n=rn();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&Hd(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function _p(e,t,n){return Hr&21?(gn(n,t)||(n=Am(),qe.lanes|=n,qr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,zt=!0),e.memoizedState=n)}function Dv(e,t){var n=Pe;Pe=n!==0&&4>n?n:4,e(!0);var s=zl.transition;zl.transition={};try{e(!1),t()}finally{Pe=n,zl.transition=s}}function Ip(){return rn().memoizedState}function Lv(e,t,n){var s=vr(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Tp(e))Pp(t,n);else if(n=up(e,t,n,s),n!==null){var a=Pt();pn(n,e,s,a),Rp(n,t,s)}}function Ov(e,t,n){var s=vr(e),a={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tp(e))Pp(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,gn(l,o)){var c=t.interleaved;c===null?(a.next=a,Fd(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=up(e,t,a,s),n!==null&&(a=Pt(),pn(n,e,s,a),Rp(n,t,s))}}function Tp(e){var t=e.alternate;return e===qe||t!==null&&t===qe}function Pp(e,t){ga=So=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rp(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Sd(e,n)}}var Co={readContext:nn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},Mv={readContext:nn,useCallback:function(e,t){return bn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:yf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Yi(4194308,4,kp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yi(4,2,e,t)},useMemo:function(e,t){var n=bn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=bn();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Lv.bind(null,qe,e),[s.memoizedState,e]},useRef:function(e){var t=bn();return e={current:e},t.memoizedState=e},useState:vf,useDebugValue:Vd,useDeferredValue:function(e){return bn().memoizedState=e},useTransition:function(){var e=vf(!1),t=e[0];return e=Dv.bind(null,e[1]),bn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=qe,a=bn();if($e){if(n===void 0)throw Error(re(407));n=n()}else{if(n=t(),pt===null)throw Error(re(349));Hr&30||gp(s,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,yf(vp.bind(null,s,i,e),[e]),s.flags|=2048,Ua(9,xp.bind(null,s,i,n,t),void 0,null),n},useId:function(){var e=bn(),t=pt.identifierPrefix;if($e){var n=Tn,s=In;n=(s&~(1<<32-mn(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Av++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zv={readContext:nn,useCallback:Cp,useContext:nn,useEffect:Gd,useImperativeHandle:Sp,useInsertionEffect:jp,useLayoutEffect:Np,useMemo:Ep,useReducer:Fl,useRef:wp,useState:function(){return Fl($a)},useDebugValue:Vd,useDeferredValue:function(e){var t=rn();return _p(t,ot.memoizedState,e)},useTransition:function(){var e=Fl($a)[0],t=rn().memoizedState;return[e,t]},useMutableSource:mp,useSyncExternalStore:pp,useId:Ip,unstable_isNewReconciler:!1},Fv={readContext:nn,useCallback:Cp,useContext:nn,useEffect:Gd,useImperativeHandle:Sp,useInsertionEffect:jp,useLayoutEffect:Np,useMemo:Ep,useReducer:$l,useRef:wp,useState:function(){return $l($a)},useDebugValue:Vd,useDeferredValue:function(e){var t=rn();return ot===null?t.memoizedState=e:_p(t,ot.memoizedState,e)},useTransition:function(){var e=$l($a)[0],t=rn().memoizedState;return[e,t]},useMutableSource:mp,useSyncExternalStore:pp,useId:Ip,unstable_isNewReconciler:!1};function cn(e,t){if(e&&e.defaultProps){t=Ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fc(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:Ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ko={isMounted:function(e){return(e=e._reactInternals)?Qr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=Pt(),a=vr(e),i=An(s,a);i.payload=t,n!=null&&(i.callback=n),t=gr(e,i,a),t!==null&&(pn(t,e,a,s),Hi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=Pt(),a=vr(e),i=An(s,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=gr(e,i,a),t!==null&&(pn(t,e,a,s),Hi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pt(),s=vr(e),a=An(n,s);a.tag=2,t!=null&&(a.callback=t),t=gr(e,a,s),t!==null&&(pn(t,e,s,n),Hi(t,e,s))}};function bf(e,t,n,s,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,o):t.prototype&&t.prototype.isPureReactComponent?!Aa(n,s)||!Aa(a,i):!0}function Ap(e,t,n){var s=!1,a=kr,i=t.contextType;return typeof i=="object"&&i!==null?i=nn(i):(a=$t(t)?Br:_t.current,s=t.contextTypes,i=(s=s!=null)?ks(e,a):kr),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ko,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function wf(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&Ko.enqueueReplaceState(t,t.state,null)}function $c(e,t,n,s){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},$d(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=nn(i):(i=$t(t)?Br:_t.current,a.context=ks(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fc(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ko.enqueueReplaceState(a,a.state,null),No(e,n,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function _s(e,t){try{var n="",s=t;do n+=hx(s),s=s.return;while(s);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Uc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $v=typeof WeakMap=="function"?WeakMap:Map;function Dp(e,t,n){n=An(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){_o||(_o=!0,Xc=s),Uc(e,t)},n}function Lp(e,t,n){n=An(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;n.payload=function(){return s(a)},n.callback=function(){Uc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Uc(e,t),typeof s!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function jf(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new $v;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(n)||(a.add(n),e=ey.bind(null,e,t,n),t.then(e,e))}function Nf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kf(e,t,n,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=An(-1,1),t.tag=2,gr(n,t,1))),n.lanes|=1),e)}var Uv=Wn.ReactCurrentOwner,zt=!1;function Tt(e,t,n,s){t.child=e===null?dp(t,null,n,s):Cs(t,e.child,n,s)}function Sf(e,t,n,s,a){n=n.render;var i=t.ref;return gs(t,a),s=qd(e,t,n,s,i,a),n=Yd(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,zn(e,t,a)):($e&&n&&Ad(t),t.flags|=1,Tt(e,t,s,a),t.child)}function Cf(e,t,n,s,a){if(e===null){var i=n.type;return typeof i=="function"&&!nu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Op(e,t,i,s,a)):(e=Ki(n.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(o,s)&&e.ref===t.ref)return zn(e,t,a)}return t.flags|=1,e=yr(i,s),e.ref=t.ref,e.return=t,t.child=e}function Op(e,t,n,s,a){if(e!==null){var i=e.memoizedProps;if(Aa(i,s)&&e.ref===t.ref)if(zt=!1,t.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(zt=!0);else return t.lanes=e.lanes,zn(e,t,a)}return Bc(e,t,n,s,a)}function Mp(e,t,n){var s=t.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(us,Yt),Yt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,De(us,Yt),Yt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:n,De(us,Yt),Yt|=s}else i!==null?(s=i.baseLanes|n,t.memoizedState=null):s=n,De(us,Yt),Yt|=s;return Tt(e,t,a,n),t.child}function zp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bc(e,t,n,s,a){var i=$t(n)?Br:_t.current;return i=ks(t,i),gs(t,a),n=qd(e,t,n,s,i,a),s=Yd(),e!==null&&!zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,zn(e,t,a)):($e&&s&&Ad(t),t.flags|=1,Tt(e,t,n,a),t.child)}function Ef(e,t,n,s,a){if($t(n)){var i=!0;vo(t)}else i=!1;if(gs(t,a),t.stateNode===null)Gi(e,t),Ap(t,n,s),$c(t,n,s,a),s=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=nn(d):(d=$t(n)?Br:_t.current,d=ks(t,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==s||c!==d)&&wf(t,o,s,d),Zn=!1;var h=t.memoizedState;o.state=h,No(t,s,o,a),c=t.memoizedState,l!==s||h!==c||Ft.current||Zn?(typeof f=="function"&&(Fc(t,n,f,s),c=t.memoizedState),(l=Zn||bf(t,n,l,s,h,c,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),o.props=s,o.state=c,o.context=d,s=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,fp(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:cn(t.type,l),o.props=d,m=t.pendingProps,h=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=nn(c):(c=$t(n)?Br:_t.current,c=ks(t,c));var b=n.getDerivedStateFromProps;(f=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||h!==c)&&wf(t,o,s,c),Zn=!1,h=t.memoizedState,o.state=h,No(t,s,o,a);var g=t.memoizedState;l!==m||h!==g||Ft.current||Zn?(typeof b=="function"&&(Fc(t,n,b,s),g=t.memoizedState),(d=Zn||bf(t,n,d,s,h,g,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,g,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,g,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=g),o.props=s,o.state=g,o.context=c,s=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),s=!1)}return Wc(e,t,n,s,i,a)}function Wc(e,t,n,s,a,i){zp(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return a&&ff(t,n,!1),zn(e,t,i);s=t.stateNode,Uv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=Cs(t,e.child,null,i),t.child=Cs(t,null,l,i)):Tt(e,t,l,i),t.memoizedState=s.state,a&&ff(t,n,!0),t.child}function Fp(e){var t=e.stateNode;t.pendingContext?uf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uf(e,t.context,!1),Ud(e,t.containerInfo)}function _f(e,t,n,s,a){return Ss(),Ld(a),t.flags|=256,Tt(e,t,n,s),t.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function qc(e){return{baseLanes:e,cachePool:null,transitions:null}}function $p(e,t,n){var s=t.pendingProps,a=He.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),De(He,a&1),e===null)return Mc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,i?(s=t.mode,i=t.child,o={mode:"hidden",children:o},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Zo(o,s,0,null),e=Ur(e,s,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=qc(n),t.memoizedState=Hc,e):Qd(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Bv(e,t,o,s,l,a,n);if(i){i=s.fallback,o=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(o&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=yr(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=yr(l,i):(i=Ur(i,o,n,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,o=e.child.memoizedState,o=o===null?qc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Hc,s}return i=e.child,e=i.sibling,s=yr(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function Qd(e,t){return t=Zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ki(e,t,n,s){return s!==null&&Ld(s),Cs(t,e.child,null,n),e=Qd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bv(e,t,n,s,a,i,o){if(n)return t.flags&256?(t.flags&=-257,s=Ul(Error(re(422))),ki(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,a=t.mode,s=Zo({mode:"visible",children:s.children},a,0,null),i=Ur(i,a,o,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&Cs(t,e.child,null,o),t.child.memoizedState=qc(o),t.memoizedState=Hc,i);if(!(t.mode&1))return ki(e,t,o,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(re(419)),s=Ul(i,s,void 0),ki(e,t,o,s)}if(l=(o&e.childLanes)!==0,zt||l){if(s=pt,s!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Mn(e,a),pn(s,e,a,-1))}return tu(),s=Ul(Error(re(421))),ki(e,t,o,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=ty.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Gt=pr(a.nextSibling),Vt=t,$e=!0,fn=null,e!==null&&(Jt[Zt++]=In,Jt[Zt++]=Tn,Jt[Zt++]=Wr,In=e.id,Tn=e.overflow,Wr=t),t=Qd(t,s.children),t.flags|=4096,t)}function If(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),zc(e.return,t,n)}function Bl(e,t,n,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=n,i.tailMode=a)}function Up(e,t,n){var s=t.pendingProps,a=s.revealOrder,i=s.tail;if(Tt(e,t,s.children,n),s=He.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&If(e,n,t);else if(e.tag===19)If(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(De(He,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ko(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Bl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ko(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Bl(t,!0,n,null,i);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(re(153));if(t.child!==null){for(e=t.child,n=yr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wv(e,t,n){switch(t.tag){case 3:Fp(t),Ss();break;case 5:hp(t);break;case 1:$t(t.type)&&vo(t);break;case 4:Ud(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;De(wo,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(De(He,He.current&1),t.flags|=128,null):n&t.child.childLanes?$p(e,t,n):(De(He,He.current&1),e=zn(e,t,n),e!==null?e.sibling:null);De(He,He.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return Up(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),De(He,He.current),s)break;return null;case 22:case 23:return t.lanes=0,Mp(e,t,n)}return zn(e,t,n)}var Bp,Yc,Wp,Hp;Bp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yc=function(){};Wp=function(e,t,n,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,Mr(Nn.current);var i=null;switch(n){case"input":a=mc(e,a),s=mc(e,s),i=[];break;case"select":a=Ye({},a,{value:void 0}),s=Ye({},s,{value:void 0}),i=[];break;case"textarea":a=xc(e,a),s=xc(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=go)}yc(n,s);var o;n=null;for(d in a)if(!s.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var l=a[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ca.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in s){var c=s[d];if(l=a!=null?a[d]:void 0,s.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Le("scroll",e),i||l===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Hp=function(e,t,n,s){n!==s&&(t.flags|=4)};function Ks(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Hv(e,t,n){var s=t.pendingProps;switch(Dd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return $t(t.type)&&xo(),St(t),null;case 3:return s=t.stateNode,Es(),Me(Ft),Me(_t),Wd(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ji(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,fn!==null&&(ed(fn),fn=null))),Yc(e,t),St(t),null;case 5:Bd(t);var a=Mr(za.current);if(n=t.type,e!==null&&t.stateNode!=null)Wp(e,t,n,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(re(166));return St(t),null}if(e=Mr(Nn.current),ji(t)){s=t.stateNode,n=t.type;var i=t.memoizedProps;switch(s[wn]=t,s[Oa]=i,e=(t.mode&1)!==0,n){case"dialog":Le("cancel",s),Le("close",s);break;case"iframe":case"object":case"embed":Le("load",s);break;case"video":case"audio":for(a=0;a<oa.length;a++)Le(oa[a],s);break;case"source":Le("error",s);break;case"img":case"image":case"link":Le("error",s),Le("load",s);break;case"details":Le("toggle",s);break;case"input":Mu(s,i),Le("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},Le("invalid",s);break;case"textarea":Fu(s,i),Le("invalid",s)}yc(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&wi(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&wi(s.textContent,l,e),a=["children",""+l]):Ca.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Le("scroll",s)}switch(n){case"input":hi(s),zu(s,i,!0);break;case"textarea":hi(s),$u(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=go)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(n,{is:s.is}):(e=o.createElement(n),n==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,n),e[wn]=t,e[Oa]=s,Bp(e,t,!1,!1),t.stateNode=e;e:{switch(o=bc(n,s),n){case"dialog":Le("cancel",e),Le("close",e),a=s;break;case"iframe":case"object":case"embed":Le("load",e),a=s;break;case"video":case"audio":for(a=0;a<oa.length;a++)Le(oa[a],e);a=s;break;case"source":Le("error",e),a=s;break;case"img":case"image":case"link":Le("error",e),Le("load",e),a=s;break;case"details":Le("toggle",e),a=s;break;case"input":Mu(e,s),a=mc(e,s),Le("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=Ye({},s,{value:void 0}),Le("invalid",e);break;case"textarea":Fu(e,s),a=xc(e,s),Le("invalid",e);break;default:a=s}yc(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?wm(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ym(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ea(e,c):typeof c=="number"&&Ea(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ca.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Le("scroll",e):c!=null&&yd(e,i,c,o))}switch(n){case"input":hi(e),zu(e,s,!1);break;case"textarea":hi(e),$u(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Nr(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?fs(e,!!s.multiple,i,!1):s.defaultValue!=null&&fs(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=go)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return St(t),null;case 6:if(e&&t.stateNode!=null)Hp(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(re(166));if(n=Mr(za.current),Mr(Nn.current),ji(t)){if(s=t.stateNode,n=t.memoizedProps,s[wn]=t,(i=s.nodeValue!==n)&&(e=Vt,e!==null))switch(e.tag){case 3:wi(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(s.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[wn]=t,t.stateNode=s}return St(t),null;case 13:if(Me(He),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&Gt!==null&&t.mode&1&&!(t.flags&128))lp(),Ss(),t.flags|=98560,i=!1;else if(i=ji(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(re(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(re(317));i[wn]=t}else Ss(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;St(t),i=!1}else fn!==null&&(ed(fn),fn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||He.current&1?ct===0&&(ct=3):tu())),t.updateQueue!==null&&(t.flags|=4),St(t),null);case 4:return Es(),Yc(e,t),e===null&&Da(t.stateNode.containerInfo),St(t),null;case 10:return zd(t.type._context),St(t),null;case 17:return $t(t.type)&&xo(),St(t),null;case 19:if(Me(He),i=t.memoizedState,i===null)return St(t),null;if(s=(t.flags&128)!==0,o=i.rendering,o===null)if(s)Ks(i,!1);else{if(ct!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ko(e),o!==null){for(t.flags|=128,Ks(i,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)i=n,e=s,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return De(He,He.current&1|2),t.child}e=e.sibling}i.tail!==null&&et()>Is&&(t.flags|=128,s=!0,Ks(i,!1),t.lanes=4194304)}else{if(!s)if(e=ko(o),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ks(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!$e)return St(t),null}else 2*et()-i.renderingStartTime>Is&&n!==1073741824&&(t.flags|=128,s=!0,Ks(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=et(),t.sibling=null,n=He.current,De(He,s?n&1|2:n&1),t):(St(t),null);case 22:case 23:return eu(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Yt&1073741824&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),null;case 24:return null;case 25:return null}throw Error(re(156,t.tag))}function qv(e,t){switch(Dd(t),t.tag){case 1:return $t(t.type)&&xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Es(),Me(Ft),Me(_t),Wd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bd(t),null;case 13:if(Me(He),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(re(340));Ss()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Me(He),null;case 4:return Es(),null;case 10:return zd(t.type._context),null;case 22:case 23:return eu(),null;case 24:return null;default:return null}}var Si=!1,Et=!1,Yv=typeof WeakSet=="function"?WeakSet:Set,le=null;function ds(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){Xe(e,t,s)}else n.current=null}function Gc(e,t,n){try{n()}catch(s){Xe(e,t,s)}}var Tf=!1;function Gv(e,t){if(Tc=ho,e=Qm(),Rd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,f=0,m=e,h=null;t:for(;;){for(var b;m!==n||a!==0&&m.nodeType!==3||(l=o+a),m!==i||s!==0&&m.nodeType!==3||(c=o+s),m.nodeType===3&&(o+=m.nodeValue.length),(b=m.firstChild)!==null;)h=m,m=b;for(;;){if(m===e)break t;if(h===n&&++d===a&&(l=o),h===i&&++f===s&&(c=o),(b=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=b}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pc={focusedElem:e,selectionRange:n},ho=!1,le=t;le!==null;)if(t=le,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,le=e;else for(;le!==null;){t=le;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var j=g.memoizedProps,k=g.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?j:cn(t.type,j),k);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(N){Xe(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,le=e;break}le=t.return}return g=Tf,Tf=!1,g}function xa(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Gc(t,n,i)}a=a.next}while(a!==s)}}function Xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function Vc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qp(e){var t=e.alternate;t!==null&&(e.alternate=null,qp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wn],delete t[Oa],delete t[Dc],delete t[Iv],delete t[Tv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yp(e){return e.tag===5||e.tag===3||e.tag===4}function Pf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=go));else if(s!==4&&(e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function Kc(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}var vt=null,dn=!1;function Yn(e,t,n){for(n=n.child;n!==null;)Gp(e,t,n),n=n.sibling}function Gp(e,t,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Wo,n)}catch{}switch(n.tag){case 5:Et||ds(n,t);case 6:var s=vt,a=dn;vt=null,Yn(e,t,n),vt=s,dn=a,vt!==null&&(dn?(e=vt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(dn?(e=vt,n=n.stateNode,e.nodeType===8?Ll(e.parentNode,n):e.nodeType===1&&Ll(e,n),Pa(e)):Ll(vt,n.stateNode));break;case 4:s=vt,a=dn,vt=n.stateNode.containerInfo,dn=!0,Yn(e,t,n),vt=s,dn=a;break;case 0:case 11:case 14:case 15:if(!Et&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Gc(n,t,o),a=a.next}while(a!==s)}Yn(e,t,n);break;case 1:if(!Et&&(ds(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(l){Xe(n,t,l)}Yn(e,t,n);break;case 21:Yn(e,t,n);break;case 22:n.mode&1?(Et=(s=Et)||n.memoizedState!==null,Yn(e,t,n),Et=s):Yn(e,t,n);break;default:Yn(e,t,n)}}function Rf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yv),t.forEach(function(s){var a=ny.bind(null,e,s);n.has(s)||(n.add(s),s.then(a,a))})}}function ln(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var a=n[s];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:vt=l.stateNode,dn=!1;break e;case 3:vt=l.stateNode.containerInfo,dn=!0;break e;case 4:vt=l.stateNode.containerInfo,dn=!0;break e}l=l.return}if(vt===null)throw Error(re(160));Gp(i,o,a),vt=null,dn=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){Xe(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vp(t,e),t=t.sibling}function Vp(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ln(t,e),yn(e),s&4){try{xa(3,e,e.return),Xo(3,e)}catch(j){Xe(e,e.return,j)}try{xa(5,e,e.return)}catch(j){Xe(e,e.return,j)}}break;case 1:ln(t,e),yn(e),s&512&&n!==null&&ds(n,n.return);break;case 5:if(ln(t,e),yn(e),s&512&&n!==null&&ds(n,n.return),e.flags&32){var a=e.stateNode;try{Ea(a,"")}catch(j){Xe(e,e.return,j)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&gm(a,i),bc(l,o);var d=bc(l,i);for(o=0;o<c.length;o+=2){var f=c[o],m=c[o+1];f==="style"?wm(a,m):f==="dangerouslySetInnerHTML"?ym(a,m):f==="children"?Ea(a,m):yd(a,f,m,d)}switch(l){case"input":pc(a,i);break;case"textarea":xm(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?fs(a,!!i.multiple,b,!1):h!==!!i.multiple&&(i.defaultValue!=null?fs(a,!!i.multiple,i.defaultValue,!0):fs(a,!!i.multiple,i.multiple?[]:"",!1))}a[Oa]=i}catch(j){Xe(e,e.return,j)}}break;case 6:if(ln(t,e),yn(e),s&4){if(e.stateNode===null)throw Error(re(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(j){Xe(e,e.return,j)}}break;case 3:if(ln(t,e),yn(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(t.containerInfo)}catch(j){Xe(e,e.return,j)}break;case 4:ln(t,e),yn(e);break;case 13:ln(t,e),yn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Jd=et())),s&4&&Rf(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Et=(d=Et)||f,ln(t,e),Et=d):ln(t,e),yn(e),s&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(le=e,f=e.child;f!==null;){for(m=le=f;le!==null;){switch(h=le,b=h.child,h.tag){case 0:case 11:case 14:case 15:xa(4,h,h.return);break;case 1:ds(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){s=h,n=h.return;try{t=s,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(j){Xe(s,n,j)}}break;case 5:ds(h,h.return);break;case 22:if(h.memoizedState!==null){Df(m);continue}}b!==null?(b.return=h,le=b):Df(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{a=m.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=bm("display",o))}catch(j){Xe(e,e.return,j)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(j){Xe(e,e.return,j)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ln(t,e),yn(e),s&4&&Rf(e);break;case 21:break;default:ln(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yp(n)){var s=n;break e}n=n.return}throw Error(re(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Ea(a,""),s.flags&=-33);var i=Pf(e);Kc(e,i,a);break;case 3:case 4:var o=s.stateNode.containerInfo,l=Pf(e);Qc(e,l,o);break;default:throw Error(re(161))}}catch(c){Xe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vv(e,t,n){le=e,Qp(e)}function Qp(e,t,n){for(var s=(e.mode&1)!==0;le!==null;){var a=le,i=a.child;if(a.tag===22&&s){var o=a.memoizedState!==null||Si;if(!o){var l=a.alternate,c=l!==null&&l.memoizedState!==null||Et;l=Si;var d=Et;if(Si=o,(Et=c)&&!d)for(le=a;le!==null;)o=le,c=o.child,o.tag===22&&o.memoizedState!==null?Lf(a):c!==null?(c.return=o,le=c):Lf(a);for(;i!==null;)le=i,Qp(i),i=i.sibling;le=a,Si=l,Et=d}Af(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,le=i):Af(e)}}function Af(e){for(;le!==null;){var t=le;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Et||Xo(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Et)if(n===null)s.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:cn(t.type,n.memoizedProps);s.componentDidUpdate(a,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&xf(t,i,s);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xf(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Pa(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Et||t.flags&512&&Vc(t)}catch(h){Xe(t,t.return,h)}}if(t===e){le=null;break}if(n=t.sibling,n!==null){n.return=t.return,le=n;break}le=t.return}}function Df(e){for(;le!==null;){var t=le;if(t===e){le=null;break}var n=t.sibling;if(n!==null){n.return=t.return,le=n;break}le=t.return}}function Lf(e){for(;le!==null;){var t=le;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xo(4,t)}catch(c){Xe(t,n,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(c){Xe(t,a,c)}}var i=t.return;try{Vc(t)}catch(c){Xe(t,i,c)}break;case 5:var o=t.return;try{Vc(t)}catch(c){Xe(t,o,c)}}}catch(c){Xe(t,t.return,c)}if(t===e){le=null;break}var l=t.sibling;if(l!==null){l.return=t.return,le=l;break}le=t.return}}var Qv=Math.ceil,Eo=Wn.ReactCurrentDispatcher,Kd=Wn.ReactCurrentOwner,tn=Wn.ReactCurrentBatchConfig,we=0,pt=null,rt=null,yt=0,Yt=0,us=Er(0),ct=0,Ba=null,qr=0,Jo=0,Xd=0,va=null,Mt=null,Jd=0,Is=1/0,En=null,_o=!1,Xc=null,xr=null,Ci=!1,lr=null,Io=0,ya=0,Jc=null,Vi=-1,Qi=0;function Pt(){return we&6?et():Vi!==-1?Vi:Vi=et()}function vr(e){return e.mode&1?we&2&&yt!==0?yt&-yt:Rv.transition!==null?(Qi===0&&(Qi=Am()),Qi):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:$m(e.type)),e):1}function pn(e,t,n,s){if(50<ya)throw ya=0,Jc=null,Error(re(185));Ka(e,n,s),(!(we&2)||e!==pt)&&(e===pt&&(!(we&2)&&(Jo|=n),ct===4&&nr(e,yt)),Ut(e,s),n===1&&we===0&&!(t.mode&1)&&(Is=et()+500,Vo&&_r()))}function Ut(e,t){var n=e.callbackNode;Rx(e,t);var s=fo(e,e===pt?yt:0);if(s===0)n!==null&&Wu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&Wu(n),t===1)e.tag===0?Pv(Of.bind(null,e)):ap(Of.bind(null,e)),Ev(function(){!(we&6)&&_r()}),n=null;else{switch(Dm(s)){case 1:n=kd;break;case 4:n=Pm;break;case 16:n=uo;break;case 536870912:n=Rm;break;default:n=uo}n=r0(n,Kp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kp(e,t){if(Vi=-1,Qi=0,we&6)throw Error(re(327));var n=e.callbackNode;if(xs()&&e.callbackNode!==n)return null;var s=fo(e,e===pt?yt:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=To(e,s);else{t=s;var a=we;we|=2;var i=Jp();(pt!==e||yt!==t)&&(En=null,Is=et()+500,$r(e,t));do try{Jv();break}catch(l){Xp(e,l)}while(1);Md(),Eo.current=i,we=a,rt!==null?t=0:(pt=null,yt=0,t=ct)}if(t!==0){if(t===2&&(a=Sc(e),a!==0&&(s=a,t=Zc(e,a))),t===1)throw n=Ba,$r(e,0),nr(e,s),Ut(e,et()),n;if(t===6)nr(e,s);else{if(a=e.current.alternate,!(s&30)&&!Kv(a)&&(t=To(e,s),t===2&&(i=Sc(e),i!==0&&(s=i,t=Zc(e,i))),t===1))throw n=Ba,$r(e,0),nr(e,s),Ut(e,et()),n;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(re(345));case 2:Ar(e,Mt,En);break;case 3:if(nr(e,s),(s&130023424)===s&&(t=Jd+500-et(),10<t)){if(fo(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){Pt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ac(Ar.bind(null,e,Mt,En),t);break}Ar(e,Mt,En);break;case 4:if(nr(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var o=31-mn(s);i=1<<o,o=t[o],o>a&&(a=o),s&=~i}if(s=a,s=et()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Qv(s/1960))-s,10<s){e.timeoutHandle=Ac(Ar.bind(null,e,Mt,En),s);break}Ar(e,Mt,En);break;case 5:Ar(e,Mt,En);break;default:throw Error(re(329))}}}return Ut(e,et()),e.callbackNode===n?Kp.bind(null,e):null}function Zc(e,t){var n=va;return e.current.memoizedState.isDehydrated&&($r(e,t).flags|=256),e=To(e,t),e!==2&&(t=Mt,Mt=n,t!==null&&ed(t)),e}function ed(e){Mt===null?Mt=e:Mt.push.apply(Mt,e)}function Kv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var a=n[s],i=a.getSnapshot;a=a.value;try{if(!gn(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t){for(t&=~Xd,t&=~Jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mn(t),s=1<<n;e[n]=-1,t&=~s}}function Of(e){if(we&6)throw Error(re(327));xs();var t=fo(e,0);if(!(t&1))return Ut(e,et()),null;var n=To(e,t);if(e.tag!==0&&n===2){var s=Sc(e);s!==0&&(t=s,n=Zc(e,s))}if(n===1)throw n=Ba,$r(e,0),nr(e,t),Ut(e,et()),n;if(n===6)throw Error(re(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ar(e,Mt,En),Ut(e,et()),null}function Zd(e,t){var n=we;we|=1;try{return e(t)}finally{we=n,we===0&&(Is=et()+500,Vo&&_r())}}function Yr(e){lr!==null&&lr.tag===0&&!(we&6)&&xs();var t=we;we|=1;var n=tn.transition,s=Pe;try{if(tn.transition=null,Pe=1,e)return e()}finally{Pe=s,tn.transition=n,we=t,!(we&6)&&_r()}}function eu(){Yt=us.current,Me(us)}function $r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cv(n)),rt!==null)for(n=rt.return;n!==null;){var s=n;switch(Dd(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&xo();break;case 3:Es(),Me(Ft),Me(_t),Wd();break;case 5:Bd(s);break;case 4:Es();break;case 13:Me(He);break;case 19:Me(He);break;case 10:zd(s.type._context);break;case 22:case 23:eu()}n=n.return}if(pt=e,rt=e=yr(e.current,null),yt=Yt=t,ct=0,Ba=null,Xd=Jo=qr=0,Mt=va=null,Or!==null){for(t=0;t<Or.length;t++)if(n=Or[t],s=n.interleaved,s!==null){n.interleaved=null;var a=s.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,s.next=o}n.pending=s}Or=null}return e}function Xp(e,t){do{var n=rt;try{if(Md(),qi.current=Co,So){for(var s=qe.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}So=!1}if(Hr=0,ht=ot=qe=null,ga=!1,Fa=0,Kd.current=null,n===null||n.return===null){ct=1,Ba=t,rt=null;break}e:{var i=e,o=n.return,l=n,c=t;if(t=yt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=Nf(o);if(b!==null){b.flags&=-257,kf(b,o,l,i,t),b.mode&1&&jf(i,d,t),t=b,c=d;var g=t.updateQueue;if(g===null){var j=new Set;j.add(c),t.updateQueue=j}else g.add(c);break e}else{if(!(t&1)){jf(i,d,t),tu();break e}c=Error(re(426))}}else if($e&&l.mode&1){var k=Nf(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),kf(k,o,l,i,t),Ld(_s(c,l));break e}}i=c=_s(c,l),ct!==4&&(ct=2),va===null?va=[i]:va.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=Dp(i,c,t);gf(i,y);break e;case 1:l=c;var x=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(xr===null||!xr.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var N=Lp(i,l,t);gf(i,N);break e}}i=i.return}while(i!==null)}e0(n)}catch(C){t=C,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(1)}function Jp(){var e=Eo.current;return Eo.current=Co,e===null?Co:e}function tu(){(ct===0||ct===3||ct===2)&&(ct=4),pt===null||!(qr&268435455)&&!(Jo&268435455)||nr(pt,yt)}function To(e,t){var n=we;we|=2;var s=Jp();(pt!==e||yt!==t)&&(En=null,$r(e,t));do try{Xv();break}catch(a){Xp(e,a)}while(1);if(Md(),we=n,Eo.current=s,rt!==null)throw Error(re(261));return pt=null,yt=0,ct}function Xv(){for(;rt!==null;)Zp(rt)}function Jv(){for(;rt!==null&&!Nx();)Zp(rt)}function Zp(e){var t=n0(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?e0(e):rt=t,Kd.current=null}function e0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qv(n,t),n!==null){n.flags&=32767,rt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ct=6,rt=null;return}}else if(n=Hv(n,t,Yt),n!==null){rt=n;return}if(t=t.sibling,t!==null){rt=t;return}rt=t=e}while(t!==null);ct===0&&(ct=5)}function Ar(e,t,n){var s=Pe,a=tn.transition;try{tn.transition=null,Pe=1,Zv(e,t,n,s)}finally{tn.transition=a,Pe=s}return null}function Zv(e,t,n,s){do xs();while(lr!==null);if(we&6)throw Error(re(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(re(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ax(e,i),e===pt&&(rt=pt=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ci||(Ci=!0,r0(uo,function(){return xs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tn.transition,tn.transition=null;var o=Pe;Pe=1;var l=we;we|=4,Kd.current=null,Gv(e,n),Vp(n,e),yv(Pc),ho=!!Tc,Pc=Tc=null,e.current=n,Vv(n),kx(),we=l,Pe=o,tn.transition=i}else e.current=n;if(Ci&&(Ci=!1,lr=e,Io=a),i=e.pendingLanes,i===0&&(xr=null),Ex(n.stateNode),Ut(e,et()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],s(a.value,{componentStack:a.stack,digest:a.digest});if(_o)throw _o=!1,e=Xc,Xc=null,e;return Io&1&&e.tag!==0&&xs(),i=e.pendingLanes,i&1?e===Jc?ya++:(ya=0,Jc=e):ya=0,_r(),null}function xs(){if(lr!==null){var e=Dm(Io),t=tn.transition,n=Pe;try{if(tn.transition=null,Pe=16>e?16:e,lr===null)var s=!1;else{if(e=lr,lr=null,Io=0,we&6)throw Error(re(331));var a=we;for(we|=4,le=e.current;le!==null;){var i=le,o=i.child;if(le.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(le=d;le!==null;){var f=le;switch(f.tag){case 0:case 11:case 15:xa(8,f,i)}var m=f.child;if(m!==null)m.return=f,le=m;else for(;le!==null;){f=le;var h=f.sibling,b=f.return;if(qp(f),f===d){le=null;break}if(h!==null){h.return=b,le=h;break}le=b}}}var g=i.alternate;if(g!==null){var j=g.child;if(j!==null){g.child=null;do{var k=j.sibling;j.sibling=null,j=k}while(j!==null)}}le=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,le=o;else e:for(;le!==null;){if(i=le,i.flags&2048)switch(i.tag){case 0:case 11:case 15:xa(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,le=y;break e}le=i.return}}var x=e.current;for(le=x;le!==null;){o=le;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,le=v;else e:for(o=x;le!==null;){if(l=le,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xo(9,l)}}catch(C){Xe(l,l.return,C)}if(l===o){le=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,le=N;break e}le=l.return}}if(we=a,_r(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Wo,e)}catch{}s=!0}return s}finally{Pe=n,tn.transition=t}}return!1}function Mf(e,t,n){t=_s(n,t),t=Dp(e,t,1),e=gr(e,t,1),t=Pt(),e!==null&&(Ka(e,1,t),Ut(e,t))}function Xe(e,t,n){if(e.tag===3)Mf(e,e,n);else for(;t!==null;){if(t.tag===3){Mf(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(xr===null||!xr.has(s))){e=_s(n,e),e=Lp(t,e,1),t=gr(t,e,1),e=Pt(),t!==null&&(Ka(t,1,e),Ut(t,e));break}}t=t.return}}function ey(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=Pt(),e.pingedLanes|=e.suspendedLanes&n,pt===e&&(yt&n)===n&&(ct===4||ct===3&&(yt&130023424)===yt&&500>et()-Jd?$r(e,0):Xd|=n),Ut(e,t)}function t0(e,t){t===0&&(e.mode&1?(t=gi,gi<<=1,!(gi&130023424)&&(gi=4194304)):t=1);var n=Pt();e=Mn(e,t),e!==null&&(Ka(e,t,n),Ut(e,n))}function ty(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),t0(e,n)}function ny(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(re(314))}s!==null&&s.delete(t),t0(e,n)}var n0;n0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ft.current)zt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return zt=!1,Wv(e,t,n);zt=!!(e.flags&131072)}else zt=!1,$e&&t.flags&1048576&&ip(t,bo,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Gi(e,t),e=t.pendingProps;var a=ks(t,_t.current);gs(t,n),a=qd(null,t,s,e,a,n);var i=Yd();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$t(s)?(i=!0,vo(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,$d(t),a.updater=Ko,t.stateNode=a,a._reactInternals=t,$c(t,s,e,n),t=Wc(null,t,s,!0,i,n)):(t.tag=0,$e&&i&&Ad(t),Tt(null,t,a,n),t=t.child),t;case 16:s=t.elementType;e:{switch(Gi(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=sy(s),e=cn(s,e),a){case 0:t=Bc(null,t,s,e,n);break e;case 1:t=Ef(null,t,s,e,n);break e;case 11:t=Sf(null,t,s,e,n);break e;case 14:t=Cf(null,t,s,cn(s.type,e),n);break e}throw Error(re(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:cn(s,a),Bc(e,t,s,a,n);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:cn(s,a),Ef(e,t,s,a,n);case 3:e:{if(Fp(t),e===null)throw Error(re(387));s=t.pendingProps,i=t.memoizedState,a=i.element,fp(e,t),No(t,s,null,n);var o=t.memoizedState;if(s=o.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=_s(Error(re(423)),t),t=_f(e,t,s,n,a);break e}else if(s!==a){a=_s(Error(re(424)),t),t=_f(e,t,s,n,a);break e}else for(Gt=pr(t.stateNode.containerInfo.firstChild),Vt=t,$e=!0,fn=null,n=dp(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ss(),s===a){t=zn(e,t,n);break e}Tt(e,t,s,n)}t=t.child}return t;case 5:return hp(t),e===null&&Mc(t),s=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Rc(s,a)?o=null:i!==null&&Rc(s,i)&&(t.flags|=32),zp(e,t),Tt(e,t,o,n),t.child;case 6:return e===null&&Mc(t),null;case 13:return $p(e,t,n);case 4:return Ud(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Cs(t,null,s,n):Tt(e,t,s,n),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:cn(s,a),Sf(e,t,s,a,n);case 7:return Tt(e,t,t.pendingProps,n),t.child;case 8:return Tt(e,t,t.pendingProps.children,n),t.child;case 12:return Tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,De(wo,s._currentValue),s._currentValue=o,i!==null)if(gn(i.value,o)){if(i.children===a.children&&!Ft.current){t=zn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(i.tag===1){c=An(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),zc(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(re(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),zc(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Tt(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,gs(t,n),a=nn(a),s=s(a),t.flags|=1,Tt(e,t,s,n),t.child;case 14:return s=t.type,a=cn(s,t.pendingProps),a=cn(s.type,a),Cf(e,t,s,a,n);case 15:return Op(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:cn(s,a),Gi(e,t),t.tag=1,$t(s)?(e=!0,vo(t)):e=!1,gs(t,n),Ap(t,s,a),$c(t,s,a,n),Wc(null,t,s,!0,e,n);case 19:return Up(e,t,n);case 22:return Mp(e,t,n)}throw Error(re(156,t.tag))};function r0(e,t){return Tm(e,t)}function ry(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,t,n,s){return new ry(e,t,n,s)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sy(e){if(typeof e=="function")return nu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wd)return 11;if(e===jd)return 14}return 2}function yr(e,t){var n=e.alternate;return n===null?(n=en(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ki(e,t,n,s,a,i){var o=2;if(s=e,typeof e=="function")nu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ts:return Ur(n.children,a,i,t);case bd:o=8,a|=8;break;case dc:return e=en(12,n,t,a|2),e.elementType=dc,e.lanes=i,e;case uc:return e=en(13,n,t,a),e.elementType=uc,e.lanes=i,e;case fc:return e=en(19,n,t,a),e.elementType=fc,e.lanes=i,e;case hm:return Zo(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case um:o=10;break e;case fm:o=9;break e;case wd:o=11;break e;case jd:o=14;break e;case Jn:o=16,s=null;break e}throw Error(re(130,e==null?e:typeof e,""))}return t=en(o,n,t,a),t.elementType=e,t.type=s,t.lanes=i,t}function Ur(e,t,n,s){return e=en(7,e,s,t),e.lanes=n,e}function Zo(e,t,n,s){return e=en(22,e,s,t),e.elementType=hm,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=en(6,e,null,t),e.lanes=n,e}function Hl(e,t,n){return t=en(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ay(e,t,n,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ru(e,t,n,s,a,i,o,l,c){return e=new ay(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=en(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$d(i),e}function iy(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function s0(e){if(!e)return kr;e=e._reactInternals;e:{if(Qr(e)!==e||e.tag!==1)throw Error(re(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(re(171))}if(e.tag===1){var n=e.type;if($t(n))return sp(e,n,t)}return t}function a0(e,t,n,s,a,i,o,l,c){return e=ru(n,s,!0,e,a,i,o,l,c),e.context=s0(null),n=e.current,s=Pt(),a=vr(n),i=An(s,a),i.callback=t??null,gr(n,i,a),e.current.lanes=a,Ka(e,a,s),Ut(e,s),e}function el(e,t,n,s){var a=t.current,i=Pt(),o=vr(a);return n=s0(n),t.context===null?t.context=n:t.pendingContext=n,t=An(i,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=gr(a,t,o),e!==null&&(pn(e,a,o,i),Hi(e,a,o)),o}function Po(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function su(e,t){zf(e,t),(e=e.alternate)&&zf(e,t)}function oy(){return null}var i0=typeof reportError=="function"?reportError:function(e){console.error(e)};function au(e){this._internalRoot=e}tl.prototype.render=au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(re(409));el(e,t,null,null)};tl.prototype.unmount=au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yr(function(){el(null,e,null,null)}),t[On]=null}};function tl(e){this._internalRoot=e}tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tr.length&&t!==0&&t<tr[n].priority;n++);tr.splice(n,0,e),n===0&&Fm(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ff(){}function ly(e,t,n,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var d=Po(o);i.call(d)}}var o=a0(t,s,e,0,null,!1,!1,"",Ff);return e._reactRootContainer=o,e[On]=o.current,Da(e.nodeType===8?e.parentNode:e),Yr(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var d=Po(c);l.call(d)}}var c=ru(e,0,!1,null,null,!1,!1,"",Ff);return e._reactRootContainer=c,e[On]=c.current,Da(e.nodeType===8?e.parentNode:e),Yr(function(){el(t,c,n,s)}),c}function rl(e,t,n,s,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var c=Po(o);l.call(c)}}el(t,o,e,a)}else o=ly(n,t,e,a,s);return Po(o)}Lm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ia(t.pendingLanes);n!==0&&(Sd(t,n|1),Ut(t,et()),!(we&6)&&(Is=et()+500,_r()))}break;case 13:Yr(function(){var s=Mn(e,1);if(s!==null){var a=Pt();pn(s,e,1,a)}}),su(e,1)}};Cd=function(e){if(e.tag===13){var t=Mn(e,134217728);if(t!==null){var n=Pt();pn(t,e,134217728,n)}su(e,134217728)}};Om=function(e){if(e.tag===13){var t=vr(e),n=Mn(e,t);if(n!==null){var s=Pt();pn(n,e,t,s)}su(e,t)}};Mm=function(){return Pe};zm=function(e,t){var n=Pe;try{return Pe=e,t()}finally{Pe=n}};jc=function(e,t,n){switch(t){case"input":if(pc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var a=Go(s);if(!a)throw Error(re(90));pm(s),pc(s,a)}}}break;case"textarea":xm(e,n);break;case"select":t=n.value,t!=null&&fs(e,!!n.multiple,t,!1)}};km=Zd;Sm=Yr;var cy={usingClientEntryPoint:!1,Events:[Ja,as,Go,jm,Nm,Zd]},Xs={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dy={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_m(e),e===null?null:e.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ei.isDisabled&&Ei.supportsFiber)try{Wo=Ei.inject(dy),jn=Ei}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cy;Kt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(t))throw Error(re(200));return iy(e,t,null,n)};Kt.createRoot=function(e,t){if(!iu(e))throw Error(re(299));var n=!1,s="",a=i0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ru(e,1,!1,null,null,n,!1,s,a),e[On]=t.current,Da(e.nodeType===8?e.parentNode:e),new au(t)};Kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(re(188)):(e=Object.keys(e).join(","),Error(re(268,e)));return e=_m(t),e=e===null?null:e.stateNode,e};Kt.flushSync=function(e){return Yr(e)};Kt.hydrate=function(e,t,n){if(!nl(t))throw Error(re(200));return rl(null,e,t,!0,n)};Kt.hydrateRoot=function(e,t,n){if(!iu(e))throw Error(re(405));var s=n!=null&&n.hydratedSources||null,a=!1,i="",o=i0;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=a0(t,null,e,1,n??null,a,!1,i,o),e[On]=t.current,Da(e),s)for(e=0;e<s.length;e++)n=s[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new tl(t)};Kt.render=function(e,t,n){if(!nl(t))throw Error(re(200));return rl(null,e,t,!1,n)};Kt.unmountComponentAtNode=function(e){if(!nl(e))throw Error(re(40));return e._reactRootContainer?(Yr(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[On]=null})}),!0):!1};Kt.unstable_batchedUpdates=Zd;Kt.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!nl(n))throw Error(re(200));if(e==null||e._reactInternals===void 0)throw Error(re(38));return rl(e,t,n,!1,s)};Kt.version="18.3.1-next-f1338f8080-20240426";function o0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o0)}catch(e){console.error(e)}}o0(),om.exports=Kt;var uy=om.exports,$f=uy;lc.createRoot=$f.createRoot,lc.hydrateRoot=$f.hydrateRoot;const fy="modulepreload",hy=function(e){return"/"+e},Uf={},ei=function(t,n,s){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=hy(i),i in Uf)return;Uf[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let f=a.length-1;f>=0;f--){const m=a[f];if(m.href===i&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":fy,o||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),o)return new Promise((f,m)=>{d.addEventListener("load",f),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var Bf="popstate";function my(e={}){function t(s,a){let{pathname:i,search:o,hash:l}=s.location;return td("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(s,a){return typeof a=="string"?a:Wa(a)}return gy(t,n,null,e)}function Ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function py(){return Math.random().toString(36).substring(2,10)}function Wf(e,t){return{usr:e.state,key:e.key,idx:t}}function td(e,t,n=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Os(t):t,state:n,key:t&&t.key||s||py()}}function Wa({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Os(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function gy(e,t,n,s={}){let{window:a=document.defaultView,v5Compat:i=!1}=s,o=a.history,l="POP",c=null,d=f();d==null&&(d=0,o.replaceState({...o.state,idx:d},""));function f(){return(o.state||{idx:null}).idx}function m(){l="POP";let k=f(),y=k==null?null:k-d;d=k,c&&c({action:l,location:j.location,delta:y})}function h(k,y){l="PUSH";let x=td(j.location,k,y);n&&n(x,k),d=f()+1;let v=Wf(x,d),N=j.createHref(x);try{o.pushState(v,"",N)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(N)}i&&c&&c({action:l,location:j.location,delta:1})}function b(k,y){l="REPLACE";let x=td(j.location,k,y);n&&n(x,k),d=f();let v=Wf(x,d),N=j.createHref(x);o.replaceState(v,"",N),i&&c&&c({action:l,location:j.location,delta:0})}function g(k){return xy(k)}let j={get action(){return l},get location(){return e(a,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Bf,m),c=k,()=>{a.removeEventListener(Bf,m),c=null}},createHref(k){return t(a,k)},createURL:g,encodeLocation(k){let y=g(k);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:h,replace:b,go(k){return o.go(k)}};return j}function xy(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(n,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Wa(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function l0(e,t,n="/"){return vy(e,t,n,!1)}function vy(e,t,n,s){let a=typeof t=="string"?Os(t):t,i=Fn(a.pathname||"/",n);if(i==null)return null;let o=c0(e);yy(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let d=Ty(i);l=_y(o[c],d,s)}return l}function c0(e,t=[],n=[],s=""){let a=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(Ue(c.relativePath.startsWith(s),`Absolute route path "${c.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(s.length));let d=Dn([s,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(Ue(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),c0(i.children,t,f,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:Cy(d,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let c of d0(i.path))a(i,o,c)}),t}function d0(e){let t=e.split("/");if(t.length===0)return[];let[n,...s]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(s.length===0)return a?[i,""]:[i];let o=d0(s.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),a&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function yy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ey(t.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var by=/^:[\w-]+$/,wy=3,jy=2,Ny=1,ky=10,Sy=-2,Hf=e=>e==="*";function Cy(e,t){let n=e.split("/"),s=n.length;return n.some(Hf)&&(s+=Sy),t&&(s+=jy),n.filter(a=>!Hf(a)).reduce((a,i)=>a+(by.test(i)?wy:i===""?Ny:ky),s)}function Ey(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function _y(e,t,n=!1){let{routesMeta:s}=e,a={},i="/",o=[];for(let l=0;l<s.length;++l){let c=s[l],d=l===s.length-1,f=i==="/"?t:t.slice(i.length)||"/",m=Ro({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},f),h=c.route;if(!m&&d&&n&&!s[s.length-1].route.index&&(m=Ro({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!m)return null;Object.assign(a,m.params),o.push({params:a,pathname:Dn([i,m.pathname]),pathnameBase:Dy(Dn([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=Dn([i,m.pathnameBase]))}return o}function Ro(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,s]=Iy(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((d,{paramName:f,isOptional:m},h)=>{if(f==="*"){let g=l[h]||"";o=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const b=l[h];return m&&!b?d[f]=void 0:d[f]=(b||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:e}}function Iy(e,t=!1,n=!0){sn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function Ty(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return sn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Fn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,s=e.charAt(n);return s&&s!=="/"?null:e.slice(n)||"/"}function Py(e,t="/"){let{pathname:n,search:s="",hash:a=""}=typeof e=="string"?Os(e):e;return{pathname:n?n.startsWith("/")?n:Ry(n,t):t,search:Ly(s),hash:Oy(a)}}function Ry(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function ql(e,t,n,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ay(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ou(e){let t=Ay(e);return t.map((n,s)=>s===t.length-1?n.pathname:n.pathnameBase)}function lu(e,t,n,s=!1){let a;typeof e=="string"?a=Os(e):(a={...e},Ue(!a.pathname||!a.pathname.includes("?"),ql("?","pathname","search",a)),Ue(!a.pathname||!a.pathname.includes("#"),ql("#","pathname","hash",a)),Ue(!a.search||!a.search.includes("#"),ql("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=n;else{let m=t.length-1;if(!s&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),m-=1;a.pathname=h.join("/")}l=m>=0?t[m]:"/"}let c=Py(a,l),d=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}var Dn=e=>e.join("/").replace(/\/\/+/g,"/"),Dy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ly=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Oy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function My(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var u0=["POST","PUT","PATCH","DELETE"];new Set(u0);var zy=["GET",...u0];new Set(zy);var Ms=u.createContext(null);Ms.displayName="DataRouter";var sl=u.createContext(null);sl.displayName="DataRouterState";u.createContext(!1);var f0=u.createContext({isTransitioning:!1});f0.displayName="ViewTransition";var Fy=u.createContext(new Map);Fy.displayName="Fetchers";var $y=u.createContext(null);$y.displayName="Await";var xn=u.createContext(null);xn.displayName="Navigation";var ti=u.createContext(null);ti.displayName="Location";var on=u.createContext({outlet:null,matches:[],isDataRoute:!1});on.displayName="Route";var cu=u.createContext(null);cu.displayName="RouteError";function Uy(e,{relative:t}={}){Ue(zs(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=u.useContext(xn),{hash:a,pathname:i,search:o}=ni(e,{relative:t}),l=i;return n!=="/"&&(l=i==="/"?n:Dn([n,i])),s.createHref({pathname:l,search:o,hash:a})}function zs(){return u.useContext(ti)!=null}function tt(){return Ue(zs(),"useLocation() may be used only in the context of a <Router> component."),u.useContext(ti).location}var h0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function m0(e){u.useContext(xn).static||u.useLayoutEffect(e)}function ke(){let{isDataRoute:e}=u.useContext(on);return e?rb():By()}function By(){Ue(zs(),"useNavigate() may be used only in the context of a <Router> component.");let e=u.useContext(Ms),{basename:t,navigator:n}=u.useContext(xn),{matches:s}=u.useContext(on),{pathname:a}=tt(),i=JSON.stringify(ou(s)),o=u.useRef(!1);return m0(()=>{o.current=!0}),u.useCallback((c,d={})=>{if(sn(o.current,h0),!o.current)return;if(typeof c=="number"){n.go(c);return}let f=lu(c,JSON.parse(i),a,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Dn([t,f.pathname])),(d.replace?n.replace:n.push)(f,d.state,d)},[t,n,i,a,e])}var Wy=u.createContext(null);function Hy(e){let t=u.useContext(on).outlet;return t&&u.createElement(Wy.Provider,{value:e},t)}function qy(){let{matches:e}=u.useContext(on),t=e[e.length-1];return t?t.params:{}}function ni(e,{relative:t}={}){let{matches:n}=u.useContext(on),{pathname:s}=tt(),a=JSON.stringify(ou(n));return u.useMemo(()=>lu(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function Yy(e,t){return p0(e,t)}function p0(e,t,n,s){var y;Ue(zs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=u.useContext(xn),{matches:i}=u.useContext(on),o=i[i.length-1],l=o?o.params:{},c=o?o.pathname:"/",d=o?o.pathnameBase:"/",f=o&&o.route;{let x=f&&f.path||"";g0(c,!f||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let m=tt(),h;if(t){let x=typeof t=="string"?Os(t):t;Ue(d==="/"||((y=x.pathname)==null?void 0:y.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${x.pathname}" was given in the \`location\` prop.`),h=x}else h=m;let b=h.pathname||"/",g=b;if(d!=="/"){let x=d.replace(/^\//,"").split("/");g="/"+b.replace(/^\//,"").split("/").slice(x.length).join("/")}let j=l0(e,{pathname:g});sn(f||j!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),sn(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=Xy(j&&j.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:Dn([d,a.encodeLocation?a.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?d:Dn([d,a.encodeLocation?a.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n,s);return t&&k?u.createElement(ti.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},k):k}function Gy(){let e=nb(),t=My(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},i={padding:"2px 4px",backgroundColor:s},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=u.createElement(u.Fragment,null,u.createElement("p",null,"💿 Hey developer 👋"),u.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",u.createElement("code",{style:i},"ErrorBoundary")," or"," ",u.createElement("code",{style:i},"errorElement")," prop on your route.")),u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:a},n):null,o)}var Vy=u.createElement(Gy,null),Qy=class extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?u.createElement(on.Provider,{value:this.props.routeContext},u.createElement(cu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ky({routeContext:e,match:t,children:n}){let s=u.useContext(Ms);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),u.createElement(on.Provider,{value:e},n)}function Xy(e,t=[],n=null,s=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,i=n==null?void 0:n.errors;if(i!=null){let c=a.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);Ue(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let o=!1,l=-1;if(n)for(let c=0;c<a.length;c++){let d=a[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=c),d.route.id){let{loaderData:f,errors:m}=n,h=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!m||m[d.route.id]===void 0);if(d.route.lazy||h){o=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((c,d,f)=>{let m,h=!1,b=null,g=null;n&&(m=i&&d.route.id?i[d.route.id]:void 0,b=d.route.errorElement||Vy,o&&(l<0&&f===0?(g0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,g=null):l===f&&(h=!0,g=d.route.hydrateFallbackElement||null)));let j=t.concat(a.slice(0,f+1)),k=()=>{let y;return m?y=b:h?y=g:d.route.Component?y=u.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,u.createElement(Ky,{match:d,routeContext:{outlet:c,matches:j,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?u.createElement(Qy,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:k(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):k()},null)}function du(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jy(e){let t=u.useContext(Ms);return Ue(t,du(e)),t}function Zy(e){let t=u.useContext(sl);return Ue(t,du(e)),t}function eb(e){let t=u.useContext(on);return Ue(t,du(e)),t}function uu(e){let t=eb(e),n=t.matches[t.matches.length-1];return Ue(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function tb(){return uu("useRouteId")}function nb(){var s;let e=u.useContext(cu),t=Zy("useRouteError"),n=uu("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[n]}function rb(){let{router:e}=Jy("useNavigate"),t=uu("useNavigate"),n=u.useRef(!1);return m0(()=>{n.current=!0}),u.useCallback(async(a,i={})=>{sn(n.current,h0),n.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...i}))},[e,t])}var qf={};function g0(e,t,n){!t&&!qf[e]&&(qf[e]=!0,sn(!1,n))}u.memo(sb);function sb({routes:e,future:t,state:n}){return p0(e,void 0,n,t)}function ab({to:e,replace:t,state:n,relative:s}){Ue(zs(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=u.useContext(xn);sn(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=u.useContext(on),{pathname:o}=tt(),l=ke(),c=lu(e,ou(i),o,s==="path"),d=JSON.stringify(c);return u.useEffect(()=>{l(JSON.parse(d),{replace:t,state:n,relative:s})},[l,d,s,t,n]),null}function ib(e){return Hy(e.context)}function Te(e){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ob({basename:e="/",children:t=null,location:n,navigationType:s="POP",navigator:a,static:i=!1}){Ue(!zs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=u.useMemo(()=>({basename:o,navigator:a,static:i,future:{}}),[o,a,i]);typeof n=="string"&&(n=Os(n));let{pathname:c="/",search:d="",hash:f="",state:m=null,key:h="default"}=n,b=u.useMemo(()=>{let g=Fn(c,o);return g==null?null:{location:{pathname:g,search:d,hash:f,state:m,key:h},navigationType:s}},[o,c,d,f,m,h,s]);return sn(b!=null,`<Router basename="${o}"> is not able to match the URL "${c}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:u.createElement(xn.Provider,{value:l},u.createElement(ti.Provider,{children:t,value:b}))}function lb({children:e,location:t}){return Yy(nd(e),t)}function nd(e,t=[]){let n=[];return u.Children.forEach(e,(s,a)=>{if(!u.isValidElement(s))return;let i=[...t,a];if(s.type===u.Fragment){n.push.apply(n,nd(s.props.children,i));return}Ue(s.type===Te,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!s.props.index||!s.props.children,"An index route cannot have child routes.");let o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=nd(s.props.children,i)),n.push(o)}),n}var Xi="get",Ji="application/x-www-form-urlencoded";function al(e){return e!=null&&typeof e.tagName=="string"}function cb(e){return al(e)&&e.tagName.toLowerCase()==="button"}function db(e){return al(e)&&e.tagName.toLowerCase()==="form"}function ub(e){return al(e)&&e.tagName.toLowerCase()==="input"}function fb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hb(e,t){return e.button===0&&(!t||t==="_self")&&!fb(e)}function rd(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let s=e[n];return t.concat(Array.isArray(s)?s.map(a=>[n,a]):[[n,s]])},[]))}function mb(e,t){let n=rd(e);return t&&t.forEach((s,a)=>{n.has(a)||t.getAll(a).forEach(i=>{n.append(a,i)})}),n}var _i=null;function pb(){if(_i===null)try{new FormData(document.createElement("form"),0),_i=!1}catch{_i=!0}return _i}var gb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yl(e){return e!=null&&!gb.has(e)?(sn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ji}"`),null):e}function xb(e,t){let n,s,a,i,o;if(db(e)){let l=e.getAttribute("action");s=l?Fn(l,t):null,n=e.getAttribute("method")||Xi,a=Yl(e.getAttribute("enctype"))||Ji,i=new FormData(e)}else if(cb(e)||ub(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(s=c?Fn(c,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||Xi,a=Yl(e.getAttribute("formenctype"))||Yl(l.getAttribute("enctype"))||Ji,i=new FormData(l,e),!pb()){let{name:d,type:f,value:m}=e;if(f==="image"){let h=d?`${d}.`:"";i.append(`${h}x`,"0"),i.append(`${h}y`,"0")}else d&&i.append(d,m)}}else{if(al(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Xi,s=null,a=Ji,o=e}return i&&a==="text/plain"&&(o=i,i=void 0),{action:s,method:n.toLowerCase(),encType:a,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fu(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vb(e,t,n){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${n}`:t&&Fn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function yb(e,t){if(e.id in t)return t[e.id];try{let n=await ei(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function bb(e){return e!=null&&typeof e.page=="string"}function wb(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function jb(e,t,n){let s=await Promise.all(e.map(async a=>{let i=t.routes[a.route.id];if(i){let o=await yb(i,n);return o.links?o.links():[]}return[]}));return Cb(s.flat(1).filter(wb).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Yf(e,t,n,s,a,i){let o=(c,d)=>n[d]?c.route.id!==n[d].route.id:!0,l=(c,d)=>{var f;return n[d].pathname!==c.pathname||((f=n[d].route.path)==null?void 0:f.endsWith("*"))&&n[d].params["*"]!==c.params["*"]};return i==="assets"?t.filter((c,d)=>o(c,d)||l(c,d)):i==="data"?t.filter((c,d)=>{var m;let f=s.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(o(c,d)||l(c,d))return!0;if(c.route.shouldRevalidate){let h=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function Nb(e,t,{includeHydrateFallback:n}={}){return kb(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let i=[a.module];return a.clientActionModule&&(i=i.concat(a.clientActionModule)),a.clientLoaderModule&&(i=i.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(i=i.concat(a.hydrateFallbackModule)),a.imports&&(i=i.concat(a.imports)),i}).flat(1))}function kb(e){return[...new Set(e)]}function Sb(e){let t={},n=Object.keys(e).sort();for(let s of n)t[s]=e[s];return t}function Cb(e,t){let n=new Set,s=new Set(t);return e.reduce((a,i)=>{if(t&&!bb(i)&&i.as==="script"&&i.href&&s.has(i.href))return a;let l=JSON.stringify(Sb(i));return n.has(l)||(n.add(l),a.push({key:l,link:i})),a},[])}function x0(){let e=u.useContext(Ms);return fu(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Eb(){let e=u.useContext(sl);return fu(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var hu=u.createContext(void 0);hu.displayName="FrameworkContext";function v0(){let e=u.useContext(hu);return fu(e,"You must render this element inside a <HydratedRouter> element"),e}function _b(e,t){let n=u.useContext(hu),[s,a]=u.useState(!1),[i,o]=u.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:d,onMouseLeave:f,onTouchStart:m}=t,h=u.useRef(null);u.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let j=y=>{y.forEach(x=>{o(x.isIntersecting)})},k=new IntersectionObserver(j,{threshold:.5});return h.current&&k.observe(h.current),()=>{k.disconnect()}}},[e]),u.useEffect(()=>{if(s){let j=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(j)}}},[s]);let b=()=>{a(!0)},g=()=>{a(!1),o(!1)};return n?e!=="intent"?[i,h,{}]:[i,h,{onFocus:Js(l,b),onBlur:Js(c,g),onMouseEnter:Js(d,b),onMouseLeave:Js(f,g),onTouchStart:Js(m,b)}]:[!1,h,{}]}function Js(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ib({page:e,...t}){let{router:n}=x0(),s=u.useMemo(()=>l0(n.routes,e,n.basename),[n.routes,e,n.basename]);return s?u.createElement(Pb,{page:e,matches:s,...t}):null}function Tb(e){let{manifest:t,routeModules:n}=v0(),[s,a]=u.useState([]);return u.useEffect(()=>{let i=!1;return jb(e,t,n).then(o=>{i||a(o)}),()=>{i=!0}},[e,t,n]),s}function Pb({page:e,matches:t,...n}){let s=tt(),{manifest:a,routeModules:i}=v0(),{basename:o}=x0(),{loaderData:l,matches:c}=Eb(),d=u.useMemo(()=>Yf(e,t,c,a,s,"data"),[e,t,c,a,s]),f=u.useMemo(()=>Yf(e,t,c,a,s,"assets"),[e,t,c,a,s]),m=u.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let g=new Set,j=!1;if(t.forEach(y=>{var v;let x=a.routes[y.route.id];!x||!x.hasLoader||(!d.some(N=>N.route.id===y.route.id)&&y.route.id in l&&((v=i[y.route.id])!=null&&v.shouldRevalidate)||x.hasClientLoader?j=!0:g.add(y.route.id))}),g.size===0)return[];let k=vb(e,o,"data");return j&&g.size>0&&k.searchParams.set("_routes",t.filter(y=>g.has(y.route.id)).map(y=>y.route.id).join(",")),[k.pathname+k.search]},[o,l,s,a,d,t,e,i]),h=u.useMemo(()=>Nb(f,a),[f,a]),b=Tb(f);return u.createElement(u.Fragment,null,m.map(g=>u.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...n})),h.map(g=>u.createElement("link",{key:g,rel:"modulepreload",href:g,...n})),b.map(({key:g,link:j})=>u.createElement("link",{key:g,...j})))}function Rb(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var y0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{y0&&(window.__reactRouterVersion="7.7.1")}catch{}function Ab({basename:e,children:t,window:n}){let s=u.useRef();s.current==null&&(s.current=my({window:n,v5Compat:!0}));let a=s.current,[i,o]=u.useState({action:a.action,location:a.location}),l=u.useCallback(c=>{u.startTransition(()=>o(c))},[o]);return u.useLayoutEffect(()=>a.listen(l),[a,l]),u.createElement(ob,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a})}var b0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w0=u.forwardRef(function({onClick:t,discover:n="render",prefetch:s="none",relative:a,reloadDocument:i,replace:o,state:l,target:c,to:d,preventScrollReset:f,viewTransition:m,...h},b){let{basename:g}=u.useContext(xn),j=typeof d=="string"&&b0.test(d),k,y=!1;if(typeof d=="string"&&j&&(k=d,y0))try{let w=new URL(window.location.href),S=d.startsWith("//")?new URL(w.protocol+d):new URL(d),A=Fn(S.pathname,g);S.origin===w.origin&&A!=null?d=A+S.search+S.hash:y=!0}catch{sn(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let x=Uy(d,{relative:a}),[v,N,C]=_b(s,h),I=Mb(d,{replace:o,state:l,target:c,preventScrollReset:f,relative:a,viewTransition:m});function E(w){t&&t(w),w.defaultPrevented||I(w)}let p=u.createElement("a",{...h,...C,href:k||x,onClick:y||i?t:E,ref:Rb(b,N),target:c,"data-discover":!j&&n==="render"?"true":void 0});return v&&!j?u.createElement(u.Fragment,null,p,u.createElement(Ib,{page:x})):p});w0.displayName="Link";var Db=u.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:s="",end:a=!1,style:i,to:o,viewTransition:l,children:c,...d},f){let m=ni(o,{relative:d.relative}),h=tt(),b=u.useContext(sl),{navigator:g,basename:j}=u.useContext(xn),k=b!=null&&Bb(m)&&l===!0,y=g.encodeLocation?g.encodeLocation(m).pathname:m.pathname,x=h.pathname,v=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(x=x.toLowerCase(),v=v?v.toLowerCase():null,y=y.toLowerCase()),v&&j&&(v=Fn(v,j)||v);const N=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let C=x===y||!a&&x.startsWith(y)&&x.charAt(N)==="/",I=v!=null&&(v===y||!a&&v.startsWith(y)&&v.charAt(y.length)==="/"),E={isActive:C,isPending:I,isTransitioning:k},p=C?t:void 0,w;typeof s=="function"?w=s(E):w=[s,C?"active":null,I?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let S=typeof i=="function"?i(E):i;return u.createElement(w0,{...d,"aria-current":p,className:w,ref:f,style:S,to:o,viewTransition:l},typeof c=="function"?c(E):c)});Db.displayName="NavLink";var Lb=u.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:s,replace:a,state:i,method:o=Xi,action:l,onSubmit:c,relative:d,preventScrollReset:f,viewTransition:m,...h},b)=>{let g=$b(),j=Ub(l,{relative:d}),k=o.toLowerCase()==="get"?"get":"post",y=typeof l=="string"&&b0.test(l),x=v=>{if(c&&c(v),v.defaultPrevented)return;v.preventDefault();let N=v.nativeEvent.submitter,C=(N==null?void 0:N.getAttribute("formmethod"))||o;g(N||v.currentTarget,{fetcherKey:t,method:C,navigate:n,replace:a,state:i,relative:d,preventScrollReset:f,viewTransition:m})};return u.createElement("form",{ref:b,method:k,action:j,onSubmit:s?c:x,...h,"data-discover":!y&&e==="render"?"true":void 0})});Lb.displayName="Form";function Ob(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function j0(e){let t=u.useContext(Ms);return Ue(t,Ob(e)),t}function Mb(e,{target:t,replace:n,state:s,preventScrollReset:a,relative:i,viewTransition:o}={}){let l=ke(),c=tt(),d=ni(e,{relative:i});return u.useCallback(f=>{if(hb(f,t)){f.preventDefault();let m=n!==void 0?n:Wa(c)===Wa(d);l(e,{replace:m,state:s,preventScrollReset:a,relative:i,viewTransition:o})}},[c,l,d,n,s,t,e,a,i,o])}function N0(e){sn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=u.useRef(rd(e)),n=u.useRef(!1),s=tt(),a=u.useMemo(()=>mb(s.search,n.current?null:t.current),[s.search]),i=ke(),o=u.useCallback((l,c)=>{const d=rd(typeof l=="function"?l(new URLSearchParams(a)):l);n.current=!0,i("?"+d,c)},[i,a]);return[a,o]}var zb=0,Fb=()=>`__${String(++zb)}__`;function $b(){let{router:e}=j0("useSubmit"),{basename:t}=u.useContext(xn),n=tb();return u.useCallback(async(s,a={})=>{let{action:i,method:o,encType:l,formData:c,body:d}=xb(s,t);if(a.navigate===!1){let f=a.fetcherKey||Fb();await e.fetch(f,n,a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:d,formMethod:a.method||o,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:d,formMethod:a.method||o,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}function Ub(e,{relative:t}={}){let{basename:n}=u.useContext(xn),s=u.useContext(on);Ue(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),i={...ni(e||".",{relative:t})},o=tt();if(e==null){i.search=o.search;let l=new URLSearchParams(i.search),c=l.getAll("index");if(c.some(f=>f==="")){l.delete("index"),c.filter(m=>m).forEach(m=>l.append("index",m));let f=l.toString();i.search=f?`?${f}`:""}}return(!e||e===".")&&a.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:Dn([n,i.pathname])),Wa(i)}function Bb(e,{relative:t}={}){let n=u.useContext(f0);Ue(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=j0("useViewTransitionState"),a=ni(e,{relative:t});if(!n.isTransitioning)return!1;let i=Fn(n.currentLocation.pathname,s)||n.currentLocation.pathname,o=Fn(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Ro(a.pathname,o)!=null||Ro(a.pathname,i)!=null}function Wb({size:e=22,spinning:t=!1}){return r.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:r.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[r.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),r.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),r.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),r.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),r.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),r.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),r.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Hb(){const e=ke(),{pathname:t}=tt(),n=u.useRef({}),s=u.useRef({}),[a,i]=u.useState(!1),o=u.useRef(null);u.useEffect(()=>{const v=o.current;if(!v)return;const N=C=>{C.preventDefault();const I=.1;v.scrollTop+=C.deltaY*I};return v.addEventListener("wheel",N,{passive:!1}),()=>{v.removeEventListener("wheel",N)}},[]);const l=v=>{if(navigator.vibrate)switch(v){case"light":navigator.vibrate(20);break;case"medium":navigator.vibrate(35);break;case"heavy":navigator.vibrate(50);break;case"double":navigator.vibrate([30,50,30]);break;case"success":navigator.vibrate([20,50,20,50,20]);break;default:navigator.vibrate(25)}};u.useCallback(()=>{var v;if(["/","/play","/swipe","/profile"].includes(t)){const N=((v=o.current)==null?void 0:v.scrollTop)||0,C=window.scrollY||window.pageYOffset||0,I=N>0?N:C;console.log(`Saving scroll for ${t}: main=${N}, window=${C}, saved=${I}`),n.current[t]=I}},[t]),u.useEffect(()=>{let v=null;const N=()=>{v&&cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var I;if(["/","/play","/swipe","/profile"].includes(t)){const E=((I=o.current)==null?void 0:I.scrollTop)||0,p=window.scrollY||window.pageYOffset||0,w=E>0?E:p;n.current[t]=w,console.log(`Scroll position updated for ${t}: ${w}`)}})};window.addEventListener("scroll",N,{passive:!0});const C=o.current;return C&&C.addEventListener("scroll",N,{passive:!0}),()=>{v&&cancelAnimationFrame(v),window.removeEventListener("scroll",N),C&&C.removeEventListener("scroll",N)}},[t]),u.useEffect(()=>{if(o.current&&o.current.classList.add("navigating"),["/profile/","/quiz/","/practice/","/play/classic","/settings","/about"].some(C=>t.startsWith(C)))window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20);else{const C=n.current[t];if(console.log(`Attempting to restore scroll for ${t}: ${C}`),C!=null&&C>0){const I=(E=0)=>{E>=5||(o.current?(o.current.scrollTop=C,setTimeout(()=>{var w;const p=((w=o.current)==null?void 0:w.scrollTop)||0;Math.abs(p-C)>10?(window.scrollTo(0,C),setTimeout(()=>{const S=window.scrollY||window.pageYOffset||0;console.log(`Restore attempt ${E+1}: main=${p}, window=${S}, target=${C}`),Math.abs(S-C)>10&&Math.abs(p-C)>10&&I(E+1)},20)):console.log(`Successfully restored scroll to ${p}`)},20)):window.scrollTo(0,C))};I(0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}else window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}},[t]);const[c,d]=u.useState(!1),[f,m]=u.useState({open:!1,go:null}),[h,b]=u.useState(!1);u.useEffect(()=>{const v=()=>{b(document.body.classList.contains("hide-bottom-nav"))};v();const N=new MutationObserver(v);return N.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>N.disconnect()},[]),u.useEffect(()=>{const v=new MutationObserver(()=>{d(document.body.classList.contains("modal-open"))});return v.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>v.disconnect()},[]);const j=c||h||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(v=>v.test(t)),k=v=>v==="/"?t==="/":t.startsWith(v),y=u.useCallback(()=>{console.log("Scrolling to top"),window.scrollTo({top:0,behavior:"smooth"}),o.current&&o.current.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},[]),x=({path:v,icon:N,label:C,emoji:I})=>{const E=k(v),[p,w]=u.useState(!1),S=u.useCallback(()=>{var X;const A=Date.now();if(E){const V=s.current[v]||0;console.log(`Active tab clicked. Time since last tap: ${A-V}ms`),A-V<500?(console.log("Double tap detected!"),y(),l("double"),s.current[v]=0):s.current[v]=A;return}if(["/","/play","/swipe","/profile"].includes(t)){const V=((X=o.current)==null?void 0:X.scrollTop)||0,H=window.scrollY||window.pageYOffset||0,O=V>0?V:H;console.log(`Manually saving scroll before navigation from ${t}: ${O}`),n.current[t]=O}const _=s.current[v]||0;if(A-_<500){console.log("Double tap on inactive tab - navigating and scrolling to top"),n.current[v]=0,v==="/play"?(i(!0),l("double"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1),setTimeout(y,100)},200)):(l("double"),e(v),setTimeout(y,100)),s.current[v]=0;return}s.current[v]=A,w(!0),setTimeout(()=>w(!1),600);const F=()=>{if(v==="/play"){i(!0),l("heavy"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1)},200);return}l("medium"),e(v)};if(localStorage.getItem("qp_in_question")==="true"){m({open:!0,go:F});return}F()},[E,v,t,e,y,l]);return r.jsxs("button",{type:"button",onClick:S,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${E?"scale-110":"scale-100 hover:scale-105"}
          ${p?"animate-bounce":""}`,"aria-current":E?"page":void 0,children:[E&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),r.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),r.jsx("div",{className:`leading-none text-2xl transition-transform ${E?"scale-125":""} ${v==="/play"&&a?"animate-spin":""}`,children:I||N}),r.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${E?"text-white":"text-base-muted/80"}`,children:C})]})};return r.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[r.jsx("style",{children:`
        .hide-bottom-nav nav[role="navigation"] {
         display: none !important;
        }
        main.navigating {
          visibility: hidden;
        }
        main {
          scroll-behavior: auto !important;
        }
      `}),r.jsx("main",{ref:o,className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:j||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:j||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto"},children:r.jsx(ib,{})}),f.open&&r.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[r.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[r.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),r.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),r.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>{l("medium"),m({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),r.jsx("button",{onClick:()=>{l("heavy");const v=f.go;m({open:!1,go:null}),v==null||v()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),r.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!j&&r.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[r.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),r.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),r.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[r.jsx(x,{path:"/",emoji:"🏠",label:"Home"}),r.jsx(x,{path:"/play",icon:r.jsx(Wb,{size:26,spinning:a}),label:"Play"}),r.jsx(x,{path:"/swipe",emoji:"📚",label:"Swipe"}),r.jsx(x,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ao.apply(null,arguments)}function qb(e,t){if(e==null)return{};var n={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;n[s]=e[s]}return n}function Yb(e){u.useEffect(e,[])}var Gb=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function st(e,t){var n=t===void 0?{}:t,s=n.volume,a=s===void 0?1:s,i=n.playbackRate,o=i===void 0?1:i,l=n.soundEnabled,c=l===void 0?!0:l,d=n.interrupt,f=d===void 0?!1:d,m=n.onload,h=qb(n,Gb),b=It.useRef(null),g=It.useRef(!1),j=It.useState(null),k=j[0],y=j[1],x=It.useState(null),v=x[0],N=x[1],C=function(){typeof m=="function"&&m.call(this),g.current&&y(this.duration()*1e3),N(this)};Yb(function(){return ei(()=>import("./howler-cde34050.js").then(S=>S.h),[]).then(function(S){if(!g.current){var A;b.current=(A=S.Howl)!==null&&A!==void 0?A:S.default.Howl,g.current=!0,new b.current(Ao({src:Array.isArray(e)?e:[e],volume:a,rate:o,onload:C},h))}}),function(){g.current=!1}}),It.useEffect(function(){b.current&&v&&N(new b.current(Ao({src:Array.isArray(e)?e:[e],volume:a,onload:C},h)))},[JSON.stringify(e)]),It.useEffect(function(){v&&(v.volume(a),h.sprite||v.rate(o))},[v,a,o]);var I=It.useCallback(function(S){typeof S>"u"&&(S={}),!(!v||!c&&!S.forceSoundEnabled)&&(f&&v.stop(),S.playbackRate&&v.rate(S.playbackRate),v.play(S.id))},[v,c,f]),E=It.useCallback(function(S){v&&v.stop(S)},[v]),p=It.useCallback(function(S){v&&v.pause(S)},[v]),w=[I,{sound:v,stop:E,pause:p,duration:k}];return w}class Vb{constructor(){console.log("UserService initialized")}getUserData(t){try{if(!t)return console.log("No phone provided to getUserData"),null;const s=JSON.parse(localStorage.getItem("users")||"{}")[t]||{},a=JSON.parse(localStorage.getItem(`user_profile_${t}`)||"{}"),i={...s,phone:t,username:a.name||s.username||"",email:a.email||"",city:a.city||"",state:a.state||"",country:a.country||""};return console.log("getUserData merged result:",i),i}catch(n){return console.error("Error in getUserData:",n),null}}getUserDataByIdentifier(t){try{const n=this.getUserData(t);if(n)return n;const s=JSON.parse(localStorage.getItem("users")||"{}");for(let a in s)if(s[a].username===t)return this.getUserData(a);return null}catch(n){return console.error("Error in getUserDataByIdentifier:",n),null}}userExists(t){try{return JSON.parse(localStorage.getItem("users")||"{}").hasOwnProperty(t)}catch(n){return console.error("Error checking if user exists:",n),!1}}createUser(t,n){try{console.log("Creating user:",t,n);const s=JSON.parse(localStorage.getItem("users")||"{}");return s[t]={username:n.username,password:n.password||"123456",avatar:n.avatar,gender:n.gender,ageGroup:n.ageGroup,phone:t,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(s)),this.setCurrentUser(t),console.log("User created successfully"),!0}catch(s){return console.error("Error creating user:",s),!1}}setCurrentUser(t){try{const n=this.getUserData(t);if(!n)return!1;const s={phone:t,username:n.username,avatar:n.avatar,gender:n.gender,ageGroup:n.ageGroup};localStorage.setItem("currentUser",JSON.stringify(s));const a=JSON.parse(localStorage.getItem("qp_player")||"{}");return a.name=n.username,localStorage.setItem("qp_player",JSON.stringify(a)),console.log("Current user set:",s),!0}catch(n){return console.error("Error setting current user:",n),!1}}updateUserProfile(t,n){try{if(console.log("Updating profile for:",t,n),n.name){const l=JSON.parse(localStorage.getItem("users")||"{}");if(l[t]){l[t].username=n.name;const c=l[t].password;l[t].password=c,localStorage.setItem("users",JSON.stringify(l))}}const s=`user_profile_${t}`,i={...JSON.parse(localStorage.getItem(s)||"{}"),...n};localStorage.setItem(s,JSON.stringify(i));const o=JSON.parse(localStorage.getItem("currentUser")||"{}");if(o.phone===t){o.username=n.name||o.username,localStorage.setItem("currentUser",JSON.stringify(o));const l=JSON.parse(localStorage.getItem("qp_player")||"{}");l.name=n.name||l.name,localStorage.setItem("qp_player",JSON.stringify(l))}return console.log("Profile updated successfully"),!0}catch(s){return console.error("Error updating profile:",s),!1}}getCurrentUser(){try{const t=JSON.parse(localStorage.getItem("currentUser")||"{}");return t.phone?this.getUserData(t.phone):null}catch(t){return console.error("Error getting current user:",t),null}}signOut(){try{return localStorage.removeItem("currentUser"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),console.log("User signed out"),!0}catch(t){return console.error("Error signing out:",t),!1}}}const lt=new Vb;window.userService=lt;class Qb{constructor(){this.STORAGE_KEYS={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on",GAME_STATS:"game_stats_",DAILY_PROGRESS:"daily_progress_",QUEST_DATA:"quest_data_",STREAK_DATA:"streak_data_",GAME_HISTORY:"game_history_",QUIZ_RESULTS:"quiz_current_results"}}getCoins(){return this.safeGet(this.STORAGE_KEYS.COINS,0)}setCoins(t){return this.safeSet(this.STORAGE_KEYS.COINS,t),t}addCoins(t,n=""){const a=this.getCoins()+t;this.setCoins(a);const i=lt.getCurrentUser();return i!=null&&i.phone&&(this.logCoinTransaction(i.phone,t,n),this.updateDailyCoins(i.phone,t)),a}spendCoins(t,n=""){const s=this.getCoins();if(s<t)return!1;const a=s-t;this.setCoins(a);const i=lt.getCurrentUser();return i!=null&&i.phone&&this.logCoinTransaction(i.phone,-t,n),!0}getXP(){return this.safeGet(this.STORAGE_KEYS.XP,0)}setXP(t){return this.safeSet(this.STORAGE_KEYS.XP,t),t}addXP(t){const s=this.getXP()+t;this.setXP(s),this.checkAndUpdateLevel(s);const a=lt.getCurrentUser();return a!=null&&a.phone&&this.updateDailyXP(a.phone,t),s}getLevel(){return this.safeGet(this.STORAGE_KEYS.LEVEL,1)}setLevel(t){return this.safeSet(this.STORAGE_KEYS.LEVEL,t),t}checkAndUpdateLevel(t=null){const n=t||this.getXP(),s=this.getLevel();let a=1,i=0;for(;i<=n;)a++,i=100*a*(a-1);if(a--,a>s){this.setLevel(a);const o=50*(a-s);return this.addCoins(o,`Level up to ${a}!`),!0}return!1}initializeUserData(t){if(!t)return;const n=this.getUserStats(t);if(n)return n;const s={stats:{totalQuizzes:0,totalPractice:0,totalCorrect:0,totalWrong:0,winStreak:0,bestStreak:0,highScore:0,gamesPlayed:0},quests:{daily:[{id:"quiz_3",type:"quiz",target:3,current:0,reward:60,completed:!1},{id:"practice_15",type:"practice",target:15,current:0,reward:100,completed:!1},{id:"win_5",type:"win_streak",target:5,current:0,reward:150,completed:!1},{id:"speed_run",type:"speed_run",target:1,current:0,reward:80,completed:!1}]},streak:{current:0,lastPlayedDate:null,longestStreak:0}};return this.safeSet(this.STORAGE_KEYS.GAME_STATS+t,s.stats),this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,s.quests),this.safeSet(this.STORAGE_KEYS.STREAK_DATA+t,s.streak),this.resetDailyProgress(t),s}getUserStats(t){return t?this.safeGet(this.STORAGE_KEYS.GAME_STATS+t,null):null}updateUserStats(t,n){if(!t)return null;const a={...this.getUserStats(t)||{},...n};return this.safeSet(this.STORAGE_KEYS.GAME_STATS+t,a),a}getDailyProgress(t){if(!t)return null;const n=this.safeGet(this.STORAGE_KEYS.DAILY_PROGRESS+t,null),s=new Date().toDateString();return!n||n.date!==s?this.resetDailyProgress(t):n}resetDailyProgress(t){if(!t)return null;const n={date:new Date().toDateString(),quizzesPlayed:0,practiceCompleted:0,coinsEarned:0,xpEarned:0,questsCompleted:[]};return this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,n),this.resetDailyQuests(t),n}updateDailyCoins(t,n){if(!t)return;const s=this.getDailyProgress(t);s&&(s.coinsEarned+=n,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,s))}updateDailyXP(t,n){if(!t)return;const s=this.getDailyProgress(t);s&&(s.xpEarned+=n,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,s))}getQuestData(t){return t?this.safeGet(this.STORAGE_KEYS.QUEST_DATA+t,null):null}resetDailyQuests(t){if(!t)return null;const n={daily:[{id:"quiz_3",type:"quiz",target:3,current:0,reward:60,completed:!1},{id:"practice_15",type:"practice",target:15,current:0,reward:100,completed:!1},{id:"win_5",type:"win_streak",target:5,current:0,reward:150,completed:!1},{id:"speed_run",type:"speed_run",target:1,current:0,reward:80,completed:!1}]};return this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,n),n}updateQuestProgress(t,n,s=1){if(!t)return null;const a=this.getQuestData(t);if(!(a!=null&&a.daily))return null;let i=0;const o={...a,daily:a.daily.map(l=>{if(l.type===n&&!l.completed){const c=Math.min(l.current+s,l.target),d=c>=l.target;return d&&!l.completed&&(i+=l.reward,this.addCoins(l.reward,`Quest completed: ${l.id}`)),{...l,current:c,completed:d}}return l})};return this.safeSet(this.STORAGE_KEYS.QUEST_DATA+t,o),{updatedQuests:o,coinsEarned:i}}getStreakData(t){return t?this.safeGet(this.STORAGE_KEYS.STREAK_DATA+t,{current:0,lastPlayedDate:null,longestStreak:0}):null}updateStreak(t){if(!t)return null;const n=this.getStreakData(t),s=new Date().toDateString(),a=new Date(Date.now()-864e5).toDateString();return n.lastPlayedDate===s||(n.lastPlayedDate===a?n.current++:n.current=1,n.lastPlayedDate=s,n.longestStreak=Math.max(n.current,n.longestStreak),this.safeSet(this.STORAGE_KEYS.STREAK_DATA+t,n),n.current%7===0&&this.addCoins(100,"7-day streak bonus!")),n}recordQuizSession(t,n){const{score:s,totalQuestions:a,category:i,difficulty:o="medium",mode:l="classic"}=n,f=s*5+(s===a?20:0),m=s*10;if(this.addCoins(f,`Quiz: ${s}/${a}`),this.addXP(m),t){const h=this.getUserStats(t)||this.initializeUserData(t).stats;h.totalQuizzes++,h.totalCorrect+=s,h.totalWrong+=a-s,h.gamesPlayed++,s>=a*.7?(h.winStreak++,h.bestStreak=Math.max(h.winStreak,h.bestStreak)):h.winStreak=0,h.highScore=Math.max(h.highScore,s),this.updateUserStats(t,h);const b=this.getDailyProgress(t);b.quizzesPlayed++,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,b),this.updateQuestProgress(t,"quiz",1),h.winStreak>=5&&this.updateQuestProgress(t,"win_streak",h.winStreak),this.updateStreak(t),this.addToHistory(t,{type:"quiz",mode:l,category:i,score:s,totalQuestions:a,difficulty:o,coinsEarned:f,xpEarned:m,timestamp:new Date().toISOString()})}return{coinsEarned:f,xpEarned:m,newTotal:this.getCoins(),newXP:this.getXP(),newLevel:this.getLevel()}}recordPracticeSession(t,n){const{questionsCompleted:s,correctAnswers:a,category:i="general"}=n,o=s*2,l=s*5;if(this.addCoins(o,`Practice: ${s} questions`),this.addXP(l),t){const c=this.getUserStats(t)||this.initializeUserData(t).stats;c.totalPractice+=s,c.totalCorrect+=a,c.totalWrong+=s-a,this.updateUserStats(t,c);const d=this.getDailyProgress(t);d.practiceCompleted+=s,this.safeSet(this.STORAGE_KEYS.DAILY_PROGRESS+t,d),this.updateQuestProgress(t,"practice",s),this.updateStreak(t),this.addToHistory(t,{type:"practice",category:i,questionsCompleted:s,correctAnswers:a,coinsEarned:o,xpEarned:l,timestamp:new Date().toISOString()})}return{coinsEarned:o,xpEarned:l,newTotal:this.getCoins(),newXP:this.getXP()}}getGameHistory(t){return t?this.safeGet(this.STORAGE_KEYS.GAME_HISTORY+t,[]):[]}addToHistory(t,n){if(!t)return;const s=this.getGameHistory(t);s.unshift(n),s.length>50&&s.pop(),this.safeSet(this.STORAGE_KEYS.GAME_HISTORY+t,s)}getTodaySummary(t){var a;const n=t||((a=lt.getCurrentUser())==null?void 0:a.phone),s={totalCoins:this.getCoins(),totalXP:this.getXP(),level:this.getLevel(),xpProgress:this.getXP()%100,xpNeeded:100,todayCoins:0,todayXP:0,streak:0,questProgress:0,activeQuests:0};if(n){const i=this.getDailyProgress(n),o=this.getStreakData(n),l=this.getQuestData(n),c=this.getUserStats(n);if(i&&(s.todayCoins=i.coinsEarned,s.todayXP=i.xpEarned),o&&(s.streak=o.current),l!=null&&l.daily){const d=l.daily.filter(f=>f.completed).length;s.questProgress=Math.round(d/l.daily.length*100),s.activeQuests=l.daily.filter(f=>!f.completed).length}c&&(s.rank=23,s.winStreak=c.winStreak)}return s}logCoinTransaction(t,n,s){if(!t)return;const a="coin_transactions_"+t,i=this.safeGet(a,[]);i.push({amount:n,reason:s,timestamp:new Date().toISOString(),balance:this.getCoins()}),i.length>100&&i.shift(),this.safeSet(a,i)}storeCurrentResults(t){return this.safeSet(this.STORAGE_KEYS.QUIZ_RESULTS,{...t,timestamp:Date.now(),expiresAt:Date.now()+30*60*1e3}),!0}getCurrentResults(){const t=this.safeGet(this.STORAGE_KEYS.QUIZ_RESULTS,null);return t?t.expiresAt&&t.expiresAt<Date.now()?(this.clearCurrentResults(),null):t:null}clearCurrentResults(){localStorage.removeItem(this.STORAGE_KEYS.QUIZ_RESULTS)}safeGet(t,n=null){try{const s=localStorage.getItem(t);return s?JSON.parse(s):n}catch{return n}}safeSet(t,n){try{return localStorage.setItem(t,JSON.stringify(n)),!0}catch{return!1}}clearAllData(){Object.values(this.STORAGE_KEYS).forEach(t=>{typeof t=="string"&&!t.includes("_")&&localStorage.removeItem(t)})}clearUserData(t){if(!t)return;[this.STORAGE_KEYS.GAME_STATS+t,this.STORAGE_KEYS.DAILY_PROGRESS+t,this.STORAGE_KEYS.QUEST_DATA+t,this.STORAGE_KEYS.STREAK_DATA+t,this.STORAGE_KEYS.GAME_HISTORY+t,"coin_transactions_"+t].forEach(s=>localStorage.removeItem(s))}}const ce=new Qb;var k0={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((n,s)=>{e.exports=s()})(Fg,function n(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},a,i=!s.document&&!!s.postMessage,o=s.IS_PAPA_WORKER||!1,l={},c=0,d={};function f(p){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(w){var S=C(w);S.chunkSize=parseInt(S.chunkSize),w.step||w.chunk||(S.chunkSize=null),this._handle=new j(S),(this._handle.streamer=this)._config=S}).call(this,p),this.parseChunk=function(w,S){var A=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<A){let F=this._config.newline;F||(_=this._config.quoteChar||'"',F=this._handle.guessLineEndings(w,_)),w=[...w.split(F).slice(A)].join(F)}this.isFirstChunk&&E(this._config.beforeFirstChunk)&&(_=this._config.beforeFirstChunk(w))!==void 0&&(w=_),this.isFirstChunk=!1,this._halted=!1;var A=this._partialLine+w,_=(this._partialLine="",this._handle.parse(A,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(w=_.meta.cursor,A=(this._finished||(this._partialLine=A.substring(w-this._baseIndex),this._baseIndex=w),_&&_.data&&(this._rowCount+=_.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),o)s.postMessage({results:_,workerId:d.WORKER_ID,finished:A});else if(E(this._config.chunk)&&!S){if(this._config.chunk(_,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=_=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(_.data),this._completeResults.errors=this._completeResults.errors.concat(_.errors),this._completeResults.meta=_.meta),this._completed||!A||!E(this._config.complete)||_&&_.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),A||_&&_.meta.paused||this._nextChunk(),_}this._halted=!0},this._sendError=function(w){E(this._config.error)?this._config.error(w):o&&this._config.error&&s.postMessage({workerId:d.WORKER_ID,error:w,finished:!1})}}function m(p){var w;(p=p||{}).chunkSize||(p.chunkSize=d.RemoteChunkSize),f.call(this,p),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(S){this._input=S,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(w=new XMLHttpRequest,this._config.withCredentials&&(w.withCredentials=this._config.withCredentials),i||(w.onload=I(this._chunkLoaded,this),w.onerror=I(this._chunkError,this)),w.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var S,A=this._config.downloadRequestHeaders;for(S in A)w.setRequestHeader(S,A[S])}var _;this._config.chunkSize&&(_=this._start+this._config.chunkSize-1,w.setRequestHeader("Range","bytes="+this._start+"-"+_));try{w.send(this._config.downloadRequestBody)}catch(F){this._chunkError(F.message)}i&&w.status===0&&this._chunkError()}},this._chunkLoaded=function(){w.readyState===4&&(w.status<200||400<=w.status?this._chunkError():(this._start+=this._config.chunkSize||w.responseText.length,this._finished=!this._config.chunkSize||this._start>=(S=>(S=S.getResponseHeader("Content-Range"))!==null?parseInt(S.substring(S.lastIndexOf("/")+1)):-1)(w),this.parseChunk(w.responseText)))},this._chunkError=function(S){S=w.statusText||S,this._sendError(new Error(S))}}function h(p){(p=p||{}).chunkSize||(p.chunkSize=d.LocalChunkSize),f.call(this,p);var w,S,A=typeof FileReader<"u";this.stream=function(_){this._input=_,S=_.slice||_.webkitSlice||_.mozSlice,A?((w=new FileReader).onload=I(this._chunkLoaded,this),w.onerror=I(this._chunkError,this)):w=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var _=this._input,F=(this._config.chunkSize&&(F=Math.min(this._start+this._config.chunkSize,this._input.size),_=S.call(_,this._start,F)),w.readAsText(_,this._config.encoding));A||this._chunkLoaded({target:{result:F}})},this._chunkLoaded=function(_){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(_.target.result)},this._chunkError=function(){this._sendError(w.error)}}function b(p){var w;f.call(this,p=p||{}),this.stream=function(S){return w=S,this._nextChunk()},this._nextChunk=function(){var S,A;if(!this._finished)return S=this._config.chunkSize,w=S?(A=w.substring(0,S),w.substring(S)):(A=w,""),this._finished=!w,this.parseChunk(A)}}function g(p){f.call(this,p=p||{});var w=[],S=!0,A=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(_){this._input=_,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){A&&w.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),w.length?this.parseChunk(w.shift()):S=!0},this._streamData=I(function(_){try{w.push(typeof _=="string"?_:_.toString(this._config.encoding)),S&&(S=!1,this._checkIsFinished(),this.parseChunk(w.shift()))}catch(F){this._streamError(F)}},this),this._streamError=I(function(_){this._streamCleanUp(),this._sendError(_)},this),this._streamEnd=I(function(){this._streamCleanUp(),A=!0,this._streamData("")},this),this._streamCleanUp=I(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(p){var w,S,A,_,F=Math.pow(2,53),q=-F,X=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,V=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,H=this,O=0,R=0,L=!1,D=!1,T=[],M={data:[],errors:[],meta:{}};function U(B){return p.skipEmptyLines==="greedy"?B.join("").trim()==="":B.length===1&&B[0].length===0}function G(){if(M&&A&&(Z("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+d.DefaultDelimiter+"'"),A=!1),p.skipEmptyLines&&(M.data=M.data.filter(function(Y){return!U(Y)})),$()){let Y=function(Q,K){E(p.transformHeader)&&(Q=p.transformHeader(Q,K)),T.push(Q)};if(M)if(Array.isArray(M.data[0])){for(var B=0;$()&&B<M.data.length;B++)M.data[B].forEach(Y);M.data.splice(0,1)}else M.data.forEach(Y)}function z(Y,Q){for(var K=p.header?{}:[],J=0;J<Y.length;J++){var W=J,P=Y[J],P=((te,ne)=>(oe=>(p.dynamicTypingFunction&&p.dynamicTyping[oe]===void 0&&(p.dynamicTyping[oe]=p.dynamicTypingFunction(oe)),(p.dynamicTyping[oe]||p.dynamicTyping)===!0))(te)?ne==="true"||ne==="TRUE"||ne!=="false"&&ne!=="FALSE"&&((oe=>{if(X.test(oe)&&(oe=parseFloat(oe),q<oe&&oe<F))return 1})(ne)?parseFloat(ne):V.test(ne)?new Date(ne):ne===""?null:ne):ne)(W=p.header?J>=T.length?"__parsed_extra":T[J]:W,P=p.transform?p.transform(P,W):P);W==="__parsed_extra"?(K[W]=K[W]||[],K[W].push(P)):K[W]=P}return p.header&&(J>T.length?Z("FieldMismatch","TooManyFields","Too many fields: expected "+T.length+" fields but parsed "+J,R+Q):J<T.length&&Z("FieldMismatch","TooFewFields","Too few fields: expected "+T.length+" fields but parsed "+J,R+Q)),K}var ee;M&&(p.header||p.dynamicTyping||p.transform)&&(ee=1,!M.data.length||Array.isArray(M.data[0])?(M.data=M.data.map(z),ee=M.data.length):M.data=z(M.data,0),p.header&&M.meta&&(M.meta.fields=T),R+=ee)}function $(){return p.header&&T.length===0}function Z(B,z,ee,Y){B={type:B,code:z,message:ee},Y!==void 0&&(B.row=Y),M.errors.push(B)}E(p.step)&&(_=p.step,p.step=function(B){M=B,$()?G():(G(),M.data.length!==0&&(O+=B.data.length,p.preview&&O>p.preview?S.abort():(M.data=M.data[0],_(M,H))))}),this.parse=function(B,z,ee){var Y=p.quoteChar||'"',Y=(p.newline||(p.newline=this.guessLineEndings(B,Y)),A=!1,p.delimiter?E(p.delimiter)&&(p.delimiter=p.delimiter(B),M.meta.delimiter=p.delimiter):((Y=((Q,K,J,W,P)=>{var te,ne,oe,ue;P=P||[",","	","|",";",d.RECORD_SEP,d.UNIT_SEP];for(var ye=0;ye<P.length;ye++){for(var ve,ft=P[ye],_e=0,Ge=0,Se=0,ze=(oe=void 0,new y({comments:W,delimiter:ft,newline:K,preview:10}).parse(Q)),wt=0;wt<ze.data.length;wt++)J&&U(ze.data[wt])?Se++:(ve=ze.data[wt].length,Ge+=ve,oe===void 0?oe=ve:0<ve&&(_e+=Math.abs(ve-oe),oe=ve));0<ze.data.length&&(Ge/=ze.data.length-Se),(ne===void 0||_e<=ne)&&(ue===void 0||ue<Ge)&&1.99<Ge&&(ne=_e,te=ft,ue=Ge)}return{successful:!!(p.delimiter=te),bestDelimiter:te}})(B,p.newline,p.skipEmptyLines,p.comments,p.delimitersToGuess)).successful?p.delimiter=Y.bestDelimiter:(A=!0,p.delimiter=d.DefaultDelimiter),M.meta.delimiter=p.delimiter),C(p));return p.preview&&p.header&&Y.preview++,w=B,S=new y(Y),M=S.parse(w,z,ee),G(),L?{meta:{paused:!0}}:M||{meta:{paused:!1}}},this.paused=function(){return L},this.pause=function(){L=!0,S.abort(),w=E(p.chunk)?"":w.substring(S.getCharIndex())},this.resume=function(){H.streamer._halted?(L=!1,H.streamer.parseChunk(w,!0)):setTimeout(H.resume,3)},this.aborted=function(){return D},this.abort=function(){D=!0,S.abort(),M.meta.aborted=!0,E(p.complete)&&p.complete(M),w=""},this.guessLineEndings=function(Q,Y){Q=Q.substring(0,1048576);var Y=new RegExp(k(Y)+"([^]*?)"+k(Y),"gm"),ee=(Q=Q.replace(Y,"")).split("\r"),Y=Q.split(`
`),Q=1<Y.length&&Y[0].length<ee[0].length;if(ee.length===1||Q)return`
`;for(var K=0,J=0;J<ee.length;J++)ee[J][0]===`
`&&K++;return K>=ee.length/2?`\r
`:"\r"}}function k(p){return p.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function y(p){var w=(p=p||{}).delimiter,S=p.newline,A=p.comments,_=p.step,F=p.preview,q=p.fastMode,X=null,V=!1,H=p.quoteChar==null?'"':p.quoteChar,O=H;if(p.escapeChar!==void 0&&(O=p.escapeChar),(typeof w!="string"||-1<d.BAD_DELIMITERS.indexOf(w))&&(w=","),A===w)throw new Error("Comment character same as delimiter");A===!0?A="#":(typeof A!="string"||-1<d.BAD_DELIMITERS.indexOf(A))&&(A=!1),S!==`
`&&S!=="\r"&&S!==`\r
`&&(S=`
`);var R=0,L=!1;this.parse=function(D,T,M){if(typeof D!="string")throw new Error("Input must be a string");var U=D.length,G=w.length,$=S.length,Z=A.length,B=E(_),z=[],ee=[],Y=[],Q=R=0;if(!D)return _e();if(q||q!==!1&&D.indexOf(H)===-1){for(var K=D.split(S),J=0;J<K.length;J++){if(Y=K[J],R+=Y.length,J!==K.length-1)R+=S.length;else if(M)return _e();if(!A||Y.substring(0,Z)!==A){if(B){if(z=[],ue(Y.split(w)),Ge(),L)return _e()}else ue(Y.split(w));if(F&&F<=J)return z=z.slice(0,F),_e(!0)}}return _e()}for(var W=D.indexOf(w,R),P=D.indexOf(S,R),te=new RegExp(k(O)+k(H),"g"),ne=D.indexOf(H,R);;)if(D[R]===H)for(ne=R,R++;;){if((ne=D.indexOf(H,ne+1))===-1)return M||ee.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:z.length,index:R}),ve();if(ne===U-1)return ve(D.substring(R,ne).replace(te,H));if(H===O&&D[ne+1]===O)ne++;else if(H===O||ne===0||D[ne-1]!==O){W!==-1&&W<ne+1&&(W=D.indexOf(w,ne+1));var oe=ye((P=P!==-1&&P<ne+1?D.indexOf(S,ne+1):P)===-1?W:Math.min(W,P));if(D.substr(ne+1+oe,G)===w){Y.push(D.substring(R,ne).replace(te,H)),D[R=ne+1+oe+G]!==H&&(ne=D.indexOf(H,R)),W=D.indexOf(w,R),P=D.indexOf(S,R);break}if(oe=ye(P),D.substring(ne+1+oe,ne+1+oe+$)===S){if(Y.push(D.substring(R,ne).replace(te,H)),ft(ne+1+oe+$),W=D.indexOf(w,R),ne=D.indexOf(H,R),B&&(Ge(),L))return _e();if(F&&z.length>=F)return _e(!0);break}ee.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:z.length,index:R}),ne++}}else if(A&&Y.length===0&&D.substring(R,R+Z)===A){if(P===-1)return _e();R=P+$,P=D.indexOf(S,R),W=D.indexOf(w,R)}else if(W!==-1&&(W<P||P===-1))Y.push(D.substring(R,W)),R=W+G,W=D.indexOf(w,R);else{if(P===-1)break;if(Y.push(D.substring(R,P)),ft(P+$),B&&(Ge(),L))return _e();if(F&&z.length>=F)return _e(!0)}return ve();function ue(Se){z.push(Se),Q=R}function ye(Se){var ze=0;return ze=Se!==-1&&(Se=D.substring(ne+1,Se))&&Se.trim()===""?Se.length:ze}function ve(Se){return M||(Se===void 0&&(Se=D.substring(R)),Y.push(Se),R=U,ue(Y),B&&Ge()),_e()}function ft(Se){R=Se,ue(Y),Y=[],P=D.indexOf(S,R)}function _e(Se){if(p.header&&!T&&z.length&&!V){var ze=z[0],wt=Object.create(null),jt=new Set(ze);let Ae=!1;for(let We=0;We<ze.length;We++){let Ve=ze[We];if(wt[Ve=E(p.transformHeader)?p.transformHeader(Ve,We):Ve]){let Wt,Fe=wt[Ve];for(;Wt=Ve+"_"+Fe,Fe++,jt.has(Wt););jt.add(Wt),ze[We]=Wt,wt[Ve]++,Ae=!0,(X=X===null?{}:X)[Wt]=Ve}else wt[Ve]=1,ze[We]=Ve;jt.add(Ve)}Ae&&console.warn("Duplicate headers found and renamed."),V=!0}return{data:z,errors:ee,meta:{delimiter:w,linebreak:S,aborted:L,truncated:!!Se,cursor:Q+(T||0),renamedHeaders:X}}}function Ge(){_(_e()),z=[],ee=[]}},this.abort=function(){L=!0},this.getCharIndex=function(){return R}}function x(p){var w=p.data,S=l[w.workerId],A=!1;if(w.error)S.userError(w.error,w.file);else if(w.results&&w.results.data){var _={abort:function(){A=!0,v(w.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:N,resume:N};if(E(S.userStep)){for(var F=0;F<w.results.data.length&&(S.userStep({data:w.results.data[F],errors:w.results.errors,meta:w.results.meta},_),!A);F++);delete w.results}else E(S.userChunk)&&(S.userChunk(w.results,_,w.file),delete w.results)}w.finished&&!A&&v(w.workerId,w.results)}function v(p,w){var S=l[p];E(S.userComplete)&&S.userComplete(w),S.terminate(),delete l[p]}function N(){throw new Error("Not implemented.")}function C(p){if(typeof p!="object"||p===null)return p;var w,S=Array.isArray(p)?[]:{};for(w in p)S[w]=C(p[w]);return S}function I(p,w){return function(){p.apply(w,arguments)}}function E(p){return typeof p=="function"}return d.parse=function(p,w){var S=(w=w||{}).dynamicTyping||!1;if(E(S)&&(w.dynamicTypingFunction=S,S={}),w.dynamicTyping=S,w.transform=!!E(w.transform)&&w.transform,!w.worker||!d.WORKERS_SUPPORTED)return S=null,d.NODE_STREAM_INPUT,typeof p=="string"?(p=(A=>A.charCodeAt(0)!==65279?A:A.slice(1))(p),S=new(w.download?m:b)(w)):p.readable===!0&&E(p.read)&&E(p.on)?S=new g(w):(s.File&&p instanceof File||p instanceof Object)&&(S=new h(w)),S.stream(p);(S=(()=>{var A;return!!d.WORKERS_SUPPORTED&&(A=(()=>{var _=s.URL||s.webkitURL||null,F=n.toString();return d.BLOB_URL||(d.BLOB_URL=_.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",F,")();"],{type:"text/javascript"})))})(),(A=new s.Worker(A)).onmessage=x,A.id=c++,l[A.id]=A)})()).userStep=w.step,S.userChunk=w.chunk,S.userComplete=w.complete,S.userError=w.error,w.step=E(w.step),w.chunk=E(w.chunk),w.complete=E(w.complete),w.error=E(w.error),delete w.worker,S.postMessage({input:p,config:w,workerId:S.id})},d.unparse=function(p,w){var S=!1,A=!0,_=",",F=`\r
`,q='"',X=q+q,V=!1,H=null,O=!1,R=((()=>{if(typeof w=="object"){if(typeof w.delimiter!="string"||d.BAD_DELIMITERS.filter(function(T){return w.delimiter.indexOf(T)!==-1}).length||(_=w.delimiter),typeof w.quotes!="boolean"&&typeof w.quotes!="function"&&!Array.isArray(w.quotes)||(S=w.quotes),typeof w.skipEmptyLines!="boolean"&&typeof w.skipEmptyLines!="string"||(V=w.skipEmptyLines),typeof w.newline=="string"&&(F=w.newline),typeof w.quoteChar=="string"&&(q=w.quoteChar),typeof w.header=="boolean"&&(A=w.header),Array.isArray(w.columns)){if(w.columns.length===0)throw new Error("Option columns is empty");H=w.columns}w.escapeChar!==void 0&&(X=w.escapeChar+q),w.escapeFormulae instanceof RegExp?O=w.escapeFormulae:typeof w.escapeFormulae=="boolean"&&w.escapeFormulae&&(O=/^[=+\-@\t\r].*$/)}})(),new RegExp(k(q),"g"));if(typeof p=="string"&&(p=JSON.parse(p)),Array.isArray(p)){if(!p.length||Array.isArray(p[0]))return L(null,p,V);if(typeof p[0]=="object")return L(H||Object.keys(p[0]),p,V)}else if(typeof p=="object")return typeof p.data=="string"&&(p.data=JSON.parse(p.data)),Array.isArray(p.data)&&(p.fields||(p.fields=p.meta&&p.meta.fields||H),p.fields||(p.fields=Array.isArray(p.data[0])?p.fields:typeof p.data[0]=="object"?Object.keys(p.data[0]):[]),Array.isArray(p.data[0])||typeof p.data[0]=="object"||(p.data=[p.data])),L(p.fields||[],p.data||[],V);throw new Error("Unable to serialize unrecognized input");function L(T,M,U){var G="",$=(typeof T=="string"&&(T=JSON.parse(T)),typeof M=="string"&&(M=JSON.parse(M)),Array.isArray(T)&&0<T.length),Z=!Array.isArray(M[0]);if($&&A){for(var B=0;B<T.length;B++)0<B&&(G+=_),G+=D(T[B],B);0<M.length&&(G+=F)}for(var z=0;z<M.length;z++){var ee=($?T:M[z]).length,Y=!1,Q=$?Object.keys(M[z]).length===0:M[z].length===0;if(U&&!$&&(Y=U==="greedy"?M[z].join("").trim()==="":M[z].length===1&&M[z][0].length===0),U==="greedy"&&$){for(var K=[],J=0;J<ee;J++){var W=Z?T[J]:J;K.push(M[z][W])}Y=K.join("").trim()===""}if(!Y){for(var P=0;P<ee;P++){0<P&&!Q&&(G+=_);var te=$&&Z?T[P]:P;G+=D(M[z][te],P)}z<M.length-1&&(!U||0<ee&&!Q)&&(G+=F)}}return G}function D(T,M){var U,G;return T==null?"":T.constructor===Date?JSON.stringify(T).slice(1,25):(G=!1,O&&typeof T=="string"&&O.test(T)&&(T="'"+T,G=!0),U=T.toString().replace(R,X),(G=G||S===!0||typeof S=="function"&&S(T,M)||Array.isArray(S)&&S[M]||(($,Z)=>{for(var B=0;B<Z.length;B++)if(-1<$.indexOf(Z[B]))return!0;return!1})(U,d.BAD_DELIMITERS)||-1<U.indexOf(_)||U.charAt(0)===" "||U.charAt(U.length-1)===" ")?q+U+q:U)}},d.RECORD_SEP=String.fromCharCode(30),d.UNIT_SEP=String.fromCharCode(31),d.BYTE_ORDER_MARK="\uFEFF",d.BAD_DELIMITERS=["\r",`
`,'"',d.BYTE_ORDER_MARK],d.WORKERS_SUPPORTED=!i&&!!s.Worker,d.NODE_STREAM_INPUT=1,d.LocalChunkSize=10485760,d.RemoteChunkSize=5242880,d.DefaultDelimiter=",",d.Parser=y,d.ParserHandle=j,d.NetworkStreamer=m,d.FileStreamer=h,d.StringStreamer=b,d.ReadableStreamStreamer=g,s.jQuery&&((a=s.jQuery).fn.parse=function(p){var w=p.config||{},S=[];return this.each(function(F){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var q=0;q<this.files.length;q++)S.push({file:this.files[q],inputElem:this,instanceConfig:a.extend({},w)})}),A(),this;function A(){if(S.length===0)E(p.complete)&&p.complete();else{var F,q,X,V,H=S[0];if(E(p.before)){var O=p.before(H.file,H.inputElem);if(typeof O=="object"){if(O.action==="abort")return F="AbortError",q=H.file,X=H.inputElem,V=O.reason,void(E(p.error)&&p.error({name:F},q,X,V));if(O.action==="skip")return void _();typeof O.config=="object"&&(H.instanceConfig=a.extend(H.instanceConfig,O.config))}else if(O==="skip")return void _()}var R=H.instanceConfig.complete;H.instanceConfig.complete=function(L){E(R)&&R(L,H.file,H.inputElem),_()},d.parse(H.file,H.instanceConfig)}}function _(){S.splice(0,1),A()}}),o&&(s.onmessage=function(p){p=p.data,d.WORKER_ID===void 0&&p&&(d.WORKER_ID=p.workerId),typeof p.input=="string"?s.postMessage({workerId:d.WORKER_ID,results:d.parse(p.input,p.config),finished:!0}):(s.File&&p.input instanceof File||p.input instanceof Object)&&(p=d.parse(p.input,p.config))&&s.postMessage({workerId:d.WORKER_ID,results:p,finished:!0})}),(m.prototype=Object.create(f.prototype)).constructor=m,(h.prototype=Object.create(f.prototype)).constructor=h,(b.prototype=Object.create(b.prototype)).constructor=b,(g.prototype=Object.create(f.prototype)).constructor=g,d})})(k0);var Kb=k0.exports;const Kr=Qh(Kb);function Sr({startRect:e,targetRef:t,count:n=12,onDone:s}){return u.useEffect(()=>{const a=t==null?void 0:t.current;if(!e||!a){s==null||s();return}const i=a.getBoundingClientRect(),o=document.createElement("div");o.style.position="fixed",o.style.inset="0",o.style.pointerEvents="none",o.style.zIndex="9999",document.body.appendChild(o);const l=i.left+i.width/2,c=i.top+i.height/2,d=e.left+e.width/2,f=e.top+e.height/2,m=200;let h=0;function b(g){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const k=d,y=f,x=l,v=c;j.style.transform=`translate(${k}px, ${y}px) scale(1)`,o.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${m}ms cubic-bezier(.2,.8,.2,1), opacity ${m}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${x}px, ${v}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),h+=1,h===n&&(o.remove(),s==null||s())},m+50)}for(let g=0;g<n;g++)setTimeout(()=>b(),g*60);return()=>{try{o.remove()}catch{}}},[e,t,n,s]),null}const Ct={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlockLevel:1,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlockLevel:1,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},Gf=e=>Math.floor(e/Ct.XP_PER_LEVEL)+1,Xb=e=>{const t=e%Ct.XP_PER_LEVEL;return{current:t,required:Ct.XP_PER_LEVEL,percentage:t/Ct.XP_PER_LEVEL*100}};function Jb({player:e,size:t="normal",showLevel:n=!0,showName:s=!0}){const a=Ct.AVATARS.find(o=>o.id===e.avatar)||Ct.AVATARS[0],i={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:`${i[t]} rounded-full bg-gradient-to-br ${a.bgColor} flex items-center justify-center shadow-lg`,children:r.jsx("span",{children:a.emoji})}),n&&r.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&r.jsxs("div",{children:[r.jsx("div",{className:"font-bold text-sm",children:(()=>{const o=JSON.parse(localStorage.getItem("currentUser")||"{}");return o.username?o.username.split(" ")[0]:e.name})()}),r.jsx("div",{className:"text-xs text-base-muted",children:a.name})]})]})}function Zb({current:e,required:t,level:n,animate:s=!0}){const[a,i]=u.useState(0),o=e/t*100;return u.useEffect(()=>{if(s){const l=setTimeout(()=>{i(o)},100);return()=>clearTimeout(l)}else i(o)},[o,s]),r.jsxs("div",{className:"w-full",children:[r.jsxs("div",{className:"flex justify-between items-center mb-1",children:[r.jsxs("span",{className:"text-xs font-medium",children:["Level ",n]}),r.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),r.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${a}%`},children:r.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}const S0=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],C0=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],E0=[...S0.filter(e=>e.slug!=="more"),...C0];function e1(){const e=ke(),[t,n]=u.useState(!1),[s,a]=u.useState([]);u.useEffect(()=>{const o=[...Array(6)].map((l,c)=>({id:c,left:Math.random()*100,delay:Math.random()*2,duration:2+Math.random()*2}));a(o)},[]);const i=()=>{e("/play/classic",{state:{from:"home"}})};return r.jsxs("div",{className:"relative overflow-hidden rounded-3xl pt-12 pb-12 px-6 mb-4 transform transition-all hover:scale-[1.01] active:scale-[0.99]",style:{background:"linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)",boxShadow:"0 10px 30px rgba(0,0,0,0.1)"},onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[r.jsx("style",{jsx:!0,children:`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes sparkle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { transform: translateY(-50px) scale(1); opacity: 1; }
          100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(255,255,255,0.5); }
          50% { box-shadow: 0 0 20px rgba(255,255,255,0.8); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-5px); }
          75% { transform: translateY(2px); }
        }
      `}),s.map(o=>r.jsx("div",{className:"absolute text-lg pointer-events-none",style:{left:`${o.left}%`,bottom:"0",animation:`sparkle ${o.duration}s ease-out infinite`,animationDelay:`${o.delay}s`},children:"✨"},o.id)),r.jsx("div",{className:"absolute -top-1 -right-2 text-7xl opacity-15",style:{animation:"spin-slow 20s linear infinite",transform:t?"scale(1.1)":"scale(1)",transition:"transform 0.3s"},children:"🎡"}),r.jsxs("div",{className:"flex items-center justify-between gap-4",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:"relative w-14 h-14 flex-shrink-0",style:{animation:t?"bounce 1s ease-in-out infinite":"float 3s ease-in-out infinite"},children:r.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 100 100",className:"absolute inset-0",style:{animation:"spin-slow 4s linear infinite"},children:[[{color:"#FF6B6B",icon:"🧠"},{color:"#4ECDC4",icon:"🎉"},{color:"#45B7D1",icon:"🧪"},{color:"#FFD700",icon:"🏺"},{color:"#9370DB",icon:"🗺️"},{color:"#FF9800",icon:"🤖"}].map((o,l)=>{const d=l*60,f=d+60,m=0,h=Math.PI*d/180,b=Math.PI*f/180,g=50+45*Math.cos(h),j=50-45*Math.sin(h),k=50+45*Math.cos(b),y=50-45*Math.sin(b);return r.jsx("g",{children:r.jsx("path",{d:`M50,50 L${g},${j} A45,45 0 ${m} 0 ${k},${y} Z`,fill:o.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"})},l)}),r.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white"}),r.jsx("text",{x:"50",y:"55",textAnchor:"middle",className:"text-xs font-bold fill-gray-800",children:"🪙"})]})}),r.jsxs("div",{children:[r.jsx("h2",{className:"text-xl font-black text-white drop-shadow-md whitespace-nowrap",children:"Spin & Win!"}),r.jsx("p",{className:"text-sm text-white/90",children:"Win amazing prizes!"})]})]}),r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"absolute -top-2 -left-2 text-sm opacity-70",style:{animation:"float 3s ease-in-out infinite"},children:"🪙"}),r.jsx("div",{className:"absolute -top-2 -right-2 text-sm opacity-70",style:{animation:"float 3s ease-in-out infinite 0.5s"},children:"⭐"}),r.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm opacity-70",style:{animation:"float 3s ease-in-out infinite 1s"},children:"💎"}),r.jsxs("button",{className:"relative bg-white text-gray-900 rounded-full font-bold shadow-lg hover:shadow-xl transition-all px-5 py-2.5 flex items-center gap-2",style:{animation:"pulse-glow 2s ease-in-out infinite"},onClick:o=>{o.stopPropagation(),i()},children:[r.jsx("span",{className:"text-sm font-black",children:"PLAY"}),r.jsx("span",{className:"text-base",children:"🎯"})]})]})]})]})}function t1({actions:e}){return r.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,n)=>r.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[r.jsx("div",{className:"text-2xl",children:t.icon}),r.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},n))})}function n1({categories:e,onCategorySelect:t}){return r.jsxs("div",{className:"mb-6",children:[r.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),r.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(n=>r.jsxs("button",{onClick:()=>t(n),className:`bg-gradient-to-br ${n.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[r.jsx("div",{className:"text-3xl",children:n.icon}),r.jsx("div",{className:"text-xs font-bold text-white text-center",children:n.name}),n.questions>0&&r.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[n.questions," Qs"]})]},n.name))})]})}function r1({onClick:e,isPulsing:t}){return r.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),r.jsxs("div",{className:"text-left",children:[r.jsx("div",{className:"font-medium",children:"Practice Mode"}),r.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),r.jsx("div",{className:"text-xl",children:"→"})]})}function s1({coinPillRef:e}){const[t,n]=u.useState("idle"),[s,a]=u.useState([]),[i,o]=u.useState(0),[l,c]=u.useState([]),[d,f]=u.useState(0),[m,h]=u.useState(""),[b,g]=u.useState(null),[j,k]=u.useState(null),[y,x]=u.useState(!1),[v,N]=u.useState(!1),[C,I]=u.useState(!1),[E,p]=u.useState(null),[w,S]=u.useState(0),A=u.useRef(null),_=u.useRef(null),[F]=st("/sounds/correct.mp3",{volume:.6}),[q]=st("/sounds/wrong.mp3",{volume:.6}),[X]=st("/sounds/win.mp3",{volume:.7,duration:1e3}),[V]=st("/sounds/coin.mp3",{volume:.75}),H=3,O=10,R=2,L=50;u.useEffect(()=>{D()},[]),u.useEffect(()=>{if(t==="complete"){const Q=()=>{const J=new Date,W=new Date(J);W.setDate(W.getDate()+1),W.setHours(0,0,0,0);const P=W-J,te=Math.floor(P/(1e3*60*60)),ne=Math.floor(P%(1e3*60*60)/(1e3*60)),oe=Math.floor(P%(1e3*60)/1e3),ue=te.toString().padStart(2,"0"),ye=ne.toString().padStart(2,"0"),ve=oe.toString().padStart(2,"0");h(`${ue}:${ye}:${ve}`)};Q();const K=setInterval(Q,1e3);return()=>clearInterval(K)}},[t]);const D=async()=>{try{const K=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:J}=Kr.parse(K,{header:!0,skipEmptyLines:!0}),W=J.filter(P=>P.question&&P.option1&&P.option2&&P.option3&&P.option4).map((P,te)=>{var ne;return{id:te,question:P.question,options:[P.option1,P.option2,P.option3,P.option4],correct:["A","B","C","D"].indexOf((ne=P.answer)==null?void 0:ne.toUpperCase())}}).filter(P=>P.correct>=0).sort(()=>Math.random()-.5).slice(0,H);a(W)}catch{a([{id:1,question:"What is the capital of France?",options:["London","Paris","Berlin","Madrid"],correct:1},{id:2,question:"What is 2 + 2?",options:["3","4","5","6"],correct:1},{id:3,question:"What color is the sky?",options:["Red","Green","Blue","Yellow"],correct:2}])}},T=()=>{n("playing"),o(0),c(new Array(H).fill(null)),f(0),x(!1),S(0)},M=Q=>{const K=[...l];K[i]=Q,c(K);const J=Q===s[i].correct;N(J),x(!0),J?(F&&F(),I(!0),setTimeout(()=>I(!1),500)):q&&q();const W=K.filter(P=>P!==null).length;setTimeout(()=>{x(!1),W===H?(n("celebrating"),X&&X(),setTimeout(()=>{G(K)},2e3)):U(K)},600)},U=Q=>{for(let K=i+1;K<H;K++)if(Q[K]===null){o(K);return}for(let K=0;K<i;K++)if(Q[K]===null){o(K);return}},G=Q=>{const K=Q.reduce((P,te,ne)=>P+(te===s[ne].correct?1:0),0);f(K);const W=K===H?K*O*R:K*O;S(W),n("complete"),setTimeout(()=>{if(W>0&&A.current&&(e!=null&&e.current)){const P=A.current.getBoundingClientRect();p({startRect:P,count:Math.min(W/5,10),amount:W}),V&&V()}},500)},$=()=>{D(),n("idle"),o(0),c([]),f(0),x(!1),S(0)},Z=Q=>{k(null),g(Q.targetTouches[0].clientX)},B=Q=>{k(Q.targetTouches[0].clientX)},z=()=>{if(!b||!j)return;const Q=b-j,K=Q>L,J=Q<-L;if(K){const W=(i+1)%H;o(W)}else if(J){const W=(i-1+H)%H;o(W)}},ee=({parentRef:Q})=>{var te;if(!C)return null;const K=(te=Q==null?void 0:Q.current)==null?void 0:te.getBoundingClientRect(),J=K?K.top:100,W=K?K.left:0,P=K?K.width:window.innerWidth;return r.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(12)].map((ne,oe)=>r.jsx("div",{className:"absolute",style:{left:`${W+Math.random()*P}px`,top:`${J}px`,animation:`confettiFall ${2+Math.random()*1}s ease-out forwards`,animationDelay:`${Math.random()*.3}s`,fontSize:"24px",opacity:.9},children:["🎉","✨","🌟","⭐","🎊"][Math.floor(Math.random()*5)]},`${Date.now()}-${oe}`))})};if(t==="celebrating")return r.jsxs("div",{className:"relative rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur border border-white/10 p-8 mb-4 text-center",children:[r.jsx("div",{className:"animate-bounce-slow",children:r.jsx("span",{className:"text-5xl",children:"🎉"})}),r.jsx("h2",{className:"text-2xl font-bold mt-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",children:"Congratulations!"}),r.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"You've completed today's challenge"})]});if(t==="complete"){const Q=Math.round(d/H*100),K=d===H;return r.jsxs(r.Fragment,{children:[E&&r.jsx(Sr,{startRect:E.startRect,targetRef:e,count:E.count,onDone:()=>{if(!E.processed){E.processed=!0;const J=lt.getCurrentUser();J!=null&&J.phone?(ce.addCoins(E.amount,"Daily Challenge"),ce.updateQuestProgress(J.phone,"daily_challenge",1)):ce.addCoins(E.amount,"Daily Challenge"),window.dispatchEvent(new Event("coinsUpdated"))}p(null)}}),r.jsxs("div",{className:"relative rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur border border-white/10 p-4 mb-4",children:[r.jsxs("div",{ref:A,className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center",children:r.jsx("span",{className:"text-2xl",children:K?"🏆":d>=2?"🥈":"🥉"})}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold text-yellow-400",children:"Challenge Complete!"}),r.jsxs("p",{className:"text-xs text-gray-400",children:["Come back in ",m]})]})]}),r.jsxs("div",{className:"flex gap-4",children:[r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"text-lg font-bold text-green-400",children:[Q,"%"]}),r.jsx("div",{className:"text-[10px] text-gray-500",children:"Accuracy"})]}),r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"text-lg font-bold text-yellow-400",children:["+",w]}),r.jsx("div",{className:"text-[10px] text-gray-500",children:"Coins"})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-lg font-bold text-orange-400 whitespace-nowrap",children:"🔥2"}),r.jsx("div",{className:"text-[10px] text-gray-500",children:"Streak"})]})]})]}),r.jsx("button",{onClick:$,className:"absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-600 hover:text-gray-400",children:"[Test: Replay]"})]})]})}if(t==="idle")return r.jsx("div",{className:"relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/30 to-blue-500/15 backdrop-blur border border-white/10 p-8 mb-4",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Daily Challenge"}),r.jsxs("p",{className:"text-xs text-gray-400",children:[H," questions • Up to ",H*O*R," coins"]})]}),r.jsx("button",{onClick:T,className:"w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform",children:r.jsx("span",{className:"text-white",children:"▶"})})]})});const Y=s[i];return r.jsxs(r.Fragment,{children:[r.jsx(ee,{parentRef:_}),r.jsxs("div",{ref:_,className:"relative rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur border border-white/10 p-4 mb-4",onTouchStart:Z,onTouchMove:B,onTouchEnd:z,children:[r.jsx("div",{className:"flex gap-1 mb-4",children:[...Array(H)].map((Q,K)=>{var J;return r.jsx("div",{className:`h-1 flex-1 rounded-full transition-all ${l[K]!==null?l[K]===((J=s[K])==null?void 0:J.correct)?"bg-green-500":"bg-red-500":K===i?"bg-blue-500":"bg-gray-700"}`},K)})}),r.jsx("h3",{className:"text-base font-medium mb-4",children:Y.question}),r.jsx("div",{className:"grid gap-2",children:Y.options.map((Q,K)=>{const J=l[i]===K,W=l[i]!==null,P=K===Y.correct,te=y&&(J||P);return r.jsx("button",{onClick:()=>!W&&M(K),disabled:W,className:`
                  relative p-3 rounded-xl text-left text-sm font-medium transition-all
                  ${te&&P?"bg-green-500/30 border border-green-500 animate-pulse-once":te&&J&&!P?"bg-red-500/30 border border-red-500 animate-shake":J&&!y?"bg-blue-500/20 border border-blue-500":W?"bg-white/5 border border-transparent opacity-50":"bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 active:scale-[0.98]"}
                `,children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"opacity-50",children:String.fromCharCode(65+K)}),r.jsx("span",{children:Q})]}),te&&P&&r.jsx("span",{className:"text-green-400 animate-fade-in",children:"✓"}),te&&J&&!P&&r.jsx("span",{className:"text-red-400 animate-fade-in",children:"✗"})]})},K)})}),r.jsx("style",{jsx:!0,children:`
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
          
        @keyframes confettiFall {
        0% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            opacity: 0.9;
        }
        10% {
            opacity: 1;
        }
        25% {
            transform: translateY(25vh) translateX(10px) rotate(180deg) scale(1.1);
        }
        50% {
            transform: translateY(50vh) translateX(-10px) rotate(360deg) scale(1);
        }
        75% {
            transform: translateY(75vh) translateX(5px) rotate(540deg) scale(0.9);
            opacity: 0.8;
        }
        100% { 
            transform: translateY(100vh) translateX(0) rotate(720deg) scale(0.8);
            opacity: 0;
        }
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
          
          .animate-confetti {
            animation: confetti 2s ease-in forwards;
          }
        `})]})]})}function a1({show:e,onClose:t,player:n,changeAvatar:s,GAME_CONSTANTS:a}){return e?r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:r.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:i=>i.stopPropagation(),children:[r.jsxs("div",{className:"flex justify-between items-center mb-4",children:[r.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),r.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),r.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.AVATARS.map(i=>{const o=!n.unlockedAvatars||!n.unlockedAvatars.includes(i.id),l=n.avatar===i.id;return r.jsxs("button",{onClick:()=>{o||(s(i.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":o?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:o,children:[r.jsx("div",{className:`text-4xl mb-2 ${o?"grayscale":""}`,children:i.emoji}),r.jsx("div",{className:"text-sm font-medium",children:i.name}),o&&r.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",i.unlockLevel]}),l&&r.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},i.id)})})]})}):null}function i1({show:e,onClose:t,categories:n,onCategorySelect:s}){return e?r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:r.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:a=>a.stopPropagation(),children:[r.jsxs("div",{className:"flex justify-between items-center mb-4",children:[r.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),r.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),r.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:n.map(a=>r.jsxs("button",{onClick:()=>{t(),s(a)},className:`bg-gradient-to-br ${a.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[r.jsx("div",{className:"text-3xl",children:a.icon}),r.jsx("div",{className:"text-sm font-bold text-white",children:a.name}),r.jsxs("div",{className:"text-xs text-white/80",children:[a.questions," questions"]})]},a.name))})]})}):null}function o1({show:e,onClose:t,coins:n,onNavigateToPlay:s}){return e?r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:r.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[r.jsx("div",{className:"absolute inset-0 opacity-10",children:r.jsx("div",{className:"magic-gradient h-full"})}),r.jsxs("div",{className:"relative",children:[r.jsxs("div",{className:"flex items-center justify-between mb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),r.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[ce.getCoins()," Coins"]})]})]}),r.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),r.jsxs("div",{className:"mb-6",children:[r.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),r.jsxs("div",{className:"space-y-3",children:[r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),r.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),r.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),r.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),r.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),r.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),r.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),r.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),r.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),r.jsxs("div",{className:"mb-6",children:[r.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[r.jsx("span",{children:"Next reward"}),r.jsxs("span",{children:[100-n%100," coins to go"]})]}),r.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${n%100}%`}})})]}),r.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function l1({show:e,onClose:t,selectedCategory:n,difficulty:s,setDifficulty:a,count:i,setCount:o,timer:l,setTimer:c,onStart:d}){return!e||!n?null:r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",style:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},onClick:f=>{f.target===f.currentTarget&&t()},children:r.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:f=>f.stopPropagation(),children:[r.jsxs("div",{className:"flex justify-between items-center mb-4",children:[r.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),r.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),r.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"text-2xl",children:n.icon}),r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium",children:["Category: ",n.name]}),r.jsxs("div",{className:"text-xs text-base-muted",children:[n.questions," questions available"]})]})]})}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),r.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>r.jsx("button",{onClick:()=>a(f),className:`py-2 rounded-xl border ${s===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),r.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>r.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),r.jsxs("div",{className:"mb-6",children:[r.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),r.jsx("input",{type:"number",value:l,onChange:f=>c(Number(f.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),r.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function c1({show:e,onClose:t,allCategories:n,category:s,setCategory:a,difficulty:i,setDifficulty:o,count:l,setCount:c,onStart:d}){return e?r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:r.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:f=>f.stopPropagation(),children:[r.jsxs("div",{className:"flex justify-between items-center mb-4",children:[r.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),r.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),r.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:n.map(f=>r.jsxs("button",{onClick:()=>a(f.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===f.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[r.jsx("div",{className:"text-xl",children:f.icon}),r.jsx("div",{className:"text-[10px] text-center",children:f.name})]},f.slug))})]}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),r.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>r.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),r.jsxs("div",{className:"mb-6",children:[r.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),r.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>r.jsx("button",{onClick:()=>c(f),className:`py-2 rounded-xl border ${l===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),r.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}function d1({player:e,onContinue:t}){const[n,s]=u.useState(()=>sessionStorage.getItem("justSignedUp")==="true"?(sessionStorage.removeItem("justSignedUp"),!1):sessionStorage.getItem("welcomeShown")!=="true"),[a,i]=u.useState(!1),[o,l]=u.useState(!1),[c,d]=u.useState(""),[f,m]=u.useState(""),[h,b]=u.useState("Champion"),[g,j]=u.useState(1),[k,y]=u.useState(0),[x,v]=u.useState(0),N=()=>{try{const p=new Audio("/sounds/welcome.mp3");p.volume=.6,p.play()}catch{console.log("Welcome sound not available")}},C=()=>{navigator.vibrate&&navigator.vibrate([100,50,100])};u.useEffect(()=>{if((()=>{const F=JSON.parse(localStorage.getItem("currentUser")||"{}");let q="Champion",X=1,V=0,H=0;if(F.phone){const R=JSON.parse(localStorage.getItem(`user_profile_${F.phone}`)||"{}"),D=JSON.parse(localStorage.getItem("users")||"{}")[F.phone]||{};R.name?q=R.name.split(" ")[0]:D.username?q=D.username.split(" ")[0]:F.username&&(q=F.username.split(" ")[0]),q&&q!=="Champion"&&(q=q.charAt(0).toUpperCase()+q.slice(1).toLowerCase())}else F.username&&(q=F.username.split(" ")[0]);const O=JSON.parse(localStorage.getItem("qp_player")||"{}");X=(e==null?void 0:e.level)||O.level||1,V=ce.getCoins(),H=(e==null?void 0:e.currentStreak)||O.currentStreak||0,q!=="Champion"&&q!==O.name&&(O.name=q,localStorage.setItem("qp_player",JSON.stringify(O))),b(q),j(X),y(V),v(H)})(),!n){t();return}sessionStorage.setItem("welcomeShown","true"),document.body.classList.add("hide-bottom-nav"),N(),C();const w=["🦉","🐧","🦝","🦜","🦕","🐙","🦊","🐸","🦁","🐨"];m(w[Math.floor(Math.random()*w.length)]);const S=setInterval(()=>{l(F=>!F)},2e3),A=["🎯 New challenges await!","🏆 Ready to be a champion?","🌟 Your brain adventure starts now!","🎨 Time for fun learning!","🎪 The quiz circus is open!","🚀 Blast off to knowledge!","🎭 Let's play and learn!","🌈 Rainbow of questions ahead!"];d(A[Math.floor(Math.random()*A.length)]);const _=setInterval(()=>{d(A[Math.floor(Math.random()*A.length)])},3e3);return()=>{document.body.classList.remove("hide-bottom-nav"),clearInterval(S),clearInterval(_)}},[n,t,e]);const I=()=>{try{const p=new Audio("/sounds/tap.mp3");p.volume=.5,p.play()}catch{console.log("Click sound not available")}navigator.vibrate&&navigator.vibrate(20),i(!0),document.body.classList.remove("hide-bottom-nav"),setTimeout(()=>{s(!1),t()},400)};if(!n)return null;const E=()=>{const p=new Date().getHours();return p<12?"Good morning":p<17?"Good afternoon":"Good evening"};return r.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${a?"opacity-0 scale-95":"opacity-100 scale-100"}`,children:[r.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fda085 75%, #f5a375 90%, #e08060 100%)"}}),r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[[{top:"10%",left:"15%",size:"24px",delay:"0s"},{top:"20%",left:"75%",size:"20px",delay:"0.5s"},{top:"15%",left:"45%",size:"28px",delay:"1s"},{top:"30%",left:"85%",size:"22px",delay:"1.5s"},{top:"8%",left:"60%",size:"26px",delay:"2s"}].map((p,w)=>r.jsx("div",{className:"absolute animate-twinkle",style:{top:p.top,left:p.left,fontSize:p.size,animationDelay:p.delay},children:"⭐"},`star-${w}`)),r.jsxs("div",{className:"absolute top-10 left-0 w-full",children:[r.jsx("div",{className:"cloud cloud1",children:"☁️"}),r.jsx("div",{className:"cloud cloud2",children:"☁️"})]})]}),r.jsxs("div",{className:"relative z-10 text-center px-6 w-full max-w-sm mx-auto",children:[r.jsx("div",{className:`text-8xl mb-4 transition-transform duration-500 ${o?"scale-110 rotate-6":"scale-100 rotate-0"}`,children:f}),r.jsxs("div",{className:"relative rounded-3xl px-6 py-4 mb-6 shadow-xl overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"}),r.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rotate-45"}),r.jsxs("div",{className:"relative",children:[r.jsxs("h1",{className:"text-3xl font-bold text-purple-800",children:["Hello, ",h,"! 👋"]}),r.jsx("p",{className:"text-sm text-purple-600 mt-1",children:E()})]})]}),r.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-6",children:[r.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-100 to-orange-100"}),r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"text-3xl mb-1",children:"⭐"}),r.jsx("div",{className:"text-2xl font-bold text-orange-800",children:g}),r.jsx("div",{className:"text-xs text-orange-600",children:"Level"})]})]}),r.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-100"}),r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"text-3xl mb-1",children:"🪙"}),r.jsx("div",{className:"text-2xl font-bold text-teal-800",children:k}),r.jsx("div",{className:"text-xs text-teal-600",children:"Coins"})]})]}),r.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-orange-200 via-red-100 to-pink-100"}),r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"text-3xl mb-1",children:"🔥"}),r.jsx("div",{className:"text-2xl font-bold text-orange-800",children:x}),r.jsx("div",{className:"text-xs text-orange-600",children:"Streak"})]})]})]}),r.jsx("div",{className:"h-4"}),r.jsx("div",{className:"text-white/90 font-medium animate-fade-slide mb-6",children:c}),r.jsxs("button",{onClick:I,className:"group relative w-full",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"}),r.jsxs("div",{className:`relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-5 px-8 rounded-full font-bold text-xl shadow-2xl 
            transform transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3`,children:[r.jsx("span",{children:"Let's Learn!"}),r.jsx("span",{className:"text-2xl animate-bounce",children:"🚀"})]})]})]}),r.jsx("style",{jsx:!0,children:`
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
      `})]})}function Vf(){const[e,t]=u.useState(()=>{const U=sessionStorage.getItem("justSignedUp"),G=sessionStorage.getItem("justSignedIn");return U==="true"||G==="true"?(sessionStorage.removeItem("justSignedUp"),sessionStorage.removeItem("justSignedIn"),sessionStorage.setItem("welcomeShown","true"),!1):sessionStorage.getItem("welcomeShown")!=="true"}),n=ke(),s=qn(),{player:a,levelProgress:i,useEnergy:o,changeAvatar:l}=s,[,c]=u.useState({});st("/sounds/correct.mp3",{volume:.6}),st("/sounds/wrong.mp3",{volume:.6}),st("/sounds/coin.mp3",{volume:.75});const[d]=st("/sounds/levelup.mp3",{volume:.8}),f=u.useRef(a.level),m=u.useRef(null);u.useEffect(()=>{const U=()=>{};return window.addEventListener("focus",U),()=>window.removeEventListener("focus",U)},[]),u.useEffect(()=>{a.level>f.current&&(d==null||d(),f.current=a.level)},[a.level,d]),u.useEffect(()=>{const U=()=>{c({})};return window.addEventListener("storage",U),window.addEventListener("coinsUpdated",U),()=>{window.removeEventListener("storage",U),window.removeEventListener("coinsUpdated",U)}},[]);const[h,b]=u.useState(!1),[g,j]=u.useState(null),[k,y]=u.useState(!1),[x,v]=u.useState("medium"),[N,C]=u.useState(10),[I,E]=u.useState(45),[p,w]=u.useState(!1),[S,A]=u.useState(!1),[_,F]=u.useState(!1),[q,X]=u.useState("general-knowledge"),[V,H]=u.useState("medium"),[O,R]=u.useState(10);u.useEffect(()=>{const U=sessionStorage.getItem("homeScrollPosition");U&&window.scrollTo(0,parseInt(U));const G=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",G),()=>window.removeEventListener("scroll",G)},[]);const L=U=>{if(U.slug==="more"){b(!0);return}j(U),y(!0)},D=()=>{console.log("Starting quiz with energy:",a.energy),console.log("Category:",g.slug),n(`/quiz/${g.slug}`,{state:{mode:"quiz",difficulty:x,count:N,timer:{type:"per_q",seconds:I},source:"adventure"}}),y(!1)},T=()=>{console.log("Starting practice, category:",q),n(`/quiz/${q}`,{state:{mode:"practice",difficulty:V,count:O,timer:{type:"off",seconds:0}}}),F(!1)},M=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>{sessionStorage.setItem("questsFromHome","true"),n("/profile/quests")}},{icon:"🔥",label:"Streak",color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>n("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>n("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>n("/profile/rewards")}];return r.jsxs(r.Fragment,{children:[e&&r.jsx(d1,{player:a,onContinue:()=>t(!1)}),r.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[r.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),r.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[r.jsx("style",{jsx:!0,children:`
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
        `}),r.jsxs("div",{className:"mb-8",children:[r.jsxs("div",{className:"flex justify-between items-start mb-4",children:[r.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>A(!0),children:r.jsx(Jb,{player:a,size:"small",showLevel:!0,showName:!0})}),r.jsx("div",{className:"flex gap-2",children:r.jsxs("button",{ref:m,onClick:()=>w(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[r.jsx("span",{className:"text-lg",children:"🪙"}),r.jsx("span",{className:"font-bold",children:ce.getCoins()})]})})]}),r.jsx(Zb,{current:i.current,required:i.required,level:a.level,animate:!0})]}),r.jsx(e1,{}),r.jsx(t1,{actions:M}),r.jsx(s1,{coinPillRef:m}),r.jsx(n1,{categories:S0,onCategorySelect:L}),r.jsx(r1,{onClick:()=>F(!0),isPulsing:a.energy<10}),r.jsxs("div",{onClick:()=>n("/surprise"),className:"mt-6 relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-yellow-500/20 backdrop-blur border border-white/10 p-12 mb-4 cursor-pointer hover:scale-[1.02] transition-all group",children:[r.jsxs("div",{className:"absolute inset-0 opacity-30",children:[r.jsx("div",{className:"absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"}),r.jsx("div",{className:"absolute top-8 right-8 w-3 h-3 bg-pink-400 rounded-full animate-pulse",style:{animationDelay:"0.5s"}}),r.jsx("div",{className:"absolute bottom-6 left-12 w-2 h-2 bg-purple-400 rounded-full animate-pulse",style:{animationDelay:"1s"}}),r.jsx("div",{className:"absolute bottom-4 right-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse",style:{animationDelay:"1.5s"}})]}),r.jsxs("div",{className:"relative flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-xl font-bold mb-1 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent",children:"✨ Surprise Zone"}),r.jsx("p",{className:"text-sm text-gray-400",children:"Mystery Box • Avatar Room • Fun Facts"})]}),r.jsx("div",{className:"text-4xl group-hover:rotate-12 transition-transform",children:"🎁"})]})]}),r.jsx(a1,{show:S,onClose:()=>A(!1),player:a,changeAvatar:l,GAME_CONSTANTS:Ct}),r.jsx(l1,{show:k,onClose:()=>y(!1),selectedCategory:g,difficulty:x,setDifficulty:v,count:N,setCount:C,timer:I,setTimer:E,onStart:D}),r.jsx(c1,{show:_,onClose:()=>F(!1),allCategories:E0,category:q,setCategory:X,difficulty:V,setDifficulty:H,count:O,setCount:R,onStart:T}),r.jsx(i1,{show:h,onClose:()=>b(!1),categories:C0,onCategorySelect:L}),r.jsx(o1,{show:p,onClose:()=>w(!1),coins:a.coins,onNavigateToPlay:()=>{w(!1),n("/play")}})]})]})]})}const Ii={OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},Ti={get:(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function il(){const[e,t]=u.useState(()=>ce.getCoins()),[n,s]=u.useState(()=>ce.getXP()),[a,i]=u.useState(()=>ce.getLevel()),[o,l]=u.useState(()=>Ti.get(Ii.OWNED_CHARACTERS,[])),[c,d]=u.useState(()=>Ti.get(Ii.SOUND,!0));u.useEffect(()=>{const N=lt.getCurrentUser();N!=null&&N.phone&&ce.initializeUserData(N.phone)},[]);const f=u.useCallback(N=>{const C=ce.addCoins(N,"Game reward");return t(C),C},[]),m=u.useCallback(N=>{const C=ce.addXP(N);s(C);const I=ce.getLevel();return I>a&&i(I),C},[a]),h=u.useCallback((N,C="Purchase")=>{if(ce.spendCoins(N,C)){const I=ce.getCoins();return t(I),!0}return!1},[]),b=u.useCallback(N=>{l(C=>{const I=[...new Set([...C,N])];return Ti.set(Ii.OWNED_CHARACTERS,I),I})},[]),g=u.useCallback(()=>ce.checkAndUpdateLevel(),[]);u.useEffect(()=>{Ti.set(Ii.SOUND,c)},[c]);const j=u.useCallback((N,C,I,E,p)=>{const w=lt.getCurrentUser(),S=ce.recordQuizSession(w==null?void 0:w.phone,{score:N,totalQuestions:C,category:I,difficulty:E,mode:p});return t(S.newTotal),s(S.newXP),i(S.newLevel),S},[]),k=u.useCallback((N,C,I)=>{const E=lt.getCurrentUser(),p=ce.recordPracticeSession(E==null?void 0:E.phone,{questionsCompleted:N,correctAnswers:C,category:I});return t(p.newTotal),s(p.newXP),p},[]),y=u.useCallback(()=>{const N=lt.getCurrentUser();return N!=null&&N.phone?ce.getUserStats(N.phone):null},[]),x=u.useCallback(()=>{const N=lt.getCurrentUser();return N!=null&&N.phone?ce.getQuestData(N.phone):null},[]),v=u.useCallback(()=>{const N=lt.getCurrentUser();return ce.getTodaySummary(N==null?void 0:N.phone)},[]);return{coins:e,xp:n,level:a,ownedCharacters:o,soundOn:c,addCoins:f,addXp:m,spendCoins:h,unlockCharacter:b,setSoundOn:d,checkLevelUp:g,recordQuizComplete:j,recordPracticeComplete:k,getUserStats:y,getQuestData:x,getTodaySummary:v,nextLevelThreshold:100*a*(a-1),xpProgress:n/Math.max(1,100*a*(a-1))}}const u1=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],un=u1.slice(0,6),zr=360/un.length,f1={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},Gn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},cr=(e,t=.7)=>{try{const n=new Audio(e);return n.volume=t,n.play().catch(()=>{})}catch{}},ol=e=>{navigator.vibrate&&navigator.vibrate(e)},dr=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Qf=e=>(e%360+360)%360;function h1({run:e,coins:t,xp:n,level:s,ownedCharacters:a,onSpin:i,onBack:o,spinning:l,angle:c,transition:d,result:f,showCallout:m,glowColor:h,soundOn:b,setSoundOn:g,showSparkle:j,pulseIdx:k,nextProgressIdx:y,pendingProgressIdx:x,coinBurstTick:v,lastAnswerWasCorrect:N,coinPillRef:C,wheelRef:I}){const E=100*s*(s-1),[p,w]=u.useState(!1),[S,A]=u.useState(ce.getCoins());return u.useEffect(()=>{const _=()=>A(ce.getCoins());window.addEventListener("coinsUpdated",_),window.addEventListener("storage",_);const F=setInterval(_,1e3);return()=>{window.removeEventListener("coinsUpdated",_),window.removeEventListener("storage",_),clearInterval(F)}},[]),u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),u.useEffect(()=>{if(x==null)return;w(!1);const _=setTimeout(()=>w(!0),30);return()=>clearTimeout(_)},[x]),r.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white overflow-hidden",children:[r.jsx("style",{children:`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) scale(1);
          }
          50% { 
            transform: translateY(-10px) scale(1.02);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.5;
          }
          50% { 
            opacity: 1;
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes progress-fill {
          0% { 
            width: 0%;
            background-position: -200% center;
          }
          50% {
            background-position: 0% center;
          }
          100% { 
            width: 100%;
            background-position: 200% center;
          }
        }
        
        @keyframes star-bounce {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
        }
      `}),r.jsxs("div",{className:"h-full flex flex-col mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[r.jsxs("header",{className:"flex items-center justify-between mb-4 mt-6",children:[r.jsx("button",{onClick:o,className:"h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 grid place-items-center hover:bg-white/20 transition-all",children:r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M15 19l-7-7 7-7"})})}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20",children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsxs("span",{className:"text-xs text-white/70",children:["Lvl ",s]}),r.jsx("div",{className:"w-16 h-1.5 bg-white/20 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500",style:{width:`${Math.min(n/E,1)*100}%`}})})]})}),r.jsxs("button",{ref:C,className:"px-4 py-2 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-yellow-500/30 flex items-center gap-2 hover:scale-105 transition-transform",children:[r.jsx("span",{className:"text-lg",children:"🪙"}),r.jsx("span",{className:"font-bold text-yellow-300",children:S})]})]}),r.jsx("button",{onClick:()=>g(!b),className:"h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 grid place-items-center hover:bg-white/20 transition-all",children:r.jsx("span",{className:"text-xl",children:b?"🔊":"🔇"})})]}),a.length>0&&r.jsx("div",{className:"flex justify-center mb-4",children:r.jsxs("div",{className:"inline-flex gap-3 px-5 py-3 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10",children:[r.jsx("span",{className:"text-xs text-white/50 self-center",children:"Unlocked:"}),a.map(_=>{const F=un.find(q=>dr(q.name)===_);return r.jsx("div",{className:"relative group",children:r.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform",children:r.jsx("span",{className:"text-lg",children:F==null?void 0:F.icon})})},_)})]})}),r.jsx("div",{className:"flex justify-center gap-3 mb-6",children:[0,1,2].map(_=>{const F=!!e.progress[_],q=_===x;return r.jsxs("div",{className:"relative flex items-center",children:[_<2&&r.jsx("div",{className:"absolute left-full w-3 h-0.5 bg-white/20 top-1/2 z-0"}),r.jsxs("div",{className:"relative z-10",children:[r.jsx("div",{className:`
                    w-12 h-12 rounded-full flex items-center justify-center
                    transition-all duration-700 transform
                    ${F?"bg-gradient-to-br from-green-400 to-emerald-500 scale-110":"bg-white/10 backdrop-blur border border-white/20"}
                    ${q?"animate-pulse scale-125":""}
                  `,children:F?r.jsx("span",{className:"text-xl",style:{animation:q?"star-bounce 1s ease-in-out":"none"},children:"⭐"}):r.jsx("span",{className:"text-white/40 font-bold text-sm",children:_+1})}),q&&r.jsx("div",{className:"absolute inset-0 rounded-full overflow-hidden",children:r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",style:{animation:"shimmer 1s ease-out"}})}),j===_&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"absolute -top-1 -right-1 text-yellow-400 animate-ping",children:"✨"}),r.jsx("div",{className:"absolute -bottom-1 -left-1 text-yellow-400 animate-ping",style:{animationDelay:"0.2s"},children:"✨"})]})]})]},_)})}),r.jsx("section",{className:"flex-1 flex items-center justify-center pb-12",children:r.jsxs("div",{className:"relative w-full max-w-sm",children:[r.jsx("div",{className:"absolute inset-0",style:{animation:"pulse-glow 4s ease-in-out infinite"},children:r.jsx("div",{className:"absolute inset-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"})}),r.jsxs("div",{ref:I,className:"relative w-full aspect-square",style:{animation:l?"none":"float 6s ease-in-out infinite"},children:[r.jsx("div",{className:"absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 rounded-full blur-xl"}),h&&r.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full animate-pulse",style:{boxShadow:`0 0 60px 20px ${h}40`,background:`radial-gradient(circle, ${h}20, transparent 70%)`}}),r.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/30 shadow-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900",style:{transform:`rotate(${c}deg)`,transition:d,boxShadow:"inset 0 0 40px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.3)"},children:r.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:un.map((_,F)=>{const q=F*zr,X=q+zr,V=zr>180?1:0,H=Math.PI*q/180,O=Math.PI*X/180,R=50+48*Math.cos(H),L=50-48*Math.sin(H),D=50+48*Math.cos(O),T=50-48*Math.sin(O),M=q+zr/2,U=30,G=50+U*Math.cos(M*Math.PI/180),$=50-U*Math.sin(M*Math.PI/180);return r.jsxs("g",{children:[r.jsx("defs",{children:r.jsxs("linearGradient",{id:`grad${F}`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[r.jsx("stop",{offset:"0%",stopColor:_.color,stopOpacity:"0.9"}),r.jsx("stop",{offset:"100%",stopColor:_.color,stopOpacity:"0.7"})]})}),r.jsx("path",{d:`M50,50 L${R},${L} A48,48 0 ${V} 0 ${D},${T} Z`,fill:`url(#grad${F})`,stroke:"rgba(255,255,255,0.2)",strokeWidth:"0.5"}),r.jsx("text",{x:G,y:$,fill:"white",fontSize:"20",dominantBaseline:"middle",textAnchor:"middle",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.3))"},children:_.icon})]},F)})})}),r.jsxs("button",{onClick:i,disabled:l,className:"absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group",children:[r.jsx("div",{className:`
                  w-20 h-20 rounded-full 
                  bg-gradient-to-br from-white to-gray-100
                  shadow-2xl flex items-center justify-center
                  transition-all duration-300
                  ${l?"scale-90 opacity-80":"hover:scale-110 active:scale-95 hover:shadow-3xl"}
                `,children:r.jsx("span",{className:"font-black text-gray-800 text-sm",children:"SPIN"})}),!l&&r.jsx("div",{className:"absolute inset-0 rounded-full bg-white/30 animate-ping"})]}),m&&f&&r.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-20 z-30",children:r.jsx("div",{className:"px-5 py-2 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl animate-bounce",children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:f.cat.icon}),r.jsx("span",{className:"font-bold text-gray-800",children:f.cat.name})]})})})]})]})}),r.jsx("div",{className:"text-center pb-12",children:r.jsx("p",{className:"text-white/30 text-xs",children:"Tap SPIN to begin your adventure"})})]})]})}var Zi={linear:function(e,t,n,s){var a=n-t;return a*e/s+t},easeInQuad:function(e,t,n,s){var a=n-t;return a*(e/=s)*e+t},easeOutQuad:function(e,t,n,s){var a=n-t;return-a*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,n,s){var a=n-t;return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,s){var a=n-t;return a*(e/=s)*e*e+t},easeOutCubic:function(e,t,n,s){var a=n-t;return a*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,n,s){var a=n-t;return(e/=s/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,s){var a=n-t;return a*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,n,s){var a=n-t;return-a*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,n,s){var a=n-t;return(e/=s/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,s){var a=n-t;return a*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,n,s){var a=n-t;return a*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,s){var a=n-t;return(e/=s/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,s){var a=n-t;return-a*Math.cos(e/s*(Math.PI/2))+a+t},easeOutSine:function(e,t,n,s){var a=n-t;return a*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,n,s){var a=n-t;return-a/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,n,s){var a=n-t;return e==0?t:a*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,n,s){var a=n-t;return e==s?t+a:a*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,n,s){var a=n-t;return e===0?t:e===s?t+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,n,s){var a=n-t;return-a*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,n,s){var a=n-t;return a*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,n,s){var a=n-t;return(e/=s/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,n,s){var a=n-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t)},easeOutElastic:function(e,t,n,s){var a=n-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),i*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/o)+a+t)},easeInOutElastic:function(e,t,n,s){var a=n-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s/2)===2?t+a:(o||(o=s*(.3*1.5)),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o)*.5+a+t)},easeInBack:function(e,t,n,s,a){var i=n-t;return a===void 0&&(a=1.70158),i*(e/=s)*e*((a+1)*e-a)+t},easeOutBack:function(e,t,n,s,a){var i=n-t;return a===void 0&&(a=1.70158),i*((e=e/s-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(e,t,n,s,a){var i=n-t;return a===void 0&&(a=1.70158),(e/=s/2)<1?i/2*(e*e*(((a*=1.525)+1)*e-a))+t:i/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(e,t,n,s){var a=n-t,i;return i=Zi.easeOutBounce(s-e,0,a,s),a-i+t},easeOutBounce:function(e,t,n,s){var a=n-t;return(e/=s)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,n,s){var a=n-t,i;return e<s/2?(i=Zi.easeInBounce(e*2,0,a,s),i*.5+t):(i=Zi.easeOutBounce(e*2-s,0,a,s),i*.5+a*.5+t)}},m1=Zi;function p1(e){return e*Math.PI/180}function qt(e,t){return e+Math.random()*(t-e)}function g1(e,t){return Math.floor(e+Math.random()*(t-e+1))}var ba;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(ba||(ba={}));var er;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(er||(er={}));const x1=1e3/60;class v1{constructor(t,n,s,a){this.getOptions=n;const{colors:i,initialVelocityX:o,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=a,this.w=qt(5,20),this.h=qt(5,20),this.radius=qt(5,10),this.vx=typeof o=="number"?qt(-o,o):qt(o.min,o.max),this.vy=typeof l=="number"?qt(-l,0):qt(l.min,l.max),this.shape=g1(0,2),this.angle=p1(qt(0,360)),this.angularSpin=qt(-.2,.2),this.color=i[Math.floor(Math.random()*i.length)],this.rotateY=qt(0,1),this.rotationDirection=qt(0,1)?er.Positive:er.Negative}update(t){const{gravity:n,wind:s,friction:a,opacity:i,drawShape:o}=this.getOptions(),l=t/x1;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=n*l,this.vx+=s*l,this.vx*=a**l,this.vy*=a**l,this.rotateY>=1&&this.rotationDirection===er.Positive?this.rotationDirection=er.Negative:this.rotateY<=-1&&this.rotationDirection===er.Negative&&(this.rotationDirection=er.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=i,this.context.lineCap="round",this.context.lineWidth=2,o&&typeof o=="function")o.call(this,this.context);else switch(this.shape){case ba.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case ba.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case ba.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class y1{constructor(t,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=a=>{this.particles.splice(a,1)},this.getParticle=()=>{const a=qt(this.x,this.w+this.x),i=qt(this.y,this.h+this.y);return new v1(this.context,this.getOptions,a,i)},this.animate=a=>{const{canvas:i,context:o,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:d,recycle:f,numberOfPieces:m,debug:h,tweenFunction:b,tweenDuration:g}=this.getOptions();if(!d)return!1;const j=this.particles.length,k=f?j:l;if(k<m){c!==m&&(this.tweenProgress=0,this.tweenFrom=k,this.lastNumberOfPieces=m),this.tweenProgress=Math.min(g,Math.max(0,this.tweenProgress+a));const y=b(this.tweenProgress,this.tweenFrom,m,g),x=Math.round(y-k);for(let v=0;v<x;v++)this.particles.push(this.getParticle());this.particlesGenerated+=x}h&&(o.font="12px sans-serif",o.fillStyle="#333",o.textAlign="right",o.fillText(`Particles: ${j}`,i.width-10,i.height-20));for(let y=this.particles.length-1;y>=0;y--){const x=this.particles[y];x.update(a),(x.y>i.height||x.y<-100||x.x>i.width+100||x.x<-100)&&(f&&k<=m?this.particles[y]=this.getParticle():this.removeParticleAt(y))}return j>0||k<m},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=n}}const mu={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:m1.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class b1{constructor(t,n){this.lastFrameTime=0,this.setOptionsWithDefaults=a=>{const i={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...i,...mu,...a},Object.assign(this,a.confettiSource)},this.update=(a=0)=>{const{options:{run:i,onConfettiComplete:o,frameRate:l},canvas:c,context:d}=this,f=Math.min(a-this.lastFrameTime,50);if(l&&f<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=a-(l?f%l:0),i&&(d.fillStyle="white",d.clearRect(0,0,c.width,c.height)),this.generator.animate(f)?this.rafId=requestAnimationFrame(this.update):(o&&typeof o=="function"&&this.generator.particlesGenerated>0&&o.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new y1(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(t){var a,i;const n=(a=this._options)==null?void 0:a.run,s=(i=this._options)==null?void 0:i.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&n===!1&&this.update()}}const w1=It.createRef();class pu extends It.Component{constructor(t){super(t),this.canvas=It.createRef(),this.canvas=t.canvasRef||w1}componentDidMount(){if(this.canvas.current){const t=Gl(this.props)[0];this.confetti=new b1(this.canvas.current,t)}}componentDidUpdate(){const t=Gl(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,n]=Gl(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return r.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...n,style:s})}}pu.defaultProps={...mu};pu.displayName="ReactConfetti";function Gl(e){const t={},n={},s={},a=[...Object.keys(mu),"confettiSource","drawShape","onConfettiComplete","frameRate"],i=["canvasRef"];for(const o in e){const l=e[o];a.includes(o)?t[o]=l:i.includes(o)?i[o]=l:s[o]=l}return[t,s,n]}const _0=It.forwardRef((e,t)=>r.jsx(pu,{canvasRef:t,...e}));function Kf({question:e,category:t,onAnswer:n,run:s,timeLeft:a,usedLifelines:i,onUseLifeline:o,eliminatedOptions:l,audienceData:c,onBack:d,timeUp:f,onTimeUpBackToWheel:m,soundOn:h}){const[b,g]=u.useState(null),[j,k]=u.useState(!1),[y,x]=u.useState(!1),v=u.useRef(null),N=u.useRef(null),[C,I]=u.useState(null);u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),u.useEffect(()=>{if(!j||!v.current)return;const w=v.current.getBoundingClientRect();I({x:w.left,y:w.top-300,w:w.width,h:8})},[j]);const E=w=>{if(j)return;g(w),k(!0);const S=w===e.correctIndex;ol(S?[50,30,50]:[200]),h&&cr(S?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{n(S,null)},1500)},p=b===e.correctIndex;return r.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:r.jsxs("div",{ref:N,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[r.jsx("div",{className:"mb-4",children:r.jsx("button",{onClick:()=>x(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),r.jsxs("div",{className:"text-center mb-6",children:[r.jsx("div",{className:`text-4xl font-black mb-2 ${a<=10?"text-red-400 animate-pulse":"text-white"}`,children:a}),r.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:r.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${a<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${a/30*100}%`}})})]}),r.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[r.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),r.jsxs("div",{children:[r.jsx("div",{className:"text-lg font-bold",children:t.name}),r.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),r.jsx("h2",{ref:v,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),r.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((w,S)=>{const A=l.includes(S),_=b===S,F=S===e.correctIndex;let q="bg-white/10 border-white/20",X="opacity-100";return A?X="opacity-30":j&&_?q=F?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&F?q="bg-green-500/30 border-green-400":_&&(q="bg-white/20 border-white/40"),r.jsx("button",{onClick:()=>E(S),disabled:j||A,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${q} ${X} ${!j&&!A?"hover:bg-white/15 active:scale-98":""}`,children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+S)}),r.jsx("span",{className:"font-medium flex-1",children:w}),c&&r.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[S]),"%"]})]})},S)})}),!j&&r.jsxs("div",{className:"flex gap-4 mb-8",children:[r.jsx("button",{onClick:()=>o("fifty"),disabled:i.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),r.jsx("button",{onClick:()=>o("audience"),disabled:i.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&r.jsxs("div",{className:"relative text-center",children:[p&&r.jsx("div",{className:"absolute inset-0 pointer-events-none",children:r.jsx(_0,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:C||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),r.jsx("button",{onClick:()=>n(p,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),f&&r.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:r.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[r.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),r.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),r.jsx("button",{onClick:m,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),y&&r.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:r.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[r.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),r.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>x(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),r.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Xf({category:e,onComplete:t,isBonus:n=!1,soundOn:s=!0}){const[a,i]=u.useState(!1);return u.useEffect(()=>{document.body.classList.add("hide-bottom-nav"),i(!0),s&&cr("/sounds/flush.mp3",.8),ol([50]);const o=setTimeout(t,2e3);return()=>{clearTimeout(o),document.body.classList.remove("hide-bottom-nav")}},[t,s]),n?r.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 flex flex-col items-center justify-center text-white relative overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0",children:[...Array(20)].map((o,l)=>r.jsx("div",{className:"absolute w-2 h-2 bg-white/10 rounded-full animate-pulse",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`}},l))}),r.jsxs("div",{className:`relative z-10 text-center transform transition-all duration-700 ${a?"scale-100 opacity-100":"scale-50 opacity-0"}`,children:[r.jsx("h2",{className:"text-4xl font-black mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",children:"Bonus Round!"}),r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full relative backdrop-blur-xl border-2 border-yellow-400/50",children:r.jsx("span",{className:"absolute top-1/2 left-1/2 text-6xl animate-pulse",style:{transform:"translate(-46%, -50%)"},children:"⭐"})}),r.jsx("div",{className:"absolute inset-0 rounded-full bg-yellow-400/20 animate-ping"})]}),r.jsx("p",{className:"mt-6 text-lg text-white/80",children:"Get ready for a special challenge!"})]})]}):r.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white flex items-center justify-center relative overflow-hidden",children:[r.jsx("style",{children:`
        @keyframes float-up {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes category-bounce {
          0% { transform: scale(0) rotate(-180deg); }
          50% { transform: scale(1.1) rotate(90deg); }
          70% { transform: scale(0.95) rotate(-20deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
      `}),r.jsx("div",{className:"absolute inset-0 overflow-hidden",children:[...Array(8)].map((o,l)=>r.jsx("div",{className:"absolute w-4 h-4 rounded-full",style:{backgroundColor:`${e.color}40`,left:`${10+l*12}%`,animation:`float-up ${8+l*2}s linear infinite`,animationDelay:`${l*.5}s`}},l))}),r.jsxs("div",{className:"relative",style:{animation:a?"category-bounce 0.8s ease-out":"none"},children:[r.jsx("div",{className:"absolute -inset-20 rounded-full blur-3xl",style:{backgroundColor:`${e.color}20`}}),r.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center shadow-2xl",style:{background:`linear-gradient(135deg, ${e.color}dd, ${e.color}99)`,boxShadow:`0 20px 60px ${e.color}40, inset 0 0 60px rgba(255,255,255,0.1)`},children:[r.jsx("div",{className:"absolute inset-4 rounded-full border-2 border-white/10"}),r.jsx("div",{className:"absolute inset-8 rounded-full border border-white/5"}),r.jsxs("div",{className:"relative z-10 text-center",children:[r.jsx("div",{className:"text-3xl font-black mb-4 text-white drop-shadow-lg",children:e.name}),r.jsx("div",{className:"w-24 h-24 bg-white/20 backdrop-blur rounded-2xl grid place-items-center mx-auto transform hover:scale-110 transition-transform",children:r.jsx("span",{className:"text-5xl filter drop-shadow-lg",children:e.icon})})]})]})]}),r.jsxs("div",{className:"absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2",children:[r.jsx("div",{className:"w-2 h-2 rounded-full bg-white/30"}),r.jsx("div",{className:"w-2 h-2 rounded-full bg-white/60 animate-pulse"}),r.jsx("div",{className:"w-2 h-2 rounded-full bg-white/30"})]})]})}function j1({onDone:e}){const[t,n]=u.useState([!1,!1,!1,!1]);return u.useEffect(()=>{const s=[setTimeout(()=>n([!0,!1,!1,!1]),100),setTimeout(()=>n([!0,!0,!1,!1]),300),setTimeout(()=>n([!0,!0,!0,!1]),500),setTimeout(()=>n([!0,!0,!0,!0]),700),setTimeout(e,2500)];return()=>s.forEach(clearTimeout)},[e]),r.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 flex items-center justify-center text-white relative overflow-hidden",children:[r.jsx("style",{children:`
        @keyframes confetti-fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        @keyframes star-pop {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.3) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes text-wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}),r.jsx("div",{className:"absolute inset-0",children:[...Array(30)].map((s,a)=>r.jsx("div",{className:"absolute text-4xl",style:{left:`${Math.random()*100}%`,animation:`confetti-fall ${3+Math.random()*2}s linear infinite`,animationDelay:`${Math.random()*2}s`},children:["🎉","🎊","✨","⭐","🌟"][Math.floor(Math.random()*5)]},a))}),r.jsxs("div",{className:"relative z-10 text-center",children:[r.jsx("div",{className:"flex justify-center gap-6 mb-8",children:[0,1,2].map(s=>r.jsx("div",{className:`transform transition-all duration-500 ${t[s]?"scale-100 opacity-100":"scale-0 opacity-0"}`,style:{animation:t[s]?"star-pop 0.6s ease-out":"none"},children:r.jsx("div",{className:"w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center",children:r.jsx("span",{className:"text-4xl",children:"⭐"})})},s))}),r.jsxs("div",{className:`transform transition-all duration-700 ${t[3]?"scale-100 opacity-100":"scale-0 opacity-0"}`,children:[r.jsxs("h2",{className:"text-4xl font-black mb-2",children:[r.jsx("span",{style:{animation:"text-wave 1s ease-in-out infinite"},children:"Perfect"})," ",r.jsx("span",{style:{animation:"text-wave 1s ease-in-out 0.1s infinite"},children:"Streak!"})]}),r.jsx("p",{className:"text-xl opacity-90",children:"3 correct in a row!"}),r.jsxs("div",{className:"mt-6 flex justify-center gap-4 text-3xl",children:[r.jsx("span",{className:"animate-bounce",style:{animationDelay:"0s"},children:"🎯"}),r.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.1s"},children:"💯"}),r.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.2s"},children:"🔥"})]})]})]})]})}function N1({onSelect:e}){const[t,n]=u.useState(null);return r.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white",children:[r.jsx("style",{children:`
        @keyframes character-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}),r.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[r.jsxs("header",{className:"text-center mb-10",children:[r.jsxs("div",{className:"relative inline-block mb-6",children:[r.jsx("div",{className:"absolute inset-0 bg-yellow-400/30 rounded-full blur-2xl animate-pulse"}),r.jsx("div",{className:"relative text-6xl animate-bounce",children:"🏆"})]}),r.jsx("h1",{className:"text-3xl font-black mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",children:"Perfect Round!"}),r.jsx("p",{className:"text-lg text-white/80",children:"Choose your reward character"})]}),r.jsx("div",{className:"grid grid-cols-2 gap-4",children:un.map((s,a)=>{const i=f1[dr(s.name)],o=t===a;return r.jsxs("button",{onClick:()=>{ol([20]),cr("/sounds/select.mp3",.5),e(dr(s.name))},onMouseEnter:()=>n(a),onMouseLeave:()=>n(null),className:`
                  relative p-6 rounded-2xl backdrop-blur-xl
                  bg-white/10 border border-white/20
                  transform transition-all duration-300
                  hover:scale-105 hover:bg-white/15 active:scale-95
                  ${o?"shadow-2xl":"shadow-lg"}
                `,style:{animation:o?"character-float 2s ease-in-out infinite":"none",boxShadow:o?`0 10px 40px ${s.color}40`:""},children:[o&&r.jsx("div",{className:"absolute inset-0 rounded-2xl opacity-30",style:{background:"linear-gradient(105deg, transparent 40%, white 50%, transparent 60%)",animation:"shimmer 1s ease-out"}}),r.jsx("div",{className:"w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center",style:{background:`linear-gradient(135deg, ${s.color}40, ${s.color}20)`},children:r.jsx("span",{className:"text-3xl",children:s.icon})}),r.jsx("div",{className:"font-bold text-base mb-1",children:i}),r.jsx("div",{className:"text-xs text-white/60",children:s.name}),r.jsx("div",{className:"absolute top-2 right-2",children:r.jsx("span",{className:"text-xs",children:"🔓"})})]},dr(s.name))})}),r.jsx("p",{className:"text-center text-xs text-white/40 mt-6",children:"Tap to unlock and play bonus round!"})]})]})}function k1({stats:e,onPlayAgain:t,onExit:n,soundOn:s=!0}){const[a,i]=u.useState([!1,!1,!1,!1]),o=e||{correctAnswers:0,totalQuestions:3,coinsEarned:0,xpEarned:0,perfectRound:!1,characterUnlocked:null,bonusCorrect:!1},l=Math.round(o.correctAnswers/o.totalQuestions*100),c=o.perfectRound;return u.useEffect(()=>{document.body.classList.add("hide-bottom-nav"),s&&cr(c?"/sounds/win.mp3":"/sounds/complete.mp3",.7);const d=[setTimeout(()=>i([!0,!1,!1,!1]),200),setTimeout(()=>i([!0,!0,!1,!1]),500),setTimeout(()=>i([!0,!0,!0,!1]),800),setTimeout(()=>i([!0,!0,!0,!0]),1100)];return()=>{d.forEach(clearTimeout),document.body.classList.remove("hide-bottom-nav")}},[s,c]),r.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white relative overflow-hidden",children:[r.jsx("style",{children:`
        @keyframes float-in {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes star-rain {
          0% { transform: translateY(-70vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}),c&&r.jsx("div",{className:"absolute inset-0",children:[...Array(20)].map((d,f)=>r.jsx("div",{className:"absolute text-2xl",style:{left:`${Math.random()*100}%`,animation:`star-rain ${5+Math.random()*3}s linear infinite`,animationDelay:`${Math.random()*3}s`},children:["⭐","✨","🌟"][Math.floor(Math.random()*3)]},f))}),r.jsxs("div",{className:"relative z-10 max-w-md mx-auto px-5 pt-16 pb-8",children:[r.jsxs("div",{className:`text-center mb-8 transform transition-all duration-700 ${a[0]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[r.jsx("div",{className:"text-6xl mb-4",children:c?"🏆":l>=66?"⭐":"✅"}),r.jsx("h1",{className:"text-3xl font-black mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent",children:c?"Perfect Game!":l>=66?"Great Job!":"Good Try!"}),r.jsx("p",{className:"text-lg text-white/70",children:"Round Complete"})]}),r.jsxs("div",{className:"space-y-4 mb-8",children:[r.jsxs("div",{className:`bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transform transition-all duration-700 ${a[1]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[r.jsxs("div",{className:"flex justify-between items-center mb-4",children:[r.jsx("span",{className:"text-white/60",children:"Score"}),r.jsxs("span",{className:"text-2xl font-bold",children:[o.correctAnswers,"/",o.totalQuestions]})]}),r.jsx("div",{className:"h-3 bg-white/20 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-1000",style:{width:`${a[1]?l:0}%`}})}),r.jsxs("div",{className:"text-right text-sm text-white/60 mt-2",children:[l,"% Accuracy"]})]}),r.jsxs("div",{className:`bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 transform transition-all duration-700 ${a[2]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[r.jsx("div",{className:"text-white/60 mb-4",children:"Rewards Earned"}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-3xl mb-2",children:"🪙"}),r.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["+",o.coinsEarned]}),r.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-3xl mb-2",children:"⚡"}),r.jsxs("div",{className:"text-2xl font-bold text-blue-400",children:["+",o.xpEarned]}),r.jsx("div",{className:"text-xs text-white/60",children:"XP"})]})]})]}),o.characterUnlocked&&r.jsx("div",{className:`bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/30 transform transition-all duration-700 ${a[2]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-4xl mb-2",children:o.characterUnlocked.icon}),r.jsx("div",{className:"text-lg font-bold text-purple-300",children:"Character Unlocked!"}),r.jsx("div",{className:"text-sm text-white/60",children:o.characterUnlocked.name})]})})]}),r.jsxs("div",{className:`space-y-3 transform transition-all duration-700 ${a[3]?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,children:[r.jsx("button",{onClick:t,className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-transform -mt-4",children:"Play Again"}),r.jsx("button",{onClick:n,className:"w-full py-3 rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white font-bold text-lg hover:bg-white/20 active:scale-95 transition-all",children:"Back to Games"})]})]})]})}function S1(){const e=ke(),t=tt(),n=()=>{var de;const ie=((de=t.state)==null?void 0:de.from)==="home";e(ie?"/":"/play")},{coins:s,xp:a,level:i,ownedCharacters:o,soundOn:l,unlockCharacter:c,setSoundOn:d}=il(),[f,m]=u.useState("wheel"),[h,b]=u.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[g,j]=u.useState([]),[k,y]=u.useState(null),[x,v]=u.useState(null),[N,C]=u.useState(30),[I,E]=u.useState([]),[p,w]=u.useState(null),[S,A]=u.useState(null),[_,F]=u.useState(!1),[q,X]=u.useState(0),[V,H]=u.useState(!1),[O,R]=u.useState(0),[L,D]=u.useState("none"),[T,M]=u.useState(!1),[U,G]=u.useState(null),[$,Z]=u.useState(null),[B,z]=u.useState(!1),[ee,Y]=u.useState(null),[Q,K]=u.useState(-1),[J,W]=u.useState(0),[P,te]=u.useState(null),[ne,oe]=u.useState(null),[ue,ye]=u.useState(!1),[ve,ft]=u.useState(null),[_e,Ge]=u.useState(-1),[Se,ze]=u.useState([!1,!1,!1]),[wt,jt]=u.useState(!1),[Ae,We]=u.useState(!1),[Ve,Wt]=u.useState(null),Fe=u.useRef(null),Je=u.useRef(null),at=u.useRef(null),Ot=u.useRef(null),Ht=u.useRef(null),Sn=u.useMemo(()=>{var ie;return((ie=window.matchMedia)==null?void 0:ie.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);u.useEffect(()=>(Ws(),se(),window.history.pushState({mode:"classic"},"",window.location.href),()=>he()),[]),u.useEffect(()=>{const ie=de=>{var Ee;de.preventDefault();const ge=((Ee=t.state)==null?void 0:Ee.from)==="home";e(ge?"/":"/play")};return window.addEventListener("popstate",ie),()=>window.removeEventListener("popstate",ie)},[e,t]),u.useEffect(()=>(f==="question"&&N>0&&!Ae?at.current=setTimeout(()=>{C(ie=>{const de=ie-1;return de===10&&l&&cr("/sounds/tick.mp3",.8),de})},1e3):f==="question"&&N===0&&F(!0),()=>{at.current&&clearTimeout(at.current)}),[f,N,l,Ae]),u.useEffect(()=>{if(f!=="wheel"||P==null)return;K(P),l&&cr("/sounds/progress.mp3",.6),Ge(P);const ie=setTimeout(()=>Ge(-1),900),de=setTimeout(()=>K(-1),900),ge=setTimeout(()=>{ve&&(ve==="streakFlash"?m("streakFlash"):ve==="characterPicker"?m("characterPicker"):ve==="summary"?m("summary"):je(),ft(null)),te(null)},1800);return()=>{clearTimeout(ie),clearTimeout(de),clearTimeout(ge)}},[f,P,ve,l]),u.useEffect(()=>{f!=="wheel"||!wt||(W(ie=>ie+1),jt(!1))},[f,wt]),u.useEffect(()=>{if(f!=="wheel"||ne==null)return;const de=setTimeout(()=>{te(ne),oe(null)},ue?1800:0);return()=>clearTimeout(de)},[f,ne,ue]);const Ws=async()=>{try{const de=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:ge}=Kr.parse(de,{header:!0,skipEmptyLines:!0,transformHeader:Ne=>Ne.trim().toLowerCase()}),Ee=ge.map((Ne,xt)=>{var di;const Nt=[Ne.option1,Ne.option2,Ne.option3,Ne.option4].map(vl=>(vl||"").trim()).filter(Boolean);if(Nt.length<4)return null;let Tr={a:0,b:1,c:2,d:3}[(di=Ne.answer)==null?void 0:di.toLowerCase()];return Tr===void 0&&(Tr=Nt.findIndex(vl=>vl.toLowerCase()===(Ne.answer||"").toLowerCase())),Tr===-1&&(Tr=0),{id:Ne.id||`q_${xt}`,prompt:(Ne.question||"").trim(),options:Nt,correctIndex:Tr,category:(Ne.category||Ne.subject||"general knowledge").trim(),difficulty:(Ne.difficulty||"medium").toLowerCase(),explanation:(Ne.explanation||"").trim()}}).filter(Boolean);j(Ee)}catch(ie){console.error("Failed to load questions:",ie),j([])}},se=()=>{const ie=new Audio("/sounds/spin.mp3");ie.loop=!0,ie.volume=.6,Ot.current=ie},he=()=>{if(at.current&&clearTimeout(at.current),Ht.current&&(clearTimeout(Ht.current),Ht.current=null),Ot.current){try{Ot.current.pause()}catch{}Ot.current=null}},Ce=()=>{b({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),ze([!1,!1,!1]),y(null),v(null),A(null),E([]),w(null),F(!1),W(0),X(0),H(!1),Z(null)},je=()=>{n(),Ce()},Qe=()=>{if(l&&Ot.current){try{Ot.current.currentTime=0,Ot.current.play()}catch{}Ht.current&&clearTimeout(Ht.current),Ht.current=setTimeout(()=>{be()},2e3)}},be=()=>{if(Ht.current&&(clearTimeout(Ht.current),Ht.current=null),Ot.current)try{Ot.current.pause(),Ot.current.currentTime=0}catch{}},Ke=()=>{if(T)return;G(null),z(!1),Y(null),M(!0),Qe();const ie=Math.floor(Math.random()*un.length),de=un[ie],ge=Qf(O),Ee=ie*zr+zr/2,Ne=(Math.random()-.5)*(zr*.3),xt=360-Ee+Ne;let Nt=Qf(xt-ge);const vn=Gn.FULL_TURNS*360+Nt,Tr=O+vn+Gn.OVERSHOOT;D(`transform ${Sn?1e3:Gn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),R(Tr),ol([20,50,20]),setTimeout(()=>{D(`transform ${Sn?200:Gn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),R(di=>di-Gn.OVERSHOOT)},Sn?1e3:Gn.DURATION),setTimeout(()=>{be(),M(!1),G({cat:de,index:ie}),v(de),Y(de.color),z(!0),setTimeout(()=>{z(!1),m("interstitial")},1500),setTimeout(()=>Y(null),1e3)},(Sn?1e3:Gn.DURATION)+(Sn?200:Gn.SETTLE_DURATION)+100)},Ie=()=>{const ie=g.filter(ge=>{const Ee=ge.category.toLowerCase(),Ne=x.name.toLowerCase();return Ee.includes(Ne)||Ne.includes(Ee)});let de;ie.length>0?de=ie[Math.floor(Math.random()*ie.length)]:de=g[Math.floor(Math.random()*g.length)],de?(y(de),C(30),E([]),w(null),F(!1),We(!1),m("question")):m("wheel")},Ze=(ie,de,ge=!1)=>{if(!ge){We(!0);return}const Ee=h.qIndex,Ne=[...h.progress];Ne[Ee]=!0;const xt=[...Se];if(xt[Ee]=!!ie,ze(xt),b(Nt=>({...Nt,progress:Ne,qIndex:Nt.qIndex+1})),ie&&(X(Nt=>Nt+5),setTimeout(()=>{var vn;const Nt=(vn=Je.current)==null?void 0:vn.getBoundingClientRect();Nt?Wt({startRect:Nt,targetRef:Fe,count:5,amount:5}):(ce.addCoins(5,"Classic Mode - Correct Answer"),ce.addXP(1),window.dispatchEvent(new Event("coinsUpdated")),cr("/sounds/coin.mp3",.7))},100)),oe(Ee),ye(!!ie),Ee===2)if(xt.every(Boolean))ft("streakFlash");else{const vn={correctAnswers:xt.filter(Boolean).length,totalQuestions:3,coinsEarned:q,xpEarned:xt.filter(Boolean).length,perfectRound:!1,characterUnlocked:null,bonusCorrect:!1};Z(vn),ft("summary")}else ft(null);m("wheel")},fe=ie=>{if(!(h.lifelines[ie]||!k)){if(b(de=>({...de,lifelines:{...de.lifelines,[ie]:!0}})),ie==="fifty"){const ge=k.options.map((Ee,Ne)=>Ne).filter(Ee=>Ee!==k.correctIndex).slice(0,2);E(ge)}else if(ie==="audience"){const de=40+Math.random()*25;let ge=100-de;const Ee=[0,0,0,0];Ee[k.correctIndex]=Math.round(de);const Ne=[0,1,2,3].filter(xt=>xt!==k.correctIndex);Ne.forEach((xt,Nt)=>{if(Nt===Ne.length-1)Ee[xt]=ge;else{const vn=Math.floor(Math.random()*ge);Ee[xt]=vn,ge-=vn}}),w(Ee)}}},me=ie=>{A(ie),m("bonusInterstitial")},pe=ie=>{H(ie),ie&&S&&(c(S),X(ge=>ge+10));const de={correctAnswers:Se.filter(Boolean).length+(ie?1:0),totalQuestions:4,coinsEarned:q+(ie?10:0),xpEarned:Se.filter(Boolean).length+(ie?2:0),perfectRound:Se.every(Boolean),characterUnlocked:S?un.find(ge=>dr(ge.name)===S):null,bonusCorrect:ie};Z(de),m("summary")},it=()=>{m("wheel")};switch(f){case"wheel":return r.jsxs(r.Fragment,{children:[Ve&&r.jsx(Sr,{startRect:Ve.startRect,targetRef:Ve.targetRef,count:Ve.count,onDone:()=>{ce.addCoins(Ve.amount,"Classic Mode - Correct Answer"),ce.addXP(1),window.dispatchEvent(new Event("coinsUpdated")),cr("/sounds/coin.mp3",.7),Wt(null)}}),r.jsx(h1,{run:h,coins:s,xp:a,level:i,ownedCharacters:o,onSpin:Ke,onBack:n,spinning:T,angle:O,transition:L,result:U,showCallout:B,glowColor:ee,soundOn:l,setSoundOn:d,showSparkle:Q,pulseIdx:_e,coinBurstTick:J,pendingProgressIdx:P,lastAnswerWasCorrect:ue,nextProgressIdx:ne,coinPillRef:Fe,wheelRef:Je})]});case"interstitial":return r.jsx(Xf,{category:x,onComplete:Ie,soundOn:l});case"streakFlash":return r.jsx(j1,{onDone:()=>m("characterPicker")});case"question":return r.jsx(Kf,{question:k,category:x,onAnswer:Ze,run:h,timeLeft:N,usedLifelines:h.lifelines,onUseLifeline:fe,eliminatedOptions:I,audienceData:p,onBack:it,timeUp:_,onTimeUpBackToWheel:()=>{F(!1),m("wheel")},soundOn:l});case"characterPicker":return r.jsx(N1,{onSelect:me});case"bonusInterstitial":return r.jsx(Xf,{category:un.find(ie=>dr(ie.name)===S),onComplete:()=>m("bonusQuestion"),isBonus:!0,soundOn:l});case"bonusQuestion":if(!k){const ie=un.find(de=>dr(de.name)===S);if(ie&&g.length>0){const de=g.filter(Ee=>{const Ne=Ee.category.toLowerCase(),xt=ie.name.toLowerCase();return Ne.includes(xt)||xt.includes(Ne)}),ge=de.length>0?de[Math.floor(Math.random()*de.length)]:g[Math.floor(Math.random()*g.length)];y(ge),C(30)}return r.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:r.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return r.jsx(Kf,{question:k,category:un.find(ie=>dr(ie.name)===S)||un[0],onAnswer:pe,run:{...h,lifelines:{fifty:!0,audience:!0}},timeLeft:N,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:n,soundOn:l});case"summary":return r.jsx(k1,{stats:$,onPlayAgain:()=>{Ce(),m("wheel")},onExit:n,soundOn:l});default:return r.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),r.jsx("button",{onClick:()=>m("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function C1({lives:e,maxLives:t=3}){const[n,s]=u.useState(null),[a,i]=u.useState(e);return u.useEffect(()=>{e<a?(s(a-1),setTimeout(()=>s(null),600)):e>a&&(s(e-1),setTimeout(()=>s(null),1e3)),i(e)},[e,a]),r.jsxs("div",{className:"relative",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:"flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[r.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((o,l)=>r.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:r.jsxs("div",{className:"relative",children:[l<e?r.jsxs("div",{className:`relative ${l===n&&e>a?"heart-gained":""}`,children:[r.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&r.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):r.jsx("div",{className:`relative ${l===n&&e<a?"heart-lost":""}`,children:r.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===n&&e>a&&r.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[r.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),r.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),r.jsx("div",{className:"pr-1",children:r.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&r.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:r.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:r.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function E1({question:e,onAnswer:t,lives:n,questionCount:s,correctStreak:a,totalScore:i,currentDifficulty:o,timeLeft:l,showFeedback:c,lastAnswerCorrect:d,checkpoint:f,onBack:m,soundOn:h,setSoundOn:b}){const[g,j]=u.useState(null),[k,y]=u.useState(!1),[x,v]=u.useState(!1),N={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},C=N[o];u.useEffect(()=>{a>0&&a%5===0&&c&&d&&(y(!0),setTimeout(()=>y(!1),3e3))},[a,c,d]),u.useEffect(()=>{c&&d&&(v(!0),setTimeout(()=>v(!1),1e3))},[c,d]);const I=E=>{c||(j(E),t(E))};return u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),r.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[r.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:C.emoji}),r.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),r.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),r.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),r.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[r.jsxs("div",{className:"flex justify-between items-center mb-8 slide-in",children:[r.jsx("button",{onClick:m,className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:r.jsx("span",{className:"text-xl",children:"◀️"})}),r.jsx(C1,{lives:n}),r.jsx("button",{onClick:()=>b(!h),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:r.jsx("span",{className:"text-xl",children:h?"🔊":"🔇"})})]}),r.jsx("div",{className:`glass-card rounded-3xl p-2 shadow-xl mb-2 mt-12 slide-in bg-gradient-to-r ${C.accentGradient}`,style:{animationDelay:"0.1s"},children:r.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${C.color} bg-clip-text text-transparent ${x?"score-pulse":""}`,children:i}),r.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),c&&d&&r.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:r.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",N[o]?o==="EASY"?10:o==="MEDIUM"?20:o==="HARD"?30:o==="EXPERT"?50:100:10]})})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-3xl font-black text-white",children:s}),r.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),r.jsxs("div",{className:"text-center relative",children:[r.jsx("div",{className:`text-3xl font-black text-orange-400 ${a>0?"streak-flame":""}`,children:a}),r.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),r.jsxs("div",{className:"flex justify-between items-center mb-1 slide-in",style:{animationDelay:"0.2s"},children:[r.jsx("div",{className:`px-4 py-3 rounded-full bg-gradient-to-r ${C.color} text-white shadow-lg`,children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:C.emoji}),r.jsxs("div",{children:[r.jsx("div",{className:"font-bold text-sm",children:C.label}),r.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),r.jsx("div",{className:"relative",children:r.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[r.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[r.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),r.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),r.jsx("div",{className:"relative z-10",children:r.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),r.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[r.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[r.jsx("div",{className:"text-center mb-2",children:r.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),r.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),r.jsx("div",{className:"space-y-3",children:e.options.map((E,p)=>{const w=["A","B","C","D"],S=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let A="glass-card border border-white/10",_="";return c&&(p===e.correctIndex?(A="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",_="correct-bounce"):g===p&&!d&&(A="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",_="wrong-shake")),r.jsx("button",{onClick:()=>I(p),disabled:c,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${A} ${_} 
                  ${c?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+p*.05}s`},children:r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${S[p]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:w[p]}),r.jsx("span",{className:"flex-1 text-left font-medium text-white",children:E}),c&&p===e.correctIndex&&r.jsx("span",{className:"text-2xl",children:"✅"}),c&&g===p&&!d&&r.jsx("span",{className:"text-2xl",children:"❌"})]})},p)})}),c&&r.jsx("div",{className:"mt-6 text-center slide-in",children:r.jsx("p",{className:"text-sm font-medium text-white/70",children:d?C.motivationalText:"No worries! Keep trying! 💪"})}),f>0&&r.jsx("div",{className:"mt-4 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:r.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-xl",children:"🏁"}),r.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",f]})]})})})]}),k&&r.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:r.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),r.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),r.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})})]})}function _1({score:e,questionsAnswered:t,highScore:n,checkpoint:s,onRestart:a,onContinue:i,onBack:o}){const l=e>n,[c,d]=u.useState(!1),[f,m]=u.useState(0),[h,b]=u.useState(!1),g=u.useRef(null);u.useEffect(()=>{const v=e/60;let N=0;const C=setInterval(()=>{N+=v,N>=e?(m(e),clearInterval(C),l&&(d(!0),setTimeout(()=>d(!1),5e3))):m(Math.floor(N))},2e3/60);return setTimeout(()=>b(!0),2200),()=>clearInterval(C)},[e,l]),u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const k=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return r.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),r.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),r.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),c&&r.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((y,x)=>r.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:r.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},x))}),r.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[r.jsxs("div",{className:"mb-8 slide-up",children:[r.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&r.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:r.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"text-3xl",children:"🏆"}),r.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),r.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),h&&r.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:r.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${k.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[r.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:k.emoji}),r.jsx("h2",{className:"text-3xl font-black mb-2",children:k.title}),r.jsx("p",{className:"text-white/80 mb-4",children:k.subtitle}),r.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((y,x)=>r.jsx("span",{className:`text-2xl ${x<k.stars?"star-pop":""}`,style:{animationDelay:`${2.5+x*.1}s`},children:x<k.stars?"⭐":"☆"},x))})]})}),r.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[r.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[r.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),r.jsx("div",{ref:g,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:f}),r.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),r.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:r.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),r.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[r.jsx("div",{className:"text-4xl mb-2",children:"📊"}),r.jsx("div",{className:"text-4xl font-black text-white",children:t}),r.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),r.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:r.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(n,e)]})})]})]}),r.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:r.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),r.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&i&&r.jsx("button",{onClick:i,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:r.jsxs("div",{className:"flex items-center justify-center gap-3",children:[r.jsx("span",{className:"text-2xl",children:"🏁"}),r.jsxs("span",{children:["Continue from Question ",s]})]})}),r.jsx("button",{onClick:a,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:r.jsxs("div",{className:"flex items-center justify-center gap-3",children:[r.jsx("span",{className:"text-2xl",children:"🎮"}),r.jsx("span",{children:"Play Again"})]})}),r.jsx("button",{onClick:o,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:r.jsxs("div",{className:"flex items-center justify-center gap-3",children:[r.jsx("span",{className:"text-2xl",children:"🏠"}),r.jsx("span",{children:"Back to Games"})]})})]})]})]})}const Jf={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function I1({onBack:e,isFromQuest:t}){const{coins:n,xp:s,level:a,soundOn:i,setSoundOn:o}=il(),[l,c]=u.useState("playing"),[d,f]=u.useState(3),[m,h]=u.useState(0),[b,g]=u.useState(0),[j,k]=u.useState(0),[y,x]=u.useState("EASY"),[v,N]=u.useState([]),[C,I]=u.useState(null),[E,p]=u.useState(30),[w,S]=u.useState(!1),[A,_]=u.useState(!1),[F,q]=u.useState(0),[X,V]=u.useState(!1),H=u.useRef(null),O=u.useRef(new Set);u.useEffect(()=>(L(),Z(),window.history.pushState({mode:"survival"},"",window.location.href),()=>{H.current&&clearTimeout(H.current)}),[]),u.useEffect(()=>(l==="playing"&&C&&E>0&&!w&&(H.current=setTimeout(()=>{p(P=>P<=1?(G(),0):(P===6&&i&&J("/sounds/tick.mp3",.8),P-1))},1e3)),()=>{H.current&&clearTimeout(H.current)}),[l,C,E,w,i]),u.useEffect(()=>{const P=R(m);P!==y&&(x(P),i&&J("/sounds/levelup.mp3",.6))},[m,y,i]),u.useEffect(()=>{m>0&&m%10===0&&($(),q(m),i&&J("/sounds/checkpoint.mp3",.7))},[m,i]),u.useEffect(()=>{const P=te=>{te.preventDefault(),V(!0),window.history.pushState({mode:"survival"},"",window.location.href)};return window.addEventListener("popstate",P),()=>{window.removeEventListener("popstate",P)}},[]);const R=P=>P>=100?"LEGENDARY":P>=50?"EXPERT":P>=25?"HARD":P>=10?"MEDIUM":"EASY",L=async()=>{try{const te=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:ne}=Kr.parse(te,{header:!0,skipEmptyLines:!0,transformHeader:ue=>ue.trim().toLowerCase()}),oe=ne.map((ue,ye)=>{var Ge;const ve=[ue.option1,ue.option2,ue.option3,ue.option4].map(Se=>(Se||"").trim()).filter(Boolean);if(ve.length<4)return null;let _e={a:0,b:1,c:2,d:3}[(Ge=ue.answer)==null?void 0:Ge.toLowerCase()];return _e===void 0&&(_e=ve.findIndex(Se=>Se.toLowerCase()===(ue.answer||"").toLowerCase())),_e===-1&&(_e=0),{id:ue.id||`q_${ye}`,prompt:(ue.question||"").trim(),options:ve,correctIndex:_e,category:(ue.category||ue.subject||"general").trim(),difficulty:(ue.difficulty||"medium").toLowerCase()}}).filter(Boolean);N(oe),D(oe)}catch(P){console.error("Failed to load questions:",P)}},D=(P=v)=>{const te=P.filter(ye=>!O.current.has(ye.id));te.length===0&&(O.current.clear(),te.push(...P));const ne=y.toLowerCase();let oe=te.filter(ye=>ye.difficulty===ne||ye.difficulty==="medium");oe.length===0&&(oe=te);const ue=oe[Math.floor(Math.random()*oe.length)];ue&&(O.current.add(ue.id),I(ue),p(Jf[y].timer),S(!1))},T=P=>{if(w)return;const te=P===C.correctIndex;_(te),S(!0),te?M():U(),setTimeout(()=>{(d>0||te)&&(h(ne=>ne+1),D())},1500)},M=()=>{const P=Jf[y].points;k(te=>te+P),g(te=>{const ne=te+1;if(t){const oe=JSON.parse(localStorage.getItem("questProgress")||"{}");oe.winStreak=Math.max(oe.winStreak||0,ne),oe.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(oe)),ne>=5&&console.log("Win streak quest completed!")}return ne%5===0&&d<3&&(f(oe=>Math.min(oe+1,3)),i&&J("/sounds/lifeup.mp3",.8)),ne}),ce.addCoins(Math.floor(P/10),"Survival Mode - Correct Answer"),ce.addXP(1),i&&J("/sounds/correct.mp3",.7)},U=()=>{g(0),f(P=>{const te=P-1;return te<=0&&(c("gameOver"),z()),te}),i&&J("/sounds/wrong.mp3",.7),W([200])},G=()=>{U()},$=()=>{const P={questionCount:m,totalScore:j,lives:d,correctStreak:b,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(P))},Z=()=>{const P=localStorage.getItem("survival_checkpoint");if(P)try{const te=JSON.parse(P);Date.now()-te.timestamp<864e5?(h(te.questionCount),k(te.totalScore),f(te.lives),g(te.correctStreak),q(te.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(te){console.error("Failed to load checkpoint:",te)}},B=()=>{localStorage.removeItem("survival_checkpoint"),q(0)},z=()=>{const P=parseInt(localStorage.getItem("survival_highscore")||"0");j>P&&(localStorage.setItem("survival_highscore",j.toString()),localStorage.setItem("survival_highquestions",m.toString()))},ee=()=>{c("playing"),f(3),h(0),g(0),k(0),x("EASY"),O.current.clear(),B(),D()},Y=()=>{c("playing"),D()},Q=()=>{V(!0)},K=()=>{if(t){const P=JSON.parse(localStorage.getItem("questProgress")||"{}");P.winStreak=Math.max(P.winStreak||0,b),P.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(P)),window.location.href="/profile/quests"}else window.history.go(-1),e()},J=(P,te=.5)=>{try{const ne=new Audio(P);ne.volume=te,ne.play()}catch{}},W=P=>{navigator.vibrate&&navigator.vibrate(P)};return u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),l==="gameOver"?r.jsxs(r.Fragment,{children:[r.jsx(_1,{score:j,questionsAnswered:m,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:F,onRestart:ee,onContinue:F>0?Y:null,onBack:Q}),X&&r.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:r.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[r.jsxs("div",{className:"text-center mb-6",children:[r.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),r.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),r.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>V(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),r.jsx("button",{onClick:K,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):C?r.jsxs(r.Fragment,{children:[r.jsx(E1,{question:C,onAnswer:T,lives:d,questionCount:m,correctStreak:b,totalScore:j,currentDifficulty:y,timeLeft:E,showFeedback:w,lastAnswerCorrect:A,checkpoint:F,onBack:Q,soundOn:i,setSoundOn:o}),X&&r.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:r.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[r.jsxs("div",{className:"text-center mb-6",children:[r.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),r.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),r.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>V(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),r.jsx("button",{onClick:K,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]}):r.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:r.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const Fr=[{id:1,name:"Sandy Beach",emoji:"🏖️",theme:{background:"from-yellow-300 via-orange-300 to-blue-400",accent:"from-yellow-400 to-orange-400",cardBg:"from-amber-500/20 to-yellow-500/20",unlockGradient:"from-yellow-400 to-amber-500"},difficulty:"EASY",difficultyRange:{min:0,max:9},questionDifficulty:["easy"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:10,gemChance:.3,gemBonus:5,speedBonus:3,perfectBonus:50,treasurePiece:"🧩",completionCoins:30},description:"Start your adventure on the sunny shores! Easy questions to warm up.",unlockRequirement:null,visualElements:{bgEmojis:["🌊","🐚","🦀","⛱️","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","✨"]}},{id:2,name:"Jungle Cave",emoji:"🌴",theme:{background:"from-green-400 via-emerald-500 to-teal-600",accent:"from-green-500 to-emerald-600",cardBg:"from-green-500/20 to-emerald-500/20",unlockGradient:"from-green-400 to-emerald-500"},difficulty:"EASY-MEDIUM",difficultyRange:{min:10,max:24},questionDifficulty:["easy","medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:15,gemChance:.35,gemBonus:7,speedBonus:5,perfectBonus:75,treasurePiece:"🗝️",completionCoins:50},description:"Explore the mysterious jungle caves! Watch out for tricky vines!",unlockRequirement:{island:1,treasurePiece:!0},visualElements:{bgEmojis:["🌿","🦜","🐒","🦋","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🌟"]}},{id:3,name:"Crystal Mountain",emoji:"⛰️",theme:{background:"from-purple-400 via-pink-400 to-indigo-500",accent:"from-purple-500 to-pink-500",cardBg:"from-purple-500/20 to-pink-500/20",unlockGradient:"from-purple-400 to-pink-500"},difficulty:"MEDIUM",difficultyRange:{min:25,max:49},questionDifficulty:["medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:20,gemChance:.4,gemBonus:10,speedBonus:7,perfectBonus:100,treasurePiece:"💎",completionCoins:75},description:"Climb the sparkling crystal peaks! Medium challenges await!",unlockRequirement:{island:2,treasurePiece:!0},visualElements:{bgEmojis:["✨","🔮","⭐","🌟","💫"],diggingEmoji:"⚒️",foundEmojis:["💎","🪙","🌈"]}},{id:4,name:"Pirate Ship",emoji:"🏴‍☠️",theme:{background:"from-slate-600 via-blue-600 to-cyan-500",accent:"from-slate-700 to-blue-700",cardBg:"from-slate-500/20 to-blue-500/20",unlockGradient:"from-slate-500 to-blue-600"},difficulty:"MEDIUM-HARD",difficultyRange:{min:50,max:99},questionDifficulty:["medium","hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:30,gemChance:.45,gemBonus:15,speedBonus:10,perfectBonus:150,treasurePiece:"🗺️",completionCoins:100},description:"Ahoy matey! Navigate the pirate ship's challenging puzzles!",unlockRequirement:{island:3,treasurePiece:!0},visualElements:{bgEmojis:["⚓","🦜","💀","🌊","⛵"],diggingEmoji:"🗡️",foundEmojis:["💎","🪙","👑"]}},{id:5,name:"Volcano Peak",emoji:"🌋",theme:{background:"from-red-500 via-orange-500 to-yellow-500",accent:"from-red-600 to-orange-600",cardBg:"from-red-500/20 to-orange-500/20",unlockGradient:"from-red-500 to-orange-500"},difficulty:"HARD",difficultyRange:{min:100,max:1/0},questionDifficulty:["hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:50,gemChance:.5,gemBonus:25,speedBonus:15,perfectBonus:200,treasurePiece:"👑",completionCoins:150},description:"The ultimate challenge! Can you conquer the volcano?",unlockRequirement:{island:4,treasurePiece:!0},visualElements:{bgEmojis:["🔥","🌋","💥","⚡","🔴"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🏆"]}}],Oe={SHOVELS_PER_ISLAND:3,QUESTIONS_PER_ISLAND:3,SPEED_BONUS_THRESHOLD:5,MIN_CORRECT_FOR_TREASURE:2,FINAL_TREASURE_REWARD:200,FINAL_TREASURE_TITLE:"Treasure Master",DIGGING_ANIMATION_DURATION:1500,REWARD_DISPLAY_DURATION:2e3,TRANSITION_DURATION:500,STORAGE_KEYS:{PROGRESS:"treasureHunt_progress",STATS:"treasureHunt_stats",UNLOCKED_ISLANDS:"treasureHunt_unlocked",COMPLETED_ISLANDS:"treasureHunt_completed",TREASURE_PIECES:"treasureHunt_pieces"},SOUNDS:{DIG:"/sounds/dig.mp3",TREASURE_FOUND:"/sounds/treasure.mp3",GEM_FOUND:"/sounds/gem.mp3",WRONG:"/sounds/wrong.mp3",ISLAND_COMPLETE:"/sounds/islandcomplete.mp3",ISLAND_UNLOCK:"/sounds/unlock.mp3",FINAL_TREASURE:"/sounds/victory.mp3",TICK:"/sounds/tick.mp3",SHOVEL_BREAK:"/sounds/break.mp3"}},Cn=e=>Fr.find(t=>t.id===e),T1=(e,t)=>{const n=Cn(e);if(!n.unlockRequirement)return!0;const s=t[n.unlockRequirement.island];return s&&s.treasurePiece},P1=(e,t)=>{const n={0:["Keep trying! You'll get it! 💪","Don't give up! Adventure awaits! 🌟","Practice makes perfect! 🎯"],1:["Good effort! Almost there! 🌈","Nice try! Keep going! ⭐","You're learning fast! 🚀"],2:["Awesome! You found treasure! 🏆","Great job, explorer! 🎉","You're amazing! ✨"],3:["PERFECT! You're a champion! 👑","INCREDIBLE! Master explorer! 🌟","LEGENDARY performance! 🏆"]},s=n[e]||n[0];return s[Math.floor(Math.random()*s.length)]},R1=e=>Fr.map(t=>{var n;return{id:t.id,piece:t.rewards.treasurePiece,collected:((n=e[t.id])==null?void 0:n.treasurePiece)||!1}});function A1({islands:e,islandProgress:t,onSelectIsland:n,onBack:s,soundOn:a,setSoundOn:i,totalStats:o}){const[l,c]=u.useState(!1),d=R1(t),f=d.filter(h=>h.collected).length,m=Math.round(f/e.length*100);return u.useEffect(()=>(document.body.style.position="fixed",document.body.style.overflow="hidden",document.body.style.width="100%",document.body.style.height="100%",()=>{document.body.style.position="",document.body.style.overflow="",document.body.style.width="",document.body.style.height=""}),[]),r.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 overflow-hidden flex flex-col",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:"absolute inset-0",children:[r.jsx("div",{className:"absolute top-10 cloud-drift",style:{animationDelay:"0s"},children:r.jsx("div",{className:"text-6xl opacity-40",children:"☁️"})}),r.jsx("div",{className:"absolute top-12 cloud-drift",style:{animationDelay:"7s",animationDuration:"25s"},children:r.jsx("div",{className:"text-5xl opacity-40",children:"☁️"})}),r.jsx("div",{className:"absolute top-10 right-12",children:r.jsx("div",{className:"text-6xl pulse-animation opacity-80",children:"☀️"})}),r.jsx("div",{className:"absolute top-16 left-20 float-animation opacity-60",children:r.jsx("div",{className:"text-2xl",children:"🦜"})})]}),r.jsxs("div",{className:"relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[r.jsxs("div",{className:"flex justify-between items-center mb-3",children:[r.jsx("button",{onClick:s,className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:r.jsx("span",{className:"text-xl",children:"⬅"})}),r.jsx("div",{className:"glass-card rounded-2xl px-3 py-2 shadow-lg",children:r.jsxs("div",{className:"text-white font-bold text-center",children:[r.jsx("div",{className:"text-[10px] opacity-90",children:"TREASURE HUNT"}),r.jsx("div",{className:"text-sm",children:"🏝️ Island Explorer 🏝️"})]})}),r.jsx("button",{onClick:()=>i(!a),className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:r.jsx("span",{className:"text-xl",children:a?"🔊":"🔇"})})]}),r.jsxs("div",{className:"glass-card rounded-2xl p-3 shadow-xl mt-2",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-white font-bold text-sm",children:"Adventure Progress"}),r.jsxs("span",{className:"text-white font-bold text-sm",children:[m,"%"]})]}),r.jsx("div",{className:"w-full h-2.5 bg-white/20 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000",style:{width:`${m}%`}})}),r.jsx("button",{onClick:()=>c(!0),className:"mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-center gap-2",children:[r.jsx("span",{children:"🏆"}),r.jsxs("span",{children:["Treasure Pieces: ",f,"/5"]}),r.jsx("span",{children:"🏆"})]})})]})]}),r.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-4",children:r.jsxs("div",{className:"w-full max-w-md",children:[r.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.slice(0,4).map(h=>{const b=t[h.id],g=b==null?void 0:b.unlocked,j=b==null?void 0:b.treasurePiece,k=b==null?void 0:b.perfectScore;return r.jsxs("button",{onClick:()=>n(h.id),disabled:!g,className:`relative aspect-square rounded-2xl transition-all ${g?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[r.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${g?h.theme.background:"from-gray-400 to-gray-500"}`,children:g&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),r.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]})}),!g&&r.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:r.jsx("div",{className:"text-4xl",children:"🔒"})}),r.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[r.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:r.jsx("span",{className:"text-white font-bold text-sm",children:h.id})}),k&&r.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),r.jsx("div",{className:`text-5xl mb-1 ${g?"bounce-animation":""}`,children:g?h.emoji:"❓"}),r.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:h.name}),r.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${g?"bg-white/30":"bg-black/30"} text-white`,children:h.difficulty}),j&&r.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:h.rewards.treasurePiece}),(b==null?void 0:b.attempts)>0&&r.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[r.jsxs("span",{children:[b.bestScore,"/3"]}),r.jsx("span",{children:"⭐"})]})]})]},h.id)})}),r.jsx("div",{className:"flex justify-center mt-3",children:e.slice(4,5).map(h=>{const b=t[h.id],g=b==null?void 0:b.unlocked,j=b==null?void 0:b.treasurePiece,k=b==null?void 0:b.perfectScore;return r.jsxs("button",{onClick:()=>n(h.id),disabled:!g,className:`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${g?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[r.jsxs("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${g?h.theme.background:"from-gray-400 to-gray-500"}`,children:[g&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),r.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]}),!g&&r.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse"})]}),!g&&r.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:r.jsx("div",{className:"text-4xl",children:"🔒"})}),r.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[r.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:r.jsx("span",{className:"text-white font-bold text-sm",children:h.id})}),k&&r.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),r.jsx("div",{className:`text-5xl mb-1 ${g?"bounce-animation":""}`,children:g?h.emoji:"👑"}),r.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:h.name}),r.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${g?"bg-white/30":"bg-black/30"} text-white`,children:h.difficulty}),j&&r.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:h.rewards.treasurePiece}),(b==null?void 0:b.attempts)>0&&r.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[r.jsxs("span",{children:[b.bestScore,"/3"]}),r.jsx("span",{children:"⭐"})]})]})]},h.id)})})]})}),r.jsx("div",{className:"relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+3rem)]",children:r.jsx("div",{className:"bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20",children:r.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💰"}),r.jsx("div",{className:"text-yellow-300 font-black text-lg",children:o.totalCoinsEarned}),r.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Total Coins"})]}),r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💎"}),r.jsx("div",{className:"text-cyan-300 font-black text-lg",children:o.totalGemsFound}),r.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Gems Found"})]}),r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"📝"}),r.jsxs("div",{className:"text-green-300 font-black text-lg",children:[o.totalCorrectAnswers,"/",o.totalQuestionsAnswered]}),r.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Correct"})]})]})})}),l&&r.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:r.jsxs("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl",children:[r.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-6",children:"🏆 Treasure Collection 🏆"}),r.jsx("div",{className:"flex justify-center gap-4 mb-6",children:d.map((h,b)=>r.jsx("div",{className:`text-5xl ${h.collected?"":"opacity-30 grayscale"}`,children:h.collected?h.piece:"❓"},h.id))}),r.jsx("div",{className:"text-center text-white mb-6",children:f===5?r.jsxs("div",{children:[r.jsx("p",{className:"text-lg font-bold mb-2",children:"🎉 COMPLETE! 🎉"}),r.jsx("p",{className:"text-sm opacity-90",children:"You're a true Treasure Master!"})]}):r.jsx("p",{className:"text-sm opacity-90",children:"Collect all 5 pieces to unlock the final treasure!"})}),r.jsx("button",{onClick:()=>c(!1),className:"w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors",children:"Close"})]})})]})}function D1({island:e,progress:t,onStart:n,onClose:s,soundOn:a}){const[i,o]=u.useState(!1);u.useEffect(()=>{o(!0)},[]),u.useEffect(()=>{const h=b=>{s()};return window.history.pushState({islandDetail:!0},"",window.location.pathname),window.addEventListener("popstate",h),()=>window.removeEventListener("popstate",h)},[s]);const l=(t==null?void 0:t.attempts)>0,c=t==null?void 0:t.treasurePiece;t==null||t.perfectScore;const d=(t==null?void 0:t.bestScore)||0,f=()=>{if(a){const h=new Audio("/sounds/start.mp3");h.volume=.5,h.play().catch(()=>{})}n()},m=h=>{const b=Math.floor(h/60),g=h%60;return`${b}:${g.toString().padStart(2,"0")}`};return r.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:`relative w-full max-w-sm bg-gradient-to-br ${e.theme.background} rounded-2xl shadow-2xl ${i?"slide-up":""}`,children:[r.jsx("div",{className:"relative p-4 pb-2",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-6xl mb-2 pulse-animation",children:e.emoji}),r.jsx("h2",{className:"text-2xl font-black text-white",children:e.name}),r.jsx("div",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2",children:r.jsxs("span",{className:"text-white font-bold text-sm",children:["Level ",e.id," • ",e.difficulty]})})]})}),r.jsxs("div",{className:"px-4 py-3 space-y-2",children:[r.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[r.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[r.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Time"}),r.jsx("div",{className:"text-white font-bold",children:m(e.timeLimit)})]}),r.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[r.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Questions"}),r.jsx("div",{className:"text-white font-bold",children:Oe.QUESTIONS_PER_ISLAND})]})]}),r.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:e.rewards.treasurePiece}),r.jsx("span",{className:"text-white font-medium",children:"To Win"})]}),r.jsxs("span",{className:"text-white font-bold",children:[e.requiredCorrect,"/3 Correct"]})]}),r.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:[r.jsx("div",{className:"text-white font-bold text-sm mb-2",children:"Rewards"}),r.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[r.jsxs("div",{children:[r.jsx("div",{className:"text-xl",children:"💰"}),r.jsx("div",{className:"text-white/70 text-xs",children:e.rewards.perCorrectAnswer})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-xl",children:"💎"}),r.jsxs("div",{className:"text-white/70 text-xs",children:[Math.round(e.rewards.gemChance*100),"%"]})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-xl",children:"⚡"}),r.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.speedBonus]})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-xl",children:"🏆"}),r.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.perfectBonus]})]})]})]}),l&&r.jsx("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((h,b)=>r.jsx("span",{className:"text-lg",children:b<d?"⭐":"☆"},b))}),r.jsxs("div",{className:"text-white text-sm",children:[r.jsxs("span",{className:"font-bold",children:[d,"/3"]})," • ",t.attempts," tries"]}),c&&r.jsx("div",{className:"text-2xl",children:e.rewards.treasurePiece})]})})]}),r.jsxs("div",{className:"p-4 pt-2 space-y-2",children:[r.jsx("button",{onClick:f,className:"w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:r.jsxs("span",{className:"flex items-center justify-center gap-2",children:[r.jsx("span",{className:"text-xl",children:"🏴‍☠️"}),r.jsx("span",{children:l?"Play Again":"Start Adventure"}),r.jsx("span",{className:"text-xl",children:"🏴‍☠️"})]})}),r.jsx("button",{onClick:s,className:"w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors",children:"Back to Map"})]})]})]})}function L1({shovelsRemaining:e,showBreak:t=!1}){const[n,s]=u.useState(!1),[a,i]=u.useState(e),o=3;return u.useEffect(()=>{e<a&&(s(!0),setTimeout(()=>s(!1),1e3)),i(e)},[e,a]),r.jsxs("div",{className:"inline-block",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsx("div",{className:"glass-badge rounded-xl px-4 py-2 shadow-lg",children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-gray-800 font-bold text-xs",children:"Shovels:"}),r.jsx("div",{className:"flex gap-2",children:[...Array(o)].map((l,c)=>{const d=c<e,f=n&&c===e;return r.jsxs("div",{className:"relative w-10 h-10 flex items-center justify-center",children:[r.jsx("div",{className:`
                    text-3xl transition-all duration-300
                    ${d?"shovel-pulse":""}
                    ${f?"shovel-break":""}
                    ${!d&&!f?"opacity-30 grayscale":""}
                  `,children:d||f?"⛏️":"🪦"}),f&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"absolute inset-0 pointer-events-none",children:r.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 40 40",children:[r.jsx("path",{d:"M20,10 L18,20 L22,30",stroke:"#ff4444",strokeWidth:"2",fill:"none",opacity:"0.8",className:"shovel-crack"}),r.jsx("path",{d:"M15,15 L20,20 L25,18",stroke:"#ff4444",strokeWidth:"1.5",fill:"none",opacity:"0.6",className:"shovel-crack",style:{animationDelay:"0.1s"}})]})}),r.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[r.jsx("span",{className:"absolute top-0 left-1/2 text-xs shovel-fall",children:"💔"}),r.jsx("span",{className:"absolute top-1/2 left-0 text-xs shovel-fall",style:{animationDelay:"0.2s"},children:"✨"}),r.jsx("span",{className:"absolute top-1/2 right-0 text-xs shovel-fall",style:{animationDelay:"0.3s"},children:"💥"})]})]}),r.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2",children:r.jsx("span",{className:`text-xs font-bold ${d?"text-blue-600":"text-white/30"}`,children:c+1})})]},c)})}),e===0&&r.jsx("span",{className:"text-red-400 text-sm font-bold animate-pulse ml-2",children:"No shovels left!"}),e===1&&r.jsx("span",{className:"text-red-500 text-sm font-bold ml-2",children:"Last chance!"})]})})]})}function O1({island:e,foundGem:t,onComplete:n}){const[s,a]=u.useState("digging"),[i,o]=u.useState(!1),[l,c]=u.useState(!1);return u.useEffect(()=>{(async()=>{await new Promise(f=>setTimeout(f,800)),a("revealing"),o(!0),t&&(await new Promise(f=>setTimeout(f,400)),c(!0)),await new Promise(f=>setTimeout(f,1e3)),a("complete"),await new Promise(f=>setTimeout(f,300)),n()})()},[t,n]),r.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),s==="digging"&&r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"text-8xl dig-animation",children:e.visualElements.diggingEmoji}),[...Array(8)].map((d,f)=>r.jsx("div",{className:"dirt-particle text-4xl",style:{"--fly-x":`${(Math.random()-.5)*200}px`,"--fly-y":`${-Math.random()*150-50}px`,left:"50%",top:"60%",animationDelay:`${f*.1}s`},children:"🟫"},f)),r.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2",children:r.jsx("div",{className:"text-6xl opacity-50",children:"💨"})})]}),s==="revealing"&&r.jsxs("div",{className:"relative",children:[i&&r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:r.jsx("div",{className:"w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect"})}),r.jsxs("div",{className:"relative flex items-center justify-center",children:[r.jsx("div",{className:"text-7xl treasure-reveal treasure-float",children:"💰"}),r.jsx("div",{className:"absolute text-5xl coin-spin",style:{left:"-30px"},children:"🪙"}),r.jsx("div",{className:"absolute text-5xl coin-spin",style:{right:"-30px",animationDelay:"0.5s"},children:"🪙"}),r.jsx("div",{className:"absolute text-4xl coin-spin",style:{top:"-30px",animationDelay:"1s"},children:"🪙"})]}),[...Array(6)].map((d,f)=>r.jsx("div",{className:"absolute text-3xl star-burst",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) rotate(${f*60}deg) translateY(-40px)`,animationDelay:`${f*.1}s`},children:"⭐"},f))]}),l&&r.jsxs("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2",children:[r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"text-6xl gem-sparkle",children:"💎"}),r.jsx("div",{className:"absolute -top-2 -left-2 text-2xl animate-pulse",children:"✨"}),r.jsx("div",{className:"absolute -top-2 -right-2 text-2xl animate-pulse",style:{animationDelay:"0.3s"},children:"✨"}),r.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse",style:{animationDelay:"0.6s"},children:"✨"})]}),r.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:r.jsx("span",{className:"text-cyan-300 font-black text-lg drop-shadow-lg",children:"RARE GEM!"})})]}),r.jsx("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2 text-center",children:r.jsx("div",{className:"text-white font-black text-2xl drop-shadow-lg",children:t?"AMAZING FIND!":"TREASURE FOUND!"})})]}),s==="complete"&&r.jsx("div",{className:"relative opacity-0 transition-opacity duration-300",children:r.jsx("div",{className:"text-7xl",children:"✅"})})]})}function M1({island:e,question:t,questionNumber:n,totalQuestions:s,shovelsRemaining:a,timeRemaining:i,coinsEarned:o,gemsFound:l,onAnswer:c,onQuit:d,soundOn:f,setSoundOn:m}){const[h,b]=u.useState(null),[g,j]=u.useState(!1),[k,y]=u.useState(!1),[x,v]=u.useState(!1),[N,C]=u.useState(!1),[I,E]=u.useState(!1),[p,w]=u.useState(!1),S=u.useRef(null);u.useEffect(()=>{b(null),j(!1),y(!1),v(!1),C(!1),w(!1)},[t]),u.useEffect(()=>{const X=V=>{V.stopImmediatePropagation(),I||(E(!0),window.history.pushState({questionScreen:!0},"",window.location.pathname))};return window.history.pushState({questionScreen:!0},"",window.location.pathname),window.addEventListener("popstate",X,!0),()=>window.removeEventListener("popstate",X,!0)},[I]);const A=X=>{const V=Math.floor(X/60),H=X%60;return`${V}:${H.toString().padStart(2,"0")}`},_=()=>i<=10?"critical":i<=30?"warning":"normal",F=X=>{if(p||g)return;b(X),w(!0);const V=X===t.correctIndex;y(V),setTimeout(()=>{if(j(!0),f)if(V){const H=new Audio("/sounds/dig.mp3");H.volume=.5,H.play().catch(()=>{})}else{const H=new Audio("/sounds/wrong.mp3");H.volume=.5,H.play().catch(()=>{})}V&&(v(!0),Math.random()<e.rewards.gemChance&&setTimeout(()=>{if(C(!0),f){const O=new Audio("/sounds/gem.mp3");O.volume=.6,O.play().catch(()=>{})}},800)),setTimeout(()=>{c(X)},V?2e3:1500)},300)},q=_();return r.jsxs("div",{className:`min-h-screen bg-gradient-to-br ${e.theme.background} relative overflow-hidden`,children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.visualElements.bgEmojis.map((X,V)=>r.jsx("div",{className:"absolute text-7xl opacity-10 float-animation",style:{top:`${20+V*15}%`,left:`${10+V*18}%`,animationDelay:`${V*.5}s`,animationDuration:`${3+V}s`},children:X},V))}),r.jsxs("div",{className:"relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]",children:[r.jsxs("div",{className:"flex justify-between items-center mb-3",children:[r.jsx("button",{onClick:()=>E(!0),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:r.jsx("span",{className:"text-xl",children:"⬅️"})}),r.jsx("div",{className:"glass-card rounded-xl px-3 py-1.5 shadow-lg",children:r.jsxs("div",{className:"flex items-center gap-1.5",children:[r.jsx("span",{className:"text-xl",children:e.emoji}),r.jsx("span",{className:"text-gray-800 font-bold text-sm",children:e.name})]})}),r.jsx("button",{onClick:()=>m(!f),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:r.jsx("span",{className:"text-xl",children:f?"🔊":"🔇"})})]}),r.jsxs("div",{className:"glass-card rounded-xl p-3 shadow-xl mb-3",children:[r.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:`text-xl font-black ${q==="critical"?"text-red-600 time-pulse-critical":q==="warning"?"text-orange-600":"text-gray-800"}`,children:A(i)}),r.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Time"})]}),r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"text-xl font-black text-gray-800",children:[n,"/",s]}),r.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Question"})]}),r.jsxs("div",{className:"text-center relative",children:[r.jsx("div",{className:"text-xl font-black text-orange-600",children:o}),r.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Coins"}),g&&k&&r.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:r.jsxs("span",{className:"text-orange-600 font-bold text-xs coin-float",children:["+",e.rewards.perCorrectAnswer]})})]}),r.jsxs("div",{className:"text-center relative",children:[r.jsx("div",{className:"text-xl font-black text-blue-600",children:l}),r.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Gems"}),N&&r.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:r.jsx("span",{className:"text-blue-600 text-xl gem-sparkle",children:"💎"})})]})]}),r.jsx("div",{className:"mt-2",children:r.jsx("div",{className:"w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar",style:{width:`${(n-1)/s*100}%`}})})})]}),r.jsx("div",{className:"flex justify-center mb-3 pt-2",children:r.jsx(L1,{shovelsRemaining:a,showBreak:g&&!k})})]}),r.jsxs("div",{className:"px-3 pt-8 slide-in",children:[r.jsxs("div",{ref:S,className:`glass-card rounded-2xl shadow-xl p-4 mb-4 ${g&&!k?"wrong-shake":""}`,children:[r.jsx("div",{className:"text-center mb-2",children:r.jsxs("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wider",children:["Question ",n]})}),r.jsx("h2",{className:"text-lg font-bold text-center text-gray-800 leading-relaxed",children:t.prompt})]}),r.jsx("div",{className:"space-y-2.5",children:t.options.map((X,V)=>{const H=["A","B","C","D"],O=h===V,R=V===t.correctIndex;let L="glass-card option-card",D="border border-gray-800/20";return g&&(R?(L+=" correct-pulse",D="border-2 border-green-500 bg-green-400/20"):O&&!k&&(L+=" wrong-shake",D="border-2 border-red-500 bg-red-400/20"),L+=" disabled"),r.jsx("button",{onClick:()=>F(V),disabled:p,className:`w-full p-3 rounded-xl shadow-lg ${L} ${D}`,children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${V===0?"from-blue-400 to-blue-500":V===1?"from-green-400 to-green-500":V===2?"from-yellow-400 to-yellow-500":"from-purple-400 to-purple-500"} text-white font-bold text-lg flex items-center justify-center shadow-md`,children:H[V]}),r.jsx("span",{className:"flex-1 text-left font-medium text-gray-800 text-sm",children:X}),g&&R&&r.jsx("span",{className:"text-2xl",children:"✅"}),g&&O&&!k&&r.jsx("span",{className:"text-2xl",children:"❌"})]})},V)})}),g&&r.jsx("div",{className:"mt-3 text-center slide-in",children:r.jsx("p",{className:"text-base font-bold text-gray-800",children:k?`Great job! Let's dig for treasure! ${e.visualElements.diggingEmoji}`:"Oops! Your shovel broke! Try the next question! 💪"})})]}),x&&r.jsx(O1,{island:e,foundGem:N,onComplete:()=>v(!1)}),I&&r.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:r.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[r.jsxs("div",{className:"text-center mb-6",children:[r.jsx("div",{className:"text-5xl mb-3",children:"🗺️"}),r.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the Island?"}),r.jsx("p",{className:"text-white/70",children:"Your progress won't be saved!"})]}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>E(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),r.jsx("button",{onClick:d,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Leave Island"})]})]})})]})}function z1({island:e,session:t,earnedTreasure:n,onRetry:s,onContinue:a,soundOn:i}){const[o,l]=u.useState(0),[c,d]=u.useState(!1),[f,m]=u.useState(!1),h=t.correctAnswers===Oe.QUESTIONS_PER_ISLAND,b=P1(t.correctAnswers,e.id);return u.useEffect(()=>{const g=t.coinsEarned,j=2e3,k=30,y=g/k;let x=0;const v=setInterval(()=>{x+=y,x>=g?(l(g),clearInterval(v),n&&setTimeout(()=>d(!0),500),setTimeout(()=>m(!0),n?1500:500)):l(Math.floor(x))},j/k);return()=>clearInterval(v)},[t.coinsEarned,n]),r.jsxs("div",{className:`fixed inset-0 bg-gradient-to-br ${e.theme.background} overflow-hidden flex flex-col`,children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsx("div",{className:"absolute inset-0 pointer-events-none",children:h&&[...Array(10)].map((g,j)=>r.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,fontSize:`${20+Math.random()*20}px`},children:["🎉","⭐","🎊","✨"][Math.floor(Math.random()*4)]},j))}),r.jsxs("div",{className:"relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4",children:[r.jsxs("div",{className:"mb-3 text-center slide-up",children:[r.jsx("h1",{className:"text-2xl font-black text-white mb-2",children:n?"TREASURE FOUND!":"ISLAND COMPLETE!"}),r.jsx("div",{className:"text-5xl bounce-animation",children:n?e.rewards.treasurePiece:"🏝️"})]}),r.jsxs("div",{className:"glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up",style:{animationDelay:"0.2s",background:"rgba(46, 46, 32, 0.25)"},children:[r.jsxs("div",{className:"text-center mb-2",children:[r.jsxs("div",{className:"text-3xl font-black text-white mb-1",children:[t.correctAnswers,"/",Oe.QUESTIONS_PER_ISLAND]}),r.jsx("div",{className:"text-white/80 font-medium",children:"Questions Correct"})]}),f&&r.jsx("div",{className:"flex justify-center gap-2 mb-2",children:[...Array(3)].map((g,j)=>r.jsx("div",{className:`text-3xl ${j<t.correctAnswers?"star-pop":""}`,style:{animationDelay:`${j*.2}s`},children:j<t.correctAnswers?"⭐":"☆"},j))}),c&&n&&r.jsxs("div",{className:"text-center mb-2",children:[r.jsx("div",{className:"text-5xl treasure-shine mb-1",children:e.rewards.treasurePiece}),r.jsx("div",{className:"text-white font-bold text-lg",children:"Treasure Piece Earned!"})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[r.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[r.jsx("div",{className:"text-4xl mb-1",children:"🪙"}),r.jsx("div",{className:"text-3xl font-black text-yellow-300",children:o}),r.jsx("div",{className:"text-white/70 text-sm",children:"Coins Earned"})]}),r.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[r.jsx("div",{className:"text-4xl mb-2",children:"💎"}),r.jsx("div",{className:"text-3xl font-black text-cyan-300",children:t.gemsFound}),r.jsx("div",{className:"text-white/70 text-sm",children:"Gems Found"})]})]}),r.jsx("div",{className:"text-center p-4 bg-white/10 rounded-1xl",children:r.jsx("p",{className:"text-white font-medium text-lg",children:b})}),h&&r.jsx("div",{className:"mt-4 text-center",children:r.jsx("div",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",children:r.jsx("span",{className:"text-white font-black text-lg",children:"💯 PERFECT SCORE! 💯"})})})]}),r.jsxs("div",{className:"space-y-3 w-full max-w-md slide-up",style:{animationDelay:"0.4s"},children:[!n&&r.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:r.jsxs("div",{className:"flex items-center justify-center gap-3",children:[r.jsx("span",{className:"text-2xl",children:"🔄"}),r.jsx("span",{children:"Try Again"})]})}),r.jsx("button",{onClick:a,className:"w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:r.jsxs("div",{className:"flex items-center justify-center gap-3",children:[r.jsx("span",{className:"text-2xl",children:"🗺️"}),r.jsx("span",{children:"Back to Map"})]})})]})]})]})}function F1({totalStats:e,onContinue:t,soundOn:n}){const[s,a]=u.useState(!1),[i,o]=u.useState(!1),[l,c]=u.useState(!1),[d,f]=u.useState(!1),[m,h]=u.useState(!1);return u.useEffect(()=>{(async()=>{await new Promise(g=>setTimeout(g,500)),a(!0),await new Promise(g=>setTimeout(g,1e3)),o(!0),h(!0),await new Promise(g=>setTimeout(g,800)),c(!0),await new Promise(g=>setTimeout(g,1e3)),f(!0)})()},[]),r.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),m&&r.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(15)].map((b,g)=>r.jsx("div",{className:"absolute firework",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animationDelay:`${Math.random()*2}s`,fontSize:`${40+Math.random()*40}px`},children:["✨","⭐","💫","🌟"][Math.floor(Math.random()*4)]},g))}),r.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((b,g)=>r.jsx("div",{className:"absolute coin-rain",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`,fontSize:`${20+Math.random()*20}px`},children:["🪙","💰","💎"][Math.floor(Math.random()*3)]},g))}),r.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6",children:[r.jsxs("div",{className:"text-center mb-8",children:[r.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"LEGENDARY!"}),r.jsx("div",{className:"text-8xl bounce-animation",children:"👑"})]}),s&&r.jsxs("div",{className:`relative mb-8 ${s?"chest-appear":""}`,children:[r.jsx("div",{className:`text-[150px] ${i?"chest-open":""}`,children:"📦"}),i&&r.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:Fr.map((b,g)=>r.jsx("div",{className:"absolute text-6xl float-animation treasure-glow",style:{transform:`rotate(${g*72}deg) translateY(-100px)`,animationDelay:`${g*.2}s`},children:b.rewards.treasurePiece},b.id))})]}),l&&r.jsxs("div",{className:"glass-card rounded-3xl p-6 max-w-md w-full mb-6",children:[r.jsx("h2",{className:"text-2xl font-black text-white text-center mb-6",children:"🏆 FINAL TREASURE UNLOCKED! 🏆"}),r.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-5xl mb-2",children:"💰"}),r.jsx("div",{className:"text-4xl font-black text-white",children:Oe.FINAL_TREASURE_REWARD}),r.jsx("div",{className:"text-white/90 font-medium",children:"Bonus Coins!"})]})}),r.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[r.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[r.jsx("div",{className:"text-3xl mb-1",children:"🏝️"}),r.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),r.jsx("div",{className:"text-white/70 text-xs",children:"Islands"})]}),r.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[r.jsx("div",{className:"text-3xl mb-1",children:"🧩"}),r.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),r.jsx("div",{className:"text-white/70 text-xs",children:"Treasures"})]}),r.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[r.jsx("div",{className:"text-3xl mb-1",children:"💰"}),r.jsx("div",{className:"text-2xl font-black text-yellow-300",children:e.totalCoinsEarned+Oe.FINAL_TREASURE_REWARD}),r.jsx("div",{className:"text-white/70 text-xs",children:"Total Coins"})]}),r.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[r.jsx("div",{className:"text-3xl mb-1",children:"💎"}),r.jsx("div",{className:"text-2xl font-black text-cyan-300",children:e.totalGemsFound}),r.jsx("div",{className:"text-white/70 text-xs",children:"Total Gems"})]})]}),d&&r.jsxs("div",{className:"text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl",children:[r.jsx("div",{className:"text-3xl mb-2",children:"🏆"}),r.jsx("div",{className:"text-xl font-black text-white title-shine",children:Oe.FINAL_TREASURE_TITLE}),r.jsx("div",{className:"text-white/90 text-sm mt-1",children:"New Title Unlocked!"})]})]}),l&&r.jsx("button",{onClick:t,className:"w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:r.jsxs("div",{className:"flex items-center justify-center gap-3",children:[r.jsx("span",{className:"text-2xl",children:"🎉"}),r.jsx("span",{children:"Complete Adventure"}),r.jsx("span",{className:"text-2xl",children:"🎉"})]})}),r.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(10)].map((b,g)=>r.jsx("div",{className:"absolute text-2xl sparkle-animation",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`},children:"✨"},g))})]})]})}function $1({onBack:e}){const{coins:t,xp:n,level:s,soundOn:a,setSoundOn:i}=il(),[o,l]=u.useState(!1),[c,d]=u.useState("map"),[f,m]=u.useState(null),[h,b]=u.useState([]),[g,j]=u.useState(()=>{const L=localStorage.getItem(Oe.STORAGE_KEYS.PROGRESS);if(L)try{return JSON.parse(L)}catch(D){console.error("Failed to load progress:",D)}return Fr.reduce((D,T)=>(D[T.id]={unlocked:T.id===1,completed:!1,treasurePiece:!1,perfectScore:!1,bestScore:0,attempts:0},D),{})}),[k,y]=u.useState({islandId:null,questions:[],currentQuestionIndex:0,shovelsRemaining:Oe.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:300,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:null}),[x,v]=u.useState(()=>{const L=localStorage.getItem(Oe.STORAGE_KEYS.STATS);if(L)try{return JSON.parse(L)}catch(D){console.error("Failed to load stats:",D)}return{totalCoinsEarned:0,totalGemsFound:0,totalTreasurePieces:0,totalQuestionsAnswered:0,totalCorrectAnswers:0,islandsCompleted:0,gameCompleted:!1}}),N=u.useRef(null),C=u.useRef(null);u.useEffect(()=>(I(),window.history.pushState({mode:"treasureHunt"},"",window.location.href),()=>{N.current&&clearInterval(N.current)}),[]),u.useEffect(()=>{localStorage.setItem(Oe.STORAGE_KEYS.PROGRESS,JSON.stringify(g))},[g]),u.useEffect(()=>{localStorage.setItem(Oe.STORAGE_KEYS.STATS,JSON.stringify(x))},[x]),u.useEffect(()=>(c==="playing"&&k.timeRemaining>0?N.current=setInterval(()=>{y(L=>{const D=L.timeRemaining-1;return D<=0?(A(),{...L,timeRemaining:0}):(D===30&&a&&H(Oe.SOUNDS.TICK,.6),{...L,timeRemaining:D})})},1e3):N.current&&clearInterval(N.current),()=>{N.current&&clearInterval(N.current)}),[c,k.timeRemaining,a]),u.useEffect(()=>{const L=D=>{D.preventDefault(),c==="map"&&!o?(l(!0),window.history.pushState({mode:"treasureHunt"},"",window.location.href)):c!=="map"&&(d("map"),m(null),window.history.pushState({mode:"treasureHunt"},"",window.location.href))};return window.addEventListener("popstate",L),()=>window.removeEventListener("popstate",L)},[c,o]);const I=async()=>{try{const D=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:T}=Kr.parse(D,{header:!0,skipEmptyLines:!0,transformHeader:U=>U.trim().toLowerCase()}),M=T.map((U,G)=>{var z;const $=[U.option1,U.option2,U.option3,U.option4].map(ee=>(ee||"").trim()).filter(Boolean);if($.length<4)return null;let B={a:0,b:1,c:2,d:3}[(z=U.answer)==null?void 0:z.toLowerCase()];return B===void 0&&(B=$.findIndex(ee=>ee.toLowerCase()===(U.answer||"").toLowerCase())),B===-1&&(B=0),{id:U.id||`q_${G}`,prompt:(U.question||"").trim(),options:$,correctIndex:B,category:(U.category||U.subject||"general").trim(),difficulty:(U.difficulty||"medium").toLowerCase()}}).filter(Boolean);b(M)}catch(L){console.error("Failed to load questions:",L)}},E=L=>{const D=Cn(L);if(!D||h.length===0)return[];let T=h.filter(U=>D.questionDifficulty.includes(U.difficulty));return T.length<Oe.QUESTIONS_PER_ISLAND&&(T=h),[...T].sort(()=>Math.random()-.5).slice(0,Oe.QUESTIONS_PER_ISLAND)},p=L=>{if(!T1(L,g)){a&&H("/sounds/locked.mp3",.5),O([100]);return}m(L),d("island-detail"),a&&H("/sounds/select.mp3",.5)},w=L=>{const D=Cn(L),T=E(L);y({islandId:L,questions:T,currentQuestionIndex:0,shovelsRemaining:Oe.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:D.timeLimit,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:Date.now()}),C.current=Date.now(),d("playing"),a&&H("/sounds/start.mp3",.6)},S=L=>{const D=k.questions[k.currentQuestionIndex],T=L===D.correctIndex,M=(Date.now()-C.current)/1e3;y(U=>{const G={...U,questionTimes:[...U.questionTimes,M]};if(T){const $=Cn(U.islandId);let Z=$.rewards.perCorrectAnswer;M<Oe.SPEED_BONUS_THRESHOLD&&(Z+=$.rewards.speedBonus),Math.random()<$.rewards.gemChance&&(Z+=$.rewards.gemBonus,G.gemsFound=U.gemsFound+1),G.correctAnswers=U.correctAnswers+1,G.coinsEarned=U.coinsEarned+Z}else G.wrongAnswers=U.wrongAnswers+1,G.shovelsRemaining=U.shovelsRemaining-1,O([200]);return G}),setTimeout(()=>{const U=k.currentQuestionIndex+1;k.shovelsRemaining===0&&!T||U>=Oe.QUESTIONS_PER_ISLAND?_():(y(G=>({...G,currentQuestionIndex:U})),C.current=Date.now())},T?2e3:1500)},A=()=>{_()},_=()=>{const L=Cn(k.islandId),D=k.correctAnswers>=L.requiredCorrect,T=k.correctAnswers===Oe.QUESTIONS_PER_ISLAND;let M=k.coinsEarned;T&&(M+=L.rewards.perfectBonus),D&&(M+=L.rewards.completionCoins),j(G=>{const $={...G},Z=$[k.islandId];if(Z.completed=!0,Z.attempts+=1,D&&!Z.treasurePiece){Z.treasurePiece=!0;const B=Fr.find(z=>z.id===k.islandId+1);B&&$[B.id]&&($[B.id].unlocked=!0,a&&setTimeout(()=>H(Oe.SOUNDS.ISLAND_UNLOCK,.7),2e3))}return T&&(Z.perfectScore=!0),Z.bestScore=Math.max(Z.bestScore||0,k.correctAnswers),$}),v(G=>({...G,totalCoinsEarned:G.totalCoinsEarned+M,totalGemsFound:G.totalGemsFound+k.gemsFound,totalTreasurePieces:G.totalTreasurePieces+(D&&!g[k.islandId].treasurePiece?1:0),totalQuestionsAnswered:G.totalQuestionsAnswered+(k.correctAnswers+k.wrongAnswers),totalCorrectAnswers:G.totalCorrectAnswers+k.correctAnswers,islandsCompleted:G.islandsCompleted+(g[k.islandId].completed?0:1)})),ce.addCoins(M,`Treasure Hunt - ${L.name} Island`),ce.addXP(k.correctAnswers),y(G=>({...G,coinsEarned:M})),a&&H(D?Oe.SOUNDS.TREASURE_FOUND:Oe.SOUNDS.ISLAND_COMPLETE,.7),Fr.every(G=>{var $;return(($=g[G.id])==null?void 0:$.treasurePiece)===!0})&&!x.gameCompleted?(v(G=>({...G,gameCompleted:!0})),setTimeout(()=>{d("final-treasure"),a&&H(Oe.SOUNDS.FINAL_TREASURE,.8)},3e3)):d("reward")},F=()=>{w(k.islandId)},q=()=>{d("map"),m(null)},X=()=>{ce.addCoins(Oe.FINAL_TREASURE_REWARD,"Treasure Hunt - Final Treasure"),ce.addXP(10),v(L=>({...L,totalCoinsEarned:L.totalCoinsEarned+Oe.FINAL_TREASURE_REWARD})),d("map")},V=()=>{window.history.go(-1),e()},H=(L,D=.5)=>{try{const T=new Audio(L);T.volume=D,T.play()}catch(T){console.error("Failed to play sound:",T)}},O=L=>{navigator.vibrate&&navigator.vibrate(L)};u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);let R=null;switch(c){case"map":R=r.jsx(A1,{islands:Fr,islandProgress:g,onSelectIsland:p,onBack:()=>l(!0),soundOn:a,setSoundOn:i,totalStats:x});break;case"island-detail":R=r.jsx(D1,{island:Cn(f),progress:g[f],onStart:()=>w(f),onClose:()=>d("map"),soundOn:a});break;case"playing":R=r.jsx(M1,{island:Cn(k.islandId),question:k.questions[k.currentQuestionIndex],questionNumber:k.currentQuestionIndex+1,totalQuestions:Oe.QUESTIONS_PER_ISLAND,shovelsRemaining:k.shovelsRemaining,timeRemaining:k.timeRemaining,coinsEarned:k.coinsEarned,gemsFound:k.gemsFound,onAnswer:S,onQuit:()=>d("map"),soundOn:a,setSoundOn:i});break;case"reward":R=r.jsx(z1,{island:Cn(k.islandId),session:k,earnedTreasure:k.correctAnswers>=Cn(k.islandId).requiredCorrect,onRetry:F,onContinue:q,soundOn:a});break;case"final-treasure":R=r.jsx(F1,{totalStats:x,onContinue:X,soundOn:a});break;default:R=null}return r.jsxs(r.Fragment,{children:[R,o&&r.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:r.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-white/10",children:[r.jsxs("div",{className:"text-center mb-6",children:[r.jsx("div",{className:"text-5xl mb-3",children:"🏝️"}),r.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave Treasure Hunt?"}),r.jsx("p",{className:"text-white/70",children:"Your island progress is saved!"})]}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>l(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),r.jsx("button",{onClick:V,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}const U1=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],I0=U1.slice(0,6),Vl=360/I0.length;function B1({onModeSelect:e,onNavigateHome:t}){return r.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden mt-12",children:r.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[r.jsx("header",{className:"flex items-center mb-8",children:r.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),r.jsxs("div",{className:"space-y-8",children:[r.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[r.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:r.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[I0.map((n,s)=>{const a=s*Vl,i=a+Vl,o=Vl>180?1:0,l=Math.PI*a/180,c=Math.PI*i/180,d=50+40*Math.cos(l),f=50-40*Math.sin(l),m=50+40*Math.cos(c),h=50-40*Math.sin(c);return r.jsx("path",{d:`M50,50 L${d},${f} A40,40 0 ${o} 0 ${m},${h} Z`,fill:n.color,stroke:"white",strokeWidth:"0.5"},s)}),r.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),r.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),r.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),r.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),r.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),r.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),r.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[r.jsx("div",{className:"text-2xl mb-2",children:"💀"}),r.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),r.jsxs("button",{onClick:()=>e("treasureHunt"),className:"aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[r.jsxs("div",{className:"absolute inset-0 opacity-20",children:[r.jsx("div",{className:"absolute top-2 right-2 text-4xl animate-pulse",children:"🏝️"}),r.jsx("div",{className:"absolute bottom-2 left-2 text-3xl animate-bounce",style:{animationDelay:"0.5s"},children:"⛏️"}),r.jsx("div",{className:"absolute top-1/2 right-4 text-2xl animate-pulse",style:{animationDelay:"1s"},children:"💎"})]}),r.jsx("div",{className:"text-2xl mb-2 relative z-10",children:"🏴‍☠️"}),r.jsx("h4",{className:"text-lg font-black text-white relative z-10",children:"TREASURE HUNT"}),r.jsx("div",{className:"absolute bottom-2 right-2",children:r.jsx("span",{className:"text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold",children:"NEW!"})})]}),r.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[r.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),r.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),r.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[r.jsx("div",{className:"text-2xl mb-2",children:"📱"}),r.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function W1(){const[e,t]=u.useState(null),n=ke(),s=tt();u.useEffect(()=>{const l=new URLSearchParams(s.search);l.get("mode")==="survival"&&l.get("from")==="quest"&&t("survival")},[s]);const a=l=>{if(l==="classic"){n("/play/classic",{state:{from:"play"}});return}else l==="survival"?t("survival"):l==="treasureHunt"&&t("treasureHunt")},i=()=>{n("/")},o=()=>{t(null)};if(e==="survival"){const c=new URLSearchParams(s.search).get("from")==="quest";return r.jsx(I1,{onBack:o,isFromQuest:c})}return e==="treasureHunt"?r.jsx($1,{onBack:o}):r.jsx(B1,{onModeSelect:a,onNavigateHome:i})}const H1=({session:e,mode:t,category:n,difficulty:s,timerConfig:a,onComplete:i,onQuit:o})=>{const l=ke(),[c,d]=u.useState(0),[f,m]=u.useState([]),[h,b]=u.useState([]),[g,j]=u.useState([]),[k,y]=u.useState(!1),[x,v]=u.useState(null),[N,C]=u.useState(Date.now()),[I,E]=u.useState(0),[p,w]=u.useState([]);u.useState(!1),u.useState(!1);const[S,A]=u.useState({}),[_,F]=u.useState({}),[q,X]=u.useState([]);u.useState(!0);const[V,H]=u.useState([]),[O,R]=u.useState(0),[L,D]=u.useState(0),[T,M]=u.useState(!1),[U,G]=u.useState(!1),[$,Z]=u.useState(""),[B,z]=u.useState(!1),[ee,Y]=u.useState(!1),[Q,K]=u.useState(!0),[J,W]=u.useState(!1),[P,te]=u.useState(0),[ne,oe]=u.useState(0),[ue,ye]=u.useState(0),[ve,ft]=u.useState(0),[_e,Ge]=u.useState(null),[Se,ze]=u.useState(0),wt=u.useRef(null),jt=u.useRef(null),Ae=t==="practice",We=f[c],Ve=fe=>{try{const me=new Audio(fe);me.volume=.6,me.play()}catch{console.log("Sound not available:",fe)}},Wt=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],Fe=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:Wt,Je=Fe[c]||Fe[0]||Wt[0],at=Fe.length;u.useEffect(()=>{const fe=ce.getCoins();ye(fe)},[]),u.useEffect(()=>{Fe.length>0&&(m(new Array(Fe.length).fill(null)),b(new Array(Fe.length).fill(!1)),X(new Array(Fe.length).fill(!1)),j(new Array(Fe.length).fill((a==null?void 0:a.seconds)||45)))},[Fe.length,a==null?void 0:a.seconds]);const Ot=()=>{const fe=new Date;return`${fe.getFullYear()}-${fe.getMonth()+1}-${fe.getDate()}`},Ht=()=>{Ae&&window.location.search.includes("from=quest")?l("/profile/quests",{state:{questCompleted:!0,questType:"practiceQuestions"}}):o()},Sn=u.useCallback((fe,me)=>{if(!Je||Ae&&q[c]||S[c]&&S[c].includes(fe))return;const pe=[...f];if(pe[c]=f[c]===fe?null:fe,m(pe),C(Date.now()),Ae&&!p.includes(c)&&pe[c]!==null){const ie=p.length+1;if(E(ie),w(de=>[...de,c]),window.location.search.includes("from=quest")){let de={};try{const Ee=localStorage.getItem("questProgress");Ee&&(de=JSON.parse(Ee))}catch(Ee){console.error("Error reading progress:",Ee)}const ge=de.practiceQuestions||0;de.practiceQuestions=Math.max(ge,ie),de.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(de)),console.log("Saved practice progress:",de.practiceQuestions),window.dispatchEvent(new CustomEvent("questProgressUpdate",{detail:{practiceQuestions:de.practiceQuestions}}))}}pe[c]!==null&&(K(!1),clearInterval(jt.current));const it=pe[c]===Je.answerIndex;if(it){const ie=ve+1;if(ft(ie),R(de=>de+1),D(0),Ae){te(ge=>ge+1);const de=2;oe(ge=>ge+de),ye(ge=>ge+de),Ve("/sounds/correct.mp3"),setTimeout(()=>Ve("/sounds/coin.mp3"),500),Y(!0),setTimeout(()=>Y(!1),2e3),Ge({type:"correct",stars:1,coins:2}),setTimeout(()=>Ge(null),2e3)}}else pe[c]!==null&&(ft(0),R(0),D(ie=>ie+1),Ae&&Ve("/sounds/wrong.mp3"));if(H(ie=>[...ie.slice(-2),it]),pe[c]!==null&&h[c]){const ie=[...h];ie[c]=!1,b(ie)}Ae&&pe[c]!==null&&(z(!0),X(ie=>{const de=[...ie];return de[c]=!0,de})),!Ae&&pe[c]!==null&&(clearTimeout(wt.current),wt.current=setTimeout(()=>{c<at-1?se():(M(!0),y(!0))},5e3))},[Je,Ae,q,c,f,h,at,ve,S,V,O,I,p]),Ws=()=>{C(Date.now()),c>0&&(clearInterval(jt.current),K(!1),d(fe=>fe-1),z(!1),Ae&&f[c-1]!==null&&setTimeout(()=>z(!0),100))},se=()=>{if(C(Date.now()),clearInterval(jt.current),We===null){const fe=[...h];fe[c]=!0,b(fe),ft(0)}K(!1),z(!1),c<at-1?(d(fe=>fe+1),Ae&&f[c+1]!==null?setTimeout(()=>z(!0),100):setTimeout(()=>K(!0),100)):M(!0)},he=()=>{C(Date.now());const fe=[...h];fe[c]=!0,b(fe),ft(0),se()},Ce=()=>{const fe=Fe.reduce((me,pe,it)=>me+(f[it]===pe.answerIndex?1:0),0);if(Ae&&window.location.search.includes("from=quest")){const me=f.filter(it=>it!==null).length,pe=JSON.parse(localStorage.getItem("questProgress")||"{}");pe.practiceQuestions=Math.min(me,15),pe.date=Ot(),localStorage.setItem("questProgress",JSON.stringify(pe)),console.log("Final practice progress saved:",pe.practiceQuestions)}if(Ae)i&&i({questions:Fe,answers:f,skipped:h,correct:fe,total:at,mode:t,category:n,difficulty:s,earnedStars:P,earnedCoins:ne,finalStreak:ve});else{const me=fe*10;ze(me),i&&i({questions:Fe,answers:f,skipped:h,correct:fe,total:at,mode:t,category:n,difficulty:s,earnedStars:0,earnedCoins:me,finalStreak:ve})}};u.useEffect(()=>{if(!(k||x!==null||T||!Q||f[c]!==null))return jt.current=setInterval(()=>{j(fe=>{const me=[...fe],pe=me[c];return pe<=1?(clearInterval(jt.current),c===at-1?(Date.now()-N>=5e3&&M(!0),me):(v(c),me)):(me[c]=pe-1,me)})},1e3),()=>clearInterval(jt.current)},[k,x,c,T,at,Q,f,N]),u.useEffect(()=>{f[c]===null&&!T&&!x?K(!0):K(!1)},[c,f,T,x]);const je=fe=>{const me=Math.floor(fe/60),pe=fe%60;return`${me}:${pe.toString().padStart(2,"0")}`},Qe=(c+1)/Fe.length*100,be=f.filter(fe=>fe!==null).length,Ke=h.filter(Boolean).length,Ie=g[c]||0;Fe.reduce((fe,me,pe)=>fe+(f[pe]===me.answerIndex?1:0),0);const Ze=Ae&&B&&We!==null;return r.jsxs("div",{className:"h-dvh bg-gray-900 text-white flex flex-col overflow-hidden pt-[env(safe-area-inset-top,0px)]",children:[_e&&r.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:r.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",_e.coins," Coins!"]})}),ee&&r.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((fe,me)=>r.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${me*150}ms`,animationDuration:"2s"},children:"🪙"},me))}),r.jsxs("div",{className:"bg-gray-900 flex-shrink-0 pt-10",children:[r.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-800 shadow-lg",children:[r.jsxs("button",{onClick:()=>G(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),r.jsx("span",{className:"font-medium",children:"Back"})]}),r.jsx("div",{className:"flex-1"}),r.jsxs("div",{className:"flex items-center gap-2",children:[Ae&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[r.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),r.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:ue})]}),r.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[r.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),r.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:ve})]})]}),r.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${Ie<=10?"bg-red-600/20 text-red-400 animate-pulse":Ie<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:je(Ie)})]})]}),r.jsxs("div",{className:"px-4 pb-1 bg-gray-900",children:[r.jsxs("div",{className:"flex justify-between items-center mb-1",children:[r.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",c+1," of ",at]}),r.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(Qe),"% Complete"]})]}),r.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${Qe}%`}})}),r.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:at}).map((fe,me)=>r.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${me===c?"bg-white scale-125":f[me]!==null?"bg-green-500":h[me]?"bg-yellow-500":"bg-gray-600"}`},me))}),r.jsx("div",{className:"text-center mt-4",children:r.jsx("span",{className:"text-xs text-gray-500",children:Je.category})})]})]}),r.jsx("div",{className:`flex-1 flex flex-col ${Ze?"overflow-y-auto":"overflow-hidden"}`,children:r.jsxs("div",{className:"px-4 py-4 flex-1 flex flex-col",children:[r.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-4 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[r.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),r.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),r.jsxs("div",{className:"relative text-center",children:[r.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",c+1]}),r.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:Je.prompt}),Je.difficulty&&r.jsx("div",{className:"mt-3 inline-block",children:r.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${Je.difficulty==="easy"?"bg-green-500/20 text-green-300":Je.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Je.difficulty.toUpperCase()})})]})]}),r.jsx("div",{className:"grid grid-cols-1 gap-3 mb-4",children:Je.options.map((fe,me)=>{const pe=We===me,it=me===Je.answerIndex,ie=Ae&&We!==null&&B,de=S[c]&&S[c].includes(me);let ge="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";de?ge+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(ge+="cursor-pointer ",ie?pe&&it?ge+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":pe&&!it?ge+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!pe&&it?ge+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":ge+="bg-gray-700 border-gray-600 text-gray-400":pe?ge+="bg-gray-600 border-gray-500 text-white":ge+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const Ee=["🅰️","🅱️","🅲️","🅳️"];return r.jsx("button",{onClick:Ne=>Sn(me,Ne),disabled:Ae&&q[c],className:ge,children:r.jsxs("div",{className:"flex items-center gap-2 w-full",children:[r.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:Ee[me]}),r.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:fe}),_[c]&&_[c][me]>0&&!de&&r.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[_[c][me],"%"]}),ie&&pe&&it&&!de&&r.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),ie&&pe&&!it&&!de&&r.jsx("div",{className:"text-lg",children:"😔"}),ie&&!pe&&it&&!de&&r.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},me)})}),Ae&&B&&We!==null&&r.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-4 border border-gray-700",children:r.jsxs("div",{className:"flex gap-3",children:[r.jsx("div",{className:"text-lg flex-shrink-0",children:We===Je.answerIndex?"🎊":"💡"}),r.jsxs("div",{className:"flex-1",children:[r.jsx("h4",{className:`font-semibold mb-3 text-sm ${We===Je.answerIndex?"text-green-400":"text-blue-400"}`,children:We===Je.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),Je.explanation&&r.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:Je.explanation})]})]})}),r.jsx("div",{className:"h-[200px]"})]})}),r.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-50",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 backdrop-blur-xl"}),r.jsxs("div",{className:"relative p-4 pb-8",children:[r.jsxs("div",{className:"flex gap-2 mb-3",children:[r.jsx("button",{onClick:Ws,disabled:c===0,className:`flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                disabled:opacity-30 disabled:cursor-not-allowed
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                hover:bg-white/15 text-white shadow-xl`,children:"Previous"}),r.jsx("button",{onClick:he,disabled:We!==null,className:`flex-1 py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95 shadow-xl ${We!==null?"bg-white/5 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600"}`,children:"Skip"}),r.jsx("button",{onClick:se,className:`flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:from-blue-600 hover:to-indigo-600
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                text-white shadow-xl`,children:c===at-1?"Finish":"Next"})]}),r.jsxs("button",{onClick:()=>M(!0),className:`w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-600
              py-4 rounded-2xl font-bold text-white transition-all transform active:scale-[0.98]
              shadow-2xl shadow-green-500/25 relative overflow-hidden group`,children:[r.jsx("div",{className:"absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"}),r.jsx("span",{className:"relative",children:"Submit Quiz"})]})]})]}),U&&r.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[r.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),r.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),r.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>G(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),r.jsx("button",{onClick:Ht,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),T&&!J&&r.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[r.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),r.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),r.jsxs("p",{className:"text-gray-400 mb-4",children:[be," of ",at," answered • ",Ke," skipped"]}),Ae&&r.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:r.jsxs("div",{className:"flex justify-center gap-6",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),r.jsx("div",{className:"text-yellow-400 font-bold",children:P}),r.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),r.jsx("div",{className:"text-yellow-400 font-bold",children:ne}),r.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>{M(!1),v(null),C(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),r.jsx("button",{onClick:fe=>{fe.preventDefault(),fe.stopPropagation(),console.log("Submit button clicked"),Ce()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),x===c&&!T&&r.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[r.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),r.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),r.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),r.jsx("button",{onClick:()=>{v(null),C(Date.now()),c<Fe.length-1?se():M(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:c<Fe.length-1?"Continue":"See Results"})]})}),$&&r.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:$}),r.jsx("style",{jsx:!0,children:`
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
      `})]})},Zs=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],q1=()=>r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),Y1=()=>r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),G1=()=>r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),V1=()=>r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Q1=()=>r.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),K1=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[],returnPath:null,fromQuest:!1},onRetake:t=()=>{},onReview:n=()=>{},onNavigate:s=(c,d)=>{},isRetake:a=!1,isPractice:i=!1,player:o={level:1,coins:0,combo:0,energy:5},categories:l=[]})=>{const[c,d]=u.useState(ce.getCoins()),f=u.useRef(null),[m,h]=u.useState(null),[b]=st("/sounds/coin.mp3",{volume:.75}),[g,j]=u.useState(!1),[k,y]=u.useState(!1),[x,v]=u.useState(0),[N,C]=u.useState(!1),[I,E]=u.useState(!1),p=()=>{if(console.log("QuizResults handleBack:",{fromQuest:e.fromQuest,returnPath:e.returnPath,isPractice:e.isPractice||i}),e.fromQuest){const z=e.isPractice||i?"practiceQuestions":"dailyQuizzes";e.isPractice||i?s("/profile/quests"):s("/profile/quests",{state:{questCompleted:!0,questType:z,increment:1}})}else{const z=e.returnPath||"/";s(z)}},{correct:w,total:S,category:A,categorySlug:_,difficulty:F,mode:q,elapsedMs:X}=e,V=S?Math.round(w/S*100):0,H=V===100,O=V>=80,R=Math.floor(X/1e3),L=S>0?Math.floor(R/S):0,D=i?e.earnedCoins||0:Math.round(w*5*(H?1.5:O?1.2:1)),T=Zs.find(z=>z.slug===A)||Zs[0],U=(()=>H?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:V>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:V>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:V>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:V>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();u.useEffect(()=>{const z=ce.getCoins();d(z)},[]),u.useEffect(()=>{e.coinsProcessed||D>0&&f.current&&setTimeout(()=>{f.current.getBoundingClientRect();const z=new Audio("/sounds/coin.mp3");z.volume=.75,z.play().catch(ee=>{if(console.error("Audio play failed:",ee),b)try{b()}catch(Y){console.error("Hook play failed:",Y)}}),h({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(D,10),amount:D}),j(!0),e.coinsProcessed=!0},500)},[]),u.useEffect(()=>{document.documentElement.scrollIntoView({behavior:"smooth",block:"start"}),(H||O)&&(y(!0),setTimeout(()=>y(!1),3e3));let z=0;const ee=w/20,Y=setInterval(()=>{z+=ee,z>=w?(v(w),clearInterval(Y)):v(Math.floor(z))},50);return()=>clearInterval(Y)},[w,H,O]);const G=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:w,total:S}],$=()=>{try{const z=localStorage.getItem("qp_recent");if(z)return JSON.parse(z).slice(0,10).map(Y=>Y.slug||Y.cat).filter(Y=>Y&&Y!==e.categorySlug)}catch(z){console.error("Error reading recent categories:",z)}return[]},Z=()=>{const z=_||A,ee=F||"medium",Y=$(),Q=(l||Zs||[]).filter(W=>W.slug!==z&&!Y.slice(0,3).includes(W.slug)),J=(()=>{if(Q.length===0){const W=(l||Zs||[]).filter(P=>P.slug!==z);return W[Math.floor(Math.random()*W.length)]||(l||Zs)[0]}return Q[Math.floor(Math.random()*Q.length)]})();if(V<60)return i?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${z}`,{state:{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}}})},{icon:J.icon,title:J.name,desc:"Fresh start with new topic",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>n()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${z}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:ee!=="easy"?"🎯":"🔄",title:ee!=="easy"?"Easy Mode":"Try Again",desc:ee!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>ee!=="easy"?s(`/quiz/${z}`,{state:{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}}):t()},{icon:J.icon,title:J.name,desc:"Try something different",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})}];if(V>=80)return ee==="hard"&&V>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${z}`,{state:{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}}})},{icon:J.icon,title:`${J.name} Challenge`,desc:"Hard mode, new topic",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{state:{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{state:{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}}})}]:[{icon:ee==="hard"?"🔥":"🎯",title:ee==="hard"?"Perfect Score Challenge":"Hard Mode",desc:ee==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${z}`,{state:{mode:"quiz",difficulty:"hard",count:ee==="hard"?10:20,timer:{type:"per_q",seconds:30}}})},{icon:J.icon,title:J.name,desc:"Master new topics",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${z}`,{state:{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}}})}];{const W=V<70;return[{icon:W?"📚":"🎯",title:W?"Practice More":"Try Again",desc:W?"Improve accuracy":"Beat your score",color:W?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:W?()=>s(`/quiz/${z}`,{state:{mode:"practice",difficulty:ee,count:10,timer:{type:"off",seconds:0}}}):()=>t()},{icon:J.icon,title:J.name,desc:"Explore new topics",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{state:{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}}})},{icon:ee==="easy"?"⬆️":"💪",title:ee==="easy"?"Medium Difficulty":"More Questions",desc:ee==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${z}`,{state:{mode:"quiz",difficulty:ee==="easy"?"medium":ee,count:ee==="easy"?10:20,timer:{type:"per_q",seconds:45}}})}]}},B=It.useMemo(()=>Z(),[V,i,e.categorySlug,e.difficulty]);return r.jsx("div",{className:"h-screen overflow-y-auto bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white",children:r.jsxs("div",{className:"min-h-full p-4 pt-10",children:[m&&r.jsx(Sr,{startRect:m.startRect,targetRef:f,count:m.count,onDone:()=>{if(m.amount>0&&!I){console.log("[QuizResults] Updating display with current total"),E(!0);const z=ce.getCoins();d(z)}h(null)}}),r.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),k&&r.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:r.jsx("div",{className:"text-8xl animate-bounce",children:H?"🎉":"⭐"})}),r.jsxs("div",{className:"flex justify-between items-center mb-6 mt-1",children:[r.jsxs("button",{onClick:p,className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center gap-2",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),r.jsx("span",{className:"text-sm font-medium",children:"Back"})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",o.level]}),r.jsxs("button",{ref:f,onClick:()=>C(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[c," 🪙"]})]})]}),r.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),r.jsxs("div",{className:"relative text-center",children:[r.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${U.color}`,children:[r.jsx("span",{className:"text-2xl",children:U.emoji}),r.jsx("span",{className:"font-semibold",children:U.text})]}),r.jsxs("div",{className:"mb-6",children:[r.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[x,"/",S]}),r.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[r.jsx("span",{className:"text-xl",children:T.icon}),r.jsx("span",{children:T.name})]})]}),r.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"text-3xl font-bold",children:[V,"%"]}),r.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"text-3xl font-bold",children:[L,"s"]}),r.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:D>0?`+${D}`:"0"}),r.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),r.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(V1,{}),r.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),o.combo>0&&r.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[r.jsx(Q1,{}),o.combo," streak"]})]}),r.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:G.map((z,ee)=>r.jsx("div",{className:`flex-1 rounded-t transition-all ${ee===G.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${z.score/z.total*100}%`,minHeight:"4px"}},ee))}),r.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[r.jsxs("button",{onClick:n,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[r.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),r.jsxs("div",{className:"relative flex items-center justify-between",children:[r.jsxs("div",{className:"text-left",children:[r.jsx("div",{className:"font-semibold",children:"Review"}),r.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),r.jsx(G1,{})]})]}),r.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"text-left",children:[r.jsx("div",{className:"font-semibold",children:"Try Again"}),r.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),r.jsx(Y1,{})]})})]}),r.jsxs("div",{className:"space-y-3",children:[r.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),B.map((z,ee)=>r.jsx("button",{onClick:z.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${z.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:r.jsx("span",{className:"text-xl",children:z.icon})}),r.jsxs("div",{className:"text-left",children:[r.jsx("div",{className:"font-medium text-sm",children:z.title}),r.jsx("div",{className:"text-xs text-white/40",children:z.desc})]})]}),r.jsx(q1,{})]})},ee))]}),r.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:r.jsx("button",{onClick:()=>s("/profile/history",{state:{from:"results",returnToResults:!0}}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),N&&r.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:z=>{z.target===z.currentTarget&&C(!1)},children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:z=>z.stopPropagation(),children:[r.jsx("div",{className:"absolute inset-0 opacity-10",children:r.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),r.jsxs("div",{className:"relative",children:[r.jsxs("div",{className:"flex items-center justify-between mb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),r.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[c," Coins"]})]})]}),r.jsx("button",{onClick:()=>C(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),r.jsxs("div",{className:"mb-6",children:[r.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),r.jsxs("div",{className:"space-y-3",children:[r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),r.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),r.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),r.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),r.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),r.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),r.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),r.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),r.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),r.jsxs("div",{className:"mb-6",children:[r.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[r.jsx("span",{children:"Next reward"}),r.jsxs("span",{children:[100-o.coins%100," coins to go"]})]}),r.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${o.coins%100}%`}})})]}),r.jsx("button",{onClick:()=>{C(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})})},X1=({questions:e,answers:t,skipped:n,onBack:s,onRetake:a,fromHistory:i=!1})=>{const o=ke(),l=()=>{i?o("/profile/history",{replace:!0}):s?s():o(-1)},c=e.reduce((m,h,b)=>m+(t[b]===h.answerIndex?1:0),0),d=(n==null?void 0:n.filter(Boolean).length)||0,f=e.length-c-d;return r.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24 h-full overflow-y-auto",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4 pt-6",children:[r.jsx("button",{className:"px-3 py-1 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),r.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),r.jsx("div",{className:"w-16"})," "]}),r.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[r.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[r.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),r.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),r.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[r.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),r.jsx("div",{className:"text-lg font-bold text-red-400",children:f})]}),r.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[r.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),r.jsx("div",{className:"text-lg font-bold text-amber-400",children:d})]})]}),r.jsx("ol",{className:"space-y-4",children:e.map((m,h)=>{const b=t[h],g=!b&&b!==0,j=b===m.answerIndex;return r.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[r.jsxs("div",{className:"flex items-start justify-between mb-3",children:[r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",h+1,". ",m.prompt]}),m.category&&r.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",m.category," • Difficulty: ",m.difficulty||"Medium"]})]}),r.jsx("div",{className:"ml-2",children:g?r.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?r.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):r.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:m.options.map((k,y)=>{const x=b===y,v=y===m.answerIndex;let N="w-full text-left px-3 py-2 rounded-xl border transition-all ";return v?N+="bg-green-600/20 border-green-500/50 text-green-300":x&&!v?N+="bg-red-600/20 border-red-500/50 text-red-300":N+="bg-base-bg/40 border-base-border text-base-muted",r.jsxs("div",{className:N,children:[r.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][y],"."]}),k,v&&r.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),x&&!v&&r.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},y)})}),m.explanation&&r.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[r.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),r.jsx("div",{className:"text-sm text-base-muted",children:m.explanation})]})]},m.id||h)})}),r.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[r.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),a&&r.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:a,children:"Retake Quiz"})]})]})},J1="qp_resume",Zf="qp_mistakes",eh="qp_stats",th="qp_lastset",nh="qp_recent",rh="qp_review_snapshot",Z1=50,ea=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),eo=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),ew=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),T0=e=>{const t=e.slice();for(let n=t.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[t[n],t[s]]=[t[s],t[n]]}return t},tw=(e,t,n)=>Math.max(t,Math.min(n,e)),ta=(e,t)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}};async function nw(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const n=await t.text(),{data:s}=Kr.parse(n,{header:!0,skipEmptyLines:!0,transformHeader:i=>String(i).trim().toLowerCase()}),a={a:0,b:1,c:2,d:3};return s.map((i,o)=>{var h;const l=[i.option1,i.option2,i.option3,i.option4].map(b=>(b??"").trim());if(l.some(b=>!b))return null;let c=-1;const d=String(i.answer??"").trim();if(a[d.toLowerCase()]!==void 0)c=a[d.toLowerCase()];else{const b=l.findIndex(g=>g.toLowerCase()===d.toLowerCase());c=b>=0?b:0}const f=String(i.category??i.subject??"General Knowledge").trim(),m=String(i.difficulty??"medium").toLowerCase().trim();return{id:((h=i.id)==null?void 0:h.trim())||`q_${o}`,category:f,difficulty:m,prompt:String(i.question??"").trim(),options:l,answerIndex:c,explanation:String(i.explanation??"").trim()}}).filter(Boolean)}function rw(e,{categorySlug:t,difficulty:n,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",n),console.log("count:",s),console.log("Total questions available:",e.length);const i=t==="mixed"?()=>!0:f=>eo(f.category)===t,o=n?f=>(f.difficulty||"medium")===n:()=>!0,l=e.filter(f=>i(f)&&o(f));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(f=>`"${f.category}" -> "${eo(f.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(f=>eo(f.category)))]),{questions:[],poolSize:0};const d=ew(l,Math.min(s,l.length)).map(f=>{const m=T0([0,1,2,3]),h=m.map(g=>f.options[g]),b=m.indexOf(f.answerIndex);return{...f,options:h,answerIndex:b}});return console.log("Final questions:",d.length),{questions:d,poolSize:l.length}}function sw(){const e=ke(),{category:t}=qy(),n=tt(),{energy:s,useEnergy:a,player:i,updateDailyStreak:o}=qn(),l=new URLSearchParams(n.search),c=l.get("review")==="1",d=l.get("retake")==="1",f=n.state||{},m=f.mode||"quiz",h=String(f.difficulty||"medium").toLowerCase(),b=f.returnPath||null,g=f.fromQuest||!1,j=tw(Number(f.count||10),1,50),k=f.timer||{type:"per_q",seconds:45};f.resume,f.daily,f.source;const y=d||!!f.retake,x=!!f.fromHistory,v=m==="practice";console.log("Quiz Component - Mode Detection:",{routerState:f,mode:m,isPractice:v,location:n.pathname,state:n.state});const[N,C]=u.useState([]),[I,E]=u.useState(!0),[p,w]=u.useState(""),[S,A]=u.useState({questions:[]}),[_,F]=u.useState("quiz"),[q,X]=u.useState(null),[V,H]=u.useState(null),[O,R]=u.useState(0);u.useEffect(()=>{let $=!0;return(async()=>{try{const Z=await nw();if(!$)return;C(Z)}catch(Z){console.error(Z),w("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{E(!1)}})(),()=>{$=!1}},[]),u.useEffect(()=>{var $;if(($=n.state)!=null&&$.returnToResults){const Z=ce.getCurrentResults();Z&&(X(Z),F("results"),E(!1),A({questions:[]}))}},[n.state]),u.useEffect(()=>{var Z;if(I||p||c||(Z=n.state)!=null&&Z.returnToResults||N.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",m),console.log("Difficulty:",h),console.log("Count:",j);const $=rw(N,{categorySlug:t,difficulty:h,count:j});if($.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(N.map(B=>eo(B.category)))].slice(0,10)),w(`No questions found for "${ea(t)}" with difficulty "${h}"`);return}console.log("Session built with",$.questions.length,"questions"),F("quiz"),X(null),A($),H(Date.now()),R(0)},[N,t,m,h,j,n.pathname]),u.useEffect(()=>{if(_!=="quiz"||!V)return;const $=setInterval(()=>{R(Date.now()-V)},1e3);return()=>clearInterval($)},[_,V]);const L=u.useCallback($=>{if(console.log("Quiz completed - Mode:",m,"isPractice:",v,"Results:",$),console.log("handleQuizComplete called at:",new Date().toISOString()),window._quizCompleting){console.warn("Quiz completion already in progress, ignoring duplicate call");return}if(window._quizCompleting=!0,setTimeout(()=>{window._quizCompleting=!1},1e3),!$||!$.questions){console.error("Invalid results object:",$);return}const Z=$.questions.filter((Y,Q)=>$.answers[Q]!==null&&$.answers[Q]!==Y.answerIndex).map(Y=>Y.id);try{const Y=ta(Zf,[]),Q=Array.from(new Set([...Z,...Y]));localStorage.setItem(Zf,JSON.stringify(Q))}catch(Y){console.error("Error saving mistakes:",Y)}try{const Y=ta(eh,{sessions:[]});Y.sessions.push({cat:ea(t),mode:v?"practice":"quiz",total:$.total,correct:$.correct,skipped:$.skipped.filter(Boolean).length,ms:O,timestamp:Date.now(),earnedXP:v?0:$.correct*10,earnedCoins:v?0:$.correct*5}),localStorage.setItem(eh,JSON.stringify(Y))}catch(Y){console.error("Error saving stats:",Y)}const B={ts:Date.now(),slug:t,categoryLabel:ea(t),mode:v?"practice":"quiz",difficulty:h,total:$.total,timer:v?null:k,ms:O,attempted:$.answers.filter(Y=>Y!==null).length,correct:$.correct,questions:$.questions,answers:$.answers,skipped:$.skipped,isPractice:v};try{localStorage.setItem(th,JSON.stringify(B)),localStorage.setItem(rh,JSON.stringify({questions:$.questions,answers:$.answers,skipped:$.skipped}));const Y=ta(nh,[]),K=[{id:B.ts,ts:B.ts,cat:B.categoryLabel,slug:t,mode:v?"Practice":"Quiz",total:$.total,correct:$.correct,ms:O,snapshot:B},...Y].slice(0,Z1);localStorage.setItem(nh,JSON.stringify(K))}catch(Y){console.error("Error saving snapshot:",Y)}localStorage.removeItem(J1);const z=lt.getCurrentUser();if(z!=null&&z.phone)if(v){const Y=ce.recordPracticeSession(z.phone,{questionsCompleted:$.correct,correctAnswers:$.correct,category:t});$.earnedCoins=Y.coinsEarned}else{const Y=ce.recordQuizSession(z.phone,{score:$.correct,totalQuestions:$.total,category:t,difficulty:h,mode:"quiz"});$.earnedCoins=Y.coinsEarned}else $.earnedCoins=0;o(),console.log("Setting review snapshot with:",{returnPath:b||"/",fromQuest:g||!1});const ee={...$,category:ea(t),categorySlug:t,difficulty:h,mode:v?"practice":"quiz",elapsedMs:O,isPractice:v,hasTimer:!v,earnedXP:v?0:$.correct*10,earnedCoins:v?$.earnedCoins||0:$.correct*5,returnPath:b||"/",fromQuest:g||!1};ce.storeCurrentResults(ee),X(ee),F("results")},[t,m,k,O,v,b,g]),D=()=>{const $=new Date;return`${$.getFullYear()}-${$.getMonth()+1}-${$.getDate()}`};u.useCallback($=>{if(v&&g){const Z=JSON.parse(localStorage.getItem("questProgress")||"{}"),B=Z.practiceQuestions||0,z=Math.min(B+$,15);Z.practiceQuestions=z,Z.date=D(),localStorage.setItem("questProgress",JSON.stringify(Z)),console.log("Practice progress updated:",z)}},[v,g]);const T=u.useCallback(()=>{b?e(b,{replace:!0}):x?e("/profile/history",{replace:!0,state:null}):e("/")},[x,e,b]),M=u.useCallback(()=>{console.log("Retake requested - Mode:",m,"isPractice:",v);const $=ta(th,null);if(!$||$.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:v?"practice":"quiz",difficulty:h,count:j,timer:v?null:k,retake:!0}});return}const Z=$.questions.map(B=>{const z=T0([0,1,2,3]);return{...B,options:z.map(ee=>B.options[ee]),answerIndex:z.indexOf(B.answerIndex)}});A({questions:Z,poolSize:Z.length}),H(Date.now()),R(0),F("quiz"),window.scrollTo(0,0)},[t,m,h,j,k,e,v]),U=u.useCallback(($=null)=>{if($)X($);else if(!q){const Z=ta(rh,null);Z&&X({questions:Z.questions||[],answers:Z.answers||[],skipped:Z.skipped||[]})}F("review")},[q]),G=u.useCallback(()=>{x?e("/profile/history",{replace:!0}):F("results")},[x,e]);return I?r.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:r.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):p?r.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:r.jsx("div",{className:"text-sm text-red-400",children:p})}):(console.log("Render - Current view:",_,"Session questions:",S.questions.length,"Mode:",m,"isPractice:",v),r.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-hidden max-w-[100vw]",children:r.jsxs("div",{className:"h-full overflow-hidden px-0",children:[_==="quiz"&&S.questions.length>0&&r.jsx("div",{className:"h-full",children:r.jsx(H1,{session:S,mode:v?"practice":"quiz",category:ea(t),difficulty:h,timerConfig:v?null:k,onComplete:L,onQuit:T,isPractice:v})}),_==="results"&&q&&r.jsx(K1,{results:q,onRetake:M,onReview:()=>U(q),isRetake:y,isPractice:v,player:i,categories:E0,onNavigate:($,Z)=>{console.log("onNavigate called with:",$,Z),Z!=null&&Z.state?e($,{state:Z.state,replace:Z.replace||!1}):e($)}}),_==="review"&&q&&r.jsx(X1,{questions:q.questions||[],answers:q.answers||[],skipped:q.skipped||[],onBack:G,onRetake:M,fromHistory:x,isPractice:v})]})}))}const Xn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Pr=360/Xn.length,aw=42,Ql=3e3,sh=10,ah=260,iw="cubic-bezier(.15,.7,.1,1)",ow="cubic-bezier(.2,.7,.2,1)",Vn=5,lw=5,cw=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function dw({muted:e=!1,size:t=18}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[r.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),r.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&r.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function uw({q:e,locked:t,onPick:n,result:s}){if(!e)return null;const a=[e.option1,e.option2,e.option3,e.option4];return r.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[r.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),r.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),a.map((i,o)=>{const l=s&&i===e.answer,c=s&&s.pick===i&&i!==e.answer;return r.jsx("button",{disabled:t||!!s,onClick:()=>n(i),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:i},o)}),s&&r.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?r.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):r.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",r.jsx("b",{children:e.answer})]}),e.explanation&&r.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function fw(){const e=ke(),[t]=st("/sounds/correct.mp3",{volume:.7}),[n]=st("/sounds/wrong.mp3",{volume:.7}),[s,a]=u.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(Vn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(Vn).fill(null)}]),[i,o]=u.useState(0),[l,c]=u.useState(1),d=s.reduce((B,z)=>B+z.scores.reduce((ee,Y)=>ee+(Y??0),0),0),[f,m]=u.useState(!0),h=u.useRef(null);u.useEffect(()=>{const B=new Audio("/sounds/spin.mp3");return B.loop=!0,B.volume=.7,h.current=B,()=>{try{B.pause(),B.src=""}catch{}}},[]);const b=()=>{if(f&&h.current)try{h.current.currentTime=0,h.current.play()}catch{}},g=()=>{if(h.current)try{h.current.pause(),h.current.currentTime=0}catch{}},[j,k]=u.useState(0),[y,x]=u.useState("none"),[v,N]=u.useState(!1),[C,I]=u.useState(null),[E,p]=u.useState(null),w=u.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[S,A]=u.useState([]);u.useEffect(()=>{(async()=>{try{const B=await fetch("/data/quiz_questions_bank.csv").then(Q=>Q.text()),{data:z}=Kr.parse(B,{header:!0,skipEmptyLines:!0,transformHeader:Q=>String(Q).trim().toLowerCase()}),ee={a:0,b:1,c:2,d:3},Y=z.map((Q,K)=>{var oe;const J=(Q.question??"").trim();if(!J)return null;const W=[Q.option1,Q.option2,Q.option3,Q.option4].map(ue=>String(ue??"").trim());if(W.some(ue=>!ue))return null;let P=String(Q.answer??"").trim(),te=ee[P.toLowerCase()];if(te===void 0){const ue=W.findIndex(ye=>ye.toLowerCase()===P.toLowerCase());te=ue>=0?ue:0}const ne=W[te];return{id:((oe=Q.id)==null?void 0:oe.trim())||`ps_${K}`,question:J,option1:W[0],option2:W[1],option3:W[2],option4:W[3],answer:ne,explanation:String(Q.explanation??"").trim(),catSlug:cw(Q.category??Q.subject??"general knowledge"),difficulty:String(Q.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);A(Y)}catch{A([])}})()},[]);const[_,F]=u.useState(null),[q,X]=u.useState(null),[V,H]=u.useState(!1),O=B=>(B%360+360)%360,R=B=>O(B),L=l>Vn;function D(){if(s.length>=4)return;const B=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],z=B[(s.length*2+1)%B.length];a(ee=>[...ee,{name:`Player ${ee.length+1}`,color:z,scores:Array(Vn).fill(null)}])}function T(){s.length<=2||(a(B=>B.slice(0,-1)),o(B=>Math.min(B,s.length-2)))}function M(B){a(z=>z.map((ee,Y)=>Y===i?{...ee,scores:ee.scores.map((Q,K)=>K===l-1?B:Q)}:ee))}function U(){if(v||L)return;I(null),p(null),F(null),X(null),N(!0),b();const B=Math.floor(Math.random()*Xn.length),z=Xn[B],ee=Pr*.28,Y=(Math.random()*2-1)*ee,Q=O(j),K=180,W=B*Pr+Pr/2+Y;let P=R(W-Q-K);const te=aw*360+P,ne=j+te+sh;x(`transform ${w?800:Ql}ms ${iw}`),k(ne);try{navigator.vibrate&&!w&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{x(`transform ${w?160:ah}ms ${ow}`),k(oe=>oe-sh)},w?800:Ql),setTimeout(()=>{if(g(),N(!1),I(B),p(z.color),z.soon)return;const oe=S.filter(ye=>ye.catSlug===z.slug&&ye.difficulty==="easy"),ue=oe.length?oe:S.filter(ye=>ye.catSlug===z.slug);if(ue.length){const ye=ue[Math.floor(Math.random()*ue.length)];F(ye)}else F({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(w?800:Ql)+(w?160:ah)+40)}function G(B){if(!_||q)return;const z=B===_.answer;if(X({correct:z,pick:B}),z){t(),H(!0),setTimeout(()=>H(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}M(lw)}else{n();try{navigator.vibrate&&navigator.vibrate([4])}catch{}M(0)}}function $(){const B=(i+1)%s.length,z=B===0?l+1:l;o(B),c(z),I(null),p(null),F(null),X(null)}function Z(){const B=s.map(Y=>Y.scores.reduce((Q,K)=>Q+(K??0),0)),z=Math.max(...B),ee=s.filter((Y,Q)=>B[Q]===z).map(Y=>Y.name).join(", ");alert(`${ee} win${ee.includes(",")?"":"s"} the pot of ${d} coins! 🎉`),e("/play")}return r.jsxs("div",{className:"min-h-screen bg-black text-white",children:[V&&r.jsx(_0,{numberOfPieces:120,recycle:!1}),r.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[r.jsxs("header",{className:"flex items-center justify-between mb-4",children:[r.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),r.jsxs("div",{className:"text-center",children:[r.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),r.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),r.jsx("button",{onClick:()=>m(B=>!B),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":f?"Mute sound":"Unmute sound",title:f?"Sound on":"Sound off",children:r.jsx(dw,{muted:!f})})]}),r.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsxs("div",{className:"text-sm",children:["Round ",r.jsx("b",{children:Math.min(l,Vn)}),"/",r.jsx("b",{children:Vn})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("button",{onClick:D,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),r.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),r.jsx("button",{onClick:T,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),r.jsxs("div",{className:"text-sm",children:["Pot: ",r.jsx("b",{className:"text-yellow-300",children:d})," 🪙"]})]}),r.jsx("div",{className:"overflow-x-auto",children:r.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[r.jsxs("colgroup",{children:[r.jsx("col",{style:{width:"42%"}}),r.jsx("col",{style:{width:"9%"}}),r.jsx("col",{style:{width:"9%"}}),r.jsx("col",{style:{width:"9%"}}),r.jsx("col",{style:{width:"9%"}}),r.jsx("col",{style:{width:"9%"}}),r.jsx("col",{style:{width:"13%"}})]}),r.jsx("thead",{children:r.jsxs("tr",{className:"text-base-muted",children:[r.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:Vn}).map((B,z)=>r.jsxs("th",{className:"font-medium text-center",children:["R",z+1]},z)),r.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),r.jsx("tbody",{children:s.map((B,z)=>{const ee=B.scores.reduce((Q,K)=>Q+(K??0),0),Y=z===i;return r.jsxs("tr",{className:Y?"bg-white/6":"",children:[r.jsx("td",{className:"py-1 pr-1",children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:B.color}}),r.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:B.name,onChange:Q=>a(K=>K.map((J,W)=>W===z?{...J,name:Q.target.value}:J))})]})}),B.scores.map((Q,K)=>r.jsx("td",{className:"text-center",children:Q===null?"–":Q},K)),r.jsx("td",{className:"text-right pr-1 font-semibold",children:ee})]},z)})})]})})]}),r.jsx("section",{className:"flex flex-col items-center",children:r.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[E&&r.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${E}33, 0 0 30px 8px ${E}44`}}),r.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:y},"aria-label":"Category wheel",role:"group",children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Xn.map((B,z)=>{const ee=z*Pr,Y=ee+Pr,Q=Pr>180?1:0,K=Math.PI*ee/180,J=Math.PI*Y/180,W=50+50*Math.cos(K),P=50-50*Math.sin(K),te=50+50*Math.cos(J),ne=50-50*Math.sin(J),oe=C===z;return r.jsxs("g",{style:{opacity:C==null?.95:oe?1:.78,filter:C!=null&&!oe?"blur(0.6px)":"none"},children:[r.jsx("path",{d:`M50,50 L${W},${P} A50,50 0 ${Q} 0 ${te},${ne} Z`,fill:B.color,stroke:oe?`${B.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:oe?"1.2":"0.6"}),r.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${ee+Pr/2} 50 50) translate(12 0)`,children:r.jsxs("tspan",{children:[B.label,B.soon?" (soon)":""]})})]},B.slug)}),r.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),r.jsx("button",{onClick:U,disabled:v||L,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",v||L?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),r.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:r.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:r.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),C!=null&&!v&&r.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:r.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[r.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:Xn[C].color}}),Xn[C].label]})})]})}),r.jsx("section",{className:"mt-4",children:L?r.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[r.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),r.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",r.jsx("b",{className:"text-yellow-300",children:d})," coins."]}),r.jsx("button",{className:"btn-primary w-full",onClick:Z,children:"End match"})]}):C!=null&&Xn[C].soon?r.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[r.jsx("div",{className:"text-lg font-semibold mb-1",children:Xn[C].label}),r.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),r.jsx("button",{className:"btn-primary",onClick:U,disabled:v,children:"Re-spin"})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",r.jsx("span",{style:{color:s[i].color},children:s[i].name})," ","| Round ",l,"/",Vn]}),r.jsx(uw,{q:_,locked:v||!_,onPick:G,result:q}),q&&r.jsx("div",{className:"mt-3 flex justify-center",children:r.jsx("button",{className:"btn-primary",onClick:$,children:"Next turn"})})]})})]}),r.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const hw=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return r.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[r.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),r.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(n=>r.jsxs("button",{onClick:()=>e(n.id,n.title),className:`rounded-3xl bg-gradient-to-br ${n.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[r.jsx("span",{className:"text-5xl",children:n.emoji}),r.jsx("span",{className:"text-white font-bold text-lg text-center",children:n.title})]},n.id))})]})},mw=()=>{ke(),qn();const[e,t]=u.useState([]),[n,s]=u.useState(0),[a,i]=u.useState({}),[o,l]=u.useState(0),[c,d]=u.useState(5),[f,m]=u.useState(0),[h,b]=u.useState(!0),[g,j]=u.useState(null),[k,y]=u.useState(!0),[x,v]=u.useState(null),[N,C]=u.useState(""),[I,E]=u.useState(!1),[p,w]=u.useState(""),[S,A]=u.useState(!1),[_,F]=u.useState(!1),[q,X]=u.useState(!1),[V,H]=u.useState(!1),[O,R]=u.useState(!1),[L,D]=u.useState(!1),[T,M]=u.useState(0),[U,G]=u.useState(0),[$,Z]=u.useState(-1),[B,z]=u.useState(-1),[ee,Y]=u.useState({}),[Q,K]=u.useState({}),[J,W]=u.useState(ce.getCoins()),P=u.useRef(null),[te,ne]=u.useState(null),[oe,ue]=u.useState(!1),ye=u.useRef(null),ve=u.useRef(null),[ft]=st("/sounds/correct.mp3",{volume:.6}),[_e]=st("/sounds/wrong.mp3",{volume:.6}),[Ge]=st("/sounds/coin.mp3",{volume:.75}),Se=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],ze=()=>{t([]),s(0),i({}),l(0),d(5),m(0),b(!0),j(null),E(!1),w(""),A(!1),F(!1),X(!1),H(!1),R(!1),D(!1),M(0),G(0),Z(-1),z(-1),Y({}),K({}),v(null),C(""),jt(null),ue(!1)};u.useEffect(()=>(ze(),y(!0),()=>{document.body.classList.remove("hide-bottom-nav"),ze(),ve.current&&clearTimeout(ve.current)}),[]),u.useEffect(()=>{const se=he=>{!k&&e.length>0&&(he.preventDefault(),F(!0))};return!k&&e.length>0&&window.history.pushState({inQuiz:!0},"",window.location.pathname),window.addEventListener("popstate",se),()=>window.removeEventListener("popstate",se)},[k,e.length]),u.useEffect(()=>{!k&&e.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[k,e.length]),u.useEffect(()=>{!k&&e.length>0&&H(!0)},[k,e.length]);const[wt,jt]=u.useState(null);u.useEffect(()=>{const se=he=>{var Ce;if(V&&!q){const je=he.target.closest('button[type="button"]'),Qe=(Ce=je==null?void 0:je.querySelector(".text-\\[10px\\]"))==null?void 0:Ce.textContent;Qe&&["Home","Play","Profile","Swipe"].includes(Qe)&&(he.preventDefault(),he.stopPropagation(),jt({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[Qe]),F(!0))}};return document.addEventListener("click",se,!0),()=>document.removeEventListener("click",se,!0)},[V,q]),u.useEffect(()=>{const se=ye.current;if(!se)return;let he=!1,Ce=0,je=null;const Qe=Ze=>{!k&&e.length>0&&Ze.preventDefault()},be=Ze=>{Ce=Ze.touches[0].clientY,he=!1},Ke=Ze=>{!k&&e.length>0&&!_&&!S&&Ze.preventDefault()},Ie=Ze=>{if(he||_||S)return;const fe=Ze.changedTouches[0].clientY,me=Ce-fe;if(Math.abs(me)>30){if(he=!0,je&&clearTimeout(je),me>0&&n<e.length-1){const pe=n+1;s(pe),se.scrollTo({top:pe*window.innerHeight,behavior:"smooth"})}else if(me<0&&n>0){const pe=n-1;s(pe),se.scrollTo({top:pe*window.innerHeight,behavior:"smooth"})}je=setTimeout(()=>{he=!1},800)}};return se.addEventListener("touchstart",be,{passive:!1}),se.addEventListener("touchmove",Ke,{passive:!1}),se.addEventListener("touchend",Ie,{passive:!1}),se.addEventListener("wheel",Qe,{passive:!1}),()=>{se.removeEventListener("touchstart",be),se.removeEventListener("touchmove",Ke),se.removeEventListener("touchend",Ie),se.removeEventListener("wheel",Qe),je&&clearTimeout(je)}},[n,e.length,k]),u.useEffect(()=>{const se=ye.current;se&&(_||S?(se.style.overflow="hidden",se.style.touchAction="none"):(se.style.overflow="auto",se.style.touchAction="auto"))},[_,S]),u.useEffect(()=>{(_||S)&&ve.current&&(clearTimeout(ve.current),ve.current=null)},[_,S]);const Ae=async se=>{try{const Ce=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:je}=Kr.parse(Ce,{header:!0,skipEmptyLines:!0}),Ke=je.map((Ie,Ze)=>{var pe,it;const fe=[Ie.option1,Ie.option2,Ie.option3,Ie.option4].filter(Boolean),me={A:0,B:1,C:2,D:3};return{id:Ie.id||`q_${Ze}`,prompt:Ie.question,options:fe,answerIndex:me[(pe=Ie.answer)==null?void 0:pe.toUpperCase()]||0,category:Ie.category||"General Knowledge",difficulty:((it=Ie.difficulty)==null?void 0:it.toLowerCase())||"medium",explanation:Ie.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(Ie=>Ie.prompt&&Ie.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(Ie=>({...Ie,mascot:Se[Math.floor(Math.random()*Se.length)]}));t(Ke),b(!1)}catch(he){console.error("Failed to load questions:",he),b(!1)}},We=se=>se===1||se===3||se===7||se===10||se===15||se===20||se>20&&se%5===0,Ve=(se,he)=>{if(a[se]!==void 0)return;const Ce=e.find(be=>be.id===se),je=he===Ce.answerIndex,Qe=e.findIndex(be=>be.id===se);if(i(be=>({...be,[se]:he})),M(be=>be+1),G(be=>be+1),je){ft(),l(Ke=>Ke+1),m(Ke=>Ke+2),ce.addCoins(2,"Swipe Quiz Correct Answer");const be=ce.getCoins();if(W(be),D(!0),setTimeout(()=>{Ge(),console.log("Coin pill ref:",P.current),P.current?ne({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:2,amount:2}):console.log("Coin pill ref not available")},300),setTimeout(()=>D(!1),2e3),Wt(),We(Qe+1)){const Ke=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];w(Ke[Math.floor(Math.random()*Ke.length)]),E(!0),setTimeout(()=>E(!1),2e3)}}else if(_e(),l(0),R(!0),setTimeout(()=>R(!1),1500),d(be=>{const Ke=Math.max(0,be-1);return Ke===0&&setTimeout(()=>A(!0),500),Ke}),c>1&&We(Qe+1)){const be=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];w(be[Math.floor(Math.random()*be.length)]),E(!0),setTimeout(()=>E(!1),2e3)}(c>1||je)&&(ve.current=setTimeout(()=>{Fe()},2500))},Wt=()=>{const se=document.createElement("div");se.style.position="fixed",se.style.inset="0",se.style.pointerEvents="none",se.style.zIndex="1000",document.body.appendChild(se);const he=["🎉","✨","⭐","🎊","🌟"];for(let Ce=0;Ce<20;Ce++){const je=document.createElement("div");je.textContent=he[Math.floor(Math.random()*he.length)],je.style.position="fixed",je.style.left=`${Math.random()*100}%`,je.style.top="-50px",je.style.fontSize="24px",je.style.animation=`fall ${2+Math.random()*2}s ease-out`,se.appendChild(je)}setTimeout(()=>se.remove(),4e3)},Fe=()=>{if(!(_||S)&&n<e.length-1){const se=n+1,he=document.getElementById(`question-${se}`);he==null||he.scrollIntoView({behavior:"smooth"}),s(se)}},Je=se=>{const he=e.findIndex(be=>be.id===se);if($>=0&&T<5){j(`After ${5-T} attempts`),setTimeout(()=>j(null),2e3);return}const Ce=e[he],Qe=[0,1,2,3].filter(be=>be!==Ce.answerIndex).sort(()=>Math.random()-.5).slice(0,2);Y({...ee,[se]:Qe}),Z(he),M(0)},at=se=>{const he=e.findIndex(Ze=>Ze.id===se);if(B>=0&&U<5){j(`After ${5-U} attempts`),setTimeout(()=>j(null),2e3);return}const je=e[he].answerIndex,Qe=[0,0,0,0],be=40+Math.floor(Math.random()*31);Qe[je]=be;let Ke=100-be;const Ie=[0,1,2,3].filter(Ze=>Ze!==je);for(let Ze=0;Ze<Ie.length-1;Ze++){const fe=Math.floor(Math.random()*(Ke/2));Qe[Ie[Ze]]=fe,Ke-=fe}Qe[Ie[Ie.length-1]]=Ke,K({...Q,[se]:Qe}),z(he),G(0)},Ot=(se,he)=>{ze(),v(se),C(he),y(!1),Ae()},Ht=()=>{jt("/swipe"),F(!0)},Sn=()=>{X(!0),F(!1),document.body.classList.remove("hide-bottom-nav")},Ws=()=>{const se=Object.keys(a).filter(he=>{const Ce=e.find(je=>je.id===he);return a[he]===(Ce==null?void 0:Ce.answerIndex)}).length;return u.useEffect(()=>{const he=ce.getCoins();W(he)},[]),u.useEffect(()=>{document.body.classList.add("hide-bottom-nav"),f>0&&P.current&&!oe&&(ue(!0),setTimeout(()=>{ne({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(f,10),amount:f}),Ge()},100));const he=setTimeout(()=>{const Ce=ce.getCoins();W(Ce),ze(),H(!1),X(!1),y(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(he),document.body.classList.remove("hide-bottom-nav")}},[f,oe]),r.jsxs("div",{className:"fixed inset-0 bg-gray-900 z-50",children:[te&&r.jsx(Sr,{startRect:te.startRect,targetRef:P,count:te.count,onDone:()=>{ne(null)}}),r.jsx("div",{className:"fixed top-12 right-4 z-50",children:r.jsxs("div",{ref:P,className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1.5 rounded-full backdrop-blur",children:[r.jsx("span",{children:"🪙"}),r.jsx("span",{className:"font-bold text-yellow-400",children:J})]})}),r.jsx("div",{className:"flex items-center justify-center p-4 h-full",children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[r.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),r.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[r.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),r.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(a).length})]}),r.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[r.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),r.jsx("div",{className:"text-2xl font-bold text-green-400",children:se})]}),r.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[r.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),r.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",f]})]}),r.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[r.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),r.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(he,Ce)=>r.jsx("span",{className:Ce<c?"":"opacity-30",children:"❤️"},Ce))})]})]})]})})]})};return q?r.jsx(Ws,{}):k?r.jsx(hw,{onSelect:Ot}):h?r.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:r.jsx("div",{className:"text-white",children:"Loading questions..."})}):r.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[te&&r.jsx(Sr,{startRect:te.startRect,targetRef:P,count:te.count,onDone:()=>{const se=ce.getCoins();W(se),ne(null)}}),r.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[r.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[r.jsx("button",{onClick:Ht,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsxs("div",{ref:P,className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[r.jsx("span",{children:"🪙"}),r.jsx("span",{className:"font-bold text-yellow-400",children:J})]}),r.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[r.jsx("span",{children:"🔥"}),r.jsx("span",{className:"font-bold text-orange-400",children:o})]})]}),r.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(se,he)=>r.jsx("span",{className:`${he<c?"text-red-500":"text-gray-600 opacity-30"} ${O&&he===c-1?"animate-heartLoss":""}`,children:"❤️"},he))})]}),N&&r.jsx("div",{className:"text-center py-1",children:r.jsx("span",{className:"text-xs text-gray-400",children:N})})]}),L&&r.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-none",children:r.jsx("div",{className:"bg-yellow-500 text-white px-6 py-3 rounded-full font-bold text-2xl animate-coinFloat",children:"+2 🪙"})}),r.jsx("div",{ref:ye,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:e.map((se,he)=>r.jsx(pw,{question:se,index:he,answered:a[se.id],onAnswer:Ce=>Ve(se.id,Ce),onFiftyFifty:()=>Je(se.id),onAudience:()=>at(se.id),eliminated:ee[se.id]||[],audiencePercentages:Q[se.id],canUseFiftyFifty:$<0||T>=5,canUseAudience:B<0||U>=5},se.id))}),S&&r.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[r.jsx("div",{className:"text-5xl mb-4",children:"😔"}),r.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),r.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),r.jsx("button",{onClick:()=>{X(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),_&&r.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[r.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),r.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),r.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>F(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),r.jsx("button",{onClick:Sn,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),I&&r.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:r.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:p})}),g&&r.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:r.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:g})}),r.jsx("style",{jsx:!0,children:`
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
      `})]})},pw=({question:e,index:t,answered:n,onAnswer:s,onFiftyFifty:a,onAudience:i,eliminated:o,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:d})=>{const f=m=>{switch(m){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return r.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[r.jsx("div",{className:"flex justify-center py-2",children:r.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),r.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[r.jsxs("div",{className:`bg-gradient-to-br ${f(e.difficulty)} p-6 rounded-3xl mb-4`,children:[r.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),r.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),r.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((m,h)=>{const b=n!==void 0,g=n===h,j=h===e.answerIndex,k=o.includes(h);let y="w-full p-4 rounded-2xl font-medium transition-all ";return k?y+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":b?j?y+="bg-green-500 text-white":g?y+="bg-red-500 text-white":y+="bg-gray-700 text-gray-400":y+="bg-gray-800 text-white hover:bg-gray-700",r.jsx("button",{onClick:()=>!b&&!k&&s(h),disabled:b||k,className:y,children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][h]}),r.jsx("span",{className:"flex-1 text-left",children:m}),l&&l[h]>0&&r.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[h],"%"]}),b&&j&&r.jsx("span",{children:"✓"})]})},h)})}),!n&&r.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[r.jsx("button",{onClick:a,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),r.jsx("button",{onClick:i,disabled:!d,className:`px-4 py-2 rounded-lg font-medium text-sm ${d?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),r.jsx("div",{className:"text-center mt-3 mb-2",children:r.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),r.jsx("div",{className:"text-center mt-12 mb-4",children:r.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function gw(){const[e]=N0(),t=ke();return tt(),u.useEffect(()=>{const n=e.get("category"),s=e.get("difficulty"),a=e.get("from")==="quest",i=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports","mixed"],o=["easy","medium","hard"],l=n==="random"?i[Math.floor(Math.random()*i.length)]:n||"mixed",c=s==="random"?o[Math.floor(Math.random()*o.length)]:s||"medium";console.log("QuizPlay - fromQuest:",a),console.log("QuizPlay - returnPath will be:",a?"/quests":"/"),t(`/quiz/${l}`,{replace:!0,state:{mode:"quiz",difficulty:c,count:5,timer:{type:"per_q",seconds:45},fromQuest:a,returnPath:a?"/profile/quests":"/"}})},[e,t]),r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"20px"},children:"Starting your quiz..."})}function xw(){const[e]=N0(),t=ke();return u.useEffect(()=>{const n=e.get("questions")||"15",s=e.get("difficulty")||"easy",a=e.get("category")||"mixed",i=e.get("from")==="quest",o=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports"],l=a==="random"?o[Math.floor(Math.random()*o.length)]:a;console.log("PracticeStart - Launching practice mode:",{category:l,difficulty:s,questions:n,fromQuest:i}),t(`/quiz/${l}`,{replace:!0,state:{mode:"practice",difficulty:s,count:parseInt(n),timer:{type:"off",seconds:0},fromQuest:i,questType:i?"practiceQuestions":null,returnPath:i?"/profile/quests":"/"}})},[e,t]),r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #10B981 0%, #059669 100%)",color:"white",fontSize:"20px"},children:"Loading practice questions..."})}/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yw=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase()),ih=e=>{const t=yw(e);return t.charAt(0).toUpperCase()+t.slice(1)},P0=(...e)=>e.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim(),bw=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ww={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=u.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:a="",children:i,iconNode:o,...l},c)=>u.createElement("svg",{ref:c,...ww,width:t,height:t,stroke:e,strokeWidth:s?Number(n)*24/Number(t):n,className:P0("lucide",a),...!i&&!bw(l)&&{"aria-hidden":"true"},...l},[...o.map(([d,f])=>u.createElement(d,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=(e,t)=>{const n=u.forwardRef(({className:s,...a},i)=>u.createElement(jw,{ref:i,iconNode:t,className:P0(`lucide-${vw(ih(e))}`,`lucide-${e}`,s),...a}));return n.displayName=ih(e),n};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],kw=Fs("chevron-left",Nw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Cw=Fs("gift",Sw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],_w=Fs("lock",Ew);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Tw=Fs("shield",Iw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],oh=Fs("sparkles",Pw);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Aw=Fs("timer",Rw);function Dw({show:e,onClose:t,coins:n,onNavigateToPlay:s}){return e?r.jsxs("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:[r.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[r.jsx("div",{className:"absolute inset-0 opacity-10",children:r.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),r.jsxs("div",{className:"relative",children:[r.jsxs("div",{className:"flex items-center justify-between mb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),r.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[n," Coins"]})]})]}),r.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),r.jsxs("div",{className:"mb-6",children:[r.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),r.jsxs("div",{className:"space-y-3",children:[r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),r.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),r.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),r.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),r.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),r.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),r.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),r.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[r.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),r.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),r.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),r.jsxs("div",{className:"mb-6",children:[r.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[r.jsx("span",{children:"Next reward"}),r.jsxs("span",{children:[100-n%100," coins to go"]})]}),r.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${n%100}%`}})})]}),r.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]}),r.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `})]}):null}function Lw(){const e=ke();u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const[t]=st("/sounds/correct.mp3",{volume:.6}),[n]=st("/sounds/coin.mp3",{volume:.7}),[s]=st("/sounds/click.mp3",{volume:.5}),[a]=st("/sounds/wrong.mp3",{volume:.5}),i=u.useRef(null),o=u.useRef({}),[l,c]=u.useState(!1),[d,f]=u.useState(ce.getCoins()),[m,h]=u.useState(null),[b,g]=u.useState([{id:"bronze",name:"Bronze",opened:!1,reward:null,minCoins:5,maxCoins:15,color:"from-amber-600 to-amber-700",glow:"shadow-amber-500/30",miniGame:"tap",tapsRequired:3,tapsCount:0},{id:"silver",name:"Silver",opened:!1,reward:null,minCoins:20,maxCoins:40,color:"from-gray-400 to-gray-500",glow:"shadow-gray-400/30",miniGame:"swipe",swipePattern:null,swipeComplete:!1},{id:"gold",name:"Gold",opened:!1,reward:null,minCoins:50,maxCoins:100,color:"from-yellow-400 to-yellow-500",glow:"shadow-yellow-400/30",xpChance:.7,miniGame:"hold",holdDuration:2,holdProgress:0,isHolding:!1}]),[j,k]=u.useState(!1),[y,x]=u.useState(0),[v,N]=u.useState(null),[C,I]=u.useState(""),[E,p]=u.useState(null),[w,S]=u.useState(null),[A,_]=u.useState(null);u.useEffect(()=>{F();const T=setInterval(q,1e3);return()=>clearInterval(T)},[]);const F=()=>{const T=[{id:"bronze",name:"Bronze",opened:!1,reward:null,minCoins:5,maxCoins:15,color:"from-amber-600 to-amber-700",glow:"shadow-amber-500/30",miniGame:"tap",tapsRequired:3,tapsCount:0},{id:"silver",name:"Silver",opened:!1,reward:null,minCoins:20,maxCoins:40,color:"from-gray-400 to-gray-500",glow:"shadow-gray-400/30",miniGame:"tap",tapsRequired:3,tapsCount:0},{id:"gold",name:"Gold",opened:!1,reward:null,minCoins:50,maxCoins:100,color:"from-yellow-400 to-yellow-500",glow:"shadow-yellow-400/30",xpChance:.7,miniGame:"tap",tapsRequired:3,tapsCount:0}];g(T),x(0);const M=new Date().toDateString();N(M),ce.safeSet("surprise_zone_data",{date:M,boxes:T,totalEarned:0})},q=()=>{const T=new Date,M=new Date(T);M.setDate(M.getDate()+1),M.setHours(0,0,0,0);const U=M-T,G=Math.floor(U/(1e3*60*60)),$=Math.floor(U%(1e3*60*60)/(1e3*60)),Z=Math.floor(U%(1e3*60)/1e3);I(`${G.toString().padStart(2,"0")}:${$.toString().padStart(2,"0")}:${Z.toString().padStart(2,"0")}`)};u.useEffect(()=>{const T=setInterval(()=>{const M=ce.getCoins();M!==d&&f(M)},100);return()=>clearInterval(T)},[d]);const X=(T,M)=>{if(j)return;const U=b.findIndex($=>$.id===T),G=b[U];G.opened||(S(T),G.miniGame==="tap"&&M==="tap"?V(U):G.miniGame==="swipe"&&M==="swipe"?H(U):G.miniGame==="hold"&&(M==="holdStart"?O(U):M==="holdEnd"&&R(U)))},V=T=>{const M=b[T],U=M.tapsCount+1;s();const G=[...b];G[T]={...M,tapsCount:U},g(G),U>=M.tapsRequired&&setTimeout(()=>L(M.id),300)},H=T=>{const M=b[T];s();const U=[...b];U[T]={...M,swipeComplete:!0},g(U),setTimeout(()=>L(M.id),300)},O=T=>{const M=b[T],U=[...b];U[T]={...M,isHolding:!0,holdProgress:0},g(U);let G=0;const $=setInterval(()=>{G+=.05;const Z=[...b],B=Z[T];G>=M.holdDuration?(clearInterval($),Z[T]={...B,holdProgress:M.holdDuration,isHolding:!1},g(Z),L(M.id)):B.isHolding?(Z[T]={...B,holdProgress:G},g(Z)):clearInterval($)},50);_($)},R=T=>{A&&(clearInterval(A),_(null));const M=b[T];if(M.holdProgress<M.holdDuration){a();const U=[...b];U[T]={...M,isHolding:!1,holdProgress:0},g(U)}},L=async T=>{if(j)return;const M=b.findIndex(z=>z.id===T),U=b[M];if(U.opened)return;k(!0);const G=Math.floor(Math.random()*(U.maxCoins-U.minCoins+1))+U.minCoins,Z=U.xpChance&&Math.random()<U.xpChance?Math.floor(Math.random()*50)+25:0;if(p({boxId:T,coins:G,xpBonus:Z}),t(),await new Promise(z=>setTimeout(z,600)),o.current[T]&&i.current){const z=o.current[T].getBoundingClientRect();n(),h({startRect:z,count:Math.min(G,15),amount:G,xpBonus:Z})}const B=[...b];B[M]={...U,opened:!0,reward:{coins:G,xpBonus:Z}},g(B),x(z=>z+G),ce.safeSet("surprise_zone_data",{date:v,boxes:B,totalEarned:y+G}),setTimeout(()=>{p(null),S(null)},2e3),k(!1)},D=b.every(T=>T.opened);return r.jsxs("div",{className:"min-h-screen bg-black text-white",children:[r.jsx("div",{className:"fixed inset-0 bg-gradient-to-b from-gray-900/50 to-black pointer-events-none"}),m&&r.jsx(Sr,{startRect:m.startRect,targetRef:i,count:m.count,onDone:()=>{ce.addCoins(m.amount,"Lucky Box"),m.xpBonus>0&&ce.addXP(m.xpBonus),f(ce.getCoins()),h(null)}}),E&&r.jsx("div",{className:"fixed inset-0 z-50 pointer-events-none flex items-center justify-center",children:r.jsx("div",{className:"animate-bounce",children:r.jsx("div",{className:"bg-black/90 backdrop-blur-xl rounded-3xl p-6 border border-white/20",children:r.jsxs("div",{className:"text-center",children:[r.jsx(oh,{className:"w-12 h-12 text-yellow-400 mx-auto mb-3"}),r.jsxs("p",{className:"text-3xl font-bold text-yellow-400",children:["+",E.coins]}),r.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"coins"}),E.xpBonus>0&&r.jsxs("p",{className:"text-lg text-blue-400 mt-2",children:["+",E.xpBonus," XP"]})]})})})}),r.jsxs("div",{className:"relative z-10 px-6 pt-14 pb-8",children:[r.jsxs("div",{className:"flex items-center justify-between mb-6",children:[r.jsx("button",{onClick:()=>e("/"),className:"w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all active:scale-95",children:r.jsx(kw,{className:"w-5 h-5"})}),r.jsxs("div",{className:"text-center",children:[r.jsx("p",{className:"text-sm text-gray-400 mb-1",children:"Daily Surprise"}),r.jsx("h1",{className:"text-2xl font-semibold",children:"Lucky Boxes"})]}),r.jsxs("button",{ref:i,onClick:()=>c(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur-xl flex items-center gap-2 hover:bg-yellow-500/30 transition-all border border-yellow-500/30",children:[r.jsx("span",{className:"text-lg",children:"🪙"}),r.jsx("span",{className:"font-bold text-yellow-400",children:d})]})]}),r.jsx("div",{className:"mx-auto max-w-sm mb-8",children:r.jsx("div",{className:"bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(Aw,{className:"w-4 h-4 text-gray-400"}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs text-gray-400",children:"Next reset in"}),r.jsx("p",{className:"text-lg font-mono font-semibold",children:C||"00:00:00"})]})]}),r.jsxs("div",{className:"text-right",children:[r.jsx("p",{className:"text-xs text-gray-400",children:"Earned today"}),r.jsxs("p",{className:"text-lg font-semibold text-yellow-400",children:[y," coins"]})]})]})})}),!D&&r.jsx("div",{className:"text-center mb-6",children:r.jsx("p",{className:"text-sm text-gray-500",children:"Complete mini-games to unlock rewards!"})})]}),r.jsxs("div",{className:"relative z-10 px-6 pb-8",children:[r.jsx("div",{className:"max-w-sm mx-auto space-y-6",children:b.map((T,M)=>{var U,G;return r.jsx("div",{ref:$=>o.current[T.id]=$,className:"relative",style:{animation:`fadeInUp 0.5s ease-out ${M*100}ms both`},children:r.jsxs("button",{onClick:()=>X(T.id,"tap"),onMouseDown:()=>T.miniGame==="hold"&&X(T.id,"holdStart"),onMouseUp:()=>T.miniGame==="hold"&&X(T.id,"holdEnd"),onMouseLeave:()=>T.miniGame==="hold"&&X(T.id,"holdEnd"),onTouchStart:()=>T.miniGame==="hold"&&X(T.id,"holdStart"),onTouchEnd:()=>T.miniGame==="hold"&&X(T.id,"holdEnd"),disabled:T.opened||j,className:`
                  w-full relative overflow-hidden rounded-3xl p-8
                  transition-all duration-500 transform
                  ${T.opened?"bg-white/5 scale-95 opacity-60":`bg-gradient-to-br ${T.color} hover:scale-[1.02] active:scale-[0.98] shadow-2xl ${T.glow}`}
                  ${j&&!T.opened?"animate-pulse":""}
                  ${!T.opened&&T.id==="bronze"&&T.tapsCount===0?"animate-pulse ring-2 ring-yellow-400/50":""}
                  disabled:cursor-not-allowed
                `,children:[!T.opened&&w===T.id&&r.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[T.miniGame==="tap"&&r.jsx("div",{className:"absolute top-2 right-2 flex gap-1",children:[...Array(T.tapsRequired)].map(($,Z)=>r.jsx("div",{className:`w-2 h-2 rounded-full ${Z<T.tapsCount?"bg-white":"bg-white/30"}`},Z))}),T.miniGame==="hold"&&T.isHolding&&r.jsx("div",{className:"absolute inset-x-0 bottom-0 h-1 bg-white/20",children:r.jsx("div",{className:"h-full bg-white transition-all",style:{width:`${T.holdProgress/T.holdDuration*100}%`}})})]}),!T.opened&&r.jsx("div",{className:"absolute inset-0 opacity-10",children:r.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                       radial-gradient(circle at 80% 80%, white 1px, transparent 1px),
                                       radial-gradient(circle at 40% 80%, white 1px, transparent 1px)`,backgroundSize:"50px 50px"}})}),r.jsxs("div",{className:"relative z-10 flex items-center justify-between",children:[r.jsxs("div",{className:"text-left",children:[r.jsxs("p",{className:`text-sm font-medium ${T.opened?"text-gray-400":"text-white/80"}`,children:[T.name," Box"]}),r.jsx("p",{className:`text-2xl font-bold mt-1 ${T.opened?"text-gray-300":"text-white"}`,children:T.opened?r.jsxs("span",{className:"flex items-center gap-2",children:[r.jsxs("span",{className:"text-yellow-400",children:["+",(U=T.reward)==null?void 0:U.coins]}),r.jsx("span",{className:"text-sm",children:"coins"}),((G=T.reward)==null?void 0:G.xpBonus)>0&&r.jsxs("span",{className:"text-sm text-blue-400 ml-2",children:["+",T.reward.xpBonus," XP"]})]}):r.jsxs("span",{className:"flex items-center gap-2",children:[r.jsxs("span",{children:[T.minCoins,"-",T.maxCoins]}),r.jsx("span",{className:"text-sm",children:"coins"})]})}),!T.opened&&r.jsxs("p",{className:"text-xs text-white/50 mt-1",children:[T.miniGame==="tap"&&`Tap ${T.tapsRequired} times`,T.miniGame==="hold"&&`Hold for ${T.holdDuration} seconds`]})]}),r.jsx("div",{className:`
                    w-16 h-16 rounded-2xl flex items-center justify-center
                    ${T.opened?"bg-white/10":"bg-white/20 backdrop-blur-xl"}
                    transition-all duration-300
                  `,children:T.opened?r.jsx(oh,{className:"w-8 h-8 text-yellow-400"}):w===T.id?r.jsx(Tw,{className:"w-8 h-8 text-white animate-pulse"}):r.jsx(Cw,{className:`w-8 h-8 text-white ${j?"":"animate-pulse"}`})})]})]})},T.id)})}),D&&r.jsxs("div",{className:"mt-12 text-center space-y-4",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10",children:[r.jsx(_w,{className:"w-4 h-4 text-gray-400"}),r.jsx("p",{className:"text-sm text-gray-400",children:"All boxes opened! Come back tomorrow"})]}),r.jsx("div",{className:"text-center",children:r.jsxs("p",{className:"text-2xl font-bold text-yellow-400",children:["🎉 ",y," coins earned!"]})})]})]}),r.jsx(Dw,{show:l,onClose:()=>c(!1),coins:d,onNavigateToPlay:()=>{c(!1),e("/play")}}),r.jsx("style",{jsx:!0,children:`
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
      `})]})}function Ow(){var b;const e=ke(),[t,n]=u.useState(""),[s,a]=u.useState(null),{player:i,levelProgress:o}=qn(),c=(()=>{const g=JSON.parse(localStorage.getItem("currentUser")||"{}");return((g.phone?JSON.parse(localStorage.getItem(`user_profile_${g.phone}`)||"{}"):{}).name||g.username||(i==null?void 0:i.name)||"Player").split(" ")[0]})(),d=()=>{if((s==null?void 0:s.todayCoins)!==void 0)return s.todayCoins;try{const g=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),j=new Date().setHours(0,0,0,0);return g.sessions.filter(y=>new Date(y.timestamp).setHours(0,0,0,0)===j).reduce((y,x)=>y+(x.earnedCoins||0),0)}catch{return 0}},f={name:c,rank:(s==null?void 0:s.rank)||23,streak:(s==null?void 0:s.streak)||(i==null?void 0:i.currentStreak)||0,todayQuizzes:((b=s==null?void 0:s.daily)==null?void 0:b.quizzesPlayed)||3,todayCoins:d()};u.useEffect(()=>{const g=new Date().getHours();g<12?n("Good morning"):g<17?n("Good afternoon"):n("Good evening")},[]),u.useEffect(()=>{const g=()=>{const j=lt.getCurrentUser();if(j!=null&&j.phone){ce.initializeUserData(j.phone);const k=ce.getTodaySummary(j.phone);a(k)}};return g(),window.addEventListener("focus",g),()=>window.removeEventListener("focus",g)},[]);const m=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,h=s!=null&&s.xpProgress?s.xpProgress/(s.xpNeeded||100)*100:o.required>0?o.current/o.required*100:0;return r.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-10 px-3",children:[r.jsxs("div",{className:"mb-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("div",{children:r.jsxs("h1",{className:"text-2xl font-bold px-3",children:[t,", ",c," 👋"]})}),r.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-10 h-10 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:r.jsx("span",{className:"text-xl",children:"⚙️"})})]}),r.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[r.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[r.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:c[0].toUpperCase()}),r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"text-lg font-semibold",children:c}),r.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",(s==null?void 0:s.level)||i.level||1]})]}),r.jsxs("div",{className:"text-right",children:[r.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[(s==null?void 0:s.totalCoins)||i.coins||0," 🪙"]}),r.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",f.rank]})]})]}),r.jsxs("div",{className:"mb-3",children:[r.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[r.jsx("span",{children:"XP Progress"}),r.jsxs("span",{children:[(s==null?void 0:s.xpProgress)||o.current,"/",(s==null?void 0:s.xpNeeded)||o.required]})]}),r.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${h}%`}})})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[r.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",f.streak]}),r.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),r.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[r.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",f.todayCoins]}),r.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),r.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${m} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[r.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),r.jsxs("div",{className:"relative flex items-start justify-between",children:[r.jsxs("div",{children:[r.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),r.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),r.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[r.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),r.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("button",{onClick:()=>e("/profile/history"),className:`${m} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[r.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),r.jsx("div",{className:"text-3xl mb-3",children:"📊"}),r.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),r.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),r.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",f.todayQuizzes," today"]})]}),r.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${m} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[r.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),r.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),r.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),r.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),r.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),r.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${m} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[r.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),r.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),r.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),r.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),r.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),r.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${m} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[r.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),r.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),r.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),r.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),r.jsxs("div",{className:"mt-4 space-y-3",children:[r.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[r.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${m} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"text-2xl",children:"🔥"}),r.jsxs("div",{children:[r.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),r.jsxs("div",{className:"text-[11px] opacity-80",children:[f.streak," days strong"]})]})]})}),r.jsx("button",{onClick:()=>e("/profile/quests"),className:`${m} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"text-2xl",children:"⚡"}),r.jsxs("div",{children:[r.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),r.jsxs("div",{className:"text-[11px] opacity-80",children:[(s==null?void 0:s.activeQuests)||2," active goals"]})]})]})})]}),r.jsx("button",{onClick:()=>e("/profile/settings"),className:`${m} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),r.jsxs("div",{children:[r.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),r.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),r.jsx("div",{className:"text-white/40",children:"→"})]})})]}),r.jsx("div",{className:"h-6"})]})}const na="🪙",Pi={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},Ri=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function Mw(){var h,b;const e=ke(),{player:t}=qn(),n={global:Pi.global.map(g=>g.you?{...g,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:g),friends:Pi.friends.map(g=>g.you?{...g,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:g),india:Pi.india.map(g=>g.you?{...g,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:g)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",n.friends[0]);const[s,a]=u.useState({days:2,hours:14,minutes:17}),[i,o]=u.useState("global"),l=n[i]||n.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(h=l.find(g=>g.you))==null?void 0:h.score);const c=l.find(g=>g.you),d=l.slice(0,3),f=l.slice(3);u.useEffect(()=>{const g=setInterval(()=>{a(j=>j.minutes>0?{...j,minutes:j.minutes-1}:j.hours>0?{...j,hours:j.hours-1,minutes:59}:j.days>0?{...j,days:j.days-1,hours:23,minutes:59}:j)},6e4);return()=>clearInterval(g)},[]);const m=g=>{const j=Math.max(...l.map(y=>y.score)),k=g/j*100;return k>=90?Ri[0]:k>=70?Ri[1]:k>=40?Ri[2]:Ri[3]};return r.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[r.jsxs("div",{className:"flex items-center justify-between mb-5",children:[r.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),r.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),r.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),r.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${m(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[r.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),r.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),r.jsxs("div",{className:"relative z-10",children:[r.jsx("div",{className:"text-2xl mb-1",children:m(c==null?void 0:c.score).icon}),r.jsxs("div",{className:"text-sm font-bold text-white",children:[m(c==null?void 0:c.score).name," League"]}),r.jsx("div",{className:"text-xs text-white/80",children:i==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),r.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:Pi.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(g=>r.jsxs("button",{onClick:()=>o(g.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${i===g.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[r.jsx("div",{children:g.label}),r.jsx("div",{className:`text-[10px] ${i===g.key?"text-black/70":"text-white/60"}`,children:g.count})]},g.key))}),r.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),r.jsxs("div",{children:[r.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),r.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[r.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),r.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),r.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",i==="global"?"Global":i==="friends"?"Friends":"India"]})]})]})]}),r.jsxs("div",{className:"text-right",children:[r.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",na]}),r.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),r.jsxs("div",{className:"mb-6",children:[r.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),r.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[r.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),r.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),r.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),r.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),r.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[d[1]&&r.jsxs("div",{className:"flex flex-col items-center",children:[r.jsxs("div",{className:"relative mb-2",children:[r.jsx(Ai,{src:d[1].avatar,fallback:d[1].name,size:56}),r.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),r.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:Di(d[1].name,8)}),r.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[d[1].score," ",na]})]}),d[0]&&r.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[r.jsxs("div",{className:"relative mb-2",children:[r.jsx(Ai,{src:d[0].avatar,fallback:d[0].name,size:72}),r.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:r.jsx(zw,{})}),r.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),r.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:Di(d[0].name,8)}),r.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[d[0].score," ",na]}),r.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),d[2]&&r.jsxs("div",{className:"flex flex-col items-center",children:[r.jsxs("div",{className:"relative mb-2",children:[r.jsx(Ai,{src:d[2].avatar,fallback:d[2].name,size:56}),r.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),r.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:Di(d[2].name,8)}),r.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[d[2].score," ",na]})]})]})]})]}),f.length>0&&r.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[r.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[r.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),r.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),r.jsx("ul",{className:"space-y-1.5",children:f.map((g,j)=>r.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${g.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${j*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[r.jsxs("div",{className:"flex items-center gap-2.5",children:[r.jsx(Fw,{n:g.rank,you:g.you}),r.jsx(Ai,{src:g.avatar,fallback:g.name,size:36}),r.jsxs("div",{className:"flex flex-col leading-tight",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"text-sm font-semibold",children:Di(g.name,12)}),r.jsx("span",{className:"text-xs",children:g.country}),g.friend&&r.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),r.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${g.you?"text-black/70":"text-white/60"}`,children:[r.jsx("span",{children:g.handle}),r.jsxs("span",{children:["🔥",g.streak]})]})]})]}),r.jsxs("div",{className:"flex flex-col items-end",children:[r.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[r.jsx("span",{children:g.score}),r.jsx("span",{className:g.you?"opacity-90":"opacity-80",children:na})]}),r.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${g.trend.startsWith("+")?"bg-green-500/20 text-green-400":g.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:g.trend})]})]},`${i}-${g.rank}`))})]}),c&&c.rank>1&&r.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[r.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),r.jsx("div",{className:"text-xs text-white/70 mb-3",children:i==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((b=l[c.rank-2])==null?void 0:b.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(i==="friends"&&c.rank===1)&&r.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),r.jsx("style",{jsx:!0,children:`
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
      `})]})}function Ai({src:e,fallback:t,size:n=56}){const s=$w(t);return r.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:n,height:n},children:e?r.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):r.jsx("span",{className:"text-sm font-semibold",children:s})})}function zw(){return r.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[r.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[r.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),r.jsx("defs",{children:r.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[r.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),r.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),r.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function Fw({n:e,you:t}){return r.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function Di(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function $w(e=""){var n;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((n=t[1])==null?void 0:n[0])||"")).toUpperCase()}const Uw="qp_recent",Bw="qp_review_snapshot",lh=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function Ww(){const[e,t]=u.useState("quizzes"),[n,s]=u.useState(null),[a,i]=u.useState(!1),[o,l]=u.useState("all"),[c,d]=u.useState("all"),[f,m]=u.useState("date"),[h,b]=u.useState([]),[g,j]=u.useState(!0),k=ke(),y=tt(),x=p=>{if(!p)return"00:00";const w=Math.floor(p/1e3),S=Math.floor(w/60),A=w%60;return`${String(S).padStart(2,"0")}:${String(A).padStart(2,"0")}`},v=p=>{if(!p)return"Unknown";const w=new Date(p),A=Math.floor((new Date-w)/(1e3*60*60*24));return A===0?"Today":A===1?"Yesterday":A<7?`${A} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][w.getMonth()]} ${w.getDate()}`};u.useEffect(()=>{let p=!1;j(!0);const w=_=>{try{return JSON.parse(_)}catch{return null}},S=_=>encodeURIComponent(String(_).trim().toLowerCase().replace(/\s+/g,"-")),A=_=>{var T,M,U,G;const F=Number(_.ts??_.timestamp??_.id)||Date.now(),q=Number(_.ms)||0,X=Number(_.total)||0,V=Number(_.correct)||0,O=String(_.mode||"").toLowerCase().includes("practice")?"practice":"quiz",R=((T=_.snapshot)==null?void 0:T.category)||((M=_.snapshot)==null?void 0:M.categoryLabel)||_.cat||_.category||"Unknown",L=((U=_.snapshot)==null?void 0:U.categoryParam)||S(R),D=String(((G=_.snapshot)==null?void 0:G.difficulty)||_.difficulty||"medium").toLowerCase();return{id:_.id??F,type:O,category:R,categoryParam:L,difficulty:D,score:V,total:X,accuracy:X?Math.round(V/X*100):0,time:x(q),ms:q,date:v(F),timestamp:F,snapshot:_.snapshot??null,mode:_.mode||(O==="practice"?"Practice":"Quiz")}};try{const _=localStorage.getItem(Uw),F=_?w(_):null,X=(Array.isArray(F)&&F.length?F:lh).map(A).filter(V=>V&&V.timestamp).sort((V,H)=>H.timestamp-V.timestamp);p||b(X)}catch(_){console.error("Error loading history:",_),p||b(lh)}finally{p||j(!1)}return()=>{p=!0}},[]);const N=u.useMemo(()=>{const p=new Set(h.map(w=>w.category));return Array.from(p)},[h]),C=u.useMemo(()=>{let p=h.filter(w=>e==="quizzes"?w.type==="quiz":w.type==="practice");return o!=="all"&&(p=p.filter(w=>w.category===o)),c!=="all"&&(p=p.filter(w=>w.difficulty===c)),p.sort((w,S)=>f==="date"?S.timestamp-w.timestamp:f==="score"?S.accuracy-w.accuracy:f==="time"?w.ms-S.ms:0),p},[h,e,o,c,f]),I=u.useMemo(()=>{if(C.length===0)return null;const p=C.reduce((_,F)=>_+F.score,0),w=C.reduce((_,F)=>_+F.total,0),S=w?Math.round(p/w*100):0,A=C.reduce((_,F)=>_+F.ms,0);return{count:C.length,avgAccuracy:S,totalTime:x(A),bestScore:Math.max(...C.map(_=>_.accuracy))}},[C]),E=p=>p>=80?"text-green-400":p>=60?"text-blue-400":p>=40?"text-yellow-400":"text-red-400";return g?r.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:r.jsx("div",{className:"text-white",children:"Loading history..."})}):r.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[r.jsx("div",{className:"",children:r.jsxs("div",{className:"px-4 pt-4 pb-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("button",{onClick:()=>{var p;if(((p=y.state)==null?void 0:p.from)==="results"){const w=ce.getCurrentResults();w?k(`/quiz/${w.categorySlug}`,{state:{returnToResults:!0}}):k("/profile")}else k("/profile")},className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),r.jsx("button",{onClick:()=>i(!a),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:r.jsx(Yw,{})})]}),r.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),r.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),r.jsxs("div",{className:"px-4 pb-20",children:[r.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:r.jsx("div",{className:"flex items-center",children:r.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(p=>r.jsxs("button",{onClick:()=>t(p.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===p.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[r.jsx("span",{className:"mr-1",children:p.icon}),p.label]},p.value))})})}),I&&r.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:r.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[r.jsx(Li,{label:"Total",value:I.count}),r.jsx(Li,{label:"Avg Score",value:`${I.avgAccuracy}%`,color:E(I.avgAccuracy)}),r.jsx(Li,{label:"Best Score",value:`${I.bestScore}%`,color:"text-green-400"}),r.jsx(Li,{label:"Total Time",value:I.totalTime})]})}),a&&r.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),r.jsxs("select",{value:o,onChange:p=>l(p.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[r.jsx("option",{value:"all",children:"All Categories"}),N.map(p=>r.jsx("option",{value:p,children:p},p))]})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),r.jsxs("select",{value:c,onChange:p=>d(p.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[r.jsx("option",{value:"all",children:"All"}),r.jsx("option",{value:"easy",children:"Easy"}),r.jsx("option",{value:"medium",children:"Medium"}),r.jsx("option",{value:"hard",children:"Hard"})]})]}),r.jsxs("div",{className:"flex-1",children:[r.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),r.jsxs("select",{value:f,onChange:p=>m(p.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[r.jsx("option",{value:"date",children:"Date"}),r.jsx("option",{value:"score",children:"Score"}),r.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),C.length===0?r.jsxs("div",{className:"text-center py-12",children:[r.jsx("div",{className:"text-4xl mb-3",children:"📚"}),r.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),r.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):r.jsx("div",{className:"space-y-3",children:C.map((p,w)=>r.jsx(Hw,{item:p,index:w,onClick:()=>s(p)},p.id))})]}),n&&r.jsx(qw,{item:n,onClose:()=>s(null)})]})}function Li({label:e,value:t,color:n="text-white"}){return r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),r.jsx("div",{className:`text-lg font-bold ${n}`,children:t})]})}function Hw({item:e,index:t,onClick:n}){const s=o=>o>=80?"from-green-500/20 to-green-600/10 border-green-500/30":o>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":o>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",i=(o=>{const l=o==null?void 0:o.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return r.jsxs("div",{onClick:n,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[r.jsxs("div",{className:"flex items-start justify-between mb-3",children:[r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[r.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),r.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${i.bg} ${i.text} ${i.border} border`,children:e.difficulty}),r.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),r.jsxs("div",{className:"text-right",children:[r.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),r.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),r.jsxs("div",{className:"flex items-center justify-between text-xs",children:[r.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[r.jsxs("span",{children:["⏱ ",e.time]}),r.jsx("span",{children:e.mode})]}),r.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function qw({item:e,onClose:t}){const n=ke();return u.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),r.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:r.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),r.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-white/60",children:"Category"}),r.jsx("span",{className:"text-white font-medium",children:e.category})]}),r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-white/60",children:"Difficulty"}),r.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-white/60",children:"Score"}),r.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-white/60",children:"Accuracy"}),r.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-white/60",children:"Time"}),r.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&r.jsx("button",{onClick:()=>{t(),localStorage.setItem(Bw,JSON.stringify(e.snapshot)),n(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),r.jsx("button",{onClick:()=>{var s;t(),n(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function Yw(){return r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Gw=u.createContext({});function R0(e){const t=u.useRef(null);return t.current===null&&(t.current=e()),t.current}const Vw=typeof window<"u",Qw=Vw?u.useLayoutEffect:u.useEffect,A0=u.createContext(null);function Kw(e){return typeof e=="object"&&e!==null}function Xw(e){return Kw(e)&&"offsetHeight"in e}const Jw=u.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Zw extends u.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const s=n.offsetParent,a=Xw(s)&&s.offsetWidth||0,i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft,i.right=a-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function e2({children:e,isPresent:t,anchorX:n,root:s}){const a=u.useId(),i=u.useRef(null),o=u.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=u.useContext(Jw);return u.useInsertionEffect(()=>{const{width:c,height:d,top:f,left:m,right:h}=o.current;if(t||!i.current||!c||!d)return;const b=n==="left"?`left: ${m}`:`right: ${h}`;i.current.dataset.motionPopId=a;const g=document.createElement("style");l&&(g.nonce=l);const j=s??document.head;return j.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${d}px !important;
            ${b}px !important;
            top: ${f}px !important;
          }
        `),()=>{j.contains(g)&&j.removeChild(g)}},[t]),r.jsx(Zw,{isPresent:t,childRef:i,sizeRef:o,children:u.cloneElement(e,{ref:i})})}const t2=({children:e,initial:t,isPresent:n,onExitComplete:s,custom:a,presenceAffectsLayout:i,mode:o,anchorX:l,root:c})=>{const d=R0(n2),f=u.useId();let m=!0,h=u.useMemo(()=>(m=!1,{id:f,initial:t,isPresent:n,custom:a,onExitComplete:b=>{d.set(b,!0);for(const g of d.values())if(!g)return;s&&s()},register:b=>(d.set(b,!1),()=>d.delete(b))}),[n,d,s]);return i&&m&&(h={...h}),u.useMemo(()=>{d.forEach((b,g)=>d.set(g,!1))},[n]),u.useEffect(()=>{!n&&!d.size&&s&&s()},[n]),o==="popLayout"&&(e=r.jsx(e2,{isPresent:n,anchorX:l,root:c,children:e})),r.jsx(A0.Provider,{value:h,children:e})};function n2(){return new Map}function r2(e=!0){const t=u.useContext(A0);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:a}=t,i=u.useId();u.useEffect(()=>{if(e)return a(i)},[e]);const o=u.useCallback(()=>e&&s&&s(i),[i,s,e]);return!n&&s?[!1,o]:[!0]}const Oi=e=>e.key||"";function ch(e){const t=[];return u.Children.forEach(e,n=>{u.isValidElement(n)&&t.push(n)}),t}const Kl=({children:e,custom:t,initial:n=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:i="sync",propagate:o=!1,anchorX:l="left",root:c})=>{const[d,f]=r2(o),m=u.useMemo(()=>ch(e),[e]),h=o&&!d?[]:m.map(Oi),b=u.useRef(!0),g=u.useRef(m),j=R0(()=>new Map),[k,y]=u.useState(m),[x,v]=u.useState(m);Qw(()=>{b.current=!1,g.current=m;for(let I=0;I<x.length;I++){const E=Oi(x[I]);h.includes(E)?j.delete(E):j.get(E)!==!0&&j.set(E,!1)}},[x,h.length,h.join("-")]);const N=[];if(m!==k){let I=[...m];for(let E=0;E<x.length;E++){const p=x[E],w=Oi(p);h.includes(w)||(I.splice(E,0,p),N.push(p))}return i==="wait"&&N.length&&(I=N),v(ch(I)),y(m),null}const{forceRender:C}=u.useContext(Gw);return r.jsx(r.Fragment,{children:x.map(I=>{const E=Oi(I),p=o&&!d?!1:m===x||h.includes(E),w=()=>{if(j.has(E))j.set(E,!0);else return;let S=!0;j.forEach(A=>{A||(S=!1)}),S&&(C==null||C(),v(g.current),o&&(f==null||f()),s&&s())};return r.jsx(t2,{isPresent:p,initial:!b.current||n?void 0:!1,custom:t,presenceAffectsLayout:a,mode:i,root:c,onExitComplete:p?void 0:w,anchorX:l,children:I},E)})})},s2=()=>{const e=ke(),[t,n]=u.useState(null);u.useEffect(()=>{if(typeof window<"u"){const W=sessionStorage.getItem("navigationSource");W&&n(W)}},[]);const s=W=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=W)},a=()=>{e(-1)},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}};qn();const[l,c]=u.useState(4),[d,f]=u.useState(ce.getCoins()),[m,h]=u.useState(4),[b,g]=u.useState(!1),[j,k]=u.useState(!1),[y,x]=u.useState(0),[v,N]=u.useState(0),[C,I]=u.useState("cycle"),[E,p]=u.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[w,S]=u.useState([0,1,2,3]),[A,_]=u.useState(!1),[F,q]=u.useState(!1),[X,V]=u.useState(null),[H,O]=u.useState(null),[R,L]=u.useState(!1),[D,T]=u.useState(null),[M,U]=u.useState(!1),G=u.useRef(null),$=u.useRef(null),Z=u.useRef(null);u.useEffect(()=>{G.current=new Audio("/sounds/reward.mp3"),$.current=new Audio("/sounds/reward_progress.mp3"),[G,$].forEach(W=>{var P;(P=W.current)==null||P.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const B=W=>{try{W.current&&(W.current.currentTime=0,W.current.play().catch(P=>console.log("Audio play failed:",P)))}catch(P){console.log("Sound play error:",P)}},z=(W,P)=>{if(W>l){O(P),q(!0);return}W===l&&Y(W,P)},ee=W=>{var te;const P=(te=Z.current)==null?void 0:te.querySelector(`[data-index="${W}"]`);if(P){const ne=P.getBoundingClientRect(),oe=window.pageYOffset||document.documentElement.scrollTop,ue=ne.top+oe-window.innerHeight/2+50;window.scrollTo({top:ue,behavior:"smooth"})}},Y=(W,P)=>{if(!w.includes(W)){if(P.cost>0&&d<P.cost){O(P),q(!0);return}P.cost>0&&(f(te=>te-P.cost),ce.addCoins(-P.cost,`Reward Purchase: ${P.label}`)),B(G),_(!0),O(P),S(te=>[...te,W]),setTimeout(()=>{_(!1),P.type==="coins"?(x(P.value),g(!0),setTimeout(()=>{f(te=>te+P.value),ce.addCoins(P.value,`Reward Claimed: ${P.label}`),setTimeout(()=>{g(!1),x(0)},500)},300)):P.type==="life"?(N(P.value),k(!0),setTimeout(()=>{h(te=>te+P.value),setTimeout(()=>{k(!1),N(0)},500)},300)):(T({icon:P.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{T(null),U(!0),Q(P),P.type==="vehicle"&&I(P.value),setTimeout(()=>{U(!1)},500)},800)),setTimeout(()=>{if(l<i.length-1){const te=l+1;ee(te),setTimeout(()=>{L(!0),B($),c(te),setTimeout(()=>{L(!1)},500)},300)}},1200)},1500)}},Q=W=>{p(P=>P.find(ne=>ne.icon===W.icon)?P.map(ne=>ne.icon===W.icon?{...ne,count:ne.count+1}:ne):[...P,{type:W.type,icon:W.icon,name:W.label,count:1}])},K=W=>30+W*100,J=()=>30+l*100;return r.jsxs("div",{className:"rewards-page",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsx("div",{className:"non-sticky-header",children:r.jsx("button",{className:"back-button",onClick:a,children:"← Back"})}),r.jsxs("div",{className:"sticky-section",children:[r.jsxs("div",{className:"header-wrapper",children:[r.jsxs("div",{className:"title-row",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"title",children:"Rewards"}),r.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),r.jsx("button",{className:"play-quiz-btn",onClick:()=>s("/play"),children:"Play Quiz"})]}),r.jsx("div",{className:"balance-row",children:r.jsx("div",{className:"balance-item",children:r.jsxs("div",{children:[r.jsx("div",{className:"balance-label",children:"Balance"}),r.jsxs("div",{className:`balance-value ${b?"animating":""}`,children:[d.toLocaleString()," 🪙",b&&r.jsxs("span",{className:"value-change",children:["+",y]})]})]})})})]}),r.jsx("div",{className:"stats-cards-container",children:r.jsxs("div",{className:"info-grid",children:[r.jsxs("div",{className:"info-card",children:[r.jsx("div",{className:"info-icon",children:"❤️"}),r.jsxs("div",{className:`info-value ${j?"animating":""}`,children:[m,j&&r.jsxs("span",{className:"value-change",children:["+",v]})]}),r.jsx("div",{className:"info-label",children:"Lives"})]}),r.jsxs("div",{className:"info-card",children:[r.jsx("div",{className:"info-icon",children:"⭐"}),r.jsx("div",{className:"info-value",children:"5"}),r.jsx("div",{className:"info-label",children:"Level"})]}),r.jsxs("div",{className:"info-card",children:[r.jsx("div",{className:"info-icon",children:o[C].icon}),r.jsx("div",{className:"info-value",children:o[C].name}),r.jsx("div",{className:"info-label",children:"Vehicle"})]}),r.jsxs("div",{className:`cards-section ${M?"animating":""}`,children:[r.jsx("div",{className:"cards-label",children:"Your Cards"}),r.jsx("div",{className:"card-grid",children:E.map((W,P)=>r.jsxs("div",{className:"card-item",onClick:()=>V(W),children:[r.jsxs("div",{className:"large-card",children:[r.jsx("div",{className:"large-card-icon",children:W.icon}),r.jsx("div",{className:"large-card-name",children:W.name})]}),W.count>1&&r.jsx("div",{className:"card-count-badge",children:W.count})]},P))})]})]})})]}),r.jsx("div",{className:"scrollable-journey",children:r.jsx("div",{className:"journey-container",ref:Z,children:r.jsxs("div",{className:"journey-track",children:[r.jsx("div",{className:"curvy-road",children:r.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[r.jsx("defs",{children:r.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[r.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),r.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),r.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),r.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-l/(i.length-1)*1500})]})}),r.jsxs("div",{className:"avatar-tracker",style:{top:`${J()}px`},children:[r.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:W=>{W.target.style.display="none"}}),r.jsx("div",{className:"tracker-vehicle",children:o[C].icon})]}),r.jsx("div",{className:"rewards-list",children:i.map((W,P)=>{const te=P%2===0,ne=P>l,oe=w.includes(P),ue=P===l;return r.jsx("div",{className:"reward-row","data-index":P,style:{top:`${K(P)}px`},children:r.jsxs("div",{className:`reward-item ${te?"left":"right"}`,children:[r.jsxs("div",{className:`checkpoint ${ue?"current":oe?"claimed":ne?"locked":""}`,onClick:()=>z(P,W),children:[r.jsx("div",{className:"checkpoint-icon",children:W.icon}),r.jsx("div",{className:"checkpoint-value",children:W.label.split(" ")[0]}),W.milestone&&r.jsx("div",{className:"milestone-badge",children:"BONUS"}),ne&&r.jsx("div",{className:"lock-icon",children:"🔒"})]}),r.jsxs("div",{className:"reward-info",children:[r.jsx("div",{className:"reward-name",children:W.label}),r.jsxs("div",{className:"step-label",children:["Step ",P+1]})]})]})},W.id)})})]})})}),D&&r.jsx("div",{className:"flying-card",style:{left:`${D.startX}px`,top:`${D.startY}px`,"--startX":`${D.startX}px`},children:D.icon}),r.jsx(Kl,{children:X&&r.jsx("div",{className:"claim-overlay",onClick:()=>V(null),children:r.jsxs("div",{className:"modal",onClick:W=>W.stopPropagation(),children:[r.jsx("div",{className:"modal-icon",children:X.icon}),r.jsx("div",{className:"card-detail-name",children:X.name}),r.jsxs("div",{className:"card-detail-desc",children:["You have ",X.count," of these cards"]}),r.jsx("div",{className:"modal-buttons",children:r.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>V(null),children:"Close"})})]})})}),r.jsx(Kl,{children:A&&H&&r.jsx("div",{className:"claim-overlay",children:r.jsxs("div",{className:"modal",children:[r.jsx("div",{className:"modal-title",children:"WELL DONE!"}),r.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),r.jsx("div",{className:"modal-icon",children:H.icon}),r.jsxs("div",{className:"modal-value",children:["+",H.value," ",H.type==="coins"?"Coins":H.type==="life"?"Lives":H.label]})]})})}),r.jsx(Kl,{children:F&&H&&r.jsx("div",{className:"claim-overlay",onClick:()=>q(!1),children:r.jsxs("div",{className:"modal",onClick:W=>W.stopPropagation(),children:[r.jsx("div",{className:"modal-icon",children:"🪙"}),r.jsx("div",{className:"modal-title",children:"Need More Coins"}),r.jsx("div",{className:"modal-subtitle",children:H.cost>0?`You need ${H.cost-d} more coins`:"Complete previous rewards first"}),r.jsxs("div",{className:"modal-buttons",children:[r.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>s("/play"),children:"Play Quiz"}),r.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>q(!1),children:"Cancel"})]})]})})})]})},Mi=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function a2(){const[e,t]=u.useState(null),n=Mi.filter(a=>a.unlocked).length,s=Math.round(n/Mi.length*100);return r.jsxs("div",{className:"badges-screen",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:"header",children:[r.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),r.jsxs("div",{className:"title-section",children:[r.jsx("h1",{className:"main-title",children:"Badge Collection"}),r.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),r.jsxs("div",{className:"progress-card",children:[r.jsxs("div",{className:"progress-header",children:[r.jsx("span",{className:"progress-label",children:"Collection Progress"}),r.jsxs("span",{className:"progress-value",children:[n,"/",Mi.length]})]}),r.jsx("div",{className:"progress-bar-container",children:r.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),r.jsx("div",{className:"badges-grid",children:Mi.map(a=>r.jsxs("div",{className:`badge-card ${a.unlocked?"unlocked":""}`,style:{"--badge-color":a.color},onClick:()=>t(a),children:[r.jsx("div",{className:"badge-glow"}),r.jsx("div",{className:"badge-emoji",children:a.emoji}),r.jsx("div",{className:"badge-name",children:a.name}),!a.unlocked&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"badge-progress",children:r.jsx("div",{className:"badge-progress-fill",style:{width:`${a.progress}%`}})}),r.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},a.id))}),r.jsxs("div",{className:"tips-card",children:[r.jsxs("div",{className:"tips-title",children:[r.jsx("span",{children:"💡"}),r.jsx("span",{children:"Pro Tip"})]}),r.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&r.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:r.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[r.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),r.jsx("h3",{className:"modal-title",children:e.name}),r.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),r.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&r.jsxs("div",{className:"modal-progress-section",children:[r.jsx("div",{className:"modal-progress-label",children:"Progress"}),r.jsx("div",{className:"modal-progress-bar",children:r.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),r.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),r.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const i2=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function o2(){qn();const[e,t]=u.useState(i2),[n,s]=u.useState(null),[a,i]=u.useState(ce.getCoins()),[o,l]=u.useState(!1),[c,d]=u.useState([]),f=e.length,m=e.filter(g=>g.current>=g.target).length,h=Math.round(m/f*100);u.useEffect(()=>{const g=setInterval(()=>{d(j=>{const k={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...j.slice(-4),k]})},3e3);return()=>clearInterval(g)},[]);const b=(g,j)=>{s(g),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{var k;t(y=>y.map(x=>x.id===g?{...x,claimed:!0}:x)),i(y=>y+j),ce.addCoins(j,`Achievement: ${((k=e.find(y=>y.id===g))==null?void 0:k.title)||"Completed"}`),s(null),l(!0),setTimeout(()=>l(!1),2e3)},600)};return r.jsxs("div",{className:"achievements-screen",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:"floating-shapes",children:[r.jsx("div",{className:"shape shape-1"}),r.jsx("div",{className:"shape shape-2"})]}),r.jsxs("div",{className:"header",children:[r.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),r.jsxs("div",{className:"coins-display",children:["🪙 ",a.toLocaleString()]}),r.jsxs("div",{className:"title-section",children:[r.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),r.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),r.jsxs("div",{className:"progress-overview",children:[r.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),r.jsxs("div",{className:"overview-header",children:[r.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),r.jsxs("div",{className:"overview-stats",children:[r.jsx("span",{className:"trophy-icon",children:"🏆"}),r.jsxs("span",{className:"overview-value",children:[m,"/",f]})]})]}),r.jsx("div",{className:"progress-bar-main",children:r.jsx("div",{className:"progress-fill-main",style:{width:`${h}%`}})})]}),r.jsx("div",{className:"achievements-list",children:e.map(g=>{const j=Math.min(100,Math.round(g.current/g.target*100)),k=j===100,y=g.color+"CC";return r.jsxs("div",{className:`achievement-card ${k?"completed":""}`,style:{"--card-color":g.color,"--card-color-dark":y},children:[r.jsx("div",{className:"card-glow"}),k&&g.claimed&&r.jsx("div",{className:"completed-badge",children:"✓"}),r.jsxs("div",{className:"card-content",children:[r.jsx("div",{className:"achievement-icon",children:g.icon}),r.jsxs("div",{className:"achievement-details",children:[r.jsx("div",{className:"achievement-title",children:g.title}),r.jsx("div",{className:"achievement-subtitle",children:g.subtitle}),r.jsxs("div",{className:"progress-container",children:[r.jsx("div",{className:"progress-bar",children:r.jsx("div",{className:"progress-fill",style:{width:`${j}%`}})}),r.jsxs("div",{className:"progress-text",children:[r.jsxs("span",{children:[g.current,"/",g.target]}),r.jsxs("span",{className:"reward-badge",children:["🪙 ",g.reward]})]})]})]}),r.jsx("button",{onClick:()=>b(g.id,g.reward),disabled:!k||g.claimed,className:`claim-button ${g.claimed?"claimed":k?"can-claim":"in-progress"} ${n===g.id?"claiming":""}`,children:g.claimed?"✓":k?"CLAIM!":`${j}%`})]})]},g.id)})}),o&&r.jsx("div",{className:"celebration",children:"🎉"})]})}function l2(){const{player:e,updateDailyStreak:t}=qn(),n=(e==null?void 0:e.currentStreak)||0,s=(e==null?void 0:e.bestStreak)||0,a=(e==null?void 0:e.totalDays)||0;e!=null&&e.coins;const i=ke(),o=new Date,l=o.getDay(),c=()=>{const R=new Date(o);return R.setDate(o.getDate()-o.getDay()),R.toISOString().split("T")[0]},[d,f]=u.useState(null),[m,h]=u.useState(!1),[b,g]=u.useState(null),[j,k]=u.useState(null),[y,x]=u.useState(!1),v=u.useRef(null),N=u.useRef(null),[C]=st("/sounds/coin.mp3",{volume:.75}),[I]=st("/sounds/correct.mp3",{volume:.6}),[E,p]=u.useState(()=>{const R=localStorage.getItem("streaks_claimed")||"[]",L=JSON.parse(R),D=c(),T=L.filter(M=>M!==`week_${D}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(T)),T});u.useEffect(()=>{const R=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const D=document.querySelector("main");D&&(D.scrollTop=0)};R(),requestAnimationFrame(R);const L=setTimeout(R,100);return()=>clearTimeout(L)},[]),u.useEffect(()=>{x(!0),setTimeout(()=>x(!1),3e3)},[]);const w=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],S=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],A=R=>{const L=E.includes(`week_${c()}_day_${R}`);if(R===0)return{isCompleted:!0,isClaimed:L,canClaim:!L,isLocked:!1};const D=n>=R,T=D&&!L,M=n<R;return{isCompleted:D,isClaimed:L,canClaim:T,isLocked:M}},_=(R,L,D)=>{const T=A(L);if(T.isLocked){k({day:L,currentStreak:n}),setTimeout(()=>k(null),2e3);return}T.isClaimed||T.canClaim&&(f({...R,day:L}),h(!1),setTimeout(()=>{h(!0),I(),setTimeout(()=>{if(R.type==="coins"){const G=parseInt(R.reward);if(N.current&&v.current){const $=N.current.getBoundingClientRect();C(),g({startRect:$,count:10,amount:G})}}const M=`week_${c()}_day_${L}`,U=[...E,M];p(U),localStorage.setItem("streaks_claimed",JSON.stringify(U))},500),setTimeout(()=>{f(null),h(!1)},2500)},500))},F=(R,L)=>{if(w[L].dayIndex===l)return n>0?"today-completed":"today-pending";if(L<w.findIndex(T=>T.dayIndex===l)){const T=w.findIndex(M=>M.dayIndex===l)-L;return n>=T?"completed":"missed"}else return"future"},q=[{days:3,emoji:"⚡",label:"Starter",achieved:n>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:n>=7},{days:30,emoji:"💎",label:"Champion",achieved:n>=30},{days:100,emoji:"👑",label:"Legend",achieved:n>=100}],X=q.find(R=>R.days>n)||q[q.length-1],V=Math.min(100,n/X.days*100),H=()=>{window.location.href="/play"},O=()=>{i(-1)};return r.jsxs("div",{className:"streaks-screen",children:[r.jsx("style",{jsx:!0,children:`
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
      `}),b&&r.jsx(Sr,{startRect:b.startRect,targetRef:v,count:b.count,onDone:()=>{ce.addCoins(b.amount,`Streak Reward - Day ${b.day||""}`),g(null)}}),r.jsxs("div",{className:"header",children:[r.jsxs("div",{className:"header-top",children:[r.jsx("button",{className:"back-button",onClick:O,children:"← Back"}),r.jsxs("div",{className:"coin-pill",ref:v,id:"coin-pill",children:[r.jsx("span",{className:"coin-icon",children:"🪙"}),r.jsx("span",{className:"coin-amount",children:ce.getCoins()})]})]}),r.jsxs("div",{className:"title-section",children:[r.jsx("h1",{className:"main-title",children:"STREAKS"}),r.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),r.jsxs("div",{className:"streak-hero",children:[r.jsx("div",{className:"fire-animation",children:"🔥"}),r.jsx("div",{className:"streak-number",children:n}),r.jsx("div",{className:"streak-label",children:"DAY STREAK"}),r.jsxs("div",{className:"stats-row",children:[r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-value",children:s}),r.jsx("div",{className:"stat-label",children:"Best Streak"})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-value",children:a}),r.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),r.jsxs("div",{className:"weekly-progress-card",children:[r.jsxs("div",{className:"weekly-header",children:[r.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),r.jsxs("div",{className:"weekly-counter",children:[r.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),r.jsxs("span",{className:"weekly-counter-text",children:[Math.min(n,7),"/7"]})]})]}),r.jsx("div",{className:"weekly-days",children:w.map((R,L)=>{const D=F(R.dayIndex,L),T=R.dayIndex===l;return r.jsxs("div",{className:"day-item",children:[r.jsx("div",{className:`day-circle ${D}`,children:D==="completed"||D==="today-completed"?"":R.short}),r.jsx("div",{className:`day-label ${T?"today":""}`,children:R.label})]},L)})}),r.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),r.jsx("div",{className:"rewards-grid",children:S.map((R,L)=>{const D=A(R.day);return r.jsxs("div",{className:`reward-item ${D.isLocked?"locked":D.canClaim?"can-claim":D.isClaimed?"completed":""}`,onClick:T=>_(R,R.day),children:[r.jsxs("div",{className:"reward-day",children:["Day ",R.day]}),r.jsx("div",{className:"reward-icon",children:R.icon}),r.jsx("div",{className:"reward-text",children:R.label})]},L)})})]}),r.jsxs("div",{className:"milestone-section",children:[r.jsx("div",{className:"milestone-header",children:"Next Milestone"}),r.jsxs("div",{className:"milestone-progress",children:[r.jsxs("div",{className:"milestone-info",children:[r.jsxs("div",{className:"milestone-current",children:[r.jsx("span",{className:"milestone-emoji",children:X.emoji}),r.jsx("span",{className:"milestone-text",children:X.label})]}),r.jsxs("span",{className:"milestone-target",children:[n,"/",X.days," days"]})]}),r.jsx("div",{className:"progress-bar-container",children:r.jsx("div",{className:"progress-bar-fill",style:{width:`${V}%`}})})]})]}),r.jsx("div",{className:"motivational-text",children:n===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${n} strong! Keep going to unlock more rewards!`}),r.jsxs("button",{className:"play-button",onClick:H,children:[r.jsx("span",{children:"Continue Streak"}),r.jsx("span",{children:"→"})]}),j&&r.jsxs("div",{className:"locked-message",children:[r.jsx("span",{className:"locked-message-icon",children:"🔒"}),r.jsx("span",{className:"locked-message-text",children:j.day===1&&j.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${j.day} streak to unlock this reward!`})]}),d&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"modal-overlay"}),r.jsx("div",{className:"reward-modal",ref:N,children:r.jsxs("div",{className:"gift-box",children:[r.jsxs("div",{className:"gift-box-body",children:[r.jsx("div",{className:"gift-box-ribbon"}),r.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),r.jsx("div",{className:`gift-box-lid ${m?"opening":""}`,children:r.jsx("div",{className:"gift-box-bow",children:"🎀"})}),r.jsxs("div",{className:`gift-content ${m?"show":""}`,children:[r.jsx("div",{className:"gift-content-icon",children:d.icon}),r.jsxs("div",{className:"gift-content-title",children:["Day ",d.day]}),r.jsx("div",{className:"gift-content-desc",children:d.label})]})]})})]}),y&&r.jsx("div",{className:"celebration",children:"🎉"})]})}const c2=()=>{const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},sd=()=>{const e=localStorage.getItem("questProgress");return e?JSON.parse(e):{}},dh=(e,t)=>{const n=sd();n[e]=t,n.date=c2(),localStorage.setItem("questProgress",JSON.stringify(n))};function d2(){const{player:e}=qn(),t=ke(),n=tt(),s=sd(),[a,i]=u.useState([{id:1,title:"Play 3 quizzes today",progress:s.dailyQuizzes||0,target:3,reward:60,claimed:s.dailyQuizzesClaimed||!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy",questType:"dailyQuizzes",route:"/quiz/play",routeParams:"?category=random&difficulty=random&from=quest"},{id:3,title:"Practice 15 questions",progress:s.practiceQuestions||0,target:15,reward:100,claimed:s.practiceQuestionsClaimed||!1,icon:"📚",color:"#FFD93D",difficulty:"Easy",questType:"practiceQuestions",route:"/practice/start",routeParams:"?questions=15&difficulty=easy&category=random&from=quest"},{id:4,title:"Win 5 in a row",progress:s.winStreak||0,target:5,reward:150,claimed:s.winStreakClaimed||!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard",questType:"winStreak",route:"/play",routeParams:"?mode=survival&from=quest"},{id:5,title:"Complete a speed run",progress:s.speedRun||0,target:1,reward:120,claimed:s.speedRunClaimed||!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium",questType:"speedRun",route:"/swipe/random-mix",routeParams:"?from=quest"}]),[o,l]=u.useState(ce.getCoins()),[c,d]=u.useState(null),[f,m]=u.useState(0),h=u.useRef(null),[b,g]=u.useState(null);u.useEffect(()=>{const N=()=>{const I=sd();i(E=>E.map(p=>{const w=p.questType;return I[w]!==void 0?{...p,progress:I[w]}:p}))};window.addEventListener("storage",N);const C=()=>N();return window.addEventListener("focus",C),()=>{window.removeEventListener("storage",N),window.removeEventListener("focus",C)}},[]),u.useEffect(()=>{const N=I=>{console.log("Quest progress update received:",I.detail),i(E=>E.map(p=>p.questType==="practiceQuestions"&&I.detail.practiceQuestions?{...p,progress:I.detail.practiceQuestions}:p))};window.addEventListener("questProgressUpdate",N);const C=setInterval(()=>{try{const I=localStorage.getItem("questProgress");if(I){const E=JSON.parse(I);i(p=>p.map(w=>w.questType==="practiceQuestions"&&E.practiceQuestions&&w.progress!==E.practiceQuestions?{...w,progress:E.practiceQuestions}:w))}}catch(I){console.error("Error checking progress:",I)}},1e3);return()=>{window.removeEventListener("questProgressUpdate",N),clearInterval(C)}},[]),u.useEffect(()=>{var N;if((N=n.state)!=null&&N.questCompleted){const{questType:C,increment:I}=n.state;i(E=>E.map(p=>{if(p.questType===C){const w=Math.min(p.progress+(I||1),p.target);return dh(C,w),{...p,progress:w}}return p})),window.history.replaceState({},document.title)}},[n]),u.useEffect(()=>{const N=a.filter(C=>C.progress>=C.target).length;m(Math.round(N/a.length*100))},[a]),u.useEffect(()=>{l((e==null?void 0:e.coins)||0)},[e==null?void 0:e.coins]);const j=N=>{navigator.vibrate&&navigator.vibrate([20]),sessionStorage.setItem("activeQuest",JSON.stringify({id:N.id,type:N.questType,title:N.title,currentProgress:N.progress,target:N.target})),t(N.route+N.routeParams)},k=()=>{sessionStorage.getItem("questsFromHome")==="true"?(sessionStorage.removeItem("questsFromHome"),t("/")):t("/profile")},y=N=>{navigator.vibrate&&navigator.vibrate([20,10,20]);try{const C=new Audio("/sounds/coin.mp3");C.volume=.75,C.play()}catch{console.log("Sound not available")}d(N.id),g({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(N.reward/10,10),amount:N.reward,questTitle:N.title}),setTimeout(()=>{i(C=>C.map(I=>I.id===N.id?(dh(I.questType+"Claimed",!0),{...I,claimed:!0}):I)),d(null)},600)},x=N=>{switch(N){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},v=()=>{const N=new Date,C=new Date(N);C.setDate(C.getDate()+1),C.setHours(5,0,0,0);const I=C-N,E=Math.floor(I/(1e3*60*60)),p=Math.floor(I%(1e3*60*60)/(1e3*60));return`${E}h ${p}m`};return r.jsxs("div",{className:"quests-screen",children:[b&&r.jsx(Sr,{startRect:b.startRect,targetRef:h,count:b.count,onDone:()=>{l(N=>N+b.amount),ce.addCoins(b.amount,`Quest Reward: ${b.questTitle||"Completed"}`),g(null)}}),r.jsx("style",{jsx:!0,children:`
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
      `}),r.jsxs("div",{className:"animated-bg",children:[r.jsx("div",{className:"floating-icon",children:"🎮"}),r.jsx("div",{className:"floating-icon",children:"🎯"}),r.jsx("div",{className:"floating-icon",children:"🏆"}),r.jsx("div",{className:"floating-icon",children:"⭐"})]}),r.jsxs("div",{className:"header",children:[r.jsx("button",{className:"back-button",onClick:k,children:"← Back"}),r.jsxs("div",{className:"coins-display",ref:h,children:["🪙 ",o]}),r.jsxs("div",{className:"title-section",children:[r.jsx("h1",{className:"main-title",children:"Daily Quests"}),r.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),r.jsxs("div",{className:"daily-progress-card",children:[r.jsxs("div",{className:"progress-header",children:[r.jsx("span",{className:"progress-label",children:"Today's Progress"}),r.jsxs("span",{className:"progress-value",children:[f,"%"]})]}),r.jsx("div",{className:"progress-bar-container",children:r.jsx("div",{className:"progress-bar-fill",style:{width:`${f}%`}})})]}),r.jsx("div",{className:"quests-list",children:a.map(N=>{const C=Math.min(100,Math.round(N.progress/N.target*100)),I=C===100,E=N.color+"CC";return r.jsxs("div",{className:`quest-card ${I?"completed":""}`,style:{"--quest-color":N.color,"--quest-color-dark":E},children:[r.jsx("div",{className:"quest-accent"}),I&&N.claimed&&r.jsx("div",{className:"completed-checkmark",children:"✓"}),r.jsxs("div",{className:"quest-content",children:[r.jsx("div",{className:`quest-icon-container ${c===N.id?"animating":""}`,children:N.icon}),r.jsxs("div",{className:"quest-details",children:[r.jsxs("div",{className:"quest-header",children:[r.jsx("span",{className:"quest-title",children:N.title}),r.jsx("span",{className:"difficulty-badge",style:{background:`${x(N.difficulty)}20`,color:x(N.difficulty)},children:N.difficulty})]}),r.jsxs("div",{className:"progress-info",children:[r.jsx("div",{className:"mini-progress-bar",children:r.jsx("div",{className:"mini-progress-fill",style:{width:`${C}%`}})}),r.jsxs("div",{className:"progress-text",children:[r.jsxs("span",{className:"progress-numbers",children:[N.progress,"/",N.target]}),r.jsxs("span",{className:"reward-display",children:["🪙 ",N.reward]})]})]})]}),r.jsx("button",{onClick:()=>{I&&!N.claimed?y(N):I||j(N)},disabled:N.claimed,className:`action-button ${N.claimed?"claimed":I?"can-claim":"in-progress"}`,style:!I&&!N.claimed?{"--quest-color":N.color,"--quest-color-dark":E}:{},children:N.claimed?"✓":I?"Claim":"Do it"})]})]},N.id)})}),r.jsxs("div",{className:"timer-card",children:[r.jsx("div",{className:"timer-icon",children:"⏰"}),r.jsx("div",{className:"timer-label",children:"New Quests In"}),r.jsx("div",{className:"timer-value",children:v()})]}),c&&r.jsx("div",{className:"reward-animation",children:"🪙"})]})}function gu({title:e,subtitle:t,children:n}){const s=ke();return r.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&r.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),r.jsx("div",{className:"w-[68px]"})]}),n]})}function u2(){const e=ke(),[t,n]=u.useState(!0),[s,a]=u.useState(!0),[i,o]=u.useState(!0),[l,c]=u.useState(!1),[d,f]=u.useState("");u.useEffect(()=>{const h=lt.getCurrentUser();h&&h.phone&&f(h.phone)},[]);const m=()=>{const b=JSON.parse(localStorage.getItem("currentUser")||"{}").phone;localStorage.removeItem("currentUser"),localStorage.removeItem("qp_player"),localStorage.removeItem("rememberCredentials"),sessionStorage.clear(),b?e("/auth/signin",{replace:!0,state:{phone:b}}):e("/auth",{replace:!0})};return r.jsxs(r.Fragment,{children:[r.jsx(gu,{title:"Settings",subtitle:"Make it yours",children:r.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-2",children:[r.jsx("div",{className:"px-4 pt-3 pb-1",children:r.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Preferences"})}),r.jsxs("div",{className:"divide-y divide-white/10",children:[r.jsx(Zr,{icon:"🔊",label:"Sound",subtitle:"Game sounds & effects",right:r.jsx(Xl,{on:t,set:n})}),r.jsx(Zr,{icon:"📳",label:"Haptics",subtitle:"Vibration feedback",right:r.jsx(Xl,{on:s,set:a})}),r.jsx(Zr,{icon:"🔔",label:"Notifications",subtitle:"Daily reminders",right:r.jsx(Xl,{on:i,set:o})})]})]}),r.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-2",children:[r.jsx("div",{className:"px-4 pt-3 pb-1",children:r.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider",children:"Account"})}),r.jsxs("div",{className:"divide-y divide-white/10",children:[r.jsx(Zr,{icon:"📱",label:"Phone Number",subtitle:d||"Not available",right:r.jsx("span",{className:"text-white/40 text-sm",children:"🔒"})}),r.jsx(Zr,{icon:"✏️",label:"Edit Profile",subtitle:"Update your details",right:r.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/edit")}),r.jsx(Zr,{icon:"🔒",label:"Privacy Policy",subtitle:"Your data is safe",right:r.jsx("span",{className:"text-white/40 text-lg",children:"→"}),onClick:()=>e("/profile/privacy")})]})]}),r.jsxs("button",{className:`w-full rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-900/30 to-pink-900/30 
                       py-4 text-red-300 font-semibold backdrop-blur-sm
                       transition-all duration-200 hover:from-red-900/40 hover:to-pink-900/40 
                       active:scale-[0.98] flex items-center justify-center gap-2`,onClick:()=>c(!0),children:[r.jsx("span",{children:"🚪"}),r.jsx("span",{children:"Sign Out"})]})]})})}),l&&r.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:r.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[r.jsxs("div",{className:"text-center mb-6",children:[r.jsx("div",{className:"text-5xl mb-4 animate-bounce",children:"👋"}),r.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leaving Already?"}),r.jsx("p",{className:"text-white/60 text-sm",children:"You'll need to sign in again to continue your quiz journey"})]}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>c(!1),className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Stay"}),r.jsx("button",{onClick:m,className:`flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 
                         hover:from-red-600 hover:to-pink-600 transition-all duration-200 
                         font-semibold text-white shadow-lg`,children:"Sign Out"})]})]})})]})}function Zr({icon:e,label:t,subtitle:n,right:s,onClick:a}){return r.jsxs("button",{type:"button",onClick:a,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition-all duration-200`,children:[r.jsxs("div",{className:"flex items-center gap-3",children:[e&&r.jsx("span",{className:"text-xl",children:e}),r.jsxs("div",{children:[r.jsx("div",{className:"text-sm font-semibold text-white",children:t}),n&&r.jsx("div",{className:"text-xs text-white/50 mt-0.5",children:n})]})]}),s]})}function Xl({on:e,set:t}){return r.jsx("span",{onClick:n=>{n.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-12 h-7 items-center rounded-full transition-all duration-300 px-1 shadow-inner",e?"bg-gradient-to-r from-green-400 to-emerald-500 justify-end":"bg-gray-600 justify-start"].join(" "),role:"switch","aria-checked":e,children:r.jsx("span",{className:["w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300",e?"scale-110":"scale-100"].join(" ")})})}/*! Capacitor: https://capacitorjs.com/ - MIT License */var Ts;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(Ts||(Ts={}));class Jl extends Error{constructor(t,n,s){super(t),this.message=t,this.code=n,this.data=s}}const f2=e=>{var t,n;return e!=null&&e.androidBridge?"android":!((n=(t=e==null?void 0:e.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},h2=e=>{const t=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},s=n.Plugins=n.Plugins||{},a=()=>t!==null?t.name:f2(e),i=()=>a()!=="web",o=m=>{const h=d.get(m);return!!(h!=null&&h.platforms.has(a())||l(m))},l=m=>{var h;return(h=n.PluginHeaders)===null||h===void 0?void 0:h.find(b=>b.name===m)},c=m=>e.console.error(m),d=new Map,f=(m,h={})=>{const b=d.get(m);if(b)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),b.proxy;const g=a(),j=l(m);let k;const y=async()=>(!k&&g in h?k=typeof h[g]=="function"?k=await h[g]():k=h[g]:t!==null&&!k&&"web"in h&&(k=typeof h.web=="function"?k=await h.web():k=h.web),k),x=(p,w)=>{var S,A;if(j){const _=j==null?void 0:j.methods.find(F=>w===F.name);if(_)return _.rtype==="promise"?F=>n.nativePromise(m,w.toString(),F):(F,q)=>n.nativeCallback(m,w.toString(),F,q);if(p)return(S=p[w])===null||S===void 0?void 0:S.bind(p)}else{if(p)return(A=p[w])===null||A===void 0?void 0:A.bind(p);throw new Jl(`"${m}" plugin is not implemented on ${g}`,Ts.Unimplemented)}},v=p=>{let w;const S=(...A)=>{const _=y().then(F=>{const q=x(F,p);if(q){const X=q(...A);return w=X==null?void 0:X.remove,X}else throw new Jl(`"${m}.${p}()" is not implemented on ${g}`,Ts.Unimplemented)});return p==="addListener"&&(_.remove=async()=>w()),_};return S.toString=()=>`${p.toString()}() { [capacitor code] }`,Object.defineProperty(S,"name",{value:p,writable:!1,configurable:!1}),S},N=v("addListener"),C=v("removeListener"),I=(p,w)=>{const S=N({eventName:p},w),A=async()=>{const F=await S;C({eventName:p,callbackId:F},w)},_=new Promise(F=>S.then(()=>F({remove:A})));return _.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await A()},_},E=new Proxy({},{get(p,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return j?I:N;case"removeListener":return C;default:return v(w)}}});return s[m]=E,d.set(m,{name:m,proxy:E,platforms:new Set([...Object.keys(h),...j?[g]:[]])}),E};return n.convertFileSrc||(n.convertFileSrc=m=>m),n.getPlatform=a,n.handleError=c,n.isNativePlatform=i,n.isPluginAvailable=o,n.registerPlugin=f,n.Exception=Jl,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},m2=e=>e.Capacitor=h2(e),Do=m2(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ri=Do.registerPlugin;class D0{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,n){let s=!1;this.listeners[t]||(this.listeners[t]=[],s=!0),this.listeners[t].push(n);const i=this.windowListeners[t];i&&!i.registered&&this.addWindowListener(i),s&&this.sendRetainedArgumentsForEvent(t);const o=async()=>this.removeListener(t,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,n,s){const a=this.listeners[t];if(!a){if(s){let i=this.retainedEventArguments[t];i||(i=[]),i.push(n),this.retainedEventArguments[t]=i}return}a.forEach(i=>i(n))}hasListeners(t){var n;return!!(!((n=this.listeners[t])===null||n===void 0)&&n.length)}registerWindowListener(t,n){this.windowListeners[n]={registered:!1,windowEventName:t,pluginEventName:n,handler:s=>{this.notifyListeners(n,s)}}}unimplemented(t="not implemented"){return new Do.Exception(t,Ts.Unimplemented)}unavailable(t="not available"){return new Do.Exception(t,Ts.Unavailable)}async removeListener(t,n){const s=this.listeners[t];if(!s)return;const a=s.indexOf(n);this.listeners[t].splice(a,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const n=this.retainedEventArguments[t];n&&(delete this.retainedEventArguments[t],n.forEach(s=>{this.notifyListeners(t,s)}))}}const uh=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),fh=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class p2 extends D0{async getCookies(){const t=document.cookie,n={};return t.split(";").forEach(s=>{if(s.length<=0)return;let[a,i]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=fh(a).trim(),i=fh(i).trim(),n[a]=i}),n}async setCookie(t){try{const n=uh(t.key),s=uh(t.value),a=`; expires=${(t.expires||"").replace("expires=","")}`,i=(t.path||"/").replace("path=",""),o=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${n}=${s||""}${a}; path=${i}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const n of t)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}ri("CapacitorCookies",{web:()=>new p2});const g2=async e=>new Promise((t,n)=>{const s=new FileReader;s.onload=()=>{const a=s.result;t(a.indexOf(",")>=0?a.split(",")[1]:a)},s.onerror=a=>n(a),s.readAsDataURL(e)}),x2=(e={})=>{const t=Object.keys(e);return Object.keys(e).map(a=>a.toLocaleLowerCase()).reduce((a,i,o)=>(a[i]=e[t[o]],a),{})},v2=(e,t=!0)=>e?Object.entries(e).reduce((s,a)=>{const[i,o]=a;let l,c;return Array.isArray(o)?(c="",o.forEach(d=>{l=t?encodeURIComponent(d):d,c+=`${i}=${l}&`}),c.slice(0,-1)):(l=t?encodeURIComponent(o):o,c=`${i}=${l}`),`${s}&${c}`},"").substr(1):null,y2=(e,t={})=>{const n=Object.assign({method:e.method||"GET",headers:e.headers},t),a=x2(e.headers)["content-type"]||"";if(typeof e.data=="string")n.body=e.data;else if(a.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[o,l]of Object.entries(e.data||{}))i.set(o,l);n.body=i.toString()}else if(a.includes("multipart/form-data")||e.data instanceof FormData){const i=new FormData;if(e.data instanceof FormData)e.data.forEach((l,c)=>{i.append(c,l)});else for(const l of Object.keys(e.data))i.append(l,e.data[l]);n.body=i;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(a.includes("application/json")||typeof e.data=="object")&&(n.body=JSON.stringify(e.data));return n};class b2 extends D0{async request(t){const n=y2(t,t.webFetchExtra),s=v2(t.params,t.shouldEncodeUrlParams),a=s?`${t.url}?${s}`:t.url,i=await fetch(a,n),o=i.headers.get("content-type")||"";let{responseType:l="text"}=i.ok?t:{};o.includes("application/json")&&(l="json");let c,d;switch(l){case"arraybuffer":case"blob":d=await i.blob(),c=await g2(d);break;case"json":c=await i.json();break;case"document":case"text":default:c=await i.text()}const f={};return i.headers.forEach((m,h)=>{f[h]=m}),{data:c,headers:f,status:i.status,url:i.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}ri("CapacitorHttp",{web:()=>new b2});const hh=ri("App",{web:()=>ei(()=>import("./web-f9f7197b.js"),[]).then(e=>new e.AppWeb)});function w2(){const e=ke(),[t,n]=u.useState(!1),[s,a]=u.useState(!1),[i,o]=u.useState(!1),[l,c]=u.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""}),[d,f]=u.useState({name:"",phone:"",gender:"",ageGroup:"",city:"",email:"",state:"",country:""});u.useEffect(()=>{const j=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!j.phone){const N=JSON.parse(localStorage.getItem("users")||"{}"),C=Object.keys(N).find(I=>N[I].username===j.username);if(C)j.phone=C,localStorage.setItem("currentUser",JSON.stringify(j));else{e("/profile");return}}const k=lt.getUserData(j.phone);k.password;const y=JSON.parse(localStorage.getItem(`user_profile_${j.phone}`)||"{}"),x=N=>N?N.charAt(0).toUpperCase()+N.slice(1).toLowerCase():"",v={name:y.name||j.username||k.username||"",phone:j.phone||"",gender:x(y.gender||j.gender||k.gender||""),ageGroup:y.ageGroup||j.ageGroup||k.ageGroup||"",city:y.city||"",email:y.email||"",state:y.state||"",country:y.country||""};c(v),f(v)},[e]),u.useEffect(()=>{if(t){const j=JSON.stringify(l)!==JSON.stringify(d);o(j)}},[d,l,t]);const m=()=>{n(!0),f({...l}),o(!1)},h=()=>{n(!1),f({...l}),o(!1)},b=()=>{const j=JSON.parse(localStorage.getItem("currentUser")||"{}");if(!j.phone)return;lt.updateUserProfile(j.phone,d)&&(c({...d}),n(!1),o(!1),a(!0),setTimeout(()=>a(!1),3e3))},g=(j,k)=>{f(y=>({...y,[j]:k}))};return r.jsxs(gu,{title:"Edit Profile",subtitle:"Update your information",children:[s&&r.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:r.jsx("div",{className:"bg-green-500/20 border border-green-500/50 rounded-2xl px-8 py-4 backdrop-blur-sm animate-bounce",children:r.jsxs("div",{className:"flex items-center gap-2 text-green-400 font-semibold text-lg",children:[r.jsx("span",{children:"Profile updated"}),r.jsx("span",{className:"text-2xl",children:"✓"})]})})}),r.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-4",children:[r.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Basic Information"}),r.jsxs("div",{className:"space-y-3",children:[r.jsx(Qn,{label:"Name",value:t?d.name:l.name,onChange:j=>g("name",j),placeholder:"Your full name",disabled:!t}),r.jsx(Qn,{label:"Phone",value:l.phone,disabled:!0,icon:"🔒",helperText:"Cannot be changed"}),r.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[t?r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Gender"}),r.jsxs("select",{value:d.gender||"",onChange:j=>g("gender",j.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[r.jsx("option",{value:"",children:"Not set"}),r.jsx("option",{value:"Male",children:"Male"}),r.jsx("option",{value:"Female",children:"Female"}),r.jsx("option",{value:"Other",children:"Other"})]})]}):r.jsx(Qn,{label:"Gender",value:l.gender||"Not set",disabled:!0}),t?r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Age Group"}),r.jsxs("select",{value:d.ageGroup||"",onChange:j=>g("ageGroup",j.target.value),className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                                text-white transition-all duration-200 hover:bg-white/10 
                                focus:bg-white/10 focus:border-white/30 focus:outline-none`,children:[r.jsx("option",{value:"",children:"Not set"}),r.jsx("option",{value:"under-5",children:"Under 5 yrs"}),r.jsx("option",{value:"5-10",children:"5-10 yrs"}),r.jsx("option",{value:"11-15",children:"11-15 yrs"}),r.jsx("option",{value:"16-20",children:"16-20 yrs"}),r.jsx("option",{value:"20+",children:"20+ yrs"})]})]}):r.jsx(Qn,{label:"Age Group",value:l.ageGroup||"Not set",disabled:!0})]})]})]}),r.jsxs("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-4",children:[r.jsx("h3",{className:"text-xs font-semibold text-white/50 uppercase tracking-wider mb-4",children:"Contact & Location"}),r.jsxs("div",{className:"space-y-3",children:[r.jsx(Qn,{label:"Email",value:t?d.email:l.email,onChange:j=>g("email",j),placeholder:"yourname@example.com",type:"email",helperText:t?"Optional":l.email?"":"Not provided",disabled:!t}),r.jsx(Qn,{label:"City",value:t?d.city:l.city,onChange:j=>g("city",j),placeholder:"Add your city name",disabled:!t}),r.jsx(Qn,{label:"State",value:t?d.state:l.state,onChange:j=>g("state",j),placeholder:"Your state/province",disabled:!t}),r.jsx(Qn,{label:"Country",value:t?d.country:l.country,onChange:j=>g("country",j),placeholder:"Your country",disabled:!t})]})]}),t?r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:h,className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Cancel"}),r.jsx("button",{onClick:b,disabled:!i,className:`flex-1 py-3 rounded-2xl font-semibold text-white shadow-lg
                         transition-all duration-200 ${i?"bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 cursor-pointer":"bg-gray-600 cursor-not-allowed opacity-50"}`,children:"Save Changes"})]}):r.jsx("button",{onClick:m,className:`w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Edit"})]})})]})}function Qn({label:e,value:t,onChange:n,disabled:s,placeholder:a,type:i="text",icon:o,helperText:l}){return r.jsxs("div",{children:[r.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:e}),r.jsxs("div",{className:"relative",children:[r.jsx("input",{type:i,value:t||"",onChange:c=>n&&n(c.target.value),disabled:s,placeholder:a,className:`w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                   text-white placeholder-white/30 transition-all duration-200
                   ${s?"opacity-50 cursor-not-allowed":"hover:bg-white/10 focus:bg-white/10 focus:border-white/30 focus:outline-none"}`}),o&&r.jsx("span",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/50",children:o})]}),l&&r.jsx("p",{className:"text-xs text-white/40 mt-1",children:l})]})}function j2(){const e=ke();return r.jsx(gu,{title:"Privacy Policy",subtitle:"Your data, your control",children:r.jsx("div",{className:"flex flex-col justify-center min-h-[calc(100vh-200px)]",children:r.jsx("div",{className:"rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-8",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-6xl mb-4",children:"🔒"}),r.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Privacy Policy"}),r.jsx("p",{className:"text-white/60 text-lg mb-6",children:"Will be updated soon"}),r.jsxs("div",{className:"space-y-3 text-left text-white/50 text-sm",children:[r.jsx("p",{children:"• Your data is encrypted and secure"}),r.jsx("p",{children:"• We never share your personal information"}),r.jsx("p",{children:"• You can delete your account anytime"}),r.jsx("p",{children:"• Minimal data collection for best experience"})]}),r.jsx("button",{onClick:()=>e(-1),className:`mt-8 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 transition-all duration-200 
                       font-semibold text-white shadow-lg`,children:"Got it"})]})})})})}const N2=async e=>!!JSON.parse(localStorage.getItem("users")||"{}")[e],k2=e=>JSON.parse(localStorage.getItem("users")||"{}")[e],S2=()=>!!localStorage.getItem("currentUser"),C2=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let a=e.charCodeAt(s);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):(a&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},E2=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const a=e[n++];if(a<128)t[s++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[s++]=String.fromCharCode((a&31)<<6|i&63)}else if(a>239&&a<365){const i=e[n++],o=e[n++],l=e[n++],c=((a&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((a&15)<<12|(i&63)<<6|o&63)}}return t.join("")},O0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<e.length;a+=3){const i=e[a],o=a+1<e.length,l=o?e[a+1]:0,c=a+2<e.length,d=c?e[a+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let h=(l&15)<<2|d>>6,b=d&63;c||(b=64,o||(h=64)),s.push(n[f],n[m],n[h],n[b])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(L0(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):E2(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<e.length;){const i=n[e.charAt(a++)],l=a<e.length?n[e.charAt(a)]:0;++a;const d=a<e.length?n[e.charAt(a)]:64;++a;const m=a<e.length?n[e.charAt(a)]:64;if(++a,i==null||l==null||d==null||m==null)throw new _2;const h=i<<2|l>>4;if(s.push(h),d!==64){const b=l<<4&240|d>>2;if(s.push(b),m!==64){const g=d<<6&192|m;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class _2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I2=function(e){const t=L0(e);return O0.encodeByteArray(t,!0)},Lo=function(e){return I2(e).replace(/\./g,"")},M0=function(e){try{return O0.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=()=>T2().__FIREBASE_DEFAULTS__,R2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},A2=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&M0(e[1]);return t&&JSON.parse(t)},ll=()=>{try{return C2()||P2()||R2()||A2()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},z0=e=>{var t,n;return(n=(t=ll())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},pS=e=>{const t=z0(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},F0=()=>{var e;return(e=ll())===null||e===void 0?void 0:e.config},$0=e=>{var t;return(t=ll())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function L2(e){return(await fetch(e,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",a=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[Lo(JSON.stringify(n)),Lo(JSON.stringify(o)),l].join(".")}const wa={};function O2(){const e={prod:[],emulator:[]};for(const t of Object.keys(wa))wa[t]?e.emulator.push(t):e.prod.push(t);return e}function M2(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let mh=!1;function z2(e,t){if(typeof window>"u"||typeof document>"u"||!cl(window.location.host)||wa[e]===t||wa[e]||mh)return;wa[e]=t;function n(h){return`__firebase__banner__${h}`}const s="__firebase__banner",i=O2().prod.length>0;function o(){const h=document.getElementById(s);h&&h.remove()}function l(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,b){h.setAttribute("width","24"),h.setAttribute("id",b),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function d(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{mh=!0,o()},h}function f(h,b){h.setAttribute("id",b),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function m(){const h=M2(s),b=n("text"),g=document.getElementById(b)||document.createElement("span"),j=n("learnmore"),k=document.getElementById(j)||document.createElement("a"),y=n("preprendIcon"),x=document.getElementById(y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const v=h.element;l(v),f(k,j);const N=d();c(x,y),v.append(x,g,k,N),document.body.appendChild(v)}i?(g.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function F2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function $2(){var e;const t=(e=ll())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function U2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function B2(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function W2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function H2(){const e=At();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function xS(){return!$2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function q2(){try{return typeof indexedDB=="object"}catch{return!1}}function Y2(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var i;t(((i=a.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2="FirebaseError";class Ir extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=G2,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},a=`${this.service}/${t}`,i=this.errors[t],o=i?V2(i,s):"Error",l=`${this.serviceName}: ${o} (${a}).`;return new Ir(a,l,s)}}function V2(e,t){return e.replace(Q2,(n,s)=>{const a=t[s];return a!=null?String(a):`<${s}?>`})}const Q2=/\{\$([^}]+)}/g;function K2(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ps(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const a of n){if(!s.includes(a))return!1;const i=e[a],o=t[a];if(ph(i)&&ph(o)){if(!Ps(i,o))return!1}else if(i!==o)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function ph(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(a=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function la(e){const t={};return e.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,i]=s.split("=");t[decodeURIComponent(a)]=decodeURIComponent(i)}}),t}function ca(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function X2(e,t){const n=new J2(e,t);return n.subscribe.bind(n)}class J2{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let a;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Z2(t,["next","error","complete"])?a=t:a={next:t,error:n,complete:s},a.next===void 0&&(a.next=Zl),a.error===void 0&&(a.error=Zl),a.complete===void 0&&(a.complete=Zl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Z2(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Zl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){return e&&e._delegate?e._delegate:e}class Rs{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new D2;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),a=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(a)return null;throw i}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(n5(t))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:a});s.resolve(i)}catch{}}}}clearInstance(t=Dr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Dr){return this.instances.has(t)}getOptions(t=Dr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(a)}return a}onInit(t,n){var s;const a=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(a,i);const o=this.instances.get(a);return o&&t(o,a),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:t5(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Dr){return this.component?this.component.multipleInstances?t:Dr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function t5(e){return e===Dr?void 0:e}function n5(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new e5(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Re||(Re={}));const s5={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},a5=Re.INFO,i5={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},o5=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),a=i5[t];if(a)console[a](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class U0{constructor(t){this.name=t,this._logLevel=a5,this._logHandler=o5,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?s5[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...t),this._logHandler(this,Re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...t),this._logHandler(this,Re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...t),this._logHandler(this,Re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...t),this._logHandler(this,Re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...t),this._logHandler(this,Re.ERROR,...t)}}const l5=(e,t)=>t.some(n=>e instanceof n);let gh,xh;function c5(){return gh||(gh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d5(){return xh||(xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const B0=new WeakMap,ad=new WeakMap,W0=new WeakMap,ec=new WeakMap,xu=new WeakMap;function u5(e){const t=new Promise((n,s)=>{const a=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(br(e.result)),a()},o=()=>{s(e.error),a()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&B0.set(n,e)}).catch(()=>{}),xu.set(t,e),t}function f5(e){if(ad.has(e))return;const t=new Promise((n,s)=>{const a=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),a()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ad.set(e,t)}let id={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ad.get(e);if(t==="objectStoreNames")return e.objectStoreNames||W0.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function h5(e){id=e(id)}function m5(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(tc(this),t,...n);return W0.set(s,t.sort?t.sort():[t]),br(s)}:d5().includes(e)?function(...t){return e.apply(tc(this),t),br(B0.get(this))}:function(...t){return br(e.apply(tc(this),t))}}function p5(e){return typeof e=="function"?m5(e):(e instanceof IDBTransaction&&f5(e),l5(e,c5())?new Proxy(e,id):e)}function br(e){if(e instanceof IDBRequest)return u5(e);if(ec.has(e))return ec.get(e);const t=p5(e);return t!==e&&(ec.set(e,t),xu.set(t,e)),t}const tc=e=>xu.get(e);function g5(e,t,{blocked:n,upgrade:s,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),l=br(o);return s&&o.addEventListener("upgradeneeded",c=>{s(br(o.result),c.oldVersion,c.newVersion,br(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),a&&c.addEventListener("versionchange",d=>a(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const x5=["get","getKey","getAll","getAllKeys","count"],v5=["put","add","delete","clear"],nc=new Map;function vh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(nc.get(t))return nc.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,a=v5.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||x5.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,a?"readwrite":"readonly");let d=c.store;return s&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),a&&c.done]))[0]};return nc.set(t,i),i}h5(e=>({...e,get:(t,n,s)=>vh(t,n)||e.get(t,n,s),has:(t,n)=>!!vh(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y5{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(b5(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function b5(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const od="@firebase/app",yh="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new U0("@firebase/app"),w5="@firebase/app-compat",j5="@firebase/analytics-compat",N5="@firebase/analytics",k5="@firebase/app-check-compat",S5="@firebase/app-check",C5="@firebase/auth",E5="@firebase/auth-compat",_5="@firebase/database",I5="@firebase/data-connect",T5="@firebase/database-compat",P5="@firebase/functions",R5="@firebase/functions-compat",A5="@firebase/installations",D5="@firebase/installations-compat",L5="@firebase/messaging",O5="@firebase/messaging-compat",M5="@firebase/performance",z5="@firebase/performance-compat",F5="@firebase/remote-config",$5="@firebase/remote-config-compat",U5="@firebase/storage",B5="@firebase/storage-compat",W5="@firebase/firestore",H5="@firebase/ai",q5="@firebase/firestore-compat",Y5="firebase",G5="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="[DEFAULT]",V5={[od]:"fire-core",[w5]:"fire-core-compat",[N5]:"fire-analytics",[j5]:"fire-analytics-compat",[S5]:"fire-app-check",[k5]:"fire-app-check-compat",[C5]:"fire-auth",[E5]:"fire-auth-compat",[_5]:"fire-rtdb",[I5]:"fire-data-connect",[T5]:"fire-rtdb-compat",[P5]:"fire-fn",[R5]:"fire-fn-compat",[A5]:"fire-iid",[D5]:"fire-iid-compat",[L5]:"fire-fcm",[O5]:"fire-fcm-compat",[M5]:"fire-perf",[z5]:"fire-perf-compat",[F5]:"fire-rc",[$5]:"fire-rc-compat",[U5]:"fire-gcs",[B5]:"fire-gcs-compat",[W5]:"fire-fst",[q5]:"fire-fst-compat",[H5]:"fire-vertex","fire-js":"fire-js",[Y5]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Map,Q5=new Map,cd=new Map;function bh(e,t){try{e.container.addComponent(t)}catch(n){$n.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ha(e){const t=e.name;if(cd.has(t))return $n.debug(`There were multiple attempts to register component ${t}.`),!1;cd.set(t,e);for(const n of Oo.values())bh(n,e);for(const n of Q5.values())bh(n,e);return!0}function H0(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function mt(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K5={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new si("app","Firebase",K5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X5{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=G5;function q0(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:ld,automaticDataCollectionEnabled:!0},t),a=s.name;if(typeof a!="string"||!a)throw wr.create("bad-app-name",{appName:String(a)});if(n||(n=F0()),!n)throw wr.create("no-options");const i=Oo.get(a);if(i){if(Ps(n,i.options)&&Ps(s,i.config))return i;throw wr.create("duplicate-app",{appName:a})}const o=new r5(a);for(const c of cd.values())o.addComponent(c);const l=new X5(n,s,o);return Oo.set(a,l),l}function J5(e=ld){const t=Oo.get(e);if(!t&&e===ld&&F0())return q0();if(!t)throw wr.create("no-app",{appName:e});return t}function vs(e,t,n){var s;let a=(s=V5[e])!==null&&s!==void 0?s:e;n&&(a+=`-${n}`);const i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const l=[`Unable to register library "${a}" with version "${t}":`];i&&l.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}Ha(new Rs(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z5="firebase-heartbeat-database",ej=1,qa="firebase-heartbeat-store";let rc=null;function Y0(){return rc||(rc=g5(Z5,ej,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(qa)}catch(n){console.warn(n)}}}}).catch(e=>{throw wr.create("idb-open",{originalErrorMessage:e.message})})),rc}async function tj(e){try{const n=(await Y0()).transaction(qa),s=await n.objectStore(qa).get(G0(e));return await n.done,s}catch(t){if(t instanceof Ir)$n.warn(t.message);else{const n=wr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$n.warn(n.message)}}}async function wh(e,t){try{const s=(await Y0()).transaction(qa,"readwrite");await s.objectStore(qa).put(t,G0(e)),await s.done}catch(n){if(n instanceof Ir)$n.warn(n.message);else{const s=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(s.message)}}}function G0(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nj=1024,rj=30;class sj{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ij(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=jh();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:a}),this._heartbeatsCache.heartbeats.length>rj){const o=oj(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){$n.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jh(),{heartbeatsToSend:s,unsentEntries:a}=aj(this._heartbeatsCache.heartbeats),i=Lo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $n.warn(n),""}}}function jh(){return new Date().toISOString().substring(0,10)}function aj(e,t=nj){const n=[];let s=e.slice();for(const a of e){const i=n.find(o=>o.agent===a.agent);if(i){if(i.dates.push(a.date),Nh(n)>t){i.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Nh(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ij{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return q2()?Y2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tj(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return wh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return wh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function Nh(e){return Lo(JSON.stringify({version:2,heartbeats:e})).length}function oj(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let s=1;s<e.length;s++)e[s].date<n&&(n=e[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lj(e){Ha(new Rs("platform-logger",t=>new y5(t),"PRIVATE")),Ha(new Rs("heartbeat",t=>new sj(t),"PRIVATE")),vs(od,yh,e),vs(od,yh,"esm2017"),vs("fire-js","")}lj("");var cj="firebase",dj="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vs(cj,dj,"app");function vu(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(n[s[a]]=e[s[a]]);return n}function V0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uj=V0,Q0=new si("auth","Firebase",V0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new U0("@firebase/auth");function fj(e,...t){Mo.logLevel<=Re.WARN&&Mo.warn(`Auth (${ai}): ${e}`,...t)}function to(e,...t){Mo.logLevel<=Re.ERROR&&Mo.error(`Auth (${ai}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e,...t){throw bu(e,...t)}function Bt(e,...t){return bu(e,...t)}function yu(e,t,n){const s=Object.assign(Object.assign({},uj()),{[t]:n});return new si("auth","Firebase",s).create(t,{appName:e.name})}function Rt(e){return yu(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dl(e,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&an(e,"argument-error"),yu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bu(e,...t){if(typeof e!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Q0.create(e,...t)}function ae(e,t,...n){if(!e)throw bu(t,...n)}function Pn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw to(t),new Error(t)}function Un(e,t){e||Pn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function wu(){return kh()==="http:"||kh()==="https:"}function kh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hj(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wu()||B2()||"connection"in navigator)?navigator.onLine:!0}function mj(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,n){this.shortDelay=t,this.longDelay=n,Un(n>t,"Short delay should be less than long delay!"),this.isMobile=F2()||W2()}get(){return hj()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(e,t){Un(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pj={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gj=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xj=new ii(3e4,6e4);function dt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ut(e,t,n,s,a={}){return X0(e,a,async()=>{let i={},o={};s&&(t==="GET"?o=s:i={body:JSON.stringify(s)});const l=$s(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const d=Object.assign({method:t,headers:c},i);return U2()||(d.referrerPolicy="no-referrer"),e.emulatorConfig&&cl(e.emulatorConfig.host)&&(d.credentials="include"),K0.fetch()(await J0(e,e.config.apiHost,n,l),d)})}async function X0(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},pj),t);try{const a=new yj(e),i=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw da(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw da(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw da(e,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw yu(e,f,d);an(e,f)}}catch(a){if(a instanceof Ir)throw a;an(e,"network-request-failed",{message:String(a)})}}async function Hn(e,t,n,s,a={}){const i=await ut(e,t,n,s,a);return"mfaPendingCredential"in i&&an(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function J0(e,t,n,s){const a=`${t}${n}?${s}`,i=e,o=i.config.emulator?ju(e.config,a):`${e.config.apiScheme}://${a}`;return gj.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function vj(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yj{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Bt(this.auth,"network-request-failed")),xj.get())})}}function da(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=Bt(e,t,s);return a.customData._tokenResponse=n,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(e){return e!==void 0&&e.getResponse!==void 0}function Ch(e){return e!==void 0&&e.enterprise!==void 0}class Z0{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return vj(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bj(e){return(await ut(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function eg(e,t){return ut(e,"GET","/v2/recaptchaConfig",dt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wj(e,t){return ut(e,"POST","/v1/accounts:delete",t)}async function jj(e,t){return ut(e,"POST","/v1/accounts:update",t)}async function zo(e,t){return ut(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Nj(e,t=!1){const n=Be(e),s=await n.getIdToken(t),a=ul(s);ae(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const i=typeof a.firebase=="object"?a.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:a,token:s,authTime:ja(sc(a.auth_time)),issuedAtTime:ja(sc(a.iat)),expirationTime:ja(sc(a.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sc(e){return Number(e)*1e3}function ul(e){const[t,n,s]=e.split(".");if(t===void 0||n===void 0||s===void 0)return to("JWT malformed, contained fewer than 3 sections"),null;try{const a=M0(n);return a?JSON.parse(a):(to("Failed to decode base64 JWT payload"),null)}catch(a){return to("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Eh(e){const t=ul(e);return ae(t,"internal-error"),ae(typeof t.exp<"u","internal-error"),ae(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Ir&&kj(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function kj({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sj{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ja(this.lastLoginAt),this.creationTime=ja(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(e){var t;const n=e.auth,s=await e.getIdToken(),a=await Gr(e,zo(n,{idToken:s}));ae(a==null?void 0:a.users.length,n,"internal-error");const i=a.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?tg(i.providerUserInfo):[],l=Ej(e.providerData,o),c=e.isAnonymous,d=!(e.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new dd(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(e,m)}async function Cj(e){const t=Be(e);await Ga(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ej(e,t){return[...e.filter(s=>!t.some(a=>a.providerId===s.providerId)),...t]}function tg(e){return e.map(t=>{var{providerId:n}=t,s=vu(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _j(e,t){const n=await X0(e,{},async()=>{const s=$s({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:a,apiKey:i}=e.config,o=await J0(e,a,"/v1/token",`key=${i}`),l=await e._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return e.emulatorConfig&&cl(e.emulatorConfig.host)&&(c.credentials="include"),K0.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ij(e,t){return ut(e,"POST","/v2/accounts:revokeToken",dt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ae(t.idToken,"internal-error"),ae(typeof t.idToken<"u","internal-error"),ae(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Eh(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){ae(t.length!==0,"internal-error");const n=Eh(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:a,expiresIn:i}=await _j(t,n);this.updateTokensAndExpiration(s,a,Number(i))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:a,expirationTime:i}=n,o=new ys;return s&&(ae(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),a&&(ae(typeof a=="string","internal-error",{appName:t}),o.accessToken=a),i&&(ae(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e,t){ae(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class hn{constructor(t){var{uid:n,auth:s,stsTokenManager:a}=t,i=vu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sj(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,t));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Nj(this,t)}reload(){return Cj(this)}_assign(t){this!==t&&(ae(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new hn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Ga(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(Rt(this.auth));const t=await this.getIdToken();return await Gr(this,wj(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,a,i,o,l,c,d,f;const m=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(a=n.email)!==null&&a!==void 0?a:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,j=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:v,emailVerified:N,isAnonymous:C,providerData:I,stsTokenManager:E}=n;ae(v&&E,t,"internal-error");const p=ys.fromJSON(this.name,E);ae(typeof v=="string",t,"internal-error"),Kn(m,t.name),Kn(h,t.name),ae(typeof N=="boolean",t,"internal-error"),ae(typeof C=="boolean",t,"internal-error"),Kn(b,t.name),Kn(g,t.name),Kn(j,t.name),Kn(k,t.name),Kn(y,t.name),Kn(x,t.name);const w=new hn({uid:v,auth:t,email:h,emailVerified:N,displayName:m,isAnonymous:C,photoURL:g,phoneNumber:b,tenantId:j,stsTokenManager:p,createdAt:y,lastLoginAt:x});return I&&Array.isArray(I)&&(w.providerData=I.map(S=>Object.assign({},S))),k&&(w._redirectEventId=k),w}static async _fromIdTokenResponse(t,n,s=!1){const a=new ys;a.updateFromServerResponse(n);const i=new hn({uid:n.localId,auth:t,stsTokenManager:a,isAnonymous:s});return await Ga(i),i}static async _fromGetAccountInfoResponse(t,n,s){const a=n.users[0];ae(a.localId!==void 0,"internal-error");const i=a.providerUserInfo!==void 0?tg(a.providerUserInfo):[],o=!(a.email&&a.passwordHash)&&!(i!=null&&i.length),l=new ys;l.updateFromIdToken(s);const c=new hn({uid:a.localId,auth:t,stsTokenManager:l,isAnonymous:o}),d={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:i,metadata:new dd(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new Map;function Rn(e){Un(e instanceof Function,"Expected a class definition");let t=_h.get(e);return t?(Un(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_h.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ng.type="NONE";const Ih=ng;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e,t,n){return`firebase:${e}:${t}:${n}`}class bs{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:a,name:i}=this.auth;this.fullUserKey=no(this.userKey,a.apiKey,i),this.fullPersistenceKey=no("persistence",a.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await zo(this.auth,{idToken:t}).catch(()=>{});return n?hn._fromGetAccountInfoResponse(this.auth,n,t):null}return hn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new bs(Rn(Ih),t,s);const a=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=a[0]||Rn(Ih);const o=no(s,t.config.apiKey,t.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){let m;if(typeof f=="string"){const h=await zo(t,{idToken:f}).catch(()=>{});if(!h)break;m=await hn._fromGetAccountInfoResponse(t,h,f)}else m=hn._fromJSON(t,f);d!==i&&(l=m),i=d;break}}catch{}const c=a.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new bs(i,t,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new bs(i,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ig(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(rg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(lg(t))return"Blackberry";if(cg(t))return"Webos";if(sg(t))return"Safari";if((t.includes("chrome/")||ag(t))&&!t.includes("edge/"))return"Chrome";if(og(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function rg(e=At()){return/firefox\//i.test(e)}function sg(e=At()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ag(e=At()){return/crios\//i.test(e)}function ig(e=At()){return/iemobile/i.test(e)}function og(e=At()){return/android/i.test(e)}function lg(e=At()){return/blackberry/i.test(e)}function cg(e=At()){return/webos/i.test(e)}function Nu(e=At()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Tj(e=At()){var t;return Nu(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Pj(){return H2()&&document.documentMode===10}function dg(e=At()){return Nu(e)||og(e)||cg(e)||lg(e)||/windows phone/i.test(e)||ig(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(e,t=[]){let n;switch(e){case"Browser":n=Th(At());break;case"Worker":n=`${Th(At())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ai}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rj{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=i=>new Promise((o,l)=>{try{const c=t(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aj(e,t={}){return ut(e,"GET","/v2/passwordPolicy",dt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dj=6;class Lj{constructor(t){var n,s,a,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Dj,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,a,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsLowercaseLetter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),a&&(n.meetsMaxPasswordLength=t.length<=a)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<t.length;a++)s=t.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,a,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{constructor(t,n,s,a){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ph(this),this.idTokenSubscription=new Ph(this),this.beforeStateQueue=new Rj(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var s,a,i;if(!this._deleted&&(this.persistenceManager=await bs.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await zo(this,{idToken:t}),s=await hn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=a==null?void 0:a._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===l)&&(c!=null&&c.user)&&(a=c.user,i=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(a)}catch(o){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ga(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=mj()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(mt(this.app))return Promise.reject(Rt(this));const n=t?Be(t):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ae(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(Rt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return mt(this.app)?Promise.reject(Rt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Aj(this),n=new Lj(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new si("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ij(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Rn(t)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,a){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,s,a);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ug(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var t;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&fj(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gt(e){return Be(e)}class Ph{constructor(t){this.auth=t,this.observer=null,this.addObserver=X2(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mj(e){oi=e}function ku(e){return oi.loadJS(e)}function zj(){return oi.recaptchaV2Script}function Fj(){return oi.recaptchaEnterpriseScript}function $j(){return oi.gapiScript}function fg(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uj=500,Bj=6e4,zi=1e12;class Wj{constructor(t){this.auth=t,this.counter=zi,this._widgets=new Map}render(t,n){const s=this.counter;return this._widgets.set(s,new Yj(t,this.auth.name,n||{})),this.counter++,s}reset(t){var n;const s=t||zi;(n=this._widgets.get(s))===null||n===void 0||n.delete(),this._widgets.delete(s)}getResponse(t){var n;const s=t||zi;return((n=this._widgets.get(s))===null||n===void 0?void 0:n.getResponse())||""}async execute(t){var n;const s=t||zi;return(n=this._widgets.get(s))===null||n===void 0||n.execute(),""}}class Hj{constructor(){this.enterprise=new qj}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class qj{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class Yj{constructor(t,n,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof t=="string"?document.getElementById(t):t;ae(a,"argument-error",{appName:n}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Gj(50);const{callback:t,"expired-callback":n}=this.params;if(t)try{t(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Bj)},Uj))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Gj(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<e;s++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}const Vj="recaptcha-enterprise",Na="NO_RECAPTCHA";class hg{constructor(t){this.type=Vj,this.auth=gt(t)}async verify(t="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{eg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Z0(c);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})})}function a(i,o,l){const c=window.grecaptcha;Ch(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(d=>{o(d)}).catch(()=>{o(Na)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Hj().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(l=>{if(!n&&Ch(window.grecaptcha))a(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Fj();c.length!==0&&(c+=l),ku(c).then(()=>{a(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function ra(e,t,n,s=!1,a=!1){const i=new hg(e);let o;if(a)o=Na;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function jr(e,t,n,s,a){var i,o;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await ra(e,t,n,n==="getOobCode");return s(e,l)}else return s(e,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ra(e,t,n,n==="getOobCode");return s(e,c)}else return Promise.reject(l)});else if(a==="PHONE_PROVIDER")if(!((o=e._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await ra(e,t,n);return s(e,l).catch(async c=>{var d;if(((d=e._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const f=await ra(e,t,n,!1,!0);return s(e,f)}return Promise.reject(c)})}else{const l=await ra(e,t,n,!1,!0);return s(e,l)}else return Promise.reject(a+" provider is not supported.")}async function Qj(e){const t=gt(e),n=await eg(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new Z0(n);t.tenantId==null?t._agentRecaptchaConfig=s:t._tenantRecaptchaConfigs[t.tenantId]=s,s.isAnyProviderEnabled()&&new hg(t).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kj(e,t){const n=H0(e,"auth");if(n.isInitialized()){const a=n.getImmediate(),i=n.getOptions();if(Ps(i,t??{}))return a;an(a,"already-initialized")}return n.initialize({options:t})}function Xj(e,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Rn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function Jj(e,t,n){const s=gt(e);ae(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const a=!!(n!=null&&n.disableWarnings),i=mg(t),{host:o,port:l}=Zj(t),c=l===null?"":`:${l}`,d={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ae(Ps(d,s.config.emulator)&&Ps(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,cl(o)?(L2(`${i}//${o}${c}`),z2("Auth",!0)):a||eN()}function mg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Zj(e){const t=mg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const i=a[1];return{host:i,port:Rh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Rh(o)}}}function Rh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function eN(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(t){return Pn("not implemented")}_linkToIdToken(t,n){return Pn("not implemented")}_getReauthenticationResolver(t){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(e,t){return ut(e,"POST","/v1/accounts:resetPassword",dt(e,t))}async function nN(e,t){return ut(e,"POST","/v1/accounts:update",t)}async function rN(e,t){return ut(e,"POST","/v1/accounts:signUp",t)}async function sN(e,t){return ut(e,"POST","/v1/accounts:update",dt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(e,t){return Hn(e,"POST","/v1/accounts:signInWithPassword",dt(e,t))}async function Su(e,t){return ut(e,"POST","/v1/accounts:sendOobCode",dt(e,t))}async function iN(e,t){return Su(e,t)}async function oN(e,t){return Su(e,t)}async function lN(e,t){return Su(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(e,t){return Hn(e,"POST","/v1/accounts:signInWithEmailLink",dt(e,t))}async function dN(e,t){return Hn(e,"POST","/v1/accounts:signInWithEmailLink",dt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends fl{constructor(t,n,s,a=null){super("password",s),this._email=t,this._password=n,this._tenantId=a}static _fromEmailAndPassword(t,n){return new Va(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Va(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jr(t,n,"signInWithPassword",aN,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return cN(t,{email:this._email,oobCode:this._password});default:an(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jr(t,s,"signUpPassword",rN,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return dN(t,{idToken:n,email:this._email,oobCode:this._password});default:an(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(e,t){return Hn(e,"POST","/v1/accounts:signInWithIdp",dt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN="http://localhost";class Bn extends fl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:a}=n,i=vu(n,["providerId","signInMethod"]);if(!s||!a)return null;const o=new Bn(s,a);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return ws(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,ws(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ws(t,n)}buildRequest(){const t={requestUri:uN,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=$s(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ah(e,t){return ut(e,"POST","/v1/accounts:sendVerificationCode",dt(e,t))}async function fN(e,t){return Hn(e,"POST","/v1/accounts:signInWithPhoneNumber",dt(e,t))}async function hN(e,t){const n=await Hn(e,"POST","/v1/accounts:signInWithPhoneNumber",dt(e,t));if(n.temporaryProof)throw da(e,"account-exists-with-different-credential",n);return n}const mN={USER_NOT_FOUND:"user-not-found"};async function pN(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Hn(e,"POST","/v1/accounts:signInWithPhoneNumber",dt(e,n),mN)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends fl{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,n){return new ka({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new ka({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(t){return fN(t,this._makeVerificationRequest())}_linkToIdToken(t,n){return hN(t,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return pN(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:n,verificationId:s,verificationCode:a}=this.params;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:s,code:a}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){typeof t=="string"&&(t=JSON.parse(t));const{verificationId:n,verificationCode:s,phoneNumber:a,temporaryProof:i}=t;return!s&&!n&&!a&&!i?null:new ka({verificationId:n,verificationCode:s,phoneNumber:a,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xN(e){const t=la(ca(e)).link,n=t?la(ca(t)).deep_link_id:null,s=la(ca(e)).deep_link_id;return(s?la(ca(s)).link:null)||s||n||t||e}class hl{constructor(t){var n,s,a,i,o,l;const c=la(ca(t)),d=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(s=c.oobCode)!==null&&s!==void 0?s:null,m=gN((a=c.mode)!==null&&a!==void 0?a:null);ae(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const n=xN(t);try{return new hl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.providerId=Xr.PROVIDER_ID}static credential(t,n){return Va._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=hl.parseLink(n);return ae(s,"argument-error"),Va._fromEmailAndCode(t,s.code,s.tenantId)}}Xr.PROVIDER_ID="password";Xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Us{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class ro extends Bs{static credentialFromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;return ae("providerId"in n&&"signInMethod"in n,"argument-error"),Bn._fromParams(n)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return ae(t.idToken||t.accessToken,"argument-error"),Bn._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return ro.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return ro.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s,oauthTokenSecret:a,pendingToken:i,nonce:o,providerId:l}=t;if(!s&&!a&&!n&&!i||!l)return null;try{return new ro(l)._credential({idToken:n,accessToken:s,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Bs{constructor(){super("facebook.com")}static credential(t){return Bn._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return rr.credentialFromTaggedObject(t)}static credentialFromError(t){return rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return rr.credential(t.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Bs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Bn._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return sr.credentialFromTaggedObject(t)}static credentialFromError(t){return sr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return sr.credential(n,s)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Bs{constructor(){super("github.com")}static credential(t){return Bn._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ar.credentialFromTaggedObject(t)}static credentialFromError(t){return ar.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ar.credential(t.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Bs{constructor(){super("twitter.com")}static credential(t,n){return Bn._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ir.credentialFromTaggedObject(t)}static credentialFromError(t){return ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return ir.credential(n,s)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(e,t){return Hn(e,"POST","/v1/accounts:signUp",dt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,a=!1){const i=await hn._fromIdTokenResponse(t,s,a),o=Dh(s);return new kn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const a=Dh(s);return new kn({user:t,providerId:a,_tokenResponse:s,operationType:n})}}function Dh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(e){var t;if(mt(e.app))return Promise.reject(Rt(e));const n=gt(e);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new kn({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await pg(n,{returnSecureToken:!0}),a=await kn._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends Ir{constructor(t,n,s,a){var i;super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Fo.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,a){return new Fo(t,n,s,a)}}function gg(e,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fo._fromErrorAndOperation(e,i,t,s):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(e){return new Set(e.map(({providerId:t})=>t).filter(t=>!!t))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(e,t){const n=Be(e);await ml(!0,n,t);const{providerUserInfo:s}=await jj(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),a=xg(s||[]);return n.providerData=n.providerData.filter(i=>a.has(i.providerId)),a.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function vg(e,t,n=!1){const s=await Gr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return kn._forOperation(e,"link",s)}async function ml(e,t,n){await Ga(t);const s=xg(t.providerData),a=e===!1?"provider-already-linked":"no-such-provider";ae(s.has(n)===e,t.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vN(e,t,n=!1){const{auth:s}=e;if(mt(s.app))return Promise.reject(Rt(s));const a="reauthenticate";try{const i=await Gr(e,gg(s,a,t,e),n);ae(i.idToken,s,"internal-error");const o=ul(i.idToken);ae(o,s,"internal-error");const{sub:l}=o;return ae(e.uid===l,s,"user-mismatch"),kn._forOperation(e,a,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&an(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(e,t,n=!1){if(mt(e.app))return Promise.reject(Rt(e));const s="signIn",a=await gg(e,s,t),i=await kn._fromIdTokenResponse(e,s,a);return n||await e._updateCurrentUser(i.user),i}async function Cu(e,t){return yg(gt(e),t)}async function yN(e,t){const n=Be(e);return await ml(!1,n,t.providerId),vg(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(e,t){return Hn(e,"POST","/v1/accounts:signInWithCustomToken",dt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(e,t){if(mt(e.app))return Promise.reject(Rt(e));const n=gt(e),s=await bN(n,{token:t,returnSecureToken:!0}),a=await kn._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(e,t,n){var s;ae(((s=n.url)===null||s===void 0?void 0:s.length)>0,e,"invalid-continue-uri"),ae(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),ae(typeof n.linkDomain>"u"||n.linkDomain.length>0,e,"invalid-hosting-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.linkDomain=n.linkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ae(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(ae(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(e){const t=gt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function wS(e,t,n){const s=gt(e),a={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&Eu(s,a,n),await jr(s,a,"getOobCode",oN,"EMAIL_PASSWORD_PROVIDER")}async function jS(e,t,n){await tN(Be(e),{oobCode:t,newPassword:n}).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&_u(e),s})}async function NS(e,t){await sN(Be(e),{oobCode:t})}async function kS(e,t,n){if(mt(e.app))return Promise.reject(Rt(e));const s=gt(e),o=await jr(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pg,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&_u(e),c}),l=await kn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function SS(e,t,n){return mt(e.app)?Promise.reject(Rt(e)):Cu(Be(e),Xr.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&_u(e),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(e,t,n){const s=gt(e),a={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function i(o,l){ae(l.handleCodeInApp,s,"argument-error"),l&&Eu(s,o,l)}i(a,n),await jr(s,a,"getOobCode",lN,"EMAIL_PASSWORD_PROVIDER")}function ES(e,t){const n=hl.parseLink(t);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function _S(e,t,n){if(mt(e.app))return Promise.reject(Rt(e));const s=Be(e),a=Xr.credentialWithLink(t,n||Ya());return ae(a._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),Cu(s,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(e,t){return ut(e,"POST","/v1/accounts:createAuthUri",dt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(e,t){const n=wu()?Ya():"http://localhost",s={identifier:t,continueUri:n},{signinMethods:a}=await wN(Be(e),s);return a||[]}async function TS(e,t){const n=Be(e),a={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&Eu(n.auth,a,t);const{email:i}=await iN(n.auth,a);i!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(e,t){return ut(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const s=Be(e),i={idToken:await s.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Gr(s,jN(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const l=s.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function RS(e,t){const n=Be(e);return mt(n.auth.app)?Promise.reject(Rt(n.auth)):bg(n,t,null)}function AS(e,t){return bg(Be(e),null,t)}async function bg(e,t,n){const{auth:s}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const o=await Gr(e,nN(s,i));await e._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(e){var t,n;if(!e)return null;const{providerId:s}=e,a=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},i=e.isNewUser||e.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(e!=null&&e.idToken)){const o=(n=(t=ul(e.idToken))===null||t===void 0?void 0:t.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new js(i,l)}}if(!s)return null;switch(s){case"facebook.com":return new kN(i,a);case"github.com":return new SN(i,a);case"google.com":return new CN(i,a);case"twitter.com":return new EN(i,a,e.screenName||null);case"custom":case"anonymous":return new js(i,null);default:return new js(i,s,a)}}class js{constructor(t,n,s={}){this.isNewUser=t,this.providerId=n,this.profile=s}}class wg extends js{constructor(t,n,s,a){super(t,n,s),this.username=a}}class kN extends js{constructor(t,n){super(t,"facebook.com",n)}}class SN extends wg{constructor(t,n){super(t,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class CN extends js{constructor(t,n){super(t,"google.com",n)}}class EN extends wg{constructor(t,n,s){super(t,"twitter.com",n,s)}}function DS(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:NN(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(e,t){return Be(e).setPersistence(t)}function _N(e,t,n,s){return Be(e).onIdTokenChanged(t,n,s)}function IN(e,t,n){return Be(e).beforeAuthStateChanged(t,n)}function OS(e,t){return gt(e).revokeAccessToken(t)}async function MS(e){return Be(e).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(e,t){return ut(e,"POST","/v2/accounts/mfaEnrollment:start",dt(e,t))}const $o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=1e3,PN=10;class Ng extends jg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&t(n,a,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=t.key;n?this.detachListener():this.stopPolling();const a=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Pj()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,PN):a()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},TN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ng.type="LOCAL";const RN=Ng;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg extends jg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}kg.type="SESSION";const Sg=kg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(a=>a.isListeningto(t));if(n)return n;const s=new pl(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:a,data:i}=n.data,o=this.handlersMap[a];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const l=Array.from(o).map(async d=>d(n.origin,i)),c=await AN(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(e="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const d=gl("",20);a.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:a,onMessage(m){const h=m;if(h.data.eventId===d)switch(h.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(h.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),a.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:d,data:n},[a.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function LN(e){nt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function ON(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MN(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function zN(){return Iu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="firebaseLocalStorageDb",FN=1,Uo="firebaseLocalStorage",Eg="fbase_key";class li{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xl(e,t){return e.transaction([Uo],t?"readwrite":"readonly").objectStore(Uo)}function $N(){const e=indexedDB.deleteDatabase(Cg);return new li(e).toPromise()}function ud(){const e=indexedDB.open(Cg,FN);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(Uo,{keyPath:Eg})}catch(a){n(a)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(Uo)?t(s):(s.close(),await $N(),t(await ud()))})})}async function Oh(e,t,n){const s=xl(e,!0).put({[Eg]:t,value:n});return new li(s).toPromise()}async function UN(e,t){const n=xl(e,!1).get(t),s=await new li(n).toPromise();return s===void 0?null:s.value}function Mh(e,t){const n=xl(e,!0).delete(t);return new li(n).toPromise()}const BN=800,WN=3;class _g{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ud(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>WN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Iu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pl._getInstance(zN()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ON(),!this.activeServiceWorker)return;this.sender=new DN(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||MN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ud();return await Oh(t,$o,"1"),await Mh(t,$o),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Oh(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>UN(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mh(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(a=>{const i=xl(a,!1).getAll();return new li(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:a,value:i}of t)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(i)&&(this.notifyListeners(a,i),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_g.type="LOCAL";const HN=_g;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(e,t){return ut(e,"POST","/v2/accounts/mfaSignIn:start",dt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=fg("rcb"),qN=new ii(3e4,6e4);class YN{constructor(){var t;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((t=nt().grecaptcha)===null||t===void 0)&&t.render)}load(t,n=""){return ae(GN(n),t,"argument-error"),this.shouldResolveImmediately(n)&&Sh(nt().grecaptcha)?Promise.resolve(nt().grecaptcha):new Promise((s,a)=>{const i=nt().setTimeout(()=>{a(Bt(t,"network-request-failed"))},qN.get());nt()[ac]=()=>{nt().clearTimeout(i),delete nt()[ac];const l=nt().grecaptcha;if(!l||!Sh(l)){a(Bt(t,"internal-error"));return}const c=l.render;l.render=(d,f)=>{const m=c(d,f);return this.counter++,m},this.hostLanguage=n,s(l)};const o=`${zj()}?${$s({onload:ac,render:"explicit",hl:n})}`;ku(o).catch(()=>{clearTimeout(i),a(Bt(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){var n;return!!(!((n=nt().grecaptcha)===null||n===void 0)&&n.render)&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function GN(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class VN{async load(t){return new Wj(t)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="recaptcha",QN={theme:"light",type:"image"};class KN{constructor(t,n,s=Object.assign({},QN)){this.parameters=s,this.type=Sa,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=gt(t),this.isInvisible=this.parameters.size==="invisible",ae(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof n=="string"?document.getElementById(n):n;ae(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new VN:new YN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),n=this.getAssertedRecaptcha(),s=n.getResponse(t);return s||new Promise(a=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),a(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){ae(!this.parameters.sitekey,this.auth,"argument-error"),ae(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ae(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return n=>{if(this.tokenChangeListeners.forEach(s=>s(n)),typeof t=="function")t(n);else if(typeof t=="string"){const s=nt()[t];typeof s=="function"&&s(n)}}}assertNotDestroyed(){ae(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const n=document.createElement("div");t.appendChild(n),t=n}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){ae(wu()&&!Iu(),this.auth,"internal-error"),await XN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await bj(this.auth);ae(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return ae(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function XN(){let e=null;return new Promise(t=>{if(document.readyState==="complete"){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t,n){this.verificationId=t,this.onConfirmation=n}confirm(t){const n=ka._fromVerification(this.verificationId,t);return this.onConfirmation(n)}}async function JN(e,t,n){if(mt(e.app))return Promise.reject(Rt(e));const s=gt(e),a=await Tg(s,t,Be(n));return new Ig(a,i=>Cu(s,i))}async function zS(e,t,n){const s=Be(e);await ml(!1,s,"phone");const a=await Tg(s.auth,t,Be(n));return new Ig(a,i=>yN(s,i))}async function Tg(e,t,n){var s;if(!e._getRecaptchaConfig())try{await Qj(e)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof t=="string"?a={phoneNumber:t}:a=t,"session"in a){const i=a.session;if("phoneNumber"in a){ae(i.type==="enroll",e,"internal-error");const o={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await jr(e,o,"mfaSmsEnrollment",async(f,m)=>{if(m.phoneEnrollmentInfo.captchaResponse===Na){ae((n==null?void 0:n.type)===Sa,f,"argument-error");const h=await ic(f,m,n);return Lh(f,h)}return Lh(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{ae(i.type==="signin",e,"internal-error");const o=((s=a.multiFactorHint)===null||s===void 0?void 0:s.uid)||a.multiFactorUid;ae(o,e,"missing-multi-factor-info");const l={mfaPendingCredential:i.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await jr(e,l,"mfaSmsSignIn",async(m,h)=>{if(h.phoneSignInInfo.captchaResponse===Na){ae((n==null?void 0:n.type)===Sa,m,"argument-error");const b=await ic(m,h,n);return zh(m,b)}return zh(m,h)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await jr(e,i,"sendVerificationCode",async(d,f)=>{if(f.captchaResponse===Na){ae((n==null?void 0:n.type)===Sa,d,"argument-error");const m=await ic(d,f,n);return Ah(d,m)}return Ah(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{n==null||n._reset()}}async function ic(e,t,n){ae(n.type===Sa,e,"argument-error");const s=await n.verify();ae(typeof s=="string",e,"argument-error");const a=Object.assign({},t);if("phoneEnrollmentInfo"in a){const i=a.phoneEnrollmentInfo.phoneNumber,o=a.phoneEnrollmentInfo.captchaResponse,l=a.phoneEnrollmentInfo.clientType,c=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:s,captchaResponse:o,clientType:l,recaptchaVersion:c}}),a}else if("phoneSignInInfo"in a){const i=a.phoneSignInInfo.captchaResponse,o=a.phoneSignInInfo.clientType,l=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:i,clientType:o,recaptchaVersion:l}}),a}else return Object.assign(a,{recaptchaToken:s}),a}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e,t){return t?Rn(t):(ae(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends fl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ws(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ws(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ws(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ZN(e){return yg(e.auth,new Tu(e),e.bypassAuthState)}function ek(e){const{auth:t,user:n}=e;return ae(n,t,"internal-error"),vN(n,new Tu(e),e.bypassAuthState)}async function tk(e){const{auth:t,user:n}=e;return ae(n,t,"internal-error"),vg(n,new Tu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,n,s,a,i=!1){this.auth=t,this.resolver=s,this.user=a,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:a,tenantId:i,error:o,type:l}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ZN;case"linkViaPopup":case"linkViaRedirect":return tk;case"reauthViaPopup":case"reauthViaRedirect":return ek;default:an(this.auth,"internal-error")}}resolve(t){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new ii(2e3,1e4);async function FS(e,t,n){if(mt(e.app))return Promise.reject(Bt(e,"operation-not-supported-in-this-environment"));const s=gt(e);dl(e,t,Us);const a=ci(s,n);return new ur(s,"signInViaPopup",t,a).executeNotNull()}async function $S(e,t,n){const s=Be(e);dl(s.auth,t,Us);const a=ci(s.auth,n);return new ur(s.auth,"linkViaPopup",t,a,s).executeNotNull()}class ur extends Pg{constructor(t,n,s,a,i){super(t,n,a,i),this.provider=s,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ae(t,this.auth,"internal-error"),t}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const t=gl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,nk.get())};t()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk="pendingRedirect",so=new Map;class sk extends Pg{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=so.get(this.auth._key());if(!t){try{const s=await ak(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}so.set(this.auth._key(),t)}return this.bypassAuthState||so.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ak(e,t){const n=Dg(t),s=Ag(e);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}async function Rg(e,t){return Ag(e)._set(Dg(t),"true")}function ik(e,t){so.set(e._key(),t)}function Ag(e){return Rn(e._redirectPersistence)}function Dg(e){return no(rk,e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(e,t,n){return ok(e,t,n)}async function ok(e,t,n){if(mt(e.app))return Promise.reject(Rt(e));const s=gt(e);dl(e,t,Us),await s._initializationPromise;const a=ci(s,n);return await Rg(a,s),a._openRedirect(s,t,"signInViaRedirect")}function BS(e,t,n){return lk(e,t,n)}async function lk(e,t,n){const s=Be(e);dl(s.auth,t,Us),await s.auth._initializationPromise;const a=ci(s.auth,n);await ml(!1,s,t.providerId),await Rg(a,s.auth);const i=await ck(s);return a._openRedirect(s.auth,t,"linkViaRedirect",i)}async function WS(e,t){return await gt(e)._initializationPromise,Lg(e,t,!1)}async function Lg(e,t,n=!1){if(mt(e.app))return Promise.reject(Rt(e));const s=gt(e),a=ci(s,t),o=await new sk(s,a,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}async function ck(e){const t=gl(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=10*60*1e3;class uk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!fk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!Og(t)){const a=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,a))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=dk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fh(t))}saveEventToCache(t){this.cachedEventUids.add(Fh(t)),this.lastProcessedEventTime=Date.now()}}function Fh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Og({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function fk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Og(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(e,t={}){return ut(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pk=/^https?/;async function gk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await hk(e);for(const n of t)try{if(xk(n))return}catch{}an(e,"unauthorized-domain")}function xk(e){const t=Ya(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&s===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!pk.test(n))return!1;if(mk.test(e))return s===e;const a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=new ii(3e4,6e4);function $h(){const e=nt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function yk(e){return new Promise((t,n)=>{var s,a,i;function o(){$h(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$h(),n(Bt(e,"network-request-failed"))},timeout:vk.get()})}if(!((a=(s=nt().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)t(gapi.iframes.getContext());else if(!((i=nt().gapi)===null||i===void 0)&&i.load)o();else{const l=fg("iframefcb");return nt()[l]=()=>{gapi.load?o():n(Bt(e,"network-request-failed"))},ku(`${$j()}?onload=${l}`).catch(c=>n(c))}}).catch(t=>{throw ao=null,t})}let ao=null;function bk(e){return ao=ao||yk(e),ao}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=new ii(5e3,15e3),jk="__/auth/iframe",Nk="emulator/auth/iframe",kk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ck(e){const t=e.config;ae(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ju(t,Nk):`https://${e.config.authDomain}/${jk}`,s={apiKey:t.apiKey,appName:e.name,v:ai},a=Sk.get(e.config.apiHost);a&&(s.eid=a);const i=e._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${$s(s).slice(1)}`}async function Ek(e){const t=await bk(e),n=nt().gapi;return ae(n,e,"internal-error"),t.open({where:document.body,url:Ck(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kk,dontclear:!0},s=>new Promise(async(a,i)=>{await s.restyle({setHideOnLeave:!1});const o=Bt(e,"network-request-failed"),l=nt().setTimeout(()=>{i(o)},wk.get());function c(){nt().clearTimeout(l),a(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ik=500,Tk=600,Pk="_blank",Rk="http://localhost";class Uh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ak(e,t,n,s=Ik,a=Tk){const i=Math.max((window.screen.availHeight-a)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},_k),{width:s.toString(),height:a.toString(),top:i,left:o}),d=At().toLowerCase();n&&(l=ag(d)?Pk:n),rg(d)&&(t=t||Rk,c.scrollbars="yes");const f=Object.entries(c).reduce((h,[b,g])=>`${h}${b}=${g},`,"");if(Tj(d)&&l!=="_self")return Dk(t||"",l),new Uh(null);const m=window.open(t||"",l,f);ae(m,e,"popup-blocked");try{m.focus()}catch{}return new Uh(m)}function Dk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="__/auth/handler",Ok="emulator/auth/handler",Mk=encodeURIComponent("fac");async function Bh(e,t,n,s,a,i){ae(e.config.authDomain,e,"auth-domain-config-required"),ae(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:ai,eventId:a};if(t instanceof Us){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",K2(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,m]of Object.entries(i||{}))o[f]=m}if(t instanceof Bs){const f=t.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await e._getAppCheckToken(),d=c?`#${Mk}=${encodeURIComponent(c)}`:"";return`${zk(e)}?${$s(l).slice(1)}${d}`}function zk({config:e}){return e.emulator?ju(e,Ok):`https://${e.authDomain}/${Lk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="webStorageSupport";class Fk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sg,this._completeRedirectFn=Lg,this._overrideRedirectResult=ik}async _openPopup(t,n,s,a){var i;Un((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Bh(t,n,s,Ya(),a);return Ak(t,o,gl())}async _openRedirect(t,n,s,a){await this._originValidation(t);const i=await Bh(t,n,s,Ya(),a);return LN(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:a,promise:i}=this.eventManagers[n];return a?Promise.resolve(a):(Un(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await Ek(t),s=new uk(t);return n.register("authEvent",a=>(ae(a==null?void 0:a.authEvent,t,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(oc,{type:oc},a=>{var i;const o=(i=a==null?void 0:a[0])===null||i===void 0?void 0:i[oc];o!==void 0&&n(!!o),an(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return dg()||sg()||Nu()}}const $k=Fk;var Wh="@firebase/auth",Hh="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wk(e){Ha(new Rs("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),a=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ug(e)},d=new Oj(s,a,i,c);return Xj(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Ha(new Rs("auth-internal",t=>{const n=gt(t.getProvider("auth").getImmediate());return(s=>new Uk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vs(Wh,Hh,Bk(e)),vs(Wh,Hh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=5*60,qk=$0("authIdTokenMaxAge")||Hk;let qh=null;const Yk=e=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>qk)return;const a=n==null?void 0:n.token;qh!==a&&(qh=a,await fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Gk(e=J5()){const t=H0(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Kj(e,{popupRedirectResolver:$k,persistence:[HN,RN,Sg]}),s=$0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Yk(i.toString());IN(n,o,()=>o(n.currentUser)),_N(n,l=>o(l))}}const a=z0("auth");return a&&Jj(n,`http://${a}`),n}function Vk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Mj({loadJS(e){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=a=>{const i=Bt("internal-error");i.customData=a,n(i)},s.type="text/javascript",s.charset="UTF-8",Vk().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wk("Browser");const Qk={apiKey:"AIzaSyDsHfdaC3tx_kSqwvT5h_9pSk7gr-Jccgo",authDomain:"quizify-43799.firebaseapp.com",projectId:"quizify-43799",storageBucket:"quizify-43799.firebasestorage.app",messagingSenderId:"389410159905",appId:"1:389410159905:android:cd1534ae168fa1274a1260"},Kk=q0(Qk),Mg=Gk(Kk);let io=null,fd=null;const Xk=()=>(io||(io=new KN(Mg,"recaptcha-container",{size:"invisible",callback:()=>{console.log("reCAPTCHA verified")}})),io),Jk=async e=>{try{return Xk(),fd=await JN(Mg,e,io),console.log("OTP sent successfully"),{success:!0}}catch(t){return console.error("Error sending OTP:",t),{success:!1,error:t.message}}},Zk=async e=>{try{if(!fd)throw new Error("No OTP request found. Please request OTP first.");const t=await fd.confirm(e);return console.log("User signed in:",t.user),{success:!0,user:t.user}}catch(t){return console.error("Error verifying OTP:",t),{success:!1,error:t.message}}},Yh=e=>["+919701019117"].includes(e);function eS(){const e=ke(),t=tt(),[n,s]=u.useState(()=>{var I;return sessionStorage.getItem("tempPhone")||((I=t.state)==null?void 0:I.phone)||""}),[a,i]=u.useState(()=>sessionStorage.getItem("tempCountryCode")||"+91"),[o,l]=u.useState(!1),[c,d]=u.useState(""),[f,m]=u.useState(!1),[h,b]=u.useState(""),[g,j]=u.useState(null),[k,y]=u.useState(0);u.useEffect(()=>{sessionStorage.setItem("tempPhone",n),sessionStorage.setItem("tempCountryCode",a)},[n,a]),u.useEffect(()=>{if(k>0){const I=setTimeout(()=>y(k-1),1e3);return()=>clearTimeout(I)}},[k]);const x=async()=>{l(!0),d("");const I=n.replace(/\D/g,""),E=a+I;if(I.length!==10){d("Please enter a valid 10-digit phone number"),l(!1);return}try{console.log("Sending OTP to:",E);const p=await Jk(E);console.log("OTP result:",p),p.success?(j(p.verificationId),m(!0),y(60),sessionStorage.setItem("fullPhone",E),Yh(E)&&d("Test mode: Use code 123456")):(d(p.error||"Failed to send OTP"),console.error("OTP send error details:",p.details))}catch(p){d("Failed to send OTP. Please try again."),console.error("OTP send error:",p)}l(!1)},v=async()=>{if(l(!0),d(""),h.length!==6){d("Please enter a 6-digit OTP"),l(!1);return}try{console.log("Verifying OTP...");const I=await Zk(h,g);if(I.success){console.log("OTP verified successfully");const E=sessionStorage.getItem("fullPhone"),p=I.user;N2(E)?e("/signin",{state:{phone:E,firebaseUser:p}}):(sessionStorage.setItem("firebaseUser",JSON.stringify(p)),e("/avatar-selection",{state:{phone:E,firebaseUser:p}}))}else d(I.error||"Invalid OTP"),b("")}catch(I){d("Invalid OTP. Please try again."),console.error("OTP verification error:",I),b("")}l(!1)},N=async()=>{k>0||(b(""),d(""),await x())},C=()=>{m(!1),b(""),j(null),d(""),y(0)};return u.useEffect(()=>{var I,E;if(!f&&!((I=t.state)!=null&&I.preventAutoSubmit)&&!((E=t.state)!=null&&E.fromAvatar)&&n&&n.length===10){const p=setTimeout(()=>{x()},500);return()=>clearTimeout(p)}},[]),r.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #aa529bff 0%, #6d4397ff 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh"},children:[r.jsxs("div",{className:"decorative-icons",children:[r.jsx("div",{className:"floating-icon",style:{top:"5%",left:"10%",animationDelay:"0s"},children:"🎮"}),r.jsx("div",{className:"floating-icon",style:{top:"15%",right:"10%",animationDelay:"5s"},children:"🏆"}),r.jsx("div",{className:"floating-icon",style:{top:"20%",left:"15%",animationDelay:"10s"},children:"⭐"}),r.jsx("div",{className:"floating-icon",style:{top:"75%",right:"20%",animationDelay:"15s"},children:"🎯"}),r.jsx("div",{className:"floating-icon",style:{top:"85%",left:"25%",animationDelay:"20s"},children:"🪙"})]}),r.jsx("div",{className:"mascot",style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"24px"},children:r.jsx("div",{style:{fontSize:"100px"},children:"🎮"})}),r.jsxs("div",{className:"content-card",children:[r.jsx("h1",{className:"title",children:"Ready to Play?"}),r.jsx("p",{className:"subtitle",children:f?"Enter the verification code sent to your phone":"Enter your phone to start!"}),f?r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsxs("p",{style:{fontSize:"14px",color:"#666",textAlign:"center",marginBottom:"12px"},children:["OTP sent to ",a," ",n]}),r.jsx("input",{type:"text",className:"otp-input",placeholder:"Enter 6-digit OTP",value:h,onChange:I=>{const E=I.target.value.replace(/\D/g,"");E.length<=6&&(b(E),c&&d(""))},maxLength:"6",inputMode:"numeric",pattern:"[0-9]*",style:{width:"100%",padding:"16px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"24px",fontWeight:"600",textAlign:"center",letterSpacing:"8px",background:"white",color:"#333",WebkitTextFillColor:"#333"}}),Yh(a+n)&&r.jsx("p",{style:{fontSize:"12px",color:"#10b981",textAlign:"center",marginTop:"8px"},children:"Test mode: Use code 123456"})]}),h.length>0&&h.length<6&&r.jsxs("p",{style:{color:"#f59e0b",fontSize:"14px",textAlign:"center",marginTop:"-16px",marginBottom:"16px"},children:["Enter ",6-h.length," more digit",6-h.length>1?"s":""]}),r.jsxs("button",{className:"verify-button",onClick:v,disabled:o||h.length!==6,style:{width:"100%",padding:"18px",background:h.length===6?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:h.length===6&&!o?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"12px"},children:[o?"Verifying...":"Verify & Continue",r.jsx("span",{children:"✓"})]}),r.jsx("button",{className:"change-number-button",onClick:C,disabled:o,style:{width:"100%",padding:"14px",background:"transparent",color:"#667eea",border:"2px solid #667eea",borderRadius:"16px",fontSize:"16px",fontWeight:"600",cursor:o?"not-allowed":"pointer",transition:"all 0.3s"},children:k>0?`Resend OTP (${k}s)`:"Change Phone Number"}),k===0&&r.jsx("button",{onClick:N,disabled:o,style:{width:"100%",padding:"14px",marginTop:"8px",background:"transparent",color:"#667eea",border:"2px solid #667eea",borderRadius:"16px",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s"},children:"Resend OTP"})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"phone-input-group",style:{display:"flex",gap:"8px",marginBottom:"24px",alignItems:"center",justifyContent:"center"},children:[r.jsxs("select",{className:"country-select",value:a,onChange:I=>i(I.target.value),style:{width:"auto",minWidth:"95px",padding:"16px 8px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",background:"white",transition:"all 0.3s",color:"#333",textAlign:"center"},children:[r.jsx("option",{value:"+91",children:"🇮🇳 +91"}),r.jsx("option",{value:"+1",children:"🇺🇸 +1"}),r.jsx("option",{value:"+44",children:"🇬🇧 +44"}),r.jsx("option",{value:"+86",children:"🇨🇳 +86"}),r.jsx("option",{value:"+81",children:"🇯🇵 +81"})]}),r.jsx("input",{type:"tel",className:"phone-input",placeholder:"Phone number",value:n,onChange:I=>{const E=I.target.value.replace(/\D/g,"");E.length<=10&&(s(E),c&&d(""))},maxLength:"10",inputMode:"numeric",pattern:"[0-9]*",style:{flex:1,padding:"16px",paddingLeft:"12px",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"18px",fontWeight:"600",transition:"all 0.3s",background:"white",color:"#333",WebkitTextFillColor:"#333"}})]}),n.length>0&&n.length<10&&r.jsxs("p",{style:{color:"#f59e0b",fontSize:"14px",textAlign:"center",marginTop:"-16px",marginBottom:"16px"},children:["Enter ",10-n.length," more digit",10-n.length>1?"s":""]}),r.jsxs("button",{className:"submit-button",onClick:x,disabled:o||n.length!==10,style:{width:"100%",padding:"18px",background:n.length===10?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:n.length===10&&!o?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[o?"Sending OTP...":"Send OTP",r.jsx("span",{children:"→"})]})]}),c&&r.jsx("p",{className:"error-message",style:{color:c.includes("Test mode")?"#10b981":"#ef4444",fontSize:"14px",textAlign:"center",marginTop:"12px",fontWeight:"600"},children:c}),r.jsx("div",{id:"recaptcha-container"})]})]})}function tS(){const e=tt(),t=ke(),{phone:n,firebaseUser:s}=e.state||{},[a,i]=u.useState(""),[o,l]=u.useState(!1),[c,d]=u.useState(""),[f,m]=u.useState(!1),[h,b]=u.useState(!1),[g,j]=u.useState(""),k=k2(n),[y,x]=u.useState(!1),[v,N]=u.useState(""),[C,I]=u.useState(!1);u.useEffect(()=>{if(localStorage.getItem("rememberCredentials")==="true"&&b(!0),n){const F=JSON.parse(localStorage.getItem(`user_profile_${n}`)||"{}"),X=JSON.parse(localStorage.getItem("users")||"{}")[n]||{},V=F.name||X.username||(k==null?void 0:k.username)||"";j(V)}},[n,k]);const E=async()=>{if(!a){d("Please enter your password");return}m(!0),d(""),await new Promise(_=>setTimeout(_,500)),k&&k.password===a?(lt.setCurrentUser(n),s&&localStorage.setItem("firebaseUser",JSON.stringify({uid:s.uid,phoneNumber:s.phoneNumber})),h&&localStorage.setItem("rememberCredentials","true"),t("/",{replace:!0})):(d("Wrong password"),m(!1),setTimeout(()=>d(""),3e3))},p=()=>{alert("OTP feature coming soon!")},w=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode");const _=(n==null?void 0:n.slice(-10))||"";t("/auth",{replace:!0,state:{phone:_,preventAutoSubmit:!0}})},S=()=>{sessionStorage.removeItem("tempPhone"),sessionStorage.removeItem("tempCountryCode"),t("/auth",{replace:!0,state:{isNewAccount:!0}})},A=_=>{_.key==="Enter"&&E()};return r.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[r.jsx("button",{className:"back-button",onClick:w,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:_=>_.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:_=>_.target.style.background="rgba(255,255,255,0.2)",children:r.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),r.jsxs("div",{className:"decorative-icons",children:[r.jsx("div",{className:"floating-icon",style:{top:"10%",left:"5%",animationDelay:"0s"},children:"🎮"}),r.jsx("div",{className:"floating-icon",style:{top:"20%",right:"10%",animationDelay:"2s"},children:"🏆"}),r.jsx("div",{className:"floating-icon",style:{top:"70%",left:"8%",animationDelay:"4s"},children:"⭐"}),r.jsx("div",{className:"floating-icon",style:{top:"80%",right:"5%",animationDelay:"6s"},children:"🎯"})]}),r.jsxs("div",{className:"content-card",style:{background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"32px",width:"90%",maxWidth:"400px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)",margin:"0 auto"},children:[(k==null?void 0:k.avatar)&&r.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px",animation:"bounce 2s infinite"},children:k.avatar.emoji}),r.jsxs("div",{className:"welcome-back",children:[r.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Welcome Back! 👋"}),r.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"24px"},children:g?`Hey ${g}!`:"Good to see you again!"})]}),r.jsx("div",{className:"phone-display",style:{fontSize:"18px",fontWeight:"600",color:"#667eea",marginBottom:"24px",textAlign:"center",padding:"12px",background:"rgba(102, 126, 234, 0.1)",borderRadius:"12px"},children:n}),r.jsxs("div",{style:{position:"relative",marginBottom:"16px"},children:[r.jsx("input",{type:o?"text":"password",className:"phone-input",placeholder:"Enter your password",value:a,onChange:_=>{i(_.target.value),c&&d("")},onKeyPress:A,style:{width:"100%",paddingRight:"45px",border:c?"2px solid #ef4444":"2px solid #e2e8f0",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"},autoFocus:!0}),r.jsx("button",{type:"button",onClick:()=>l(!o),style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px",color:"#667eea"},"aria-label":o?"Hide password":"Show password",children:o?"👁️":"👁️‍🗨️"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"20px"},children:[r.jsx("input",{type:"checkbox",id:"rememberMe",checked:h,onChange:_=>b(_.target.checked),style:{width:"18px",height:"18px",cursor:"pointer",accentColor:"#667eea"}}),r.jsx("label",{htmlFor:"rememberMe",style:{fontSize:"14px",color:"#64748b",cursor:"pointer",userSelect:"none"},children:"Remember me"})]}),c&&r.jsxs("div",{style:{color:"#f59e0b",fontSize:"13px",textAlign:"center",marginTop:"-12px",marginBottom:"16px",fontWeight:"500"},children:["⚠️ ",c]}),r.jsx("button",{className:"submit-button",onClick:E,disabled:f,style:{width:"100%",padding:"18px",background:f?"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:f?"not-allowed":"pointer",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"20px"},children:f?r.jsxs(r.Fragment,{children:[r.jsx("span",{children:"Signing in..."}),r.jsx("span",{className:"animate-spin",children:"⚙️"})]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{children:"Sign In"}),r.jsx("span",{children:"🎮"})]})}),r.jsx("div",{className:"divider",style:{textAlign:"center",margin:"20px 0",position:"relative"},children:r.jsx("span",{className:"divider-text",style:{background:"rgba(255, 255, 255, 0.95)",padding:"0 16px",position:"relative",color:"#94a3b8",fontSize:"14px"},children:"OR"})}),r.jsx("button",{className:"otp-button",onClick:p,style:{width:"100%",padding:"16px",background:"white",border:"2px solid #e2e8f0",borderRadius:"16px",fontSize:"16px",fontWeight:"600",color:"#667eea",cursor:"pointer",transition:"all 0.3s",marginBottom:"12px"},onMouseEnter:_=>{_.currentTarget.style.background="rgba(102, 126, 234, 0.05)",_.currentTarget.style.borderColor="#667eea"},onMouseLeave:_=>{_.currentTarget.style.background="white",_.currentTarget.style.borderColor="#e2e8f0"},children:"Send OTP Instead"}),r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px",paddingTop:"20px",borderTop:"1px solid #e2e8f0"},children:[r.jsx("a",{href:"#",onClick:_=>{_.preventDefault(),x(!0)},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Forgot password?"}),r.jsx("a",{href:"#",onClick:_=>{_.preventDefault(),S()},style:{color:"#7c3aed",fontSize:"14px",textDecoration:"none",fontWeight:"600"},children:"Create new account"})]})]}),y&&r.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50",children:r.jsxs("div",{className:"bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-6 w-full max-w-sm border border-white/20 shadow-2xl",children:[r.jsxs("div",{className:"text-center mb-6",children:[r.jsx("div",{className:"text-5xl mb-4",children:"🔐"}),r.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Reset Password"}),r.jsx("p",{className:"text-white/60 text-sm",children:"Enter your new password"})]}),r.jsxs("div",{className:"relative mb-4",children:[r.jsx("input",{type:o?"text":"password",value:v,onChange:_=>N(_.target.value),placeholder:"New password (min 6 characters)",className:`w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 
                        text-white placeholder-white/50`,autoFocus:!0}),r.jsx("button",{type:"button",onClick:()=>l(!o),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white",style:{background:"none",border:"none",cursor:"pointer",padding:"5px",fontSize:"20px"},children:o?"👁️":"👁️‍🗨️"})]}),r.jsxs("div",{className:"flex gap-3",children:[r.jsx("button",{onClick:()=>{x(!1),N("")},className:`flex-1 py-3 rounded-2xl bg-white/10 hover:bg-white/20 
                         transition-all duration-200 font-semibold text-white`,children:"Cancel"}),r.jsx("button",{onClick:()=>{if(v.length>=6){const _=JSON.parse(localStorage.getItem("users")||"{}");_[n]&&(_[n].password=v,localStorage.setItem("users",JSON.stringify(_)),x(!1),N(""),i(v),I(!0),setTimeout(()=>I(!1),2e3))}else alert("Password must be at least 6 characters")},className:`flex-1 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 
                         hover:from-green-600 hover:to-emerald-600 transition-all duration-200 
                         font-semibold text-white shadow-lg`,children:"Reset"})]})]})}),C&&r.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:r.jsx("div",{className:"bg-green-500 rounded-2xl px-8 py-6 animate-bounce-in",children:r.jsxs("div",{className:"flex flex-col items-center",children:[r.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 animate-scale-in",children:r.jsx("span",{className:"text-green-500 text-3xl",children:"✓"})}),r.jsx("p",{className:"text-white font-semibold text-lg",children:"Password reset successfully!"})]})})}),r.jsx("style",{jsx:!0,children:`
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
      `})]})}function nS(){const e=tt(),t=ke(),{phone:n,firebaseUser:s}=e.state||{},[a,i]=u.useState(()=>{var d;if((d=e.state)!=null&&d.avatar)return e.state.avatar;const c=sessionStorage.getItem("tempAvatar");return c?JSON.parse(c):null}),o=[{id:1,emoji:"🤖",name:"Robot",color:"#667eea"},{id:2,emoji:"🦄",name:"Unicorn",color:"#ec4899"},{id:3,emoji:"🐉",name:"Dragon",color:"#10b981"},{id:4,emoji:"🧙",name:"Wizard",color:"#8b5cf6"},{id:5,emoji:"👨‍🚀",name:"Astronaut",color:"#3b82f6"},{id:6,emoji:"🥷",name:"Ninja",color:"#1f2937"}];u.useEffect(()=>{a&&sessionStorage.setItem("tempAvatar",JSON.stringify(a))},[a]);const l=()=>{a&&t("/auth/username",{state:{phone:n,avatar:a,firebaseUser:s}})};return r.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #1e3a8a 0%, #3730a3 35%, #6d28d9 70%, #a78bfa 100%)"},children:[r.jsx("button",{className:"back-button",onClick:()=>t("/auth",{state:{phone:n==null?void 0:n.replace(/^\+\d{1,3}/,""),fromAvatar:!0}}),style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.15)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:c=>c.target.style.background="rgba(255,255,255,0.25)",onMouseLeave:c=>c.target.style.background="rgba(255,255,255,0.15)",children:r.jsx("span",{style:{fontSize:"24px",color:"rgba(194, 128, 190, 0.9)"},children:"‹"})}),r.jsxs("div",{className:"content-card",style:{background:"rgba(248, 250, 252, 0.95)",backdropFilter:"blur(20px)",borderRadius:"32px",padding:"24px 20px",width:"95%",maxWidth:"100%",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.3)"},children:[r.jsxs("div",{className:"progress-dots",children:[r.jsx("div",{className:"dot active",style:{background:"#3730a3"}}),r.jsx("div",{className:"dot",style:{background:"#bf89ceff"}})]}),r.jsx("h1",{className:"title",style:{fontSize:"28px",fontWeight:"800",textAlign:"center",marginBottom:"8px",background:"linear-gradient(135deg, #1e3a8a 0%, #6d28d9 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Pick Your Hero!"}),r.jsx("p",{className:"subtitle",style:{fontSize:"16px",color:"#64748b",textAlign:"center",marginBottom:"32px"},children:"Choose your quiz champion"}),r.jsx("div",{className:"avatar-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px",marginBottom:"32px",padding:"0",maxWidth:"500px",margin:"0 auto 32px auto"},children:o.map(c=>r.jsxs("div",{className:`avatar-card ${(a==null?void 0:a.id)===c.id?"selected":""}`,onClick:()=>i(c),style:{aspectRatio:"1",borderRadius:"20px",background:(a==null?void 0:a.id)===c.id?"linear-gradient(135deg, rgba(55, 48, 163, 0.1), rgba(109, 40, 217, 0.1))":"white",border:(a==null?void 0:a.id)===c.id?"3px solid #3730a3":"3px solid transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.3s",boxShadow:(a==null?void 0:a.id)===c.id?"0 4px 20px rgba(55, 48, 163, 0.2)":"0 2px 10px rgba(0, 0, 0, 0.05)",transform:(a==null?void 0:a.id)===c.id?"scale(1.05)":"scale(1)"},onMouseEnter:d=>{(a==null?void 0:a.id)!==c.id&&(d.currentTarget.style.transform="scale(1.05)",d.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.15)")},onMouseLeave:d=>{(a==null?void 0:a.id)!==c.id&&(d.currentTarget.style.transform="scale(1)",d.currentTarget.style.boxShadow="0 2px 10px rgba(0, 0, 0, 0.05)")},children:[r.jsx("div",{className:"avatar-emoji",style:{fontSize:"40px",marginBottom:"8px"},children:c.emoji}),r.jsx("div",{className:"avatar-name",style:{fontSize:"14px",fontWeight:"600",color:(a==null?void 0:a.id)===c.id?"#3730a3":"#64748b"},children:c.name})]},c.id))}),r.jsxs("button",{className:"submit-button",disabled:!a,onClick:l,style:{width:"100%",padding:"18px",background:a?"linear-gradient(135deg, #3730a3 0%, #6d28d9 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:a?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",boxShadow:a?"0 4px 20px rgba(55, 48, 163, 0.3)":"none"},onMouseEnter:c=>{a&&(c.currentTarget.style.transform="translateY(-2px)",c.currentTarget.style.boxShadow="0 6px 30px rgba(55, 48, 163, 0.4)")},onMouseLeave:c=>{a&&(c.currentTarget.style.transform="translateY(0)",c.currentTarget.style.boxShadow="0 4px 20px rgba(55, 48, 163, 0.3)")},children:["Continue",r.jsx("span",{children:"→"})]})]})]})}const rS=ri("FirebaseFirestore",{web:()=>ei(()=>import("./web-2867f90c.js"),[]).then(e=>new e.FirebaseFirestoreWeb)}),sS=rS,aS=async(e,t)=>{console.log("Starting Firestore save for:",e),console.log("User data:",JSON.stringify(t));try{const n=await sS.setDocument({reference:`users/${e}`,data:t});return console.log("Firestore save successful:",n),!0}catch(n){return console.error("Firestore save error:",n),console.error("Error details:",JSON.stringify(n)),!1}};function iS(){const e=tt(),t=ke(),{phone:n,avatar:s,firebaseUser:a}=e.state||{},[i,o]=u.useState(""),[l,c]=u.useState(""),[d,f]=u.useState(""),[m,h]=u.useState(""),[b,g]=u.useState(""),j=[{value:"under-5",label:"Under 5 yrs"},{value:"5-10",label:"5-10 yrs"},{value:"11-15",label:"11-15 yrs"},{value:"16-20",label:"16-20 yrs"},{value:"20+",label:"20+ yrs"}],k=()=>{if(g(""),!i){g("Please enter your name");return}if(!l||l.length<6){g("Password must be at least 6 characters");return}if(!d){g("Please select your gender");return}if(!m){g("Please select your age group");return}const x=l||"123456",v=JSON.parse(localStorage.getItem("users")||"{}");v[n]={username:i,gender:d,ageGroup:m,avatar:s,password:x,phone:n,createdAt:new Date().toISOString()},localStorage.setItem("users",JSON.stringify(v)),aS(n,{username:i,gender:d,ageGroup:m,avatar:s,password:x,createdAt:new Date().toISOString()}).then(()=>{console.log("User saved to Firestore")}).catch(C=>{console.log("Firestore save failed:",C)}),a&&localStorage.setItem("firebaseUser",JSON.stringify({uid:a.uid,phoneNumber:a.phoneNumber})),localStorage.setItem("currentUser",JSON.stringify({phone:n,username:i,gender:d,ageGroup:m,avatar:s}));const N={name:i,level:1,coins:0,currentStreak:0,xp:0};localStorage.setItem("qp_player",JSON.stringify(N)),localStorage.setItem("userName",i),t("/welcome",{state:{username:i},replace:!0})},y=()=>{t("/auth/avatar",{state:{phone:n,avatar:s,firebaseUser:a}})};return r.jsxs("div",{className:"auth-screen",style:{background:"linear-gradient(135deg, #6b46c1 0%, #9333ea 50%, #ec4899 100%)"},children:[r.jsx("button",{className:"back-button",onClick:y,style:{position:"absolute",top:"40px",left:"20px",background:"rgba(255,255,255,0.2)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:10,backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:x=>x.target.style.background="rgba(255,255,255,0.3)",onMouseLeave:x=>x.target.style.background="rgba(255,255,255,0.2)",children:r.jsx("span",{style:{fontSize:"24px",color:"white"},children:"‹"})}),r.jsxs("div",{className:"content-card",children:[r.jsxs("div",{className:"progress-dots",children:[r.jsx("div",{className:"dot"}),r.jsx("div",{className:"dot active",style:{background:"#9333ea"}})]}),r.jsx("div",{style:{fontSize:"60px",textAlign:"center",marginBottom:"16px"},children:s==null?void 0:s.emoji}),r.jsx("h1",{className:"title",style:{background:"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Almost Done!"}),r.jsx("p",{className:"subtitle",children:"Tell us about yourself"}),r.jsxs("div",{style:{marginBottom:"24px"},children:[r.jsx("input",{type:"text",className:"phone-input",placeholder:"Enter your name...",value:i,onChange:x=>o(x.target.value),style:{width:"100%",marginBottom:"20px",color:"#333",fontSize:"16px",WebkitTextFillColor:"#333",backgroundColor:"white"}}),r.jsx("input",{type:"password",className:"phone-input",placeholder:"Create a password...",value:l,onChange:x=>c(x.target.value),style:{width:"100%",marginBottom:"20px",marginTop:"10px"}}),r.jsxs("div",{style:{marginBottom:"20px"},children:[r.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Gender"}),r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx("button",{onClick:()=>f("male"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:d==="male"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:d==="male"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:d==="male"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👦 Male"}),r.jsx("button",{onClick:()=>f("female"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:d==="female"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:d==="female"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:d==="female"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"👧 Female"}),r.jsx("button",{onClick:()=>f("other"),style:{flex:1,padding:"12px",border:"2px solid",borderColor:d==="other"?"#9333ea":"#e9d5ff",borderRadius:"12px",background:d==="other"?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"14px",fontWeight:"600",color:d==="other"?"#9333ea":"#64748b",transition:"all 0.3s"},children:"🌈 Other"})]})]}),r.jsxs("div",{style:{marginBottom:"20px"},children:[r.jsx("label",{style:{fontSize:"14px",color:"#64748b",marginBottom:"8px",display:"block"},children:"Age Group"}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"8px"},children:j.map(x=>r.jsx("button",{onClick:()=>h(x.value),style:{padding:"10px 4px",border:"2px solid",borderColor:m===x.value?"#9333ea":"#e9d5ff",borderRadius:"12px",background:m===x.value?"rgba(147, 51, 234, 0.1)":"white",cursor:"pointer",fontSize:"12px",fontWeight:"600",color:m===x.value?"#9333ea":"#64748b",transition:"all 0.3s"},children:x.label},x.value))})]}),b&&r.jsx("div",{style:{color:"#ef4444",fontSize:"14px",textAlign:"center",marginBottom:"16px"},children:b})]}),r.jsx("button",{className:"submit-button",onClick:k,disabled:!i||!d||!m,style:{width:"100%",padding:"18px",background:i&&d&&m?"linear-gradient(135deg, #6b46c1 0%, #ec4899 100%)":"linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)",color:"white",border:"none",borderRadius:"16px",fontSize:"18px",fontWeight:"700",cursor:i&&d&&m?"pointer":"not-allowed",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:"Let's Start! 🚀"})]})]})}function oS(){var m;const e=ke(),t=tt(),[n,s]=u.useState(!1),[a,i]=u.useState(!1),[o,l]=u.useState(!1),c=((m=t.state)==null?void 0:m.username)||localStorage.getItem("userName")||"Champion",d=c.length>12;u.useEffect(()=>{sessionStorage.setItem("justSignedUp","true"),setTimeout(()=>s(!0),100),setTimeout(()=>i(!0),2e3)},[]);const f=()=>{l(!0),setTimeout(()=>{e("/",{replace:!0})},350)};return r.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity",style:{background:"radial-gradient(circle at center, #1a1a2e 0%, #0f0f0f 100%)",opacity:o?.3:1,transitionDuration:"400ms"},children:[r.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[r.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(147, 51, 234, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out infinite"}}),r.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(236, 72, 153, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 0.5s infinite"}}),r.jsx("div",{className:"absolute",style:{width:"100px",height:"100px",borderRadius:"50%",background:"radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)",animation:"pulseExpand 2.5s ease-out 1s infinite"}}),r.jsx("div",{className:"absolute",style:{width:"80px",height:"80px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(147, 51, 234, 0.4))",boxShadow:"0 0 60px 20px rgba(147, 51, 234, 0.6)",animation:"glow 2s ease-in-out infinite"}})]}),r.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:[...Array(12)].map((h,b)=>r.jsx("div",{className:"absolute",style:{width:"2px",height:"100%",background:"linear-gradient(to bottom, transparent, rgba(147, 51, 234, 0.3), transparent)",transform:`rotate(${b*30}deg)`,animation:`fadeInOut 2.5s ease-in-out ${b*.1}s infinite`}},b))}),r.jsx("div",{className:`absolute z-10 transition-all duration-1000
        ${n?"opacity-100":"opacity-0"}`,style:{top:"calc(50% - 200px)",left:"50%",transform:"translateX(-50%)",textAlign:"center",width:"90%",maxWidth:"500px"},children:r.jsxs("h1",{style:{color:"#fff",fontFamily:"system-ui, -apple-system, sans-serif",letterSpacing:"1px",textShadow:"0 0 30px rgba(147, 51, 234, 0.5)",animation:"fadeInUp 1s ease-out forwards",margin:0},children:[r.jsx("div",{style:{fontSize:"48px",fontWeight:"bold",marginBottom:d?"-5px":"-10px"},children:"Welcome"}),r.jsx("div",{style:{fontSize:"48px",fontWeight:"bold",wordWrap:"break-word",overflowWrap:"break-word",lineHeight:d?"1.2":"1.1",padding:"0 20px",marginTop:d?"5px":"0"},children:c})]})}),a&&r.jsx("div",{className:"absolute z-10",style:{bottom:"250px",left:"50%",transform:"translateX(-50%)"},children:r.jsxs("button",{onClick:f,className:"welcome-start-button",style:{background:"linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",color:"white",padding:"18px 40px",borderRadius:"50px",fontSize:"20px",fontWeight:"bold",border:"none",cursor:"pointer",transform:"scale(1)",transition:"all 0.3s ease",display:"inline-flex",alignItems:"center",gap:"12px",boxShadow:"0 4px 30px rgba(147, 51, 234, 0.4)",animation:"slideUp 0.5s ease-out forwards",whiteSpace:"nowrap"},onMouseEnter:h=>{h.currentTarget.style.transform="scale(1.05)",h.currentTarget.style.boxShadow="0 6px 40px rgba(147, 51, 234, 0.6)"},onMouseLeave:h=>{h.currentTarget.style.transform="scale(1)",h.currentTarget.style.boxShadow="0 4px 30px rgba(147, 51, 234, 0.4)"},children:["Let's Learn ",r.jsx("span",{style:{fontSize:"24px"},children:"🚀"})]})}),r.jsx("style",{jsx:!0,children:`
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
      `})]})}function lS(){return u.useState(!1),null}const cS={name:(()=>{const e=JSON.parse(localStorage.getItem("currentUser")||"{}");return e.username?e.username.split(" ")[0]:"Player"})(),avatar:"wizard",level:1,totalXP:0,energy:Ct.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function dS(){const[e,t]=u.useState(()=>{const d=localStorage.getItem(Ct.STORAGE_KEYS.PLAYER),f=JSON.parse(localStorage.getItem("currentUser")||"{}");if(d){const m=JSON.parse(d);return f.username&&(m.name=f.username.split(" ")[0]),m.unlockedAvatars||(m.unlockedAvatars=["wizard","knight"]),m}return cS});u.useEffect(()=>{localStorage.setItem(Ct.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),u.useEffect(()=>{if(e.energy<Ct.MAX_ENERGY&&e.energyRegenAt){const d=setInterval(()=>{const f=Date.now();f>=e.energyRegenAt&&t(m=>({...m,energy:Math.min(m.energy+1,Ct.MAX_ENERGY),energyRegenAt:m.energy+1<Ct.MAX_ENERGY?f+Ct.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(d)}},[e.energy,e.energyRegenAt]);const n=u.useCallback(d=>{t(f=>{const m=f.totalXP+d,h=Gf(f.totalXP),b=Gf(m);let g=[...f.unlockedAvatars];return b>h&&Ct.AVATARS.forEach(j=>{j.unlockLevel<=b&&!g.includes(j.id)&&g.push(j.id)}),{...f,totalXP:m,level:b,unlockedAvatars:g}})},[]),s=u.useCallback(d=>{console.log("[DEPRECATED] addCoins called with:",d)},[]),a=u.useCallback((d=1)=>e.energy<d?!1:(t(f=>({...f,energy:f.energy-d,energyRegenAt:f.energyRegenAt||Date.now()+Ct.ENERGY_REGEN_TIME})),!0),[e.energy]),i=u.useCallback(d=>{t(f=>{const m=d?f.comboStreak+1:0;return{...f,comboStreak:m,bestCombo:Math.max(f.bestCombo,m)}})},[]),o=u.useCallback(()=>{t(d=>({...d,comboStreak:0}))},[]),l=u.useCallback(d=>{e.unlockedAvatars.includes(d)&&t(f=>({...f,avatar:d}))},[e.unlockedAvatars]),c=u.useCallback(()=>{const d=new Date().toDateString();t(f=>{if(f.lastPlayedDate===d)return f;const m=new Date;m.setDate(m.getDate()-1);const h=m.toDateString();let b=f.currentStreak;return f.lastPlayedDate===h?b=f.currentStreak+1:(f.lastPlayedDate,b=1),{...f,currentStreak:b,bestStreak:Math.max(f.bestStreak,b),totalDays:f.totalDays+1,lastPlayedDate:d}})},[]);return{player:e,addXP:n,addCoins:s,useEnergy:a,updateCombo:i,resetCombo:o,changeAvatar:l,updateDailyStreak:c,levelProgress:Xb(e.totalXP)}}var Gh;(function(e){e.IndexedDbLocal="INDEXED_DB_LOCAL",e.InMemory="IN_MEMORY",e.BrowserLocal="BROWSER_LOCAL",e.BrowserSession="BROWSER_SESSION"})(Gh||(Gh={}));var Vh;(function(e){e.APPLE="apple.com",e.FACEBOOK="facebook.com",e.GAME_CENTER="gc.apple.com",e.GITHUB="github.com",e.GOOGLE="google.com",e.MICROSOFT="microsoft.com",e.PLAY_GAMES="playgames.google.com",e.TWITTER="twitter.com",e.YAHOO="yahoo.com",e.PASSWORD="password",e.PHONE="phone"})(Vh||(Vh={}));const uS=ri("FirebaseAuthentication",{web:()=>ei(()=>import("./web-a2d75b38.js"),[]).then(e=>new e.FirebaseAuthenticationWeb)}),fS=async()=>{if(!Do.isNativePlatform())return console.log("Not on native platform, skipping Firebase native init"),!0;try{console.log("Initializing Firebase Authentication...");const e=await uS.getCurrentUser();return console.log("Firebase initialized. Current user:",e?e.uid:"none"),!0}catch(e){return console.error("Firebase initialization check:",e),!0}};window.history.replaceState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.history.pushState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.userService=lt;const zg=u.createContext(null),qn=()=>{const e=u.useContext(zg);if(!e)throw new Error("useGame must be used within GameProvider");return e};function hS({children:e}){const t=dS(),n=il(),s={...t,coins:n.coins,xp:n.xp,level:n.level,recordQuizComplete:n.recordQuizComplete,recordPracticeComplete:n.recordPracticeComplete,getTodaySummary:n.getTodaySummary};return r.jsx(zg.Provider,{value:s,children:e})}function mS(){const[e,t]=u.useState(!1),[n,s]=u.useState(!1);return u.useEffect(()=>{(async()=>{try{console.log("Initializing Firebase..."),await fS(),console.log("Firebase initialized successfully")}catch(i){console.error("Firebase initialization error:",i)}})()},[]),u.useEffect(()=>{(()=>{const i=S2();s(i),t(!0)})()},[]),u.useEffect(()=>{let a=0,i=null,o=null;return(async()=>{try{o=await hh.addListener("backButton",()=>{const c=window.location.pathname;c==="/"||c==="/home"?(a++,a===1?(console.log("Press back again to exit"),i=setTimeout(()=>{a=0},2e3)):a===2&&(clearTimeout(i),hh.minimizeApp())):window.history.back()})}catch(c){console.error("Error setting up back button handler:",c)}})(),()=>{o&&typeof o.remove=="function"&&o.remove(),i&&clearTimeout(i)}},[]),e?!n&&!window.location.pathname.startsWith("/auth")?(window.location.href="/auth",null):r.jsxs(hS,{children:[r.jsxs(lb,{children:[r.jsx(Te,{path:"/auth",element:r.jsx(eS,{})}),r.jsx(Te,{path:"/auth/signin",element:r.jsx(tS,{})}),r.jsx(Te,{path:"/auth/avatar",element:r.jsx(nS,{})}),r.jsx(Te,{path:"/auth/username",element:r.jsx(iS,{})}),r.jsx(Te,{path:"/welcome",element:r.jsx(oS,{})}),r.jsxs(Te,{element:r.jsx(Hb,{}),children:[r.jsx(Te,{path:"/",element:r.jsx(Vf,{})}),r.jsx(Te,{path:"/play",element:r.jsx(W1,{})}),r.jsx(Te,{path:"/play/classic",element:r.jsx(S1,{})}),r.jsx(Te,{path:"/play/party",element:r.jsx(fw,{})}),r.jsx(Te,{path:"/profile",element:r.jsx(Ow,{})}),r.jsx(Te,{path:"/profile/leaderboard",element:r.jsx(Mw,{})}),r.jsx(Te,{path:"/profile/history",element:r.jsx(Ww,{})}),r.jsx(Te,{path:"/profile/rewards",element:r.jsx(s2,{})}),r.jsx(Te,{path:"/profile/badges",element:r.jsx(a2,{})}),r.jsx(Te,{path:"/profile/achievements",element:r.jsx(o2,{})}),r.jsx(Te,{path:"/profile/streaks",element:r.jsx(l2,{})}),r.jsx(Te,{path:"/profile/quests",element:r.jsx(d2,{})}),r.jsx(Te,{path:"/profile/settings",element:r.jsx(u2,{})}),r.jsx(Te,{path:"/profile/edit",element:r.jsx(w2,{})}),r.jsx(Te,{path:"/profile/privacy",element:r.jsx(j2,{})}),r.jsx(Te,{path:"/swipe",element:r.jsx(mw,{})}),r.jsx(Te,{path:"/leaders",element:r.jsx(ab,{to:"/profile/leaderboard",replace:!0})}),r.jsx(Te,{path:"/quiz/:category",element:r.jsx(sw,{})}),r.jsx(Te,{path:"/quiz/play",element:r.jsx(gw,{})}),r.jsx(Te,{path:"/practice/start",element:r.jsx(xw,{})}),r.jsx(Te,{path:"/surprise",element:r.jsx(Lw,{})}),r.jsx(Te,{path:"*",element:r.jsx(Vf,{})})]})]}),r.jsx(lS,{})]}):r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#000"},children:r.jsx("div",{style:{color:"#fff"},children:"Loading..."})})}lc.createRoot(document.getElementById("root")).render(r.jsx(It.StrictMode,{children:r.jsx(Ab,{children:r.jsx(mS,{})})}));export{cl as $,AS as A,PS as B,Jj as C,US as D,Xr as E,rr as F,ar as G,FS as H,BS as I,$S as J,yN as K,Bn as L,DS as M,Ih as N,ro as O,Vh as P,HN as Q,KN as R,Sg as S,ir as T,RN as U,Rs as V,D0 as W,vs as X,Ir as Y,mt as Z,Ha as _,Gk as a,L2 as a0,z2 as a1,Ps as a2,gS as a3,Be as a4,J5 as a5,H0 as a6,pS as a7,Re as a8,T2 as a9,q2 as aa,At as ab,ai as ac,U0 as ad,xS as ae,NS as b,Fg as c,kS as d,jS as e,MS as f,Qh as g,IS as h,WS as i,ES as j,sr as k,zS as l,OS as m,wS as n,CS as o,Gh as p,LS as q,Cj as r,TS as s,vS as t,bS as u,SS as v,_S as w,JN as x,yS as y,RS as z};
