(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var xm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ru={exports:{}},Hi={},Pu={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),gm=Symbol.for("react.portal"),vm=Symbol.for("react.fragment"),ym=Symbol.for("react.strict_mode"),bm=Symbol.for("react.profiler"),wm=Symbol.for("react.provider"),jm=Symbol.for("react.context"),km=Symbol.for("react.forward_ref"),Nm=Symbol.for("react.suspense"),Sm=Symbol.for("react.memo"),Cm=Symbol.for("react.lazy"),Gl=Symbol.iterator;function Em(e){return e===null||typeof e!="object"?null:(e=Gl&&e[Gl]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zu=Object.assign,Lu={};function _r(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||Tu}_r.prototype.isReactComponent={};_r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mu(){}Mu.prototype=_r.prototype;function Wa(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||Tu}var Qa=Wa.prototype=new Mu;Qa.constructor=Wa;zu(Qa,_r.prototype);Qa.isPureReactComponent=!0;var Xl=Array.isArray,Fu=Object.prototype.hasOwnProperty,qa={current:null},Iu={key:!0,ref:!0,__self:!0,__source:!0};function Au(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Fu.call(t,r)&&!Iu.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Cs,type:e,key:o,ref:a,props:i,_owner:qa.current}}function _m(e,t){return{$$typeof:Cs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ha(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cs}function Rm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Kl=/\/+/g;function mo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rm(""+e.key):t.toString(36)}function ii(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Cs:case gm:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+mo(a,0):r,Xl(i)?(n="",e!=null&&(n=e.replace(Kl,"$&/")+"/"),ii(i,t,n,"",function(u){return u})):i!=null&&(Ha(i)&&(i=_m(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Kl,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Xl(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+mo(o,l);a+=ii(o,t,n,c,i)}else if(c=Em(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+mo(o,l++),a+=ii(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Fs(e,t,n){if(e==null)return e;var r=[],i=0;return ii(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Pm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var it={current:null},oi={transition:null},Tm={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:oi,ReactCurrentOwner:qa};function Du(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:Fs,forEach:function(e,t,n){Fs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fs(e,function(){t++}),t},toArray:function(e){return Fs(e,function(t){return t})||[]},only:function(e){if(!Ha(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};de.Component=_r;de.Fragment=vm;de.Profiler=bm;de.PureComponent=Wa;de.StrictMode=ym;de.Suspense=Nm;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tm;de.act=Du;de.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zu({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=qa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Fu.call(t,c)&&!Iu.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Cs,type:e.type,key:i,ref:o,props:r,_owner:a}};de.createContext=function(e){return e={$$typeof:jm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wm,_context:e},e.Consumer=e};de.createElement=Au;de.createFactory=function(e){var t=Au.bind(null,e);return t.type=e,t};de.createRef=function(){return{current:null}};de.forwardRef=function(e){return{$$typeof:km,render:e}};de.isValidElement=Ha;de.lazy=function(e){return{$$typeof:Cm,_payload:{_status:-1,_result:e},_init:Pm}};de.memo=function(e,t){return{$$typeof:Sm,type:e,compare:t===void 0?null:t}};de.startTransition=function(e){var t=oi.transition;oi.transition={};try{e()}finally{oi.transition=t}};de.unstable_act=Du;de.useCallback=function(e,t){return it.current.useCallback(e,t)};de.useContext=function(e){return it.current.useContext(e)};de.useDebugValue=function(){};de.useDeferredValue=function(e){return it.current.useDeferredValue(e)};de.useEffect=function(e,t){return it.current.useEffect(e,t)};de.useId=function(){return it.current.useId()};de.useImperativeHandle=function(e,t,n){return it.current.useImperativeHandle(e,t,n)};de.useInsertionEffect=function(e,t){return it.current.useInsertionEffect(e,t)};de.useLayoutEffect=function(e,t){return it.current.useLayoutEffect(e,t)};de.useMemo=function(e,t){return it.current.useMemo(e,t)};de.useReducer=function(e,t,n){return it.current.useReducer(e,t,n)};de.useRef=function(e){return it.current.useRef(e)};de.useState=function(e){return it.current.useState(e)};de.useSyncExternalStore=function(e,t,n){return it.current.useSyncExternalStore(e,t,n)};de.useTransition=function(){return it.current.useTransition()};de.version="18.3.1";Pu.exports=de;var d=Pu.exports;const ut=_u(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=d,Lm=Symbol.for("react.element"),Mm=Symbol.for("react.fragment"),Fm=Object.prototype.hasOwnProperty,Im=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Am={key:!0,ref:!0,__self:!0,__source:!0};function Ou(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Fm.call(t,r)&&!Am.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Lm,type:e,key:o,ref:a,props:i,_owner:Im.current}}Hi.Fragment=Mm;Hi.jsx=Ou;Hi.jsxs=Ou;Ru.exports=Hi;var s=Ru.exports,Vo={},$u={exports:{}},jt={},Bu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,T){var E=z.length;z.push(T);e:for(;0<E;){var P=E-1>>>1,D=z[P];if(0<i(D,T))z[P]=T,z[E]=D,E=P;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var T=z[0],E=z.pop();if(E!==T){z[0]=E;e:for(var P=0,D=z.length,A=D>>>1;P<A;){var Z=2*(P+1)-1,ne=z[Z],re=Z+1,ue=z[re];if(0>i(ne,E))re<D&&0>i(ue,ne)?(z[P]=ue,z[re]=E,P=re):(z[P]=ne,z[Z]=E,P=Z);else if(re<D&&0>i(ue,E))z[P]=ue,z[re]=E,P=re;else break e}}return T}function i(z,T){var E=z.sortIndex-T.sortIndex;return E!==0?E:z.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],h=1,f=null,p=3,k=!1,y=!1,j=!1,R=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=z)r(u),T.sortIndex=T.expirationTime,t(c,T);else break;T=n(u)}}function S(z){if(j=!1,v(z),!y)if(n(c)!==null)y=!0,Q(_);else{var T=n(u);T!==null&&q(S,T.startTime-z)}}function _(z,T){y=!1,j&&(j=!1,x(g),g=-1),k=!0;var E=p;try{for(v(T),f=n(c);f!==null&&(!(f.expirationTime>T)||z&&!C());){var P=f.callback;if(typeof P=="function"){f.callback=null,p=f.priorityLevel;var D=P(f.expirationTime<=T);T=e.unstable_now(),typeof D=="function"?f.callback=D:f===n(c)&&r(c),v(T)}else r(c);f=n(c)}if(f!==null)var A=!0;else{var Z=n(u);Z!==null&&q(S,Z.startTime-T),A=!1}return A}finally{f=null,p=E,k=!1}}var M=!1,N=null,g=-1,b=5,w=-1;function C(){return!(e.unstable_now()-w<b)}function F(){if(N!==null){var z=e.unstable_now();w=z;var T=!0;try{T=N(!0,z)}finally{T?W():(M=!1,N=null)}}else M=!1}var W;if(typeof m=="function")W=function(){m(F)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,I=J.port2;J.port1.onmessage=F,W=function(){I.postMessage(null)}}else W=function(){R(F,0)};function Q(z){N=z,M||(M=!0,W())}function q(z,T){g=R(function(){z(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||k||(y=!0,Q(_))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var E=p;p=T;try{return z()}finally{p=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,T){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var E=p;p=z;try{return T()}finally{p=E}},e.unstable_scheduleCallback=function(z,T,E){var P=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?P+E:P):E=P,z){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=E+D,z={id:h++,callback:T,priorityLevel:z,startTime:E,expirationTime:D,sortIndex:-1},E>P?(z.sortIndex=E,t(u,z),n(c)===null&&z===n(u)&&(j?(x(g),g=-1):j=!0,q(S,E-P))):(z.sortIndex=D,t(c,z),y||k||(y=!0,Q(_))),z},e.unstable_shouldYield=C,e.unstable_wrapCallback=function(z){var T=p;return function(){var E=p;p=T;try{return z.apply(this,arguments)}finally{p=E}}}})(Uu);Bu.exports=Uu;var Dm=Bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om=d,wt=Dm;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wu=new Set,ls={};function Gn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(ls[e]=t,e=0;e<t.length;e++)Wu.add(t[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=Object.prototype.hasOwnProperty,$m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jl={},Zl={};function Bm(e){return Go.call(Zl,e)?!0:Go.call(Jl,e)?!1:$m.test(e)?Zl[e]=!0:(Jl[e]=!0,!1)}function Um(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wm(e,t,n,r){if(t===null||typeof t>"u"||Um(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ot(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ve[t]=new ot(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ya=/[\-:]([a-z])/g;function Va(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ya,Va);Ve[t]=new ot(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ya,Va);Ve[t]=new ot(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ya,Va);Ve[t]=new ot(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new ot(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ga(e,t,n,r){var i=Ve.hasOwnProperty(t)?Ve[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wm(t,n,i,r)&&(n=null),r||i===null?Bm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var cn=Om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Is=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),Xa=Symbol.for("react.strict_mode"),Xo=Symbol.for("react.profiler"),Qu=Symbol.for("react.provider"),qu=Symbol.for("react.context"),Ka=Symbol.for("react.forward_ref"),Ko=Symbol.for("react.suspense"),Jo=Symbol.for("react.suspense_list"),Ja=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),Hu=Symbol.for("react.offscreen"),ec=Symbol.iterator;function Ir(e){return e===null||typeof e!="object"?null:(e=ec&&e[ec]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,po;function Vr(e){if(po===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);po=t&&t[1]||""}return`
`+po+e}var ho=!1;function xo(e,t){if(!e||ho)return"";ho=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{ho=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vr(e):""}function Qm(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=xo(e.type,!1),e;case 11:return e=xo(e.type.render,!1),e;case 1:return e=xo(e.type,!0),e;default:return""}}function Zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case tr:return"Portal";case Xo:return"Profiler";case Xa:return"StrictMode";case Ko:return"Suspense";case Jo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qu:return(e.displayName||"Context")+".Consumer";case Qu:return(e._context.displayName||"Context")+".Provider";case Ka:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ja:return t=e.displayName||null,t!==null?t:Zo(e.type)||"Memo";case pn:t=e._payload,e=e._init;try{return Zo(e(t))}catch{}}return null}function qm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zo(t);case 8:return t===Xa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hm(e){var t=Yu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function As(e){e._valueTracker||(e._valueTracker=Hm(e))}function Vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ea(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gu(e,t){t=t.checked,t!=null&&Ga(e,"checked",t,!1)}function ta(e,t){Gu(e,t);var n=Rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?na(e,t.type,n):t.hasOwnProperty("defaultValue")&&na(e,t.type,Rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function na(e,t,n){(t!=="number"||bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gr=Array.isArray;function pr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(Gr(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rn(n)}}function Xu(e,t){var n=Rn(t.value),r=Rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function sc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ku(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ku(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ds,Ju=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ds=Ds||document.createElement("div"),Ds.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ds.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ym=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(e){Ym.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jr[t]=Jr[e]})});function Zu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jr.hasOwnProperty(e)&&Jr[e]?(""+t).trim():t+"px"}function ed(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vm=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(e,t){if(t){if(Vm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function oa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var aa=null;function Za(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var la=null,hr=null,xr=null;function ic(e){if(e=Rs(e)){if(typeof la!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Ki(t),la(e.stateNode,e.type,t))}}function td(e){hr?xr?xr.push(e):xr=[e]:hr=e}function nd(){if(hr){var e=hr,t=xr;if(xr=hr=null,ic(e),t)for(e=0;e<t.length;e++)ic(t[e])}}function rd(e,t){return e(t)}function sd(){}var go=!1;function id(e,t,n){if(go)return e(t,n);go=!0;try{return rd(e,t,n)}finally{go=!1,(hr!==null||xr!==null)&&(sd(),nd())}}function us(e,t){var n=e.stateNode;if(n===null)return null;var r=Ki(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var ca=!1;if(rn)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){ca=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{ca=!1}function Gm(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Zr=!1,wi=null,ji=!1,ua=null,Xm={onError:function(e){Zr=!0,wi=e}};function Km(e,t,n,r,i,o,a,l,c){Zr=!1,wi=null,Gm.apply(Xm,arguments)}function Jm(e,t,n,r,i,o,a,l,c){if(Km.apply(this,arguments),Zr){if(Zr){var u=wi;Zr=!1,wi=null}else throw Error(U(198));ji||(ji=!0,ua=u)}}function Xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function od(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oc(e){if(Xn(e)!==e)throw Error(U(188))}function Zm(e){var t=e.alternate;if(!t){if(t=Xn(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return oc(i),e;if(o===r)return oc(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function ad(e){return e=Zm(e),e!==null?ld(e):null}function ld(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ld(e);if(t!==null)return t;e=e.sibling}return null}var cd=wt.unstable_scheduleCallback,ac=wt.unstable_cancelCallback,e0=wt.unstable_shouldYield,t0=wt.unstable_requestPaint,ze=wt.unstable_now,n0=wt.unstable_getCurrentPriorityLevel,el=wt.unstable_ImmediatePriority,ud=wt.unstable_UserBlockingPriority,ki=wt.unstable_NormalPriority,r0=wt.unstable_LowPriority,dd=wt.unstable_IdlePriority,Yi=null,Vt=null;function s0(e){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Yi,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:a0,i0=Math.log,o0=Math.LN2;function a0(e){return e>>>=0,e===0?32:31-(i0(e)/o0|0)|0}var Os=64,$s=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ni(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Xr(l):(o&=a,o!==0&&(r=Xr(o)))}else a=n&~i,a!==0?r=Xr(a):o!==0&&(r=Xr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-It(t),i=1<<n,r|=e[n],t&=~i;return r}function l0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-It(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=l0(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fd(){var e=Os;return Os<<=1,!(Os&4194240)&&(Os=64),e}function vo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Es(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=n}function u0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-It(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function tl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-It(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function md(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pd,nl,hd,xd,gd,fa=!1,Bs=[],wn=null,jn=null,kn=null,ds=new Map,fs=new Map,gn=[],d0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lc(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":ds.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fs.delete(t.pointerId)}}function Dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Rs(t),t!==null&&nl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function f0(e,t,n,r,i){switch(t){case"focusin":return wn=Dr(wn,e,t,n,r,i),!0;case"dragenter":return jn=Dr(jn,e,t,n,r,i),!0;case"mouseover":return kn=Dr(kn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ds.set(o,Dr(ds.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,fs.set(o,Dr(fs.get(o)||null,e,t,n,r,i)),!0}return!1}function vd(e){var t=Dn(e.target);if(t!==null){var n=Xn(t);if(n!==null){if(t=n.tag,t===13){if(t=od(n),t!==null){e.blockedOn=t,gd(e.priority,function(){hd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ma(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);aa=r,n.target.dispatchEvent(r),aa=null}else return t=Rs(n),t!==null&&nl(t),e.blockedOn=n,!1;t.shift()}return!0}function cc(e,t,n){ai(e)&&n.delete(t)}function m0(){fa=!1,wn!==null&&ai(wn)&&(wn=null),jn!==null&&ai(jn)&&(jn=null),kn!==null&&ai(kn)&&(kn=null),ds.forEach(cc),fs.forEach(cc)}function Or(e,t){e.blockedOn===t&&(e.blockedOn=null,fa||(fa=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,m0)))}function ms(e){function t(i){return Or(i,e)}if(0<Bs.length){Or(Bs[0],e);for(var n=1;n<Bs.length;n++){var r=Bs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&Or(wn,e),jn!==null&&Or(jn,e),kn!==null&&Or(kn,e),ds.forEach(t),fs.forEach(t),n=0;n<gn.length;n++)r=gn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gn.length&&(n=gn[0],n.blockedOn===null);)vd(n),n.blockedOn===null&&gn.shift()}var gr=cn.ReactCurrentBatchConfig,Si=!0;function p0(e,t,n,r){var i=ye,o=gr.transition;gr.transition=null;try{ye=1,rl(e,t,n,r)}finally{ye=i,gr.transition=o}}function h0(e,t,n,r){var i=ye,o=gr.transition;gr.transition=null;try{ye=4,rl(e,t,n,r)}finally{ye=i,gr.transition=o}}function rl(e,t,n,r){if(Si){var i=ma(e,t,n,r);if(i===null)_o(e,t,r,Ci,n),lc(e,r);else if(f0(i,e,t,n,r))r.stopPropagation();else if(lc(e,r),t&4&&-1<d0.indexOf(e)){for(;i!==null;){var o=Rs(i);if(o!==null&&pd(o),o=ma(e,t,n,r),o===null&&_o(e,t,r,Ci,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else _o(e,t,r,null,n)}}var Ci=null;function ma(e,t,n,r){if(Ci=null,e=Za(r),e=Dn(e),e!==null)if(t=Xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=od(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ci=e,null}function yd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n0()){case el:return 1;case ud:return 4;case ki:case r0:return 16;case dd:return 536870912;default:return 16}default:return 16}}var yn=null,sl=null,li=null;function bd(){if(li)return li;var e,t=sl,n=t.length,r,i="value"in yn?yn.value:yn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return li=i.slice(e,1<r?1-r:void 0)}function ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Us(){return!0}function uc(){return!1}function kt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Us:uc,this.isPropagationStopped=uc,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Us)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Us)},persist:function(){},isPersistent:Us}),t}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=kt(Rr),_s=Re({},Rr,{view:0,detail:0}),x0=kt(_s),yo,bo,$r,Vi=Re({},_s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(yo=e.screenX-$r.screenX,bo=e.screenY-$r.screenY):bo=yo=0,$r=e),yo)},movementY:function(e){return"movementY"in e?e.movementY:bo}}),dc=kt(Vi),g0=Re({},Vi,{dataTransfer:0}),v0=kt(g0),y0=Re({},_s,{relatedTarget:0}),wo=kt(y0),b0=Re({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),w0=kt(b0),j0=Re({},Rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k0=kt(j0),N0=Re({},Rr,{data:0}),fc=kt(N0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E0[e])?!!t[e]:!1}function ol(){return _0}var R0=Re({},_s,{key:function(e){if(e.key){var t=S0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?C0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P0=kt(R0),T0=Re({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mc=kt(T0),z0=Re({},_s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),L0=kt(z0),M0=Re({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=kt(M0),I0=Re({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),A0=kt(I0),D0=[9,13,27,32],al=rn&&"CompositionEvent"in window,es=null;rn&&"documentMode"in document&&(es=document.documentMode);var O0=rn&&"TextEvent"in window&&!es,wd=rn&&(!al||es&&8<es&&11>=es),pc=String.fromCharCode(32),hc=!1;function jd(e,t){switch(e){case"keyup":return D0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function $0(e,t){switch(e){case"compositionend":return kd(t);case"keypress":return t.which!==32?null:(hc=!0,pc);case"textInput":return e=t.data,e===pc&&hc?null:e;default:return null}}function B0(e,t){if(rr)return e==="compositionend"||!al&&jd(e,t)?(e=bd(),li=sl=yn=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wd&&t.locale!=="ko"?null:t.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!U0[e.type]:t==="textarea"}function Nd(e,t,n,r){td(r),t=Ei(t,"onChange"),0<t.length&&(n=new il("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ts=null,ps=null;function W0(e){Fd(e,0)}function Gi(e){var t=or(e);if(Vu(t))return e}function Q0(e,t){if(e==="change")return t}var Sd=!1;if(rn){var jo;if(rn){var ko="oninput"in document;if(!ko){var gc=document.createElement("div");gc.setAttribute("oninput","return;"),ko=typeof gc.oninput=="function"}jo=ko}else jo=!1;Sd=jo&&(!document.documentMode||9<document.documentMode)}function vc(){ts&&(ts.detachEvent("onpropertychange",Cd),ps=ts=null)}function Cd(e){if(e.propertyName==="value"&&Gi(ps)){var t=[];Nd(t,ps,e,Za(e)),id(W0,t)}}function q0(e,t,n){e==="focusin"?(vc(),ts=t,ps=n,ts.attachEvent("onpropertychange",Cd)):e==="focusout"&&vc()}function H0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gi(ps)}function Y0(e,t){if(e==="click")return Gi(t)}function V0(e,t){if(e==="input"||e==="change")return Gi(t)}function G0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:G0;function hs(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Go.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bc(e,t){var n=yc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yc(n)}}function Ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _d(){for(var e=window,t=bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bi(e.document)}return t}function ll(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function X0(e){var t=_d(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ed(n.ownerDocument.documentElement,n)){if(r!==null&&ll(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=bc(n,o);var a=bc(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var K0=rn&&"documentMode"in document&&11>=document.documentMode,sr=null,pa=null,ns=null,ha=!1;function wc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ha||sr==null||sr!==bi(r)||(r=sr,"selectionStart"in r&&ll(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ns&&hs(ns,r)||(ns=r,r=Ei(pa,"onSelect"),0<r.length&&(t=new il("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=sr)))}function Ws(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionend:Ws("Transition","TransitionEnd")},No={},Rd={};rn&&(Rd=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Xi(e){if(No[e])return No[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rd)return No[e]=t[n];return e}var Pd=Xi("animationend"),Td=Xi("animationiteration"),zd=Xi("animationstart"),Ld=Xi("transitionend"),Md=new Map,jc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){Md.set(e,t),Gn(t,[e])}for(var So=0;So<jc.length;So++){var Co=jc[So],J0=Co.toLowerCase(),Z0=Co[0].toUpperCase()+Co.slice(1);Tn(J0,"on"+Z0)}Tn(Pd,"onAnimationEnd");Tn(Td,"onAnimationIteration");Tn(zd,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(Ld,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ep=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function kc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jm(r,t,void 0,e),e.currentTarget=null}function Fd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;kc(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;kc(i,l,u),o=c}}}if(ji)throw e=ua,ji=!1,ua=null,e}function je(e,t){var n=t[ba];n===void 0&&(n=t[ba]=new Set);var r=e+"__bubble";n.has(r)||(Id(t,e,2,!1),n.add(r))}function Eo(e,t,n){var r=0;t&&(r|=4),Id(n,e,r,t)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function xs(e){if(!e[Qs]){e[Qs]=!0,Wu.forEach(function(n){n!=="selectionchange"&&(ep.has(n)||Eo(n,!1,e),Eo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qs]||(t[Qs]=!0,Eo("selectionchange",!1,t))}}function Id(e,t,n,r){switch(yd(t)){case 1:var i=p0;break;case 4:i=h0;break;default:i=rl}n=i.bind(null,t,n,e),i=void 0,!ca||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _o(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Dn(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}id(function(){var u=o,h=Za(n),f=[];e:{var p=Md.get(e);if(p!==void 0){var k=il,y=e;switch(e){case"keypress":if(ci(n)===0)break e;case"keydown":case"keyup":k=P0;break;case"focusin":y="focus",k=wo;break;case"focusout":y="blur",k=wo;break;case"beforeblur":case"afterblur":k=wo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=v0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=L0;break;case Pd:case Td:case zd:k=w0;break;case Ld:k=F0;break;case"scroll":k=x0;break;case"wheel":k=A0;break;case"copy":case"cut":case"paste":k=k0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=mc}var j=(t&4)!==0,R=!j&&e==="scroll",x=j?p!==null?p+"Capture":null:p;j=[];for(var m=u,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,x!==null&&(S=us(m,x),S!=null&&j.push(gs(m,S,v)))),R)break;m=m.return}0<j.length&&(p=new k(p,y,null,n,h),f.push({event:p,listeners:j}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",p&&n!==aa&&(y=n.relatedTarget||n.fromElement)&&(Dn(y)||y[sn]))break e;if((k||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,k?(y=n.relatedTarget||n.toElement,k=u,y=y?Dn(y):null,y!==null&&(R=Xn(y),y!==R||y.tag!==5&&y.tag!==6)&&(y=null)):(k=null,y=u),k!==y)){if(j=dc,S="onMouseLeave",x="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(j=mc,S="onPointerLeave",x="onPointerEnter",m="pointer"),R=k==null?p:or(k),v=y==null?p:or(y),p=new j(S,m+"leave",k,n,h),p.target=R,p.relatedTarget=v,S=null,Dn(h)===u&&(j=new j(x,m+"enter",y,n,h),j.target=v,j.relatedTarget=R,S=j),R=S,k&&y)t:{for(j=k,x=y,m=0,v=j;v;v=Zn(v))m++;for(v=0,S=x;S;S=Zn(S))v++;for(;0<m-v;)j=Zn(j),m--;for(;0<v-m;)x=Zn(x),v--;for(;m--;){if(j===x||x!==null&&j===x.alternate)break t;j=Zn(j),x=Zn(x)}j=null}else j=null;k!==null&&Nc(f,p,k,j,!1),y!==null&&R!==null&&Nc(f,R,y,j,!0)}}e:{if(p=u?or(u):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var _=Q0;else if(xc(p))if(Sd)_=V0;else{_=H0;var M=q0}else(k=p.nodeName)&&k.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(_=Y0);if(_&&(_=_(e,u))){Nd(f,_,n,h);break e}M&&M(e,p,u),e==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&na(p,"number",p.value)}switch(M=u?or(u):window,e){case"focusin":(xc(M)||M.contentEditable==="true")&&(sr=M,pa=u,ns=null);break;case"focusout":ns=pa=sr=null;break;case"mousedown":ha=!0;break;case"contextmenu":case"mouseup":case"dragend":ha=!1,wc(f,n,h);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":wc(f,n,h)}var N;if(al)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else rr?jd(e,n)&&(g="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(wd&&n.locale!=="ko"&&(rr||g!=="onCompositionStart"?g==="onCompositionEnd"&&rr&&(N=bd()):(yn=h,sl="value"in yn?yn.value:yn.textContent,rr=!0)),M=Ei(u,g),0<M.length&&(g=new fc(g,e,null,n,h),f.push({event:g,listeners:M}),N?g.data=N:(N=kd(n),N!==null&&(g.data=N)))),(N=O0?$0(e,n):B0(e,n))&&(u=Ei(u,"onBeforeInput"),0<u.length&&(h=new fc("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=N))}Fd(f,t)})}function gs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ei(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=us(e,n),o!=null&&r.unshift(gs(e,o,i)),o=us(e,t),o!=null&&r.push(gs(e,o,i))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nc(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=us(n,o),c!=null&&a.unshift(gs(n,c,l))):i||(c=us(n,o),c!=null&&a.push(gs(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var tp=/\r\n?/g,np=/\u0000|\uFFFD/g;function Sc(e){return(typeof e=="string"?e:""+e).replace(tp,`
`).replace(np,"")}function qs(e,t,n){if(t=Sc(t),Sc(e)!==t&&n)throw Error(U(425))}function _i(){}var xa=null,ga=null;function va(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ya=typeof setTimeout=="function"?setTimeout:void 0,rp=typeof clearTimeout=="function"?clearTimeout:void 0,Cc=typeof Promise=="function"?Promise:void 0,sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Cc<"u"?function(e){return Cc.resolve(null).then(e).catch(ip)}:ya;function ip(e){setTimeout(function(){throw e})}function Ro(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ms(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ms(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ec(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Pr,vs="__reactProps$"+Pr,sn="__reactContainer$"+Pr,ba="__reactEvents$"+Pr,op="__reactListeners$"+Pr,ap="__reactHandles$"+Pr;function Dn(e){var t=e[Ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sn]||n[Ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ec(e);e!==null;){if(n=e[Ht])return n;e=Ec(e)}return t}e=n,n=e.parentNode}return null}function Rs(e){return e=e[Ht]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Ki(e){return e[vs]||null}var wa=[],ar=-1;function zn(e){return{current:e}}function ke(e){0>ar||(e.current=wa[ar],wa[ar]=null,ar--)}function be(e,t){ar++,wa[ar]=e.current,e.current=t}var Pn={},et=zn(Pn),mt=zn(!1),Qn=Pn;function jr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pt(e){return e=e.childContextTypes,e!=null}function Ri(){ke(mt),ke(et)}function _c(e,t,n){if(et.current!==Pn)throw Error(U(168));be(et,t),be(mt,n)}function Ad(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,qm(e)||"Unknown",i));return Re({},n,r)}function Pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Qn=et.current,be(et,e),be(mt,mt.current),!0}function Rc(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=Ad(e,t,Qn),r.__reactInternalMemoizedMergedChildContext=e,ke(mt),ke(et),be(et,e)):ke(mt),be(mt,n)}var Jt=null,Ji=!1,Po=!1;function Dd(e){Jt===null?Jt=[e]:Jt.push(e)}function lp(e){Ji=!0,Dd(e)}function Ln(){if(!Po&&Jt!==null){Po=!0;var e=0,t=ye;try{var n=Jt;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Jt=null,Ji=!1}catch(i){throw Jt!==null&&(Jt=Jt.slice(e+1)),cd(el,Ln),i}finally{ye=t,Po=!1}}return null}var lr=[],cr=0,Ti=null,zi=0,Nt=[],St=0,qn=null,Zt=1,en="";function In(e,t){lr[cr++]=zi,lr[cr++]=Ti,Ti=e,zi=t}function Od(e,t,n){Nt[St++]=Zt,Nt[St++]=en,Nt[St++]=qn,qn=e;var r=Zt;e=en;var i=32-It(r)-1;r&=~(1<<i),n+=1;var o=32-It(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Zt=1<<32-It(t)+i|n<<i|r,en=o+e}else Zt=1<<o|n<<i|r,en=e}function cl(e){e.return!==null&&(In(e,1),Od(e,1,0))}function ul(e){for(;e===Ti;)Ti=lr[--cr],lr[cr]=null,zi=lr[--cr],lr[cr]=null;for(;e===qn;)qn=Nt[--St],Nt[St]=null,en=Nt[--St],Nt[St]=null,Zt=Nt[--St],Nt[St]=null}var bt=null,yt=null,Se=!1,Mt=null;function $d(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,bt=e,yt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,bt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qn!==null?{id:Zt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,bt=e,yt=null,!0):!1;default:return!1}}function ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ka(e){if(Se){var t=yt;if(t){var n=t;if(!Pc(e,t)){if(ja(e))throw Error(U(418));t=Nn(n.nextSibling);var r=bt;t&&Pc(e,t)?$d(r,n):(e.flags=e.flags&-4097|2,Se=!1,bt=e)}}else{if(ja(e))throw Error(U(418));e.flags=e.flags&-4097|2,Se=!1,bt=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bt=e}function Hs(e){if(e!==bt)return!1;if(!Se)return Tc(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!va(e.type,e.memoizedProps)),t&&(t=yt)){if(ja(e))throw Bd(),Error(U(418));for(;t;)$d(e,t),t=Nn(t.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=bt?Nn(e.stateNode.nextSibling):null;return!0}function Bd(){for(var e=yt;e;)e=Nn(e.nextSibling)}function kr(){yt=bt=null,Se=!1}function dl(e){Mt===null?Mt=[e]:Mt.push(e)}var cp=cn.ReactCurrentBatchConfig;function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function Ys(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zc(e){var t=e._init;return t(e._payload)}function Ud(e){function t(x,m){if(e){var v=x.deletions;v===null?(x.deletions=[m],x.flags|=16):v.push(m)}}function n(x,m){if(!e)return null;for(;m!==null;)t(x,m),m=m.sibling;return null}function r(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function i(x,m){return x=_n(x,m),x.index=0,x.sibling=null,x}function o(x,m,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<m?(x.flags|=2,m):v):(x.flags|=2,m)):(x.flags|=1048576,m)}function a(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,m,v,S){return m===null||m.tag!==6?(m=Ao(v,x.mode,S),m.return=x,m):(m=i(m,v),m.return=x,m)}function c(x,m,v,S){var _=v.type;return _===nr?h(x,m,v.props.children,S,v.key):m!==null&&(m.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===pn&&zc(_)===m.type)?(S=i(m,v.props),S.ref=Br(x,m,v),S.return=x,S):(S=xi(v.type,v.key,v.props,null,x.mode,S),S.ref=Br(x,m,v),S.return=x,S)}function u(x,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Do(v,x.mode,S),m.return=x,m):(m=i(m,v.children||[]),m.return=x,m)}function h(x,m,v,S,_){return m===null||m.tag!==7?(m=Un(v,x.mode,S,_),m.return=x,m):(m=i(m,v),m.return=x,m)}function f(x,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ao(""+m,x.mode,v),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Is:return v=xi(m.type,m.key,m.props,null,x.mode,v),v.ref=Br(x,null,m),v.return=x,v;case tr:return m=Do(m,x.mode,v),m.return=x,m;case pn:var S=m._init;return f(x,S(m._payload),v)}if(Gr(m)||Ir(m))return m=Un(m,x.mode,v,null),m.return=x,m;Ys(x,m)}return null}function p(x,m,v,S){var _=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:l(x,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Is:return v.key===_?c(x,m,v,S):null;case tr:return v.key===_?u(x,m,v,S):null;case pn:return _=v._init,p(x,m,_(v._payload),S)}if(Gr(v)||Ir(v))return _!==null?null:h(x,m,v,S,null);Ys(x,v)}return null}function k(x,m,v,S,_){if(typeof S=="string"&&S!==""||typeof S=="number")return x=x.get(v)||null,l(m,x,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Is:return x=x.get(S.key===null?v:S.key)||null,c(m,x,S,_);case tr:return x=x.get(S.key===null?v:S.key)||null,u(m,x,S,_);case pn:var M=S._init;return k(x,m,v,M(S._payload),_)}if(Gr(S)||Ir(S))return x=x.get(v)||null,h(m,x,S,_,null);Ys(m,S)}return null}function y(x,m,v,S){for(var _=null,M=null,N=m,g=m=0,b=null;N!==null&&g<v.length;g++){N.index>g?(b=N,N=null):b=N.sibling;var w=p(x,N,v[g],S);if(w===null){N===null&&(N=b);break}e&&N&&w.alternate===null&&t(x,N),m=o(w,m,g),M===null?_=w:M.sibling=w,M=w,N=b}if(g===v.length)return n(x,N),Se&&In(x,g),_;if(N===null){for(;g<v.length;g++)N=f(x,v[g],S),N!==null&&(m=o(N,m,g),M===null?_=N:M.sibling=N,M=N);return Se&&In(x,g),_}for(N=r(x,N);g<v.length;g++)b=k(N,x,g,v[g],S),b!==null&&(e&&b.alternate!==null&&N.delete(b.key===null?g:b.key),m=o(b,m,g),M===null?_=b:M.sibling=b,M=b);return e&&N.forEach(function(C){return t(x,C)}),Se&&In(x,g),_}function j(x,m,v,S){var _=Ir(v);if(typeof _!="function")throw Error(U(150));if(v=_.call(v),v==null)throw Error(U(151));for(var M=_=null,N=m,g=m=0,b=null,w=v.next();N!==null&&!w.done;g++,w=v.next()){N.index>g?(b=N,N=null):b=N.sibling;var C=p(x,N,w.value,S);if(C===null){N===null&&(N=b);break}e&&N&&C.alternate===null&&t(x,N),m=o(C,m,g),M===null?_=C:M.sibling=C,M=C,N=b}if(w.done)return n(x,N),Se&&In(x,g),_;if(N===null){for(;!w.done;g++,w=v.next())w=f(x,w.value,S),w!==null&&(m=o(w,m,g),M===null?_=w:M.sibling=w,M=w);return Se&&In(x,g),_}for(N=r(x,N);!w.done;g++,w=v.next())w=k(N,x,g,w.value,S),w!==null&&(e&&w.alternate!==null&&N.delete(w.key===null?g:w.key),m=o(w,m,g),M===null?_=w:M.sibling=w,M=w);return e&&N.forEach(function(F){return t(x,F)}),Se&&In(x,g),_}function R(x,m,v,S){if(typeof v=="object"&&v!==null&&v.type===nr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Is:e:{for(var _=v.key,M=m;M!==null;){if(M.key===_){if(_=v.type,_===nr){if(M.tag===7){n(x,M.sibling),m=i(M,v.props.children),m.return=x,x=m;break e}}else if(M.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===pn&&zc(_)===M.type){n(x,M.sibling),m=i(M,v.props),m.ref=Br(x,M,v),m.return=x,x=m;break e}n(x,M);break}else t(x,M);M=M.sibling}v.type===nr?(m=Un(v.props.children,x.mode,S,v.key),m.return=x,x=m):(S=xi(v.type,v.key,v.props,null,x.mode,S),S.ref=Br(x,m,v),S.return=x,x=S)}return a(x);case tr:e:{for(M=v.key;m!==null;){if(m.key===M)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(x,m.sibling),m=i(m,v.children||[]),m.return=x,x=m;break e}else{n(x,m);break}else t(x,m);m=m.sibling}m=Do(v,x.mode,S),m.return=x,x=m}return a(x);case pn:return M=v._init,R(x,m,M(v._payload),S)}if(Gr(v))return y(x,m,v,S);if(Ir(v))return j(x,m,v,S);Ys(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(x,m.sibling),m=i(m,v),m.return=x,x=m):(n(x,m),m=Ao(v,x.mode,S),m.return=x,x=m),a(x)):n(x,m)}return R}var Nr=Ud(!0),Wd=Ud(!1),Li=zn(null),Mi=null,ur=null,fl=null;function ml(){fl=ur=Mi=null}function pl(e){var t=Li.current;ke(Li),e._currentValue=t}function Na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vr(e,t){Mi=e,fl=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(fl!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Mi===null)throw Error(U(308));ur=e,Mi.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var On=null;function hl(e){On===null?On=[e]:On.push(e)}function Qd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hl(t)):(n.next=i.next,i.next=n),t.interleaved=n,on(e,r)}function on(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var hn=!1;function xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,on(e,n)}return i=r.interleaved,i===null?(t.next=t,hl(r)):(t.next=i.next,i.next=t),r.interleaved=t,on(e,n)}function ui(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tl(e,n)}}function Lc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fi(e,t,n,r){var i=e.updateQueue;hn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;a=0,h=u=c=null,l=o;do{var p=l.lane,k=l.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,j=l;switch(p=t,k=n,j.tag){case 1:if(y=j.payload,typeof y=="function"){f=y.call(k,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,p=typeof y=="function"?y.call(k,f,p):y,p==null)break e;f=Re({},f,p);break e;case 2:hn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else k={eventTime:k,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=k,c=f):h=h.next=k,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(h===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yn|=a,e.lanes=a,e.memoizedState=f}}function Mc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Ps={},Gt=zn(Ps),ys=zn(Ps),bs=zn(Ps);function $n(e){if(e===Ps)throw Error(U(174));return e}function gl(e,t){switch(be(bs,t),be(ys,e),be(Gt,Ps),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sa(t,e)}ke(Gt),be(Gt,t)}function Sr(){ke(Gt),ke(ys),ke(bs)}function Hd(e){$n(bs.current);var t=$n(Gt.current),n=sa(t,e.type);t!==n&&(be(ys,e),be(Gt,n))}function vl(e){ys.current===e&&(ke(Gt),ke(ys))}var Ee=zn(0);function Ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var To=[];function yl(){for(var e=0;e<To.length;e++)To[e]._workInProgressVersionPrimary=null;To.length=0}var di=cn.ReactCurrentDispatcher,zo=cn.ReactCurrentBatchConfig,Hn=0,_e=null,Ae=null,Be=null,Ai=!1,rs=!1,ws=0,up=0;function Ke(){throw Error(U(321))}function bl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function wl(e,t,n,r,i,o){if(Hn=o,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,di.current=e===null||e.memoizedState===null?pp:hp,e=n(r,i),rs){o=0;do{if(rs=!1,ws=0,25<=o)throw Error(U(301));o+=1,Be=Ae=null,t.updateQueue=null,di.current=xp,e=n(r,i)}while(rs)}if(di.current=Di,t=Ae!==null&&Ae.next!==null,Hn=0,Be=Ae=_e=null,Ai=!1,t)throw Error(U(300));return e}function jl(){var e=ws!==0;return ws=0,e}function qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?_e.memoizedState=Be=e:Be=Be.next=e,Be}function Rt(){if(Ae===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Be===null?_e.memoizedState:Be.next;if(t!==null)Be=t,Ae=e;else{if(e===null)throw Error(U(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Be===null?_e.memoizedState=Be=e:Be=Be.next=e}return Be}function js(e,t){return typeof t=="function"?t(e):t}function Lo(e){var t=Rt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=Ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var h=u.lane;if((Hn&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,_e.lanes|=h,Yn|=h}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Dt(r,t.memoizedState)||(ft=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,_e.lanes|=o,Yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Mo(e){var t=Rt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Dt(o,t.memoizedState)||(ft=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Yd(){}function Vd(e,t){var n=_e,r=Rt(),i=t(),o=!Dt(r.memoizedState,i);if(o&&(r.memoizedState=i,ft=!0),r=r.queue,kl(Kd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,ks(9,Xd.bind(null,n,r,i,t),void 0,null),Ue===null)throw Error(U(349));Hn&30||Gd(n,t,i)}return i}function Gd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xd(e,t,n,r){t.value=n,t.getSnapshot=r,Jd(t)&&Zd(e)}function Kd(e,t,n){return n(function(){Jd(t)&&Zd(e)})}function Jd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function Zd(e){var t=on(e,1);t!==null&&At(t,e,1,-1)}function Fc(e){var t=qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:e},t.queue=e,e=e.dispatch=mp.bind(null,_e,e),[t.memoizedState,e]}function ks(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ef(){return Rt().memoizedState}function fi(e,t,n,r){var i=qt();_e.flags|=e,i.memoizedState=ks(1|t,n,void 0,r===void 0?null:r)}function Zi(e,t,n,r){var i=Rt();r=r===void 0?null:r;var o=void 0;if(Ae!==null){var a=Ae.memoizedState;if(o=a.destroy,r!==null&&bl(r,a.deps)){i.memoizedState=ks(t,n,o,r);return}}_e.flags|=e,i.memoizedState=ks(1|t,n,o,r)}function Ic(e,t){return fi(8390656,8,e,t)}function kl(e,t){return Zi(2048,8,e,t)}function tf(e,t){return Zi(4,2,e,t)}function nf(e,t){return Zi(4,4,e,t)}function rf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sf(e,t,n){return n=n!=null?n.concat([e]):null,Zi(4,4,rf.bind(null,t,e),n)}function Nl(){}function of(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function af(e,t){var n=Rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lf(e,t,n){return Hn&21?(Dt(n,t)||(n=fd(),_e.lanes|=n,Yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=n)}function dp(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=zo.transition;zo.transition={};try{e(!1),t()}finally{ye=n,zo.transition=r}}function cf(){return Rt().memoizedState}function fp(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uf(e))df(t,n);else if(n=Qd(e,t,n,r),n!==null){var i=st();At(n,e,r,i),ff(n,t,r)}}function mp(e,t,n){var r=En(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uf(e))df(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Dt(l,a)){var c=t.interleaved;c===null?(i.next=i,hl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Qd(e,t,i,r),n!==null&&(i=st(),At(n,e,r,i),ff(n,t,r))}}function uf(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function df(e,t){rs=Ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ff(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tl(e,n)}}var Di={readContext:_t,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},pp={readContext:_t,useCallback:function(e,t){return qt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:Ic,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fi(4194308,4,rf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fi(4194308,4,e,t)},useInsertionEffect:function(e,t){return fi(4,2,e,t)},useMemo:function(e,t){var n=qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fp.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=qt();return e={current:e},t.memoizedState=e},useState:Fc,useDebugValue:Nl,useDeferredValue:function(e){return qt().memoizedState=e},useTransition:function(){var e=Fc(!1),t=e[0];return e=dp.bind(null,e[1]),qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,i=qt();if(Se){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),Ue===null)throw Error(U(349));Hn&30||Gd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ic(Kd.bind(null,r,o,e),[e]),r.flags|=2048,ks(9,Xd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=qt(),t=Ue.identifierPrefix;if(Se){var n=en,r=Zt;n=(r&~(1<<32-It(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ws++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=up++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hp={readContext:_t,useCallback:of,useContext:_t,useEffect:kl,useImperativeHandle:sf,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:af,useReducer:Lo,useRef:ef,useState:function(){return Lo(js)},useDebugValue:Nl,useDeferredValue:function(e){var t=Rt();return lf(t,Ae.memoizedState,e)},useTransition:function(){var e=Lo(js)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Yd,useSyncExternalStore:Vd,useId:cf,unstable_isNewReconciler:!1},xp={readContext:_t,useCallback:of,useContext:_t,useEffect:kl,useImperativeHandle:sf,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:af,useReducer:Mo,useRef:ef,useState:function(){return Mo(js)},useDebugValue:Nl,useDeferredValue:function(e){var t=Rt();return Ae===null?t.memoizedState=e:lf(t,Ae.memoizedState,e)},useTransition:function(){var e=Mo(js)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Yd,useSyncExternalStore:Vd,useId:cf,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Sa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var eo={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=st(),i=En(e),o=tn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Sn(e,o,i),t!==null&&(At(t,e,i,r),ui(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=st(),i=En(e),o=tn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Sn(e,o,i),t!==null&&(At(t,e,i,r),ui(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=st(),r=En(e),i=tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sn(e,i,r),t!==null&&(At(t,e,r,n),ui(t,e,r))}};function Ac(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!hs(n,r)||!hs(i,o):!0}function mf(e,t,n){var r=!1,i=Pn,o=t.contextType;return typeof o=="object"&&o!==null?o=_t(o):(i=pt(t)?Qn:et.current,r=t.contextTypes,o=(r=r!=null)?jr(e,i):Pn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Dc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function Ca(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},xl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=_t(o):(o=pt(t)?Qn:et.current,i.context=jr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Sa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&eo.enqueueReplaceState(i,i.state,null),Fi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,t){try{var n="",r=t;do n+=Qm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Fo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ea(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gp=typeof WeakMap=="function"?WeakMap:Map;function pf(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$i||($i=!0,Aa=r),Ea(e,t)},n}function hf(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ea(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ea(e,t),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Oc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Tp.bind(null,e,t,n),t.then(e,e))}function $c(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tn(-1,1),t.tag=2,Sn(n,t,1))),n.lanes|=1),e)}var vp=cn.ReactCurrentOwner,ft=!1;function rt(e,t,n,r){t.child=e===null?Wd(t,null,n,r):Nr(t,e.child,n,r)}function Uc(e,t,n,r,i){n=n.render;var o=t.ref;return vr(t,i),r=wl(e,t,n,r,o,i),n=jl(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(Se&&n&&cl(t),t.flags|=1,rt(e,t,r,i),t.child)}function Wc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,xf(e,t,o,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:hs,n(a,r)&&e.ref===t.ref)return an(e,t,i)}return t.flags|=1,e=_n(o,r),e.ref=t.ref,e.return=t,t.child=e}function xf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(hs(o,r)&&e.ref===t.ref)if(ft=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,an(e,t,i)}return _a(e,t,n,r,i)}function gf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(fr,vt),vt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(fr,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,be(fr,vt),vt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,be(fr,vt),vt|=r;return rt(e,t,i,n),t.child}function vf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _a(e,t,n,r,i){var o=pt(n)?Qn:et.current;return o=jr(t,o),vr(t,i),n=wl(e,t,n,r,o,i),r=jl(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(Se&&r&&cl(t),t.flags|=1,rt(e,t,n,i),t.child)}function Qc(e,t,n,r,i){if(pt(n)){var o=!0;Pi(t)}else o=!1;if(vr(t,i),t.stateNode===null)mi(e,t),mf(t,n,r),Ca(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=pt(n)?Qn:et.current,u=jr(t,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Dc(t,a,r,u),hn=!1;var p=t.memoizedState;a.state=p,Fi(t,r,a,i),c=t.memoizedState,l!==r||p!==c||mt.current||hn?(typeof h=="function"&&(Sa(t,n,h,r),c=t.memoizedState),(l=hn||Ac(t,n,l,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:zt(t.type,l),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=_t(c):(c=pt(n)?Qn:et.current,c=jr(t,c));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==c)&&Dc(t,a,r,c),hn=!1,p=t.memoizedState,a.state=p,Fi(t,r,a,i);var y=t.memoizedState;l!==f||p!==y||mt.current||hn?(typeof k=="function"&&(Sa(t,n,k,r),y=t.memoizedState),(u=hn||Ac(t,n,u,r,p,y,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ra(e,t,n,r,o,i)}function Ra(e,t,n,r,i,o){vf(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Rc(t,n,!1),an(e,t,o);r=t.stateNode,vp.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Nr(t,e.child,null,o),t.child=Nr(t,null,l,o)):rt(e,t,l,o),t.memoizedState=r.state,i&&Rc(t,n,!0),t.child}function yf(e){var t=e.stateNode;t.pendingContext?_c(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_c(e,t.context,!1),gl(e,t.containerInfo)}function qc(e,t,n,r,i){return kr(),dl(i),t.flags|=256,rt(e,t,n,r),t.child}var Pa={dehydrated:null,treeContext:null,retryLane:0};function Ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function bf(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Ee,i&1),e===null)return ka(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ro(a,r,0,null),e=Un(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ta(n),t.memoizedState=Pa,e):Sl(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return yp(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=_n(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=_n(l,o):(o=Un(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Ta(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Pa,r}return o=e.child,e=o.sibling,r=_n(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sl(e,t){return t=ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vs(e,t,n,r){return r!==null&&dl(r),Nr(t,e.child,null,n),e=Sl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yp(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Fo(Error(U(422))),Vs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ro({mode:"visible",children:r.children},i,0,null),o=Un(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Nr(t,e.child,null,a),t.child.memoizedState=Ta(a),t.memoizedState=Pa,o);if(!(t.mode&1))return Vs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(U(419)),r=Fo(o,r,void 0),Vs(e,t,a,r)}if(l=(a&e.childLanes)!==0,ft||l){if(r=Ue,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,on(e,i),At(r,e,i,-1))}return Tl(),r=Fo(Error(U(421))),Vs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,yt=Nn(i.nextSibling),bt=t,Se=!0,Mt=null,e!==null&&(Nt[St++]=Zt,Nt[St++]=en,Nt[St++]=qn,Zt=e.id,en=e.overflow,qn=t),t=Sl(t,r.children),t.flags|=4096,t)}function Hc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Na(e.return,t,n)}function Io(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(rt(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hc(e,n,t);else if(e.tag===19)Hc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ii(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Io(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Io(t,!0,n,null,o);break;case"together":Io(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bp(e,t,n){switch(t.tag){case 3:yf(t),kr();break;case 5:Hd(t);break;case 1:pt(t.type)&&Pi(t);break;case 4:gl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;be(Li,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?bf(e,t,n):(be(Ee,Ee.current&1),e=an(e,t,n),e!==null?e.sibling:null);be(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,gf(e,t,n)}return an(e,t,n)}var jf,za,kf,Nf;jf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};za=function(){};kf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(Gt.current);var o=null;switch(n){case"input":i=ea(e,i),r=ea(e,r),o=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),o=[];break;case"textarea":i=ra(e,i),r=ra(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_i)}ia(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ls.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ls.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&je("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Nf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wp(e,t,n){var r=t.pendingProps;switch(ul(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return pt(t.type)&&Ri(),Je(t),null;case 3:return r=t.stateNode,Sr(),ke(mt),ke(et),yl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mt!==null&&($a(Mt),Mt=null))),za(e,t),Je(t),null;case 5:vl(t);var i=$n(bs.current);if(n=t.type,e!==null&&t.stateNode!=null)kf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return Je(t),null}if(e=$n(Gt.current),Hs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ht]=t,r[vs]=o,e=(t.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<Kr.length;i++)je(Kr[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":tc(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":rc(r,o),je("invalid",r)}ia(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&qs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&qs(r.textContent,l,e),i=["children",""+l]):ls.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&je("scroll",r)}switch(n){case"input":As(r),nc(r,o,!0);break;case"textarea":As(r),sc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=_i)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ku(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ht]=t,e[vs]=r,jf(e,t,!1,!1),t.stateNode=e;e:{switch(a=oa(n,r),n){case"dialog":je("cancel",e),je("close",e),i=r;break;case"iframe":case"object":case"embed":je("load",e),i=r;break;case"video":case"audio":for(i=0;i<Kr.length;i++)je(Kr[i],e);i=r;break;case"source":je("error",e),i=r;break;case"img":case"image":case"link":je("error",e),je("load",e),i=r;break;case"details":je("toggle",e),i=r;break;case"input":tc(e,r),i=ea(e,r),je("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),je("invalid",e);break;case"textarea":rc(e,r),i=ra(e,r),je("invalid",e);break;default:i=r}ia(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?ed(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ju(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&cs(e,c):typeof c=="number"&&cs(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ls.hasOwnProperty(o)?c!=null&&o==="onScroll"&&je("scroll",e):c!=null&&Ga(e,o,c,a))}switch(n){case"input":As(e),nc(e,r,!1);break;case"textarea":As(e),sc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?pr(e,!!r.multiple,o,!1):r.defaultValue!=null&&pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Je(t),null;case 6:if(e&&t.stateNode!=null)Nf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=$n(bs.current),$n(Gt.current),Hs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ht]=t,(o=r.nodeValue!==n)&&(e=bt,e!==null))switch(e.tag){case 3:qs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=t,t.stateNode=r}return Je(t),null;case 13:if(ke(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&yt!==null&&t.mode&1&&!(t.flags&128))Bd(),kr(),t.flags|=98560,o=!1;else if(o=Hs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[Ht]=t}else kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Je(t),o=!1}else Mt!==null&&($a(Mt),Mt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?De===0&&(De=3):Tl())),t.updateQueue!==null&&(t.flags|=4),Je(t),null);case 4:return Sr(),za(e,t),e===null&&xs(t.stateNode.containerInfo),Je(t),null;case 10:return pl(t.type._context),Je(t),null;case 17:return pt(t.type)&&Ri(),Je(t),null;case 19:if(ke(Ee),o=t.memoizedState,o===null)return Je(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Ur(o,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ii(e),a!==null){for(t.flags|=128,Ur(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>Er&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ii(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Se)return Je(t),null}else 2*ze()-o.renderingStartTime>Er&&n!==1073741824&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=Ee.current,be(Ee,r?n&1|2:n&1),t):(Je(t),null);case 22:case 23:return Pl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?vt&1073741824&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function jp(e,t){switch(ul(t),t.tag){case 1:return pt(t.type)&&Ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),ke(mt),ke(et),yl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vl(t),null;case 13:if(ke(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Ee),null;case 4:return Sr(),null;case 10:return pl(t.type._context),null;case 22:case 23:return Pl(),null;case 24:return null;default:return null}}var Gs=!1,Ze=!1,kp=typeof WeakSet=="function"?WeakSet:Set,K=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function La(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var Yc=!1;function Np(e,t){if(xa=Si,e=_d(),ll(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,h=0,f=e,p=null;t:for(;;){for(var k;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(k=f.firstChild)!==null;)p=f,f=k;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++h===r&&(c=a),(k=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=k}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ga={focusedElem:e,selectionRange:n},Si=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,R=y.memoizedState,x=t.stateNode,m=x.getSnapshotBeforeUpdate(t.elementType===t.type?j:zt(t.type,j),R);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(S){Pe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return y=Yc,Yc=!1,y}function ss(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&La(t,n,o)}i=i.next}while(i!==r)}}function to(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ma(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sf(e){var t=e.alternate;t!==null&&(e.alternate=null,Sf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[vs],delete t[ba],delete t[op],delete t[ap])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cf(e){return e.tag===5||e.tag===3||e.tag===4}function Vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_i));else if(r!==4&&(e=e.child,e!==null))for(Fa(e,t,n),e=e.sibling;e!==null;)Fa(e,t,n),e=e.sibling}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}var qe=null,Lt=!1;function un(e,t,n){for(n=n.child;n!==null;)Ef(e,t,n),n=n.sibling}function Ef(e,t,n){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Yi,n)}catch{}switch(n.tag){case 5:Ze||dr(n,t);case 6:var r=qe,i=Lt;qe=null,un(e,t,n),qe=r,Lt=i,qe!==null&&(Lt?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Lt?(e=qe,n=n.stateNode,e.nodeType===8?Ro(e.parentNode,n):e.nodeType===1&&Ro(e,n),ms(e)):Ro(qe,n.stateNode));break;case 4:r=qe,i=Lt,qe=n.stateNode.containerInfo,Lt=!0,un(e,t,n),qe=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&La(n,t,a),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!Ze&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,t,l)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,un(e,t,n),Ze=r):un(e,t,n);break;default:un(e,t,n)}}function Gc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kp),t.forEach(function(r){var i=Lp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Lt=!1;break e;case 3:qe=l.stateNode.containerInfo,Lt=!0;break e;case 4:qe=l.stateNode.containerInfo,Lt=!0;break e}l=l.return}if(qe===null)throw Error(U(160));Ef(o,a,i),qe=null,Lt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_f(t,e),t=t.sibling}function _f(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Ut(e),r&4){try{ss(3,e,e.return),to(3,e)}catch(j){Pe(e,e.return,j)}try{ss(5,e,e.return)}catch(j){Pe(e,e.return,j)}}break;case 1:Tt(t,e),Ut(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(Tt(t,e),Ut(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var i=e.stateNode;try{cs(i,"")}catch(j){Pe(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Gu(i,o),oa(l,a);var u=oa(l,o);for(a=0;a<c.length;a+=2){var h=c[a],f=c[a+1];h==="style"?ed(i,f):h==="dangerouslySetInnerHTML"?Ju(i,f):h==="children"?cs(i,f):Ga(i,h,f,u)}switch(l){case"input":ta(i,o);break;case"textarea":Xu(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?pr(i,!!o.multiple,k,!1):p!==!!o.multiple&&(o.defaultValue!=null?pr(i,!!o.multiple,o.defaultValue,!0):pr(i,!!o.multiple,o.multiple?[]:"",!1))}i[vs]=o}catch(j){Pe(e,e.return,j)}}break;case 6:if(Tt(t,e),Ut(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){Pe(e,e.return,j)}}break;case 3:if(Tt(t,e),Ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ms(t.containerInfo)}catch(j){Pe(e,e.return,j)}break;case 4:Tt(t,e),Ut(e);break;case 13:Tt(t,e),Ut(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(_l=ze())),r&4&&Gc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Ze=(u=Ze)||h,Tt(t,e),Ze=u):Tt(t,e),Ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(K=e,h=e.child;h!==null;){for(f=K=h;K!==null;){switch(p=K,k=p.child,p.tag){case 0:case 11:case 14:case 15:ss(4,p,p.return);break;case 1:dr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){Pe(r,n,j)}}break;case 5:dr(p,p.return);break;case 22:if(p.memoizedState!==null){Kc(f);continue}}k!==null?(k.return=p,K=k):Kc(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Zu("display",a))}catch(j){Pe(e,e.return,j)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(j){Pe(e,e.return,j)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Tt(t,e),Ut(e),r&4&&Gc(e);break;case 21:break;default:Tt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cf(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(cs(i,""),r.flags&=-33);var o=Vc(e);Ia(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Vc(e);Fa(e,l,a);break;default:throw Error(U(161))}}catch(c){Pe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sp(e,t,n){K=e,Rf(e)}function Rf(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Gs;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ze;l=Gs;var u=Ze;if(Gs=a,(Ze=c)&&!u)for(K=i;K!==null;)a=K,c=a.child,a.tag===22&&a.memoizedState!==null?Jc(i):c!==null?(c.return=a,K=c):Jc(i);for(;o!==null;)K=o,Rf(o),o=o.sibling;K=i,Gs=l,Ze=u}Xc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):Xc(e)}}function Xc(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ze||to(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Mc(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ms(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Ze||t.flags&512&&Ma(t)}catch(p){Pe(t,t.return,p)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Kc(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Jc(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{to(4,t)}catch(c){Pe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Pe(t,i,c)}}var o=t.return;try{Ma(t)}catch(c){Pe(t,o,c)}break;case 5:var a=t.return;try{Ma(t)}catch(c){Pe(t,a,c)}}}catch(c){Pe(t,t.return,c)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var Cp=Math.ceil,Oi=cn.ReactCurrentDispatcher,Cl=cn.ReactCurrentOwner,Et=cn.ReactCurrentBatchConfig,he=0,Ue=null,Me=null,Ye=0,vt=0,fr=zn(0),De=0,Ns=null,Yn=0,no=0,El=0,is=null,dt=null,_l=0,Er=1/0,Kt=null,$i=!1,Aa=null,Cn=null,Xs=!1,bn=null,Bi=0,os=0,Da=null,pi=-1,hi=0;function st(){return he&6?ze():pi!==-1?pi:pi=ze()}function En(e){return e.mode&1?he&2&&Ye!==0?Ye&-Ye:cp.transition!==null?(hi===0&&(hi=fd()),hi):(e=ye,e!==0||(e=window.event,e=e===void 0?16:yd(e.type)),e):1}function At(e,t,n,r){if(50<os)throw os=0,Da=null,Error(U(185));Es(e,n,r),(!(he&2)||e!==Ue)&&(e===Ue&&(!(he&2)&&(no|=n),De===4&&vn(e,Ye)),ht(e,r),n===1&&he===0&&!(t.mode&1)&&(Er=ze()+500,Ji&&Ln()))}function ht(e,t){var n=e.callbackNode;c0(e,t);var r=Ni(e,e===Ue?Ye:0);if(r===0)n!==null&&ac(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ac(n),t===1)e.tag===0?lp(Zc.bind(null,e)):Dd(Zc.bind(null,e)),sp(function(){!(he&6)&&Ln()}),n=null;else{switch(md(r)){case 1:n=el;break;case 4:n=ud;break;case 16:n=ki;break;case 536870912:n=dd;break;default:n=ki}n=Af(n,Pf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pf(e,t){if(pi=-1,hi=0,he&6)throw Error(U(327));var n=e.callbackNode;if(yr()&&e.callbackNode!==n)return null;var r=Ni(e,e===Ue?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ui(e,r);else{t=r;var i=he;he|=2;var o=zf();(Ue!==e||Ye!==t)&&(Kt=null,Er=ze()+500,Bn(e,t));do try{Rp();break}catch(l){Tf(e,l)}while(1);ml(),Oi.current=o,he=i,Me!==null?t=0:(Ue=null,Ye=0,t=De)}if(t!==0){if(t===2&&(i=da(e),i!==0&&(r=i,t=Oa(e,i))),t===1)throw n=Ns,Bn(e,0),vn(e,r),ht(e,ze()),n;if(t===6)vn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ep(i)&&(t=Ui(e,r),t===2&&(o=da(e),o!==0&&(r=o,t=Oa(e,o))),t===1))throw n=Ns,Bn(e,0),vn(e,r),ht(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:An(e,dt,Kt);break;case 3:if(vn(e,r),(r&130023424)===r&&(t=_l+500-ze(),10<t)){if(Ni(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){st(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ya(An.bind(null,e,dt,Kt),t);break}An(e,dt,Kt);break;case 4:if(vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-It(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cp(r/1960))-r,10<r){e.timeoutHandle=ya(An.bind(null,e,dt,Kt),r);break}An(e,dt,Kt);break;case 5:An(e,dt,Kt);break;default:throw Error(U(329))}}}return ht(e,ze()),e.callbackNode===n?Pf.bind(null,e):null}function Oa(e,t){var n=is;return e.current.memoizedState.isDehydrated&&(Bn(e,t).flags|=256),e=Ui(e,t),e!==2&&(t=dt,dt=n,t!==null&&$a(t)),e}function $a(e){dt===null?dt=e:dt.push.apply(dt,e)}function Ep(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~El,t&=~no,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-It(t),r=1<<n;e[n]=-1,t&=~r}}function Zc(e){if(he&6)throw Error(U(327));yr();var t=Ni(e,0);if(!(t&1))return ht(e,ze()),null;var n=Ui(e,t);if(e.tag!==0&&n===2){var r=da(e);r!==0&&(t=r,n=Oa(e,r))}if(n===1)throw n=Ns,Bn(e,0),vn(e,t),ht(e,ze()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,dt,Kt),ht(e,ze()),null}function Rl(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(Er=ze()+500,Ji&&Ln())}}function Vn(e){bn!==null&&bn.tag===0&&!(he&6)&&yr();var t=he;he|=1;var n=Et.transition,r=ye;try{if(Et.transition=null,ye=1,e)return e()}finally{ye=r,Et.transition=n,he=t,!(he&6)&&Ln()}}function Pl(){vt=fr.current,ke(fr)}function Bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rp(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(ul(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ri();break;case 3:Sr(),ke(mt),ke(et),yl();break;case 5:vl(r);break;case 4:Sr();break;case 13:ke(Ee);break;case 19:ke(Ee);break;case 10:pl(r.type._context);break;case 22:case 23:Pl()}n=n.return}if(Ue=e,Me=e=_n(e.current,null),Ye=vt=t,De=0,Ns=null,El=no=Yn=0,dt=is=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}On=null}return e}function Tf(e,t){do{var n=Me;try{if(ml(),di.current=Di,Ai){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ai=!1}if(Hn=0,Be=Ae=_e=null,rs=!1,ws=0,Cl.current=null,n===null||n.return===null){De=1,Ns=t,Me=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=Ye,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=$c(a);if(k!==null){k.flags&=-257,Bc(k,a,l,o,t),k.mode&1&&Oc(o,u,t),t=k,c=u;var y=t.updateQueue;if(y===null){var j=new Set;j.add(c),t.updateQueue=j}else y.add(c);break e}else{if(!(t&1)){Oc(o,u,t),Tl();break e}c=Error(U(426))}}else if(Se&&l.mode&1){var R=$c(a);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Bc(R,a,l,o,t),dl(Cr(c,l));break e}}o=c=Cr(c,l),De!==4&&(De=2),is===null?is=[o]:is.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var x=pf(o,c,t);Lc(o,x);break e;case 1:l=c;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Cn===null||!Cn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=hf(o,l,t);Lc(o,S);break e}}o=o.return}while(o!==null)}Mf(n)}catch(_){t=_,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(1)}function zf(){var e=Oi.current;return Oi.current=Di,e===null?Di:e}function Tl(){(De===0||De===3||De===2)&&(De=4),Ue===null||!(Yn&268435455)&&!(no&268435455)||vn(Ue,Ye)}function Ui(e,t){var n=he;he|=2;var r=zf();(Ue!==e||Ye!==t)&&(Kt=null,Bn(e,t));do try{_p();break}catch(i){Tf(e,i)}while(1);if(ml(),he=n,Oi.current=r,Me!==null)throw Error(U(261));return Ue=null,Ye=0,De}function _p(){for(;Me!==null;)Lf(Me)}function Rp(){for(;Me!==null&&!e0();)Lf(Me)}function Lf(e){var t=If(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?Mf(e):Me=t,Cl.current=null}function Mf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jp(n,t),n!==null){n.flags&=32767,Me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Me=null;return}}else if(n=wp(n,t,vt),n!==null){Me=n;return}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);De===0&&(De=5)}function An(e,t,n){var r=ye,i=Et.transition;try{Et.transition=null,ye=1,Pp(e,t,n,r)}finally{Et.transition=i,ye=r}return null}function Pp(e,t,n,r){do yr();while(bn!==null);if(he&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(u0(e,o),e===Ue&&(Me=Ue=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xs||(Xs=!0,Af(ki,function(){return yr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Et.transition,Et.transition=null;var a=ye;ye=1;var l=he;he|=4,Cl.current=null,Np(e,n),_f(n,e),X0(ga),Si=!!xa,ga=xa=null,e.current=n,Sp(n),t0(),he=l,ye=a,Et.transition=o}else e.current=n;if(Xs&&(Xs=!1,bn=e,Bi=i),o=e.pendingLanes,o===0&&(Cn=null),s0(n.stateNode),ht(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($i)throw $i=!1,e=Aa,Aa=null,e;return Bi&1&&e.tag!==0&&yr(),o=e.pendingLanes,o&1?e===Da?os++:(os=0,Da=e):os=0,Ln(),null}function yr(){if(bn!==null){var e=md(Bi),t=Et.transition,n=ye;try{if(Et.transition=null,ye=16>e?16:e,bn===null)var r=!1;else{if(e=bn,bn=null,Bi=0,he&6)throw Error(U(331));var i=he;for(he|=4,K=e.current;K!==null;){var o=K,a=o.child;if(K.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(K=u;K!==null;){var h=K;switch(h.tag){case 0:case 11:case 15:ss(8,h,o)}var f=h.child;if(f!==null)f.return=h,K=f;else for(;K!==null;){h=K;var p=h.sibling,k=h.return;if(Sf(h),h===u){K=null;break}if(p!==null){p.return=k,K=p;break}K=k}}}var y=o.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var R=j.sibling;j.sibling=null,j=R}while(j!==null)}}K=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,K=a;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ss(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,K=x;break e}K=o.return}}var m=e.current;for(K=m;K!==null;){a=K;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,K=v;else e:for(a=m;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:to(9,l)}}catch(_){Pe(l,l.return,_)}if(l===a){K=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,K=S;break e}K=l.return}}if(he=i,Ln(),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Yi,e)}catch{}r=!0}return r}finally{ye=n,Et.transition=t}}return!1}function eu(e,t,n){t=Cr(n,t),t=pf(e,t,1),e=Sn(e,t,1),t=st(),e!==null&&(Es(e,1,t),ht(e,t))}function Pe(e,t,n){if(e.tag===3)eu(e,e,n);else for(;t!==null;){if(t.tag===3){eu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=Cr(n,e),e=hf(t,e,1),t=Sn(t,e,1),e=st(),t!==null&&(Es(t,1,e),ht(t,e));break}}t=t.return}}function Tp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=st(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(Ye&n)===n&&(De===4||De===3&&(Ye&130023424)===Ye&&500>ze()-_l?Bn(e,0):El|=n),ht(e,t)}function Ff(e,t){t===0&&(e.mode&1?(t=$s,$s<<=1,!($s&130023424)&&($s=4194304)):t=1);var n=st();e=on(e,t),e!==null&&(Es(e,t,n),ht(e,n))}function zp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ff(e,n)}function Lp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),Ff(e,n)}var If;If=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||mt.current)ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ft=!1,bp(e,t,n);ft=!!(e.flags&131072)}else ft=!1,Se&&t.flags&1048576&&Od(t,zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;mi(e,t),e=t.pendingProps;var i=jr(t,et.current);vr(t,n),i=wl(null,t,r,e,i,n);var o=jl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(r)?(o=!0,Pi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xl(t),i.updater=eo,t.stateNode=i,i._reactInternals=t,Ca(t,r,e,n),t=Ra(null,t,r,!0,o,n)):(t.tag=0,Se&&o&&cl(t),rt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(mi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Fp(r),e=zt(r,e),i){case 0:t=_a(null,t,r,e,n);break e;case 1:t=Qc(null,t,r,e,n);break e;case 11:t=Uc(null,t,r,e,n);break e;case 14:t=Wc(null,t,r,zt(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),_a(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Qc(e,t,r,i,n);case 3:e:{if(yf(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,qd(e,t),Fi(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Cr(Error(U(423)),t),t=qc(e,t,r,n,i);break e}else if(r!==i){i=Cr(Error(U(424)),t),t=qc(e,t,r,n,i);break e}else for(yt=Nn(t.stateNode.containerInfo.firstChild),bt=t,Se=!0,Mt=null,n=Wd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kr(),r===i){t=an(e,t,n);break e}rt(e,t,r,n)}t=t.child}return t;case 5:return Hd(t),e===null&&ka(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,va(r,i)?a=null:o!==null&&va(r,o)&&(t.flags|=32),vf(e,t),rt(e,t,a,n),t.child;case 6:return e===null&&ka(t),null;case 13:return bf(e,t,n);case 4:return gl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nr(t,null,r,n):rt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Uc(e,t,r,i,n);case 7:return rt(e,t,t.pendingProps,n),t.child;case 8:return rt(e,t,t.pendingProps.children,n),t.child;case 12:return rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,be(Li,r._currentValue),r._currentValue=a,o!==null)if(Dt(o.value,a)){if(o.children===i.children&&!mt.current){t=an(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=tn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Na(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(U(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Na(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}rt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,vr(t,n),i=_t(i),r=r(i),t.flags|=1,rt(e,t,r,n),t.child;case 14:return r=t.type,i=zt(r,t.pendingProps),i=zt(r.type,i),Wc(e,t,r,i,n);case 15:return xf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),mi(e,t),t.tag=1,pt(r)?(e=!0,Pi(t)):e=!1,vr(t,n),mf(t,r,i),Ca(t,r,i,n),Ra(null,t,r,!0,e,n);case 19:return wf(e,t,n);case 22:return gf(e,t,n)}throw Error(U(156,t.tag))};function Af(e,t){return cd(e,t)}function Mp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new Mp(e,t,n,r)}function zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fp(e){if(typeof e=="function")return zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ka)return 11;if(e===Ja)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xi(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")zl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case nr:return Un(n.children,i,o,t);case Xa:a=8,i|=8;break;case Xo:return e=Ct(12,n,t,i|2),e.elementType=Xo,e.lanes=o,e;case Ko:return e=Ct(13,n,t,i),e.elementType=Ko,e.lanes=o,e;case Jo:return e=Ct(19,n,t,i),e.elementType=Jo,e.lanes=o,e;case Hu:return ro(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qu:a=10;break e;case qu:a=9;break e;case Ka:a=11;break e;case Ja:a=14;break e;case pn:a=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=Ct(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Un(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function ro(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=Hu,e.lanes=n,e.stateNode={isHidden:!1},e}function Ao(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function Do(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ip(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vo(0),this.expirationTimes=vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ll(e,t,n,r,i,o,a,l,c){return e=new Ip(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(o),e}function Ap(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Df(e){if(!e)return Pn;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(pt(n))return Ad(e,n,t)}return t}function Of(e,t,n,r,i,o,a,l,c){return e=Ll(n,r,!0,e,i,o,a,l,c),e.context=Df(null),n=e.current,r=st(),i=En(n),o=tn(r,i),o.callback=t??null,Sn(n,o,i),e.current.lanes=i,Es(e,i,r),ht(e,r),e}function so(e,t,n,r){var i=t.current,o=st(),a=En(i);return n=Df(n),t.context===null?t.context=n:t.pendingContext=n,t=tn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sn(i,t,a),e!==null&&(At(e,i,a,o),ui(e,i,a)),a}function Wi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ml(e,t){tu(e,t),(e=e.alternate)&&tu(e,t)}function Dp(){return null}var $f=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fl(e){this._internalRoot=e}io.prototype.render=Fl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));so(e,t,null,null)};io.prototype.unmount=Fl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){so(null,e,null,null)}),t[sn]=null}};function io(e){this._internalRoot=e}io.prototype.unstable_scheduleHydration=function(e){if(e){var t=xd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gn.length&&t!==0&&t<gn[n].priority;n++);gn.splice(n,0,e),n===0&&vd(e)}};function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nu(){}function Op(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Wi(a);o.call(u)}}var a=Of(t,r,e,0,null,!1,!1,"",nu);return e._reactRootContainer=a,e[sn]=a.current,xs(e.nodeType===8?e.parentNode:e),Vn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Wi(c);l.call(u)}}var c=Ll(e,0,!1,null,null,!1,!1,"",nu);return e._reactRootContainer=c,e[sn]=c.current,xs(e.nodeType===8?e.parentNode:e),Vn(function(){so(t,c,n,r)}),c}function ao(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Wi(a);l.call(c)}}so(t,a,e,i)}else a=Op(n,t,e,i,r);return Wi(a)}pd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(tl(t,n|1),ht(t,ze()),!(he&6)&&(Er=ze()+500,Ln()))}break;case 13:Vn(function(){var r=on(e,1);if(r!==null){var i=st();At(r,e,1,i)}}),Ml(e,1)}};nl=function(e){if(e.tag===13){var t=on(e,134217728);if(t!==null){var n=st();At(t,e,134217728,n)}Ml(e,134217728)}};hd=function(e){if(e.tag===13){var t=En(e),n=on(e,t);if(n!==null){var r=st();At(n,e,t,r)}Ml(e,t)}};xd=function(){return ye};gd=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};la=function(e,t,n){switch(t){case"input":if(ta(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ki(r);if(!i)throw Error(U(90));Vu(r),ta(r,i)}}}break;case"textarea":Xu(e,n);break;case"select":t=n.value,t!=null&&pr(e,!!n.multiple,t,!1)}};rd=Rl;sd=Vn;var $p={usingClientEntryPoint:!1,Events:[Rs,or,Ki,td,nd,Rl]},Wr={findFiberByHostInstance:Dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bp={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ad(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||Dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{Yi=Ks.inject(Bp),Vt=Ks}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p;jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Il(t))throw Error(U(200));return Ap(e,t,null,n)};jt.createRoot=function(e,t){if(!Il(e))throw Error(U(299));var n=!1,r="",i=$f;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ll(e,1,!1,null,null,n,!1,r,i),e[sn]=t.current,xs(e.nodeType===8?e.parentNode:e),new Fl(t)};jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=ad(t),e=e===null?null:e.stateNode,e};jt.flushSync=function(e){return Vn(e)};jt.hydrate=function(e,t,n){if(!oo(t))throw Error(U(200));return ao(null,e,t,!0,n)};jt.hydrateRoot=function(e,t,n){if(!Il(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=$f;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Of(t,null,e,1,n??null,i,!1,o,a),e[sn]=t.current,xs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new io(t)};jt.render=function(e,t,n){if(!oo(t))throw Error(U(200));return ao(null,e,t,!1,n)};jt.unmountComponentAtNode=function(e){if(!oo(e))throw Error(U(40));return e._reactRootContainer?(Vn(function(){ao(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1};jt.unstable_batchedUpdates=Rl;jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!oo(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return ao(e,t,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function Bf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bf)}catch(e){console.error(e)}}Bf(),$u.exports=jt;var Up=$u.exports,ru=Up;Vo.createRoot=ru.createRoot,Vo.hydrateRoot=ru.hydrateRoot;const Wp="modulepreload",Qp=function(e){return"/"+e},su={},Uf=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Qp(o),o in su)return;su[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const f=i[h];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Wp,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};var iu="popstate";function qp(e={}){function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Ba("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ss(i)}return Yp(t,n,null,e)}function Ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ot(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hp(){return Math.random().toString(36).substring(2,10)}function ou(e,t){return{usr:e.state,key:e.key,idx:t}}function Ba(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Tr(t):t,state:n,key:t&&t.key||r||Hp()}}function Ss({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Tr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Yp(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l="POP",c=null,u=h();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function h(){return(a.state||{idx:null}).idx}function f(){l="POP";let R=h(),x=R==null?null:R-u;u=R,c&&c({action:l,location:j.location,delta:x})}function p(R,x){l="PUSH";let m=Ba(j.location,R,x);n&&n(m,R),u=h()+1;let v=ou(m,u),S=j.createHref(m);try{a.pushState(v,"",S)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(S)}o&&c&&c({action:l,location:j.location,delta:1})}function k(R,x){l="REPLACE";let m=Ba(j.location,R,x);n&&n(m,R),u=h();let v=ou(m,u),S=j.createHref(m);a.replaceState(v,"",S),o&&c&&c({action:l,location:j.location,delta:0})}function y(R){return Vp(R)}let j={get action(){return l},get location(){return e(i,a)},listen(R){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(iu,f),c=R,()=>{i.removeEventListener(iu,f),c=null}},createHref(R){return t(i,R)},createURL:y,encodeLocation(R){let x=y(R);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:k,go(R){return a.go(R)}};return j}function Vp(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Ss(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Wf(e,t,n="/"){return Gp(e,t,n,!1)}function Gp(e,t,n,r){let i=typeof t=="string"?Tr(t):t,o=ln(i.pathname||"/",n);if(o==null)return null;let a=Qf(e);Xp(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=ah(o);l=ih(a[c],u,r)}return l}function Qf(e,t=[],n=[],r=""){let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Ce(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let u=nn([r,c.relativePath]),h=n.concat(c);o.children&&o.children.length>0&&(Ce(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Qf(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:rh(u,o.index),routesMeta:h})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of qf(o.path))i(o,a,c)}),t}function qf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=qf(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Xp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:sh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Kp=/^:[\w-]+$/,Jp=3,Zp=2,eh=1,th=10,nh=-2,au=e=>e==="*";function rh(e,t){let n=e.split("/"),r=n.length;return n.some(au)&&(r+=nh),t&&(r+=Zp),n.filter(i=>!au(i)).reduce((i,o)=>i+(Kp.test(o)?Jp:o===""?eh:th),r)}function sh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ih(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",f=Qi({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),p=c.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Qi({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:nn([o,f.pathname]),pathnameBase:dh(nn([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=nn([o,f.pathnameBase]))}return a}function Qi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=oh(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,{paramName:h,isOptional:f},p)=>{if(h==="*"){let y=l[p]||"";a=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const k=l[p];return f&&!k?u[h]=void 0:u[h]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function oh(e,t=!1,n=!0){Ot(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ah(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ot(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ln(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function lh(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Tr(e):e;return{pathname:n?n.startsWith("/")?n:ch(n,t):t,search:fh(r),hash:mh(i)}}function ch(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Oo(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Al(e){let t=uh(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Dl(e,t,n,r=!1){let i;typeof e=="string"?i=Tr(e):(i={...e},Ce(!i.pathname||!i.pathname.includes("?"),Oo("?","pathname","search",i)),Ce(!i.pathname||!i.pathname.includes("#"),Oo("#","pathname","hash",i)),Ce(!i.search||!i.search.includes("#"),Oo("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let c=lh(i,l),u=a&&a!=="/"&&a.endsWith("/"),h=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}var nn=e=>e.join("/").replace(/\/\/+/g,"/"),dh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ph(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Hf=["POST","PUT","PATCH","DELETE"];new Set(Hf);var hh=["GET",...Hf];new Set(hh);var zr=d.createContext(null);zr.displayName="DataRouter";var lo=d.createContext(null);lo.displayName="DataRouterState";d.createContext(!1);var Yf=d.createContext({isTransitioning:!1});Yf.displayName="ViewTransition";var xh=d.createContext(new Map);xh.displayName="Fetchers";var gh=d.createContext(null);gh.displayName="Await";var $t=d.createContext(null);$t.displayName="Navigation";var Ts=d.createContext(null);Ts.displayName="Location";var Pt=d.createContext({outlet:null,matches:[],isDataRoute:!1});Pt.displayName="Route";var Ol=d.createContext(null);Ol.displayName="RouteError";function vh(e,{relative:t}={}){Ce(Lr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=d.useContext($t),{hash:i,pathname:o,search:a}=zs(e,{relative:t}),l=o;return n!=="/"&&(l=o==="/"?n:nn([n,o])),r.createHref({pathname:l,search:a,hash:i})}function Lr(){return d.useContext(Ts)!=null}function Bt(){return Ce(Lr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Ts).location}var Vf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Gf(e){d.useContext($t).static||d.useLayoutEffect(e)}function at(){let{isDataRoute:e}=d.useContext(Pt);return e?Mh():yh()}function yh(){Ce(Lr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(zr),{basename:t,navigator:n}=d.useContext($t),{matches:r}=d.useContext(Pt),{pathname:i}=Bt(),o=JSON.stringify(Al(r)),a=d.useRef(!1);return Gf(()=>{a.current=!0}),d.useCallback((c,u={})=>{if(Ot(a.current,Vf),!a.current)return;if(typeof c=="number"){n.go(c);return}let h=Dl(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:nn([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,o,i,e])}var bh=d.createContext(null);function wh(e){let t=d.useContext(Pt).outlet;return t&&d.createElement(bh.Provider,{value:e},t)}function jh(){let{matches:e}=d.useContext(Pt),t=e[e.length-1];return t?t.params:{}}function zs(e,{relative:t}={}){let{matches:n}=d.useContext(Pt),{pathname:r}=Bt(),i=JSON.stringify(Al(n));return d.useMemo(()=>Dl(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function kh(e,t){return Xf(e,t)}function Xf(e,t,n,r){var x;Ce(Lr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=d.useContext($t),{matches:o}=d.useContext(Pt),a=o[o.length-1],l=a?a.params:{},c=a?a.pathname:"/",u=a?a.pathnameBase:"/",h=a&&a.route;{let m=h&&h.path||"";Kf(c,!h||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let f=Bt(),p;if(t){let m=typeof t=="string"?Tr(t):t;Ce(u==="/"||((x=m.pathname)==null?void 0:x.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${m.pathname}" was given in the \`location\` prop.`),p=m}else p=f;let k=p.pathname||"/",y=k;if(u!=="/"){let m=u.replace(/^\//,"").split("/");y="/"+k.replace(/^\//,"").split("/").slice(m.length).join("/")}let j=Wf(e,{pathname:y});Ot(h||j!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),Ot(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=_h(j&&j.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:nn([u,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:nn([u,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,r);return t&&R?d.createElement(Ts.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},R):R}function Nh(){let e=Lh(),t=ph(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:o},"ErrorBoundary")," or"," ",d.createElement("code",{style:o},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),n?d.createElement("pre",{style:i},n):null,a)}var Sh=d.createElement(Nh,null),Ch=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(Pt.Provider,{value:this.props.routeContext},d.createElement(Ol.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Eh({routeContext:e,match:t,children:n}){let r=d.useContext(zr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(Pt.Provider,{value:e},n)}function _h(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=n==null?void 0:n.errors;if(o!=null){let c=i.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);Ce(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let a=!1,l=-1;if(n)for(let c=0;c<i.length;c++){let u=i[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(l=c),u.route.id){let{loaderData:h,errors:f}=n,p=u.route.loader&&!h.hasOwnProperty(u.route.id)&&(!f||f[u.route.id]===void 0);if(u.route.lazy||p){a=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((c,u,h)=>{let f,p=!1,k=null,y=null;n&&(f=o&&u.route.id?o[u.route.id]:void 0,k=u.route.errorElement||Sh,a&&(l<0&&h===0?(Kf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,y=null):l===h&&(p=!0,y=u.route.hydrateFallbackElement||null)));let j=t.concat(i.slice(0,h+1)),R=()=>{let x;return f?x=k:p?x=y:u.route.Component?x=d.createElement(u.route.Component,null):u.route.element?x=u.route.element:x=c,d.createElement(Eh,{match:u,routeContext:{outlet:c,matches:j,isDataRoute:n!=null},children:x})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?d.createElement(Ch,{location:n.location,revalidation:n.revalidation,component:k,error:f,children:R(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):R()},null)}function $l(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rh(e){let t=d.useContext(zr);return Ce(t,$l(e)),t}function Ph(e){let t=d.useContext(lo);return Ce(t,$l(e)),t}function Th(e){let t=d.useContext(Pt);return Ce(t,$l(e)),t}function Bl(e){let t=Th(e),n=t.matches[t.matches.length-1];return Ce(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function zh(){return Bl("useRouteId")}function Lh(){var r;let e=d.useContext(Ol),t=Ph("useRouteError"),n=Bl("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Mh(){let{router:e}=Rh("useNavigate"),t=Bl("useNavigate"),n=d.useRef(!1);return Gf(()=>{n.current=!0}),d.useCallback(async(i,o={})=>{Ot(n.current,Vf),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var lu={};function Kf(e,t,n){!t&&!lu[e]&&(lu[e]=!0,Ot(!1,n))}d.memo(Fh);function Fh({routes:e,future:t,state:n}){return Xf(e,void 0,n,t)}function Ih({to:e,replace:t,state:n,relative:r}){Ce(Lr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=d.useContext($t);Ot(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=d.useContext(Pt),{pathname:a}=Bt(),l=at(),c=Dl(e,Al(o),a,r==="path"),u=JSON.stringify(c);return d.useEffect(()=>{l(JSON.parse(u),{replace:t,state:n,relative:r})},[l,u,r,t,n]),null}function Ah(e){return wh(e.context)}function Qe(e){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dh({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){Ce(!Lr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:a,navigator:i,static:o,future:{}}),[a,i,o]);typeof n=="string"&&(n=Tr(n));let{pathname:c="/",search:u="",hash:h="",state:f=null,key:p="default"}=n,k=d.useMemo(()=>{let y=ln(c,a);return y==null?null:{location:{pathname:y,search:u,hash:h,state:f,key:p},navigationType:r}},[a,c,u,h,f,p,r]);return Ot(k!=null,`<Router basename="${a}"> is not able to match the URL "${c}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:d.createElement($t.Provider,{value:l},d.createElement(Ts.Provider,{children:t,value:k}))}function Oh({children:e,location:t}){return kh(Ua(e),t)}function Ua(e,t=[]){let n=[];return d.Children.forEach(e,(r,i)=>{if(!d.isValidElement(r))return;let o=[...t,i];if(r.type===d.Fragment){n.push.apply(n,Ua(r.props.children,o));return}Ce(r.type===Qe,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ua(r.props.children,o)),n.push(a)}),n}var gi="get",vi="application/x-www-form-urlencoded";function co(e){return e!=null&&typeof e.tagName=="string"}function $h(e){return co(e)&&e.tagName.toLowerCase()==="button"}function Bh(e){return co(e)&&e.tagName.toLowerCase()==="form"}function Uh(e){return co(e)&&e.tagName.toLowerCase()==="input"}function Wh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qh(e,t){return e.button===0&&(!t||t==="_self")&&!Wh(e)}var Js=null;function qh(){if(Js===null)try{new FormData(document.createElement("form"),0),Js=!1}catch{Js=!0}return Js}var Hh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $o(e){return e!=null&&!Hh.has(e)?(Ot(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vi}"`),null):e}function Yh(e,t){let n,r,i,o,a;if(Bh(e)){let l=e.getAttribute("action");r=l?ln(l,t):null,n=e.getAttribute("method")||gi,i=$o(e.getAttribute("enctype"))||vi,o=new FormData(e)}else if($h(e)||Uh(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(r=c?ln(c,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||gi,i=$o(e.getAttribute("formenctype"))||$o(l.getAttribute("enctype"))||vi,o=new FormData(l,e),!qh()){let{name:u,type:h,value:f}=e;if(h==="image"){let p=u?`${u}.`:"";o.append(`${p}x`,"0"),o.append(`${p}y`,"0")}else u&&o.append(u,f)}}else{if(co(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=gi,r=null,i=vi,a=e}return o&&i==="text/plain"&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ul(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vh(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&ln(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Gh(e,t){if(e.id in t)return t[e.id];try{let n=await Uf(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xh(e){return e!=null&&typeof e.page=="string"}function Kh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Jh(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let a=await Gh(o,n);return a.links?a.links():[]}return[]}));return nx(r.flat(1).filter(Kh).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function cu(e,t,n,r,i,o){let a=(c,u)=>n[u]?c.route.id!==n[u].route.id:!0,l=(c,u)=>{var h;return n[u].pathname!==c.pathname||((h=n[u].route.path)==null?void 0:h.endsWith("*"))&&n[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>a(c,u)||l(c,u)):o==="data"?t.filter((c,u)=>{var f;let h=r.routes[c.route.id];if(!h||!h.hasLoader)return!1;if(a(c,u)||l(c,u))return!0;if(c.route.shouldRevalidate){let p=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function Zh(e,t,{includeHydrateFallback:n}={}){return ex(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function ex(e){return[...new Set(e)]}function tx(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function nx(e,t){let n=new Set,r=new Set(t);return e.reduce((i,o)=>{if(t&&!Xh(o)&&o.as==="script"&&o.href&&r.has(o.href))return i;let l=JSON.stringify(tx(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function Jf(){let e=d.useContext(zr);return Ul(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function rx(){let e=d.useContext(lo);return Ul(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Wl=d.createContext(void 0);Wl.displayName="FrameworkContext";function Zf(){let e=d.useContext(Wl);return Ul(e,"You must render this element inside a <HydratedRouter> element"),e}function sx(e,t){let n=d.useContext(Wl),[r,i]=d.useState(!1),[o,a]=d.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:h,onTouchStart:f}=t,p=d.useRef(null);d.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let j=x=>{x.forEach(m=>{a(m.isIntersecting)})},R=new IntersectionObserver(j,{threshold:.5});return p.current&&R.observe(p.current),()=>{R.disconnect()}}},[e]),d.useEffect(()=>{if(r){let j=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(j)}}},[r]);let k=()=>{i(!0)},y=()=>{i(!1),a(!1)};return n?e!=="intent"?[o,p,{}]:[o,p,{onFocus:Qr(l,k),onBlur:Qr(c,y),onMouseEnter:Qr(u,k),onMouseLeave:Qr(h,y),onTouchStart:Qr(f,k)}]:[!1,p,{}]}function Qr(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ix({page:e,...t}){let{router:n}=Jf(),r=d.useMemo(()=>Wf(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?d.createElement(ax,{page:e,matches:r,...t}):null}function ox(e){let{manifest:t,routeModules:n}=Zf(),[r,i]=d.useState([]);return d.useEffect(()=>{let o=!1;return Jh(e,t,n).then(a=>{o||i(a)}),()=>{o=!0}},[e,t,n]),r}function ax({page:e,matches:t,...n}){let r=Bt(),{manifest:i,routeModules:o}=Zf(),{basename:a}=Jf(),{loaderData:l,matches:c}=rx(),u=d.useMemo(()=>cu(e,t,c,i,r,"data"),[e,t,c,i,r]),h=d.useMemo(()=>cu(e,t,c,i,r,"assets"),[e,t,c,i,r]),f=d.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let y=new Set,j=!1;if(t.forEach(x=>{var v;let m=i.routes[x.route.id];!m||!m.hasLoader||(!u.some(S=>S.route.id===x.route.id)&&x.route.id in l&&((v=o[x.route.id])!=null&&v.shouldRevalidate)||m.hasClientLoader?j=!0:y.add(x.route.id))}),y.size===0)return[];let R=Vh(e,a,"data");return j&&y.size>0&&R.searchParams.set("_routes",t.filter(x=>y.has(x.route.id)).map(x=>x.route.id).join(",")),[R.pathname+R.search]},[a,l,r,i,u,t,e,o]),p=d.useMemo(()=>Zh(h,i),[h,i]),k=ox(h);return d.createElement(d.Fragment,null,f.map(y=>d.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...n})),p.map(y=>d.createElement("link",{key:y,rel:"modulepreload",href:y,...n})),k.map(({key:y,link:j})=>d.createElement("link",{key:y,...j})))}function lx(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var em=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{em&&(window.__reactRouterVersion="7.7.1")}catch{}function cx({basename:e,children:t,window:n}){let r=d.useRef();r.current==null&&(r.current=qp({window:n,v5Compat:!0}));let i=r.current,[o,a]=d.useState({action:i.action,location:i.location}),l=d.useCallback(c=>{d.startTransition(()=>a(c))},[a]);return d.useLayoutEffect(()=>i.listen(l),[i,l]),d.createElement(Dh,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i})}var tm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nm=d.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:h,viewTransition:f,...p},k){let{basename:y}=d.useContext($t),j=typeof u=="string"&&tm.test(u),R,x=!1;if(typeof u=="string"&&j&&(R=u,em))try{let b=new URL(window.location.href),w=u.startsWith("//")?new URL(b.protocol+u):new URL(u),C=ln(w.pathname,y);w.origin===b.origin&&C!=null?u=C+w.search+w.hash:x=!0}catch{Ot(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=vh(u,{relative:i}),[v,S,_]=sx(r,p),M=mx(u,{replace:a,state:l,target:c,preventScrollReset:h,relative:i,viewTransition:f});function N(b){t&&t(b),b.defaultPrevented||M(b)}let g=d.createElement("a",{...p,..._,href:R||m,onClick:x||o?t:N,ref:lx(k,S),target:c,"data-discover":!j&&n==="render"?"true":void 0});return v&&!j?d.createElement(d.Fragment,null,g,d.createElement(ix,{page:m})):g});nm.displayName="Link";var ux=d.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:a,viewTransition:l,children:c,...u},h){let f=zs(a,{relative:u.relative}),p=Bt(),k=d.useContext(lo),{navigator:y,basename:j}=d.useContext($t),R=k!=null&&vx(f)&&l===!0,x=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,m=p.pathname,v=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;n||(m=m.toLowerCase(),v=v?v.toLowerCase():null,x=x.toLowerCase()),v&&j&&(v=ln(v,j)||v);const S=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let _=m===x||!i&&m.startsWith(x)&&m.charAt(S)==="/",M=v!=null&&(v===x||!i&&v.startsWith(x)&&v.charAt(x.length)==="/"),N={isActive:_,isPending:M,isTransitioning:R},g=_?t:void 0,b;typeof r=="function"?b=r(N):b=[r,_?"active":null,M?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let w=typeof o=="function"?o(N):o;return d.createElement(nm,{...u,"aria-current":g,className:b,ref:h,style:w,to:a,viewTransition:l},typeof c=="function"?c(N):c)});ux.displayName="NavLink";var dx=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:a=gi,action:l,onSubmit:c,relative:u,preventScrollReset:h,viewTransition:f,...p},k)=>{let y=xx(),j=gx(l,{relative:u}),R=a.toLowerCase()==="get"?"get":"post",x=typeof l=="string"&&tm.test(l),m=v=>{if(c&&c(v),v.defaultPrevented)return;v.preventDefault();let S=v.nativeEvent.submitter,_=(S==null?void 0:S.getAttribute("formmethod"))||a;y(S||v.currentTarget,{fetcherKey:t,method:_,navigate:n,replace:i,state:o,relative:u,preventScrollReset:h,viewTransition:f})};return d.createElement("form",{ref:k,method:R,action:j,onSubmit:r?c:m,...p,"data-discover":!x&&e==="render"?"true":void 0})});dx.displayName="Form";function fx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rm(e){let t=d.useContext(zr);return Ce(t,fx(e)),t}function mx(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:a}={}){let l=at(),c=Bt(),u=zs(e,{relative:o});return d.useCallback(h=>{if(Qh(h,t)){h.preventDefault();let f=n!==void 0?n:Ss(c)===Ss(u);l(e,{replace:f,state:r,preventScrollReset:i,relative:o,viewTransition:a})}},[c,l,u,n,r,t,e,i,o,a])}var px=0,hx=()=>`__${String(++px)}__`;function xx(){let{router:e}=rm("useSubmit"),{basename:t}=d.useContext($t),n=zh();return d.useCallback(async(r,i={})=>{let{action:o,method:a,encType:l,formData:c,body:u}=Yh(r,t);if(i.navigate===!1){let h=i.fetcherKey||hx();await e.fetch(h,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function gx(e,{relative:t}={}){let{basename:n}=d.useContext($t),r=d.useContext(Pt);Ce(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...zs(e||".",{relative:t})},a=Bt();if(e==null){o.search=a.search;let l=new URLSearchParams(o.search),c=l.getAll("index");if(c.some(h=>h==="")){l.delete("index"),c.filter(f=>f).forEach(f=>l.append("index",f));let h=l.toString();o.search=h?`?${h}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:nn([n,o.pathname])),Ss(o)}function vx(e,{relative:t}={}){let n=d.useContext(Yf);Ce(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=rm("useViewTransitionState"),i=zs(e,{relative:t});if(!n.isTransitioning)return!1;let o=ln(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=ln(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Qi(i.pathname,a)!=null||Qi(i.pathname,o)!=null}function yx({size:e=22,spinning:t=!1}){return s.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[s.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),s.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),s.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),s.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),s.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),s.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function bx(){const e=at(),{pathname:t}=Bt(),n=d.useRef({}),r=d.useRef(0),[i,o]=d.useState(!1),a=d.useRef({});d.useEffect(()=>{a.current={refresh:new Audio("/sounds/refresh.mp3"),tap:new Audio("/sounds/tap.mp3"),whoosh:new Audio("/sounds/whoosh.mp3")},Object.values(a.current).forEach(I=>{I.volume=.5})},[]);const l=I=>{const Q=a.current[I];Q&&(Q.currentTime=0,Q.play().catch(()=>{}))},c=I=>{if(navigator.vibrate)switch(I){case"light":navigator.vibrate(10);break;case"medium":navigator.vibrate(20);break;case"heavy":navigator.vibrate(40);break;case"double":navigator.vibrate([20,50,20]);break;case"success":navigator.vibrate([10,50,10,50,10]);break;default:navigator.vibrate(15)}};d.useEffect(()=>{const I=n.current[t];I!==void 0?window.scrollTo(0,I):window.scrollTo(0,0)},[t]);const u=()=>{n.current[t]=window.scrollY},h=["/","/play","/profile"].includes(t),[f,p]=d.useState(!1),[k,y]=d.useState({open:!1,go:null});d.useEffect(()=>{const I=new MutationObserver(()=>{p(document.body.classList.contains("modal-open"))});return I.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>I.disconnect()},[]);const R=f||[/^\/quiz\//,/^\/practice\//,/^\/profile\//].some(I=>I.test(t)),x=I=>I==="/"?t==="/":t.startsWith(I),m=d.useRef(0),[v,S]=d.useState(!1),[_,M]=d.useState(0),[N,g]=d.useState(!1),[b,w]=d.useState(0),C=I=>{!h||N||window.scrollY===0&&(m.current=I.touches[0].clientY)},F=I=>{if(!(!h||N)&&window.scrollY===0){const Q=I.touches[0].clientY-m.current;if(Q>0){S(!0);const q=Math.min(Q,120);M(q),w(Math.min(q/60*100,100)),Q>60&&Q<65&&c("light")}}},W=()=>{v&&_>60&&(g(!0),l("refresh"),c("success"),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{g(!1),w(0)},1500)),S(!1),M(0)},J=({path:I,icon:Q,label:q,emoji:z})=>{const T=x(I),[E,P]=d.useState(!1),D=()=>{u(),P(!0),setTimeout(()=>P(!1),600);const A=()=>{if(I==="/play"){o(!0),l("whoosh"),c("medium"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1)},200);return}if(T){const ne=Date.now();ne-r.current<500&&(window.scrollTo({top:0,behavior:"smooth"}),l("tap"),c("double")),r.current=ne}else l("tap"),c("light"),e(I)};if(localStorage.getItem("qp_in_question")==="true"&&!T){y({open:!0,go:A});return}A()};return s.jsxs("button",{type:"button",onClick:D,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${T?"scale-110":"scale-100 hover:scale-105"}
          ${E?"animate-bounce":""}`,"aria-current":T?"page":void 0,children:[T&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),s.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),s.jsx("div",{className:`leading-none text-2xl transition-transform ${T?"scale-125":""} ${I==="/play"&&i?"animate-spin":""}`,children:z||Q}),s.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${T?"text-white":"text-base-muted/80"}`,children:q})]})};return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",onTouchStart:C,onTouchMove:F,onTouchEnd:W,children:[s.jsx("style",{jsx:!0,children:`
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
      `}),(v||N)&&s.jsxs("div",{className:"fixed left-1/2 z-50 flex flex-col items-center transition-all duration-300",style:{top:N?"60px":`${Math.max(20,Math.min(_-20,80))}px`,transform:"translateX(-50%) scale("+(N?1.1:1)+")"},children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsxs("svg",{width:"48",height:"48",className:N?"animate-spin":"",children:[s.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"rgba(255,255,255,0.2)",strokeWidth:"4"}),s.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"url(#gradient)",strokeWidth:"4",strokeDasharray:`${b*1.26} 126`,strokeLinecap:"round",transform:"rotate(-90 24 24)"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#6366F1"}),s.jsx("stop",{offset:"50%",stopColor:"#22C55E"}),s.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),s.jsx("div",{className:"absolute inset-0 grid place-items-center",children:s.jsx("span",{className:"text-2xl",children:N?"🎉":"⬇"})})]}),s.jsx("span",{className:`text-sm font-medium text-white px-3 py-1 rounded-full bg-white/20 backdrop-blur
            ${N?"rainbow-text":""}`,children:N?"Refreshed! 🌟":_>60?"Release! 🚀":"Pull down..."}),N&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(6)].map((I,Q)=>s.jsx("span",{className:"absolute text-2xl",style:{left:`${-30+Q*15}px`,animation:"confetti 1s ease-out forwards",animationDelay:`${Q*.1}s`},children:["🎊","✨","⭐","🎈","🎉","💫"][Q]},Q))})]}),s.jsx("main",{className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:R?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",overflowY:"auto",transform:v&&!N?`translateY(${_*.5}px)`:void 0,transition:v||N?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)":void 0},children:s.jsx(Ah,{})}),k.open&&s.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[s.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[s.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),s.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),s.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>{c("light"),y({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),s.jsx("button",{onClick:()=>{c("medium");const I=k.go;y({open:!1,go:null}),I==null||I()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),s.jsx("style",{jsx:!0,children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!R&&s.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[s.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),s.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),s.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[s.jsx(J,{path:"/",emoji:"🏠",label:"Home"}),s.jsx(J,{path:"/play",icon:s.jsx(yx,{size:26,spinning:i}),label:"Play"}),s.jsx(J,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(null,arguments)}function wx(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function jx(e){d.useEffect(e,[])}var kx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function mr(e,t){var n=t===void 0?{}:t,r=n.volume,i=r===void 0?1:r,o=n.playbackRate,a=o===void 0?1:o,l=n.soundEnabled,c=l===void 0?!0:l,u=n.interrupt,h=u===void 0?!1:u,f=n.onload,p=wx(n,kx),k=ut.useRef(null),y=ut.useRef(!1),j=ut.useState(null),R=j[0],x=j[1],m=ut.useState(null),v=m[0],S=m[1],_=function(){typeof f=="function"&&f.call(this),y.current&&x(this.duration()*1e3),S(this)};jx(function(){return Uf(()=>import("./howler-aec2641d.js").then(w=>w.h),[]).then(function(w){if(!y.current){var C;k.current=(C=w.Howl)!==null&&C!==void 0?C:w.default.Howl,y.current=!0,new k.current(qi({src:Array.isArray(e)?e:[e],volume:i,rate:a,onload:_},p))}}),function(){y.current=!1}}),ut.useEffect(function(){k.current&&v&&S(new k.current(qi({src:Array.isArray(e)?e:[e],volume:i,onload:_},p)))},[JSON.stringify(e)]),ut.useEffect(function(){v&&(v.volume(i),p.sprite||v.rate(a))},[v,i,a]);var M=ut.useCallback(function(w){typeof w>"u"&&(w={}),!(!v||!c&&!w.forceSoundEnabled)&&(h&&v.stop(),w.playbackRate&&v.rate(w.playbackRate),v.play(w.id))},[v,c,h]),N=ut.useCallback(function(w){v&&v.stop(w)},[v]),g=ut.useCallback(function(w){v&&v.pause(w)},[v]),b=[M,{sound:v,stop:N,pause:g,duration:R}];return b}var sm={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((n,r)=>{e.exports=r()})(xm,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},i,o=!r.document&&!!r.postMessage,a=r.IS_PAPA_WORKER||!1,l={},c=0,u={};function h(g){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(b){var w=_(b);w.chunkSize=parseInt(w.chunkSize),b.step||b.chunk||(w.chunkSize=null),this._handle=new j(w),(this._handle.streamer=this)._config=w}).call(this,g),this.parseChunk=function(b,w){var C=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<C){let W=this._config.newline;W||(F=this._config.quoteChar||'"',W=this._handle.guessLineEndings(b,F)),b=[...b.split(W).slice(C)].join(W)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(F=this._config.beforeFirstChunk(b))!==void 0&&(b=F),this.isFirstChunk=!1,this._halted=!1;var C=this._partialLine+b,F=(this._partialLine="",this._handle.parse(C,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(b=F.meta.cursor,C=(this._finished||(this._partialLine=C.substring(b-this._baseIndex),this._baseIndex=b),F&&F.data&&(this._rowCount+=F.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),a)r.postMessage({results:F,workerId:u.WORKER_ID,finished:C});else if(N(this._config.chunk)&&!w){if(this._config.chunk(F,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=F=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(F.data),this._completeResults.errors=this._completeResults.errors.concat(F.errors),this._completeResults.meta=F.meta),this._completed||!C||!N(this._config.complete)||F&&F.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),C||F&&F.meta.paused||this._nextChunk(),F}this._halted=!0},this._sendError=function(b){N(this._config.error)?this._config.error(b):a&&this._config.error&&r.postMessage({workerId:u.WORKER_ID,error:b,finished:!1})}}function f(g){var b;(g=g||{}).chunkSize||(g.chunkSize=u.RemoteChunkSize),h.call(this,g),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(w){this._input=w,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(b=new XMLHttpRequest,this._config.withCredentials&&(b.withCredentials=this._config.withCredentials),o||(b.onload=M(this._chunkLoaded,this),b.onerror=M(this._chunkError,this)),b.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var w,C=this._config.downloadRequestHeaders;for(w in C)b.setRequestHeader(w,C[w])}var F;this._config.chunkSize&&(F=this._start+this._config.chunkSize-1,b.setRequestHeader("Range","bytes="+this._start+"-"+F));try{b.send(this._config.downloadRequestBody)}catch(W){this._chunkError(W.message)}o&&b.status===0&&this._chunkError()}},this._chunkLoaded=function(){b.readyState===4&&(b.status<200||400<=b.status?this._chunkError():(this._start+=this._config.chunkSize||b.responseText.length,this._finished=!this._config.chunkSize||this._start>=(w=>(w=w.getResponseHeader("Content-Range"))!==null?parseInt(w.substring(w.lastIndexOf("/")+1)):-1)(b),this.parseChunk(b.responseText)))},this._chunkError=function(w){w=b.statusText||w,this._sendError(new Error(w))}}function p(g){(g=g||{}).chunkSize||(g.chunkSize=u.LocalChunkSize),h.call(this,g);var b,w,C=typeof FileReader<"u";this.stream=function(F){this._input=F,w=F.slice||F.webkitSlice||F.mozSlice,C?((b=new FileReader).onload=M(this._chunkLoaded,this),b.onerror=M(this._chunkError,this)):b=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var F=this._input,W=(this._config.chunkSize&&(W=Math.min(this._start+this._config.chunkSize,this._input.size),F=w.call(F,this._start,W)),b.readAsText(F,this._config.encoding));C||this._chunkLoaded({target:{result:W}})},this._chunkLoaded=function(F){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(F.target.result)},this._chunkError=function(){this._sendError(b.error)}}function k(g){var b;h.call(this,g=g||{}),this.stream=function(w){return b=w,this._nextChunk()},this._nextChunk=function(){var w,C;if(!this._finished)return w=this._config.chunkSize,b=w?(C=b.substring(0,w),b.substring(w)):(C=b,""),this._finished=!b,this.parseChunk(C)}}function y(g){h.call(this,g=g||{});var b=[],w=!0,C=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(F){this._input=F,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){C&&b.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),b.length?this.parseChunk(b.shift()):w=!0},this._streamData=M(function(F){try{b.push(typeof F=="string"?F:F.toString(this._config.encoding)),w&&(w=!1,this._checkIsFinished(),this.parseChunk(b.shift()))}catch(W){this._streamError(W)}},this),this._streamError=M(function(F){this._streamCleanUp(),this._sendError(F)},this),this._streamEnd=M(function(){this._streamCleanUp(),C=!0,this._streamData("")},this),this._streamCleanUp=M(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(g){var b,w,C,F,W=Math.pow(2,53),J=-W,I=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Q=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,q=this,z=0,T=0,E=!1,P=!1,D=[],A={data:[],errors:[],meta:{}};function Z(O){return g.skipEmptyLines==="greedy"?O.join("").trim()==="":O.length===1&&O[0].length===0}function ne(){if(A&&C&&(ue("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),C=!1),g.skipEmptyLines&&(A.data=A.data.filter(function(Y){return!Z(Y)})),re()){let Y=function(G,ie){N(g.transformHeader)&&(G=g.transformHeader(G,ie)),D.push(G)};if(A)if(Array.isArray(A.data[0])){for(var O=0;re()&&O<A.data.length;O++)A.data[O].forEach(Y);A.data.splice(0,1)}else A.data.forEach(Y)}function H(Y,G){for(var ie=g.header?{}:[],$=0;$<Y.length;$++){var B=$,V=Y[$],V=((ae,X)=>(se=>(g.dynamicTypingFunction&&g.dynamicTyping[se]===void 0&&(g.dynamicTyping[se]=g.dynamicTypingFunction(se)),(g.dynamicTyping[se]||g.dynamicTyping)===!0))(ae)?X==="true"||X==="TRUE"||X!=="false"&&X!=="FALSE"&&((se=>{if(I.test(se)&&(se=parseFloat(se),J<se&&se<W))return 1})(X)?parseFloat(X):Q.test(X)?new Date(X):X===""?null:X):X)(B=g.header?$>=D.length?"__parsed_extra":D[$]:B,V=g.transform?g.transform(V,B):V);B==="__parsed_extra"?(ie[B]=ie[B]||[],ie[B].push(V)):ie[B]=V}return g.header&&($>D.length?ue("FieldMismatch","TooManyFields","Too many fields: expected "+D.length+" fields but parsed "+$,T+G):$<D.length&&ue("FieldMismatch","TooFewFields","Too few fields: expected "+D.length+" fields but parsed "+$,T+G)),ie}var te;A&&(g.header||g.dynamicTyping||g.transform)&&(te=1,!A.data.length||Array.isArray(A.data[0])?(A.data=A.data.map(H),te=A.data.length):A.data=H(A.data,0),g.header&&A.meta&&(A.meta.fields=D),T+=te)}function re(){return g.header&&D.length===0}function ue(O,H,te,Y){O={type:O,code:H,message:te},Y!==void 0&&(O.row=Y),A.errors.push(O)}N(g.step)&&(F=g.step,g.step=function(O){A=O,re()?ne():(ne(),A.data.length!==0&&(z+=O.data.length,g.preview&&z>g.preview?w.abort():(A.data=A.data[0],F(A,q))))}),this.parse=function(O,H,te){var Y=g.quoteChar||'"',Y=(g.newline||(g.newline=this.guessLineEndings(O,Y)),C=!1,g.delimiter?N(g.delimiter)&&(g.delimiter=g.delimiter(O),A.meta.delimiter=g.delimiter):((Y=((G,ie,$,B,V)=>{var ae,X,se,L;V=V||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var ee=0;ee<V.length;ee++){for(var ce,ve=V[ee],me=0,Fe=0,we=0,Ie=(se=void 0,new x({comments:B,delimiter:ve,newline:ie,preview:10}).parse(G)),Le=0;Le<Ie.data.length;Le++)$&&Z(Ie.data[Le])?we++:(ce=Ie.data[Le].length,Fe+=ce,se===void 0?se=ce:0<ce&&(me+=Math.abs(ce-se),se=ce));0<Ie.data.length&&(Fe/=Ie.data.length-we),(X===void 0||me<=X)&&(L===void 0||L<Fe)&&1.99<Fe&&(X=me,ae=ve,L=Fe)}return{successful:!!(g.delimiter=ae),bestDelimiter:ae}})(O,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess)).successful?g.delimiter=Y.bestDelimiter:(C=!0,g.delimiter=u.DefaultDelimiter),A.meta.delimiter=g.delimiter),_(g));return g.preview&&g.header&&Y.preview++,b=O,w=new x(Y),A=w.parse(b,H,te),ne(),E?{meta:{paused:!0}}:A||{meta:{paused:!1}}},this.paused=function(){return E},this.pause=function(){E=!0,w.abort(),b=N(g.chunk)?"":b.substring(w.getCharIndex())},this.resume=function(){q.streamer._halted?(E=!1,q.streamer.parseChunk(b,!0)):setTimeout(q.resume,3)},this.aborted=function(){return P},this.abort=function(){P=!0,w.abort(),A.meta.aborted=!0,N(g.complete)&&g.complete(A),b=""},this.guessLineEndings=function(G,Y){G=G.substring(0,1048576);var Y=new RegExp(R(Y)+"([^]*?)"+R(Y),"gm"),te=(G=G.replace(Y,"")).split("\r"),Y=G.split(`
`),G=1<Y.length&&Y[0].length<te[0].length;if(te.length===1||G)return`
`;for(var ie=0,$=0;$<te.length;$++)te[$][0]===`
`&&ie++;return ie>=te.length/2?`\r
`:"\r"}}function R(g){return g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function x(g){var b=(g=g||{}).delimiter,w=g.newline,C=g.comments,F=g.step,W=g.preview,J=g.fastMode,I=null,Q=!1,q=g.quoteChar==null?'"':g.quoteChar,z=q;if(g.escapeChar!==void 0&&(z=g.escapeChar),(typeof b!="string"||-1<u.BAD_DELIMITERS.indexOf(b))&&(b=","),C===b)throw new Error("Comment character same as delimiter");C===!0?C="#":(typeof C!="string"||-1<u.BAD_DELIMITERS.indexOf(C))&&(C=!1),w!==`
`&&w!=="\r"&&w!==`\r
`&&(w=`
`);var T=0,E=!1;this.parse=function(P,D,A){if(typeof P!="string")throw new Error("Input must be a string");var Z=P.length,ne=b.length,re=w.length,ue=C.length,O=N(F),H=[],te=[],Y=[],G=T=0;if(!P)return me();if(J||J!==!1&&P.indexOf(q)===-1){for(var ie=P.split(w),$=0;$<ie.length;$++){if(Y=ie[$],T+=Y.length,$!==ie.length-1)T+=w.length;else if(A)return me();if(!C||Y.substring(0,ue)!==C){if(O){if(H=[],L(Y.split(b)),Fe(),E)return me()}else L(Y.split(b));if(W&&W<=$)return H=H.slice(0,W),me(!0)}}return me()}for(var B=P.indexOf(b,T),V=P.indexOf(w,T),ae=new RegExp(R(z)+R(q),"g"),X=P.indexOf(q,T);;)if(P[T]===q)for(X=T,T++;;){if((X=P.indexOf(q,X+1))===-1)return A||te.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:H.length,index:T}),ce();if(X===Z-1)return ce(P.substring(T,X).replace(ae,q));if(q===z&&P[X+1]===z)X++;else if(q===z||X===0||P[X-1]!==z){B!==-1&&B<X+1&&(B=P.indexOf(b,X+1));var se=ee((V=V!==-1&&V<X+1?P.indexOf(w,X+1):V)===-1?B:Math.min(B,V));if(P.substr(X+1+se,ne)===b){Y.push(P.substring(T,X).replace(ae,q)),P[T=X+1+se+ne]!==q&&(X=P.indexOf(q,T)),B=P.indexOf(b,T),V=P.indexOf(w,T);break}if(se=ee(V),P.substring(X+1+se,X+1+se+re)===w){if(Y.push(P.substring(T,X).replace(ae,q)),ve(X+1+se+re),B=P.indexOf(b,T),X=P.indexOf(q,T),O&&(Fe(),E))return me();if(W&&H.length>=W)return me(!0);break}te.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:H.length,index:T}),X++}}else if(C&&Y.length===0&&P.substring(T,T+ue)===C){if(V===-1)return me();T=V+re,V=P.indexOf(w,T),B=P.indexOf(b,T)}else if(B!==-1&&(B<V||V===-1))Y.push(P.substring(T,B)),T=B+ne,B=P.indexOf(b,T);else{if(V===-1)break;if(Y.push(P.substring(T,V)),ve(V+re),O&&(Fe(),E))return me();if(W&&H.length>=W)return me(!0)}return ce();function L(we){H.push(we),G=T}function ee(we){var Ie=0;return Ie=we!==-1&&(we=P.substring(X+1,we))&&we.trim()===""?we.length:Ie}function ce(we){return A||(we===void 0&&(we=P.substring(T)),Y.push(we),T=Z,L(Y),O&&Fe()),me()}function ve(we){T=we,L(Y),Y=[],V=P.indexOf(w,T)}function me(we){if(g.header&&!D&&H.length&&!Q){var Ie=H[0],Le=Object.create(null),Ge=new Set(Ie);let lt=!1;for(let ct=0;ct<Ie.length;ct++){let tt=Ie[ct];if(Le[tt=N(g.transformHeader)?g.transformHeader(tt,ct):tt]){let Xt,Kn=Le[tt];for(;Xt=tt+"_"+Kn,Kn++,Ge.has(Xt););Ge.add(Xt),Ie[ct]=Xt,Le[tt]++,lt=!0,(I=I===null?{}:I)[Xt]=tt}else Le[tt]=1,Ie[ct]=tt;Ge.add(tt)}lt&&console.warn("Duplicate headers found and renamed."),Q=!0}return{data:H,errors:te,meta:{delimiter:b,linebreak:w,aborted:E,truncated:!!we,cursor:G+(D||0),renamedHeaders:I}}}function Fe(){F(me()),H=[],te=[]}},this.abort=function(){E=!0},this.getCharIndex=function(){return T}}function m(g){var b=g.data,w=l[b.workerId],C=!1;if(b.error)w.userError(b.error,b.file);else if(b.results&&b.results.data){var F={abort:function(){C=!0,v(b.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:S,resume:S};if(N(w.userStep)){for(var W=0;W<b.results.data.length&&(w.userStep({data:b.results.data[W],errors:b.results.errors,meta:b.results.meta},F),!C);W++);delete b.results}else N(w.userChunk)&&(w.userChunk(b.results,F,b.file),delete b.results)}b.finished&&!C&&v(b.workerId,b.results)}function v(g,b){var w=l[g];N(w.userComplete)&&w.userComplete(b),w.terminate(),delete l[g]}function S(){throw new Error("Not implemented.")}function _(g){if(typeof g!="object"||g===null)return g;var b,w=Array.isArray(g)?[]:{};for(b in g)w[b]=_(g[b]);return w}function M(g,b){return function(){g.apply(b,arguments)}}function N(g){return typeof g=="function"}return u.parse=function(g,b){var w=(b=b||{}).dynamicTyping||!1;if(N(w)&&(b.dynamicTypingFunction=w,w={}),b.dynamicTyping=w,b.transform=!!N(b.transform)&&b.transform,!b.worker||!u.WORKERS_SUPPORTED)return w=null,u.NODE_STREAM_INPUT,typeof g=="string"?(g=(C=>C.charCodeAt(0)!==65279?C:C.slice(1))(g),w=new(b.download?f:k)(b)):g.readable===!0&&N(g.read)&&N(g.on)?w=new y(b):(r.File&&g instanceof File||g instanceof Object)&&(w=new p(b)),w.stream(g);(w=(()=>{var C;return!!u.WORKERS_SUPPORTED&&(C=(()=>{var F=r.URL||r.webkitURL||null,W=n.toString();return u.BLOB_URL||(u.BLOB_URL=F.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",W,")();"],{type:"text/javascript"})))})(),(C=new r.Worker(C)).onmessage=m,C.id=c++,l[C.id]=C)})()).userStep=b.step,w.userChunk=b.chunk,w.userComplete=b.complete,w.userError=b.error,b.step=N(b.step),b.chunk=N(b.chunk),b.complete=N(b.complete),b.error=N(b.error),delete b.worker,w.postMessage({input:g,config:b,workerId:w.id})},u.unparse=function(g,b){var w=!1,C=!0,F=",",W=`\r
`,J='"',I=J+J,Q=!1,q=null,z=!1,T=((()=>{if(typeof b=="object"){if(typeof b.delimiter!="string"||u.BAD_DELIMITERS.filter(function(D){return b.delimiter.indexOf(D)!==-1}).length||(F=b.delimiter),typeof b.quotes!="boolean"&&typeof b.quotes!="function"&&!Array.isArray(b.quotes)||(w=b.quotes),typeof b.skipEmptyLines!="boolean"&&typeof b.skipEmptyLines!="string"||(Q=b.skipEmptyLines),typeof b.newline=="string"&&(W=b.newline),typeof b.quoteChar=="string"&&(J=b.quoteChar),typeof b.header=="boolean"&&(C=b.header),Array.isArray(b.columns)){if(b.columns.length===0)throw new Error("Option columns is empty");q=b.columns}b.escapeChar!==void 0&&(I=b.escapeChar+J),b.escapeFormulae instanceof RegExp?z=b.escapeFormulae:typeof b.escapeFormulae=="boolean"&&b.escapeFormulae&&(z=/^[=+\-@\t\r].*$/)}})(),new RegExp(R(J),"g"));if(typeof g=="string"&&(g=JSON.parse(g)),Array.isArray(g)){if(!g.length||Array.isArray(g[0]))return E(null,g,Q);if(typeof g[0]=="object")return E(q||Object.keys(g[0]),g,Q)}else if(typeof g=="object")return typeof g.data=="string"&&(g.data=JSON.parse(g.data)),Array.isArray(g.data)&&(g.fields||(g.fields=g.meta&&g.meta.fields||q),g.fields||(g.fields=Array.isArray(g.data[0])?g.fields:typeof g.data[0]=="object"?Object.keys(g.data[0]):[]),Array.isArray(g.data[0])||typeof g.data[0]=="object"||(g.data=[g.data])),E(g.fields||[],g.data||[],Q);throw new Error("Unable to serialize unrecognized input");function E(D,A,Z){var ne="",re=(typeof D=="string"&&(D=JSON.parse(D)),typeof A=="string"&&(A=JSON.parse(A)),Array.isArray(D)&&0<D.length),ue=!Array.isArray(A[0]);if(re&&C){for(var O=0;O<D.length;O++)0<O&&(ne+=F),ne+=P(D[O],O);0<A.length&&(ne+=W)}for(var H=0;H<A.length;H++){var te=(re?D:A[H]).length,Y=!1,G=re?Object.keys(A[H]).length===0:A[H].length===0;if(Z&&!re&&(Y=Z==="greedy"?A[H].join("").trim()==="":A[H].length===1&&A[H][0].length===0),Z==="greedy"&&re){for(var ie=[],$=0;$<te;$++){var B=ue?D[$]:$;ie.push(A[H][B])}Y=ie.join("").trim()===""}if(!Y){for(var V=0;V<te;V++){0<V&&!G&&(ne+=F);var ae=re&&ue?D[V]:V;ne+=P(A[H][ae],V)}H<A.length-1&&(!Z||0<te&&!G)&&(ne+=W)}}return ne}function P(D,A){var Z,ne;return D==null?"":D.constructor===Date?JSON.stringify(D).slice(1,25):(ne=!1,z&&typeof D=="string"&&z.test(D)&&(D="'"+D,ne=!0),Z=D.toString().replace(T,I),(ne=ne||w===!0||typeof w=="function"&&w(D,A)||Array.isArray(w)&&w[A]||((re,ue)=>{for(var O=0;O<ue.length;O++)if(-1<re.indexOf(ue[O]))return!0;return!1})(Z,u.BAD_DELIMITERS)||-1<Z.indexOf(F)||Z.charAt(0)===" "||Z.charAt(Z.length-1)===" ")?J+Z+J:Z)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!o&&!!r.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=x,u.ParserHandle=j,u.NetworkStreamer=f,u.FileStreamer=p,u.StringStreamer=k,u.ReadableStreamStreamer=y,r.jQuery&&((i=r.jQuery).fn.parse=function(g){var b=g.config||{},w=[];return this.each(function(W){if(!(i(this).prop("tagName").toUpperCase()==="INPUT"&&i(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var J=0;J<this.files.length;J++)w.push({file:this.files[J],inputElem:this,instanceConfig:i.extend({},b)})}),C(),this;function C(){if(w.length===0)N(g.complete)&&g.complete();else{var W,J,I,Q,q=w[0];if(N(g.before)){var z=g.before(q.file,q.inputElem);if(typeof z=="object"){if(z.action==="abort")return W="AbortError",J=q.file,I=q.inputElem,Q=z.reason,void(N(g.error)&&g.error({name:W},J,I,Q));if(z.action==="skip")return void F();typeof z.config=="object"&&(q.instanceConfig=i.extend(q.instanceConfig,z.config))}else if(z==="skip")return void F()}var T=q.instanceConfig.complete;q.instanceConfig.complete=function(E){N(T)&&T(E,q.file,q.inputElem),F()},u.parse(q.file,q.instanceConfig)}}function F(){w.splice(0,1),C()}}),a&&(r.onmessage=function(g){g=g.data,u.WORKER_ID===void 0&&g&&(u.WORKER_ID=g.workerId),typeof g.input=="string"?r.postMessage({workerId:u.WORKER_ID,results:u.parse(g.input,g.config),finished:!0}):(r.File&&g.input instanceof File||g.input instanceof Object)&&(g=u.parse(g.input,g.config))&&r.postMessage({workerId:u.WORKER_ID,results:g,finished:!0})}),(f.prototype=Object.create(h.prototype)).constructor=f,(p.prototype=Object.create(h.prototype)).constructor=p,(k.prototype=Object.create(k.prototype)).constructor=k,(y.prototype=Object.create(h.prototype)).constructor=y,u})})(sm);var Nx=sm.exports;const uo=_u(Nx);function im({startRect:e,targetRef:t,count:n=12,onDone:r}){return d.useEffect(()=>{const i=t==null?void 0:t.current;if(!e||!i){r==null||r();return}const o=i.getBoundingClientRect(),a=document.createElement("div");a.style.position="fixed",a.style.inset="0",a.style.pointerEvents="none",a.style.zIndex="9999",document.body.appendChild(a);const l=o.left+o.width/2,c=o.top+o.height/2,u=e.left+e.width/2,h=e.top+e.height/2,f=200;let p=0;function k(y){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const R=u,x=h,m=l,v=c;j.style.transform=`translate(${R}px, ${x}px) scale(1)`,a.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${f}ms cubic-bezier(.2,.8,.2,1), opacity ${f}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${m}px, ${v}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),p+=1,p===n&&(a.remove(),r==null||r())},f+50)}for(let y=0;y<n;y++)setTimeout(()=>k(),y*60);return()=>{try{a.remove()}catch{}}},[e,t,n,r]),null}const He={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},uu=e=>Math.floor(e/He.XP_PER_LEVEL)+1,Sx=e=>{const t=e%He.XP_PER_LEVEL;return{current:t,required:He.XP_PER_LEVEL,percentage:t/He.XP_PER_LEVEL*100}};function Cx({player:e,size:t="normal",showLevel:n=!0,showName:r=!0}){const i=He.AVATARS.find(a=>a.id===e.avatar)||He.AVATARS[0],o={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:`${o[t]} rounded-full bg-gradient-to-br ${i.bgColor} flex items-center justify-center shadow-lg`,children:s.jsx("span",{children:i.emoji})}),n&&s.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),r&&s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-sm",children:e.name}),s.jsx("div",{className:"text-xs text-base-muted",children:i.name})]})]})}function Ex({current:e,required:t,level:n,animate:r=!0}){const[i,o]=d.useState(0),a=e/t*100;return d.useEffect(()=>{if(r){const l=setTimeout(()=>{o(a)},100);return()=>clearTimeout(l)}else o(a)},[a,r]),s.jsxs("div",{className:"w-full",children:[s.jsxs("div",{className:"flex justify-between items-center mb-1",children:[s.jsxs("span",{className:"text-xs font-medium",children:["Level ",n]}),s.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),s.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${i}%`},children:s.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}function _x({current:e,max:t=He.MAX_ENERGY,regenAt:n}){const[r,i]=d.useState("");d.useEffect(()=>{if(n&&e<t){const a=()=>{const c=Date.now(),u=Math.max(0,n-c),h=Math.floor(u/6e4),f=Math.floor(u%6e4/1e3);i(`${h}:${f.toString().padStart(2,"0")}`)};a();const l=setInterval(a,1e3);return()=>clearInterval(l)}},[n,e,t]);const o=Array.from({length:t},(a,l)=>l<e);return s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("div",{className:"flex gap-0.5",children:o.map((a,l)=>s.jsx("span",{className:`text-lg transition-all duration-300 ${a?"text-red-500 scale-110":"text-gray-600 scale-90"}`,children:a?"❤️":"🖤"},l))}),e<t&&r&&s.jsxs("span",{className:"text-xs text-base-muted ml-2",children:["+1 in ",r]})]})}const om=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],am=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Rx=[...om.filter(e=>e.slug!=="more"),...am],du=(e=new Date)=>e.toLocaleDateString("en-CA"),fu=(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},Px=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function mu(){const e=at(),{player:t,addXP:n,addCoins:r,levelProgress:i,useEnergy:o,changeAvatar:a}=Yl(),[l]=mr("/sounds/correct.mp3",{volume:.6}),[c]=mr("/sounds/wrong.mp3",{volume:.6}),[u]=mr("/sounds/coin.mp3",{volume:.75}),[h]=mr("/sounds/levelup.mp3",{volume:.8}),f=d.useRef(t.level),p=d.useRef(null);d.useEffect(()=>{t.level>f.current&&(h==null||h(),f.current=t.level)},[t.level,h]);const[k,y]=d.useState(!1),[j,R]=d.useState(null),[x,m]=d.useState(!1),[v,S]=d.useState("medium"),[_,M]=d.useState(10),[N,g]=d.useState(45),[b,w]=d.useState(!1),[C,F]=d.useState(!1),[W,J]=d.useState(null),[I,Q]=d.useState(null),[q,z]=d.useState(!1),[T,E]=d.useState(!1),[P,D]=d.useState(null),A=10,Z=5,[ne,re]=d.useState(!1),[ue,O]=d.useState("general-knowledge"),[H,te]=d.useState("medium"),[Y,G]=d.useState(10),[ie,$]=d.useState(()=>fu("dq_daily_log",{})[du()]===!0);d.useEffect(()=>{const L=sessionStorage.getItem("homeScrollPosition");L&&window.scrollTo(0,parseInt(L));const ee=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",ee),()=>window.removeEventListener("scroll",ee)},[]),d.useEffect(()=>{if(ie)return;(async()=>{var ee;try{const ce=await fetch("/data/quiz_questions_bank.csv").then(we=>we.text()),{data:ve}=uo.parse(ce,{header:!0,skipEmptyLines:!0});if(!ve.length)throw new Error("empty");const me=ve[Math.floor(Math.random()*ve.length)],Fe=[me.option1,me.option2,me.option3,me.option4].filter(Boolean);J({category:me.category||"General",prompt:me.question,options:Fe,answerIndex:["A","B","C","D"].indexOf((ee=me.answer)==null?void 0:ee.toUpperCase())||0})}catch{J({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[ie]);const B=(L,ee)=>{if(I!==null)return;Q(L);const ce=L===W.answerIndex;if(ce){if(l(),ee!=null&&ee.currentTarget&&p.current){const ve=ee.currentTarget.getBoundingClientRect();u(),D({startRect:ve,count:10,amount:Z})}}else c();setTimeout(()=>{if(E(!0),z(!0),ce){const ve=du();Px("dq_daily_log",{...fu("dq_daily_log",{}),[ve]:!0}),$(!0);const me=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(me+1))}},600)},V=L=>{if(L.slug==="more"){y(!0);return}R(L),m(!0)},ae=()=>{console.log("Starting quiz with energy:",t.energy),console.log("Category:",j.slug),e(`/quiz/${j.slug}`,{state:{mode:"quiz",difficulty:v,count:_,timer:{type:"per_q",seconds:N},source:"adventure"}}),m(!1)},X=()=>{console.log("Starting practice, category:",ue),e(`/quiz/${ue}`,{state:{mode:"practice",difficulty:H,count:Y,timer:{type:"off",seconds:0}}}),re(!1)},se=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>e("/profile/quests")},{icon:"🔥",label:`${t.bestCombo} Best`,color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>e("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>e("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>e("/profile/rewards")}];return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[s.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),s.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[s.jsx("style",{jsx:!0,children:`
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
        `}),P&&s.jsx(im,{startRect:P.startRect,targetRef:p,count:P.count,onDone:()=>{n(A),r(P.amount),D(null)}}),s.jsxs("div",{className:"mb-8",children:[s.jsxs("div",{className:"flex justify-between items-start mb-4",children:[s.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>F(!0),children:s.jsx(Cx,{player:t,size:"normal",showLevel:!0,showName:!0})}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("button",{ref:p,onClick:()=>w(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[s.jsx("span",{className:"text-lg",children:"🪙"}),s.jsx("span",{className:"font-bold",children:t.coins})]}),s.jsx("button",{onClick:()=>e("/profile"),className:"w-10 h-10 rounded-full bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"⚙️"})]}),s.jsx(_x,{current:t.energy,regenAt:t.energyRegenAt})]})]}),s.jsx(Ex,{current:i.current,required:i.required,level:t.level,animate:!0})]}),s.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:()=>e("/play"),children:[s.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),s.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),s.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),s.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),s.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]}),s.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:se.map((L,ee)=>s.jsxs("button",{onClick:L.action,className:`${L.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[s.jsx("div",{className:"text-2xl",children:L.icon}),s.jsx("div",{className:"text-[10px] font-medium text-white",children:L.label})]},ee))}),!ie&&W&&s.jsx("div",{className:"flip-card mb-6",children:s.jsxs("div",{className:`flip-card-inner ${T?"flipped":""}`,children:[s.jsx("div",{className:"flip-card-front",children:s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),s.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",Z," coins +",A," XP"]})]}),s.jsx("p",{className:"text-sm mb-4 text-base-muted",children:W.prompt}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:W.options.map((L,ee)=>{const ce=ee===W.answerIndex,ve=I===ee,me=I!==null;return s.jsx("button",{onClick:Fe=>B(ee,Fe),disabled:I!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${me?ce?"border-green-500 bg-green-500/20":ve?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${I!==null?"cursor-not-allowed":"cursor-pointer"}`,children:L},ee)})})]})}),s.jsx("div",{className:"flip-card-back absolute inset-0",children:s.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[s.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),s.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),s.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",Z," coins & ",A," XP!"]}),s.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}),ie&&s.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"text-3xl",children:"✅"}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),s.jsx("div",{className:"grid grid-cols-3 gap-3",children:om.map(L=>s.jsxs("button",{onClick:()=>V(L),className:`bg-gradient-to-br ${L.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[s.jsx("div",{className:"text-3xl",children:L.icon}),s.jsx("div",{className:"text-xs font-bold text-white text-center",children:L.name}),L.questions>0&&s.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[L.questions," Qs"]})]},L.name))})]}),s.jsxs("button",{onClick:()=>re(!0),className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t.energy<10?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-medium",children:"Practice Mode"}),s.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),s.jsx("div",{className:"text-xl",children:"→"})]}),C&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:L=>{L.target===L.currentTarget&&F(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:L=>L.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),s.jsx("button",{onClick:()=>F(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-4",children:He.AVATARS.map(L=>{const ee=!t.unlockedAvatars.includes(L.id),ce=t.avatar===L.id;return s.jsxs("button",{onClick:()=>{ee||(a(L.id),F(!1))},className:`p-4 rounded-2xl border-2 transition-all ${ce?"border-brand-blue bg-brand-blue/20":ee?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:ee,children:[s.jsx("div",{className:`text-4xl mb-2 ${ee?"grayscale":""}`,children:L.emoji}),s.jsx("div",{className:"text-sm font-medium",children:L.name}),ee&&s.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",L.unlockLevel]}),ce&&s.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},L.id)})})]})}),x&&j&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:L=>{L.target===L.currentTarget&&m(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:L=>L.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),s.jsx("button",{onClick:()=>m(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:j.icon}),s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium",children:["Category: ",j.name]}),s.jsxs("div",{className:"text-xs text-base-muted",children:[j.questions," questions available"]})]})]})}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(L=>s.jsx("button",{onClick:()=>S(L),className:`py-2 rounded-xl border ${v===L?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:L.charAt(0).toUpperCase()+L.slice(1)},L))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(L=>s.jsx("button",{onClick:()=>M(L),className:`py-2 rounded-xl border ${_===L?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:L},L))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),s.jsx("input",{type:"number",value:N,onChange:L=>g(Number(L.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:ae,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})}),ne&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:L=>{L.target===L.currentTarget&&re(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:L=>L.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),s.jsx("button",{onClick:()=>re(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),s.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:Rx.map(L=>s.jsxs("button",{onClick:()=>O(L.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${ue===L.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[s.jsx("div",{className:"text-xl",children:L.icon}),s.jsx("div",{className:"text-[10px] text-center",children:L.name})]},L.slug))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(L=>s.jsx("button",{onClick:()=>te(L),className:`py-2 rounded-xl border ${H===L?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:L.charAt(0).toUpperCase()+L.slice(1)},L))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(L=>s.jsx("button",{onClick:()=>G(L),className:`py-2 rounded-xl border ${Y===L?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:L},L))})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>re(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:X,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}),k&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:L=>{L.target===L.currentTarget&&y(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:L=>L.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),s.jsx("button",{onClick:()=>y(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:am.map(L=>s.jsxs("button",{onClick:()=>{y(!1),V(L)},className:`bg-gradient-to-br ${L.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[s.jsx("div",{className:"text-3xl",children:L.icon}),s.jsx("div",{className:"text-sm font-bold text-white",children:L.name}),s.jsxs("div",{className:"text-xs text-white/80",children:[L.questions," questions"]})]},L.name))})]})}),b&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:L=>{L.target===L.currentTarget&&w(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:L=>L.stopPropagation(),children:[s.jsx("div",{className:"absolute inset-0 opacity-10",children:s.jsx("div",{className:"magic-gradient h-full"})}),s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),s.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[t.coins," Coins"]})]})]}),s.jsx("button",{onClick:()=>w(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),s.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),s.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),s.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),s.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[s.jsx("span",{children:"Next reward"}),s.jsxs("span",{children:[100-t.coins%100," coins to go"]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${t.coins%100}%`}})})]}),s.jsx("button",{onClick:()=>{w(!1),e("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})})]})]})}var yi={linear:function(e,t,n,r){var i=n-t;return i*e/r+t},easeInQuad:function(e,t,n,r){var i=n-t;return i*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){var i=n-t;return-i*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e+t},easeOutCubic:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,n,r){var i=n-t;return-i*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,r){var i=n-t;return-i*Math.cos(e/r*(Math.PI/2))+i+t},easeOutSine:function(e,t,n,r){var i=n-t;return i*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,n,r){var i=n-t;return-i/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,n,r){var i=n-t;return e==0?t:i*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(e,t,n,r){var i=n-t;return e==r?t+i:i*(-Math.pow(2,-10*e/r)+1)+t},easeInOutExpo:function(e,t,n,r){var i=n-t;return e===0?t:e===r?t+i:(e/=r/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,n,r){var i=n-t;return-i*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(e,t,n,r){var i=n-t;return i*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t)},easeOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r)===1?t+i:(a||(a=r*.3),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),o*Math.pow(2,-10*e)*Math.sin((e*r-l)*(2*Math.PI)/a)+i+t)},easeInOutElastic:function(e,t,n,r){var i=n-t,o,a,l;return l=1.70158,a=0,o=i,e===0?t:(e/=r/2)===2?t+i:(a||(a=r*(.3*1.5)),o<Math.abs(i)?(o=i,l=a/4):l=a/(2*Math.PI)*Math.asin(i/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*r-l)*(2*Math.PI)/a)*.5+i+t)},easeInBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*(e/=r)*e*((i+1)*e-i)+t},easeOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*((e=e/r-1)*e*((i+1)*e+i)+1)+t},easeInOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),(e/=r/2)<1?o/2*(e*e*(((i*=1.525)+1)*e-i))+t:o/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t},easeInBounce:function(e,t,n,r){var i=n-t,o;return o=yi.easeOutBounce(r-e,0,i,r),i-o+t},easeOutBounce:function(e,t,n,r){var i=n-t;return(e/=r)<1/2.75?i*(7.5625*e*e)+t:e<2/2.75?i*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?i*(7.5625*(e-=2.25/2.75)*e+.9375)+t:i*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,n,r){var i=n-t,o;return e<r/2?(o=yi.easeInBounce(e*2,0,i,r),o*.5+t):(o=yi.easeOutBounce(e*2-r,0,i,r),o*.5+i*.5+t)}},Tx=yi;function zx(e){return e*Math.PI/180}function gt(e,t){return e+Math.random()*(t-e)}function Lx(e,t){return Math.floor(e+Math.random()*(t-e+1))}var as;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(as||(as={}));var xn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(xn||(xn={}));const Mx=1e3/60;class Fx{constructor(t,n,r,i){this.getOptions=n;const{colors:o,initialVelocityX:a,initialVelocityY:l}=this.getOptions();this.context=t,this.x=r,this.y=i,this.w=gt(5,20),this.h=gt(5,20),this.radius=gt(5,10),this.vx=typeof a=="number"?gt(-a,a):gt(a.min,a.max),this.vy=typeof l=="number"?gt(-l,0):gt(l.min,l.max),this.shape=Lx(0,2),this.angle=zx(gt(0,360)),this.angularSpin=gt(-.2,.2),this.color=o[Math.floor(Math.random()*o.length)],this.rotateY=gt(0,1),this.rotationDirection=gt(0,1)?xn.Positive:xn.Negative}update(t){const{gravity:n,wind:r,friction:i,opacity:o,drawShape:a}=this.getOptions(),l=t/Mx;this.x+=this.vx*l,this.y+=this.vy*l,this.vy+=n*l,this.vx+=r*l,this.vx*=i**l,this.vy*=i**l,this.rotateY>=1&&this.rotationDirection===xn.Positive?this.rotationDirection=xn.Negative:this.rotateY<=-1&&this.rotationDirection===xn.Negative&&(this.rotationDirection=xn.Positive);const c=.1*this.rotationDirection*l;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,a&&typeof a=="function")a.call(this,this.context);else switch(this.shape){case as.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case as.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case as.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class Ix{constructor(t,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=i=>{this.particles.splice(i,1)},this.getParticle=()=>{const i=gt(this.x,this.w+this.x),o=gt(this.y,this.h+this.y);return new Fx(this.context,this.getOptions,i,o)},this.animate=i=>{const{canvas:o,context:a,particlesGenerated:l,lastNumberOfPieces:c}=this,{run:u,recycle:h,numberOfPieces:f,debug:p,tweenFunction:k,tweenDuration:y}=this.getOptions();if(!u)return!1;const j=this.particles.length,R=h?j:l;if(R<f){c!==f&&(this.tweenProgress=0,this.tweenFrom=R,this.lastNumberOfPieces=f),this.tweenProgress=Math.min(y,Math.max(0,this.tweenProgress+i));const x=k(this.tweenProgress,this.tweenFrom,f,y),m=Math.round(x-R);for(let v=0;v<m;v++)this.particles.push(this.getParticle());this.particlesGenerated+=m}p&&(a.font="12px sans-serif",a.fillStyle="#333",a.textAlign="right",a.fillText(`Particles: ${j}`,o.width-10,o.height-20));for(let x=this.particles.length-1;x>=0;x--){const m=this.particles[x];m.update(i),(m.y>o.height||m.y<-100||m.x>o.width+100||m.x<-100)&&(h&&R<=f?this.particles[x]=this.getParticle():this.removeParticleAt(x))}return j>0||R<f},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.getOptions=n}}const Ql={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:Tx.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class Ax{constructor(t,n){this.lastFrameTime=0,this.setOptionsWithDefaults=i=>{const o={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...o,...Ql,...i},Object.assign(this,i.confettiSource)},this.update=(i=0)=>{const{options:{run:o,onConfettiComplete:a,frameRate:l},canvas:c,context:u}=this,h=Math.min(i-this.lastFrameTime,50);if(l&&h<1e3/l){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=i-(l?h%l:0),o&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(h)?this.rafId=requestAnimationFrame(this.update):(a&&typeof a=="function"&&this.generator.particlesGenerated>0&&a.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.generator=new Ix(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(t){var i,o;const n=(i=this._options)==null?void 0:i.run,r=(o=this._options)==null?void 0:o.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&r===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&n===!1&&this.update()}}const Dx=ut.createRef();class ql extends ut.Component{constructor(t){super(t),this.canvas=ut.createRef(),this.canvas=t.canvasRef||Dx}componentDidMount(){if(this.canvas.current){const t=Bo(this.props)[0];this.confetti=new Ax(this.canvas.current,t)}}componentDidUpdate(){const t=Bo(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,n]=Bo(this.props),r={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return s.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...n,style:r})}}ql.defaultProps={...Ql};ql.displayName="ReactConfetti";function Bo(e){const t={},n={},r={},i=[...Object.keys(Ql),"confettiSource","drawShape","onConfettiComplete","frameRate"],o=["canvasRef"];for(const a in e){const l=e[a];i.includes(a)?t[a]=l:o.includes(a)?o[a]=l:r[a]=l}return[t,r,n]}const lm=ut.forwardRef((e,t)=>s.jsx(ql,{canvasRef:t,...e})),Ox=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Ft=Ox.slice(0,6),Yt=360/Ft.length,cm={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},Wt={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},dn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},Qt={get:(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}},Wn=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),pu=e=>(e%360+360)%360,Hl=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},br=(e,t=.7)=>{try{const n=new Audio(e);n.volume=t,n.play()}catch{}};function hu({onModeSelect:e,onNavigateHome:t}){return s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center mb-8",children:[s.jsx("button",{onClick:t,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"}),s.jsx("h1",{className:"flex-1 text-center text-xl font-bold mb-12",children:"Choose a quiz mode"})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[Ft.map((n,r)=>{const i=r*Yt,o=i+Yt,a=Yt>180?1:0,l=Math.PI*i/180,c=Math.PI*o/180,u=50+40*Math.cos(l),h=50-40*Math.sin(l),f=50+40*Math.cos(c),p=50-40*Math.sin(c);return s.jsx("path",{d:`M50,50 L${u},${h} A40,40 0 ${a} 0 ${f},${p} Z`,fill:n.color,stroke:"white",strokeWidth:"0.5"},r)}),s.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),s.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),s.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),s.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),s.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),s.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),s.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10 ",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💀"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-red-400 to-pink-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💰"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TREASURE MINE"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"📱"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function $x({run:e,coins:t,xp:n,level:r,ownedCharacters:i,onSpin:o,onBack:a,spinning:l,angle:c,transition:u,result:h,showCallout:f,glowColor:p,soundOn:k,setSoundOn:y,showSparkle:j,pulseIdx:R,nextProgressIdx:x,pendingProgressIdx:m,coinBurstTick:v,lastAnswerWasCorrect:S}){const _=100*r*(r-1),[M,N]=d.useState(!1),g=d.useRef(0),b=d.useRef(null),w=d.useRef(null),[C,F]=d.useState({dx:110,dy:-260});d.useEffect(()=>{if(m==null)return;N(!1);const I=setTimeout(()=>N(!0),30);return()=>clearTimeout(I)},[m]);const[W,J]=d.useState(!1);return d.useEffect(()=>{var Q,q,z,T;if(!v||!S||v===g.current)return;g.current=v;try{const E=(q=(Q=w==null?void 0:w.current)==null?void 0:Q.getBoundingClientRect)==null?void 0:q.call(Q),P=(T=(z=b==null?void 0:b.current)==null?void 0:z.getBoundingClientRect)==null?void 0:T.call(z);if(E&&P){const D=E.left+E.width/2,A=E.top+E.height/2,Z=P.left+P.width/2,ne=P.top+P.height/2;F({dx:Z-D,dy:ne-A})}}catch{}k&&br("/sounds/coin.mp3",.7),J(!0);const I=setTimeout(()=>J(!1),700);return()=>clearTimeout(I)},[v,k]),s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-8",children:[s.jsx("button",{onClick:a,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[s.jsxs("div",{className:"text-[11px]",children:["Lvl ",r," • ",n,"/",_]}),s.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:s.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(n/_,1)*100}%`}})})]}),s.jsxs("button",{ref:b,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),s.jsx("button",{onClick:()=>y(!k),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:s.jsx("span",{className:"text-lg",children:k?"🔊":"🔇"})})]}),i.length>0&&s.jsx("div",{className:"flex justify-center mb-6",children:s.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:i.map(I=>{const Q=Ft.find(z=>Wn(z.name)===I),q=cm[I];return s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:s.jsx("span",{className:"text-sm",children:Q==null?void 0:Q.icon})}),s.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:q})]},I)})})}),s.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:s.jsxs("div",{className:"w-80 max-w-full",children:[s.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),s.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(I=>{const Q=["#FF9800","#FFC107","#cadd75ff"],q=!!e.progress[I];return s.jsxs("div",{className:"relative h-full bg-white/10",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:q?I===m?M?"100%":"0%":x===I&&m==null?"0%":"100%":"0%",backgroundColor:Q[I],transition:I===m?"width 1200ms ease-out":"none"}}),R===I&&s.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:s.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),j===I&&s.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},I)})},e.qIndex)]})}),s.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:s.jsxs("div",{ref:w,className:"relative w-96 h-96 rounded-full select-none",children:[p&&s.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${p}40, 0 0 40px 12px ${p}60`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Ft.map((I,Q)=>{const q=Q*Yt,z=q+Yt,T=Yt>180?1:0,E=Math.PI*q/180,P=Math.PI*z/180,D=50+45*Math.cos(E),A=50-45*Math.sin(E),Z=50+45*Math.cos(P),ne=50-45*Math.sin(P),re=q+Yt/2,ue=28,O=50+ue*Math.cos(re*Math.PI/180),H=50-ue*Math.sin(re*Math.PI/180);return s.jsxs("g",{children:[s.jsx("path",{d:`M50,50 L${D},${A} A45,45 0 ${T} 0 ${Z},${ne} Z`,fill:I.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),s.jsx("text",{x:O,y:H,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:I.icon})]},Q)}),s.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),s.jsx("button",{onClick:o,disabled:l,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${l?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:s.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:s.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),f&&h&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:s.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[s.jsx("span",{className:"mr-2",children:h.cat.icon}),h.cat.name]})}),W&&s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(I=>s.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${I*80}ms forwards`,"--coin-dx":`${C.dx}px`,"--coin-dy":`${C.dy}px`},children:s.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},I))]})]})}),s.jsx("div",{className:"text-center",children:s.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}function xu({category:e,onComplete:t,isBonus:n=!1,soundOn:r=!0}){return d.useEffect(()=>{r&&br("/sounds/flush.mp3",.8);const i=setTimeout(t,1e3);return Hl([50]),()=>clearTimeout(i)},[t,r]),n?s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[s.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),s.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:s.jsx("span",{className:"text-6xl",children:"⭐"})})]}):s.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:s.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[s.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[s.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),s.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),s.jsxs("div",{className:"relative z-10 text-center",children:[s.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),s.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:s.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function Bx({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:s.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function gu({question:e,category:t,onAnswer:n,run:r,timeLeft:i,usedLifelines:o,onUseLifeline:a,eliminatedOptions:l,audienceData:c,onBack:u,timeUp:h,onTimeUpBackToWheel:f,soundOn:p}){const[k,y]=d.useState(null),[j,R]=d.useState(!1),[x,m]=d.useState(!1),v=d.useRef(null),S=d.useRef(null),[_,M]=d.useState(null);d.useEffect(()=>{if(!j||!v.current)return;const b=v.current.getBoundingClientRect();M({x:b.left,y:b.top-300,w:b.width,h:8})},[j]);const N=b=>{if(j)return;y(b),R(!0);const w=b===e.correctIndex;Hl(w?[50,30,50]:[200]),p&&br(w?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{n(w,null)},1500)},g=k===e.correctIndex;return s.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:s.jsxs("div",{ref:S,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsx("div",{className:"mb-4",children:s.jsx("button",{onClick:()=>m(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),s.jsxs("div",{className:"text-center mb-6",children:[s.jsx("div",{className:`text-4xl font-black mb-2 ${i<=10?"text-red-400 animate-pulse":"text-white"}`,children:i}),s.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:s.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${i<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${i/30*100}%`}})})]}),s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),s.jsxs("div",{children:[s.jsx("div",{className:"text-lg font-bold",children:t.name}),s.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",r.qIndex+1,"/3"]})]})]}),s.jsx("h2",{ref:v,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),s.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((b,w)=>{const C=l.includes(w),F=k===w,W=w===e.correctIndex;let J="bg-white/10 border-white/20",I="opacity-100";return C?I="opacity-30":j&&F?J=W?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&W?J="bg-green-500/30 border-green-400":F&&(J="bg-white/20 border-white/40"),s.jsx("button",{onClick:()=>N(w),disabled:j||C,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${J} ${I} ${!j&&!C?"hover:bg-white/15 active:scale-98":""}`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+w)}),s.jsx("span",{className:"font-medium flex-1",children:b}),c&&s.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[w]),"%"]})]})},w)})}),!j&&s.jsxs("div",{className:"flex gap-4 mb-8",children:[s.jsx("button",{onClick:()=>a("fifty"),disabled:o.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),s.jsx("button",{onClick:()=>a("audience"),disabled:o.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&s.jsxs("div",{className:"relative text-center",children:[g&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:s.jsx(lm,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:_||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),s.jsx("button",{onClick:()=>n(g,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),h&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Time’s up"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),s.jsx("button",{onClick:f,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),x&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You’ll lose this question’s progress."}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),s.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Ux({onSelect:e}){return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[s.jsxs("header",{className:"text-center mb-12",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),s.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),s.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-6",children:Ft.map(t=>{const n=cm[Wn(t.name)];return s.jsxs("button",{onClick:()=>e(Wn(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[s.jsx("div",{className:"text-4xl mb-3",children:t.icon}),s.jsx("div",{className:"font-black text-lg mb-1",children:n}),s.jsx("div",{className:"text-sm opacity-75",children:t.name})]},Wn(t.name))})})]})})}function Wx(){const[e,t]=d.useState("modes"),n=at(),r=Bt(),[i,o]=d.useState(()=>Qt.get(Wt.COINS,0)),[a,l]=d.useState(()=>Qt.get(Wt.XP,0)),[c,u]=d.useState(()=>Qt.get(Wt.LEVEL,1)),[h,f]=d.useState(()=>Qt.get(Wt.OWNED_CHARACTERS,[])),[p,k]=d.useState(()=>Qt.get(Wt.SOUND,!0)),[y,j]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[R,x]=d.useState([]),[m,v]=d.useState(null),[S,_]=d.useState(null),[M,N]=d.useState(30),[g,b]=d.useState([]),[w,C]=d.useState(null),[F,W]=d.useState(null),[J,I]=d.useState(!1),[Q,q]=d.useState(0),[z,T]=d.useState("none"),[E,P]=d.useState(!1),[D,A]=d.useState(null),[Z,ne]=d.useState(!1),[re,ue]=d.useState(null),[O,H]=d.useState(-1),[te,Y]=d.useState(0),[G,ie]=d.useState(null),[$,B]=d.useState(null),[V,ae]=d.useState(!1),[X,se]=d.useState(null),[L,ee]=d.useState(-1),[ce,ve]=d.useState([!1,!1,!1]),[me,Fe]=d.useState(!1),[we,Ie]=d.useState(!1),Le=d.useRef(null),Ge=d.useRef(null),lt=d.useRef(null),ct=d.useMemo(()=>{var oe;return((oe=window.matchMedia)==null?void 0:oe.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>{try{localStorage.setItem("qp_in_question",JSON.stringify(e==="question"))}catch{}return()=>{try{localStorage.removeItem("qp_in_question")}catch{}}},[e]),d.useEffect(()=>(tt(),Xt(),()=>Kn()),[]),d.useEffect(()=>Qt.set(Wt.COINS,i),[i]),d.useEffect(()=>Qt.set(Wt.XP,a),[a]),d.useEffect(()=>Qt.set(Wt.LEVEL,c),[c]),d.useEffect(()=>Qt.set(Wt.OWNED_CHARACTERS,h),[h]),d.useEffect(()=>Qt.set(Wt.SOUND,p),[p]),d.useEffect(()=>(e==="question"&&M>0&&!we?Le.current=setTimeout(()=>{N(oe=>{const pe=oe-1;return pe===10&&p&&br("/sounds/tick.mp3",.8),pe})},1e3):e==="question"&&M===0&&I(!0),()=>{Le.current&&clearTimeout(Le.current)}),[e,M,p,we]),d.useEffect(()=>{if(e!=="wheel"||G==null)return;H(G),p&&br("/sounds/progress.mp3",.6),ee(G);const oe=setTimeout(()=>ee(-1),900),pe=setTimeout(()=>H(-1),900),We=setTimeout(()=>{X&&(X==="streakFlash"?t("streakFlash"):X==="characterPicker"?t("characterPicker"):(t("modes"),le()),se(null)),ie(null)},1800);return()=>{clearTimeout(oe),clearTimeout(pe),clearTimeout(We)}},[e,G,X,p,me]),d.useEffect(()=>{e!=="wheel"||!me||(Y(oe=>oe+1),Fe(!1))},[e,me]);const tt=async()=>{try{const pe=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:We}=uo.parse(pe,{header:!0,skipEmptyLines:!0,transformHeader:ge=>ge.trim().toLowerCase()}),Te=We.map((ge,nt)=>{var Ms;const Xe=[ge.option1,ge.option2,ge.option3,ge.option4].map(fo=>(fo||"").trim()).filter(Boolean);if(Xe.length<4)return null;let Mn={a:0,b:1,c:2,d:3}[(Ms=ge.answer)==null?void 0:Ms.toLowerCase()];return Mn===void 0&&(Mn=Xe.findIndex(fo=>fo.toLowerCase()===(ge.answer||"").toLowerCase())),Mn===-1&&(Mn=0),{id:ge.id||`q_${nt}`,prompt:(ge.question||"").trim(),options:Xe,correctIndex:Mn,category:(ge.category||ge.subject||"general knowledge").trim(),difficulty:(ge.difficulty||"medium").toLowerCase(),explanation:(ge.explanation||"").trim()}}).filter(Boolean);x(Te)}catch(oe){console.error("Failed to load questions:",oe),x([])}},Xt=()=>{const oe=new Audio("/sounds/spin.mp3");oe.loop=!0,oe.volume=.6,Ge.current=oe},Kn=()=>{if(Le.current&&clearTimeout(Le.current),lt.current&&(clearTimeout(lt.current),lt.current=null),Ge.current){try{Ge.current.pause()}catch{}Ge.current=null}},Mr=()=>{if(p&&Ge.current){try{Ge.current.currentTime=0,Ge.current.play()}catch{}lt.current&&clearTimeout(lt.current),lt.current=setTimeout(()=>{fe()},2e3)}},fe=()=>{if(lt.current&&(clearTimeout(lt.current),lt.current=null),Ge.current)try{Ge.current.pause(),Ge.current.currentTime=0}catch{}},le=()=>{j({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),ve([!1,!1,!1]),v(null),_(null),W(null),b([]),C(null),I(!1),Y(0)},xe=()=>{if(E)return;A(null),ne(!1),ue(null),P(!0),Mr();const oe=Math.floor(Math.random()*Ft.length),pe=Ft[oe],We=pu(Q),Te=oe*Yt+Yt/2,ge=(Math.random()-.5)*(Yt*.3),nt=360-Te+ge;let Xe=pu(nt-We);const Fr=dn.FULL_TURNS*360+Xe,Mn=Q+Fr+dn.OVERSHOOT;T(`transform ${ct?1e3:dn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),q(Mn),Hl([20,50,20]),setTimeout(()=>{T(`transform ${ct?200:dn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),q(Ms=>Ms-dn.OVERSHOOT)},ct?1e3:dn.DURATION),setTimeout(()=>{fe(),P(!1),A({cat:pe,index:oe}),_(pe),ue(pe.color),ne(!0),setTimeout(()=>{ne(!1),t("interstitial")},1500),setTimeout(()=>ue(null),1e3)},(ct?1e3:dn.DURATION)+(ct?200:dn.SETTLE_DURATION)+100)},Ne=()=>{const oe=R.filter(We=>{const Te=We.category.toLowerCase(),ge=S.name.toLowerCase();return Te.includes(ge)||ge.includes(Te)});let pe;oe.length>0?pe=oe[Math.floor(Math.random()*oe.length)]:pe=R[Math.floor(Math.random()*R.length)],pe?(v(pe),N(30),b([]),C(null),I(!1),Ie(!1),t("question")):t("wheel")},Oe=(oe,pe,We=!1)=>{if(!We){Ie(!0);return}const Te=y.qIndex,ge=[...y.progress];ge[Te]=!0;const nt=[...ce];if(nt[Te]=!!oe,ve(nt),j(Xe=>({...Xe,progress:ge,qIndex:Xe.qIndex+1})),oe&&(o(Xe=>Xe+5),l(Xe=>Xe+1),Fe(!0)),B(Te),ae(!!oe),Te===2){const Xe=nt.every(Boolean);se(Xe?"streakFlash":"modes")}else se(null);t("wheel")},$e=oe=>{if(!(y.lifelines[oe]||!m)){if(j(pe=>({...pe,lifelines:{...pe.lifelines,[oe]:!0}})),oe==="fifty"){const We=m.options.map((Te,ge)=>ge).filter(Te=>Te!==m.correctIndex).slice(0,2);b(We)}else if(oe==="audience"){const pe=40+Math.random()*25;let We=100-pe;const Te=[0,0,0,0];Te[m.correctIndex]=Math.round(pe);const ge=[0,1,2,3].filter(nt=>nt!==m.correctIndex);ge.forEach((nt,Xe)=>{if(Xe===ge.length-1)Te[nt]=We;else{const Fr=Math.floor(Math.random()*We);Te[nt]=Fr,We-=Fr}}),C(Te)}}},xt=oe=>{W(oe),t("bonusInterstitial")},Jn=oe=>{oe&&F&&(f(pe=>[...new Set([...pe,F])]),p&&br("/sounds/coin.mp3",1)),setTimeout(()=>{t("modes"),le()},3e3)},Ls=oe=>{oe==="classic"&&(le(),t("wheel"))},Vl=()=>{window.location.href="/",console.log("Navigate to home")},pm=()=>{t("modes"),le()},hm=()=>{t("wheel")};switch(d.useEffect(()=>{if(e!=="wheel"||$==null)return;const pe=setTimeout(()=>{ie($),B(null)},V?1800:0);return()=>clearTimeout(pe)},[e,$,V]),d.useEffect(()=>{const oe=new URLSearchParams(r.search);(oe.get("view")==="modes"||oe.get("view")==="home")&&(le(),t("modes"),n("/play",{replace:!0}))},[r.search]),e){case"modes":return s.jsx(hu,{onModeSelect:Ls,onNavigateHome:Vl});case"wheel":return s.jsx($x,{run:y,coins:i,xp:a,level:c,ownedCharacters:h,onSpin:xe,onBack:pm,spinning:E,angle:Q,transition:z,result:D,showCallout:Z,glowColor:re,soundOn:p,setSoundOn:k,showSparkle:O,pulseIdx:L,coinBurstTick:te,pendingProgressIdx:G,lastAnswerWasCorrect:V,nextProgressIdx:$});case"interstitial":return s.jsx(xu,{category:S,onComplete:Ne,soundOn:p});case"streakFlash":return s.jsx(Bx,{onDone:()=>t("bonusInterstitial")});case"question":return s.jsx(gu,{question:m,category:S,onAnswer:Oe,run:y,timeLeft:M,usedLifelines:y.lifelines,onUseLifeline:$e,eliminatedOptions:g,audienceData:w,onBack:hm,timeUp:J,onTimeUpBackToWheel:()=>{I(!1),t("wheel")},soundOn:p});case"characterPicker":return s.jsx(Ux,{onSelect:xt});case"bonusInterstitial":return s.jsx(xu,{category:Ft.find(oe=>Wn(oe.name)===F),onComplete:()=>t("bonusQuestion"),isBonus:!0,soundOn:p});case"bonusQuestion":if(!m){const oe=Ft.find(pe=>Wn(pe.name)===F);if(oe&&R.length>0){const pe=R.filter(Te=>{const ge=Te.category.toLowerCase(),nt=oe.name.toLowerCase();return ge.includes(nt)||nt.includes(ge)}),We=pe.length>0?pe[Math.floor(Math.random()*pe.length)]:R[Math.floor(Math.random()*R.length)];v(We),N(30)}return s.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:s.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return s.jsx(gu,{question:m,category:Ft.find(oe=>Wn(oe.name)===F)||Ft[0],onAnswer:Jn,run:{...y,lifelines:{fifty:!0,audience:!0}},timeLeft:M,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:()=>t("modes")});default:return s.jsx(hu,{onModeSelect:Ls,onNavigateHome:Vl})}}const Qx=({session:e,mode:t,category:n,difficulty:r,timerConfig:i,onComplete:o,onQuit:a})=>{const[l,c]=d.useState(0),[u,h]=d.useState([]),[f,p]=d.useState([]),[k,y]=d.useState([]),[j,R]=d.useState(!1),[x,m]=d.useState(null),[v,S]=d.useState(Date.now()),[_,M]=d.useState(!1),[N,g]=d.useState(!1),[b,w]=d.useState({}),[C,F]=d.useState({}),[W,J]=d.useState([]);d.useState(!0);const[I,Q]=d.useState(!1),[q,z]=d.useState(!1),[T,E]=d.useState(""),[P,D]=d.useState(!1),[A,Z]=d.useState(!1),[ne,re]=d.useState(!0),[ue,O]=d.useState(0),[H,te]=d.useState(0),[Y,G]=d.useState(0),[ie,$]=d.useState(null),B=d.useRef(null),V=d.useRef(null),ae=t==="practice",X=u[l],se=fe=>{try{const le=new Audio(fe);le.volume=.6,le.play()}catch{console.log("Sound not available:",fe)}},L=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],ee=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:L,ce=ee[l]||ee[0]||L[0],ve=ee.length;d.useEffect(()=>{ee.length>0&&(h(new Array(ee.length).fill(null)),p(new Array(ee.length).fill(!1)),J(new Array(ee.length).fill(!1)),y(new Array(ee.length).fill((i==null?void 0:i.seconds)||45)))},[ee.length,i==null?void 0:i.seconds]);const me=()=>{if(_){E("Once per quiz"),setTimeout(()=>E(""),1e3);return}if(X!==null){E("Already answered"),setTimeout(()=>E(""),1e3);return}if(!ce)return;const le=[0,1,2,3].filter(xe=>xe!==ce.answerIndex).sort(()=>Math.random()-.5).slice(0,2);w({...b,[l]:le}),M(!0)},Fe=()=>{if(N){E("Once per quiz"),setTimeout(()=>E(""),1e3);return}if(X!==null){E("Already answered"),setTimeout(()=>E(""),1e3);return}if(!ce)return;const fe=ce.answerIndex,le=[0,0,0,0],xe=40+Math.floor(Math.random()*31);le[fe]=xe;let Ne=100-xe;const Oe=[0,1,2,3].filter($e=>$e!==fe);for(let $e=0;$e<Oe.length-1;$e++){const xt=Math.min(Ne-(Oe.length-1-$e),Ne/2),Jn=Math.floor(Math.random()*(xt+1));le[Oe[$e]]=Jn,Ne-=Jn}le[Oe[Oe.length-1]]=Ne,F({...C,[l]:le}),g(!0)},we=d.useCallback((fe,le)=>{if(!ce||ae&&W[l]||b[l]&&b[l].includes(fe))return;const xe=[...u];if(xe[l]=u[l]===fe?null:fe,h(xe),S(Date.now()),xe[l]!==null&&(re(!1),clearInterval(V.current)),xe[l]===ce.answerIndex){const Ne=Y+1;G(Ne),O($e=>$e+1);const Oe=10*Ne;te($e=>$e+Oe),se("/sounds/correct.mp3"),setTimeout(()=>se("/sounds/coin.mp3"),500),Z(!0),setTimeout(()=>Z(!1),2e3),$({type:"correct",stars:1,coins:Oe}),setTimeout(()=>$(null),2e3)}else xe[l]!==null&&(G(0),se("/sounds/wrong.mp3"));if(xe[l]!==null&&f[l]){const Ne=[...f];Ne[l]=!1,p(Ne)}ae&&xe[l]!==null&&(D(!0),J(Ne=>{const Oe=[...Ne];return Oe[l]=!0,Oe})),!ae&&xe[l]!==null&&(clearTimeout(B.current),B.current=setTimeout(()=>{l<ve-1?Le():(Q(!0),R(!0))},5e3))},[ce,ae,W,l,u,f,ve,Y,b]),Ie=()=>{S(Date.now()),l>0&&(clearInterval(V.current),re(!1),c(fe=>fe-1),D(!1),ae&&u[l-1]!==null&&setTimeout(()=>D(!0),100))},Le=()=>{if(S(Date.now()),clearInterval(V.current),X===null){const fe=[...f];fe[l]=!0,p(fe),G(0)}re(!1),D(!1),l<ve-1?(c(fe=>fe+1),ae&&u[l+1]!==null?setTimeout(()=>D(!0),100):setTimeout(()=>re(!0),100)):Q(!0)},Ge=()=>{S(Date.now());const fe=[...f];fe[l]=!0,p(fe),G(0),Le()},lt=()=>{const fe=ee.reduce((le,xe,Ne)=>le+(u[Ne]===xe.answerIndex?1:0),0);o&&o({questions:ee,answers:u,skipped:f,correct:fe,total:ve,mode:t,category:n,difficulty:r,earnedStars:ue,earnedCoins:H,finalStreak:Y})};d.useEffect(()=>{if(!(j||x!==null||I||!ne||u[l]!==null))return V.current=setInterval(()=>{y(fe=>{const le=[...fe],xe=le[l];return xe<=1?(clearInterval(V.current),l===ve-1?(Date.now()-v>=5e3&&Q(!0),le):(m(l),le)):(le[l]=xe-1,le)})},1e3),()=>clearInterval(V.current)},[j,x,l,I,ve,ne,u,v]),d.useEffect(()=>{u[l]===null&&!I&&!x?re(!0):re(!1)},[l,u,I,x]);const ct=fe=>{const le=Math.floor(fe/60),xe=fe%60;return`${le}:${xe.toString().padStart(2,"0")}`},tt=(l+1)/ee.length*100,Xt=u.filter(fe=>fe!==null).length,Kn=f.filter(Boolean).length,Mr=k[l]||0;return s.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[ie&&s.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:s.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",ie.coins," Coins!"]})}),A&&s.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(5)].map((fe,le)=>s.jsx("div",{className:"absolute text-2xl animate-ping",style:{left:`${-20+Math.random()*40}px`,top:`${-20+Math.random()*40}px`,animationDelay:`${le*100}ms`,animationDuration:"1s"},children:"🪙"},le))}),s.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-gray-800/50 backdrop-blur-sm flex-shrink-0",children:[s.jsxs("button",{onClick:()=>z(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),s.jsx("span",{className:"font-medium",children:"Back"})]}),s.jsx("div",{className:"flex-1"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[s.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),s.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:H})]}),s.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[s.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),s.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:Y})]}),s.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${Mr<=10?"bg-red-600/20 text-red-400 animate-pulse":Mr<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:ct(Mr)})]})]}),s.jsxs("div",{className:"px-4 pb-1 flex-shrink-0",children:[s.jsxs("div",{className:"flex justify-between items-center mb-1",children:[s.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",l+1," of ",ve]}),s.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(tt),"% Complete"]})]}),s.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${tt}%`}})}),s.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:ve}).map((fe,le)=>s.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${le===l?"bg-white scale-125":u[le]!==null?"bg-green-500":f[le]?"bg-yellow-500":"bg-gray-600"}`},le))}),s.jsx("div",{className:"text-center mt-4",children:s.jsx("span",{className:"text-xs text-gray-500",children:ce.category})})]}),s.jsxs("div",{className:`flex-1 px-4 flex flex-col ${P?"overflow-y-auto pb-28":"overflow-hidden"}`,children:[s.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-8 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[s.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),s.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),s.jsxs("div",{className:"relative text-center",children:[s.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",l+1]}),s.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:ce.prompt}),ce.difficulty&&s.jsx("div",{className:"mt-3 inline-block",children:s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${ce.difficulty==="easy"?"bg-green-500/20 text-green-300":ce.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:ce.difficulty.toUpperCase()})})]})]}),s.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:ce.options.map((fe,le)=>{const xe=X===le,Ne=le===ce.answerIndex,Oe=ae&&X!==null||P,$e=b[l]&&b[l].includes(le);let xt="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";$e?xt+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(xt+="cursor-pointer ",Oe?xe&&Ne?xt+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":xe&&!Ne?xt+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!xe&&Ne?xt+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":xt+="bg-gray-700 border-gray-600 text-gray-400":xe?xt+="bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/25":xt+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const Jn=["🅰️","🅱️","🅲️","🅳️"];return s.jsx("button",{onClick:Ls=>we(le,Ls),disabled:ae&&W[l],className:xt,children:s.jsxs("div",{className:"flex items-center gap-2 w-full",children:[s.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:Jn[le]}),s.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:fe}),C[l]&&C[l][le]>0&&!$e&&s.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[C[l][le],"%"]}),Oe&&xe&&Ne&&!$e&&s.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),Oe&&xe&&!Ne&&!$e&&s.jsx("div",{className:"text-lg",children:"😔"}),Oe&&!xe&&Ne&&!$e&&s.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},le)})}),ae&&P&&X!==null&&s.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:s.jsxs("div",{className:"flex gap-3",children:[s.jsx("div",{className:"text-lg flex-shrink-0",children:X===ce.answerIndex?"🎊":"💡"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h4",{className:`font-semibold mb-3 text-sm ${X===ce.answerIndex?"text-green-400":"text-blue-400"}`,children:X===ce.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),ce.explanation&&s.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:ce.explanation})]})]})})]}),s.jsxs("div",{className:`bg-gray-800/90 backdrop-blur-sm p-2 z-50 ${P?"fixed bottom-0 left-0 right-0":"flex-shrink-0"}`,children:[!ae&&s.jsxs("div",{className:"flex justify-center gap-2 mb-2",children:[s.jsxs("button",{onClick:me,disabled:X!==null,className:`${_?"bg-gray-700/50 text-gray-500/50":"bg-orange-600 hover:bg-orange-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-xs`,children:[s.jsx("span",{children:"⚡"}),"50:50"]}),s.jsxs("button",{onClick:Fe,disabled:X!==null,className:`${N?"bg-gray-700/50 text-gray-500/50":"bg-purple-600 hover:bg-purple-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-xs`,children:[s.jsx("span",{children:"👥"}),"Ask Friends"]})]}),s.jsxs("div",{className:"flex gap-2 mb-2",children:[s.jsx("button",{onClick:Ie,disabled:l===0,className:"flex-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 py-2 rounded-lg font-medium transition-colors text-sm",children:"Previous"}),s.jsx("button",{onClick:Ge,disabled:X!==null,className:"flex-1 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-800 py-2 rounded-lg font-medium transition-colors text-xs",children:"Skip"}),s.jsx("button",{onClick:Le,className:"flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium transition-colors text-xs",children:l===ve-1?"Finish":"Next"})]}),s.jsx("button",{onClick:()=>Q(!0),className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-2.5 rounded-lg font-medium transition-colors text-sm",children:"Submit"})]}),q&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>z(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),s.jsx("button",{onClick:a,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),I&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),s.jsxs("p",{className:"text-gray-400 mb-4",children:[Xt," of ",ve," answered • ",Kn," skipped"]}),s.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:s.jsxs("div",{className:"flex justify-center gap-6",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),s.jsx("div",{className:"text-yellow-400 font-bold",children:ue}),s.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),s.jsx("div",{className:"text-yellow-400 font-bold",children:H}),s.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>{Q(!1),m(null),S(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),s.jsx("button",{onClick:lt,className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),x===l&&!I&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),s.jsx("button",{onClick:()=>{m(null),S(Date.now()),l<ee.length-1?Le():Q(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:l<ee.length-1?"Continue":"See Results"})]})}),T&&s.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:T})]})},qx=2,Hx=5,Yx=({results:e,onRetake:t,onReview:n,isRetake:r=!1,isPractice:i=!1})=>{const o=at(),{xp:a,coins:l,level:c,combo:u,addXP:h,addCoins:f,updateCombo:p,nextThreshold:k,levelProgress:y}=Yl(),[j,R]=d.useState(!0),[x,m]=d.useState(null),[v,S]=d.useState(0),[_,M]=d.useState(0),[N,g]=d.useState(!1),b=d.useRef(null),{correct:w,total:C,category:F,mode:W,elapsedMs:J}=e,I=C?Math.round(w/C*100):0;d.useEffect(()=>{if(i||r){R(!1);return}const z=w*Hx;let T=1;I===100?(T=1.5,p(u+1)):I>=80?T=1.2:p(0);const E=Math.floor(z*T),P=E*qx;m({coins:E,xp:P,bonusApplied:T>1}),g(!0),setTimeout(()=>g(!1),180);const D=1e3,A=performance.now();let Z;const ne=re=>{const ue=Math.min(1,(re-A)/D),O=1-Math.pow(1-ue,3);S(Math.round(w*O)),M(Math.round(E*O)),ue<1&&(Z=requestAnimationFrame(ne))};return S(0),M(0),Z=requestAnimationFrame(ne),()=>cancelAnimationFrame(Z)},[w,I,i,r,u,p]);const Q=()=>{x&&(h(x.xp),f(x.coins),m(z=>({...z,awarded:!0})))};d.useEffect(()=>{if(!j||x&&!x.awarded)return;const z=setTimeout(()=>R(!1),2e3);return()=>clearTimeout(z)},[j,x]);const q=z=>{const T=Math.floor(z/1e3),E=Math.floor(T/60),P=T%60;return`${E.toString().padStart(2,"0")}:${P.toString().padStart(2,"0")}`};return j&&!i&&!r?s.jsxs(s.Fragment,{children:[x&&x.coins>0&&!x.awarded&&s.jsx(im,{targetRef:b,count:Math.min(28,Math.max(12,Math.round(x.coins/2))),onDone:Q}),s.jsxs("div",{className:"mt-3 flex items-center justify-end gap-2 px-3",children:[s.jsxs("div",{className:"px-3 py-1 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-xs",children:["Level ",c]}),s.jsxs("div",{ref:b,className:"px-3 py-1 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-xs",children:[l," coins"]})]}),s.jsxs("div",{className:"relative mt-4 card rounded-3xl p-8 text-center overflow-hidden",style:{animation:"popIn 380ms ease-out"},children:[N&&s.jsx("div",{className:"absolute inset-0 bg-white/70 pointer-events-none rounded-3xl"}),s.jsx("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:s.jsx("div",{className:"h-full w-1/3 -skew-x-12 bg-white/10 blur-md",style:{animation:"shine 900ms ease-out forwards 120ms"}})}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"text-3xl md:text-4xl font-extrabold mb-2",children:"Rewards"}),s.jsxs("div",{className:"text-sm text-base-muted mb-6",children:[F," • ",W==="practice"?"Practice":"Quiz"]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto",children:[s.jsxs("div",{className:"rounded-2xl border border-base-border bg-white/5 p-5",children:[s.jsx("div",{className:"text-base-muted text-sm",children:"Correct answers"}),s.jsx("div",{className:"text-5xl font-black mt-1",children:v})]}),s.jsxs("div",{className:"rounded-2xl border border-base-border bg-white/5 p-5",children:[s.jsx("div",{className:"text-base-muted text-sm",children:"Coins"}),s.jsx("div",{className:"text-5xl font-black mt-1",children:_}),s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:[w," × 5",(x==null?void 0:x.bonusApplied)&&" (+ bonus)"]})]})]}),u>0&&s.jsxs("div",{className:"mt-4 text-sm text-yellow-400",children:["🔥 Combo streak: ",u]}),s.jsxs("div",{className:"mt-6 text-xs text-base-muted",children:["Finalizing… ",s.jsx("span",{className:"animate-pulse",children:"•••"})]})]})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mt-3 flex items-center justify-between px-3",children:[s.jsx("button",{onClick:()=>o("/"),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm",children:"← Home"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("div",{className:"px-3 py-1 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-xs",children:["Level ",c]}),s.jsxs("div",{className:"px-3 py-1 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-xs",children:[l," coins"]})]})]}),s.jsxs("div",{className:"mt-4 card rounded-3xl p-5 text-center",children:[s.jsx("h2",{className:"text-xl font-semibold mb-1",children:"Results"}),s.jsxs("div",{className:"text-sm text-base-muted mb-4",children:[F," • ",W==="practice"?"Practice":"Quiz"]}),i&&s.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/30",children:[s.jsx("div",{className:"text-green-400 text-sm",children:"📚 Practice Mode - No rewards earned"}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Great for learning! Switch to Quiz mode to earn XP and coins."})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-5",children:[s.jsxs("div",{className:"rounded-xl border border-base-border bg-white/5 p-3",children:[s.jsx("div",{className:"text-xs text-base-muted",children:"Score"}),s.jsxs("div",{className:"text-lg font-semibold",children:[w,"/",C]})]}),s.jsxs("div",{className:"rounded-xl border border-base-border bg-white/5 p-3",children:[s.jsx("div",{className:"text-xs text-base-muted",children:"Accuracy"}),s.jsxs("div",{className:"text-lg font-semibold",children:[I,"%"]})]}),s.jsxs("div",{className:"rounded-xl border border-base-border bg-white/5 p-3",children:[s.jsx("div",{className:"text-xs text-base-muted",children:"Time"}),s.jsx("div",{className:"text-lg font-semibold",children:q(J)})]})]}),u>0&&!i&&s.jsxs("div",{className:"mb-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 p-3",children:[s.jsxs("div",{className:"text-yellow-400",children:["🔥 Combo Streak: ",u,I===100&&" - Perfect Score!"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Keep scoring above 80% to maintain your streak"})]}),s.jsx(Vx,{category:F}),s.jsxs("div",{className:"mt-5 space-y-3",children:[s.jsxs("div",{className:"flex gap-2 justify-center",children:[s.jsx("button",{className:"flex-1 max-w-[140px] py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-sm",onClick:n,children:"Review Answers"}),s.jsx("button",{className:"flex-1 max-w-[140px] py-3 rounded-2xl border border-white/20 text-white font-medium text-sm",onClick:t,children:i?"Practice Again":"Retake Quiz"})]}),s.jsxs("div",{className:"flex gap-2 justify-center",children:[s.jsx("button",{className:"flex-1 max-w-[140px] py-2.5 rounded-xl border border-white/20 bg-white/5 text-white text-sm",onClick:()=>o("/profile/history"),children:"History"}),s.jsx("button",{className:"flex-1 max-w-[140px] py-2.5 rounded-xl border border-white/20 bg-white/5 text-white text-sm",onClick:()=>o("/"),children:"Home"})]})]})]}),s.jsx(Gx,{onReview:n})]})},Vx=({category:e})=>{const[t,n]=d.useState(null);return d.useEffect(()=>{var r;try{const i=localStorage.getItem("qp_stats");if(i){const a=((r=JSON.parse(i).sessions)==null?void 0:r.filter(l=>l.cat===e))||[];if(a.length>0){const l=a.slice(-7),c=Math.round(l.reduce((u,h)=>u+h.correct/h.total*100,0)/l.length);n({avgAccuracy:c,totalSessions:a.length,lastSession:a[a.length-1]})}}}catch(i){console.error("Error loading stats:",i)}},[e]),t?s.jsx("div",{className:"rounded-xl border border-base-border bg-white/5 p-3 text-left",children:s.jsxs("ul",{className:"list-disc list-inside text-xs text-base-muted space-y-1",children:[s.jsxs("li",{children:["Avg. accuracy (last 7): ",s.jsxs("b",{children:[t.avgAccuracy,"%"]})]}),s.jsxs("li",{children:["Total sessions: ",s.jsx("b",{children:t.totalSessions})]}),s.jsxs("li",{children:["Last score: ",s.jsxs("b",{children:[t.lastSession.correct,"/",t.lastSession.total]})]})]})}):null},Gx=({onReview:e})=>{const[t,n]=d.useState([]);return d.useEffect(()=>{try{const r=localStorage.getItem("qp_recent");if(r){const i=JSON.parse(r);n(i.slice(0,5))}}catch(r){console.error("Error loading recent quizzes:",r)}},[]),t.length===0?null:s.jsxs("div",{className:"mt-4 card rounded-3xl p-5",children:[s.jsx("h3",{className:"text-base font-semibold mb-3",children:"Recent Quizzes"}),s.jsx("div",{className:"space-y-2",children:t.map(r=>s.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-white/10 last:border-0",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"text-sm",children:r.cat}),s.jsxs("div",{className:"text-xs text-base-muted",children:[r.correct,"/",r.total," • ",Math.round(r.correct/r.total*100),"%"]})]}),s.jsx("button",{className:"px-2 py-1 rounded-lg border border-base-border bg-base-card text-xs",onClick:()=>e(r.snapshot),children:"View"})]},r.id))})]})},Xx=({questions:e,answers:t,skipped:n,onBack:r,onRetake:i,fromHistory:o=!1})=>{const a=at(),l=()=>{o?a("/profile/history",{replace:!0}):r?r():a(-1)},c=e.reduce((f,p,k)=>f+(t[k]===p.answerIndex?1:0),0),u=(n==null?void 0:n.filter(Boolean).length)||0,h=e.length-c-u;return s.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:l,children:"← Back"}),s.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),s.jsx("div",{className:"w-16"})," "]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[s.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),s.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),s.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),s.jsx("div",{className:"text-lg font-bold text-red-400",children:h})]}),s.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),s.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),s.jsx("ol",{className:"space-y-4",children:e.map((f,p)=>{const k=t[p],y=!k&&k!==0,j=k===f.answerIndex;return s.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",p+1,". ",f.prompt]}),f.category&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",f.category," • Difficulty: ",f.difficulty||"Medium"]})]}),s.jsx("div",{className:"ml-2",children:y?s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:f.options.map((R,x)=>{const m=k===x,v=x===f.answerIndex;let S="w-full text-left px-3 py-2 rounded-xl border transition-all ";return v?S+="bg-green-600/20 border-green-500/50 text-green-300":m&&!v?S+="bg-red-600/20 border-red-500/50 text-red-300":S+="bg-base-bg/40 border-base-border text-base-muted",s.jsxs("div",{className:S,children:[s.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][x],"."]}),R,v&&s.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),m&&!v&&s.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},x)})}),f.explanation&&s.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[s.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),s.jsx("div",{className:"text-sm text-base-muted",children:f.explanation})]})]},f.id||p)})}),s.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[s.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:l,children:"Back to Results"}),i&&s.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:i,children:"Retake Quiz"})]})]})},vu="qp_resume",yu="qp_mistakes",bu="qp_stats",wu="qp_lastset",ju="qp_recent",Uo="qp_review_snapshot",Kx=50,qr=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Wo=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),Jx=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),um=e=>{const t=e.slice();for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t},Zx=(e,t,n)=>Math.max(t,Math.min(n,e)),er=(e,t)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}};async function eg(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const n=await t.text(),{data:r}=uo.parse(n,{header:!0,skipEmptyLines:!0,transformHeader:o=>String(o).trim().toLowerCase()}),i={a:0,b:1,c:2,d:3};return r.map((o,a)=>{var p;const l=[o.option1,o.option2,o.option3,o.option4].map(k=>(k??"").trim());if(l.some(k=>!k))return null;let c=-1;const u=String(o.answer??"").trim();if(i[u.toLowerCase()]!==void 0)c=i[u.toLowerCase()];else{const k=l.findIndex(y=>y.toLowerCase()===u.toLowerCase());c=k>=0?k:0}const h=String(o.category??o.subject??"General Knowledge").trim(),f=String(o.difficulty??"medium").toLowerCase().trim();return{id:((p=o.id)==null?void 0:p.trim())||`q_${a}`,category:h,difficulty:f,prompt:String(o.question??"").trim(),options:l,answerIndex:c,explanation:String(o.explanation??"").trim()}}).filter(Boolean)}function ku(e,{categorySlug:t,difficulty:n,count:r}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",n),console.log("count:",r),console.log("Total questions available:",e.length);const o=t==="mixed"?()=>!0:h=>Wo(h.category)===t,a=n?h=>(h.difficulty||"medium")===n:()=>!0,l=e.filter(h=>o(h)&&a(h));if(console.log("Filtered pool size:",l.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(h=>`"${h.category}" -> "${Wo(h.category)}"`))]),l.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(h=>Wo(h.category)))]),{questions:[],poolSize:0};const u=Jx(l,Math.min(r,l.length)).map(h=>{const f=um([0,1,2,3]),p=f.map(y=>h.options[y]),k=f.indexOf(h.answerIndex);return{...h,options:p,answerIndex:k}});return console.log("Final questions:",u.length),{questions:u,poolSize:l.length}}function tg(){const e=at(),{category:t}=jh(),n=Bt();Yl();const r=new URLSearchParams(n.search),i=r.get("review")==="1",o=r.get("retake")==="1",a=n.state||{},l=a.mode||"quiz",c=String(a.difficulty||"medium").toLowerCase(),u=Zx(Number(a.count||10),1,50),h=a.timer||{type:"per_q",seconds:45},f=!!a.resume;a.daily,a.source;const p=o||!!a.retake,k=!!a.fromHistory,y=l==="practice";console.log("Quiz Component - Mode Detection:",{routerState:a,mode:l,isPractice:y,location:n.pathname,state:n.state});const[j,R]=d.useState([]),[x,m]=d.useState(!0),[v,S]=d.useState(""),[_,M]=d.useState({questions:[]}),[N,g]=d.useState("quiz"),[b,w]=d.useState(null),[C,F]=d.useState(null),[W,J]=d.useState(0);d.useEffect(()=>{let E=!0;return(async()=>{try{const P=await eg();if(!E)return;R(P)}catch(P){console.error(P),S("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{m(!1)}})(),()=>{E=!1}},[]),d.useEffect(()=>{if(i)try{const E=localStorage.getItem(Uo);if(!E)return;const P=JSON.parse(E);w({questions:(P==null?void 0:P.questions)||[],answers:(P==null?void 0:P.answers)||[],skipped:(P==null?void 0:P.skipped)||[]}),g("review")}catch(E){console.error("Error loading review snapshot:",E)}},[i]),d.useEffect(()=>{var P;if(console.log("=== SESSION INIT DEBUG ==="),console.log("isReview:",i),console.log("loading:",x),console.log("error:",v),console.log("allQuestions.length:",j.length),console.log("category:",t),console.log("mode:",l),console.log("isPractice:",y),i||x||v){console.log("Exiting early - isReview/loading/error");return}if(!j.length){console.log("Exiting early - no questions loaded");return}if(f){console.log("Checking for resume...");const D=er(vu,null);if((D==null?void 0:D.slug)===t&&(D!=null&&D.inProgress)){console.log("Resuming saved session");const A=ku(j,{categorySlug:t,difficulty:c,count:D.total||u});M(A),F(D.startedAt||Date.now()),J(0);return}}console.log("Building fresh session with params:",{categorySlug:t,difficulty:c,count:u});const E=ku(j,{categorySlug:t,difficulty:c,count:u});if(console.log("Built session result:",{questionsCount:E.questions.length,poolSize:E.poolSize,firstQuestion:(P=E.questions[0])==null?void 0:P.prompt}),E.questions.length===0){console.error("No questions found for category:",t,"difficulty:",c),S(`No questions found for category "${qr(t)}" with difficulty "${c}"`);return}M(E),F(Date.now()),J(0)},[x,v,j,t,c,u,f,i,l]),d.useEffect(()=>{if(N!=="quiz"||!C)return;const E=setInterval(()=>{J(Date.now()-C)},1e3);return()=>clearInterval(E)},[N,C]);const I=d.useCallback(E=>{if(console.log("Quiz completed - Mode:",l,"isPractice:",y,"Results:",E),!E||!E.questions){console.error("Invalid results object:",E);return}const P=E.questions.filter((A,Z)=>E.answers[Z]!==null&&E.answers[Z]!==A.answerIndex).map(A=>A.id);try{const A=er(yu,[]),Z=Array.from(new Set([...P,...A]));localStorage.setItem(yu,JSON.stringify(Z))}catch(A){console.error("Error saving mistakes:",A)}try{const A=er(bu,{sessions:[]});A.sessions.push({cat:qr(t),mode:y?"practice":"quiz",total:E.total,correct:E.correct,skipped:E.skipped.filter(Boolean).length,ms:W,timestamp:Date.now(),earnedXP:y?0:E.correct*10,earnedCoins:y?0:E.correct*5}),localStorage.setItem(bu,JSON.stringify(A))}catch(A){console.error("Error saving stats:",A)}const D={ts:Date.now(),slug:t,categoryLabel:qr(t),mode:y?"practice":"quiz",difficulty:c,total:E.total,timer:y?null:h,ms:W,attempted:E.answers.filter(A=>A!==null).length,correct:E.correct,questions:E.questions,answers:E.answers,skipped:E.skipped,isPractice:y};try{localStorage.setItem(wu,JSON.stringify(D)),localStorage.setItem(Uo,JSON.stringify({questions:E.questions,answers:E.answers,skipped:E.skipped}));const A=er(ju,[]),ne=[{id:D.ts,ts:D.ts,cat:D.categoryLabel,slug:t,mode:y?"Practice":"Quiz",total:E.total,correct:E.correct,ms:W,snapshot:D},...A].slice(0,Kx);localStorage.setItem(ju,JSON.stringify(ne))}catch(A){console.error("Error saving snapshot:",A)}localStorage.removeItem(vu),w({...E,category:qr(t),mode:y?"practice":"quiz",elapsedMs:W,isPractice:y,hasTimer:!y,earnedXP:y?0:E.correct*10,earnedCoins:y?0:E.correct*5}),g("results")},[t,l,h,W,y]),Q=d.useCallback(()=>{k?e("/profile/history",{replace:!0,state:null}):e("/")},[k,e]),q=d.useCallback(()=>{console.log("Retake requested - Mode:",l,"isPractice:",y);const E=er(wu,null);if(!E||E.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:y?"practice":"quiz",difficulty:c,count:u,timer:y?null:h,retake:!0}});return}const P=E.questions.map(D=>{const A=um([0,1,2,3]);return{...D,options:A.map(Z=>D.options[Z]),answerIndex:A.indexOf(D.answerIndex)}});M({questions:P,poolSize:P.length}),F(Date.now()),J(0),g("quiz"),window.scrollTo(0,0)},[t,l,c,u,h,e,y]),z=d.useCallback((E=null)=>{if(E)w(E);else if(!b){const P=er(Uo,null);P&&w({questions:P.questions||[],answers:P.answers||[],skipped:P.skipped||[]})}g("review")},[b]),T=d.useCallback(()=>{k?e("/profile/history",{replace:!0}):g("results")},[k,e]);return x?s.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:s.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):v?s.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:s.jsx("div",{className:"text-sm text-red-400",children:v})}):(console.log("Render - Current view:",N,"Session questions:",_.questions.length,"Mode:",l,"isPractice:",y),s.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:s.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[N==="quiz"&&_.questions.length>0&&s.jsx(Qx,{session:_,mode:y?"practice":"quiz",category:qr(t),difficulty:c,timerConfig:y?null:h,onComplete:I,onQuit:Q,isPractice:y}),N==="results"&&b&&s.jsx(Yx,{results:b,onRetake:q,onReview:()=>z(b),isRetake:p,isPractice:y}),N==="review"&&b&&s.jsx(Xx,{questions:b.questions||[],answers:b.answers||[],skipped:b.skipped||[],onBack:T,onRetake:q,fromHistory:k,isPractice:y})]})}))}const mn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Fn=360/mn.length,ng=42,Qo=3e3,Nu=10,Su=260,rg="cubic-bezier(.15,.7,.1,1)",sg="cubic-bezier(.2,.7,.2,1)",fn=5,ig=5,og=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function ag({muted:e=!1,size:t=18}){return s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),s.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&s.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function lg({q:e,locked:t,onPick:n,result:r}){if(!e)return null;const i=[e.option1,e.option2,e.option3,e.option4];return s.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[s.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),s.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),i.map((o,a)=>{const l=r&&o===e.answer,c=r&&r.pick===o&&o!==e.answer;return s.jsx("button",{disabled:t||!!r,onClick:()=>n(o),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!r&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",l?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:o},a)}),r&&s.jsxs("div",{className:"mt-3 text-sm",children:[r.correct?s.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):s.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",s.jsx("b",{children:e.answer})]}),e.explanation&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function cg(){const e=at(),[t]=mr("/sounds/correct.mp3",{volume:.7}),[n]=mr("/sounds/wrong.mp3",{volume:.7}),[r,i]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(fn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(fn).fill(null)}]),[o,a]=d.useState(0),[l,c]=d.useState(1),u=r.reduce((O,H)=>O+H.scores.reduce((te,Y)=>te+(Y??0),0),0),[h,f]=d.useState(!0),p=d.useRef(null);d.useEffect(()=>{const O=new Audio("/sounds/spin.mp3");return O.loop=!0,O.volume=.7,p.current=O,()=>{try{O.pause(),O.src=""}catch{}}},[]);const k=()=>{if(h&&p.current)try{p.current.currentTime=0,p.current.play()}catch{}},y=()=>{if(p.current)try{p.current.pause(),p.current.currentTime=0}catch{}},[j,R]=d.useState(0),[x,m]=d.useState("none"),[v,S]=d.useState(!1),[_,M]=d.useState(null),[N,g]=d.useState(null),b=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[w,C]=d.useState([]);d.useEffect(()=>{(async()=>{try{const O=await fetch("/data/quiz_questions_bank.csv").then(G=>G.text()),{data:H}=uo.parse(O,{header:!0,skipEmptyLines:!0,transformHeader:G=>String(G).trim().toLowerCase()}),te={a:0,b:1,c:2,d:3},Y=H.map((G,ie)=>{var se;const $=(G.question??"").trim();if(!$)return null;const B=[G.option1,G.option2,G.option3,G.option4].map(L=>String(L??"").trim());if(B.some(L=>!L))return null;let V=String(G.answer??"").trim(),ae=te[V.toLowerCase()];if(ae===void 0){const L=B.findIndex(ee=>ee.toLowerCase()===V.toLowerCase());ae=L>=0?L:0}const X=B[ae];return{id:((se=G.id)==null?void 0:se.trim())||`ps_${ie}`,question:$,option1:B[0],option2:B[1],option3:B[2],option4:B[3],answer:X,explanation:String(G.explanation??"").trim(),catSlug:og(G.category??G.subject??"general knowledge"),difficulty:String(G.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);C(Y)}catch{C([])}})()},[]);const[F,W]=d.useState(null),[J,I]=d.useState(null),[Q,q]=d.useState(!1),z=O=>(O%360+360)%360,T=O=>z(O),E=l>fn;function P(){if(r.length>=4)return;const O=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],H=O[(r.length*2+1)%O.length];i(te=>[...te,{name:`Player ${te.length+1}`,color:H,scores:Array(fn).fill(null)}])}function D(){r.length<=2||(i(O=>O.slice(0,-1)),a(O=>Math.min(O,r.length-2)))}function A(O){i(H=>H.map((te,Y)=>Y===o?{...te,scores:te.scores.map((G,ie)=>ie===l-1?O:G)}:te))}function Z(){if(v||E)return;M(null),g(null),W(null),I(null),S(!0),k();const O=Math.floor(Math.random()*mn.length),H=mn[O],te=Fn*.28,Y=(Math.random()*2-1)*te,G=z(j),ie=180,B=O*Fn+Fn/2+Y;let V=T(B-G-ie);const ae=ng*360+V,X=j+ae+Nu;m(`transform ${b?800:Qo}ms ${rg}`),R(X);try{navigator.vibrate&&!b&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{m(`transform ${b?160:Su}ms ${sg}`),R(se=>se-Nu)},b?800:Qo),setTimeout(()=>{if(y(),S(!1),M(O),g(H.color),H.soon)return;const se=w.filter(ee=>ee.catSlug===H.slug&&ee.difficulty==="easy"),L=se.length?se:w.filter(ee=>ee.catSlug===H.slug);if(L.length){const ee=L[Math.floor(Math.random()*L.length)];W(ee)}else W({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(b?800:Qo)+(b?160:Su)+40)}function ne(O){if(!F||J)return;const H=O===F.answer;if(I({correct:H,pick:O}),H){t(),q(!0),setTimeout(()=>q(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}A(ig)}else{n();try{navigator.vibrate&&navigator.vibrate([4])}catch{}A(0)}}function re(){const O=(o+1)%r.length,H=O===0?l+1:l;a(O),c(H),M(null),g(null),W(null),I(null)}function ue(){const O=r.map(Y=>Y.scores.reduce((G,ie)=>G+(ie??0),0)),H=Math.max(...O),te=r.filter((Y,G)=>O[G]===H).map(Y=>Y.name).join(", ");alert(`${te} win${te.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return s.jsxs("div",{className:"min-h-screen bg-black text-white",children:[Q&&s.jsx(lm,{numberOfPieces:120,recycle:!1}),s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),s.jsx("button",{onClick:()=>f(O=>!O),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":h?"Mute sound":"Unmute sound",title:h?"Sound on":"Sound off",children:s.jsx(ag,{muted:!h})})]}),s.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"text-sm",children:["Round ",s.jsx("b",{children:Math.min(l,fn)}),"/",s.jsx("b",{children:fn})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:P,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),s.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),s.jsx("button",{onClick:D,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),s.jsxs("div",{className:"text-sm",children:["Pot: ",s.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[s.jsxs("colgroup",{children:[s.jsx("col",{style:{width:"42%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"13%"}})]}),s.jsx("thead",{children:s.jsxs("tr",{className:"text-base-muted",children:[s.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:fn}).map((O,H)=>s.jsxs("th",{className:"font-medium text-center",children:["R",H+1]},H)),s.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),s.jsx("tbody",{children:r.map((O,H)=>{const te=O.scores.reduce((G,ie)=>G+(ie??0),0),Y=H===o;return s.jsxs("tr",{className:Y?"bg-white/6":"",children:[s.jsx("td",{className:"py-1 pr-1",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:O.color}}),s.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:O.name,onChange:G=>i(ie=>ie.map(($,B)=>B===H?{...$,name:G.target.value}:$))})]})}),O.scores.map((G,ie)=>s.jsx("td",{className:"text-center",children:G===null?"–":G},ie)),s.jsx("td",{className:"text-right pr-1 font-semibold",children:te})]},H)})})]})})]}),s.jsx("section",{className:"flex flex-col items-center",children:s.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[N&&s.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${N}33, 0 0 30px 8px ${N}44`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:x},"aria-label":"Category wheel",role:"group",children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[mn.map((O,H)=>{const te=H*Fn,Y=te+Fn,G=Fn>180?1:0,ie=Math.PI*te/180,$=Math.PI*Y/180,B=50+50*Math.cos(ie),V=50-50*Math.sin(ie),ae=50+50*Math.cos($),X=50-50*Math.sin($),se=_===H;return s.jsxs("g",{style:{opacity:_==null?.95:se?1:.78,filter:_!=null&&!se?"blur(0.6px)":"none"},children:[s.jsx("path",{d:`M50,50 L${B},${V} A50,50 0 ${G} 0 ${ae},${X} Z`,fill:O.color,stroke:se?`${O.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:se?"1.2":"0.6"}),s.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${te+Fn/2} 50 50) translate(12 0)`,children:s.jsxs("tspan",{children:[O.label,O.soon?" (soon)":""]})})]},O.slug)}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),s.jsx("button",{onClick:Z,disabled:v||E,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",v||E?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),_!=null&&!v&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:s.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[s.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:mn[_].color}}),mn[_].label]})})]})}),s.jsx("section",{className:"mt-4",children:E?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),s.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",s.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),s.jsx("button",{className:"btn-primary w-full",onClick:ue,children:"End match"})]}):_!=null&&mn[_].soon?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-lg font-semibold mb-1",children:mn[_].label}),s.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),s.jsx("button",{className:"btn-primary",onClick:Z,disabled:v,children:"Re-spin"})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",s.jsx("span",{style:{color:r[o].color},children:r[o].name})," ","| Round ",l,"/",fn]}),s.jsx(lg,{q:F,locked:v||!F,onPick:ne,result:J}),J&&s.jsx("div",{className:"mt-3 flex justify-center",children:s.jsx("button",{className:"btn-primary",onClick:re,children:"Next turn"})})]})})]}),s.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}function ug(){const e=at(),[t,n]=d.useState(""),[r,i]=d.useState({name:"Nirmal",level:12,xp:2840,nextLevelXp:3e3,coins:1240,rank:23,streak:5,todayQuizzes:3,weeklyXp:450});d.useEffect(()=>{const l=new Date().getHours();l<12?n("Good morning"):l<17?n("Good afternoon"):n("Good evening")},[]);const o=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,a=r.xp%1e3/10;return s.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-12 px-3",children:[s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{children:[s.jsxs("h1",{className:"text-2xl font-bold",children:[t," 👋"]}),s.jsx("p",{className:"text-white/60 text-sm",children:"Ready for today's challenge?"})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-12 h-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:s.jsx("span",{className:"text-xl",children:"⚙️"})})]}),s.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[s.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:r.name[0]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"text-lg font-semibold",children:r.name}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",r.level]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[r.coins," 🪙"]}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",r.rank]})]})]}),s.jsxs("div",{className:"mb-3",children:[s.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[s.jsx("span",{children:"XP Progress"}),s.jsxs("span",{children:[r.xp,"/",r.nextLevelXp]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${a}%`}})})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",r.streak]}),s.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",r.weeklyXp]}),s.jsx("div",{className:"text-white/60 text-xs",children:"This Week"})]})]})]})]}),s.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${o} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),s.jsxs("div",{className:"relative flex items-start justify-between",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),s.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),s.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),s.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{onClick:()=>e("/profile/history"),className:`${o} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),s.jsx("div",{className:"text-3xl mb-3",children:"📊"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),s.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",r.todayQuizzes," today"]})]}),s.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${o} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),s.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),s.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${o} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[s.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),s.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),s.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${o} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[s.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),s.jsxs("div",{className:"mt-4 space-y-3",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${o} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"🔥"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),s.jsxs("div",{className:"text-[11px] opacity-80",children:[r.streak," days strong"]})]})]})}),s.jsx("button",{onClick:()=>e("/profile/quests"),className:`${o} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"⚡"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:`${o} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),s.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),s.jsx("div",{className:"text-white/40",children:"→"})]})})]}),s.jsx("div",{className:"h-6"})]})}const Hr="🪙",qo={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},Zs=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function dg(){var h;const e=at(),[t,n]=d.useState({days:2,hours:14,minutes:17}),[r,i]=d.useState("global"),o=qo[r]||qo.global,a=o.find(f=>f.you),l=o.slice(0,3),c=o.slice(3);d.useEffect(()=>{const f=p=>{p.preventDefault(),e(-1)};return window.addEventListener("popstate",f),()=>{window.removeEventListener("popstate",f)}},[e]),d.useEffect(()=>{const f=setInterval(()=>{n(p=>p.minutes>0?{...p,minutes:p.minutes-1}:p.hours>0?{...p,hours:p.hours-1,minutes:59}:p.days>0?{...p,days:p.days-1,hours:23,minutes:59}:p)},6e4);return()=>clearInterval(f)},[]);const u=f=>{const p=Math.max(...o.map(y=>y.score)),k=f/p*100;return k>=90?Zs[0]:k>=70?Zs[1]:k>=40?Zs[2]:Zs[3]};return s.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-5",children:[s.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),s.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",t.days,"d ",t.hours,"h ",t.minutes,"m"]})]}),s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),s.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${u(a==null?void 0:a.score).color} p-4 text-center relative overflow-hidden`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),s.jsxs("div",{className:"relative z-10",children:[s.jsx("div",{className:"text-2xl mb-1",children:u(a==null?void 0:a.score).icon}),s.jsxs("div",{className:"text-sm font-bold text-white",children:[u(a==null?void 0:a.score).name," League"]}),s.jsx("div",{className:"text-xs text-white/80",children:r==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),s.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:qo.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(f=>s.jsxs("button",{onClick:()=>i(f.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${r===f.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[s.jsx("div",{children:f.label}),s.jsx("div",{className:`text-[10px] ${r===f.key?"text-black/70":"text-white/60"}`,children:f.count})]},f.key))}),s.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),s.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[s.jsxs("span",{children:["Rank #",a==null?void 0:a.rank]}),s.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${a!=null&&a.trend.startsWith("+")?"bg-green-500/20 text-green-400":a!=null&&a.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:a==null?void 0:a.trend}),s.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",r==="global"?"Global":r==="friends"?"Friends":"India"]})]})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[a==null?void 0:a.score," ",Hr]}),s.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",a==null?void 0:a.streak," streak"]})]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),s.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),s.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),s.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),s.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),s.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[l[1]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ei,{src:l[1].avatar,fallback:l[1].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ti(l[1].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[l[1].score," ",Hr]})]}),l[0]&&s.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ei,{src:l[0].avatar,fallback:l[0].name,size:72}),s.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:s.jsx(fg,{})}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),s.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:ti(l[0].name,8)}),s.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[l[0].score," ",Hr]}),s.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),l[2]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ei,{src:l[2].avatar,fallback:l[2].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ti(l[2].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[l[2].score," ",Hr]})]})]})]})]}),c.length>0&&s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[s.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),s.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),s.jsx("ul",{className:"space-y-1.5",children:c.map((f,p)=>s.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${f.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${p*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx(mg,{n:f.rank,you:f.you}),s.jsx(ei,{src:f.avatar,fallback:f.name,size:36}),s.jsxs("div",{className:"flex flex-col leading-tight",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm font-semibold",children:ti(f.name,12)}),s.jsx("span",{className:"text-xs",children:f.country}),f.friend&&s.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),s.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${f.you?"text-black/70":"text-white/60"}`,children:[s.jsx("span",{children:f.handle}),s.jsxs("span",{children:["🔥",f.streak]})]})]})]}),s.jsxs("div",{className:"flex flex-col items-end",children:[s.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[s.jsx("span",{children:f.score}),s.jsx("span",{className:f.you?"opacity-90":"opacity-80",children:Hr})]}),s.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${f.trend.startsWith("+")?"bg-green-500/20 text-green-400":f.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:f.trend})]})]},`${r}-${f.rank}`))})]}),a&&a.rank>1&&s.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[s.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),s.jsx("div",{className:"text-xs text-white/70 mb-3",children:r==="friends"&&a.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((h=o[a.rank-2])==null?void 0:h.score)||0)-a.score+1)} more coins to reach rank #${a.rank-1}`}),!(r==="friends"&&a.rank===1)&&s.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),s.jsx("style",{jsx:!0,children:`
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
      `})]})}function ei({src:e,fallback:t,size:n=56}){const r=pg(t);return s.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:n,height:n},children:e?s.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):s.jsx("span",{className:"text-sm font-semibold",children:r})})}function fg(){return s.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[s.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[s.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),s.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),s.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function mg({n:e,you:t}){return s.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function ti(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function pg(e=""){var n;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((n=t[1])==null?void 0:n[0])||"")).toUpperCase()}const hg="qp_recent",xg="qp_review_snapshot",Cu=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function gg(){const[e,t]=d.useState("quizzes"),[n,r]=d.useState(null),[i,o]=d.useState(!1),[a,l]=d.useState("all"),[c,u]=d.useState("all"),[h,f]=d.useState("date"),[p,k]=d.useState([]),[y,j]=d.useState(!0),R=at(),x=N=>{if(!N)return"00:00";const g=Math.floor(N/1e3),b=Math.floor(g/60),w=g%60;return`${String(b).padStart(2,"0")}:${String(w).padStart(2,"0")}`},m=N=>{if(!N)return"Unknown";const g=new Date(N),w=Math.floor((new Date-g)/(1e3*60*60*24));return w===0?"Today":w===1?"Yesterday":w<7?`${w} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][g.getMonth()]} ${g.getDate()}`};d.useEffect(()=>{let N=!1;j(!0);const g=C=>{try{return JSON.parse(C)}catch{return null}},b=C=>encodeURIComponent(String(C).trim().toLowerCase().replace(/\s+/g,"-")),w=C=>{var P,D,A,Z;const F=Number(C.ts??C.timestamp??C.id)||Date.now(),W=Number(C.ms)||0,J=Number(C.total)||0,I=Number(C.correct)||0,q=String(C.mode||"").toLowerCase().includes("practice")?"practice":"quiz",z=((P=C.snapshot)==null?void 0:P.category)||((D=C.snapshot)==null?void 0:D.categoryLabel)||C.cat||C.category||"Unknown",T=((A=C.snapshot)==null?void 0:A.categoryParam)||b(z),E=String(((Z=C.snapshot)==null?void 0:Z.difficulty)||C.difficulty||"medium").toLowerCase();return{id:C.id??F,type:q,category:z,categoryParam:T,difficulty:E,score:I,total:J,accuracy:J?Math.round(I/J*100):0,time:x(W),ms:W,date:m(F),timestamp:F,snapshot:C.snapshot??null,mode:C.mode||(q==="practice"?"Practice":"Quiz")}};try{const C=localStorage.getItem(hg),F=C?g(C):null,J=(Array.isArray(F)&&F.length?F:Cu).map(w).filter(I=>I&&I.timestamp).sort((I,Q)=>Q.timestamp-I.timestamp);N||k(J)}catch(C){console.error("Error loading history:",C),N||k(Cu)}finally{N||j(!1)}return()=>{N=!0}},[]);const v=d.useMemo(()=>{const N=new Set(p.map(g=>g.category));return Array.from(N)},[p]),S=d.useMemo(()=>{let N=p.filter(g=>e==="quizzes"?g.type==="quiz":g.type==="practice");return a!=="all"&&(N=N.filter(g=>g.category===a)),c!=="all"&&(N=N.filter(g=>g.difficulty===c)),N.sort((g,b)=>h==="date"?b.timestamp-g.timestamp:h==="score"?b.accuracy-g.accuracy:h==="time"?g.ms-b.ms:0),N},[p,e,a,c,h]),_=d.useMemo(()=>{if(S.length===0)return null;const N=S.reduce((C,F)=>C+F.score,0),g=S.reduce((C,F)=>C+F.total,0),b=g?Math.round(N/g*100):0,w=S.reduce((C,F)=>C+F.ms,0);return{count:S.length,avgAccuracy:b,totalTime:x(w),bestScore:Math.max(...S.map(C=>C.accuracy))}},[S]),M=N=>N>=80?"text-green-400":N>=60?"text-blue-400":N>=40?"text-yellow-400":"text-red-400";return y?s.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white",children:"Loading history..."})}):s.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[s.jsx("div",{className:"",children:s.jsxs("div",{className:"px-4 pt-4 pb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("button",{onClick:()=>R("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),s.jsx("button",{onClick:()=>o(!i),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:s.jsx(bg,{})})]}),s.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),s.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),s.jsxs("div",{className:"px-4 pb-20",children:[s.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:s.jsx("div",{className:"flex items-center",children:s.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(N=>s.jsxs("button",{onClick:()=>t(N.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===N.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[s.jsx("span",{className:"mr-1",children:N.icon}),N.label]},N.value))})})}),_&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[s.jsx(ni,{label:"Total",value:_.count}),s.jsx(ni,{label:"Avg Score",value:`${_.avgAccuracy}%`,color:M(_.avgAccuracy)}),s.jsx(ni,{label:"Best Score",value:`${_.bestScore}%`,color:"text-green-400"}),s.jsx(ni,{label:"Total Time",value:_.totalTime})]})}),i&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),s.jsxs("select",{value:a,onChange:N=>l(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All Categories"}),v.map(N=>s.jsx("option",{value:N,children:N},N))]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),s.jsxs("select",{value:c,onChange:N=>u(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All"}),s.jsx("option",{value:"easy",children:"Easy"}),s.jsx("option",{value:"medium",children:"Medium"}),s.jsx("option",{value:"hard",children:"Hard"})]})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),s.jsxs("select",{value:h,onChange:N=>f(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"date",children:"Date"}),s.jsx("option",{value:"score",children:"Score"}),s.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),S.length===0?s.jsxs("div",{className:"text-center py-12",children:[s.jsx("div",{className:"text-4xl mb-3",children:"📚"}),s.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),s.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):s.jsx("div",{className:"space-y-3",children:S.map((N,g)=>s.jsx(vg,{item:N,index:g,onClick:()=>r(N)},N.id))})]}),n&&s.jsx(yg,{item:n,onClose:()=>r(null)})]})}function ni({label:e,value:t,color:n="text-white"}){return s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),s.jsx("div",{className:`text-lg font-bold ${n}`,children:t})]})}function vg({item:e,index:t,onClick:n}){const r=a=>a>=80?"from-green-500/20 to-green-600/10 border-green-500/30":a>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":a>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",o=(a=>{const l=a==null?void 0:a.toLowerCase();return l==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:l==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:l==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return s.jsxs("div",{onClick:n,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${r(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),s.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${o.bg} ${o.text} ${o.border} border`,children:e.difficulty}),s.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),s.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),s.jsxs("div",{className:"flex items-center justify-between text-xs",children:[s.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[s.jsxs("span",{children:["⏱ ",e.time]}),s.jsx("span",{children:e.mode})]}),s.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function yg({item:e,onClose:t}){const n=at();return d.useEffect(()=>{const r=i=>{i.key==="Escape"&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t]),s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:s.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),s.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Category"}),s.jsx("span",{className:"text-white font-medium",children:e.category})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Difficulty"}),s.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Score"}),s.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Accuracy"}),s.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-white/60",children:"Time"}),s.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&s.jsx("button",{onClick:()=>{t(),localStorage.setItem(xg,JSON.stringify(e.snapshot)),n(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),s.jsx("button",{onClick:()=>{var r;t(),n(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((r=e.snapshot)==null?void 0:r.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function bg(){return s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const wg=d.createContext({});function dm(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const jg=typeof window<"u",kg=jg?d.useLayoutEffect:d.useEffect,fm=d.createContext(null);function Ng(e){return typeof e=="object"&&e!==null}function Sg(e){return Ng(e)&&"offsetHeight"in e}const Cg=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Eg extends d.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=Sg(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function _g({children:e,isPresent:t,anchorX:n,root:r}){const i=d.useId(),o=d.useRef(null),a=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=d.useContext(Cg);return d.useInsertionEffect(()=>{const{width:c,height:u,top:h,left:f,right:p}=a.current;if(t||!o.current||!c||!u)return;const k=n==="left"?`left: ${f}`:`right: ${p}`;o.current.dataset.motionPopId=i;const y=document.createElement("style");l&&(y.nonce=l);const j=r??document.head;return j.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${k}px !important;
            top: ${h}px !important;
          }
        `),()=>{j.contains(y)&&j.removeChild(y)}},[t]),s.jsx(Eg,{isPresent:t,childRef:o,sizeRef:a,children:d.cloneElement(e,{ref:o})})}const Rg=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:a,anchorX:l,root:c})=>{const u=dm(Pg),h=d.useId();let f=!0,p=d.useMemo(()=>(f=!1,{id:h,initial:t,isPresent:n,custom:i,onExitComplete:k=>{u.set(k,!0);for(const y of u.values())if(!y)return;r&&r()},register:k=>(u.set(k,!1),()=>u.delete(k))}),[n,u,r]);return o&&f&&(p={...p}),d.useMemo(()=>{u.forEach((k,y)=>u.set(y,!1))},[n]),d.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),a==="popLayout"&&(e=s.jsx(_g,{isPresent:n,anchorX:l,root:c,children:e})),s.jsx(fm.Provider,{value:p,children:e})};function Pg(){return new Map}function Tg(e=!0){const t=d.useContext(fm);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=d.useId();d.useEffect(()=>{if(e)return i(o)},[e]);const a=d.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,a]:[!0]}const ri=e=>e.key||"";function Eu(e){const t=[];return d.Children.forEach(e,n=>{d.isValidElement(n)&&t.push(n)}),t}const Ho=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:a=!1,anchorX:l="left",root:c})=>{const[u,h]=Tg(a),f=d.useMemo(()=>Eu(e),[e]),p=a&&!u?[]:f.map(ri),k=d.useRef(!0),y=d.useRef(f),j=dm(()=>new Map),[R,x]=d.useState(f),[m,v]=d.useState(f);kg(()=>{k.current=!1,y.current=f;for(let M=0;M<m.length;M++){const N=ri(m[M]);p.includes(N)?j.delete(N):j.get(N)!==!0&&j.set(N,!1)}},[m,p.length,p.join("-")]);const S=[];if(f!==R){let M=[...f];for(let N=0;N<m.length;N++){const g=m[N],b=ri(g);p.includes(b)||(M.splice(N,0,g),S.push(g))}return o==="wait"&&S.length&&(M=S),v(Eu(M)),x(f),null}const{forceRender:_}=d.useContext(wg);return s.jsx(s.Fragment,{children:m.map(M=>{const N=ri(M),g=a&&!u?!1:f===m||p.includes(N),b=()=>{if(j.has(N))j.set(N,!0);else return;let w=!0;j.forEach(C=>{C||(w=!1)}),w&&(_==null||_(),v(y.current),a&&(h==null||h()),r&&r())};return s.jsx(Rg,{isPresent:g,initial:!k.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:g?void 0:b,anchorX:l,children:M},N)})})},zg=()=>{const[e,t]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const $=sessionStorage.getItem("navigationSource");$&&t($)}},[]);const n=$=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=$)},r=()=>{if(typeof window<"u"){const $=sessionStorage.getItem("navigationSource");window.location.href="/profile",sessionStorage.removeItem("navigationSource")}},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},[a,l]=d.useState(4),[c,u]=d.useState(1390),[h,f]=d.useState(4),[p,k]=d.useState(!1),[y,j]=d.useState(!1),[R,x]=d.useState(0),[m,v]=d.useState(0),[S,_]=d.useState("cycle"),[M,N]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[g,b]=d.useState([0,1,2,3]),[w,C]=d.useState(!1),[F,W]=d.useState(!1),[J,I]=d.useState(null),[Q,q]=d.useState(null),[z,T]=d.useState(!1),[E,P]=d.useState(null),[D,A]=d.useState(!1),Z=d.useRef(null),ne=d.useRef(null),re=d.useRef(null);d.useEffect(()=>{Z.current=new Audio("/sounds/reward.mp3"),ne.current=new Audio("/sounds/reward_progress.mp3"),[Z,ne].forEach($=>{var B;(B=$.current)==null||B.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const ue=$=>{try{$.current&&($.current.currentTime=0,$.current.play().catch(B=>console.log("Audio play failed:",B)))}catch(B){console.log("Sound play error:",B)}},O=($,B)=>{if($>a){q(B),W(!0);return}$===a&&te($,B)},H=$=>{var V;const B=(V=re.current)==null?void 0:V.querySelector(`[data-index="${$}"]`);if(B){const ae=B.getBoundingClientRect(),X=window.pageYOffset||document.documentElement.scrollTop,se=ae.top+X-window.innerHeight/2+50;window.scrollTo({top:se,behavior:"smooth"})}},te=($,B)=>{if(!g.includes($)){if(B.cost>0&&c<B.cost){q(B),W(!0);return}B.cost>0&&u(V=>V-B.cost),ue(Z),C(!0),q(B),b(V=>[...V,$]),setTimeout(()=>{C(!1),B.type==="coins"?(x(B.value),k(!0),setTimeout(()=>{u(V=>V+B.value),setTimeout(()=>{k(!1),x(0)},500)},300)):B.type==="life"?(v(B.value),j(!0),setTimeout(()=>{f(V=>V+B.value),setTimeout(()=>{j(!1),v(0)},500)},300)):(P({icon:B.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{P(null),A(!0),Y(B),B.type==="vehicle"&&_(B.value),setTimeout(()=>{A(!1)},500)},800)),setTimeout(()=>{if(a<i.length-1){const V=a+1;H(V),setTimeout(()=>{T(!0),ue(ne),l(V),setTimeout(()=>{T(!1)},500)},300)}},1200)},1500)}},Y=$=>{N(B=>B.find(ae=>ae.icon===$.icon)?B.map(ae=>ae.icon===$.icon?{...ae,count:ae.count+1}:ae):[...B,{type:$.type,icon:$.icon,name:$.label,count:1}])},G=$=>30+$*100,ie=()=>30+a*100;return s.jsxs("div",{className:"rewards-page",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsx("div",{className:"non-sticky-header",children:s.jsx("button",{className:"back-button",onClick:r,children:"← Back"})}),s.jsxs("div",{className:"sticky-section",children:[s.jsxs("div",{className:"header-wrapper",children:[s.jsxs("div",{className:"title-row",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"title",children:"Rewards"}),s.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),s.jsx("button",{className:"play-quiz-btn",onClick:()=>n("/play"),children:"Play Quiz"})]}),s.jsx("div",{className:"balance-row",children:s.jsx("div",{className:"balance-item",children:s.jsxs("div",{children:[s.jsx("div",{className:"balance-label",children:"Balance"}),s.jsxs("div",{className:`balance-value ${p?"animating":""}`,children:[c.toLocaleString()," 🪙",p&&s.jsxs("span",{className:"value-change",children:["+",R]})]})]})})})]}),s.jsx("div",{className:"stats-cards-container",children:s.jsxs("div",{className:"info-grid",children:[s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"❤️"}),s.jsxs("div",{className:`info-value ${y?"animating":""}`,children:[h,y&&s.jsxs("span",{className:"value-change",children:["+",m]})]}),s.jsx("div",{className:"info-label",children:"Lives"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"⭐"}),s.jsx("div",{className:"info-value",children:"5"}),s.jsx("div",{className:"info-label",children:"Level"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:o[S].icon}),s.jsx("div",{className:"info-value",children:o[S].name}),s.jsx("div",{className:"info-label",children:"Vehicle"})]}),s.jsxs("div",{className:`cards-section ${D?"animating":""}`,children:[s.jsx("div",{className:"cards-label",children:"Your Cards"}),s.jsx("div",{className:"card-grid",children:M.map(($,B)=>s.jsxs("div",{className:"card-item",onClick:()=>I($),children:[s.jsxs("div",{className:"large-card",children:[s.jsx("div",{className:"large-card-icon",children:$.icon}),s.jsx("div",{className:"large-card-name",children:$.name})]}),$.count>1&&s.jsx("div",{className:"card-count-badge",children:$.count})]},B))})]})]})})]}),s.jsx("div",{className:"scrollable-journey",children:s.jsx("div",{className:"journey-container",ref:re,children:s.jsxs("div",{className:"journey-track",children:[s.jsx("div",{className:"curvy-road",children:s.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),s.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),s.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),s.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-a/(i.length-1)*1500})]})}),s.jsxs("div",{className:"avatar-tracker",style:{top:`${ie()}px`},children:[s.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:$=>{$.target.style.display="none"}}),s.jsx("div",{className:"tracker-vehicle",children:o[S].icon})]}),s.jsx("div",{className:"rewards-list",children:i.map(($,B)=>{const V=B%2===0,ae=B>a,X=g.includes(B),se=B===a;return s.jsx("div",{className:"reward-row","data-index":B,style:{top:`${G(B)}px`},children:s.jsxs("div",{className:`reward-item ${V?"left":"right"}`,children:[s.jsxs("div",{className:`checkpoint ${se?"current":X?"claimed":ae?"locked":""}`,onClick:()=>O(B,$),children:[s.jsx("div",{className:"checkpoint-icon",children:$.icon}),s.jsx("div",{className:"checkpoint-value",children:$.label.split(" ")[0]}),$.milestone&&s.jsx("div",{className:"milestone-badge",children:"BONUS"}),ae&&s.jsx("div",{className:"lock-icon",children:"🔒"})]}),s.jsxs("div",{className:"reward-info",children:[s.jsx("div",{className:"reward-name",children:$.label}),s.jsxs("div",{className:"step-label",children:["Step ",B+1]})]})]})},$.id)})})]})})}),E&&s.jsx("div",{className:"flying-card",style:{left:`${E.startX}px`,top:`${E.startY}px`,"--startX":`${E.startX}px`},children:E.icon}),s.jsx(Ho,{children:J&&s.jsx("div",{className:"claim-overlay",onClick:()=>I(null),children:s.jsxs("div",{className:"modal",onClick:$=>$.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:J.icon}),s.jsx("div",{className:"card-detail-name",children:J.name}),s.jsxs("div",{className:"card-detail-desc",children:["You have ",J.count," of these cards"]}),s.jsx("div",{className:"modal-buttons",children:s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>I(null),children:"Close"})})]})})}),s.jsx(Ho,{children:w&&Q&&s.jsx("div",{className:"claim-overlay",children:s.jsxs("div",{className:"modal",children:[s.jsx("div",{className:"modal-title",children:"WELL DONE!"}),s.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),s.jsx("div",{className:"modal-icon",children:Q.icon}),s.jsxs("div",{className:"modal-value",children:["+",Q.value," ",Q.type==="coins"?"Coins":Q.type==="life"?"Lives":Q.label]})]})})}),s.jsx(Ho,{children:F&&Q&&s.jsx("div",{className:"claim-overlay",onClick:()=>W(!1),children:s.jsxs("div",{className:"modal",onClick:$=>$.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:"🪙"}),s.jsx("div",{className:"modal-title",children:"Need More Coins"}),s.jsx("div",{className:"modal-subtitle",children:Q.cost>0?`You need ${Q.cost-c} more coins`:"Complete previous rewards first"}),s.jsxs("div",{className:"modal-buttons",children:[s.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>n("/play"),children:"Play Quiz"}),s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>W(!1),children:"Cancel"})]})]})})})]})},si=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function Lg(){const[e,t]=d.useState(null),n=si.filter(i=>i.unlocked).length,r=Math.round(n/si.length*100);return s.jsxs("div",{className:"badges-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Badge Collection"}),s.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),s.jsxs("div",{className:"progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Collection Progress"}),s.jsxs("span",{className:"progress-value",children:[n,"/",si.length]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${r}%`}})})]}),s.jsx("div",{className:"badges-grid",children:si.map(i=>s.jsxs("div",{className:`badge-card ${i.unlocked?"unlocked":""}`,style:{"--badge-color":i.color},onClick:()=>t(i),children:[s.jsx("div",{className:"badge-glow"}),s.jsx("div",{className:"badge-emoji",children:i.emoji}),s.jsx("div",{className:"badge-name",children:i.name}),!i.unlocked&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"badge-progress",children:s.jsx("div",{className:"badge-progress-fill",style:{width:`${i.progress}%`}})}),s.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},i.id))}),s.jsxs("div",{className:"tips-card",children:[s.jsxs("div",{className:"tips-title",children:[s.jsx("span",{children:"💡"}),s.jsx("span",{children:"Pro Tip"})]}),s.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&s.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:s.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[s.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),s.jsx("h3",{className:"modal-title",children:e.name}),s.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),s.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&s.jsxs("div",{className:"modal-progress-section",children:[s.jsx("div",{className:"modal-progress-label",children:"Progress"}),s.jsx("div",{className:"modal-progress-bar",children:s.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),s.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),s.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const Mg=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function Fg(){const[e,t]=d.useState(Mg),[n,r]=d.useState(null),[i,o]=d.useState(1890),[a,l]=d.useState(!1),[c,u]=d.useState([]),h=e.length,f=e.filter(y=>y.current>=y.target).length,p=Math.round(f/h*100);d.useEffect(()=>{const y=setInterval(()=>{u(j=>{const R={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...j.slice(-4),R]})},3e3);return()=>clearInterval(y)},[]);const k=(y,j)=>{r(y),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{t(R=>R.map(x=>x.id===y?{...x,claimed:!0}:x)),o(R=>R+j),r(null),l(!0),setTimeout(()=>l(!1),2e3)},600)};return s.jsxs("div",{className:"achievements-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"floating-shapes",children:[s.jsx("div",{className:"shape shape-1"}),s.jsx("div",{className:"shape shape-2"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",i.toLocaleString()]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),s.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),s.jsxs("div",{className:"progress-overview",children:[s.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),s.jsxs("div",{className:"overview-header",children:[s.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),s.jsxs("div",{className:"overview-stats",children:[s.jsx("span",{className:"trophy-icon",children:"🏆"}),s.jsxs("span",{className:"overview-value",children:[f,"/",h]})]})]}),s.jsx("div",{className:"progress-bar-main",children:s.jsx("div",{className:"progress-fill-main",style:{width:`${p}%`}})})]}),s.jsx("div",{className:"achievements-list",children:e.map(y=>{const j=Math.min(100,Math.round(y.current/y.target*100)),R=j===100,x=y.color+"CC";return s.jsxs("div",{className:`achievement-card ${R?"completed":""}`,style:{"--card-color":y.color,"--card-color-dark":x},children:[s.jsx("div",{className:"card-glow"}),R&&y.claimed&&s.jsx("div",{className:"completed-badge",children:"✓"}),s.jsxs("div",{className:"card-content",children:[s.jsx("div",{className:"achievement-icon",children:y.icon}),s.jsxs("div",{className:"achievement-details",children:[s.jsx("div",{className:"achievement-title",children:y.title}),s.jsx("div",{className:"achievement-subtitle",children:y.subtitle}),s.jsxs("div",{className:"progress-container",children:[s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill",style:{width:`${j}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{children:[y.current,"/",y.target]}),s.jsxs("span",{className:"reward-badge",children:["🪙 ",y.reward]})]})]})]}),s.jsx("button",{onClick:()=>k(y.id,y.reward),disabled:!R||y.claimed,className:`claim-button ${y.claimed?"claimed":R?"can-claim":"in-progress"} ${n===y.id?"claiming":""}`,children:y.claimed?"✓":R?"CLAIM!":`${j}%`})]})]},y.id)})}),a&&s.jsx("div",{className:"celebration",children:"🎉"})]})}function Ig(){const[e,t]=d.useState(5),[n,r]=d.useState(12),[i,o]=d.useState(47),[a,l]=d.useState(!1),c=new Date().getDay(),u=["S","M","T","W","T","F","S"].map((y,j)=>({label:y,hit:j<=c&&j!==0,isToday:j===c})),h=[{days:3,emoji:"⚡",label:"Starter",achieved:e>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:e>=7},{days:30,emoji:"💎",label:"Champion",achieved:e>=30},{days:100,emoji:"👑",label:"Legend",achieved:e>=100}],f=h.find(y=>y.days>e)||h[h.length-1],p=Math.min(100,e/f.days*100);d.useEffect(()=>{e>0&&e%5===0&&(l(!0),setTimeout(()=>l(!1),2e3))},[e]);const k=()=>{typeof window<"u"&&(window.location.href="/play")};return s.jsxs("div",{className:"streaks-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsx("div",{className:"animated-bg"}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"STREAKS"}),s.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),s.jsxs("div",{className:"streak-hero",children:[s.jsx("div",{className:"fire-animation",children:"🔥"}),s.jsx("div",{className:"streak-number",children:e}),s.jsx("div",{className:"streak-label",children:"DAY STREAK"}),s.jsxs("div",{className:"stats-row",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:n}),s.jsx("div",{className:"stat-label",children:"Best Streak"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:i}),s.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),s.jsxs("div",{className:"calendar-card",children:[s.jsx("div",{className:"calendar-header",children:"This Week"}),s.jsx("div",{className:"week-grid",children:u.map((y,j)=>s.jsxs("div",{className:`day-box ${y.isToday?"today":y.hit?"active":"inactive"}`,children:[y.isToday&&s.jsx("div",{className:"day-icon",children:"⚡"}),y.hit&&!y.isToday&&s.jsx("div",{className:"day-icon",children:"✓"}),s.jsx("div",{children:y.label})]},j))})]}),s.jsxs("div",{className:"milestone-section",children:[s.jsx("div",{className:"milestone-header",children:"Next Milestone"}),s.jsxs("div",{className:"milestone-progress",children:[s.jsxs("div",{className:"milestone-info",children:[s.jsxs("div",{className:"milestone-current",children:[s.jsx("span",{className:"milestone-emoji",children:f.emoji}),s.jsx("span",{className:"milestone-text",children:f.label})]}),s.jsxs("span",{className:"milestone-target",children:[e,"/",f.days," days"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${p}%`}})})]}),s.jsx("div",{className:"milestones-grid",children:h.map((y,j)=>s.jsxs("div",{className:`milestone-badge ${y.achieved?"achieved":""}`,children:[s.jsx("div",{className:"milestone-badge-emoji",children:y.emoji}),s.jsxs("div",{className:"milestone-badge-label",children:[y.days," days"]})]},j))})]}),s.jsxs("div",{className:"motivational-text",children:[`"Great job! You're `,Math.max(1,f.days-e)," days away from ",f.label,'!"']}),s.jsxs("button",{className:"play-button",onClick:k,children:[s.jsx("span",{children:"Continue Streak"}),s.jsx("span",{children:"→"})]}),a&&s.jsx("div",{className:"celebration",children:"🎉"})]})}const Ag=[{id:1,title:"Play 3 quizzes today",progress:2,target:3,reward:60,claimed:!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy"},{id:2,title:"Score 8+ twice",progress:1,target:2,reward:80,claimed:!1,icon:"🎯",color:"#4ECDC4",difficulty:"Medium"},{id:3,title:"Practice 15 questions",progress:15,target:15,reward:100,claimed:!0,icon:"📚",color:"#FFD93D",difficulty:"Easy"},{id:4,title:"Win 5 in a row",progress:3,target:5,reward:150,claimed:!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard"},{id:5,title:"Complete a speed run",progress:0,target:1,reward:120,claimed:!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium"}];function Dg(){const[e,t]=d.useState(Ag),[n,r]=d.useState(850),[i,o]=d.useState(null),[a,l]=d.useState(0);d.useEffect(()=>{const f=e.filter(p=>p.progress>=p.target).length;l(Math.round(f/e.length*100))},[e]);const c=(f,p)=>{navigator.vibrate&&navigator.vibrate([20,10,20]),o(f),setTimeout(()=>{t(k=>k.map(y=>y.id===f?{...y,claimed:!0}:y)),r(k=>k+p),o(null)},600)},u=f=>{switch(f){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},h=()=>{const f=new Date,p=new Date(f);p.setDate(p.getDate()+1),p.setHours(5,0,0,0);const k=p-f,y=Math.floor(k/(1e3*60*60)),j=Math.floor(k%(1e3*60*60)/(1e3*60));return`${y}h ${j}m`};return s.jsxs("div",{className:"quests-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"animated-bg",children:[s.jsx("div",{className:"floating-icon",children:"🎮"}),s.jsx("div",{className:"floating-icon",children:"🎯"}),s.jsx("div",{className:"floating-icon",children:"🏆"}),s.jsx("div",{className:"floating-icon",children:"⭐"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",n]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Daily Quests"}),s.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),s.jsxs("div",{className:"daily-progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Today's Progress"}),s.jsxs("span",{className:"progress-value",children:[a,"%"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${a}%`}})})]}),s.jsx("div",{className:"quests-list",children:e.map(f=>{const p=Math.min(100,Math.round(f.progress/f.target*100)),k=p===100,y=f.color+"CC";return s.jsxs("div",{className:`quest-card ${k?"completed":""}`,style:{"--quest-color":f.color,"--quest-color-dark":y},children:[s.jsx("div",{className:"quest-accent"}),k&&f.claimed&&s.jsx("div",{className:"completed-checkmark",children:"✓"}),s.jsxs("div",{className:"quest-content",children:[s.jsx("div",{className:`quest-icon-container ${i===f.id?"animating":""}`,children:f.icon}),s.jsxs("div",{className:"quest-details",children:[s.jsxs("div",{className:"quest-header",children:[s.jsx("span",{className:"quest-title",children:f.title}),s.jsx("span",{className:"difficulty-badge",style:{background:`${u(f.difficulty)}20`,color:u(f.difficulty)},children:f.difficulty})]}),s.jsxs("div",{className:"progress-info",children:[s.jsx("div",{className:"mini-progress-bar",children:s.jsx("div",{className:"mini-progress-fill",style:{width:`${p}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{className:"progress-numbers",children:[f.progress,"/",f.target]}),s.jsxs("span",{className:"reward-display",children:["🪙 ",f.reward]})]})]})]}),s.jsx("button",{onClick:()=>k&&!f.claimed&&c(f.id,f.reward),disabled:f.claimed,className:`action-button ${f.claimed?"claimed":k?"can-claim":"in-progress"}`,style:!k&&!f.claimed?{"--quest-color":f.color,"--quest-color-dark":y}:{},children:f.claimed?"✓":k?"Claim":"Do it"})]})]},f.id)})}),s.jsxs("div",{className:"timer-card",children:[s.jsx("div",{className:"timer-icon",children:"⏰"}),s.jsx("div",{className:"timer-label",children:"New Quests In"}),s.jsx("div",{className:"timer-value",children:h()})]}),i&&s.jsx("div",{className:"reward-animation",children:"🪙"})]})}function Og({title:e,subtitle:t,children:n}){const r=at();return s.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>r(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&s.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),s.jsx("div",{className:"w-[68px]"})]}),n]})}function $g(){const e=at(),[t,n]=d.useState(!0),[r,i]=d.useState(!0),[o,a]=d.useState(!0);return s.jsxs(Og,{title:"Settings",subtitle:"Make it yours",children:[s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[s.jsx(Yr,{label:"Sound",right:s.jsx(Yo,{on:t,set:n})}),s.jsx(Yr,{label:"Haptics",right:s.jsx(Yo,{on:r,set:i})}),s.jsx(Yr,{label:"Notifications",right:s.jsx(Yo,{on:o,set:a})}),s.jsx(Yr,{label:"Edit Profile",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),s.jsx(Yr,{label:"Privacy Policy",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),s.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function Yr({label:e,right:t,onClick:n}){return s.jsxs("button",{type:"button",onClick:n,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[s.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function Yo({on:e,set:t}){return s.jsx("span",{onClick:n=>{n.stopPropagation(),t(r=>!r),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:s.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}const Bg={name:"Player",avatar:"wizard",level:1,totalXP:0,coins:0,energy:He.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function Ug(){const[e,t]=d.useState(()=>{const c=localStorage.getItem(He.STORAGE_KEYS.PLAYER);return c?JSON.parse(c):Bg});d.useEffect(()=>{localStorage.setItem(He.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<He.MAX_ENERGY&&e.energyRegenAt){const c=setInterval(()=>{const u=Date.now();u>=e.energyRegenAt&&t(h=>({...h,energy:Math.min(h.energy+1,He.MAX_ENERGY),energyRegenAt:h.energy+1<He.MAX_ENERGY?u+He.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(c)}},[e.energy,e.energyRegenAt]);const n=d.useCallback(c=>{t(u=>{const h=u.totalXP+c,f=uu(u.totalXP),p=uu(h);let k=[...u.unlockedAvatars];return p>f&&He.AVATARS.forEach(y=>{y.unlockLevel===p&&!k.includes(y.id)&&k.push(y.id)}),{...u,totalXP:h,level:p,unlockedAvatars:k}})},[]),r=d.useCallback(c=>{t(u=>({...u,coins:u.coins+c}))},[]),i=d.useCallback((c=1)=>e.energy<c?!1:(t(u=>({...u,energy:u.energy-c,energyRegenAt:u.energyRegenAt||Date.now()+He.ENERGY_REGEN_TIME})),!0),[e.energy]),o=d.useCallback(c=>{t(u=>{const h=c?u.comboStreak+1:0;return{...u,comboStreak:h,bestCombo:Math.max(u.bestCombo,h)}})},[]),a=d.useCallback(()=>{t(c=>({...c,comboStreak:0}))},[]),l=d.useCallback(c=>{e.unlockedAvatars.includes(c)&&t(u=>({...u,avatar:c}))},[e.unlockedAvatars]);return{player:e,addXP:n,addCoins:r,useEnergy:i,updateCombo:o,resetCombo:a,changeAvatar:l,levelProgress:Sx(e.totalXP)}}const mm=d.createContext(null),Yl=()=>{const e=d.useContext(mm);if(!e)throw new Error("useGame must be used within GameProvider");return e};function Wg({children:e}){const t=Ug();return s.jsx(mm.Provider,{value:t,children:e})}function Qg(){return s.jsx(Wg,{children:s.jsx(Oh,{children:s.jsxs(Qe,{element:s.jsx(bx,{}),children:[s.jsx(Qe,{path:"/",element:s.jsx(mu,{})}),s.jsx(Qe,{path:"/play",element:s.jsx(Wx,{})}),s.jsx(Qe,{path:"/play/party",element:s.jsx(cg,{})}),s.jsx(Qe,{path:"/profile",element:s.jsx(ug,{})}),s.jsx(Qe,{path:"/profile/leaderboard",element:s.jsx(dg,{})}),s.jsx(Qe,{path:"/profile/history",element:s.jsx(gg,{})}),s.jsx(Qe,{path:"/profile/rewards",element:s.jsx(zg,{})}),s.jsx(Qe,{path:"/profile/badges",element:s.jsx(Lg,{})}),s.jsx(Qe,{path:"/profile/achievements",element:s.jsx(Fg,{})}),s.jsx(Qe,{path:"/profile/streaks",element:s.jsx(Ig,{})}),s.jsx(Qe,{path:"/profile/quests",element:s.jsx(Dg,{})}),s.jsx(Qe,{path:"/profile/settings",element:s.jsx($g,{})}),s.jsx(Qe,{path:"/leaders",element:s.jsx(Ih,{to:"/profile/leaderboard",replace:!0})}),s.jsx(Qe,{path:"/quiz/:category",element:s.jsx(tg,{})}),s.jsx(Qe,{path:"*",element:s.jsx(mu,{})})]})})})}Vo.createRoot(document.getElementById("root")).render(s.jsx(ut.StrictMode,{children:s.jsx(cx,{children:s.jsx(Qg,{})})}));export{xm as c,_u as g};
