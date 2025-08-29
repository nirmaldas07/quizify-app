(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var h0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ru={exports:{}},Gi={},Pu={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=Symbol.for("react.element"),x0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),v0=Symbol.for("react.strict_mode"),y0=Symbol.for("react.profiler"),b0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),j0=Symbol.for("react.forward_ref"),k0=Symbol.for("react.suspense"),N0=Symbol.for("react.memo"),S0=Symbol.for("react.lazy"),Xa=Symbol.iterator;function C0(e){return e===null||typeof e!="object"?null:(e=Xa&&e[Xa]||e["@@iterator"],typeof e=="function"?e:null)}var zu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tu=Object.assign,Lu={};function Er(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||zu}Er.prototype.isReactComponent={};Er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mu(){}Mu.prototype=Er.prototype;function Hl(e,t,n){this.props=e,this.context=t,this.refs=Lu,this.updater=n||zu}var Yl=Hl.prototype=new Mu;Yl.constructor=Hl;Tu(Yl,Er.prototype);Yl.isPureReactComponent=!0;var Ka=Array.isArray,Fu=Object.prototype.hasOwnProperty,Vl={current:null},Iu={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Fu.call(t,r)&&!Iu.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Es,type:e,key:o,ref:l,props:i,_owner:Vl.current}}function E0(e,t){return{$$typeof:Es,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Es}function _0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ja=/\/+/g;function vo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_0(""+e.key):t.toString(36)}function li(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Es:case x0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+vo(l,0):r,Ka(i)?(n="",e!=null&&(n=e.replace(Ja,"$&/")+"/"),li(i,t,n,"",function(u){return u})):i!=null&&(Gl(i)&&(i=E0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ja,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ka(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+vo(o,a);l+=li(o,t,n,c,i)}else if(c=C0(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+vo(o,a++),l+=li(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ds(e,t,n){if(e==null)return e;var r=[],i=0;return li(e,r,"","",function(o){return t.call(n,o,i++)}),r}function R0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ot={current:null},ai={transition:null},P0={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:ai,ReactCurrentOwner:Vl};function Au(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:Ds,forEach:function(e,t,n){Ds(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ds(e,function(){t++}),t},toArray:function(e){return Ds(e,function(t){return t})||[]},only:function(e){if(!Gl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};me.Component=Er;me.Fragment=g0;me.Profiler=y0;me.PureComponent=Hl;me.StrictMode=v0;me.Suspense=k0;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P0;me.act=Au;me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Tu({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Vl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Fu.call(t,c)&&!Iu.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Es,type:e.type,key:i,ref:o,props:r,_owner:l}};me.createContext=function(e){return e={$$typeof:w0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:b0,_context:e},e.Consumer=e};me.createElement=Du;me.createFactory=function(e){var t=Du.bind(null,e);return t.type=e,t};me.createRef=function(){return{current:null}};me.forwardRef=function(e){return{$$typeof:j0,render:e}};me.isValidElement=Gl;me.lazy=function(e){return{$$typeof:S0,_payload:{_status:-1,_result:e},_init:R0}};me.memo=function(e,t){return{$$typeof:N0,type:e,compare:t===void 0?null:t}};me.startTransition=function(e){var t=ai.transition;ai.transition={};try{e()}finally{ai.transition=t}};me.unstable_act=Au;me.useCallback=function(e,t){return ot.current.useCallback(e,t)};me.useContext=function(e){return ot.current.useContext(e)};me.useDebugValue=function(){};me.useDeferredValue=function(e){return ot.current.useDeferredValue(e)};me.useEffect=function(e,t){return ot.current.useEffect(e,t)};me.useId=function(){return ot.current.useId()};me.useImperativeHandle=function(e,t,n){return ot.current.useImperativeHandle(e,t,n)};me.useInsertionEffect=function(e,t){return ot.current.useInsertionEffect(e,t)};me.useLayoutEffect=function(e,t){return ot.current.useLayoutEffect(e,t)};me.useMemo=function(e,t){return ot.current.useMemo(e,t)};me.useReducer=function(e,t,n){return ot.current.useReducer(e,t,n)};me.useRef=function(e){return ot.current.useRef(e)};me.useState=function(e){return ot.current.useState(e)};me.useSyncExternalStore=function(e,t,n){return ot.current.useSyncExternalStore(e,t,n)};me.useTransition=function(){return ot.current.useTransition()};me.version="18.3.1";Pu.exports=me;var d=Pu.exports;const rt=_u(d);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0=d,T0=Symbol.for("react.element"),L0=Symbol.for("react.fragment"),M0=Object.prototype.hasOwnProperty,F0=z0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I0={key:!0,ref:!0,__self:!0,__source:!0};function Ou(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)M0.call(t,r)&&!I0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:T0,type:e,key:o,ref:l,props:i,_owner:F0.current}}Gi.Fragment=L0;Gi.jsx=Ou;Gi.jsxs=Ou;Ru.exports=Gi;var s=Ru.exports,Ko={},$u={exports:{}},wt={},Bu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,_){var L=M.length;M.push(_);e:for(;0<L;){var A=L-1>>>1,P=M[A];if(0<i(P,_))M[A]=_,M[L]=P,L=A;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var _=M[0],L=M.pop();if(L!==_){M[0]=L;e:for(var A=0,P=M.length,D=P>>>1;A<D;){var W=2*(A+1)-1,H=M[W],ne=W+1,ue=M[ne];if(0>i(H,L))ne<P&&0>i(ue,H)?(M[A]=ue,M[ne]=L,A=ne):(M[A]=H,M[W]=L,A=W);else if(ne<P&&0>i(ue,L))M[A]=ue,M[ne]=L,A=ne;else break e}}return _}function i(M,_){var L=M.sortIndex-_.sortIndex;return L!==0?L:M.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],u=[],h=1,f=null,p=3,k=!1,b=!1,j=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=M)r(u),_.sortIndex=_.expirationTime,t(c,_);else break;_=n(u)}}function S(M){if(j=!1,v(M),!b)if(n(c)!==null)b=!0,Q(R);else{var _=n(u);_!==null&&Y(S,_.startTime-M)}}function R(M,_){b=!1,j&&(j=!1,g(x),x=-1),k=!0;var L=p;try{for(v(_),f=n(c);f!==null&&(!(f.expirationTime>_)||M&&!E());){var A=f.callback;if(typeof A=="function"){f.callback=null,p=f.priorityLevel;var P=A(f.expirationTime<=_);_=e.unstable_now(),typeof P=="function"?f.callback=P:f===n(c)&&r(c),v(_)}else r(c);f=n(c)}if(f!==null)var D=!0;else{var W=n(u);W!==null&&Y(S,W.startTime-_),D=!1}return D}finally{f=null,p=L,k=!1}}var z=!1,N=null,x=-1,y=5,w=-1;function E(){return!(e.unstable_now()-w<y)}function I(){if(N!==null){var M=e.unstable_now();w=M;var _=!0;try{_=N(!0,M)}finally{_?q():(z=!1,N=null)}}else z=!1}var q;if(typeof m=="function")q=function(){m(I)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,F=Z.port2;Z.port1.onmessage=I,q=function(){F.postMessage(null)}}else q=function(){C(I,0)};function Q(M){N=M,z||(z=!0,q())}function Y(M,_){x=C(function(){M(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){b||k||(b=!0,Q(R))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var _=3;break;default:_=p}var L=p;p=_;try{return M()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,_){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var L=p;p=M;try{return _()}finally{p=L}},e.unstable_scheduleCallback=function(M,_,L){var A=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?A+L:A):L=A,M){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=L+P,M={id:h++,callback:_,priorityLevel:M,startTime:L,expirationTime:P,sortIndex:-1},L>A?(M.sortIndex=L,t(u,M),n(c)===null&&M===n(u)&&(j?(g(x),x=-1):j=!0,Y(S,L-A))):(M.sortIndex=P,t(c,M),b||k||(b=!0,Q(R))),M},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(M){var _=p;return function(){var L=p;p=_;try{return M.apply(this,arguments)}finally{p=L}}}})(Uu);Bu.exports=Uu;var D0=Bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=d,bt=D0;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qu=new Set,cs={};function Gn(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(cs[e]=t,e=0;e<t.length;e++)qu.add(t[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jo=Object.prototype.hasOwnProperty,O0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Za={},ec={};function $0(e){return Jo.call(ec,e)?!0:Jo.call(Za,e)?!1:O0.test(e)?ec[e]=!0:(Za[e]=!0,!1)}function B0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U0(e,t,n,r){if(t===null||typeof t>"u"||B0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function lt(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ge[e]=new lt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ge[t]=new lt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ge[e]=new lt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ge[e]=new lt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ge[e]=new lt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ge[e]=new lt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ge[e]=new lt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ge[e]=new lt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ge[e]=new lt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xl=/[\-:]([a-z])/g;function Kl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xl,Kl);Ge[t]=new lt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xl,Kl);Ge[t]=new lt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xl,Kl);Ge[t]=new lt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ge[e]=new lt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ge[e]=new lt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jl(e,t,n,r){var i=Ge.hasOwnProperty(t)?Ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U0(t,n,i,r)&&(n=null),r||i===null?$0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var an=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,As=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),Zo=Symbol.for("react.profiler"),Wu=Symbol.for("react.provider"),Qu=Symbol.for("react.context"),ea=Symbol.for("react.forward_ref"),el=Symbol.for("react.suspense"),tl=Symbol.for("react.suspense_list"),ta=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),Hu=Symbol.for("react.offscreen"),tc=Symbol.iterator;function Fr(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Object.assign,yo;function Gr(e){if(yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yo=t&&t[1]||""}return`
`+yo+e}var bo=!1;function wo(e,t){if(!e||bo)return"";bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{bo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gr(e):""}function q0(e){switch(e.tag){case 5:return Gr(e.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return e=wo(e.type,!1),e;case 11:return e=wo(e.type.render,!1),e;case 1:return e=wo(e.type,!0),e;default:return""}}function nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case Zo:return"Profiler";case Zl:return"StrictMode";case el:return"Suspense";case tl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qu:return(e.displayName||"Context")+".Consumer";case Wu:return(e._context.displayName||"Context")+".Provider";case ea:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ta:return t=e.displayName||null,t!==null?t:nl(e.type)||"Memo";case pn:t=e._payload,e=e._init;try{return nl(e(t))}catch{}}return null}function W0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nl(t);case 8:return t===Zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Q0(e){var t=Yu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Os(e){e._valueTracker||(e._valueTracker=Q0(e))}function Vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rl(e,t){var n=t.checked;return ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gu(e,t){t=t.checked,t!=null&&Jl(e,"checked",t,!1)}function sl(e,t){Gu(e,t);var n=Rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?il(e,t.type,n):t.hasOwnProperty("defaultValue")&&il(e,t.type,Rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function il(e,t,n){(t!=="number"||ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xr=Array.isArray;function mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function sc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(Xr(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rn(n)}}function Xu(e,t){var n=Rn(t.value),r=Rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ic(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ku(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ll(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ku(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $s,Ju=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($s=$s||document.createElement("div"),$s.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$s.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function us(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H0=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){H0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zr[t]=Zr[e]})});function Zu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+t).trim():t+"px"}function ed(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Y0=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function al(e,t){if(t){if(Y0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=null;function na(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,pr=null,hr=null;function oc(e){if(e=Ps(e)){if(typeof dl!="function")throw Error(U(280));var t=e.stateNode;t&&(t=eo(t),dl(e.stateNode,e.type,t))}}function td(e){pr?hr?hr.push(e):hr=[e]:pr=e}function nd(){if(pr){var e=pr,t=hr;if(hr=pr=null,oc(e),t)for(e=0;e<t.length;e++)oc(t[e])}}function rd(e,t){return e(t)}function sd(){}var jo=!1;function id(e,t,n){if(jo)return e(t,n);jo=!0;try{return rd(e,t,n)}finally{jo=!1,(pr!==null||hr!==null)&&(sd(),nd())}}function ds(e,t){var n=e.stateNode;if(n===null)return null;var r=eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var fl=!1;if(nn)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){fl=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{fl=!1}function V0(e,t,n,r,i,o,l,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var es=!1,Ni=null,Si=!1,ml=null,G0={onError:function(e){es=!0,Ni=e}};function X0(e,t,n,r,i,o,l,a,c){es=!1,Ni=null,V0.apply(G0,arguments)}function K0(e,t,n,r,i,o,l,a,c){if(X0.apply(this,arguments),es){if(es){var u=Ni;es=!1,Ni=null}else throw Error(U(198));Si||(Si=!0,ml=u)}}function Xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function od(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lc(e){if(Xn(e)!==e)throw Error(U(188))}function J0(e){var t=e.alternate;if(!t){if(t=Xn(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return lc(i),e;if(o===r)return lc(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function ld(e){return e=J0(e),e!==null?ad(e):null}function ad(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ad(e);if(t!==null)return t;e=e.sibling}return null}var cd=bt.unstable_scheduleCallback,ac=bt.unstable_cancelCallback,Z0=bt.unstable_shouldYield,em=bt.unstable_requestPaint,Me=bt.unstable_now,tm=bt.unstable_getCurrentPriorityLevel,ra=bt.unstable_ImmediatePriority,ud=bt.unstable_UserBlockingPriority,Ci=bt.unstable_NormalPriority,nm=bt.unstable_LowPriority,dd=bt.unstable_IdlePriority,Xi=null,Yt=null;function rm(e){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Xi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:om,sm=Math.log,im=Math.LN2;function om(e){return e>>>=0,e===0?32:31-(sm(e)/im|0)|0}var Bs=64,Us=4194304;function Kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ei(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Kr(a):(o&=l,o!==0&&(r=Kr(o)))}else l=n&~i,l!==0?r=Kr(l):o!==0&&(r=Kr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),i=1<<n,r|=e[n],t&=~i;return r}function lm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function am(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ft(o),a=1<<l,c=i[l];c===-1?(!(a&n)||a&r)&&(i[l]=lm(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fd(){var e=Bs;return Bs<<=1,!(Bs&4194240)&&(Bs=64),e}function ko(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _s(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function cm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var we=0;function md(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pd,ia,hd,xd,gd,hl=!1,qs=[],wn=null,jn=null,kn=null,fs=new Map,ms=new Map,gn=[],um="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cc(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":fs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ms.delete(t.pointerId)}}function Dr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ps(t),t!==null&&ia(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function dm(e,t,n,r,i){switch(t){case"focusin":return wn=Dr(wn,e,t,n,r,i),!0;case"dragenter":return jn=Dr(jn,e,t,n,r,i),!0;case"mouseover":return kn=Dr(kn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return fs.set(o,Dr(fs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ms.set(o,Dr(ms.get(o)||null,e,t,n,r,i)),!0}return!1}function vd(e){var t=An(e.target);if(t!==null){var n=Xn(t);if(n!==null){if(t=n.tag,t===13){if(t=od(n),t!==null){e.blockedOn=t,gd(e.priority,function(){hd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ul=r,n.target.dispatchEvent(r),ul=null}else return t=Ps(n),t!==null&&ia(t),e.blockedOn=n,!1;t.shift()}return!0}function uc(e,t,n){ci(e)&&n.delete(t)}function fm(){hl=!1,wn!==null&&ci(wn)&&(wn=null),jn!==null&&ci(jn)&&(jn=null),kn!==null&&ci(kn)&&(kn=null),fs.forEach(uc),ms.forEach(uc)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,hl||(hl=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,fm)))}function ps(e){function t(i){return Ar(i,e)}if(0<qs.length){Ar(qs[0],e);for(var n=1;n<qs.length;n++){var r=qs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&Ar(wn,e),jn!==null&&Ar(jn,e),kn!==null&&Ar(kn,e),fs.forEach(t),ms.forEach(t),n=0;n<gn.length;n++)r=gn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gn.length&&(n=gn[0],n.blockedOn===null);)vd(n),n.blockedOn===null&&gn.shift()}var xr=an.ReactCurrentBatchConfig,_i=!0;function mm(e,t,n,r){var i=we,o=xr.transition;xr.transition=null;try{we=1,oa(e,t,n,r)}finally{we=i,xr.transition=o}}function pm(e,t,n,r){var i=we,o=xr.transition;xr.transition=null;try{we=4,oa(e,t,n,r)}finally{we=i,xr.transition=o}}function oa(e,t,n,r){if(_i){var i=xl(e,t,n,r);if(i===null)Lo(e,t,r,Ri,n),cc(e,r);else if(dm(i,e,t,n,r))r.stopPropagation();else if(cc(e,r),t&4&&-1<um.indexOf(e)){for(;i!==null;){var o=Ps(i);if(o!==null&&pd(o),o=xl(e,t,n,r),o===null&&Lo(e,t,r,Ri,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Lo(e,t,r,null,n)}}var Ri=null;function xl(e,t,n,r){if(Ri=null,e=na(r),e=An(e),e!==null)if(t=Xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=od(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ri=e,null}function yd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tm()){case ra:return 1;case ud:return 4;case Ci:case nm:return 16;case dd:return 536870912;default:return 16}default:return 16}}var yn=null,la=null,ui=null;function bd(){if(ui)return ui;var e,t=la,n=t.length,r,i="value"in yn?yn.value:yn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ui=i.slice(e,1<r?1-r:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ws(){return!0}function dc(){return!1}function jt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ws:dc,this.isPropagationStopped=dc,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ws)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ws)},persist:function(){},isPersistent:Ws}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=jt(_r),Rs=ze({},_r,{view:0,detail:0}),hm=jt(Rs),No,So,Or,Ki=ze({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(No=e.screenX-Or.screenX,So=e.screenY-Or.screenY):So=No=0,Or=e),No)},movementY:function(e){return"movementY"in e?e.movementY:So}}),fc=jt(Ki),xm=ze({},Ki,{dataTransfer:0}),gm=jt(xm),vm=ze({},Rs,{relatedTarget:0}),Co=jt(vm),ym=ze({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),bm=jt(ym),wm=ze({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jm=jt(wm),km=ze({},_r,{data:0}),mc=jt(km),Nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Em(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cm[e])?!!t[e]:!1}function ca(){return Em}var _m=ze({},Rs,{key:function(e){if(e.key){var t=Nm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ca,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rm=jt(_m),Pm=ze({},Ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pc=jt(Pm),zm=ze({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ca}),Tm=jt(zm),Lm=ze({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mm=jt(Lm),Fm=ze({},Ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=jt(Fm),Dm=[9,13,27,32],ua=nn&&"CompositionEvent"in window,ts=null;nn&&"documentMode"in document&&(ts=document.documentMode);var Am=nn&&"TextEvent"in window&&!ts,wd=nn&&(!ua||ts&&8<ts&&11>=ts),hc=String.fromCharCode(32),xc=!1;function jd(e,t){switch(e){case"keyup":return Dm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function Om(e,t){switch(e){case"compositionend":return kd(t);case"keypress":return t.which!==32?null:(xc=!0,hc);case"textInput":return e=t.data,e===hc&&xc?null:e;default:return null}}function $m(e,t){if(nr)return e==="compositionend"||!ua&&jd(e,t)?(e=bd(),ui=la=yn=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wd&&t.locale!=="ko"?null:t.data;default:return null}}var Bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bm[e.type]:t==="textarea"}function Nd(e,t,n,r){td(r),t=Pi(t,"onChange"),0<t.length&&(n=new aa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ns=null,hs=null;function Um(e){Fd(e,0)}function Ji(e){var t=ir(e);if(Vu(t))return e}function qm(e,t){if(e==="change")return t}var Sd=!1;if(nn){var Eo;if(nn){var _o="oninput"in document;if(!_o){var vc=document.createElement("div");vc.setAttribute("oninput","return;"),_o=typeof vc.oninput=="function"}Eo=_o}else Eo=!1;Sd=Eo&&(!document.documentMode||9<document.documentMode)}function yc(){ns&&(ns.detachEvent("onpropertychange",Cd),hs=ns=null)}function Cd(e){if(e.propertyName==="value"&&Ji(hs)){var t=[];Nd(t,hs,e,na(e)),id(Um,t)}}function Wm(e,t,n){e==="focusin"?(yc(),ns=t,hs=n,ns.attachEvent("onpropertychange",Cd)):e==="focusout"&&yc()}function Qm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ji(hs)}function Hm(e,t){if(e==="click")return Ji(t)}function Ym(e,t){if(e==="input"||e==="change")return Ji(t)}function Vm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:Vm;function xs(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jo.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wc(e,t){var n=bc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bc(n)}}function Ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _d(){for(var e=window,t=ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ki(e.document)}return t}function da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gm(e){var t=_d(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ed(n.ownerDocument.documentElement,n)){if(r!==null&&da(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=wc(n,o);var l=wc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xm=nn&&"documentMode"in document&&11>=document.documentMode,rr=null,gl=null,rs=null,vl=!1;function jc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vl||rr==null||rr!==ki(r)||(r=rr,"selectionStart"in r&&da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rs&&xs(rs,r)||(rs=r,r=Pi(gl,"onSelect"),0<r.length&&(t=new aa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function Qs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var sr={animationend:Qs("Animation","AnimationEnd"),animationiteration:Qs("Animation","AnimationIteration"),animationstart:Qs("Animation","AnimationStart"),transitionend:Qs("Transition","TransitionEnd")},Ro={},Rd={};nn&&(Rd=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function Zi(e){if(Ro[e])return Ro[e];if(!sr[e])return e;var t=sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rd)return Ro[e]=t[n];return e}var Pd=Zi("animationend"),zd=Zi("animationiteration"),Td=Zi("animationstart"),Ld=Zi("transitionend"),Md=new Map,kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){Md.set(e,t),Gn(t,[e])}for(var Po=0;Po<kc.length;Po++){var zo=kc[Po],Km=zo.toLowerCase(),Jm=zo[0].toUpperCase()+zo.slice(1);zn(Km,"on"+Jm)}zn(Pd,"onAnimationEnd");zn(zd,"onAnimationIteration");zn(Td,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(Ld,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));function Nc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,K0(r,t,void 0,e),e.currentTarget=null}function Fd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;Nc(i,a,u),o=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,u=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;Nc(i,a,u),o=c}}}if(Si)throw e=ml,Si=!1,ml=null,e}function Ne(e,t){var n=t[kl];n===void 0&&(n=t[kl]=new Set);var r=e+"__bubble";n.has(r)||(Id(t,e,2,!1),n.add(r))}function To(e,t,n){var r=0;t&&(r|=4),Id(n,e,r,t)}var Hs="_reactListening"+Math.random().toString(36).slice(2);function gs(e){if(!e[Hs]){e[Hs]=!0,qu.forEach(function(n){n!=="selectionchange"&&(Zm.has(n)||To(n,!1,e),To(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hs]||(t[Hs]=!0,To("selectionchange",!1,t))}}function Id(e,t,n,r){switch(yd(t)){case 1:var i=mm;break;case 4:i=pm;break;default:i=oa}n=i.bind(null,t,n,e),i=void 0,!fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Lo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;a!==null;){if(l=An(a),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}a=a.parentNode}}r=r.return}id(function(){var u=o,h=na(n),f=[];e:{var p=Md.get(e);if(p!==void 0){var k=aa,b=e;switch(e){case"keypress":if(di(n)===0)break e;case"keydown":case"keyup":k=Rm;break;case"focusin":b="focus",k=Co;break;case"focusout":b="blur",k=Co;break;case"beforeblur":case"afterblur":k=Co;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=gm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Tm;break;case Pd:case zd:case Td:k=bm;break;case Ld:k=Mm;break;case"scroll":k=hm;break;case"wheel":k=Im;break;case"copy":case"cut":case"paste":k=jm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=pc}var j=(t&4)!==0,C=!j&&e==="scroll",g=j?p!==null?p+"Capture":null:p;j=[];for(var m=u,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=ds(m,g),S!=null&&j.push(vs(m,S,v)))),C)break;m=m.return}0<j.length&&(p=new k(p,b,null,n,h),f.push({event:p,listeners:j}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",p&&n!==ul&&(b=n.relatedTarget||n.fromElement)&&(An(b)||b[rn]))break e;if((k||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,k?(b=n.relatedTarget||n.toElement,k=u,b=b?An(b):null,b!==null&&(C=Xn(b),b!==C||b.tag!==5&&b.tag!==6)&&(b=null)):(k=null,b=u),k!==b)){if(j=fc,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(j=pc,S="onPointerLeave",g="onPointerEnter",m="pointer"),C=k==null?p:ir(k),v=b==null?p:ir(b),p=new j(S,m+"leave",k,n,h),p.target=C,p.relatedTarget=v,S=null,An(h)===u&&(j=new j(g,m+"enter",b,n,h),j.target=v,j.relatedTarget=C,S=j),C=S,k&&b)t:{for(j=k,g=b,m=0,v=j;v;v=Zn(v))m++;for(v=0,S=g;S;S=Zn(S))v++;for(;0<m-v;)j=Zn(j),m--;for(;0<v-m;)g=Zn(g),v--;for(;m--;){if(j===g||g!==null&&j===g.alternate)break t;j=Zn(j),g=Zn(g)}j=null}else j=null;k!==null&&Sc(f,p,k,j,!1),b!==null&&C!==null&&Sc(f,C,b,j,!0)}}e:{if(p=u?ir(u):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var R=qm;else if(gc(p))if(Sd)R=Ym;else{R=Qm;var z=Wm}else(k=p.nodeName)&&k.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(R=Hm);if(R&&(R=R(e,u))){Nd(f,R,n,h);break e}z&&z(e,p,u),e==="focusout"&&(z=p._wrapperState)&&z.controlled&&p.type==="number"&&il(p,"number",p.value)}switch(z=u?ir(u):window,e){case"focusin":(gc(z)||z.contentEditable==="true")&&(rr=z,gl=u,rs=null);break;case"focusout":rs=gl=rr=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,jc(f,n,h);break;case"selectionchange":if(Xm)break;case"keydown":case"keyup":jc(f,n,h)}var N;if(ua)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else nr?jd(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(wd&&n.locale!=="ko"&&(nr||x!=="onCompositionStart"?x==="onCompositionEnd"&&nr&&(N=bd()):(yn=h,la="value"in yn?yn.value:yn.textContent,nr=!0)),z=Pi(u,x),0<z.length&&(x=new mc(x,e,null,n,h),f.push({event:x,listeners:z}),N?x.data=N:(N=kd(n),N!==null&&(x.data=N)))),(N=Am?Om(e,n):$m(e,n))&&(u=Pi(u,"onBeforeInput"),0<u.length&&(h=new mc("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=N))}Fd(f,t)})}function vs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ds(e,n),o!=null&&r.unshift(vs(e,o,i)),o=ds(e,t),o!=null&&r.push(vs(e,o,i))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=ds(n,o),c!=null&&l.unshift(vs(n,c,a))):i||(c=ds(n,o),c!=null&&l.push(vs(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var ep=/\r\n?/g,tp=/\u0000|\uFFFD/g;function Cc(e){return(typeof e=="string"?e:""+e).replace(ep,`
`).replace(tp,"")}function Ys(e,t,n){if(t=Cc(t),Cc(e)!==t&&n)throw Error(U(425))}function zi(){}var yl=null,bl=null;function wl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,np=typeof clearTimeout=="function"?clearTimeout:void 0,Ec=typeof Promise=="function"?Promise:void 0,rp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ec<"u"?function(e){return Ec.resolve(null).then(e).catch(sp)}:jl;function sp(e){setTimeout(function(){throw e})}function Mo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ps(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ps(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Rr,ys="__reactProps$"+Rr,rn="__reactContainer$"+Rr,kl="__reactEvents$"+Rr,ip="__reactListeners$"+Rr,op="__reactHandles$"+Rr;function An(e){var t=e[Qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rn]||n[Qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_c(e);e!==null;){if(n=e[Qt])return n;e=_c(e)}return t}e=n,n=e.parentNode}return null}function Ps(e){return e=e[Qt]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function eo(e){return e[ys]||null}var Nl=[],or=-1;function Tn(e){return{current:e}}function Se(e){0>or||(e.current=Nl[or],Nl[or]=null,or--)}function je(e,t){or++,Nl[or]=e.current,e.current=t}var Pn={},tt=Tn(Pn),ft=Tn(!1),Wn=Pn;function wr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function mt(e){return e=e.childContextTypes,e!=null}function Ti(){Se(ft),Se(tt)}function Rc(e,t,n){if(tt.current!==Pn)throw Error(U(168));je(tt,t),je(ft,n)}function Dd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,W0(e)||"Unknown",i));return ze({},n,r)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Wn=tt.current,je(tt,e),je(ft,ft.current),!0}function Pc(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=Dd(e,t,Wn),r.__reactInternalMemoizedMergedChildContext=e,Se(ft),Se(tt),je(tt,e)):Se(ft),je(ft,n)}var Kt=null,to=!1,Fo=!1;function Ad(e){Kt===null?Kt=[e]:Kt.push(e)}function lp(e){to=!0,Ad(e)}function Ln(){if(!Fo&&Kt!==null){Fo=!0;var e=0,t=we;try{var n=Kt;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,to=!1}catch(i){throw Kt!==null&&(Kt=Kt.slice(e+1)),cd(ra,Ln),i}finally{we=t,Fo=!1}}return null}var lr=[],ar=0,Mi=null,Fi=0,kt=[],Nt=0,Qn=null,Jt=1,Zt="";function In(e,t){lr[ar++]=Fi,lr[ar++]=Mi,Mi=e,Fi=t}function Od(e,t,n){kt[Nt++]=Jt,kt[Nt++]=Zt,kt[Nt++]=Qn,Qn=e;var r=Jt;e=Zt;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var o=32-Ft(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Jt=1<<32-Ft(t)+i|n<<i|r,Zt=o+e}else Jt=1<<o|n<<i|r,Zt=e}function fa(e){e.return!==null&&(In(e,1),Od(e,1,0))}function ma(e){for(;e===Mi;)Mi=lr[--ar],lr[ar]=null,Fi=lr[--ar],lr[ar]=null;for(;e===Qn;)Qn=kt[--Nt],kt[Nt]=null,Zt=kt[--Nt],kt[Nt]=null,Jt=kt[--Nt],kt[Nt]=null}var yt=null,vt=null,Ce=!1,Lt=null;function $d(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,vt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:Jt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,vt=null,!0):!1;default:return!1}}function Sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cl(e){if(Ce){var t=vt;if(t){var n=t;if(!zc(e,t)){if(Sl(e))throw Error(U(418));t=Nn(n.nextSibling);var r=yt;t&&zc(e,t)?$d(r,n):(e.flags=e.flags&-4097|2,Ce=!1,yt=e)}}else{if(Sl(e))throw Error(U(418));e.flags=e.flags&-4097|2,Ce=!1,yt=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function Vs(e){if(e!==yt)return!1;if(!Ce)return Tc(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wl(e.type,e.memoizedProps)),t&&(t=vt)){if(Sl(e))throw Bd(),Error(U(418));for(;t;)$d(e,t),t=Nn(t.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vt=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=yt?Nn(e.stateNode.nextSibling):null;return!0}function Bd(){for(var e=vt;e;)e=Nn(e.nextSibling)}function jr(){vt=yt=null,Ce=!1}function pa(e){Lt===null?Lt=[e]:Lt.push(e)}var ap=an.ReactCurrentBatchConfig;function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function Gs(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lc(e){var t=e._init;return t(e._payload)}function Ud(e){function t(g,m){if(e){var v=g.deletions;v===null?(g.deletions=[m],g.flags|=16):v.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=_n(g,m),g.index=0,g.sibling=null,g}function o(g,m,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<m?(g.flags|=2,m):v):(g.flags|=2,m)):(g.flags|=1048576,m)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,m,v,S){return m===null||m.tag!==6?(m=Uo(v,g.mode,S),m.return=g,m):(m=i(m,v),m.return=g,m)}function c(g,m,v,S){var R=v.type;return R===tr?h(g,m,v.props.children,S,v.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===pn&&Lc(R)===m.type)?(S=i(m,v.props),S.ref=$r(g,m,v),S.return=g,S):(S=vi(v.type,v.key,v.props,null,g.mode,S),S.ref=$r(g,m,v),S.return=g,S)}function u(g,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=qo(v,g.mode,S),m.return=g,m):(m=i(m,v.children||[]),m.return=g,m)}function h(g,m,v,S,R){return m===null||m.tag!==7?(m=Un(v,g.mode,S,R),m.return=g,m):(m=i(m,v),m.return=g,m)}function f(g,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Uo(""+m,g.mode,v),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case As:return v=vi(m.type,m.key,m.props,null,g.mode,v),v.ref=$r(g,null,m),v.return=g,v;case er:return m=qo(m,g.mode,v),m.return=g,m;case pn:var S=m._init;return f(g,S(m._payload),v)}if(Xr(m)||Fr(m))return m=Un(m,g.mode,v,null),m.return=g,m;Gs(g,m)}return null}function p(g,m,v,S){var R=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(g,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case As:return v.key===R?c(g,m,v,S):null;case er:return v.key===R?u(g,m,v,S):null;case pn:return R=v._init,p(g,m,R(v._payload),S)}if(Xr(v)||Fr(v))return R!==null?null:h(g,m,v,S,null);Gs(g,v)}return null}function k(g,m,v,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,a(m,g,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case As:return g=g.get(S.key===null?v:S.key)||null,c(m,g,S,R);case er:return g=g.get(S.key===null?v:S.key)||null,u(m,g,S,R);case pn:var z=S._init;return k(g,m,v,z(S._payload),R)}if(Xr(S)||Fr(S))return g=g.get(v)||null,h(m,g,S,R,null);Gs(m,S)}return null}function b(g,m,v,S){for(var R=null,z=null,N=m,x=m=0,y=null;N!==null&&x<v.length;x++){N.index>x?(y=N,N=null):y=N.sibling;var w=p(g,N,v[x],S);if(w===null){N===null&&(N=y);break}e&&N&&w.alternate===null&&t(g,N),m=o(w,m,x),z===null?R=w:z.sibling=w,z=w,N=y}if(x===v.length)return n(g,N),Ce&&In(g,x),R;if(N===null){for(;x<v.length;x++)N=f(g,v[x],S),N!==null&&(m=o(N,m,x),z===null?R=N:z.sibling=N,z=N);return Ce&&In(g,x),R}for(N=r(g,N);x<v.length;x++)y=k(N,g,x,v[x],S),y!==null&&(e&&y.alternate!==null&&N.delete(y.key===null?x:y.key),m=o(y,m,x),z===null?R=y:z.sibling=y,z=y);return e&&N.forEach(function(E){return t(g,E)}),Ce&&In(g,x),R}function j(g,m,v,S){var R=Fr(v);if(typeof R!="function")throw Error(U(150));if(v=R.call(v),v==null)throw Error(U(151));for(var z=R=null,N=m,x=m=0,y=null,w=v.next();N!==null&&!w.done;x++,w=v.next()){N.index>x?(y=N,N=null):y=N.sibling;var E=p(g,N,w.value,S);if(E===null){N===null&&(N=y);break}e&&N&&E.alternate===null&&t(g,N),m=o(E,m,x),z===null?R=E:z.sibling=E,z=E,N=y}if(w.done)return n(g,N),Ce&&In(g,x),R;if(N===null){for(;!w.done;x++,w=v.next())w=f(g,w.value,S),w!==null&&(m=o(w,m,x),z===null?R=w:z.sibling=w,z=w);return Ce&&In(g,x),R}for(N=r(g,N);!w.done;x++,w=v.next())w=k(N,g,x,w.value,S),w!==null&&(e&&w.alternate!==null&&N.delete(w.key===null?x:w.key),m=o(w,m,x),z===null?R=w:z.sibling=w,z=w);return e&&N.forEach(function(I){return t(g,I)}),Ce&&In(g,x),R}function C(g,m,v,S){if(typeof v=="object"&&v!==null&&v.type===tr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case As:e:{for(var R=v.key,z=m;z!==null;){if(z.key===R){if(R=v.type,R===tr){if(z.tag===7){n(g,z.sibling),m=i(z,v.props.children),m.return=g,g=m;break e}}else if(z.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===pn&&Lc(R)===z.type){n(g,z.sibling),m=i(z,v.props),m.ref=$r(g,z,v),m.return=g,g=m;break e}n(g,z);break}else t(g,z);z=z.sibling}v.type===tr?(m=Un(v.props.children,g.mode,S,v.key),m.return=g,g=m):(S=vi(v.type,v.key,v.props,null,g.mode,S),S.ref=$r(g,m,v),S.return=g,g=S)}return l(g);case er:e:{for(z=v.key;m!==null;){if(m.key===z)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(g,m.sibling),m=i(m,v.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=qo(v,g.mode,S),m.return=g,g=m}return l(g);case pn:return z=v._init,C(g,m,z(v._payload),S)}if(Xr(v))return b(g,m,v,S);if(Fr(v))return j(g,m,v,S);Gs(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,v),m.return=g,g=m):(n(g,m),m=Uo(v,g.mode,S),m.return=g,g=m),l(g)):n(g,m)}return C}var kr=Ud(!0),qd=Ud(!1),Ii=Tn(null),Di=null,cr=null,ha=null;function xa(){ha=cr=Di=null}function ga(e){var t=Ii.current;Se(Ii),e._currentValue=t}function El(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){Di=e,ha=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(dt=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(ha!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(Di===null)throw Error(U(308));cr=e,Di.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var On=null;function va(e){On===null?On=[e]:On.push(e)}function Wd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,va(t)):(n.next=i.next,i.next=n),t.interleaved=n,sn(e,r)}function sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var hn=!1;function ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,sn(e,n)}return i=r.interleaved,i===null?(t.next=t,va(r)):(t.next=i.next,i.next=t),r.interleaved=t,sn(e,n)}function fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}function Mc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ai(e,t,n,r){var i=e.updateQueue;hn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,l===null?o=u:l.next=u,l=c;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;l=0,h=u=c=null,a=o;do{var p=a.lane,k=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,j=a;switch(p=t,k=n,j.tag){case 1:if(b=j.payload,typeof b=="function"){f=b.call(k,f,p);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=j.payload,p=typeof b=="function"?b.call(k,f,p):b,p==null)break e;f=ze({},f,p);break e;case 2:hn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else k={eventTime:k,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=k,c=f):h=h.next=k,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(h===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yn|=l,e.lanes=l,e.memoizedState=f}}function Fc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var zs={},Vt=Tn(zs),bs=Tn(zs),ws=Tn(zs);function $n(e){if(e===zs)throw Error(U(174));return e}function ba(e,t){switch(je(ws,t),je(bs,e),je(Vt,zs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ll(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ll(t,e)}Se(Vt),je(Vt,t)}function Nr(){Se(Vt),Se(bs),Se(ws)}function Hd(e){$n(ws.current);var t=$n(Vt.current),n=ll(t,e.type);t!==n&&(je(bs,e),je(Vt,n))}function wa(e){bs.current===e&&(Se(Vt),Se(bs))}var Re=Tn(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Io=[];function ja(){for(var e=0;e<Io.length;e++)Io[e]._workInProgressVersionPrimary=null;Io.length=0}var mi=an.ReactCurrentDispatcher,Do=an.ReactCurrentBatchConfig,Hn=0,Pe=null,De=null,Be=null,$i=!1,ss=!1,js=0,cp=0;function Je(){throw Error(U(321))}function ka(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function Na(e,t,n,r,i,o){if(Hn=o,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,mi.current=e===null||e.memoizedState===null?mp:pp,e=n(r,i),ss){o=0;do{if(ss=!1,js=0,25<=o)throw Error(U(301));o+=1,Be=De=null,t.updateQueue=null,mi.current=hp,e=n(r,i)}while(ss)}if(mi.current=Bi,t=De!==null&&De.next!==null,Hn=0,Be=De=Pe=null,$i=!1,t)throw Error(U(300));return e}function Sa(){var e=js!==0;return js=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Pe.memoizedState=Be=e:Be=Be.next=e,Be}function _t(){if(De===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Be===null?Pe.memoizedState:Be.next;if(t!==null)Be=t,De=e;else{if(e===null)throw Error(U(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Be===null?Pe.memoizedState=Be=e:Be=Be.next=e}return Be}function ks(e,t){return typeof t=="function"?t(e):t}function Ao(e){var t=_t(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=De,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,c=null,u=o;do{var h=u.lane;if((Hn&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=f,l=r):c=c.next=f,Pe.lanes|=h,Yn|=h}u=u.next}while(u!==null&&u!==o);c===null?l=r:c.next=a,Dt(r,t.memoizedState)||(dt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Pe.lanes|=o,Yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oo(e){var t=_t(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Dt(o,t.memoizedState)||(dt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Yd(){}function Vd(e,t){var n=Pe,r=_t(),i=t(),o=!Dt(r.memoizedState,i);if(o&&(r.memoizedState=i,dt=!0),r=r.queue,Ca(Kd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Ns(9,Xd.bind(null,n,r,i,t),void 0,null),Ue===null)throw Error(U(349));Hn&30||Gd(n,t,i)}return i}function Gd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xd(e,t,n,r){t.value=n,t.getSnapshot=r,Jd(t)&&Zd(e)}function Kd(e,t,n){return n(function(){Jd(t)&&Zd(e)})}function Jd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function Zd(e){var t=sn(e,1);t!==null&&It(t,e,1,-1)}function Ic(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:e},t.queue=e,e=e.dispatch=fp.bind(null,Pe,e),[t.memoizedState,e]}function Ns(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ef(){return _t().memoizedState}function pi(e,t,n,r){var i=Wt();Pe.flags|=e,i.memoizedState=Ns(1|t,n,void 0,r===void 0?null:r)}function no(e,t,n,r){var i=_t();r=r===void 0?null:r;var o=void 0;if(De!==null){var l=De.memoizedState;if(o=l.destroy,r!==null&&ka(r,l.deps)){i.memoizedState=Ns(t,n,o,r);return}}Pe.flags|=e,i.memoizedState=Ns(1|t,n,o,r)}function Dc(e,t){return pi(8390656,8,e,t)}function Ca(e,t){return no(2048,8,e,t)}function tf(e,t){return no(4,2,e,t)}function nf(e,t){return no(4,4,e,t)}function rf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sf(e,t,n){return n=n!=null?n.concat([e]):null,no(4,4,rf.bind(null,t,e),n)}function Ea(){}function of(e,t){var n=_t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lf(e,t){var n=_t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function af(e,t,n){return Hn&21?(Dt(n,t)||(n=fd(),Pe.lanes|=n,Yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n)}function up(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=Do.transition;Do.transition={};try{e(!1),t()}finally{we=n,Do.transition=r}}function cf(){return _t().memoizedState}function dp(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uf(e))df(t,n);else if(n=Wd(e,t,n,r),n!==null){var i=it();It(n,e,r,i),ff(n,t,r)}}function fp(e,t,n){var r=En(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uf(e))df(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Dt(a,l)){var c=t.interleaved;c===null?(i.next=i,va(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Wd(e,t,i,r),n!==null&&(i=it(),It(n,e,r,i),ff(n,t,r))}}function uf(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function df(e,t){ss=$i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ff(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}var Bi={readContext:Et,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},mp={readContext:Et,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Dc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,pi(4194308,4,rf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pi(4194308,4,e,t)},useInsertionEffect:function(e,t){return pi(4,2,e,t)},useMemo:function(e,t){var n=Wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dp.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:Ic,useDebugValue:Ea,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=Ic(!1),t=e[0];return e=up.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,i=Wt();if(Ce){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),Ue===null)throw Error(U(349));Hn&30||Gd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Dc(Kd.bind(null,r,o,e),[e]),r.flags|=2048,Ns(9,Xd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Wt(),t=Ue.identifierPrefix;if(Ce){var n=Zt,r=Jt;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=js++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pp={readContext:Et,useCallback:of,useContext:Et,useEffect:Ca,useImperativeHandle:sf,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:lf,useReducer:Ao,useRef:ef,useState:function(){return Ao(ks)},useDebugValue:Ea,useDeferredValue:function(e){var t=_t();return af(t,De.memoizedState,e)},useTransition:function(){var e=Ao(ks)[0],t=_t().memoizedState;return[e,t]},useMutableSource:Yd,useSyncExternalStore:Vd,useId:cf,unstable_isNewReconciler:!1},hp={readContext:Et,useCallback:of,useContext:Et,useEffect:Ca,useImperativeHandle:sf,useInsertionEffect:tf,useLayoutEffect:nf,useMemo:lf,useReducer:Oo,useRef:ef,useState:function(){return Oo(ks)},useDebugValue:Ea,useDeferredValue:function(e){var t=_t();return De===null?t.memoizedState=e:af(t,De.memoizedState,e)},useTransition:function(){var e=Oo(ks)[0],t=_t().memoizedState;return[e,t]},useMutableSource:Yd,useSyncExternalStore:Vd,useId:cf,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=ze({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ro={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=it(),i=En(e),o=en(r,i);o.payload=t,n!=null&&(o.callback=n),t=Sn(e,o,i),t!==null&&(It(t,e,i,r),fi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=it(),i=En(e),o=en(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Sn(e,o,i),t!==null&&(It(t,e,i,r),fi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),r=En(e),i=en(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sn(e,i,r),t!==null&&(It(t,e,r,n),fi(t,e,r))}};function Ac(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!xs(n,r)||!xs(i,o):!0}function mf(e,t,n){var r=!1,i=Pn,o=t.contextType;return typeof o=="object"&&o!==null?o=Et(o):(i=mt(t)?Wn:tt.current,r=t.contextTypes,o=(r=r!=null)?wr(e,i):Pn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Oc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function Rl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ya(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Et(o):(o=mt(t)?Wn:tt.current,i.context=wr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_l(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ro.enqueueReplaceState(i,i.state,null),Ai(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Sr(e,t){try{var n="",r=t;do n+=q0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function $o(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xp=typeof WeakMap=="function"?WeakMap:Map;function pf(e,t,n){n=en(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qi||(qi=!0,$l=r),Pl(e,t)},n}function hf(e,t,n){n=en(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Pl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Pl(e,t),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function $c(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Pp.bind(null,e,t,n),t.then(e,e))}function Bc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=en(-1,1),t.tag=2,Sn(n,t,1))),n.lanes|=1),e)}var gp=an.ReactCurrentOwner,dt=!1;function st(e,t,n,r){t.child=e===null?qd(t,null,n,r):kr(t,e.child,n,r)}function qc(e,t,n,r,i){n=n.render;var o=t.ref;return gr(t,i),r=Na(e,t,n,r,o,i),n=Sa(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(Ce&&n&&fa(t),t.flags|=1,st(e,t,r,i),t.child)}function Wc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,xf(e,t,o,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:xs,n(l,r)&&e.ref===t.ref)return on(e,t,i)}return t.flags|=1,e=_n(o,r),e.ref=t.ref,e.return=t,t.child=e}function xf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(xs(o,r)&&e.ref===t.ref)if(dt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(dt=!0);else return t.lanes=e.lanes,on(e,t,i)}return zl(e,t,n,r,i)}function gf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(dr,gt),gt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(dr,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,je(dr,gt),gt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,je(dr,gt),gt|=r;return st(e,t,i,n),t.child}function vf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zl(e,t,n,r,i){var o=mt(n)?Wn:tt.current;return o=wr(t,o),gr(t,i),n=Na(e,t,n,r,o,i),r=Sa(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(Ce&&r&&fa(t),t.flags|=1,st(e,t,n,i),t.child)}function Qc(e,t,n,r,i){if(mt(n)){var o=!0;Li(t)}else o=!1;if(gr(t,i),t.stateNode===null)hi(e,t),mf(t,n,r),Rl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Et(u):(u=mt(n)?Wn:tt.current,u=wr(t,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==u)&&Oc(t,l,r,u),hn=!1;var p=t.memoizedState;l.state=p,Ai(t,r,l,i),c=t.memoizedState,a!==r||p!==c||ft.current||hn?(typeof h=="function"&&(_l(t,n,h,r),c=t.memoizedState),(a=hn||Ac(t,n,a,r,p,c,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Qd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:zt(t.type,a),l.props=u,f=t.pendingProps,p=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Et(c):(c=mt(n)?Wn:tt.current,c=wr(t,c));var k=n.getDerivedStateFromProps;(h=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||p!==c)&&Oc(t,l,r,c),hn=!1,p=t.memoizedState,l.state=p,Ai(t,r,l,i);var b=t.memoizedState;a!==f||p!==b||ft.current||hn?(typeof k=="function"&&(_l(t,n,k,r),b=t.memoizedState),(u=hn||Ac(t,n,u,r,p,b,c)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Tl(e,t,n,r,o,i)}function Tl(e,t,n,r,i,o){vf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Pc(t,n,!1),on(e,t,o);r=t.stateNode,gp.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=kr(t,e.child,null,o),t.child=kr(t,null,a,o)):st(e,t,a,o),t.memoizedState=r.state,i&&Pc(t,n,!0),t.child}function yf(e){var t=e.stateNode;t.pendingContext?Rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rc(e,t.context,!1),ba(e,t.containerInfo)}function Hc(e,t,n,r,i){return jr(),pa(i),t.flags|=256,st(e,t,n,r),t.child}var Ll={dehydrated:null,treeContext:null,retryLane:0};function Ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function bf(e,t,n){var r=t.pendingProps,i=Re.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),je(Re,i&1),e===null)return Cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=oo(l,r,0,null),e=Un(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ml(n),t.memoizedState=Ll,e):_a(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vp(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=_n(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=_n(a,o):(o=Un(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ml(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ll,r}return o=e.child,e=o.sibling,r=_n(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _a(e,t){return t=oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xs(e,t,n,r){return r!==null&&pa(r),kr(t,e.child,null,n),e=_a(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vp(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=$o(Error(U(422))),Xs(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=oo({mode:"visible",children:r.children},i,0,null),o=Un(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&kr(t,e.child,null,l),t.child.memoizedState=Ml(l),t.memoizedState=Ll,o);if(!(t.mode&1))return Xs(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(U(419)),r=$o(o,r,void 0),Xs(e,t,l,r)}if(a=(l&e.childLanes)!==0,dt||a){if(r=Ue,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,sn(e,i),It(r,e,i,-1))}return Ma(),r=$o(Error(U(421))),Xs(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,vt=Nn(i.nextSibling),yt=t,Ce=!0,Lt=null,e!==null&&(kt[Nt++]=Jt,kt[Nt++]=Zt,kt[Nt++]=Qn,Jt=e.id,Zt=e.overflow,Qn=t),t=_a(t,r.children),t.flags|=4096,t)}function Yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),El(e.return,t,n)}function Bo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(st(e,t,r.children,n),r=Re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,n,t);else if(e.tag===19)Yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(je(Re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Oi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bo(t,!0,n,null,o);break;case"together":Bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yp(e,t,n){switch(t.tag){case 3:yf(t),jr();break;case 5:Hd(t);break;case 1:mt(t.type)&&Li(t);break;case 4:ba(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;je(Ii,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(je(Re,Re.current&1),t.flags|=128,null):n&t.child.childLanes?bf(e,t,n):(je(Re,Re.current&1),e=on(e,t,n),e!==null?e.sibling:null);je(Re,Re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(Re,Re.current),r)break;return null;case 22:case 23:return t.lanes=0,gf(e,t,n)}return on(e,t,n)}var jf,Fl,kf,Nf;jf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fl=function(){};kf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(Vt.current);var o=null;switch(n){case"input":i=rl(e,i),r=rl(e,r),o=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),o=[];break;case"textarea":i=ol(e,i),r=ol(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zi)}al(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cs.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ne("scroll",e),o||a===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Nf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bp(e,t,n){var r=t.pendingProps;switch(ma(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return mt(t.type)&&Ti(),Ze(t),null;case 3:return r=t.stateNode,Nr(),Se(ft),Se(tt),ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Lt!==null&&(ql(Lt),Lt=null))),Fl(e,t),Ze(t),null;case 5:wa(t);var i=$n(ws.current);if(n=t.type,e!==null&&t.stateNode!=null)kf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return Ze(t),null}if(e=$n(Vt.current),Vs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Qt]=t,r[ys]=o,e=(t.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<Jr.length;i++)Ne(Jr[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":nc(r,o),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ne("invalid",r);break;case"textarea":sc(r,o),Ne("invalid",r)}al(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ys(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ys(r.textContent,a,e),i=["children",""+a]):cs.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Ne("scroll",r)}switch(n){case"input":Os(r),rc(r,o,!0);break;case"textarea":Os(r),ic(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=zi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ku(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Qt]=t,e[ys]=r,jf(e,t,!1,!1),t.stateNode=e;e:{switch(l=cl(n,r),n){case"dialog":Ne("cancel",e),Ne("close",e),i=r;break;case"iframe":case"object":case"embed":Ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<Jr.length;i++)Ne(Jr[i],e);i=r;break;case"source":Ne("error",e),i=r;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),i=r;break;case"details":Ne("toggle",e),i=r;break;case"input":nc(e,r),i=rl(e,r),Ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),Ne("invalid",e);break;case"textarea":sc(e,r),i=ol(e,r),Ne("invalid",e);break;default:i=r}al(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?ed(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ju(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&us(e,c):typeof c=="number"&&us(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(cs.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ne("scroll",e):c!=null&&Jl(e,o,c,l))}switch(n){case"input":Os(e),rc(e,r,!1);break;case"textarea":Os(e),ic(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?mr(e,!!r.multiple,o,!1):r.defaultValue!=null&&mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Nf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=$n(ws.current),$n(Vt.current),Vs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qt]=t,(o=r.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:Ys(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ys(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=t,t.stateNode=r}return Ze(t),null;case 13:if(Se(Re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&vt!==null&&t.mode&1&&!(t.flags&128))Bd(),jr(),t.flags|=98560,o=!1;else if(o=Vs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[Qt]=t}else jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else Lt!==null&&(ql(Lt),Lt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Re.current&1?Ae===0&&(Ae=3):Ma())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Nr(),Fl(e,t),e===null&&gs(t.stateNode.containerInfo),Ze(t),null;case 10:return ga(t.type._context),Ze(t),null;case 17:return mt(t.type)&&Ti(),Ze(t),null;case 19:if(Se(Re),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Br(o,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Oi(e),l!==null){for(t.flags|=128,Br(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return je(Re,Re.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>Cr&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304)}else{if(!r)if(e=Oi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ce)return Ze(t),null}else 2*Me()-o.renderingStartTime>Cr&&n!==1073741824&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,n=Re.current,je(Re,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return La(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?gt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function wp(e,t){switch(ma(t),t.tag){case 1:return mt(t.type)&&Ti(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),Se(ft),Se(tt),ja(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wa(t),null;case 13:if(Se(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Re),null;case 4:return Nr(),null;case 10:return ga(t.type._context),null;case 22:case 23:return La(),null;case 24:return null;default:return null}}var Ks=!1,et=!1,jp=typeof WeakSet=="function"?WeakSet:Set,J=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Il(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Vc=!1;function kp(e,t){if(yl=_i,e=_d(),da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,u=0,h=0,f=e,p=null;t:for(;;){for(var k;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==o||r!==0&&f.nodeType!==3||(c=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(k=f.firstChild)!==null;)p=f,f=k;for(;;){if(f===e)break t;if(p===n&&++u===i&&(a=l),p===o&&++h===r&&(c=l),(k=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=k}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(bl={focusedElem:e,selectionRange:n},_i=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var j=b.memoizedProps,C=b.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?j:zt(t.type,j),C);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(S){Te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return b=Vc,Vc=!1,b}function is(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Il(t,n,o)}i=i.next}while(i!==r)}}function so(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Dl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sf(e){var t=e.alternate;t!==null&&(e.alternate=null,Sf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qt],delete t[ys],delete t[kl],delete t[ip],delete t[op])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cf(e){return e.tag===5||e.tag===3||e.tag===4}function Gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zi));else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}function Ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ol(e,t,n),e=e.sibling;e!==null;)Ol(e,t,n),e=e.sibling}var He=null,Tt=!1;function un(e,t,n){for(n=n.child;n!==null;)Ef(e,t,n),n=n.sibling}function Ef(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Xi,n)}catch{}switch(n.tag){case 5:et||ur(n,t);case 6:var r=He,i=Tt;He=null,un(e,t,n),He=r,Tt=i,He!==null&&(Tt?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Tt?(e=He,n=n.stateNode,e.nodeType===8?Mo(e.parentNode,n):e.nodeType===1&&Mo(e,n),ps(e)):Mo(He,n.stateNode));break;case 4:r=He,i=Tt,He=n.stateNode.containerInfo,Tt=!0,un(e,t,n),He=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Il(n,t,l),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!et&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,t,a)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,un(e,t,n),et=r):un(e,t,n);break;default:un(e,t,n)}}function Xc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jp),t.forEach(function(r){var i=Tp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Tt=!1;break e;case 3:He=a.stateNode.containerInfo,Tt=!0;break e;case 4:He=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if(He===null)throw Error(U(160));Ef(o,l,i),He=null,Tt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_f(t,e),t=t.sibling}function _f(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),Bt(e),r&4){try{is(3,e,e.return),so(3,e)}catch(j){Te(e,e.return,j)}try{is(5,e,e.return)}catch(j){Te(e,e.return,j)}}break;case 1:Pt(t,e),Bt(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(Pt(t,e),Bt(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var i=e.stateNode;try{us(i,"")}catch(j){Te(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Gu(i,o),cl(a,l);var u=cl(a,o);for(l=0;l<c.length;l+=2){var h=c[l],f=c[l+1];h==="style"?ed(i,f):h==="dangerouslySetInnerHTML"?Ju(i,f):h==="children"?us(i,f):Jl(i,h,f,u)}switch(a){case"input":sl(i,o);break;case"textarea":Xu(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?mr(i,!!o.multiple,k,!1):p!==!!o.multiple&&(o.defaultValue!=null?mr(i,!!o.multiple,o.defaultValue,!0):mr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ys]=o}catch(j){Te(e,e.return,j)}}break;case 6:if(Pt(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){Te(e,e.return,j)}}break;case 3:if(Pt(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ps(t.containerInfo)}catch(j){Te(e,e.return,j)}break;case 4:Pt(t,e),Bt(e);break;case 13:Pt(t,e),Bt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(za=Me())),r&4&&Xc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(et=(u=et)||h,Pt(t,e),et=u):Pt(t,e),Bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(J=e,h=e.child;h!==null;){for(f=J=h;J!==null;){switch(p=J,k=p.child,p.tag){case 0:case 11:case 14:case 15:is(4,p,p.return);break;case 1:ur(p,p.return);var b=p.stateNode;if(typeof b.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(j){Te(r,n,j)}}break;case 5:ur(p,p.return);break;case 22:if(p.memoizedState!==null){Jc(f);continue}}k!==null?(k.return=p,J=k):Jc(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,c=f.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Zu("display",l))}catch(j){Te(e,e.return,j)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(j){Te(e,e.return,j)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pt(t,e),Bt(e),r&4&&Xc(e);break;case 21:break;default:Pt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cf(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(us(i,""),r.flags&=-33);var o=Gc(e);Ol(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Gc(e);Al(e,a,l);break;default:throw Error(U(161))}}catch(c){Te(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Np(e,t,n){J=e,Rf(e)}function Rf(e,t,n){for(var r=(e.mode&1)!==0;J!==null;){var i=J,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ks;if(!l){var a=i.alternate,c=a!==null&&a.memoizedState!==null||et;a=Ks;var u=et;if(Ks=l,(et=c)&&!u)for(J=i;J!==null;)l=J,c=l.child,l.tag===22&&l.memoizedState!==null?Zc(i):c!==null?(c.return=l,J=c):Zc(i);for(;o!==null;)J=o,Rf(o),o=o.sibling;J=i,Ks=a,et=u}Kc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,J=o):Kc(e)}}function Kc(e){for(;J!==null;){var t=J;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:et||so(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Fc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ps(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}et||t.flags&512&&Dl(t)}catch(p){Te(t,t.return,p)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function Jc(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function Zc(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{so(4,t)}catch(c){Te(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Te(t,i,c)}}var o=t.return;try{Dl(t)}catch(c){Te(t,o,c)}break;case 5:var l=t.return;try{Dl(t)}catch(c){Te(t,l,c)}}}catch(c){Te(t,t.return,c)}if(t===e){J=null;break}var a=t.sibling;if(a!==null){a.return=t.return,J=a;break}J=t.return}}var Sp=Math.ceil,Ui=an.ReactCurrentDispatcher,Ra=an.ReactCurrentOwner,Ct=an.ReactCurrentBatchConfig,ve=0,Ue=null,Fe=null,Ve=0,gt=0,dr=Tn(0),Ae=0,Ss=null,Yn=0,io=0,Pa=0,os=null,ut=null,za=0,Cr=1/0,Xt=null,qi=!1,$l=null,Cn=null,Js=!1,bn=null,Wi=0,ls=0,Bl=null,xi=-1,gi=0;function it(){return ve&6?Me():xi!==-1?xi:xi=Me()}function En(e){return e.mode&1?ve&2&&Ve!==0?Ve&-Ve:ap.transition!==null?(gi===0&&(gi=fd()),gi):(e=we,e!==0||(e=window.event,e=e===void 0?16:yd(e.type)),e):1}function It(e,t,n,r){if(50<ls)throw ls=0,Bl=null,Error(U(185));_s(e,n,r),(!(ve&2)||e!==Ue)&&(e===Ue&&(!(ve&2)&&(io|=n),Ae===4&&vn(e,Ve)),pt(e,r),n===1&&ve===0&&!(t.mode&1)&&(Cr=Me()+500,to&&Ln()))}function pt(e,t){var n=e.callbackNode;am(e,t);var r=Ei(e,e===Ue?Ve:0);if(r===0)n!==null&&ac(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ac(n),t===1)e.tag===0?lp(eu.bind(null,e)):Ad(eu.bind(null,e)),rp(function(){!(ve&6)&&Ln()}),n=null;else{switch(md(r)){case 1:n=ra;break;case 4:n=ud;break;case 16:n=Ci;break;case 536870912:n=dd;break;default:n=Ci}n=Df(n,Pf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pf(e,t){if(xi=-1,gi=0,ve&6)throw Error(U(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=Ei(e,e===Ue?Ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qi(e,r);else{t=r;var i=ve;ve|=2;var o=Tf();(Ue!==e||Ve!==t)&&(Xt=null,Cr=Me()+500,Bn(e,t));do try{_p();break}catch(a){zf(e,a)}while(1);xa(),Ui.current=o,ve=i,Fe!==null?t=0:(Ue=null,Ve=0,t=Ae)}if(t!==0){if(t===2&&(i=pl(e),i!==0&&(r=i,t=Ul(e,i))),t===1)throw n=Ss,Bn(e,0),vn(e,r),pt(e,Me()),n;if(t===6)vn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Cp(i)&&(t=Qi(e,r),t===2&&(o=pl(e),o!==0&&(r=o,t=Ul(e,o))),t===1))throw n=Ss,Bn(e,0),vn(e,r),pt(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Dn(e,ut,Xt);break;case 3:if(vn(e,r),(r&130023424)===r&&(t=za+500-Me(),10<t)){if(Ei(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){it(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=jl(Dn.bind(null,e,ut,Xt),t);break}Dn(e,ut,Xt);break;case 4:if(vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Ft(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sp(r/1960))-r,10<r){e.timeoutHandle=jl(Dn.bind(null,e,ut,Xt),r);break}Dn(e,ut,Xt);break;case 5:Dn(e,ut,Xt);break;default:throw Error(U(329))}}}return pt(e,Me()),e.callbackNode===n?Pf.bind(null,e):null}function Ul(e,t){var n=os;return e.current.memoizedState.isDehydrated&&(Bn(e,t).flags|=256),e=Qi(e,t),e!==2&&(t=ut,ut=n,t!==null&&ql(t)),e}function ql(e){ut===null?ut=e:ut.push.apply(ut,e)}function Cp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~Pa,t&=~io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function eu(e){if(ve&6)throw Error(U(327));vr();var t=Ei(e,0);if(!(t&1))return pt(e,Me()),null;var n=Qi(e,t);if(e.tag!==0&&n===2){var r=pl(e);r!==0&&(t=r,n=Ul(e,r))}if(n===1)throw n=Ss,Bn(e,0),vn(e,t),pt(e,Me()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,ut,Xt),pt(e,Me()),null}function Ta(e,t){var n=ve;ve|=1;try{return e(t)}finally{ve=n,ve===0&&(Cr=Me()+500,to&&Ln())}}function Vn(e){bn!==null&&bn.tag===0&&!(ve&6)&&vr();var t=ve;ve|=1;var n=Ct.transition,r=we;try{if(Ct.transition=null,we=1,e)return e()}finally{we=r,Ct.transition=n,ve=t,!(ve&6)&&Ln()}}function La(){gt=dr.current,Se(dr)}function Bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,np(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(ma(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ti();break;case 3:Nr(),Se(ft),Se(tt),ja();break;case 5:wa(r);break;case 4:Nr();break;case 13:Se(Re);break;case 19:Se(Re);break;case 10:ga(r.type._context);break;case 22:case 23:La()}n=n.return}if(Ue=e,Fe=e=_n(e.current,null),Ve=gt=t,Ae=0,Ss=null,Pa=io=Yn=0,ut=os=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}On=null}return e}function zf(e,t){do{var n=Fe;try{if(xa(),mi.current=Bi,$i){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$i=!1}if(Hn=0,Be=De=Pe=null,ss=!1,js=0,Ra.current=null,n===null||n.return===null){Ae=1,Ss=t,Fe=null;break}e:{var o=e,l=n.return,a=n,c=t;if(t=Ve,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var k=Bc(l);if(k!==null){k.flags&=-257,Uc(k,l,a,o,t),k.mode&1&&$c(o,u,t),t=k,c=u;var b=t.updateQueue;if(b===null){var j=new Set;j.add(c),t.updateQueue=j}else b.add(c);break e}else{if(!(t&1)){$c(o,u,t),Ma();break e}c=Error(U(426))}}else if(Ce&&a.mode&1){var C=Bc(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Uc(C,l,a,o,t),pa(Sr(c,a));break e}}o=c=Sr(c,a),Ae!==4&&(Ae=2),os===null?os=[o]:os.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=pf(o,c,t);Mc(o,g);break e;case 1:a=c;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Cn===null||!Cn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=hf(o,a,t);Mc(o,S);break e}}o=o.return}while(o!==null)}Mf(n)}catch(R){t=R,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function Tf(){var e=Ui.current;return Ui.current=Bi,e===null?Bi:e}function Ma(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Ue===null||!(Yn&268435455)&&!(io&268435455)||vn(Ue,Ve)}function Qi(e,t){var n=ve;ve|=2;var r=Tf();(Ue!==e||Ve!==t)&&(Xt=null,Bn(e,t));do try{Ep();break}catch(i){zf(e,i)}while(1);if(xa(),ve=n,Ui.current=r,Fe!==null)throw Error(U(261));return Ue=null,Ve=0,Ae}function Ep(){for(;Fe!==null;)Lf(Fe)}function _p(){for(;Fe!==null&&!Z0();)Lf(Fe)}function Lf(e){var t=If(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?Mf(e):Fe=t,Ra.current=null}function Mf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wp(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Fe=null;return}}else if(n=bp(n,t,gt),n!==null){Fe=n;return}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);Ae===0&&(Ae=5)}function Dn(e,t,n){var r=we,i=Ct.transition;try{Ct.transition=null,we=1,Rp(e,t,n,r)}finally{Ct.transition=i,we=r}return null}function Rp(e,t,n,r){do vr();while(bn!==null);if(ve&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(cm(e,o),e===Ue&&(Fe=Ue=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Js||(Js=!0,Df(Ci,function(){return vr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ct.transition,Ct.transition=null;var l=we;we=1;var a=ve;ve|=4,Ra.current=null,kp(e,n),_f(n,e),Gm(bl),_i=!!yl,bl=yl=null,e.current=n,Np(n),em(),ve=a,we=l,Ct.transition=o}else e.current=n;if(Js&&(Js=!1,bn=e,Wi=i),o=e.pendingLanes,o===0&&(Cn=null),rm(n.stateNode),pt(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qi)throw qi=!1,e=$l,$l=null,e;return Wi&1&&e.tag!==0&&vr(),o=e.pendingLanes,o&1?e===Bl?ls++:(ls=0,Bl=e):ls=0,Ln(),null}function vr(){if(bn!==null){var e=md(Wi),t=Ct.transition,n=we;try{if(Ct.transition=null,we=16>e?16:e,bn===null)var r=!1;else{if(e=bn,bn=null,Wi=0,ve&6)throw Error(U(331));var i=ve;for(ve|=4,J=e.current;J!==null;){var o=J,l=o.child;if(J.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(J=u;J!==null;){var h=J;switch(h.tag){case 0:case 11:case 15:is(8,h,o)}var f=h.child;if(f!==null)f.return=h,J=f;else for(;J!==null;){h=J;var p=h.sibling,k=h.return;if(Sf(h),h===u){J=null;break}if(p!==null){p.return=k,J=p;break}J=k}}}var b=o.alternate;if(b!==null){var j=b.child;if(j!==null){b.child=null;do{var C=j.sibling;j.sibling=null,j=C}while(j!==null)}}J=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,J=l;else e:for(;J!==null;){if(o=J,o.flags&2048)switch(o.tag){case 0:case 11:case 15:is(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,J=g;break e}J=o.return}}var m=e.current;for(J=m;J!==null;){l=J;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,J=v;else e:for(l=m;J!==null;){if(a=J,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:so(9,a)}}catch(R){Te(a,a.return,R)}if(a===l){J=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,J=S;break e}J=a.return}}if(ve=i,Ln(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Xi,e)}catch{}r=!0}return r}finally{we=n,Ct.transition=t}}return!1}function tu(e,t,n){t=Sr(n,t),t=pf(e,t,1),e=Sn(e,t,1),t=it(),e!==null&&(_s(e,1,t),pt(e,t))}function Te(e,t,n){if(e.tag===3)tu(e,e,n);else for(;t!==null;){if(t.tag===3){tu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=Sr(n,e),e=hf(t,e,1),t=Sn(t,e,1),e=it(),t!==null&&(_s(t,1,e),pt(t,e));break}}t=t.return}}function Pp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(Ve&n)===n&&(Ae===4||Ae===3&&(Ve&130023424)===Ve&&500>Me()-za?Bn(e,0):Pa|=n),pt(e,t)}function Ff(e,t){t===0&&(e.mode&1?(t=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):t=1);var n=it();e=sn(e,t),e!==null&&(_s(e,t,n),pt(e,n))}function zp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ff(e,n)}function Tp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),Ff(e,n)}var If;If=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)dt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return dt=!1,yp(e,t,n);dt=!!(e.flags&131072)}else dt=!1,Ce&&t.flags&1048576&&Od(t,Fi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;hi(e,t),e=t.pendingProps;var i=wr(t,tt.current);gr(t,n),i=Na(null,t,r,e,i,n);var o=Sa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,mt(r)?(o=!0,Li(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ya(t),i.updater=ro,t.stateNode=i,i._reactInternals=t,Rl(t,r,e,n),t=Tl(null,t,r,!0,o,n)):(t.tag=0,Ce&&o&&fa(t),st(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(hi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Mp(r),e=zt(r,e),i){case 0:t=zl(null,t,r,e,n);break e;case 1:t=Qc(null,t,r,e,n);break e;case 11:t=qc(null,t,r,e,n);break e;case 14:t=Wc(null,t,r,zt(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),zl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Qc(e,t,r,i,n);case 3:e:{if(yf(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Qd(e,t),Ai(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Sr(Error(U(423)),t),t=Hc(e,t,r,n,i);break e}else if(r!==i){i=Sr(Error(U(424)),t),t=Hc(e,t,r,n,i);break e}else for(vt=Nn(t.stateNode.containerInfo.firstChild),yt=t,Ce=!0,Lt=null,n=qd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){t=on(e,t,n);break e}st(e,t,r,n)}t=t.child}return t;case 5:return Hd(t),e===null&&Cl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,wl(r,i)?l=null:o!==null&&wl(r,o)&&(t.flags|=32),vf(e,t),st(e,t,l,n),t.child;case 6:return e===null&&Cl(t),null;case 13:return bf(e,t,n);case 4:return ba(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kr(t,null,r,n):st(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),qc(e,t,r,i,n);case 7:return st(e,t,t.pendingProps,n),t.child;case 8:return st(e,t,t.pendingProps.children,n),t.child;case 12:return st(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,je(Ii,r._currentValue),r._currentValue=l,o!==null)if(Dt(o.value,l)){if(o.children===i.children&&!ft.current){t=on(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=en(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),El(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(U(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),El(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}st(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gr(t,n),i=Et(i),r=r(i),t.flags|=1,st(e,t,r,n),t.child;case 14:return r=t.type,i=zt(r,t.pendingProps),i=zt(r.type,i),Wc(e,t,r,i,n);case 15:return xf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),hi(e,t),t.tag=1,mt(r)?(e=!0,Li(t)):e=!1,gr(t,n),mf(t,r,i),Rl(t,r,i,n),Tl(null,t,r,!0,e,n);case 19:return wf(e,t,n);case 22:return gf(e,t,n)}throw Error(U(156,t.tag))};function Df(e,t){return cd(e,t)}function Lp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new Lp(e,t,n,r)}function Fa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mp(e){if(typeof e=="function")return Fa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ea)return 11;if(e===ta)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Fa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case tr:return Un(n.children,i,o,t);case Zl:l=8,i|=8;break;case Zo:return e=St(12,n,t,i|2),e.elementType=Zo,e.lanes=o,e;case el:return e=St(13,n,t,i),e.elementType=el,e.lanes=o,e;case tl:return e=St(19,n,t,i),e.elementType=tl,e.lanes=o,e;case Hu:return oo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wu:l=10;break e;case Qu:l=9;break e;case ea:l=11;break e;case ta:l=14;break e;case pn:l=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=St(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Un(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function oo(e,t,n,r){return e=St(22,e,r,t),e.elementType=Hu,e.lanes=n,e.stateNode={isHidden:!1},e}function Uo(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function qo(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ko(0),this.expirationTimes=ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ia(e,t,n,r,i,o,l,a,c){return e=new Fp(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=St(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ya(o),e}function Ip(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Af(e){if(!e)return Pn;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(mt(n))return Dd(e,n,t)}return t}function Of(e,t,n,r,i,o,l,a,c){return e=Ia(n,r,!0,e,i,o,l,a,c),e.context=Af(null),n=e.current,r=it(),i=En(n),o=en(r,i),o.callback=t??null,Sn(n,o,i),e.current.lanes=i,_s(e,i,r),pt(e,r),e}function lo(e,t,n,r){var i=t.current,o=it(),l=En(i);return n=Af(n),t.context===null?t.context=n:t.pendingContext=n,t=en(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sn(i,t,l),e!==null&&(It(e,i,l,o),fi(e,i,l)),l}function Hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Da(e,t){nu(e,t),(e=e.alternate)&&nu(e,t)}function Dp(){return null}var $f=typeof reportError=="function"?reportError:function(e){console.error(e)};function Aa(e){this._internalRoot=e}ao.prototype.render=Aa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));lo(e,t,null,null)};ao.prototype.unmount=Aa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vn(function(){lo(null,e,null,null)}),t[rn]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=xd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gn.length&&t!==0&&t<gn[n].priority;n++);gn.splice(n,0,e),n===0&&vd(e)}};function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ru(){}function Ap(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Hi(l);o.call(u)}}var l=Of(t,r,e,0,null,!1,!1,"",ru);return e._reactRootContainer=l,e[rn]=l.current,gs(e.nodeType===8?e.parentNode:e),Vn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Hi(c);a.call(u)}}var c=Ia(e,0,!1,null,null,!1,!1,"",ru);return e._reactRootContainer=c,e[rn]=c.current,gs(e.nodeType===8?e.parentNode:e),Vn(function(){lo(t,c,n,r)}),c}function uo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var c=Hi(l);a.call(c)}}lo(t,l,e,i)}else l=Ap(n,t,e,i,r);return Hi(l)}pd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kr(t.pendingLanes);n!==0&&(sa(t,n|1),pt(t,Me()),!(ve&6)&&(Cr=Me()+500,Ln()))}break;case 13:Vn(function(){var r=sn(e,1);if(r!==null){var i=it();It(r,e,1,i)}}),Da(e,1)}};ia=function(e){if(e.tag===13){var t=sn(e,134217728);if(t!==null){var n=it();It(t,e,134217728,n)}Da(e,134217728)}};hd=function(e){if(e.tag===13){var t=En(e),n=sn(e,t);if(n!==null){var r=it();It(n,e,t,r)}Da(e,t)}};xd=function(){return we};gd=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};dl=function(e,t,n){switch(t){case"input":if(sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=eo(r);if(!i)throw Error(U(90));Vu(r),sl(r,i)}}}break;case"textarea":Xu(e,n);break;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}};rd=Ta;sd=Vn;var Op={usingClientEntryPoint:!1,Events:[Ps,ir,eo,td,nd,Ta]},Ur={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$p={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ld(e),e===null?null:e.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||Dp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zs.isDisabled&&Zs.supportsFiber)try{Xi=Zs.inject($p),Yt=Zs}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Op;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oa(t))throw Error(U(200));return Ip(e,t,null,n)};wt.createRoot=function(e,t){if(!Oa(e))throw Error(U(299));var n=!1,r="",i=$f;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ia(e,1,!1,null,null,n,!1,r,i),e[rn]=t.current,gs(e.nodeType===8?e.parentNode:e),new Aa(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=ld(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return Vn(e)};wt.hydrate=function(e,t,n){if(!co(t))throw Error(U(200));return uo(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!Oa(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=$f;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Of(t,null,e,1,n??null,i,!1,o,l),e[rn]=t.current,gs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ao(t)};wt.render=function(e,t,n){if(!co(t))throw Error(U(200));return uo(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!co(e))throw Error(U(40));return e._reactRootContainer?(Vn(function(){uo(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};wt.unstable_batchedUpdates=Ta;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!co(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return uo(e,t,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function Bf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bf)}catch(e){console.error(e)}}Bf(),$u.exports=wt;var Bp=$u.exports,su=Bp;Ko.createRoot=su.createRoot,Ko.hydrateRoot=su.hydrateRoot;const Up="modulepreload",qp=function(e){return"/"+e},iu={},Uf=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=qp(o),o in iu)return;iu[o]=!0;const l=o.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const f=i[h];if(f.href===o&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Up,l||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),l)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o})};var ou="popstate";function Wp(e={}){function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return Wl("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Cs(i)}return Hp(t,n,null,e)}function Ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function At(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Qp(){return Math.random().toString(36).substring(2,10)}function lu(e,t){return{usr:e.state,key:e.key,idx:t}}function Wl(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Pr(t):t,state:n,key:t&&t.key||r||Qp()}}function Cs({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Hp(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a="POP",c=null,u=h();u==null&&(u=0,l.replaceState({...l.state,idx:u},""));function h(){return(l.state||{idx:null}).idx}function f(){a="POP";let C=h(),g=C==null?null:C-u;u=C,c&&c({action:a,location:j.location,delta:g})}function p(C,g){a="PUSH";let m=Wl(j.location,C,g);n&&n(m,C),u=h()+1;let v=lu(m,u),S=j.createHref(m);try{l.pushState(v,"",S)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(S)}o&&c&&c({action:a,location:j.location,delta:1})}function k(C,g){a="REPLACE";let m=Wl(j.location,C,g);n&&n(m,C),u=h();let v=lu(m,u),S=j.createHref(m);l.replaceState(v,"",S),o&&c&&c({action:a,location:j.location,delta:0})}function b(C){return Yp(C)}let j={get action(){return a},get location(){return e(i,l)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(ou,f),c=C,()=>{i.removeEventListener(ou,f),c=null}},createHref(C){return t(i,C)},createURL:b,encodeLocation(C){let g=b(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:k,go(C){return l.go(C)}};return j}function Yp(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ee(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Cs(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function qf(e,t,n="/"){return Vp(e,t,n,!1)}function Vp(e,t,n,r){let i=typeof t=="string"?Pr(t):t,o=ln(i.pathname||"/",n);if(o==null)return null;let l=Wf(e);Gp(l);let a=null;for(let c=0;a==null&&c<l.length;++c){let u=oh(o);a=sh(l[c],u,r)}return a}function Wf(e,t=[],n=[],r=""){let i=(o,l,a)=>{let c={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(Ee(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let u=tn([r,c.relativePath]),h=n.concat(c);o.children&&o.children.length>0&&(Ee(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Wf(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:nh(u,o.index),routesMeta:h})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let c of Qf(o.path))i(o,l,c)}),t}function Qf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Qf(r.join("/")),a=[];return a.push(...l.map(c=>c===""?o:[o,c].join("/"))),i&&a.push(...l),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function Gp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:rh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Xp=/^:[\w-]+$/,Kp=3,Jp=2,Zp=1,eh=10,th=-2,au=e=>e==="*";function nh(e,t){let n=e.split("/"),r=n.length;return n.some(au)&&(r+=th),t&&(r+=Jp),n.filter(i=>!au(i)).reduce((i,o)=>i+(Xp.test(o)?Kp:o===""?Zp:eh),r)}function rh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function sh(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",f=Yi({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),p=c.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=Yi({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),l.push({params:i,pathname:tn([o,f.pathname]),pathnameBase:uh(tn([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=tn([o,f.pathnameBase]))}return l}function Yi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ih(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,{paramName:h,isOptional:f},p)=>{if(h==="*"){let b=a[p]||"";l=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const k=a[p];return f&&!k?u[h]=void 0:u[h]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function ih(e,t=!1,n=!0){At(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function oh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return At(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ln(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function lh(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Pr(e):e;return{pathname:n?n.startsWith("/")?n:ah(n,t):t,search:dh(r),hash:fh(i)}}function ah(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wo(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ch(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $a(e){let t=ch(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Ba(e,t,n,r=!1){let i;typeof e=="string"?i=Pr(e):(i={...e},Ee(!i.pathname||!i.pathname.includes("?"),Wo("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),Wo("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),Wo("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?t[f]:"/"}let c=lh(i,a),u=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}var tn=e=>e.join("/").replace(/\/\/+/g,"/"),uh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Hf=["POST","PUT","PATCH","DELETE"];new Set(Hf);var ph=["GET",...Hf];new Set(ph);var zr=d.createContext(null);zr.displayName="DataRouter";var fo=d.createContext(null);fo.displayName="DataRouterState";d.createContext(!1);var Yf=d.createContext({isTransitioning:!1});Yf.displayName="ViewTransition";var hh=d.createContext(new Map);hh.displayName="Fetchers";var xh=d.createContext(null);xh.displayName="Await";var Ot=d.createContext(null);Ot.displayName="Navigation";var Ts=d.createContext(null);Ts.displayName="Location";var Rt=d.createContext({outlet:null,matches:[],isDataRoute:!1});Rt.displayName="Route";var Ua=d.createContext(null);Ua.displayName="RouteError";function gh(e,{relative:t}={}){Ee(Tr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=d.useContext(Ot),{hash:i,pathname:o,search:l}=Ls(e,{relative:t}),a=o;return n!=="/"&&(a=o==="/"?n:tn([n,o])),r.createHref({pathname:a,search:l,hash:i})}function Tr(){return d.useContext(Ts)!=null}function $t(){return Ee(Tr(),"useLocation() may be used only in the context of a <Router> component."),d.useContext(Ts).location}var Vf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Gf(e){d.useContext(Ot).static||d.useLayoutEffect(e)}function ht(){let{isDataRoute:e}=d.useContext(Rt);return e?Lh():vh()}function vh(){Ee(Tr(),"useNavigate() may be used only in the context of a <Router> component.");let e=d.useContext(zr),{basename:t,navigator:n}=d.useContext(Ot),{matches:r}=d.useContext(Rt),{pathname:i}=$t(),o=JSON.stringify($a(r)),l=d.useRef(!1);return Gf(()=>{l.current=!0}),d.useCallback((c,u={})=>{if(At(l.current,Vf),!l.current)return;if(typeof c=="number"){n.go(c);return}let h=Ba(c,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:tn([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,o,i,e])}var yh=d.createContext(null);function bh(e){let t=d.useContext(Rt).outlet;return t&&d.createElement(yh.Provider,{value:e},t)}function wh(){let{matches:e}=d.useContext(Rt),t=e[e.length-1];return t?t.params:{}}function Ls(e,{relative:t}={}){let{matches:n}=d.useContext(Rt),{pathname:r}=$t(),i=JSON.stringify($a(n));return d.useMemo(()=>Ba(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function jh(e,t){return Xf(e,t)}function Xf(e,t,n,r){var g;Ee(Tr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=d.useContext(Ot),{matches:o}=d.useContext(Rt),l=o[o.length-1],a=l?l.params:{},c=l?l.pathname:"/",u=l?l.pathnameBase:"/",h=l&&l.route;{let m=h&&h.path||"";Kf(c,!h||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let f=$t(),p;if(t){let m=typeof t=="string"?Pr(t):t;Ee(u==="/"||((g=m.pathname)==null?void 0:g.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${m.pathname}" was given in the \`location\` prop.`),p=m}else p=f;let k=p.pathname||"/",b=k;if(u!=="/"){let m=u.replace(/^\//,"").split("/");b="/"+k.replace(/^\//,"").split("/").slice(m.length).join("/")}let j=qf(e,{pathname:b});At(h||j!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),At(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=Eh(j&&j.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:tn([u,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:tn([u,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,r);return t&&C?d.createElement(Ts.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},C):C}function kh(){let e=Th(),t=mh(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=d.createElement(d.Fragment,null,d.createElement("p",null,"💿 Hey developer 👋"),d.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",d.createElement("code",{style:o},"ErrorBoundary")," or"," ",d.createElement("code",{style:o},"errorElement")," prop on your route.")),d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),n?d.createElement("pre",{style:i},n):null,l)}var Nh=d.createElement(kh,null),Sh=class extends d.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?d.createElement(Rt.Provider,{value:this.props.routeContext},d.createElement(Ua.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ch({routeContext:e,match:t,children:n}){let r=d.useContext(zr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),d.createElement(Rt.Provider,{value:e},n)}function Eh(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=n==null?void 0:n.errors;if(o!=null){let c=i.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);Ee(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let l=!1,a=-1;if(n)for(let c=0;c<i.length;c++){let u=i[c];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(a=c),u.route.id){let{loaderData:h,errors:f}=n,p=u.route.loader&&!h.hasOwnProperty(u.route.id)&&(!f||f[u.route.id]===void 0);if(u.route.lazy||p){l=!0,a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}return i.reduceRight((c,u,h)=>{let f,p=!1,k=null,b=null;n&&(f=o&&u.route.id?o[u.route.id]:void 0,k=u.route.errorElement||Nh,l&&(a<0&&h===0?(Kf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,b=null):a===h&&(p=!0,b=u.route.hydrateFallbackElement||null)));let j=t.concat(i.slice(0,h+1)),C=()=>{let g;return f?g=k:p?g=b:u.route.Component?g=d.createElement(u.route.Component,null):u.route.element?g=u.route.element:g=c,d.createElement(Ch,{match:u,routeContext:{outlet:c,matches:j,isDataRoute:n!=null},children:g})};return n&&(u.route.ErrorBoundary||u.route.errorElement||h===0)?d.createElement(Sh,{location:n.location,revalidation:n.revalidation,component:k,error:f,children:C(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):C()},null)}function qa(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _h(e){let t=d.useContext(zr);return Ee(t,qa(e)),t}function Rh(e){let t=d.useContext(fo);return Ee(t,qa(e)),t}function Ph(e){let t=d.useContext(Rt);return Ee(t,qa(e)),t}function Wa(e){let t=Ph(e),n=t.matches[t.matches.length-1];return Ee(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function zh(){return Wa("useRouteId")}function Th(){var r;let e=d.useContext(Ua),t=Rh("useRouteError"),n=Wa("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Lh(){let{router:e}=_h("useNavigate"),t=Wa("useNavigate"),n=d.useRef(!1);return Gf(()=>{n.current=!0}),d.useCallback(async(i,o={})=>{At(n.current,Vf),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var cu={};function Kf(e,t,n){!t&&!cu[e]&&(cu[e]=!0,At(!1,n))}d.memo(Mh);function Mh({routes:e,future:t,state:n}){return Xf(e,void 0,n,t)}function Fh({to:e,replace:t,state:n,relative:r}){Ee(Tr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=d.useContext(Ot);At(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=d.useContext(Rt),{pathname:l}=$t(),a=ht(),c=Ba(e,$a(o),l,r==="path"),u=JSON.stringify(c);return d.useEffect(()=>{a(JSON.parse(u),{replace:t,state:n,relative:r})},[a,u,r,t,n]),null}function Ih(e){return bh(e.context)}function Qe(e){Ee(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dh({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){Ee(!Tr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),a=d.useMemo(()=>({basename:l,navigator:i,static:o,future:{}}),[l,i,o]);typeof n=="string"&&(n=Pr(n));let{pathname:c="/",search:u="",hash:h="",state:f=null,key:p="default"}=n,k=d.useMemo(()=>{let b=ln(c,l);return b==null?null:{location:{pathname:b,search:u,hash:h,state:f,key:p},navigationType:r}},[l,c,u,h,f,p,r]);return At(k!=null,`<Router basename="${l}"> is not able to match the URL "${c}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:d.createElement(Ot.Provider,{value:a},d.createElement(Ts.Provider,{children:t,value:k}))}function Ah({children:e,location:t}){return jh(Ql(e),t)}function Ql(e,t=[]){let n=[];return d.Children.forEach(e,(r,i)=>{if(!d.isValidElement(r))return;let o=[...t,i];if(r.type===d.Fragment){n.push.apply(n,Ql(r.props.children,o));return}Ee(r.type===Qe,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ee(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ql(r.props.children,o)),n.push(l)}),n}var yi="get",bi="application/x-www-form-urlencoded";function mo(e){return e!=null&&typeof e.tagName=="string"}function Oh(e){return mo(e)&&e.tagName.toLowerCase()==="button"}function $h(e){return mo(e)&&e.tagName.toLowerCase()==="form"}function Bh(e){return mo(e)&&e.tagName.toLowerCase()==="input"}function Uh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qh(e,t){return e.button===0&&(!t||t==="_self")&&!Uh(e)}var ei=null;function Wh(){if(ei===null)try{new FormData(document.createElement("form"),0),ei=!1}catch{ei=!0}return ei}var Qh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qo(e){return e!=null&&!Qh.has(e)?(At(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bi}"`),null):e}function Hh(e,t){let n,r,i,o,l;if($h(e)){let a=e.getAttribute("action");r=a?ln(a,t):null,n=e.getAttribute("method")||yi,i=Qo(e.getAttribute("enctype"))||bi,o=new FormData(e)}else if(Oh(e)||Bh(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||a.getAttribute("action");if(r=c?ln(c,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||yi,i=Qo(e.getAttribute("formenctype"))||Qo(a.getAttribute("enctype"))||bi,o=new FormData(a,e),!Wh()){let{name:u,type:h,value:f}=e;if(h==="image"){let p=u?`${u}.`:"";o.append(`${p}x`,"0"),o.append(`${p}y`,"0")}else u&&o.append(u,f)}}else{if(mo(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=yi,r=null,i=bi,l=e}return o&&i==="text/plain"&&(l=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qa(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yh(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&ln(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Vh(e,t){if(e.id in t)return t[e.id];try{let n=await Uf(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Gh(e){return e!=null&&typeof e.page=="string"}function Xh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Kh(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let l=await Vh(o,n);return l.links?l.links():[]}return[]}));return tx(r.flat(1).filter(Xh).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function uu(e,t,n,r,i,o){let l=(c,u)=>n[u]?c.route.id!==n[u].route.id:!0,a=(c,u)=>{var h;return n[u].pathname!==c.pathname||((h=n[u].route.path)==null?void 0:h.endsWith("*"))&&n[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>l(c,u)||a(c,u)):o==="data"?t.filter((c,u)=>{var f;let h=r.routes[c.route.id];if(!h||!h.hasLoader)return!1;if(l(c,u)||a(c,u))return!0;if(c.route.shouldRevalidate){let p=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function Jh(e,t,{includeHydrateFallback:n}={}){return Zh(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function Zh(e){return[...new Set(e)]}function ex(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function tx(e,t){let n=new Set,r=new Set(t);return e.reduce((i,o)=>{if(t&&!Gh(o)&&o.as==="script"&&o.href&&r.has(o.href))return i;let a=JSON.stringify(ex(o));return n.has(a)||(n.add(a),i.push({key:a,link:o})),i},[])}function Jf(){let e=d.useContext(zr);return Qa(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function nx(){let e=d.useContext(fo);return Qa(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ha=d.createContext(void 0);Ha.displayName="FrameworkContext";function Zf(){let e=d.useContext(Ha);return Qa(e,"You must render this element inside a <HydratedRouter> element"),e}function rx(e,t){let n=d.useContext(Ha),[r,i]=d.useState(!1),[o,l]=d.useState(!1),{onFocus:a,onBlur:c,onMouseEnter:u,onMouseLeave:h,onTouchStart:f}=t,p=d.useRef(null);d.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let j=g=>{g.forEach(m=>{l(m.isIntersecting)})},C=new IntersectionObserver(j,{threshold:.5});return p.current&&C.observe(p.current),()=>{C.disconnect()}}},[e]),d.useEffect(()=>{if(r){let j=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(j)}}},[r]);let k=()=>{i(!0)},b=()=>{i(!1),l(!1)};return n?e!=="intent"?[o,p,{}]:[o,p,{onFocus:qr(a,k),onBlur:qr(c,b),onMouseEnter:qr(u,k),onMouseLeave:qr(h,b),onTouchStart:qr(f,k)}]:[!1,p,{}]}function qr(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function sx({page:e,...t}){let{router:n}=Jf(),r=d.useMemo(()=>qf(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?d.createElement(ox,{page:e,matches:r,...t}):null}function ix(e){let{manifest:t,routeModules:n}=Zf(),[r,i]=d.useState([]);return d.useEffect(()=>{let o=!1;return Kh(e,t,n).then(l=>{o||i(l)}),()=>{o=!0}},[e,t,n]),r}function ox({page:e,matches:t,...n}){let r=$t(),{manifest:i,routeModules:o}=Zf(),{basename:l}=Jf(),{loaderData:a,matches:c}=nx(),u=d.useMemo(()=>uu(e,t,c,i,r,"data"),[e,t,c,i,r]),h=d.useMemo(()=>uu(e,t,c,i,r,"assets"),[e,t,c,i,r]),f=d.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let b=new Set,j=!1;if(t.forEach(g=>{var v;let m=i.routes[g.route.id];!m||!m.hasLoader||(!u.some(S=>S.route.id===g.route.id)&&g.route.id in a&&((v=o[g.route.id])!=null&&v.shouldRevalidate)||m.hasClientLoader?j=!0:b.add(g.route.id))}),b.size===0)return[];let C=Yh(e,l,"data");return j&&b.size>0&&C.searchParams.set("_routes",t.filter(g=>b.has(g.route.id)).map(g=>g.route.id).join(",")),[C.pathname+C.search]},[l,a,r,i,u,t,e,o]),p=d.useMemo(()=>Jh(h,i),[h,i]),k=ix(h);return d.createElement(d.Fragment,null,f.map(b=>d.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),p.map(b=>d.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),k.map(({key:b,link:j})=>d.createElement("link",{key:b,...j})))}function lx(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var e0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{e0&&(window.__reactRouterVersion="7.7.1")}catch{}function ax({basename:e,children:t,window:n}){let r=d.useRef();r.current==null&&(r.current=Wp({window:n,v5Compat:!0}));let i=r.current,[o,l]=d.useState({action:i.action,location:i.location}),a=d.useCallback(c=>{d.startTransition(()=>l(c))},[l]);return d.useLayoutEffect(()=>i.listen(a),[i,a]),d.createElement(Dh,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i})}var t0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,n0=d.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:l,state:a,target:c,to:u,preventScrollReset:h,viewTransition:f,...p},k){let{basename:b}=d.useContext(Ot),j=typeof u=="string"&&t0.test(u),C,g=!1;if(typeof u=="string"&&j&&(C=u,e0))try{let y=new URL(window.location.href),w=u.startsWith("//")?new URL(y.protocol+u):new URL(u),E=ln(w.pathname,b);w.origin===y.origin&&E!=null?u=E+w.search+w.hash:g=!0}catch{At(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=gh(u,{relative:i}),[v,S,R]=rx(r,p),z=fx(u,{replace:l,state:a,target:c,preventScrollReset:h,relative:i,viewTransition:f});function N(y){t&&t(y),y.defaultPrevented||z(y)}let x=d.createElement("a",{...p,...R,href:C||m,onClick:g||o?t:N,ref:lx(k,S),target:c,"data-discover":!j&&n==="render"?"true":void 0});return v&&!j?d.createElement(d.Fragment,null,x,d.createElement(sx,{page:m})):x});n0.displayName="Link";var cx=d.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:l,viewTransition:a,children:c,...u},h){let f=Ls(l,{relative:u.relative}),p=$t(),k=d.useContext(fo),{navigator:b,basename:j}=d.useContext(Ot),C=k!=null&&gx(f)&&a===!0,g=b.encodeLocation?b.encodeLocation(f).pathname:f.pathname,m=p.pathname,v=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;n||(m=m.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&j&&(v=ln(v,j)||v);const S=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let R=m===g||!i&&m.startsWith(g)&&m.charAt(S)==="/",z=v!=null&&(v===g||!i&&v.startsWith(g)&&v.charAt(g.length)==="/"),N={isActive:R,isPending:z,isTransitioning:C},x=R?t:void 0,y;typeof r=="function"?y=r(N):y=[r,R?"active":null,z?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let w=typeof o=="function"?o(N):o;return d.createElement(n0,{...u,"aria-current":x,className:y,ref:h,style:w,to:l,viewTransition:a},typeof c=="function"?c(N):c)});cx.displayName="NavLink";var ux=d.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:l=yi,action:a,onSubmit:c,relative:u,preventScrollReset:h,viewTransition:f,...p},k)=>{let b=hx(),j=xx(a,{relative:u}),C=l.toLowerCase()==="get"?"get":"post",g=typeof a=="string"&&t0.test(a),m=v=>{if(c&&c(v),v.defaultPrevented)return;v.preventDefault();let S=v.nativeEvent.submitter,R=(S==null?void 0:S.getAttribute("formmethod"))||l;b(S||v.currentTarget,{fetcherKey:t,method:R,navigate:n,replace:i,state:o,relative:u,preventScrollReset:h,viewTransition:f})};return d.createElement("form",{ref:k,method:C,action:j,onSubmit:r?c:m,...p,"data-discover":!g&&e==="render"?"true":void 0})});ux.displayName="Form";function dx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function r0(e){let t=d.useContext(zr);return Ee(t,dx(e)),t}function fx(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:l}={}){let a=ht(),c=$t(),u=Ls(e,{relative:o});return d.useCallback(h=>{if(qh(h,t)){h.preventDefault();let f=n!==void 0?n:Cs(c)===Cs(u);a(e,{replace:f,state:r,preventScrollReset:i,relative:o,viewTransition:l})}},[c,a,u,n,r,t,e,i,o,l])}var mx=0,px=()=>`__${String(++mx)}__`;function hx(){let{router:e}=r0("useSubmit"),{basename:t}=d.useContext(Ot),n=zh();return d.useCallback(async(r,i={})=>{let{action:o,method:l,encType:a,formData:c,body:u}=Hh(r,t);if(i.navigate===!1){let h=i.fetcherKey||px();await e.fetch(h,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||l,formEncType:i.encType||a,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:u,formMethod:i.method||l,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function xx(e,{relative:t}={}){let{basename:n}=d.useContext(Ot),r=d.useContext(Rt);Ee(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...Ls(e||".",{relative:t})},l=$t();if(e==null){o.search=l.search;let a=new URLSearchParams(o.search),c=a.getAll("index");if(c.some(h=>h==="")){a.delete("index"),c.filter(f=>f).forEach(f=>a.append("index",f));let h=a.toString();o.search=h?`?${h}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:tn([n,o.pathname])),Cs(o)}function gx(e,{relative:t}={}){let n=d.useContext(Yf);Ee(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=r0("useViewTransitionState"),i=Ls(e,{relative:t});if(!n.isTransitioning)return!1;let o=ln(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=ln(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Yi(i.pathname,l)!=null||Yi(i.pathname,o)!=null}function vx({size:e=22,spinning:t=!1}){return s.jsx("div",{style:{width:e,height:e},className:"grid place-items-center",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:`${t?"animate-[spin_0.8s_ease-out]":"motion-safe:animate-[spin_9s_linear_infinite]"} group-active:motion-safe:animate-[spin_1.2s_linear_infinite]`,style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.2))"},children:[s.jsx("path",{d:"M50,50 L50,5 A45,45 0 0,1 86.97,25.98 Z",fill:"#6366F1"}),s.jsx("path",{d:"M50,50 L86.97,25.98 A45,45 0 0,1 86.97,74.02 Z",fill:"#22C55E"}),s.jsx("path",{d:"M50,50 L86.97,74.02 A45,45 0 0,1 50,95 Z",fill:"#F59E0B"}),s.jsx("path",{d:"M50,50 L50,95 A45,45 0 0,1 13.03,74.02 Z",fill:"#EF4444"}),s.jsx("path",{d:"M50,50 L13.03,74.02 A45,45 0 0,1 13.03,25.98 Z",fill:"#3B82F6"}),s.jsx("path",{d:"M50,50 L13.03,25.98 A45,45 0 0,1 50,5 Z",fill:"#8B5CF6"}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"#111827",stroke:"white",strokeWidth:"2"})]})})}function yx(){const e=ht(),{pathname:t}=$t(),n=d.useRef({}),r=d.useRef(0),[i,o]=d.useState(!1),l=d.useRef({});d.useEffect(()=>{l.current={refresh:new Audio("/sounds/refresh.mp3"),tap:new Audio("/sounds/tap.mp3"),whoosh:new Audio("/sounds/whoosh.mp3")},Object.values(l.current).forEach(F=>{F.volume=.5})},[]);const a=F=>{const Q=l.current[F];Q&&(Q.currentTime=0,Q.play().catch(()=>{}))},c=F=>{if(navigator.vibrate)switch(F){case"light":navigator.vibrate(10);break;case"medium":navigator.vibrate(20);break;case"heavy":navigator.vibrate(40);break;case"double":navigator.vibrate([20,50,20]);break;case"success":navigator.vibrate([10,50,10,50,10]);break;default:navigator.vibrate(15)}};d.useEffect(()=>{const F=n.current[t];F!==void 0?window.scrollTo(0,F):window.scrollTo(0,0)},[t]);const u=()=>{n.current[t]=window.scrollY},h=["/","/play","/profile"].includes(t),[f,p]=d.useState(!1),[k,b]=d.useState({open:!1,go:null});d.useEffect(()=>{const F=new MutationObserver(()=>{p(document.body.classList.contains("modal-open"))});return F.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>F.disconnect()},[]);const C=f||[/^\/quiz\//,/^\/practice\//,/^\/profile\//].some(F=>F.test(t)),g=F=>F==="/"?t==="/":t.startsWith(F),m=d.useRef(0),[v,S]=d.useState(!1),[R,z]=d.useState(0),[N,x]=d.useState(!1),[y,w]=d.useState(0),E=F=>{!h||N||window.scrollY===0&&(m.current=F.touches[0].clientY)},I=F=>{if(!(!h||N)&&window.scrollY===0){const Q=F.touches[0].clientY-m.current;if(Q>0){S(!0);const Y=Math.min(Q,120);z(Y),w(Math.min(Y/60*100,100)),Q>60&&Q<65&&c("light")}}},q=()=>{v&&R>60&&(x(!0),a("refresh"),c("success"),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{x(!1),w(0)},1500)),S(!1),z(0)},Z=({path:F,icon:Q,label:Y,emoji:M})=>{const _=g(F),[L,A]=d.useState(!1),P=()=>{u(),A(!0),setTimeout(()=>A(!1),600);const D=()=>{if(F==="/play"){o(!0),a("whoosh"),c("medium"),setTimeout(()=>{e(`/play?view=modes&reset=${Date.now()}`),o(!1)},200);return}if(_){const H=Date.now();H-r.current<500&&(window.scrollTo({top:0,behavior:"smooth"}),a("tap"),c("double")),r.current=H}else a("tap"),c("light"),e(F)};if(localStorage.getItem("qp_in_question")==="true"&&!_){b({open:!0,go:D});return}D()};return s.jsxs("button",{type:"button",onClick:P,className:`group relative flex h-14 w-20 flex-col items-center justify-center rounded-xl transition-all
          ${_?"scale-110":"scale-100 hover:scale-105"}
          ${L?"animate-bounce":""}`,"aria-current":_?"page":void 0,children:[_&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"absolute -top-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"}),s.jsx("div",{className:"absolute inset-0 rounded-xl bg-white/10 blur-xl"})]}),s.jsx("div",{className:`leading-none text-2xl transition-transform ${_?"scale-125":""} ${F==="/play"&&i?"animate-spin":""}`,children:M||Q}),s.jsx("span",{className:`mt-1 text-[10px] font-medium transition-all ${_?"text-white":"text-base-muted/80"}`,children:Y})]})};return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",onTouchStart:E,onTouchMove:I,onTouchEnd:q,children:[s.jsx("style",{jsx:!0,children:`
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
      `}),(v||N)&&s.jsxs("div",{className:"fixed left-1/2 z-50 flex flex-col items-center transition-all duration-300",style:{top:N?"60px":`${Math.max(20,Math.min(R-20,80))}px`,transform:"translateX(-50%) scale("+(N?1.1:1)+")"},children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsxs("svg",{width:"48",height:"48",className:N?"animate-spin":"",children:[s.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"rgba(255,255,255,0.2)",strokeWidth:"4"}),s.jsx("circle",{cx:"24",cy:"24",r:"20",fill:"none",stroke:"url(#gradient)",strokeWidth:"4",strokeDasharray:`${y*1.26} 126`,strokeLinecap:"round",transform:"rotate(-90 24 24)"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#6366F1"}),s.jsx("stop",{offset:"50%",stopColor:"#22C55E"}),s.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),s.jsx("div",{className:"absolute inset-0 grid place-items-center",children:s.jsx("span",{className:"text-2xl",children:N?"🎉":"⬇"})})]}),s.jsx("span",{className:`text-sm font-medium text-white px-3 py-1 rounded-full bg-white/20 backdrop-blur
            ${N?"rainbow-text":""}`,children:N?"Refreshed! 🌟":R>60?"Release! 🚀":"Pull down..."}),N&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:[...Array(6)].map((F,Q)=>s.jsx("span",{className:"absolute text-2xl",style:{left:`${-30+Q*15}px`,animation:"confetti 1s ease-out forwards",animationDelay:`${Q*.1}s`},children:["🎊","✨","⭐","🎈","🎉","💫"][Q]},Q))})]}),s.jsx("main",{className:"mx-auto w-full max-w-none px-1 sm:px-3 md:px-4 overscroll-y-contain",style:{height:C?"100dvh":"calc(100dvh - (5.5rem + env(safe-area-inset-bottom)))",paddingTop:"calc(env(safe-area-inset-top) + 12px)",overflowY:"auto",transform:v&&!N?`translateY(${R*.5}px)`:void 0,transition:v||N?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)":void 0},children:s.jsx(Ih,{})}),k.open&&s.jsxs("div",{className:"fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6",style:{animation:"fadeIn 0.2s ease-out"},children:[s.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-gradient-to-b from-base-card to-base-card/90 border border-base-border p-6 text-center shadow-2xl",style:{animation:"slideUp 0.3s ease-out"},children:[s.jsx("div",{className:"text-5xl mb-4",style:{animation:"bounce 0.6s ease-out"},children:"😟"}),s.jsx("div",{className:"text-xl font-bold mb-2 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",children:"Leave the game?"}),s.jsx("p",{className:"text-base-muted mb-6 text-sm",children:"You'll lose your current progress!"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>{c("light"),b({open:!1,go:null})},className:"flex-1 py-3 rounded-2xl border-2 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 transition-all font-semibold text-green-400",children:"Keep Playing! 🎮"}),s.jsx("button",{onClick:()=>{c("medium");const F=k.go;b({open:!1,go:null}),F==null||F()},className:"flex-1 py-3 rounded-2xl bg-gradient-to-r from-red-500/80 to-orange-500/80 text-white font-semibold hover:from-red-500 hover:to-orange-500 transition-all",children:"Leave 👋"})]})]}),s.jsx("style",{jsx:!0,children:`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `})]}),!C&&s.jsxs("nav",{role:"navigation","aria-label":"Bottom navigation",className:"fixed inset-x-0 bottom-0 z-50",children:[s.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F1A] to-[#0B0F1A]/95 backdrop-blur-lg",style:{height:"calc(5.5rem + env(safe-area-inset-bottom))"},"aria-hidden":!0}),s.jsx("div",{className:"relative mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2",children:s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20 blur-2xl"}),s.jsxs("div",{className:"relative flex h-[72px] items-center justify-around rounded-3xl border border-white/10 bg-gradient-to-b from-base-card/95 to-base-card/80 shadow-2xl backdrop-blur-xl",children:[s.jsx(Z,{path:"/",emoji:"🏠",label:"Home"}),s.jsx(Z,{path:"/play",icon:s.jsx(vx,{size:26,spinning:i}),label:"Play"}),s.jsx(Z,{path:"/profile",emoji:"👤",label:"Profile"})]})]})})]})]})}function Vi(){return Vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vi.apply(null,arguments)}function bx(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function wx(e){d.useEffect(e,[])}var jx=["id","volume","playbackRate","soundEnabled","interrupt","onload"];function fr(e,t){var n=t===void 0?{}:t,r=n.volume,i=r===void 0?1:r,o=n.playbackRate,l=o===void 0?1:o,a=n.soundEnabled,c=a===void 0?!0:a,u=n.interrupt,h=u===void 0?!1:u,f=n.onload,p=bx(n,jx),k=rt.useRef(null),b=rt.useRef(!1),j=rt.useState(null),C=j[0],g=j[1],m=rt.useState(null),v=m[0],S=m[1],R=function(){typeof f=="function"&&f.call(this),b.current&&g(this.duration()*1e3),S(this)};wx(function(){return Uf(()=>import("./howler-b6b888e9.js").then(w=>w.h),[]).then(function(w){if(!b.current){var E;k.current=(E=w.Howl)!==null&&E!==void 0?E:w.default.Howl,b.current=!0,new k.current(Vi({src:Array.isArray(e)?e:[e],volume:i,rate:l,onload:R},p))}}),function(){b.current=!1}}),rt.useEffect(function(){k.current&&v&&S(new k.current(Vi({src:Array.isArray(e)?e:[e],volume:i,onload:R},p)))},[JSON.stringify(e)]),rt.useEffect(function(){v&&(v.volume(i),p.sprite||v.rate(l))},[v,i,l]);var z=rt.useCallback(function(w){typeof w>"u"&&(w={}),!(!v||!c&&!w.forceSoundEnabled)&&(h&&v.stop(),w.playbackRate&&v.rate(w.playbackRate),v.play(w.id))},[v,c,h]),N=rt.useCallback(function(w){v&&v.stop(w)},[v]),x=rt.useCallback(function(w){v&&v.pause(w)},[v]),y=[z,{sound:v,stop:N,pause:x,duration:C}];return y}var s0={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(e,t){((n,r)=>{e.exports=r()})(h0,function n(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},i,o=!r.document&&!!r.postMessage,l=r.IS_PAPA_WORKER||!1,a={},c=0,u={};function h(x){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(y){var w=R(y);w.chunkSize=parseInt(w.chunkSize),y.step||y.chunk||(w.chunkSize=null),this._handle=new j(w),(this._handle.streamer=this)._config=w}).call(this,x),this.parseChunk=function(y,w){var E=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<E){let q=this._config.newline;q||(I=this._config.quoteChar||'"',q=this._handle.guessLineEndings(y,I)),y=[...y.split(q).slice(E)].join(q)}this.isFirstChunk&&N(this._config.beforeFirstChunk)&&(I=this._config.beforeFirstChunk(y))!==void 0&&(y=I),this.isFirstChunk=!1,this._halted=!1;var E=this._partialLine+y,I=(this._partialLine="",this._handle.parse(E,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(y=I.meta.cursor,E=(this._finished||(this._partialLine=E.substring(y-this._baseIndex),this._baseIndex=y),I&&I.data&&(this._rowCount+=I.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),l)r.postMessage({results:I,workerId:u.WORKER_ID,finished:E});else if(N(this._config.chunk)&&!w){if(this._config.chunk(I,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=I=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(I.data),this._completeResults.errors=this._completeResults.errors.concat(I.errors),this._completeResults.meta=I.meta),this._completed||!E||!N(this._config.complete)||I&&I.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),E||I&&I.meta.paused||this._nextChunk(),I}this._halted=!0},this._sendError=function(y){N(this._config.error)?this._config.error(y):l&&this._config.error&&r.postMessage({workerId:u.WORKER_ID,error:y,finished:!1})}}function f(x){var y;(x=x||{}).chunkSize||(x.chunkSize=u.RemoteChunkSize),h.call(this,x),this._nextChunk=o?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(w){this._input=w,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(y=new XMLHttpRequest,this._config.withCredentials&&(y.withCredentials=this._config.withCredentials),o||(y.onload=z(this._chunkLoaded,this),y.onerror=z(this._chunkError,this)),y.open(this._config.downloadRequestBody?"POST":"GET",this._input,!o),this._config.downloadRequestHeaders){var w,E=this._config.downloadRequestHeaders;for(w in E)y.setRequestHeader(w,E[w])}var I;this._config.chunkSize&&(I=this._start+this._config.chunkSize-1,y.setRequestHeader("Range","bytes="+this._start+"-"+I));try{y.send(this._config.downloadRequestBody)}catch(q){this._chunkError(q.message)}o&&y.status===0&&this._chunkError()}},this._chunkLoaded=function(){y.readyState===4&&(y.status<200||400<=y.status?this._chunkError():(this._start+=this._config.chunkSize||y.responseText.length,this._finished=!this._config.chunkSize||this._start>=(w=>(w=w.getResponseHeader("Content-Range"))!==null?parseInt(w.substring(w.lastIndexOf("/")+1)):-1)(y),this.parseChunk(y.responseText)))},this._chunkError=function(w){w=y.statusText||w,this._sendError(new Error(w))}}function p(x){(x=x||{}).chunkSize||(x.chunkSize=u.LocalChunkSize),h.call(this,x);var y,w,E=typeof FileReader<"u";this.stream=function(I){this._input=I,w=I.slice||I.webkitSlice||I.mozSlice,E?((y=new FileReader).onload=z(this._chunkLoaded,this),y.onerror=z(this._chunkError,this)):y=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var I=this._input,q=(this._config.chunkSize&&(q=Math.min(this._start+this._config.chunkSize,this._input.size),I=w.call(I,this._start,q)),y.readAsText(I,this._config.encoding));E||this._chunkLoaded({target:{result:q}})},this._chunkLoaded=function(I){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(I.target.result)},this._chunkError=function(){this._sendError(y.error)}}function k(x){var y;h.call(this,x=x||{}),this.stream=function(w){return y=w,this._nextChunk()},this._nextChunk=function(){var w,E;if(!this._finished)return w=this._config.chunkSize,y=w?(E=y.substring(0,w),y.substring(w)):(E=y,""),this._finished=!y,this.parseChunk(E)}}function b(x){h.call(this,x=x||{});var y=[],w=!0,E=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(I){this._input=I,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){E&&y.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),y.length?this.parseChunk(y.shift()):w=!0},this._streamData=z(function(I){try{y.push(typeof I=="string"?I:I.toString(this._config.encoding)),w&&(w=!1,this._checkIsFinished(),this.parseChunk(y.shift()))}catch(q){this._streamError(q)}},this),this._streamError=z(function(I){this._streamCleanUp(),this._sendError(I)},this),this._streamEnd=z(function(){this._streamCleanUp(),E=!0,this._streamData("")},this),this._streamCleanUp=z(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function j(x){var y,w,E,I,q=Math.pow(2,53),Z=-q,F=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,Q=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,Y=this,M=0,_=0,L=!1,A=!1,P=[],D={data:[],errors:[],meta:{}};function W($){return x.skipEmptyLines==="greedy"?$.join("").trim()==="":$.length===1&&$[0].length===0}function H(){if(D&&E&&(ue("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),E=!1),x.skipEmptyLines&&(D.data=D.data.filter(function(G){return!W(G)})),ne()){let G=function(K,ie){N(x.transformHeader)&&(K=x.transformHeader(K,ie)),P.push(K)};if(D)if(Array.isArray(D.data[0])){for(var $=0;ne()&&$<D.data.length;$++)D.data[$].forEach(G);D.data.splice(0,1)}else D.data.forEach(G)}function V(G,K){for(var ie=x.header?{}:[],O=0;O<G.length;O++){var B=O,X=G[O],X=((de,te)=>(oe=>(x.dynamicTypingFunction&&x.dynamicTyping[oe]===void 0&&(x.dynamicTyping[oe]=x.dynamicTypingFunction(oe)),(x.dynamicTyping[oe]||x.dynamicTyping)===!0))(de)?te==="true"||te==="TRUE"||te!=="false"&&te!=="FALSE"&&((oe=>{if(F.test(oe)&&(oe=parseFloat(oe),Z<oe&&oe<q))return 1})(te)?parseFloat(te):Q.test(te)?new Date(te):te===""?null:te):te)(B=x.header?O>=P.length?"__parsed_extra":P[O]:B,X=x.transform?x.transform(X,B):X);B==="__parsed_extra"?(ie[B]=ie[B]||[],ie[B].push(X)):ie[B]=X}return x.header&&(O>P.length?ue("FieldMismatch","TooManyFields","Too many fields: expected "+P.length+" fields but parsed "+O,_+K):O<P.length&&ue("FieldMismatch","TooFewFields","Too few fields: expected "+P.length+" fields but parsed "+O,_+K)),ie}var se;D&&(x.header||x.dynamicTyping||x.transform)&&(se=1,!D.data.length||Array.isArray(D.data[0])?(D.data=D.data.map(V),se=D.data.length):D.data=V(D.data,0),x.header&&D.meta&&(D.meta.fields=P),_+=se)}function ne(){return x.header&&P.length===0}function ue($,V,se,G){$={type:$,code:V,message:se},G!==void 0&&($.row=G),D.errors.push($)}N(x.step)&&(I=x.step,x.step=function($){D=$,ne()?H():(H(),D.data.length!==0&&(M+=$.data.length,x.preview&&M>x.preview?w.abort():(D.data=D.data[0],I(D,Y))))}),this.parse=function($,V,se){var G=x.quoteChar||'"',G=(x.newline||(x.newline=this.guessLineEndings($,G)),E=!1,x.delimiter?N(x.delimiter)&&(x.delimiter=x.delimiter($),D.meta.delimiter=x.delimiter):((G=((K,ie,O,B,X)=>{var de,te,oe,T;X=X||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var re=0;re<X.length;re++){for(var pe,_e=X[re],he=0,xe=0,ae=0,ye=(oe=void 0,new g({comments:B,delimiter:_e,newline:ie,preview:10}).parse(K)),qe=0;qe<ye.data.length;qe++)O&&W(ye.data[qe])?ae++:(pe=ye.data[qe].length,xe+=pe,oe===void 0?oe=pe:0<pe&&(he+=Math.abs(pe-oe),oe=pe));0<ye.data.length&&(xe/=ye.data.length-ae),(te===void 0||he<=te)&&(T===void 0||T<xe)&&1.99<xe&&(te=he,de=_e,T=xe)}return{successful:!!(x.delimiter=de),bestDelimiter:de}})($,x.newline,x.skipEmptyLines,x.comments,x.delimitersToGuess)).successful?x.delimiter=G.bestDelimiter:(E=!0,x.delimiter=u.DefaultDelimiter),D.meta.delimiter=x.delimiter),R(x));return x.preview&&x.header&&G.preview++,y=$,w=new g(G),D=w.parse(y,V,se),H(),L?{meta:{paused:!0}}:D||{meta:{paused:!1}}},this.paused=function(){return L},this.pause=function(){L=!0,w.abort(),y=N(x.chunk)?"":y.substring(w.getCharIndex())},this.resume=function(){Y.streamer._halted?(L=!1,Y.streamer.parseChunk(y,!0)):setTimeout(Y.resume,3)},this.aborted=function(){return A},this.abort=function(){A=!0,w.abort(),D.meta.aborted=!0,N(x.complete)&&x.complete(D),y=""},this.guessLineEndings=function(K,G){K=K.substring(0,1048576);var G=new RegExp(C(G)+"([^]*?)"+C(G),"gm"),se=(K=K.replace(G,"")).split("\r"),G=K.split(`
`),K=1<G.length&&G[0].length<se[0].length;if(se.length===1||K)return`
`;for(var ie=0,O=0;O<se.length;O++)se[O][0]===`
`&&ie++;return ie>=se.length/2?`\r
`:"\r"}}function C(x){return x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(x){var y=(x=x||{}).delimiter,w=x.newline,E=x.comments,I=x.step,q=x.preview,Z=x.fastMode,F=null,Q=!1,Y=x.quoteChar==null?'"':x.quoteChar,M=Y;if(x.escapeChar!==void 0&&(M=x.escapeChar),(typeof y!="string"||-1<u.BAD_DELIMITERS.indexOf(y))&&(y=","),E===y)throw new Error("Comment character same as delimiter");E===!0?E="#":(typeof E!="string"||-1<u.BAD_DELIMITERS.indexOf(E))&&(E=!1),w!==`
`&&w!=="\r"&&w!==`\r
`&&(w=`
`);var _=0,L=!1;this.parse=function(A,P,D){if(typeof A!="string")throw new Error("Input must be a string");var W=A.length,H=y.length,ne=w.length,ue=E.length,$=N(I),V=[],se=[],G=[],K=_=0;if(!A)return he();if(Z||Z!==!1&&A.indexOf(Y)===-1){for(var ie=A.split(w),O=0;O<ie.length;O++){if(G=ie[O],_+=G.length,O!==ie.length-1)_+=w.length;else if(D)return he();if(!E||G.substring(0,ue)!==E){if($){if(V=[],T(G.split(y)),xe(),L)return he()}else T(G.split(y));if(q&&q<=O)return V=V.slice(0,q),he(!0)}}return he()}for(var B=A.indexOf(y,_),X=A.indexOf(w,_),de=new RegExp(C(M)+C(Y),"g"),te=A.indexOf(Y,_);;)if(A[_]===Y)for(te=_,_++;;){if((te=A.indexOf(Y,te+1))===-1)return D||se.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:V.length,index:_}),pe();if(te===W-1)return pe(A.substring(_,te).replace(de,Y));if(Y===M&&A[te+1]===M)te++;else if(Y===M||te===0||A[te-1]!==M){B!==-1&&B<te+1&&(B=A.indexOf(y,te+1));var oe=re((X=X!==-1&&X<te+1?A.indexOf(w,te+1):X)===-1?B:Math.min(B,X));if(A.substr(te+1+oe,H)===y){G.push(A.substring(_,te).replace(de,Y)),A[_=te+1+oe+H]!==Y&&(te=A.indexOf(Y,_)),B=A.indexOf(y,_),X=A.indexOf(w,_);break}if(oe=re(X),A.substring(te+1+oe,te+1+oe+ne)===w){if(G.push(A.substring(_,te).replace(de,Y)),_e(te+1+oe+ne),B=A.indexOf(y,_),te=A.indexOf(Y,_),$&&(xe(),L))return he();if(q&&V.length>=q)return he(!0);break}se.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:V.length,index:_}),te++}}else if(E&&G.length===0&&A.substring(_,_+ue)===E){if(X===-1)return he();_=X+ne,X=A.indexOf(w,_),B=A.indexOf(y,_)}else if(B!==-1&&(B<X||X===-1))G.push(A.substring(_,B)),_=B+H,B=A.indexOf(y,_);else{if(X===-1)break;if(G.push(A.substring(_,X)),_e(X+ne),$&&(xe(),L))return he();if(q&&V.length>=q)return he(!0)}return pe();function T(ae){V.push(ae),K=_}function re(ae){var ye=0;return ye=ae!==-1&&(ae=A.substring(te+1,ae))&&ae.trim()===""?ae.length:ye}function pe(ae){return D||(ae===void 0&&(ae=A.substring(_)),G.push(ae),_=W,T(G),$&&xe()),he()}function _e(ae){_=ae,T(G),G=[],X=A.indexOf(w,_)}function he(ae){if(x.header&&!P&&V.length&&!Q){var ye=V[0],qe=Object.create(null),Xe=new Set(ye);let at=!1;for(let ct=0;ct<ye.length;ct++){let We=ye[ct];if(qe[We=N(x.transformHeader)?x.transformHeader(We,ct):We]){let Gt,Kn=qe[We];for(;Gt=We+"_"+Kn,Kn++,Xe.has(Gt););Xe.add(Gt),ye[ct]=Gt,qe[We]++,at=!0,(F=F===null?{}:F)[Gt]=We}else qe[We]=1,ye[ct]=We;Xe.add(We)}at&&console.warn("Duplicate headers found and renamed."),Q=!0}return{data:V,errors:se,meta:{delimiter:y,linebreak:w,aborted:L,truncated:!!ae,cursor:K+(P||0),renamedHeaders:F}}}function xe(){I(he()),V=[],se=[]}},this.abort=function(){L=!0},this.getCharIndex=function(){return _}}function m(x){var y=x.data,w=a[y.workerId],E=!1;if(y.error)w.userError(y.error,y.file);else if(y.results&&y.results.data){var I={abort:function(){E=!0,v(y.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:S,resume:S};if(N(w.userStep)){for(var q=0;q<y.results.data.length&&(w.userStep({data:y.results.data[q],errors:y.results.errors,meta:y.results.meta},I),!E);q++);delete y.results}else N(w.userChunk)&&(w.userChunk(y.results,I,y.file),delete y.results)}y.finished&&!E&&v(y.workerId,y.results)}function v(x,y){var w=a[x];N(w.userComplete)&&w.userComplete(y),w.terminate(),delete a[x]}function S(){throw new Error("Not implemented.")}function R(x){if(typeof x!="object"||x===null)return x;var y,w=Array.isArray(x)?[]:{};for(y in x)w[y]=R(x[y]);return w}function z(x,y){return function(){x.apply(y,arguments)}}function N(x){return typeof x=="function"}return u.parse=function(x,y){var w=(y=y||{}).dynamicTyping||!1;if(N(w)&&(y.dynamicTypingFunction=w,w={}),y.dynamicTyping=w,y.transform=!!N(y.transform)&&y.transform,!y.worker||!u.WORKERS_SUPPORTED)return w=null,u.NODE_STREAM_INPUT,typeof x=="string"?(x=(E=>E.charCodeAt(0)!==65279?E:E.slice(1))(x),w=new(y.download?f:k)(y)):x.readable===!0&&N(x.read)&&N(x.on)?w=new b(y):(r.File&&x instanceof File||x instanceof Object)&&(w=new p(y)),w.stream(x);(w=(()=>{var E;return!!u.WORKERS_SUPPORTED&&(E=(()=>{var I=r.URL||r.webkitURL||null,q=n.toString();return u.BLOB_URL||(u.BLOB_URL=I.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",q,")();"],{type:"text/javascript"})))})(),(E=new r.Worker(E)).onmessage=m,E.id=c++,a[E.id]=E)})()).userStep=y.step,w.userChunk=y.chunk,w.userComplete=y.complete,w.userError=y.error,y.step=N(y.step),y.chunk=N(y.chunk),y.complete=N(y.complete),y.error=N(y.error),delete y.worker,w.postMessage({input:x,config:y,workerId:w.id})},u.unparse=function(x,y){var w=!1,E=!0,I=",",q=`\r
`,Z='"',F=Z+Z,Q=!1,Y=null,M=!1,_=((()=>{if(typeof y=="object"){if(typeof y.delimiter!="string"||u.BAD_DELIMITERS.filter(function(P){return y.delimiter.indexOf(P)!==-1}).length||(I=y.delimiter),typeof y.quotes!="boolean"&&typeof y.quotes!="function"&&!Array.isArray(y.quotes)||(w=y.quotes),typeof y.skipEmptyLines!="boolean"&&typeof y.skipEmptyLines!="string"||(Q=y.skipEmptyLines),typeof y.newline=="string"&&(q=y.newline),typeof y.quoteChar=="string"&&(Z=y.quoteChar),typeof y.header=="boolean"&&(E=y.header),Array.isArray(y.columns)){if(y.columns.length===0)throw new Error("Option columns is empty");Y=y.columns}y.escapeChar!==void 0&&(F=y.escapeChar+Z),y.escapeFormulae instanceof RegExp?M=y.escapeFormulae:typeof y.escapeFormulae=="boolean"&&y.escapeFormulae&&(M=/^[=+\-@\t\r].*$/)}})(),new RegExp(C(Z),"g"));if(typeof x=="string"&&(x=JSON.parse(x)),Array.isArray(x)){if(!x.length||Array.isArray(x[0]))return L(null,x,Q);if(typeof x[0]=="object")return L(Y||Object.keys(x[0]),x,Q)}else if(typeof x=="object")return typeof x.data=="string"&&(x.data=JSON.parse(x.data)),Array.isArray(x.data)&&(x.fields||(x.fields=x.meta&&x.meta.fields||Y),x.fields||(x.fields=Array.isArray(x.data[0])?x.fields:typeof x.data[0]=="object"?Object.keys(x.data[0]):[]),Array.isArray(x.data[0])||typeof x.data[0]=="object"||(x.data=[x.data])),L(x.fields||[],x.data||[],Q);throw new Error("Unable to serialize unrecognized input");function L(P,D,W){var H="",ne=(typeof P=="string"&&(P=JSON.parse(P)),typeof D=="string"&&(D=JSON.parse(D)),Array.isArray(P)&&0<P.length),ue=!Array.isArray(D[0]);if(ne&&E){for(var $=0;$<P.length;$++)0<$&&(H+=I),H+=A(P[$],$);0<D.length&&(H+=q)}for(var V=0;V<D.length;V++){var se=(ne?P:D[V]).length,G=!1,K=ne?Object.keys(D[V]).length===0:D[V].length===0;if(W&&!ne&&(G=W==="greedy"?D[V].join("").trim()==="":D[V].length===1&&D[V][0].length===0),W==="greedy"&&ne){for(var ie=[],O=0;O<se;O++){var B=ue?P[O]:O;ie.push(D[V][B])}G=ie.join("").trim()===""}if(!G){for(var X=0;X<se;X++){0<X&&!K&&(H+=I);var de=ne&&ue?P[X]:X;H+=A(D[V][de],X)}V<D.length-1&&(!W||0<se&&!K)&&(H+=q)}}return H}function A(P,D){var W,H;return P==null?"":P.constructor===Date?JSON.stringify(P).slice(1,25):(H=!1,M&&typeof P=="string"&&M.test(P)&&(P="'"+P,H=!0),W=P.toString().replace(_,F),(H=H||w===!0||typeof w=="function"&&w(P,D)||Array.isArray(w)&&w[D]||((ne,ue)=>{for(var $=0;$<ue.length;$++)if(-1<ne.indexOf(ue[$]))return!0;return!1})(W,u.BAD_DELIMITERS)||-1<W.indexOf(I)||W.charAt(0)===" "||W.charAt(W.length-1)===" ")?Z+W+Z:W)}},u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!o&&!!r.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=g,u.ParserHandle=j,u.NetworkStreamer=f,u.FileStreamer=p,u.StringStreamer=k,u.ReadableStreamStreamer=b,r.jQuery&&((i=r.jQuery).fn.parse=function(x){var y=x.config||{},w=[];return this.each(function(q){if(!(i(this).prop("tagName").toUpperCase()==="INPUT"&&i(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var Z=0;Z<this.files.length;Z++)w.push({file:this.files[Z],inputElem:this,instanceConfig:i.extend({},y)})}),E(),this;function E(){if(w.length===0)N(x.complete)&&x.complete();else{var q,Z,F,Q,Y=w[0];if(N(x.before)){var M=x.before(Y.file,Y.inputElem);if(typeof M=="object"){if(M.action==="abort")return q="AbortError",Z=Y.file,F=Y.inputElem,Q=M.reason,void(N(x.error)&&x.error({name:q},Z,F,Q));if(M.action==="skip")return void I();typeof M.config=="object"&&(Y.instanceConfig=i.extend(Y.instanceConfig,M.config))}else if(M==="skip")return void I()}var _=Y.instanceConfig.complete;Y.instanceConfig.complete=function(L){N(_)&&_(L,Y.file,Y.inputElem),I()},u.parse(Y.file,Y.instanceConfig)}}function I(){w.splice(0,1),E()}}),l&&(r.onmessage=function(x){x=x.data,u.WORKER_ID===void 0&&x&&(u.WORKER_ID=x.workerId),typeof x.input=="string"?r.postMessage({workerId:u.WORKER_ID,results:u.parse(x.input,x.config),finished:!0}):(r.File&&x.input instanceof File||x.input instanceof Object)&&(x=u.parse(x.input,x.config))&&r.postMessage({workerId:u.WORKER_ID,results:x,finished:!0})}),(f.prototype=Object.create(h.prototype)).constructor=f,(p.prototype=Object.create(h.prototype)).constructor=p,(k.prototype=Object.create(k.prototype)).constructor=k,(b.prototype=Object.create(h.prototype)).constructor=b,u})})(s0);var kx=s0.exports;const po=_u(kx);function Nx({startRect:e,targetRef:t,count:n=12,onDone:r}){return d.useEffect(()=>{const i=t==null?void 0:t.current;if(!e||!i){r==null||r();return}const o=i.getBoundingClientRect(),l=document.createElement("div");l.style.position="fixed",l.style.inset="0",l.style.pointerEvents="none",l.style.zIndex="9999",document.body.appendChild(l);const a=o.left+o.width/2,c=o.top+o.height/2,u=e.left+e.width/2,h=e.top+e.height/2,f=200;let p=0;function k(b){const j=document.createElement("div");j.textContent="🪙",Object.assign(j.style,{position:"fixed",left:"0px",top:"0px",zIndex:"10000",pointerEvents:"none",fontSize:"22px",opacity:"1",willChange:"transform, opacity",transform:"translate(0px, 0px)"});const C=u,g=h,m=a,v=c;j.style.transform=`translate(${C}px, ${g}px) scale(1)`,l.appendChild(j),j.getBoundingClientRect(),j.style.transition=`transform ${f}ms cubic-bezier(.2,.8,.2,1), opacity ${f}ms linear`,requestAnimationFrame(()=>{j.style.transform=`translate(${m}px, ${v}px) scale(.6)`,j.style.opacity="0.1"}),setTimeout(()=>{j.remove(),p+=1,p===n&&(l.remove(),r==null||r())},f+50)}for(let b=0;b<n;b++)setTimeout(()=>k(),b*60);return()=>{try{l.remove()}catch{}}},[e,t,n,r]),null}const Ye={XP_PER_CORRECT:10,XP_PER_LEVEL:100,MAX_LEVEL:100,COINS_PER_CORRECT:5,MAX_ENERGY:5,ENERGY_REGEN_TIME:36e5,ENERGY_COST:{quiz:1,practice:0,daily:0},COMBO_MULTIPLIERS:{2:{multiplier:1.2,text:"Nice!"},3:{multiplier:1.5,text:"Great!"},5:{multiplier:2,text:"On Fire!"},10:{multiplier:3,text:"Legendary!"}},AVATARS:[{id:"wizard",emoji:"🧙",name:"Knowledge Wizard",unlocked:!0,bgColor:"from-purple-500 to-indigo-500"},{id:"knight",emoji:"⚔️",name:"Quiz Knight",unlocked:!0,bgColor:"from-blue-500 to-cyan-500"},{id:"explorer",emoji:"🗺️",name:"Fact Explorer",unlockLevel:5,unlocked:!1,bgColor:"from-green-500 to-emerald-500"},{id:"scientist",emoji:"🔬",name:"Science Master",unlockLevel:10,unlocked:!1,bgColor:"from-orange-500 to-red-500"},{id:"artist",emoji:"🎨",name:"Creative Mind",unlockLevel:15,unlocked:!1,bgColor:"from-pink-500 to-rose-500"}],STORAGE_KEYS:{PLAYER:"qp_player",GAME_STATE:"qp_game_state",ENERGY:"qp_energy",CURRENT_COMBO:"qp_combo"}},du=e=>Math.floor(e/Ye.XP_PER_LEVEL)+1,Sx=e=>{const t=e%Ye.XP_PER_LEVEL;return{current:t,required:Ye.XP_PER_LEVEL,percentage:t/Ye.XP_PER_LEVEL*100}};function Cx({player:e,size:t="normal",showLevel:n=!0,showName:r=!0}){const i=Ye.AVATARS.find(l=>l.id===e.avatar)||Ye.AVATARS[0],o={small:"w-10 h-10 text-xl",normal:"w-14 h-14 text-2xl",large:"w-20 h-20 text-4xl"};return s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:`${o[t]} rounded-full bg-gradient-to-br ${i.bgColor} flex items-center justify-center shadow-lg`,children:s.jsx("span",{children:i.emoji})}),n&&s.jsx("div",{className:"absolute -bottom-1 -right-1 bg-yellow-500 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-base-bg",children:e.level})]}),r&&s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-sm",children:e.name}),s.jsx("div",{className:"text-xs text-base-muted",children:i.name})]})]})}function Ex({current:e,required:t,level:n,animate:r=!0}){const[i,o]=d.useState(0),l=e/t*100;return d.useEffect(()=>{if(r){const a=setTimeout(()=>{o(l)},100);return()=>clearTimeout(a)}else o(l)},[l,r]),s.jsxs("div",{className:"w-full",children:[s.jsxs("div",{className:"flex justify-between items-center mb-1",children:[s.jsxs("span",{className:"text-xs font-medium",children:["Level ",n]}),s.jsxs("span",{className:"text-xs text-base-muted",children:[e,"/",t," XP"]})]}),s.jsx("div",{className:"h-2 bg-black/20 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out relative",style:{width:`${i}%`},children:s.jsx("div",{className:"absolute inset-0 bg-white/20 animate-pulse"})})})]})}function _x({current:e,max:t=Ye.MAX_ENERGY,regenAt:n}){const[r,i]=d.useState("");d.useEffect(()=>{if(n&&e<t){const l=()=>{const c=Date.now(),u=Math.max(0,n-c),h=Math.floor(u/6e4),f=Math.floor(u%6e4/1e3);i(`${h}:${f.toString().padStart(2,"0")}`)};l();const a=setInterval(l,1e3);return()=>clearInterval(a)}},[n,e,t]);const o=Array.from({length:t},(l,a)=>a<e);return s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx("div",{className:"flex gap-0.5",children:o.map((l,a)=>s.jsx("span",{className:`text-lg transition-all duration-300 ${l?"text-red-500 scale-110":"text-gray-600 scale-90"}`,children:l?"❤️":"🖤"},a))}),e<t&&r&&s.jsxs("span",{className:"text-xs text-base-muted ml-2",children:["+1 in ",r]})]})}const i0=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"More",slug:"more",questions:0,icon:"✨",color:"#FF8CC3",gradient:"from-pink-400 to-rose-500"}],o0=[{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],l0=[...i0.filter(e=>e.slug!=="more"),...o0],fu=(e=new Date)=>e.toLocaleDateString("en-CA"),mu=(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},Rx=(e,t)=>localStorage.setItem(e,JSON.stringify(t));function pu(){const e=ht(),{player:t,addXP:n,addCoins:r,levelProgress:i,useEnergy:o,changeAvatar:l}=p0(),[a]=fr("/sounds/correct.mp3",{volume:.6}),[c]=fr("/sounds/wrong.mp3",{volume:.6}),[u]=fr("/sounds/coin.mp3",{volume:.75}),[h]=fr("/sounds/levelup.mp3",{volume:.8}),f=d.useRef(t.level),p=d.useRef(null);d.useEffect(()=>{t.level>f.current&&(h==null||h(),f.current=t.level)},[t.level,h]);const[k,b]=d.useState(!1),[j,C]=d.useState(null),[g,m]=d.useState(!1),[v,S]=d.useState("medium"),[R,z]=d.useState(10),[N,x]=d.useState(45),[y,w]=d.useState(!1),[E,I]=d.useState(!1),[q,Z]=d.useState(null),[F,Q]=d.useState(null),[Y,M]=d.useState(!1),[_,L]=d.useState(!1),[A,P]=d.useState(null),D=10,W=5,[H,ne]=d.useState(!1),[ue,$]=d.useState("general-knowledge"),[V,se]=d.useState("medium"),[G,K]=d.useState(10),[ie,O]=d.useState(()=>mu("dq_daily_log",{})[fu()]===!0);d.useEffect(()=>{const T=sessionStorage.getItem("homeScrollPosition");T&&window.scrollTo(0,parseInt(T));const re=()=>{sessionStorage.setItem("homeScrollPosition",window.scrollY.toString())};return window.addEventListener("scroll",re),()=>window.removeEventListener("scroll",re)},[]),d.useEffect(()=>{if(ie)return;(async()=>{var re;try{const pe=await fetch("/data/quiz_questions_bank.csv").then(ae=>ae.text()),{data:_e}=po.parse(pe,{header:!0,skipEmptyLines:!0});if(!_e.length)throw new Error("empty");const he=_e[Math.floor(Math.random()*_e.length)],xe=[he.option1,he.option2,he.option3,he.option4].filter(Boolean);Z({category:he.category||"General",prompt:he.question,options:xe,answerIndex:["A","B","C","D"].indexOf((re=he.answer)==null?void 0:re.toUpperCase())||0})}catch{Z({category:"Science",prompt:"Which planet is known as the Red Planet?",options:["Earth","Mars","Jupiter","Venus"],answerIndex:1})}})()},[ie]);const B=(T,re)=>{if(F!==null)return;Q(T);const pe=T===q.answerIndex;if(pe){if(a(),re!=null&&re.currentTarget&&p.current){const _e=re.currentTarget.getBoundingClientRect();u(),P({startRect:_e,count:10,amount:W})}}else c();setTimeout(()=>{if(L(!0),M(!0),pe){const _e=fu();Rx("dq_daily_log",{...mu("dq_daily_log",{}),[_e]:!0}),O(!0);const he=Number(localStorage.getItem("dq_streak")||0);localStorage.setItem("dq_streak",String(he+1))}},600)},X=T=>{if(T.slug==="more"){b(!0);return}C(T),m(!0)},de=()=>{console.log("Starting quiz with energy:",t.energy),console.log("Category:",j.slug),e(`/quiz/${j.slug}`,{state:{mode:"quiz",difficulty:v,count:R,timer:{type:"per_q",seconds:N},source:"adventure"}}),m(!1)},te=()=>{console.log("Starting practice, category:",ue),e(`/quiz/${ue}`,{state:{mode:"practice",difficulty:V,count:G,timer:{type:"off",seconds:0}}}),ne(!1)},oe=[{icon:"🎯",label:"Quests",color:"bg-gradient-to-br from-orange-500 to-pink-500",action:()=>e("/profile/quests")},{icon:"🔥",label:`${t.bestCombo} Best`,color:"bg-gradient-to-br from-red-500 to-orange-500",action:()=>e("/profile/streaks")},{icon:"🏆",label:"Achieve",color:"bg-gradient-to-br from-blue-500 to-purple-500",action:()=>e("/profile/achievements")},{icon:"🎁",label:"Rewards",color:"bg-gradient-to-br from-green-500 to-teal-500",action:()=>e("/profile/rewards")}];return s.jsxs("div",{className:"min-h-screen bg-base-bg text-base-text",children:[s.jsx("div",{className:"fixed inset-0 -z-10 pointer-events-none",style:{background:"linear-gradient(to bottom, #0B0F1A, #111827)"}}),s.jsxs("div",{className:"relative z-10 px-4 pt-10 pb-24",children:[s.jsx("style",{jsx:!0,children:`
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
        `}),A&&s.jsx(Nx,{startRect:A.startRect,targetRef:p,count:A.count,onDone:()=>{n(D),r(A.amount),P(null)}}),s.jsxs("div",{className:"mb-8",children:[s.jsxs("div",{className:"flex justify-between items-start mb-4",children:[s.jsx("div",{className:"cursor-pointer hover:scale-105 transition-transform",onClick:()=>I(!0),children:s.jsx(Cx,{player:t,size:"normal",showLevel:!0,showName:!0})}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("button",{ref:p,onClick:()=>w(!0),className:"px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition",children:[s.jsx("span",{className:"text-lg",children:"🪙"}),s.jsx("span",{className:"font-bold",children:t.coins})]}),s.jsx("button",{onClick:()=>e("/profile"),className:"w-10 h-10 rounded-full bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"⚙️"})]}),s.jsx(_x,{current:t.energy,regenAt:t.energyRegenAt})]})]}),s.jsx(Ex,{current:i.current,required:i.required,level:t.level,animate:!0})]}),s.jsxs("div",{className:"relative overflow-hidden rounded-3xl p-8 mb-6 cursor-pointer transform transition-all hover:scale-[1.02]",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",boxShadow:"0 10px 40px rgba(102, 126, 234, 0.3)",animation:"pulse 3s infinite"},onClick:()=>e("/play"),children:[s.jsx("div",{className:"absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite"}}),s.jsx("div",{className:"absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-white/10",style:{animation:"float 4s ease-in-out infinite reverse"}}),s.jsx("h2",{className:"text-3xl font-bold mb-2",children:"🎰 Spin & Win"}),s.jsx("p",{className:"text-base opacity-90 mb-4",children:"Test your luck, win amazing prizes!"}),s.jsx("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",style:{background:"linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",backgroundSize:"200% auto",animation:"shimmer 2s linear infinite"},children:"Play Now →"})]}),s.jsx("div",{className:"grid grid-cols-4 gap-3 mb-8",children:oe.map((T,re)=>s.jsxs("button",{onClick:T.action,className:`${T.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`,children:[s.jsx("div",{className:"text-2xl",children:T.icon}),s.jsx("div",{className:"text-[10px] font-medium text-white",children:T.label})]},re))}),!ie&&q&&s.jsx("div",{className:"flip-card mb-6",children:s.jsxs("div",{className:`flip-card-inner ${_?"flipped":""}`,children:[s.jsx("div",{className:"flip-card-front",children:s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-base-border p-6",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-lg font-bold",children:"🎯 Daily Challenge"}),s.jsxs("span",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium",children:["+",W," coins +",D," XP"]})]}),s.jsx("p",{className:"text-sm mb-4 text-base-muted",children:q.prompt}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:q.options.map((T,re)=>{const pe=re===q.answerIndex,_e=F===re,he=F!==null;return s.jsx("button",{onClick:xe=>B(re,xe),disabled:F!==null,className:`p-3 rounded-xl border-2 text-sm font-medium transition-all ${he?pe?"border-green-500 bg-green-500/20":_e?"border-red-500 bg-red-500/20":"border-base-border bg-white/5":"border-base-border bg-white/5 hover:bg-white/10"} ${F!==null?"cursor-not-allowed":"cursor-pointer"}`,children:T},re)})})]})}),s.jsx("div",{className:"flip-card-back absolute inset-0",children:s.jsxs("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center",children:[s.jsx("div",{className:"text-6xl mb-4",style:{animation:"float 2s ease-in-out infinite"},children:"🎉"}),s.jsx("h3",{className:"text-2xl font-bold text-green-400 mb-2",children:"Awesome!"}),s.jsxs("p",{className:"text-sm text-base-muted text-center",children:["You've earned ",W," coins & ",D," XP!"]}),s.jsx("p",{className:"text-xs text-base-muted/70 mt-2",children:"Come back tomorrow for more"})]})})]})}),ie&&s.jsx("div",{className:"rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"text-3xl",children:"✅"}),s.jsxs("div",{children:[s.jsx("h3",{className:"font-bold",children:"Daily Challenge Complete!"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Come back tomorrow for a new challenge"})]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-lg font-bold mb-4",children:"Choose Your Adventure"}),s.jsx("div",{className:"grid grid-cols-3 gap-3",children:i0.map(T=>s.jsxs("button",{onClick:()=>X(T),className:`bg-gradient-to-br ${T.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`,children:[s.jsx("div",{className:"text-3xl",children:T.icon}),s.jsx("div",{className:"text-xs font-bold text-white text-center",children:T.name}),T.questions>0&&s.jsxs("div",{className:"text-[10px] bg-white/20 px-2 py-0.5 rounded-full",children:[T.questions," Qs"]})]},T.name))})]}),s.jsxs("button",{onClick:()=>ne(!0),className:`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${t.energy<10?"bg-green-500/20 border-2 border-green-500 animate-pulse":"bg-white/5 border border-base-border hover:bg-white/10"}`,children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl",children:"📚"}),s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-medium",children:"Practice Mode"}),s.jsx("div",{className:"text-xs text-base-muted",children:"No timer • No energy cost • Learn at your pace"})]})]}),s.jsx("div",{className:"text-xl",children:"→"})]}),E&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:T=>{T.target===T.currentTarget&&I(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[80vh] overflow-y-auto",onClick:T=>T.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Choose Your Avatar"}),s.jsx("button",{onClick:()=>I(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-4",children:Ye.AVATARS.map(T=>{const re=!t.unlockedAvatars.includes(T.id),pe=t.avatar===T.id;return s.jsxs("button",{onClick:()=>{re||(l(T.id),I(!1))},className:`p-4 rounded-2xl border-2 transition-all ${pe?"border-brand-blue bg-brand-blue/20":re?"border-gray-600 bg-gray-800/50 opacity-50":"border-base-border bg-white/5 hover:bg-white/10"}`,disabled:re,children:[s.jsx("div",{className:`text-4xl mb-2 ${re?"grayscale":""}`,children:T.emoji}),s.jsx("div",{className:"text-sm font-medium",children:T.name}),re&&s.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Unlock at Level ",T.unlockLevel]}),pe&&s.jsx("div",{className:"text-xs text-brand-blue mt-1",children:"Current"})]},T.id)})})]})}),g&&j&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:T=>{T.target===T.currentTarget&&m(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:T=>T.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Quiz Mode"}),s.jsx("button",{onClick:()=>m(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30",children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:j.icon}),s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium",children:["Category: ",j.name]}),s.jsxs("div",{className:"text-xs text-base-muted",children:[j.questions," questions available"]})]})]})}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(T=>s.jsx("button",{onClick:()=>S(T),className:`py-2 rounded-xl border ${v===T?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:T.charAt(0).toUpperCase()+T.slice(1)},T))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(T=>s.jsx("button",{onClick:()=>z(T),className:`py-2 rounded-xl border ${R===T?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:T},T))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Timer (seconds per question)"}),s.jsx("input",{type:"number",value:N,onChange:T=>x(Number(T.target.value)||45),min:10,max:120,className:"w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:de,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Quiz"})]})]})}),H&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:T=>{T.target===T.currentTarget&&ne(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border max-h-[90vh] overflow-y-auto",onClick:T=>T.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"Practice Mode"}),s.jsx("button",{onClick:()=>ne(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Category"}),s.jsx("div",{className:"grid grid-cols-3 gap-2 max-h-[200px] overflow-y-auto",children:l0.map(T=>s.jsxs("button",{onClick:()=>$(T.slug),className:`p-3 rounded-xl border flex flex-col items-center gap-1 ${ue===T.slug?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:[s.jsx("div",{className:"text-xl",children:T.icon}),s.jsx("div",{className:"text-[10px] text-center",children:T.name})]},T.slug))})]}),s.jsxs("div",{className:"mb-4",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Difficulty"}),s.jsx("div",{className:"grid grid-cols-3 gap-2",children:["easy","medium","hard"].map(T=>s.jsx("button",{onClick:()=>se(T),className:`py-2 rounded-xl border ${V===T?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:T.charAt(0).toUpperCase()+T.slice(1)},T))})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("label",{className:"text-sm text-base-muted mb-2 block",children:"Questions"}),s.jsx("div",{className:"grid grid-cols-4 gap-2",children:[5,10,20,30].map(T=>s.jsx("button",{onClick:()=>K(T),className:`py-2 rounded-xl border ${G===T?"bg-brand-blue/30 border-brand-blue":"bg-white/5 border-base-border"}`,children:T},T))})]}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>ne(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5",children:"Cancel"}),s.jsx("button",{onClick:te,className:"flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",children:"Start Practice"})]})]})}),k&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:T=>{T.target===T.currentTarget&&b(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border",onClick:T=>T.stopPropagation(),children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-xl font-bold",children:"More categories"}),s.jsx("button",{onClick:()=>b(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-3 mb-4",children:o0.map(T=>s.jsxs("button",{onClick:()=>{b(!1),X(T)},className:`bg-gradient-to-br ${T.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`,children:[s.jsx("div",{className:"text-3xl",children:T.icon}),s.jsx("div",{className:"text-sm font-bold text-white",children:T.name}),s.jsxs("div",{className:"text-xs text-white/80",children:[T.questions," questions"]})]},T.name))})]})}),y&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:T=>{T.target===T.currentTarget&&w(!1)},children:s.jsxs("div",{className:"bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border relative overflow-hidden",onClick:T=>T.stopPropagation(),children:[s.jsx("div",{className:"absolute inset-0 opacity-10",children:s.jsx("div",{className:"magic-gradient h-full"})}),s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"coin-3d text-5xl",style:{animation:"coinRotate 2s linear infinite, glow 2s ease-in-out infinite"},children:"🪙"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),s.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[t.coins," Coins"]})]})]}),s.jsx("button",{onClick:()=>w(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-sm font-medium text-base-muted mb-3",children:"Ways to Earn"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"+5 coins per correct answer"})]}),s.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Complete daily for bonus"})]}),s.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Test your luck!"})]}),s.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),s.jsx("div",{className:"text-xs text-base-muted mt-1",children:"Unlock special rewards"})]}),s.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between text-xs text-base-muted mb-2",children:[s.jsx("span",{children:"Next reward"}),s.jsxs("span",{children:[100-t.coins%100," coins to go"]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${t.coins%100}%`}})})]}),s.jsx("button",{onClick:()=>{w(!1),e("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",style:{boxShadow:"0 10px 30px rgba(251, 191, 36, 0.3)"},children:"Start Earning Now! 🚀"})]})]})})]})]})}var wi={linear:function(e,t,n,r){var i=n-t;return i*e/r+t},easeInQuad:function(e,t,n,r){var i=n-t;return i*(e/=r)*e+t},easeOutQuad:function(e,t,n,r){var i=n-t;return-i*(e/=r)*(e-2)+t},easeInOutQuad:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e+t},easeOutCubic:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e+1)+t},easeInOutCubic:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e+t},easeOutQuart:function(e,t,n,r){var i=n-t;return-i*((e=e/r-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,n,r){var i=n-t;return i*(e/=r)*e*e*e*e+t},easeOutQuint:function(e,t,n,r){var i=n-t;return i*((e=e/r-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,n,r){var i=n-t;return-i*Math.cos(e/r*(Math.PI/2))+i+t},easeOutSine:function(e,t,n,r){var i=n-t;return i*Math.sin(e/r*(Math.PI/2))+t},easeInOutSine:function(e,t,n,r){var i=n-t;return-i/2*(Math.cos(Math.PI*e/r)-1)+t},easeInExpo:function(e,t,n,r){var i=n-t;return e==0?t:i*Math.pow(2,10*(e/r-1))+t},easeOutExpo:function(e,t,n,r){var i=n-t;return e==r?t+i:i*(-Math.pow(2,-10*e/r)+1)+t},easeInOutExpo:function(e,t,n,r){var i=n-t;return e===0?t:e===r?t+i:(e/=r/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,n,r){var i=n-t;return-i*(Math.sqrt(1-(e/=r)*e)-1)+t},easeOutCirc:function(e,t,n,r){var i=n-t;return i*Math.sqrt(1-(e=e/r-1)*e)+t},easeInOutCirc:function(e,t,n,r){var i=n-t;return(e/=r/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,n,r){var i=n-t,o,l,a;return a=1.70158,l=0,o=i,e===0?t:(e/=r)===1?t+i:(l||(l=r*.3),o<Math.abs(i)?(o=i,a=l/4):a=l/(2*Math.PI)*Math.asin(i/o),-(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-a)*(2*Math.PI)/l))+t)},easeOutElastic:function(e,t,n,r){var i=n-t,o,l,a;return a=1.70158,l=0,o=i,e===0?t:(e/=r)===1?t+i:(l||(l=r*.3),o<Math.abs(i)?(o=i,a=l/4):a=l/(2*Math.PI)*Math.asin(i/o),o*Math.pow(2,-10*e)*Math.sin((e*r-a)*(2*Math.PI)/l)+i+t)},easeInOutElastic:function(e,t,n,r){var i=n-t,o,l,a;return a=1.70158,l=0,o=i,e===0?t:(e/=r/2)===2?t+i:(l||(l=r*(.3*1.5)),o<Math.abs(i)?(o=i,a=l/4):a=l/(2*Math.PI)*Math.asin(i/o),e<1?-.5*(o*Math.pow(2,10*(e-=1))*Math.sin((e*r-a)*(2*Math.PI)/l))+t:o*Math.pow(2,-10*(e-=1))*Math.sin((e*r-a)*(2*Math.PI)/l)*.5+i+t)},easeInBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*(e/=r)*e*((i+1)*e-i)+t},easeOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),o*((e=e/r-1)*e*((i+1)*e+i)+1)+t},easeInOutBack:function(e,t,n,r,i){var o=n-t;return i===void 0&&(i=1.70158),(e/=r/2)<1?o/2*(e*e*(((i*=1.525)+1)*e-i))+t:o/2*((e-=2)*e*(((i*=1.525)+1)*e+i)+2)+t},easeInBounce:function(e,t,n,r){var i=n-t,o;return o=wi.easeOutBounce(r-e,0,i,r),i-o+t},easeOutBounce:function(e,t,n,r){var i=n-t;return(e/=r)<1/2.75?i*(7.5625*e*e)+t:e<2/2.75?i*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?i*(7.5625*(e-=2.25/2.75)*e+.9375)+t:i*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,n,r){var i=n-t,o;return e<r/2?(o=wi.easeInBounce(e*2,0,i,r),o*.5+t):(o=wi.easeOutBounce(e*2-r,0,i,r),o*.5+i*.5+t)}},Px=wi;function zx(e){return e*Math.PI/180}function xt(e,t){return e+Math.random()*(t-e)}function Tx(e,t){return Math.floor(e+Math.random()*(t-e+1))}var as;(function(e){e[e.Circle=0]="Circle",e[e.Square=1]="Square",e[e.Strip=2]="Strip"})(as||(as={}));var xn;(function(e){e[e.Positive=1]="Positive",e[e.Negative=-1]="Negative"})(xn||(xn={}));const Lx=1e3/60;class Mx{constructor(t,n,r,i){this.getOptions=n;const{colors:o,initialVelocityX:l,initialVelocityY:a}=this.getOptions();this.context=t,this.x=r,this.y=i,this.w=xt(5,20),this.h=xt(5,20),this.radius=xt(5,10),this.vx=typeof l=="number"?xt(-l,l):xt(l.min,l.max),this.vy=typeof a=="number"?xt(-a,0):xt(a.min,a.max),this.shape=Tx(0,2),this.angle=zx(xt(0,360)),this.angularSpin=xt(-.2,.2),this.color=o[Math.floor(Math.random()*o.length)],this.rotateY=xt(0,1),this.rotationDirection=xt(0,1)?xn.Positive:xn.Negative}update(t){const{gravity:n,wind:r,friction:i,opacity:o,drawShape:l}=this.getOptions(),a=t/Lx;this.x+=this.vx*a,this.y+=this.vy*a,this.vy+=n*a,this.vx+=r*a,this.vx*=i**a,this.vy*=i**a,this.rotateY>=1&&this.rotationDirection===xn.Positive?this.rotationDirection=xn.Negative:this.rotateY<=-1&&this.rotationDirection===xn.Negative&&(this.rotationDirection=xn.Positive);const c=.1*this.rotationDirection*a;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=o,this.context.lineCap="round",this.context.lineWidth=2,l&&typeof l=="function")l.call(this,this.context);else switch(this.shape){case as.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case as.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case as.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class Fx{constructor(t,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=i=>{this.particles.splice(i,1)},this.getParticle=()=>{const i=xt(this.x,this.w+this.x),o=xt(this.y,this.h+this.y);return new Mx(this.context,this.getOptions,i,o)},this.animate=i=>{const{canvas:o,context:l,particlesGenerated:a,lastNumberOfPieces:c}=this,{run:u,recycle:h,numberOfPieces:f,debug:p,tweenFunction:k,tweenDuration:b}=this.getOptions();if(!u)return!1;const j=this.particles.length,C=h?j:a;if(C<f){c!==f&&(this.tweenProgress=0,this.tweenFrom=C,this.lastNumberOfPieces=f),this.tweenProgress=Math.min(b,Math.max(0,this.tweenProgress+i));const g=k(this.tweenProgress,this.tweenFrom,f,b),m=Math.round(g-C);for(let v=0;v<m;v++)this.particles.push(this.getParticle());this.particlesGenerated+=m}p&&(l.font="12px sans-serif",l.fillStyle="#333",l.textAlign="right",l.fillText(`Particles: ${j}`,o.width-10,o.height-20));for(let g=this.particles.length-1;g>=0;g--){const m=this.particles[g];m.update(i),(m.y>o.height||m.y<-100||m.x>o.width+100||m.x<-100)&&(h&&C<=f?this.particles[g]=this.getParticle():this.removeParticleAt(g))}return j>0||C<f},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.getOptions=n}}const Ya={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:Px.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class Ix{constructor(t,n){this.lastFrameTime=0,this.setOptionsWithDefaults=i=>{const o={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...o,...Ya,...i},Object.assign(this,i.confettiSource)},this.update=(i=0)=>{const{options:{run:o,onConfettiComplete:l,frameRate:a},canvas:c,context:u}=this,h=Math.min(i-this.lastFrameTime,50);if(a&&h<1e3/a){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=i-(a?h%a:0),o&&(u.fillStyle="white",u.clearRect(0,0,c.width,c.height)),this.generator.animate(h)?this.rafId=requestAnimationFrame(this.update):(l&&typeof l=="function"&&this.generator.particlesGenerated>0&&l.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.generator=new Fx(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(t){var i,o;const n=(i=this._options)==null?void 0:i.run,r=(o=this._options)==null?void 0:o.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&r===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&n===!1&&this.update()}}const Dx=rt.createRef();class Va extends rt.Component{constructor(t){super(t),this.canvas=rt.createRef(),this.canvas=t.canvasRef||Dx}componentDidMount(){if(this.canvas.current){const t=Ho(this.props)[0];this.confetti=new Ix(this.canvas.current,t)}}componentDidUpdate(){const t=Ho(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,n]=Ho(this.props),r={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return s.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...n,style:r})}}Va.defaultProps={...Ya};Va.displayName="ReactConfetti";function Ho(e){const t={},n={},r={},i=[...Object.keys(Ya),"confettiSource","drawShape","onConfettiComplete","frameRate"],o=["canvasRef"];for(const l in e){const a=e[l];i.includes(l)?t[l]=a:o.includes(l)?o[l]=a:r[l]=a}return[t,r,n]}const a0=rt.forwardRef((e,t)=>s.jsx(Va,{canvasRef:t,...e})),Ax=[{name:"General Knowledge",questions:50,icon:"🧠",color:"#7C3AED"},{name:"Artificial Intelligence",questions:28,icon:"🤖",color:"#10B981"},{name:"Fun facts",questions:30,icon:"🎉",color:"#EF4444"},{name:"Science",questions:45,icon:"🧪",color:"#F59E0B"},{name:"History",questions:42,icon:"🏺",color:"#2563EB"},{name:"Geography",questions:38,icon:"🗺️",color:"#FACC15"}],Mt=Ax.slice(0,6),Ht=360/Mt.length,c0={"general-knowledge":"TINA","artificial-intelligence":"ALBERT","fun-facts":"BONZO",science:"POP",history:"TITO",geography:"HECTOR"},Ut={COINS:"qp_coins",XP:"qp_xp",LEVEL:"qp_level",OWNED_CHARACTERS:"owned_characters",SOUND:"play_sound_on"},dn={FULL_TURNS:6,DURATION:2800,OVERSHOOT:12,SETTLE_DURATION:350},qt={get:(e,t=null)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},set:(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}}},qn=e=>e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),hu=e=>(e%360+360)%360,Ga=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},yr=(e,t=.7)=>{try{const n=new Audio(e);n.volume=t,n.play()}catch{}};function xu({onModeSelect:e,onNavigateHome:t}){return s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center mb-8",children:[s.jsx("button",{onClick:t,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"}),s.jsx("h1",{className:"flex-1 text-center text-xl font-bold mb-12",children:"Choose a quiz mode"})]}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("button",{onClick:()=>e("classic"),className:"w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]",children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 opacity-30",children:s.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full animate-spin",style:{animationDuration:"20s"},children:[Mt.map((n,r)=>{const i=r*Ht,o=i+Ht,l=Ht>180?1:0,a=Math.PI*i/180,c=Math.PI*o/180,u=50+40*Math.cos(a),h=50-40*Math.sin(a),f=50+40*Math.cos(c),p=50-40*Math.sin(c);return s.jsx("path",{d:`M50,50 L${u},${h} A40,40 0 ${l} 0 ${f},${p} Z`,fill:n.color,stroke:"white",strokeWidth:"0.5"},r)}),s.jsx("circle",{cx:"50",cy:"50",r:"8",fill:"white"})]})}),s.jsx("div",{className:"absolute top-4 left-8 text-3xl opacity-60",children:"🏆"}),s.jsx("div",{className:"absolute top-12 right-16 text-xl opacity-40",children:"⭐"}),s.jsx("div",{className:"absolute bottom-6 left-6 text-2xl opacity-50",children:"🎲"}),s.jsx("div",{className:"absolute bottom-4 right-12 text-3xl opacity-60",children:"🍪"}),s.jsx("div",{className:"absolute top-1/2 left-4 text-lg opacity-40",children:"🥨"}),s.jsx("h2",{className:"text-5xl font-black text-white mb-10 relative z-10 ",style:{transform:"translateX(-20px)"},children:"CLASSIC"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💀"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-red-400 to-pink-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"💰"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TREASURE MINE"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"⚔️"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"SURVIVAL ARENA"})]}),s.jsxs("button",{disabled:!0,className:"aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60",children:[s.jsx("div",{className:"text-2xl mb-2",children:"📱"}),s.jsx("h4",{className:"text-lg font-black text-white",children:"TRIVIA VIDEO"})]})]})]})]})})}function Ox({run:e,coins:t,xp:n,level:r,ownedCharacters:i,onSpin:o,onBack:l,spinning:a,angle:c,transition:u,result:h,showCallout:f,glowColor:p,soundOn:k,setSoundOn:b,showSparkle:j,pulseIdx:C,nextProgressIdx:g,pendingProgressIdx:m,coinBurstTick:v,lastAnswerWasCorrect:S}){const R=100*r*(r-1),[z,N]=d.useState(!1),x=d.useRef(0),y=d.useRef(null),w=d.useRef(null),[E,I]=d.useState({dx:110,dy:-260});d.useEffect(()=>{if(m==null)return;N(!1);const F=setTimeout(()=>N(!0),30);return()=>clearTimeout(F)},[m]);const[q,Z]=d.useState(!1);return d.useEffect(()=>{var Q,Y,M,_;if(!v||!S||v===x.current)return;x.current=v;try{const L=(Y=(Q=w==null?void 0:w.current)==null?void 0:Q.getBoundingClientRect)==null?void 0:Y.call(Q),A=(_=(M=y==null?void 0:y.current)==null?void 0:M.getBoundingClientRect)==null?void 0:_.call(M);if(L&&A){const P=L.left+L.width/2,D=L.top+L.height/2,W=A.left+A.width/2,H=A.top+A.height/2;I({dx:W-P,dy:H-D})}}catch{}k&&yr("/sounds/coin.mp3",.7),Z(!0);const F=setTimeout(()=>Z(!1),700);return()=>clearTimeout(F)},[v,k]),s.jsx("div",{className:"fixed inset-0 bg-base-bg text-base-text overflow-hidden",children:s.jsxs("div",{className:"h-full overflow-y-auto mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+3rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-8",children:[s.jsx("button",{onClick:l,className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:"←"}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsxs("button",{className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border text-left translate-y-[4px]",children:[s.jsxs("div",{className:"text-[11px]",children:["Lvl ",r," • ",n,"/",R]}),s.jsx("div",{className:"mt-1 h-1 w-full bg-white/10 rounded",children:s.jsx("div",{className:"h-1 bg-brand-blue rounded",style:{width:`${Math.min(n/R,1)*100}%`}})})]}),s.jsxs("button",{ref:y,className:"px-3 py-1 rounded-2xl bg-white/5 border border-base-border translate-y-[4px]",children:["🪙 ",t]})]}),s.jsx("button",{onClick:()=>b(!k),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition translate-y-[4px]",children:s.jsx("span",{className:"text-lg",children:k?"🔊":"🔇"})})]}),i.length>0&&s.jsx("div",{className:"flex justify-center mb-6",children:s.jsx("div",{className:"flex gap-2 px-4 py-2 bg-white/10 rounded-2xl backdrop-blur border border-base-border",children:i.map(F=>{const Q=Mt.find(M=>qn(M.name)===F),Y=c0[F];return s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/30",children:s.jsx("span",{className:"text-sm",children:Q==null?void 0:Q.icon})}),s.jsx("span",{className:"text-[10px] text-base-muted mt-1",children:Y})]},F)})})}),s.jsx("div",{className:"flex justify-center mt-12 sm:mt-16 mb-6",children:s.jsxs("div",{className:"w-80 max-w-full",children:[s.jsx("style",{children:`
              @keyframes qp_sweep { from { transform: translateX(0); } to { transform: translateX(100%); } }
            `}),s.jsx("div",{className:"relative grid grid-cols-3 gap-1 h-3 rounded-full overflow-hidden bg-white/10 border border-white/15",children:[0,1,2].map(F=>{const Q=["#FF9800","#FFC107","#cadd75ff"],Y=!!e.progress[F];return s.jsxs("div",{className:"relative h-full bg-white/10",children:[s.jsx("div",{className:"absolute inset-y-0 left-0 rounded-[6px]",style:{width:Y?F===m?z?"100%":"0%":g===F&&m==null?"0%":"100%":"0%",backgroundColor:Q[F],transition:F===m?"width 1200ms ease-out":"none"}}),C===F&&s.jsx("span",{className:"absolute inset-y-0 left-0 w-full overflow-hidden pointer-events-none",children:s.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded bg-white/80",style:{animation:"qp_sweep 1200ms ease-out forwards"}})}),j===F&&s.jsx("span",{className:"absolute right-[-2px] top-1/2 -translate-y-1/2 text-xs select-none",children:"✨"})]},F)})},e.qIndex)]})}),s.jsx("section",{className:"flex flex-col items-center mt-28 sm:mt-32 mb-10",children:s.jsxs("div",{ref:w,className:"relative w-96 h-96 rounded-full select-none",children:[p&&s.jsx("div",{className:"pointer-events-none absolute -inset-4 rounded-full",style:{boxShadow:`0 0 0 8px ${p}40, 0 0 40px 12px ${p}60`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden will-change-transform bg-base-card",style:{transform:`rotate(${c}deg)`,transition:u},children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[Mt.map((F,Q)=>{const Y=Q*Ht,M=Y+Ht,_=Ht>180?1:0,L=Math.PI*Y/180,A=Math.PI*M/180,P=50+45*Math.cos(L),D=50-45*Math.sin(L),W=50+45*Math.cos(A),H=50-45*Math.sin(A),ne=Y+Ht/2,ue=28,$=50+ue*Math.cos(ne*Math.PI/180),V=50-ue*Math.sin(ne*Math.PI/180);return s.jsxs("g",{children:[s.jsx("path",{d:`M50,50 L${P},${D} A45,45 0 ${_} 0 ${W},${H} Z`,fill:F.color,stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),s.jsx("text",{x:$,y:V,fill:"white",fontSize:"8",dominantBaseline:"middle",textAnchor:"middle",className:"font-bold",children:F.icon})]},Q)}),s.jsx("circle",{cx:"50",cy:"50",r:"12",fill:"white",stroke:"#ddd",strokeWidth:"1"})]})}),s.jsx("button",{onClick:o,disabled:a,className:`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-24 h-24 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${a?"opacity-60 cursor-not-allowed scale-95":"hover:scale-105 active:scale-95"}`,children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 z-20",children:s.jsx("div",{className:"w-6 h-8 bg-white rounded-lg shadow-md flex items-start justify-center pt-1",children:s.jsx("div",{className:"w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600"})})}),f&&h&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -top-16 z-30",children:s.jsxs("div",{className:"px-4 py-2 rounded-2xl bg-base-card border border-base-border shadow-lg font-semibold",children:[s.jsx("span",{className:"mr-2",children:h.cat.icon}),h.cat.name]})}),q&&s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
                    @keyframes coinFly {
                      0%   { transform: translate(-50%, -50%) scale(0.9); opacity: 1; }
                      100% { transform: translate(var(--coin-dx), var(--coin-dy)) scale(0.4); opacity: 0; }
                    }
                `}),[0,1,2].map(F=>s.jsx("div",{className:"pointer-events-none absolute z-30 top-1/2 left-1/2",style:{animation:`coinFly 600ms ease-out ${F*80}ms forwards`,"--coin-dx":`${E.dx}px`,"--coin-dy":`${E.dy}px`},children:s.jsx("div",{className:"w-6 h-6 rounded-full grid place-items-center bg-yellow-400 text-black font-bold",children:"🪙"})},F))]})]})}),s.jsx("div",{className:"text-center",children:s.jsx("button",{disabled:!0,className:"text-base-muted underline opacity-60 cursor-not-allowed text-sm",children:"Party Spin (pass & play)"})})]})})}function gu({category:e,onComplete:t,isBonus:n=!1,soundOn:r=!0}){return d.useEffect(()=>{r&&yr("/sounds/flush.mp3",.8);const i=setTimeout(t,1e3);return Ga([50]),()=>clearTimeout(i)},[t,r]),n?s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white",children:[s.jsx("h2",{className:"text-5xl font-black mb-8",children:"Bonus Question"}),s.jsx("div",{className:"w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse",children:s.jsx("span",{className:"text-6xl",children:"⭐"})})]}):s.jsx("div",{className:"min-h-screen bg-base-bg text-white flex items-center justify-center",children:s.jsxs("div",{className:"relative w-96 h-96 rounded-full flex items-center justify-center",style:{backgroundColor:e.color},children:[s.jsxs("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:[s.jsx("div",{className:"absolute top-8 left-10 w-20 h-20 bg-white/20 rounded-full"}),s.jsx("div",{className:"absolute bottom-10 right-12 w-24 h-24 bg-white/20 rounded-full"})]}),s.jsxs("div",{className:"relative z-10 text-center",children:[s.jsx("div",{className:"text-4xl font-black mb-2",children:e.name}),s.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full grid place-items-center mx-auto",children:s.jsx("span",{className:"text-4xl",children:e.icon})})]})]})})}function $x({onDone:e}){return d.useEffect(()=>{const t=setTimeout(e,1e3);return()=>clearTimeout(t)},[e]),s.jsx("div",{className:"min-h-screen flex items-center justify-center bg-green-600 text-white",children:s.jsx("h2",{className:"text-2xl font-black",children:"Whohoo!! 3 correct in a row 🎉"})})}function vu({question:e,category:t,onAnswer:n,run:r,timeLeft:i,usedLifelines:o,onUseLifeline:l,eliminatedOptions:a,audienceData:c,onBack:u,timeUp:h,onTimeUpBackToWheel:f,soundOn:p}){const[k,b]=d.useState(null),[j,C]=d.useState(!1),[g,m]=d.useState(!1),v=d.useRef(null),S=d.useRef(null),[R,z]=d.useState(null);d.useEffect(()=>{if(!j||!v.current)return;const y=v.current.getBoundingClientRect();z({x:y.left,y:y.top-300,w:y.width,h:8})},[j]);const N=y=>{if(j)return;b(y),C(!0);const w=y===e.correctIndex;Ga(w?[50,30,50]:[200]),p&&yr(w?"/sounds/correct.mp3":"/sounds/wrong.mp3",.7),setTimeout(()=>{n(w,null)},1500)},x=k===e.correctIndex;return s.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden",children:s.jsxs("div",{ref:S,className:"relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]",children:[s.jsx("div",{className:"mb-4",children:s.jsx("button",{onClick:()=>m(!0),className:"h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition",children:"←"})}),s.jsxs("div",{className:"text-center mb-6",children:[s.jsx("div",{className:`text-4xl font-black mb-2 ${i<=10?"text-red-400 animate-pulse":"text-white"}`,children:i}),s.jsx("div",{className:"w-full bg-white/20 rounded-full h-2",children:s.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${i<=10?"bg-red-400":"bg-blue-400"}`,style:{width:`${i/30*100}%`}})})]}),s.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[s.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-2xl",style:{backgroundColor:t.color},children:t.icon}),s.jsxs("div",{children:[s.jsx("div",{className:"text-lg font-bold",children:t.name}),s.jsxs("div",{className:"text-sm text-gray-400",children:["Question ",r.qIndex+1,"/3"]})]})]}),s.jsx("h2",{ref:v,className:"text-xl font-semibold mb-6 leading-relaxed",children:e.prompt}),s.jsx("div",{className:"space-y-3 mb-6",children:e.options.map((y,w)=>{const E=a.includes(w),I=k===w,q=w===e.correctIndex;let Z="bg-white/10 border-white/20",F="opacity-100";return E?F="opacity-30":j&&I?Z=q?"bg-green-500/30 border-green-400":"bg-red-500/30 border-red-400":j&&q?Z="bg-green-500/30 border-green-400":I&&(Z="bg-white/20 border-white/40"),s.jsx("button",{onClick:()=>N(w),disabled:j||E,className:`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${Z} ${F} ${!j&&!E?"hover:bg-white/15 active:scale-98":""}`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm",children:String.fromCharCode(65+w)}),s.jsx("span",{className:"font-medium flex-1",children:y}),c&&s.jsxs("span",{className:"text-xs text-base-muted",children:[Math.round(c[w]),"%"]})]})},w)})}),!j&&s.jsxs("div",{className:"flex gap-4 mb-8",children:[s.jsx("button",{onClick:()=>l("fifty"),disabled:o.fifty,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.fifty?"bg-gray-700 border-gray-600 text-gray-400":"bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95"}`,children:"50:50"}),s.jsx("button",{onClick:()=>l("audience"),disabled:o.audience,className:`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${o.audience?"bg-gray-700 border-gray-600 text-gray-400":"bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95"}`,children:"👥 Ask"})]}),j&&s.jsxs("div",{className:"relative text-center",children:[x&&s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:s.jsx(a0,{recycle:!1,numberOfPieces:120,gravity:.9,tweenDuration:1800,confettiSource:R||{x:0,y:0,w:typeof window<"u"?window.innerWidth:320,h:1}})}),s.jsx("button",{onClick:()=>n(x,null,!0),className:"relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95",children:"Continue"})]}),h&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Time’s up"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You ran out of time."}),s.jsx("button",{onClick:f,className:"mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition",children:"Back to Wheel"})]})}),g&&s.jsx("div",{className:"fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6",children:s.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center",children:[s.jsx("div",{className:"text-lg font-bold mb-2",children:"Want to quit?"}),s.jsx("p",{className:"text-base-muted mb-5",children:"You’ll lose this question’s progress."}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>m(!1),className:"flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition",children:"No"}),s.jsx("button",{onClick:u,className:"flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition",children:"Yes"})]})]})})]})})}function Bx({onSelect:e}){return s.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white",children:s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-16 pb-8",children:[s.jsxs("header",{className:"text-center mb-12",children:[s.jsx("div",{className:"text-6xl mb-4",children:"🏆"}),s.jsx("h1",{className:"text-4xl font-black mb-4",children:"Perfect Round!"}),s.jsx("p",{className:"text-xl opacity-90",children:"Choose a character to unlock"})]}),s.jsx("div",{className:"grid grid-cols-2 gap-6",children:Mt.map(t=>{const n=c0[qn(t.name)];return s.jsxs("button",{onClick:()=>e(qn(t.name)),className:"p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95",children:[s.jsx("div",{className:"text-4xl mb-3",children:t.icon}),s.jsx("div",{className:"font-black text-lg mb-1",children:n}),s.jsx("div",{className:"text-sm opacity-75",children:t.name})]},qn(t.name))})})]})})}function Ux(){const[e,t]=d.useState("modes"),n=ht(),r=$t(),[i,o]=d.useState(()=>qt.get(Ut.COINS,0)),[l,a]=d.useState(()=>qt.get(Ut.XP,0)),[c,u]=d.useState(()=>qt.get(Ut.LEVEL,1)),[h,f]=d.useState(()=>qt.get(Ut.OWNED_CHARACTERS,[])),[p,k]=d.useState(()=>qt.get(Ut.SOUND,!0)),[b,j]=d.useState({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),[C,g]=d.useState([]),[m,v]=d.useState(null),[S,R]=d.useState(null),[z,N]=d.useState(30),[x,y]=d.useState([]),[w,E]=d.useState(null),[I,q]=d.useState(null),[Z,F]=d.useState(!1),[Q,Y]=d.useState(0),[M,_]=d.useState("none"),[L,A]=d.useState(!1),[P,D]=d.useState(null),[W,H]=d.useState(!1),[ne,ue]=d.useState(null),[$,V]=d.useState(-1),[se,G]=d.useState(0),[K,ie]=d.useState(null),[O,B]=d.useState(null),[X,de]=d.useState(!1),[te,oe]=d.useState(null),[T,re]=d.useState(-1),[pe,_e]=d.useState([!1,!1,!1]),[he,xe]=d.useState(!1),[ae,ye]=d.useState(!1),qe=d.useRef(null),Xe=d.useRef(null),at=d.useRef(null),ct=d.useMemo(()=>{var ee;return((ee=window.matchMedia)==null?void 0:ee.call(window,"(prefers-reduced-motion: reduce)").matches)||!1},[]);d.useEffect(()=>{try{localStorage.setItem("qp_in_question",JSON.stringify(e==="question"))}catch{}return()=>{try{localStorage.removeItem("qp_in_question")}catch{}}},[e]),d.useEffect(()=>(We(),Gt(),()=>Kn()),[]),d.useEffect(()=>qt.set(Ut.COINS,i),[i]),d.useEffect(()=>qt.set(Ut.XP,l),[l]),d.useEffect(()=>qt.set(Ut.LEVEL,c),[c]),d.useEffect(()=>qt.set(Ut.OWNED_CHARACTERS,h),[h]),d.useEffect(()=>qt.set(Ut.SOUND,p),[p]),d.useEffect(()=>(e==="question"&&z>0&&!ae?qe.current=setTimeout(()=>{N(ee=>{const fe=ee-1;return fe===10&&p&&yr("/sounds/tick.mp3",.8),fe})},1e3):e==="question"&&z===0&&F(!0),()=>{qe.current&&clearTimeout(qe.current)}),[e,z,p,ae]),d.useEffect(()=>{if(e!=="wheel"||K==null)return;V(K),p&&yr("/sounds/progress.mp3",.6),re(K);const ee=setTimeout(()=>re(-1),900),fe=setTimeout(()=>V(-1),900),Ie=setTimeout(()=>{te&&(te==="streakFlash"?t("streakFlash"):te==="characterPicker"?t("characterPicker"):(t("modes"),cn()),oe(null)),ie(null)},1800);return()=>{clearTimeout(ee),clearTimeout(fe),clearTimeout(Ie)}},[e,K,te,p,he]),d.useEffect(()=>{e!=="wheel"||!he||(G(ee=>ee+1),xe(!1))},[e,he]);const We=async()=>{try{const fe=await(await fetch("/data/quiz_questions_bank.csv")).text(),{data:Ie}=po.parse(fe,{header:!0,skipEmptyLines:!0,transformHeader:be=>be.trim().toLowerCase()}),Le=Ie.map((be,nt)=>{var Is;const Ke=[be.option1,be.option2,be.option3,be.option4].map(go=>(go||"").trim()).filter(Boolean);if(Ke.length<4)return null;let Mn={a:0,b:1,c:2,d:3}[(Is=be.answer)==null?void 0:Is.toLowerCase()];return Mn===void 0&&(Mn=Ke.findIndex(go=>go.toLowerCase()===(be.answer||"").toLowerCase())),Mn===-1&&(Mn=0),{id:be.id||`q_${nt}`,prompt:(be.question||"").trim(),options:Ke,correctIndex:Mn,category:(be.category||be.subject||"general knowledge").trim(),difficulty:(be.difficulty||"medium").toLowerCase(),explanation:(be.explanation||"").trim()}}).filter(Boolean);g(Le)}catch(ee){console.error("Failed to load questions:",ee),g([])}},Gt=()=>{const ee=new Audio("/sounds/spin.mp3");ee.loop=!0,ee.volume=.6,Xe.current=ee},Kn=()=>{if(qe.current&&clearTimeout(qe.current),at.current&&(clearTimeout(at.current),at.current=null),Xe.current){try{Xe.current.pause()}catch{}Xe.current=null}},ho=()=>{if(p&&Xe.current){try{Xe.current.currentTime=0,Xe.current.play()}catch{}at.current&&clearTimeout(at.current),at.current=setTimeout(()=>{Ms()},2e3)}},Ms=()=>{if(at.current&&(clearTimeout(at.current),at.current=null),Xe.current)try{Xe.current.pause(),Xe.current.currentTime=0}catch{}},cn=()=>{j({qIndex:0,progress:[!1,!1,!1],lifelines:{fifty:!1,audience:!1}}),_e([!1,!1,!1]),v(null),R(null),q(null),y([]),E(null),F(!1),G(0)},Jn=()=>{if(L)return;D(null),H(!1),ue(null),A(!0),ho();const ee=Math.floor(Math.random()*Mt.length),fe=Mt[ee],Ie=hu(Q),Le=ee*Ht+Ht/2,be=(Math.random()-.5)*(Ht*.3),nt=360-Le+be;let Ke=hu(nt-Ie);const Mr=dn.FULL_TURNS*360+Ke,Mn=Q+Mr+dn.OVERSHOOT;_(`transform ${ct?1e3:dn.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`),Y(Mn),Ga([20,50,20]),setTimeout(()=>{_(`transform ${ct?200:dn.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`),Y(Is=>Is-dn.OVERSHOOT)},ct?1e3:dn.DURATION),setTimeout(()=>{Ms(),A(!1),D({cat:fe,index:ee}),R(fe),ue(fe.color),H(!0),setTimeout(()=>{H(!1),t("interstitial")},1500),setTimeout(()=>ue(null),1e3)},(ct?1e3:dn.DURATION)+(ct?200:dn.SETTLE_DURATION)+100)},xo=()=>{const ee=C.filter(Ie=>{const Le=Ie.category.toLowerCase(),be=S.name.toLowerCase();return Le.includes(be)||be.includes(Le)});let fe;ee.length>0?fe=ee[Math.floor(Math.random()*ee.length)]:fe=C[Math.floor(Math.random()*C.length)],fe?(v(fe),N(30),y([]),E(null),F(!1),ye(!1),t("question")):t("wheel")},Lr=(ee,fe,Ie=!1)=>{if(!Ie){ye(!0);return}const Le=b.qIndex,be=[...b.progress];be[Le]=!0;const nt=[...pe];if(nt[Le]=!!ee,_e(nt),j(Ke=>({...Ke,progress:be,qIndex:Ke.qIndex+1})),ee&&(o(Ke=>Ke+5),a(Ke=>Ke+1),xe(!0)),B(Le),de(!!ee),Le===2){const Ke=nt.every(Boolean);oe(Ke?"streakFlash":"modes")}else oe(null);t("wheel")},Fs=ee=>{if(!(b.lifelines[ee]||!m)){if(j(fe=>({...fe,lifelines:{...fe.lifelines,[ee]:!0}})),ee==="fifty"){const Ie=m.options.map((Le,be)=>be).filter(Le=>Le!==m.correctIndex).slice(0,2);y(Ie)}else if(ee==="audience"){const fe=40+Math.random()*25;let Ie=100-fe;const Le=[0,0,0,0];Le[m.correctIndex]=Math.round(fe);const be=[0,1,2,3].filter(nt=>nt!==m.correctIndex);be.forEach((nt,Ke)=>{if(Ke===be.length-1)Le[nt]=Ie;else{const Mr=Math.floor(Math.random()*Ie);Le[nt]=Mr,Ie-=Mr}}),E(Le)}}},ce=ee=>{q(ee),t("bonusInterstitial")},le=ee=>{ee&&I&&(f(fe=>[...new Set([...fe,I])]),p&&yr("/sounds/coin.mp3",1)),setTimeout(()=>{t("modes"),cn()},3e3)},ge=ee=>{ee==="classic"&&(cn(),t("wheel"))},ke=()=>{window.location.href="/",console.log("Navigate to home")},Oe=()=>{t("modes"),cn()},$e=()=>{t("wheel")};switch(d.useEffect(()=>{if(e!=="wheel"||O==null)return;const fe=setTimeout(()=>{ie(O),B(null)},X?1800:0);return()=>clearTimeout(fe)},[e,O,X]),d.useEffect(()=>{const ee=new URLSearchParams(r.search);(ee.get("view")==="modes"||ee.get("view")==="home")&&(cn(),t("modes"),n("/play",{replace:!0}))},[r.search]),e){case"modes":return s.jsx(xu,{onModeSelect:ge,onNavigateHome:ke});case"wheel":return s.jsx(Ox,{run:b,coins:i,xp:l,level:c,ownedCharacters:h,onSpin:Jn,onBack:Oe,spinning:L,angle:Q,transition:M,result:P,showCallout:W,glowColor:ne,soundOn:p,setSoundOn:k,showSparkle:$,pulseIdx:T,coinBurstTick:se,pendingProgressIdx:K,lastAnswerWasCorrect:X,nextProgressIdx:O});case"interstitial":return s.jsx(gu,{category:S,onComplete:xo,soundOn:p});case"streakFlash":return s.jsx($x,{onDone:()=>t("bonusInterstitial")});case"question":return s.jsx(vu,{question:m,category:S,onAnswer:Lr,run:b,timeLeft:z,usedLifelines:b.lifelines,onUseLifeline:Fs,eliminatedOptions:x,audienceData:w,onBack:$e,timeUp:Z,onTimeUpBackToWheel:()=>{F(!1),t("wheel")},soundOn:p});case"characterPicker":return s.jsx(Bx,{onSelect:ce});case"bonusInterstitial":return s.jsx(gu,{category:Mt.find(ee=>qn(ee.name)===I),onComplete:()=>t("bonusQuestion"),isBonus:!0,soundOn:p});case"bonusQuestion":if(!m){const ee=Mt.find(fe=>qn(fe.name)===I);if(ee&&C.length>0){const fe=C.filter(Le=>{const be=Le.category.toLowerCase(),nt=ee.name.toLowerCase();return be.includes(nt)||nt.includes(be)}),Ie=fe.length>0?fe[Math.floor(Math.random()*fe.length)]:C[Math.floor(Math.random()*C.length)];v(Ie),N(30)}return s.jsx("div",{className:"min-h-screen bg-base-bg text-base-text flex items-center justify-center",children:s.jsx("div",{className:"text-lg",children:"Loading bonus question..."})})}return s.jsx(vu,{question:m,category:Mt.find(ee=>qn(ee.name)===I)||Mt[0],onAnswer:le,run:{...b,lifelines:{fifty:!0,audience:!0}},timeLeft:z,usedLifelines:{fifty:!0,audience:!0},onUseLifeline:()=>{},eliminatedOptions:[],audienceData:null,onBack:()=>t("modes")});default:return s.jsx(xu,{onModeSelect:ge,onNavigateHome:ke})}}const qx=({session:e,mode:t,category:n,difficulty:r,timerConfig:i,onComplete:o,onQuit:l})=>{const[a,c]=d.useState(0),[u,h]=d.useState([]),[f,p]=d.useState([]),[k,b]=d.useState([]),[j,C]=d.useState(!1),[g,m]=d.useState(null),[v,S]=d.useState(Date.now()),[R,z]=d.useState(!1),[N,x]=d.useState(!1),[y,w]=d.useState({}),[E,I]=d.useState({}),[q,Z]=d.useState([]);d.useState(!0);const[F,Q]=d.useState(!1),[Y,M]=d.useState(!1),[_,L]=d.useState(""),[A,P]=d.useState(!1),[D,W]=d.useState(!1),[H,ne]=d.useState(!0),[ue,$]=d.useState(!1),[V,se]=d.useState(0),[G,K]=d.useState(0),[ie,O]=d.useState(0),[B,X]=d.useState(null),[de,te]=d.useState(0),oe=d.useRef(null),T=d.useRef(null),re=t==="practice",pe=u[a],_e=ce=>{try{const le=new Audio(ce);le.volume=.6,le.play()}catch{console.log("Sound not available:",ce)}},he=[{id:1,category:"General Knowledge",difficulty:"medium",prompt:"Which element has the atomic number 1?",options:["Helium","Carbon","Hydrogen","Oxygen"],answerIndex:2,explanation:"Hydrogen is the first element on the periodic table with atomic number 1!"},{id:2,category:"General Knowledge",difficulty:"medium",prompt:"What is the largest ocean on Earth?",options:["Atlantic","Pacific","Indian","Arctic"],answerIndex:1,explanation:"The Pacific Ocean covers about one-third of Earth's surface!"},{id:3,category:"General Knowledge",difficulty:"easy",prompt:"What color do you get when you mix red and yellow?",options:["Purple","Orange","Green","Pink"],answerIndex:1,explanation:"Red and yellow make orange - like a beautiful sunset!"}],xe=e&&e.questions&&Array.isArray(e.questions)&&e.questions.length>0?e.questions:he,ae=xe[a]||xe[0]||he[0],ye=xe.length;d.useEffect(()=>{xe.length>0&&(h(new Array(xe.length).fill(null)),p(new Array(xe.length).fill(!1)),Z(new Array(xe.length).fill(!1)),b(new Array(xe.length).fill((i==null?void 0:i.seconds)||45)))},[xe.length,i==null?void 0:i.seconds]);const qe=()=>{if(R){L("Once per quiz"),setTimeout(()=>L(""),1e3);return}if(pe!==null){L("Already answered"),setTimeout(()=>L(""),1e3);return}if(!ae)return;const le=[0,1,2,3].filter(ge=>ge!==ae.answerIndex).sort(()=>Math.random()-.5).slice(0,2);w({...y,[a]:le}),z(!0)},Xe=()=>{if(N){L("Once per quiz"),setTimeout(()=>L(""),1e3);return}if(pe!==null){L("Already answered"),setTimeout(()=>L(""),1e3);return}if(!ae)return;const ce=ae.answerIndex,le=[0,0,0,0],ge=40+Math.floor(Math.random()*31);le[ce]=ge;let ke=100-ge;const Oe=[0,1,2,3].filter($e=>$e!==ce);for(let $e=0;$e<Oe.length-1;$e++){const ee=Math.min(ke-(Oe.length-1-$e),ke/2),fe=Math.floor(Math.random()*(ee+1));le[Oe[$e]]=fe,ke-=fe}le[Oe[Oe.length-1]]=ke,I({...E,[a]:le}),x(!0)},at=d.useCallback((ce,le)=>{if(!ae||re&&q[a]||y[a]&&y[a].includes(ce))return;const ge=[...u];if(ge[a]=u[a]===ce?null:ce,h(ge),S(Date.now()),ge[a]!==null&&(ne(!1),clearInterval(T.current)),ge[a]===ae.answerIndex){const ke=ie+1;if(O(ke),re){se($e=>$e+1);const Oe=10*ke;K($e=>$e+Oe),_e("/sounds/correct.mp3"),setTimeout(()=>_e("/sounds/coin.mp3"),500),W(!0),setTimeout(()=>W(!1),2e3),X({type:"correct",stars:1,coins:Oe}),setTimeout(()=>X(null),2e3)}}else ge[a]!==null&&(O(0),re&&_e("/sounds/wrong.mp3"));if(ge[a]!==null&&f[a]){const ke=[...f];ke[a]=!1,p(ke)}re&&ge[a]!==null&&(P(!0),Z(ke=>{const Oe=[...ke];return Oe[a]=!0,Oe})),!re&&ge[a]!==null&&(clearTimeout(oe.current),oe.current=setTimeout(()=>{a<ye-1?We():(Q(!0),C(!0))},5e3))},[ae,re,q,a,u,f,ye,ie,y]),ct=()=>{S(Date.now()),a>0&&(clearInterval(T.current),ne(!1),c(ce=>ce-1),P(!1),re&&u[a-1]!==null&&setTimeout(()=>P(!0),100))},We=()=>{if(S(Date.now()),clearInterval(T.current),pe===null){const ce=[...f];ce[a]=!0,p(ce),O(0)}ne(!1),P(!1),a<ye-1?(c(ce=>ce+1),re&&u[a+1]!==null?setTimeout(()=>P(!0),100):setTimeout(()=>ne(!0),100)):Q(!0)},Gt=()=>{S(Date.now());const ce=[...f];ce[a]=!0,p(ce),O(0),We()},Kn=()=>{const ce=xe.reduce((le,ge,ke)=>le+(u[ke]===ge.answerIndex?1:0),0);if(re)o&&o({questions:xe,answers:u,skipped:f,correct:ce,total:ye,mode:t,category:n,difficulty:r,earnedStars:V,earnedCoins:G,finalStreak:ie});else{const le=ce*10;te(le),$(!0),setTimeout(()=>{_e("/sounds/coin.mp3"),W(!0),setTimeout(()=>W(!1),3e3)},1e3)}},ho=()=>{o&&o({questions:xe,answers:u,skipped:f,correct:xe.reduce((ce,le,ge)=>ce+(u[ge]===le.answerIndex?1:0),0),total:ye,mode:t,category:n,difficulty:r,earnedStars:0,earnedCoins:de,finalStreak:ie})};d.useEffect(()=>{if(!(j||g!==null||F||!H||u[a]!==null))return T.current=setInterval(()=>{b(ce=>{const le=[...ce],ge=le[a];return ge<=1?(clearInterval(T.current),a===ye-1?(Date.now()-v>=5e3&&Q(!0),le):(m(a),le)):(le[a]=ge-1,le)})},1e3),()=>clearInterval(T.current)},[j,g,a,F,ye,H,u,v]),d.useEffect(()=>{u[a]===null&&!F&&!g?ne(!0):ne(!1)},[a,u,F,g]);const Ms=ce=>{const le=Math.floor(ce/60),ge=ce%60;return`${le}:${ge.toString().padStart(2,"0")}`},cn=(a+1)/xe.length*100,Jn=u.filter(ce=>ce!==null).length,xo=f.filter(Boolean).length,Lr=k[a]||0,Fs=xe.reduce((ce,le,ge)=>ce+(u[ge]===le.answerIndex?1:0),0);return s.jsxs("div",{className:"h-dvh bg-gray-900 text-white relative flex flex-col",children:[B&&s.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 pointer-events-none",children:s.jsxs("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold animate-bounce shadow-2xl",children:["+",B.coins," Coins!"]})}),D&&s.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none",children:[...Array(8)].map((ce,le)=>s.jsx("div",{className:"absolute text-3xl animate-ping",style:{left:`${-30+Math.random()*60}px`,top:`${-30+Math.random()*60}px`,animationDelay:`${le*150}ms`,animationDuration:"2s"},children:"🪙"},le))}),s.jsxs("div",{className:"sticky top-0 flex items-center justify-between px-4 py-2 bg-gray-900 flex-shrink-0 z-40 border-b border-gray-800 shadow-lg",children:[s.jsxs("button",{onClick:()=>M(!0),className:"bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full flex items-center gap-2 transition-colors text-sm",children:[s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),s.jsx("span",{className:"font-medium",children:"Back"})]}),s.jsx("div",{className:"flex-1"}),s.jsxs("div",{className:"flex items-center gap-2",children:[re&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"bg-yellow-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[s.jsx("span",{className:"text-yellow-400 text-sm",children:"🪙"}),s.jsx("span",{className:"text-yellow-200 font-semibold text-sm",children:G})]}),s.jsxs("div",{className:"bg-orange-600/20 px-2 py-1 rounded-full flex items-center gap-1",children:[s.jsx("span",{className:"text-orange-400 text-sm",children:"🔥"}),s.jsx("span",{className:"text-orange-200 font-semibold text-sm",children:ie})]})]}),s.jsx("div",{className:`px-2 py-1 rounded-full font-mono font-semibold text-sm ${Lr<=10?"bg-red-600/20 text-red-400 animate-pulse":Lr<=30?"bg-yellow-600/20 text-yellow-400":"bg-green-600/20 text-green-400"}`,children:Ms(Lr)})]})]}),s.jsxs("div",{className:"px-4 pb-1 flex-shrink-0 bg-gray-900 relative z-30",children:[s.jsxs("div",{className:"flex justify-between items-center mb-1",children:[s.jsxs("span",{className:"text-xs text-gray-400",children:["Question ",a+1," of ",ye]}),s.jsxs("span",{className:"text-xs text-gray-400",children:[Math.round(cn),"% Complete"]})]}),s.jsx("div",{className:"h-2 bg-gray-700 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500",style:{width:`${cn}%`}})}),s.jsx("div",{className:"flex justify-center gap-1 mt-1",children:Array.from({length:ye}).map((ce,le)=>s.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-all ${le===a?"bg-white scale-125":u[le]!==null?"bg-green-500":f[le]?"bg-yellow-500":"bg-gray-600"}`},le))}),s.jsx("div",{className:"text-center mt-4",children:s.jsx("span",{className:"text-xs text-gray-500",children:ae.category})})]}),s.jsxs("div",{className:"flex-1 px-4 flex flex-col overflow-y-auto pb-36",children:[s.jsxs("div",{className:"relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 mb-8 flex-shrink-0 shadow-2xl shadow-blue-600/20 border border-blue-400/20",children:[s.jsx("div",{className:"absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xl"}),s.jsx("div",{className:"absolute bottom-2 left-2 w-12 h-12 bg-white/5 rounded-full blur-lg"}),s.jsxs("div",{className:"relative text-center",children:[s.jsxs("div",{className:"inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 mb-3",children:["Question ",a+1]}),s.jsx("h2",{className:"text-xl font-bold leading-relaxed text-white tracking-wide",children:ae.prompt}),ae.difficulty&&s.jsx("div",{className:"mt-3 inline-block",children:s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${ae.difficulty==="easy"?"bg-green-500/20 text-green-300":ae.difficulty==="medium"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:ae.difficulty.toUpperCase()})})]})]}),s.jsx("div",{className:"grid grid-cols-1 gap-3 mb-2 flex-shrink-0",children:ae.options.map((ce,le)=>{const ge=pe===le,ke=le===ae.answerIndex,Oe=re&&pe!==null&&A,$e=y[a]&&y[a].includes(le);let ee="p-4 rounded-xl transition-all duration-300 border-2 min-h-[64px] flex items-center ";$e?ee+="bg-gray-700/30 border-gray-600/30 text-gray-500/50 cursor-not-allowed":(ee+="cursor-pointer ",Oe?ge&&ke?ee+="bg-green-600 border-green-500 text-white shadow-lg shadow-green-600/25":ge&&!ke?ee+="bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/25":!ge&&ke?ee+="bg-green-600/20 border-green-500 text-green-300 animate-pulse":ee+="bg-gray-700 border-gray-600 text-gray-400":ge?ee+="bg-gray-600 border-gray-500 text-white":ee+="bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-750 hover:border-gray-600");const fe=["🅰️","🅱️","🅲️","🅳️"];return s.jsx("button",{onClick:Ie=>at(le,Ie),disabled:re&&q[a],className:ee,children:s.jsxs("div",{className:"flex items-center gap-2 w-full",children:[s.jsx("div",{className:"text-lg flex-shrink-0 mr-1",children:fe[le]}),s.jsx("div",{className:"flex-1 text-left font-semibold text-base leading-relaxed",children:ce}),E[a]&&E[a][le]>0&&!$e&&s.jsxs("div",{className:"bg-purple-600/20 px-2 py-1 rounded-full text-xs text-purple-300",children:[E[a][le],"%"]}),Oe&&ge&&ke&&!$e&&s.jsx("div",{className:"text-lg animate-bounce",children:"🎉"}),Oe&&ge&&!ke&&!$e&&s.jsx("div",{className:"text-lg",children:"😔"}),Oe&&!ge&&ke&&!$e&&s.jsx("div",{className:"text-base animate-pulse",children:"✨"})]})},le)})}),re&&A&&pe!==null&&s.jsx("div",{className:"bg-gray-800 rounded-xl p-4 mb-2 mt-4 border border-gray-700 flex-shrink-0",children:s.jsxs("div",{className:"flex gap-3",children:[s.jsx("div",{className:"text-lg flex-shrink-0",children:pe===ae.answerIndex?"🎊":"💡"}),s.jsxs("div",{className:"flex-1",children:[s.jsx("h4",{className:`font-semibold mb-3 text-sm ${pe===ae.answerIndex?"text-green-400":"text-blue-400"}`,children:pe===ae.answerIndex?"Perfect! Well done!":"Good try! Here's why:"}),ae.explanation&&s.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:ae.explanation})]})]})})]}),s.jsxs("div",{className:"fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm p-4 pb-8 z-50",children:[!re&&s.jsxs("div",{className:"flex justify-center gap-2 mb-4",children:[s.jsxs("button",{onClick:qe,disabled:pe!==null,className:`${R?"bg-gray-700/50 text-gray-500/50":"bg-orange-600 hover:bg-orange-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm`,children:[s.jsx("span",{children:"⚡"}),"50:50"]}),s.jsxs("button",{onClick:Xe,disabled:pe!==null,className:`${N?"bg-gray-700/50 text-gray-500/50":"bg-purple-600 hover:bg-purple-700"} disabled:bg-gray-800 px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm`,children:[s.jsx("span",{children:"👥"}),"Ask Friends"]})]}),s.jsxs("div",{className:"flex gap-2 mb-2",children:[s.jsx("button",{onClick:ct,disabled:a===0,className:"flex-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 py-2 rounded-lg font-medium transition-colors text-sm",children:"Previous"}),s.jsx("button",{onClick:Gt,disabled:pe!==null,className:`flex-1 py-2 rounded-lg font-medium transition-colors text-sm ${pe!==null?"bg-gray-600/50 text-gray-400/50 cursor-not-allowed":"bg-yellow-600 hover:bg-yellow-700"}`,children:"Skip"}),s.jsx("button",{onClick:We,className:"flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium transition-colors text-sm",children:a===ye-1?"Finish":"Next"})]}),s.jsx("button",{onClick:()=>Q(!0),className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-2.5 rounded-lg font-medium transition-colors text-sm",children:"Submit"})]}),ue&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Quiz Complete!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Here's how you performed"}),s.jsxs("div",{className:"bg-gray-700/50 rounded-2xl p-4 mb-6 space-y-3",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-gray-300",children:"Questions Attempted:"}),s.jsxs("span",{className:"text-white font-semibold",children:[Jn," / ",ye]})]}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-gray-300",children:"Correct Answers:"}),s.jsx("span",{className:"text-green-400 font-semibold",children:Fs})]}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-gray-300",children:"Accuracy:"}),s.jsxs("span",{className:"text-blue-400 font-semibold",children:[Jn>0?Math.round(Fs/Jn*100):0,"%"]})]}),s.jsx("div",{className:"border-t border-gray-600 pt-3 mt-3",children:s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"text-yellow-300 flex items-center gap-1",children:"🪙 Coins Earned:"}),s.jsx("span",{className:"text-yellow-400 font-bold text-lg",children:de})]})})]}),s.jsx("button",{onClick:ho,className:"w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 py-3 rounded-xl font-medium transition-colors",children:"Continue"})]})}),Y&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🤔"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Leave Quiz?"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Your progress will be lost"}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>M(!1),className:"flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:"Stay"}),s.jsx("button",{onClick:l,className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Leave"})]})]})}),F&&!ue&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4",children:"🏆"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Ready to finish?"}),s.jsxs("p",{className:"text-gray-400 mb-4",children:[Jn," of ",ye," answered • ",xo," skipped"]}),re&&s.jsx("div",{className:"bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-4 rounded-2xl mb-6 border border-yellow-600/30",children:s.jsxs("div",{className:"flex justify-center gap-6",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-1",children:"⭐"}),s.jsx("div",{className:"text-yellow-400 font-bold",children:V}),s.jsx("div",{className:"text-xs text-gray-400",children:"Stars"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-2xl mb-1",children:"🪙"}),s.jsx("div",{className:"text-yellow-400 font-bold",children:G}),s.jsx("div",{className:"text-xs text-gray-400",children:"Coins"})]})]})}),s.jsxs("div",{className:"flex gap-3",children:[s.jsx("button",{onClick:()=>{Q(!1),m(null),S(Date.now())},className:"flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-medium",children:"Back"}),s.jsx("button",{onClick:ce=>{ce.preventDefault(),ce.stopPropagation(),console.log("Submit button clicked"),Kn()},className:"flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-medium",children:"Submit"})]})]})}),g===a&&!F&&s.jsx("div",{className:"fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4",children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 max-w-sm w-full text-center border border-gray-700",children:[s.jsx("div",{className:"text-4xl mb-4 animate-pulse",children:"⏰"}),s.jsx("h3",{className:"text-xl font-bold mb-2",children:"Time's Up!"}),s.jsx("p",{className:"text-gray-400 mb-6",children:"Let's move to the next question"}),s.jsx("button",{onClick:()=>{m(null),S(Date.now()),a<xe.length-1?We():Q(!0)},className:"w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium",children:a<xe.length-1?"Continue":"See Results"})]})}),_&&s.jsx("div",{className:"fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-medium animate-bounce z-50",children:_})]})},Wr=[{name:"GK",slug:"general-knowledge",questions:50,icon:"🧠",color:"#FF6B6B",gradient:"from-red-500 to-pink-500"},{name:"Science",slug:"science",questions:45,icon:"🧪",color:"#4ECDC4",gradient:"from-cyan-500 to-teal-500"},{name:"Fun Facts",slug:"fun-facts",questions:30,icon:"🎉",color:"#FFD93D",gradient:"from-yellow-400 to-orange-500"},{name:"History",slug:"history",questions:42,icon:"🏺",color:"#A8E6CF",gradient:"from-green-400 to-emerald-500"},{name:"AI & Tech",slug:"artificial-intelligence",questions:28,icon:"🤖",color:"#C7B8FF",gradient:"from-purple-400 to-indigo-500"},{name:"Geography",slug:"geography",questions:38,icon:"🗺️",color:"#FACC15",gradient:"from-yellow-400 to-amber-500"},{name:"Computer",slug:"computer",questions:34,icon:"💻",color:"#3B82F6",gradient:"from-blue-400 to-blue-600"},{name:"Aptitude",slug:"aptitude",questions:36,icon:"📐",color:"#EC4899",gradient:"from-pink-500 to-rose-500"},{name:"Iconic Figures",slug:"iconic-figures",questions:26,icon:"🌟",color:"#8B5CF6",gradient:"from-purple-500 to-violet-600"}],Wx=()=>s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),Qx=()=>s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),Hx=()=>s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Yx=()=>s.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),Vx=()=>s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Gx=()=>s.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Xx=({results:e={correct:8,total:10,category:"general-knowledge",mode:"quiz",elapsedMs:125e3,questions:[]},onRetake:t=()=>{},onReview:n=()=>{},onNavigate:r=(c,u)=>{},isRetake:i=!1,isPractice:o=!1,player:l={level:1,coins:0,combo:0,energy:5},categories:a=[]})=>{const c=d.useRef(null),[u,h]=d.useState(!1),[f,p]=d.useState(0),[k,b]=d.useState(!1),{correct:j,total:C,category:g,categorySlug:m,difficulty:v,mode:S,elapsedMs:R}=e,z=C?Math.round(j/C*100):0,N=z===100,x=z>=80,y=Math.floor(R/1e3),w=C>0?Math.floor(y/C):0,E=Wr.find(_=>_.slug===g)||Wr[0],q=(()=>N?{emoji:"🏆",text:"Perfect!",color:"text-yellow-400"}:z>=90?{emoji:"🌟",text:"Excellent!",color:"text-purple-400"}:z>=80?{emoji:"✨",text:"Great job!",color:"text-blue-400"}:z>=70?{emoji:"👍",text:"Good effort!",color:"text-green-400"}:z>=60?{emoji:"💪",text:"Keep going!",color:"text-orange-400"}:{emoji:"📚",text:"Keep practicing!",color:"text-gray-400"})();d.useEffect(()=>{(N||x)&&(h(!0),setTimeout(()=>h(!1),3e3));let _=0;const L=j/20,A=setInterval(()=>{_+=L,_>=j?(p(j),clearInterval(A)):p(Math.floor(_))},50);return()=>clearInterval(A)},[j,N,x]);const Z=o?0:Math.round(j*5*(N?1.5:x?1.2:1)),F=[{score:7,total:10},{score:6,total:10},{score:8,total:10},{score:9,total:10},{score:j,total:C}],Q=()=>{try{const _=localStorage.getItem("qp_recent");if(_)return JSON.parse(_).slice(0,10).map(A=>A.slug||A.cat).filter(A=>A&&A!==e.categorySlug)}catch(_){console.error("Error reading recent categories:",_)}return[]},Y=()=>{const _=m||g,L=v||"medium",A=Q(),P=(a||Wr||[]).filter(H=>H.slug!==_&&!A.slice(0,3).includes(H.slug)),W=(()=>{if(P.length===0){const H=(a||Wr||[]).filter(ne=>ne.slug!==_);return H[Math.floor(Math.random()*H.length)]||(a||Wr)[0]}return P[Math.floor(Math.random()*P.length)]})();if(z<60)return o?[{icon:"🎯",title:"Try Fewer Questions",desc:"Start with just 5",color:"from-blue-500 to-cyan-500",action:()=>r(`/quiz/${_}`,{mode:"practice",difficulty:"easy",count:5,timer:{type:"off",seconds:0}})},{icon:W.icon,title:W.name,desc:"Fresh start with new topic",color:W.gradient,action:()=>r(`/quiz/${W.slug}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:"📖",title:"Review Mistakes",desc:"Learn from errors",color:"from-purple-500 to-pink-500",action:()=>n()}]:[{icon:"📚",title:"Practice Mode",desc:"No timer, learn at your pace",color:"from-green-500 to-teal-500",action:()=>r(`/quiz/${_}`,{mode:"practice",difficulty:"easy",count:10,timer:{type:"off",seconds:0}})},{icon:L!=="easy"?"🎯":"🔄",title:L!=="easy"?"Easy Mode":"Try Again",desc:L!=="easy"?"Build confidence":"You can do this!",color:"from-blue-500 to-cyan-500",action:()=>L!=="easy"?r(`/quiz/${_}`,{mode:"quiz",difficulty:"easy",count:5,timer:{type:"per_q",seconds:60}}):t()},{icon:W.icon,title:W.name,desc:"Try something different",color:W.gradient,action:()=>r(`/quiz/${W.slug}`,{mode:"quiz",difficulty:"easy",count:10,timer:{type:"per_q",seconds:45}})}];if(z>=80)return L==="hard"&&z>=90?[{icon:"⚡",title:"Lightning Round",desc:"20 questions, 10s each",color:"from-yellow-500 to-red-500",action:()=>r(`/quiz/${_}`,{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:10}})},{icon:W.icon,title:`${W.name} Challenge`,desc:"Hard mode, new topic",color:W.gradient,action:()=>r(`/quiz/${W.slug}`,{mode:"quiz",difficulty:"hard",count:15,timer:{type:"per_q",seconds:30}})},{icon:"🎲",title:"Mixed Categories",desc:"Test all your knowledge",color:"from-purple-500 to-indigo-500",action:()=>r("/quiz/mixed",{mode:"quiz",difficulty:"hard",count:20,timer:{type:"per_q",seconds:30}})}]:[{icon:L==="hard"?"🔥":"🎯",title:L==="hard"?"Perfect Score Challenge":"Hard Mode",desc:L==="hard"?"Can you get 100%?":"Level up your skills",color:"from-red-500 to-orange-500",action:()=>r(`/quiz/${_}`,{mode:"quiz",difficulty:"hard",count:L==="hard"?10:20,timer:{type:"per_q",seconds:30}})},{icon:W.icon,title:W.name,desc:"Master new topics",color:W.gradient,action:()=>r(`/quiz/${W.slug}`,{mode:"quiz",difficulty:L,count:10,timer:{type:"per_q",seconds:45}})},{icon:"⚡",title:"Speed Challenge",desc:"10 questions, 15s each",color:"from-purple-500 to-pink-500",action:()=>r(`/quiz/${_}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:15}})}];{const H=z<70;return[{icon:H?"📚":"🎯",title:H?"Practice More":"Try Again",desc:H?"Improve accuracy":"Beat your score",color:H?"from-green-500 to-teal-500":"from-blue-500 to-purple-500",action:H?()=>r(`/quiz/${_}`,{mode:"practice",difficulty:L,count:10,timer:{type:"off",seconds:0}}):()=>t()},{icon:W.icon,title:W.name,desc:"Explore new topics",color:W.gradient,action:()=>r(`/quiz/${W.slug}`,{mode:"quiz",difficulty:"medium",count:10,timer:{type:"per_q",seconds:45}})},{icon:L==="easy"?"⬆️":"💪",title:L==="easy"?"Medium Difficulty":"More Questions",desc:L==="easy"?"Ready for more?":"Test endurance",color:"from-indigo-500 to-purple-500",action:()=>r(`/quiz/${_}`,{mode:"quiz",difficulty:L==="easy"?"medium":L,count:L==="easy"?10:20,timer:{type:"per_q",seconds:45}})}]}},M=rt.useMemo(()=>Y(),[z,o,e.categorySlug,e.difficulty]);return s.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-4",children:[s.jsx("style",{children:`
        @keyframes coinRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}),u&&s.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 flex items-center justify-center",children:s.jsx("div",{className:"text-8xl animate-bounce",children:N?"🎉":"⭐"})}),s.jsxs("div",{className:"flex justify-between items-center mb-6",children:[s.jsx("button",{onClick:()=>r("/"),className:"p-2 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all",children:s.jsx(Qx,{})}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("div",{className:"px-3 py-1.5 rounded-full bg-white/10 backdrop-blur text-sm font-medium",children:["Level ",l.level]}),s.jsxs("button",{ref:c,onClick:()=>b(!0),className:"px-3 py-1.5 rounded-full bg-yellow-500/20 backdrop-blur text-sm font-medium text-yellow-300 hover:bg-yellow-500/30 transition-all cursor-pointer",children:[l.coins," 🪙"]})]})]}),s.jsxs("div",{className:"relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 mb-6",children:[s.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"}),s.jsxs("div",{className:"relative text-center",children:[s.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-4 ${q.color}`,children:[s.jsx("span",{className:"text-2xl",children:q.emoji}),s.jsx("span",{className:"font-semibold",children:q.text})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"text-7xl font-bold mb-2 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",children:[f,"/",C]}),s.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-white/60",children:[s.jsx("span",{className:"text-xl",children:E.icon}),s.jsx("span",{children:E.name})]})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 max-w-md mx-auto",children:[s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"text-3xl font-bold",children:[z,"%"]}),s.jsx("div",{className:"text-xs text-white/60",children:"Accuracy"})]}),s.jsxs("div",{className:"text-center",children:[s.jsxs("div",{className:"text-3xl font-bold",children:[w,"s"]}),s.jsx("div",{className:"text-xs text-white/60",children:"Avg Speed"})]}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-3xl font-bold text-yellow-400",children:o?"—":`+${Z}`}),s.jsx("div",{className:"text-xs text-white/60",children:"Coins"})]})]})]})]}),s.jsxs("div",{className:"rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 mb-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(Vx,{}),s.jsx("span",{className:"text-sm font-medium",children:"Your Progress"})]}),l.combo>0&&s.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs",children:[s.jsx(Gx,{}),l.combo," streak"]})]}),s.jsx("div",{className:"flex items-end gap-1 h-12 mb-2",children:F.map((_,L)=>s.jsx("div",{className:`flex-1 rounded-t transition-all ${L===F.length-1?"bg-gradient-to-t from-purple-500 to-purple-400":"bg-white/20"}`,style:{height:`${_.score/_.total*100}%`,minHeight:"4px"}},L))}),s.jsx("div",{className:"text-xs text-white/40 text-center",children:"Last 5 quizzes"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[s.jsxs("button",{onClick:n,className:"relative overflow-hidden group rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 transition-all hover:scale-105 active:scale-95",children:[s.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"}),s.jsxs("div",{className:"relative flex items-center justify-between",children:[s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-semibold",children:"Review"}),s.jsx("div",{className:"text-xs opacity-80",children:"Check answers"})]}),s.jsx(Yx,{})]})]}),s.jsx("button",{onClick:t,className:"relative overflow-hidden group rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 transition-all hover:scale-105 active:scale-95 hover:bg-white/15",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-semibold",children:"Try Again"}),s.jsx("div",{className:"text-xs opacity-60",children:"New questions"})]}),s.jsx(Hx,{})]})})]}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"text-sm font-medium text-white/60 px-1",children:"Recommended for you"}),M.map((_,L)=>s.jsx("button",{onClick:_.action,className:"w-full group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`p-2 rounded-xl bg-gradient-to-r ${_.color} opacity-20 group-hover:opacity-30 transition-opacity`,children:s.jsx("span",{className:"text-xl",children:_.icon})}),s.jsxs("div",{className:"text-left",children:[s.jsx("div",{className:"font-medium text-sm",children:_.title}),s.jsx("div",{className:"text-xs text-white/40",children:_.desc})]})]}),s.jsx(Wx,{})]})},L))]}),s.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:s.jsx("button",{onClick:()=>r("/profile/history",{replace:!0}),className:"w-full text-center text-sm text-white/40 hover:text-white/60 transition-colors",children:"View all history →"})}),k&&s.jsx("div",{className:"fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4",onClick:_=>{_.target===_.currentTarget&&b(!1)},children:s.jsxs("div",{className:"bg-gray-800 rounded-3xl p-6 w-full max-w-md border border-gray-700 relative overflow-hidden",onClick:_=>_.stopPropagation(),children:[s.jsx("div",{className:"absolute inset-0 opacity-10",children:s.jsx("div",{className:"h-full bg-gradient-to-br from-yellow-400 to-orange-500"})}),s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-5xl",style:{animation:"coinRotate 2s linear infinite"},children:"🪙"}),s.jsxs("div",{children:[s.jsx("h3",{className:"text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:"Your Treasure"}),s.jsxs("p",{className:"text-3xl font-bold text-white mt-1",children:[l.coins," Coins"]})]})]}),s.jsx("button",{onClick:()=>b(!1),className:"w-8 h-8 rounded-lg bg-white/5 border border-gray-600 grid place-items-center hover:bg-white/10 transition",children:"✕"})]}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h4",{className:"text-sm font-medium text-gray-400 mb-3",children:"Ways to Earn"}),s.jsxs("div",{className:"space-y-3",children:[s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"✅"}),"Complete Quizzes"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"+5 coins per correct answer"})]}),s.jsx("div",{className:"text-green-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎯"}),"Daily Challenge"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Complete daily for bonus"})]}),s.jsx("div",{className:"text-blue-400 font-bold",children:"+5"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🎰"}),"Spin & Play"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Test your luck!"})]}),s.jsx("div",{className:"text-purple-400 font-bold",children:"+50"})]})}),s.jsx("div",{className:"p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 hover:scale-[1.02] transition-transform",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"font-medium flex items-center gap-2",children:[s.jsx("span",{className:"text-2xl",children:"🏆"}),"Achievements"]}),s.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"Unlock special rewards"})]}),s.jsx("div",{className:"text-orange-400 font-bold",children:"+???"})]})})]})]}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-2",children:[s.jsx("span",{children:"Next reward"}),s.jsxs("span",{children:[100-l.coins%100," coins to go"]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all",style:{width:`${l.coins%100}%`}})})]}),s.jsx("button",{onClick:()=>{b(!1),r("/play")},className:"w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg",children:"Start Earning Now! 🚀"})]})]})})]})},Kx=({questions:e,answers:t,skipped:n,onBack:r,onRetake:i,fromHistory:o=!1})=>{const l=ht(),a=()=>{o?l("/profile/history",{replace:!0}):r?r():l(-1)},c=e.reduce((f,p,k)=>f+(t[k]===p.answerIndex?1:0),0),u=(n==null?void 0:n.filter(Boolean).length)||0,h=e.length-c-u;return s.jsxs("div",{className:"mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-base-border bg-white/5",onClick:a,children:"← Back"}),s.jsx("h2",{className:"text-lg font-semibold",children:"Review Answers"}),s.jsx("div",{className:"w-16"})," "]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[s.jsxs("div",{className:"rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-green-400",children:"Correct"}),s.jsx("div",{className:"text-lg font-bold text-green-400",children:c})]}),s.jsxs("div",{className:"rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-red-400",children:"Incorrect"}),s.jsx("div",{className:"text-lg font-bold text-red-400",children:h})]}),s.jsxs("div",{className:"rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center",children:[s.jsx("div",{className:"text-xs text-amber-400",children:"Skipped"}),s.jsx("div",{className:"text-lg font-bold text-amber-400",children:u})]})]}),s.jsx("ol",{className:"space-y-4",children:e.map((f,p)=>{const k=t[p],b=!k&&k!==0,j=k===f.answerIndex;return s.jsxs("li",{className:"rounded-2xl border border-base-border bg-white/5 p-4 md:p-5",children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"text-sm md:text-base font-medium",children:["Q",p+1,". ",f.prompt]}),f.category&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Category: ",f.category," • Difficulty: ",f.difficulty||"Medium"]})]}),s.jsx("div",{className:"ml-2",children:b?s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400",children:"Skipped"}):j?s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-green-600/20 text-green-400",children:"✓ Correct"}):s.jsx("span",{className:"px-2 py-1 rounded text-xs bg-red-600/20 text-red-400",children:"✗ Wrong"})})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:f.options.map((C,g)=>{const m=k===g,v=g===f.answerIndex;let S="w-full text-left px-3 py-2 rounded-xl border transition-all ";return v?S+="bg-green-600/20 border-green-500/50 text-green-300":m&&!v?S+="bg-red-600/20 border-red-500/50 text-red-300":S+="bg-base-bg/40 border-base-border text-base-muted",s.jsxs("div",{className:S,children:[s.jsxs("span",{className:"font-semibold mr-2",children:[["A","B","C","D"][g],"."]}),C,v&&s.jsx("span",{className:"ml-2 text-green-400",children:"✓"}),m&&!v&&s.jsx("span",{className:"ml-2 text-red-400",children:"✗"})]},g)})}),f.explanation&&s.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-white/5 border border-base-border",children:[s.jsx("div",{className:"text-xs font-semibold text-brand-blue mb-1",children:"Explanation:"}),s.jsx("div",{className:"text-sm text-base-muted",children:f.explanation})]})]},f.id||p)})}),s.jsxs("div",{className:"mt-6 flex gap-2 justify-center sticky bottom-4",children:[s.jsx("button",{className:"px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur",onClick:a,children:"Back to Results"}),i&&s.jsx("button",{className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium",onClick:i,children:"Retake Quiz"})]})]})},Jx="qp_resume",yu="qp_mistakes",bu="qp_stats",wu="qp_lastset",ju="qp_recent",ku="qp_review_snapshot",Zx=50,Qr=(e="")=>e.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase()),ji=(e="")=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-"),eg=(e,t)=>e.slice().sort(()=>Math.random()-.5).slice(0,t),u0=e=>{const t=e.slice();for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t},tg=(e,t,n)=>Math.max(t,Math.min(n,e)),Hr=(e,t)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}};async function ng(){const e="/data/quiz_questions_bank.csv",t=await fetch(e);if(!t.ok)throw new Error(`CSV not found at ${e}`);const n=await t.text(),{data:r}=po.parse(n,{header:!0,skipEmptyLines:!0,transformHeader:o=>String(o).trim().toLowerCase()}),i={a:0,b:1,c:2,d:3};return r.map((o,l)=>{var p;const a=[o.option1,o.option2,o.option3,o.option4].map(k=>(k??"").trim());if(a.some(k=>!k))return null;let c=-1;const u=String(o.answer??"").trim();if(i[u.toLowerCase()]!==void 0)c=i[u.toLowerCase()];else{const k=a.findIndex(b=>b.toLowerCase()===u.toLowerCase());c=k>=0?k:0}const h=String(o.category??o.subject??"General Knowledge").trim(),f=String(o.difficulty??"medium").toLowerCase().trim();return{id:((p=o.id)==null?void 0:p.trim())||`q_${l}`,category:h,difficulty:f,prompt:String(o.question??"").trim(),options:a,answerIndex:c,explanation:String(o.explanation??"").trim()}}).filter(Boolean)}function rg(e,{categorySlug:t,difficulty:n,count:r}){console.log("=== BUILD SESSION DEBUG ==="),console.log("categorySlug:",t),console.log("difficulty:",n),console.log("count:",r),console.log("Total questions available:",e.length);const o=t==="mixed"?()=>!0:h=>ji(h.category)===t,l=n?h=>(h.difficulty||"medium")===n:()=>!0,a=e.filter(h=>o(h)&&l(h));if(console.log("Filtered pool size:",a.length),console.log("Sample categories from all questions:",[...new Set(e.slice(0,10).map(h=>`"${h.category}" -> "${ji(h.category)}"`))]),a.length===0)return console.error("No questions match the filter criteria!"),console.log("Available categories:",[...new Set(e.map(h=>ji(h.category)))]),{questions:[],poolSize:0};const u=eg(a,Math.min(r,a.length)).map(h=>{const f=u0([0,1,2,3]),p=f.map(b=>h.options[b]),k=f.indexOf(h.answerIndex);return{...h,options:p,answerIndex:k}});return console.log("Final questions:",u.length),{questions:u,poolSize:a.length}}function sg(){const e=ht(),{category:t}=wh(),n=$t(),{energy:r,useEnergy:i,player:o}=p0(),l=new URLSearchParams(n.search),a=l.get("review")==="1",c=l.get("retake")==="1",u=n.state||{},h=u.mode||"quiz",f=String(u.difficulty||"medium").toLowerCase(),p=tg(Number(u.count||10),1,50),k=u.timer||{type:"per_q",seconds:45};u.resume,u.daily,u.source;const b=c||!!u.retake,j=!!u.fromHistory,C=h==="practice";console.log("Quiz Component - Mode Detection:",{routerState:u,mode:h,isPractice:C,location:n.pathname,state:n.state});const[g,m]=d.useState([]),[v,S]=d.useState(!0),[R,z]=d.useState(""),[N,x]=d.useState({questions:[]}),[y,w]=d.useState("quiz"),[E,I]=d.useState(null),[q,Z]=d.useState(null),[F,Q]=d.useState(0);d.useEffect(()=>{let P=!0;return(async()=>{try{const D=await ng();if(!P)return;m(D)}catch(D){console.error(D),z("Failed to load questions. Check /public/data/quiz_questions_bank.csv")}finally{S(!1)}})(),()=>{P=!1}},[]),d.useEffect(()=>{if(v||R||a||g.length===0)return;console.log("=== SESSION INIT ==="),console.log("Category:",t),console.log("Mode:",h),console.log("Difficulty:",f),console.log("Count:",p);const P=rg(g,{categorySlug:t,difficulty:f,count:p});if(P.questions.length===0){console.error("No questions found!"),console.log("Looking for category:",t),console.log("Available categories (first 10):",[...new Set(g.map(D=>ji(D.category)))].slice(0,10)),z(`No questions found for "${Qr(t)}" with difficulty "${f}"`);return}console.log("Session built with",P.questions.length,"questions"),x(P),Z(Date.now()),Q(0),w("quiz")},[g,t,h,f,p,n.state,n.search]),d.useEffect(()=>{if(y!=="quiz"||!q)return;const P=setInterval(()=>{Q(Date.now()-q)},1e3);return()=>clearInterval(P)},[y,q]);const Y=d.useCallback(P=>{if(console.log("Quiz completed - Mode:",h,"isPractice:",C,"Results:",P),!P||!P.questions){console.error("Invalid results object:",P);return}const D=P.questions.filter((H,ne)=>P.answers[ne]!==null&&P.answers[ne]!==H.answerIndex).map(H=>H.id);try{const H=Hr(yu,[]),ne=Array.from(new Set([...D,...H]));localStorage.setItem(yu,JSON.stringify(ne))}catch(H){console.error("Error saving mistakes:",H)}try{const H=Hr(bu,{sessions:[]});H.sessions.push({cat:Qr(t),mode:C?"practice":"quiz",total:P.total,correct:P.correct,skipped:P.skipped.filter(Boolean).length,ms:F,timestamp:Date.now(),earnedXP:C?0:P.correct*10,earnedCoins:C?0:P.correct*5}),localStorage.setItem(bu,JSON.stringify(H))}catch(H){console.error("Error saving stats:",H)}const W={ts:Date.now(),slug:t,categoryLabel:Qr(t),mode:C?"practice":"quiz",difficulty:f,total:P.total,timer:C?null:k,ms:F,attempted:P.answers.filter(H=>H!==null).length,correct:P.correct,questions:P.questions,answers:P.answers,skipped:P.skipped,isPractice:C};try{localStorage.setItem(wu,JSON.stringify(W)),localStorage.setItem(ku,JSON.stringify({questions:P.questions,answers:P.answers,skipped:P.skipped}));const H=Hr(ju,[]),ue=[{id:W.ts,ts:W.ts,cat:W.categoryLabel,slug:t,mode:C?"Practice":"Quiz",total:P.total,correct:P.correct,ms:F,snapshot:W},...H].slice(0,Zx);localStorage.setItem(ju,JSON.stringify(ue))}catch(H){console.error("Error saving snapshot:",H)}localStorage.removeItem(Jx),I({...P,category:Qr(t),categorySlug:t,difficulty:f,mode:C?"practice":"quiz",elapsedMs:F,isPractice:C,hasTimer:!C,earnedXP:C?0:P.correct*10,earnedCoins:C?0:P.correct*5}),w("results")},[t,h,k,F,C]),M=d.useCallback(()=>{j?e("/profile/history",{replace:!0,state:null}):e("/")},[j,e]),_=d.useCallback(()=>{console.log("Retake requested - Mode:",h,"isPractice:",C);const P=Hr(wu,null);if(!P||P.slug!==t){e(`/quiz/${t}?r=${Date.now()}`,{replace:!0,state:{mode:C?"practice":"quiz",difficulty:f,count:p,timer:C?null:k,retake:!0}});return}const D=P.questions.map(W=>{const H=u0([0,1,2,3]);return{...W,options:H.map(ne=>W.options[ne]),answerIndex:H.indexOf(W.answerIndex)}});x({questions:D,poolSize:D.length}),Z(Date.now()),Q(0),w("quiz"),window.scrollTo(0,0)},[t,h,f,p,k,e,C]),L=d.useCallback((P=null)=>{if(P)I(P);else if(!E){const D=Hr(ku,null);D&&I({questions:D.questions||[],answers:D.answers||[],skipped:D.skipped||[]})}w("review")},[E]),A=d.useCallback(()=>{j?e("/profile/history",{replace:!0}):w("results")},[j,e]);return v?s.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:s.jsx("div",{className:"text-sm text-base-muted",children:"Loading questions…"})}):R?s.jsx("div",{className:"fixed inset-0 bg-inherit text-white flex items-center justify-center",children:s.jsx("div",{className:"text-sm text-red-400",children:R})}):(console.log("Render - Current view:",y,"Session questions:",N.questions.length,"Mode:",h,"isPractice:",C),s.jsx("div",{className:"fixed inset-0 bg-inherit text-white z-0 overflow-x-hidden max-w-[100vw]",children:s.jsxs("div",{className:"h-full overflow-y-auto overscroll-y-none overflow-x-hidden touch-pan-y px-0 pt-[max(env(safe-area-inset-top),72px)] pb-[clamp(12px,env(safe-area-inset-bottom),20px)]",children:[y==="quiz"&&N.questions.length>0&&s.jsx(qx,{session:N,mode:C?"practice":"quiz",category:Qr(t),difficulty:f,timerConfig:C?null:k,onComplete:Y,onQuit:M,isPractice:C}),y==="results"&&E&&s.jsx(Xx,{results:E,onRetake:_,onReview:()=>L(E),isRetake:b,isPractice:C,player:o,categories:l0,onNavigate:(P,D)=>{D!=null&&D.replace?e(P,{replace:!0,state:D}):e(P,{state:D})}}),y==="review"&&E&&s.jsx(Kx,{questions:E.questions||[],answers:E.answers||[],skipped:E.skipped||[],onBack:A,onRetake:_,fromHistory:j,isPractice:C})]})}))}const mn=[{label:"General Knowledge",slug:"general-knowledge",color:"#7C3AED",soon:!1},{label:"Current Affairs",slug:"current-affairs",color:"#2563EB",soon:!1},{label:"Fun Facts",slug:"fun-facts",color:"#EF4444",soon:!1},{label:"Science",slug:"science",color:"#10B981",soon:!1},{label:"History",slug:"history",color:"#F59E0B",soon:!0},{label:"Geography",slug:"geography",color:"#FACC15",soon:!0},{label:"Cat 1",slug:"cat-1",color:"#06B6D4",soon:!0},{label:"Cat 2",slug:"cat-2",color:"#D946EF",soon:!0}],Fn=360/mn.length,ig=42,Yo=3e3,Nu=10,Su=260,og="cubic-bezier(.15,.7,.1,1)",lg="cubic-bezier(.2,.7,.2,1)",fn=5,ag=5,cg=(e="")=>String(e).toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-");function ug({muted:e=!1,size:t=18}){return s.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M3 9h4l5-4v14l-5-4H3z",fill:"currentColor"}),!e&&s.jsxs(s.Fragment,{children:[s.jsx("path",{d:"M16 8c1.5 1.5 1.5 6 0 7.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),s.jsx("path",{d:"M19 6c3 3 3 10 0 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),e&&s.jsx("line",{x1:"3",y1:"21",x2:"21",y2:"3",stroke:"#EF4444",strokeWidth:"2.5",strokeLinecap:"round"})]})}function dg({q:e,locked:t,onPick:n,result:r}){if(!e)return null;const i=[e.option1,e.option2,e.option3,e.option4];return s.jsxs("div",{className:"mt-5 rounded-3xl bg-white/5 border border-white/10 p-4",children:[s.jsx("div",{className:"text-sm text-base-muted mb-1",children:"Quick question"}),s.jsx("div",{className:"text-xl font-semibold mb-4",children:e.question}),i.map((o,l)=>{const a=r&&o===e.answer,c=r&&r.pick===o&&o!==e.answer;return s.jsx("button",{disabled:t||!!r,onClick:()=>n(o),className:["w-full text-left px-4 py-2 rounded-xl mb-2 border transition",!r&&!t?"bg-white/5 hover:bg-white/10 border-white/10":"bg-white/5 border-white/10",a?"bg-green-600/20 border-green-400/60 text-green-200":"",c?"bg-red-600/20 border-red-400/60 text-red-200":""].join(" "),children:o},l)}),r&&s.jsxs("div",{className:"mt-3 text-sm",children:[r.correct?s.jsx("span",{className:"text-green-400 font-medium",children:"✅ Correct!"}):s.jsxs("span",{className:"text-red-400 font-medium",children:["❌ Not quite. Answer: ",s.jsx("b",{children:e.answer})]}),e.explanation&&s.jsxs("div",{className:"text-xs text-base-muted mt-1",children:["Tip: ",e.explanation]})]})]})}function fg(){const e=ht(),[t]=fr("/sounds/correct.mp3",{volume:.7}),[n]=fr("/sounds/wrong.mp3",{volume:.7}),[r,i]=d.useState(()=>[{name:"Player 1",color:"#60A5FA",scores:Array(fn).fill(null)},{name:"Player 2",color:"#F472B6",scores:Array(fn).fill(null)}]),[o,l]=d.useState(0),[a,c]=d.useState(1),u=r.reduce(($,V)=>$+V.scores.reduce((se,G)=>se+(G??0),0),0),[h,f]=d.useState(!0),p=d.useRef(null);d.useEffect(()=>{const $=new Audio("/sounds/spin.mp3");return $.loop=!0,$.volume=.7,p.current=$,()=>{try{$.pause(),$.src=""}catch{}}},[]);const k=()=>{if(h&&p.current)try{p.current.currentTime=0,p.current.play()}catch{}},b=()=>{if(p.current)try{p.current.pause(),p.current.currentTime=0}catch{}},[j,C]=d.useState(0),[g,m]=d.useState("none"),[v,S]=d.useState(!1),[R,z]=d.useState(null),[N,x]=d.useState(null),y=d.useMemo(()=>typeof window<"u"?window.matchMedia("(prefers-reduced-motion: reduce)").matches:!1,[]),[w,E]=d.useState([]);d.useEffect(()=>{(async()=>{try{const $=await fetch("/data/quiz_questions_bank.csv").then(K=>K.text()),{data:V}=po.parse($,{header:!0,skipEmptyLines:!0,transformHeader:K=>String(K).trim().toLowerCase()}),se={a:0,b:1,c:2,d:3},G=V.map((K,ie)=>{var oe;const O=(K.question??"").trim();if(!O)return null;const B=[K.option1,K.option2,K.option3,K.option4].map(T=>String(T??"").trim());if(B.some(T=>!T))return null;let X=String(K.answer??"").trim(),de=se[X.toLowerCase()];if(de===void 0){const T=B.findIndex(re=>re.toLowerCase()===X.toLowerCase());de=T>=0?T:0}const te=B[de];return{id:((oe=K.id)==null?void 0:oe.trim())||`ps_${ie}`,question:O,option1:B[0],option2:B[1],option3:B[2],option4:B[3],answer:te,explanation:String(K.explanation??"").trim(),catSlug:cg(K.category??K.subject??"general knowledge"),difficulty:String(K.difficulty??"medium").toLowerCase().trim()}}).filter(Boolean);E(G)}catch{E([])}})()},[]);const[I,q]=d.useState(null),[Z,F]=d.useState(null),[Q,Y]=d.useState(!1),M=$=>($%360+360)%360,_=$=>M($),L=a>fn;function A(){if(r.length>=4)return;const $=["#60A5FA","#F472B6","#F59E0B","#34D399","#F87171","#A78BFA"],V=$[(r.length*2+1)%$.length];i(se=>[...se,{name:`Player ${se.length+1}`,color:V,scores:Array(fn).fill(null)}])}function P(){r.length<=2||(i($=>$.slice(0,-1)),l($=>Math.min($,r.length-2)))}function D($){i(V=>V.map((se,G)=>G===o?{...se,scores:se.scores.map((K,ie)=>ie===a-1?$:K)}:se))}function W(){if(v||L)return;z(null),x(null),q(null),F(null),S(!0),k();const $=Math.floor(Math.random()*mn.length),V=mn[$],se=Fn*.28,G=(Math.random()*2-1)*se,K=M(j),ie=180,B=$*Fn+Fn/2+G;let X=_(B-K-ie);const de=ig*360+X,te=j+de+Nu;m(`transform ${y?800:Yo}ms ${og}`),C(te);try{navigator.vibrate&&!y&&navigator.vibrate([10,40,10])}catch{}setTimeout(()=>{m(`transform ${y?160:Su}ms ${lg}`),C(oe=>oe-Nu)},y?800:Yo),setTimeout(()=>{if(b(),S(!1),z($),x(V.color),V.soon)return;const oe=w.filter(re=>re.catSlug===V.slug&&re.difficulty==="easy"),T=oe.length?oe:w.filter(re=>re.catSlug===V.slug);if(T.length){const re=T[Math.floor(Math.random()*T.length)];q(re)}else q({question:"No question found for this category yet. Try re-spinning!",option1:"Okay",option2:"Okay",option3:"Okay",option4:"Okay",answer:"Okay",explanation:""})},(y?800:Yo)+(y?160:Su)+40)}function H($){if(!I||Z)return;const V=$===I.answer;if(F({correct:V,pick:$}),V){t(),Y(!0),setTimeout(()=>Y(!1),900);try{navigator.vibrate&&navigator.vibrate([8,16])}catch{}D(ag)}else{n();try{navigator.vibrate&&navigator.vibrate([4])}catch{}D(0)}}function ne(){const $=(o+1)%r.length,V=$===0?a+1:a;l($),c(V),z(null),x(null),q(null),F(null)}function ue(){const $=r.map(G=>G.scores.reduce((K,ie)=>K+(ie??0),0)),V=Math.max(...$),se=r.filter((G,K)=>$[K]===V).map(G=>G.name).join(", ");alert(`${se} win${se.includes(",")?"":"s"} the pot of ${u} coins! 🎉`),e("/play")}return s.jsxs("div",{className:"min-h-screen bg-black text-white",children:[Q&&s.jsx(a0,{numberOfPieces:120,recycle:!1}),s.jsxs("div",{className:"mx-auto max-w-md px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(5.25rem+env(safe-area-inset-bottom))]",children:[s.jsxs("header",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>e("/play"),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":"Back",children:"←"}),s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-2xl font-bold",children:"Party Spin"}),s.jsx("p",{className:"text-sm text-base-muted",children:"Pass & play • Winner takes the pot"})]}),s.jsx("button",{onClick:()=>f($=>!$),className:"h-10 w-10 grid place-items-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition","aria-label":h?"Mute sound":"Unmute sound",title:h?"Sound on":"Sound off",children:s.jsx(ug,{muted:!h})})]}),s.jsxs("section",{className:"rounded-2xl border border-white/10 bg-white/5 p-3 mb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"text-sm",children:["Round ",s.jsx("b",{children:Math.min(a,fn)}),"/",s.jsx("b",{children:fn})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:A,className:"btn-ghost px-2 py-1 text-sm",children:"+"}),s.jsx("span",{className:"text-sm text-base-muted",children:"Player"}),s.jsx("button",{onClick:P,className:"btn-ghost px-2 py-1 text-sm",children:"−"})]}),s.jsxs("div",{className:"text-sm",children:["Pot: ",s.jsx("b",{className:"text-yellow-300",children:u})," 🪙"]})]}),s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("table",{className:"w-full table-fixed text-sm tracking-tight tabular-nums",children:[s.jsxs("colgroup",{children:[s.jsx("col",{style:{width:"42%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"9%"}}),s.jsx("col",{style:{width:"13%"}})]}),s.jsx("thead",{children:s.jsxs("tr",{className:"text-base-muted",children:[s.jsx("th",{className:"text-left font-medium py-1 pr-1",children:"Player"}),Array.from({length:fn}).map(($,V)=>s.jsxs("th",{className:"font-medium text-center",children:["R",V+1]},V)),s.jsx("th",{className:"font-medium text-right pr-1",children:"Total"})]})}),s.jsx("tbody",{children:r.map(($,V)=>{const se=$.scores.reduce((K,ie)=>K+(ie??0),0),G=V===o;return s.jsxs("tr",{className:G?"bg-white/6":"",children:[s.jsx("td",{className:"py-1 pr-1",children:s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"inline-block h-3 w-3 rounded-full shrink-0",style:{background:$.color}}),s.jsx("input",{className:"bg-transparent outline-none font-semibold w-full",value:$.name,onChange:K=>i(ie=>ie.map((O,B)=>B===V?{...O,name:K.target.value}:O))})]})}),$.scores.map((K,ie)=>s.jsx("td",{className:"text-center",children:K===null?"–":K},ie)),s.jsx("td",{className:"text-right pr-1 font-semibold",children:se})]},V)})})]})})]}),s.jsx("section",{className:"flex flex-col items-center",children:s.jsxs("div",{className:"relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full select-none",children:[N&&s.jsx("div",{className:"pointer-events-none absolute -inset-2 rounded-full",style:{boxShadow:`0 0 0 6px ${N}33, 0 0 30px 8px ${N}44`}}),s.jsx("div",{className:"absolute inset-0 rounded-full border border-white/10 shadow-2xl bg-black/20 overflow-hidden will-change-transform",style:{transform:`rotate(${j}deg)`,transition:g},"aria-label":"Category wheel",role:"group",children:s.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",className:"block",children:[mn.map(($,V)=>{const se=V*Fn,G=se+Fn,K=Fn>180?1:0,ie=Math.PI*se/180,O=Math.PI*G/180,B=50+50*Math.cos(ie),X=50-50*Math.sin(ie),de=50+50*Math.cos(O),te=50-50*Math.sin(O),oe=R===V;return s.jsxs("g",{style:{opacity:R==null?.95:oe?1:.78,filter:R!=null&&!oe?"blur(0.6px)":"none"},children:[s.jsx("path",{d:`M50,50 L${B},${X} A50,50 0 ${K} 0 ${de},${te} Z`,fill:$.color,stroke:oe?`${$.color}AA`:"rgba(255,255,255,0.14)",strokeWidth:oe?"1.2":"0.6"}),s.jsx("text",{x:"50",y:"50",fill:"#ffffff",fontSize:"4",fontWeight:"700",dominantBaseline:"middle",transform:`rotate(${se+Fn/2} 50 50) translate(12 0)`,children:s.jsxs("tspan",{children:[$.label,$.soon?" (soon)":""]})})]},$.slug)}),s.jsx("circle",{cx:"50",cy:"50",r:"9",fill:"rgba(0,0,0,0.55)",stroke:"white",strokeOpacity:"0.25"})]})}),s.jsx("button",{onClick:W,disabled:v||L,className:["absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","h-16 w-16 rounded-full grid place-items-center","bg-white text-black font-extrabold shadow-soft transition active:scale-[0.98]",v||L?"opacity-60 cursor-not-allowed":"hover:bg-gray-200"].join(" "),"aria-label":"Spin the wheel",children:"SPIN"}),s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-3 z-20",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 4 L20 20 L4 20 Z",fill:"#ffffff"})})}),R!=null&&!v&&s.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 -bottom-10",children:s.jsxs("div",{className:"px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur",children:[s.jsx("span",{className:"inline-block h-2.5 w-2.5 rounded-full mr-2 align-middle",style:{background:mn[R].color}}),mn[R].label]})})]})}),s.jsx("section",{className:"mt-4",children:L?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-xl font-semibold mb-2",children:"Match Over"}),s.jsxs("p",{className:"text-sm text-base-muted mb-3",children:["Top score takes the pot of ",s.jsx("b",{className:"text-yellow-300",children:u})," coins."]}),s.jsx("button",{className:"btn-primary w-full",onClick:ue,children:"End match"})]}):R!=null&&mn[R].soon?s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 p-4",children:[s.jsx("div",{className:"text-lg font-semibold mb-1",children:mn[R].label}),s.jsx("p",{className:"text-sm text-base-muted mb-3",children:"This category is arriving soon. Spin again!"}),s.jsx("button",{className:"btn-primary",onClick:W,disabled:v,children:"Re-spin"})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"text-sm text-center text-base-muted mb-1",children:["Turn: ",s.jsx("span",{style:{color:r[o].color},children:r[o].name})," ","| Round ",a,"/",fn]}),s.jsx(dg,{q:I,locked:v||!I,onPick:H,result:Z}),Z&&s.jsx("div",{className:"mt-3 flex justify-center",children:s.jsx("button",{className:"btn-primary",onClick:ne,children:"Next turn"})})]})})]}),s.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 bg-[#0B0F1A]",style:{height:"calc(5.25rem + env(safe-area-inset-bottom))"},"aria-hidden":!0})]})}function mg(){const e=ht(),[t,n]=d.useState(""),[r,i]=d.useState({name:"Nirmal",level:12,xp:2840,nextLevelXp:3e3,coins:1240,rank:23,streak:5,todayQuizzes:3,weeklyXp:450});d.useEffect(()=>{const a=new Date().getHours();a<12?n("Good morning"):a<17?n("Good afternoon"):n("Good evening")},[]);const o=`
    rounded-3xl p-5 text-left text-white 
    transition-all duration-300 ease-out
    active:scale-[0.97] hover:scale-[1.02]
    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)]
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-white/5 before:opacity-0 
    hover:before:opacity-100 before:transition-opacity before:duration-300
  `,l=r.xp%1e3/10;return s.jsxs("div",{className:"min-h-full bg-[#0B0C10] text-white pt-12 px-3",children:[s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsxs("div",{children:[s.jsxs("h1",{className:"text-2xl font-bold",children:[t," 👋"]}),s.jsx("p",{className:"text-white/60 text-sm",children:"Ready for today's challenge?"})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:"w-12 h-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition",children:s.jsx("span",{className:"text-xl",children:"⚙️"})})]}),s.jsxs("div",{className:"rounded-3xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-white/10 p-4 backdrop-blur-sm",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[s.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center text-2xl font-bold",children:r.name[0]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"text-lg font-semibold",children:r.name}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Level ",r.level]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-yellow-400 font-bold text-lg",children:[r.coins," 🪙"]}),s.jsxs("div",{className:"text-white/60 text-sm",children:["Rank #",r.rank]})]})]}),s.jsxs("div",{className:"mb-3",children:[s.jsxs("div",{className:"flex justify-between text-xs text-white/60 mb-1",children:[s.jsx("span",{children:"XP Progress"}),s.jsxs("span",{children:[r.xp,"/",r.nextLevelXp]})]}),s.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out",style:{width:`${l}%`}})})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-orange-400 font-bold text-lg",children:["🔥 ",r.streak]}),s.jsx("div",{className:"text-white/60 text-xs",children:"Day Streak"})]}),s.jsxs("div",{className:"text-center p-2 rounded-xl bg-white/5",children:[s.jsxs("div",{className:"text-green-400 font-bold text-lg",children:["+",r.weeklyXp]}),s.jsx("div",{className:"text-white/60 text-xs",children:"This Week"})]})]})]})]}),s.jsxs("button",{onClick:()=>e("/profile/leaderboard"),className:`${o} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-8 translate-x-8 animate-pulse"}),s.jsxs("div",{className:"relative flex items-start justify-between",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-xs opacity-90 mb-1",children:"🏆 Rank & Coins"}),s.jsx("div",{className:"text-3xl font-extrabold tracking-tight mb-2",children:"LEADERBOARD"}),s.jsxs("div",{className:"text-xs opacity-75 flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Weekly reset · Ends in 2d 14h"]})]}),s.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm grid place-items-center text-2xl border border-white/30",children:"🏆"})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs("button",{onClick:()=>e("/profile/history"),className:`${o} bg-gradient-to-br from-[#D19A00] to-[#C94B4B] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"}),s.jsx("div",{className:"text-3xl mb-3",children:"📊"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"HISTORY"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Quizzes & Practice"}),s.jsxs("div",{className:"text-[10px] opacity-60 mt-1",children:["+",r.todayQuizzes," today"]})]}),s.jsxs("button",{onClick:()=>e("/profile/rewards"),className:`${o} bg-gradient-to-br from-[#2EB872] to-[#1EA07A] relative`,children:[s.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-bounce"}),s.jsx("div",{className:"text-3xl mb-3",children:"🎁"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"REWARDS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Claim & Redeem"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"2 available"})]}),s.jsxs("button",{onClick:()=>e("/profile/badges"),className:`${o} bg-gradient-to-br from-[#E65C00] to-[#F9D423] relative`,children:[s.jsx("div",{className:"absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full grid place-items-center text-[10px] font-bold animate-pulse",children:"NEW"}),s.jsx("div",{className:"text-3xl mb-3",children:"🏅"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"BADGES"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Collectables"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"4/15 unlocked"})]}),s.jsxs("button",{onClick:()=>e("/profile/achievements"),className:`${o} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0] relative`,children:[s.jsx("div",{className:"text-3xl mb-3",children:"🎯"}),s.jsx("div",{className:"text-sm font-bold mb-1",children:"ACHIEVEMENTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"Milestones"}),s.jsx("div",{className:"text-[10px] opacity-60 mt-1",children:"67% complete"})]})]}),s.jsxs("div",{className:"mt-4 space-y-3",children:[s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsx("button",{onClick:()=>e("/profile/streaks"),className:`${o} bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"🔥"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"STREAK"}),s.jsxs("div",{className:"text-[11px] opacity-80",children:[r.streak," days strong"]})]})]})}),s.jsx("button",{onClick:()=>e("/profile/quests"),className:`${o} bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm border border-blue-500/30`,children:s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"text-2xl",children:"⚡"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"QUESTS"}),s.jsx("div",{className:"text-[11px] opacity-80",children:"2 active goals"})]})]})})]}),s.jsx("button",{onClick:()=>e("/profile/settings"),className:`${o} w-full bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-white/10`,children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/10 grid place-items-center text-xl",children:"⚙️"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-bold",children:"SETTINGS"}),s.jsx("div",{className:"text-[11px] opacity-70",children:"Customize your experience"})]})]}),s.jsx("div",{className:"text-white/40",children:"→"})]})})]}),s.jsx("div",{className:"h-6"})]})}const Yr="🪙",Vo={global:[{rank:1,name:"Bryan Wolf",handle:"@bryan",score:43,avatar:"/profile/rank1.png",trend:"+5",streak:12,country:"🇺🇸"},{rank:2,name:"Meghan Jess…",handle:"@meghan",score:40,avatar:"/profile/rank2.png",trend:"+2",streak:8,country:"🇨🇦"},{rank:3,name:"Alex Turner",handle:"@alex",score:38,avatar:"/profile/rank3.png",trend:"±0",streak:15,country:"🇬🇧"},{rank:4,name:"Marsha Fisher",handle:"@marsha",score:36,trend:"-1",streak:5,country:"🇦🇺"},{rank:5,name:"Juanita Cormier",handle:"@juanita",score:35,trend:"+1",streak:3,country:"🇲🇽"},{rank:6,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:7,name:"Tamara Schmidt",handle:"@tamara",score:33,trend:"-2",streak:2,country:"🇩🇪"},{rank:8,name:"Ricardo Veum",handle:"@ricardo",score:32,trend:"+1",streak:4,country:"🇧🇷"}],friends:[{rank:1,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+2",streak:7,country:"🇮🇳"},{rank:2,name:"Sarah Chen",handle:"@sarah",score:31,trend:"-1",streak:4,country:"🇸🇬",friend:!0},{rank:3,name:"Mike Johnson",handle:"@mike",score:29,trend:"+3",streak:2,country:"🇺🇸",friend:!0},{rank:4,name:"Priya Sharma",handle:"@priya",score:27,trend:"±0",streak:5,country:"🇮🇳",friend:!0},{rank:5,name:"David Kim",handle:"@david",score:25,trend:"+1",streak:3,country:"🇰🇷",friend:!0},{rank:6,name:"Emma Wilson",handle:"@emma",score:23,trend:"-2",streak:1,country:"🇬🇧",friend:!0}],india:[{rank:1,name:"Rohit Sharma",handle:"@rohit",score:45,trend:"+4",streak:10,country:"🇮🇳"},{rank:2,name:"Priya Patel",handle:"@priya",score:42,trend:"+1",streak:8,country:"🇮🇳"},{rank:3,name:"You",handle:"@you",score:34,you:!0,avatar:"/profile/avatar.png",trend:"+3",streak:7,country:"🇮🇳"},{rank:4,name:"Arjun Singh",handle:"@arjun",score:32,trend:"-1",streak:5,country:"🇮🇳"},{rank:5,name:"Kavya Reddy",handle:"@kavya",score:30,trend:"+2",streak:3,country:"🇮🇳"},{rank:6,name:"Vikram Gupta",handle:"@vikram",score:28,trend:"±0",streak:4,country:"🇮🇳"}]},ti=[{name:"Diamond",min:40,color:"from-cyan-400 to-blue-600",icon:"💎"},{name:"Gold",min:30,color:"from-yellow-400 to-orange-500",icon:"🥇"},{name:"Silver",min:20,color:"from-gray-300 to-gray-500",icon:"🥈"},{name:"Bronze",min:10,color:"from-orange-600 to-red-600",icon:"🥉"}];function pg(){var h;const e=ht(),[t,n]=d.useState({days:2,hours:14,minutes:17}),[r,i]=d.useState("global"),o=Vo[r]||Vo.global,l=o.find(f=>f.you),a=o.slice(0,3),c=o.slice(3);d.useEffect(()=>{const f=p=>{p.preventDefault(),e(-1)};return window.addEventListener("popstate",f),()=>{window.removeEventListener("popstate",f)}},[e]),d.useEffect(()=>{const f=setInterval(()=>{n(p=>p.minutes>0?{...p,minutes:p.minutes-1}:p.hours>0?{...p,hours:p.hours-1,minutes:59}:p.days>0?{...p,days:p.days-1,hours:23,minutes:59}:p)},6e4);return()=>clearInterval(f)},[]);const u=f=>{const p=Math.max(...o.map(b=>b.score)),k=f/p*100;return k>=90?ti[0]:k>=70?ti[1]:k>=40?ti[2]:ti[3]};return s.jsxs("div",{className:"min-h-screen bg-black text-white pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-5",children:[s.jsx("button",{onClick:()=>e(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-lg font-bold",children:"🏆 Leaderboard"}),s.jsxs("div",{className:"text-xs text-white/60",children:["Ends in ",t.days,"d ",t.hours,"h ",t.minutes,"m"]})]}),s.jsx("button",{className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 transition",children:"📊"})]}),s.jsxs("div",{className:`mb-5 rounded-2xl bg-gradient-to-r ${u(l==null?void 0:l.score).color} p-4 text-center relative overflow-hidden`,children:[s.jsx("div",{className:"absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"}),s.jsxs("div",{className:"relative z-10",children:[s.jsx("div",{className:"text-2xl mb-1",children:u(l==null?void 0:l.score).icon}),s.jsxs("div",{className:"text-sm font-bold text-white",children:[u(l==null?void 0:l.score).name," League"]}),s.jsx("div",{className:"text-xs text-white/80",children:r==="friends"?"Competing with friends!":"You're competing with the best!"})]})]}),s.jsx("div",{className:"flex gap-2 mb-5",children:[{key:"global",label:"🌍 Global",count:"10M+"},{key:"friends",label:"👥 Friends",count:Vo.friends.length},{key:"india",label:"🇮🇳 India",count:"2.5M"}].map(f=>s.jsxs("button",{onClick:()=>i(f.key),className:`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${r===f.key?"bg-lime-500 text-black shadow-lg scale-105":"border border-white/10 bg-white/5 hover:bg-white/10"}`,children:[s.jsx("div",{children:f.label}),s.jsx("div",{className:`text-[10px] ${r===f.key?"text-black/70":"text-white/60"}`,children:f.count})]},f.key))}),s.jsx("div",{className:"mb-5 rounded-2xl bg-gradient-to-r from-lime-500/20 to-green-500/20 border border-lime-500/30 p-3",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-10 h-10 rounded-xl bg-lime-500/20 grid place-items-center text-lg",children:"🧑‍💻"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-lime-400 text-sm",children:"Your Position"}),s.jsxs("div",{className:"text-xs text-white/70 flex items-center gap-2",children:[s.jsxs("span",{children:["Rank #",l==null?void 0:l.rank]}),s.jsx("span",{className:`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${l!=null&&l.trend.startsWith("+")?"bg-green-500/20 text-green-400":l!=null&&l.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:l==null?void 0:l.trend}),s.jsxs("span",{className:"text-white/50 text-[10px]",children:["in ",r==="global"?"Global":r==="friends"?"Friends":"India"]})]})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:"text-lg font-bold text-lime-400",children:[l==null?void 0:l.score," ",Yr]}),s.jsxs("div",{className:"text-xs text-white/60",children:["🔥 ",l==null?void 0:l.streak," streak"]})]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsx("h3",{className:"text-center text-sm font-semibold text-white/80 mb-4",children:"👑 Hall of Fame"}),s.jsxs("div",{className:"bg-gradient-to-b from-white/5 to-white/10 rounded-2xl p-4 border border-white/10 relative overflow-hidden",children:[s.jsx("div",{className:"absolute top-4 left-6 text-2xl opacity-40 animate-pulse",children:"🏆"}),s.jsx("div",{className:"absolute top-8 right-8 text-lg opacity-40 animate-bounce",style:{animationDelay:"1s"},children:"✨"}),s.jsx("div",{className:"absolute bottom-6 left-12 text-xl opacity-10 animate-pulse",style:{animationDelay:"2s"},children:"🥇"}),s.jsx("div",{className:"absolute bottom-4 right-6 text-lg opacity-40 animate-bounce",style:{animationDelay:"0.5s"},children:"⭐"}),s.jsxs("div",{className:"flex items-end justify-center gap-8 relative z-10",children:[a[1]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ni,{src:a[1].avatar,fallback:a[1].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full grid place-items-center text-sm font-bold text-black shadow-lg",children:"2"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ri(a[1].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[a[1].score," ",Yr]})]}),a[0]&&s.jsxs("div",{className:"flex flex-col items-center -mb-3",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ni,{src:a[0].avatar,fallback:a[0].name,size:72}),s.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2",children:s.jsx(hg,{})}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full grid place-items-center text-base font-bold text-black shadow-lg animate-pulse",children:"1"})]}),s.jsx("div",{className:"text-sm font-bold mb-1 mt-1",children:ri(a[0].name,8)}),s.jsxs("div",{className:"text-sm text-lime-400 font-bold mb-1",children:[a[0].score," ",Yr]}),s.jsx("div",{className:"px-2 py-1 bg-yellow-400/20 rounded-full text-[9px] text-yellow-400 font-bold",children:"CHAMPION"})]}),a[2]&&s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsxs("div",{className:"relative mb-2",children:[s.jsx(ni,{src:a[2].avatar,fallback:a[2].name,size:56}),s.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-full grid place-items-center text-sm font-bold text-white shadow-lg",children:"3"})]}),s.jsx("div",{className:"text-sm font-semibold mb-1 mt-1",children:ri(a[2].name,8)}),s.jsxs("div",{className:"text-xs text-lime-400 font-bold",children:[a[2].score," ",Yr]})]})]})]})]}),c.length>0&&s.jsxs("div",{className:"rounded-3xl bg-white/5 border border-white/10 p-2 mb-4",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2 px-2",children:[s.jsx("h3",{className:"text-sm font-semibold",children:"Rankings"}),s.jsx("div",{className:"text-xs text-white/60",children:"Live updates"})]}),s.jsx("ul",{className:"space-y-1.5",children:c.map((f,p)=>s.jsxs("li",{className:`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${f.you?"bg-lime-500/90 text-black shadow-lg shadow-lime-500/20 scale-[1.02]":"bg-white/5 hover:bg-white/10"}`,style:{animationDelay:`${p*100}ms`,animation:"fadeInUp 0.6s ease-out forwards"},children:[s.jsxs("div",{className:"flex items-center gap-2.5",children:[s.jsx(xg,{n:f.rank,you:f.you}),s.jsx(ni,{src:f.avatar,fallback:f.name,size:36}),s.jsxs("div",{className:"flex flex-col leading-tight",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-sm font-semibold",children:ri(f.name,12)}),s.jsx("span",{className:"text-xs",children:f.country}),f.friend&&s.jsx("span",{className:"text-[9px] bg-blue-500/20 text-blue-400 px-1 py-0.5 rounded-full",children:"Friend"})]}),s.jsxs("div",{className:`text-xs flex items-center gap-1.5 ${f.you?"text-black/70":"text-white/60"}`,children:[s.jsx("span",{children:f.handle}),s.jsxs("span",{children:["🔥",f.streak]})]})]})]}),s.jsxs("div",{className:"flex flex-col items-end",children:[s.jsxs("div",{className:"flex items-center gap-1 text-sm font-bold",children:[s.jsx("span",{children:f.score}),s.jsx("span",{className:f.you?"opacity-90":"opacity-80",children:Yr})]}),s.jsx("div",{className:`text-xs px-1.5 py-0.5 rounded-full font-bold ${f.trend.startsWith("+")?"bg-green-500/20 text-green-400":f.trend.startsWith("-")?"bg-red-500/20 text-red-400":"bg-gray-500/20 text-gray-400"}`,children:f.trend})]})]},`${r}-${f.rank}`))})]}),l&&l.rank>1&&s.jsxs("div",{className:"mb-4 p-3 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center",children:[s.jsx("div",{className:"text-sm font-semibold mb-2",children:"🚀 Climb Higher!"}),s.jsx("div",{className:"text-xs text-white/70 mb-3",children:r==="friends"&&l.rank===1?"🎉 You're #1 among friends!":`You need ${Math.max(0,(((h=o[l.rank-2])==null?void 0:h.score)||0)-l.score+1)} more coins to reach rank #${l.rank-1}`}),!(r==="friends"&&l.rank===1)&&s.jsx("button",{onClick:()=>e("/play"),className:"px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform",children:"Play Now 🎮"})]}),s.jsx("style",{jsx:!0,children:`
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
      `})]})}function ni({src:e,fallback:t,size:n=56}){const r=gg(t);return s.jsx("div",{className:"grid place-items-center rounded-full bg-white/10 overflow-hidden border-2 border-white/20",style:{width:n,height:n},children:e?s.jsx("img",{src:e,alt:"",className:"w-full h-full object-cover"}):s.jsx("span",{className:"text-sm font-semibold",children:r})})}function hg(){return s.jsxs("div",{className:"w-7 h-5 bg-gradient-to-t from-yellow-400 to-yellow-300 rounded-b-lg shadow-lg relative",children:[s.jsxs("svg",{viewBox:"0 0 100 40",className:"w-full h-full",children:[s.jsx("path",{d:"M15,35 L15,18 L35,28 L50,10 L65,28 L85,18 L85,35 Z",fill:"url(#crownGradient)"}),s.jsx("defs",{children:s.jsxs("linearGradient",{id:"crownGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#FCD34D"}),s.jsx("stop",{offset:"100%",stopColor:"#F59E0B"})]})})]}),s.jsx("div",{className:"absolute top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"})]})}function xg({n:e,you:t}){return s.jsx("div",{className:`w-7 h-7 grid place-items-center rounded-full text-sm font-bold ${t?"bg-black/10 text-black":"bg-white/10 text-white"}`,children:e})}function ri(e,t=12){return(e==null?void 0:e.length)>t?e.slice(0,t-1)+"…":e}function gg(e=""){var n;const t=e.trim().split(/\s+/);return t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+(((n=t[1])==null?void 0:n[0])||"")).toUpperCase()}const vg="qp_recent",yg="qp_review_snapshot",Cu=[{id:Date.now()-864e5,type:"quiz",category:"General Knowledge",difficulty:"easy",score:8,total:10,accuracy:80,time:"02:31",ms:151e3,date:"Yesterday",timestamp:Date.now()-864e5,mode:"Quiz"},{id:Date.now()-1728e5,type:"practice",category:"Science",difficulty:"medium",score:12,total:15,accuracy:80,time:"06:02",ms:362e3,date:"2 days ago",timestamp:Date.now()-1728e5,mode:"Practice"},{id:Date.now()-2592e5,type:"quiz",category:"Fun Facts",difficulty:"easy",score:9,total:10,accuracy:90,time:"02:05",ms:125e3,date:"3 days ago",timestamp:Date.now()-2592e5,mode:"Quiz"}];function bg(){const[e,t]=d.useState("quizzes"),[n,r]=d.useState(null),[i,o]=d.useState(!1),[l,a]=d.useState("all"),[c,u]=d.useState("all"),[h,f]=d.useState("date"),[p,k]=d.useState([]),[b,j]=d.useState(!0),C=ht(),g=N=>{if(!N)return"00:00";const x=Math.floor(N/1e3),y=Math.floor(x/60),w=x%60;return`${String(y).padStart(2,"0")}:${String(w).padStart(2,"0")}`},m=N=>{if(!N)return"Unknown";const x=new Date(N),w=Math.floor((new Date-x)/(1e3*60*60*24));return w===0?"Today":w===1?"Yesterday":w<7?`${w} days ago`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][x.getMonth()]} ${x.getDate()}`};d.useEffect(()=>{let N=!1;j(!0);const x=E=>{try{return JSON.parse(E)}catch{return null}},y=E=>encodeURIComponent(String(E).trim().toLowerCase().replace(/\s+/g,"-")),w=E=>{var A,P,D,W;const I=Number(E.ts??E.timestamp??E.id)||Date.now(),q=Number(E.ms)||0,Z=Number(E.total)||0,F=Number(E.correct)||0,Y=String(E.mode||"").toLowerCase().includes("practice")?"practice":"quiz",M=((A=E.snapshot)==null?void 0:A.category)||((P=E.snapshot)==null?void 0:P.categoryLabel)||E.cat||E.category||"Unknown",_=((D=E.snapshot)==null?void 0:D.categoryParam)||y(M),L=String(((W=E.snapshot)==null?void 0:W.difficulty)||E.difficulty||"medium").toLowerCase();return{id:E.id??I,type:Y,category:M,categoryParam:_,difficulty:L,score:F,total:Z,accuracy:Z?Math.round(F/Z*100):0,time:g(q),ms:q,date:m(I),timestamp:I,snapshot:E.snapshot??null,mode:E.mode||(Y==="practice"?"Practice":"Quiz")}};try{const E=localStorage.getItem(vg),I=E?x(E):null,Z=(Array.isArray(I)&&I.length?I:Cu).map(w).filter(F=>F&&F.timestamp).sort((F,Q)=>Q.timestamp-F.timestamp);N||k(Z)}catch(E){console.error("Error loading history:",E),N||k(Cu)}finally{N||j(!1)}return()=>{N=!0}},[]);const v=d.useMemo(()=>{const N=new Set(p.map(x=>x.category));return Array.from(N)},[p]),S=d.useMemo(()=>{let N=p.filter(x=>e==="quizzes"?x.type==="quiz":x.type==="practice");return l!=="all"&&(N=N.filter(x=>x.category===l)),c!=="all"&&(N=N.filter(x=>x.difficulty===c)),N.sort((x,y)=>h==="date"?y.timestamp-x.timestamp:h==="score"?y.accuracy-x.accuracy:h==="time"?x.ms-y.ms:0),N},[p,e,l,c,h]),R=d.useMemo(()=>{if(S.length===0)return null;const N=S.reduce((E,I)=>E+I.score,0),x=S.reduce((E,I)=>E+I.total,0),y=x?Math.round(N/x*100):0,w=S.reduce((E,I)=>E+I.ms,0);return{count:S.length,avgAccuracy:y,totalTime:g(w),bestScore:Math.max(...S.map(E=>E.accuracy))}},[S]),z=N=>N>=80?"text-green-400":N>=60?"text-blue-400":N>=40?"text-yellow-400":"text-red-400";return b?s.jsx("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center",children:s.jsx("div",{className:"text-white",children:"Loading history..."})}):s.jsxs("div",{className:"min-h-full bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-12",children:[s.jsx("div",{className:"",children:s.jsxs("div",{className:"px-4 pt-4 pb-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("button",{onClick:()=>C("/profile",{replace:!0}),className:"px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm flex items-center gap-1",children:"← Back"}),s.jsx("button",{onClick:()=>o(!i),className:"p-2 rounded-xl border border-white/20 bg-white/10 text-white",children:s.jsx(kg,{})})]}),s.jsx("h1",{className:"text-2xl font-bold text-white mb-1",children:"History"}),s.jsx("p",{className:"text-white/70 text-sm",children:"Track your progress"})]})}),s.jsxs("div",{className:"px-4 pb-20",children:[s.jsx("div",{className:`
             sticky top-0 z-[60] isolate
            -mx-4 px-4
            py-4 mb-2
            bg-gray-900/95
            backdrop-blur-md
            border-b border-white/10
        `,children:s.jsx("div",{className:"flex items-center",children:s.jsx("div",{className:"inline-flex p-1 rounded-2xl bg-white/10 border border-white/20",children:[{value:"quizzes",label:"Quizzes",icon:"🎯"},{value:"practice",label:"Practice",icon:"📝"}].map(N=>s.jsxs("button",{onClick:()=>t(N.value),className:`px-12 py-2 text-sm rounded-xl transition-all duration-200 ${e===N.value?"bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg":"text-white/70 hover:text-white"}`,children:[s.jsx("span",{className:"mr-1",children:N.icon}),N.label]},N.value))})})}),R&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20",children:s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[s.jsx(si,{label:"Total",value:R.count}),s.jsx(si,{label:"Avg Score",value:`${R.avgAccuracy}%`,color:z(R.avgAccuracy)}),s.jsx(si,{label:"Best Score",value:`${R.bestScore}%`,color:"text-green-400"}),s.jsx(si,{label:"Total Time",value:R.totalTime})]})}),i&&s.jsx("div",{className:"mb-4 p-4 rounded-2xl bg-white/10 border border-white/20",children:s.jsxs("div",{className:"space-y-3",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Category"}),s.jsxs("select",{value:l,onChange:N=>a(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All Categories"}),v.map(N=>s.jsx("option",{value:N,children:N},N))]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Difficulty"}),s.jsxs("select",{value:c,onChange:N=>u(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"all",children:"All"}),s.jsx("option",{value:"easy",children:"Easy"}),s.jsx("option",{value:"medium",children:"Medium"}),s.jsx("option",{value:"hard",children:"Hard"})]})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("label",{className:"text-xs text-white/60 mb-1 block",children:"Sort By"}),s.jsxs("select",{value:h,onChange:N=>f(N.target.value),className:"w-full px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white text-sm",children:[s.jsx("option",{value:"date",children:"Date"}),s.jsx("option",{value:"score",children:"Score"}),s.jsx("option",{value:"time",children:"Time"})]})]})]})]})}),S.length===0?s.jsxs("div",{className:"text-center py-12",children:[s.jsx("div",{className:"text-4xl mb-3",children:"📚"}),s.jsxs("p",{className:"text-white/60",children:["No ",e," history yet"]}),s.jsx("p",{className:"text-white/40 text-sm mt-1",children:"Start playing to see your progress here!"})]}):s.jsx("div",{className:"space-y-3",children:S.map((N,x)=>s.jsx(wg,{item:N,index:x,onClick:()=>r(N)},N.id))})]}),n&&s.jsx(jg,{item:n,onClose:()=>r(null)})]})}function si({label:e,value:t,color:n="text-white"}){return s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-xs text-white/60 mb-1",children:e}),s.jsx("div",{className:`text-lg font-bold ${n}`,children:t})]})}function wg({item:e,index:t,onClick:n}){const r=l=>l>=80?"from-green-500/20 to-green-600/10 border-green-500/30":l>=60?"from-blue-500/20 to-blue-600/10 border-blue-500/30":l>=40?"from-yellow-500/20 to-yellow-600/10 border-yellow-500/30":"from-red-500/20 to-red-600/10 border-red-500/30",o=(l=>{const a=l==null?void 0:l.toLowerCase();return a==="easy"?{bg:"bg-green-500/20",text:"text-green-400",border:"border-green-500/30"}:a==="medium"?{bg:"bg-yellow-500/20",text:"text-yellow-400",border:"border-yellow-500/30"}:a==="hard"?{bg:"bg-red-500/20",text:"text-red-400",border:"border-red-500/30"}:{bg:"bg-gray-500/20",text:"text-gray-400",border:"border-gray-500/30"}})(e.difficulty);return s.jsxs("div",{onClick:n,className:`
        relative rounded-2xl p-4 cursor-pointer
        bg-gradient-to-br ${r(e.accuracy)}
        border transform transition-all duration-300 hover:scale-[1.02]
      `,children:[s.jsxs("div",{className:"flex items-start justify-between mb-3",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsx("span",{className:"text-lg",children:e.type==="quiz"?"🎯":"📝"}),s.jsx("h3",{className:"font-semibold text-white",children:e.category})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:`px-2 py-0.5 rounded-full text-xs ${o.bg} ${o.text} ${o.border} border`,children:e.difficulty}),s.jsx("span",{className:"text-xs text-white/50",children:e.date})]})]}),s.jsxs("div",{className:"text-right",children:[s.jsxs("div",{className:`text-2xl font-bold ${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":e.accuracy>=40?"text-yellow-400":"text-red-400"}`,children:[e.accuracy,"%"]}),s.jsxs("div",{className:"text-xs text-white/60",children:[e.score,"/",e.total]})]})]}),s.jsxs("div",{className:"flex items-center justify-between text-xs",children:[s.jsxs("div",{className:"flex items-center gap-3 text-white/60",children:[s.jsxs("span",{children:["⏱ ",e.time]}),s.jsx("span",{children:e.mode})]}),s.jsx("span",{className:"text-white/40",children:"Tap to review →"})]})]})}function jg({item:e,onClose:t}){const n=ht();return d.useEffect(()=>{const r=i=>{i.key==="Escape"&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t]),s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80",onClick:t,children:s.jsxs("div",{className:"w-full max-w-md bg-gray-900 rounded-3xl p-6 border border-white/20",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h2",{className:"text-xl font-bold text-white",children:"Quiz Details"}),s.jsx("button",{onClick:t,className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white",children:"✕"})]}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Category"}),s.jsx("span",{className:"text-white font-medium",children:e.category})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Difficulty"}),s.jsx("span",{className:`${e.difficulty==="easy"?"text-green-400":e.difficulty==="medium"?"text-yellow-400":"text-red-400"} font-medium`,children:e.difficulty})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Score"}),s.jsxs("span",{className:"text-white font-medium",children:[e.score,"/",e.total]})]}),s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("span",{className:"text-white/60",children:"Accuracy"}),s.jsxs("span",{className:`${e.accuracy>=80?"text-green-400":e.accuracy>=60?"text-blue-400":"text-yellow-400"} font-medium`,children:[e.accuracy,"%"]})]}),s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-white/60",children:"Time"}),s.jsx("span",{className:"text-white font-medium",children:e.time})]})]}),e.snapshot&&s.jsx("button",{onClick:()=>{t(),localStorage.setItem(yg,JSON.stringify(e.snapshot)),n(`/quiz/${e.categoryParam}/start?review=1&attempt=${e.id}`,{state:{reviewFrom:"history",historyPath:"/profile/history"}})},className:"w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity",children:"Review Answers"}),s.jsx("button",{onClick:()=>{var r;t(),n(`/quiz/${e.categoryParam}/start`,{state:{mode:"quiz",retake:!0,difficulty:e.difficulty,count:e.total,timer:((r=e.snapshot)==null?void 0:r.timer)||{type:"per_q",seconds:45},fromHistory:!0}})},className:"w-full py-3 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",children:"Retake Quiz"})]})]})})}function kg(){return s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M3 6h18M7 12h10M10 18h4",strokeLinecap:"round",strokeLinejoin:"round"})})}const Ng=d.createContext({});function d0(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const Sg=typeof window<"u",Cg=Sg?d.useLayoutEffect:d.useEffect,f0=d.createContext(null);function Eg(e){return typeof e=="object"&&e!==null}function _g(e){return Eg(e)&&"offsetHeight"in e}const Rg=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Pg extends d.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=_g(r)&&r.offsetWidth||0,o=this.props.sizeRef.current;o.height=n.offsetHeight||0,o.width=n.offsetWidth||0,o.top=n.offsetTop,o.left=n.offsetLeft,o.right=i-o.width-o.left}return null}componentDidUpdate(){}render(){return this.props.children}}function zg({children:e,isPresent:t,anchorX:n,root:r}){const i=d.useId(),o=d.useRef(null),l=d.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:a}=d.useContext(Rg);return d.useInsertionEffect(()=>{const{width:c,height:u,top:h,left:f,right:p}=l.current;if(t||!o.current||!c||!u)return;const k=n==="left"?`left: ${f}`:`right: ${p}`;o.current.dataset.motionPopId=i;const b=document.createElement("style");a&&(b.nonce=a);const j=r??document.head;return j.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${k}px !important;
            top: ${h}px !important;
          }
        `),()=>{j.contains(b)&&j.removeChild(b)}},[t]),s.jsx(Pg,{isPresent:t,childRef:o,sizeRef:l,children:d.cloneElement(e,{ref:o})})}const Tg=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:l,anchorX:a,root:c})=>{const u=d0(Lg),h=d.useId();let f=!0,p=d.useMemo(()=>(f=!1,{id:h,initial:t,isPresent:n,custom:i,onExitComplete:k=>{u.set(k,!0);for(const b of u.values())if(!b)return;r&&r()},register:k=>(u.set(k,!1),()=>u.delete(k))}),[n,u,r]);return o&&f&&(p={...p}),d.useMemo(()=>{u.forEach((k,b)=>u.set(b,!1))},[n]),d.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),l==="popLayout"&&(e=s.jsx(zg,{isPresent:n,anchorX:a,root:c,children:e})),s.jsx(f0.Provider,{value:p,children:e})};function Lg(){return new Map}function Mg(e=!0){const t=d.useContext(f0);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=d.useId();d.useEffect(()=>{if(e)return i(o)},[e]);const l=d.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,l]:[!0]}const ii=e=>e.key||"";function Eu(e){const t=[];return d.Children.forEach(e,n=>{d.isValidElement(n)&&t.push(n)}),t}const Go=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:o="sync",propagate:l=!1,anchorX:a="left",root:c})=>{const[u,h]=Mg(l),f=d.useMemo(()=>Eu(e),[e]),p=l&&!u?[]:f.map(ii),k=d.useRef(!0),b=d.useRef(f),j=d0(()=>new Map),[C,g]=d.useState(f),[m,v]=d.useState(f);Cg(()=>{k.current=!1,b.current=f;for(let z=0;z<m.length;z++){const N=ii(m[z]);p.includes(N)?j.delete(N):j.get(N)!==!0&&j.set(N,!1)}},[m,p.length,p.join("-")]);const S=[];if(f!==C){let z=[...f];for(let N=0;N<m.length;N++){const x=m[N],y=ii(x);p.includes(y)||(z.splice(N,0,x),S.push(x))}return o==="wait"&&S.length&&(z=S),v(Eu(z)),g(f),null}const{forceRender:R}=d.useContext(Ng);return s.jsx(s.Fragment,{children:m.map(z=>{const N=ii(z),x=l&&!u?!1:f===m||p.includes(N),y=()=>{if(j.has(N))j.set(N,!0);else return;let w=!0;j.forEach(E=>{E||(w=!1)}),w&&(R==null||R(),v(b.current),l&&(h==null||h()),r&&r())};return s.jsx(Tg,{isPresent:x,initial:!k.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:o,root:c,onExitComplete:x?void 0:y,anchorX:a,children:z},N)})})},Fg=()=>{const[e,t]=d.useState(null);d.useEffect(()=>{if(typeof window<"u"){const O=sessionStorage.getItem("navigationSource");O&&t(O)}},[]);const n=O=>{typeof window<"u"&&(sessionStorage.setItem("navigationSource","/rewards"),window.location.href=O)},r=()=>{if(typeof window<"u"){const O=sessionStorage.getItem("navigationSource");window.location.href="/profile",sessionStorage.removeItem("navigationSource")}},i=[{id:1,type:"coins",value:100,icon:"🪙",label:"100 Coins",cost:0},{id:2,type:"life",value:1,icon:"❤️",label:"1 Life",cost:50},{id:3,type:"coins",value:200,icon:"🪙",label:"200 Coins",cost:0},{id:4,type:"wildcard",value:1,icon:"🃏",label:"Wild Card",cost:100},{id:5,type:"coins",value:500,icon:"💰",label:"500 Coins",cost:0,milestone:!0},{id:6,type:"fifty-fifty",value:1,icon:"➗",label:"50:50",cost:150},{id:7,type:"life",value:2,icon:"❤️",label:"2 Lives",cost:100},{id:8,type:"vehicle",value:"bike",icon:"🏍️",label:"Motorcycle",cost:300},{id:9,type:"mystery",value:1,icon:"🎁",label:"Mystery Box",cost:200},{id:10,type:"coins",value:750,icon:"💰",label:"750 Coins",cost:0,milestone:!0},{id:11,type:"life",value:3,icon:"❤️",label:"3 Lives",cost:150},{id:12,type:"wildcard",value:2,icon:"🃏",label:"2x Wild Card",cost:250},{id:13,type:"vehicle",value:"car",icon:"🚗",label:"Car",cost:500},{id:14,type:"fifty-fifty",value:2,icon:"➗",label:"2x 50:50",cost:300},{id:15,type:"coins",value:1e3,icon:"💎",label:"1000 Coins",cost:0,milestone:!0}],o={cycle:{icon:"🚴",name:"Bicycle"},bike:{icon:"🏍️",name:"Motorcycle"},car:{icon:"🚗",name:"Car"}},[l,a]=d.useState(4),[c,u]=d.useState(1390),[h,f]=d.useState(4),[p,k]=d.useState(!1),[b,j]=d.useState(!1),[C,g]=d.useState(0),[m,v]=d.useState(0),[S,R]=d.useState("cycle"),[z,N]=d.useState([{type:"vehicle",icon:"🚴",name:"Bicycle",count:1},{type:"wildcard",icon:"🃏",name:"Wild Card",count:2},{type:"fifty-fifty",icon:"➗",name:"50:50 Helper",count:1}]),[x,y]=d.useState([0,1,2,3]),[w,E]=d.useState(!1),[I,q]=d.useState(!1),[Z,F]=d.useState(null),[Q,Y]=d.useState(null),[M,_]=d.useState(!1),[L,A]=d.useState(null),[P,D]=d.useState(!1),W=d.useRef(null),H=d.useRef(null),ne=d.useRef(null);d.useEffect(()=>{W.current=new Audio("/sounds/reward.mp3"),H.current=new Audio("/sounds/reward_progress.mp3"),[W,H].forEach(O=>{var B;(B=O.current)==null||B.addEventListener("error",()=>{console.log("Sound file not found")})})},[]);const ue=O=>{try{O.current&&(O.current.currentTime=0,O.current.play().catch(B=>console.log("Audio play failed:",B)))}catch(B){console.log("Sound play error:",B)}},$=(O,B)=>{if(O>l){Y(B),q(!0);return}O===l&&se(O,B)},V=O=>{var X;const B=(X=ne.current)==null?void 0:X.querySelector(`[data-index="${O}"]`);if(B){const de=B.getBoundingClientRect(),te=window.pageYOffset||document.documentElement.scrollTop,oe=de.top+te-window.innerHeight/2+50;window.scrollTo({top:oe,behavior:"smooth"})}},se=(O,B)=>{if(!x.includes(O)){if(B.cost>0&&c<B.cost){Y(B),q(!0);return}B.cost>0&&u(X=>X-B.cost),ue(W),E(!0),Y(B),y(X=>[...X,O]),setTimeout(()=>{E(!1),B.type==="coins"?(g(B.value),k(!0),setTimeout(()=>{u(X=>X+B.value),setTimeout(()=>{k(!1),g(0)},500)},300)):B.type==="life"?(v(B.value),j(!0),setTimeout(()=>{f(X=>X+B.value),setTimeout(()=>{j(!1),v(0)},500)},300)):(A({icon:B.icon,startX:window.innerWidth/2,startY:window.innerHeight/2}),setTimeout(()=>{A(null),D(!0),G(B),B.type==="vehicle"&&R(B.value),setTimeout(()=>{D(!1)},500)},800)),setTimeout(()=>{if(l<i.length-1){const X=l+1;V(X),setTimeout(()=>{_(!0),ue(H),a(X),setTimeout(()=>{_(!1)},500)},300)}},1200)},1500)}},G=O=>{N(B=>B.find(de=>de.icon===O.icon)?B.map(de=>de.icon===O.icon?{...de,count:de.count+1}:de):[...B,{type:O.type,icon:O.icon,name:O.label,count:1}])},K=O=>30+O*100,ie=()=>30+l*100;return s.jsxs("div",{className:"rewards-page",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsx("div",{className:"non-sticky-header",children:s.jsx("button",{className:"back-button",onClick:r,children:"← Back"})}),s.jsxs("div",{className:"sticky-section",children:[s.jsxs("div",{className:"header-wrapper",children:[s.jsxs("div",{className:"title-row",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"title",children:"Rewards"}),s.jsx("p",{className:"subtitle",children:"Claim amazing prizes"})]}),s.jsx("button",{className:"play-quiz-btn",onClick:()=>n("/play"),children:"Play Quiz"})]}),s.jsx("div",{className:"balance-row",children:s.jsx("div",{className:"balance-item",children:s.jsxs("div",{children:[s.jsx("div",{className:"balance-label",children:"Balance"}),s.jsxs("div",{className:`balance-value ${p?"animating":""}`,children:[c.toLocaleString()," 🪙",p&&s.jsxs("span",{className:"value-change",children:["+",C]})]})]})})})]}),s.jsx("div",{className:"stats-cards-container",children:s.jsxs("div",{className:"info-grid",children:[s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"❤️"}),s.jsxs("div",{className:`info-value ${b?"animating":""}`,children:[h,b&&s.jsxs("span",{className:"value-change",children:["+",m]})]}),s.jsx("div",{className:"info-label",children:"Lives"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:"⭐"}),s.jsx("div",{className:"info-value",children:"5"}),s.jsx("div",{className:"info-label",children:"Level"})]}),s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:o[S].icon}),s.jsx("div",{className:"info-value",children:o[S].name}),s.jsx("div",{className:"info-label",children:"Vehicle"})]}),s.jsxs("div",{className:`cards-section ${P?"animating":""}`,children:[s.jsx("div",{className:"cards-label",children:"Your Cards"}),s.jsx("div",{className:"card-grid",children:z.map((O,B)=>s.jsxs("div",{className:"card-item",onClick:()=>F(O),children:[s.jsxs("div",{className:"large-card",children:[s.jsx("div",{className:"large-card-icon",children:O.icon}),s.jsx("div",{className:"large-card-name",children:O.name})]}),O.count>1&&s.jsx("div",{className:"card-count-badge",children:O.count})]},B))})]})]})})]}),s.jsx("div",{className:"scrollable-journey",children:s.jsx("div",{className:"journey-container",ref:ne,children:s.jsxs("div",{className:"journey-track",children:[s.jsx("div",{className:"curvy-road",children:s.jsxs("svg",{className:"road-svg",viewBox:"0 0 60 1500",preserveAspectRatio:"none",children:[s.jsx("defs",{children:s.jsxs("linearGradient",{id:"roadGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[s.jsx("stop",{offset:"0%",stopColor:"#5E5CE6"}),s.jsx("stop",{offset:"100%",stopColor:"#5E5CE6"})]})}),s.jsx("path",{className:"road-path",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500"}),s.jsx("path",{className:"road-progress",d:"M 30 0 Q 45 50, 30 100 T 30 200 Q 15 250, 30 300 T 30 400 Q 45 450, 30 500 T 30 600 Q 15 650, 30 700 T 30 800 Q 45 850, 30 900 T 30 1000 Q 15 1050, 30 1100 T 30 1200 Q 45 1250, 30 1300 T 30 1400 L 30 1500",strokeDasharray:"1500",strokeDashoffset:1500-l/(i.length-1)*1500})]})}),s.jsxs("div",{className:"avatar-tracker",style:{top:`${ie()}px`},children:[s.jsx("img",{className:"avatar-img",src:"/profile/avatar.png",alt:"You",onError:O=>{O.target.style.display="none"}}),s.jsx("div",{className:"tracker-vehicle",children:o[S].icon})]}),s.jsx("div",{className:"rewards-list",children:i.map((O,B)=>{const X=B%2===0,de=B>l,te=x.includes(B),oe=B===l;return s.jsx("div",{className:"reward-row","data-index":B,style:{top:`${K(B)}px`},children:s.jsxs("div",{className:`reward-item ${X?"left":"right"}`,children:[s.jsxs("div",{className:`checkpoint ${oe?"current":te?"claimed":de?"locked":""}`,onClick:()=>$(B,O),children:[s.jsx("div",{className:"checkpoint-icon",children:O.icon}),s.jsx("div",{className:"checkpoint-value",children:O.label.split(" ")[0]}),O.milestone&&s.jsx("div",{className:"milestone-badge",children:"BONUS"}),de&&s.jsx("div",{className:"lock-icon",children:"🔒"})]}),s.jsxs("div",{className:"reward-info",children:[s.jsx("div",{className:"reward-name",children:O.label}),s.jsxs("div",{className:"step-label",children:["Step ",B+1]})]})]})},O.id)})})]})})}),L&&s.jsx("div",{className:"flying-card",style:{left:`${L.startX}px`,top:`${L.startY}px`,"--startX":`${L.startX}px`},children:L.icon}),s.jsx(Go,{children:Z&&s.jsx("div",{className:"claim-overlay",onClick:()=>F(null),children:s.jsxs("div",{className:"modal",onClick:O=>O.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:Z.icon}),s.jsx("div",{className:"card-detail-name",children:Z.name}),s.jsxs("div",{className:"card-detail-desc",children:["You have ",Z.count," of these cards"]}),s.jsx("div",{className:"modal-buttons",children:s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>F(null),children:"Close"})})]})})}),s.jsx(Go,{children:w&&Q&&s.jsx("div",{className:"claim-overlay",children:s.jsxs("div",{className:"modal",children:[s.jsx("div",{className:"modal-title",children:"WELL DONE!"}),s.jsx("div",{className:"modal-subtitle",children:"Here's a reward for you."}),s.jsx("div",{className:"modal-icon",children:Q.icon}),s.jsxs("div",{className:"modal-value",children:["+",Q.value," ",Q.type==="coins"?"Coins":Q.type==="life"?"Lives":Q.label]})]})})}),s.jsx(Go,{children:I&&Q&&s.jsx("div",{className:"claim-overlay",onClick:()=>q(!1),children:s.jsxs("div",{className:"modal",onClick:O=>O.stopPropagation(),children:[s.jsx("div",{className:"modal-icon",children:"🪙"}),s.jsx("div",{className:"modal-title",children:"Need More Coins"}),s.jsx("div",{className:"modal-subtitle",children:Q.cost>0?`You need ${Q.cost-c} more coins`:"Complete previous rewards first"}),s.jsxs("div",{className:"modal-buttons",children:[s.jsx("button",{className:"modal-btn modal-btn-primary",onClick:()=>n("/play"),children:"Play Quiz"}),s.jsx("button",{className:"modal-btn modal-btn-secondary",onClick:()=>q(!1),children:"Cancel"})]})]})})})]})},oi=[{id:1,name:"First Win",emoji:"🏆",unlocked:!0,hint:"Win your first quiz",progress:100,color:"#FFD700"},{id:2,name:"On Fire",emoji:"🔥",unlocked:!0,hint:"3-day winning streak",progress:100,color:"#FF6B35"},{id:3,name:"Perfectionist",emoji:"⭐",unlocked:!1,hint:"Score 10/10 in any quiz",progress:75,color:"#9333EA"},{id:4,name:"Early Bird",emoji:"🌅",unlocked:!0,hint:"Play before 9 AM",progress:100,color:"#F59E0B"},{id:5,name:"Scholar",emoji:"🎓",unlocked:!1,hint:"Master 5 categories",progress:40,color:"#3B82F6"},{id:6,name:"Lightning",emoji:"⚡",unlocked:!1,hint:"Complete in under 2 minutes",progress:20,color:"#10B981"},{id:7,name:"Champion",emoji:"👑",unlocked:!1,hint:"Win 50 quizzes",progress:30,color:"#EC4899"},{id:8,name:"Explorer",emoji:"🗺️",unlocked:!1,hint:"Try all categories",progress:60,color:"#06B6D4"},{id:9,name:"Strategist",emoji:"🧠",unlocked:!0,hint:"Use 3 power-ups wisely",progress:100,color:"#8B5CF6"}];function Ig(){const[e,t]=d.useState(null),n=oi.filter(i=>i.unlocked).length,r=Math.round(n/oi.length*100);return s.jsxs("div",{className:"badges-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Badge Collection"}),s.jsx("p",{className:"subtitle",children:"Unlock achievements and show your skills"})]})]}),s.jsxs("div",{className:"progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Collection Progress"}),s.jsxs("span",{className:"progress-value",children:[n,"/",oi.length]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${r}%`}})})]}),s.jsx("div",{className:"badges-grid",children:oi.map(i=>s.jsxs("div",{className:`badge-card ${i.unlocked?"unlocked":""}`,style:{"--badge-color":i.color},onClick:()=>t(i),children:[s.jsx("div",{className:"badge-glow"}),s.jsx("div",{className:"badge-emoji",children:i.emoji}),s.jsx("div",{className:"badge-name",children:i.name}),!i.unlocked&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"badge-progress",children:s.jsx("div",{className:"badge-progress-fill",style:{width:`${i.progress}%`}})}),s.jsx("div",{className:"lock-indicator",children:"🔒"})]})]},i.id))}),s.jsxs("div",{className:"tips-card",children:[s.jsxs("div",{className:"tips-title",children:[s.jsx("span",{children:"💡"}),s.jsx("span",{children:"Pro Tip"})]}),s.jsx("div",{className:"tips-content",children:"Complete daily challenges and maintain streaks to unlock rare badges faster. Each badge gives you bonus XP and special rewards!"})]}),e&&s.jsx("div",{className:"badge-modal",onClick:()=>t(null),children:s.jsxs("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:[s.jsx("div",{className:`modal-badge ${e.unlocked?"":"locked"}`,children:e.emoji}),s.jsx("h3",{className:"modal-title",children:e.name}),s.jsx("span",{className:`modal-status ${e.unlocked?"":"locked"}`,children:e.unlocked?"✓ Unlocked":"🔒 Locked"}),s.jsx("p",{className:"modal-description",children:e.hint}),!e.unlocked&&s.jsxs("div",{className:"modal-progress-section",children:[s.jsx("div",{className:"modal-progress-label",children:"Progress"}),s.jsx("div",{className:"modal-progress-bar",children:s.jsx("div",{className:"modal-progress-fill",style:{width:`${e.progress}%`,"--badge-color":e.color}})}),s.jsxs("div",{className:"modal-progress-text",children:[e.progress,"%"]})]}),s.jsx("button",{className:"modal-close",onClick:()=>t(null),children:e.unlocked?"Awesome!":"Keep Going!"})]})})]})}const Dg=[{id:1,title:"Quiz Master",subtitle:"Play 10 quizzes",current:7,target:10,reward:150,claimed:!1,icon:"🎯",color:"#FF6B6B"},{id:2,title:"Coin Collector",subtitle:"Earn 2,000 coins",current:1240,target:2e3,reward:200,claimed:!1,icon:"💰",color:"#4ECDC4"},{id:3,title:"Winning Streak",subtitle:"Win 3 in a row",current:3,target:3,reward:100,claimed:!0,icon:"🔥",color:"#FFD93D"},{id:4,title:"Speed Demon",subtitle:"Complete 5 under 2min",current:2,target:5,reward:300,claimed:!1,icon:"⚡",color:"#A8E6CF"},{id:5,title:"Perfect Score",subtitle:"Get 100% accuracy",current:0,target:1,reward:250,claimed:!1,icon:"⭐",color:"#C7B8FF"}];function Ag(){const[e,t]=d.useState(Dg),[n,r]=d.useState(null),[i,o]=d.useState(1890),[l,a]=d.useState(!1),[c,u]=d.useState([]),h=e.length,f=e.filter(b=>b.current>=b.target).length,p=Math.round(f/h*100);d.useEffect(()=>{const b=setInterval(()=>{u(j=>{const C={id:Date.now(),x:Math.random()*100,y:Math.random()*100,size:Math.random()*20+10};return[...j.slice(-4),C]})},3e3);return()=>clearInterval(b)},[]);const k=(b,j)=>{r(b),navigator.vibrate&&navigator.vibrate([20,10,20]),setTimeout(()=>{t(C=>C.map(g=>g.id===b?{...g,claimed:!0}:g)),o(C=>C+j),r(null),a(!0),setTimeout(()=>a(!1),2e3)},600)};return s.jsxs("div",{className:"achievements-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"floating-shapes",children:[s.jsx("div",{className:"shape shape-1"}),s.jsx("div",{className:"shape shape-2"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",i.toLocaleString()]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"ACHIEVEMENTS"}),s.jsx("p",{className:"subtitle",children:"Complete challenges and earn awesome rewards!"})]})]}),s.jsxs("div",{className:"progress-overview",children:[s.jsx("div",{className:"card-glow",style:{"--card-color":"#FFD93D"}}),s.jsxs("div",{className:"overview-header",children:[s.jsx("span",{className:"overview-label",children:"🎮 Progress Tracker"}),s.jsxs("div",{className:"overview-stats",children:[s.jsx("span",{className:"trophy-icon",children:"🏆"}),s.jsxs("span",{className:"overview-value",children:[f,"/",h]})]})]}),s.jsx("div",{className:"progress-bar-main",children:s.jsx("div",{className:"progress-fill-main",style:{width:`${p}%`}})})]}),s.jsx("div",{className:"achievements-list",children:e.map(b=>{const j=Math.min(100,Math.round(b.current/b.target*100)),C=j===100,g=b.color+"CC";return s.jsxs("div",{className:`achievement-card ${C?"completed":""}`,style:{"--card-color":b.color,"--card-color-dark":g},children:[s.jsx("div",{className:"card-glow"}),C&&b.claimed&&s.jsx("div",{className:"completed-badge",children:"✓"}),s.jsxs("div",{className:"card-content",children:[s.jsx("div",{className:"achievement-icon",children:b.icon}),s.jsxs("div",{className:"achievement-details",children:[s.jsx("div",{className:"achievement-title",children:b.title}),s.jsx("div",{className:"achievement-subtitle",children:b.subtitle}),s.jsxs("div",{className:"progress-container",children:[s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill",style:{width:`${j}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{children:[b.current,"/",b.target]}),s.jsxs("span",{className:"reward-badge",children:["🪙 ",b.reward]})]})]})]}),s.jsx("button",{onClick:()=>k(b.id,b.reward),disabled:!C||b.claimed,className:`claim-button ${b.claimed?"claimed":C?"can-claim":"in-progress"} ${n===b.id?"claiming":""}`,children:b.claimed?"✓":C?"CLAIM!":`${j}%`})]})]},b.id)})}),l&&s.jsx("div",{className:"celebration",children:"🎉"})]})}function Og(){const[e,t]=d.useState(5),[n,r]=d.useState(12),[i,o]=d.useState(47),[l,a]=d.useState(!1),c=new Date().getDay(),u=["S","M","T","W","T","F","S"].map((b,j)=>({label:b,hit:j<=c&&j!==0,isToday:j===c})),h=[{days:3,emoji:"⚡",label:"Starter",achieved:e>=3},{days:7,emoji:"🔥",label:"Week Warrior",achieved:e>=7},{days:30,emoji:"💎",label:"Champion",achieved:e>=30},{days:100,emoji:"👑",label:"Legend",achieved:e>=100}],f=h.find(b=>b.days>e)||h[h.length-1],p=Math.min(100,e/f.days*100);d.useEffect(()=>{e>0&&e%5===0&&(a(!0),setTimeout(()=>a(!1),2e3))},[e]);const k=()=>{typeof window<"u"&&(window.location.href="/play")};return s.jsxs("div",{className:"streaks-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsx("div",{className:"animated-bg"}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"STREAKS"}),s.jsx("p",{className:"subtitle",children:"Keep the fire burning!"})]})]}),s.jsxs("div",{className:"streak-hero",children:[s.jsx("div",{className:"fire-animation",children:"🔥"}),s.jsx("div",{className:"streak-number",children:e}),s.jsx("div",{className:"streak-label",children:"DAY STREAK"}),s.jsxs("div",{className:"stats-row",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:n}),s.jsx("div",{className:"stat-label",children:"Best Streak"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-value",children:i}),s.jsx("div",{className:"stat-label",children:"Total Days"})]})]})]}),s.jsxs("div",{className:"calendar-card",children:[s.jsx("div",{className:"calendar-header",children:"This Week"}),s.jsx("div",{className:"week-grid",children:u.map((b,j)=>s.jsxs("div",{className:`day-box ${b.isToday?"today":b.hit?"active":"inactive"}`,children:[b.isToday&&s.jsx("div",{className:"day-icon",children:"⚡"}),b.hit&&!b.isToday&&s.jsx("div",{className:"day-icon",children:"✓"}),s.jsx("div",{children:b.label})]},j))})]}),s.jsxs("div",{className:"milestone-section",children:[s.jsx("div",{className:"milestone-header",children:"Next Milestone"}),s.jsxs("div",{className:"milestone-progress",children:[s.jsxs("div",{className:"milestone-info",children:[s.jsxs("div",{className:"milestone-current",children:[s.jsx("span",{className:"milestone-emoji",children:f.emoji}),s.jsx("span",{className:"milestone-text",children:f.label})]}),s.jsxs("span",{className:"milestone-target",children:[e,"/",f.days," days"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${p}%`}})})]}),s.jsx("div",{className:"milestones-grid",children:h.map((b,j)=>s.jsxs("div",{className:`milestone-badge ${b.achieved?"achieved":""}`,children:[s.jsx("div",{className:"milestone-badge-emoji",children:b.emoji}),s.jsxs("div",{className:"milestone-badge-label",children:[b.days," days"]})]},j))})]}),s.jsxs("div",{className:"motivational-text",children:[`"Great job! You're `,Math.max(1,f.days-e)," days away from ",f.label,'!"']}),s.jsxs("button",{className:"play-button",onClick:k,children:[s.jsx("span",{children:"Continue Streak"}),s.jsx("span",{children:"→"})]}),l&&s.jsx("div",{className:"celebration",children:"🎉"})]})}const $g=[{id:1,title:"Play 3 quizzes today",progress:2,target:3,reward:60,claimed:!1,icon:"🎮",color:"#FF6B6B",difficulty:"Easy"},{id:2,title:"Score 8+ twice",progress:1,target:2,reward:80,claimed:!1,icon:"🎯",color:"#4ECDC4",difficulty:"Medium"},{id:3,title:"Practice 15 questions",progress:15,target:15,reward:100,claimed:!0,icon:"📚",color:"#FFD93D",difficulty:"Easy"},{id:4,title:"Win 5 in a row",progress:3,target:5,reward:150,claimed:!1,icon:"🔥",color:"#A8E6CF",difficulty:"Hard"},{id:5,title:"Complete a speed run",progress:0,target:1,reward:120,claimed:!1,icon:"⚡",color:"#C7B8FF",difficulty:"Medium"}];function Bg(){const[e,t]=d.useState($g),[n,r]=d.useState(850),[i,o]=d.useState(null),[l,a]=d.useState(0);d.useEffect(()=>{const f=e.filter(p=>p.progress>=p.target).length;a(Math.round(f/e.length*100))},[e]);const c=(f,p)=>{navigator.vibrate&&navigator.vibrate([20,10,20]),o(f),setTimeout(()=>{t(k=>k.map(b=>b.id===f?{...b,claimed:!0}:b)),r(k=>k+p),o(null)},600)},u=f=>{switch(f){case"Easy":return"#10B981";case"Medium":return"#F59E0B";case"Hard":return"#EF4444";default:return"#6B7280"}},h=()=>{const f=new Date,p=new Date(f);p.setDate(p.getDate()+1),p.setHours(5,0,0,0);const k=p-f,b=Math.floor(k/(1e3*60*60)),j=Math.floor(k%(1e3*60*60)/(1e3*60));return`${b}h ${j}m`};return s.jsxs("div",{className:"quests-screen",children:[s.jsx("style",{jsx:!0,children:`
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
      `}),s.jsxs("div",{className:"animated-bg",children:[s.jsx("div",{className:"floating-icon",children:"🎮"}),s.jsx("div",{className:"floating-icon",children:"🎯"}),s.jsx("div",{className:"floating-icon",children:"🏆"}),s.jsx("div",{className:"floating-icon",children:"⭐"})]}),s.jsxs("div",{className:"header",children:[s.jsx("button",{className:"back-button",onClick:()=>window.history.back(),children:"← Back"}),s.jsxs("div",{className:"coins-display",children:["🪙 ",n]}),s.jsxs("div",{className:"title-section",children:[s.jsx("h1",{className:"main-title",children:"Daily Quests"}),s.jsx("p",{className:"subtitle",children:"Complete challenges, earn rewards!"})]})]}),s.jsxs("div",{className:"daily-progress-card",children:[s.jsxs("div",{className:"progress-header",children:[s.jsx("span",{className:"progress-label",children:"Today's Progress"}),s.jsxs("span",{className:"progress-value",children:[l,"%"]})]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${l}%`}})})]}),s.jsx("div",{className:"quests-list",children:e.map(f=>{const p=Math.min(100,Math.round(f.progress/f.target*100)),k=p===100,b=f.color+"CC";return s.jsxs("div",{className:`quest-card ${k?"completed":""}`,style:{"--quest-color":f.color,"--quest-color-dark":b},children:[s.jsx("div",{className:"quest-accent"}),k&&f.claimed&&s.jsx("div",{className:"completed-checkmark",children:"✓"}),s.jsxs("div",{className:"quest-content",children:[s.jsx("div",{className:`quest-icon-container ${i===f.id?"animating":""}`,children:f.icon}),s.jsxs("div",{className:"quest-details",children:[s.jsxs("div",{className:"quest-header",children:[s.jsx("span",{className:"quest-title",children:f.title}),s.jsx("span",{className:"difficulty-badge",style:{background:`${u(f.difficulty)}20`,color:u(f.difficulty)},children:f.difficulty})]}),s.jsxs("div",{className:"progress-info",children:[s.jsx("div",{className:"mini-progress-bar",children:s.jsx("div",{className:"mini-progress-fill",style:{width:`${p}%`}})}),s.jsxs("div",{className:"progress-text",children:[s.jsxs("span",{className:"progress-numbers",children:[f.progress,"/",f.target]}),s.jsxs("span",{className:"reward-display",children:["🪙 ",f.reward]})]})]})]}),s.jsx("button",{onClick:()=>k&&!f.claimed&&c(f.id,f.reward),disabled:f.claimed,className:`action-button ${f.claimed?"claimed":k?"can-claim":"in-progress"}`,style:!k&&!f.claimed?{"--quest-color":f.color,"--quest-color-dark":b}:{},children:f.claimed?"✓":k?"Claim":"Do it"})]})]},f.id)})}),s.jsxs("div",{className:"timer-card",children:[s.jsx("div",{className:"timer-icon",children:"⏰"}),s.jsx("div",{className:"timer-label",children:"New Quests In"}),s.jsx("div",{className:"timer-value",children:h()})]}),i&&s.jsx("div",{className:"reward-animation",children:"🪙"})]})}function Ug({title:e,subtitle:t,children:n}){const r=ht();return s.jsxs("div",{className:"min-h-full bg-black text-white px-4 pt-12",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:()=>r(-1),className:"px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm",children:"← Back"}),s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"text-base font-semibold leading-tight",children:e}),t&&s.jsx("div",{className:"text-xs text-white/60 leading-tight",children:t})]}),s.jsx("div",{className:"w-[68px]"})]}),n]})}function qg(){const e=ht(),[t,n]=d.useState(!0),[r,i]=d.useState(!0),[o,l]=d.useState(!0);return s.jsxs(Ug,{title:"Settings",subtitle:"Make it yours",children:[s.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10",children:[s.jsx(Vr,{label:"Sound",right:s.jsx(Xo,{on:t,set:n})}),s.jsx(Vr,{label:"Haptics",right:s.jsx(Xo,{on:r,set:i})}),s.jsx(Vr,{label:"Notifications",right:s.jsx(Xo,{on:o,set:l})}),s.jsx(Vr,{label:"Edit Profile",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>e("/profile")}),s.jsx(Vr,{label:"Privacy Policy",right:s.jsx("span",{className:"text-white/60",children:"→"}),onClick:()=>window.open("#","_blank")})]}),s.jsx("button",{className:`mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]`,onClick:()=>alert("Sign out hook here"),children:"Sign out"})]})}function Vr({label:e,right:t,onClick:n}){return s.jsxs("button",{type:"button",onClick:n,className:`w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition`,children:[s.jsx("span",{className:"text-sm font-semibold",children:e}),t]})}function Xo({on:e,set:t}){return s.jsx("span",{onClick:n=>{n.stopPropagation(),t(r=>!r),navigator.vibrate&&navigator.vibrate(10)},className:["inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",e?"bg-lime-400 border-lime-400 justify-end":"bg-white/10 border-white/10 justify-start"].join(" "),role:"switch","aria-checked":e,children:s.jsx("span",{className:["w-5 h-5 rounded-full bg-white",e?"":"bg-white"].join(" ")})})}const Wg={name:"Player",avatar:"wizard",level:1,totalXP:0,coins:0,energy:Ye.MAX_ENERGY,energyRegenAt:null,comboStreak:0,bestCombo:0,totalQuizzes:0,totalCorrect:0,achievements:[],unlockedAvatars:["wizard","knight"],createdAt:Date.now()};function Qg(){const[e,t]=d.useState(()=>{const c=localStorage.getItem(Ye.STORAGE_KEYS.PLAYER);return c?JSON.parse(c):Wg});d.useEffect(()=>{localStorage.setItem(Ye.STORAGE_KEYS.PLAYER,JSON.stringify(e))},[e]),d.useEffect(()=>{if(e.energy<Ye.MAX_ENERGY&&e.energyRegenAt){const c=setInterval(()=>{const u=Date.now();u>=e.energyRegenAt&&t(h=>({...h,energy:Math.min(h.energy+1,Ye.MAX_ENERGY),energyRegenAt:h.energy+1<Ye.MAX_ENERGY?u+Ye.ENERGY_REGEN_TIME:null}))},6e4);return()=>clearInterval(c)}},[e.energy,e.energyRegenAt]);const n=d.useCallback(c=>{t(u=>{const h=u.totalXP+c,f=du(u.totalXP),p=du(h);let k=[...u.unlockedAvatars];return p>f&&Ye.AVATARS.forEach(b=>{b.unlockLevel===p&&!k.includes(b.id)&&k.push(b.id)}),{...u,totalXP:h,level:p,unlockedAvatars:k}})},[]),r=d.useCallback(c=>{t(u=>({...u,coins:u.coins+c}))},[]),i=d.useCallback((c=1)=>e.energy<c?!1:(t(u=>({...u,energy:u.energy-c,energyRegenAt:u.energyRegenAt||Date.now()+Ye.ENERGY_REGEN_TIME})),!0),[e.energy]),o=d.useCallback(c=>{t(u=>{const h=c?u.comboStreak+1:0;return{...u,comboStreak:h,bestCombo:Math.max(u.bestCombo,h)}})},[]),l=d.useCallback(()=>{t(c=>({...c,comboStreak:0}))},[]),a=d.useCallback(c=>{e.unlockedAvatars.includes(c)&&t(u=>({...u,avatar:c}))},[e.unlockedAvatars]);return{player:e,addXP:n,addCoins:r,useEnergy:i,updateCombo:o,resetCombo:l,changeAvatar:a,levelProgress:Sx(e.totalXP)}}const m0=d.createContext(null),p0=()=>{const e=d.useContext(m0);if(!e)throw new Error("useGame must be used within GameProvider");return e};function Hg({children:e}){const t=Qg();return s.jsx(m0.Provider,{value:t,children:e})}function Yg(){return s.jsx(Hg,{children:s.jsx(Ah,{children:s.jsxs(Qe,{element:s.jsx(yx,{}),children:[s.jsx(Qe,{path:"/",element:s.jsx(pu,{})}),s.jsx(Qe,{path:"/play",element:s.jsx(Ux,{})}),s.jsx(Qe,{path:"/play/party",element:s.jsx(fg,{})}),s.jsx(Qe,{path:"/profile",element:s.jsx(mg,{})}),s.jsx(Qe,{path:"/profile/leaderboard",element:s.jsx(pg,{})}),s.jsx(Qe,{path:"/profile/history",element:s.jsx(bg,{})}),s.jsx(Qe,{path:"/profile/rewards",element:s.jsx(Fg,{})}),s.jsx(Qe,{path:"/profile/badges",element:s.jsx(Ig,{})}),s.jsx(Qe,{path:"/profile/achievements",element:s.jsx(Ag,{})}),s.jsx(Qe,{path:"/profile/streaks",element:s.jsx(Og,{})}),s.jsx(Qe,{path:"/profile/quests",element:s.jsx(Bg,{})}),s.jsx(Qe,{path:"/profile/settings",element:s.jsx(qg,{})}),s.jsx(Qe,{path:"/leaders",element:s.jsx(Fh,{to:"/profile/leaderboard",replace:!0})}),s.jsx(Qe,{path:"/quiz/:category",element:s.jsx(sg,{})}),s.jsx(Qe,{path:"*",element:s.jsx(pu,{})})]})})})}Ko.createRoot(document.getElementById("root")).render(s.jsx(rt.StrictMode,{children:s.jsx(ax,{children:s.jsx(Yg,{})})}));export{h0 as c,_u as g};
