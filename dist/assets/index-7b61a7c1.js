(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();var bm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ad(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ld={exports:{}},ti={},Id={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=Symbol.for("react.element"),wm=Symbol.for("react.portal"),jm=Symbol.for("react.fragment"),Nm=Symbol.for("react.strict_mode"),km=Symbol.for("react.profiler"),Sm=Symbol.for("react.provider"),Cm=Symbol.for("react.context"),Em=Symbol.for("react.forward_ref"),Rm=Symbol.for("react.suspense"),Tm=Symbol.for("react.memo"),_m=Symbol.for("react.lazy"),ec=Symbol.iterator;function Pm(e){return e===null||typeof e!="object"?null:(e=ec&&e[ec]||e["@@iterator"],typeof e=="function"?e:null)}var Md={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dd=Object.assign,zd={};function Mr(e,t,r){this.props=e,this.context=t,this.refs=zd,this.updater=r||Md}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fd(){}Fd.prototype=Mr.prototype;function Go(e,t,r){this.props=e,this.context=t,this.refs=zd,this.updater=r||Md}var Vo=Go.prototype=new Fd;Vo.constructor=Go;Dd(Vo,Mr.prototype);Vo.isPureReactComponent=!0;var tc=Array.isArray,Od=Object.prototype.hasOwnProperty,Xo={current:null},$d={key:!0,ref:!0,__self:!0,__source:!0};function Bd(e,t,r){var s,a={},i=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Od.call(t,s)&&!$d.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];a.children=d}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:Is,type:e,key:i,ref:o,props:a,_owner:Xo.current}}function Am(e,t){return{$$typeof:Is,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ko(e){return typeof e=="object"&&e!==null&&e.$$typeof===Is}function Lm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var nc=/\/+/g;function yi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lm(""+e.key):t.toString(36)}function ma(e,t,r,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Is:case wm:o=!0}}if(o)return o=e,a=a(o),e=s===""?"."+yi(o,0):s,tc(a)?(r="",e!=null&&(r=e.replace(nc,"$&/")+"/"),ma(a,t,r,"",function(c){return c})):a!=null&&(Ko(a)&&(a=Am(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(nc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,s=s===""?".":s+":",tc(e))for(var l=0;l<e.length;l++){i=e[l];var d=s+yi(i,l);o+=ma(i,t,r,d,a)}else if(d=Pm(e),typeof d=="function")for(e=d.call(e),l=0;!(i=e.next()).done;)i=i.value,d=s+yi(i,l++),o+=ma(i,t,r,d,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Us(e,t,r){if(e==null)return e;var s=[],a=0;return ma(e,s,"","",function(i){return t.call(r,i,a++)}),s}function Im(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pt={current:null},ha={transition:null},Mm={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:ha,ReactCurrentOwner:Xo};function Ud(){throw Error("act(...) is not supported in production builds of React.")}we.Children={map:Us,forEach:function(e,t,r){Us(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Us(e,function(){t++}),t},toArray:function(e){return Us(e,function(t){return t})||[]},only:function(e){if(!Ko(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};we.Component=Mr;we.Fragment=jm;we.Profiler=km;we.PureComponent=Go;we.StrictMode=Nm;we.Suspense=Rm;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mm;we.act=Ud;we.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Dd({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Xo.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)Od.call(t,d)&&!$d.hasOwnProperty(d)&&(s[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)s.children=r;else if(1<d){l=Array(d);for(var c=0;c<d;c++)l[c]=arguments[c+2];s.children=l}return{$$typeof:Is,type:e.type,key:a,ref:i,props:s,_owner:o}};we.createContext=function(e){return e={$$typeof:Cm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sm,_context:e},e.Consumer=e};we.createElement=Bd;we.createFactory=function(e){var t=Bd.bind(null,e);return t.type=e,t};we.createRef=function(){return{current:null}};we.forwardRef=function(e){return{$$typeof:Em,render:e}};we.isValidElement=Ko;we.lazy=function(e){return{$$typeof:_m,_payload:{_status:-1,_result:e},_init:Im}};we.memo=function(e,t){return{$$typeof:Tm,type:e,compare:t===void 0?null:t}};we.startTransition=function(e){var t=ha.transition;ha.transition={};try{e()}finally{ha.transition=t}};we.unstable_act=Ud;we.useCallback=function(e,t){return pt.current.useCallback(e,t)};we.useContext=function(e){return pt.current.useContext(e)};we.useDebugValue=function(){};we.useDeferredValue=function(e){return pt.current.useDeferredValue(e)};we.useEffect=function(e,t){return pt.current.useEffect(e,t)};we.useId=function(){return pt.current.useId()};we.useImperativeHandle=function(e,t,r){return pt.current.useImperativeHandle(e,t,r)};we.useInsertionEffect=function(e,t){return pt.current.useInsertionEffect(e,t)};we.useLayoutEffect=function(e,t){return pt.current.useLayoutEffect(e,t)};we.useMemo=function(e,t){return pt.current.useMemo(e,t)};we.useReducer=function(e,t,r){return pt.current.useReducer(e,t,r)};we.useRef=function(e){return pt.current.useRef(e)};we.useState=function(e){return pt.current.useState(e)};we.useSyncExternalStore=function(e,t,r){return pt.current.useSyncExternalStore(e,t,r)};we.useTransition=function(){return pt.current.useTransition()};we.version="18.3.1";Id.exports=we;var u=Id.exports;const ft=Ad(u);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm=u,zm=Symbol.for("react.element"),Fm=Symbol.for("react.fragment"),Om=Object.prototype.hasOwnProperty,$m=Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bm={key:!0,ref:!0,__self:!0,__source:!0};function qd(e,t,r){var s,a={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)Om.call(t,s)&&!Bm.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:zm,type:e,key:i,ref:o,props:a,_owner:$m.current}}ti.Fragment=Fm;ti.jsx=qd;ti.jsxs=qd;Ld.exports=ti;var n=Ld.exports,Ji={},Yd={exports:{}},Et={},Qd={exports:{}},Hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,_){var z=R.length;R.push(_);e:for(;0<z;){var P=z-1>>>1,L=R[P];if(0<a(L,_))R[P]=_,R[z]=L,z=P;else break e}}function r(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var _=R[0],z=R.pop();if(z!==_){R[0]=z;e:for(var P=0,L=R.length,M=L>>>1;P<M;){var X=2*(P+1)-1,O=R[X],K=X+1,ce=R[K];if(0>a(O,z))K<L&&0>a(ce,O)?(R[P]=ce,R[K]=z,P=K):(R[P]=O,R[X]=z,P=X);else if(K<L&&0>a(ce,z))R[P]=ce,R[K]=z,P=K;else break e}}return _}function a(R,_){var z=R.sortIndex-_.sortIndex;return z!==0?z:R.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var d=[],c=[],f=1,x=null,m=3,y=!1,p=!1,j=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var _=r(c);_!==null;){if(_.callback===null)s(c);else if(_.startTime<=R)s(c),_.sortIndex=_.expirationTime,t(d,_);else break;_=r(c)}}function C(R){if(j=!1,g(R),!p)if(r(d)!==null)p=!0,B(E);else{var _=r(c);_!==null&&U(C,_.startTime-R)}}function E(R,_){p=!1,j&&(j=!1,v(b),b=-1),y=!0;var z=m;try{for(g(_),x=r(d);x!==null&&(!(x.expirationTime>_)||R&&!T());){var P=x.callback;if(typeof P=="function"){x.callback=null,m=x.priorityLevel;var L=P(x.expirationTime<=_);_=e.unstable_now(),typeof L=="function"?x.callback=L:x===r(d)&&s(d),g(_)}else s(d);x=r(d)}if(x!==null)var M=!0;else{var X=r(c);X!==null&&U(C,X.startTime-_),M=!1}return M}finally{x=null,m=z,y=!1}}var A=!1,S=null,b=-1,w=5,N=-1;function T(){return!(e.unstable_now()-N<w)}function D(){if(S!==null){var R=e.unstable_now();N=R;var _=!0;try{_=S(!0,R)}finally{_?q():(A=!1,S=null)}}else A=!1}var q;if(typeof h=="function")q=function(){h(D)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,Y=Z.port2;Z.port1.onmessage=D,q=function(){Y.postMessage(null)}}else q=function(){k(D,0)};function B(R){S=R,A||(A=!0,q())}function U(R,_){b=k(function(){R(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){p||y||(p=!0,B(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(R){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var z=m;m=_;try{return R()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,_){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=m;m=R;try{return _()}finally{m=z}},e.unstable_scheduleCallback=function(R,_,z){var P=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?P+z:P):z=P,R){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=z+L,R={id:f++,callback:_,priorityLevel:R,startTime:z,expirationTime:L,sortIndex:-1},z>P?(R.sortIndex=z,t(c,R),r(d)===null&&R===r(c)&&(j?(v(b),b=-1):j=!0,U(C,z-P))):(R.sortIndex=L,t(d,R),p||y||(p=!0,B(E))),R},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(R){var _=m;return function(){var z=m;m=_;try{return R.apply(this,arguments)}finally{m=z}}}})(Hd);Qd.exports=Hd;var Um=Qd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm=u,Ct=Um;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wd=new Set,xs={};function sr(e,t){Rr(e,t),Rr(e+"Capture",t)}function Rr(e,t){for(xs[e]=t,e=0;e<t.length;e++)Wd.add(t[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zi=Object.prototype.hasOwnProperty,Ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rc={},sc={};function Qm(e){return Zi.call(sc,e)?!0:Zi.call(rc,e)?!1:Ym.test(e)?sc[e]=!0:(rc[e]=!0,!1)}function Hm(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wm(e,t,r,s){if(t===null||typeof t>"u"||Hm(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xt(e,t,r,s,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new xt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new xt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new xt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new xt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new xt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new xt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new xt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new xt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new xt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jo=/[\-:]([a-z])/g;function Zo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Jo,Zo);st[t]=new xt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Jo,Zo);st[t]=new xt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Jo,Zo);st[t]=new xt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new xt(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new xt(e,1,!1,e.toLowerCase(),null,!0,!0)});function el(e,t,r,s){var a=st.hasOwnProperty(t)?st[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wm(t,r,a,s)&&(r=null),s||a===null?Qm(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var pn=qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qs=Symbol.for("react.element"),cr=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),tl=Symbol.for("react.strict_mode"),eo=Symbol.for("react.profiler"),Gd=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),nl=Symbol.for("react.forward_ref"),to=Symbol.for("react.suspense"),no=Symbol.for("react.suspense_list"),rl=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),Xd=Symbol.for("react.offscreen"),ac=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=ac&&e[ac]||e["@@iterator"],typeof e=="function"?e:null)}var Qe=Object.assign,bi;function ns(e){if(bi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);bi=t&&t[1]||""}return`
`+bi+e}var wi=!1;function ji(e,t){if(!e||wi)return"";wi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var s=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){s=c}e.call(t.prototype)}else{try{throw Error()}catch(c){s=c}e()}}catch(c){if(c&&s&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),i=s.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var d=`
`+a[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=l);break}}}finally{wi=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ns(e):""}function Gm(e){switch(e.tag){case 5:return ns(e.type);case 16:return ns("Lazy");case 13:return ns("Suspense");case 19:return ns("SuspenseList");case 0:case 2:case 15:return e=ji(e.type,!1),e;case 11:return e=ji(e.type.render,!1),e;case 1:return e=ji(e.type,!0),e;default:return""}}function ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dr:return"Fragment";case cr:return"Portal";case eo:return"Profiler";case tl:return"StrictMode";case to:return"Suspense";case no:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vd:return(e.displayName||"Context")+".Consumer";case Gd:return(e._context.displayName||"Context")+".Provider";case nl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rl:return t=e.displayName||null,t!==null?t:ro(e.type)||"Memo";case jn:t=e._payload,e=e._init;try{return ro(e(t))}catch{}}return null}function Vm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ro(t);case 8:return t===tl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xm(e){var t=Kd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){s=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ys(e){e._valueTracker||(e._valueTracker=Xm(e))}function Jd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=Kd(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function so(e,t){var r=t.checked;return Qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ic(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=zn(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zd(e,t){t=t.checked,t!=null&&el(e,"checked",t,!1)}function ao(e,t){Zd(e,t);var r=zn(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?io(e,t.type,r):t.hasOwnProperty("defaultValue")&&io(e,t.type,zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function oc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function io(e,t,r){(t!=="number"||Ta(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var rs=Array.isArray;function wr(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+zn(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(V(92));if(rs(r)){if(1<r.length)throw Error(V(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:zn(r)}}function eu(e,t){var r=zn(t.value),s=zn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qs,nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qs=Qs||document.createElement("div"),Qs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gs(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Km=["Webkit","ms","Moz","O"];Object.keys(is).forEach(function(e){Km.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),is[t]=is[e]})});function ru(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||is.hasOwnProperty(e)&&is[e]?(""+t).trim():t+"px"}function su(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=ru(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var Jm=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function co(e,t){if(t){if(Jm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function uo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fo=null;function sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mo=null,jr=null,Nr=null;function dc(e){if(e=zs(e)){if(typeof mo!="function")throw Error(V(280));var t=e.stateNode;t&&(t=ii(t),mo(e.stateNode,e.type,t))}}function au(e){jr?Nr?Nr.push(e):Nr=[e]:jr=e}function iu(){if(jr){var e=jr,t=Nr;if(Nr=jr=null,dc(e),t)for(e=0;e<t.length;e++)dc(t[e])}}function ou(e,t){return e(t)}function lu(){}var Ni=!1;function cu(e,t,r){if(Ni)return e(t,r);Ni=!0;try{return ou(e,t,r)}finally{Ni=!1,(jr!==null||Nr!==null)&&(lu(),iu())}}function vs(e,t){var r=e.stateNode;if(r===null)return null;var s=ii(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(V(231,t,typeof r));return r}var ho=!1;if(dn)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){ho=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{ho=!1}function Zm(e,t,r,s,a,i,o,l,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(f){this.onError(f)}}var os=!1,_a=null,Pa=!1,po=null,e0={onError:function(e){os=!0,_a=e}};function t0(e,t,r,s,a,i,o,l,d){os=!1,_a=null,Zm.apply(e0,arguments)}function n0(e,t,r,s,a,i,o,l,d){if(t0.apply(this,arguments),os){if(os){var c=_a;os=!1,_a=null}else throw Error(V(198));Pa||(Pa=!0,po=c)}}function ar(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function du(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uc(e){if(ar(e)!==e)throw Error(V(188))}function r0(e){var t=e.alternate;if(!t){if(t=ar(e),t===null)throw Error(V(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return uc(a),e;if(i===s)return uc(a),t;i=i.sibling}throw Error(V(188))}if(r.return!==s.return)r=a,s=i;else{for(var o=!1,l=a.child;l;){if(l===r){o=!0,r=a,s=i;break}if(l===s){o=!0,s=a,r=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===r){o=!0,r=i,s=a;break}if(l===s){o=!0,s=i,r=a;break}l=l.sibling}if(!o)throw Error(V(189))}}if(r.alternate!==s)throw Error(V(190))}if(r.tag!==3)throw Error(V(188));return r.stateNode.current===r?e:t}function uu(e){return e=r0(e),e!==null?fu(e):null}function fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fu(e);if(t!==null)return t;e=e.sibling}return null}var mu=Ct.unstable_scheduleCallback,fc=Ct.unstable_cancelCallback,s0=Ct.unstable_shouldYield,a0=Ct.unstable_requestPaint,Ge=Ct.unstable_now,i0=Ct.unstable_getCurrentPriorityLevel,al=Ct.unstable_ImmediatePriority,hu=Ct.unstable_UserBlockingPriority,Aa=Ct.unstable_NormalPriority,o0=Ct.unstable_LowPriority,pu=Ct.unstable_IdlePriority,ni=null,Jt=null;function l0(e){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:u0,c0=Math.log,d0=Math.LN2;function u0(e){return e>>>=0,e===0?32:31-(c0(e)/d0|0)|0}var Hs=64,Ws=4194304;function ss(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function La(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~a;l!==0?s=ss(l):(i&=o,i!==0&&(s=ss(i)))}else o=r&~a,o!==0?s=ss(o):i!==0&&(s=ss(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-Bt(t),a=1<<r,s|=e[r],t&=~a;return s}function f0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m0(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Bt(i),l=1<<o,d=a[o];d===-1?(!(l&r)||l&s)&&(a[o]=f0(l,t)):d<=t&&(e.expiredLanes|=l),i&=~l}}function xo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xu(){var e=Hs;return Hs<<=1,!(Hs&4194240)&&(Hs=64),e}function ki(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ms(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bt(t),e[t]=r}function h0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Bt(r),i=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~i}}function il(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Bt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var Te=0;function gu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vu,ol,yu,bu,wu,go=!1,Gs=[],Tn=null,_n=null,Pn=null,ys=new Map,bs=new Map,Sn=[],p0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mc(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":ys.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bs.delete(t.pointerId)}}function Yr(e,t,r,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},t!==null&&(t=zs(t),t!==null&&ol(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function x0(e,t,r,s,a){switch(t){case"focusin":return Tn=Yr(Tn,e,t,r,s,a),!0;case"dragenter":return _n=Yr(_n,e,t,r,s,a),!0;case"mouseover":return Pn=Yr(Pn,e,t,r,s,a),!0;case"pointerover":var i=a.pointerId;return ys.set(i,Yr(ys.get(i)||null,e,t,r,s,a)),!0;case"gotpointercapture":return i=a.pointerId,bs.set(i,Yr(bs.get(i)||null,e,t,r,s,a)),!0}return!1}function ju(e){var t=Qn(e.target);if(t!==null){var r=ar(t);if(r!==null){if(t=r.tag,t===13){if(t=du(r),t!==null){e.blockedOn=t,wu(e.priority,function(){yu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=vo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);fo=s,r.target.dispatchEvent(s),fo=null}else return t=zs(r),t!==null&&ol(t),e.blockedOn=r,!1;t.shift()}return!0}function hc(e,t,r){pa(e)&&r.delete(t)}function g0(){go=!1,Tn!==null&&pa(Tn)&&(Tn=null),_n!==null&&pa(_n)&&(_n=null),Pn!==null&&pa(Pn)&&(Pn=null),ys.forEach(hc),bs.forEach(hc)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,go||(go=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,g0)))}function ws(e){function t(a){return Qr(a,e)}if(0<Gs.length){Qr(Gs[0],e);for(var r=1;r<Gs.length;r++){var s=Gs[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Tn!==null&&Qr(Tn,e),_n!==null&&Qr(_n,e),Pn!==null&&Qr(Pn,e),ys.forEach(t),bs.forEach(t),r=0;r<Sn.length;r++)s=Sn[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<Sn.length&&(r=Sn[0],r.blockedOn===null);)ju(r),r.blockedOn===null&&Sn.shift()}var kr=pn.ReactCurrentBatchConfig,Ia=!0;function v0(e,t,r,s){var a=Te,i=kr.transition;kr.transition=null;try{Te=1,ll(e,t,r,s)}finally{Te=a,kr.transition=i}}function y0(e,t,r,s){var a=Te,i=kr.transition;kr.transition=null;try{Te=4,ll(e,t,r,s)}finally{Te=a,kr.transition=i}}function ll(e,t,r,s){if(Ia){var a=vo(e,t,r,s);if(a===null)Ii(e,t,s,Ma,r),mc(e,s);else if(x0(a,e,t,r,s))s.stopPropagation();else if(mc(e,s),t&4&&-1<p0.indexOf(e)){for(;a!==null;){var i=zs(a);if(i!==null&&vu(i),i=vo(e,t,r,s),i===null&&Ii(e,t,s,Ma,r),i===a)break;a=i}a!==null&&s.stopPropagation()}else Ii(e,t,s,null,r)}}var Ma=null;function vo(e,t,r,s){if(Ma=null,e=sl(s),e=Qn(e),e!==null)if(t=ar(e),t===null)e=null;else if(r=t.tag,r===13){if(e=du(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ma=e,null}function Nu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i0()){case al:return 1;case hu:return 4;case Aa:case o0:return 16;case pu:return 536870912;default:return 16}default:return 16}}var En=null,cl=null,xa=null;function ku(){if(xa)return xa;var e,t=cl,r=t.length,s,a="value"in En?En.value:En.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(s=1;s<=o&&t[r-s]===a[i-s];s++);return xa=a.slice(e,1<s?1-s:void 0)}function ga(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vs(){return!0}function pc(){return!1}function Rt(e){function t(r,s,a,i,o){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vs:pc,this.isPropagationStopped=pc,this}return Qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Rt(Dr),Ds=Qe({},Dr,{view:0,detail:0}),b0=Rt(Ds),Si,Ci,Hr,ri=Qe({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ul,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(Si=e.screenX-Hr.screenX,Ci=e.screenY-Hr.screenY):Ci=Si=0,Hr=e),Si)},movementY:function(e){return"movementY"in e?e.movementY:Ci}}),xc=Rt(ri),w0=Qe({},ri,{dataTransfer:0}),j0=Rt(w0),N0=Qe({},Ds,{relatedTarget:0}),Ei=Rt(N0),k0=Qe({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),S0=Rt(k0),C0=Qe({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),E0=Rt(C0),R0=Qe({},Dr,{data:0}),gc=Rt(R0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=P0[e])?!!t[e]:!1}function ul(){return A0}var L0=Qe({},Ds,{key:function(e){if(e.key){var t=T0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ul,charCode:function(e){return e.type==="keypress"?ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I0=Rt(L0),M0=Qe({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vc=Rt(M0),D0=Qe({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ul}),z0=Rt(D0),F0=Qe({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),O0=Rt(F0),$0=Qe({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),B0=Rt($0),U0=[9,13,27,32],fl=dn&&"CompositionEvent"in window,ls=null;dn&&"documentMode"in document&&(ls=document.documentMode);var q0=dn&&"TextEvent"in window&&!ls,Su=dn&&(!fl||ls&&8<ls&&11>=ls),yc=String.fromCharCode(32),bc=!1;function Cu(e,t){switch(e){case"keyup":return U0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function Y0(e,t){switch(e){case"compositionend":return Eu(t);case"keypress":return t.which!==32?null:(bc=!0,yc);case"textInput":return e=t.data,e===yc&&bc?null:e;default:return null}}function Q0(e,t){if(ur)return e==="compositionend"||!fl&&Cu(e,t)?(e=ku(),xa=cl=En=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Su&&t.locale!=="ko"?null:t.data;default:return null}}var H0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!H0[e.type]:t==="textarea"}function Ru(e,t,r,s){au(s),t=Da(t,"onChange"),0<t.length&&(r=new dl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var cs=null,js=null;function W0(e){Ou(e,0)}function si(e){var t=hr(e);if(Jd(t))return e}function G0(e,t){if(e==="change")return t}var Tu=!1;if(dn){var Ri;if(dn){var Ti="oninput"in document;if(!Ti){var jc=document.createElement("div");jc.setAttribute("oninput","return;"),Ti=typeof jc.oninput=="function"}Ri=Ti}else Ri=!1;Tu=Ri&&(!document.documentMode||9<document.documentMode)}function Nc(){cs&&(cs.detachEvent("onpropertychange",_u),js=cs=null)}function _u(e){if(e.propertyName==="value"&&si(js)){var t=[];Ru(t,js,e,sl(e)),cu(W0,t)}}function V0(e,t,r){e==="focusin"?(Nc(),cs=t,js=r,cs.attachEvent("onpropertychange",_u)):e==="focusout"&&Nc()}function X0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si(js)}function K0(e,t){if(e==="click")return si(t)}function J0(e,t){if(e==="input"||e==="change")return si(t)}function Z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:Z0;function Ns(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!Zi.call(t,a)||!qt(e[a],t[a]))return!1}return!0}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sc(e,t){var r=kc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=kc(r)}}function Pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Au(){for(var e=window,t=Ta();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ta(e.document)}return t}function ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function eh(e){var t=Au(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Pu(r.ownerDocument.documentElement,r)){if(s!==null&&ml(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=Sc(r,i);var o=Sc(r,s);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var th=dn&&"documentMode"in document&&11>=document.documentMode,fr=null,yo=null,ds=null,bo=!1;function Cc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;bo||fr==null||fr!==Ta(s)||(s=fr,"selectionStart"in s&&ml(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ds&&Ns(ds,s)||(ds=s,s=Da(yo,"onSelect"),0<s.length&&(t=new dl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=fr)))}function Xs(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var mr={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionend:Xs("Transition","TransitionEnd")},_i={},Lu={};dn&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function ai(e){if(_i[e])return _i[e];if(!mr[e])return e;var t=mr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Lu)return _i[e]=t[r];return e}var Iu=ai("animationend"),Mu=ai("animationiteration"),Du=ai("animationstart"),zu=ai("transitionend"),Fu=new Map,Ec="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){Fu.set(e,t),sr(t,[e])}for(var Pi=0;Pi<Ec.length;Pi++){var Ai=Ec[Pi],nh=Ai.toLowerCase(),rh=Ai[0].toUpperCase()+Ai.slice(1);On(nh,"on"+rh)}On(Iu,"onAnimationEnd");On(Mu,"onAnimationIteration");On(Du,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(zu,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var as="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sh=new Set("cancel close invalid load scroll toggle".split(" ").concat(as));function Rc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,n0(s,t,void 0,e),e.currentTarget=null}function Ou(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var o=s.length-1;0<=o;o--){var l=s[o],d=l.instance,c=l.currentTarget;if(l=l.listener,d!==i&&a.isPropagationStopped())break e;Rc(a,l,c),i=d}else for(o=0;o<s.length;o++){if(l=s[o],d=l.instance,c=l.currentTarget,l=l.listener,d!==i&&a.isPropagationStopped())break e;Rc(a,l,c),i=d}}}if(Pa)throw e=po,Pa=!1,po=null,e}function ze(e,t){var r=t[So];r===void 0&&(r=t[So]=new Set);var s=e+"__bubble";r.has(s)||($u(t,e,2,!1),r.add(s))}function Li(e,t,r){var s=0;t&&(s|=4),$u(r,e,s,t)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function ks(e){if(!e[Ks]){e[Ks]=!0,Wd.forEach(function(r){r!=="selectionchange"&&(sh.has(r)||Li(r,!1,e),Li(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ks]||(t[Ks]=!0,Li("selectionchange",!1,t))}}function $u(e,t,r,s){switch(Nu(t)){case 1:var a=v0;break;case 4:a=y0;break;default:a=ll}r=a.bind(null,t,r,e),a=void 0,!ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Ii(e,t,r,s,a){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=s.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Qn(l),o===null)return;if(d=o.tag,d===5||d===6){s=i=o;continue e}l=l.parentNode}}s=s.return}cu(function(){var c=i,f=sl(r),x=[];e:{var m=Fu.get(e);if(m!==void 0){var y=dl,p=e;switch(e){case"keypress":if(ga(r)===0)break e;case"keydown":case"keyup":y=I0;break;case"focusin":p="focus",y=Ei;break;case"focusout":p="blur",y=Ei;break;case"beforeblur":case"afterblur":y=Ei;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=z0;break;case Iu:case Mu:case Du:y=S0;break;case zu:y=O0;break;case"scroll":y=b0;break;case"wheel":y=B0;break;case"copy":case"cut":case"paste":y=E0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=vc}var j=(t&4)!==0,k=!j&&e==="scroll",v=j?m!==null?m+"Capture":null:m;j=[];for(var h=c,g;h!==null;){g=h;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,v!==null&&(C=vs(h,v),C!=null&&j.push(Ss(h,C,g)))),k)break;h=h.return}0<j.length&&(m=new y(m,p,null,r,f),x.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&r!==fo&&(p=r.relatedTarget||r.fromElement)&&(Qn(p)||p[un]))break e;if((y||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,y?(p=r.relatedTarget||r.toElement,y=c,p=p?Qn(p):null,p!==null&&(k=ar(p),p!==k||p.tag!==5&&p.tag!==6)&&(p=null)):(y=null,p=c),y!==p)){if(j=xc,C="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(j=vc,C="onPointerLeave",v="onPointerEnter",h="pointer"),k=y==null?m:hr(y),g=p==null?m:hr(p),m=new j(C,h+"leave",y,r,f),m.target=k,m.relatedTarget=g,C=null,Qn(f)===c&&(j=new j(v,h+"enter",p,r,f),j.target=g,j.relatedTarget=k,C=j),k=C,y&&p)t:{for(j=y,v=p,h=0,g=j;g;g=lr(g))h++;for(g=0,C=v;C;C=lr(C))g++;for(;0<h-g;)j=lr(j),h--;for(;0<g-h;)v=lr(v),g--;for(;h--;){if(j===v||v!==null&&j===v.alternate)break t;j=lr(j),v=lr(v)}j=null}else j=null;y!==null&&Tc(x,m,y,j,!1),p!==null&&k!==null&&Tc(x,k,p,j,!0)}}e:{if(m=c?hr(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var E=G0;else if(wc(m))if(Tu)E=J0;else{E=X0;var A=V0}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=K0);if(E&&(E=E(e,c))){Ru(x,E,r,f);break e}A&&A(e,m,c),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&io(m,"number",m.value)}switch(A=c?hr(c):window,e){case"focusin":(wc(A)||A.contentEditable==="true")&&(fr=A,yo=c,ds=null);break;case"focusout":ds=yo=fr=null;break;case"mousedown":bo=!0;break;case"contextmenu":case"mouseup":case"dragend":bo=!1,Cc(x,r,f);break;case"selectionchange":if(th)break;case"keydown":case"keyup":Cc(x,r,f)}var S;if(fl)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ur?Cu(e,r)&&(b="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(b="onCompositionStart");b&&(Su&&r.locale!=="ko"&&(ur||b!=="onCompositionStart"?b==="onCompositionEnd"&&ur&&(S=ku()):(En=f,cl="value"in En?En.value:En.textContent,ur=!0)),A=Da(c,b),0<A.length&&(b=new gc(b,e,null,r,f),x.push({event:b,listeners:A}),S?b.data=S:(S=Eu(r),S!==null&&(b.data=S)))),(S=q0?Y0(e,r):Q0(e,r))&&(c=Da(c,"onBeforeInput"),0<c.length&&(f=new gc("onBeforeInput","beforeinput",null,r,f),x.push({event:f,listeners:c}),f.data=S))}Ou(x,t)})}function Ss(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Da(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=vs(e,r),i!=null&&s.unshift(Ss(e,i,a)),i=vs(e,t),i!=null&&s.push(Ss(e,i,a))),e=e.return}return s}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tc(e,t,r,s,a){for(var i=t._reactName,o=[];r!==null&&r!==s;){var l=r,d=l.alternate,c=l.stateNode;if(d!==null&&d===s)break;l.tag===5&&c!==null&&(l=c,a?(d=vs(r,i),d!=null&&o.unshift(Ss(r,d,l))):a||(d=vs(r,i),d!=null&&o.push(Ss(r,d,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var ah=/\r\n?/g,ih=/\u0000|\uFFFD/g;function _c(e){return(typeof e=="string"?e:""+e).replace(ah,`
`).replace(ih,"")}function Js(e,t,r){if(t=_c(t),_c(e)!==t&&r)throw Error(V(425))}function za(){}var wo=null,jo=null;function No(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ko=typeof setTimeout=="function"?setTimeout:void 0,oh=typeof clearTimeout=="function"?clearTimeout:void 0,Pc=typeof Promise=="function"?Promise:void 0,lh=typeof queueMicrotask=="function"?queueMicrotask:typeof Pc<"u"?function(e){return Pc.resolve(null).then(e).catch(ch)}:ko;function ch(e){setTimeout(function(){throw e})}function Mi(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),ws(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);ws(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ac(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),Kt="__reactFiber$"+zr,Cs="__reactProps$"+zr,un="__reactContainer$"+zr,So="__reactEvents$"+zr,dh="__reactListeners$"+zr,uh="__reactHandles$"+zr;function Qn(e){var t=e[Kt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[un]||r[Kt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ac(e);e!==null;){if(r=e[Kt])return r;e=Ac(e)}return t}e=r,r=e.parentNode}return null}function zs(e){return e=e[Kt]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function ii(e){return e[Cs]||null}var Co=[],pr=-1;function $n(e){return{current:e}}function Oe(e){0>pr||(e.current=Co[pr],Co[pr]=null,pr--)}function Me(e,t){pr++,Co[pr]=e.current,e.current=t}var Fn={},ut=$n(Fn),yt=$n(!1),Zn=Fn;function Tr(e,t){var r=e.type.contextTypes;if(!r)return Fn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function bt(e){return e=e.childContextTypes,e!=null}function Fa(){Oe(yt),Oe(ut)}function Lc(e,t,r){if(ut.current!==Fn)throw Error(V(168));Me(ut,t),Me(yt,r)}function Bu(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(V(108,Vm(e)||"Unknown",a));return Qe({},r,s)}function Oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,Zn=ut.current,Me(ut,e),Me(yt,yt.current),!0}function Ic(e,t,r){var s=e.stateNode;if(!s)throw Error(V(169));r?(e=Bu(e,t,Zn),s.__reactInternalMemoizedMergedChildContext=e,Oe(yt),Oe(ut),Me(ut,e)):Oe(yt),Me(yt,r)}var sn=null,oi=!1,Di=!1;function Uu(e){sn===null?sn=[e]:sn.push(e)}function fh(e){oi=!0,Uu(e)}function Bn(){if(!Di&&sn!==null){Di=!0;var e=0,t=Te;try{var r=sn;for(Te=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}sn=null,oi=!1}catch(a){throw sn!==null&&(sn=sn.slice(e+1)),mu(al,Bn),a}finally{Te=t,Di=!1}}return null}var xr=[],gr=0,$a=null,Ba=0,Tt=[],_t=0,er=null,an=1,on="";function qn(e,t){xr[gr++]=Ba,xr[gr++]=$a,$a=e,Ba=t}function qu(e,t,r){Tt[_t++]=an,Tt[_t++]=on,Tt[_t++]=er,er=e;var s=an;e=on;var a=32-Bt(s)-1;s&=~(1<<a),r+=1;var i=32-Bt(t)+a;if(30<i){var o=a-a%5;i=(s&(1<<o)-1).toString(32),s>>=o,a-=o,an=1<<32-Bt(t)+a|r<<a|s,on=i+e}else an=1<<i|r<<a|s,on=e}function hl(e){e.return!==null&&(qn(e,1),qu(e,1,0))}function pl(e){for(;e===$a;)$a=xr[--gr],xr[gr]=null,Ba=xr[--gr],xr[gr]=null;for(;e===er;)er=Tt[--_t],Tt[_t]=null,on=Tt[--_t],Tt[_t]=null,an=Tt[--_t],Tt[_t]=null}var St=null,kt=null,$e=!1,$t=null;function Yu(e,t){var r=Pt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Mc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,St=e,kt=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,St=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=er!==null?{id:an,overflow:on}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Pt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,St=e,kt=null,!0):!1;default:return!1}}function Eo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ro(e){if($e){var t=kt;if(t){var r=t;if(!Mc(e,t)){if(Eo(e))throw Error(V(418));t=An(r.nextSibling);var s=St;t&&Mc(e,t)?Yu(s,r):(e.flags=e.flags&-4097|2,$e=!1,St=e)}}else{if(Eo(e))throw Error(V(418));e.flags=e.flags&-4097|2,$e=!1,St=e}}}function Dc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function Zs(e){if(e!==St)return!1;if(!$e)return Dc(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!No(e.type,e.memoizedProps)),t&&(t=kt)){if(Eo(e))throw Qu(),Error(V(418));for(;t;)Yu(e,t),t=An(t.nextSibling)}if(Dc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){kt=An(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=St?An(e.stateNode.nextSibling):null;return!0}function Qu(){for(var e=kt;e;)e=An(e.nextSibling)}function _r(){kt=St=null,$e=!1}function xl(e){$t===null?$t=[e]:$t.push(e)}var mh=pn.ReactCurrentBatchConfig;function Wr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(V(309));var s=r.stateNode}if(!s)throw Error(V(147,e));var a=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(V(284));if(!r._owner)throw Error(V(290,e))}return e}function ea(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zc(e){var t=e._init;return t(e._payload)}function Hu(e){function t(v,h){if(e){var g=v.deletions;g===null?(v.deletions=[h],v.flags|=16):g.push(h)}}function r(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function s(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function a(v,h){return v=Dn(v,h),v.index=0,v.sibling=null,v}function i(v,h,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<h?(v.flags|=2,h):g):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,h,g,C){return h===null||h.tag!==6?(h=qi(g,v.mode,C),h.return=v,h):(h=a(h,g),h.return=v,h)}function d(v,h,g,C){var E=g.type;return E===dr?f(v,h,g.props.children,C,g.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jn&&zc(E)===h.type)?(C=a(h,g.props),C.ref=Wr(v,h,g),C.return=v,C):(C=ka(g.type,g.key,g.props,null,v.mode,C),C.ref=Wr(v,h,g),C.return=v,C)}function c(v,h,g,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Yi(g,v.mode,C),h.return=v,h):(h=a(h,g.children||[]),h.return=v,h)}function f(v,h,g,C,E){return h===null||h.tag!==7?(h=Kn(g,v.mode,C,E),h.return=v,h):(h=a(h,g),h.return=v,h)}function x(v,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=qi(""+h,v.mode,g),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case qs:return g=ka(h.type,h.key,h.props,null,v.mode,g),g.ref=Wr(v,null,h),g.return=v,g;case cr:return h=Yi(h,v.mode,g),h.return=v,h;case jn:var C=h._init;return x(v,C(h._payload),g)}if(rs(h)||Ur(h))return h=Kn(h,v.mode,g,null),h.return=v,h;ea(v,h)}return null}function m(v,h,g,C){var E=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:l(v,h,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case qs:return g.key===E?d(v,h,g,C):null;case cr:return g.key===E?c(v,h,g,C):null;case jn:return E=g._init,m(v,h,E(g._payload),C)}if(rs(g)||Ur(g))return E!==null?null:f(v,h,g,C,null);ea(v,g)}return null}function y(v,h,g,C,E){if(typeof C=="string"&&C!==""||typeof C=="number")return v=v.get(g)||null,l(h,v,""+C,E);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case qs:return v=v.get(C.key===null?g:C.key)||null,d(h,v,C,E);case cr:return v=v.get(C.key===null?g:C.key)||null,c(h,v,C,E);case jn:var A=C._init;return y(v,h,g,A(C._payload),E)}if(rs(C)||Ur(C))return v=v.get(g)||null,f(h,v,C,E,null);ea(h,C)}return null}function p(v,h,g,C){for(var E=null,A=null,S=h,b=h=0,w=null;S!==null&&b<g.length;b++){S.index>b?(w=S,S=null):w=S.sibling;var N=m(v,S,g[b],C);if(N===null){S===null&&(S=w);break}e&&S&&N.alternate===null&&t(v,S),h=i(N,h,b),A===null?E=N:A.sibling=N,A=N,S=w}if(b===g.length)return r(v,S),$e&&qn(v,b),E;if(S===null){for(;b<g.length;b++)S=x(v,g[b],C),S!==null&&(h=i(S,h,b),A===null?E=S:A.sibling=S,A=S);return $e&&qn(v,b),E}for(S=s(v,S);b<g.length;b++)w=y(S,v,b,g[b],C),w!==null&&(e&&w.alternate!==null&&S.delete(w.key===null?b:w.key),h=i(w,h,b),A===null?E=w:A.sibling=w,A=w);return e&&S.forEach(function(T){return t(v,T)}),$e&&qn(v,b),E}function j(v,h,g,C){var E=Ur(g);if(typeof E!="function")throw Error(V(150));if(g=E.call(g),g==null)throw Error(V(151));for(var A=E=null,S=h,b=h=0,w=null,N=g.next();S!==null&&!N.done;b++,N=g.next()){S.index>b?(w=S,S=null):w=S.sibling;var T=m(v,S,N.value,C);if(T===null){S===null&&(S=w);break}e&&S&&T.alternate===null&&t(v,S),h=i(T,h,b),A===null?E=T:A.sibling=T,A=T,S=w}if(N.done)return r(v,S),$e&&qn(v,b),E;if(S===null){for(;!N.done;b++,N=g.next())N=x(v,N.value,C),N!==null&&(h=i(N,h,b),A===null?E=N:A.sibling=N,A=N);return $e&&qn(v,b),E}for(S=s(v,S);!N.done;b++,N=g.next())N=y(S,v,b,N.value,C),N!==null&&(e&&N.alternate!==null&&S.delete(N.key===null?b:N.key),h=i(N,h,b),A===null?E=N:A.sibling=N,A=N);return e&&S.forEach(function(D){return t(v,D)}),$e&&qn(v,b),E}function k(v,h,g,C){if(typeof g=="object"&&g!==null&&g.type===dr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case qs:e:{for(var E=g.key,A=h;A!==null;){if(A.key===E){if(E=g.type,E===dr){if(A.tag===7){r(v,A.sibling),h=a(A,g.props.children),h.return=v,v=h;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jn&&zc(E)===A.type){r(v,A.sibling),h=a(A,g.props),h.ref=Wr(v,A,g),h.return=v,v=h;break e}r(v,A);break}else t(v,A);A=A.sibling}g.type===dr?(h=Kn(g.props.children,v.mode,C,g.key),h.return=v,v=h):(C=ka(g.type,g.key,g.props,null,v.mode,C),C.ref=Wr(v,h,g),C.return=v,v=C)}return o(v);case cr:e:{for(A=g.key;h!==null;){if(h.key===A)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){r(v,h.sibling),h=a(h,g.children||[]),h.return=v,v=h;break e}else{r(v,h);break}else t(v,h);h=h.sibling}h=Yi(g,v.mode,C),h.return=v,v=h}return o(v);case jn:return A=g._init,k(v,h,A(g._payload),C)}if(rs(g))return p(v,h,g,C);if(Ur(g))return j(v,h,g,C);ea(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(r(v,h.sibling),h=a(h,g),h.return=v,v=h):(r(v,h),h=qi(g,v.mode,C),h.return=v,v=h),o(v)):r(v,h)}return k}var Pr=Hu(!0),Wu=Hu(!1),Ua=$n(null),qa=null,vr=null,gl=null;function vl(){gl=vr=qa=null}function yl(e){var t=Ua.current;Oe(Ua),e._currentValue=t}function To(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Sr(e,t){qa=e,gl=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(vt=!0),e.firstContext=null)}function It(e){var t=e._currentValue;if(gl!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(qa===null)throw Error(V(308));vr=e,qa.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var Hn=null;function bl(e){Hn===null?Hn=[e]:Hn.push(e)}function Gu(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,bl(t)):(r.next=a.next,a.next=r),t.interleaved=r,fn(e,s)}function fn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Nn=!1;function wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ln(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,ke&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,fn(e,r)}return a=s.interleaved,a===null?(t.next=t,bl(s)):(t.next=a.next,a.next=t),s.interleaved=t,fn(e,r)}function va(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,il(e,r)}}function Fc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=o:i=i.next=o,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ya(e,t,r,s){var a=e.updateQueue;Nn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var d=l,c=d.next;d.next=null,o===null?i=c:o.next=c,o=d;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=d))}if(i!==null){var x=a.baseState;o=0,f=c=d=null,l=i;do{var m=l.lane,y=l.eventTime;if((s&m)===m){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=e,j=l;switch(m=t,y=r,j.tag){case 1:if(p=j.payload,typeof p=="function"){x=p.call(y,x,m);break e}x=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=j.payload,m=typeof p=="function"?p.call(y,x,m):p,m==null)break e;x=Qe({},x,m);break e;case 2:Nn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else y={eventTime:y,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=y,d=x):f=f.next=y,o|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(f===null&&(d=x),a.baseState=d,a.firstBaseUpdate=c,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);nr|=o,e.lanes=o,e.memoizedState=x}}function Oc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(V(191,a));a.call(s)}}}var Fs={},Zt=$n(Fs),Es=$n(Fs),Rs=$n(Fs);function Wn(e){if(e===Fs)throw Error(V(174));return e}function jl(e,t){switch(Me(Rs,t),Me(Es,e),Me(Zt,Fs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lo(t,e)}Oe(Zt),Me(Zt,t)}function Ar(){Oe(Zt),Oe(Es),Oe(Rs)}function Xu(e){Wn(Rs.current);var t=Wn(Zt.current),r=lo(t,e.type);t!==r&&(Me(Es,e),Me(Zt,r))}function Nl(e){Es.current===e&&(Oe(Zt),Oe(Es))}var qe=$n(0);function Qa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zi=[];function kl(){for(var e=0;e<zi.length;e++)zi[e]._workInProgressVersionPrimary=null;zi.length=0}var ya=pn.ReactCurrentDispatcher,Fi=pn.ReactCurrentBatchConfig,tr=0,Ye=null,Xe=null,et=null,Ha=!1,us=!1,Ts=0,hh=0;function ot(){throw Error(V(321))}function Sl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!qt(e[r],t[r]))return!1;return!0}function Cl(e,t,r,s,a,i){if(tr=i,Ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ya.current=e===null||e.memoizedState===null?vh:yh,e=r(s,a),us){i=0;do{if(us=!1,Ts=0,25<=i)throw Error(V(301));i+=1,et=Xe=null,t.updateQueue=null,ya.current=bh,e=r(s,a)}while(us)}if(ya.current=Wa,t=Xe!==null&&Xe.next!==null,tr=0,et=Xe=Ye=null,Ha=!1,t)throw Error(V(300));return e}function El(){var e=Ts!==0;return Ts=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ye.memoizedState=et=e:et=et.next=e,et}function Mt(){if(Xe===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=et===null?Ye.memoizedState:et.next;if(t!==null)et=t,Xe=e;else{if(e===null)throw Error(V(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},et===null?Ye.memoizedState=et=e:et=et.next=e}return et}function _s(e,t){return typeof t=="function"?t(e):t}function Oi(e){var t=Mt(),r=t.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=e;var s=Xe,a=s.baseQueue,i=r.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}s.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,s=s.baseState;var l=o=null,d=null,c=i;do{var f=c.lane;if((tr&f)===f)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),s=c.hasEagerState?c.eagerState:e(s,c.action);else{var x={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(l=d=x,o=s):d=d.next=x,Ye.lanes|=f,nr|=f}c=c.next}while(c!==null&&c!==i);d===null?o=s:d.next=l,qt(s,t.memoizedState)||(vt=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=d,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do i=a.lane,Ye.lanes|=i,nr|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function $i(e){var t=Mt(),r=t.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);qt(i,t.memoizedState)||(vt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,s]}function Ku(){}function Ju(e,t){var r=Ye,s=Mt(),a=t(),i=!qt(s.memoizedState,a);if(i&&(s.memoizedState=a,vt=!0),s=s.queue,Rl(tf.bind(null,r,s,e),[e]),s.getSnapshot!==t||i||et!==null&&et.memoizedState.tag&1){if(r.flags|=2048,Ps(9,ef.bind(null,r,s,a,t),void 0,null),tt===null)throw Error(V(349));tr&30||Zu(r,t,a)}return a}function Zu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function ef(e,t,r,s){t.value=r,t.getSnapshot=s,nf(t)&&rf(e)}function tf(e,t,r){return r(function(){nf(t)&&rf(e)})}function nf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!qt(e,r)}catch{return!0}}function rf(e){var t=fn(e,1);t!==null&&Ut(t,e,1,-1)}function $c(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_s,lastRenderedState:e},t.queue=e,e=e.dispatch=gh.bind(null,Ye,e),[t.memoizedState,e]}function Ps(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function sf(){return Mt().memoizedState}function ba(e,t,r,s){var a=Vt();Ye.flags|=e,a.memoizedState=Ps(1|t,r,void 0,s===void 0?null:s)}function li(e,t,r,s){var a=Mt();s=s===void 0?null:s;var i=void 0;if(Xe!==null){var o=Xe.memoizedState;if(i=o.destroy,s!==null&&Sl(s,o.deps)){a.memoizedState=Ps(t,r,i,s);return}}Ye.flags|=e,a.memoizedState=Ps(1|t,r,i,s)}function Bc(e,t){return ba(8390656,8,e,t)}function Rl(e,t){return li(2048,8,e,t)}function af(e,t){return li(4,2,e,t)}function of(e,t){return li(4,4,e,t)}function lf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cf(e,t,r){return r=r!=null?r.concat([e]):null,li(4,4,lf.bind(null,t,e),r)}function Tl(){}function df(e,t){var r=Mt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Sl(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function uf(e,t){var r=Mt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Sl(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function ff(e,t,r){return tr&21?(qt(r,t)||(r=xu(),Ye.lanes|=r,nr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=r)}function ph(e,t){var r=Te;Te=r!==0&&4>r?r:4,e(!0);var s=Fi.transition;Fi.transition={};try{e(!1),t()}finally{Te=r,Fi.transition=s}}function mf(){return Mt().memoizedState}function xh(e,t,r){var s=Mn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},hf(e))pf(t,r);else if(r=Gu(e,t,r,s),r!==null){var a=ht();Ut(r,e,s,a),xf(r,t,s)}}function gh(e,t,r){var s=Mn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(hf(e))pf(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,r);if(a.hasEagerState=!0,a.eagerState=l,qt(l,o)){var d=t.interleaved;d===null?(a.next=a,bl(t)):(a.next=d.next,d.next=a),t.interleaved=a;return}}catch{}finally{}r=Gu(e,t,a,s),r!==null&&(a=ht(),Ut(r,e,s,a),xf(r,t,s))}}function hf(e){var t=e.alternate;return e===Ye||t!==null&&t===Ye}function pf(e,t){us=Ha=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function xf(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,il(e,r)}}var Wa={readContext:It,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},vh={readContext:It,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:It,useEffect:Bc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ba(4194308,4,lf.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ba(4194308,4,e,t)},useInsertionEffect:function(e,t){return ba(4,2,e,t)},useMemo:function(e,t){var r=Vt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=Vt();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=xh.bind(null,Ye,e),[s.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:$c,useDebugValue:Tl,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=$c(!1),t=e[0];return e=ph.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Ye,a=Vt();if($e){if(r===void 0)throw Error(V(407));r=r()}else{if(r=t(),tt===null)throw Error(V(349));tr&30||Zu(s,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,Bc(tf.bind(null,s,i,e),[e]),s.flags|=2048,Ps(9,ef.bind(null,s,i,r,t),void 0,null),r},useId:function(){var e=Vt(),t=tt.identifierPrefix;if($e){var r=on,s=an;r=(s&~(1<<32-Bt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ts++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=hh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yh={readContext:It,useCallback:df,useContext:It,useEffect:Rl,useImperativeHandle:cf,useInsertionEffect:af,useLayoutEffect:of,useMemo:uf,useReducer:Oi,useRef:sf,useState:function(){return Oi(_s)},useDebugValue:Tl,useDeferredValue:function(e){var t=Mt();return ff(t,Xe.memoizedState,e)},useTransition:function(){var e=Oi(_s)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:Ku,useSyncExternalStore:Ju,useId:mf,unstable_isNewReconciler:!1},bh={readContext:It,useCallback:df,useContext:It,useEffect:Rl,useImperativeHandle:cf,useInsertionEffect:af,useLayoutEffect:of,useMemo:uf,useReducer:$i,useRef:sf,useState:function(){return $i(_s)},useDebugValue:Tl,useDeferredValue:function(e){var t=Mt();return Xe===null?t.memoizedState=e:ff(t,Xe.memoizedState,e)},useTransition:function(){var e=$i(_s)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:Ku,useSyncExternalStore:Ju,useId:mf,unstable_isNewReconciler:!1};function Ft(e,t){if(e&&e.defaultProps){t=Qe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function _o(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Qe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ci={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=ht(),a=Mn(e),i=ln(s,a);i.payload=t,r!=null&&(i.callback=r),t=Ln(e,i,a),t!==null&&(Ut(t,e,a,s),va(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=ht(),a=Mn(e),i=ln(s,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Ln(e,i,a),t!==null&&(Ut(t,e,a,s),va(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ht(),s=Mn(e),a=ln(r,s);a.tag=2,t!=null&&(a.callback=t),t=Ln(e,a,s),t!==null&&(Ut(t,e,s,r),va(t,e,s))}};function Uc(e,t,r,s,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ns(r,s)||!Ns(a,i):!0}function gf(e,t,r){var s=!1,a=Fn,i=t.contextType;return typeof i=="object"&&i!==null?i=It(i):(a=bt(t)?Zn:ut.current,s=t.contextTypes,i=(s=s!=null)?Tr(e,a):Fn),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function qc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function Po(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},wl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=It(i):(i=bt(t)?Zn:ut.current,a.context=Tr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(_o(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ci.enqueueReplaceState(a,a.state,null),Ya(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t){try{var r="",s=t;do r+=Gm(s),s=s.return;while(s);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Bi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ao(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var wh=typeof WeakMap=="function"?WeakMap:Map;function vf(e,t,r){r=ln(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){Va||(Va=!0,Uo=s),Ao(e,t)},r}function yf(e,t,r){r=ln(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Ao(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Ao(e,t),typeof s!="function"&&(In===null?In=new Set([this]):In.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Yc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new wh;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=Mh.bind(null,e,t,r),t.then(e,e))}function Qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hc(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ln(-1,1),t.tag=2,Ln(r,t,1))),r.lanes|=1),e)}var jh=pn.ReactCurrentOwner,vt=!1;function mt(e,t,r,s){t.child=e===null?Wu(t,null,r,s):Pr(t,e.child,r,s)}function Wc(e,t,r,s,a){r=r.render;var i=t.ref;return Sr(t,a),s=Cl(e,t,r,s,i,a),r=El(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,mn(e,t,a)):($e&&r&&hl(t),t.flags|=1,mt(e,t,s,a),t.child)}function Gc(e,t,r,s,a){if(e===null){var i=r.type;return typeof i=="function"&&!zl(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,bf(e,t,i,s,a)):(e=ka(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(r=r.compare,r=r!==null?r:Ns,r(o,s)&&e.ref===t.ref)return mn(e,t,a)}return t.flags|=1,e=Dn(i,s),e.ref=t.ref,e.return=t,t.child=e}function bf(e,t,r,s,a){if(e!==null){var i=e.memoizedProps;if(Ns(i,s)&&e.ref===t.ref)if(vt=!1,t.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(vt=!0);else return t.lanes=e.lanes,mn(e,t,a)}return Lo(e,t,r,s,a)}function wf(e,t,r){var s=t.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(br,Nt),Nt|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(br,Nt),Nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:r,Me(br,Nt),Nt|=s}else i!==null?(s=i.baseLanes|r,t.memoizedState=null):s=r,Me(br,Nt),Nt|=s;return mt(e,t,a,r),t.child}function jf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Lo(e,t,r,s,a){var i=bt(r)?Zn:ut.current;return i=Tr(t,i),Sr(t,a),r=Cl(e,t,r,s,i,a),s=El(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,mn(e,t,a)):($e&&s&&hl(t),t.flags|=1,mt(e,t,r,a),t.child)}function Vc(e,t,r,s,a){if(bt(r)){var i=!0;Oa(t)}else i=!1;if(Sr(t,a),t.stateNode===null)wa(e,t),gf(t,r,s),Po(t,r,s,a),s=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var d=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=It(c):(c=bt(r)?Zn:ut.current,c=Tr(t,c));var f=r.getDerivedStateFromProps,x=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==s||d!==c)&&qc(t,o,s,c),Nn=!1;var m=t.memoizedState;o.state=m,Ya(t,s,o,a),d=t.memoizedState,l!==s||m!==d||yt.current||Nn?(typeof f=="function"&&(_o(t,r,f,s),d=t.memoizedState),(l=Nn||Uc(t,r,l,s,m,d,c))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=d),o.props=s,o.state=d,o.context=c,s=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,Vu(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ft(t.type,l),o.props=c,x=t.pendingProps,m=o.context,d=r.contextType,typeof d=="object"&&d!==null?d=It(d):(d=bt(r)?Zn:ut.current,d=Tr(t,d));var y=r.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==x||m!==d)&&qc(t,o,s,d),Nn=!1,m=t.memoizedState,o.state=m,Ya(t,s,o,a);var p=t.memoizedState;l!==x||m!==p||yt.current||Nn?(typeof y=="function"&&(_o(t,r,y,s),p=t.memoizedState),(c=Nn||Uc(t,r,c,s,m,p,d)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,p,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,p,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=p),o.props=s,o.state=p,o.context=d,s=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),s=!1)}return Io(e,t,r,s,i,a)}function Io(e,t,r,s,a,i){jf(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return a&&Ic(t,r,!1),mn(e,t,i);s=t.stateNode,jh.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=Pr(t,e.child,null,i),t.child=Pr(t,null,l,i)):mt(e,t,l,i),t.memoizedState=s.state,a&&Ic(t,r,!0),t.child}function Nf(e){var t=e.stateNode;t.pendingContext?Lc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lc(e,t.context,!1),jl(e,t.containerInfo)}function Xc(e,t,r,s,a){return _r(),xl(a),t.flags|=256,mt(e,t,r,s),t.child}var Mo={dehydrated:null,treeContext:null,retryLane:0};function Do(e){return{baseLanes:e,cachePool:null,transitions:null}}function kf(e,t,r){var s=t.pendingProps,a=qe.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Me(qe,a&1),e===null)return Ro(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,i?(s=t.mode,i=t.child,o={mode:"hidden",children:o},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fi(o,s,0,null),e=Kn(e,s,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Do(r),t.memoizedState=Mo,e):_l(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Nh(e,t,o,s,l,a,r);if(i){i=s.fallback,o=t.mode,a=e.child,l=a.sibling;var d={mode:"hidden",children:s.children};return!(o&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=d,t.deletions=null):(s=Dn(a,d),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Dn(l,i):(i=Kn(i,o,r,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,o=e.child.memoizedState,o=o===null?Do(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~r,t.memoizedState=Mo,s}return i=e.child,e=i.sibling,s=Dn(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function _l(e,t){return t=fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ta(e,t,r,s){return s!==null&&xl(s),Pr(t,e.child,null,r),e=_l(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nh(e,t,r,s,a,i,o){if(r)return t.flags&256?(t.flags&=-257,s=Bi(Error(V(422))),ta(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,a=t.mode,s=fi({mode:"visible",children:s.children},a,0,null),i=Kn(i,a,o,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&Pr(t,e.child,null,o),t.child.memoizedState=Do(o),t.memoizedState=Mo,i);if(!(t.mode&1))return ta(e,t,o,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(V(419)),s=Bi(i,s,void 0),ta(e,t,o,s)}if(l=(o&e.childLanes)!==0,vt||l){if(s=tt,s!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,fn(e,a),Ut(s,e,a,-1))}return Dl(),s=Bi(Error(V(421))),ta(e,t,o,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Dh.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,kt=An(a.nextSibling),St=t,$e=!0,$t=null,e!==null&&(Tt[_t++]=an,Tt[_t++]=on,Tt[_t++]=er,an=e.id,on=e.overflow,er=t),t=_l(t,s.children),t.flags|=4096,t)}function Kc(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),To(e.return,t,r)}function Ui(e,t,r,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=r,i.tailMode=a)}function Sf(e,t,r){var s=t.pendingProps,a=s.revealOrder,i=s.tail;if(mt(e,t,s.children,r),s=qe.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kc(e,r,t);else if(e.tag===19)Kc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Me(qe,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Qa(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Ui(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Qa(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Ui(t,!0,r,null,i);break;case"together":Ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),nr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,r=Dn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Dn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function kh(e,t,r){switch(t.tag){case 3:Nf(t),_r();break;case 5:Xu(t);break;case 1:bt(t.type)&&Oa(t);break;case 4:jl(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;Me(Ua,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Me(qe,qe.current&1),t.flags|=128,null):r&t.child.childLanes?kf(e,t,r):(Me(qe,qe.current&1),e=mn(e,t,r),e!==null?e.sibling:null);Me(qe,qe.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Sf(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Me(qe,qe.current),s)break;return null;case 22:case 23:return t.lanes=0,wf(e,t,r)}return mn(e,t,r)}var Cf,zo,Ef,Rf;Cf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};zo=function(){};Ef=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,Wn(Zt.current);var i=null;switch(r){case"input":a=so(e,a),s=so(e,s),i=[];break;case"select":a=Qe({},a,{value:void 0}),s=Qe({},s,{value:void 0}),i=[];break;case"textarea":a=oo(e,a),s=oo(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=za)}co(r,s);var o;r=null;for(c in a)if(!s.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var l=a[c];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xs.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in s){var d=s[c];if(l=a!=null?a[c]:void 0,s.hasOwnProperty(c)&&d!==l&&(d!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in d)d.hasOwnProperty(o)&&l[o]!==d[o]&&(r||(r={}),r[o]=d[o])}else r||(i||(i=[]),i.push(c,r)),r=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(i=i||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xs.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&ze("scroll",e),i||l===d||(i=[])):(i=i||[]).push(c,d))}r&&(i=i||[]).push("style",r);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Rf=function(e,t,r,s){r!==s&&(t.flags|=4)};function Gr(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Sh(e,t,r){var s=t.pendingProps;switch(pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return bt(t.type)&&Fa(),lt(t),null;case 3:return s=t.stateNode,Ar(),Oe(yt),Oe(ut),kl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Zs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$t!==null&&(Qo($t),$t=null))),zo(e,t),lt(t),null;case 5:Nl(t);var a=Wn(Rs.current);if(r=t.type,e!==null&&t.stateNode!=null)Ef(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(V(166));return lt(t),null}if(e=Wn(Zt.current),Zs(t)){s=t.stateNode,r=t.type;var i=t.memoizedProps;switch(s[Kt]=t,s[Cs]=i,e=(t.mode&1)!==0,r){case"dialog":ze("cancel",s),ze("close",s);break;case"iframe":case"object":case"embed":ze("load",s);break;case"video":case"audio":for(a=0;a<as.length;a++)ze(as[a],s);break;case"source":ze("error",s);break;case"img":case"image":case"link":ze("error",s),ze("load",s);break;case"details":ze("toggle",s);break;case"input":ic(s,i),ze("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},ze("invalid",s);break;case"textarea":lc(s,i),ze("invalid",s)}co(r,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&Js(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Js(s.textContent,l,e),a=["children",""+l]):xs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ze("scroll",s)}switch(r){case"input":Ys(s),oc(s,i,!0);break;case"textarea":Ys(s),cc(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=za)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(r,{is:s.is}):(e=o.createElement(r),r==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,r),e[Kt]=t,e[Cs]=s,Cf(e,t,!1,!1),t.stateNode=e;e:{switch(o=uo(r,s),r){case"dialog":ze("cancel",e),ze("close",e),a=s;break;case"iframe":case"object":case"embed":ze("load",e),a=s;break;case"video":case"audio":for(a=0;a<as.length;a++)ze(as[a],e);a=s;break;case"source":ze("error",e),a=s;break;case"img":case"image":case"link":ze("error",e),ze("load",e),a=s;break;case"details":ze("toggle",e),a=s;break;case"input":ic(e,s),a=so(e,s),ze("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=Qe({},s,{value:void 0}),ze("invalid",e);break;case"textarea":lc(e,s),a=oo(e,s),ze("invalid",e);break;default:a=s}co(r,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var d=l[i];i==="style"?su(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&nu(e,d)):i==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&gs(e,d):typeof d=="number"&&gs(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(xs.hasOwnProperty(i)?d!=null&&i==="onScroll"&&ze("scroll",e):d!=null&&el(e,i,d,o))}switch(r){case"input":Ys(e),oc(e,s,!1);break;case"textarea":Ys(e),cc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+zn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?wr(e,!!s.multiple,i,!1):s.defaultValue!=null&&wr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=za)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)Rf(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(V(166));if(r=Wn(Rs.current),Wn(Zt.current),Zs(t)){if(s=t.stateNode,r=t.memoizedProps,s[Kt]=t,(i=s.nodeValue!==r)&&(e=St,e!==null))switch(e.tag){case 3:Js(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Js(s.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Kt]=t,t.stateNode=s}return lt(t),null;case 13:if(Oe(qe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&kt!==null&&t.mode&1&&!(t.flags&128))Qu(),_r(),t.flags|=98560,i=!1;else if(i=Zs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(V(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(V(317));i[Kt]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lt(t),i=!1}else $t!==null&&(Qo($t),$t=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?Ke===0&&(Ke=3):Dl())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return Ar(),zo(e,t),e===null&&ks(t.stateNode.containerInfo),lt(t),null;case 10:return yl(t.type._context),lt(t),null;case 17:return bt(t.type)&&Fa(),lt(t),null;case 19:if(Oe(qe),i=t.memoizedState,i===null)return lt(t),null;if(s=(t.flags&128)!==0,o=i.rendering,o===null)if(s)Gr(i,!1);else{if(Ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Qa(e),o!==null){for(t.flags|=128,Gr(i,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)i=r,e=s,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Me(qe,qe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ge()>Ir&&(t.flags|=128,s=!0,Gr(i,!1),t.lanes=4194304)}else{if(!s)if(e=Qa(o),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Gr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!$e)return lt(t),null}else 2*Ge()-i.renderingStartTime>Ir&&r!==1073741824&&(t.flags|=128,s=!0,Gr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(r=i.last,r!==null?r.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ge(),t.sibling=null,r=qe.current,Me(qe,s?r&1|2:r&1),t):(lt(t),null);case 22:case 23:return Ml(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Nt&1073741824&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function Ch(e,t){switch(pl(t),t.tag){case 1:return bt(t.type)&&Fa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ar(),Oe(yt),Oe(ut),kl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Nl(t),null;case 13:if(Oe(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(qe),null;case 4:return Ar(),null;case 10:return yl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var na=!1,dt=!1,Eh=typeof WeakSet=="function"?WeakSet:Set,ie=null;function yr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){He(e,t,s)}else r.current=null}function Fo(e,t,r){try{r()}catch(s){He(e,t,s)}}var Jc=!1;function Rh(e,t){if(wo=Ia,e=Au(),ml(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var o=0,l=-1,d=-1,c=0,f=0,x=e,m=null;t:for(;;){for(var y;x!==r||a!==0&&x.nodeType!==3||(l=o+a),x!==i||s!==0&&x.nodeType!==3||(d=o+s),x.nodeType===3&&(o+=x.nodeValue.length),(y=x.firstChild)!==null;)m=x,x=y;for(;;){if(x===e)break t;if(m===r&&++c===a&&(l=o),m===i&&++f===s&&(d=o),(y=x.nextSibling)!==null)break;x=m,m=x.parentNode}x=y}r=l===-1||d===-1?null:{start:l,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(jo={focusedElem:e,selectionRange:r},Ia=!1,ie=t;ie!==null;)if(t=ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ie=e;else for(;ie!==null;){t=ie;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var j=p.memoizedProps,k=p.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?j:Ft(t.type,j),k);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(C){He(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,ie=e;break}ie=t.return}return p=Jc,Jc=!1,p}function fs(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Fo(t,r,i)}a=a.next}while(a!==s)}}function di(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Oo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Tf(e){var t=e.alternate;t!==null&&(e.alternate=null,Tf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kt],delete t[Cs],delete t[So],delete t[dh],delete t[uh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _f(e){return e.tag===5||e.tag===3||e.tag===4}function Zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $o(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=za));else if(s!==4&&(e=e.child,e!==null))for($o(e,t,r),e=e.sibling;e!==null;)$o(e,t,r),e=e.sibling}function Bo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Bo(e,t,r),e=e.sibling;e!==null;)Bo(e,t,r),e=e.sibling}var nt=null,Ot=!1;function vn(e,t,r){for(r=r.child;r!==null;)Pf(e,t,r),r=r.sibling}function Pf(e,t,r){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(ni,r)}catch{}switch(r.tag){case 5:dt||yr(r,t);case 6:var s=nt,a=Ot;nt=null,vn(e,t,r),nt=s,Ot=a,nt!==null&&(Ot?(e=nt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):nt.removeChild(r.stateNode));break;case 18:nt!==null&&(Ot?(e=nt,r=r.stateNode,e.nodeType===8?Mi(e.parentNode,r):e.nodeType===1&&Mi(e,r),ws(e)):Mi(nt,r.stateNode));break;case 4:s=nt,a=Ot,nt=r.stateNode.containerInfo,Ot=!0,vn(e,t,r),nt=s,Ot=a;break;case 0:case 11:case 14:case 15:if(!dt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Fo(r,t,o),a=a.next}while(a!==s)}vn(e,t,r);break;case 1:if(!dt&&(yr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(l){He(r,t,l)}vn(e,t,r);break;case 21:vn(e,t,r);break;case 22:r.mode&1?(dt=(s=dt)||r.memoizedState!==null,vn(e,t,r),dt=s):vn(e,t,r);break;default:vn(e,t,r)}}function ed(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Eh),t.forEach(function(s){var a=zh.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function zt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,Ot=!1;break e;case 3:nt=l.stateNode.containerInfo,Ot=!0;break e;case 4:nt=l.stateNode.containerInfo,Ot=!0;break e}l=l.return}if(nt===null)throw Error(V(160));Pf(i,o,a),nt=null,Ot=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(c){He(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Af(t,e),t=t.sibling}function Af(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Ht(e),s&4){try{fs(3,e,e.return),di(3,e)}catch(j){He(e,e.return,j)}try{fs(5,e,e.return)}catch(j){He(e,e.return,j)}}break;case 1:zt(t,e),Ht(e),s&512&&r!==null&&yr(r,r.return);break;case 5:if(zt(t,e),Ht(e),s&512&&r!==null&&yr(r,r.return),e.flags&32){var a=e.stateNode;try{gs(a,"")}catch(j){He(e,e.return,j)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=r!==null?r.memoizedProps:i,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Zd(a,i),uo(l,o);var c=uo(l,i);for(o=0;o<d.length;o+=2){var f=d[o],x=d[o+1];f==="style"?su(a,x):f==="dangerouslySetInnerHTML"?nu(a,x):f==="children"?gs(a,x):el(a,f,x,c)}switch(l){case"input":ao(a,i);break;case"textarea":eu(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?wr(a,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?wr(a,!!i.multiple,i.defaultValue,!0):wr(a,!!i.multiple,i.multiple?[]:"",!1))}a[Cs]=i}catch(j){He(e,e.return,j)}}break;case 6:if(zt(t,e),Ht(e),s&4){if(e.stateNode===null)throw Error(V(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(j){He(e,e.return,j)}}break;case 3:if(zt(t,e),Ht(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{ws(t.containerInfo)}catch(j){He(e,e.return,j)}break;case 4:zt(t,e),Ht(e);break;case 13:zt(t,e),Ht(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Ll=Ge())),s&4&&ed(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(dt=(c=dt)||f,zt(t,e),dt=c):zt(t,e),Ht(e),s&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(ie=e,f=e.child;f!==null;){for(x=ie=f;ie!==null;){switch(m=ie,y=m.child,m.tag){case 0:case 11:case 14:case 15:fs(4,m,m.return);break;case 1:yr(m,m.return);var p=m.stateNode;if(typeof p.componentWillUnmount=="function"){s=m,r=m.return;try{t=s,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(j){He(s,r,j)}}break;case 5:yr(m,m.return);break;case 22:if(m.memoizedState!==null){nd(x);continue}}y!==null?(y.return=m,ie=y):nd(x)}f=f.sibling}e:for(f=null,x=e;;){if(x.tag===5){if(f===null){f=x;try{a=x.stateNode,c?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=x.stateNode,d=x.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=ru("display",o))}catch(j){He(e,e.return,j)}}}else if(x.tag===6){if(f===null)try{x.stateNode.nodeValue=c?"":x.memoizedProps}catch(j){He(e,e.return,j)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;f===x&&(f=null),x=x.return}f===x&&(f=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:zt(t,e),Ht(e),s&4&&ed(e);break;case 21:break;default:zt(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(_f(r)){var s=r;break e}r=r.return}throw Error(V(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(gs(a,""),s.flags&=-33);var i=Zc(e);Bo(e,i,a);break;case 3:case 4:var o=s.stateNode.containerInfo,l=Zc(e);$o(e,l,o);break;default:throw Error(V(161))}}catch(d){He(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Th(e,t,r){ie=e,Lf(e)}function Lf(e,t,r){for(var s=(e.mode&1)!==0;ie!==null;){var a=ie,i=a.child;if(a.tag===22&&s){var o=a.memoizedState!==null||na;if(!o){var l=a.alternate,d=l!==null&&l.memoizedState!==null||dt;l=na;var c=dt;if(na=o,(dt=d)&&!c)for(ie=a;ie!==null;)o=ie,d=o.child,o.tag===22&&o.memoizedState!==null?rd(a):d!==null?(d.return=o,ie=d):rd(a);for(;i!==null;)ie=i,Lf(i),i=i.sibling;ie=a,na=l,dt=c}td(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,ie=i):td(e)}}function td(e){for(;ie!==null;){var t=ie;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dt||di(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!dt)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Ft(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Oc(t,i,s);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Oc(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var x=f.dehydrated;x!==null&&ws(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}dt||t.flags&512&&Oo(t)}catch(m){He(t,t.return,m)}}if(t===e){ie=null;break}if(r=t.sibling,r!==null){r.return=t.return,ie=r;break}ie=t.return}}function nd(e){for(;ie!==null;){var t=ie;if(t===e){ie=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ie=r;break}ie=t.return}}function rd(e){for(;ie!==null;){var t=ie;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{di(4,t)}catch(d){He(t,r,d)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(d){He(t,a,d)}}var i=t.return;try{Oo(t)}catch(d){He(t,i,d)}break;case 5:var o=t.return;try{Oo(t)}catch(d){He(t,o,d)}}}catch(d){He(t,t.return,d)}if(t===e){ie=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ie=l;break}ie=t.return}}var _h=Math.ceil,Ga=pn.ReactCurrentDispatcher,Pl=pn.ReactCurrentOwner,Lt=pn.ReactCurrentBatchConfig,ke=0,tt=null,Ve=null,rt=0,Nt=0,br=$n(0),Ke=0,As=null,nr=0,ui=0,Al=0,ms=null,gt=null,Ll=0,Ir=1/0,rn=null,Va=!1,Uo=null,In=null,ra=!1,Rn=null,Xa=0,hs=0,qo=null,ja=-1,Na=0;function ht(){return ke&6?Ge():ja!==-1?ja:ja=Ge()}function Mn(e){return e.mode&1?ke&2&&rt!==0?rt&-rt:mh.transition!==null?(Na===0&&(Na=xu()),Na):(e=Te,e!==0||(e=window.event,e=e===void 0?16:Nu(e.type)),e):1}function Ut(e,t,r,s){if(50<hs)throw hs=0,qo=null,Error(V(185));Ms(e,r,s),(!(ke&2)||e!==tt)&&(e===tt&&(!(ke&2)&&(ui|=r),Ke===4&&Cn(e,rt)),wt(e,s),r===1&&ke===0&&!(t.mode&1)&&(Ir=Ge()+500,oi&&Bn()))}function wt(e,t){var r=e.callbackNode;m0(e,t);var s=La(e,e===tt?rt:0);if(s===0)r!==null&&fc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&fc(r),t===1)e.tag===0?fh(sd.bind(null,e)):Uu(sd.bind(null,e)),lh(function(){!(ke&6)&&Bn()}),r=null;else{switch(gu(s)){case 1:r=al;break;case 4:r=hu;break;case 16:r=Aa;break;case 536870912:r=pu;break;default:r=Aa}r=Bf(r,If.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function If(e,t){if(ja=-1,Na=0,ke&6)throw Error(V(327));var r=e.callbackNode;if(Cr()&&e.callbackNode!==r)return null;var s=La(e,e===tt?rt:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Ka(e,s);else{t=s;var a=ke;ke|=2;var i=Df();(tt!==e||rt!==t)&&(rn=null,Ir=Ge()+500,Xn(e,t));do try{Lh();break}catch(l){Mf(e,l)}while(1);vl(),Ga.current=i,ke=a,Ve!==null?t=0:(tt=null,rt=0,t=Ke)}if(t!==0){if(t===2&&(a=xo(e),a!==0&&(s=a,t=Yo(e,a))),t===1)throw r=As,Xn(e,0),Cn(e,s),wt(e,Ge()),r;if(t===6)Cn(e,s);else{if(a=e.current.alternate,!(s&30)&&!Ph(a)&&(t=Ka(e,s),t===2&&(i=xo(e),i!==0&&(s=i,t=Yo(e,i))),t===1))throw r=As,Xn(e,0),Cn(e,s),wt(e,Ge()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(V(345));case 2:Yn(e,gt,rn);break;case 3:if(Cn(e,s),(s&130023424)===s&&(t=Ll+500-Ge(),10<t)){if(La(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){ht(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ko(Yn.bind(null,e,gt,rn),t);break}Yn(e,gt,rn);break;case 4:if(Cn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var o=31-Bt(s);i=1<<o,o=t[o],o>a&&(a=o),s&=~i}if(s=a,s=Ge()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*_h(s/1960))-s,10<s){e.timeoutHandle=ko(Yn.bind(null,e,gt,rn),s);break}Yn(e,gt,rn);break;case 5:Yn(e,gt,rn);break;default:throw Error(V(329))}}}return wt(e,Ge()),e.callbackNode===r?If.bind(null,e):null}function Yo(e,t){var r=ms;return e.current.memoizedState.isDehydrated&&(Xn(e,t).flags|=256),e=Ka(e,t),e!==2&&(t=gt,gt=r,t!==null&&Qo(t)),e}function Qo(e){gt===null?gt=e:gt.push.apply(gt,e)}function Ph(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],i=a.getSnapshot;a=a.value;try{if(!qt(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~Al,t&=~ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Bt(t),s=1<<r;e[r]=-1,t&=~s}}function sd(e){if(ke&6)throw Error(V(327));Cr();var t=La(e,0);if(!(t&1))return wt(e,Ge()),null;var r=Ka(e,t);if(e.tag!==0&&r===2){var s=xo(e);s!==0&&(t=s,r=Yo(e,s))}if(r===1)throw r=As,Xn(e,0),Cn(e,t),wt(e,Ge()),r;if(r===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,gt,rn),wt(e,Ge()),null}function Il(e,t){var r=ke;ke|=1;try{return e(t)}finally{ke=r,ke===0&&(Ir=Ge()+500,oi&&Bn())}}function rr(e){Rn!==null&&Rn.tag===0&&!(ke&6)&&Cr();var t=ke;ke|=1;var r=Lt.transition,s=Te;try{if(Lt.transition=null,Te=1,e)return e()}finally{Te=s,Lt.transition=r,ke=t,!(ke&6)&&Bn()}}function Ml(){Nt=br.current,Oe(br)}function Xn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,oh(r)),Ve!==null)for(r=Ve.return;r!==null;){var s=r;switch(pl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Fa();break;case 3:Ar(),Oe(yt),Oe(ut),kl();break;case 5:Nl(s);break;case 4:Ar();break;case 13:Oe(qe);break;case 19:Oe(qe);break;case 10:yl(s.type._context);break;case 22:case 23:Ml()}r=r.return}if(tt=e,Ve=e=Dn(e.current,null),rt=Nt=t,Ke=0,As=null,Al=ui=nr=0,gt=ms=null,Hn!==null){for(t=0;t<Hn.length;t++)if(r=Hn[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,i=r.pending;if(i!==null){var o=i.next;i.next=a,s.next=o}r.pending=s}Hn=null}return e}function Mf(e,t){do{var r=Ve;try{if(vl(),ya.current=Wa,Ha){for(var s=Ye.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Ha=!1}if(tr=0,et=Xe=Ye=null,us=!1,Ts=0,Pl.current=null,r===null||r.return===null){Ke=1,As=t,Ve=null;break}e:{var i=e,o=r.return,l=r,d=t;if(t=rt,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,f=l,x=f.tag;if(!(f.mode&1)&&(x===0||x===11||x===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Qc(o);if(y!==null){y.flags&=-257,Hc(y,o,l,i,t),y.mode&1&&Yc(i,c,t),t=y,d=c;var p=t.updateQueue;if(p===null){var j=new Set;j.add(d),t.updateQueue=j}else p.add(d);break e}else{if(!(t&1)){Yc(i,c,t),Dl();break e}d=Error(V(426))}}else if($e&&l.mode&1){var k=Qc(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Hc(k,o,l,i,t),xl(Lr(d,l));break e}}i=d=Lr(d,l),Ke!==4&&(Ke=2),ms===null?ms=[i]:ms.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=vf(i,d,t);Fc(i,v);break e;case 1:l=d;var h=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(In===null||!In.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var C=yf(i,l,t);Fc(i,C);break e}}i=i.return}while(i!==null)}Ff(r)}catch(E){t=E,Ve===r&&r!==null&&(Ve=r=r.return);continue}break}while(1)}function Df(){var e=Ga.current;return Ga.current=Wa,e===null?Wa:e}function Dl(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),tt===null||!(nr&268435455)&&!(ui&268435455)||Cn(tt,rt)}function Ka(e,t){var r=ke;ke|=2;var s=Df();(tt!==e||rt!==t)&&(rn=null,Xn(e,t));do try{Ah();break}catch(a){Mf(e,a)}while(1);if(vl(),ke=r,Ga.current=s,Ve!==null)throw Error(V(261));return tt=null,rt=0,Ke}function Ah(){for(;Ve!==null;)zf(Ve)}function Lh(){for(;Ve!==null&&!s0();)zf(Ve)}function zf(e){var t=$f(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?Ff(e):Ve=t,Pl.current=null}function Ff(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Ch(r,t),r!==null){r.flags&=32767,Ve=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ke=6,Ve=null;return}}else if(r=Sh(r,t,Nt),r!==null){Ve=r;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Ke===0&&(Ke=5)}function Yn(e,t,r){var s=Te,a=Lt.transition;try{Lt.transition=null,Te=1,Ih(e,t,r,s)}finally{Lt.transition=a,Te=s}return null}function Ih(e,t,r,s){do Cr();while(Rn!==null);if(ke&6)throw Error(V(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(h0(e,i),e===tt&&(Ve=tt=null,rt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ra||(ra=!0,Bf(Aa,function(){return Cr(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Lt.transition,Lt.transition=null;var o=Te;Te=1;var l=ke;ke|=4,Pl.current=null,Rh(e,r),Af(r,e),eh(jo),Ia=!!wo,jo=wo=null,e.current=r,Th(r),a0(),ke=l,Te=o,Lt.transition=i}else e.current=r;if(ra&&(ra=!1,Rn=e,Xa=a),i=e.pendingLanes,i===0&&(In=null),l0(r.stateNode),wt(e,Ge()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(Va)throw Va=!1,e=Uo,Uo=null,e;return Xa&1&&e.tag!==0&&Cr(),i=e.pendingLanes,i&1?e===qo?hs++:(hs=0,qo=e):hs=0,Bn(),null}function Cr(){if(Rn!==null){var e=gu(Xa),t=Lt.transition,r=Te;try{if(Lt.transition=null,Te=16>e?16:e,Rn===null)var s=!1;else{if(e=Rn,Rn=null,Xa=0,ke&6)throw Error(V(331));var a=ke;for(ke|=4,ie=e.current;ie!==null;){var i=ie,o=i.child;if(ie.flags&16){var l=i.deletions;if(l!==null){for(var d=0;d<l.length;d++){var c=l[d];for(ie=c;ie!==null;){var f=ie;switch(f.tag){case 0:case 11:case 15:fs(8,f,i)}var x=f.child;if(x!==null)x.return=f,ie=x;else for(;ie!==null;){f=ie;var m=f.sibling,y=f.return;if(Tf(f),f===c){ie=null;break}if(m!==null){m.return=y,ie=m;break}ie=y}}}var p=i.alternate;if(p!==null){var j=p.child;if(j!==null){p.child=null;do{var k=j.sibling;j.sibling=null,j=k}while(j!==null)}}ie=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,ie=o;else e:for(;ie!==null;){if(i=ie,i.flags&2048)switch(i.tag){case 0:case 11:case 15:fs(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,ie=v;break e}ie=i.return}}var h=e.current;for(ie=h;ie!==null;){o=ie;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ie=g;else e:for(o=h;ie!==null;){if(l=ie,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:di(9,l)}}catch(E){He(l,l.return,E)}if(l===o){ie=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,ie=C;break e}ie=l.return}}if(ke=a,Bn(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(ni,e)}catch{}s=!0}return s}finally{Te=r,Lt.transition=t}}return!1}function ad(e,t,r){t=Lr(r,t),t=vf(e,t,1),e=Ln(e,t,1),t=ht(),e!==null&&(Ms(e,1,t),wt(e,t))}function He(e,t,r){if(e.tag===3)ad(e,e,r);else for(;t!==null;){if(t.tag===3){ad(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(In===null||!In.has(s))){e=Lr(r,e),e=yf(t,e,1),t=Ln(t,e,1),e=ht(),t!==null&&(Ms(t,1,e),wt(t,e));break}}t=t.return}}function Mh(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=ht(),e.pingedLanes|=e.suspendedLanes&r,tt===e&&(rt&r)===r&&(Ke===4||Ke===3&&(rt&130023424)===rt&&500>Ge()-Ll?Xn(e,0):Al|=r),wt(e,t)}function Of(e,t){t===0&&(e.mode&1?(t=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):t=1);var r=ht();e=fn(e,t),e!==null&&(Ms(e,t,r),wt(e,r))}function Dh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Of(e,r)}function zh(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(V(314))}s!==null&&s.delete(t),Of(e,r)}var $f;$f=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)vt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return vt=!1,kh(e,t,r);vt=!!(e.flags&131072)}else vt=!1,$e&&t.flags&1048576&&qu(t,Ba,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;wa(e,t),e=t.pendingProps;var a=Tr(t,ut.current);Sr(t,r),a=Cl(null,t,s,e,a,r);var i=El();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(s)?(i=!0,Oa(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,wl(t),a.updater=ci,t.stateNode=a,a._reactInternals=t,Po(t,s,e,r),t=Io(null,t,s,!0,i,r)):(t.tag=0,$e&&i&&hl(t),mt(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(wa(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=Oh(s),e=Ft(s,e),a){case 0:t=Lo(null,t,s,e,r);break e;case 1:t=Vc(null,t,s,e,r);break e;case 11:t=Wc(null,t,s,e,r);break e;case 14:t=Gc(null,t,s,Ft(s.type,e),r);break e}throw Error(V(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ft(s,a),Lo(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ft(s,a),Vc(e,t,s,a,r);case 3:e:{if(Nf(t),e===null)throw Error(V(387));s=t.pendingProps,i=t.memoizedState,a=i.element,Vu(e,t),Ya(t,s,null,r);var o=t.memoizedState;if(s=o.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Lr(Error(V(423)),t),t=Xc(e,t,s,r,a);break e}else if(s!==a){a=Lr(Error(V(424)),t),t=Xc(e,t,s,r,a);break e}else for(kt=An(t.stateNode.containerInfo.firstChild),St=t,$e=!0,$t=null,r=Wu(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(_r(),s===a){t=mn(e,t,r);break e}mt(e,t,s,r)}t=t.child}return t;case 5:return Xu(t),e===null&&Ro(t),s=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,No(s,a)?o=null:i!==null&&No(s,i)&&(t.flags|=32),jf(e,t),mt(e,t,o,r),t.child;case 6:return e===null&&Ro(t),null;case 13:return kf(e,t,r);case 4:return jl(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Pr(t,null,s,r):mt(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ft(s,a),Wc(e,t,s,a,r);case 7:return mt(e,t,t.pendingProps,r),t.child;case 8:return mt(e,t,t.pendingProps.children,r),t.child;case 12:return mt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Me(Ua,s._currentValue),s._currentValue=o,i!==null)if(qt(i.value,o)){if(i.children===a.children&&!yt.current){t=mn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var d=l.firstContext;d!==null;){if(d.context===s){if(i.tag===1){d=ln(-1,r&-r),d.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?d.next=d:(d.next=f.next,f.next=d),c.pending=d}}i.lanes|=r,d=i.alternate,d!==null&&(d.lanes|=r),To(i.return,r,t),l.lanes|=r;break}d=d.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(V(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),To(o,r,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}mt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Sr(t,r),a=It(a),s=s(a),t.flags|=1,mt(e,t,s,r),t.child;case 14:return s=t.type,a=Ft(s,t.pendingProps),a=Ft(s.type,a),Gc(e,t,s,a,r);case 15:return bf(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ft(s,a),wa(e,t),t.tag=1,bt(s)?(e=!0,Oa(t)):e=!1,Sr(t,r),gf(t,s,a),Po(t,s,a,r),Io(null,t,s,!0,e,r);case 19:return Sf(e,t,r);case 22:return wf(e,t,r)}throw Error(V(156,t.tag))};function Bf(e,t){return mu(e,t)}function Fh(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,r,s){return new Fh(e,t,r,s)}function zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oh(e){if(typeof e=="function")return zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nl)return 11;if(e===rl)return 14}return 2}function Dn(e,t){var r=e.alternate;return r===null?(r=Pt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ka(e,t,r,s,a,i){var o=2;if(s=e,typeof e=="function")zl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case dr:return Kn(r.children,a,i,t);case tl:o=8,a|=8;break;case eo:return e=Pt(12,r,t,a|2),e.elementType=eo,e.lanes=i,e;case to:return e=Pt(13,r,t,a),e.elementType=to,e.lanes=i,e;case no:return e=Pt(19,r,t,a),e.elementType=no,e.lanes=i,e;case Xd:return fi(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gd:o=10;break e;case Vd:o=9;break e;case nl:o=11;break e;case rl:o=14;break e;case jn:o=16,s=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Pt(o,r,t,a),t.elementType=e,t.type=s,t.lanes=i,t}function Kn(e,t,r,s){return e=Pt(7,e,s,t),e.lanes=r,e}function fi(e,t,r,s){return e=Pt(22,e,s,t),e.elementType=Xd,e.lanes=r,e.stateNode={isHidden:!1},e}function qi(e,t,r){return e=Pt(6,e,null,t),e.lanes=r,e}function Yi(e,t,r){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $h(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ki(0),this.expirationTimes=ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Fl(e,t,r,s,a,i,o,l,d){return e=new $h(e,t,r,l,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Pt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(i),e}function Bh(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function Uf(e){if(!e)return Fn;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var r=e.type;if(bt(r))return Bu(e,r,t)}return t}function qf(e,t,r,s,a,i,o,l,d){return e=Fl(r,s,!0,e,a,i,o,l,d),e.context=Uf(null),r=e.current,s=ht(),a=Mn(r),i=ln(s,a),i.callback=t??null,Ln(r,i,a),e.current.lanes=a,Ms(e,a,s),wt(e,s),e}function mi(e,t,r,s){var a=t.current,i=ht(),o=Mn(a);return r=Uf(r),t.context===null?t.context=r:t.pendingContext=r,t=ln(i,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Ln(a,t,o),e!==null&&(Ut(e,a,o,i),va(e,a,o)),o}function Ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ol(e,t){id(e,t),(e=e.alternate)&&id(e,t)}function Uh(){return null}var Yf=typeof reportError=="function"?reportError:function(e){console.error(e)};function $l(e){this._internalRoot=e}hi.prototype.render=$l.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));mi(e,t,null,null)};hi.prototype.unmount=$l.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rr(function(){mi(null,e,null,null)}),t[un]=null}};function hi(e){this._internalRoot=e}hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=bu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Sn.length&&t!==0&&t<Sn[r].priority;r++);Sn.splice(r,0,e),r===0&&ju(e)}};function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function od(){}function qh(e,t,r,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var c=Ja(o);i.call(c)}}var o=qf(t,s,e,0,null,!1,!1,"",od);return e._reactRootContainer=o,e[un]=o.current,ks(e.nodeType===8?e.parentNode:e),rr(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var c=Ja(d);l.call(c)}}var d=Fl(e,0,!1,null,null,!1,!1,"",od);return e._reactRootContainer=d,e[un]=d.current,ks(e.nodeType===8?e.parentNode:e),rr(function(){mi(t,d,r,s)}),d}function xi(e,t,r,s,a){var i=r._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var d=Ja(o);l.call(d)}}mi(t,o,e,a)}else o=qh(r,t,e,a,s);return Ja(o)}vu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ss(t.pendingLanes);r!==0&&(il(t,r|1),wt(t,Ge()),!(ke&6)&&(Ir=Ge()+500,Bn()))}break;case 13:rr(function(){var s=fn(e,1);if(s!==null){var a=ht();Ut(s,e,1,a)}}),Ol(e,1)}};ol=function(e){if(e.tag===13){var t=fn(e,134217728);if(t!==null){var r=ht();Ut(t,e,134217728,r)}Ol(e,134217728)}};yu=function(e){if(e.tag===13){var t=Mn(e),r=fn(e,t);if(r!==null){var s=ht();Ut(r,e,t,s)}Ol(e,t)}};bu=function(){return Te};wu=function(e,t){var r=Te;try{return Te=e,t()}finally{Te=r}};mo=function(e,t,r){switch(t){case"input":if(ao(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=ii(s);if(!a)throw Error(V(90));Jd(s),ao(s,a)}}}break;case"textarea":eu(e,r);break;case"select":t=r.value,t!=null&&wr(e,!!r.multiple,t,!1)}};ou=Il;lu=rr;var Yh={usingClientEntryPoint:!1,Events:[zs,hr,ii,au,iu,Il]},Vr={findFiberByHostInstance:Qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qh={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=uu(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||Uh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{ni=sa.inject(Qh),Jt=sa}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yh;Et.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bl(t))throw Error(V(200));return Bh(e,t,null,r)};Et.createRoot=function(e,t){if(!Bl(e))throw Error(V(299));var r=!1,s="",a=Yf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Fl(e,1,!1,null,null,r,!1,s,a),e[un]=t.current,ks(e.nodeType===8?e.parentNode:e),new $l(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=uu(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return rr(e)};Et.hydrate=function(e,t,r){if(!pi(t))throw Error(V(200));return xi(null,e,t,!0,r)};Et.hydrateRoot=function(e,t,r){if(!Bl(e))throw Error(V(405));var s=r!=null&&r.hydratedSources||null,a=!1,i="",o=Yf;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=qf(t,null,e,1,r??null,a,!1,i,o),e[un]=t.current,ks(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new hi(t)};Et.render=function(e,t,r){if(!pi(t))throw Error(V(200));return xi(null,e,t,!1,r)};Et.unmountComponentAtNode=function(e){if(!pi(e))throw Error(V(40));return e._reactRootContainer?(rr(function(){xi(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};Et.unstable_batchedUpdates=Il;Et.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!pi(r))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return xi(e,t,r,!1,s)};Et.version="18.3.1-next-f1338f8080-20240426";function Qf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qf)}catch(e){console.error(e)}}Qf(),Yd.exports=Et;var Hh=Yd.exports,ld=Hh;Ji.createRoot=ld.createRoot,Ji.hydrateRoot=ld.hydrateRoot;const Wh="modulepreload",Gh=function(e){return"/"+e},cd={},Hf=function(t,r,s){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=Gh(i),i in cd)return;cd[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let f=a.length-1;f>=0;f--){const x=a[f];if(x.href===i&&(!o||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Wh,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((f,x)=>{c.addEventListener("load",f),c.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var dd="popstate";function Vh(e={}){function t(s,a){let{pathname:i,search:o,hash:l}=s.location;return Ho("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:Ls(a)}return Kh(t,r,null,e)}function Be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Xh(){return Math.random().toString(36).substring(2,10)}function ud(e,t){return{usr:e.state,key:e.key,idx:t}}function Ho(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Fr(t):t,state:r,key:t&&t.key||s||Xh()}}function Ls({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Fr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function Kh(e,t,r,s={}){let{window:a=document.defaultView,v5Compat:i=!1}=s,o=a.history,l="POP",d=null,c=f();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function f(){return(o.state||{idx:null}).idx}function x(){l="POP";let k=f(),v=k==null?null:k-c;c=k,d&&d({action:l,location:j.location,delta:v})}function m(k,v){l="PUSH";let h=Ho(j.location,k,v);r&&r(h,k),c=f()+1;let g=ud(h,c),C=j.createHref(h);try{o.pushState(g,"",C)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;a.location.assign(C)}i&&d&&d({action:l,location:j.location,delta:1})}function y(k,v){l="REPLACE";let h=Ho(j.location,k,v);r&&r(h,k),c=f();let g=ud(h,c),C=j.createHref(h);o.replaceState(g,"",C),i&&d&&d({action:l,location:j.location,delta:0})}function p(k){return Jh(k)}let j={get action(){return l},get location(){return e(a,o)},listen(k){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(dd,x),d=k,()=>{a.removeEventListener(dd,x),d=null}},createHref(k){return t(a,k)},createURL:p,encodeLocation(k){let v=p(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:y,go(k){return o.go(k)}};return j}function Jh(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Be(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:Ls(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function Wf(e,t,r="/"){return Zh(e,t,r,!1)}function Zh(e,t,r,s){let a=typeof t=="string"?Fr(t):t,i=hn(a.pathname||"/",r);if(i==null)return null;let o=Gf(e);ep(o);let l=null;for(let d=0;l==null&&d<o.length;++d){let c=up(i);l=cp(o[d],c,s)}return l}function Gf(e,t=[],r=[],s=""){let a=(i,o,l)=>{let d={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};d.relativePath.startsWith("/")&&(Be(d.relativePath.startsWith(s),`Absolute route path "${d.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(s.length));let c=cn([s,d.relativePath]),f=r.concat(d);i.children&&i.children.length>0&&(Be(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),Gf(i.children,t,f,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:op(c,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let d of Vf(i.path))a(i,o,d)}),t}function Vf(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(s.length===0)return a?[i,""]:[i];let o=Vf(s.join("/")),l=[];return l.push(...o.map(d=>d===""?i:[i,d].join("/"))),a&&l.push(...o),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function ep(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:lp(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var tp=/^:[\w-]+$/,np=3,rp=2,sp=1,ap=10,ip=-2,fd=e=>e==="*";function op(e,t){let r=e.split("/"),s=r.length;return r.some(fd)&&(s+=ip),t&&(s+=rp),r.filter(a=>!fd(a)).reduce((a,i)=>a+(tp.test(i)?np:i===""?sp:ap),s)}function lp(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function cp(e,t,r=!1){let{routesMeta:s}=e,a={},i="/",o=[];for(let l=0;l<s.length;++l){let d=s[l],c=l===s.length-1,f=i==="/"?t:t.slice(i.length)||"/",x=Za({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},f),m=d.route;if(!x&&c&&r&&!s[s.length-1].route.index&&(x=Za({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},f)),!x)return null;Object.assign(a,x.params),o.push({params:a,pathname:cn([i,x.pathname]),pathnameBase:pp(cn([i,x.pathnameBase])),route:m}),x.pathnameBase!=="/"&&(i=cn([i,x.pathnameBase]))}return o}function Za(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=dp(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((c,{paramName:f,isOptional:x},m)=>{if(f==="*"){let p=l[m]||"";o=i.slice(0,i.length-p.length).replace(/(.)\/+$/,"$1")}const y=l[m];return x&&!y?c[f]=void 0:c[f]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function dp(e,t=!1,r=!0){Yt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,d)=>(s.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function up(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Yt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function hn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function fp(e,t="/"){let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Fr(e):e;return{pathname:r?r.startsWith("/")?r:mp(r,t):t,search:xp(s),hash:gp(a)}}function mp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Qi(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Ul(e){let t=hp(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function ql(e,t,r,s=!1){let a;typeof e=="string"?a=Fr(e):(a={...e},Be(!a.pathname||!a.pathname.includes("?"),Qi("?","pathname","search",a)),Be(!a.pathname||!a.pathname.includes("#"),Qi("#","pathname","hash",a)),Be(!a.search||!a.search.includes("#"),Qi("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=r;else{let x=t.length-1;if(!s&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),x-=1;a.pathname=m.join("/")}l=x>=0?t[x]:"/"}let d=fp(a,l),c=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(c||f)&&(d.pathname+="/"),d}var cn=e=>e.join("/").replace(/\/\/+/g,"/"),pp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Xf=["POST","PUT","PATCH","DELETE"];new Set(Xf);var yp=["GET",...Xf];new Set(yp);var Or=u.createContext(null);Or.displayName="DataRouter";var gi=u.createContext(null);gi.displayName="DataRouterState";u.createContext(!1);var Kf=u.createContext({isTransitioning:!1});Kf.displayName="ViewTransition";var bp=u.createContext(new Map);bp.displayName="Fetchers";var wp=u.createContext(null);wp.displayName="Await";var Qt=u.createContext(null);Qt.displayName="Navigation";var Os=u.createContext(null);Os.displayName="Location";var Dt=u.createContext({outlet:null,matches:[],isDataRoute:!1});Dt.displayName="Route";var Yl=u.createContext(null);Yl.displayName="RouteError";function jp(e,{relative:t}={}){Be($r(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=u.useContext(Qt),{hash:a,pathname:i,search:o}=$s(e,{relative:t}),l=i;return r!=="/"&&(l=i==="/"?r:cn([r,i])),s.createHref({pathname:l,search:o,hash:a})}function $r(){return u.useContext(Os)!=null}function en(){return Be($r(),"useLocation() may be used only in the context of a <Router> component."),u.useContext(Os).location}var Jf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Zf(e){u.useContext(Qt).static||u.useLayoutEffect(e)}function at(){let{isDataRoute:e}=u.useContext(Dt);return e?Fp():Np()}function Np(){Be($r(),"useNavigate() may be used only in the context of a <Router> component.");let e=u.useContext(Or),{basename:t,navigator:r}=u.useContext(Qt),{matches:s}=u.useContext(Dt),{pathname:a}=en(),i=JSON.stringify(Ul(s)),o=u.useRef(!1);return Zf(()=>{o.current=!0}),u.useCallback((d,c={})=>{if(Yt(o.current,Jf),!o.current)return;if(typeof d=="number"){r.go(d);return}let f=ql(d,JSON.parse(i),a,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:cn([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,i,a,e])}var kp=u.createContext(null);function Sp(e){let t=u.useContext(Dt).outlet;return t&&u.createElement(kp.Provider,{value:e},t)}function Cp(){let{matches:e}=u.useContext(Dt),t=e[e.length-1];return t?t.params:{}}function $s(e,{relative:t}={}){let{matches:r}=u.useContext(Dt),{pathname:s}=en(),a=JSON.stringify(Ul(r));return u.useMemo(()=>ql(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function Ep(e,t){return em(e,t)}function em(e,t,r,s){var v;Be($r(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=u.useContext(Qt),{matches:i}=u.useContext(Dt),o=i[i.length-1],l=o?o.params:{},d=o?o.pathname:"/",c=o?o.pathnameBase:"/",f=o&&o.route;{let h=f&&f.path||"";tm(d,!f||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let x=en(),m;if(t){let h=typeof t=="string"?Fr(t):t;Be(c==="/"||((v=h.pathname)==null?void 0:v.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${h.pathname}" was given in the \`location\` prop.`),m=h}else m=x;let y=m.pathname||"/",p=y;if(c!=="/"){let h=c.replace(/^\//,"").split("/");p="/"+y.replace(/^\//,"").split("/").slice(h.length).join("/")}let j=Wf(e,{pathname:p});Yt(f||j!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Yt(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=Ap(j&&j.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:cn([c,a.encodeLocation?a.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?c:cn([c,a.encodeLocation?a.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,r,s);return t&&k?u.createElement(Os.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},k):k}function Rp(){let e=zp(),t=vp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},i={padding:"2px 4px",backgroundColor:s},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=u.createElement(u.Fragment,null,u.createElement("p",null,"💿 Hey developer 👋"),u.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",u.createElement("code",{style:i},"ErrorBoundary")," or"," ",u.createElement("code",{style:i},"errorElement")," prop on your route.")),u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),r?u.createElement("pre",{style:a},r):null,o)}var Tp=u.createElement(Rp,null),_p=class extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?u.createElement(Dt.Provider,{value:this.props.routeContext},u.createElement(Yl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Pp({routeContext:e,match:t,children:r}){let s=u.useContext(Or);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),u.createElement(Dt.Provider,{value:e},r)}function Ap(e,t=[],r=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,i=r==null?void 0:r.errors;if(i!=null){let d=a.findIndex(c=>c.route.id&&(i==null?void 0:i[c.route.id])!==void 0);Be(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,d+1))}let o=!1,l=-1;if(r)for(let d=0;d<a.length;d++){let c=a[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(l=d),c.route.id){let{loaderData:f,errors:x}=r,m=c.route.loader&&!f.hasOwnProperty(c.route.id)&&(!x||x[c.route.id]===void 0);if(c.route.lazy||m){o=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((d,c,f)=>{let x,m=!1,y=null,p=null;r&&(x=i&&c.route.id?i[c.route.id]:void 0,y=c.route.errorElement||Tp,o&&(l<0&&f===0?(tm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,p=null):l===f&&(m=!0,p=c.route.hydrateFallbackElement||null)));let j=t.concat(a.slice(0,f+1)),k=()=>{let v;return x?v=y:m?v=p:c.route.Component?v=u.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=d,u.createElement(Pp,{match:c,routeContext:{outlet:d,matches:j,isDataRoute:r!=null},children:v})};return r&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?u.createElement(_p,{location:r.location,revalidation:r.revalidation,component:y,error:x,children:k(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):k()},null)}function Ql(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lp(e){let t=u.useContext(Or);return Be(t,Ql(e)),t}function Ip(e){let t=u.useContext(gi);return Be(t,Ql(e)),t}function Mp(e){let t=u.useContext(Dt);return Be(t,Ql(e)),t}function Hl(e){let t=Mp(e),r=t.matches[t.matches.length-1];return Be(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Dp(){return Hl("useRouteId")}function zp(){var s;let e=u.useContext(Yl),t=Ip("useRouteError"),r=Hl("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function Fp(){let{router:e}=Lp("useNavigate"),t=Hl("useNavigate"),r=u.useRef(!1);return Zf(()=>{r.current=!0}),u.useCallback(async(a,i={})=>{Yt(r.current,Jf),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...i}))},[e,t])}var md={};function tm(e,t,r){!t&&!md[e]&&(md[e]=!0,Yt(!1,r))}u.memo(Op);function Op({routes:e,future:t,state:r}){return em(e,void 0,r,t)}function $p({to:e,replace:t,state:r,relative:s}){Be($r(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=u.useContext(Qt);Yt(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=u.useContext(Dt),{pathname:o}=en(),l=at(),d=ql(e,Ul(i),o,s==="path"),c=JSON.stringify(d);return u.useEffect(()=>{l(JSON.parse(c),{replace:t,state:r,relative:s})},[l,c,s,t,r]),null}function Bp(e){return Sp(e.context)}function Ze(e){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Up({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:a,static:i=!1}){Be(!$r(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=u.useMemo(()=>({basename:o,navigator:a,static:i,future:{}}),[o,a,i]);typeof r=="string"&&(r=Fr(r));let{pathname:d="/",search:c="",hash:f="",state:x=null,key:m="default"}=r,y=u.useMemo(()=>{let p=hn(d,o);return p==null?null:{location:{pathname:p,search:c,hash:f,state:x,key:m},navigationType:s}},[o,d,c,f,x,m,s]);return Yt(y!=null,`<Router basename="${o}"> is not able to match the URL "${d}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:u.createElement(Qt.Provider,{value:l},u.createElement(Os.Provider,{children:t,value:y}))}function qp({children:e,location:t}){return Ep(Wo(e),t)}function Wo(e,t=[]){let r=[];return u.Children.forEach(e,(s,a)=>{if(!u.isValidElement(s))return;let i=[...t,a];if(s.type===u.Fragment){r.push.apply(r,Wo(s.props.children,i));return}Be(s.type===Ze,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!s.props.index||!s.props.children,"An index route cannot have child routes.");let o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=Wo(s.props.children,i)),r.push(o)}),r}var Sa="get",Ca="application/x-www-form-urlencoded";function vi(e){return e!=null&&typeof e.tagName=="string"}function Yp(e){return vi(e)&&e.tagName.toLowerCase()==="button"}function Qp(e){return vi(e)&&e.tagName.toLowerCase()==="form"}function Hp(e){return vi(e)&&e.tagName.toLowerCase()==="input"}function Wp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gp(e,t){return e.button===0&&(!t||t==="_self")&&!Wp(e)}var aa=null;function Vp(){if(aa===null)try{new FormData(document.createElement("form"),0),aa=!1}catch{aa=!0}return aa}var Xp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Hi(e){return e!=null&&!Xp.has(e)?(Yt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ca}"`),null):e}function Kp(e,t){let r,s,a,i,o;if(Qp(e)){let l=e.getAttribute("action");s=l?hn(l,t):null,r=e.getAttribute("method")||Sa,a=Hi(e.getAttribute("enctype"))||Ca,i=new FormData(e)}else if(Yp(e)||Hp(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||l.getAttribute("action");if(s=d?hn(d,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||Sa,a=Hi(e.getAttribute("formenctype"))||Hi(l.getAttribute("enctype"))||Ca,i=new FormData(l,e),!Vp()){let{name:c,type:f,value:x}=e;if(f==="image"){let m=c?`${c}.`:"";i.append(`${m}x`,"0"),i.append(`${m}y`,"0")}else c&&i.append(c,x)}}else{if(vi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Sa,s=null,a=Ca,o=e}return i&&a==="text/plain"&&(o=i,i=void 0),{action:s,method:r.toLowerCase(),encType:a,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Wl(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Jp(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&hn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function Zp(e,t){if(e.id in t)return t[e.id];try{let r=await Hf(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ex(e){return e!=null&&typeof e.page=="string"}function tx(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function nx(e,t,r){let s=await Promise.all(e.map(async a=>{let i=t.routes[a.route.id];if(i){let o=await Zp(i,r);return o.links?o.links():[]}return[]}));return ix(s.flat(1).filter(tx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function hd(e,t,r,s,a,i){let o=(d,c)=>r[c]?d.route.id!==r[c].route.id:!0,l=(d,c)=>{var f;return r[c].pathname!==d.pathname||((f=r[c].route.path)==null?void 0:f.endsWith("*"))&&r[c].params["*"]!==d.params["*"]};return i==="assets"?t.filter((d,c)=>o(d,c)||l(d,c)):i==="data"?t.filter((d,c)=>{var x;let f=s.routes[d.route.id];if(!f||!f.hasLoader)return!1;if(o(d,c)||l(d,c))return!0;if(d.route.shouldRevalidate){let m=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=r[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function rx(e,t,{includeHydrateFallback:r}={}){return sx(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let i=[a.module];return a.clientActionModule&&(i=i.concat(a.clientActionModule)),a.clientLoaderModule&&(i=i.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(i=i.concat(a.hydrateFallbackModule)),a.imports&&(i=i.concat(a.imports)),i}).flat(1))}function sx(e){return[...new Set(e)]}function ax(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function ix(e,t){let r=new Set,s=new Set(t);return e.reduce((a,i)=>{if(t&&!ex(i)&&i.as==="script"&&i.href&&s.has(i.href))return a;let l=JSON.stringify(ax(i));return r.has(l)||(r.add(l),a.push({key:l,link:i})),a},[])}function nm(){let e=u.useContext(Or);return Wl(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function ox(){let e=u.useContext(gi);return Wl(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Gl=u.createContext(void 0);Gl.displayName="FrameworkContext";function rm(){let e=u.useContext(Gl);return Wl(e,"You must render this element inside a <HydratedRouter> element"),e}function lx(e,t){let r=u.useContext(Gl),[s,a]=u.useState(!1),[i,o]=u.useState(!1),{onFocus:l,onBlur:d,onMouseEnter:c,onMouseLeave:f,onTouchStart:x}=t,m=u.useRef(null);u.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let j=v=>{v.forEach(h=>{o(h.isIntersecting)})},k=new IntersectionObserver(j,{threshold:.5});return m.current&&k.observe(m.current),()=>{k.disconnect()}}},[e]),u.useEffect(()=>{if(s){let j=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(j)}}},[s]);let y=()=>{a(!0)},p=()=>{a(!1),o(!1)};return r?e!=="intent"?[i,m,{}]:[i,m,{onFocus:Xr(l,y),onBlur:Xr(d,p),onMouseEnter:Xr(c,y),onMouseLeave:Xr(f,p),onTouchStart:Xr(x,y)}]:[!1,m,{}]}function Xr(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function cx({page:e,...t}){let{router:r}=nm(),s=u.useMemo(()=>Wf(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?u.createElement(ux,{page:e,matches:s,...t}):null}function dx(e){let{manifest:t,routeModules:r}=rm(),[s,a]=u.useState([]);return u.useEffect(()=>{let i=!1;return nx(e,t,r).then(o=>{i||a(o)}),()=>{i=!0}},[e,t,r]),s}function ux({page:e,matches:t,...r}){let s=en(),{manifest:a,routeModules:i}=rm(),{basename:o}=nm(),{loaderData:l,matches:d}=ox(),c=u.useMemo(()=>hd(e,t,d,a,s,"data"),[e,t,d,a,s]),f=u.useMemo(()=>hd(e,t,d,a,s,"assets"),[e,t,d,a,s]),x=u.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let p=new Set,j=!1;if(t.forEach(v=>{var g;let h=a.routes[v.route.id];!h||!h.hasLoader||(!c.some(C=>C.route.id===v.route.id)&&v.route.id in l&&((g=i[v.route.id])!=null&&g.shouldRevalidate)||h.hasClientLoader?j=!0:p.add(v.route.id))}),p.size===0)return[];let k=Jp(e,o,"data");return j&&p.size>0&&k.searchParams.set("_routes",t.filter(v=>p.has(v.route.id)).map(v=>v.route.id).join(",")),[k.pathname+k.search]},[o,l,s,a,c,t,e,i]),m=u.useMemo(()=>rx(f,a),[f,a]),y=dx(f);return u.createElement(u.Fragment,null,x.map(p=>u.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...r})),m.map(p=>u.createElement("link",{key:p,rel:"modulepreload",href:p,...r})),y.map(({key:p,link:j})=>u.createElement("link",{key:p,...j})))}function fx(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var sm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sm&&(window.__reactRouterVersion="7.7.1")}catch{}function mx({basename:e,children:t,window:r}){let s=u.useRef();s.current==null&&(s.current=Vh({window:r,v5Compat:!0}));let a=s.current,[i,o]=u.useState({action:a.action,location:a.location}),l=u.useCallback(d=>{u.startTransition(()=>o(d))},[o]);return u.useLayoutEffect(()=>a.listen(l),[a,l]),u.createElement(Up,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a})}var am=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,im=u.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:a,reloadDocument:i,replace:o,state:l,target:d,to:c,preventScrollReset:f,viewTransition:x,...m},y){let{basename:p}=u.useContext(Qt),j=typeof c=="string"&&am.test(c),k,v=!1;if(typeof c=="string"&&j&&(k=c,sm))try{let w=new URL(window.location.href),N=c.startsWith("//")?new URL(w.protocol+c):new URL(c),T=hn(N.pathname,p);N.origin===w.origin&&T!=null?c=T+N.search+N.hash:v=!0}catch{Yt(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let h=jp(c,{relative:a}),[g,C,E]=lx(s,m),A=gx(c,{replace:o,state:l,target:d,preventScrollReset:f,relative:a,viewTransition:x});function S(w){t&&t(w),w.defaultPrevented||A(w)}let b=u.createElement("a",{...m,...E,href:k||h,onClick:v||i?t:S,ref:fx(y,C),target:d,"data-discover":!j&&r==="render"?"true":void 0});return g&&!j?u.createElement(u.Fragment,null,b,u.createElement(cx,{page:h})):b});im.displayName="Link";var hx=u.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:a=!1,style:i,to:o,viewTransition:l,children:d,...c},f){let x=$s(o,{relative:c.relative}),m=en(),y=u.useContext(gi),{navigator:p,basename:j}=u.useContext(Qt),k=y!=null&&jx(x)&&l===!0,v=p.encodeLocation?p.encodeLocation(x).pathname:x.pathname,h=m.pathname,g=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(h=h.toLowerCase(),g=g?g.toLowerCase():null,v=v.toLowerCase()),g&&j&&(g=hn(g,j)||g);const C=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let E=h===v||!a&&h.startsWith(v)&&h.charAt(C)==="/",A=g!=null&&(g===v||!a&&g.startsWith(v)&&g.charAt(v.length)==="/"),S={isActive:E,isPending:A,isTransitioning:k},b=E?t:void 0,w;typeof s=="function"?w=s(S):w=[s,E?"active":null,A?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let N=typeof i=="function"?i(S):i;return u.createElement(im,{...c,"aria-current":b,className:w,ref:f,style:N,to:o,viewTransition:l},typeof d=="function"?d(S):d)});hx.displayName="NavLink";var px=u.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:a,state:i,method:o=Sa,action:l,onSubmit:d,relative:c,preventScrollReset:f,viewTransition:x,...m},y)=>{let p=bx(),j=wx(l,{relative:c}),k=o.toLowerCase()==="get"?"get":"post",v=typeof l=="string"&&am.test(l),h=g=>{if(d&&d(g),g.defaultPrevented)return;g.preventDefault();let C=g.nativeEvent.submitter,E=(C==null?void 0:C.getAttribute("formmethod"))||o;p(C||g.currentTarget,{fetcherKey:t,method:E,navigate:r,replace:a,state:i,relative:c,preventScrollReset:f,viewTransition:x})};return u.createElement("form",{ref:y,method:k,action:j,onSubmit:s?d:h,...m,"data-discover":!v&&e==="render"?"true":void 0})});px.displayName="Form";function xx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function om(e){let t=u.useContext(Or);return Be(t,xx(e)),t}function gx(e,{target:t,replace:r,state:s,preventScrollReset:a,relative:i,viewTransition:o}={}){let l=at(),d=en(),c=$s(e,{relative:i});return u.useCallback(f=>{if(Gp(f,t)){f.preventDefault();let x=r!==void 0?r:Ls(d)===Ls(c);l(e,{replace:x,state:s,preventScrollReset:a,relative:i,viewTransition:o})}},[d,l,c,r,s,t,e,a,i,o])}var vx=0,yx=()=>`__${String(++vx)}__`;function bx(){let{router:e}=om("useSubmit"),{basename:t}=u.useContext(Qt),r=Dp();return u.useCallback(async(s,a={})=>{let{action:i,method:o,encType:l,formData:d,body:c}=Kp(s,t);if(a.navigate===!1){let f=a.fetcherKey||yx();await e.fetch(f,r,a.action||i,{preventScrollReset:a.preventScrollReset,formData:d,body:c,formMethod:a.method||o,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:d,body:c,formMethod:a.method||o,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function wx(e,{relative:t}={}){let{basename:r}=u.useContext(Qt),s=u.useContext(Dt);Be(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),i={...$s(e||".",{relative:t})},o=en();if(e==null){i.search=o.search;let l=new URLSearchParams(i.search),d=l.getAll("index");if(d.some(f=>f==="")){l.delete("index"),d.filter(x=>x).forEach(x=>l.append("index",x));let f=l.toString();i.search=f?`?${f}`:""}}return(!e||e===".")&&a.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:cn([r,i.pathname])),Ls(i)}function jx(e,{relative:t}={}){let r=u.useContext(Kf);Be(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=om("useViewTransitionState"),a=$s(e,{relative:t});if(!r.isTransitioning)return!1;let i=hn(r.currentLocation.pathname,s)||r.currentLocation.pathname,o=hn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return Za(a.pathname,o)!=null||Za(a.pathname,i)!=null}function Nx({size:e=22,spinning:t=!1}){return n.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[n.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),n.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),n.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),n.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),n.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),n.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function kx(){const e=at(),{pathname:t}=en(),r=u.useRef({}),s=u.useRef({}),[a,i]=u.useState(!1),o=u.useRef(null),l=u.useRef({});u.useEffect(()=>{l.current={tap:new Audio("/sounds/tap.mp3"),whoosh:new Audio("/sounds/whoosh.mp3")},Object.values(l.current).forEach(E=>{E.volume=.5})},[]);const d=E=>{const A=l.current[E];A&&(A.currentTime=0,A.play().catch(()=>{}))},c=E=>{if(navigator.vibrate)switch(E){case"light":navigator.vibrate(10);break;case"medium":navigator.vibrate(20);break;case"heavy":navigator.vibrate(40);break;case"double":navigator.vibrate([20,50,20]);break;case"success":navigator.vibrate([10,50,10,50,10]);break;default:navigator.vibrate(15)}};u.useCallback(()=>{var E;if(["/","/play","/swipe","/profile"].includes(t)){const A=((E=o.current)==null?void 0:E.scrollTop)||0,S=window.scrollY||window.pageYOffset||0,b=A>0?A:S;console.log(`Saving scroll for ${t}: main=${A}, window=${S}, saved=${b}`),r.current[t]=b}},[t]),u.useEffect(()=>{let E=null;const A=()=>{E&&cancelAnimationFrame(E),E=requestAnimationFrame(()=>{var b;if(["/","/play","/swipe","/profile"].includes(t)){const w=((b=o.current)==null?void 0:b.scrollTop)||0,N=window.scrollY||window.pageYOffset||0,T=w>0?w:N;r.current[t]=T,console.log(`Scroll position updated for ${t}: ${T}`)}})};window.addEventListener("scroll",A,{passive:!0});const S=o.current;return S&&S.addEventListener("scroll",A,{passive:!0}),()=>{E&&cancelAnimationFrame(E),window.removeEventListener("scroll",A),S&&S.removeEventListener("scroll",A)}},[t]),u.useEffect(()=>{if(o.current&&o.current.classList.add("navigating"),["/profile/","/quiz/","/practice/","/play/classic","/settings","/about"].some(S=>t.startsWith(S)))window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20);else{const S=r.current[t];if(console.log(`Attempting to restore scroll for ${t}: ${S}`),S!=null&&S>0){const b=(w=0)=>{w>=5||(o.current?(o.current.scrollTop=S,setTimeout(()=>{var T;const N=((T=o.current)==null?void 0:T.scrollTop)||0;Math.abs(N-S)>10?(window.scrollTo(0,S),setTimeout(()=>{const D=window.scrollY||window.pageYOffset||0;console.log(`Restore attempt ${w+1}: main=${N}, window=${D}, target=${S}`),Math.abs(D-S)>10&&Math.abs(N-S)>10&&b(w+1)},20)):console.log(`Successfully restored scroll to ${N}`)},20)):window.scrollTo(0,S))};b(0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}else window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}},[t]);const[f,x]=u.useState(!1),[m,y]=u.useState({open:!1,go:null}),[p,j]=u.useState(!1);u.useEffect(()=>{const E=()=>{j(document.body.classList.contains("hide-bottom-nav"))};E();const A=new MutationObserver(E);return A.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>A.disconnect()},[]),u.useEffect(()=>{const E=new MutationObserver(()=>{x(document.body.classList.contains("modal-open"))});return E.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>E.disconnect()},[]);const v=f||p||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(E=>E.test(t)),h=E=>E==="/"?t==="/":t.startsWith(E),g=u.useCallback(()=>{console.log("Scrolling to top"),window.scrollTo({top:0,behavior:"smooth"}),o.current&&o.current.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},[]),C=({path:E,icon:A,label:S,emoji:b})=>{const w=h(E),[N,T]=u.useState(!1),D=u.useCallback(()=>{var U;const q=Date.now();if(w){const R=s.current[E]||0;console.log(`Active tab clicked. Time since last tap: ${q-R}ms`),q-R<500?(console.log("Double tap detected!"),g(),d("tap"),c("double"),s.current[E]=0):s.current[E]=q;return}if(["/","/play","/swipe","/profile"].includes(t)){const R=((U=o.current)==null?void 0:U.scrollTop)||0,_=window.scrollY||window.pageYOffset||0,z=R>0?R:_;console.log(`Manually saving scroll before navigation from ${t}: ${z}`),r.current[t]=z}const Z=s.current[E]||0;if(q-Z<500){console.log("Double tap on inactive tab - navigating and scrolling to top"),r.current[E]=0,E==="/play"?(i(!0),d("whoosh"),c("double"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1),setTimeout(g,100)},200)):(d("tap"),c("double"),e(E),setTimeout(g,100)),s.current[E]=0;return}s.current[E]=q,T(!0),setTimeout(()=>T(!1),600);const Y=()=>{if(E==="/play"){i(!0),d("whoosh"),c("medium"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1)},200);return}d("tap"),c("light"),e(E)};if(localStorage.getItem("qp_in_question")==="true"){y({open:!0,go:Y});return}Y()},[w,E,t,e,g,d,c]);return n.jsxs("button",{type:"button",onClick:D,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${w?"scale-110":"scale-100 hover:scale-105"}
          ${N?"animate-bounce":""}`,"aria-current":w?"page":void 0,children:[w&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),n.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),n.jsx("div",{className:`leading-none text-2xl transition-transform ${w?"scale-125":""} ${E==="/play"&&a?"animate-spin":""}`,children:b||A}),n.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${w?"text-white":"text-base-muted/80"}`,children:S})]})};return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("style",{children:`
        .hide-bottom-nav nav[role="navigation"] {
         display: none !important;
        }
        main.navigating {
          visibility: hidden;
        }
        main {
          scroll-behavior: auto !important;
        }
      `}),n.jsx("main",{ref:o,className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:v||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:v||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto"},children:n.jsx(Bp,{})}),m.open&&n.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[n.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[n.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),n.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),n.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{c("light"),y({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),n.jsx("button",{onClick:()=>{c("medium");const E=m.go;y({open:!1,go:null}),E==null||E()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),n.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!v&&n.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[n.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),n.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),n.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[n.jsx(C,{path:"/",emoji:"🏠",label:"Home"}),n.jsx(C,{path:"/play",icon:n.jsx(Nx,{size:26,spinning:a}),label:"Play"}),n.jsx(C,{path:"/swipe",emoji:"📚",label:"Swipe"}),n.jsx(C,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function ei(){return ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},ei.apply(null,arguments)}function Sx(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Cx(e){u.useEffect(e,[])}var Ex=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function At(e,t){var r=t===void 0?{}:t,s=r.volume,a=s===void 0?1:s,i=r.playbackRate,o=i===void 0?1:i,l=r.soundEnabled,d=l===void 0?!0:l,c=r.interrupt,f=c===void 0?!1:c,x=r.onload,m=Sx(r,Ex),y=ft.useRef(null),p=ft.useRef(!1),j=ft.useState(null),k=j[0],v=j[1],h=ft.useState(null),g=h[0],C=h[1],E=function(){typeof x=="function"&&x.call(this),p.current&&v(this.duration()*1e3),C(this)};Cx(function(){return Hf(()=>import("./howler-a60c3fc9.js").then(N=>N.h),[]).then(function(N){if(!p.current){var T;y.current=(T=N.Howl)!==null&&T!==void 0?T:N.default.Howl,p.current=!0,new y.current(ei({src:Array.isArray(e)?e:[e],volume:a,rate:o,onload:E},m))}}),function(){p.current=!1}}),ft.useEffect(function(){y.current&&g&&C(new y.current(ei({src:Array.isArray(e)?e:[e],volume:a,onload:E},m)))},[JSON.stringify(e)]),ft.useEffect(function(){g&&(g.volume(a),m.sprite||g.rate(o))},[g,a,o]);var A=ft.useCallback(function(N){typeof N>"u"&&(N={}),!(!g||!d&&!N.forceSoundEnabled)&&(f&&g.stop(),N.playbackRate&&g.rate(N.playbackRate),g.play(N.id))},[g,d,f]),S=ft.useCallback(function(N){g&&g.stop(N)},[g]),b=ft.useCallback(function(N){g&&g.pause(N)},[g]),w=[A,{sound:g,stop:S,pause:b,duration:k}];return w}var lm={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((r,s)=>{e.exports=s()})(bm,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},a,i=!s.document&&!!s.postMessage,o=s.IS_PAPA_WORKER||!1,l={},d=0,c={};function f(b){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(w){var N=E(w);N.chunkSize=parseInt(N.chunkSize),w.step||w.chunk||(N.chunkSize=null),this._handle=new j(N),(this._handle.streamer=this)._config=N}).call(this,b),this.parseChunk=function(w,N){var T=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<T){let q=this._config.newline;q||(D=this._config.quoteChar||'"',q=this._handle.guessLineEndings(w,D)),w=[...w.split(q).slice(T)].join(q)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(D=this._config.beforeFirstChunk(w))!==void 0&&(w=D),this.isFirstChunk=!1,this._halted=!1;var T=this._partialLine+w,D=(this._partialLine="",this._handle.parse(T,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(w=D.meta.cursor,T=(this._finished||(this._partialLine=T.substring(w-this._baseIndex),this._baseIndex=w),D&&D.data&&(this._rowCount+=D.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),o)s.postMessage({results:D,workerId:c.WORKER_ID,finished:T});else if(S(this._config.chunk)&&!N){if(this._config.chunk(D,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=D=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(D.data),this._completeResults.errors=this._completeResults.errors.concat(D.errors),this._completeResults.meta=D.meta),this._completed||!T||!S(this._config.complete)||D&&D.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),T||D&&D.meta.paused||this._nextChunk(),D}this._halted=!0},this._sendError=function(w){S(this._config.error)?this._config.error(w):o&&this._config.error&&s.postMessage({workerId:c.WORKER_ID,error:w,finished:!1})}}function x(b){var w;(b=b||{}).chunkSize||(b.chunkSize=c.RemoteChunkSize),f.call(this,b),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(N){this._input=N,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(w=new XMLHttpRequest,this._config.withCredentials&&(w.withCredentials=this._config.withCredentials),i||(w.onload=A(this._chunkLoaded,this),w.onerror=A(this._chunkError,this)),w.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var N,T=this._config.downloadRequestHeaders;for(N in T)w.setRequestHeader(N,T[N])}var D;this._config.chunkSize&&(D=this._start+this._config.chunkSize-1,w.setRequestHeader("Range","bytes="+this._start+"-"+D));try{w.send(this._config.downloadRequestBody)}catch(q){this._chunkError(q.message)}i&&w.status===0&&this._chunkError()}},this._chunkLoaded=function(){w.readyState===4&&(w.status<200||400<=w.status?this._chunkError():(this._start+=this._config.chunkSize||w.responseText.length,this._finished=!this._config.chunkSize||this._start>=(N=>(N=N.getResponseHeader("Content-Range"))!==null?parseInt(N.substring(N.lastIndexOf("/")+1)):-1)(w),this.parseChunk(w.responseText)))},this._chunkError=function(N){N=w.statusText||N,this._sendError(new Error(N))}}function m(b){(b=b||{}).chunkSize||(b.chunkSize=c.LocalChunkSize),f.call(this,b);var w,N,T=typeof FileReader<"u";this.stream=function(D){this._input=D,N=D.slice||D.webkitSlice||D.mozSlice,T?((w=new FileReader).onload=A(this._chunkLoaded,this),w.onerror=A(this._chunkError,this)):w=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var D=this._input,q=(this._config.chunkSize&&(q=Math.min(this._start+this._config.chunkSize,this._input.size),D=N.call(D,this._start,q)),w.readAsText(D,this._config.encoding));T||this._chunkLoaded({target:{result:q}})},this._chunkLoaded=function(D){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(D.target.result)},this._chunkError=function(){this._sendError(w.error)}}function y(b){var w;f.call(this,b=b||{}),this.stream=function(N){return w=N,this._nextChunk()},this._nextChunk=function(){var N,T;if(!this._finished)return N=this._config.chunkSize,w=N?(T=w.substring(0,N),w.substring(N)):(T=w,""),this._finished=!w,this.parseChunk(T)}}function p(b){f.call(this,b=b||{});var w=[],N=!0,T=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(D){this._input=D,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){T&&w.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),w.length?this.parseChunk(w.shift()):N=!0},this._streamData=A(function(D){try{w.push(typeof D=="string"?D:D.toString(this._config.encoding)),N&&(N=!1,this._checkIsFinished(),this.parseChunk(w.shift()))}catch(q){this._streamError(q)}},this),this._streamError=A(function(D){this._streamCleanUp(),this._sendError(D)},this),this._streamEnd=A(function(){this._streamCleanUp(),T=!0,this._streamData("")},this),this._streamCleanUp=A(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(b){var w,N,T,D,q=Math.pow(2,53),Z=-q,Y=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,B=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,U=this,R=0,_=0,z=!1,P=!1,L=[],M={data:[],errors:[],meta:{}};function X(I){return b.skipEmptyLines==="greedy"?I.join("").trim()==="":I.length===1&&I[0].length===0}function O(){if(M&&T&&(ce("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+c.DefaultDelimiter+"'"),T=!1),b.skipEmptyLines&&(M.data=M.data.filter(function(G){return!X(G)})),K()){let G=function(ee,J){S(b.transformHeader)&&(ee=b.transformHeader(ee,J)),L.push(ee)};if(M)if(Array.isArray(M.data[0])){for(var I=0;K()&&I<M.data.length;I++)M.data[I].forEach(G);M.data.splice(0,1)}else M.data.forEach(G)}function F(G,ee){for(var J=b.header?{}:[],Q=0;Q<G.length;Q++){var te=Q,se=G[Q],se=((H,$)=>(ne=>(b.dynamicTypingFunction&&b.dynamicTyping[ne]===void 0&&(b.dynamicTyping[ne]=b.dynamicTypingFunction(ne)),(b.dynamicTyping[ne]||b.dynamicTyping)===!0))(H)?$==="true"||$==="TRUE"||$!=="false"&&$!=="FALSE"&&((ne=>{if(Y.test(ne)&&(ne=parseFloat(ne),Z<ne&&ne<q))return 1})($)?parseFloat($):B.test($)?new Date($):$===""?null:$):$)(te=b.header?Q>=L.length?"__parsed_extra":L[Q]:te,se=b.transform?b.transform(se,te):se);te==="__parsed_extra"?(J[te]=J[te]||[],J[te].push(se)):J[te]=se}return b.header&&(Q>L.length?ce("FieldMismatch","TooManyFields","Too many fields: expected "+L.length+" fields but parsed "+Q,_+ee):Q<L.length&&ce("FieldMismatch","TooFewFields","Too few fields: expected "+L.length+" fields but parsed "+Q,_+ee)),J}var W;M&&(b.header||b.dynamicTyping||b.transform)&&(W=1,!M.data.length||Array.isArray(M.data[0])?(M.data=M.data.map(F),W=M.data.length):M.data=F(M.data,0),b.header&&M.meta&&(M.meta.fields=L),_+=W)}function K(){return b.header&&L.length===0}function ce(I,F,W,G){I={type:I,code:F,message:W},G!==void 0&&(I.row=G),M.errors.push(I)}S(b.step)&&(D=b.step,b.step=function(I){M=I,K()?O():(O(),M.data.length!==0&&(R+=I.data.length,b.preview&&R>b.preview?N.abort():(M.data=M.data[0],D(M,U))))}),this.parse=function(I,F,W){var G=b.quoteChar||'"',G=(b.newline||(b.newline=this.guessLineEndings(I,G)),T=!1,b.delimiter?S(b.delimiter)&&(b.delimiter=b.delimiter(I),M.meta.delimiter=b.delimiter):((G=((ee,J,Q,te,se)=>{var H,$,ne,me;se=se||[",","	","|",";",c.RECORD_SEP,c.UNIT_SEP];for(var je=0;je<se.length;je++){for(var pe,Ee=se[je],Le=0,_e=0,he=0,ue=(ne=void 0,new v({comments:te,delimiter:Ee,newline:J,preview:10}).parse(ee)),xe=0;xe<ue.data.length;xe++)Q&&X(ue.data[xe])?he++:(pe=ue.data[xe].length,_e+=pe,ne===void 0?ne=pe:0<pe&&(Le+=Math.abs(pe-ne),ne=pe));0<ue.data.length&&(_e/=ue.data.length-he),($===void 0||Le<=$)&&(me===void 0||me<_e)&&1.99<_e&&($=Le,H=Ee,me=_e)}return{successful:!!(b.delimiter=H),bestDelimiter:H}})(I,b.newline,b.skipEmptyLines,b.comments,b.delimitersToGuess)).successful?b.delimiter=G.bestDelimiter:(T=!0,b.delimiter=c.DefaultDelimiter),M.meta.delimiter=b.delimiter),E(b));return b.preview&&b.header&&G.preview++,w=I,N=new v(G),M=N.parse(w,F,W),O(),z?{meta:{paused:!0}}:M||{meta:{paused:!1}}},this.paused=function(){return z},this.pause=function(){z=!0,N.abort(),w=S(b.chunk)?"":w.substring(N.getCharIndex())},this.resume=function(){U.streamer._halted?(z=!1,U.streamer.parseChunk(w,!0)):setTimeout(U.resume,3)},this.aborted=function(){return P},this.abort=function(){P=!0,N.abort(),M.meta.aborted=!0,S(b.complete)&&b.complete(M),w=""},this.guessLineEndings=function(ee,G){ee=ee.substring(0,1048576);var G=new RegExp(k(G)+"([^]*?)"+k(G),"gm"),W=(ee=ee.replace(G,"")).split("\r"),G=ee.split(`
`),ee=1<G.length&&G[0].length<W[0].length;if(W.length===1||ee)return`
`;for(var J=0,Q=0;Q<W.length;Q++)W[Q][0]===`
`&&J++;return J>=W.length/2?`\r
`:"\r"}}function k(b){return b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(b){var w=(b=b||{}).delimiter,N=b.newline,T=b.comments,D=b.step,q=b.preview,Z=b.fastMode,Y=null,B=!1,U=b.quoteChar==null?'"':b.quoteChar,R=U;if(b.escapeChar!==void 0&&(R=b.escapeChar),(typeof w!="string"||-1<c.BAD_DELIMITERS.indexOf(w))&&(w=","),T===w)throw new Error("Comment character same as delimiter");T===!0?T="#":(typeof T!="string"||-1<c.BAD_DELIMITERS.indexOf(T))&&(T=!1),N!==`
`&&N!=="\r"&&N!==`\r
`&&(N=`
`);var _=0,z=!1;this.parse=function(P,L,M){if(typeof P!="string")throw new Error("Input must be a string");var X=P.length,O=w.length,K=N.length,ce=T.length,I=S(D),F=[],W=[],G=[],ee=_=0;if(!P)return Le();if(Z||Z!==!1&&P.indexOf(U)===-1){for(var J=P.split(N),Q=0;Q<J.length;Q++){if(G=J[Q],_+=G.length,Q!==J.length-1)_+=N.length;else if(M)return Le();if(!T||G.substring(0,ce)!==T){if(I){if(F=[],me(G.split(w)),_e(),z)return Le()}else me(G.split(w));if(q&&q<=Q)return F=F.slice(0,q),Le(!0)}}return Le()}for(var te=P.indexOf(w,_),se=P.indexOf(N,_),H=new RegExp(k(R)+k(U),"g"),$=P.indexOf(U,_);;)if(P[_]===U)for($=_,_++;;){if(($=P.indexOf(U,$+1))===-1)return M||W.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:F.length,index:_}),pe();if($===X-1)return pe(P.substring(_,$).replace(H,U));if(U===R&&P[$+1]===R)$++;else if(U===R||$===0||P[$-1]!==R){te!==-1&&te<$+1&&(te=P.indexOf(w,$+1));var ne=je((se=se!==-1&&se<$+1?P.indexOf(N,$+1):se)===-1?te:Math.min(te,se));if(P.substr($+1+ne,O)===w){G.push(P.substring(_,$).replace(H,U)),P[_=$+1+ne+O]!==U&&($=P.indexOf(U,_)),te=P.indexOf(w,_),se=P.indexOf(N,_);break}if(ne=je(se),P.substring($+1+ne,$+1+ne+K)===N){if(G.push(P.substring(_,$).replace(H,U)),Ee($+1+ne+K),te=P.indexOf(w,_),$=P.indexOf(U,_),I&&(_e(),z))return Le();if(q&&F.length>=q)return Le(!0);break}W.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:F.length,index:_}),$++}}else if(T&&G.length===0&&P.substring(_,_+ce)===T){if(se===-1)return Le();_=se+K,se=P.indexOf(N,_),te=P.indexOf(w,_)}else if(te!==-1&&(te<se||se===-1))G.push(P.substring(_,te)),_=te+O,te=P.indexOf(w,_);else{if(se===-1)break;if(G.push(P.substring(_,se)),Ee(se+K),I&&(_e(),z))return Le();if(q&&F.length>=q)return Le(!0)}return pe();function me(he){F.push(he),ee=_}function je(he){var ue=0;return ue=he!==-1&&(he=P.substring($+1,he))&&he.trim()===""?he.length:ue}function pe(he){return M||(he===void 0&&(he=P.substring(_)),G.push(he),_=X,me(G),I&&_e()),Le()}function Ee(he){_=he,me(G),G=[],se=P.indexOf(N,_)}function Le(he){if(b.header&&!L&&F.length&&!B){var ue=F[0],xe=Object.create(null),it=new Set(ue);let tn=!1;for(let Pe=0;Pe<ue.length;Pe++){let Ne=ue[Pe];if(xe[Ne=S(b.transformHeader)?b.transformHeader(Ne,Pe):Ne]){let Ue,gn=xe[Ne];for(;Ue=Ne+"_"+gn,gn++,it.has(Ue););it.add(Ue),ue[Pe]=Ue,xe[Ne]++,tn=!0,(Y=Y===null?{}:Y)[Ue]=Ne}else xe[Ne]=1,ue[Pe]=Ne;it.add(Ne)}tn&&console.warn("Duplicate headers found and renamed."),B=!0}return{data:F,errors:W,meta:{delimiter:w,linebreak:N,aborted:z,truncated:!!he,cursor:ee+(L||0),renamedHeaders:Y}}}function _e(){D(Le()),F=[],W=[]}},this.abort=function(){z=!0},this.getCharIndex=function(){return _}}function h(b){var w=b.data,N=l[w.workerId],T=!1;if(w.error)N.userError(w.error,w.file);else if(w.results&&w.results.data){var D={abort:function(){T=!0,g(w.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:C,resume:C};if(S(N.userStep)){for(var q=0;q<w.results.data.length&&(N.userStep({data:w.results.data[q],errors:w.results.errors,meta:w.results.meta},D),!T);q++);delete w.results}else S(N.userChunk)&&(N.userChunk(w.results,D,w.file),delete w.results)}w.finished&&!T&&g(w.workerId,w.results)}function g(b,w){var N=l[b];S(N.userComplete)&&N.userComplete(w),N.terminate(),delete l[b]}function C(){throw new Error("Not implemented.")}function E(b){if(typeof b!="object"||b===null)return b;var w,N=Array.isArray(b)?[]:{};for(w in b)N[w]=E(b[w]);return N}function A(b,w){return function(){b.apply(w,arguments)}}function S(b){return typeof b=="function"}return c.parse=function(b,w){var N=(w=w||{}).dynamicTyping||!1;if(S(N)&&(w.dynamicTypingFunction=N,N={}),w.dynamicTyping=N,w.transform=!!S(w.transform)&&w.transform,!w.worker||!c.WORKERS_SUPPORTED)return N=null,c.NODE_STREAM_INPUT,typeof b=="string"?(b=(T=>T.charCodeAt(0)!==65279?T:T.slice(1))(b),N=new(w.download?x:y)(w)):b.readable===!0&&S(b.read)&&S(b.on)?N=new p(w):(s.File&&b instanceof File||b instanceof Object)&&(N=new m(w)),N.stream(b);(N=(()=>{var T;return!!c.WORKERS_SUPPORTED&&(T=(()=>{var D=s.URL||s.webkitURL||null,q=r.toString();return c.BLOB_URL||(c.BLOB_URL=D.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",q,")();"],{type:"text/javascript"})))})(),(T=new s.Worker(T)).onmessage=h,T.id=d++,l[T.id]=T)})()).userStep=w.step,N.userChunk=w.chunk,N.userComplete=w.complete,N.userError=w.error,w.step=S(w.step),w.chunk=S(w.chunk),w.complete=S(w.complete),w.error=S(w.error),delete w.worker,N.postMessage({input:b,config:w,workerId:N.id})},c.unparse=function(b,w){var N=!1,T=!0,D=",",q=`\r
`,Z='"',Y=Z+Z,B=!1,U=null,R=!1,_=((()=>{if(typeof w=="object"){if(typeof w.delimiter!="string"||c.BAD_DELIMITERS.filter(function(L){return w.delimiter.indexOf(L)!==-1}).length||(D=w.delimiter),typeof w.quotes!="boolean"&&typeof w.quotes!="function"&&!Array.isArray(w.quotes)||(N=w.quotes),typeof w.skipEmptyLines!="boolean"&&typeof w.skipEmptyLines!="string"||(B=w.skipEmptyLines),typeof w.newline=="string"&&(q=w.newline),typeof w.quoteChar=="string"&&(Z=w.quoteChar),typeof w.header=="boolean"&&(T=w.header),Array.isArray(w.columns)){if(w.columns.length===0)throw new Error("Option columns is empty");U=w.columns}w.escapeChar!==void 0&&(Y=w.escapeChar+Z),w.escapeFormulae instanceof RegExp?R=w.escapeFormulae:typeof w.escapeFormulae=="boolean"&&w.escapeFormulae&&(R=/^[=+\-@\t\r].*$/)}})(),new RegExp(k(Z),"g"));if(typeof b=="string"&&(b=JSON.parse(b)),Array.isArray(b)){if(!b.length||Array.isArray(b[0]))return z(null,b,B);if(typeof b[0]=="object")return z(U||Object.keys(b[0]),b,B)}else if(typeof b=="object")return typeof b.data=="string"&&(b.data=JSON.parse(b.data)),Array.isArray(b.data)&&(b.fields||(b.fields=b.meta&&b.meta.fields||U),b.fields||(b.fields=Array.isArray(b.data[0])?b.fields:typeof b.data[0]=="object"?Object.keys(b.data[0]):[]),Array.isArray(b.data[0])||typeof b.data[0]=="object"||(b.data=[b.data])),z(b.fields||[],b.data||[],B);throw new Error("Unable to serialize unrecognized input");function z(L,M,X){var O="",K=(typeof L=="string"&&(L=JSON.parse(L)),typeof M=="string"&&(M=JSON.parse(M)),Array.isArray(L)&&0<L.length),ce=!Array.isArray(M[0]);if(K&&T){for(var I=0;I<L.length;I++)0<I&&(O+=D),O+=P(L[I],I);0<M.length&&(O+=q)}for(var F=0;F<M.length;F++){var W=(K?L:M[F]).length,G=!1,ee=K?Object.keys(M[F]).length===0:M[F].length===0;if(X&&!K&&(G=X==="greedy"?M[F].join("").trim()==="":M[F].length===1&&M[F][0].length===0),X==="greedy"&&K){for(var J=[],Q=0;Q<W;Q++){var te=ce?L[Q]:Q;J.push(M[F][te])}G=J.join("").trim()===""}if(!G){for(var se=0;se<W;se++){0<se&&!ee&&(O+=D);var H=K&&ce?L[se]:se;O+=P(M[F][H],se)}F<M.length-1&&(!X||0<W&&!ee)&&(O+=q)}}return O}function P(L,M){var X,O;return L==null?"":L.constructor===Date?JSON.stringify(L).slice(1,25):(O=!1,R&&typeof L=="string"&&R.test(L)&&(L="'"+L,O=!0),X=L.toString().replace(_,Y),(O=O||N===!0||typeof N=="function"&&N(L,M)||Array.isArray(N)&&N[M]||((K,ce)=>{for(var I=0;I<ce.length;I++)if(-1<K.indexOf(ce[I]))return!0;return!1})(X,c.BAD_DELIMITERS)||-1<X.indexOf(D)||X.charAt(0)===" "||X.charAt(X.length-1)===" ")?Z+X+Z:X)}},c.RECORD_SEP=String.fromCharCode(30),c.UNIT_SEP=String.fromCharCode(31),c.BYTE_ORDER_MARK="\uFEFF",c.BAD_DELIMITERS=["\r",`
`,'"',c.BYTE_ORDER_MARK],c.WORKERS_SUPPORTED=!i&&!!s.Worker,c.NODE_STREAM_INPUT=1,c.LocalChunkSize=10485760,c.RemoteChunkSize=5242880,c.DefaultDelimiter=",",c.Parser=v,c.ParserHandle=j,c.NetworkStreamer=x,c.FileStreamer=m,c.StringStreamer=y,c.ReadableStreamStreamer=p,s.jQuery&&((a=s.jQuery).fn.parse=function(b){var w=b.config||{},N=[];return this.each(function(q){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var Z=0;Z<this.files.length;Z++)N.push({file:this.files[Z],inputElem:this,instanceConfig:a.extend({},w)})}),T(),this;function T(){if(N.length===0)S(b.complete)&&b.complete();else{var q,Z,Y,B,U=N[0];if(S(b.before)){var R=b.before(U.file,U.inputElem);if(typeof R=="object"){if(R.action==="abort")return q="AbortError",Z=U.file,Y=U.inputElem,B=R.reason,void(S(b.error)&&b.error({name:q},Z,Y,B));if(R.action==="skip")return void D();typeof R.config=="object"&&(U.instanceConfig=a.extend(U.instanceConfig,R.config))}else if(R==="skip")return void D()}var _=U.instanceConfig.complete;U.instanceConfig.complete=function(z){S(_)&&_(z,U.file,U.inputElem),D()},c.parse(U.file,U.instanceConfig)}}function D(){N.splice(0,1),T()}}),o&&(s.onmessage=function(b){b=b.data,c.WORKER_ID===void 0&&b&&(c.WORKER_ID=b.workerId),typeof b.input=="string"?s.postMessage({workerId:c.WORKER_ID,results:c.parse(b.input,b.config),finished:!0}):(s.File&&b.input instanceof File||b.input instanceof Object)&&(b=c.parse(b.input,b.config))&&s.postMessage({workerId:c.WORKER_ID,results:b,finished:!0})}),(x.prototype=Object.create(f.prototype)).constructor=x,(m.prototype=Object.create(f.prototype)).constructor=m,(y.prototype=Object.create(y.prototype)).constructor=y,(p.prototype=Object.create(f.prototype)).constructor=p,c})})(lm);var Rx=lm.exports;const ir=Ad(Rx);function Vl({startRect:e,targetRef:t,count:r=12,onDone:s}){return u.useEffect(()=>{const a=t==null?void 0:t.current;if(!e||!a){s==null||s();return}const i=a.getBoundingClientRect(),o=document.createElement("div");o.style.position="fixed",o.style.inset="0",o.style.pointerEvents="none",o.style.zIndex="9999",document.body.appendChild(o);const l=i.left+i.width/2,d=i.top+i.height/2,c=e.left+e.width/2,f=e.top+e.height/2,x=200;let m=0;function y(p){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const k=c,v=f,h=l,g=d;j.style.transform=`translate(${k}px, ${v}px) scale(1)`,o.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${x}ms cubic-bezier(.2,.8,.2,1), opacity ${x}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${h}px, ${g}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),m+=1,m===r&&(o.remove(),s==null||s())},x+50)}for(let p=0;p<r;p++)setTimeout(()=>y(),p*60);return()=>{try{o.remove()}catch{}}},[e,t,r,s]),null}const ct={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},pd=e=>Math.floor(e/ct.XP_PER_LEVEL)+1,Tx=e=>{const t=e%ct.XP_PER_LEVEL;return{current:t,required:ct.XP_PER_LEVEL,percentage:t/ct.XP_PER_LEVEL*100}};function _x({player:e,size:t="normal",showLevel:r=!0,showName:s=!0}){const a=ct.AVATARS.find(o=>o.id===e.avatar)||ct.AVATARS[0],i={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`${i[t]} rounded-full bg-gradient-to-br ${a.bgColor} flex items-center justify-center shadow-lg`,children:n.jsx("span",{children:a.emoji})}),r&&n.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:e.name}),n.jsx("div",{className:"text-xs text-base-muted",children:a.name})]})]})}function Px({current:e,required:t,level:r,animate:s=!0}){const[a,i]=u.useState(0),o=e/t*100;return u.useEffect(()=>{if(s){const l=setTimeout(()=>{i(o)},100);return()=>clearTimeout(l)}else i(o)},[o,s]),n.jsxs("div",{className:"w-full",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs font-medium",children:["Level ",r]}),n.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),n.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${a}%`},children:n.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}const cm=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],dm=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],um=[...cm.filter(e=>e.slug!=="more"),...dm];function Ax({onClick:e}){return n.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:e,children:[n.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),n.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),n.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),n.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),n.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]})}function Lx({actions:e}){return n.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,r)=>n.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[n.jsx("div",{className:"text-2xl",children:t.icon}),n.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},r))})}function Ix({categories:e,onCategorySelect:t}){return n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),n.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(r=>n.jsxs("button",{onClick:()=>t(r),className:`bg-gradient-to-br ${r.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[n.jsx("div",{className:"text-3xl",children:r.icon}),n.jsx("div",{className:"text-xs font-bold text-white text-center",children:r.name}),r.questions>0&&n.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[r.questions," Qs"]})]},r.name))})]})}function Mx({onClick:e,isPulsing:t}){return n.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium",children:"Practice Mode"}),n.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),n.jsx("div",{className:"text-xl",children:"→"})]})}function Dx({dailyQ:e,isFlipped:t,picked:r,onAnswer:s,dailyCompleted:a,DAILY_Q_COINS:i,DAILY_Q_XP:o}){return a?n.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"✅"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}):e?n.jsx("div",{className:"flip-card mb-6",children:n.jsxs("div",{className:`flip-card-inner ${t?"flipped":""}`,children:[n.jsx("div",{className:"flip-card-front",children:n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),n.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",i," coins +",o," XP"]})]}),n.jsx("p",{className:"text-sm mb-4 text-base-muted",children:e.prompt}),n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.options.map((l,d)=>{const c=d===e.answerIndex,f=r===d,x=r!==null;return n.jsx("button",{onClick:m=>s(d,m),disabled:r!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${x?c?"border-green-500 bg-green-500/20":f?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${r!==null?"cursor-not-allowed":"cursor-pointer"}`,children:l},d)})})]})}),n.jsx("div",{className:"flip-card-back absolute inset-0",children:n.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[n.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),n.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),n.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",i," coins & ",o," XP!"]}),n.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}):null}function zx({show:e,onClose:t,player:r,changeAvatar:s,GAME_CONSTANTS:a}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:i=>i.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.AVATARS.map(i=>{const o=!r.unlockedAvatars.includes(i.id),l=r.avatar===i.id;return n.jsxs("button",{onClick:()=>{o||(s(i.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":o?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:o,children:[n.jsx("div",{className:`text-4xl mb-2 ${o?"grayscale":""}`,children:i.emoji}),n.jsx("div",{className:"text-sm font-medium",children:i.name}),o&&n.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",i.unlockLevel]}),l&&n.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},i.id)})})]})}):null}function Fx({show:e,onClose:t,categories:r,onCategorySelect:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:a=>a.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:r.map(a=>n.jsxs("button",{onClick:()=>{t(),s(a)},className:`bg-gradient-to-br ${a.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[n.jsx("div",{className:"text-3xl",children:a.icon}),n.jsx("div",{className:"text-sm font-bold text-white",children:a.name}),n.jsxs("div",{className:"text-xs text-white/80",children:[a.questions," questions"]})]},a.name))})]})}):null}function Ox({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"magic-gradient h-full"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[r," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function $x({show:e,onClose:t,selectedCategory:r,difficulty:s,setDifficulty:a,count:i,setCount:o,timer:l,setTimer:d,onStart:c}){return!e||!r?null:n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:r.icon}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium",children:["Category: ",r.name]}),n.jsxs("div",{className:"text-xs text-base-muted",children:[r.questions," questions available"]})]})]})}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>a(f),className:`py-2 rounded-xl border ${s===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),n.jsx("input",{type:"number",value:l,onChange:f=>d(Number(f.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:c,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function Bx({show:e,onClose:t,allCategories:r,category:s,setCategory:a,difficulty:i,setDifficulty:o,count:l,setCount:d,onStart:c}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),n.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:r.map(f=>n.jsxs("button",{onClick:()=>a(f.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===f.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[n.jsx("div",{className:"text-xl",children:f.icon}),n.jsx("div",{className:"text-[10px] text-center",children:f.name})]},f.slug))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>d(f),className:`py-2 rounded-xl border ${l===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:c,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}const xd=(e=new Date)=>e.toLocaleDateString("en-CA"),gd=(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},Ux=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function vd(){const e=at(),{player:t,addXP:r,addCoins:s,levelProgress:a,useEnergy:i,changeAvatar:o}=xn(),[l]=At("/sounds/correct.mp3",{volume:.6}),[d]=At("/sounds/wrong.mp3",{volume:.6}),[c]=At("/sounds/coin.mp3",{volume:.75}),[f]=At("/sounds/levelup.mp3",{volume:.8}),x=u.useRef(t.level),m=u.useRef(null);u.useEffect(()=>{const pe=()=>{};return window.addEventListener("focus",pe),()=>window.removeEventListener("focus",pe)},[]),u.useEffect(()=>{t.level>x.current&&(f==null||f(),x.current=t.level)},[t.level,f]);const[y,p]=u.useState(!1),[j,k]=u.useState(null),[v,h]=u.useState(!1),[g,C]=u.useState("medium"),[E,A]=u.useState(10),[S,b]=u.useState(45),[w,N]=u.useState(!1),[T,D]=u.useState(!1),[q,Z]=u.useState(null),[Y,B]=u.useState(null),[U,R]=u.useState(!1),[_,z]=u.useState(!1),[P,L]=u.useState(null),M=10,X=5,[O,K]=u.useState(!1),[ce,I]=u.useState(!1),[F,W]=u.useState("general-knowledge"),[G,ee]=u.useState("medium"),[J,Q]=u.useState(10),[te,se]=u.useState(()=>gd("dq_daily_log",{})[xd()]===!0);u.useEffect(()=>{const pe=sessionStorage.getItem("homeScrollPosition");pe&&window.scrollTo(0,parseInt(pe));const Ee=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",Ee),()=>window.removeEventListener("scroll",Ee)},[]),u.useEffect(()=>{if(te)return;(async()=>{var Ee;try{const Le=await fetch("/data/quiz_questions_bank.csv").then(xe=>xe.text()),{data:_e}=ir.parse(Le,{header:!0,skipEmptyLines:!0});if(!_e.length)throw new Error("empty");const he=_e[Math.floor(Math.random()*_e.length)],ue=[he.option1,he.option2,he.option3,he.option4].filter(Boolean);Z({category:he.category||"General",prompt:he.question,options:ue,answerIndex:["A","B","C","D"].indexOf((Ee=he.answer)==null?void 0:Ee.toUpperCase())||0})}catch{Z({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[te]);const H=(pe,Ee)=>{if(Y!==null)return;B(pe);const Le=pe===q.answerIndex;if(Le){if(l(),Ee!=null&&Ee.currentTarget&&m.current){const _e=Ee.currentTarget.getBoundingClientRect();c(),L({startRect:_e,count:10,amount:X})}}else d();setTimeout(()=>{if(z(!0),R(!0),Le){const _e=xd();Ux("dq_daily_log",{...gd("dq_daily_log",{}),[_e]:!0}),se(!0);const he=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(he+1))}},600)},$=pe=>{if(pe.slug==="more"){p(!0);return}k(pe),h(!0)},ne=()=>{console.log("Starting quiz with energy:",t.energy),console.log("Category:",j.slug),e(`/quiz/${j.slug}`,{state:{mode:"quiz",difficulty:g,count:E,timer:{type:"per_q",seconds:S},source:"adventure"}}),h(!1)},me=()=>{console.log("Starting practice, category:",F),e(`/quiz/${F}`,{state:{mode:"practice",difficulty:G,count:J,timer:{type:"off",seconds:0}}}),I(!1)},je=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>e("/profile/quests")},{icon:"🔥",label:"Streak",color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>e("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>e("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>e("/profile/rewards")}];return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),n.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[n.jsx("style",{jsx:!0,children:`
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
        `}),P&&n.jsx(Vl,{startRect:P.startRect,targetRef:m,count:P.count,onDone:()=>{O||(r(M),s(P.amount),K(!0)),L(null)}}),n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"flex justify-between items-start mb-4",children:[n.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>D(!0),children:n.jsx(_x,{player:t,size:"small",showLevel:!0,showName:!0})}),n.jsx("div",{className:"flex gap-2",children:n.jsxs("button",{ref:m,onClick:()=>N(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold",children:t.coins})]})})]}),n.jsx(Px,{current:a.current,required:a.required,level:t.level,animate:!0})]}),n.jsx(Ax,{onClick:()=>e("/play")}),n.jsx(Lx,{actions:je}),n.jsx(Dx,{dailyQ:q,isFlipped:_,picked:Y,onAnswer:H,dailyCompleted:te,DAILY_Q_COINS:X,DAILY_Q_XP:M}),n.jsx(Ix,{categories:cm,onCategorySelect:$}),n.jsx(Mx,{onClick:()=>I(!0),isPulsing:t.energy<10}),n.jsx(zx,{show:T,onClose:()=>D(!1),player:t,changeAvatar:o,GAME_CONSTANTS:ct}),n.jsx($x,{show:v,onClose:()=>h(!1),selectedCategory:j,difficulty:g,setDifficulty:C,count:E,setCount:A,timer:S,setTimer:b,onStart:ne}),n.jsx(Bx,{show:ce,onClose:()=>I(!1),allCategories:um,category:F,setCategory:W,difficulty:G,setDifficulty:ee,count:J,setCount:Q,onStart:me}),n.jsx(Fx,{show:y,onClose:()=>p(!1),categories:dm,onCategorySelect:$}),n.jsx(Ox,{show:w,onClose:()=>N(!1),coins:t.coins,onNavigateToPlay:()=>{N(!1),e("/play")}})]})]})}const Wt={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},Gt={get:(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function Xl(){const[e,t]=u.useState(()=>Gt.get(Wt.COINS,0)),[r,s]=u.useState(()=>Gt.get(Wt.XP,0)),[a,i]=u.useState(()=>Gt.get(Wt.LEVEL,1)),[o,l]=u.useState(()=>Gt.get(Wt.OWNED_CHARACTERS,[])),[d,c]=u.useState(()=>Gt.get(Wt.SOUND,!0));return u.useEffect(()=>Gt.set(Wt.COINS,e),[e]),u.useEffect(()=>Gt.set(Wt.XP,r),[r]),u.useEffect(()=>Gt.set(Wt.LEVEL,a),[a]),u.useEffect(()=>Gt.set(Wt.OWNED_CHARACTERS,o),[o]),u.useEffect(()=>Gt.set(Wt.SOUND,d),[d]),{coins:e,xp:r,level:a,ownedCharacters:o,soundOn:d,addCoins:p=>t(j=>j+p),addXp:p=>s(j=>j+p),unlockCharacter:p=>{l(j=>[...new Set([...j,p])])},setSoundOn:c,checkLevelUp:()=>{const p=100*a*(a-1);return r>=p?(i(j=>j+1),!0):!1},nextLevelThreshold:100*a*(a-1),xpProgress:r/(100*a*(a-1))}}const qx=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Xt=qx.slice(0,6),Gn=360/Xt.length,fm={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},yn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},Jn=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),yd=e=>(e%360+360)%360,Kl=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},Er=(e,t=.7)=>{try{const r=new Audio(e);r.volume=t,r.play()}catch{}};function Yx({run:e,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:i,onBack:o,spinning:l,angle:d,transition:c,result:f,showCallout:x,glowColor:m,soundOn:y,setSoundOn:p,showSparkle:j,pulseIdx:k,nextProgressIdx:v,pendingProgressIdx:h,coinBurstTick:g,lastAnswerWasCorrect:C}){const E=100*s*(s-1),[A,S]=u.useState(!1),b=u.useRef(0),w=u.useRef(null),N=u.useRef(null),[T,D]=u.useState({dx:110,dy:-260}),[q,Z]=u.useState(!1);return u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),u.useEffect(()=>{if(h==null)return;S(!1);const Y=setTimeout(()=>S(!0),30);return()=>clearTimeout(Y)},[h]),u.useEffect(()=>{var B,U,R,_;if(!g||!C||g===b.current)return;b.current=g;try{const z=(U=(B=N==null?void 0:N.current)==null?void 0:B.getBoundingClientRect)==null?void 0:U.call(B),P=(_=(R=w==null?void 0:w.current)==null?void 0:R.getBoundingClientRect)==null?void 0:_.call(R);if(z&&P){const L=z.left+z.width/2,M=z.top+z.height/2,X=P.left+P.width/2,O=P.top+P.height/2;D({dx:X-L,dy:O-M})}}catch{}y&&Er("/sounds/coin.mp3",.7),Z(!0);const Y=setTimeout(()=>Z(!1),700);return()=>clearTimeout(Y)},[g,y,C]),n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-8",children:[n.jsx("button",{onClick:o,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[n.jsxs("div",{className:"text-[11px]",children:["Lvl ",s," • ",r,"/",E]}),n.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:n.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(r/E,1)*100}%`}})})]}),n.jsxs("button",{ref:w,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),n.jsx("button",{onClick:()=>p(!y),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:n.jsx("span",{className:"text-lg",children:y?"🔊":"🔇"})})]}),a.length>0&&n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:a.map(Y=>{const B=Xt.find(R=>Jn(R.name)===Y),U=fm[Y];return n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:n.jsx("span",{className:"text-sm",children:B==null?void 0:B.icon})}),n.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:U})]},Y)})})}),n.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:n.jsxs("div",{className:"w-80 max-w-full",children:[n.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),n.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(Y=>{const B=["#FF9800","#FFC107","#cadd75ff"],U=!!e.progress[Y];return n.jsxs("div",{className:"relative h-full bg-white/10",children:[n.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:U?Y===h?A?"100%":"0%":v===Y&&h==null?"0%":"100%":"0%",backgroundColor:B[Y],transition:Y===h?"width 1200ms ease-out":"none"}}),k===Y&&n.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:n.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),j===Y&&n.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},Y)})},e.qIndex)]})}),n.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:n.jsxs("div",{ref:N,className:"relative w-96 h-96 rounded-full select-none",children:[m&&n.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${m}40, 0 0 40px 12px ${m}60`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${d}deg)`,transition:c},children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Xt.map((Y,B)=>{const U=B*Gn,R=U+Gn,_=Gn>180?1:0,z=Math.PI*U/180,P=Math.PI*R/180,L=50+45*Math.cos(z),M=50-45*Math.sin(z),X=50+45*Math.cos(P),O=50-45*Math.sin(P),K=U+Gn/2,ce=28,I=50+ce*Math.cos(K*Math.PI/180),F=50-ce*Math.sin(K*Math.PI/180);return n.jsxs("g",{children:[n.jsx("path",{d:`M50,50 L${L},${M} A45,45 0 ${_} 0 ${X},${O} Z`,fill:Y.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),n.jsx("text",{x:I,y:F,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:Y.icon})]},B)}),n.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),n.jsx("button",{onClick:i,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:n.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:n.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),x&&f&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:n.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[n.jsx("span",{className:"mr-2",children:f.cat.icon}),f.cat.name]})}),q&&n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(Y=>n.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${Y*80}ms forwards`,"--coin-dx":`${T.dx}px`,"--coin-dy":`${T.dy}px`},children:n.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},Y))]})]})}),n.jsx("div",{className:"text-center",children:n.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}var Ea={linear:function(e,t,r,s){var a=r-t;return a*e/s+t},easeInQuad:function(e,t,r,s){var a=r-t;return a*(e/=s)*e+t},easeOutQuad:function(e,t,r,s){var a=r-t;return-a*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e+t},easeOutCubic:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,r,s){var a=r-t;return-a*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,s){var a=r-t;return-a*Math.cos(e/s*(Math.PI/2))+a+t},easeOutSine:function(e,t,r,s){var a=r-t;return a*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,r,s){var a=r-t;return-a/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,r,s){var a=r-t;return e==0?t:a*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,r,s){var a=r-t;return e==s?t+a:a*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,r,s){var a=r-t;return e===0?t:e===s?t+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,s){var a=r-t;return-a*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,r,s){var a=r-t;return a*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t)},easeOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),i*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/o)+a+t)},easeInOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s/2)===2?t+a:(o||(o=s*(.3*1.5)),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o)*.5+a+t)},easeInBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*(e/=s)*e*((a+1)*e-a)+t},easeOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*((e=e/s-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),(e/=s/2)<1?i/2*(e*e*(((a*=1.525)+1)*e-a))+t:i/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(e,t,r,s){var a=r-t,i;return i=Ea.easeOutBounce(s-e,0,a,s),a-i+t},easeOutBounce:function(e,t,r,s){var a=r-t;return(e/=s)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,s){var a=r-t,i;return e<s/2?(i=Ea.easeInBounce(e*2,0,a,s),i*.5+t):(i=Ea.easeOutBounce(e*2-s,0,a,s),i*.5+a*.5+t)}},Qx=Ea;function Hx(e){return e*Math.PI/180}function jt(e,t){return e+Math.random()*(t-e)}function Wx(e,t){return Math.floor(e+Math.random()*(t-e+1))}var ps;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(ps||(ps={}));var kn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(kn||(kn={}));const Gx=1e3/60;class Vx{constructor(t,r,s,a){this.getOptions=r;const{colors:i,initialVelocityX:o,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=a,this.w=jt(5,20),this.h=jt(5,20),this.radius=jt(5,10),this.vx=typeof o=="number"?jt(-o,o):jt(o.min,o.max),this.vy=typeof l=="number"?jt(-l,0):jt(l.min,l.max),this.shape=Wx(0,2),this.angle=Hx(jt(0,360)),this.angularSpin=jt(-.2,.2),this.color=i[Math.floor(Math.random()*i.length)],this.rotateY=jt(0,1),this.rotationDirection=jt(0,1)?kn.Positive:kn.Negative}update(t){const{gravity:r,wind:s,friction:a,opacity:i,drawShape:o}=this.getOptions(),l=t/Gx;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=r*l,this.vx+=s*l,this.vx*=a**l,this.vy*=a**l,this.rotateY>=1&&this.rotationDirection===kn.Positive?this.rotationDirection=kn.Negative:this.rotateY<=-1&&this.rotationDirection===kn.Negative&&(this.rotationDirection=kn.Positive);const d=.1*this.rotationDirection*l;if(this.rotateY+=d,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=i,this.context.lineCap="round",this.context.lineWidth=2,o&&typeof o=="function")o.call(this,this.context);else switch(this.shape){case ps.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case ps.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case ps.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class Xx{constructor(t,r){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=a=>{this.particles.splice(a,1)},this.getParticle=()=>{const a=jt(this.x,this.w+this.x),i=jt(this.y,this.h+this.y);return new Vx(this.context,this.getOptions,a,i)},this.animate=a=>{const{canvas:i,context:o,particlesGenerated:l,lastNumberOfPieces:d}=this,{run:c,recycle:f,numberOfPieces:x,debug:m,tweenFunction:y,tweenDuration:p}=this.getOptions();if(!c)return!1;const j=this.particles.length,k=f?j:l;if(k<x){d!==x&&(this.tweenProgress=0,this.tweenFrom=k,this.lastNumberOfPieces=x),this.tweenProgress=Math.min(p,Math.max(0,this.tweenProgress+a));const v=y(this.tweenProgress,this.tweenFrom,x,p),h=Math.round(v-k);for(let g=0;g<h;g++)this.particles.push(this.getParticle());this.particlesGenerated+=h}m&&(o.font="12px sans-serif",o.fillStyle="#333",o.textAlign="right",o.fillText(`Particles: ${j}`,i.width-10,i.height-20));for(let v=this.particles.length-1;v>=0;v--){const h=this.particles[v];h.update(a),(h.y>i.height||h.y<-100||h.x>i.width+100||h.x<-100)&&(f&&k<=x?this.particles[v]=this.getParticle():this.removeParticleAt(v))}return j>0||k<x},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=r}}const Jl={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:Qx.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class Kx{constructor(t,r){this.lastFrameTime=0,this.setOptionsWithDefaults=a=>{const i={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...i,...Jl,...a},Object.assign(this,a.confettiSource)},this.update=(a=0)=>{const{options:{run:i,onConfettiComplete:o,frameRate:l},canvas:d,context:c}=this,f=Math.min(a-this.lastFrameTime,50);if(l&&f<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=a-(l?f%l:0),i&&(c.fillStyle="white",c.clearRect(0,0,d.width,d.height)),this.generator.animate(f)?this.rafId=requestAnimationFrame(this.update):(o&&typeof o=="function"&&this.generator.particlesGenerated>0&&o.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new Xx(this.canvas,()=>this.options),this.options=r,this.update()}get options(){return this._options}set options(t){var a,i;const r=(a=this._options)==null?void 0:a.run,s=(i=this._options)==null?void 0:i.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&r===!1&&this.update()}}const Jx=ft.createRef();class Zl extends ft.Component{constructor(t){super(t),this.canvas=ft.createRef(),this.canvas=t.canvasRef||Jx}componentDidMount(){if(this.canvas.current){const t=Wi(this.props)[0];this.confetti=new Kx(this.canvas.current,t)}}componentDidUpdate(){const t=Wi(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,r]=Wi(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...r.style};return n.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...r,style:s})}}Zl.defaultProps={...Jl};Zl.displayName="ReactConfetti";function Wi(e){const t={},r={},s={},a=[...Object.keys(Jl),"confettiSource","drawShape","onConfettiComplete","frameRate"],i=["canvasRef"];for(const o in e){const l=e[o];a.includes(o)?t[o]=l:i.includes(o)?i[o]=l:s[o]=l}return[t,s,r]}const mm=ft.forwardRef((e,t)=>n.jsx(Zl,{canvasRef:t,...e}));function bd({question:e,category:t,onAnswer:r,run:s,timeLeft:a,usedLifelines:i,onUseLifeline:o,eliminatedOptions:l,audienceData:d,onBack:c,timeUp:f,onTimeUpBackToWheel:x,soundOn:m}){const[y,p]=u.useState(null),[j,k]=u.useState(!1),[v,h]=u.useState(!1),g=u.useRef(null),C=u.useRef(null),[E,A]=u.useState(null);u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),u.useEffect(()=>{if(!j||!g.current)return;const w=g.current.getBoundingClientRect();A({x:w.left,y:w.top-300,w:w.width,h:8})},[j]);const S=w=>{if(j)return;p(w),k(!0);const N=w===e.correctIndex;Kl(N?[50,30,50]:[200]),m&&Er(N?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{r(N,null)},1500)},b=y===e.correctIndex;return n.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:n.jsxs("div",{ref:C,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("div",{className:"mb-4",children:n.jsx("button",{onClick:()=>h(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:`text-4xl font-black mb-2 ${a<=10?"text-red-400 animate-pulse":"text-white"}`,children:a}),n.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:n.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${a<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${a/30*100}%`}})})]}),n.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[n.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-lg font-bold",children:t.name}),n.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),n.jsx("h2",{ref:g,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),n.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((w,N)=>{const T=l.includes(N),D=y===N,q=N===e.correctIndex;let Z="bg-white/10 border-white/20",Y="opacity-100";return T?Y="opacity-30":j&&D?Z=q?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&q?Z="bg-green-500/30 border-green-400":D&&(Z="bg-white/20 border-white/40"),n.jsx("button",{onClick:()=>S(N),disabled:j||T,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${Z} ${Y} ${!j&&!T?"hover:bg-white/15 active:scale-98":""}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+N)}),n.jsx("span",{className:"font-medium flex-1",children:w}),d&&n.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(d[N]),"%"]})]})},N)})}),!j&&n.jsxs("div",{className:"flex gap-4 mb-8",children:[n.jsx("button",{onClick:()=>o("fifty"),disabled:i.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),n.jsx("button",{onClick:()=>o("audience"),disabled:i.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&n.jsxs("div",{className:"relative text-center",children:[b&&n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsx(mm,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:E||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),n.jsx("button",{onClick:()=>r(b,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),f&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),n.jsx("button",{onClick:x,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),v&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>h(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),n.jsx("button",{onClick:c,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function wd({category:e,onComplete:t,isBonus:r=!1,soundOn:s=!0}){return u.useEffect(()=>{s&&Er("/sounds/flush.mp3",.8);const a=setTimeout(t,1e3);return Kl([50]),()=>clearTimeout(a)},[t,s]),u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),r?n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[n.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),n.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:n.jsx("span",{className:"text-6xl",children:"⭐"})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[n.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[n.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),n.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),n.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:n.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function Zx({onDone:e}){return u.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:n.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function eg({onSelect:e}){return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[n.jsxs("header",{className:"text-center mb-12",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),n.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),n.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-6",children:Xt.map(t=>{const r=fm[Jn(t.name)];return n.jsxs("button",{onClick:()=>e(Jn(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[n.jsx("div",{className:"text-4xl mb-3",children:t.icon}),n.jsx("div",{className:"font-black text-lg mb-1",children:r}),n.jsx("div",{className:"text-sm opacity-75",children:t.name})]},Jn(t.name))})})]})})}function tg({onBack:e}){const{coins:t,xp:r,level:s,ownedCharacters:a,soundOn:i,addCoins:o,addXp:l,unlockCharacter:d,setSoundOn:c}=Xl(),[f,x]=u.useState("wheel"),[m,y]=u.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[p,j]=u.useState([]),[k,v]=u.useState(null),[h,g]=u.useState(null),[C,E]=u.useState(30),[A,S]=u.useState([]),[b,w]=u.useState(null),[N,T]=u.useState(null),[D,q]=u.useState(!1),[Z,Y]=u.useState(0),[B,U]=u.useState("none"),[R,_]=u.useState(!1),[z,P]=u.useState(null),[L,M]=u.useState(!1),[X,O]=u.useState(null),[K,ce]=u.useState(-1),[I,F]=u.useState(0),[W,G]=u.useState(null),[ee,J]=u.useState(null),[Q,te]=u.useState(!1),[se,H]=u.useState(null),[$,ne]=u.useState(-1),[me,je]=u.useState([!1,!1,!1]),[pe,Ee]=u.useState(!1),[Le,_e]=u.useState(!1),he=u.useRef(null),ue=u.useRef(null),xe=u.useRef(null),it=u.useMemo(()=>{var de;return((de=window.matchMedia)==null?void 0:de.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);u.useEffect(()=>(tn(),Pe(),()=>Ne()),[]),u.useEffect(()=>(f==="question"&&C>0&&!Le?he.current=setTimeout(()=>{E(de=>{const oe=de-1;return oe===10&&i&&Er("/sounds/tick.mp3",.8),oe})},1e3):f==="question"&&C===0&&q(!0),()=>{he.current&&clearTimeout(he.current)}),[f,C,i,Le]),u.useEffect(()=>{if(f!=="wheel"||W==null)return;ce(W),i&&Er("/sounds/progress.mp3",.6),ne(W);const de=setTimeout(()=>ne(-1),900),oe=setTimeout(()=>ce(-1),900),be=setTimeout(()=>{se&&(se==="streakFlash"?x("streakFlash"):se==="characterPicker"?x("characterPicker"):(e(),Ue()),H(null)),G(null)},1800);return()=>{clearTimeout(de),clearTimeout(oe),clearTimeout(be)}},[f,W,se,i,e]),u.useEffect(()=>{f!=="wheel"||!pe||(F(de=>de+1),Ee(!1))},[f,pe]),u.useEffect(()=>{if(f!=="wheel"||ee==null)return;const oe=setTimeout(()=>{G(ee),J(null)},Q?1800:0);return()=>clearTimeout(oe)},[f,ee,Q]);const tn=async()=>{try{const oe=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:be}=ir.parse(oe,{header:!0,skipEmptyLines:!0,transformHeader:ge=>ge.trim().toLowerCase()}),Ce=be.map((ge,ae)=>{var Re;const le=[ge.option1,ge.option2,ge.option3,ge.option4].map(Ie=>(Ie||"").trim()).filter(Boolean);if(le.length<4)return null;let De={a:0,b:1,c:2,d:3}[(Re=ge.answer)==null?void 0:Re.toLowerCase()];return De===void 0&&(De=le.findIndex(Ie=>Ie.toLowerCase()===(ge.answer||"").toLowerCase())),De===-1&&(De=0),{id:ge.id||`q_${ae}`,prompt:(ge.question||"").trim(),options:le,correctIndex:De,category:(ge.category||ge.subject||"general knowledge").trim(),difficulty:(ge.difficulty||"medium").toLowerCase(),explanation:(ge.explanation||"").trim()}}).filter(Boolean);j(Ce)}catch(de){console.error("Failed to load questions:",de),j([])}},Pe=()=>{const de=new Audio("/sounds/spin.mp3");de.loop=!0,de.volume=.6,ue.current=de},Ne=()=>{if(he.current&&clearTimeout(he.current),xe.current&&(clearTimeout(xe.current),xe.current=null),ue.current){try{ue.current.pause()}catch{}ue.current=null}},Ue=()=>{y({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),je([!1,!1,!1]),v(null),g(null),T(null),S([]),w(null),q(!1),F(0)},gn=()=>{if(i&&ue.current){try{ue.current.currentTime=0,ue.current.play()}catch{}xe.current&&clearTimeout(xe.current),xe.current=setTimeout(()=>{or()},2e3)}},or=()=>{if(xe.current&&(clearTimeout(xe.current),xe.current=null),ue.current)try{ue.current.pause(),ue.current.currentTime=0}catch{}},Br=()=>{if(R)return;P(null),M(!1),O(null),_(!0),gn();const de=Math.floor(Math.random()*Xt.length),oe=Xt[de],be=yd(Z),Ce=de*Gn+Gn/2,ge=(Math.random()-.5)*(Gn*.3),ae=360-Ce+ge;let le=yd(ae-be);const ve=yn.FULL_TURNS*360+le,De=Z+ve+yn.OVERSHOOT;U(`transform ${it?1e3:yn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),Y(De),Kl([20,50,20]),setTimeout(()=>{U(`transform ${it?200:yn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),Y(Re=>Re-yn.OVERSHOOT)},it?1e3:yn.DURATION),setTimeout(()=>{or(),_(!1),P({cat:oe,index:de}),g(oe),O(oe.color),M(!0),setTimeout(()=>{M(!1),x("interstitial")},1500),setTimeout(()=>O(null),1e3)},(it?1e3:yn.DURATION)+(it?200:yn.SETTLE_DURATION)+100)},re=()=>{const de=p.filter(be=>{const Ce=be.category.toLowerCase(),ge=h.name.toLowerCase();return Ce.includes(ge)||ge.includes(Ce)});let oe;de.length>0?oe=de[Math.floor(Math.random()*de.length)]:oe=p[Math.floor(Math.random()*p.length)],oe?(v(oe),E(30),S([]),w(null),q(!1),_e(!1),x("question")):x("wheel")},fe=(de,oe,be=!1)=>{if(!be){_e(!0);return}const Ce=m.qIndex,ge=[...m.progress];ge[Ce]=!0;const ae=[...me];if(ae[Ce]=!!de,je(ae),y(le=>({...le,progress:ge,qIndex:le.qIndex+1})),de&&(o(5),l(1),Ee(!0)),J(Ce),te(!!de),Ce===2){const le=ae.every(Boolean);H(le?"streakFlash":"modes")}else H(null);x("wheel")},Ae=de=>{if(!(m.lifelines[de]||!k)){if(y(oe=>({...oe,lifelines:{...oe.lifelines,[de]:!0}})),de==="fifty"){const be=k.options.map((Ce,ge)=>ge).filter(Ce=>Ce!==k.correctIndex).slice(0,2);S(be)}else if(de==="audience"){const oe=40+Math.random()*25;let be=100-oe;const Ce=[0,0,0,0];Ce[k.correctIndex]=Math.round(oe);const ge=[0,1,2,3].filter(ae=>ae!==k.correctIndex);ge.forEach((ae,le)=>{if(le===ge.length-1)Ce[ae]=be;else{const ve=Math.floor(Math.random()*be);Ce[ae]=ve,be-=ve}}),w(Ce)}}},Se=de=>{T(de),x("bonusInterstitial")},We=de=>{de&&N&&(d(N),i&&Er("/sounds/coin.mp3",1)),setTimeout(()=>{e(),Ue()},3e3)},ye=()=>{x("wheel")};switch(f){case"wheel":return n.jsx(Yx,{run:m,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:Br,onBack:e,spinning:R,angle:Z,transition:B,result:z,showCallout:L,glowColor:X,soundOn:i,setSoundOn:c,showSparkle:K,pulseIdx:$,coinBurstTick:I,pendingProgressIdx:W,lastAnswerWasCorrect:Q,nextProgressIdx:ee});case"interstitial":return n.jsx(wd,{category:h,onComplete:re,soundOn:i});case"streakFlash":return n.jsx(Zx,{onDone:()=>x("characterPicker")});case"question":return n.jsx(bd,{question:k,category:h,onAnswer:fe,run:m,timeLeft:C,usedLifelines:m.lifelines,onUseLifeline:Ae,eliminatedOptions:A,audienceData:b,onBack:ye,timeUp:D,onTimeUpBackToWheel:()=>{q(!1),x("wheel")},soundOn:i});case"characterPicker":return n.jsx(eg,{onSelect:Se});case"bonusInterstitial":return n.jsx(wd,{category:Xt.find(de=>Jn(de.name)===N),onComplete:()=>x("bonusQuestion"),isBonus:!0,soundOn:i});case"bonusQuestion":if(!k){const de=Xt.find(oe=>Jn(oe.name)===N);if(de&&p.length>0){const oe=p.filter(Ce=>{const ge=Ce.category.toLowerCase(),ae=de.name.toLowerCase();return ge.includes(ae)||ae.includes(ge)}),be=oe.length>0?oe[Math.floor(Math.random()*oe.length)]:p[Math.floor(Math.random()*p.length)];v(be),E(30)}return n.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:n.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return n.jsx(bd,{question:k,category:Xt.find(de=>Jn(de.name)===N)||Xt[0],onAnswer:We,run:{...m,lifelines:{fifty:!0,audience:!0}},timeLeft:C,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:e,soundOn:i});default:return n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),n.jsx("button",{onClick:()=>x("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function ng({lives:e,maxLives:t=3}){const[r,s]=u.useState(null),[a,i]=u.useState(e);return u.useEffect(()=>{e<a?(s(a-1),setTimeout(()=>s(null),600)):e>a&&(s(e-1),setTimeout(()=>s(null),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"relative",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[n.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((o,l)=>n.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:n.jsxs("div",{className:"relative",children:[l<e?n.jsxs("div",{className:`relative ${l===r&&e>a?"heart-gained":""}`,children:[n.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&n.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):n.jsx("div",{className:`relative ${l===r&&e<a?"heart-lost":""}`,children:n.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===r&&e>a&&n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[n.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),n.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),n.jsx("div",{className:"pr-1",children:n.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&n.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:n.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function rg({question:e,onAnswer:t,lives:r,questionCount:s,correctStreak:a,totalScore:i,currentDifficulty:o,timeLeft:l,showFeedback:d,lastAnswerCorrect:c,checkpoint:f,onBack:x,soundOn:m,setSoundOn:y}){const[p,j]=u.useState(!1),[k,v]=u.useState(null),[h,g]=u.useState(!1),[C,E]=u.useState(!1),A={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},S=A[o];u.useEffect(()=>{a>0&&a%5===0&&d&&c&&(g(!0),setTimeout(()=>g(!1),3e3))},[a,d,c]),u.useEffect(()=>{d&&c&&(E(!0),setTimeout(()=>E(!1),1e3))},[d,c]);const b=w=>{d||(v(w),t(w))};return u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:S.emoji}),n.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),n.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-8 slide-in",children:[n.jsx("button",{onClick:()=>j(!0),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"◀️"})}),n.jsx(ng,{lives:r}),n.jsx("button",{onClick:()=>y(!m),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:m?"🔊":"🔇"})})]}),n.jsx("div",{className:`glass-card rounded-3xl p-2 shadow-xl mb-2 mt-12 slide-in bg-gradient-to-r ${S.accentGradient}`,style:{animationDelay:"0.1s"},children:n.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${S.color} bg-clip-text text-transparent ${C?"score-pulse":""}`,children:i}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),d&&c&&n.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",A[o]?o==="EASY"?10:o==="MEDIUM"?20:o==="HARD"?30:o==="EXPERT"?50:100:10]})})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-black text-white",children:s}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:`text-3xl font-black text-orange-400 ${a>0?"streak-flame":""}`,children:a}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),n.jsxs("div",{className:"flex justify-between items-center mb-1 slide-in",style:{animationDelay:"0.2s"},children:[n.jsx("div",{className:`px-4 py-3 rounded-full bg-gradient-to-r ${S.color} text-white shadow-lg`,children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:S.emoji}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:S.label}),n.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),n.jsx("div",{className:"relative",children:n.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[n.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),n.jsx("div",{className:"relative z-10",children:n.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),n.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[n.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),n.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),n.jsx("div",{className:"space-y-3",children:e.options.map((w,N)=>{const T=["A","B","C","D"],D=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let q="glass-card border border-white/10",Z="";return d&&(N===e.correctIndex?(q="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",Z="correct-bounce"):k===N&&!c&&(q="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",Z="wrong-shake")),n.jsx("button",{onClick:()=>b(N),disabled:d,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${q} ${Z} 
                  ${d?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+N*.05}s`},children:n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${D[N]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:T[N]}),n.jsx("span",{className:"flex-1 text-left font-medium text-white",children:w}),d&&N===e.correctIndex&&n.jsx("span",{className:"text-2xl",children:"✅"}),d&&k===N&&!c&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},N)})}),d&&n.jsx("div",{className:"mt-6 text-center slide-in",children:n.jsx("p",{className:"text-sm font-medium text-white/70",children:c?S.motivationalText:"No worries! Keep trying! 💪"})}),f>0&&n.jsx("div",{className:"mt-4 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:n.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏁"}),n.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",f]})]})})})]}),h&&n.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),n.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),n.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})}),p&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>j(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:x,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}function sg({score:e,questionsAnswered:t,highScore:r,checkpoint:s,onRestart:a,onContinue:i,onBack:o}){const l=e>r,[d,c]=u.useState(!1),[f,x]=u.useState(0),[m,y]=u.useState(!1),p=u.useRef(null);u.useEffect(()=>{const g=e/60;let C=0;const E=setInterval(()=>{C+=g,C>=e?(x(e),clearInterval(E),l&&(c(!0),setTimeout(()=>c(!1),5e3))):x(Math.floor(C))},2e3/60);return setTimeout(()=>y(!0),2200),()=>clearInterval(E)},[e,l]),u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const k=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),d&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((v,h)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:n.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},h))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[n.jsxs("div",{className:"mb-8 slide-up",children:[n.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&n.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:n.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"🏆"}),n.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),n.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),m&&n.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:n.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${k.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[n.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:k.emoji}),n.jsx("h2",{className:"text-3xl font-black mb-2",children:k.title}),n.jsx("p",{className:"text-white/80 mb-4",children:k.subtitle}),n.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((v,h)=>n.jsx("span",{className:`text-2xl ${h<k.stars?"star-pop":""}`,style:{animationDelay:`${2.5+h*.1}s`},children:h<k.stars?"⭐":"☆"},h))})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),n.jsx("div",{ref:p,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:f}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"📊"}),n.jsx("div",{className:"text-4xl font-black text-white",children:t}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(r,e)]})})]})]}),n.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:n.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),n.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&i&&n.jsx("button",{onClick:i,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏁"}),n.jsxs("span",{children:["Continue from Question ",s]})]})}),n.jsx("button",{onClick:a,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎮"}),n.jsx("span",{children:"Play Again"})]})}),n.jsx("button",{onClick:o,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏠"}),n.jsx("span",{children:"Back to Games"})]})})]})]})]})}const jd={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function ag({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,addCoins:i,addXp:o,setSoundOn:l}=Xl(),[d,c]=u.useState("playing"),[f,x]=u.useState(3),[m,y]=u.useState(0),[p,j]=u.useState(0),[k,v]=u.useState(0),[h,g]=u.useState("EASY"),[C,E]=u.useState([]),[A,S]=u.useState(null),[b,w]=u.useState(30),[N,T]=u.useState(!1),[D,q]=u.useState(!1),[Z,Y]=u.useState(0),B=u.useRef(null),U=u.useRef(new Set);u.useEffect(()=>(_(),K(),()=>{B.current&&clearTimeout(B.current)}),[]),u.useEffect(()=>(d==="playing"&&A&&b>0&&!N&&(B.current=setTimeout(()=>{w(J=>J<=1?(X(),0):(J===6&&a&&G("/sounds/tick.mp3",.8),J-1))},1e3)),()=>{B.current&&clearTimeout(B.current)}),[d,A,b,N,a]),u.useEffect(()=>{const J=R(m);J!==h&&(g(J),a&&G("/sounds/levelup.mp3",.6))},[m,h,a]),u.useEffect(()=>{m>0&&m%10===0&&(O(),Y(m),a&&G("/sounds/checkpoint.mp3",.7))},[m,a]);const R=J=>J>=100?"LEGENDARY":J>=50?"EXPERT":J>=25?"HARD":J>=10?"MEDIUM":"EASY",_=async()=>{try{const Q=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:te}=ir.parse(Q,{header:!0,skipEmptyLines:!0,transformHeader:H=>H.trim().toLowerCase()}),se=te.map((H,$)=>{var pe;const ne=[H.option1,H.option2,H.option3,H.option4].map(Ee=>(Ee||"").trim()).filter(Boolean);if(ne.length<4)return null;let je={a:0,b:1,c:2,d:3}[(pe=H.answer)==null?void 0:pe.toLowerCase()];return je===void 0&&(je=ne.findIndex(Ee=>Ee.toLowerCase()===(H.answer||"").toLowerCase())),je===-1&&(je=0),{id:H.id||`q_${$}`,prompt:(H.question||"").trim(),options:ne,correctIndex:je,category:(H.category||H.subject||"general").trim(),difficulty:(H.difficulty||"medium").toLowerCase()}}).filter(Boolean);E(se),z(se)}catch(J){console.error("Failed to load questions:",J)}},z=(J=C)=>{const Q=J.filter($=>!U.current.has($.id));Q.length===0&&(U.current.clear(),Q.push(...J));const te=h.toLowerCase();let se=Q.filter($=>$.difficulty===te||$.difficulty==="medium");se.length===0&&(se=Q);const H=se[Math.floor(Math.random()*se.length)];H&&(U.current.add(H.id),S(H),w(jd[h].timer),T(!1))},P=J=>{if(N)return;const Q=J===A.correctIndex;q(Q),T(!0),Q?L():M(),setTimeout(()=>{(f>0||Q)&&(y(te=>te+1),z())},1500)},L=()=>{const J=jd[h].points;v(Q=>Q+J),j(Q=>{const te=Q+1;return te%5===0&&f<3&&(x(se=>Math.min(se+1,3)),a&&G("/sounds/lifeup.mp3",.8)),te}),i(Math.floor(J/10)),o(1),a&&G("/sounds/correct.mp3",.7)},M=()=>{j(0),x(J=>{const Q=J-1;return Q<=0&&(c("gameOver"),I()),Q}),a&&G("/sounds/wrong.mp3",.7),ee([200])},X=()=>{M()},O=()=>{const J={questionCount:m,totalScore:k,lives:f,correctStreak:p,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(J))},K=()=>{const J=localStorage.getItem("survival_checkpoint");if(J)try{const Q=JSON.parse(J);Date.now()-Q.timestamp<864e5?(y(Q.questionCount),v(Q.totalScore),x(Q.lives),j(Q.correctStreak),Y(Q.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(Q){console.error("Failed to load checkpoint:",Q)}},ce=()=>{localStorage.removeItem("survival_checkpoint"),Y(0)},I=()=>{const J=parseInt(localStorage.getItem("survival_highscore")||"0");k>J&&(localStorage.setItem("survival_highscore",k.toString()),localStorage.setItem("survival_highquestions",m.toString()))},F=()=>{c("playing"),x(3),y(0),j(0),v(0),g("EASY"),U.current.clear(),ce(),z()},W=()=>{c("playing"),z()},G=(J,Q=.5)=>{try{const te=new Audio(J);te.volume=Q,te.play()}catch{}},ee=J=>{navigator.vibrate&&navigator.vibrate(J)};return u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d==="gameOver"?n.jsx(sg,{score:k,questionsAnswered:m,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:Z,onRestart:F,onContinue:Z>0?W:null,onBack:e}):A?n.jsx(rg,{question:A,onAnswer:P,lives:f,questionCount:m,correctStreak:p,totalScore:k,currentDifficulty:h,timeLeft:b,showFeedback:N,lastAnswerCorrect:D,checkpoint:Z,onBack:e,soundOn:a,setSoundOn:l}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const Vn=[{id:1,name:"Sandy Beach",emoji:"🏖️",theme:{background:"from-yellow-300 via-orange-300 to-blue-400",accent:"from-yellow-400 to-orange-400",cardBg:"from-amber-500/20 to-yellow-500/20",unlockGradient:"from-yellow-400 to-amber-500"},difficulty:"EASY",difficultyRange:{min:0,max:9},questionDifficulty:["easy"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:10,gemChance:.3,gemBonus:5,speedBonus:3,perfectBonus:50,treasurePiece:"🧩",completionCoins:30},description:"Start your adventure on the sunny shores! Easy questions to warm up.",unlockRequirement:null,visualElements:{bgEmojis:["🌊","🐚","🦀","⛱️","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","✨"]}},{id:2,name:"Jungle Cave",emoji:"🌴",theme:{background:"from-green-400 via-emerald-500 to-teal-600",accent:"from-green-500 to-emerald-600",cardBg:"from-green-500/20 to-emerald-500/20",unlockGradient:"from-green-400 to-emerald-500"},difficulty:"EASY-MEDIUM",difficultyRange:{min:10,max:24},questionDifficulty:["easy","medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:15,gemChance:.35,gemBonus:7,speedBonus:5,perfectBonus:75,treasurePiece:"🗝️",completionCoins:50},description:"Explore the mysterious jungle caves! Watch out for tricky vines!",unlockRequirement:{island:1,treasurePiece:!0},visualElements:{bgEmojis:["🌿","🦜","🐒","🦋","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🌟"]}},{id:3,name:"Crystal Mountain",emoji:"⛰️",theme:{background:"from-purple-400 via-pink-400 to-indigo-500",accent:"from-purple-500 to-pink-500",cardBg:"from-purple-500/20 to-pink-500/20",unlockGradient:"from-purple-400 to-pink-500"},difficulty:"MEDIUM",difficultyRange:{min:25,max:49},questionDifficulty:["medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:20,gemChance:.4,gemBonus:10,speedBonus:7,perfectBonus:100,treasurePiece:"💎",completionCoins:75},description:"Climb the sparkling crystal peaks! Medium challenges await!",unlockRequirement:{island:2,treasurePiece:!0},visualElements:{bgEmojis:["✨","🔮","⭐","🌟","💫"],diggingEmoji:"⚒️",foundEmojis:["💎","🪙","🌈"]}},{id:4,name:"Pirate Ship",emoji:"🏴‍☠️",theme:{background:"from-slate-600 via-blue-600 to-cyan-500",accent:"from-slate-700 to-blue-700",cardBg:"from-slate-500/20 to-blue-500/20",unlockGradient:"from-slate-500 to-blue-600"},difficulty:"MEDIUM-HARD",difficultyRange:{min:50,max:99},questionDifficulty:["medium","hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:30,gemChance:.45,gemBonus:15,speedBonus:10,perfectBonus:150,treasurePiece:"🗺️",completionCoins:100},description:"Ahoy matey! Navigate the pirate ship's challenging puzzles!",unlockRequirement:{island:3,treasurePiece:!0},visualElements:{bgEmojis:["⚓","🦜","💀","🌊","⛵"],diggingEmoji:"🗡️",foundEmojis:["💎","🪙","👑"]}},{id:5,name:"Volcano Peak",emoji:"🌋",theme:{background:"from-red-500 via-orange-500 to-yellow-500",accent:"from-red-600 to-orange-600",cardBg:"from-red-500/20 to-orange-500/20",unlockGradient:"from-red-500 to-orange-500"},difficulty:"HARD",difficultyRange:{min:100,max:1/0},questionDifficulty:["hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:50,gemChance:.5,gemBonus:25,speedBonus:15,perfectBonus:200,treasurePiece:"👑",completionCoins:150},description:"The ultimate challenge! Can you conquer the volcano?",unlockRequirement:{island:4,treasurePiece:!0},visualElements:{bgEmojis:["🔥","🌋","💥","⚡","🔴"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🏆"]}}],Fe={SHOVELS_PER_ISLAND:3,QUESTIONS_PER_ISLAND:3,SPEED_BONUS_THRESHOLD:5,MIN_CORRECT_FOR_TREASURE:2,FINAL_TREASURE_REWARD:200,FINAL_TREASURE_TITLE:"Treasure Master",DIGGING_ANIMATION_DURATION:1500,REWARD_DISPLAY_DURATION:2e3,TRANSITION_DURATION:500,STORAGE_KEYS:{PROGRESS:"treasureHunt_progress",STATS:"treasureHunt_stats",UNLOCKED_ISLANDS:"treasureHunt_unlocked",COMPLETED_ISLANDS:"treasureHunt_completed",TREASURE_PIECES:"treasureHunt_pieces"},SOUNDS:{DIG:"/sounds/dig.mp3",TREASURE_FOUND:"/sounds/treasure.mp3",GEM_FOUND:"/sounds/gem.mp3",WRONG:"/sounds/wrong.mp3",ISLAND_COMPLETE:"/sounds/islandcomplete.mp3",ISLAND_UNLOCK:"/sounds/unlock.mp3",FINAL_TREASURE:"/sounds/victory.mp3",TICK:"/sounds/tick.mp3",SHOVEL_BREAK:"/sounds/break.mp3"}},nn=e=>Vn.find(t=>t.id===e),ig=(e,t)=>{const r=nn(e);if(!r.unlockRequirement)return!0;const s=t[r.unlockRequirement.island];return s&&s.treasurePiece},og=(e,t)=>{const r={0:["Keep trying! You'll get it! 💪","Don't give up! Adventure awaits! 🌟","Practice makes perfect! 🎯"],1:["Good effort! Almost there! 🌈","Nice try! Keep going! ⭐","You're learning fast! 🚀"],2:["Awesome! You found treasure! 🏆","Great job, explorer! 🎉","You're amazing! ✨"],3:["PERFECT! You're a champion! 👑","INCREDIBLE! Master explorer! 🌟","LEGENDARY performance! 🏆"]},s=r[e]||r[0];return s[Math.floor(Math.random()*s.length)]},lg=e=>Vn.map(t=>{var r;return{id:t.id,piece:t.rewards.treasurePiece,collected:((r=e[t.id])==null?void 0:r.treasurePiece)||!1}});function cg({islands:e,islandProgress:t,onSelectIsland:r,onBack:s,soundOn:a,setSoundOn:i,totalStats:o}){const[l,d]=u.useState(!1),c=lg(t),f=c.filter(m=>m.collected).length,x=Math.round(f/e.length*100);return u.useEffect(()=>(document.body.style.position="fixed",document.body.style.overflow="hidden",document.body.style.width="100%",document.body.style.height="100%",()=>{document.body.style.position="",document.body.style.overflow="",document.body.style.width="",document.body.style.height=""}),[]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 overflow-hidden flex flex-col",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:"absolute top-10 cloud-drift",style:{animationDelay:"0s"},children:n.jsx("div",{className:"text-6xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-12 cloud-drift",style:{animationDelay:"7s",animationDuration:"25s"},children:n.jsx("div",{className:"text-5xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-10 right-12",children:n.jsx("div",{className:"text-6xl pulse-animation opacity-80",children:"☀️"})}),n.jsx("div",{className:"absolute top-16 left-20 float-animation opacity-60",children:n.jsx("div",{className:"text-2xl",children:"🦜"})})]}),n.jsxs("div",{className:"relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:s,className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅"})}),n.jsx("div",{className:"glass-card rounded-2xl px-3 py-2 shadow-lg",children:n.jsxs("div",{className:"text-white font-bold text-center",children:[n.jsx("div",{className:"text-[10px] opacity-90",children:"TREASURE HUNT"}),n.jsx("div",{className:"text-sm",children:"🏝️ Island Explorer 🏝️"})]})}),n.jsx("button",{onClick:()=>i(!a),className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:a?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 shadow-xl mt-2",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white font-bold text-sm",children:"Adventure Progress"}),n.jsxs("span",{className:"text-white font-bold text-sm",children:[x,"%"]})]}),n.jsx("div",{className:"w-full h-2.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000",style:{width:`${x}%`}})}),n.jsx("button",{onClick:()=>d(!0),className:"mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{children:"🏆"}),n.jsxs("span",{children:["Treasure Pieces: ",f,"/5"]}),n.jsx("span",{children:"🏆"})]})})]})]}),n.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-4",children:n.jsxs("div",{className:"w-full max-w-md",children:[n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.slice(0,4).map(m=>{const y=t[m.id],p=y==null?void 0:y.unlocked,j=y==null?void 0:y.treasurePiece,k=y==null?void 0:y.perfectScore;return n.jsxs("button",{onClick:()=>r(m.id),disabled:!p,className:`relative aspect-square rounded-2xl transition-all ${p?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${p?m.theme.background:"from-gray-400 to-gray-500"}`,children:p&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]})}),!p&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:m.id})}),k&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${p?"bounce-animation":""}`,children:p?m.emoji:"❓"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:m.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${p?"bg-white/30":"bg-black/30"} text-white`,children:m.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:m.rewards.treasurePiece}),(y==null?void 0:y.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[y.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},m.id)})}),n.jsx("div",{className:"flex justify-center mt-3",children:e.slice(4,5).map(m=>{const y=t[m.id],p=y==null?void 0:y.unlocked,j=y==null?void 0:y.treasurePiece,k=y==null?void 0:y.perfectScore;return n.jsxs("button",{onClick:()=>r(m.id),disabled:!p,className:`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${p?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsxs("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${p?m.theme.background:"from-gray-400 to-gray-500"}`,children:[p&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]}),!p&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse"})]}),!p&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:m.id})}),k&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${p?"bounce-animation":""}`,children:p?m.emoji:"👑"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:m.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${p?"bg-white/30":"bg-black/30"} text-white`,children:m.difficulty}),j&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:m.rewards.treasurePiece}),(y==null?void 0:y.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[y.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},m.id)})})]})}),n.jsx("div",{className:"relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+3rem)]",children:n.jsx("div",{className:"bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💰"}),n.jsx("div",{className:"text-yellow-300 font-black text-lg",children:o.totalCoinsEarned}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Total Coins"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💎"}),n.jsx("div",{className:"text-cyan-300 font-black text-lg",children:o.totalGemsFound}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Gems Found"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"📝"}),n.jsxs("div",{className:"text-green-300 font-black text-lg",children:[o.totalCorrectAnswers,"/",o.totalQuestionsAnswered]}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Correct"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl",children:[n.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-6",children:"🏆 Treasure Collection 🏆"}),n.jsx("div",{className:"flex justify-center gap-4 mb-6",children:c.map((m,y)=>n.jsx("div",{className:`text-5xl ${m.collected?"":"opacity-30 grayscale"}`,children:m.collected?m.piece:"❓"},m.id))}),n.jsx("div",{className:"text-center text-white mb-6",children:f===5?n.jsxs("div",{children:[n.jsx("p",{className:"text-lg font-bold mb-2",children:"🎉 COMPLETE! 🎉"}),n.jsx("p",{className:"text-sm opacity-90",children:"You're a true Treasure Master!"})]}):n.jsx("p",{className:"text-sm opacity-90",children:"Collect all 5 pieces to unlock the final treasure!"})}),n.jsx("button",{onClick:()=>d(!1),className:"w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors",children:"Close"})]})})]})}function dg({island:e,progress:t,onStart:r,onClose:s,soundOn:a}){const[i,o]=u.useState(!1);u.useEffect(()=>{o(!0)},[]);const l=(t==null?void 0:t.attempts)>0,d=t==null?void 0:t.treasurePiece;t==null||t.perfectScore;const c=(t==null?void 0:t.bestScore)||0,f=()=>{if(a){const m=new Audio("/sounds/start.mp3");m.volume=.5,m.play().catch(()=>{})}r()},x=m=>{const y=Math.floor(m/60),p=m%60;return`${y}:${p.toString().padStart(2,"0")}`};return n.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:`relative w-full max-w-sm bg-gradient-to-br ${e.theme.background} rounded-2xl shadow-2xl ${i?"slide-up":""}`,children:[n.jsx("div",{className:"relative p-4 pb-2",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-2 pulse-animation",children:e.emoji}),n.jsx("h2",{className:"text-2xl font-black text-white",children:e.name}),n.jsx("div",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2",children:n.jsxs("span",{className:"text-white font-bold text-sm",children:["Level ",e.id," • ",e.difficulty]})})]})}),n.jsxs("div",{className:"px-4 py-3 space-y-2",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Time"}),n.jsx("div",{className:"text-white font-bold",children:x(e.timeLimit)})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Questions"}),n.jsx("div",{className:"text-white font-bold",children:Fe.QUESTIONS_PER_ISLAND})]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:e.rewards.treasurePiece}),n.jsx("span",{className:"text-white font-medium",children:"To Win"})]}),n.jsxs("span",{className:"text-white font-bold",children:[e.requiredCorrect,"/3 Correct"]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:[n.jsx("div",{className:"text-white font-bold text-sm mb-2",children:"Rewards"}),n.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💰"}),n.jsx("div",{className:"text-white/70 text-xs",children:e.rewards.perCorrectAnswer})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💎"}),n.jsxs("div",{className:"text-white/70 text-xs",children:[Math.round(e.rewards.gemChance*100),"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"⚡"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.speedBonus]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"🏆"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.perfectBonus]})]})]})]}),l&&n.jsx("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((m,y)=>n.jsx("span",{className:"text-lg",children:y<c?"⭐":"☆"},y))}),n.jsxs("div",{className:"text-white text-sm",children:[n.jsxs("span",{className:"font-bold",children:[c,"/3"]})," • ",t.attempts," tries"]}),d&&n.jsx("div",{className:"text-2xl",children:e.rewards.treasurePiece})]})})]}),n.jsxs("div",{className:"p-4 pt-2 space-y-2",children:[n.jsx("button",{onClick:f,className:"w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("span",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏴‍☠️"}),n.jsx("span",{children:l?"Play Again":"Start Adventure"}),n.jsx("span",{className:"text-xl",children:"🏴‍☠️"})]})}),n.jsx("button",{onClick:s,className:"w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors",children:"Back to Map"})]})]})]})}function ug({shovelsRemaining:e,showBreak:t=!1}){const[r,s]=u.useState(!1),[a,i]=u.useState(e),o=3;return u.useEffect(()=>{e<a&&(s(!0),setTimeout(()=>s(!1),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"inline-block",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"glass-badge rounded-xl px-4 py-2 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-gray-800 font-bold text-xs",children:"Shovels:"}),n.jsx("div",{className:"flex gap-2",children:[...Array(o)].map((l,d)=>{const c=d<e,f=r&&d===e;return n.jsxs("div",{className:"relative w-10 h-10 flex items-center justify-center",children:[n.jsx("div",{className:`
                    text-3xl transition-all duration-300
                    ${c?"shovel-pulse":""}
                    ${f?"shovel-break":""}
                    ${!c&&!f?"opacity-30 grayscale":""}
                  `,children:c||f?"⛏️":"🪦"}),f&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 40 40",children:[n.jsx("path",{d:"M20,10 L18,20 L22,30",stroke:"#ff4444",strokeWidth:"2",fill:"none",opacity:"0.8",className:"shovel-crack"}),n.jsx("path",{d:"M15,15 L20,20 L25,18",stroke:"#ff4444",strokeWidth:"1.5",fill:"none",opacity:"0.6",className:"shovel-crack",style:{animationDelay:"0.1s"}})]})}),n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[n.jsx("span",{className:"absolute top-0 left-1/2 text-xs shovel-fall",children:"💔"}),n.jsx("span",{className:"absolute top-1/2 left-0 text-xs shovel-fall",style:{animationDelay:"0.2s"},children:"✨"}),n.jsx("span",{className:"absolute top-1/2 right-0 text-xs shovel-fall",style:{animationDelay:"0.3s"},children:"💥"})]})]}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:`text-xs font-bold ${c?"text-blue-600":"text-white/30"}`,children:d+1})})]},d)})}),e===0&&n.jsx("span",{className:"text-red-400 text-sm font-bold animate-pulse ml-2",children:"No shovels left!"}),e===1&&n.jsx("span",{className:"text-red-500 text-sm font-bold ml-2",children:"Last chance!"})]})})]})}function fg({island:e,foundGem:t,onComplete:r}){const[s,a]=u.useState("digging"),[i,o]=u.useState(!1),[l,d]=u.useState(!1);return u.useEffect(()=>{(async()=>{await new Promise(f=>setTimeout(f,800)),a("revealing"),o(!0),t&&(await new Promise(f=>setTimeout(f,400)),d(!0)),await new Promise(f=>setTimeout(f,1e3)),a("complete"),await new Promise(f=>setTimeout(f,300)),r()})()},[t,r]),n.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),s==="digging"&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-8xl dig-animation",children:e.visualElements.diggingEmoji}),[...Array(8)].map((c,f)=>n.jsx("div",{className:"dirt-particle text-4xl",style:{"--fly-x":`${(Math.random()-.5)*200}px`,"--fly-y":`${-Math.random()*150-50}px`,left:"50%",top:"60%",animationDelay:`${f*.1}s`},children:"🟫"},f)),n.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2",children:n.jsx("div",{className:"text-6xl opacity-50",children:"💨"})})]}),s==="revealing"&&n.jsxs("div",{className:"relative",children:[i&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect"})}),n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"text-7xl treasure-reveal treasure-float",children:"💰"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{left:"-30px"},children:"🪙"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{right:"-30px",animationDelay:"0.5s"},children:"🪙"}),n.jsx("div",{className:"absolute text-4xl coin-spin",style:{top:"-30px",animationDelay:"1s"},children:"🪙"})]}),[...Array(6)].map((c,f)=>n.jsx("div",{className:"absolute text-3xl star-burst",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) rotate(${f*60}deg) translateY(-40px)`,animationDelay:`${f*.1}s`},children:"⭐"},f))]}),l&&n.jsxs("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-6xl gem-sparkle",children:"💎"}),n.jsx("div",{className:"absolute -top-2 -left-2 text-2xl animate-pulse",children:"✨"}),n.jsx("div",{className:"absolute -top-2 -right-2 text-2xl animate-pulse",style:{animationDelay:"0.3s"},children:"✨"}),n.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse",style:{animationDelay:"0.6s"},children:"✨"})]}),n.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("span",{className:"text-cyan-300 font-black text-lg drop-shadow-lg",children:"RARE GEM!"})})]}),n.jsx("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2 text-center",children:n.jsx("div",{className:"text-white font-black text-2xl drop-shadow-lg",children:t?"AMAZING FIND!":"TREASURE FOUND!"})})]}),s==="complete"&&n.jsx("div",{className:"relative opacity-0 transition-opacity duration-300",children:n.jsx("div",{className:"text-7xl",children:"✅"})})]})}function mg({island:e,question:t,questionNumber:r,totalQuestions:s,shovelsRemaining:a,timeRemaining:i,coinsEarned:o,gemsFound:l,onAnswer:d,onQuit:c,soundOn:f,setSoundOn:x}){const[m,y]=u.useState(null),[p,j]=u.useState(!1),[k,v]=u.useState(!1),[h,g]=u.useState(!1),[C,E]=u.useState(!1),[A,S]=u.useState(!1),[b,w]=u.useState(!1),N=u.useRef(null);u.useEffect(()=>{y(null),j(!1),v(!1),g(!1),E(!1),w(!1)},[t]);const T=Y=>{const B=Math.floor(Y/60),U=Y%60;return`${B}:${U.toString().padStart(2,"0")}`},D=()=>i<=10?"critical":i<=30?"warning":"normal",q=Y=>{if(b||p)return;y(Y),w(!0);const B=Y===t.correctIndex;v(B),setTimeout(()=>{if(j(!0),f)if(B){const U=new Audio("/sounds/dig.mp3");U.volume=.5,U.play().catch(()=>{})}else{const U=new Audio("/sounds/wrong.mp3");U.volume=.5,U.play().catch(()=>{})}B&&(g(!0),Math.random()<e.rewards.gemChance&&setTimeout(()=>{if(E(!0),f){const R=new Audio("/sounds/gem.mp3");R.volume=.6,R.play().catch(()=>{})}},800)),setTimeout(()=>{d(Y)},B?2e3:1500)},300)},Z=D();return n.jsxs("div",{className:`min-h-screen bg-gradient-to-br ${e.theme.background} relative overflow-hidden`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.visualElements.bgEmojis.map((Y,B)=>n.jsx("div",{className:"absolute text-7xl opacity-10 float-animation",style:{top:`${20+B*15}%`,left:`${10+B*18}%`,animationDelay:`${B*.5}s`,animationDuration:`${3+B}s`},children:Y},B))}),n.jsxs("div",{className:"relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:()=>S(!0),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅️"})}),n.jsx("div",{className:"glass-card rounded-xl px-3 py-1.5 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xl",children:e.emoji}),n.jsx("span",{className:"text-gray-800 font-bold text-sm",children:e.name})]})}),n.jsx("button",{onClick:()=>x(!f),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:f?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 shadow-xl mb-3",children:[n.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-xl font-black ${Z==="critical"?"text-red-600 time-pulse-critical":Z==="warning"?"text-orange-600":"text-gray-800"}`,children:T(i)}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Time"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-xl font-black text-gray-800",children:[r,"/",s]}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Question"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-orange-600",children:o}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Coins"}),p&&k&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-orange-600 font-bold text-xs coin-float",children:["+",e.rewards.perCorrectAnswer]})})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-blue-600",children:l}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Gems"}),C&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:"text-blue-600 text-xl gem-sparkle",children:"💎"})})]})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar",style:{width:`${(r-1)/s*100}%`}})})})]}),n.jsx("div",{className:"flex justify-center mb-3 pt-2",children:n.jsx(ug,{shovelsRemaining:a,showBreak:p&&!k})})]}),n.jsxs("div",{className:"px-3 pt-8 slide-in",children:[n.jsxs("div",{ref:N,className:`glass-card rounded-2xl shadow-xl p-4 mb-4 ${p&&!k?"wrong-shake":""}`,children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wider",children:["Question ",r]})}),n.jsx("h2",{className:"text-lg font-bold text-center text-gray-800 leading-relaxed",children:t.prompt})]}),n.jsx("div",{className:"space-y-2.5",children:t.options.map((Y,B)=>{const U=["A","B","C","D"],R=m===B,_=B===t.correctIndex;let z="glass-card option-card",P="border border-gray-800/20";return p&&(_?(z+=" correct-pulse",P="border-2 border-green-500 bg-green-400/20"):R&&!k&&(z+=" wrong-shake",P="border-2 border-red-500 bg-red-400/20"),z+=" disabled"),n.jsx("button",{onClick:()=>q(B),disabled:b,className:`w-full p-3 rounded-xl shadow-lg ${z} ${P}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${B===0?"from-blue-400 to-blue-500":B===1?"from-green-400 to-green-500":B===2?"from-yellow-400 to-yellow-500":"from-purple-400 to-purple-500"} text-white font-bold text-lg flex items-center justify-center shadow-md`,children:U[B]}),n.jsx("span",{className:"flex-1 text-left font-medium text-gray-800 text-sm",children:Y}),p&&_&&n.jsx("span",{className:"text-2xl",children:"✅"}),p&&R&&!k&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},B)})}),p&&n.jsx("div",{className:"mt-3 text-center slide-in",children:n.jsx("p",{className:"text-base font-bold text-gray-800",children:k?`Great job! Let's dig for treasure! ${e.visualElements.diggingEmoji}`:"Oops! Your shovel broke! Try the next question! 💪"})})]}),h&&n.jsx(fg,{island:e,foundGem:C,onComplete:()=>g(!1)}),A&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🗺️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the Island?"}),n.jsx("p",{className:"text-white/70",children:"Your progress won't be saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>S(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:c,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Leave Island"})]})]})})]})}function hg({island:e,session:t,earnedTreasure:r,onRetry:s,onContinue:a,soundOn:i}){const[o,l]=u.useState(0),[d,c]=u.useState(!1),[f,x]=u.useState(!1),m=t.correctAnswers===Fe.QUESTIONS_PER_ISLAND,y=og(t.correctAnswers,e.id);return u.useEffect(()=>{const p=t.coinsEarned,j=2e3,k=30,v=p/k;let h=0;const g=setInterval(()=>{h+=v,h>=p?(l(p),clearInterval(g),r&&setTimeout(()=>c(!0),500),setTimeout(()=>x(!0),r?1500:500)):l(Math.floor(h))},j/k);return()=>clearInterval(g)},[t.coinsEarned,r]),n.jsxs("div",{className:`fixed inset-0 bg-gradient-to-br ${e.theme.background} overflow-hidden flex flex-col`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:m&&[...Array(10)].map((p,j)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,fontSize:`${20+Math.random()*20}px`},children:["🎉","⭐","🎊","✨"][Math.floor(Math.random()*4)]},j))}),n.jsxs("div",{className:"relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4",children:[n.jsxs("div",{className:"mb-3 text-center slide-up",children:[n.jsx("h1",{className:"text-2xl font-black text-white mb-2",children:r?"TREASURE FOUND!":"ISLAND COMPLETE!"}),n.jsx("div",{className:"text-5xl bounce-animation",children:r?e.rewards.treasurePiece:"🏝️"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up",style:{animationDelay:"0.2s",background:"rgba(46, 46, 32, 0.25)"},children:[n.jsxs("div",{className:"text-center mb-2",children:[n.jsxs("div",{className:"text-3xl font-black text-white mb-1",children:[t.correctAnswers,"/",Fe.QUESTIONS_PER_ISLAND]}),n.jsx("div",{className:"text-white/80 font-medium",children:"Questions Correct"})]}),f&&n.jsx("div",{className:"flex justify-center gap-2 mb-2",children:[...Array(3)].map((p,j)=>n.jsx("div",{className:`text-3xl ${j<t.correctAnswers?"star-pop":""}`,style:{animationDelay:`${j*.2}s`},children:j<t.correctAnswers?"⭐":"☆"},j))}),d&&r&&n.jsxs("div",{className:"text-center mb-2",children:[n.jsx("div",{className:"text-5xl treasure-shine mb-1",children:e.rewards.treasurePiece}),n.jsx("div",{className:"text-white font-bold text-lg",children:"Treasure Piece Earned!"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-3xl font-black text-yellow-300",children:o}),n.jsx("div",{className:"text-white/70 text-sm",children:"Coins Earned"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:"💎"}),n.jsx("div",{className:"text-3xl font-black text-cyan-300",children:t.gemsFound}),n.jsx("div",{className:"text-white/70 text-sm",children:"Gems Found"})]})]}),n.jsx("div",{className:"text-center p-4 bg-white/10 rounded-1xl",children:n.jsx("p",{className:"text-white font-medium text-lg",children:y})}),m&&n.jsx("div",{className:"mt-4 text-center",children:n.jsx("div",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",children:n.jsx("span",{className:"text-white font-black text-lg",children:"💯 PERFECT SCORE! 💯"})})})]}),n.jsxs("div",{className:"space-y-3 w-full max-w-md slide-up",style:{animationDelay:"0.4s"},children:[!r&&n.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🔄"}),n.jsx("span",{children:"Try Again"})]})}),n.jsx("button",{onClick:a,className:"w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🗺️"}),n.jsx("span",{children:"Back to Map"})]})})]})]})]})}function pg({totalStats:e,onContinue:t,soundOn:r}){const[s,a]=u.useState(!1),[i,o]=u.useState(!1),[l,d]=u.useState(!1),[c,f]=u.useState(!1),[x,m]=u.useState(!1);return u.useEffect(()=>{(async()=>{await new Promise(p=>setTimeout(p,500)),a(!0),await new Promise(p=>setTimeout(p,1e3)),o(!0),m(!0),await new Promise(p=>setTimeout(p,800)),d(!0),await new Promise(p=>setTimeout(p,1e3)),f(!0)})()},[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),x&&n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(15)].map((y,p)=>n.jsx("div",{className:"absolute firework",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animationDelay:`${Math.random()*2}s`,fontSize:`${40+Math.random()*40}px`},children:["✨","⭐","💫","🌟"][Math.floor(Math.random()*4)]},p))}),n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((y,p)=>n.jsx("div",{className:"absolute coin-rain",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`,fontSize:`${20+Math.random()*20}px`},children:["🪙","💰","💎"][Math.floor(Math.random()*3)]},p))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"LEGENDARY!"}),n.jsx("div",{className:"text-8xl bounce-animation",children:"👑"})]}),s&&n.jsxs("div",{className:`relative mb-8 ${s?"chest-appear":""}`,children:[n.jsx("div",{className:`text-[150px] ${i?"chest-open":""}`,children:"📦"}),i&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:Vn.map((y,p)=>n.jsx("div",{className:"absolute text-6xl float-animation treasure-glow",style:{transform:`rotate(${p*72}deg) translateY(-100px)`,animationDelay:`${p*.2}s`},children:y.rewards.treasurePiece},y.id))})]}),l&&n.jsxs("div",{className:"glass-card rounded-3xl p-6 max-w-md w-full mb-6",children:[n.jsx("h2",{className:"text-2xl font-black text-white text-center mb-6",children:"🏆 FINAL TREASURE UNLOCKED! 🏆"}),n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-2",children:"💰"}),n.jsx("div",{className:"text-4xl font-black text-white",children:Fe.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/90 font-medium",children:"Bonus Coins!"})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🏝️"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Islands"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🧩"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Treasures"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💰"}),n.jsx("div",{className:"text-2xl font-black text-yellow-300",children:e.totalCoinsEarned+Fe.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Coins"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💎"}),n.jsx("div",{className:"text-2xl font-black text-cyan-300",children:e.totalGemsFound}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Gems"})]})]}),c&&n.jsxs("div",{className:"text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🏆"}),n.jsx("div",{className:"text-xl font-black text-white title-shine",children:Fe.FINAL_TREASURE_TITLE}),n.jsx("div",{className:"text-white/90 text-sm mt-1",children:"New Title Unlocked!"})]})]}),l&&n.jsx("button",{onClick:t,className:"w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎉"}),n.jsx("span",{children:"Complete Adventure"}),n.jsx("span",{className:"text-2xl",children:"🎉"})]})}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(10)].map((y,p)=>n.jsx("div",{className:"absolute text-2xl sparkle-animation",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`},children:"✨"},p))})]})]})}function xg({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,addCoins:i,addXp:o,setSoundOn:l}=Xl(),[d,c]=u.useState("map"),[f,x]=u.useState(null),[m,y]=u.useState([]),[p,j]=u.useState(()=>{const R=localStorage.getItem(Fe.STORAGE_KEYS.PROGRESS);if(R)try{return JSON.parse(R)}catch(_){console.error("Failed to load progress:",_)}return Vn.reduce((_,z)=>(_[z.id]={unlocked:z.id===1,completed:!1,treasurePiece:!1,perfectScore:!1,bestScore:0,attempts:0},_),{})}),[k,v]=u.useState({islandId:null,questions:[],currentQuestionIndex:0,shovelsRemaining:Fe.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:300,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:null}),[h,g]=u.useState(()=>{const R=localStorage.getItem(Fe.STORAGE_KEYS.STATS);if(R)try{return JSON.parse(R)}catch(_){console.error("Failed to load stats:",_)}return{totalCoinsEarned:0,totalGemsFound:0,totalTreasurePieces:0,totalQuestionsAnswered:0,totalCorrectAnswers:0,islandsCompleted:0,gameCompleted:!1}}),C=u.useRef(null),E=u.useRef(null);u.useEffect(()=>(A(),()=>{C.current&&clearInterval(C.current)}),[]),u.useEffect(()=>{localStorage.setItem(Fe.STORAGE_KEYS.PROGRESS,JSON.stringify(p))},[p]),u.useEffect(()=>{localStorage.setItem(Fe.STORAGE_KEYS.STATS,JSON.stringify(h))},[h]),u.useEffect(()=>(d==="playing"&&k.timeRemaining>0?C.current=setInterval(()=>{v(R=>{const _=R.timeRemaining-1;return _<=0?(T(),{...R,timeRemaining:0}):(_===30&&a&&B(Fe.SOUNDS.TICK,.6),{...R,timeRemaining:_})})},1e3):C.current&&clearInterval(C.current),()=>{C.current&&clearInterval(C.current)}),[d,k.timeRemaining,a]);const A=async()=>{try{const _=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:z}=ir.parse(_,{header:!0,skipEmptyLines:!0,transformHeader:L=>L.trim().toLowerCase()}),P=z.map((L,M)=>{var ce;const X=[L.option1,L.option2,L.option3,L.option4].map(I=>(I||"").trim()).filter(Boolean);if(X.length<4)return null;let K={a:0,b:1,c:2,d:3}[(ce=L.answer)==null?void 0:ce.toLowerCase()];return K===void 0&&(K=X.findIndex(I=>I.toLowerCase()===(L.answer||"").toLowerCase())),K===-1&&(K=0),{id:L.id||`q_${M}`,prompt:(L.question||"").trim(),options:X,correctIndex:K,category:(L.category||L.subject||"general").trim(),difficulty:(L.difficulty||"medium").toLowerCase()}}).filter(Boolean);y(P)}catch(R){console.error("Failed to load questions:",R)}},S=R=>{const _=nn(R);if(!_||m.length===0)return[];let z=m.filter(L=>_.questionDifficulty.includes(L.difficulty));return z.length<Fe.QUESTIONS_PER_ISLAND&&(z=m),[...z].sort(()=>Math.random()-.5).slice(0,Fe.QUESTIONS_PER_ISLAND)},b=R=>{if(!ig(R,p)){a&&B("/sounds/locked.mp3",.5),U([100]);return}x(R),c("island-detail"),a&&B("/sounds/select.mp3",.5)},w=R=>{const _=nn(R),z=S(R);v({islandId:R,questions:z,currentQuestionIndex:0,shovelsRemaining:Fe.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:_.timeLimit,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:Date.now()}),E.current=Date.now(),c("playing"),a&&B("/sounds/start.mp3",.6)},N=R=>{const _=k.questions[k.currentQuestionIndex],z=R===_.correctIndex,P=(Date.now()-E.current)/1e3;v(L=>{const M={...L,questionTimes:[...L.questionTimes,P]};if(z){const X=nn(L.islandId);let O=X.rewards.perCorrectAnswer;P<Fe.SPEED_BONUS_THRESHOLD&&(O+=X.rewards.speedBonus),Math.random()<X.rewards.gemChance&&(O+=X.rewards.gemBonus,M.gemsFound=L.gemsFound+1),M.correctAnswers=L.correctAnswers+1,M.coinsEarned=L.coinsEarned+O}else M.wrongAnswers=L.wrongAnswers+1,M.shovelsRemaining=L.shovelsRemaining-1,U([200]);return M}),setTimeout(()=>{const L=k.currentQuestionIndex+1;k.shovelsRemaining===0&&!z||L>=Fe.QUESTIONS_PER_ISLAND?D():(v(M=>({...M,currentQuestionIndex:L})),E.current=Date.now())},z?2e3:1500)},T=()=>{D()},D=()=>{const R=nn(k.islandId),_=k.correctAnswers>=R.requiredCorrect,z=k.correctAnswers===Fe.QUESTIONS_PER_ISLAND;let P=k.coinsEarned;z&&(P+=R.rewards.perfectBonus),_&&(P+=R.rewards.completionCoins),j(M=>{const X={...M},O=X[k.islandId];if(O.completed=!0,O.attempts+=1,_&&!O.treasurePiece){O.treasurePiece=!0;const K=Vn.find(ce=>ce.id===k.islandId+1);K&&X[K.id]&&(X[K.id].unlocked=!0,a&&setTimeout(()=>B(Fe.SOUNDS.ISLAND_UNLOCK,.7),2e3))}return z&&(O.perfectScore=!0),O.bestScore=Math.max(O.bestScore||0,k.correctAnswers),X}),g(M=>({...M,totalCoinsEarned:M.totalCoinsEarned+P,totalGemsFound:M.totalGemsFound+k.gemsFound,totalTreasurePieces:M.totalTreasurePieces+(_&&!p[k.islandId].treasurePiece?1:0),totalQuestionsAnswered:M.totalQuestionsAnswered+(k.correctAnswers+k.wrongAnswers),totalCorrectAnswers:M.totalCorrectAnswers+k.correctAnswers,islandsCompleted:M.islandsCompleted+(p[k.islandId].completed?0:1)})),i(P),o(k.correctAnswers),v(M=>({...M,coinsEarned:P})),a&&B(_?Fe.SOUNDS.TREASURE_FOUND:Fe.SOUNDS.ISLAND_COMPLETE,.7),Vn.every(M=>{var X;return((X=p[M.id])==null?void 0:X.treasurePiece)===!0})&&!h.gameCompleted?(g(M=>({...M,gameCompleted:!0})),setTimeout(()=>{c("final-treasure"),a&&B(Fe.SOUNDS.FINAL_TREASURE,.8)},3e3)):c("reward")},q=()=>{w(k.islandId)},Z=()=>{c("map"),x(null)},Y=()=>{i(Fe.FINAL_TREASURE_REWARD),o(10),g(R=>({...R,totalCoinsEarned:R.totalCoinsEarned+Fe.FINAL_TREASURE_REWARD})),c("map")},B=(R,_=.5)=>{try{const z=new Audio(R);z.volume=_,z.play()}catch(z){console.error("Failed to play sound:",z)}},U=R=>{navigator.vibrate&&navigator.vibrate(R)};switch(u.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d){case"map":return n.jsx(cg,{islands:Vn,islandProgress:p,onSelectIsland:b,onBack:e,soundOn:a,setSoundOn:l,totalStats:h});case"island-detail":return n.jsx(dg,{island:nn(f),progress:p[f],onStart:()=>w(f),onClose:()=>c("map"),soundOn:a});case"playing":return n.jsx(mg,{island:nn(k.islandId),question:k.questions[k.currentQuestionIndex],questionNumber:k.currentQuestionIndex+1,totalQuestions:Fe.QUESTIONS_PER_ISLAND,shovelsRemaining:k.shovelsRemaining,timeRemaining:k.timeRemaining,coinsEarned:k.coinsEarned,gemsFound:k.gemsFound,onAnswer:N,onQuit:()=>c("map"),soundOn:a,setSoundOn:l});case"reward":return n.jsx(hg,{island:nn(k.islandId),session:k,earnedTreasure:k.correctAnswers>=nn(k.islandId).requiredCorrect,onRetry:q,onContinue:Z,soundOn:a});case"final-treasure":return n.jsx(pg,{totalStats:h,onContinue:Y,soundOn:a});default:return null}}const gg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],hm=gg.slice(0,6),Gi=360/hm.length;function vg({onModeSelect:e,onNavigateHome:t}){return n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("header",{className:"flex items-center mb-8",children:n.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),n.jsxs("div",{className:"space-y-8",children:[n.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[hm.map((r,s)=>{const a=s*Gi,i=a+Gi,o=Gi>180?1:0,l=Math.PI*a/180,d=Math.PI*i/180,c=50+40*Math.cos(l),f=50-40*Math.sin(l),x=50+40*Math.cos(d),m=50-40*Math.sin(d);return n.jsx("path",{d:`M50,50 L${c},${f} A40,40 0 ${o} 0 ${x},${m} Z`,fill:r.color,stroke:"white",strokeWidth:"0.5"},s)}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),n.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),n.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),n.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),n.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),n.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),n.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsx("div",{className:"text-2xl mb-2",children:"💀"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),n.jsxs("button",{onClick:()=>e("treasureHunt"),className:"aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 opacity-20",children:[n.jsx("div",{className:"absolute top-2 right-2 text-4xl animate-pulse",children:"🏝️"}),n.jsx("div",{className:"absolute bottom-2 left-2 text-3xl animate-bounce",style:{animationDelay:"0.5s"},children:"⛏️"}),n.jsx("div",{className:"absolute top-1/2 right-4 text-2xl animate-pulse",style:{animationDelay:"1s"},children:"💎"})]}),n.jsx("div",{className:"text-2xl mb-2 relative z-10",children:"🏴‍☠️"}),n.jsx("h4",{className:"text-lg font-black text-white relative z-10",children:"TREASURE HUNT"}),n.jsx("div",{className:"absolute bottom-2 right-2",children:n.jsx("span",{className:"text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold",children:"NEW!"})})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📱"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function yg(){const[e,t]=u.useState(null),r=at(),s=o=>{o==="classic"?t("classic"):o==="survival"?t("survival"):o==="treasureHunt"&&t("treasureHunt")},a=()=>{r("/")},i=()=>{t(null)};return e==="classic"?n.jsx(tg,{onBack:i}):e==="survival"?n.jsx(ag,{onBack:i}):e==="treasureHunt"?n.jsx(xg,{onBack:i}):n.jsx(vg,{onModeSelect:s,onNavigateHome:a})}const bg=({session:e,mode:t,category:r,difficulty:s,timerConfig:a,onComplete:i,onQuit:o})=>{const[l,d]=u.useState(0),[c,f]=u.useState([]),[x,m]=u.useState([]),[y,p]=u.useState([]),[j,k]=u.useState(!1),[v,h]=u.useState(null),[g,C]=u.useState(Date.now()),[E,A]=u.useState(!1),[S,b]=u.useState(!1),[w,N]=u.useState({}),[T,D]=u.useState({}),[q,Z]=u.useState([]);u.useState(!0);const[Y,B]=u.useState([]),[U,R]=u.useState(0),[_,z]=u.useState(0),[P,L]=u.useState(!1),[M,X]=u.useState(!1),[O,K]=u.useState(""),[ce,I]=u.useState(!1),[F,W]=u.useState(!1),[G,ee]=u.useState(!0),[J,Q]=u.useState(!1),[te,se]=u.useState(0),[H,$]=u.useState(0),[ne,me]=u.useState(0),[je,pe]=u.useState(null),[Ee,Le]=u.useState(0),_e=u.useRef(null),he=u.useRef(null),ue=t==="practice",xe=c[l],it=ae=>{try{const le=new Audio(ae);le.volume=.6,le.play()}catch{console.log("Sound not available:",ae)}},tn=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],Pe=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:tn,Ne=Pe[l]||Pe[0]||tn[0],Ue=Pe.length;u.useEffect(()=>{Pe.length>0&&(f(new Array(Pe.length).fill(null)),m(new Array(Pe.length).fill(!1)),Z(new Array(Pe.length).fill(!1)),p(new Array(Pe.length).fill((a==null?void 0:a.seconds)||45)))},[Pe.length,a==null?void 0:a.seconds]);const gn=()=>{if(E){K("Once per quiz"),setTimeout(()=>K(""),1e3);return}if(xe!==null){K("Already answered"),setTimeout(()=>K(""),1e3);return}if(!Ne)return;const le=[0,1,2,3].filter(ve=>ve!==Ne.answerIndex).sort(()=>Math.random()-.5).slice(0,2);N({...w,[l]:le}),A(!0)},or=()=>{if(S){K("Once per quiz"),setTimeout(()=>K(""),1e3);return}if(xe!==null){K("Already answered"),setTimeout(()=>K(""),1e3);return}if(!Ne)return;const ae=Ne.answerIndex,le=[0,0,0,0],ve=40+Math.floor(Math.random()*31);le[ae]=ve;let De=100-ve;const Re=[0,1,2,3].filter(Ie=>Ie!==ae);for(let Ie=0;Ie<Re.length-1;Ie++){const Je=Math.min(De-(Re.length-1-Ie),De/2),Bs=Math.floor(Math.random()*(Je+1));le[Re[Ie]]=Bs,De-=Bs}le[Re[Re.length-1]]=De,D({...T,[l]:le}),b(!0)},Br=u.useCallback((ae,le)=>{if(!Ne||ue&&q[l]||w[l]&&w[l].includes(ae))return;const ve=[...c];ve[l]=c[l]===ae?null:ae,f(ve),C(Date.now()),ve[l]!==null&&(ee(!1),clearInterval(he.current));const De=ve[l]===Ne.answerIndex;if(De){const Re=ne+1;if(me(Re),R(Ie=>Ie+1),z(0),ue){se(Je=>Je+1);const Ie=10;$(Je=>Je+Ie),it("/sounds/correct.mp3"),setTimeout(()=>it("/sounds/coin.mp3"),500),W(!0),setTimeout(()=>W(!1),2e3),pe({type:"correct",stars:1,coins:10}),setTimeout(()=>pe(null),2e3)}}else ve[l]!==null&&(me(0),R(0),z(Re=>Re+1),ue&&(l===0&&Y.length,it("/sounds/wrong.mp3")));if(B(Re=>[...Re.slice(-2),De]),ve[l]!==null&&x[l]){const Re=[...x];Re[l]=!1,m(Re)}ue&&ve[l]!==null&&(I(!0),Z(Re=>{const Ie=[...Re];return Ie[l]=!0,Ie}),setTimeout(()=>{const Re=document.querySelector(".main-scrollable-container");if(Re){const Ie=Re.scrollHeight,Je=Re.clientHeight;Ie>Je&&Re.scrollTo({top:Ie-Je,behavior:"smooth"})}},300)),!ue&&ve[l]!==null&&(clearTimeout(_e.current),_e.current=setTimeout(()=>{l<Ue-1?fe():(L(!0),k(!0))},5e3))},[Ne,ue,q,l,c,x,Ue,ne,w,Y,U]),re=()=>{C(Date.now()),l>0&&(clearInterval(he.current),ee(!1),d(ae=>ae-1),I(!1),ue&&c[l-1]!==null&&setTimeout(()=>I(!0),100))},fe=()=>{if(C(Date.now()),clearInterval(he.current),xe===null){const ae=[...x];ae[l]=!0,m(ae),me(0)}ee(!1),I(!1),l<Ue-1?(d(ae=>ae+1),ue&&c[l+1]!==null?setTimeout(()=>I(!0),100):setTimeout(()=>ee(!0),100)):L(!0)},Ae=()=>{C(Date.now());const ae=[...x];ae[l]=!0,m(ae),me(0),fe()},Se=()=>{const ae=Pe.reduce((le,ve,De)=>le+(c[De]===ve.answerIndex?1:0),0);if(ue)i&&i({questions:Pe,answers:c,skipped:x,correct:ae,total:Ue,mode:t,category:r,difficulty:s,earnedStars:te,earnedCoins:H,finalStreak:ne});else{const le=ae*10;Le(le),Q(!0),setTimeout(()=>{it("/sounds/coin.mp3"),W(!0),setTimeout(()=>W(!1),3e3)},1e3)}},We=()=>{i&&i({questions:Pe,answers:c,skipped:x,correct:Pe.reduce((ae,le,ve)=>ae+(c[ve]===le.answerIndex?1:0),0),total:Ue,mode:t,category:r,difficulty:s,earnedStars:0,earnedCoins:Ee,finalStreak:ne})};u.useEffect(()=>{if(!(j||v!==null||P||!G||c[l]!==null))return he.current=setInterval(()=>{p(ae=>{const le=[...ae],ve=le[l];return ve<=1?(clearInterval(he.current),l===Ue-1?(Date.now()-g>=5e3&&L(!0),le):(h(l),le)):(le[l]=ve-1,le)})},1e3),()=>clearInterval(he.current)},[j,v,l,P,Ue,G,c,g]),u.useEffect(()=>{c[l]===null&&!P&&!v?ee(!0):ee(!1)},[l,c,P,v]);const ye=ae=>{const le=Math.floor(ae/60),ve=ae%60;return`${le}:${ve.toString().padStart(2,"0")}`},de=(l+1)/Pe.length*100,oe=c.filter(ae=>ae!==null).length,be=x.filter(Boolean).length,Ce=y[l]||0,ge=Pe.reduce((ae,le,ve)=>ae+(c[ve]===le.answerIndex?1:0),0);return n.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[je&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",je.coins," Coins!"]})}),F&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((ae,le)=>n.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${le*150}ms`,animationDuration:"2s"},children:"🪙"},le))}),n.jsxs("div",{className:`main-scrollable-container flex-1 flex flex-col ${ue&&xe!==null?"overflow-y-auto":"overflow-hidden"}`,children:[n.jsxs("div",{className:"bg-gray-900 flex-shrink-0",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-800 shadow-lg",children:[n.jsxs("button",{onClick:()=>X(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"font-medium",children:"Back"})]}),n.jsx("div",{className:"flex-1"}),n.jsxs("div",{className:"flex items-center gap-2",children:[ue&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),n.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:H})]}),n.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),n.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:ne})]})]}),n.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${Ce<=10?"bg-red-600/20 text-red-400 animate-pulse":Ce<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:ye(Ce)})]})]}),n.jsxs("div",{className:"px-4 pb-1 bg-gray-900",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",l+1," of ",Ue]}),n.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(de),"% Complete"]})]}),n.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${de}%`}})}),n.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:Ue}).map((ae,le)=>n.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${le===l?"bg-white scale-125":c[le]!==null?"bg-green-500":x[le]?"bg-yellow-500":"bg-gray-600"}`},le))}),n.jsx("div",{className:"text-center mt-4",children:n.jsx("span",{className:"text-xs text-gray-500",children:Ne.category})})]})]}),n.jsx("div",{className:`px-4 flex flex-col ${ue&&xe!==null?"pb-36":"flex-1 justify-between pb-[180px]"}`,children:n.jsxs("div",{className:"flex-1 flex flex-col justify-center max-h-full",children:[n.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-6 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[n.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),n.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",l+1]}),n.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:Ne.prompt}),Ne.difficulty&&n.jsx("div",{className:"mt-3 inline-block",children:n.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${Ne.difficulty==="easy"?"bg-green-500/20 text-green-300":Ne.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:Ne.difficulty.toUpperCase()})})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:Ne.options.map((ae,le)=>{const ve=xe===le,De=le===Ne.answerIndex,Re=ue&&xe!==null&&ce,Ie=w[l]&&w[l].includes(le);let Je="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";Ie?Je+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(Je+="cursor-pointer ",Re?ve&&De?Je+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":ve&&!De?Je+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!ve&&De?Je+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":Je+="bg-gray-700 border-gray-600 text-gray-400":ve?Je+="bg-gray-600 border-gray-500 text-white":Je+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const Bs=["🅰️","🅱️","🅲️","🅳️"];return n.jsx("button",{onClick:ym=>Br(le,ym),disabled:ue&&q[l],className:Je,children:n.jsxs("div",{className:"flex items-center gap-2 w-full",children:[n.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:Bs[le]}),n.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:ae}),T[l]&&T[l][le]>0&&!Ie&&n.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[T[l][le],"%"]}),Re&&ve&&De&&!Ie&&n.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),Re&&ve&&!De&&!Ie&&n.jsx("div",{className:"text-lg",children:"😔"}),Re&&!ve&&De&&!Ie&&n.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},le)})}),ue&&ce&&xe!==null&&n.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:n.jsxs("div",{className:"flex gap-3",children:[n.jsx("div",{className:"text-lg flex-shrink-0",children:xe===Ne.answerIndex?"🎊":"💡"}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h4",{className:`font-semibold mb-3 text-sm ${xe===Ne.answerIndex?"text-green-400":"text-blue-400"}`,children:xe===Ne.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),Ne.explanation&&n.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:Ne.explanation})]})]})})]})})]}),n.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-50",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 backdrop-blur-xl"}),n.jsxs("div",{className:"relative p-4 pb-8",children:[!ue&&n.jsxs("div",{className:"flex justify-center gap-3 mb-4",children:[n.jsxs("button",{onClick:gn,disabled:xe!==null,className:`${E?"bg-white/5 text-gray-500":"bg-gradient-to-r from-orange-500 to-orange-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"⚡"}),"50:50"]}),n.jsxs("button",{onClick:or,disabled:xe!==null,className:`${S?"bg-white/5 text-gray-500":"bg-gradient-to-r from-purple-500 to-purple-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"👥"}),"Ask Friends"]})]}),n.jsxs("div",{className:"flex gap-2 mb-3",children:[n.jsx("button",{onClick:re,disabled:l===0,className:`flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                disabled:opacity-30 disabled:cursor-not-allowed
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                hover:bg-white/15 text-white shadow-xl`,children:"Previous"}),n.jsx("button",{onClick:Ae,disabled:xe!==null,className:`flex-1 py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95 shadow-xl ${xe!==null?"bg-white/5 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600"}`,children:"Skip"}),n.jsx("button",{onClick:fe,className:`flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:from-blue-600 hover:to-indigo-600
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                text-white shadow-xl`,children:l===Ue-1?"Finish":"Next"})]}),n.jsxs("button",{onClick:()=>L(!0),className:`w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-600
              py-4 rounded-2xl font-bold text-white transition-all transform active:scale-[0.98]
              shadow-2xl shadow-green-500/25 relative overflow-hidden group`,children:[n.jsx("div",{className:"absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"}),n.jsx("span",{className:"relative",children:"Submit Quiz"})]})]})]}),J&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quiz Complete!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Here's how you performed"}),n.jsxs("div",{className:"bg-gray-700/50 rounded-2xl p-4 mb-6 space-y-3",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Questions Attempted:"}),n.jsxs("span",{className:"text-white font-semibold",children:[oe," / ",Ue]})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Correct Answers:"}),n.jsx("span",{className:"text-green-400 font-semibold",children:ge})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Accuracy:"}),n.jsxs("span",{className:"text-blue-400 font-semibold",children:[oe>0?Math.round(ge/oe*100):0,"%"]})]}),n.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-yellow-300 flex items-center gap-1",children:"🪙 Coins Earned:"}),n.jsx("span",{className:"text-yellow-400 font-bold text-lg",children:Ee})]})})]}),n.jsx("button",{onClick:We,className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors",children:"Continue"})]})}),M&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>X(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),n.jsx("button",{onClick:o,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),P&&!J&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),n.jsxs("p",{className:"text-gray-400 mb-4",children:[oe," of ",Ue," answered • ",be," skipped"]}),ue&&n.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:n.jsxs("div",{className:"flex justify-center gap-6",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:te}),n.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:H}),n.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{L(!1),h(null),C(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),n.jsx("button",{onClick:ae=>{ae.preventDefault(),ae.stopPropagation(),console.log("Submit button clicked"),Se()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),v===l&&!P&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),n.jsx("button",{onClick:()=>{h(null),C(Date.now()),l<Pe.length-1?fe():L(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:l<Pe.length-1?"Continue":"See Results"})]})}),O&&n.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:O}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},Kr=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],wg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),jg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),Ng=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),kg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Sg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Cg=()=>n.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Eg=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[]},onRetake:t=()=>{},onReview:r=()=>{},onNavigate:s=(c,f)=>{},isRetake:a=!1,isPractice:i=!1,player:o={level:1,coins:0,combo:0,energy:5},categories:l=[],addCoins:d=()=>{}})=>{const[c,f]=u.useState(o.coins),x=u.useRef(null),[m,y]=u.useState(null),[p]=At("/sounds/coin.mp3",{volume:.75}),[j,k]=u.useState(!1),[v,h]=u.useState(!1),[g,C]=u.useState(0),[E,A]=u.useState(!1),[S,b]=u.useState(!1),{correct:w,total:N,category:T,categorySlug:D,difficulty:q,mode:Z,elapsedMs:Y}=e,B=N?Math.round(w/N*100):0,U=B===100,R=B>=80,_=Math.floor(Y/1e3),z=N>0?Math.floor(_/N):0,P=i?e.earnedCoins||0:Math.round(w*5*(U?1.5:R?1.2:1)),L=Kr.find(F=>F.slug===T)||Kr[0],X=(()=>U?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:B>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:B>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:B>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:B>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();u.useEffect(()=>{!m&&!j&&f(o.coins)},[o.coins,m,j]),u.useEffect(()=>{P>0&&!j&&!S&&x.current&&setTimeout(()=>{x.current.getBoundingClientRect(),p==null||p(),y({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(P,10),amount:P}),k(!0)},500)},[P,i,j,p]),u.useEffect(()=>{document.documentElement.scrollIntoView({behavior:"smooth",block:"start"}),(U||R)&&(h(!0),setTimeout(()=>h(!1),3e3));let F=0;const W=w/20,G=setInterval(()=>{F+=W,F>=w?(C(w),clearInterval(G)):C(Math.floor(F))},50);return()=>clearInterval(G)},[w,U,R]);const O=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:w,total:N}],K=()=>{try{const F=localStorage.getItem("qp_recent");if(F)return JSON.parse(F).slice(0,10).map(G=>G.slug||G.cat).filter(G=>G&&G!==e.categorySlug)}catch(F){console.error("Error reading recent categories:",F)}return[]},ce=()=>{const F=D||T,W=q||"medium",G=K(),ee=(l||Kr||[]).filter(te=>te.slug!==F&&!G.slice(0,3).includes(te.slug)),Q=(()=>{if(ee.length===0){const te=(l||Kr||[]).filter(se=>se.slug!==F);return te[Math.floor(Math.random()*te.length)]||(l||Kr)[0]}return ee[Math.floor(Math.random()*ee.length)]})();if(B<60)return i?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${F}`,{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}})},{icon:Q.icon,title:Q.name,desc:"Fresh start with new topic",color:Q.gradient,action:()=>s(`/quiz/${Q.slug}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>r()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${F}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:W!=="easy"?"🎯":"🔄",title:W!=="easy"?"Easy Mode":"Try Again",desc:W!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>W!=="easy"?s(`/quiz/${F}`,{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}):t()},{icon:Q.icon,title:Q.name,desc:"Try something different",color:Q.gradient,action:()=>s(`/quiz/${Q.slug}`,{mode:"quiz",difficulty:"easy",count:10,timer:{type:"per_q",seconds:45}})}];if(B>=80)return W==="hard"&&B>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${F}`,{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}})},{icon:Q.icon,title:`${Q.name} Challenge`,desc:"Hard mode, new topic",color:Q.gradient,action:()=>s(`/quiz/${Q.slug}`,{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}})}]:[{icon:W==="hard"?"🔥":"🎯",title:W==="hard"?"Perfect Score Challenge":"Hard Mode",desc:W==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${F}`,{mode:"quiz",difficulty:"hard",count:W==="hard"?10:20,timer:{type:"per_q",seconds:30}})},{icon:Q.icon,title:Q.name,desc:"Master new topics",color:Q.gradient,action:()=>s(`/quiz/${Q.slug}`,{mode:"quiz",difficulty:W,count:10,timer:{type:"per_q",seconds:45}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${F}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}})}];{const te=B<70;return[{icon:te?"📚":"🎯",title:te?"Practice More":"Try Again",desc:te?"Improve accuracy":"Beat your score",color:te?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:te?()=>s(`/quiz/${F}`,{mode:"practice",difficulty:W,count:10,timer:{type:"off",seconds:0}}):()=>t()},{icon:Q.icon,title:Q.name,desc:"Explore new topics",color:Q.gradient,action:()=>s(`/quiz/${Q.slug}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:45}})},{icon:W==="easy"?"⬆️":"💪",title:W==="easy"?"Medium Difficulty":"More Questions",desc:W==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${F}`,{mode:"quiz",difficulty:W==="easy"?"medium":W,count:W==="easy"?10:20,timer:{type:"per_q",seconds:45}})}]}},I=ft.useMemo(()=>ce(),[B,i,e.categorySlug,e.difficulty]);return n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4",children:[m&&n.jsx(Vl,{startRect:m.startRect,targetRef:x,count:m.count,onDone:()=>{m.amount>0&&!S&&(console.log("[QuizResults] Adding coins once:",m.amount),d(m.amount),b(!0),f(o.coins+m.amount)),y(null)}}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),v&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:n.jsx("div",{className:"text-8xl animate-bounce",children:U?"🎉":"⭐"})}),n.jsxs("div",{className:"flex justify-between items-center mb-6",children:[n.jsx("button",{onClick:()=>s("/"),className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all",children:n.jsx(jg,{})}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",o.level]}),n.jsxs("button",{ref:x,onClick:()=>A(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[c," 🪙"]})]})]}),n.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${X.color}`,children:[n.jsx("span",{className:"text-2xl",children:X.emoji}),n.jsx("span",{className:"font-semibold",children:X.text})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[g,"/",N]}),n.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[n.jsx("span",{className:"text-xl",children:L.icon}),n.jsx("span",{children:L.name})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[B,"%"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[z,"s"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:P>0?`+${P}`:"0"}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),n.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Sg,{}),n.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),o.combo>0&&n.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[n.jsx(Cg,{}),o.combo," streak"]})]}),n.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:O.map((F,W)=>n.jsx("div",{className:`flex-1 rounded-t transition-all ${W===O.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${F.score/F.total*100}%`,minHeight:"4px"}},W))}),n.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("button",{onClick:r,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[n.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Review"}),n.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),n.jsx(kg,{})]})]}),n.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Try Again"}),n.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),n.jsx(Ng,{})]})})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),I.map((F,W)=>n.jsx("button",{onClick:F.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${F.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:n.jsx("span",{className:"text-xl",children:F.icon})}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium text-sm",children:F.title}),n.jsx("div",{className:"text-xs text-white/40",children:F.desc})]})]}),n.jsx(wg,{})]})},W))]}),n.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:n.jsx("button",{onClick:()=>s("/profile/history",{replace:!0}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),E&&n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:F=>{F.target===F.currentTarget&&A(!1)},children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:F=>F.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[o.coins," Coins"]})]})]}),n.jsx("button",{onClick:()=>A(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-o.coins%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${o.coins%100}%`}})})]}),n.jsx("button",{onClick:()=>{A(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})},Rg=({questions:e,answers:t,skipped:r,onBack:s,onRetake:a,fromHistory:i=!1})=>{const o=at(),l=()=>{i?o("/profile/history",{replace:!0}):s?s():o(-1)},d=e.reduce((x,m,y)=>x+(t[y]===m.answerIndex?1:0),0),c=(r==null?void 0:r.filter(Boolean).length)||0,f=e.length-d-c;return n.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),n.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),n.jsx("div",{className:"w-16"})," "]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[n.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),n.jsx("div",{className:"text-lg font-bold text-green-400",children:d})]}),n.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),n.jsx("div",{className:"text-lg font-bold text-red-400",children:f})]}),n.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),n.jsx("div",{className:"text-lg font-bold text-amber-400",children:c})]})]}),n.jsx("ol",{className:"space-y-4",children:e.map((x,m)=>{const y=t[m],p=!y&&y!==0,j=y===x.answerIndex;return n.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",m+1,". ",x.prompt]}),x.category&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",x.category," • Difficulty: ",x.difficulty||"Medium"]})]}),n.jsx("div",{className:"ml-2",children:p?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:x.options.map((k,v)=>{const h=y===v,g=v===x.answerIndex;let C="w-full text-left px-3 py-2 rounded-xl border transition-all ";return g?C+="bg-green-600/20 border-green-500/50 text-green-300":h&&!g?C+="bg-red-600/20 border-red-500/50 text-red-300":C+="bg-base-bg/40 border-base-border text-base-muted",n.jsxs("div",{className:C,children:[n.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][v],"."]}),k,g&&n.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),h&&!g&&n.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},v)})}),x.explanation&&n.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[n.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),n.jsx("div",{className:"text-sm text-base-muted",children:x.explanation})]})]},x.id||m)})}),n.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[n.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),a&&n.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:a,children:"Retake Quiz"})]})]})},Tg="qp_resume",Nd="qp_mistakes",kd="qp_stats",Sd="qp_lastset",Cd="qp_recent",Ed="qp_review_snapshot",_g=50,Jr=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Ra=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Pg=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),pm=e=>{const t=e.slice();for(let r=t.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[t[r],t[s]]=[t[s],t[r]]}return t},Ag=(e,t,r)=>Math.max(t,Math.min(r,e)),Zr=(e,t)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}};async function Lg(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const r=await t.text(),{data:s}=ir.parse(r,{header:!0,skipEmptyLines:!0,transformHeader:i=>String(i).trim().toLowerCase()}),a={a:0,b:1,c:2,d:3};return s.map((i,o)=>{var m;const l=[i.option1,i.option2,i.option3,i.option4].map(y=>(y??"").trim());if(l.some(y=>!y))return null;let d=-1;const c=String(i.answer??"").trim();if(a[c.toLowerCase()]!==void 0)d=a[c.toLowerCase()];else{const y=l.findIndex(p=>p.toLowerCase()===c.toLowerCase());d=y>=0?y:0}const f=String(i.category??i.subject??"General Knowledge").trim(),x=String(i.difficulty??"medium").toLowerCase().trim();return{id:((m=i.id)==null?void 0:m.trim())||`q_${o}`,category:f,difficulty:x,prompt:String(i.question??"").trim(),options:l,answerIndex:d,explanation:String(i.explanation??"").trim()}}).filter(Boolean)}function Ig(e,{categorySlug:t,difficulty:r,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",r),console.log("count:",s),console.log("Total questions available:",e.length);const i=t==="mixed"?()=>!0:f=>Ra(f.category)===t,o=r?f=>(f.difficulty||"medium")===r:()=>!0,l=e.filter(f=>i(f)&&o(f));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(f=>`"${f.category}" -> "${Ra(f.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(f=>Ra(f.category)))]),{questions:[],poolSize:0};const c=Pg(l,Math.min(s,l.length)).map(f=>{const x=pm([0,1,2,3]),m=x.map(p=>f.options[p]),y=x.indexOf(f.answerIndex);return{...f,options:m,answerIndex:y}});return console.log("Final questions:",c.length),{questions:c,poolSize:l.length}}function Mg(){const e=at(),{category:t}=Cp(),r=en(),{energy:s,useEnergy:a,player:i,addCoins:o,addXP:l,updateDailyStreak:d}=xn(),c=new URLSearchParams(r.search),f=c.get("review")==="1",x=c.get("retake")==="1",m=r.state||{},y=m.mode||"quiz",p=String(m.difficulty||"medium").toLowerCase(),j=Ag(Number(m.count||10),1,50),k=m.timer||{type:"per_q",seconds:45};m.resume,m.daily,m.source;const v=x||!!m.retake,h=!!m.fromHistory,g=y==="practice";console.log("Quiz Component - Mode Detection:",{routerState:m,mode:y,isPractice:g,location:r.pathname,state:r.state});const[C,E]=u.useState([]),[A,S]=u.useState(!0),[b,w]=u.useState(""),[N,T]=u.useState({questions:[]}),[D,q]=u.useState("quiz"),[Z,Y]=u.useState(null),[B,U]=u.useState(null),[R,_]=u.useState(0);u.useEffect(()=>{let O=!0;return(async()=>{try{const K=await Lg();if(!O)return;E(K)}catch(K){console.error(K),w("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{S(!1)}})(),()=>{O=!1}},[]),u.useEffect(()=>{if(A||b||f||C.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",y),console.log("Difficulty:",p),console.log("Count:",j);const O=Ig(C,{categorySlug:t,difficulty:p,count:j});if(O.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(C.map(K=>Ra(K.category)))].slice(0,10)),w(`No questions found for "${Jr(t)}" with difficulty "${p}"`);return}console.log("Session built with",O.questions.length,"questions"),T(O),U(Date.now()),_(0),q("quiz")},[C,t,y,p,j,r.state,r.search]),u.useEffect(()=>{if(D!=="quiz"||!B)return;const O=setInterval(()=>{_(Date.now()-B)},1e3);return()=>clearInterval(O)},[D,B]);const z=u.useCallback(O=>{if(console.log("Quiz completed - Mode:",y,"isPractice:",g,"Results:",O),!O||!O.questions){console.error("Invalid results object:",O);return}const K=O.questions.filter((I,F)=>O.answers[F]!==null&&O.answers[F]!==I.answerIndex).map(I=>I.id);try{const I=Zr(Nd,[]),F=Array.from(new Set([...K,...I]));localStorage.setItem(Nd,JSON.stringify(F))}catch(I){console.error("Error saving mistakes:",I)}try{const I=Zr(kd,{sessions:[]});I.sessions.push({cat:Jr(t),mode:g?"practice":"quiz",total:O.total,correct:O.correct,skipped:O.skipped.filter(Boolean).length,ms:R,timestamp:Date.now(),earnedXP:g?0:O.correct*10,earnedCoins:g?0:O.correct*5}),localStorage.setItem(kd,JSON.stringify(I))}catch(I){console.error("Error saving stats:",I)}const ce={ts:Date.now(),slug:t,categoryLabel:Jr(t),mode:g?"practice":"quiz",difficulty:p,total:O.total,timer:g?null:k,ms:R,attempted:O.answers.filter(I=>I!==null).length,correct:O.correct,questions:O.questions,answers:O.answers,skipped:O.skipped,isPractice:g};try{localStorage.setItem(Sd,JSON.stringify(ce)),localStorage.setItem(Ed,JSON.stringify({questions:O.questions,answers:O.answers,skipped:O.skipped}));const I=Zr(Cd,[]),W=[{id:ce.ts,ts:ce.ts,cat:ce.categoryLabel,slug:t,mode:g?"Practice":"Quiz",total:O.total,correct:O.correct,ms:R,snapshot:ce},...I].slice(0,_g);localStorage.setItem(Cd,JSON.stringify(W))}catch(I){console.error("Error saving snapshot:",I)}if(localStorage.removeItem(Tg),g&&O.earnedCoins?O.earnedCoins:!g&&O.correct>0&&O.correct*5,!g&&O.correct>0){const I=O.correct*10;l(I)}d(),Y({...O,category:Jr(t),categorySlug:t,difficulty:p,mode:g?"practice":"quiz",elapsedMs:R,isPractice:g,hasTimer:!g,earnedXP:g?0:O.correct*10,earnedCoins:g?O.earnedCoins||0:O.correct*5}),q("results")},[t,y,k,R,g]),P=u.useCallback(()=>{h?e("/profile/history",{replace:!0,state:null}):e("/")},[h,e]),L=u.useCallback(()=>{console.log("Retake requested - Mode:",y,"isPractice:",g);const O=Zr(Sd,null);if(!O||O.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:g?"practice":"quiz",difficulty:p,count:j,timer:g?null:k,retake:!0}});return}const K=O.questions.map(ce=>{const I=pm([0,1,2,3]);return{...ce,options:I.map(F=>ce.options[F]),answerIndex:I.indexOf(ce.answerIndex)}});T({questions:K,poolSize:K.length}),U(Date.now()),_(0),q("quiz"),window.scrollTo(0,0)},[t,y,p,j,k,e,g]),M=u.useCallback((O=null)=>{if(O)Y(O);else if(!Z){const K=Zr(Ed,null);K&&Y({questions:K.questions||[],answers:K.answers||[],skipped:K.skipped||[]})}q("review")},[Z]),X=u.useCallback(()=>{h?e("/profile/history",{replace:!0}):q("results")},[h,e]);return A?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):b?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-red-400",children:b})}):(console.log("Render - Current view:",D,"Session questions:",N.questions.length,"Mode:",y,"isPractice:",g),n.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:n.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[D==="quiz"&&N.questions.length>0&&n.jsx(bg,{session:N,mode:g?"practice":"quiz",category:Jr(t),difficulty:p,timerConfig:g?null:k,onComplete:z,onQuit:P,isPractice:g}),D==="results"&&Z&&n.jsx(Eg,{results:Z,onRetake:L,onReview:()=>M(Z),isRetake:v,isPractice:g,player:i,categories:um,addCoins:o,onNavigate:(O,K)=>{K!=null&&K.replace?e(O,{replace:!0,state:K}):e(O,{state:K})}}),D==="review"&&Z&&n.jsx(Rg,{questions:Z.questions||[],answers:Z.answers||[],skipped:Z.skipped||[],onBack:X,onRetake:L,fromHistory:h,isPractice:g})]})}))}const wn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Un=360/wn.length,Dg=42,Vi=3e3,Rd=10,Td=260,zg="cubic-bezier(.15,.7,.1,1)",Fg="cubic-bezier(.2,.7,.2,1)",bn=5,Og=5,$g=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function Bg({muted:e=!1,size:t=18}){return n.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&n.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function Ug({q:e,locked:t,onPick:r,result:s}){if(!e)return null;const a=[e.option1,e.option2,e.option3,e.option4];return n.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[n.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),n.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),a.map((i,o)=>{const l=s&&i===e.answer,d=s&&s.pick===i&&i!==e.answer;return n.jsx("button",{disabled:t||!!s,onClick:()=>r(i),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",d?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:i},o)}),s&&n.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?n.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):n.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",n.jsx("b",{children:e.answer})]}),e.explanation&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function qg(){const e=at(),[t]=At("/sounds/correct.mp3",{volume:.7}),[r]=At("/sounds/wrong.mp3",{volume:.7}),[s,a]=u.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(bn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(bn).fill(null)}]),[i,o]=u.useState(0),[l,d]=u.useState(1),c=s.reduce((I,F)=>I+F.scores.reduce((W,G)=>W+(G??0),0),0),[f,x]=u.useState(!0),m=u.useRef(null);u.useEffect(()=>{const I=new Audio("/sounds/spin.mp3");return I.loop=!0,I.volume=.7,m.current=I,()=>{try{I.pause(),I.src=""}catch{}}},[]);const y=()=>{if(f&&m.current)try{m.current.currentTime=0,m.current.play()}catch{}},p=()=>{if(m.current)try{m.current.pause(),m.current.currentTime=0}catch{}},[j,k]=u.useState(0),[v,h]=u.useState("none"),[g,C]=u.useState(!1),[E,A]=u.useState(null),[S,b]=u.useState(null),w=u.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[N,T]=u.useState([]);u.useEffect(()=>{(async()=>{try{const I=await fetch("/data/quiz_questions_bank.csv").then(ee=>ee.text()),{data:F}=ir.parse(I,{header:!0,skipEmptyLines:!0,transformHeader:ee=>String(ee).trim().toLowerCase()}),W={a:0,b:1,c:2,d:3},G=F.map((ee,J)=>{var ne;const Q=(ee.question??"").trim();if(!Q)return null;const te=[ee.option1,ee.option2,ee.option3,ee.option4].map(me=>String(me??"").trim());if(te.some(me=>!me))return null;let se=String(ee.answer??"").trim(),H=W[se.toLowerCase()];if(H===void 0){const me=te.findIndex(je=>je.toLowerCase()===se.toLowerCase());H=me>=0?me:0}const $=te[H];return{id:((ne=ee.id)==null?void 0:ne.trim())||`ps_${J}`,question:Q,option1:te[0],option2:te[1],option3:te[2],option4:te[3],answer:$,explanation:String(ee.explanation??"").trim(),catSlug:$g(ee.category??ee.subject??"general knowledge"),difficulty:String(ee.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);T(G)}catch{T([])}})()},[]);const[D,q]=u.useState(null),[Z,Y]=u.useState(null),[B,U]=u.useState(!1),R=I=>(I%360+360)%360,_=I=>R(I),z=l>bn;function P(){if(s.length>=4)return;const I=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],F=I[(s.length*2+1)%I.length];a(W=>[...W,{name:`Player ${W.length+1}`,color:F,scores:Array(bn).fill(null)}])}function L(){s.length<=2||(a(I=>I.slice(0,-1)),o(I=>Math.min(I,s.length-2)))}function M(I){a(F=>F.map((W,G)=>G===i?{...W,scores:W.scores.map((ee,J)=>J===l-1?I:ee)}:W))}function X(){if(g||z)return;A(null),b(null),q(null),Y(null),C(!0),y();const I=Math.floor(Math.random()*wn.length),F=wn[I],W=Un*.28,G=(Math.random()*2-1)*W,ee=R(j),J=180,te=I*Un+Un/2+G;let se=_(te-ee-J);const H=Dg*360+se,$=j+H+Rd;h(`transform ${w?800:Vi}ms ${zg}`),k($);try{navigator.vibrate&&!w&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{h(`transform ${w?160:Td}ms ${Fg}`),k(ne=>ne-Rd)},w?800:Vi),setTimeout(()=>{if(p(),C(!1),A(I),b(F.color),F.soon)return;const ne=N.filter(je=>je.catSlug===F.slug&&je.difficulty==="easy"),me=ne.length?ne:N.filter(je=>je.catSlug===F.slug);if(me.length){const je=me[Math.floor(Math.random()*me.length)];q(je)}else q({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(w?800:Vi)+(w?160:Td)+40)}function O(I){if(!D||Z)return;const F=I===D.answer;if(Y({correct:F,pick:I}),F){t(),U(!0),setTimeout(()=>U(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}M(Og)}else{r();try{navigator.vibrate&&navigator.vibrate([4])}catch{}M(0)}}function K(){const I=(i+1)%s.length,F=I===0?l+1:l;o(I),d(F),A(null),b(null),q(null),Y(null)}function ce(){const I=s.map(G=>G.scores.reduce((ee,J)=>ee+(J??0),0)),F=Math.max(...I),W=s.filter((G,ee)=>I[ee]===F).map(G=>G.name).join(", ");alert(`${W} win${W.includes(",")?"":"s"} the pot of ${c} coins! 🎉`),e("/play")}return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[B&&n.jsx(mm,{numberOfPieces:120,recycle:!1}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),n.jsx("button",{onClick:()=>x(I=>!I),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":f?"Mute sound":"Unmute sound",title:f?"Sound on":"Sound off",children:n.jsx(Bg,{muted:!f})})]}),n.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-sm",children:["Round ",n.jsx("b",{children:Math.min(l,bn)}),"/",n.jsx("b",{children:bn})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:P,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),n.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),n.jsx("button",{onClick:L,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),n.jsxs("div",{className:"text-sm",children:["Pot: ",n.jsx("b",{className:"text-yellow-300",children:c})," 🪙"]})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[n.jsxs("colgroup",{children:[n.jsx("col",{style:{width:"42%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"13%"}})]}),n.jsx("thead",{children:n.jsxs("tr",{className:"text-base-muted",children:[n.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:bn}).map((I,F)=>n.jsxs("th",{className:"font-medium text-center",children:["R",F+1]},F)),n.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),n.jsx("tbody",{children:s.map((I,F)=>{const W=I.scores.reduce((ee,J)=>ee+(J??0),0),G=F===i;return n.jsxs("tr",{className:G?"bg-white/6":"",children:[n.jsx("td",{className:"py-1 pr-1",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:I.color}}),n.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:I.name,onChange:ee=>a(J=>J.map((Q,te)=>te===F?{...Q,name:ee.target.value}:Q))})]})}),I.scores.map((ee,J)=>n.jsx("td",{className:"text-center",children:ee===null?"–":ee},J)),n.jsx("td",{className:"text-right pr-1 font-semibold",children:W})]},F)})})]})})]}),n.jsx("section",{className:"flex flex-col items-center",children:n.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[S&&n.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${S}33, 0 0 30px 8px ${S}44`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:v},"aria-label":"Category wheel",role:"group",children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[wn.map((I,F)=>{const W=F*Un,G=W+Un,ee=Un>180?1:0,J=Math.PI*W/180,Q=Math.PI*G/180,te=50+50*Math.cos(J),se=50-50*Math.sin(J),H=50+50*Math.cos(Q),$=50-50*Math.sin(Q),ne=E===F;return n.jsxs("g",{style:{opacity:E==null?.95:ne?1:.78,filter:E!=null&&!ne?"blur(0.6px)":"none"},children:[n.jsx("path",{d:`M50,50 L${te},${se} A50,50 0 ${ee} 0 ${H},${$} Z`,fill:I.color,stroke:ne?`${I.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:ne?"1.2":"0.6"}),n.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${W+Un/2} 50 50) translate(12 0)`,children:n.jsxs("tspan",{children:[I.label,I.soon?" (soon)":""]})})]},I.slug)}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),n.jsx("button",{onClick:X,disabled:g||z,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",g||z?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),E!=null&&!g&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:n.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[n.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:wn[E].color}}),wn[E].label]})})]})}),n.jsx("section",{className:"mt-4",children:z?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),n.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",n.jsx("b",{className:"text-yellow-300",children:c})," coins."]}),n.jsx("button",{className:"btn-primary w-full",onClick:ce,children:"End match"})]}):E!=null&&wn[E].soon?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-lg font-semibold mb-1",children:wn[E].label}),n.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),n.jsx("button",{className:"btn-primary",onClick:X,disabled:g,children:"Re-spin"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",n.jsx("span",{style:{color:s[i].color},children:s[i].name})," ","| Round ",l,"/",bn]}),n.jsx(Ug,{q:D,locked:g||!D,onPick:O,result:Z}),Z&&n.jsx("div",{className:"mt-3 flex justify-center",children:n.jsx("button",{className:"btn-primary",onClick:K,children:"Next turn"})})]})})]}),n.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const Yg=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return n.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[n.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),n.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(r=>n.jsxs("button",{onClick:()=>e(r.id,r.title),className:`rounded-3xl bg-gradient-to-br ${r.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[n.jsx("span",{className:"text-5xl",children:r.emoji}),n.jsx("span",{className:"text-white font-bold text-lg text-center",children:r.title})]},r.id))})]})},Qg=()=>{at();const{player:e,addCoins:t,addXP:r}=xn(),[s,a]=u.useState([]),[i,o]=u.useState(0),[l,d]=u.useState({}),[c,f]=u.useState(0),[x,m]=u.useState(5),[y,p]=u.useState(0),[j,k]=u.useState(!0),[v,h]=u.useState(null),[g,C]=u.useState(!0),[E,A]=u.useState(null),[S,b]=u.useState(""),[w,N]=u.useState(!1),[T,D]=u.useState(""),[q,Z]=u.useState(!1),[Y,B]=u.useState(!1),[U,R]=u.useState(!1),[_,z]=u.useState(!1),[P,L]=u.useState(!1),[M,X]=u.useState(!1),[O,K]=u.useState(0),[ce,I]=u.useState(0),[F,W]=u.useState(-1),[G,ee]=u.useState(-1),[J,Q]=u.useState({}),[te,se]=u.useState({}),H=u.useRef(null),$=u.useRef(null),[ne]=At("/sounds/correct.mp3",{volume:.6}),[me]=At("/sounds/wrong.mp3",{volume:.6}),[je]=At("/sounds/coin.mp3",{volume:.75}),pe=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],Ee=()=>{a([]),o(0),d({}),f(0),m(5),p(0),k(!0),h(null),N(!1),D(""),Z(!1),B(!1),R(!1),z(!1),L(!1),X(!1),K(0),I(0),W(-1),ee(-1),Q({}),se({}),A(null),b(""),_e(null)};u.useEffect(()=>(Ee(),C(!0),()=>{document.body.classList.remove("hide-bottom-nav"),Ee(),$.current&&clearTimeout($.current)}),[]),u.useEffect(()=>{!g&&s.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[g,s.length]),u.useEffect(()=>{!g&&s.length>0&&z(!0)},[g,s.length]);const[Le,_e]=u.useState(null);u.useEffect(()=>{const re=fe=>{var Ae;if(_&&!U){const Se=fe.target.closest('button[type="button"]'),We=(Ae=Se==null?void 0:Se.querySelector(".text-\\[10px\\]"))==null?void 0:Ae.textContent;We&&["Home","Play","Profile","Swipe"].includes(We)&&(fe.preventDefault(),fe.stopPropagation(),_e({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[We]),B(!0))}};return document.addEventListener("click",re,!0),()=>document.removeEventListener("click",re,!0)},[_,U]),u.useEffect(()=>{const re=H.current;if(!re)return;let fe=!1,Ae=0,Se=null;const We=be=>{!g&&s.length>0&&be.preventDefault()},ye=be=>{Ae=be.touches[0].clientY,fe=!1},de=be=>{!g&&s.length>0&&!Y&&!q&&be.preventDefault()},oe=be=>{if(fe||Y||q)return;const Ce=be.changedTouches[0].clientY,ge=Ae-Ce;if(Math.abs(ge)>30){if(fe=!0,Se&&clearTimeout(Se),ge>0&&i<s.length-1){const ae=i+1;o(ae),re.scrollTo({top:ae*window.innerHeight,behavior:"smooth"})}else if(ge<0&&i>0){const ae=i-1;o(ae),re.scrollTo({top:ae*window.innerHeight,behavior:"smooth"})}Se=setTimeout(()=>{fe=!1},800)}};return re.addEventListener("touchstart",ye,{passive:!1}),re.addEventListener("touchmove",de,{passive:!1}),re.addEventListener("touchend",oe,{passive:!1}),re.addEventListener("wheel",We,{passive:!1}),()=>{re.removeEventListener("touchstart",ye),re.removeEventListener("touchmove",de),re.removeEventListener("touchend",oe),re.removeEventListener("wheel",We),Se&&clearTimeout(Se)}},[i,s.length,g]),u.useEffect(()=>{const re=H.current;re&&(Y||q?(re.style.overflow="hidden",re.style.touchAction="none"):(re.style.overflow="auto",re.style.touchAction="auto"))},[Y,q]),u.useEffect(()=>{(Y||q)&&$.current&&(clearTimeout($.current),$.current=null)},[Y,q]);const he=async re=>{try{const Ae=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Se}=ir.parse(Ae,{header:!0,skipEmptyLines:!0}),de=Se.map((oe,be)=>{var ae,le;const Ce=[oe.option1,oe.option2,oe.option3,oe.option4].filter(Boolean),ge={A:0,B:1,C:2,D:3};return{id:oe.id||`q_${be}`,prompt:oe.question,options:Ce,answerIndex:ge[(ae=oe.answer)==null?void 0:ae.toUpperCase()]||0,category:oe.category||"General Knowledge",difficulty:((le=oe.difficulty)==null?void 0:le.toLowerCase())||"medium",explanation:oe.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(oe=>oe.prompt&&oe.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(oe=>({...oe,mascot:pe[Math.floor(Math.random()*pe.length)]}));a(de),k(!1)}catch(fe){console.error("Failed to load questions:",fe),k(!1)}},ue=re=>re===1||re===3||re===7||re===10||re===15||re===20||re>20&&re%5===0,xe=(re,fe)=>{if(l[re]!==void 0)return;const Ae=s.find(ye=>ye.id===re),Se=fe===Ae.answerIndex,We=s.findIndex(ye=>ye.id===re);if(d(ye=>({...ye,[re]:fe})),K(ye=>ye+1),I(ye=>ye+1),Se){if(ne(),f(ye=>ye+1),p(ye=>ye+10),X(!0),setTimeout(()=>{je()},300),setTimeout(()=>X(!1),2e3),it(),ue(We+1)){const ye=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];D(ye[Math.floor(Math.random()*ye.length)]),N(!0),setTimeout(()=>N(!1),2e3)}}else if(me(),f(0),L(!0),setTimeout(()=>L(!1),1500),m(ye=>{const de=Math.max(0,ye-1);return de===0&&setTimeout(()=>Z(!0),500),de}),x>1&&ue(We+1)){const ye=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];D(ye[Math.floor(Math.random()*ye.length)]),N(!0),setTimeout(()=>N(!1),2e3)}(x>1||Se)&&($.current=setTimeout(()=>{tn()},2500))},it=()=>{const re=document.createElement("div");re.style.position="fixed",re.style.inset="0",re.style.pointerEvents="none",re.style.zIndex="1000",document.body.appendChild(re);const fe=["🎉","✨","⭐","🎊","🌟"];for(let Ae=0;Ae<20;Ae++){const Se=document.createElement("div");Se.textContent=fe[Math.floor(Math.random()*fe.length)],Se.style.position="fixed",Se.style.left=`${Math.random()*100}%`,Se.style.top="-50px",Se.style.fontSize="24px",Se.style.animation=`fall ${2+Math.random()*2}s ease-out`,re.appendChild(Se)}setTimeout(()=>re.remove(),4e3)},tn=()=>{if(!(Y||q)&&i<s.length-1){const re=i+1,fe=document.getElementById(`question-${re}`);fe==null||fe.scrollIntoView({behavior:"smooth"}),o(re)}},Pe=re=>{const fe=s.findIndex(ye=>ye.id===re);if(F>=0&&O<5){h(`After ${5-O} attempts`),setTimeout(()=>h(null),2e3);return}const Ae=s[fe],We=[0,1,2,3].filter(ye=>ye!==Ae.answerIndex).sort(()=>Math.random()-.5).slice(0,2);Q({...J,[re]:We}),W(fe),K(0)},Ne=re=>{const fe=s.findIndex(be=>be.id===re);if(G>=0&&ce<5){h(`After ${5-ce} attempts`),setTimeout(()=>h(null),2e3);return}const Se=s[fe].answerIndex,We=[0,0,0,0],ye=40+Math.floor(Math.random()*31);We[Se]=ye;let de=100-ye;const oe=[0,1,2,3].filter(be=>be!==Se);for(let be=0;be<oe.length-1;be++){const Ce=Math.floor(Math.random()*(de/2));We[oe[be]]=Ce,de-=Ce}We[oe[oe.length-1]]=de,se({...te,[re]:We}),ee(fe),I(0)},Ue=(re,fe)=>{Ee(),A(re),b(fe),C(!1),he()},gn=()=>{_e("/swipe"),B(!0)},or=()=>{R(!0),B(!1),document.body.classList.remove("hide-bottom-nav")},Br=()=>{const re=Object.keys(l).filter(fe=>{const Ae=s.find(Se=>Se.id===fe);return l[fe]===(Ae==null?void 0:Ae.answerIndex)}).length;return u.useEffect(()=>{document.body.classList.add("hide-bottom-nav");const fe=setTimeout(()=>{t(y),Ee(),z(!1),R(!1),C(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(fe),document.body.classList.remove("hide-bottom-nav")}},[]),n.jsx("div",{className:"fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),n.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(l).length})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),n.jsx("div",{className:"text-2xl font-bold text-green-400",children:re})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",y]})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),n.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(fe,Ae)=>n.jsx("span",{className:Ae<x?"":"opacity-30",children:"❤️"},Ae))})]})]})]})})};return U?n.jsx(Br,{}):g?n.jsx(Yg,{onSelect:Ue}):j?n.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading questions..."})}):n.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[n.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[n.jsx("button",{onClick:gn,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("div",{className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:y})]}),n.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🔥"}),n.jsx("span",{className:"font-bold text-orange-400",children:c})]})]}),n.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(re,fe)=>n.jsx("span",{className:`${fe<x?"text-red-500":"text-gray-600 opacity-30"} ${P&&fe===x-1?"animate-heartLoss":""}`,children:"❤️"},fe))})]}),S&&n.jsx("div",{className:"text-center py-1",children:n.jsx("span",{className:"text-xs text-gray-400",children:S})})]}),M&&n.jsx("div",{className:"fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-yellow-500 text-white px-4 py-2 rounded-full font-bold animate-coinFloat",children:"+10 🪙"})}),n.jsx("div",{ref:H,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:s.map((re,fe)=>n.jsx(Hg,{question:re,index:fe,answered:l[re.id],onAnswer:Ae=>xe(re.id,Ae),onFiftyFifty:()=>Pe(re.id),onAudience:()=>Ne(re.id),eliminated:J[re.id]||[],audiencePercentages:te[re.id],canUseFiftyFifty:F<0||O>=5,canUseAudience:G<0||ce>=5},re.id))}),q&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"😔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),n.jsx("button",{onClick:()=>{R(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),Y&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>B(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),n.jsx("button",{onClick:or,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),w&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:n.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:T})}),v&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:v})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},Hg=({question:e,index:t,answered:r,onAnswer:s,onFiftyFifty:a,onAudience:i,eliminated:o,audiencePercentages:l,canUseFiftyFifty:d,canUseAudience:c})=>{const f=x=>{switch(x){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return n.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[n.jsx("div",{className:"flex justify-center py-2",children:n.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),n.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[n.jsxs("div",{className:`bg-gradient-to-br ${f(e.difficulty)} p-6 rounded-3xl mb-4`,children:[n.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),n.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),n.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((x,m)=>{const y=r!==void 0,p=r===m,j=m===e.answerIndex,k=o.includes(m);let v="w-full p-4 rounded-2xl font-medium transition-all ";return k?v+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":y?j?v+="bg-green-500 text-white":p?v+="bg-red-500 text-white":v+="bg-gray-700 text-gray-400":v+="bg-gray-800 text-white hover:bg-gray-700",n.jsx("button",{onClick:()=>!y&&!k&&s(m),disabled:y||k,className:v,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][m]}),n.jsx("span",{className:"flex-1 text-left",children:x}),l&&l[m]>0&&n.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[m],"%"]}),y&&j&&n.jsx("span",{children:"✓"})]})},m)})}),!r&&n.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[n.jsx("button",{onClick:a,disabled:!d,className:`px-4 py-2 rounded-lg font-medium text-sm ${d?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),n.jsx("button",{onClick:i,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),n.jsx("div",{className:"text-center mt-3 mb-2",children:n.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),n.jsx("div",{className:"text-center mt-12 mb-4",children:n.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function Wg(){const e=at(),[t,r]=u.useState(""),{player:s,levelProgress:a}=xn(),i=()=>{try{const c=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),f=new Date().setHours(0,0,0,0);return c.sessions.filter(m=>new Date(m.timestamp).setHours(0,0,0,0)===f).reduce((m,y)=>m+(y.earnedCoins||0),0)}catch{return 0}},o={name:(s==null?void 0:s.name)||"Player",rank:23,streak:(s==null?void 0:s.currentStreak)||0,todayQuizzes:3,todayCoins:i()};u.useEffect(()=>{const c=new Date().getHours();c<12?r("Good morning"):c<17?r("Good afternoon"):r("Good evening")},[]);const l=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,d=a.required>0?a.current/a.required*100:0;return n.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-10 px-3",children:[n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("div",{children:n.jsxs("h1",{className:"text-2xl font-bold px-3",children:[t,", ",(s==null?void 0:s.name)||"Player"," 👋"]})}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-10 h-10 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:n.jsx("span",{className:"text-xl",children:"⚙️"})})]}),n.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[n.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:o.name[0]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"text-lg font-semibold",children:s.name||"Player"}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",s.level]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[s.coins," 🪙"]}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",o.rank]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[n.jsx("span",{children:"XP Progress"}),n.jsxs("span",{children:[a.current,"/",a.required]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${d}%`}})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",o.streak]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",o.todayCoins]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),n.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${l} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),n.jsxs("div",{className:"relative flex items-start justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),n.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),n.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),n.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("/profile/history"),className:`${l} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),n.jsx("div",{className:"text-3xl mb-3",children:"📊"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),n.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",o.todayQuizzes," today"]})]}),n.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${l} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),n.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),n.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${l} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[n.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),n.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),n.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${l} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),n.jsxs("div",{className:"mt-4 space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${l} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"🔥"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[o.streak," days strong"]})]})]})}),n.jsx("button",{onClick:()=>e("/profile/quests"),className:`${l} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"⚡"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:`${l} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),n.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),n.jsx("div",{className:"text-white/40",children:"→"})]})})]}),n.jsx("div",{className:"h-6"})]})}const es="🪙",ia={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},oa=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function Gg(){var m,y;const e=at(),{player:t}=xn(),r={global:ia.global.map(p=>p.you?{...p,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:p),friends:ia.friends.map(p=>p.you?{...p,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:p),india:ia.india.map(p=>p.you?{...p,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:p)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",r.friends[0]);const[s,a]=u.useState({days:2,hours:14,minutes:17}),[i,o]=u.useState("global"),l=r[i]||r.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(m=l.find(p=>p.you))==null?void 0:m.score);const d=l.find(p=>p.you),c=l.slice(0,3),f=l.slice(3);u.useEffect(()=>{const p=j=>{j.preventDefault(),e(-1)};return window.addEventListener("popstate",p),()=>{window.removeEventListener("popstate",p)}},[e]),u.useEffect(()=>{const p=setInterval(()=>{a(j=>j.minutes>0?{...j,minutes:j.minutes-1}:j.hours>0?{...j,hours:j.hours-1,minutes:59}:j.days>0?{...j,days:j.days-1,hours:23,minutes:59}:j)},6e4);return()=>clearInterval(p)},[]);const x=p=>{const j=Math.max(...l.map(v=>v.score)),k=p/j*100;return k>=90?oa[0]:k>=70?oa[1]:k>=40?oa[2]:oa[3]};return n.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-5",children:[n.jsx("button",{onClick:()=>e("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),n.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),n.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${x(d==null?void 0:d.score).color} p-4 text-center relative overflow-hidden`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:"text-2xl mb-1",children:x(d==null?void 0:d.score).icon}),n.jsxs("div",{className:"text-sm font-bold text-white",children:[x(d==null?void 0:d.score).name," League"]}),n.jsx("div",{className:"text-xs text-white/80",children:i==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),n.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:ia.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(p=>n.jsxs("button",{onClick:()=>o(p.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${i===p.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[n.jsx("div",{children:p.label}),n.jsx("div",{className:`text-[10px] ${i===p.key?"text-black/70":"text-white/60"}`,children:p.count})]},p.key))}),n.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),n.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[n.jsxs("span",{children:["Rank #",d==null?void 0:d.rank]}),n.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${d!=null&&d.trend.startsWith("+")?"bg-green-500/20 text-green-400":d!=null&&d.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:d==null?void 0:d.trend}),n.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",i==="global"?"Global":i==="friends"?"Friends":"India"]})]})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[d==null?void 0:d.score," ",es]}),n.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",d==null?void 0:d.streak," streak"]})]})]})}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),n.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),n.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),n.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),n.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),n.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[c[1]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(la,{src:c[1].avatar,fallback:c[1].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ca(c[1].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[c[1].score," ",es]})]}),c[0]&&n.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(la,{src:c[0].avatar,fallback:c[0].name,size:72}),n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx(Vg,{})}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),n.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:ca(c[0].name,8)}),n.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[c[0].score," ",es]}),n.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),c[2]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(la,{src:c[2].avatar,fallback:c[2].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ca(c[2].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[c[2].score," ",es]})]})]})]})]}),f.length>0&&n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[n.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[n.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),n.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),n.jsx("ul",{className:"space-y-1.5",children:f.map((p,j)=>n.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${p.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${j*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(Xg,{n:p.rank,you:p.you}),n.jsx(la,{src:p.avatar,fallback:p.name,size:36}),n.jsxs("div",{className:"flex flex-col leading-tight",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm font-semibold",children:ca(p.name,12)}),n.jsx("span",{className:"text-xs",children:p.country}),p.friend&&n.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),n.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${p.you?"text-black/70":"text-white/60"}`,children:[n.jsx("span",{children:p.handle}),n.jsxs("span",{children:["🔥",p.streak]})]})]})]}),n.jsxs("div",{className:"flex flex-col items-end",children:[n.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[n.jsx("span",{children:p.score}),n.jsx("span",{className:p.you?"opacity-90":"opacity-80",children:es})]}),n.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${p.trend.startsWith("+")?"bg-green-500/20 text-green-400":p.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:p.trend})]})]},`${i}-${p.rank}`))})]}),d&&d.rank>1&&n.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[n.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),n.jsx("div",{className:"text-xs text-white/70 mb-3",children:i==="friends"&&d.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((y=l[d.rank-2])==null?void 0:y.score)||0)-d.score+1)} more coins to reach rank #${d.rank-1}`}),!(i==="friends"&&d.rank===1)&&n.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function la({src:e,fallback:t,size:r=56}){const s=Kg(t);return n.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:r,height:r},children:e?n.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):n.jsx("span",{className:"text-sm font-semibold",children:s})})}function Vg(){return n.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[n.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[n.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),n.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),n.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function Xg({n:e,you:t}){return n.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function ca(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function Kg(e=""){var r;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((r=t[1])==null?void 0:r[0])||"")).toUpperCase()}const Jg="qp_recent",Zg="qp_review_snapshot",_d=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function ev(){const[e,t]=u.useState("quizzes"),[r,s]=u.useState(null),[a,i]=u.useState(!1),[o,l]=u.useState("all"),[d,c]=u.useState("all"),[f,x]=u.useState("date"),[m,y]=u.useState([]),[p,j]=u.useState(!0),k=at(),v=S=>{if(!S)return"00:00";const b=Math.floor(S/1e3),w=Math.floor(b/60),N=b%60;return`${String(w).padStart(2,"0")}:${String(N).padStart(2,"0")}`},h=S=>{if(!S)return"Unknown";const b=new Date(S),N=Math.floor((new Date-b)/(1e3*60*60*24));return N===0?"Today":N===1?"Yesterday":N<7?`${N} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][b.getMonth()]} ${b.getDate()}`};u.useEffect(()=>{let S=!1;j(!0);const b=T=>{try{return JSON.parse(T)}catch{return null}},w=T=>encodeURIComponent(String(T).trim().toLowerCase().replace(/\s+/g,"-")),N=T=>{var P,L,M,X;const D=Number(T.ts??T.timestamp??T.id)||Date.now(),q=Number(T.ms)||0,Z=Number(T.total)||0,Y=Number(T.correct)||0,U=String(T.mode||"").toLowerCase().includes("practice")?"practice":"quiz",R=((P=T.snapshot)==null?void 0:P.category)||((L=T.snapshot)==null?void 0:L.categoryLabel)||T.cat||T.category||"Unknown",_=((M=T.snapshot)==null?void 0:M.categoryParam)||w(R),z=String(((X=T.snapshot)==null?void 0:X.difficulty)||T.difficulty||"medium").toLowerCase();return{id:T.id??D,type:U,category:R,categoryParam:_,difficulty:z,score:Y,total:Z,accuracy:Z?Math.round(Y/Z*100):0,time:v(q),ms:q,date:h(D),timestamp:D,snapshot:T.snapshot??null,mode:T.mode||(U==="practice"?"Practice":"Quiz")}};try{const T=localStorage.getItem(Jg),D=T?b(T):null,Z=(Array.isArray(D)&&D.length?D:_d).map(N).filter(Y=>Y&&Y.timestamp).sort((Y,B)=>B.timestamp-Y.timestamp);S||y(Z)}catch(T){console.error("Error loading history:",T),S||y(_d)}finally{S||j(!1)}return()=>{S=!0}},[]);const g=u.useMemo(()=>{const S=new Set(m.map(b=>b.category));return Array.from(S)},[m]),C=u.useMemo(()=>{let S=m.filter(b=>e==="quizzes"?b.type==="quiz":b.type==="practice");return o!=="all"&&(S=S.filter(b=>b.category===o)),d!=="all"&&(S=S.filter(b=>b.difficulty===d)),S.sort((b,w)=>f==="date"?w.timestamp-b.timestamp:f==="score"?w.accuracy-b.accuracy:f==="time"?b.ms-w.ms:0),S},[m,e,o,d,f]),E=u.useMemo(()=>{if(C.length===0)return null;const S=C.reduce((T,D)=>T+D.score,0),b=C.reduce((T,D)=>T+D.total,0),w=b?Math.round(S/b*100):0,N=C.reduce((T,D)=>T+D.ms,0);return{count:C.length,avgAccuracy:w,totalTime:v(N),bestScore:Math.max(...C.map(T=>T.accuracy))}},[C]),A=S=>S>=80?"text-green-400":S>=60?"text-blue-400":S>=40?"text-yellow-400":"text-red-400";return p?n.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading history..."})}):n.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[n.jsx("div",{className:"",children:n.jsxs("div",{className:"px-4 pt-4 pb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("button",{onClick:()=>k("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),n.jsx("button",{onClick:()=>i(!a),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:n.jsx(rv,{})})]}),n.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),n.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),n.jsxs("div",{className:"px-4 pb-20",children:[n.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:n.jsx("div",{className:"flex items-center",children:n.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(S=>n.jsxs("button",{onClick:()=>t(S.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===S.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[n.jsx("span",{className:"mr-1",children:S.icon}),S.label]},S.value))})})}),E&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[n.jsx(da,{label:"Total",value:E.count}),n.jsx(da,{label:"Avg Score",value:`${E.avgAccuracy}%`,color:A(E.avgAccuracy)}),n.jsx(da,{label:"Best Score",value:`${E.bestScore}%`,color:"text-green-400"}),n.jsx(da,{label:"Total Time",value:E.totalTime})]})}),a&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),n.jsxs("select",{value:o,onChange:S=>l(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All Categories"}),g.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),n.jsxs("select",{value:d,onChange:S=>c(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All"}),n.jsx("option",{value:"easy",children:"Easy"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"hard",children:"Hard"})]})]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),n.jsxs("select",{value:f,onChange:S=>x(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"date",children:"Date"}),n.jsx("option",{value:"score",children:"Score"}),n.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),C.length===0?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📚"}),n.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),n.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):n.jsx("div",{className:"space-y-3",children:C.map((S,b)=>n.jsx(tv,{item:S,index:b,onClick:()=>s(S)},S.id))})]}),r&&n.jsx(nv,{item:r,onClose:()=>s(null)})]})}function da({label:e,value:t,color:r="text-white"}){return n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),n.jsx("div",{className:`text-lg font-bold ${r}`,children:t})]})}function tv({item:e,index:t,onClick:r}){const s=o=>o>=80?"from-green-500/20 to-green-600/10 border-green-500/30":o>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":o>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",i=(o=>{const l=o==null?void 0:o.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return n.jsxs("div",{onClick:r,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),n.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${i.bg} ${i.text} ${i.border} border`,children:e.difficulty}),n.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),n.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[n.jsxs("span",{children:["⏱ ",e.time]}),n.jsx("span",{children:e.mode})]}),n.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function nv({item:e,onClose:t}){const r=at();return u.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:n.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),n.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Category"}),n.jsx("span",{className:"text-white font-medium",children:e.category})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Difficulty"}),n.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Accuracy"}),n.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-white/60",children:"Time"}),n.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&n.jsx("button",{onClick:()=>{t(),localStorage.setItem(Zg,JSON.stringify(e.snapshot)),r(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),n.jsx("button",{onClick:()=>{var s;t(),r(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function rv(){return n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const sv=u.createContext({});function xm(e){const t=u.useRef(null);return t.current===null&&(t.current=e()),t.current}const av=typeof window<"u",iv=av?u.useLayoutEffect:u.useEffect,gm=u.createContext(null);function ov(e){return typeof e=="object"&&e!==null}function lv(e){return ov(e)&&"offsetHeight"in e}const cv=u.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class dv extends u.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=r.offsetParent,a=lv(s)&&s.offsetWidth||0,i=this.props.sizeRef.current;i.height=r.offsetHeight||0,i.width=r.offsetWidth||0,i.top=r.offsetTop,i.left=r.offsetLeft,i.right=a-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function uv({children:e,isPresent:t,anchorX:r,root:s}){const a=u.useId(),i=u.useRef(null),o=u.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=u.useContext(cv);return u.useInsertionEffect(()=>{const{width:d,height:c,top:f,left:x,right:m}=o.current;if(t||!i.current||!d||!c)return;const y=r==="left"?`left: ${x}`:`right: ${m}`;i.current.dataset.motionPopId=a;const p=document.createElement("style");l&&(p.nonce=l);const j=s??document.head;return j.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${c}px !important;
            ${y}px !important;
            top: ${f}px !important;
          }
        `),()=>{j.contains(p)&&j.removeChild(p)}},[t]),n.jsx(dv,{isPresent:t,childRef:i,sizeRef:o,children:u.cloneElement(e,{ref:i})})}const fv=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:i,mode:o,anchorX:l,root:d})=>{const c=xm(mv),f=u.useId();let x=!0,m=u.useMemo(()=>(x=!1,{id:f,initial:t,isPresent:r,custom:a,onExitComplete:y=>{c.set(y,!0);for(const p of c.values())if(!p)return;s&&s()},register:y=>(c.set(y,!1),()=>c.delete(y))}),[r,c,s]);return i&&x&&(m={...m}),u.useMemo(()=>{c.forEach((y,p)=>c.set(p,!1))},[r]),u.useEffect(()=>{!r&&!c.size&&s&&s()},[r]),o==="popLayout"&&(e=n.jsx(uv,{isPresent:r,anchorX:l,root:d,children:e})),n.jsx(gm.Provider,{value:m,children:e})};function mv(){return new Map}function hv(e=!0){const t=u.useContext(gm);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:a}=t,i=u.useId();u.useEffect(()=>{if(e)return a(i)},[e]);const o=u.useCallback(()=>e&&s&&s(i),[i,s,e]);return!r&&s?[!1,o]:[!0]}const ua=e=>e.key||"";function Pd(e){const t=[];return u.Children.forEach(e,r=>{u.isValidElement(r)&&t.push(r)}),t}const Xi=({children:e,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:i="sync",propagate:o=!1,anchorX:l="left",root:d})=>{const[c,f]=hv(o),x=u.useMemo(()=>Pd(e),[e]),m=o&&!c?[]:x.map(ua),y=u.useRef(!0),p=u.useRef(x),j=xm(()=>new Map),[k,v]=u.useState(x),[h,g]=u.useState(x);iv(()=>{y.current=!1,p.current=x;for(let A=0;A<h.length;A++){const S=ua(h[A]);m.includes(S)?j.delete(S):j.get(S)!==!0&&j.set(S,!1)}},[h,m.length,m.join("-")]);const C=[];if(x!==k){let A=[...x];for(let S=0;S<h.length;S++){const b=h[S],w=ua(b);m.includes(w)||(A.splice(S,0,b),C.push(b))}return i==="wait"&&C.length&&(A=C),g(Pd(A)),v(x),null}const{forceRender:E}=u.useContext(sv);return n.jsx(n.Fragment,{children:h.map(A=>{const S=ua(A),b=o&&!c?!1:x===h||m.includes(S),w=()=>{if(j.has(S))j.set(S,!0);else return;let N=!0;j.forEach(T=>{T||(N=!1)}),N&&(E==null||E(),g(p.current),o&&(f==null||f()),s&&s())};return n.jsx(fv,{isPresent:b,initial:!y.current||r?void 0:!1,custom:t,presenceAffectsLayout:a,mode:i,root:d,onExitComplete:b?void 0:w,anchorX:l,children:A},S)})})},pv=()=>{const e=at(),[t,r]=u.useState(null);u.useEffect(()=>{if(typeof window<"u"){const H=sessionStorage.getItem("navigationSource");H&&r(H)}},[]);const s=H=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=H)},a=()=>{e(-1)},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},{player:l,addCoins:d}=xn(),[c,f]=u.useState(4),[x,m]=u.useState((l==null?void 0:l.coins)||0),[y,p]=u.useState(4),[j,k]=u.useState(!1),[v,h]=u.useState(!1),[g,C]=u.useState(0),[E,A]=u.useState(0),[S,b]=u.useState("cycle"),[w,N]=u.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[T,D]=u.useState([0,1,2,3]),[q,Z]=u.useState(!1),[Y,B]=u.useState(!1),[U,R]=u.useState(null),[_,z]=u.useState(null),[P,L]=u.useState(!1),[M,X]=u.useState(null),[O,K]=u.useState(!1),ce=u.useRef(null),I=u.useRef(null),F=u.useRef(null);u.useEffect(()=>{ce.current=new Audio("/sounds/reward.mp3"),I.current=new Audio("/sounds/reward_progress.mp3"),[ce,I].forEach(H=>{var $;($=H.current)==null||$.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const W=H=>{try{H.current&&(H.current.currentTime=0,H.current.play().catch($=>console.log("Audio play failed:",$)))}catch($){console.log("Sound play error:",$)}},G=(H,$)=>{if(H>c){z($),B(!0);return}H===c&&J(H,$)},ee=H=>{var ne;const $=(ne=F.current)==null?void 0:ne.querySelector(`[data-index="${H}"]`);if($){const me=$.getBoundingClientRect(),je=window.pageYOffset||document.documentElement.scrollTop,pe=me.top+je-window.innerHeight/2+50;window.scrollTo({top:pe,behavior:"smooth"})}},J=(H,$)=>{if(!T.includes(H)){if($.cost>0&&x<$.cost){z($),B(!0);return}$.cost>0&&(m(ne=>ne-$.cost),d(-$.cost)),W(ce),Z(!0),z($),D(ne=>[...ne,H]),setTimeout(()=>{Z(!1),$.type==="coins"?(C($.value),k(!0),setTimeout(()=>{m(ne=>ne+$.value),d($.value),setTimeout(()=>{k(!1),C(0)},500)},300)):$.type==="life"?(A($.value),h(!0),setTimeout(()=>{p(ne=>ne+$.value),setTimeout(()=>{h(!1),A(0)},500)},300)):(X({icon:$.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{X(null),K(!0),Q($),$.type==="vehicle"&&b($.value),setTimeout(()=>{K(!1)},500)},800)),setTimeout(()=>{if(c<i.length-1){const ne=c+1;ee(ne),setTimeout(()=>{L(!0),W(I),f(ne),setTimeout(()=>{L(!1)},500)},300)}},1200)},1500)}},Q=H=>{N($=>$.find(me=>me.icon===H.icon)?$.map(me=>me.icon===H.icon?{...me,count:me.count+1}:me):[...$,{type:H.type,icon:H.icon,name:H.label,count:1}])},te=H=>30+H*100,se=()=>30+c*100;return n.jsxs("div",{className:"rewards-page",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"non-sticky-header",children:n.jsx("button",{className:"back-button",onClick:a,children:"← Back"})}),n.jsxs("div",{className:"sticky-section",children:[n.jsxs("div",{className:"header-wrapper",children:[n.jsxs("div",{className:"title-row",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"title",children:"Rewards"}),n.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),n.jsx("button",{className:"play-quiz-btn",onClick:()=>s("/play"),children:"Play Quiz"})]}),n.jsx("div",{className:"balance-row",children:n.jsx("div",{className:"balance-item",children:n.jsxs("div",{children:[n.jsx("div",{className:"balance-label",children:"Balance"}),n.jsxs("div",{className:`balance-value ${j?"animating":""}`,children:[x.toLocaleString()," 🪙",j&&n.jsxs("span",{className:"value-change",children:["+",g]})]})]})})})]}),n.jsx("div",{className:"stats-cards-container",children:n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"❤️"}),n.jsxs("div",{className:`info-value ${v?"animating":""}`,children:[y,v&&n.jsxs("span",{className:"value-change",children:["+",E]})]}),n.jsx("div",{className:"info-label",children:"Lives"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"⭐"}),n.jsx("div",{className:"info-value",children:"5"}),n.jsx("div",{className:"info-label",children:"Level"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:o[S].icon}),n.jsx("div",{className:"info-value",children:o[S].name}),n.jsx("div",{className:"info-label",children:"Vehicle"})]}),n.jsxs("div",{className:`cards-section ${O?"animating":""}`,children:[n.jsx("div",{className:"cards-label",children:"Your Cards"}),n.jsx("div",{className:"card-grid",children:w.map((H,$)=>n.jsxs("div",{className:"card-item",onClick:()=>R(H),children:[n.jsxs("div",{className:"large-card",children:[n.jsx("div",{className:"large-card-icon",children:H.icon}),n.jsx("div",{className:"large-card-name",children:H.name})]}),H.count>1&&n.jsx("div",{className:"card-count-badge",children:H.count})]},$))})]})]})})]}),n.jsx("div",{className:"scrollable-journey",children:n.jsx("div",{className:"journey-container",ref:F,children:n.jsxs("div",{className:"journey-track",children:[n.jsx("div",{className:"curvy-road",children:n.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),n.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),n.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),n.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-c/(i.length-1)*1500})]})}),n.jsxs("div",{className:"avatar-tracker",style:{top:`${se()}px`},children:[n.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:H=>{H.target.style.display="none"}}),n.jsx("div",{className:"tracker-vehicle",children:o[S].icon})]}),n.jsx("div",{className:"rewards-list",children:i.map((H,$)=>{const ne=$%2===0,me=$>c,je=T.includes($),pe=$===c;return n.jsx("div",{className:"reward-row","data-index":$,style:{top:`${te($)}px`},children:n.jsxs("div",{className:`reward-item ${ne?"left":"right"}`,children:[n.jsxs("div",{className:`checkpoint ${pe?"current":je?"claimed":me?"locked":""}`,onClick:()=>G($,H),children:[n.jsx("div",{className:"checkpoint-icon",children:H.icon}),n.jsx("div",{className:"checkpoint-value",children:H.label.split(" ")[0]}),H.milestone&&n.jsx("div",{className:"milestone-badge",children:"BONUS"}),me&&n.jsx("div",{className:"lock-icon",children:"🔒"})]}),n.jsxs("div",{className:"reward-info",children:[n.jsx("div",{className:"reward-name",children:H.label}),n.jsxs("div",{className:"step-label",children:["Step ",$+1]})]})]})},H.id)})})]})})}),M&&n.jsx("div",{className:"flying-card",style:{left:`${M.startX}px`,top:`${M.startY}px`,"--startX":`${M.startX}px`},children:M.icon}),n.jsx(Xi,{children:U&&n.jsx("div",{className:"claim-overlay",onClick:()=>R(null),children:n.jsxs("div",{className:"modal",onClick:H=>H.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:U.icon}),n.jsx("div",{className:"card-detail-name",children:U.name}),n.jsxs("div",{className:"card-detail-desc",children:["You have ",U.count," of these cards"]}),n.jsx("div",{className:"modal-buttons",children:n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>R(null),children:"Close"})})]})})}),n.jsx(Xi,{children:q&&_&&n.jsx("div",{className:"claim-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("div",{className:"modal-title",children:"WELL DONE!"}),n.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),n.jsx("div",{className:"modal-icon",children:_.icon}),n.jsxs("div",{className:"modal-value",children:["+",_.value," ",_.type==="coins"?"Coins":_.type==="life"?"Lives":_.label]})]})})}),n.jsx(Xi,{children:Y&&_&&n.jsx("div",{className:"claim-overlay",onClick:()=>B(!1),children:n.jsxs("div",{className:"modal",onClick:H=>H.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:"🪙"}),n.jsx("div",{className:"modal-title",children:"Need More Coins"}),n.jsx("div",{className:"modal-subtitle",children:_.cost>0?`You need ${_.cost-x} more coins`:"Complete previous rewards first"}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>s("/play"),children:"Play Quiz"}),n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>B(!1),children:"Cancel"})]})]})})})]})},fa=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function xv(){const[e,t]=u.useState(null),r=fa.filter(a=>a.unlocked).length,s=Math.round(r/fa.length*100);return n.jsxs("div",{className:"badges-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Badge Collection"}),n.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),n.jsxs("div",{className:"progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Collection Progress"}),n.jsxs("span",{className:"progress-value",children:[r,"/",fa.length]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),n.jsx("div",{className:"badges-grid",children:fa.map(a=>n.jsxs("div",{className:`badge-card ${a.unlocked?"unlocked":""}`,style:{"--badge-color":a.color},onClick:()=>t(a),children:[n.jsx("div",{className:"badge-glow"}),n.jsx("div",{className:"badge-emoji",children:a.emoji}),n.jsx("div",{className:"badge-name",children:a.name}),!a.unlocked&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"badge-progress",children:n.jsx("div",{className:"badge-progress-fill",style:{width:`${a.progress}%`}})}),n.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},a.id))}),n.jsxs("div",{className:"tips-card",children:[n.jsxs("div",{className:"tips-title",children:[n.jsx("span",{children:"💡"}),n.jsx("span",{children:"Pro Tip"})]}),n.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&n.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:n.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),n.jsx("h3",{className:"modal-title",children:e.name}),n.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),n.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&n.jsxs("div",{className:"modal-progress-section",children:[n.jsx("div",{className:"modal-progress-label",children:"Progress"}),n.jsx("div",{className:"modal-progress-bar",children:n.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),n.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),n.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const gv=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function vv(){const{player:e,addCoins:t}=xn(),[r,s]=u.useState(gv),[a,i]=u.useState(null),[o,l]=u.useState((e==null?void 0:e.coins)||0),[d,c]=u.useState(!1),[f,x]=u.useState([]),m=r.length,y=r.filter(k=>k.current>=k.target).length,p=Math.round(y/m*100);u.useEffect(()=>{const k=setInterval(()=>{x(v=>{const h={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...v.slice(-4),h]})},3e3);return()=>clearInterval(k)},[]);const j=(k,v)=>{i(k),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{s(h=>h.map(g=>g.id===k?{...g,claimed:!0}:g)),l(h=>h+v),i(null),c(!0),setTimeout(()=>c(!1),2e3)},600)};return n.jsxs("div",{className:"achievements-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",o.toLocaleString()]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),n.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),n.jsxs("div",{className:"progress-overview",children:[n.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),n.jsxs("div",{className:"overview-header",children:[n.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),n.jsxs("div",{className:"overview-stats",children:[n.jsx("span",{className:"trophy-icon",children:"🏆"}),n.jsxs("span",{className:"overview-value",children:[y,"/",m]})]})]}),n.jsx("div",{className:"progress-bar-main",children:n.jsx("div",{className:"progress-fill-main",style:{width:`${p}%`}})})]}),n.jsx("div",{className:"achievements-list",children:r.map(k=>{const v=Math.min(100,Math.round(k.current/k.target*100)),h=v===100,g=k.color+"CC";return n.jsxs("div",{className:`achievement-card ${h?"completed":""}`,style:{"--card-color":k.color,"--card-color-dark":g},children:[n.jsx("div",{className:"card-glow"}),h&&k.claimed&&n.jsx("div",{className:"completed-badge",children:"✓"}),n.jsxs("div",{className:"card-content",children:[n.jsx("div",{className:"achievement-icon",children:k.icon}),n.jsxs("div",{className:"achievement-details",children:[n.jsx("div",{className:"achievement-title",children:k.title}),n.jsx("div",{className:"achievement-subtitle",children:k.subtitle}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${v}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{children:[k.current,"/",k.target]}),n.jsxs("span",{className:"reward-badge",children:["🪙 ",k.reward]})]})]})]}),n.jsx("button",{onClick:()=>j(k.id,k.reward),disabled:!h||k.claimed,className:`claim-button ${k.claimed?"claimed":h?"can-claim":"in-progress"} ${a===k.id?"claiming":""}`,children:k.claimed?"✓":h?"CLAIM!":`${v}%`})]})]},k.id)})}),d&&n.jsx("div",{className:"celebration",children:"🎉"})]})}function yv(){const{player:e,addCoins:t,updateDailyStreak:r}=xn(),s=(e==null?void 0:e.currentStreak)||0,a=(e==null?void 0:e.bestStreak)||0,i=(e==null?void 0:e.totalDays)||0,o=(e==null?void 0:e.coins)||0,l=at(),d=new Date,c=d.getDay(),f=()=>{const P=new Date(d);return P.setDate(d.getDate()-d.getDay()),P.toISOString().split("T")[0]},[x,m]=u.useState(null),[y,p]=u.useState(!1),[j,k]=u.useState(null),[v,h]=u.useState(null),[g,C]=u.useState(!1),E=u.useRef(null),A=u.useRef(null),[S]=At("/sounds/coin.mp3",{volume:.75}),[b]=At("/sounds/correct.mp3",{volume:.6}),[w,N]=u.useState(()=>{const P=localStorage.getItem("streaks_claimed")||"[]",L=JSON.parse(P),M=f(),X=L.filter(O=>O!==`week_${M}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(X)),X});u.useEffect(()=>{const P=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const M=document.querySelector("main");M&&(M.scrollTop=0)};P(),requestAnimationFrame(P);const L=setTimeout(P,100);return()=>clearTimeout(L)},[]),u.useEffect(()=>{C(!0),setTimeout(()=>C(!1),3e3)},[]);const T=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],D=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],q=P=>{const L=w.includes(`week_${f()}_day_${P}`);if(P===0)return{isCompleted:!0,isClaimed:L,canClaim:!L,isLocked:!1};const M=s>=P,X=M&&!L,O=s<P;return{isCompleted:M,isClaimed:L,canClaim:X,isLocked:O}},Z=(P,L,M)=>{const X=q(L);if(X.isLocked){h({day:L,currentStreak:s}),setTimeout(()=>h(null),2e3);return}X.isClaimed||X.canClaim&&(m({...P,day:L}),p(!1),setTimeout(()=>{p(!0),b(),setTimeout(()=>{if(P.type==="coins"){const ce=parseInt(P.reward);if(A.current&&E.current){const I=A.current.getBoundingClientRect();S(),k({startRect:I,count:10,amount:ce})}}const O=`week_${f()}_day_${L}`,K=[...w,O];N(K),localStorage.setItem("streaks_claimed",JSON.stringify(K))},500),setTimeout(()=>{m(null),p(!1)},2500)},500))},Y=(P,L)=>{const M=L+1,X=T[L].dayIndex===c;return s>=M?X?"today-completed":"completed":X?"today-pending":M<=s+1?"pending":"future"},B=[{days:3,emoji:"⚡",label:"Starter",achieved:s>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:s>=7},{days:30,emoji:"💎",label:"Champion",achieved:s>=30},{days:100,emoji:"👑",label:"Legend",achieved:s>=100}],U=B.find(P=>P.days>s)||B[B.length-1],R=Math.min(100,s/U.days*100),_=()=>{window.location.href="/play"},z=()=>{l(-1)};return n.jsxs("div",{className:"streaks-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),j&&n.jsx(Vl,{startRect:j.startRect,targetRef:E,count:j.count,onDone:()=>{t(j.amount),k(null)}}),n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-top",children:[n.jsx("button",{className:"back-button",onClick:z,children:"← Back"}),n.jsxs("div",{className:"coin-pill",ref:E,id:"coin-pill",children:[n.jsx("span",{className:"coin-icon",children:"🪙"}),n.jsx("span",{className:"coin-amount",children:o})]})]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"STREAKS"}),n.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),n.jsxs("div",{className:"streak-hero",children:[n.jsx("div",{className:"fire-animation",children:"🔥"}),n.jsx("div",{className:"streak-number",children:s}),n.jsx("div",{className:"streak-label",children:"DAY STREAK"}),n.jsxs("div",{className:"stats-row",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:a}),n.jsx("div",{className:"stat-label",children:"Best Streak"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:i}),n.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),n.jsxs("div",{className:"weekly-progress-card",children:[n.jsxs("div",{className:"weekly-header",children:[n.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),n.jsxs("div",{className:"weekly-counter",children:[n.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),n.jsxs("span",{className:"weekly-counter-text",children:[Math.min(s,7),"/7"]})]})]}),n.jsx("div",{className:"weekly-days",children:T.map((P,L)=>{const M=Y(P.dayIndex,L),X=P.dayIndex===c;return n.jsxs("div",{className:"day-item",children:[n.jsx("div",{className:`day-circle ${M}`,children:M==="completed"||M==="today-completed"?"":P.short}),n.jsx("div",{className:`day-label ${X?"today":""}`,children:P.label})]},L)})}),n.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),n.jsx("div",{className:"rewards-grid",children:D.map((P,L)=>{const M=q(P.day);return n.jsxs("div",{className:`reward-item ${M.isLocked?"locked":M.canClaim?"can-claim":M.isClaimed?"completed":""}`,onClick:X=>Z(P,P.day),children:[n.jsxs("div",{className:"reward-day",children:["Day ",P.day]}),n.jsx("div",{className:"reward-icon",children:P.icon}),n.jsx("div",{className:"reward-text",children:P.label})]},L)})})]}),n.jsxs("div",{className:"milestone-section",children:[n.jsx("div",{className:"milestone-header",children:"Next Milestone"}),n.jsxs("div",{className:"milestone-progress",children:[n.jsxs("div",{className:"milestone-info",children:[n.jsxs("div",{className:"milestone-current",children:[n.jsx("span",{className:"milestone-emoji",children:U.emoji}),n.jsx("span",{className:"milestone-text",children:U.label})]}),n.jsxs("span",{className:"milestone-target",children:[s,"/",U.days," days"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${R}%`}})})]})]}),n.jsx("div",{className:"motivational-text",children:s===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${s} strong! Keep going to unlock more rewards!`}),n.jsxs("button",{className:"play-button",onClick:_,children:[n.jsx("span",{children:"Continue Streak"}),n.jsx("span",{children:"→"})]}),v&&n.jsxs("div",{className:"locked-message",children:[n.jsx("span",{className:"locked-message-icon",children:"🔒"}),n.jsx("span",{className:"locked-message-text",children:v.day===1&&v.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${v.day} streak to unlock this reward!`})]}),x&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"modal-overlay"}),n.jsx("div",{className:"reward-modal",ref:A,children:n.jsxs("div",{className:"gift-box",children:[n.jsxs("div",{className:"gift-box-body",children:[n.jsx("div",{className:"gift-box-ribbon"}),n.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),n.jsx("div",{className:`gift-box-lid ${y?"opening":""}`,children:n.jsx("div",{className:"gift-box-bow",children:"🎀"})}),n.jsxs("div",{className:`gift-content ${y?"show":""}`,children:[n.jsx("div",{className:"gift-content-icon",children:x.icon}),n.jsxs("div",{className:"gift-content-title",children:["Day ",x.day]}),n.jsx("div",{className:"gift-content-desc",children:x.label})]})]})})]}),g&&n.jsx("div",{className:"celebration",children:"🎉"})]})}const bv=[{id:1,title:"Play 3 quizzes today",progress:2,target:3,reward:60,claimed:!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy"},{id:2,title:"Score 8+ twice",progress:1,target:2,reward:80,claimed:!1,icon:"🎯",color:"#4ECDC4",difficulty:"Medium"},{id:3,title:"Practice 15 questions",progress:15,target:15,reward:100,claimed:!0,icon:"📚",color:"#FFD93D",difficulty:"Easy"},{id:4,title:"Win 5 in a row",progress:3,target:5,reward:150,claimed:!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard"},{id:5,title:"Complete a speed run",progress:0,target:1,reward:120,claimed:!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium"}];function wv(){const{player:e,addCoins:t}=xn(),[r,s]=u.useState(bv),[a,i]=u.useState((e==null?void 0:e.coins)||0),[o,l]=u.useState(null),[d,c]=u.useState(0);u.useEffect(()=>{const y=r.filter(p=>p.progress>=p.target).length;c(Math.round(y/r.length*100))},[r]);const f=(y,p)=>{navigator.vibrate&&navigator.vibrate([20,10,20]),l(y),setTimeout(()=>{s(j=>j.map(k=>k.id===y?{...k,claimed:!0}:k)),i(j=>j+p),t(p),l(null)},600)},x=y=>{switch(y){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},m=()=>{const y=new Date,p=new Date(y);p.setDate(p.getDate()+1),p.setHours(5,0,0,0);const j=p-y,k=Math.floor(j/(1e3*60*60)),v=Math.floor(j%(1e3*60*60)/(1e3*60));return`${k}h ${v}m`};return n.jsxs("div",{className:"quests-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"animated-bg",children:[n.jsx("div",{className:"floating-icon",children:"🎮"}),n.jsx("div",{className:"floating-icon",children:"🎯"}),n.jsx("div",{className:"floating-icon",children:"🏆"}),n.jsx("div",{className:"floating-icon",children:"⭐"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",a]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Daily Quests"}),n.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),n.jsxs("div",{className:"daily-progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Today's Progress"}),n.jsxs("span",{className:"progress-value",children:[d,"%"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${d}%`}})})]}),n.jsx("div",{className:"quests-list",children:r.map(y=>{const p=Math.min(100,Math.round(y.progress/y.target*100)),j=p===100,k=y.color+"CC";return n.jsxs("div",{className:`quest-card ${j?"completed":""}`,style:{"--quest-color":y.color,"--quest-color-dark":k},children:[n.jsx("div",{className:"quest-accent"}),j&&y.claimed&&n.jsx("div",{className:"completed-checkmark",children:"✓"}),n.jsxs("div",{className:"quest-content",children:[n.jsx("div",{className:`quest-icon-container ${o===y.id?"animating":""}`,children:y.icon}),n.jsxs("div",{className:"quest-details",children:[n.jsxs("div",{className:"quest-header",children:[n.jsx("span",{className:"quest-title",children:y.title}),n.jsx("span",{className:"difficulty-badge",style:{background:`${x(y.difficulty)}20`,color:x(y.difficulty)},children:y.difficulty})]}),n.jsxs("div",{className:"progress-info",children:[n.jsx("div",{className:"mini-progress-bar",children:n.jsx("div",{className:"mini-progress-fill",style:{width:`${p}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{className:"progress-numbers",children:[y.progress,"/",y.target]}),n.jsxs("span",{className:"reward-display",children:["🪙 ",y.reward]})]})]})]}),n.jsx("button",{onClick:()=>j&&!y.claimed&&f(y.id,y.reward),disabled:y.claimed,className:`action-button ${y.claimed?"claimed":j?"can-claim":"in-progress"}`,style:!j&&!y.claimed?{"--quest-color":y.color,"--quest-color-dark":k}:{},children:y.claimed?"✓":j?"Claim":"Do it"})]})]},y.id)})}),n.jsxs("div",{className:"timer-card",children:[n.jsx("div",{className:"timer-icon",children:"⏰"}),n.jsx("div",{className:"timer-label",children:"New Quests In"}),n.jsx("div",{className:"timer-value",children:m()})]}),o&&n.jsx("div",{className:"reward-animation",children:"🪙"})]})}function jv({title:e,subtitle:t,children:r}){const s=at();return n.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&n.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),n.jsx("div",{className:"w-[68px]"})]}),r]})}function Nv(){const e=at(),[t,r]=u.useState(!0),[s,a]=u.useState(!0),[i,o]=u.useState(!0);return n.jsxs(jv,{title:"Settings",subtitle:"Make it yours",children:[n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[n.jsx(ts,{label:"Sound",right:n.jsx(Ki,{on:t,set:r})}),n.jsx(ts,{label:"Haptics",right:n.jsx(Ki,{on:s,set:a})}),n.jsx(ts,{label:"Notifications",right:n.jsx(Ki,{on:i,set:o})}),n.jsx(ts,{label:"Edit Profile",right:n.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),n.jsx(ts,{label:"Privacy Policy",right:n.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),n.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function ts({label:e,right:t,onClick:r}){return n.jsxs("button",{type:"button",onClick:r,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[n.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function Ki({on:e,set:t}){return n.jsx("span",{onClick:r=>{r.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:n.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}const kv={name:"Player",avatar:"wizard",level:1,totalXP:0,coins:0,energy:ct.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function Sv(){const[e,t]=u.useState(()=>{const c=localStorage.getItem(ct.STORAGE_KEYS.PLAYER);return c?JSON.parse(c):kv});u.useEffect(()=>{localStorage.setItem(ct.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),u.useEffect(()=>{if(e.energy<ct.MAX_ENERGY&&e.energyRegenAt){const c=setInterval(()=>{const f=Date.now();f>=e.energyRegenAt&&t(x=>({...x,energy:Math.min(x.energy+1,ct.MAX_ENERGY),energyRegenAt:x.energy+1<ct.MAX_ENERGY?f+ct.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(c)}},[e.energy,e.energyRegenAt]);const r=u.useCallback(c=>{t(f=>{const x=f.totalXP+c,m=pd(f.totalXP),y=pd(x);let p=[...f.unlockedAvatars];return y>m&&ct.AVATARS.forEach(j=>{j.unlockLevel===y&&!p.includes(j.id)&&p.push(j.id)}),{...f,totalXP:x,level:y,unlockedAvatars:p}})},[]),s=u.useCallback(c=>{const x=new Error().stack;console.log("[COINS DEBUG] ================"),console.log("[COINS DEBUG] Amount:",c),console.log("[COINS DEBUG] Called from:",x.split(`
`)[2]),console.log("[COINS DEBUG] Full trace:",x),t(m=>(console.log("[COINS DEBUG] Current:",m.coins,"→ New:",m.coins+c),{...m,coins:m.coins+c}))},[]),a=u.useCallback((c=1)=>e.energy<c?!1:(t(f=>({...f,energy:f.energy-c,energyRegenAt:f.energyRegenAt||Date.now()+ct.ENERGY_REGEN_TIME})),!0),[e.energy]),i=u.useCallback(c=>{t(f=>{const x=c?f.comboStreak+1:0;return{...f,comboStreak:x,bestCombo:Math.max(f.bestCombo,x)}})},[]),o=u.useCallback(()=>{t(c=>({...c,comboStreak:0}))},[]),l=u.useCallback(c=>{e.unlockedAvatars.includes(c)&&t(f=>({...f,avatar:c}))},[e.unlockedAvatars]),d=u.useCallback(()=>{const c=new Date().toDateString();t(f=>{if(f.lastPlayedDate===c)return f;const x=new Date;x.setDate(x.getDate()-1);const m=x.toDateString();let y=f.currentStreak;return f.lastPlayedDate===m?y=f.currentStreak+1:(f.lastPlayedDate,y=1),{...f,currentStreak:y,bestStreak:Math.max(f.bestStreak,y),totalDays:f.totalDays+1,lastPlayedDate:c}})},[]);return{player:e,addXP:r,addCoins:s,useEnergy:a,updateCombo:i,resetCombo:o,changeAvatar:l,updateDailyStreak:d,levelProgress:Tx(e.totalXP)}}const vm=u.createContext(null),xn=()=>{const e=u.useContext(vm);if(!e)throw new Error("useGame must be used within GameProvider");return e};function Cv({children:e}){const t=Sv();return n.jsx(vm.Provider,{value:t,children:e})}function Ev(){return n.jsx(Cv,{children:n.jsx(qp,{children:n.jsxs(Ze,{element:n.jsx(kx,{}),children:[n.jsx(Ze,{path:"/",element:n.jsx(vd,{})}),n.jsx(Ze,{path:"/play",element:n.jsx(yg,{})}),n.jsx(Ze,{path:"/play/party",element:n.jsx(qg,{})}),n.jsx(Ze,{path:"/profile",element:n.jsx(Wg,{})}),n.jsx(Ze,{path:"/profile/leaderboard",element:n.jsx(Gg,{})}),n.jsx(Ze,{path:"/profile/history",element:n.jsx(ev,{})}),n.jsx(Ze,{path:"/profile/rewards",element:n.jsx(pv,{})}),n.jsx(Ze,{path:"/profile/badges",element:n.jsx(xv,{})}),n.jsx(Ze,{path:"/profile/achievements",element:n.jsx(vv,{})}),n.jsx(Ze,{path:"/profile/streaks",element:n.jsx(yv,{})}),n.jsx(Ze,{path:"/profile/quests",element:n.jsx(wv,{})}),n.jsx(Ze,{path:"/profile/settings",element:n.jsx(Nv,{})}),n.jsx(Ze,{path:"/swipe",element:n.jsx(Qg,{})}),n.jsx(Ze,{path:"/leaders",element:n.jsx($p,{to:"/profile/leaderboard",replace:!0})}),n.jsx(Ze,{path:"/quiz/:category",element:n.jsx(Mg,{})}),n.jsx(Ze,{path:"*",element:n.jsx(vd,{})})]})})})}Ji.createRoot(document.getElementById("root")).render(n.jsx(ft.StrictMode,{children:n.jsx(mx,{children:n.jsx(Ev,{})})}));export{bm as c,Ad as g};
