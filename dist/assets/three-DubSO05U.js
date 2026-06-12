import{r as rS,a as oS}from"./vendor-qsdxRy4C.js";var Wf={exports:{}},Co={};var m0;function lS(){if(m0)return Co;m0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var g0;function cS(){return g0||(g0=1,Wf.exports=lS()),Wf.exports}var UA=cS(),qf={exports:{}},Do={},Yf={exports:{}},Zf={};var _0;function uS(){return _0||(_0=1,(function(o){function e(U,B){var it=U.length;U.push(B);t:for(;0<it;){var pt=it-1>>>1,vt=U[pt];if(0<l(vt,B))U[pt]=B,U[it]=vt,it=pt;else break t}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var B=U[0],it=U.pop();if(it!==B){U[0]=it;t:for(var pt=0,vt=U.length,Ut=vt>>>1;pt<Ut;){var Ct=2*(pt+1)-1,Gt=U[Ct],$t=Ct+1,Kt=U[$t];if(0>l(Gt,it))$t<vt&&0>l(Kt,Gt)?(U[pt]=Kt,U[$t]=it,pt=$t):(U[pt]=Gt,U[Ct]=it,pt=Ct);else if($t<vt&&0>l(Kt,it))U[pt]=Kt,U[$t]=it,pt=$t;else break t}}return B}function l(U,B){var it=U.sortIndex-B.sortIndex;return it!==0?it:U.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,v=null,_=3,E=!1,R=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(U){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=U)s(p),B.sortIndex=B.expirationTime,e(m,B);else break;B=i(p)}}function k(U){if(w=!1,N(U),!R)if(i(m)!==null)R=!0,L||(L=!0,K());else{var B=i(p);B!==null&&W(k,B.startTime-U)}}var L=!1,V=-1,A=5,P=-1;function Y(){return M?!0:!(o.unstable_now()-P<A)}function z(){if(M=!1,L){var U=o.unstable_now();P=U;var B=!0;try{t:{R=!1,w&&(w=!1,D(V),V=-1),E=!0;var it=_;try{e:{for(N(U),v=i(m);v!==null&&!(v.expirationTime>U&&Y());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,_=v.priorityLevel;var vt=pt(v.expirationTime<=U);if(U=o.unstable_now(),typeof vt=="function"){v.callback=vt,N(U),B=!0;break e}v===i(m)&&s(m),N(U)}else s(m);v=i(m)}if(v!==null)B=!0;else{var Ut=i(p);Ut!==null&&W(k,Ut.startTime-U),B=!1}}break t}finally{v=null,_=it,E=!1}B=void 0}}finally{B?K():L=!1}}}var K;if(typeof O=="function")K=function(){O(z)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ct=lt.port2;lt.port1.onmessage=z,K=function(){ct.postMessage(null)}}else K=function(){S(z,0)};function W(U,B){V=S(function(){U(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(U){switch(_){case 1:case 2:case 3:var B=3;break;default:B=_}var it=_;_=B;try{return U()}finally{_=it}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(U,B){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var it=_;_=U;try{return B()}finally{_=it}},o.unstable_scheduleCallback=function(U,B,it){var pt=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?pt+it:pt):it=pt,U){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=it+vt,U={id:x++,callback:B,priorityLevel:U,startTime:it,expirationTime:vt,sortIndex:-1},it>pt?(U.sortIndex=it,e(p,U),i(m)===null&&U===i(p)&&(w?(D(V),V=-1):w=!0,W(k,it-pt))):(U.sortIndex=vt,e(m,U),R||E||(R=!0,L||(L=!0,K()))),U},o.unstable_shouldYield=Y,o.unstable_wrapCallback=function(U){var B=_;return function(){var it=_;_=B;try{return U.apply(this,arguments)}finally{_=it}}}})(Zf)),Zf}var v0;function fS(){return v0||(v0=1,Yf.exports=uS()),Yf.exports}var x0;function hS(){if(x0)return Do;x0=1;var o=fS(),e=rS(),i=oS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,b=c.child;b;){if(b===a){g=!0,a=c,r=f;break}if(b===r){g=!0,r=c,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,r=c;break}if(b===r){g=!0,r=f,a=c;break}b=b.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function ct(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case k:return"Suspense";case L:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case O:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return n=t.displayName||null,n!==null?n:ct(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return ct(t(n))}catch{}}return null}var W=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},pt=[],vt=-1;function Ut(t){return{current:t}}function Ct(t){0>vt||(t.current=pt[vt],pt[vt]=null,vt--)}function Gt(t,n){vt++,pt[vt]=t.current,t.current=n}var $t=Ut(null),Kt=Ut(null),ft=Ut(null),Lt=Ut(null);function Mt(t,n){switch(Gt(ft,n),Gt(Kt,t),Gt($t,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?zg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=zg(n),t=Ig(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ct($t),Gt($t,t)}function Wt(){Ct($t),Ct(Kt),Ct(ft)}function te(t){t.memoizedState!==null&&Gt(Lt,t);var n=$t.current,a=Ig(n,t.type);n!==a&&(Gt(Kt,t),Gt($t,a))}function Zt(t){Kt.current===t&&(Ct($t),Ct(Kt)),Lt.current===t&&(Ct(Lt),To._currentValue=it)}var Ge,ce;function me(t){if(Ge===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ge=n&&n[1]||"",ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ge+t+ce}var Ce=!1;function re(t,n){if(!t||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(at){var et=at}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(at){et=at}t.call(mt.prototype)}}else{try{throw Error()}catch(at){et=at}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(at){if(at&&et&&typeof at.stack=="string")return[at.stack,et.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var F=g.split(`
`),Q=b.split(`
`);for(c=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(r===F.length||c===Q.length)for(r=F.length-1,c=Q.length-1;1<=r&&0<=c&&F[r]!==Q[c];)c--;for(;1<=r&&0<=c;r--,c--)if(F[r]!==Q[c]){if(r!==1||c!==1)do if(r--,c--,0>c||F[r]!==Q[c]){var ot=`
`+F[r].replace(" at new "," at ");return t.displayName&&ot.includes("<anonymous>")&&(ot=ot.replace("<anonymous>",t.displayName)),ot}while(1<=r&&0<=c);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?me(a):""}function en(t,n){switch(t.tag){case 26:case 27:case 5:return me(t.type);case 16:return me("Lazy");case 13:return t.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return re(t.type,!1);case 11:return re(t.type.render,!1);case 1:return re(t.type,!0);case 31:return me("Activity");default:return""}}function ke(t){try{var n="",a=null;do n+=en(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Sn=Object.prototype.hasOwnProperty,G=o.unstable_scheduleCallback,Qe=o.unstable_cancelCallback,ue=o.unstable_shouldYield,Pe=o.unstable_requestPaint,St=o.unstable_now,Ye=o.unstable_getCurrentPriorityLevel,C=o.unstable_ImmediatePriority,y=o.unstable_UserBlockingPriority,Z=o.unstable_NormalPriority,dt=o.unstable_LowPriority,_t=o.unstable_IdlePriority,Et=o.log,At=o.unstable_setDisableYieldValue,st=null,rt=null;function Rt(t){if(typeof Et=="function"&&At(t),rt&&typeof rt.setStrictMode=="function")try{rt.setStrictMode(st,t)}catch{}}var Dt=Math.clz32?Math.clz32:ee,Tt=Math.log,yt=Math.LN2;function ee(t){return t>>>=0,t===0?32:31-(Tt(t)/yt|0)|0}var ne=256,fe=262144,I=4194304;function xt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ut(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?c=xt(r):(g&=b,g!==0?c=xt(g):a||(a=b&~t,a!==0&&(c=xt(a))))):(b=r&~f,b!==0?c=xt(b):g!==0?c=xt(g):a||(a=r&~t,a!==0&&(c=xt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ot(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function bt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gt(){var t=I;return I<<=1,(I&62914560)===0&&(I=4194304),t}function Vt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Qt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Je(t,n,a,r,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,F=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ot=31-Dt(a),mt=1<<ot;b[ot]=0,F[ot]=-1;var et=Q[ot];if(et!==null)for(Q[ot]=null,ot=0;ot<et.length;ot++){var at=et[ot];at!==null&&(at.lane&=-536870913)}a&=~mt}r!==0&&be(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function be(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Dt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function ni(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Dt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Xn(t,n){var a=n&-n;return a=(a&42)!==0?1:ns(a),(a&(t.suspendedLanes|n))!==0?0:a}function ns(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Fr(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:l0(t.type))}function Br(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var Rn=Math.random().toString(36).slice(2),nn="__reactFiber$"+Rn,Mn="__reactProps$"+Rn,Hi="__reactContainer$"+Rn,va="__reactEvents$"+Rn,Wo="__reactListeners$"+Rn,Os="__reactHandles$"+Rn,zr="__reactResources$"+Rn,xa="__reactMarker$"+Rn;function Ir(t){delete t[nn],delete t[Mn],delete t[va],delete t[Wo],delete t[Os]}function Sa(t){var n=t[nn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Hi]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=qg(t);t!==null;){if(a=t[nn])return a;t=qg(t)}return n}t=a,a=t.parentNode}return null}function Ma(t){if(t=t[nn]||t[Hi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function is(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ea(t){var n=t[zr];return n||(n=t[zr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function on(t){t[xa]=!0}var qo=new Set,T={};function X(t,n){tt(t,n),tt(t+"Capture",n)}function tt(t,n){for(T[t]=n,t=0;t<n.length;t++)qo.add(n[t])}var J=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$={},Nt={};function Bt(t){return Sn.call(Nt,t)?!0:Sn.call($,t)?!1:J.test(t)?Nt[t]=!0:($[t]=!0,!1)}function wt(t,n,a){if(Bt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function It(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function zt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function qt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ae(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function kt(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ee(t){if(!t._valueTracker){var n=ae(t)?"checked":"value";t._valueTracker=kt(t,n,""+t[n])}}function Ze(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=ae(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Ve(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var De=/[\n"\\]/g;function we(t){return t.replace(De,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ft(t,n,a,r,c,f,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+qt(n)):t.value!==""+qt(n)&&(t.value=""+qt(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?he(t,g,qt(n)):a!=null?he(t,g,qt(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+qt(b):t.removeAttribute("name")}function Cn(t,n,a,r,c,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ee(t);return}a=a!=null?""+qt(a):"",n=n!=null?""+qt(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=b?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Ee(t)}function he(t,n,a){n==="number"&&Ve(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function dn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+qt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function kn(t,n,a){if(n!=null&&(n=""+qt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+qt(a):""}function pi(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(W(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=qt(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Ee(t)}function Wn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ue=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ke(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Ue.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function mi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Ke(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Ke(t,f,n[f])}function Re(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ya=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function as(t){return ya.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Gi(){}var Gc=null;function Vc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ps=null,Fs=null;function Bd(t){var n=Ma(t);if(n&&(t=n.stateNode)){var a=t[Mn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ft(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+we(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[Mn]||null;if(!c)throw Error(s(90));Ft(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Ze(r)}break t;case"textarea":kn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&dn(t,!!a.multiple,n,!1)}}}var Xc=!1;function zd(t,n,a){if(Xc)return t(n,a);Xc=!0;try{var r=t(n);return r}finally{if(Xc=!1,(Ps!==null||Fs!==null)&&(Nl(),Ps&&(n=Ps,t=Fs,Fs=Ps=null,Bd(n),t)))for(n=0;n<t.length;n++)Bd(t[n])}}function Hr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Mn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=!1;if(Vi)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){kc=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{kc=!1}var Ta=null,Wc=null,Yo=null;function Id(){if(Yo)return Yo;var t,n=Wc,a=n.length,r,c="value"in Ta?Ta.value:Ta.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return Yo=c.slice(t,1<r?1-r:void 0)}function Zo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function Hd(){return!1}function Pn(t){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ko:Hd,this.isPropagationStopped=Hd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=Pn(ss),Vr=v({},ss,{view:0,detail:0}),av=Pn(Vr),qc,Yc,Xr,Qo=v({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(qc=t.screenX-Xr.screenX,Yc=t.screenY-Xr.screenY):Yc=qc=0,Xr=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Yc}}),Gd=Pn(Qo),sv=v({},Qo,{dataTransfer:0}),rv=Pn(sv),ov=v({},Vr,{relatedTarget:0}),Zc=Pn(ov),lv=v({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=Pn(lv),uv=v({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fv=Pn(uv),hv=v({},ss,{data:0}),Vd=Pn(hv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=mv[t])?!!n[t]:!1}function Kc(){return gv}var _v=v({},Vr,{key:function(t){if(t.key){var n=dv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vv=Pn(_v),xv=v({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=Pn(xv),Sv=v({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),Mv=Pn(Sv),Ev=v({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=Pn(Ev),Tv=v({},Qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=Pn(Tv),Av=v({},ss,{newState:0,oldState:0}),Rv=Pn(Av),Cv=[9,13,27,32],jc=Vi&&"CompositionEvent"in window,kr=null;Vi&&"documentMode"in document&&(kr=document.documentMode);var Dv=Vi&&"TextEvent"in window&&!kr,kd=Vi&&(!jc||kr&&8<kr&&11>=kr),Wd=" ",qd=!1;function Yd(t,n){switch(t){case"keyup":return Cv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function wv(t,n){switch(t){case"compositionend":return Zd(n);case"keypress":return n.which!==32?null:(qd=!0,Wd);case"textInput":return t=n.data,t===Wd&&qd?null:t;default:return null}}function Uv(t,n){if(Bs)return t==="compositionend"||!jc&&Yd(t,n)?(t=Id(),Yo=Wc=Ta=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kd&&n.locale!=="ko"?null:n.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Lv[t.type]:n==="textarea"}function jd(t,n,a,r){Ps?Fs?Fs.push(r):Fs=[r]:Ps=r,n=Hl(n,"onChange"),0<n.length&&(a=new jo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Wr=null,qr=null;function Nv(t){Lg(t,0)}function Jo(t){var n=is(t);if(Ze(n))return t}function Qd(t,n){if(t==="change")return n}var Jd=!1;if(Vi){var Qc;if(Vi){var Jc="oninput"in document;if(!Jc){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),Jc=typeof $d.oninput=="function"}Qc=Jc}else Qc=!1;Jd=Qc&&(!document.documentMode||9<document.documentMode)}function tp(){Wr&&(Wr.detachEvent("onpropertychange",ep),qr=Wr=null)}function ep(t){if(t.propertyName==="value"&&Jo(qr)){var n=[];jd(n,qr,t,Vc(t)),zd(Nv,n)}}function Ov(t,n,a){t==="focusin"?(tp(),Wr=n,qr=a,Wr.attachEvent("onpropertychange",ep)):t==="focusout"&&tp()}function Pv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jo(qr)}function Fv(t,n){if(t==="click")return Jo(n)}function Bv(t,n){if(t==="input"||t==="change")return Jo(n)}function zv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:zv;function Yr(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Sn.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ip(t,n){var a=np(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=np(a)}}function ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function sp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ve(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ve(t.document)}return n}function $c(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Iv=Vi&&"documentMode"in document&&11>=document.documentMode,zs=null,tu=null,Zr=null,eu=!1;function rp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eu||zs==null||zs!==Ve(r)||(r=zs,"selectionStart"in r&&$c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&Yr(Zr,r)||(Zr=r,r=Hl(tu,"onSelect"),0<r.length&&(n=new jo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=zs)))}function rs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Is={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},nu={},op={};Vi&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function os(t){if(nu[t])return nu[t];if(!Is[t])return t;var n=Is[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in op)return nu[t]=n[a];return t}var lp=os("animationend"),cp=os("animationiteration"),up=os("animationstart"),Hv=os("transitionrun"),Gv=os("transitionstart"),Vv=os("transitioncancel"),fp=os("transitionend"),hp=new Map,iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");iu.push("scrollEnd");function gi(t,n){hp.set(t,n),X(n,[t])}var $o=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Hs=0,au=0;function tl(){for(var t=Hs,n=au=Hs=0;n<t;){var a=ii[n];ii[n++]=null;var r=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&dp(a,c,f)}}function el(t,n,a,r){ii[Hs++]=t,ii[Hs++]=n,ii[Hs++]=a,ii[Hs++]=r,au|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function su(t,n,a,r){return el(t,n,a,r),nl(t)}function ls(t,n){return el(t,null,null,n),nl(t)}function dp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Dt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function nl(t){if(50<_o)throw _o=0,mf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gs={};function Xv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,r){return new Xv(t,n,a,r)}function ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xi(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function pp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function il(t,n,a,r,c,f){var g=0;if(r=t,typeof t=="function")ru(t)&&(g=1);else if(typeof t=="string")g=Zx(t,a,$t.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case P:return t=Yn(31,a,n,c),t.elementType=P,t.lanes=f,t;case w:return cs(a.children,c,f,n);case M:g=8,c|=24;break;case S:return t=Yn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case k:return t=Yn(13,a,n,c),t.elementType=k,t.lanes=f,t;case L:return t=Yn(19,a,n,c),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:g=10;break t;case D:g=9;break t;case N:g=11;break t;case V:g=14;break t;case A:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Yn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function cs(t,n,a,r){return t=Yn(7,t,r,n),t.lanes=a,t}function ou(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function mp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function lu(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var gp=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=gp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ke(n)},gp.set(t,n),n)}return{value:t,source:n,stack:ke(n)}}var Vs=[],Xs=0,al=null,Kr=0,si=[],ri=0,ba=null,Ai=1,Ri="";function ki(t,n){Vs[Xs++]=Kr,Vs[Xs++]=al,al=t,Kr=n}function _p(t,n,a){si[ri++]=Ai,si[ri++]=Ri,si[ri++]=ba,ba=t;var r=Ai;t=Ri;var c=32-Dt(r)-1;r&=~(1<<c),a+=1;var f=32-Dt(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Ai=1<<32-Dt(n)+c|a<<c|r,Ri=f+t}else Ai=1<<f|a<<c|r,Ri=t}function cu(t){t.return!==null&&(ki(t,1),_p(t,1,0))}function uu(t){for(;t===al;)al=Vs[--Xs],Vs[Xs]=null,Kr=Vs[--Xs],Vs[Xs]=null;for(;t===ba;)ba=si[--ri],si[ri]=null,Ri=si[--ri],si[ri]=null,Ai=si[--ri],si[ri]=null}function vp(t,n){si[ri++]=Ai,si[ri++]=Ri,si[ri++]=ba,Ai=n.id,Ri=n.overflow,ba=t}var En=null,We=null,ve=!1,Aa=null,oi=!1,fu=Error(s(519));function Ra(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jr(ai(n,t)),fu}function xp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[nn]=t,n[Mn]=r,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)pe(xo[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Cn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),pi(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Fg(n.textContent,a)?(r.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),r.onScroll!=null&&pe("scroll",n),r.onScrollEnd!=null&&pe("scrollend",n),r.onClick!=null&&(n.onclick=Gi),n=!0):n=!1,n||Ra(t,!0)}function Sp(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:En=En.return}}function ks(t){if(t!==En)return!1;if(!ve)return Sp(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||wf(t.type,t.memoizedProps)),a=!a),a&&We&&Ra(t),Sp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=Wg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=Wg(t)}else n===27?(n=We,Ga(t.type)?(t=Pf,Pf=null,We=t):We=n):We=En?ci(t.stateNode.nextSibling):null;return!0}function us(){We=En=null,ve=!1}function hu(){var t=Aa;return t!==null&&(In===null?In=t:In.push.apply(In,t),Aa=null),t}function jr(t){Aa===null?Aa=[t]:Aa.push(t)}var du=Ut(null),fs=null,Wi=null;function Ca(t,n,a){Gt(du,n._currentValue),n._currentValue=a}function qi(t){t._currentValue=du.current,Ct(du)}function pu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function mu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var F=0;F<n.length;F++)if(b.context===n[F]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),pu(f.return,a,t),r||(g=null);break t}f=b.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),pu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Ws(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var b=c.type;qn(c.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(c===Lt.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(To):t=[To])}c=c.return}t!==null&&mu(n,t,a,r),n.flags|=262144}function sl(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hs(t){fs=t,Wi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function yn(t){return Mp(fs,t)}function rl(t,n){return fs===null&&hs(t),Mp(t,n)}function Mp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(t===null)throw Error(s(308));Wi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Wi=Wi.next=n;return a}var kv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Wv=o.unstable_scheduleCallback,qv=o.unstable_NormalPriority,ln={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new kv,data:new Map,refCount:0}}function Qr(t){t.refCount--,t.refCount===0&&Wv(qv,function(){t.controller.abort()})}var Jr=null,_u=0,qs=0,Ys=null;function Yv(t,n){if(Jr===null){var a=Jr=[];_u=0,qs=Mf(),Ys={status:"pending",value:void 0,then:function(r){a.push(r)}}}return _u++,n.then(Ep,Ep),n}function Ep(){if(--_u===0&&Jr!==null){Ys!==null&&(Ys.status="fulfilled");var t=Jr;Jr=null,qs=0,Ys=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Zv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var yp=U.S;U.S=function(t,n){rg=St(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Yv(t,n),yp!==null&&yp(t,n)};var ds=Ut(null);function vu(){var t=ds.current;return t!==null?t:Xe.pooledCache}function ol(t,n){n===null?Gt(ds,ds.current):Gt(ds,n.pool)}function Tp(){var t=vu();return t===null?null:{parent:ln._currentValue,pool:t}}var Zs=Error(s(460)),xu=Error(s(474)),ll=Error(s(542)),cl={then:function(){}};function bp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ap(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Gi,Gi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t;default:if(typeof n.status=="string")n.then(Gi,Gi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t}throw ms=n,Zs}}function ps(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ms=a,Zs):a}}var ms=null;function Rp(){if(ms===null)throw Error(s(459));var t=ms;return ms=null,t}function Cp(t){if(t===Zs||t===ll)throw Error(s(483))}var Ks=null,$r=0;function ul(t){var n=$r;return $r+=1,Ks===null&&(Ks=[]),Ap(Ks,t,n)}function to(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function fl(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Dp(t){function n(q,H){if(t){var j=q.deletions;j===null?(q.deletions=[H],q.flags|=16):j.push(H)}}function a(q,H){if(!t)return null;for(;H!==null;)n(q,H),H=H.sibling;return null}function r(q){for(var H=new Map;q!==null;)q.key!==null?H.set(q.key,q):H.set(q.index,q),q=q.sibling;return H}function c(q,H){return q=Xi(q,H),q.index=0,q.sibling=null,q}function f(q,H,j){return q.index=j,t?(j=q.alternate,j!==null?(j=j.index,j<H?(q.flags|=67108866,H):j):(q.flags|=67108866,H)):(q.flags|=1048576,H)}function g(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function b(q,H,j,ht){return H===null||H.tag!==6?(H=ou(j,q.mode,ht),H.return=q,H):(H=c(H,j),H.return=q,H)}function F(q,H,j,ht){var Yt=j.type;return Yt===w?ot(q,H,j.props.children,ht,j.key):H!==null&&(H.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===A&&ps(Yt)===H.type)?(H=c(H,j.props),to(H,j),H.return=q,H):(H=il(j.type,j.key,j.props,null,q.mode,ht),to(H,j),H.return=q,H)}function Q(q,H,j,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==j.containerInfo||H.stateNode.implementation!==j.implementation?(H=lu(j,q.mode,ht),H.return=q,H):(H=c(H,j.children||[]),H.return=q,H)}function ot(q,H,j,ht,Yt){return H===null||H.tag!==7?(H=cs(j,q.mode,ht,Yt),H.return=q,H):(H=c(H,j),H.return=q,H)}function mt(q,H,j){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=ou(""+H,q.mode,j),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case E:return j=il(H.type,H.key,H.props,null,q.mode,j),to(j,H),j.return=q,j;case R:return H=lu(H,q.mode,j),H.return=q,H;case A:return H=ps(H),mt(q,H,j)}if(W(H)||K(H))return H=cs(H,q.mode,j,null),H.return=q,H;if(typeof H.then=="function")return mt(q,ul(H),j);if(H.$$typeof===O)return mt(q,rl(q,H),j);fl(q,H)}return null}function et(q,H,j,ht){var Yt=H!==null?H.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return Yt!==null?null:b(q,H,""+j,ht);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case E:return j.key===Yt?F(q,H,j,ht):null;case R:return j.key===Yt?Q(q,H,j,ht):null;case A:return j=ps(j),et(q,H,j,ht)}if(W(j)||K(j))return Yt!==null?null:ot(q,H,j,ht,null);if(typeof j.then=="function")return et(q,H,ul(j),ht);if(j.$$typeof===O)return et(q,H,rl(q,j),ht);fl(q,j)}return null}function at(q,H,j,ht,Yt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return q=q.get(j)||null,b(H,q,""+ht,Yt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case E:return q=q.get(ht.key===null?j:ht.key)||null,F(H,q,ht,Yt);case R:return q=q.get(ht.key===null?j:ht.key)||null,Q(H,q,ht,Yt);case A:return ht=ps(ht),at(q,H,j,ht,Yt)}if(W(ht)||K(ht))return q=q.get(j)||null,ot(H,q,ht,Yt,null);if(typeof ht.then=="function")return at(q,H,j,ul(ht),Yt);if(ht.$$typeof===O)return at(q,H,j,rl(H,ht),Yt);fl(H,ht)}return null}function Ht(q,H,j,ht){for(var Yt=null,ye=null,Xt=H,oe=H=0,_e=null;Xt!==null&&oe<j.length;oe++){Xt.index>oe?(_e=Xt,Xt=null):_e=Xt.sibling;var Te=et(q,Xt,j[oe],ht);if(Te===null){Xt===null&&(Xt=_e);break}t&&Xt&&Te.alternate===null&&n(q,Xt),H=f(Te,H,oe),ye===null?Yt=Te:ye.sibling=Te,ye=Te,Xt=_e}if(oe===j.length)return a(q,Xt),ve&&ki(q,oe),Yt;if(Xt===null){for(;oe<j.length;oe++)Xt=mt(q,j[oe],ht),Xt!==null&&(H=f(Xt,H,oe),ye===null?Yt=Xt:ye.sibling=Xt,ye=Xt);return ve&&ki(q,oe),Yt}for(Xt=r(Xt);oe<j.length;oe++)_e=at(Xt,q,oe,j[oe],ht),_e!==null&&(t&&_e.alternate!==null&&Xt.delete(_e.key===null?oe:_e.key),H=f(_e,H,oe),ye===null?Yt=_e:ye.sibling=_e,ye=_e);return t&&Xt.forEach(function(qa){return n(q,qa)}),ve&&ki(q,oe),Yt}function jt(q,H,j,ht){if(j==null)throw Error(s(151));for(var Yt=null,ye=null,Xt=H,oe=H=0,_e=null,Te=j.next();Xt!==null&&!Te.done;oe++,Te=j.next()){Xt.index>oe?(_e=Xt,Xt=null):_e=Xt.sibling;var qa=et(q,Xt,Te.value,ht);if(qa===null){Xt===null&&(Xt=_e);break}t&&Xt&&qa.alternate===null&&n(q,Xt),H=f(qa,H,oe),ye===null?Yt=qa:ye.sibling=qa,ye=qa,Xt=_e}if(Te.done)return a(q,Xt),ve&&ki(q,oe),Yt;if(Xt===null){for(;!Te.done;oe++,Te=j.next())Te=mt(q,Te.value,ht),Te!==null&&(H=f(Te,H,oe),ye===null?Yt=Te:ye.sibling=Te,ye=Te);return ve&&ki(q,oe),Yt}for(Xt=r(Xt);!Te.done;oe++,Te=j.next())Te=at(Xt,q,oe,Te.value,ht),Te!==null&&(t&&Te.alternate!==null&&Xt.delete(Te.key===null?oe:Te.key),H=f(Te,H,oe),ye===null?Yt=Te:ye.sibling=Te,ye=Te);return t&&Xt.forEach(function(sS){return n(q,sS)}),ve&&ki(q,oe),Yt}function ze(q,H,j,ht){if(typeof j=="object"&&j!==null&&j.type===w&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case E:t:{for(var Yt=j.key;H!==null;){if(H.key===Yt){if(Yt=j.type,Yt===w){if(H.tag===7){a(q,H.sibling),ht=c(H,j.props.children),ht.return=q,q=ht;break t}}else if(H.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===A&&ps(Yt)===H.type){a(q,H.sibling),ht=c(H,j.props),to(ht,j),ht.return=q,q=ht;break t}a(q,H);break}else n(q,H);H=H.sibling}j.type===w?(ht=cs(j.props.children,q.mode,ht,j.key),ht.return=q,q=ht):(ht=il(j.type,j.key,j.props,null,q.mode,ht),to(ht,j),ht.return=q,q=ht)}return g(q);case R:t:{for(Yt=j.key;H!==null;){if(H.key===Yt)if(H.tag===4&&H.stateNode.containerInfo===j.containerInfo&&H.stateNode.implementation===j.implementation){a(q,H.sibling),ht=c(H,j.children||[]),ht.return=q,q=ht;break t}else{a(q,H);break}else n(q,H);H=H.sibling}ht=lu(j,q.mode,ht),ht.return=q,q=ht}return g(q);case A:return j=ps(j),ze(q,H,j,ht)}if(W(j))return Ht(q,H,j,ht);if(K(j)){if(Yt=K(j),typeof Yt!="function")throw Error(s(150));return j=Yt.call(j),jt(q,H,j,ht)}if(typeof j.then=="function")return ze(q,H,ul(j),ht);if(j.$$typeof===O)return ze(q,H,rl(q,j),ht);fl(q,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,H!==null&&H.tag===6?(a(q,H.sibling),ht=c(H,j),ht.return=q,q=ht):(a(q,H),ht=ou(j,q.mode,ht),ht.return=q,q=ht),g(q)):a(q,H)}return function(q,H,j,ht){try{$r=0;var Yt=ze(q,H,j,ht);return Ks=null,Yt}catch(Xt){if(Xt===Zs||Xt===ll)throw Xt;var ye=Yn(29,Xt,null,q.mode);return ye.lanes=ht,ye.return=q,ye}}}var gs=Dp(!0),wp=Dp(!1),Da=!1;function Su(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ae&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=nl(t),dp(t,null,a),n}return el(t,r,n,a),nl(t)}function eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ni(t,a)}}function Eu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var yu=!1;function no(){if(yu){var t=Ys;if(t!==null)throw t}}function io(t,n,a,r){yu=!1;var c=t.updateQueue;Da=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var F=b,Q=F.next;F.next=null,g===null?f=Q:g.next=Q,g=F;var ot=t.alternate;ot!==null&&(ot=ot.updateQueue,b=ot.lastBaseUpdate,b!==g&&(b===null?ot.firstBaseUpdate=Q:b.next=Q,ot.lastBaseUpdate=F))}if(f!==null){var mt=c.baseState;g=0,ot=Q=F=null,b=f;do{var et=b.lane&-536870913,at=et!==b.lane;if(at?(ge&et)===et:(r&et)===et){et!==0&&et===qs&&(yu=!0),ot!==null&&(ot=ot.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ht=t,jt=b;et=n;var ze=a;switch(jt.tag){case 1:if(Ht=jt.payload,typeof Ht=="function"){mt=Ht.call(ze,mt,et);break t}mt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=jt.payload,et=typeof Ht=="function"?Ht.call(ze,mt,et):Ht,et==null)break t;mt=v({},mt,et);break t;case 2:Da=!0}}et=b.callback,et!==null&&(t.flags|=64,at&&(t.flags|=8192),at=c.callbacks,at===null?c.callbacks=[et]:at.push(et))}else at={lane:et,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ot===null?(Q=ot=at,F=mt):ot=ot.next=at,g|=et;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;at=b,b=at.next,at.next=null,c.lastBaseUpdate=at,c.shared.pending=null}}while(!0);ot===null&&(F=mt),c.baseState=F,c.firstBaseUpdate=Q,c.lastBaseUpdate=ot,f===null&&(c.shared.lanes=0),Fa|=g,t.lanes=g,t.memoizedState=mt}}function Up(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Lp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Up(a[t],n)}var js=Ut(null),hl=Ut(0);function Np(t,n){t=ea,Gt(hl,t),Gt(js,n),ea=t|n.baseLanes}function Tu(){Gt(hl,ea),Gt(js,js.current)}function bu(){ea=hl.current,Ct(js),Ct(hl)}var Zn=Ut(null),li=null;function La(t){var n=t.alternate;Gt(an,an.current&1),Gt(Zn,t),li===null&&(n===null||js.current!==null||n.memoizedState!==null)&&(li=t)}function Au(t){Gt(an,an.current),Gt(Zn,t),li===null&&(li=t)}function Op(t){t.tag===22?(Gt(an,an.current),Gt(Zn,t),li===null&&(li=t)):Na()}function Na(){Gt(an,an.current),Gt(Zn,Zn.current)}function Kn(t){Ct(Zn),li===t&&(li=null),Ct(an)}var an=Ut(0);function dl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Nf(a)||Of(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yi=0,se=null,Fe=null,cn=null,pl=!1,Qs=!1,_s=!1,ml=0,ao=0,Js=null,Kv=0;function $e(){throw Error(s(321))}function Ru(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function Cu(t,n,a,r,c,f){return Yi=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=t===null||t.memoizedState===null?_m:Xu,_s=!1,f=a(r,c),_s=!1,Qs&&(f=Fp(n,a,r,c)),Pp(t),f}function Pp(t){U.H=oo;var n=Fe!==null&&Fe.next!==null;if(Yi=0,cn=Fe=se=null,pl=!1,ao=0,Js=null,n)throw Error(s(300));t===null||un||(t=t.dependencies,t!==null&&sl(t)&&(un=!0))}function Fp(t,n,a,r){se=t;var c=0;do{if(Qs&&(Js=null),ao=0,Qs=!1,25<=c)throw Error(s(301));if(c+=1,cn=Fe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=vm,f=n(a,r)}while(Qs);return f}function jv(){var t=U.H,n=t.useState()[0];return n=typeof n.then=="function"?so(n):n,t=t.useState()[0],(Fe!==null?Fe.memoizedState:null)!==t&&(se.flags|=1024),n}function Du(){var t=ml!==0;return ml=0,t}function wu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Uu(t){if(pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}pl=!1}Yi=0,cn=Fe=se=null,Qs=!1,ao=ml=0,Js=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?se.memoizedState=cn=t:cn=cn.next=t,cn}function sn(){if(Fe===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var n=cn===null?se.memoizedState:cn.next;if(n!==null)cn=n,Fe=t;else{if(t===null)throw se.alternate===null?Error(s(467)):Error(s(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},cn===null?se.memoizedState=cn=t:cn=cn.next=t}return cn}function gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(t){var n=ao;return ao+=1,Js===null&&(Js=[]),t=Ap(Js,t,n),n=se,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?_m:Xu),t}function _l(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return so(t);if(t.$$typeof===O)return yn(t)}throw Error(s(438,String(t)))}function Lu(t){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=se.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=gl(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Y;return n.index++,a}function Zi(t,n){return typeof n=="function"?n(t):n}function vl(t){var n=sn();return Nu(n,Fe,t)}function Nu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=g=null,F=null,Q=n,ot=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(ge&mt)===mt:(Yi&mt)===mt){var et=Q.revertLane;if(et===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===qs&&(ot=!0);else if((Yi&et)===et){Q=Q.next,et===qs&&(ot=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},F===null?(b=F=mt,g=f):F=F.next=mt,se.lanes|=et,Fa|=et;mt=Q.action,_s&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else et={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},F===null?(b=F=et,g=f):F=F.next=et,se.lanes|=mt,Fa|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(F===null?g=f:F.next=b,!qn(f,t.memoizedState)&&(un=!0,ot&&(a=Ys,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=F,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Ou(t){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);qn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Bp(t,n,a){var r=se,c=sn(),f=ve;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!qn((Fe||c).memoizedState,a);if(g&&(c.memoizedState=a,un=!0),c=c.queue,Bu(Hp.bind(null,r,c,t),[t]),c.getSnapshot!==n||g||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,$s(9,{destroy:void 0},Ip.bind(null,r,c,a,n),null),Xe===null)throw Error(s(349));f||(Yi&127)!==0||zp(r,n,a)}return a}function zp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=gl(),se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ip(t,n,a,r){n.value=a,n.getSnapshot=r,Gp(n)&&Vp(t)}function Hp(t,n,a){return a(function(){Gp(n)&&Vp(t)})}function Gp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function Vp(t){var n=ls(t,2);n!==null&&Hn(n,t,2)}function Pu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),_s){Rt(!0);try{a()}finally{Rt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},n}function Xp(t,n,a,r){return t.baseState=a,Nu(t,Fe,typeof r=="function"?r:Zi)}function Qv(t,n,a,r,c){if(Ml(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};U.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,kp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=U.T,g={};U.T=g;try{var b=a(c,r),F=U.S;F!==null&&F(g,b),Wp(t,n,b)}catch(Q){Fu(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),U.T=f}}else try{f=a(c,r),Wp(t,n,f)}catch(Q){Fu(t,n,Q)}}function Wp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){qp(t,n,r)},function(r){return Fu(t,n,r)}):qp(t,n,a)}function qp(t,n,a){n.status="fulfilled",n.value=a,Yp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kp(t,a)))}function Fu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Yp(n),n=n.next;while(n!==r)}t.action=null}function Yp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Zp(t,n){return n}function Kp(t,n){if(ve){var a=Xe.formState;if(a!==null){t:{var r=se;if(ve){if(We){e:{for(var c=We,f=oi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){We=ci(c.nextSibling),r=c.data==="F!";break t}}Ra(r)}r=!1}r&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zp,lastRenderedState:n},a.queue=r,a=pm.bind(null,se,r),r.dispatch=a,r=Pu(!1),f=Vu.bind(null,se,!1,r.queue),r=Nn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=Qv.bind(null,se,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function jp(t){var n=sn();return Qp(n,Fe,t)}function Qp(t,n,a){if(n=Nu(t,n,Zp)[0],t=vl(Zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=so(n)}catch(g){throw g===Zs?ll:g}else r=n;n=sn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(se.flags|=2048,$s(9,{destroy:void 0},Jv.bind(null,c,a),null)),[r,f,t]}function Jv(t,n){t.action=n}function Jp(t){var n=sn(),a=Fe;if(a!==null)return Qp(n,a,t);sn(),n=n.memoizedState,a=sn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function $s(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=se.updateQueue,n===null&&(n=gl(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function $p(){return sn().memoizedState}function xl(t,n,a,r){var c=Nn();se.flags|=t,c.memoizedState=$s(1|n,{destroy:void 0},a,r===void 0?null:r)}function Sl(t,n,a,r){var c=sn();r=r===void 0?null:r;var f=c.memoizedState.inst;Fe!==null&&r!==null&&Ru(r,Fe.memoizedState.deps)?c.memoizedState=$s(n,f,a,r):(se.flags|=t,c.memoizedState=$s(1|n,f,a,r))}function tm(t,n){xl(8390656,8,t,n)}function Bu(t,n){Sl(2048,8,t,n)}function $v(t){se.flags|=4;var n=se.updateQueue;if(n===null)n=gl(),se.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function em(t){var n=sn().memoizedState;return $v({ref:n,nextImpl:t}),function(){if((Ae&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function nm(t,n){return Sl(4,2,t,n)}function im(t,n){return Sl(4,4,t,n)}function am(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function sm(t,n,a){a=a!=null?a.concat([t]):null,Sl(4,4,am.bind(null,n,t),a)}function zu(){}function rm(t,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Ru(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function om(t,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Ru(n,r[1]))return r[0];if(r=t(),_s){Rt(!0);try{t()}finally{Rt(!1)}}return a.memoizedState=[r,n],r}function Iu(t,n,a){return a===void 0||(Yi&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=lg(),se.lanes|=t,Fa|=t,a)}function lm(t,n,a,r){return qn(a,n)?a:js.current!==null?(t=Iu(t,a,r),qn(t,n)||(un=!0),t):(Yi&42)===0||(Yi&1073741824)!==0&&(ge&261930)===0?(un=!0,t.memoizedState=a):(t=lg(),se.lanes|=t,Fa|=t,n)}function cm(t,n,a,r,c){var f=B.p;B.p=f!==0&&8>f?f:8;var g=U.T,b={};U.T=b,Vu(t,!1,n,a);try{var F=c(),Q=U.S;if(Q!==null&&Q(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ot=Zv(F,r);ro(t,n,ot,Jn(t))}else ro(t,n,r,Jn(t))}catch(mt){ro(t,n,{then:function(){},status:"rejected",reason:mt},Jn())}finally{B.p=f,g!==null&&b.types!==null&&(g.types=b.types),U.T=g}}function tx(){}function Hu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=um(t).queue;cm(t,c,n,it,a===null?tx:function(){return fm(t),a(r)})}function um(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:it},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function fm(t){var n=um(t);n.next===null&&(n=t.alternate.memoizedState),ro(t,n.next.queue,{},Jn())}function Gu(){return yn(To)}function hm(){return sn().memoizedState}function dm(){return sn().memoizedState}function ex(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=wa(a);var r=Ua(n,t,a);r!==null&&(Hn(r,n,a),eo(r,n,a)),n={cache:gu()},t.payload=n;return}n=n.return}}function nx(t,n,a){var r=Jn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(t)?mm(n,a):(a=su(t,n,a,r),a!==null&&(Hn(a,t,r),gm(a,n,r)))}function pm(t,n,a){var r=Jn();ro(t,n,a,r)}function ro(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(t))mm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(c.hasEagerState=!0,c.eagerState=b,qn(b,g))return el(t,n,c,0),Xe===null&&tl(),!1}catch{}if(a=su(t,n,c,r),a!==null)return Hn(a,t,r),gm(a,n,r),!0}return!1}function Vu(t,n,a,r){if(r={lane:2,revertLane:Mf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ml(t)){if(n)throw Error(s(479))}else n=su(t,a,r,2),n!==null&&Hn(n,t,2)}function Ml(t){var n=t.alternate;return t===se||n!==null&&n===se}function mm(t,n){Qs=pl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function gm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ni(t,a)}}var oo={readContext:yn,use:_l,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};oo.useEffectEvent=$e;var _m={readContext:yn,use:_l,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:yn,useEffect:tm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,xl(4194308,4,am.bind(null,n,t),a)},useLayoutEffect:function(t,n){return xl(4194308,4,t,n)},useInsertionEffect:function(t,n){xl(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var r=t();if(_s){Rt(!0);try{t()}finally{Rt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Nn();if(a!==void 0){var c=a(n);if(_s){Rt(!0);try{a(n)}finally{Rt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=nx.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Pu(t);var n=t.queue,a=pm.bind(null,se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:zu,useDeferredValue:function(t,n){var a=Nn();return Iu(a,t,n)},useTransition:function(){var t=Pu(!1);return t=cm.bind(null,se,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=se,c=Nn();if(ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(ge&127)!==0||zp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,tm(Hp.bind(null,r,f,t),[t]),r.flags|=2048,$s(9,{destroy:void 0},Ip.bind(null,r,f,a,n),null),a},useId:function(){var t=Nn(),n=Xe.identifierPrefix;if(ve){var a=Ri,r=Ai;a=(r&~(1<<32-Dt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Kv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Gu,useFormState:Kp,useActionState:Kp,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Vu.bind(null,se,!0,a),a.dispatch=n,[t,n]},useMemoCache:Lu,useCacheRefresh:function(){return Nn().memoizedState=ex.bind(null,se)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((Ae&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Xu={readContext:yn,use:_l,useCallback:rm,useContext:yn,useEffect:Bu,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:vl,useRef:$p,useState:function(){return vl(Zi)},useDebugValue:zu,useDeferredValue:function(t,n){var a=sn();return lm(a,Fe.memoizedState,t,n)},useTransition:function(){var t=vl(Zi)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Bp,useId:hm,useHostTransitionStatus:Gu,useFormState:jp,useActionState:jp,useOptimistic:function(t,n){var a=sn();return Xp(a,Fe,t,n)},useMemoCache:Lu,useCacheRefresh:dm};Xu.useEffectEvent=em;var vm={readContext:yn,use:_l,useCallback:rm,useContext:yn,useEffect:Bu,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Ou,useRef:$p,useState:function(){return Ou(Zi)},useDebugValue:zu,useDeferredValue:function(t,n){var a=sn();return Fe===null?Iu(a,t,n):lm(a,Fe.memoizedState,t,n)},useTransition:function(){var t=Ou(Zi)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Bp,useId:hm,useHostTransitionStatus:Gu,useFormState:Jp,useActionState:Jp,useOptimistic:function(t,n){var a=sn();return Fe!==null?Xp(a,Fe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Lu,useCacheRefresh:dm};vm.useEffectEvent=em;function ku(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Wu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Jn(),c=wa(r);c.payload=n,a!=null&&(c.callback=a),n=Ua(t,c,r),n!==null&&(Hn(n,t,r),eo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Jn(),c=wa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ua(t,c,r),n!==null&&(Hn(n,t,r),eo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),r=wa(a);r.tag=2,n!=null&&(r.callback=n),n=Ua(t,r,a),n!==null&&(Hn(n,t,a),eo(n,t,a))}};function xm(t,n,a,r,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,r)||!Yr(c,f):!0}function Sm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Wu.enqueueReplaceState(n,n.state,null)}function vs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Mm(t){$o(t)}function Em(t){console.error(t)}function ym(t){$o(t)}function El(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Tm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function qu(t,n,a){return a=wa(a),a.tag=3,a.payload={element:null},a.callback=function(){El(t,n)},a}function bm(t){return t=wa(t),t.tag=3,t}function Am(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Tm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Tm(n,a,r),typeof c!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function ix(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Ol():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),vf(t,r,c)),!1;case 22:return a.flags|=65536,r===cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),vf(t,r,c)),!1}throw Error(s(435,a.tag))}return vf(t,r,c),Ol(),!1}if(ve)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==fu&&(t=Error(s(422),{cause:r}),jr(ai(t,a)))):(r!==fu&&(n=Error(s(423),{cause:r}),jr(ai(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ai(r,a),c=qu(t.stateNode,r,c),Eu(t,c),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:r});if(f=ai(f,a),go===null?go=[f]:go.push(f),tn!==4&&(tn=2),n===null)return!0;r=ai(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=qu(a.stateNode,r,t),Eu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ba===null||!Ba.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=bm(c),Am(c,t,a,r),Eu(a,c),!1}a=a.return}while(a!==null);return!1}var Yu=Error(s(461)),un=!1;function Tn(t,n,a,r){n.child=t===null?wp(n,null,a,r):gs(n,t.child,a,r)}function Rm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var b in r)b!=="ref"&&(g[b]=r[b])}else g=r;return hs(n),r=Cu(t,n,a,g,f,c),b=Du(),t!==null&&!un?(wu(t,n,c),Ki(t,n,c)):(ve&&b&&cu(n),n.flags|=1,Tn(t,n,r,c),n.child)}function Cm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Dm(t,n,f,r,c)):(t=il(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ef(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(g,r)&&t.ref===n.ref)return Ki(t,n,c)}return n.flags|=1,t=Xi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Dm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Yr(f,r)&&t.ref===n.ref)if(un=!1,n.pendingProps=r=f,ef(t,c))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,Ki(t,n,c)}return Zu(t,n,a,r,c)}function wm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Um(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ol(n,f!==null?f.cachePool:null),f!==null?Np(n,f):Tu(),Op(n);else return r=n.lanes=536870912,Um(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ol(n,f.cachePool),Np(n,f),Na(),n.memoizedState=null):(t!==null&&ol(n,null),Tu(),Na());return Tn(t,n,c,a),n.child}function lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Um(t,n,a,r,c){var f=vu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ol(n,null),Tu(),Op(n),t!==null&&Ws(t,n,r,!0),n.childLanes=c,null}function yl(t,n){return n=bl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Lm(t,n,a){return gs(n,t.child,null,a),t=yl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function ax(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(r.mode==="hidden")return t=yl(n,r),n.lanes=536870912,lo(null,t);if(Au(n),(t=We)?(t=kg(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ba!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,En=n,We=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return yl(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Au(n),c)if(n.flags&256)n.flags&=-257,n=Lm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Ws(t,n,a,!1),c=(a&t.childLanes)!==0,un||c){if(r=Xe,r!==null&&(g=Xn(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ls(t,g),Hn(r,t,g),Yu;Ol(),n=Lm(t,n,a)}else t=f.treeContext,We=ci(g.nextSibling),En=n,ve=!0,Aa=null,oi=!1,t!==null&&vp(n,t),n=yl(n,r),n.flags|=4096;return n}return t=Xi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Tl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Zu(t,n,a,r,c){return hs(n),a=Cu(t,n,a,r,void 0,c),r=Du(),t!==null&&!un?(wu(t,n,c),Ki(t,n,c)):(ve&&r&&cu(n),n.flags|=1,Tn(t,n,a,c),n.child)}function Nm(t,n,a,r,c,f){return hs(n),n.updateQueue=null,a=Fp(n,r,a,c),Pp(t),r=Du(),t!==null&&!un?(wu(t,n,f),Ki(t,n,f)):(ve&&r&&cu(n),n.flags|=1,Tn(t,n,a,f),n.child)}function Om(t,n,a,r,c){if(hs(n),n.stateNode===null){var f=Gs,g=a.contextType;typeof g=="object"&&g!==null&&(f=yn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Wu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Su(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?yn(g):Gs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(ku(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Wu.enqueueReplaceState(f,f.state,null),io(n,r,f,c),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,F=vs(a,b);f.props=F;var Q=f.context,ot=a.contextType;g=Gs,typeof ot=="object"&&ot!==null&&(g=yn(ot));var mt=a.getDerivedStateFromProps;ot=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ot||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||Q!==g)&&Sm(n,f,r,g),Da=!1;var et=n.memoizedState;f.state=et,io(n,r,f,c),no(),Q=n.memoizedState,b||et!==Q||Da?(typeof mt=="function"&&(ku(n,a,mt,r),Q=n.memoizedState),(F=Da||xm(n,a,F,r,et,Q,g))?(ot||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=g,r=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Mu(t,n),g=n.memoizedProps,ot=vs(a,g),f.props=ot,mt=n.pendingProps,et=f.context,Q=a.contextType,F=Gs,typeof Q=="object"&&Q!==null&&(F=yn(Q)),b=a.getDerivedStateFromProps,(Q=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==mt||et!==F)&&Sm(n,f,r,F),Da=!1,et=n.memoizedState,f.state=et,io(n,r,f,c),no();var at=n.memoizedState;g!==mt||et!==at||Da||t!==null&&t.dependencies!==null&&sl(t.dependencies)?(typeof b=="function"&&(ku(n,a,b,r),at=n.memoizedState),(ot=Da||xm(n,a,ot,r,et,at,F)||t!==null&&t.dependencies!==null&&sl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,at,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,at,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=at),f.props=r,f.state=at,f.context=F,r=ot):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Tl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=gs(n,t.child,null,c),n.child=gs(n,null,a,c)):Tn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ki(t,n,c),t}function Pm(t,n,a,r){return us(),n.flags|=256,Tn(t,n,a,r),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ju(t){return{baseLanes:t,cachePool:Tp()}}function Qu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function Fm(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(c?La(n):Na(),(t=We)?(t=kg(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ba!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,En=n,We=null)):t=null,t===null)throw Ra(n);return Of(t)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,c?(Na(),c=n.mode,b=bl({mode:"hidden",children:b},c),r=cs(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=ju(a),r.childLanes=Qu(t,g,a),n.memoizedState=Ku,lo(null,r)):(La(n),Ju(n,b))}var F=t.memoizedState;if(F!==null&&(b=F.dehydrated,b!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=$u(t,n,a)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),b=r.fallback,c=n.mode,r=bl({mode:"visible",children:r.children},c),b=cs(b,c,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,gs(n,t.child,null,a),r=n.child,r.memoizedState=ju(a),r.childLanes=Qu(t,g,a),n.memoizedState=Ku,n=lo(null,r));else if(La(n),Of(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var Q=g.dgst;g=Q,r=Error(s(419)),r.stack="",r.digest=g,jr({value:r,source:null,stack:null}),n=$u(t,n,a)}else if(un||Ws(t,n,a,!1),g=(a&t.childLanes)!==0,un||g){if(g=Xe,g!==null&&(r=Xn(g,a),r!==0&&r!==F.retryLane))throw F.retryLane=r,ls(t,r),Hn(g,t,r),Yu;Nf(b)||Ol(),n=$u(t,n,a)}else Nf(b)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,We=ci(b.nextSibling),En=n,ve=!0,Aa=null,oi=!1,t!==null&&vp(n,t),n=Ju(n,r.children),n.flags|=4096);return n}return c?(Na(),b=r.fallback,c=n.mode,F=t.child,Q=F.sibling,r=Xi(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,Q!==null?b=Xi(Q,b):(b=cs(b,c,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,lo(null,r),r=n.child,b=t.child.memoizedState,b===null?b=ju(a):(c=b.cachePool,c!==null?(F=ln._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=Tp(),b={baseLanes:b.baseLanes|a,cachePool:c}),r.memoizedState=b,r.childLanes=Qu(t,g,a),n.memoizedState=Ku,lo(t.child,r)):(La(n),a=t.child,t=a.sibling,a=Xi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Ju(t,n){return n=bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function bl(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function $u(t,n,a){return gs(n,t.child,null,a),t=Ju(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Bm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),pu(t.return,n,a)}function tf(t,n,a,r,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function zm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=an.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,Gt(an,g),Tn(t,n,r,a),r=ve?Kr:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bm(t,a,n);else if(t.tag===19)Bm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&dl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),tf(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&dl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}tf(n,!0,a,null,f,r);break;case"together":tf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Xi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Xi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&sl(t)))}function sx(t,n,a){switch(n.tag){case 3:Mt(n,n.stateNode.containerInfo),Ca(n,ln,t.memoizedState.cache),us();break;case 27:case 5:te(n);break;case 4:Mt(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Au(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Fm(t,n,a):(La(n),t=Ki(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ws(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return zm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Gt(an,an.current),r)break;return null;case 22:return n.lanes=0,wm(t,n,a,n.pendingProps);case 24:Ca(n,ln,t.memoizedState.cache)}return Ki(t,n,a)}function Im(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!ef(t,a)&&(n.flags&128)===0)return un=!1,sx(t,n,a);un=(t.flags&131072)!==0}else un=!1,ve&&(n.flags&1048576)!==0&&_p(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ps(n.elementType),n.type=t,typeof t=="function")ru(t)?(r=vs(t,r),n.tag=1,n=Om(null,n,t,r,a)):(n.tag=0,n=Zu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===N){n.tag=11,n=Rm(null,n,t,r,a);break t}else if(c===V){n.tag=14,n=Cm(null,n,t,r,a);break t}}throw n=ct(t)||t,Error(s(306,n,""))}}return n;case 0:return Zu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=vs(r,n.pendingProps),Om(t,n,r,c,a);case 3:t:{if(Mt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Mu(t,n),io(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Ca(n,ln,r),r!==f.cache&&mu(n,[ln],a,!0),no(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Pm(t,n,r,a);break t}else if(r!==c){c=ai(Error(s(424)),n),jr(c),n=Pm(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,We=ci(t.firstChild),En=n,ve=!0,Aa=null,oi=!0,a=wp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(us(),r===c){n=Ki(t,n,a);break t}Tn(t,n,r,a)}n=n.child}return n;case 26:return Tl(t,n),t===null?(a=jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(a=n.type,t=n.pendingProps,r=Gl(ft.current).createElement(a),r[nn]=n,r[Mn]=t,bn(r,a,t),on(r),n.stateNode=r):n.memoizedState=jg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return te(n),t===null&&ve&&(r=n.stateNode=Yg(n.type,n.pendingProps,ft.current),En=n,oi=!0,c=We,Ga(n.type)?(Pf=c,We=ci(r.firstChild)):We=c),Tn(t,n,n.pendingProps.children,a),Tl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((c=r=We)&&(r=Px(r,n.type,n.pendingProps,oi),r!==null?(n.stateNode=r,En=n,We=ci(r.firstChild),oi=!1,c=!0):c=!1),c||Ra(n)),te(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,wf(c,f)?r=null:g!==null&&wf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Cu(t,n,jv,null,null,a),To._currentValue=c),Tl(t,n),Tn(t,n,r,a),n.child;case 6:return t===null&&ve&&((t=a=We)&&(a=Fx(a,n.pendingProps,oi),a!==null?(n.stateNode=a,En=n,We=null,t=!0):t=!1),t||Ra(n)),null;case 13:return Fm(t,n,a);case 4:return Mt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=gs(n,null,r,a):Tn(t,n,r,a),n.child;case 11:return Rm(t,n,n.type,n.pendingProps,a);case 7:return Tn(t,n,n.pendingProps,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ca(n,n.type,r.value),Tn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,hs(n),c=yn(c),r=r(c),n.flags|=1,Tn(t,n,r,a),n.child;case 14:return Cm(t,n,n.type,n.pendingProps,a);case 15:return Dm(t,n,n.type,n.pendingProps,a);case 19:return zm(t,n,a);case 31:return ax(t,n,a);case 22:return wm(t,n,a,n.pendingProps);case 24:return hs(n),r=yn(ln),t===null?(c=vu(),c===null&&(c=Xe,f=gu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Su(n),Ca(n,ln,c)):((t.lanes&a)!==0&&(Mu(t,n),io(n,null,null,a),no()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ca(n,ln,r)):(r=f.cache,Ca(n,ln,r),r!==c.cache&&mu(n,[ln],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ji(t){t.flags|=4}function nf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(hg())t.flags|=8192;else throw ms=cl,xu}else t.flags&=-16777217}function Hm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!e0(n))if(hg())t.flags|=8192;else throw ms=cl,xu}function Al(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?gt():536870912,t.lanes|=n,ir|=n)}function co(t,n){if(!ve)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function rx(t,n,a){var r=n.pendingProps;switch(uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),qi(ln),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ks(n)?ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hu())),qe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ji(n),f!==null?(qe(n),Hm(n,f)):(qe(n),nf(n,c,null,r,a))):f?f!==t.memoizedState?(ji(n),qe(n),Hm(n,f)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ji(n),qe(n),nf(n,c,t,r,a)),null;case 27:if(Zt(n),a=ft.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}t=$t.current,ks(n)?xp(n):(t=Yg(c,r,a),n.stateNode=t,ji(n))}return qe(n),null;case 5:if(Zt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(f=$t.current,ks(n))xp(n);else{var g=Gl(ft.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[nn]=n,f[Mn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(bn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ji(n)}}return qe(n),nf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ji(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=ft.current,ks(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=En,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[nn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Fg(t.nodeValue,a)),t||Ra(n,!0)}else t=Gl(t).createTextNode(r),t[nn]=n,n.stateNode=t}return qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=ks(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[nn]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else a=hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=ks(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[nn]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Al(n,n.updateQueue),qe(n),null);case 4:return Wt(),t===null&&bf(n.stateNode.containerInfo),qe(n),null;case 10:return qi(n.type),qe(n),null;case 19:if(Ct(an),r=n.memoizedState,r===null)return qe(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)co(r,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=dl(t),f!==null){for(n.flags|=128,co(r,!1),t=f.updateQueue,n.updateQueue=t,Al(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)pp(a,t),a=a.sibling;return Gt(an,an.current&1|2),ve&&ki(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&St()>Ul&&(n.flags|=128,c=!0,co(r,!1),n.lanes=4194304)}else{if(!c)if(t=dl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Al(n,t),co(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!ve)return qe(n),null}else 2*St()-r.renderingStartTime>Ul&&a!==536870912&&(n.flags|=128,c=!0,co(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=St(),t.sibling=null,a=an.current,Gt(an,c?a&1|2:a&1),ve&&ki(n,r.treeForkCount),t):(qe(n),null);case 22:case 23:return Kn(n),bu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Al(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Ct(ds),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(ln),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ox(t,n){switch(uu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return qi(ln),Wt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Zt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Ct(an),null;case 4:return Wt(),null;case 10:return qi(n.type),null;case 22:case 23:return Kn(n),bu(),t!==null&&Ct(ds),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return qi(ln),null;case 25:return null;default:return null}}function Gm(t,n){switch(uu(n),n.tag){case 3:qi(ln),Wt();break;case 26:case 27:case 5:Zt(n);break;case 4:Wt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:Ct(an);break;case 10:qi(n.type);break;case 22:case 23:Kn(n),bu(),t!==null&&Ct(ds);break;case 24:qi(ln)}}function uo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(b){Ne(n,n.return,b)}}function Oa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var g=r.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,c=n;var F=a,Q=b;try{Q()}catch(ot){Ne(c,F,ot)}}}r=r.next}while(r!==f)}}catch(ot){Ne(n,n.return,ot)}}function Vm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Lp(n,a)}catch(r){Ne(t,t.return,r)}}}function Xm(t,n,a){a.props=vs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ne(t,n,r)}}function fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Ne(t,n,c)}}function Ci(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ne(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ne(t,n,c)}else a.current=null}function km(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ne(t,t.return,c)}}function af(t,n,a){try{var r=t.stateNode;Dx(r,t.type,a,n),r[Mn]=n}catch(c){Ne(t,t.return,c)}}function Wm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function sf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gi));else if(r!==4&&(r===27&&Ga(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(rf(t,n,a),t=t.sibling;t!==null;)rf(t,n,a),t=t.sibling}function Rl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Rl(t,n,a),t=t.sibling;t!==null;)Rl(t,n,a),t=t.sibling}function qm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,r,a),n[nn]=t,n[Mn]=a}catch(f){Ne(t,t.return,f)}}var Qi=!1,fn=!1,of=!1,Ym=typeof WeakSet=="function"?WeakSet:Set,vn=null;function lx(t,n){if(t=t.containerInfo,Cf=Zl,t=sp(t),$c(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,b=-1,F=-1,Q=0,ot=0,mt=t,et=null;e:for(;;){for(var at;mt!==a||c!==0&&mt.nodeType!==3||(b=g+c),mt!==f||r!==0&&mt.nodeType!==3||(F=g+r),mt.nodeType===3&&(g+=mt.nodeValue.length),(at=mt.firstChild)!==null;)et=mt,mt=at;for(;;){if(mt===t)break e;if(et===a&&++Q===c&&(b=g),et===f&&++ot===r&&(F=g),(at=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=at}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:t,selectionRange:a},Zl=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ht=vs(a.type,c);t=r.getSnapshotBeforeUpdate(Ht,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(jt){Ne(a,a.return,jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Lf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Lf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function Zm(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),r&4&&uo(5,a);break;case 1:if($i(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ne(a,a.return,g)}else{var c=vs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ne(a,a.return,g)}}r&64&&Vm(a),r&512&&fo(a,a.return);break;case 3:if($i(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lp(t,n)}catch(g){Ne(a,a.return,g)}}break;case 27:n===null&&r&4&&qm(a);case 26:case 5:$i(t,a),n===null&&r&4&&km(a),r&512&&fo(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),r&4&&Qm(t,a);break;case 13:$i(t,a),r&4&&Jm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=_x.bind(null,a),Bx(t,a))));break;case 22:if(r=a.memoizedState!==null||Qi,!r){n=n!==null&&n.memoizedState!==null||fn,c=Qi;var f=fn;Qi=r,(fn=n)&&!f?ta(t,a,(a.subtreeFlags&8772)!==0):$i(t,a),Qi=c,fn=f}break;case 30:break;default:$i(t,a)}}function Km(t){var n=t.alternate;n!==null&&(t.alternate=null,Km(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ir(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var je=null,Fn=!1;function Ji(t,n,a){for(a=a.child;a!==null;)jm(t,n,a),a=a.sibling}function jm(t,n,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(st,a)}catch{}switch(a.tag){case 26:fn||Ci(a,n),Ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ci(a,n);var r=je,c=Fn;Ga(a.type)&&(je=a.stateNode,Fn=!1),Ji(t,n,a),Mo(a.stateNode),je=r,Fn=c;break;case 5:fn||Ci(a,n);case 6:if(r=je,c=Fn,je=null,Ji(t,n,a),je=r,Fn=c,je!==null)if(Fn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Ne(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Ne(a,n,f)}break;case 18:je!==null&&(Fn?(t=je,Vg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fr(t)):Vg(je,a.stateNode));break;case 4:r=je,c=Fn,je=a.stateNode.containerInfo,Fn=!0,Ji(t,n,a),je=r,Fn=c;break;case 0:case 11:case 14:case 15:Oa(2,a,n),fn||Oa(4,a,n),Ji(t,n,a);break;case 1:fn||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Xm(a,n,r)),Ji(t,n,a);break;case 21:Ji(t,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,Ji(t,n,a),fn=r;break;default:Ji(t,n,a)}}function Qm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fr(t)}catch(a){Ne(n,n.return,a)}}}function Jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fr(t)}catch(a){Ne(n,n.return,a)}}function cx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ym),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ym),n;default:throw Error(s(435,t.tag))}}function Cl(t,n){var a=cx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=vx.bind(null,t,r);r.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,g=n,b=g;t:for(;b!==null;){switch(b.tag){case 27:if(Ga(b.type)){je=b.stateNode,Fn=!1;break t}break;case 5:je=b.stateNode,Fn=!1;break t;case 3:case 4:je=b.stateNode.containerInfo,Fn=!0;break t}b=b.return}if(je===null)throw Error(s(160));jm(f,g,c),je=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$m(n,t),n=n.sibling}var _i=null;function $m(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),zn(t),r&4&&(Oa(3,t,t.return),uo(3,t),Oa(5,t,t.return));break;case 1:Bn(n,t),zn(t),r&512&&(fn||a===null||Ci(a,a.return)),r&64&&Qi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=_i;if(Bn(n,t),zn(t),r&512&&(fn||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[xa]||f[nn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,r,a),f[nn]=t,on(f),r=f;break t;case"link":var g=$g("link","href",c).get(r+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break e}}f=c.createElement(r),bn(f,r,a),c.head.appendChild(f);break;case"meta":if(g=$g("meta","content",c).get(r+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break e}}f=c.createElement(r),bn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[nn]=t,on(f),r=f}t.stateNode=r}else t0(c,t.type,t.stateNode);else t.stateNode=Jg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?t0(c,t.type,t.stateNode):Jg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&af(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),zn(t),r&512&&(fn||a===null||Ci(a,a.return)),a!==null&&r&4&&af(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),zn(t),r&512&&(fn||a===null||Ci(a,a.return)),t.flags&32){c=t.stateNode;try{Wn(c,"")}catch(Ht){Ne(t,t.return,Ht)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,af(t,c,a!==null?a.memoizedProps:c)),r&1024&&(of=!0);break;case 6:if(Bn(n,t),zn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ht){Ne(t,t.return,Ht)}}break;case 3:if(kl=null,c=_i,_i=Vl(n.containerInfo),Bn(n,t),_i=c,zn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{fr(n.containerInfo)}catch(Ht){Ne(t,t.return,Ht)}of&&(of=!1,tg(t));break;case 4:r=_i,_i=Vl(t.stateNode.containerInfo),Bn(n,t),zn(t),_i=r;break;case 12:Bn(n,t),zn(t);break;case 31:Bn(n,t),zn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Cl(t,r)));break;case 13:Bn(n,t),zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wl=St()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Cl(t,r)));break;case 22:c=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,Q=Qi,ot=fn;if(Qi=Q||c,fn=ot||F,Bn(n,t),fn=ot,Qi=Q,zn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||Qi||fn||xs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=F.stateNode;var mt=F.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Ht){Ne(F,F.return,Ht)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(Ht){Ne(F,F.return,Ht)}}}else if(n.tag===18){if(a===null){F=n;try{var at=F.stateNode;c?Xg(at,!0):Xg(F.stateNode,!1)}catch(Ht){Ne(F,F.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Cl(t,a))));break;case 19:Bn(n,t),zn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Cl(t,r)));break;case 30:break;case 21:break;default:Bn(n,t),zn(t)}}function zn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Wm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=sf(t);Rl(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Wn(g,""),a.flags&=-33);var b=sf(t);Rl(t,b,g);break;case 3:case 4:var F=a.stateNode.containerInfo,Q=sf(t);rf(t,Q,F);break;default:throw Error(s(161))}}catch(ot){Ne(t,t.return,ot)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function tg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;tg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zm(t,n.alternate,n),n=n.sibling}function xs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),xs(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Xm(n,n.return,a),xs(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ci(n,n.return),xs(n);break;case 22:n.memoizedState===null&&xs(n);break;case 30:xs(n);break;default:xs(n)}t=t.sibling}}function ta(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:ta(c,f,a),uo(4,f);break;case 1:if(ta(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Ne(r,r.return,Q)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Up(F[c],b)}catch(Q){Ne(r,r.return,Q)}}a&&g&64&&Vm(f),fo(f,f.return);break;case 27:qm(f);case 26:case 5:ta(c,f,a),a&&r===null&&g&4&&km(f),fo(f,f.return);break;case 12:ta(c,f,a);break;case 31:ta(c,f,a),a&&g&4&&Qm(c,f);break;case 13:ta(c,f,a),a&&g&4&&Jm(c,f);break;case 22:f.memoizedState===null&&ta(c,f,a),fo(f,f.return);break;case 30:break;default:ta(c,f,a)}n=n.sibling}}function lf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Qr(a))}function cf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qr(t))}function vi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)eg(t,n,a,r),n=n.sibling}function eg(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,r),c&2048&&uo(9,n);break;case 1:vi(t,n,a,r);break;case 3:vi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Qr(t)));break;case 12:if(c&2048){vi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Ne(n,n.return,F)}}else vi(t,n,a,r);break;case 31:vi(t,n,a,r);break;case 13:vi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,r):ho(t,n):f._visibility&2?vi(t,n,a,r):(f._visibility|=2,tr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&lf(g,n);break;case 24:vi(t,n,a,r),c&2048&&cf(n.alternate,n);break;default:vi(t,n,a,r)}}function tr(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,b=a,F=r,Q=g.flags;switch(g.tag){case 0:case 11:case 15:tr(f,g,b,F,c),uo(8,g);break;case 23:break;case 22:var ot=g.stateNode;g.memoizedState!==null?ot._visibility&2?tr(f,g,b,F,c):ho(f,g):(ot._visibility|=2,tr(f,g,b,F,c)),c&&Q&2048&&lf(g.alternate,g);break;case 24:tr(f,g,b,F,c),c&&Q&2048&&cf(g.alternate,g);break;default:tr(f,g,b,F,c)}n=n.sibling}}function ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:ho(a,r),c&2048&&lf(r.alternate,r);break;case 24:ho(a,r),c&2048&&cf(r.alternate,r);break;default:ho(a,r)}n=n.sibling}}var po=8192;function er(t,n,a){if(t.subtreeFlags&po)for(t=t.child;t!==null;)ng(t,n,a),t=t.sibling}function ng(t,n,a){switch(t.tag){case 26:er(t,n,a),t.flags&po&&t.memoizedState!==null&&Kx(a,_i,t.memoizedState,t.memoizedProps);break;case 5:er(t,n,a);break;case 3:case 4:var r=_i;_i=Vl(t.stateNode.containerInfo),er(t,n,a),_i=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=po,po=16777216,er(t,n,a),po=r):er(t,n,a));break;default:er(t,n,a)}}function ig(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,sg(r,t)}ig(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ag(t),t=t.sibling}function ag(t){switch(t.tag){case 0:case 11:case 15:mo(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:mo(t);break;case 12:mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Dl(t)):mo(t);break;default:mo(t)}}function Dl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,sg(r,t)}ig(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Dl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dl(n));break;default:Dl(n)}t=t.sibling}}function sg(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Qr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=t;vn!==null;){r=vn;var c=r.sibling,f=r.return;if(Km(r),r===a){vn=null;break t}if(c!==null){c.return=f,vn=c;break t}vn=f}}}var ux={getCacheForType:function(t){var n=yn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return yn(ln).controller.signal}},fx=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Xe=null,de=null,ge=0,Le=0,jn=null,Pa=!1,nr=!1,uf=!1,ea=0,tn=0,Fa=0,Ss=0,ff=0,Qn=0,ir=0,go=null,In=null,hf=!1,wl=0,rg=0,Ul=1/0,Ll=null,Ba=null,pn=0,za=null,ar=null,na=0,df=0,pf=null,og=null,_o=0,mf=null;function Jn(){return(Ae&2)!==0&&ge!==0?ge&-ge:U.T!==null?Mf():Fr()}function lg(){if(Qn===0)if((ge&536870912)===0||ve){var t=fe;fe<<=1,(fe&3932160)===0&&(fe=262144),Qn=t}else Qn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Qn}function Hn(t,n,a){(t===Xe&&(Le===2||Le===9)||t.cancelPendingCommit!==null)&&(sr(t,0),Ia(t,ge,Qn,!1)),Qt(t,a),((Ae&2)===0||t!==Xe)&&(t===Xe&&((Ae&2)===0&&(Ss|=a),tn===4&&Ia(t,ge,Qn,!1)),Di(t))}function cg(t,n,a){if((Ae&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ot(t,n),c=r?px(t,n):_f(t,n,!0),f=r;do{if(c===0){nr&&!r&&Ia(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!hx(a)){c=_f(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var b=t;c=go;var F=b.current.memoizedState.isDehydrated;if(F&&(sr(b,g).flags|=256),g=_f(b,g,!1),g!==2){if(uf&&!F){b.errorRecoveryDisabledLanes|=f,Ss|=f,c=4;break t}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){sr(t,0),Ia(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ia(r,n,Qn,!Pa);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=wl+300-St(),10<c)){if(Ia(r,n,Qn,!Pa),ut(r,0,!0)!==0)break t;na=n,r.timeoutHandle=Hg(ug.bind(null,r,a,In,Ll,hf,n,Qn,Ss,ir,Pa,f,"Throttled",-0,0),c);break t}ug(r,a,In,Ll,hf,n,Qn,Ss,ir,Pa,f,null,-0,0)}}break}while(!0);Di(t)}function ug(t,n,a,r,c,f,g,b,F,Q,ot,mt,et,at){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},ng(n,f,mt);var Ht=(f&62914560)===f?wl-St():(f&4194048)===f?rg-St():0;if(Ht=jx(mt,Ht),Ht!==null){na=f,t.cancelPendingCommit=Ht(vg.bind(null,t,n,f,a,r,c,g,b,F,ot,mt,null,et,at)),Ia(t,f,g,!Q);return}}vg(t,n,f,a,r,c,g,b,F)}function hx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,a,r){n&=~ff,n&=~Ss,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Dt(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&be(t,a,n)}function Nl(){return(Ae&6)===0?(vo(0),!1):!0}function gf(){if(de!==null){if(Le===0)var t=de.return;else t=de,Wi=fs=null,Uu(t),Ks=null,$r=0,t=de;for(;t!==null;)Gm(t.alternate,t),t=t.return;de=null}}function sr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Lx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),na=0,gf(),Xe=t,de=a=Xi(t.current,null),ge=n,Le=0,jn=null,Pa=!1,nr=Ot(t,n),uf=!1,ir=Qn=ff=Ss=Fa=tn=0,In=go=null,hf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Dt(r),f=1<<c;n|=t[c],r&=~f}return ea=n,tl(),a}function fg(t,n){se=null,U.H=oo,n===Zs||n===ll?(n=Rp(),Le=3):n===xu?(n=Rp(),Le=4):Le=n===Yu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,de===null&&(tn=1,El(t,ai(n,t.current)))}function hg(){var t=Zn.current;return t===null?!0:(ge&4194048)===ge?li===null:(ge&62914560)===ge||(ge&536870912)!==0?t===li:!1}function dg(){var t=U.H;return U.H=oo,t===null?oo:t}function pg(){var t=U.A;return U.A=ux,t}function Ol(){tn=4,Pa||(ge&4194048)!==ge&&Zn.current!==null||(nr=!0),(Fa&134217727)===0&&(Ss&134217727)===0||Xe===null||Ia(Xe,ge,Qn,!1)}function _f(t,n,a){var r=Ae;Ae|=2;var c=dg(),f=pg();(Xe!==t||ge!==n)&&(Ll=null,sr(t,n)),n=!1;var g=tn;t:do try{if(Le!==0&&de!==null){var b=de,F=jn;switch(Le){case 8:gf(),g=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var Q=Le;if(Le=0,jn=null,rr(t,b,F,Q),a&&nr){g=0;break t}break;default:Q=Le,Le=0,jn=null,rr(t,b,F,Q)}}dx(),g=tn;break}catch(ot){fg(t,ot)}while(!0);return n&&t.shellSuspendCounter++,Wi=fs=null,Ae=r,U.H=c,U.A=f,de===null&&(Xe=null,ge=0,tl()),g}function dx(){for(;de!==null;)mg(de)}function px(t,n){var a=Ae;Ae|=2;var r=dg(),c=pg();Xe!==t||ge!==n?(Ll=null,Ul=St()+500,sr(t,n)):nr=Ot(t,n);t:do try{if(Le!==0&&de!==null){n=de;var f=jn;e:switch(Le){case 1:Le=0,jn=null,rr(t,n,f,1);break;case 2:case 9:if(bp(f)){Le=0,jn=null,gg(n);break}n=function(){Le!==2&&Le!==9||Xe!==t||(Le=7),Di(t)},f.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:bp(f)?(Le=0,jn=null,gg(n)):(Le=0,jn=null,rr(t,n,f,7));break;case 5:var g=null;switch(de.tag){case 26:g=de.memoizedState;case 5:case 27:var b=de;if(g?e0(g):b.stateNode.complete){Le=0,jn=null;var F=b.sibling;if(F!==null)de=F;else{var Q=b.return;Q!==null?(de=Q,Pl(Q)):de=null}break e}}Le=0,jn=null,rr(t,n,f,5);break;case 6:Le=0,jn=null,rr(t,n,f,6);break;case 8:gf(),tn=6;break t;default:throw Error(s(462))}}mx();break}catch(ot){fg(t,ot)}while(!0);return Wi=fs=null,U.H=r,U.A=c,Ae=a,de!==null?0:(Xe=null,ge=0,tl(),tn)}function mx(){for(;de!==null&&!ue();)mg(de)}function mg(t){var n=Im(t.alternate,t,ea);t.memoizedProps=t.pendingProps,n===null?Pl(t):de=n}function gg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Nm(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=Nm(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Uu(n);default:Gm(a,n),n=de=pp(n,ea),n=Im(a,n,ea)}t.memoizedProps=t.pendingProps,n===null?Pl(t):de=n}function rr(t,n,a,r){Wi=fs=null,Uu(n),Ks=null,$r=0;var c=n.return;try{if(ix(t,c,n,a,ge)){tn=1,El(t,ai(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;tn=1,El(t,ai(a,t.current)),de=null;return}n.flags&32768?(ve||r===1?t=!0:nr||(ge&536870912)!==0?t=!1:(Pa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),_g(n,t)):Pl(n)}function Pl(t){var n=t;do{if((n.flags&32768)!==0){_g(n,Pa);return}t=n.return;var a=rx(n.alternate,n,ea);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);tn===0&&(tn=5)}function _g(t,n){do{var a=ox(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);tn=6,de=null}function vg(t,n,a,r,c,f,g,b,F){t.cancelPendingCommit=null;do Fl();while(pn!==0);if((Ae&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=au,Je(t,a,f,g,b,F),t===Xe&&(de=Xe=null,ge=0),ar=n,za=t,na=a,df=f,pf=c,og=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xx(Z,function(){return yg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=U.T,U.T=null,c=B.p,B.p=2,g=Ae,Ae|=4;try{lx(t,n,a)}finally{Ae=g,B.p=c,U.T=r}}pn=1,xg(),Sg(),Mg()}}function xg(){if(pn===1){pn=0;var t=za,n=ar,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var r=B.p;B.p=2;var c=Ae;Ae|=4;try{$m(n,t);var f=Df,g=sp(t.containerInfo),b=f.focusedElem,F=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&ap(b.ownerDocument.documentElement,b)){if(F!==null&&$c(b)){var Q=F.start,ot=F.end;if(ot===void 0&&(ot=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(ot,b.value.length);else{var mt=b.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var at=et.getSelection(),Ht=b.textContent.length,jt=Math.min(F.start,Ht),ze=F.end===void 0?jt:Math.min(F.end,Ht);!at.extend&&jt>ze&&(g=ze,ze=jt,jt=g);var q=ip(b,jt),H=ip(b,ze);if(q&&H&&(at.rangeCount!==1||at.anchorNode!==q.node||at.anchorOffset!==q.offset||at.focusNode!==H.node||at.focusOffset!==H.offset)){var j=mt.createRange();j.setStart(q.node,q.offset),at.removeAllRanges(),jt>ze?(at.addRange(j),at.extend(H.node,H.offset)):(j.setEnd(H.node,H.offset),at.addRange(j))}}}}for(mt=[],at=b;at=at.parentNode;)at.nodeType===1&&mt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var ht=mt[b];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Zl=!!Cf,Df=Cf=null}finally{Ae=c,B.p=r,U.T=a}}t.current=n,pn=2}}function Sg(){if(pn===2){pn=0;var t=za,n=ar,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var r=B.p;B.p=2;var c=Ae;Ae|=4;try{Zm(t,n.alternate,n)}finally{Ae=c,B.p=r,U.T=a}}pn=3}}function Mg(){if(pn===4||pn===3){pn=0,Pe();var t=za,n=ar,a=na,r=og;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,ar=za=null,Eg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ba=null),Pr(a),n=n.stateNode,rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(st,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=U.T,c=B.p,B.p=2,U.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var b=r[g];f(b.value,{componentStack:b.stack})}}finally{U.T=n,B.p=c}}(na&3)!==0&&Fl(),Di(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===mf?_o++:(_o=0,mf=t):_o=0,vo(0)}}function Eg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Qr(n)))}function Fl(){return xg(),Sg(),Mg(),yg()}function yg(){if(pn!==5)return!1;var t=za,n=df;df=0;var a=Pr(na),r=U.T,c=B.p;try{B.p=32>a?32:a,U.T=null,a=pf,pf=null;var f=za,g=na;if(pn=0,ar=za=null,na=0,(Ae&6)!==0)throw Error(s(331));var b=Ae;if(Ae|=4,ag(f.current),eg(f,f.current,g,a),Ae=b,vo(0,!1),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(st,f)}catch{}return!0}finally{B.p=c,U.T=r,Eg(t,n)}}function Tg(t,n,a){n=ai(a,n),n=qu(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(Qt(t,2),Di(t))}function Ne(t,n,a){if(t.tag===3)Tg(t,t,a);else for(;n!==null;){if(n.tag===3){Tg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ba===null||!Ba.has(r))){t=ai(a,t),a=bm(2),r=Ua(n,a,2),r!==null&&(Am(a,r,n,t),Qt(r,2),Di(r));break}}n=n.return}}function vf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new fx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(uf=!0,c.add(a),t=gx.bind(null,t,n,a),n.then(t,t))}function gx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(ge&a)===a&&(tn===4||tn===3&&(ge&62914560)===ge&&300>St()-wl?(Ae&2)===0&&sr(t,0):ff|=a,ir===ge&&(ir=0)),Di(t)}function bg(t,n){n===0&&(n=gt()),t=ls(t,n),t!==null&&(Qt(t,n),Di(t))}function _x(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),bg(t,a)}function vx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),bg(t,a)}function xx(t,n){return G(t,n)}var Bl=null,or=null,xf=!1,zl=!1,Sf=!1,Ha=0;function Di(t){t!==or&&t.next===null&&(or===null?Bl=or=t:or=or.next=t),zl=!0,xf||(xf=!0,Mx())}function vo(t,n){if(!Sf&&zl){Sf=!0;do for(var a=!1,r=Bl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Dt(42|t)+1)-1,f&=c&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Dg(r,f))}else f=ge,f=ut(r,r===Xe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ot(r,f)||(a=!0,Dg(r,f));r=r.next}while(a);Sf=!1}}function Sx(){Ag()}function Ag(){zl=xf=!1;var t=0;Ha!==0&&Ux()&&(t=Ha);for(var n=St(),a=null,r=Bl;r!==null;){var c=r.next,f=Rg(r,n);f===0?(r.next=null,a===null?Bl=c:a.next=c,c===null&&(or=a)):(a=r,(t!==0||(f&3)!==0)&&(zl=!0)),r=c}pn!==0&&pn!==5||vo(t),Ha!==0&&(Ha=0)}function Rg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Dt(f),b=1<<g,F=c[g];F===-1?((b&a)===0||(b&r)!==0)&&(c[g]=bt(b,n)):F<=n&&(t.expiredLanes|=b),f&=~b}if(n=Xe,a=ge,a=ut(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Le===2||Le===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Qe(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ot(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Qe(r),Pr(a)){case 2:case 8:a=y;break;case 32:a=Z;break;case 268435456:a=_t;break;default:a=Z}return r=Cg.bind(null,t),a=G(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Qe(r),t.callbackPriority=2,t.callbackNode=null,2}function Cg(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Fl()&&t.callbackNode!==a)return null;var r=ge;return r=ut(t,t===Xe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(cg(t,r,n),Rg(t,St()),t.callbackNode!=null&&t.callbackNode===a?Cg.bind(null,t):null)}function Dg(t,n){if(Fl())return null;cg(t,n,!0)}function Mx(){Nx(function(){(Ae&6)!==0?G(C,Sx):Ag()})}function Mf(){if(Ha===0){var t=qs;t===0&&(t=ne,ne<<=1,(ne&261888)===0&&(ne=256)),Ha=t}return Ha}function wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:as(""+t)}function Ug(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ex(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=wg((c[Mn]||null).action),g=r.submitter;g&&(n=(n=g[Mn]||null)?wg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new jo("action","action",null,r,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ha!==0){var F=g?Ug(c,g):new FormData(c);Hu(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(b.preventDefault(),F=g?Ug(c,g):new FormData(c),Hu(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var Ef=0;Ef<iu.length;Ef++){var yf=iu[Ef],yx=yf.toLowerCase(),Tx=yf[0].toUpperCase()+yf.slice(1);gi(yx,"on"+Tx)}gi(lp,"onAnimationEnd"),gi(cp,"onAnimationIteration"),gi(up,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(Hv,"onTransitionRun"),gi(Gv,"onTransitionStart"),gi(Vv,"onTransitionCancel"),gi(fp,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),X("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),X("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),X("onBeforeInput",["compositionend","keypress","textInput","paste"]),X("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Lg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var b=r[g],F=b.instance,Q=b.currentTarget;if(b=b.listener,F!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=Q;try{f(c)}catch(ot){$o(ot)}c.currentTarget=null,f=F}else for(g=0;g<r.length;g++){if(b=r[g],F=b.instance,Q=b.currentTarget,b=b.listener,F!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=Q;try{f(c)}catch(ot){$o(ot)}c.currentTarget=null,f=F}}}}function pe(t,n){var a=n[va];a===void 0&&(a=n[va]=new Set);var r=t+"__bubble";a.has(r)||(Ng(n,t,2,!1),a.add(r))}function Tf(t,n,a){var r=0;n&&(r|=4),Ng(a,t,r,n)}var Il="_reactListening"+Math.random().toString(36).slice(2);function bf(t){if(!t[Il]){t[Il]=!0,qo.forEach(function(a){a!=="selectionchange"&&(bx.has(a)||Tf(a,!1,t),Tf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Il]||(n[Il]=!0,Tf("selectionchange",!1,n))}}function Ng(t,n,a,r){switch(l0(n)){case 2:var c=$x;break;case 8:c=tS;break;default:c=Hf}a=c.bind(null,n,a,t),c=void 0,!kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Af(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var b=r.stateNode.containerInfo;if(b===c)break;if(g===4)for(g=r.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;b!==null;){if(g=Sa(b),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){r=f=g;continue t}b=b.parentNode}}r=r.return}zd(function(){var Q=f,ot=Vc(a),mt=[];t:{var et=hp.get(t);if(et!==void 0){var at=jo,Ht=t;switch(t){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":at=vv;break;case"focusin":Ht="focus",at=Zc;break;case"focusout":Ht="blur",at=Zc;break;case"beforeblur":case"afterblur":at=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=Mv;break;case lp:case cp:case up:at=cv;break;case fp:at=yv;break;case"scroll":case"scrollend":at=av;break;case"wheel":at=bv;break;case"copy":case"cut":case"paste":at=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Xd;break;case"toggle":case"beforetoggle":at=Rv}var jt=(n&4)!==0,ze=!jt&&(t==="scroll"||t==="scrollend"),q=jt?et!==null?et+"Capture":null:et;jt=[];for(var H=Q,j;H!==null;){var ht=H;if(j=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||j===null||q===null||(ht=Hr(H,q),ht!=null&&jt.push(So(H,ht,j))),ze)break;H=H.return}0<jt.length&&(et=new at(et,Ht,null,a,ot),mt.push({event:et,listeners:jt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",at=t==="mouseout"||t==="pointerout",et&&a!==Gc&&(Ht=a.relatedTarget||a.fromElement)&&(Sa(Ht)||Ht[Hi]))break t;if((at||et)&&(et=ot.window===ot?ot:(et=ot.ownerDocument)?et.defaultView||et.parentWindow:window,at?(Ht=a.relatedTarget||a.toElement,at=Q,Ht=Ht?Sa(Ht):null,Ht!==null&&(ze=u(Ht),jt=Ht.tag,Ht!==ze||jt!==5&&jt!==27&&jt!==6)&&(Ht=null)):(at=null,Ht=Q),at!==Ht)){if(jt=Gd,ht="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(jt=Xd,ht="onPointerLeave",q="onPointerEnter",H="pointer"),ze=at==null?et:is(at),j=Ht==null?et:is(Ht),et=new jt(ht,H+"leave",at,a,ot),et.target=ze,et.relatedTarget=j,ht=null,Sa(ot)===Q&&(jt=new jt(q,H+"enter",Ht,a,ot),jt.target=j,jt.relatedTarget=ze,ht=jt),ze=ht,at&&Ht)e:{for(jt=Ax,q=at,H=Ht,j=0,ht=q;ht;ht=jt(ht))j++;ht=0;for(var Yt=H;Yt;Yt=jt(Yt))ht++;for(;0<j-ht;)q=jt(q),j--;for(;0<ht-j;)H=jt(H),ht--;for(;j--;){if(q===H||H!==null&&q===H.alternate){jt=q;break e}q=jt(q),H=jt(H)}jt=null}else jt=null;at!==null&&Og(mt,et,at,jt,!1),Ht!==null&&ze!==null&&Og(mt,ze,Ht,jt,!0)}}t:{if(et=Q?is(Q):window,at=et.nodeName&&et.nodeName.toLowerCase(),at==="select"||at==="input"&&et.type==="file")var ye=Qd;else if(Kd(et))if(Jd)ye=Bv;else{ye=Pv;var Xt=Ov}else at=et.nodeName,!at||at.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?Q&&Re(Q.elementType)&&(ye=Qd):ye=Fv;if(ye&&(ye=ye(t,Q))){jd(mt,ye,a,ot);break t}Xt&&Xt(t,et,Q),t==="focusout"&&Q&&et.type==="number"&&Q.memoizedProps.value!=null&&he(et,"number",et.value)}switch(Xt=Q?is(Q):window,t){case"focusin":(Kd(Xt)||Xt.contentEditable==="true")&&(zs=Xt,tu=Q,Zr=null);break;case"focusout":Zr=tu=zs=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,rp(mt,a,ot);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":rp(mt,a,ot)}var oe;if(jc)t:{switch(t){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else Bs?Yd(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(kd&&a.locale!=="ko"&&(Bs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Bs&&(oe=Id()):(Ta=ot,Wc="value"in Ta?Ta.value:Ta.textContent,Bs=!0)),Xt=Hl(Q,_e),0<Xt.length&&(_e=new Vd(_e,t,null,a,ot),mt.push({event:_e,listeners:Xt}),oe?_e.data=oe:(oe=Zd(a),oe!==null&&(_e.data=oe)))),(oe=Dv?wv(t,a):Uv(t,a))&&(_e=Hl(Q,"onBeforeInput"),0<_e.length&&(Xt=new Vd("onBeforeInput","beforeinput",null,a,ot),mt.push({event:Xt,listeners:_e}),Xt.data=oe)),Ex(mt,t,Q,a,ot)}Lg(mt,n)})}function So(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Hl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Hr(t,a),c!=null&&r.unshift(So(t,c,f)),c=Hr(t,n),c!=null&&r.push(So(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Ax(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Og(t,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var b=a,F=b.alternate,Q=b.stateNode;if(b=b.tag,F!==null&&F===r)break;b!==5&&b!==26&&b!==27||Q===null||(F=Q,c?(Q=Hr(a,f),Q!=null&&g.unshift(So(a,Q,F))):c||(Q=Hr(a,f),Q!=null&&g.push(So(a,Q,F)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Rx=/\r\n?/g,Cx=/\u0000|\uFFFD/g;function Pg(t){return(typeof t=="string"?t:""+t).replace(Rx,`
`).replace(Cx,"")}function Fg(t,n){return n=Pg(n),Pg(t)===n}function Be(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Wn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Wn(t,""+r);break;case"className":It(t,"class",r);break;case"tabIndex":It(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":It(t,a,r);break;case"style":mi(t,r,f);break;case"data":if(n!=="object"){It(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=as(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",c.name,c,null),Be(t,n,"formEncType",c.formEncType,c,null),Be(t,n,"formMethod",c.formMethod,c,null),Be(t,n,"formTarget",c.formTarget,c,null)):(Be(t,n,"encType",c.encType,c,null),Be(t,n,"method",c.method,c,null),Be(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=as(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Gi);break;case"onScroll":r!=null&&pe("scroll",t);break;case"onScrollEnd":r!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=as(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":pe("beforetoggle",t),pe("toggle",t),wt(t,"popover",r);break;case"xlinkActuate":zt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":zt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":zt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":zt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":zt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":zt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":zt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":zt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":zt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":wt(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bi.get(a)||a,wt(t,a,r))}}function Rf(t,n,a,r,c,f){switch(a){case"style":mi(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Wn(t,r):(typeof r=="number"||typeof r=="bigint")&&Wn(t,""+r);break;case"onScroll":r!=null&&pe("scroll",t);break;case"onScrollEnd":r!=null&&pe("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):wt(t,a,r)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,f,g,a,null)}}c&&Be(t,n,"srcSet",a.srcSet,a,null),r&&Be(t,n,"src",a.src,a,null);return;case"input":pe("invalid",t);var b=f=g=c=null,F=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ot=a[r];if(ot!=null)switch(r){case"name":c=ot;break;case"type":g=ot;break;case"checked":F=ot;break;case"defaultChecked":Q=ot;break;case"value":f=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Be(t,n,r,ot,a,null)}}Cn(t,f,b,F,Q,g,c,!1);return;case"select":pe("invalid",t),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":r=b;default:Be(t,n,c,b,a,null)}n=f,a=g,t.multiple=!!r,n!=null?dn(t,!!r,n,!1):a!=null&&dn(t,!!r,a,!0);return;case"textarea":pe("invalid",t),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Be(t,n,g,b,a,null)}pi(t,r,c,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(r=a[F],r!=null)&&(F==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Be(t,n,F,r,a,null));return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(r=0;r<xo.length;r++)pe(xo[r],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,Q,r,a,null)}return;default:if(Re(n)){for(ot in a)a.hasOwnProperty(ot)&&(r=a[ot],r!==void 0&&Rf(t,n,ot,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Be(t,n,b,r,a,null))}function Dx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,b=null,F=null,Q=null,ot=null;for(at in a){var mt=a[at];if(a.hasOwnProperty(at)&&mt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":F=mt;default:r.hasOwnProperty(at)||Be(t,n,at,null,r,mt)}}for(var et in r){var at=r[et];if(mt=a[et],r.hasOwnProperty(et)&&(at!=null||mt!=null))switch(et){case"type":f=at;break;case"name":c=at;break;case"checked":Q=at;break;case"defaultChecked":ot=at;break;case"value":g=at;break;case"defaultValue":b=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==mt&&Be(t,n,et,at,r,mt)}}Ft(t,g,b,F,Q,ot,f,c);return;case"select":at=g=b=et=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":at=F;default:r.hasOwnProperty(f)||Be(t,n,f,null,r,F)}for(c in r)if(f=r[c],F=a[c],r.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":et=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==F&&Be(t,n,c,f,r,F)}n=b,a=g,r=at,et!=null?dn(t,!!a,et,!1):!!r!=!!a&&(n!=null?dn(t,!!a,n,!0):dn(t,!!a,a?[]:"",!1));return;case"textarea":at=et=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Be(t,n,b,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":et=c;break;case"defaultValue":at=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Be(t,n,g,c,r,f)}kn(t,et,at);return;case"option":for(var Ht in a)et=a[Ht],a.hasOwnProperty(Ht)&&et!=null&&!r.hasOwnProperty(Ht)&&(Ht==="selected"?t.selected=!1:Be(t,n,Ht,null,r,et));for(F in r)et=r[F],at=a[F],r.hasOwnProperty(F)&&et!==at&&(et!=null||at!=null)&&(F==="selected"?t.selected=et&&typeof et!="function"&&typeof et!="symbol":Be(t,n,F,et,r,at));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)et=a[jt],a.hasOwnProperty(jt)&&et!=null&&!r.hasOwnProperty(jt)&&Be(t,n,jt,null,r,et);for(Q in r)if(et=r[Q],at=a[Q],r.hasOwnProperty(Q)&&et!==at&&(et!=null||at!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:Be(t,n,Q,et,r,at)}return;default:if(Re(n)){for(var ze in a)et=a[ze],a.hasOwnProperty(ze)&&et!==void 0&&!r.hasOwnProperty(ze)&&Rf(t,n,ze,void 0,r,et);for(ot in r)et=r[ot],at=a[ot],!r.hasOwnProperty(ot)||et===at||et===void 0&&at===void 0||Rf(t,n,ot,et,r,at);return}}for(var q in a)et=a[q],a.hasOwnProperty(q)&&et!=null&&!r.hasOwnProperty(q)&&Be(t,n,q,null,r,et);for(mt in r)et=r[mt],at=a[mt],!r.hasOwnProperty(mt)||et===at||et==null&&at==null||Be(t,n,mt,et,r,at)}function Bg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,b=c.duration;if(f&&b&&Bg(g)){for(g=0,b=c.responseEnd,r+=1;r<a.length;r++){var F=a[r],Q=F.startTime;if(Q>b)break;var ot=F.transferSize,mt=F.initiatorType;ot&&Bg(mt)&&(F=F.responseEnd,g+=ot*(F<b?1:(b-Q)/(F-Q)))}if(--r,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Cf=null,Df=null;function Gl(t){return t.nodeType===9?t:t.ownerDocument}function zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ig(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function wf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Uf=null;function Ux(){var t=window.event;return t&&t.type==="popstate"?t===Uf?!1:(Uf=t,!0):(Uf=null,!1)}var Hg=typeof setTimeout=="function"?setTimeout:void 0,Lx=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,Nx=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(Ox)}:Hg;function Ox(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function Vg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),fr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[xa]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Mo(t.ownerDocument.body);a=c}while(a);fr(n)}function Xg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Lf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lf(a),Ir(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Px(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[xa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function Fx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function kg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function Nf(t){return t.data==="$?"||t.data==="$~"}function Of(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Bx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Pf=null;function Wg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function qg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Yg(t,n,a){switch(n=Gl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ir(t)}var ui=new Map,Zg=new Set;function Vl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ia=B.d;B.d={f:zx,r:Ix,D:Hx,C:Gx,L:Vx,m:Xx,X:Wx,S:kx,M:qx};function zx(){var t=ia.f(),n=Nl();return t||n}function Ix(t){var n=Ma(t);n!==null&&n.tag===5&&n.type==="form"?fm(n):ia.r(t)}var lr=typeof document>"u"?null:document;function Kg(t,n,a){var r=lr;if(r&&typeof n=="string"&&n){var c=we(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Zg.has(c)||(Zg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),bn(n,"link",t),on(n),r.head.appendChild(n)))}}function Hx(t){ia.D(t),Kg("dns-prefetch",t,null)}function Gx(t,n){ia.C(t,n),Kg("preconnect",t,n)}function Vx(t,n,a){ia.L(t,n,a);var r=lr;if(r&&t&&n){var c='link[rel="preload"][as="'+we(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+we(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+we(a.imageSizes)+'"]')):c+='[href="'+we(t)+'"]';var f=c;switch(n){case"style":f=cr(t);break;case"script":f=ur(t)}ui.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(Eo(f))||n==="script"&&r.querySelector(yo(f))||(n=r.createElement("link"),bn(n,"link",t),on(n),r.head.appendChild(n)))}}function Xx(t,n){ia.m(t,n);var a=lr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+we(r)+'"][href="'+we(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ur(t)}if(!ui.has(f)&&(t=v({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}r=a.createElement("link"),bn(r,"link",t),on(r),a.head.appendChild(r)}}}function kx(t,n,a){ia.S(t,n,a);var r=lr;if(r&&t){var c=Ea(r).hoistableStyles,f=cr(t);n=n||"default";var g=c.get(f);if(!g){var b={loading:0,preload:null};if(g=r.querySelector(Eo(f)))b.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&Ff(t,a);var F=g=r.createElement("link");on(F),bn(F,"link",t),F._p=new Promise(function(Q,ot){F.onload=Q,F.onerror=ot}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Xl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:b},c.set(f,g)}}}function Wx(t,n){ia.X(t,n);var a=lr;if(a&&t){var r=Ea(a).hoistableScripts,c=ur(t),f=r.get(c);f||(f=a.querySelector(yo(c)),f||(t=v({src:t,async:!0},n),(n=ui.get(c))&&Bf(t,n),f=a.createElement("script"),on(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function qx(t,n){ia.M(t,n);var a=lr;if(a&&t){var r=Ea(a).hoistableScripts,c=ur(t),f=r.get(c);f||(f=a.querySelector(yo(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&Bf(t,n),f=a.createElement("script"),on(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function jg(t,n,a,r){var c=(c=ft.current)?Vl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cr(a.href),a=Ea(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=cr(a.href);var f=Ea(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(Eo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||Yx(c,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ur(a),a=Ea(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function cr(t){return'href="'+we(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function Qg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Yx(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),bn(n,"link",a),on(n),t.head.appendChild(n))}function ur(t){return'[src="'+we(t)+'"]'}function yo(t){return"script[async]"+t}function Jg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+we(a.href)+'"]');if(r)return n.instance=r,on(r),r;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),on(r),bn(r,"style",c),Xl(r,a.precedence,t),n.instance=r;case"stylesheet":c=cr(a.href);var f=t.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,on(f),f;r=Qg(a),(c=ui.get(c))&&Ff(r,c),f=(t.ownerDocument||t).createElement("link"),on(f);var g=f;return g._p=new Promise(function(b,F){g.onload=b,g.onerror=F}),bn(f,"link",r),n.state.loading|=4,Xl(f,a.precedence,t),n.instance=f;case"script":return f=ur(a.src),(c=t.querySelector(yo(f)))?(n.instance=c,on(c),c):(r=a,(c=ui.get(f))&&(r=v({},a),Bf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),on(c),bn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Xl(r,a.precedence,t));return n.instance}function Xl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var b=r[g];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ff(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var kl=null;function $g(t,n,a){if(kl===null){var r=new Map,c=kl=new Map;c.set(a,r)}else c=kl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[xa]||f[nn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var b=r.get(g);b?b.push(f):r.set(g,[f])}}return r}function t0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Zx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Kx(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=cr(r.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Wl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,on(f);return}f=n.ownerDocument||n,r=Qg(r),(c=ui.get(c))&&Ff(r,c),f=f.createElement("link"),on(f);var g=f;g._p=new Promise(function(b,F){g.onload=b,g.onerror=F}),bn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Wl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var zf=0;function jx(t,n){return t.stylesheets&&t.count===0&&Yl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Yl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&zf===0&&(zf=62500*wx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>zf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Wl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ql=null;function Yl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ql=new Map,n.forEach(Qx,t),ql=null,Wl.call(t))}function Qx(t,n){if(!(n.state.loading&4)){var a=ql.get(t);if(a)var r=a.get(null);else{a=new Map,ql.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=Wl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var To={$$typeof:O,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function Jx(t,n,a,r,c,f,g,b,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vt(0),this.hiddenUpdates=Vt(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function n0(t,n,a,r,c,f,g,b,F,Q,ot,mt){return t=new Jx(t,n,a,g,F,Q,ot,mt,b),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=gu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Su(f),t}function i0(t){return t?(t=Gs,t):Gs}function a0(t,n,a,r,c,f){c=i0(c),r.context===null?r.context=c:r.pendingContext=c,r=wa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ua(t,r,n),a!==null&&(Hn(a,t,n),eo(a,t,n))}function s0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function If(t,n){s0(t,n),(t=t.alternate)&&s0(t,n)}function r0(t){if(t.tag===13||t.tag===31){var n=ls(t,67108864);n!==null&&Hn(n,t,67108864),If(t,67108864)}}function o0(t){if(t.tag===13||t.tag===31){var n=Jn();n=ns(n);var a=ls(t,n);a!==null&&Hn(a,t,n),If(t,n)}}var Zl=!0;function $x(t,n,a,r){var c=U.T;U.T=null;var f=B.p;try{B.p=2,Hf(t,n,a,r)}finally{B.p=f,U.T=c}}function tS(t,n,a,r){var c=U.T;U.T=null;var f=B.p;try{B.p=8,Hf(t,n,a,r)}finally{B.p=f,U.T=c}}function Hf(t,n,a,r){if(Zl){var c=Gf(r);if(c===null)Af(t,n,r,Kl,a),c0(t,r);else if(nS(c,t,n,a,r))r.stopPropagation();else if(c0(t,r),n&4&&-1<eS.indexOf(t)){for(;c!==null;){var f=Ma(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=xt(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var F=1<<31-Dt(g);b.entanglements[1]|=F,g&=~F}Di(f),(Ae&6)===0&&(Ul=St()+500,vo(0))}}break;case 31:case 13:b=ls(f,2),b!==null&&Hn(b,f,2),Nl(),If(f,2)}if(f=Gf(r),f===null&&Af(t,n,r,Kl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Af(t,n,r,null,a)}}function Gf(t){return t=Vc(t),Vf(t)}var Kl=null;function Vf(t){if(Kl=null,t=Sa(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Kl=t,null}function l0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ye()){case C:return 2;case y:return 8;case Z:case dt:return 32;case _t:return 268435456;default:return 32}default:return 32}}var Xf=!1,Va=null,Xa=null,ka=null,bo=new Map,Ao=new Map,Wa=[],eS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c0(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ma(n),n!==null&&r0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function nS(t,n,a,r,c){switch(n){case"focusin":return Va=Ro(Va,t,n,a,r,c),!0;case"dragenter":return Xa=Ro(Xa,t,n,a,r,c),!0;case"mouseover":return ka=Ro(ka,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return bo.set(f,Ro(bo.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ao.set(f,Ro(Ao.get(f)||null,t,n,a,r,c)),!0}return!1}function u0(t){var n=Sa(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Br(t.priority,function(){o0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Br(t.priority,function(){o0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Gf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Gc=r,a.target.dispatchEvent(r),Gc=null}else return n=Ma(a),n!==null&&r0(n),t.blockedOn=a,!1;n.shift()}return!0}function f0(t,n,a){jl(t)&&a.delete(n)}function iS(){Xf=!1,Va!==null&&jl(Va)&&(Va=null),Xa!==null&&jl(Xa)&&(Xa=null),ka!==null&&jl(ka)&&(ka=null),bo.forEach(f0),Ao.forEach(f0)}function Ql(t,n){t.blockedOn===n&&(t.blockedOn=null,Xf||(Xf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,iS)))}var Jl=null;function h0(t){Jl!==t&&(Jl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Jl===t&&(Jl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Vf(r||a)===null)continue;break}var f=Ma(a);f!==null&&(t.splice(n,3),n-=3,Hu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function fr(t){function n(F){return Ql(F,t)}Va!==null&&Ql(Va,t),Xa!==null&&Ql(Xa,t),ka!==null&&Ql(ka,t),bo.forEach(n),Ao.forEach(n);for(var a=0;a<Wa.length;a++){var r=Wa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)u0(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[Mn]||null;if(typeof f=="function")g||h0(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[Mn]||null)b=g.formAction;else if(Vf(c)!==null)continue}else b=g.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),h0(a)}}}function d0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function kf(t){this._internalRoot=t}$l.prototype.render=kf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Jn();a0(a,r,t,n,null,null)},$l.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;a0(t.current,2,null,t,null,null),Nl(),n[Hi]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var n=Fr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&u0(t)}};var p0=e.version;if(p0!=="19.2.6")throw Error(s(527,p0,"19.2.6"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var aS={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{st=tc.inject(aS),rt=tc}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Mm,f=Em,g=ym;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=n0(t,1,!1,null,null,a,r,null,c,f,g,d0),t[Hi]=n.current,bf(t),new kf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Mm,g=Em,b=ym,F=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=n0(t,1,!0,n,a??null,r,c,F,f,g,b,d0),n.context=i0(null),a=n.current,r=Jn(),r=ns(r),c=wa(r),c.callback=null,Ua(a,c,r),a=r,n.current.lanes=a,Qt(n,a),Di(n),t[Hi]=n.current,bf(t),new $l(n)},Do.version="19.2.6",Do}var S0;function dS(){if(S0)return qf.exports;S0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=hS(),qf.exports}var LA=dS();const pS="modulepreload",mS=function(o){return"/"+o},M0={},NA=function(e,i,s){let l=Promise.resolve();if(i&&i.length>0){let m=function(p){return Promise.all(p.map(x=>Promise.resolve(x).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),d=h?.nonce||h?.getAttribute("nonce");l=m(i.map(p=>{if(p=mS(p),p in M0)return;M0[p]=!0;const x=p.endsWith(".css"),v=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const _=document.createElement("link");if(_.rel=x?"stylesheet":pS,x||(_.as="script"),_.crossOrigin="",_.href=p,d&&_.setAttribute("nonce",d),document.head.appendChild(_),x)return new Promise((E,R)=>{_.addEventListener("load",E),_.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return l.then(h=>{for(const d of h||[])d.status==="rejected"&&u(d.reason);return e().catch(u)})};const Sd="184",gS=0,E0=1,_S=2,Tc=1,vS=2,Bo=3,es=0,Vn=1,ca=2,fa=0,Rr=1,y0=2,T0=3,b0=4,xS=5,As=100,SS=101,MS=102,ES=103,yS=104,TS=200,bS=201,AS=202,RS=203,Dh=204,wh=205,CS=206,DS=207,wS=208,US=209,LS=210,NS=211,OS=212,PS=213,FS=214,Uh=0,Lh=1,Nh=2,Dr=3,Oh=4,Ph=5,Fh=6,Bh=7,M_=0,BS=1,zS=2,Pi=0,E_=1,y_=2,T_=3,b_=4,A_=5,R_=6,C_=7,D_=300,ws=301,wr=302,Kf=303,jf=304,Fc=306,zh=1e3,ua=1001,Ih=1002,An=1003,IS=1004,ec=1005,Un=1006,Qf=1007,Cs=1008,di=1009,w_=1010,U_=1011,Io=1012,Md=1013,zi=1014,Ni=1015,pa=1016,Ed=1017,yd=1018,Ho=1020,L_=35902,N_=35899,O_=1021,P_=1022,Ti=1023,ma=1026,Ds=1027,F_=1028,Td=1029,Us=1030,bd=1031,Ad=1033,bc=33776,Ac=33777,Rc=33778,Cc=33779,Hh=35840,Gh=35841,Vh=35842,Xh=35843,kh=36196,Wh=37492,qh=37496,Yh=37488,Zh=37489,wc=37490,Kh=37491,jh=37808,Qh=37809,Jh=37810,$h=37811,td=37812,ed=37813,nd=37814,id=37815,ad=37816,sd=37817,rd=37818,od=37819,ld=37820,cd=37821,ud=36492,fd=36494,hd=36495,dd=36283,pd=36284,Uc=36285,md=36286,HS=3200,A0=0,GS=1,$a="",hi="srgb",Lc="srgb-linear",Nc="linear",Oe="srgb",hr=7680,R0=519,VS=512,XS=513,kS=514,Rd=515,WS=516,qS=517,Cd=518,YS=519,C0=35044,D0="300 es",Oi=2e3,Oc=2001;function ZS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Go(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function KS(){const o=Go("canvas");return o.style.display="block",o}const w0={};function U0(...o){const e="THREE."+o.shift();console.log(e,...o)}function B_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function Jt(...o){o=B_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Me(...o){o=B_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function gd(...o){const e=o.join(" ");e in w0||(w0[e]=!0,Jt(...o))}function jS(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const QS={[Uh]:Lh,[Nh]:Fh,[Oh]:Bh,[Dr]:Ph,[Lh]:Uh,[Fh]:Nh,[Bh]:Oh,[Ph]:Dr};class Ns{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jf=Math.PI/180,_d=180/Math.PI;function Vo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function JS(o,e){return(o%e+e)%e}function $f(o,e,i){return(1-i)*o+i*e}function wo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ld=class Ld{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ld.prototype.isVector2=!0;let He=Ld;class Nr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],x=s[l+2],v=s[l+3],_=u[h+0],E=u[h+1],R=u[h+2],w=u[h+3];if(v!==w||m!==_||p!==E||x!==R){let M=m*_+p*E+x*R+v*w;M<0&&(_=-_,E=-E,R=-R,w=-w,M=-M);let S=1-d;if(M<.9995){const D=Math.acos(M),O=Math.sin(D);S=Math.sin(S*D)/O,d=Math.sin(d*D)/O,m=m*S+_*d,p=p*S+E*d,x=x*S+R*d,v=v*S+w*d}else{m=m*S+_*d,p=p*S+E*d,x=x*S+R*d,v=v*S+w*d;const D=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=D,p*=D,x*=D,v*=D}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],v=u[h],_=u[h+1],E=u[h+2],R=u[h+3];return e[i]=d*R+x*v+m*E-p*_,e[i+1]=m*R+x*_+p*v-d*E,e[i+2]=p*R+x*E+d*_-m*v,e[i+3]=x*R-d*v-m*_-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),v=d(u/2),_=m(s/2),E=m(l/2),R=m(u/2);switch(h){case"XYZ":this._x=_*x*v+p*E*R,this._y=p*E*v-_*x*R,this._z=p*x*R+_*E*v,this._w=p*x*v-_*E*R;break;case"YXZ":this._x=_*x*v+p*E*R,this._y=p*E*v-_*x*R,this._z=p*x*R-_*E*v,this._w=p*x*v+_*E*R;break;case"ZXY":this._x=_*x*v-p*E*R,this._y=p*E*v+_*x*R,this._z=p*x*R+_*E*v,this._w=p*x*v-_*E*R;break;case"ZYX":this._x=_*x*v-p*E*R,this._y=p*E*v+_*x*R,this._z=p*x*R-_*E*v,this._w=p*x*v+_*E*R;break;case"YZX":this._x=_*x*v+p*E*R,this._y=p*E*v+_*x*R,this._z=p*x*R-_*E*v,this._w=p*x*v-_*E*R;break;case"XZY":this._x=_*x*v-p*E*R,this._y=p*E*v-_*x*R,this._z=p*x*R+_*E*v,this._w=p*x*v+_*E*R;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],v=i[10],_=s+d+v;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(x-m)*E,this._y=(u-p)*E,this._z=(h-l)*E}else if(s>d&&s>v){const E=2*Math.sqrt(1+s-d-v);this._w=(x-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+p)/E}else if(d>v){const E=2*Math.sqrt(1+d-s-v);this._w=(u-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+v-s-d);this._w=(h-l)/E,this._x=(u+p)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+h*d+l*p-u*m,this._y=l*x+h*m+u*d-s*p,this._z=u*x+h*p+s*m-l*d,this._w=h*x-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,u=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nd=class Nd{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(L0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(L0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),x=2*(d*i-u*l),v=2*(u*s-h*i);return this.x=i+m*p+h*v-d*x,this.y=s+m*x+d*p-u*v,this.z=l+m*v+u*x-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Se(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nd.prototype.isVector3=!0;let nt=Nd;const th=new nt,L0=new Nr,Od=class Od{constructor(e,i,s,l,u,h,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=u,x[5]=m,x[6]=s,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],x=s[4],v=s[7],_=s[2],E=s[5],R=s[8],w=l[0],M=l[3],S=l[6],D=l[1],O=l[4],N=l[7],k=l[2],L=l[5],V=l[8];return u[0]=h*w+d*D+m*k,u[3]=h*M+d*O+m*L,u[6]=h*S+d*N+m*V,u[1]=p*w+x*D+v*k,u[4]=p*M+x*O+v*L,u[7]=p*S+x*N+v*V,u[2]=_*w+E*D+R*k,u[5]=_*M+E*O+R*L,u[8]=_*S+E*N+R*V,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return i*h*x-i*d*p-s*u*x+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],v=x*h-d*p,_=d*m-x*u,E=p*u-h*m,R=i*v+s*_+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=v*w,e[1]=(l*p-x*s)*w,e[2]=(d*s-l*h)*w,e[3]=_*w,e[4]=(x*i-l*m)*w,e[5]=(l*u-d*i)*w,e[6]=E*w,e[7]=(s*m-p*i)*w,e[8]=(h*i-s*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(eh.makeScale(e,i)),this}rotate(e){return this.premultiply(eh.makeRotation(-e)),this}translate(e,i){return this.premultiply(eh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Od.prototype.isMatrix3=!0;let ie=Od;const eh=new ie,N0=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O0=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $S(){const o={enabled:!0,workingColorSpace:Lc,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Oe&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Oe&&(l.r=Cr(l.r),l.g=Cr(l.g),l.b=Cr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?Nc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return gd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return gd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Lc]:{primaries:e,whitePoint:s,transfer:Nc,toXYZ:N0,fromXYZ:O0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:s,transfer:Oe,toXYZ:N0,fromXYZ:O0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const xe=$S();function ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Cr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let dr;class tM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{dr===void 0&&(dr=Go("canvas")),dr.width=e.width,dr.height=e.height;const l=dr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=dr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Go("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ha(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ha(i[s]/255)*255):i[s]=ha(i[s]);return{data:i,width:e.width,height:e.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eM=0;class Dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(nh(l[h].image)):u.push(nh(l[h]))}else u=nh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function nh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?tM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let nM=0;const ih=new nt;class Ln extends Ns{constructor(e=Ln.DEFAULT_IMAGE,i=Ln.DEFAULT_MAPPING,s=ua,l=ua,u=Un,h=Cs,d=Ti,m=di,p=Ln.DEFAULT_ANISOTROPY,x=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Vo(),this.name="",this.source=new Dd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ih).x}get height(){return this.source.getSize(ih).y}get depth(){return this.source.getSize(ih).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){Jt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Jt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case ua:e.x=e.x<0?0:1;break;case Ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case ua:e.y=e.y<0?0:1;break;case Ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=D_;Ln.DEFAULT_ANISOTROPY=1;const Pd=class Pd{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],x=m[4],v=m[8],_=m[1],E=m[5],R=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(x-_)<.01&&Math.abs(v-w)<.01&&Math.abs(R-M)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+w)<.1&&Math.abs(R+M)<.1&&Math.abs(p+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,N=(E+1)/2,k=(S+1)/2,L=(x+_)/4,V=(v+w)/4,A=(R+M)/4;return O>N&&O>k?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=L/s,u=V/s):N>k?N<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),s=L/l,u=A/l):k<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),s=V/u,l=A/u),this.set(s,l,u,i),this}let D=Math.sqrt((M-R)*(M-R)+(v-w)*(v-w)+(_-x)*(_-x));return Math.abs(D)<.001&&(D=1),this.x=(M-R)/D,this.y=(v-w)/D,this.z=(_-x)/D,this.w=Math.acos((p+E+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pd.prototype.isVector4=!0;let rn=Pd;class iM extends Ns{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},u=new Ln(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Dd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends iM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class z_ extends Ln{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aM extends Ln{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pc=class Pc{constructor(e,i,s,l,u,h,d,m,p,x,v,_,E,R,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,x,v,_,E,R,w,M)}set(e,i,s,l,u,h,d,m,p,x,v,_,E,R,w,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=x,S[10]=v,S[14]=_,S[3]=E,S[7]=R,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/pr.setFromMatrixColumn(e,0).length(),u=1/pr.setFromMatrixColumn(e,1).length(),h=1/pr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const _=h*x,E=h*v,R=d*x,w=d*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=E+R*p,i[5]=_-w*p,i[9]=-d*m,i[2]=w-_*p,i[6]=R+E*p,i[10]=h*m}else if(e.order==="YXZ"){const _=m*x,E=m*v,R=p*x,w=p*v;i[0]=_+w*d,i[4]=R*d-E,i[8]=h*p,i[1]=h*v,i[5]=h*x,i[9]=-d,i[2]=E*d-R,i[6]=w+_*d,i[10]=h*m}else if(e.order==="ZXY"){const _=m*x,E=m*v,R=p*x,w=p*v;i[0]=_-w*d,i[4]=-h*v,i[8]=R+E*d,i[1]=E+R*d,i[5]=h*x,i[9]=w-_*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const _=h*x,E=h*v,R=d*x,w=d*v;i[0]=m*x,i[4]=R*p-E,i[8]=_*p+w,i[1]=m*v,i[5]=w*p+_,i[9]=E*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const _=h*m,E=h*p,R=d*m,w=d*p;i[0]=m*x,i[4]=w-_*v,i[8]=R*v+E,i[1]=v,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=E*v+R,i[10]=_-w*v}else if(e.order==="XZY"){const _=h*m,E=h*p,R=d*m,w=d*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=_*v+w,i[5]=h*x,i[9]=E*v-R,i[2]=R*v-E,i[6]=d*x,i[10]=w*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sM,e,rM)}lookAt(e,i,s){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ya.crossVectors(s,$n),Ya.lengthSq()===0&&(Math.abs(s.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ya.crossVectors(s,$n)),Ya.normalize(),nc.crossVectors($n,Ya),l[0]=Ya.x,l[4]=nc.x,l[8]=$n.x,l[1]=Ya.y,l[5]=nc.y,l[9]=$n.y,l[2]=Ya.z,l[6]=nc.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],x=s[1],v=s[5],_=s[9],E=s[13],R=s[2],w=s[6],M=s[10],S=s[14],D=s[3],O=s[7],N=s[11],k=s[15],L=l[0],V=l[4],A=l[8],P=l[12],Y=l[1],z=l[5],K=l[9],lt=l[13],ct=l[2],W=l[6],U=l[10],B=l[14],it=l[3],pt=l[7],vt=l[11],Ut=l[15];return u[0]=h*L+d*Y+m*ct+p*it,u[4]=h*V+d*z+m*W+p*pt,u[8]=h*A+d*K+m*U+p*vt,u[12]=h*P+d*lt+m*B+p*Ut,u[1]=x*L+v*Y+_*ct+E*it,u[5]=x*V+v*z+_*W+E*pt,u[9]=x*A+v*K+_*U+E*vt,u[13]=x*P+v*lt+_*B+E*Ut,u[2]=R*L+w*Y+M*ct+S*it,u[6]=R*V+w*z+M*W+S*pt,u[10]=R*A+w*K+M*U+S*vt,u[14]=R*P+w*lt+M*B+S*Ut,u[3]=D*L+O*Y+N*ct+k*it,u[7]=D*V+O*z+N*W+k*pt,u[11]=D*A+O*K+N*U+k*vt,u[15]=D*P+O*lt+N*B+k*Ut,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],x=e[2],v=e[6],_=e[10],E=e[14],R=e[3],w=e[7],M=e[11],S=e[15],D=m*E-p*_,O=d*E-p*v,N=d*_-m*v,k=h*E-p*x,L=h*_-m*x,V=h*v-d*x;return i*(w*D-M*O+S*N)-s*(R*D-M*k+S*L)+l*(R*O-w*k+S*V)-u*(R*N-w*L+M*V)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],v=e[9],_=e[10],E=e[11],R=e[12],w=e[13],M=e[14],S=e[15],D=i*d-s*h,O=i*m-l*h,N=i*p-u*h,k=s*m-l*d,L=s*p-u*d,V=l*p-u*m,A=x*w-v*R,P=x*M-_*R,Y=x*S-E*R,z=v*M-_*w,K=v*S-E*w,lt=_*S-E*M,ct=D*lt-O*K+N*z+k*Y-L*P+V*A;if(ct===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ct;return e[0]=(d*lt-m*K+p*z)*W,e[1]=(l*K-s*lt-u*z)*W,e[2]=(w*V-M*L+S*k)*W,e[3]=(_*L-v*V-E*k)*W,e[4]=(m*Y-h*lt-p*P)*W,e[5]=(i*lt-l*Y+u*P)*W,e[6]=(M*N-R*V-S*O)*W,e[7]=(x*V-_*N+E*O)*W,e[8]=(h*K-d*Y+p*A)*W,e[9]=(s*Y-i*K-u*A)*W,e[10]=(R*L-w*N+S*D)*W,e[11]=(v*N-x*L-E*D)*W,e[12]=(d*P-h*z-m*A)*W,e[13]=(i*z-s*P+l*A)*W,e[14]=(w*O-R*k-M*D)*W,e[15]=(x*k-v*O+_*D)*W,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,x=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*h,0,p*m-l*d,x*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,x=h+h,v=d+d,_=u*p,E=u*x,R=u*v,w=h*x,M=h*v,S=d*v,D=m*p,O=m*x,N=m*v,k=s.x,L=s.y,V=s.z;return l[0]=(1-(w+S))*k,l[1]=(E+N)*k,l[2]=(R-O)*k,l[3]=0,l[4]=(E-N)*L,l[5]=(1-(_+S))*L,l[6]=(M+D)*L,l[7]=0,l[8]=(R+O)*V,l[9]=(M-D)*V,l[10]=(1-(_+w))*V,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return s.set(1,1,1),i.identity(),this;let h=pr.set(l[0],l[1],l[2]).length();const d=pr.set(l[4],l[5],l[6]).length(),m=pr.set(l[8],l[9],l[10]).length();u<0&&(h=-h),xi.copy(this);const p=1/h,x=1/d,v=1/m;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=x,xi.elements[5]*=x,xi.elements[6]*=x,xi.elements[8]*=v,xi.elements[9]*=v,xi.elements[10]*=v,i.setFromRotationMatrix(xi),s.x=h,s.y=d,s.z=m,this}makePerspective(e,i,s,l,u,h,d=Oi,m=!1){const p=this.elements,x=2*u/(i-e),v=2*u/(s-l),_=(i+e)/(i-e),E=(s+l)/(s-l);let R,w;if(m)R=u/(h-u),w=h*u/(h-u);else if(d===Oi)R=-(h+u)/(h-u),w=-2*h*u/(h-u);else if(d===Oc)R=-h/(h-u),w=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=Oi,m=!1){const p=this.elements,x=2/(i-e),v=2/(s-l),_=-(i+e)/(i-e),E=-(s+l)/(s-l);let R,w;if(m)R=1/(h-u),w=h/(h-u);else if(d===Oi)R=-2/(h-u),w=-(h+u)/(h-u);else if(d===Oc)R=-1/(h-u),w=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Pc.prototype.isMatrix4=!0;let mn=Pc;const pr=new nt,xi=new mn,sM=new nt(0,0,0),rM=new nt(1,1,1),Ya=new nt,nc=new nt,$n=new nt,P0=new mn,F0=new Nr;class Ls{constructor(e=0,i=0,s=0,l=Ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],v=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-x,E),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return P0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(P0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return F0.setFromEuler(this),this.setFromQuaternion(F0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ls.DEFAULT_ORDER="XYZ";class I_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oM=0;const B0=new nt,mr=new Nr,aa=new mn,ic=new nt,Uo=new nt,lM=new nt,cM=new Nr,z0=new nt(1,0,0),I0=new nt(0,1,0),H0=new nt(0,0,1),G0={type:"added"},uM={type:"removed"},gr={type:"childadded",child:null},ah={type:"childremoved",child:null};class ei extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new nt,i=new Ls,s=new Nr,l=new nt(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new ie}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return mr.setFromAxisAngle(e,i),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,i){return mr.setFromAxisAngle(e,i),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(z0,e)}rotateY(e){return this.rotateOnAxis(I0,e)}rotateZ(e){return this.rotateOnAxis(H0,e)}translateOnAxis(e,i){return B0.copy(e).applyQuaternion(this.quaternion),this.position.add(B0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(z0,e)}translateY(e){return this.translateOnAxis(I0,e)}translateZ(e){return this.translateOnAxis(H0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?ic.copy(e):ic.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Uo,ic,this.up):aa.lookAt(ic,Uo,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),mr.setFromRotationMatrix(aa),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Me("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G0),gr.child=e,this.dispatchEvent(gr),gr.child=null):Me("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(uM),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G0),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,lM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,cM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),x=h(e.images),v=h(e.shapes),_=h(e.skeletons),E=h(e.animations),R=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),E.length>0&&(s.animations=E),R.length>0&&(s.nodes=R)}return s.object=l,s;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ei.DEFAULT_UP=new nt(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ac extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(p,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=x.position.distanceTo(v.position),E=.02,R=.005;p.inputState.pinching&&_>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new ac;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},sc={h:0,s:0,l:0};function rh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ie{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xe.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=xe.workingColorSpace){return this.r=e,this.g=i,this.b=s,xe.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=xe.workingColorSpace){if(e=JS(e,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=rh(h,u,e+1/3),this.g=rh(h,u,e),this.b=rh(h,u,e-1/3)}return xe.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function s(u){u!==void 0&&parseFloat(u)<1&&Jt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:Jt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);Jt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const s=H_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):Jt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return xe.workingToColorSpace(wn.copy(this),e),Math.round(Se(wn.r*255,0,255))*65536+Math.round(Se(wn.g*255,0,255))*256+Math.round(Se(wn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=xe.workingColorSpace){xe.workingToColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,u=wn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=x<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=xe.workingColorSpace){return xe.workingToColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=hi){xe.workingToColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(sc);const s=$f(Za.h,sc.h,i),l=$f(Za.s,sc.s,i),u=$f(Za.l,sc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ie;Ie.NAMES=H_;class OA extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ls,this.environmentIntensity=1,this.environmentRotation=new Ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Si=new nt,sa=new nt,oh=new nt,ra=new nt,_r=new nt,vr=new nt,V0=new nt,lh=new nt,ch=new nt,uh=new nt,fh=new rn,hh=new rn,dh=new rn;class yi{constructor(e=new nt,i=new nt,s=new nt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Si.subVectors(e,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Si.subVectors(l,i),sa.subVectors(s,i),oh.subVectors(e,i);const h=Si.dot(Si),d=Si.dot(sa),m=Si.dot(oh),p=sa.dot(sa),x=sa.dot(oh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const _=1/v,E=(p*m-d*x)*_,R=(h*x-d*m)*_;return u.set(1-E-R,R,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ra.x),m.addScaledVector(h,ra.y),m.addScaledVector(d,ra.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return fh.setScalar(0),hh.setScalar(0),dh.setScalar(0),fh.fromBufferAttribute(e,i),hh.fromBufferAttribute(e,s),dh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(fh,u.x),h.addScaledVector(hh,u.y),h.addScaledVector(dh,u.z),h}static isFrontFacing(e,i,s,l){return Si.subVectors(s,i),sa.subVectors(e,i),Si.cross(sa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Si.cross(sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return yi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;_r.subVectors(l,s),vr.subVectors(u,s),lh.subVectors(e,s);const m=_r.dot(lh),p=vr.dot(lh);if(m<=0&&p<=0)return i.copy(s);ch.subVectors(e,l);const x=_r.dot(ch),v=vr.dot(ch);if(x>=0&&v<=x)return i.copy(l);const _=m*v-x*p;if(_<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(s).addScaledVector(_r,h);uh.subVectors(e,u);const E=_r.dot(uh),R=vr.dot(uh);if(R>=0&&E<=R)return i.copy(u);const w=E*p-m*R;if(w<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(s).addScaledVector(vr,d);const M=x*R-E*v;if(M<=0&&v-x>=0&&E-R>=0)return V0.subVectors(u,l),d=(v-x)/(v-x+(E-R)),i.copy(l).addScaledVector(V0,d);const S=1/(M+w+_);return h=w*S,d=_*S,i.copy(s).addScaledVector(_r,h).addScaledVector(vr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xo{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Mi):Mi.fromBufferAttribute(u,h),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),rc.copy(s.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),oc.subVectors(this.max,Lo),xr.subVectors(e.a,Lo),Sr.subVectors(e.b,Lo),Mr.subVectors(e.c,Lo),Ka.subVectors(Sr,xr),ja.subVectors(Mr,Sr),Ms.subVectors(xr,Mr);let i=[0,-Ka.z,Ka.y,0,-ja.z,ja.y,0,-Ms.z,Ms.y,Ka.z,0,-Ka.x,ja.z,0,-ja.x,Ms.z,0,-Ms.x,-Ka.y,Ka.x,0,-ja.y,ja.x,0,-Ms.y,Ms.x,0];return!ph(i,xr,Sr,Mr,oc)||(i=[1,0,0,0,1,0,0,0,1],!ph(i,xr,Sr,Mr,oc))?!1:(lc.crossVectors(Ka,ja),i=[lc.x,lc.y,lc.z],ph(i,xr,Sr,Mr,oc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oa=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Mi=new nt,rc=new Xo,xr=new nt,Sr=new nt,Mr=new nt,Ka=new nt,ja=new nt,Ms=new nt,Lo=new nt,oc=new nt,lc=new nt,Es=new nt;function ph(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Es.fromArray(o,u);const d=l.x*Math.abs(Es.x)+l.y*Math.abs(Es.y)+l.z*Math.abs(Es.z),m=e.dot(Es),p=i.dot(Es),x=s.dot(Es);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const hn=new nt,cc=new He;let hM=0;class Bi extends Ns{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=C0,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(e),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=wo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=wo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=wo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=wo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=wo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==C0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class G_ extends Bi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class V_ extends Bi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class da extends Bi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const dM=new Xo,No=new nt,mh=new nt;class wd{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):dM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(No,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(mh)),this.expandByPoint(No.copy(e.center).sub(mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pM=0;const fi=new mn,gh=new ei,Er=new nt,ti=new Xo,Oo=new Xo,xn=new nt;class _a extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ZS(e)?V_:G_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ie().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,s){return fi.makeTranslation(e,i,s),this.applyMatrix4(fi),this}scale(e,i,s){return fi.makeScale(e,i,s),this.applyMatrix4(fi),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new da(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Oo.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ti.min,Oo.min),ti.expandByPoint(xn),xn.addVectors(ti.max,Oo.max),ti.expandByPoint(xn)):(ti.expandByPoint(Oo.min),ti.expandByPoint(Oo.max))}ti.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)xn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)xn.fromBufferAttribute(d,p),m&&(Er.fromBufferAttribute(e,p),xn.add(Er)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let A=0;A<s.count;A++)d[A]=new nt,m[A]=new nt;const p=new nt,x=new nt,v=new nt,_=new He,E=new He,R=new He,w=new nt,M=new nt;function S(A,P,Y){p.fromBufferAttribute(s,A),x.fromBufferAttribute(s,P),v.fromBufferAttribute(s,Y),_.fromBufferAttribute(u,A),E.fromBufferAttribute(u,P),R.fromBufferAttribute(u,Y),x.sub(p),v.sub(p),E.sub(_),R.sub(_);const z=1/(E.x*R.y-R.x*E.y);isFinite(z)&&(w.copy(x).multiplyScalar(R.y).addScaledVector(v,-E.y).multiplyScalar(z),M.copy(v).multiplyScalar(E.x).addScaledVector(x,-R.x).multiplyScalar(z),d[A].add(w),d[P].add(w),d[Y].add(w),m[A].add(M),m[P].add(M),m[Y].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let A=0,P=D.length;A<P;++A){const Y=D[A],z=Y.start,K=Y.count;for(let lt=z,ct=z+K;lt<ct;lt+=3)S(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const O=new nt,N=new nt,k=new nt,L=new nt;function V(A){k.fromBufferAttribute(l,A),L.copy(k);const P=d[A];O.copy(P),O.sub(k.multiplyScalar(k.dot(P))).normalize(),N.crossVectors(L,P);const z=N.dot(m[A])<0?-1:1;h.setXYZW(A,O.x,O.y,O.z,z)}for(let A=0,P=D.length;A<P;++A){const Y=D[A],z=Y.start,K=Y.count;for(let lt=z,ct=z+K;lt<ct;lt+=3)V(e.getX(lt+0)),V(e.getX(lt+1)),V(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Bi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,E=s.count;_<E;_++)s.setXYZ(_,0,0,0);const l=new nt,u=new nt,h=new nt,d=new nt,m=new nt,p=new nt,x=new nt,v=new nt;if(e)for(let _=0,E=e.count;_<E;_+=3){const R=e.getX(_+0),w=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),x.subVectors(h,u),v.subVectors(l,u),x.cross(v),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(x),m.add(x),p.add(x),s.setXYZ(R,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),x.subVectors(h,u),v.subVectors(l,u),x.cross(v),s.setXYZ(_+0,x.x,x.y,x.z),s.setXYZ(_+1,x.x,x.y,x.z),s.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,v=d.normalized,_=new p.constructor(m.length*x);let E=0,R=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?E=m[w]*d.data.stride+d.offset:E=m[w]*x;for(let S=0;S<x;S++)_[R++]=p[E++]}return new Bi(_,x,v)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new _a,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let x=0,v=p.length;x<v;x++){const _=p[x],E=e(_,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,_=p.length;v<_;v++){const E=p[v];x.push(E.toJSON(e.data))}x.length>0&&(l[m]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=e.morphAttributes;for(const p in u){const x=[],v=u[p];for(let _=0,E=v.length;_<E;_++)x.push(v[_].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,x=h.length;p<x;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mM=0;class Bc extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Rr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=wh,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){Jt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Jt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Dh&&(s.blendSrc=this.blendSrc),this.blendDst!==wh&&(s.blendDst=this.blendDst),this.blendEquation!==As&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const la=new nt,_h=new nt,uc=new nt,Qa=new nt,vh=new nt,fc=new nt,xh=new nt;class gM{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,la)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=la.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(la.copy(this.origin).addScaledVector(this.direction,i),la.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){_h.copy(e).add(i).multiplyScalar(.5),uc.copy(i).sub(e).normalize(),Qa.copy(this.origin).sub(_h);const u=e.distanceTo(i)*.5,h=-this.direction.dot(uc),d=Qa.dot(this.direction),m=-Qa.dot(uc),p=Qa.lengthSq(),x=Math.abs(1-h*h);let v,_,E,R;if(x>0)if(v=h*m-d,_=h*d-m,R=u*x,v>=0)if(_>=-R)if(_<=R){const w=1/x;v*=w,_*=w,E=v*(v+h*_+2*d)+_*(h*v+_+2*m)+p}else _=u,v=Math.max(0,-(h*_+d)),E=-v*v+_*(_+2*m)+p;else _=-u,v=Math.max(0,-(h*_+d)),E=-v*v+_*(_+2*m)+p;else _<=-R?(v=Math.max(0,-(-h*u+d)),_=v>0?-u:Math.min(Math.max(-u,-m),u),E=-v*v+_*(_+2*m)+p):_<=R?(v=0,_=Math.min(Math.max(-u,-m),u),E=_*(_+2*m)+p):(v=Math.max(0,-(h*u+d)),_=v>0?u:Math.min(Math.max(-u,-m),u),E=-v*v+_*(_+2*m)+p);else _=h>0?-u:u,v=Math.max(0,-(h*_+d)),E=-v*v+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(_h).addScaledVector(uc,_),E}intersectSphere(e,i){la.subVectors(e.center,this.origin);const s=la.dot(this.direction),l=la.dot(la)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),x>=0?(u=(e.min.y-_.y)*x,h=(e.max.y-_.y)*x):(u=(e.max.y-_.y)*x,h=(e.min.y-_.y)*x),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(d=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,la)!==null}intersectTriangle(e,i,s,l,u){vh.subVectors(i,e),fc.subVectors(s,e),xh.crossVectors(vh,fc);let h=this.direction.dot(xh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Qa.subVectors(this.origin,e);const m=d*this.direction.dot(fc.crossVectors(Qa,fc));if(m<0)return null;const p=d*this.direction.dot(vh.cross(Qa));if(p<0||m+p>h)return null;const x=-d*Qa.dot(xh);return x<0?null:this.at(x/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class X_ extends Bc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ls,this.combine=M_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const X0=new mn,ys=new gM,hc=new wd,k0=new nt,dc=new nt,pc=new nt,mc=new nt,Sh=new nt,gc=new nt,W0=new nt,_c=new nt;class ga extends ei{constructor(e=new _a,i=new X_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){gc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=d[m],v=u[m];x!==0&&(Sh.fromBufferAttribute(v,e),h?gc.addScaledVector(Sh,x):gc.addScaledVector(Sh.sub(i),x))}i.add(gc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hc.copy(s.boundingSphere),hc.applyMatrix4(u),ys.copy(e.ray).recast(e.near),!(hc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(hc,k0)===null||ys.origin.distanceToSquared(k0)>(e.far-e.near)**2))&&(X0.copy(u).invert(),ys.copy(e.ray).applyMatrix4(X0),!(s.boundingBox!==null&&ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ys)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,v=u.attributes.normal,_=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,w=_.length;R<w;R++){const M=_[R],S=h[M.materialIndex],D=Math.max(M.start,E.start),O=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let N=D,k=O;N<k;N+=3){const L=d.getX(N),V=d.getX(N+1),A=d.getX(N+2);l=vc(this,S,e,s,p,x,v,L,V,A),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),w=Math.min(d.count,E.start+E.count);for(let M=R,S=w;M<S;M+=3){const D=d.getX(M),O=d.getX(M+1),N=d.getX(M+2);l=vc(this,h,e,s,p,x,v,D,O,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,w=_.length;R<w;R++){const M=_[R],S=h[M.materialIndex],D=Math.max(M.start,E.start),O=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let N=D,k=O;N<k;N+=3){const L=N,V=N+1,A=N+2;l=vc(this,S,e,s,p,x,v,L,V,A),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let M=R,S=w;M<S;M+=3){const D=M,O=M+1,N=M+2;l=vc(this,h,e,s,p,x,v,D,O,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function _M(o,e,i,s,l,u,h,d){let m;if(e.side===Vn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===es,d),m===null)return null;_c.copy(d),_c.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(_c);return p<i.near||p>i.far?null:{distance:p,point:_c.clone(),object:o}}function vc(o,e,i,s,l,u,h,d,m,p){o.getVertexPosition(d,dc),o.getVertexPosition(m,pc),o.getVertexPosition(p,mc);const x=_M(o,e,i,s,dc,pc,mc,W0);if(x){const v=new nt;yi.getBarycoord(W0,dc,pc,mc,v),l&&(x.uv=yi.getInterpolatedAttribute(l,d,m,p,v,new He)),u&&(x.uv1=yi.getInterpolatedAttribute(u,d,m,p,v,new He)),h&&(x.normal=yi.getInterpolatedAttribute(h,d,m,p,v,new nt),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new nt,materialIndex:0};yi.getNormal(dc,pc,mc,_.normal),x.face=_,x.barycoord=v}return x}class vM extends Ln{constructor(e=null,i=1,s=1,l,u,h,d,m,p=An,x=An,v,_){super(null,h,d,m,p,x,l,u,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mh=new nt,xM=new nt,SM=new ie;class bs{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Mh.subVectors(s,i).cross(xM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Mh),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/u;return s===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||SM.getNormalMatrix(e),l=this.coplanarPoint(Mh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new wd,MM=new He(.5,.5),xc=new nt;class k_{constructor(e=new bs,i=new bs,s=new bs,l=new bs,u=new bs,h=new bs){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Oi,s=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],x=u[4],v=u[5],_=u[6],E=u[7],R=u[8],w=u[9],M=u[10],S=u[11],D=u[12],O=u[13],N=u[14],k=u[15];if(l[0].setComponents(p-h,E-x,S-R,k-D).normalize(),l[1].setComponents(p+h,E+x,S+R,k+D).normalize(),l[2].setComponents(p+d,E+v,S+w,k+O).normalize(),l[3].setComponents(p-d,E-v,S-w,k-O).normalize(),s)l[4].setComponents(m,_,M,N).normalize(),l[5].setComponents(p-m,E-_,S-M,k-N).normalize();else if(l[4].setComponents(p-m,E-_,S-M,k-N).normalize(),i===Oi)l[5].setComponents(p+m,E+_,S+M,k+N).normalize();else if(i===Oc)l[5].setComponents(m,_,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const i=MM.distanceTo(e.center);return Ts.radius=.7071067811865476+i,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(xc.x=l.normal.x>0?e.max.x:e.min.x,xc.y=l.normal.y>0?e.max.y:e.min.y,xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class W_ extends Ln{constructor(e=[],i=ws,s,l,u,h,d,m,p,x){super(e,i,s,l,u,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ur extends Ln{constructor(e,i,s=zi,l,u,h,d=An,m=An,p,x=ma,v=1){if(x!==ma&&x!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,l,u,h,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class EM extends Ur{constructor(e,i=zi,s=ws,l,u,h=An,d=An,m,p=ma){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,i,s,l,u,h,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class q_ extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ko extends _a{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],x=[],v=[];let _=0,E=0;R("z","y","x",-1,-1,s,i,e,h,u,0),R("z","y","x",1,-1,s,i,-e,h,u,1),R("x","z","y",1,1,e,s,i,l,h,2),R("x","z","y",1,-1,e,s,-i,l,h,3),R("x","y","z",1,-1,e,i,s,l,u,4),R("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new da(p,3)),this.setAttribute("normal",new da(x,3)),this.setAttribute("uv",new da(v,2));function R(w,M,S,D,O,N,k,L,V,A,P){const Y=N/V,z=k/A,K=N/2,lt=k/2,ct=L/2,W=V+1,U=A+1;let B=0,it=0;const pt=new nt;for(let vt=0;vt<U;vt++){const Ut=vt*z-lt;for(let Ct=0;Ct<W;Ct++){const Gt=Ct*Y-K;pt[w]=Gt*D,pt[M]=Ut*O,pt[S]=ct,p.push(pt.x,pt.y,pt.z),pt[w]=0,pt[M]=0,pt[S]=L>0?1:-1,x.push(pt.x,pt.y,pt.z),v.push(Ct/V),v.push(1-vt/A),B+=1}}for(let vt=0;vt<A;vt++)for(let Ut=0;Ut<V;Ut++){const Ct=_+Ut+W*vt,Gt=_+Ut+W*(vt+1),$t=_+(Ut+1)+W*(vt+1),Kt=_+(Ut+1)+W*vt;m.push(Ct,Gt,Kt),m.push(Gt,$t,Kt),it+=6}d.addGroup(E,it,P),E+=it,_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zc extends _a{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,v=e/d,_=i/m,E=[],R=[],w=[],M=[];for(let S=0;S<x;S++){const D=S*_-h;for(let O=0;O<p;O++){const N=O*v-u;R.push(N,-D,0),w.push(0,0,1),M.push(O/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let D=0;D<d;D++){const O=D+p*S,N=D+p*(S+1),k=D+1+p*(S+1),L=D+1+p*S;E.push(O,N,L),E.push(N,k,L)}this.setIndex(E),this.setAttribute("position",new da(R,3)),this.setAttribute("normal",new da(w,3)),this.setAttribute("uv",new da(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Lr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(q0(l))l.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(q0(l[0])){const u=[];for(let h=0,d=l.length;h<d;h++)u[h]=l[h].clone();e[i][s]=u}else e[i][s]=l.slice();else e[i][s]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const s=Lr(o[i]);for(const l in s)e[l]=s[l]}return e}function q0(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function yM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Y_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xe.workingColorSpace}const TM={clone:Lr,merge:On};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Bc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=AM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=yM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class RM extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CM extends Bc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DM extends Bc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Eh={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(Y0(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!Y0(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Y0(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class wM{constructor(e,i,s){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(x){d++,u===!1&&l.onStart!==void 0&&l.onStart(x,h,d),u=!0},this.itemEnd=function(x){h++,l.onProgress!==void 0&&l.onProgress(x,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,v){return p.push(x,v),this},this.removeHandler=function(x){const v=p.indexOf(x);return v!==-1&&p.splice(v,2),this},this.getHandler=function(x){for(let v=0,_=p.length;v<_;v+=2){const E=p[v],R=p[v+1];if(E.global&&(E.lastIndex=0),E.test(x))return R}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const UM=new wM;class Ud{constructor(e){this.manager=e!==void 0?e:UM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,u){s.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ud.DEFAULT_MATERIAL_NAME="__DEFAULT";const yr=new WeakMap;class LM extends Ud{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,h=Eh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)u.manager.itemStart(e),setTimeout(function(){i&&i(h),u.manager.itemEnd(e)},0);else{let v=yr.get(h);v===void 0&&(v=[],yr.set(h,v)),v.push({onLoad:i,onError:l})}return h}const d=Go("img");function m(){x(),i&&i(this);const v=yr.get(this)||[];for(let _=0;_<v.length;_++){const E=v[_];E.onLoad&&E.onLoad(this)}yr.delete(this),u.manager.itemEnd(e)}function p(v){x(),l&&l(v),Eh.remove(`image:${e}`);const _=yr.get(this)||[];for(let E=0;E<_.length;E++){const R=_[E];R.onError&&R.onError(v)}yr.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function x(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Eh.add(`image:${e}`,d),u.manager.itemStart(e),d.src=e,d}}class PA extends Ud{constructor(e){super(e)}load(e,i,s,l){const u=new Ln,h=new LM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},s,l),u}}const Sc=new nt,Mc=new Nr,wi=new nt;class Z_ extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sc,Mc,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,wi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Sc,Mc,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new nt,Z0=new He,K0=new He;class Ei extends Z_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=_d*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _d*2*Math.atan(Math.tan(Jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,Z0,K0),i.subVectors(K0,Z0)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Jf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class K_ extends Z_{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Tr=-90,br=1;class NM extends ei{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Tr,br,e,i);l.layers=this.layers,this.add(l);const u=new Ei(Tr,br,e,i);u.layers=this.layers,this.add(u);const h=new Ei(Tr,br,e,i);h.layers=this.layers,this.add(h);const d=new Ei(Tr,br,e,i);d.layers=this.layers,this.add(d);const m=new Ei(Tr,br,e,i);m.layers=this.layers,this.add(m);const p=new Ei(Tr,br,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Oi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,x]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(v,_,E),e.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class OM extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class FA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Jt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Fd=class Fd{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=s,u[3]=l,this}};Fd.prototype.isMatrix2=!0;let j0=Fd;function Q0(o,e,i,s){const l=PM(s);switch(i){case O_:return o*e;case F_:return o*e/l.components*l.byteLength;case Td:return o*e/l.components*l.byteLength;case Us:return o*e*2/l.components*l.byteLength;case bd:return o*e*2/l.components*l.byteLength;case P_:return o*e*3/l.components*l.byteLength;case Ti:return o*e*4/l.components*l.byteLength;case Ad:return o*e*4/l.components*l.byteLength;case bc:case Ac:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gh:case Xh:return Math.max(o,16)*Math.max(e,8)/4;case Hh:case Vh:return Math.max(o,8)*Math.max(e,8)/2;case kh:case Wh:case Yh:case Zh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case qh:case wc:case Kh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ed:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case nd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case id:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case sd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case rd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case od:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case ld:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case cd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case ud:case fd:case hd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case dd:case pd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Uc:case md:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function PM(o){switch(o){case di:case w_:return{byteLength:1,components:1};case Io:case U_:case pa:return{byteLength:2,components:1};case Ed:case yd:return{byteLength:2,components:4};case zi:case Md:case Ni:return{byteLength:4,components:1};case L_:case N_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sd}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sd);function j_(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function FM(o){const e=new WeakMap;function i(d,m){const p=d.array,x=d.usage,v=p.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,p,x),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const x=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,x);else{v.sort((E,R)=>E.start-R.start);let _=0;for(let E=1;E<v.length;E++){const R=v[_],w=v[E];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++_,v[_]=w)}v.length=_+1;for(let E=0,R=v.length;E<R;E++){const w=v[E];o.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var BM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,IM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,iE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dE="gl_FragColor = linearToOutputTexel( gl_FragColor );",pE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ME=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,DE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,HE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ny=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ry=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,my=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,My=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ey=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ty=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,by=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ay=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ly=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const By=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ky=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:BM,alphahash_pars_fragment:zM,alphamap_fragment:IM,alphamap_pars_fragment:HM,alphatest_fragment:GM,alphatest_pars_fragment:VM,aomap_fragment:XM,aomap_pars_fragment:kM,batching_pars_vertex:WM,batching_vertex:qM,begin_vertex:YM,beginnormal_vertex:ZM,bsdfs:KM,iridescence_fragment:jM,bumpmap_pars_fragment:QM,clipping_planes_fragment:JM,clipping_planes_pars_fragment:$M,clipping_planes_pars_vertex:tE,clipping_planes_vertex:eE,color_fragment:nE,color_pars_fragment:iE,color_pars_vertex:aE,color_vertex:sE,common:rE,cube_uv_reflection_fragment:oE,defaultnormal_vertex:lE,displacementmap_pars_vertex:cE,displacementmap_vertex:uE,emissivemap_fragment:fE,emissivemap_pars_fragment:hE,colorspace_fragment:dE,colorspace_pars_fragment:pE,envmap_fragment:mE,envmap_common_pars_fragment:gE,envmap_pars_fragment:_E,envmap_pars_vertex:vE,envmap_physical_pars_fragment:DE,envmap_vertex:xE,fog_vertex:SE,fog_pars_vertex:ME,fog_fragment:EE,fog_pars_fragment:yE,gradientmap_pars_fragment:TE,lightmap_pars_fragment:bE,lights_lambert_fragment:AE,lights_lambert_pars_fragment:RE,lights_pars_begin:CE,lights_toon_fragment:wE,lights_toon_pars_fragment:UE,lights_phong_fragment:LE,lights_phong_pars_fragment:NE,lights_physical_fragment:OE,lights_physical_pars_fragment:PE,lights_fragment_begin:FE,lights_fragment_maps:BE,lights_fragment_end:zE,lightprobes_pars_fragment:IE,logdepthbuf_fragment:HE,logdepthbuf_pars_fragment:GE,logdepthbuf_pars_vertex:VE,logdepthbuf_vertex:XE,map_fragment:kE,map_pars_fragment:WE,map_particle_fragment:qE,map_particle_pars_fragment:YE,metalnessmap_fragment:ZE,metalnessmap_pars_fragment:KE,morphinstance_vertex:jE,morphcolor_vertex:QE,morphnormal_vertex:JE,morphtarget_pars_vertex:$E,morphtarget_vertex:ty,normal_fragment_begin:ey,normal_fragment_maps:ny,normal_pars_fragment:iy,normal_pars_vertex:ay,normal_vertex:sy,normalmap_pars_fragment:ry,clearcoat_normal_fragment_begin:oy,clearcoat_normal_fragment_maps:ly,clearcoat_pars_fragment:cy,iridescence_pars_fragment:uy,opaque_fragment:fy,packing:hy,premultiplied_alpha_fragment:dy,project_vertex:py,dithering_fragment:my,dithering_pars_fragment:gy,roughnessmap_fragment:_y,roughnessmap_pars_fragment:vy,shadowmap_pars_fragment:xy,shadowmap_pars_vertex:Sy,shadowmap_vertex:My,shadowmask_pars_fragment:Ey,skinbase_vertex:yy,skinning_pars_vertex:Ty,skinning_vertex:by,skinnormal_vertex:Ay,specularmap_fragment:Ry,specularmap_pars_fragment:Cy,tonemapping_fragment:Dy,tonemapping_pars_fragment:wy,transmission_fragment:Uy,transmission_pars_fragment:Ly,uv_pars_fragment:Ny,uv_pars_vertex:Oy,uv_vertex:Py,worldpos_vertex:Fy,background_vert:By,background_frag:zy,backgroundCube_vert:Iy,backgroundCube_frag:Hy,cube_vert:Gy,cube_frag:Vy,depth_vert:Xy,depth_frag:ky,distance_vert:Wy,distance_frag:qy,equirect_vert:Yy,equirect_frag:Zy,linedashed_vert:Ky,linedashed_frag:jy,meshbasic_vert:Qy,meshbasic_frag:Jy,meshlambert_vert:$y,meshlambert_frag:tT,meshmatcap_vert:eT,meshmatcap_frag:nT,meshnormal_vert:iT,meshnormal_frag:aT,meshphong_vert:sT,meshphong_frag:rT,meshphysical_vert:oT,meshphysical_frag:lT,meshtoon_vert:cT,meshtoon_frag:uT,points_vert:fT,points_frag:hT,shadow_vert:dT,shadow_frag:pT,sprite_vert:mT,sprite_frag:gT},Pt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new nt},probesMax:{value:new nt},probesResolution:{value:new nt}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Li={basic:{uniforms:On([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:On([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:On([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:On([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:On([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:On([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:On([Pt.points,Pt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:On([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:On([Pt.common,Pt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:On([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:On([Pt.sprite,Pt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:On([Pt.common,Pt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:On([Pt.lights,Pt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Li.physical={uniforms:On([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const Ec={r:0,b:0,g:0},_T=new mn,Q_=new ie;Q_.set(-1,0,0,0,1,0,0,0,1);function vT(o,e,i,s,l,u){const h=new Ie(0);let d=l===!0?0:1,m,p,x=null,v=0,_=null;function E(D){let O=D.isScene===!0?D.background:null;if(O&&O.isTexture){const N=D.backgroundBlurriness>0;O=e.get(O,N)}return O}function R(D){let O=!1;const N=E(D);N===null?M(h,d):N&&N.isColor&&(M(N,1),O=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(D,O){const N=E(O);N&&(N.isCubeTexture||N.mapping===Fc)?(p===void 0&&(p=new ga(new ko(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Lr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,L,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(_T.makeRotationFromEuler(O.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Q_),p.material.toneMapped=xe.getTransfer(N.colorSpace)!==Oe,(x!==N||v!==N.version||_!==o.toneMapping)&&(p.material.needsUpdate=!0,x=N,v=N.version,_=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new ga(new zc(2,2),new Ii({name:"BackgroundMaterial",uniforms:Lr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=xe.getTransfer(N.colorSpace)!==Oe,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||v!==N.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,x=N,v=N.version,_=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,O){D.getRGB(Ec,Y_(o)),i.buffers.color.setClear(Ec.r,Ec.g,Ec.b,O,u)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,O=1){h.set(D),d=O,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,M(h,d)},render:R,addToRenderList:w,dispose:S}}function xT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,h=!1;function d(z,K,lt,ct,W){let U=!1;const B=v(z,ct,lt,K);u!==B&&(u=B,p(u.object)),U=E(z,ct,lt,W),U&&R(z,ct,lt,W),W!==null&&e.update(W,o.ELEMENT_ARRAY_BUFFER),(U||h)&&(h=!1,N(z,K,lt,ct),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function m(){return o.createVertexArray()}function p(z){return o.bindVertexArray(z)}function x(z){return o.deleteVertexArray(z)}function v(z,K,lt,ct){const W=ct.wireframe===!0;let U=s[K.id];U===void 0&&(U={},s[K.id]=U);const B=z.isInstancedMesh===!0?z.id:0;let it=U[B];it===void 0&&(it={},U[B]=it);let pt=it[lt.id];pt===void 0&&(pt={},it[lt.id]=pt);let vt=pt[W];return vt===void 0&&(vt=_(m()),pt[W]=vt),vt}function _(z){const K=[],lt=[],ct=[];for(let W=0;W<i;W++)K[W]=0,lt[W]=0,ct[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:lt,attributeDivisors:ct,object:z,attributes:{},index:null}}function E(z,K,lt,ct){const W=u.attributes,U=K.attributes;let B=0;const it=lt.getAttributes();for(const pt in it)if(it[pt].location>=0){const Ut=W[pt];let Ct=U[pt];if(Ct===void 0&&(pt==="instanceMatrix"&&z.instanceMatrix&&(Ct=z.instanceMatrix),pt==="instanceColor"&&z.instanceColor&&(Ct=z.instanceColor)),Ut===void 0||Ut.attribute!==Ct||Ct&&Ut.data!==Ct.data)return!0;B++}return u.attributesNum!==B||u.index!==ct}function R(z,K,lt,ct){const W={},U=K.attributes;let B=0;const it=lt.getAttributes();for(const pt in it)if(it[pt].location>=0){let Ut=U[pt];Ut===void 0&&(pt==="instanceMatrix"&&z.instanceMatrix&&(Ut=z.instanceMatrix),pt==="instanceColor"&&z.instanceColor&&(Ut=z.instanceColor));const Ct={};Ct.attribute=Ut,Ut&&Ut.data&&(Ct.data=Ut.data),W[pt]=Ct,B++}u.attributes=W,u.attributesNum=B,u.index=ct}function w(){const z=u.newAttributes;for(let K=0,lt=z.length;K<lt;K++)z[K]=0}function M(z){S(z,0)}function S(z,K){const lt=u.newAttributes,ct=u.enabledAttributes,W=u.attributeDivisors;lt[z]=1,ct[z]===0&&(o.enableVertexAttribArray(z),ct[z]=1),W[z]!==K&&(o.vertexAttribDivisor(z,K),W[z]=K)}function D(){const z=u.newAttributes,K=u.enabledAttributes;for(let lt=0,ct=K.length;lt<ct;lt++)K[lt]!==z[lt]&&(o.disableVertexAttribArray(lt),K[lt]=0)}function O(z,K,lt,ct,W,U,B){B===!0?o.vertexAttribIPointer(z,K,lt,W,U):o.vertexAttribPointer(z,K,lt,ct,W,U)}function N(z,K,lt,ct){w();const W=ct.attributes,U=lt.getAttributes(),B=K.defaultAttributeValues;for(const it in U){const pt=U[it];if(pt.location>=0){let vt=W[it];if(vt===void 0&&(it==="instanceMatrix"&&z.instanceMatrix&&(vt=z.instanceMatrix),it==="instanceColor"&&z.instanceColor&&(vt=z.instanceColor)),vt!==void 0){const Ut=vt.normalized,Ct=vt.itemSize,Gt=e.get(vt);if(Gt===void 0)continue;const $t=Gt.buffer,Kt=Gt.type,ft=Gt.bytesPerElement,Lt=Kt===o.INT||Kt===o.UNSIGNED_INT||vt.gpuType===Md;if(vt.isInterleavedBufferAttribute){const Mt=vt.data,Wt=Mt.stride,te=vt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<pt.locationSize;Zt++)S(pt.location+Zt,Mt.meshPerAttribute);z.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Zt=0;Zt<pt.locationSize;Zt++)M(pt.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,$t);for(let Zt=0;Zt<pt.locationSize;Zt++)O(pt.location+Zt,Ct/pt.locationSize,Kt,Ut,Wt*ft,(te+Ct/pt.locationSize*Zt)*ft,Lt)}else{if(vt.isInstancedBufferAttribute){for(let Mt=0;Mt<pt.locationSize;Mt++)S(pt.location+Mt,vt.meshPerAttribute);z.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Mt=0;Mt<pt.locationSize;Mt++)M(pt.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,$t);for(let Mt=0;Mt<pt.locationSize;Mt++)O(pt.location+Mt,Ct/pt.locationSize,Kt,Ut,Ct*ft,Ct/pt.locationSize*Mt*ft,Lt)}}else if(B!==void 0){const Ut=B[it];if(Ut!==void 0)switch(Ut.length){case 2:o.vertexAttrib2fv(pt.location,Ut);break;case 3:o.vertexAttrib3fv(pt.location,Ut);break;case 4:o.vertexAttrib4fv(pt.location,Ut);break;default:o.vertexAttrib1fv(pt.location,Ut)}}}}D()}function k(){P();for(const z in s){const K=s[z];for(const lt in K){const ct=K[lt];for(const W in ct){const U=ct[W];for(const B in U)x(U[B].object),delete U[B];delete ct[W]}}delete s[z]}}function L(z){if(s[z.id]===void 0)return;const K=s[z.id];for(const lt in K){const ct=K[lt];for(const W in ct){const U=ct[W];for(const B in U)x(U[B].object),delete U[B];delete ct[W]}}delete s[z.id]}function V(z){for(const K in s){const lt=s[K];for(const ct in lt){const W=lt[ct];if(W[z.id]===void 0)continue;const U=W[z.id];for(const B in U)x(U[B].object),delete U[B];delete W[z.id]}}}function A(z){for(const K in s){const lt=s[K],ct=z.isInstancedMesh===!0?z.id:0,W=lt[ct];if(W!==void 0){for(const U in W){const B=W[U];for(const it in B)x(B[it].object),delete B[it];delete W[U]}delete lt[ct],Object.keys(lt).length===0&&delete s[K]}}}function P(){Y(),h=!0,u!==l&&(u=l,p(u.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:P,resetDefaultState:Y,dispose:k,releaseStatesOfGeometry:L,releaseStatesOfObject:A,releaseStatesOfProgram:V,initAttributes:w,enableAttribute:M,disableUnusedAttributes:D}}function ST(o,e,i){let s;function l(m){s=m}function u(m,p){o.drawArrays(s,m,p),i.update(p,s,1)}function h(m,p,x){x!==0&&(o.drawArraysInstanced(s,m,p,x),i.update(p,s,x))}function d(m,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,x);let _=0;for(let E=0;E<x;E++)_+=p[E];i.update(_,s,1)}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function MT(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(V){return!(V!==Ti&&s.convert(V)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const A=V===pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==di&&s.convert(V)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Ni&&!A)}function m(V){if(V==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(Jt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:D,maxVaryings:O,maxFragmentUniforms:N,maxSamples:k,samples:L}}function ET(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new bs,d=new ie,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const E=v.length!==0||_||s!==0||l;return l=_,s=v.length,E},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){i=x(v,_,0)},this.setState=function(v,_,E){const R=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,S=o.get(v);if(!l||R===null||R.length===0||u&&!M)u?x(null):p();else{const D=u?0:s,O=D*4;let N=S.clippingState||null;m.value=N,N=x(R,_,O,E);for(let k=0;k!==O;++k)N[k]=i[k];S.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(v,_,E,R){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,R!==!0||M===null){const S=E+w*4,D=_.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<S)&&(M=new Float32Array(S));for(let O=0,N=E;O!==w;++O,N+=4)h.copy(v[O]).applyMatrix4(D,d),h.normal.toArray(M,N),M[N+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const ts=4,J0=[.125,.215,.35,.446,.526,.582],Rs=20,yT=256,Po=new K_,$0=new Ie;let yh=null,Th=0,bh=0,Ah=!1;const TT=new nt;class t_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=TT}=u;yh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,Th,bh),this._renderer.xr.enabled=Ah,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ws||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:pa,format:Ti,colorSpace:Lc,depthBuffer:!1},l=e_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bT(u)),this._blurMaterial=RT(u,e,i),this._ggxMaterial=AT(u,e,i)}return l}_compileMaterial(e){const i=new ga(new _a,e);this._renderer.compile(i,Po)}_sceneToCubeUV(e,i,s,l,u){const m=new Ei(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,E=v.toneMapping;v.getClearColor($0),v.toneMapping=Pi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ga(new ko,new X_({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,S=!0):(M.color.copy($0),S=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[O],u.y,u.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[O]));const k=this._cubeSize;Ar(l,N*k,O>2?k:0,k,k),v.setRenderTarget(l),S&&v.render(w,m),v.render(e,m)}v.toneMapping=E,v.autoClear=_,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ws||e.mapping===wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Ar(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Po)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-x*x),_=0+p*1.25,E=v*_,{_lodMax:R}=this,w=this._sizeLods[s],M=3*w*(s>R-ts?s-R+ts:0),S=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=R-i,Ar(u,M,S,3*w,2*w),l.setRenderTarget(u),l.render(d,Po),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=R-s,Ar(e,M,S,3*w,2*w),l.setRenderTarget(e),l.render(d,Po)}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Me("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=p;const _=p.uniforms,E=this._sizeLods[s]-1,R=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Rs-1),w=u/R,M=isFinite(u)?1+Math.floor(x*w):Rs;M>Rs&&Jt(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Rs}`);const S=[];let D=0;for(let V=0;V<Rs;++V){const A=V/w,P=Math.exp(-A*A/2);S.push(P),V===0?D+=P:V<M&&(D+=2*P)}for(let V=0;V<S.length;V++)S[V]=S[V]/D;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=S,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:O}=this;_.dTheta.value=R,_.mipInt.value=O-s;const N=this._sizeLods[l],k=3*N*(l>O-ts?l-O+ts:0),L=4*(this._cubeSize-N);Ar(i,k,L,3*N,2*N),m.setRenderTarget(i),m.render(v,Po)}}function bT(o){const e=[],i=[],s=[];let l=o;const u=o-ts+1+J0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-ts?m=J0[h-o+ts-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),x=-p,v=1+p,_=[x,x,v,x,v,v,x,x,v,v,x,v],E=6,R=6,w=3,M=2,S=1,D=new Float32Array(w*R*E),O=new Float32Array(M*R*E),N=new Float32Array(S*R*E);for(let L=0;L<E;L++){const V=L%3*2/3-1,A=L>2?0:-1,P=[V,A,0,V+2/3,A,0,V+2/3,A+1,0,V,A,0,V+2/3,A+1,0,V,A+1,0];D.set(P,w*R*L),O.set(_,M*R*L);const Y=[L,L,L,L,L,L];N.set(Y,S*R*L)}const k=new _a;k.setAttribute("position",new Bi(D,w)),k.setAttribute("uv",new Bi(O,M)),k.setAttribute("faceIndex",new Bi(N,S)),s.push(new ga(k,null)),l>ts&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function e_(o,e,i){const s=new Fi(o,e,i);return s.texture.mapping=Fc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ar(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function AT(o,e,i){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function RT(o,e,i){const s=new Float32Array(Rs),l=new nt(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function n_(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function i_(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function Ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class J_ extends Fi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new W_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ko(5,5,5),u=new Ii({name:"CubemapFromEquirect",uniforms:Lr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:fa});u.uniforms.tEquirect.value=i;const h=new ga(l,u),d=i.minFilter;return i.minFilter===Cs&&(i.minFilter=Un),new NM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}function CT(o){let e=new WeakMap,i=new WeakMap,s=null;function l(_,E=!1){return _==null?null:E?h(_):u(_)}function u(_){if(_&&_.isTexture){const E=_.mapping;if(E===Kf||E===jf)if(e.has(_)){const R=e.get(_).texture;return d(R,_.mapping)}else{const R=_.image;if(R&&R.height>0){const w=new J_(R.height);return w.fromEquirectangularTexture(o,_),e.set(_,w),_.addEventListener("dispose",p),d(w.texture,_.mapping)}else return null}}return _}function h(_){if(_&&_.isTexture){const E=_.mapping,R=E===Kf||E===jf,w=E===ws||E===wr;if(R||w){let M=i.get(_);const S=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return s===null&&(s=new t_(o)),M=R?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const D=_.image;return R&&D&&D.height>0||w&&D&&m(D)?(s===null&&(s=new t_(o)),M=R?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",x),M.texture):null}}}return _}function d(_,E){return E===Kf?_.mapping=ws:E===jf&&(_.mapping=wr),_}function m(_){let E=0;const R=6;for(let w=0;w<R;w++)_[w]!==void 0&&E++;return E===R}function p(_){const E=_.target;E.removeEventListener("dispose",p);const R=e.get(E);R!==void 0&&(e.delete(E),R.dispose())}function x(_){const E=_.target;E.removeEventListener("dispose",x);const R=i.get(E);R!==void 0&&(i.delete(E),R.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function DT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&gd("WebGLRenderer: "+s+" extension not supported."),l}}}function wT(o,e,i,s){const l={},u=new WeakMap;function h(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const R in _.attributes)e.remove(_.attributes[R]);_.removeEventListener("dispose",h),delete l[_.id];const E=u.get(_);E&&(e.remove(E),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(v,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const E in _)e.update(_[E],o.ARRAY_BUFFER)}function p(v){const _=[],E=v.index,R=v.attributes.position;let w=0;if(R===void 0)return;if(E!==null){const D=E.array;w=E.version;for(let O=0,N=D.length;O<N;O+=3){const k=D[O+0],L=D[O+1],V=D[O+2];_.push(k,L,L,V,V,k)}}else{const D=R.array;w=R.version;for(let O=0,N=D.length/3-1;O<N;O+=3){const k=O+0,L=O+1,V=O+2;_.push(k,L,L,V,V,k)}}const M=new(R.count>=65535?V_:G_)(_,1);M.version=w;const S=u.get(v);S&&e.remove(S),u.set(v,M)}function x(v){const _=u.get(v);if(_){const E=v.index;E!==null&&_.version<E.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:x}}function UT(o,e,i){let s;function l(v){s=v}let u,h;function d(v){u=v.type,h=v.bytesPerElement}function m(v,_){o.drawElements(s,_,u,v*h),i.update(_,s,1)}function p(v,_,E){E!==0&&(o.drawElementsInstanced(s,_,u,v*h,E),i.update(_,s,E))}function x(v,_,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,u,v,0,E);let w=0;for(let M=0;M<E;M++)w+=_[M];i.update(w,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function LT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:Me("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function NT(o,e,i){const s=new WeakMap,l=new rn;function u(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let _=s.get(d);if(_===void 0||_.count!==v){let P=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let O=0;E===!0&&(O=1),R===!0&&(O=2),w===!0&&(O=3);let N=d.attributes.position.count*O,k=1;N>e.maxTextureSize&&(k=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const L=new Float32Array(N*k*4*v),V=new z_(L,N,k,v);V.type=Ni,V.needsUpdate=!0;const A=O*4;for(let Y=0;Y<v;Y++){const z=M[Y],K=S[Y],lt=D[Y],ct=N*k*4*Y;for(let W=0;W<z.count;W++){const U=W*A;E===!0&&(l.fromBufferAttribute(z,W),L[ct+U+0]=l.x,L[ct+U+1]=l.y,L[ct+U+2]=l.z,L[ct+U+3]=0),R===!0&&(l.fromBufferAttribute(K,W),L[ct+U+4]=l.x,L[ct+U+5]=l.y,L[ct+U+6]=l.z,L[ct+U+7]=0),w===!0&&(l.fromBufferAttribute(lt,W),L[ct+U+8]=l.x,L[ct+U+9]=l.y,L[ct+U+10]=l.z,L[ct+U+11]=lt.itemSize===4?l.w:1)}}_={count:v,texture:V,size:new He(N,k)},s.set(d,_),d.addEventListener("dispose",P)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let w=0;w<p.length;w++)E+=p[w];const R=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function OT(o,e,i,s,l){let u=new WeakMap;function h(p){const x=l.render.frame,v=p.geometry,_=e.get(p,v);if(u.get(_)!==x&&(e.update(_),u.set(_,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),u.get(p)!==x&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),u.set(p,x))),p.isSkinnedMesh){const E=p.skeleton;u.get(E)!==x&&(E.update(),u.set(E,x))}return _}function d(){u=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:h,dispose:d}}const PT={[E_]:"LINEAR_TONE_MAPPING",[y_]:"REINHARD_TONE_MAPPING",[T_]:"CINEON_TONE_MAPPING",[b_]:"ACES_FILMIC_TONE_MAPPING",[R_]:"AGX_TONE_MAPPING",[C_]:"NEUTRAL_TONE_MAPPING",[A_]:"CUSTOM_TONE_MAPPING"};function FT(o,e,i,s,l){const u=new Fi(e,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Ur(e,i):void 0}),h=new Fi(e,i,{type:pa,depthBuffer:!1,stencilBuffer:!1}),d=new _a;d.setAttribute("position",new da([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new da([0,2,0,0,2,0],2));const m=new RM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ga(d,m),x=new K_(-1,1,1,-1,0,1);let v=null,_=null,E=!1,R,w=null,M=[],S=!1;this.setSize=function(D,O){u.setSize(D,O),h.setSize(D,O);for(let N=0;N<M.length;N++){const k=M[N];k.setSize&&k.setSize(D,O)}},this.setEffects=function(D){M=D,S=M.length>0&&M[0].isRenderPass===!0;const O=u.width,N=u.height;for(let k=0;k<M.length;k++){const L=M[k];L.setSize&&L.setSize(O,N)}},this.begin=function(D,O){if(E||D.toneMapping===Pi&&M.length===0)return!1;if(w=O,O!==null){const N=O.width,k=O.height;(u.width!==N||u.height!==k)&&this.setSize(N,k)}return S===!1&&D.setRenderTarget(u),R=D.toneMapping,D.toneMapping=Pi,!0},this.hasRenderPass=function(){return S},this.end=function(D,O){D.toneMapping=R,E=!0;let N=u,k=h;for(let L=0;L<M.length;L++){const V=M[L];if(V.enabled!==!1&&(V.render(D,k,N,O),V.needsSwap!==!1)){const A=N;N=k,k=A}}if(v!==D.outputColorSpace||_!==D.toneMapping){v=D.outputColorSpace,_=D.toneMapping,m.defines={},xe.getTransfer(v)===Oe&&(m.defines.SRGB_TRANSFER="");const L=PT[_];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(w),D.render(p,x),w=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const $_=new Ln,vd=new Ur(1,1),tv=new z_,ev=new aM,nv=new W_,a_=[],s_=[],r_=new Float32Array(16),o_=new Float32Array(9),l_=new Float32Array(4);function Or(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=a_[l];if(u===void 0&&(u=new Float32Array(l),a_[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Hc(o,e){let i=s_[e];i===void 0&&(i=new Int32Array(e),s_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function BT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function zT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function GT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;l_.set(s),o.uniformMatrix2fv(this.addr,!1,l_),_n(i,s)}}function VT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;o_.set(s),o.uniformMatrix3fv(this.addr,!1,o_),_n(i,s)}}function XT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;r_.set(s),o.uniformMatrix4fv(this.addr,!1,r_),_n(i,s)}}function kT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function ZT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function KT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function QT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function JT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(vd.compareFunction=i.isReversedDepthBuffer()?Cd:Rd,u=vd):u=$_,i.setTexture2D(e||u,l)}function $T(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||ev,l)}function tb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||nv,l)}function eb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||tv,l)}function nb(o){switch(o){case 5126:return BT;case 35664:return zT;case 35665:return IT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return XT;case 5124:case 35670:return kT;case 35667:case 35671:return WT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return ZT;case 36294:return KT;case 36295:return jT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return eb}}function ib(o,e){o.uniform1fv(this.addr,e)}function ab(o,e){const i=Or(e,this.size,2);o.uniform2fv(this.addr,i)}function sb(o,e){const i=Or(e,this.size,3);o.uniform3fv(this.addr,i)}function rb(o,e){const i=Or(e,this.size,4);o.uniform4fv(this.addr,i)}function ob(o,e){const i=Or(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function lb(o,e){const i=Or(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function cb(o,e){const i=Or(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ub(o,e){o.uniform1iv(this.addr,e)}function fb(o,e){o.uniform2iv(this.addr,e)}function hb(o,e){o.uniform3iv(this.addr,e)}function db(o,e){o.uniform4iv(this.addr,e)}function pb(o,e){o.uniform1uiv(this.addr,e)}function mb(o,e){o.uniform2uiv(this.addr,e)}function gb(o,e){o.uniform3uiv(this.addr,e)}function _b(o,e){o.uniform4uiv(this.addr,e)}function vb(o,e,i){const s=this.cache,l=e.length,u=Hc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=vd:h=$_;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,u[d])}function xb(o,e,i){const s=this.cache,l=e.length,u=Hc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||ev,u[h])}function Sb(o,e,i){const s=this.cache,l=e.length,u=Hc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||nv,u[h])}function Mb(o,e,i){const s=this.cache,l=e.length,u=Hc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||tv,u[h])}function Eb(o){switch(o){case 5126:return ib;case 35664:return ab;case 35665:return sb;case 35666:return rb;case 35674:return ob;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return fb;case 35668:case 35672:return hb;case 35669:case 35673:return db;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Mb}}class yb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=nb(i.type)}}class Tb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Eb(i.type)}}class bb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Rh=/(\w+)(\])?(\[|\.)?/g;function c_(o,e){o.seq.push(e),o.map[e.id]=e}function Ab(o,e,i){const s=o.name,l=s.length;for(Rh.lastIndex=0;;){const u=Rh.exec(s),h=Rh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){c_(i,p===void 0?new yb(d,o,e):new Tb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new bb(d),c_(i,v)),i=v}}}class Dc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);Ab(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function u_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Rb=37297;let Cb=0;function Db(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const f_=new ie;function wb(o){xe._getMatrix(f_,xe.workingColorSpace,o);const e=`mat3( ${f_.elements.map(i=>i.toFixed(4))} )`;switch(xe.getTransfer(o)){case Nc:return[e,"LinearTransferOETF"];case Oe:return[e,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function h_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+Db(o.getShaderSource(e),d)}else return u}function Ub(o,e){const i=wb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Lb={[E_]:"Linear",[y_]:"Reinhard",[T_]:"Cineon",[b_]:"ACESFilmic",[R_]:"AgX",[C_]:"Neutral",[A_]:"Custom"};function Nb(o,e){const i=Lb[e];return i===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const yc=new nt;function Ob(){xe.getLuminanceCoefficients(yc);const o=yc.x.toFixed(4),e=yc.y.toFixed(4),i=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function Fb(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Bb(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function zo(o){return o!==""}function d_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(o){return o.replace(zb,Hb)}const Ib=new Map;function Hb(o,e){let i=le[e];if(i===void 0){const s=Ib.get(e);if(s!==void 0)i=le[s],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return xd(i)}const Gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(o){return o.replace(Gb,Vb)}function Vb(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function g_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Xb={[Tc]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function kb(o){return Xb[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Wb={[ws]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[Fc]:"ENVMAP_TYPE_CUBE_UV"};function qb(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":Wb[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Yb={[wr]:"ENVMAP_MODE_REFRACTION"};function Zb(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Yb[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Kb={[M_]:"ENVMAP_BLENDING_MULTIPLY",[BS]:"ENVMAP_BLENDING_MIX",[zS]:"ENVMAP_BLENDING_ADD"};function jb(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Kb[o.combine]||"ENVMAP_BLENDING_NONE"}function Qb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Jb(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=kb(i),p=qb(i),x=Zb(i),v=jb(i),_=Qb(i),E=Pb(i),R=Fb(u),w=l.createProgram();let M,S,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(zo).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(zo).join(`
`),S.length>0&&(S+=`
`)):(M=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),S=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Pi?"#define TONE_MAPPING":"",i.toneMapping!==Pi?le.tonemapping_pars_fragment:"",i.toneMapping!==Pi?Nb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,Ub("linearToOutputTexel",i.outputColorSpace),Ob(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zo).join(`
`)),h=xd(h),h=d_(h,i),h=p_(h,i),d=xd(d),d=d_(d,i),d=p_(d,i),h=m_(h),d=m_(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===D0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=D+M+h,N=D+S+d,k=u_(l,l.VERTEX_SHADER,O),L=u_(l,l.FRAGMENT_SHADER,N);l.attachShader(w,k),l.attachShader(w,L),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function V(z){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(w)||"",lt=l.getShaderInfoLog(k)||"",ct=l.getShaderInfoLog(L)||"",W=K.trim(),U=lt.trim(),B=ct.trim();let it=!0,pt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,k,L);else{const vt=h_(l,k,"vertex"),Ut=h_(l,L,"fragment");Me("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+W+`
`+vt+`
`+Ut)}else W!==""?Jt("WebGLProgram: Program Info Log:",W):(U===""||B==="")&&(pt=!1);pt&&(z.diagnostics={runnable:it,programLog:W,vertexShader:{log:U,prefix:M},fragmentShader:{log:B,prefix:S}})}l.deleteShader(k),l.deleteShader(L),A=new Dc(l,w),P=Bb(l,w)}let A;this.getUniforms=function(){return A===void 0&&V(this),A};let P;this.getAttributes=function(){return P===void 0&&V(this),P};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(w,Rb)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=L,this}let $b=0;class tA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new eA(e),i.set(e,s)),s}}class eA{constructor(e){this.id=$b++,this.code=e,this.usedTimes=0}}function nA(o){return o===Us||o===wc||o===Uc}function iA(o,e,i,s,l,u){const h=new I_,d=new tA,m=new Set,p=[],x=new Map,v=s.logarithmicDepthBuffer;let _=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(A){return m.add(A),A===0?"uv":`uv${A}`}function w(A,P,Y,z,K,lt){const ct=z.fog,W=K.geometry,U=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,B=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,it=e.get(A.envMap||U,B),pt=it&&it.mapping===Fc?it.image.height:null,vt=E[A.type];A.precision!==null&&(_=s.getMaxPrecision(A.precision),_!==A.precision&&Jt("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const Ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ct=Ut!==void 0?Ut.length:0;let Gt=0;W.morphAttributes.position!==void 0&&(Gt=1),W.morphAttributes.normal!==void 0&&(Gt=2),W.morphAttributes.color!==void 0&&(Gt=3);let $t,Kt,ft,Lt;if(vt){const Qt=Li[vt];$t=Qt.vertexShader,Kt=Qt.fragmentShader}else $t=A.vertexShader,Kt=A.fragmentShader,d.update(A),ft=d.getVertexShaderID(A),Lt=d.getFragmentShaderID(A);const Mt=o.getRenderTarget(),Wt=o.state.buffers.depth.getReversed(),te=K.isInstancedMesh===!0,Zt=K.isBatchedMesh===!0,Ge=!!A.map,ce=!!A.matcap,me=!!it,Ce=!!A.aoMap,re=!!A.lightMap,en=!!A.bumpMap,ke=!!A.normalMap,Sn=!!A.displacementMap,G=!!A.emissiveMap,Qe=!!A.metalnessMap,ue=!!A.roughnessMap,Pe=A.anisotropy>0,St=A.clearcoat>0,Ye=A.dispersion>0,C=A.iridescence>0,y=A.sheen>0,Z=A.transmission>0,dt=Pe&&!!A.anisotropyMap,_t=St&&!!A.clearcoatMap,Et=St&&!!A.clearcoatNormalMap,At=St&&!!A.clearcoatRoughnessMap,st=C&&!!A.iridescenceMap,rt=C&&!!A.iridescenceThicknessMap,Rt=y&&!!A.sheenColorMap,Dt=y&&!!A.sheenRoughnessMap,Tt=!!A.specularMap,yt=!!A.specularColorMap,ee=!!A.specularIntensityMap,ne=Z&&!!A.transmissionMap,fe=Z&&!!A.thicknessMap,I=!!A.gradientMap,xt=!!A.alphaMap,ut=A.alphaTest>0,Ot=!!A.alphaHash,bt=!!A.extensions;let gt=Pi;A.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(gt=o.toneMapping);const Vt={shaderID:vt,shaderType:A.type,shaderName:A.name,vertexShader:$t,fragmentShader:Kt,defines:A.defines,customVertexShaderID:ft,customFragmentShaderID:Lt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Zt,batchingColor:Zt&&K._colorsTexture!==null,instancing:te,instancingColor:te&&K.instanceColor!==null,instancingMorph:te&&K.morphTexture!==null,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Ge,matcap:ce,envMap:me,envMapMode:me&&it.mapping,envMapCubeUVHeight:pt,aoMap:Ce,lightMap:re,bumpMap:en,normalMap:ke,displacementMap:Sn,emissiveMap:G,normalMapObjectSpace:ke&&A.normalMapType===GS,normalMapTangentSpace:ke&&A.normalMapType===A0,packedNormalMap:ke&&A.normalMapType===A0&&nA(A.normalMap.format),metalnessMap:Qe,roughnessMap:ue,anisotropy:Pe,anisotropyMap:dt,clearcoat:St,clearcoatMap:_t,clearcoatNormalMap:Et,clearcoatRoughnessMap:At,dispersion:Ye,iridescence:C,iridescenceMap:st,iridescenceThicknessMap:rt,sheen:y,sheenColorMap:Rt,sheenRoughnessMap:Dt,specularMap:Tt,specularColorMap:yt,specularIntensityMap:ee,transmission:Z,transmissionMap:ne,thicknessMap:fe,gradientMap:I,opaque:A.transparent===!1&&A.blending===Rr&&A.alphaToCoverage===!1,alphaMap:xt,alphaTest:ut,alphaHash:Ot,combine:A.combine,mapUv:Ge&&R(A.map.channel),aoMapUv:Ce&&R(A.aoMap.channel),lightMapUv:re&&R(A.lightMap.channel),bumpMapUv:en&&R(A.bumpMap.channel),normalMapUv:ke&&R(A.normalMap.channel),displacementMapUv:Sn&&R(A.displacementMap.channel),emissiveMapUv:G&&R(A.emissiveMap.channel),metalnessMapUv:Qe&&R(A.metalnessMap.channel),roughnessMapUv:ue&&R(A.roughnessMap.channel),anisotropyMapUv:dt&&R(A.anisotropyMap.channel),clearcoatMapUv:_t&&R(A.clearcoatMap.channel),clearcoatNormalMapUv:Et&&R(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&R(A.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&R(A.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&R(A.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&R(A.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&R(A.sheenRoughnessMap.channel),specularMapUv:Tt&&R(A.specularMap.channel),specularColorMapUv:yt&&R(A.specularColorMap.channel),specularIntensityMapUv:ee&&R(A.specularIntensityMap.channel),transmissionMapUv:ne&&R(A.transmissionMap.channel),thicknessMapUv:fe&&R(A.thicknessMap.channel),alphaMapUv:xt&&R(A.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ke||Pe),vertexNormals:!!W.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!W.attributes.uv&&(Ge||xt),fog:!!ct,useFog:A.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||W.attributes.normal===void 0&&ke===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Wt,skinning:K.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Gt,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:lt.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&Y.length>0,shadowMapType:o.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ge&&A.map.isVideoTexture===!0&&xe.getTransfer(A.map.colorSpace)===Oe,decodeVideoTextureEmissive:G&&A.emissiveMap.isVideoTexture===!0&&xe.getTransfer(A.emissiveMap.colorSpace)===Oe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ca,flipSided:A.side===Vn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:bt&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&A.extensions.multiDraw===!0||Zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Vt.vertexUv1s=m.has(1),Vt.vertexUv2s=m.has(2),Vt.vertexUv3s=m.has(3),m.clear(),Vt}function M(A){const P=[];if(A.shaderID?P.push(A.shaderID):(P.push(A.customVertexShaderID),P.push(A.customFragmentShaderID)),A.defines!==void 0)for(const Y in A.defines)P.push(Y),P.push(A.defines[Y]);return A.isRawShaderMaterial===!1&&(S(P,A),D(P,A),P.push(o.outputColorSpace)),P.push(A.customProgramCacheKey),P.join()}function S(A,P){A.push(P.precision),A.push(P.outputColorSpace),A.push(P.envMapMode),A.push(P.envMapCubeUVHeight),A.push(P.mapUv),A.push(P.alphaMapUv),A.push(P.lightMapUv),A.push(P.aoMapUv),A.push(P.bumpMapUv),A.push(P.normalMapUv),A.push(P.displacementMapUv),A.push(P.emissiveMapUv),A.push(P.metalnessMapUv),A.push(P.roughnessMapUv),A.push(P.anisotropyMapUv),A.push(P.clearcoatMapUv),A.push(P.clearcoatNormalMapUv),A.push(P.clearcoatRoughnessMapUv),A.push(P.iridescenceMapUv),A.push(P.iridescenceThicknessMapUv),A.push(P.sheenColorMapUv),A.push(P.sheenRoughnessMapUv),A.push(P.specularMapUv),A.push(P.specularColorMapUv),A.push(P.specularIntensityMapUv),A.push(P.transmissionMapUv),A.push(P.thicknessMapUv),A.push(P.combine),A.push(P.fogExp2),A.push(P.sizeAttenuation),A.push(P.morphTargetsCount),A.push(P.morphAttributeCount),A.push(P.numDirLights),A.push(P.numPointLights),A.push(P.numSpotLights),A.push(P.numSpotLightMaps),A.push(P.numHemiLights),A.push(P.numRectAreaLights),A.push(P.numDirLightShadows),A.push(P.numPointLightShadows),A.push(P.numSpotLightShadows),A.push(P.numSpotLightShadowsWithMaps),A.push(P.numLightProbes),A.push(P.shadowMapType),A.push(P.toneMapping),A.push(P.numClippingPlanes),A.push(P.numClipIntersection),A.push(P.depthPacking)}function D(A,P){h.disableAll(),P.instancing&&h.enable(0),P.instancingColor&&h.enable(1),P.instancingMorph&&h.enable(2),P.matcap&&h.enable(3),P.envMap&&h.enable(4),P.normalMapObjectSpace&&h.enable(5),P.normalMapTangentSpace&&h.enable(6),P.clearcoat&&h.enable(7),P.iridescence&&h.enable(8),P.alphaTest&&h.enable(9),P.vertexColors&&h.enable(10),P.vertexAlphas&&h.enable(11),P.vertexUv1s&&h.enable(12),P.vertexUv2s&&h.enable(13),P.vertexUv3s&&h.enable(14),P.vertexTangents&&h.enable(15),P.anisotropy&&h.enable(16),P.alphaHash&&h.enable(17),P.batching&&h.enable(18),P.dispersion&&h.enable(19),P.batchingColor&&h.enable(20),P.gradientMap&&h.enable(21),P.packedNormalMap&&h.enable(22),P.vertexNormals&&h.enable(23),A.push(h.mask),h.disableAll(),P.fog&&h.enable(0),P.useFog&&h.enable(1),P.flatShading&&h.enable(2),P.logarithmicDepthBuffer&&h.enable(3),P.reversedDepthBuffer&&h.enable(4),P.skinning&&h.enable(5),P.morphTargets&&h.enable(6),P.morphNormals&&h.enable(7),P.morphColors&&h.enable(8),P.premultipliedAlpha&&h.enable(9),P.shadowMapEnabled&&h.enable(10),P.doubleSided&&h.enable(11),P.flipSided&&h.enable(12),P.useDepthPacking&&h.enable(13),P.dithering&&h.enable(14),P.transmission&&h.enable(15),P.sheen&&h.enable(16),P.opaque&&h.enable(17),P.pointsUvs&&h.enable(18),P.decodeVideoTexture&&h.enable(19),P.decodeVideoTextureEmissive&&h.enable(20),P.alphaToCoverage&&h.enable(21),P.numLightProbeGrids>0&&h.enable(22),A.push(h.mask)}function O(A){const P=E[A.type];let Y;if(P){const z=Li[P];Y=TM.clone(z.uniforms)}else Y=A.uniforms;return Y}function N(A,P){let Y=x.get(P);return Y!==void 0?++Y.usedTimes:(Y=new Jb(o,P,A,l),p.push(Y),x.set(P,Y)),Y}function k(A){if(--A.usedTimes===0){const P=p.indexOf(A);p[P]=p[p.length-1],p.pop(),x.delete(A.cacheKey),A.destroy()}}function L(A){d.remove(A)}function V(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:O,acquireProgram:N,releaseProgram:k,releaseShaderCache:L,programs:p,dispose:V}}function aA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function sA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function __(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function v_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function d(_,E,R,w,M,S){let D=o[e];return D===void 0?(D={id:_.id,object:_,geometry:E,material:R,materialVariant:h(_),groupOrder:w,renderOrder:_.renderOrder,z:M,group:S},o[e]=D):(D.id=_.id,D.object=_,D.geometry=E,D.material=R,D.materialVariant=h(_),D.groupOrder=w,D.renderOrder=_.renderOrder,D.z=M,D.group=S),e++,D}function m(_,E,R,w,M,S){const D=d(_,E,R,w,M,S);R.transmission>0?s.push(D):R.transparent===!0?l.push(D):i.push(D)}function p(_,E,R,w,M,S){const D=d(_,E,R,w,M,S);R.transmission>0?s.unshift(D):R.transparent===!0?l.unshift(D):i.unshift(D)}function x(_,E){i.length>1&&i.sort(_||sA),s.length>1&&s.sort(E||__),l.length>1&&l.sort(E||__)}function v(){for(let _=e,E=o.length;_<E;_++){const R=o[_];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:p,finish:v,sort:x}}function rA(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new v_,o.set(s,[h])):l>=u.length?(h=new v_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function oA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new Ie};break;case"SpotLight":i={position:new nt,direction:new nt,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[e.id]=i,i}}}function lA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let cA=0;function uA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function fA(o){const e=new oA,i=lA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new nt);const l=new nt,u=new mn,h=new mn;function d(p){let x=0,v=0,_=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let E=0,R=0,w=0,M=0,S=0,D=0,O=0,N=0,k=0,L=0,V=0;p.sort(uA);for(let P=0,Y=p.length;P<Y;P++){const z=p[P],K=z.color,lt=z.intensity,ct=z.distance;let W=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Us?W=z.shadow.map.texture:W=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)x+=K.r*lt,v+=K.g*lt,_+=K.b*lt;else if(z.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(z.sh.coefficients[U],lt);V++}else if(z.isDirectionalLight){const U=e.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const B=z.shadow,it=i.get(z);it.shadowIntensity=B.intensity,it.shadowBias=B.bias,it.shadowNormalBias=B.normalBias,it.shadowRadius=B.radius,it.shadowMapSize=B.mapSize,s.directionalShadow[E]=it,s.directionalShadowMap[E]=W,s.directionalShadowMatrix[E]=z.shadow.matrix,D++}s.directional[E]=U,E++}else if(z.isSpotLight){const U=e.get(z);U.position.setFromMatrixPosition(z.matrixWorld),U.color.copy(K).multiplyScalar(lt),U.distance=ct,U.coneCos=Math.cos(z.angle),U.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),U.decay=z.decay,s.spot[w]=U;const B=z.shadow;if(z.map&&(s.spotLightMap[k]=z.map,k++,B.updateMatrices(z),z.castShadow&&L++),s.spotLightMatrix[w]=B.matrix,z.castShadow){const it=i.get(z);it.shadowIntensity=B.intensity,it.shadowBias=B.bias,it.shadowNormalBias=B.normalBias,it.shadowRadius=B.radius,it.shadowMapSize=B.mapSize,s.spotShadow[w]=it,s.spotShadowMap[w]=W,N++}w++}else if(z.isRectAreaLight){const U=e.get(z);U.color.copy(K).multiplyScalar(lt),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),s.rectArea[M]=U,M++}else if(z.isPointLight){const U=e.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity),U.distance=z.distance,U.decay=z.decay,z.castShadow){const B=z.shadow,it=i.get(z);it.shadowIntensity=B.intensity,it.shadowBias=B.bias,it.shadowNormalBias=B.normalBias,it.shadowRadius=B.radius,it.shadowMapSize=B.mapSize,it.shadowCameraNear=B.camera.near,it.shadowCameraFar=B.camera.far,s.pointShadow[R]=it,s.pointShadowMap[R]=W,s.pointShadowMatrix[R]=z.shadow.matrix,O++}s.point[R]=U,R++}else if(z.isHemisphereLight){const U=e.get(z);U.skyColor.copy(z.color).multiplyScalar(lt),U.groundColor.copy(z.groundColor).multiplyScalar(lt),s.hemi[S]=U,S++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=_;const A=s.hash;(A.directionalLength!==E||A.pointLength!==R||A.spotLength!==w||A.rectAreaLength!==M||A.hemiLength!==S||A.numDirectionalShadows!==D||A.numPointShadows!==O||A.numSpotShadows!==N||A.numSpotMaps!==k||A.numLightProbes!==V)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=M,s.point.length=R,s.hemi.length=S,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=N+k-L,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=V,A.directionalLength=E,A.pointLength=R,A.spotLength=w,A.rectAreaLength=M,A.hemiLength=S,A.numDirectionalShadows=D,A.numPointShadows=O,A.numSpotShadows=N,A.numSpotMaps=k,A.numLightProbes=V,s.version=cA++)}function m(p,x){let v=0,_=0,E=0,R=0,w=0;const M=x.matrixWorldInverse;for(let S=0,D=p.length;S<D;S++){const O=p[S];if(O.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),v++}else if(O.isSpotLight){const N=s.spot[E];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),E++}else if(O.isRectAreaLight){const N=s.rectArea[R];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),h.identity(),u.copy(O.matrixWorld),u.premultiply(M),h.extractRotation(u),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),R++}else if(O.isPointLight){const N=s.point[_];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(M),_++}else if(O.isHemisphereLight){const N=s.hemi[w];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function x_(o){const e=new fA(o),i=[],s=[],l=[];function u(_){v.camera=_,i.length=0,s.length=0,l.length=0}function h(_){i.push(_)}function d(_){s.push(_)}function m(_){l.push(_)}function p(){e.setup(i)}function x(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:v,setupLights:p,setupLightsView:x,pushLight:h,pushShadow:d,pushLightProbeGrid:m}}function hA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new x_(o),e.set(l,[d])):u>=h.length?(d=new x_(o),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const dA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mA=[new nt(1,0,0),new nt(-1,0,0),new nt(0,1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1)],gA=[new nt(0,-1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1),new nt(0,-1,0),new nt(0,-1,0)],S_=new mn,Fo=new nt,Ch=new nt;function _A(o,e,i){let s=new k_;const l=new He,u=new He,h=new rn,d=new CM,m=new DM,p={},x=i.maxTextureSize,v={[es]:Vn,[Vn]:es,[ca]:ca},_=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:dA,fragmentShader:pA}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const R=new _a;R.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ga(R,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let S=this.type;this.render=function(L,V,A){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===vS&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Tc);const P=o.getRenderTarget(),Y=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),K=o.state;K.setBlending(fa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const lt=S!==this.type;lt&&V.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(W=>W.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,W=L.length;ct<W;ct++){const U=L[ct],B=U.shadow;if(B===void 0){Jt("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const it=B.getFrameExtents();l.multiply(it),u.copy(B.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/it.x),l.x=u.x*it.x,B.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/it.y),l.y=u.y*it.y,B.mapSize.y=u.y));const pt=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=pt,B.map===null||lt===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Bo){if(U.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Fi(l.x,l.y,{format:Us,type:pa,minFilter:Un,magFilter:Un,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new Ur(l.x,l.y,Ni),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=ma,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=An,B.map.depthTexture.magFilter=An}else U.isPointLight?(B.map=new J_(l.x),B.map.depthTexture=new EM(l.x,zi)):(B.map=new Fi(l.x,l.y),B.map.depthTexture=new Ur(l.x,l.y,zi)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=ma,this.type===Tc?(B.map.depthTexture.compareFunction=pt?Cd:Rd,B.map.depthTexture.minFilter=Un,B.map.depthTexture.magFilter=Un):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=An,B.map.depthTexture.magFilter=An);B.camera.updateProjectionMatrix()}const vt=B.map.isWebGLCubeRenderTarget?6:1;for(let Ut=0;Ut<vt;Ut++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,Ut),o.clear();else{Ut===0&&(o.setRenderTarget(B.map),o.clear());const Ct=B.getViewport(Ut);h.set(u.x*Ct.x,u.y*Ct.y,u.x*Ct.z,u.y*Ct.w),K.viewport(h)}if(U.isPointLight){const Ct=B.camera,Gt=B.matrix,$t=U.distance||Ct.far;$t!==Ct.far&&(Ct.far=$t,Ct.updateProjectionMatrix()),Fo.setFromMatrixPosition(U.matrixWorld),Ct.position.copy(Fo),Ch.copy(Ct.position),Ch.add(mA[Ut]),Ct.up.copy(gA[Ut]),Ct.lookAt(Ch),Ct.updateMatrixWorld(),Gt.makeTranslation(-Fo.x,-Fo.y,-Fo.z),S_.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),B._frustum.setFromProjectionMatrix(S_,Ct.coordinateSystem,Ct.reversedDepth)}else B.updateMatrices(U);s=B.getFrustum(),N(V,A,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===Bo&&D(B,A),B.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(P,Y,z)};function D(L,V){const A=e.update(w);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,E.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Fi(l.x,l.y,{format:Us,type:pa})),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(V,null,A,_,w,null),E.uniforms.shadow_pass.value=L.mapPass.texture,E.uniforms.resolution.value=L.mapSize,E.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(V,null,A,E,w,null)}function O(L,V,A,P){let Y=null;const z=A.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)Y=z;else if(Y=A.isPointLight===!0?m:d,o.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const K=Y.uuid,lt=V.uuid;let ct=p[K];ct===void 0&&(ct={},p[K]=ct);let W=ct[lt];W===void 0&&(W=Y.clone(),ct[lt]=W,V.addEventListener("dispose",k)),Y=W}if(Y.visible=V.visible,Y.wireframe=V.wireframe,P===Bo?Y.side=V.shadowSide!==null?V.shadowSide:V.side:Y.side=V.shadowSide!==null?V.shadowSide:v[V.side],Y.alphaMap=V.alphaMap,Y.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,Y.map=V.map,Y.clipShadows=V.clipShadows,Y.clippingPlanes=V.clippingPlanes,Y.clipIntersection=V.clipIntersection,Y.displacementMap=V.displacementMap,Y.displacementScale=V.displacementScale,Y.displacementBias=V.displacementBias,Y.wireframeLinewidth=V.wireframeLinewidth,Y.linewidth=V.linewidth,A.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const K=o.properties.get(Y);K.light=A}return Y}function N(L,V,A,P,Y){if(L.visible===!1)return;if(L.layers.test(V.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===Bo)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,L.matrixWorld);const lt=e.update(L),ct=L.material;if(Array.isArray(ct)){const W=lt.groups;for(let U=0,B=W.length;U<B;U++){const it=W[U],pt=ct[it.materialIndex];if(pt&&pt.visible){const vt=O(L,pt,P,Y);L.onBeforeShadow(o,L,V,A,lt,vt,it),o.renderBufferDirect(A,null,lt,vt,L,it),L.onAfterShadow(o,L,V,A,lt,vt,it)}}}else if(ct.visible){const W=O(L,ct,P,Y);L.onBeforeShadow(o,L,V,A,lt,W,null),o.renderBufferDirect(A,null,lt,W,L,null),L.onAfterShadow(o,L,V,A,lt,W,null)}}const K=L.children;for(let lt=0,ct=K.length;lt<ct;lt++)N(K[lt],V,A,P,Y)}function k(L){L.target.removeEventListener("dispose",k);for(const A in p){const P=p[A],Y=L.target.uuid;Y in P&&(P[Y].dispose(),delete P[Y])}}}function vA(o,e){function i(){let I=!1;const xt=new rn;let ut=null;const Ot=new rn(0,0,0,0);return{setMask:function(bt){ut!==bt&&!I&&(o.colorMask(bt,bt,bt,bt),ut=bt)},setLocked:function(bt){I=bt},setClear:function(bt,gt,Vt,Qt,Je){Je===!0&&(bt*=Qt,gt*=Qt,Vt*=Qt),xt.set(bt,gt,Vt,Qt),Ot.equals(xt)===!1&&(o.clearColor(bt,gt,Vt,Qt),Ot.copy(xt))},reset:function(){I=!1,ut=null,Ot.set(-1,0,0,0)}}}function s(){let I=!1,xt=!1,ut=null,Ot=null,bt=null;return{setReversed:function(gt){if(xt!==gt){const Vt=e.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),xt=gt;const Qt=bt;bt=null,this.setClear(Qt)}},getReversed:function(){return xt},setTest:function(gt){gt?Mt(o.DEPTH_TEST):Wt(o.DEPTH_TEST)},setMask:function(gt){ut!==gt&&!I&&(o.depthMask(gt),ut=gt)},setFunc:function(gt){if(xt&&(gt=QS[gt]),Ot!==gt){switch(gt){case Uh:o.depthFunc(o.NEVER);break;case Lh:o.depthFunc(o.ALWAYS);break;case Nh:o.depthFunc(o.LESS);break;case Dr:o.depthFunc(o.LEQUAL);break;case Oh:o.depthFunc(o.EQUAL);break;case Ph:o.depthFunc(o.GEQUAL);break;case Fh:o.depthFunc(o.GREATER);break;case Bh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ot=gt}},setLocked:function(gt){I=gt},setClear:function(gt){bt!==gt&&(bt=gt,xt&&(gt=1-gt),o.clearDepth(gt))},reset:function(){I=!1,ut=null,Ot=null,bt=null,xt=!1}}}function l(){let I=!1,xt=null,ut=null,Ot=null,bt=null,gt=null,Vt=null,Qt=null,Je=null;return{setTest:function(be){I||(be?Mt(o.STENCIL_TEST):Wt(o.STENCIL_TEST))},setMask:function(be){xt!==be&&!I&&(o.stencilMask(be),xt=be)},setFunc:function(be,ni,Xn){(ut!==be||Ot!==ni||bt!==Xn)&&(o.stencilFunc(be,ni,Xn),ut=be,Ot=ni,bt=Xn)},setOp:function(be,ni,Xn){(gt!==be||Vt!==ni||Qt!==Xn)&&(o.stencilOp(be,ni,Xn),gt=be,Vt=ni,Qt=Xn)},setLocked:function(be){I=be},setClear:function(be){Je!==be&&(o.clearStencil(be),Je=be)},reset:function(){I=!1,xt=null,ut=null,Ot=null,bt=null,gt=null,Vt=null,Qt=null,Je=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},v={},_={},E=new WeakMap,R=[],w=null,M=!1,S=null,D=null,O=null,N=null,k=null,L=null,V=null,A=new Ie(0,0,0),P=0,Y=!1,z=null,K=null,lt=null,ct=null,W=null;const U=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,it=0;const pt=o.getParameter(o.VERSION);pt.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(pt)[1]),B=it>=1):pt.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),B=it>=2);let vt=null,Ut={};const Ct=o.getParameter(o.SCISSOR_BOX),Gt=o.getParameter(o.VIEWPORT),$t=new rn().fromArray(Ct),Kt=new rn().fromArray(Gt);function ft(I,xt,ut,Ot){const bt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(I,gt),o.texParameteri(I,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(I,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Vt=0;Vt<ut;Vt++)I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY?o.texImage3D(xt,0,o.RGBA,1,1,Ot,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(xt+Vt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return gt}const Lt={};Lt[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),Lt[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Lt[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(o.DEPTH_TEST),h.setFunc(Dr),en(!1),ke(E0),Mt(o.CULL_FACE),Ce(fa);function Mt(I){x[I]!==!0&&(o.enable(I),x[I]=!0)}function Wt(I){x[I]!==!1&&(o.disable(I),x[I]=!1)}function te(I,xt){return _[I]!==xt?(o.bindFramebuffer(I,xt),_[I]=xt,I===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=xt),I===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=xt),!0):!1}function Zt(I,xt){let ut=R,Ot=!1;if(I){ut=E.get(xt),ut===void 0&&(ut=[],E.set(xt,ut));const bt=I.textures;if(ut.length!==bt.length||ut[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Vt=bt.length;gt<Vt;gt++)ut[gt]=o.COLOR_ATTACHMENT0+gt;ut.length=bt.length,Ot=!0}}else ut[0]!==o.BACK&&(ut[0]=o.BACK,Ot=!0);Ot&&o.drawBuffers(ut)}function Ge(I){return w!==I?(o.useProgram(I),w=I,!0):!1}const ce={[As]:o.FUNC_ADD,[SS]:o.FUNC_SUBTRACT,[MS]:o.FUNC_REVERSE_SUBTRACT};ce[ES]=o.MIN,ce[yS]=o.MAX;const me={[TS]:o.ZERO,[bS]:o.ONE,[AS]:o.SRC_COLOR,[Dh]:o.SRC_ALPHA,[LS]:o.SRC_ALPHA_SATURATE,[wS]:o.DST_COLOR,[CS]:o.DST_ALPHA,[RS]:o.ONE_MINUS_SRC_COLOR,[wh]:o.ONE_MINUS_SRC_ALPHA,[US]:o.ONE_MINUS_DST_COLOR,[DS]:o.ONE_MINUS_DST_ALPHA,[NS]:o.CONSTANT_COLOR,[OS]:o.ONE_MINUS_CONSTANT_COLOR,[PS]:o.CONSTANT_ALPHA,[FS]:o.ONE_MINUS_CONSTANT_ALPHA};function Ce(I,xt,ut,Ot,bt,gt,Vt,Qt,Je,be){if(I===fa){M===!0&&(Wt(o.BLEND),M=!1);return}if(M===!1&&(Mt(o.BLEND),M=!0),I!==xS){if(I!==S||be!==Y){if((D!==As||k!==As)&&(o.blendEquation(o.FUNC_ADD),D=As,k=As),be)switch(I){case Rr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case y0:o.blendFunc(o.ONE,o.ONE);break;case T0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case b0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Me("WebGLState: Invalid blending: ",I);break}else switch(I){case Rr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case y0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case T0:Me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case b0:Me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Me("WebGLState: Invalid blending: ",I);break}O=null,N=null,L=null,V=null,A.set(0,0,0),P=0,S=I,Y=be}return}bt=bt||xt,gt=gt||ut,Vt=Vt||Ot,(xt!==D||bt!==k)&&(o.blendEquationSeparate(ce[xt],ce[bt]),D=xt,k=bt),(ut!==O||Ot!==N||gt!==L||Vt!==V)&&(o.blendFuncSeparate(me[ut],me[Ot],me[gt],me[Vt]),O=ut,N=Ot,L=gt,V=Vt),(Qt.equals(A)===!1||Je!==P)&&(o.blendColor(Qt.r,Qt.g,Qt.b,Je),A.copy(Qt),P=Je),S=I,Y=!1}function re(I,xt){I.side===ca?Wt(o.CULL_FACE):Mt(o.CULL_FACE);let ut=I.side===Vn;xt&&(ut=!ut),en(ut),I.blending===Rr&&I.transparent===!1?Ce(fa):Ce(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),h.setFunc(I.depthFunc),h.setTest(I.depthTest),h.setMask(I.depthWrite),u.setMask(I.colorWrite);const Ot=I.stencilWrite;d.setTest(Ot),Ot&&(d.setMask(I.stencilWriteMask),d.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),d.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),G(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Mt(o.SAMPLE_ALPHA_TO_COVERAGE):Wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function en(I){z!==I&&(I?o.frontFace(o.CW):o.frontFace(o.CCW),z=I)}function ke(I){I!==gS?(Mt(o.CULL_FACE),I!==K&&(I===E0?o.cullFace(o.BACK):I===_S?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Wt(o.CULL_FACE),K=I}function Sn(I){I!==lt&&(B&&o.lineWidth(I),lt=I)}function G(I,xt,ut){I?(Mt(o.POLYGON_OFFSET_FILL),(ct!==xt||W!==ut)&&(ct=xt,W=ut,h.getReversed()&&(xt=-xt),o.polygonOffset(xt,ut))):Wt(o.POLYGON_OFFSET_FILL)}function Qe(I){I?Mt(o.SCISSOR_TEST):Wt(o.SCISSOR_TEST)}function ue(I){I===void 0&&(I=o.TEXTURE0+U-1),vt!==I&&(o.activeTexture(I),vt=I)}function Pe(I,xt,ut){ut===void 0&&(vt===null?ut=o.TEXTURE0+U-1:ut=vt);let Ot=Ut[ut];Ot===void 0&&(Ot={type:void 0,texture:void 0},Ut[ut]=Ot),(Ot.type!==I||Ot.texture!==xt)&&(vt!==ut&&(o.activeTexture(ut),vt=ut),o.bindTexture(I,xt||Lt[I]),Ot.type=I,Ot.texture=xt)}function St(){const I=Ut[vt];I!==void 0&&I.type!==void 0&&(o.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ye(){try{o.compressedTexImage2D(...arguments)}catch(I){Me("WebGLState:",I)}}function C(){try{o.compressedTexImage3D(...arguments)}catch(I){Me("WebGLState:",I)}}function y(){try{o.texSubImage2D(...arguments)}catch(I){Me("WebGLState:",I)}}function Z(){try{o.texSubImage3D(...arguments)}catch(I){Me("WebGLState:",I)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(I){Me("WebGLState:",I)}}function _t(){try{o.compressedTexSubImage3D(...arguments)}catch(I){Me("WebGLState:",I)}}function Et(){try{o.texStorage2D(...arguments)}catch(I){Me("WebGLState:",I)}}function At(){try{o.texStorage3D(...arguments)}catch(I){Me("WebGLState:",I)}}function st(){try{o.texImage2D(...arguments)}catch(I){Me("WebGLState:",I)}}function rt(){try{o.texImage3D(...arguments)}catch(I){Me("WebGLState:",I)}}function Rt(I){return v[I]!==void 0?v[I]:o.getParameter(I)}function Dt(I,xt){v[I]!==xt&&(o.pixelStorei(I,xt),v[I]=xt)}function Tt(I){$t.equals(I)===!1&&(o.scissor(I.x,I.y,I.z,I.w),$t.copy(I))}function yt(I){Kt.equals(I)===!1&&(o.viewport(I.x,I.y,I.z,I.w),Kt.copy(I))}function ee(I,xt){let ut=p.get(xt);ut===void 0&&(ut=new WeakMap,p.set(xt,ut));let Ot=ut.get(I);Ot===void 0&&(Ot=o.getUniformBlockIndex(xt,I.name),ut.set(I,Ot))}function ne(I,xt){const Ot=p.get(xt).get(I);m.get(xt)!==Ot&&(o.uniformBlockBinding(xt,Ot,I.__bindingPointIndex),m.set(xt,Ot))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},v={},vt=null,Ut={},_={},E=new WeakMap,R=[],w=null,M=!1,S=null,D=null,O=null,N=null,k=null,L=null,V=null,A=new Ie(0,0,0),P=0,Y=!1,z=null,K=null,lt=null,ct=null,W=null,$t.set(0,0,o.canvas.width,o.canvas.height),Kt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Mt,disable:Wt,bindFramebuffer:te,drawBuffers:Zt,useProgram:Ge,setBlending:Ce,setMaterial:re,setFlipSided:en,setCullFace:ke,setLineWidth:Sn,setPolygonOffset:G,setScissorTest:Qe,activeTexture:ue,bindTexture:Pe,unbindTexture:St,compressedTexImage2D:Ye,compressedTexImage3D:C,texImage2D:st,texImage3D:rt,pixelStorei:Dt,getParameter:Rt,updateUBOMapping:ee,uniformBlockBinding:ne,texStorage2D:Et,texStorage3D:At,texSubImage2D:y,texSubImage3D:Z,compressedTexSubImage2D:dt,compressedTexSubImage3D:_t,scissor:Tt,viewport:yt,reset:fe}}function xA(o,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new He,x=new WeakMap,v=new Set;let _;const E=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(C,y){return R?new OffscreenCanvas(C,y):Go("canvas")}function M(C,y,Z){let dt=1;const _t=Ye(C);if((_t.width>Z||_t.height>Z)&&(dt=Z/Math.max(_t.width,_t.height)),dt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Et=Math.floor(dt*_t.width),At=Math.floor(dt*_t.height);_===void 0&&(_=w(Et,At));const st=y?w(Et,At):_;return st.width=Et,st.height=At,st.getContext("2d").drawImage(C,0,0,Et,At),Jt("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+Et+"x"+At+")."),st}else return"data"in C&&Jt("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),C;return C}function S(C){return C.generateMipmaps}function D(C){o.generateMipmap(C)}function O(C){return C.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?o.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(C,y,Z,dt,_t,Et=!1){if(C!==null){if(o[C]!==void 0)return o[C];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let At;dt&&(At=e.get("EXT_texture_norm16"),At||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=y;if(y===o.RED&&(Z===o.FLOAT&&(st=o.R32F),Z===o.HALF_FLOAT&&(st=o.R16F),Z===o.UNSIGNED_BYTE&&(st=o.R8),Z===o.UNSIGNED_SHORT&&At&&(st=At.R16_EXT),Z===o.SHORT&&At&&(st=At.R16_SNORM_EXT)),y===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(st=o.R8UI),Z===o.UNSIGNED_SHORT&&(st=o.R16UI),Z===o.UNSIGNED_INT&&(st=o.R32UI),Z===o.BYTE&&(st=o.R8I),Z===o.SHORT&&(st=o.R16I),Z===o.INT&&(st=o.R32I)),y===o.RG&&(Z===o.FLOAT&&(st=o.RG32F),Z===o.HALF_FLOAT&&(st=o.RG16F),Z===o.UNSIGNED_BYTE&&(st=o.RG8),Z===o.UNSIGNED_SHORT&&At&&(st=At.RG16_EXT),Z===o.SHORT&&At&&(st=At.RG16_SNORM_EXT)),y===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(st=o.RG8UI),Z===o.UNSIGNED_SHORT&&(st=o.RG16UI),Z===o.UNSIGNED_INT&&(st=o.RG32UI),Z===o.BYTE&&(st=o.RG8I),Z===o.SHORT&&(st=o.RG16I),Z===o.INT&&(st=o.RG32I)),y===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(st=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(st=o.RGB16UI),Z===o.UNSIGNED_INT&&(st=o.RGB32UI),Z===o.BYTE&&(st=o.RGB8I),Z===o.SHORT&&(st=o.RGB16I),Z===o.INT&&(st=o.RGB32I)),y===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(st=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(st=o.RGBA16UI),Z===o.UNSIGNED_INT&&(st=o.RGBA32UI),Z===o.BYTE&&(st=o.RGBA8I),Z===o.SHORT&&(st=o.RGBA16I),Z===o.INT&&(st=o.RGBA32I)),y===o.RGB&&(Z===o.UNSIGNED_SHORT&&At&&(st=At.RGB16_EXT),Z===o.SHORT&&At&&(st=At.RGB16_SNORM_EXT),Z===o.UNSIGNED_INT_5_9_9_9_REV&&(st=o.RGB9_E5),Z===o.UNSIGNED_INT_10F_11F_11F_REV&&(st=o.R11F_G11F_B10F)),y===o.RGBA){const rt=Et?Nc:xe.getTransfer(_t);Z===o.FLOAT&&(st=o.RGBA32F),Z===o.HALF_FLOAT&&(st=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(st=rt===Oe?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT&&At&&(st=At.RGBA16_EXT),Z===o.SHORT&&At&&(st=At.RGBA16_SNORM_EXT),Z===o.UNSIGNED_SHORT_4_4_4_4&&(st=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(st=o.RGB5_A1)}return(st===o.R16F||st===o.R32F||st===o.RG16F||st===o.RG32F||st===o.RGBA16F||st===o.RGBA32F)&&e.get("EXT_color_buffer_float"),st}function k(C,y){let Z;return C?y===null||y===zi||y===Ho?Z=o.DEPTH24_STENCIL8:y===Ni?Z=o.DEPTH32F_STENCIL8:y===Io&&(Z=o.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===zi||y===Ho?Z=o.DEPTH_COMPONENT24:y===Ni?Z=o.DEPTH_COMPONENT32F:y===Io&&(Z=o.DEPTH_COMPONENT16),Z}function L(C,y){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==An&&C.minFilter!==Un?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function V(C){const y=C.target;y.removeEventListener("dispose",V),P(y),y.isVideoTexture&&x.delete(y),y.isHTMLTexture&&v.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),z(y)}function P(C){const y=s.get(C);if(y.__webglInit===void 0)return;const Z=C.source,dt=E.get(Z);if(dt){const _t=dt[y.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&Y(C),Object.keys(dt).length===0&&E.delete(Z)}s.remove(C)}function Y(C){const y=s.get(C);o.deleteTexture(y.__webglTexture);const Z=C.source,dt=E.get(Z);delete dt[y.__cacheKey],h.memory.textures--}function z(C){const y=s.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),s.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(y.__webglFramebuffer[dt]))for(let _t=0;_t<y.__webglFramebuffer[dt].length;_t++)o.deleteFramebuffer(y.__webglFramebuffer[dt][_t]);else o.deleteFramebuffer(y.__webglFramebuffer[dt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[dt])}else{if(Array.isArray(y.__webglFramebuffer))for(let dt=0;dt<y.__webglFramebuffer.length;dt++)o.deleteFramebuffer(y.__webglFramebuffer[dt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let dt=0;dt<y.__webglColorRenderbuffer.length;dt++)y.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[dt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const Z=C.textures;for(let dt=0,_t=Z.length;dt<_t;dt++){const Et=s.get(Z[dt]);Et.__webglTexture&&(o.deleteTexture(Et.__webglTexture),h.memory.textures--),s.remove(Z[dt])}s.remove(C)}let K=0;function lt(){K=0}function ct(){return K}function W(C){K=C}function U(){const C=K;return C>=l.maxTextures&&Jt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l.maxTextures),K+=1,C}function B(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function it(C,y){const Z=s.get(C);if(C.isVideoTexture&&Pe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Z.__version!==C.version){const dt=C.image;if(dt===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(Z,C,y);return}}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+y)}function pt(C,y){const Z=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){Wt(Z,C,y);return}else C.isExternalTexture&&(Z.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+y)}function vt(C,y){const Z=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){Wt(Z,C,y);return}i.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+y)}function Ut(C,y){const Z=s.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&Z.__version!==C.version){te(Z,C,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+y)}const Ct={[zh]:o.REPEAT,[ua]:o.CLAMP_TO_EDGE,[Ih]:o.MIRRORED_REPEAT},Gt={[An]:o.NEAREST,[IS]:o.NEAREST_MIPMAP_NEAREST,[ec]:o.NEAREST_MIPMAP_LINEAR,[Un]:o.LINEAR,[Qf]:o.LINEAR_MIPMAP_NEAREST,[Cs]:o.LINEAR_MIPMAP_LINEAR},$t={[VS]:o.NEVER,[YS]:o.ALWAYS,[XS]:o.LESS,[Rd]:o.LEQUAL,[kS]:o.EQUAL,[Cd]:o.GEQUAL,[WS]:o.GREATER,[qS]:o.NOTEQUAL};function Kt(C,y){if(y.type===Ni&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Un||y.magFilter===Qf||y.magFilter===ec||y.magFilter===Cs||y.minFilter===Un||y.minFilter===Qf||y.minFilter===ec||y.minFilter===Cs)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(C,o.TEXTURE_WRAP_S,Ct[y.wrapS]),o.texParameteri(C,o.TEXTURE_WRAP_T,Ct[y.wrapT]),(C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY)&&o.texParameteri(C,o.TEXTURE_WRAP_R,Ct[y.wrapR]),o.texParameteri(C,o.TEXTURE_MAG_FILTER,Gt[y.magFilter]),o.texParameteri(C,o.TEXTURE_MIN_FILTER,Gt[y.minFilter]),y.compareFunction&&(o.texParameteri(C,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(C,o.TEXTURE_COMPARE_FUNC,$t[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===An||y.minFilter!==ec&&y.minFilter!==Cs||y.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function ft(C,y){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",V));const dt=y.source;let _t=E.get(dt);_t===void 0&&(_t={},E.set(dt,_t));const Et=B(y);if(Et!==C.__cacheKey){_t[Et]===void 0&&(_t[Et]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,Z=!0),_t[Et].usedTimes++;const At=_t[C.__cacheKey];At!==void 0&&(_t[C.__cacheKey].usedTimes--,At.usedTimes===0&&Y(y)),C.__cacheKey=Et,C.__webglTexture=_t[Et].texture}return Z}function Lt(C,y,Z){return Math.floor(Math.floor(C/Z)/y)}function Mt(C,y,Z,dt){const Et=C.updateRanges;if(Et.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,Z,dt,y.data);else{Et.sort((Dt,Tt)=>Dt.start-Tt.start);let At=0;for(let Dt=1;Dt<Et.length;Dt++){const Tt=Et[At],yt=Et[Dt],ee=Tt.start+Tt.count,ne=Lt(yt.start,y.width,4),fe=Lt(Tt.start,y.width,4);yt.start<=ee+1&&ne===fe&&Lt(yt.start+yt.count-1,y.width,4)===ne?Tt.count=Math.max(Tt.count,yt.start+yt.count-Tt.start):(++At,Et[At]=yt)}Et.length=At+1;const st=i.getParameter(o.UNPACK_ROW_LENGTH),rt=i.getParameter(o.UNPACK_SKIP_PIXELS),Rt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let Dt=0,Tt=Et.length;Dt<Tt;Dt++){const yt=Et[Dt],ee=Math.floor(yt.start/4),ne=Math.ceil(yt.count/4),fe=ee%y.width,I=Math.floor(ee/y.width),xt=ne,ut=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(o.UNPACK_SKIP_ROWS,I),i.texSubImage2D(o.TEXTURE_2D,0,fe,I,xt,ut,Z,dt,y.data)}C.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,st),i.pixelStorei(o.UNPACK_SKIP_PIXELS,rt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Rt)}}function Wt(C,y,Z){let dt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(dt=o.TEXTURE_3D);const _t=ft(C,y),Et=y.source;i.bindTexture(dt,C.__webglTexture,o.TEXTURE0+Z);const At=s.get(Et);if(Et.version!==At.__version||_t===!0){if(i.activeTexture(o.TEXTURE0+Z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ut=xe.getPrimaries(xe.workingColorSpace),Ot=y.colorSpace===$a?null:xe.getPrimaries(y.colorSpace),bt=y.colorSpace===$a||ut===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment);let rt=M(y.image,!1,l.maxTextureSize);rt=St(y,rt);const Rt=u.convert(y.format,y.colorSpace),Dt=u.convert(y.type);let Tt=N(y.internalFormat,Rt,Dt,y.normalized,y.colorSpace,y.isVideoTexture);Kt(dt,y);let yt;const ee=y.mipmaps,ne=y.isVideoTexture!==!0,fe=At.__version===void 0||_t===!0,I=Et.dataReady,xt=L(y,rt);if(y.isDepthTexture)Tt=k(y.format===Ds,y.type),fe&&(ne?i.texStorage2D(o.TEXTURE_2D,1,Tt,rt.width,rt.height):i.texImage2D(o.TEXTURE_2D,0,Tt,rt.width,rt.height,0,Rt,Dt,null));else if(y.isDataTexture)if(ee.length>0){ne&&fe&&i.texStorage2D(o.TEXTURE_2D,xt,Tt,ee[0].width,ee[0].height);for(let ut=0,Ot=ee.length;ut<Ot;ut++)yt=ee[ut],ne?I&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,yt.width,yt.height,Rt,Dt,yt.data):i.texImage2D(o.TEXTURE_2D,ut,Tt,yt.width,yt.height,0,Rt,Dt,yt.data);y.generateMipmaps=!1}else ne?(fe&&i.texStorage2D(o.TEXTURE_2D,xt,Tt,rt.width,rt.height),I&&Mt(y,rt,Rt,Dt)):i.texImage2D(o.TEXTURE_2D,0,Tt,rt.width,rt.height,0,Rt,Dt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ne&&fe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,xt,Tt,ee[0].width,ee[0].height,rt.depth);for(let ut=0,Ot=ee.length;ut<Ot;ut++)if(yt=ee[ut],y.format!==Ti)if(Rt!==null)if(ne){if(I)if(y.layerUpdates.size>0){const bt=Q0(yt.width,yt.height,y.format,y.type);for(const gt of y.layerUpdates){const Vt=yt.data.subarray(gt*bt/yt.data.BYTES_PER_ELEMENT,(gt+1)*bt/yt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,gt,yt.width,yt.height,1,Rt,Vt)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,yt.width,yt.height,rt.depth,Rt,yt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ut,Tt,yt.width,yt.height,rt.depth,0,yt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?I&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ut,0,0,0,yt.width,yt.height,rt.depth,Rt,Dt,yt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ut,Tt,yt.width,yt.height,rt.depth,0,Rt,Dt,yt.data)}else{ne&&fe&&i.texStorage2D(o.TEXTURE_2D,xt,Tt,ee[0].width,ee[0].height);for(let ut=0,Ot=ee.length;ut<Ot;ut++)yt=ee[ut],y.format!==Ti?Rt!==null?ne?I&&i.compressedTexSubImage2D(o.TEXTURE_2D,ut,0,0,yt.width,yt.height,Rt,yt.data):i.compressedTexImage2D(o.TEXTURE_2D,ut,Tt,yt.width,yt.height,0,yt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?I&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,yt.width,yt.height,Rt,Dt,yt.data):i.texImage2D(o.TEXTURE_2D,ut,Tt,yt.width,yt.height,0,Rt,Dt,yt.data)}else if(y.isDataArrayTexture)if(ne){if(fe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,xt,Tt,rt.width,rt.height,rt.depth),I)if(y.layerUpdates.size>0){const ut=Q0(rt.width,rt.height,y.format,y.type);for(const Ot of y.layerUpdates){const bt=rt.data.subarray(Ot*ut/rt.data.BYTES_PER_ELEMENT,(Ot+1)*ut/rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ot,rt.width,rt.height,1,Rt,Dt,bt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Rt,Dt,rt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Tt,rt.width,rt.height,rt.depth,0,Rt,Dt,rt.data);else if(y.isData3DTexture)ne?(fe&&i.texStorage3D(o.TEXTURE_3D,xt,Tt,rt.width,rt.height,rt.depth),I&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Rt,Dt,rt.data)):i.texImage3D(o.TEXTURE_3D,0,Tt,rt.width,rt.height,rt.depth,0,Rt,Dt,rt.data);else if(y.isFramebufferTexture){if(fe)if(ne)i.texStorage2D(o.TEXTURE_2D,xt,Tt,rt.width,rt.height);else{let ut=rt.width,Ot=rt.height;for(let bt=0;bt<xt;bt++)i.texImage2D(o.TEXTURE_2D,bt,Tt,ut,Ot,0,Rt,Dt,null),ut>>=1,Ot>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in o){const ut=o.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),rt.parentNode!==ut){ut.appendChild(rt),v.add(y),ut.onpaint=Qt=>{const Je=Qt.changedElements;for(const be of v)Je.includes(be.image)&&(be.needsUpdate=!0)},ut.requestPaint();return}const Ot=0,bt=o.RGBA,gt=o.RGBA,Vt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Ot,bt,gt,Vt,rt),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(ee.length>0){if(ne&&fe){const ut=Ye(ee[0]);i.texStorage2D(o.TEXTURE_2D,xt,Tt,ut.width,ut.height)}for(let ut=0,Ot=ee.length;ut<Ot;ut++)yt=ee[ut],ne?I&&i.texSubImage2D(o.TEXTURE_2D,ut,0,0,Rt,Dt,yt):i.texImage2D(o.TEXTURE_2D,ut,Tt,Rt,Dt,yt);y.generateMipmaps=!1}else if(ne){if(fe){const ut=Ye(rt);i.texStorage2D(o.TEXTURE_2D,xt,Tt,ut.width,ut.height)}I&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Rt,Dt,rt)}else i.texImage2D(o.TEXTURE_2D,0,Tt,Rt,Dt,rt);S(y)&&D(dt),At.__version=Et.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function te(C,y,Z){if(y.image.length!==6)return;const dt=ft(C,y),_t=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,C.__webglTexture,o.TEXTURE0+Z);const Et=s.get(_t);if(_t.version!==Et.__version||dt===!0){i.activeTexture(o.TEXTURE0+Z);const At=xe.getPrimaries(xe.workingColorSpace),st=y.colorSpace===$a?null:xe.getPrimaries(y.colorSpace),rt=y.colorSpace===$a||At===st?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const Rt=y.isCompressedTexture||y.image[0].isCompressedTexture,Dt=y.image[0]&&y.image[0].isDataTexture,Tt=[];for(let gt=0;gt<6;gt++)!Rt&&!Dt?Tt[gt]=M(y.image[gt],!0,l.maxCubemapSize):Tt[gt]=Dt?y.image[gt].image:y.image[gt],Tt[gt]=St(y,Tt[gt]);const yt=Tt[0],ee=u.convert(y.format,y.colorSpace),ne=u.convert(y.type),fe=N(y.internalFormat,ee,ne,y.normalized,y.colorSpace),I=y.isVideoTexture!==!0,xt=Et.__version===void 0||dt===!0,ut=_t.dataReady;let Ot=L(y,yt);Kt(o.TEXTURE_CUBE_MAP,y);let bt;if(Rt){I&&xt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,fe,yt.width,yt.height);for(let gt=0;gt<6;gt++){bt=Tt[gt].mipmaps;for(let Vt=0;Vt<bt.length;Vt++){const Qt=bt[Vt];y.format!==Ti?ee!==null?I?ut&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,Qt.width,Qt.height,ee,Qt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,fe,Qt.width,Qt.height,0,Qt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,0,0,Qt.width,Qt.height,ee,ne,Qt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt,fe,Qt.width,Qt.height,0,ee,ne,Qt.data)}}}else{if(bt=y.mipmaps,I&&xt){bt.length>0&&Ot++;const gt=Ye(Tt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ot,fe,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Dt){I?ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Tt[gt].width,Tt[gt].height,ee,ne,Tt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,fe,Tt[gt].width,Tt[gt].height,0,ee,ne,Tt[gt].data);for(let Vt=0;Vt<bt.length;Vt++){const Je=bt[Vt].image[gt].image;I?ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,Je.width,Je.height,ee,ne,Je.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,fe,Je.width,Je.height,0,ee,ne,Je.data)}}else{I?ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ee,ne,Tt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,fe,ee,ne,Tt[gt]);for(let Vt=0;Vt<bt.length;Vt++){const Qt=bt[Vt];I?ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,0,0,ee,ne,Qt.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Vt+1,fe,ee,ne,Qt.image[gt])}}}S(y)&&D(o.TEXTURE_CUBE_MAP),Et.__version=_t.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Zt(C,y,Z,dt,_t,Et){const At=u.convert(Z.format,Z.colorSpace),st=u.convert(Z.type),rt=N(Z.internalFormat,At,st,Z.normalized,Z.colorSpace),Rt=s.get(y),Dt=s.get(Z);if(Dt.__renderTarget=y,!Rt.__hasExternalTextures){const Tt=Math.max(1,y.width>>Et),yt=Math.max(1,y.height>>Et);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?i.texImage3D(_t,Et,rt,Tt,yt,y.depth,0,At,st,null):i.texImage2D(_t,Et,rt,Tt,yt,0,At,st,null)}i.bindFramebuffer(o.FRAMEBUFFER,C),ue(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,_t,Dt.__webglTexture,0,Qe(y)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,_t,Dt.__webglTexture,Et),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ge(C,y,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,C),y.depthBuffer){const dt=y.depthTexture,_t=dt&&dt.isDepthTexture?dt.type:null,Et=k(y.stencilBuffer,_t),At=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;ue(y)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qe(y),Et,y.width,y.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qe(y),Et,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Et,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,C)}else{const dt=y.textures;for(let _t=0;_t<dt.length;_t++){const Et=dt[_t],At=u.convert(Et.format,Et.colorSpace),st=u.convert(Et.type),rt=N(Et.internalFormat,At,st,Et.normalized,Et.colorSpace);ue(y)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qe(y),rt,y.width,y.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qe(y),rt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,rt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ce(C,y,Z){const dt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=s.get(y.depthTexture);if(_t.__renderTarget=y,(!_t.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),dt){if(_t.__webglInit===void 0&&(_t.__webglInit=!0,y.depthTexture.addEventListener("dispose",V)),_t.__webglTexture===void 0){_t.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),Kt(o.TEXTURE_CUBE_MAP,y.depthTexture);const Rt=u.convert(y.depthTexture.format),Dt=u.convert(y.depthTexture.type);let Tt;y.depthTexture.format===ma?Tt=o.DEPTH_COMPONENT24:y.depthTexture.format===Ds&&(Tt=o.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Tt,y.width,y.height,0,Rt,Dt,null)}}else it(y.depthTexture,0);const Et=_t.__webglTexture,At=Qe(y),st=dt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Z:o.TEXTURE_2D,rt=y.depthTexture.format===Ds?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===ma)ue(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,rt,st,Et,0,At):o.framebufferTexture2D(o.FRAMEBUFFER,rt,st,Et,0);else if(y.depthTexture.format===Ds)ue(y)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,rt,st,Et,0,At):o.framebufferTexture2D(o.FRAMEBUFFER,rt,st,Et,0);else throw new Error("Unknown depthTexture format")}function me(C){const y=s.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const dt=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),dt){const _t=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,dt.removeEventListener("dispose",_t)};dt.addEventListener("dispose",_t),y.__depthDisposeCallback=_t}y.__boundDepthTexture=dt}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(Z)for(let dt=0;dt<6;dt++)ce(y.__webglFramebuffer[dt],C,dt);else{const dt=C.texture.mipmaps;dt&&dt.length>0?ce(y.__webglFramebuffer[0],C,0):ce(y.__webglFramebuffer,C,0)}else if(Z){y.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[dt]),y.__webglDepthbuffer[dt]===void 0)y.__webglDepthbuffer[dt]=o.createRenderbuffer(),Ge(y.__webglDepthbuffer[dt],C,!1);else{const _t=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Et=y.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,Et),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,Et)}}else{const dt=C.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Ge(y.__webglDepthbuffer,C,!1);else{const _t=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Et=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Et),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,Et)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ce(C,y,Z){const dt=s.get(C);y!==void 0&&Zt(dt.__webglFramebuffer,C,C.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&me(C)}function re(C){const y=C.texture,Z=s.get(C),dt=s.get(y);C.addEventListener("dispose",A);const _t=C.textures,Et=C.isWebGLCubeRenderTarget===!0,At=_t.length>1;if(At||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=y.version,h.memory.textures++),Et){Z.__webglFramebuffer=[];for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0){Z.__webglFramebuffer[st]=[];for(let rt=0;rt<y.mipmaps.length;rt++)Z.__webglFramebuffer[st][rt]=o.createFramebuffer()}else Z.__webglFramebuffer[st]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Z.__webglFramebuffer=[];for(let st=0;st<y.mipmaps.length;st++)Z.__webglFramebuffer[st]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(At)for(let st=0,rt=_t.length;st<rt;st++){const Rt=s.get(_t[st]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=o.createTexture(),h.memory.textures++)}if(C.samples>0&&ue(C)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let st=0;st<_t.length;st++){const rt=_t[st];Z.__webglColorRenderbuffer[st]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[st]);const Rt=u.convert(rt.format,rt.colorSpace),Dt=u.convert(rt.type),Tt=N(rt.internalFormat,Rt,Dt,rt.normalized,rt.colorSpace,C.isXRRenderTarget===!0),yt=Qe(C);o.renderbufferStorageMultisample(o.RENDERBUFFER,yt,Tt,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.RENDERBUFFER,Z.__webglColorRenderbuffer[st])}o.bindRenderbuffer(o.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),Ge(Z.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Et){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),Kt(o.TEXTURE_CUBE_MAP,y);for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0)for(let rt=0;rt<y.mipmaps.length;rt++)Zt(Z.__webglFramebuffer[st][rt],C,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+st,rt);else Zt(Z.__webglFramebuffer[st],C,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);S(y)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(At){for(let st=0,rt=_t.length;st<rt;st++){const Rt=_t[st],Dt=s.get(Rt);let Tt=o.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Tt=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Tt,Dt.__webglTexture),Kt(Tt,Rt),Zt(Z.__webglFramebuffer,C,Rt,o.COLOR_ATTACHMENT0+st,Tt,0),S(Rt)&&D(Tt)}i.unbindTexture()}else{let st=o.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(st,dt.__webglTexture),Kt(st,y),y.mipmaps&&y.mipmaps.length>0)for(let rt=0;rt<y.mipmaps.length;rt++)Zt(Z.__webglFramebuffer[rt],C,y,o.COLOR_ATTACHMENT0,st,rt);else Zt(Z.__webglFramebuffer,C,y,o.COLOR_ATTACHMENT0,st,0);S(y)&&D(st),i.unbindTexture()}C.depthBuffer&&me(C)}function en(C){const y=C.textures;for(let Z=0,dt=y.length;Z<dt;Z++){const _t=y[Z];if(S(_t)){const Et=O(C),At=s.get(_t).__webglTexture;i.bindTexture(Et,At),D(Et),i.unbindTexture()}}}const ke=[],Sn=[];function G(C){if(C.samples>0){if(ue(C)===!1){const y=C.textures,Z=C.width,dt=C.height;let _t=o.COLOR_BUFFER_BIT;const Et=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=s.get(C),st=y.length>1;if(st)for(let Rt=0;Rt<y.length;Rt++)i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const rt=C.texture.mipmaps;rt&&rt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Rt=0;Rt<y.length;Rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),st){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,At.__webglColorRenderbuffer[Rt]);const Dt=s.get(y[Rt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Dt,0)}o.blitFramebuffer(0,0,Z,dt,0,0,Z,dt,_t,o.NEAREST),m===!0&&(ke.length=0,Sn.length=0,ke.push(o.COLOR_ATTACHMENT0+Rt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ke.push(Et),Sn.push(Et),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Sn)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ke))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),st)for(let Rt=0;Rt<y.length;Rt++){i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,At.__webglColorRenderbuffer[Rt]);const Dt=s.get(y[Rt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,Dt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&m){const y=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function Qe(C){return Math.min(l.maxSamples,C.samples)}function ue(C){const y=s.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Pe(C){const y=h.render.frame;x.get(C)!==y&&(x.set(C,y),C.update())}function St(C,y){const Z=C.colorSpace,dt=C.format,_t=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==Lc&&Z!==$a&&(xe.getTransfer(Z)===Oe?(dt!==Ti||_t!==di)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Me("WebGLTextures: Unsupported texture color space:",Z)),y}function Ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=U,this.resetTextureUnits=lt,this.getTextureUnits=ct,this.setTextureUnits=W,this.setTexture2D=it,this.setTexture2DArray=pt,this.setTexture3D=vt,this.setTextureCube=Ut,this.rebindTextures=Ce,this.setupRenderTarget=re,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Zt,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function SA(o,e){function i(s,l=$a){let u;const h=xe.getTransfer(l);if(s===di)return o.UNSIGNED_BYTE;if(s===Ed)return o.UNSIGNED_SHORT_4_4_4_4;if(s===yd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===L_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===N_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===w_)return o.BYTE;if(s===U_)return o.SHORT;if(s===Io)return o.UNSIGNED_SHORT;if(s===Md)return o.INT;if(s===zi)return o.UNSIGNED_INT;if(s===Ni)return o.FLOAT;if(s===pa)return o.HALF_FLOAT;if(s===O_)return o.ALPHA;if(s===P_)return o.RGB;if(s===Ti)return o.RGBA;if(s===ma)return o.DEPTH_COMPONENT;if(s===Ds)return o.DEPTH_STENCIL;if(s===F_)return o.RED;if(s===Td)return o.RED_INTEGER;if(s===Us)return o.RG;if(s===bd)return o.RG_INTEGER;if(s===Ad)return o.RGBA_INTEGER;if(s===bc||s===Ac||s===Rc||s===Cc)if(h===Oe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===bc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===bc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ac)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hh||s===Gh||s===Vh||s===Xh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Hh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kh||s===Wh||s===qh||s===Yh||s===Zh||s===wc||s===Kh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===kh||s===Wh)return h===Oe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===qh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===Yh)return u.COMPRESSED_R11_EAC;if(s===Zh)return u.COMPRESSED_SIGNED_R11_EAC;if(s===wc)return u.COMPRESSED_RG11_EAC;if(s===Kh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===jh||s===Qh||s===Jh||s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===jh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$h)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===td)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ed)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nd)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===id)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ad)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sd)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rd)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===od)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ld)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cd)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ud||s===fd||s===hd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===ud)return h===Oe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dd||s===pd||s===Uc||s===md)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===dd)return u.COMPRESSED_RED_RGTC1_EXT;if(s===pd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Uc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===md)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ho?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const MA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new q_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ii({vertexShader:MA,fragmentShader:EA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ga(new zc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TA extends Ns{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,x=null,v=null,_=null,E=null,R=null;const w=typeof XRWebGLBinding<"u",M=new yA,S={},D=i.getContextAttributes();let O=null,N=null;const k=[],L=[],V=new He;let A=null;const P=new Ei;P.viewport=new rn;const Y=new Ei;Y.viewport=new rn;const z=[P,Y],K=new OM;let lt=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let Lt=k[ft];return Lt===void 0&&(Lt=new sh,k[ft]=Lt),Lt.getTargetRaySpace()},this.getControllerGrip=function(ft){let Lt=k[ft];return Lt===void 0&&(Lt=new sh,k[ft]=Lt),Lt.getGripSpace()},this.getHand=function(ft){let Lt=k[ft];return Lt===void 0&&(Lt=new sh,k[ft]=Lt),Lt.getHandSpace()};function W(ft){const Lt=L.indexOf(ft.inputSource);if(Lt===-1)return;const Mt=k[Lt];Mt!==void 0&&(Mt.update(ft.inputSource,ft.frame,p||h),Mt.dispatchEvent({type:ft.type,data:ft.inputSource}))}function U(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",B);for(let ft=0;ft<k.length;ft++){const Lt=L[ft];Lt!==null&&(L[ft]=null,k[ft].disconnect(Lt))}lt=null,ct=null,M.reset();for(const ft in S)delete S[ft];e.setRenderTarget(O),E=null,_=null,v=null,l=null,N=null,Kt.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(V.width,V.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){u=ft,s.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){d=ft,s.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(ft){p=ft},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(ft){if(l=ft,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",U),l.addEventListener("inputsourceschange",B),D.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(V),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Wt=null,te=null;D.depth&&(te=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=D.stencil?Ds:ma,Wt=D.stencil?Ho:zi);const Zt={colorFormat:i.RGBA8,depthFormat:te,scaleFactor:u};v=this.getBinding(),_=v.createProjectionLayer(Zt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new Fi(_.textureWidth,_.textureHeight,{format:Ti,type:di,depthTexture:new Ur(_.textureWidth,_.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Mt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Fi(E.framebufferWidth,E.framebufferHeight,{format:Ti,type:di,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Kt.setContext(l),Kt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function B(ft){for(let Lt=0;Lt<ft.removed.length;Lt++){const Mt=ft.removed[Lt],Wt=L.indexOf(Mt);Wt>=0&&(L[Wt]=null,k[Wt].disconnect(Mt))}for(let Lt=0;Lt<ft.added.length;Lt++){const Mt=ft.added[Lt];let Wt=L.indexOf(Mt);if(Wt===-1){for(let Zt=0;Zt<k.length;Zt++)if(Zt>=L.length){L.push(Mt),Wt=Zt;break}else if(L[Zt]===null){L[Zt]=Mt,Wt=Zt;break}if(Wt===-1)break}const te=k[Wt];te&&te.connect(Mt)}}const it=new nt,pt=new nt;function vt(ft,Lt,Mt){it.setFromMatrixPosition(Lt.matrixWorld),pt.setFromMatrixPosition(Mt.matrixWorld);const Wt=it.distanceTo(pt),te=Lt.projectionMatrix.elements,Zt=Mt.projectionMatrix.elements,Ge=te[14]/(te[10]-1),ce=te[14]/(te[10]+1),me=(te[9]+1)/te[5],Ce=(te[9]-1)/te[5],re=(te[8]-1)/te[0],en=(Zt[8]+1)/Zt[0],ke=Ge*re,Sn=Ge*en,G=Wt/(-re+en),Qe=G*-re;if(Lt.matrixWorld.decompose(ft.position,ft.quaternion,ft.scale),ft.translateX(Qe),ft.translateZ(G),ft.matrixWorld.compose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldInverse.copy(ft.matrixWorld).invert(),te[10]===-1)ft.projectionMatrix.copy(Lt.projectionMatrix),ft.projectionMatrixInverse.copy(Lt.projectionMatrixInverse);else{const ue=Ge+G,Pe=ce+G,St=ke-Qe,Ye=Sn+(Wt-Qe),C=me*ce/Pe*ue,y=Ce*ce/Pe*ue;ft.projectionMatrix.makePerspective(St,Ye,C,y,ue,Pe),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert()}}function Ut(ft,Lt){Lt===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(Lt.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(l===null)return;let Lt=ft.near,Mt=ft.far;M.texture!==null&&(M.depthNear>0&&(Lt=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),K.near=Y.near=P.near=Lt,K.far=Y.far=P.far=Mt,(lt!==K.near||ct!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),lt=K.near,ct=K.far),K.layers.mask=ft.layers.mask|6,P.layers.mask=K.layers.mask&-5,Y.layers.mask=K.layers.mask&-3;const Wt=ft.parent,te=K.cameras;Ut(K,Wt);for(let Zt=0;Zt<te.length;Zt++)Ut(te[Zt],Wt);te.length===2?vt(K,P,Y):K.projectionMatrix.copy(P.projectionMatrix),Ct(ft,K,Wt)};function Ct(ft,Lt,Mt){Mt===null?ft.matrix.copy(Lt.matrixWorld):(ft.matrix.copy(Mt.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(Lt.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(Lt.projectionMatrix),ft.projectionMatrixInverse.copy(Lt.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=_d*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(ft){m=ft,_!==null&&(_.fixedFoveation=ft),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ft)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(ft){return S[ft]};let Gt=null;function $t(ft,Lt){if(x=Lt.getViewerPose(p||h),R=Lt,x!==null){const Mt=x.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let Wt=!1;Mt.length!==K.cameras.length&&(K.cameras.length=0,Wt=!0);for(let ce=0;ce<Mt.length;ce++){const me=Mt[ce];let Ce=null;if(E!==null)Ce=E.getViewport(me);else{const en=v.getViewSubImage(_,me);Ce=en.viewport,ce===0&&(e.setRenderTargetTextures(N,en.colorTexture,en.depthStencilTexture),e.setRenderTarget(N))}let re=z[ce];re===void 0&&(re=new Ei,re.layers.enable(ce),re.viewport=new rn,z[ce]=re),re.matrix.fromArray(me.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(me.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ce===0&&(K.matrix.copy(re.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Wt===!0&&K.cameras.push(re)}const te=l.enabledFeatures;if(te&&te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const ce=v.getDepthInformation(Mt[0]);ce&&ce.isValid&&ce.texture&&M.init(ce,l.renderState)}if(te&&te.includes("camera-access")&&w){e.state.unbindTexture(),v=s.getBinding();for(let ce=0;ce<Mt.length;ce++){const me=Mt[ce].camera;if(me){let Ce=S[me];Ce||(Ce=new q_,S[me]=Ce);const re=v.getCameraImage(me);Ce.sourceTexture=re}}}}for(let Mt=0;Mt<k.length;Mt++){const Wt=L[Mt],te=k[Mt];Wt!==null&&te!==void 0&&te.update(Wt,Lt,p||h)}Gt&&Gt(ft,Lt),Lt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Lt}),R=null}const Kt=new j_;Kt.setAnimationLoop($t),this.setAnimationLoop=function(ft){Gt=ft},this.dispose=function(){}}}const bA=new mn,iv=new ie;iv.set(-1,0,0,0,1,0,0,0,1);function AA(o,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,Y_(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,D,O,N){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(M,S):S.isMeshLambertMaterial?(u(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(M,S),v(M,S)):S.isMeshPhongMaterial?(u(M,S),x(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(M,S),_(M,S),S.isMeshPhysicalMaterial&&E(M,S,N)):S.isMeshMatcapMaterial?(u(M,S),R(M,S)):S.isMeshDepthMaterial?u(M,S):S.isMeshDistanceMaterial?(u(M,S),w(M,S)):S.isMeshNormalMaterial?u(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,D,O):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Vn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Vn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const D=e.get(S),O=D.envMap,N=D.envMapRotation;O&&(M.envMap.value=O,M.envMapRotation.value.setFromMatrix4(bA.makeRotationFromEuler(N)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(iv),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,D,O){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*D,M.scale.value=O*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function x(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function _(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function E(M,S,D){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Vn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const D=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function RA(o,e,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,O){const N=O.program;s.uniformBlockBinding(D,N)}function p(D,O){let N=l[D.id];N===void 0&&(R(D),N=x(D),l[D.id]=N,D.addEventListener("dispose",M));const k=O.program;s.updateUBOMapping(D,k);const L=e.render.frame;u[D.id]!==L&&(_(D),u[D.id]=L)}function x(D){const O=v();D.__bindingPointIndex=O;const N=o.createBuffer(),k=D.__size,L=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,k,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,N),N}function v(){for(let D=0;D<d;D++)if(h.indexOf(D)===-1)return h.push(D),D;return Me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const O=l[D.id],N=D.uniforms,k=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let L=0,V=N.length;L<V;L++){const A=Array.isArray(N[L])?N[L]:[N[L]];for(let P=0,Y=A.length;P<Y;P++){const z=A[P];if(E(z,L,P,k)===!0){const K=z.__offset,lt=Array.isArray(z.value)?z.value:[z.value];let ct=0;for(let W=0;W<lt.length;W++){const U=lt[W],B=w(U);typeof U=="number"||typeof U=="boolean"?(z.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,K+ct,z.__data)):U.isMatrix3?(z.__data[0]=U.elements[0],z.__data[1]=U.elements[1],z.__data[2]=U.elements[2],z.__data[3]=0,z.__data[4]=U.elements[3],z.__data[5]=U.elements[4],z.__data[6]=U.elements[5],z.__data[7]=0,z.__data[8]=U.elements[6],z.__data[9]=U.elements[7],z.__data[10]=U.elements[8],z.__data[11]=0):ArrayBuffer.isView(U)?z.__data.set(new U.constructor(U.buffer,U.byteOffset,z.__data.length)):(U.toArray(z.__data,ct),ct+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(D,O,N,k){const L=D.value,V=O+"_"+N;if(k[V]===void 0)return typeof L=="number"||typeof L=="boolean"?k[V]=L:ArrayBuffer.isView(L)?k[V]=L.slice():k[V]=L.clone(),!0;{const A=k[V];if(typeof L=="number"||typeof L=="boolean"){if(A!==L)return k[V]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(A.equals(L)===!1)return A.copy(L),!0}}return!1}function R(D){const O=D.uniforms;let N=0;const k=16;for(let V=0,A=O.length;V<A;V++){const P=Array.isArray(O[V])?O[V]:[O[V]];for(let Y=0,z=P.length;Y<z;Y++){const K=P[Y],lt=Array.isArray(K.value)?K.value:[K.value];for(let ct=0,W=lt.length;ct<W;ct++){const U=lt[ct],B=w(U),it=N%k,pt=it%B.boundary,vt=it+pt;N+=pt,vt!==0&&k-vt<B.storage&&(N+=k-vt),K.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=N,N+=B.storage}}}const L=N%k;return L>0&&(N+=k-L),D.__size=N,D.__cache={},this}function w(D){const O={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(O.boundary=4,O.storage=4):D.isVector2?(O.boundary=8,O.storage=8):D.isVector3||D.isColor?(O.boundary=16,O.storage=12):D.isVector4?(O.boundary=16,O.storage=16):D.isMatrix3?(O.boundary=48,O.storage=48):D.isMatrix4?(O.boundary=64,O.storage=64):D.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(O.boundary=16,O.storage=D.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",D),O}function M(D){const O=D.target;O.removeEventListener("dispose",M);const N=h.indexOf(O.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function S(){for(const D in l)o.deleteBuffer(l[D]);h=[],l={},u={}}return{bind:m,update:p,dispose:S}}const CA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ui=null;function DA(){return Ui===null&&(Ui=new vM(CA,16,16,Us,pa),Ui.name="DFG_LUT",Ui.minFilter=Un,Ui.magFilter=Un,Ui.wrapS=ua,Ui.wrapT=ua,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}class BA{constructor(e={}){const{canvas:i=KS(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:E=di}=e;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=h;const w=E,M=new Set([Ad,bd,Td]),S=new Set([di,zi,Io,Ho,Ed,yd]),D=new Uint32Array(4),O=new Int32Array(4),N=new nt;let k=null,L=null;const V=[],A=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let z=!1,K=null;this._outputColorSpace=hi;let lt=0,ct=0,W=null,U=-1,B=null;const it=new rn,pt=new rn;let vt=null;const Ut=new Ie(0);let Ct=0,Gt=i.width,$t=i.height,Kt=1,ft=null,Lt=null;const Mt=new rn(0,0,Gt,$t),Wt=new rn(0,0,Gt,$t);let te=!1;const Zt=new k_;let Ge=!1,ce=!1;const me=new mn,Ce=new nt,re=new rn,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Sn(){return W===null?Kt:1}let G=s;function Qe(T,X){return i.getContext(T,X)}try{const T={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Sd}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Vt,!1),i.addEventListener("webglcontextcreationerror",Qt,!1),G===null){const X="webgl2";if(G=Qe(X,T),G===null)throw Qe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Me("WebGLRenderer: "+T.message),T}let ue,Pe,St,Ye,C,y,Z,dt,_t,Et,At,st,rt,Rt,Dt,Tt,yt,ee,ne,fe,I,xt,ut;function Ot(){ue=new DT(G),ue.init(),I=new SA(G,ue),Pe=new MT(G,ue,e,I),St=new vA(G,ue),Pe.reversedDepthBuffer&&_&&St.buffers.depth.setReversed(!0),Ye=new LT(G),C=new aA,y=new xA(G,ue,St,C,Pe,I,Ye),Z=new CT(Y),dt=new FM(G),xt=new xT(G,dt),_t=new wT(G,dt,Ye,xt),Et=new OT(G,_t,dt,xt,Ye),ee=new NT(G,Pe,y),Dt=new ET(C),At=new iA(Y,Z,ue,Pe,xt,Dt),st=new AA(Y,C),rt=new rA,Rt=new hA(ue),yt=new vT(Y,Z,St,Et,R,m),Tt=new _A(Y,Et,Pe),ut=new RA(G,Ye,Pe,St),ne=new ST(G,ue,Ye),fe=new UT(G,ue,Ye),Ye.programs=At.programs,Y.capabilities=Pe,Y.extensions=ue,Y.properties=C,Y.renderLists=rt,Y.shadowMap=Tt,Y.state=St,Y.info=Ye}Ot(),w!==di&&(P=new FT(w,i.width,i.height,l,u));const bt=new TA(Y,G);this.xr=bt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Kt},this.setPixelRatio=function(T){T!==void 0&&(Kt=T,this.setSize(Gt,$t,!1))},this.getSize=function(T){return T.set(Gt,$t)},this.setSize=function(T,X,tt=!0){if(bt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Gt=T,$t=X,i.width=Math.floor(T*Kt),i.height=Math.floor(X*Kt),tt===!0&&(i.style.width=T+"px",i.style.height=X+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(Gt*Kt,$t*Kt).floor()},this.setDrawingBufferSize=function(T,X,tt){Gt=T,$t=X,Kt=tt,i.width=Math.floor(T*tt),i.height=Math.floor(X*tt),this.setViewport(0,0,T,X)},this.setEffects=function(T){if(w===di){Me("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let X=0;X<T.length;X++)if(T[X].isOutputPass===!0){Jt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(it)},this.getViewport=function(T){return T.copy(Mt)},this.setViewport=function(T,X,tt,J){T.isVector4?Mt.set(T.x,T.y,T.z,T.w):Mt.set(T,X,tt,J),St.viewport(it.copy(Mt).multiplyScalar(Kt).round())},this.getScissor=function(T){return T.copy(Wt)},this.setScissor=function(T,X,tt,J){T.isVector4?Wt.set(T.x,T.y,T.z,T.w):Wt.set(T,X,tt,J),St.scissor(pt.copy(Wt).multiplyScalar(Kt).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(T){St.setScissorTest(te=T)},this.setOpaqueSort=function(T){ft=T},this.setTransparentSort=function(T){Lt=T},this.getClearColor=function(T){return T.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,tt=!0){let J=0;if(T){let $=!1;if(W!==null){const Nt=W.texture.format;$=M.has(Nt)}if($){const Nt=W.texture.type,Bt=S.has(Nt),wt=yt.getClearColor(),It=yt.getClearAlpha(),zt=wt.r,qt=wt.g,ae=wt.b;Bt?(D[0]=zt,D[1]=qt,D[2]=ae,D[3]=It,G.clearBufferuiv(G.COLOR,0,D)):(O[0]=zt,O[1]=qt,O[2]=ae,O[3]=It,G.clearBufferiv(G.COLOR,0,O))}else J|=G.COLOR_BUFFER_BIT}X&&(J|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(J|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&G.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),K=T},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Vt,!1),i.removeEventListener("webglcontextcreationerror",Qt,!1),yt.dispose(),rt.dispose(),Rt.dispose(),C.dispose(),Z.dispose(),Et.dispose(),xt.dispose(),ut.dispose(),At.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Fr),bt.removeEventListener("sessionend",Br),Rn.stop()};function gt(T){T.preventDefault(),U0("WebGLRenderer: Context Lost."),z=!0}function Vt(){U0("WebGLRenderer: Context Restored."),z=!1;const T=Ye.autoReset,X=Tt.enabled,tt=Tt.autoUpdate,J=Tt.needsUpdate,$=Tt.type;Ot(),Ye.autoReset=T,Tt.enabled=X,Tt.autoUpdate=tt,Tt.needsUpdate=J,Tt.type=$}function Qt(T){Me("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Je(T){const X=T.target;X.removeEventListener("dispose",Je),be(X)}function be(T){ni(T),C.remove(T)}function ni(T){const X=C.get(T).programs;X!==void 0&&(X.forEach(function(tt){At.releaseProgram(tt)}),T.isShaderMaterial&&At.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,tt,J,$,Nt){X===null&&(X=en);const Bt=$.isMesh&&$.matrixWorld.determinant()<0,wt=Sa(T,X,tt,J,$);St.setMaterial(J,Bt);let It=tt.index,zt=1;if(J.wireframe===!0){if(It=_t.getWireframeAttribute(tt),It===void 0)return;zt=2}const qt=tt.drawRange,ae=tt.attributes.position;let kt=qt.start*zt,Ee=(qt.start+qt.count)*zt;Nt!==null&&(kt=Math.max(kt,Nt.start*zt),Ee=Math.min(Ee,(Nt.start+Nt.count)*zt)),It!==null?(kt=Math.max(kt,0),Ee=Math.min(Ee,It.count)):ae!=null&&(kt=Math.max(kt,0),Ee=Math.min(Ee,ae.count));const Ze=Ee-kt;if(Ze<0||Ze===1/0)return;xt.setup($,J,wt,tt,It);let Ve,De=ne;if(It!==null&&(Ve=dt.get(It),De=fe,De.setIndex(Ve)),$.isMesh)J.wireframe===!0?(St.setLineWidth(J.wireframeLinewidth*Sn()),De.setMode(G.LINES)):De.setMode(G.TRIANGLES);else if($.isLine){let we=J.linewidth;we===void 0&&(we=1),St.setLineWidth(we*Sn()),$.isLineSegments?De.setMode(G.LINES):$.isLineLoop?De.setMode(G.LINE_LOOP):De.setMode(G.LINE_STRIP)}else $.isPoints?De.setMode(G.POINTS):$.isSprite&&De.setMode(G.TRIANGLES);if($.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))De.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const we=$._multiDrawStarts,Ft=$._multiDrawCounts,Cn=$._multiDrawCount,he=It?dt.get(It).bytesPerElement:1,dn=C.get(J).currentProgram.getUniforms();for(let kn=0;kn<Cn;kn++)dn.setValue(G,"_gl_DrawID",kn),De.render(we[kn]/he,Ft[kn])}else if($.isInstancedMesh)De.renderInstances(kt,Ze,$.count);else if(tt.isInstancedBufferGeometry){const we=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Ft=Math.min(tt.instanceCount,we);De.renderInstances(kt,Ze,Ft)}else De.render(kt,Ze)};function Xn(T,X,tt){T.transparent===!0&&T.side===ca&&T.forceSinglePass===!1?(T.side=Vn,T.needsUpdate=!0,Os(T,X,tt),T.side=es,T.needsUpdate=!0,Os(T,X,tt),T.side=ca):Os(T,X,tt)}this.compile=function(T,X,tt=null){tt===null&&(tt=T),L=Rt.get(tt),L.init(X),A.push(L),tt.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),T!==tt&&T.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),L.setupLights();const J=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Nt=$.material;if(Nt)if(Array.isArray(Nt))for(let Bt=0;Bt<Nt.length;Bt++){const wt=Nt[Bt];Xn(wt,tt,$),J.add(wt)}else Xn(Nt,tt,$),J.add(Nt)}),L=A.pop(),J},this.compileAsync=function(T,X,tt=null){const J=this.compile(T,X,tt);return new Promise($=>{function Nt(){if(J.forEach(function(Bt){C.get(Bt).currentProgram.isReady()&&J.delete(Bt)}),J.size===0){$(T);return}setTimeout(Nt,10)}ue.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let ns=null;function Pr(T){ns&&ns(T)}function Fr(){Rn.stop()}function Br(){Rn.start()}const Rn=new j_;Rn.setAnimationLoop(Pr),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(T){ns=T,bt.setAnimationLoop(T),T===null?Rn.stop():Rn.start()},bt.addEventListener("sessionstart",Fr),bt.addEventListener("sessionend",Br),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){Me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;K!==null&&K.renderStart(T,X);const tt=bt.enabled===!0&&bt.isPresenting===!0,J=P!==null&&(W===null||tt)&&P.begin(Y,W);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(X),X=bt.getCamera()),T.isScene===!0&&T.onBeforeRender(Y,T,X,W),L=Rt.get(T,A.length),L.init(X),L.state.textureUnits=y.getTextureUnits(),A.push(L),me.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Zt.setFromProjectionMatrix(me,Oi,X.reversedDepth),ce=this.localClippingEnabled,Ge=Dt.init(this.clippingPlanes,ce),k=rt.get(T,V.length),k.init(),V.push(k),bt.enabled===!0&&bt.isPresenting===!0){const Bt=Y.xr.getDepthSensingMesh();Bt!==null&&nn(Bt,X,-1/0,Y.sortObjects)}nn(T,X,0,Y.sortObjects),k.finish(),Y.sortObjects===!0&&k.sort(ft,Lt),ke=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ke&&yt.addToRenderList(k,T),this.info.render.frame++,Ge===!0&&Dt.beginShadows();const $=L.state.shadowsArray;if(Tt.render($,T,X),Ge===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&P.hasRenderPass())===!1){const Bt=k.opaque,wt=k.transmissive;if(L.setupLights(),X.isArrayCamera){const It=X.cameras;if(wt.length>0)for(let zt=0,qt=It.length;zt<qt;zt++){const ae=It[zt];Hi(Bt,wt,T,ae)}ke&&yt.render(T);for(let zt=0,qt=It.length;zt<qt;zt++){const ae=It[zt];Mn(k,T,ae,ae.viewport)}}else wt.length>0&&Hi(Bt,wt,T,X),ke&&yt.render(T),Mn(k,T,X)}W!==null&&ct===0&&(y.updateMultisampleRenderTarget(W),y.updateRenderTargetMipmap(W)),J&&P.end(Y),T.isScene===!0&&T.onAfterRender(Y,T,X),xt.resetDefaultState(),U=-1,B=null,A.pop(),A.length>0?(L=A[A.length-1],y.setTextureUnits(L.state.textureUnits),Ge===!0&&Dt.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,V.pop(),V.length>0?k=V[V.length-1]:k=null,K!==null&&K.renderEnd()};function nn(T,X,tt,J){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)tt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLightProbeGrid)L.pushLightProbeGrid(T);else if(T.isLight)L.pushLight(T),T.castShadow&&L.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Zt.intersectsSprite(T)){J&&re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const Bt=Et.update(T),wt=T.material;wt.visible&&k.push(T,Bt,wt,tt,re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Zt.intersectsObject(T))){const Bt=Et.update(T),wt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),re.copy(T.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),re.copy(Bt.boundingSphere.center)),re.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(wt)){const It=Bt.groups;for(let zt=0,qt=It.length;zt<qt;zt++){const ae=It[zt],kt=wt[ae.materialIndex];kt&&kt.visible&&k.push(T,Bt,kt,tt,re.z,ae)}}else wt.visible&&k.push(T,Bt,wt,tt,re.z,null)}}const Nt=T.children;for(let Bt=0,wt=Nt.length;Bt<wt;Bt++)nn(Nt[Bt],X,tt,J)}function Mn(T,X,tt,J){const{opaque:$,transmissive:Nt,transparent:Bt}=T;L.setupLightsView(tt),Ge===!0&&Dt.setGlobalState(Y.clippingPlanes,tt),J&&St.viewport(it.copy(J)),$.length>0&&va($,X,tt),Nt.length>0&&va(Nt,X,tt),Bt.length>0&&va(Bt,X,tt),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Hi(T,X,tt,J){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[J.id]===void 0){const kt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[J.id]=new Fi(1,1,{generateMipmaps:!0,type:kt?pa:di,minFilter:Cs,samples:Math.max(4,Pe.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace})}const Nt=L.state.transmissionRenderTarget[J.id],Bt=J.viewport||it;Nt.setSize(Bt.z*Y.transmissionResolutionScale,Bt.w*Y.transmissionResolutionScale);const wt=Y.getRenderTarget(),It=Y.getActiveCubeFace(),zt=Y.getActiveMipmapLevel();Y.setRenderTarget(Nt),Y.getClearColor(Ut),Ct=Y.getClearAlpha(),Ct<1&&Y.setClearColor(16777215,.5),Y.clear(),ke&&yt.render(tt);const qt=Y.toneMapping;Y.toneMapping=Pi;const ae=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),L.setupLightsView(J),Ge===!0&&Dt.setGlobalState(Y.clippingPlanes,J),va(T,tt,J),y.updateMultisampleRenderTarget(Nt),y.updateRenderTargetMipmap(Nt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Ee=0,Ze=X.length;Ee<Ze;Ee++){const Ve=X[Ee],{object:De,geometry:we,material:Ft,group:Cn}=Ve;if(Ft.side===ca&&De.layers.test(J.layers)){const he=Ft.side;Ft.side=Vn,Ft.needsUpdate=!0,Wo(De,tt,J,we,Ft,Cn),Ft.side=he,Ft.needsUpdate=!0,kt=!0}}kt===!0&&(y.updateMultisampleRenderTarget(Nt),y.updateRenderTargetMipmap(Nt))}Y.setRenderTarget(wt,It,zt),Y.setClearColor(Ut,Ct),ae!==void 0&&(J.viewport=ae),Y.toneMapping=qt}function va(T,X,tt){const J=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Nt=T.length;$<Nt;$++){const Bt=T[$],{object:wt,geometry:It,group:zt}=Bt;let qt=Bt.material;qt.allowOverride===!0&&J!==null&&(qt=J),wt.layers.test(tt.layers)&&Wo(wt,X,tt,It,qt,zt)}}function Wo(T,X,tt,J,$,Nt){T.onBeforeRender(Y,X,tt,J,$,Nt),T.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(Y,X,tt,J,T,Nt),$.transparent===!0&&$.side===ca&&$.forceSinglePass===!1?($.side=Vn,$.needsUpdate=!0,Y.renderBufferDirect(tt,X,J,$,T,Nt),$.side=es,$.needsUpdate=!0,Y.renderBufferDirect(tt,X,J,$,T,Nt),$.side=ca):Y.renderBufferDirect(tt,X,J,$,T,Nt),T.onAfterRender(Y,X,tt,J,$,Nt)}function Os(T,X,tt){X.isScene!==!0&&(X=en);const J=C.get(T),$=L.state.lights,Nt=L.state.shadowsArray,Bt=$.state.version,wt=At.getParameters(T,$.state,Nt,X,tt,L.state.lightProbeGridArray),It=At.getProgramCacheKey(wt);let zt=J.programs;J.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,J.fog=X.fog;const qt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;J.envMap=Z.get(T.envMap||J.environment,qt),J.envMapRotation=J.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",Je),zt=new Map,J.programs=zt);let ae=zt.get(It);if(ae!==void 0){if(J.currentProgram===ae&&J.lightsStateVersion===Bt)return xa(T,wt),ae}else wt.uniforms=At.getUniforms(T),K!==null&&T.isNodeMaterial&&K.build(T,tt,wt),T.onBeforeCompile(wt,Y),ae=At.acquireProgram(wt,It),zt.set(It,ae),J.uniforms=wt.uniforms;const kt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=Dt.uniform),xa(T,wt),J.needsLights=is(T),J.lightsStateVersion=Bt,J.needsLights&&(kt.ambientLightColor.value=$.state.ambient,kt.lightProbe.value=$.state.probe,kt.directionalLights.value=$.state.directional,kt.directionalLightShadows.value=$.state.directionalShadow,kt.spotLights.value=$.state.spot,kt.spotLightShadows.value=$.state.spotShadow,kt.rectAreaLights.value=$.state.rectArea,kt.ltc_1.value=$.state.rectAreaLTC1,kt.ltc_2.value=$.state.rectAreaLTC2,kt.pointLights.value=$.state.point,kt.pointLightShadows.value=$.state.pointShadow,kt.hemisphereLights.value=$.state.hemi,kt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,kt.spotLightMatrix.value=$.state.spotLightMatrix,kt.spotLightMap.value=$.state.spotLightMap,kt.pointShadowMatrix.value=$.state.pointShadowMatrix),J.lightProbeGrid=L.state.lightProbeGridArray.length>0,J.currentProgram=ae,J.uniformsList=null,ae}function zr(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Dc.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function xa(T,X){const tt=C.get(T);tt.outputColorSpace=X.outputColorSpace,tt.batching=X.batching,tt.batchingColor=X.batchingColor,tt.instancing=X.instancing,tt.instancingColor=X.instancingColor,tt.instancingMorph=X.instancingMorph,tt.skinning=X.skinning,tt.morphTargets=X.morphTargets,tt.morphNormals=X.morphNormals,tt.morphColors=X.morphColors,tt.morphTargetsCount=X.morphTargetsCount,tt.numClippingPlanes=X.numClippingPlanes,tt.numIntersection=X.numClipIntersection,tt.vertexAlphas=X.vertexAlphas,tt.vertexTangents=X.vertexTangents,tt.toneMapping=X.toneMapping}function Ir(T,X){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;N.setFromMatrixPosition(X.matrixWorld);for(let tt=0,J=T.length;tt<J;tt++){const $=T[tt];if($.texture!==null&&$.boundingBox.containsPoint(N))return $}return null}function Sa(T,X,tt,J,$){X.isScene!==!0&&(X=en),y.resetTextureUnits();const Nt=X.fog,Bt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?X.environment:null,wt=W===null?Y.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:xe.workingColorSpace,It=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,zt=Z.get(J.envMap||Bt,It),qt=J.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ae=!!tt.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),kt=!!tt.morphAttributes.position,Ee=!!tt.morphAttributes.normal,Ze=!!tt.morphAttributes.color;let Ve=Pi;J.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ve=Y.toneMapping);const De=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,we=De!==void 0?De.length:0,Ft=C.get(J),Cn=L.state.lights;if(Ge===!0&&(ce===!0||T!==B)){const Re=T===B&&J.id===U;Dt.setState(J,T,Re)}let he=!1;J.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Cn.state.version||Ft.outputColorSpace!==wt||$.isBatchedMesh&&Ft.batching===!1||!$.isBatchedMesh&&Ft.batching===!0||$.isBatchedMesh&&Ft.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ft.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ft.instancing===!1||!$.isInstancedMesh&&Ft.instancing===!0||$.isSkinnedMesh&&Ft.skinning===!1||!$.isSkinnedMesh&&Ft.skinning===!0||$.isInstancedMesh&&Ft.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ft.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ft.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ft.instancingMorph===!1&&$.morphTexture!==null||Ft.envMap!==zt||J.fog===!0&&Ft.fog!==Nt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Dt.numPlanes||Ft.numIntersection!==Dt.numIntersection)||Ft.vertexAlphas!==qt||Ft.vertexTangents!==ae||Ft.morphTargets!==kt||Ft.morphNormals!==Ee||Ft.morphColors!==Ze||Ft.toneMapping!==Ve||Ft.morphTargetsCount!==we||!!Ft.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Ft.__version=J.version);let dn=Ft.currentProgram;he===!0&&(dn=Os(J,X,$),K&&J.isNodeMaterial&&K.onUpdateProgram(J,dn,Ft));let kn=!1,pi=!1,Wn=!1;const Ue=dn.getUniforms(),Ke=Ft.uniforms;if(St.useProgram(dn.program)&&(kn=!0,pi=!0,Wn=!0),J.id!==U&&(U=J.id,pi=!0),Ft.needsLights){const Re=Ir(L.state.lightProbeGridArray,$);Ft.lightProbeGrid!==Re&&(Ft.lightProbeGrid=Re,pi=!0)}if(kn||B!==T){St.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ue.setValue(G,"projectionMatrix",T.projectionMatrix),Ue.setValue(G,"viewMatrix",T.matrixWorldInverse);const bi=Ue.map.cameraPosition;bi!==void 0&&bi.setValue(G,Ce.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&Ue.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ue.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),B!==T&&(B=T,pi=!0,Wn=!0)}if(Ft.needsLights&&(Cn.state.directionalShadowMap.length>0&&Ue.setValue(G,"directionalShadowMap",Cn.state.directionalShadowMap,y),Cn.state.spotShadowMap.length>0&&Ue.setValue(G,"spotShadowMap",Cn.state.spotShadowMap,y),Cn.state.pointShadowMap.length>0&&Ue.setValue(G,"pointShadowMap",Cn.state.pointShadowMap,y)),$.isSkinnedMesh){Ue.setOptional(G,$,"bindMatrix"),Ue.setOptional(G,$,"bindMatrixInverse");const Re=$.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Ue.setValue(G,"boneTexture",Re.boneTexture,y))}$.isBatchedMesh&&(Ue.setOptional(G,$,"batchingTexture"),Ue.setValue(G,"batchingTexture",$._matricesTexture,y),Ue.setOptional(G,$,"batchingIdTexture"),Ue.setValue(G,"batchingIdTexture",$._indirectTexture,y),Ue.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&Ue.setValue(G,"batchingColorTexture",$._colorsTexture,y));const mi=tt.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&ee.update($,tt,dn),(pi||Ft.receiveShadow!==$.receiveShadow)&&(Ft.receiveShadow=$.receiveShadow,Ue.setValue(G,"receiveShadow",$.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&X.environment!==null&&(Ke.envMapIntensity.value=X.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=DA()),pi){if(Ue.setValue(G,"toneMappingExposure",Y.toneMappingExposure),Ft.needsLights&&Ma(Ke,Wn),Nt&&J.fog===!0&&st.refreshFogUniforms(Ke,Nt),st.refreshMaterialUniforms(Ke,J,Kt,$t,L.state.transmissionRenderTarget[T.id]),Ft.needsLights&&Ft.lightProbeGrid){const Re=Ft.lightProbeGrid;Ke.probesSH.value=Re.texture,Ke.probesMin.value.copy(Re.boundingBox.min),Ke.probesMax.value.copy(Re.boundingBox.max),Ke.probesResolution.value.copy(Re.resolution)}Dc.upload(G,zr(Ft),Ke,y)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Dc.upload(G,zr(Ft),Ke,y),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ue.setValue(G,"center",$.center),Ue.setValue(G,"modelViewMatrix",$.modelViewMatrix),Ue.setValue(G,"normalMatrix",$.normalMatrix),Ue.setValue(G,"modelMatrix",$.matrixWorld),J.uniformsGroups!==void 0){const Re=J.uniformsGroups;for(let bi=0,ya=Re.length;bi<ya;bi++){const as=Re[bi];ut.update(as,dn),ut.bind(as,dn)}}return dn}function Ma(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function is(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return ct},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(T,X,tt){const J=C.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),C.get(T.texture).__webglTexture=X,C.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:tt,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const tt=C.get(T);tt.__webglFramebuffer=X,tt.__useDefaultFramebuffer=X===void 0};const Ea=G.createFramebuffer();this.setRenderTarget=function(T,X=0,tt=0){W=T,lt=X,ct=tt;let J=null,$=!1,Nt=!1;if(T){const wt=C.get(T);if(wt.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(G.FRAMEBUFFER,wt.__webglFramebuffer),it.copy(T.viewport),pt.copy(T.scissor),vt=T.scissorTest,St.viewport(it),St.scissor(pt),St.setScissorTest(vt),U=-1;return}else if(wt.__webglFramebuffer===void 0)y.setupRenderTarget(T);else if(wt.__hasExternalTextures)y.rebindTextures(T,C.get(T.texture).__webglTexture,C.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const qt=T.depthTexture;if(wt.__boundDepthTexture!==qt){if(qt!==null&&C.has(qt)&&(T.width!==qt.image.width||T.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(T)}}const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Nt=!0);const zt=C.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(zt[X])?J=zt[X][tt]:J=zt[X],$=!0):T.samples>0&&y.useMultisampledRTT(T)===!1?J=C.get(T).__webglMultisampledFramebuffer:Array.isArray(zt)?J=zt[tt]:J=zt,it.copy(T.viewport),pt.copy(T.scissor),vt=T.scissorTest}else it.copy(Mt).multiplyScalar(Kt).floor(),pt.copy(Wt).multiplyScalar(Kt).floor(),vt=te;if(tt!==0&&(J=Ea),St.bindFramebuffer(G.FRAMEBUFFER,J)&&St.drawBuffers(T,J),St.viewport(it),St.scissor(pt),St.setScissorTest(vt),$){const wt=C.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,wt.__webglTexture,tt)}else if(Nt){const wt=X;for(let It=0;It<T.textures.length;It++){const zt=C.get(T.textures[It]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+It,zt.__webglTexture,tt,wt)}}else if(T!==null&&tt!==0){const wt=C.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wt.__webglTexture,tt)}U=-1},this.readRenderTargetPixels=function(T,X,tt,J,$,Nt,Bt,wt=0){if(!(T&&T.isWebGLRenderTarget)){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(It=It[Bt]),It){St.bindFramebuffer(G.FRAMEBUFFER,It);try{const zt=T.textures[wt],qt=zt.format,ae=zt.type;if(T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+wt),!Pe.textureFormatReadable(qt)){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(ae)){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-J&&tt>=0&&tt<=T.height-$&&G.readPixels(X,tt,J,$,I.convert(qt),I.convert(ae),Nt)}finally{const zt=W!==null?C.get(W).__webglFramebuffer:null;St.bindFramebuffer(G.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(T,X,tt,J,$,Nt,Bt,wt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(It=It[Bt]),It)if(X>=0&&X<=T.width-J&&tt>=0&&tt<=T.height-$){St.bindFramebuffer(G.FRAMEBUFFER,It);const zt=T.textures[wt],qt=zt.format,ae=zt.type;if(T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+wt),!Pe.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,kt),G.bufferData(G.PIXEL_PACK_BUFFER,Nt.byteLength,G.STREAM_READ),G.readPixels(X,tt,J,$,I.convert(qt),I.convert(ae),0);const Ee=W!==null?C.get(W).__webglFramebuffer:null;St.bindFramebuffer(G.FRAMEBUFFER,Ee);const Ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await jS(G,Ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,kt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Nt),G.deleteBuffer(kt),G.deleteSync(Ze),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,tt=0){const J=Math.pow(2,-tt),$=Math.floor(T.image.width*J),Nt=Math.floor(T.image.height*J),Bt=X!==null?X.x:0,wt=X!==null?X.y:0;y.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,tt,0,0,Bt,wt,$,Nt),St.unbindTexture()};const on=G.createFramebuffer(),qo=G.createFramebuffer();this.copyTextureToTexture=function(T,X,tt=null,J=null,$=0,Nt=0){let Bt,wt,It,zt,qt,ae,kt,Ee,Ze;const Ve=T.isCompressedTexture?T.mipmaps[Nt]:T.image;if(tt!==null)Bt=tt.max.x-tt.min.x,wt=tt.max.y-tt.min.y,It=tt.isBox3?tt.max.z-tt.min.z:1,zt=tt.min.x,qt=tt.min.y,ae=tt.isBox3?tt.min.z:0;else{const Ke=Math.pow(2,-$);Bt=Math.floor(Ve.width*Ke),wt=Math.floor(Ve.height*Ke),T.isDataArrayTexture?It=Ve.depth:T.isData3DTexture?It=Math.floor(Ve.depth*Ke):It=1,zt=0,qt=0,ae=0}J!==null?(kt=J.x,Ee=J.y,Ze=J.z):(kt=0,Ee=0,Ze=0);const De=I.convert(X.format),we=I.convert(X.type);let Ft;X.isData3DTexture?(y.setTexture3D(X,0),Ft=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(y.setTexture2DArray(X,0),Ft=G.TEXTURE_2D_ARRAY):(y.setTexture2D(X,0),Ft=G.TEXTURE_2D),St.activeTexture(G.TEXTURE0),St.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),St.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),St.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Cn=St.getParameter(G.UNPACK_ROW_LENGTH),he=St.getParameter(G.UNPACK_IMAGE_HEIGHT),dn=St.getParameter(G.UNPACK_SKIP_PIXELS),kn=St.getParameter(G.UNPACK_SKIP_ROWS),pi=St.getParameter(G.UNPACK_SKIP_IMAGES);St.pixelStorei(G.UNPACK_ROW_LENGTH,Ve.width),St.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ve.height),St.pixelStorei(G.UNPACK_SKIP_PIXELS,zt),St.pixelStorei(G.UNPACK_SKIP_ROWS,qt),St.pixelStorei(G.UNPACK_SKIP_IMAGES,ae);const Wn=T.isDataArrayTexture||T.isData3DTexture,Ue=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const Ke=C.get(T),mi=C.get(X),Re=C.get(Ke.__renderTarget),bi=C.get(mi.__renderTarget);St.bindFramebuffer(G.READ_FRAMEBUFFER,Re.__webglFramebuffer),St.bindFramebuffer(G.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let ya=0;ya<It;ya++)Wn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,C.get(T).__webglTexture,$,ae+ya),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,C.get(X).__webglTexture,Nt,Ze+ya)),G.blitFramebuffer(zt,qt,Bt,wt,kt,Ee,Bt,wt,G.DEPTH_BUFFER_BIT,G.NEAREST);St.bindFramebuffer(G.READ_FRAMEBUFFER,null),St.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||C.has(T)){const Ke=C.get(T),mi=C.get(X);St.bindFramebuffer(G.READ_FRAMEBUFFER,on),St.bindFramebuffer(G.DRAW_FRAMEBUFFER,qo);for(let Re=0;Re<It;Re++)Wn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ke.__webglTexture,$,ae+Re):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ke.__webglTexture,$),Ue?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,mi.__webglTexture,Nt,Ze+Re):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mi.__webglTexture,Nt),$!==0?G.blitFramebuffer(zt,qt,Bt,wt,kt,Ee,Bt,wt,G.COLOR_BUFFER_BIT,G.NEAREST):Ue?G.copyTexSubImage3D(Ft,Nt,kt,Ee,Ze+Re,zt,qt,Bt,wt):G.copyTexSubImage2D(Ft,Nt,kt,Ee,zt,qt,Bt,wt);St.bindFramebuffer(G.READ_FRAMEBUFFER,null),St.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ue?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Ft,Nt,kt,Ee,Ze,Bt,wt,It,De,we,Ve.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Ft,Nt,kt,Ee,Ze,Bt,wt,It,De,Ve.data):G.texSubImage3D(Ft,Nt,kt,Ee,Ze,Bt,wt,It,De,we,Ve):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Nt,kt,Ee,Bt,wt,De,we,Ve.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Nt,kt,Ee,Ve.width,Ve.height,De,Ve.data):G.texSubImage2D(G.TEXTURE_2D,Nt,kt,Ee,Bt,wt,De,we,Ve);St.pixelStorei(G.UNPACK_ROW_LENGTH,Cn),St.pixelStorei(G.UNPACK_IMAGE_HEIGHT,he),St.pixelStorei(G.UNPACK_SKIP_PIXELS,dn),St.pixelStorei(G.UNPACK_SKIP_ROWS,kn),St.pixelStorei(G.UNPACK_SKIP_IMAGES,pi),Nt===0&&X.generateMipmaps&&G.generateMipmap(Ft),St.unbindTexture()},this.initRenderTarget=function(T){C.get(T).__webglFramebuffer===void 0&&y.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?y.setTextureCube(T,0):T.isData3DTexture?y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?y.setTexture2DArray(T,0):y.setTexture2D(T,0),St.unbindTexture()},this.resetState=function(){lt=0,ct=0,W=null,St.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(e),i.unpackColorSpace=xe._getUnpackColorSpace()}}export{FA as C,Un as L,ga as M,K_ as O,zc as P,OA as S,PA as T,He as V,BA as W,NA as _,Ii as a,LA as c,UA as j};
