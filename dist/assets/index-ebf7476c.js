(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Yp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rf={exports:{}},$o={},sf={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mi=Symbol.for("react.element"),Kp=Symbol.for("react.portal"),Xp=Symbol.for("react.fragment"),Gp=Symbol.for("react.strict_mode"),Jp=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),eh=Symbol.for("react.context"),th=Symbol.for("react.forward_ref"),nh=Symbol.for("react.suspense"),rh=Symbol.for("react.memo"),sh=Symbol.for("react.lazy"),lu=Symbol.iterator;function ih(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var of={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},af=Object.assign,lf={};function hs(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||of}hs.prototype.isReactComponent={};hs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cf(){}cf.prototype=hs.prototype;function Bl(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||of}var Ul=Bl.prototype=new cf;Ul.constructor=Bl;af(Ul,hs.prototype);Ul.isPureReactComponent=!0;var cu=Array.isArray,uf=Object.prototype.hasOwnProperty,ql={current:null},df={key:!0,ref:!0,__self:!0,__source:!0};function ff(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)uf.call(t,r)&&!df.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:mi,type:e,key:o,ref:a,props:i,_owner:ql.current}}function oh(e,t){return{$$typeof:mi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wl(e){return typeof e=="object"&&e!==null&&e.$$typeof===mi}function ah(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uu=/\/+/g;function ia(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ah(""+e.key):t.toString(36)}function Gi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case mi:case Kp:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ia(a,0):r,cu(i)?(n="",e!=null&&(n=e.replace(uu,"$&/")+"/"),Gi(i,t,n,"",function(u){return u})):i!=null&&(Wl(i)&&(i=oh(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(uu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",cu(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+ia(o,l);a+=Gi(o,t,n,c,i)}else if(c=ih(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+ia(o,l++),a+=Gi(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ni(e,t,n){if(e==null)return e;var r=[],i=0;return Gi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function lh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},Ji={transition:null},ch={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Ji,ReactCurrentOwner:ql};function mf(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:Ni,forEach:function(e,t,n){Ni(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ni(e,function(){t++}),t},toArray:function(e){return Ni(e,function(t){return t})||[]},only:function(e){if(!Wl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=hs;pe.Fragment=Xp;pe.Profiler=Jp;pe.PureComponent=Bl;pe.StrictMode=Gp;pe.Suspense=nh;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ch;pe.act=mf;pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=af({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ql.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)uf.call(t,c)&&!df.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:mi,type:e.type,key:i,ref:o,props:r,_owner:a}};pe.createContext=function(e){return e={$$typeof:eh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zp,_context:e},e.Consumer=e};pe.createElement=ff;pe.createFactory=function(e){var t=ff.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:th,render:e}};pe.isValidElement=Wl;pe.lazy=function(e){return{$$typeof:sh,_payload:{_status:-1,_result:e},_init:lh}};pe.memo=function(e,t){return{$$typeof:rh,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=Ji.transition;Ji.transition={};try{e()}finally{Ji.transition=t}};pe.unstable_act=mf;pe.useCallback=function(e,t){return vt.current.useCallback(e,t)};pe.useContext=function(e){return vt.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};pe.useEffect=function(e,t){return vt.current.useEffect(e,t)};pe.useId=function(){return vt.current.useId()};pe.useImperativeHandle=function(e,t,n){return vt.current.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return vt.current.useMemo(e,t)};pe.useReducer=function(e,t,n){return vt.current.useReducer(e,t,n)};pe.useRef=function(e){return vt.current.useRef(e)};pe.useState=function(e){return vt.current.useState(e)};pe.useSyncExternalStore=function(e,t,n){return vt.current.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return vt.current.useTransition()};pe.version="18.3.1";sf.exports=pe;var d=sf.exports;const St=nf(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh=d,dh=Symbol.for("react.element"),fh=Symbol.for("react.fragment"),mh=Object.prototype.hasOwnProperty,ph=uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hh={key:!0,ref:!0,__self:!0,__source:!0};function pf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)mh.call(t,r)&&!hh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:dh,type:e,key:o,ref:a,props:i,_owner:ph.current}}$o.Fragment=fh;$o.jsx=pf;$o.jsxs=pf;rf.exports=$o;var s=rf.exports,qa={},hf={exports:{}},$t={},xf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,z){var $=T.length;T.push(z);e:for(;0<$;){var O=$-1>>>1,Q=T[O];if(0<i(Q,z))T[O]=z,T[$]=Q,$=O;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var z=T[0],$=T.pop();if($!==z){T[0]=$;e:for(var O=0,Q=T.length,B=Q>>>1;O<B;){var oe=2*(O+1)-1,ae=T[oe],ce=oe+1,xe=T[ce];if(0>i(ae,$))ce<Q&&0>i(xe,ae)?(T[O]=xe,T[ce]=$,O=ce):(T[O]=ae,T[oe]=$,O=oe);else if(ce<Q&&0>i(xe,$))T[O]=xe,T[ce]=$,O=ce;else break e}}return z}function i(T,z){var $=T.sortIndex-z.sortIndex;return $!==0?$:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],x=1,f=null,p=3,j=!1,b=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(T){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=T)r(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=n(u)}}function _(T){if(k=!1,y(T),!b)if(n(c)!==null)b=!0,J(P);else{var z=n(u);z!==null&&W(_,z.startTime-T)}}function P(T,z){b=!1,k&&(k=!1,v(h),h=-1),j=!0;var $=p;try{for(y(z),f=n(c);f!==null&&(!(f.expirationTime>z)||T&&!C());){var O=f.callback;if(typeof O=="function"){f.callback=null,p=f.priorityLevel;var Q=O(f.expirationTime<=z);z=e.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(c)&&r(c),y(z)}else r(c);f=n(c)}if(f!==null)var B=!0;else{var oe=n(u);oe!==null&&W(_,oe.startTime-z),B=!1}return B}finally{f=null,p=$,j=!1}}var L=!1,N=null,h=-1,g=5,w=-1;function C(){return!(e.unstable_now()-w<g)}function E(){if(N!==null){var T=e.unstable_now();w=T;var z=!0;try{z=N(!0,T)}finally{z?U():(L=!1,N=null)}}else L=!1}var U;if(typeof m=="function")U=function(){m(E)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,G=Y.port2;Y.port1.onmessage=E,U=function(){G.postMessage(null)}}else U=function(){R(E,0)};function J(T){N=T,L||(L=!0,U())}function W(T,z){h=R(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){b||j||(b=!0,J(P))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var $=p;p=z;try{return T()}finally{p=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var $=p;p=T;try{return z()}finally{p=$}},e.unstable_scheduleCallback=function(T,z,$){var O=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?O+$:O):$=O,T){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=$+Q,T={id:x++,callback:z,priorityLevel:T,startTime:$,expirationTime:Q,sortIndex:-1},$>O?(T.sortIndex=$,t(u,T),n(c)===null&&T===n(u)&&(k?(v(h),h=-1):k=!0,W(_,$-O))):(T.sortIndex=Q,t(c,T),b||j||(b=!0,J(P))),T},e.unstable_shouldYield=C,e.unstable_wrapCallback=function(T){var z=p;return function(){var $=p;p=z;try{return T.apply(this,arguments)}finally{p=$}}}})(gf);xf.exports=gf;var xh=xf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh=d,At=xh;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vf=new Set,Ks={};function Tr(e,t){ls(e,t),ls(e+"Capture",t)}function ls(e,t){for(Ks[e]=t,e=0;e<t.length;e++)vf.add(t[e])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wa=Object.prototype.hasOwnProperty,vh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,du={},fu={};function yh(e){return Wa.call(fu,e)?!0:Wa.call(du,e)?!1:vh.test(e)?fu[e]=!0:(du[e]=!0,!1)}function bh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wh(e,t,n,r){if(t===null||typeof t>"u"||bh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ct[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ct[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ct[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ct[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ct[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ct[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ct[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ct[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ct[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ql=/[\-:]([a-z])/g;function Hl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ql,Hl);ct[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ql,Hl);ct[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ql,Hl);ct[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ct[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});ct.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ct[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vl(e,t,n,r){var i=ct.hasOwnProperty(t)?ct[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wh(t,n,i,r)&&(n=null),r||i===null?yh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var On=gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Si=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),Qa=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),bf=Symbol.for("react.context"),Kl=Symbol.for("react.forward_ref"),Ha=Symbol.for("react.suspense"),Va=Symbol.for("react.suspense_list"),Xl=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),wf=Symbol.for("react.offscreen"),mu=Symbol.iterator;function ks(e){return e===null||typeof e!="object"?null:(e=mu&&e[mu]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,oa;function Is(e){if(oa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);oa=t&&t[1]||""}return`
`+oa+e}var aa=!1;function la(e,t){if(!e||aa)return"";aa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{aa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Is(e):""}function jh(e){switch(e.tag){case 5:return Is(e.type);case 16:return Is("Lazy");case 13:return Is("Suspense");case 19:return Is("SuspenseList");case 0:case 2:case 15:return e=la(e.type,!1),e;case 11:return e=la(e.type.render,!1),e;case 1:return e=la(e.type,!0),e;default:return""}}function Ya(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wr:return"Fragment";case qr:return"Portal";case Qa:return"Profiler";case Yl:return"StrictMode";case Ha:return"Suspense";case Va:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bf:return(e.displayName||"Context")+".Consumer";case yf:return(e._context.displayName||"Context")+".Provider";case Kl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xl:return t=e.displayName||null,t!==null?t:Ya(e.type)||"Memo";case Vn:t=e._payload,e=e._init;try{return Ya(e(t))}catch{}}return null}function kh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ya(t);case 8:return t===Yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function lr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nh(e){var t=jf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ci(e){e._valueTracker||(e._valueTracker=Nh(e))}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=jf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ka(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=lr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nf(e,t){t=t.checked,t!=null&&Vl(e,"checked",t,!1)}function Xa(e,t){Nf(e,t);var n=lr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ga(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ga(e,t.type,lr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ga(e,t,n){(t!=="number"||mo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fs=Array.isArray;function ts(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+lr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ja(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Fs(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:lr(n)}}function Sf(e,t){var n=lr(t.value),r=lr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Za(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ei,Ef=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ei=Ei||document.createElement("div"),Ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var As={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sh=["Webkit","ms","Moz","O"];Object.keys(As).forEach(function(e){Sh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),As[t]=As[e]})});function _f(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||As.hasOwnProperty(e)&&As[e]?(""+t).trim():t+"px"}function Rf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_f(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ch=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function el(e,t){if(t){if(Ch[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nl=null;function Gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rl=null,ns=null,rs=null;function vu(e){if(e=xi(e)){if(typeof rl!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Qo(t),rl(e.stateNode,e.type,t))}}function Pf(e){ns?rs?rs.push(e):rs=[e]:ns=e}function Tf(){if(ns){var e=ns,t=rs;if(rs=ns=null,vu(e),t)for(e=0;e<t.length;e++)vu(t[e])}}function Lf(e,t){return e(t)}function zf(){}var ca=!1;function Mf(e,t,n){if(ca)return e(t,n);ca=!0;try{return Lf(e,t,n)}finally{ca=!1,(ns!==null||rs!==null)&&(zf(),Tf())}}function Gs(e,t){var n=e.stateNode;if(n===null)return null;var r=Qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var sl=!1;if(zn)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){sl=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{sl=!1}function Eh(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(x){this.onError(x)}}var $s=!1,po=null,ho=!1,il=null,_h={onError:function(e){$s=!0,po=e}};function Rh(e,t,n,r,i,o,a,l,c){$s=!1,po=null,Eh.apply(_h,arguments)}function Ph(e,t,n,r,i,o,a,l,c){if(Rh.apply(this,arguments),$s){if($s){var u=po;$s=!1,po=null}else throw Error(A(198));ho||(ho=!0,il=u)}}function Lr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function If(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yu(e){if(Lr(e)!==e)throw Error(A(188))}function Th(e){var t=e.alternate;if(!t){if(t=Lr(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return yu(i),e;if(o===r)return yu(i),t;o=o.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Ff(e){return e=Th(e),e!==null?Df(e):null}function Df(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Df(e);if(t!==null)return t;e=e.sibling}return null}var Of=At.unstable_scheduleCallback,bu=At.unstable_cancelCallback,Lh=At.unstable_shouldYield,zh=At.unstable_requestPaint,He=At.unstable_now,Mh=At.unstable_getCurrentPriorityLevel,Jl=At.unstable_ImmediatePriority,Af=At.unstable_UserBlockingPriority,xo=At.unstable_NormalPriority,Ih=At.unstable_LowPriority,$f=At.unstable_IdlePriority,Bo=null,jn=null;function Fh(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Bo,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:Ah,Dh=Math.log,Oh=Math.LN2;function Ah(e){return e>>>=0,e===0?32:31-(Dh(e)/Oh|0)|0}var _i=64,Ri=4194304;function Ds(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function go(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Ds(l):(o&=a,o!==0&&(r=Ds(o)))}else a=n&~i,a!==0?r=Ds(a):o!==0&&(r=Ds(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rn(t),i=1<<n,r|=e[n],t&=~i;return r}function $h(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-rn(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=$h(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bf(){var e=_i;return _i<<=1,!(_i&4194240)&&(_i=64),e}function ua(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rn(t),e[t]=n}function Uh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-rn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Zl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ke=0;function Uf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qf,ec,Wf,Qf,Hf,al=!1,Pi=[],er=null,tr=null,nr=null,Js=new Map,Zs=new Map,Xn=[],qh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(e,t){switch(e){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Js.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(t.pointerId)}}function Ss(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=xi(t),t!==null&&ec(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Wh(e,t,n,r,i){switch(t){case"focusin":return er=Ss(er,e,t,n,r,i),!0;case"dragenter":return tr=Ss(tr,e,t,n,r,i),!0;case"mouseover":return nr=Ss(nr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Js.set(o,Ss(Js.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Zs.set(o,Ss(Zs.get(o)||null,e,t,n,r,i)),!0}return!1}function Vf(e){var t=br(e.target);if(t!==null){var n=Lr(t);if(n!==null){if(t=n.tag,t===13){if(t=If(n),t!==null){e.blockedOn=t,Hf(e.priority,function(){Wf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ll(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nl=r,n.target.dispatchEvent(r),nl=null}else return t=xi(n),t!==null&&ec(t),e.blockedOn=n,!1;t.shift()}return!0}function ju(e,t,n){Zi(e)&&n.delete(t)}function Qh(){al=!1,er!==null&&Zi(er)&&(er=null),tr!==null&&Zi(tr)&&(tr=null),nr!==null&&Zi(nr)&&(nr=null),Js.forEach(ju),Zs.forEach(ju)}function Cs(e,t){e.blockedOn===t&&(e.blockedOn=null,al||(al=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,Qh)))}function ei(e){function t(i){return Cs(i,e)}if(0<Pi.length){Cs(Pi[0],e);for(var n=1;n<Pi.length;n++){var r=Pi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(er!==null&&Cs(er,e),tr!==null&&Cs(tr,e),nr!==null&&Cs(nr,e),Js.forEach(t),Zs.forEach(t),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)Vf(n),n.blockedOn===null&&Xn.shift()}var ss=On.ReactCurrentBatchConfig,vo=!0;function Hh(e,t,n,r){var i=ke,o=ss.transition;ss.transition=null;try{ke=1,tc(e,t,n,r)}finally{ke=i,ss.transition=o}}function Vh(e,t,n,r){var i=ke,o=ss.transition;ss.transition=null;try{ke=4,tc(e,t,n,r)}finally{ke=i,ss.transition=o}}function tc(e,t,n,r){if(vo){var i=ll(e,t,n,r);if(i===null)ba(e,t,r,yo,n),wu(e,r);else if(Wh(i,e,t,n,r))r.stopPropagation();else if(wu(e,r),t&4&&-1<qh.indexOf(e)){for(;i!==null;){var o=xi(i);if(o!==null&&qf(o),o=ll(e,t,n,r),o===null&&ba(e,t,r,yo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ba(e,t,r,null,n)}}var yo=null;function ll(e,t,n,r){if(yo=null,e=Gl(r),e=br(e),e!==null)if(t=Lr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=If(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yo=e,null}function Yf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mh()){case Jl:return 1;case Af:return 4;case xo:case Ih:return 16;case $f:return 536870912;default:return 16}default:return 16}}var Jn=null,nc=null,eo=null;function Kf(){if(eo)return eo;var e,t=nc,n=t.length,r,i="value"in Jn?Jn.value:Jn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return eo=i.slice(e,1<r?1-r:void 0)}function to(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ti(){return!0}function ku(){return!1}function Bt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ti:ku,this.isPropagationStopped=ku,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),t}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Bt(xs),hi=$e({},xs,{view:0,detail:0}),Yh=Bt(hi),da,fa,Es,Uo=$e({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Es&&(Es&&e.type==="mousemove"?(da=e.screenX-Es.screenX,fa=e.screenY-Es.screenY):fa=da=0,Es=e),da)},movementY:function(e){return"movementY"in e?e.movementY:fa}}),Nu=Bt(Uo),Kh=$e({},Uo,{dataTransfer:0}),Xh=Bt(Kh),Gh=$e({},hi,{relatedTarget:0}),ma=Bt(Gh),Jh=$e({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),Zh=Bt(Jh),e0=$e({},xs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),t0=Bt(e0),n0=$e({},xs,{data:0}),Su=Bt(n0),r0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=i0[e])?!!t[e]:!1}function sc(){return o0}var a0=$e({},hi,{key:function(e){if(e.key){var t=r0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?s0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l0=Bt(a0),c0=$e({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=Bt(c0),u0=$e({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),d0=Bt(u0),f0=$e({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),m0=Bt(f0),p0=$e({},Uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=Bt(p0),x0=[9,13,27,32],ic=zn&&"CompositionEvent"in window,Bs=null;zn&&"documentMode"in document&&(Bs=document.documentMode);var g0=zn&&"TextEvent"in window&&!Bs,Xf=zn&&(!ic||Bs&&8<Bs&&11>=Bs),Eu=String.fromCharCode(32),_u=!1;function Gf(e,t){switch(e){case"keyup":return x0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function v0(e,t){switch(e){case"compositionend":return Jf(t);case"keypress":return t.which!==32?null:(_u=!0,Eu);case"textInput":return e=t.data,e===Eu&&_u?null:e;default:return null}}function y0(e,t){if(Qr)return e==="compositionend"||!ic&&Gf(e,t)?(e=Kf(),eo=nc=Jn=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xf&&t.locale!=="ko"?null:t.data;default:return null}}var b0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!b0[e.type]:t==="textarea"}function Zf(e,t,n,r){Pf(r),t=bo(t,"onChange"),0<t.length&&(n=new rc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Us=null,ti=null;function w0(e){um(e,0)}function qo(e){var t=Yr(e);if(kf(t))return e}function j0(e,t){if(e==="change")return t}var em=!1;if(zn){var pa;if(zn){var ha="oninput"in document;if(!ha){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),ha=typeof Pu.oninput=="function"}pa=ha}else pa=!1;em=pa&&(!document.documentMode||9<document.documentMode)}function Tu(){Us&&(Us.detachEvent("onpropertychange",tm),ti=Us=null)}function tm(e){if(e.propertyName==="value"&&qo(ti)){var t=[];Zf(t,ti,e,Gl(e)),Mf(w0,t)}}function k0(e,t,n){e==="focusin"?(Tu(),Us=t,ti=n,Us.attachEvent("onpropertychange",tm)):e==="focusout"&&Tu()}function N0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(ti)}function S0(e,t){if(e==="click")return qo(t)}function C0(e,t){if(e==="input"||e==="change")return qo(t)}function E0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var on=typeof Object.is=="function"?Object.is:E0;function ni(e,t){if(on(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wa.call(t,i)||!on(e[i],t[i]))return!1}return!0}function Lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zu(e,t){var n=Lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lu(n)}}function nm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rm(){for(var e=window,t=mo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=mo(e.document)}return t}function oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _0(e){var t=rm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nm(n.ownerDocument.documentElement,n)){if(r!==null&&oc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=zu(n,o);var a=zu(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var R0=zn&&"documentMode"in document&&11>=document.documentMode,Hr=null,cl=null,qs=null,ul=!1;function Mu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ul||Hr==null||Hr!==mo(r)||(r=Hr,"selectionStart"in r&&oc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qs&&ni(qs,r)||(qs=r,r=bo(cl,"onSelect"),0<r.length&&(t=new rc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hr)))}function Li(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vr={animationend:Li("Animation","AnimationEnd"),animationiteration:Li("Animation","AnimationIteration"),animationstart:Li("Animation","AnimationStart"),transitionend:Li("Transition","TransitionEnd")},xa={},sm={};zn&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function Wo(e){if(xa[e])return xa[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sm)return xa[e]=t[n];return e}var im=Wo("animationend"),om=Wo("animationiteration"),am=Wo("animationstart"),lm=Wo("transitionend"),cm=new Map,Iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(e,t){cm.set(e,t),Tr(t,[e])}for(var ga=0;ga<Iu.length;ga++){var va=Iu[ga],P0=va.toLowerCase(),T0=va[0].toUpperCase()+va.slice(1);ur(P0,"on"+T0)}ur(im,"onAnimationEnd");ur(om,"onAnimationIteration");ur(am,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(lm,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function Fu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ph(r,t,void 0,e),e.currentTarget=null}function um(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Fu(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Fu(i,l,u),o=c}}}if(ho)throw e=il,ho=!1,il=null,e}function Pe(e,t){var n=t[hl];n===void 0&&(n=t[hl]=new Set);var r=e+"__bubble";n.has(r)||(dm(t,e,2,!1),n.add(r))}function ya(e,t,n){var r=0;t&&(r|=4),dm(n,e,r,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function ri(e){if(!e[zi]){e[zi]=!0,vf.forEach(function(n){n!=="selectionchange"&&(L0.has(n)||ya(n,!1,e),ya(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,ya("selectionchange",!1,t))}}function dm(e,t,n,r){switch(Yf(t)){case 1:var i=Hh;break;case 4:i=Vh;break;default:i=tc}n=i.bind(null,t,n,e),i=void 0,!sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ba(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=br(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Mf(function(){var u=o,x=Gl(n),f=[];e:{var p=cm.get(e);if(p!==void 0){var j=rc,b=e;switch(e){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":j=l0;break;case"focusin":b="focus",j=ma;break;case"focusout":b="blur",j=ma;break;case"beforeblur":case"afterblur":j=ma;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Xh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=d0;break;case im:case om:case am:j=Zh;break;case lm:j=m0;break;case"scroll":j=Yh;break;case"wheel":j=h0;break;case"copy":case"cut":case"paste":j=t0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Cu}var k=(t&4)!==0,R=!k&&e==="scroll",v=k?p!==null?p+"Capture":null:p;k=[];for(var m=u,y;m!==null;){y=m;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,v!==null&&(_=Gs(m,v),_!=null&&k.push(si(m,_,y)))),R)break;m=m.return}0<k.length&&(p=new j(p,b,null,n,x),f.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",p&&n!==nl&&(b=n.relatedTarget||n.fromElement)&&(br(b)||b[Mn]))break e;if((j||p)&&(p=x.window===x?x:(p=x.ownerDocument)?p.defaultView||p.parentWindow:window,j?(b=n.relatedTarget||n.toElement,j=u,b=b?br(b):null,b!==null&&(R=Lr(b),b!==R||b.tag!==5&&b.tag!==6)&&(b=null)):(j=null,b=u),j!==b)){if(k=Nu,_="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(k=Cu,_="onPointerLeave",v="onPointerEnter",m="pointer"),R=j==null?p:Yr(j),y=b==null?p:Yr(b),p=new k(_,m+"leave",j,n,x),p.target=R,p.relatedTarget=y,_=null,br(x)===u&&(k=new k(v,m+"enter",b,n,x),k.target=y,k.relatedTarget=R,_=k),R=_,j&&b)t:{for(k=j,v=b,m=0,y=k;y;y=Dr(y))m++;for(y=0,_=v;_;_=Dr(_))y++;for(;0<m-y;)k=Dr(k),m--;for(;0<y-m;)v=Dr(v),y--;for(;m--;){if(k===v||v!==null&&k===v.alternate)break t;k=Dr(k),v=Dr(v)}k=null}else k=null;j!==null&&Du(f,p,j,k,!1),b!==null&&R!==null&&Du(f,R,b,k,!0)}}e:{if(p=u?Yr(u):window,j=p.nodeName&&p.nodeName.toLowerCase(),j==="select"||j==="input"&&p.type==="file")var P=j0;else if(Ru(p))if(em)P=C0;else{P=N0;var L=k0}else(j=p.nodeName)&&j.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=S0);if(P&&(P=P(e,u))){Zf(f,P,n,x);break e}L&&L(e,p,u),e==="focusout"&&(L=p._wrapperState)&&L.controlled&&p.type==="number"&&Ga(p,"number",p.value)}switch(L=u?Yr(u):window,e){case"focusin":(Ru(L)||L.contentEditable==="true")&&(Hr=L,cl=u,qs=null);break;case"focusout":qs=cl=Hr=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,Mu(f,n,x);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":Mu(f,n,x)}var N;if(ic)e:{switch(e){case"compositionstart":var h="onCompositionStart";break e;case"compositionend":h="onCompositionEnd";break e;case"compositionupdate":h="onCompositionUpdate";break e}h=void 0}else Qr?Gf(e,n)&&(h="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(h="onCompositionStart");h&&(Xf&&n.locale!=="ko"&&(Qr||h!=="onCompositionStart"?h==="onCompositionEnd"&&Qr&&(N=Kf()):(Jn=x,nc="value"in Jn?Jn.value:Jn.textContent,Qr=!0)),L=bo(u,h),0<L.length&&(h=new Su(h,e,null,n,x),f.push({event:h,listeners:L}),N?h.data=N:(N=Jf(n),N!==null&&(h.data=N)))),(N=g0?v0(e,n):y0(e,n))&&(u=bo(u,"onBeforeInput"),0<u.length&&(x=new Su("onBeforeInput","beforeinput",null,n,x),f.push({event:x,listeners:u}),x.data=N))}um(f,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Gs(e,n),o!=null&&r.unshift(si(e,o,i)),o=Gs(e,t),o!=null&&r.push(si(e,o,i))),e=e.return}return r}function Dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Du(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Gs(n,o),c!=null&&a.unshift(si(n,c,l))):i||(c=Gs(n,o),c!=null&&a.push(si(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var z0=/\r\n?/g,M0=/\u0000|\uFFFD/g;function Ou(e){return(typeof e=="string"?e:""+e).replace(z0,`
`).replace(M0,"")}function Mi(e,t,n){if(t=Ou(t),Ou(e)!==t&&n)throw Error(A(425))}function wo(){}var dl=null,fl=null;function ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pl=typeof setTimeout=="function"?setTimeout:void 0,I0=typeof clearTimeout=="function"?clearTimeout:void 0,Au=typeof Promise=="function"?Promise:void 0,F0=typeof queueMicrotask=="function"?queueMicrotask:typeof Au<"u"?function(e){return Au.resolve(null).then(e).catch(D0)}:pl;function D0(e){setTimeout(function(){throw e})}function wa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ei(t)}function rr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $u(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gs=Math.random().toString(36).slice(2),bn="__reactFiber$"+gs,ii="__reactProps$"+gs,Mn="__reactContainer$"+gs,hl="__reactEvents$"+gs,O0="__reactListeners$"+gs,A0="__reactHandles$"+gs;function br(e){var t=e[bn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mn]||n[bn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$u(e);e!==null;){if(n=e[bn])return n;e=$u(e)}return t}e=n,n=e.parentNode}return null}function xi(e){return e=e[bn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Qo(e){return e[ii]||null}var xl=[],Kr=-1;function dr(e){return{current:e}}function Te(e){0>Kr||(e.current=xl[Kr],xl[Kr]=null,Kr--)}function _e(e,t){Kr++,xl[Kr]=e.current,e.current=t}var cr={},pt=dr(cr),_t=dr(!1),Cr=cr;function cs(e,t){var n=e.type.contextTypes;if(!n)return cr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(e){return e=e.childContextTypes,e!=null}function jo(){Te(_t),Te(pt)}function Bu(e,t,n){if(pt.current!==cr)throw Error(A(168));_e(pt,t),_e(_t,n)}function fm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(A(108,kh(e)||"Unknown",i));return $e({},n,r)}function ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cr,Cr=pt.current,_e(pt,e),_e(_t,_t.current),!0}function Uu(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=fm(e,t,Cr),r.__reactInternalMemoizedMergedChildContext=e,Te(_t),Te(pt),_e(pt,e)):Te(_t),_e(_t,n)}var En=null,Ho=!1,ja=!1;function mm(e){En===null?En=[e]:En.push(e)}function $0(e){Ho=!0,mm(e)}function fr(){if(!ja&&En!==null){ja=!0;var e=0,t=ke;try{var n=En;for(ke=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}En=null,Ho=!1}catch(i){throw En!==null&&(En=En.slice(e+1)),Of(Jl,fr),i}finally{ke=t,ja=!1}}return null}var Xr=[],Gr=0,No=null,So=0,Wt=[],Qt=0,Er=null,_n=1,Rn="";function vr(e,t){Xr[Gr++]=So,Xr[Gr++]=No,No=e,So=t}function pm(e,t,n){Wt[Qt++]=_n,Wt[Qt++]=Rn,Wt[Qt++]=Er,Er=e;var r=_n;e=Rn;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var o=32-rn(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,_n=1<<32-rn(t)+i|n<<i|r,Rn=o+e}else _n=1<<o|n<<i|r,Rn=e}function ac(e){e.return!==null&&(vr(e,1),pm(e,1,0))}function lc(e){for(;e===No;)No=Xr[--Gr],Xr[Gr]=null,So=Xr[--Gr],Xr[Gr]=null;for(;e===Er;)Er=Wt[--Qt],Wt[Qt]=null,Rn=Wt[--Qt],Wt[Qt]=null,_n=Wt[--Qt],Wt[Qt]=null}var Ot=null,Dt=null,Le=!1,tn=null;function hm(e,t){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ot=e,Dt=rr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ot=e,Dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Er!==null?{id:_n,overflow:Rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ot=e,Dt=null,!0):!1;default:return!1}}function gl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vl(e){if(Le){var t=Dt;if(t){var n=t;if(!qu(e,t)){if(gl(e))throw Error(A(418));t=rr(n.nextSibling);var r=Ot;t&&qu(e,t)?hm(r,n):(e.flags=e.flags&-4097|2,Le=!1,Ot=e)}}else{if(gl(e))throw Error(A(418));e.flags=e.flags&-4097|2,Le=!1,Ot=e}}}function Wu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ot=e}function Ii(e){if(e!==Ot)return!1;if(!Le)return Wu(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ml(e.type,e.memoizedProps)),t&&(t=Dt)){if(gl(e))throw xm(),Error(A(418));for(;t;)hm(e,t),t=rr(t.nextSibling)}if(Wu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Dt=rr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Dt=null}}else Dt=Ot?rr(e.stateNode.nextSibling):null;return!0}function xm(){for(var e=Dt;e;)e=rr(e.nextSibling)}function us(){Dt=Ot=null,Le=!1}function cc(e){tn===null?tn=[e]:tn.push(e)}var B0=On.ReactCurrentBatchConfig;function _s(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function Fi(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qu(e){var t=e._init;return t(e._payload)}function gm(e){function t(v,m){if(e){var y=v.deletions;y===null?(v.deletions=[m],v.flags|=16):y.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=ar(v,m),v.index=0,v.sibling=null,v}function o(v,m,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<m?(v.flags|=2,m):y):(v.flags|=2,m)):(v.flags|=1048576,m)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,m,y,_){return m===null||m.tag!==6?(m=Ra(y,v.mode,_),m.return=v,m):(m=i(m,y),m.return=v,m)}function c(v,m,y,_){var P=y.type;return P===Wr?x(v,m,y.props.children,_,y.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Vn&&Qu(P)===m.type)?(_=i(m,y.props),_.ref=_s(v,m,y),_.return=v,_):(_=lo(y.type,y.key,y.props,null,v.mode,_),_.ref=_s(v,m,y),_.return=v,_)}function u(v,m,y,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Pa(y,v.mode,_),m.return=v,m):(m=i(m,y.children||[]),m.return=v,m)}function x(v,m,y,_,P){return m===null||m.tag!==7?(m=Nr(y,v.mode,_,P),m.return=v,m):(m=i(m,y),m.return=v,m)}function f(v,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ra(""+m,v.mode,y),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Si:return y=lo(m.type,m.key,m.props,null,v.mode,y),y.ref=_s(v,null,m),y.return=v,y;case qr:return m=Pa(m,v.mode,y),m.return=v,m;case Vn:var _=m._init;return f(v,_(m._payload),y)}if(Fs(m)||ks(m))return m=Nr(m,v.mode,y,null),m.return=v,m;Fi(v,m)}return null}function p(v,m,y,_){var P=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:l(v,m,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Si:return y.key===P?c(v,m,y,_):null;case qr:return y.key===P?u(v,m,y,_):null;case Vn:return P=y._init,p(v,m,P(y._payload),_)}if(Fs(y)||ks(y))return P!==null?null:x(v,m,y,_,null);Fi(v,y)}return null}function j(v,m,y,_,P){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(y)||null,l(m,v,""+_,P);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Si:return v=v.get(_.key===null?y:_.key)||null,c(m,v,_,P);case qr:return v=v.get(_.key===null?y:_.key)||null,u(m,v,_,P);case Vn:var L=_._init;return j(v,m,y,L(_._payload),P)}if(Fs(_)||ks(_))return v=v.get(y)||null,x(m,v,_,P,null);Fi(m,_)}return null}function b(v,m,y,_){for(var P=null,L=null,N=m,h=m=0,g=null;N!==null&&h<y.length;h++){N.index>h?(g=N,N=null):g=N.sibling;var w=p(v,N,y[h],_);if(w===null){N===null&&(N=g);break}e&&N&&w.alternate===null&&t(v,N),m=o(w,m,h),L===null?P=w:L.sibling=w,L=w,N=g}if(h===y.length)return n(v,N),Le&&vr(v,h),P;if(N===null){for(;h<y.length;h++)N=f(v,y[h],_),N!==null&&(m=o(N,m,h),L===null?P=N:L.sibling=N,L=N);return Le&&vr(v,h),P}for(N=r(v,N);h<y.length;h++)g=j(N,v,h,y[h],_),g!==null&&(e&&g.alternate!==null&&N.delete(g.key===null?h:g.key),m=o(g,m,h),L===null?P=g:L.sibling=g,L=g);return e&&N.forEach(function(C){return t(v,C)}),Le&&vr(v,h),P}function k(v,m,y,_){var P=ks(y);if(typeof P!="function")throw Error(A(150));if(y=P.call(y),y==null)throw Error(A(151));for(var L=P=null,N=m,h=m=0,g=null,w=y.next();N!==null&&!w.done;h++,w=y.next()){N.index>h?(g=N,N=null):g=N.sibling;var C=p(v,N,w.value,_);if(C===null){N===null&&(N=g);break}e&&N&&C.alternate===null&&t(v,N),m=o(C,m,h),L===null?P=C:L.sibling=C,L=C,N=g}if(w.done)return n(v,N),Le&&vr(v,h),P;if(N===null){for(;!w.done;h++,w=y.next())w=f(v,w.value,_),w!==null&&(m=o(w,m,h),L===null?P=w:L.sibling=w,L=w);return Le&&vr(v,h),P}for(N=r(v,N);!w.done;h++,w=y.next())w=j(N,v,h,w.value,_),w!==null&&(e&&w.alternate!==null&&N.delete(w.key===null?h:w.key),m=o(w,m,h),L===null?P=w:L.sibling=w,L=w);return e&&N.forEach(function(E){return t(v,E)}),Le&&vr(v,h),P}function R(v,m,y,_){if(typeof y=="object"&&y!==null&&y.type===Wr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Si:e:{for(var P=y.key,L=m;L!==null;){if(L.key===P){if(P=y.type,P===Wr){if(L.tag===7){n(v,L.sibling),m=i(L,y.props.children),m.return=v,v=m;break e}}else if(L.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Vn&&Qu(P)===L.type){n(v,L.sibling),m=i(L,y.props),m.ref=_s(v,L,y),m.return=v,v=m;break e}n(v,L);break}else t(v,L);L=L.sibling}y.type===Wr?(m=Nr(y.props.children,v.mode,_,y.key),m.return=v,v=m):(_=lo(y.type,y.key,y.props,null,v.mode,_),_.ref=_s(v,m,y),_.return=v,v=_)}return a(v);case qr:e:{for(L=y.key;m!==null;){if(m.key===L)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(v,m.sibling),m=i(m,y.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=Pa(y,v.mode,_),m.return=v,v=m}return a(v);case Vn:return L=y._init,R(v,m,L(y._payload),_)}if(Fs(y))return b(v,m,y,_);if(ks(y))return k(v,m,y,_);Fi(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,y),m.return=v,v=m):(n(v,m),m=Ra(y,v.mode,_),m.return=v,v=m),a(v)):n(v,m)}return R}var ds=gm(!0),vm=gm(!1),Co=dr(null),Eo=null,Jr=null,uc=null;function dc(){uc=Jr=Eo=null}function fc(e){var t=Co.current;Te(Co),e._currentValue=t}function yl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function is(e,t){Eo=e,uc=Jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Et=!0),e.firstContext=null)}function Yt(e){var t=e._currentValue;if(uc!==e)if(e={context:e,memoizedValue:t,next:null},Jr===null){if(Eo===null)throw Error(A(308));Jr=e,Eo.dependencies={lanes:0,firstContext:e}}else Jr=Jr.next=e;return t}var wr=null;function mc(e){wr===null?wr=[e]:wr.push(e)}function ym(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,mc(t)):(n.next=i.next,i.next=n),t.interleaved=n,In(e,r)}function In(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yn=!1;function pc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,In(e,n)}return i=r.interleaved,i===null?(t.next=t,mc(r)):(t.next=i.next,i.next=t),r.interleaved=t,In(e,n)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}function Hu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _o(e,t,n,r){var i=e.updateQueue;Yn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var x=e.alternate;x!==null&&(x=x.updateQueue,l=x.lastBaseUpdate,l!==a&&(l===null?x.firstBaseUpdate=u:l.next=u,x.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;a=0,x=u=c=null,l=o;do{var p=l.lane,j=l.eventTime;if((r&p)===p){x!==null&&(x=x.next={eventTime:j,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,k=l;switch(p=t,j=n,k.tag){case 1:if(b=k.payload,typeof b=="function"){f=b.call(j,f,p);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=k.payload,p=typeof b=="function"?b.call(j,f,p):b,p==null)break e;f=$e({},f,p);break e;case 2:Yn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else j={eventTime:j,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},x===null?(u=x=j,c=f):x=x.next=j,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(x===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=x,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Rr|=a,e.lanes=a,e.memoizedState=f}}function Vu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var gi={},kn=dr(gi),oi=dr(gi),ai=dr(gi);function jr(e){if(e===gi)throw Error(A(174));return e}function hc(e,t){switch(_e(ai,t),_e(oi,e),_e(kn,gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Za(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Za(t,e)}Te(kn),_e(kn,t)}function fs(){Te(kn),Te(oi),Te(ai)}function wm(e){jr(ai.current);var t=jr(kn.current),n=Za(t,e.type);t!==n&&(_e(oi,e),_e(kn,n))}function xc(e){oi.current===e&&(Te(kn),Te(oi))}var Oe=dr(0);function Ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ka=[];function gc(){for(var e=0;e<ka.length;e++)ka[e]._workInProgressVersionPrimary=null;ka.length=0}var ro=On.ReactCurrentDispatcher,Na=On.ReactCurrentBatchConfig,_r=0,Ae=null,tt=null,st=null,Po=!1,Ws=!1,li=0,U0=0;function dt(){throw Error(A(321))}function vc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!on(e[n],t[n]))return!1;return!0}function yc(e,t,n,r,i,o){if(_r=o,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=e===null||e.memoizedState===null?H0:V0,e=n(r,i),Ws){o=0;do{if(Ws=!1,li=0,25<=o)throw Error(A(301));o+=1,st=tt=null,t.updateQueue=null,ro.current=Y0,e=n(r,i)}while(Ws)}if(ro.current=To,t=tt!==null&&tt.next!==null,_r=0,st=tt=Ae=null,Po=!1,t)throw Error(A(300));return e}function bc(){var e=li!==0;return li=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Ae.memoizedState=st=e:st=st.next=e,st}function Kt(){if(tt===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=tt.next;var t=st===null?Ae.memoizedState:st.next;if(t!==null)st=t,tt=e;else{if(e===null)throw Error(A(310));tt=e,e={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},st===null?Ae.memoizedState=st=e:st=st.next=e}return st}function ci(e,t){return typeof t=="function"?t(e):t}function Sa(e){var t=Kt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=tt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var x=u.lane;if((_r&x)===x)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:x,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,Ae.lanes|=x,Rr|=x}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,on(r,t.memoizedState)||(Et=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ae.lanes|=o,Rr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ca(e){var t=Kt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);on(o,t.memoizedState)||(Et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function jm(){}function km(e,t){var n=Ae,r=Kt(),i=t(),o=!on(r.memoizedState,i);if(o&&(r.memoizedState=i,Et=!0),r=r.queue,wc(Cm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,ui(9,Sm.bind(null,n,r,i,t),void 0,null),it===null)throw Error(A(349));_r&30||Nm(n,t,i)}return i}function Nm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sm(e,t,n,r){t.value=n,t.getSnapshot=r,Em(t)&&_m(e)}function Cm(e,t,n){return n(function(){Em(t)&&_m(e)})}function Em(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!on(e,n)}catch{return!0}}function _m(e){var t=In(e,1);t!==null&&sn(t,e,1,-1)}function Yu(e){var t=yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},t.queue=e,e=e.dispatch=Q0.bind(null,Ae,e),[t.memoizedState,e]}function ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rm(){return Kt().memoizedState}function so(e,t,n,r){var i=yn();Ae.flags|=e,i.memoizedState=ui(1|t,n,void 0,r===void 0?null:r)}function Vo(e,t,n,r){var i=Kt();r=r===void 0?null:r;var o=void 0;if(tt!==null){var a=tt.memoizedState;if(o=a.destroy,r!==null&&vc(r,a.deps)){i.memoizedState=ui(t,n,o,r);return}}Ae.flags|=e,i.memoizedState=ui(1|t,n,o,r)}function Ku(e,t){return so(8390656,8,e,t)}function wc(e,t){return Vo(2048,8,e,t)}function Pm(e,t){return Vo(4,2,e,t)}function Tm(e,t){return Vo(4,4,e,t)}function Lm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zm(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4,4,Lm.bind(null,t,e),n)}function jc(){}function Mm(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Im(e,t){var n=Kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fm(e,t,n){return _r&21?(on(n,t)||(n=Bf(),Ae.lanes|=n,Rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Et=!0),e.memoizedState=n)}function q0(e,t){var n=ke;ke=n!==0&&4>n?n:4,e(!0);var r=Na.transition;Na.transition={};try{e(!1),t()}finally{ke=n,Na.transition=r}}function Dm(){return Kt().memoizedState}function W0(e,t,n){var r=or(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Om(e))Am(t,n);else if(n=ym(e,t,n,r),n!==null){var i=gt();sn(n,e,r,i),$m(n,t,r)}}function Q0(e,t,n){var r=or(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Om(e))Am(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,on(l,a)){var c=t.interleaved;c===null?(i.next=i,mc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=ym(e,t,i,r),n!==null&&(i=gt(),sn(n,e,r,i),$m(n,t,r))}}function Om(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function Am(e,t){Ws=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $m(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}var To={readContext:Yt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},H0={readContext:Yt,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:Ku,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,so(4194308,4,Lm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return so(4194308,4,e,t)},useInsertionEffect:function(e,t){return so(4,2,e,t)},useMemo:function(e,t){var n=yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=W0.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:Yu,useDebugValue:jc,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Yu(!1),t=e[0];return e=q0.bind(null,e[1]),yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=yn();if(Le){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),it===null)throw Error(A(349));_r&30||Nm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ku(Cm.bind(null,r,o,e),[e]),r.flags|=2048,ui(9,Sm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yn(),t=it.identifierPrefix;if(Le){var n=Rn,r=_n;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=U0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},V0={readContext:Yt,useCallback:Mm,useContext:Yt,useEffect:wc,useImperativeHandle:zm,useInsertionEffect:Pm,useLayoutEffect:Tm,useMemo:Im,useReducer:Sa,useRef:Rm,useState:function(){return Sa(ci)},useDebugValue:jc,useDeferredValue:function(e){var t=Kt();return Fm(t,tt.memoizedState,e)},useTransition:function(){var e=Sa(ci)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:jm,useSyncExternalStore:km,useId:Dm,unstable_isNewReconciler:!1},Y0={readContext:Yt,useCallback:Mm,useContext:Yt,useEffect:wc,useImperativeHandle:zm,useInsertionEffect:Pm,useLayoutEffect:Tm,useMemo:Im,useReducer:Ca,useRef:Rm,useState:function(){return Ca(ci)},useDebugValue:jc,useDeferredValue:function(e){var t=Kt();return tt===null?t.memoizedState=e:Fm(t,tt.memoizedState,e)},useTransition:function(){var e=Ca(ci)[0],t=Kt().memoizedState;return[e,t]},useMutableSource:jm,useSyncExternalStore:km,useId:Dm,unstable_isNewReconciler:!1};function Zt(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yo={isMounted:function(e){return(e=e._reactInternals)?Lr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),i=or(e),o=Tn(r,i);o.payload=t,n!=null&&(o.callback=n),t=sr(e,o,i),t!==null&&(sn(t,e,i,r),no(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),i=or(e),o=Tn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=sr(e,o,i),t!==null&&(sn(t,e,i,r),no(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=or(e),i=Tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=sr(e,i,r),t!==null&&(sn(t,e,r,n),no(t,e,r))}};function Xu(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ni(n,r)||!ni(i,o):!0}function Bm(e,t,n){var r=!1,i=cr,o=t.contextType;return typeof o=="object"&&o!==null?o=Yt(o):(i=Rt(t)?Cr:pt.current,r=t.contextTypes,o=(r=r!=null)?cs(e,i):cr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function wl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},pc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Yt(o):(o=Rt(t)?Cr:pt.current,i.context=cs(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Yo.enqueueReplaceState(i,i.state,null),_o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ms(e,t){try{var n="",r=t;do n+=jh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ea(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var K0=typeof WeakMap=="function"?WeakMap:Map;function Um(e,t,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zo||(zo=!0,Ll=r),jl(e,t)},n}function qm(e,t,n){n=Tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){jl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){jl(e,t),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new K0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=cx.bind(null,e,t,n),t.then(e,e))}function Zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ed(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tn(-1,1),t.tag=2,sr(n,t,1))),n.lanes|=1),e)}var X0=On.ReactCurrentOwner,Et=!1;function xt(e,t,n,r){t.child=e===null?vm(t,null,n,r):ds(t,e.child,n,r)}function td(e,t,n,r,i){n=n.render;var o=t.ref;return is(t,i),r=yc(e,t,n,r,o,i),n=bc(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Le&&n&&ac(t),t.flags|=1,xt(e,t,r,i),t.child)}function nd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Pc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Wm(e,t,o,r,i)):(e=lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ni,n(a,r)&&e.ref===t.ref)return Fn(e,t,i)}return t.flags|=1,e=ar(o,r),e.ref=t.ref,e.return=t,t.child=e}function Wm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ni(o,r)&&e.ref===t.ref)if(Et=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Et=!0);else return t.lanes=e.lanes,Fn(e,t,i)}return kl(e,t,n,r,i)}function Qm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(es,Ft),Ft|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(es,Ft),Ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_e(es,Ft),Ft|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,_e(es,Ft),Ft|=r;return xt(e,t,i,n),t.child}function Hm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kl(e,t,n,r,i){var o=Rt(n)?Cr:pt.current;return o=cs(t,o),is(t,i),n=yc(e,t,n,r,o,i),r=bc(),e!==null&&!Et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Le&&r&&ac(t),t.flags|=1,xt(e,t,n,i),t.child)}function rd(e,t,n,r,i){if(Rt(n)){var o=!0;ko(t)}else o=!1;if(is(t,i),t.stateNode===null)io(e,t),Bm(t,n,r),wl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=Rt(n)?Cr:pt.current,u=cs(t,u));var x=n.getDerivedStateFromProps,f=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Gu(t,a,r,u),Yn=!1;var p=t.memoizedState;a.state=p,_o(t,r,a,i),c=t.memoizedState,l!==r||p!==c||_t.current||Yn?(typeof x=="function"&&(bl(t,n,x,r),c=t.memoizedState),(l=Yn||Xu(t,n,l,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,bm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Zt(t.type,l),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Yt(c):(c=Rt(n)?Cr:pt.current,c=cs(t,c));var j=n.getDerivedStateFromProps;(x=typeof j=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==c)&&Gu(t,a,r,c),Yn=!1,p=t.memoizedState,a.state=p,_o(t,r,a,i);var b=t.memoizedState;l!==f||p!==b||_t.current||Yn?(typeof j=="function"&&(bl(t,n,j,r),b=t.memoizedState),(u=Yn||Xu(t,n,u,r,p,b,c)||!1)?(x||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,b,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,b,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),a.props=r,a.state=b,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,o,i)}function Nl(e,t,n,r,i,o){Hm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Uu(t,n,!1),Fn(e,t,o);r=t.stateNode,X0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ds(t,e.child,null,o),t.child=ds(t,null,l,o)):xt(e,t,l,o),t.memoizedState=r.state,i&&Uu(t,n,!0),t.child}function Vm(e){var t=e.stateNode;t.pendingContext?Bu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bu(e,t.context,!1),hc(e,t.containerInfo)}function sd(e,t,n,r,i){return us(),cc(i),t.flags|=256,xt(e,t,n,r),t.child}var Sl={dehydrated:null,treeContext:null,retryLane:0};function Cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ym(e,t,n){var r=t.pendingProps,i=Oe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_e(Oe,i&1),e===null)return vl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Go(a,r,0,null),e=Nr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Cl(n),t.memoizedState=Sl,e):kc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return G0(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ar(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=ar(l,o):(o=Nr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Cl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Sl,r}return o=e.child,e=o.sibling,r=ar(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function kc(e,t){return t=Go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Di(e,t,n,r){return r!==null&&cc(r),ds(t,e.child,null,n),e=kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function G0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ea(Error(A(422))),Di(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Go({mode:"visible",children:r.children},i,0,null),o=Nr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ds(t,e.child,null,a),t.child.memoizedState=Cl(a),t.memoizedState=Sl,o);if(!(t.mode&1))return Di(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(A(419)),r=Ea(o,r,void 0),Di(e,t,a,r)}if(l=(a&e.childLanes)!==0,Et||l){if(r=it,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,In(e,i),sn(r,e,i,-1))}return Rc(),r=Ea(Error(A(421))),Di(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ux.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Dt=rr(i.nextSibling),Ot=t,Le=!0,tn=null,e!==null&&(Wt[Qt++]=_n,Wt[Qt++]=Rn,Wt[Qt++]=Er,_n=e.id,Rn=e.overflow,Er=t),t=kc(t,r.children),t.flags|=4096,t)}function id(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yl(e.return,t,n)}function _a(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Km(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xt(e,t,r.children,n),r=Oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&id(e,n,t);else if(e.tag===19)id(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e(Oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ro(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_a(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_a(t,!0,n,null,o);break;case"together":_a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function io(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=ar(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ar(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function J0(e,t,n){switch(t.tag){case 3:Vm(t),us();break;case 5:wm(t);break;case 1:Rt(t.type)&&ko(t);break;case 4:hc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_e(Co,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_e(Oe,Oe.current&1),t.flags|=128,null):n&t.child.childLanes?Ym(e,t,n):(_e(Oe,Oe.current&1),e=Fn(e,t,n),e!==null?e.sibling:null);_e(Oe,Oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Km(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Oe,Oe.current),r)break;return null;case 22:case 23:return t.lanes=0,Qm(e,t,n)}return Fn(e,t,n)}var Xm,El,Gm,Jm;Xm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};El=function(){};Gm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jr(kn.current);var o=null;switch(n){case"input":i=Ka(e,i),r=Ka(e,r),o=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),o=[];break;case"textarea":i=Ja(e,i),r=Ja(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wo)}el(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ks.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Pe("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Jm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rs(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Z0(e,t,n){var r=t.pendingProps;switch(lc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(t),null;case 1:return Rt(t.type)&&jo(),ft(t),null;case 3:return r=t.stateNode,fs(),Te(_t),Te(pt),gc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tn!==null&&(Il(tn),tn=null))),El(e,t),ft(t),null;case 5:xc(t);var i=jr(ai.current);if(n=t.type,e!==null&&t.stateNode!=null)Gm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return ft(t),null}if(e=jr(kn.current),Ii(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[bn]=t,r[ii]=o,e=(t.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<Os.length;i++)Pe(Os[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":pu(r,o),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Pe("invalid",r);break;case"textarea":xu(r,o),Pe("invalid",r)}el(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,l,e),i=["children",""+l]):Ks.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Pe("scroll",r)}switch(n){case"input":Ci(r),hu(r,o,!0);break;case"textarea":Ci(r),gu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=wo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[bn]=t,e[ii]=r,Xm(e,t,!1,!1),t.stateNode=e;e:{switch(a=tl(n,r),n){case"dialog":Pe("cancel",e),Pe("close",e),i=r;break;case"iframe":case"object":case"embed":Pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Os.length;i++)Pe(Os[i],e);i=r;break;case"source":Pe("error",e),i=r;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),i=r;break;case"details":Pe("toggle",e),i=r;break;case"input":pu(e,r),i=Ka(e,r),Pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Pe("invalid",e);break;case"textarea":xu(e,r),i=Ja(e,r),Pe("invalid",e);break;default:i=r}el(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Rf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ef(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xs(e,c):typeof c=="number"&&Xs(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ks.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Pe("scroll",e):c!=null&&Vl(e,o,c,a))}switch(n){case"input":Ci(e),hu(e,r,!1);break;case"textarea":Ci(e),gu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+lr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ts(e,!!r.multiple,o,!1):r.defaultValue!=null&&ts(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ft(t),null;case 6:if(e&&t.stateNode!=null)Jm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=jr(ai.current),jr(kn.current),Ii(t)){if(r=t.stateNode,n=t.memoizedProps,r[bn]=t,(o=r.nodeValue!==n)&&(e=Ot,e!==null))switch(e.tag){case 3:Mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=t,t.stateNode=r}return ft(t),null;case 13:if(Te(Oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&Dt!==null&&t.mode&1&&!(t.flags&128))xm(),us(),t.flags|=98560,o=!1;else if(o=Ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[bn]=t}else us(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ft(t),o=!1}else tn!==null&&(Il(tn),tn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Oe.current&1?nt===0&&(nt=3):Rc())),t.updateQueue!==null&&(t.flags|=4),ft(t),null);case 4:return fs(),El(e,t),e===null&&ri(t.stateNode.containerInfo),ft(t),null;case 10:return fc(t.type._context),ft(t),null;case 17:return Rt(t.type)&&jo(),ft(t),null;case 19:if(Te(Oe),o=t.memoizedState,o===null)return ft(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Rs(o,!1);else{if(nt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ro(e),a!==null){for(t.flags|=128,Rs(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e(Oe,Oe.current&1|2),t.child}e=e.sibling}o.tail!==null&&He()>ps&&(t.flags|=128,r=!0,Rs(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ro(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Le)return ft(t),null}else 2*He()-o.renderingStartTime>ps&&n!==1073741824&&(t.flags|=128,r=!0,Rs(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=He(),t.sibling=null,n=Oe.current,_e(Oe,r?n&1|2:n&1),t):(ft(t),null);case 22:case 23:return _c(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ft&1073741824&&(ft(t),t.subtreeFlags&6&&(t.flags|=8192)):ft(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function ex(e,t){switch(lc(t),t.tag){case 1:return Rt(t.type)&&jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fs(),Te(_t),Te(pt),gc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xc(t),null;case 13:if(Te(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));us()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Oe),null;case 4:return fs(),null;case 10:return fc(t.type._context),null;case 22:case 23:return _c(),null;case 24:return null;default:return null}}var Oi=!1,mt=!1,tx=typeof WeakSet=="function"?WeakSet:Set,te=null;function Zr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(e,t,r)}else n.current=null}function _l(e,t,n){try{n()}catch(r){qe(e,t,r)}}var od=!1;function nx(e,t){if(dl=vo,e=rm(),oc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,x=0,f=e,p=null;t:for(;;){for(var j;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(j=f.firstChild)!==null;)p=f,f=j;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++x===r&&(c=a),(j=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=j}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(fl={focusedElem:e,selectionRange:n},vo=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var k=b.memoizedProps,R=b.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?k:Zt(t.type,k),R);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(_){qe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return b=od,od=!1,b}function Qs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&_l(t,n,o)}i=i.next}while(i!==r)}}function Ko(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zm(e){var t=e.alternate;t!==null&&(e.alternate=null,Zm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bn],delete t[ii],delete t[hl],delete t[O0],delete t[A0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ep(e){return e.tag===5||e.tag===3||e.tag===4}function ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wo));else if(r!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}function Tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Tl(e,t,n),e=e.sibling;e!==null;)Tl(e,t,n),e=e.sibling}var at=null,en=!1;function qn(e,t,n){for(n=n.child;n!==null;)tp(e,t,n),n=n.sibling}function tp(e,t,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Bo,n)}catch{}switch(n.tag){case 5:mt||Zr(n,t);case 6:var r=at,i=en;at=null,qn(e,t,n),at=r,en=i,at!==null&&(en?(e=at,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(en?(e=at,n=n.stateNode,e.nodeType===8?wa(e.parentNode,n):e.nodeType===1&&wa(e,n),ei(e)):wa(at,n.stateNode));break;case 4:r=at,i=en,at=n.stateNode.containerInfo,en=!0,qn(e,t,n),at=r,en=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&_l(n,t,a),i=i.next}while(i!==r)}qn(e,t,n);break;case 1:if(!mt&&(Zr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){qe(n,t,l)}qn(e,t,n);break;case 21:qn(e,t,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,qn(e,t,n),mt=r):qn(e,t,n);break;default:qn(e,t,n)}}function ld(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tx),t.forEach(function(r){var i=dx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:at=l.stateNode,en=!1;break e;case 3:at=l.stateNode.containerInfo,en=!0;break e;case 4:at=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(at===null)throw Error(A(160));tp(o,a,i),at=null,en=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){qe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)np(t,e),t=t.sibling}function np(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Gt(t,e),hn(e),r&4){try{Qs(3,e,e.return),Ko(3,e)}catch(k){qe(e,e.return,k)}try{Qs(5,e,e.return)}catch(k){qe(e,e.return,k)}}break;case 1:Gt(t,e),hn(e),r&512&&n!==null&&Zr(n,n.return);break;case 5:if(Gt(t,e),hn(e),r&512&&n!==null&&Zr(n,n.return),e.flags&32){var i=e.stateNode;try{Xs(i,"")}catch(k){qe(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Nf(i,o),tl(l,a);var u=tl(l,o);for(a=0;a<c.length;a+=2){var x=c[a],f=c[a+1];x==="style"?Rf(i,f):x==="dangerouslySetInnerHTML"?Ef(i,f):x==="children"?Xs(i,f):Vl(i,x,f,u)}switch(l){case"input":Xa(i,o);break;case"textarea":Sf(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var j=o.value;j!=null?ts(i,!!o.multiple,j,!1):p!==!!o.multiple&&(o.defaultValue!=null?ts(i,!!o.multiple,o.defaultValue,!0):ts(i,!!o.multiple,o.multiple?[]:"",!1))}i[ii]=o}catch(k){qe(e,e.return,k)}}break;case 6:if(Gt(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){qe(e,e.return,k)}}break;case 3:if(Gt(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ei(t.containerInfo)}catch(k){qe(e,e.return,k)}break;case 4:Gt(t,e),hn(e);break;case 13:Gt(t,e),hn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cc=He())),r&4&&ld(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(mt=(u=mt)||x,Gt(t,e),mt=u):Gt(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!x&&e.mode&1)for(te=e,x=e.child;x!==null;){for(f=te=x;te!==null;){switch(p=te,j=p.child,p.tag){case 0:case 11:case 14:case 15:Qs(4,p,p.return);break;case 1:Zr(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(k){qe(r,n,k)}}break;case 5:Zr(p,p.return);break;case 22:if(p.memoizedState!==null){ud(f);continue}}j!==null?(j.return=p,te=j):ud(f)}x=x.sibling}e:for(x=null,f=e;;){if(f.tag===5){if(x===null){x=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=_f("display",a))}catch(k){qe(e,e.return,k)}}}else if(f.tag===6){if(x===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(k){qe(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;x===f&&(x=null),f=f.return}x===f&&(x=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gt(t,e),hn(e),r&4&&ld(e);break;case 21:break;default:Gt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ep(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xs(i,""),r.flags&=-33);var o=ad(e);Tl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ad(e);Pl(e,l,a);break;default:throw Error(A(161))}}catch(c){qe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rx(e,t,n){te=e,rp(e)}function rp(e,t,n){for(var r=(e.mode&1)!==0;te!==null;){var i=te,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Oi;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||mt;l=Oi;var u=mt;if(Oi=a,(mt=c)&&!u)for(te=i;te!==null;)a=te,c=a.child,a.tag===22&&a.memoizedState!==null?dd(i):c!==null?(c.return=a,te=c):dd(i);for(;o!==null;)te=o,rp(o),o=o.sibling;te=i,Oi=l,mt=u}cd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,te=o):cd(e)}}function cd(e){for(;te!==null;){var t=te;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:mt||Ko(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Vu(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vu(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var x=u.memoizedState;if(x!==null){var f=x.dehydrated;f!==null&&ei(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}mt||t.flags&512&&Rl(t)}catch(p){qe(t,t.return,p)}}if(t===e){te=null;break}if(n=t.sibling,n!==null){n.return=t.return,te=n;break}te=t.return}}function ud(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,te=n;break}te=t.return}}function dd(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ko(4,t)}catch(c){qe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){qe(t,i,c)}}var o=t.return;try{Rl(t)}catch(c){qe(t,o,c)}break;case 5:var a=t.return;try{Rl(t)}catch(c){qe(t,a,c)}}}catch(c){qe(t,t.return,c)}if(t===e){te=null;break}var l=t.sibling;if(l!==null){l.return=t.return,te=l;break}te=t.return}}var sx=Math.ceil,Lo=On.ReactCurrentDispatcher,Nc=On.ReactCurrentOwner,Vt=On.ReactCurrentBatchConfig,ge=0,it=null,Ke=null,lt=0,Ft=0,es=dr(0),nt=0,di=null,Rr=0,Xo=0,Sc=0,Hs=null,Ct=null,Cc=0,ps=1/0,Cn=null,zo=!1,Ll=null,ir=null,Ai=!1,Zn=null,Mo=0,Vs=0,zl=null,oo=-1,ao=0;function gt(){return ge&6?He():oo!==-1?oo:oo=He()}function or(e){return e.mode&1?ge&2&&lt!==0?lt&-lt:B0.transition!==null?(ao===0&&(ao=Bf()),ao):(e=ke,e!==0||(e=window.event,e=e===void 0?16:Yf(e.type)),e):1}function sn(e,t,n,r){if(50<Vs)throw Vs=0,zl=null,Error(A(185));pi(e,n,r),(!(ge&2)||e!==it)&&(e===it&&(!(ge&2)&&(Xo|=n),nt===4&&Gn(e,lt)),Pt(e,r),n===1&&ge===0&&!(t.mode&1)&&(ps=He()+500,Ho&&fr()))}function Pt(e,t){var n=e.callbackNode;Bh(e,t);var r=go(e,e===it?lt:0);if(r===0)n!==null&&bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bu(n),t===1)e.tag===0?$0(fd.bind(null,e)):mm(fd.bind(null,e)),F0(function(){!(ge&6)&&fr()}),n=null;else{switch(Uf(r)){case 1:n=Jl;break;case 4:n=Af;break;case 16:n=xo;break;case 536870912:n=$f;break;default:n=xo}n=dp(n,sp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sp(e,t){if(oo=-1,ao=0,ge&6)throw Error(A(327));var n=e.callbackNode;if(os()&&e.callbackNode!==n)return null;var r=go(e,e===it?lt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Io(e,r);else{t=r;var i=ge;ge|=2;var o=op();(it!==e||lt!==t)&&(Cn=null,ps=He()+500,kr(e,t));do try{ax();break}catch(l){ip(e,l)}while(1);dc(),Lo.current=o,ge=i,Ke!==null?t=0:(it=null,lt=0,t=nt)}if(t!==0){if(t===2&&(i=ol(e),i!==0&&(r=i,t=Ml(e,i))),t===1)throw n=di,kr(e,0),Gn(e,r),Pt(e,He()),n;if(t===6)Gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ix(i)&&(t=Io(e,r),t===2&&(o=ol(e),o!==0&&(r=o,t=Ml(e,o))),t===1))throw n=di,kr(e,0),Gn(e,r),Pt(e,He()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:yr(e,Ct,Cn);break;case 3:if(Gn(e,r),(r&130023424)===r&&(t=Cc+500-He(),10<t)){if(go(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pl(yr.bind(null,e,Ct,Cn),t);break}yr(e,Ct,Cn);break;case 4:if(Gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-rn(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sx(r/1960))-r,10<r){e.timeoutHandle=pl(yr.bind(null,e,Ct,Cn),r);break}yr(e,Ct,Cn);break;case 5:yr(e,Ct,Cn);break;default:throw Error(A(329))}}}return Pt(e,He()),e.callbackNode===n?sp.bind(null,e):null}function Ml(e,t){var n=Hs;return e.current.memoizedState.isDehydrated&&(kr(e,t).flags|=256),e=Io(e,t),e!==2&&(t=Ct,Ct=n,t!==null&&Il(t)),e}function Il(e){Ct===null?Ct=e:Ct.push.apply(Ct,e)}function ix(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!on(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gn(e,t){for(t&=~Sc,t&=~Xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rn(t),r=1<<n;e[n]=-1,t&=~r}}function fd(e){if(ge&6)throw Error(A(327));os();var t=go(e,0);if(!(t&1))return Pt(e,He()),null;var n=Io(e,t);if(e.tag!==0&&n===2){var r=ol(e);r!==0&&(t=r,n=Ml(e,r))}if(n===1)throw n=di,kr(e,0),Gn(e,t),Pt(e,He()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yr(e,Ct,Cn),Pt(e,He()),null}function Ec(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(ps=He()+500,Ho&&fr())}}function Pr(e){Zn!==null&&Zn.tag===0&&!(ge&6)&&os();var t=ge;ge|=1;var n=Vt.transition,r=ke;try{if(Vt.transition=null,ke=1,e)return e()}finally{ke=r,Vt.transition=n,ge=t,!(ge&6)&&fr()}}function _c(){Ft=es.current,Te(es)}function kr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,I0(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:fs(),Te(_t),Te(pt),gc();break;case 5:xc(r);break;case 4:fs();break;case 13:Te(Oe);break;case 19:Te(Oe);break;case 10:fc(r.type._context);break;case 22:case 23:_c()}n=n.return}if(it=e,Ke=e=ar(e.current,null),lt=Ft=t,nt=0,di=null,Sc=Xo=Rr=0,Ct=Hs=null,wr!==null){for(t=0;t<wr.length;t++)if(n=wr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}wr=null}return e}function ip(e,t){do{var n=Ke;try{if(dc(),ro.current=To,Po){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Po=!1}if(_r=0,st=tt=Ae=null,Ws=!1,li=0,Nc.current=null,n===null||n.return===null){nt=1,di=t,Ke=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=lt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,x=l,f=x.tag;if(!(x.mode&1)&&(f===0||f===11||f===15)){var p=x.alternate;p?(x.updateQueue=p.updateQueue,x.memoizedState=p.memoizedState,x.lanes=p.lanes):(x.updateQueue=null,x.memoizedState=null)}var j=Zu(a);if(j!==null){j.flags&=-257,ed(j,a,l,o,t),j.mode&1&&Ju(o,u,t),t=j,c=u;var b=t.updateQueue;if(b===null){var k=new Set;k.add(c),t.updateQueue=k}else b.add(c);break e}else{if(!(t&1)){Ju(o,u,t),Rc();break e}c=Error(A(426))}}else if(Le&&l.mode&1){var R=Zu(a);if(R!==null){!(R.flags&65536)&&(R.flags|=256),ed(R,a,l,o,t),cc(ms(c,l));break e}}o=c=ms(c,l),nt!==4&&(nt=2),Hs===null?Hs=[o]:Hs.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Um(o,c,t);Hu(o,v);break e;case 1:l=c;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ir===null||!ir.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=qm(o,l,t);Hu(o,_);break e}}o=o.return}while(o!==null)}lp(n)}catch(P){t=P,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(1)}function op(){var e=Lo.current;return Lo.current=To,e===null?To:e}function Rc(){(nt===0||nt===3||nt===2)&&(nt=4),it===null||!(Rr&268435455)&&!(Xo&268435455)||Gn(it,lt)}function Io(e,t){var n=ge;ge|=2;var r=op();(it!==e||lt!==t)&&(Cn=null,kr(e,t));do try{ox();break}catch(i){ip(e,i)}while(1);if(dc(),ge=n,Lo.current=r,Ke!==null)throw Error(A(261));return it=null,lt=0,nt}function ox(){for(;Ke!==null;)ap(Ke)}function ax(){for(;Ke!==null&&!Lh();)ap(Ke)}function ap(e){var t=up(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?lp(e):Ke=t,Nc.current=null}function lp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ex(n,t),n!==null){n.flags&=32767,Ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{nt=6,Ke=null;return}}else if(n=Z0(n,t,Ft),n!==null){Ke=n;return}if(t=t.sibling,t!==null){Ke=t;return}Ke=t=e}while(t!==null);nt===0&&(nt=5)}function yr(e,t,n){var r=ke,i=Vt.transition;try{Vt.transition=null,ke=1,lx(e,t,n,r)}finally{Vt.transition=i,ke=r}return null}function lx(e,t,n,r){do os();while(Zn!==null);if(ge&6)throw Error(A(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Uh(e,o),e===it&&(Ke=it=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ai||(Ai=!0,dp(xo,function(){return os(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Vt.transition,Vt.transition=null;var a=ke;ke=1;var l=ge;ge|=4,Nc.current=null,nx(e,n),np(n,e),_0(fl),vo=!!dl,fl=dl=null,e.current=n,rx(n),zh(),ge=l,ke=a,Vt.transition=o}else e.current=n;if(Ai&&(Ai=!1,Zn=e,Mo=i),o=e.pendingLanes,o===0&&(ir=null),Fh(n.stateNode),Pt(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zo)throw zo=!1,e=Ll,Ll=null,e;return Mo&1&&e.tag!==0&&os(),o=e.pendingLanes,o&1?e===zl?Vs++:(Vs=0,zl=e):Vs=0,fr(),null}function os(){if(Zn!==null){var e=Uf(Mo),t=Vt.transition,n=ke;try{if(Vt.transition=null,ke=16>e?16:e,Zn===null)var r=!1;else{if(e=Zn,Zn=null,Mo=0,ge&6)throw Error(A(331));var i=ge;for(ge|=4,te=e.current;te!==null;){var o=te,a=o.child;if(te.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(te=u;te!==null;){var x=te;switch(x.tag){case 0:case 11:case 15:Qs(8,x,o)}var f=x.child;if(f!==null)f.return=x,te=f;else for(;te!==null;){x=te;var p=x.sibling,j=x.return;if(Zm(x),x===u){te=null;break}if(p!==null){p.return=j,te=p;break}te=j}}}var b=o.alternate;if(b!==null){var k=b.child;if(k!==null){b.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}te=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,te=a;else e:for(;te!==null;){if(o=te,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qs(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,te=v;break e}te=o.return}}var m=e.current;for(te=m;te!==null;){a=te;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,te=y;else e:for(a=m;te!==null;){if(l=te,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ko(9,l)}}catch(P){qe(l,l.return,P)}if(l===a){te=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,te=_;break e}te=l.return}}if(ge=i,fr(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Bo,e)}catch{}r=!0}return r}finally{ke=n,Vt.transition=t}}return!1}function md(e,t,n){t=ms(n,t),t=Um(e,t,1),e=sr(e,t,1),t=gt(),e!==null&&(pi(e,1,t),Pt(e,t))}function qe(e,t,n){if(e.tag===3)md(e,e,n);else for(;t!==null;){if(t.tag===3){md(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){e=ms(n,e),e=qm(t,e,1),t=sr(t,e,1),e=gt(),t!==null&&(pi(t,1,e),Pt(t,e));break}}t=t.return}}function cx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,it===e&&(lt&n)===n&&(nt===4||nt===3&&(lt&130023424)===lt&&500>He()-Cc?kr(e,0):Sc|=n),Pt(e,t)}function cp(e,t){t===0&&(e.mode&1?(t=Ri,Ri<<=1,!(Ri&130023424)&&(Ri=4194304)):t=1);var n=gt();e=In(e,t),e!==null&&(pi(e,t,n),Pt(e,n))}function ux(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cp(e,n)}function dx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),cp(e,n)}var up;up=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)Et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Et=!1,J0(e,t,n);Et=!!(e.flags&131072)}else Et=!1,Le&&t.flags&1048576&&pm(t,So,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;io(e,t),e=t.pendingProps;var i=cs(t,pt.current);is(t,n),i=yc(null,t,r,e,i,n);var o=bc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rt(r)?(o=!0,ko(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pc(t),i.updater=Yo,t.stateNode=i,i._reactInternals=t,wl(t,r,e,n),t=Nl(null,t,r,!0,o,n)):(t.tag=0,Le&&o&&ac(t),xt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(io(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=mx(r),e=Zt(r,e),i){case 0:t=kl(null,t,r,e,n);break e;case 1:t=rd(null,t,r,e,n);break e;case 11:t=td(null,t,r,e,n);break e;case 14:t=nd(null,t,r,Zt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),kl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),rd(e,t,r,i,n);case 3:e:{if(Vm(t),e===null)throw Error(A(387));r=t.pendingProps,o=t.memoizedState,i=o.element,bm(e,t),_o(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ms(Error(A(423)),t),t=sd(e,t,r,n,i);break e}else if(r!==i){i=ms(Error(A(424)),t),t=sd(e,t,r,n,i);break e}else for(Dt=rr(t.stateNode.containerInfo.firstChild),Ot=t,Le=!0,tn=null,n=vm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),r===i){t=Fn(e,t,n);break e}xt(e,t,r,n)}t=t.child}return t;case 5:return wm(t),e===null&&vl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ml(r,i)?a=null:o!==null&&ml(r,o)&&(t.flags|=32),Hm(e,t),xt(e,t,a,n),t.child;case 6:return e===null&&vl(t),null;case 13:return Ym(e,t,n);case 4:return hc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ds(t,null,r,n):xt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),td(e,t,r,i,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,_e(Co,r._currentValue),r._currentValue=a,o!==null)if(on(o.value,a)){if(o.children===i.children&&!_t.current){t=Fn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Tn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var x=u.pending;x===null?c.next=c:(c.next=x.next,x.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),yl(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(A(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),yl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}xt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,is(t,n),i=Yt(i),r=r(i),t.flags|=1,xt(e,t,r,n),t.child;case 14:return r=t.type,i=Zt(r,t.pendingProps),i=Zt(r.type,i),nd(e,t,r,i,n);case 15:return Wm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),io(e,t),t.tag=1,Rt(r)?(e=!0,ko(t)):e=!1,is(t,n),Bm(t,r,i),wl(t,r,i,n),Nl(null,t,r,!0,e,n);case 19:return Km(e,t,n);case 22:return Qm(e,t,n)}throw Error(A(156,t.tag))};function dp(e,t){return Of(e,t)}function fx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,n,r){return new fx(e,t,n,r)}function Pc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mx(e){if(typeof e=="function")return Pc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kl)return 11;if(e===Xl)return 14}return 2}function ar(e,t){var n=e.alternate;return n===null?(n=Ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Pc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Wr:return Nr(n.children,i,o,t);case Yl:a=8,i|=8;break;case Qa:return e=Ht(12,n,t,i|2),e.elementType=Qa,e.lanes=o,e;case Ha:return e=Ht(13,n,t,i),e.elementType=Ha,e.lanes=o,e;case Va:return e=Ht(19,n,t,i),e.elementType=Va,e.lanes=o,e;case wf:return Go(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yf:a=10;break e;case bf:a=9;break e;case Kl:a=11;break e;case Xl:a=14;break e;case Vn:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Ht(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Nr(e,t,n,r){return e=Ht(7,e,r,t),e.lanes=n,e}function Go(e,t,n,r){return e=Ht(22,e,r,t),e.elementType=wf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ra(e,t,n){return e=Ht(6,e,null,t),e.lanes=n,e}function Pa(e,t,n){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function px(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tc(e,t,n,r,i,o,a,l,c){return e=new px(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ht(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pc(o),e}function hx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fp(e){if(!e)return cr;e=e._reactInternals;e:{if(Lr(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Rt(n))return fm(e,n,t)}return t}function mp(e,t,n,r,i,o,a,l,c){return e=Tc(n,r,!0,e,i,o,a,l,c),e.context=fp(null),n=e.current,r=gt(),i=or(n),o=Tn(r,i),o.callback=t??null,sr(n,o,i),e.current.lanes=i,pi(e,i,r),Pt(e,r),e}function Jo(e,t,n,r){var i=t.current,o=gt(),a=or(i);return n=fp(n),t.context===null?t.context=n:t.pendingContext=n,t=Tn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sr(i,t,a),e!==null&&(sn(e,i,a,o),no(e,i,a)),a}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lc(e,t){pd(e,t),(e=e.alternate)&&pd(e,t)}function xx(){return null}var pp=typeof reportError=="function"?reportError:function(e){console.error(e)};function zc(e){this._internalRoot=e}Zo.prototype.render=zc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Jo(e,t,null,null)};Zo.prototype.unmount=zc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pr(function(){Jo(null,e,null,null)}),t[Mn]=null}};function Zo(e){this._internalRoot=e}Zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xn.length&&t!==0&&t<Xn[n].priority;n++);Xn.splice(n,0,e),n===0&&Vf(e)}};function Mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hd(){}function gx(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Fo(a);o.call(u)}}var a=mp(t,r,e,0,null,!1,!1,"",hd);return e._reactRootContainer=a,e[Mn]=a.current,ri(e.nodeType===8?e.parentNode:e),Pr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Fo(c);l.call(u)}}var c=Tc(e,0,!1,null,null,!1,!1,"",hd);return e._reactRootContainer=c,e[Mn]=c.current,ri(e.nodeType===8?e.parentNode:e),Pr(function(){Jo(t,c,n,r)}),c}function ta(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Fo(a);l.call(c)}}Jo(t,a,e,i)}else a=gx(n,t,e,i,r);return Fo(a)}qf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ds(t.pendingLanes);n!==0&&(Zl(t,n|1),Pt(t,He()),!(ge&6)&&(ps=He()+500,fr()))}break;case 13:Pr(function(){var r=In(e,1);if(r!==null){var i=gt();sn(r,e,1,i)}}),Lc(e,1)}};ec=function(e){if(e.tag===13){var t=In(e,134217728);if(t!==null){var n=gt();sn(t,e,134217728,n)}Lc(e,134217728)}};Wf=function(e){if(e.tag===13){var t=or(e),n=In(e,t);if(n!==null){var r=gt();sn(n,e,t,r)}Lc(e,t)}};Qf=function(){return ke};Hf=function(e,t){var n=ke;try{return ke=e,t()}finally{ke=n}};rl=function(e,t,n){switch(t){case"input":if(Xa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Qo(r);if(!i)throw Error(A(90));kf(r),Xa(r,i)}}}break;case"textarea":Sf(e,n);break;case"select":t=n.value,t!=null&&ts(e,!!n.multiple,t,!1)}};Lf=Ec;zf=Pr;var vx={usingClientEntryPoint:!1,Events:[xi,Yr,Qo,Pf,Tf,Ec]},Ps={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yx={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ff(e),e===null?null:e.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{Bo=$i.inject(yx),jn=$i}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vx;$t.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mc(t))throw Error(A(200));return hx(e,t,null,n)};$t.createRoot=function(e,t){if(!Mc(e))throw Error(A(299));var n=!1,r="",i=pp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tc(e,1,!1,null,null,n,!1,r,i),e[Mn]=t.current,ri(e.nodeType===8?e.parentNode:e),new zc(t)};$t.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Ff(t),e=e===null?null:e.stateNode,e};$t.flushSync=function(e){return Pr(e)};$t.hydrate=function(e,t,n){if(!ea(t))throw Error(A(200));return ta(null,e,t,!0,n)};$t.hydrateRoot=function(e,t,n){if(!Mc(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=pp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=mp(t,null,e,1,n??null,i,!1,o,a),e[Mn]=t.current,ri(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Zo(t)};$t.render=function(e,t,n){if(!ea(t))throw Error(A(200));return ta(null,e,t,!1,n)};$t.unmountComponentAtNode=function(e){if(!ea(e))throw Error(A(40));return e._reactRootContainer?(Pr(function(){ta(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};$t.unstable_batchedUpdates=Ec;$t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ea(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return ta(e,t,n,!1,r)};$t.version="18.3.1-next-f1338f8080-20240426";function hp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hp)}catch(e){console.error(e)}}hp(),hf.exports=$t;var vi=hf.exports,xd=vi;qa.createRoot=xd.createRoot,qa.hydrateRoot=xd.hydrateRoot;const bx="modulepreload",wx=function(e){return"/"+e},gd={},xp=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=wx(o),o in gd)return;gd[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let x=i.length-1;x>=0;x--){const f=i[x];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":bx,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((x,f)=>{u.addEventListener("load",x),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};var vd="popstate";function jx(e={}){function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Fl("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:fi(i)}return Nx(t,n,null,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function an(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kx(){return Math.random().toString(36).substring(2,10)}function yd(e,t){return{usr:e.state,key:e.key,idx:t}}function Fl(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?vs(t):t,state:n,key:t&&t.key||r||kx()}}function fi({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function vs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Nx(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l="POP",c=null,u=x();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function x(){return(a.state||{idx:null}).idx}function f(){l="POP";let R=x(),v=R==null?null:R-u;u=R,c&&c({action:l,location:k.location,delta:v})}function p(R,v){l="PUSH";let m=Fl(k.location,R,v);n&&n(m,R),u=x()+1;let y=yd(m,u),_=k.createHref(m);try{a.pushState(y,"",_)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(_)}o&&c&&c({action:l,location:k.location,delta:1})}function j(R,v){l="REPLACE";let m=Fl(k.location,R,v);n&&n(m,R),u=x();let y=yd(m,u),_=k.createHref(m);a.replaceState(y,"",_),o&&c&&c({action:l,location:k.location,delta:0})}function b(R){return Sx(R)}let k={get action(){return l},get location(){return e(i,a)},listen(R){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(vd,f),c=R,()=>{i.removeEventListener(vd,f),c=null}},createHref(R){return t(i,R)},createURL:b,encodeLocation(R){let v=b(R);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:j,go(R){return a.go(R)}};return k}function Sx(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ze(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:fi(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function gp(e,t,n="/"){return Cx(e,t,n,!1)}function Cx(e,t,n,r){let i=typeof t=="string"?vs(t):t,o=Dn(i.pathname||"/",n);if(o==null)return null;let a=vp(e);Ex(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=Ox(o);l=Fx(a[c],u,r)}return l}function vp(e,t=[],n=[],r=""){let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(ze(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let u=Ln([r,c.relativePath]),x=n.concat(c);o.children&&o.children.length>0&&(ze(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),vp(o.children,t,x,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Mx(u,o.index),routesMeta:x})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of yp(o.path))i(o,a,c)}),t}function yp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=yp(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Ex(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ix(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var _x=/^:[\w-]+$/,Rx=3,Px=2,Tx=1,Lx=10,zx=-2,bd=e=>e==="*";function Mx(e,t){let n=e.split("/"),r=n.length;return n.some(bd)&&(r+=zx),t&&(r+=Px),n.filter(i=>!bd(i)).reduce((i,o)=>i+(_x.test(o)?Rx:o===""?Tx:Lx),r)}function Ix(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Fx(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,x=o==="/"?t:t.slice(o.length)||"/",f=Do({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},x),p=c.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Do({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},x)),!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Ln([o,f.pathname]),pathnameBase:Ux(Ln([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=Ln([o,f.pathnameBase]))}return a}function Do(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Dx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,{paramName:x,isOptional:f},p)=>{if(x==="*"){let b=l[p]||"";a=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const j=l[p];return f&&!j?u[x]=void 0:u[x]=(j||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Dx(e,t=!1,n=!0){an(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Ox(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return an(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Dn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ax(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?vs(e):e;return{pathname:n?n.startsWith("/")?n:$x(n,t):t,search:qx(r),hash:Wx(i)}}function $x(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ta(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Bx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ic(e){let t=Bx(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Fc(e,t,n,r=!1){let i;typeof e=="string"?i=vs(e):(i={...e},ze(!i.pathname||!i.pathname.includes("?"),Ta("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),Ta("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),Ta("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let c=Ax(i,l),u=a&&a!=="/"&&a.endsWith("/"),x=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||x)&&(c.pathname+="/"),c}var Ln=e=>e.join("/").replace(/\/\/+/g,"/"),Ux=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Wx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Qx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var bp=["POST","PUT","PATCH","DELETE"];new Set(bp);var Hx=["GET",...bp];new Set(Hx);var ys=d.createContext(null);ys.displayName="DataRouter";var na=d.createContext(null);na.displayName="DataRouterState";d.createContext(!1);var wp=d.createContext({isTransitioning:!1});wp.displayName="ViewTransition";var Vx=d.createContext(new Map);Vx.displayName="Fetchers";var Yx=d.createContext(null);Yx.displayName="Await";var ln=d.createContext(null);ln.displayName="Navigation";var yi=d.createContext(null);yi.displayName="Location";var Xt=d.createContext({outlet:null,matches:[],isDataRoute:!1});Xt.displayName="Route";var Dc=d.createContext(null);Dc.displayName="RouteError";function Kx(e,{relative:t}={}){ze(bs(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=d.useContext(ln),{hash:i,pathname:o,search:a}=bi(e,{relative:t}),l=o;return n!=="/"&&(l=o==="/"?n:Ln([n,o])),r.createHref({pathname:l,search:a,hash:i})}function bs(){return d.useContext(yi)!=null}function cn(){return ze(bs(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(yi).location}var jp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function kp(e){d.useContext(ln).static||d.useLayoutEffect(e)}function Ut(){let{isDataRoute:e}=d.useContext(Xt);return e?dg():Xx()}function Xx(){ze(bs(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(ys),{basename:t,navigator:n}=d.useContext(ln),{matches:r}=d.useContext(Xt),{pathname:i}=cn(),o=JSON.stringify(Ic(r)),a=d.useRef(!1);return kp(()=>{a.current=!0}),d.useCallback((c,u={})=>{if(an(a.current,jp),!a.current)return;if(typeof c=="number"){n.go(c);return}let x=Fc(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:Ln([t,x.pathname])),(u.replace?n.replace:n.push)(x,u.state,u)},[t,n,o,i,e])}var Gx=d.createContext(null);function Jx(e){let t=d.useContext(Xt).outlet;return t&&d.createElement(Gx.Provider,{value:e},t)}function Zx(){let{matches:e}=d.useContext(Xt),t=e[e.length-1];return t?t.params:{}}function bi(e,{relative:t}={}){let{matches:n}=d.useContext(Xt),{pathname:r}=cn(),i=JSON.stringify(Ic(n));return d.useMemo(()=>Fc(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function eg(e,t){return Np(e,t)}function Np(e,t,n,r){var v;ze(bs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=d.useContext(ln),{matches:o}=d.useContext(Xt),a=o[o.length-1],l=a?a.params:{},c=a?a.pathname:"/",u=a?a.pathnameBase:"/",x=a&&a.route;{let m=x&&x.path||"";Sp(c,!x||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let f=cn(),p;if(t){let m=typeof t=="string"?vs(t):t;ze(u==="/"||((v=m.pathname)==null?void 0:v.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${m.pathname}" was given in the \`location\` prop.`),p=m}else p=f;let j=p.pathname||"/",b=j;if(u!=="/"){let m=u.replace(/^\//,"").split("/");b="/"+j.replace(/^\//,"").split("/").slice(m.length).join("/")}let k=gp(e,{pathname:b});an(x||k!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),an(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=ig(k&&k.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:Ln([u,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:Ln([u,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,r);return t&&R?d.createElement(yi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},R):R}function tg(){let e=ug(),t=Qx(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:o},"ErrorBoundary")," or"," ",d.createElement("code",{style:o},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),n?d.createElement("pre",{style:i},n):null,a)}var ng=d.createElement(tg,null),rg=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(Xt.Provider,{value:this.props.routeContext},d.createElement(Dc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function sg({routeContext:e,match:t,children:n}){let r=d.useContext(ys);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(Xt.Provider,{value:e},n)}function ig(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=n==null?void 0:n.errors;if(o!=null){let c=i.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);ze(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let a=!1,l=-1;if(n)for(let c=0;c<i.length;c++){let u=i[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:x,errors:f}=n,p=u.route.loader&&!x.hasOwnProperty(u.route.id)&&(!f||f[u.route.id]===void 0);if(u.route.lazy||p){a=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((c,u,x)=>{let f,p=!1,j=null,b=null;n&&(f=o&&u.route.id?o[u.route.id]:void 0,j=u.route.errorElement||ng,a&&(l<0&&x===0?(Sp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,b=null):l===x&&(p=!0,b=u.route.hydrateFallbackElement||null)));let k=t.concat(i.slice(0,x+1)),R=()=>{let v;return f?v=j:p?v=b:u.route.Component?v=d.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=c,d.createElement(sg,{match:u,routeContext:{outlet:c,matches:k,isDataRoute:n!=null},children:v})};return n&&(u.route.ErrorBoundary||u.route.errorElement||x===0)?d.createElement(rg,{location:n.location,revalidation:n.revalidation,component:j,error:f,children:R(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):R()},null)}function Oc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function og(e){let t=d.useContext(ys);return ze(t,Oc(e)),t}function ag(e){let t=d.useContext(na);return ze(t,Oc(e)),t}function lg(e){let t=d.useContext(Xt);return ze(t,Oc(e)),t}function Ac(e){let t=lg(e),n=t.matches[t.matches.length-1];return ze(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function cg(){return Ac("useRouteId")}function ug(){var r;let e=d.useContext(Dc),t=ag("useRouteError"),n=Ac("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function dg(){let{router:e}=og("useNavigate"),t=Ac("useNavigate"),n=d.useRef(!1);return kp(()=>{n.current=!0}),d.useCallback(async(i,o={})=>{an(n.current,jp),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var wd={};function Sp(e,t,n){!t&&!wd[e]&&(wd[e]=!0,an(!1,n))}d.memo(fg);function fg({routes:e,future:t,state:n}){return Np(e,void 0,n,t)}function mg({to:e,replace:t,state:n,relative:r}){ze(bs(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=d.useContext(ln);an(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=d.useContext(Xt),{pathname:a}=cn(),l=Ut(),c=Fc(e,Ic(o),a,r==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:n,relative:r})},[l,u,r,t,n]),null}function pg(e){return Jx(e.context)}function ot(e){ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hg({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){ze(!bs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:a,navigator:i,static:o,future:{}}),[a,i,o]);typeof n=="string"&&(n=vs(n));let{pathname:c="/",search:u="",hash:x="",state:f=null,key:p="default"}=n,j=d.useMemo(()=>{let b=Dn(c,a);return b==null?null:{location:{pathname:b,search:u,hash:x,state:f,key:p},navigationType:r}},[a,c,u,x,f,p,r]);return an(j!=null,`<Router basename="${a}"> is not able to match the URL "${c}${u}${x}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:d.createElement(ln.Provider,{value:l},d.createElement(yi.Provider,{children:t,value:j}))}function xg({children:e,location:t}){return eg(Dl(e),t)}function Dl(e,t=[]){let n=[];return d.Children.forEach(e,(r,i)=>{if(!d.isValidElement(r))return;let o=[...t,i];if(r.type===d.Fragment){n.push.apply(n,Dl(r.props.children,o));return}ze(r.type===ot,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ze(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Dl(r.props.children,o)),n.push(a)}),n}var co="get",uo="application/x-www-form-urlencoded";function ra(e){return e!=null&&typeof e.tagName=="string"}function gg(e){return ra(e)&&e.tagName.toLowerCase()==="button"}function vg(e){return ra(e)&&e.tagName.toLowerCase()==="form"}function yg(e){return ra(e)&&e.tagName.toLowerCase()==="input"}function bg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wg(e,t){return e.button===0&&(!t||t==="_self")&&!bg(e)}var Bi=null;function jg(){if(Bi===null)try{new FormData(document.createElement("form"),0),Bi=!1}catch{Bi=!0}return Bi}var kg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function La(e){return e!=null&&!kg.has(e)?(an(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uo}"`),null):e}function Ng(e,t){let n,r,i,o,a;if(vg(e)){let l=e.getAttribute("action");r=l?Dn(l,t):null,n=e.getAttribute("method")||co,i=La(e.getAttribute("enctype"))||uo,o=new FormData(e)}else if(gg(e)||yg(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(r=c?Dn(c,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||co,i=La(e.getAttribute("formenctype"))||La(l.getAttribute("enctype"))||uo,o=new FormData(l,e),!jg()){let{name:u,type:x,value:f}=e;if(x==="image"){let p=u?`${u}.`:"";o.append(`${p}x`,"0"),o.append(`${p}y`,"0")}else u&&o.append(u,f)}}else{if(ra(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=co,r=null,i=uo,a=e}return o&&i==="text/plain"&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $c(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Sg(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&Dn(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Cg(e,t){if(e.id in t)return t[e.id];try{let n=await xp(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Eg(e){return e!=null&&typeof e.page=="string"}function _g(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Rg(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let a=await Cg(o,n);return a.links?a.links():[]}return[]}));return zg(r.flat(1).filter(_g).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function jd(e,t,n,r,i,o){let a=(c,u)=>n[u]?c.route.id!==n[u].route.id:!0,l=(c,u)=>{var x;return n[u].pathname!==c.pathname||((x=n[u].route.path)==null?void 0:x.endsWith("*"))&&n[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>a(c,u)||l(c,u)):o==="data"?t.filter((c,u)=>{var f;let x=r.routes[c.route.id];if(!x||!x.hasLoader)return!1;if(a(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let p=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function Pg(e,t,{includeHydrateFallback:n}={}){return Tg(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function Tg(e){return[...new Set(e)]}function Lg(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function zg(e,t){let n=new Set,r=new Set(t);return e.reduce((i,o)=>{if(t&&!Eg(o)&&o.as==="script"&&o.href&&r.has(o.href))return i;let l=JSON.stringify(Lg(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function Cp(){let e=d.useContext(ys);return $c(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Mg(){let e=d.useContext(na);return $c(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Bc=d.createContext(void 0);Bc.displayName="FrameworkContext";function Ep(){let e=d.useContext(Bc);return $c(e,"You must render this element inside a <HydratedRouter> element"),e}function Ig(e,t){let n=d.useContext(Bc),[r,i]=d.useState(!1),[o,a]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:x,onTouchStart:f}=t,p=d.useRef(null);d.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let k=v=>{v.forEach(m=>{a(m.isIntersecting)})},R=new IntersectionObserver(k,{threshold:.5});return p.current&&R.observe(p.current),()=>{R.disconnect()}}},[e]),d.useEffect(()=>{if(r){let k=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(k)}}},[r]);let j=()=>{i(!0)},b=()=>{i(!1),a(!1)};return n?e!=="intent"?[o,p,{}]:[o,p,{onFocus:Ts(l,j),onBlur:Ts(c,b),onMouseEnter:Ts(u,j),onMouseLeave:Ts(x,b),onTouchStart:Ts(f,j)}]:[!1,p,{}]}function Ts(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Fg({page:e,...t}){let{router:n}=Cp(),r=d.useMemo(()=>gp(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?d.createElement(Og,{page:e,matches:r,...t}):null}function Dg(e){let{manifest:t,routeModules:n}=Ep(),[r,i]=d.useState([]);return d.useEffect(()=>{let o=!1;return Rg(e,t,n).then(a=>{o||i(a)}),()=>{o=!0}},[e,t,n]),r}function Og({page:e,matches:t,...n}){let r=cn(),{manifest:i,routeModules:o}=Ep(),{basename:a}=Cp(),{loaderData:l,matches:c}=Mg(),u=d.useMemo(()=>jd(e,t,c,i,r,"data"),[e,t,c,i,r]),x=d.useMemo(()=>jd(e,t,c,i,r,"assets"),[e,t,c,i,r]),f=d.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let b=new Set,k=!1;if(t.forEach(v=>{var y;let m=i.routes[v.route.id];!m||!m.hasLoader||(!u.some(_=>_.route.id===v.route.id)&&v.route.id in l&&((y=o[v.route.id])!=null&&y.shouldRevalidate)||m.hasClientLoader?k=!0:b.add(v.route.id))}),b.size===0)return[];let R=Sg(e,a,"data");return k&&b.size>0&&R.searchParams.set("_routes",t.filter(v=>b.has(v.route.id)).map(v=>v.route.id).join(",")),[R.pathname+R.search]},[a,l,r,i,u,t,e,o]),p=d.useMemo(()=>Pg(x,i),[x,i]),j=Dg(x);return d.createElement(d.Fragment,null,f.map(b=>d.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),p.map(b=>d.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),j.map(({key:b,link:k})=>d.createElement("link",{key:b,...k})))}function Ag(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var _p=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_p&&(window.__reactRouterVersion="7.7.1")}catch{}function $g({basename:e,children:t,window:n}){let r=d.useRef();r.current==null&&(r.current=jx({window:n,v5Compat:!0}));let i=r.current,[o,a]=d.useState({action:i.action,location:i.location}),l=d.useCallback(c=>{d.startTransition(()=>a(c))},[a]);return d.useLayoutEffect(()=>i.listen(l),[i,l]),d.createElement(hg,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i})}var Rp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pp=d.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:x,viewTransition:f,...p},j){let{basename:b}=d.useContext(ln),k=typeof u=="string"&&Rp.test(u),R,v=!1;if(typeof u=="string"&&k&&(R=u,_p))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=Dn(w.pathname,b);w.origin===g.origin&&C!=null?u=C+w.search+w.hash:v=!0}catch{an(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=Kx(u,{relative:i}),[y,_,P]=Ig(r,p),L=Wg(u,{replace:a,state:l,target:c,preventScrollReset:x,relative:i,viewTransition:f});function N(g){t&&t(g),g.defaultPrevented||L(g)}let h=d.createElement("a",{...p,...P,href:R||m,onClick:v||o?t:N,ref:Ag(j,_),target:c,"data-discover":!k&&n==="render"?"true":void 0});return y&&!k?d.createElement(d.Fragment,null,h,d.createElement(Fg,{page:m})):h});Pp.displayName="Link";var Bg=d.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:a,viewTransition:l,children:c,...u},x){let f=bi(a,{relative:u.relative}),p=cn(),j=d.useContext(na),{navigator:b,basename:k}=d.useContext(ln),R=j!=null&&Kg(f)&&l===!0,v=b.encodeLocation?b.encodeLocation(f).pathname:f.pathname,m=p.pathname,y=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;n||(m=m.toLowerCase(),y=y?y.toLowerCase():null,v=v.toLowerCase()),y&&k&&(y=Dn(y,k)||y);const _=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let P=m===v||!i&&m.startsWith(v)&&m.charAt(_)==="/",L=y!=null&&(y===v||!i&&y.startsWith(v)&&y.charAt(v.length)==="/"),N={isActive:P,isPending:L,isTransitioning:R},h=P?t:void 0,g;typeof r=="function"?g=r(N):g=[r,P?"active":null,L?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let w=typeof o=="function"?o(N):o;return d.createElement(Pp,{...u,"aria-current":h,className:g,ref:x,style:w,to:a,viewTransition:l},typeof c=="function"?c(N):c)});Bg.displayName="NavLink";var Ug=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:a=co,action:l,onSubmit:c,relative:u,preventScrollReset:x,viewTransition:f,...p},j)=>{let b=Vg(),k=Yg(l,{relative:u}),R=a.toLowerCase()==="get"?"get":"post",v=typeof l=="string"&&Rp.test(l),m=y=>{if(c&&c(y),y.defaultPrevented)return;y.preventDefault();let _=y.nativeEvent.submitter,P=(_==null?void 0:_.getAttribute("formmethod"))||a;b(_||y.currentTarget,{fetcherKey:t,method:P,navigate:n,replace:i,state:o,relative:u,preventScrollReset:x,viewTransition:f})};return d.createElement("form",{ref:j,method:R,action:k,onSubmit:r?c:m,...p,"data-discover":!v&&e==="render"?"true":void 0})});Ug.displayName="Form";function qg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tp(e){let t=d.useContext(ys);return ze(t,qg(e)),t}function Wg(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:a}={}){let l=Ut(),c=cn(),u=bi(e,{relative:o});return d.useCallback(x=>{if(wg(x,t)){x.preventDefault();let f=n!==void 0?n:fi(c)===fi(u);l(e,{replace:f,state:r,preventScrollReset:i,relative:o,viewTransition:a})}},[c,l,u,n,r,t,e,i,o,a])}var Qg=0,Hg=()=>`__${String(++Qg)}__`;function Vg(){let{router:e}=Tp("useSubmit"),{basename:t}=d.useContext(ln),n=cg();return d.useCallback(async(r,i={})=>{let{action:o,method:a,encType:l,formData:c,body:u}=Ng(r,t);if(i.navigate===!1){let x=i.fetcherKey||Hg();await e.fetch(x,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function Yg(e,{relative:t}={}){let{basename:n}=d.useContext(ln),r=d.useContext(Xt);ze(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...bi(e||".",{relative:t})},a=cn();if(e==null){o.search=a.search;let l=new URLSearchParams(o.search),c=l.getAll("index");if(c.some(x=>x==="")){l.delete("index"),c.filter(f=>f).forEach(f=>l.append("index",f));let x=l.toString();o.search=x?`?${x}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:Ln([n,o.pathname])),fi(o)}function Kg(e,{relative:t}={}){let n=d.useContext(wp);ze(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Tp("useViewTransitionState"),i=bi(e,{relative:t});if(!n.isTransitioning)return!1;let o=Dn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Dn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Do(i.pathname,a)!=null||Do(i.pathname,o)!=null}function Xg({size:e=22}){return s.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:"motion-safe:animate-[spin_9s_linear_infinite] group-active:motion-safe:animate-[spin_1.2s_linear_infinite]",children:[s.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),s.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),s.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),s.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),s.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),s.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function Gg(){const e=Ut(),{pathname:t}=cn(),n=d.useRef({}),r=d.useRef(0),i=d.useRef(null);d.useEffect(()=>{i.current=new Audio("/sounds/refresh.mp3")},[]),d.useEffect(()=>{const g=n.current[t];g!==void 0?window.scrollTo(0,g):window.scrollTo(0,0)},[t]);const o=()=>{n.current[t]=window.scrollY},a=["/","/play","/profile"].includes(t),[l,c]=d.useState(!1),[u,x]=d.useState({open:!1,go:null});d.useEffect(()=>{const g=new MutationObserver(()=>{c(document.body.classList.contains("modal-open"))});return g.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>g.disconnect()},[]);const p=l||[/^\/quiz\//,/^\/practice\//,/^\/profile\//].some(g=>g.test(t)),j=g=>g==="/"?t==="/":t.startsWith(g),b=d.useRef(0),[k,R]=d.useState(!1),[v,m]=d.useState(0),[y,_]=d.useState(!1),P=g=>{a&&window.scrollY===0&&(b.current=g.touches[0].clientY)},L=g=>{if(a&&window.scrollY===0){const w=g.touches[0].clientY-b.current;w>0&&(R(!0),m(Math.min(w,80)))}},N=()=>{k&&v>40&&(_(!0),i.current&&(i.current.currentTime=0,i.current.play().catch(()=>{})),navigator.vibrate&&navigator.vibrate(60),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>_(!1),1e3)),R(!1),m(0)},h=({path:g,icon:w,label:C})=>{const E=j(g),U=()=>{o();const Y=()=>{if(g==="/play"){e(`/play?view=modes&reset=${Date.now()}`),navigator.vibrate&&navigator.vibrate(15);return}if(E){const J=Date.now();J-r.current<500&&(window.scrollTo({top:0,behavior:"smooth"}),navigator.vibrate&&navigator.vibrate(30)),r.current=J}else e(g)};if(localStorage.getItem("qp_in_question")==="true"){x({open:!0,go:Y});return}Y()};return s.jsxs("button",{type:"button",onClick:U,className:`group relative flex h-12 w-20 flex-col items-center justify-center rounded-xl transition
          ${E?"text-white":"text-base-muted hover:text-white"}`,"aria-current":E?"page":void 0,children:[E&&s.jsx("span",{className:"absolute -top-1 h-1 w-8 rounded-full bg-white/40"}),s.jsx("div",{className:"leading-none",children:w}),s.jsx("span",{className:"mt-0.5 text-[11px]",children:C})]})};return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",onTouchStart:P,onTouchMove:L,onTouchEnd:N,children:[(k||y)&&s.jsxs("div",{className:"fixed left-1/2 z-50 flex flex-col items-center text-white text-sm transition-all duration-200",style:{top:y?"4rem":`${Math.min(v,100)}px`,transform:"translateX(-50%)",width:"160px",textAlign:"center"},children:[s.jsx("span",{className:`${y?"opacity-0":"motion-safe:animate-spin"} mb-1`,children:"⭮"}),s.jsx("span",{className:y?"animate-bounce":"",children:y?"Updated!😍":"Release to refresh"})]}),s.jsx("main",{className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:p?"100dvh":"calc(100dvh - (5.25rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",overflowY:"auto",transform:k?`translateY(${v}px)`:void 0,transition:k||y?"transform 0.3s ease":void 0},children:s.jsx(pg,{})}),u.open&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You’ll lose this question’s progress."}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>x({open:!1,go:null}),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"Cancel"}),s.jsx("button",{onClick:()=>{const g=u.go;x({open:!1,go:null}),g==null||g()},className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Leave"})]})]})}),!p&&s.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[s.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),s.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:s.jsxs("div",{className:"flex h-16 items-center justify-around rounded-2xl border border-base-border bg-base-card shadow-xl",children:[s.jsx(h,{path:"/",icon:s.jsx("span",{className:"text-xl",children:"🏠"}),label:"Home"}),s.jsx(h,{path:"/play",icon:s.jsx(Xg,{size:24}),label:"Play"}),s.jsx(h,{path:"/profile",icon:s.jsx("span",{className:"text-xl",children:"👤"}),label:"Profile"})]})})]})]})}function Oo(){return Oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oo.apply(null,arguments)}function Jg(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Zg(e){d.useEffect(e,[])}var ev=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function Pn(e,t){var n=t===void 0?{}:t,r=n.volume,i=r===void 0?1:r,o=n.playbackRate,a=o===void 0?1:o,l=n.soundEnabled,c=l===void 0?!0:l,u=n.interrupt,x=u===void 0?!1:u,f=n.onload,p=Jg(n,ev),j=St.useRef(null),b=St.useRef(!1),k=St.useState(null),R=k[0],v=k[1],m=St.useState(null),y=m[0],_=m[1],P=function(){typeof f=="function"&&f.call(this),b.current&&v(this.duration()*1e3),_(this)};Zg(function(){return xp(()=>import("./howler-72ab6649.js").then(w=>w.h),[]).then(function(w){if(!b.current){var C;j.current=(C=w.Howl)!==null&&C!==void 0?C:w.default.Howl,b.current=!0,new j.current(Oo({src:Array.isArray(e)?e:[e],volume:i,rate:a,onload:P},p))}}),function(){b.current=!1}}),St.useEffect(function(){j.current&&y&&_(new j.current(Oo({src:Array.isArray(e)?e:[e],volume:i,onload:P},p)))},[JSON.stringify(e)]),St.useEffect(function(){y&&(y.volume(i),p.sprite||y.rate(a))},[y,i,a]);var L=St.useCallback(function(w){typeof w>"u"&&(w={}),!(!y||!c&&!w.forceSoundEnabled)&&(x&&y.stop(),w.playbackRate&&y.rate(w.playbackRate),y.play(w.id))},[y,c,x]),N=St.useCallback(function(w){y&&y.stop(w)},[y]),h=St.useCallback(function(w){y&&y.pause(w)},[y]),g=[L,{sound:y,stop:N,pause:h,duration:R}];return g}var Lp={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((n,r)=>{e.exports=r()})(Yp,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},i,o=!r.document&&!!r.postMessage,a=r.IS_PAPA_WORKER||!1,l={},c=0,u={};function x(h){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(g){var w=P(g);w.chunkSize=parseInt(w.chunkSize),g.step||g.chunk||(w.chunkSize=null),this._handle=new k(w),(this._handle.streamer=this)._config=w}).call(this,h),this.parseChunk=function(g,w){var C=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<C){let U=this._config.newline;U||(E=this._config.quoteChar||'"',U=this._handle.guessLineEndings(g,E)),g=[...g.split(U).slice(C)].join(U)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(E=this._config.beforeFirstChunk(g))!==void 0&&(g=E),this.isFirstChunk=!1,this._halted=!1;var C=this._partialLine+g,E=(this._partialLine="",this._handle.parse(C,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(g=E.meta.cursor,C=(this._finished||(this._partialLine=C.substring(g-this._baseIndex),this._baseIndex=g),E&&E.data&&(this._rowCount+=E.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),a)r.postMessage({results:E,workerId:u.WORKER_ID,finished:C});else if(N(this._config.chunk)&&!w){if(this._config.chunk(E,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=E=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(E.data),this._completeResults.errors=this._completeResults.errors.concat(E.errors),this._completeResults.meta=E.meta),this._completed||!C||!N(this._config.complete)||E&&E.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),C||E&&E.meta.paused||this._nextChunk(),E}this._halted=!0},this._sendError=function(g){N(this._config.error)?this._config.error(g):a&&this._config.error&&r.postMessage({workerId:u.WORKER_ID,error:g,finished:!1})}}function f(h){var g;(h=h||{}).chunkSize||(h.chunkSize=u.RemoteChunkSize),x.call(this,h),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(w){this._input=w,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(g=new XMLHttpRequest,this._config.withCredentials&&(g.withCredentials=this._config.withCredentials),o||(g.onload=L(this._chunkLoaded,this),g.onerror=L(this._chunkError,this)),g.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var w,C=this._config.downloadRequestHeaders;for(w in C)g.setRequestHeader(w,C[w])}var E;this._config.chunkSize&&(E=this._start+this._config.chunkSize-1,g.setRequestHeader("Range","bytes="+this._start+"-"+E));try{g.send(this._config.downloadRequestBody)}catch(U){this._chunkError(U.message)}o&&g.status===0&&this._chunkError()}},this._chunkLoaded=function(){g.readyState===4&&(g.status<200||400<=g.status?this._chunkError():(this._start+=this._config.chunkSize||g.responseText.length,this._finished=!this._config.chunkSize||this._start>=(w=>(w=w.getResponseHeader("Content-Range"))!==null?parseInt(w.substring(w.lastIndexOf("/")+1)):-1)(g),this.parseChunk(g.responseText)))},this._chunkError=function(w){w=g.statusText||w,this._sendError(new Error(w))}}function p(h){(h=h||{}).chunkSize||(h.chunkSize=u.LocalChunkSize),x.call(this,h);var g,w,C=typeof FileReader<"u";this.stream=function(E){this._input=E,w=E.slice||E.webkitSlice||E.mozSlice,C?((g=new FileReader).onload=L(this._chunkLoaded,this),g.onerror=L(this._chunkError,this)):g=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var E=this._input,U=(this._config.chunkSize&&(U=Math.min(this._start+this._config.chunkSize,this._input.size),E=w.call(E,this._start,U)),g.readAsText(E,this._config.encoding));C||this._chunkLoaded({target:{result:U}})},this._chunkLoaded=function(E){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(E.target.result)},this._chunkError=function(){this._sendError(g.error)}}function j(h){var g;x.call(this,h=h||{}),this.stream=function(w){return g=w,this._nextChunk()},this._nextChunk=function(){var w,C;if(!this._finished)return w=this._config.chunkSize,g=w?(C=g.substring(0,w),g.substring(w)):(C=g,""),this._finished=!g,this.parseChunk(C)}}function b(h){x.call(this,h=h||{});var g=[],w=!0,C=!1;this.pause=function(){x.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){x.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(E){this._input=E,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){C&&g.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),g.length?this.parseChunk(g.shift()):w=!0},this._streamData=L(function(E){try{g.push(typeof E=="string"?E:E.toString(this._config.encoding)),w&&(w=!1,this._checkIsFinished(),this.parseChunk(g.shift()))}catch(U){this._streamError(U)}},this),this._streamError=L(function(E){this._streamCleanUp(),this._sendError(E)},this),this._streamEnd=L(function(){this._streamCleanUp(),C=!0,this._streamData("")},this),this._streamCleanUp=L(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function k(h){var g,w,C,E,U=Math.pow(2,53),Y=-U,G=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,J=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,W=this,T=0,z=0,$=!1,O=!1,Q=[],B={data:[],errors:[],meta:{}};function oe(I){return h.skipEmptyLines==="greedy"?I.join("").trim()==="":I.length===1&&I[0].length===0}function ae(){if(B&&C&&(xe("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),C=!1),h.skipEmptyLines&&(B.data=B.data.filter(function(H){return!oe(H)})),ce()){let H=function(X,le){N(h.transformHeader)&&(X=h.transformHeader(X,le)),Q.push(X)};if(B)if(Array.isArray(B.data[0])){for(var I=0;ce()&&I<B.data.length;I++)B.data[I].forEach(H);B.data.splice(0,1)}else B.data.forEach(H)}function q(H,X){for(var le=h.header?{}:[],F=0;F<H.length;F++){var M=F,K=H[F],K=((ue,Z)=>(ie=>(h.dynamicTypingFunction&&h.dynamicTyping[ie]===void 0&&(h.dynamicTyping[ie]=h.dynamicTypingFunction(ie)),(h.dynamicTyping[ie]||h.dynamicTyping)===!0))(ue)?Z==="true"||Z==="TRUE"||Z!=="false"&&Z!=="FALSE"&&((ie=>{if(G.test(ie)&&(ie=parseFloat(ie),Y<ie&&ie<U))return 1})(Z)?parseFloat(Z):J.test(Z)?new Date(Z):Z===""?null:Z):Z)(M=h.header?F>=Q.length?"__parsed_extra":Q[F]:M,K=h.transform?h.transform(K,M):K);M==="__parsed_extra"?(le[M]=le[M]||[],le[M].push(K)):le[M]=K}return h.header&&(F>Q.length?xe("FieldMismatch","TooManyFields","Too many fields: expected "+Q.length+" fields but parsed "+F,z+X):F<Q.length&&xe("FieldMismatch","TooFewFields","Too few fields: expected "+Q.length+" fields but parsed "+F,z+X)),le}var re;B&&(h.header||h.dynamicTyping||h.transform)&&(re=1,!B.data.length||Array.isArray(B.data[0])?(B.data=B.data.map(q),re=B.data.length):B.data=q(B.data,0),h.header&&B.meta&&(B.meta.fields=Q),z+=re)}function ce(){return h.header&&Q.length===0}function xe(I,q,re,H){I={type:I,code:q,message:re},H!==void 0&&(I.row=H),B.errors.push(I)}N(h.step)&&(E=h.step,h.step=function(I){B=I,ce()?ae():(ae(),B.data.length!==0&&(T+=I.data.length,h.preview&&T>h.preview?w.abort():(B.data=B.data[0],E(B,W))))}),this.parse=function(I,q,re){var H=h.quoteChar||'"',H=(h.newline||(h.newline=this.guessLineEndings(I,H)),C=!1,h.delimiter?N(h.delimiter)&&(h.delimiter=h.delimiter(I),B.meta.delimiter=h.delimiter):((H=((X,le,F,M,K)=>{var ue,Z,ie,je;K=K||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var Be=0;Be<K.length;Be++){for(var We,Se=K[Be],ve=0,Xe=0,Ne=0,Me=(ie=void 0,new v({comments:M,delimiter:Se,newline:le,preview:10}).parse(X)),Ge=0;Ge<Me.data.length;Ge++)F&&oe(Me.data[Ge])?Ne++:(We=Me.data[Ge].length,Xe+=We,ie===void 0?ie=We:0<We&&(ve+=Math.abs(We-ie),ie=We));0<Me.data.length&&(Xe/=Me.data.length-Ne),(Z===void 0||ve<=Z)&&(je===void 0||je<Xe)&&1.99<Xe&&(Z=ve,ue=Se,je=Xe)}return{successful:!!(h.delimiter=ue),bestDelimiter:ue}})(I,h.newline,h.skipEmptyLines,h.comments,h.delimitersToGuess)).successful?h.delimiter=H.bestDelimiter:(C=!0,h.delimiter=u.DefaultDelimiter),B.meta.delimiter=h.delimiter),P(h));return h.preview&&h.header&&H.preview++,g=I,w=new v(H),B=w.parse(g,q,re),ae(),$?{meta:{paused:!0}}:B||{meta:{paused:!1}}},this.paused=function(){return $},this.pause=function(){$=!0,w.abort(),g=N(h.chunk)?"":g.substring(w.getCharIndex())},this.resume=function(){W.streamer._halted?($=!1,W.streamer.parseChunk(g,!0)):setTimeout(W.resume,3)},this.aborted=function(){return O},this.abort=function(){O=!0,w.abort(),B.meta.aborted=!0,N(h.complete)&&h.complete(B),g=""},this.guessLineEndings=function(X,H){X=X.substring(0,1048576);var H=new RegExp(R(H)+"([^]*?)"+R(H),"gm"),re=(X=X.replace(H,"")).split("\r"),H=X.split(`
`),X=1<H.length&&H[0].length<re[0].length;if(re.length===1||X)return`
`;for(var le=0,F=0;F<re.length;F++)re[F][0]===`
`&&le++;return le>=re.length/2?`\r
`:"\r"}}function R(h){return h.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function v(h){var g=(h=h||{}).delimiter,w=h.newline,C=h.comments,E=h.step,U=h.preview,Y=h.fastMode,G=null,J=!1,W=h.quoteChar==null?'"':h.quoteChar,T=W;if(h.escapeChar!==void 0&&(T=h.escapeChar),(typeof g!="string"||-1<u.BAD_DELIMITERS.indexOf(g))&&(g=","),C===g)throw new Error("Comment character same as delimiter");C===!0?C="#":(typeof C!="string"||-1<u.BAD_DELIMITERS.indexOf(C))&&(C=!1),w!==`
`&&w!=="\r"&&w!==`\r
`&&(w=`
`);var z=0,$=!1;this.parse=function(O,Q,B){if(typeof O!="string")throw new Error("Input must be a string");var oe=O.length,ae=g.length,ce=w.length,xe=C.length,I=N(E),q=[],re=[],H=[],X=z=0;if(!O)return ve();if(Y||Y!==!1&&O.indexOf(W)===-1){for(var le=O.split(w),F=0;F<le.length;F++){if(H=le[F],z+=H.length,F!==le.length-1)z+=w.length;else if(B)return ve();if(!C||H.substring(0,xe)!==C){if(I){if(q=[],je(H.split(g)),Xe(),$)return ve()}else je(H.split(g));if(U&&U<=F)return q=q.slice(0,U),ve(!0)}}return ve()}for(var M=O.indexOf(g,z),K=O.indexOf(w,z),ue=new RegExp(R(T)+R(W),"g"),Z=O.indexOf(W,z);;)if(O[z]===W)for(Z=z,z++;;){if((Z=O.indexOf(W,Z+1))===-1)return B||re.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:q.length,index:z}),We();if(Z===oe-1)return We(O.substring(z,Z).replace(ue,W));if(W===T&&O[Z+1]===T)Z++;else if(W===T||Z===0||O[Z-1]!==T){M!==-1&&M<Z+1&&(M=O.indexOf(g,Z+1));var ie=Be((K=K!==-1&&K<Z+1?O.indexOf(w,Z+1):K)===-1?M:Math.min(M,K));if(O.substr(Z+1+ie,ae)===g){H.push(O.substring(z,Z).replace(ue,W)),O[z=Z+1+ie+ae]!==W&&(Z=O.indexOf(W,z)),M=O.indexOf(g,z),K=O.indexOf(w,z);break}if(ie=Be(K),O.substring(Z+1+ie,Z+1+ie+ce)===w){if(H.push(O.substring(z,Z).replace(ue,W)),Se(Z+1+ie+ce),M=O.indexOf(g,z),Z=O.indexOf(W,z),I&&(Xe(),$))return ve();if(U&&q.length>=U)return ve(!0);break}re.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:q.length,index:z}),Z++}}else if(C&&H.length===0&&O.substring(z,z+xe)===C){if(K===-1)return ve();z=K+ce,K=O.indexOf(w,z),M=O.indexOf(g,z)}else if(M!==-1&&(M<K||K===-1))H.push(O.substring(z,M)),z=M+ae,M=O.indexOf(g,z);else{if(K===-1)break;if(H.push(O.substring(z,K)),Se(K+ce),I&&(Xe(),$))return ve();if(U&&q.length>=U)return ve(!0)}return We();function je(Ne){q.push(Ne),X=z}function Be(Ne){var Me=0;return Me=Ne!==-1&&(Ne=O.substring(Z+1,Ne))&&Ne.trim()===""?Ne.length:Me}function We(Ne){return B||(Ne===void 0&&(Ne=O.substring(z)),H.push(Ne),z=oe,je(H),I&&Xe()),ve()}function Se(Ne){z=Ne,je(H),H=[],K=O.indexOf(w,z)}function ve(Ne){if(h.header&&!Q&&q.length&&!J){var Me=q[0],Ge=Object.create(null),we=new Set(Me);let Je=!1;for(let Ie=0;Ie<Me.length;Ie++){let Qe=Me[Ie];if(Ge[Qe=N(h.transformHeader)?h.transformHeader(Qe,Ie):Qe]){let bt,Tt=Ge[Qe];for(;bt=Qe+"_"+Tt,Tt++,we.has(bt););we.add(bt),Me[Ie]=bt,Ge[Qe]++,Je=!0,(G=G===null?{}:G)[bt]=Qe}else Ge[Qe]=1,Me[Ie]=Qe;we.add(Qe)}Je&&console.warn("Duplicate headers found and renamed."),J=!0}return{data:q,errors:re,meta:{delimiter:g,linebreak:w,aborted:$,truncated:!!Ne,cursor:X+(Q||0),renamedHeaders:G}}}function Xe(){E(ve()),q=[],re=[]}},this.abort=function(){$=!0},this.getCharIndex=function(){return z}}function m(h){var g=h.data,w=l[g.workerId],C=!1;if(g.error)w.userError(g.error,g.file);else if(g.results&&g.results.data){var E={abort:function(){C=!0,y(g.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:_,resume:_};if(N(w.userStep)){for(var U=0;U<g.results.data.length&&(w.userStep({data:g.results.data[U],errors:g.results.errors,meta:g.results.meta},E),!C);U++);delete g.results}else N(w.userChunk)&&(w.userChunk(g.results,E,g.file),delete g.results)}g.finished&&!C&&y(g.workerId,g.results)}function y(h,g){var w=l[h];N(w.userComplete)&&w.userComplete(g),w.terminate(),delete l[h]}function _(){throw new Error("Not implemented.")}function P(h){if(typeof h!="object"||h===null)return h;var g,w=Array.isArray(h)?[]:{};for(g in h)w[g]=P(h[g]);return w}function L(h,g){return function(){h.apply(g,arguments)}}function N(h){return typeof h=="function"}return u.parse=function(h,g){var w=(g=g||{}).dynamicTyping||!1;if(N(w)&&(g.dynamicTypingFunction=w,w={}),g.dynamicTyping=w,g.transform=!!N(g.transform)&&g.transform,!g.worker||!u.WORKERS_SUPPORTED)return w=null,u.NODE_STREAM_INPUT,typeof h=="string"?(h=(C=>C.charCodeAt(0)!==65279?C:C.slice(1))(h),w=new(g.download?f:j)(g)):h.readable===!0&&N(h.read)&&N(h.on)?w=new b(g):(r.File&&h instanceof File||h instanceof Object)&&(w=new p(g)),w.stream(h);(w=(()=>{var C;return!!u.WORKERS_SUPPORTED&&(C=(()=>{var E=r.URL||r.webkitURL||null,U=n.toString();return u.BLOB_URL||(u.BLOB_URL=E.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",U,")();"],{type:"text/javascript"})))})(),(C=new r.Worker(C)).onmessage=m,C.id=c++,l[C.id]=C)})()).userStep=g.step,w.userChunk=g.chunk,w.userComplete=g.complete,w.userError=g.error,g.step=N(g.step),g.chunk=N(g.chunk),g.complete=N(g.complete),g.error=N(g.error),delete g.worker,w.postMessage({input:h,config:g,workerId:w.id})},u.unparse=function(h,g){var w=!1,C=!0,E=",",U=`\r
`,Y='"',G=Y+Y,J=!1,W=null,T=!1,z=((()=>{if(typeof g=="object"){if(typeof g.delimiter!="string"||u.BAD_DELIMITERS.filter(function(Q){return g.delimiter.indexOf(Q)!==-1}).length||(E=g.delimiter),typeof g.quotes!="boolean"&&typeof g.quotes!="function"&&!Array.isArray(g.quotes)||(w=g.quotes),typeof g.skipEmptyLines!="boolean"&&typeof g.skipEmptyLines!="string"||(J=g.skipEmptyLines),typeof g.newline=="string"&&(U=g.newline),typeof g.quoteChar=="string"&&(Y=g.quoteChar),typeof g.header=="boolean"&&(C=g.header),Array.isArray(g.columns)){if(g.columns.length===0)throw new Error("Option columns is empty");W=g.columns}g.escapeChar!==void 0&&(G=g.escapeChar+Y),g.escapeFormulae instanceof RegExp?T=g.escapeFormulae:typeof g.escapeFormulae=="boolean"&&g.escapeFormulae&&(T=/^[=+\-@\t\r].*$/)}})(),new RegExp(R(Y),"g"));if(typeof h=="string"&&(h=JSON.parse(h)),Array.isArray(h)){if(!h.length||Array.isArray(h[0]))return $(null,h,J);if(typeof h[0]=="object")return $(W||Object.keys(h[0]),h,J)}else if(typeof h=="object")return typeof h.data=="string"&&(h.data=JSON.parse(h.data)),Array.isArray(h.data)&&(h.fields||(h.fields=h.meta&&h.meta.fields||W),h.fields||(h.fields=Array.isArray(h.data[0])?h.fields:typeof h.data[0]=="object"?Object.keys(h.data[0]):[]),Array.isArray(h.data[0])||typeof h.data[0]=="object"||(h.data=[h.data])),$(h.fields||[],h.data||[],J);throw new Error("Unable to serialize unrecognized input");function $(Q,B,oe){var ae="",ce=(typeof Q=="string"&&(Q=JSON.parse(Q)),typeof B=="string"&&(B=JSON.parse(B)),Array.isArray(Q)&&0<Q.length),xe=!Array.isArray(B[0]);if(ce&&C){for(var I=0;I<Q.length;I++)0<I&&(ae+=E),ae+=O(Q[I],I);0<B.length&&(ae+=U)}for(var q=0;q<B.length;q++){var re=(ce?Q:B[q]).length,H=!1,X=ce?Object.keys(B[q]).length===0:B[q].length===0;if(oe&&!ce&&(H=oe==="greedy"?B[q].join("").trim()==="":B[q].length===1&&B[q][0].length===0),oe==="greedy"&&ce){for(var le=[],F=0;F<re;F++){var M=xe?Q[F]:F;le.push(B[q][M])}H=le.join("").trim()===""}if(!H){for(var K=0;K<re;K++){0<K&&!X&&(ae+=E);var ue=ce&&xe?Q[K]:K;ae+=O(B[q][ue],K)}q<B.length-1&&(!oe||0<re&&!X)&&(ae+=U)}}return ae}function O(Q,B){var oe,ae;return Q==null?"":Q.constructor===Date?JSON.stringify(Q).slice(1,25):(ae=!1,T&&typeof Q=="string"&&T.test(Q)&&(Q="'"+Q,ae=!0),oe=Q.toString().replace(z,G),(ae=ae||w===!0||typeof w=="function"&&w(Q,B)||Array.isArray(w)&&w[B]||((ce,xe)=>{for(var I=0;I<xe.length;I++)if(-1<ce.indexOf(xe[I]))return!0;return!1})(oe,u.BAD_DELIMITERS)||-1<oe.indexOf(E)||oe.charAt(0)===" "||oe.charAt(oe.length-1)===" ")?Y+oe+Y:oe)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!o&&!!r.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=v,u.ParserHandle=k,u.NetworkStreamer=f,u.FileStreamer=p,u.StringStreamer=j,u.ReadableStreamStreamer=b,r.jQuery&&((i=r.jQuery).fn.parse=function(h){var g=h.config||{},w=[];return this.each(function(U){if(!(i(this).prop("tagName").toUpperCase()==="INPUT"&&i(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var Y=0;Y<this.files.length;Y++)w.push({file:this.files[Y],inputElem:this,instanceConfig:i.extend({},g)})}),C(),this;function C(){if(w.length===0)N(h.complete)&&h.complete();else{var U,Y,G,J,W=w[0];if(N(h.before)){var T=h.before(W.file,W.inputElem);if(typeof T=="object"){if(T.action==="abort")return U="AbortError",Y=W.file,G=W.inputElem,J=T.reason,void(N(h.error)&&h.error({name:U},Y,G,J));if(T.action==="skip")return void E();typeof T.config=="object"&&(W.instanceConfig=i.extend(W.instanceConfig,T.config))}else if(T==="skip")return void E()}var z=W.instanceConfig.complete;W.instanceConfig.complete=function($){N(z)&&z($,W.file,W.inputElem),E()},u.parse(W.file,W.instanceConfig)}}function E(){w.splice(0,1),C()}}),a&&(r.onmessage=function(h){h=h.data,u.WORKER_ID===void 0&&h&&(u.WORKER_ID=h.workerId),typeof h.input=="string"?r.postMessage({workerId:u.WORKER_ID,results:u.parse(h.input,h.config),finished:!0}):(r.File&&h.input instanceof File||h.input instanceof Object)&&(h=u.parse(h.input,h.config))&&r.postMessage({workerId:u.WORKER_ID,results:h,finished:!0})}),(f.prototype=Object.create(x.prototype)).constructor=f,(p.prototype=Object.create(x.prototype)).constructor=p,(j.prototype=Object.create(j.prototype)).constructor=j,(b.prototype=Object.create(x.prototype)).constructor=b,u})})(Lp);var tv=Lp.exports;const sa=nf(tv);function nv({open:e,categoryLabel:t,summary:n,hasResume:r,resumeInfo:i,onStart:o,onResume:a,onChange:l,onClose:c}){const u=d.useRef(""),x=d.useRef(null);if(d.useEffect(()=>{if(!e)return;u.current=document.body.style.overflow,document.body.style.overflow="hidden",document.body.classList.add("modal-open");const p=j=>{x.current&&x.current.contains(j.target)||j.preventDefault()};return document.addEventListener("touchmove",p,{passive:!1}),()=>{document.body.style.overflow=u.current||"",document.removeEventListener("touchmove",p),document.body.classList.remove("modal-open")}},[e]),d.useEffect(()=>{if(!e)return;const p=j=>j.key==="Escape"&&(c==null?void 0:c());return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[e,c]),!e)return null;const f=String(n||"").split(`
`).map(p=>p.trim()).filter(Boolean);return vi.createPortal(s.jsxs("div",{className:"fixed inset-0 z-[120] flex items-center justify-center",role:"dialog","aria-modal":"true",onClick:c,children:[s.jsx("div",{className:"absolute inset-0 bg-black/60"}),s.jsxs("div",{ref:x,className:`relative w-full max-w-md mx-auto
                   rounded-2xl
                   bg-base-card border border-base-border shadow-2xl
                   p-5 pt-4
                   max-h-[90vh] overflow-y-auto`,onClick:p=>p.stopPropagation(),children:[s.jsx("div",{className:"h-1 w-12 rounded-full bg-white/15 mx-auto mb-4"}),r?s.jsxs(s.Fragment,{children:[s.jsxs("h2",{className:"text-lg font-bold mb-2",children:["Resume your ",t," quiz?"]}),s.jsxs("div",{className:"text-sm text-base-muted mb-4",children:["You’re on Q",((i==null?void 0:i.index)??0)+1,"/",(i==null?void 0:i.total)??"?",typeof(i==null?void 0:i.remainingSec)=="number"?s.jsxs(s.Fragment,{children:[" • ⏱ ",i.remainingSec,"s left"]}):null]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:a,className:"flex-1 btn-primary rounded-xl px-3 py-3",autoFocus:!0,children:"Resume"}),s.jsx("button",{onClick:o,className:"flex-1 rounded-xl border border-base-border bg-white/5 px-3 py-3",title:"Start a fresh quiz with your saved settings",children:"Start New"}),s.jsx("button",{onClick:c,className:"rounded-xl border border-base-border bg-white/5 px-3 py-3",children:"Cancel"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("h2",{className:"text-lg font-bold mb-2",children:["Start ",t," quiz?"]}),f.length>0&&s.jsxs("div",{className:"mb-4 rounded-xl border border-base-border bg-white/5 p-3",children:[s.jsx("div",{className:"text-xs text-base-muted mb-1",children:"Current setting"}),s.jsx("div",{className:"text-sm space-y-0.5",children:f.map((p,j)=>s.jsx("div",{children:p},j))})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:o,className:"flex-1 btn-primary rounded-xl px-3 py-3",autoFocus:!0,children:"Start"}),s.jsx("button",{onClick:l,className:"flex-1 rounded-xl border border-base-border bg-white/5 px-3 py-3",children:"Change"}),s.jsx("button",{onClick:c,className:"rounded-xl border border-base-border bg-white/5 px-3 py-3",children:"Cancel"})]})]}),s.jsx("div",{className:"mt-2"})]})]}),document.body)}function zp({startRect:e,targetRef:t,count:n=12,onDone:r}){return d.useEffect(()=>{const i=t==null?void 0:t.current;if(!e||!i){r==null||r();return}const o=i.getBoundingClientRect(),a=document.createElement("div");a.style.position="fixed",a.style.inset="0",a.style.pointerEvents="none",a.style.zIndex="9999",document.body.appendChild(a);const l=o.left+o.width/2,c=o.top+o.height/2,u=e.left+e.width/2,x=e.top+e.height/2,f=200;let p=0;function j(b){const k=document.createElement("div");k.textContent="🪙",Object.assign(k.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const R=u,v=x,m=l,y=c;k.style.transform=`translate(${R}px, ${v}px) scale(1)`,a.appendChild(k),k.getBoundingClientRect(),k.style.transition=`transform ${f}ms cubic-bezier(.2,.8,.2,1), opacity ${f}ms linear`,requestAnimationFrame(()=>{k.style.transform=`translate(${m}px, ${y}px) scale(.6)`,k.style.opacity="0.1"}),setTimeout(()=>{k.remove(),p+=1,p===n&&(a.remove(),r==null||r())},f+50)}for(let b=0;b<n;b++)setTimeout(()=>j(),b*60);return()=>{try{a.remove()}catch{}}},[e,t,n,r]),null}const Mp=[{name:"General Knowledge",questions:50,icon:"🧠"},{name:"Artificial Intelligence",questions:28,icon:"🤖"},{name:"Fun facts",questions:30,icon:"🎉"},{name:"Science",questions:45,icon:"🧪"},{name:"History",questions:42,icon:"🏺"}],Uc=[{name:"Geography",questions:38,icon:"🗺️"},{name:"Computer",questions:34,icon:"💻"},{name:"Aptitude",questions:36,icon:"📐"},{name:"Iconic Figures",questions:26,icon:"🌟"}],rv=[...Mp,{name:"More",questions:Uc.length,icon:"➕"}],kd=[...Mp,...Uc].map(e=>e.name),Nd="dq_last_answered",Sd="dq_streak",Cd="dq_best_streak",sv="dq_weekly_count",za="dq_daily_log",Or="qp_resume",Ol="qp_last_quiz_map",Ui="qp_last_practice",pr="qp_last_daily",Ed="qp_xp",_d="qp_level",Rd="qp_coins",Pd=10,Td=5,Ld=2,Ls=e=>100*e*(e-1),Jt=e=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Ar=(e="")=>e.slice(0,1).toUpperCase()+e.slice(1),Ao=(e=new Date)=>e.toLocaleDateString("en-CA",{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone}),iv=(e=new Date)=>{const t=new Date(e),n=(t.getDay()+6)%7;return t.setHours(0,0,0,0),t.setDate(t.getDate()-n),t},zd=e=>{e<0&&(e=0);const t=Math.floor(e/1e3);return`${String(Math.floor(t/3600)).padStart(2,"0")}:${String(Math.floor(t%3600/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},ov={difficulty:"medium",count:10,seconds:45},Md={difficulty:"medium",count:10,seconds:0},$r={category:"All",difficulty:"medium",count:10,seconds:45},xn=(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},qi=(e,t)=>localStorage.setItem(e,JSON.stringify(t)),hr=(e,t=ov)=>{const n=Jt(e);try{const r=JSON.parse(localStorage.getItem(Ol)||"{}");if(r&&r[n])return{...t,...r[n]}}catch{}return t},Id=(e,t)=>{const n=Jt(e);let r={};try{r=JSON.parse(localStorage.getItem(Ol)||"{}")}catch{}r[n]={difficulty:t.difficulty,count:t.count,seconds:t.seconds},localStorage.setItem(Ol,JSON.stringify(r))};function av({level:e,xp:t,next:n,onClick:r}){const i=Math.min(t/n,1);return s.jsxs("button",{onClick:r,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left",children:[s.jsxs("div",{className:"text-[11px]",children:["Lvl ",e," • ",t,"/",n]}),s.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:s.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${i*100}%`}})})]})}function lv({total:e,onClick:t,pillRef:n}){return s.jsxs("button",{ref:n,onClick:t,className:"pill",children:["🪙 ",e]})}function cv({size:e=70}){return s.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:"motion-safe:animate-[spin_9s_linear_infinite] active:motion-safe:animate-[spin_1.2s_linear_infinite]",children:[s.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),s.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),s.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),s.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),s.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),s.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function uv({size:e=64,value:t=0,done:n=!1,stroke:r=6,showCheck:i=!1}){const o=(e-r)/2,a=2*Math.PI*o,l=a*(1-Math.min(Math.max(t,0),1)),c=n?"rgb(34 197 94)":"rgb(59,130,246)";return s.jsxs("div",{className:"relative",style:{width:e,height:e},children:[s.jsxs("svg",{width:e,height:e,children:[s.jsx("circle",{cx:e/2,cy:e/2,r:o,stroke:"rgba(255,255,255,.15)",strokeWidth:r,fill:"none"}),s.jsx("circle",{cx:e/2,cy:e/2,r:o,stroke:c,strokeWidth:r,fill:"none",strokeLinecap:"round",strokeDasharray:a,strokeDashoffset:l,style:{transition:"stroke-dashoffset .4s ease, stroke .2s ease"}})]}),i&&s.jsx("div",{className:"absolute inset-0 grid place-items-center text-xl",children:"✅"})]})}function dv({log:e}){const t=["M","T","W","T","F","S","S"],n=iv(new Date),r=Ao(),i=Array.from({length:7}).map((o,a)=>{const l=new Date(n);l.setDate(n.getDate()+a);const c=Ao(l);let u="bg-white/12";return c<r&&(u=e[c]?"bg-green-500":"bg-red-500/80"),c===r&&(u=e[c]?"bg-green-500":"bg-white/12"),{label:t[a],color:u}});return s.jsxs("div",{className:"w-full",children:[s.jsx("div",{className:"flex justify-between text-[11px] text-base-muted/80 px-1 mb-1",children:i.map((o,a)=>s.jsx("span",{className:"w-6 text-center",children:o.label},a))}),s.jsx("div",{className:"flex justify-between px-1",children:i.map((o,a)=>s.jsx("span",{className:`h-1.5 w-6 rounded-full ${o.color}`},a))})]})}function Br({open:e,onClose:t,children:n}){return d.useEffect(()=>{if(!e)return;const r=o=>o.key==="Escape"&&t();document.addEventListener("keydown",r);const i=document.body.style.overflow;return document.body.style.overflow="hidden",document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",r),document.body.style.overflow=i,document.body.classList.remove("modal-open")}},[e,t]),e?vi.createPortal(s.jsxs("div",{className:"fixed inset-0 z-[120] flex items-center justify-center",onClick:t,children:[s.jsx("div",{className:"absolute inset-0 bg-black/60"}),s.jsx("div",{className:`relative w-[calc(100%-2rem)] max-w-md mx-auto rounded-2xl
                   bg-base-card border border-base-border shadow-2xl
                   p-5 pb-[calc(1rem+env(safe-area-inset-bottom))]
                   max-h-[90vh] overflow-y-auto overscroll-contain`,onClick:r=>r.stopPropagation(),children:n})]}),document.body):null}function Fd(){var Ze,Bn,Ue,fn,ws,wi;const e=Ut(),[t]=Pn("/sounds/correct.mp3",{volume:.6}),[n]=Pn("/sounds/wrong.mp3",{volume:.6}),[r]=Pn("/sounds/coin.mp3",{volume:.75}),[i,o]=d.useState(()=>parseInt(localStorage.getItem(_d)||"1",10)),[a,l]=d.useState(()=>parseInt(localStorage.getItem(Ed)||"0",10)),[c,u]=d.useState(()=>parseInt(localStorage.getItem(Rd)||"0",10)),x=Ls(i+1),f=Math.max(0,x-a),p=Math.ceil(f/Ld),[j,b]=d.useState(()=>Number(localStorage.getItem(Sd)||0)),[k,R]=d.useState(()=>Number(localStorage.getItem(Cd)||0)),[v,m]=d.useState(0);d.useEffect(()=>{const S=new Date,se=(S.getDay()+6)%7,Ee=new Date(S);Ee.setDate(S.getDate()-se);const Lt=new Date(S.getFullYear(),0,1),rt=Math.floor((Ee-Lt)/(24*3600*1e3)),zt=Math.floor(rt/7)+1,ht=`${S.getFullYear()}-W${String(zt).padStart(2,"0")}`;let Mt={};try{Mt=JSON.parse(localStorage.getItem(sv)||"{}")}catch{}m(Number(Mt[ht]||0))},[]);const[y,_]=d.useState(Date.now());d.useEffect(()=>{const S=setInterval(()=>_(Date.now()),1e3);return()=>clearInterval(S)},[]);const P=d.useMemo(()=>{const S=new Date,se=new Date(S);return se.setHours(24,0,0,0),se-S},[y]),L=()=>{try{return JSON.parse(localStorage.getItem(za)||"{}")}catch{return{}}},N=S=>{const se=L();se[S]=!0,localStorage.setItem(za,JSON.stringify(se))},[h,g]=d.useState(null),[w,C]=d.useState(null),[E,U]=d.useState(!1),[Y,G]=d.useState(()=>L()[Ao()]===!0),J=d.useRef(!1),W=async()=>{try{const S=await fetch("/data/quiz_questions_bank.csv").then(Mt=>Mt.text()),{data:se}=sa.parse(S,{header:!0,skipEmptyLines:!0});if(!Array.isArray(se)||se.length===0)throw new Error("empty");const Ee=se[Math.floor(Math.random()*se.length)],Lt=[Ee.option1,Ee.option2,Ee.option3,Ee.option4];let rt=String(Ee.answer||"").trim(),ht={A:0,B:1,C:2,D:3}[rt==null?void 0:rt.toUpperCase()];ht===void 0&&(ht=Lt.findIndex(Mt=>(Mt||"").trim().toLowerCase()===rt.toLowerCase())),(ht===-1||ht===void 0)&&(ht=0),g({category:Ee.category||Ee.subject||"General Knowledge",prompt:Ee.question,options:Lt,answerIndex:ht})}catch{g({category:"General Knowledge",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}},T=async()=>{C(null),U(!1),await W()};d.useEffect(()=>{J.current||(J.current=!0,T())},[]),d.useEffect(()=>{const S=()=>{T()},se=()=>{window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("home:refresh",S),window.addEventListener("home:focus",S),window.addEventListener("home:scrollTop",se),()=>{window.removeEventListener("home:refresh",S),window.removeEventListener("home:focus",S),window.removeEventListener("home:scrollTop",se)}},[]);const z=d.useRef(null),$=d.useRef(null),[O,Q]=d.useState(()=>xn(Or,null));d.useEffect(()=>{const S=setInterval(()=>Q(xn(Or,null)),1500);return()=>clearInterval(S)},[]);const[B,oe]=d.useState(null),ae=S=>{let se=a+S,Ee=i;for(;se>=Ls(Ee+1);)Ee+=1;l(se),o(Ee),localStorage.setItem(Ed,String(se)),localStorage.setItem(_d,String(Ee))},ce=S=>{const se=c+S;u(se),localStorage.setItem(Rd,String(se))},xe=(S,se)=>{if(!h||w!==null)return;C(S);const Ee=S===h.answerIndex,Lt=Ao(),rt=localStorage.getItem(Nd)||"";if(Ee)if(t(),se!=null&&se.currentTarget&&$.current){const zt=se.currentTarget.getBoundingClientRect();r(),oe({startRect:zt,count:14,amount:Td})}else ae(Pd),ce(Td);else n();setTimeout(()=>{if(N(Lt),rt!==Lt){localStorage.setItem(Nd,Lt);let zt=1;if(rt){const Mt=Math.round((new Date(Lt)-new Date(rt))/864e5);zt=Mt===1?j+1:Mt>1?1:j}b(zt),localStorage.setItem(Sd,String(zt));const ht=Math.max(k,zt);R(ht),localStorage.setItem(Cd,String(ht))}G(!0),U(!0)},600)},I=d.useRef(null),q=d.useRef(null),re=d.useRef(null),H=d.useCallback(()=>{const S=E?q.current:I.current;if(!S||!re.current)return;const se=S.scrollHeight;re.current.style.height=`${se}px`},[E]);d.useLayoutEffect(()=>{H()},[H,h,w]),d.useEffect(()=>{const S=()=>H();return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[H]);const[X,le]=d.useState(!1),[F,M]=d.useState(!1),[K,ue]=d.useState(!1),[Z,ie]=d.useState(!1),[je,Be]=d.useState(null),[We,Se]=d.useState(hr("default").difficulty),[ve,Xe]=d.useState(hr("default").count),[Ne,Me]=d.useState(hr("default").seconds),[Ge,we]=d.useState(!1),[Je,Ie]=d.useState(null),[Qe,bt]=d.useState(((Ze=xn(Ui,Md))==null?void 0:Ze.difficulty)||"medium"),[Tt,zr]=d.useState(((Bn=xn(Ui,Md))==null?void 0:Bn.count)||10),[An,qt]=d.useState(!1),[wt,Mr]=d.useState(((Ue=xn(pr,$r))==null?void 0:Ue.category)||"All"),[jt,Re]=d.useState(((fn=xn(pr,$r))==null?void 0:fn.difficulty)||"medium"),[un,mr]=d.useState(((ws=xn(pr,$r))==null?void 0:ws.count)||10),[$n,Ir]=d.useState(((wi=xn(pr,$r))==null?void 0:wi.seconds)||45),[Fr,dn]=d.useState(!1),[ee,me]=d.useState(null),Fe=S=>{const se=hr(S);Be(S),Se(se.difficulty),Xe(se.count),Me(se.seconds),ie(!0)},Ce=S=>{const se=hr(S);Id(S,se),e(`/quiz/${Jt(S)}/start`,{state:{mode:"quiz",difficulty:se.difficulty,count:se.count,timer:{type:"per_q",seconds:se.seconds}}})},he=()=>{const S=xn(pr,$r);qi(pr,S||$r),e(`/quiz/${(S==null?void 0:S.category)==="All"?"mixed":Jt((S==null?void 0:S.category)||"mixed")}/start`,{state:{mode:"quiz",difficulty:(S==null?void 0:S.difficulty)||"medium",count:(S==null?void 0:S.count)||10,timer:{type:"per_q",seconds:(S==null?void 0:S.seconds)??45},daily:!0}})},Ve=()=>{const S=xn(Or,null);S!=null&&S.slug&&e(`/quiz/${S.slug}/start`,{state:{resume:!0}})},Ye=ee?`Category: ${ee}
Difficulty: ${Ar(hr(ee).difficulty)}
Question count: ${hr(ee).count}`:"";(()=>{try{const S=JSON.parse(localStorage.getItem(Or)||"null");return(S==null?void 0:S.inProgress)&&(S==null?void 0:S.slug)===Jt(ee||"")}catch{return!1}})(),(()=>{try{const S=JSON.parse(localStorage.getItem(Or)||"null");return!S||S.slug!==Jt(ee||"")?null:{index:S.index??0,total:S.total??0,remainingSec:S.remainingSec}}catch{return null}})();const Nn=()=>{ee&&(dn(!1),Ce(ee))},ut=()=>{ee&&(dn(!1),e(`/quiz/${Jt(ee)}`,{state:{resume:!0}}))},kt=()=>{ee&&(dn(!1),Fe(ee))};return s.jsxs("div",{className:"relative pb-24 pt-[max(env(safe-area-inset-top))]",children:[B&&s.jsx(zp,{startRect:B.startRect,targetRef:$,count:B.count,onDone:()=>{ae(Pd),ce(B.amount),oe(null)}}),s.jsxs("header",{className:"flex items-center justify-between mb-6 pt-12",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("button",{className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5",onClick:()=>e("/profile"),"aria-label":"Open profile",children:"👤"}),s.jsxs("div",{children:[s.jsx("p",{className:"text-sm text-base-muted",children:"Hi, Nirmal"}),s.jsx("h1",{className:"text-xl font-semibold",children:"Let’s play"})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(av,{level:i,xp:a,next:Ls(i+1),onClick:()=>le(!0)}),s.jsx(lv,{pillRef:$,total:c,onClick:()=>M(!0)})]})]}),(O==null?void 0:O.inProgress)&&s.jsxs("div",{className:"rounded-2xl border border-base-border bg-white/5 p-3 mb-4 flex items-center justify-between",children:[s.jsxs("div",{className:"text-sm",children:[s.jsxs("div",{className:"font-medium",children:["Resume ",O.mode==="practice"?"Practice":"Quiz"]}),s.jsxs("div",{className:"text-base-muted text-xs",children:[O.category," • Q",O.index+1,"/",O.total,O.remainingSec?s.jsxs(s.Fragment,{children:[" • ⏱ ",O.remainingSec,"s left"]}):null]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:()=>{localStorage.removeItem(Or),Q(null)},children:"Discard"}),s.jsx("button",{className:"btn-primary px-3 py-1.5 rounded-xl",onClick:Ve,children:"Resume"})]})]}),s.jsx("button",{onClick:()=>e("/play"),className:"group w-full rounded-3xl p-5 mb-6 text-left bg-gradient-to-br from-brand-blue/30 to-brand-purple/20 border border-base-border",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-2xl font-bold mb-1",children:"Spin & Play"}),s.jsx("div",{className:"text-sm text-base-muted",children:"1 quick question • Earn XP & coins"})]}),s.jsx(cv,{size:76})]})}),s.jsx("section",{className:"card mb-6",children:s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(uv,{value:Y?1:0,done:Y,showCheck:Y}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold",children:"Streak Center"}),s.jsxs("div",{className:"text-sm text-base-muted",children:["🔥 ",j," days",s.jsx("span",{className:"mx-1 text-base-muted/60",children:"|"}),"Best ",k,s.jsx("span",{className:"mx-1 text-base-muted/60",children:"|"}),"Keep coming!"]}),s.jsx("div",{className:"mt-2",children:s.jsx(dv,{log:(()=>{try{return JSON.parse(localStorage.getItem(za)||"{}")}catch{return{}}})()})})]})]})}),h&&s.jsx("section",{className:"card mb-8",children:s.jsxs("div",{className:"relative",style:{perspective:"1200px"},children:[s.jsx("div",{ref:re,style:{height:0,transition:"height 320ms ease"}}),s.jsx("div",{className:"absolute inset-0",children:s.jsxs("div",{className:"relative transition-transform duration-700 [transform-style:preserve-3d]",style:{transform:E?"rotateY(180deg)":"rotateY(0deg)"},children:[s.jsxs("div",{ref:I,className:"absolute inset-0 [backface-visibility:hidden] p-5",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h3",{className:"text-lg font-semibold",children:"Today’s Question"}),s.jsxs("span",{className:"text-xs text-base-muted",children:["Next in ",s.jsx("span",{className:"font-mono text-base-text",children:zd(P)})]})]}),s.jsxs("div",{className:"text-xs text-base-muted mb-1",children:["Category: ",h.category]}),s.jsx("p",{className:"text-base font-semibold mb-4",children:h.prompt}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:h.options.map((S,se)=>{const Ee=se===h.answerIndex,Lt=w===se,rt="flex items-center gap-2 px-3 py-3 rounded-xl border transition disabled:opacity-60",zt="bg-white/5 border-base-border text-base-text hover:bg-white/10",ht="bg-green-600/20 border-green-500/50 text-green-300",Mt="bg-red-600/20 border-red-500/50 text-red-300";return s.jsxs("button",{disabled:w!==null,onClick:ji=>xe(se,ji),className:[rt,w!==null?Lt&&(Ee?ht:Mt):zt].join(" "),children:[s.jsx("span",{className:"font-bold",children:["A.","B.","C.","D."][se]}),s.jsx("span",{children:S})]},se)})})]}),s.jsx("div",{ref:q,className:"absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] p-5",children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("div",{className:"text-2xl",children:"🎉"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-lg font-semibold text-green-400",children:"Congrats!"}),s.jsxs("div",{className:"text-sm text-base-muted",children:["Today’s question ",s.jsx("span",{className:"inline-block",children:"✅"}),s.jsx("span",{className:"mx-1 text-base-muted/60",children:"•"}),"Next in ",s.jsx("span",{className:"font-mono text-base-text",children:zd(P)})]})]})]})})]})})]})}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h2",{className:"text-lg font-semibold",children:"Play"}),s.jsx("span",{className:"text-xs text-base-muted",children:"Tap = Start • ⚙️ = Change"})]}),s.jsx("div",{ref:z,className:"grid grid-cols-3 gap-4 mb-4",children:rv.map(S=>s.jsxs("div",{className:"relative",children:[S.name!=="More"&&s.jsxs("button",{type:"button",onClick:()=>{me(S.name),dn(!0)},className:"w-full rounded-2xl p-3 text-left bg-white/5 border border-base-border hover:bg-white/10 transition","aria-label":`Start ${S.name} quiz`,children:[s.jsx("div",{className:"text-2xl mb-2",children:S.icon}),s.jsx("div",{className:"text-[13px] font-medium leading-tight",children:S.name}),s.jsxs("div",{className:"text-[10px] text-base-muted mt-1",children:[S.questions," questions"]})]}),S.name==="More"&&s.jsxs("button",{onClick:()=>ue(!0),className:"w-full rounded-2xl p-3 text-left bg-white/5 border border-base-border hover:bg-white/10 transition",children:[s.jsx("div",{className:"text-2xl mb-2",children:S.icon}),s.jsx("div",{className:"text-[13px] font-medium leading-tight",children:"More"}),s.jsx("div",{className:"text-[10px] text-base-muted mt-1",children:"See all"})]}),S.name!=="More"&&s.jsx("button",{className:"absolute right-2 top-2 text-xs px-2 py-1 rounded-lg bg-white/5 border border-base-border",onClick:se=>{se.stopPropagation(),Fe(S.name)},"aria-label":"Customize",title:"Customize",children:"⚙️"})]},S.name))}),s.jsx("div",{className:"rounded-3xl border border-base-border p-4 mb-8 bg-gradient-to-br from-brand-blue/25 to-brand-purple/20",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-base-muted",children:"Daily Challenge"}),s.jsxs("div",{className:"text-sm mt-1",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-base-muted",children:"Category:"})," ",wt]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-base-muted",children:"Difficulty:"})," ",Ar(jt)]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-base-muted",children:"Question count:"})," ",un]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:()=>qt(!0),children:"Customize"}),s.jsx("button",{className:"btn-primary px-3 py-1.5 rounded-xl",onClick:he,children:"Start"})]})]})}),s.jsx("h2",{className:"text-lg font-semibold mb-2",children:"Learn"}),s.jsxs("div",{className:"rounded-3xl border border-base-border p-4 mb-4 bg-gradient-to-br from-brand-purple/20 to-brand-blue/15",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-sm text-base-muted",children:"Practice Questions"}),s.jsxs("div",{className:"text-sm mt-1",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-base-muted",children:"Category:"})," ",Je||"General Knowledge"]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-base-muted",children:"Difficulty:"})," ",Ar(Qe)]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-base-muted",children:"Question count:"})," ",Tt]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:()=>we(!0),children:"Customize"}),s.jsx("button",{className:"btn-primary px-3 py-1.5 rounded-xl",onClick:()=>{const S=Je||"General Knowledge";qi(Ui,{difficulty:Qe,count:Tt}),e(`/quiz/${Jt(S)}/start`,{state:{mode:"practice",difficulty:Qe,count:Tt,timer:{type:"off",seconds:0}}})},children:"Start"})]})]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Timer off • Explanations on"})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("h3",{className:"text-lg font-semibold",children:"Fun Facts"}),s.jsx("span",{className:"text-xs text-base-muted",children:"Curiosity"})]}),s.jsx("div",{className:"flex gap-3 overflow-x-auto pb-1 no-scrollbar snap-x mb-8",children:[{id:"isro-moon",emoji:"🌕",text:"Chandrayaan-3 landed near the Moon’s south pole."},{id:"zero",emoji:"0️⃣",text:"‘Zero’ was formalised in India ~1500 years ago."},{id:"bose",emoji:"🧪",text:"S. N. Bose’s work led to the term ‘boson’."},{id:"pi",emoji:"🥧",text:"Ancient Indian texts estimated π early on."}].map(S=>s.jsxs("div",{className:"min-w-[240px] snap-start rounded-2xl bg-white/5 border border-base-border p-4",children:[s.jsx("div",{className:"text-2xl mb-2",children:S.emoji}),s.jsx("div",{className:"text-sm mb-3",children:S.text}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{className:"px-2.5 py-1 rounded-lg border border-base-border bg-white/5 text-xs",children:"❤️ Save"}),s.jsx("button",{className:"px-2.5 py-1 rounded-lg border border-base-border bg-white/5 text-xs",onClick:()=>e(`/quiz/${Jt("fun-facts")}/start`,{state:{mode:"quiz",count:3,difficulty:"easy",timer:{type:"per_q",seconds:20},source:"fun_facts"}}),children:"➡️ Mini-Quiz (3)"})]})]},S.id))}),s.jsx(nv,{open:Fr,categoryLabel:ee||"",summary:Ye,hasResume:!1,resumeInfo:null,onStart:Nn,onResume:ut,onChange:kt,onClose:()=>dn(!1)}),s.jsxs(Br,{open:X,onClose:()=>le(!1),children:[s.jsx("div",{className:"relative",children:s.jsx("button",{className:"absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border",onClick:()=>le(!1),children:"✕"})}),s.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Levels & Progress"}),s.jsxs("p",{className:"text-sm text-base-muted mb-4",children:["Lvl ",i,": ",a,"/",Ls(i+1)," XP"]}),s.jsx("div",{className:"space-y-2 mb-4",children:[1,2,3,4,5].map(S=>{const se=i+S,Ee=Math.max(0,Ls(se)-a);return s.jsxs("div",{className:"flex items-center justify-between rounded-xl border border-base-border bg-white/5 px-3 py-2",children:[s.jsxs("div",{className:"text-sm",children:["Level ",se]}),s.jsxs("div",{className:"text-xs text-base-muted",children:["needs ",Ee," XP"]})]},se)})}),s.jsxs("div",{className:"rounded-xl bg-white/5 border border-base-border p-3 mb-4",children:[s.jsxs("div",{className:"text-sm mb-1",children:["Next level in ",s.jsx("b",{children:f})," XP"]}),s.jsxs("div",{className:"text-xs text-base-muted",children:["At ",Ld," XP/coin, you’d need ~",s.jsx("b",{children:p})," coins."]})]}),s.jsx("button",{className:"btn-primary w-full",onClick:()=>le(!1),children:"Got it"})]}),s.jsxs(Br,{open:F,onClose:()=>M(!1),children:[s.jsx("div",{className:"relative",children:s.jsx("button",{className:"absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border",onClick:()=>M(!1),children:"✕"})}),s.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Earn coins"}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("button",{className:"w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left",onClick:()=>{var S;M(!1),(S=z.current)==null||S.scrollIntoView({behavior:"smooth"})},children:[s.jsx("div",{className:"font-medium",children:"Attempt a quiz"}),s.jsx("div",{className:"text-xs text-base-muted",children:"50 coins / quiz"})]}),s.jsxs("button",{className:"w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left",onClick:()=>{M(!1),e("/play")},children:[s.jsx("div",{className:"font-medium",children:"Spin & Play"}),s.jsx("div",{className:"text-xs text-base-muted",children:"5 coins / spin"})]}),s.jsxs("button",{className:"w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left",onClick:()=>alert("Video screen will come soon"),children:[s.jsx("div",{className:"font-medium",children:"Watch a video"}),s.jsx("div",{className:"text-xs text-base-muted",children:"20 coins / video"})]}),s.jsxs("button",{className:"w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left",onClick:()=>{const S=encodeURIComponent("Try Quizify! Learn fast, earn coins, and challenge friends.");window.open(`https://wa.me/?text=${S}`,"_blank")},children:[s.jsx("div",{className:"font-medium",children:"Invite a friend"}),s.jsx("div",{className:"text-xs text-base-muted",children:"50 coins / invite"})]})]}),s.jsx("button",{className:"btn-primary w-full mt-4",onClick:()=>M(!1),children:"Close"})]}),s.jsxs(Br,{open:K,onClose:()=>ue(!1),children:[s.jsx("div",{className:"relative",children:s.jsx("button",{className:"absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border",onClick:()=>ue(!1),children:"✕"})}),s.jsx("h3",{className:"text-lg font-semibold mb-3",children:"More categories"}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:Uc.map(S=>s.jsxs("button",{className:"rounded-2xl p-3 text-left bg-white/5 border border-base-border hover:bg-white/10 transition",onClick:()=>{ue(!1),me(S.name),dn(!0)},children:[s.jsx("div",{className:"text-2xl mb-1",children:S.icon}),s.jsx("div",{className:"text-sm font-medium",children:S.name}),s.jsxs("div",{className:"text-[10px] text-base-muted mt-1",children:[S.questions," questions"]})]},S.name))})]}),s.jsxs(Br,{open:Z,onClose:()=>ie(!1),centered:!0,children:[s.jsx("div",{className:"relative",children:s.jsx("button",{className:"absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border",onClick:()=>ie(!1),children:"✕"})}),s.jsxs("h3",{className:"text-lg font-semibold mb-2",children:[je," — Quiz"]}),s.jsx("div",{className:"grid grid-cols-3 gap-2 mb-3",children:["easy","medium","hard"].map(S=>s.jsx("button",{onClick:()=>Se(S),className:`px-3 py-2 rounded-xl border ${We===S?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:Ar(S)},S))}),s.jsx("div",{className:"grid grid-cols-4 gap-2 mb-3",children:[5,10,20,30].map(S=>s.jsx("button",{onClick:()=>Xe(S),className:`px-3 py-2 rounded-xl border text-sm ${ve===S?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:S},S))}),s.jsxs("div",{className:"rounded-xl border border-base-border bg-white/5 p-3 mb-4",children:[s.jsx("div",{className:"text-sm font-medium mb-1",children:"Timer"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm text-base-muted",children:"⏱ Per-Q"}),s.jsx("input",{type:"number",min:10,max:120,value:Ne,onChange:S=>Me(Number(S.target.value)||45),className:"w-20 px-2 py-1 rounded-lg bg-base-bg border border-base-border text-sm"}),s.jsx("span",{className:"text-sm text-base-muted",children:"sec"})]}),s.jsx("div",{className:"text-[11px] text-base-muted mt-1",children:"Default 45s per question (discover via ⚙️)."})]}),s.jsx("button",{className:"btn-primary w-full",onClick:()=>{Id(je,{difficulty:We,count:ve,seconds:Ne}),ie(!1),Ce(je)},children:"Save & Start"})]}),s.jsxs(Br,{open:Ge,onClose:()=>we(!1),centered:!0,children:[s.jsx("div",{className:"relative",children:s.jsx("button",{className:"absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border",onClick:()=>we(!1),children:"✕"})}),s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Customize Practice"}),s.jsx("div",{className:"mb-2 text-xs text-base-muted",children:"Category"}),s.jsx("div",{className:"grid grid-cols-2 gap-2 mb-3",children:kd.map(S=>s.jsx("button",{onClick:()=>Ie(S),className:`px-3 py-2 rounded-xl border text-left ${Je===S?"bg-white/10":"bg-white/5"} border-base-border`,children:S},S))}),s.jsx("div",{className:"mb-2 text-xs text-base-muted",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2 mb-3",children:["easy","medium","hard"].map(S=>s.jsx("button",{onClick:()=>bt(S),className:`px-3 py-2 rounded-xl border ${Qe===S?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:Ar(S)},S))}),s.jsx("div",{className:"mb-2 text-xs text-base-muted",children:"Question count"}),s.jsx("div",{className:"grid grid-cols-4 gap-2 mb-4",children:[5,10,20,30].map(S=>s.jsx("button",{onClick:()=>zr(S),className:`px-3 py-2 rounded-xl border text-sm ${Tt===S?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:S},S))}),s.jsx("button",{className:"btn-primary w-full",onClick:()=>{const S=Je||"General Knowledge";qi(Ui,{difficulty:Qe,count:Tt}),we(!1),e(`/quiz/${Jt(S)}/start`,{state:{mode:"practice",difficulty:Qe,count:Tt,timer:{type:"off",seconds:0}}})},children:"Save & Start"})]}),s.jsxs(Br,{open:An,onClose:()=>qt(!1),centered:!0,children:[s.jsx("div",{className:"relative",children:s.jsx("button",{className:"absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border",onClick:()=>qt(!1),children:"✕"})}),s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Customize Today"}),s.jsx("div",{className:"mb-2 text-xs text-base-muted",children:"Category"}),s.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[s.jsx("button",{onClick:()=>Mr("All"),className:`px-3 py-2 rounded-xl border ${wt==="All"?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:"All"}),kd.map(S=>s.jsx("button",{onClick:()=>Mr(S),className:`px-3 py-2 rounded-xl border ${wt===S?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:S},S))]}),s.jsx("div",{className:"mb-2 text-xs text-base-muted",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2 mb-2",children:["easy","medium","hard"].map(S=>s.jsx("button",{onClick:()=>Re(S),className:`px-3 py-2 rounded-xl border ${jt===S?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:Ar(S)},S))}),s.jsx("div",{className:"mb-2 text-xs text-base-muted",children:"Question count"}),s.jsx("div",{className:"grid grid-cols-4 gap-2 mb-3",children:[5,10,20,30].map(S=>s.jsx("button",{onClick:()=>mr(S),className:`px-3 py-2 rounded-xl border text-sm ${un===S?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:S},S))}),s.jsxs("div",{className:"rounded-xl border border-base-border bg-white/5 p-3 mb-4",children:[s.jsx("div",{className:"text-sm font-medium mb-1",children:"Timer"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm text-base-muted",children:"⏱ Per-Q"}),s.jsx("input",{type:"number",min:10,max:120,value:$n,onChange:S=>Ir(Number(S.target.value)||45),className:"w-20 px-2 py-1 rounded-lg bg-base-bg border border-base-border text-sm"}),s.jsx("span",{className:"text-sm text-base-muted",children:"sec"})]}),s.jsx("div",{className:"text-[11px] text-base-muted mt-1",children:"Timer configurable here only."})]}),s.jsx("button",{className:"btn-primary w-full",onClick:()=>{qi(pr,{category:wt,difficulty:jt,count:un,seconds:$n}),qt(!1),e(`/quiz/${wt==="All"?"mixed":Jt(wt)}/start`,{state:{mode:"quiz",difficulty:jt,count:un,timer:{type:"per_q",seconds:$n},daily:!0}})},children:"Save & Start"})]})]})}var fo={linear:function(e,t,n,r){var i=n-t;return i*e/r+t},easeInQuad:function(e,t,n,r){var i=n-t;return i*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){var i=n-t;return-i*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e+t},easeOutCubic:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,n,r){var i=n-t;return-i*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,r){var i=n-t;return-i*Math.cos(e/r*(Math.PI/2))+i+t},easeOutSine:function(e,t,n,r){var i=n-t;return i*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,n,r){var i=n-t;return-i/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,n,r){var i=n-t;return e==0?t:i*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(e,t,n,r){var i=n-t;return e==r?t+i:i*(-Math.pow(2,-10*e/r)+1)+t},easeInOutExpo:function(e,t,n,r){var i=n-t;return e===0?t:e===r?t+i:(e/=r/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,n,r){var i=n-t;return-i*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(e,t,n,r){var i=n-t;return i*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t)},easeOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),o*Math.pow(2,-10*e)*Math.sin((e*r-l)*(2*Math.PI)/a)+i+t)},easeInOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r/2)===2?t+i:(a||(a=r*(.3*1.5)),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a)*.5+i+t)},easeInBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*(e/=r)*e*((i+1)*e-i)+t},easeOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*((e=e/r-1)*e*((i+1)*e+i)+1)+t},easeInOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),(e/=r/2)<1?o/2*(e*e*(((i*=1.525)+1)*e-i))+t:o/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t},easeInBounce:function(e,t,n,r){var i=n-t,o;return o=fo.easeOutBounce(r-e,0,i,r),i-o+t},easeOutBounce:function(e,t,n,r){var i=n-t;return(e/=r)<1/2.75?i*(7.5625*e*e)+t:e<2/2.75?i*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?i*(7.5625*(e-=2.25/2.75)*e+.9375)+t:i*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,n,r){var i=n-t,o;return e<r/2?(o=fo.easeInBounce(e*2,0,i,r),o*.5+t):(o=fo.easeOutBounce(e*2-r,0,i,r),o*.5+i*.5+t)}},fv=fo;function mv(e){return e*Math.PI/180}function It(e,t){return e+Math.random()*(t-e)}function pv(e,t){return Math.floor(e+Math.random()*(t-e+1))}var Ys;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(Ys||(Ys={}));var Kn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(Kn||(Kn={}));const hv=1e3/60;class xv{constructor(t,n,r,i){this.getOptions=n;const{colors:o,initialVelocityX:a,initialVelocityY:l}=this.getOptions();this.context=t,this.x=r,this.y=i,this.w=It(5,20),this.h=It(5,20),this.radius=It(5,10),this.vx=typeof a=="number"?It(-a,a):It(a.min,a.max),this.vy=typeof l=="number"?It(-l,0):It(l.min,l.max),this.shape=pv(0,2),this.angle=mv(It(0,360)),this.angularSpin=It(-.2,.2),this.color=o[Math.floor(Math.random()*o.length)],this.rotateY=It(0,1),this.rotationDirection=It(0,1)?Kn.Positive:Kn.Negative}update(t){const{gravity:n,wind:r,friction:i,opacity:o,drawShape:a}=this.getOptions(),l=t/hv;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=n*l,this.vx+=r*l,this.vx*=i**l,this.vy*=i**l,this.rotateY>=1&&this.rotationDirection===Kn.Positive?this.rotationDirection=Kn.Negative:this.rotateY<=-1&&this.rotationDirection===Kn.Negative&&(this.rotationDirection=Kn.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,a&&typeof a=="function")a.call(this,this.context);else switch(this.shape){case Ys.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case Ys.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case Ys.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class gv{constructor(t,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=i=>{this.particles.splice(i,1)},this.getParticle=()=>{const i=It(this.x,this.w+this.x),o=It(this.y,this.h+this.y);return new xv(this.context,this.getOptions,i,o)},this.animate=i=>{const{canvas:o,context:a,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:x,numberOfPieces:f,debug:p,tweenFunction:j,tweenDuration:b}=this.getOptions();if(!u)return!1;const k=this.particles.length,R=x?k:l;if(R<f){c!==f&&(this.tweenProgress=0,this.tweenFrom=R,this.lastNumberOfPieces=f),this.tweenProgress=Math.min(b,Math.max(0,this.tweenProgress+i));const v=j(this.tweenProgress,this.tweenFrom,f,b),m=Math.round(v-R);for(let y=0;y<m;y++)this.particles.push(this.getParticle());this.particlesGenerated+=m}p&&(a.font="12px sans-serif",a.fillStyle="#333",a.textAlign="right",a.fillText(`Particles: ${k}`,o.width-10,o.height-20));for(let v=this.particles.length-1;v>=0;v--){const m=this.particles[v];m.update(i),(m.y>o.height||m.y<-100||m.x>o.width+100||m.x<-100)&&(x&&R<=f?this.particles[v]=this.getParticle():this.removeParticleAt(v))}return k>0||R<f},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.getOptions=n}}const qc={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:fv.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class vv{constructor(t,n){this.lastFrameTime=0,this.setOptionsWithDefaults=i=>{const o={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...o,...qc,...i},Object.assign(this,i.confettiSource)},this.update=(i=0)=>{const{options:{run:o,onConfettiComplete:a,frameRate:l},canvas:c,context:u}=this,x=Math.min(i-this.lastFrameTime,50);if(l&&x<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=i-(l?x%l:0),o&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(x)?this.rafId=requestAnimationFrame(this.update):(a&&typeof a=="function"&&this.generator.particlesGenerated>0&&a.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.generator=new gv(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(t){var i,o;const n=(i=this._options)==null?void 0:i.run,r=(o=this._options)==null?void 0:o.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&r===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&n===!1&&this.update()}}const yv=St.createRef();class Wc extends St.Component{constructor(t){super(t),this.canvas=St.createRef(),this.canvas=t.canvasRef||yv}componentDidMount(){if(this.canvas.current){const t=Ma(this.props)[0];this.confetti=new vv(this.canvas.current,t)}}componentDidUpdate(){const t=Ma(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,n]=Ma(this.props),r={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return s.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...n,style:r})}}Wc.defaultProps={...qc};Wc.displayName="ReactConfetti";function Ma(e){const t={},n={},r={},i=[...Object.keys(qc),"confettiSource","drawShape","onConfettiComplete","frameRate"],o=["canvasRef"];for(const a in e){const l=e[a];i.includes(a)?t[a]=l:o.includes(a)?o[a]=l:r[a]=l}return[t,r,n]}const Ip=St.forwardRef((e,t)=>s.jsx(Wc,{canvasRef:t,...e})),bv=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],nn=bv.slice(0,6),wn=360/nn.length,Fp={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},gn={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},Wn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},vn={get:(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}},Sr=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Dd=e=>(e%360+360)%360,Qc=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},as=(e,t=.7)=>{try{const n=new Audio(e);n.volume=t,n.play()}catch{}};function Od({onModeSelect:e,onNavigateHome:t}){return s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center mb-8",children:[s.jsx("button",{onClick:t,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"}),s.jsx("h1",{className:"flex-1 text-center text-xl font-bold mb-12",children:"Choose a quiz mode"})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[nn.map((n,r)=>{const i=r*wn,o=i+wn,a=wn>180?1:0,l=Math.PI*i/180,c=Math.PI*o/180,u=50+40*Math.cos(l),x=50-40*Math.sin(l),f=50+40*Math.cos(c),p=50-40*Math.sin(c);return s.jsx("path",{d:`M50,50 L${u},${x} A40,40 0 ${a} 0 ${f},${p} Z`,fill:n.color,stroke:"white",strokeWidth:"0.5"},r)}),s.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),s.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),s.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),s.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),s.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),s.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),s.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10 ",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💀"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-red-400 to-pink-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💰"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TREASURE MINE"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"📱"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function wv({run:e,coins:t,xp:n,level:r,ownedCharacters:i,onSpin:o,onBack:a,spinning:l,angle:c,transition:u,result:x,showCallout:f,glowColor:p,soundOn:j,setSoundOn:b,showSparkle:k,pulseIdx:R,nextProgressIdx:v,pendingProgressIdx:m,coinBurstTick:y,lastAnswerWasCorrect:_}){const P=100*r*(r-1),[L,N]=d.useState(!1),h=d.useRef(0),g=d.useRef(null),w=d.useRef(null),[C,E]=d.useState({dx:110,dy:-260});d.useEffect(()=>{if(m==null)return;N(!1);const G=setTimeout(()=>N(!0),30);return()=>clearTimeout(G)},[m]);const[U,Y]=d.useState(!1);return d.useEffect(()=>{var J,W,T,z;if(!y||!_||y===h.current)return;h.current=y;try{const $=(W=(J=w==null?void 0:w.current)==null?void 0:J.getBoundingClientRect)==null?void 0:W.call(J),O=(z=(T=g==null?void 0:g.current)==null?void 0:T.getBoundingClientRect)==null?void 0:z.call(T);if($&&O){const Q=$.left+$.width/2,B=$.top+$.height/2,oe=O.left+O.width/2,ae=O.top+O.height/2;E({dx:oe-Q,dy:ae-B})}}catch{}j&&as("/sounds/coin.mp3",.7),Y(!0);const G=setTimeout(()=>Y(!1),700);return()=>clearTimeout(G)},[y,j]),s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-8",children:[s.jsx("button",{onClick:a,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[s.jsxs("div",{className:"text-[11px]",children:["Lvl ",r," • ",n,"/",P]}),s.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:s.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(n/P,1)*100}%`}})})]}),s.jsxs("button",{ref:g,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),s.jsx("button",{onClick:()=>b(!j),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:s.jsx("span",{className:"text-lg",children:j?"🔊":"🔇"})})]}),i.length>0&&s.jsx("div",{className:"flex justify-center mb-6",children:s.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:i.map(G=>{const J=nn.find(T=>Sr(T.name)===G),W=Fp[G];return s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:s.jsx("span",{className:"text-sm",children:J==null?void 0:J.icon})}),s.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:W})]},G)})})}),s.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:s.jsxs("div",{className:"w-80 max-w-full",children:[s.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),s.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(G=>{const J=["#FF9800","#FFC107","#cadd75ff"],W=!!e.progress[G];return s.jsxs("div",{className:"relative h-full bg-white/10",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:W?G===m?L?"100%":"0%":v===G&&m==null?"0%":"100%":"0%",backgroundColor:J[G],transition:G===m?"width 1200ms ease-out":"none"}}),R===G&&s.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:s.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),k===G&&s.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},G)})},e.qIndex)]})}),s.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:s.jsxs("div",{ref:w,className:"relative w-96 h-96 rounded-full select-none",children:[p&&s.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${p}40, 0 0 40px 12px ${p}60`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[nn.map((G,J)=>{const W=J*wn,T=W+wn,z=wn>180?1:0,$=Math.PI*W/180,O=Math.PI*T/180,Q=50+45*Math.cos($),B=50-45*Math.sin($),oe=50+45*Math.cos(O),ae=50-45*Math.sin(O),ce=W+wn/2,xe=28,I=50+xe*Math.cos(ce*Math.PI/180),q=50-xe*Math.sin(ce*Math.PI/180);return s.jsxs("g",{children:[s.jsx("path",{d:`M50,50 L${Q},${B} A45,45 0 ${z} 0 ${oe},${ae} Z`,fill:G.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),s.jsx("text",{x:I,y:q,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:G.icon})]},J)}),s.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),s.jsx("button",{onClick:o,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:s.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:s.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),f&&x&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:s.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[s.jsx("span",{className:"mr-2",children:x.cat.icon}),x.cat.name]})}),U&&s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(G=>s.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${G*80}ms forwards`,"--coin-dx":`${C.dx}px`,"--coin-dy":`${C.dy}px`},children:s.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},G))]})]})}),s.jsx("div",{className:"text-center",children:s.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}function Ad({category:e,onComplete:t,isBonus:n=!1,soundOn:r=!0}){return d.useEffect(()=>{r&&as("/sounds/flush.mp3",.8);const i=setTimeout(t,1e3);return Qc([50]),()=>clearTimeout(i)},[t,r]),n?s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[s.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),s.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:s.jsx("span",{className:"text-6xl",children:"⭐"})})]}):s.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:s.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[s.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[s.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),s.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),s.jsxs("div",{className:"relative z-10 text-center",children:[s.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),s.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:s.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function jv({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:s.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function $d({question:e,category:t,onAnswer:n,run:r,timeLeft:i,usedLifelines:o,onUseLifeline:a,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:x,onTimeUpBackToWheel:f,soundOn:p}){const[j,b]=d.useState(null),[k,R]=d.useState(!1),[v,m]=d.useState(!1),y=d.useRef(null),_=d.useRef(null),[P,L]=d.useState(null);d.useEffect(()=>{if(!k||!y.current)return;const g=y.current.getBoundingClientRect();L({x:g.left,y:g.top-300,w:g.width,h:8})},[k]);const N=g=>{if(k)return;b(g),R(!0);const w=g===e.correctIndex;Qc(w?[50,30,50]:[200]),p&&as(w?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{n(w,null)},1500)},h=j===e.correctIndex;return s.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:s.jsxs("div",{ref:_,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsx("div",{className:"mb-4",children:s.jsx("button",{onClick:()=>m(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),s.jsxs("div",{className:"text-center mb-6",children:[s.jsx("div",{className:`text-4xl font-black mb-2 ${i<=10?"text-red-400 animate-pulse":"text-white"}`,children:i}),s.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:s.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${i<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${i/30*100}%`}})})]}),s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),s.jsxs("div",{children:[s.jsx("div",{className:"text-lg font-bold",children:t.name}),s.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",r.qIndex+1,"/3"]})]})]}),s.jsx("h2",{ref:y,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),s.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((g,w)=>{const C=l.includes(w),E=j===w,U=w===e.correctIndex;let Y="bg-white/10 border-white/20",G="opacity-100";return C?G="opacity-30":k&&E?Y=U?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":k&&U?Y="bg-green-500/30 border-green-400":E&&(Y="bg-white/20 border-white/40"),s.jsx("button",{onClick:()=>N(w),disabled:k||C,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${Y} ${G} ${!k&&!C?"hover:bg-white/15 active:scale-98":""}`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+w)}),s.jsx("span",{className:"font-medium flex-1",children:g}),c&&s.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[w]),"%"]})]})},w)})}),!k&&s.jsxs("div",{className:"flex gap-4 mb-8",children:[s.jsx("button",{onClick:()=>a("fifty"),disabled:o.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),s.jsx("button",{onClick:()=>a("audience"),disabled:o.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),k&&s.jsxs("div",{className:"relative text-center",children:[h&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:s.jsx(Ip,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:P||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),s.jsx("button",{onClick:()=>n(h,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),x&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Time’s up"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),s.jsx("button",{onClick:f,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),v&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You’ll lose this question’s progress."}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),s.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function kv({onSelect:e}){return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[s.jsxs("header",{className:"text-center mb-12",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),s.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),s.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-6",children:nn.map(t=>{const n=Fp[Sr(t.name)];return s.jsxs("button",{onClick:()=>e(Sr(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[s.jsx("div",{className:"text-4xl mb-3",children:t.icon}),s.jsx("div",{className:"font-black text-lg mb-1",children:n}),s.jsx("div",{className:"text-sm opacity-75",children:t.name})]},Sr(t.name))})})]})})}function Nv(){const[e,t]=d.useState("modes"),n=Ut(),r=cn(),[i,o]=d.useState(()=>vn.get(gn.COINS,0)),[a,l]=d.useState(()=>vn.get(gn.XP,0)),[c,u]=d.useState(()=>vn.get(gn.LEVEL,1)),[x,f]=d.useState(()=>vn.get(gn.OWNED_CHARACTERS,[])),[p,j]=d.useState(()=>vn.get(gn.SOUND,!0)),[b,k]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[R,v]=d.useState([]),[m,y]=d.useState(null),[_,P]=d.useState(null),[L,N]=d.useState(30),[h,g]=d.useState([]),[w,C]=d.useState(null),[E,U]=d.useState(null),[Y,G]=d.useState(!1),[J,W]=d.useState(0),[T,z]=d.useState("none"),[$,O]=d.useState(!1),[Q,B]=d.useState(null),[oe,ae]=d.useState(!1),[ce,xe]=d.useState(null),[I,q]=d.useState(-1),[re,H]=d.useState(0),[X,le]=d.useState(null),[F,M]=d.useState(null),[K,ue]=d.useState(!1),[Z,ie]=d.useState(null),[je,Be]=d.useState(-1),[We,Se]=d.useState([!1,!1,!1]),[ve,Xe]=d.useState(!1),[Ne,Me]=d.useState(!1),Ge=d.useRef(null),we=d.useRef(null),Je=d.useRef(null),Ie=d.useMemo(()=>{var ee;return((ee=window.matchMedia)==null?void 0:ee.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>{try{localStorage.setItem("qp_in_question",JSON.stringify(e==="question"))}catch{}return()=>{try{localStorage.removeItem("qp_in_question")}catch{}}},[e]),d.useEffect(()=>(Qe(),bt(),()=>Tt()),[]),d.useEffect(()=>vn.set(gn.COINS,i),[i]),d.useEffect(()=>vn.set(gn.XP,a),[a]),d.useEffect(()=>vn.set(gn.LEVEL,c),[c]),d.useEffect(()=>vn.set(gn.OWNED_CHARACTERS,x),[x]),d.useEffect(()=>vn.set(gn.SOUND,p),[p]),d.useEffect(()=>(e==="question"&&L>0&&!Ne?Ge.current=setTimeout(()=>{N(ee=>{const me=ee-1;return me===10&&p&&as("/sounds/tick.mp3",.8),me})},1e3):e==="question"&&L===0&&G(!0),()=>{Ge.current&&clearTimeout(Ge.current)}),[e,L,p,Ne]),d.useEffect(()=>{if(e!=="wheel"||X==null)return;q(X),p&&as("/sounds/progress.mp3",.6),Be(X);const ee=setTimeout(()=>Be(-1),900),me=setTimeout(()=>q(-1),900),Fe=setTimeout(()=>{Z&&(Z==="streakFlash"?t("streakFlash"):Z==="characterPicker"?t("characterPicker"):(t("modes"),qt()),ie(null)),le(null)},1800);return()=>{clearTimeout(ee),clearTimeout(me),clearTimeout(Fe)}},[e,X,Z,p,ve]),d.useEffect(()=>{e!=="wheel"||!ve||(H(ee=>ee+1),Xe(!1))},[e,ve]);const Qe=async()=>{try{const me=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Fe}=sa.parse(me,{header:!0,skipEmptyLines:!0,transformHeader:he=>he.trim().toLowerCase()}),Ce=Fe.map((he,Ve)=>{var kt;const Ye=[he.option1,he.option2,he.option3,he.option4].map(Ze=>(Ze||"").trim()).filter(Boolean);if(Ye.length<4)return null;let ut={a:0,b:1,c:2,d:3}[(kt=he.answer)==null?void 0:kt.toLowerCase()];return ut===void 0&&(ut=Ye.findIndex(Ze=>Ze.toLowerCase()===(he.answer||"").toLowerCase())),ut===-1&&(ut=0),{id:he.id||`q_${Ve}`,prompt:(he.question||"").trim(),options:Ye,correctIndex:ut,category:(he.category||he.subject||"general knowledge").trim(),difficulty:(he.difficulty||"medium").toLowerCase(),explanation:(he.explanation||"").trim()}}).filter(Boolean);v(Ce)}catch(ee){console.error("Failed to load questions:",ee),v([])}},bt=()=>{const ee=new Audio("/sounds/spin.mp3");ee.loop=!0,ee.volume=.6,we.current=ee},Tt=()=>{if(Ge.current&&clearTimeout(Ge.current),Je.current&&(clearTimeout(Je.current),Je.current=null),we.current){try{we.current.pause()}catch{}we.current=null}},zr=()=>{if(p&&we.current){try{we.current.currentTime=0,we.current.play()}catch{}Je.current&&clearTimeout(Je.current),Je.current=setTimeout(()=>{An()},2e3)}},An=()=>{if(Je.current&&(clearTimeout(Je.current),Je.current=null),we.current)try{we.current.pause(),we.current.currentTime=0}catch{}},qt=()=>{k({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),Se([!1,!1,!1]),y(null),P(null),U(null),g([]),C(null),G(!1),H(0)},wt=()=>{if($)return;B(null),ae(!1),xe(null),O(!0),zr();const ee=Math.floor(Math.random()*nn.length),me=nn[ee],Fe=Dd(J),Ce=ee*wn+wn/2,he=(Math.random()-.5)*(wn*.3),Ve=360-Ce+he;let Ye=Dd(Ve-Fe);const Nn=Wn.FULL_TURNS*360+Ye,ut=J+Nn+Wn.OVERSHOOT;z(`transform ${Ie?1e3:Wn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),W(ut),Qc([20,50,20]),setTimeout(()=>{z(`transform ${Ie?200:Wn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),W(kt=>kt-Wn.OVERSHOOT)},Ie?1e3:Wn.DURATION),setTimeout(()=>{An(),O(!1),B({cat:me,index:ee}),P(me),xe(me.color),ae(!0),setTimeout(()=>{ae(!1),t("interstitial")},1500),setTimeout(()=>xe(null),1e3)},(Ie?1e3:Wn.DURATION)+(Ie?200:Wn.SETTLE_DURATION)+100)},Mr=()=>{const ee=R.filter(Fe=>{const Ce=Fe.category.toLowerCase(),he=_.name.toLowerCase();return Ce.includes(he)||he.includes(Ce)});let me;ee.length>0?me=ee[Math.floor(Math.random()*ee.length)]:me=R[Math.floor(Math.random()*R.length)],me?(y(me),N(30),g([]),C(null),G(!1),Me(!1),t("question")):t("wheel")},jt=(ee,me,Fe=!1)=>{if(!Fe){Me(!0);return}const Ce=b.qIndex,he=[...b.progress];he[Ce]=!0;const Ve=[...We];if(Ve[Ce]=!!ee,Se(Ve),k(Ye=>({...Ye,progress:he,qIndex:Ye.qIndex+1})),ee&&(o(Ye=>Ye+5),l(Ye=>Ye+1),Xe(!0)),M(Ce),ue(!!ee),Ce===2){const Ye=Ve.every(Boolean);ie(Ye?"streakFlash":"modes")}else ie(null);t("wheel")},Re=ee=>{if(!(b.lifelines[ee]||!m)){if(k(me=>({...me,lifelines:{...me.lifelines,[ee]:!0}})),ee==="fifty"){const Fe=m.options.map((Ce,he)=>he).filter(Ce=>Ce!==m.correctIndex).slice(0,2);g(Fe)}else if(ee==="audience"){const me=40+Math.random()*25;let Fe=100-me;const Ce=[0,0,0,0];Ce[m.correctIndex]=Math.round(me);const he=[0,1,2,3].filter(Ve=>Ve!==m.correctIndex);he.forEach((Ve,Ye)=>{if(Ye===he.length-1)Ce[Ve]=Fe;else{const Nn=Math.floor(Math.random()*Fe);Ce[Ve]=Nn,Fe-=Nn}}),C(Ce)}}},un=ee=>{U(ee),t("bonusInterstitial")},mr=ee=>{ee&&E&&(f(me=>[...new Set([...me,E])]),p&&as("/sounds/coin.mp3",1)),setTimeout(()=>{t("modes"),qt()},3e3)},$n=ee=>{ee==="classic"&&(qt(),t("wheel"))},Ir=()=>{window.location.href="/",console.log("Navigate to home")},Fr=()=>{t("modes"),qt()},dn=()=>{t("wheel")};switch(d.useEffect(()=>{if(e!=="wheel"||F==null)return;const me=setTimeout(()=>{le(F),M(null)},K?1800:0);return()=>clearTimeout(me)},[e,F,K]),d.useEffect(()=>{const ee=new URLSearchParams(r.search);(ee.get("view")==="modes"||ee.get("view")==="home")&&(qt(),t("modes"),n("/play",{replace:!0}))},[r.search]),e){case"modes":return s.jsx(Od,{onModeSelect:$n,onNavigateHome:Ir});case"wheel":return s.jsx(wv,{run:b,coins:i,xp:a,level:c,ownedCharacters:x,onSpin:wt,onBack:Fr,spinning:$,angle:J,transition:T,result:Q,showCallout:oe,glowColor:ce,soundOn:p,setSoundOn:j,showSparkle:I,pulseIdx:je,coinBurstTick:re,pendingProgressIdx:X,lastAnswerWasCorrect:K,nextProgressIdx:F});case"interstitial":return s.jsx(Ad,{category:_,onComplete:Mr,soundOn:p});case"streakFlash":return s.jsx(jv,{onDone:()=>t("bonusInterstitial")});case"question":return s.jsx($d,{question:m,category:_,onAnswer:jt,run:b,timeLeft:L,usedLifelines:b.lifelines,onUseLifeline:Re,eliminatedOptions:h,audienceData:w,onBack:dn,timeUp:Y,onTimeUpBackToWheel:()=>{G(!1),t("wheel")},soundOn:p});case"characterPicker":return s.jsx(kv,{onSelect:un});case"bonusInterstitial":return s.jsx(Ad,{category:nn.find(ee=>Sr(ee.name)===E),onComplete:()=>t("bonusQuestion"),isBonus:!0,soundOn:p});case"bonusQuestion":if(!m){const ee=nn.find(me=>Sr(me.name)===E);if(ee&&R.length>0){const me=R.filter(Ce=>{const he=Ce.category.toLowerCase(),Ve=ee.name.toLowerCase();return he.includes(Ve)||Ve.includes(he)}),Fe=me.length>0?me[Math.floor(Math.random()*me.length)]:R[Math.floor(Math.random()*R.length)];y(Fe),N(30)}return s.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:s.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return s.jsx($d,{question:m,category:nn.find(ee=>Sr(ee.name)===E)||nn[0],onAnswer:mr,run:{...b,lifelines:{fifty:!0,audience:!0}},timeLeft:L,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:()=>t("modes")});default:return s.jsx(Od,{onModeSelect:$n,onNavigateHome:Ir})}}const Ia="qp_resume",Bd="qp_mistakes",Al="qp_stats",Ud="qp_lastset",$l="qp_recent",Sv=50,Cv="qp_review_snapshot",qd="qp_xp",Wd="qp_level",Qd="qp_coins",Fa=2,Ur=e=>100*e*(e-1),xr=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Ev=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Dp=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),Op=e=>{const t=e.slice();for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t},Hd=(e,t,n)=>Math.max(t,Math.min(n,e)),_v=(e=0)=>{const t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`},Ap=(e=0)=>{const t=Math.floor(e/1e3);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},Vd=e=>{try{const t=new Date(e),n=String(t.getDate()).padStart(2,"0"),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],i=String(t.getFullYear()).slice(-2);return`${n}-${r}-${i}`}catch{return""}};async function Rv(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const n=await t.text(),{data:r}=sa.parse(n,{header:!0,skipEmptyLines:!0,transformHeader:o=>String(o).trim().toLowerCase()}),i={a:0,b:1,c:2,d:3};return r.map((o,a)=>{var p;const l=[o.option1,o.option2,o.option3,o.option4].map(j=>(j??"").trim());if(l.some(j=>!j))return null;let c=-1;const u=String(o.answer??"").trim();if(i[u.toLowerCase()]!==void 0&&(c=i[u.toLowerCase()]),c<0){const j=l.findIndex(b=>b.toLowerCase()===u.toLowerCase());c=j>=0?j:0}const x=String(o.category??o.subject??"General Knowledge").trim(),f=String(o.difficulty??"medium").toLowerCase().trim();return{id:((p=o.id)==null?void 0:p.trim())||`q_${a}`,category:x,difficulty:f,prompt:String(o.question??"").trim(),options:l,answerIndex:c,explanation:String(o.explanation??"").trim()}}).filter(Boolean)}function Yd(e,{categorySlug:t,difficulty:n,count:r}){const o=t==="mixed"?()=>!0:x=>Ev(x.category)===t,a=n?x=>(x.difficulty||"medium")===n:()=>!0,l=e.filter(x=>o(x)&&a(x));return{questions:Dp(l,Math.min(r,l.length)).map(x=>{const f=Op([0,1,2,3]),p=f.map(b=>x.options[b]),j=f.indexOf(x.answerIndex);return{...x,options:p,answerIndex:j}}),poolSize:l.length}}function Pv({message:e,onClose:t,duration:n=1e3,liftPx:r=128}){const i=d.useRef(t);return d.useEffect(()=>{i.current=t},[t]),d.useEffect(()=>{const o=setTimeout(()=>{var a;return(a=i.current)==null?void 0:a.call(i)},n);return()=>clearTimeout(o)},[e,n]),vi.createPortal(s.jsx("div",{className:"fixed left-1/2 -translate-x-1/2 z-[999] pointer-events-none",style:{bottom:`calc(env(safe-area-inset-bottom) + ${r}px)`},"aria-live":"polite",role:"status",children:s.jsx("div",{className:"px-3 py-1.5 rounded-lg bg-black/85 border border-white/15 text-sm text-yellow-300 shadow-lg",children:e})}),document.body)}function Tv(){var Xc,Gc,Jc,Zc,eu,tu,nu,ru,su,iu,ou;const e=Ut(),{category:t}=Zx(),n=cn(),r=new URLSearchParams(n.search),i=r.get("review")==="1",o=r.get("retake")==="1",a=((Xc=n.state)==null?void 0:Xc.mode)||"quiz",l=String(((Gc=n.state)==null?void 0:Gc.difficulty)||"medium").toLowerCase(),c=Hd(Number(((Jc=n.state)==null?void 0:Jc.count)||10),1,50),u=((Zc=n.state)==null?void 0:Zc.timer)||{type:"per_q",seconds:45},x=!!((eu=n.state)!=null&&eu.resume),f=a==="practice";(tu=n.state)!=null&&tu.daily,(nu=n.state)!=null&&nu.source;const p=o||!!((ru=n.state)!=null&&ru.retake),[j]=Pn("/sounds/correct.mp3",{volume:.65,interrupt:!0}),[b]=Pn("/sounds/wrong.mp3",{volume:.65,interrupt:!0}),[k,R]=Pn("/sounds/tick.mp3",{volume:.8,interrupt:!0}),[v,m]=d.useState(!0),[y,_]=d.useState([]),[P,L]=d.useState(!0),[N,h]=d.useState(""),[g,w]=d.useState({questions:[]}),C=g.questions.length,[E,U]=d.useState(0),[Y,G]=d.useState([]),[J,W]=d.useState([]),[T,z]=d.useState(null),[$,O]=d.useState(0),[Q,B]=d.useState(u.seconds||45),[oe,ae]=d.useState(!1),ce=d.useRef(null),[xe,I]=d.useState(!1),[q,re]=d.useState(!1),[H,X]=d.useState({}),[le,F]=d.useState({}),[M,K]=d.useState([]),[ue,Z]=d.useState(!1),[ie,je]=d.useState(!1),[Be,We]=d.useState(null),[Se,ve]=d.useState("quiz"),[Xe,Ne]=d.useState(""),Me=D=>{Ne(""),setTimeout(()=>Ne(D),0)},Ge=d.useCallback(()=>Ne(""),[]),[we,Je]=d.useState(()=>parseInt(localStorage.getItem(Wd)||"1",10)),[Ie,Qe]=d.useState(()=>parseInt(localStorage.getItem(qd)||"0",10)),[bt,Tt]=d.useState(()=>parseInt(localStorage.getItem(Qd)||"0",10)),zr=Ur(we+1),An=d.useRef(null),[qt,wt]=d.useState(!1),[Mr,jt]=d.useState(!1),[Re,un]=d.useState(null),[mr,$n]=d.useState({correct:0,total:0}),[Ir,Fr]=d.useState(!1),[dn,ee]=d.useState(0),[me,Fe]=d.useState(0),[Ce,he]=d.useState(!!((su=n.state)!=null&&su.retake)),[Ve]=Pn("/sounds/coin.mp3",{volume:.75}),Ye=d.useCallback(D=>{if(!D)return;let V=Ie+D,ne=we;for(;V>=Ur(ne+1);)ne+=1;Qe(V),Je(ne),localStorage.setItem(qd,String(V)),localStorage.setItem(Wd,String(ne))},[Ie,we]),Nn=d.useCallback(D=>{if(!D)return;const V=bt+D;Tt(V),localStorage.setItem(Qd,String(V))},[bt]),[ut,kt]=d.useState(null),Ze=d.useRef(null);d.useRef(!1);const Bn=(D,V)=>{try{const ne=localStorage.getItem(D);return ne?JSON.parse(ne):V}catch{return V}};d.useEffect(()=>{let D=!0;return(async()=>{try{const V=await Rv();if(!D)return;_(V)}catch(V){console.error(V),h("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{L(!1)}})(),()=>{D=!1}},[]),d.useEffect(()=>{if(i)try{const D=localStorage.getItem(Cv);if(!D)return;const V=JSON.parse(D);kt({questions:(V==null?void 0:V.questions)||[],answers:(V==null?void 0:V.answers)||[]}),ve("review")}catch{}},[i]),d.useEffect(()=>{var V,ne;if(i||P||N)return;if(x){const de=Bn(Ia,null);if((de==null?void 0:de.slug)===t&&(de!=null&&de.inProgress)){const fe=Yd(y,{categorySlug:t,difficulty:l,count:de.total||c});w({questions:fe.questions}),U(Hd(de.index,0,fe.questions.length-1)),G(new Array(fe.questions.length).fill(null)),W(new Array(fe.questions.length).fill(!1)),K(new Array(fe.questions.length).fill(!1)),z(de.startedAt||Date.now()),B(u.seconds||45),O(0),I(!1),re(!1),X({}),F({}),kt(null),he(!!((V=n.state)!=null&&V.retake));return}}const D=Yd(y,{categorySlug:t,difficulty:l,count:c});w({questions:D.questions}),G(new Array(D.questions.length).fill(null)),W(new Array(D.questions.length).fill(!1)),K(new Array(D.questions.length).fill(!1)),U(0),z(Date.now()),B(u.seconds||45),O(0),I(!1),re(!1),X({}),F({}),kt(null),he(!!((ne=n.state)!=null&&ne.retake))},[P,N,y,t,l,c,x,u==null?void 0:u.seconds,u==null?void 0:u.type,n.search,i]);const Ue=g.questions[E],fn=Y[E];d.useEffect(()=>{if(Se==="quiz"&&u.type!=="off"&&(clearInterval(ce.current),!oe))return ce.current=setInterval(()=>{B(D=>{const V=D-1;if(V===10){try{R.stop()}catch{}k()}if(V<=0){try{R.stop()}catch{}return clearInterval(ce.current),ht(),0}return V}),O(D=>D+1e3),ws(!0)},1e3),()=>clearInterval(ce.current)},[Se,E,oe,u.type]),d.useEffect(()=>{try{R.stop()}catch{}Ze.current&&(clearTimeout(Ze.current),Ze.current=null)},[E,fn,Se,oe]),d.useEffect(()=>{if(Se==="reward"&&(Re==null?void 0:Re.coins)>0&&!Re.awarded)try{Ve()}catch{}},[Se,Re,Ve]),d.useEffect(()=>{if(Se!=="reward")return;Fr(!0);const D=setTimeout(()=>Fr(!1),180),V=(Re==null?void 0:Re.coins)??0,ne=mr.correct;let de=0;const fe=performance.now(),ye=1e3,be=De=>{const Nt=Math.min(1,(De-fe)/ye),mn=1-Math.pow(1-Nt,3);ee(Math.round(ne*mn)),Fe(Math.round(V*mn)),Nt<1&&(de=requestAnimationFrame(be))};return ee(0),Fe(0),de=requestAnimationFrame(be),()=>{clearTimeout(D),cancelAnimationFrame(de)}},[Se,mr.correct,Re==null?void 0:Re.coins]),d.useEffect(()=>{if(Se!=="reward"||Re&&!Re.awarded)return;const D=setTimeout(()=>ve("results"),2e3);return()=>clearTimeout(D)},[Se,Re]);const ws=(D=!0)=>{localStorage.setItem(Ia,JSON.stringify({inProgress:D,slug:t,mode:a,category:xr(t),index:E,total:C,remainingSec:u.type==="per_q"?Q:0,startedAt:T||Date.now()}))},wi=()=>localStorage.removeItem(Ia),S=(D,V=16)=>{const ne=document.getElementById("quiz-confetti-layer")||(()=>{const be=document.createElement("div");return be.id="quiz-confetti-layer",be.style.position="fixed",be.style.inset="0",be.style.pointerEvents="none",be.style.zIndex="120",document.body.appendChild(be),be})(),de=D.left+D.width/2,fe=D.top+D.height/2,ye=["#22c55e","#60a5fa","#f59e0b","#eab308","#a78bfa"];for(let be=0;be<V;be++){const De=document.createElement("div"),Nt=5+Math.random()*4;De.style.position="fixed",De.style.left="0",De.style.top="0",De.style.width=`${Nt}px`,De.style.height=`${Nt}px`,De.style.borderRadius="999px",De.style.background=ye[be%ye.length],De.style.transform=`translate(${de}px,${fe}px) scale(1)`,De.style.opacity="1",De.style.transition="transform 650ms cubic-bezier(.2,.8,.2,1), opacity 650ms linear",ne.appendChild(De);const mn=Math.random()*2*Math.PI,js=60+Math.random()*40,ki=de+Math.cos(mn)*js,et=fe+Math.sin(mn)*js-20;requestAnimationFrame(()=>{De.style.transform=`translate(${ki}px,${et}px) scale(.9) rotate(${Math.random()*180}deg)`,De.style.opacity="0"}),setTimeout(()=>De.remove(),750)}},se=(D,V)=>{var de;if(!Ue||f&&M[E])return;try{(de=navigator.vibrate)==null||de.call(navigator,24)}catch{}const ne=Y.slice();if(Y[E]===D?ne[E]=null:ne[E]=D,G(ne),ne[E]!==null&&J[E]){const fe=J.slice();fe[E]=!1,W(fe)}if(f&&ne[E]!==null&&K(fe=>{if(fe[E])return fe;const ye=fe.slice();return ye[E]=!0,ye}),f){const fe=ne[E]===Ue.answerIndex;if(v&&(fe?j():ne[E]!==null&&b()),fe&&(V!=null&&V.currentTarget)){const ye=V.currentTarget.getBoundingClientRect();S(ye,16)}}!f&&ne[E]!==null&&(Ze.current&&clearTimeout(Ze.current),Ze.current=setTimeout(()=>{E<C-1?rt():(Z(!0),ae(!0))},2e3))},Ee=()=>{f&&(Y[E]===null||Y[E]===void 0||K(D=>{if(D[E])return D;const V=D.slice();return V[E]=!0,V}))},Lt=()=>{Ze.current&&(clearTimeout(Ze.current),Ze.current=null),ae(!0),We(null),Z(!1),E>0&&U(D=>D-1),setTimeout(()=>ae(!1),50)},rt=()=>{if(Ze.current&&(clearTimeout(Ze.current),Ze.current=null),Ee(),ae(!0),We(null),Z(!1),Y[E]===null&&!J[E]){const D=J.slice();D[E]=!0,W(D)}E<C-1?(U(D=>D+1),B(u.seconds||45)):Z(!0),setTimeout(()=>ae(!1),50)},zt=()=>{if(Ee(),Y[E]===null){const D=J.slice();D[E]=!0,W(D)}rt()},ht=()=>{Ee();const D=J.slice();Y[E]===null&&(D[E]=!0),W(D),We(E),ae(!0)},Mt=D=>{var Nt,mn,js,ki;const V=g.questions.filter((et,pn)=>Y[pn]!==null&&Y[pn]!==et.answerIndex).map(et=>et.id);try{const et=Bn(Bd,[]),pn=Array.from(new Set([...V,...et]));localStorage.setItem(Bd,JSON.stringify(pn))}catch{}const ne=g.questions.reduce((et,pn,au)=>et+(Y[au]===pn.answerIndex?1:0),0),de=((mn=(Nt=D==null?void 0:D.currentTarget)==null?void 0:Nt.getBoundingClientRect)==null?void 0:mn.call(Nt))||null,ye=f||p||Ce?0:ne*5,be=ye*Fa;try{const et=Bn(Al,{sessions:[]}),pn=J.filter(Boolean).length;et.sessions.push({cat:xr(t),mode:a,total:C,correct:ne,skipped:pn,ms:$}),localStorage.setItem(Al,JSON.stringify(et))}catch{}const De=f?"Practice":(js=n.state)!=null&&js.daily?"Daily Challenge":((ki=n.state)==null?void 0:ki.source)==="fun_facts"?"Fun Facts":"Quiz";try{const et={ts:Date.now(),slug:t,categoryLabel:xr(t),modeRaw:a,modeLabel:De,difficulty:l,total:C,timer:u,ms:$,attempted:Y.filter(Sn=>Sn!==null).length,correct:ne,questions:g.questions.map(Sn=>({id:Sn.id,prompt:Sn.prompt,options:Sn.options,answerIndex:Sn.answerIndex,explanation:Sn.explanation,category:Sn.category,difficulty:Sn.difficulty})),answers:Y.slice(),skipped:J.slice()};localStorage.setItem(Ud,JSON.stringify(et));const pn=Bn($l,[]),Vp=[{id:et.ts,ts:et.ts,cat:et.categoryLabel,slug:t,mode:et.modeLabel,total:C,correct:ne,ms:$,snapshot:et},...pn].slice(0,Sv);localStorage.setItem($l,JSON.stringify(Vp))}catch{}$n({correct:ne,total:C}),ye>0?un({startRect:de,coins:ye,xp:be}):un(null),ve("reward"),ae(!0),clearInterval(ce.current),ws(!1),wi()},ji=()=>{var de;const D=Bn(Ud,null);if(!D||D.slug!==t||!Array.isArray(D.questions)){Up();return}const V=D.timer||u,ne=D.questions.map(fe=>{const ye=Op([0,1,2,3]);return{...fe,options:ye.map(be=>fe.options[be]),answerIndex:ye.indexOf(fe.answerIndex)}});w({questions:ne}),G(new Array(ne.length).fill(null)),W(new Array(ne.length).fill(!1)),K(new Array(ne.length).fill(!1)),U(0),z(Date.now()),B((V==null?void 0:V.seconds)||45),O(0),I(!1),re(!1),X({}),F({}),Z(!1),he(!0),ve("quiz"),kt(null),((de=n.state)==null?void 0:de.reviewFrom)==="history"&&e(window.location.pathname+window.location.search,{replace:!0,state:{...n.state,fromHistory:!0}}),kt(null),window.scrollTo(0,0)},Up=()=>{e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:a,difficulty:l,count:c,timer:u,retake:!0}})},Hc=()=>e("/"),qp=()=>{if(xe){Me("Once per quiz");return}if(!Ue)return;const D=[0,1,2,3].filter(ne=>ne!==Ue.answerIndex),V=Dp(D,2);X({...H,[E]:V}),I(!0)},Wp=()=>{if(q){Me("Once per quiz");return}if(!Ue)return;const D=40+Math.floor(Math.random()*26);let V=100-D;const ne=[0,0,0,0];ne[Ue.answerIndex]=D;const de=[0,1,2,3].filter(De=>De!==Ue.answerIndex),fe=Math.floor(Math.random()*(V+1));V-=fe;const ye=Math.floor(Math.random()*(V+1));V-=ye;const be=V;ne[de[0]]+=fe,ne[de[1]]+=ye,ne[de[2]]+=be,F({...le,[E]:ne}),re(!0)},Vc=Y.filter(D=>D!==null).length,Yc=g.questions.filter((D,V)=>Y[V]===D.answerIndex).length,Qp=C?Math.round(Yc/C*100):0;if(P)return s.jsx(Wi,{children:s.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})});if(N)return s.jsx(Wi,{children:s.jsx("div",{className:"text-sm text-red-400",children:N})});if(!Ue&&Se==="quiz")return s.jsx(Wi,{children:s.jsx("div",{className:"text-sm text-base-muted",children:"No questions found."})});const Hp=H[E]||[],Kc=le[E]||null,Un=f&&M[E];return s.jsxs(Wi,{children:[s.jsx("style",{children:`
      @keyframes popIn {
        0%   { transform: scale(.9); opacity: 0 }
        60%  { transform: scale(1.04); opacity: 1 }
        100% { transform: scale(1) }
      }
      @keyframes shine {
        0%   { transform: translateX(-120%) }
        100% { transform: translateX(120%) }
      }
    `}),Se==="reward"&&Re&&Re.coins>0&&!Re.awarded&&s.jsx(zp,{startRect:Re.startRect,targetRef:An,count:Math.min(28,Math.max(12,Math.round(Re.coins/2))),onDone:()=>{Ye(Re.xp),Nn(Re.coins),un(D=>D&&{...D,awarded:!0})}}),Se==="reward"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mt-3 flex items-center justify-end gap-2 px-3",children:[s.jsx(Kd,{level:we,xp:Ie,next:zr,onClick:()=>wt(!0)}),s.jsx(Xd,{total:bt,onClick:()=>jt(!0),pillRef:An})]}),s.jsxs("div",{className:"relative mt-4 card rounded-3xl p-8 text-center overflow-hidden",style:{animation:"popIn 380ms ease-out"},children:[Ir&&s.jsx("div",{className:"absolute inset-0 bg-white/70 pointer-events-none rounded-3xl"}),s.jsx("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:s.jsx("div",{className:"h-full w-1/3 -skew-x-12 bg-white/10 blur-md",style:{animation:"shine 900ms ease-out forwards 120ms"}})}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"text-3xl md:text-4xl font-extrabold mb-2",children:"Rewards"}),s.jsxs("div",{className:"text-sm text-base-muted mb-6",children:[xr(t)," • ",f?"Practice":"Quiz"]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto",children:[s.jsxs("div",{className:"rounded-2xl border border-base-border bg-white/5 p-5",children:[s.jsx("div",{className:"text-base-muted text-sm",children:"Correct answers"}),s.jsx("div",{className:"text-5xl font-black mt-1",children:dn})]}),s.jsxs("div",{className:"rounded-2xl border border-base-border bg-white/5 p-5",children:[s.jsx("div",{className:"text-base-muted text-sm",children:"Coins"}),s.jsx("div",{className:"text-5xl font-black mt-1",children:me}),s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:[mr.correct," × 5"]})]})]}),s.jsxs("div",{className:"mt-6 text-xs text-base-muted",children:["Finalizing… ",s.jsx("span",{className:"animate-pulse",children:"•••"})]})]})]})]}),Se==="quiz"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mb-2 mt-6 mx-4 sm:mx-3 grid grid-cols-[auto,1fr,auto] items-center",children:[s.jsx("button",{onClick:()=>je(!0),className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5 text-sm justify-self-start",children:"← Back"}),s.jsxs("div",{className:"text-center justify-self-center",children:[s.jsx("div",{className:"text-base font-semibold max-w-[70vw] mx-auto whitespace-normal break-words",children:xr(t)}),s.jsxs("div",{className:"text-xs text-base-muted",children:["Mode: ",f?"Practice":"Quiz"," • Difficulty: ",l[0].toUpperCase()+l.slice(1)]})]}),s.jsxs("div",{className:["px-2 py-1 rounded-lg border text-xs justify-self-end",Q<=10?"border-red-500 text-red-400 bg-red-500/10":"border-base-border bg-white/5"].join(" "),children:["⏱ ",_v(Q)]})]}),f&&s.jsx("div",{className:"mb-2 mx-4 sm:mx-3 flex items-center justify-end text-xs text-base-muted",children:s.jsxs("label",{className:"flex items-center gap-2 cursor-pointer select-none",children:[s.jsx("span",{children:"Sounds"}),s.jsx("input",{type:"checkbox",checked:v,onChange:D=>m(D.target.checked)})]})}),s.jsx("div",{className:"mb-2 px-4 sm:px-3 flex w-full gap-[2px]",children:Array.from({length:C}).map((D,V)=>{const ne=V===E,de=J[V]?"skipped":Y[V]!==null?"attempted":"idle";let fe=de==="attempted"?"bg-brand-blue":de==="skipped"?"bg-amber-400":ne?"bg-white/30":"bg-white/15";const ye=ne?"h-1.5":"h-1",be=ne?"ring-1 ring-white/40":"";return s.jsx("div",{className:`${ye} flex-1 rounded ${fe} ${be}`},V)})}),s.jsxs("div",{className:"mb-4 px-4 sm:px-3 text-xs text-base-muted flex items-center justify-between",children:[s.jsxs("span",{children:["Q",E+1," / ",C]}),s.jsxs("span",{children:["Attempted ",Vc," • Skipped ",J.filter(Boolean).length]})]}),s.jsxs("div",{className:"card rounded-3xl p-5 mt-6 mx-4 sm:mx-3 max-h-[65vh] overflow-y-auto",children:[s.jsx("p",{className:"text-base font-semibold mb-4",children:Ue==null?void 0:Ue.prompt}),s.jsx("div",{className:"flex flex-col gap-3",children:Ue==null?void 0:Ue.options.map((D,V)=>{const ne=Hp.includes(V),de=fn===V,fe=V===Ue.answerIndex;let ye="w-full text-left px-3 py-3 rounded-xl border transition";if(f&&fn!==null){const be=fn!==Ue.answerIndex;de&&fe?ye+=" bg-green-600/20 border-green-500/50 text-green-300":de&&!fe?ye+=" bg-red-600/20 border-red-500/50 text-red-300":!de&&be&&fe?ye+=" bg-green-600/10 border-green-500/40 text-green-300/90":ye+=" bg-base-bg/50 border-base-border"}else de?ye+=" bg-white/10 border-brand-blue":ye+=" bg-base-bg/50 border-base-border hover:bg-white/5";return s.jsx("button",{disabled:ne||Un,onClick:be=>se(V,be),className:`${ye} ${ne||Un?"opacity-60 pointer-events-none":""}`,children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("span",{className:"font-bold",children:[["A","B","C","D"][V],"."]}),s.jsx("span",{className:"flex-1",children:D}),Kc&&s.jsxs("span",{className:"text-xs text-base-muted",children:[Kc[V],"%"]})]})},V)})}),f&&fn!==null&&s.jsxs("div",{className:"mt-3 text-sm",children:[fn===Ue.answerIndex?s.jsx("div",{className:"text-green-400 mb-1",children:"✓ Correct."}):s.jsx("div",{className:"text-red-400 mb-1",children:"✗ Incorrect."}),Ue.explanation&&s.jsxs("div",{className:"text-base-muted",children:["Explanation: ",Ue.explanation]})]}),s.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[s.jsx("button",{onClick:qp,disabled:Un,className:["px-3 py-2 rounded-xl border border-base-border bg-white/5",xe||Un?"opacity-60":""].join(" "),title:"50:50 (eliminate two options)","aria-disabled":xe||Un,children:s.jsxs("span",{className:"inline-flex items-center gap-2",children:[s.jsx(Lv,{}),s.jsx("span",{children:"50:50"})]})}),s.jsx("button",{onClick:Wp,disabled:Un,className:["px-3 py-2 rounded-xl border border-base-border bg-white/5",q||Un?"opacity-60":""].join(" "),title:"Ask the audience","aria-disabled":q||Un,children:s.jsxs("span",{className:"inline-flex items-center gap-2",children:[s.jsx(zv,{}),s.jsx("span",{children:"Audience"})]})})]}),s.jsxs("div",{className:"mt-4 max-w-sm mx-auto grid grid-cols-3 gap-3",children:[s.jsx("button",{onClick:Lt,disabled:E===0,className:"w-full px-3 py-2 rounded-xl border border-base-border bg-white/5 disabled:opacity-50",children:"Prev"}),s.jsx("button",{onClick:zt,disabled:fn!==null,className:"w-full px-3 py-2 rounded-xl border border-base-border bg-white/5 disabled:opacity-50",children:"Skip"}),s.jsx("button",{onClick:rt,className:"w-full px-3 py-2 rounded-xl border border-base-border bg-white/5",children:"Next"})]})]}),s.jsx("div",{className:"mt-4 flex justify-center",children:s.jsx("button",{onClick:()=>Z(!0),className:"px-5 py-2.5 rounded-2xl text-white bg-gradient-to-r from-brand-blue to-brand-purple",children:"Submit"})}),ie&&s.jsx(Da,{onClose:()=>je(!1),children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-2",children:"⚠️"}),s.jsx("h2",{className:"text-lg font-bold mb-1",children:"Quit quiz?"}),s.jsx("p",{className:"text-sm text-base-muted mb-4",children:"Your progress in this quiz will be lost."}),s.jsxs("div",{className:"flex justify-center gap-3",children:[s.jsx("button",{className:"px-3 py-2 rounded-xl border border-base-border bg-white/5",onClick:()=>je(!1),children:"No"}),s.jsx("button",{className:"btn-primary px-3 py-2 rounded-xl",onClick:()=>{var D;(D=n.state)!=null&&D.fromHistory?e("/profile/history",{replace:!0,state:null}):Hc()},children:"Yes"})]})]})}),Be===E&&s.jsx(Da,{onClose:()=>{We(null),rt()},children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-2",children:"⏰"}),s.jsx("h2",{className:"text-lg font-bold mb-1",children:"Time's up"}),s.jsx("p",{className:"text-sm text-base-muted mb-4",children:"Let's move on."}),s.jsx("div",{className:"flex justify-center",children:s.jsx("button",{className:"btn-primary px-3 py-2 rounded-xl",onClick:()=>{We(null),rt()},children:E<C-1?"Next question":"Submit"})}),s.jsx("div",{className:"mt-4"})]})}),ue&&s.jsx(Da,{onClose:()=>Z(!1),children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-2",children:"🚀"}),s.jsx("h2",{className:"text-lg font-bold mb-1",children:"Submit quiz?"}),s.jsxs("p",{className:"text-sm text-base-muted mb-4",children:["Attempted ",Vc,"/",C," • Skipped ",J.filter(Boolean).length]}),s.jsxs("div",{className:"flex justify-center gap-3",children:[s.jsx("button",{className:"px-3 py-2 rounded-xl border border-base-border bg-white/5",onClick:()=>Z(!1),children:"Back"}),s.jsx("button",{className:"btn-primary px-3 py-2 rounded-xl",onClick:D=>Mt(D),children:"Submit"})]}),s.jsx("div",{className:"mt-4"})]})}),Xe&&s.jsx(Pv,{message:Xe,onClose:Ge,duration:1e3,liftPx:128})]}),Se==="results"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mt-3 flex items-center justify-between px-3",children:[((iu=n.state)==null?void 0:iu.fromHistory)&&s.jsx("button",{onClick:()=>e("/profile/history",{replace:!0,state:null}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← History"}),s.jsxs("div",{className:`flex items-center gap-2 ${(ou=n.state)!=null&&ou.fromHistory?"":"ml-auto"}`,children:[s.jsx(Kd,{level:we,xp:Ie,next:zr,onClick:()=>wt(!0)}),s.jsx(Xd,{total:bt,onClick:()=>jt(!0),pillRef:An})]})]}),s.jsxs("div",{className:"mt-2 md:mt-8 card rounded-3xl p-5 text-center",children:[s.jsx("h2",{className:"text-xl font-semibold mb-1",children:"Results"}),s.jsxs("div",{className:"text-sm text-base-muted mb-4",children:[xr(t)," • ",f?"Practice":"Quiz"]}),s.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-5",children:[s.jsx(Oa,{label:"Score",value:`${Yc}/${C}`}),s.jsx(Oa,{label:"Accuracy",value:`${Qp}%`}),s.jsx(Oa,{label:"Time",value:Ap($)})]}),s.jsx(Mv,{category:xr(t)}),s.jsxs("div",{className:"mt-5 space-y-3",children:[s.jsxs("div",{className:"flex gap-2 justify-center",children:[s.jsx("button",{className:"flex-1 max-w-[140px] py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-sm",onClick:()=>{kt({questions:g.questions,answers:Y}),ve("review")},children:"Review Answers"}),s.jsx("button",{className:"flex-1 max-w-[140px] py-3 rounded-2xl border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors",onClick:ji,children:"Retake Quiz"})]}),s.jsxs("div",{className:"flex gap-2 justify-center",children:[s.jsx("button",{className:"flex-1 max-w-[140px] py-2.5 rounded-xl border border-white/20 bg-white/5 text-white text-sm hover:bg-white/10 transition-colors",onClick:()=>e("/profile/history",{replace:!0,state:null}),children:"History"}),s.jsx("button",{className:"flex-1 max-w-[140px] py-2.5 rounded-xl border border-white/20 bg-white/5 text-white text-sm hover:bg-white/10 transition-colors",onClick:Hc,children:"Home"})]})]})]}),s.jsx(Iv,{onView:D=>{kt(D),ve("review")}}),s.jsxs(Gd,{open:qt,onClose:()=>wt(!1),children:[s.jsx("div",{className:"relative",children:s.jsx("button",{className:"absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border",onClick:()=>wt(!1),children:"✕"})}),s.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Levels & Progress"}),s.jsxs("p",{className:"text-sm text-base-muted mb-4",children:["Lvl ",we,": ",Ie,"/",Ur(we+1)," XP"]}),s.jsx("div",{className:"space-y-2 mb-4",children:[1,2,3,4,5].map(D=>{const V=we+D,ne=Math.max(0,Ur(V)-Ie);return s.jsxs("div",{className:"flex items-center justify-between rounded-xl border border-base-border bg-white/5 px-3 py-2",children:[s.jsxs("div",{className:"text-sm",children:["Level ",V]}),s.jsxs("div",{className:"text-xs text-base-muted",children:["needs ",ne," XP"]})]},V)})}),s.jsxs("div",{className:"rounded-xl bg-white/5 border border-base-border p-3 mb-4",children:[s.jsxs("div",{className:"text-sm mb-1",children:["Next level in ",s.jsx("b",{children:Math.max(0,Ur(we+1)-Ie)})," XP"]}),s.jsxs("div",{className:"text-xs text-base-muted",children:["At ",Fa," XP/coin, you'd need ~",s.jsx("b",{children:Math.ceil(Math.max(0,Ur(we+1)-Ie)/Fa)})," coins."]})]}),s.jsx("button",{className:"btn-primary w-full",onClick:()=>wt(!1),children:"Got it"})]}),s.jsxs(Gd,{open:Mr,onClose:()=>jt(!1),children:[s.jsx("div",{className:"relative",children:s.jsx("button",{className:"absolute right-0 -top-2 text-sm px-2 py-1 rounded-lg bg-white/5 border border-base-border",onClick:()=>jt(!1),children:"✕"})}),s.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Earn coins"}),s.jsxs("div",{className:"space-y-2",children:[s.jsxs("button",{className:"w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left",onClick:()=>{jt(!1),e("/")},children:[s.jsx("div",{className:"font-medium",children:"Attempt a quiz"}),s.jsx("div",{className:"text-xs text-base-muted",children:"50 coins / quiz"})]}),s.jsxs("button",{className:"w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left",onClick:()=>{jt(!1),e("/play")},children:[s.jsx("div",{className:"font-medium",children:"Spin & Play"}),s.jsx("div",{className:"text-xs text-base-muted",children:"5 coins / spin"})]}),s.jsxs("button",{className:"w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left",onClick:()=>alert("Video screen will come soon"),children:[s.jsx("div",{className:"font-medium",children:"Watch a video"}),s.jsx("div",{className:"text-xs text-base-muted",children:"20 coins / video"})]}),s.jsxs("button",{className:"w-full rounded-xl border border-base-border bg-white/5 px-3 py-3 text-left",onClick:()=>{const D=encodeURIComponent("Try Quizify! Learn fast, earn coins, and challenge friends.");window.open(`https://wa.me/?text=${D}`,"_blank")},children:[s.jsx("div",{className:"font-medium",children:"Invite a friend"}),s.jsx("div",{className:"text-xs text-base-muted",children:"50 coins / invite"})]})]}),s.jsx("button",{className:"btn-primary w-full mt-4",onClick:()=>jt(!1),children:"Close"})]})]}),Se==="review"&&s.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:()=>{var D;((D=n.state)==null?void 0:D.reviewFrom)==="history"?e("/profile/history",{replace:!0}):ve("results")},children:"← Back"}),s.jsx("h2",{className:"text-lg font-semibold",children:"Review"}),s.jsx("div",{className:"w-16"})]}),(()=>{const D=(ut==null?void 0:ut.questions)||g.questions,V=(ut==null?void 0:ut.answers)||Y;return s.jsxs(s.Fragment,{children:[s.jsx("ol",{className:"space-y-4",children:D.map((ne,de)=>{const fe=V[de];return s.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[s.jsxs("div",{className:"text-sm md:text-base font-medium mb-3",children:["Q",de+1,". ",ne.prompt]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:ne.options.map((ye,be)=>{const De=fe===be,Nt=be===ne.answerIndex,mn=["w-full text-left px-3 py-2 rounded-xl border",De&&!Nt?"bg-red-600/20 border-red-500/50 text-red-300":"",Nt?"bg-green-600/20 border-green-500/50 text-green-300":"",!De&&!Nt?"bg-base-bg/40 border-base-border":""].join(" ");return s.jsxs("div",{className:mn,children:[s.jsxs("span",{className:"font-semibold mr-1",children:[["A","B","C","D"][be],"."]}),ye]},be)})}),s.jsxs("div",{className:"text-xs mt-3",children:[fe==null?s.jsx("span",{className:"text-base-muted",children:"Skipped"}):fe===ne.answerIndex?s.jsx("span",{className:"text-green-400",children:"Correct"}):s.jsx("span",{className:"text-red-400",children:"Incorrect"}),ne.explanation&&s.jsxs("div",{className:"text-base-muted mt-1",children:["Explanation: ",ne.explanation]})]})]},ne.id)})}),s.jsxs("div",{className:"mt-5 flex gap-2 justify-center",children:[s.jsx("button",{className:"px-3 py-2 rounded-xl border border-base-border bg-white/5",onClick:()=>{var ne;((ne=n.state)==null?void 0:ne.reviewFrom)==="history"?e("/profile/history",{replace:!0}):ve("results")},children:"Back"}),s.jsx("button",{className:"btn-primary px-3 py-2 rounded-xl",onClick:ji,children:"Retake"})]})]})})()]})]})}function Lv({size:e=18,className:t=""}){return s.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",className:t,"aria-hidden":"true",children:[s.jsx("rect",{x:"2.5",y:"5",rx:"4",ry:"4",width:"19",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("text",{x:"12",y:"13.8",textAnchor:"middle",fontSize:"8.5",fontWeight:"700",fill:"currentColor",children:"50:50"})]})}function zv({size:e=18,className:t=""}){return s.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",className:t,"aria-hidden":"true",children:[s.jsx("circle",{cx:"12",cy:"8",r:"3",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("circle",{cx:"6.5",cy:"9.5",r:"2.3",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("circle",{cx:"17.5",cy:"9.5",r:"2.3",fill:"none",stroke:"currentColor",strokeWidth:"1.5"}),s.jsx("path",{d:"M5 18c0-2.2 2.2-3.7 4.8-4.2M19 18c0-2.2-2.2-3.7-4.8-4.2",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),s.jsx("path",{d:"M7.5 18.5c0-2.8 2.7-4.5 4.5-4.5s4.5 1.7 4.5 4.5",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Wi({children:e}){return d.useEffect(()=>{window.scrollTo(0,0)},[]),s.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:s.jsx("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:e})})}function Da({children:e,onClose:t}){return d.useEffect(()=>(document.body.classList.add("modal-open"),()=>{document.body.classList.remove("modal-open")}),[]),s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-[120]",onClick:t,children:s.jsx("div",{className:"bg-base-card border border-base-border rounded-t-2xl w-full max-w-md max-h-[90vh] overflow-y-auto",onClick:n=>n.stopPropagation(),children:e})})}function Oa({label:e,value:t}){return s.jsxs("div",{className:"rounded-xl border border-base-border bg-white/5 p-3 text-center",children:[s.jsx("div",{className:"text-xs text-base-muted",children:e}),s.jsx("div",{className:"text-lg font-semibold",children:t})]})}function Mv({category:e}){let t=[];try{t=JSON.parse(localStorage.getItem(Al)||"{}").sessions||[]}catch{}const n=t.filter(a=>a.cat===e);if(!n.length)return null;const r=n.slice(-7),i=Math.round(r.reduce((a,l)=>a+Math.round(l.correct/l.total*100),0)/r.length),o=n[n.length-1];return s.jsx("div",{className:"rounded-xl border border-base-border bg-white/5 p-3 text-left",children:s.jsxs("ul",{className:"list-disc list-inside text-xs text-base-muted space-y-1",children:[s.jsxs("li",{children:["Avg. accuracy over ",r.length," runs: ",s.jsxs("b",{children:[i,"%"]})]}),s.jsxs("li",{children:["Last run: ",s.jsxs("b",{children:[o.correct,"/",o.total]})]}),s.jsxs("li",{children:["Time: ",s.jsx("b",{children:Ap(o.ms)})]})]})})}function Iv({onView:e}){let t=[];try{t=JSON.parse(localStorage.getItem($l)||"[]")}catch{}if(!(t!=null&&t.length))return null;const[n,r]=d.useState(!1),i=n?t:t.slice(0,5),o=l=>l>=80?"text-green-300":l>=50?"text-brand-blue":"text-base-text",a="grid grid-cols-[120px_minmax(120px,240px)_90px_64px_120px_90px]";return s.jsxs("div",{className:"mt-4 card rounded-3xl p-5",children:[s.jsx("div",{className:"flex items-center justify-between mb-3",children:s.jsx("h3",{className:"text-base font-semibold",children:"Recent Quizzes"})}),s.jsx("div",{className:"overflow-x-auto touch-pan-x overscroll-x-contain",children:s.jsx("div",{className:"max-h-[60vh] overflow-y-auto pr-1 pb-24",children:s.jsxs("div",{className:`min-w-[640px] ${a} text-center`,children:[s.jsxs("div",{className:`col-span-full ${a} items-center text-[11px] text-base-muted bg-white/5 rounded-lg px-2 py-1 mb-2`,children:[s.jsx("div",{className:"text-left pl-1",children:"Date"}),s.jsx("div",{className:"text-left",children:"Category"}),s.jsx("div",{children:"Score"}),s.jsx("div",{children:"Qn"}),s.jsx("div",{children:"Mode"}),s.jsx("div",{children:"View"})]}),i.map(l=>{const c=Math.round(l.correct/(l.total||1)*100);return s.jsxs("div",{role:"row",className:`col-span-full ${a} items-center text-center py-2 border-b border-white/10 last:border-0 hover:bg-white/[0.03] rounded-md`,children:[s.jsx("div",{className:"text-left pl-1 text-xs font-mono tabular-nums",children:Vd(l.ts)}),s.jsx("div",{className:"text-left text-xs px-1 truncate",children:l.cat}),s.jsxs("div",{className:`text-xs font-mono tabular-nums ${o(c)}`,children:[c,"%"]}),s.jsx("div",{className:"text-xs font-mono tabular-nums",children:l.total}),s.jsx("div",{className:"text-xs",children:l.mode}),s.jsx("div",{className:"flex justify-center",children:s.jsx("button",{className:"w-[60px] px-2 py-1 rounded-lg border border-base-border bg-base-card text-xs",onClick:u=>{u.stopPropagation(),e(l.snapshot)},"aria-label":`View ${l.cat} (${Vd(l.ts)})`,children:"View"})})]},l.id)}),t.length>5&&s.jsx("div",{className:`col-span-full ${a}`,children:s.jsx("div",{className:"col-start-1 justify-self-start py-2",children:s.jsx("button",{className:"text-xs px-2 py-1 rounded-lg border border-base-border bg-white/5 inline-flex items-center gap-1",onClick:()=>r(l=>!l),children:n?"Show 5":s.jsxs(s.Fragment,{children:["View all ",s.jsx("span",{"aria-hidden":"true",children:"›"})]})})})})]})})})]})}function Kd({level:e,xp:t,next:n,onClick:r}){const i=Math.min(t/n,1);return s.jsxs("button",{onClick:r,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left",children:[s.jsxs("div",{className:"text-[11px]",children:["Lvl ",e," • ",t,"/",n]}),s.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:s.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${i*100}%`}})})]})}function Xd({total:e,onClick:t,pillRef:n}){return s.jsxs("button",{ref:n,onClick:t,className:"pill",children:["🪙 ",e]})}function Gd({open:e,onClose:t,children:n}){return d.useEffect(()=>{if(!e)return;const r=o=>o.key==="Escape"&&t();document.addEventListener("keydown",r);const i=document.body.style.overflow;return document.body.style.overflow="hidden",document.body.classList.add("modal-open"),()=>{document.removeEventListener("keydown",r),document.body.style.overflow=i,document.body.classList.remove("modal-open")}},[e,t]),e?vi.createPortal(s.jsxs("div",{className:"fixed inset-0 z-[120] flex items-center justify-center",onClick:t,children:[s.jsx("div",{className:"absolute inset-0 bg-black/60"}),s.jsx("div",{className:`relative w-[calc(100%-2rem)] max-w-md mx-auto rounded-2xl
                   bg-base-card border border-base-border shadow-2xl
                   p-5 pb-[calc(1rem+env(safe-area-inset-bottom))]
                   max-h-[90vh] overflow-y-auto overscroll-contain`,onClick:r=>r.stopPropagation(),children:n})]}),document.body):null}const Hn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],gr=360/Hn.length,Fv=42,Aa=3e3,Jd=10,Zd=260,Dv="cubic-bezier(.15,.7,.1,1)",Ov="cubic-bezier(.2,.7,.2,1)",Qn=5,Av=5,$v=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function Bv({muted:e=!1,size:t=18}){return s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),s.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&s.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function Uv({q:e,locked:t,onPick:n,result:r}){if(!e)return null;const i=[e.option1,e.option2,e.option3,e.option4];return s.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[s.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),s.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),i.map((o,a)=>{const l=r&&o===e.answer,c=r&&r.pick===o&&o!==e.answer;return s.jsx("button",{disabled:t||!!r,onClick:()=>n(o),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!r&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:o},a)}),r&&s.jsxs("div",{className:"mt-3 text-sm",children:[r.correct?s.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):s.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",s.jsx("b",{children:e.answer})]}),e.explanation&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function qv(){const e=Ut(),[t]=Pn("/sounds/correct.mp3",{volume:.7}),[n]=Pn("/sounds/wrong.mp3",{volume:.7}),[r,i]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(Qn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(Qn).fill(null)}]),[o,a]=d.useState(0),[l,c]=d.useState(1),u=r.reduce((I,q)=>I+q.scores.reduce((re,H)=>re+(H??0),0),0),[x,f]=d.useState(!0),p=d.useRef(null);d.useEffect(()=>{const I=new Audio("/sounds/spin.mp3");return I.loop=!0,I.volume=.7,p.current=I,()=>{try{I.pause(),I.src=""}catch{}}},[]);const j=()=>{if(x&&p.current)try{p.current.currentTime=0,p.current.play()}catch{}},b=()=>{if(p.current)try{p.current.pause(),p.current.currentTime=0}catch{}},[k,R]=d.useState(0),[v,m]=d.useState("none"),[y,_]=d.useState(!1),[P,L]=d.useState(null),[N,h]=d.useState(null),g=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[w,C]=d.useState([]);d.useEffect(()=>{(async()=>{try{const I=await fetch("/data/quiz_questions_bank.csv").then(X=>X.text()),{data:q}=sa.parse(I,{header:!0,skipEmptyLines:!0,transformHeader:X=>String(X).trim().toLowerCase()}),re={a:0,b:1,c:2,d:3},H=q.map((X,le)=>{var ie;const F=(X.question??"").trim();if(!F)return null;const M=[X.option1,X.option2,X.option3,X.option4].map(je=>String(je??"").trim());if(M.some(je=>!je))return null;let K=String(X.answer??"").trim(),ue=re[K.toLowerCase()];if(ue===void 0){const je=M.findIndex(Be=>Be.toLowerCase()===K.toLowerCase());ue=je>=0?je:0}const Z=M[ue];return{id:((ie=X.id)==null?void 0:ie.trim())||`ps_${le}`,question:F,option1:M[0],option2:M[1],option3:M[2],option4:M[3],answer:Z,explanation:String(X.explanation??"").trim(),catSlug:$v(X.category??X.subject??"general knowledge"),difficulty:String(X.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);C(H)}catch{C([])}})()},[]);const[E,U]=d.useState(null),[Y,G]=d.useState(null),[J,W]=d.useState(!1),T=I=>(I%360+360)%360,z=I=>T(I),$=l>Qn;function O(){if(r.length>=4)return;const I=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],q=I[(r.length*2+1)%I.length];i(re=>[...re,{name:`Player ${re.length+1}`,color:q,scores:Array(Qn).fill(null)}])}function Q(){r.length<=2||(i(I=>I.slice(0,-1)),a(I=>Math.min(I,r.length-2)))}function B(I){i(q=>q.map((re,H)=>H===o?{...re,scores:re.scores.map((X,le)=>le===l-1?I:X)}:re))}function oe(){if(y||$)return;L(null),h(null),U(null),G(null),_(!0),j();const I=Math.floor(Math.random()*Hn.length),q=Hn[I],re=gr*.28,H=(Math.random()*2-1)*re,X=T(k),le=180,M=I*gr+gr/2+H;let K=z(M-X-le);const ue=Fv*360+K,Z=k+ue+Jd;m(`transform ${g?800:Aa}ms ${Dv}`),R(Z);try{navigator.vibrate&&!g&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{m(`transform ${g?160:Zd}ms ${Ov}`),R(ie=>ie-Jd)},g?800:Aa),setTimeout(()=>{if(b(),_(!1),L(I),h(q.color),q.soon)return;const ie=w.filter(Be=>Be.catSlug===q.slug&&Be.difficulty==="easy"),je=ie.length?ie:w.filter(Be=>Be.catSlug===q.slug);if(je.length){const Be=je[Math.floor(Math.random()*je.length)];U(Be)}else U({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(g?800:Aa)+(g?160:Zd)+40)}function ae(I){if(!E||Y)return;const q=I===E.answer;if(G({correct:q,pick:I}),q){t(),W(!0),setTimeout(()=>W(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}B(Av)}else{n();try{navigator.vibrate&&navigator.vibrate([4])}catch{}B(0)}}function ce(){const I=(o+1)%r.length,q=I===0?l+1:l;a(I),c(q),L(null),h(null),U(null),G(null)}function xe(){const I=r.map(H=>H.scores.reduce((X,le)=>X+(le??0),0)),q=Math.max(...I),re=r.filter((H,X)=>I[X]===q).map(H=>H.name).join(", ");alert(`${re} win${re.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return s.jsxs("div",{className:"min-h-screen bg-black text-white",children:[J&&s.jsx(Ip,{numberOfPieces:120,recycle:!1}),s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),s.jsx("button",{onClick:()=>f(I=>!I),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":x?"Mute sound":"Unmute sound",title:x?"Sound on":"Sound off",children:s.jsx(Bv,{muted:!x})})]}),s.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"text-sm",children:["Round ",s.jsx("b",{children:Math.min(l,Qn)}),"/",s.jsx("b",{children:Qn})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:O,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),s.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),s.jsx("button",{onClick:Q,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),s.jsxs("div",{className:"text-sm",children:["Pot: ",s.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[s.jsxs("colgroup",{children:[s.jsx("col",{style:{width:"42%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"13%"}})]}),s.jsx("thead",{children:s.jsxs("tr",{className:"text-base-muted",children:[s.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:Qn}).map((I,q)=>s.jsxs("th",{className:"font-medium text-center",children:["R",q+1]},q)),s.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),s.jsx("tbody",{children:r.map((I,q)=>{const re=I.scores.reduce((X,le)=>X+(le??0),0),H=q===o;return s.jsxs("tr",{className:H?"bg-white/6":"",children:[s.jsx("td",{className:"py-1 pr-1",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:I.color}}),s.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:I.name,onChange:X=>i(le=>le.map((F,M)=>M===q?{...F,name:X.target.value}:F))})]})}),I.scores.map((X,le)=>s.jsx("td",{className:"text-center",children:X===null?"–":X},le)),s.jsx("td",{className:"text-right pr-1 font-semibold",children:re})]},q)})})]})})]}),s.jsx("section",{className:"flex flex-col items-center",children:s.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[N&&s.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${N}33, 0 0 30px 8px ${N}44`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${k}deg)`,transition:v},"aria-label":"Category wheel",role:"group",children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Hn.map((I,q)=>{const re=q*gr,H=re+gr,X=gr>180?1:0,le=Math.PI*re/180,F=Math.PI*H/180,M=50+50*Math.cos(le),K=50-50*Math.sin(le),ue=50+50*Math.cos(F),Z=50-50*Math.sin(F),ie=P===q;return s.jsxs("g",{style:{opacity:P==null?.95:ie?1:.78,filter:P!=null&&!ie?"blur(0.6px)":"none"},children:[s.jsx("path",{d:`M50,50 L${M},${K} A50,50 0 ${X} 0 ${ue},${Z} Z`,fill:I.color,stroke:ie?`${I.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:ie?"1.2":"0.6"}),s.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${re+gr/2} 50 50) translate(12 0)`,children:s.jsxs("tspan",{children:[I.label,I.soon?" (soon)":""]})})]},I.slug)}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),s.jsx("button",{onClick:oe,disabled:y||$,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",y||$?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),P!=null&&!y&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:s.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[s.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:Hn[P].color}}),Hn[P].label]})})]})}),s.jsx("section",{className:"mt-4",children:$?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),s.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",s.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),s.jsx("button",{className:"btn-primary w-full",onClick:xe,children:"End match"})]}):P!=null&&Hn[P].soon?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-lg font-semibold mb-1",children:Hn[P].label}),s.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),s.jsx("button",{className:"btn-primary",onClick:oe,disabled:y,children:"Re-spin"})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",s.jsx("span",{style:{color:r[o].color},children:r[o].name})," ","| Round ",l,"/",Qn]}),s.jsx(Uv,{q:E,locked:y||!E,onPick:ae,result:Y}),Y&&s.jsx("div",{className:"mt-3 flex justify-center",children:s.jsx("button",{className:"btn-primary",onClick:ce,children:"Next turn"})})]})})]}),s.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}function Wv(){const e=Ut(),[t,n]=d.useState(""),[r,i]=d.useState({name:"Nirmal",level:12,xp:2840,nextLevelXp:3e3,coins:1240,rank:23,streak:5,todayQuizzes:3,weeklyXp:450});d.useEffect(()=>{const l=new Date().getHours();l<12?n("Good morning"):l<17?n("Good afternoon"):n("Good evening")},[]);const o=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,a=r.xp%1e3/10;return s.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-12 px-3",children:[s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{children:[s.jsxs("h1",{className:"text-2xl font-bold",children:[t," 👋"]}),s.jsx("p",{className:"text-white/60 text-sm",children:"Ready for today's challenge?"})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-12 h-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:s.jsx("span",{className:"text-xl",children:"⚙️"})})]}),s.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[s.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:r.name[0]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"text-lg font-semibold",children:r.name}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",r.level]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[r.coins," 🪙"]}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",r.rank]})]})]}),s.jsxs("div",{className:"mb-3",children:[s.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[s.jsx("span",{children:"XP Progress"}),s.jsxs("span",{children:[r.xp,"/",r.nextLevelXp]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${a}%`}})})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",r.streak]}),s.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",r.weeklyXp]}),s.jsx("div",{className:"text-white/60 text-xs",children:"This Week"})]})]})]})]}),s.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${o} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),s.jsxs("div",{className:"relative flex items-start justify-between",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),s.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),s.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),s.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{onClick:()=>e("/profile/history"),className:`${o} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),s.jsx("div",{className:"text-3xl mb-3",children:"📊"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),s.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",r.todayQuizzes," today"]})]}),s.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${o} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),s.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),s.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${o} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[s.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),s.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),s.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${o} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[s.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),s.jsxs("div",{className:"mt-4 space-y-3",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${o} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"🔥"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),s.jsxs("div",{className:"text-[11px] opacity-80",children:[r.streak," days strong"]})]})]})}),s.jsx("button",{onClick:()=>e("/profile/quests"),className:`${o} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"⚡"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:`${o} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),s.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),s.jsx("div",{className:"text-white/40",children:"→"})]})})]}),s.jsx("div",{className:"h-6"})]})}const zs="🪙",$a={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},Qi=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function Qv(){var x;const e=Ut(),[t,n]=d.useState({days:2,hours:14,minutes:17}),[r,i]=d.useState("global"),o=$a[r]||$a.global,a=o.find(f=>f.you),l=o.slice(0,3),c=o.slice(3);d.useEffect(()=>{const f=p=>{p.preventDefault(),e(-1)};return window.addEventListener("popstate",f),()=>{window.removeEventListener("popstate",f)}},[e]),d.useEffect(()=>{const f=setInterval(()=>{n(p=>p.minutes>0?{...p,minutes:p.minutes-1}:p.hours>0?{...p,hours:p.hours-1,minutes:59}:p.days>0?{...p,days:p.days-1,hours:23,minutes:59}:p)},6e4);return()=>clearInterval(f)},[]);const u=f=>{const p=Math.max(...o.map(b=>b.score)),j=f/p*100;return j>=90?Qi[0]:j>=70?Qi[1]:j>=40?Qi[2]:Qi[3]};return s.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-5",children:[s.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),s.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",t.days,"d ",t.hours,"h ",t.minutes,"m"]})]}),s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),s.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${u(a==null?void 0:a.score).color} p-4 text-center relative overflow-hidden`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),s.jsxs("div",{className:"relative z-10",children:[s.jsx("div",{className:"text-2xl mb-1",children:u(a==null?void 0:a.score).icon}),s.jsxs("div",{className:"text-sm font-bold text-white",children:[u(a==null?void 0:a.score).name," League"]}),s.jsx("div",{className:"text-xs text-white/80",children:r==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),s.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:$a.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(f=>s.jsxs("button",{onClick:()=>i(f.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${r===f.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[s.jsx("div",{children:f.label}),s.jsx("div",{className:`text-[10px] ${r===f.key?"text-black/70":"text-white/60"}`,children:f.count})]},f.key))}),s.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),s.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[s.jsxs("span",{children:["Rank #",a==null?void 0:a.rank]}),s.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${a!=null&&a.trend.startsWith("+")?"bg-green-500/20 text-green-400":a!=null&&a.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:a==null?void 0:a.trend}),s.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",r==="global"?"Global":r==="friends"?"Friends":"India"]})]})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[a==null?void 0:a.score," ",zs]}),s.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",a==null?void 0:a.streak," streak"]})]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),s.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),s.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),s.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),s.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),s.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[l[1]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(Hi,{src:l[1].avatar,fallback:l[1].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:Vi(l[1].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[l[1].score," ",zs]})]}),l[0]&&s.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(Hi,{src:l[0].avatar,fallback:l[0].name,size:72}),s.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:s.jsx(Hv,{})}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),s.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:Vi(l[0].name,8)}),s.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[l[0].score," ",zs]}),s.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),l[2]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(Hi,{src:l[2].avatar,fallback:l[2].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:Vi(l[2].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[l[2].score," ",zs]})]})]})]})]}),c.length>0&&s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[s.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),s.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),s.jsx("ul",{className:"space-y-1.5",children:c.map((f,p)=>s.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${f.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${p*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx(Vv,{n:f.rank,you:f.you}),s.jsx(Hi,{src:f.avatar,fallback:f.name,size:36}),s.jsxs("div",{className:"flex flex-col leading-tight",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm font-semibold",children:Vi(f.name,12)}),s.jsx("span",{className:"text-xs",children:f.country}),f.friend&&s.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),s.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${f.you?"text-black/70":"text-white/60"}`,children:[s.jsx("span",{children:f.handle}),s.jsxs("span",{children:["🔥",f.streak]})]})]})]}),s.jsxs("div",{className:"flex flex-col items-end",children:[s.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[s.jsx("span",{children:f.score}),s.jsx("span",{className:f.you?"opacity-90":"opacity-80",children:zs})]}),s.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${f.trend.startsWith("+")?"bg-green-500/20 text-green-400":f.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:f.trend})]})]},`${r}-${f.rank}`))})]}),a&&a.rank>1&&s.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[s.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),s.jsx("div",{className:"text-xs text-white/70 mb-3",children:r==="friends"&&a.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((x=o[a.rank-2])==null?void 0:x.score)||0)-a.score+1)} more coins to reach rank #${a.rank-1}`}),!(r==="friends"&&a.rank===1)&&s.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),s.jsx("style",{jsx:!0,children:`
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
      `})]})}function Hi({src:e,fallback:t,size:n=56}){const r=Yv(t);return s.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:n,height:n},children:e?s.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):s.jsx("span",{className:"text-sm font-semibold",children:r})})}function Hv(){return s.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[s.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[s.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),s.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),s.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function Vv({n:e,you:t}){return s.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function Vi(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function Yv(e=""){var n;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((n=t[1])==null?void 0:n[0])||"")).toUpperCase()}const Kv="qp_recent",Xv="qp_review_snapshot",ef=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function Gv(){const[e,t]=d.useState("quizzes"),[n,r]=d.useState(null),[i,o]=d.useState(!1),[a,l]=d.useState("all"),[c,u]=d.useState("all"),[x,f]=d.useState("date"),[p,j]=d.useState([]),[b,k]=d.useState(!0),R=Ut(),v=N=>{if(!N)return"00:00";const h=Math.floor(N/1e3),g=Math.floor(h/60),w=h%60;return`${String(g).padStart(2,"0")}:${String(w).padStart(2,"0")}`},m=N=>{if(!N)return"Unknown";const h=new Date(N),w=Math.floor((new Date-h)/(1e3*60*60*24));return w===0?"Today":w===1?"Yesterday":w<7?`${w} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][h.getMonth()]} ${h.getDate()}`};d.useEffect(()=>{let N=!1;k(!0);const h=C=>{try{return JSON.parse(C)}catch{return null}},g=C=>encodeURIComponent(String(C).trim().toLowerCase().replace(/\s+/g,"-")),w=C=>{var O,Q,B,oe;const E=Number(C.ts??C.timestamp??C.id)||Date.now(),U=Number(C.ms)||0,Y=Number(C.total)||0,G=Number(C.correct)||0,W=String(C.mode||"").toLowerCase().includes("practice")?"practice":"quiz",T=((O=C.snapshot)==null?void 0:O.category)||((Q=C.snapshot)==null?void 0:Q.categoryLabel)||C.cat||C.category||"Unknown",z=((B=C.snapshot)==null?void 0:B.categoryParam)||g(T),$=String(((oe=C.snapshot)==null?void 0:oe.difficulty)||C.difficulty||"medium").toLowerCase();return{id:C.id??E,type:W,category:T,categoryParam:z,difficulty:$,score:G,total:Y,accuracy:Y?Math.round(G/Y*100):0,time:v(U),ms:U,date:m(E),timestamp:E,snapshot:C.snapshot??null,mode:C.mode||(W==="practice"?"Practice":"Quiz")}};try{const C=localStorage.getItem(Kv),E=C?h(C):null,Y=(Array.isArray(E)&&E.length?E:ef).map(w).filter(G=>G&&G.timestamp).sort((G,J)=>J.timestamp-G.timestamp);N||j(Y)}catch(C){console.error("Error loading history:",C),N||j(ef)}finally{N||k(!1)}return()=>{N=!0}},[]);const y=d.useMemo(()=>{const N=new Set(p.map(h=>h.category));return Array.from(N)},[p]),_=d.useMemo(()=>{let N=p.filter(h=>e==="quizzes"?h.type==="quiz":h.type==="practice");return a!=="all"&&(N=N.filter(h=>h.category===a)),c!=="all"&&(N=N.filter(h=>h.difficulty===c)),N.sort((h,g)=>x==="date"?g.timestamp-h.timestamp:x==="score"?g.accuracy-h.accuracy:x==="time"?h.ms-g.ms:0),N},[p,e,a,c,x]),P=d.useMemo(()=>{if(_.length===0)return null;const N=_.reduce((C,E)=>C+E.score,0),h=_.reduce((C,E)=>C+E.total,0),g=h?Math.round(N/h*100):0,w=_.reduce((C,E)=>C+E.ms,0);return{count:_.length,avgAccuracy:g,totalTime:v(w),bestScore:Math.max(..._.map(C=>C.accuracy))}},[_]),L=N=>N>=80?"text-green-400":N>=60?"text-blue-400":N>=40?"text-yellow-400":"text-red-400";return b?s.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white",children:"Loading history..."})}):s.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[s.jsx("div",{className:"",children:s.jsxs("div",{className:"px-4 pt-4 pb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("button",{onClick:()=>R("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),s.jsx("button",{onClick:()=>o(!i),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:s.jsx(ey,{})})]}),s.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),s.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),s.jsxs("div",{className:"px-4 pb-20",children:[s.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:s.jsx("div",{className:"flex items-center",children:s.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(N=>s.jsxs("button",{onClick:()=>t(N.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===N.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[s.jsx("span",{className:"mr-1",children:N.icon}),N.label]},N.value))})})}),P&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[s.jsx(Yi,{label:"Total",value:P.count}),s.jsx(Yi,{label:"Avg Score",value:`${P.avgAccuracy}%`,color:L(P.avgAccuracy)}),s.jsx(Yi,{label:"Best Score",value:`${P.bestScore}%`,color:"text-green-400"}),s.jsx(Yi,{label:"Total Time",value:P.totalTime})]})}),i&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),s.jsxs("select",{value:a,onChange:N=>l(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All Categories"}),y.map(N=>s.jsx("option",{value:N,children:N},N))]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),s.jsxs("select",{value:c,onChange:N=>u(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All"}),s.jsx("option",{value:"easy",children:"Easy"}),s.jsx("option",{value:"medium",children:"Medium"}),s.jsx("option",{value:"hard",children:"Hard"})]})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),s.jsxs("select",{value:x,onChange:N=>f(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"date",children:"Date"}),s.jsx("option",{value:"score",children:"Score"}),s.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),_.length===0?s.jsxs("div",{className:"text-center py-12",children:[s.jsx("div",{className:"text-4xl mb-3",children:"📚"}),s.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),s.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):s.jsx("div",{className:"space-y-3",children:_.map((N,h)=>s.jsx(Jv,{item:N,index:h,onClick:()=>r(N)},N.id))})]}),n&&s.jsx(Zv,{item:n,onClose:()=>r(null)})]})}function Yi({label:e,value:t,color:n="text-white"}){return s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),s.jsx("div",{className:`text-lg font-bold ${n}`,children:t})]})}function Jv({item:e,index:t,onClick:n}){const r=a=>a>=80?"from-green-500/20 to-green-600/10 border-green-500/30":a>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":a>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",o=(a=>{const l=a==null?void 0:a.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return s.jsxs("div",{onClick:n,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${r(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),s.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${o.bg} ${o.text} ${o.border} border`,children:e.difficulty}),s.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),s.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),s.jsxs("div",{className:"flex items-center justify-between text-xs",children:[s.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[s.jsxs("span",{children:["⏱ ",e.time]}),s.jsx("span",{children:e.mode})]}),s.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function Zv({item:e,onClose:t}){const n=Ut();return d.useEffect(()=>{const r=i=>{i.key==="Escape"&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t]),s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:s.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),s.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Category"}),s.jsx("span",{className:"text-white font-medium",children:e.category})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Difficulty"}),s.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Score"}),s.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Accuracy"}),s.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-white/60",children:"Time"}),s.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&s.jsx("button",{onClick:()=>{t(),localStorage.setItem(Xv,JSON.stringify(e.snapshot)),n(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),s.jsx("button",{onClick:()=>{var r;t(),n(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((r=e.snapshot)==null?void 0:r.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function ey(){return s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const ty=d.createContext({});function $p(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const ny=typeof window<"u",ry=ny?d.useLayoutEffect:d.useEffect,Bp=d.createContext(null);function sy(e){return typeof e=="object"&&e!==null}function iy(e){return sy(e)&&"offsetHeight"in e}const oy=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class ay extends d.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=iy(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function ly({children:e,isPresent:t,anchorX:n,root:r}){const i=d.useId(),o=d.useRef(null),a=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(oy);return d.useInsertionEffect(()=>{const{width:c,height:u,top:x,left:f,right:p}=a.current;if(t||!o.current||!c||!u)return;const j=n==="left"?`left: ${f}`:`right: ${p}`;o.current.dataset.motionPopId=i;const b=document.createElement("style");l&&(b.nonce=l);const k=r??document.head;return k.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${j}px !important;
            top: ${x}px !important;
          }
        `),()=>{k.contains(b)&&k.removeChild(b)}},[t]),s.jsx(ay,{isPresent:t,childRef:o,sizeRef:a,children:d.cloneElement(e,{ref:o})})}const cy=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a,anchorX:l,root:c})=>{const u=$p(uy),x=d.useId();let f=!0,p=d.useMemo(()=>(f=!1,{id:x,initial:t,isPresent:n,custom:i,onExitComplete:j=>{u.set(j,!0);for(const b of u.values())if(!b)return;r&&r()},register:j=>(u.set(j,!1),()=>u.delete(j))}),[n,u,r]);return o&&f&&(p={...p}),d.useMemo(()=>{u.forEach((j,b)=>u.set(b,!1))},[n]),d.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),a==="popLayout"&&(e=s.jsx(ly,{isPresent:n,anchorX:l,root:c,children:e})),s.jsx(Bp.Provider,{value:p,children:e})};function uy(){return new Map}function dy(e=!0){const t=d.useContext(Bp);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=d.useId();d.useEffect(()=>{if(e)return i(o)},[e]);const a=d.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,a]:[!0]}const Ki=e=>e.key||"";function tf(e){const t=[];return d.Children.forEach(e,n=>{d.isValidElement(n)&&t.push(n)}),t}const Ba=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:a=!1,anchorX:l="left",root:c})=>{const[u,x]=dy(a),f=d.useMemo(()=>tf(e),[e]),p=a&&!u?[]:f.map(Ki),j=d.useRef(!0),b=d.useRef(f),k=$p(()=>new Map),[R,v]=d.useState(f),[m,y]=d.useState(f);ry(()=>{j.current=!1,b.current=f;for(let L=0;L<m.length;L++){const N=Ki(m[L]);p.includes(N)?k.delete(N):k.get(N)!==!0&&k.set(N,!1)}},[m,p.length,p.join("-")]);const _=[];if(f!==R){let L=[...f];for(let N=0;N<m.length;N++){const h=m[N],g=Ki(h);p.includes(g)||(L.splice(N,0,h),_.push(h))}return o==="wait"&&_.length&&(L=_),y(tf(L)),v(f),null}const{forceRender:P}=d.useContext(ty);return s.jsx(s.Fragment,{children:m.map(L=>{const N=Ki(L),h=a&&!u?!1:f===m||p.includes(N),g=()=>{if(k.has(N))k.set(N,!0);else return;let w=!0;k.forEach(C=>{C||(w=!1)}),w&&(P==null||P(),y(b.current),a&&(x==null||x()),r&&r())};return s.jsx(cy,{isPresent:h,initial:!j.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:h?void 0:g,anchorX:l,children:L},N)})})},fy=()=>{const[e,t]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const F=sessionStorage.getItem("navigationSource");F&&t(F)}},[]);const n=F=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=F)},r=()=>{if(typeof window<"u"){const F=sessionStorage.getItem("navigationSource");window.location.href="/profile",sessionStorage.removeItem("navigationSource")}},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},[a,l]=d.useState(4),[c,u]=d.useState(1390),[x,f]=d.useState(4),[p,j]=d.useState(!1),[b,k]=d.useState(!1),[R,v]=d.useState(0),[m,y]=d.useState(0),[_,P]=d.useState("cycle"),[L,N]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[h,g]=d.useState([0,1,2,3]),[w,C]=d.useState(!1),[E,U]=d.useState(!1),[Y,G]=d.useState(null),[J,W]=d.useState(null),[T,z]=d.useState(!1),[$,O]=d.useState(null),[Q,B]=d.useState(!1),oe=d.useRef(null),ae=d.useRef(null),ce=d.useRef(null);d.useEffect(()=>{oe.current=new Audio("/sounds/reward.mp3"),ae.current=new Audio("/sounds/reward_progress.mp3"),[oe,ae].forEach(F=>{var M;(M=F.current)==null||M.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const xe=F=>{try{F.current&&(F.current.currentTime=0,F.current.play().catch(M=>console.log("Audio play failed:",M)))}catch(M){console.log("Sound play error:",M)}},I=(F,M)=>{if(F>a){W(M),U(!0);return}F===a&&re(F,M)},q=F=>{var K;const M=(K=ce.current)==null?void 0:K.querySelector(`[data-index="${F}"]`);if(M){const ue=M.getBoundingClientRect(),Z=window.pageYOffset||document.documentElement.scrollTop,ie=ue.top+Z-window.innerHeight/2+50;window.scrollTo({top:ie,behavior:"smooth"})}},re=(F,M)=>{if(!h.includes(F)){if(M.cost>0&&c<M.cost){W(M),U(!0);return}M.cost>0&&u(K=>K-M.cost),xe(oe),C(!0),W(M),g(K=>[...K,F]),setTimeout(()=>{C(!1),M.type==="coins"?(v(M.value),j(!0),setTimeout(()=>{u(K=>K+M.value),setTimeout(()=>{j(!1),v(0)},500)},300)):M.type==="life"?(y(M.value),k(!0),setTimeout(()=>{f(K=>K+M.value),setTimeout(()=>{k(!1),y(0)},500)},300)):(O({icon:M.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{O(null),B(!0),H(M),M.type==="vehicle"&&P(M.value),setTimeout(()=>{B(!1)},500)},800)),setTimeout(()=>{if(a<i.length-1){const K=a+1;q(K),setTimeout(()=>{z(!0),xe(ae),l(K),setTimeout(()=>{z(!1)},500)},300)}},1200)},1500)}},H=F=>{N(M=>M.find(ue=>ue.icon===F.icon)?M.map(ue=>ue.icon===F.icon?{...ue,count:ue.count+1}:ue):[...M,{type:F.type,icon:F.icon,name:F.label,count:1}])},X=F=>30+F*100,le=()=>30+a*100;return s.jsxs("div",{className:"rewards-page",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsx("div",{className:"non-sticky-header",children:s.jsx("button",{className:"back-button",onClick:r,children:"← Back"})}),s.jsxs("div",{className:"sticky-section",children:[s.jsxs("div",{className:"header-wrapper",children:[s.jsxs("div",{className:"title-row",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"title",children:"Rewards"}),s.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),s.jsx("button",{className:"play-quiz-btn",onClick:()=>n("/play"),children:"Play Quiz"})]}),s.jsx("div",{className:"balance-row",children:s.jsx("div",{className:"balance-item",children:s.jsxs("div",{children:[s.jsx("div",{className:"balance-label",children:"Balance"}),s.jsxs("div",{className:`balance-value ${p?"animating":""}`,children:[c.toLocaleString()," 🪙",p&&s.jsxs("span",{className:"value-change",children:["+",R]})]})]})})})]}),s.jsx("div",{className:"stats-cards-container",children:s.jsxs("div",{className:"info-grid",children:[s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"❤️"}),s.jsxs("div",{className:`info-value ${b?"animating":""}`,children:[x,b&&s.jsxs("span",{className:"value-change",children:["+",m]})]}),s.jsx("div",{className:"info-label",children:"Lives"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"⭐"}),s.jsx("div",{className:"info-value",children:"5"}),s.jsx("div",{className:"info-label",children:"Level"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:o[_].icon}),s.jsx("div",{className:"info-value",children:o[_].name}),s.jsx("div",{className:"info-label",children:"Vehicle"})]}),s.jsxs("div",{className:`cards-section ${Q?"animating":""}`,children:[s.jsx("div",{className:"cards-label",children:"Your Cards"}),s.jsx("div",{className:"card-grid",children:L.map((F,M)=>s.jsxs("div",{className:"card-item",onClick:()=>G(F),children:[s.jsxs("div",{className:"large-card",children:[s.jsx("div",{className:"large-card-icon",children:F.icon}),s.jsx("div",{className:"large-card-name",children:F.name})]}),F.count>1&&s.jsx("div",{className:"card-count-badge",children:F.count})]},M))})]})]})})]}),s.jsx("div",{className:"scrollable-journey",children:s.jsx("div",{className:"journey-container",ref:ce,children:s.jsxs("div",{className:"journey-track",children:[s.jsx("div",{className:"curvy-road",children:s.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),s.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),s.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),s.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-a/(i.length-1)*1500})]})}),s.jsxs("div",{className:"avatar-tracker",style:{top:`${le()}px`},children:[s.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:F=>{F.target.style.display="none"}}),s.jsx("div",{className:"tracker-vehicle",children:o[_].icon})]}),s.jsx("div",{className:"rewards-list",children:i.map((F,M)=>{const K=M%2===0,ue=M>a,Z=h.includes(M),ie=M===a;return s.jsx("div",{className:"reward-row","data-index":M,style:{top:`${X(M)}px`},children:s.jsxs("div",{className:`reward-item ${K?"left":"right"}`,children:[s.jsxs("div",{className:`checkpoint ${ie?"current":Z?"claimed":ue?"locked":""}`,onClick:()=>I(M,F),children:[s.jsx("div",{className:"checkpoint-icon",children:F.icon}),s.jsx("div",{className:"checkpoint-value",children:F.label.split(" ")[0]}),F.milestone&&s.jsx("div",{className:"milestone-badge",children:"BONUS"}),ue&&s.jsx("div",{className:"lock-icon",children:"🔒"})]}),s.jsxs("div",{className:"reward-info",children:[s.jsx("div",{className:"reward-name",children:F.label}),s.jsxs("div",{className:"step-label",children:["Step ",M+1]})]})]})},F.id)})})]})})}),$&&s.jsx("div",{className:"flying-card",style:{left:`${$.startX}px`,top:`${$.startY}px`,"--startX":`${$.startX}px`},children:$.icon}),s.jsx(Ba,{children:Y&&s.jsx("div",{className:"claim-overlay",onClick:()=>G(null),children:s.jsxs("div",{className:"modal",onClick:F=>F.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:Y.icon}),s.jsx("div",{className:"card-detail-name",children:Y.name}),s.jsxs("div",{className:"card-detail-desc",children:["You have ",Y.count," of these cards"]}),s.jsx("div",{className:"modal-buttons",children:s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>G(null),children:"Close"})})]})})}),s.jsx(Ba,{children:w&&J&&s.jsx("div",{className:"claim-overlay",children:s.jsxs("div",{className:"modal",children:[s.jsx("div",{className:"modal-title",children:"WELL DONE!"}),s.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),s.jsx("div",{className:"modal-icon",children:J.icon}),s.jsxs("div",{className:"modal-value",children:["+",J.value," ",J.type==="coins"?"Coins":J.type==="life"?"Lives":J.label]})]})})}),s.jsx(Ba,{children:E&&J&&s.jsx("div",{className:"claim-overlay",onClick:()=>U(!1),children:s.jsxs("div",{className:"modal",onClick:F=>F.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:"🪙"}),s.jsx("div",{className:"modal-title",children:"Need More Coins"}),s.jsx("div",{className:"modal-subtitle",children:J.cost>0?`You need ${J.cost-c} more coins`:"Complete previous rewards first"}),s.jsxs("div",{className:"modal-buttons",children:[s.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>n("/play"),children:"Play Quiz"}),s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>U(!1),children:"Cancel"})]})]})})})]})},Xi=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function my(){const[e,t]=d.useState(null),n=Xi.filter(i=>i.unlocked).length,r=Math.round(n/Xi.length*100);return s.jsxs("div",{className:"badges-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Badge Collection"}),s.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),s.jsxs("div",{className:"progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Collection Progress"}),s.jsxs("span",{className:"progress-value",children:[n,"/",Xi.length]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${r}%`}})})]}),s.jsx("div",{className:"badges-grid",children:Xi.map(i=>s.jsxs("div",{className:`badge-card ${i.unlocked?"unlocked":""}`,style:{"--badge-color":i.color},onClick:()=>t(i),children:[s.jsx("div",{className:"badge-glow"}),s.jsx("div",{className:"badge-emoji",children:i.emoji}),s.jsx("div",{className:"badge-name",children:i.name}),!i.unlocked&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"badge-progress",children:s.jsx("div",{className:"badge-progress-fill",style:{width:`${i.progress}%`}})}),s.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},i.id))}),s.jsxs("div",{className:"tips-card",children:[s.jsxs("div",{className:"tips-title",children:[s.jsx("span",{children:"💡"}),s.jsx("span",{children:"Pro Tip"})]}),s.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&s.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:s.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[s.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),s.jsx("h3",{className:"modal-title",children:e.name}),s.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),s.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&s.jsxs("div",{className:"modal-progress-section",children:[s.jsx("div",{className:"modal-progress-label",children:"Progress"}),s.jsx("div",{className:"modal-progress-bar",children:s.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),s.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),s.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const py=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function hy(){const[e,t]=d.useState(py),[n,r]=d.useState(null),[i,o]=d.useState(1890),[a,l]=d.useState(!1),[c,u]=d.useState([]),x=e.length,f=e.filter(b=>b.current>=b.target).length,p=Math.round(f/x*100);d.useEffect(()=>{const b=setInterval(()=>{u(k=>{const R={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...k.slice(-4),R]})},3e3);return()=>clearInterval(b)},[]);const j=(b,k)=>{r(b),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{t(R=>R.map(v=>v.id===b?{...v,claimed:!0}:v)),o(R=>R+k),r(null),l(!0),setTimeout(()=>l(!1),2e3)},600)};return s.jsxs("div",{className:"achievements-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"floating-shapes",children:[s.jsx("div",{className:"shape shape-1"}),s.jsx("div",{className:"shape shape-2"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",i.toLocaleString()]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),s.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),s.jsxs("div",{className:"progress-overview",children:[s.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),s.jsxs("div",{className:"overview-header",children:[s.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),s.jsxs("div",{className:"overview-stats",children:[s.jsx("span",{className:"trophy-icon",children:"🏆"}),s.jsxs("span",{className:"overview-value",children:[f,"/",x]})]})]}),s.jsx("div",{className:"progress-bar-main",children:s.jsx("div",{className:"progress-fill-main",style:{width:`${p}%`}})})]}),s.jsx("div",{className:"achievements-list",children:e.map(b=>{const k=Math.min(100,Math.round(b.current/b.target*100)),R=k===100,v=b.color+"CC";return s.jsxs("div",{className:`achievement-card ${R?"completed":""}`,style:{"--card-color":b.color,"--card-color-dark":v},children:[s.jsx("div",{className:"card-glow"}),R&&b.claimed&&s.jsx("div",{className:"completed-badge",children:"✓"}),s.jsxs("div",{className:"card-content",children:[s.jsx("div",{className:"achievement-icon",children:b.icon}),s.jsxs("div",{className:"achievement-details",children:[s.jsx("div",{className:"achievement-title",children:b.title}),s.jsx("div",{className:"achievement-subtitle",children:b.subtitle}),s.jsxs("div",{className:"progress-container",children:[s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill",style:{width:`${k}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{children:[b.current,"/",b.target]}),s.jsxs("span",{className:"reward-badge",children:["🪙 ",b.reward]})]})]})]}),s.jsx("button",{onClick:()=>j(b.id,b.reward),disabled:!R||b.claimed,className:`claim-button ${b.claimed?"claimed":R?"can-claim":"in-progress"} ${n===b.id?"claiming":""}`,children:b.claimed?"✓":R?"CLAIM!":`${k}%`})]})]},b.id)})}),a&&s.jsx("div",{className:"celebration",children:"🎉"})]})}function xy(){const[e,t]=d.useState(5),[n,r]=d.useState(12),[i,o]=d.useState(47),[a,l]=d.useState(!1),c=new Date().getDay(),u=["S","M","T","W","T","F","S"].map((b,k)=>({label:b,hit:k<=c&&k!==0,isToday:k===c})),x=[{days:3,emoji:"⚡",label:"Starter",achieved:e>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:e>=7},{days:30,emoji:"💎",label:"Champion",achieved:e>=30},{days:100,emoji:"👑",label:"Legend",achieved:e>=100}],f=x.find(b=>b.days>e)||x[x.length-1],p=Math.min(100,e/f.days*100);d.useEffect(()=>{e>0&&e%5===0&&(l(!0),setTimeout(()=>l(!1),2e3))},[e]);const j=()=>{typeof window<"u"&&(window.location.href="/play")};return s.jsxs("div",{className:"streaks-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsx("div",{className:"animated-bg"}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"STREAKS"}),s.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),s.jsxs("div",{className:"streak-hero",children:[s.jsx("div",{className:"fire-animation",children:"🔥"}),s.jsx("div",{className:"streak-number",children:e}),s.jsx("div",{className:"streak-label",children:"DAY STREAK"}),s.jsxs("div",{className:"stats-row",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:n}),s.jsx("div",{className:"stat-label",children:"Best Streak"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:i}),s.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),s.jsxs("div",{className:"calendar-card",children:[s.jsx("div",{className:"calendar-header",children:"This Week"}),s.jsx("div",{className:"week-grid",children:u.map((b,k)=>s.jsxs("div",{className:`day-box ${b.isToday?"today":b.hit?"active":"inactive"}`,children:[b.isToday&&s.jsx("div",{className:"day-icon",children:"⚡"}),b.hit&&!b.isToday&&s.jsx("div",{className:"day-icon",children:"✓"}),s.jsx("div",{children:b.label})]},k))})]}),s.jsxs("div",{className:"milestone-section",children:[s.jsx("div",{className:"milestone-header",children:"Next Milestone"}),s.jsxs("div",{className:"milestone-progress",children:[s.jsxs("div",{className:"milestone-info",children:[s.jsxs("div",{className:"milestone-current",children:[s.jsx("span",{className:"milestone-emoji",children:f.emoji}),s.jsx("span",{className:"milestone-text",children:f.label})]}),s.jsxs("span",{className:"milestone-target",children:[e,"/",f.days," days"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${p}%`}})})]}),s.jsx("div",{className:"milestones-grid",children:x.map((b,k)=>s.jsxs("div",{className:`milestone-badge ${b.achieved?"achieved":""}`,children:[s.jsx("div",{className:"milestone-badge-emoji",children:b.emoji}),s.jsxs("div",{className:"milestone-badge-label",children:[b.days," days"]})]},k))})]}),s.jsxs("div",{className:"motivational-text",children:[`"Great job! You're `,Math.max(1,f.days-e)," days away from ",f.label,'!"']}),s.jsxs("button",{className:"play-button",onClick:j,children:[s.jsx("span",{children:"Continue Streak"}),s.jsx("span",{children:"→"})]}),a&&s.jsx("div",{className:"celebration",children:"🎉"})]})}const gy=[{id:1,title:"Play 3 quizzes today",progress:2,target:3,reward:60,claimed:!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy"},{id:2,title:"Score 8+ twice",progress:1,target:2,reward:80,claimed:!1,icon:"🎯",color:"#4ECDC4",difficulty:"Medium"},{id:3,title:"Practice 15 questions",progress:15,target:15,reward:100,claimed:!0,icon:"📚",color:"#FFD93D",difficulty:"Easy"},{id:4,title:"Win 5 in a row",progress:3,target:5,reward:150,claimed:!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard"},{id:5,title:"Complete a speed run",progress:0,target:1,reward:120,claimed:!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium"}];function vy(){const[e,t]=d.useState(gy),[n,r]=d.useState(850),[i,o]=d.useState(null),[a,l]=d.useState(0);d.useEffect(()=>{const f=e.filter(p=>p.progress>=p.target).length;l(Math.round(f/e.length*100))},[e]);const c=(f,p)=>{navigator.vibrate&&navigator.vibrate([20,10,20]),o(f),setTimeout(()=>{t(j=>j.map(b=>b.id===f?{...b,claimed:!0}:b)),r(j=>j+p),o(null)},600)},u=f=>{switch(f){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},x=()=>{const f=new Date,p=new Date(f);p.setDate(p.getDate()+1),p.setHours(5,0,0,0);const j=p-f,b=Math.floor(j/(1e3*60*60)),k=Math.floor(j%(1e3*60*60)/(1e3*60));return`${b}h ${k}m`};return s.jsxs("div",{className:"quests-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"animated-bg",children:[s.jsx("div",{className:"floating-icon",children:"🎮"}),s.jsx("div",{className:"floating-icon",children:"🎯"}),s.jsx("div",{className:"floating-icon",children:"🏆"}),s.jsx("div",{className:"floating-icon",children:"⭐"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",n]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Daily Quests"}),s.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),s.jsxs("div",{className:"daily-progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Today's Progress"}),s.jsxs("span",{className:"progress-value",children:[a,"%"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${a}%`}})})]}),s.jsx("div",{className:"quests-list",children:e.map(f=>{const p=Math.min(100,Math.round(f.progress/f.target*100)),j=p===100,b=f.color+"CC";return s.jsxs("div",{className:`quest-card ${j?"completed":""}`,style:{"--quest-color":f.color,"--quest-color-dark":b},children:[s.jsx("div",{className:"quest-accent"}),j&&f.claimed&&s.jsx("div",{className:"completed-checkmark",children:"✓"}),s.jsxs("div",{className:"quest-content",children:[s.jsx("div",{className:`quest-icon-container ${i===f.id?"animating":""}`,children:f.icon}),s.jsxs("div",{className:"quest-details",children:[s.jsxs("div",{className:"quest-header",children:[s.jsx("span",{className:"quest-title",children:f.title}),s.jsx("span",{className:"difficulty-badge",style:{background:`${u(f.difficulty)}20`,color:u(f.difficulty)},children:f.difficulty})]}),s.jsxs("div",{className:"progress-info",children:[s.jsx("div",{className:"mini-progress-bar",children:s.jsx("div",{className:"mini-progress-fill",style:{width:`${p}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{className:"progress-numbers",children:[f.progress,"/",f.target]}),s.jsxs("span",{className:"reward-display",children:["🪙 ",f.reward]})]})]})]}),s.jsx("button",{onClick:()=>j&&!f.claimed&&c(f.id,f.reward),disabled:f.claimed,className:`action-button ${f.claimed?"claimed":j?"can-claim":"in-progress"}`,style:!j&&!f.claimed?{"--quest-color":f.color,"--quest-color-dark":b}:{},children:f.claimed?"✓":j?"Claim":"Do it"})]})]},f.id)})}),s.jsxs("div",{className:"timer-card",children:[s.jsx("div",{className:"timer-icon",children:"⏰"}),s.jsx("div",{className:"timer-label",children:"New Quests In"}),s.jsx("div",{className:"timer-value",children:x()})]}),i&&s.jsx("div",{className:"reward-animation",children:"🪙"})]})}function yy({title:e,subtitle:t,children:n}){const r=Ut();return s.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>r(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&s.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),s.jsx("div",{className:"w-[68px]"})]}),n]})}function by(){const e=Ut(),[t,n]=d.useState(!0),[r,i]=d.useState(!0),[o,a]=d.useState(!0);return s.jsxs(yy,{title:"Settings",subtitle:"Make it yours",children:[s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[s.jsx(Ms,{label:"Sound",right:s.jsx(Ua,{on:t,set:n})}),s.jsx(Ms,{label:"Haptics",right:s.jsx(Ua,{on:r,set:i})}),s.jsx(Ms,{label:"Notifications",right:s.jsx(Ua,{on:o,set:a})}),s.jsx(Ms,{label:"Edit Profile",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),s.jsx(Ms,{label:"Privacy Policy",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),s.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function Ms({label:e,right:t,onClick:n}){return s.jsxs("button",{type:"button",onClick:n,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[s.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function Ua({on:e,set:t}){return s.jsx("span",{onClick:n=>{n.stopPropagation(),t(r=>!r),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:s.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}function wy(){return s.jsx(xg,{children:s.jsxs(ot,{element:s.jsx(Gg,{}),children:[s.jsx(ot,{path:"/",element:s.jsx(Fd,{})}),s.jsx(ot,{path:"/play",element:s.jsx(Nv,{})}),s.jsx(ot,{path:"/play/party",element:s.jsx(qv,{})}),s.jsx(ot,{path:"/profile",element:s.jsx(Wv,{})}),s.jsx(ot,{path:"/profile/leaderboard",element:s.jsx(Qv,{})}),s.jsx(ot,{path:"/profile/history",element:s.jsx(Gv,{})}),s.jsx(ot,{path:"/profile/rewards",element:s.jsx(fy,{})}),s.jsx(ot,{path:"/profile/badges",element:s.jsx(my,{})}),s.jsx(ot,{path:"/profile/achievements",element:s.jsx(hy,{})}),s.jsx(ot,{path:"/profile/streaks",element:s.jsx(xy,{})}),s.jsx(ot,{path:"/profile/quests",element:s.jsx(vy,{})}),s.jsx(ot,{path:"/profile/settings",element:s.jsx(by,{})}),s.jsx(ot,{path:"/leaders",element:s.jsx(mg,{to:"/profile/leaderboard",replace:!0})}),s.jsx(ot,{path:"/quiz/:category/start",element:s.jsx(Tv,{})}),s.jsx(ot,{path:"*",element:s.jsx(Fd,{})})]})})}qa.createRoot(document.getElementById("root")).render(s.jsx(St.StrictMode,{children:s.jsx($g,{children:s.jsx(wy,{})})}));export{Yp as c,nf as g};
