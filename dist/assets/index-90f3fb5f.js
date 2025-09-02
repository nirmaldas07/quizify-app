(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();var km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Md(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zd={exports:{}},ti={},Dd={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=Symbol.for("react.element"),Sm=Symbol.for("react.portal"),Cm=Symbol.for("react.fragment"),Em=Symbol.for("react.strict_mode"),Rm=Symbol.for("react.profiler"),Tm=Symbol.for("react.provider"),Pm=Symbol.for("react.context"),_m=Symbol.for("react.forward_ref"),Am=Symbol.for("react.suspense"),Lm=Symbol.for("react.memo"),Im=Symbol.for("react.lazy"),nc=Symbol.iterator;function Mm(e){return e===null||typeof e!="object"?null:(e=nc&&e[nc]||e["@@iterator"],typeof e=="function"?e:null)}var Fd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Od=Object.assign,$d={};function Mr(e,t,r){this.props=e,this.context=t,this.refs=$d,this.updater=r||Fd}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bd(){}Bd.prototype=Mr.prototype;function Xo(e,t,r){this.props=e,this.context=t,this.refs=$d,this.updater=r||Fd}var Ko=Xo.prototype=new Bd;Ko.constructor=Xo;Od(Ko,Mr.prototype);Ko.isPureReactComponent=!0;var rc=Array.isArray,Ud=Object.prototype.hasOwnProperty,Jo={current:null},qd={key:!0,ref:!0,__self:!0,__source:!0};function Qd(e,t,r){var s,a={},i=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Ud.call(t,s)&&!qd.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:Is,type:e,key:i,ref:o,props:a,_owner:Jo.current}}function zm(e,t){return{$$typeof:Is,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Is}function Dm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var sc=/\/+/g;function bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dm(""+e.key):t.toString(36)}function ma(e,t,r,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Is:case Sm:o=!0}}if(o)return o=e,a=a(o),e=s===""?"."+bi(o,0):s,rc(a)?(r="",e!=null&&(r=e.replace(sc,"$&/")+"/"),ma(a,t,r,"",function(c){return c})):a!=null&&(Zo(a)&&(a=zm(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(sc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,s=s===""?".":s+":",rc(e))for(var l=0;l<e.length;l++){i=e[l];var u=s+bi(i,l);o+=ma(i,t,r,u,a)}else if(u=Mm(e),typeof u=="function")for(e=u.call(e),l=0;!(i=e.next()).done;)i=i.value,u=s+bi(i,l++),o+=ma(i,t,r,u,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Us(e,t,r){if(e==null)return e;var s=[],a=0;return ma(e,s,"","",function(i){return t.call(r,i,a++)}),s}function Fm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pt={current:null},ha={transition:null},Om={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:ha,ReactCurrentOwner:Jo};function Yd(){throw Error("act(...) is not supported in production builds of React.")}we.Children={map:Us,forEach:function(e,t,r){Us(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Us(e,function(){t++}),t},toArray:function(e){return Us(e,function(t){return t})||[]},only:function(e){if(!Zo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};we.Component=Mr;we.Fragment=Cm;we.Profiler=Rm;we.PureComponent=Xo;we.StrictMode=Em;we.Suspense=Am;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Om;we.act=Yd;we.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Od({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Jo.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Ud.call(t,u)&&!qd.hasOwnProperty(u)&&(s[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)s.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];s.children=l}return{$$typeof:Is,type:e.type,key:a,ref:i,props:s,_owner:o}};we.createContext=function(e){return e={$$typeof:Pm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tm,_context:e},e.Consumer=e};we.createElement=Qd;we.createFactory=function(e){var t=Qd.bind(null,e);return t.type=e,t};we.createRef=function(){return{current:null}};we.forwardRef=function(e){return{$$typeof:_m,render:e}};we.isValidElement=Zo;we.lazy=function(e){return{$$typeof:Im,_payload:{_status:-1,_result:e},_init:Fm}};we.memo=function(e,t){return{$$typeof:Lm,type:e,compare:t===void 0?null:t}};we.startTransition=function(e){var t=ha.transition;ha.transition={};try{e()}finally{ha.transition=t}};we.unstable_act=Yd;we.useCallback=function(e,t){return pt.current.useCallback(e,t)};we.useContext=function(e){return pt.current.useContext(e)};we.useDebugValue=function(){};we.useDeferredValue=function(e){return pt.current.useDeferredValue(e)};we.useEffect=function(e,t){return pt.current.useEffect(e,t)};we.useId=function(){return pt.current.useId()};we.useImperativeHandle=function(e,t,r){return pt.current.useImperativeHandle(e,t,r)};we.useInsertionEffect=function(e,t){return pt.current.useInsertionEffect(e,t)};we.useLayoutEffect=function(e,t){return pt.current.useLayoutEffect(e,t)};we.useMemo=function(e,t){return pt.current.useMemo(e,t)};we.useReducer=function(e,t,r){return pt.current.useReducer(e,t,r)};we.useRef=function(e){return pt.current.useRef(e)};we.useState=function(e){return pt.current.useState(e)};we.useSyncExternalStore=function(e,t,r){return pt.current.useSyncExternalStore(e,t,r)};we.useTransition=function(){return pt.current.useTransition()};we.version="18.3.1";Dd.exports=we;var d=Dd.exports;const ft=Md(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m=d,Bm=Symbol.for("react.element"),Um=Symbol.for("react.fragment"),qm=Object.prototype.hasOwnProperty,Qm=$m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ym={key:!0,ref:!0,__self:!0,__source:!0};function Hd(e,t,r){var s,a={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)qm.call(t,s)&&!Ym.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:Bm,type:e,key:i,ref:o,props:a,_owner:Qm.current}}ti.Fragment=Um;ti.jsx=Hd;ti.jsxs=Hd;zd.exports=ti;var n=zd.exports,Zi={},Wd={exports:{}},Et={},Gd={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,_){var z=R.length;R.push(_);e:for(;0<z;){var A=z-1>>>1,L=R[A];if(0<a(L,_))R[A]=_,R[z]=L,z=A;else break e}}function r(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var _=R[0],z=R.pop();if(z!==_){R[0]=z;e:for(var A=0,L=R.length,I=L>>>1;A<I;){var V=2*(A+1)-1,ne=R[V],re=V+1,Q=R[re];if(0>a(ne,z))re<L&&0>a(Q,ne)?(R[A]=Q,R[re]=z,A=re):(R[A]=ne,R[V]=z,A=V);else if(re<L&&0>a(Q,z))R[A]=Q,R[re]=z,A=re;else break e}}return _}function a(R,_){var z=R.sortIndex-_.sortIndex;return z!==0?z:R.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,w=!1,x=!1,N=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var _=r(c);_!==null;){if(_.callback===null)s(c);else if(_.startTime<=R)s(c),_.sortIndex=_.expirationTime,t(u,_);else break;_=r(c)}}function E(R){if(N=!1,y(R),!x)if(r(u)!==null)x=!0,U(j);else{var _=r(c);_!==null&&O(E,_.startTime-R)}}function j(R,_){x=!1,N&&(N=!1,g(v),v=-1),w=!0;var z=m;try{for(y(_),p=r(u);p!==null&&(!(p.expirationTime>_)||R&&!T());){var A=p.callback;if(typeof A=="function"){p.callback=null,m=p.priorityLevel;var L=A(p.expirationTime<=_);_=e.unstable_now(),typeof L=="function"?p.callback=L:p===r(u)&&s(u),y(_)}else s(u);p=r(u)}if(p!==null)var I=!0;else{var V=r(c);V!==null&&O(E,V.startTime-_),I=!1}return I}finally{p=null,m=z,w=!1}}var P=!1,S=null,v=-1,b=5,k=-1;function T(){return!(e.unstable_now()-k<b)}function F(){if(S!==null){var R=e.unstable_now();k=R;var _=!0;try{_=S(!0,R)}finally{_?q():(P=!1,S=null)}}else P=!1}var q;if(typeof h=="function")q=function(){h(F)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,Y=Z.port2;Z.port1.onmessage=F,q=function(){Y.postMessage(null)}}else q=function(){C(F,0)};function U(R){S=R,P||(P=!0,q())}function O(R,_){v=C(function(){R(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,U(j))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(R){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var z=m;m=_;try{return R()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,_){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=m;m=R;try{return _()}finally{m=z}},e.unstable_scheduleCallback=function(R,_,z){var A=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?A+z:A):z=A,R){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=z+L,R={id:f++,callback:_,priorityLevel:R,startTime:z,expirationTime:L,sortIndex:-1},z>A?(R.sortIndex=z,t(c,R),r(u)===null&&R===r(c)&&(N?(g(v),v=-1):N=!0,O(E,z-A))):(R.sortIndex=L,t(u,R),x||w||(x=!0,U(j))),R},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(R){var _=m;return function(){var z=m;m=_;try{return R.apply(this,arguments)}finally{m=z}}}})(Vd);Gd.exports=Vd;var Hm=Gd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=d,Ct=Hm;function W(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xd=new Set,xs={};function sr(e,t){Rr(e,t),Rr(e+"Capture",t)}function Rr(e,t){for(xs[e]=t,e=0;e<t.length;e++)Xd.add(t[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eo=Object.prototype.hasOwnProperty,Gm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ac={},ic={};function Vm(e){return eo.call(ic,e)?!0:eo.call(ac,e)?!1:Gm.test(e)?ic[e]=!0:(ac[e]=!0,!1)}function Xm(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Km(e,t,r,s){if(t===null||typeof t>"u"||Xm(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xt(e,t,r,s,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){at[e]=new xt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];at[t]=new xt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){at[e]=new xt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){at[e]=new xt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){at[e]=new xt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){at[e]=new xt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){at[e]=new xt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){at[e]=new xt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){at[e]=new xt(e,5,!1,e.toLowerCase(),null,!1,!1)});var el=/[\-:]([a-z])/g;function tl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(el,tl);at[t]=new xt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(el,tl);at[t]=new xt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(el,tl);at[t]=new xt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){at[e]=new xt(e,1,!1,e.toLowerCase(),null,!1,!1)});at.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){at[e]=new xt(e,1,!1,e.toLowerCase(),null,!0,!0)});function nl(e,t,r,s){var a=at.hasOwnProperty(t)?at[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Km(t,r,a,s)&&(r=null),s||a===null?Vm(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var pn=Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qs=Symbol.for("react.element"),cr=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),rl=Symbol.for("react.strict_mode"),to=Symbol.for("react.profiler"),Kd=Symbol.for("react.provider"),Jd=Symbol.for("react.context"),sl=Symbol.for("react.forward_ref"),no=Symbol.for("react.suspense"),ro=Symbol.for("react.suspense_list"),al=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),Zd=Symbol.for("react.offscreen"),oc=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=oc&&e[oc]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,wi;function ns(e){if(wi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);wi=t&&t[1]||""}return`
`+wi+e}var ji=!1;function Ni(e,t){if(!e||ji)return"";ji=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var s=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){s=c}e.call(t.prototype)}else{try{throw Error()}catch(c){s=c}e()}}catch(c){if(c&&s&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),i=s.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var u=`
`+a[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{ji=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ns(e):""}function Jm(e){switch(e.tag){case 5:return ns(e.type);case 16:return ns("Lazy");case 13:return ns("Suspense");case 19:return ns("SuspenseList");case 0:case 2:case 15:return e=Ni(e.type,!1),e;case 11:return e=Ni(e.type.render,!1),e;case 1:return e=Ni(e.type,!0),e;default:return""}}function so(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dr:return"Fragment";case cr:return"Portal";case to:return"Profiler";case rl:return"StrictMode";case no:return"Suspense";case ro:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jd:return(e.displayName||"Context")+".Consumer";case Kd:return(e._context.displayName||"Context")+".Provider";case sl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case al:return t=e.displayName||null,t!==null?t:so(e.type)||"Memo";case jn:t=e._payload,e=e._init;try{return so(e(t))}catch{}}return null}function Zm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return so(t);case 8:return t===rl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function e0(e){var t=eu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){s=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qs(e){e._valueTracker||(e._valueTracker=e0(e))}function tu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=eu(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ao(e,t){var r=t.checked;return Ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function lc(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=Dn(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nu(e,t){t=t.checked,t!=null&&nl(e,"checked",t,!1)}function io(e,t){nu(e,t);var r=Dn(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oo(e,t.type,r):t.hasOwnProperty("defaultValue")&&oo(e,t.type,Dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function oo(e,t,r){(t!=="number"||Ta(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var rs=Array.isArray;function wr(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Dn(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function lo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(W(91));return Ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(W(92));if(rs(r)){if(1<r.length)throw Error(W(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Dn(r)}}function ru(e,t){var r=Dn(t.value),s=Dn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function uc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function su(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function co(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?su(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ys,au=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ys=Ys||document.createElement("div"),Ys.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ys.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gs(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},t0=["Webkit","ms","Moz","O"];Object.keys(is).forEach(function(e){t0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),is[t]=is[e]})});function iu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||is.hasOwnProperty(e)&&is[e]?(""+t).trim():t+"px"}function ou(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=iu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var n0=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uo(e,t){if(t){if(n0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(W(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(W(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(W(61))}if(t.style!=null&&typeof t.style!="object")throw Error(W(62))}}function fo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mo=null;function il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ho=null,jr=null,Nr=null;function fc(e){if(e=Ds(e)){if(typeof ho!="function")throw Error(W(280));var t=e.stateNode;t&&(t=ii(t),ho(e.stateNode,e.type,t))}}function lu(e){jr?Nr?Nr.push(e):Nr=[e]:jr=e}function cu(){if(jr){var e=jr,t=Nr;if(Nr=jr=null,fc(e),t)for(e=0;e<t.length;e++)fc(t[e])}}function du(e,t){return e(t)}function uu(){}var ki=!1;function fu(e,t,r){if(ki)return e(t,r);ki=!0;try{return du(e,t,r)}finally{ki=!1,(jr!==null||Nr!==null)&&(uu(),cu())}}function vs(e,t){var r=e.stateNode;if(r===null)return null;var s=ii(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(W(231,t,typeof r));return r}var po=!1;if(dn)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){po=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{po=!1}function r0(e,t,r,s,a,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(f){this.onError(f)}}var os=!1,Pa=null,_a=!1,xo=null,s0={onError:function(e){os=!0,Pa=e}};function a0(e,t,r,s,a,i,o,l,u){os=!1,Pa=null,r0.apply(s0,arguments)}function i0(e,t,r,s,a,i,o,l,u){if(a0.apply(this,arguments),os){if(os){var c=Pa;os=!1,Pa=null}else throw Error(W(198));_a||(_a=!0,xo=c)}}function ar(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function mu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mc(e){if(ar(e)!==e)throw Error(W(188))}function o0(e){var t=e.alternate;if(!t){if(t=ar(e),t===null)throw Error(W(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return mc(a),e;if(i===s)return mc(a),t;i=i.sibling}throw Error(W(188))}if(r.return!==s.return)r=a,s=i;else{for(var o=!1,l=a.child;l;){if(l===r){o=!0,r=a,s=i;break}if(l===s){o=!0,s=a,r=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===r){o=!0,r=i,s=a;break}if(l===s){o=!0,s=i,r=a;break}l=l.sibling}if(!o)throw Error(W(189))}}if(r.alternate!==s)throw Error(W(190))}if(r.tag!==3)throw Error(W(188));return r.stateNode.current===r?e:t}function hu(e){return e=o0(e),e!==null?pu(e):null}function pu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pu(e);if(t!==null)return t;e=e.sibling}return null}var xu=Ct.unstable_scheduleCallback,hc=Ct.unstable_cancelCallback,l0=Ct.unstable_shouldYield,c0=Ct.unstable_requestPaint,Ge=Ct.unstable_now,d0=Ct.unstable_getCurrentPriorityLevel,ol=Ct.unstable_ImmediatePriority,gu=Ct.unstable_UserBlockingPriority,Aa=Ct.unstable_NormalPriority,u0=Ct.unstable_LowPriority,vu=Ct.unstable_IdlePriority,ni=null,Zt=null;function f0(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:p0,m0=Math.log,h0=Math.LN2;function p0(e){return e>>>=0,e===0?32:31-(m0(e)/h0|0)|0}var Hs=64,Ws=4194304;function ss(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function La(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~a;l!==0?s=ss(l):(i&=o,i!==0&&(s=ss(i)))}else o=r&~a,o!==0?s=ss(o):i!==0&&(s=ss(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-qt(t),a=1<<r,s|=e[r],t&=~a;return s}function x0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g0(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-qt(i),l=1<<o,u=a[o];u===-1?(!(l&r)||l&s)&&(a[o]=x0(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}function go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yu(){var e=Hs;return Hs<<=1,!(Hs&4194240)&&(Hs=64),e}function Si(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ms(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qt(t),e[t]=r}function v0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-qt(r),i=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~i}}function ll(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-qt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var Te=0;function bu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wu,cl,ju,Nu,ku,vo=!1,Gs=[],Tn=null,Pn=null,_n=null,ys=new Map,bs=new Map,Sn=[],y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pc(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":ys.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(t.pointerId)}}function Qr(e,t,r,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ds(t),t!==null&&cl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function b0(e,t,r,s,a){switch(t){case"focusin":return Tn=Qr(Tn,e,t,r,s,a),!0;case"dragenter":return Pn=Qr(Pn,e,t,r,s,a),!0;case"mouseover":return _n=Qr(_n,e,t,r,s,a),!0;case"pointerover":var i=a.pointerId;return ys.set(i,Qr(ys.get(i)||null,e,t,r,s,a)),!0;case"gotpointercapture":return i=a.pointerId,bs.set(i,Qr(bs.get(i)||null,e,t,r,s,a)),!0}return!1}function Su(e){var t=Yn(e.target);if(t!==null){var r=ar(t);if(r!==null){if(t=r.tag,t===13){if(t=mu(r),t!==null){e.blockedOn=t,ku(e.priority,function(){ju(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=yo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);mo=s,r.target.dispatchEvent(s),mo=null}else return t=Ds(r),t!==null&&cl(t),e.blockedOn=r,!1;t.shift()}return!0}function xc(e,t,r){pa(e)&&r.delete(t)}function w0(){vo=!1,Tn!==null&&pa(Tn)&&(Tn=null),Pn!==null&&pa(Pn)&&(Pn=null),_n!==null&&pa(_n)&&(_n=null),ys.forEach(xc),bs.forEach(xc)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,vo||(vo=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,w0)))}function ws(e){function t(a){return Yr(a,e)}if(0<Gs.length){Yr(Gs[0],e);for(var r=1;r<Gs.length;r++){var s=Gs[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Tn!==null&&Yr(Tn,e),Pn!==null&&Yr(Pn,e),_n!==null&&Yr(_n,e),ys.forEach(t),bs.forEach(t),r=0;r<Sn.length;r++)s=Sn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Sn.length&&(r=Sn[0],r.blockedOn===null);)Su(r),r.blockedOn===null&&Sn.shift()}var kr=pn.ReactCurrentBatchConfig,Ia=!0;function j0(e,t,r,s){var a=Te,i=kr.transition;kr.transition=null;try{Te=1,dl(e,t,r,s)}finally{Te=a,kr.transition=i}}function N0(e,t,r,s){var a=Te,i=kr.transition;kr.transition=null;try{Te=4,dl(e,t,r,s)}finally{Te=a,kr.transition=i}}function dl(e,t,r,s){if(Ia){var a=yo(e,t,r,s);if(a===null)Mi(e,t,s,Ma,r),pc(e,s);else if(b0(a,e,t,r,s))s.stopPropagation();else if(pc(e,s),t&4&&-1<y0.indexOf(e)){for(;a!==null;){var i=Ds(a);if(i!==null&&wu(i),i=yo(e,t,r,s),i===null&&Mi(e,t,s,Ma,r),i===a)break;a=i}a!==null&&s.stopPropagation()}else Mi(e,t,s,null,r)}}var Ma=null;function yo(e,t,r,s){if(Ma=null,e=il(s),e=Yn(e),e!==null)if(t=ar(e),t===null)e=null;else if(r=t.tag,r===13){if(e=mu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ma=e,null}function Cu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d0()){case ol:return 1;case gu:return 4;case Aa:case u0:return 16;case vu:return 536870912;default:return 16}default:return 16}}var En=null,ul=null,xa=null;function Eu(){if(xa)return xa;var e,t=ul,r=t.length,s,a="value"in En?En.value:En.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(s=1;s<=o&&t[r-s]===a[i-s];s++);return xa=a.slice(e,1<s?1-s:void 0)}function ga(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vs(){return!0}function gc(){return!1}function Rt(e){function t(r,s,a,i,o){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vs:gc,this.isPropagationStopped=gc,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Rt(zr),zs=Ye({},zr,{view:0,detail:0}),k0=Rt(zs),Ci,Ei,Hr,ri=Ye({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(Ci=e.screenX-Hr.screenX,Ei=e.screenY-Hr.screenY):Ei=Ci=0,Hr=e),Ci)},movementY:function(e){return"movementY"in e?e.movementY:Ei}}),vc=Rt(ri),S0=Ye({},ri,{dataTransfer:0}),C0=Rt(S0),E0=Ye({},zs,{relatedTarget:0}),Ri=Rt(E0),R0=Ye({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=Rt(R0),P0=Ye({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_0=Rt(P0),A0=Ye({},zr,{data:0}),yc=Rt(A0),L0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=M0[e])?!!t[e]:!1}function ml(){return z0}var D0=Ye({},zs,{key:function(e){if(e.key){var t=L0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?I0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),F0=Rt(D0),O0=Ye({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bc=Rt(O0),$0=Ye({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),B0=Rt($0),U0=Ye({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),q0=Rt(U0),Q0=Ye({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Y0=Rt(Q0),H0=[9,13,27,32],hl=dn&&"CompositionEvent"in window,ls=null;dn&&"documentMode"in document&&(ls=document.documentMode);var W0=dn&&"TextEvent"in window&&!ls,Ru=dn&&(!hl||ls&&8<ls&&11>=ls),wc=String.fromCharCode(32),jc=!1;function Tu(e,t){switch(e){case"keyup":return H0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function G0(e,t){switch(e){case"compositionend":return Pu(t);case"keypress":return t.which!==32?null:(jc=!0,wc);case"textInput":return e=t.data,e===wc&&jc?null:e;default:return null}}function V0(e,t){if(ur)return e==="compositionend"||!hl&&Tu(e,t)?(e=Eu(),xa=ul=En=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ru&&t.locale!=="ko"?null:t.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!X0[e.type]:t==="textarea"}function _u(e,t,r,s){lu(s),t=za(t,"onChange"),0<t.length&&(r=new fl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var cs=null,js=null;function K0(e){Uu(e,0)}function si(e){var t=hr(e);if(tu(t))return e}function J0(e,t){if(e==="change")return t}var Au=!1;if(dn){var Ti;if(dn){var Pi="oninput"in document;if(!Pi){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),Pi=typeof kc.oninput=="function"}Ti=Pi}else Ti=!1;Au=Ti&&(!document.documentMode||9<document.documentMode)}function Sc(){cs&&(cs.detachEvent("onpropertychange",Lu),js=cs=null)}function Lu(e){if(e.propertyName==="value"&&si(js)){var t=[];_u(t,js,e,il(e)),fu(K0,t)}}function Z0(e,t,r){e==="focusin"?(Sc(),cs=t,js=r,cs.attachEvent("onpropertychange",Lu)):e==="focusout"&&Sc()}function eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si(js)}function th(e,t){if(e==="click")return si(t)}function nh(e,t){if(e==="input"||e==="change")return si(t)}function rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:rh;function Ns(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!eo.call(t,a)||!Yt(e[a],t[a]))return!1}return!0}function Cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,t){var r=Cc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Cc(r)}}function Iu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Iu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mu(){for(var e=window,t=Ta();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ta(e.document)}return t}function pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sh(e){var t=Mu(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Iu(r.ownerDocument.documentElement,r)){if(s!==null&&pl(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=Ec(r,i);var o=Ec(r,s);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ah=dn&&"documentMode"in document&&11>=document.documentMode,fr=null,bo=null,ds=null,wo=!1;function Rc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wo||fr==null||fr!==Ta(s)||(s=fr,"selectionStart"in s&&pl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ds&&Ns(ds,s)||(ds=s,s=za(bo,"onSelect"),0<s.length&&(t=new fl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=fr)))}function Xs(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var mr={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionend:Xs("Transition","TransitionEnd")},_i={},zu={};dn&&(zu=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function ai(e){if(_i[e])return _i[e];if(!mr[e])return e;var t=mr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in zu)return _i[e]=t[r];return e}var Du=ai("animationend"),Fu=ai("animationiteration"),Ou=ai("animationstart"),$u=ai("transitionend"),Bu=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){Bu.set(e,t),sr(t,[e])}for(var Ai=0;Ai<Tc.length;Ai++){var Li=Tc[Ai],ih=Li.toLowerCase(),oh=Li[0].toUpperCase()+Li.slice(1);On(ih,"on"+oh)}On(Du,"onAnimationEnd");On(Fu,"onAnimationIteration");On(Ou,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On($u,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var as="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lh=new Set("cancel close invalid load scroll toggle".split(" ").concat(as));function Pc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,i0(s,t,void 0,e),e.currentTarget=null}function Uu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var o=s.length-1;0<=o;o--){var l=s[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&a.isPropagationStopped())break e;Pc(a,l,c),i=u}else for(o=0;o<s.length;o++){if(l=s[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&a.isPropagationStopped())break e;Pc(a,l,c),i=u}}}if(_a)throw e=xo,_a=!1,xo=null,e}function De(e,t){var r=t[Co];r===void 0&&(r=t[Co]=new Set);var s=e+"__bubble";r.has(s)||(qu(t,e,2,!1),r.add(s))}function Ii(e,t,r){var s=0;t&&(s|=4),qu(r,e,s,t)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function ks(e){if(!e[Ks]){e[Ks]=!0,Xd.forEach(function(r){r!=="selectionchange"&&(lh.has(r)||Ii(r,!1,e),Ii(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ks]||(t[Ks]=!0,Ii("selectionchange",!1,t))}}function qu(e,t,r,s){switch(Cu(t)){case 1:var a=j0;break;case 4:a=N0;break;default:a=dl}r=a.bind(null,t,r,e),a=void 0,!po||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Mi(e,t,r,s,a){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=s.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Yn(l),o===null)return;if(u=o.tag,u===5||u===6){s=i=o;continue e}l=l.parentNode}}s=s.return}fu(function(){var c=i,f=il(r),p=[];e:{var m=Bu.get(e);if(m!==void 0){var w=fl,x=e;switch(e){case"keypress":if(ga(r)===0)break e;case"keydown":case"keyup":w=F0;break;case"focusin":x="focus",w=Ri;break;case"focusout":x="blur",w=Ri;break;case"beforeblur":case"afterblur":w=Ri;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=B0;break;case Du:case Fu:case Ou:w=T0;break;case $u:w=q0;break;case"scroll":w=k0;break;case"wheel":w=Y0;break;case"copy":case"cut":case"paste":w=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=bc}var N=(t&4)!==0,C=!N&&e==="scroll",g=N?m!==null?m+"Capture":null:m;N=[];for(var h=c,y;h!==null;){y=h;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,g!==null&&(E=vs(h,g),E!=null&&N.push(Ss(h,E,y)))),C)break;h=h.return}0<N.length&&(m=new w(m,x,null,r,f),p.push({event:m,listeners:N}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&r!==mo&&(x=r.relatedTarget||r.fromElement)&&(Yn(x)||x[un]))break e;if((w||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,w?(x=r.relatedTarget||r.toElement,w=c,x=x?Yn(x):null,x!==null&&(C=ar(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(N=vc,E="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(N=bc,E="onPointerLeave",g="onPointerEnter",h="pointer"),C=w==null?m:hr(w),y=x==null?m:hr(x),m=new N(E,h+"leave",w,r,f),m.target=C,m.relatedTarget=y,E=null,Yn(f)===c&&(N=new N(g,h+"enter",x,r,f),N.target=y,N.relatedTarget=C,E=N),C=E,w&&x)t:{for(N=w,g=x,h=0,y=N;y;y=lr(y))h++;for(y=0,E=g;E;E=lr(E))y++;for(;0<h-y;)N=lr(N),h--;for(;0<y-h;)g=lr(g),y--;for(;h--;){if(N===g||g!==null&&N===g.alternate)break t;N=lr(N),g=lr(g)}N=null}else N=null;w!==null&&_c(p,m,w,N,!1),x!==null&&C!==null&&_c(p,C,x,N,!0)}}e:{if(m=c?hr(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var j=J0;else if(Nc(m))if(Au)j=nh;else{j=eh;var P=Z0}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=th);if(j&&(j=j(e,c))){_u(p,j,r,f);break e}P&&P(e,m,c),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&oo(m,"number",m.value)}switch(P=c?hr(c):window,e){case"focusin":(Nc(P)||P.contentEditable==="true")&&(fr=P,bo=c,ds=null);break;case"focusout":ds=bo=fr=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,Rc(p,r,f);break;case"selectionchange":if(ah)break;case"keydown":case"keyup":Rc(p,r,f)}var S;if(hl)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ur?Tu(e,r)&&(v="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(v="onCompositionStart");v&&(Ru&&r.locale!=="ko"&&(ur||v!=="onCompositionStart"?v==="onCompositionEnd"&&ur&&(S=Eu()):(En=f,ul="value"in En?En.value:En.textContent,ur=!0)),P=za(c,v),0<P.length&&(v=new yc(v,e,null,r,f),p.push({event:v,listeners:P}),S?v.data=S:(S=Pu(r),S!==null&&(v.data=S)))),(S=W0?G0(e,r):V0(e,r))&&(c=za(c,"onBeforeInput"),0<c.length&&(f=new yc("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:c}),f.data=S))}Uu(p,t)})}function Ss(e,t,r){return{instance:e,listener:t,currentTarget:r}}function za(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=vs(e,r),i!=null&&s.unshift(Ss(e,i,a)),i=vs(e,t),i!=null&&s.push(Ss(e,i,a))),e=e.return}return s}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _c(e,t,r,s,a){for(var i=t._reactName,o=[];r!==null&&r!==s;){var l=r,u=l.alternate,c=l.stateNode;if(u!==null&&u===s)break;l.tag===5&&c!==null&&(l=c,a?(u=vs(r,i),u!=null&&o.unshift(Ss(r,u,l))):a||(u=vs(r,i),u!=null&&o.push(Ss(r,u,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var ch=/\r\n?/g,dh=/\u0000|\uFFFD/g;function Ac(e){return(typeof e=="string"?e:""+e).replace(ch,`
`).replace(dh,"")}function Js(e,t,r){if(t=Ac(t),Ac(e)!==t&&r)throw Error(W(425))}function Da(){}var jo=null,No=null;function ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var So=typeof setTimeout=="function"?setTimeout:void 0,uh=typeof clearTimeout=="function"?clearTimeout:void 0,Lc=typeof Promise=="function"?Promise:void 0,fh=typeof queueMicrotask=="function"?queueMicrotask:typeof Lc<"u"?function(e){return Lc.resolve(null).then(e).catch(mh)}:So;function mh(e){setTimeout(function(){throw e})}function zi(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),ws(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);ws(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Dr,Cs="__reactProps$"+Dr,un="__reactContainer$"+Dr,Co="__reactEvents$"+Dr,hh="__reactListeners$"+Dr,ph="__reactHandles$"+Dr;function Yn(e){var t=e[Jt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[un]||r[Jt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ic(e);e!==null;){if(r=e[Jt])return r;e=Ic(e)}return t}e=r,r=e.parentNode}return null}function Ds(e){return e=e[Jt]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(W(33))}function ii(e){return e[Cs]||null}var Eo=[],pr=-1;function $n(e){return{current:e}}function Oe(e){0>pr||(e.current=Eo[pr],Eo[pr]=null,pr--)}function Me(e,t){pr++,Eo[pr]=e.current,e.current=t}var Fn={},ut=$n(Fn),yt=$n(!1),Zn=Fn;function Tr(e,t){var r=e.type.contextTypes;if(!r)return Fn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function bt(e){return e=e.childContextTypes,e!=null}function Fa(){Oe(yt),Oe(ut)}function Mc(e,t,r){if(ut.current!==Fn)throw Error(W(168));Me(ut,t),Me(yt,r)}function Qu(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(W(108,Zm(e)||"Unknown",a));return Ye({},r,s)}function Oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,Zn=ut.current,Me(ut,e),Me(yt,yt.current),!0}function zc(e,t,r){var s=e.stateNode;if(!s)throw Error(W(169));r?(e=Qu(e,t,Zn),s.__reactInternalMemoizedMergedChildContext=e,Oe(yt),Oe(ut),Me(ut,e)):Oe(yt),Me(yt,r)}var sn=null,oi=!1,Di=!1;function Yu(e){sn===null?sn=[e]:sn.push(e)}function xh(e){oi=!0,Yu(e)}function Bn(){if(!Di&&sn!==null){Di=!0;var e=0,t=Te;try{var r=sn;for(Te=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}sn=null,oi=!1}catch(a){throw sn!==null&&(sn=sn.slice(e+1)),xu(ol,Bn),a}finally{Te=t,Di=!1}}return null}var xr=[],gr=0,$a=null,Ba=0,Pt=[],_t=0,er=null,an=1,on="";function qn(e,t){xr[gr++]=Ba,xr[gr++]=$a,$a=e,Ba=t}function Hu(e,t,r){Pt[_t++]=an,Pt[_t++]=on,Pt[_t++]=er,er=e;var s=an;e=on;var a=32-qt(s)-1;s&=~(1<<a),r+=1;var i=32-qt(t)+a;if(30<i){var o=a-a%5;i=(s&(1<<o)-1).toString(32),s>>=o,a-=o,an=1<<32-qt(t)+a|r<<a|s,on=i+e}else an=1<<i|r<<a|s,on=e}function xl(e){e.return!==null&&(qn(e,1),Hu(e,1,0))}function gl(e){for(;e===$a;)$a=xr[--gr],xr[gr]=null,Ba=xr[--gr],xr[gr]=null;for(;e===er;)er=Pt[--_t],Pt[_t]=null,on=Pt[--_t],Pt[_t]=null,an=Pt[--_t],Pt[_t]=null}var St=null,kt=null,$e=!1,Ut=null;function Wu(e,t){var r=At(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Dc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,St=e,kt=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,St=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=er!==null?{id:an,overflow:on}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=At(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,St=e,kt=null,!0):!1;default:return!1}}function Ro(e){return(e.mode&1)!==0&&(e.flags&128)===0}function To(e){if($e){var t=kt;if(t){var r=t;if(!Dc(e,t)){if(Ro(e))throw Error(W(418));t=An(r.nextSibling);var s=St;t&&Dc(e,t)?Wu(s,r):(e.flags=e.flags&-4097|2,$e=!1,St=e)}}else{if(Ro(e))throw Error(W(418));e.flags=e.flags&-4097|2,$e=!1,St=e}}}function Fc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function Zs(e){if(e!==St)return!1;if(!$e)return Fc(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ko(e.type,e.memoizedProps)),t&&(t=kt)){if(Ro(e))throw Gu(),Error(W(418));for(;t;)Wu(e,t),t=An(t.nextSibling)}if(Fc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){kt=An(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=St?An(e.stateNode.nextSibling):null;return!0}function Gu(){for(var e=kt;e;)e=An(e.nextSibling)}function Pr(){kt=St=null,$e=!1}function vl(e){Ut===null?Ut=[e]:Ut.push(e)}var gh=pn.ReactCurrentBatchConfig;function Wr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(W(309));var s=r.stateNode}if(!s)throw Error(W(147,e));var a=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(W(284));if(!r._owner)throw Error(W(290,e))}return e}function ea(e,t){throw e=Object.prototype.toString.call(t),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oc(e){var t=e._init;return t(e._payload)}function Vu(e){function t(g,h){if(e){var y=g.deletions;y===null?(g.deletions=[h],g.flags|=16):y.push(h)}}function r(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function s(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function a(g,h){return g=zn(g,h),g.index=0,g.sibling=null,g}function i(g,h,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<h?(g.flags|=2,h):y):(g.flags|=2,h)):(g.flags|=1048576,h)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,h,y,E){return h===null||h.tag!==6?(h=Qi(y,g.mode,E),h.return=g,h):(h=a(h,y),h.return=g,h)}function u(g,h,y,E){var j=y.type;return j===dr?f(g,h,y.props.children,E,y.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jn&&Oc(j)===h.type)?(E=a(h,y.props),E.ref=Wr(g,h,y),E.return=g,E):(E=ka(y.type,y.key,y.props,null,g.mode,E),E.ref=Wr(g,h,y),E.return=g,E)}function c(g,h,y,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Yi(y,g.mode,E),h.return=g,h):(h=a(h,y.children||[]),h.return=g,h)}function f(g,h,y,E,j){return h===null||h.tag!==7?(h=Kn(y,g.mode,E,j),h.return=g,h):(h=a(h,y),h.return=g,h)}function p(g,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Qi(""+h,g.mode,y),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case qs:return y=ka(h.type,h.key,h.props,null,g.mode,y),y.ref=Wr(g,null,h),y.return=g,y;case cr:return h=Yi(h,g.mode,y),h.return=g,h;case jn:var E=h._init;return p(g,E(h._payload),y)}if(rs(h)||Ur(h))return h=Kn(h,g.mode,y,null),h.return=g,h;ea(g,h)}return null}function m(g,h,y,E){var j=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return j!==null?null:l(g,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qs:return y.key===j?u(g,h,y,E):null;case cr:return y.key===j?c(g,h,y,E):null;case jn:return j=y._init,m(g,h,j(y._payload),E)}if(rs(y)||Ur(y))return j!==null?null:f(g,h,y,E,null);ea(g,y)}return null}function w(g,h,y,E,j){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(y)||null,l(h,g,""+E,j);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case qs:return g=g.get(E.key===null?y:E.key)||null,u(h,g,E,j);case cr:return g=g.get(E.key===null?y:E.key)||null,c(h,g,E,j);case jn:var P=E._init;return w(g,h,y,P(E._payload),j)}if(rs(E)||Ur(E))return g=g.get(y)||null,f(h,g,E,j,null);ea(h,E)}return null}function x(g,h,y,E){for(var j=null,P=null,S=h,v=h=0,b=null;S!==null&&v<y.length;v++){S.index>v?(b=S,S=null):b=S.sibling;var k=m(g,S,y[v],E);if(k===null){S===null&&(S=b);break}e&&S&&k.alternate===null&&t(g,S),h=i(k,h,v),P===null?j=k:P.sibling=k,P=k,S=b}if(v===y.length)return r(g,S),$e&&qn(g,v),j;if(S===null){for(;v<y.length;v++)S=p(g,y[v],E),S!==null&&(h=i(S,h,v),P===null?j=S:P.sibling=S,P=S);return $e&&qn(g,v),j}for(S=s(g,S);v<y.length;v++)b=w(S,g,v,y[v],E),b!==null&&(e&&b.alternate!==null&&S.delete(b.key===null?v:b.key),h=i(b,h,v),P===null?j=b:P.sibling=b,P=b);return e&&S.forEach(function(T){return t(g,T)}),$e&&qn(g,v),j}function N(g,h,y,E){var j=Ur(y);if(typeof j!="function")throw Error(W(150));if(y=j.call(y),y==null)throw Error(W(151));for(var P=j=null,S=h,v=h=0,b=null,k=y.next();S!==null&&!k.done;v++,k=y.next()){S.index>v?(b=S,S=null):b=S.sibling;var T=m(g,S,k.value,E);if(T===null){S===null&&(S=b);break}e&&S&&T.alternate===null&&t(g,S),h=i(T,h,v),P===null?j=T:P.sibling=T,P=T,S=b}if(k.done)return r(g,S),$e&&qn(g,v),j;if(S===null){for(;!k.done;v++,k=y.next())k=p(g,k.value,E),k!==null&&(h=i(k,h,v),P===null?j=k:P.sibling=k,P=k);return $e&&qn(g,v),j}for(S=s(g,S);!k.done;v++,k=y.next())k=w(S,g,v,k.value,E),k!==null&&(e&&k.alternate!==null&&S.delete(k.key===null?v:k.key),h=i(k,h,v),P===null?j=k:P.sibling=k,P=k);return e&&S.forEach(function(F){return t(g,F)}),$e&&qn(g,v),j}function C(g,h,y,E){if(typeof y=="object"&&y!==null&&y.type===dr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case qs:e:{for(var j=y.key,P=h;P!==null;){if(P.key===j){if(j=y.type,j===dr){if(P.tag===7){r(g,P.sibling),h=a(P,y.props.children),h.return=g,g=h;break e}}else if(P.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jn&&Oc(j)===P.type){r(g,P.sibling),h=a(P,y.props),h.ref=Wr(g,P,y),h.return=g,g=h;break e}r(g,P);break}else t(g,P);P=P.sibling}y.type===dr?(h=Kn(y.props.children,g.mode,E,y.key),h.return=g,g=h):(E=ka(y.type,y.key,y.props,null,g.mode,E),E.ref=Wr(g,h,y),E.return=g,g=E)}return o(g);case cr:e:{for(P=y.key;h!==null;){if(h.key===P)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){r(g,h.sibling),h=a(h,y.children||[]),h.return=g,g=h;break e}else{r(g,h);break}else t(g,h);h=h.sibling}h=Yi(y,g.mode,E),h.return=g,g=h}return o(g);case jn:return P=y._init,C(g,h,P(y._payload),E)}if(rs(y))return x(g,h,y,E);if(Ur(y))return N(g,h,y,E);ea(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(r(g,h.sibling),h=a(h,y),h.return=g,g=h):(r(g,h),h=Qi(y,g.mode,E),h.return=g,g=h),o(g)):r(g,h)}return C}var _r=Vu(!0),Xu=Vu(!1),Ua=$n(null),qa=null,vr=null,yl=null;function bl(){yl=vr=qa=null}function wl(e){var t=Ua.current;Oe(Ua),e._currentValue=t}function Po(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Sr(e,t){qa=e,yl=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(vt=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(yl!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(qa===null)throw Error(W(308));vr=e,qa.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var Hn=null;function jl(e){Hn===null?Hn=[e]:Hn.push(e)}function Ku(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,jl(t)):(r.next=a.next,a.next=r),t.interleaved=r,fn(e,s)}function fn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Nn=!1;function Nl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ju(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ln(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,ke&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,fn(e,r)}return a=s.interleaved,a===null?(t.next=t,jl(s)):(t.next=a.next,a.next=t),s.interleaved=t,fn(e,r)}function va(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,ll(e,r)}}function $c(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=o:i=i.next=o,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Qa(e,t,r,s){var a=e.updateQueue;Nn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var p=a.baseState;o=0,f=c=u=null,l=i;do{var m=l.lane,w=l.eventTime;if((s&m)===m){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,N=l;switch(m=t,w=r,N.tag){case 1:if(x=N.payload,typeof x=="function"){p=x.call(w,p,m);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=N.payload,m=typeof x=="function"?x.call(w,p,m):x,m==null)break e;p=Ye({},p,m);break e;case 2:Nn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=w,u=p):f=f.next=w,o|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(f===null&&(u=p),a.baseState=u,a.firstBaseUpdate=c,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);nr|=o,e.lanes=o,e.memoizedState=p}}function Bc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(W(191,a));a.call(s)}}}var Fs={},en=$n(Fs),Es=$n(Fs),Rs=$n(Fs);function Wn(e){if(e===Fs)throw Error(W(174));return e}function kl(e,t){switch(Me(Rs,t),Me(Es,e),Me(en,Fs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:co(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=co(t,e)}Oe(en),Me(en,t)}function Ar(){Oe(en),Oe(Es),Oe(Rs)}function Zu(e){Wn(Rs.current);var t=Wn(en.current),r=co(t,e.type);t!==r&&(Me(Es,e),Me(en,r))}function Sl(e){Es.current===e&&(Oe(en),Oe(Es))}var qe=$n(0);function Ya(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fi=[];function Cl(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var ya=pn.ReactCurrentDispatcher,Oi=pn.ReactCurrentBatchConfig,tr=0,Qe=null,Je=null,tt=null,Ha=!1,us=!1,Ts=0,vh=0;function ot(){throw Error(W(321))}function El(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Yt(e[r],t[r]))return!1;return!0}function Rl(e,t,r,s,a,i){if(tr=i,Qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ya.current=e===null||e.memoizedState===null?jh:Nh,e=r(s,a),us){i=0;do{if(us=!1,Ts=0,25<=i)throw Error(W(301));i+=1,tt=Je=null,t.updateQueue=null,ya.current=kh,e=r(s,a)}while(us)}if(ya.current=Wa,t=Je!==null&&Je.next!==null,tr=0,tt=Je=Qe=null,Ha=!1,t)throw Error(W(300));return e}function Tl(){var e=Ts!==0;return Ts=0,e}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Qe.memoizedState=tt=e:tt=tt.next=e,tt}function zt(){if(Je===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=tt===null?Qe.memoizedState:tt.next;if(t!==null)tt=t,Je=e;else{if(e===null)throw Error(W(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},tt===null?Qe.memoizedState=tt=e:tt=tt.next=e}return tt}function Ps(e,t){return typeof t=="function"?t(e):t}function $i(e){var t=zt(),r=t.queue;if(r===null)throw Error(W(311));r.lastRenderedReducer=e;var s=Je,a=s.baseQueue,i=r.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}s.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,s=s.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((tr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),s=c.hasEagerState?c.eagerState:e(s,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=s):u=u.next=p,Qe.lanes|=f,nr|=f}c=c.next}while(c!==null&&c!==i);u===null?o=s:u.next=l,Yt(s,t.memoizedState)||(vt=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=u,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do i=a.lane,Qe.lanes|=i,nr|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Bi(e){var t=zt(),r=t.queue;if(r===null)throw Error(W(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Yt(i,t.memoizedState)||(vt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,s]}function ef(){}function tf(e,t){var r=Qe,s=zt(),a=t(),i=!Yt(s.memoizedState,a);if(i&&(s.memoizedState=a,vt=!0),s=s.queue,Pl(sf.bind(null,r,s,e),[e]),s.getSnapshot!==t||i||tt!==null&&tt.memoizedState.tag&1){if(r.flags|=2048,_s(9,rf.bind(null,r,s,a,t),void 0,null),nt===null)throw Error(W(349));tr&30||nf(r,t,a)}return a}function nf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function rf(e,t,r,s){t.value=r,t.getSnapshot=s,af(t)&&of(e)}function sf(e,t,r){return r(function(){af(t)&&of(e)})}function af(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Yt(e,r)}catch{return!0}}function of(e){var t=fn(e,1);t!==null&&Qt(t,e,1,-1)}function Uc(e){var t=Xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:e},t.queue=e,e=e.dispatch=wh.bind(null,Qe,e),[t.memoizedState,e]}function _s(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function lf(){return zt().memoizedState}function ba(e,t,r,s){var a=Xt();Qe.flags|=e,a.memoizedState=_s(1|t,r,void 0,s===void 0?null:s)}function li(e,t,r,s){var a=zt();s=s===void 0?null:s;var i=void 0;if(Je!==null){var o=Je.memoizedState;if(i=o.destroy,s!==null&&El(s,o.deps)){a.memoizedState=_s(t,r,i,s);return}}Qe.flags|=e,a.memoizedState=_s(1|t,r,i,s)}function qc(e,t){return ba(8390656,8,e,t)}function Pl(e,t){return li(2048,8,e,t)}function cf(e,t){return li(4,2,e,t)}function df(e,t){return li(4,4,e,t)}function uf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ff(e,t,r){return r=r!=null?r.concat([e]):null,li(4,4,uf.bind(null,t,e),r)}function _l(){}function mf(e,t){var r=zt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&El(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function hf(e,t){var r=zt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&El(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function pf(e,t,r){return tr&21?(Yt(r,t)||(r=yu(),Qe.lanes|=r,nr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=r)}function yh(e,t){var r=Te;Te=r!==0&&4>r?r:4,e(!0);var s=Oi.transition;Oi.transition={};try{e(!1),t()}finally{Te=r,Oi.transition=s}}function xf(){return zt().memoizedState}function bh(e,t,r){var s=Mn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},gf(e))vf(t,r);else if(r=Ku(e,t,r,s),r!==null){var a=ht();Qt(r,e,s,a),yf(r,t,s)}}function wh(e,t,r){var s=Mn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(gf(e))vf(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,r);if(a.hasEagerState=!0,a.eagerState=l,Yt(l,o)){var u=t.interleaved;u===null?(a.next=a,jl(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}r=Ku(e,t,a,s),r!==null&&(a=ht(),Qt(r,e,s,a),yf(r,t,s))}}function gf(e){var t=e.alternate;return e===Qe||t!==null&&t===Qe}function vf(e,t){us=Ha=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function yf(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,ll(e,r)}}var Wa={readContext:Mt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},jh={readContext:Mt,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:qc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ba(4194308,4,uf.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ba(4194308,4,e,t)},useInsertionEffect:function(e,t){return ba(4,2,e,t)},useMemo:function(e,t){var r=Xt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=Xt();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=bh.bind(null,Qe,e),[s.memoizedState,e]},useRef:function(e){var t=Xt();return e={current:e},t.memoizedState=e},useState:Uc,useDebugValue:_l,useDeferredValue:function(e){return Xt().memoizedState=e},useTransition:function(){var e=Uc(!1),t=e[0];return e=yh.bind(null,e[1]),Xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Qe,a=Xt();if($e){if(r===void 0)throw Error(W(407));r=r()}else{if(r=t(),nt===null)throw Error(W(349));tr&30||nf(s,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,qc(sf.bind(null,s,i,e),[e]),s.flags|=2048,_s(9,rf.bind(null,s,i,r,t),void 0,null),r},useId:function(){var e=Xt(),t=nt.identifierPrefix;if($e){var r=on,s=an;r=(s&~(1<<32-qt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ts++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=vh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Nh={readContext:Mt,useCallback:mf,useContext:Mt,useEffect:Pl,useImperativeHandle:ff,useInsertionEffect:cf,useLayoutEffect:df,useMemo:hf,useReducer:$i,useRef:lf,useState:function(){return $i(Ps)},useDebugValue:_l,useDeferredValue:function(e){var t=zt();return pf(t,Je.memoizedState,e)},useTransition:function(){var e=$i(Ps)[0],t=zt().memoizedState;return[e,t]},useMutableSource:ef,useSyncExternalStore:tf,useId:xf,unstable_isNewReconciler:!1},kh={readContext:Mt,useCallback:mf,useContext:Mt,useEffect:Pl,useImperativeHandle:ff,useInsertionEffect:cf,useLayoutEffect:df,useMemo:hf,useReducer:Bi,useRef:lf,useState:function(){return Bi(Ps)},useDebugValue:_l,useDeferredValue:function(e){var t=zt();return Je===null?t.memoizedState=e:pf(t,Je.memoizedState,e)},useTransition:function(){var e=Bi(Ps)[0],t=zt().memoizedState;return[e,t]},useMutableSource:ef,useSyncExternalStore:tf,useId:xf,unstable_isNewReconciler:!1};function $t(e,t){if(e&&e.defaultProps){t=Ye({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function _o(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Ye({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ci={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=ht(),a=Mn(e),i=ln(s,a);i.payload=t,r!=null&&(i.callback=r),t=Ln(e,i,a),t!==null&&(Qt(t,e,a,s),va(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=ht(),a=Mn(e),i=ln(s,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Ln(e,i,a),t!==null&&(Qt(t,e,a,s),va(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ht(),s=Mn(e),a=ln(r,s);a.tag=2,t!=null&&(a.callback=t),t=Ln(e,a,s),t!==null&&(Qt(t,e,s,r),va(t,e,s))}};function Qc(e,t,r,s,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ns(r,s)||!Ns(a,i):!0}function bf(e,t,r){var s=!1,a=Fn,i=t.contextType;return typeof i=="object"&&i!==null?i=Mt(i):(a=bt(t)?Zn:ut.current,s=t.contextTypes,i=(s=s!=null)?Tr(e,a):Fn),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Yc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Ao(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Nl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Mt(i):(i=bt(t)?Zn:ut.current,a.context=Tr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(_o(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ci.enqueueReplaceState(a,a.state,null),Qa(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t){try{var r="",s=t;do r+=Jm(s),s=s.return;while(s);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Ui(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Lo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Sh=typeof WeakMap=="function"?WeakMap:Map;function wf(e,t,r){r=ln(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Va||(Va=!0,qo=s),Lo(e,t)},r}function jf(e,t,r){r=ln(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Lo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Lo(e,t),typeof s!="function"&&(In===null?In=new Set([this]):In.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Hc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Sh;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=Oh.bind(null,e,t,r),t.then(e,e))}function Wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gc(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ln(-1,1),t.tag=2,Ln(r,t,1))),r.lanes|=1),e)}var Ch=pn.ReactCurrentOwner,vt=!1;function mt(e,t,r,s){t.child=e===null?Xu(t,null,r,s):_r(t,e.child,r,s)}function Vc(e,t,r,s,a){r=r.render;var i=t.ref;return Sr(t,a),s=Rl(e,t,r,s,i,a),r=Tl(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,mn(e,t,a)):($e&&r&&xl(t),t.flags|=1,mt(e,t,s,a),t.child)}function Xc(e,t,r,s,a){if(e===null){var i=r.type;return typeof i=="function"&&!Ol(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Nf(e,t,i,s,a)):(e=ka(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(r=r.compare,r=r!==null?r:Ns,r(o,s)&&e.ref===t.ref)return mn(e,t,a)}return t.flags|=1,e=zn(i,s),e.ref=t.ref,e.return=t,t.child=e}function Nf(e,t,r,s,a){if(e!==null){var i=e.memoizedProps;if(Ns(i,s)&&e.ref===t.ref)if(vt=!1,t.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(vt=!0);else return t.lanes=e.lanes,mn(e,t,a)}return Io(e,t,r,s,a)}function kf(e,t,r){var s=t.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(br,Nt),Nt|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(br,Nt),Nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:r,Me(br,Nt),Nt|=s}else i!==null?(s=i.baseLanes|r,t.memoizedState=null):s=r,Me(br,Nt),Nt|=s;return mt(e,t,a,r),t.child}function Sf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Io(e,t,r,s,a){var i=bt(r)?Zn:ut.current;return i=Tr(t,i),Sr(t,a),r=Rl(e,t,r,s,i,a),s=Tl(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,mn(e,t,a)):($e&&s&&xl(t),t.flags|=1,mt(e,t,r,a),t.child)}function Kc(e,t,r,s,a){if(bt(r)){var i=!0;Oa(t)}else i=!1;if(Sr(t,a),t.stateNode===null)wa(e,t),bf(t,r,s),Ao(t,r,s,a),s=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var u=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=Mt(c):(c=bt(r)?Zn:ut.current,c=Tr(t,c));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==s||u!==c)&&Yc(t,o,s,c),Nn=!1;var m=t.memoizedState;o.state=m,Qa(t,s,o,a),u=t.memoizedState,l!==s||m!==u||yt.current||Nn?(typeof f=="function"&&(_o(t,r,f,s),u=t.memoizedState),(l=Nn||Qc(t,r,l,s,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=u),o.props=s,o.state=u,o.context=c,s=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,Ju(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:$t(t.type,l),o.props=c,p=t.pendingProps,m=o.context,u=r.contextType,typeof u=="object"&&u!==null?u=Mt(u):(u=bt(r)?Zn:ut.current,u=Tr(t,u));var w=r.getDerivedStateFromProps;(f=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Yc(t,o,s,u),Nn=!1,m=t.memoizedState,o.state=m,Qa(t,s,o,a);var x=t.memoizedState;l!==p||m!==x||yt.current||Nn?(typeof w=="function"&&(_o(t,r,w,s),x=t.memoizedState),(c=Nn||Qc(t,r,c,s,m,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,x,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=x),o.props=s,o.state=x,o.context=u,s=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),s=!1)}return Mo(e,t,r,s,i,a)}function Mo(e,t,r,s,a,i){Sf(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return a&&zc(t,r,!1),mn(e,t,i);s=t.stateNode,Ch.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=_r(t,e.child,null,i),t.child=_r(t,null,l,i)):mt(e,t,l,i),t.memoizedState=s.state,a&&zc(t,r,!0),t.child}function Cf(e){var t=e.stateNode;t.pendingContext?Mc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mc(e,t.context,!1),kl(e,t.containerInfo)}function Jc(e,t,r,s,a){return Pr(),vl(a),t.flags|=256,mt(e,t,r,s),t.child}var zo={dehydrated:null,treeContext:null,retryLane:0};function Do(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ef(e,t,r){var s=t.pendingProps,a=qe.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Me(qe,a&1),e===null)return To(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,i?(s=t.mode,i=t.child,o={mode:"hidden",children:o},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fi(o,s,0,null),e=Kn(e,s,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Do(r),t.memoizedState=zo,e):Al(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Eh(e,t,o,s,l,a,r);if(i){i=s.fallback,o=t.mode,a=e.child,l=a.sibling;var u={mode:"hidden",children:s.children};return!(o&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=u,t.deletions=null):(s=zn(a,u),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=zn(l,i):(i=Kn(i,o,r,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,o=e.child.memoizedState,o=o===null?Do(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~r,t.memoizedState=zo,s}return i=e.child,e=i.sibling,s=zn(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Al(e,t){return t=fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ta(e,t,r,s){return s!==null&&vl(s),_r(t,e.child,null,r),e=Al(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Eh(e,t,r,s,a,i,o){if(r)return t.flags&256?(t.flags&=-257,s=Ui(Error(W(422))),ta(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,a=t.mode,s=fi({mode:"visible",children:s.children},a,0,null),i=Kn(i,a,o,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&_r(t,e.child,null,o),t.child.memoizedState=Do(o),t.memoizedState=zo,i);if(!(t.mode&1))return ta(e,t,o,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(W(419)),s=Ui(i,s,void 0),ta(e,t,o,s)}if(l=(o&e.childLanes)!==0,vt||l){if(s=nt,s!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,fn(e,a),Qt(s,e,a,-1))}return Fl(),s=Ui(Error(W(421))),ta(e,t,o,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=$h.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,kt=An(a.nextSibling),St=t,$e=!0,Ut=null,e!==null&&(Pt[_t++]=an,Pt[_t++]=on,Pt[_t++]=er,an=e.id,on=e.overflow,er=t),t=Al(t,s.children),t.flags|=4096,t)}function Zc(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Po(e.return,t,r)}function qi(e,t,r,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=r,i.tailMode=a)}function Rf(e,t,r){var s=t.pendingProps,a=s.revealOrder,i=s.tail;if(mt(e,t,s.children,r),s=qe.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zc(e,r,t);else if(e.tag===19)Zc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Me(qe,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ya(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),qi(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ya(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}qi(t,!0,r,null,i);break;case"together":qi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),nr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(W(153));if(t.child!==null){for(e=t.child,r=zn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=zn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Rh(e,t,r){switch(t.tag){case 3:Cf(t),Pr();break;case 5:Zu(t);break;case 1:bt(t.type)&&Oa(t);break;case 4:kl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;Me(Ua,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Me(qe,qe.current&1),t.flags|=128,null):r&t.child.childLanes?Ef(e,t,r):(Me(qe,qe.current&1),e=mn(e,t,r),e!==null?e.sibling:null);Me(qe,qe.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Rf(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Me(qe,qe.current),s)break;return null;case 22:case 23:return t.lanes=0,kf(e,t,r)}return mn(e,t,r)}var Tf,Fo,Pf,_f;Tf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Fo=function(){};Pf=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,Wn(en.current);var i=null;switch(r){case"input":a=ao(e,a),s=ao(e,s),i=[];break;case"select":a=Ye({},a,{value:void 0}),s=Ye({},s,{value:void 0}),i=[];break;case"textarea":a=lo(e,a),s=lo(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Da)}uo(r,s);var o;r=null;for(c in a)if(!s.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var l=a[c];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xs.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in s){var u=s[c];if(l=a!=null?a[c]:void 0,s.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(r||(r={}),r[o]=u[o])}else r||(i||(i=[]),i.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xs.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&De("scroll",e),i||l===u||(i=[])):(i=i||[]).push(c,u))}r&&(i=i||[]).push("style",r);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};_f=function(e,t,r,s){r!==s&&(t.flags|=4)};function Gr(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Th(e,t,r){var s=t.pendingProps;switch(gl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return bt(t.type)&&Fa(),lt(t),null;case 3:return s=t.stateNode,Ar(),Oe(yt),Oe(ut),Cl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Zs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ut!==null&&(Ho(Ut),Ut=null))),Fo(e,t),lt(t),null;case 5:Sl(t);var a=Wn(Rs.current);if(r=t.type,e!==null&&t.stateNode!=null)Pf(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(W(166));return lt(t),null}if(e=Wn(en.current),Zs(t)){s=t.stateNode,r=t.type;var i=t.memoizedProps;switch(s[Jt]=t,s[Cs]=i,e=(t.mode&1)!==0,r){case"dialog":De("cancel",s),De("close",s);break;case"iframe":case"object":case"embed":De("load",s);break;case"video":case"audio":for(a=0;a<as.length;a++)De(as[a],s);break;case"source":De("error",s);break;case"img":case"image":case"link":De("error",s),De("load",s);break;case"details":De("toggle",s);break;case"input":lc(s,i),De("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},De("invalid",s);break;case"textarea":dc(s,i),De("invalid",s)}uo(r,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&Js(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Js(s.textContent,l,e),a=["children",""+l]):xs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&De("scroll",s)}switch(r){case"input":Qs(s),cc(s,i,!0);break;case"textarea":Qs(s),uc(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Da)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=su(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(r,{is:s.is}):(e=o.createElement(r),r==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,r),e[Jt]=t,e[Cs]=s,Tf(e,t,!1,!1),t.stateNode=e;e:{switch(o=fo(r,s),r){case"dialog":De("cancel",e),De("close",e),a=s;break;case"iframe":case"object":case"embed":De("load",e),a=s;break;case"video":case"audio":for(a=0;a<as.length;a++)De(as[a],e);a=s;break;case"source":De("error",e),a=s;break;case"img":case"image":case"link":De("error",e),De("load",e),a=s;break;case"details":De("toggle",e),a=s;break;case"input":lc(e,s),a=ao(e,s),De("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=Ye({},s,{value:void 0}),De("invalid",e);break;case"textarea":dc(e,s),a=lo(e,s),De("invalid",e);break;default:a=s}uo(r,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?ou(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&au(e,u)):i==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&gs(e,u):typeof u=="number"&&gs(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(xs.hasOwnProperty(i)?u!=null&&i==="onScroll"&&De("scroll",e):u!=null&&nl(e,i,u,o))}switch(r){case"input":Qs(e),cc(e,s,!1);break;case"textarea":Qs(e),uc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Dn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?wr(e,!!s.multiple,i,!1):s.defaultValue!=null&&wr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Da)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)_f(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(W(166));if(r=Wn(Rs.current),Wn(en.current),Zs(t)){if(s=t.stateNode,r=t.memoizedProps,s[Jt]=t,(i=s.nodeValue!==r)&&(e=St,e!==null))switch(e.tag){case 3:Js(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Js(s.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Jt]=t,t.stateNode=s}return lt(t),null;case 13:if(Oe(qe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&kt!==null&&t.mode&1&&!(t.flags&128))Gu(),Pr(),t.flags|=98560,i=!1;else if(i=Zs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(W(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(W(317));i[Jt]=t}else Pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lt(t),i=!1}else Ut!==null&&(Ho(Ut),Ut=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?Ze===0&&(Ze=3):Fl())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return Ar(),Fo(e,t),e===null&&ks(t.stateNode.containerInfo),lt(t),null;case 10:return wl(t.type._context),lt(t),null;case 17:return bt(t.type)&&Fa(),lt(t),null;case 19:if(Oe(qe),i=t.memoizedState,i===null)return lt(t),null;if(s=(t.flags&128)!==0,o=i.rendering,o===null)if(s)Gr(i,!1);else{if(Ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ya(e),o!==null){for(t.flags|=128,Gr(i,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)i=r,e=s,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Me(qe,qe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ge()>Ir&&(t.flags|=128,s=!0,Gr(i,!1),t.lanes=4194304)}else{if(!s)if(e=Ya(o),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Gr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!$e)return lt(t),null}else 2*Ge()-i.renderingStartTime>Ir&&r!==1073741824&&(t.flags|=128,s=!0,Gr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(r=i.last,r!==null?r.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ge(),t.sibling=null,r=qe.current,Me(qe,s?r&1|2:r&1),t):(lt(t),null);case 22:case 23:return Dl(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Nt&1073741824&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(W(156,t.tag))}function Ph(e,t){switch(gl(t),t.tag){case 1:return bt(t.type)&&Fa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ar(),Oe(yt),Oe(ut),Cl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sl(t),null;case 13:if(Oe(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(W(340));Pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(qe),null;case 4:return Ar(),null;case 10:return wl(t.type._context),null;case 22:case 23:return Dl(),null;case 24:return null;default:return null}}var na=!1,dt=!1,_h=typeof WeakSet=="function"?WeakSet:Set,oe=null;function yr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){He(e,t,s)}else r.current=null}function Oo(e,t,r){try{r()}catch(s){He(e,t,s)}}var ed=!1;function Ah(e,t){if(jo=Ia,e=Mu(),pl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=e,m=null;t:for(;;){for(var w;p!==r||a!==0&&p.nodeType!==3||(l=o+a),p!==i||s!==0&&p.nodeType!==3||(u=o+s),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===e)break t;if(m===r&&++c===a&&(l=o),m===i&&++f===s&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(No={focusedElem:e,selectionRange:r},Ia=!1,oe=t;oe!==null;)if(t=oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,oe=e;else for(;oe!==null;){t=oe;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var N=x.memoizedProps,C=x.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?N:$t(t.type,N),C);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(E){He(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,oe=e;break}oe=t.return}return x=ed,ed=!1,x}function fs(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Oo(t,r,i)}a=a.next}while(a!==s)}}function di(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function $o(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Af(e){var t=e.alternate;t!==null&&(e.alternate=null,Af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jt],delete t[Cs],delete t[Co],delete t[hh],delete t[ph])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lf(e){return e.tag===5||e.tag===3||e.tag===4}function td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Da));else if(s!==4&&(e=e.child,e!==null))for(Bo(e,t,r),e=e.sibling;e!==null;)Bo(e,t,r),e=e.sibling}function Uo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Uo(e,t,r),e=e.sibling;e!==null;)Uo(e,t,r),e=e.sibling}var rt=null,Bt=!1;function vn(e,t,r){for(r=r.child;r!==null;)If(e,t,r),r=r.sibling}function If(e,t,r){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(ni,r)}catch{}switch(r.tag){case 5:dt||yr(r,t);case 6:var s=rt,a=Bt;rt=null,vn(e,t,r),rt=s,Bt=a,rt!==null&&(Bt?(e=rt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):rt.removeChild(r.stateNode));break;case 18:rt!==null&&(Bt?(e=rt,r=r.stateNode,e.nodeType===8?zi(e.parentNode,r):e.nodeType===1&&zi(e,r),ws(e)):zi(rt,r.stateNode));break;case 4:s=rt,a=Bt,rt=r.stateNode.containerInfo,Bt=!0,vn(e,t,r),rt=s,Bt=a;break;case 0:case 11:case 14:case 15:if(!dt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Oo(r,t,o),a=a.next}while(a!==s)}vn(e,t,r);break;case 1:if(!dt&&(yr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(l){He(r,t,l)}vn(e,t,r);break;case 21:vn(e,t,r);break;case 22:r.mode&1?(dt=(s=dt)||r.memoizedState!==null,vn(e,t,r),dt=s):vn(e,t,r);break;default:vn(e,t,r)}}function nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new _h),t.forEach(function(s){var a=Bh.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function Ot(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,Bt=!1;break e;case 3:rt=l.stateNode.containerInfo,Bt=!0;break e;case 4:rt=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(rt===null)throw Error(W(160));If(i,o,a),rt=null,Bt=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(c){He(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mf(t,e),t=t.sibling}function Mf(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Wt(e),s&4){try{fs(3,e,e.return),di(3,e)}catch(N){He(e,e.return,N)}try{fs(5,e,e.return)}catch(N){He(e,e.return,N)}}break;case 1:Ot(t,e),Wt(e),s&512&&r!==null&&yr(r,r.return);break;case 5:if(Ot(t,e),Wt(e),s&512&&r!==null&&yr(r,r.return),e.flags&32){var a=e.stateNode;try{gs(a,"")}catch(N){He(e,e.return,N)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=r!==null?r.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&nu(a,i),fo(l,o);var c=fo(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?ou(a,p):f==="dangerouslySetInnerHTML"?au(a,p):f==="children"?gs(a,p):nl(a,f,p,c)}switch(l){case"input":io(a,i);break;case"textarea":ru(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?wr(a,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?wr(a,!!i.multiple,i.defaultValue,!0):wr(a,!!i.multiple,i.multiple?[]:"",!1))}a[Cs]=i}catch(N){He(e,e.return,N)}}break;case 6:if(Ot(t,e),Wt(e),s&4){if(e.stateNode===null)throw Error(W(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(N){He(e,e.return,N)}}break;case 3:if(Ot(t,e),Wt(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{ws(t.containerInfo)}catch(N){He(e,e.return,N)}break;case 4:Ot(t,e),Wt(e);break;case 13:Ot(t,e),Wt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Ml=Ge())),s&4&&nd(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(dt=(c=dt)||f,Ot(t,e),dt=c):Ot(t,e),Wt(e),s&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(oe=e,f=e.child;f!==null;){for(p=oe=f;oe!==null;){switch(m=oe,w=m.child,m.tag){case 0:case 11:case 14:case 15:fs(4,m,m.return);break;case 1:yr(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){s=m,r=m.return;try{t=s,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(N){He(s,r,N)}}break;case 5:yr(m,m.return);break;case 22:if(m.memoizedState!==null){sd(p);continue}}w!==null?(w.return=m,oe=w):sd(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{a=p.stateNode,c?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=iu("display",o))}catch(N){He(e,e.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){He(e,e.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ot(t,e),Wt(e),s&4&&nd(e);break;case 21:break;default:Ot(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Lf(r)){var s=r;break e}r=r.return}throw Error(W(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(gs(a,""),s.flags&=-33);var i=td(e);Uo(e,i,a);break;case 3:case 4:var o=s.stateNode.containerInfo,l=td(e);Bo(e,l,o);break;default:throw Error(W(161))}}catch(u){He(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lh(e,t,r){oe=e,zf(e)}function zf(e,t,r){for(var s=(e.mode&1)!==0;oe!==null;){var a=oe,i=a.child;if(a.tag===22&&s){var o=a.memoizedState!==null||na;if(!o){var l=a.alternate,u=l!==null&&l.memoizedState!==null||dt;l=na;var c=dt;if(na=o,(dt=u)&&!c)for(oe=a;oe!==null;)o=oe,u=o.child,o.tag===22&&o.memoizedState!==null?ad(a):u!==null?(u.return=o,oe=u):ad(a);for(;i!==null;)oe=i,zf(i),i=i.sibling;oe=a,na=l,dt=c}rd(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,oe=i):rd(e)}}function rd(e){for(;oe!==null;){var t=oe;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dt||di(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!dt)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:$t(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Bc(t,i,s);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Bc(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ws(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}dt||t.flags&512&&$o(t)}catch(m){He(t,t.return,m)}}if(t===e){oe=null;break}if(r=t.sibling,r!==null){r.return=t.return,oe=r;break}oe=t.return}}function sd(e){for(;oe!==null;){var t=oe;if(t===e){oe=null;break}var r=t.sibling;if(r!==null){r.return=t.return,oe=r;break}oe=t.return}}function ad(e){for(;oe!==null;){var t=oe;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{di(4,t)}catch(u){He(t,r,u)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(u){He(t,a,u)}}var i=t.return;try{$o(t)}catch(u){He(t,i,u)}break;case 5:var o=t.return;try{$o(t)}catch(u){He(t,o,u)}}}catch(u){He(t,t.return,u)}if(t===e){oe=null;break}var l=t.sibling;if(l!==null){l.return=t.return,oe=l;break}oe=t.return}}var Ih=Math.ceil,Ga=pn.ReactCurrentDispatcher,Ll=pn.ReactCurrentOwner,It=pn.ReactCurrentBatchConfig,ke=0,nt=null,Ve=null,st=0,Nt=0,br=$n(0),Ze=0,As=null,nr=0,ui=0,Il=0,ms=null,gt=null,Ml=0,Ir=1/0,rn=null,Va=!1,qo=null,In=null,ra=!1,Rn=null,Xa=0,hs=0,Qo=null,ja=-1,Na=0;function ht(){return ke&6?Ge():ja!==-1?ja:ja=Ge()}function Mn(e){return e.mode&1?ke&2&&st!==0?st&-st:gh.transition!==null?(Na===0&&(Na=yu()),Na):(e=Te,e!==0||(e=window.event,e=e===void 0?16:Cu(e.type)),e):1}function Qt(e,t,r,s){if(50<hs)throw hs=0,Qo=null,Error(W(185));Ms(e,r,s),(!(ke&2)||e!==nt)&&(e===nt&&(!(ke&2)&&(ui|=r),Ze===4&&Cn(e,st)),wt(e,s),r===1&&ke===0&&!(t.mode&1)&&(Ir=Ge()+500,oi&&Bn()))}function wt(e,t){var r=e.callbackNode;g0(e,t);var s=La(e,e===nt?st:0);if(s===0)r!==null&&hc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&hc(r),t===1)e.tag===0?xh(id.bind(null,e)):Yu(id.bind(null,e)),fh(function(){!(ke&6)&&Bn()}),r=null;else{switch(bu(s)){case 1:r=ol;break;case 4:r=gu;break;case 16:r=Aa;break;case 536870912:r=vu;break;default:r=Aa}r=Qf(r,Df.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Df(e,t){if(ja=-1,Na=0,ke&6)throw Error(W(327));var r=e.callbackNode;if(Cr()&&e.callbackNode!==r)return null;var s=La(e,e===nt?st:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Ka(e,s);else{t=s;var a=ke;ke|=2;var i=Of();(nt!==e||st!==t)&&(rn=null,Ir=Ge()+500,Xn(e,t));do try{Dh();break}catch(l){Ff(e,l)}while(1);bl(),Ga.current=i,ke=a,Ve!==null?t=0:(nt=null,st=0,t=Ze)}if(t!==0){if(t===2&&(a=go(e),a!==0&&(s=a,t=Yo(e,a))),t===1)throw r=As,Xn(e,0),Cn(e,s),wt(e,Ge()),r;if(t===6)Cn(e,s);else{if(a=e.current.alternate,!(s&30)&&!Mh(a)&&(t=Ka(e,s),t===2&&(i=go(e),i!==0&&(s=i,t=Yo(e,i))),t===1))throw r=As,Xn(e,0),Cn(e,s),wt(e,Ge()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(W(345));case 2:Qn(e,gt,rn);break;case 3:if(Cn(e,s),(s&130023424)===s&&(t=Ml+500-Ge(),10<t)){if(La(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){ht(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=So(Qn.bind(null,e,gt,rn),t);break}Qn(e,gt,rn);break;case 4:if(Cn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var o=31-qt(s);i=1<<o,o=t[o],o>a&&(a=o),s&=~i}if(s=a,s=Ge()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Ih(s/1960))-s,10<s){e.timeoutHandle=So(Qn.bind(null,e,gt,rn),s);break}Qn(e,gt,rn);break;case 5:Qn(e,gt,rn);break;default:throw Error(W(329))}}}return wt(e,Ge()),e.callbackNode===r?Df.bind(null,e):null}function Yo(e,t){var r=ms;return e.current.memoizedState.isDehydrated&&(Xn(e,t).flags|=256),e=Ka(e,t),e!==2&&(t=gt,gt=r,t!==null&&Ho(t)),e}function Ho(e){gt===null?gt=e:gt.push.apply(gt,e)}function Mh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],i=a.getSnapshot;a=a.value;try{if(!Yt(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~Il,t&=~ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-qt(t),s=1<<r;e[r]=-1,t&=~s}}function id(e){if(ke&6)throw Error(W(327));Cr();var t=La(e,0);if(!(t&1))return wt(e,Ge()),null;var r=Ka(e,t);if(e.tag!==0&&r===2){var s=go(e);s!==0&&(t=s,r=Yo(e,s))}if(r===1)throw r=As,Xn(e,0),Cn(e,t),wt(e,Ge()),r;if(r===6)throw Error(W(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qn(e,gt,rn),wt(e,Ge()),null}function zl(e,t){var r=ke;ke|=1;try{return e(t)}finally{ke=r,ke===0&&(Ir=Ge()+500,oi&&Bn())}}function rr(e){Rn!==null&&Rn.tag===0&&!(ke&6)&&Cr();var t=ke;ke|=1;var r=It.transition,s=Te;try{if(It.transition=null,Te=1,e)return e()}finally{Te=s,It.transition=r,ke=t,!(ke&6)&&Bn()}}function Dl(){Nt=br.current,Oe(br)}function Xn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,uh(r)),Ve!==null)for(r=Ve.return;r!==null;){var s=r;switch(gl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Fa();break;case 3:Ar(),Oe(yt),Oe(ut),Cl();break;case 5:Sl(s);break;case 4:Ar();break;case 13:Oe(qe);break;case 19:Oe(qe);break;case 10:wl(s.type._context);break;case 22:case 23:Dl()}r=r.return}if(nt=e,Ve=e=zn(e.current,null),st=Nt=t,Ze=0,As=null,Il=ui=nr=0,gt=ms=null,Hn!==null){for(t=0;t<Hn.length;t++)if(r=Hn[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,i=r.pending;if(i!==null){var o=i.next;i.next=a,s.next=o}r.pending=s}Hn=null}return e}function Ff(e,t){do{var r=Ve;try{if(bl(),ya.current=Wa,Ha){for(var s=Qe.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Ha=!1}if(tr=0,tt=Je=Qe=null,us=!1,Ts=0,Ll.current=null,r===null||r.return===null){Ze=1,As=t,Ve=null;break}e:{var i=e,o=r.return,l=r,u=t;if(t=st,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=Wc(o);if(w!==null){w.flags&=-257,Gc(w,o,l,i,t),w.mode&1&&Hc(i,c,t),t=w,u=c;var x=t.updateQueue;if(x===null){var N=new Set;N.add(u),t.updateQueue=N}else x.add(u);break e}else{if(!(t&1)){Hc(i,c,t),Fl();break e}u=Error(W(426))}}else if($e&&l.mode&1){var C=Wc(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Gc(C,o,l,i,t),vl(Lr(u,l));break e}}i=u=Lr(u,l),Ze!==4&&(Ze=2),ms===null?ms=[i]:ms.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=wf(i,u,t);$c(i,g);break e;case 1:l=u;var h=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(In===null||!In.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=jf(i,l,t);$c(i,E);break e}}i=i.return}while(i!==null)}Bf(r)}catch(j){t=j,Ve===r&&r!==null&&(Ve=r=r.return);continue}break}while(1)}function Of(){var e=Ga.current;return Ga.current=Wa,e===null?Wa:e}function Fl(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),nt===null||!(nr&268435455)&&!(ui&268435455)||Cn(nt,st)}function Ka(e,t){var r=ke;ke|=2;var s=Of();(nt!==e||st!==t)&&(rn=null,Xn(e,t));do try{zh();break}catch(a){Ff(e,a)}while(1);if(bl(),ke=r,Ga.current=s,Ve!==null)throw Error(W(261));return nt=null,st=0,Ze}function zh(){for(;Ve!==null;)$f(Ve)}function Dh(){for(;Ve!==null&&!l0();)$f(Ve)}function $f(e){var t=qf(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?Bf(e):Ve=t,Ll.current=null}function Bf(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Ph(r,t),r!==null){r.flags&=32767,Ve=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ze=6,Ve=null;return}}else if(r=Th(r,t,Nt),r!==null){Ve=r;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Ze===0&&(Ze=5)}function Qn(e,t,r){var s=Te,a=It.transition;try{It.transition=null,Te=1,Fh(e,t,r,s)}finally{It.transition=a,Te=s}return null}function Fh(e,t,r,s){do Cr();while(Rn!==null);if(ke&6)throw Error(W(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(W(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(v0(e,i),e===nt&&(Ve=nt=null,st=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ra||(ra=!0,Qf(Aa,function(){return Cr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=It.transition,It.transition=null;var o=Te;Te=1;var l=ke;ke|=4,Ll.current=null,Ah(e,r),Mf(r,e),sh(No),Ia=!!jo,No=jo=null,e.current=r,Lh(r),c0(),ke=l,Te=o,It.transition=i}else e.current=r;if(ra&&(ra=!1,Rn=e,Xa=a),i=e.pendingLanes,i===0&&(In=null),f0(r.stateNode),wt(e,Ge()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(Va)throw Va=!1,e=qo,qo=null,e;return Xa&1&&e.tag!==0&&Cr(),i=e.pendingLanes,i&1?e===Qo?hs++:(hs=0,Qo=e):hs=0,Bn(),null}function Cr(){if(Rn!==null){var e=bu(Xa),t=It.transition,r=Te;try{if(It.transition=null,Te=16>e?16:e,Rn===null)var s=!1;else{if(e=Rn,Rn=null,Xa=0,ke&6)throw Error(W(331));var a=ke;for(ke|=4,oe=e.current;oe!==null;){var i=oe,o=i.child;if(oe.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(oe=c;oe!==null;){var f=oe;switch(f.tag){case 0:case 11:case 15:fs(8,f,i)}var p=f.child;if(p!==null)p.return=f,oe=p;else for(;oe!==null;){f=oe;var m=f.sibling,w=f.return;if(Af(f),f===c){oe=null;break}if(m!==null){m.return=w,oe=m;break}oe=w}}}var x=i.alternate;if(x!==null){var N=x.child;if(N!==null){x.child=null;do{var C=N.sibling;N.sibling=null,N=C}while(N!==null)}}oe=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,oe=o;else e:for(;oe!==null;){if(i=oe,i.flags&2048)switch(i.tag){case 0:case 11:case 15:fs(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,oe=g;break e}oe=i.return}}var h=e.current;for(oe=h;oe!==null;){o=oe;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,oe=y;else e:for(o=h;oe!==null;){if(l=oe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:di(9,l)}}catch(j){He(l,l.return,j)}if(l===o){oe=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,oe=E;break e}oe=l.return}}if(ke=a,Bn(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(ni,e)}catch{}s=!0}return s}finally{Te=r,It.transition=t}}return!1}function od(e,t,r){t=Lr(r,t),t=wf(e,t,1),e=Ln(e,t,1),t=ht(),e!==null&&(Ms(e,1,t),wt(e,t))}function He(e,t,r){if(e.tag===3)od(e,e,r);else for(;t!==null;){if(t.tag===3){od(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(In===null||!In.has(s))){e=Lr(r,e),e=jf(t,e,1),t=Ln(t,e,1),e=ht(),t!==null&&(Ms(t,1,e),wt(t,e));break}}t=t.return}}function Oh(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=ht(),e.pingedLanes|=e.suspendedLanes&r,nt===e&&(st&r)===r&&(Ze===4||Ze===3&&(st&130023424)===st&&500>Ge()-Ml?Xn(e,0):Il|=r),wt(e,t)}function Uf(e,t){t===0&&(e.mode&1?(t=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):t=1);var r=ht();e=fn(e,t),e!==null&&(Ms(e,t,r),wt(e,r))}function $h(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Uf(e,r)}function Bh(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(W(314))}s!==null&&s.delete(t),Uf(e,r)}var qf;qf=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)vt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return vt=!1,Rh(e,t,r);vt=!!(e.flags&131072)}else vt=!1,$e&&t.flags&1048576&&Hu(t,Ba,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;wa(e,t),e=t.pendingProps;var a=Tr(t,ut.current);Sr(t,r),a=Rl(null,t,s,e,a,r);var i=Tl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(s)?(i=!0,Oa(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Nl(t),a.updater=ci,t.stateNode=a,a._reactInternals=t,Ao(t,s,e,r),t=Mo(null,t,s,!0,i,r)):(t.tag=0,$e&&i&&xl(t),mt(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(wa(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=qh(s),e=$t(s,e),a){case 0:t=Io(null,t,s,e,r);break e;case 1:t=Kc(null,t,s,e,r);break e;case 11:t=Vc(null,t,s,e,r);break e;case 14:t=Xc(null,t,s,$t(s.type,e),r);break e}throw Error(W(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:$t(s,a),Io(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:$t(s,a),Kc(e,t,s,a,r);case 3:e:{if(Cf(t),e===null)throw Error(W(387));s=t.pendingProps,i=t.memoizedState,a=i.element,Ju(e,t),Qa(t,s,null,r);var o=t.memoizedState;if(s=o.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Lr(Error(W(423)),t),t=Jc(e,t,s,r,a);break e}else if(s!==a){a=Lr(Error(W(424)),t),t=Jc(e,t,s,r,a);break e}else for(kt=An(t.stateNode.containerInfo.firstChild),St=t,$e=!0,Ut=null,r=Xu(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Pr(),s===a){t=mn(e,t,r);break e}mt(e,t,s,r)}t=t.child}return t;case 5:return Zu(t),e===null&&To(t),s=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,ko(s,a)?o=null:i!==null&&ko(s,i)&&(t.flags|=32),Sf(e,t),mt(e,t,o,r),t.child;case 6:return e===null&&To(t),null;case 13:return Ef(e,t,r);case 4:return kl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=_r(t,null,s,r):mt(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:$t(s,a),Vc(e,t,s,a,r);case 7:return mt(e,t,t.pendingProps,r),t.child;case 8:return mt(e,t,t.pendingProps.children,r),t.child;case 12:return mt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Me(Ua,s._currentValue),s._currentValue=o,i!==null)if(Yt(i.value,o)){if(i.children===a.children&&!yt.current){t=mn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===s){if(i.tag===1){u=ln(-1,r&-r),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=r,u=i.alternate,u!==null&&(u.lanes|=r),Po(i.return,r,t),l.lanes|=r;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(W(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Po(o,r,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}mt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Sr(t,r),a=Mt(a),s=s(a),t.flags|=1,mt(e,t,s,r),t.child;case 14:return s=t.type,a=$t(s,t.pendingProps),a=$t(s.type,a),Xc(e,t,s,a,r);case 15:return Nf(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:$t(s,a),wa(e,t),t.tag=1,bt(s)?(e=!0,Oa(t)):e=!1,Sr(t,r),bf(t,s,a),Ao(t,s,a,r),Mo(null,t,s,!0,e,r);case 19:return Rf(e,t,r);case 22:return kf(e,t,r)}throw Error(W(156,t.tag))};function Qf(e,t){return xu(e,t)}function Uh(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,r,s){return new Uh(e,t,r,s)}function Ol(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qh(e){if(typeof e=="function")return Ol(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sl)return 11;if(e===al)return 14}return 2}function zn(e,t){var r=e.alternate;return r===null?(r=At(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ka(e,t,r,s,a,i){var o=2;if(s=e,typeof e=="function")Ol(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case dr:return Kn(r.children,a,i,t);case rl:o=8,a|=8;break;case to:return e=At(12,r,t,a|2),e.elementType=to,e.lanes=i,e;case no:return e=At(13,r,t,a),e.elementType=no,e.lanes=i,e;case ro:return e=At(19,r,t,a),e.elementType=ro,e.lanes=i,e;case Zd:return fi(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kd:o=10;break e;case Jd:o=9;break e;case sl:o=11;break e;case al:o=14;break e;case jn:o=16,s=null;break e}throw Error(W(130,e==null?e:typeof e,""))}return t=At(o,r,t,a),t.elementType=e,t.type=s,t.lanes=i,t}function Kn(e,t,r,s){return e=At(7,e,s,t),e.lanes=r,e}function fi(e,t,r,s){return e=At(22,e,s,t),e.elementType=Zd,e.lanes=r,e.stateNode={isHidden:!1},e}function Qi(e,t,r){return e=At(6,e,null,t),e.lanes=r,e}function Yi(e,t,r){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qh(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Si(0),this.expirationTimes=Si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Si(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function $l(e,t,r,s,a,i,o,l,u){return e=new Qh(e,t,r,l,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=At(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nl(i),e}function Yh(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function Yf(e){if(!e)return Fn;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(W(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(W(171))}if(e.tag===1){var r=e.type;if(bt(r))return Qu(e,r,t)}return t}function Hf(e,t,r,s,a,i,o,l,u){return e=$l(r,s,!0,e,a,i,o,l,u),e.context=Yf(null),r=e.current,s=ht(),a=Mn(r),i=ln(s,a),i.callback=t??null,Ln(r,i,a),e.current.lanes=a,Ms(e,a,s),wt(e,s),e}function mi(e,t,r,s){var a=t.current,i=ht(),o=Mn(a);return r=Yf(r),t.context===null?t.context=r:t.pendingContext=r,t=ln(i,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Ln(a,t,o),e!==null&&(Qt(e,a,o,i),va(e,a,o)),o}function Ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Bl(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function Hh(){return null}var Wf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ul(e){this._internalRoot=e}hi.prototype.render=Ul.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(W(409));mi(e,t,null,null)};hi.prototype.unmount=Ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rr(function(){mi(null,e,null,null)}),t[un]=null}};function hi(e){this._internalRoot=e}hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Sn.length&&t!==0&&t<Sn[r].priority;r++);Sn.splice(r,0,e),r===0&&Su(e)}};function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cd(){}function Wh(e,t,r,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var c=Ja(o);i.call(c)}}var o=Hf(t,s,e,0,null,!1,!1,"",cd);return e._reactRootContainer=o,e[un]=o.current,ks(e.nodeType===8?e.parentNode:e),rr(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var c=Ja(u);l.call(c)}}var u=$l(e,0,!1,null,null,!1,!1,"",cd);return e._reactRootContainer=u,e[un]=u.current,ks(e.nodeType===8?e.parentNode:e),rr(function(){mi(t,u,r,s)}),u}function xi(e,t,r,s,a){var i=r._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var u=Ja(o);l.call(u)}}mi(t,o,e,a)}else o=Wh(r,t,e,a,s);return Ja(o)}wu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ss(t.pendingLanes);r!==0&&(ll(t,r|1),wt(t,Ge()),!(ke&6)&&(Ir=Ge()+500,Bn()))}break;case 13:rr(function(){var s=fn(e,1);if(s!==null){var a=ht();Qt(s,e,1,a)}}),Bl(e,1)}};cl=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var r=ht();Qt(t,e,134217728,r)}Bl(e,134217728)}};ju=function(e){if(e.tag===13){var t=Mn(e),r=fn(e,t);if(r!==null){var s=ht();Qt(r,e,t,s)}Bl(e,t)}};Nu=function(){return Te};ku=function(e,t){var r=Te;try{return Te=e,t()}finally{Te=r}};ho=function(e,t,r){switch(t){case"input":if(io(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=ii(s);if(!a)throw Error(W(90));tu(s),io(s,a)}}}break;case"textarea":ru(e,r);break;case"select":t=r.value,t!=null&&wr(e,!!r.multiple,t,!1)}};du=zl;uu=rr;var Gh={usingClientEntryPoint:!1,Events:[Ds,hr,ii,lu,cu,zl]},Vr={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vh={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hu(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||Hh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{ni=sa.inject(Vh),Zt=sa}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gh;Et.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ql(t))throw Error(W(200));return Yh(e,t,null,r)};Et.createRoot=function(e,t){if(!ql(e))throw Error(W(299));var r=!1,s="",a=Wf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=$l(e,1,!1,null,null,r,!1,s,a),e[un]=t.current,ks(e.nodeType===8?e.parentNode:e),new Ul(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=hu(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return rr(e)};Et.hydrate=function(e,t,r){if(!pi(t))throw Error(W(200));return xi(null,e,t,!0,r)};Et.hydrateRoot=function(e,t,r){if(!ql(e))throw Error(W(405));var s=r!=null&&r.hydratedSources||null,a=!1,i="",o=Wf;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Hf(t,null,e,1,r??null,a,!1,i,o),e[un]=t.current,ks(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new hi(t)};Et.render=function(e,t,r){if(!pi(t))throw Error(W(200));return xi(null,e,t,!1,r)};Et.unmountComponentAtNode=function(e){if(!pi(e))throw Error(W(40));return e._reactRootContainer?(rr(function(){xi(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};Et.unstable_batchedUpdates=zl;Et.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!pi(r))throw Error(W(200));if(e==null||e._reactInternals===void 0)throw Error(W(38));return xi(e,t,r,!1,s)};Et.version="18.3.1-next-f1338f8080-20240426";function Gf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gf)}catch(e){console.error(e)}}Gf(),Wd.exports=Et;var Xh=Wd.exports,dd=Xh;Zi.createRoot=dd.createRoot,Zi.hydrateRoot=dd.hydrateRoot;const Kh="modulepreload",Jh=function(e){return"/"+e},ud={},Vf=function(t,r,s){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=Jh(i),i in ud)return;ud[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let f=a.length-1;f>=0;f--){const p=a[f];if(p.href===i&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Kh,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((f,p)=>{c.addEventListener("load",f),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var fd="popstate";function Zh(e={}){function t(s,a){let{pathname:i,search:o,hash:l}=s.location;return Wo("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:Ls(a)}return tp(t,r,null,e)}function Be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ep(){return Math.random().toString(36).substring(2,10)}function md(e,t){return{usr:e.state,key:e.key,idx:t}}function Wo(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Fr(t):t,state:r,key:t&&t.key||s||ep()}}function Ls({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Fr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function tp(e,t,r,s={}){let{window:a=document.defaultView,v5Compat:i=!1}=s,o=a.history,l="POP",u=null,c=f();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function f(){return(o.state||{idx:null}).idx}function p(){l="POP";let C=f(),g=C==null?null:C-c;c=C,u&&u({action:l,location:N.location,delta:g})}function m(C,g){l="PUSH";let h=Wo(N.location,C,g);r&&r(h,C),c=f()+1;let y=md(h,c),E=N.createHref(h);try{o.pushState(y,"",E)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;a.location.assign(E)}i&&u&&u({action:l,location:N.location,delta:1})}function w(C,g){l="REPLACE";let h=Wo(N.location,C,g);r&&r(h,C),c=f();let y=md(h,c),E=N.createHref(h);o.replaceState(y,"",E),i&&u&&u({action:l,location:N.location,delta:0})}function x(C){return np(C)}let N={get action(){return l},get location(){return e(a,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return a.addEventListener(fd,p),u=C,()=>{a.removeEventListener(fd,p),u=null}},createHref(C){return t(a,C)},createURL:x,encodeLocation(C){let g=x(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:w,go(C){return o.go(C)}};return N}function np(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Be(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Ls(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function Xf(e,t,r="/"){return rp(e,t,r,!1)}function rp(e,t,r,s){let a=typeof t=="string"?Fr(t):t,i=hn(a.pathname||"/",r);if(i==null)return null;let o=Kf(e);sp(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=pp(i);l=mp(o[u],c,s)}return l}function Kf(e,t=[],r=[],s=""){let a=(i,o,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(Be(u.relativePath.startsWith(s),`Absolute route path "${u.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(s.length));let c=cn([s,u.relativePath]),f=r.concat(u);i.children&&i.children.length>0&&(Be(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),Kf(i.children,t,f,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:up(c,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let u of Jf(i.path))a(i,o,u)}),t}function Jf(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(s.length===0)return a?[i,""]:[i];let o=Jf(s.join("/")),l=[];return l.push(...o.map(u=>u===""?i:[i,u].join("/"))),a&&l.push(...o),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function sp(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:fp(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var ap=/^:[\w-]+$/,ip=3,op=2,lp=1,cp=10,dp=-2,hd=e=>e==="*";function up(e,t){let r=e.split("/"),s=r.length;return r.some(hd)&&(s+=dp),t&&(s+=op),r.filter(a=>!hd(a)).reduce((a,i)=>a+(ap.test(i)?ip:i===""?lp:cp),s)}function fp(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function mp(e,t,r=!1){let{routesMeta:s}=e,a={},i="/",o=[];for(let l=0;l<s.length;++l){let u=s[l],c=l===s.length-1,f=i==="/"?t:t.slice(i.length)||"/",p=Za({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p&&c&&r&&!s[s.length-1].route.index&&(p=Za({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(a,p.params),o.push({params:a,pathname:cn([i,p.pathname]),pathnameBase:yp(cn([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=cn([i,p.pathnameBase]))}return o}function Za(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=hp(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((c,{paramName:f,isOptional:p},m)=>{if(f==="*"){let x=l[m]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const w=l[m];return p&&!w?c[f]=void 0:c[f]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function hp(e,t=!1,r=!0){Dt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(s.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function pp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Dt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function hn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function xp(e,t="/"){let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Fr(e):e;return{pathname:r?r.startsWith("/")?r:gp(r,t):t,search:bp(s),hash:wp(a)}}function gp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Hi(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Ql(e){let t=vp(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function Yl(e,t,r,s=!1){let a;typeof e=="string"?a=Fr(e):(a={...e},Be(!a.pathname||!a.pathname.includes("?"),Hi("?","pathname","search",a)),Be(!a.pathname||!a.pathname.includes("#"),Hi("#","pathname","hash",a)),Be(!a.search||!a.search.includes("#"),Hi("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=r;else{let p=t.length-1;if(!s&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}l=p>=0?t[p]:"/"}let u=xp(a,l),c=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}var cn=e=>e.join("/").replace(/\/\/+/g,"/"),yp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),bp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function jp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Zf=["POST","PUT","PATCH","DELETE"];new Set(Zf);var Np=["GET",...Zf];new Set(Np);var Or=d.createContext(null);Or.displayName="DataRouter";var gi=d.createContext(null);gi.displayName="DataRouterState";d.createContext(!1);var em=d.createContext({isTransitioning:!1});em.displayName="ViewTransition";var kp=d.createContext(new Map);kp.displayName="Fetchers";var Sp=d.createContext(null);Sp.displayName="Await";var Ht=d.createContext(null);Ht.displayName="Navigation";var Os=d.createContext(null);Os.displayName="Location";var Ft=d.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var Hl=d.createContext(null);Hl.displayName="RouteError";function Cp(e,{relative:t}={}){Be($r(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=d.useContext(Ht),{hash:a,pathname:i,search:o}=$s(e,{relative:t}),l=i;return r!=="/"&&(l=i==="/"?r:cn([r,i])),s.createHref({pathname:l,search:o,hash:a})}function $r(){return d.useContext(Os)!=null}function Tt(){return Be($r(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Os).location}var tm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function nm(e){d.useContext(Ht).static||d.useLayoutEffect(e)}function Xe(){let{isDataRoute:e}=d.useContext(Ft);return e?Up():Ep()}function Ep(){Be($r(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Or),{basename:t,navigator:r}=d.useContext(Ht),{matches:s}=d.useContext(Ft),{pathname:a}=Tt(),i=JSON.stringify(Ql(s)),o=d.useRef(!1);return nm(()=>{o.current=!0}),d.useCallback((u,c={})=>{if(Dt(o.current,tm),!o.current)return;if(typeof u=="number"){r.go(u);return}let f=Yl(u,JSON.parse(i),a,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:cn([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,i,a,e])}var Rp=d.createContext(null);function Tp(e){let t=d.useContext(Ft).outlet;return t&&d.createElement(Rp.Provider,{value:e},t)}function Pp(){let{matches:e}=d.useContext(Ft),t=e[e.length-1];return t?t.params:{}}function $s(e,{relative:t}={}){let{matches:r}=d.useContext(Ft),{pathname:s}=Tt(),a=JSON.stringify(Ql(r));return d.useMemo(()=>Yl(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function _p(e,t){return rm(e,t)}function rm(e,t,r,s){var g;Be($r(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=d.useContext(Ht),{matches:i}=d.useContext(Ft),o=i[i.length-1],l=o?o.params:{},u=o?o.pathname:"/",c=o?o.pathnameBase:"/",f=o&&o.route;{let h=f&&f.path||"";sm(u,!f||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let p=Tt(),m;if(t){let h=typeof t=="string"?Fr(t):t;Be(c==="/"||((g=h.pathname)==null?void 0:g.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${h.pathname}" was given in the \`location\` prop.`),m=h}else m=p;let w=m.pathname||"/",x=w;if(c!=="/"){let h=c.replace(/^\//,"").split("/");x="/"+w.replace(/^\//,"").split("/").slice(h.length).join("/")}let N=Xf(e,{pathname:x});Dt(f||N!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Dt(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=zp(N&&N.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:cn([c,a.encodeLocation?a.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?c:cn([c,a.encodeLocation?a.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,r,s);return t&&C?d.createElement(Os.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},C):C}function Ap(){let e=Bp(),t=jp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},i={padding:"2px 4px",backgroundColor:s},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:i},"ErrorBoundary")," or"," ",d.createElement("code",{style:i},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:a},r):null,o)}var Lp=d.createElement(Ap,null),Ip=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(Ft.Provider,{value:this.props.routeContext},d.createElement(Hl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Mp({routeContext:e,match:t,children:r}){let s=d.useContext(Or);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(Ft.Provider,{value:e},r)}function zp(e,t=[],r=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,i=r==null?void 0:r.errors;if(i!=null){let u=a.findIndex(c=>c.route.id&&(i==null?void 0:i[c.route.id])!==void 0);Be(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,u+1))}let o=!1,l=-1;if(r)for(let u=0;u<a.length;u++){let c=a[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(l=u),c.route.id){let{loaderData:f,errors:p}=r,m=c.route.loader&&!f.hasOwnProperty(c.route.id)&&(!p||p[c.route.id]===void 0);if(c.route.lazy||m){o=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((u,c,f)=>{let p,m=!1,w=null,x=null;r&&(p=i&&c.route.id?i[c.route.id]:void 0,w=c.route.errorElement||Lp,o&&(l<0&&f===0?(sm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,x=null):l===f&&(m=!0,x=c.route.hydrateFallbackElement||null)));let N=t.concat(a.slice(0,f+1)),C=()=>{let g;return p?g=w:m?g=x:c.route.Component?g=d.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=u,d.createElement(Mp,{match:c,routeContext:{outlet:u,matches:N,isDataRoute:r!=null},children:g})};return r&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?d.createElement(Ip,{location:r.location,revalidation:r.revalidation,component:w,error:p,children:C(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):C()},null)}function Wl(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dp(e){let t=d.useContext(Or);return Be(t,Wl(e)),t}function Fp(e){let t=d.useContext(gi);return Be(t,Wl(e)),t}function Op(e){let t=d.useContext(Ft);return Be(t,Wl(e)),t}function Gl(e){let t=Op(e),r=t.matches[t.matches.length-1];return Be(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function $p(){return Gl("useRouteId")}function Bp(){var s;let e=d.useContext(Hl),t=Fp("useRouteError"),r=Gl("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function Up(){let{router:e}=Dp("useNavigate"),t=Gl("useNavigate"),r=d.useRef(!1);return nm(()=>{r.current=!0}),d.useCallback(async(a,i={})=>{Dt(r.current,tm),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...i}))},[e,t])}var pd={};function sm(e,t,r){!t&&!pd[e]&&(pd[e]=!0,Dt(!1,r))}d.memo(qp);function qp({routes:e,future:t,state:r}){return rm(e,void 0,r,t)}function Qp({to:e,replace:t,state:r,relative:s}){Be($r(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=d.useContext(Ht);Dt(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=d.useContext(Ft),{pathname:o}=Tt(),l=Xe(),u=Yl(e,Ql(i),o,s==="path"),c=JSON.stringify(u);return d.useEffect(()=>{l(JSON.parse(c),{replace:t,state:r,relative:s})},[l,c,s,t,r]),null}function Yp(e){return Tp(e.context)}function Ke(e){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Hp({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:a,static:i=!1}){Be(!$r(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:o,navigator:a,static:i,future:{}}),[o,a,i]);typeof r=="string"&&(r=Fr(r));let{pathname:u="/",search:c="",hash:f="",state:p=null,key:m="default"}=r,w=d.useMemo(()=>{let x=hn(u,o);return x==null?null:{location:{pathname:x,search:c,hash:f,state:p,key:m},navigationType:s}},[o,u,c,f,p,m,s]);return Dt(w!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:d.createElement(Ht.Provider,{value:l},d.createElement(Os.Provider,{children:t,value:w}))}function Wp({children:e,location:t}){return _p(Go(e),t)}function Go(e,t=[]){let r=[];return d.Children.forEach(e,(s,a)=>{if(!d.isValidElement(s))return;let i=[...t,a];if(s.type===d.Fragment){r.push.apply(r,Go(s.props.children,i));return}Be(s.type===Ke,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!s.props.index||!s.props.children,"An index route cannot have child routes.");let o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=Go(s.props.children,i)),r.push(o)}),r}var Sa="get",Ca="application/x-www-form-urlencoded";function vi(e){return e!=null&&typeof e.tagName=="string"}function Gp(e){return vi(e)&&e.tagName.toLowerCase()==="button"}function Vp(e){return vi(e)&&e.tagName.toLowerCase()==="form"}function Xp(e){return vi(e)&&e.tagName.toLowerCase()==="input"}function Kp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jp(e,t){return e.button===0&&(!t||t==="_self")&&!Kp(e)}function Vo(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let s=e[r];return t.concat(Array.isArray(s)?s.map(a=>[r,a]):[[r,s]])},[]))}function Zp(e,t){let r=Vo(e);return t&&t.forEach((s,a)=>{r.has(a)||t.getAll(a).forEach(i=>{r.append(a,i)})}),r}var aa=null;function ex(){if(aa===null)try{new FormData(document.createElement("form"),0),aa=!1}catch{aa=!0}return aa}var tx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wi(e){return e!=null&&!tx.has(e)?(Dt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ca}"`),null):e}function nx(e,t){let r,s,a,i,o;if(Vp(e)){let l=e.getAttribute("action");s=l?hn(l,t):null,r=e.getAttribute("method")||Sa,a=Wi(e.getAttribute("enctype"))||Ca,i=new FormData(e)}else if(Gp(e)||Xp(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||l.getAttribute("action");if(s=u?hn(u,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||Sa,a=Wi(e.getAttribute("formenctype"))||Wi(l.getAttribute("enctype"))||Ca,i=new FormData(l,e),!ex()){let{name:c,type:f,value:p}=e;if(f==="image"){let m=c?`${c}.`:"";i.append(`${m}x`,"0"),i.append(`${m}y`,"0")}else c&&i.append(c,p)}}else{if(vi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Sa,s=null,a=Ca,o=e}return i&&a==="text/plain"&&(o=i,i=void 0),{action:s,method:r.toLowerCase(),encType:a,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vl(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function rx(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&hn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function sx(e,t){if(e.id in t)return t[e.id];try{let r=await Vf(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ax(e){return e!=null&&typeof e.page=="string"}function ix(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function ox(e,t,r){let s=await Promise.all(e.map(async a=>{let i=t.routes[a.route.id];if(i){let o=await sx(i,r);return o.links?o.links():[]}return[]}));return ux(s.flat(1).filter(ix).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function xd(e,t,r,s,a,i){let o=(u,c)=>r[c]?u.route.id!==r[c].route.id:!0,l=(u,c)=>{var f;return r[c].pathname!==u.pathname||((f=r[c].route.path)==null?void 0:f.endsWith("*"))&&r[c].params["*"]!==u.params["*"]};return i==="assets"?t.filter((u,c)=>o(u,c)||l(u,c)):i==="data"?t.filter((u,c)=>{var p;let f=s.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(o(u,c)||l(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function lx(e,t,{includeHydrateFallback:r}={}){return cx(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let i=[a.module];return a.clientActionModule&&(i=i.concat(a.clientActionModule)),a.clientLoaderModule&&(i=i.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(i=i.concat(a.hydrateFallbackModule)),a.imports&&(i=i.concat(a.imports)),i}).flat(1))}function cx(e){return[...new Set(e)]}function dx(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function ux(e,t){let r=new Set,s=new Set(t);return e.reduce((a,i)=>{if(t&&!ax(i)&&i.as==="script"&&i.href&&s.has(i.href))return a;let l=JSON.stringify(dx(i));return r.has(l)||(r.add(l),a.push({key:l,link:i})),a},[])}function am(){let e=d.useContext(Or);return Vl(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function fx(){let e=d.useContext(gi);return Vl(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Xl=d.createContext(void 0);Xl.displayName="FrameworkContext";function im(){let e=d.useContext(Xl);return Vl(e,"You must render this element inside a <HydratedRouter> element"),e}function mx(e,t){let r=d.useContext(Xl),[s,a]=d.useState(!1),[i,o]=d.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:f,onTouchStart:p}=t,m=d.useRef(null);d.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let N=g=>{g.forEach(h=>{o(h.isIntersecting)})},C=new IntersectionObserver(N,{threshold:.5});return m.current&&C.observe(m.current),()=>{C.disconnect()}}},[e]),d.useEffect(()=>{if(s){let N=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(N)}}},[s]);let w=()=>{a(!0)},x=()=>{a(!1),o(!1)};return r?e!=="intent"?[i,m,{}]:[i,m,{onFocus:Xr(l,w),onBlur:Xr(u,x),onMouseEnter:Xr(c,w),onMouseLeave:Xr(f,x),onTouchStart:Xr(p,w)}]:[!1,m,{}]}function Xr(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function hx({page:e,...t}){let{router:r}=am(),s=d.useMemo(()=>Xf(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?d.createElement(xx,{page:e,matches:s,...t}):null}function px(e){let{manifest:t,routeModules:r}=im(),[s,a]=d.useState([]);return d.useEffect(()=>{let i=!1;return ox(e,t,r).then(o=>{i||a(o)}),()=>{i=!0}},[e,t,r]),s}function xx({page:e,matches:t,...r}){let s=Tt(),{manifest:a,routeModules:i}=im(),{basename:o}=am(),{loaderData:l,matches:u}=fx(),c=d.useMemo(()=>xd(e,t,u,a,s,"data"),[e,t,u,a,s]),f=d.useMemo(()=>xd(e,t,u,a,s,"assets"),[e,t,u,a,s]),p=d.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let x=new Set,N=!1;if(t.forEach(g=>{var y;let h=a.routes[g.route.id];!h||!h.hasLoader||(!c.some(E=>E.route.id===g.route.id)&&g.route.id in l&&((y=i[g.route.id])!=null&&y.shouldRevalidate)||h.hasClientLoader?N=!0:x.add(g.route.id))}),x.size===0)return[];let C=rx(e,o,"data");return N&&x.size>0&&C.searchParams.set("_routes",t.filter(g=>x.has(g.route.id)).map(g=>g.route.id).join(",")),[C.pathname+C.search]},[o,l,s,a,c,t,e,i]),m=d.useMemo(()=>lx(f,a),[f,a]),w=px(f);return d.createElement(d.Fragment,null,p.map(x=>d.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...r})),m.map(x=>d.createElement("link",{key:x,rel:"modulepreload",href:x,...r})),w.map(({key:x,link:N})=>d.createElement("link",{key:x,...N})))}function gx(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var om=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{om&&(window.__reactRouterVersion="7.7.1")}catch{}function vx({basename:e,children:t,window:r}){let s=d.useRef();s.current==null&&(s.current=Zh({window:r,v5Compat:!0}));let a=s.current,[i,o]=d.useState({action:a.action,location:a.location}),l=d.useCallback(u=>{d.startTransition(()=>o(u))},[o]);return d.useLayoutEffect(()=>a.listen(l),[a,l]),d.createElement(Hp,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a})}var lm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cm=d.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:a,reloadDocument:i,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:p,...m},w){let{basename:x}=d.useContext(Ht),N=typeof c=="string"&&lm.test(c),C,g=!1;if(typeof c=="string"&&N&&(C=c,om))try{let b=new URL(window.location.href),k=c.startsWith("//")?new URL(b.protocol+c):new URL(c),T=hn(k.pathname,x);k.origin===b.origin&&T!=null?c=T+k.search+k.hash:g=!0}catch{Dt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let h=Cp(c,{relative:a}),[y,E,j]=mx(s,m),P=jx(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:a,viewTransition:p});function S(b){t&&t(b),b.defaultPrevented||P(b)}let v=d.createElement("a",{...m,...j,href:C||h,onClick:g||i?t:S,ref:gx(w,E),target:u,"data-discover":!N&&r==="render"?"true":void 0});return y&&!N?d.createElement(d.Fragment,null,v,d.createElement(hx,{page:h})):v});cm.displayName="Link";var yx=d.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:a=!1,style:i,to:o,viewTransition:l,children:u,...c},f){let p=$s(o,{relative:c.relative}),m=Tt(),w=d.useContext(gi),{navigator:x,basename:N}=d.useContext(Ht),C=w!=null&&Rx(p)&&l===!0,g=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,h=m.pathname,y=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;r||(h=h.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&N&&(y=hn(y,N)||y);const E=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let j=h===g||!a&&h.startsWith(g)&&h.charAt(E)==="/",P=y!=null&&(y===g||!a&&y.startsWith(g)&&y.charAt(g.length)==="/"),S={isActive:j,isPending:P,isTransitioning:C},v=j?t:void 0,b;typeof s=="function"?b=s(S):b=[s,j?"active":null,P?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let k=typeof i=="function"?i(S):i;return d.createElement(cm,{...c,"aria-current":v,className:b,ref:f,style:k,to:o,viewTransition:l},typeof u=="function"?u(S):u)});yx.displayName="NavLink";var bx=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:a,state:i,method:o=Sa,action:l,onSubmit:u,relative:c,preventScrollReset:f,viewTransition:p,...m},w)=>{let x=Cx(),N=Ex(l,{relative:c}),C=o.toLowerCase()==="get"?"get":"post",g=typeof l=="string"&&lm.test(l),h=y=>{if(u&&u(y),y.defaultPrevented)return;y.preventDefault();let E=y.nativeEvent.submitter,j=(E==null?void 0:E.getAttribute("formmethod"))||o;x(E||y.currentTarget,{fetcherKey:t,method:j,navigate:r,replace:a,state:i,relative:c,preventScrollReset:f,viewTransition:p})};return d.createElement("form",{ref:w,method:C,action:N,onSubmit:s?u:h,...m,"data-discover":!g&&e==="render"?"true":void 0})});bx.displayName="Form";function wx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dm(e){let t=d.useContext(Or);return Be(t,wx(e)),t}function jx(e,{target:t,replace:r,state:s,preventScrollReset:a,relative:i,viewTransition:o}={}){let l=Xe(),u=Tt(),c=$s(e,{relative:i});return d.useCallback(f=>{if(Jp(f,t)){f.preventDefault();let p=r!==void 0?r:Ls(u)===Ls(c);l(e,{replace:p,state:s,preventScrollReset:a,relative:i,viewTransition:o})}},[u,l,c,r,s,t,e,a,i,o])}function Nx(e){Dt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=d.useRef(Vo(e)),r=d.useRef(!1),s=Tt(),a=d.useMemo(()=>Zp(s.search,r.current?null:t.current),[s.search]),i=Xe(),o=d.useCallback((l,u)=>{const c=Vo(typeof l=="function"?l(new URLSearchParams(a)):l);r.current=!0,i("?"+c,u)},[i,a]);return[a,o]}var kx=0,Sx=()=>`__${String(++kx)}__`;function Cx(){let{router:e}=dm("useSubmit"),{basename:t}=d.useContext(Ht),r=$p();return d.useCallback(async(s,a={})=>{let{action:i,method:o,encType:l,formData:u,body:c}=nx(s,t);if(a.navigate===!1){let f=a.fetcherKey||Sx();await e.fetch(f,r,a.action||i,{preventScrollReset:a.preventScrollReset,formData:u,body:c,formMethod:a.method||o,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:u,body:c,formMethod:a.method||o,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function Ex(e,{relative:t}={}){let{basename:r}=d.useContext(Ht),s=d.useContext(Ft);Be(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),i={...$s(e||".",{relative:t})},o=Tt();if(e==null){i.search=o.search;let l=new URLSearchParams(i.search),u=l.getAll("index");if(u.some(f=>f==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let f=l.toString();i.search=f?`?${f}`:""}}return(!e||e===".")&&a.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:cn([r,i.pathname])),Ls(i)}function Rx(e,{relative:t}={}){let r=d.useContext(em);Be(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=dm("useViewTransitionState"),a=$s(e,{relative:t});if(!r.isTransitioning)return!1;let i=hn(r.currentLocation.pathname,s)||r.currentLocation.pathname,o=hn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return Za(a.pathname,o)!=null||Za(a.pathname,i)!=null}function Tx({size:e=22,spinning:t=!1}){return n.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[n.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),n.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),n.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),n.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),n.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),n.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Px(){const e=Xe(),{pathname:t}=Tt(),r=d.useRef({}),s=d.useRef({}),[a,i]=d.useState(!1),o=d.useRef(null),l=d.useRef({});d.useEffect(()=>{l.current={tap:new Audio("/sounds/tap.mp3"),whoosh:new Audio("/sounds/whoosh.mp3")},Object.values(l.current).forEach(j=>{j.volume=.5})},[]);const u=j=>{const P=l.current[j];P&&(P.currentTime=0,P.play().catch(()=>{}))},c=j=>{if(navigator.vibrate)switch(j){case"light":navigator.vibrate(10);break;case"medium":navigator.vibrate(20);break;case"heavy":navigator.vibrate(40);break;case"double":navigator.vibrate([20,50,20]);break;case"success":navigator.vibrate([10,50,10,50,10]);break;default:navigator.vibrate(15)}};d.useCallback(()=>{var j;if(["/","/play","/swipe","/profile"].includes(t)){const P=((j=o.current)==null?void 0:j.scrollTop)||0,S=window.scrollY||window.pageYOffset||0,v=P>0?P:S;console.log(`Saving scroll for ${t}: main=${P}, window=${S}, saved=${v}`),r.current[t]=v}},[t]),d.useEffect(()=>{let j=null;const P=()=>{j&&cancelAnimationFrame(j),j=requestAnimationFrame(()=>{var v;if(["/","/play","/swipe","/profile"].includes(t)){const b=((v=o.current)==null?void 0:v.scrollTop)||0,k=window.scrollY||window.pageYOffset||0,T=b>0?b:k;r.current[t]=T,console.log(`Scroll position updated for ${t}: ${T}`)}})};window.addEventListener("scroll",P,{passive:!0});const S=o.current;return S&&S.addEventListener("scroll",P,{passive:!0}),()=>{j&&cancelAnimationFrame(j),window.removeEventListener("scroll",P),S&&S.removeEventListener("scroll",P)}},[t]),d.useEffect(()=>{if(o.current&&o.current.classList.add("navigating"),["/profile/","/quiz/","/practice/","/play/classic","/settings","/about"].some(S=>t.startsWith(S)))window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20);else{const S=r.current[t];if(console.log(`Attempting to restore scroll for ${t}: ${S}`),S!=null&&S>0){const v=(b=0)=>{b>=5||(o.current?(o.current.scrollTop=S,setTimeout(()=>{var T;const k=((T=o.current)==null?void 0:T.scrollTop)||0;Math.abs(k-S)>10?(window.scrollTo(0,S),setTimeout(()=>{const F=window.scrollY||window.pageYOffset||0;console.log(`Restore attempt ${b+1}: main=${k}, window=${F}, target=${S}`),Math.abs(F-S)>10&&Math.abs(k-S)>10&&v(b+1)},20)):console.log(`Successfully restored scroll to ${k}`)},20)):window.scrollTo(0,S))};v(0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}else window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}},[t]);const[f,p]=d.useState(!1),[m,w]=d.useState({open:!1,go:null}),[x,N]=d.useState(!1);d.useEffect(()=>{const j=()=>{N(document.body.classList.contains("hide-bottom-nav"))};j();const P=new MutationObserver(j);return P.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>P.disconnect()},[]),d.useEffect(()=>{const j=new MutationObserver(()=>{p(document.body.classList.contains("modal-open"))});return j.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>j.disconnect()},[]);const g=f||x||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(j=>j.test(t)),h=j=>j==="/"?t==="/":t.startsWith(j),y=d.useCallback(()=>{console.log("Scrolling to top"),window.scrollTo({top:0,behavior:"smooth"}),o.current&&o.current.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},[]),E=({path:j,icon:P,label:S,emoji:v})=>{const b=h(j),[k,T]=d.useState(!1),F=d.useCallback(()=>{var O;const q=Date.now();if(b){const R=s.current[j]||0;console.log(`Active tab clicked. Time since last tap: ${q-R}ms`),q-R<500?(console.log("Double tap detected!"),y(),u("tap"),c("double"),s.current[j]=0):s.current[j]=q;return}if(["/","/play","/swipe","/profile"].includes(t)){const R=((O=o.current)==null?void 0:O.scrollTop)||0,_=window.scrollY||window.pageYOffset||0,z=R>0?R:_;console.log(`Manually saving scroll before navigation from ${t}: ${z}`),r.current[t]=z}const Z=s.current[j]||0;if(q-Z<500){console.log("Double tap on inactive tab - navigating and scrolling to top"),r.current[j]=0,j==="/play"?(i(!0),u("whoosh"),c("double"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1),setTimeout(y,100)},200)):(u("tap"),c("double"),e(j),setTimeout(y,100)),s.current[j]=0;return}s.current[j]=q,T(!0),setTimeout(()=>T(!1),600);const Y=()=>{if(j==="/play"){i(!0),u("whoosh"),c("medium"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1)},200);return}u("tap"),c("light"),e(j)};if(localStorage.getItem("qp_in_question")==="true"){w({open:!0,go:Y});return}Y()},[b,j,t,e,y,u,c]);return n.jsxs("button",{type:"button",onClick:F,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${b?"scale-110":"scale-100 hover:scale-105"}
          ${k?"animate-bounce":""}`,"aria-current":b?"page":void 0,children:[b&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),n.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),n.jsx("div",{className:`leading-none text-2xl transition-transform ${b?"scale-125":""} ${j==="/play"&&a?"animate-spin":""}`,children:v||P}),n.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${b?"text-white":"text-base-muted/80"}`,children:S})]})};return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("style",{children:`
        .hide-bottom-nav nav[role="navigation"] {
         display: none !important;
        }
        main.navigating {
          visibility: hidden;
        }
        main {
          scroll-behavior: auto !important;
        }
      `}),n.jsx("main",{ref:o,className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:g||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:g||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto"},children:n.jsx(Yp,{})}),m.open&&n.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[n.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[n.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),n.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),n.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{c("light"),w({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),n.jsx("button",{onClick:()=>{c("medium");const j=m.go;w({open:!1,go:null}),j==null||j()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),n.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!g&&n.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[n.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),n.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),n.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[n.jsx(E,{path:"/",emoji:"🏠",label:"Home"}),n.jsx(E,{path:"/play",icon:n.jsx(Tx,{size:26,spinning:a}),label:"Play"}),n.jsx(E,{path:"/swipe",emoji:"📚",label:"Swipe"}),n.jsx(E,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function ei(){return ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},ei.apply(null,arguments)}function _x(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Ax(e){d.useEffect(e,[])}var Lx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function Lt(e,t){var r=t===void 0?{}:t,s=r.volume,a=s===void 0?1:s,i=r.playbackRate,o=i===void 0?1:i,l=r.soundEnabled,u=l===void 0?!0:l,c=r.interrupt,f=c===void 0?!1:c,p=r.onload,m=_x(r,Lx),w=ft.useRef(null),x=ft.useRef(!1),N=ft.useState(null),C=N[0],g=N[1],h=ft.useState(null),y=h[0],E=h[1],j=function(){typeof p=="function"&&p.call(this),x.current&&g(this.duration()*1e3),E(this)};Ax(function(){return Vf(()=>import("./howler-7608255b.js").then(k=>k.h),[]).then(function(k){if(!x.current){var T;w.current=(T=k.Howl)!==null&&T!==void 0?T:k.default.Howl,x.current=!0,new w.current(ei({src:Array.isArray(e)?e:[e],volume:a,rate:o,onload:j},m))}}),function(){x.current=!1}}),ft.useEffect(function(){w.current&&y&&E(new w.current(ei({src:Array.isArray(e)?e:[e],volume:a,onload:j},m)))},[JSON.stringify(e)]),ft.useEffect(function(){y&&(y.volume(a),m.sprite||y.rate(o))},[y,a,o]);var P=ft.useCallback(function(k){typeof k>"u"&&(k={}),!(!y||!u&&!k.forceSoundEnabled)&&(f&&y.stop(),k.playbackRate&&y.rate(k.playbackRate),y.play(k.id))},[y,u,f]),S=ft.useCallback(function(k){y&&y.stop(k)},[y]),v=ft.useCallback(function(k){y&&y.pause(k)},[y]),b=[P,{sound:y,stop:S,pause:v,duration:C}];return b}var um={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((r,s)=>{e.exports=s()})(km,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},a,i=!s.document&&!!s.postMessage,o=s.IS_PAPA_WORKER||!1,l={},u=0,c={};function f(v){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(b){var k=j(b);k.chunkSize=parseInt(k.chunkSize),b.step||b.chunk||(k.chunkSize=null),this._handle=new N(k),(this._handle.streamer=this)._config=k}).call(this,v),this.parseChunk=function(b,k){var T=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<T){let q=this._config.newline;q||(F=this._config.quoteChar||'"',q=this._handle.guessLineEndings(b,F)),b=[...b.split(q).slice(T)].join(q)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(F=this._config.beforeFirstChunk(b))!==void 0&&(b=F),this.isFirstChunk=!1,this._halted=!1;var T=this._partialLine+b,F=(this._partialLine="",this._handle.parse(T,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(b=F.meta.cursor,T=(this._finished||(this._partialLine=T.substring(b-this._baseIndex),this._baseIndex=b),F&&F.data&&(this._rowCount+=F.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),o)s.postMessage({results:F,workerId:c.WORKER_ID,finished:T});else if(S(this._config.chunk)&&!k){if(this._config.chunk(F,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=F=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(F.data),this._completeResults.errors=this._completeResults.errors.concat(F.errors),this._completeResults.meta=F.meta),this._completed||!T||!S(this._config.complete)||F&&F.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),T||F&&F.meta.paused||this._nextChunk(),F}this._halted=!0},this._sendError=function(b){S(this._config.error)?this._config.error(b):o&&this._config.error&&s.postMessage({workerId:c.WORKER_ID,error:b,finished:!1})}}function p(v){var b;(v=v||{}).chunkSize||(v.chunkSize=c.RemoteChunkSize),f.call(this,v),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(b=new XMLHttpRequest,this._config.withCredentials&&(b.withCredentials=this._config.withCredentials),i||(b.onload=P(this._chunkLoaded,this),b.onerror=P(this._chunkError,this)),b.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var k,T=this._config.downloadRequestHeaders;for(k in T)b.setRequestHeader(k,T[k])}var F;this._config.chunkSize&&(F=this._start+this._config.chunkSize-1,b.setRequestHeader("Range","bytes="+this._start+"-"+F));try{b.send(this._config.downloadRequestBody)}catch(q){this._chunkError(q.message)}i&&b.status===0&&this._chunkError()}},this._chunkLoaded=function(){b.readyState===4&&(b.status<200||400<=b.status?this._chunkError():(this._start+=this._config.chunkSize||b.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(b),this.parseChunk(b.responseText)))},this._chunkError=function(k){k=b.statusText||k,this._sendError(new Error(k))}}function m(v){(v=v||{}).chunkSize||(v.chunkSize=c.LocalChunkSize),f.call(this,v);var b,k,T=typeof FileReader<"u";this.stream=function(F){this._input=F,k=F.slice||F.webkitSlice||F.mozSlice,T?((b=new FileReader).onload=P(this._chunkLoaded,this),b.onerror=P(this._chunkError,this)):b=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var F=this._input,q=(this._config.chunkSize&&(q=Math.min(this._start+this._config.chunkSize,this._input.size),F=k.call(F,this._start,q)),b.readAsText(F,this._config.encoding));T||this._chunkLoaded({target:{result:q}})},this._chunkLoaded=function(F){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(F.target.result)},this._chunkError=function(){this._sendError(b.error)}}function w(v){var b;f.call(this,v=v||{}),this.stream=function(k){return b=k,this._nextChunk()},this._nextChunk=function(){var k,T;if(!this._finished)return k=this._config.chunkSize,b=k?(T=b.substring(0,k),b.substring(k)):(T=b,""),this._finished=!b,this.parseChunk(T)}}function x(v){f.call(this,v=v||{});var b=[],k=!0,T=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(F){this._input=F,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){T&&b.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),b.length?this.parseChunk(b.shift()):k=!0},this._streamData=P(function(F){try{b.push(typeof F=="string"?F:F.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(b.shift()))}catch(q){this._streamError(q)}},this),this._streamError=P(function(F){this._streamCleanUp(),this._sendError(F)},this),this._streamEnd=P(function(){this._streamCleanUp(),T=!0,this._streamData("")},this),this._streamCleanUp=P(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function N(v){var b,k,T,F,q=Math.pow(2,53),Z=-q,Y=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,U=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,O=this,R=0,_=0,z=!1,A=!1,L=[],I={data:[],errors:[],meta:{}};function V(M){return v.skipEmptyLines==="greedy"?M.join("").trim()==="":M.length===1&&M[0].length===0}function ne(){if(I&&T&&(Q("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+c.DefaultDelimiter+"'"),T=!1),v.skipEmptyLines&&(I.data=I.data.filter(function($){return!V($)})),re()){let $=function(K,X){S(v.transformHeader)&&(K=v.transformHeader(K,X)),L.push(K)};if(I)if(Array.isArray(I.data[0])){for(var M=0;re()&&M<I.data.length;M++)I.data[M].forEach($);I.data.splice(0,1)}else I.data.forEach($)}function G($,K){for(var X=v.header?{}:[],ee=0;ee<$.length;ee++){var J=ee,te=$[ee],te=((H,B)=>(se=>(v.dynamicTypingFunction&&v.dynamicTyping[se]===void 0&&(v.dynamicTyping[se]=v.dynamicTypingFunction(se)),(v.dynamicTyping[se]||v.dynamicTyping)===!0))(H)?B==="true"||B==="TRUE"||B!=="false"&&B!=="FALSE"&&((se=>{if(Y.test(se)&&(se=parseFloat(se),Z<se&&se<q))return 1})(B)?parseFloat(B):U.test(B)?new Date(B):B===""?null:B):B)(J=v.header?ee>=L.length?"__parsed_extra":L[ee]:J,te=v.transform?v.transform(te,J):te);J==="__parsed_extra"?(X[J]=X[J]||[],X[J].push(te)):X[J]=te}return v.header&&(ee>L.length?Q("FieldMismatch","TooManyFields","Too many fields: expected "+L.length+" fields but parsed "+ee,_+K):ee<L.length&&Q("FieldMismatch","TooFewFields","Too few fields: expected "+L.length+" fields but parsed "+ee,_+K)),X}var D;I&&(v.header||v.dynamicTyping||v.transform)&&(D=1,!I.data.length||Array.isArray(I.data[0])?(I.data=I.data.map(G),D=I.data.length):I.data=G(I.data,0),v.header&&I.meta&&(I.meta.fields=L),_+=D)}function re(){return v.header&&L.length===0}function Q(M,G,D,$){M={type:M,code:G,message:D},$!==void 0&&(M.row=$),I.errors.push(M)}S(v.step)&&(F=v.step,v.step=function(M){I=M,re()?ne():(ne(),I.data.length!==0&&(R+=M.data.length,v.preview&&R>v.preview?k.abort():(I.data=I.data[0],F(I,O))))}),this.parse=function(M,G,D){var $=v.quoteChar||'"',$=(v.newline||(v.newline=this.guessLineEndings(M,$)),T=!1,v.delimiter?S(v.delimiter)&&(v.delimiter=v.delimiter(M),I.meta.delimiter=v.delimiter):(($=((K,X,ee,J,te)=>{var H,B,se,me;te=te||[",","	","|",";",c.RECORD_SEP,c.UNIT_SEP];for(var je=0;je<te.length;je++){for(var pe,Ee=te[je],Le=0,Pe=0,he=0,ue=(se=void 0,new g({comments:J,delimiter:Ee,newline:X,preview:10}).parse(K)),xe=0;xe<ue.data.length;xe++)ee&&V(ue.data[xe])?he++:(pe=ue.data[xe].length,Pe+=pe,se===void 0?se=pe:0<pe&&(Le+=Math.abs(pe-se),se=pe));0<ue.data.length&&(Pe/=ue.data.length-he),(B===void 0||Le<=B)&&(me===void 0||me<Pe)&&1.99<Pe&&(B=Le,H=Ee,me=Pe)}return{successful:!!(v.delimiter=H),bestDelimiter:H}})(M,v.newline,v.skipEmptyLines,v.comments,v.delimitersToGuess)).successful?v.delimiter=$.bestDelimiter:(T=!0,v.delimiter=c.DefaultDelimiter),I.meta.delimiter=v.delimiter),j(v));return v.preview&&v.header&&$.preview++,b=M,k=new g($),I=k.parse(b,G,D),ne(),z?{meta:{paused:!0}}:I||{meta:{paused:!1}}},this.paused=function(){return z},this.pause=function(){z=!0,k.abort(),b=S(v.chunk)?"":b.substring(k.getCharIndex())},this.resume=function(){O.streamer._halted?(z=!1,O.streamer.parseChunk(b,!0)):setTimeout(O.resume,3)},this.aborted=function(){return A},this.abort=function(){A=!0,k.abort(),I.meta.aborted=!0,S(v.complete)&&v.complete(I),b=""},this.guessLineEndings=function(K,$){K=K.substring(0,1048576);var $=new RegExp(C($)+"([^]*?)"+C($),"gm"),D=(K=K.replace($,"")).split("\r"),$=K.split(`
`),K=1<$.length&&$[0].length<D[0].length;if(D.length===1||K)return`
`;for(var X=0,ee=0;ee<D.length;ee++)D[ee][0]===`
`&&X++;return X>=D.length/2?`\r
`:"\r"}}function C(v){return v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(v){var b=(v=v||{}).delimiter,k=v.newline,T=v.comments,F=v.step,q=v.preview,Z=v.fastMode,Y=null,U=!1,O=v.quoteChar==null?'"':v.quoteChar,R=O;if(v.escapeChar!==void 0&&(R=v.escapeChar),(typeof b!="string"||-1<c.BAD_DELIMITERS.indexOf(b))&&(b=","),T===b)throw new Error("Comment character same as delimiter");T===!0?T="#":(typeof T!="string"||-1<c.BAD_DELIMITERS.indexOf(T))&&(T=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var _=0,z=!1;this.parse=function(A,L,I){if(typeof A!="string")throw new Error("Input must be a string");var V=A.length,ne=b.length,re=k.length,Q=T.length,M=S(F),G=[],D=[],$=[],K=_=0;if(!A)return Le();if(Z||Z!==!1&&A.indexOf(O)===-1){for(var X=A.split(k),ee=0;ee<X.length;ee++){if($=X[ee],_+=$.length,ee!==X.length-1)_+=k.length;else if(I)return Le();if(!T||$.substring(0,Q)!==T){if(M){if(G=[],me($.split(b)),Pe(),z)return Le()}else me($.split(b));if(q&&q<=ee)return G=G.slice(0,q),Le(!0)}}return Le()}for(var J=A.indexOf(b,_),te=A.indexOf(k,_),H=new RegExp(C(R)+C(O),"g"),B=A.indexOf(O,_);;)if(A[_]===O)for(B=_,_++;;){if((B=A.indexOf(O,B+1))===-1)return I||D.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:G.length,index:_}),pe();if(B===V-1)return pe(A.substring(_,B).replace(H,O));if(O===R&&A[B+1]===R)B++;else if(O===R||B===0||A[B-1]!==R){J!==-1&&J<B+1&&(J=A.indexOf(b,B+1));var se=je((te=te!==-1&&te<B+1?A.indexOf(k,B+1):te)===-1?J:Math.min(J,te));if(A.substr(B+1+se,ne)===b){$.push(A.substring(_,B).replace(H,O)),A[_=B+1+se+ne]!==O&&(B=A.indexOf(O,_)),J=A.indexOf(b,_),te=A.indexOf(k,_);break}if(se=je(te),A.substring(B+1+se,B+1+se+re)===k){if($.push(A.substring(_,B).replace(H,O)),Ee(B+1+se+re),J=A.indexOf(b,_),B=A.indexOf(O,_),M&&(Pe(),z))return Le();if(q&&G.length>=q)return Le(!0);break}D.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:G.length,index:_}),B++}}else if(T&&$.length===0&&A.substring(_,_+Q)===T){if(te===-1)return Le();_=te+re,te=A.indexOf(k,_),J=A.indexOf(b,_)}else if(J!==-1&&(J<te||te===-1))$.push(A.substring(_,J)),_=J+ne,J=A.indexOf(b,_);else{if(te===-1)break;if($.push(A.substring(_,te)),Ee(te+re),M&&(Pe(),z))return Le();if(q&&G.length>=q)return Le(!0)}return pe();function me(he){G.push(he),K=_}function je(he){var ue=0;return ue=he!==-1&&(he=A.substring(B+1,he))&&he.trim()===""?he.length:ue}function pe(he){return I||(he===void 0&&(he=A.substring(_)),$.push(he),_=V,me($),M&&Pe()),Le()}function Ee(he){_=he,me($),$=[],te=A.indexOf(k,_)}function Le(he){if(v.header&&!L&&G.length&&!U){var ue=G[0],xe=Object.create(null),it=new Set(ue);let tn=!1;for(let _e=0;_e<ue.length;_e++){let Ne=ue[_e];if(xe[Ne=S(v.transformHeader)?v.transformHeader(Ne,_e):Ne]){let Ue,gn=xe[Ne];for(;Ue=Ne+"_"+gn,gn++,it.has(Ue););it.add(Ue),ue[_e]=Ue,xe[Ne]++,tn=!0,(Y=Y===null?{}:Y)[Ue]=Ne}else xe[Ne]=1,ue[_e]=Ne;it.add(Ne)}tn&&console.warn("Duplicate headers found and renamed."),U=!0}return{data:G,errors:D,meta:{delimiter:b,linebreak:k,aborted:z,truncated:!!he,cursor:K+(L||0),renamedHeaders:Y}}}function Pe(){F(Le()),G=[],D=[]}},this.abort=function(){z=!0},this.getCharIndex=function(){return _}}function h(v){var b=v.data,k=l[b.workerId],T=!1;if(b.error)k.userError(b.error,b.file);else if(b.results&&b.results.data){var F={abort:function(){T=!0,y(b.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(S(k.userStep)){for(var q=0;q<b.results.data.length&&(k.userStep({data:b.results.data[q],errors:b.results.errors,meta:b.results.meta},F),!T);q++);delete b.results}else S(k.userChunk)&&(k.userChunk(b.results,F,b.file),delete b.results)}b.finished&&!T&&y(b.workerId,b.results)}function y(v,b){var k=l[v];S(k.userComplete)&&k.userComplete(b),k.terminate(),delete l[v]}function E(){throw new Error("Not implemented.")}function j(v){if(typeof v!="object"||v===null)return v;var b,k=Array.isArray(v)?[]:{};for(b in v)k[b]=j(v[b]);return k}function P(v,b){return function(){v.apply(b,arguments)}}function S(v){return typeof v=="function"}return c.parse=function(v,b){var k=(b=b||{}).dynamicTyping||!1;if(S(k)&&(b.dynamicTypingFunction=k,k={}),b.dynamicTyping=k,b.transform=!!S(b.transform)&&b.transform,!b.worker||!c.WORKERS_SUPPORTED)return k=null,c.NODE_STREAM_INPUT,typeof v=="string"?(v=(T=>T.charCodeAt(0)!==65279?T:T.slice(1))(v),k=new(b.download?p:w)(b)):v.readable===!0&&S(v.read)&&S(v.on)?k=new x(b):(s.File&&v instanceof File||v instanceof Object)&&(k=new m(b)),k.stream(v);(k=(()=>{var T;return!!c.WORKERS_SUPPORTED&&(T=(()=>{var F=s.URL||s.webkitURL||null,q=r.toString();return c.BLOB_URL||(c.BLOB_URL=F.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",q,")();"],{type:"text/javascript"})))})(),(T=new s.Worker(T)).onmessage=h,T.id=u++,l[T.id]=T)})()).userStep=b.step,k.userChunk=b.chunk,k.userComplete=b.complete,k.userError=b.error,b.step=S(b.step),b.chunk=S(b.chunk),b.complete=S(b.complete),b.error=S(b.error),delete b.worker,k.postMessage({input:v,config:b,workerId:k.id})},c.unparse=function(v,b){var k=!1,T=!0,F=",",q=`\r
`,Z='"',Y=Z+Z,U=!1,O=null,R=!1,_=((()=>{if(typeof b=="object"){if(typeof b.delimiter!="string"||c.BAD_DELIMITERS.filter(function(L){return b.delimiter.indexOf(L)!==-1}).length||(F=b.delimiter),typeof b.quotes!="boolean"&&typeof b.quotes!="function"&&!Array.isArray(b.quotes)||(k=b.quotes),typeof b.skipEmptyLines!="boolean"&&typeof b.skipEmptyLines!="string"||(U=b.skipEmptyLines),typeof b.newline=="string"&&(q=b.newline),typeof b.quoteChar=="string"&&(Z=b.quoteChar),typeof b.header=="boolean"&&(T=b.header),Array.isArray(b.columns)){if(b.columns.length===0)throw new Error("Option columns is empty");O=b.columns}b.escapeChar!==void 0&&(Y=b.escapeChar+Z),b.escapeFormulae instanceof RegExp?R=b.escapeFormulae:typeof b.escapeFormulae=="boolean"&&b.escapeFormulae&&(R=/^[=+\-@\t\r].*$/)}})(),new RegExp(C(Z),"g"));if(typeof v=="string"&&(v=JSON.parse(v)),Array.isArray(v)){if(!v.length||Array.isArray(v[0]))return z(null,v,U);if(typeof v[0]=="object")return z(O||Object.keys(v[0]),v,U)}else if(typeof v=="object")return typeof v.data=="string"&&(v.data=JSON.parse(v.data)),Array.isArray(v.data)&&(v.fields||(v.fields=v.meta&&v.meta.fields||O),v.fields||(v.fields=Array.isArray(v.data[0])?v.fields:typeof v.data[0]=="object"?Object.keys(v.data[0]):[]),Array.isArray(v.data[0])||typeof v.data[0]=="object"||(v.data=[v.data])),z(v.fields||[],v.data||[],U);throw new Error("Unable to serialize unrecognized input");function z(L,I,V){var ne="",re=(typeof L=="string"&&(L=JSON.parse(L)),typeof I=="string"&&(I=JSON.parse(I)),Array.isArray(L)&&0<L.length),Q=!Array.isArray(I[0]);if(re&&T){for(var M=0;M<L.length;M++)0<M&&(ne+=F),ne+=A(L[M],M);0<I.length&&(ne+=q)}for(var G=0;G<I.length;G++){var D=(re?L:I[G]).length,$=!1,K=re?Object.keys(I[G]).length===0:I[G].length===0;if(V&&!re&&($=V==="greedy"?I[G].join("").trim()==="":I[G].length===1&&I[G][0].length===0),V==="greedy"&&re){for(var X=[],ee=0;ee<D;ee++){var J=Q?L[ee]:ee;X.push(I[G][J])}$=X.join("").trim()===""}if(!$){for(var te=0;te<D;te++){0<te&&!K&&(ne+=F);var H=re&&Q?L[te]:te;ne+=A(I[G][H],te)}G<I.length-1&&(!V||0<D&&!K)&&(ne+=q)}}return ne}function A(L,I){var V,ne;return L==null?"":L.constructor===Date?JSON.stringify(L).slice(1,25):(ne=!1,R&&typeof L=="string"&&R.test(L)&&(L="'"+L,ne=!0),V=L.toString().replace(_,Y),(ne=ne||k===!0||typeof k=="function"&&k(L,I)||Array.isArray(k)&&k[I]||((re,Q)=>{for(var M=0;M<Q.length;M++)if(-1<re.indexOf(Q[M]))return!0;return!1})(V,c.BAD_DELIMITERS)||-1<V.indexOf(F)||V.charAt(0)===" "||V.charAt(V.length-1)===" ")?Z+V+Z:V)}},c.RECORD_SEP=String.fromCharCode(30),c.UNIT_SEP=String.fromCharCode(31),c.BYTE_ORDER_MARK="\uFEFF",c.BAD_DELIMITERS=["\r",`
`,'"',c.BYTE_ORDER_MARK],c.WORKERS_SUPPORTED=!i&&!!s.Worker,c.NODE_STREAM_INPUT=1,c.LocalChunkSize=10485760,c.RemoteChunkSize=5242880,c.DefaultDelimiter=",",c.Parser=g,c.ParserHandle=N,c.NetworkStreamer=p,c.FileStreamer=m,c.StringStreamer=w,c.ReadableStreamStreamer=x,s.jQuery&&((a=s.jQuery).fn.parse=function(v){var b=v.config||{},k=[];return this.each(function(q){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var Z=0;Z<this.files.length;Z++)k.push({file:this.files[Z],inputElem:this,instanceConfig:a.extend({},b)})}),T(),this;function T(){if(k.length===0)S(v.complete)&&v.complete();else{var q,Z,Y,U,O=k[0];if(S(v.before)){var R=v.before(O.file,O.inputElem);if(typeof R=="object"){if(R.action==="abort")return q="AbortError",Z=O.file,Y=O.inputElem,U=R.reason,void(S(v.error)&&v.error({name:q},Z,Y,U));if(R.action==="skip")return void F();typeof R.config=="object"&&(O.instanceConfig=a.extend(O.instanceConfig,R.config))}else if(R==="skip")return void F()}var _=O.instanceConfig.complete;O.instanceConfig.complete=function(z){S(_)&&_(z,O.file,O.inputElem),F()},c.parse(O.file,O.instanceConfig)}}function F(){k.splice(0,1),T()}}),o&&(s.onmessage=function(v){v=v.data,c.WORKER_ID===void 0&&v&&(c.WORKER_ID=v.workerId),typeof v.input=="string"?s.postMessage({workerId:c.WORKER_ID,results:c.parse(v.input,v.config),finished:!0}):(s.File&&v.input instanceof File||v.input instanceof Object)&&(v=c.parse(v.input,v.config))&&s.postMessage({workerId:c.WORKER_ID,results:v,finished:!0})}),(p.prototype=Object.create(f.prototype)).constructor=p,(m.prototype=Object.create(f.prototype)).constructor=m,(w.prototype=Object.create(w.prototype)).constructor=w,(x.prototype=Object.create(f.prototype)).constructor=x,c})})(um);var Ix=um.exports;const ir=Md(Ix);function yi({startRect:e,targetRef:t,count:r=12,onDone:s}){return d.useEffect(()=>{const a=t==null?void 0:t.current;if(!e||!a){s==null||s();return}const i=a.getBoundingClientRect(),o=document.createElement("div");o.style.position="fixed",o.style.inset="0",o.style.pointerEvents="none",o.style.zIndex="9999",document.body.appendChild(o);const l=i.left+i.width/2,u=i.top+i.height/2,c=e.left+e.width/2,f=e.top+e.height/2,p=200;let m=0;function w(x){const N=document.createElement("div");N.textContent="🪙",Object.assign(N.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const C=c,g=f,h=l,y=u;N.style.transform=`translate(${C}px, ${g}px) scale(1)`,o.appendChild(N),N.getBoundingClientRect(),N.style.transition=`transform ${p}ms cubic-bezier(.2,.8,.2,1), opacity ${p}ms linear`,requestAnimationFrame(()=>{N.style.transform=`translate(${h}px, ${y}px) scale(.6)`,N.style.opacity="0.1"}),setTimeout(()=>{N.remove(),m+=1,m===r&&(o.remove(),s==null||s())},p+50)}for(let x=0;x<r;x++)setTimeout(()=>w(),x*60);return()=>{try{o.remove()}catch{}}},[e,t,r,s]),null}const ct={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},gd=e=>Math.floor(e/ct.XP_PER_LEVEL)+1,Mx=e=>{const t=e%ct.XP_PER_LEVEL;return{current:t,required:ct.XP_PER_LEVEL,percentage:t/ct.XP_PER_LEVEL*100}};function zx({player:e,size:t="normal",showLevel:r=!0,showName:s=!0}){const a=ct.AVATARS.find(o=>o.id===e.avatar)||ct.AVATARS[0],i={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`${i[t]} rounded-full bg-gradient-to-br ${a.bgColor} flex items-center justify-center shadow-lg`,children:n.jsx("span",{children:a.emoji})}),r&&n.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:e.name}),n.jsx("div",{className:"text-xs text-base-muted",children:a.name})]})]})}function Dx({current:e,required:t,level:r,animate:s=!0}){const[a,i]=d.useState(0),o=e/t*100;return d.useEffect(()=>{if(s){const l=setTimeout(()=>{i(o)},100);return()=>clearTimeout(l)}else i(o)},[o,s]),n.jsxs("div",{className:"w-full",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs font-medium",children:["Level ",r]}),n.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),n.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${a}%`},children:n.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}const fm=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],mm=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],hm=[...fm.filter(e=>e.slug!=="more"),...mm];function Fx({onClick:e}){return n.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:e,children:[n.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),n.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),n.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),n.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),n.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]})}function Ox({actions:e}){return n.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,r)=>n.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[n.jsx("div",{className:"text-2xl",children:t.icon}),n.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},r))})}function $x({categories:e,onCategorySelect:t}){return n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),n.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(r=>n.jsxs("button",{onClick:()=>t(r),className:`bg-gradient-to-br ${r.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[n.jsx("div",{className:"text-3xl",children:r.icon}),n.jsx("div",{className:"text-xs font-bold text-white text-center",children:r.name}),r.questions>0&&n.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[r.questions," Qs"]})]},r.name))})]})}function Bx({onClick:e,isPulsing:t}){return n.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium",children:"Practice Mode"}),n.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),n.jsx("div",{className:"text-xl",children:"→"})]})}function Ux({dailyQ:e,isFlipped:t,picked:r,onAnswer:s,dailyCompleted:a,DAILY_Q_COINS:i,DAILY_Q_XP:o}){return a?n.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"✅"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}):e?n.jsx("div",{className:"flip-card mb-6",children:n.jsxs("div",{className:`flip-card-inner ${t?"flipped":""}`,children:[n.jsx("div",{className:"flip-card-front",children:n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),n.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",i," coins +",o," XP"]})]}),n.jsx("p",{className:"text-sm mb-4 text-base-muted",children:e.prompt}),n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.options.map((l,u)=>{const c=u===e.answerIndex,f=r===u,p=r!==null;return n.jsx("button",{onClick:m=>s(u,m),disabled:r!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${p?c?"border-green-500 bg-green-500/20":f?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${r!==null?"cursor-not-allowed":"cursor-pointer"}`,children:l},u)})})]})}),n.jsx("div",{className:"flip-card-back absolute inset-0",children:n.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[n.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),n.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),n.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",i," coins & ",o," XP!"]}),n.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}):null}function qx({show:e,onClose:t,player:r,changeAvatar:s,GAME_CONSTANTS:a}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:i=>i.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.AVATARS.map(i=>{const o=!r.unlockedAvatars.includes(i.id),l=r.avatar===i.id;return n.jsxs("button",{onClick:()=>{o||(s(i.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":o?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:o,children:[n.jsx("div",{className:`text-4xl mb-2 ${o?"grayscale":""}`,children:i.emoji}),n.jsx("div",{className:"text-sm font-medium",children:i.name}),o&&n.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",i.unlockLevel]}),l&&n.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},i.id)})})]})}):null}function Qx({show:e,onClose:t,categories:r,onCategorySelect:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:a=>a.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:r.map(a=>n.jsxs("button",{onClick:()=>{t(),s(a)},className:`bg-gradient-to-br ${a.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[n.jsx("div",{className:"text-3xl",children:a.icon}),n.jsx("div",{className:"text-sm font-bold text-white",children:a.name}),n.jsxs("div",{className:"text-xs text-white/80",children:[a.questions," questions"]})]},a.name))})]})}):null}function Yx({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"magic-gradient h-full"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[r," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function Hx({show:e,onClose:t,selectedCategory:r,difficulty:s,setDifficulty:a,count:i,setCount:o,timer:l,setTimer:u,onStart:c}){return!e||!r?null:n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:r.icon}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium",children:["Category: ",r.name]}),n.jsxs("div",{className:"text-xs text-base-muted",children:[r.questions," questions available"]})]})]})}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>a(f),className:`py-2 rounded-xl border ${s===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),n.jsx("input",{type:"number",value:l,onChange:f=>u(Number(f.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:c,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function Wx({show:e,onClose:t,allCategories:r,category:s,setCategory:a,difficulty:i,setDifficulty:o,count:l,setCount:u,onStart:c}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),n.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:r.map(f=>n.jsxs("button",{onClick:()=>a(f.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===f.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[n.jsx("div",{className:"text-xl",children:f.icon}),n.jsx("div",{className:"text-[10px] text-center",children:f.name})]},f.slug))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>u(f),className:`py-2 rounded-xl border ${l===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:c,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}const vd=(e=new Date)=>e.toLocaleDateString("en-CA"),yd=(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},Gx=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function bd(){const e=Xe(),{player:t,addXP:r,addCoins:s,levelProgress:a,useEnergy:i,changeAvatar:o}=xn(),[l]=Lt("/sounds/correct.mp3",{volume:.6}),[u]=Lt("/sounds/wrong.mp3",{volume:.6}),[c]=Lt("/sounds/coin.mp3",{volume:.75}),[f]=Lt("/sounds/levelup.mp3",{volume:.8}),p=d.useRef(t.level),m=d.useRef(null);d.useEffect(()=>{const pe=()=>{};return window.addEventListener("focus",pe),()=>window.removeEventListener("focus",pe)},[]),d.useEffect(()=>{t.level>p.current&&(f==null||f(),p.current=t.level)},[t.level,f]);const[w,x]=d.useState(!1),[N,C]=d.useState(null),[g,h]=d.useState(!1),[y,E]=d.useState("medium"),[j,P]=d.useState(10),[S,v]=d.useState(45),[b,k]=d.useState(!1),[T,F]=d.useState(!1),[q,Z]=d.useState(null),[Y,U]=d.useState(null),[O,R]=d.useState(!1),[_,z]=d.useState(!1),[A,L]=d.useState(null),I=10,V=5,[ne,re]=d.useState(!1),[Q,M]=d.useState(!1),[G,D]=d.useState("general-knowledge"),[$,K]=d.useState("medium"),[X,ee]=d.useState(10),[J,te]=d.useState(()=>yd("dq_daily_log",{})[vd()]===!0);d.useEffect(()=>{const pe=sessionStorage.getItem("homeScrollPosition");pe&&window.scrollTo(0,parseInt(pe));const Ee=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",Ee),()=>window.removeEventListener("scroll",Ee)},[]),d.useEffect(()=>{if(J)return;(async()=>{var Ee;try{const Le=await fetch("/data/quiz_questions_bank.csv").then(xe=>xe.text()),{data:Pe}=ir.parse(Le,{header:!0,skipEmptyLines:!0});if(!Pe.length)throw new Error("empty");const he=Pe[Math.floor(Math.random()*Pe.length)],ue=[he.option1,he.option2,he.option3,he.option4].filter(Boolean);Z({category:he.category||"General",prompt:he.question,options:ue,answerIndex:["A","B","C","D"].indexOf((Ee=he.answer)==null?void 0:Ee.toUpperCase())||0})}catch{Z({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[J]);const H=(pe,Ee)=>{if(Y!==null)return;U(pe);const Le=pe===q.answerIndex;if(Le){if(l(),Ee!=null&&Ee.currentTarget&&m.current){const Pe=Ee.currentTarget.getBoundingClientRect();c(),L({startRect:Pe,count:10,amount:V})}}else u();setTimeout(()=>{if(z(!0),R(!0),Le){const Pe=vd();Gx("dq_daily_log",{...yd("dq_daily_log",{}),[Pe]:!0}),te(!0);const he=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(he+1))}},600)},B=pe=>{if(pe.slug==="more"){x(!0);return}C(pe),h(!0)},se=()=>{console.log("Starting quiz with energy:",t.energy),console.log("Category:",N.slug),e(`/quiz/${N.slug}`,{state:{mode:"quiz",difficulty:y,count:j,timer:{type:"per_q",seconds:S},source:"adventure"}}),h(!1)},me=()=>{console.log("Starting practice, category:",G),e(`/quiz/${G}`,{state:{mode:"practice",difficulty:$,count:X,timer:{type:"off",seconds:0}}}),M(!1)},je=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>e("/profile/quests")},{icon:"🔥",label:"Streak",color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>e("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>e("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>e("/profile/rewards")}];return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),n.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[n.jsx("style",{jsx:!0,children:`
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
        `}),A&&n.jsx(yi,{startRect:A.startRect,targetRef:m,count:A.count,onDone:()=>{ne||(r(I),s(A.amount),re(!0)),L(null)}}),n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"flex justify-between items-start mb-4",children:[n.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>F(!0),children:n.jsx(zx,{player:t,size:"small",showLevel:!0,showName:!0})}),n.jsx("div",{className:"flex gap-2",children:n.jsxs("button",{ref:m,onClick:()=>k(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold",children:t.coins})]})})]}),n.jsx(Dx,{current:a.current,required:a.required,level:t.level,animate:!0})]}),n.jsx(Fx,{onClick:()=>e("/play")}),n.jsx(Ox,{actions:je}),n.jsx(Ux,{dailyQ:q,isFlipped:_,picked:Y,onAnswer:H,dailyCompleted:J,DAILY_Q_COINS:V,DAILY_Q_XP:I}),n.jsx($x,{categories:fm,onCategorySelect:B}),n.jsx(Bx,{onClick:()=>M(!0),isPulsing:t.energy<10}),n.jsx(qx,{show:T,onClose:()=>F(!1),player:t,changeAvatar:o,GAME_CONSTANTS:ct}),n.jsx(Hx,{show:g,onClose:()=>h(!1),selectedCategory:N,difficulty:y,setDifficulty:E,count:j,setCount:P,timer:S,setTimer:v,onStart:se}),n.jsx(Wx,{show:Q,onClose:()=>M(!1),allCategories:hm,category:G,setCategory:D,difficulty:$,setDifficulty:K,count:X,setCount:ee,onStart:me}),n.jsx(Qx,{show:w,onClose:()=>x(!1),categories:mm,onCategorySelect:B}),n.jsx(Yx,{show:b,onClose:()=>k(!1),coins:t.coins,onNavigateToPlay:()=>{k(!1),e("/play")}})]})]})}const Gt={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},Vt={get:(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function Kl(){const[e,t]=d.useState(()=>Vt.get(Gt.COINS,0)),[r,s]=d.useState(()=>Vt.get(Gt.XP,0)),[a,i]=d.useState(()=>Vt.get(Gt.LEVEL,1)),[o,l]=d.useState(()=>Vt.get(Gt.OWNED_CHARACTERS,[])),[u,c]=d.useState(()=>Vt.get(Gt.SOUND,!0));return d.useEffect(()=>Vt.set(Gt.COINS,e),[e]),d.useEffect(()=>Vt.set(Gt.XP,r),[r]),d.useEffect(()=>Vt.set(Gt.LEVEL,a),[a]),d.useEffect(()=>Vt.set(Gt.OWNED_CHARACTERS,o),[o]),d.useEffect(()=>Vt.set(Gt.SOUND,u),[u]),{coins:e,xp:r,level:a,ownedCharacters:o,soundOn:u,addCoins:x=>t(N=>N+x),addXp:x=>s(N=>N+x),unlockCharacter:x=>{l(N=>[...new Set([...N,x])])},setSoundOn:c,checkLevelUp:()=>{const x=100*a*(a-1);return r>=x?(i(N=>N+1),!0):!1},nextLevelThreshold:100*a*(a-1),xpProgress:r/(100*a*(a-1))}}const Vx=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Kt=Vx.slice(0,6),Gn=360/Kt.length,pm={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},yn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},Jn=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),wd=e=>(e%360+360)%360,Jl=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},Er=(e,t=.7)=>{try{const r=new Audio(e);r.volume=t,r.play()}catch{}};function Xx({run:e,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:i,onBack:o,spinning:l,angle:u,transition:c,result:f,showCallout:p,glowColor:m,soundOn:w,setSoundOn:x,showSparkle:N,pulseIdx:C,nextProgressIdx:g,pendingProgressIdx:h,coinBurstTick:y,lastAnswerWasCorrect:E}){const j=100*s*(s-1),[P,S]=d.useState(!1),v=d.useRef(0),b=d.useRef(null),k=d.useRef(null),[T,F]=d.useState({dx:110,dy:-260}),[q,Z]=d.useState(!1);return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(h==null)return;S(!1);const Y=setTimeout(()=>S(!0),30);return()=>clearTimeout(Y)},[h]),d.useEffect(()=>{var U,O,R,_;if(!y||!E||y===v.current)return;v.current=y;try{const z=(O=(U=k==null?void 0:k.current)==null?void 0:U.getBoundingClientRect)==null?void 0:O.call(U),A=(_=(R=b==null?void 0:b.current)==null?void 0:R.getBoundingClientRect)==null?void 0:_.call(R);if(z&&A){const L=z.left+z.width/2,I=z.top+z.height/2,V=A.left+A.width/2,ne=A.top+A.height/2;F({dx:V-L,dy:ne-I})}}catch{}w&&Er("/sounds/coin.mp3",.7),Z(!0);const Y=setTimeout(()=>Z(!1),700);return()=>clearTimeout(Y)},[y,w,E]),n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-8",children:[n.jsx("button",{onClick:o,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[n.jsxs("div",{className:"text-[11px]",children:["Lvl ",s," • ",r,"/",j]}),n.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:n.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(r/j,1)*100}%`}})})]}),n.jsxs("button",{ref:b,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),n.jsx("button",{onClick:()=>x(!w),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:n.jsx("span",{className:"text-lg",children:w?"🔊":"🔇"})})]}),a.length>0&&n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:a.map(Y=>{const U=Kt.find(R=>Jn(R.name)===Y),O=pm[Y];return n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:n.jsx("span",{className:"text-sm",children:U==null?void 0:U.icon})}),n.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:O})]},Y)})})}),n.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:n.jsxs("div",{className:"w-80 max-w-full",children:[n.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),n.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(Y=>{const U=["#FF9800","#FFC107","#cadd75ff"],O=!!e.progress[Y];return n.jsxs("div",{className:"relative h-full bg-white/10",children:[n.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:O?Y===h?P?"100%":"0%":g===Y&&h==null?"0%":"100%":"0%",backgroundColor:U[Y],transition:Y===h?"width 1200ms ease-out":"none"}}),C===Y&&n.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:n.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),N===Y&&n.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},Y)})},e.qIndex)]})}),n.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:n.jsxs("div",{ref:k,className:"relative w-96 h-96 rounded-full select-none",children:[m&&n.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${m}40, 0 0 40px 12px ${m}60`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${u}deg)`,transition:c},children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Kt.map((Y,U)=>{const O=U*Gn,R=O+Gn,_=Gn>180?1:0,z=Math.PI*O/180,A=Math.PI*R/180,L=50+45*Math.cos(z),I=50-45*Math.sin(z),V=50+45*Math.cos(A),ne=50-45*Math.sin(A),re=O+Gn/2,Q=28,M=50+Q*Math.cos(re*Math.PI/180),G=50-Q*Math.sin(re*Math.PI/180);return n.jsxs("g",{children:[n.jsx("path",{d:`M50,50 L${L},${I} A45,45 0 ${_} 0 ${V},${ne} Z`,fill:Y.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),n.jsx("text",{x:M,y:G,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:Y.icon})]},U)}),n.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),n.jsx("button",{onClick:i,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:n.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:n.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),p&&f&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:n.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[n.jsx("span",{className:"mr-2",children:f.cat.icon}),f.cat.name]})}),q&&n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(Y=>n.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${Y*80}ms forwards`,"--coin-dx":`${T.dx}px`,"--coin-dy":`${T.dy}px`},children:n.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},Y))]})]})}),n.jsx("div",{className:"text-center",children:n.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}var Ea={linear:function(e,t,r,s){var a=r-t;return a*e/s+t},easeInQuad:function(e,t,r,s){var a=r-t;return a*(e/=s)*e+t},easeOutQuad:function(e,t,r,s){var a=r-t;return-a*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e+t},easeOutCubic:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,r,s){var a=r-t;return-a*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,s){var a=r-t;return-a*Math.cos(e/s*(Math.PI/2))+a+t},easeOutSine:function(e,t,r,s){var a=r-t;return a*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,r,s){var a=r-t;return-a/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,r,s){var a=r-t;return e==0?t:a*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,r,s){var a=r-t;return e==s?t+a:a*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,r,s){var a=r-t;return e===0?t:e===s?t+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,s){var a=r-t;return-a*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,r,s){var a=r-t;return a*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t)},easeOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),i*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/o)+a+t)},easeInOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s/2)===2?t+a:(o||(o=s*(.3*1.5)),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o)*.5+a+t)},easeInBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*(e/=s)*e*((a+1)*e-a)+t},easeOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*((e=e/s-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),(e/=s/2)<1?i/2*(e*e*(((a*=1.525)+1)*e-a))+t:i/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(e,t,r,s){var a=r-t,i;return i=Ea.easeOutBounce(s-e,0,a,s),a-i+t},easeOutBounce:function(e,t,r,s){var a=r-t;return(e/=s)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,s){var a=r-t,i;return e<s/2?(i=Ea.easeInBounce(e*2,0,a,s),i*.5+t):(i=Ea.easeOutBounce(e*2-s,0,a,s),i*.5+a*.5+t)}},Kx=Ea;function Jx(e){return e*Math.PI/180}function jt(e,t){return e+Math.random()*(t-e)}function Zx(e,t){return Math.floor(e+Math.random()*(t-e+1))}var ps;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(ps||(ps={}));var kn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(kn||(kn={}));const eg=1e3/60;class tg{constructor(t,r,s,a){this.getOptions=r;const{colors:i,initialVelocityX:o,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=a,this.w=jt(5,20),this.h=jt(5,20),this.radius=jt(5,10),this.vx=typeof o=="number"?jt(-o,o):jt(o.min,o.max),this.vy=typeof l=="number"?jt(-l,0):jt(l.min,l.max),this.shape=Zx(0,2),this.angle=Jx(jt(0,360)),this.angularSpin=jt(-.2,.2),this.color=i[Math.floor(Math.random()*i.length)],this.rotateY=jt(0,1),this.rotationDirection=jt(0,1)?kn.Positive:kn.Negative}update(t){const{gravity:r,wind:s,friction:a,opacity:i,drawShape:o}=this.getOptions(),l=t/eg;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=r*l,this.vx+=s*l,this.vx*=a**l,this.vy*=a**l,this.rotateY>=1&&this.rotationDirection===kn.Positive?this.rotationDirection=kn.Negative:this.rotateY<=-1&&this.rotationDirection===kn.Negative&&(this.rotationDirection=kn.Positive);const u=.1*this.rotationDirection*l;if(this.rotateY+=u,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=i,this.context.lineCap="round",this.context.lineWidth=2,o&&typeof o=="function")o.call(this,this.context);else switch(this.shape){case ps.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case ps.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case ps.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class ng{constructor(t,r){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=a=>{this.particles.splice(a,1)},this.getParticle=()=>{const a=jt(this.x,this.w+this.x),i=jt(this.y,this.h+this.y);return new tg(this.context,this.getOptions,a,i)},this.animate=a=>{const{canvas:i,context:o,particlesGenerated:l,lastNumberOfPieces:u}=this,{run:c,recycle:f,numberOfPieces:p,debug:m,tweenFunction:w,tweenDuration:x}=this.getOptions();if(!c)return!1;const N=this.particles.length,C=f?N:l;if(C<p){u!==p&&(this.tweenProgress=0,this.tweenFrom=C,this.lastNumberOfPieces=p),this.tweenProgress=Math.min(x,Math.max(0,this.tweenProgress+a));const g=w(this.tweenProgress,this.tweenFrom,p,x),h=Math.round(g-C);for(let y=0;y<h;y++)this.particles.push(this.getParticle());this.particlesGenerated+=h}m&&(o.font="12px sans-serif",o.fillStyle="#333",o.textAlign="right",o.fillText(`Particles: ${N}`,i.width-10,i.height-20));for(let g=this.particles.length-1;g>=0;g--){const h=this.particles[g];h.update(a),(h.y>i.height||h.y<-100||h.x>i.width+100||h.x<-100)&&(f&&C<=p?this.particles[g]=this.getParticle():this.removeParticleAt(g))}return N>0||C<p},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=r}}const Zl={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:Kx.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class rg{constructor(t,r){this.lastFrameTime=0,this.setOptionsWithDefaults=a=>{const i={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...i,...Zl,...a},Object.assign(this,a.confettiSource)},this.update=(a=0)=>{const{options:{run:i,onConfettiComplete:o,frameRate:l},canvas:u,context:c}=this,f=Math.min(a-this.lastFrameTime,50);if(l&&f<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=a-(l?f%l:0),i&&(c.fillStyle="white",c.clearRect(0,0,u.width,u.height)),this.generator.animate(f)?this.rafId=requestAnimationFrame(this.update):(o&&typeof o=="function"&&this.generator.particlesGenerated>0&&o.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new ng(this.canvas,()=>this.options),this.options=r,this.update()}get options(){return this._options}set options(t){var a,i;const r=(a=this._options)==null?void 0:a.run,s=(i=this._options)==null?void 0:i.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&r===!1&&this.update()}}const sg=ft.createRef();class ec extends ft.Component{constructor(t){super(t),this.canvas=ft.createRef(),this.canvas=t.canvasRef||sg}componentDidMount(){if(this.canvas.current){const t=Gi(this.props)[0];this.confetti=new rg(this.canvas.current,t)}}componentDidUpdate(){const t=Gi(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,r]=Gi(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...r.style};return n.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...r,style:s})}}ec.defaultProps={...Zl};ec.displayName="ReactConfetti";function Gi(e){const t={},r={},s={},a=[...Object.keys(Zl),"confettiSource","drawShape","onConfettiComplete","frameRate"],i=["canvasRef"];for(const o in e){const l=e[o];a.includes(o)?t[o]=l:i.includes(o)?i[o]=l:s[o]=l}return[t,s,r]}const xm=ft.forwardRef((e,t)=>n.jsx(ec,{canvasRef:t,...e}));function jd({question:e,category:t,onAnswer:r,run:s,timeLeft:a,usedLifelines:i,onUseLifeline:o,eliminatedOptions:l,audienceData:u,onBack:c,timeUp:f,onTimeUpBackToWheel:p,soundOn:m}){const[w,x]=d.useState(null),[N,C]=d.useState(!1),[g,h]=d.useState(!1),y=d.useRef(null),E=d.useRef(null),[j,P]=d.useState(null);d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(!N||!y.current)return;const b=y.current.getBoundingClientRect();P({x:b.left,y:b.top-300,w:b.width,h:8})},[N]);const S=b=>{if(N)return;x(b),C(!0);const k=b===e.correctIndex;Jl(k?[50,30,50]:[200]),m&&Er(k?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{r(k,null)},1500)},v=w===e.correctIndex;return n.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:n.jsxs("div",{ref:E,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("div",{className:"mb-4",children:n.jsx("button",{onClick:()=>h(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:`text-4xl font-black mb-2 ${a<=10?"text-red-400 animate-pulse":"text-white"}`,children:a}),n.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:n.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${a<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${a/30*100}%`}})})]}),n.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[n.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-lg font-bold",children:t.name}),n.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),n.jsx("h2",{ref:y,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),n.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((b,k)=>{const T=l.includes(k),F=w===k,q=k===e.correctIndex;let Z="bg-white/10 border-white/20",Y="opacity-100";return T?Y="opacity-30":N&&F?Z=q?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":N&&q?Z="bg-green-500/30 border-green-400":F&&(Z="bg-white/20 border-white/40"),n.jsx("button",{onClick:()=>S(k),disabled:N||T,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${Z} ${Y} ${!N&&!T?"hover:bg-white/15 active:scale-98":""}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+k)}),n.jsx("span",{className:"font-medium flex-1",children:b}),u&&n.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(u[k]),"%"]})]})},k)})}),!N&&n.jsxs("div",{className:"flex gap-4 mb-8",children:[n.jsx("button",{onClick:()=>o("fifty"),disabled:i.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),n.jsx("button",{onClick:()=>o("audience"),disabled:i.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),N&&n.jsxs("div",{className:"relative text-center",children:[v&&n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsx(xm,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:j||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),n.jsx("button",{onClick:()=>r(v,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),f&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),n.jsx("button",{onClick:p,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),g&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>h(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),n.jsx("button",{onClick:c,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Nd({category:e,onComplete:t,isBonus:r=!1,soundOn:s=!0}){return d.useEffect(()=>{s&&Er("/sounds/flush.mp3",.8);const a=setTimeout(t,1e3);return Jl([50]),()=>clearTimeout(a)},[t,s]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),r?n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[n.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),n.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:n.jsx("span",{className:"text-6xl",children:"⭐"})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[n.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[n.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),n.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),n.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:n.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function ag({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:n.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function ig({onSelect:e}){return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[n.jsxs("header",{className:"text-center mb-12",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),n.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),n.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-6",children:Kt.map(t=>{const r=pm[Jn(t.name)];return n.jsxs("button",{onClick:()=>e(Jn(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[n.jsx("div",{className:"text-4xl mb-3",children:t.icon}),n.jsx("div",{className:"font-black text-lg mb-1",children:r}),n.jsx("div",{className:"text-sm opacity-75",children:t.name})]},Jn(t.name))})})]})})}function og({onBack:e}){const{coins:t,xp:r,level:s,ownedCharacters:a,soundOn:i,addCoins:o,addXp:l,unlockCharacter:u,setSoundOn:c}=Kl(),[f,p]=d.useState("wheel"),[m,w]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[x,N]=d.useState([]),[C,g]=d.useState(null),[h,y]=d.useState(null),[E,j]=d.useState(30),[P,S]=d.useState([]),[v,b]=d.useState(null),[k,T]=d.useState(null),[F,q]=d.useState(!1),[Z,Y]=d.useState(0),[U,O]=d.useState("none"),[R,_]=d.useState(!1),[z,A]=d.useState(null),[L,I]=d.useState(!1),[V,ne]=d.useState(null),[re,Q]=d.useState(-1),[M,G]=d.useState(0),[D,$]=d.useState(null),[K,X]=d.useState(null),[ee,J]=d.useState(!1),[te,H]=d.useState(null),[B,se]=d.useState(-1),[me,je]=d.useState([!1,!1,!1]),[pe,Ee]=d.useState(!1),[Le,Pe]=d.useState(!1),he=d.useRef(null),ue=d.useRef(null),xe=d.useRef(null),it=d.useMemo(()=>{var de;return((de=window.matchMedia)==null?void 0:de.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>(tn(),_e(),()=>Ne()),[]),d.useEffect(()=>(f==="question"&&E>0&&!Le?he.current=setTimeout(()=>{j(de=>{const le=de-1;return le===10&&i&&Er("/sounds/tick.mp3",.8),le})},1e3):f==="question"&&E===0&&q(!0),()=>{he.current&&clearTimeout(he.current)}),[f,E,i,Le]),d.useEffect(()=>{if(f!=="wheel"||D==null)return;Q(D),i&&Er("/sounds/progress.mp3",.6),se(D);const de=setTimeout(()=>se(-1),900),le=setTimeout(()=>Q(-1),900),be=setTimeout(()=>{te&&(te==="streakFlash"?p("streakFlash"):te==="characterPicker"?p("characterPicker"):(e(),Ue()),H(null)),$(null)},1800);return()=>{clearTimeout(de),clearTimeout(le),clearTimeout(be)}},[f,D,te,i,e]),d.useEffect(()=>{f!=="wheel"||!pe||(G(de=>de+1),Ee(!1))},[f,pe]),d.useEffect(()=>{if(f!=="wheel"||K==null)return;const le=setTimeout(()=>{$(K),X(null)},ee?1800:0);return()=>clearTimeout(le)},[f,K,ee]);const tn=async()=>{try{const le=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:be}=ir.parse(le,{header:!0,skipEmptyLines:!0,transformHeader:ge=>ge.trim().toLowerCase()}),Ce=be.map((ge,ie)=>{var Re;const ce=[ge.option1,ge.option2,ge.option3,ge.option4].map(Ie=>(Ie||"").trim()).filter(Boolean);if(ce.length<4)return null;let ze={a:0,b:1,c:2,d:3}[(Re=ge.answer)==null?void 0:Re.toLowerCase()];return ze===void 0&&(ze=ce.findIndex(Ie=>Ie.toLowerCase()===(ge.answer||"").toLowerCase())),ze===-1&&(ze=0),{id:ge.id||`q_${ie}`,prompt:(ge.question||"").trim(),options:ce,correctIndex:ze,category:(ge.category||ge.subject||"general knowledge").trim(),difficulty:(ge.difficulty||"medium").toLowerCase(),explanation:(ge.explanation||"").trim()}}).filter(Boolean);N(Ce)}catch(de){console.error("Failed to load questions:",de),N([])}},_e=()=>{const de=new Audio("/sounds/spin.mp3");de.loop=!0,de.volume=.6,ue.current=de},Ne=()=>{if(he.current&&clearTimeout(he.current),xe.current&&(clearTimeout(xe.current),xe.current=null),ue.current){try{ue.current.pause()}catch{}ue.current=null}},Ue=()=>{w({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),je([!1,!1,!1]),g(null),y(null),T(null),S([]),b(null),q(!1),G(0)},gn=()=>{if(i&&ue.current){try{ue.current.currentTime=0,ue.current.play()}catch{}xe.current&&clearTimeout(xe.current),xe.current=setTimeout(()=>{or()},2e3)}},or=()=>{if(xe.current&&(clearTimeout(xe.current),xe.current=null),ue.current)try{ue.current.pause(),ue.current.currentTime=0}catch{}},Br=()=>{if(R)return;A(null),I(!1),ne(null),_(!0),gn();const de=Math.floor(Math.random()*Kt.length),le=Kt[de],be=wd(Z),Ce=de*Gn+Gn/2,ge=(Math.random()-.5)*(Gn*.3),ie=360-Ce+ge;let ce=wd(ie-be);const ve=yn.FULL_TURNS*360+ce,ze=Z+ve+yn.OVERSHOOT;O(`transform ${it?1e3:yn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),Y(ze),Jl([20,50,20]),setTimeout(()=>{O(`transform ${it?200:yn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),Y(Re=>Re-yn.OVERSHOOT)},it?1e3:yn.DURATION),setTimeout(()=>{or(),_(!1),A({cat:le,index:de}),y(le),ne(le.color),I(!0),setTimeout(()=>{I(!1),p("interstitial")},1500),setTimeout(()=>ne(null),1e3)},(it?1e3:yn.DURATION)+(it?200:yn.SETTLE_DURATION)+100)},ae=()=>{const de=x.filter(be=>{const Ce=be.category.toLowerCase(),ge=h.name.toLowerCase();return Ce.includes(ge)||ge.includes(Ce)});let le;de.length>0?le=de[Math.floor(Math.random()*de.length)]:le=x[Math.floor(Math.random()*x.length)],le?(g(le),j(30),S([]),b(null),q(!1),Pe(!1),p("question")):p("wheel")},fe=(de,le,be=!1)=>{if(!be){Pe(!0);return}const Ce=m.qIndex,ge=[...m.progress];ge[Ce]=!0;const ie=[...me];if(ie[Ce]=!!de,je(ie),w(ce=>({...ce,progress:ge,qIndex:ce.qIndex+1})),de&&(o(5),l(1),Ee(!0)),X(Ce),J(!!de),Ce===2){const ce=ie.every(Boolean);H(ce?"streakFlash":"modes")}else H(null);p("wheel")},Ae=de=>{if(!(m.lifelines[de]||!C)){if(w(le=>({...le,lifelines:{...le.lifelines,[de]:!0}})),de==="fifty"){const be=C.options.map((Ce,ge)=>ge).filter(Ce=>Ce!==C.correctIndex).slice(0,2);S(be)}else if(de==="audience"){const le=40+Math.random()*25;let be=100-le;const Ce=[0,0,0,0];Ce[C.correctIndex]=Math.round(le);const ge=[0,1,2,3].filter(ie=>ie!==C.correctIndex);ge.forEach((ie,ce)=>{if(ce===ge.length-1)Ce[ie]=be;else{const ve=Math.floor(Math.random()*be);Ce[ie]=ve,be-=ve}}),b(Ce)}}},Se=de=>{T(de),p("bonusInterstitial")},We=de=>{de&&k&&(u(k),i&&Er("/sounds/coin.mp3",1)),setTimeout(()=>{e(),Ue()},3e3)},ye=()=>{p("wheel")};switch(f){case"wheel":return n.jsx(Xx,{run:m,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:Br,onBack:e,spinning:R,angle:Z,transition:U,result:z,showCallout:L,glowColor:V,soundOn:i,setSoundOn:c,showSparkle:re,pulseIdx:B,coinBurstTick:M,pendingProgressIdx:D,lastAnswerWasCorrect:ee,nextProgressIdx:K});case"interstitial":return n.jsx(Nd,{category:h,onComplete:ae,soundOn:i});case"streakFlash":return n.jsx(ag,{onDone:()=>p("characterPicker")});case"question":return n.jsx(jd,{question:C,category:h,onAnswer:fe,run:m,timeLeft:E,usedLifelines:m.lifelines,onUseLifeline:Ae,eliminatedOptions:P,audienceData:v,onBack:ye,timeUp:F,onTimeUpBackToWheel:()=>{q(!1),p("wheel")},soundOn:i});case"characterPicker":return n.jsx(ig,{onSelect:Se});case"bonusInterstitial":return n.jsx(Nd,{category:Kt.find(de=>Jn(de.name)===k),onComplete:()=>p("bonusQuestion"),isBonus:!0,soundOn:i});case"bonusQuestion":if(!C){const de=Kt.find(le=>Jn(le.name)===k);if(de&&x.length>0){const le=x.filter(Ce=>{const ge=Ce.category.toLowerCase(),ie=de.name.toLowerCase();return ge.includes(ie)||ie.includes(ge)}),be=le.length>0?le[Math.floor(Math.random()*le.length)]:x[Math.floor(Math.random()*x.length)];g(be),j(30)}return n.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:n.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return n.jsx(jd,{question:C,category:Kt.find(de=>Jn(de.name)===k)||Kt[0],onAnswer:We,run:{...m,lifelines:{fifty:!0,audience:!0}},timeLeft:E,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:e,soundOn:i});default:return n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),n.jsx("button",{onClick:()=>p("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function lg({lives:e,maxLives:t=3}){const[r,s]=d.useState(null),[a,i]=d.useState(e);return d.useEffect(()=>{e<a?(s(a-1),setTimeout(()=>s(null),600)):e>a&&(s(e-1),setTimeout(()=>s(null),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"relative",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[n.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((o,l)=>n.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:n.jsxs("div",{className:"relative",children:[l<e?n.jsxs("div",{className:`relative ${l===r&&e>a?"heart-gained":""}`,children:[n.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&n.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):n.jsx("div",{className:`relative ${l===r&&e<a?"heart-lost":""}`,children:n.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===r&&e>a&&n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[n.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),n.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),n.jsx("div",{className:"pr-1",children:n.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&n.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:n.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function cg({question:e,onAnswer:t,lives:r,questionCount:s,correctStreak:a,totalScore:i,currentDifficulty:o,timeLeft:l,showFeedback:u,lastAnswerCorrect:c,checkpoint:f,onBack:p,soundOn:m,setSoundOn:w}){const[x,N]=d.useState(!1),[C,g]=d.useState(null),[h,y]=d.useState(!1),[E,j]=d.useState(!1),P={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},S=P[o];d.useEffect(()=>{a>0&&a%5===0&&u&&c&&(y(!0),setTimeout(()=>y(!1),3e3))},[a,u,c]),d.useEffect(()=>{u&&c&&(j(!0),setTimeout(()=>j(!1),1e3))},[u,c]);const v=b=>{u||(g(b),t(b))};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:S.emoji}),n.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),n.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-8 slide-in",children:[n.jsx("button",{onClick:()=>N(!0),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"◀️"})}),n.jsx(lg,{lives:r}),n.jsx("button",{onClick:()=>w(!m),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:m?"🔊":"🔇"})})]}),n.jsx("div",{className:`glass-card rounded-3xl p-2 shadow-xl mb-2 mt-12 slide-in bg-gradient-to-r ${S.accentGradient}`,style:{animationDelay:"0.1s"},children:n.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${S.color} bg-clip-text text-transparent ${E?"score-pulse":""}`,children:i}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),u&&c&&n.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",P[o]?o==="EASY"?10:o==="MEDIUM"?20:o==="HARD"?30:o==="EXPERT"?50:100:10]})})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-black text-white",children:s}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:`text-3xl font-black text-orange-400 ${a>0?"streak-flame":""}`,children:a}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),n.jsxs("div",{className:"flex justify-between items-center mb-1 slide-in",style:{animationDelay:"0.2s"},children:[n.jsx("div",{className:`px-4 py-3 rounded-full bg-gradient-to-r ${S.color} text-white shadow-lg`,children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:S.emoji}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:S.label}),n.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),n.jsx("div",{className:"relative",children:n.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[n.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),n.jsx("div",{className:"relative z-10",children:n.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),n.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[n.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),n.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),n.jsx("div",{className:"space-y-3",children:e.options.map((b,k)=>{const T=["A","B","C","D"],F=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let q="glass-card border border-white/10",Z="";return u&&(k===e.correctIndex?(q="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",Z="correct-bounce"):C===k&&!c&&(q="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",Z="wrong-shake")),n.jsx("button",{onClick:()=>v(k),disabled:u,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${q} ${Z} 
                  ${u?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+k*.05}s`},children:n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${F[k]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:T[k]}),n.jsx("span",{className:"flex-1 text-left font-medium text-white",children:b}),u&&k===e.correctIndex&&n.jsx("span",{className:"text-2xl",children:"✅"}),u&&C===k&&!c&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},k)})}),u&&n.jsx("div",{className:"mt-6 text-center slide-in",children:n.jsx("p",{className:"text-sm font-medium text-white/70",children:c?S.motivationalText:"No worries! Keep trying! 💪"})}),f>0&&n.jsx("div",{className:"mt-4 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:n.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏁"}),n.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",f]})]})})})]}),h&&n.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),n.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),n.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})}),x&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>N(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:p,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}function dg({score:e,questionsAnswered:t,highScore:r,checkpoint:s,onRestart:a,onContinue:i,onBack:o}){const l=e>r,[u,c]=d.useState(!1),[f,p]=d.useState(0),[m,w]=d.useState(!1),x=d.useRef(null);d.useEffect(()=>{const y=e/60;let E=0;const j=setInterval(()=>{E+=y,E>=e?(p(e),clearInterval(j),l&&(c(!0),setTimeout(()=>c(!1),5e3))):p(Math.floor(E))},2e3/60);return setTimeout(()=>w(!0),2200),()=>clearInterval(j)},[e,l]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const C=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),u&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((g,h)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:n.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},h))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[n.jsxs("div",{className:"mb-8 slide-up",children:[n.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&n.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:n.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"🏆"}),n.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),n.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),m&&n.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:n.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${C.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[n.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:C.emoji}),n.jsx("h2",{className:"text-3xl font-black mb-2",children:C.title}),n.jsx("p",{className:"text-white/80 mb-4",children:C.subtitle}),n.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((g,h)=>n.jsx("span",{className:`text-2xl ${h<C.stars?"star-pop":""}`,style:{animationDelay:`${2.5+h*.1}s`},children:h<C.stars?"⭐":"☆"},h))})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),n.jsx("div",{ref:x,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:f}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"📊"}),n.jsx("div",{className:"text-4xl font-black text-white",children:t}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(r,e)]})})]})]}),n.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:n.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),n.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&i&&n.jsx("button",{onClick:i,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏁"}),n.jsxs("span",{children:["Continue from Question ",s]})]})}),n.jsx("button",{onClick:a,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎮"}),n.jsx("span",{children:"Play Again"})]})}),n.jsx("button",{onClick:o,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏠"}),n.jsx("span",{children:"Back to Games"})]})})]})]})]})}const kd={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function ug({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,addCoins:i,addXp:o,setSoundOn:l}=Kl(),[u,c]=d.useState("playing"),[f,p]=d.useState(3),[m,w]=d.useState(0),[x,N]=d.useState(0),[C,g]=d.useState(0),[h,y]=d.useState("EASY"),[E,j]=d.useState([]),[P,S]=d.useState(null),[v,b]=d.useState(30),[k,T]=d.useState(!1),[F,q]=d.useState(!1),[Z,Y]=d.useState(0),U=d.useRef(null),O=d.useRef(new Set);d.useEffect(()=>(_(),re(),()=>{U.current&&clearTimeout(U.current)}),[]),d.useEffect(()=>(u==="playing"&&P&&v>0&&!k&&(U.current=setTimeout(()=>{b(X=>X<=1?(V(),0):(X===6&&a&&$("/sounds/tick.mp3",.8),X-1))},1e3)),()=>{U.current&&clearTimeout(U.current)}),[u,P,v,k,a]),d.useEffect(()=>{const X=R(m);X!==h&&(y(X),a&&$("/sounds/levelup.mp3",.6))},[m,h,a]),d.useEffect(()=>{m>0&&m%10===0&&(ne(),Y(m),a&&$("/sounds/checkpoint.mp3",.7))},[m,a]);const R=X=>X>=100?"LEGENDARY":X>=50?"EXPERT":X>=25?"HARD":X>=10?"MEDIUM":"EASY",_=async()=>{try{const ee=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:J}=ir.parse(ee,{header:!0,skipEmptyLines:!0,transformHeader:H=>H.trim().toLowerCase()}),te=J.map((H,B)=>{var pe;const se=[H.option1,H.option2,H.option3,H.option4].map(Ee=>(Ee||"").trim()).filter(Boolean);if(se.length<4)return null;let je={a:0,b:1,c:2,d:3}[(pe=H.answer)==null?void 0:pe.toLowerCase()];return je===void 0&&(je=se.findIndex(Ee=>Ee.toLowerCase()===(H.answer||"").toLowerCase())),je===-1&&(je=0),{id:H.id||`q_${B}`,prompt:(H.question||"").trim(),options:se,correctIndex:je,category:(H.category||H.subject||"general").trim(),difficulty:(H.difficulty||"medium").toLowerCase()}}).filter(Boolean);j(te),z(te)}catch(X){console.error("Failed to load questions:",X)}},z=(X=E)=>{const ee=X.filter(B=>!O.current.has(B.id));ee.length===0&&(O.current.clear(),ee.push(...X));const J=h.toLowerCase();let te=ee.filter(B=>B.difficulty===J||B.difficulty==="medium");te.length===0&&(te=ee);const H=te[Math.floor(Math.random()*te.length)];H&&(O.current.add(H.id),S(H),b(kd[h].timer),T(!1))},A=X=>{if(k)return;const ee=X===P.correctIndex;q(ee),T(!0),ee?L():I(),setTimeout(()=>{(f>0||ee)&&(w(J=>J+1),z())},1500)},L=()=>{const X=kd[h].points;g(ee=>ee+X),N(ee=>{const J=ee+1;return J%5===0&&f<3&&(p(te=>Math.min(te+1,3)),a&&$("/sounds/lifeup.mp3",.8)),J}),i(Math.floor(X/10)),o(1),a&&$("/sounds/correct.mp3",.7)},I=()=>{N(0),p(X=>{const ee=X-1;return ee<=0&&(c("gameOver"),M()),ee}),a&&$("/sounds/wrong.mp3",.7),K([200])},V=()=>{I()},ne=()=>{const X={questionCount:m,totalScore:C,lives:f,correctStreak:x,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(X))},re=()=>{const X=localStorage.getItem("survival_checkpoint");if(X)try{const ee=JSON.parse(X);Date.now()-ee.timestamp<864e5?(w(ee.questionCount),g(ee.totalScore),p(ee.lives),N(ee.correctStreak),Y(ee.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(ee){console.error("Failed to load checkpoint:",ee)}},Q=()=>{localStorage.removeItem("survival_checkpoint"),Y(0)},M=()=>{const X=parseInt(localStorage.getItem("survival_highscore")||"0");C>X&&(localStorage.setItem("survival_highscore",C.toString()),localStorage.setItem("survival_highquestions",m.toString()))},G=()=>{c("playing"),p(3),w(0),N(0),g(0),y("EASY"),O.current.clear(),Q(),z()},D=()=>{c("playing"),z()},$=(X,ee=.5)=>{try{const J=new Audio(X);J.volume=ee,J.play()}catch{}},K=X=>{navigator.vibrate&&navigator.vibrate(X)};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),u==="gameOver"?n.jsx(dg,{score:C,questionsAnswered:m,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:Z,onRestart:G,onContinue:Z>0?D:null,onBack:e}):P?n.jsx(cg,{question:P,onAnswer:A,lives:f,questionCount:m,correctStreak:x,totalScore:C,currentDifficulty:h,timeLeft:v,showFeedback:k,lastAnswerCorrect:F,checkpoint:Z,onBack:e,soundOn:a,setSoundOn:l}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const Vn=[{id:1,name:"Sandy Beach",emoji:"🏖️",theme:{background:"from-yellow-300 via-orange-300 to-blue-400",accent:"from-yellow-400 to-orange-400",cardBg:"from-amber-500/20 to-yellow-500/20",unlockGradient:"from-yellow-400 to-amber-500"},difficulty:"EASY",difficultyRange:{min:0,max:9},questionDifficulty:["easy"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:10,gemChance:.3,gemBonus:5,speedBonus:3,perfectBonus:50,treasurePiece:"🧩",completionCoins:30},description:"Start your adventure on the sunny shores! Easy questions to warm up.",unlockRequirement:null,visualElements:{bgEmojis:["🌊","🐚","🦀","⛱️","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","✨"]}},{id:2,name:"Jungle Cave",emoji:"🌴",theme:{background:"from-green-400 via-emerald-500 to-teal-600",accent:"from-green-500 to-emerald-600",cardBg:"from-green-500/20 to-emerald-500/20",unlockGradient:"from-green-400 to-emerald-500"},difficulty:"EASY-MEDIUM",difficultyRange:{min:10,max:24},questionDifficulty:["easy","medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:15,gemChance:.35,gemBonus:7,speedBonus:5,perfectBonus:75,treasurePiece:"🗝️",completionCoins:50},description:"Explore the mysterious jungle caves! Watch out for tricky vines!",unlockRequirement:{island:1,treasurePiece:!0},visualElements:{bgEmojis:["🌿","🦜","🐒","🦋","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🌟"]}},{id:3,name:"Crystal Mountain",emoji:"⛰️",theme:{background:"from-purple-400 via-pink-400 to-indigo-500",accent:"from-purple-500 to-pink-500",cardBg:"from-purple-500/20 to-pink-500/20",unlockGradient:"from-purple-400 to-pink-500"},difficulty:"MEDIUM",difficultyRange:{min:25,max:49},questionDifficulty:["medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:20,gemChance:.4,gemBonus:10,speedBonus:7,perfectBonus:100,treasurePiece:"💎",completionCoins:75},description:"Climb the sparkling crystal peaks! Medium challenges await!",unlockRequirement:{island:2,treasurePiece:!0},visualElements:{bgEmojis:["✨","🔮","⭐","🌟","💫"],diggingEmoji:"⚒️",foundEmojis:["💎","🪙","🌈"]}},{id:4,name:"Pirate Ship",emoji:"🏴‍☠️",theme:{background:"from-slate-600 via-blue-600 to-cyan-500",accent:"from-slate-700 to-blue-700",cardBg:"from-slate-500/20 to-blue-500/20",unlockGradient:"from-slate-500 to-blue-600"},difficulty:"MEDIUM-HARD",difficultyRange:{min:50,max:99},questionDifficulty:["medium","hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:30,gemChance:.45,gemBonus:15,speedBonus:10,perfectBonus:150,treasurePiece:"🗺️",completionCoins:100},description:"Ahoy matey! Navigate the pirate ship's challenging puzzles!",unlockRequirement:{island:3,treasurePiece:!0},visualElements:{bgEmojis:["⚓","🦜","💀","🌊","⛵"],diggingEmoji:"🗡️",foundEmojis:["💎","🪙","👑"]}},{id:5,name:"Volcano Peak",emoji:"🌋",theme:{background:"from-red-500 via-orange-500 to-yellow-500",accent:"from-red-600 to-orange-600",cardBg:"from-red-500/20 to-orange-500/20",unlockGradient:"from-red-500 to-orange-500"},difficulty:"HARD",difficultyRange:{min:100,max:1/0},questionDifficulty:["hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:50,gemChance:.5,gemBonus:25,speedBonus:15,perfectBonus:200,treasurePiece:"👑",completionCoins:150},description:"The ultimate challenge! Can you conquer the volcano?",unlockRequirement:{island:4,treasurePiece:!0},visualElements:{bgEmojis:["🔥","🌋","💥","⚡","🔴"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🏆"]}}],Fe={SHOVELS_PER_ISLAND:3,QUESTIONS_PER_ISLAND:3,SPEED_BONUS_THRESHOLD:5,MIN_CORRECT_FOR_TREASURE:2,FINAL_TREASURE_REWARD:200,FINAL_TREASURE_TITLE:"Treasure Master",DIGGING_ANIMATION_DURATION:1500,REWARD_DISPLAY_DURATION:2e3,TRANSITION_DURATION:500,STORAGE_KEYS:{PROGRESS:"treasureHunt_progress",STATS:"treasureHunt_stats",UNLOCKED_ISLANDS:"treasureHunt_unlocked",COMPLETED_ISLANDS:"treasureHunt_completed",TREASURE_PIECES:"treasureHunt_pieces"},SOUNDS:{DIG:"/sounds/dig.mp3",TREASURE_FOUND:"/sounds/treasure.mp3",GEM_FOUND:"/sounds/gem.mp3",WRONG:"/sounds/wrong.mp3",ISLAND_COMPLETE:"/sounds/islandcomplete.mp3",ISLAND_UNLOCK:"/sounds/unlock.mp3",FINAL_TREASURE:"/sounds/victory.mp3",TICK:"/sounds/tick.mp3",SHOVEL_BREAK:"/sounds/break.mp3"}},nn=e=>Vn.find(t=>t.id===e),fg=(e,t)=>{const r=nn(e);if(!r.unlockRequirement)return!0;const s=t[r.unlockRequirement.island];return s&&s.treasurePiece},mg=(e,t)=>{const r={0:["Keep trying! You'll get it! 💪","Don't give up! Adventure awaits! 🌟","Practice makes perfect! 🎯"],1:["Good effort! Almost there! 🌈","Nice try! Keep going! ⭐","You're learning fast! 🚀"],2:["Awesome! You found treasure! 🏆","Great job, explorer! 🎉","You're amazing! ✨"],3:["PERFECT! You're a champion! 👑","INCREDIBLE! Master explorer! 🌟","LEGENDARY performance! 🏆"]},s=r[e]||r[0];return s[Math.floor(Math.random()*s.length)]},hg=e=>Vn.map(t=>{var r;return{id:t.id,piece:t.rewards.treasurePiece,collected:((r=e[t.id])==null?void 0:r.treasurePiece)||!1}});function pg({islands:e,islandProgress:t,onSelectIsland:r,onBack:s,soundOn:a,setSoundOn:i,totalStats:o}){const[l,u]=d.useState(!1),c=hg(t),f=c.filter(m=>m.collected).length,p=Math.round(f/e.length*100);return d.useEffect(()=>(document.body.style.position="fixed",document.body.style.overflow="hidden",document.body.style.width="100%",document.body.style.height="100%",()=>{document.body.style.position="",document.body.style.overflow="",document.body.style.width="",document.body.style.height=""}),[]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 overflow-hidden flex flex-col",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:"absolute top-10 cloud-drift",style:{animationDelay:"0s"},children:n.jsx("div",{className:"text-6xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-12 cloud-drift",style:{animationDelay:"7s",animationDuration:"25s"},children:n.jsx("div",{className:"text-5xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-10 right-12",children:n.jsx("div",{className:"text-6xl pulse-animation opacity-80",children:"☀️"})}),n.jsx("div",{className:"absolute top-16 left-20 float-animation opacity-60",children:n.jsx("div",{className:"text-2xl",children:"🦜"})})]}),n.jsxs("div",{className:"relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:s,className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅"})}),n.jsx("div",{className:"glass-card rounded-2xl px-3 py-2 shadow-lg",children:n.jsxs("div",{className:"text-white font-bold text-center",children:[n.jsx("div",{className:"text-[10px] opacity-90",children:"TREASURE HUNT"}),n.jsx("div",{className:"text-sm",children:"🏝️ Island Explorer 🏝️"})]})}),n.jsx("button",{onClick:()=>i(!a),className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:a?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 shadow-xl mt-2",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white font-bold text-sm",children:"Adventure Progress"}),n.jsxs("span",{className:"text-white font-bold text-sm",children:[p,"%"]})]}),n.jsx("div",{className:"w-full h-2.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000",style:{width:`${p}%`}})}),n.jsx("button",{onClick:()=>u(!0),className:"mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{children:"🏆"}),n.jsxs("span",{children:["Treasure Pieces: ",f,"/5"]}),n.jsx("span",{children:"🏆"})]})})]})]}),n.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-4",children:n.jsxs("div",{className:"w-full max-w-md",children:[n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.slice(0,4).map(m=>{const w=t[m.id],x=w==null?void 0:w.unlocked,N=w==null?void 0:w.treasurePiece,C=w==null?void 0:w.perfectScore;return n.jsxs("button",{onClick:()=>r(m.id),disabled:!x,className:`relative aspect-square rounded-2xl transition-all ${x?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${x?m.theme.background:"from-gray-400 to-gray-500"}`,children:x&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]})}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:m.id})}),C&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${x?"bounce-animation":""}`,children:x?m.emoji:"❓"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:m.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${x?"bg-white/30":"bg-black/30"} text-white`,children:m.difficulty}),N&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:m.rewards.treasurePiece}),(w==null?void 0:w.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[w.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},m.id)})}),n.jsx("div",{className:"flex justify-center mt-3",children:e.slice(4,5).map(m=>{const w=t[m.id],x=w==null?void 0:w.unlocked,N=w==null?void 0:w.treasurePiece,C=w==null?void 0:w.perfectScore;return n.jsxs("button",{onClick:()=>r(m.id),disabled:!x,className:`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${x?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsxs("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${x?m.theme.background:"from-gray-400 to-gray-500"}`,children:[x&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse"})]}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:m.id})}),C&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${x?"bounce-animation":""}`,children:x?m.emoji:"👑"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:m.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${x?"bg-white/30":"bg-black/30"} text-white`,children:m.difficulty}),N&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:m.rewards.treasurePiece}),(w==null?void 0:w.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[w.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},m.id)})})]})}),n.jsx("div",{className:"relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+3rem)]",children:n.jsx("div",{className:"bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💰"}),n.jsx("div",{className:"text-yellow-300 font-black text-lg",children:o.totalCoinsEarned}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Total Coins"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💎"}),n.jsx("div",{className:"text-cyan-300 font-black text-lg",children:o.totalGemsFound}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Gems Found"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"📝"}),n.jsxs("div",{className:"text-green-300 font-black text-lg",children:[o.totalCorrectAnswers,"/",o.totalQuestionsAnswered]}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Correct"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl",children:[n.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-6",children:"🏆 Treasure Collection 🏆"}),n.jsx("div",{className:"flex justify-center gap-4 mb-6",children:c.map((m,w)=>n.jsx("div",{className:`text-5xl ${m.collected?"":"opacity-30 grayscale"}`,children:m.collected?m.piece:"❓"},m.id))}),n.jsx("div",{className:"text-center text-white mb-6",children:f===5?n.jsxs("div",{children:[n.jsx("p",{className:"text-lg font-bold mb-2",children:"🎉 COMPLETE! 🎉"}),n.jsx("p",{className:"text-sm opacity-90",children:"You're a true Treasure Master!"})]}):n.jsx("p",{className:"text-sm opacity-90",children:"Collect all 5 pieces to unlock the final treasure!"})}),n.jsx("button",{onClick:()=>u(!1),className:"w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors",children:"Close"})]})})]})}function xg({island:e,progress:t,onStart:r,onClose:s,soundOn:a}){const[i,o]=d.useState(!1);d.useEffect(()=>{o(!0)},[]);const l=(t==null?void 0:t.attempts)>0,u=t==null?void 0:t.treasurePiece;t==null||t.perfectScore;const c=(t==null?void 0:t.bestScore)||0,f=()=>{if(a){const m=new Audio("/sounds/start.mp3");m.volume=.5,m.play().catch(()=>{})}r()},p=m=>{const w=Math.floor(m/60),x=m%60;return`${w}:${x.toString().padStart(2,"0")}`};return n.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:`relative w-full max-w-sm bg-gradient-to-br ${e.theme.background} rounded-2xl shadow-2xl ${i?"slide-up":""}`,children:[n.jsx("div",{className:"relative p-4 pb-2",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-2 pulse-animation",children:e.emoji}),n.jsx("h2",{className:"text-2xl font-black text-white",children:e.name}),n.jsx("div",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2",children:n.jsxs("span",{className:"text-white font-bold text-sm",children:["Level ",e.id," • ",e.difficulty]})})]})}),n.jsxs("div",{className:"px-4 py-3 space-y-2",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Time"}),n.jsx("div",{className:"text-white font-bold",children:p(e.timeLimit)})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Questions"}),n.jsx("div",{className:"text-white font-bold",children:Fe.QUESTIONS_PER_ISLAND})]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:e.rewards.treasurePiece}),n.jsx("span",{className:"text-white font-medium",children:"To Win"})]}),n.jsxs("span",{className:"text-white font-bold",children:[e.requiredCorrect,"/3 Correct"]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:[n.jsx("div",{className:"text-white font-bold text-sm mb-2",children:"Rewards"}),n.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💰"}),n.jsx("div",{className:"text-white/70 text-xs",children:e.rewards.perCorrectAnswer})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💎"}),n.jsxs("div",{className:"text-white/70 text-xs",children:[Math.round(e.rewards.gemChance*100),"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"⚡"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.speedBonus]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"🏆"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.perfectBonus]})]})]})]}),l&&n.jsx("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((m,w)=>n.jsx("span",{className:"text-lg",children:w<c?"⭐":"☆"},w))}),n.jsxs("div",{className:"text-white text-sm",children:[n.jsxs("span",{className:"font-bold",children:[c,"/3"]})," • ",t.attempts," tries"]}),u&&n.jsx("div",{className:"text-2xl",children:e.rewards.treasurePiece})]})})]}),n.jsxs("div",{className:"p-4 pt-2 space-y-2",children:[n.jsx("button",{onClick:f,className:"w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("span",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏴‍☠️"}),n.jsx("span",{children:l?"Play Again":"Start Adventure"}),n.jsx("span",{className:"text-xl",children:"🏴‍☠️"})]})}),n.jsx("button",{onClick:s,className:"w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors",children:"Back to Map"})]})]})]})}function gg({shovelsRemaining:e,showBreak:t=!1}){const[r,s]=d.useState(!1),[a,i]=d.useState(e),o=3;return d.useEffect(()=>{e<a&&(s(!0),setTimeout(()=>s(!1),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"inline-block",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"glass-badge rounded-xl px-4 py-2 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-gray-800 font-bold text-xs",children:"Shovels:"}),n.jsx("div",{className:"flex gap-2",children:[...Array(o)].map((l,u)=>{const c=u<e,f=r&&u===e;return n.jsxs("div",{className:"relative w-10 h-10 flex items-center justify-center",children:[n.jsx("div",{className:`
                    text-3xl transition-all duration-300
                    ${c?"shovel-pulse":""}
                    ${f?"shovel-break":""}
                    ${!c&&!f?"opacity-30 grayscale":""}
                  `,children:c||f?"⛏️":"🪦"}),f&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 40 40",children:[n.jsx("path",{d:"M20,10 L18,20 L22,30",stroke:"#ff4444",strokeWidth:"2",fill:"none",opacity:"0.8",className:"shovel-crack"}),n.jsx("path",{d:"M15,15 L20,20 L25,18",stroke:"#ff4444",strokeWidth:"1.5",fill:"none",opacity:"0.6",className:"shovel-crack",style:{animationDelay:"0.1s"}})]})}),n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[n.jsx("span",{className:"absolute top-0 left-1/2 text-xs shovel-fall",children:"💔"}),n.jsx("span",{className:"absolute top-1/2 left-0 text-xs shovel-fall",style:{animationDelay:"0.2s"},children:"✨"}),n.jsx("span",{className:"absolute top-1/2 right-0 text-xs shovel-fall",style:{animationDelay:"0.3s"},children:"💥"})]})]}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:`text-xs font-bold ${c?"text-blue-600":"text-white/30"}`,children:u+1})})]},u)})}),e===0&&n.jsx("span",{className:"text-red-400 text-sm font-bold animate-pulse ml-2",children:"No shovels left!"}),e===1&&n.jsx("span",{className:"text-red-500 text-sm font-bold ml-2",children:"Last chance!"})]})})]})}function vg({island:e,foundGem:t,onComplete:r}){const[s,a]=d.useState("digging"),[i,o]=d.useState(!1),[l,u]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(f=>setTimeout(f,800)),a("revealing"),o(!0),t&&(await new Promise(f=>setTimeout(f,400)),u(!0)),await new Promise(f=>setTimeout(f,1e3)),a("complete"),await new Promise(f=>setTimeout(f,300)),r()})()},[t,r]),n.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),s==="digging"&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-8xl dig-animation",children:e.visualElements.diggingEmoji}),[...Array(8)].map((c,f)=>n.jsx("div",{className:"dirt-particle text-4xl",style:{"--fly-x":`${(Math.random()-.5)*200}px`,"--fly-y":`${-Math.random()*150-50}px`,left:"50%",top:"60%",animationDelay:`${f*.1}s`},children:"🟫"},f)),n.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2",children:n.jsx("div",{className:"text-6xl opacity-50",children:"💨"})})]}),s==="revealing"&&n.jsxs("div",{className:"relative",children:[i&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect"})}),n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"text-7xl treasure-reveal treasure-float",children:"💰"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{left:"-30px"},children:"🪙"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{right:"-30px",animationDelay:"0.5s"},children:"🪙"}),n.jsx("div",{className:"absolute text-4xl coin-spin",style:{top:"-30px",animationDelay:"1s"},children:"🪙"})]}),[...Array(6)].map((c,f)=>n.jsx("div",{className:"absolute text-3xl star-burst",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) rotate(${f*60}deg) translateY(-40px)`,animationDelay:`${f*.1}s`},children:"⭐"},f))]}),l&&n.jsxs("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-6xl gem-sparkle",children:"💎"}),n.jsx("div",{className:"absolute -top-2 -left-2 text-2xl animate-pulse",children:"✨"}),n.jsx("div",{className:"absolute -top-2 -right-2 text-2xl animate-pulse",style:{animationDelay:"0.3s"},children:"✨"}),n.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse",style:{animationDelay:"0.6s"},children:"✨"})]}),n.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("span",{className:"text-cyan-300 font-black text-lg drop-shadow-lg",children:"RARE GEM!"})})]}),n.jsx("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2 text-center",children:n.jsx("div",{className:"text-white font-black text-2xl drop-shadow-lg",children:t?"AMAZING FIND!":"TREASURE FOUND!"})})]}),s==="complete"&&n.jsx("div",{className:"relative opacity-0 transition-opacity duration-300",children:n.jsx("div",{className:"text-7xl",children:"✅"})})]})}function yg({island:e,question:t,questionNumber:r,totalQuestions:s,shovelsRemaining:a,timeRemaining:i,coinsEarned:o,gemsFound:l,onAnswer:u,onQuit:c,soundOn:f,setSoundOn:p}){const[m,w]=d.useState(null),[x,N]=d.useState(!1),[C,g]=d.useState(!1),[h,y]=d.useState(!1),[E,j]=d.useState(!1),[P,S]=d.useState(!1),[v,b]=d.useState(!1),k=d.useRef(null);d.useEffect(()=>{w(null),N(!1),g(!1),y(!1),j(!1),b(!1)},[t]);const T=Y=>{const U=Math.floor(Y/60),O=Y%60;return`${U}:${O.toString().padStart(2,"0")}`},F=()=>i<=10?"critical":i<=30?"warning":"normal",q=Y=>{if(v||x)return;w(Y),b(!0);const U=Y===t.correctIndex;g(U),setTimeout(()=>{if(N(!0),f)if(U){const O=new Audio("/sounds/dig.mp3");O.volume=.5,O.play().catch(()=>{})}else{const O=new Audio("/sounds/wrong.mp3");O.volume=.5,O.play().catch(()=>{})}U&&(y(!0),Math.random()<e.rewards.gemChance&&setTimeout(()=>{if(j(!0),f){const R=new Audio("/sounds/gem.mp3");R.volume=.6,R.play().catch(()=>{})}},800)),setTimeout(()=>{u(Y)},U?2e3:1500)},300)},Z=F();return n.jsxs("div",{className:`min-h-screen bg-gradient-to-br ${e.theme.background} relative overflow-hidden`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.visualElements.bgEmojis.map((Y,U)=>n.jsx("div",{className:"absolute text-7xl opacity-10 float-animation",style:{top:`${20+U*15}%`,left:`${10+U*18}%`,animationDelay:`${U*.5}s`,animationDuration:`${3+U}s`},children:Y},U))}),n.jsxs("div",{className:"relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:()=>S(!0),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅️"})}),n.jsx("div",{className:"glass-card rounded-xl px-3 py-1.5 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xl",children:e.emoji}),n.jsx("span",{className:"text-gray-800 font-bold text-sm",children:e.name})]})}),n.jsx("button",{onClick:()=>p(!f),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:f?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 shadow-xl mb-3",children:[n.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-xl font-black ${Z==="critical"?"text-red-600 time-pulse-critical":Z==="warning"?"text-orange-600":"text-gray-800"}`,children:T(i)}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Time"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-xl font-black text-gray-800",children:[r,"/",s]}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Question"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-orange-600",children:o}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Coins"}),x&&C&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-orange-600 font-bold text-xs coin-float",children:["+",e.rewards.perCorrectAnswer]})})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-blue-600",children:l}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Gems"}),E&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:"text-blue-600 text-xl gem-sparkle",children:"💎"})})]})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar",style:{width:`${(r-1)/s*100}%`}})})})]}),n.jsx("div",{className:"flex justify-center mb-3 pt-2",children:n.jsx(gg,{shovelsRemaining:a,showBreak:x&&!C})})]}),n.jsxs("div",{className:"px-3 pt-8 slide-in",children:[n.jsxs("div",{ref:k,className:`glass-card rounded-2xl shadow-xl p-4 mb-4 ${x&&!C?"wrong-shake":""}`,children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wider",children:["Question ",r]})}),n.jsx("h2",{className:"text-lg font-bold text-center text-gray-800 leading-relaxed",children:t.prompt})]}),n.jsx("div",{className:"space-y-2.5",children:t.options.map((Y,U)=>{const O=["A","B","C","D"],R=m===U,_=U===t.correctIndex;let z="glass-card option-card",A="border border-gray-800/20";return x&&(_?(z+=" correct-pulse",A="border-2 border-green-500 bg-green-400/20"):R&&!C&&(z+=" wrong-shake",A="border-2 border-red-500 bg-red-400/20"),z+=" disabled"),n.jsx("button",{onClick:()=>q(U),disabled:v,className:`w-full p-3 rounded-xl shadow-lg ${z} ${A}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${U===0?"from-blue-400 to-blue-500":U===1?"from-green-400 to-green-500":U===2?"from-yellow-400 to-yellow-500":"from-purple-400 to-purple-500"} text-white font-bold text-lg flex items-center justify-center shadow-md`,children:O[U]}),n.jsx("span",{className:"flex-1 text-left font-medium text-gray-800 text-sm",children:Y}),x&&_&&n.jsx("span",{className:"text-2xl",children:"✅"}),x&&R&&!C&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},U)})}),x&&n.jsx("div",{className:"mt-3 text-center slide-in",children:n.jsx("p",{className:"text-base font-bold text-gray-800",children:C?`Great job! Let's dig for treasure! ${e.visualElements.diggingEmoji}`:"Oops! Your shovel broke! Try the next question! 💪"})})]}),h&&n.jsx(vg,{island:e,foundGem:E,onComplete:()=>y(!1)}),P&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🗺️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the Island?"}),n.jsx("p",{className:"text-white/70",children:"Your progress won't be saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>S(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:c,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Leave Island"})]})]})})]})}function bg({island:e,session:t,earnedTreasure:r,onRetry:s,onContinue:a,soundOn:i}){const[o,l]=d.useState(0),[u,c]=d.useState(!1),[f,p]=d.useState(!1),m=t.correctAnswers===Fe.QUESTIONS_PER_ISLAND,w=mg(t.correctAnswers,e.id);return d.useEffect(()=>{const x=t.coinsEarned,N=2e3,C=30,g=x/C;let h=0;const y=setInterval(()=>{h+=g,h>=x?(l(x),clearInterval(y),r&&setTimeout(()=>c(!0),500),setTimeout(()=>p(!0),r?1500:500)):l(Math.floor(h))},N/C);return()=>clearInterval(y)},[t.coinsEarned,r]),n.jsxs("div",{className:`fixed inset-0 bg-gradient-to-br ${e.theme.background} overflow-hidden flex flex-col`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:m&&[...Array(10)].map((x,N)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,fontSize:`${20+Math.random()*20}px`},children:["🎉","⭐","🎊","✨"][Math.floor(Math.random()*4)]},N))}),n.jsxs("div",{className:"relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4",children:[n.jsxs("div",{className:"mb-3 text-center slide-up",children:[n.jsx("h1",{className:"text-2xl font-black text-white mb-2",children:r?"TREASURE FOUND!":"ISLAND COMPLETE!"}),n.jsx("div",{className:"text-5xl bounce-animation",children:r?e.rewards.treasurePiece:"🏝️"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up",style:{animationDelay:"0.2s",background:"rgba(46, 46, 32, 0.25)"},children:[n.jsxs("div",{className:"text-center mb-2",children:[n.jsxs("div",{className:"text-3xl font-black text-white mb-1",children:[t.correctAnswers,"/",Fe.QUESTIONS_PER_ISLAND]}),n.jsx("div",{className:"text-white/80 font-medium",children:"Questions Correct"})]}),f&&n.jsx("div",{className:"flex justify-center gap-2 mb-2",children:[...Array(3)].map((x,N)=>n.jsx("div",{className:`text-3xl ${N<t.correctAnswers?"star-pop":""}`,style:{animationDelay:`${N*.2}s`},children:N<t.correctAnswers?"⭐":"☆"},N))}),u&&r&&n.jsxs("div",{className:"text-center mb-2",children:[n.jsx("div",{className:"text-5xl treasure-shine mb-1",children:e.rewards.treasurePiece}),n.jsx("div",{className:"text-white font-bold text-lg",children:"Treasure Piece Earned!"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-3xl font-black text-yellow-300",children:o}),n.jsx("div",{className:"text-white/70 text-sm",children:"Coins Earned"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:"💎"}),n.jsx("div",{className:"text-3xl font-black text-cyan-300",children:t.gemsFound}),n.jsx("div",{className:"text-white/70 text-sm",children:"Gems Found"})]})]}),n.jsx("div",{className:"text-center p-4 bg-white/10 rounded-1xl",children:n.jsx("p",{className:"text-white font-medium text-lg",children:w})}),m&&n.jsx("div",{className:"mt-4 text-center",children:n.jsx("div",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",children:n.jsx("span",{className:"text-white font-black text-lg",children:"💯 PERFECT SCORE! 💯"})})})]}),n.jsxs("div",{className:"space-y-3 w-full max-w-md slide-up",style:{animationDelay:"0.4s"},children:[!r&&n.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🔄"}),n.jsx("span",{children:"Try Again"})]})}),n.jsx("button",{onClick:a,className:"w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🗺️"}),n.jsx("span",{children:"Back to Map"})]})})]})]})]})}function wg({totalStats:e,onContinue:t,soundOn:r}){const[s,a]=d.useState(!1),[i,o]=d.useState(!1),[l,u]=d.useState(!1),[c,f]=d.useState(!1),[p,m]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(x=>setTimeout(x,500)),a(!0),await new Promise(x=>setTimeout(x,1e3)),o(!0),m(!0),await new Promise(x=>setTimeout(x,800)),u(!0),await new Promise(x=>setTimeout(x,1e3)),f(!0)})()},[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),p&&n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(15)].map((w,x)=>n.jsx("div",{className:"absolute firework",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animationDelay:`${Math.random()*2}s`,fontSize:`${40+Math.random()*40}px`},children:["✨","⭐","💫","🌟"][Math.floor(Math.random()*4)]},x))}),n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((w,x)=>n.jsx("div",{className:"absolute coin-rain",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`,fontSize:`${20+Math.random()*20}px`},children:["🪙","💰","💎"][Math.floor(Math.random()*3)]},x))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"LEGENDARY!"}),n.jsx("div",{className:"text-8xl bounce-animation",children:"👑"})]}),s&&n.jsxs("div",{className:`relative mb-8 ${s?"chest-appear":""}`,children:[n.jsx("div",{className:`text-[150px] ${i?"chest-open":""}`,children:"📦"}),i&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:Vn.map((w,x)=>n.jsx("div",{className:"absolute text-6xl float-animation treasure-glow",style:{transform:`rotate(${x*72}deg) translateY(-100px)`,animationDelay:`${x*.2}s`},children:w.rewards.treasurePiece},w.id))})]}),l&&n.jsxs("div",{className:"glass-card rounded-3xl p-6 max-w-md w-full mb-6",children:[n.jsx("h2",{className:"text-2xl font-black text-white text-center mb-6",children:"🏆 FINAL TREASURE UNLOCKED! 🏆"}),n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-2",children:"💰"}),n.jsx("div",{className:"text-4xl font-black text-white",children:Fe.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/90 font-medium",children:"Bonus Coins!"})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🏝️"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Islands"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🧩"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Treasures"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💰"}),n.jsx("div",{className:"text-2xl font-black text-yellow-300",children:e.totalCoinsEarned+Fe.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Coins"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💎"}),n.jsx("div",{className:"text-2xl font-black text-cyan-300",children:e.totalGemsFound}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Gems"})]})]}),c&&n.jsxs("div",{className:"text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🏆"}),n.jsx("div",{className:"text-xl font-black text-white title-shine",children:Fe.FINAL_TREASURE_TITLE}),n.jsx("div",{className:"text-white/90 text-sm mt-1",children:"New Title Unlocked!"})]})]}),l&&n.jsx("button",{onClick:t,className:"w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎉"}),n.jsx("span",{children:"Complete Adventure"}),n.jsx("span",{className:"text-2xl",children:"🎉"})]})}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(10)].map((w,x)=>n.jsx("div",{className:"absolute text-2xl sparkle-animation",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`},children:"✨"},x))})]})]})}function jg({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,addCoins:i,addXp:o,setSoundOn:l}=Kl(),[u,c]=d.useState("map"),[f,p]=d.useState(null),[m,w]=d.useState([]),[x,N]=d.useState(()=>{const R=localStorage.getItem(Fe.STORAGE_KEYS.PROGRESS);if(R)try{return JSON.parse(R)}catch(_){console.error("Failed to load progress:",_)}return Vn.reduce((_,z)=>(_[z.id]={unlocked:z.id===1,completed:!1,treasurePiece:!1,perfectScore:!1,bestScore:0,attempts:0},_),{})}),[C,g]=d.useState({islandId:null,questions:[],currentQuestionIndex:0,shovelsRemaining:Fe.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:300,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:null}),[h,y]=d.useState(()=>{const R=localStorage.getItem(Fe.STORAGE_KEYS.STATS);if(R)try{return JSON.parse(R)}catch(_){console.error("Failed to load stats:",_)}return{totalCoinsEarned:0,totalGemsFound:0,totalTreasurePieces:0,totalQuestionsAnswered:0,totalCorrectAnswers:0,islandsCompleted:0,gameCompleted:!1}}),E=d.useRef(null),j=d.useRef(null);d.useEffect(()=>(P(),()=>{E.current&&clearInterval(E.current)}),[]),d.useEffect(()=>{localStorage.setItem(Fe.STORAGE_KEYS.PROGRESS,JSON.stringify(x))},[x]),d.useEffect(()=>{localStorage.setItem(Fe.STORAGE_KEYS.STATS,JSON.stringify(h))},[h]),d.useEffect(()=>(u==="playing"&&C.timeRemaining>0?E.current=setInterval(()=>{g(R=>{const _=R.timeRemaining-1;return _<=0?(T(),{...R,timeRemaining:0}):(_===30&&a&&U(Fe.SOUNDS.TICK,.6),{...R,timeRemaining:_})})},1e3):E.current&&clearInterval(E.current),()=>{E.current&&clearInterval(E.current)}),[u,C.timeRemaining,a]);const P=async()=>{try{const _=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:z}=ir.parse(_,{header:!0,skipEmptyLines:!0,transformHeader:L=>L.trim().toLowerCase()}),A=z.map((L,I)=>{var Q;const V=[L.option1,L.option2,L.option3,L.option4].map(M=>(M||"").trim()).filter(Boolean);if(V.length<4)return null;let re={a:0,b:1,c:2,d:3}[(Q=L.answer)==null?void 0:Q.toLowerCase()];return re===void 0&&(re=V.findIndex(M=>M.toLowerCase()===(L.answer||"").toLowerCase())),re===-1&&(re=0),{id:L.id||`q_${I}`,prompt:(L.question||"").trim(),options:V,correctIndex:re,category:(L.category||L.subject||"general").trim(),difficulty:(L.difficulty||"medium").toLowerCase()}}).filter(Boolean);w(A)}catch(R){console.error("Failed to load questions:",R)}},S=R=>{const _=nn(R);if(!_||m.length===0)return[];let z=m.filter(L=>_.questionDifficulty.includes(L.difficulty));return z.length<Fe.QUESTIONS_PER_ISLAND&&(z=m),[...z].sort(()=>Math.random()-.5).slice(0,Fe.QUESTIONS_PER_ISLAND)},v=R=>{if(!fg(R,x)){a&&U("/sounds/locked.mp3",.5),O([100]);return}p(R),c("island-detail"),a&&U("/sounds/select.mp3",.5)},b=R=>{const _=nn(R),z=S(R);g({islandId:R,questions:z,currentQuestionIndex:0,shovelsRemaining:Fe.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:_.timeLimit,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:Date.now()}),j.current=Date.now(),c("playing"),a&&U("/sounds/start.mp3",.6)},k=R=>{const _=C.questions[C.currentQuestionIndex],z=R===_.correctIndex,A=(Date.now()-j.current)/1e3;g(L=>{const I={...L,questionTimes:[...L.questionTimes,A]};if(z){const V=nn(L.islandId);let ne=V.rewards.perCorrectAnswer;A<Fe.SPEED_BONUS_THRESHOLD&&(ne+=V.rewards.speedBonus),Math.random()<V.rewards.gemChance&&(ne+=V.rewards.gemBonus,I.gemsFound=L.gemsFound+1),I.correctAnswers=L.correctAnswers+1,I.coinsEarned=L.coinsEarned+ne}else I.wrongAnswers=L.wrongAnswers+1,I.shovelsRemaining=L.shovelsRemaining-1,O([200]);return I}),setTimeout(()=>{const L=C.currentQuestionIndex+1;C.shovelsRemaining===0&&!z||L>=Fe.QUESTIONS_PER_ISLAND?F():(g(I=>({...I,currentQuestionIndex:L})),j.current=Date.now())},z?2e3:1500)},T=()=>{F()},F=()=>{const R=nn(C.islandId),_=C.correctAnswers>=R.requiredCorrect,z=C.correctAnswers===Fe.QUESTIONS_PER_ISLAND;let A=C.coinsEarned;z&&(A+=R.rewards.perfectBonus),_&&(A+=R.rewards.completionCoins),N(I=>{const V={...I},ne=V[C.islandId];if(ne.completed=!0,ne.attempts+=1,_&&!ne.treasurePiece){ne.treasurePiece=!0;const re=Vn.find(Q=>Q.id===C.islandId+1);re&&V[re.id]&&(V[re.id].unlocked=!0,a&&setTimeout(()=>U(Fe.SOUNDS.ISLAND_UNLOCK,.7),2e3))}return z&&(ne.perfectScore=!0),ne.bestScore=Math.max(ne.bestScore||0,C.correctAnswers),V}),y(I=>({...I,totalCoinsEarned:I.totalCoinsEarned+A,totalGemsFound:I.totalGemsFound+C.gemsFound,totalTreasurePieces:I.totalTreasurePieces+(_&&!x[C.islandId].treasurePiece?1:0),totalQuestionsAnswered:I.totalQuestionsAnswered+(C.correctAnswers+C.wrongAnswers),totalCorrectAnswers:I.totalCorrectAnswers+C.correctAnswers,islandsCompleted:I.islandsCompleted+(x[C.islandId].completed?0:1)})),i(A),o(C.correctAnswers),g(I=>({...I,coinsEarned:A})),a&&U(_?Fe.SOUNDS.TREASURE_FOUND:Fe.SOUNDS.ISLAND_COMPLETE,.7),Vn.every(I=>{var V;return((V=x[I.id])==null?void 0:V.treasurePiece)===!0})&&!h.gameCompleted?(y(I=>({...I,gameCompleted:!0})),setTimeout(()=>{c("final-treasure"),a&&U(Fe.SOUNDS.FINAL_TREASURE,.8)},3e3)):c("reward")},q=()=>{b(C.islandId)},Z=()=>{c("map"),p(null)},Y=()=>{i(Fe.FINAL_TREASURE_REWARD),o(10),y(R=>({...R,totalCoinsEarned:R.totalCoinsEarned+Fe.FINAL_TREASURE_REWARD})),c("map")},U=(R,_=.5)=>{try{const z=new Audio(R);z.volume=_,z.play()}catch(z){console.error("Failed to play sound:",z)}},O=R=>{navigator.vibrate&&navigator.vibrate(R)};switch(d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),u){case"map":return n.jsx(pg,{islands:Vn,islandProgress:x,onSelectIsland:v,onBack:e,soundOn:a,setSoundOn:l,totalStats:h});case"island-detail":return n.jsx(xg,{island:nn(f),progress:x[f],onStart:()=>b(f),onClose:()=>c("map"),soundOn:a});case"playing":return n.jsx(yg,{island:nn(C.islandId),question:C.questions[C.currentQuestionIndex],questionNumber:C.currentQuestionIndex+1,totalQuestions:Fe.QUESTIONS_PER_ISLAND,shovelsRemaining:C.shovelsRemaining,timeRemaining:C.timeRemaining,coinsEarned:C.coinsEarned,gemsFound:C.gemsFound,onAnswer:k,onQuit:()=>c("map"),soundOn:a,setSoundOn:l});case"reward":return n.jsx(bg,{island:nn(C.islandId),session:C,earnedTreasure:C.correctAnswers>=nn(C.islandId).requiredCorrect,onRetry:q,onContinue:Z,soundOn:a});case"final-treasure":return n.jsx(wg,{totalStats:h,onContinue:Y,soundOn:a});default:return null}}const Ng=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],gm=Ng.slice(0,6),Vi=360/gm.length;function kg({onModeSelect:e,onNavigateHome:t}){return n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("header",{className:"flex items-center mb-8",children:n.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),n.jsxs("div",{className:"space-y-8",children:[n.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[gm.map((r,s)=>{const a=s*Vi,i=a+Vi,o=Vi>180?1:0,l=Math.PI*a/180,u=Math.PI*i/180,c=50+40*Math.cos(l),f=50-40*Math.sin(l),p=50+40*Math.cos(u),m=50-40*Math.sin(u);return n.jsx("path",{d:`M50,50 L${c},${f} A40,40 0 ${o} 0 ${p},${m} Z`,fill:r.color,stroke:"white",strokeWidth:"0.5"},s)}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),n.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),n.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),n.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),n.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),n.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),n.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsx("div",{className:"text-2xl mb-2",children:"💀"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),n.jsxs("button",{onClick:()=>e("treasureHunt"),className:"aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 opacity-20",children:[n.jsx("div",{className:"absolute top-2 right-2 text-4xl animate-pulse",children:"🏝️"}),n.jsx("div",{className:"absolute bottom-2 left-2 text-3xl animate-bounce",style:{animationDelay:"0.5s"},children:"⛏️"}),n.jsx("div",{className:"absolute top-1/2 right-4 text-2xl animate-pulse",style:{animationDelay:"1s"},children:"💎"})]}),n.jsx("div",{className:"text-2xl mb-2 relative z-10",children:"🏴‍☠️"}),n.jsx("h4",{className:"text-lg font-black text-white relative z-10",children:"TREASURE HUNT"}),n.jsx("div",{className:"absolute bottom-2 right-2",children:n.jsx("span",{className:"text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold",children:"NEW!"})})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📱"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function Sg(){const[e,t]=d.useState(null),r=Xe(),s=o=>{o==="classic"?t("classic"):o==="survival"?t("survival"):o==="treasureHunt"&&t("treasureHunt")},a=()=>{r("/")},i=()=>{t(null)};return e==="classic"?n.jsx(og,{onBack:i}):e==="survival"?n.jsx(ug,{onBack:i}):e==="treasureHunt"?n.jsx(jg,{onBack:i}):n.jsx(kg,{onModeSelect:s,onNavigateHome:a})}const Cg=({session:e,mode:t,category:r,difficulty:s,timerConfig:a,onComplete:i,onQuit:o})=>{const[l,u]=d.useState(0),[c,f]=d.useState([]),[p,m]=d.useState([]),[w,x]=d.useState([]),[N,C]=d.useState(!1),[g,h]=d.useState(null),[y,E]=d.useState(Date.now()),[j,P]=d.useState(!1),[S,v]=d.useState(!1),[b,k]=d.useState({}),[T,F]=d.useState({}),[q,Z]=d.useState([]);d.useState(!0);const[Y,U]=d.useState([]),[O,R]=d.useState(0),[_,z]=d.useState(0),[A,L]=d.useState(!1),[I,V]=d.useState(!1),[ne,re]=d.useState(""),[Q,M]=d.useState(!1),[G,D]=d.useState(!1),[$,K]=d.useState(!0),[X,ee]=d.useState(!1),[J,te]=d.useState(0),[H,B]=d.useState(0),[se,me]=d.useState(0),[je,pe]=d.useState(null),[Ee,Le]=d.useState(0),Pe=d.useRef(null),he=d.useRef(null),ue=t==="practice",xe=c[l],it=ie=>{try{const ce=new Audio(ie);ce.volume=.6,ce.play()}catch{console.log("Sound not available:",ie)}},tn=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],_e=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:tn,Ne=_e[l]||_e[0]||tn[0],Ue=_e.length;d.useEffect(()=>{_e.length>0&&(f(new Array(_e.length).fill(null)),m(new Array(_e.length).fill(!1)),Z(new Array(_e.length).fill(!1)),x(new Array(_e.length).fill((a==null?void 0:a.seconds)||45)))},[_e.length,a==null?void 0:a.seconds]);const gn=()=>{if(j){re("Once per quiz"),setTimeout(()=>re(""),1e3);return}if(xe!==null){re("Already answered"),setTimeout(()=>re(""),1e3);return}if(!Ne)return;const ce=[0,1,2,3].filter(ve=>ve!==Ne.answerIndex).sort(()=>Math.random()-.5).slice(0,2);k({...b,[l]:ce}),P(!0)},or=()=>{if(S){re("Once per quiz"),setTimeout(()=>re(""),1e3);return}if(xe!==null){re("Already answered"),setTimeout(()=>re(""),1e3);return}if(!Ne)return;const ie=Ne.answerIndex,ce=[0,0,0,0],ve=40+Math.floor(Math.random()*31);ce[ie]=ve;let ze=100-ve;const Re=[0,1,2,3].filter(Ie=>Ie!==ie);for(let Ie=0;Ie<Re.length-1;Ie++){const et=Math.min(ze-(Re.length-1-Ie),ze/2),Bs=Math.floor(Math.random()*(et+1));ce[Re[Ie]]=Bs,ze-=Bs}ce[Re[Re.length-1]]=ze,F({...T,[l]:ce}),v(!0)},Br=d.useCallback((ie,ce)=>{if(!Ne||ue&&q[l]||b[l]&&b[l].includes(ie))return;const ve=[...c];ve[l]=c[l]===ie?null:ie,f(ve),E(Date.now()),ve[l]!==null&&(K(!1),clearInterval(he.current));const ze=ve[l]===Ne.answerIndex;if(ze){const Re=se+1;if(me(Re),R(Ie=>Ie+1),z(0),ue){te(et=>et+1);const Ie=10;B(et=>et+Ie),it("/sounds/correct.mp3"),setTimeout(()=>it("/sounds/coin.mp3"),500),D(!0),setTimeout(()=>D(!1),2e3),pe({type:"correct",stars:1,coins:10}),setTimeout(()=>pe(null),2e3)}}else ve[l]!==null&&(me(0),R(0),z(Re=>Re+1),ue&&(l===0&&Y.length,it("/sounds/wrong.mp3")));if(U(Re=>[...Re.slice(-2),ze]),ve[l]!==null&&p[l]){const Re=[...p];Re[l]=!1,m(Re)}ue&&ve[l]!==null&&(M(!0),Z(Re=>{const Ie=[...Re];return Ie[l]=!0,Ie}),setTimeout(()=>{const Re=document.querySelector(".main-scrollable-container");if(Re){const Ie=Re.scrollHeight,et=Re.clientHeight;Ie>et&&Re.scrollTo({top:Ie-et,behavior:"smooth"})}},300)),!ue&&ve[l]!==null&&(clearTimeout(Pe.current),Pe.current=setTimeout(()=>{l<Ue-1?fe():(L(!0),C(!0))},5e3))},[Ne,ue,q,l,c,p,Ue,se,b,Y,O]),ae=()=>{E(Date.now()),l>0&&(clearInterval(he.current),K(!1),u(ie=>ie-1),M(!1),ue&&c[l-1]!==null&&setTimeout(()=>M(!0),100))},fe=()=>{if(E(Date.now()),clearInterval(he.current),xe===null){const ie=[...p];ie[l]=!0,m(ie),me(0)}K(!1),M(!1),l<Ue-1?(u(ie=>ie+1),ue&&c[l+1]!==null?setTimeout(()=>M(!0),100):setTimeout(()=>K(!0),100)):L(!0)},Ae=()=>{E(Date.now());const ie=[...p];ie[l]=!0,m(ie),me(0),fe()},Se=()=>{const ie=_e.reduce((ce,ve,ze)=>ce+(c[ze]===ve.answerIndex?1:0),0);if(ue)i&&i({questions:_e,answers:c,skipped:p,correct:ie,total:Ue,mode:t,category:r,difficulty:s,earnedStars:J,earnedCoins:H,finalStreak:se});else{const ce=ie*10;Le(ce),ee(!0),setTimeout(()=>{it("/sounds/coin.mp3"),D(!0),setTimeout(()=>D(!1),3e3)},1e3)}},We=()=>{i&&i({questions:_e,answers:c,skipped:p,correct:_e.reduce((ie,ce,ve)=>ie+(c[ve]===ce.answerIndex?1:0),0),total:Ue,mode:t,category:r,difficulty:s,earnedStars:0,earnedCoins:Ee,finalStreak:se})};d.useEffect(()=>{if(!(N||g!==null||A||!$||c[l]!==null))return he.current=setInterval(()=>{x(ie=>{const ce=[...ie],ve=ce[l];return ve<=1?(clearInterval(he.current),l===Ue-1?(Date.now()-y>=5e3&&L(!0),ce):(h(l),ce)):(ce[l]=ve-1,ce)})},1e3),()=>clearInterval(he.current)},[N,g,l,A,Ue,$,c,y]),d.useEffect(()=>{c[l]===null&&!A&&!g?K(!0):K(!1)},[l,c,A,g]);const ye=ie=>{const ce=Math.floor(ie/60),ve=ie%60;return`${ce}:${ve.toString().padStart(2,"0")}`},de=(l+1)/_e.length*100,le=c.filter(ie=>ie!==null).length,be=p.filter(Boolean).length,Ce=w[l]||0,ge=_e.reduce((ie,ce,ve)=>ie+(c[ve]===ce.answerIndex?1:0),0);return n.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[je&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",je.coins," Coins!"]})}),G&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((ie,ce)=>n.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${ce*150}ms`,animationDuration:"2s"},children:"🪙"},ce))}),n.jsxs("div",{className:`main-scrollable-container flex-1 flex flex-col ${ue&&xe!==null?"overflow-y-auto":"overflow-hidden"}`,children:[n.jsxs("div",{className:"bg-gray-900 flex-shrink-0",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-800 shadow-lg",children:[n.jsxs("button",{onClick:()=>V(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"font-medium",children:"Back"})]}),n.jsx("div",{className:"flex-1"}),n.jsxs("div",{className:"flex items-center gap-2",children:[ue&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),n.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:H})]}),n.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),n.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:se})]})]}),n.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${Ce<=10?"bg-red-600/20 text-red-400 animate-pulse":Ce<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:ye(Ce)})]})]}),n.jsxs("div",{className:"px-4 pb-1 bg-gray-900",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",l+1," of ",Ue]}),n.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(de),"% Complete"]})]}),n.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${de}%`}})}),n.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:Ue}).map((ie,ce)=>n.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${ce===l?"bg-white scale-125":c[ce]!==null?"bg-green-500":p[ce]?"bg-yellow-500":"bg-gray-600"}`},ce))}),n.jsx("div",{className:"text-center mt-4",children:n.jsx("span",{className:"text-xs text-gray-500",children:Ne.category})})]})]}),n.jsx("div",{className:`px-4 flex flex-col ${ue&&xe!==null?"pb-36":"flex-1 justify-between pb-[180px]"}`,children:n.jsxs("div",{className:"flex-1 flex flex-col justify-center max-h-full",children:[n.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-6 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[n.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),n.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",l+1]}),n.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:Ne.prompt}),Ne.difficulty&&n.jsx("div",{className:"mt-3 inline-block",children:n.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${Ne.difficulty==="easy"?"bg-green-500/20 text-green-300":Ne.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Ne.difficulty.toUpperCase()})})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:Ne.options.map((ie,ce)=>{const ve=xe===ce,ze=ce===Ne.answerIndex,Re=ue&&xe!==null&&Q,Ie=b[l]&&b[l].includes(ce);let et="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";Ie?et+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(et+="cursor-pointer ",Re?ve&&ze?et+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":ve&&!ze?et+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!ve&&ze?et+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":et+="bg-gray-700 border-gray-600 text-gray-400":ve?et+="bg-gray-600 border-gray-500 text-white":et+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const Bs=["🅰️","🅱️","🅲️","🅳️"];return n.jsx("button",{onClick:Nm=>Br(ce,Nm),disabled:ue&&q[l],className:et,children:n.jsxs("div",{className:"flex items-center gap-2 w-full",children:[n.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:Bs[ce]}),n.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:ie}),T[l]&&T[l][ce]>0&&!Ie&&n.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[T[l][ce],"%"]}),Re&&ve&&ze&&!Ie&&n.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),Re&&ve&&!ze&&!Ie&&n.jsx("div",{className:"text-lg",children:"😔"}),Re&&!ve&&ze&&!Ie&&n.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},ce)})}),ue&&Q&&xe!==null&&n.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:n.jsxs("div",{className:"flex gap-3",children:[n.jsx("div",{className:"text-lg flex-shrink-0",children:xe===Ne.answerIndex?"🎊":"💡"}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h4",{className:`font-semibold mb-3 text-sm ${xe===Ne.answerIndex?"text-green-400":"text-blue-400"}`,children:xe===Ne.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),Ne.explanation&&n.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:Ne.explanation})]})]})})]})})]}),n.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-50",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 backdrop-blur-xl"}),n.jsxs("div",{className:"relative p-4 pb-8",children:[!ue&&n.jsxs("div",{className:"flex justify-center gap-3 mb-4",children:[n.jsxs("button",{onClick:gn,disabled:xe!==null,className:`${j?"bg-white/5 text-gray-500":"bg-gradient-to-r from-orange-500 to-orange-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"⚡"}),"50:50"]}),n.jsxs("button",{onClick:or,disabled:xe!==null,className:`${S?"bg-white/5 text-gray-500":"bg-gradient-to-r from-purple-500 to-purple-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"👥"}),"Ask Friends"]})]}),n.jsxs("div",{className:"flex gap-2 mb-3",children:[n.jsx("button",{onClick:ae,disabled:l===0,className:`flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                disabled:opacity-30 disabled:cursor-not-allowed
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                hover:bg-white/15 text-white shadow-xl`,children:"Previous"}),n.jsx("button",{onClick:Ae,disabled:xe!==null,className:`flex-1 py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95 shadow-xl ${xe!==null?"bg-white/5 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600"}`,children:"Skip"}),n.jsx("button",{onClick:fe,className:`flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:from-blue-600 hover:to-indigo-600
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                text-white shadow-xl`,children:l===Ue-1?"Finish":"Next"})]}),n.jsxs("button",{onClick:()=>L(!0),className:`w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-600
              py-4 rounded-2xl font-bold text-white transition-all transform active:scale-[0.98]
              shadow-2xl shadow-green-500/25 relative overflow-hidden group`,children:[n.jsx("div",{className:"absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"}),n.jsx("span",{className:"relative",children:"Submit Quiz"})]})]})]}),X&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quiz Complete!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Here's how you performed"}),n.jsxs("div",{className:"bg-gray-700/50 rounded-2xl p-4 mb-6 space-y-3",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Questions Attempted:"}),n.jsxs("span",{className:"text-white font-semibold",children:[le," / ",Ue]})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Correct Answers:"}),n.jsx("span",{className:"text-green-400 font-semibold",children:ge})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Accuracy:"}),n.jsxs("span",{className:"text-blue-400 font-semibold",children:[le>0?Math.round(ge/le*100):0,"%"]})]}),n.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-yellow-300 flex items-center gap-1",children:"🪙 Coins Earned:"}),n.jsx("span",{className:"text-yellow-400 font-bold text-lg",children:Ee})]})})]}),n.jsx("button",{onClick:We,className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors",children:"Continue"})]})}),I&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>V(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),n.jsx("button",{onClick:o,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),A&&!X&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),n.jsxs("p",{className:"text-gray-400 mb-4",children:[le," of ",Ue," answered • ",be," skipped"]}),ue&&n.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:n.jsxs("div",{className:"flex justify-center gap-6",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:J}),n.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:H}),n.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{L(!1),h(null),E(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),n.jsx("button",{onClick:ie=>{ie.preventDefault(),ie.stopPropagation(),console.log("Submit button clicked"),Se()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),g===l&&!A&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),n.jsx("button",{onClick:()=>{h(null),E(Date.now()),l<_e.length-1?fe():L(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:l<_e.length-1?"Continue":"See Results"})]})}),ne&&n.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:ne}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},Kr=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Eg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),Rg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Tg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Pg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),_g=()=>n.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Ag=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[],returnPath:null,fromQuest:!1},onRetake:t=()=>{},onReview:r=()=>{},onNavigate:s=(c,f)=>{},isRetake:a=!1,isPractice:i=!1,player:o={level:1,coins:0,combo:0,energy:5},categories:l=[],addCoins:u=()=>{}})=>{const[c,f]=d.useState(o.coins),p=d.useRef(null),[m,w]=d.useState(null),[x]=Lt("/sounds/coin.mp3",{volume:.75}),[N,C]=d.useState(!1),[g,h]=d.useState(!1),[y,E]=d.useState(0),[j,P]=d.useState(!1),[S,v]=d.useState(!1),b=()=>{if(console.log("QuizResults handleBack:",{fromQuest:e.fromQuest,returnPath:e.returnPath}),e.fromQuest)s("/profile/quests",{state:{questCompleted:!0,questType:"dailyQuizzes",increment:1}});else{const D=e.returnPath||"/";s(D)}},{correct:k,total:T,category:F,categorySlug:q,difficulty:Z,mode:Y,elapsedMs:U}=e,O=T?Math.round(k/T*100):0,R=O===100,_=O>=80,z=Math.floor(U/1e3),A=T>0?Math.floor(z/T):0,L=i?e.earnedCoins||0:Math.round(k*5*(R?1.5:_?1.2:1)),I=Kr.find(D=>D.slug===F)||Kr[0],ne=(()=>R?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:O>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:O>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:O>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:O>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{!m&&!N&&f(o.coins)},[o.coins,m,N]),d.useEffect(()=>{e.coinsProcessed||L>0&&p.current&&setTimeout(()=>{if(p.current.getBoundingClientRect(),x)try{x()}catch(D){console.error("Error playing coin sound:",D)}else console.warn("Coin sound not loaded");w({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(L,10),amount:L}),C(!0),e.coinsProcessed=!0},500)},[]),d.useEffect(()=>{document.documentElement.scrollIntoView({behavior:"smooth",block:"start"}),(R||_)&&(h(!0),setTimeout(()=>h(!1),3e3));let D=0;const $=k/20,K=setInterval(()=>{D+=$,D>=k?(E(k),clearInterval(K)):E(Math.floor(D))},50);return()=>clearInterval(K)},[k,R,_]);const re=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:k,total:T}],Q=()=>{try{const D=localStorage.getItem("qp_recent");if(D)return JSON.parse(D).slice(0,10).map(K=>K.slug||K.cat).filter(K=>K&&K!==e.categorySlug)}catch(D){console.error("Error reading recent categories:",D)}return[]},M=()=>{const D=q||F,$=Z||"medium",K=Q(),X=(l||Kr||[]).filter(te=>te.slug!==D&&!K.slice(0,3).includes(te.slug)),J=(()=>{if(X.length===0){const te=(l||Kr||[]).filter(H=>H.slug!==D);return te[Math.floor(Math.random()*te.length)]||(l||Kr)[0]}return X[Math.floor(Math.random()*X.length)]})();if(O<60)return i?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${D}`,{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}})},{icon:J.icon,title:J.name,desc:"Fresh start with new topic",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>r()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${D}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:$!=="easy"?"🎯":"🔄",title:$!=="easy"?"Easy Mode":"Try Again",desc:$!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>$!=="easy"?s(`/quiz/${D}`,{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}):t()},{icon:J.icon,title:J.name,desc:"Try something different",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{mode:"quiz",difficulty:"easy",count:10,timer:{type:"per_q",seconds:45}})}];if(O>=80)return $==="hard"&&O>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${D}`,{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}})},{icon:J.icon,title:`${J.name} Challenge`,desc:"Hard mode, new topic",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}})}]:[{icon:$==="hard"?"🔥":"🎯",title:$==="hard"?"Perfect Score Challenge":"Hard Mode",desc:$==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${D}`,{mode:"quiz",difficulty:"hard",count:$==="hard"?10:20,timer:{type:"per_q",seconds:30}})},{icon:J.icon,title:J.name,desc:"Master new topics",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{mode:"quiz",difficulty:$,count:10,timer:{type:"per_q",seconds:45}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${D}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}})}];{const te=O<70;return[{icon:te?"📚":"🎯",title:te?"Practice More":"Try Again",desc:te?"Improve accuracy":"Beat your score",color:te?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:te?()=>s(`/quiz/${D}`,{mode:"practice",difficulty:$,count:10,timer:{type:"off",seconds:0}}):()=>t()},{icon:J.icon,title:J.name,desc:"Explore new topics",color:J.gradient,action:()=>s(`/quiz/${J.slug}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:45}})},{icon:$==="easy"?"⬆️":"💪",title:$==="easy"?"Medium Difficulty":"More Questions",desc:$==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${D}`,{mode:"quiz",difficulty:$==="easy"?"medium":$,count:$==="easy"?10:20,timer:{type:"per_q",seconds:45}})}]}},G=ft.useMemo(()=>M(),[O,i,e.categorySlug,e.difficulty]);return n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4",children:[m&&n.jsx(yi,{startRect:m.startRect,targetRef:p,count:m.count,onDone:()=>{m.amount>0&&!S&&(console.log("[QuizResults] Adding coins once:",m.amount),u(m.amount),v(!0),f(o.coins+m.amount)),w(null)}}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),g&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:n.jsx("div",{className:"text-8xl animate-bounce",children:R?"🎉":"⭐"})}),n.jsxs("div",{className:"flex justify-between items-center mb-6",children:[n.jsxs("button",{onClick:b,className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center gap-2",children:[n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"text-sm font-medium",children:"Back"})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",o.level]}),n.jsxs("button",{ref:p,onClick:()=>P(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[c," 🪙"]})]})]}),n.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${ne.color}`,children:[n.jsx("span",{className:"text-2xl",children:ne.emoji}),n.jsx("span",{className:"font-semibold",children:ne.text})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[y,"/",T]}),n.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[n.jsx("span",{className:"text-xl",children:I.icon}),n.jsx("span",{children:I.name})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[O,"%"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[A,"s"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:L>0?`+${L}`:"0"}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),n.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Pg,{}),n.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),o.combo>0&&n.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[n.jsx(_g,{}),o.combo," streak"]})]}),n.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:re.map((D,$)=>n.jsx("div",{className:`flex-1 rounded-t transition-all ${$===re.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${D.score/D.total*100}%`,minHeight:"4px"}},$))}),n.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("button",{onClick:r,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[n.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Review"}),n.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),n.jsx(Tg,{})]})]}),n.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Try Again"}),n.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),n.jsx(Rg,{})]})})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),G.map((D,$)=>n.jsx("button",{onClick:D.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${D.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:n.jsx("span",{className:"text-xl",children:D.icon})}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium text-sm",children:D.title}),n.jsx("div",{className:"text-xs text-white/40",children:D.desc})]})]}),n.jsx(Eg,{})]})},$))]}),n.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:n.jsx("button",{onClick:()=>s("/profile/history",{replace:!0}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),j&&n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:D=>{D.target===D.currentTarget&&P(!1)},children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:D=>D.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[o.coins," Coins"]})]})]}),n.jsx("button",{onClick:()=>P(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-o.coins%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${o.coins%100}%`}})})]}),n.jsx("button",{onClick:()=>{P(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})},Lg=({questions:e,answers:t,skipped:r,onBack:s,onRetake:a,fromHistory:i=!1})=>{const o=Xe(),l=()=>{i?o("/profile/history",{replace:!0}):s?s():o(-1)},u=e.reduce((p,m,w)=>p+(t[w]===m.answerIndex?1:0),0),c=(r==null?void 0:r.filter(Boolean).length)||0,f=e.length-u-c;return n.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),n.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),n.jsx("div",{className:"w-16"})," "]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[n.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),n.jsx("div",{className:"text-lg font-bold text-green-400",children:u})]}),n.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),n.jsx("div",{className:"text-lg font-bold text-red-400",children:f})]}),n.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),n.jsx("div",{className:"text-lg font-bold text-amber-400",children:c})]})]}),n.jsx("ol",{className:"space-y-4",children:e.map((p,m)=>{const w=t[m],x=!w&&w!==0,N=w===p.answerIndex;return n.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",m+1,". ",p.prompt]}),p.category&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",p.category," • Difficulty: ",p.difficulty||"Medium"]})]}),n.jsx("div",{className:"ml-2",children:x?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):N?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:p.options.map((C,g)=>{const h=w===g,y=g===p.answerIndex;let E="w-full text-left px-3 py-2 rounded-xl border transition-all ";return y?E+="bg-green-600/20 border-green-500/50 text-green-300":h&&!y?E+="bg-red-600/20 border-red-500/50 text-red-300":E+="bg-base-bg/40 border-base-border text-base-muted",n.jsxs("div",{className:E,children:[n.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][g],"."]}),C,y&&n.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),h&&!y&&n.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},g)})}),p.explanation&&n.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[n.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),n.jsx("div",{className:"text-sm text-base-muted",children:p.explanation})]})]},p.id||m)})}),n.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[n.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),a&&n.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:a,children:"Retake Quiz"})]})]})},Ig="qp_resume",Sd="qp_mistakes",Cd="qp_stats",Ed="qp_lastset",Rd="qp_recent",Td="qp_review_snapshot",Mg=50,Jr=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Ra=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),zg=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),vm=e=>{const t=e.slice();for(let r=t.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[t[r],t[s]]=[t[s],t[r]]}return t},Dg=(e,t,r)=>Math.max(t,Math.min(r,e)),Zr=(e,t)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}};async function Fg(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const r=await t.text(),{data:s}=ir.parse(r,{header:!0,skipEmptyLines:!0,transformHeader:i=>String(i).trim().toLowerCase()}),a={a:0,b:1,c:2,d:3};return s.map((i,o)=>{var m;const l=[i.option1,i.option2,i.option3,i.option4].map(w=>(w??"").trim());if(l.some(w=>!w))return null;let u=-1;const c=String(i.answer??"").trim();if(a[c.toLowerCase()]!==void 0)u=a[c.toLowerCase()];else{const w=l.findIndex(x=>x.toLowerCase()===c.toLowerCase());u=w>=0?w:0}const f=String(i.category??i.subject??"General Knowledge").trim(),p=String(i.difficulty??"medium").toLowerCase().trim();return{id:((m=i.id)==null?void 0:m.trim())||`q_${o}`,category:f,difficulty:p,prompt:String(i.question??"").trim(),options:l,answerIndex:u,explanation:String(i.explanation??"").trim()}}).filter(Boolean)}function Og(e,{categorySlug:t,difficulty:r,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",r),console.log("count:",s),console.log("Total questions available:",e.length);const i=t==="mixed"?()=>!0:f=>Ra(f.category)===t,o=r?f=>(f.difficulty||"medium")===r:()=>!0,l=e.filter(f=>i(f)&&o(f));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(f=>`"${f.category}" -> "${Ra(f.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(f=>Ra(f.category)))]),{questions:[],poolSize:0};const c=zg(l,Math.min(s,l.length)).map(f=>{const p=vm([0,1,2,3]),m=p.map(x=>f.options[x]),w=p.indexOf(f.answerIndex);return{...f,options:m,answerIndex:w}});return console.log("Final questions:",c.length),{questions:c,poolSize:l.length}}function $g(){const e=Xe(),{category:t}=Pp(),r=Tt(),{energy:s,useEnergy:a,player:i,addCoins:o,addXP:l,updateDailyStreak:u}=xn(),c=new URLSearchParams(r.search),f=c.get("review")==="1",p=c.get("retake")==="1",m=r.state||{},w=m.mode||"quiz",x=String(m.difficulty||"medium").toLowerCase(),N=m.returnPath||null,C=m.fromQuest||!1,g=Dg(Number(m.count||10),1,50),h=m.timer||{type:"per_q",seconds:45};m.resume,m.daily,m.source;const y=p||!!m.retake,E=!!m.fromHistory,j=w==="practice";console.log("Quiz Component - Mode Detection:",{routerState:m,mode:w,isPractice:j,location:r.pathname,state:r.state});const[P,S]=d.useState([]),[v,b]=d.useState(!0),[k,T]=d.useState(""),[F,q]=d.useState({questions:[]}),[Z,Y]=d.useState("quiz"),[U,O]=d.useState(null),[R,_]=d.useState(null),[z,A]=d.useState(0);d.useEffect(()=>{let Q=!0;return(async()=>{try{const M=await Fg();if(!Q)return;S(M)}catch(M){console.error(M),T("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{b(!1)}})(),()=>{Q=!1}},[]),d.useEffect(()=>{if(v||k||f||P.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",w),console.log("Difficulty:",x),console.log("Count:",g);const Q=Og(P,{categorySlug:t,difficulty:x,count:g});if(Q.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(P.map(M=>Ra(M.category)))].slice(0,10)),T(`No questions found for "${Jr(t)}" with difficulty "${x}"`);return}console.log("Session built with",Q.questions.length,"questions"),q(Q),_(Date.now()),A(0),Y("quiz")},[P,t,w,x,g,r.state,r.search]),d.useEffect(()=>{if(Z!=="quiz"||!R)return;const Q=setInterval(()=>{A(Date.now()-R)},1e3);return()=>clearInterval(Q)},[Z,R]);const L=d.useCallback(Q=>{if(console.log("Quiz completed - Mode:",w,"isPractice:",j,"Results:",Q),!Q||!Q.questions){console.error("Invalid results object:",Q);return}const M=Q.questions.filter((D,$)=>Q.answers[$]!==null&&Q.answers[$]!==D.answerIndex).map(D=>D.id);try{const D=Zr(Sd,[]),$=Array.from(new Set([...M,...D]));localStorage.setItem(Sd,JSON.stringify($))}catch(D){console.error("Error saving mistakes:",D)}try{const D=Zr(Cd,{sessions:[]});D.sessions.push({cat:Jr(t),mode:j?"practice":"quiz",total:Q.total,correct:Q.correct,skipped:Q.skipped.filter(Boolean).length,ms:z,timestamp:Date.now(),earnedXP:j?0:Q.correct*10,earnedCoins:j?0:Q.correct*5}),localStorage.setItem(Cd,JSON.stringify(D))}catch(D){console.error("Error saving stats:",D)}const G={ts:Date.now(),slug:t,categoryLabel:Jr(t),mode:j?"practice":"quiz",difficulty:x,total:Q.total,timer:j?null:h,ms:z,attempted:Q.answers.filter(D=>D!==null).length,correct:Q.correct,questions:Q.questions,answers:Q.answers,skipped:Q.skipped,isPractice:j};try{localStorage.setItem(Ed,JSON.stringify(G)),localStorage.setItem(Td,JSON.stringify({questions:Q.questions,answers:Q.answers,skipped:Q.skipped}));const D=Zr(Rd,[]),K=[{id:G.ts,ts:G.ts,cat:G.categoryLabel,slug:t,mode:j?"Practice":"Quiz",total:Q.total,correct:Q.correct,ms:z,snapshot:G},...D].slice(0,Mg);localStorage.setItem(Rd,JSON.stringify(K))}catch(D){console.error("Error saving snapshot:",D)}if(localStorage.removeItem(Ig),j&&Q.earnedCoins?Q.earnedCoins:!j&&Q.correct>0&&Q.correct*5,!j&&Q.correct>0){const D=Q.correct*10;l(D)}u(),console.log("Setting review snapshot with:",{returnPath:N||"/",fromQuest:C||!1}),O({...Q,category:Jr(t),categorySlug:t,difficulty:x,mode:j?"practice":"quiz",elapsedMs:z,isPractice:j,hasTimer:!j,earnedXP:j?0:Q.correct*10,earnedCoins:j?Q.earnedCoins||0:Q.correct*5,returnPath:N||"/",fromQuest:C||!1}),Y("results")},[t,w,h,z,j,N,C]),I=d.useCallback(()=>{N?e(N,{replace:!0}):E?e("/profile/history",{replace:!0,state:null}):e("/")},[E,e,N]),V=d.useCallback(()=>{console.log("Retake requested - Mode:",w,"isPractice:",j);const Q=Zr(Ed,null);if(!Q||Q.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:j?"practice":"quiz",difficulty:x,count:g,timer:j?null:h,retake:!0}});return}const M=Q.questions.map(G=>{const D=vm([0,1,2,3]);return{...G,options:D.map($=>G.options[$]),answerIndex:D.indexOf(G.answerIndex)}});q({questions:M,poolSize:M.length}),_(Date.now()),A(0),Y("quiz"),window.scrollTo(0,0)},[t,w,x,g,h,e,j]),ne=d.useCallback((Q=null)=>{if(Q)O(Q);else if(!U){const M=Zr(Td,null);M&&O({questions:M.questions||[],answers:M.answers||[],skipped:M.skipped||[]})}Y("review")},[U]),re=d.useCallback(()=>{E?e("/profile/history",{replace:!0}):Y("results")},[E,e]);return v?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):k?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-red-400",children:k})}):(console.log("Render - Current view:",Z,"Session questions:",F.questions.length,"Mode:",w,"isPractice:",j),n.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:n.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[Z==="quiz"&&F.questions.length>0&&n.jsx(Cg,{session:F,mode:j?"practice":"quiz",category:Jr(t),difficulty:x,timerConfig:j?null:h,onComplete:L,onQuit:I,isPractice:j}),Z==="results"&&U&&n.jsx(Ag,{results:U,onRetake:V,onReview:()=>ne(U),isRetake:y,isPractice:j,player:i,categories:hm,addCoins:o,onNavigate:(Q,M)=>{console.log("onNavigate called with:",Q,M),M!=null&&M.state?e(Q,{state:M.state,replace:M.replace||!1}):e(Q)}}),Z==="review"&&U&&n.jsx(Lg,{questions:U.questions||[],answers:U.answers||[],skipped:U.skipped||[],onBack:re,onRetake:V,fromHistory:E,isPractice:j})]})}))}const wn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Un=360/wn.length,Bg=42,Xi=3e3,Pd=10,_d=260,Ug="cubic-bezier(.15,.7,.1,1)",qg="cubic-bezier(.2,.7,.2,1)",bn=5,Qg=5,Yg=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function Hg({muted:e=!1,size:t=18}){return n.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&n.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function Wg({q:e,locked:t,onPick:r,result:s}){if(!e)return null;const a=[e.option1,e.option2,e.option3,e.option4];return n.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[n.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),n.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),a.map((i,o)=>{const l=s&&i===e.answer,u=s&&s.pick===i&&i!==e.answer;return n.jsx("button",{disabled:t||!!s,onClick:()=>r(i),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",u?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:i},o)}),s&&n.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?n.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):n.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",n.jsx("b",{children:e.answer})]}),e.explanation&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function Gg(){const e=Xe(),[t]=Lt("/sounds/correct.mp3",{volume:.7}),[r]=Lt("/sounds/wrong.mp3",{volume:.7}),[s,a]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(bn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(bn).fill(null)}]),[i,o]=d.useState(0),[l,u]=d.useState(1),c=s.reduce((M,G)=>M+G.scores.reduce((D,$)=>D+($??0),0),0),[f,p]=d.useState(!0),m=d.useRef(null);d.useEffect(()=>{const M=new Audio("/sounds/spin.mp3");return M.loop=!0,M.volume=.7,m.current=M,()=>{try{M.pause(),M.src=""}catch{}}},[]);const w=()=>{if(f&&m.current)try{m.current.currentTime=0,m.current.play()}catch{}},x=()=>{if(m.current)try{m.current.pause(),m.current.currentTime=0}catch{}},[N,C]=d.useState(0),[g,h]=d.useState("none"),[y,E]=d.useState(!1),[j,P]=d.useState(null),[S,v]=d.useState(null),b=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[k,T]=d.useState([]);d.useEffect(()=>{(async()=>{try{const M=await fetch("/data/quiz_questions_bank.csv").then(K=>K.text()),{data:G}=ir.parse(M,{header:!0,skipEmptyLines:!0,transformHeader:K=>String(K).trim().toLowerCase()}),D={a:0,b:1,c:2,d:3},$=G.map((K,X)=>{var se;const ee=(K.question??"").trim();if(!ee)return null;const J=[K.option1,K.option2,K.option3,K.option4].map(me=>String(me??"").trim());if(J.some(me=>!me))return null;let te=String(K.answer??"").trim(),H=D[te.toLowerCase()];if(H===void 0){const me=J.findIndex(je=>je.toLowerCase()===te.toLowerCase());H=me>=0?me:0}const B=J[H];return{id:((se=K.id)==null?void 0:se.trim())||`ps_${X}`,question:ee,option1:J[0],option2:J[1],option3:J[2],option4:J[3],answer:B,explanation:String(K.explanation??"").trim(),catSlug:Yg(K.category??K.subject??"general knowledge"),difficulty:String(K.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);T($)}catch{T([])}})()},[]);const[F,q]=d.useState(null),[Z,Y]=d.useState(null),[U,O]=d.useState(!1),R=M=>(M%360+360)%360,_=M=>R(M),z=l>bn;function A(){if(s.length>=4)return;const M=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],G=M[(s.length*2+1)%M.length];a(D=>[...D,{name:`Player ${D.length+1}`,color:G,scores:Array(bn).fill(null)}])}function L(){s.length<=2||(a(M=>M.slice(0,-1)),o(M=>Math.min(M,s.length-2)))}function I(M){a(G=>G.map((D,$)=>$===i?{...D,scores:D.scores.map((K,X)=>X===l-1?M:K)}:D))}function V(){if(y||z)return;P(null),v(null),q(null),Y(null),E(!0),w();const M=Math.floor(Math.random()*wn.length),G=wn[M],D=Un*.28,$=(Math.random()*2-1)*D,K=R(N),X=180,J=M*Un+Un/2+$;let te=_(J-K-X);const H=Bg*360+te,B=N+H+Pd;h(`transform ${b?800:Xi}ms ${Ug}`),C(B);try{navigator.vibrate&&!b&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{h(`transform ${b?160:_d}ms ${qg}`),C(se=>se-Pd)},b?800:Xi),setTimeout(()=>{if(x(),E(!1),P(M),v(G.color),G.soon)return;const se=k.filter(je=>je.catSlug===G.slug&&je.difficulty==="easy"),me=se.length?se:k.filter(je=>je.catSlug===G.slug);if(me.length){const je=me[Math.floor(Math.random()*me.length)];q(je)}else q({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(b?800:Xi)+(b?160:_d)+40)}function ne(M){if(!F||Z)return;const G=M===F.answer;if(Y({correct:G,pick:M}),G){t(),O(!0),setTimeout(()=>O(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}I(Qg)}else{r();try{navigator.vibrate&&navigator.vibrate([4])}catch{}I(0)}}function re(){const M=(i+1)%s.length,G=M===0?l+1:l;o(M),u(G),P(null),v(null),q(null),Y(null)}function Q(){const M=s.map($=>$.scores.reduce((K,X)=>K+(X??0),0)),G=Math.max(...M),D=s.filter(($,K)=>M[K]===G).map($=>$.name).join(", ");alert(`${D} win${D.includes(",")?"":"s"} the pot of ${c} coins! 🎉`),e("/play")}return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[U&&n.jsx(xm,{numberOfPieces:120,recycle:!1}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),n.jsx("button",{onClick:()=>p(M=>!M),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":f?"Mute sound":"Unmute sound",title:f?"Sound on":"Sound off",children:n.jsx(Hg,{muted:!f})})]}),n.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-sm",children:["Round ",n.jsx("b",{children:Math.min(l,bn)}),"/",n.jsx("b",{children:bn})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:A,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),n.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),n.jsx("button",{onClick:L,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),n.jsxs("div",{className:"text-sm",children:["Pot: ",n.jsx("b",{className:"text-yellow-300",children:c})," 🪙"]})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[n.jsxs("colgroup",{children:[n.jsx("col",{style:{width:"42%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"13%"}})]}),n.jsx("thead",{children:n.jsxs("tr",{className:"text-base-muted",children:[n.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:bn}).map((M,G)=>n.jsxs("th",{className:"font-medium text-center",children:["R",G+1]},G)),n.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),n.jsx("tbody",{children:s.map((M,G)=>{const D=M.scores.reduce((K,X)=>K+(X??0),0),$=G===i;return n.jsxs("tr",{className:$?"bg-white/6":"",children:[n.jsx("td",{className:"py-1 pr-1",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:M.color}}),n.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:M.name,onChange:K=>a(X=>X.map((ee,J)=>J===G?{...ee,name:K.target.value}:ee))})]})}),M.scores.map((K,X)=>n.jsx("td",{className:"text-center",children:K===null?"–":K},X)),n.jsx("td",{className:"text-right pr-1 font-semibold",children:D})]},G)})})]})})]}),n.jsx("section",{className:"flex flex-col items-center",children:n.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[S&&n.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${S}33, 0 0 30px 8px ${S}44`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${N}deg)`,transition:g},"aria-label":"Category wheel",role:"group",children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[wn.map((M,G)=>{const D=G*Un,$=D+Un,K=Un>180?1:0,X=Math.PI*D/180,ee=Math.PI*$/180,J=50+50*Math.cos(X),te=50-50*Math.sin(X),H=50+50*Math.cos(ee),B=50-50*Math.sin(ee),se=j===G;return n.jsxs("g",{style:{opacity:j==null?.95:se?1:.78,filter:j!=null&&!se?"blur(0.6px)":"none"},children:[n.jsx("path",{d:`M50,50 L${J},${te} A50,50 0 ${K} 0 ${H},${B} Z`,fill:M.color,stroke:se?`${M.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:se?"1.2":"0.6"}),n.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${D+Un/2} 50 50) translate(12 0)`,children:n.jsxs("tspan",{children:[M.label,M.soon?" (soon)":""]})})]},M.slug)}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),n.jsx("button",{onClick:V,disabled:y||z,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",y||z?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),j!=null&&!y&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:n.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[n.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:wn[j].color}}),wn[j].label]})})]})}),n.jsx("section",{className:"mt-4",children:z?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),n.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",n.jsx("b",{className:"text-yellow-300",children:c})," coins."]}),n.jsx("button",{className:"btn-primary w-full",onClick:Q,children:"End match"})]}):j!=null&&wn[j].soon?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-lg font-semibold mb-1",children:wn[j].label}),n.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),n.jsx("button",{className:"btn-primary",onClick:V,disabled:y,children:"Re-spin"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",n.jsx("span",{style:{color:s[i].color},children:s[i].name})," ","| Round ",l,"/",bn]}),n.jsx(Wg,{q:F,locked:y||!F,onPick:ne,result:Z}),Z&&n.jsx("div",{className:"mt-3 flex justify-center",children:n.jsx("button",{className:"btn-primary",onClick:re,children:"Next turn"})})]})})]}),n.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const Vg=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return n.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[n.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),n.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(r=>n.jsxs("button",{onClick:()=>e(r.id,r.title),className:`rounded-3xl bg-gradient-to-br ${r.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[n.jsx("span",{className:"text-5xl",children:r.emoji}),n.jsx("span",{className:"text-white font-bold text-lg text-center",children:r.title})]},r.id))})]})},Xg=()=>{Xe();const{player:e,addCoins:t,addXP:r}=xn(),[s,a]=d.useState([]),[i,o]=d.useState(0),[l,u]=d.useState({}),[c,f]=d.useState(0),[p,m]=d.useState(5),[w,x]=d.useState(0),[N,C]=d.useState(!0),[g,h]=d.useState(null),[y,E]=d.useState(!0),[j,P]=d.useState(null),[S,v]=d.useState(""),[b,k]=d.useState(!1),[T,F]=d.useState(""),[q,Z]=d.useState(!1),[Y,U]=d.useState(!1),[O,R]=d.useState(!1),[_,z]=d.useState(!1),[A,L]=d.useState(!1),[I,V]=d.useState(!1),[ne,re]=d.useState(0),[Q,M]=d.useState(0),[G,D]=d.useState(-1),[$,K]=d.useState(-1),[X,ee]=d.useState({}),[J,te]=d.useState({}),H=d.useRef(null),B=d.useRef(null),[se]=Lt("/sounds/correct.mp3",{volume:.6}),[me]=Lt("/sounds/wrong.mp3",{volume:.6}),[je]=Lt("/sounds/coin.mp3",{volume:.75}),pe=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],Ee=()=>{a([]),o(0),u({}),f(0),m(5),x(0),C(!0),h(null),k(!1),F(""),Z(!1),U(!1),R(!1),z(!1),L(!1),V(!1),re(0),M(0),D(-1),K(-1),ee({}),te({}),P(null),v(""),Pe(null)};d.useEffect(()=>(Ee(),E(!0),()=>{document.body.classList.remove("hide-bottom-nav"),Ee(),B.current&&clearTimeout(B.current)}),[]),d.useEffect(()=>{!y&&s.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[y,s.length]),d.useEffect(()=>{!y&&s.length>0&&z(!0)},[y,s.length]);const[Le,Pe]=d.useState(null);d.useEffect(()=>{const ae=fe=>{var Ae;if(_&&!O){const Se=fe.target.closest('button[type="button"]'),We=(Ae=Se==null?void 0:Se.querySelector(".text-\\[10px\\]"))==null?void 0:Ae.textContent;We&&["Home","Play","Profile","Swipe"].includes(We)&&(fe.preventDefault(),fe.stopPropagation(),Pe({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[We]),U(!0))}};return document.addEventListener("click",ae,!0),()=>document.removeEventListener("click",ae,!0)},[_,O]),d.useEffect(()=>{const ae=H.current;if(!ae)return;let fe=!1,Ae=0,Se=null;const We=be=>{!y&&s.length>0&&be.preventDefault()},ye=be=>{Ae=be.touches[0].clientY,fe=!1},de=be=>{!y&&s.length>0&&!Y&&!q&&be.preventDefault()},le=be=>{if(fe||Y||q)return;const Ce=be.changedTouches[0].clientY,ge=Ae-Ce;if(Math.abs(ge)>30){if(fe=!0,Se&&clearTimeout(Se),ge>0&&i<s.length-1){const ie=i+1;o(ie),ae.scrollTo({top:ie*window.innerHeight,behavior:"smooth"})}else if(ge<0&&i>0){const ie=i-1;o(ie),ae.scrollTo({top:ie*window.innerHeight,behavior:"smooth"})}Se=setTimeout(()=>{fe=!1},800)}};return ae.addEventListener("touchstart",ye,{passive:!1}),ae.addEventListener("touchmove",de,{passive:!1}),ae.addEventListener("touchend",le,{passive:!1}),ae.addEventListener("wheel",We,{passive:!1}),()=>{ae.removeEventListener("touchstart",ye),ae.removeEventListener("touchmove",de),ae.removeEventListener("touchend",le),ae.removeEventListener("wheel",We),Se&&clearTimeout(Se)}},[i,s.length,y]),d.useEffect(()=>{const ae=H.current;ae&&(Y||q?(ae.style.overflow="hidden",ae.style.touchAction="none"):(ae.style.overflow="auto",ae.style.touchAction="auto"))},[Y,q]),d.useEffect(()=>{(Y||q)&&B.current&&(clearTimeout(B.current),B.current=null)},[Y,q]);const he=async ae=>{try{const Ae=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Se}=ir.parse(Ae,{header:!0,skipEmptyLines:!0}),de=Se.map((le,be)=>{var ie,ce;const Ce=[le.option1,le.option2,le.option3,le.option4].filter(Boolean),ge={A:0,B:1,C:2,D:3};return{id:le.id||`q_${be}`,prompt:le.question,options:Ce,answerIndex:ge[(ie=le.answer)==null?void 0:ie.toUpperCase()]||0,category:le.category||"General Knowledge",difficulty:((ce=le.difficulty)==null?void 0:ce.toLowerCase())||"medium",explanation:le.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(le=>le.prompt&&le.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(le=>({...le,mascot:pe[Math.floor(Math.random()*pe.length)]}));a(de),C(!1)}catch(fe){console.error("Failed to load questions:",fe),C(!1)}},ue=ae=>ae===1||ae===3||ae===7||ae===10||ae===15||ae===20||ae>20&&ae%5===0,xe=(ae,fe)=>{if(l[ae]!==void 0)return;const Ae=s.find(ye=>ye.id===ae),Se=fe===Ae.answerIndex,We=s.findIndex(ye=>ye.id===ae);if(u(ye=>({...ye,[ae]:fe})),re(ye=>ye+1),M(ye=>ye+1),Se){if(se(),f(ye=>ye+1),x(ye=>ye+10),V(!0),setTimeout(()=>{je()},300),setTimeout(()=>V(!1),2e3),it(),ue(We+1)){const ye=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];F(ye[Math.floor(Math.random()*ye.length)]),k(!0),setTimeout(()=>k(!1),2e3)}}else if(me(),f(0),L(!0),setTimeout(()=>L(!1),1500),m(ye=>{const de=Math.max(0,ye-1);return de===0&&setTimeout(()=>Z(!0),500),de}),p>1&&ue(We+1)){const ye=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];F(ye[Math.floor(Math.random()*ye.length)]),k(!0),setTimeout(()=>k(!1),2e3)}(p>1||Se)&&(B.current=setTimeout(()=>{tn()},2500))},it=()=>{const ae=document.createElement("div");ae.style.position="fixed",ae.style.inset="0",ae.style.pointerEvents="none",ae.style.zIndex="1000",document.body.appendChild(ae);const fe=["🎉","✨","⭐","🎊","🌟"];for(let Ae=0;Ae<20;Ae++){const Se=document.createElement("div");Se.textContent=fe[Math.floor(Math.random()*fe.length)],Se.style.position="fixed",Se.style.left=`${Math.random()*100}%`,Se.style.top="-50px",Se.style.fontSize="24px",Se.style.animation=`fall ${2+Math.random()*2}s ease-out`,ae.appendChild(Se)}setTimeout(()=>ae.remove(),4e3)},tn=()=>{if(!(Y||q)&&i<s.length-1){const ae=i+1,fe=document.getElementById(`question-${ae}`);fe==null||fe.scrollIntoView({behavior:"smooth"}),o(ae)}},_e=ae=>{const fe=s.findIndex(ye=>ye.id===ae);if(G>=0&&ne<5){h(`After ${5-ne} attempts`),setTimeout(()=>h(null),2e3);return}const Ae=s[fe],We=[0,1,2,3].filter(ye=>ye!==Ae.answerIndex).sort(()=>Math.random()-.5).slice(0,2);ee({...X,[ae]:We}),D(fe),re(0)},Ne=ae=>{const fe=s.findIndex(be=>be.id===ae);if($>=0&&Q<5){h(`After ${5-Q} attempts`),setTimeout(()=>h(null),2e3);return}const Se=s[fe].answerIndex,We=[0,0,0,0],ye=40+Math.floor(Math.random()*31);We[Se]=ye;let de=100-ye;const le=[0,1,2,3].filter(be=>be!==Se);for(let be=0;be<le.length-1;be++){const Ce=Math.floor(Math.random()*(de/2));We[le[be]]=Ce,de-=Ce}We[le[le.length-1]]=de,te({...J,[ae]:We}),K(fe),M(0)},Ue=(ae,fe)=>{Ee(),P(ae),v(fe),E(!1),he()},gn=()=>{Pe("/swipe"),U(!0)},or=()=>{R(!0),U(!1),document.body.classList.remove("hide-bottom-nav")},Br=()=>{const ae=Object.keys(l).filter(fe=>{const Ae=s.find(Se=>Se.id===fe);return l[fe]===(Ae==null?void 0:Ae.answerIndex)}).length;return d.useEffect(()=>{document.body.classList.add("hide-bottom-nav");const fe=setTimeout(()=>{t(w),Ee(),z(!1),R(!1),E(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(fe),document.body.classList.remove("hide-bottom-nav")}},[]),n.jsx("div",{className:"fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),n.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(l).length})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),n.jsx("div",{className:"text-2xl font-bold text-green-400",children:ae})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",w]})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),n.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(fe,Ae)=>n.jsx("span",{className:Ae<p?"":"opacity-30",children:"❤️"},Ae))})]})]})]})})};return O?n.jsx(Br,{}):y?n.jsx(Vg,{onSelect:Ue}):N?n.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading questions..."})}):n.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[n.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[n.jsx("button",{onClick:gn,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("div",{className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:w})]}),n.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🔥"}),n.jsx("span",{className:"font-bold text-orange-400",children:c})]})]}),n.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(ae,fe)=>n.jsx("span",{className:`${fe<p?"text-red-500":"text-gray-600 opacity-30"} ${A&&fe===p-1?"animate-heartLoss":""}`,children:"❤️"},fe))})]}),S&&n.jsx("div",{className:"text-center py-1",children:n.jsx("span",{className:"text-xs text-gray-400",children:S})})]}),I&&n.jsx("div",{className:"fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-yellow-500 text-white px-4 py-2 rounded-full font-bold animate-coinFloat",children:"+10 🪙"})}),n.jsx("div",{ref:H,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:s.map((ae,fe)=>n.jsx(Kg,{question:ae,index:fe,answered:l[ae.id],onAnswer:Ae=>xe(ae.id,Ae),onFiftyFifty:()=>_e(ae.id),onAudience:()=>Ne(ae.id),eliminated:X[ae.id]||[],audiencePercentages:J[ae.id],canUseFiftyFifty:G<0||ne>=5,canUseAudience:$<0||Q>=5},ae.id))}),q&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"😔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),n.jsx("button",{onClick:()=>{R(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),Y&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>U(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),n.jsx("button",{onClick:or,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),b&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:n.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:T})}),g&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:g})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},Kg=({question:e,index:t,answered:r,onAnswer:s,onFiftyFifty:a,onAudience:i,eliminated:o,audiencePercentages:l,canUseFiftyFifty:u,canUseAudience:c})=>{const f=p=>{switch(p){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return n.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[n.jsx("div",{className:"flex justify-center py-2",children:n.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),n.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[n.jsxs("div",{className:`bg-gradient-to-br ${f(e.difficulty)} p-6 rounded-3xl mb-4`,children:[n.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),n.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),n.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((p,m)=>{const w=r!==void 0,x=r===m,N=m===e.answerIndex,C=o.includes(m);let g="w-full p-4 rounded-2xl font-medium transition-all ";return C?g+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":w?N?g+="bg-green-500 text-white":x?g+="bg-red-500 text-white":g+="bg-gray-700 text-gray-400":g+="bg-gray-800 text-white hover:bg-gray-700",n.jsx("button",{onClick:()=>!w&&!C&&s(m),disabled:w||C,className:g,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][m]}),n.jsx("span",{className:"flex-1 text-left",children:p}),l&&l[m]>0&&n.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[m],"%"]}),w&&N&&n.jsx("span",{children:"✓"})]})},m)})}),!r&&n.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[n.jsx("button",{onClick:a,disabled:!u,className:`px-4 py-2 rounded-lg font-medium text-sm ${u?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),n.jsx("button",{onClick:i,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),n.jsx("div",{className:"text-center mt-3 mb-2",children:n.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),n.jsx("div",{className:"text-center mt-12 mb-4",children:n.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function Jg(){const[e]=Nx(),t=Xe();return Tt(),d.useEffect(()=>{const r=e.get("category"),s=e.get("difficulty"),a=e.get("from")==="quest",i=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports","mixed"],o=["easy","medium","hard"],l=r==="random"?i[Math.floor(Math.random()*i.length)]:r||"mixed",u=s==="random"?o[Math.floor(Math.random()*o.length)]:s||"medium";console.log("QuizPlay - fromQuest:",a),console.log("QuizPlay - returnPath will be:",a?"/quests":"/"),t(`/quiz/${l}`,{replace:!0,state:{mode:"quiz",difficulty:u,count:5,timer:{type:"per_q",seconds:45},fromQuest:a,returnPath:a?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"20px"},children:"Starting your quiz..."})}function Zg(){const e=Xe(),[t,r]=d.useState(""),{player:s,levelProgress:a}=xn(),i=()=>{try{const c=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),f=new Date().setHours(0,0,0,0);return c.sessions.filter(m=>new Date(m.timestamp).setHours(0,0,0,0)===f).reduce((m,w)=>m+(w.earnedCoins||0),0)}catch{return 0}},o={name:(s==null?void 0:s.name)||"Player",rank:23,streak:(s==null?void 0:s.currentStreak)||0,todayQuizzes:3,todayCoins:i()};d.useEffect(()=>{const c=new Date().getHours();c<12?r("Good morning"):c<17?r("Good afternoon"):r("Good evening")},[]);const l=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,u=a.required>0?a.current/a.required*100:0;return n.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-10 px-3",children:[n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("div",{children:n.jsxs("h1",{className:"text-2xl font-bold px-3",children:[t,", ",(s==null?void 0:s.name)||"Player"," 👋"]})}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-10 h-10 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:n.jsx("span",{className:"text-xl",children:"⚙️"})})]}),n.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[n.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:o.name[0]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"text-lg font-semibold",children:s.name||"Player"}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",s.level]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[s.coins," 🪙"]}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",o.rank]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[n.jsx("span",{children:"XP Progress"}),n.jsxs("span",{children:[a.current,"/",a.required]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${u}%`}})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",o.streak]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",o.todayCoins]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),n.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${l} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),n.jsxs("div",{className:"relative flex items-start justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),n.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),n.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),n.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("/profile/history"),className:`${l} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),n.jsx("div",{className:"text-3xl mb-3",children:"📊"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),n.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",o.todayQuizzes," today"]})]}),n.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${l} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),n.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),n.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${l} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[n.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),n.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),n.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${l} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),n.jsxs("div",{className:"mt-4 space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${l} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"🔥"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[o.streak," days strong"]})]})]})}),n.jsx("button",{onClick:()=>e("/profile/quests"),className:`${l} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"⚡"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:`${l} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),n.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),n.jsx("div",{className:"text-white/40",children:"→"})]})})]}),n.jsx("div",{className:"h-6"})]})}const es="🪙",ia={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},oa=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function ev(){var m,w;const e=Xe(),{player:t}=xn(),r={global:ia.global.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x),friends:ia.friends.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x),india:ia.india.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",r.friends[0]);const[s,a]=d.useState({days:2,hours:14,minutes:17}),[i,o]=d.useState("global"),l=r[i]||r.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(m=l.find(x=>x.you))==null?void 0:m.score);const u=l.find(x=>x.you),c=l.slice(0,3),f=l.slice(3);d.useEffect(()=>{const x=N=>{N.preventDefault(),e(-1)};return window.addEventListener("popstate",x),()=>{window.removeEventListener("popstate",x)}},[e]),d.useEffect(()=>{const x=setInterval(()=>{a(N=>N.minutes>0?{...N,minutes:N.minutes-1}:N.hours>0?{...N,hours:N.hours-1,minutes:59}:N.days>0?{...N,days:N.days-1,hours:23,minutes:59}:N)},6e4);return()=>clearInterval(x)},[]);const p=x=>{const N=Math.max(...l.map(g=>g.score)),C=x/N*100;return C>=90?oa[0]:C>=70?oa[1]:C>=40?oa[2]:oa[3]};return n.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-5",children:[n.jsx("button",{onClick:()=>e("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),n.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),n.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${p(u==null?void 0:u.score).color} p-4 text-center relative overflow-hidden`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:"text-2xl mb-1",children:p(u==null?void 0:u.score).icon}),n.jsxs("div",{className:"text-sm font-bold text-white",children:[p(u==null?void 0:u.score).name," League"]}),n.jsx("div",{className:"text-xs text-white/80",children:i==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),n.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:ia.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(x=>n.jsxs("button",{onClick:()=>o(x.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${i===x.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[n.jsx("div",{children:x.label}),n.jsx("div",{className:`text-[10px] ${i===x.key?"text-black/70":"text-white/60"}`,children:x.count})]},x.key))}),n.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),n.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[n.jsxs("span",{children:["Rank #",u==null?void 0:u.rank]}),n.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${u!=null&&u.trend.startsWith("+")?"bg-green-500/20 text-green-400":u!=null&&u.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:u==null?void 0:u.trend}),n.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",i==="global"?"Global":i==="friends"?"Friends":"India"]})]})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[u==null?void 0:u.score," ",es]}),n.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",u==null?void 0:u.streak," streak"]})]})]})}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),n.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),n.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),n.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),n.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),n.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[c[1]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(la,{src:c[1].avatar,fallback:c[1].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ca(c[1].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[c[1].score," ",es]})]}),c[0]&&n.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(la,{src:c[0].avatar,fallback:c[0].name,size:72}),n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx(tv,{})}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),n.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:ca(c[0].name,8)}),n.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[c[0].score," ",es]}),n.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),c[2]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(la,{src:c[2].avatar,fallback:c[2].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ca(c[2].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[c[2].score," ",es]})]})]})]})]}),f.length>0&&n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[n.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[n.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),n.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),n.jsx("ul",{className:"space-y-1.5",children:f.map((x,N)=>n.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${x.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${N*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(nv,{n:x.rank,you:x.you}),n.jsx(la,{src:x.avatar,fallback:x.name,size:36}),n.jsxs("div",{className:"flex flex-col leading-tight",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm font-semibold",children:ca(x.name,12)}),n.jsx("span",{className:"text-xs",children:x.country}),x.friend&&n.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),n.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${x.you?"text-black/70":"text-white/60"}`,children:[n.jsx("span",{children:x.handle}),n.jsxs("span",{children:["🔥",x.streak]})]})]})]}),n.jsxs("div",{className:"flex flex-col items-end",children:[n.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[n.jsx("span",{children:x.score}),n.jsx("span",{className:x.you?"opacity-90":"opacity-80",children:es})]}),n.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${x.trend.startsWith("+")?"bg-green-500/20 text-green-400":x.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:x.trend})]})]},`${i}-${x.rank}`))})]}),u&&u.rank>1&&n.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[n.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),n.jsx("div",{className:"text-xs text-white/70 mb-3",children:i==="friends"&&u.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((w=l[u.rank-2])==null?void 0:w.score)||0)-u.score+1)} more coins to reach rank #${u.rank-1}`}),!(i==="friends"&&u.rank===1)&&n.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function la({src:e,fallback:t,size:r=56}){const s=rv(t);return n.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:r,height:r},children:e?n.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):n.jsx("span",{className:"text-sm font-semibold",children:s})})}function tv(){return n.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[n.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[n.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),n.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),n.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function nv({n:e,you:t}){return n.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function ca(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function rv(e=""){var r;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((r=t[1])==null?void 0:r[0])||"")).toUpperCase()}const sv="qp_recent",av="qp_review_snapshot",Ad=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function iv(){const[e,t]=d.useState("quizzes"),[r,s]=d.useState(null),[a,i]=d.useState(!1),[o,l]=d.useState("all"),[u,c]=d.useState("all"),[f,p]=d.useState("date"),[m,w]=d.useState([]),[x,N]=d.useState(!0),C=Xe(),g=S=>{if(!S)return"00:00";const v=Math.floor(S/1e3),b=Math.floor(v/60),k=v%60;return`${String(b).padStart(2,"0")}:${String(k).padStart(2,"0")}`},h=S=>{if(!S)return"Unknown";const v=new Date(S),k=Math.floor((new Date-v)/(1e3*60*60*24));return k===0?"Today":k===1?"Yesterday":k<7?`${k} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][v.getMonth()]} ${v.getDate()}`};d.useEffect(()=>{let S=!1;N(!0);const v=T=>{try{return JSON.parse(T)}catch{return null}},b=T=>encodeURIComponent(String(T).trim().toLowerCase().replace(/\s+/g,"-")),k=T=>{var A,L,I,V;const F=Number(T.ts??T.timestamp??T.id)||Date.now(),q=Number(T.ms)||0,Z=Number(T.total)||0,Y=Number(T.correct)||0,O=String(T.mode||"").toLowerCase().includes("practice")?"practice":"quiz",R=((A=T.snapshot)==null?void 0:A.category)||((L=T.snapshot)==null?void 0:L.categoryLabel)||T.cat||T.category||"Unknown",_=((I=T.snapshot)==null?void 0:I.categoryParam)||b(R),z=String(((V=T.snapshot)==null?void 0:V.difficulty)||T.difficulty||"medium").toLowerCase();return{id:T.id??F,type:O,category:R,categoryParam:_,difficulty:z,score:Y,total:Z,accuracy:Z?Math.round(Y/Z*100):0,time:g(q),ms:q,date:h(F),timestamp:F,snapshot:T.snapshot??null,mode:T.mode||(O==="practice"?"Practice":"Quiz")}};try{const T=localStorage.getItem(sv),F=T?v(T):null,Z=(Array.isArray(F)&&F.length?F:Ad).map(k).filter(Y=>Y&&Y.timestamp).sort((Y,U)=>U.timestamp-Y.timestamp);S||w(Z)}catch(T){console.error("Error loading history:",T),S||w(Ad)}finally{S||N(!1)}return()=>{S=!0}},[]);const y=d.useMemo(()=>{const S=new Set(m.map(v=>v.category));return Array.from(S)},[m]),E=d.useMemo(()=>{let S=m.filter(v=>e==="quizzes"?v.type==="quiz":v.type==="practice");return o!=="all"&&(S=S.filter(v=>v.category===o)),u!=="all"&&(S=S.filter(v=>v.difficulty===u)),S.sort((v,b)=>f==="date"?b.timestamp-v.timestamp:f==="score"?b.accuracy-v.accuracy:f==="time"?v.ms-b.ms:0),S},[m,e,o,u,f]),j=d.useMemo(()=>{if(E.length===0)return null;const S=E.reduce((T,F)=>T+F.score,0),v=E.reduce((T,F)=>T+F.total,0),b=v?Math.round(S/v*100):0,k=E.reduce((T,F)=>T+F.ms,0);return{count:E.length,avgAccuracy:b,totalTime:g(k),bestScore:Math.max(...E.map(T=>T.accuracy))}},[E]),P=S=>S>=80?"text-green-400":S>=60?"text-blue-400":S>=40?"text-yellow-400":"text-red-400";return x?n.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading history..."})}):n.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[n.jsx("div",{className:"",children:n.jsxs("div",{className:"px-4 pt-4 pb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("button",{onClick:()=>C("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),n.jsx("button",{onClick:()=>i(!a),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:n.jsx(cv,{})})]}),n.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),n.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),n.jsxs("div",{className:"px-4 pb-20",children:[n.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:n.jsx("div",{className:"flex items-center",children:n.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(S=>n.jsxs("button",{onClick:()=>t(S.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===S.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[n.jsx("span",{className:"mr-1",children:S.icon}),S.label]},S.value))})})}),j&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[n.jsx(da,{label:"Total",value:j.count}),n.jsx(da,{label:"Avg Score",value:`${j.avgAccuracy}%`,color:P(j.avgAccuracy)}),n.jsx(da,{label:"Best Score",value:`${j.bestScore}%`,color:"text-green-400"}),n.jsx(da,{label:"Total Time",value:j.totalTime})]})}),a&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),n.jsxs("select",{value:o,onChange:S=>l(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All Categories"}),y.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),n.jsxs("select",{value:u,onChange:S=>c(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All"}),n.jsx("option",{value:"easy",children:"Easy"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"hard",children:"Hard"})]})]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),n.jsxs("select",{value:f,onChange:S=>p(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"date",children:"Date"}),n.jsx("option",{value:"score",children:"Score"}),n.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),E.length===0?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📚"}),n.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),n.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):n.jsx("div",{className:"space-y-3",children:E.map((S,v)=>n.jsx(ov,{item:S,index:v,onClick:()=>s(S)},S.id))})]}),r&&n.jsx(lv,{item:r,onClose:()=>s(null)})]})}function da({label:e,value:t,color:r="text-white"}){return n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),n.jsx("div",{className:`text-lg font-bold ${r}`,children:t})]})}function ov({item:e,index:t,onClick:r}){const s=o=>o>=80?"from-green-500/20 to-green-600/10 border-green-500/30":o>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":o>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",i=(o=>{const l=o==null?void 0:o.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return n.jsxs("div",{onClick:r,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),n.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${i.bg} ${i.text} ${i.border} border`,children:e.difficulty}),n.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),n.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[n.jsxs("span",{children:["⏱ ",e.time]}),n.jsx("span",{children:e.mode})]}),n.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function lv({item:e,onClose:t}){const r=Xe();return d.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:n.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),n.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Category"}),n.jsx("span",{className:"text-white font-medium",children:e.category})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Difficulty"}),n.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Accuracy"}),n.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-white/60",children:"Time"}),n.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&n.jsx("button",{onClick:()=>{t(),localStorage.setItem(av,JSON.stringify(e.snapshot)),r(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),n.jsx("button",{onClick:()=>{var s;t(),r(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function cv(){return n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const dv=d.createContext({});function ym(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const uv=typeof window<"u",fv=uv?d.useLayoutEffect:d.useEffect,bm=d.createContext(null);function mv(e){return typeof e=="object"&&e!==null}function hv(e){return mv(e)&&"offsetHeight"in e}const pv=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class xv extends d.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=r.offsetParent,a=hv(s)&&s.offsetWidth||0,i=this.props.sizeRef.current;i.height=r.offsetHeight||0,i.width=r.offsetWidth||0,i.top=r.offsetTop,i.left=r.offsetLeft,i.right=a-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function gv({children:e,isPresent:t,anchorX:r,root:s}){const a=d.useId(),i=d.useRef(null),o=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(pv);return d.useInsertionEffect(()=>{const{width:u,height:c,top:f,left:p,right:m}=o.current;if(t||!i.current||!u||!c)return;const w=r==="left"?`left: ${p}`:`right: ${m}`;i.current.dataset.motionPopId=a;const x=document.createElement("style");l&&(x.nonce=l);const N=s??document.head;return N.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${w}px !important;
            top: ${f}px !important;
          }
        `),()=>{N.contains(x)&&N.removeChild(x)}},[t]),n.jsx(xv,{isPresent:t,childRef:i,sizeRef:o,children:d.cloneElement(e,{ref:i})})}const vv=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:i,mode:o,anchorX:l,root:u})=>{const c=ym(yv),f=d.useId();let p=!0,m=d.useMemo(()=>(p=!1,{id:f,initial:t,isPresent:r,custom:a,onExitComplete:w=>{c.set(w,!0);for(const x of c.values())if(!x)return;s&&s()},register:w=>(c.set(w,!1),()=>c.delete(w))}),[r,c,s]);return i&&p&&(m={...m}),d.useMemo(()=>{c.forEach((w,x)=>c.set(x,!1))},[r]),d.useEffect(()=>{!r&&!c.size&&s&&s()},[r]),o==="popLayout"&&(e=n.jsx(gv,{isPresent:r,anchorX:l,root:u,children:e})),n.jsx(bm.Provider,{value:m,children:e})};function yv(){return new Map}function bv(e=!0){const t=d.useContext(bm);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:a}=t,i=d.useId();d.useEffect(()=>{if(e)return a(i)},[e]);const o=d.useCallback(()=>e&&s&&s(i),[i,s,e]);return!r&&s?[!1,o]:[!0]}const ua=e=>e.key||"";function Ld(e){const t=[];return d.Children.forEach(e,r=>{d.isValidElement(r)&&t.push(r)}),t}const Ki=({children:e,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:i="sync",propagate:o=!1,anchorX:l="left",root:u})=>{const[c,f]=bv(o),p=d.useMemo(()=>Ld(e),[e]),m=o&&!c?[]:p.map(ua),w=d.useRef(!0),x=d.useRef(p),N=ym(()=>new Map),[C,g]=d.useState(p),[h,y]=d.useState(p);fv(()=>{w.current=!1,x.current=p;for(let P=0;P<h.length;P++){const S=ua(h[P]);m.includes(S)?N.delete(S):N.get(S)!==!0&&N.set(S,!1)}},[h,m.length,m.join("-")]);const E=[];if(p!==C){let P=[...p];for(let S=0;S<h.length;S++){const v=h[S],b=ua(v);m.includes(b)||(P.splice(S,0,v),E.push(v))}return i==="wait"&&E.length&&(P=E),y(Ld(P)),g(p),null}const{forceRender:j}=d.useContext(dv);return n.jsx(n.Fragment,{children:h.map(P=>{const S=ua(P),v=o&&!c?!1:p===h||m.includes(S),b=()=>{if(N.has(S))N.set(S,!0);else return;let k=!0;N.forEach(T=>{T||(k=!1)}),k&&(j==null||j(),y(x.current),o&&(f==null||f()),s&&s())};return n.jsx(vv,{isPresent:v,initial:!w.current||r?void 0:!1,custom:t,presenceAffectsLayout:a,mode:i,root:u,onExitComplete:v?void 0:b,anchorX:l,children:P},S)})})},wv=()=>{const e=Xe(),[t,r]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const H=sessionStorage.getItem("navigationSource");H&&r(H)}},[]);const s=H=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=H)},a=()=>{e(-1)},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},{player:l,addCoins:u}=xn(),[c,f]=d.useState(4),[p,m]=d.useState((l==null?void 0:l.coins)||0),[w,x]=d.useState(4),[N,C]=d.useState(!1),[g,h]=d.useState(!1),[y,E]=d.useState(0),[j,P]=d.useState(0),[S,v]=d.useState("cycle"),[b,k]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[T,F]=d.useState([0,1,2,3]),[q,Z]=d.useState(!1),[Y,U]=d.useState(!1),[O,R]=d.useState(null),[_,z]=d.useState(null),[A,L]=d.useState(!1),[I,V]=d.useState(null),[ne,re]=d.useState(!1),Q=d.useRef(null),M=d.useRef(null),G=d.useRef(null);d.useEffect(()=>{Q.current=new Audio("/sounds/reward.mp3"),M.current=new Audio("/sounds/reward_progress.mp3"),[Q,M].forEach(H=>{var B;(B=H.current)==null||B.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const D=H=>{try{H.current&&(H.current.currentTime=0,H.current.play().catch(B=>console.log("Audio play failed:",B)))}catch(B){console.log("Sound play error:",B)}},$=(H,B)=>{if(H>c){z(B),U(!0);return}H===c&&X(H,B)},K=H=>{var se;const B=(se=G.current)==null?void 0:se.querySelector(`[data-index="${H}"]`);if(B){const me=B.getBoundingClientRect(),je=window.pageYOffset||document.documentElement.scrollTop,pe=me.top+je-window.innerHeight/2+50;window.scrollTo({top:pe,behavior:"smooth"})}},X=(H,B)=>{if(!T.includes(H)){if(B.cost>0&&p<B.cost){z(B),U(!0);return}B.cost>0&&(m(se=>se-B.cost),u(-B.cost)),D(Q),Z(!0),z(B),F(se=>[...se,H]),setTimeout(()=>{Z(!1),B.type==="coins"?(E(B.value),C(!0),setTimeout(()=>{m(se=>se+B.value),u(B.value),setTimeout(()=>{C(!1),E(0)},500)},300)):B.type==="life"?(P(B.value),h(!0),setTimeout(()=>{x(se=>se+B.value),setTimeout(()=>{h(!1),P(0)},500)},300)):(V({icon:B.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{V(null),re(!0),ee(B),B.type==="vehicle"&&v(B.value),setTimeout(()=>{re(!1)},500)},800)),setTimeout(()=>{if(c<i.length-1){const se=c+1;K(se),setTimeout(()=>{L(!0),D(M),f(se),setTimeout(()=>{L(!1)},500)},300)}},1200)},1500)}},ee=H=>{k(B=>B.find(me=>me.icon===H.icon)?B.map(me=>me.icon===H.icon?{...me,count:me.count+1}:me):[...B,{type:H.type,icon:H.icon,name:H.label,count:1}])},J=H=>30+H*100,te=()=>30+c*100;return n.jsxs("div",{className:"rewards-page",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"non-sticky-header",children:n.jsx("button",{className:"back-button",onClick:a,children:"← Back"})}),n.jsxs("div",{className:"sticky-section",children:[n.jsxs("div",{className:"header-wrapper",children:[n.jsxs("div",{className:"title-row",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"title",children:"Rewards"}),n.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),n.jsx("button",{className:"play-quiz-btn",onClick:()=>s("/play"),children:"Play Quiz"})]}),n.jsx("div",{className:"balance-row",children:n.jsx("div",{className:"balance-item",children:n.jsxs("div",{children:[n.jsx("div",{className:"balance-label",children:"Balance"}),n.jsxs("div",{className:`balance-value ${N?"animating":""}`,children:[p.toLocaleString()," 🪙",N&&n.jsxs("span",{className:"value-change",children:["+",y]})]})]})})})]}),n.jsx("div",{className:"stats-cards-container",children:n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"❤️"}),n.jsxs("div",{className:`info-value ${g?"animating":""}`,children:[w,g&&n.jsxs("span",{className:"value-change",children:["+",j]})]}),n.jsx("div",{className:"info-label",children:"Lives"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"⭐"}),n.jsx("div",{className:"info-value",children:"5"}),n.jsx("div",{className:"info-label",children:"Level"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:o[S].icon}),n.jsx("div",{className:"info-value",children:o[S].name}),n.jsx("div",{className:"info-label",children:"Vehicle"})]}),n.jsxs("div",{className:`cards-section ${ne?"animating":""}`,children:[n.jsx("div",{className:"cards-label",children:"Your Cards"}),n.jsx("div",{className:"card-grid",children:b.map((H,B)=>n.jsxs("div",{className:"card-item",onClick:()=>R(H),children:[n.jsxs("div",{className:"large-card",children:[n.jsx("div",{className:"large-card-icon",children:H.icon}),n.jsx("div",{className:"large-card-name",children:H.name})]}),H.count>1&&n.jsx("div",{className:"card-count-badge",children:H.count})]},B))})]})]})})]}),n.jsx("div",{className:"scrollable-journey",children:n.jsx("div",{className:"journey-container",ref:G,children:n.jsxs("div",{className:"journey-track",children:[n.jsx("div",{className:"curvy-road",children:n.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),n.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),n.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),n.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-c/(i.length-1)*1500})]})}),n.jsxs("div",{className:"avatar-tracker",style:{top:`${te()}px`},children:[n.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:H=>{H.target.style.display="none"}}),n.jsx("div",{className:"tracker-vehicle",children:o[S].icon})]}),n.jsx("div",{className:"rewards-list",children:i.map((H,B)=>{const se=B%2===0,me=B>c,je=T.includes(B),pe=B===c;return n.jsx("div",{className:"reward-row","data-index":B,style:{top:`${J(B)}px`},children:n.jsxs("div",{className:`reward-item ${se?"left":"right"}`,children:[n.jsxs("div",{className:`checkpoint ${pe?"current":je?"claimed":me?"locked":""}`,onClick:()=>$(B,H),children:[n.jsx("div",{className:"checkpoint-icon",children:H.icon}),n.jsx("div",{className:"checkpoint-value",children:H.label.split(" ")[0]}),H.milestone&&n.jsx("div",{className:"milestone-badge",children:"BONUS"}),me&&n.jsx("div",{className:"lock-icon",children:"🔒"})]}),n.jsxs("div",{className:"reward-info",children:[n.jsx("div",{className:"reward-name",children:H.label}),n.jsxs("div",{className:"step-label",children:["Step ",B+1]})]})]})},H.id)})})]})})}),I&&n.jsx("div",{className:"flying-card",style:{left:`${I.startX}px`,top:`${I.startY}px`,"--startX":`${I.startX}px`},children:I.icon}),n.jsx(Ki,{children:O&&n.jsx("div",{className:"claim-overlay",onClick:()=>R(null),children:n.jsxs("div",{className:"modal",onClick:H=>H.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:O.icon}),n.jsx("div",{className:"card-detail-name",children:O.name}),n.jsxs("div",{className:"card-detail-desc",children:["You have ",O.count," of these cards"]}),n.jsx("div",{className:"modal-buttons",children:n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>R(null),children:"Close"})})]})})}),n.jsx(Ki,{children:q&&_&&n.jsx("div",{className:"claim-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("div",{className:"modal-title",children:"WELL DONE!"}),n.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),n.jsx("div",{className:"modal-icon",children:_.icon}),n.jsxs("div",{className:"modal-value",children:["+",_.value," ",_.type==="coins"?"Coins":_.type==="life"?"Lives":_.label]})]})})}),n.jsx(Ki,{children:Y&&_&&n.jsx("div",{className:"claim-overlay",onClick:()=>U(!1),children:n.jsxs("div",{className:"modal",onClick:H=>H.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:"🪙"}),n.jsx("div",{className:"modal-title",children:"Need More Coins"}),n.jsx("div",{className:"modal-subtitle",children:_.cost>0?`You need ${_.cost-p} more coins`:"Complete previous rewards first"}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>s("/play"),children:"Play Quiz"}),n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>U(!1),children:"Cancel"})]})]})})})]})},fa=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function jv(){const[e,t]=d.useState(null),r=fa.filter(a=>a.unlocked).length,s=Math.round(r/fa.length*100);return n.jsxs("div",{className:"badges-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Badge Collection"}),n.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),n.jsxs("div",{className:"progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Collection Progress"}),n.jsxs("span",{className:"progress-value",children:[r,"/",fa.length]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),n.jsx("div",{className:"badges-grid",children:fa.map(a=>n.jsxs("div",{className:`badge-card ${a.unlocked?"unlocked":""}`,style:{"--badge-color":a.color},onClick:()=>t(a),children:[n.jsx("div",{className:"badge-glow"}),n.jsx("div",{className:"badge-emoji",children:a.emoji}),n.jsx("div",{className:"badge-name",children:a.name}),!a.unlocked&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"badge-progress",children:n.jsx("div",{className:"badge-progress-fill",style:{width:`${a.progress}%`}})}),n.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},a.id))}),n.jsxs("div",{className:"tips-card",children:[n.jsxs("div",{className:"tips-title",children:[n.jsx("span",{children:"💡"}),n.jsx("span",{children:"Pro Tip"})]}),n.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&n.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:n.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),n.jsx("h3",{className:"modal-title",children:e.name}),n.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),n.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&n.jsxs("div",{className:"modal-progress-section",children:[n.jsx("div",{className:"modal-progress-label",children:"Progress"}),n.jsx("div",{className:"modal-progress-bar",children:n.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),n.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),n.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const Nv=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function kv(){const{player:e,addCoins:t}=xn(),[r,s]=d.useState(Nv),[a,i]=d.useState(null),[o,l]=d.useState((e==null?void 0:e.coins)||0),[u,c]=d.useState(!1),[f,p]=d.useState([]),m=r.length,w=r.filter(C=>C.current>=C.target).length,x=Math.round(w/m*100);d.useEffect(()=>{const C=setInterval(()=>{p(g=>{const h={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...g.slice(-4),h]})},3e3);return()=>clearInterval(C)},[]);const N=(C,g)=>{i(C),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{s(h=>h.map(y=>y.id===C?{...y,claimed:!0}:y)),l(h=>h+g),i(null),c(!0),setTimeout(()=>c(!1),2e3)},600)};return n.jsxs("div",{className:"achievements-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",o.toLocaleString()]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),n.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),n.jsxs("div",{className:"progress-overview",children:[n.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),n.jsxs("div",{className:"overview-header",children:[n.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),n.jsxs("div",{className:"overview-stats",children:[n.jsx("span",{className:"trophy-icon",children:"🏆"}),n.jsxs("span",{className:"overview-value",children:[w,"/",m]})]})]}),n.jsx("div",{className:"progress-bar-main",children:n.jsx("div",{className:"progress-fill-main",style:{width:`${x}%`}})})]}),n.jsx("div",{className:"achievements-list",children:r.map(C=>{const g=Math.min(100,Math.round(C.current/C.target*100)),h=g===100,y=C.color+"CC";return n.jsxs("div",{className:`achievement-card ${h?"completed":""}`,style:{"--card-color":C.color,"--card-color-dark":y},children:[n.jsx("div",{className:"card-glow"}),h&&C.claimed&&n.jsx("div",{className:"completed-badge",children:"✓"}),n.jsxs("div",{className:"card-content",children:[n.jsx("div",{className:"achievement-icon",children:C.icon}),n.jsxs("div",{className:"achievement-details",children:[n.jsx("div",{className:"achievement-title",children:C.title}),n.jsx("div",{className:"achievement-subtitle",children:C.subtitle}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${g}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{children:[C.current,"/",C.target]}),n.jsxs("span",{className:"reward-badge",children:["🪙 ",C.reward]})]})]})]}),n.jsx("button",{onClick:()=>N(C.id,C.reward),disabled:!h||C.claimed,className:`claim-button ${C.claimed?"claimed":h?"can-claim":"in-progress"} ${a===C.id?"claiming":""}`,children:C.claimed?"✓":h?"CLAIM!":`${g}%`})]})]},C.id)})}),u&&n.jsx("div",{className:"celebration",children:"🎉"})]})}function Sv(){const{player:e,addCoins:t,updateDailyStreak:r}=xn(),s=(e==null?void 0:e.currentStreak)||0,a=(e==null?void 0:e.bestStreak)||0,i=(e==null?void 0:e.totalDays)||0,o=(e==null?void 0:e.coins)||0,l=Xe(),u=new Date,c=u.getDay(),f=()=>{const A=new Date(u);return A.setDate(u.getDate()-u.getDay()),A.toISOString().split("T")[0]},[p,m]=d.useState(null),[w,x]=d.useState(!1),[N,C]=d.useState(null),[g,h]=d.useState(null),[y,E]=d.useState(!1),j=d.useRef(null),P=d.useRef(null),[S]=Lt("/sounds/coin.mp3",{volume:.75}),[v]=Lt("/sounds/correct.mp3",{volume:.6}),[b,k]=d.useState(()=>{const A=localStorage.getItem("streaks_claimed")||"[]",L=JSON.parse(A),I=f(),V=L.filter(ne=>ne!==`week_${I}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(V)),V});d.useEffect(()=>{const A=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const I=document.querySelector("main");I&&(I.scrollTop=0)};A(),requestAnimationFrame(A);const L=setTimeout(A,100);return()=>clearTimeout(L)},[]),d.useEffect(()=>{E(!0),setTimeout(()=>E(!1),3e3)},[]);const T=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],F=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],q=A=>{const L=b.includes(`week_${f()}_day_${A}`);if(A===0)return{isCompleted:!0,isClaimed:L,canClaim:!L,isLocked:!1};const I=s>=A,V=I&&!L,ne=s<A;return{isCompleted:I,isClaimed:L,canClaim:V,isLocked:ne}},Z=(A,L,I)=>{const V=q(L);if(V.isLocked){h({day:L,currentStreak:s}),setTimeout(()=>h(null),2e3);return}V.isClaimed||V.canClaim&&(m({...A,day:L}),x(!1),setTimeout(()=>{x(!0),v(),setTimeout(()=>{if(A.type==="coins"){const Q=parseInt(A.reward);if(P.current&&j.current){const M=P.current.getBoundingClientRect();S(),C({startRect:M,count:10,amount:Q})}}const ne=`week_${f()}_day_${L}`,re=[...b,ne];k(re),localStorage.setItem("streaks_claimed",JSON.stringify(re))},500),setTimeout(()=>{m(null),x(!1)},2500)},500))},Y=(A,L)=>{const I=L+1,V=T[L].dayIndex===c;return s>=I?V?"today-completed":"completed":V?"today-pending":I<=s+1?"pending":"future"},U=[{days:3,emoji:"⚡",label:"Starter",achieved:s>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:s>=7},{days:30,emoji:"💎",label:"Champion",achieved:s>=30},{days:100,emoji:"👑",label:"Legend",achieved:s>=100}],O=U.find(A=>A.days>s)||U[U.length-1],R=Math.min(100,s/O.days*100),_=()=>{window.location.href="/play"},z=()=>{l(-1)};return n.jsxs("div",{className:"streaks-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),N&&n.jsx(yi,{startRect:N.startRect,targetRef:j,count:N.count,onDone:()=>{t(N.amount),C(null)}}),n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-top",children:[n.jsx("button",{className:"back-button",onClick:z,children:"← Back"}),n.jsxs("div",{className:"coin-pill",ref:j,id:"coin-pill",children:[n.jsx("span",{className:"coin-icon",children:"🪙"}),n.jsx("span",{className:"coin-amount",children:o})]})]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"STREAKS"}),n.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),n.jsxs("div",{className:"streak-hero",children:[n.jsx("div",{className:"fire-animation",children:"🔥"}),n.jsx("div",{className:"streak-number",children:s}),n.jsx("div",{className:"streak-label",children:"DAY STREAK"}),n.jsxs("div",{className:"stats-row",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:a}),n.jsx("div",{className:"stat-label",children:"Best Streak"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:i}),n.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),n.jsxs("div",{className:"weekly-progress-card",children:[n.jsxs("div",{className:"weekly-header",children:[n.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),n.jsxs("div",{className:"weekly-counter",children:[n.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),n.jsxs("span",{className:"weekly-counter-text",children:[Math.min(s,7),"/7"]})]})]}),n.jsx("div",{className:"weekly-days",children:T.map((A,L)=>{const I=Y(A.dayIndex,L),V=A.dayIndex===c;return n.jsxs("div",{className:"day-item",children:[n.jsx("div",{className:`day-circle ${I}`,children:I==="completed"||I==="today-completed"?"":A.short}),n.jsx("div",{className:`day-label ${V?"today":""}`,children:A.label})]},L)})}),n.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),n.jsx("div",{className:"rewards-grid",children:F.map((A,L)=>{const I=q(A.day);return n.jsxs("div",{className:`reward-item ${I.isLocked?"locked":I.canClaim?"can-claim":I.isClaimed?"completed":""}`,onClick:V=>Z(A,A.day),children:[n.jsxs("div",{className:"reward-day",children:["Day ",A.day]}),n.jsx("div",{className:"reward-icon",children:A.icon}),n.jsx("div",{className:"reward-text",children:A.label})]},L)})})]}),n.jsxs("div",{className:"milestone-section",children:[n.jsx("div",{className:"milestone-header",children:"Next Milestone"}),n.jsxs("div",{className:"milestone-progress",children:[n.jsxs("div",{className:"milestone-info",children:[n.jsxs("div",{className:"milestone-current",children:[n.jsx("span",{className:"milestone-emoji",children:O.emoji}),n.jsx("span",{className:"milestone-text",children:O.label})]}),n.jsxs("span",{className:"milestone-target",children:[s,"/",O.days," days"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${R}%`}})})]})]}),n.jsx("div",{className:"motivational-text",children:s===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${s} strong! Keep going to unlock more rewards!`}),n.jsxs("button",{className:"play-button",onClick:_,children:[n.jsx("span",{children:"Continue Streak"}),n.jsx("span",{children:"→"})]}),g&&n.jsxs("div",{className:"locked-message",children:[n.jsx("span",{className:"locked-message-icon",children:"🔒"}),n.jsx("span",{className:"locked-message-text",children:g.day===1&&g.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${g.day} streak to unlock this reward!`})]}),p&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"modal-overlay"}),n.jsx("div",{className:"reward-modal",ref:P,children:n.jsxs("div",{className:"gift-box",children:[n.jsxs("div",{className:"gift-box-body",children:[n.jsx("div",{className:"gift-box-ribbon"}),n.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),n.jsx("div",{className:`gift-box-lid ${w?"opening":""}`,children:n.jsx("div",{className:"gift-box-bow",children:"🎀"})}),n.jsxs("div",{className:`gift-content ${w?"show":""}`,children:[n.jsx("div",{className:"gift-content-icon",children:p.icon}),n.jsxs("div",{className:"gift-content-title",children:["Day ",p.day]}),n.jsx("div",{className:"gift-content-desc",children:p.label})]})]})})]}),y&&n.jsx("div",{className:"celebration",children:"🎉"})]})}const tc=()=>{const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},Cv=e=>e===tc(),wm=()=>{const e=localStorage.getItem("questProgress");if(!e)return{};const t=JSON.parse(e);if(!Cv(t.date)){const r={date:tc()};return localStorage.setItem("questProgress",JSON.stringify(r)),r}return t},Id=(e,t)=>{const r=wm();r[e]=t,r.date=tc(),localStorage.setItem("questProgress",JSON.stringify(r))};function Ev(){const{player:e,addCoins:t}=xn(),r=Xe(),s=Tt(),a=wm(),[i,o]=d.useState([{id:1,title:"Play 3 quizzes today",progress:a.dailyQuizzes||0,target:3,reward:60,claimed:a.dailyQuizzesClaimed||!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy",questType:"dailyQuizzes",route:"/quiz/play",routeParams:"?category=random&difficulty=random&from=quest"},{id:3,title:"Practice 15 questions",progress:a.practiceQuestions||0,target:15,reward:100,claimed:a.practiceQuestionsClaimed||!1,icon:"📚",color:"#FFD93D",difficulty:"Easy",questType:"practiceQuestions",route:"/practice/select",routeParams:"?from=quest"},{id:4,title:"Win 5 in a row",progress:a.winStreak||0,target:5,reward:150,claimed:a.winStreakClaimed||!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard",questType:"winStreak",route:"/play/survival/start",routeParams:"?from=quest"},{id:5,title:"Complete a speed run",progress:a.speedRun||0,target:1,reward:120,claimed:a.speedRunClaimed||!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium",questType:"speedRun",route:"/swipe/random-mix",routeParams:"?from=quest"}]),[l,u]=d.useState((e==null?void 0:e.coins)||0),[c,f]=d.useState(null),[p,m]=d.useState(0),w=d.useRef(null),[x,N]=d.useState(null);d.useEffect(()=>{var j;if((j=s.state)!=null&&j.questCompleted){const{questType:P,increment:S}=s.state;o(v=>v.map(b=>{if(b.questType===P){const k=Math.min(b.progress+(S||1),b.target);return Id(P,k),{...b,progress:k}}return b})),window.history.replaceState({},document.title)}},[s]),d.useEffect(()=>{const j=i.filter(P=>P.progress>=P.target).length;m(Math.round(j/i.length*100))},[i]),d.useEffect(()=>{u((e==null?void 0:e.coins)||0)},[e==null?void 0:e.coins]);const C=j=>{navigator.vibrate&&navigator.vibrate([20]),sessionStorage.setItem("activeQuest",JSON.stringify({id:j.id,type:j.questType,title:j.title,currentProgress:j.progress,target:j.target})),r(j.route+j.routeParams)},g=()=>{r("/")},h=j=>{navigator.vibrate&&navigator.vibrate([20,10,20]);try{const P=new Audio("/sounds/coin.mp3");P.volume=.75,P.play()}catch{console.log("Sound not available")}f(j.id),N({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(j.reward/10,10),amount:j.reward}),setTimeout(()=>{o(P=>P.map(S=>S.id===j.id?(Id(S.questType+"Claimed",!0),{...S,claimed:!0}):S)),f(null)},600)},y=j=>{switch(j){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},E=()=>{const j=new Date,P=new Date(j);P.setDate(P.getDate()+1),P.setHours(5,0,0,0);const S=P-j,v=Math.floor(S/(1e3*60*60)),b=Math.floor(S%(1e3*60*60)/(1e3*60));return`${v}h ${b}m`};return n.jsxs("div",{className:"quests-screen",children:[x&&n.jsx(yi,{startRect:x.startRect,targetRef:w,count:x.count,onDone:()=>{u(j=>j+x.amount),t(x.amount),N(null)}}),n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"animated-bg",children:[n.jsx("div",{className:"floating-icon",children:"🎮"}),n.jsx("div",{className:"floating-icon",children:"🎯"}),n.jsx("div",{className:"floating-icon",children:"🏆"}),n.jsx("div",{className:"floating-icon",children:"⭐"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:g,children:"← Back"}),n.jsxs("div",{className:"coins-display",ref:w,children:["🪙 ",l]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Daily Quests"}),n.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),n.jsxs("div",{className:"daily-progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Today's Progress"}),n.jsxs("span",{className:"progress-value",children:[p,"%"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${p}%`}})})]}),n.jsx("div",{className:"quests-list",children:i.map(j=>{const P=Math.min(100,Math.round(j.progress/j.target*100)),S=P===100,v=j.color+"CC";return n.jsxs("div",{className:`quest-card ${S?"completed":""}`,style:{"--quest-color":j.color,"--quest-color-dark":v},children:[n.jsx("div",{className:"quest-accent"}),S&&j.claimed&&n.jsx("div",{className:"completed-checkmark",children:"✓"}),n.jsxs("div",{className:"quest-content",children:[n.jsx("div",{className:`quest-icon-container ${c===j.id?"animating":""}`,children:j.icon}),n.jsxs("div",{className:"quest-details",children:[n.jsxs("div",{className:"quest-header",children:[n.jsx("span",{className:"quest-title",children:j.title}),n.jsx("span",{className:"difficulty-badge",style:{background:`${y(j.difficulty)}20`,color:y(j.difficulty)},children:j.difficulty})]}),n.jsxs("div",{className:"progress-info",children:[n.jsx("div",{className:"mini-progress-bar",children:n.jsx("div",{className:"mini-progress-fill",style:{width:`${P}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{className:"progress-numbers",children:[j.progress,"/",j.target]}),n.jsxs("span",{className:"reward-display",children:["🪙 ",j.reward]})]})]})]}),n.jsx("button",{onClick:()=>{S&&!j.claimed?h(j):S||C(j)},disabled:j.claimed,className:`action-button ${j.claimed?"claimed":S?"can-claim":"in-progress"}`,style:!S&&!j.claimed?{"--quest-color":j.color,"--quest-color-dark":v}:{},children:j.claimed?"✓":S?"Claim":"Do it"})]})]},j.id)})}),n.jsxs("div",{className:"timer-card",children:[n.jsx("div",{className:"timer-icon",children:"⏰"}),n.jsx("div",{className:"timer-label",children:"New Quests In"}),n.jsx("div",{className:"timer-value",children:E()})]}),c&&n.jsx("div",{className:"reward-animation",children:"🪙"})]})}function Rv({title:e,subtitle:t,children:r}){const s=Xe();return n.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&n.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),n.jsx("div",{className:"w-[68px]"})]}),r]})}function Tv(){const e=Xe(),[t,r]=d.useState(!0),[s,a]=d.useState(!0),[i,o]=d.useState(!0);return n.jsxs(Rv,{title:"Settings",subtitle:"Make it yours",children:[n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[n.jsx(ts,{label:"Sound",right:n.jsx(Ji,{on:t,set:r})}),n.jsx(ts,{label:"Haptics",right:n.jsx(Ji,{on:s,set:a})}),n.jsx(ts,{label:"Notifications",right:n.jsx(Ji,{on:i,set:o})}),n.jsx(ts,{label:"Edit Profile",right:n.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),n.jsx(ts,{label:"Privacy Policy",right:n.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),n.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function ts({label:e,right:t,onClick:r}){return n.jsxs("button",{type:"button",onClick:r,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[n.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function Ji({on:e,set:t}){return n.jsx("span",{onClick:r=>{r.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:n.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}const Pv={name:"Player",avatar:"wizard",level:1,totalXP:0,coins:0,energy:ct.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function _v(){const[e,t]=d.useState(()=>{const c=localStorage.getItem(ct.STORAGE_KEYS.PLAYER);return c?JSON.parse(c):Pv});d.useEffect(()=>{localStorage.setItem(ct.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<ct.MAX_ENERGY&&e.energyRegenAt){const c=setInterval(()=>{const f=Date.now();f>=e.energyRegenAt&&t(p=>({...p,energy:Math.min(p.energy+1,ct.MAX_ENERGY),energyRegenAt:p.energy+1<ct.MAX_ENERGY?f+ct.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(c)}},[e.energy,e.energyRegenAt]);const r=d.useCallback(c=>{t(f=>{const p=f.totalXP+c,m=gd(f.totalXP),w=gd(p);let x=[...f.unlockedAvatars];return w>m&&ct.AVATARS.forEach(N=>{N.unlockLevel===w&&!x.includes(N.id)&&x.push(N.id)}),{...f,totalXP:p,level:w,unlockedAvatars:x}})},[]),s=d.useCallback(c=>{const p=new Error().stack;console.log("[COINS DEBUG] ================"),console.log("[COINS DEBUG] Amount:",c),console.log("[COINS DEBUG] Called from:",p.split(`
`)[2]),console.log("[COINS DEBUG] Full trace:",p),t(m=>(console.log("[COINS DEBUG] Current:",m.coins,"→ New:",m.coins+c),{...m,coins:m.coins+c}))},[]),a=d.useCallback((c=1)=>e.energy<c?!1:(t(f=>({...f,energy:f.energy-c,energyRegenAt:f.energyRegenAt||Date.now()+ct.ENERGY_REGEN_TIME})),!0),[e.energy]),i=d.useCallback(c=>{t(f=>{const p=c?f.comboStreak+1:0;return{...f,comboStreak:p,bestCombo:Math.max(f.bestCombo,p)}})},[]),o=d.useCallback(()=>{t(c=>({...c,comboStreak:0}))},[]),l=d.useCallback(c=>{e.unlockedAvatars.includes(c)&&t(f=>({...f,avatar:c}))},[e.unlockedAvatars]),u=d.useCallback(()=>{const c=new Date().toDateString();t(f=>{if(f.lastPlayedDate===c)return f;const p=new Date;p.setDate(p.getDate()-1);const m=p.toDateString();let w=f.currentStreak;return f.lastPlayedDate===m?w=f.currentStreak+1:(f.lastPlayedDate,w=1),{...f,currentStreak:w,bestStreak:Math.max(f.bestStreak,w),totalDays:f.totalDays+1,lastPlayedDate:c}})},[]);return{player:e,addXP:r,addCoins:s,useEnergy:a,updateCombo:i,resetCombo:o,changeAvatar:l,updateDailyStreak:u,levelProgress:Mx(e.totalXP)}}const jm=d.createContext(null),xn=()=>{const e=d.useContext(jm);if(!e)throw new Error("useGame must be used within GameProvider");return e};function Av({children:e}){const t=_v();return n.jsx(jm.Provider,{value:t,children:e})}function Lv(){return n.jsx(Av,{children:n.jsx(Wp,{children:n.jsxs(Ke,{element:n.jsx(Px,{}),children:[n.jsx(Ke,{path:"/",element:n.jsx(bd,{})}),n.jsx(Ke,{path:"/play",element:n.jsx(Sg,{})}),n.jsx(Ke,{path:"/play/party",element:n.jsx(Gg,{})}),n.jsx(Ke,{path:"/profile",element:n.jsx(Zg,{})}),n.jsx(Ke,{path:"/profile/leaderboard",element:n.jsx(ev,{})}),n.jsx(Ke,{path:"/profile/history",element:n.jsx(iv,{})}),n.jsx(Ke,{path:"/profile/rewards",element:n.jsx(wv,{})}),n.jsx(Ke,{path:"/profile/badges",element:n.jsx(jv,{})}),n.jsx(Ke,{path:"/profile/achievements",element:n.jsx(kv,{})}),n.jsx(Ke,{path:"/profile/streaks",element:n.jsx(Sv,{})}),n.jsx(Ke,{path:"/profile/quests",element:n.jsx(Ev,{})}),n.jsx(Ke,{path:"/profile/settings",element:n.jsx(Tv,{})}),n.jsx(Ke,{path:"/swipe",element:n.jsx(Xg,{})}),n.jsx(Ke,{path:"/leaders",element:n.jsx(Qp,{to:"/profile/leaderboard",replace:!0})}),n.jsx(Ke,{path:"/quiz/:category",element:n.jsx($g,{})}),n.jsx(Ke,{path:"/quiz/play",element:n.jsx(Jg,{})}),n.jsx(Ke,{path:"*",element:n.jsx(bd,{})})]})})})}Zi.createRoot(document.getElementById("root")).render(n.jsx(ft.StrictMode,{children:n.jsx(vx,{children:n.jsx(Lv,{})})}));export{km as c,Md as g};
