(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();var _m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ud={exports:{}},oi={},Qd={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=Symbol.for("react.element"),Lm=Symbol.for("react.portal"),Am=Symbol.for("react.fragment"),Im=Symbol.for("react.strict_mode"),Dm=Symbol.for("react.profiler"),Mm=Symbol.for("react.provider"),zm=Symbol.for("react.context"),Fm=Symbol.for("react.forward_ref"),Om=Symbol.for("react.suspense"),$m=Symbol.for("react.memo"),Bm=Symbol.for("react.lazy"),cc=Symbol.iterator;function qm(e){return e===null||typeof e!="object"?null:(e=cc&&e[cc]||e["@@iterator"],typeof e=="function"?e:null)}var Yd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hd=Object.assign,Wd={};function Ur(e,t,r){this.props=e,this.context=t,this.refs=Wd,this.updater=r||Yd}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gd(){}Gd.prototype=Ur.prototype;function rl(e,t,r){this.props=e,this.context=t,this.refs=Wd,this.updater=r||Yd}var sl=rl.prototype=new Gd;sl.constructor=rl;Hd(sl,Ur.prototype);sl.isPureReactComponent=!0;var dc=Array.isArray,Vd=Object.prototype.hasOwnProperty,al={current:null},Xd={key:!0,ref:!0,__self:!0,__source:!0};function Kd(e,t,r){var s,a={},i=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Vd.call(t,s)&&!Xd.hasOwnProperty(s)&&(a[s]=t[s]);var l=arguments.length-2;if(l===1)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:Bs,type:e,key:i,ref:o,props:a,_owner:al.current}}function Um(e,t){return{$$typeof:Bs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function il(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bs}function Qm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var uc=/\/+/g;function Ci(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qm(""+e.key):t.toString(36)}function ya(e,t,r,s,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Bs:case Lm:o=!0}}if(o)return o=e,a=a(o),e=s===""?"."+Ci(o,0):s,dc(a)?(r="",e!=null&&(r=e.replace(uc,"$&/")+"/"),ya(a,t,r,"",function(u){return u})):a!=null&&(il(a)&&(a=Um(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(uc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,s=s===""?".":s+":",dc(e))for(var l=0;l<e.length;l++){i=e[l];var c=s+Ci(i,l);o+=ya(i,t,r,c,a)}else if(c=qm(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=s+Ci(i,l++),o+=ya(i,t,r,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Gs(e,t,r){if(e==null)return e;var s=[],a=0;return ya(e,s,"","",function(i){return t.call(r,i,a++)}),s}function Ym(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},ba={transition:null},Hm={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:ba,ReactCurrentOwner:al};function Jd(){throw Error("act(...) is not supported in production builds of React.")}ye.Children={map:Gs,forEach:function(e,t,r){Gs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Gs(e,function(){t++}),t},toArray:function(e){return Gs(e,function(t){return t})||[]},only:function(e){if(!il(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ye.Component=Ur;ye.Fragment=Am;ye.Profiler=Dm;ye.PureComponent=rl;ye.StrictMode=Im;ye.Suspense=Om;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hm;ye.act=Jd;ye.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Hd({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=al.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Vd.call(t,c)&&!Xd.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:Bs,type:e.type,key:a,ref:i,props:s,_owner:o}};ye.createContext=function(e){return e={$$typeof:zm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mm,_context:e},e.Consumer=e};ye.createElement=Kd;ye.createFactory=function(e){var t=Kd.bind(null,e);return t.type=e,t};ye.createRef=function(){return{current:null}};ye.forwardRef=function(e){return{$$typeof:Fm,render:e}};ye.isValidElement=il;ye.lazy=function(e){return{$$typeof:Bm,_payload:{_status:-1,_result:e},_init:Ym}};ye.memo=function(e,t){return{$$typeof:$m,type:e,compare:t===void 0?null:t}};ye.startTransition=function(e){var t=ba.transition;ba.transition={};try{e()}finally{ba.transition=t}};ye.unstable_act=Jd;ye.useCallback=function(e,t){return vt.current.useCallback(e,t)};ye.useContext=function(e){return vt.current.useContext(e)};ye.useDebugValue=function(){};ye.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};ye.useEffect=function(e,t){return vt.current.useEffect(e,t)};ye.useId=function(){return vt.current.useId()};ye.useImperativeHandle=function(e,t,r){return vt.current.useImperativeHandle(e,t,r)};ye.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};ye.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};ye.useMemo=function(e,t){return vt.current.useMemo(e,t)};ye.useReducer=function(e,t,r){return vt.current.useReducer(e,t,r)};ye.useRef=function(e){return vt.current.useRef(e)};ye.useState=function(e){return vt.current.useState(e)};ye.useSyncExternalStore=function(e,t,r){return vt.current.useSyncExternalStore(e,t,r)};ye.useTransition=function(){return vt.current.useTransition()};ye.version="18.3.1";Qd.exports=ye;var d=Qd.exports;const pt=qd(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=d,Gm=Symbol.for("react.element"),Vm=Symbol.for("react.fragment"),Xm=Object.prototype.hasOwnProperty,Km=Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jm={key:!0,ref:!0,__self:!0,__source:!0};function Zd(e,t,r){var s,a={},i=null,o=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)Xm.call(t,s)&&!Jm.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:Gm,type:e,key:i,ref:o,props:a,_owner:Km.current}}oi.Fragment=Vm;oi.jsx=Zd;oi.jsxs=Zd;Ud.exports=oi;var n=Ud.exports,ao={},eu={exports:{}},_t={},tu={exports:{}},nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,_){var F=R.length;R.push(_);e:for(;0<F;){var L=F-1>>>1,I=R[L];if(0<a(I,_))R[L]=_,R[F]=I,F=L;else break e}}function r(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var _=R[0],F=R.pop();if(F!==_){R[0]=F;e:for(var L=0,I=R.length,A=I>>>1;L<A;){var X=2*(L+1)-1,ne=R[X],re=X+1,U=R[re];if(0>a(ne,F))re<I&&0>a(U,ne)?(R[L]=U,R[re]=F,L=re):(R[L]=ne,R[X]=F,L=X);else if(re<I&&0>a(U,F))R[L]=U,R[re]=F,L=re;else break e}}return _}function a(R,_){var F=R.sortIndex-_.sortIndex;return F!==0?F:R.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,p=null,m=3,b=!1,x=!1,N=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var _=r(u);_!==null;){if(_.callback===null)s(u);else if(_.startTime<=R)s(u),_.sortIndex=_.expirationTime,t(c,_);else break;_=r(u)}}function E(R){if(N=!1,y(R),!x)if(r(c)!==null)x=!0,Q(j);else{var _=r(u);_!==null&&$(E,_.startTime-R)}}function j(R,_){x=!1,N&&(N=!1,v(g),g=-1),b=!0;var F=m;try{for(y(_),p=r(c);p!==null&&(!(p.expirationTime>_)||R&&!P());){var L=p.callback;if(typeof L=="function"){p.callback=null,m=p.priorityLevel;var I=L(p.expirationTime<=_);_=e.unstable_now(),typeof I=="function"?p.callback=I:p===r(c)&&s(c),y(_)}else s(c);p=r(c)}if(p!==null)var A=!0;else{var X=r(u);X!==null&&$(E,X.startTime-_),A=!1}return A}finally{p=null,m=F,b=!1}}var T=!1,S=null,g=-1,w=5,k=-1;function P(){return!(e.unstable_now()-k<w)}function M(){if(S!==null){var R=e.unstable_now();k=R;var _=!0;try{_=S(!0,R)}finally{_?Y():(T=!1,S=null)}}else T=!1}var Y;if(typeof h=="function")Y=function(){h(M)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,H=ee.port2;ee.port1.onmessage=M,Y=function(){H.postMessage(null)}}else Y=function(){C(M,0)};function Q(R){S=R,T||(T=!0,Y())}function $(R,_){g=C(function(){R(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||b||(x=!0,Q(j))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(R){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var F=m;m=_;try{return R()}finally{m=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,_){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=m;m=R;try{return _()}finally{m=F}},e.unstable_scheduleCallback=function(R,_,F){var L=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?L+F:L):F=L,R){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=F+I,R={id:f++,callback:_,priorityLevel:R,startTime:F,expirationTime:I,sortIndex:-1},F>L?(R.sortIndex=F,t(u,R),r(c)===null&&R===r(u)&&(N?(v(g),g=-1):N=!0,$(E,F-L))):(R.sortIndex=I,t(c,R),x||b||(x=!0,Q(j))),R},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(R){var _=m;return function(){var F=m;m=_;try{return R.apply(this,arguments)}finally{m=F}}}})(nu);tu.exports=nu;var Zm=tu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0=d,Pt=Zm;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ru=new Set,Ns={};function fr(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(Ns[e]=t,e=0;e<t.length;e++)ru.add(t[e])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=Object.prototype.hasOwnProperty,t0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fc={},mc={};function n0(e){return io.call(mc,e)?!0:io.call(fc,e)?!1:t0.test(e)?mc[e]=!0:(fc[e]=!0,!1)}function r0(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function s0(e,t,r,s){if(t===null||typeof t>"u"||r0(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,r,s,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ct[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ct[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ct[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ct[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ct[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ct[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ct[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ct[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ct[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ol=/[\-:]([a-z])/g;function ll(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ol,ll);ct[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ol,ll);ct[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ol,ll);ct[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ct[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});ct.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ct[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function cl(e,t,r,s){var a=ct.hasOwnProperty(t)?ct[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(s0(t,r,a,s)&&(r=null),s||a===null?n0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,s=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var wn=e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),gr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),oo=Symbol.for("react.profiler"),su=Symbol.for("react.provider"),au=Symbol.for("react.context"),ul=Symbol.for("react.forward_ref"),lo=Symbol.for("react.suspense"),co=Symbol.for("react.suspense_list"),fl=Symbol.for("react.memo"),Rn=Symbol.for("react.lazy"),iu=Symbol.for("react.offscreen"),hc=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=hc&&e[hc]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,Ei;function cs(e){if(Ei===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ei=t&&t[1]||""}return`
`+Ei+e}var Ri=!1;function Ti(e,t){if(!e||Ri)return"";Ri=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=s.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Ri=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?cs(e):""}function a0(e){switch(e.tag){case 5:return cs(e.type);case 16:return cs("Lazy");case 13:return cs("Suspense");case 19:return cs("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function uo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case gr:return"Portal";case oo:return"Profiler";case dl:return"StrictMode";case lo:return"Suspense";case co:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case au:return(e.displayName||"Context")+".Consumer";case su:return(e._context.displayName||"Context")+".Provider";case ul:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fl:return t=e.displayName||null,t!==null?t:uo(e.type)||"Memo";case Rn:t=e._payload,e=e._init;try{return uo(e(t))}catch{}}return null}function i0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uo(t);case 8:return t===dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function o0(e){var t=ou(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){s=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){e._valueTracker||(e._valueTracker=o0(e))}function lu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=ou(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Da(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fo(e,t){var r=t.checked;return Ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function pc(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=Un(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cu(e,t){t=t.checked,t!=null&&cl(e,"checked",t,!1)}function mo(e,t){cu(e,t);var r=Un(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ho(e,t.type,r):t.hasOwnProperty("defaultValue")&&ho(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xc(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ho(e,t,r){(t!=="number"||Da(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ds=Array.isArray;function Tr(e,t,r,s){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&s&&(e[r].defaultSelected=!0)}else{for(r=""+Un(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function po(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gc(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(V(92));if(ds(r)){if(1<r.length)throw Error(V(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Un(r)}}function du(e,t){var r=Un(t.value),s=Un(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function vc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ks,fu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ks=Ks||document.createElement("div"),Ks.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ks.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ks(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l0=["Webkit","ms","Moz","O"];Object.keys(ms).forEach(function(e){l0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ms[t]=ms[e]})});function mu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ms.hasOwnProperty(e)&&ms[e]?(""+t).trim():t+"px"}function hu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,a=mu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,a):e[r]=a}}var c0=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function go(e,t){if(t){if(c0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function vo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=null;function ml(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bo=null,Pr=null,_r=null;function yc(e){if(e=Qs(e)){if(typeof bo!="function")throw Error(V(280));var t=e.stateNode;t&&(t=fi(t),bo(e.stateNode,e.type,t))}}function pu(e){Pr?_r?_r.push(e):_r=[e]:Pr=e}function xu(){if(Pr){var e=Pr,t=_r;if(_r=Pr=null,yc(e),t)for(e=0;e<t.length;e++)yc(t[e])}}function gu(e,t){return e(t)}function vu(){}var Pi=!1;function yu(e,t,r){if(Pi)return e(t,r);Pi=!0;try{return gu(e,t,r)}finally{Pi=!1,(Pr!==null||_r!==null)&&(vu(),xu())}}function Ss(e,t){var r=e.stateNode;if(r===null)return null;var s=fi(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(V(231,t,typeof r));return r}var wo=!1;if(xn)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){wo=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{wo=!1}function d0(e,t,r,s,a,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var hs=!1,Ma=null,za=!1,jo=null,u0={onError:function(e){hs=!0,Ma=e}};function f0(e,t,r,s,a,i,o,l,c){hs=!1,Ma=null,d0.apply(u0,arguments)}function m0(e,t,r,s,a,i,o,l,c){if(f0.apply(this,arguments),hs){if(hs){var u=Ma;hs=!1,Ma=null}else throw Error(V(198));za||(za=!0,jo=u)}}function mr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function bu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bc(e){if(mr(e)!==e)throw Error(V(188))}function h0(e){var t=e.alternate;if(!t){if(t=mr(e),t===null)throw Error(V(188));return t!==e?null:e}for(var r=e,s=t;;){var a=r.return;if(a===null)break;var i=a.alternate;if(i===null){if(s=a.return,s!==null){r=s;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===r)return bc(a),e;if(i===s)return bc(a),t;i=i.sibling}throw Error(V(188))}if(r.return!==s.return)r=a,s=i;else{for(var o=!1,l=a.child;l;){if(l===r){o=!0,r=a,s=i;break}if(l===s){o=!0,s=a,r=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===r){o=!0,r=i,s=a;break}if(l===s){o=!0,s=i,r=a;break}l=l.sibling}if(!o)throw Error(V(189))}}if(r.alternate!==s)throw Error(V(190))}if(r.tag!==3)throw Error(V(188));return r.stateNode.current===r?e:t}function wu(e){return e=h0(e),e!==null?ju(e):null}function ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ju(e);if(t!==null)return t;e=e.sibling}return null}var Nu=Pt.unstable_scheduleCallback,wc=Pt.unstable_cancelCallback,p0=Pt.unstable_shouldYield,x0=Pt.unstable_requestPaint,Xe=Pt.unstable_now,g0=Pt.unstable_getCurrentPriorityLevel,hl=Pt.unstable_ImmediatePriority,ku=Pt.unstable_UserBlockingPriority,Fa=Pt.unstable_NormalPriority,v0=Pt.unstable_LowPriority,Su=Pt.unstable_IdlePriority,li=null,an=null;function y0(e){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(li,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:j0,b0=Math.log,w0=Math.LN2;function j0(e){return e>>>=0,e===0?32:31-(b0(e)/w0|0)|0}var Js=64,Zs=4194304;function us(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oa(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,a=e.suspendedLanes,i=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~a;l!==0?s=us(l):(i&=o,i!==0&&(s=us(i)))}else o=r&~a,o!==0?s=us(o):i!==0&&(s=us(i));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(s&4&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-Vt(t),a=1<<r,s|=e[r],t&=~a;return s}function N0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k0(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Vt(i),l=1<<o,c=a[o];c===-1?(!(l&r)||l&s)&&(a[o]=N0(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function No(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cu(){var e=Js;return Js<<=1,!(Js&4194240)&&(Js=64),e}function _i(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function qs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=r}function S0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Vt(r),i=1<<a;t[a]=0,s[a]=-1,e[a]=-1,r&=~i}}function pl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Vt(r),a=1<<s;a&t|e[s]&t&&(e[s]|=t),r&=~a}}var Pe=0;function Eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ru,xl,Tu,Pu,_u,ko=!1,ea=[],Dn=null,Mn=null,zn=null,Cs=new Map,Es=new Map,_n=[],C0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jc(e,t){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Cs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(t.pointerId)}}function Kr(e,t,r,s,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Qs(t),t!==null&&xl(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function E0(e,t,r,s,a){switch(t){case"focusin":return Dn=Kr(Dn,e,t,r,s,a),!0;case"dragenter":return Mn=Kr(Mn,e,t,r,s,a),!0;case"mouseover":return zn=Kr(zn,e,t,r,s,a),!0;case"pointerover":var i=a.pointerId;return Cs.set(i,Kr(Cs.get(i)||null,e,t,r,s,a)),!0;case"gotpointercapture":return i=a.pointerId,Es.set(i,Kr(Es.get(i)||null,e,t,r,s,a)),!0}return!1}function Lu(e){var t=Zn(e.target);if(t!==null){var r=mr(t);if(r!==null){if(t=r.tag,t===13){if(t=bu(r),t!==null){e.blockedOn=t,_u(e.priority,function(){Tu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=So(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);yo=s,r.target.dispatchEvent(s),yo=null}else return t=Qs(r),t!==null&&xl(t),e.blockedOn=r,!1;t.shift()}return!0}function Nc(e,t,r){wa(e)&&r.delete(t)}function R0(){ko=!1,Dn!==null&&wa(Dn)&&(Dn=null),Mn!==null&&wa(Mn)&&(Mn=null),zn!==null&&wa(zn)&&(zn=null),Cs.forEach(Nc),Es.forEach(Nc)}function Jr(e,t){e.blockedOn===t&&(e.blockedOn=null,ko||(ko=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,R0)))}function Rs(e){function t(a){return Jr(a,e)}if(0<ea.length){Jr(ea[0],e);for(var r=1;r<ea.length;r++){var s=ea[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Dn!==null&&Jr(Dn,e),Mn!==null&&Jr(Mn,e),zn!==null&&Jr(zn,e),Cs.forEach(t),Es.forEach(t),r=0;r<_n.length;r++)s=_n[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<_n.length&&(r=_n[0],r.blockedOn===null);)Lu(r),r.blockedOn===null&&_n.shift()}var Lr=wn.ReactCurrentBatchConfig,$a=!0;function T0(e,t,r,s){var a=Pe,i=Lr.transition;Lr.transition=null;try{Pe=1,gl(e,t,r,s)}finally{Pe=a,Lr.transition=i}}function P0(e,t,r,s){var a=Pe,i=Lr.transition;Lr.transition=null;try{Pe=4,gl(e,t,r,s)}finally{Pe=a,Lr.transition=i}}function gl(e,t,r,s){if($a){var a=So(e,t,r,s);if(a===null)Bi(e,t,s,Ba,r),jc(e,s);else if(E0(a,e,t,r,s))s.stopPropagation();else if(jc(e,s),t&4&&-1<C0.indexOf(e)){for(;a!==null;){var i=Qs(a);if(i!==null&&Ru(i),i=So(e,t,r,s),i===null&&Bi(e,t,s,Ba,r),i===a)break;a=i}a!==null&&s.stopPropagation()}else Bi(e,t,s,null,r)}}var Ba=null;function So(e,t,r,s){if(Ba=null,e=ml(s),e=Zn(e),e!==null)if(t=mr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=bu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ba=e,null}function Au(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(g0()){case hl:return 1;case ku:return 4;case Fa:case v0:return 16;case Su:return 536870912;default:return 16}default:return 16}}var An=null,vl=null,ja=null;function Iu(){if(ja)return ja;var e,t=vl,r=t.length,s,a="value"in An?An.value:An.textContent,i=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(s=1;s<=o&&t[r-s]===a[i-s];s++);return ja=a.slice(e,1<s?1-s:void 0)}function Na(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ta(){return!0}function kc(){return!1}function Lt(e){function t(r,s,a,i,o){this._reactName=r,this._targetInst=a,this.type=s,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ta:kc,this.isPropagationStopped=kc,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Lt(Qr),Us=Ye({},Qr,{view:0,detail:0}),_0=Lt(Us),Li,Ai,Zr,ci=Ye({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zr&&(Zr&&e.type==="mousemove"?(Li=e.screenX-Zr.screenX,Ai=e.screenY-Zr.screenY):Ai=Li=0,Zr=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Ai}}),Sc=Lt(ci),L0=Ye({},ci,{dataTransfer:0}),A0=Lt(L0),I0=Ye({},Us,{relatedTarget:0}),Ii=Lt(I0),D0=Ye({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=Lt(D0),z0=Ye({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),F0=Lt(z0),O0=Ye({},Qr,{data:0}),Cc=Lt(O0),$0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=q0[e])?!!t[e]:!1}function bl(){return U0}var Q0=Ye({},Us,{key:function(e){if(e.key){var t=$0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?B0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bl,charCode:function(e){return e.type==="keypress"?Na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y0=Lt(Q0),H0=Ye({},ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ec=Lt(H0),W0=Ye({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bl}),G0=Lt(W0),V0=Ye({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=Lt(V0),K0=Ye({},ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=Lt(K0),Z0=[9,13,27,32],wl=xn&&"CompositionEvent"in window,ps=null;xn&&"documentMode"in document&&(ps=document.documentMode);var eh=xn&&"TextEvent"in window&&!ps,Du=xn&&(!wl||ps&&8<ps&&11>=ps),Rc=String.fromCharCode(32),Tc=!1;function Mu(e,t){switch(e){case"keyup":return Z0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function th(e,t){switch(e){case"compositionend":return zu(t);case"keypress":return t.which!==32?null:(Tc=!0,Rc);case"textInput":return e=t.data,e===Rc&&Tc?null:e;default:return null}}function nh(e,t){if(yr)return e==="compositionend"||!wl&&Mu(e,t)?(e=Iu(),ja=vl=An=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Du&&t.locale!=="ko"?null:t.data;default:return null}}var rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rh[e.type]:t==="textarea"}function Fu(e,t,r,s){pu(s),t=qa(t,"onChange"),0<t.length&&(r=new yl("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var xs=null,Ts=null;function sh(e){Vu(e,0)}function di(e){var t=jr(e);if(lu(t))return e}function ah(e,t){if(e==="change")return t}var Ou=!1;if(xn){var Di;if(xn){var Mi="oninput"in document;if(!Mi){var _c=document.createElement("div");_c.setAttribute("oninput","return;"),Mi=typeof _c.oninput=="function"}Di=Mi}else Di=!1;Ou=Di&&(!document.documentMode||9<document.documentMode)}function Lc(){xs&&(xs.detachEvent("onpropertychange",$u),Ts=xs=null)}function $u(e){if(e.propertyName==="value"&&di(Ts)){var t=[];Fu(t,Ts,e,ml(e)),yu(sh,t)}}function ih(e,t,r){e==="focusin"?(Lc(),xs=t,Ts=r,xs.attachEvent("onpropertychange",$u)):e==="focusout"&&Lc()}function oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return di(Ts)}function lh(e,t){if(e==="click")return di(t)}function ch(e,t){if(e==="input"||e==="change")return di(t)}function dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:dh;function Ps(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var a=r[s];if(!io.call(t,a)||!Kt(e[a],t[a]))return!1}return!0}function Ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ic(e,t){var r=Ac(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ac(r)}}function Bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qu(){for(var e=window,t=Da();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Da(e.document)}return t}function jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uh(e){var t=qu(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Bu(r.ownerDocument.documentElement,r)){if(s!==null&&jl(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,i=Math.min(s.start,a);s=s.end===void 0?i:Math.min(s.end,a),!e.extend&&i>s&&(a=s,s=i,i=a),a=Ic(r,i);var o=Ic(r,s);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fh=xn&&"documentMode"in document&&11>=document.documentMode,br=null,Co=null,gs=null,Eo=!1;function Dc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Eo||br==null||br!==Da(s)||(s=br,"selectionStart"in s&&jl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),gs&&Ps(gs,s)||(gs=s,s=qa(Co,"onSelect"),0<s.length&&(t=new yl("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=br)))}function na(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var wr={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},zi={},Uu={};xn&&(Uu=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function ui(e){if(zi[e])return zi[e];if(!wr[e])return e;var t=wr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Uu)return zi[e]=t[r];return e}var Qu=ui("animationend"),Yu=ui("animationiteration"),Hu=ui("animationstart"),Wu=ui("transitionend"),Gu=new Map,Mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(e,t){Gu.set(e,t),fr(t,[e])}for(var Fi=0;Fi<Mc.length;Fi++){var Oi=Mc[Fi],mh=Oi.toLowerCase(),hh=Oi[0].toUpperCase()+Oi.slice(1);Yn(mh,"on"+hh)}Yn(Qu,"onAnimationEnd");Yn(Yu,"onAnimationIteration");Yn(Hu,"onAnimationStart");Yn("dblclick","onDoubleClick");Yn("focusin","onFocus");Yn("focusout","onBlur");Yn(Wu,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ph=new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));function zc(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,m0(s,t,void 0,e),e.currentTarget=null}function Vu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],a=s.event;s=s.listeners;e:{var i=void 0;if(t)for(var o=s.length-1;0<=o;o--){var l=s[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&a.isPropagationStopped())break e;zc(a,l,u),i=c}else for(o=0;o<s.length;o++){if(l=s[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&a.isPropagationStopped())break e;zc(a,l,u),i=c}}}if(za)throw e=jo,za=!1,jo=null,e}function Me(e,t){var r=t[Lo];r===void 0&&(r=t[Lo]=new Set);var s=e+"__bubble";r.has(s)||(Xu(t,e,2,!1),r.add(s))}function $i(e,t,r){var s=0;t&&(s|=4),Xu(r,e,s,t)}var ra="_reactListening"+Math.random().toString(36).slice(2);function _s(e){if(!e[ra]){e[ra]=!0,ru.forEach(function(r){r!=="selectionchange"&&(ph.has(r)||$i(r,!1,e),$i(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ra]||(t[ra]=!0,$i("selectionchange",!1,t))}}function Xu(e,t,r,s){switch(Au(t)){case 1:var a=T0;break;case 4:a=P0;break;default:a=gl}r=a.bind(null,t,r,e),a=void 0,!wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Bi(e,t,r,s,a){var i=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var l=s.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=s.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Zn(l),o===null)return;if(c=o.tag,c===5||c===6){s=i=o;continue e}l=l.parentNode}}s=s.return}yu(function(){var u=i,f=ml(r),p=[];e:{var m=Gu.get(e);if(m!==void 0){var b=yl,x=e;switch(e){case"keypress":if(Na(r)===0)break e;case"keydown":case"keyup":b=Y0;break;case"focusin":x="focus",b=Ii;break;case"focusout":x="blur",b=Ii;break;case"beforeblur":case"afterblur":b=Ii;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=A0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=G0;break;case Qu:case Yu:case Hu:b=M0;break;case Wu:b=X0;break;case"scroll":b=_0;break;case"wheel":b=J0;break;case"copy":case"cut":case"paste":b=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Ec}var N=(t&4)!==0,C=!N&&e==="scroll",v=N?m!==null?m+"Capture":null:m;N=[];for(var h=u,y;h!==null;){y=h;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,v!==null&&(E=Ss(h,v),E!=null&&N.push(Ls(h,E,y)))),C)break;h=h.return}0<N.length&&(m=new b(m,x,null,r,f),p.push({event:m,listeners:N}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",m&&r!==yo&&(x=r.relatedTarget||r.fromElement)&&(Zn(x)||x[gn]))break e;if((b||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,b?(x=r.relatedTarget||r.toElement,b=u,x=x?Zn(x):null,x!==null&&(C=mr(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(b=null,x=u),b!==x)){if(N=Sc,E="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(N=Ec,E="onPointerLeave",v="onPointerEnter",h="pointer"),C=b==null?m:jr(b),y=x==null?m:jr(x),m=new N(E,h+"leave",b,r,f),m.target=C,m.relatedTarget=y,E=null,Zn(f)===u&&(N=new N(v,h+"enter",x,r,f),N.target=y,N.relatedTarget=C,E=N),C=E,b&&x)t:{for(N=b,v=x,h=0,y=N;y;y=xr(y))h++;for(y=0,E=v;E;E=xr(E))y++;for(;0<h-y;)N=xr(N),h--;for(;0<y-h;)v=xr(v),y--;for(;h--;){if(N===v||v!==null&&N===v.alternate)break t;N=xr(N),v=xr(v)}N=null}else N=null;b!==null&&Fc(p,m,b,N,!1),x!==null&&C!==null&&Fc(p,C,x,N,!0)}}e:{if(m=u?jr(u):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var j=ah;else if(Pc(m))if(Ou)j=ch;else{j=oh;var T=ih}else(b=m.nodeName)&&b.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=lh);if(j&&(j=j(e,u))){Fu(p,j,r,f);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&ho(m,"number",m.value)}switch(T=u?jr(u):window,e){case"focusin":(Pc(T)||T.contentEditable==="true")&&(br=T,Co=u,gs=null);break;case"focusout":gs=Co=br=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,Dc(p,r,f);break;case"selectionchange":if(fh)break;case"keydown":case"keyup":Dc(p,r,f)}var S;if(wl)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else yr?Mu(e,r)&&(g="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(g="onCompositionStart");g&&(Du&&r.locale!=="ko"&&(yr||g!=="onCompositionStart"?g==="onCompositionEnd"&&yr&&(S=Iu()):(An=f,vl="value"in An?An.value:An.textContent,yr=!0)),T=qa(u,g),0<T.length&&(g=new Cc(g,e,null,r,f),p.push({event:g,listeners:T}),S?g.data=S:(S=zu(r),S!==null&&(g.data=S)))),(S=eh?th(e,r):nh(e,r))&&(u=qa(u,"onBeforeInput"),0<u.length&&(f=new Cc("onBeforeInput","beforeinput",null,r,f),p.push({event:f,listeners:u}),f.data=S))}Vu(p,t)})}function Ls(e,t,r){return{instance:e,listener:t,currentTarget:r}}function qa(e,t){for(var r=t+"Capture",s=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Ss(e,r),i!=null&&s.unshift(Ls(e,i,a)),i=Ss(e,t),i!=null&&s.push(Ls(e,i,a))),e=e.return}return s}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fc(e,t,r,s,a){for(var i=t._reactName,o=[];r!==null&&r!==s;){var l=r,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,a?(c=Ss(r,i),c!=null&&o.unshift(Ls(r,c,l))):a||(c=Ss(r,i),c!=null&&o.push(Ls(r,c,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var xh=/\r\n?/g,gh=/\u0000|\uFFFD/g;function Oc(e){return(typeof e=="string"?e:""+e).replace(xh,`
`).replace(gh,"")}function sa(e,t,r){if(t=Oc(t),Oc(e)!==t&&r)throw Error(V(425))}function Ua(){}var Ro=null,To=null;function Po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _o=typeof setTimeout=="function"?setTimeout:void 0,vh=typeof clearTimeout=="function"?clearTimeout:void 0,$c=typeof Promise=="function"?Promise:void 0,yh=typeof queueMicrotask=="function"?queueMicrotask:typeof $c<"u"?function(e){return $c.resolve(null).then(e).catch(bh)}:_o;function bh(e){setTimeout(function(){throw e})}function qi(e,t){var r=t,s=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(s===0){e.removeChild(a),Rs(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=a}while(r);Rs(t)}function Fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),sn="__reactFiber$"+Yr,As="__reactProps$"+Yr,gn="__reactContainer$"+Yr,Lo="__reactEvents$"+Yr,wh="__reactListeners$"+Yr,jh="__reactHandles$"+Yr;function Zn(e){var t=e[sn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[gn]||r[sn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Bc(e);e!==null;){if(r=e[sn])return r;e=Bc(e)}return t}e=r,r=e.parentNode}return null}function Qs(e){return e=e[sn]||e[gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function fi(e){return e[As]||null}var Ao=[],Nr=-1;function Hn(e){return{current:e}}function Fe(e){0>Nr||(e.current=Ao[Nr],Ao[Nr]=null,Nr--)}function De(e,t){Nr++,Ao[Nr]=e.current,e.current=t}var Qn={},ht=Hn(Qn),Nt=Hn(!1),or=Qn;function zr(e,t){var r=e.type.contextTypes;if(!r)return Qn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in r)a[i]=t[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function kt(e){return e=e.childContextTypes,e!=null}function Qa(){Fe(Nt),Fe(ht)}function qc(e,t,r){if(ht.current!==Qn)throw Error(V(168));De(ht,t),De(Nt,r)}function Ku(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(V(108,i0(e)||"Unknown",a));return Ye({},r,s)}function Ya(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qn,or=ht.current,De(ht,e),De(Nt,Nt.current),!0}function Uc(e,t,r){var s=e.stateNode;if(!s)throw Error(V(169));r?(e=Ku(e,t,or),s.__reactInternalMemoizedMergedChildContext=e,Fe(Nt),Fe(ht),De(ht,e)):Fe(Nt),De(Nt,r)}var un=null,mi=!1,Ui=!1;function Ju(e){un===null?un=[e]:un.push(e)}function Nh(e){mi=!0,Ju(e)}function Wn(){if(!Ui&&un!==null){Ui=!0;var e=0,t=Pe;try{var r=un;for(Pe=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}un=null,mi=!1}catch(a){throw un!==null&&(un=un.slice(e+1)),Nu(hl,Wn),a}finally{Pe=t,Ui=!1}}return null}var kr=[],Sr=0,Ha=null,Wa=0,It=[],Dt=0,lr=null,fn=1,mn="";function Kn(e,t){kr[Sr++]=Wa,kr[Sr++]=Ha,Ha=e,Wa=t}function Zu(e,t,r){It[Dt++]=fn,It[Dt++]=mn,It[Dt++]=lr,lr=e;var s=fn;e=mn;var a=32-Vt(s)-1;s&=~(1<<a),r+=1;var i=32-Vt(t)+a;if(30<i){var o=a-a%5;i=(s&(1<<o)-1).toString(32),s>>=o,a-=o,fn=1<<32-Vt(t)+a|r<<a|s,mn=i+e}else fn=1<<i|r<<a|s,mn=e}function Nl(e){e.return!==null&&(Kn(e,1),Zu(e,1,0))}function kl(e){for(;e===Ha;)Ha=kr[--Sr],kr[Sr]=null,Wa=kr[--Sr],kr[Sr]=null;for(;e===lr;)lr=It[--Dt],It[Dt]=null,mn=It[--Dt],It[Dt]=null,fn=It[--Dt],It[Dt]=null}var Tt=null,Rt=null,Oe=!1,Gt=null;function ef(e,t){var r=Mt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Qc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,Rt=Fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=lr!==null?{id:fn,overflow:mn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Mt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Tt=e,Rt=null,!0):!1;default:return!1}}function Io(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Do(e){if(Oe){var t=Rt;if(t){var r=t;if(!Qc(e,t)){if(Io(e))throw Error(V(418));t=Fn(r.nextSibling);var s=Tt;t&&Qc(e,t)?ef(s,r):(e.flags=e.flags&-4097|2,Oe=!1,Tt=e)}}else{if(Io(e))throw Error(V(418));e.flags=e.flags&-4097|2,Oe=!1,Tt=e}}}function Yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function aa(e){if(e!==Tt)return!1;if(!Oe)return Yc(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Po(e.type,e.memoizedProps)),t&&(t=Rt)){if(Io(e))throw tf(),Error(V(418));for(;t;)ef(e,t),t=Fn(t.nextSibling)}if(Yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Rt=Fn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=Tt?Fn(e.stateNode.nextSibling):null;return!0}function tf(){for(var e=Rt;e;)e=Fn(e.nextSibling)}function Fr(){Rt=Tt=null,Oe=!1}function Sl(e){Gt===null?Gt=[e]:Gt.push(e)}var kh=wn.ReactCurrentBatchConfig;function es(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(V(309));var s=r.stateNode}if(!s)throw Error(V(147,e));var a=s,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(V(284));if(!r._owner)throw Error(V(290,e))}return e}function ia(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hc(e){var t=e._init;return t(e._payload)}function nf(e){function t(v,h){if(e){var y=v.deletions;y===null?(v.deletions=[h],v.flags|=16):y.push(h)}}function r(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function s(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function a(v,h){return v=qn(v,h),v.index=0,v.sibling=null,v}function i(v,h,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<h?(v.flags|=2,h):y):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,h,y,E){return h===null||h.tag!==6?(h=Xi(y,v.mode,E),h.return=v,h):(h=a(h,y),h.return=v,h)}function c(v,h,y,E){var j=y.type;return j===vr?f(v,h,y.props.children,E,y.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Rn&&Hc(j)===h.type)?(E=a(h,y.props),E.ref=es(v,h,y),E.return=v,E):(E=Pa(y.type,y.key,y.props,null,v.mode,E),E.ref=es(v,h,y),E.return=v,E)}function u(v,h,y,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Ki(y,v.mode,E),h.return=v,h):(h=a(h,y.children||[]),h.return=v,h)}function f(v,h,y,E,j){return h===null||h.tag!==7?(h=ar(y,v.mode,E,j),h.return=v,h):(h=a(h,y),h.return=v,h)}function p(v,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Xi(""+h,v.mode,y),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Vs:return y=Pa(h.type,h.key,h.props,null,v.mode,y),y.ref=es(v,null,h),y.return=v,y;case gr:return h=Ki(h,v.mode,y),h.return=v,h;case Rn:var E=h._init;return p(v,E(h._payload),y)}if(ds(h)||Vr(h))return h=ar(h,v.mode,y,null),h.return=v,h;ia(v,h)}return null}function m(v,h,y,E){var j=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return j!==null?null:l(v,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vs:return y.key===j?c(v,h,y,E):null;case gr:return y.key===j?u(v,h,y,E):null;case Rn:return j=y._init,m(v,h,j(y._payload),E)}if(ds(y)||Vr(y))return j!==null?null:f(v,h,y,E,null);ia(v,y)}return null}function b(v,h,y,E,j){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(y)||null,l(h,v,""+E,j);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Vs:return v=v.get(E.key===null?y:E.key)||null,c(h,v,E,j);case gr:return v=v.get(E.key===null?y:E.key)||null,u(h,v,E,j);case Rn:var T=E._init;return b(v,h,y,T(E._payload),j)}if(ds(E)||Vr(E))return v=v.get(y)||null,f(h,v,E,j,null);ia(h,E)}return null}function x(v,h,y,E){for(var j=null,T=null,S=h,g=h=0,w=null;S!==null&&g<y.length;g++){S.index>g?(w=S,S=null):w=S.sibling;var k=m(v,S,y[g],E);if(k===null){S===null&&(S=w);break}e&&S&&k.alternate===null&&t(v,S),h=i(k,h,g),T===null?j=k:T.sibling=k,T=k,S=w}if(g===y.length)return r(v,S),Oe&&Kn(v,g),j;if(S===null){for(;g<y.length;g++)S=p(v,y[g],E),S!==null&&(h=i(S,h,g),T===null?j=S:T.sibling=S,T=S);return Oe&&Kn(v,g),j}for(S=s(v,S);g<y.length;g++)w=b(S,v,g,y[g],E),w!==null&&(e&&w.alternate!==null&&S.delete(w.key===null?g:w.key),h=i(w,h,g),T===null?j=w:T.sibling=w,T=w);return e&&S.forEach(function(P){return t(v,P)}),Oe&&Kn(v,g),j}function N(v,h,y,E){var j=Vr(y);if(typeof j!="function")throw Error(V(150));if(y=j.call(y),y==null)throw Error(V(151));for(var T=j=null,S=h,g=h=0,w=null,k=y.next();S!==null&&!k.done;g++,k=y.next()){S.index>g?(w=S,S=null):w=S.sibling;var P=m(v,S,k.value,E);if(P===null){S===null&&(S=w);break}e&&S&&P.alternate===null&&t(v,S),h=i(P,h,g),T===null?j=P:T.sibling=P,T=P,S=w}if(k.done)return r(v,S),Oe&&Kn(v,g),j;if(S===null){for(;!k.done;g++,k=y.next())k=p(v,k.value,E),k!==null&&(h=i(k,h,g),T===null?j=k:T.sibling=k,T=k);return Oe&&Kn(v,g),j}for(S=s(v,S);!k.done;g++,k=y.next())k=b(S,v,g,k.value,E),k!==null&&(e&&k.alternate!==null&&S.delete(k.key===null?g:k.key),h=i(k,h,g),T===null?j=k:T.sibling=k,T=k);return e&&S.forEach(function(M){return t(v,M)}),Oe&&Kn(v,g),j}function C(v,h,y,E){if(typeof y=="object"&&y!==null&&y.type===vr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Vs:e:{for(var j=y.key,T=h;T!==null;){if(T.key===j){if(j=y.type,j===vr){if(T.tag===7){r(v,T.sibling),h=a(T,y.props.children),h.return=v,v=h;break e}}else if(T.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Rn&&Hc(j)===T.type){r(v,T.sibling),h=a(T,y.props),h.ref=es(v,T,y),h.return=v,v=h;break e}r(v,T);break}else t(v,T);T=T.sibling}y.type===vr?(h=ar(y.props.children,v.mode,E,y.key),h.return=v,v=h):(E=Pa(y.type,y.key,y.props,null,v.mode,E),E.ref=es(v,h,y),E.return=v,v=E)}return o(v);case gr:e:{for(T=y.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){r(v,h.sibling),h=a(h,y.children||[]),h.return=v,v=h;break e}else{r(v,h);break}else t(v,h);h=h.sibling}h=Ki(y,v.mode,E),h.return=v,v=h}return o(v);case Rn:return T=y._init,C(v,h,T(y._payload),E)}if(ds(y))return x(v,h,y,E);if(Vr(y))return N(v,h,y,E);ia(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(r(v,h.sibling),h=a(h,y),h.return=v,v=h):(r(v,h),h=Xi(y,v.mode,E),h.return=v,v=h),o(v)):r(v,h)}return C}var Or=nf(!0),rf=nf(!1),Ga=Hn(null),Va=null,Cr=null,Cl=null;function El(){Cl=Cr=Va=null}function Rl(e){var t=Ga.current;Fe(Ga),e._currentValue=t}function Mo(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function Ar(e,t){Va=e,Cl=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(jt=!0),e.firstContext=null)}function Ot(e){var t=e._currentValue;if(Cl!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(Va===null)throw Error(V(308));Cr=e,Va.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var er=null;function Tl(e){er===null?er=[e]:er.push(e)}function sf(e,t,r,s){var a=t.interleaved;return a===null?(r.next=r,Tl(t)):(r.next=a.next,a.next=r),t.interleaved=r,vn(e,s)}function vn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Tn=!1;function Pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function af(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function On(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Ne&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,vn(e,r)}return a=s.interleaved,a===null?(t.next=t,Tl(s)):(t.next=a.next,a.next=t),s.interleaved=t,vn(e,r)}function ka(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,pl(e,r)}}function Wc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var a=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?a=i=o:i=i.next=o,r=r.next}while(r!==null);i===null?a=i=t:i=i.next=t}else a=i=t;r={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Xa(e,t,r,s){var a=e.updateQueue;Tn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(i!==null){var p=a.baseState;o=0,f=u=c=null,l=i;do{var m=l.lane,b=l.eventTime;if((s&m)===m){f!==null&&(f=f.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,N=l;switch(m=t,b=r,N.tag){case 1:if(x=N.payload,typeof x=="function"){p=x.call(b,p,m);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=N.payload,m=typeof x=="function"?x.call(b,p,m):x,m==null)break e;p=Ye({},p,m);break e;case 2:Tn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else b={eventTime:b,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=b,c=p):f=f.next=b,o|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(1);if(f===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);dr|=o,e.lanes=o,e.memoizedState=p}}function Gc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=r,typeof a!="function")throw Error(V(191,a));a.call(s)}}}var Ys={},on=Hn(Ys),Is=Hn(Ys),Ds=Hn(Ys);function tr(e){if(e===Ys)throw Error(V(174));return e}function _l(e,t){switch(De(Ds,t),De(Is,e),De(on,Ys),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xo(t,e)}Fe(on),De(on,t)}function $r(){Fe(on),Fe(Is),Fe(Ds)}function of(e){tr(Ds.current);var t=tr(on.current),r=xo(t,e.type);t!==r&&(De(Is,e),De(on,r))}function Ll(e){Is.current===e&&(Fe(on),Fe(Is))}var Ue=Hn(0);function Ka(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qi=[];function Al(){for(var e=0;e<Qi.length;e++)Qi[e]._workInProgressVersionPrimary=null;Qi.length=0}var Sa=wn.ReactCurrentDispatcher,Yi=wn.ReactCurrentBatchConfig,cr=0,Qe=null,nt=null,st=null,Ja=!1,vs=!1,Ms=0,Sh=0;function dt(){throw Error(V(321))}function Il(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Kt(e[r],t[r]))return!1;return!0}function Dl(e,t,r,s,a,i){if(cr=i,Qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sa.current=e===null||e.memoizedState===null?Th:Ph,e=r(s,a),vs){i=0;do{if(vs=!1,Ms=0,25<=i)throw Error(V(301));i+=1,st=nt=null,t.updateQueue=null,Sa.current=_h,e=r(s,a)}while(vs)}if(Sa.current=Za,t=nt!==null&&nt.next!==null,cr=0,st=nt=Qe=null,Ja=!1,t)throw Error(V(300));return e}function Ml(){var e=Ms!==0;return Ms=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Qe.memoizedState=st=e:st=st.next=e,st}function $t(){if(nt===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=nt.next;var t=st===null?Qe.memoizedState:st.next;if(t!==null)st=t,nt=e;else{if(e===null)throw Error(V(310));nt=e,e={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},st===null?Qe.memoizedState=st=e:st=st.next=e}return st}function zs(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=$t(),r=t.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=e;var s=nt,a=s.baseQueue,i=r.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}s.baseQueue=a=i,r.pending=null}if(a!==null){i=a.next,s=s.baseState;var l=o=null,c=null,u=i;do{var f=u.lane;if((cr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,o=s):c=c.next=p,Qe.lanes|=f,dr|=f}u=u.next}while(u!==null&&u!==i);c===null?o=s:c.next=l,Kt(s,t.memoizedState)||(jt=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=c,r.lastRenderedState=s}if(e=r.interleaved,e!==null){a=e;do i=a.lane,Qe.lanes|=i,dr|=i,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Wi(e){var t=$t(),r=t.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=e;var s=r.dispatch,a=r.pending,i=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Kt(i,t.memoizedState)||(jt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,s]}function lf(){}function cf(e,t){var r=Qe,s=$t(),a=t(),i=!Kt(s.memoizedState,a);if(i&&(s.memoizedState=a,jt=!0),s=s.queue,zl(ff.bind(null,r,s,e),[e]),s.getSnapshot!==t||i||st!==null&&st.memoizedState.tag&1){if(r.flags|=2048,Fs(9,uf.bind(null,r,s,a,t),void 0,null),at===null)throw Error(V(349));cr&30||df(r,t,a)}return a}function df(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function uf(e,t,r,s){t.value=r,t.getSnapshot=s,mf(t)&&hf(e)}function ff(e,t,r){return r(function(){mf(t)&&hf(e)})}function mf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Kt(e,r)}catch{return!0}}function hf(e){var t=vn(e,1);t!==null&&Xt(t,e,1,-1)}function Vc(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zs,lastRenderedState:e},t.queue=e,e=e.dispatch=Rh.bind(null,Qe,e),[t.memoizedState,e]}function Fs(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Qe.updateQueue,t===null?(t={lastEffect:null,stores:null},Qe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function pf(){return $t().memoizedState}function Ca(e,t,r,s){var a=nn();Qe.flags|=e,a.memoizedState=Fs(1|t,r,void 0,s===void 0?null:s)}function hi(e,t,r,s){var a=$t();s=s===void 0?null:s;var i=void 0;if(nt!==null){var o=nt.memoizedState;if(i=o.destroy,s!==null&&Il(s,o.deps)){a.memoizedState=Fs(t,r,i,s);return}}Qe.flags|=e,a.memoizedState=Fs(1|t,r,i,s)}function Xc(e,t){return Ca(8390656,8,e,t)}function zl(e,t){return hi(2048,8,e,t)}function xf(e,t){return hi(4,2,e,t)}function gf(e,t){return hi(4,4,e,t)}function vf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yf(e,t,r){return r=r!=null?r.concat([e]):null,hi(4,4,vf.bind(null,t,e),r)}function Fl(){}function bf(e,t){var r=$t();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Il(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function wf(e,t){var r=$t();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&Il(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function jf(e,t,r){return cr&21?(Kt(r,t)||(r=Cu(),Qe.lanes|=r,dr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,jt=!0),e.memoizedState=r)}function Ch(e,t){var r=Pe;Pe=r!==0&&4>r?r:4,e(!0);var s=Yi.transition;Yi.transition={};try{e(!1),t()}finally{Pe=r,Yi.transition=s}}function Nf(){return $t().memoizedState}function Eh(e,t,r){var s=Bn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},kf(e))Sf(t,r);else if(r=sf(e,t,r,s),r!==null){var a=gt();Xt(r,e,s,a),Cf(r,t,s)}}function Rh(e,t,r){var s=Bn(e),a={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(kf(e))Sf(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,r);if(a.hasEagerState=!0,a.eagerState=l,Kt(l,o)){var c=t.interleaved;c===null?(a.next=a,Tl(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=sf(e,t,a,s),r!==null&&(a=gt(),Xt(r,e,s,a),Cf(r,t,s))}}function kf(e){var t=e.alternate;return e===Qe||t!==null&&t===Qe}function Sf(e,t){vs=Ja=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Cf(e,t,r){if(r&4194240){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,pl(e,r)}}var Za={readContext:Ot,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},Th={readContext:Ot,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:Xc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ca(4194308,4,vf.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ca(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ca(4,2,e,t)},useMemo:function(e,t){var r=nn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=nn();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Eh.bind(null,Qe,e),[s.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:Vc,useDebugValue:Fl,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=Vc(!1),t=e[0];return e=Ch.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Qe,a=nn();if(Oe){if(r===void 0)throw Error(V(407));r=r()}else{if(r=t(),at===null)throw Error(V(349));cr&30||df(s,t,r)}a.memoizedState=r;var i={value:r,getSnapshot:t};return a.queue=i,Xc(ff.bind(null,s,i,e),[e]),s.flags|=2048,Fs(9,uf.bind(null,s,i,r,t),void 0,null),r},useId:function(){var e=nn(),t=at.identifierPrefix;if(Oe){var r=mn,s=fn;r=(s&~(1<<32-Vt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ms++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Sh++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ph={readContext:Ot,useCallback:bf,useContext:Ot,useEffect:zl,useImperativeHandle:yf,useInsertionEffect:xf,useLayoutEffect:gf,useMemo:wf,useReducer:Hi,useRef:pf,useState:function(){return Hi(zs)},useDebugValue:Fl,useDeferredValue:function(e){var t=$t();return jf(t,nt.memoizedState,e)},useTransition:function(){var e=Hi(zs)[0],t=$t().memoizedState;return[e,t]},useMutableSource:lf,useSyncExternalStore:cf,useId:Nf,unstable_isNewReconciler:!1},_h={readContext:Ot,useCallback:bf,useContext:Ot,useEffect:zl,useImperativeHandle:yf,useInsertionEffect:xf,useLayoutEffect:gf,useMemo:wf,useReducer:Wi,useRef:pf,useState:function(){return Wi(zs)},useDebugValue:Fl,useDeferredValue:function(e){var t=$t();return nt===null?t.memoizedState=e:jf(t,nt.memoizedState,e)},useTransition:function(){var e=Wi(zs)[0],t=$t().memoizedState;return[e,t]},useMutableSource:lf,useSyncExternalStore:cf,useId:Nf,unstable_isNewReconciler:!1};function Ht(e,t){if(e&&e.defaultProps){t=Ye({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function zo(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:Ye({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var pi={isMounted:function(e){return(e=e._reactInternals)?mr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=gt(),a=Bn(e),i=hn(s,a);i.payload=t,r!=null&&(i.callback=r),t=On(e,i,a),t!==null&&(Xt(t,e,a,s),ka(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=gt(),a=Bn(e),i=hn(s,a);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=On(e,i,a),t!==null&&(Xt(t,e,a,s),ka(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=gt(),s=Bn(e),a=hn(r,s);a.tag=2,t!=null&&(a.callback=t),t=On(e,a,s),t!==null&&(Xt(t,e,s,r),ka(t,e,s))}};function Kc(e,t,r,s,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ps(r,s)||!Ps(a,i):!0}function Ef(e,t,r){var s=!1,a=Qn,i=t.contextType;return typeof i=="object"&&i!==null?i=Ot(i):(a=kt(t)?or:ht.current,s=t.contextTypes,i=(s=s!=null)?zr(e,a):Qn),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pi,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Jc(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&pi.enqueueReplaceState(t,t.state,null)}function Fo(e,t,r,s){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Pl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Ot(i):(i=kt(t)?or:ht.current,a.context=zr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(zo(e,t,i,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&pi.enqueueReplaceState(a,a.state,null),Xa(e,r,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t){try{var r="",s=t;do r+=a0(s),s=s.return;while(s);var a=r}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Gi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Oo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Lh=typeof WeakMap=="function"?WeakMap:Map;function Rf(e,t,r){r=hn(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){ti||(ti=!0,Vo=s),Oo(e,t)},r}function Tf(e,t,r){r=hn(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;r.payload=function(){return s(a)},r.callback=function(){Oo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Oo(e,t),typeof s!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Zc(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Lh;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(r)||(a.add(r),e=Hh.bind(null,e,t,r),t.then(e,e))}function ed(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function td(e,t,r,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=hn(-1,1),t.tag=2,On(r,t,1))),r.lanes|=1),e)}var Ah=wn.ReactCurrentOwner,jt=!1;function xt(e,t,r,s){t.child=e===null?rf(t,null,r,s):Or(t,e.child,r,s)}function nd(e,t,r,s,a){r=r.render;var i=t.ref;return Ar(t,a),s=Dl(e,t,r,s,i,a),r=Ml(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,yn(e,t,a)):(Oe&&r&&Nl(t),t.flags|=1,xt(e,t,s,a),t.child)}function rd(e,t,r,s,a){if(e===null){var i=r.type;return typeof i=="function"&&!Hl(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Pf(e,t,i,s,a)):(e=Pa(r.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(r=r.compare,r=r!==null?r:Ps,r(o,s)&&e.ref===t.ref)return yn(e,t,a)}return t.flags|=1,e=qn(i,s),e.ref=t.ref,e.return=t,t.child=e}function Pf(e,t,r,s,a){if(e!==null){var i=e.memoizedProps;if(Ps(i,s)&&e.ref===t.ref)if(jt=!1,t.pendingProps=s=i,(e.lanes&a)!==0)e.flags&131072&&(jt=!0);else return t.lanes=e.lanes,yn(e,t,a)}return $o(e,t,r,s,a)}function _f(e,t,r){var s=t.pendingProps,a=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(Rr,Et),Et|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,De(Rr,Et),Et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:r,De(Rr,Et),Et|=s}else i!==null?(s=i.baseLanes|r,t.memoizedState=null):s=r,De(Rr,Et),Et|=s;return xt(e,t,a,r),t.child}function Lf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function $o(e,t,r,s,a){var i=kt(r)?or:ht.current;return i=zr(t,i),Ar(t,a),r=Dl(e,t,r,s,i,a),s=Ml(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,yn(e,t,a)):(Oe&&s&&Nl(t),t.flags|=1,xt(e,t,r,a),t.child)}function sd(e,t,r,s,a){if(kt(r)){var i=!0;Ya(t)}else i=!1;if(Ar(t,a),t.stateNode===null)Ea(e,t),Ef(t,r,s),Fo(t,r,s,a),s=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ot(u):(u=kt(r)?or:ht.current,u=zr(t,u));var f=r.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==s||c!==u)&&Jc(t,o,s,u),Tn=!1;var m=t.memoizedState;o.state=m,Xa(t,s,o,a),c=t.memoizedState,l!==s||m!==c||Nt.current||Tn?(typeof f=="function"&&(zo(t,r,f,s),c=t.memoizedState),(l=Tn||Kc(t,r,l,s,m,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),o.props=s,o.state=c,o.context=u,s=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,af(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ht(t.type,l),o.props=u,p=t.pendingProps,m=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ot(c):(c=kt(r)?or:ht.current,c=zr(t,c));var b=r.getDerivedStateFromProps;(f=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==c)&&Jc(t,o,s,c),Tn=!1,m=t.memoizedState,o.state=m,Xa(t,s,o,a);var x=t.memoizedState;l!==p||m!==x||Nt.current||Tn?(typeof b=="function"&&(zo(t,r,b,s),x=t.memoizedState),(u=Tn||Kc(t,r,u,s,m,x,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,x,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=x),o.props=s,o.state=x,o.context=c,s=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),s=!1)}return Bo(e,t,r,s,i,a)}function Bo(e,t,r,s,a,i){Lf(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return a&&Uc(t,r,!1),yn(e,t,i);s=t.stateNode,Ah.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=Or(t,e.child,null,i),t.child=Or(t,null,l,i)):xt(e,t,l,i),t.memoizedState=s.state,a&&Uc(t,r,!0),t.child}function Af(e){var t=e.stateNode;t.pendingContext?qc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qc(e,t.context,!1),_l(e,t.containerInfo)}function ad(e,t,r,s,a){return Fr(),Sl(a),t.flags|=256,xt(e,t,r,s),t.child}var qo={dehydrated:null,treeContext:null,retryLane:0};function Uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function If(e,t,r){var s=t.pendingProps,a=Ue.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),De(Ue,a&1),e===null)return Do(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,i?(s=t.mode,i=t.child,o={mode:"hidden",children:o},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=vi(o,s,0,null),e=ar(e,s,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Uo(r),t.memoizedState=qo,e):Ol(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Ih(e,t,o,s,l,a,r);if(i){i=s.fallback,o=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:s.children};return!(o&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=qn(a,c),s.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=qn(l,i):(i=ar(i,o,r,null),i.flags|=2),i.return=t,s.return=t,s.sibling=i,t.child=s,s=i,i=t.child,o=e.child.memoizedState,o=o===null?Uo(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~r,t.memoizedState=qo,s}return i=e.child,e=i.sibling,s=qn(i,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function Ol(e,t){return t=vi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oa(e,t,r,s){return s!==null&&Sl(s),Or(t,e.child,null,r),e=Ol(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ih(e,t,r,s,a,i,o){if(r)return t.flags&256?(t.flags&=-257,s=Gi(Error(V(422))),oa(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=s.fallback,a=t.mode,s=vi({mode:"visible",children:s.children},a,0,null),i=ar(i,a,o,null),i.flags|=2,s.return=t,i.return=t,s.sibling=i,t.child=s,t.mode&1&&Or(t,e.child,null,o),t.child.memoizedState=Uo(o),t.memoizedState=qo,i);if(!(t.mode&1))return oa(e,t,o,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(V(419)),s=Gi(i,s,void 0),oa(e,t,o,s)}if(l=(o&e.childLanes)!==0,jt||l){if(s=at,s!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,vn(e,a),Xt(s,e,a,-1))}return Yl(),s=Gi(Error(V(421))),oa(e,t,o,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Wh.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Rt=Fn(a.nextSibling),Tt=t,Oe=!0,Gt=null,e!==null&&(It[Dt++]=fn,It[Dt++]=mn,It[Dt++]=lr,fn=e.id,mn=e.overflow,lr=t),t=Ol(t,s.children),t.flags|=4096,t)}function id(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Mo(e.return,t,r)}function Vi(e,t,r,s,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=r,i.tailMode=a)}function Df(e,t,r){var s=t.pendingProps,a=s.revealOrder,i=s.tail;if(xt(e,t,s.children,r),s=Ue.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&id(e,r,t);else if(e.tag===19)id(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(De(Ue,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ka(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Vi(t,!1,a,r,i);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ka(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Vi(t,!0,r,null,i);break;case"together":Vi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ea(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,r=qn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=qn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Dh(e,t,r){switch(t.tag){case 3:Af(t),Fr();break;case 5:of(t);break;case 1:kt(t.type)&&Ya(t);break;case 4:_l(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;De(Ga,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(De(Ue,Ue.current&1),t.flags|=128,null):r&t.child.childLanes?If(e,t,r):(De(Ue,Ue.current&1),e=yn(e,t,r),e!==null?e.sibling:null);De(Ue,Ue.current&1);break;case 19:if(s=(r&t.childLanes)!==0,e.flags&128){if(s)return Df(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),De(Ue,Ue.current),s)break;return null;case 22:case 23:return t.lanes=0,_f(e,t,r)}return yn(e,t,r)}var Mf,Qo,zf,Ff;Mf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Qo=function(){};zf=function(e,t,r,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,tr(on.current);var i=null;switch(r){case"input":a=fo(e,a),s=fo(e,s),i=[];break;case"select":a=Ye({},a,{value:void 0}),s=Ye({},s,{value:void 0}),i=[];break;case"textarea":a=po(e,a),s=po(e,s),i=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ua)}go(r,s);var o;r=null;for(u in a)if(!s.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ns.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in s){var c=s[u];if(l=a!=null?a[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(i||(i=[]),i.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Me("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Ff=function(e,t,r,s){r!==s&&(t.flags|=4)};function ts(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Mh(e,t,r){var s=t.pendingProps;switch(kl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return kt(t.type)&&Qa(),ut(t),null;case 3:return s=t.stateNode,$r(),Fe(Nt),Fe(ht),Al(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(aa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gt!==null&&(Jo(Gt),Gt=null))),Qo(e,t),ut(t),null;case 5:Ll(t);var a=tr(Ds.current);if(r=t.type,e!==null&&t.stateNode!=null)zf(e,t,r,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(V(166));return ut(t),null}if(e=tr(on.current),aa(t)){s=t.stateNode,r=t.type;var i=t.memoizedProps;switch(s[sn]=t,s[As]=i,e=(t.mode&1)!==0,r){case"dialog":Me("cancel",s),Me("close",s);break;case"iframe":case"object":case"embed":Me("load",s);break;case"video":case"audio":for(a=0;a<fs.length;a++)Me(fs[a],s);break;case"source":Me("error",s);break;case"img":case"image":case"link":Me("error",s),Me("load",s);break;case"details":Me("toggle",s);break;case"input":pc(s,i),Me("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},Me("invalid",s);break;case"textarea":gc(s,i),Me("invalid",s)}go(r,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&sa(s.textContent,l,e),a=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&sa(s.textContent,l,e),a=["children",""+l]):Ns.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Me("scroll",s)}switch(r){case"input":Xs(s),xc(s,i,!0);break;case"textarea":Xs(s),vc(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Ua)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(r,{is:s.is}):(e=o.createElement(r),r==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,r),e[sn]=t,e[As]=s,Mf(e,t,!1,!1),t.stateNode=e;e:{switch(o=vo(r,s),r){case"dialog":Me("cancel",e),Me("close",e),a=s;break;case"iframe":case"object":case"embed":Me("load",e),a=s;break;case"video":case"audio":for(a=0;a<fs.length;a++)Me(fs[a],e);a=s;break;case"source":Me("error",e),a=s;break;case"img":case"image":case"link":Me("error",e),Me("load",e),a=s;break;case"details":Me("toggle",e),a=s;break;case"input":pc(e,s),a=fo(e,s),Me("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=Ye({},s,{value:void 0}),Me("invalid",e);break;case"textarea":gc(e,s),a=po(e,s),Me("invalid",e);break;default:a=s}go(r,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?hu(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fu(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&ks(e,c):typeof c=="number"&&ks(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ns.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Me("scroll",e):c!=null&&cl(e,i,c,o))}switch(r){case"input":Xs(e),xc(e,s,!1);break;case"textarea":Xs(e),vc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Un(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?Tr(e,!!s.multiple,i,!1):s.defaultValue!=null&&Tr(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ua)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)Ff(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(V(166));if(r=tr(Ds.current),tr(on.current),aa(t)){if(s=t.stateNode,r=t.memoizedProps,s[sn]=t,(i=s.nodeValue!==r)&&(e=Tt,e!==null))switch(e.tag){case 3:sa(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&sa(s.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[sn]=t,t.stateNode=s}return ut(t),null;case 13:if(Fe(Ue),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&Rt!==null&&t.mode&1&&!(t.flags&128))tf(),Fr(),t.flags|=98560,i=!1;else if(i=aa(t),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(V(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(V(317));i[sn]=t}else Fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ut(t),i=!1}else Gt!==null&&(Jo(Gt),Gt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Ue.current&1?rt===0&&(rt=3):Yl())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return $r(),Qo(e,t),e===null&&_s(t.stateNode.containerInfo),ut(t),null;case 10:return Rl(t.type._context),ut(t),null;case 17:return kt(t.type)&&Qa(),ut(t),null;case 19:if(Fe(Ue),i=t.memoizedState,i===null)return ut(t),null;if(s=(t.flags&128)!==0,o=i.rendering,o===null)if(s)ts(i,!1);else{if(rt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ka(e),o!==null){for(t.flags|=128,ts(i,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)i=r,e=s,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return De(Ue,Ue.current&1|2),t.child}e=e.sibling}i.tail!==null&&Xe()>qr&&(t.flags|=128,s=!0,ts(i,!1),t.lanes=4194304)}else{if(!s)if(e=Ka(o),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ts(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Oe)return ut(t),null}else 2*Xe()-i.renderingStartTime>qr&&r!==1073741824&&(t.flags|=128,s=!0,ts(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(r=i.last,r!==null?r.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xe(),t.sibling=null,r=Ue.current,De(Ue,s?r&1|2:r&1),t):(ut(t),null);case 22:case 23:return Ql(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Et&1073741824&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function zh(e,t){switch(kl(t),t.tag){case 1:return kt(t.type)&&Qa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),Fe(Nt),Fe(ht),Al(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ll(t),null;case 13:if(Fe(Ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(Ue),null;case 4:return $r(),null;case 10:return Rl(t.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var la=!1,mt=!1,Fh=typeof WeakSet=="function"?WeakSet:Set,se=null;function Er(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){We(e,t,s)}else r.current=null}function Yo(e,t,r){try{r()}catch(s){We(e,t,s)}}var od=!1;function Oh(e,t){if(Ro=$a,e=qu(),jl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var a=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var o=0,l=-1,c=-1,u=0,f=0,p=e,m=null;t:for(;;){for(var b;p!==r||a!==0&&p.nodeType!==3||(l=o+a),p!==i||s!==0&&p.nodeType!==3||(c=o+s),p.nodeType===3&&(o+=p.nodeValue.length),(b=p.firstChild)!==null;)m=p,p=b;for(;;){if(p===e)break t;if(m===r&&++u===a&&(l=o),m===i&&++f===s&&(c=o),(b=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=b}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(To={focusedElem:e,selectionRange:r},$a=!1,se=t;se!==null;)if(t=se,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,se=e;else for(;se!==null;){t=se;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var N=x.memoizedProps,C=x.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?N:Ht(t.type,N),C);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(E){We(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,se=e;break}se=t.return}return x=od,od=!1,x}function ys(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Yo(t,r,i)}a=a.next}while(a!==s)}}function xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Ho(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Of(e){var t=e.alternate;t!==null&&(e.alternate=null,Of(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[As],delete t[Lo],delete t[wh],delete t[jh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $f(e){return e.tag===5||e.tag===3||e.tag===4}function ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wo(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ua));else if(s!==4&&(e=e.child,e!==null))for(Wo(e,t,r),e=e.sibling;e!==null;)Wo(e,t,r),e=e.sibling}function Go(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Go(e,t,r),e=e.sibling;e!==null;)Go(e,t,r),e=e.sibling}var ot=null,Wt=!1;function kn(e,t,r){for(r=r.child;r!==null;)Bf(e,t,r),r=r.sibling}function Bf(e,t,r){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(li,r)}catch{}switch(r.tag){case 5:mt||Er(r,t);case 6:var s=ot,a=Wt;ot=null,kn(e,t,r),ot=s,Wt=a,ot!==null&&(Wt?(e=ot,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ot.removeChild(r.stateNode));break;case 18:ot!==null&&(Wt?(e=ot,r=r.stateNode,e.nodeType===8?qi(e.parentNode,r):e.nodeType===1&&qi(e,r),Rs(e)):qi(ot,r.stateNode));break;case 4:s=ot,a=Wt,ot=r.stateNode.containerInfo,Wt=!0,kn(e,t,r),ot=s,Wt=a;break;case 0:case 11:case 14:case 15:if(!mt&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Yo(r,t,o),a=a.next}while(a!==s)}kn(e,t,r);break;case 1:if(!mt&&(Er(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(l){We(r,t,l)}kn(e,t,r);break;case 21:kn(e,t,r);break;case 22:r.mode&1?(mt=(s=mt)||r.memoizedState!==null,kn(e,t,r),mt=s):kn(e,t,r);break;default:kn(e,t,r)}}function cd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Fh),t.forEach(function(s){var a=Gh.bind(null,e,s);r.has(s)||(r.add(s),s.then(a,a))})}}function Yt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,Wt=!1;break e;case 3:ot=l.stateNode.containerInfo,Wt=!0;break e;case 4:ot=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(ot===null)throw Error(V(160));Bf(i,o,a),ot=null,Wt=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){We(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qf(t,e),t=t.sibling}function qf(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yt(t,e),Zt(e),s&4){try{ys(3,e,e.return),xi(3,e)}catch(N){We(e,e.return,N)}try{ys(5,e,e.return)}catch(N){We(e,e.return,N)}}break;case 1:Yt(t,e),Zt(e),s&512&&r!==null&&Er(r,r.return);break;case 5:if(Yt(t,e),Zt(e),s&512&&r!==null&&Er(r,r.return),e.flags&32){var a=e.stateNode;try{ks(a,"")}catch(N){We(e,e.return,N)}}if(s&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=r!==null?r.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&cu(a,i),vo(l,o);var u=vo(l,i);for(o=0;o<c.length;o+=2){var f=c[o],p=c[o+1];f==="style"?hu(a,p):f==="dangerouslySetInnerHTML"?fu(a,p):f==="children"?ks(a,p):cl(a,f,p,u)}switch(l){case"input":mo(a,i);break;case"textarea":du(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?Tr(a,!!i.multiple,b,!1):m!==!!i.multiple&&(i.defaultValue!=null?Tr(a,!!i.multiple,i.defaultValue,!0):Tr(a,!!i.multiple,i.multiple?[]:"",!1))}a[As]=i}catch(N){We(e,e.return,N)}}break;case 6:if(Yt(t,e),Zt(e),s&4){if(e.stateNode===null)throw Error(V(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(N){We(e,e.return,N)}}break;case 3:if(Yt(t,e),Zt(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Rs(t.containerInfo)}catch(N){We(e,e.return,N)}break;case 4:Yt(t,e),Zt(e);break;case 13:Yt(t,e),Zt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(ql=Xe())),s&4&&cd(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(mt=(u=mt)||f,Yt(t,e),mt=u):Yt(t,e),Zt(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(se=e,f=e.child;f!==null;){for(p=se=f;se!==null;){switch(m=se,b=m.child,m.tag){case 0:case 11:case 14:case 15:ys(4,m,m.return);break;case 1:Er(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){s=m,r=m.return;try{t=s,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(N){We(s,r,N)}}break;case 5:Er(m,m.return);break;case 22:if(m.memoizedState!==null){ud(p);continue}}b!==null?(b.return=m,se=b):ud(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{a=p.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=mu("display",o))}catch(N){We(e,e.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(N){We(e,e.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Yt(t,e),Zt(e),s&4&&cd(e);break;case 21:break;default:Yt(t,e),Zt(e)}}function Zt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if($f(r)){var s=r;break e}r=r.return}throw Error(V(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(ks(a,""),s.flags&=-33);var i=ld(e);Go(e,i,a);break;case 3:case 4:var o=s.stateNode.containerInfo,l=ld(e);Wo(e,l,o);break;default:throw Error(V(161))}}catch(c){We(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $h(e,t,r){se=e,Uf(e)}function Uf(e,t,r){for(var s=(e.mode&1)!==0;se!==null;){var a=se,i=a.child;if(a.tag===22&&s){var o=a.memoizedState!==null||la;if(!o){var l=a.alternate,c=l!==null&&l.memoizedState!==null||mt;l=la;var u=mt;if(la=o,(mt=c)&&!u)for(se=a;se!==null;)o=se,c=o.child,o.tag===22&&o.memoizedState!==null?fd(a):c!==null?(c.return=o,se=c):fd(a);for(;i!==null;)se=i,Uf(i),i=i.sibling;se=a,la=l,mt=u}dd(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,se=i):dd(e)}}function dd(e){for(;se!==null;){var t=se;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:mt||xi(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!mt)if(r===null)s.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Ht(t.type,r.memoizedProps);s.componentDidUpdate(a,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Gc(t,i,s);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Gc(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Rs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}mt||t.flags&512&&Ho(t)}catch(m){We(t,t.return,m)}}if(t===e){se=null;break}if(r=t.sibling,r!==null){r.return=t.return,se=r;break}se=t.return}}function ud(e){for(;se!==null;){var t=se;if(t===e){se=null;break}var r=t.sibling;if(r!==null){r.return=t.return,se=r;break}se=t.return}}function fd(e){for(;se!==null;){var t=se;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{xi(4,t)}catch(c){We(t,r,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(c){We(t,a,c)}}var i=t.return;try{Ho(t)}catch(c){We(t,i,c)}break;case 5:var o=t.return;try{Ho(t)}catch(c){We(t,o,c)}}}catch(c){We(t,t.return,c)}if(t===e){se=null;break}var l=t.sibling;if(l!==null){l.return=t.return,se=l;break}se=t.return}}var Bh=Math.ceil,ei=wn.ReactCurrentDispatcher,$l=wn.ReactCurrentOwner,Ft=wn.ReactCurrentBatchConfig,Ne=0,at=null,Ze=null,lt=0,Et=0,Rr=Hn(0),rt=0,Os=null,dr=0,gi=0,Bl=0,bs=null,wt=null,ql=0,qr=1/0,dn=null,ti=!1,Vo=null,$n=null,ca=!1,In=null,ni=0,ws=0,Xo=null,Ra=-1,Ta=0;function gt(){return Ne&6?Xe():Ra!==-1?Ra:Ra=Xe()}function Bn(e){return e.mode&1?Ne&2&&lt!==0?lt&-lt:kh.transition!==null?(Ta===0&&(Ta=Cu()),Ta):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:Au(e.type)),e):1}function Xt(e,t,r,s){if(50<ws)throw ws=0,Xo=null,Error(V(185));qs(e,r,s),(!(Ne&2)||e!==at)&&(e===at&&(!(Ne&2)&&(gi|=r),rt===4&&Ln(e,lt)),St(e,s),r===1&&Ne===0&&!(t.mode&1)&&(qr=Xe()+500,mi&&Wn()))}function St(e,t){var r=e.callbackNode;k0(e,t);var s=Oa(e,e===at?lt:0);if(s===0)r!==null&&wc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&wc(r),t===1)e.tag===0?Nh(md.bind(null,e)):Ju(md.bind(null,e)),yh(function(){!(Ne&6)&&Wn()}),r=null;else{switch(Eu(s)){case 1:r=hl;break;case 4:r=ku;break;case 16:r=Fa;break;case 536870912:r=Su;break;default:r=Fa}r=Kf(r,Qf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Qf(e,t){if(Ra=-1,Ta=0,Ne&6)throw Error(V(327));var r=e.callbackNode;if(Ir()&&e.callbackNode!==r)return null;var s=Oa(e,e===at?lt:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=ri(e,s);else{t=s;var a=Ne;Ne|=2;var i=Hf();(at!==e||lt!==t)&&(dn=null,qr=Xe()+500,sr(e,t));do try{Qh();break}catch(l){Yf(e,l)}while(1);El(),ei.current=i,Ne=a,Ze!==null?t=0:(at=null,lt=0,t=rt)}if(t!==0){if(t===2&&(a=No(e),a!==0&&(s=a,t=Ko(e,a))),t===1)throw r=Os,sr(e,0),Ln(e,s),St(e,Xe()),r;if(t===6)Ln(e,s);else{if(a=e.current.alternate,!(s&30)&&!qh(a)&&(t=ri(e,s),t===2&&(i=No(e),i!==0&&(s=i,t=Ko(e,i))),t===1))throw r=Os,sr(e,0),Ln(e,s),St(e,Xe()),r;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(V(345));case 2:Jn(e,wt,dn);break;case 3:if(Ln(e,s),(s&130023424)===s&&(t=ql+500-Xe(),10<t)){if(Oa(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){gt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=_o(Jn.bind(null,e,wt,dn),t);break}Jn(e,wt,dn);break;case 4:if(Ln(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var o=31-Vt(s);i=1<<o,o=t[o],o>a&&(a=o),s&=~i}if(s=a,s=Xe()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Bh(s/1960))-s,10<s){e.timeoutHandle=_o(Jn.bind(null,e,wt,dn),s);break}Jn(e,wt,dn);break;case 5:Jn(e,wt,dn);break;default:throw Error(V(329))}}}return St(e,Xe()),e.callbackNode===r?Qf.bind(null,e):null}function Ko(e,t){var r=bs;return e.current.memoizedState.isDehydrated&&(sr(e,t).flags|=256),e=ri(e,t),e!==2&&(t=wt,wt=r,t!==null&&Jo(t)),e}function Jo(e){wt===null?wt=e:wt.push.apply(wt,e)}function qh(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var a=r[s],i=a.getSnapshot;a=a.value;try{if(!Kt(i(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t){for(t&=~Bl,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Vt(t),s=1<<r;e[r]=-1,t&=~s}}function md(e){if(Ne&6)throw Error(V(327));Ir();var t=Oa(e,0);if(!(t&1))return St(e,Xe()),null;var r=ri(e,t);if(e.tag!==0&&r===2){var s=No(e);s!==0&&(t=s,r=Ko(e,s))}if(r===1)throw r=Os,sr(e,0),Ln(e,t),St(e,Xe()),r;if(r===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jn(e,wt,dn),St(e,Xe()),null}function Ul(e,t){var r=Ne;Ne|=1;try{return e(t)}finally{Ne=r,Ne===0&&(qr=Xe()+500,mi&&Wn())}}function ur(e){In!==null&&In.tag===0&&!(Ne&6)&&Ir();var t=Ne;Ne|=1;var r=Ft.transition,s=Pe;try{if(Ft.transition=null,Pe=1,e)return e()}finally{Pe=s,Ft.transition=r,Ne=t,!(Ne&6)&&Wn()}}function Ql(){Et=Rr.current,Fe(Rr)}function sr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,vh(r)),Ze!==null)for(r=Ze.return;r!==null;){var s=r;switch(kl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Qa();break;case 3:$r(),Fe(Nt),Fe(ht),Al();break;case 5:Ll(s);break;case 4:$r();break;case 13:Fe(Ue);break;case 19:Fe(Ue);break;case 10:Rl(s.type._context);break;case 22:case 23:Ql()}r=r.return}if(at=e,Ze=e=qn(e.current,null),lt=Et=t,rt=0,Os=null,Bl=gi=dr=0,wt=bs=null,er!==null){for(t=0;t<er.length;t++)if(r=er[t],s=r.interleaved,s!==null){r.interleaved=null;var a=s.next,i=r.pending;if(i!==null){var o=i.next;i.next=a,s.next=o}r.pending=s}er=null}return e}function Yf(e,t){do{var r=Ze;try{if(El(),Sa.current=Za,Ja){for(var s=Qe.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Ja=!1}if(cr=0,st=nt=Qe=null,vs=!1,Ms=0,$l.current=null,r===null||r.return===null){rt=1,Os=t,Ze=null;break}e:{var i=e,o=r.return,l=r,c=t;if(t=lt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=ed(o);if(b!==null){b.flags&=-257,td(b,o,l,i,t),b.mode&1&&Zc(i,u,t),t=b,c=u;var x=t.updateQueue;if(x===null){var N=new Set;N.add(c),t.updateQueue=N}else x.add(c);break e}else{if(!(t&1)){Zc(i,u,t),Yl();break e}c=Error(V(426))}}else if(Oe&&l.mode&1){var C=ed(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),td(C,o,l,i,t),Sl(Br(c,l));break e}}i=c=Br(c,l),rt!==4&&(rt=2),bs===null?bs=[i]:bs.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=Rf(i,c,t);Wc(i,v);break e;case 1:l=c;var h=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&($n===null||!$n.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=Tf(i,l,t);Wc(i,E);break e}}i=i.return}while(i!==null)}Gf(r)}catch(j){t=j,Ze===r&&r!==null&&(Ze=r=r.return);continue}break}while(1)}function Hf(){var e=ei.current;return ei.current=Za,e===null?Za:e}function Yl(){(rt===0||rt===3||rt===2)&&(rt=4),at===null||!(dr&268435455)&&!(gi&268435455)||Ln(at,lt)}function ri(e,t){var r=Ne;Ne|=2;var s=Hf();(at!==e||lt!==t)&&(dn=null,sr(e,t));do try{Uh();break}catch(a){Yf(e,a)}while(1);if(El(),Ne=r,ei.current=s,Ze!==null)throw Error(V(261));return at=null,lt=0,rt}function Uh(){for(;Ze!==null;)Wf(Ze)}function Qh(){for(;Ze!==null&&!p0();)Wf(Ze)}function Wf(e){var t=Xf(e.alternate,e,Et);e.memoizedProps=e.pendingProps,t===null?Gf(e):Ze=t,$l.current=null}function Gf(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=zh(r,t),r!==null){r.flags&=32767,Ze=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{rt=6,Ze=null;return}}else if(r=Mh(r,t,Et),r!==null){Ze=r;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);rt===0&&(rt=5)}function Jn(e,t,r){var s=Pe,a=Ft.transition;try{Ft.transition=null,Pe=1,Yh(e,t,r,s)}finally{Ft.transition=a,Pe=s}return null}function Yh(e,t,r,s){do Ir();while(In!==null);if(Ne&6)throw Error(V(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(S0(e,i),e===at&&(Ze=at=null,lt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ca||(ca=!0,Kf(Fa,function(){return Ir(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Ft.transition,Ft.transition=null;var o=Pe;Pe=1;var l=Ne;Ne|=4,$l.current=null,Oh(e,r),qf(r,e),uh(To),$a=!!Ro,To=Ro=null,e.current=r,$h(r),x0(),Ne=l,Pe=o,Ft.transition=i}else e.current=r;if(ca&&(ca=!1,In=e,ni=a),i=e.pendingLanes,i===0&&($n=null),y0(r.stateNode),St(e,Xe()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],s(a.value,{componentStack:a.stack,digest:a.digest});if(ti)throw ti=!1,e=Vo,Vo=null,e;return ni&1&&e.tag!==0&&Ir(),i=e.pendingLanes,i&1?e===Xo?ws++:(ws=0,Xo=e):ws=0,Wn(),null}function Ir(){if(In!==null){var e=Eu(ni),t=Ft.transition,r=Pe;try{if(Ft.transition=null,Pe=16>e?16:e,In===null)var s=!1;else{if(e=In,In=null,ni=0,Ne&6)throw Error(V(331));var a=Ne;for(Ne|=4,se=e.current;se!==null;){var i=se,o=i.child;if(se.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(se=u;se!==null;){var f=se;switch(f.tag){case 0:case 11:case 15:ys(8,f,i)}var p=f.child;if(p!==null)p.return=f,se=p;else for(;se!==null;){f=se;var m=f.sibling,b=f.return;if(Of(f),f===u){se=null;break}if(m!==null){m.return=b,se=m;break}se=b}}}var x=i.alternate;if(x!==null){var N=x.child;if(N!==null){x.child=null;do{var C=N.sibling;N.sibling=null,N=C}while(N!==null)}}se=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,se=o;else e:for(;se!==null;){if(i=se,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ys(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,se=v;break e}se=i.return}}var h=e.current;for(se=h;se!==null;){o=se;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,se=y;else e:for(o=h;se!==null;){if(l=se,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xi(9,l)}}catch(j){We(l,l.return,j)}if(l===o){se=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,se=E;break e}se=l.return}}if(Ne=a,Wn(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(li,e)}catch{}s=!0}return s}finally{Pe=r,Ft.transition=t}}return!1}function hd(e,t,r){t=Br(r,t),t=Rf(e,t,1),e=On(e,t,1),t=gt(),e!==null&&(qs(e,1,t),St(e,t))}function We(e,t,r){if(e.tag===3)hd(e,e,r);else for(;t!==null;){if(t.tag===3){hd(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&($n===null||!$n.has(s))){e=Br(r,e),e=Tf(t,e,1),t=On(t,e,1),e=gt(),t!==null&&(qs(t,1,e),St(t,e));break}}t=t.return}}function Hh(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&r,at===e&&(lt&r)===r&&(rt===4||rt===3&&(lt&130023424)===lt&&500>Xe()-ql?sr(e,0):Bl|=r),St(e,t)}function Vf(e,t){t===0&&(e.mode&1?(t=Zs,Zs<<=1,!(Zs&130023424)&&(Zs=4194304)):t=1);var r=gt();e=vn(e,t),e!==null&&(qs(e,t,r),St(e,r))}function Wh(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Vf(e,r)}function Gh(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(V(314))}s!==null&&s.delete(t),Vf(e,r)}var Xf;Xf=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Nt.current)jt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return jt=!1,Dh(e,t,r);jt=!!(e.flags&131072)}else jt=!1,Oe&&t.flags&1048576&&Zu(t,Wa,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Ea(e,t),e=t.pendingProps;var a=zr(t,ht.current);Ar(t,r),a=Dl(null,t,s,e,a,r);var i=Ml();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(s)?(i=!0,Ya(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Pl(t),a.updater=pi,t.stateNode=a,a._reactInternals=t,Fo(t,s,e,r),t=Bo(null,t,s,!0,i,r)):(t.tag=0,Oe&&i&&Nl(t),xt(null,t,a,r),t=t.child),t;case 16:s=t.elementType;e:{switch(Ea(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=Xh(s),e=Ht(s,e),a){case 0:t=$o(null,t,s,e,r);break e;case 1:t=sd(null,t,s,e,r);break e;case 11:t=nd(null,t,s,e,r);break e;case 14:t=rd(null,t,s,Ht(s.type,e),r);break e}throw Error(V(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),$o(e,t,s,a,r);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),sd(e,t,s,a,r);case 3:e:{if(Af(t),e===null)throw Error(V(387));s=t.pendingProps,i=t.memoizedState,a=i.element,af(e,t),Xa(t,s,null,r);var o=t.memoizedState;if(s=o.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Br(Error(V(423)),t),t=ad(e,t,s,r,a);break e}else if(s!==a){a=Br(Error(V(424)),t),t=ad(e,t,s,r,a);break e}else for(Rt=Fn(t.stateNode.containerInfo.firstChild),Tt=t,Oe=!0,Gt=null,r=rf(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Fr(),s===a){t=yn(e,t,r);break e}xt(e,t,s,r)}t=t.child}return t;case 5:return of(t),e===null&&Do(t),s=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Po(s,a)?o=null:i!==null&&Po(s,i)&&(t.flags|=32),Lf(e,t),xt(e,t,o,r),t.child;case 6:return e===null&&Do(t),null;case 13:return If(e,t,r);case 4:return _l(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Or(t,null,s,r):xt(e,t,s,r),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),nd(e,t,s,a,r);case 7:return xt(e,t,t.pendingProps,r),t.child;case 8:return xt(e,t,t.pendingProps.children,r),t.child;case 12:return xt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,De(Ga,s._currentValue),s._currentValue=o,i!==null)if(Kt(i.value,o)){if(i.children===a.children&&!Nt.current){t=yn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(i.tag===1){c=hn(-1,r&-r),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Mo(i.return,r,t),l.lanes|=r;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(V(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Mo(o,r,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}xt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Ar(t,r),a=Ot(a),s=s(a),t.flags|=1,xt(e,t,s,r),t.child;case 14:return s=t.type,a=Ht(s,t.pendingProps),a=Ht(s.type,a),rd(e,t,s,a,r);case 15:return Pf(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:Ht(s,a),Ea(e,t),t.tag=1,kt(s)?(e=!0,Ya(t)):e=!1,Ar(t,r),Ef(t,s,a),Fo(t,s,a,r),Bo(null,t,s,!0,e,r);case 19:return Df(e,t,r);case 22:return _f(e,t,r)}throw Error(V(156,t.tag))};function Kf(e,t){return Nu(e,t)}function Vh(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,r,s){return new Vh(e,t,r,s)}function Hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xh(e){if(typeof e=="function")return Hl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ul)return 11;if(e===fl)return 14}return 2}function qn(e,t){var r=e.alternate;return r===null?(r=Mt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Pa(e,t,r,s,a,i){var o=2;if(s=e,typeof e=="function")Hl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case vr:return ar(r.children,a,i,t);case dl:o=8,a|=8;break;case oo:return e=Mt(12,r,t,a|2),e.elementType=oo,e.lanes=i,e;case lo:return e=Mt(13,r,t,a),e.elementType=lo,e.lanes=i,e;case co:return e=Mt(19,r,t,a),e.elementType=co,e.lanes=i,e;case iu:return vi(r,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case su:o=10;break e;case au:o=9;break e;case ul:o=11;break e;case fl:o=14;break e;case Rn:o=16,s=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Mt(o,r,t,a),t.elementType=e,t.type=s,t.lanes=i,t}function ar(e,t,r,s){return e=Mt(7,e,s,t),e.lanes=r,e}function vi(e,t,r,s){return e=Mt(22,e,s,t),e.elementType=iu,e.lanes=r,e.stateNode={isHidden:!1},e}function Xi(e,t,r){return e=Mt(6,e,null,t),e.lanes=r,e}function Ki(e,t,r){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kh(e,t,r,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_i(0),this.expirationTimes=_i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_i(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Wl(e,t,r,s,a,i,o,l,c){return e=new Kh(e,t,r,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Mt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pl(i),e}function Jh(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gr,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function Jf(e){if(!e)return Qn;e=e._reactInternals;e:{if(mr(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var r=e.type;if(kt(r))return Ku(e,r,t)}return t}function Zf(e,t,r,s,a,i,o,l,c){return e=Wl(r,s,!0,e,a,i,o,l,c),e.context=Jf(null),r=e.current,s=gt(),a=Bn(r),i=hn(s,a),i.callback=t??null,On(r,i,a),e.current.lanes=a,qs(e,a,s),St(e,s),e}function yi(e,t,r,s){var a=t.current,i=gt(),o=Bn(a);return r=Jf(r),t.context===null?t.context=r:t.pendingContext=r,t=hn(i,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=On(a,t,o),e!==null&&(Xt(e,a,o,i),ka(e,a,o)),o}function si(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Gl(e,t){pd(e,t),(e=e.alternate)&&pd(e,t)}function Zh(){return null}var em=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vl(e){this._internalRoot=e}bi.prototype.render=Vl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));yi(e,t,null,null)};bi.prototype.unmount=Vl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){yi(null,e,null,null)}),t[gn]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<_n.length&&t!==0&&t<_n[r].priority;r++);_n.splice(r,0,e),r===0&&Lu(e)}};function Xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xd(){}function ep(e,t,r,s,a){if(a){if(typeof s=="function"){var i=s;s=function(){var u=si(o);i.call(u)}}var o=Zf(t,s,e,0,null,!1,!1,"",xd);return e._reactRootContainer=o,e[gn]=o.current,_s(e.nodeType===8?e.parentNode:e),ur(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var l=s;s=function(){var u=si(c);l.call(u)}}var c=Wl(e,0,!1,null,null,!1,!1,"",xd);return e._reactRootContainer=c,e[gn]=c.current,_s(e.nodeType===8?e.parentNode:e),ur(function(){yi(t,c,r,s)}),c}function ji(e,t,r,s,a){var i=r._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var c=si(o);l.call(c)}}yi(t,o,e,a)}else o=ep(r,t,e,a,s);return si(o)}Ru=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=us(t.pendingLanes);r!==0&&(pl(t,r|1),St(t,Xe()),!(Ne&6)&&(qr=Xe()+500,Wn()))}break;case 13:ur(function(){var s=vn(e,1);if(s!==null){var a=gt();Xt(s,e,1,a)}}),Gl(e,1)}};xl=function(e){if(e.tag===13){var t=vn(e,134217728);if(t!==null){var r=gt();Xt(t,e,134217728,r)}Gl(e,134217728)}};Tu=function(e){if(e.tag===13){var t=Bn(e),r=vn(e,t);if(r!==null){var s=gt();Xt(r,e,t,s)}Gl(e,t)}};Pu=function(){return Pe};_u=function(e,t){var r=Pe;try{return Pe=e,t()}finally{Pe=r}};bo=function(e,t,r){switch(t){case"input":if(mo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var a=fi(s);if(!a)throw Error(V(90));lu(s),mo(s,a)}}}break;case"textarea":du(e,r);break;case"select":t=r.value,t!=null&&Tr(e,!!r.multiple,t,!1)}};gu=Ul;vu=ur;var tp={usingClientEntryPoint:!1,Events:[Qs,jr,fi,pu,xu,Ul]},ns={findFiberByHostInstance:Zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},np={bundleType:ns.bundleType,version:ns.version,rendererPackageName:ns.rendererPackageName,rendererConfig:ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wu(e),e===null?null:e.stateNode},findFiberByHostInstance:ns.findFiberByHostInstance||Zh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!da.isDisabled&&da.supportsFiber)try{li=da.inject(np),an=da}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tp;_t.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xl(t))throw Error(V(200));return Jh(e,t,null,r)};_t.createRoot=function(e,t){if(!Xl(e))throw Error(V(299));var r=!1,s="",a=em;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Wl(e,1,!1,null,null,r,!1,s,a),e[gn]=t.current,_s(e.nodeType===8?e.parentNode:e),new Vl(t)};_t.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=wu(t),e=e===null?null:e.stateNode,e};_t.flushSync=function(e){return ur(e)};_t.hydrate=function(e,t,r){if(!wi(t))throw Error(V(200));return ji(null,e,t,!0,r)};_t.hydrateRoot=function(e,t,r){if(!Xl(e))throw Error(V(405));var s=r!=null&&r.hydratedSources||null,a=!1,i="",o=em;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Zf(t,null,e,1,r??null,a,!1,i,o),e[gn]=t.current,_s(e),s)for(e=0;e<s.length;e++)r=s[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new bi(t)};_t.render=function(e,t,r){if(!wi(t))throw Error(V(200));return ji(null,e,t,!1,r)};_t.unmountComponentAtNode=function(e){if(!wi(e))throw Error(V(40));return e._reactRootContainer?(ur(function(){ji(null,null,e,!1,function(){e._reactRootContainer=null,e[gn]=null})}),!0):!1};_t.unstable_batchedUpdates=Ul;_t.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!wi(r))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return ji(e,t,r,!1,s)};_t.version="18.3.1-next-f1338f8080-20240426";function tm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tm)}catch(e){console.error(e)}}tm(),eu.exports=_t;var rp=eu.exports,gd=rp;ao.createRoot=gd.createRoot,ao.hydrateRoot=gd.hydrateRoot;const sp="modulepreload",ap=function(e){return"/"+e},vd={},nm=function(t,r,s){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=ap(i),i in vd)return;vd[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let f=a.length-1;f>=0;f--){const p=a[f];if(p.href===i&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":sp,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};var yd="popstate";function ip(e={}){function t(s,a){let{pathname:i,search:o,hash:l}=s.location;return Zo("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(s,a){return typeof a=="string"?a:$s(a)}return lp(t,r,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function op(){return Math.random().toString(36).substring(2,10)}function bd(e,t){return{usr:e.state,key:e.key,idx:t}}function Zo(e,t,r=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Hr(t):t,state:r,key:t&&t.key||s||op()}}function $s({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Hr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function lp(e,t,r,s={}){let{window:a=document.defaultView,v5Compat:i=!1}=s,o=a.history,l="POP",c=null,u=f();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function f(){return(o.state||{idx:null}).idx}function p(){l="POP";let C=f(),v=C==null?null:C-u;u=C,c&&c({action:l,location:N.location,delta:v})}function m(C,v){l="PUSH";let h=Zo(N.location,C,v);r&&r(h,C),u=f()+1;let y=bd(h,u),E=N.createHref(h);try{o.pushState(y,"",E)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;a.location.assign(E)}i&&c&&c({action:l,location:N.location,delta:1})}function b(C,v){l="REPLACE";let h=Zo(N.location,C,v);r&&r(h,C),u=f();let y=bd(h,u),E=N.createHref(h);o.replaceState(y,"",E),i&&c&&c({action:l,location:N.location,delta:0})}function x(C){return cp(C)}let N={get action(){return l},get location(){return e(a,o)},listen(C){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(yd,p),c=C,()=>{a.removeEventListener(yd,p),c=null}},createHref(C){return t(a,C)},createURL:x,encodeLocation(C){let v=x(C);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:b,go(C){return o.go(C)}};return N}function cp(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),$e(r,"No window.location.(origin|href) available to create URL");let s=typeof e=="string"?e:$s(e);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=r+s),new URL(s,r)}function rm(e,t,r="/"){return dp(e,t,r,!1)}function dp(e,t,r,s){let a=typeof t=="string"?Hr(t):t,i=bn(a.pathname||"/",r);if(i==null)return null;let o=sm(e);up(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=jp(i);l=bp(o[c],u,s)}return l}function sm(e,t=[],r=[],s=""){let a=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&($e(c.relativePath.startsWith(s),`Absolute route path "${c.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(s.length));let u=pn([s,c.relativePath]),f=r.concat(c);i.children&&i.children.length>0&&($e(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),sm(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:vp(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let c of am(i.path))a(i,o,c)}),t}function am(e){let t=e.split("/");if(t.length===0)return[];let[r,...s]=t,a=r.endsWith("?"),i=r.replace(/\?$/,"");if(s.length===0)return a?[i,""]:[i];let o=am(s.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),a&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function up(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:yp(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}var fp=/^:[\w-]+$/,mp=3,hp=2,pp=1,xp=10,gp=-2,wd=e=>e==="*";function vp(e,t){let r=e.split("/"),s=r.length;return r.some(wd)&&(s+=gp),t&&(s+=hp),r.filter(a=>!wd(a)).reduce((a,i)=>a+(fp.test(i)?mp:i===""?pp:xp),s)}function yp(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function bp(e,t,r=!1){let{routesMeta:s}=e,a={},i="/",o=[];for(let l=0;l<s.length;++l){let c=s[l],u=l===s.length-1,f=i==="/"?t:t.slice(i.length)||"/",p=ai({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),m=c.route;if(!p&&u&&r&&!s[s.length-1].route.index&&(p=ai({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!p)return null;Object.assign(a,p.params),o.push({params:a,pathname:pn([i,p.pathname]),pathnameBase:Cp(pn([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=pn([i,p.pathnameBase]))}return o}function ai(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,s]=wp(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((u,{paramName:f,isOptional:p},m)=>{if(f==="*"){let x=l[m]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const b=l[m];return p&&!b?u[f]=void 0:u[f]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function wp(e,t=!1,r=!0){Bt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function jp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function bn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=e.charAt(r);return s&&s!=="/"?null:e.slice(r)||"/"}function Np(e,t="/"){let{pathname:r,search:s="",hash:a=""}=typeof e=="string"?Hr(e):e;return{pathname:r?r.startsWith("/")?r:kp(r,t):t,search:Ep(s),hash:Rp(a)}}function kp(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Ji(e,t,r,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Sp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Kl(e){let t=Sp(e);return t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase)}function Jl(e,t,r,s=!1){let a;typeof e=="string"?a=Hr(e):(a={...e},$e(!a.pathname||!a.pathname.includes("?"),Ji("?","pathname","search",a)),$e(!a.pathname||!a.pathname.includes("#"),Ji("#","pathname","hash",a)),$e(!a.search||!a.search.includes("#"),Ji("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=r;else{let p=t.length-1;if(!s&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;a.pathname=m.join("/")}l=p>=0?t[p]:"/"}let c=Np(a,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}var pn=e=>e.join("/").replace(/\/\/+/g,"/"),Cp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ep=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Rp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Tp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var im=["POST","PUT","PATCH","DELETE"];new Set(im);var Pp=["GET",...im];new Set(Pp);var Wr=d.createContext(null);Wr.displayName="DataRouter";var Ni=d.createContext(null);Ni.displayName="DataRouterState";d.createContext(!1);var om=d.createContext({isTransitioning:!1});om.displayName="ViewTransition";var _p=d.createContext(new Map);_p.displayName="Fetchers";var Lp=d.createContext(null);Lp.displayName="Await";var Jt=d.createContext(null);Jt.displayName="Navigation";var Hs=d.createContext(null);Hs.displayName="Location";var qt=d.createContext({outlet:null,matches:[],isDataRoute:!1});qt.displayName="Route";var Zl=d.createContext(null);Zl.displayName="RouteError";function Ap(e,{relative:t}={}){$e(Gr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=d.useContext(Jt),{hash:a,pathname:i,search:o}=Ws(e,{relative:t}),l=i;return r!=="/"&&(l=i==="/"?r:pn([r,i])),s.createHref({pathname:l,search:o,hash:a})}function Gr(){return d.useContext(Hs)!=null}function bt(){return $e(Gr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Hs).location}var lm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cm(e){d.useContext(Jt).static||d.useLayoutEffect(e)}function He(){let{isDataRoute:e}=d.useContext(qt);return e?Vp():Ip()}function Ip(){$e(Gr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(Wr),{basename:t,navigator:r}=d.useContext(Jt),{matches:s}=d.useContext(qt),{pathname:a}=bt(),i=JSON.stringify(Kl(s)),o=d.useRef(!1);return cm(()=>{o.current=!0}),d.useCallback((c,u={})=>{if(Bt(o.current,lm),!o.current)return;if(typeof c=="number"){r.go(c);return}let f=Jl(c,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:pn([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,i,a,e])}var Dp=d.createContext(null);function Mp(e){let t=d.useContext(qt).outlet;return t&&d.createElement(Dp.Provider,{value:e},t)}function zp(){let{matches:e}=d.useContext(qt),t=e[e.length-1];return t?t.params:{}}function Ws(e,{relative:t}={}){let{matches:r}=d.useContext(qt),{pathname:s}=bt(),a=JSON.stringify(Kl(r));return d.useMemo(()=>Jl(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function Fp(e,t){return dm(e,t)}function dm(e,t,r,s){var v;$e(Gr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=d.useContext(Jt),{matches:i}=d.useContext(qt),o=i[i.length-1],l=o?o.params:{},c=o?o.pathname:"/",u=o?o.pathnameBase:"/",f=o&&o.route;{let h=f&&f.path||"";um(c,!f||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let p=bt(),m;if(t){let h=typeof t=="string"?Hr(t):t;$e(u==="/"||((v=h.pathname)==null?void 0:v.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${h.pathname}" was given in the \`location\` prop.`),m=h}else m=p;let b=m.pathname||"/",x=b;if(u!=="/"){let h=u.replace(/^\//,"").split("/");x="/"+b.replace(/^\//,"").split("/").slice(h.length).join("/")}let N=rm(e,{pathname:x});Bt(f||N!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Bt(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=Up(N&&N.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:pn([u,a.encodeLocation?a.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?u:pn([u,a.encodeLocation?a.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,r,s);return t&&C?d.createElement(Hs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},C):C}function Op(){let e=Gp(),t=Tp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},i={padding:"2px 4px",backgroundColor:s},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:i},"ErrorBoundary")," or"," ",d.createElement("code",{style:i},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:a},r):null,o)}var $p=d.createElement(Op,null),Bp=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(qt.Provider,{value:this.props.routeContext},d.createElement(Zl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function qp({routeContext:e,match:t,children:r}){let s=d.useContext(Wr);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(qt.Provider,{value:e},r)}function Up(e,t=[],r=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,i=r==null?void 0:r.errors;if(i!=null){let c=a.findIndex(u=>u.route.id&&(i==null?void 0:i[u.route.id])!==void 0);$e(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let o=!1,l=-1;if(r)for(let c=0;c<a.length;c++){let u=a[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:f,errors:p}=r,m=u.route.loader&&!f.hasOwnProperty(u.route.id)&&(!p||p[u.route.id]===void 0);if(u.route.lazy||m){o=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((c,u,f)=>{let p,m=!1,b=null,x=null;r&&(p=i&&u.route.id?i[u.route.id]:void 0,b=u.route.errorElement||$p,o&&(l<0&&f===0?(um("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,x=null):l===f&&(m=!0,x=u.route.hydrateFallbackElement||null)));let N=t.concat(a.slice(0,f+1)),C=()=>{let v;return p?v=b:m?v=x:u.route.Component?v=d.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=c,d.createElement(qp,{match:u,routeContext:{outlet:c,matches:N,isDataRoute:r!=null},children:v})};return r&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?d.createElement(Bp,{location:r.location,revalidation:r.revalidation,component:b,error:p,children:C(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):C()},null)}function ec(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qp(e){let t=d.useContext(Wr);return $e(t,ec(e)),t}function Yp(e){let t=d.useContext(Ni);return $e(t,ec(e)),t}function Hp(e){let t=d.useContext(qt);return $e(t,ec(e)),t}function tc(e){let t=Hp(e),r=t.matches[t.matches.length-1];return $e(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Wp(){return tc("useRouteId")}function Gp(){var s;let e=d.useContext(Zl),t=Yp("useRouteError"),r=tc("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function Vp(){let{router:e}=Qp("useNavigate"),t=tc("useNavigate"),r=d.useRef(!1);return cm(()=>{r.current=!0}),d.useCallback(async(a,i={})=>{Bt(r.current,lm),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...i}))},[e,t])}var jd={};function um(e,t,r){!t&&!jd[e]&&(jd[e]=!0,Bt(!1,r))}d.memo(Xp);function Xp({routes:e,future:t,state:r}){return dm(e,void 0,r,t)}function Kp({to:e,replace:t,state:r,relative:s}){$e(Gr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=d.useContext(Jt);Bt(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:i}=d.useContext(qt),{pathname:o}=bt(),l=He(),c=Jl(e,Kl(i),o,s==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:r,relative:s})},[l,u,s,t,r]),null}function Jp(e){return Mp(e.context)}function Je(e){$e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Zp({basename:e="/",children:t=null,location:r,navigationType:s="POP",navigator:a,static:i=!1}){$e(!Gr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:o,navigator:a,static:i,future:{}}),[o,a,i]);typeof r=="string"&&(r=Hr(r));let{pathname:c="/",search:u="",hash:f="",state:p=null,key:m="default"}=r,b=d.useMemo(()=>{let x=bn(c,o);return x==null?null:{location:{pathname:x,search:u,hash:f,state:p,key:m},navigationType:s}},[o,c,u,f,p,m,s]);return Bt(b!=null,`<Router basename="${o}"> is not able to match the URL "${c}${u}${f}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:d.createElement(Jt.Provider,{value:l},d.createElement(Hs.Provider,{children:t,value:b}))}function ex({children:e,location:t}){return Fp(el(e),t)}function el(e,t=[]){let r=[];return d.Children.forEach(e,(s,a)=>{if(!d.isValidElement(s))return;let i=[...t,a];if(s.type===d.Fragment){r.push.apply(r,el(s.props.children,i));return}$e(s.type===Je,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$e(!s.props.index||!s.props.children,"An index route cannot have child routes.");let o={id:s.props.id||i.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=el(s.props.children,i)),r.push(o)}),r}var _a="get",La="application/x-www-form-urlencoded";function ki(e){return e!=null&&typeof e.tagName=="string"}function tx(e){return ki(e)&&e.tagName.toLowerCase()==="button"}function nx(e){return ki(e)&&e.tagName.toLowerCase()==="form"}function rx(e){return ki(e)&&e.tagName.toLowerCase()==="input"}function sx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ax(e,t){return e.button===0&&(!t||t==="_self")&&!sx(e)}function tl(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let s=e[r];return t.concat(Array.isArray(s)?s.map(a=>[r,a]):[[r,s]])},[]))}function ix(e,t){let r=tl(e);return t&&t.forEach((s,a)=>{r.has(a)||t.getAll(a).forEach(i=>{r.append(a,i)})}),r}var ua=null;function ox(){if(ua===null)try{new FormData(document.createElement("form"),0),ua=!1}catch{ua=!0}return ua}var lx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zi(e){return e!=null&&!lx.has(e)?(Bt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${La}"`),null):e}function cx(e,t){let r,s,a,i,o;if(nx(e)){let l=e.getAttribute("action");s=l?bn(l,t):null,r=e.getAttribute("method")||_a,a=Zi(e.getAttribute("enctype"))||La,i=new FormData(e)}else if(tx(e)||rx(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(s=c?bn(c,t):null,r=e.getAttribute("formmethod")||l.getAttribute("method")||_a,a=Zi(e.getAttribute("formenctype"))||Zi(l.getAttribute("enctype"))||La,i=new FormData(l,e),!ox()){let{name:u,type:f,value:p}=e;if(f==="image"){let m=u?`${u}.`:"";i.append(`${m}x`,"0"),i.append(`${m}y`,"0")}else u&&i.append(u,p)}}else{if(ki(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=_a,s=null,a=La,o=e}return i&&a==="text/plain"&&(o=i,i=void 0),{action:s,method:r.toLowerCase(),encType:a,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function nc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function dx(e,t,r){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return s.pathname==="/"?s.pathname=`_root.${r}`:t&&bn(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${r}`,s}async function ux(e,t){if(e.id in t)return t[e.id];try{let r=await nm(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fx(e){return e!=null&&typeof e.page=="string"}function mx(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function hx(e,t,r){let s=await Promise.all(e.map(async a=>{let i=t.routes[a.route.id];if(i){let o=await ux(i,r);return o.links?o.links():[]}return[]}));return vx(s.flat(1).filter(mx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Nd(e,t,r,s,a,i){let o=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,l=(c,u)=>{var f;return r[u].pathname!==c.pathname||((f=r[u].route.path)==null?void 0:f.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return i==="assets"?t.filter((c,u)=>o(c,u)||l(c,u)):i==="data"?t.filter((c,u)=>{var p;let f=s.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(o(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let m=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function px(e,t,{includeHydrateFallback:r}={}){return xx(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let i=[a.module];return a.clientActionModule&&(i=i.concat(a.clientActionModule)),a.clientLoaderModule&&(i=i.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(i=i.concat(a.hydrateFallbackModule)),a.imports&&(i=i.concat(a.imports)),i}).flat(1))}function xx(e){return[...new Set(e)]}function gx(e){let t={},r=Object.keys(e).sort();for(let s of r)t[s]=e[s];return t}function vx(e,t){let r=new Set,s=new Set(t);return e.reduce((a,i)=>{if(t&&!fx(i)&&i.as==="script"&&i.href&&s.has(i.href))return a;let l=JSON.stringify(gx(i));return r.has(l)||(r.add(l),a.push({key:l,link:i})),a},[])}function fm(){let e=d.useContext(Wr);return nc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function yx(){let e=d.useContext(Ni);return nc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var rc=d.createContext(void 0);rc.displayName="FrameworkContext";function mm(){let e=d.useContext(rc);return nc(e,"You must render this element inside a <HydratedRouter> element"),e}function bx(e,t){let r=d.useContext(rc),[s,a]=d.useState(!1),[i,o]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:f,onTouchStart:p}=t,m=d.useRef(null);d.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let N=v=>{v.forEach(h=>{o(h.isIntersecting)})},C=new IntersectionObserver(N,{threshold:.5});return m.current&&C.observe(m.current),()=>{C.disconnect()}}},[e]),d.useEffect(()=>{if(s){let N=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(N)}}},[s]);let b=()=>{a(!0)},x=()=>{a(!1),o(!1)};return r?e!=="intent"?[i,m,{}]:[i,m,{onFocus:rs(l,b),onBlur:rs(c,x),onMouseEnter:rs(u,b),onMouseLeave:rs(f,x),onTouchStart:rs(p,b)}]:[!1,m,{}]}function rs(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function wx({page:e,...t}){let{router:r}=fm(),s=d.useMemo(()=>rm(r.routes,e,r.basename),[r.routes,e,r.basename]);return s?d.createElement(Nx,{page:e,matches:s,...t}):null}function jx(e){let{manifest:t,routeModules:r}=mm(),[s,a]=d.useState([]);return d.useEffect(()=>{let i=!1;return hx(e,t,r).then(o=>{i||a(o)}),()=>{i=!0}},[e,t,r]),s}function Nx({page:e,matches:t,...r}){let s=bt(),{manifest:a,routeModules:i}=mm(),{basename:o}=fm(),{loaderData:l,matches:c}=yx(),u=d.useMemo(()=>Nd(e,t,c,a,s,"data"),[e,t,c,a,s]),f=d.useMemo(()=>Nd(e,t,c,a,s,"assets"),[e,t,c,a,s]),p=d.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let x=new Set,N=!1;if(t.forEach(v=>{var y;let h=a.routes[v.route.id];!h||!h.hasLoader||(!u.some(E=>E.route.id===v.route.id)&&v.route.id in l&&((y=i[v.route.id])!=null&&y.shouldRevalidate)||h.hasClientLoader?N=!0:x.add(v.route.id))}),x.size===0)return[];let C=dx(e,o,"data");return N&&x.size>0&&C.searchParams.set("_routes",t.filter(v=>x.has(v.route.id)).map(v=>v.route.id).join(",")),[C.pathname+C.search]},[o,l,s,a,u,t,e,i]),m=d.useMemo(()=>px(f,a),[f,a]),b=jx(f);return d.createElement(d.Fragment,null,p.map(x=>d.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...r})),m.map(x=>d.createElement("link",{key:x,rel:"modulepreload",href:x,...r})),b.map(({key:x,link:N})=>d.createElement("link",{key:x,...N})))}function kx(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var hm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{hm&&(window.__reactRouterVersion="7.7.1")}catch{}function Sx({basename:e,children:t,window:r}){let s=d.useRef();s.current==null&&(s.current=ip({window:r,v5Compat:!0}));let a=s.current,[i,o]=d.useState({action:a.action,location:a.location}),l=d.useCallback(c=>{d.startTransition(()=>o(c))},[o]);return d.useLayoutEffect(()=>a.listen(l),[a,l]),d.createElement(Zp,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:a})}var pm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xm=d.forwardRef(function({onClick:t,discover:r="render",prefetch:s="none",relative:a,reloadDocument:i,replace:o,state:l,target:c,to:u,preventScrollReset:f,viewTransition:p,...m},b){let{basename:x}=d.useContext(Jt),N=typeof u=="string"&&pm.test(u),C,v=!1;if(typeof u=="string"&&N&&(C=u,hm))try{let w=new URL(window.location.href),k=u.startsWith("//")?new URL(w.protocol+u):new URL(u),P=bn(k.pathname,x);k.origin===w.origin&&P!=null?u=P+k.search+k.hash:v=!0}catch{Bt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let h=Ap(u,{relative:a}),[y,E,j]=bx(s,m),T=Tx(u,{replace:o,state:l,target:c,preventScrollReset:f,relative:a,viewTransition:p});function S(w){t&&t(w),w.defaultPrevented||T(w)}let g=d.createElement("a",{...m,...j,href:C||h,onClick:v||i?t:S,ref:kx(b,E),target:c,"data-discover":!N&&r==="render"?"true":void 0});return y&&!N?d.createElement(d.Fragment,null,g,d.createElement(wx,{page:h})):g});xm.displayName="Link";var Cx=d.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:s="",end:a=!1,style:i,to:o,viewTransition:l,children:c,...u},f){let p=Ws(o,{relative:u.relative}),m=bt(),b=d.useContext(Ni),{navigator:x,basename:N}=d.useContext(Jt),C=b!=null&&Ix(p)&&l===!0,v=x.encodeLocation?x.encodeLocation(p).pathname:p.pathname,h=m.pathname,y=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;r||(h=h.toLowerCase(),y=y?y.toLowerCase():null,v=v.toLowerCase()),y&&N&&(y=bn(y,N)||y);const E=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let j=h===v||!a&&h.startsWith(v)&&h.charAt(E)==="/",T=y!=null&&(y===v||!a&&y.startsWith(v)&&y.charAt(v.length)==="/"),S={isActive:j,isPending:T,isTransitioning:C},g=j?t:void 0,w;typeof s=="function"?w=s(S):w=[s,j?"active":null,T?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let k=typeof i=="function"?i(S):i;return d.createElement(xm,{...u,"aria-current":g,className:w,ref:f,style:k,to:o,viewTransition:l},typeof c=="function"?c(S):c)});Cx.displayName="NavLink";var Ex=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:s,replace:a,state:i,method:o=_a,action:l,onSubmit:c,relative:u,preventScrollReset:f,viewTransition:p,...m},b)=>{let x=Lx(),N=Ax(l,{relative:u}),C=o.toLowerCase()==="get"?"get":"post",v=typeof l=="string"&&pm.test(l),h=y=>{if(c&&c(y),y.defaultPrevented)return;y.preventDefault();let E=y.nativeEvent.submitter,j=(E==null?void 0:E.getAttribute("formmethod"))||o;x(E||y.currentTarget,{fetcherKey:t,method:j,navigate:r,replace:a,state:i,relative:u,preventScrollReset:f,viewTransition:p})};return d.createElement("form",{ref:b,method:C,action:N,onSubmit:s?c:h,...m,"data-discover":!v&&e==="render"?"true":void 0})});Ex.displayName="Form";function Rx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gm(e){let t=d.useContext(Wr);return $e(t,Rx(e)),t}function Tx(e,{target:t,replace:r,state:s,preventScrollReset:a,relative:i,viewTransition:o}={}){let l=He(),c=bt(),u=Ws(e,{relative:i});return d.useCallback(f=>{if(ax(f,t)){f.preventDefault();let p=r!==void 0?r:$s(c)===$s(u);l(e,{replace:p,state:s,preventScrollReset:a,relative:i,viewTransition:o})}},[c,l,u,r,s,t,e,a,i,o])}function vm(e){Bt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=d.useRef(tl(e)),r=d.useRef(!1),s=bt(),a=d.useMemo(()=>ix(s.search,r.current?null:t.current),[s.search]),i=He(),o=d.useCallback((l,c)=>{const u=tl(typeof l=="function"?l(new URLSearchParams(a)):l);r.current=!0,i("?"+u,c)},[i,a]);return[a,o]}var Px=0,_x=()=>`__${String(++Px)}__`;function Lx(){let{router:e}=gm("useSubmit"),{basename:t}=d.useContext(Jt),r=Wp();return d.useCallback(async(s,a={})=>{let{action:i,method:o,encType:l,formData:c,body:u}=cx(s,t);if(a.navigate===!1){let f=a.fetcherKey||_x();await e.fetch(f,r,a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:c,body:u,formMethod:a.method||o,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function Ax(e,{relative:t}={}){let{basename:r}=d.useContext(Jt),s=d.useContext(qt);$e(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),i={...Ws(e||".",{relative:t})},o=bt();if(e==null){i.search=o.search;let l=new URLSearchParams(i.search),c=l.getAll("index");if(c.some(f=>f==="")){l.delete("index"),c.filter(p=>p).forEach(p=>l.append("index",p));let f=l.toString();i.search=f?`?${f}`:""}}return(!e||e===".")&&a.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:pn([r,i.pathname])),$s(i)}function Ix(e,{relative:t}={}){let r=d.useContext(om);$e(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=gm("useViewTransitionState"),a=Ws(e,{relative:t});if(!r.isTransitioning)return!1;let i=bn(r.currentLocation.pathname,s)||r.currentLocation.pathname,o=bn(r.nextLocation.pathname,s)||r.nextLocation.pathname;return ai(a.pathname,o)!=null||ai(a.pathname,i)!=null}function Dx({size:e=22,spinning:t=!1}){return n.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[n.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),n.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),n.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),n.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),n.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),n.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Mx(){const e=He(),{pathname:t}=bt(),r=d.useRef({}),s=d.useRef({}),[a,i]=d.useState(!1),o=d.useRef(null),l=d.useRef({});d.useEffect(()=>{l.current={tap:new Audio("/sounds/tap.mp3"),whoosh:new Audio("/sounds/whoosh.mp3")},Object.values(l.current).forEach(j=>{j.volume=.5})},[]);const c=j=>{const T=l.current[j];T&&(T.currentTime=0,T.play().catch(()=>{}))},u=j=>{if(navigator.vibrate)switch(j){case"light":navigator.vibrate(10);break;case"medium":navigator.vibrate(20);break;case"heavy":navigator.vibrate(40);break;case"double":navigator.vibrate([20,50,20]);break;case"success":navigator.vibrate([10,50,10,50,10]);break;default:navigator.vibrate(15)}};d.useCallback(()=>{var j;if(["/","/play","/swipe","/profile"].includes(t)){const T=((j=o.current)==null?void 0:j.scrollTop)||0,S=window.scrollY||window.pageYOffset||0,g=T>0?T:S;console.log(`Saving scroll for ${t}: main=${T}, window=${S}, saved=${g}`),r.current[t]=g}},[t]),d.useEffect(()=>{let j=null;const T=()=>{j&&cancelAnimationFrame(j),j=requestAnimationFrame(()=>{var g;if(["/","/play","/swipe","/profile"].includes(t)){const w=((g=o.current)==null?void 0:g.scrollTop)||0,k=window.scrollY||window.pageYOffset||0,P=w>0?w:k;r.current[t]=P,console.log(`Scroll position updated for ${t}: ${P}`)}})};window.addEventListener("scroll",T,{passive:!0});const S=o.current;return S&&S.addEventListener("scroll",T,{passive:!0}),()=>{j&&cancelAnimationFrame(j),window.removeEventListener("scroll",T),S&&S.removeEventListener("scroll",T)}},[t]),d.useEffect(()=>{if(o.current&&o.current.classList.add("navigating"),["/profile/","/quiz/","/practice/","/play/classic","/settings","/about"].some(S=>t.startsWith(S)))window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20);else{const S=r.current[t];if(console.log(`Attempting to restore scroll for ${t}: ${S}`),S!=null&&S>0){const g=(w=0)=>{w>=5||(o.current?(o.current.scrollTop=S,setTimeout(()=>{var P;const k=((P=o.current)==null?void 0:P.scrollTop)||0;Math.abs(k-S)>10?(window.scrollTo(0,S),setTimeout(()=>{const M=window.scrollY||window.pageYOffset||0;console.log(`Restore attempt ${w+1}: main=${k}, window=${M}, target=${S}`),Math.abs(M-S)>10&&Math.abs(k-S)>10&&g(w+1)},20)):console.log(`Successfully restored scroll to ${k}`)},20)):window.scrollTo(0,S))};g(0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}else window.scrollTo(0,0),o.current&&(o.current.scrollTop=0),setTimeout(()=>{o.current&&o.current.classList.remove("navigating")},20)}},[t]);const[f,p]=d.useState(!1),[m,b]=d.useState({open:!1,go:null}),[x,N]=d.useState(!1);d.useEffect(()=>{const j=()=>{N(document.body.classList.contains("hide-bottom-nav"))};j();const T=new MutationObserver(j);return T.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>T.disconnect()},[]),d.useEffect(()=>{const j=new MutationObserver(()=>{p(document.body.classList.contains("modal-open"))});return j.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>j.disconnect()},[]);const v=f||x||[/^\/quiz\//,/^\/practice\//,/^\/profile\//,/^\/play\/classic/].some(j=>j.test(t)),h=j=>j==="/"?t==="/":t.startsWith(j),y=d.useCallback(()=>{console.log("Scrolling to top"),window.scrollTo({top:0,behavior:"smooth"}),o.current&&o.current.scrollTo({top:0,behavior:"smooth"}),document.documentElement.scrollTop=0,document.body.scrollTop=0},[]),E=({path:j,icon:T,label:S,emoji:g})=>{const w=h(j),[k,P]=d.useState(!1),M=d.useCallback(()=>{var $;const Y=Date.now();if(w){const R=s.current[j]||0;console.log(`Active tab clicked. Time since last tap: ${Y-R}ms`),Y-R<500?(console.log("Double tap detected!"),y(),c("tap"),u("double"),s.current[j]=0):s.current[j]=Y;return}if(["/","/play","/swipe","/profile"].includes(t)){const R=(($=o.current)==null?void 0:$.scrollTop)||0,_=window.scrollY||window.pageYOffset||0,F=R>0?R:_;console.log(`Manually saving scroll before navigation from ${t}: ${F}`),r.current[t]=F}const ee=s.current[j]||0;if(Y-ee<500){console.log("Double tap on inactive tab - navigating and scrolling to top"),r.current[j]=0,j==="/play"?(i(!0),c("whoosh"),u("double"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1),setTimeout(y,100)},200)):(c("tap"),u("double"),e(j),setTimeout(y,100)),s.current[j]=0;return}s.current[j]=Y,P(!0),setTimeout(()=>P(!1),600);const H=()=>{if(j==="/play"){i(!0),c("whoosh"),u("medium"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),i(!1)},200);return}c("tap"),u("light"),e(j)};if(localStorage.getItem("qp_in_question")==="true"){b({open:!0,go:H});return}H()},[w,j,t,e,y,c,u]);return n.jsxs("button",{type:"button",onClick:M,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${w?"scale-110":"scale-100 hover:scale-105"}
          ${k?"animate-bounce":""}`,"aria-current":w?"page":void 0,children:[w&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),n.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),n.jsx("div",{className:`leading-none text-2xl transition-transform ${w?"scale-125":""} ${j==="/play"&&a?"animate-spin":""}`,children:g||T}),n.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${w?"text-white":"text-base-muted/80"}`,children:S})]})};return n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("style",{children:`
        .hide-bottom-nav nav[role="navigation"] {
         display: none !important;
        }
        main.navigating {
          visibility: hidden;
        }
        main {
          scroll-behavior: auto !important;
        }
      `}),n.jsx("main",{ref:o,className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:v||document.body.classList.contains("hide-bottom-nav")?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",paddingBottom:v||document.body.classList.contains("hide-bottom-nav")?0:void 0,overflowY:"auto"},children:n.jsx(Jp,{})}),m.open&&n.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[n.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[n.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),n.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),n.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{u("light"),b({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),n.jsx("button",{onClick:()=>{u("medium");const j=m.go;b({open:!1,go:null}),j==null||j()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),n.jsx("style",{children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!v&&n.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[n.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),n.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),n.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[n.jsx(E,{path:"/",emoji:"🏠",label:"Home"}),n.jsx(E,{path:"/play",icon:n.jsx(Dx,{size:26,spinning:a}),label:"Play"}),n.jsx(E,{path:"/swipe",emoji:"📚",label:"Swipe"}),n.jsx(E,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},ii.apply(null,arguments)}function zx(e,t){if(e==null)return{};var r={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;r[s]=e[s]}return r}function Fx(e){d.useEffect(e,[])}var Ox=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function zt(e,t){var r=t===void 0?{}:t,s=r.volume,a=s===void 0?1:s,i=r.playbackRate,o=i===void 0?1:i,l=r.soundEnabled,c=l===void 0?!0:l,u=r.interrupt,f=u===void 0?!1:u,p=r.onload,m=zx(r,Ox),b=pt.useRef(null),x=pt.useRef(!1),N=pt.useState(null),C=N[0],v=N[1],h=pt.useState(null),y=h[0],E=h[1],j=function(){typeof p=="function"&&p.call(this),x.current&&v(this.duration()*1e3),E(this)};Fx(function(){return nm(()=>import("./howler-8fe88a66.js").then(k=>k.h),[]).then(function(k){if(!x.current){var P;b.current=(P=k.Howl)!==null&&P!==void 0?P:k.default.Howl,x.current=!0,new b.current(ii({src:Array.isArray(e)?e:[e],volume:a,rate:o,onload:j},m))}}),function(){x.current=!1}}),pt.useEffect(function(){b.current&&y&&E(new b.current(ii({src:Array.isArray(e)?e:[e],volume:a,onload:j},m)))},[JSON.stringify(e)]),pt.useEffect(function(){y&&(y.volume(a),m.sprite||y.rate(o))},[y,a,o]);var T=pt.useCallback(function(k){typeof k>"u"&&(k={}),!(!y||!c&&!k.forceSoundEnabled)&&(f&&y.stop(),k.playbackRate&&y.rate(k.playbackRate),y.play(k.id))},[y,c,f]),S=pt.useCallback(function(k){y&&y.stop(k)},[y]),g=pt.useCallback(function(k){y&&y.pause(k)},[y]),w=[T,{sound:y,stop:S,pause:g,duration:C}];return w}var ym={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((r,s)=>{e.exports=s()})(_m,function r(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},a,i=!s.document&&!!s.postMessage,o=s.IS_PAPA_WORKER||!1,l={},c=0,u={};function f(g){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(w){var k=j(w);k.chunkSize=parseInt(k.chunkSize),w.step||w.chunk||(k.chunkSize=null),this._handle=new N(k),(this._handle.streamer=this)._config=k}).call(this,g),this.parseChunk=function(w,k){var P=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<P){let Y=this._config.newline;Y||(M=this._config.quoteChar||'"',Y=this._handle.guessLineEndings(w,M)),w=[...w.split(Y).slice(P)].join(Y)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(M=this._config.beforeFirstChunk(w))!==void 0&&(w=M),this.isFirstChunk=!1,this._halted=!1;var P=this._partialLine+w,M=(this._partialLine="",this._handle.parse(P,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(w=M.meta.cursor,P=(this._finished||(this._partialLine=P.substring(w-this._baseIndex),this._baseIndex=w),M&&M.data&&(this._rowCount+=M.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),o)s.postMessage({results:M,workerId:u.WORKER_ID,finished:P});else if(S(this._config.chunk)&&!k){if(this._config.chunk(M,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=M=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(M.data),this._completeResults.errors=this._completeResults.errors.concat(M.errors),this._completeResults.meta=M.meta),this._completed||!P||!S(this._config.complete)||M&&M.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),P||M&&M.meta.paused||this._nextChunk(),M}this._halted=!0},this._sendError=function(w){S(this._config.error)?this._config.error(w):o&&this._config.error&&s.postMessage({workerId:u.WORKER_ID,error:w,finished:!1})}}function p(g){var w;(g=g||{}).chunkSize||(g.chunkSize=u.RemoteChunkSize),f.call(this,g),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(k){this._input=k,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(w=new XMLHttpRequest,this._config.withCredentials&&(w.withCredentials=this._config.withCredentials),i||(w.onload=T(this._chunkLoaded,this),w.onerror=T(this._chunkError,this)),w.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var k,P=this._config.downloadRequestHeaders;for(k in P)w.setRequestHeader(k,P[k])}var M;this._config.chunkSize&&(M=this._start+this._config.chunkSize-1,w.setRequestHeader("Range","bytes="+this._start+"-"+M));try{w.send(this._config.downloadRequestBody)}catch(Y){this._chunkError(Y.message)}i&&w.status===0&&this._chunkError()}},this._chunkLoaded=function(){w.readyState===4&&(w.status<200||400<=w.status?this._chunkError():(this._start+=this._config.chunkSize||w.responseText.length,this._finished=!this._config.chunkSize||this._start>=(k=>(k=k.getResponseHeader("Content-Range"))!==null?parseInt(k.substring(k.lastIndexOf("/")+1)):-1)(w),this.parseChunk(w.responseText)))},this._chunkError=function(k){k=w.statusText||k,this._sendError(new Error(k))}}function m(g){(g=g||{}).chunkSize||(g.chunkSize=u.LocalChunkSize),f.call(this,g);var w,k,P=typeof FileReader<"u";this.stream=function(M){this._input=M,k=M.slice||M.webkitSlice||M.mozSlice,P?((w=new FileReader).onload=T(this._chunkLoaded,this),w.onerror=T(this._chunkError,this)):w=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var M=this._input,Y=(this._config.chunkSize&&(Y=Math.min(this._start+this._config.chunkSize,this._input.size),M=k.call(M,this._start,Y)),w.readAsText(M,this._config.encoding));P||this._chunkLoaded({target:{result:Y}})},this._chunkLoaded=function(M){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(M.target.result)},this._chunkError=function(){this._sendError(w.error)}}function b(g){var w;f.call(this,g=g||{}),this.stream=function(k){return w=k,this._nextChunk()},this._nextChunk=function(){var k,P;if(!this._finished)return k=this._config.chunkSize,w=k?(P=w.substring(0,k),w.substring(k)):(P=w,""),this._finished=!w,this.parseChunk(P)}}function x(g){f.call(this,g=g||{});var w=[],k=!0,P=!1;this.pause=function(){f.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){f.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(M){this._input=M,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){P&&w.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),w.length?this.parseChunk(w.shift()):k=!0},this._streamData=T(function(M){try{w.push(typeof M=="string"?M:M.toString(this._config.encoding)),k&&(k=!1,this._checkIsFinished(),this.parseChunk(w.shift()))}catch(Y){this._streamError(Y)}},this),this._streamError=T(function(M){this._streamCleanUp(),this._sendError(M)},this),this._streamEnd=T(function(){this._streamCleanUp(),P=!0,this._streamData("")},this),this._streamCleanUp=T(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function N(g){var w,k,P,M,Y=Math.pow(2,53),ee=-Y,H=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Q=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,$=this,R=0,_=0,F=!1,L=!1,I=[],A={data:[],errors:[],meta:{}};function X(D){return g.skipEmptyLines==="greedy"?D.join("").trim()==="":D.length===1&&D[0].length===0}function ne(){if(A&&P&&(U("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),P=!1),g.skipEmptyLines&&(A.data=A.data.filter(function(B){return!X(B)})),re()){let B=function(Z,ae){S(g.transformHeader)&&(Z=g.transformHeader(Z,ae)),I.push(Z)};if(A)if(Array.isArray(A.data[0])){for(var D=0;re()&&D<A.data.length;D++)A.data[D].forEach(B);A.data.splice(0,1)}else A.data.forEach(B)}function K(B,Z){for(var ae=g.header?{}:[],ce=0;ce<B.length;ce++){var q=ce,G=B[ce],G=((W,O)=>(te=>(g.dynamicTypingFunction&&g.dynamicTyping[te]===void 0&&(g.dynamicTyping[te]=g.dynamicTypingFunction(te)),(g.dynamicTyping[te]||g.dynamicTyping)===!0))(W)?O==="true"||O==="TRUE"||O!=="false"&&O!=="FALSE"&&((te=>{if(H.test(te)&&(te=parseFloat(te),ee<te&&te<Y))return 1})(O)?parseFloat(O):Q.test(O)?new Date(O):O===""?null:O):O)(q=g.header?ce>=I.length?"__parsed_extra":I[ce]:q,G=g.transform?g.transform(G,q):G);q==="__parsed_extra"?(ae[q]=ae[q]||[],ae[q].push(G)):ae[q]=G}return g.header&&(ce>I.length?U("FieldMismatch","TooManyFields","Too many fields: expected "+I.length+" fields but parsed "+ce,_+Z):ce<I.length&&U("FieldMismatch","TooFewFields","Too few fields: expected "+I.length+" fields but parsed "+ce,_+Z)),ae}var z;A&&(g.header||g.dynamicTyping||g.transform)&&(z=1,!A.data.length||Array.isArray(A.data[0])?(A.data=A.data.map(K),z=A.data.length):A.data=K(A.data,0),g.header&&A.meta&&(A.meta.fields=I),_+=z)}function re(){return g.header&&I.length===0}function U(D,K,z,B){D={type:D,code:K,message:z},B!==void 0&&(D.row=B),A.errors.push(D)}S(g.step)&&(M=g.step,g.step=function(D){A=D,re()?ne():(ne(),A.data.length!==0&&(R+=D.data.length,g.preview&&R>g.preview?k.abort():(A.data=A.data[0],M(A,$))))}),this.parse=function(D,K,z){var B=g.quoteChar||'"',B=(g.newline||(g.newline=this.guessLineEndings(D,B)),P=!1,g.delimiter?S(g.delimiter)&&(g.delimiter=g.delimiter(D),A.meta.delimiter=g.delimiter):((B=((Z,ae,ce,q,G)=>{var W,O,te,de;G=G||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var je=0;je<G.length;je++){for(var Le,Be=G[je],Ee=0,me=0,he=0,be=(te=void 0,new v({comments:q,delimiter:Be,newline:ae,preview:10}).parse(Z)),ke=0;ke<be.data.length;ke++)ce&&X(be.data[ke])?he++:(Le=be.data[ke].length,me+=Le,te===void 0?te=Le:0<Le&&(Ee+=Math.abs(Le-te),te=Le));0<be.data.length&&(me/=be.data.length-he),(O===void 0||Ee<=O)&&(de===void 0||de<me)&&1.99<me&&(O=Ee,W=Be,de=me)}return{successful:!!(g.delimiter=W),bestDelimiter:W}})(D,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess)).successful?g.delimiter=B.bestDelimiter:(P=!0,g.delimiter=u.DefaultDelimiter),A.meta.delimiter=g.delimiter),j(g));return g.preview&&g.header&&B.preview++,w=D,k=new v(B),A=k.parse(w,K,z),ne(),F?{meta:{paused:!0}}:A||{meta:{paused:!1}}},this.paused=function(){return F},this.pause=function(){F=!0,k.abort(),w=S(g.chunk)?"":w.substring(k.getCharIndex())},this.resume=function(){$.streamer._halted?(F=!1,$.streamer.parseChunk(w,!0)):setTimeout($.resume,3)},this.aborted=function(){return L},this.abort=function(){L=!0,k.abort(),A.meta.aborted=!0,S(g.complete)&&g.complete(A),w=""},this.guessLineEndings=function(Z,B){Z=Z.substring(0,1048576);var B=new RegExp(C(B)+"([^]*?)"+C(B),"gm"),z=(Z=Z.replace(B,"")).split("\r"),B=Z.split(`
`),Z=1<B.length&&B[0].length<z[0].length;if(z.length===1||Z)return`
`;for(var ae=0,ce=0;ce<z.length;ce++)z[ce][0]===`
`&&ae++;return ae>=z.length/2?`\r
`:"\r"}}function C(g){return g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(g){var w=(g=g||{}).delimiter,k=g.newline,P=g.comments,M=g.step,Y=g.preview,ee=g.fastMode,H=null,Q=!1,$=g.quoteChar==null?'"':g.quoteChar,R=$;if(g.escapeChar!==void 0&&(R=g.escapeChar),(typeof w!="string"||-1<u.BAD_DELIMITERS.indexOf(w))&&(w=","),P===w)throw new Error("Comment character same as delimiter");P===!0?P="#":(typeof P!="string"||-1<u.BAD_DELIMITERS.indexOf(P))&&(P=!1),k!==`
`&&k!=="\r"&&k!==`\r
`&&(k=`
`);var _=0,F=!1;this.parse=function(L,I,A){if(typeof L!="string")throw new Error("Input must be a string");var X=L.length,ne=w.length,re=k.length,U=P.length,D=S(M),K=[],z=[],B=[],Z=_=0;if(!L)return Ee();if(ee||ee!==!1&&L.indexOf($)===-1){for(var ae=L.split(k),ce=0;ce<ae.length;ce++){if(B=ae[ce],_+=B.length,ce!==ae.length-1)_+=k.length;else if(A)return Ee();if(!P||B.substring(0,U)!==P){if(D){if(K=[],de(B.split(w)),me(),F)return Ee()}else de(B.split(w));if(Y&&Y<=ce)return K=K.slice(0,Y),Ee(!0)}}return Ee()}for(var q=L.indexOf(w,_),G=L.indexOf(k,_),W=new RegExp(C(R)+C($),"g"),O=L.indexOf($,_);;)if(L[_]===$)for(O=_,_++;;){if((O=L.indexOf($,O+1))===-1)return A||z.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:K.length,index:_}),Le();if(O===X-1)return Le(L.substring(_,O).replace(W,$));if($===R&&L[O+1]===R)O++;else if($===R||O===0||L[O-1]!==R){q!==-1&&q<O+1&&(q=L.indexOf(w,O+1));var te=je((G=G!==-1&&G<O+1?L.indexOf(k,O+1):G)===-1?q:Math.min(q,G));if(L.substr(O+1+te,ne)===w){B.push(L.substring(_,O).replace(W,$)),L[_=O+1+te+ne]!==$&&(O=L.indexOf($,_)),q=L.indexOf(w,_),G=L.indexOf(k,_);break}if(te=je(G),L.substring(O+1+te,O+1+te+re)===k){if(B.push(L.substring(_,O).replace(W,$)),Be(O+1+te+re),q=L.indexOf(w,_),O=L.indexOf($,_),D&&(me(),F))return Ee();if(Y&&K.length>=Y)return Ee(!0);break}z.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:K.length,index:_}),O++}}else if(P&&B.length===0&&L.substring(_,_+U)===P){if(G===-1)return Ee();_=G+re,G=L.indexOf(k,_),q=L.indexOf(w,_)}else if(q!==-1&&(q<G||G===-1))B.push(L.substring(_,q)),_=q+ne,q=L.indexOf(w,_);else{if(G===-1)break;if(B.push(L.substring(_,G)),Be(G+re),D&&(me(),F))return Ee();if(Y&&K.length>=Y)return Ee(!0)}return Le();function de(he){K.push(he),Z=_}function je(he){var be=0;return be=he!==-1&&(he=L.substring(O+1,he))&&he.trim()===""?he.length:be}function Le(he){return A||(he===void 0&&(he=L.substring(_)),B.push(he),_=X,de(B),D&&me()),Ee()}function Be(he){_=he,de(B),B=[],G=L.indexOf(k,_)}function Ee(he){if(g.header&&!I&&K.length&&!Q){var be=K[0],ke=Object.create(null),qe=new Set(be);let Ut=!1;for(let et=0;et<be.length;et++){let we=be[et];if(ke[we=S(g.transformHeader)?g.transformHeader(we,et):we]){let Ae,Qt=ke[we];for(;Ae=we+"_"+Qt,Qt++,qe.has(Ae););qe.add(Ae),be[et]=Ae,ke[we]++,Ut=!0,(H=H===null?{}:H)[Ae]=we}else ke[we]=1,be[et]=we;qe.add(we)}Ut&&console.warn("Duplicate headers found and renamed."),Q=!0}return{data:K,errors:z,meta:{delimiter:w,linebreak:k,aborted:F,truncated:!!he,cursor:Z+(I||0),renamedHeaders:H}}}function me(){M(Ee()),K=[],z=[]}},this.abort=function(){F=!0},this.getCharIndex=function(){return _}}function h(g){var w=g.data,k=l[w.workerId],P=!1;if(w.error)k.userError(w.error,w.file);else if(w.results&&w.results.data){var M={abort:function(){P=!0,y(w.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(S(k.userStep)){for(var Y=0;Y<w.results.data.length&&(k.userStep({data:w.results.data[Y],errors:w.results.errors,meta:w.results.meta},M),!P);Y++);delete w.results}else S(k.userChunk)&&(k.userChunk(w.results,M,w.file),delete w.results)}w.finished&&!P&&y(w.workerId,w.results)}function y(g,w){var k=l[g];S(k.userComplete)&&k.userComplete(w),k.terminate(),delete l[g]}function E(){throw new Error("Not implemented.")}function j(g){if(typeof g!="object"||g===null)return g;var w,k=Array.isArray(g)?[]:{};for(w in g)k[w]=j(g[w]);return k}function T(g,w){return function(){g.apply(w,arguments)}}function S(g){return typeof g=="function"}return u.parse=function(g,w){var k=(w=w||{}).dynamicTyping||!1;if(S(k)&&(w.dynamicTypingFunction=k,k={}),w.dynamicTyping=k,w.transform=!!S(w.transform)&&w.transform,!w.worker||!u.WORKERS_SUPPORTED)return k=null,u.NODE_STREAM_INPUT,typeof g=="string"?(g=(P=>P.charCodeAt(0)!==65279?P:P.slice(1))(g),k=new(w.download?p:b)(w)):g.readable===!0&&S(g.read)&&S(g.on)?k=new x(w):(s.File&&g instanceof File||g instanceof Object)&&(k=new m(w)),k.stream(g);(k=(()=>{var P;return!!u.WORKERS_SUPPORTED&&(P=(()=>{var M=s.URL||s.webkitURL||null,Y=r.toString();return u.BLOB_URL||(u.BLOB_URL=M.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",Y,")();"],{type:"text/javascript"})))})(),(P=new s.Worker(P)).onmessage=h,P.id=c++,l[P.id]=P)})()).userStep=w.step,k.userChunk=w.chunk,k.userComplete=w.complete,k.userError=w.error,w.step=S(w.step),w.chunk=S(w.chunk),w.complete=S(w.complete),w.error=S(w.error),delete w.worker,k.postMessage({input:g,config:w,workerId:k.id})},u.unparse=function(g,w){var k=!1,P=!0,M=",",Y=`\r
`,ee='"',H=ee+ee,Q=!1,$=null,R=!1,_=((()=>{if(typeof w=="object"){if(typeof w.delimiter!="string"||u.BAD_DELIMITERS.filter(function(I){return w.delimiter.indexOf(I)!==-1}).length||(M=w.delimiter),typeof w.quotes!="boolean"&&typeof w.quotes!="function"&&!Array.isArray(w.quotes)||(k=w.quotes),typeof w.skipEmptyLines!="boolean"&&typeof w.skipEmptyLines!="string"||(Q=w.skipEmptyLines),typeof w.newline=="string"&&(Y=w.newline),typeof w.quoteChar=="string"&&(ee=w.quoteChar),typeof w.header=="boolean"&&(P=w.header),Array.isArray(w.columns)){if(w.columns.length===0)throw new Error("Option columns is empty");$=w.columns}w.escapeChar!==void 0&&(H=w.escapeChar+ee),w.escapeFormulae instanceof RegExp?R=w.escapeFormulae:typeof w.escapeFormulae=="boolean"&&w.escapeFormulae&&(R=/^[=+\-@\t\r].*$/)}})(),new RegExp(C(ee),"g"));if(typeof g=="string"&&(g=JSON.parse(g)),Array.isArray(g)){if(!g.length||Array.isArray(g[0]))return F(null,g,Q);if(typeof g[0]=="object")return F($||Object.keys(g[0]),g,Q)}else if(typeof g=="object")return typeof g.data=="string"&&(g.data=JSON.parse(g.data)),Array.isArray(g.data)&&(g.fields||(g.fields=g.meta&&g.meta.fields||$),g.fields||(g.fields=Array.isArray(g.data[0])?g.fields:typeof g.data[0]=="object"?Object.keys(g.data[0]):[]),Array.isArray(g.data[0])||typeof g.data[0]=="object"||(g.data=[g.data])),F(g.fields||[],g.data||[],Q);throw new Error("Unable to serialize unrecognized input");function F(I,A,X){var ne="",re=(typeof I=="string"&&(I=JSON.parse(I)),typeof A=="string"&&(A=JSON.parse(A)),Array.isArray(I)&&0<I.length),U=!Array.isArray(A[0]);if(re&&P){for(var D=0;D<I.length;D++)0<D&&(ne+=M),ne+=L(I[D],D);0<A.length&&(ne+=Y)}for(var K=0;K<A.length;K++){var z=(re?I:A[K]).length,B=!1,Z=re?Object.keys(A[K]).length===0:A[K].length===0;if(X&&!re&&(B=X==="greedy"?A[K].join("").trim()==="":A[K].length===1&&A[K][0].length===0),X==="greedy"&&re){for(var ae=[],ce=0;ce<z;ce++){var q=U?I[ce]:ce;ae.push(A[K][q])}B=ae.join("").trim()===""}if(!B){for(var G=0;G<z;G++){0<G&&!Z&&(ne+=M);var W=re&&U?I[G]:G;ne+=L(A[K][W],G)}K<A.length-1&&(!X||0<z&&!Z)&&(ne+=Y)}}return ne}function L(I,A){var X,ne;return I==null?"":I.constructor===Date?JSON.stringify(I).slice(1,25):(ne=!1,R&&typeof I=="string"&&R.test(I)&&(I="'"+I,ne=!0),X=I.toString().replace(_,H),(ne=ne||k===!0||typeof k=="function"&&k(I,A)||Array.isArray(k)&&k[A]||((re,U)=>{for(var D=0;D<U.length;D++)if(-1<re.indexOf(U[D]))return!0;return!1})(X,u.BAD_DELIMITERS)||-1<X.indexOf(M)||X.charAt(0)===" "||X.charAt(X.length-1)===" ")?ee+X+ee:X)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!i&&!!s.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=v,u.ParserHandle=N,u.NetworkStreamer=p,u.FileStreamer=m,u.StringStreamer=b,u.ReadableStreamStreamer=x,s.jQuery&&((a=s.jQuery).fn.parse=function(g){var w=g.config||{},k=[];return this.each(function(Y){if(!(a(this).prop("tagName").toUpperCase()==="INPUT"&&a(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var ee=0;ee<this.files.length;ee++)k.push({file:this.files[ee],inputElem:this,instanceConfig:a.extend({},w)})}),P(),this;function P(){if(k.length===0)S(g.complete)&&g.complete();else{var Y,ee,H,Q,$=k[0];if(S(g.before)){var R=g.before($.file,$.inputElem);if(typeof R=="object"){if(R.action==="abort")return Y="AbortError",ee=$.file,H=$.inputElem,Q=R.reason,void(S(g.error)&&g.error({name:Y},ee,H,Q));if(R.action==="skip")return void M();typeof R.config=="object"&&($.instanceConfig=a.extend($.instanceConfig,R.config))}else if(R==="skip")return void M()}var _=$.instanceConfig.complete;$.instanceConfig.complete=function(F){S(_)&&_(F,$.file,$.inputElem),M()},u.parse($.file,$.instanceConfig)}}function M(){k.splice(0,1),P()}}),o&&(s.onmessage=function(g){g=g.data,u.WORKER_ID===void 0&&g&&(u.WORKER_ID=g.workerId),typeof g.input=="string"?s.postMessage({workerId:u.WORKER_ID,results:u.parse(g.input,g.config),finished:!0}):(s.File&&g.input instanceof File||g.input instanceof Object)&&(g=u.parse(g.input,g.config))&&s.postMessage({workerId:u.WORKER_ID,results:g,finished:!0})}),(p.prototype=Object.create(f.prototype)).constructor=p,(m.prototype=Object.create(f.prototype)).constructor=m,(b.prototype=Object.create(b.prototype)).constructor=b,(x.prototype=Object.create(f.prototype)).constructor=x,u})})(ym);var $x=ym.exports;const hr=qd($x);function Si({startRect:e,targetRef:t,count:r=12,onDone:s}){return d.useEffect(()=>{const a=t==null?void 0:t.current;if(!e||!a){s==null||s();return}const i=a.getBoundingClientRect(),o=document.createElement("div");o.style.position="fixed",o.style.inset="0",o.style.pointerEvents="none",o.style.zIndex="9999",document.body.appendChild(o);const l=i.left+i.width/2,c=i.top+i.height/2,u=e.left+e.width/2,f=e.top+e.height/2,p=200;let m=0;function b(x){const N=document.createElement("div");N.textContent="🪙",Object.assign(N.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const C=u,v=f,h=l,y=c;N.style.transform=`translate(${C}px, ${v}px) scale(1)`,o.appendChild(N),N.getBoundingClientRect(),N.style.transition=`transform ${p}ms cubic-bezier(.2,.8,.2,1), opacity ${p}ms linear`,requestAnimationFrame(()=>{N.style.transform=`translate(${h}px, ${y}px) scale(.6)`,N.style.opacity="0.1"}),setTimeout(()=>{N.remove(),m+=1,m===r&&(o.remove(),s==null||s())},p+50)}for(let x=0;x<r;x++)setTimeout(()=>b(),x*60);return()=>{try{o.remove()}catch{}}},[e,t,r,s]),null}const ft={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},kd=e=>Math.floor(e/ft.XP_PER_LEVEL)+1,Bx=e=>{const t=e%ft.XP_PER_LEVEL;return{current:t,required:ft.XP_PER_LEVEL,percentage:t/ft.XP_PER_LEVEL*100}};function qx({player:e,size:t="normal",showLevel:r=!0,showName:s=!0}){const a=ft.AVATARS.find(o=>o.id===e.avatar)||ft.AVATARS[0],i={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:`${i[t]} rounded-full bg-gradient-to-br ${a.bgColor} flex items-center justify-center shadow-lg`,children:n.jsx("span",{children:a.emoji})}),r&&n.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),s&&n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:e.name}),n.jsx("div",{className:"text-xs text-base-muted",children:a.name})]})]})}function Ux({current:e,required:t,level:r,animate:s=!0}){const[a,i]=d.useState(0),o=e/t*100;return d.useEffect(()=>{if(s){const l=setTimeout(()=>{i(o)},100);return()=>clearTimeout(l)}else i(o)},[o,s]),n.jsxs("div",{className:"w-full",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs font-medium",children:["Level ",r]}),n.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),n.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${a}%`},children:n.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}const bm=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],wm=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],jm=[...bm.filter(e=>e.slug!=="more"),...wm];function Qx({onClick:e}){return n.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:e,children:[n.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),n.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),n.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),n.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),n.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]})}function Yx({actions:e}){return n.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:e.map((t,r)=>n.jsxs("button",{onClick:t.action,className:`${t.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[n.jsx("div",{className:"text-2xl",children:t.icon}),n.jsx("div",{className:"text-[10px] font-medium text-white",children:t.label})]},r))})}function Hx({categories:e,onCategorySelect:t}){return n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),n.jsx("div",{className:"grid grid-cols-3 gap-3",children:e.map(r=>n.jsxs("button",{onClick:()=>t(r),className:`bg-gradient-to-br ${r.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[n.jsx("div",{className:"text-3xl",children:r.icon}),n.jsx("div",{className:"text-xs font-bold text-white text-center",children:r.name}),r.questions>0&&n.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[r.questions," Qs"]})]},r.name))})]})}function Wx({onClick:e,isPulsing:t}){return n.jsxs("button",{onClick:e,className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium",children:"Practice Mode"}),n.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),n.jsx("div",{className:"text-xl",children:"→"})]})}function Gx({dailyQ:e,isFlipped:t,picked:r,onAnswer:s,dailyCompleted:a,DAILY_Q_COINS:i,DAILY_Q_XP:o}){return a?n.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"✅"}),n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}):e?n.jsx("div",{className:"flip-card mb-6",children:n.jsxs("div",{className:`flip-card-inner ${t?"flipped":""}`,children:[n.jsx("div",{className:"flip-card-front",children:n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),n.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",i," coins +",o," XP"]})]}),n.jsx("p",{className:"text-sm mb-4 text-base-muted",children:e.prompt}),n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.options.map((l,c)=>{const u=c===e.answerIndex,f=r===c,p=r!==null;return n.jsx("button",{onClick:m=>s(c,m),disabled:r!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${p?u?"border-green-500 bg-green-500/20":f?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${r!==null?"cursor-not-allowed":"cursor-pointer"}`,children:l},c)})})]})}),n.jsx("div",{className:"flip-card-back absolute inset-0",children:n.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[n.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),n.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),n.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",i," coins & ",o," XP!"]}),n.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}):null}function Vx({show:e,onClose:t,player:r,changeAvatar:s,GAME_CONSTANTS:a}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:i=>{i.target===i.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:i=>i.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-4",children:a.AVATARS.map(i=>{const o=!r.unlockedAvatars.includes(i.id),l=r.avatar===i.id;return n.jsxs("button",{onClick:()=>{o||(s(i.id),t())},className:`p-4 rounded-2xl border-2 transition-all ${l?"border-brand-blue bg-brand-blue/20":o?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:o,children:[n.jsx("div",{className:`text-4xl mb-2 ${o?"grayscale":""}`,children:i.emoji}),n.jsx("div",{className:"text-sm font-medium",children:i.name}),o&&n.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",i.unlockLevel]}),l&&n.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},i.id)})})]})}):null}function Xx({show:e,onClose:t,categories:r,onCategorySelect:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:a=>a.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:r.map(a=>n.jsxs("button",{onClick:()=>{t(),s(a)},className:`bg-gradient-to-br ${a.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[n.jsx("div",{className:"text-3xl",children:a.icon}),n.jsx("div",{className:"text-sm font-bold text-white",children:a.name}),n.jsxs("div",{className:"text-xs text-white/80",children:[a.questions," questions"]})]},a.name))})]})}):null}function Kx({show:e,onClose:t,coins:r,onNavigateToPlay:s}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:a=>{a.target===a.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"magic-gradient h-full"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[r," Coins"]})]})]}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-r%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${r%100}%`}})})]}),n.jsx("button",{onClick:s,className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})}):null}function Jx({show:e,onClose:t,selectedCategory:r,difficulty:s,setDifficulty:a,count:i,setCount:o,timer:l,setTimer:c,onStart:u}){return!e||!r?null:n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:r.icon}),n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium",children:["Category: ",r.name]}),n.jsxs("div",{className:"text-xs text-base-muted",children:[r.questions," questions available"]})]})]})}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>a(f),className:`py-2 rounded-xl border ${s===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),n.jsx("input",{type:"number",value:l,onChange:f=>c(Number(f.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})})}function Zx({show:e,onClose:t,allCategories:r,category:s,setCategory:a,difficulty:i,setDifficulty:o,count:l,setCount:c,onStart:u}){return e?n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:f=>{f.target===f.currentTarget&&t()},children:n.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:f=>f.stopPropagation(),children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),n.jsx("button",{onClick:t,className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),n.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:r.map(f=>n.jsxs("button",{onClick:()=>a(f.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${s===f.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[n.jsx("div",{className:"text-xl",children:f.icon}),n.jsx("div",{className:"text-[10px] text-center",children:f.name})]},f.slug))})]}),n.jsxs("div",{className:"mb-4",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),n.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(f=>n.jsx("button",{onClick:()=>o(f),className:`py-2 rounded-xl border ${i===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),n.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(f=>n.jsx("button",{onClick:()=>c(f),className:`py-2 rounded-xl border ${l===f?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:f},f))})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:t,className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}):null}function eg({player:e,onContinue:t}){const[r,s]=d.useState(!0),[a,i]=d.useState(!1),[o,l]=d.useState(!1),[c,u]=d.useState(""),[f,p]=d.useState(""),m=()=>{try{const h=new Audio("/sounds/welcome.mp3");h.volume=.6,h.play()}catch{console.log("Welcome sound not available")}},b=()=>{navigator.vibrate&&navigator.vibrate([100,50,100])},N=(()=>{if(e!=null&&e.name)return e.name;let h=localStorage.getItem("userName");return h||(h="Champion",localStorage.setItem("userName",h)),h})();d.useEffect(()=>{document.body.classList.add("hide-bottom-nav"),m(),b();const h=["🦉","🐧","🦝","🦜","🦕","🐙","🦊","🐸","🦁","🐨"];p(h[Math.floor(Math.random()*h.length)]);const y=setInterval(()=>{l(T=>!T)},2e3),E=["🎯 New challenges await!","🏆 Ready to be a champion?","🌟 Your brain adventure starts now!","🎨 Time for fun learning!","🎪 The quiz circus is open!","🚀 Blast off to knowledge!","🎭 Let's play and learn!","🌈 Rainbow of questions ahead!"];u(E[Math.floor(Math.random()*E.length)]);const j=setInterval(()=>{u(E[Math.floor(Math.random()*E.length)])},3e3);return()=>{document.body.classList.remove("hide-bottom-nav"),clearInterval(y),clearInterval(j)}},[t]);const C=()=>{try{const h=new Audio("/sounds/tap.mp3");h.volume=.5,h.play()}catch{console.log("Click sound not available")}navigator.vibrate&&navigator.vibrate(20),i(!0),setTimeout(()=>{document.body.classList.remove("hide-bottom-nav"),s(!1),t()},400)};if(!r)return null;const v=()=>{const h=new Date().getHours();return h<12?"Good morning":h<17?"Good afternoon":"Good evening"};return n.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500
      ${a?"opacity-0 scale-95":"opacity-100 scale-100"}`,children:[n.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #fda085 75%, #f5a375 90%, #e08060 100%)"}}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[[{top:"10%",left:"15%",size:"24px",delay:"0s"},{top:"20%",left:"75%",size:"20px",delay:"0.5s"},{top:"15%",left:"45%",size:"28px",delay:"1s"},{top:"30%",left:"85%",size:"22px",delay:"1.5s"},{top:"8%",left:"60%",size:"26px",delay:"2s"}].map((h,y)=>n.jsx("div",{className:"absolute animate-twinkle",style:{top:h.top,left:h.left,fontSize:h.size,animationDelay:h.delay},children:"⭐"},`star-${y}`)),n.jsxs("div",{className:"absolute top-10 left-0 w-full",children:[n.jsx("div",{className:"cloud cloud1",children:"☁️"}),n.jsx("div",{className:"cloud cloud2",children:"☁️"})]})]}),n.jsxs("div",{className:"relative z-10 text-center px-6 w-full max-w-sm mx-auto",children:[n.jsx("div",{className:`text-8xl mb-4 transition-transform duration-500 ${o?"scale-110 rotate-6":"scale-100 rotate-0"}`,children:f}),n.jsxs("div",{className:"relative rounded-3xl px-6 py-4 mb-6 shadow-xl overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100"}),n.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-purple-100 to-pink-100 rotate-45"}),n.jsxs("div",{className:"relative",children:[n.jsxs("h1",{className:"text-3xl font-bold text-purple-800",children:["Hello, ",N,"! 👋"]}),n.jsx("p",{className:"text-sm text-purple-600 mt-1",children:v()})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-yellow-200 via-yellow-100 to-orange-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-2xl font-bold text-orange-800",children:(e==null?void 0:e.level)||1}),n.jsx("div",{className:"text-xs text-orange-600",children:"Level"})]})]}),n.jsxs("div",{className:"relative rounded-2xl p-3 transform hover:scale-105 transition-transform overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-100"}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-2xl font-bold text-teal-800",children:(e==null?void 0:e.coins)||0}),n.jsx("div",{className:"text-xs text-teal-600",children:"Coins"})]})]})]}),n.jsx("div",{className:"h-4"}),n.jsx("div",{className:"text-white/90 font-medium animate-fade-slide mb-6",children:c}),n.jsxs("button",{onClick:C,className:"group relative w-full",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"}),n.jsxs("div",{className:`relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-5 px-8 rounded-full font-bold text-xl shadow-2xl 
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
      `})]})}function tg(){const e=He(),t=bt(),[r,s]=d.useState(!1),[a,i]=d.useState(0);d.useEffect(()=>{t.pathname==="/"&&(window.history.replaceState({path:"/",preventBack:!0},"","/"),window.history.pushState({path:"/",preventBack:!0},"","/"));const u=m=>{var b;if(t.pathname==="/"||(b=m.state)!=null&&b.preventBack){const x=new Date().getTime();x-a<2e3&&a>0?(m.preventDefault(),s(!0),window.history.pushState({path:"/",preventBack:!0},"","/")):(m.preventDefault(),o(),i(x),window.history.pushState({path:"/",preventBack:!0},"","/"))}};window.addEventListener("popstate",u);const f=()=>{document.hidden&&t.pathname==="/"&&window.history.pushState({path:"/",preventBack:!0},"","/")};document.addEventListener("visibilitychange",f);const p=m=>{if(t.pathname==="/"){m.preventDefault(),m.stopPropagation();const b=new Date().getTime();return b-a<2e3&&a>0?s(!0):(o(),i(b)),!1}};return document.addEventListener("backbutton",p,!1),()=>{window.removeEventListener("popstate",u),document.removeEventListener("visibilitychange",f),document.removeEventListener("backbutton",p)}},[t.pathname,a]),d.useEffect(()=>{const f=setInterval(()=>{var p;t.pathname==="/"&&!((p=window.history.state)!=null&&p.preventBack)&&window.history.pushState({path:"/",preventBack:!0},"","/")},1e3);return()=>clearInterval(f)},[t.pathname]);const o=()=>{const u=document.getElementById("exit-toast");u&&u.remove();const f=document.createElement("div");f.id="exit-toast",f.className="exit-toast",f.textContent="Press back again to exit",f.style.cssText=`
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 12px 24px;
      border-radius: 24px;
      font-size: 14px;
      z-index: 10000;
      animation: slideUp 0.3s ease-out;
      pointer-events: none;
    `;const p=document.createElement("style");p.textContent=`
      @keyframes slideUp {
        from {
          transform: translateX(-50%) translateY(100%);
          opacity: 0;
        }
        to {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
      }
      @keyframes slideDown {
        from {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
        to {
          transform: translateX(-50%) translateY(100%);
          opacity: 0;
        }
      }
    `,document.getElementById("exit-toast-styles")||(p.id="exit-toast-styles",document.head.appendChild(p)),document.body.appendChild(f),setTimeout(()=>{const m=document.getElementById("exit-toast");m&&(m.style.animation="slideDown 0.3s ease-out",m.style.animationFillMode="forwards",setTimeout(()=>m.remove(),300))},2e3)},l=()=>{if(!r)return null;const u=()=>{var p,m,b,x;try{if((m=(p=window.navigator)==null?void 0:p.app)!=null&&m.exitApp){window.navigator.app.exitApp();return}if((x=(b=window.navigator)==null?void 0:b.app)!=null&&x.backHistory){window.navigator.app.backHistory();return}const N=window.history.length;window.history.go(-N),window.close(),setTimeout(()=>{window.location.href="about:blank"},100)}catch(N){console.log("Exit failed:",N),window.location.href="about:blank"}},f=()=>{s(!1),window.history.pushState({path:"/",preventBack:!0},"","/")};return n.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,animation:"fadeIn 0.2s ease-out"},onClick:f,children:[n.jsxs("div",{style:{background:"linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",borderRadius:"16px",padding:"24px",maxWidth:"320px",width:"90%",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.3)",animation:"slideIn 0.3s ease-out"},onClick:p=>p.stopPropagation(),children:[n.jsx("h3",{style:{color:"white",fontSize:"20px",fontWeight:"bold",marginBottom:"12px",textAlign:"center"},children:"Exit App?"}),n.jsx("p",{style:{color:"rgba(255, 255, 255, 0.9)",fontSize:"14px",marginBottom:"24px",textAlign:"center",lineHeight:"1.5"},children:"Are you sure you want to exit the Quiz Game?"}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:f,style:{flex:1,padding:"12px",border:"2px solid rgba(255, 255, 255, 0.3)",borderRadius:"8px",background:"transparent",color:"white",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.2s"},onMouseOver:p=>p.target.style.backgroundColor="rgba(255, 255, 255, 0.1)",onMouseOut:p=>p.target.style.backgroundColor="transparent",children:"Stay"}),n.jsx("button",{onClick:u,style:{flex:1,padding:"12px",border:"none",borderRadius:"8px",background:"linear-gradient(135deg, #ff6b6b 0%, #ff4444 100%)",color:"white",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"transform 0.2s",boxShadow:"0 4px 15px rgba(255, 68, 68, 0.3)"},onMouseOver:p=>p.target.style.transform="scale(1.05)",onMouseOut:p=>p.target.style.transform="scale(1)",children:"Exit"})]})]}),n.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideIn {
            from {
              transform: scale(0.9);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `})]})};return{goBack:d.useCallback(()=>{if(t.pathname==="/"){s(!0);return}e(-1)},[t.pathname,e]),ExitDialog:l}}const Sd=(e=new Date)=>e.toLocaleDateString("en-CA"),Cd=(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},ng=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function Ed(){const{ExitDialog:e}=tg(),[t,r]=d.useState(!0),s=He(),{player:a,addXP:i,addCoins:o,levelProgress:l,useEnergy:c,changeAvatar:u}=jn(),[f]=zt("/sounds/correct.mp3",{volume:.6}),[p]=zt("/sounds/wrong.mp3",{volume:.6}),[m]=zt("/sounds/coin.mp3",{volume:.75}),[b]=zt("/sounds/levelup.mp3",{volume:.8}),x=d.useRef(a.level),N=d.useRef(null);d.useEffect(()=>{const me=()=>{};return window.addEventListener("focus",me),()=>window.removeEventListener("focus",me)},[]),d.useEffect(()=>{a.level>x.current&&(b==null||b(),x.current=a.level)},[a.level,b]);const[C,v]=d.useState(!1),[h,y]=d.useState(null),[E,j]=d.useState(!1),[T,S]=d.useState("medium"),[g,w]=d.useState(10),[k,P]=d.useState(45),[M,Y]=d.useState(!1),[ee,H]=d.useState(!1),[Q,$]=d.useState(null),[R,_]=d.useState(null),[F,L]=d.useState(!1),[I,A]=d.useState(!1),[X,ne]=d.useState(null),re=10,U=5,[D,K]=d.useState(!1),[z,B]=d.useState(!1),[Z,ae]=d.useState("general-knowledge"),[ce,q]=d.useState("medium"),[G,W]=d.useState(10),[O,te]=d.useState(()=>Cd("dq_daily_log",{})[Sd()]===!0);d.useEffect(()=>{const me=sessionStorage.getItem("homeScrollPosition");me&&window.scrollTo(0,parseInt(me));const he=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",he),()=>window.removeEventListener("scroll",he)},[]),d.useEffect(()=>{if(O)return;(async()=>{var he;try{const be=await fetch("/data/quiz_questions_bank.csv").then(et=>et.text()),{data:ke}=hr.parse(be,{header:!0,skipEmptyLines:!0});if(!ke.length)throw new Error("empty");const qe=ke[Math.floor(Math.random()*ke.length)],Ut=[qe.option1,qe.option2,qe.option3,qe.option4].filter(Boolean);$({category:qe.category||"General",prompt:qe.question,options:Ut,answerIndex:["A","B","C","D"].indexOf((he=qe.answer)==null?void 0:he.toUpperCase())||0})}catch{$({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[O]);const de=(me,he)=>{if(R!==null)return;_(me);const be=me===Q.answerIndex;if(be){if(f(),he!=null&&he.currentTarget&&N.current){const ke=he.currentTarget.getBoundingClientRect();m(),ne({startRect:ke,count:10,amount:U})}}else p();setTimeout(()=>{if(A(!0),L(!0),be){const ke=Sd();ng("dq_daily_log",{...Cd("dq_daily_log",{}),[ke]:!0}),te(!0);const qe=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(qe+1))}},600)},je=me=>{if(me.slug==="more"){v(!0);return}y(me),j(!0)},Le=()=>{console.log("Starting quiz with energy:",a.energy),console.log("Category:",h.slug),s(`/quiz/${h.slug}`,{state:{mode:"quiz",difficulty:T,count:g,timer:{type:"per_q",seconds:k},source:"adventure"}}),j(!1)},Be=()=>{console.log("Starting practice, category:",Z),s(`/quiz/${Z}`,{state:{mode:"practice",difficulty:ce,count:G,timer:{type:"off",seconds:0}}}),B(!1)},Ee=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>{sessionStorage.setItem("questsFromHome","true"),s("/profile/quests")}},{icon:"🔥",label:"Streak",color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>s("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>s("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>s("/profile/rewards")}];return n.jsxs(n.Fragment,{children:[n.jsx(e,{}),t&&n.jsx(eg,{player:a,onContinue:()=>r(!1)}),n.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[n.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),n.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[n.jsx("style",{jsx:!0,children:`
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
        `}),X&&n.jsx(Si,{startRect:X.startRect,targetRef:N,count:X.count,onDone:()=>{D||(i(re),o(X.amount),K(!0)),ne(null)}}),n.jsxs("div",{className:"mb-8",children:[n.jsxs("div",{className:"flex justify-between items-start mb-4",children:[n.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>H(!0),children:n.jsx(qx,{player:a,size:"small",showLevel:!0,showName:!0})}),n.jsx("div",{className:"flex gap-2",children:n.jsxs("button",{ref:N,onClick:()=>Y(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[n.jsx("span",{className:"text-lg",children:"🪙"}),n.jsx("span",{className:"font-bold",children:a.coins})]})})]}),n.jsx(Ux,{current:l.current,required:l.required,level:a.level,animate:!0})]}),n.jsx(Qx,{onClick:()=>s("/play")}),n.jsx(Yx,{actions:Ee}),n.jsx(Gx,{dailyQ:Q,isFlipped:I,picked:R,onAnswer:de,dailyCompleted:O,DAILY_Q_COINS:U,DAILY_Q_XP:re}),n.jsx(Hx,{categories:bm,onCategorySelect:je}),n.jsx(Wx,{onClick:()=>B(!0),isPulsing:a.energy<10}),n.jsx(Vx,{show:ee,onClose:()=>H(!1),player:a,changeAvatar:u,GAME_CONSTANTS:ft}),n.jsx(Jx,{show:E,onClose:()=>j(!1),selectedCategory:h,difficulty:T,setDifficulty:S,count:g,setCount:w,timer:k,setTimer:P,onStart:Le}),n.jsx(Zx,{show:z,onClose:()=>B(!1),allCategories:jm,category:Z,setCategory:ae,difficulty:ce,setDifficulty:q,count:G,setCount:W,onStart:Be}),n.jsx(Xx,{show:C,onClose:()=>v(!1),categories:wm,onCategorySelect:je}),n.jsx(Kx,{show:M,onClose:()=>Y(!1),coins:a.coins,onNavigateToPlay:()=>{Y(!1),s("/play")}})]})]})]})}const en={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},tn={get:(e,t=null)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}};function sc(){const[e,t]=d.useState(()=>tn.get(en.COINS,0)),[r,s]=d.useState(()=>tn.get(en.XP,0)),[a,i]=d.useState(()=>tn.get(en.LEVEL,1)),[o,l]=d.useState(()=>tn.get(en.OWNED_CHARACTERS,[])),[c,u]=d.useState(()=>tn.get(en.SOUND,!0));return d.useEffect(()=>tn.set(en.COINS,e),[e]),d.useEffect(()=>tn.set(en.XP,r),[r]),d.useEffect(()=>tn.set(en.LEVEL,a),[a]),d.useEffect(()=>tn.set(en.OWNED_CHARACTERS,o),[o]),d.useEffect(()=>tn.set(en.SOUND,c),[c]),{coins:e,xp:r,level:a,ownedCharacters:o,soundOn:c,addCoins:x=>t(N=>N+x),addXp:x=>s(N=>N+x),unlockCharacter:x=>{l(N=>[...new Set([...N,x])])},setSoundOn:u,checkLevelUp:()=>{const x=100*a*(a-1);return r>=x?(i(N=>N+1),!0):!1},nextLevelThreshold:100*a*(a-1),xpProgress:r/(100*a*(a-1))}}const rg=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],rn=rg.slice(0,6),nr=360/rn.length,Nm={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},Sn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},ir=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Rd=e=>(e%360+360)%360,ac=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},Dr=(e,t=.7)=>{try{const r=new Audio(e);r.volume=t,r.play()}catch{}};function sg({run:e,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:i,onBack:o,spinning:l,angle:c,transition:u,result:f,showCallout:p,glowColor:m,soundOn:b,setSoundOn:x,showSparkle:N,pulseIdx:C,nextProgressIdx:v,pendingProgressIdx:h,coinBurstTick:y,lastAnswerWasCorrect:E}){const j=100*s*(s-1),[T,S]=d.useState(!1),g=d.useRef(0),w=d.useRef(null),k=d.useRef(null),[P,M]=d.useState({dx:110,dy:-260}),[Y,ee]=d.useState(!1);return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(h==null)return;S(!1);const H=setTimeout(()=>S(!0),30);return()=>clearTimeout(H)},[h]),d.useEffect(()=>{var Q,$,R,_;if(!y||!E||y===g.current)return;g.current=y;try{const F=($=(Q=k==null?void 0:k.current)==null?void 0:Q.getBoundingClientRect)==null?void 0:$.call(Q),L=(_=(R=w==null?void 0:w.current)==null?void 0:R.getBoundingClientRect)==null?void 0:_.call(R);if(F&&L){const I=F.left+F.width/2,A=F.top+F.height/2,X=L.left+L.width/2,ne=L.top+L.height/2;M({dx:X-I,dy:ne-A})}}catch{}b&&Dr("/sounds/coin.mp3",.7),ee(!0);const H=setTimeout(()=>ee(!1),700);return()=>clearTimeout(H)},[y,b,E]),n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-8",children:[n.jsx("button",{onClick:o,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[n.jsxs("div",{className:"text-[11px]",children:["Lvl ",s," • ",r,"/",j]}),n.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:n.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(r/j,1)*100}%`}})})]}),n.jsxs("button",{ref:w,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),n.jsx("button",{onClick:()=>x(!b),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:n.jsx("span",{className:"text-lg",children:b?"🔊":"🔇"})})]}),a.length>0&&n.jsx("div",{className:"flex justify-center mb-6",children:n.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:a.map(H=>{const Q=rn.find(R=>ir(R.name)===H),$=Nm[H];return n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:n.jsx("span",{className:"text-sm",children:Q==null?void 0:Q.icon})}),n.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:$})]},H)})})}),n.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:n.jsxs("div",{className:"w-80 max-w-full",children:[n.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),n.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(H=>{const Q=["#FF9800","#FFC107","#cadd75ff"],$=!!e.progress[H];return n.jsxs("div",{className:"relative h-full bg-white/10",children:[n.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:$?H===h?T?"100%":"0%":v===H&&h==null?"0%":"100%":"0%",backgroundColor:Q[H],transition:H===h?"width 1200ms ease-out":"none"}}),C===H&&n.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:n.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),N===H&&n.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},H)})},e.qIndex)]})}),n.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:n.jsxs("div",{ref:k,className:"relative w-96 h-96 rounded-full select-none",children:[m&&n.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${m}40, 0 0 40px 12px ${m}60`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[rn.map((H,Q)=>{const $=Q*nr,R=$+nr,_=nr>180?1:0,F=Math.PI*$/180,L=Math.PI*R/180,I=50+45*Math.cos(F),A=50-45*Math.sin(F),X=50+45*Math.cos(L),ne=50-45*Math.sin(L),re=$+nr/2,U=28,D=50+U*Math.cos(re*Math.PI/180),K=50-U*Math.sin(re*Math.PI/180);return n.jsxs("g",{children:[n.jsx("path",{d:`M50,50 L${I},${A} A45,45 0 ${_} 0 ${X},${ne} Z`,fill:H.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),n.jsx("text",{x:D,y:K,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:H.icon})]},Q)}),n.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),n.jsx("button",{onClick:i,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:n.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:n.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),p&&f&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:n.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[n.jsx("span",{className:"mr-2",children:f.cat.icon}),f.cat.name]})}),Y&&n.jsxs(n.Fragment,{children:[n.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(H=>n.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${H*80}ms forwards`,"--coin-dx":`${P.dx}px`,"--coin-dy":`${P.dy}px`},children:n.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},H))]})]})}),n.jsx("div",{className:"text-center",children:n.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}var Aa={linear:function(e,t,r,s){var a=r-t;return a*e/s+t},easeInQuad:function(e,t,r,s){var a=r-t;return a*(e/=s)*e+t},easeOutQuad:function(e,t,r,s){var a=r-t;return-a*(e/=s)*(e-2)+t},easeInOutQuad:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e+t:-a/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e+t},easeOutCubic:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e+t},easeOutQuart:function(e,t,r,s){var a=r-t;return-a*((e=e/s-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e+t:-a/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,s){var a=r-t;return a*(e/=s)*e*e*e*e+t},easeOutQuint:function(e,t,r,s){var a=r-t;return a*((e=e/s-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?a/2*e*e*e*e*e+t:a/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,s){var a=r-t;return-a*Math.cos(e/s*(Math.PI/2))+a+t},easeOutSine:function(e,t,r,s){var a=r-t;return a*Math.sin(e/s*(Math.PI/2))+t},easeInOutSine:function(e,t,r,s){var a=r-t;return-a/2*(Math.cos(Math.PI*e/s)-1)+t},easeInExpo:function(e,t,r,s){var a=r-t;return e==0?t:a*Math.pow(2,10*(e/s-1))+t},easeOutExpo:function(e,t,r,s){var a=r-t;return e==s?t+a:a*(-Math.pow(2,-10*e/s)+1)+t},easeInOutExpo:function(e,t,r,s){var a=r-t;return e===0?t:e===s?t+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+t:a/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,s){var a=r-t;return-a*(Math.sqrt(1-(e/=s)*e)-1)+t},easeOutCirc:function(e,t,r,s){var a=r-t;return a*Math.sqrt(1-(e=e/s-1)*e)+t},easeInOutCirc:function(e,t,r,s){var a=r-t;return(e/=s/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+t:a/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),-(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t)},easeOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s)===1?t+a:(o||(o=s*.3),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),i*Math.pow(2,-10*e)*Math.sin((e*s-l)*(2*Math.PI)/o)+a+t)},easeInOutElastic:function(e,t,r,s){var a=r-t,i,o,l;return l=1.70158,o=0,i=a,e===0?t:(e/=s/2)===2?t+a:(o||(o=s*(.3*1.5)),i<Math.abs(a)?(i=a,l=o/4):l=o/(2*Math.PI)*Math.asin(a/i),e<1?-.5*(i*Math.pow(2,10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o))+t:i*Math.pow(2,-10*(e-=1))*Math.sin((e*s-l)*(2*Math.PI)/o)*.5+a+t)},easeInBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*(e/=s)*e*((a+1)*e-a)+t},easeOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),i*((e=e/s-1)*e*((a+1)*e+a)+1)+t},easeInOutBack:function(e,t,r,s,a){var i=r-t;return a===void 0&&(a=1.70158),(e/=s/2)<1?i/2*(e*e*(((a*=1.525)+1)*e-a))+t:i/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+t},easeInBounce:function(e,t,r,s){var a=r-t,i;return i=Aa.easeOutBounce(s-e,0,a,s),a-i+t},easeOutBounce:function(e,t,r,s){var a=r-t;return(e/=s)<1/2.75?a*(7.5625*e*e)+t:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+t:a*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,s){var a=r-t,i;return e<s/2?(i=Aa.easeInBounce(e*2,0,a,s),i*.5+t):(i=Aa.easeOutBounce(e*2-s,0,a,s),i*.5+a*.5+t)}},ag=Aa;function ig(e){return e*Math.PI/180}function Ct(e,t){return e+Math.random()*(t-e)}function og(e,t){return Math.floor(e+Math.random()*(t-e+1))}var js;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(js||(js={}));var Pn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(Pn||(Pn={}));const lg=1e3/60;class cg{constructor(t,r,s,a){this.getOptions=r;const{colors:i,initialVelocityX:o,initialVelocityY:l}=this.getOptions();this.context=t,this.x=s,this.y=a,this.w=Ct(5,20),this.h=Ct(5,20),this.radius=Ct(5,10),this.vx=typeof o=="number"?Ct(-o,o):Ct(o.min,o.max),this.vy=typeof l=="number"?Ct(-l,0):Ct(l.min,l.max),this.shape=og(0,2),this.angle=ig(Ct(0,360)),this.angularSpin=Ct(-.2,.2),this.color=i[Math.floor(Math.random()*i.length)],this.rotateY=Ct(0,1),this.rotationDirection=Ct(0,1)?Pn.Positive:Pn.Negative}update(t){const{gravity:r,wind:s,friction:a,opacity:i,drawShape:o}=this.getOptions(),l=t/lg;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=r*l,this.vx+=s*l,this.vx*=a**l,this.vy*=a**l,this.rotateY>=1&&this.rotationDirection===Pn.Positive?this.rotationDirection=Pn.Negative:this.rotateY<=-1&&this.rotationDirection===Pn.Negative&&(this.rotationDirection=Pn.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=i,this.context.lineCap="round",this.context.lineWidth=2,o&&typeof o=="function")o.call(this,this.context);else switch(this.shape){case js.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case js.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case js.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class dg{constructor(t,r){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=a=>{this.particles.splice(a,1)},this.getParticle=()=>{const a=Ct(this.x,this.w+this.x),i=Ct(this.y,this.h+this.y);return new cg(this.context,this.getOptions,a,i)},this.animate=a=>{const{canvas:i,context:o,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:f,numberOfPieces:p,debug:m,tweenFunction:b,tweenDuration:x}=this.getOptions();if(!u)return!1;const N=this.particles.length,C=f?N:l;if(C<p){c!==p&&(this.tweenProgress=0,this.tweenFrom=C,this.lastNumberOfPieces=p),this.tweenProgress=Math.min(x,Math.max(0,this.tweenProgress+a));const v=b(this.tweenProgress,this.tweenFrom,p,x),h=Math.round(v-C);for(let y=0;y<h;y++)this.particles.push(this.getParticle());this.particlesGenerated+=h}m&&(o.font="12px sans-serif",o.fillStyle="#333",o.textAlign="right",o.fillText(`Particles: ${N}`,i.width-10,i.height-20));for(let v=this.particles.length-1;v>=0;v--){const h=this.particles[v];h.update(a),(h.y>i.height||h.y<-100||h.x>i.width+100||h.x<-100)&&(f&&C<=p?this.particles[v]=this.getParticle():this.removeParticleAt(v))}return N>0||C<p},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=r}}const ic={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:ag.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class ug{constructor(t,r){this.lastFrameTime=0,this.setOptionsWithDefaults=a=>{const i={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...i,...ic,...a},Object.assign(this,a.confettiSource)},this.update=(a=0)=>{const{options:{run:i,onConfettiComplete:o,frameRate:l},canvas:c,context:u}=this,f=Math.min(a-this.lastFrameTime,50);if(l&&f<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=a-(l?f%l:0),i&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(f)?this.rafId=requestAnimationFrame(this.update):(o&&typeof o=="function"&&this.generator.particlesGenerated>0&&o.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new dg(this.canvas,()=>this.options),this.options=r,this.update()}get options(){return this._options}set options(t){var a,i;const r=(a=this._options)==null?void 0:a.run,s=(i=this._options)==null?void 0:i.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&r===!1&&this.update()}}const fg=pt.createRef();class oc extends pt.Component{constructor(t){super(t),this.canvas=pt.createRef(),this.canvas=t.canvasRef||fg}componentDidMount(){if(this.canvas.current){const t=eo(this.props)[0];this.confetti=new ug(this.canvas.current,t)}}componentDidUpdate(){const t=eo(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,r]=eo(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...r.style};return n.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...r,style:s})}}oc.defaultProps={...ic};oc.displayName="ReactConfetti";function eo(e){const t={},r={},s={},a=[...Object.keys(ic),"confettiSource","drawShape","onConfettiComplete","frameRate"],i=["canvasRef"];for(const o in e){const l=e[o];a.includes(o)?t[o]=l:i.includes(o)?i[o]=l:s[o]=l}return[t,s,r]}const km=pt.forwardRef((e,t)=>n.jsx(oc,{canvasRef:t,...e}));function Td({question:e,category:t,onAnswer:r,run:s,timeLeft:a,usedLifelines:i,onUseLifeline:o,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:f,onTimeUpBackToWheel:p,soundOn:m}){const[b,x]=d.useState(null),[N,C]=d.useState(!1),[v,h]=d.useState(!1),y=d.useRef(null),E=d.useRef(null),[j,T]=d.useState(null);d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),d.useEffect(()=>{if(!N||!y.current)return;const w=y.current.getBoundingClientRect();T({x:w.left,y:w.top-300,w:w.width,h:8})},[N]);const S=w=>{if(N)return;x(w),C(!0);const k=w===e.correctIndex;ac(k?[50,30,50]:[200]),m&&Dr(k?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{r(k,null)},1500)},g=b===e.correctIndex;return n.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:n.jsxs("div",{ref:E,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("div",{className:"mb-4",children:n.jsx("button",{onClick:()=>h(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:`text-4xl font-black mb-2 ${a<=10?"text-red-400 animate-pulse":"text-white"}`,children:a}),n.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:n.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${a<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${a/30*100}%`}})})]}),n.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[n.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),n.jsxs("div",{children:[n.jsx("div",{className:"text-lg font-bold",children:t.name}),n.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",s.qIndex+1,"/3"]})]})]}),n.jsx("h2",{ref:y,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),n.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((w,k)=>{const P=l.includes(k),M=b===k,Y=k===e.correctIndex;let ee="bg-white/10 border-white/20",H="opacity-100";return P?H="opacity-30":N&&M?ee=Y?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":N&&Y?ee="bg-green-500/30 border-green-400":M&&(ee="bg-white/20 border-white/40"),n.jsx("button",{onClick:()=>S(k),disabled:N||P,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${ee} ${H} ${!N&&!P?"hover:bg-white/15 active:scale-98":""}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+k)}),n.jsx("span",{className:"font-medium flex-1",children:w}),c&&n.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[k]),"%"]})]})},k)})}),!N&&n.jsxs("div",{className:"flex gap-4 mb-8",children:[n.jsx("button",{onClick:()=>o("fifty"),disabled:i.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),n.jsx("button",{onClick:()=>o("audience"),disabled:i.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${i.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),N&&n.jsxs("div",{className:"relative text-center",children:[g&&n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsx(km,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:j||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),n.jsx("button",{onClick:()=>r(g,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),f&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Time's up"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),n.jsx("button",{onClick:p,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),v&&n.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:n.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[n.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),n.jsx("p",{className:"text-base-muted mb-5",children:"You'll lose this question's progress."}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>h(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Pd({category:e,onComplete:t,isBonus:r=!1,soundOn:s=!0}){return d.useEffect(()=>{s&&Dr("/sounds/flush.mp3",.8);const a=setTimeout(t,1e3);return ac([50]),()=>clearTimeout(a)},[t,s]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),r?n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[n.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),n.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:n.jsx("span",{className:"text-6xl",children:"⭐"})})]}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[n.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[n.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),n.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),n.jsxs("div",{className:"relative z-10 text-center",children:[n.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),n.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:n.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function mg({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:n.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function hg({onSelect:e}){return n.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[n.jsxs("header",{className:"text-center mb-12",children:[n.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),n.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),n.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),n.jsx("div",{className:"grid grid-cols-2 gap-6",children:rn.map(t=>{const r=Nm[ir(t.name)];return n.jsxs("button",{onClick:()=>e(ir(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[n.jsx("div",{className:"text-4xl mb-3",children:t.icon}),n.jsx("div",{className:"font-black text-lg mb-1",children:r}),n.jsx("div",{className:"text-sm opacity-75",children:t.name})]},ir(t.name))})})]})})}function pg({onBack:e}){const{coins:t,xp:r,level:s,ownedCharacters:a,soundOn:i,addCoins:o,addXp:l,unlockCharacter:c,setSoundOn:u}=sc(),[f,p]=d.useState("wheel"),[m,b]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[x,N]=d.useState([]),[C,v]=d.useState(null),[h,y]=d.useState(null),[E,j]=d.useState(30),[T,S]=d.useState([]),[g,w]=d.useState(null),[k,P]=d.useState(null),[M,Y]=d.useState(!1),[ee,H]=d.useState(0),[Q,$]=d.useState("none"),[R,_]=d.useState(!1),[F,L]=d.useState(null),[I,A]=d.useState(!1),[X,ne]=d.useState(null),[re,U]=d.useState(-1),[D,K]=d.useState(0),[z,B]=d.useState(null),[Z,ae]=d.useState(null),[ce,q]=d.useState(!1),[G,W]=d.useState(null),[O,te]=d.useState(-1),[de,je]=d.useState([!1,!1,!1]),[Le,Be]=d.useState(!1),[Ee,me]=d.useState(!1),he=d.useRef(null),be=d.useRef(null),ke=d.useRef(null),qe=d.useMemo(()=>{var ie;return((ie=window.matchMedia)==null?void 0:ie.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>(Ut(),et(),()=>we()),[]),d.useEffect(()=>(f==="question"&&E>0&&!Ee?he.current=setTimeout(()=>{j(ie=>{const oe=ie-1;return oe===10&&i&&Dr("/sounds/tick.mp3",.8),oe})},1e3):f==="question"&&E===0&&Y(!0),()=>{he.current&&clearTimeout(he.current)}),[f,E,i,Ee]),d.useEffect(()=>{if(f!=="wheel"||z==null)return;U(z),i&&Dr("/sounds/progress.mp3",.6),te(z);const ie=setTimeout(()=>te(-1),900),oe=setTimeout(()=>U(-1),900),pe=setTimeout(()=>{G&&(G==="streakFlash"?p("streakFlash"):G==="characterPicker"?p("characterPicker"):(e(),Ae()),W(null)),B(null)},1800);return()=>{clearTimeout(ie),clearTimeout(oe),clearTimeout(pe)}},[f,z,G,i,e]),d.useEffect(()=>{f!=="wheel"||!Le||(K(ie=>ie+1),Be(!1))},[f,Le]),d.useEffect(()=>{if(f!=="wheel"||Z==null)return;const oe=setTimeout(()=>{B(Z),ae(null)},ce?1800:0);return()=>clearTimeout(oe)},[f,Z,ce]);const Ut=async()=>{try{const oe=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:pe}=hr.parse(oe,{header:!0,skipEmptyLines:!0,transformHeader:xe=>xe.trim().toLowerCase()}),Re=pe.map((xe,Ie)=>{var pr;const it=[xe.option1,xe.option2,xe.option3,xe.option4].map(Vn=>(Vn||"").trim()).filter(Boolean);if(it.length<4)return null;let At={a:0,b:1,c:2,d:3}[(pr=xe.answer)==null?void 0:pr.toLowerCase()];return At===void 0&&(At=it.findIndex(Vn=>Vn.toLowerCase()===(xe.answer||"").toLowerCase())),At===-1&&(At=0),{id:xe.id||`q_${Ie}`,prompt:(xe.question||"").trim(),options:it,correctIndex:At,category:(xe.category||xe.subject||"general knowledge").trim(),difficulty:(xe.difficulty||"medium").toLowerCase(),explanation:(xe.explanation||"").trim()}}).filter(Boolean);N(Re)}catch(ie){console.error("Failed to load questions:",ie),N([])}},et=()=>{const ie=new Audio("/sounds/spin.mp3");ie.loop=!0,ie.volume=.6,be.current=ie},we=()=>{if(he.current&&clearTimeout(he.current),ke.current&&(clearTimeout(ke.current),ke.current=null),be.current){try{be.current.pause()}catch{}be.current=null}},Ae=()=>{b({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),je([!1,!1,!1]),v(null),y(null),P(null),S([]),w(null),Y(!1),K(0)},Qt=()=>{if(i&&be.current){try{be.current.currentTime=0,be.current.play()}catch{}ke.current&&clearTimeout(ke.current),ke.current=setTimeout(()=>{Gn()},2e3)}},Gn=()=>{if(ke.current&&(clearTimeout(ke.current),ke.current=null),be.current)try{be.current.pause(),be.current.currentTime=0}catch{}},Ge=()=>{if(R)return;L(null),A(!1),ne(null),_(!0),Qt();const ie=Math.floor(Math.random()*rn.length),oe=rn[ie],pe=Rd(ee),Re=ie*nr+nr/2,xe=(Math.random()-.5)*(nr*.3),Ie=360-Re+xe;let it=Rd(Ie-pe);const Nn=Sn.FULL_TURNS*360+it,At=ee+Nn+Sn.OVERSHOOT;$(`transform ${qe?1e3:Sn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),H(At),ac([20,50,20]),setTimeout(()=>{$(`transform ${qe?200:Sn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),H(pr=>pr-Sn.OVERSHOOT)},qe?1e3:Sn.DURATION),setTimeout(()=>{Gn(),_(!1),L({cat:oe,index:ie}),y(oe),ne(oe.color),A(!0),setTimeout(()=>{A(!1),p("interstitial")},1500),setTimeout(()=>ne(null),1e3)},(qe?1e3:Sn.DURATION)+(qe?200:Sn.SETTLE_DURATION)+100)},J=()=>{const ie=x.filter(pe=>{const Re=pe.category.toLowerCase(),xe=h.name.toLowerCase();return Re.includes(xe)||xe.includes(Re)});let oe;ie.length>0?oe=ie[Math.floor(Math.random()*ie.length)]:oe=x[Math.floor(Math.random()*x.length)],oe?(v(oe),j(30),S([]),w(null),Y(!1),me(!1),p("question")):p("wheel")},le=(ie,oe,pe=!1)=>{if(!pe){me(!0);return}const Re=m.qIndex,xe=[...m.progress];xe[Re]=!0;const Ie=[...de];if(Ie[Re]=!!ie,je(Ie),b(it=>({...it,progress:xe,qIndex:it.qIndex+1})),ie&&(o(5),l(1),Be(!0)),ae(Re),q(!!ie),Re===2){const it=Ie.every(Boolean);W(it?"streakFlash":"modes")}else W(null);p("wheel")},_e=ie=>{if(!(m.lifelines[ie]||!C)){if(b(oe=>({...oe,lifelines:{...oe.lifelines,[ie]:!0}})),ie==="fifty"){const pe=C.options.map((Re,xe)=>xe).filter(Re=>Re!==C.correctIndex).slice(0,2);S(pe)}else if(ie==="audience"){const oe=40+Math.random()*25;let pe=100-oe;const Re=[0,0,0,0];Re[C.correctIndex]=Math.round(oe);const xe=[0,1,2,3].filter(Ie=>Ie!==C.correctIndex);xe.forEach((Ie,it)=>{if(it===xe.length-1)Re[Ie]=pe;else{const Nn=Math.floor(Math.random()*pe);Re[Ie]=Nn,pe-=Nn}}),w(Re)}}},Se=ie=>{P(ie),p("bonusInterstitial")},Ve=ie=>{ie&&k&&(c(k),i&&Dr("/sounds/coin.mp3",1)),setTimeout(()=>{e(),Ae()},3e3)},ve=()=>{p("wheel")};switch(f){case"wheel":return n.jsx(sg,{run:m,coins:t,xp:r,level:s,ownedCharacters:a,onSpin:Ge,onBack:e,spinning:R,angle:ee,transition:Q,result:F,showCallout:I,glowColor:X,soundOn:i,setSoundOn:u,showSparkle:re,pulseIdx:O,coinBurstTick:D,pendingProgressIdx:z,lastAnswerWasCorrect:ce,nextProgressIdx:Z});case"interstitial":return n.jsx(Pd,{category:h,onComplete:J,soundOn:i});case"streakFlash":return n.jsx(mg,{onDone:()=>p("characterPicker")});case"question":return n.jsx(Td,{question:C,category:h,onAnswer:le,run:m,timeLeft:E,usedLifelines:m.lifelines,onUseLifeline:_e,eliminatedOptions:T,audienceData:g,onBack:ve,timeUp:M,onTimeUpBackToWheel:()=>{Y(!1),p("wheel")},soundOn:i});case"characterPicker":return n.jsx(hg,{onSelect:Se});case"bonusInterstitial":return n.jsx(Pd,{category:rn.find(ie=>ir(ie.name)===k),onComplete:()=>p("bonusQuestion"),isBonus:!0,soundOn:i});case"bonusQuestion":if(!C){const ie=rn.find(oe=>ir(oe.name)===k);if(ie&&x.length>0){const oe=x.filter(Re=>{const xe=Re.category.toLowerCase(),Ie=ie.name.toLowerCase();return xe.includes(Ie)||Ie.includes(xe)}),pe=oe.length>0?oe[Math.floor(Math.random()*oe.length)]:x[Math.floor(Math.random()*x.length)];v(pe),j(30)}return n.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:n.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return n.jsx(Td,{question:C,category:rn.find(ie=>ir(ie.name)===k)||rn[0],onAnswer:Ve,run:{...m,lifelines:{fifty:!0,audience:!0}},timeLeft:E,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:e,soundOn:i});default:return n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-4",children:"Unknown State"}),n.jsx("button",{onClick:()=>p("wheel"),className:"px-6 py-3 bg-blue-600 rounded-lg",children:"Back to Wheel"})]})})}}function xg({lives:e,maxLives:t=3}){const[r,s]=d.useState(null),[a,i]=d.useState(e);return d.useEffect(()=>{e<a?(s(a-1),setTimeout(()=>s(null),600)):e>a&&(s(e-1),setTimeout(()=>s(null),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"relative",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"flex items-center gap-3 px-5 py-1.5 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/10 shadow-xl",children:[n.jsx("div",{className:"flex items-center gap-1.5",children:[...Array(t)].map((o,l)=>n.jsx("div",{className:`relative transition-all duration-300 ${l<e?"scale-100":"scale-75"}`,children:n.jsxs("div",{className:"relative",children:[l<e?n.jsxs("div",{className:`relative ${l===r&&e>a?"heart-gained":""}`,children:[n.jsx("span",{className:`text-3xl drop-shadow-lg ${l===e-1?"heart-beat":""}`,children:"❤️"}),l===e-1&&e===1&&n.jsx("div",{className:"absolute inset-0 rounded-full heart-glow"})]}):n.jsx("div",{className:`relative ${l===r&&e<a?"heart-lost":""}`,children:n.jsx("span",{className:"text-3xl opacity-20 grayscale",children:"💔"})}),l===r&&e>a&&n.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:[n.jsx("div",{className:"absolute w-10 h-10 bg-green-400 rounded-full animate-ping opacity-30"}),n.jsx("span",{className:"absolute text-sm font-bold text-green-400 animate-bounce",children:"+1"})]})]})},l))}),n.jsx("div",{className:"pr-1",children:n.jsxs("div",{className:`text-sm font-bold ${e===1?"text-red-400 animate-pulse":e===t?"text-green-400":"text-white"}`,children:[e,"/",t]})})]}),e===1&&n.jsx("div",{className:"absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("div",{className:"px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm",children:n.jsx("span",{className:"text-xs font-medium text-red-400 animate-pulse",children:"Last life! Be careful! ⚠️"})})})]})}function gg({question:e,onAnswer:t,lives:r,questionCount:s,correctStreak:a,totalScore:i,currentDifficulty:o,timeLeft:l,showFeedback:c,lastAnswerCorrect:u,checkpoint:f,onBack:p,soundOn:m,setSoundOn:b}){const[x,N]=d.useState(!1),[C,v]=d.useState(null),[h,y]=d.useState(!1),[E,j]=d.useState(!1),T={EASY:{emoji:"🌱",color:"from-emerald-400 to-green-500",accentGradient:"from-emerald-500/20 to-green-600/20",label:"Sprout",motivationalText:"Great start! Keep growing! 🌱"},MEDIUM:{emoji:"🌻",color:"from-yellow-400 to-amber-500",accentGradient:"from-yellow-500/20 to-amber-600/20",label:"Blooming",motivationalText:"You're blooming beautifully! 🌻"},HARD:{emoji:"🔥",color:"from-orange-400 to-red-500",accentGradient:"from-orange-500/20 to-red-600/20",label:"On Fire",motivationalText:"You're on fire! Keep it up! 🔥"},EXPERT:{emoji:"⚡",color:"from-purple-400 to-indigo-500",accentGradient:"from-purple-500/20 to-indigo-600/20",label:"Lightning",motivationalText:"Lightning fast thinking! ⚡"},LEGENDARY:{emoji:"👑",color:"from-pink-400 to-purple-600",accentGradient:"from-pink-500/20 to-purple-600/20",label:"Legendary",motivationalText:"Legendary performance! 👑"}},S=T[o];d.useEffect(()=>{a>0&&a%5===0&&c&&u&&(y(!0),setTimeout(()=>y(!1),3e3))},[a,c,u]),d.useEffect(()=>{c&&u&&(j(!0),setTimeout(()=>j(!1),1e3))},[c,u]);const g=w=>{c||(v(w),t(w))};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[100px] opacity-10 float-animation",children:S.emoji}),n.jsx("div",{className:"absolute top-40 right-20 text-[80px] opacity-10 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute bottom-40 left-20 text-[90px] opacity-10 float-animation",style:{animationDelay:"2s"},children:"🎯"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[70px] opacity-10 float-animation",style:{animationDelay:"3s"},children:"🏆"})]}),n.jsxs("div",{className:"relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-8 slide-in",children:[n.jsx("button",{onClick:()=>N(!0),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"◀️"})}),n.jsx(xg,{lives:r}),n.jsx("button",{onClick:()=>b(!m),className:"w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:m?"🔊":"🔇"})})]}),n.jsx("div",{className:`glass-card rounded-3xl p-2 shadow-xl mb-2 mt-12 slide-in bg-gradient-to-r ${S.accentGradient}`,style:{animationDelay:"0.1s"},children:n.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-3xl font-black bg-gradient-to-r ${S.color} bg-clip-text text-transparent ${E?"score-pulse":""}`,children:i}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Points"}),c&&u&&n.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-green-400 font-bold text-sm coin-animation",children:["+",T[o]?o==="EASY"?10:o==="MEDIUM"?20:o==="HARD"?30:o==="EXPERT"?50:100:10]})})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-black text-white",children:s}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Questions"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:`text-3xl font-black text-orange-400 ${a>0?"streak-flame":""}`,children:a}),n.jsx("div",{className:"text-xs text-white/60 font-medium mt-1",children:"Streak 🔥"})]})]})}),n.jsxs("div",{className:"flex justify-between items-center mb-1 slide-in",style:{animationDelay:"0.2s"},children:[n.jsx("div",{className:`px-4 py-3 rounded-full bg-gradient-to-r ${S.color} text-white shadow-lg`,children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:S.emoji}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-sm",children:S.label}),n.jsxs("div",{className:"text-[10px] opacity-90",children:["Level ",s+1]})]})]})}),n.jsx("div",{className:"relative",children:n.jsxs("div",{className:"w-20 h-20 glass-card rounded-full shadow-xl flex items-center justify-center",children:[n.jsxs("svg",{className:"absolute inset-0 w-full h-full",children:[n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"6",className:"progress-ring"}),n.jsx("circle",{cx:"40",cy:"40",r:"35",fill:"none",stroke:l<=5?"#ef4444":l<=10?"#f59e0b":"#10b981",strokeWidth:"6",strokeDasharray:`${l/30*220} 220`,strokeLinecap:"round",className:"progress-ring transition-all duration-1000"})]}),n.jsx("div",{className:"relative z-10",children:n.jsx("span",{className:`text-2xl font-black ${l<=5?"text-red-400 animate-pulse":l<=10?"text-amber-400":"text-white"}`,children:l})})]})})]})]}),n.jsxs("div",{className:"px-4 slide-in",style:{animationDelay:"0.3s"},children:[n.jsxs("div",{className:"glass-card rounded-3xl shadow-xl p-6 mb-6 border border-white/10",children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-white/40 uppercase tracking-wider",children:["Question ",s+1]})}),n.jsx("h2",{className:"text-xl font-bold text-center text-white leading-relaxed",children:e.prompt})]}),n.jsx("div",{className:"space-y-3",children:e.options.map((w,k)=>{const P=["A","B","C","D"],M=["from-blue-400 to-blue-500","from-green-400 to-green-500","from-yellow-400 to-yellow-500","from-purple-400 to-purple-500"];let Y="glass-card border border-white/10",ee="";return c&&(k===e.correctIndex?(Y="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400",ee="correct-bounce"):C===k&&!u&&(Y="bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400",ee="wrong-shake")),n.jsx("button",{onClick:()=>g(k),disabled:c,className:`w-full p-4 rounded-2xl shadow-lg transition-all ${Y} ${ee} 
                  ${c?"":"hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10"} slide-in`,style:{animationDelay:`${.4+k*.05}s`},children:n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${M[k]} 
                    text-white font-bold text-xl flex items-center justify-center shadow-md`,children:P[k]}),n.jsx("span",{className:"flex-1 text-left font-medium text-white",children:w}),c&&k===e.correctIndex&&n.jsx("span",{className:"text-2xl",children:"✅"}),c&&C===k&&!u&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},k)})}),c&&n.jsx("div",{className:"mt-6 text-center slide-in",children:n.jsx("p",{className:"text-sm font-medium text-white/70",children:u?S.motivationalText:"No worries! Keep trying! 💪"})}),f>0&&n.jsx("div",{className:"mt-4 flex justify-center slide-in",style:{animationDelay:"0.6s"},children:n.jsx("div",{className:"glass-card rounded-full px-4 py-2 shadow-lg border border-white/10",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏁"}),n.jsxs("span",{className:"text-sm font-bold text-white/80",children:["Checkpoint: Question ",f]})]})})})]}),h&&n.jsx("div",{className:"fixed inset-0 pointer-events-none flex items-center justify-center z-50",children:n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-6 rounded-3xl shadow-2xl animate-bounce",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🎉"}),n.jsx("div",{className:"text-2xl font-black mb-2",children:"AMAZING STREAK!"}),n.jsx("div",{className:"text-lg",children:"You earned a life back! ❤️"})]})})}),x&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🚪"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the game?"}),n.jsx("p",{className:"text-white/70",children:"Your progress saves at checkpoints!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>N(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:p,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Exit"})]})]})})]})}function vg({score:e,questionsAnswered:t,highScore:r,checkpoint:s,onRestart:a,onContinue:i,onBack:o}){const l=e>r,[c,u]=d.useState(!1),[f,p]=d.useState(0),[m,b]=d.useState(!1),x=d.useRef(null);d.useEffect(()=>{const y=e/60;let E=0;const j=setInterval(()=>{E+=y,E>=e?(p(e),clearInterval(j),l&&(u(!0),setTimeout(()=>u(!1),5e3))):p(Math.floor(E))},2e3/60);return setTimeout(()=>b(!0),2200),()=>clearInterval(j)},[e,l]),d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]);const C=(()=>t>=100?{emoji:"👑",title:"LEGENDARY!",subtitle:"You're a true Quiz Legend!",color:"from-purple-400 to-pink-500",stars:5}:t>=50?{emoji:"🏆",title:"CHAMPION!",subtitle:"Outstanding performance!",color:"from-yellow-400 to-amber-500",stars:5}:t>=30?{emoji:"💎",title:"EXPERT!",subtitle:"You're getting really good!",color:"from-blue-400 to-cyan-500",stars:4}:t>=20?{emoji:"⭐",title:"STAR PLAYER!",subtitle:"Keep up the great work!",color:"from-green-400 to-emerald-500",stars:3}:t>=10?{emoji:"🎯",title:"NICE TRY!",subtitle:"You're improving fast!",color:"from-orange-400 to-red-500",stars:2}:{emoji:"🌟",title:"GOOD START!",subtitle:"Every expert was once a beginner!",color:"from-indigo-400 to-purple-500",stars:1})();return n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[n.jsx("div",{className:"absolute top-20 left-10 text-[150px] opacity-5 float-animation",children:"🏆"}),n.jsx("div",{className:"absolute bottom-20 right-10 text-[120px] opacity-5 float-animation",style:{animationDelay:"1s"},children:"⭐"}),n.jsx("div",{className:"absolute top-40 right-20 text-[100px] opacity-5 float-animation",style:{animationDelay:"2s"},children:"🎯"})]}),c&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50",children:[...Array(40)].map((v,h)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`},children:n.jsx("span",{className:"text-3xl",children:["🎉","⭐","🎊","✨","🎈","💫","🌟"][Math.floor(Math.random()*7)]})},h))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center",children:[n.jsxs("div",{className:"mb-8 slide-up",children:[n.jsx("h1",{className:"text-6xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent",children:"GAME OVER"}),l&&n.jsx("div",{className:"fade-in",style:{animationDelay:"1s"},children:n.jsx("div",{className:"inline-block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold shadow-2xl glow-text",children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-3xl",children:"🏆"}),n.jsx("span",{className:"text-xl",children:"NEW HIGH SCORE!"}),n.jsx("span",{className:"text-3xl",children:"🏆"})]})})})]}),m&&n.jsx("div",{className:"mb-8 slide-up",style:{animationDelay:"0.3s"},children:n.jsxs("div",{className:`glass-card rounded-3xl p-6 bg-gradient-to-r ${C.color} bg-opacity-20 border-2 border-white/20 shadow-2xl`,children:[n.jsx("div",{className:"text-6xl mb-3 bounce-animation",children:C.emoji}),n.jsx("h2",{className:"text-3xl font-black mb-2",children:C.title}),n.jsx("p",{className:"text-white/80 mb-4",children:C.subtitle}),n.jsx("div",{className:"flex justify-center gap-1",children:[...Array(5)].map((v,h)=>n.jsx("span",{className:`text-2xl ${h<C.stars?"star-pop":""}`,style:{animationDelay:`${2.5+h*.1}s`},children:h<C.stars?"⭐":"☆"},h))})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 w-full max-w-md",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.4s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"🎯"}),n.jsx("div",{ref:x,className:`text-4xl font-black ${l?"text-yellow-400":"text-white"}`,children:f}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Points Earned"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:[t," questions"]})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-6 shadow-xl slide-up",style:{animationDelay:"0.5s"},children:[n.jsx("div",{className:"text-4xl mb-2",children:"📊"}),n.jsx("div",{className:"text-4xl font-black text-white",children:t}),n.jsx("div",{className:"text-sm text-white/60 font-medium",children:"Questions"}),n.jsx("div",{className:"mt-3 pt-3 border-t border-white/10",children:n.jsxs("div",{className:"text-xs text-white/50",children:["Best: ",Math.max(r,e)]})})]})]}),n.jsx("div",{className:"glass-card rounded-2xl px-6 py-4 mb-8 w-full max-w-md slide-up",style:{animationDelay:"0.6s"},children:n.jsx("p",{className:"text-white/80 font-medium",children:t>=50?"Incredible performance! You're a quiz master! 🌟":t>=20?"Great job! You're getting stronger! 💪":"Keep practicing! Every attempt makes you better! 🚀"})}),n.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[s>0&&i&&n.jsx("button",{onClick:i,className:"w-full py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.7s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏁"}),n.jsxs("span",{children:["Continue from Question ",s]})]})}),n.jsx("button",{onClick:a,className:"w-full py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] slide-up",style:{animationDelay:"0.8s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎮"}),n.jsx("span",{children:"Play Again"})]})}),n.jsx("button",{onClick:o,className:"w-full py-4 glass-card text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-white/10 slide-up",style:{animationDelay:"0.9s"},children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🏠"}),n.jsx("span",{children:"Back to Games"})]})})]})]})]})}const _d={EASY:{min:0,max:9,timer:30,points:10},MEDIUM:{min:10,max:24,timer:25,points:20},HARD:{min:25,max:49,timer:20,points:30},EXPERT:{min:50,max:99,timer:15,points:50},LEGENDARY:{min:100,max:1/0,timer:10,points:100}};function yg({onBack:e,isFromQuest:t}){const{coins:r,xp:s,level:a,soundOn:i,addCoins:o,addXp:l,setSoundOn:c}=sc(),[u,f]=d.useState("playing"),[p,m]=d.useState(3),[b,x]=d.useState(0),[N,C]=d.useState(0),[v,h]=d.useState(0),[y,E]=d.useState("EASY"),[j,T]=d.useState([]),[S,g]=d.useState(null),[w,k]=d.useState(30),[P,M]=d.useState(!1),[Y,ee]=d.useState(!1),[H,Q]=d.useState(0),$=d.useRef(null),R=d.useRef(new Set);d.useEffect(()=>(F(),U(),()=>{$.current&&clearTimeout($.current)}),[]),d.useEffect(()=>(u==="playing"&&S&&w>0&&!P&&($.current=setTimeout(()=>{k(q=>q<=1?(ne(),0):(q===6&&i&&ae("/sounds/tick.mp3",.8),q-1))},1e3)),()=>{$.current&&clearTimeout($.current)}),[u,S,w,P,i]),d.useEffect(()=>{const q=_(b);q!==y&&(E(q),i&&ae("/sounds/levelup.mp3",.6))},[b,y,i]),d.useEffect(()=>{b>0&&b%10===0&&(re(),Q(b),i&&ae("/sounds/checkpoint.mp3",.7))},[b,i]);const _=q=>q>=100?"LEGENDARY":q>=50?"EXPERT":q>=25?"HARD":q>=10?"MEDIUM":"EASY",F=async()=>{try{const G=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:W}=hr.parse(G,{header:!0,skipEmptyLines:!0,transformHeader:te=>te.trim().toLowerCase()}),O=W.map((te,de)=>{var Ee;const je=[te.option1,te.option2,te.option3,te.option4].map(me=>(me||"").trim()).filter(Boolean);if(je.length<4)return null;let Be={a:0,b:1,c:2,d:3}[(Ee=te.answer)==null?void 0:Ee.toLowerCase()];return Be===void 0&&(Be=je.findIndex(me=>me.toLowerCase()===(te.answer||"").toLowerCase())),Be===-1&&(Be=0),{id:te.id||`q_${de}`,prompt:(te.question||"").trim(),options:je,correctIndex:Be,category:(te.category||te.subject||"general").trim(),difficulty:(te.difficulty||"medium").toLowerCase()}}).filter(Boolean);T(O),L(O)}catch(q){console.error("Failed to load questions:",q)}},L=(q=j)=>{const G=q.filter(de=>!R.current.has(de.id));G.length===0&&(R.current.clear(),G.push(...q));const W=y.toLowerCase();let O=G.filter(de=>de.difficulty===W||de.difficulty==="medium");O.length===0&&(O=G);const te=O[Math.floor(Math.random()*O.length)];te&&(R.current.add(te.id),g(te),k(_d[y].timer),M(!1))},I=q=>{if(P)return;const G=q===S.correctIndex;ee(G),M(!0),G?A():X(),setTimeout(()=>{(p>0||G)&&(x(W=>W+1),L())},1500)},A=()=>{const q=_d[y].points;h(G=>G+q),C(G=>{const W=G+1;if(t){const O=JSON.parse(localStorage.getItem("questProgress")||"{}");O.winStreak=Math.max(O.winStreak||0,W),O.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(O)),W>=5&&console.log("Win streak quest completed!")}return W%5===0&&p<3&&(m(O=>Math.min(O+1,3)),i&&ae("/sounds/lifeup.mp3",.8)),W}),o(Math.floor(q/10)),l(1),i&&ae("/sounds/correct.mp3",.7)},X=()=>{C(0),m(q=>{const G=q-1;return G<=0&&(f("gameOver"),K()),G}),i&&ae("/sounds/wrong.mp3",.7),ce([200])},ne=()=>{X()},re=()=>{const q={questionCount:b,totalScore:v,lives:p,correctStreak:N,timestamp:Date.now()};localStorage.setItem("survival_checkpoint",JSON.stringify(q))},U=()=>{const q=localStorage.getItem("survival_checkpoint");if(q)try{const G=JSON.parse(q);Date.now()-G.timestamp<864e5?(x(G.questionCount),h(G.totalScore),m(G.lives),C(G.correctStreak),Q(G.questionCount)):localStorage.removeItem("survival_checkpoint")}catch(G){console.error("Failed to load checkpoint:",G)}},D=()=>{localStorage.removeItem("survival_checkpoint"),Q(0)},K=()=>{const q=parseInt(localStorage.getItem("survival_highscore")||"0");v>q&&(localStorage.setItem("survival_highscore",v.toString()),localStorage.setItem("survival_highquestions",b.toString()))},z=()=>{f("playing"),m(3),x(0),C(0),h(0),E("EASY"),R.current.clear(),D(),L()},B=()=>{f("playing"),L()},Z=()=>{if(t){const q=JSON.parse(localStorage.getItem("questProgress")||"{}");q.winStreak=Math.max(q.winStreak||0,N),q.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(q)),window.location.href="/profile/quests"}else e()},ae=(q,G=.5)=>{try{const W=new Audio(q);W.volume=G,W.play()}catch{}},ce=q=>{navigator.vibrate&&navigator.vibrate(q)};return d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),u==="gameOver"?n.jsx(vg,{score:v,questionsAnswered:b,highScore:parseInt(localStorage.getItem("survival_highscore")||"0"),checkpoint:H,onRestart:z,onContinue:H>0?B:null,onBack:Z}):S?n.jsx(gg,{question:S,onAnswer:I,lives:p,questionCount:b,correctStreak:N,totalScore:v,currentDifficulty:y,timeLeft:w,showFeedback:P,lastAnswerCorrect:Y,checkpoint:H,onBack:Z,soundOn:i,setSoundOn:c}):n.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:n.jsx("div",{className:"text-xl",children:"Loading questions..."})})}const rr=[{id:1,name:"Sandy Beach",emoji:"🏖️",theme:{background:"from-yellow-300 via-orange-300 to-blue-400",accent:"from-yellow-400 to-orange-400",cardBg:"from-amber-500/20 to-yellow-500/20",unlockGradient:"from-yellow-400 to-amber-500"},difficulty:"EASY",difficultyRange:{min:0,max:9},questionDifficulty:["easy"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:10,gemChance:.3,gemBonus:5,speedBonus:3,perfectBonus:50,treasurePiece:"🧩",completionCoins:30},description:"Start your adventure on the sunny shores! Easy questions to warm up.",unlockRequirement:null,visualElements:{bgEmojis:["🌊","🐚","🦀","⛱️","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","✨"]}},{id:2,name:"Jungle Cave",emoji:"🌴",theme:{background:"from-green-400 via-emerald-500 to-teal-600",accent:"from-green-500 to-emerald-600",cardBg:"from-green-500/20 to-emerald-500/20",unlockGradient:"from-green-400 to-emerald-500"},difficulty:"EASY-MEDIUM",difficultyRange:{min:10,max:24},questionDifficulty:["easy","medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:15,gemChance:.35,gemBonus:7,speedBonus:5,perfectBonus:75,treasurePiece:"🗝️",completionCoins:50},description:"Explore the mysterious jungle caves! Watch out for tricky vines!",unlockRequirement:{island:1,treasurePiece:!0},visualElements:{bgEmojis:["🌿","🦜","🐒","🦋","🌺"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🌟"]}},{id:3,name:"Crystal Mountain",emoji:"⛰️",theme:{background:"from-purple-400 via-pink-400 to-indigo-500",accent:"from-purple-500 to-pink-500",cardBg:"from-purple-500/20 to-pink-500/20",unlockGradient:"from-purple-400 to-pink-500"},difficulty:"MEDIUM",difficultyRange:{min:25,max:49},questionDifficulty:["medium"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:20,gemChance:.4,gemBonus:10,speedBonus:7,perfectBonus:100,treasurePiece:"💎",completionCoins:75},description:"Climb the sparkling crystal peaks! Medium challenges await!",unlockRequirement:{island:2,treasurePiece:!0},visualElements:{bgEmojis:["✨","🔮","⭐","🌟","💫"],diggingEmoji:"⚒️",foundEmojis:["💎","🪙","🌈"]}},{id:4,name:"Pirate Ship",emoji:"🏴‍☠️",theme:{background:"from-slate-600 via-blue-600 to-cyan-500",accent:"from-slate-700 to-blue-700",cardBg:"from-slate-500/20 to-blue-500/20",unlockGradient:"from-slate-500 to-blue-600"},difficulty:"MEDIUM-HARD",difficultyRange:{min:50,max:99},questionDifficulty:["medium","hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:30,gemChance:.45,gemBonus:15,speedBonus:10,perfectBonus:150,treasurePiece:"🗺️",completionCoins:100},description:"Ahoy matey! Navigate the pirate ship's challenging puzzles!",unlockRequirement:{island:3,treasurePiece:!0},visualElements:{bgEmojis:["⚓","🦜","💀","🌊","⛵"],diggingEmoji:"🗡️",foundEmojis:["💎","🪙","👑"]}},{id:5,name:"Volcano Peak",emoji:"🌋",theme:{background:"from-red-500 via-orange-500 to-yellow-500",accent:"from-red-600 to-orange-600",cardBg:"from-red-500/20 to-orange-500/20",unlockGradient:"from-red-500 to-orange-500"},difficulty:"HARD",difficultyRange:{min:100,max:1/0},questionDifficulty:["hard"],requiredCorrect:2,timeLimit:300,rewards:{perCorrectAnswer:50,gemChance:.5,gemBonus:25,speedBonus:15,perfectBonus:200,treasurePiece:"👑",completionCoins:150},description:"The ultimate challenge! Can you conquer the volcano?",unlockRequirement:{island:4,treasurePiece:!0},visualElements:{bgEmojis:["🔥","🌋","💥","⚡","🔴"],diggingEmoji:"⛏️",foundEmojis:["💎","🪙","🏆"]}}],ze={SHOVELS_PER_ISLAND:3,QUESTIONS_PER_ISLAND:3,SPEED_BONUS_THRESHOLD:5,MIN_CORRECT_FOR_TREASURE:2,FINAL_TREASURE_REWARD:200,FINAL_TREASURE_TITLE:"Treasure Master",DIGGING_ANIMATION_DURATION:1500,REWARD_DISPLAY_DURATION:2e3,TRANSITION_DURATION:500,STORAGE_KEYS:{PROGRESS:"treasureHunt_progress",STATS:"treasureHunt_stats",UNLOCKED_ISLANDS:"treasureHunt_unlocked",COMPLETED_ISLANDS:"treasureHunt_completed",TREASURE_PIECES:"treasureHunt_pieces"},SOUNDS:{DIG:"/sounds/dig.mp3",TREASURE_FOUND:"/sounds/treasure.mp3",GEM_FOUND:"/sounds/gem.mp3",WRONG:"/sounds/wrong.mp3",ISLAND_COMPLETE:"/sounds/islandcomplete.mp3",ISLAND_UNLOCK:"/sounds/unlock.mp3",FINAL_TREASURE:"/sounds/victory.mp3",TICK:"/sounds/tick.mp3",SHOVEL_BREAK:"/sounds/break.mp3"}},cn=e=>rr.find(t=>t.id===e),bg=(e,t)=>{const r=cn(e);if(!r.unlockRequirement)return!0;const s=t[r.unlockRequirement.island];return s&&s.treasurePiece},wg=(e,t)=>{const r={0:["Keep trying! You'll get it! 💪","Don't give up! Adventure awaits! 🌟","Practice makes perfect! 🎯"],1:["Good effort! Almost there! 🌈","Nice try! Keep going! ⭐","You're learning fast! 🚀"],2:["Awesome! You found treasure! 🏆","Great job, explorer! 🎉","You're amazing! ✨"],3:["PERFECT! You're a champion! 👑","INCREDIBLE! Master explorer! 🌟","LEGENDARY performance! 🏆"]},s=r[e]||r[0];return s[Math.floor(Math.random()*s.length)]},jg=e=>rr.map(t=>{var r;return{id:t.id,piece:t.rewards.treasurePiece,collected:((r=e[t.id])==null?void 0:r.treasurePiece)||!1}});function Ng({islands:e,islandProgress:t,onSelectIsland:r,onBack:s,soundOn:a,setSoundOn:i,totalStats:o}){const[l,c]=d.useState(!1),u=jg(t),f=u.filter(m=>m.collected).length,p=Math.round(f/e.length*100);return d.useEffect(()=>(document.body.style.position="fixed",document.body.style.overflow="hidden",document.body.style.width="100%",document.body.style.height="100%",()=>{document.body.style.position="",document.body.style.overflow="",document.body.style.width="",document.body.style.height=""}),[]),n.jsxs("div",{className:"fixed inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 overflow-hidden flex flex-col",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"absolute inset-0",children:[n.jsx("div",{className:"absolute top-10 cloud-drift",style:{animationDelay:"0s"},children:n.jsx("div",{className:"text-6xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-12 cloud-drift",style:{animationDelay:"7s",animationDuration:"25s"},children:n.jsx("div",{className:"text-5xl opacity-40",children:"☁️"})}),n.jsx("div",{className:"absolute top-10 right-12",children:n.jsx("div",{className:"text-6xl pulse-animation opacity-80",children:"☀️"})}),n.jsx("div",{className:"absolute top-16 left-20 float-animation opacity-60",children:n.jsx("div",{className:"text-2xl",children:"🦜"})})]}),n.jsxs("div",{className:"relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:s,className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅"})}),n.jsx("div",{className:"glass-card rounded-2xl px-3 py-2 shadow-lg",children:n.jsxs("div",{className:"text-white font-bold text-center",children:[n.jsx("div",{className:"text-[10px] opacity-90",children:"TREASURE HUNT"}),n.jsx("div",{className:"text-sm",children:"🏝️ Island Explorer 🏝️"})]})}),n.jsx("button",{onClick:()=>i(!a),className:"w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:a?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 shadow-xl mt-2",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white font-bold text-sm",children:"Adventure Progress"}),n.jsxs("span",{className:"text-white font-bold text-sm",children:[p,"%"]})]}),n.jsx("div",{className:"w-full h-2.5 bg-white/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000",style:{width:`${p}%`}})}),n.jsx("button",{onClick:()=>c(!0),className:"mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{children:"🏆"}),n.jsxs("span",{children:["Treasure Pieces: ",f,"/5"]}),n.jsx("span",{children:"🏆"})]})})]})]}),n.jsx("div",{className:"flex-1 flex items-center justify-center px-4 py-4",children:n.jsxs("div",{className:"w-full max-w-md",children:[n.jsx("div",{className:"grid grid-cols-2 gap-3",children:e.slice(0,4).map(m=>{const b=t[m.id],x=b==null?void 0:b.unlocked,N=b==null?void 0:b.treasurePiece,C=b==null?void 0:b.perfectScore;return n.jsxs("button",{onClick:()=>r(m.id),disabled:!x,className:`relative aspect-square rounded-2xl transition-all ${x?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${x?m.theme.background:"from-gray-400 to-gray-500"}`,children:x&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]})}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:m.id})}),C&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${x?"bounce-animation":""}`,children:x?m.emoji:"❓"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:m.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${x?"bg-white/30":"bg-black/30"} text-white`,children:m.difficulty}),N&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:m.rewards.treasurePiece}),(b==null?void 0:b.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[b.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},m.id)})}),n.jsx("div",{className:"flex justify-center mt-3",children:e.slice(4,5).map(m=>{const b=t[m.id],x=b==null?void 0:b.unlocked,N=b==null?void 0:b.treasurePiece,C=b==null?void 0:b.perfectScore;return n.jsxs("button",{onClick:()=>r(m.id),disabled:!x,className:`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${x?"hover:scale-105 active:scale-95 shadow-xl":"opacity-50 grayscale"}`,children:[n.jsxs("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${x?m.theme.background:"from-gray-400 to-gray-500"}`,children:[x&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute top-1 right-1 text-lg sparkle-animation",children:"✨"}),n.jsx("div",{className:"absolute bottom-1 left-1 text-sm sparkle-animation",style:{animationDelay:"1s"},children:"⭐"})]}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse"})]}),!x&&n.jsx("div",{className:"absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center",children:n.jsx("div",{className:"text-4xl",children:"🔒"})}),n.jsxs("div",{className:"relative h-full flex flex-col items-center justify-center p-3",children:[n.jsx("div",{className:"absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center",children:n.jsx("span",{className:"text-white font-bold text-sm",children:m.id})}),C&&n.jsx("div",{className:"absolute top-1 right-1 text-lg",children:"💯"}),n.jsx("div",{className:`text-5xl mb-1 ${x?"bounce-animation":""}`,children:x?m.emoji:"👑"}),n.jsx("div",{className:"text-white font-bold text-sm text-center mb-1",children:m.name}),n.jsx("div",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${x?"bg-white/30":"bg-black/30"} text-white`,children:m.difficulty}),N&&n.jsx("div",{className:"absolute bottom-1 text-2xl pulse-animation",children:m.rewards.treasurePiece}),(b==null?void 0:b.attempts)>0&&n.jsxs("div",{className:"absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1",children:[n.jsxs("span",{children:[b.bestScore,"/3"]}),n.jsx("span",{children:"⭐"})]})]})]},m.id)})})]})}),n.jsx("div",{className:"relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+3rem)]",children:n.jsx("div",{className:"bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💰"}),n.jsx("div",{className:"text-yellow-300 font-black text-lg",children:o.totalCoinsEarned}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Total Coins"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"💎"}),n.jsx("div",{className:"text-cyan-300 font-black text-lg",children:o.totalGemsFound}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Gems Found"})]}),n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-2xl mb-0.5 filter drop-shadow-lg",children:"📝"}),n.jsxs("div",{className:"text-green-300 font-black text-lg",children:[o.totalCorrectAnswers,"/",o.totalQuestionsAnswered]}),n.jsx("div",{className:"text-white/80 text-[10px] font-medium",children:"Correct"})]})]})})}),l&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl",children:[n.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-6",children:"🏆 Treasure Collection 🏆"}),n.jsx("div",{className:"flex justify-center gap-4 mb-6",children:u.map((m,b)=>n.jsx("div",{className:`text-5xl ${m.collected?"":"opacity-30 grayscale"}`,children:m.collected?m.piece:"❓"},m.id))}),n.jsx("div",{className:"text-center text-white mb-6",children:f===5?n.jsxs("div",{children:[n.jsx("p",{className:"text-lg font-bold mb-2",children:"🎉 COMPLETE! 🎉"}),n.jsx("p",{className:"text-sm opacity-90",children:"You're a true Treasure Master!"})]}):n.jsx("p",{className:"text-sm opacity-90",children:"Collect all 5 pieces to unlock the final treasure!"})}),n.jsx("button",{onClick:()=>c(!1),className:"w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors",children:"Close"})]})})]})}function kg({island:e,progress:t,onStart:r,onClose:s,soundOn:a}){const[i,o]=d.useState(!1);d.useEffect(()=>{o(!0)},[]);const l=(t==null?void 0:t.attempts)>0,c=t==null?void 0:t.treasurePiece;t==null||t.perfectScore;const u=(t==null?void 0:t.bestScore)||0,f=()=>{if(a){const m=new Audio("/sounds/start.mp3");m.volume=.5,m.play().catch(()=>{})}r()},p=m=>{const b=Math.floor(m/60),x=m%60;return`${b}:${x.toString().padStart(2,"0")}`};return n.jsxs("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:`relative w-full max-w-sm bg-gradient-to-br ${e.theme.background} rounded-2xl shadow-2xl ${i?"slide-up":""}`,children:[n.jsx("div",{className:"relative p-4 pb-2",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-6xl mb-2 pulse-animation",children:e.emoji}),n.jsx("h2",{className:"text-2xl font-black text-white",children:e.name}),n.jsx("div",{className:"inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full mt-2",children:n.jsxs("span",{className:"text-white font-bold text-sm",children:["Level ",e.id," • ",e.difficulty]})})]})}),n.jsxs("div",{className:"px-4 py-3 space-y-2",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Time"}),n.jsx("div",{className:"text-white font-bold",children:p(e.timeLimit)})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-white/70 text-xs mb-1",children:"Questions"}),n.jsx("div",{className:"text-white font-bold",children:ze.QUESTIONS_PER_ISLAND})]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3 flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:e.rewards.treasurePiece}),n.jsx("span",{className:"text-white font-medium",children:"To Win"})]}),n.jsxs("span",{className:"text-white font-bold",children:[e.requiredCorrect,"/3 Correct"]})]}),n.jsxs("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:[n.jsx("div",{className:"text-white font-bold text-sm mb-2",children:"Rewards"}),n.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💰"}),n.jsx("div",{className:"text-white/70 text-xs",children:e.rewards.perCorrectAnswer})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"💎"}),n.jsxs("div",{className:"text-white/70 text-xs",children:[Math.round(e.rewards.gemChance*100),"%"]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"⚡"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.speedBonus]})]}),n.jsxs("div",{children:[n.jsx("div",{className:"text-xl",children:"🏆"}),n.jsxs("div",{className:"text-white/70 text-xs",children:["+",e.rewards.perfectBonus]})]})]})]}),l&&n.jsx("div",{className:"bg-black/10 backdrop-blur rounded-xl p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("div",{className:"flex gap-1",children:[...Array(3)].map((m,b)=>n.jsx("span",{className:"text-lg",children:b<u?"⭐":"☆"},b))}),n.jsxs("div",{className:"text-white text-sm",children:[n.jsxs("span",{className:"font-bold",children:[u,"/3"]})," • ",t.attempts," tries"]}),c&&n.jsx("div",{className:"text-2xl",children:e.rewards.treasurePiece})]})})]}),n.jsxs("div",{className:"p-4 pt-2 space-y-2",children:[n.jsx("button",{onClick:f,className:"w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-xl font-black text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("span",{className:"flex items-center justify-center gap-2",children:[n.jsx("span",{className:"text-xl",children:"🏴‍☠️"}),n.jsx("span",{children:l?"Play Again":"Start Adventure"}),n.jsx("span",{className:"text-xl",children:"🏴‍☠️"})]})}),n.jsx("button",{onClick:s,className:"w-full py-2 bg-white/20 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-colors",children:"Back to Map"})]})]})]})}function Sg({shovelsRemaining:e,showBreak:t=!1}){const[r,s]=d.useState(!1),[a,i]=d.useState(e),o=3;return d.useEffect(()=>{e<a&&(s(!0),setTimeout(()=>s(!1),1e3)),i(e)},[e,a]),n.jsxs("div",{className:"inline-block",children:[n.jsx("style",{jsx:!0,children:`
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
                  `,children:u||f?"⛏️":"🪦"}),f&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:n.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 40 40",children:[n.jsx("path",{d:"M20,10 L18,20 L22,30",stroke:"#ff4444",strokeWidth:"2",fill:"none",opacity:"0.8",className:"shovel-crack"}),n.jsx("path",{d:"M15,15 L20,20 L25,18",stroke:"#ff4444",strokeWidth:"1.5",fill:"none",opacity:"0.6",className:"shovel-crack",style:{animationDelay:"0.1s"}})]})}),n.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[n.jsx("span",{className:"absolute top-0 left-1/2 text-xs shovel-fall",children:"💔"}),n.jsx("span",{className:"absolute top-1/2 left-0 text-xs shovel-fall",style:{animationDelay:"0.2s"},children:"✨"}),n.jsx("span",{className:"absolute top-1/2 right-0 text-xs shovel-fall",style:{animationDelay:"0.3s"},children:"💥"})]})]}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:`text-xs font-bold ${u?"text-blue-600":"text-white/30"}`,children:c+1})})]},c)})}),e===0&&n.jsx("span",{className:"text-red-400 text-sm font-bold animate-pulse ml-2",children:"No shovels left!"}),e===1&&n.jsx("span",{className:"text-red-500 text-sm font-bold ml-2",children:"Last chance!"})]})})]})}function Cg({island:e,foundGem:t,onComplete:r}){const[s,a]=d.useState("digging"),[i,o]=d.useState(!1),[l,c]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(f=>setTimeout(f,800)),a("revealing"),o(!0),t&&(await new Promise(f=>setTimeout(f,400)),c(!0)),await new Promise(f=>setTimeout(f,1e3)),a("complete"),await new Promise(f=>setTimeout(f,300)),r()})()},[t,r]),n.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),s==="digging"&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-8xl dig-animation",children:e.visualElements.diggingEmoji}),[...Array(8)].map((u,f)=>n.jsx("div",{className:"dirt-particle text-4xl",style:{"--fly-x":`${(Math.random()-.5)*200}px`,"--fly-y":`${-Math.random()*150-50}px`,left:"50%",top:"60%",animationDelay:`${f*.1}s`},children:"🟫"},f)),n.jsx("div",{className:"absolute -bottom-4 left-1/2 -translate-x-1/2",children:n.jsx("div",{className:"text-6xl opacity-50",children:"💨"})})]}),s==="revealing"&&n.jsxs("div",{className:"relative",children:[i&&n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"w-32 h-32 rounded-full bg-yellow-400/30 blur-xl glow-effect"})}),n.jsxs("div",{className:"relative flex items-center justify-center",children:[n.jsx("div",{className:"text-7xl treasure-reveal treasure-float",children:"💰"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{left:"-30px"},children:"🪙"}),n.jsx("div",{className:"absolute text-5xl coin-spin",style:{right:"-30px",animationDelay:"0.5s"},children:"🪙"}),n.jsx("div",{className:"absolute text-4xl coin-spin",style:{top:"-30px",animationDelay:"1s"},children:"🪙"})]}),[...Array(6)].map((u,f)=>n.jsx("div",{className:"absolute text-3xl star-burst",style:{left:"50%",top:"50%",transform:`translate(-50%, -50%) rotate(${f*60}deg) translateY(-40px)`,animationDelay:`${f*.1}s`},children:"⭐"},f))]}),l&&n.jsxs("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2",children:[n.jsxs("div",{className:"relative",children:[n.jsx("div",{className:"text-6xl gem-sparkle",children:"💎"}),n.jsx("div",{className:"absolute -top-2 -left-2 text-2xl animate-pulse",children:"✨"}),n.jsx("div",{className:"absolute -top-2 -right-2 text-2xl animate-pulse",style:{animationDelay:"0.3s"},children:"✨"}),n.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2 text-2xl animate-pulse",style:{animationDelay:"0.6s"},children:"✨"})]}),n.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap",children:n.jsx("span",{className:"text-cyan-300 font-black text-lg drop-shadow-lg",children:"RARE GEM!"})})]}),n.jsx("div",{className:"absolute -bottom-16 left-1/2 -translate-x-1/2 text-center",children:n.jsx("div",{className:"text-white font-black text-2xl drop-shadow-lg",children:t?"AMAZING FIND!":"TREASURE FOUND!"})})]}),s==="complete"&&n.jsx("div",{className:"relative opacity-0 transition-opacity duration-300",children:n.jsx("div",{className:"text-7xl",children:"✅"})})]})}function Eg({island:e,question:t,questionNumber:r,totalQuestions:s,shovelsRemaining:a,timeRemaining:i,coinsEarned:o,gemsFound:l,onAnswer:c,onQuit:u,soundOn:f,setSoundOn:p}){const[m,b]=d.useState(null),[x,N]=d.useState(!1),[C,v]=d.useState(!1),[h,y]=d.useState(!1),[E,j]=d.useState(!1),[T,S]=d.useState(!1),[g,w]=d.useState(!1),k=d.useRef(null);d.useEffect(()=>{b(null),N(!1),v(!1),y(!1),j(!1),w(!1)},[t]);const P=H=>{const Q=Math.floor(H/60),$=H%60;return`${Q}:${$.toString().padStart(2,"0")}`},M=()=>i<=10?"critical":i<=30?"warning":"normal",Y=H=>{if(g||x)return;b(H),w(!0);const Q=H===t.correctIndex;v(Q),setTimeout(()=>{if(N(!0),f)if(Q){const $=new Audio("/sounds/dig.mp3");$.volume=.5,$.play().catch(()=>{})}else{const $=new Audio("/sounds/wrong.mp3");$.volume=.5,$.play().catch(()=>{})}Q&&(y(!0),Math.random()<e.rewards.gemChance&&setTimeout(()=>{if(j(!0),f){const R=new Audio("/sounds/gem.mp3");R.volume=.6,R.play().catch(()=>{})}},800)),setTimeout(()=>{c(H)},Q?2e3:1500)},300)},ee=M();return n.jsxs("div",{className:`min-h-screen bg-gradient-to-br ${e.theme.background} relative overflow-hidden`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:e.visualElements.bgEmojis.map((H,Q)=>n.jsx("div",{className:"absolute text-7xl opacity-10 float-animation",style:{top:`${20+Q*15}%`,left:`${10+Q*18}%`,animationDelay:`${Q*.5}s`,animationDuration:`${3+Q}s`},children:H},Q))}),n.jsxs("div",{className:"relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]",children:[n.jsxs("div",{className:"flex justify-between items-center mb-3",children:[n.jsx("button",{onClick:()=>S(!0),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:"⬅️"})}),n.jsx("div",{className:"glass-card rounded-xl px-3 py-1.5 shadow-lg",children:n.jsxs("div",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"text-xl",children:e.emoji}),n.jsx("span",{className:"text-gray-800 font-bold text-sm",children:e.name})]})}),n.jsx("button",{onClick:()=>p(!f),className:"w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform",children:n.jsx("span",{className:"text-xl",children:f?"🔊":"🔇"})})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 shadow-xl mb-3",children:[n.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:`text-xl font-black ${ee==="critical"?"text-red-600 time-pulse-critical":ee==="warning"?"text-orange-600":"text-gray-800"}`,children:P(i)}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Time"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-xl font-black text-gray-800",children:[r,"/",s]}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Question"})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-orange-600",children:o}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Coins"}),x&&C&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsxs("span",{className:"text-orange-600 font-bold text-xs coin-float",children:["+",e.rewards.perCorrectAnswer]})})]}),n.jsxs("div",{className:"text-center relative",children:[n.jsx("div",{className:"text-xl font-black text-blue-600",children:l}),n.jsx("div",{className:"text-[10px] text-gray-700 font-medium",children:"Gems"}),E&&n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx("span",{className:"text-blue-600 text-xl gem-sparkle",children:"💎"})})]})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar",style:{width:`${(r-1)/s*100}%`}})})})]}),n.jsx("div",{className:"flex justify-center mb-3 pt-2",children:n.jsx(Sg,{shovelsRemaining:a,showBreak:x&&!C})})]}),n.jsxs("div",{className:"px-3 pt-8 slide-in",children:[n.jsxs("div",{ref:k,className:`glass-card rounded-2xl shadow-xl p-4 mb-4 ${x&&!C?"wrong-shake":""}`,children:[n.jsx("div",{className:"text-center mb-2",children:n.jsxs("span",{className:"text-xs font-bold text-gray-600 uppercase tracking-wider",children:["Question ",r]})}),n.jsx("h2",{className:"text-lg font-bold text-center text-gray-800 leading-relaxed",children:t.prompt})]}),n.jsx("div",{className:"space-y-2.5",children:t.options.map((H,Q)=>{const $=["A","B","C","D"],R=m===Q,_=Q===t.correctIndex;let F="glass-card option-card",L="border border-gray-800/20";return x&&(_?(F+=" correct-pulse",L="border-2 border-green-500 bg-green-400/20"):R&&!C&&(F+=" wrong-shake",L="border-2 border-red-500 bg-red-400/20"),F+=" disabled"),n.jsx("button",{onClick:()=>Y(Q),disabled:g,className:`w-full p-3 rounded-xl shadow-lg ${F} ${L}`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`w-10 h-10 rounded-lg bg-gradient-to-br ${Q===0?"from-blue-400 to-blue-500":Q===1?"from-green-400 to-green-500":Q===2?"from-yellow-400 to-yellow-500":"from-purple-400 to-purple-500"} text-white font-bold text-lg flex items-center justify-center shadow-md`,children:$[Q]}),n.jsx("span",{className:"flex-1 text-left font-medium text-gray-800 text-sm",children:H}),x&&_&&n.jsx("span",{className:"text-2xl",children:"✅"}),x&&R&&!C&&n.jsx("span",{className:"text-2xl",children:"❌"})]})},Q)})}),x&&n.jsx("div",{className:"mt-3 text-center slide-in",children:n.jsx("p",{className:"text-base font-bold text-gray-800",children:C?`Great job! Let's dig for treasure! ${e.visualElements.diggingEmoji}`:"Oops! Your shovel broke! Try the next question! 💪"})})]}),h&&n.jsx(Cg,{island:e,foundGem:E,onComplete:()=>y(!1)}),T&&n.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6",children:n.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10",children:[n.jsxs("div",{className:"text-center mb-6",children:[n.jsx("div",{className:"text-5xl mb-3",children:"🗺️"}),n.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:"Leave the Island?"}),n.jsx("p",{className:"text-white/70",children:"Your progress won't be saved!"})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>S(!1),className:"flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Keep Playing"}),n.jsx("button",{onClick:u,className:"flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",children:"Leave Island"})]})]})})]})}function Rg({island:e,session:t,earnedTreasure:r,onRetry:s,onContinue:a,soundOn:i}){const[o,l]=d.useState(0),[c,u]=d.useState(!1),[f,p]=d.useState(!1),m=t.correctAnswers===ze.QUESTIONS_PER_ISLAND,b=wg(t.correctAnswers,e.id);return d.useEffect(()=>{const x=t.coinsEarned,N=2e3,C=30,v=x/C;let h=0;const y=setInterval(()=>{h+=v,h>=x?(l(x),clearInterval(y),r&&setTimeout(()=>u(!0),500),setTimeout(()=>p(!0),r?1500:500)):l(Math.floor(h))},N/C);return()=>clearInterval(y)},[t.coinsEarned,r]),n.jsxs("div",{className:`fixed inset-0 bg-gradient-to-br ${e.theme.background} overflow-hidden flex flex-col`,children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:m&&[...Array(10)].map((x,N)=>n.jsx("div",{className:"absolute confetti-fall",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,fontSize:`${20+Math.random()*20}px`},children:["🎉","⭐","🎊","✨"][Math.floor(Math.random()*4)]},N))}),n.jsxs("div",{className:"relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-4",children:[n.jsxs("div",{className:"mb-3 text-center slide-up",children:[n.jsx("h1",{className:"text-2xl font-black text-white mb-2",children:r?"TREASURE FOUND!":"ISLAND COMPLETE!"}),n.jsx("div",{className:"text-5xl bounce-animation",children:r?e.rewards.treasurePiece:"🏝️"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-3 max-w-md w-full mb-2 slide-up",style:{animationDelay:"0.2s",background:"rgba(46, 46, 32, 0.25)"},children:[n.jsxs("div",{className:"text-center mb-2",children:[n.jsxs("div",{className:"text-3xl font-black text-white mb-1",children:[t.correctAnswers,"/",ze.QUESTIONS_PER_ISLAND]}),n.jsx("div",{className:"text-white/80 font-medium",children:"Questions Correct"})]}),f&&n.jsx("div",{className:"flex justify-center gap-2 mb-2",children:[...Array(3)].map((x,N)=>n.jsx("div",{className:`text-3xl ${N<t.correctAnswers?"star-pop":""}`,style:{animationDelay:`${N*.2}s`},children:N<t.correctAnswers?"⭐":"☆"},N))}),c&&r&&n.jsxs("div",{className:"text-center mb-2",children:[n.jsx("div",{className:"text-5xl treasure-shine mb-1",children:e.rewards.treasurePiece}),n.jsx("div",{className:"text-white font-bold text-lg",children:"Treasure Piece Earned!"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-3xl font-black text-yellow-300",children:o}),n.jsx("div",{className:"text-white/70 text-sm",children:"Coins Earned"})]}),n.jsxs("div",{className:"glass-card rounded-2xl p-4 text-center",children:[n.jsx("div",{className:"text-4xl mb-2",children:"💎"}),n.jsx("div",{className:"text-3xl font-black text-cyan-300",children:t.gemsFound}),n.jsx("div",{className:"text-white/70 text-sm",children:"Gems Found"})]})]}),n.jsx("div",{className:"text-center p-4 bg-white/10 rounded-1xl",children:n.jsx("p",{className:"text-white font-medium text-lg",children:b})}),m&&n.jsx("div",{className:"mt-4 text-center",children:n.jsx("div",{className:"inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",children:n.jsx("span",{className:"text-white font-black text-lg",children:"💯 PERFECT SCORE! 💯"})})})]}),n.jsxs("div",{className:"space-y-3 w-full max-w-md slide-up",style:{animationDelay:"0.4s"},children:[!r&&n.jsx("button",{onClick:s,className:"w-full py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🔄"}),n.jsx("span",{children:"Try Again"})]})}),n.jsx("button",{onClick:a,className:"w-full py-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🗺️"}),n.jsx("span",{children:"Back to Map"})]})})]})]})]})}function Tg({totalStats:e,onContinue:t,soundOn:r}){const[s,a]=d.useState(!1),[i,o]=d.useState(!1),[l,c]=d.useState(!1),[u,f]=d.useState(!1),[p,m]=d.useState(!1);return d.useEffect(()=>{(async()=>{await new Promise(x=>setTimeout(x,500)),a(!0),await new Promise(x=>setTimeout(x,1e3)),o(!0),m(!0),await new Promise(x=>setTimeout(x,800)),c(!0),await new Promise(x=>setTimeout(x,1e3)),f(!0)})()},[]),n.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 relative overflow-hidden",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),p&&n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(15)].map((b,x)=>n.jsx("div",{className:"absolute firework",style:{left:`${20+Math.random()*60}%`,top:`${20+Math.random()*60}%`,animationDelay:`${Math.random()*2}s`,fontSize:`${40+Math.random()*40}px`},children:["✨","⭐","💫","🌟"][Math.floor(Math.random()*4)]},x))}),n.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((b,x)=>n.jsx("div",{className:"absolute coin-rain",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`,fontSize:`${20+Math.random()*20}px`},children:["🪙","💰","💎"][Math.floor(Math.random()*3)]},x))}),n.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center min-h-screen px-6",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"LEGENDARY!"}),n.jsx("div",{className:"text-8xl bounce-animation",children:"👑"})]}),s&&n.jsxs("div",{className:`relative mb-8 ${s?"chest-appear":""}`,children:[n.jsx("div",{className:`text-[150px] ${i?"chest-open":""}`,children:"📦"}),i&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:rr.map((b,x)=>n.jsx("div",{className:"absolute text-6xl float-animation treasure-glow",style:{transform:`rotate(${x*72}deg) translateY(-100px)`,animationDelay:`${x*.2}s`},children:b.rewards.treasurePiece},b.id))})]}),l&&n.jsxs("div",{className:"glass-card rounded-3xl p-6 max-w-md w-full mb-6",children:[n.jsx("h2",{className:"text-2xl font-black text-white text-center mb-6",children:"🏆 FINAL TREASURE UNLOCKED! 🏆"}),n.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-4 mb-4",children:n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-5xl mb-2",children:"💰"}),n.jsx("div",{className:"text-4xl font-black text-white",children:ze.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/90 font-medium",children:"Bonus Coins!"})]})}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🏝️"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Islands"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"🧩"}),n.jsx("div",{className:"text-2xl font-black text-white",children:"5/5"}),n.jsx("div",{className:"text-white/70 text-xs",children:"Treasures"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💰"}),n.jsx("div",{className:"text-2xl font-black text-yellow-300",children:e.totalCoinsEarned+ze.FINAL_TREASURE_REWARD}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Coins"})]}),n.jsxs("div",{className:"glass-card rounded-xl p-3 text-center",children:[n.jsx("div",{className:"text-3xl mb-1",children:"💎"}),n.jsx("div",{className:"text-2xl font-black text-cyan-300",children:e.totalGemsFound}),n.jsx("div",{className:"text-white/70 text-xs",children:"Total Gems"})]})]}),u&&n.jsxs("div",{className:"text-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl",children:[n.jsx("div",{className:"text-3xl mb-2",children:"🏆"}),n.jsx("div",{className:"text-xl font-black text-white title-shine",children:ze.FINAL_TREASURE_TITLE}),n.jsx("div",{className:"text-white/90 text-sm mt-1",children:"New Title Unlocked!"})]})]}),l&&n.jsx("button",{onClick:t,className:"w-full max-w-md py-4 bg-gradient-to-r from-white to-gray-100 text-gray-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]",children:n.jsxs("div",{className:"flex items-center justify-center gap-3",children:[n.jsx("span",{className:"text-2xl",children:"🎉"}),n.jsx("span",{children:"Complete Adventure"}),n.jsx("span",{className:"text-2xl",children:"🎉"})]})}),n.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(10)].map((b,x)=>n.jsx("div",{className:"absolute text-2xl sparkle-animation",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`},children:"✨"},x))})]})]})}function Pg({onBack:e}){const{coins:t,xp:r,level:s,soundOn:a,addCoins:i,addXp:o,setSoundOn:l}=sc(),[c,u]=d.useState("map"),[f,p]=d.useState(null),[m,b]=d.useState([]),[x,N]=d.useState(()=>{const R=localStorage.getItem(ze.STORAGE_KEYS.PROGRESS);if(R)try{return JSON.parse(R)}catch(_){console.error("Failed to load progress:",_)}return rr.reduce((_,F)=>(_[F.id]={unlocked:F.id===1,completed:!1,treasurePiece:!1,perfectScore:!1,bestScore:0,attempts:0},_),{})}),[C,v]=d.useState({islandId:null,questions:[],currentQuestionIndex:0,shovelsRemaining:ze.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:300,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:null}),[h,y]=d.useState(()=>{const R=localStorage.getItem(ze.STORAGE_KEYS.STATS);if(R)try{return JSON.parse(R)}catch(_){console.error("Failed to load stats:",_)}return{totalCoinsEarned:0,totalGemsFound:0,totalTreasurePieces:0,totalQuestionsAnswered:0,totalCorrectAnswers:0,islandsCompleted:0,gameCompleted:!1}}),E=d.useRef(null),j=d.useRef(null);d.useEffect(()=>(T(),()=>{E.current&&clearInterval(E.current)}),[]),d.useEffect(()=>{localStorage.setItem(ze.STORAGE_KEYS.PROGRESS,JSON.stringify(x))},[x]),d.useEffect(()=>{localStorage.setItem(ze.STORAGE_KEYS.STATS,JSON.stringify(h))},[h]),d.useEffect(()=>(c==="playing"&&C.timeRemaining>0?E.current=setInterval(()=>{v(R=>{const _=R.timeRemaining-1;return _<=0?(P(),{...R,timeRemaining:0}):(_===30&&a&&Q(ze.SOUNDS.TICK,.6),{...R,timeRemaining:_})})},1e3):E.current&&clearInterval(E.current),()=>{E.current&&clearInterval(E.current)}),[c,C.timeRemaining,a]);const T=async()=>{try{const _=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:F}=hr.parse(_,{header:!0,skipEmptyLines:!0,transformHeader:I=>I.trim().toLowerCase()}),L=F.map((I,A)=>{var U;const X=[I.option1,I.option2,I.option3,I.option4].map(D=>(D||"").trim()).filter(Boolean);if(X.length<4)return null;let re={a:0,b:1,c:2,d:3}[(U=I.answer)==null?void 0:U.toLowerCase()];return re===void 0&&(re=X.findIndex(D=>D.toLowerCase()===(I.answer||"").toLowerCase())),re===-1&&(re=0),{id:I.id||`q_${A}`,prompt:(I.question||"").trim(),options:X,correctIndex:re,category:(I.category||I.subject||"general").trim(),difficulty:(I.difficulty||"medium").toLowerCase()}}).filter(Boolean);b(L)}catch(R){console.error("Failed to load questions:",R)}},S=R=>{const _=cn(R);if(!_||m.length===0)return[];let F=m.filter(I=>_.questionDifficulty.includes(I.difficulty));return F.length<ze.QUESTIONS_PER_ISLAND&&(F=m),[...F].sort(()=>Math.random()-.5).slice(0,ze.QUESTIONS_PER_ISLAND)},g=R=>{if(!bg(R,x)){a&&Q("/sounds/locked.mp3",.5),$([100]);return}p(R),u("island-detail"),a&&Q("/sounds/select.mp3",.5)},w=R=>{const _=cn(R),F=S(R);v({islandId:R,questions:F,currentQuestionIndex:0,shovelsRemaining:ze.SHOVELS_PER_ISLAND,correctAnswers:0,wrongAnswers:0,timeRemaining:_.timeLimit,gemsFound:0,coinsEarned:0,questionTimes:[],startTime:Date.now()}),j.current=Date.now(),u("playing"),a&&Q("/sounds/start.mp3",.6)},k=R=>{const _=C.questions[C.currentQuestionIndex],F=R===_.correctIndex,L=(Date.now()-j.current)/1e3;v(I=>{const A={...I,questionTimes:[...I.questionTimes,L]};if(F){const X=cn(I.islandId);let ne=X.rewards.perCorrectAnswer;L<ze.SPEED_BONUS_THRESHOLD&&(ne+=X.rewards.speedBonus),Math.random()<X.rewards.gemChance&&(ne+=X.rewards.gemBonus,A.gemsFound=I.gemsFound+1),A.correctAnswers=I.correctAnswers+1,A.coinsEarned=I.coinsEarned+ne}else A.wrongAnswers=I.wrongAnswers+1,A.shovelsRemaining=I.shovelsRemaining-1,$([200]);return A}),setTimeout(()=>{const I=C.currentQuestionIndex+1;C.shovelsRemaining===0&&!F||I>=ze.QUESTIONS_PER_ISLAND?M():(v(A=>({...A,currentQuestionIndex:I})),j.current=Date.now())},F?2e3:1500)},P=()=>{M()},M=()=>{const R=cn(C.islandId),_=C.correctAnswers>=R.requiredCorrect,F=C.correctAnswers===ze.QUESTIONS_PER_ISLAND;let L=C.coinsEarned;F&&(L+=R.rewards.perfectBonus),_&&(L+=R.rewards.completionCoins),N(A=>{const X={...A},ne=X[C.islandId];if(ne.completed=!0,ne.attempts+=1,_&&!ne.treasurePiece){ne.treasurePiece=!0;const re=rr.find(U=>U.id===C.islandId+1);re&&X[re.id]&&(X[re.id].unlocked=!0,a&&setTimeout(()=>Q(ze.SOUNDS.ISLAND_UNLOCK,.7),2e3))}return F&&(ne.perfectScore=!0),ne.bestScore=Math.max(ne.bestScore||0,C.correctAnswers),X}),y(A=>({...A,totalCoinsEarned:A.totalCoinsEarned+L,totalGemsFound:A.totalGemsFound+C.gemsFound,totalTreasurePieces:A.totalTreasurePieces+(_&&!x[C.islandId].treasurePiece?1:0),totalQuestionsAnswered:A.totalQuestionsAnswered+(C.correctAnswers+C.wrongAnswers),totalCorrectAnswers:A.totalCorrectAnswers+C.correctAnswers,islandsCompleted:A.islandsCompleted+(x[C.islandId].completed?0:1)})),i(L),o(C.correctAnswers),v(A=>({...A,coinsEarned:L})),a&&Q(_?ze.SOUNDS.TREASURE_FOUND:ze.SOUNDS.ISLAND_COMPLETE,.7),rr.every(A=>{var X;return((X=x[A.id])==null?void 0:X.treasurePiece)===!0})&&!h.gameCompleted?(y(A=>({...A,gameCompleted:!0})),setTimeout(()=>{u("final-treasure"),a&&Q(ze.SOUNDS.FINAL_TREASURE,.8)},3e3)):u("reward")},Y=()=>{w(C.islandId)},ee=()=>{u("map"),p(null)},H=()=>{i(ze.FINAL_TREASURE_REWARD),o(10),y(R=>({...R,totalCoinsEarned:R.totalCoinsEarned+ze.FINAL_TREASURE_REWARD})),u("map")},Q=(R,_=.5)=>{try{const F=new Audio(R);F.volume=_,F.play()}catch(F){console.error("Failed to play sound:",F)}},$=R=>{navigator.vibrate&&navigator.vibrate(R)};switch(d.useEffect(()=>(document.body.classList.add("hide-bottom-nav"),()=>{document.body.classList.remove("hide-bottom-nav")}),[]),c){case"map":return n.jsx(Ng,{islands:rr,islandProgress:x,onSelectIsland:g,onBack:e,soundOn:a,setSoundOn:l,totalStats:h});case"island-detail":return n.jsx(kg,{island:cn(f),progress:x[f],onStart:()=>w(f),onClose:()=>u("map"),soundOn:a});case"playing":return n.jsx(Eg,{island:cn(C.islandId),question:C.questions[C.currentQuestionIndex],questionNumber:C.currentQuestionIndex+1,totalQuestions:ze.QUESTIONS_PER_ISLAND,shovelsRemaining:C.shovelsRemaining,timeRemaining:C.timeRemaining,coinsEarned:C.coinsEarned,gemsFound:C.gemsFound,onAnswer:k,onQuit:()=>u("map"),soundOn:a,setSoundOn:l});case"reward":return n.jsx(Rg,{island:cn(C.islandId),session:C,earnedTreasure:C.correctAnswers>=cn(C.islandId).requiredCorrect,onRetry:Y,onContinue:ee,soundOn:a});case"final-treasure":return n.jsx(Tg,{totalStats:h,onContinue:H,soundOn:a});default:return null}}const _g=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Sm=_g.slice(0,6),to=360/Sm.length;function Lg({onModeSelect:e,onNavigateHome:t}){return n.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:n.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[n.jsx("header",{className:"flex items-center mb-8",children:n.jsx("h1",{className:"text-center text-xl font-bold w-full",children:"Choose a quiz mode"})}),n.jsxs("div",{className:"space-y-8",children:[n.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:n.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[Sm.map((r,s)=>{const a=s*to,i=a+to,o=to>180?1:0,l=Math.PI*a/180,c=Math.PI*i/180,u=50+40*Math.cos(l),f=50-40*Math.sin(l),p=50+40*Math.cos(c),m=50-40*Math.sin(c);return n.jsx("path",{d:`M50,50 L${u},${f} A40,40 0 ${o} 0 ${p},${m} Z`,fill:r.color,stroke:"white",strokeWidth:"0.5"},s)}),n.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),n.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),n.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),n.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),n.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),n.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),n.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("survival"),className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsx("div",{className:"text-2xl mb-2",children:"💀"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),n.jsxs("button",{onClick:()=>e("treasureHunt"),className:"aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden",children:[n.jsxs("div",{className:"absolute inset-0 opacity-20",children:[n.jsx("div",{className:"absolute top-2 right-2 text-4xl animate-pulse",children:"🏝️"}),n.jsx("div",{className:"absolute bottom-2 left-2 text-3xl animate-bounce",style:{animationDelay:"0.5s"},children:"⛏️"}),n.jsx("div",{className:"absolute top-1/2 right-4 text-2xl animate-pulse",style:{animationDelay:"1s"},children:"💎"})]}),n.jsx("div",{className:"text-2xl mb-2 relative z-10",children:"🏴‍☠️"}),n.jsx("h4",{className:"text-lg font-black text-white relative z-10",children:"TREASURE HUNT"}),n.jsx("div",{className:"absolute bottom-2 right-2",children:n.jsx("span",{className:"text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold",children:"NEW!"})})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),n.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[n.jsx("div",{className:"text-2xl mb-2",children:"📱"}),n.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function Ag(){const[e,t]=d.useState(null),r=He(),s=bt();d.useEffect(()=>{const l=new URLSearchParams(s.search);l.get("mode")==="survival"&&l.get("from")==="quest"&&t("survival")},[s]);const a=l=>{l==="classic"?t("classic"):l==="survival"?t("survival"):l==="treasureHunt"&&t("treasureHunt")},i=()=>{r("/")},o=()=>{t(null)};if(e==="classic")return n.jsx(pg,{onBack:o});if(e==="survival"){const c=new URLSearchParams(s.search).get("from")==="quest";return n.jsx(yg,{onBack:o,isFromQuest:c})}return e==="treasureHunt"?n.jsx(Pg,{onBack:o}):n.jsx(Lg,{onModeSelect:a,onNavigateHome:i})}const Ig=({session:e,mode:t,category:r,difficulty:s,timerConfig:a,onComplete:i,onQuit:o})=>{const l=He(),[c,u]=d.useState(0),[f,p]=d.useState([]),[m,b]=d.useState([]),[x,N]=d.useState([]),[C,v]=d.useState(!1),[h,y]=d.useState(null),[E,j]=d.useState(Date.now()),[T,S]=d.useState(0),[g,w]=d.useState([]),[k,P]=d.useState(!1),[M,Y]=d.useState(!1),[ee,H]=d.useState({}),[Q,$]=d.useState({}),[R,_]=d.useState([]);d.useState(!0);const[F,L]=d.useState([]),[I,A]=d.useState(0),[X,ne]=d.useState(0),[re,U]=d.useState(!1),[D,K]=d.useState(!1),[z,B]=d.useState(""),[Z,ae]=d.useState(!1),[ce,q]=d.useState(!1),[G,W]=d.useState(!0),[O,te]=d.useState(!1),[de,je]=d.useState(0),[Le,Be]=d.useState(0),[Ee,me]=d.useState(0),[he,be]=d.useState(null),[ke,qe]=d.useState(0),Ut=d.useRef(null),et=d.useRef(null),we=t==="practice",Ae=f[c],Qt=fe=>{try{const ue=new Audio(fe);ue.volume=.6,ue.play()}catch{console.log("Sound not available:",fe)}},Gn=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],Ge=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:Gn,J=Ge[c]||Ge[0]||Gn[0],le=Ge.length;d.useEffect(()=>{Ge.length>0&&(p(new Array(Ge.length).fill(null)),b(new Array(Ge.length).fill(!1)),_(new Array(Ge.length).fill(!1)),N(new Array(Ge.length).fill((a==null?void 0:a.seconds)||45)))},[Ge.length,a==null?void 0:a.seconds]);const _e=()=>{if(k){B("Once per quiz"),setTimeout(()=>B(""),1e3);return}if(Ae!==null){B("Already answered"),setTimeout(()=>B(""),1e3);return}if(!J)return;const ue=[0,1,2,3].filter(ge=>ge!==J.answerIndex).sort(()=>Math.random()-.5).slice(0,2);H({...ee,[c]:ue}),P(!0)},Se=()=>{if(M){B("Once per quiz"),setTimeout(()=>B(""),1e3);return}if(Ae!==null){B("Already answered"),setTimeout(()=>B(""),1e3);return}if(!J)return;const fe=J.answerIndex,ue=[0,0,0,0],ge=40+Math.floor(Math.random()*31);ue[fe]=ge;let tt=100-ge;const Te=[0,1,2,3].filter(Ce=>Ce!==fe);for(let Ce=0;Ce<Te.length-1;Ce++){const Ke=Math.min(tt-(Te.length-1-Ce),tt/2),ln=Math.floor(Math.random()*(Ke+1));ue[Te[Ce]]=ln,tt-=ln}ue[Te[Te.length-1]]=tt,$({...Q,[c]:ue}),Y(!0)},Ve=()=>{const fe=new Date;return`${fe.getFullYear()}-${fe.getMonth()+1}-${fe.getDate()}`},ve=()=>{we&&window.location.search.includes("from=quest")?l("/profile/quests",{state:{questCompleted:!0,questType:"practiceQuestions"}}):o()},ie=d.useCallback((fe,ue)=>{if(!J||we&&R[c]||ee[c]&&ee[c].includes(fe))return;const ge=[...f];if(ge[c]=f[c]===fe?null:fe,p(ge),j(Date.now()),we&&!g.includes(c)&&ge[c]!==null){const Te=g.length+1;if(S(Te),w(Ce=>[...Ce,c]),window.location.search.includes("from=quest")){let Ce={};try{const ln=localStorage.getItem("questProgress");ln&&(Ce=JSON.parse(ln))}catch(ln){console.error("Error reading progress:",ln)}const Ke=Ce.practiceQuestions||0;Ce.practiceQuestions=Math.max(Ke,Te),Ce.date=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,localStorage.setItem("questProgress",JSON.stringify(Ce)),console.log("Saved practice progress:",Ce.practiceQuestions),window.dispatchEvent(new CustomEvent("questProgressUpdate",{detail:{practiceQuestions:Ce.practiceQuestions}}))}}ge[c]!==null&&(W(!1),clearInterval(et.current));const tt=ge[c]===J.answerIndex;if(tt){const Te=Ee+1;if(me(Te),A(Ce=>Ce+1),ne(0),we){je(Ke=>Ke+1);const Ce=10;Be(Ke=>Ke+Ce),Qt("/sounds/correct.mp3"),setTimeout(()=>Qt("/sounds/coin.mp3"),500),q(!0),setTimeout(()=>q(!1),2e3),be({type:"correct",stars:1,coins:10}),setTimeout(()=>be(null),2e3)}}else ge[c]!==null&&(me(0),A(0),ne(Te=>Te+1),we&&(c===0&&F.length,Qt("/sounds/wrong.mp3")));if(L(Te=>[...Te.slice(-2),tt]),ge[c]!==null&&m[c]){const Te=[...m];Te[c]=!1,b(Te)}we&&ge[c]!==null&&(ae(!0),_(Te=>{const Ce=[...Te];return Ce[c]=!0,Ce}),setTimeout(()=>{const Te=document.querySelector(".main-scrollable-container");if(Te){const Ce=Te.scrollHeight,Ke=Te.clientHeight;Ce>Ke&&Te.scrollTo({top:Ce-Ke,behavior:"smooth"})}},300)),!we&&ge[c]!==null&&(clearTimeout(Ut.current),Ut.current=setTimeout(()=>{c<le-1?pe():(U(!0),v(!0))},5e3))},[J,we,R,c,f,m,le,Ee,ee,F,I,T,g]),oe=()=>{j(Date.now()),c>0&&(clearInterval(et.current),W(!1),u(fe=>fe-1),ae(!1),we&&f[c-1]!==null&&setTimeout(()=>ae(!0),100))},pe=()=>{if(j(Date.now()),clearInterval(et.current),Ae===null){const fe=[...m];fe[c]=!0,b(fe),me(0)}W(!1),ae(!1),c<le-1?(u(fe=>fe+1),we&&f[c+1]!==null?setTimeout(()=>ae(!0),100):setTimeout(()=>W(!0),100)):U(!0)},Re=()=>{j(Date.now());const fe=[...m];fe[c]=!0,b(fe),me(0),pe()},xe=()=>{const fe=Ge.reduce((ue,ge,tt)=>ue+(f[tt]===ge.answerIndex?1:0),0);if(we&&window.location.search.includes("from=quest")){const ue=f.filter(tt=>tt!==null).length,ge=JSON.parse(localStorage.getItem("questProgress")||"{}");ge.practiceQuestions=Math.min(ue,15),ge.date=Ve(),localStorage.setItem("questProgress",JSON.stringify(ge)),console.log("Final practice progress saved:",ge.practiceQuestions)}if(we)i&&i({questions:Ge,answers:f,skipped:m,correct:fe,total:le,mode:t,category:r,difficulty:s,earnedStars:de,earnedCoins:Le,finalStreak:Ee});else{const ue=fe*10;qe(ue),te(!0),setTimeout(()=>{Qt("/sounds/coin.mp3"),q(!0),setTimeout(()=>q(!1),3e3)},1e3)}},Ie=()=>{i&&i({questions:Ge,answers:f,skipped:m,correct:Ge.reduce((fe,ue,ge)=>fe+(f[ge]===ue.answerIndex?1:0),0),total:le,mode:t,category:r,difficulty:s,earnedStars:0,earnedCoins:ke,finalStreak:Ee})};d.useEffect(()=>{if(!(C||h!==null||re||!G||f[c]!==null))return et.current=setInterval(()=>{N(fe=>{const ue=[...fe],ge=ue[c];return ge<=1?(clearInterval(et.current),c===le-1?(Date.now()-E>=5e3&&U(!0),ue):(y(c),ue)):(ue[c]=ge-1,ue)})},1e3),()=>clearInterval(et.current)},[C,h,c,re,le,G,f,E]),d.useEffect(()=>{f[c]===null&&!re&&!h?W(!0):W(!1)},[c,f,re,h]);const it=fe=>{const ue=Math.floor(fe/60),ge=fe%60;return`${ue}:${ge.toString().padStart(2,"0")}`},Nn=(c+1)/Ge.length*100,At=f.filter(fe=>fe!==null).length,pr=m.filter(Boolean).length,Vn=x[c]||0,lc=Ge.reduce((fe,ue,ge)=>fe+(f[ge]===ue.answerIndex?1:0),0);return n.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[he&&n.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:n.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",he.coins," Coins!"]})}),ce&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((fe,ue)=>n.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${ue*150}ms`,animationDuration:"2s"},children:"🪙"},ue))}),n.jsxs("div",{className:`main-scrollable-container flex-1 flex flex-col ${we&&Ae!==null?"overflow-y-auto":"overflow-hidden"}`,children:[n.jsxs("div",{className:"bg-gray-900 flex-shrink-0",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-gray-800 shadow-lg",children:[n.jsxs("button",{onClick:()=>K(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"font-medium",children:"Back"})]}),n.jsx("div",{className:"flex-1"}),n.jsxs("div",{className:"flex items-center gap-2",children:[we&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),n.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:Le})]}),n.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[n.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),n.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:Ee})]})]}),n.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${Vn<=10?"bg-red-600/20 text-red-400 animate-pulse":Vn<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:it(Vn)})]})]}),n.jsxs("div",{className:"px-4 pb-1 bg-gray-900",children:[n.jsxs("div",{className:"flex justify-between items-center mb-1",children:[n.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",c+1," of ",le]}),n.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(Nn),"% Complete"]})]}),n.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${Nn}%`}})}),n.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:le}).map((fe,ue)=>n.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${ue===c?"bg-white scale-125":f[ue]!==null?"bg-green-500":m[ue]?"bg-yellow-500":"bg-gray-600"}`},ue))}),n.jsx("div",{className:"text-center mt-4",children:n.jsx("span",{className:"text-xs text-gray-500",children:J.category})})]})]}),n.jsx("div",{className:`px-4 flex flex-col ${we&&Ae!==null?"pb-36":"flex-1 justify-between pb-[180px]"}`,children:n.jsxs("div",{className:"flex-1 flex flex-col justify-center max-h-full",children:[n.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-6 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[n.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),n.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",c+1]}),n.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:J.prompt}),J.difficulty&&n.jsx("div",{className:"mt-3 inline-block",children:n.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${J.difficulty==="easy"?"bg-green-500/20 text-green-300":J.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:J.difficulty.toUpperCase()})})]})]}),n.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:J.options.map((fe,ue)=>{const ge=Ae===ue,tt=ue===J.answerIndex,Te=we&&Ae!==null&&Z,Ce=ee[c]&&ee[c].includes(ue);let Ke="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";Ce?Ke+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(Ke+="cursor-pointer ",Te?ge&&tt?Ke+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":ge&&!tt?Ke+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!ge&&tt?Ke+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":Ke+="bg-gray-700 border-gray-600 text-gray-400":ge?Ke+="bg-gray-600 border-gray-500 text-white":Ke+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const ln=["🅰️","🅱️","🅲️","🅳️"];return n.jsx("button",{onClick:Pm=>ie(ue,Pm),disabled:we&&R[c],className:Ke,children:n.jsxs("div",{className:"flex items-center gap-2 w-full",children:[n.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:ln[ue]}),n.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:fe}),Q[c]&&Q[c][ue]>0&&!Ce&&n.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[Q[c][ue],"%"]}),Te&&ge&&tt&&!Ce&&n.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),Te&&ge&&!tt&&!Ce&&n.jsx("div",{className:"text-lg",children:"😔"}),Te&&!ge&&tt&&!Ce&&n.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},ue)})}),we&&Z&&Ae!==null&&n.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:n.jsxs("div",{className:"flex gap-3",children:[n.jsx("div",{className:"text-lg flex-shrink-0",children:Ae===J.answerIndex?"🎊":"💡"}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h4",{className:`font-semibold mb-3 text-sm ${Ae===J.answerIndex?"text-green-400":"text-blue-400"}`,children:Ae===J.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),J.explanation&&n.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:J.explanation})]})]})})]})})]}),n.jsxs("div",{className:"fixed bottom-0 left-0 right-0 z-50",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/80 backdrop-blur-xl"}),n.jsxs("div",{className:"relative p-4 pb-8",children:[!we&&n.jsxs("div",{className:"flex justify-center gap-3 mb-4",children:[n.jsxs("button",{onClick:_e,disabled:Ae!==null,className:`${k?"bg-white/5 text-gray-500":"bg-gradient-to-r from-orange-500 to-orange-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"⚡"}),"50:50"]}),n.jsxs("button",{onClick:Se,disabled:Ae!==null,className:`${M?"bg-white/5 text-gray-500":"bg-gradient-to-r from-purple-500 to-purple-600"} 
                  disabled:bg-white/5 disabled:text-gray-500
                  px-4 py-2.5 rounded-2xl font-semibold transition-all transform active:scale-95
                  shadow-lg flex items-center gap-2 text-sm`,children:[n.jsx("span",{children:"👥"}),"Ask Friends"]})]}),n.jsxs("div",{className:"flex gap-2 mb-3",children:[n.jsx("button",{onClick:oe,disabled:c===0,className:`flex-1 bg-white/10 backdrop-blur-md border border-white/20 
                disabled:opacity-30 disabled:cursor-not-allowed
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                hover:bg-white/15 text-white shadow-xl`,children:"Previous"}),n.jsx("button",{onClick:Re,disabled:Ae!==null,className:`flex-1 py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95 shadow-xl ${Ae!==null?"bg-white/5 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600"}`,children:"Skip"}),n.jsx("button",{onClick:pe,className:`flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:from-blue-600 hover:to-indigo-600
                py-3.5 rounded-2xl font-semibold transition-all transform active:scale-95
                text-white shadow-xl`,children:c===le-1?"Finish":"Next"})]}),n.jsxs("button",{onClick:()=>U(!0),className:`w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500
              hover:from-emerald-600 hover:via-green-600 hover:to-teal-600
              py-4 rounded-2xl font-bold text-white transition-all transform active:scale-[0.98]
              shadow-2xl shadow-green-500/25 relative overflow-hidden group`,children:[n.jsx("div",{className:"absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"}),n.jsx("span",{className:"relative",children:"Submit Quiz"})]})]})]}),O&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quiz Complete!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Here's how you performed"}),n.jsxs("div",{className:"bg-gray-700/50 rounded-2xl p-4 mb-6 space-y-3",children:[n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Questions Attempted:"}),n.jsxs("span",{className:"text-white font-semibold",children:[At," / ",le]})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Correct Answers:"}),n.jsx("span",{className:"text-green-400 font-semibold",children:lc})]}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-gray-300",children:"Accuracy:"}),n.jsxs("span",{className:"text-blue-400 font-semibold",children:[At>0?Math.round(lc/At*100):0,"%"]})]}),n.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("span",{className:"text-yellow-300 flex items-center gap-1",children:"🪙 Coins Earned:"}),n.jsx("span",{className:"text-yellow-400 font-bold text-lg",children:ke})]})})]}),n.jsx("button",{onClick:Ie,className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors",children:"Continue"})]})}),D&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>K(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),n.jsx("button",{onClick:ve,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),re&&!O&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),n.jsxs("p",{className:"text-gray-400 mb-4",children:[At," of ",le," answered • ",pr," skipped"]}),we&&n.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:n.jsxs("div",{className:"flex justify-center gap-6",children:[n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:de}),n.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),n.jsx("div",{className:"text-yellow-400 font-bold",children:Le}),n.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>{U(!1),y(null),j(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),n.jsx("button",{onClick:fe=>{fe.preventDefault(),fe.stopPropagation(),console.log("Submit button clicked"),xe()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),h===c&&!re&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),n.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),n.jsx("button",{onClick:()=>{y(null),j(Date.now()),c<Ge.length-1?pe():U(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:c<Ge.length-1?"Continue":"See Results"})]})}),z&&n.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:z}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},ss=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Dg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),Mg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),zg=()=>n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Fg=()=>n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Og=()=>n.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),$g=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[],returnPath:null,fromQuest:!1},onRetake:t=()=>{},onReview:r=()=>{},onNavigate:s=(u,f)=>{},isRetake:a=!1,isPractice:i=!1,player:o={level:1,coins:0,combo:0,energy:5},categories:l=[],addCoins:c=()=>{}})=>{const[u,f]=d.useState(o.coins),p=d.useRef(null),[m,b]=d.useState(null),[x]=zt("/sounds/coin.mp3",{volume:.75}),[N,C]=d.useState(!1),[v,h]=d.useState(!1),[y,E]=d.useState(0),[j,T]=d.useState(!1),[S,g]=d.useState(!1),w=()=>{if(console.log("QuizResults handleBack:",{fromQuest:e.fromQuest,returnPath:e.returnPath,isPractice:e.isPractice||i}),e.fromQuest){const z=e.isPractice||i?"practiceQuestions":"dailyQuizzes";e.isPractice||i?s("/profile/quests"):s("/profile/quests",{state:{questCompleted:!0,questType:z,increment:1}})}else{const z=e.returnPath||"/";s(z)}},{correct:k,total:P,category:M,categorySlug:Y,difficulty:ee,mode:H,elapsedMs:Q}=e,$=P?Math.round(k/P*100):0,R=$===100,_=$>=80,F=Math.floor(Q/1e3),L=P>0?Math.floor(F/P):0,I=i?e.earnedCoins||0:Math.round(k*5*(R?1.5:_?1.2:1)),A=ss.find(z=>z.slug===M)||ss[0],ne=(()=>R?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:$>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:$>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:$>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:$>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{!m&&!N&&f(o.coins)},[o.coins,m,N]),d.useEffect(()=>{e.coinsProcessed||I>0&&p.current&&setTimeout(()=>{if(p.current.getBoundingClientRect(),x)try{x()}catch(z){console.error("Error playing coin sound:",z)}else console.warn("Coin sound not loaded");b({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(I,10),amount:I}),C(!0),e.coinsProcessed=!0},500)},[]),d.useEffect(()=>{document.documentElement.scrollIntoView({behavior:"smooth",block:"start"}),(R||_)&&(h(!0),setTimeout(()=>h(!1),3e3));let z=0;const B=k/20,Z=setInterval(()=>{z+=B,z>=k?(E(k),clearInterval(Z)):E(Math.floor(z))},50);return()=>clearInterval(Z)},[k,R,_]);const re=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:k,total:P}],U=()=>{try{const z=localStorage.getItem("qp_recent");if(z)return JSON.parse(z).slice(0,10).map(Z=>Z.slug||Z.cat).filter(Z=>Z&&Z!==e.categorySlug)}catch(z){console.error("Error reading recent categories:",z)}return[]},D=()=>{const z=Y||M,B=ee||"medium",Z=U(),ae=(l||ss||[]).filter(G=>G.slug!==z&&!Z.slice(0,3).includes(G.slug)),q=(()=>{if(ae.length===0){const G=(l||ss||[]).filter(W=>W.slug!==z);return G[Math.floor(Math.random()*G.length)]||(l||ss)[0]}return ae[Math.floor(Math.random()*ae.length)]})();if($<60)return i?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>s(`/quiz/${z}`,{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}})},{icon:q.icon,title:q.name,desc:"Fresh start with new topic",color:q.gradient,action:()=>s(`/quiz/${q.slug}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>r()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>s(`/quiz/${z}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:B!=="easy"?"🎯":"🔄",title:B!=="easy"?"Easy Mode":"Try Again",desc:B!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>B!=="easy"?s(`/quiz/${z}`,{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}):t()},{icon:q.icon,title:q.name,desc:"Try something different",color:q.gradient,action:()=>s(`/quiz/${q.slug}`,{mode:"quiz",difficulty:"easy",count:10,timer:{type:"per_q",seconds:45}})}];if($>=80)return B==="hard"&&$>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>s(`/quiz/${z}`,{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}})},{icon:q.icon,title:`${q.name} Challenge`,desc:"Hard mode, new topic",color:q.gradient,action:()=>s(`/quiz/${q.slug}`,{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>s("/quiz/mixed",{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}})}]:[{icon:B==="hard"?"🔥":"🎯",title:B==="hard"?"Perfect Score Challenge":"Hard Mode",desc:B==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>s(`/quiz/${z}`,{mode:"quiz",difficulty:"hard",count:B==="hard"?10:20,timer:{type:"per_q",seconds:30}})},{icon:q.icon,title:q.name,desc:"Master new topics",color:q.gradient,action:()=>s(`/quiz/${q.slug}`,{mode:"quiz",difficulty:B,count:10,timer:{type:"per_q",seconds:45}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>s(`/quiz/${z}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}})}];{const G=$<70;return[{icon:G?"📚":"🎯",title:G?"Practice More":"Try Again",desc:G?"Improve accuracy":"Beat your score",color:G?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:G?()=>s(`/quiz/${z}`,{mode:"practice",difficulty:B,count:10,timer:{type:"off",seconds:0}}):()=>t()},{icon:q.icon,title:q.name,desc:"Explore new topics",color:q.gradient,action:()=>s(`/quiz/${q.slug}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:45}})},{icon:B==="easy"?"⬆️":"💪",title:B==="easy"?"Medium Difficulty":"More Questions",desc:B==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>s(`/quiz/${z}`,{mode:"quiz",difficulty:B==="easy"?"medium":B,count:B==="easy"?10:20,timer:{type:"per_q",seconds:45}})}]}},K=pt.useMemo(()=>D(),[$,i,e.categorySlug,e.difficulty]);return n.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4",children:[m&&n.jsx(Si,{startRect:m.startRect,targetRef:p,count:m.count,onDone:()=>{m.amount>0&&!S&&(console.log("[QuizResults] Adding coins once:",m.amount),c(m.amount),g(!0),f(o.coins+m.amount)),b(null)}}),n.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),v&&n.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:n.jsx("div",{className:"text-8xl animate-bounce",children:R?"🎉":"⭐"})}),n.jsxs("div",{className:"flex justify-between items-center mb-6",children:[n.jsxs("button",{onClick:w,className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all flex items-center gap-2",children:[n.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),n.jsx("span",{className:"text-sm font-medium",children:"Back"})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",o.level]}),n.jsxs("button",{ref:p,onClick:()=>T(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[u," 🪙"]})]})]}),n.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),n.jsxs("div",{className:"relative text-center",children:[n.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${ne.color}`,children:[n.jsx("span",{className:"text-2xl",children:ne.emoji}),n.jsx("span",{className:"font-semibold",children:ne.text})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[y,"/",P]}),n.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[n.jsx("span",{className:"text-xl",children:A.icon}),n.jsx("span",{children:A.name})]})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[$,"%"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),n.jsxs("div",{className:"text-center",children:[n.jsxs("div",{className:"text-3xl font-bold",children:[L,"s"]}),n.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:I>0?`+${I}`:"0"}),n.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),n.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx(Fg,{}),n.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),o.combo>0&&n.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[n.jsx(Og,{}),o.combo," streak"]})]}),n.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:re.map((z,B)=>n.jsx("div",{className:`flex-1 rounded-t transition-all ${B===re.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${z.score/z.total*100}%`,minHeight:"4px"}},B))}),n.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[n.jsxs("button",{onClick:r,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[n.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),n.jsxs("div",{className:"relative flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Review"}),n.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),n.jsx(zg,{})]})]}),n.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-semibold",children:"Try Again"}),n.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),n.jsx(Mg,{})]})})]}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),K.map((z,B)=>n.jsx("button",{onClick:z.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${z.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:n.jsx("span",{className:"text-xl",children:z.icon})}),n.jsxs("div",{className:"text-left",children:[n.jsx("div",{className:"font-medium text-sm",children:z.title}),n.jsx("div",{className:"text-xs text-white/40",children:z.desc})]})]}),n.jsx(Dg,{})]})},B))]}),n.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:n.jsx("button",{onClick:()=>s("/profile/history",{replace:!0}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),j&&n.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:z=>{z.target===z.currentTarget&&T(!1)},children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:z=>z.stopPropagation(),children:[n.jsx("div",{className:"absolute inset-0 opacity-10",children:n.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),n.jsxs("div",{className:"relative",children:[n.jsxs("div",{className:"flex items-center justify-between mb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),n.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[o.coins," Coins"]})]})]}),n.jsx("button",{onClick:()=>T(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),n.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),n.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),n.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),n.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"font-medium flex items-center gap-2",children:[n.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),n.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),n.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[n.jsx("span",{children:"Next reward"}),n.jsxs("span",{children:[100-o.coins%100," coins to go"]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${o.coins%100}%`}})})]}),n.jsx("button",{onClick:()=>{T(!1),s("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})},Bg=({questions:e,answers:t,skipped:r,onBack:s,onRetake:a,fromHistory:i=!1})=>{const o=He(),l=()=>{i?o("/profile/history",{replace:!0}):s?s():o(-1)},c=e.reduce((p,m,b)=>p+(t[b]===m.answerIndex?1:0),0),u=(r==null?void 0:r.filter(Boolean).length)||0,f=e.length-c-u;return n.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),n.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),n.jsx("div",{className:"w-16"})," "]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[n.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),n.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),n.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),n.jsx("div",{className:"text-lg font-bold text-red-400",children:f})]}),n.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[n.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),n.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),n.jsx("ol",{className:"space-y-4",children:e.map((p,m)=>{const b=t[m],x=!b&&b!==0,N=b===p.answerIndex;return n.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",m+1,". ",p.prompt]}),p.category&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",p.category," • Difficulty: ",p.difficulty||"Medium"]})]}),n.jsx("div",{className:"ml-2",children:x?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):N?n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):n.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:p.options.map((C,v)=>{const h=b===v,y=v===p.answerIndex;let E="w-full text-left px-3 py-2 rounded-xl border transition-all ";return y?E+="bg-green-600/20 border-green-500/50 text-green-300":h&&!y?E+="bg-red-600/20 border-red-500/50 text-red-300":E+="bg-base-bg/40 border-base-border text-base-muted",n.jsxs("div",{className:E,children:[n.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][v],"."]}),C,y&&n.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),h&&!y&&n.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},v)})}),p.explanation&&n.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[n.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),n.jsx("div",{className:"text-sm text-base-muted",children:p.explanation})]})]},p.id||m)})}),n.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[n.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),a&&n.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:a,children:"Retake Quiz"})]})]})},qg="qp_resume",Ld="qp_mistakes",Ad="qp_stats",Id="qp_lastset",Dd="qp_recent",Md="qp_review_snapshot",Ug=50,as=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Ia=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Qg=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),Cm=e=>{const t=e.slice();for(let r=t.length-1;r>0;r--){const s=Math.floor(Math.random()*(r+1));[t[r],t[s]]=[t[s],t[r]]}return t},Yg=(e,t,r)=>Math.max(t,Math.min(r,e)),is=(e,t)=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):t}catch{return t}};async function Hg(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const r=await t.text(),{data:s}=hr.parse(r,{header:!0,skipEmptyLines:!0,transformHeader:i=>String(i).trim().toLowerCase()}),a={a:0,b:1,c:2,d:3};return s.map((i,o)=>{var m;const l=[i.option1,i.option2,i.option3,i.option4].map(b=>(b??"").trim());if(l.some(b=>!b))return null;let c=-1;const u=String(i.answer??"").trim();if(a[u.toLowerCase()]!==void 0)c=a[u.toLowerCase()];else{const b=l.findIndex(x=>x.toLowerCase()===u.toLowerCase());c=b>=0?b:0}const f=String(i.category??i.subject??"General Knowledge").trim(),p=String(i.difficulty??"medium").toLowerCase().trim();return{id:((m=i.id)==null?void 0:m.trim())||`q_${o}`,category:f,difficulty:p,prompt:String(i.question??"").trim(),options:l,answerIndex:c,explanation:String(i.explanation??"").trim()}}).filter(Boolean)}function Wg(e,{categorySlug:t,difficulty:r,count:s}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",r),console.log("count:",s),console.log("Total questions available:",e.length);const i=t==="mixed"?()=>!0:f=>Ia(f.category)===t,o=r?f=>(f.difficulty||"medium")===r:()=>!0,l=e.filter(f=>i(f)&&o(f));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(f=>`"${f.category}" -> "${Ia(f.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(f=>Ia(f.category)))]),{questions:[],poolSize:0};const u=Qg(l,Math.min(s,l.length)).map(f=>{const p=Cm([0,1,2,3]),m=p.map(x=>f.options[x]),b=p.indexOf(f.answerIndex);return{...f,options:m,answerIndex:b}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function Gg(){const e=He(),{category:t}=zp(),r=bt(),{energy:s,useEnergy:a,player:i,addCoins:o,addXP:l,updateDailyStreak:c}=jn(),u=new URLSearchParams(r.search),f=u.get("review")==="1",p=u.get("retake")==="1",m=r.state||{},b=m.mode||"quiz",x=String(m.difficulty||"medium").toLowerCase(),N=m.returnPath||null,C=m.fromQuest||!1,v=Yg(Number(m.count||10),1,50),h=m.timer||{type:"per_q",seconds:45};m.resume,m.daily,m.source;const y=p||!!m.retake,E=!!m.fromHistory,j=b==="practice";console.log("Quiz Component - Mode Detection:",{routerState:m,mode:b,isPractice:j,location:r.pathname,state:r.state});const[T,S]=d.useState([]),[g,w]=d.useState(!0),[k,P]=d.useState(""),[M,Y]=d.useState({questions:[]}),[ee,H]=d.useState("quiz"),[Q,$]=d.useState(null),[R,_]=d.useState(null),[F,L]=d.useState(0);d.useEffect(()=>{let U=!0;return(async()=>{try{const D=await Hg();if(!U)return;S(D)}catch(D){console.error(D),P("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{w(!1)}})(),()=>{U=!1}},[]),d.useEffect(()=>{if(g||k||f||T.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",b),console.log("Difficulty:",x),console.log("Count:",v);const U=Wg(T,{categorySlug:t,difficulty:x,count:v});if(U.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(T.map(D=>Ia(D.category)))].slice(0,10)),P(`No questions found for "${as(t)}" with difficulty "${x}"`);return}console.log("Session built with",U.questions.length,"questions"),Y(U),_(Date.now()),L(0),H("quiz")},[T,t,b,x,v,r.state,r.search]),d.useEffect(()=>{if(ee!=="quiz"||!R)return;const U=setInterval(()=>{L(Date.now()-R)},1e3);return()=>clearInterval(U)},[ee,R]);const I=d.useCallback(U=>{if(console.log("Quiz completed - Mode:",b,"isPractice:",j,"Results:",U),!U||!U.questions){console.error("Invalid results object:",U);return}const D=U.questions.filter((z,B)=>U.answers[B]!==null&&U.answers[B]!==z.answerIndex).map(z=>z.id);try{const z=is(Ld,[]),B=Array.from(new Set([...D,...z]));localStorage.setItem(Ld,JSON.stringify(B))}catch(z){console.error("Error saving mistakes:",z)}try{const z=is(Ad,{sessions:[]});z.sessions.push({cat:as(t),mode:j?"practice":"quiz",total:U.total,correct:U.correct,skipped:U.skipped.filter(Boolean).length,ms:F,timestamp:Date.now(),earnedXP:j?0:U.correct*10,earnedCoins:j?0:U.correct*5}),localStorage.setItem(Ad,JSON.stringify(z))}catch(z){console.error("Error saving stats:",z)}const K={ts:Date.now(),slug:t,categoryLabel:as(t),mode:j?"practice":"quiz",difficulty:x,total:U.total,timer:j?null:h,ms:F,attempted:U.answers.filter(z=>z!==null).length,correct:U.correct,questions:U.questions,answers:U.answers,skipped:U.skipped,isPractice:j};try{localStorage.setItem(Id,JSON.stringify(K)),localStorage.setItem(Md,JSON.stringify({questions:U.questions,answers:U.answers,skipped:U.skipped}));const z=is(Dd,[]),Z=[{id:K.ts,ts:K.ts,cat:K.categoryLabel,slug:t,mode:j?"Practice":"Quiz",total:U.total,correct:U.correct,ms:F,snapshot:K},...z].slice(0,Ug);localStorage.setItem(Dd,JSON.stringify(Z))}catch(z){console.error("Error saving snapshot:",z)}if(localStorage.removeItem(qg),j&&U.earnedCoins?U.earnedCoins:!j&&U.correct>0&&U.correct*5,!j&&U.correct>0){const z=U.correct*10;l(z)}c(),console.log("Setting review snapshot with:",{returnPath:N||"/",fromQuest:C||!1}),$({...U,category:as(t),categorySlug:t,difficulty:x,mode:j?"practice":"quiz",elapsedMs:F,isPractice:j,hasTimer:!j,earnedXP:j?0:U.correct*10,earnedCoins:j?U.earnedCoins||0:U.correct*5,returnPath:N||"/",fromQuest:C||!1}),H("results")},[t,b,h,F,j,N,C]),A=d.useCallback(()=>{N?e(N,{replace:!0}):E?e("/profile/history",{replace:!0,state:null}):e("/")},[E,e,N]),X=d.useCallback(()=>{console.log("Retake requested - Mode:",b,"isPractice:",j);const U=is(Id,null);if(!U||U.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:j?"practice":"quiz",difficulty:x,count:v,timer:j?null:h,retake:!0}});return}const D=U.questions.map(K=>{const z=Cm([0,1,2,3]);return{...K,options:z.map(B=>K.options[B]),answerIndex:z.indexOf(K.answerIndex)}});Y({questions:D,poolSize:D.length}),_(Date.now()),L(0),H("quiz"),window.scrollTo(0,0)},[t,b,x,v,h,e,j]),ne=d.useCallback((U=null)=>{if(U)$(U);else if(!Q){const D=is(Md,null);D&&$({questions:D.questions||[],answers:D.answers||[],skipped:D.skipped||[]})}H("review")},[Q]),re=d.useCallback(()=>{E?e("/profile/history",{replace:!0}):H("results")},[E,e]);return g?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):k?n.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:n.jsx("div",{className:"text-sm text-red-400",children:k})}):(console.log("Render - Current view:",ee,"Session questions:",M.questions.length,"Mode:",b,"isPractice:",j),n.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:n.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[ee==="quiz"&&M.questions.length>0&&n.jsx(Ig,{session:M,mode:j?"practice":"quiz",category:as(t),difficulty:x,timerConfig:j?null:h,onComplete:I,onQuit:A,isPractice:j}),ee==="results"&&Q&&n.jsx($g,{results:Q,onRetake:X,onReview:()=>ne(Q),isRetake:y,isPractice:j,player:i,categories:jm,addCoins:o,onNavigate:(U,D)=>{console.log("onNavigate called with:",U,D),D!=null&&D.state?e(U,{state:D.state,replace:D.replace||!1}):e(U)}}),ee==="review"&&Q&&n.jsx(Bg,{questions:Q.questions||[],answers:Q.answers||[],skipped:Q.skipped||[],onBack:re,onRetake:X,fromHistory:E,isPractice:j})]})}))}const En=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Xn=360/En.length,Vg=42,no=3e3,zd=10,Fd=260,Xg="cubic-bezier(.15,.7,.1,1)",Kg="cubic-bezier(.2,.7,.2,1)",Cn=5,Jg=5,Zg=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function ev({muted:e=!1,size:t=18}){return n.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[n.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&n.jsxs(n.Fragment,{children:[n.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),n.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&n.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function tv({q:e,locked:t,onPick:r,result:s}){if(!e)return null;const a=[e.option1,e.option2,e.option3,e.option4];return n.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[n.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),n.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),a.map((i,o)=>{const l=s&&i===e.answer,c=s&&s.pick===i&&i!==e.answer;return n.jsx("button",{disabled:t||!!s,onClick:()=>r(i),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!s&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:i},o)}),s&&n.jsxs("div",{className:"mt-3 text-sm",children:[s.correct?n.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):n.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",n.jsx("b",{children:e.answer})]}),e.explanation&&n.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function nv(){const e=He(),[t]=zt("/sounds/correct.mp3",{volume:.7}),[r]=zt("/sounds/wrong.mp3",{volume:.7}),[s,a]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(Cn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(Cn).fill(null)}]),[i,o]=d.useState(0),[l,c]=d.useState(1),u=s.reduce((D,K)=>D+K.scores.reduce((z,B)=>z+(B??0),0),0),[f,p]=d.useState(!0),m=d.useRef(null);d.useEffect(()=>{const D=new Audio("/sounds/spin.mp3");return D.loop=!0,D.volume=.7,m.current=D,()=>{try{D.pause(),D.src=""}catch{}}},[]);const b=()=>{if(f&&m.current)try{m.current.currentTime=0,m.current.play()}catch{}},x=()=>{if(m.current)try{m.current.pause(),m.current.currentTime=0}catch{}},[N,C]=d.useState(0),[v,h]=d.useState("none"),[y,E]=d.useState(!1),[j,T]=d.useState(null),[S,g]=d.useState(null),w=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[k,P]=d.useState([]);d.useEffect(()=>{(async()=>{try{const D=await fetch("/data/quiz_questions_bank.csv").then(Z=>Z.text()),{data:K}=hr.parse(D,{header:!0,skipEmptyLines:!0,transformHeader:Z=>String(Z).trim().toLowerCase()}),z={a:0,b:1,c:2,d:3},B=K.map((Z,ae)=>{var te;const ce=(Z.question??"").trim();if(!ce)return null;const q=[Z.option1,Z.option2,Z.option3,Z.option4].map(de=>String(de??"").trim());if(q.some(de=>!de))return null;let G=String(Z.answer??"").trim(),W=z[G.toLowerCase()];if(W===void 0){const de=q.findIndex(je=>je.toLowerCase()===G.toLowerCase());W=de>=0?de:0}const O=q[W];return{id:((te=Z.id)==null?void 0:te.trim())||`ps_${ae}`,question:ce,option1:q[0],option2:q[1],option3:q[2],option4:q[3],answer:O,explanation:String(Z.explanation??"").trim(),catSlug:Zg(Z.category??Z.subject??"general knowledge"),difficulty:String(Z.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);P(B)}catch{P([])}})()},[]);const[M,Y]=d.useState(null),[ee,H]=d.useState(null),[Q,$]=d.useState(!1),R=D=>(D%360+360)%360,_=D=>R(D),F=l>Cn;function L(){if(s.length>=4)return;const D=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],K=D[(s.length*2+1)%D.length];a(z=>[...z,{name:`Player ${z.length+1}`,color:K,scores:Array(Cn).fill(null)}])}function I(){s.length<=2||(a(D=>D.slice(0,-1)),o(D=>Math.min(D,s.length-2)))}function A(D){a(K=>K.map((z,B)=>B===i?{...z,scores:z.scores.map((Z,ae)=>ae===l-1?D:Z)}:z))}function X(){if(y||F)return;T(null),g(null),Y(null),H(null),E(!0),b();const D=Math.floor(Math.random()*En.length),K=En[D],z=Xn*.28,B=(Math.random()*2-1)*z,Z=R(N),ae=180,q=D*Xn+Xn/2+B;let G=_(q-Z-ae);const W=Vg*360+G,O=N+W+zd;h(`transform ${w?800:no}ms ${Xg}`),C(O);try{navigator.vibrate&&!w&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{h(`transform ${w?160:Fd}ms ${Kg}`),C(te=>te-zd)},w?800:no),setTimeout(()=>{if(x(),E(!1),T(D),g(K.color),K.soon)return;const te=k.filter(je=>je.catSlug===K.slug&&je.difficulty==="easy"),de=te.length?te:k.filter(je=>je.catSlug===K.slug);if(de.length){const je=de[Math.floor(Math.random()*de.length)];Y(je)}else Y({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(w?800:no)+(w?160:Fd)+40)}function ne(D){if(!M||ee)return;const K=D===M.answer;if(H({correct:K,pick:D}),K){t(),$(!0),setTimeout(()=>$(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}A(Jg)}else{r();try{navigator.vibrate&&navigator.vibrate([4])}catch{}A(0)}}function re(){const D=(i+1)%s.length,K=D===0?l+1:l;o(D),c(K),T(null),g(null),Y(null),H(null)}function U(){const D=s.map(B=>B.scores.reduce((Z,ae)=>Z+(ae??0),0)),K=Math.max(...D),z=s.filter((B,Z)=>D[Z]===K).map(B=>B.name).join(", ");alert(`${z} win${z.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return n.jsxs("div",{className:"min-h-screen bg-black text-white",children:[Q&&n.jsx(km,{numberOfPieces:120,recycle:!1}),n.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[n.jsxs("header",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),n.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),n.jsx("button",{onClick:()=>p(D=>!D),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":f?"Mute sound":"Unmute sound",title:f?"Sound on":"Sound off",children:n.jsx(ev,{muted:!f})})]}),n.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-sm",children:["Round ",n.jsx("b",{children:Math.min(l,Cn)}),"/",n.jsx("b",{children:Cn})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("button",{onClick:L,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),n.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),n.jsx("button",{onClick:I,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),n.jsxs("div",{className:"text-sm",children:["Pot: ",n.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[n.jsxs("colgroup",{children:[n.jsx("col",{style:{width:"42%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"9%"}}),n.jsx("col",{style:{width:"13%"}})]}),n.jsx("thead",{children:n.jsxs("tr",{className:"text-base-muted",children:[n.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:Cn}).map((D,K)=>n.jsxs("th",{className:"font-medium text-center",children:["R",K+1]},K)),n.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),n.jsx("tbody",{children:s.map((D,K)=>{const z=D.scores.reduce((Z,ae)=>Z+(ae??0),0),B=K===i;return n.jsxs("tr",{className:B?"bg-white/6":"",children:[n.jsx("td",{className:"py-1 pr-1",children:n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:D.color}}),n.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:D.name,onChange:Z=>a(ae=>ae.map((ce,q)=>q===K?{...ce,name:Z.target.value}:ce))})]})}),D.scores.map((Z,ae)=>n.jsx("td",{className:"text-center",children:Z===null?"–":Z},ae)),n.jsx("td",{className:"text-right pr-1 font-semibold",children:z})]},K)})})]})})]}),n.jsx("section",{className:"flex flex-col items-center",children:n.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[S&&n.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${S}33, 0 0 30px 8px ${S}44`}}),n.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${N}deg)`,transition:v},"aria-label":"Category wheel",role:"group",children:n.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[En.map((D,K)=>{const z=K*Xn,B=z+Xn,Z=Xn>180?1:0,ae=Math.PI*z/180,ce=Math.PI*B/180,q=50+50*Math.cos(ae),G=50-50*Math.sin(ae),W=50+50*Math.cos(ce),O=50-50*Math.sin(ce),te=j===K;return n.jsxs("g",{style:{opacity:j==null?.95:te?1:.78,filter:j!=null&&!te?"blur(0.6px)":"none"},children:[n.jsx("path",{d:`M50,50 L${q},${G} A50,50 0 ${Z} 0 ${W},${O} Z`,fill:D.color,stroke:te?`${D.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:te?"1.2":"0.6"}),n.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${z+Xn/2} 50 50) translate(12 0)`,children:n.jsxs("tspan",{children:[D.label,D.soon?" (soon)":""]})})]},D.slug)}),n.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),n.jsx("button",{onClick:X,disabled:y||F,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",y||F?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:n.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),j!=null&&!y&&n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:n.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[n.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:En[j].color}}),En[j].label]})})]})}),n.jsx("section",{className:"mt-4",children:F?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),n.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",n.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),n.jsx("button",{className:"btn-primary w-full",onClick:U,children:"End match"})]}):j!=null&&En[j].soon?n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[n.jsx("div",{className:"text-lg font-semibold mb-1",children:En[j].label}),n.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),n.jsx("button",{className:"btn-primary",onClick:X,disabled:y,children:"Re-spin"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",n.jsx("span",{style:{color:s[i].color},children:s[i].name})," ","| Round ",l,"/",Cn]}),n.jsx(tv,{q:M,locked:y||!M,onPick:ne,result:ee}),ee&&n.jsx("div",{className:"mt-3 flex justify-center",children:n.jsx("button",{className:"btn-primary",onClick:re,children:"Next turn"})})]})})]}),n.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}const rv=({onSelect:e})=>{const t=[{id:"random",emoji:"🎲",title:"Random Mix",color:"from-purple-500 to-pink-500"},{id:"trending",emoji:"📈",title:"Trending Now",color:"from-blue-500 to-cyan-500"},{id:"level",emoji:"📊",title:"Your Level",color:"from-green-500 to-teal-500"},{id:"daily",emoji:"🎯",title:"Daily Challenge",color:"from-orange-500 to-red-500"}];return n.jsxs("div",{className:"fixed inset-0 bg-gray-900 overflow-hidden flex flex-col justify-center items-center px-4",children:[n.jsx("h1",{className:"text-2xl font-bold text-white mb-20",children:"Choose a swipe mode"}),n.jsx("div",{className:"grid grid-cols-2 gap-4 w-full max-w-md h-[55vh]",children:t.map(r=>n.jsxs("button",{onClick:()=>e(r.id,r.title),className:`rounded-3xl bg-gradient-to-br ${r.color} p-6 flex flex-col items-center justify-center gap-3 transform hover:scale-105 transition-all shadow-xl`,children:[n.jsx("span",{className:"text-5xl",children:r.emoji}),n.jsx("span",{className:"text-white font-bold text-lg text-center",children:r.title})]},r.id))})]})},sv=()=>{He();const{player:e,addCoins:t,addXP:r}=jn(),[s,a]=d.useState([]),[i,o]=d.useState(0),[l,c]=d.useState({}),[u,f]=d.useState(0),[p,m]=d.useState(5),[b,x]=d.useState(0),[N,C]=d.useState(!0),[v,h]=d.useState(null),[y,E]=d.useState(!0),[j,T]=d.useState(null),[S,g]=d.useState(""),[w,k]=d.useState(!1),[P,M]=d.useState(""),[Y,ee]=d.useState(!1),[H,Q]=d.useState(!1),[$,R]=d.useState(!1),[_,F]=d.useState(!1),[L,I]=d.useState(!1),[A,X]=d.useState(!1),[ne,re]=d.useState(0),[U,D]=d.useState(0),[K,z]=d.useState(-1),[B,Z]=d.useState(-1),[ae,ce]=d.useState({}),[q,G]=d.useState({}),W=d.useRef(null),O=d.useRef(null),[te]=zt("/sounds/correct.mp3",{volume:.6}),[de]=zt("/sounds/wrong.mp3",{volume:.6}),[je]=zt("/sounds/coin.mp3",{volume:.75}),Le=["🐼","🐱","🐶","🦊","🐰","🐨","🐯","🦁","🐸","🐵"],Be=()=>{a([]),o(0),c({}),f(0),m(5),x(0),C(!0),h(null),k(!1),M(""),ee(!1),Q(!1),R(!1),F(!1),I(!1),X(!1),re(0),D(0),z(-1),Z(-1),ce({}),G({}),T(null),g(""),me(null)};d.useEffect(()=>(Be(),E(!0),()=>{document.body.classList.remove("hide-bottom-nav"),Be(),O.current&&clearTimeout(O.current)}),[]),d.useEffect(()=>{!y&&s.length>0?document.body.classList.add("hide-bottom-nav"):document.body.classList.remove("hide-bottom-nav")},[y,s.length]),d.useEffect(()=>{!y&&s.length>0&&F(!0)},[y,s.length]);const[Ee,me]=d.useState(null);d.useEffect(()=>{const J=le=>{var _e;if(_&&!$){const Se=le.target.closest('button[type="button"]'),Ve=(_e=Se==null?void 0:Se.querySelector(".text-\\[10px\\]"))==null?void 0:_e.textContent;Ve&&["Home","Play","Profile","Swipe"].includes(Ve)&&(le.preventDefault(),le.stopPropagation(),me({Home:"/",Play:"/play",Profile:"/profile",Swipe:"/swipe"}[Ve]),Q(!0))}};return document.addEventListener("click",J,!0),()=>document.removeEventListener("click",J,!0)},[_,$]),d.useEffect(()=>{const J=W.current;if(!J)return;let le=!1,_e=0,Se=null;const Ve=pe=>{!y&&s.length>0&&pe.preventDefault()},ve=pe=>{_e=pe.touches[0].clientY,le=!1},ie=pe=>{!y&&s.length>0&&!H&&!Y&&pe.preventDefault()},oe=pe=>{if(le||H||Y)return;const Re=pe.changedTouches[0].clientY,xe=_e-Re;if(Math.abs(xe)>30){if(le=!0,Se&&clearTimeout(Se),xe>0&&i<s.length-1){const Ie=i+1;o(Ie),J.scrollTo({top:Ie*window.innerHeight,behavior:"smooth"})}else if(xe<0&&i>0){const Ie=i-1;o(Ie),J.scrollTo({top:Ie*window.innerHeight,behavior:"smooth"})}Se=setTimeout(()=>{le=!1},800)}};return J.addEventListener("touchstart",ve,{passive:!1}),J.addEventListener("touchmove",ie,{passive:!1}),J.addEventListener("touchend",oe,{passive:!1}),J.addEventListener("wheel",Ve,{passive:!1}),()=>{J.removeEventListener("touchstart",ve),J.removeEventListener("touchmove",ie),J.removeEventListener("touchend",oe),J.removeEventListener("wheel",Ve),Se&&clearTimeout(Se)}},[i,s.length,y]),d.useEffect(()=>{const J=W.current;J&&(H||Y?(J.style.overflow="hidden",J.style.touchAction="none"):(J.style.overflow="auto",J.style.touchAction="auto"))},[H,Y]),d.useEffect(()=>{(H||Y)&&O.current&&(clearTimeout(O.current),O.current=null)},[H,Y]);const he=async J=>{try{const _e=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Se}=hr.parse(_e,{header:!0,skipEmptyLines:!0}),ie=Se.map((oe,pe)=>{var Ie,it;const Re=[oe.option1,oe.option2,oe.option3,oe.option4].filter(Boolean),xe={A:0,B:1,C:2,D:3};return{id:oe.id||`q_${pe}`,prompt:oe.question,options:Re,answerIndex:xe[(Ie=oe.answer)==null?void 0:Ie.toUpperCase()]||0,category:oe.category||"General Knowledge",difficulty:((it=oe.difficulty)==null?void 0:it.toLowerCase())||"medium",explanation:oe.explanation||"",stats:{views:Math.floor(Math.random()*1e4)+1e3,attempted:Math.floor(Math.random()*5e3)+500,correctRate:Math.floor(Math.random()*40)+30}}}).filter(oe=>oe.prompt&&oe.options.length===4).sort(()=>Math.random()-.5).slice(0,50).map(oe=>({...oe,mascot:Le[Math.floor(Math.random()*Le.length)]}));a(ie),C(!1)}catch(le){console.error("Failed to load questions:",le),C(!1)}},be=J=>J===1||J===3||J===7||J===10||J===15||J===20||J>20&&J%5===0,ke=(J,le)=>{if(l[J]!==void 0)return;const _e=s.find(ve=>ve.id===J),Se=le===_e.answerIndex,Ve=s.findIndex(ve=>ve.id===J);if(c(ve=>({...ve,[J]:le})),re(ve=>ve+1),D(ve=>ve+1),Se){if(te(),f(ve=>ve+1),x(ve=>ve+10),X(!0),setTimeout(()=>{je()},300),setTimeout(()=>X(!1),2e3),qe(),be(Ve+1)){const ve=["Awesome!","Perfect!","Brilliant!","Outstanding!","Incredible!"];M(ve[Math.floor(Math.random()*ve.length)]),k(!0),setTimeout(()=>k(!1),2e3)}}else if(de(),f(0),I(!0),setTimeout(()=>I(!1),1500),m(ve=>{const ie=Math.max(0,ve-1);return ie===0&&setTimeout(()=>ee(!0),500),ie}),p>1&&be(Ve+1)){const ve=["Keep trying!","You got this!","Don't give up!","Stay strong!","Keep going!"];M(ve[Math.floor(Math.random()*ve.length)]),k(!0),setTimeout(()=>k(!1),2e3)}(p>1||Se)&&(O.current=setTimeout(()=>{Ut()},2500))},qe=()=>{const J=document.createElement("div");J.style.position="fixed",J.style.inset="0",J.style.pointerEvents="none",J.style.zIndex="1000",document.body.appendChild(J);const le=["🎉","✨","⭐","🎊","🌟"];for(let _e=0;_e<20;_e++){const Se=document.createElement("div");Se.textContent=le[Math.floor(Math.random()*le.length)],Se.style.position="fixed",Se.style.left=`${Math.random()*100}%`,Se.style.top="-50px",Se.style.fontSize="24px",Se.style.animation=`fall ${2+Math.random()*2}s ease-out`,J.appendChild(Se)}setTimeout(()=>J.remove(),4e3)},Ut=()=>{if(!(H||Y)&&i<s.length-1){const J=i+1,le=document.getElementById(`question-${J}`);le==null||le.scrollIntoView({behavior:"smooth"}),o(J)}},et=J=>{const le=s.findIndex(ve=>ve.id===J);if(K>=0&&ne<5){h(`After ${5-ne} attempts`),setTimeout(()=>h(null),2e3);return}const _e=s[le],Ve=[0,1,2,3].filter(ve=>ve!==_e.answerIndex).sort(()=>Math.random()-.5).slice(0,2);ce({...ae,[J]:Ve}),z(le),re(0)},we=J=>{const le=s.findIndex(pe=>pe.id===J);if(B>=0&&U<5){h(`After ${5-U} attempts`),setTimeout(()=>h(null),2e3);return}const Se=s[le].answerIndex,Ve=[0,0,0,0],ve=40+Math.floor(Math.random()*31);Ve[Se]=ve;let ie=100-ve;const oe=[0,1,2,3].filter(pe=>pe!==Se);for(let pe=0;pe<oe.length-1;pe++){const Re=Math.floor(Math.random()*(ie/2));Ve[oe[pe]]=Re,ie-=Re}Ve[oe[oe.length-1]]=ie,G({...q,[J]:Ve}),Z(le),D(0)},Ae=(J,le)=>{Be(),T(J),g(le),E(!1),he()},Qt=()=>{me("/swipe"),Q(!0)},Gn=()=>{R(!0),Q(!1),document.body.classList.remove("hide-bottom-nav")},Ge=()=>{const J=Object.keys(l).filter(le=>{const _e=s.find(Se=>Se.id===le);return l[le]===(_e==null?void 0:_e.answerIndex)}).length;return d.useEffect(()=>{document.body.classList.add("hide-bottom-nav");const le=setTimeout(()=>{t(b),Be(),F(!1),R(!1),E(!0),document.body.classList.remove("hide-bottom-nav")},2e3);return()=>{clearTimeout(le),document.body.classList.remove("hide-bottom-nav")}},[]),n.jsx("div",{className:"fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-8 max-w-md w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"🎉"}),n.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Session Complete!"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Questions Answered"}),n.jsx("div",{className:"text-2xl font-bold text-white",children:Object.keys(l).length})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Correct Answers"}),n.jsx("div",{className:"text-2xl font-bold text-green-400",children:J})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Coins Earned"}),n.jsxs("div",{className:"text-2xl font-bold text-yellow-400",children:["🪙 ",b]})]}),n.jsxs("div",{className:"bg-gray-700/50 rounded-xl p-4",children:[n.jsx("div",{className:"text-gray-400 text-sm mb-1",children:"Lives Remaining"}),n.jsx("div",{className:"text-2xl font-bold text-red-400",children:Array.from({length:5},(le,_e)=>n.jsx("span",{className:_e<p?"":"opacity-30",children:"❤️"},_e))})]})]})]})})};return $?n.jsx(Ge,{}):y?n.jsx(rv,{onSelect:Ae}):N?n.jsx("div",{className:"h-screen bg-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading questions..."})}):n.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[n.jsxs("div",{className:"fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur z-50 border-b border-gray-800 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[n.jsx("button",{onClick:Qt,className:"inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl text-white text-sm font-medium hover:bg-white/15 transition-all",children:"← Back"}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("div",{className:"flex items-center gap-1 bg-yellow-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🪙"}),n.jsx("span",{className:"font-bold text-yellow-400",children:b})]}),n.jsxs("div",{className:"flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full",children:[n.jsx("span",{children:"🔥"}),n.jsx("span",{className:"font-bold text-orange-400",children:u})]})]}),n.jsx("div",{className:"flex items-center gap-1",children:Array.from({length:5},(J,le)=>n.jsx("span",{className:`${le<p?"text-red-500":"text-gray-600 opacity-30"} ${L&&le===p-1?"animate-heartLoss":""}`,children:"❤️"},le))})]}),S&&n.jsx("div",{className:"text-center py-1",children:n.jsx("span",{className:"text-xs text-gray-400",children:S})})]}),A&&n.jsx("div",{className:"fixed top-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-yellow-500 text-white px-4 py-2 rounded-full font-bold animate-coinFloat",children:"+10 🪙"})}),n.jsx("div",{ref:W,className:"h-full overflow-y-hidden snap-y snap-mandatory pt-32",style:{scrollBehavior:"smooth",overscrollBehavior:"none",WebkitOverflowScrolling:"touch",touchAction:"none"},children:s.map((J,le)=>n.jsx(av,{question:J,index:le,answered:l[J.id],onAnswer:_e=>ke(J.id,_e),onFiftyFifty:()=>et(J.id),onAudience:()=>we(J.id),eliminated:ae[J.id]||[],audiencePercentages:q[J.id],canUseFiftyFifty:K<0||ne>=5,canUseAudience:B<0||U>=5},J.id))}),Y&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-5xl mb-4",children:"😔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"No Lives Left!"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Sorry, you have no lives left to continue swiping."}),n.jsx("button",{onClick:()=>{R(!0),document.body.classList.remove("hide-bottom-nav")},className:"w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl text-white font-medium",children:"View Results"})]})}),H&&n.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:n.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[n.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),n.jsx("h3",{className:"text-xl font-bold mb-2 text-white",children:"Leave Swipe Mode?"}),n.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be saved"}),n.jsxs("div",{className:"flex gap-3",children:[n.jsx("button",{onClick:()=>Q(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium text-white",children:"Stay"}),n.jsx("button",{onClick:Gn,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium text-white",children:"Leave"})]})]})}),w&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50",children:n.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-pink-600 px-8 py-6 rounded-3xl text-white font-bold text-2xl shadow-2xl animate-fadeIn",children:P})}),v&&n.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",children:n.jsx("div",{className:"bg-gray-800/90 px-6 py-3 rounded-full text-white font-bold animate-fadeIn",children:v})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},av=({question:e,index:t,answered:r,onAnswer:s,onFiftyFifty:a,onAudience:i,eliminated:o,audiencePercentages:l,canUseFiftyFifty:c,canUseAudience:u})=>{const f=p=>{switch(p){case"easy":return"from-green-500 to-green-600";case"hard":return"from-red-500 to-red-600";default:return"from-yellow-500 to-yellow-600"}};return n.jsxs("div",{id:`question-${t}`,className:"h-screen snap-start flex flex-col px-4 pb-4",style:{paddingTop:"150px"},children:[n.jsx("div",{className:"flex justify-center py-2",children:n.jsx("span",{className:"text-8xl",style:{animation:"float 3s ease-in-out infinite"},children:e.mascot})}),n.jsxs("div",{className:"flex-1 flex flex-col justify-start max-w-md mx-auto w-full",children:[n.jsxs("div",{className:`bg-gradient-to-br ${f(e.difficulty)} p-6 rounded-3xl mb-4`,children:[n.jsxs("div",{className:"text-white/80 text-sm mb-2",children:["Question ",t+1]}),n.jsx("h2",{className:"text-2xl font-bold text-white",children:e.prompt})]}),n.jsx("div",{className:"space-y-3 mb-3",children:e.options.map((p,m)=>{const b=r!==void 0,x=r===m,N=m===e.answerIndex,C=o.includes(m);let v="w-full p-4 rounded-2xl font-medium transition-all ";return C?v+="bg-gray-700/30 text-gray-500/50 cursor-not-allowed":b?N?v+="bg-green-500 text-white":x?v+="bg-red-500 text-white":v+="bg-gray-700 text-gray-400":v+="bg-gray-800 text-white hover:bg-gray-700",n.jsx("button",{onClick:()=>!b&&!C&&s(m),disabled:b||C,className:v,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"text-lg",children:["🅰️","🅱️","🅲️","🅳️"][m]}),n.jsx("span",{className:"flex-1 text-left",children:p}),l&&l[m]>0&&n.jsxs("span",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs",children:[l[m],"%"]}),b&&N&&n.jsx("span",{children:"✓"})]})},m)})}),!r&&n.jsxs("div",{className:"flex justify-center gap-3 mb-3",children:[n.jsx("button",{onClick:a,disabled:!c,className:`px-4 py-2 rounded-lg font-medium text-sm ${c?"bg-orange-600 text-white":"bg-gray-700 text-gray-500"}`,children:"⚡ 50:50"}),n.jsx("button",{onClick:i,disabled:!u,className:`px-4 py-2 rounded-lg font-medium text-sm ${u?"bg-purple-600 text-white":"bg-gray-700 text-gray-500"}`,children:"👥 Audience"})]}),n.jsx("div",{className:"text-center mt-3 mb-2",children:n.jsxs("div",{className:"text-gray-500 text-xs",children:[e.stats.views.toLocaleString()," views • ",e.stats.attempted.toLocaleString()," attempted • ",e.stats.correctRate,"% correct"]})}),n.jsx("div",{className:"text-center mt-12 mb-4",children:n.jsx("div",{className:"text-gray-500 text-sm animate-bounce",children:"Swipe up for next"})})]})]})};function iv(){const[e]=vm(),t=He();return bt(),d.useEffect(()=>{const r=e.get("category"),s=e.get("difficulty"),a=e.get("from")==="quest",i=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports","mixed"],o=["easy","medium","hard"],l=r==="random"?i[Math.floor(Math.random()*i.length)]:r||"mixed",c=s==="random"?o[Math.floor(Math.random()*o.length)]:s||"medium";console.log("QuizPlay - fromQuest:",a),console.log("QuizPlay - returnPath will be:",a?"/quests":"/"),t(`/quiz/${l}`,{replace:!0,state:{mode:"quiz",difficulty:c,count:5,timer:{type:"per_q",seconds:45},fromQuest:a,returnPath:a?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontSize:"20px"},children:"Starting your quiz..."})}function ov(){const[e]=vm(),t=He();return d.useEffect(()=>{const r=e.get("questions")||"15",s=e.get("difficulty")||"easy",a=e.get("category")||"mixed",i=e.get("from")==="quest",o=["general-knowledge","fun-facts","science","history","geography","computer","artificial-intelligence","sports"],l=a==="random"?o[Math.floor(Math.random()*o.length)]:a;console.log("PracticeStart - Launching practice mode:",{category:l,difficulty:s,questions:r,fromQuest:i}),t(`/quiz/${l}`,{replace:!0,state:{mode:"practice",difficulty:s,count:parseInt(r),timer:{type:"off",seconds:0},fromQuest:i,questType:i?"practiceQuestions":null,returnPath:i?"/profile/quests":"/"}})},[e,t]),n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"linear-gradient(135deg, #10B981 0%, #059669 100%)",color:"white",fontSize:"20px"},children:"Loading practice questions..."})}function lv(){const e=He(),[t,r]=d.useState(""),{player:s,levelProgress:a}=jn(),i=()=>{try{const u=JSON.parse(localStorage.getItem("qp_stats")||'{"sessions":[]}'),f=new Date().setHours(0,0,0,0);return u.sessions.filter(m=>new Date(m.timestamp).setHours(0,0,0,0)===f).reduce((m,b)=>m+(b.earnedCoins||0),0)}catch{return 0}},o={name:(s==null?void 0:s.name)||"Player",rank:23,streak:(s==null?void 0:s.currentStreak)||0,todayQuizzes:3,todayCoins:i()};d.useEffect(()=>{const u=new Date().getHours();u<12?r("Good morning"):u<17?r("Good afternoon"):r("Good evening")},[]);const l=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,c=a.required>0?a.current/a.required*100:0;return n.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-10 px-3",children:[n.jsxs("div",{className:"mb-6",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("div",{children:n.jsxs("h1",{className:"text-2xl font-bold px-3",children:[t,", ",(s==null?void 0:s.name)||"Player"," 👋"]})}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-10 h-10 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:n.jsx("span",{className:"text-xl",children:"⚙️"})})]}),n.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[n.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[n.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:o.name[0]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"text-lg font-semibold",children:s.name||"Player"}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",s.level]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[s.coins," 🪙"]}),n.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",o.rank]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[n.jsx("span",{children:"XP Progress"}),n.jsxs("span",{children:[a.current,"/",a.required]})]}),n.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:n.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${c}%`}})})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",o.streak]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),n.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[n.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",o.todayCoins]}),n.jsx("div",{className:"text-white/60 text-xs",children:"Today"})]})]})]})]}),n.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${l} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),n.jsxs("div",{className:"relative flex items-start justify-between",children:[n.jsxs("div",{children:[n.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),n.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),n.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[n.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),n.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("button",{onClick:()=>e("/profile/history"),className:`${l} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),n.jsx("div",{className:"text-3xl mb-3",children:"📊"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),n.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",o.todayQuizzes," today"]})]}),n.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${l} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[n.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),n.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),n.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${l} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[n.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),n.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),n.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${l} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[n.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),n.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),n.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),n.jsxs("div",{className:"mt-4 space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[n.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${l} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"🔥"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),n.jsxs("div",{className:"text-[11px] opacity-80",children:[o.streak," days strong"]})]})]})}),n.jsx("button",{onClick:()=>e("/profile/quests"),className:`${l} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"text-2xl",children:"⚡"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),n.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),n.jsx("button",{onClick:()=>e("/profile/settings"),className:`${l} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),n.jsxs("div",{children:[n.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),n.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),n.jsx("div",{className:"text-white/40",children:"→"})]})})]}),n.jsx("div",{className:"h-6"})]})}const os="🪙",fa={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},ma=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function cv(){var m,b;const e=He(),{player:t}=jn(),r={global:fa.global.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x),friends:fa.friends.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x),india:fa.india.map(x=>x.you?{...x,name:(t==null?void 0:t.name)||"You",score:(t==null?void 0:t.coins)||0,streak:(t==null?void 0:t.currentStreak)||0}:x)};console.log("Debug - Player coins:",t==null?void 0:t.coins),console.log("Debug - Friends data:",r.friends[0]);const[s,a]=d.useState({days:2,hours:14,minutes:17}),[i,o]=d.useState("global"),l=r[i]||r.global;console.log("Player coins:",t==null?void 0:t.coins,"Current user score:",(m=l.find(x=>x.you))==null?void 0:m.score);const c=l.find(x=>x.you),u=l.slice(0,3),f=l.slice(3);d.useEffect(()=>{const x=N=>{N.preventDefault(),e(-1)};return window.addEventListener("popstate",x),()=>{window.removeEventListener("popstate",x)}},[e]),d.useEffect(()=>{const x=setInterval(()=>{a(N=>N.minutes>0?{...N,minutes:N.minutes-1}:N.hours>0?{...N,hours:N.hours-1,minutes:59}:N.days>0?{...N,days:N.days-1,hours:23,minutes:59}:N)},6e4);return()=>clearInterval(x)},[]);const p=x=>{const N=Math.max(...l.map(v=>v.score)),C=x/N*100;return C>=90?ma[0]:C>=70?ma[1]:C>=40?ma[2]:ma[3]};return n.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-5",children:[n.jsx("button",{onClick:()=>e("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),n.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",s.days,"d ",s.hours,"h ",s.minutes,"m"]})]}),n.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),n.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${p(c==null?void 0:c.score).color} p-4 text-center relative overflow-hidden`,children:[n.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),n.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),n.jsxs("div",{className:"relative z-10",children:[n.jsx("div",{className:"text-2xl mb-1",children:p(c==null?void 0:c.score).icon}),n.jsxs("div",{className:"text-sm font-bold text-white",children:[p(c==null?void 0:c.score).name," League"]}),n.jsx("div",{className:"text-xs text-white/80",children:i==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),n.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:fa.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(x=>n.jsxs("button",{onClick:()=>o(x.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${i===x.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[n.jsx("div",{children:x.label}),n.jsx("div",{className:`text-[10px] ${i===x.key?"text-black/70":"text-white/60"}`,children:x.count})]},x.key))}),n.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),n.jsxs("div",{children:[n.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),n.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[n.jsxs("span",{children:["Rank #",c==null?void 0:c.rank]}),n.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${c!=null&&c.trend.startsWith("+")?"bg-green-500/20 text-green-400":c!=null&&c.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:c==null?void 0:c.trend}),n.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",i==="global"?"Global":i==="friends"?"Friends":"India"]})]})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[c==null?void 0:c.score," ",os]}),n.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",c==null?void 0:c.streak," streak"]})]})]})}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),n.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),n.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),n.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),n.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),n.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[u[1]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ha,{src:u[1].avatar,fallback:u[1].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:pa(u[1].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[1].score," ",os]})]}),u[0]&&n.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ha,{src:u[0].avatar,fallback:u[0].name,size:72}),n.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:n.jsx(dv,{})}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),n.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:pa(u[0].name,8)}),n.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[u[0].score," ",os]}),n.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),u[2]&&n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsxs("div",{className:"relative mb-2",children:[n.jsx(ha,{src:u[2].avatar,fallback:u[2].name,size:56}),n.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),n.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:pa(u[2].name,8)}),n.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[u[2].score," ",os]})]})]})]})]}),f.length>0&&n.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[n.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[n.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),n.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),n.jsx("ul",{className:"space-y-1.5",children:f.map((x,N)=>n.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${x.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${N*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(uv,{n:x.rank,you:x.you}),n.jsx(ha,{src:x.avatar,fallback:x.name,size:36}),n.jsxs("div",{className:"flex flex-col leading-tight",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:"text-sm font-semibold",children:pa(x.name,12)}),n.jsx("span",{className:"text-xs",children:x.country}),x.friend&&n.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),n.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${x.you?"text-black/70":"text-white/60"}`,children:[n.jsx("span",{children:x.handle}),n.jsxs("span",{children:["🔥",x.streak]})]})]})]}),n.jsxs("div",{className:"flex flex-col items-end",children:[n.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[n.jsx("span",{children:x.score}),n.jsx("span",{className:x.you?"opacity-90":"opacity-80",children:os})]}),n.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${x.trend.startsWith("+")?"bg-green-500/20 text-green-400":x.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:x.trend})]})]},`${i}-${x.rank}`))})]}),c&&c.rank>1&&n.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[n.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),n.jsx("div",{className:"text-xs text-white/70 mb-3",children:i==="friends"&&c.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((b=l[c.rank-2])==null?void 0:b.score)||0)-c.score+1)} more coins to reach rank #${c.rank-1}`}),!(i==="friends"&&c.rank===1)&&n.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})}function ha({src:e,fallback:t,size:r=56}){const s=fv(t);return n.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:r,height:r},children:e?n.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):n.jsx("span",{className:"text-sm font-semibold",children:s})})}function dv(){return n.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[n.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[n.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),n.jsx("defs",{children:n.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),n.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),n.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function uv({n:e,you:t}){return n.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function pa(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function fv(e=""){var r;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((r=t[1])==null?void 0:r[0])||"")).toUpperCase()}const mv="qp_recent",hv="qp_review_snapshot",Od=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function pv(){const[e,t]=d.useState("quizzes"),[r,s]=d.useState(null),[a,i]=d.useState(!1),[o,l]=d.useState("all"),[c,u]=d.useState("all"),[f,p]=d.useState("date"),[m,b]=d.useState([]),[x,N]=d.useState(!0),C=He(),v=S=>{if(!S)return"00:00";const g=Math.floor(S/1e3),w=Math.floor(g/60),k=g%60;return`${String(w).padStart(2,"0")}:${String(k).padStart(2,"0")}`},h=S=>{if(!S)return"Unknown";const g=new Date(S),k=Math.floor((new Date-g)/(1e3*60*60*24));return k===0?"Today":k===1?"Yesterday":k<7?`${k} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][g.getMonth()]} ${g.getDate()}`};d.useEffect(()=>{let S=!1;N(!0);const g=P=>{try{return JSON.parse(P)}catch{return null}},w=P=>encodeURIComponent(String(P).trim().toLowerCase().replace(/\s+/g,"-")),k=P=>{var L,I,A,X;const M=Number(P.ts??P.timestamp??P.id)||Date.now(),Y=Number(P.ms)||0,ee=Number(P.total)||0,H=Number(P.correct)||0,$=String(P.mode||"").toLowerCase().includes("practice")?"practice":"quiz",R=((L=P.snapshot)==null?void 0:L.category)||((I=P.snapshot)==null?void 0:I.categoryLabel)||P.cat||P.category||"Unknown",_=((A=P.snapshot)==null?void 0:A.categoryParam)||w(R),F=String(((X=P.snapshot)==null?void 0:X.difficulty)||P.difficulty||"medium").toLowerCase();return{id:P.id??M,type:$,category:R,categoryParam:_,difficulty:F,score:H,total:ee,accuracy:ee?Math.round(H/ee*100):0,time:v(Y),ms:Y,date:h(M),timestamp:M,snapshot:P.snapshot??null,mode:P.mode||($==="practice"?"Practice":"Quiz")}};try{const P=localStorage.getItem(mv),M=P?g(P):null,ee=(Array.isArray(M)&&M.length?M:Od).map(k).filter(H=>H&&H.timestamp).sort((H,Q)=>Q.timestamp-H.timestamp);S||b(ee)}catch(P){console.error("Error loading history:",P),S||b(Od)}finally{S||N(!1)}return()=>{S=!0}},[]);const y=d.useMemo(()=>{const S=new Set(m.map(g=>g.category));return Array.from(S)},[m]),E=d.useMemo(()=>{let S=m.filter(g=>e==="quizzes"?g.type==="quiz":g.type==="practice");return o!=="all"&&(S=S.filter(g=>g.category===o)),c!=="all"&&(S=S.filter(g=>g.difficulty===c)),S.sort((g,w)=>f==="date"?w.timestamp-g.timestamp:f==="score"?w.accuracy-g.accuracy:f==="time"?g.ms-w.ms:0),S},[m,e,o,c,f]),j=d.useMemo(()=>{if(E.length===0)return null;const S=E.reduce((P,M)=>P+M.score,0),g=E.reduce((P,M)=>P+M.total,0),w=g?Math.round(S/g*100):0,k=E.reduce((P,M)=>P+M.ms,0);return{count:E.length,avgAccuracy:w,totalTime:v(k),bestScore:Math.max(...E.map(P=>P.accuracy))}},[E]),T=S=>S>=80?"text-green-400":S>=60?"text-blue-400":S>=40?"text-yellow-400":"text-red-400";return x?n.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:n.jsx("div",{className:"text-white",children:"Loading history..."})}):n.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[n.jsx("div",{className:"",children:n.jsxs("div",{className:"px-4 pt-4 pb-4",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("button",{onClick:()=>C("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),n.jsx("button",{onClick:()=>i(!a),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:n.jsx(vv,{})})]}),n.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),n.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),n.jsxs("div",{className:"px-4 pb-20",children:[n.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:n.jsx("div",{className:"flex items-center",children:n.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(S=>n.jsxs("button",{onClick:()=>t(S.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===S.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[n.jsx("span",{className:"mr-1",children:S.icon}),S.label]},S.value))})})}),j&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[n.jsx(xa,{label:"Total",value:j.count}),n.jsx(xa,{label:"Avg Score",value:`${j.avgAccuracy}%`,color:T(j.avgAccuracy)}),n.jsx(xa,{label:"Best Score",value:`${j.bestScore}%`,color:"text-green-400"}),n.jsx(xa,{label:"Total Time",value:j.totalTime})]})}),a&&n.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),n.jsxs("select",{value:o,onChange:S=>l(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All Categories"}),y.map(S=>n.jsx("option",{value:S,children:S},S))]})]}),n.jsxs("div",{className:"flex gap-2",children:[n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),n.jsxs("select",{value:c,onChange:S=>u(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"all",children:"All"}),n.jsx("option",{value:"easy",children:"Easy"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"hard",children:"Hard"})]})]}),n.jsxs("div",{className:"flex-1",children:[n.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),n.jsxs("select",{value:f,onChange:S=>p(S.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[n.jsx("option",{value:"date",children:"Date"}),n.jsx("option",{value:"score",children:"Score"}),n.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),E.length===0?n.jsxs("div",{className:"text-center py-12",children:[n.jsx("div",{className:"text-4xl mb-3",children:"📚"}),n.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),n.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):n.jsx("div",{className:"space-y-3",children:E.map((S,g)=>n.jsx(xv,{item:S,index:g,onClick:()=>s(S)},S.id))})]}),r&&n.jsx(gv,{item:r,onClose:()=>s(null)})]})}function xa({label:e,value:t,color:r="text-white"}){return n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),n.jsx("div",{className:`text-lg font-bold ${r}`,children:t})]})}function xv({item:e,index:t,onClick:r}){const s=o=>o>=80?"from-green-500/20 to-green-600/10 border-green-500/30":o>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":o>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",i=(o=>{const l=o==null?void 0:o.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return n.jsxs("div",{onClick:r,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${s(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[n.jsxs("div",{className:"flex items-start justify-between mb-3",children:[n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[n.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),n.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${i.bg} ${i.text} ${i.border} border`,children:e.difficulty}),n.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),n.jsxs("div",{className:"text-right",children:[n.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),n.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),n.jsxs("div",{className:"flex items-center justify-between text-xs",children:[n.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[n.jsxs("span",{children:["⏱ ",e.time]}),n.jsx("span",{children:e.mode})]}),n.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function gv({item:e,onClose:t}){const r=He();return d.useEffect(()=>{const s=a=>{a.key==="Escape"&&t()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t]),n.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:n.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),n.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Category"}),n.jsx("span",{className:"text-white font-medium",children:e.category})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Difficulty"}),n.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Score"}),n.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("span",{className:"text-white/60",children:"Accuracy"}),n.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsx("span",{className:"text-white/60",children:"Time"}),n.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&n.jsx("button",{onClick:()=>{t(),localStorage.setItem(hv,JSON.stringify(e.snapshot)),r(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),n.jsx("button",{onClick:()=>{var s;t(),r(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((s=e.snapshot)==null?void 0:s.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function vv(){return n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const yv=d.createContext({});function Em(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const bv=typeof window<"u",wv=bv?d.useLayoutEffect:d.useEffect,Rm=d.createContext(null);function jv(e){return typeof e=="object"&&e!==null}function Nv(e){return jv(e)&&"offsetHeight"in e}const kv=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Sv extends d.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=r.offsetParent,a=Nv(s)&&s.offsetWidth||0,i=this.props.sizeRef.current;i.height=r.offsetHeight||0,i.width=r.offsetWidth||0,i.top=r.offsetTop,i.left=r.offsetLeft,i.right=a-i.width-i.left}return null}componentDidUpdate(){}render(){return this.props.children}}function Cv({children:e,isPresent:t,anchorX:r,root:s}){const a=d.useId(),i=d.useRef(null),o=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(kv);return d.useInsertionEffect(()=>{const{width:c,height:u,top:f,left:p,right:m}=o.current;if(t||!i.current||!c||!u)return;const b=r==="left"?`left: ${p}`:`right: ${m}`;i.current.dataset.motionPopId=a;const x=document.createElement("style");l&&(x.nonce=l);const N=s??document.head;return N.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${b}px !important;
            top: ${f}px !important;
          }
        `),()=>{N.contains(x)&&N.removeChild(x)}},[t]),n.jsx(Sv,{isPresent:t,childRef:i,sizeRef:o,children:d.cloneElement(e,{ref:i})})}const Ev=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:a,presenceAffectsLayout:i,mode:o,anchorX:l,root:c})=>{const u=Em(Rv),f=d.useId();let p=!0,m=d.useMemo(()=>(p=!1,{id:f,initial:t,isPresent:r,custom:a,onExitComplete:b=>{u.set(b,!0);for(const x of u.values())if(!x)return;s&&s()},register:b=>(u.set(b,!1),()=>u.delete(b))}),[r,u,s]);return i&&p&&(m={...m}),d.useMemo(()=>{u.forEach((b,x)=>u.set(x,!1))},[r]),d.useEffect(()=>{!r&&!u.size&&s&&s()},[r]),o==="popLayout"&&(e=n.jsx(Cv,{isPresent:r,anchorX:l,root:c,children:e})),n.jsx(Rm.Provider,{value:m,children:e})};function Rv(){return new Map}function Tv(e=!0){const t=d.useContext(Rm);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:a}=t,i=d.useId();d.useEffect(()=>{if(e)return a(i)},[e]);const o=d.useCallback(()=>e&&s&&s(i),[i,s,e]);return!r&&s?[!1,o]:[!0]}const ga=e=>e.key||"";function $d(e){const t=[];return d.Children.forEach(e,r=>{d.isValidElement(r)&&t.push(r)}),t}const ro=({children:e,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:i="sync",propagate:o=!1,anchorX:l="left",root:c})=>{const[u,f]=Tv(o),p=d.useMemo(()=>$d(e),[e]),m=o&&!u?[]:p.map(ga),b=d.useRef(!0),x=d.useRef(p),N=Em(()=>new Map),[C,v]=d.useState(p),[h,y]=d.useState(p);wv(()=>{b.current=!1,x.current=p;for(let T=0;T<h.length;T++){const S=ga(h[T]);m.includes(S)?N.delete(S):N.get(S)!==!0&&N.set(S,!1)}},[h,m.length,m.join("-")]);const E=[];if(p!==C){let T=[...p];for(let S=0;S<h.length;S++){const g=h[S],w=ga(g);m.includes(w)||(T.splice(S,0,g),E.push(g))}return i==="wait"&&E.length&&(T=E),y($d(T)),v(p),null}const{forceRender:j}=d.useContext(yv);return n.jsx(n.Fragment,{children:h.map(T=>{const S=ga(T),g=o&&!u?!1:p===h||m.includes(S),w=()=>{if(N.has(S))N.set(S,!0);else return;let k=!0;N.forEach(P=>{P||(k=!1)}),k&&(j==null||j(),y(x.current),o&&(f==null||f()),s&&s())};return n.jsx(Ev,{isPresent:g,initial:!b.current||r?void 0:!1,custom:t,presenceAffectsLayout:a,mode:i,root:c,onExitComplete:g?void 0:w,anchorX:l,children:T},S)})})},Pv=()=>{const e=He(),[t,r]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const W=sessionStorage.getItem("navigationSource");W&&r(W)}},[]);const s=W=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=W)},a=()=>{e(-1)},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},{player:l,addCoins:c}=jn(),[u,f]=d.useState(4),[p,m]=d.useState((l==null?void 0:l.coins)||0),[b,x]=d.useState(4),[N,C]=d.useState(!1),[v,h]=d.useState(!1),[y,E]=d.useState(0),[j,T]=d.useState(0),[S,g]=d.useState("cycle"),[w,k]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[P,M]=d.useState([0,1,2,3]),[Y,ee]=d.useState(!1),[H,Q]=d.useState(!1),[$,R]=d.useState(null),[_,F]=d.useState(null),[L,I]=d.useState(!1),[A,X]=d.useState(null),[ne,re]=d.useState(!1),U=d.useRef(null),D=d.useRef(null),K=d.useRef(null);d.useEffect(()=>{U.current=new Audio("/sounds/reward.mp3"),D.current=new Audio("/sounds/reward_progress.mp3"),[U,D].forEach(W=>{var O;(O=W.current)==null||O.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const z=W=>{try{W.current&&(W.current.currentTime=0,W.current.play().catch(O=>console.log("Audio play failed:",O)))}catch(O){console.log("Sound play error:",O)}},B=(W,O)=>{if(W>u){F(O),Q(!0);return}W===u&&ae(W,O)},Z=W=>{var te;const O=(te=K.current)==null?void 0:te.querySelector(`[data-index="${W}"]`);if(O){const de=O.getBoundingClientRect(),je=window.pageYOffset||document.documentElement.scrollTop,Le=de.top+je-window.innerHeight/2+50;window.scrollTo({top:Le,behavior:"smooth"})}},ae=(W,O)=>{if(!P.includes(W)){if(O.cost>0&&p<O.cost){F(O),Q(!0);return}O.cost>0&&(m(te=>te-O.cost),c(-O.cost)),z(U),ee(!0),F(O),M(te=>[...te,W]),setTimeout(()=>{ee(!1),O.type==="coins"?(E(O.value),C(!0),setTimeout(()=>{m(te=>te+O.value),c(O.value),setTimeout(()=>{C(!1),E(0)},500)},300)):O.type==="life"?(T(O.value),h(!0),setTimeout(()=>{x(te=>te+O.value),setTimeout(()=>{h(!1),T(0)},500)},300)):(X({icon:O.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{X(null),re(!0),ce(O),O.type==="vehicle"&&g(O.value),setTimeout(()=>{re(!1)},500)},800)),setTimeout(()=>{if(u<i.length-1){const te=u+1;Z(te),setTimeout(()=>{I(!0),z(D),f(te),setTimeout(()=>{I(!1)},500)},300)}},1200)},1500)}},ce=W=>{k(O=>O.find(de=>de.icon===W.icon)?O.map(de=>de.icon===W.icon?{...de,count:de.count+1}:de):[...O,{type:W.type,icon:W.icon,name:W.label,count:1}])},q=W=>30+W*100,G=()=>30+u*100;return n.jsxs("div",{className:"rewards-page",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsx("div",{className:"non-sticky-header",children:n.jsx("button",{className:"back-button",onClick:a,children:"← Back"})}),n.jsxs("div",{className:"sticky-section",children:[n.jsxs("div",{className:"header-wrapper",children:[n.jsxs("div",{className:"title-row",children:[n.jsxs("div",{children:[n.jsx("h1",{className:"title",children:"Rewards"}),n.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),n.jsx("button",{className:"play-quiz-btn",onClick:()=>s("/play"),children:"Play Quiz"})]}),n.jsx("div",{className:"balance-row",children:n.jsx("div",{className:"balance-item",children:n.jsxs("div",{children:[n.jsx("div",{className:"balance-label",children:"Balance"}),n.jsxs("div",{className:`balance-value ${N?"animating":""}`,children:[p.toLocaleString()," 🪙",N&&n.jsxs("span",{className:"value-change",children:["+",y]})]})]})})})]}),n.jsx("div",{className:"stats-cards-container",children:n.jsxs("div",{className:"info-grid",children:[n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"❤️"}),n.jsxs("div",{className:`info-value ${v?"animating":""}`,children:[b,v&&n.jsxs("span",{className:"value-change",children:["+",j]})]}),n.jsx("div",{className:"info-label",children:"Lives"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:"⭐"}),n.jsx("div",{className:"info-value",children:"5"}),n.jsx("div",{className:"info-label",children:"Level"})]}),n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:o[S].icon}),n.jsx("div",{className:"info-value",children:o[S].name}),n.jsx("div",{className:"info-label",children:"Vehicle"})]}),n.jsxs("div",{className:`cards-section ${ne?"animating":""}`,children:[n.jsx("div",{className:"cards-label",children:"Your Cards"}),n.jsx("div",{className:"card-grid",children:w.map((W,O)=>n.jsxs("div",{className:"card-item",onClick:()=>R(W),children:[n.jsxs("div",{className:"large-card",children:[n.jsx("div",{className:"large-card-icon",children:W.icon}),n.jsx("div",{className:"large-card-name",children:W.name})]}),W.count>1&&n.jsx("div",{className:"card-count-badge",children:W.count})]},O))})]})]})})]}),n.jsx("div",{className:"scrollable-journey",children:n.jsx("div",{className:"journey-container",ref:K,children:n.jsxs("div",{className:"journey-track",children:[n.jsx("div",{className:"curvy-road",children:n.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[n.jsx("defs",{children:n.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[n.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),n.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),n.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),n.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-u/(i.length-1)*1500})]})}),n.jsxs("div",{className:"avatar-tracker",style:{top:`${G()}px`},children:[n.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:W=>{W.target.style.display="none"}}),n.jsx("div",{className:"tracker-vehicle",children:o[S].icon})]}),n.jsx("div",{className:"rewards-list",children:i.map((W,O)=>{const te=O%2===0,de=O>u,je=P.includes(O),Le=O===u;return n.jsx("div",{className:"reward-row","data-index":O,style:{top:`${q(O)}px`},children:n.jsxs("div",{className:`reward-item ${te?"left":"right"}`,children:[n.jsxs("div",{className:`checkpoint ${Le?"current":je?"claimed":de?"locked":""}`,onClick:()=>B(O,W),children:[n.jsx("div",{className:"checkpoint-icon",children:W.icon}),n.jsx("div",{className:"checkpoint-value",children:W.label.split(" ")[0]}),W.milestone&&n.jsx("div",{className:"milestone-badge",children:"BONUS"}),de&&n.jsx("div",{className:"lock-icon",children:"🔒"})]}),n.jsxs("div",{className:"reward-info",children:[n.jsx("div",{className:"reward-name",children:W.label}),n.jsxs("div",{className:"step-label",children:["Step ",O+1]})]})]})},W.id)})})]})})}),A&&n.jsx("div",{className:"flying-card",style:{left:`${A.startX}px`,top:`${A.startY}px`,"--startX":`${A.startX}px`},children:A.icon}),n.jsx(ro,{children:$&&n.jsx("div",{className:"claim-overlay",onClick:()=>R(null),children:n.jsxs("div",{className:"modal",onClick:W=>W.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:$.icon}),n.jsx("div",{className:"card-detail-name",children:$.name}),n.jsxs("div",{className:"card-detail-desc",children:["You have ",$.count," of these cards"]}),n.jsx("div",{className:"modal-buttons",children:n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>R(null),children:"Close"})})]})})}),n.jsx(ro,{children:Y&&_&&n.jsx("div",{className:"claim-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("div",{className:"modal-title",children:"WELL DONE!"}),n.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),n.jsx("div",{className:"modal-icon",children:_.icon}),n.jsxs("div",{className:"modal-value",children:["+",_.value," ",_.type==="coins"?"Coins":_.type==="life"?"Lives":_.label]})]})})}),n.jsx(ro,{children:H&&_&&n.jsx("div",{className:"claim-overlay",onClick:()=>Q(!1),children:n.jsxs("div",{className:"modal",onClick:W=>W.stopPropagation(),children:[n.jsx("div",{className:"modal-icon",children:"🪙"}),n.jsx("div",{className:"modal-title",children:"Need More Coins"}),n.jsx("div",{className:"modal-subtitle",children:_.cost>0?`You need ${_.cost-p} more coins`:"Complete previous rewards first"}),n.jsxs("div",{className:"modal-buttons",children:[n.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>s("/play"),children:"Play Quiz"}),n.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>Q(!1),children:"Cancel"})]})]})})})]})},va=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function _v(){const[e,t]=d.useState(null),r=va.filter(a=>a.unlocked).length,s=Math.round(r/va.length*100);return n.jsxs("div",{className:"badges-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Badge Collection"}),n.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),n.jsxs("div",{className:"progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Collection Progress"}),n.jsxs("span",{className:"progress-value",children:[r,"/",va.length]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${s}%`}})})]}),n.jsx("div",{className:"badges-grid",children:va.map(a=>n.jsxs("div",{className:`badge-card ${a.unlocked?"unlocked":""}`,style:{"--badge-color":a.color},onClick:()=>t(a),children:[n.jsx("div",{className:"badge-glow"}),n.jsx("div",{className:"badge-emoji",children:a.emoji}),n.jsx("div",{className:"badge-name",children:a.name}),!a.unlocked&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"badge-progress",children:n.jsx("div",{className:"badge-progress-fill",style:{width:`${a.progress}%`}})}),n.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},a.id))}),n.jsxs("div",{className:"tips-card",children:[n.jsxs("div",{className:"tips-title",children:[n.jsx("span",{children:"💡"}),n.jsx("span",{children:"Pro Tip"})]}),n.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&n.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:n.jsxs("div",{className:"modal-content",onClick:a=>a.stopPropagation(),children:[n.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),n.jsx("h3",{className:"modal-title",children:e.name}),n.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),n.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&n.jsxs("div",{className:"modal-progress-section",children:[n.jsx("div",{className:"modal-progress-label",children:"Progress"}),n.jsx("div",{className:"modal-progress-bar",children:n.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),n.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),n.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const Lv=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function Av(){const{player:e,addCoins:t}=jn(),[r,s]=d.useState(Lv),[a,i]=d.useState(null),[o,l]=d.useState((e==null?void 0:e.coins)||0),[c,u]=d.useState(!1),[f,p]=d.useState([]),m=r.length,b=r.filter(C=>C.current>=C.target).length,x=Math.round(b/m*100);d.useEffect(()=>{const C=setInterval(()=>{p(v=>{const h={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...v.slice(-4),h]})},3e3);return()=>clearInterval(C)},[]);const N=(C,v)=>{i(C),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{s(h=>h.map(y=>y.id===C?{...y,claimed:!0}:y)),l(h=>h+v),i(null),u(!0),setTimeout(()=>u(!1),2e3)},600)};return n.jsxs("div",{className:"achievements-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"floating-shapes",children:[n.jsx("div",{className:"shape shape-1"}),n.jsx("div",{className:"shape shape-2"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),n.jsxs("div",{className:"coins-display",children:["🪙 ",o.toLocaleString()]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),n.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),n.jsxs("div",{className:"progress-overview",children:[n.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),n.jsxs("div",{className:"overview-header",children:[n.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),n.jsxs("div",{className:"overview-stats",children:[n.jsx("span",{className:"trophy-icon",children:"🏆"}),n.jsxs("span",{className:"overview-value",children:[b,"/",m]})]})]}),n.jsx("div",{className:"progress-bar-main",children:n.jsx("div",{className:"progress-fill-main",style:{width:`${x}%`}})})]}),n.jsx("div",{className:"achievements-list",children:r.map(C=>{const v=Math.min(100,Math.round(C.current/C.target*100)),h=v===100,y=C.color+"CC";return n.jsxs("div",{className:`achievement-card ${h?"completed":""}`,style:{"--card-color":C.color,"--card-color-dark":y},children:[n.jsx("div",{className:"card-glow"}),h&&C.claimed&&n.jsx("div",{className:"completed-badge",children:"✓"}),n.jsxs("div",{className:"card-content",children:[n.jsx("div",{className:"achievement-icon",children:C.icon}),n.jsxs("div",{className:"achievement-details",children:[n.jsx("div",{className:"achievement-title",children:C.title}),n.jsx("div",{className:"achievement-subtitle",children:C.subtitle}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill",style:{width:`${v}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{children:[C.current,"/",C.target]}),n.jsxs("span",{className:"reward-badge",children:["🪙 ",C.reward]})]})]})]}),n.jsx("button",{onClick:()=>N(C.id,C.reward),disabled:!h||C.claimed,className:`claim-button ${C.claimed?"claimed":h?"can-claim":"in-progress"} ${a===C.id?"claiming":""}`,children:C.claimed?"✓":h?"CLAIM!":`${v}%`})]})]},C.id)})}),c&&n.jsx("div",{className:"celebration",children:"🎉"})]})}function Iv(){const{player:e,addCoins:t,updateDailyStreak:r}=jn(),s=(e==null?void 0:e.currentStreak)||0,a=(e==null?void 0:e.bestStreak)||0,i=(e==null?void 0:e.totalDays)||0,o=(e==null?void 0:e.coins)||0,l=He(),c=new Date,u=c.getDay(),f=()=>{const L=new Date(c);return L.setDate(c.getDate()-c.getDay()),L.toISOString().split("T")[0]},[p,m]=d.useState(null),[b,x]=d.useState(!1),[N,C]=d.useState(null),[v,h]=d.useState(null),[y,E]=d.useState(!1),j=d.useRef(null),T=d.useRef(null),[S]=zt("/sounds/coin.mp3",{volume:.75}),[g]=zt("/sounds/correct.mp3",{volume:.6}),[w,k]=d.useState(()=>{const L=localStorage.getItem("streaks_claimed")||"[]",I=JSON.parse(L),A=f(),X=I.filter(ne=>ne!==`week_${A}_day_0`);return localStorage.setItem("streaks_claimed",JSON.stringify(X)),X});d.useEffect(()=>{const L=()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0;const A=document.querySelector("main");A&&(A.scrollTop=0)};L(),requestAnimationFrame(L);const I=setTimeout(L,100);return()=>clearTimeout(I)},[]),d.useEffect(()=>{E(!0),setTimeout(()=>E(!1),3e3)},[]);const P=[{label:"Mon",short:"M",dayIndex:1},{label:"Tue",short:"T",dayIndex:2},{label:"Wed",short:"W",dayIndex:3},{label:"Thu",short:"T",dayIndex:4},{label:"Fri",short:"F",dayIndex:5},{label:"Sat",short:"S",dayIndex:6},{label:"Sun",short:"S",dayIndex:0}],M=[{day:0,reward:"10",type:"coins",icon:"🎯",label:"Welcome Bonus"},{day:1,reward:"50",type:"coins",icon:"🪙",label:"50 Coins"},{day:2,reward:"100",type:"coins",icon:"🪙",label:"100 Coins"},{day:3,reward:"2x",type:"xp",icon:"⭐",label:"2x XP Boost"},{day:4,reward:"150",type:"coins",icon:"🪙",label:"150 Coins"},{day:5,reward:"Full",type:"energy",icon:"⚡",label:"Energy Refill"},{day:6,reward:"200",type:"coins",icon:"🪙",label:"200 Coins"},{day:7,reward:"Mystery",type:"mystery",icon:"🎁",label:"Mystery Box"}],Y=L=>{const I=w.includes(`week_${f()}_day_${L}`);if(L===0)return{isCompleted:!0,isClaimed:I,canClaim:!I,isLocked:!1};const A=s>=L,X=A&&!I,ne=s<L;return{isCompleted:A,isClaimed:I,canClaim:X,isLocked:ne}},ee=(L,I,A)=>{const X=Y(I);if(X.isLocked){h({day:I,currentStreak:s}),setTimeout(()=>h(null),2e3);return}X.isClaimed||X.canClaim&&(m({...L,day:I}),x(!1),setTimeout(()=>{x(!0),g(),setTimeout(()=>{if(L.type==="coins"){const U=parseInt(L.reward);if(T.current&&j.current){const D=T.current.getBoundingClientRect();S(),C({startRect:D,count:10,amount:U})}}const ne=`week_${f()}_day_${I}`,re=[...w,ne];k(re),localStorage.setItem("streaks_claimed",JSON.stringify(re))},500),setTimeout(()=>{m(null),x(!1)},2500)},500))},H=(L,I)=>{const A=I+1,X=P[I].dayIndex===u;return s>=A?X?"today-completed":"completed":X?"today-pending":A<=s+1?"pending":"future"},Q=[{days:3,emoji:"⚡",label:"Starter",achieved:s>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:s>=7},{days:30,emoji:"💎",label:"Champion",achieved:s>=30},{days:100,emoji:"👑",label:"Legend",achieved:s>=100}],$=Q.find(L=>L.days>s)||Q[Q.length-1],R=Math.min(100,s/$.days*100),_=()=>{window.location.href="/play"},F=()=>{l(-1)};return n.jsxs("div",{className:"streaks-screen",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),N&&n.jsx(Si,{startRect:N.startRect,targetRef:j,count:N.count,onDone:()=>{t(N.amount),C(null)}}),n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-top",children:[n.jsx("button",{className:"back-button",onClick:F,children:"← Back"}),n.jsxs("div",{className:"coin-pill",ref:j,id:"coin-pill",children:[n.jsx("span",{className:"coin-icon",children:"🪙"}),n.jsx("span",{className:"coin-amount",children:o})]})]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"STREAKS"}),n.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),n.jsxs("div",{className:"streak-hero",children:[n.jsx("div",{className:"fire-animation",children:"🔥"}),n.jsx("div",{className:"streak-number",children:s}),n.jsx("div",{className:"streak-label",children:"DAY STREAK"}),n.jsxs("div",{className:"stats-row",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:a}),n.jsx("div",{className:"stat-label",children:"Best Streak"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-value",children:i}),n.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),n.jsxs("div",{className:"weekly-progress-card",children:[n.jsxs("div",{className:"weekly-header",children:[n.jsx("div",{className:"weekly-title",children:"This Week's Progress"}),n.jsxs("div",{className:"weekly-counter",children:[n.jsx("span",{className:"weekly-counter-icon",children:"🔥"}),n.jsxs("span",{className:"weekly-counter-text",children:[Math.min(s,7),"/7"]})]})]}),n.jsx("div",{className:"weekly-days",children:P.map((L,I)=>{const A=H(L.dayIndex,I),X=L.dayIndex===u;return n.jsxs("div",{className:"day-item",children:[n.jsx("div",{className:`day-circle ${A}`,children:A==="completed"||A==="today-completed"?"":L.short}),n.jsx("div",{className:`day-label ${X?"today":""}`,children:L.label})]},I)})}),n.jsx("div",{className:"milestone-header",children:"Daily Rewards"}),n.jsx("div",{className:"rewards-grid",children:M.map((L,I)=>{const A=Y(L.day);return n.jsxs("div",{className:`reward-item ${A.isLocked?"locked":A.canClaim?"can-claim":A.isClaimed?"completed":""}`,onClick:X=>ee(L,L.day),children:[n.jsxs("div",{className:"reward-day",children:["Day ",L.day]}),n.jsx("div",{className:"reward-icon",children:L.icon}),n.jsx("div",{className:"reward-text",children:L.label})]},I)})})]}),n.jsxs("div",{className:"milestone-section",children:[n.jsx("div",{className:"milestone-header",children:"Next Milestone"}),n.jsxs("div",{className:"milestone-progress",children:[n.jsxs("div",{className:"milestone-info",children:[n.jsxs("div",{className:"milestone-current",children:[n.jsx("span",{className:"milestone-emoji",children:$.emoji}),n.jsx("span",{className:"milestone-text",children:$.label})]}),n.jsxs("span",{className:"milestone-target",children:[s,"/",$.days," days"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${R}%`}})})]})]}),n.jsx("div",{className:"motivational-text",children:s===0?"Start your journey! Claim your Day 0 bonus and complete a quiz!":`Day ${s} strong! Keep going to unlock more rewards!`}),n.jsxs("button",{className:"play-button",onClick:_,children:[n.jsx("span",{children:"Continue Streak"}),n.jsx("span",{children:"→"})]}),v&&n.jsxs("div",{className:"locked-message",children:[n.jsx("span",{className:"locked-message-icon",children:"🔒"}),n.jsx("span",{className:"locked-message-text",children:v.day===1&&v.currentStreak===0?"Complete your first quiz to unlock this reward!":`Reach Day ${v.day} streak to unlock this reward!`})]}),p&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"modal-overlay"}),n.jsx("div",{className:"reward-modal",ref:T,children:n.jsxs("div",{className:"gift-box",children:[n.jsxs("div",{className:"gift-box-body",children:[n.jsx("div",{className:"gift-box-ribbon"}),n.jsx("div",{className:"gift-box-ribbon-horizontal"})]}),n.jsx("div",{className:`gift-box-lid ${b?"opening":""}`,children:n.jsx("div",{className:"gift-box-bow",children:"🎀"})}),n.jsxs("div",{className:`gift-content ${b?"show":""}`,children:[n.jsx("div",{className:"gift-content-icon",children:p.icon}),n.jsxs("div",{className:"gift-content-title",children:["Day ",p.day]}),n.jsx("div",{className:"gift-content-desc",children:p.label})]})]})})]}),y&&n.jsx("div",{className:"celebration",children:"🎉"})]})}const Dv=()=>{const e=new Date;return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`},nl=()=>{const e=localStorage.getItem("questProgress");return e?JSON.parse(e):{}},Bd=(e,t)=>{const r=nl();r[e]=t,r.date=Dv(),localStorage.setItem("questProgress",JSON.stringify(r))};function Mv(){const{player:e,addCoins:t}=jn(),r=He(),s=bt(),a=nl(),[i,o]=d.useState([{id:1,title:"Play 3 quizzes today",progress:a.dailyQuizzes||0,target:3,reward:60,claimed:a.dailyQuizzesClaimed||!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy",questType:"dailyQuizzes",route:"/quiz/play",routeParams:"?category=random&difficulty=random&from=quest"},{id:3,title:"Practice 15 questions",progress:a.practiceQuestions||0,target:15,reward:100,claimed:a.practiceQuestionsClaimed||!1,icon:"📚",color:"#FFD93D",difficulty:"Easy",questType:"practiceQuestions",route:"/practice/start",routeParams:"?questions=15&difficulty=easy&category=random&from=quest"},{id:4,title:"Win 5 in a row",progress:a.winStreak||0,target:5,reward:150,claimed:a.winStreakClaimed||!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard",questType:"winStreak",route:"/play",routeParams:"?mode=survival&from=quest"},{id:5,title:"Complete a speed run",progress:a.speedRun||0,target:1,reward:120,claimed:a.speedRunClaimed||!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium",questType:"speedRun",route:"/swipe/random-mix",routeParams:"?from=quest"}]),[l,c]=d.useState((e==null?void 0:e.coins)||0),[u,f]=d.useState(null),[p,m]=d.useState(0),b=d.useRef(null),[x,N]=d.useState(null);d.useEffect(()=>{const j=()=>{const S=nl();o(g=>g.map(w=>{const k=w.questType;return S[k]!==void 0?{...w,progress:S[k]}:w}))};window.addEventListener("storage",j);const T=()=>j();return window.addEventListener("focus",T),()=>{window.removeEventListener("storage",j),window.removeEventListener("focus",T)}},[]),d.useEffect(()=>{const j=S=>{console.log("Quest progress update received:",S.detail),o(g=>g.map(w=>w.questType==="practiceQuestions"&&S.detail.practiceQuestions?{...w,progress:S.detail.practiceQuestions}:w))};window.addEventListener("questProgressUpdate",j);const T=setInterval(()=>{try{const S=localStorage.getItem("questProgress");if(S){const g=JSON.parse(S);o(w=>w.map(k=>k.questType==="practiceQuestions"&&g.practiceQuestions&&k.progress!==g.practiceQuestions?{...k,progress:g.practiceQuestions}:k))}}catch(S){console.error("Error checking progress:",S)}},1e3);return()=>{window.removeEventListener("questProgressUpdate",j),clearInterval(T)}},[]),d.useEffect(()=>{var j;if((j=s.state)!=null&&j.questCompleted){const{questType:T,increment:S}=s.state;o(g=>g.map(w=>{if(w.questType===T){const k=Math.min(w.progress+(S||1),w.target);return Bd(T,k),{...w,progress:k}}return w})),window.history.replaceState({},document.title)}},[s]),d.useEffect(()=>{const j=i.filter(T=>T.progress>=T.target).length;m(Math.round(j/i.length*100))},[i]),d.useEffect(()=>{c((e==null?void 0:e.coins)||0)},[e==null?void 0:e.coins]);const C=j=>{navigator.vibrate&&navigator.vibrate([20]),sessionStorage.setItem("activeQuest",JSON.stringify({id:j.id,type:j.questType,title:j.title,currentProgress:j.progress,target:j.target})),r(j.route+j.routeParams)},v=()=>{sessionStorage.getItem("questsFromHome")==="true"?(sessionStorage.removeItem("questsFromHome"),r("/")):r("/profile")},h=j=>{navigator.vibrate&&navigator.vibrate([20,10,20]);try{const T=new Audio("/sounds/coin.mp3");T.volume=.75,T.play()}catch{console.log("Sound not available")}f(j.id),N({startRect:{left:window.innerWidth/2-50,top:window.innerHeight/2,width:100,height:100},count:Math.min(j.reward/10,10),amount:j.reward}),setTimeout(()=>{o(T=>T.map(S=>S.id===j.id?(Bd(S.questType+"Claimed",!0),{...S,claimed:!0}):S)),f(null)},600)},y=j=>{switch(j){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},E=()=>{const j=new Date,T=new Date(j);T.setDate(T.getDate()+1),T.setHours(5,0,0,0);const S=T-j,g=Math.floor(S/(1e3*60*60)),w=Math.floor(S%(1e3*60*60)/(1e3*60));return`${g}h ${w}m`};return n.jsxs("div",{className:"quests-screen",children:[x&&n.jsx(Si,{startRect:x.startRect,targetRef:b,count:x.count,onDone:()=>{c(j=>j+x.amount),t(x.amount),N(null)}}),n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"animated-bg",children:[n.jsx("div",{className:"floating-icon",children:"🎮"}),n.jsx("div",{className:"floating-icon",children:"🎯"}),n.jsx("div",{className:"floating-icon",children:"🏆"}),n.jsx("div",{className:"floating-icon",children:"⭐"})]}),n.jsxs("div",{className:"header",children:[n.jsx("button",{className:"back-button",onClick:v,children:"← Back"}),n.jsxs("div",{className:"coins-display",ref:b,children:["🪙 ",l]}),n.jsxs("div",{className:"title-section",children:[n.jsx("h1",{className:"main-title",children:"Daily Quests"}),n.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),n.jsxs("div",{className:"daily-progress-card",children:[n.jsxs("div",{className:"progress-header",children:[n.jsx("span",{className:"progress-label",children:"Today's Progress"}),n.jsxs("span",{className:"progress-value",children:[p,"%"]})]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${p}%`}})})]}),n.jsx("div",{className:"quests-list",children:i.map(j=>{const T=Math.min(100,Math.round(j.progress/j.target*100)),S=T===100,g=j.color+"CC";return n.jsxs("div",{className:`quest-card ${S?"completed":""}`,style:{"--quest-color":j.color,"--quest-color-dark":g},children:[n.jsx("div",{className:"quest-accent"}),S&&j.claimed&&n.jsx("div",{className:"completed-checkmark",children:"✓"}),n.jsxs("div",{className:"quest-content",children:[n.jsx("div",{className:`quest-icon-container ${u===j.id?"animating":""}`,children:j.icon}),n.jsxs("div",{className:"quest-details",children:[n.jsxs("div",{className:"quest-header",children:[n.jsx("span",{className:"quest-title",children:j.title}),n.jsx("span",{className:"difficulty-badge",style:{background:`${y(j.difficulty)}20`,color:y(j.difficulty)},children:j.difficulty})]}),n.jsxs("div",{className:"progress-info",children:[n.jsx("div",{className:"mini-progress-bar",children:n.jsx("div",{className:"mini-progress-fill",style:{width:`${T}%`}})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("span",{className:"progress-numbers",children:[j.progress,"/",j.target]}),n.jsxs("span",{className:"reward-display",children:["🪙 ",j.reward]})]})]})]}),n.jsx("button",{onClick:()=>{S&&!j.claimed?h(j):S||C(j)},disabled:j.claimed,className:`action-button ${j.claimed?"claimed":S?"can-claim":"in-progress"}`,style:!S&&!j.claimed?{"--quest-color":j.color,"--quest-color-dark":g}:{},children:j.claimed?"✓":S?"Claim":"Do it"})]})]},j.id)})}),n.jsxs("div",{className:"timer-card",children:[n.jsx("div",{className:"timer-icon",children:"⏰"}),n.jsx("div",{className:"timer-label",children:"New Quests In"}),n.jsx("div",{className:"timer-value",children:E()})]}),u&&n.jsx("div",{className:"reward-animation",children:"🪙"})]})}function zv({title:e,subtitle:t,children:r}){const s=He();return n.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:()=>s(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),n.jsxs("div",{className:"text-center",children:[n.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&n.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),n.jsx("div",{className:"w-[68px]"})]}),r]})}function Fv(){const e=He(),[t,r]=d.useState(!0),[s,a]=d.useState(!0),[i,o]=d.useState(!0);return n.jsxs(zv,{title:"Settings",subtitle:"Make it yours",children:[n.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[n.jsx(ls,{label:"Sound",right:n.jsx(so,{on:t,set:r})}),n.jsx(ls,{label:"Haptics",right:n.jsx(so,{on:s,set:a})}),n.jsx(ls,{label:"Notifications",right:n.jsx(so,{on:i,set:o})}),n.jsx(ls,{label:"Edit Profile",right:n.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),n.jsx(ls,{label:"Privacy Policy",right:n.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),n.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function ls({label:e,right:t,onClick:r}){return n.jsxs("button",{type:"button",onClick:r,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[n.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function so({on:e,set:t}){return n.jsx("span",{onClick:r=>{r.stopPropagation(),t(s=>!s),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:n.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}const Ov={name:"Player",avatar:"wizard",level:1,totalXP:0,coins:0,energy:ft.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,currentStreak:0,bestStreak:0,totalDays:0,lastPlayedDate:null,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function $v(){const[e,t]=d.useState(()=>{const u=localStorage.getItem(ft.STORAGE_KEYS.PLAYER);return u?JSON.parse(u):Ov});d.useEffect(()=>{localStorage.setItem(ft.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<ft.MAX_ENERGY&&e.energyRegenAt){const u=setInterval(()=>{const f=Date.now();f>=e.energyRegenAt&&t(p=>({...p,energy:Math.min(p.energy+1,ft.MAX_ENERGY),energyRegenAt:p.energy+1<ft.MAX_ENERGY?f+ft.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(u)}},[e.energy,e.energyRegenAt]);const r=d.useCallback(u=>{t(f=>{const p=f.totalXP+u,m=kd(f.totalXP),b=kd(p);let x=[...f.unlockedAvatars];return b>m&&ft.AVATARS.forEach(N=>{N.unlockLevel===b&&!x.includes(N.id)&&x.push(N.id)}),{...f,totalXP:p,level:b,unlockedAvatars:x}})},[]),s=d.useCallback(u=>{const p=new Error().stack;console.log("[COINS DEBUG] ================"),console.log("[COINS DEBUG] Amount:",u),console.log("[COINS DEBUG] Called from:",p.split(`
`)[2]),console.log("[COINS DEBUG] Full trace:",p),t(m=>(console.log("[COINS DEBUG] Current:",m.coins,"→ New:",m.coins+u),{...m,coins:m.coins+u}))},[]),a=d.useCallback((u=1)=>e.energy<u?!1:(t(f=>({...f,energy:f.energy-u,energyRegenAt:f.energyRegenAt||Date.now()+ft.ENERGY_REGEN_TIME})),!0),[e.energy]),i=d.useCallback(u=>{t(f=>{const p=u?f.comboStreak+1:0;return{...f,comboStreak:p,bestCombo:Math.max(f.bestCombo,p)}})},[]),o=d.useCallback(()=>{t(u=>({...u,comboStreak:0}))},[]),l=d.useCallback(u=>{e.unlockedAvatars.includes(u)&&t(f=>({...f,avatar:u}))},[e.unlockedAvatars]),c=d.useCallback(()=>{const u=new Date().toDateString();t(f=>{if(f.lastPlayedDate===u)return f;const p=new Date;p.setDate(p.getDate()-1);const m=p.toDateString();let b=f.currentStreak;return f.lastPlayedDate===m?b=f.currentStreak+1:(f.lastPlayedDate,b=1),{...f,currentStreak:b,bestStreak:Math.max(f.bestStreak,b),totalDays:f.totalDays+1,lastPlayedDate:u}})},[]);return{player:e,addXP:r,addCoins:s,useEnergy:a,updateCombo:i,resetCombo:o,changeAvatar:l,updateDailyStreak:c,levelProgress:Bx(e.totalXP)}}window.history.replaceState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);window.history.pushState({path:window.location.pathname,preventBack:!0},"",window.location.pathname);const Tm=d.createContext(null),jn=()=>{const e=d.useContext(Tm);if(!e)throw new Error("useGame must be used within GameProvider");return e};function Bv({children:e}){const t=$v();return n.jsx(Tm.Provider,{value:t,children:e})}function qv(){return n.jsx(Bv,{children:n.jsx(ex,{children:n.jsxs(Je,{element:n.jsx(Mx,{}),children:[n.jsx(Je,{path:"/",element:n.jsx(Ed,{})}),n.jsx(Je,{path:"/play",element:n.jsx(Ag,{})}),n.jsx(Je,{path:"/play/party",element:n.jsx(nv,{})}),n.jsx(Je,{path:"/profile",element:n.jsx(lv,{})}),n.jsx(Je,{path:"/profile/leaderboard",element:n.jsx(cv,{})}),n.jsx(Je,{path:"/profile/history",element:n.jsx(pv,{})}),n.jsx(Je,{path:"/profile/rewards",element:n.jsx(Pv,{})}),n.jsx(Je,{path:"/profile/badges",element:n.jsx(_v,{})}),n.jsx(Je,{path:"/profile/achievements",element:n.jsx(Av,{})}),n.jsx(Je,{path:"/profile/streaks",element:n.jsx(Iv,{})}),n.jsx(Je,{path:"/profile/quests",element:n.jsx(Mv,{})}),n.jsx(Je,{path:"/profile/settings",element:n.jsx(Fv,{})}),n.jsx(Je,{path:"/swipe",element:n.jsx(sv,{})}),n.jsx(Je,{path:"/leaders",element:n.jsx(Kp,{to:"/profile/leaderboard",replace:!0})}),n.jsx(Je,{path:"/quiz/:category",element:n.jsx(Gg,{})}),n.jsx(Je,{path:"/quiz/play",element:n.jsx(iv,{})}),n.jsx(Je,{path:"/practice/start",element:n.jsx(ov,{})}),n.jsx(Je,{path:"*",element:n.jsx(Ed,{})})]})})})}ao.createRoot(document.getElementById("root")).render(n.jsx(pt.StrictMode,{children:n.jsx(Sx,{children:n.jsx(qv,{})})}));export{_m as c,qd as g};
