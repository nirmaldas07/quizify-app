import{_ as sl,V as ol,X as xo,Y as al,Z as ul,$ as qa,a0 as cl,a1 as ll,a2 as hl,a3 as dl,a4 as Ct,a5 as fl,a6 as ml,a7 as pl,a8 as Kt,a9 as gl,aa as _l,ab as _r,ac as yl,ad as El,ae as Tl,W as vl}from"./index-6f358801.js";var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ie,Ba;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(E,T,w){for(var g=Array(arguments.length-2),Qt=2;Qt<arguments.length;Qt++)g[Qt-2]=arguments[Qt];return p.prototype[T].apply(E,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,_){_||(_=0);var E=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)E[T]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(T=0;16>T;++T)E[T]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],T=v.g[2];var w=v.g[3],g=p+(w^_&(T^w))+E[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=w+(T^p&(_^T))+E[1]+3905402710&4294967295,w=p+(g<<12&4294967295|g>>>20),g=T+(_^w&(p^_))+E[2]+606105819&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(p^T&(w^p))+E[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(w^_&(T^w))+E[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(T^p&(_^T))+E[5]+1200080426&4294967295,w=p+(g<<12&4294967295|g>>>20),g=T+(_^w&(p^_))+E[6]+2821735955&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(p^T&(w^p))+E[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(w^_&(T^w))+E[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(T^p&(_^T))+E[9]+2336552879&4294967295,w=p+(g<<12&4294967295|g>>>20),g=T+(_^w&(p^_))+E[10]+4294925233&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(p^T&(w^p))+E[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(w^_&(T^w))+E[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(T^p&(_^T))+E[13]+4254626195&4294967295,w=p+(g<<12&4294967295|g>>>20),g=T+(_^w&(p^_))+E[14]+2792965006&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(p^T&(w^p))+E[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=p+(T^w&(_^T))+E[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(p^_))+E[6]+3225465664&4294967295,w=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(w^p))+E[11]+643717713&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(T^w))+E[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^w&(_^T))+E[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(p^_))+E[10]+38016083&4294967295,w=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(w^p))+E[15]+3634488961&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(T^w))+E[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^w&(_^T))+E[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(p^_))+E[14]+3275163606&4294967295,w=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(w^p))+E[3]+4107603335&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(T^w))+E[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(T^w&(_^T))+E[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(p^_))+E[2]+4243563512&4294967295,w=p+(g<<9&4294967295|g>>>23),g=T+(p^_&(w^p))+E[7]+1735328473&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(T^w))+E[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=p+(_^T^w)+E[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^T)+E[8]+2272392833&4294967295,w=p+(g<<11&4294967295|g>>>21),g=T+(w^p^_)+E[11]+1839030562&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^p)+E[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^w)+E[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^T)+E[4]+1272893353&4294967295,w=p+(g<<11&4294967295|g>>>21),g=T+(w^p^_)+E[7]+4139469664&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^p)+E[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^w)+E[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^T)+E[0]+3936430074&4294967295,w=p+(g<<11&4294967295|g>>>21),g=T+(w^p^_)+E[3]+3572445317&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^p)+E[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(_^T^w)+E[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^T)+E[12]+3873151461&4294967295,w=p+(g<<11&4294967295|g>>>21),g=T+(w^p^_)+E[15]+530742520&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^p)+E[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=p+(T^(_|~w))+E[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~T))+E[7]+1126891415&4294967295,w=p+(g<<10&4294967295|g>>>22),g=T+(p^(w|~_))+E[14]+2878612391&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~p))+E[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~w))+E[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~T))+E[3]+2399980690&4294967295,w=p+(g<<10&4294967295|g>>>22),g=T+(p^(w|~_))+E[10]+4293915773&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~p))+E[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~w))+E[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~T))+E[15]+4264355552&4294967295,w=p+(g<<10&4294967295|g>>>22),g=T+(p^(w|~_))+E[6]+2734768916&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~p))+E[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=p+(T^(_|~w))+E[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~T))+E[11]+3174756917&4294967295,w=p+(g<<10&4294967295|g>>>22),g=T+(p^(w|~_))+E[2]+718787259&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~p))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+w&4294967295}n.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,E=this.B,T=this.h,w=0;w<p;){if(T==0)for(;w<=_;)i(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<p;)if(E[T++]=v.charCodeAt(w++),T==this.blockSize){i(this,E),T=0;break}}else for(;w<p;)if(E[T++]=v[w++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=p},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var E=0;32>E;E+=8)v[_++]=this.g[p]>>>E&255;return v};function o(v,p){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function a(v,p){this.h=p;for(var _=[],E=!0,T=v.length-1;0<=T;T--){var w=v[T]|0;E&&w==p||(_[T]=w,E=!1)}this.g=_}var l={};function h(v){return-128<=v&&128>v?o(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return y;if(0>v)return b(d(-v));for(var p=[],_=1,E=0;v>=_;E++)p[E]=v/_|0,_*=4294967296;return new a(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return b(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),E=y,T=0;T<v.length;T+=8){var w=Math.min(8,v.length-T),g=parseInt(v.substring(T,T+w),p);8>w?(w=d(Math.pow(p,w)),E=E.j(w).add(d(g))):(E=E.j(_),E=E.add(d(g)))}return E}var y=h(0),A=h(1),S=h(16777216);r=a.prototype,r.m=function(){if(x(this))return-b(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var E=this.i(_);v+=(0<=E?E:4294967296+E)*p,p*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(x(this))return"-"+b(this).toString(v);for(var p=d(Math.pow(v,6)),_=this,E="";;){var T=ot(_,p).g;_=B(_,T.j(p));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=T,D(_))return w+E;for(;6>w.length;)w="0"+w;E=w+E}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}r.l=function(v){return v=B(this,v),x(v)?-1:D(v)?0:1};function b(v){for(var p=v.g.length,_=[],E=0;E<p;E++)_[E]=~v.g[E];return new a(_,~v.h).add(A)}r.abs=function(){return x(this)?b(this):this},r.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],E=0,T=0;T<=p;T++){var w=E+(this.i(T)&65535)+(v.i(T)&65535),g=(w>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);E=g>>>16,w&=65535,g&=65535,_[T]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function B(v,p){return v.add(b(p))}r.j=function(v){if(D(this)||D(v))return y;if(x(this))return x(v)?b(this).j(b(v)):b(b(this).j(v));if(x(v))return b(this.j(b(v)));if(0>this.l(S)&&0>v.l(S))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],E=0;E<2*p;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<v.g.length;T++){var w=this.i(E)>>>16,g=this.i(E)&65535,Qt=v.i(T)>>>16,Xe=v.i(T)&65535;_[2*E+2*T]+=g*Xe,$(_,2*E+2*T),_[2*E+2*T+1]+=w*Xe,$(_,2*E+2*T+1),_[2*E+2*T+1]+=g*Qt,$(_,2*E+2*T+1),_[2*E+2*T+2]+=w*Qt,$(_,2*E+2*T+2)}for(E=0;E<p;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=p;E<2*p;E++)_[E]=0;return new a(_,0)};function $(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function z(v,p){this.g=v,this.h=p}function ot(v,p){if(D(p))throw Error("division by zero");if(D(v))return new z(y,y);if(x(v))return p=ot(b(v),p),new z(b(p.g),b(p.h));if(x(p))return p=ot(v,b(p)),new z(b(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=A,E=p;0>=E.l(v);)_=$t(_),E=$t(E);var T=ut(_,1),w=ut(E,1);for(E=ut(E,2),_=ut(_,2);!D(E);){var g=w.add(E);0>=g.l(v)&&(T=T.add(_),w=g),E=ut(E,1),_=ut(_,1)}return p=B(v,T.j(p)),new z(T,p)}for(T=y;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),w=d(_),g=w.j(p);x(g)||0<g.l(v);)_-=E,w=d(_),g=w.j(p);D(w)&&(w=A),T=T.add(w),v=B(v,g)}return new z(T,v)}r.A=function(v){return ot(this,v).h},r.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)&v.i(E);return new a(_,this.h&v.h)},r.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)|v.i(E);return new a(_,this.h|v.h)},r.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],E=0;E<p;E++)_[E]=this.i(E)^v.i(E);return new a(_,this.h^v.h)};function $t(v){for(var p=v.g.length+1,_=[],E=0;E<p;E++)_[E]=v.i(E)<<1|v.i(E-1)>>>31;return new a(_,v.h)}function ut(v,p){var _=p>>5;p%=32;for(var E=v.g.length-_,T=[],w=0;w<E;w++)T[w]=0<p?v.i(w+_)>>>p|v.i(w+_+1)<<32-p:v.i(w+_);return new a(T,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Ba=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ie=a}).apply(typeof Fo<"u"?Fo:typeof self<"u"?self:typeof window<"u"?window:{});var sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ja,pn,$a,hr,Ci,Qa,Ga,za;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,c){return s==Array.prototype||s==Object.prototype||(s[u]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof sr=="object"&&sr];for(var u=0;u<s.length;++u){var c=s[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var n=e(this);function i(s,u){if(u)t:{var c=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in c))break t;c=c[I]}s=s[s.length-1],f=c[s],u=u(f),u!=f&&u!=null&&t(c,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var c=0,f=!1,I={next:function(){if(!f&&c<s.length){var R=c++;return{value:u(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function d(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function m(s,u,c){return s.call.apply(s.bind,arguments)}function y(s,u,c){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(u,I)}}return function(){return s.apply(u,arguments)}}function A(s,u,c){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,A.apply(null,arguments)}function S(s,u){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function D(s,u){function c(){}c.prototype=u.prototype,s.aa=u.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(f,I,R){for(var k=Array(arguments.length-2),W=2;W<arguments.length;W++)k[W-2]=arguments[W];return u.prototype[I].apply(f,k)}}function x(s){const u=s.length;if(0<u){const c=Array(u);for(let f=0;f<u;f++)c[f]=s[f];return c}return[]}function b(s,u){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const I=s.length||0,R=f.length||0;s.length=I+R;for(let k=0;k<R;k++)s[I+k]=f[k]}else s.push(f)}}class B{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(s){return/^[\s\xa0]*$/.test(s)}function z(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function ot(s){return ot[" "](s),s}ot[" "]=function(){};var $t=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ut(s,u,c){for(const f in s)u.call(c,s[f],f,s)}function v(s,u){for(const c in s)u.call(void 0,s[c],c,s)}function p(s){const u={};for(const c in s)u[c]=s[c];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(s,u){let c,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(c in f)s[c]=f[c];for(let R=0;R<_.length;R++)c=_[R],Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}}function T(s){var u=1;s=s.split(":");const c=[];for(;0<u&&s.length;)c.push(s.shift()),u--;return s.length&&c.push(s.join(":")),c}function w(s){l.setTimeout(()=>{throw s},0)}function g(){var s=Jr;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class Qt{constructor(){this.h=this.g=null}add(u,c){const f=Xe.get();f.set(u,c),this.h?this.h.next=f:this.g=f,this.h=f}}var Xe=new B(()=>new Rc,s=>s.reset());class Rc{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Ye,Je=!1,Jr=new Qt,Ns=()=>{const s=l.Promise.resolve(void 0);Ye=()=>{s.then(Pc)}};var Pc=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){w(c)}var u=Xe;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}Je=!1};function Yt(){this.s=this.s,this.C=this.C}Yt.prototype.s=!1,Yt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Yt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var Vc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,u),l.removeEventListener("test",c,u)}catch{}return s}();function Ze(s,u){if(ft.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if($t){t:{try{ot(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else c=="mouseover"?u=s.fromElement:c=="mouseout"&&(u=s.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Sc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ze.aa.h.call(this)}}D(Ze,ft);var Sc={2:"touch",3:"pen",4:"mouse"};Ze.prototype.h=function(){Ze.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var tn="closure_listenable_"+(1e6*Math.random()|0),Cc=0;function bc(s,u,c,f,I){this.listener=s,this.proxy=null,this.src=u,this.type=c,this.capture=!!f,this.ha=I,this.key=++Cc,this.da=this.fa=!1}function Bn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function jn(s){this.src=s,this.g={},this.h=0}jn.prototype.add=function(s,u,c,f,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var k=ti(s,u,f,I);return-1<k?(u=s[k],c||(u.fa=!1)):(u=new bc(u,this.src,R,!!f,I),u.fa=c,s.push(u)),u};function Zr(s,u){var c=u.type;if(c in s.g){var f=s.g[c],I=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(Bn(u),s.g[c].length==0&&(delete s.g[c],s.h--))}}function ti(s,u,c,f){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==u&&R.capture==!!c&&R.ha==f)return I}return-1}var ei="closure_lm_"+(1e6*Math.random()|0),ni={};function ks(s,u,c,f,I){if(f&&f.once)return Fs(s,u,c,f,I);if(Array.isArray(u)){for(var R=0;R<u.length;R++)ks(s,u[R],c,f,I);return null}return c=oi(c),s&&s[tn]?s.K(u,c,d(f)?!!f.capture:!!f,I):xs(s,u,c,!1,f,I)}function xs(s,u,c,f,I,R){if(!u)throw Error("Invalid event type");var k=d(I)?!!I.capture:!!I,W=ii(s);if(W||(s[ei]=W=new jn(s)),c=W.add(u,c,f,k,R),c.proxy)return c;if(f=Dc(),c.proxy=f,f.src=s,f.listener=c,s.addEventListener)Vc||(I=k),I===void 0&&(I=!1),s.addEventListener(u.toString(),f,I);else if(s.attachEvent)s.attachEvent(Ms(u.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Dc(){function s(c){return u.call(s.src,s.listener,c)}const u=Nc;return s}function Fs(s,u,c,f,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Fs(s,u[R],c,f,I);return null}return c=oi(c),s&&s[tn]?s.L(u,c,d(f)?!!f.capture:!!f,I):xs(s,u,c,!0,f,I)}function Os(s,u,c,f,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)Os(s,u[R],c,f,I);else f=d(f)?!!f.capture:!!f,c=oi(c),s&&s[tn]?(s=s.i,u=String(u).toString(),u in s.g&&(R=s.g[u],c=ti(R,c,f,I),-1<c&&(Bn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete s.g[u],s.h--)))):s&&(s=ii(s))&&(u=s.g[u.toString()],s=-1,u&&(s=ti(u,c,f,I)),(c=-1<s?u[s]:null)&&ri(c))}function ri(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[tn])Zr(u.i,s);else{var c=s.type,f=s.proxy;u.removeEventListener?u.removeEventListener(c,f,s.capture):u.detachEvent?u.detachEvent(Ms(c),f):u.addListener&&u.removeListener&&u.removeListener(f),(c=ii(u))?(Zr(c,s),c.h==0&&(c.src=null,u[ei]=null)):Bn(s)}}}function Ms(s){return s in ni?ni[s]:ni[s]="on"+s}function Nc(s,u){if(s.da)s=!0;else{u=new Ze(u,this);var c=s.listener,f=s.ha||s.src;s.fa&&ri(s),s=c.call(f,u)}return s}function ii(s){return s=s[ei],s instanceof jn?s:null}var si="__closure_events_fn_"+(1e9*Math.random()>>>0);function oi(s){return typeof s=="function"?s:(s[si]||(s[si]=function(u){return s.handleEvent(u)}),s[si])}function mt(){Yt.call(this),this.i=new jn(this),this.M=this,this.F=null}D(mt,Yt),mt.prototype[tn]=!0,mt.prototype.removeEventListener=function(s,u,c,f){Os(this,s,u,c,f)};function Tt(s,u){var c,f=s.F;if(f)for(c=[];f;f=f.F)c.push(f);if(s=s.M,f=u.type||u,typeof u=="string")u=new ft(u,s);else if(u instanceof ft)u.target=u.target||s;else{var I=u;u=new ft(f,s),E(u,I)}if(I=!0,c)for(var R=c.length-1;0<=R;R--){var k=u.g=c[R];I=$n(k,f,!0,u)&&I}if(k=u.g=s,I=$n(k,f,!0,u)&&I,I=$n(k,f,!1,u)&&I,c)for(R=0;R<c.length;R++)k=u.g=c[R],I=$n(k,f,!1,u)&&I}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var c=s.g[u],f=0;f<c.length;f++)Bn(c[f]);delete s.g[u],s.h--}}this.F=null},mt.prototype.K=function(s,u,c,f){return this.i.add(String(s),u,!1,c,f)},mt.prototype.L=function(s,u,c,f){return this.i.add(String(s),u,!0,c,f)};function $n(s,u,c,f){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var k=u[R];if(k&&!k.da&&k.capture==c){var W=k.listener,ct=k.ha||k.src;k.fa&&Zr(s.i,k),I=W.call(ct,f)!==!1&&I}}return I&&!f.defaultPrevented}function Ls(s,u,c){if(typeof s=="function")c&&(s=A(s,c));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(s,u||0)}function Us(s){s.g=Ls(()=>{s.g=null,s.i&&(s.i=!1,Us(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class kc extends Yt{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Us(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function en(s){Yt.call(this),this.h=s,this.g={}}D(en,Yt);var qs=[];function Bs(s){ut(s.g,function(u,c){this.g.hasOwnProperty(c)&&ri(u)},s),s.g={}}en.prototype.N=function(){en.aa.N.call(this),Bs(this)},en.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ai=l.JSON.stringify,xc=l.JSON.parse,Fc=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function ui(){}ui.prototype.h=null;function js(s){return s.h||(s.h=s.i())}function $s(){}var nn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ci(){ft.call(this,"d")}D(ci,ft);function li(){ft.call(this,"c")}D(li,ft);var pe={},Qs=null;function Qn(){return Qs=Qs||new mt}pe.La="serverreachability";function Gs(s){ft.call(this,pe.La,s)}D(Gs,ft);function rn(s){const u=Qn();Tt(u,new Gs(u))}pe.STAT_EVENT="statevent";function zs(s,u){ft.call(this,pe.STAT_EVENT,s),this.stat=u}D(zs,ft);function vt(s){const u=Qn();Tt(u,new zs(u,s))}pe.Ma="timingevent";function Ks(s,u){ft.call(this,pe.Ma,s),this.size=u}D(Ks,ft);function sn(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},u)}function on(){this.g=!0}on.prototype.xa=function(){this.g=!1};function Oc(s,u,c,f,I,R){s.info(function(){if(s.g)if(R)for(var k="",W=R.split("&"),ct=0;ct<W.length;ct++){var Q=W[ct].split("=");if(1<Q.length){var pt=Q[0];Q=Q[1];var gt=pt.split("_");k=2<=gt.length&&gt[1]=="type"?k+(pt+"="+Q+"&"):k+(pt+"=redacted&")}}else k=null;else k=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+u+`
`+c+`
`+k})}function Mc(s,u,c,f,I,R,k){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+u+`
`+c+`
`+R+" "+k})}function Se(s,u,c,f){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+Uc(s,c)+(f?" "+f:"")})}function Lc(s,u){s.info(function(){return"TIMEOUT: "+u})}on.prototype.info=function(){};function Uc(s,u){if(!s.g)return u;if(!u)return null;try{var c=JSON.parse(u);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var f=c[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var k=1;k<I.length;k++)I[k]=""}}}}return ai(c)}catch{return u}}var Gn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ws={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},hi;function zn(){}D(zn,ui),zn.prototype.g=function(){return new XMLHttpRequest},zn.prototype.i=function(){return{}},hi=new zn;function Jt(s,u,c,f){this.j=s,this.i=u,this.l=c,this.R=f||1,this.U=new en(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hs}function Hs(){this.i=null,this.g="",this.h=!1}var Xs={},di={};function fi(s,u,c){s.L=1,s.v=Xn(Gt(u)),s.m=c,s.P=!0,Ys(s,null)}function Ys(s,u){s.F=Date.now(),Kn(s),s.A=Gt(s.v);var c=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ho(c.i,"t",f),s.C=0,c=s.j.J,s.h=new Hs,s.g=bo(s.j,c?u:null,!s.m),0<s.O&&(s.M=new kc(A(s.Y,s,s.g),s.O)),u=s.U,c=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(qs[0]=I.toString()),I=qs);for(var R=0;R<I.length;R++){var k=ks(c,I[R],f||u.handleEvent,!1,u.h||u);if(!k)break;u.g[k.key]=k}u=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),rn(),Oc(s.i,s.u,s.A,s.l,s.R,s.m)}Jt.prototype.ca=function(s){s=s.target;const u=this.M;u&&zt(s)==3?u.j():this.Y(s)},Jt.prototype.Y=function(s){try{if(s==this.g)t:{const gt=zt(this.g);var u=this.g.Ba();const De=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Eo(this.g)))){this.J||gt!=4||u==7||(u==8||0>=De?rn(3):rn(2)),mi(this);var c=this.g.Z();this.X=c;e:if(Js(this)){var f=Eo(this.g);s="";var I=f.length,R=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ge(this),an(this);var k="";break e}this.h.i=new l.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,s+=this.h.i.decode(f[u],{stream:!(R&&u==I-1)});f.length=0,this.h.g+=s,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=c==200,Mc(this.i,this.u,this.A,this.l,this.R,gt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ct=this.g;if((W=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(W)){var Q=W;break e}}Q=null}if(c=Q)Se(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pi(this,c);else{this.o=!1,this.s=3,vt(12),ge(this),an(this);break t}}if(this.P){c=!0;let xt;for(;!this.J&&this.C<k.length;)if(xt=qc(this,k),xt==di){gt==4&&(this.s=4,vt(14),c=!1),Se(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==Xs){this.s=4,vt(15),Se(this.i,this.l,k,"[Invalid Chunk]"),c=!1;break}else Se(this.i,this.l,xt,null),pi(this,xt);if(Js(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||k.length!=0||this.h.h||(this.s=1,vt(16),c=!1),this.o=this.o&&c,!c)Se(this.i,this.l,k,"[Invalid Chunked Response]"),ge(this),an(this);else if(0<k.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),vi(pt),pt.M=!0,vt(11))}}else Se(this.i,this.l,k,null),pi(this,k);gt==4&&ge(this),this.o&&!this.J&&(gt==4?Po(this.j,this):(this.o=!1,Kn(this)))}else rl(this.g),c==400&&0<k.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),ge(this),an(this)}}}catch{}finally{}};function Js(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function qc(s,u){var c=s.C,f=u.indexOf(`
`,c);return f==-1?di:(c=Number(u.substring(c,f)),isNaN(c)?Xs:(f+=1,f+c>u.length?di:(u=u.slice(f,f+c),s.C=f+c,u)))}Jt.prototype.cancel=function(){this.J=!0,ge(this)};function Kn(s){s.S=Date.now()+s.I,Zs(s,s.I)}function Zs(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=sn(A(s.ba,s),u)}function mi(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Jt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Lc(this.i,this.A),this.L!=2&&(rn(),vt(17)),ge(this),this.s=2,an(this)):Zs(this,this.S-s)};function an(s){s.j.G==0||s.J||Po(s.j,s)}function ge(s){mi(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,Bs(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function pi(s,u){try{var c=s.j;if(c.G!=0&&(c.g==s||gi(c.h,s))){if(!s.K&&gi(c.h,s)&&c.G==3){try{var f=c.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)nr(c),tr(c);else break t;Ti(c),vt(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=sn(A(c.Za,c),6e3));if(1>=no(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ye(c,11)}else if((s.K||c.g==s)&&nr(c),!$(u))for(I=c.Da.g.parse(u),u=0;u<I.length;u++){let Q=I[u];if(c.T=Q[0],Q=Q[1],c.G==2)if(Q[0]=="c"){c.K=Q[1],c.ia=Q[2];const pt=Q[3];pt!=null&&(c.la=pt,c.j.info("VER="+c.la));const gt=Q[4];gt!=null&&(c.Aa=gt,c.j.info("SVER="+c.Aa));const De=Q[5];De!=null&&typeof De=="number"&&0<De&&(f=1.5*De,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const xt=s.g;if(xt){const ir=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ir){var R=f.h;R.g||ir.indexOf("spdy")==-1&&ir.indexOf("quic")==-1&&ir.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(_i(R,R.h),R.h=null))}if(f.D){const Ii=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ii&&(f.ya=Ii,H(f.I,f.D,Ii))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var k=s;if(f.qa=Co(f,f.J?f.ia:null,f.W),k.K){ro(f.h,k);var W=k,ct=f.L;ct&&(W.I=ct),W.B&&(mi(W),Kn(W)),f.g=k}else Ao(f);0<c.i.length&&er(c)}else Q[0]!="stop"&&Q[0]!="close"||ye(c,7);else c.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?ye(c,7):Ei(c):Q[0]!="noop"&&c.l&&c.l.ta(Q),c.v=0)}}rn(4)}catch{}}var Bc=class{constructor(s,u){this.g=s,this.map=u}};function to(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function no(s){return s.h?1:s.g?s.g.size:0}function gi(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function _i(s,u){s.g?s.g.add(u):s.h=u}function ro(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}to.prototype.cancel=function(){if(this.i=io(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function io(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const c of s.g.values())u=u.concat(c.D);return u}return x(s.i)}function jc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var u=[],c=s.length,f=0;f<c;f++)u.push(s[f]);return u}u=[],c=0;for(f in s)u[c++]=s[f];return u}function $c(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var u=[];s=s.length;for(var c=0;c<s;c++)u.push(c);return u}u=[],c=0;for(const f in s)u[c++]=f;return u}}}function so(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var c=$c(s),f=jc(s),I=f.length,R=0;R<I;R++)u.call(void 0,f[R],c&&c[R],s)}var oo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qc(s,u){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var f=s[c].indexOf("="),I=null;if(0<=f){var R=s[c].substring(0,f);I=s[c].substring(f+1)}else R=s[c];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function _e(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof _e){this.h=s.h,Wn(this,s.j),this.o=s.o,this.g=s.g,Hn(this,s.s),this.l=s.l;var u=s.i,c=new ln;c.i=u.i,u.g&&(c.g=new Map(u.g),c.h=u.h),ao(this,c),this.m=s.m}else s&&(u=String(s).match(oo))?(this.h=!1,Wn(this,u[1]||"",!0),this.o=un(u[2]||""),this.g=un(u[3]||"",!0),Hn(this,u[4]),this.l=un(u[5]||"",!0),ao(this,u[6]||"",!0),this.m=un(u[7]||"")):(this.h=!1,this.i=new ln(null,this.h))}_e.prototype.toString=function(){var s=[],u=this.j;u&&s.push(cn(u,uo,!0),":");var c=this.g;return(c||u=="file")&&(s.push("//"),(u=this.o)&&s.push(cn(u,uo,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(cn(c,c.charAt(0)=="/"?Kc:zc,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",cn(c,Hc)),s.join("")};function Gt(s){return new _e(s)}function Wn(s,u,c){s.j=c?un(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function Hn(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function ao(s,u,c){u instanceof ln?(s.i=u,Xc(s.i,s.h)):(c||(u=cn(u,Wc)),s.i=new ln(u,s.h))}function H(s,u,c){s.i.set(u,c)}function Xn(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function un(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function cn(s,u,c){return typeof s=="string"?(s=encodeURI(s).replace(u,Gc),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Gc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var uo=/[#\/\?@]/g,zc=/[#\?:]/g,Kc=/[#\?]/g,Wc=/[#\?@]/g,Hc=/#/g;function ln(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function Zt(s){s.g||(s.g=new Map,s.h=0,s.i&&Qc(s.i,function(u,c){s.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}r=ln.prototype,r.add=function(s,u){Zt(this),this.i=null,s=Ce(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(u),this.h+=1,this};function co(s,u){Zt(s),u=Ce(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function lo(s,u){return Zt(s),u=Ce(s,u),s.g.has(u)}r.forEach=function(s,u){Zt(this),this.g.forEach(function(c,f){c.forEach(function(I){s.call(u,I,f,this)},this)},this)},r.na=function(){Zt(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),c=[];for(let f=0;f<u.length;f++){const I=s[f];for(let R=0;R<I.length;R++)c.push(u[f])}return c},r.V=function(s){Zt(this);let u=[];if(typeof s=="string")lo(this,s)&&(u=u.concat(this.g.get(Ce(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)u=u.concat(s[c])}return u},r.set=function(s,u){return Zt(this),this.i=null,s=Ce(this,s),lo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},r.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function ho(s,u,c){co(s,u),0<c.length&&(s.i=null,s.g.set(Ce(s,u),x(c)),s.h+=c.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var c=0;c<u.length;c++){var f=u[c];const R=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var I=R;k[f]!==""&&(I+="="+encodeURIComponent(String(k[f]))),s.push(I)}}return this.i=s.join("&")};function Ce(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function Xc(s,u){u&&!s.j&&(Zt(s),s.i=null,s.g.forEach(function(c,f){var I=f.toLowerCase();f!=I&&(co(this,f),ho(this,I,c))},s)),s.j=u}function Yc(s,u){const c=new on;if(l.Image){const f=new Image;f.onload=S(te,c,"TestLoadImage: loaded",!0,u,f),f.onerror=S(te,c,"TestLoadImage: error",!1,u,f),f.onabort=S(te,c,"TestLoadImage: abort",!1,u,f),f.ontimeout=S(te,c,"TestLoadImage: timeout",!1,u,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else u(!1)}function Jc(s,u){const c=new on,f=new AbortController,I=setTimeout(()=>{f.abort(),te(c,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?te(c,"TestPingServer: ok",!0,u):te(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),te(c,"TestPingServer: error",!1,u)})}function te(s,u,c,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(c)}catch{}}function Zc(){this.g=new Fc}function tl(s,u,c){const f=c||"";try{so(s,function(I,R){let k=I;d(I)&&(k=ai(I)),u.push(f+R+"="+encodeURIComponent(k))})}catch(I){throw u.push(f+"type="+encodeURIComponent("_badmap")),I}}function Yn(s){this.l=s.Ub||null,this.j=s.eb||!1}D(Yn,ui),Yn.prototype.g=function(){return new Jn(this.l,this.j)},Yn.prototype.i=function(s){return function(){return s}}({});function Jn(s,u){mt.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Jn,mt),r=Jn.prototype,r.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,dn(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hn(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function fo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?hn(this):dn(this),this.readyState==3&&fo(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,hn(this))},r.Qa=function(s){this.g&&(this.response=s,hn(this))},r.ga=function(){this.g&&hn(this)};function hn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,dn(s)}r.setRequestHeader=function(s,u){this.u.append(s,u)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=u.next();return s.join(`\r
`)};function dn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function mo(s){let u="";return ut(s,function(c,f){u+=f,u+=":",u+=c,u+=`\r
`}),u}function yi(s,u,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=mo(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):H(s,u,c))}function J(s){mt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(J,mt);var el=/^https?$/i,nl=["POST","PUT"];r=J.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,u,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():hi.g(),this.v=this.o?js(this.o):js(hi),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(R){po(this,R);return}if(s=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)c.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())c.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),I=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(nl,u,void 0))||f||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,k]of c)this.g.setRequestHeader(R,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yo(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){po(this,R)}};function po(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,go(s),Zn(s)}function go(s){s.A||(s.A=!0,Tt(s,"complete"),Tt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Tt(this,"complete"),Tt(this,"abort"),Zn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zn(this,!0)),J.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?_o(this):this.bb())},r.bb=function(){_o(this)};function _o(s){if(s.h&&typeof a<"u"&&(!s.v[1]||zt(s)!=4||s.Z()!=2)){if(s.u&&zt(s)==4)Ls(s.Ea,0,s);else if(Tt(s,"readystatechange"),zt(s)==4){s.h=!1;try{const k=s.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var f;if(f=k===0){var I=String(s.D).match(oo)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),f=!el.test(I?I.toLowerCase():"")}c=f}if(c)Tt(s,"complete"),Tt(s,"success");else{s.m=6;try{var R=2<zt(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",go(s)}}finally{Zn(s)}}}}function Zn(s,u){if(s.g){yo(s);const c=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||Tt(s,"ready");try{c.onreadystatechange=f}catch{}}}function yo(s){s.I&&(l.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function zt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),xc(u)}};function Eo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function rl(s){const u={};s=(s.g&&2<=zt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if($(s[f]))continue;var c=T(s[f]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=u[I]||[];u[I]=R,R.push(c)}v(u,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function fn(s,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||u}function To(s){this.Aa=0,this.i=[],this.j=new on,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=fn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=fn("baseRetryDelayMs",5e3,s),this.cb=fn("retryDelaySeedMs",1e4,s),this.Wa=fn("forwardChannelMaxRetries",2,s),this.wa=fn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new to(s&&s.concurrentRequestLimit),this.Da=new Zc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=To.prototype,r.la=8,r.G=1,r.connect=function(s,u,c,f){vt(0),this.W=s,this.H=u||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=Co(this,null,this.W),er(this)};function Ei(s){if(vo(s),s.G==3){var u=s.U++,c=Gt(s.I);if(H(c,"SID",s.K),H(c,"RID",u),H(c,"TYPE","terminate"),mn(s,c),u=new Jt(s,s.j,u),u.L=2,u.v=Xn(Gt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=u.v,c=!0),c||(u.g=bo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Kn(u)}So(s)}function tr(s){s.g&&(vi(s),s.g.cancel(),s.g=null)}function vo(s){tr(s),s.u&&(l.clearTimeout(s.u),s.u=null),nr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function er(s){if(!eo(s.h)&&!s.s){s.s=!0;var u=s.Ga;Ye||Ns(),Je||(Ye(),Je=!0),Jr.add(u,s),s.B=0}}function il(s,u){return no(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=sn(A(s.Ga,s,u),Vo(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Jt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=p(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=wo(this,I,u),c=Gt(this.I),H(c,"RID",s),H(c,"CVER",22),this.D&&H(c,"X-HTTP-Session-Id",this.D),mn(this,c),R&&(this.O?u="headers="+encodeURIComponent(String(mo(R)))+"&"+u:this.m&&yi(c,this.m,R)),_i(this.h,I),this.Ua&&H(c,"TYPE","init"),this.P?(H(c,"$req",u),H(c,"SID","null"),I.T=!0,fi(I,c,null)):fi(I,c,u),this.G=2}}else this.G==3&&(s?Io(this,s):this.i.length==0||eo(this.h)||Io(this))};function Io(s,u){var c;u?c=u.l:c=s.U++;const f=Gt(s.I);H(f,"SID",s.K),H(f,"RID",c),H(f,"AID",s.T),mn(s,f),s.m&&s.o&&yi(f,s.m,s.o),c=new Jt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),u&&(s.i=u.D.concat(s.i)),u=wo(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),_i(s.h,c),fi(c,f,u)}function mn(s,u){s.H&&ut(s.H,function(c,f){H(u,f,c)}),s.l&&so({},function(c,f){H(u,f,c)})}function wo(s,u,c){c=Math.min(s.i.length,c);var f=s.l?A(s.l.Na,s.l,s):null;t:{var I=s.i;let R=-1;for(;;){const k=["count="+c];R==-1?0<c?(R=I[0].g,k.push("ofs="+R)):R=0:k.push("ofs="+R);let W=!0;for(let ct=0;ct<c;ct++){let Q=I[ct].g;const pt=I[ct].map;if(Q-=R,0>Q)R=Math.max(0,I[ct].g-100),W=!1;else try{tl(pt,k,"req"+Q+"_")}catch{f&&f(pt)}}if(W){f=k.join("&");break t}}}return s=s.i.splice(0,c),u.D=s,f}function Ao(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;Ye||Ns(),Je||(Ye(),Je=!0),Jr.add(u,s),s.v=0}}function Ti(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=sn(A(s.Fa,s),Vo(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Ro(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=sn(A(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),tr(this),Ro(this))};function vi(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Ro(s){s.g=new Jt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=Gt(s.qa);H(u,"RID","rpc"),H(u,"SID",s.K),H(u,"AID",s.T),H(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(u,"TO",s.ja),H(u,"TYPE","xmlhttp"),mn(s,u),s.m&&s.o&&yi(u,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Xn(Gt(u)),c.m=null,c.P=!0,Ys(c,s)}r.Za=function(){this.C!=null&&(this.C=null,tr(this),Ti(this),vt(19))};function nr(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Po(s,u){var c=null;if(s.g==u){nr(s),vi(s),s.g=null;var f=2}else if(gi(s.h,u))c=u.D,ro(s.h,u),f=1;else return;if(s.G!=0){if(u.o)if(f==1){c=u.m?u.m.length:0,u=Date.now()-u.F;var I=s.B;f=Qn(),Tt(f,new Ks(f,c)),er(s)}else Ao(s);else if(I=u.s,I==3||I==0&&0<u.X||!(f==1&&il(s,u)||f==2&&Ti(s)))switch(c&&0<c.length&&(u=s.h,u.i=u.i.concat(c)),I){case 1:ye(s,5);break;case 4:ye(s,10);break;case 3:ye(s,6);break;default:ye(s,2)}}}function Vo(s,u){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*u}function ye(s,u){if(s.j.info("Error code "+u),u==2){var c=A(s.fb,s),f=s.Xa;const I=!f;f=new _e(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Wn(f,"https"),Xn(f),I?Yc(f.toString(),c):Jc(f.toString(),c)}else vt(2);s.G=0,s.l&&s.l.sa(u),So(s),vo(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function So(s){if(s.G=0,s.ka=[],s.l){const u=io(s.h);(u.length!=0||s.i.length!=0)&&(b(s.ka,u),b(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function Co(s,u,c){var f=c instanceof _e?Gt(c):new _e(c);if(f.g!="")u&&(f.g=u+"."+f.g),Hn(f,f.s);else{var I=l.location;f=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new _e(null);f&&Wn(R,f),u&&(R.g=u),I&&Hn(R,I),c&&(R.l=c),f=R}return c=s.D,u=s.ya,c&&u&&H(f,c,u),H(f,"VER",s.la),mn(s,f),f}function bo(s,u,c){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new J(new Yn({eb:c})):new J(s.pa),u.Ha(s.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Do(){}r=Do.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function rr(){}rr.prototype.g=function(s,u){return new Pt(s,u)};function Pt(s,u){mt.call(this),this.g=new To(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!$(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new be(this)}D(Pt,mt),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){Ei(this.g)},Pt.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=ai(s),s=c);u.i.push(new Bc(u.Ya++,s)),u.G==3&&er(u)},Pt.prototype.N=function(){this.g.l=null,delete this.j,Ei(this.g),delete this.g,Pt.aa.N.call(this)};function No(s){ci.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const c in u){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}D(No,ci);function ko(){li.call(this),this.status=1}D(ko,li);function be(s){this.g=s}D(be,Do),be.prototype.ua=function(){Tt(this.g,"a")},be.prototype.ta=function(s){Tt(this.g,new No(s))},be.prototype.sa=function(s){Tt(this.g,new ko)},be.prototype.ra=function(){Tt(this.g,"b")},rr.prototype.createWebChannel=rr.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,za=function(){return new rr},Ga=function(){return Qn()},Qa=pe,Ci={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gn.NO_ERROR=0,Gn.TIMEOUT=8,Gn.HTTP_ERROR=6,hr=Gn,Ws.COMPLETE="complete",$a=Ws,$s.EventType=nn,nn.OPEN="a",nn.CLOSE="b",nn.ERROR="c",nn.MESSAGE="d",mt.prototype.listen=mt.prototype.K,pn=$s,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,ja=J}).apply(typeof sr<"u"?sr:typeof self<"u"?self:typeof window<"u"?window:{});const Oo="@firebase/firestore",Mo="4.8.0";/**
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
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let $e="11.10.0";/**
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
 */const Ae=new El("@firebase/firestore");function Ne(){return Ae.logLevel}function N(r,...t){if(Ae.logLevel<=Kt.DEBUG){const e=t.map(zi);Ae.debug(`Firestore (${$e}): ${r}`,...e)}}function Bt(r,...t){if(Ae.logLevel<=Kt.ERROR){const e=t.map(zi);Ae.error(`Firestore (${$e}): ${r}`,...e)}}function Wt(r,...t){if(Ae.logLevel<=Kt.WARN){const e=t.map(zi);Ae.warn(`Firestore (${$e}): ${r}`,...e)}}function zi(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
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
 */function O(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Ka(r,n,e)}function Ka(r,t,e){let n=`FIRESTORE (${$e}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Bt(n),new Error(n)}function G(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||Ka(t,i,n)}function M(r,t){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends al{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Wa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Il{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yt.UNAUTHENTICATED))}shutdown(){}}class wl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Al{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0,42304);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Nt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Nt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string",31837,{l:n}),new Wa(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string",2055,{h:t}),new yt(t)}}class Rl{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Pl{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Rl(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vl{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ul(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){G(this.o===void 0,3512);const n=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Lo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Lo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Sl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */function Ha(){return new TextEncoder}/**
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
 */class Ki{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Sl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function U(r,t){return r<t?-1:r>t?1:0}function bi(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return U(n,i);{const o=Ha(),a=Cl(o.encode(Uo(r,e)),o.encode(Uo(t,e)));return a!==0?a:U(n,i)}}e+=n>65535?2:1}return U(r.length,t.length)}function Uo(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function Cl(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return U(r[e],t[e]);return U(r.length,t.length)}function Me(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
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
 */const qo="__name__";class Ot{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ot.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ot?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Ot.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const n=Ot.isNumericId(t),i=Ot.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Ot.extractNumericId(t).compare(Ot.extractNumericId(e)):bi(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ie.fromString(t.substring(4,t.length-2))}}class K extends Ot{construct(t,e,n){return new K(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new C(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new K(e)}static emptyPath(){return new K([])}}const bl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Ot{construct(t,e,n){return new ht(t,e,n)}static isValidIdentifier(t){return bl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qo}static keyField(){return new ht([qo])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new C(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new C(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new C(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(n+=l,i++):(o(),i++)}if(o(),a)throw new C(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
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
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(K.fromString(t))}static fromName(t){return new F(K.fromString(t).popFirst(5))}static empty(){return new F(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&K.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return K.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new K(t.slice()))}}/**
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
 */function Wi(r,t,e){if(!e)throw new C(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Dl(r,t,e,n){if(t===!0&&n===!0)throw new C(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Bo(r){if(!F.isDocumentKey(r))throw new C(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function jo(r){if(F.isDocumentKey(r))throw new C(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Xa(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Dr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O(12329,{type:typeof r})}function it(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new C(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Dr(r);throw new C(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function Ya(r,t){if(t<=0)throw new C(P.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
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
 */function rt(r,t){const e={typeString:r};return t&&(e.value=t),e}function bn(r,t){if(!Xa(r))throw new C(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(i&&typeof a!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new C(P.INVALID_ARGUMENT,e);return!0}/**
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
 */const $o=-62135596800,Qo=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Qo);return new X(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new C(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new C(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<$o)throw new C(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qo}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(bn(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-$o;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:rt("string",X._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
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
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new X(0,0))}static max(){return new L(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const wn=-1;function Nl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=L.fromTimestamp(n===1e9?new X(e+1,0):new X(e,n));return new oe(i,F.empty(),t)}function kl(r){return new oe(r.readTime,r.key,wn)}class oe{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new oe(L.min(),F.empty(),wn)}static max(){return new oe(L.max(),F.empty(),wn)}}function xl(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(r.documentKey,t.documentKey),e!==0?e:U(r.largestBatchId,t.largestBatchId))}/**
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
 */const Fl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ol{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Qe(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Fl)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,n)=>{e(t)})}static reject(t){return new V((e,n)=>{n(t)})}static waitFor(t){return new V((e,n)=>{let i=0,o=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&e()},h=>n(h))}),a=!0,o===i&&e()})}static or(t){let e=V.resolve(!1);for(const n of t)e=e.next(i=>i?V.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new V((n,i)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++l,l===o&&n(a)},m=>i(m))}})}static doWhile(t,e){return new V((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}/**
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
 */const Vt="SimpleDb";class Hi{static open(t,e,n,i){try{return new Hi(e,t.transaction(i,n))}catch(o){throw new En(e,o)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new Nt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new En(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const i=Xi(n.target.error);this.S.reject(new En(t,i))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(N(Vt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Ll(e)}}class ve{static delete(t){return N(Vt,"Removing database:",t),Ee(gl().indexedDB.deleteDatabase(t)).toPromise()}static C(){if(!_l())return!1;if(ve.F())return!0;const t=_r(),e=ve.M(t),n=0<e&&e<10,i=Ja(t),o=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||o)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.O)==="YES"}static N(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.B=n,this.L=null,ve.M(_r())===12.2&&Bt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(t){return this.db||(N(Vt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=o=>{const a=o.target.result;e(a)},i.onblocked=()=>{n(new En(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=o=>{const a=o.target.error;a.name==="VersionError"?n(new C(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new C(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new En(t,a))},i.onupgradeneeded=o=>{N(Vt,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const a=o.target.result;if(this.L!==null&&this.L!==o.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${o.oldVersion}, event.newVersion=${o.newVersion}, db.version=${a.version}`);this.B.q(a,i.transaction,o.oldVersion,this.version).next(()=>{N(Vt,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",e=>{const n=e.target;this.L=n.version},{passive:!0})),this.db.addEventListener("versionchange",e=>{var n;e.newVersion===null&&(Wt('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(n=this.databaseDeletedListener)===null||n===void 0||n.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(t){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=t}async runTransaction(t,e,n,i){const o=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.k(t);const l=Hi.open(this.db,t,o?"readonly":"readwrite",n),h=i(l).next(d=>(l.v(),d)).catch(d=>(l.abort(d),V.reject(d))).toPromise();return h.catch(()=>{}),await l.D,h}catch(l){const h=l,d=h.name!=="FirebaseError"&&a<3;if(N(Vt,"Transaction failed with error:",h.message,"Retrying:",d),this.close(),!d)return Promise.reject(h)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Ja(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Ml{constructor(t){this.$=t,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(t){this.$=t}done(){this.U=!0}G(t){this.K=t}delete(){return Ee(this.$.delete())}}class En extends C{constructor(t,e){super(P.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ge(r){return r.name==="IndexedDbTransactionError"}class Ll{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(N(Vt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(N(Vt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Ee(n)}add(t){return N(Vt,"ADD",this.store.name,t,t),Ee(this.store.add(t))}get(t){return Ee(this.store.get(t)).next(e=>(e===void 0&&(e=null),N(Vt,"GET",this.store.name,t,e),e))}delete(t){return N(Vt,"DELETE",this.store.name,t),Ee(this.store.delete(t))}count(){return N(Vt,"COUNT",this.store.name),Ee(this.store.count())}j(t,e){const n=this.options(t,e),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const o=i.getAll(n.range);return new V((a,l)=>{o.onerror=h=>{l(h.target.error)},o.onsuccess=h=>{a(h.target.result)}})}{const o=this.cursor(n),a=[];return this.J(o,(l,h)=>{a.push(h)}).next(()=>a)}}H(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new V((i,o)=>{n.onerror=a=>{o(a.target.error)},n.onsuccess=a=>{i(a.target.result)}})}Y(t,e){N(Vt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.Z=!1;const i=this.cursor(n);return this.J(i,(o,a,l)=>l.delete())}X(t,e){let n;e?n=t:(n={},e=t);const i=this.cursor(n);return this.J(i,e)}ee(t){const e=this.cursor({});return new V((n,i)=>{e.onerror=o=>{const a=Xi(o.target.error);i(a)},e.onsuccess=o=>{const a=o.target.result;a?t(a.primaryKey,a.value).next(l=>{l?a.continue():n()}):n()}})}J(t,e){const n=[];return new V((i,o)=>{t.onerror=a=>{o(a.target.error)},t.onsuccess=a=>{const l=a.target.result;if(!l)return void i();const h=new Ml(l),d=e(l.primaryKey,l.value,h);if(d instanceof V){const m=d.catch(y=>(h.done(),V.reject(y)));n.push(m)}h.isDone?i():h.W===null?l.continue():l.continue(h.W)}}).next(()=>V.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Z?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ee(r){return new V((t,e)=>{r.onsuccess=n=>{const i=n.target.result;t(i)},r.onerror=n=>{const i=Xi(n.target.error);e(i)}})}let Go=!1;function Xi(r){const t=ve.M(_r());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Go||(Go=!0,setTimeout(()=>{throw n},0)),n}}return r}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Nr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this._e(n),this.ae=n=>e.writeSequenceNumber(n))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Nr.ue=-1;/**
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
 */const Yi=-1;function kr(r){return r==null}function yr(r){return r===0&&1/r==-1/0}function Ul(r){return typeof r=="number"&&Number.isInteger(r)&&!yr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Za="";function ql(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=zo(t)),t=Bl(r.get(e),t);return zo(t)}function Bl(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case Za:e+="";break;default:e+=o}}return e}function zo(r){return r+Za+""}/**
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
 */function Ko(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function de(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function jl(r,t){const e=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.push(t(r[n],n,r));return e}function tu(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class Y{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new or(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new or(this.root,t,this.comparator,!1)}getReverseIterator(){return new or(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new or(this.root,t,this.comparator,!0)}}class or{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new lt(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Wo(this.data.getIterator())}getIteratorFrom(t){return new Wo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class Wo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class St{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new St([])}unionWith(t){let e=new st(ht.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Me(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class eu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new eu("Invalid base64 string: "+o):o}}(t);return new dt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const $l=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ae(r){if(G(!!r,39018),typeof r=="string"){let t=0;const e=$l.exec(r);if(G(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:tt(r.seconds),nanos:tt(r.nanos)}}function tt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ue(r){return typeof r=="string"?dt.fromBase64String(r):dt.fromUint8Array(r)}/**
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
 */const nu="server_timestamp",ru="__type__",iu="__previous_value__",su="__local_write_time__";function xr(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[ru])===null||e===void 0?void 0:e.stringValue)===nu}function Fr(r){const t=r.mapValue.fields[iu];return xr(t)?Fr(t):t}function An(r){const t=ae(r.mapValue.fields[su].timestampValue);return new X(t.seconds,t.nanos)}/**
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
 */class Ql{constructor(t,e,n,i,o,a,l,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const Er="(default)";class Rn{constructor(t,e){this.projectId=t,this.database=e||Er}static empty(){return new Rn("","")}get isDefaultDatabase(){return this.database===Er}isEqual(t){return t instanceof Rn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ou="__type__",au="__max__",ar={mapValue:{fields:{__type__:{stringValue:au}}}},uu="__vector__",Tr="value";function ce(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?xr(r)?4:zl(r)?9007199254740991:Gl(r)?10:11:O(28295,{value:r})}function jt(r,t){if(r===t)return!0;const e=ce(r);if(e!==ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return An(r).isEqual(An(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=ae(i.timestampValue),l=ae(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return ue(i.bytesValue).isEqual(ue(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=tt(i.doubleValue),l=tt(o.doubleValue);return a===l?yr(a)===yr(l):isNaN(a)&&isNaN(l)}return!1}(r,t);case 9:return Me(r.arrayValue.values||[],t.arrayValue.values||[],jt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Ko(a)!==Ko(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!jt(a[h],l[h])))return!1;return!0}(r,t);default:return O(52216,{left:r})}}function Pn(r,t){return(r.values||[]).find(e=>jt(e,t))!==void 0}function Le(r,t){if(r===t)return 0;const e=ce(r),n=ce(t);if(e!==n)return U(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(r.booleanValue,t.booleanValue);case 2:return function(o,a){const l=tt(o.integerValue||o.doubleValue),h=tt(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(r,t);case 3:return Ho(r.timestampValue,t.timestampValue);case 4:return Ho(An(r),An(t));case 5:return bi(r.stringValue,t.stringValue);case 6:return function(o,a){const l=ue(o),h=ue(a);return l.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const m=U(l[d],h[d]);if(m!==0)return m}return U(l.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const l=U(tt(o.latitude),tt(a.latitude));return l!==0?l:U(tt(o.longitude),tt(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Xo(r.arrayValue,t.arrayValue);case 10:return function(o,a){var l,h,d,m;const y=o.fields||{},A=a.fields||{},S=(l=y[Tr])===null||l===void 0?void 0:l.arrayValue,D=(h=A[Tr])===null||h===void 0?void 0:h.arrayValue,x=U(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((m=D==null?void 0:D.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:Xo(S,D)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===ar.mapValue&&a===ar.mapValue)return 0;if(o===ar.mapValue)return 1;if(a===ar.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const A=bi(h[y],m[y]);if(A!==0)return A;const S=Le(l[h[y]],d[m[y]]);if(S!==0)return S}return U(h.length,m.length)}(r.mapValue,t.mapValue);default:throw O(23264,{le:e})}}function Ho(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return U(r,t);const e=ae(r),n=ae(t),i=U(e.seconds,n.seconds);return i!==0?i:U(e.nanos,n.nanos)}function Xo(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Le(e[i],n[i]);if(o)return o}return U(e.length,n.length)}function Ue(r){return Di(r)}function Di(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ae(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ue(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return F.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Di(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of n)o?o=!1:i+=",",i+=`${a}:${Di(e.fields[a])}`;return i+"}"}(r.mapValue):O(61005,{value:r})}function dr(r){switch(ce(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Fr(r);return t?16+dr(t):16;case 5:return 2*r.stringValue.length;case 6:return ue(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+dr(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return de(n.fields,(o,a)=>{i+=o.length+dr(a)}),i}(r.mapValue);default:throw O(13486,{value:r})}}function vr(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Ni(r){return!!r&&"integerValue"in r}function Ji(r){return!!r&&"arrayValue"in r}function Yo(r){return!!r&&"nullValue"in r}function Jo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function fr(r){return!!r&&"mapValue"in r}function Gl(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[ou])===null||e===void 0?void 0:e.stringValue)===uu}function Tn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return de(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Tn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Tn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function zl(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===au}/**
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
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!fr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Tn(e)}setAll(t){let e=ht.emptyPath(),n={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=l.popLast()}a?n[l.lastSegment()]=Tn(a):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());fr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return jt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];fr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){de(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new Rt(Tn(this.value))}}function cu(r){const t=[];return de(r.fields,(e,n)=>{const i=new ht([e]);if(fr(n)){const o=cu(n.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new St(t)}/**
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
 */class Et{constructor(t,e,n,i,o,a,l){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Et(t,0,L.min(),L.min(),L.min(),Rt.empty(),0)}static newFoundDocument(t,e,n,i){return new Et(t,1,e,L.min(),n,i,0)}static newNoDocument(t,e){return new Et(t,2,e,L.min(),L.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,L.min(),L.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qe{constructor(t,e){this.position=t,this.inclusive=e}}function Zo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],a=r.position[i];if(o.field.isKeyField()?n=F.comparator(F.fromName(a.referenceValue),e.key):n=Le(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ta(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!jt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class Vn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Kl(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class lu{}class nt extends lu{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Hl(t,e,n):e==="array-contains"?new Jl(t,n):e==="in"?new Zl(t,n):e==="not-in"?new th(t,n):e==="array-contains-any"?new eh(t,n):new nt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Xl(t,n):new Yl(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Le(e,this.value)):e!==null&&ce(this.value)===ce(e)&&this.matchesComparison(Le(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends lu{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Ft(t,e)}matches(t){return hu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function hu(r){return r.op==="and"}function du(r){return Wl(r)&&hu(r)}function Wl(r){for(const t of r.filters)if(t instanceof Ft)return!1;return!0}function ki(r){if(r instanceof nt)return r.field.canonicalString()+r.op.toString()+Ue(r.value);if(du(r))return r.filters.map(t=>ki(t)).join(",");{const t=r.filters.map(e=>ki(e)).join(",");return`${r.op}(${t})`}}function fu(r,t){return r instanceof nt?function(n,i){return i instanceof nt&&n.op===i.op&&n.field.isEqual(i.field)&&jt(n.value,i.value)}(r,t):r instanceof Ft?function(n,i){return i instanceof Ft&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,a,l)=>o&&fu(a,i.filters[l]),!0):!1}(r,t):void O(19439)}function mu(r){return r instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ue(e.value)}`}(r):r instanceof Ft?function(e){return e.op.toString()+" {"+e.getFilters().map(mu).join(" ,")+"}"}(r):"Filter"}class Hl extends nt{constructor(t,e,n){super(t,e,n),this.key=F.fromName(n.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Xl extends nt{constructor(t,e){super(t,"in",e),this.keys=pu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Yl extends nt{constructor(t,e){super(t,"not-in",e),this.keys=pu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function pu(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>F.fromName(n.referenceValue))}class Jl extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ji(e)&&Pn(e.arrayValue,this.value)}}class Zl extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Pn(this.value.arrayValue,e)}}class th extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Pn(this.value.arrayValue,e)}}class eh extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ji(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Pn(this.value.arrayValue,n))}}/**
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
 */class nh{constructor(t,e=null,n=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.Pe=null}}function ea(r,t=null,e=[],n=[],i=null,o=null,a=null){return new nh(r,t,e,n,i,o,a)}function Zi(r){const t=M(r);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>ki(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),kr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ue(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ue(n)).join(",")),t.Pe=e}return t.Pe}function ts(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Kl(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!fu(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ta(r.startAt,t.startAt)&&ta(r.endAt,t.endAt)}function xi(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Xt{constructor(t,e=null,n=[],i=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function rh(r,t,e,n,i,o,a,l){return new Xt(r,t,e,n,i,o,a,l)}function Or(r){return new Xt(r)}function na(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function es(r){return r.collectionGroup!==null}function Fe(r){const t=M(r);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new st(ht.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new Vn(o,n))}),e.has(ht.keyField().canonicalString())||t.Te.push(new Vn(ht.keyField(),n))}return t.Te}function Mt(r){const t=M(r);return t.Ie||(t.Ie=gu(t,Fe(r))),t.Ie}function ih(r){const t=M(r);return t.de||(t.de=gu(t,r.explicitOrderBy)),t.de}function gu(r,t){if(r.limitType==="F")return ea(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Vn(i.field,o)});const e=r.endAt?new qe(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new qe(r.startAt.position,r.startAt.inclusive):null;return ea(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Fi(r,t){const e=r.filters.concat([t]);return new Xt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Ir(r,t,e){return new Xt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Mr(r,t){return ts(Mt(r),Mt(t))&&r.limitType===t.limitType}function _u(r){return`${Zi(Mt(r))}|lt:${r.limitType}`}function ke(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>mu(i)).join(", ")}]`),kr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ue(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ue(i)).join(",")),`Target(${n})`}(Mt(r))}; limitType=${r.limitType})`}function Lr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):F.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of Fe(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(a,l,h){const d=Zo(a,l,h);return a.inclusive?d<=0:d<0}(n.startAt,Fe(n),i)||n.endAt&&!function(a,l,h){const d=Zo(a,l,h);return a.inclusive?d>=0:d>0}(n.endAt,Fe(n),i))}(r,t)}function sh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function yu(r){return(t,e)=>{let n=!1;for(const i of Fe(r)){const o=oh(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function oh(r,t,e){const n=r.field.isKeyField()?F.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?Le(h,d):O(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:r.dir})}}/**
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
 */class Pe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){de(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return tu(this.inner)}size(){return this.innerSize}}/**
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
 */const ah=new Y(F.comparator);function Ht(){return ah}const Eu=new Y(F.comparator);function gn(...r){let t=Eu;for(const e of r)t=t.insert(e.key,e);return t}function Tu(r){let t=Eu;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Te(){return vn()}function vu(){return vn()}function vn(){return new Pe(r=>r.toString(),(r,t)=>r.isEqual(t))}const uh=new Y(F.comparator),ch=new st(F.comparator);function q(...r){let t=ch;for(const e of r)t=t.add(e);return t}const lh=new st(U);function hh(){return lh}/**
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
 */function ns(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yr(t)?"-0":t}}function Iu(r){return{integerValue:""+r}}function dh(r,t){return Ul(t)?Iu(t):ns(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ur{constructor(){this._=void 0}}function fh(r,t,e){return r instanceof wr?function(i,o){const a={fields:{[ru]:{stringValue:nu},[su]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&xr(o)&&(o=Fr(o)),o&&(a.fields[iu]=o),{mapValue:a}}(e,t):r instanceof Sn?Au(r,t):r instanceof Cn?Ru(r,t):function(i,o){const a=wu(i,o),l=ra(a)+ra(i.Ee);return Ni(a)&&Ni(i.Ee)?Iu(l):ns(i.serializer,l)}(r,t)}function mh(r,t,e){return r instanceof Sn?Au(r,t):r instanceof Cn?Ru(r,t):e}function wu(r,t){return r instanceof Ar?function(n){return Ni(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class wr extends Ur{}class Sn extends Ur{constructor(t){super(),this.elements=t}}function Au(r,t){const e=Pu(t);for(const n of r.elements)e.some(i=>jt(i,n))||e.push(n);return{arrayValue:{values:e}}}class Cn extends Ur{constructor(t){super(),this.elements=t}}function Ru(r,t){let e=Pu(t);for(const n of r.elements)e=e.filter(i=>!jt(i,n));return{arrayValue:{values:e}}}class Ar extends Ur{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function ra(r){return tt(r.integerValue||r.doubleValue)}function Pu(r){return Ji(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function ph(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof Sn&&i instanceof Sn||n instanceof Cn&&i instanceof Cn?Me(n.elements,i.elements,jt):n instanceof Ar&&i instanceof Ar?jt(n.Ee,i.Ee):n instanceof wr&&i instanceof wr}(r.transform,t.transform)}class gh{constructor(t,e){this.version=t,this.transformResults=e}}class It{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new It}static exists(t){return new It(void 0,t)}static updateTime(t){return new It(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function mr(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class qr{}function Vu(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Br(r.key,It.none()):new Dn(r.key,r.data,It.none());{const e=r.data,n=Rt.empty();let i=new st(ht.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),i=i.add(o)}return new fe(r.key,n,new St(i.toArray()),It.none())}}function _h(r,t,e){r instanceof Dn?function(i,o,a){const l=i.value.clone(),h=sa(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):r instanceof fe?function(i,o,a){if(!mr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=sa(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Su(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function In(r,t,e,n){return r instanceof Dn?function(o,a,l,h){if(!mr(o.precondition,a))return l;const d=o.value.clone(),m=oa(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof fe?function(o,a,l,h){if(!mr(o.precondition,a))return l;const d=oa(o.fieldTransforms,h,a),m=a.data;return m.setAll(Su(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(r,t,e,n):function(o,a,l){return mr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(r,t,e)}function yh(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=wu(n.transform,i||null);o!=null&&(e===null&&(e=Rt.empty()),e.set(n.field,o))}return e||null}function ia(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Me(n,i,(o,a)=>ph(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Dn extends qr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fe extends qr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Su(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function sa(r,t,e){const n=new Map;G(r.length===e.length,32656,{Ae:e.length,Re:r.length});for(let i=0;i<e.length;i++){const o=r[i],a=o.transform,l=t.data.field(o.field);n.set(o.field,mh(a,l,e[i]))}return n}function oa(r,t,e){const n=new Map;for(const i of r){const o=i.transform,a=e.data.field(i.field);n.set(i.field,fh(o,a,t))}return n}class Br extends qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eh extends qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Th{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&_h(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=In(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=In(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=vu();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const h=Vu(a,l);h!==null&&n.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Me(this.mutations,t.mutations,(e,n)=>ia(e,n))&&Me(this.baseMutations,t.baseMutations,(e,n)=>ia(e,n))}}class rs{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){G(t.mutations.length===n.length,58842,{Ve:t.mutations.length,me:n.length});let i=function(){return uh}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new rs(t,e,n,i)}}/**
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
 */class vh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Ih{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}/**
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
 */class wh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var et,j;function Ah(r){switch(r){case P.OK:return O(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return O(15467,{code:r})}}function Cu(r){if(r===void 0)return Bt("GRPC error has no .code"),P.UNKNOWN;switch(r){case et.OK:return P.OK;case et.CANCELLED:return P.CANCELLED;case et.UNKNOWN:return P.UNKNOWN;case et.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case et.INTERNAL:return P.INTERNAL;case et.UNAVAILABLE:return P.UNAVAILABLE;case et.UNAUTHENTICATED:return P.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case et.NOT_FOUND:return P.NOT_FOUND;case et.ALREADY_EXISTS:return P.ALREADY_EXISTS;case et.PERMISSION_DENIED:return P.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case et.ABORTED:return P.ABORTED;case et.OUT_OF_RANGE:return P.OUT_OF_RANGE;case et.UNIMPLEMENTED:return P.UNIMPLEMENTED;case et.DATA_LOSS:return P.DATA_LOSS;default:return O(39323,{code:r})}}(j=et||(et={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Rh=new ie([4294967295,4294967295],0);function aa(r){const t=Ha().encode(r),e=new Ba;return e.update(t),new Uint8Array(e.digest())}function ua(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ie([e,n],0),new ie([i,o],0)]}class is{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new _n(`Invalid padding: ${e}`);if(n<0)throw new _n(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new _n(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new _n(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=ie.fromNumber(this.fe)}pe(t,e,n){let i=t.add(e.multiply(ie.fromNumber(n)));return i.compare(Rh)===1&&(i=new ie([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=aa(t),[n,i]=ua(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(n,i,o);if(!this.ye(a))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new is(o,i,e);return n.forEach(l=>a.insert(l)),a}insert(t){if(this.fe===0)return;const e=aa(t),[n,i]=ua(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(n,i,o);this.we(a)}}we(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class _n extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class jr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Nn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new jr(L.min(),i,new Y(U),Ht(),q())}}class Nn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Nn(n,e,q(),q(),q())}}/**
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
 */class pr{constructor(t,e,n,i){this.Se=t,this.removedTargetIds=e,this.key=n,this.be=i}}class bu{constructor(t,e){this.targetId=t,this.De=e}}class Du{constructor(t,e,n=dt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class ca{constructor(){this.ve=0,this.Ce=la(),this.Fe=dt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=q(),e=q(),n=q();return this.Ce.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:O(38017,{changeType:o})}}),new Nn(this.Fe,this.Me,t,e,n)}ke(){this.xe=!1,this.Ce=la()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Ph{constructor(t){this.We=t,this.Ge=new Map,this.ze=Ht(),this.je=ur(),this.Je=ur(),this.He=new Y(U)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,e=>{const n=this.tt(e);switch(t.state){case 0:this.nt(e)&&n.Be(t.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(t.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(n.Ke(),n.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),n.Be(t.resumeToken));break;default:O(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach((n,i)=>{this.nt(i)&&e(i)})}it(t){const e=t.targetId,n=t.De.count,i=this.st(e);if(i){const o=i.target;if(xi(o))if(n===0){const a=new F(o.path);this.Xe(e,a,Et.newNoDocument(a,L.min()))}else G(n===1,20013,{expectedCount:n});else{const a=this.ot(e);if(a!==n){const l=this._t(t),h=l?this.ut(l,t,a):1;if(h!==0){this.rt(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=ue(n).toUint8Array()}catch(h){if(h instanceof eu)return Wt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new is(a,i,o)}catch(h){return Wt(h instanceof _n?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.fe===0?null:l}ut(t,e,n){return e.De.count===n-this.ht(t,e.targetId)?0:2}ht(t,e){const n=this.We.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Xe(e,o,null),i++)}),i}Pt(t){const e=new Map;this.Ge.forEach((o,a)=>{const l=this.st(a);if(l){if(o.current&&xi(l.target)){const h=new F(l.target.path);this.Tt(h).has(a)||this.It(a,h)||this.Xe(a,h,Et.newNoDocument(h,t))}o.Ne&&(e.set(a,o.Le()),o.ke())}});let n=q();this.Je.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.ze.forEach((o,a)=>a.setReadTime(t));const i=new jr(t,e,this.He,this.ze,n);return this.ze=Ht(),this.je=ur(),this.Je=ur(),this.He=new Y(U),i}Ze(t,e){if(!this.nt(t))return;const n=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,n),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,n){if(!this.nt(t))return;const i=this.tt(t);this.It(t,e)?i.qe(e,1):i.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),n&&(this.ze=this.ze.insert(e,n))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new ca,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new st(U),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new st(U),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new ca),this.We.getRemoteKeysForTarget(t).forEach(e=>{this.Xe(t,e,null)})}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function ur(){return new Y(F.comparator)}function la(){return new Y(F.comparator)}const Vh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Sh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ch=(()=>({and:"AND",or:"OR"}))();class bh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Oi(r,t){return r.useProto3Json||kr(t)?t:{value:t}}function Rr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Nu(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Dh(r,t){return Rr(r,t.toTimestamp())}function Lt(r){return G(!!r,49232),L.fromTimestamp(function(e){const n=ae(e);return new X(n.seconds,n.nanos)}(r))}function ss(r,t){return Mi(r,t).canonicalString()}function Mi(r,t){const e=function(i){return new K(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function ku(r){const t=K.fromString(r);return G(Uu(t),10190,{key:t.toString()}),t}function Li(r,t){return ss(r.databaseId,t.path)}function wi(r,t){const e=ku(t);if(e.get(1)!==r.databaseId.projectId)throw new C(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new C(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new F(Fu(e))}function xu(r,t){return ss(r.databaseId,t)}function Nh(r){const t=ku(r);return t.length===4?K.emptyPath():Fu(t)}function Ui(r){return new K(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Fu(r){return G(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function ha(r,t,e){return{name:Li(r,t),fields:e.value.mapValue.fields}}function kh(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(G(m===void 0||typeof m=="string",58123),dt.fromBase64String(m||"")):(G(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),dt.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const m=d.code===void 0?P.UNKNOWN:Cu(d.code);return new C(m,d.message||"")}(a);e=new Du(n,i,o,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=wi(r,n.document.name),o=Lt(n.document.updateTime),a=n.document.createTime?Lt(n.document.createTime):L.min(),l=new Rt({mapValue:{fields:n.document.fields}}),h=Et.newFoundDocument(i,o,a,l),d=n.targetIds||[],m=n.removedTargetIds||[];e=new pr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=wi(r,n.document),o=n.readTime?Lt(n.readTime):L.min(),a=Et.newNoDocument(i,o),l=n.removedTargetIds||[];e=new pr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=wi(r,n.document),o=n.removedTargetIds||[];e=new pr([],o,i,null)}else{if(!("filter"in t))return O(11601,{At:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,a=new wh(i,o),l=n.targetId;e=new bu(l,a)}}return e}function xh(r,t){let e;if(t instanceof Dn)e={update:ha(r,t.key,t.value)};else if(t instanceof Br)e={delete:Li(r,t.key)};else if(t instanceof fe)e={update:ha(r,t.key,t.data),updateMask:$h(t.fieldMask)};else{if(!(t instanceof Eh))return O(16599,{Rt:t.type});e={verify:Li(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const l=a.transform;if(l instanceof wr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Sn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Cn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ar)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw O(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Dh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O(27497)}(r,t.precondition)),e}function Fh(r,t){return r&&r.length>0?(G(t!==void 0,14353),r.map(e=>function(i,o){let a=i.updateTime?Lt(i.updateTime):Lt(o);return a.isEqual(L.min())&&(a=Lt(o)),new gh(a,i.transformResults||[])}(e,t))):[]}function Oh(r,t){return{documents:[xu(r,t.path)]}}function Ou(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=xu(r,i);const o=function(d){if(d.length!==0)return Lu(Ft.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(A){return{field:ne(A.field),direction:qh(A.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Oi(r,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{Vt:e,parent:i}}function Mh(r,t,e,n){const{Vt:i,parent:o}=Ou(r,t),a={},l=[];let h=0;return e.forEach(d=>{const m=n?d.alias:"aggregate_"+h++;a[m]=d.alias,d.aggregateType==="count"?l.push({alias:m,count:{}}):d.aggregateType==="avg"?l.push({alias:m,avg:{field:ne(d.fieldPath)}}):d.aggregateType==="sum"&&l.push({alias:m,sum:{field:ne(d.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:l,structuredQuery:i.structuredQuery},parent:i.parent},ft:a,parent:o}}function Lh(r){let t=Nh(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){G(n===1,65062);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(y){const A=Mu(y);return A instanceof Ft&&du(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(A=>function(D){return new Vn(xe(D.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(A))}(e.orderBy));let l=null;e.limit&&(l=function(y){let A;return A=typeof y=="object"?y.value:y,kr(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(y){const A=!!y.before,S=y.values||[];return new qe(S,A)}(e.startAt));let d=null;return e.endAt&&(d=function(y){const A=!y.before,S=y.values||[];return new qe(S,A)}(e.endAt)),rh(t,i,a,o,l,"F",h,d)}function Uh(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Mu(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=xe(e.unaryFilter.field);return nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=xe(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=xe(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xe(e.unaryFilter.field);return nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(r):r.fieldFilter!==void 0?function(e){return nt.create(xe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Ft.create(e.compositeFilter.filters.map(n=>Mu(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(e.compositeFilter.op))}(r):O(30097,{filter:r})}function qh(r){return Vh[r]}function Bh(r){return Sh[r]}function jh(r){return Ch[r]}function ne(r){return{fieldPath:r.canonicalString()}}function xe(r){return ht.fromServerFormat(r.fieldPath)}function Lu(r){return r instanceof nt?function(e){if(e.op==="=="){if(Jo(e.value))return{unaryFilter:{field:ne(e.field),op:"IS_NAN"}};if(Yo(e.value))return{unaryFilter:{field:ne(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jo(e.value))return{unaryFilter:{field:ne(e.field),op:"IS_NOT_NAN"}};if(Yo(e.value))return{unaryFilter:{field:ne(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ne(e.field),op:Bh(e.op),value:e.value}}}(r):r instanceof Ft?function(e){const n=e.getFilters().map(i=>Lu(i));return n.length===1?n[0]:{compositeFilter:{op:jh(e.op),filters:n}}}(r):O(54877,{filter:r})}function $h(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Uu(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class re{constructor(t,e,n,i,o=L.min(),a=L.min(),l=dt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new re(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Qh{constructor(t){this.gt=t}}function Gh(r){const t=Lh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ir(t,t.limit,"L"):t}/**
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
 */class zh{constructor(){this.Dn=new Kh}addToCollectionParentIndex(t,e){return this.Dn.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(oe.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(oe.min())}updateCollectionGroup(t,e,n){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class Kh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new st(K.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new st(K.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const da={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qu=41943040;class At{static withCacheSize(t){return new At(t,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(qu,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
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
 */class Be{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new Be(0)}static ur(){return new Be(-1)}}/**
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
 */const fa="LruGarbageCollector",Wh=1048576;function ma([r,t],[e,n]){const i=U(r,e);return i===0?U(t,n):i}class Hh{constructor(t){this.Tr=t,this.buffer=new st(ma),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();ma(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Xh{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){N(fa,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ge(e)?N(fa,"Ignoring IndexedDB error during garbage collection: ",e):await Qe(e)}await this.Rr(3e5)})}}class Yh{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return V.resolve(Nr.ue);const n=new Hh(e);return this.Vr.forEachTarget(t,i=>n.Er(i.sequenceNumber)).next(()=>this.Vr.gr(t,i=>n.Er(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(da)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),da):this.pr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let n,i,o,a,l,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,a=Date.now(),this.nthSequenceNumber(t,i))).next(y=>(n=y,l=Date.now(),this.removeTargets(t,n,e))).next(y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(y=>(d=Date.now(),Ne()<=Kt.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:y})))}}function Jh(r,t){return new Yh(r,t)}/**
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
 */class Zh{constructor(){this.changes=new Pe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?V.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class td{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class ed{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&In(n.mutation,i,St.empty(),X.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=q()){const i=Te();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let a=gn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=Te();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,q()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,n,i){let o=Ht();const a=vn(),l=function(){return vn()}();return e.forEach((h,d)=>{const m=n.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof fe)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),In(m.mutation,d,m.mutation.getFieldMask(),X.now())):a.set(d.key,St.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var y;return l.set(d,new td(m,(y=a.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(t,e){const n=vn();let i=new Y((a,l)=>a-l),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=n.get(h)||St.empty();m=l.applyToLocalView(d,m),n.set(h,m);const y=(i.get(l.batchId)||q()).add(h);i=i.insert(l.batchId,y)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,m=h.value,y=vu();m.forEach(A=>{if(!o.has(A)){const S=Vu(e.get(A),n.get(A));S!==null&&y.set(A,S),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return V.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):es(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):V.resolve(Te());let l=wn,h=o;return a.next(d=>V.forEach(d,(m,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(m)?V.resolve():this.remoteDocumentCache.getEntry(t,m).next(A=>{h=h.insert(m,A)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,q())).next(m=>({batchId:l,changes:Tu(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(n=>{let i=gn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let a=gn();return this.indexManager.getCollectionParents(t,o).next(l=>V.forEach(l,h=>{const d=function(y,A){return new Xt(A,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(m=>{m.forEach((y,A)=>{a=a.insert(y,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Et.newInvalidDocument(m)))});let l=gn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&In(m.mutation,d,St.empty(),X.now()),Lr(e,d)&&(l=l.insert(h,d))}),l})}}/**
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
 */class nd{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return V.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Lt(i.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,function(i){return{name:i.name,query:Gh(i.bundledQuery),readTime:Lt(i.readTime)}}(e)),V.resolve()}}/**
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
 */class rd{constructor(){this.overlays=new Y(F.comparator),this.kr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Te();return V.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.wt(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.kr.delete(n)),V.resolve()}getOverlaysForCollection(t,e,n){const i=Te(),o=e.length+1,a=new F(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Y((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=o.get(d.largestBatchId);m===null&&(m=Te(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=Te(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=i)););return V.resolve(l)}wt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new vh(e,n));let o=this.kr.get(e);o===void 0&&(o=q(),this.kr.set(e,o)),this.kr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class id{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
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
 */class os{constructor(){this.qr=new st(at.Qr),this.$r=new st(at.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const n=new at(t,e);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Wr(new at(t,e))}Gr(t,e){t.forEach(n=>this.removeReference(n,e))}zr(t){const e=new F(new K([])),n=new at(e,t),i=new at(e,t+1),o=[];return this.$r.forEachInRange([n,i],a=>{this.Wr(a),o.push(a.key)}),o}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new F(new K([])),n=new at(e,t),i=new at(e,t+1);let o=q();return this.$r.forEachInRange([n,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),n=this.qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class at{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return F.comparator(t.key,e.key)||U(t.Hr,e.Hr)}static Ur(t,e){return U(t.Hr,e.Hr)||F.comparator(t.key,e.key)}}/**
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
 */class sd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new st(at.Qr)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Th(o,e,n,i);this.mutationQueue.push(a);for(const l of i)this.Yr=this.Yr.add(new at(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,e){return V.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Xr(n),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Yi:this.er-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([n,i],a=>{const l=this.Zr(a.Hr);o.push(l)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st(U);return e.forEach(i=>{const o=new at(i,0),a=new at(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],l=>{n=n.add(l.Hr)})}),V.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;F.isDocumentKey(o)||(o=o.child(""));const a=new at(new F(o),0);let l=new st(U);return this.Yr.forEachWhile(h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.Hr)),!0)},a),V.resolve(this.ei(l))}ei(t){const e=[];return t.forEach(n=>{const i=this.Zr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){G(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return V.forEach(e.mutations,i=>{const o=new at(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Yr=n})}rr(t){}containsKey(t,e){const n=new at(e,0),i=this.Yr.firstAfterOrEqual(n);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class od{constructor(t){this.ni=t,this.docs=function(){return new Y(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,a=this.ni(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return V.resolve(n?n.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let n=Ht();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))}),V.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Ht();const a=e.path,l=new F(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||xl(kl(m),n)<=0||(i.has(m.key)||Lr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,n,i){O(9500)}ri(t,e){return V.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new ad(this)}getSize(t){return V.resolve(this.size)}}class ad extends Zh{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Or.addEntry(t,i)):this.Or.removeEntry(n)}),V.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
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
 */class ud{constructor(t){this.persistence=t,this.ii=new Pe(e=>Zi(e),ts),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.si=0,this.oi=new os,this.targetCount=0,this._i=Be.ar()}forEachTarget(t,e){return this.ii.forEach((n,i)=>e(i)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.si&&(this.si=e),V.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new Be(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.hr(e),V.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.ii.forEach((a,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const n=this.ii.get(e)||null;return V.resolve(n)}addMatchingKeys(t,e,n){return this.oi.Kr(e,n),V.resolve()}removeMatchingKeys(t,e,n){this.oi.Gr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const n=this.oi.Jr(e);return V.resolve(n)}containsKey(t,e){return V.resolve(this.oi.containsKey(e))}}/**
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
 */class Bu{constructor(t,e){this.ai={},this.overlays={},this.ui=new Nr(0),this.ci=!1,this.ci=!0,this.li=new id,this.referenceDelegate=t(this),this.hi=new ud(this),this.indexManager=new zh,this.remoteDocumentCache=function(i){return new od(i)}(n=>this.referenceDelegate.Pi(n)),this.serializer=new Qh(e),this.Ti=new nd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new rd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ai[t.toKey()];return n||(n=new sd(e,this.referenceDelegate),this.ai[t.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const i=new cd(this.ui.next());return this.referenceDelegate.Ii(),n(i).next(o=>this.referenceDelegate.di(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ei(t,e){return V.or(Object.values(this.ai).map(n=>()=>n.containsKey(t,e)))}}class cd extends Ol{constructor(t){super(),this.currentSequenceNumber=t}}class as{constructor(t){this.persistence=t,this.Ai=new os,this.Ri=null}static Vi(t){return new as(t)}get mi(){if(this.Ri)return this.Ri;throw O(60996)}addReference(t,e,n){return this.Ai.addReference(n,e),this.mi.delete(n.toString()),V.resolve()}removeReference(t,e,n){return this.Ai.removeReference(n,e),this.mi.add(n.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),V.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach(i=>this.mi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.mi.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.mi,n=>{const i=F.fromPath(n);return this.fi(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.Ri=null,e.apply(t)))}updateLimboDocument(t,e){return this.fi(t,e).next(n=>{n?this.mi.delete(e.toString()):this.mi.add(e.toString())})}Pi(t){return 0}fi(t,e){return V.or([()=>V.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Pr{constructor(t,e){this.persistence=t,this.gi=new Pe(n=>ql(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Jh(this,e)}static Vi(t,e){return new Pr(t,e)}Ii(){}di(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}yr(t){let e=0;return this.gr(t,n=>{e++}).next(()=>e)}gr(t,e){return V.forEach(this.gi,(n,i)=>this.Sr(t,n,i).next(o=>o?V.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ri(t,a=>this.Sr(t,a,e).next(l=>{l||(n++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),V.resolve()}removeReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),V.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=dr(t.data.value)),e}Sr(t,e,n){return V.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.gi.get(e);return V.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}const ld="main";function hd(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
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
 */class us{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Is=n,this.ds=i}static Es(t,e){let n=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new us(t,e.fromCache,n,i)}}/**
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
 */class dd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class fd{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Tl()?8:Ja(_r())>0?6:4}()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ps(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ys(t,e,i,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new dd;return this.ws(t,e,a).next(l=>{if(o.result=l,this.Rs)return this.Ss(t,e,a,l.size)})}).next(()=>o.result)}Ss(t,e,n,i){return n.documentReadCount<this.Vs?(Ne()<=Kt.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Ne()<=Kt.DEBUG&&N("QueryEngine","Query:",ke(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(Ne()<=Kt.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):V.resolve())}ps(t,e){if(na(e))return V.resolve(null);let n=Mt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ir(e,null,"F"),n=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=q(...o);return this.gs.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,n).next(h=>{const d=this.bs(e,l);return this.Ds(e,d,a,h.readTime)?this.ps(t,Ir(e,null,"F")):this.vs(t,d,e,h)}))})))}ys(t,e,n,i){return na(e)||i.isEqual(L.min())?V.resolve(null):this.gs.getDocuments(t,n).next(o=>{const a=this.bs(e,o);return this.Ds(e,a,n,i)?V.resolve(null):(Ne()<=Kt.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ke(e)),this.vs(t,a,e,Nl(i,wn)).next(l=>l))})}bs(t,e){let n=new st(yu(t));return e.forEach((i,o)=>{Lr(t,o)&&(n=n.add(o))}),n}Ds(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ws(t,e,n){return Ne()<=Kt.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",ke(e)),this.gs.getDocumentsMatchingQuery(t,e,oe.min(),n)}vs(t,e,n,i){return this.gs.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const cs="LocalStore",md=3e8;class pd{constructor(t,e,n,i){this.persistence=t,this.Cs=e,this.serializer=i,this.Fs=new Y(U),this.Ms=new Pe(o=>Zi(o),ts),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(n)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ed(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Fs))}}function gd(r,t,e,n){return new pd(r,t,e,n)}async function ju(r,t){const e=M(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],l=[];let h=q();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:l}))})})}function _d(r,t){const e=M(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return function(l,h,d,m){const y=d.batch,A=y.keys();let S=V.resolve();return A.forEach(D=>{S=S.next(()=>m.getEntry(h,D)).next(x=>{const b=d.docVersions.get(D);G(b!==null,48541),x.version.compareTo(b)<0&&(y.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),m.addEntry(x)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(h,y))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let h=q();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function $u(r){const t=M(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.hi.getLastRemoteSnapshotVersion(e))}function yd(r,t){const e=M(r),n=t.snapshotVersion;let i=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});i=e.Fs;const l=[];t.targetChanges.forEach((m,y)=>{const A=i.get(y);if(!A)return;l.push(e.hi.removeMatchingKeys(o,m.removedDocuments,y).next(()=>e.hi.addMatchingKeys(o,m.addedDocuments,y)));let S=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?S=S.withResumeToken(dt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),i=i.insert(y,S),function(x,b,B){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=md?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(A,S,m)&&l.push(e.hi.updateTargetData(o,S))});let h=Ht(),d=q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),l.push(Ed(o,a,t.documentUpdates).next(m=>{h=m.Ls,d=m.ks})),!n.isEqual(L.min())){const m=e.hi.getLastRemoteSnapshotVersion(o).next(y=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(m)}return V.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Fs=i,o))}function Ed(r,t,e){let n=q(),i=q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let a=Ht();return e.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):N(cs,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{Ls:a,ks:i}})}function Td(r,t){const e=M(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Yi),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function vd(r,t){const e=M(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.hi.getTargetData(n,t).next(o=>o?(i=o,V.resolve(i)):e.hi.allocateTargetId(n).next(a=>(i=new re(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.hi.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(n.targetId,n),e.Ms.set(t,n.targetId)),n})}async function qi(r,t,e){const n=M(r),i=n.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Ge(a))throw a;N(cs,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Fs=n.Fs.remove(t),n.Ms.delete(i.target)}function pa(r,t,e){const n=M(r);let i=L.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const y=M(h),A=y.Ms.get(m);return A!==void 0?V.resolve(y.Fs.get(A)):y.hi.getTargetData(d,m)}(n,a,Mt(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>n.Cs.getDocumentsMatchingQuery(a,t,e?i:L.min(),e?o:q())).next(l=>(Id(n,sh(t),l),{documents:l,qs:o})))}function Id(r,t,e){let n=r.xs.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.xs.set(t,n)}class ga{constructor(){this.activeTargetIds=hh()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class wd{constructor(){this.Fo=new ga,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,n){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new ga,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ad{xo(t){}shutdown(){}}/**
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
 */const _a="ConnectivityMonitor";class ya{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){N(_a,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){N(_a,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let cr=null;function Bi(){return cr===null?cr=function(){return 268435456+Math.round(2147483648*Math.random())}():cr++,"0x"+cr.toString(16)}/**
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
 */const Ai="RestConnection",Rd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Pd{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===Er?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(t,e,n,i,o){const a=Bi(),l=this.Go(t,e.toUriEncodedString());N(Ai,`Sending RPC '${t}' ${a}:`,l,n);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,i,o);const{host:d}=new URL(l),m=qa(d);return this.jo(t,l,h,n,m).then(y=>(N(Ai,`Received RPC '${t}' ${a}: `,y),y),y=>{throw Wt(Ai,`RPC '${t}' ${a} failed with error: `,y,"url: ",l,"request:",n),y})}Jo(t,e,n,i,o,a){return this.Wo(t,e,n,i,o)}zo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$e}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}Go(t,e){const n=Rd[t];return`${this.$o}/v1/${e}:${n}`}terminate(){}}/**
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
 */class Vd{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const _t="WebChannelConnection";class Sd extends Pd{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,n,i,o){const a=Bi();return new Promise((l,h)=>{const d=new ja;d.setWithCredentials(!0),d.listenOnce($a.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case hr.NO_ERROR:const y=d.getResponseJson();N(_t,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(y)),l(y);break;case hr.TIMEOUT:N(_t,`RPC '${t}' ${a} timed out`),h(new C(P.DEADLINE_EXCEEDED,"Request time out"));break;case hr.HTTP_ERROR:const A=d.getStatus();if(N(_t,`RPC '${t}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S==null?void 0:S.error;if(D&&D.status&&D.message){const x=function(B){const $=B.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN}(D.status);h(new C(x,D.message))}else h(new C(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new C(P.UNAVAILABLE,"Connection failed."));break;default:O(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{N(_t,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(i);N(_t,`RPC '${t}' ${a} sending request:`,i),d.send(e,"POST",m,n,15)})}P_(t,e,n){const i=Bi(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=za(),l=Ga(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");N(_t,`Creating RPC '${t}' stream ${i}: ${m}`,h);const y=a.createWebChannel(m,h);this.T_(y);let A=!1,S=!1;const D=new Vd({Ho:b=>{S?N(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(A||(N(_t,`Opening RPC '${t}' stream ${i} transport.`),y.open(),A=!0),N(_t,`RPC '${t}' stream ${i} sending:`,b),y.send(b))},Yo:()=>y.close()}),x=(b,B,$)=>{b.listen(B,z=>{try{$(z)}catch(ot){setTimeout(()=>{throw ot},0)}})};return x(y,pn.EventType.OPEN,()=>{S||(N(_t,`RPC '${t}' stream ${i} transport opened.`),D.s_())}),x(y,pn.EventType.CLOSE,()=>{S||(S=!0,N(_t,`RPC '${t}' stream ${i} transport closed`),D.__(),this.I_(y))}),x(y,pn.EventType.ERROR,b=>{S||(S=!0,Wt(_t,`RPC '${t}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),D.__(new C(P.UNAVAILABLE,"The operation could not be completed")))}),x(y,pn.EventType.MESSAGE,b=>{var B;if(!S){const $=b.data[0];G(!!$,16349);const z=$,ot=(z==null?void 0:z.error)||((B=z[0])===null||B===void 0?void 0:B.error);if(ot){N(_t,`RPC '${t}' stream ${i} received error:`,ot);const $t=ot.status;let ut=function(_){const E=et[_];if(E!==void 0)return Cu(E)}($t),v=ot.message;ut===void 0&&(ut=P.INTERNAL,v="Unknown error status: "+$t+" with message "+ot.message),S=!0,D.__(new C(ut,v)),y.close()}else N(_t,`RPC '${t}' stream ${i} received:`,$),D.a_($)}}),x(l,Qa.STAT_EVENT,b=>{b.stat===Ci.PROXY?N(_t,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===Ci.NOPROXY&&N(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.o_()},0),D}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(e=>e===t)}}function Ri(){return typeof document<"u"?document:null}/**
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
 */function $r(r){return new bh(r,!0)}/**
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
 */class Qu{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=n,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,e-n);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Ea="PersistentStream";class Gu{constructor(t,e,n,i,o,a,l,h){this.Fi=t,this.w_=n,this.S_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Qu(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Bt(e.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.b_===e&&this.W_(n,i)},n=>{t(()=>{const i=new C(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)})})}W_(t,e){const n=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.e_(()=>{n(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{n(()=>this.G_(i))}),this.stream.onMessage(i=>{n(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return N(Ea,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget(()=>this.b_===t?e():(N(Ea,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cd extends Gu{constructor(t,e,n,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=kh(this.serializer,t),n=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Lt(a.readTime):L.min()}(t);return this.listener.J_(e,n)}H_(t){const e={};e.database=Ui(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=xi(h)?{documents:Oh(o,h)}:{query:Ou(o,h).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Nu(o,a.resumeToken);const d=Oi(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=Rr(o,a.snapshotVersion.toTimestamp());const d=Oi(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const n=Uh(this.serializer,t);n&&(e.labels=n),this.k_(e)}Y_(t){const e={};e.database=Ui(this.serializer),e.removeTarget=t,this.k_(e)}}class bd extends Gu{constructor(t,e,n,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return G(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){G(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Fh(t.writeResults,t.commitTime),n=Lt(t.commitTime);return this.listener.ta(n,e)}na(){const t={};t.database=Ui(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>xh(this.serializer,n))};this.k_(e)}}/**
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
 */class Dd{}class Nd extends Dd{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new C(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(t,Mi(e,n),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new C(P.UNKNOWN,o.toString())})}Jo(t,e,n,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Jo(t,Mi(e,n),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new C(P.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class kd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Bt(e),this._a=!1):N("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Re="RemoteStore";class xd{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo(a=>{n.enqueueAndForget(async()=>{Ve(this)&&(N(Re,"Restarting streams for network reachability change."),await async function(h){const d=M(h);d.Ia.add(4),await ze(d),d.Aa.set("Unknown"),d.Ia.delete(4),await kn(d)}(this))})}),this.Aa=new kd(n,i)}}async function kn(r){if(Ve(r))for(const t of r.da)await t(!0)}async function ze(r){for(const t of r.da)await t(!1)}function zu(r,t){const e=M(r);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),fs(e)?ds(e):Ke(e).x_()&&hs(e,t))}function ls(r,t){const e=M(r),n=Ke(e);e.Ta.delete(t),n.x_()&&Ku(e,t),e.Ta.size===0&&(n.x_()?n.B_():Ve(e)&&e.Aa.set("Unknown"))}function hs(r,t){if(r.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ke(r).H_(t)}function Ku(r,t){r.Ra.$e(t),Ke(r).Y_(t)}function ds(r){r.Ra=new Ph({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>r.Ta.get(t)||null,lt:()=>r.datastore.serializer.databaseId}),Ke(r).start(),r.Aa.aa()}function fs(r){return Ve(r)&&!Ke(r).M_()&&r.Ta.size>0}function Ve(r){return M(r).Ia.size===0}function Wu(r){r.Ra=void 0}async function Fd(r){r.Aa.set("Online")}async function Od(r){r.Ta.forEach((t,e)=>{hs(r,t)})}async function Md(r,t){Wu(r),fs(r)?(r.Aa.la(t),ds(r)):r.Aa.set("Unknown")}async function Ld(r,t,e){if(r.Aa.set("Online"),t instanceof Du&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ta.delete(l),i.Ra.removeTarget(l))}(r,t)}catch(n){N(Re,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Vr(r,n)}else if(t instanceof pr?r.Ra.Ye(t):t instanceof bu?r.Ra.it(t):r.Ra.et(t),!e.isEqual(L.min()))try{const n=await $u(r.localStore);e.compareTo(n)>=0&&await function(o,a){const l=o.Ra.Pt(a);return l.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ta.get(d);m&&o.Ta.set(d,m.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,d)=>{const m=o.Ta.get(h);if(!m)return;o.Ta.set(h,m.withResumeToken(dt.EMPTY_BYTE_STRING,m.snapshotVersion)),Ku(o,h);const y=new re(m.target,h,d,m.sequenceNumber);hs(o,y)}),o.remoteSyncer.applyRemoteEvent(l)}(r,e)}catch(n){N(Re,"Failed to raise snapshot:",n),await Vr(r,n)}}async function Vr(r,t,e){if(!Ge(t))throw t;r.Ia.add(1),await ze(r),r.Aa.set("Offline"),e||(e=()=>$u(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(Re,"Retrying IndexedDB access"),await e(),r.Ia.delete(1),await kn(r)})}function Hu(r,t){return t().catch(e=>Vr(r,e,t))}async function Qr(r){const t=M(r),e=le(t);let n=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Yi;for(;Ud(t);)try{const i=await Td(t.localStore,n);if(i===null){t.Pa.length===0&&e.B_();break}n=i.batchId,qd(t,i)}catch(i){await Vr(t,i)}Xu(t)&&Yu(t)}function Ud(r){return Ve(r)&&r.Pa.length<10}function qd(r,t){r.Pa.push(t);const e=le(r);e.x_()&&e.Z_&&e.X_(t.mutations)}function Xu(r){return Ve(r)&&!le(r).M_()&&r.Pa.length>0}function Yu(r){le(r).start()}async function Bd(r){le(r).na()}async function jd(r){const t=le(r);for(const e of r.Pa)t.X_(e.mutations)}async function $d(r,t,e){const n=r.Pa.shift(),i=rs.from(n,t,e);await Hu(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Qr(r)}async function Qd(r,t){t&&le(r).Z_&&await async function(n,i){if(function(a){return Ah(a)&&a!==P.ABORTED}(i.code)){const o=n.Pa.shift();le(n).N_(),await Hu(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Qr(n)}}(r,t),Xu(r)&&Yu(r)}async function Ta(r,t){const e=M(r);e.asyncQueue.verifyOperationInProgress(),N(Re,"RemoteStore received new credentials");const n=Ve(e);e.Ia.add(3),await ze(e),n&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await kn(e)}async function Gd(r,t){const e=M(r);t?(e.Ia.delete(2),await kn(e)):t||(e.Ia.add(2),await ze(e),e.Aa.set("Unknown"))}function Ke(r){return r.Va||(r.Va=function(e,n,i){const o=M(e);return o.ia(),new Cd(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Zo:Fd.bind(null,r),e_:Od.bind(null,r),n_:Md.bind(null,r),J_:Ld.bind(null,r)}),r.da.push(async t=>{t?(r.Va.N_(),fs(r)?ds(r):r.Aa.set("Unknown")):(await r.Va.stop(),Wu(r))})),r.Va}function le(r){return r.ma||(r.ma=function(e,n,i){const o=M(e);return o.ia(),new bd(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:Bd.bind(null,r),n_:Qd.bind(null,r),ea:jd.bind(null,r),ta:$d.bind(null,r)}),r.da.push(async t=>{t?(r.ma.N_(),await Qr(r)):(await r.ma.stop(),r.Pa.length>0&&(N(Re,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}/**
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
 */class ms{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const a=Date.now()+n,l=new ms(t,e,a,i,o);return l.start(n),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ps(r,t){if(Bt("AsyncQueue",`${t}: ${r}`),Ge(r))return new C(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Oe{static emptySet(t){return new Oe(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||F.comparator(e.key,n.key):(e,n)=>F.comparator(e.key,n.key),this.keyedMap=gn(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Oe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Oe;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class va{constructor(){this.fa=new Y(F.comparator)}track(t){const e=t.doc.key,n=this.fa.get(e);n?t.type!==0&&n.type===3?this.fa=this.fa.insert(e,t):t.type===3&&n.type!==1?this.fa=this.fa.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.fa=this.fa.remove(e):t.type===1&&n.type===2?this.fa=this.fa.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):O(63341,{At:t,ga:n}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal((e,n)=>{t.push(n)}),t}}class je{constructor(t,e,n,i,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new je(t,e,Oe.emptySet(e),a,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Mr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class zd{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(t=>t.ba())}}class Kd{constructor(){this.queries=Ia(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,n){const i=M(e),o=i.queries;i.queries=Ia(),o.forEach((a,l)=>{for(const h of l.wa)h.onError(n)})})(this,new C(P.ABORTED,"Firestore shutting down"))}}function Ia(){return new Pe(r=>_u(r),Mr)}async function gs(r,t){const e=M(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.Sa()&&t.ba()&&(n=2):(o=new zd,n=t.ba()?0:1);try{switch(n){case 0:o.ya=await e.onListen(i,!0);break;case 1:o.ya=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=ps(a,`Initialization of query '${ke(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&ys(e)}async function _s(r,t){const e=M(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const a=o.wa.indexOf(t);a>=0&&(o.wa.splice(a,1),o.wa.length===0?i=t.ba()?0:1:!o.Sa()&&t.ba()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Wd(r,t){const e=M(r);let n=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.wa)l.Ca(i)&&(n=!0);a.ya=i}}n&&ys(e)}function Hd(r,t,e){const n=M(r),i=n.queries.get(t);if(i)for(const o of i.wa)o.onError(e);n.queries.delete(t)}function ys(r){r.Da.forEach(t=>{t.next()})}var ji,wa;(wa=ji||(ji={})).Fa="default",wa.Cache="cache";class Es{constructor(t,e,n){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new je(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const n=e!=="Offline";return(!this.options.ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=je.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==ji.Cache}}/**
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
 */class Ju{constructor(t){this.key=t}}class Zu{constructor(t){this.key=t}}class Xd{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=q(),this.mutatedKeys=q(),this.Xa=yu(t),this.eu=new Oe(this.Xa)}get tu(){return this.Ha}nu(t,e){const n=e?e.ru:new va,i=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,y)=>{const A=i.get(m),S=Lr(this.query,y)?y:null,D=!!A&&this.mutatedKeys.has(A.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;A&&S?A.data.isEqual(S.data)?D!==x&&(n.track({type:3,doc:S}),b=!0):this.iu(A,S)||(n.track({type:2,doc:S}),b=!0,(h&&this.Xa(S,h)>0||d&&this.Xa(S,d)<0)&&(l=!0)):!A&&S?(n.track({type:0,doc:S}),b=!0):A&&!S&&(n.track({type:1,doc:A}),b=!0,(h||d)&&(l=!0)),b&&(S?(a=a.add(S),o=x?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{eu:a,ru:n,Ds:l,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort((m,y)=>function(S,D){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{At:b})}};return x(S)-x(D)}(m.type,y.type)||this.Xa(m.doc,y.doc)),this.su(n),i=i!=null&&i;const l=e&&!i?this.ou():[],h=this.Za.size===0&&this.current&&!i?1:0,d=h!==this.Ya;return this.Ya=h,a.length!==0||d?{snapshot:new je(this.query,t.eu,o,a,t.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new va,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=q(),this.eu.forEach(n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))});const e=[];return t.forEach(n=>{this.Za.has(n)||e.push(new Zu(n))}),this.Za.forEach(n=>{t.has(n)||e.push(new Ju(n))}),e}uu(t){this.Ha=t.qs,this.Za=q();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return je.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ts="SyncEngine";class Yd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Jd{constructor(t){this.key=t,this.lu=!1}}class Zd{constructor(t,e,n,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Pe(l=>_u(l),Mr),this.Tu=new Map,this.Iu=new Set,this.du=new Y(F.comparator),this.Eu=new Map,this.Au=new os,this.Ru={},this.Vu=new Map,this.mu=Be.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function tf(r,t,e=!0){const n=sc(r);let i;const o=n.Pu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.cu()):i=await tc(n,t,e,!0),i}async function ef(r,t){const e=sc(r);await tc(e,t,!0,!1)}async function tc(r,t,e,n){const i=await vd(r.localStore,Mt(t)),o=i.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let l;return n&&(l=await nf(r,t,o,a==="current",i.resumeToken)),r.isPrimaryClient&&e&&zu(r.remoteStore,i),l}async function nf(r,t,e,n,i){r.gu=(y,A,S)=>async function(x,b,B,$){let z=b.view.nu(B);z.Ds&&(z=await pa(x.localStore,b.query,!1).then(({documents:v})=>b.view.nu(v,z)));const ot=$&&$.targetChanges.get(b.targetId),$t=$&&$.targetMismatches.get(b.targetId)!=null,ut=b.view.applyChanges(z,x.isPrimaryClient,ot,$t);return Ra(x,b.targetId,ut._u),ut.snapshot}(r,y,A,S);const o=await pa(r.localStore,t,!0),a=new Xd(t,o.qs),l=a.nu(o.documents),h=Nn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=a.applyChanges(l,r.isPrimaryClient,h);Ra(r,e,d._u);const m=new Yd(t,e,a);return r.Pu.set(t,m),r.Tu.has(e)?r.Tu.get(e).push(t):r.Tu.set(e,[t]),d.snapshot}async function rf(r,t,e){const n=M(r),i=n.Pu.get(t),o=n.Tu.get(i.targetId);if(o.length>1)return n.Tu.set(i.targetId,o.filter(a=>!Mr(a,t))),void n.Pu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await qi(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&ls(n.remoteStore,i.targetId),$i(n,i.targetId)}).catch(Qe)):($i(n,i.targetId),await qi(n.localStore,i.targetId,!0))}async function sf(r,t){const e=M(r),n=e.Pu.get(t),i=e.Tu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ls(e.remoteStore,n.targetId))}async function of(r,t,e){const n=ff(r);try{const i=await function(a,l){const h=M(a),d=X.now(),m=l.reduce((S,D)=>S.add(D.key),q());let y,A;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=Ht(),x=q();return h.Os.getEntries(S,m).next(b=>{D=b,D.forEach((B,$)=>{$.isValidDocument()||(x=x.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,D)).next(b=>{y=b;const B=[];for(const $ of l){const z=yh($,y.get($.key).overlayedDocument);z!=null&&B.push(new fe($.key,z,cu(z.value.mapValue),It.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,B,l)}).next(b=>{A=b;const B=b.applyToLocalDocumentSet(y,x);return h.documentOverlayCache.saveOverlays(S,b.batchId,B)})}).then(()=>({batchId:A.batchId,changes:Tu(y)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(a,l,h){let d=a.Ru[a.currentUser.toKey()];d||(d=new Y(U)),d=d.insert(l,h),a.Ru[a.currentUser.toKey()]=d}(n,i.batchId,e),await xn(n,i.changes),await Qr(n.remoteStore)}catch(i){const o=ps(i,"Failed to persist write");e.reject(o)}}async function ec(r,t){const e=M(r);try{const n=await yd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Eu.get(o);a&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?G(a.lu,14607):i.removedDocuments.size>0&&(G(a.lu,42227),a.lu=!1))}),await xn(e,n,t)}catch(n){await Qe(n)}}function Aa(r,t,e){const n=M(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Pu.forEach((o,a)=>{const l=a.view.va(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const h=M(a);h.onlineState=l;let d=!1;h.queries.forEach((m,y)=>{for(const A of y.wa)A.va(l)&&(d=!0)}),d&&ys(h)}(n.eventManager,t),i.length&&n.hu.J_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function af(r,t,e){const n=M(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Eu.get(t),o=i&&i.key;if(o){let a=new Y(F.comparator);a=a.insert(o,Et.newNoDocument(o,L.min()));const l=q().add(o),h=new jr(L.min(),new Map,new Y(U),a,l);await ec(n,h),n.du=n.du.remove(o),n.Eu.delete(t),vs(n)}else await qi(n.localStore,t,!1).then(()=>$i(n,t,e)).catch(Qe)}async function uf(r,t){const e=M(r),n=t.batch.batchId;try{const i=await _d(e.localStore,t);rc(e,n,null),nc(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await xn(e,i)}catch(i){await Qe(i)}}async function cf(r,t,e){const n=M(r);try{const i=await function(a,l){const h=M(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,l).next(y=>(G(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(d,y))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(n.localStore,t);rc(n,t,e),nc(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await xn(n,i)}catch(i){await Qe(i)}}function nc(r,t){(r.Vu.get(t)||[]).forEach(e=>{e.resolve()}),r.Vu.delete(t)}function rc(r,t,e){const n=M(r);let i=n.Ru[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Ru[n.currentUser.toKey()]=i}}function $i(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Tu.get(t))r.Pu.delete(n),e&&r.hu.pu(n,e);r.Tu.delete(t),r.isPrimaryClient&&r.Au.zr(t).forEach(n=>{r.Au.containsKey(n)||ic(r,n)})}function ic(r,t){r.Iu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(ls(r.remoteStore,e),r.du=r.du.remove(t),r.Eu.delete(e),vs(r))}function Ra(r,t,e){for(const n of e)n instanceof Ju?(r.Au.addReference(n.key,t),lf(r,n)):n instanceof Zu?(N(Ts,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,t),r.Au.containsKey(n.key)||ic(r,n.key)):O(19791,{yu:n})}function lf(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Iu.has(n)||(N(Ts,"New document in limbo: "+e),r.Iu.add(n),vs(r))}function vs(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const e=new F(K.fromString(t)),n=r.mu.next();r.Eu.set(n,new Jd(e)),r.du=r.du.insert(e,n),zu(r.remoteStore,new re(Mt(Or(e.path)),n,"TargetPurposeLimboResolution",Nr.ue))}}async function xn(r,t,e){const n=M(r),i=[],o=[],a=[];n.Pu.isEmpty()||(n.Pu.forEach((l,h)=>{a.push(n.gu(h,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const y=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){i.push(d);const y=us.Es(h.targetId,d);o.push(y)}}))}),await Promise.all(a),n.hu.J_(i),await async function(h,d){const m=M(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>V.forEach(d,A=>V.forEach(A.Is,S=>m.persistence.referenceDelegate.addReference(y,A.targetId,S)).next(()=>V.forEach(A.ds,S=>m.persistence.referenceDelegate.removeReference(y,A.targetId,S)))))}catch(y){if(!Ge(y))throw y;N(cs,"Failed to update sequence numbers: "+y)}for(const y of d){const A=y.targetId;if(!y.fromCache){const S=m.Fs.get(A),D=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(D);m.Fs=m.Fs.insert(A,x)}}}(n.localStore,o))}async function hf(r,t){const e=M(r);if(!e.currentUser.isEqual(t)){N(Ts,"User change. New user:",t.toKey());const n=await ju(e.localStore,t);e.currentUser=t,function(o,a){o.Vu.forEach(l=>{l.forEach(h=>{h.reject(new C(P.CANCELLED,a))})}),o.Vu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await xn(e,n.Bs)}}function df(r,t){const e=M(r),n=e.Eu.get(t);if(n&&n.lu)return q().add(n.key);{let i=q();const o=e.Tu.get(t);if(!o)return i;for(const a of o){const l=e.Pu.get(a);i=i.unionWith(l.view.tu)}return i}}function sc(r){const t=M(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=ec.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=df.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=af.bind(null,t),t.hu.J_=Wd.bind(null,t.eventManager),t.hu.pu=Hd.bind(null,t.eventManager),t}function ff(r){const t=M(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=uf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cf.bind(null,t),t}class Sr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=$r(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return gd(this.persistence,new fd,t.initialUser,this.serializer)}Du(t){return new Bu(as.Vi,this.serializer)}bu(t){return new wd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sr.provider={build:()=>new Sr};class mf extends Sr{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){G(this.persistence.referenceDelegate instanceof Pr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Xh(n,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new Bu(n=>Pr.Vi(n,e),this.serializer)}}class Qi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Aa(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=hf.bind(null,this.syncEngine),await Gd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Kd}()}createDatastore(t){const e=$r(t.databaseInfo.databaseId),n=function(o){return new Sd(o)}(t.databaseInfo);return function(o,a,l,h){return new Nd(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,a,l){return new xd(n,i,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Aa(this.syncEngine,e,0),function(){return ya.C()?new ya:new Ad}())}createSyncEngine(t,e){return function(i,o,a,l,h,d,m){const y=new Zd(i,o,a,l,h,d);return m&&(y.fu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=M(i);N(Re,"RemoteStore shutting down."),o.Ia.add(5),await ze(o),o.Ea.shutdown(),o.Aa.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Qi.provider={build:()=>new Qi};/**
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
 *//**
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
 */class Is{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const he="FirestoreClient";class pf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=Ki.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{N(he,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(N(he,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ps(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Pi(r,t){r.asyncQueue.verifyOperationInProgress(),N(he,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await ju(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>{Wt("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{N("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Wt("Terminating Firestore due to IndexedDb database deletion failed",i)})}),r._offlineComponents=t}async function Pa(r,t){r.asyncQueue.verifyOperationInProgress();const e=await oc(r);N(he,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Ta(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Ta(t.remoteStore,i)),r._onlineComponents=t}async function oc(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(he,"Using user provided OfflineComponentProvider");try{await Pi(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Wt("Error using user provided cache. Falling back to memory cache: "+e),await Pi(r,new Sr)}}else N(he,"Using default OfflineComponentProvider"),await Pi(r,new mf(void 0));return r._offlineComponents}async function Gr(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(he,"Using user provided OnlineComponentProvider"),await Pa(r,r._uninitializedComponentsProvider._online)):(N(he,"Using default OnlineComponentProvider"),await Pa(r,new Qi))),r._onlineComponents}function ac(r){return oc(r).then(t=>t.persistence)}function uc(r){return Gr(r).then(t=>t.remoteStore)}function gf(r){return Gr(r).then(t=>t.syncEngine)}function _f(r){return Gr(r).then(t=>t.datastore)}async function Cr(r){const t=await Gr(r),e=t.eventManager;return e.onListen=tf.bind(null,t.syncEngine),e.onUnlisten=rf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ef.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=sf.bind(null,t.syncEngine),e}function yf(r){return r.asyncQueue.enqueue(async()=>{const t=await ac(r),e=await uc(r);return t.setNetworkEnabled(!0),function(i){const o=M(i);return o.Ia.delete(0),kn(o)}(e)})}function Ef(r){return r.asyncQueue.enqueue(async()=>{const t=await ac(r),e=await uc(r);return t.setNetworkEnabled(!1),async function(i){const o=M(i);o.Ia.add(0),await ze(o),o.Aa.set("Offline")}(e)})}function Tf(r,t,e={}){const n=new Nt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const m=new Is({next:A=>{m.Ou(),a.enqueueAndForget(()=>_s(o,y));const S=A.docs.has(l);!S&&A.fromCache?d.reject(new C(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&A.fromCache&&h&&h.source==="server"?d.reject(new C(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),y=new Es(Or(l.path),m,{includeMetadataChanges:!0,ka:!0});return gs(o,y)}(await Cr(r),r.asyncQueue,t,e,n)),n.promise}function vf(r,t,e={}){const n=new Nt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const m=new Is({next:A=>{m.Ou(),a.enqueueAndForget(()=>_s(o,y)),A.fromCache&&h.source==="server"?d.reject(new C(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),y=new Es(l,m,{includeMetadataChanges:!0,ka:!0});return gs(o,y)}(await Cr(r),r.asyncQueue,t,e,n)),n.promise}function If(r,t,e){const n=new Nt;return r.asyncQueue.enqueueAndForget(async()=>{try{const i=await _f(r);n.resolve(async function(a,l,h){var d;const m=M(a),{request:y,ft:A,parent:S}=Mh(m.serializer,ih(l),h);m.connection.Qo||delete y.parent;const D=(await m.Jo("RunAggregationQuery",m.serializer.databaseId,S,y,1)).filter(b=>!!b.result);G(D.length===1,64727);const x=(d=D[0].result)===null||d===void 0?void 0:d.aggregateFields;return Object.keys(x).reduce((b,B)=>(b[A[B]]=x[B],b),{})}(i,t,e))}catch(i){n.reject(i)}}),n.promise}/**
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
 */function cc(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const Va=new Map;/**
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
 */const lc="firestore.googleapis.com",Sa=!0;class Ca{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new C(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lc,this.ssl=Sa}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Sa;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=qu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Wh)throw new C(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Dl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cc((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new C(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new C(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new C(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Fn{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ca({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new C(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ca(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Il;switch(n.type){case"firstParty":return new Pl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Va.get(e);n&&(N("ComponentProvider","Removing Datastore"),Va.delete(e),n.terminate())}(this),Promise.resolve()}}function hc(r,t,e,n={}){var i;r=it(r,Fn);const o=qa(t),a=r._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:r._getEmulatorOptions()}),h=`${t}:${e}`;o&&(cl(`https://${h}`),ll("Firestore",!0)),a.host!==lc&&a.host!==h&&Wt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:n});if(!hl(d,l)&&(r._setSettings(d),n.mockUserToken)){let m,y;if(typeof n.mockUserToken=="string")m=n.mockUserToken,y=yt.MOCK_USER;else{m=dl(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const A=n.mockUserToken.sub||n.mockUserToken.user_id;if(!A)throw new C(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new yt(A)}r._authCredentials=new wl(new Wa(m,y))}}/**
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
 */class kt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new kt(this.firestore,t,this._query)}}class Z{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new se(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Z(this.firestore,t,this._key)}toJSON(){return{type:Z._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(bn(e,Z._jsonSchema))return new Z(t,n||null,new F(K.fromString(e.referencePath)))}}Z._jsonSchemaVersion="firestore/documentReference/1.0",Z._jsonSchema={type:rt("string",Z._jsonSchemaVersion),referencePath:rt("string")};class se extends kt{constructor(t,e,n){super(t,e,Or(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Z(this.firestore,null,new F(t))}withConverter(t){return new se(this.firestore,t,this._path)}}function lr(r,t,...e){if(r=Ct(r),Wi("collection","path",t),r instanceof Fn){const n=K.fromString(t,...e);return jo(n),new se(r,null,n)}{if(!(r instanceof Z||r instanceof se))throw new C(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(K.fromString(t,...e));return jo(n),new se(r.firestore,null,n)}}function ba(r,t){if(r=it(r,Fn),Wi("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new C(P.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new kt(r,null,function(n){return new Xt(K.emptyPath(),n)}(t))}function ee(r,t,...e){if(r=Ct(r),arguments.length===1&&(t=Ki.newId()),Wi("doc","path",t),r instanceof Fn){const n=K.fromString(t,...e);return Bo(n),new Z(r,null,new F(n))}{if(!(r instanceof Z||r instanceof se))throw new C(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(K.fromString(t,...e));return Bo(n),new Z(r.firestore,r instanceof se?r.converter:null,new F(n))}}/**
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
 */const Da="AsyncQueue";class Na{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Qu(this,"async_queue_retry"),this.oc=()=>{const n=Ri();n&&N(Da,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=t;const e=Ri();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=Ri();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const e=new Nt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Ge(t))throw t;N(Da,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const e=this._c.then(()=>(this.nc=!0,t().catch(n=>{throw this.tc=n,this.nc=!1,Bt("INTERNAL UNHANDLED ERROR: ",ka(n)),n}).then(n=>(this.nc=!1,n))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const i=ms.createAndSchedule(this,t,e,n,o=>this.lc(o));return this.ec.push(i),i}ac(){this.tc&&O(47125,{hc:ka(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function ka(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
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
 */function xa(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(r,["next","error","complete"])}class bt extends Fn{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Na,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Na(t),this._firestoreClient=void 0,await t}}}function wt(r,t){const e=typeof r=="object"?r:fl(),n=typeof r=="string"?r:t||Er,i=ml(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=pl("firestore");o&&hc(i,...o)}return i}function me(r){if(r._terminated)throw new C(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||wf(r),r._firestoreClient}function wf(r){var t,e,n;const i=r._freezeSettings(),o=function(l,h,d,m){return new Ql(l,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,cc(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new pf(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(r._componentsProvider))}function Af(r){if(r._initialized&&!r._terminated)throw new C(P.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Nt;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!ve.C())return Promise.resolve();const i=n+ld;await ve.delete(i)}(hd(r._databaseId,r._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function Rf(r){return yf(me(r=it(r,bt)))}function Pf(r){return Ef(me(r=it(r,bt)))}/**
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
 *//**
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
 */class Vf{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class Sf{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Dt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Dt(dt.fromBase64String(t))}catch(e){throw new C(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Dt(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(bn(t,Dt._jsonSchema))return Dt.fromBase64String(t.bytes)}}Dt._jsonSchemaVersion="firestore/bytes/1.0",Dt._jsonSchema={type:rt("string",Dt._jsonSchemaVersion),bytes:rt("string")};/**
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
 */class On{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new C(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ws{constructor(t){this._methodName=t}}/**
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
 */class Ut{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new C(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new C(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ut._jsonSchemaVersion}}static fromJSON(t){if(bn(t,Ut._jsonSchema))return new Ut(t.latitude,t.longitude)}}Ut._jsonSchemaVersion="firestore/geoPoint/1.0",Ut._jsonSchema={type:rt("string",Ut._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class qt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(bn(t,qt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new qt(t.vectorValues);throw new C(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qt._jsonSchemaVersion="firestore/vectorValue/1.0",qt._jsonSchema={type:rt("string",qt._jsonSchemaVersion),vectorValues:rt("object")};/**
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
 */const Cf=/^__.*__$/;class bf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new fe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Dn(t,this.data,e,this.fieldTransforms)}}class dc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new fe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function fc(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{Ec:r})}}class As{constructor(t,e,n,i,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new As(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.fc(t),i}gc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return br(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(fc(this.Ec)&&Cf.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Df{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||$r(t)}Dc(t,e,n,i=!1){return new As({Ec:t,methodName:e,bc:n,path:ht.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function We(r){const t=r._freezeSettings(),e=$r(r._databaseId);return new Df(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Rs(r,t,e,n,i,o={}){const a=r.Dc(o.merge||o.mergeFields?2:0,t,e,i);Ps("Data must be an object, but it was:",a,n);const l=_c(n,a);let h,d;if(o.merge)h=new St(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const y of o.mergeFields){const A=Gi(t,y,e);if(!a.contains(A))throw new C(P.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Ec(m,A)||m.push(A)}h=new St(m),d=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,d=a.fieldTransforms;return new bf(new Rt(l),h,d)}class zr extends ws{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof zr}}function mc(r,t,e,n){const i=r.Dc(1,t,e);Ps("Data must be an object, but it was:",i,n);const o=[],a=Rt.empty();de(n,(h,d)=>{const m=Vs(t,h,e);d=Ct(d);const y=i.gc(m);if(d instanceof zr)o.push(m);else{const A=Mn(d,y);A!=null&&(o.push(m),a.set(m,A))}});const l=new St(o);return new dc(a,l,i.fieldTransforms)}function pc(r,t,e,n,i,o){const a=r.Dc(1,t,e),l=[Gi(t,n,e)],h=[i];if(o.length%2!=0)throw new C(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)l.push(Gi(t,o[A])),h.push(o[A+1]);const d=[],m=Rt.empty();for(let A=l.length-1;A>=0;--A)if(!Ec(d,l[A])){const S=l[A];let D=h[A];D=Ct(D);const x=a.gc(S);if(D instanceof zr)d.push(S);else{const b=Mn(D,x);b!=null&&(d.push(S),m.set(S,b))}}const y=new St(d);return new dc(m,y,a.fieldTransforms)}function gc(r,t,e,n=!1){return Mn(e,r.Dc(n?4:3,t))}function Mn(r,t){if(yc(r=Ct(r)))return Ps("Unsupported field value:",t,r),_c(r,t);if(r instanceof ws)return function(n,i){if(!fc(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return function(n,i){const o=[];let a=0;for(const l of n){let h=Mn(l,i.yc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=Ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return dh(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=X.fromDate(n);return{timestampValue:Rr(i.serializer,o)}}if(n instanceof X){const o=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Rr(i.serializer,o)}}if(n instanceof Ut)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Dt)return{bytesValue:Nu(i.serializer,n._byteString)};if(n instanceof Z){const o=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ss(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof qt)return function(a,l){return{mapValue:{fields:{[ou]:{stringValue:uu},[Tr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.wc("VectorValues must only contain numeric values.");return ns(l.serializer,d)})}}}}}}(n,i);throw i.wc(`Unsupported field value: ${Dr(n)}`)}(r,t)}function _c(r,t){const e={};return tu(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):de(r,(n,i)=>{const o=Mn(i,t.Vc(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function yc(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof X||r instanceof Ut||r instanceof Dt||r instanceof Z||r instanceof ws||r instanceof qt)}function Ps(r,t,e){if(!yc(e)||!Xa(e)){const n=Dr(e);throw n==="an object"?t.wc(r+" a custom object"):t.wc(r+" "+n)}}function Gi(r,t,e){if((t=Ct(t))instanceof On)return t._internalPath;if(typeof t=="string")return Vs(r,t);throw br("Field path arguments must be of type string or ",r,!1,void 0,e)}const Nf=new RegExp("[~\\*/\\[\\]]");function Vs(r,t,e){if(t.search(Nf)>=0)throw br(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new On(...t.split("."))._internalPath}catch{throw br(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function br(r,t,e,n,i){const o=n&&!n.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${i}`),h+=")"),new C(P.INVALID_ARGUMENT,l+r+h)}function Ec(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class Ss{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Z(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Kr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class kf extends Ss{data(){return super.data()}}function Kr(r,t){return typeof t=="string"?Vs(r,t):t instanceof On?t._internalPath:t._delegate._internalPath}/**
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
 */function Tc(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new C(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cs{}class Ln extends Cs{}function Fa(r,t,...e){let n=[];t instanceof Cs&&n.push(t),n=n.concat(e),function(o){const a=o.filter(h=>h instanceof He).length,l=o.filter(h=>h instanceof Un).length;if(a>1||a>0&&l>0)throw new C(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Un extends Ln{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Un(t,e,n)}_apply(t){const e=this._parse(t);return Ic(t._query,e),new kt(t.firestore,t.converter,Fi(t._query,e))}_parse(t){const e=We(t.firestore);return function(o,a,l,h,d,m,y){let A;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new C(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ma(y,m);const D=[];for(const x of y)D.push(Oa(h,o,x));A={arrayValue:{values:D}}}else A=Oa(h,o,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ma(y,m),A=gc(l,a,y,m==="in"||m==="not-in");return nt.create(d,m,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function xf(r,t,e){const n=t,i=Kr("where",r);return Un._create(i,n,e)}class He extends Cs{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new He(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Ft.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const l=o.getFlattenedFilters();for(const h of l)Ic(a,h),a=Fi(a,h)}(t._query,e),new kt(t.firestore,t.converter,Fi(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ff(...r){return r.forEach(t=>wc("or",t)),He._create("or",r)}function Of(...r){return r.forEach(t=>wc("and",t)),He._create("and",r)}class bs extends Ln{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new bs(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new C(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new C(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vn(o,a)}(t._query,this._field,this._direction);return new kt(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new Xt(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function Mf(r,t="asc"){const e=t,n=Kr("orderBy",r);return bs._create(n,e)}class Wr extends Ln{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Wr(t,e,n)}_apply(t){return new kt(t.firestore,t.converter,Ir(t._query,this._limit,this._limitType))}}function Lf(r){return Ya("limit",r),Wr._create("limit",r,"F")}function Uf(r){return Ya("limitToLast",r),Wr._create("limitToLast",r,"L")}class Hr extends Ln{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Hr(t,e,n)}_apply(t){const e=vc(t,this.type,this._docOrFields,this._inclusive);return new kt(t.firestore,t.converter,function(i,o){return new Xt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,o,i.endAt)}(t._query,e))}}function qf(...r){return Hr._create("startAt",r,!0)}function Bf(...r){return Hr._create("startAfter",r,!1)}class Xr extends Ln{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Xr(t,e,n)}_apply(t){const e=vc(t,this.type,this._docOrFields,this._inclusive);return new kt(t.firestore,t.converter,function(i,o){return new Xt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,o)}(t._query,e))}}function jf(...r){return Xr._create("endBefore",r,!1)}function $f(...r){return Xr._create("endAt",r,!0)}function vc(r,t,e,n){if(e[0]=Ct(e[0]),e[0]instanceof Ss)return function(o,a,l,h,d){if(!h)throw new C(P.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const m=[];for(const y of Fe(o))if(y.field.isKeyField())m.push(vr(a,h.key));else{const A=h.data.field(y.field);if(xr(A))throw new C(P.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+y.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(A===null){const S=y.field.canonicalString();throw new C(P.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}m.push(A)}return new qe(m,d)}(r._query,r.firestore._databaseId,t,e[0]._document,n);{const i=We(r.firestore);return function(a,l,h,d,m,y){const A=a.explicitOrderBy;if(m.length>A.length)throw new C(P.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let D=0;D<m.length;D++){const x=m[D];if(A[D].field.isKeyField()){if(typeof x!="string")throw new C(P.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof x}`);if(!es(a)&&x.indexOf("/")!==-1)throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${x}' contains a slash.`);const b=a.path.child(K.fromString(x));if(!F.isDocumentKey(b))throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const B=new F(b);S.push(vr(l,B))}else{const b=gc(h,d,x);S.push(b)}}return new qe(S,y)}(r._query,r.firestore._databaseId,i,t,e,n)}}function Oa(r,t,e){if(typeof(e=Ct(e))=="string"){if(e==="")throw new C(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!es(t)&&e.indexOf("/")!==-1)throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(K.fromString(e));if(!F.isDocumentKey(n))throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return vr(r,new F(n))}if(e instanceof Z)return vr(r,e._key);throw new C(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dr(e)}.`)}function Ma(r,t){if(!Array.isArray(r)||r.length===0)throw new C(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ic(r,t){const e=function(i,o){for(const a of i)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new C(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new C(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function wc(r,t){if(!(t instanceof Un||t instanceof He))throw new C(P.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Qf{convertValue(t,e="none"){switch(ce(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ue(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return de(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[Tr].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>tt(a.doubleValue));return new qt(o)}convertGeoPoint(t){return new Ut(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Fr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(An(t));default:return null}}convertTimestamp(t){const e=ae(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=K.fromString(t);G(Uu(n),9688,{name:t});const i=new Rn(n.get(1),n.get(3)),o=new F(n.popFirst(5));return i.isEqual(e)||Bt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Ds(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}function Gf(){return new Vf("count")}class yn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ie extends Ss{constructor(t,e,n,i,o,a){super(t,e,n,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Kr("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new C(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ie._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ie._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ie._jsonSchema={type:rt("string",Ie._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class gr extends Ie{data(t={}){return super.data(t)}}class we{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new yn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new gr(this._firestore,this._userDataWriter,n.key,n,new yn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new C(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const h=new gr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new gr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new yn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:zf(l.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new C(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=we._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ki.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function zf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:r})}}/**
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
 */function La(r){r=it(r,Z);const t=it(r.firestore,bt);return Tf(me(t),r._key).then(e=>Ac(t,r,e))}we._jsonSchemaVersion="firestore/querySnapshot/1.0",we._jsonSchema={type:rt("string",we._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};class Yr extends Qf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Dt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Z(this.firestore,null,e)}}function Ua(r){r=it(r,kt);const t=it(r.firestore,bt),e=me(t),n=new Yr(t);return Tc(r._query),vf(e,r._query).then(i=>new we(t,n,r,i))}function Kf(r,t,e){r=it(r,Z);const n=it(r.firestore,bt),i=Ds(r.converter,t,e);return qn(n,[Rs(We(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,It.none())])}function Wf(r,t,e,...n){r=it(r,Z);const i=it(r.firestore,bt),o=We(i);let a;return a=typeof(t=Ct(t))=="string"||t instanceof On?pc(o,"updateDoc",r._key,t,e,n):mc(o,"updateDoc",r._key,t),qn(i,[a.toMutation(r._key,It.exists(!0))])}function Hf(r){return qn(it(r.firestore,bt),[new Br(r._key,It.none())])}function Xf(r,t){const e=it(r.firestore,bt),n=ee(r),i=Ds(r.converter,t);return qn(e,[Rs(We(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,It.exists(!1))]).then(()=>n)}function Vi(r,...t){var e,n,i;r=Ct(r);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||xa(t[a])||(o=t[a++]);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(xa(t[a])){const y=t[a];t[a]=(e=y.next)===null||e===void 0?void 0:e.bind(y),t[a+1]=(n=y.error)===null||n===void 0?void 0:n.bind(y),t[a+2]=(i=y.complete)===null||i===void 0?void 0:i.bind(y)}let h,d,m;if(r instanceof Z)d=it(r.firestore,bt),m=Or(r._key.path),h={next:y=>{t[a]&&t[a](Ac(d,r,y))},error:t[a+1],complete:t[a+2]};else{const y=it(r,kt);d=it(y.firestore,bt),m=y._query;const A=new Yr(d);h={next:S=>{t[a]&&t[a](new we(d,A,y,S))},error:t[a+1],complete:t[a+2]},Tc(r._query)}return function(A,S,D,x){const b=new Is(x),B=new Es(S,b,D);return A.asyncQueue.enqueueAndForget(async()=>gs(await Cr(A),B)),()=>{b.Ou(),A.asyncQueue.enqueueAndForget(async()=>_s(await Cr(A),B))}}(me(d),m,l,h)}function qn(r,t){return function(n,i){const o=new Nt;return n.asyncQueue.enqueueAndForget(async()=>of(await gf(n),i,o)),o.promise}(me(r),t)}function Ac(r,t,e){const n=e.docs.get(t._key),i=new Yr(r);return new Ie(r,i,t._key,n,new yn(e.hasPendingWrites,e.fromCache),t.converter)}function Yf(r){return Jf(r,{count:Gf()})}function Jf(r,t){const e=it(r.firestore,bt),n=me(e),i=jl(t,(o,a)=>new Ih(a,o.aggregateType,o._internalFieldPath));return If(n,r._query,i).then(o=>function(l,h,d){const m=new Yr(l);return new Sf(h,m,d)}(e,r,o))}/**
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
 */class Zf{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=We(t)}set(t,e,n){this._verifyNotCommitted();const i=Si(t,this._firestore),o=Ds(i.converter,e,n),a=Rs(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,n);return this._mutations.push(a.toMutation(i._key,It.none())),this}update(t,e,n,...i){this._verifyNotCommitted();const o=Si(t,this._firestore);let a;return a=typeof(e=Ct(e))=="string"||e instanceof On?pc(this._dataReader,"WriteBatch.update",o._key,e,n,i):mc(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(a.toMutation(o._key,It.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Si(t,this._firestore);return this._mutations=this._mutations.concat(new Br(e._key,It.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Si(r,t){if((r=Ct(r)).firestore!==t)throw new C(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function tm(r){return me(r=it(r,bt)),new Zf(r,t=>qn(r,t))}(function(t,e=!0){(function(i){$e=i})(yl),sl(new ol("firestore",(n,{instanceIdentifier:i,options:o})=>{const a=n.getProvider("app").getImmediate(),l=new bt(new Al(n.getProvider("auth-internal")),new Vl(a,n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new C(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rn(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),xo(Oo,Mo,t),xo(Oo,Mo,"esm2017")})();class rm extends vl{constructor(){super(...arguments),this.unsubscribesMap=new Map}async addDocument(t){const e=wt(),{reference:n,data:i}=t,o=await Xf(lr(e,n),i);return{reference:{id:o.id,path:o.path}}}async setDocument(t){const e=wt(),{reference:n,data:i,merge:o}=t;await Kf(ee(e,n),i,{merge:o})}async getDocument(t){const e=wt(),{reference:n}=t,i=await La(ee(e,n)),o=i.data();return{snapshot:{id:i.id,path:i.ref.path,data:o===void 0?null:o,metadata:{hasPendingWrites:i.metadata.hasPendingWrites,fromCache:i.metadata.fromCache}}}}async updateDocument(t){const e=wt(),{reference:n,data:i}=t;await Wf(ee(e,n),i)}async deleteDocument(t){const e=wt(),{reference:n}=t;await Hf(ee(e,n))}async writeBatch(t){const e=wt(),{operations:n}=t,i=tm(e);for(const o of n){const{type:a,reference:l,data:h,options:d}=o,m=ee(e,l);switch(a){case"set":i.set(m,h,d??{});break;case"update":i.update(m,h??{});break;case"delete":i.delete(m);break}}await i.commit()}async getCollection(t){const e=await this.buildCollectionQuery(t,"collection");return{snapshots:(await Ua(e)).docs.map(i=>({id:i.id,path:i.ref.path,data:i.data(),metadata:{hasPendingWrites:i.metadata.hasPendingWrites,fromCache:i.metadata.fromCache}}))}}async getCollectionGroup(t){const e=await this.buildCollectionQuery(t,"collectionGroup");return{snapshots:(await Ua(e)).docs.map(i=>({id:i.id,path:i.ref.path,data:i.data(),metadata:{hasPendingWrites:i.metadata.hasPendingWrites,fromCache:i.metadata.fromCache}}))}}async getCountFromServer(t){const e=wt(),{reference:n}=t,i=lr(e,n);return{count:(await Yf(i)).data().count}}async clearPersistence(){const t=wt();await Af(t)}async enableNetwork(){const t=wt();await Rf(t)}async disableNetwork(){const t=wt();await Pf(t)}async useEmulator(t){const e=wt(),n=t.port||8080;hc(e,t.host,n)}async addDocumentSnapshotListener(t,e){const n=wt(),i=Vi(ee(n,t.reference),{includeMetadataChanges:t.includeMetadataChanges,source:t.source},a=>{const l=a.data(),h={snapshot:{id:a.id,path:a.ref.path,data:l===void 0?null:l,metadata:{hasPendingWrites:a.metadata.hasPendingWrites,fromCache:a.metadata.fromCache}}};e(h,void 0)},a=>e(null,a)),o=Date.now().toString();return this.unsubscribesMap.set(o,i),o}async addCollectionSnapshotListener(t,e){const n=await this.buildCollectionQuery(t,"collection"),i=Vi(n,{includeMetadataChanges:t.includeMetadataChanges,source:t.source},a=>{const l={snapshots:a.docs.map(h=>({id:h.id,path:h.ref.path,data:h.data(),metadata:{hasPendingWrites:h.metadata.hasPendingWrites,fromCache:h.metadata.fromCache}}))};e(l,void 0)},a=>e(null,a)),o=Date.now().toString();return this.unsubscribesMap.set(o,i),o}async addCollectionGroupSnapshotListener(t,e){const n=await this.buildCollectionQuery(t,"collectionGroup"),i=Vi(n,{includeMetadataChanges:t.includeMetadataChanges,source:t.source},a=>{const l={snapshots:a.docs.map(h=>({id:h.id,path:h.ref.path,data:h.data(),metadata:{hasPendingWrites:h.metadata.hasPendingWrites,fromCache:h.metadata.fromCache}}))};e(l,void 0)},a=>e(null,a)),o=Date.now().toString();return this.unsubscribesMap.set(o,i),o}async removeSnapshotListener(t){const e=this.unsubscribesMap.get(t.callbackId);e&&(e(),this.unsubscribesMap.delete(t.callbackId))}async removeAllListeners(){this.unsubscribesMap.forEach(t=>t()),this.unsubscribesMap.clear(),await super.removeAllListeners()}async buildCollectionQuery(t,e){const n=wt();let i;if(t.compositeFilter){const o=this.buildFirebaseQueryCompositeFilterConstraint(t.compositeFilter),a=await this.buildFirebaseQueryNonFilterConstraints(t.queryConstraints||[]);i=Fa(e==="collection"?lr(n,t.reference):ba(n,t.reference),o,...a)}else{const o=await this.buildFirebaseQueryConstraints(t.queryConstraints||[]);i=Fa(e==="collection"?lr(n,t.reference):ba(n,t.reference),...o)}return i}buildFirebaseQueryCompositeFilterConstraint(t){const e=this.buildFirebaseQueryFilterConstraints(t.queryConstraints);return t.type==="and"?Of(...e):Ff(...e)}buildFirebaseQueryFilterConstraints(t){const e=[];for(const n of t){const i=this.buildFirebaseQueryFilterConstraint(n);e.push(i)}return e}buildFirebaseQueryFilterConstraint(t){return t.type==="where"?this.buildFirebaseQueryFieldFilterConstraint(t):this.buildFirebaseQueryCompositeFilterConstraint(t)}buildFirebaseQueryFieldFilterConstraint(t){return xf(t.fieldPath,t.opStr,t.value)}async buildFirebaseQueryNonFilterConstraints(t){const e=[];for(const n of t){const i=await this.buildFirebaseQueryNonFilterConstraint(n);e.push(i)}return e}async buildFirebaseQueryNonFilterConstraint(t){switch(t.type){case"orderBy":return Mf(t.fieldPath,t.directionStr);case"limit":return Lf(t.limit);case"limitToLast":return Uf(t.limit);case"startAt":case"startAfter":case"endAt":case"endBefore":{const e=wt(),n=await La(ee(e,t.reference));switch(t.type){case"startAt":return qf(n);case"startAfter":return Bf(n);case"endAt":return $f(n);case"endBefore":return jf(n)}}}}async buildFirebaseQueryConstraints(t){const e=[];for(const n of t){const i=await this.buildFirebaseQueryConstraint(n);e.push(i)}return e}async buildFirebaseQueryConstraint(t){return t.type==="where"?this.buildFirebaseQueryFieldFilterConstraint(t):await this.buildFirebaseQueryNonFilterConstraint(t)}}export{rm as FirebaseFirestoreWeb};
