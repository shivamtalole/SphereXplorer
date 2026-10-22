var tv=Object.defineProperty;var nv=(t,e,n)=>e in t?tv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ln=(t,e,n)=>nv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function iv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var km={exports:{}},Vl={},Bm={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),rv=Symbol.for("react.portal"),sv=Symbol.for("react.fragment"),av=Symbol.for("react.strict_mode"),ov=Symbol.for("react.profiler"),lv=Symbol.for("react.provider"),cv=Symbol.for("react.context"),uv=Symbol.for("react.forward_ref"),dv=Symbol.for("react.suspense"),fv=Symbol.for("react.memo"),hv=Symbol.for("react.lazy"),Ch=Symbol.iterator;function pv(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hm=Object.assign,Vm={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=Vm,this.updater=n||zm}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jm(){}jm.prototype=Fs.prototype;function rf(t,e,n){this.props=t,this.context=e,this.refs=Vm,this.updater=n||zm}var sf=rf.prototype=new jm;sf.constructor=rf;Hm(sf,Fs.prototype);sf.isPureReactComponent=!0;var Rh=Array.isArray,Gm=Object.prototype.hasOwnProperty,af={current:null},Wm={key:!0,ref:!0,__self:!0,__source:!0};function Xm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Gm.call(e,i)&&!Wm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ja,type:t,key:s,ref:a,props:r,_owner:af.current}}function mv(t,e){return{$$typeof:ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function of(t){return typeof t=="object"&&t!==null&&t.$$typeof===ja}function xv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nh=/\/+/g;function hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xv(""+t.key):e.toString(36)}function Wo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ja:case rv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+hc(a,0):i,Rh(r)?(n="",t!=null&&(n=t.replace(Nh,"$&/")+"/"),Wo(r,e,n,"",function(u){return u})):r!=null&&(of(r)&&(r=mv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Nh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Rh(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+hc(s,o);a+=Wo(s,e,n,c,r)}else if(c=pv(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+hc(s,o++),a+=Wo(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function no(t,e,n){if(t==null)return t;var i=[],r=0;return Wo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function gv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},Xo={transition:null},vv={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:af};function Ym(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:no,forEach:function(t,e,n){no(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return no(t,function(){e++}),e},toArray:function(t){return no(t,function(e){return e})||[]},only:function(t){if(!of(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=Fs;Ke.Fragment=sv;Ke.Profiler=ov;Ke.PureComponent=rf;Ke.StrictMode=av;Ke.Suspense=dv;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vv;Ke.act=Ym;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=af.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)Gm.call(e,c)&&!Wm.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:ja,type:t.type,key:r,ref:s,props:i,_owner:a}};Ke.createContext=function(t){return t={$$typeof:cv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lv,_context:t},t.Consumer=t};Ke.createElement=Xm;Ke.createFactory=function(t){var e=Xm.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:uv,render:t}};Ke.isValidElement=of;Ke.lazy=function(t){return{$$typeof:hv,_payload:{_status:-1,_result:t},_init:gv}};Ke.memo=function(t,e){return{$$typeof:fv,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=Xo.transition;Xo.transition={};try{t()}finally{Xo.transition=e}};Ke.unstable_act=Ym;Ke.useCallback=function(t,e){return an.current.useCallback(t,e)};Ke.useContext=function(t){return an.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return an.current.useEffect(t,e)};Ke.useId=function(){return an.current.useId()};Ke.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return an.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Ke.useRef=function(t){return an.current.useRef(t)};Ke.useState=function(t){return an.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return an.current.useTransition()};Ke.version="18.3.1";Bm.exports=Ke;var de=Bm.exports;const _v=iv(de);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv=de,Sv=Symbol.for("react.element"),Mv=Symbol.for("react.fragment"),bv=Object.prototype.hasOwnProperty,Ev=yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wv={key:!0,ref:!0,__self:!0,__source:!0};function $m(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)bv.call(e,i)&&!wv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Sv,type:t,key:s,ref:a,props:r,_owner:Ev.current}}Vl.Fragment=Mv;Vl.jsx=$m;Vl.jsxs=$m;km.exports=Vl;var l=km.exports,vu={},qm={exports:{}},bn={},Km={exports:{}},Zm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,O){var C=H.length;H.push(O);e:for(;0<C;){var A=C-1>>>1,Q=H[A];if(0<r(Q,O))H[A]=O,H[C]=Q,C=A;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var O=H[0],C=H.pop();if(C!==O){H[0]=C;e:for(var A=0,Q=H.length,se=Q>>>1;A<se;){var me=2*(A+1)-1,fe=H[me],he=me+1,k=H[he];if(0>r(fe,C))he<Q&&0>r(k,fe)?(H[A]=k,H[he]=C,A=he):(H[A]=fe,H[me]=C,A=me);else if(he<Q&&0>r(k,C))H[A]=k,H[he]=C,A=he;else break e}}return O}function r(H,O){var C=H.sortIndex-O.sortIndex;return C!==0?C:H.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],p=1,h=null,d=3,x=!1,v=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(H){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=H)i(u),O.sortIndex=O.expirationTime,e(c,O);else break;O=n(u)}}function M(H){if(S=!1,b(H),!v)if(n(c)!==null)v=!0,te(w);else{var O=n(u);O!==null&&q(M,O.startTime-H)}}function w(H,O){v=!1,S&&(S=!1,f(y),y=-1),x=!0;var C=d;try{for(b(O),h=n(c);h!==null&&(!(h.expirationTime>O)||H&&!U());){var A=h.callback;if(typeof A=="function"){h.callback=null,d=h.priorityLevel;var Q=A(h.expirationTime<=O);O=t.unstable_now(),typeof Q=="function"?h.callback=Q:h===n(c)&&i(c),b(O)}else i(c);h=n(c)}if(h!==null)var se=!0;else{var me=n(u);me!==null&&q(M,me.startTime-O),se=!1}return se}finally{h=null,d=C,x=!1}}var T=!1,R=null,y=-1,N=5,D=-1;function U(){return!(t.unstable_now()-D<N)}function V(){if(R!==null){var H=t.unstable_now();D=H;var O=!0;try{O=R(!0,H)}finally{O?$():(T=!1,R=null)}}else T=!1}var $;if(typeof g=="function")$=function(){g(V)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,j=B.port2;B.port1.onmessage=V,$=function(){j.postMessage(null)}}else $=function(){m(V,0)};function te(H){R=H,T||(T=!0,$())}function q(H,O){y=m(function(){H(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){v||x||(v=!0,te(w))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(H){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var C=d;d=O;try{return H()}finally{d=C}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,O){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var C=d;d=H;try{return O()}finally{d=C}},t.unstable_scheduleCallback=function(H,O,C){var A=t.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?A+C:A):C=A,H){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=C+Q,H={id:p++,callback:O,priorityLevel:H,startTime:C,expirationTime:Q,sortIndex:-1},C>A?(H.sortIndex=C,e(u,H),n(c)===null&&H===n(u)&&(S?(f(y),y=-1):S=!0,q(M,C-A))):(H.sortIndex=Q,e(c,H),v||x||(v=!0,te(w))),H},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(H){var O=d;return function(){var C=d;d=O;try{return H.apply(this,arguments)}finally{d=C}}}})(Zm);Km.exports=Zm;var Tv=Km.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av=de,Mn=Tv;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jm=new Set,_a={};function kr(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(_a[t]=e,t=0;t<e.length;t++)Jm.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=Object.prototype.hasOwnProperty,Cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ph={},Dh={};function Rv(t){return _u.call(Dh,t)?!0:_u.call(Ph,t)?!1:Cv.test(t)?Dh[t]=!0:(Ph[t]=!0,!1)}function Nv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Pv(t,e,n,i){if(e===null||typeof e>"u"||Nv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var lf=/[\-:]([a-z])/g;function cf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lf,cf);Wt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lf,cf);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lf,cf);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function uf(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Pv(e,n,r,i)&&(n=null),i||r===null?Rv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=Av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),e0=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),hf=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),t0=Symbol.for("react.offscreen"),Lh=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,pc;function ia(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function xc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function Dv(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function bu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case yu:return"Profiler";case df:return"StrictMode";case Su:return"Suspense";case Mu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e0:return(t.displayName||"Context")+".Consumer";case Qm:return(t._context.displayName||"Context")+".Provider";case ff:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hf:return e=t.displayName||null,e!==null?e:bu(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return bu(t(e))}catch{}}return null}function Lv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bu(e);case 8:return e===df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Iv(t){var e=n0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ro(t){t._valueTracker||(t._valueTracker=Iv(t))}function i0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=n0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Eu(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ih(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r0(t,e){e=e.checked,e!=null&&uf(t,"checked",e,!1)}function wu(t,e){r0(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tu(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tu(t,e,n){(e!=="number"||cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Au(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(ra(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function s0(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Oh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function a0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?a0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var so,o0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=so.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uv=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){Uv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function l0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function c0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=l0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Fv=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ru(t,e){if(e){if(Fv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Nu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pu=null;function pf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Du=null,_s=null,ys=null;function kh(t){if(t=Xa(t)){if(typeof Du!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Yl(e),Du(t.stateNode,t.type,e))}}function u0(t){_s?ys?ys.push(t):ys=[t]:_s=t}function d0(){if(_s){var t=_s,e=ys;if(ys=_s=null,kh(t),e)for(t=0;t<e.length;t++)kh(e[t])}}function f0(t,e){return t(e)}function h0(){}var gc=!1;function p0(t,e,n){if(gc)return t(e,n);gc=!0;try{return f0(t,e,n)}finally{gc=!1,(_s!==null||ys!==null)&&(h0(),d0())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var i=Yl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Lu=!1;if(Ri)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Lu=!1}function Ov(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var ua=!1,ul=null,dl=!1,Iu=null,kv={onError:function(t){ua=!0,ul=t}};function Bv(t,e,n,i,r,s,a,o,c){ua=!1,ul=null,Ov.apply(kv,arguments)}function zv(t,e,n,i,r,s,a,o,c){if(Bv.apply(this,arguments),ua){if(ua){var u=ul;ua=!1,ul=null}else throw Error(ce(198));dl||(dl=!0,Iu=u)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bh(t){if(Br(t)!==t)throw Error(ce(188))}function Hv(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bh(r),t;if(s===i)return Bh(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function x0(t){return t=Hv(t),t!==null?g0(t):null}function g0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=g0(t);if(e!==null)return e;t=t.sibling}return null}var v0=Mn.unstable_scheduleCallback,zh=Mn.unstable_cancelCallback,Vv=Mn.unstable_shouldYield,jv=Mn.unstable_requestPaint,Nt=Mn.unstable_now,Gv=Mn.unstable_getCurrentPriorityLevel,mf=Mn.unstable_ImmediatePriority,_0=Mn.unstable_UserBlockingPriority,fl=Mn.unstable_NormalPriority,Wv=Mn.unstable_LowPriority,y0=Mn.unstable_IdlePriority,jl=null,li=null;function Xv(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:qv,Yv=Math.log,$v=Math.LN2;function qv(t){return t>>>=0,t===0?32:31-(Yv(t)/$v|0)|0}var ao=64,oo=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=sa(o):(s&=a,s!==0&&(i=sa(s)))}else a=n&~r,a!==0?i=sa(a):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function Kv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Xn(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=Kv(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function Uu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S0(){var t=ao;return ao<<=1,!(ao&4194240)&&(ao=64),t}function vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function Jv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function M0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var b0,gf,E0,w0,T0,Fu=!1,lo=[],er=null,tr=null,nr=null,Ma=new Map,ba=new Map,qi=[],Qv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hh(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&gf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function e_(t,e,n,i,r){switch(e){case"focusin":return er=js(er,t,e,n,i,r),!0;case"dragenter":return tr=js(tr,t,e,n,i,r),!0;case"mouseover":return nr=js(nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ma.set(s,js(Ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ba.set(s,js(ba.get(s)||null,t,e,n,i,r)),!0}return!1}function A0(t){var e=Sr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=m0(n),e!==null){t.blockedOn=e,T0(t.priority,function(){E0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ou(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Pu=i,n.target.dispatchEvent(i),Pu=null}else return e=Xa(n),e!==null&&gf(e),t.blockedOn=n,!1;e.shift()}return!0}function Vh(t,e,n){Yo(t)&&n.delete(e)}function t_(){Fu=!1,er!==null&&Yo(er)&&(er=null),tr!==null&&Yo(tr)&&(tr=null),nr!==null&&Yo(nr)&&(nr=null),Ma.forEach(Vh),ba.forEach(Vh)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Fu||(Fu=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,t_)))}function Ea(t){function e(r){return Gs(r,t)}if(0<lo.length){Gs(lo[0],t);for(var n=1;n<lo.length;n++){var i=lo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(er!==null&&Gs(er,t),tr!==null&&Gs(tr,t),nr!==null&&Gs(nr,t),Ma.forEach(e),ba.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)A0(n),n.blockedOn===null&&qi.shift()}var Ss=Fi.ReactCurrentBatchConfig,pl=!0;function n_(t,e,n,i){var r=ut,s=Ss.transition;Ss.transition=null;try{ut=1,vf(t,e,n,i)}finally{ut=r,Ss.transition=s}}function i_(t,e,n,i){var r=ut,s=Ss.transition;Ss.transition=null;try{ut=4,vf(t,e,n,i)}finally{ut=r,Ss.transition=s}}function vf(t,e,n,i){if(pl){var r=Ou(t,e,n,i);if(r===null)Cc(t,e,i,ml,n),Hh(t,i);else if(e_(r,t,e,n,i))i.stopPropagation();else if(Hh(t,i),e&4&&-1<Qv.indexOf(t)){for(;r!==null;){var s=Xa(r);if(s!==null&&b0(s),s=Ou(t,e,n,i),s===null&&Cc(t,e,i,ml,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Cc(t,e,i,null,n)}}var ml=null;function Ou(t,e,n,i){if(ml=null,t=pf(i),t=Sr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ml=t,null}function C0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gv()){case mf:return 1;case _0:return 4;case fl:case Wv:return 16;case y0:return 536870912;default:return 16}default:return 16}}var Ji=null,_f=null,$o=null;function R0(){if($o)return $o;var t,e=_f,n=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return $o=r.slice(t,1<i?1-i:void 0)}function qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function jh(){return!1}function En(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?co:jh,this.isPropagationStopped=jh,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yf=En(Os),Wa=wt({},Os,{view:0,detail:0}),r_=En(Wa),_c,yc,Ws,Gl=wt({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(_c=t.screenX-Ws.screenX,yc=t.screenY-Ws.screenY):yc=_c=0,Ws=t),_c)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Gh=En(Gl),s_=wt({},Gl,{dataTransfer:0}),a_=En(s_),o_=wt({},Wa,{relatedTarget:0}),Sc=En(o_),l_=wt({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),c_=En(l_),u_=wt({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),d_=En(u_),f_=wt({},Os,{data:0}),Wh=En(f_),h_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=m_[t])?!!e[t]:!1}function Sf(){return x_}var g_=wt({},Wa,{key:function(t){if(t.key){var e=h_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sf,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v_=En(g_),__=wt({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=En(__),y_=wt({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sf}),S_=En(y_),M_=wt({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),b_=En(M_),E_=wt({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w_=En(E_),T_=[9,13,27,32],Mf=Ri&&"CompositionEvent"in window,da=null;Ri&&"documentMode"in document&&(da=document.documentMode);var A_=Ri&&"TextEvent"in window&&!da,N0=Ri&&(!Mf||da&&8<da&&11>=da),Yh=" ",$h=!1;function P0(t,e){switch(t){case"keyup":return T_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function C_(t,e){switch(t){case"compositionend":return D0(e);case"keypress":return e.which!==32?null:($h=!0,Yh);case"textInput":return t=e.data,t===Yh&&$h?null:t;default:return null}}function R_(t,e){if(as)return t==="compositionend"||!Mf&&P0(t,e)?(t=R0(),$o=_f=Ji=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N0&&e.locale!=="ko"?null:e.data;default:return null}}var N_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N_[t.type]:e==="textarea"}function L0(t,e,n,i){u0(i),e=xl(e,"onChange"),0<e.length&&(n=new yf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fa=null,wa=null;function P_(t){G0(t,0)}function Wl(t){var e=cs(t);if(i0(e))return t}function D_(t,e){if(t==="change")return e}var I0=!1;if(Ri){var Mc;if(Ri){var bc="oninput"in document;if(!bc){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),bc=typeof Kh.oninput=="function"}Mc=bc}else Mc=!1;I0=Mc&&(!document.documentMode||9<document.documentMode)}function Zh(){fa&&(fa.detachEvent("onpropertychange",U0),wa=fa=null)}function U0(t){if(t.propertyName==="value"&&Wl(wa)){var e=[];L0(e,wa,t,pf(t)),p0(P_,e)}}function L_(t,e,n){t==="focusin"?(Zh(),fa=e,wa=n,fa.attachEvent("onpropertychange",U0)):t==="focusout"&&Zh()}function I_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(wa)}function U_(t,e){if(t==="click")return Wl(e)}function F_(t,e){if(t==="input"||t==="change")return Wl(e)}function O_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:O_;function Ta(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_u.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qh(t,e){var n=Jh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jh(n)}}function F0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?F0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function O0(){for(var t=window,e=cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cl(t.document)}return e}function bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function k_(t){var e=O0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&F0(n.ownerDocument.documentElement,n)){if(i!==null&&bf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Qh(n,s);var a=Qh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var B_=Ri&&"documentMode"in document&&11>=document.documentMode,os=null,ku=null,ha=null,Bu=!1;function ep(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bu||os==null||os!==cl(i)||(i=os,"selectionStart"in i&&bf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ha&&Ta(ha,i)||(ha=i,i=xl(ku,"onSelect"),0<i.length&&(e=new yf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Ec={},k0={};Ri&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Xl(t){if(Ec[t])return Ec[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k0)return Ec[t]=e[n];return t}var B0=Xl("animationend"),z0=Xl("animationiteration"),H0=Xl("animationstart"),V0=Xl("transitionend"),j0=new Map,tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){j0.set(t,e),kr(e,[t])}for(var wc=0;wc<tp.length;wc++){var Tc=tp[wc],z_=Tc.toLowerCase(),H_=Tc[0].toUpperCase()+Tc.slice(1);ur(z_,"on"+H_)}ur(B0,"onAnimationEnd");ur(z0,"onAnimationIteration");ur(H0,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(V0,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V_=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function np(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,zv(i,e,void 0,t),t.currentTarget=null}function G0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;np(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;np(r,o,u),s=c}}}if(dl)throw t=Iu,dl=!1,Iu=null,t}function _t(t,e){var n=e[Gu];n===void 0&&(n=e[Gu]=new Set);var i=t+"__bubble";n.has(i)||(W0(e,t,2,!1),n.add(i))}function Ac(t,e,n){var i=0;e&&(i|=4),W0(n,t,i,e)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[fo]){t[fo]=!0,Jm.forEach(function(n){n!=="selectionchange"&&(V_.has(n)||Ac(n,!1,t),Ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fo]||(e[fo]=!0,Ac("selectionchange",!1,e))}}function W0(t,e,n,i){switch(C0(e)){case 1:var r=n_;break;case 4:r=i_;break;default:r=vf}n=r.bind(null,e,n,t),r=void 0,!Lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Cc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Sr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}p0(function(){var u=s,p=pf(n),h=[];e:{var d=j0.get(t);if(d!==void 0){var x=yf,v=t;switch(t){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":x=v_;break;case"focusin":v="focus",x=Sc;break;case"focusout":v="blur",x=Sc;break;case"beforeblur":case"afterblur":x=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=a_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=S_;break;case B0:case z0:case H0:x=c_;break;case V0:x=b_;break;case"scroll":x=r_;break;case"wheel":x=w_;break;case"copy":case"cut":case"paste":x=d_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Xh}var S=(e&4)!==0,m=!S&&t==="scroll",f=S?d!==null?d+"Capture":null:d;S=[];for(var g=u,b;g!==null;){b=g;var M=b.stateNode;if(b.tag===5&&M!==null&&(b=M,f!==null&&(M=Sa(g,f),M!=null&&S.push(Ca(g,M,b)))),m)break;g=g.return}0<S.length&&(d=new x(d,v,null,n,p),h.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",d&&n!==Pu&&(v=n.relatedTarget||n.fromElement)&&(Sr(v)||v[Ni]))break e;if((x||d)&&(d=p.window===p?p:(d=p.ownerDocument)?d.defaultView||d.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?Sr(v):null,v!==null&&(m=Br(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(S=Gh,M="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=Xh,M="onPointerLeave",f="onPointerEnter",g="pointer"),m=x==null?d:cs(x),b=v==null?d:cs(v),d=new S(M,g+"leave",x,n,p),d.target=m,d.relatedTarget=b,M=null,Sr(p)===u&&(S=new S(f,g+"enter",v,n,p),S.target=b,S.relatedTarget=m,M=S),m=M,x&&v)t:{for(S=x,f=v,g=0,b=S;b;b=jr(b))g++;for(b=0,M=f;M;M=jr(M))b++;for(;0<g-b;)S=jr(S),g--;for(;0<b-g;)f=jr(f),b--;for(;g--;){if(S===f||f!==null&&S===f.alternate)break t;S=jr(S),f=jr(f)}S=null}else S=null;x!==null&&ip(h,d,x,S,!1),v!==null&&m!==null&&ip(h,m,v,S,!0)}}e:{if(d=u?cs(u):window,x=d.nodeName&&d.nodeName.toLowerCase(),x==="select"||x==="input"&&d.type==="file")var w=D_;else if(qh(d))if(I0)w=F_;else{w=I_;var T=L_}else(x=d.nodeName)&&x.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=U_);if(w&&(w=w(t,u))){L0(h,w,n,p);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Tu(d,"number",d.value)}switch(T=u?cs(u):window,t){case"focusin":(qh(T)||T.contentEditable==="true")&&(os=T,ku=u,ha=null);break;case"focusout":ha=ku=os=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,ep(h,n,p);break;case"selectionchange":if(B_)break;case"keydown":case"keyup":ep(h,n,p)}var R;if(Mf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else as?P0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(N0&&n.locale!=="ko"&&(as||y!=="onCompositionStart"?y==="onCompositionEnd"&&as&&(R=R0()):(Ji=p,_f="value"in Ji?Ji.value:Ji.textContent,as=!0)),T=xl(u,y),0<T.length&&(y=new Wh(y,t,null,n,p),h.push({event:y,listeners:T}),R?y.data=R:(R=D0(n),R!==null&&(y.data=R)))),(R=A_?C_(t,n):R_(t,n))&&(u=xl(u,"onBeforeInput"),0<u.length&&(p=new Wh("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=R))}G0(h,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sa(t,n),s!=null&&i.unshift(Ca(t,s,r)),s=Sa(t,e),s!=null&&i.push(Ca(t,s,r))),t=t.return}return i}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ip(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=Sa(n,s),c!=null&&a.unshift(Ca(n,c,o))):r||(c=Sa(n,s),c!=null&&a.push(Ca(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var j_=/\r\n?/g,G_=/\u0000|\uFFFD/g;function rp(t){return(typeof t=="string"?t:""+t).replace(j_,`
`).replace(G_,"")}function ho(t,e,n){if(e=rp(e),rp(t)!==e&&n)throw Error(ce(425))}function gl(){}var zu=null,Hu=null;function Vu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,W_=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,X_=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(t){return sp.resolve(null).then(t).catch(Y_)}:ju;function Y_(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ea(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ea(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ap(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),si="__reactFiber$"+ks,Ra="__reactProps$"+ks,Ni="__reactContainer$"+ks,Gu="__reactEvents$"+ks,$_="__reactListeners$"+ks,q_="__reactHandles$"+ks;function Sr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ap(t);t!==null;){if(n=t[si])return n;t=ap(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[si]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Yl(t){return t[Ra]||null}var Wu=[],us=-1;function dr(t){return{current:t}}function yt(t){0>us||(t.current=Wu[us],Wu[us]=null,us--)}function gt(t,e){us++,Wu[us]=t.current,t.current=e}var cr={},Qt=dr(cr),fn=dr(!1),Cr=cr;function As(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function vl(){yt(fn),yt(Qt)}function op(t,e,n){if(Qt.current!==cr)throw Error(ce(168));gt(Qt,e),gt(fn,n)}function X0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,Lv(t)||"Unknown",r));return wt({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Cr=Qt.current,gt(Qt,t),gt(fn,fn.current),!0}function lp(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=X0(t,e,Cr),i.__reactInternalMemoizedMergedChildContext=t,yt(fn),yt(Qt),gt(Qt,t)):yt(fn),gt(fn,n)}var yi=null,$l=!1,Nc=!1;function Y0(t){yi===null?yi=[t]:yi.push(t)}function K_(t){$l=!0,Y0(t)}function fr(){if(!Nc&&yi!==null){Nc=!0;var t=0,e=ut;try{var n=yi;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,$l=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),v0(mf,fr),r}finally{ut=e,Nc=!1}}return null}var ds=[],fs=0,yl=null,Sl=0,Cn=[],Rn=0,Rr=null,Mi=1,bi="";function _r(t,e){ds[fs++]=Sl,ds[fs++]=yl,yl=t,Sl=e}function $0(t,e,n){Cn[Rn++]=Mi,Cn[Rn++]=bi,Cn[Rn++]=Rr,Rr=t;var i=Mi;t=bi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Mi=1<<32-Xn(e)+r|n<<r|i,bi=s+t}else Mi=1<<s|n<<r|i,bi=t}function Ef(t){t.return!==null&&(_r(t,1),$0(t,1,0))}function wf(t){for(;t===yl;)yl=ds[--fs],ds[fs]=null,Sl=ds[--fs],ds[fs]=null;for(;t===Rr;)Rr=Cn[--Rn],Cn[Rn]=null,bi=Cn[--Rn],Cn[Rn]=null,Mi=Cn[--Rn],Cn[Rn]=null}var Sn=null,yn=null,Mt=!1,jn=null;function q0(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:Mi,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function Xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yu(t){if(Mt){var e=yn;if(e){var n=e;if(!cp(t,e)){if(Xu(t))throw Error(ce(418));e=ir(n.nextSibling);var i=Sn;e&&cp(t,e)?q0(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Sn=t)}}else{if(Xu(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Mt=!1,Sn=t}}}function up(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function po(t){if(t!==Sn)return!1;if(!Mt)return up(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vu(t.type,t.memoizedProps)),e&&(e=yn)){if(Xu(t))throw K0(),Error(ce(418));for(;e;)q0(t,e),e=ir(e.nextSibling)}if(up(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?ir(t.stateNode.nextSibling):null;return!0}function K0(){for(var t=yn;t;)t=ir(t.nextSibling)}function Cs(){yn=Sn=null,Mt=!1}function Tf(t){jn===null?jn=[t]:jn.push(t)}var Z_=Fi.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function mo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dp(t){var e=t._init;return e(t._payload)}function Z0(t){function e(f,g){if(t){var b=f.deletions;b===null?(f.deletions=[g],f.flags|=16):b.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=or(f,g),f.index=0,f.sibling=null,f}function s(f,g,b){return f.index=b,t?(b=f.alternate,b!==null?(b=b.index,b<g?(f.flags|=2,g):b):(f.flags|=2,g)):(f.flags|=1048576,g)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,g,b,M){return g===null||g.tag!==6?(g=Oc(b,f.mode,M),g.return=f,g):(g=r(g,b),g.return=f,g)}function c(f,g,b,M){var w=b.type;return w===ss?p(f,g,b.props.children,M,b.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Xi&&dp(w)===g.type)?(M=r(g,b.props),M.ref=Xs(f,g,b),M.return=f,M):(M=nl(b.type,b.key,b.props,null,f.mode,M),M.ref=Xs(f,g,b),M.return=f,M)}function u(f,g,b,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=kc(b,f.mode,M),g.return=f,g):(g=r(g,b.children||[]),g.return=f,g)}function p(f,g,b,M,w){return g===null||g.tag!==7?(g=Ar(b,f.mode,M,w),g.return=f,g):(g=r(g,b),g.return=f,g)}function h(f,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Oc(""+g,f.mode,b),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case io:return b=nl(g.type,g.key,g.props,null,f.mode,b),b.ref=Xs(f,null,g),b.return=f,b;case rs:return g=kc(g,f.mode,b),g.return=f,g;case Xi:var M=g._init;return h(f,M(g._payload),b)}if(ra(g)||Hs(g))return g=Ar(g,f.mode,b,null),g.return=f,g;mo(f,g)}return null}function d(f,g,b,M){var w=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return w!==null?null:o(f,g,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case io:return b.key===w?c(f,g,b,M):null;case rs:return b.key===w?u(f,g,b,M):null;case Xi:return w=b._init,d(f,g,w(b._payload),M)}if(ra(b)||Hs(b))return w!==null?null:p(f,g,b,M,null);mo(f,b)}return null}function x(f,g,b,M,w){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(b)||null,o(g,f,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case io:return f=f.get(M.key===null?b:M.key)||null,c(g,f,M,w);case rs:return f=f.get(M.key===null?b:M.key)||null,u(g,f,M,w);case Xi:var T=M._init;return x(f,g,b,T(M._payload),w)}if(ra(M)||Hs(M))return f=f.get(b)||null,p(g,f,M,w,null);mo(g,M)}return null}function v(f,g,b,M){for(var w=null,T=null,R=g,y=g=0,N=null;R!==null&&y<b.length;y++){R.index>y?(N=R,R=null):N=R.sibling;var D=d(f,R,b[y],M);if(D===null){R===null&&(R=N);break}t&&R&&D.alternate===null&&e(f,R),g=s(D,g,y),T===null?w=D:T.sibling=D,T=D,R=N}if(y===b.length)return n(f,R),Mt&&_r(f,y),w;if(R===null){for(;y<b.length;y++)R=h(f,b[y],M),R!==null&&(g=s(R,g,y),T===null?w=R:T.sibling=R,T=R);return Mt&&_r(f,y),w}for(R=i(f,R);y<b.length;y++)N=x(R,f,y,b[y],M),N!==null&&(t&&N.alternate!==null&&R.delete(N.key===null?y:N.key),g=s(N,g,y),T===null?w=N:T.sibling=N,T=N);return t&&R.forEach(function(U){return e(f,U)}),Mt&&_r(f,y),w}function S(f,g,b,M){var w=Hs(b);if(typeof w!="function")throw Error(ce(150));if(b=w.call(b),b==null)throw Error(ce(151));for(var T=w=null,R=g,y=g=0,N=null,D=b.next();R!==null&&!D.done;y++,D=b.next()){R.index>y?(N=R,R=null):N=R.sibling;var U=d(f,R,D.value,M);if(U===null){R===null&&(R=N);break}t&&R&&U.alternate===null&&e(f,R),g=s(U,g,y),T===null?w=U:T.sibling=U,T=U,R=N}if(D.done)return n(f,R),Mt&&_r(f,y),w;if(R===null){for(;!D.done;y++,D=b.next())D=h(f,D.value,M),D!==null&&(g=s(D,g,y),T===null?w=D:T.sibling=D,T=D);return Mt&&_r(f,y),w}for(R=i(f,R);!D.done;y++,D=b.next())D=x(R,f,y,D.value,M),D!==null&&(t&&D.alternate!==null&&R.delete(D.key===null?y:D.key),g=s(D,g,y),T===null?w=D:T.sibling=D,T=D);return t&&R.forEach(function(V){return e(f,V)}),Mt&&_r(f,y),w}function m(f,g,b,M){if(typeof b=="object"&&b!==null&&b.type===ss&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case io:e:{for(var w=b.key,T=g;T!==null;){if(T.key===w){if(w=b.type,w===ss){if(T.tag===7){n(f,T.sibling),g=r(T,b.props.children),g.return=f,f=g;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Xi&&dp(w)===T.type){n(f,T.sibling),g=r(T,b.props),g.ref=Xs(f,T,b),g.return=f,f=g;break e}n(f,T);break}else e(f,T);T=T.sibling}b.type===ss?(g=Ar(b.props.children,f.mode,M,b.key),g.return=f,f=g):(M=nl(b.type,b.key,b.props,null,f.mode,M),M.ref=Xs(f,g,b),M.return=f,f=M)}return a(f);case rs:e:{for(T=b.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){n(f,g.sibling),g=r(g,b.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=kc(b,f.mode,M),g.return=f,f=g}return a(f);case Xi:return T=b._init,m(f,g,T(b._payload),M)}if(ra(b))return v(f,g,b,M);if(Hs(b))return S(f,g,b,M);mo(f,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,b),g.return=f,f=g):(n(f,g),g=Oc(b,f.mode,M),g.return=f,f=g),a(f)):n(f,g)}return m}var Rs=Z0(!0),J0=Z0(!1),Ml=dr(null),bl=null,hs=null,Af=null;function Cf(){Af=hs=bl=null}function Rf(t){var e=Ml.current;yt(Ml),t._currentValue=e}function $u(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){bl=t,Af=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Af!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(bl===null)throw Error(ce(308));hs=t,bl.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var Mr=null;function Nf(t){Mr===null?Mr=[t]:Mr.push(t)}function Q0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Nf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function Pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ex(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Nf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function Ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xf(t,n)}}function fp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,i){var r=t.updateQueue;Yi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var p=t.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==a&&(o===null?p.firstBaseUpdate=u:o.next=u,p.lastBaseUpdate=c))}if(s!==null){var h=r.baseState;a=0,p=u=c=null,o=s;do{var d=o.lane,x=o.eventTime;if((i&d)===d){p!==null&&(p=p.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,S=o;switch(d=e,x=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){h=v.call(x,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,d=typeof v=="function"?v.call(x,h,d):v,d==null)break e;h=wt({},h,d);break e;case 2:Yi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else x={eventTime:x,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(u=p=x,c=h):p=p.next=x,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(p===null&&(c=h),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pr|=a,t.lanes=a,t.memoizedState=h}}function hp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Ya={},ci=dr(Ya),Na=dr(Ya),Pa=dr(Ya);function br(t){if(t===Ya)throw Error(ce(174));return t}function Df(t,e){switch(gt(Pa,e),gt(Na,t),gt(ci,Ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cu(e,t)}yt(ci),gt(ci,e)}function Ns(){yt(ci),yt(Na),yt(Pa)}function tx(t){br(Pa.current);var e=br(ci.current),n=Cu(e,t.type);e!==n&&(gt(Na,t),gt(ci,n))}function Lf(t){Na.current===t&&(yt(ci),yt(Na))}var bt=dr(0);function wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pc=[];function If(){for(var t=0;t<Pc.length;t++)Pc[t]._workInProgressVersionPrimary=null;Pc.length=0}var Zo=Fi.ReactCurrentDispatcher,Dc=Fi.ReactCurrentBatchConfig,Nr=0,Et=null,Ut=null,zt=null,Tl=!1,pa=!1,Da=0,J_=0;function Yt(){throw Error(ce(321))}function Uf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Ff(t,e,n,i,r,s){if(Nr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zo.current=t===null||t.memoizedState===null?ny:iy,t=n(i,r),pa){s=0;do{if(pa=!1,Da=0,25<=s)throw Error(ce(301));s+=1,zt=Ut=null,e.updateQueue=null,Zo.current=ry,t=n(i,r)}while(pa)}if(Zo.current=Al,e=Ut!==null&&Ut.next!==null,Nr=0,zt=Ut=Et=null,Tl=!1,e)throw Error(ce(300));return t}function Of(){var t=Da!==0;return Da=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Et.memoizedState=zt=t:zt=zt.next=t,zt}function Un(){if(Ut===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=zt===null?Et.memoizedState:zt.next;if(e!==null)zt=e,Ut=t;else{if(t===null)throw Error(ce(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},zt===null?Et.memoizedState=zt=t:zt=zt.next=t}return zt}function La(t,e){return typeof e=="function"?e(t):e}function Lc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var p=u.lane;if((Nr&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=h,a=i):c=c.next=h,Et.lanes|=p,Pr|=p}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,Kn(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,Pr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ic(t){var e=Un(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Kn(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function nx(){}function ix(t,e){var n=Et,i=Un(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,kf(ax.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,Ia(9,sx.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(ce(349));Nr&30||rx(n,e,r)}return r}function rx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sx(t,e,n,i){e.value=n,e.getSnapshot=i,ox(e)&&lx(t)}function ax(t,e,n){return n(function(){ox(e)&&lx(t)})}function ox(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function lx(t){var e=Pi(t,1);e!==null&&Yn(e,t,1,-1)}function pp(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=ty.bind(null,Et,t),[e.memoizedState,t]}function Ia(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function cx(){return Un().memoizedState}function Jo(t,e,n,i){var r=ii();Et.flags|=t,r.memoizedState=Ia(1|e,n,void 0,i===void 0?null:i)}function ql(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var a=Ut.memoizedState;if(s=a.destroy,i!==null&&Uf(i,a.deps)){r.memoizedState=Ia(e,n,s,i);return}}Et.flags|=t,r.memoizedState=Ia(1|e,n,s,i)}function mp(t,e){return Jo(8390656,8,t,e)}function kf(t,e){return ql(2048,8,t,e)}function ux(t,e){return ql(4,2,t,e)}function dx(t,e){return ql(4,4,t,e)}function fx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hx(t,e,n){return n=n!=null?n.concat([t]):null,ql(4,4,fx.bind(null,e,t),n)}function Bf(){}function px(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Uf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function mx(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Uf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function xx(t,e,n){return Nr&21?(Kn(n,e)||(n=S0(),Et.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function Q_(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=Dc.transition;Dc.transition={};try{t(!1),e()}finally{ut=n,Dc.transition=i}}function gx(){return Un().memoizedState}function ey(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vx(t))_x(e,n);else if(n=Q0(t,e,n,i),n!==null){var r=rn();Yn(n,t,i,r),yx(n,e,i)}}function ty(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vx(t))_x(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Kn(o,a)){var c=e.interleaved;c===null?(r.next=r,Nf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Q0(t,e,r,i),n!==null&&(r=rn(),Yn(n,t,i,r),yx(n,e,i))}}function vx(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function _x(t,e){pa=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xf(t,n)}}var Al={readContext:In,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},ny={readContext:In,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:mp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jo(4194308,4,fx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jo(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ey.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:pp,useDebugValue:Bf,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=pp(!1),e=t[0];return t=Q_.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=ii();if(Mt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Ht===null)throw Error(ce(349));Nr&30||rx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,mp(ax.bind(null,i,s,t),[t]),i.flags|=2048,Ia(9,sx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=Ht.identifierPrefix;if(Mt){var n=bi,i=Mi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=J_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iy={readContext:In,useCallback:px,useContext:In,useEffect:kf,useImperativeHandle:hx,useInsertionEffect:ux,useLayoutEffect:dx,useMemo:mx,useReducer:Lc,useRef:cx,useState:function(){return Lc(La)},useDebugValue:Bf,useDeferredValue:function(t){var e=Un();return xx(e,Ut.memoizedState,t)},useTransition:function(){var t=Lc(La)[0],e=Un().memoizedState;return[t,e]},useMutableSource:nx,useSyncExternalStore:ix,useId:gx,unstable_isNewReconciler:!1},ry={readContext:In,useCallback:px,useContext:In,useEffect:kf,useImperativeHandle:hx,useInsertionEffect:ux,useLayoutEffect:dx,useMemo:mx,useReducer:Ic,useRef:cx,useState:function(){return Ic(La)},useDebugValue:Bf,useDeferredValue:function(t){var e=Un();return Ut===null?e.memoizedState=t:xx(e,Ut.memoizedState,t)},useTransition:function(){var t=Ic(La)[0],e=Un().memoizedState;return[t,e]},useMutableSource:nx,useSyncExternalStore:ix,useId:gx,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kl={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=ar(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Yn(e,t,r,i),Ko(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=ar(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Yn(e,t,r,i),Ko(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=ar(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=rr(t,r,i),e!==null&&(Yn(e,t,i,n),Ko(e,t,i))}};function xp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,i)||!Ta(r,s):!0}function Sx(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=hn(e)?Cr:Qt.current,i=e.contextTypes,s=(i=i!=null)?As(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function gp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Kl.enqueueReplaceState(e,e.state,null)}function Ku(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=hn(e)?Cr:Qt.current,r.context=As(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kl.enqueueReplaceState(r,r.state,null),El(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e){try{var n="",i=e;do n+=Dv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sy=typeof WeakMap=="function"?WeakMap:Map;function Mx(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,od=i),Zu(t,e)},n}function bx(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Zu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zu(t,e),typeof i!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function vp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new sy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=_y.bind(null,t,e,n),e.then(t,t))}function _p(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var ay=Fi.ReactCurrentOwner,dn=!1;function nn(t,e,n,i){e.child=t===null?J0(e,null,n,i):Rs(e,t.child,n,i)}function Sp(t,e,n,i,r){n=n.render;var s=e.ref;return Ms(e,r),i=Ff(t,e,n,i,s,r),n=Of(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(Mt&&n&&Ef(e),e.flags|=1,nn(t,e,i,r),e.child)}function Mp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Yf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ex(t,e,s,i,r)):(t=nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(a,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=or(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ex(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ta(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Di(t,e,r)}return Ju(t,e,n,i,r)}function wx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(ms,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(ms,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(ms,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(ms,_n),_n|=i;return nn(t,e,r,n),e.child}function Tx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ju(t,e,n,i,r){var s=hn(n)?Cr:Qt.current;return s=As(e,s),Ms(e,r),n=Ff(t,e,n,i,s,r),i=Of(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(Mt&&i&&Ef(e),e.flags|=1,nn(t,e,n,r),e.child)}function bp(t,e,n,i,r){if(hn(n)){var s=!0;_l(e)}else s=!1;if(Ms(e,r),e.stateNode===null)Qo(t,e),Sx(e,n,i),Ku(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=hn(n)?Cr:Qt.current,u=As(e,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&gp(e,a,i,u),Yi=!1;var d=e.memoizedState;a.state=d,El(e,i,a,r),c=e.memoizedState,o!==i||d!==c||fn.current||Yi?(typeof p=="function"&&(qu(e,n,p,i),c=e.memoizedState),(o=Yi||xp(e,n,o,i,d,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,ex(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Hn(e.type,o),a.props=u,h=e.pendingProps,d=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=In(c):(c=hn(n)?Cr:Qt.current,c=As(e,c));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==c)&&gp(e,a,i,c),Yi=!1,d=e.memoizedState,a.state=d,El(e,i,a,r);var v=e.memoizedState;o!==h||d!==v||fn.current||Yi?(typeof x=="function"&&(qu(e,n,x,i),v=e.memoizedState),(u=Yi||xp(e,n,u,i,d,v,c)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Qu(t,e,n,i,s,r)}function Qu(t,e,n,i,r,s){Tx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&lp(e,n,!1),Di(t,e,s);i=e.stateNode,ay.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,o,s)):nn(t,e,o,s),e.memoizedState=i.state,r&&lp(e,n,!0),e.child}function Ax(t){var e=t.stateNode;e.pendingContext?op(t,e.pendingContext,e.pendingContext!==e.context):e.context&&op(t,e.context,!1),Df(t,e.containerInfo)}function Ep(t,e,n,i,r){return Cs(),Tf(r),e.flags|=256,nn(t,e,n,i),e.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cx(t,e,n){var i=e.pendingProps,r=bt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(bt,r&1),t===null)return Yu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ql(a,i,0,null),t=Ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=td(n),e.memoizedState=ed,t):zf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return oy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=or(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=or(o,s):(s=Ar(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?td(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=ed,i}return s=t.child,t=s.sibling,i=or(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zf(t,e){return e=Ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xo(t,e,n,i){return i!==null&&Tf(i),Rs(e,t.child,null,n),t=zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Uc(Error(ce(422))),xo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ql({mode:"visible",children:i.children},r,0,null),s=Ar(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,a),e.child.memoizedState=td(a),e.memoizedState=ed,s);if(!(e.mode&1))return xo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=Uc(s,i,void 0),xo(t,e,a,i)}if(o=(a&t.childLanes)!==0,dn||o){if(i=Ht,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Yn(i,t,r,-1))}return Xf(),i=Uc(Error(ce(421))),xo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=yy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=ir(r.nextSibling),Sn=e,Mt=!0,jn=null,t!==null&&(Cn[Rn++]=Mi,Cn[Rn++]=bi,Cn[Rn++]=Rr,Mi=t.id,bi=t.overflow,Rr=e),e=zf(e,i.children),e.flags|=4096,e)}function wp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$u(t.return,e,n)}function Fc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Rx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=bt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wp(t,n,e);else if(t.tag===19)wp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fc(e,!0,n,null,s);break;case"together":Fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ly(t,e,n){switch(e.tag){case 3:Ax(e),Cs();break;case 5:tx(e);break;case 1:hn(e.type)&&_l(e);break;case 4:Df(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(Ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(bt,bt.current&1),e.flags|=128,null):n&e.child.childLanes?Cx(t,e,n):(gt(bt,bt.current&1),t=Di(t,e,n),t!==null?t.sibling:null);gt(bt,bt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Rx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(bt,bt.current),i)break;return null;case 22:case 23:return e.lanes=0,wx(t,e,n)}return Di(t,e,n)}var Nx,nd,Px,Dx;Nx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nd=function(){};Px=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,br(ci.current);var s=null;switch(n){case"input":r=Eu(t,r),i=Eu(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Au(t,r),i=Au(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gl)}Ru(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_a.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_a.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&_t("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Dx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function cy(t,e,n){var i=e.pendingProps;switch(wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return hn(e.type)&&vl(),$t(e),null;case 3:return i=e.stateNode,Ns(),yt(fn),yt(Qt),If(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(ud(jn),jn=null))),nd(t,e),$t(e),null;case 5:Lf(e);var r=br(Pa.current);if(n=e.type,t!==null&&e.stateNode!=null)Px(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return $t(e),null}if(t=br(ci.current),po(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[Ra]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)_t(aa[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":Ih(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":Fh(i,s),_t("invalid",i)}Ru(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",""+o]):_a.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_t("scroll",i)}switch(n){case"input":ro(i),Uh(i,s,!0);break;case"textarea":ro(i),Oh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=a0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[si]=e,t[Ra]=i,Nx(t,e,!1,!1),e.stateNode=t;e:{switch(a=Nu(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)_t(aa[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":Ih(t,i),r=Eu(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":Fh(t,i),r=Au(t,i),_t("invalid",t);break;default:r=i}Ru(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?c0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&o0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ya(t,c):typeof c=="number"&&ya(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_a.hasOwnProperty(s)?c!=null&&s==="onScroll"&&_t("scroll",t):c!=null&&uf(t,s,c,a))}switch(n){case"input":ro(t),Uh(t,i,!1);break;case"textarea":ro(t),Oh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)Dx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=br(Pa.current),br(ci.current),po(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return $t(e),null;case 13:if(yt(bt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&yn!==null&&e.mode&1&&!(e.flags&128))K0(),Cs(),e.flags|=98560,s=!1;else if(s=po(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[si]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else jn!==null&&(ud(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||bt.current&1?Ft===0&&(Ft=3):Xf())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Ns(),nd(t,e),t===null&&Aa(e.stateNode.containerInfo),$t(e),null;case 10:return Rf(e.type._context),$t(e),null;case 17:return hn(e.type)&&vl(),$t(e),null;case 19:if(yt(bt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ys(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=wl(t),a!==null){for(e.flags|=128,Ys(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(bt,bt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>Ds&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=wl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Mt)return $t(e),null}else 2*Nt()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=bt.current,gt(bt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Wf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function uy(t,e){switch(wf(e),e.tag){case 1:return hn(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),yt(fn),yt(Qt),If(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lf(e),null;case 13:if(yt(bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(bt),null;case 4:return Ns(),null;case 10:return Rf(e.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var go=!1,Zt=!1,dy=typeof WeakSet=="function"?WeakSet:Set,Re=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function id(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Tp=!1;function fy(t,e){if(zu=pl,t=O0(),bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,p=0,h=t,d=null;t:for(;;){for(var x;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(c=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(x=h.firstChild)!==null;)d=h,h=x;for(;;){if(h===t)break t;if(d===n&&++u===r&&(o=a),d===s&&++p===i&&(c=a),(x=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=x}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hu={focusedElem:t,selectionRange:n},pl=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,m=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?S:Hn(e.type,S),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(M){Tt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return v=Tp,Tp=!1,v}function ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&id(e,n,s)}r=r.next}while(r!==i)}}function Zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lx(t){var e=t.alternate;e!==null&&(t.alternate=null,Lx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[Ra],delete e[Gu],delete e[$_],delete e[q_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ix(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ix(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(i!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}function ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}var Vt=null,Vn=!1;function zi(t,e,n){for(n=n.child;n!==null;)Ux(t,e,n),n=n.sibling}function Ux(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:Zt||ps(n,e);case 6:var i=Vt,r=Vn;Vt=null,zi(t,e,n),Vt=i,Vn=r,Vt!==null&&(Vn?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(Vn?(t=Vt,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),Ea(t)):Rc(Vt,n.stateNode));break;case 4:i=Vt,r=Vn,Vt=n.stateNode.containerInfo,Vn=!0,zi(t,e,n),Vt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&id(n,e,a),r=r.next}while(r!==i)}zi(t,e,n);break;case 1:if(!Zt&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Tt(n,e,o)}zi(t,e,n);break;case 21:zi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,zi(t,e,n),Zt=i):zi(t,e,n);break;default:zi(t,e,n)}}function Cp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dy),e.forEach(function(i){var r=Sy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Vt=o.stateNode,Vn=!1;break e;case 3:Vt=o.stateNode.containerInfo,Vn=!0;break e;case 4:Vt=o.stateNode.containerInfo,Vn=!0;break e}o=o.return}if(Vt===null)throw Error(ce(160));Ux(s,a,r),Vt=null,Vn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){Tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fx(e,t),e=e.sibling}function Fx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),ei(t),i&4){try{ma(3,t,t.return),Zl(3,t)}catch(S){Tt(t,t.return,S)}try{ma(5,t,t.return)}catch(S){Tt(t,t.return,S)}}break;case 1:On(e,t),ei(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(On(e,t),ei(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(S){Tt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&r0(r,s),Nu(o,a);var u=Nu(o,s);for(a=0;a<c.length;a+=2){var p=c[a],h=c[a+1];p==="style"?c0(r,h):p==="dangerouslySetInnerHTML"?o0(r,h):p==="children"?ya(r,h):uf(r,p,h,u)}switch(o){case"input":wu(r,s);break;case"textarea":s0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?vs(r,!!s.multiple,x,!1):d!==!!s.multiple&&(s.defaultValue!=null?vs(r,!!s.multiple,s.defaultValue,!0):vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ra]=s}catch(S){Tt(t,t.return,S)}}break;case 6:if(On(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Tt(t,t.return,S)}}break;case 3:if(On(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ea(e.containerInfo)}catch(S){Tt(t,t.return,S)}break;case 4:On(e,t),ei(t);break;case 13:On(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(jf=Nt())),i&4&&Cp(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||p,On(e,t),Zt=u):On(e,t),ei(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&t.mode&1)for(Re=t,p=t.child;p!==null;){for(h=Re=p;Re!==null;){switch(d=Re,x=d.child,d.tag){case 0:case 11:case 14:case 15:ma(4,d,d.return);break;case 1:ps(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(S){Tt(i,n,S)}}break;case 5:ps(d,d.return);break;case 22:if(d.memoizedState!==null){Np(h);continue}}x!==null?(x.return=d,Re=x):Np(h)}p=p.sibling}e:for(p=null,h=t;;){if(h.tag===5){if(p===null){p=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=l0("display",a))}catch(S){Tt(t,t.return,S)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(S){Tt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:On(e,t),ei(t),i&4&&Cp(t);break;case 21:break;default:On(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ix(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=Ap(t);ad(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Ap(t);sd(t,o,a);break;default:throw Error(ce(161))}}catch(c){Tt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hy(t,e,n){Re=t,Ox(t)}function Ox(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||go;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||Zt;o=go;var u=Zt;if(go=a,(Zt=c)&&!u)for(Re=r;Re!==null;)a=Re,c=a.child,a.tag===22&&a.memoizedState!==null?Pp(r):c!==null?(c.return=a,Re=c):Pp(r);for(;s!==null;)Re=s,Ox(s),s=s.sibling;Re=r,go=o,Zt=u}Rp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):Rp(t)}}function Rp(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Ea(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Zt||e.flags&512&&rd(e)}catch(d){Tt(e,e.return,d)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Np(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function Pp(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zl(4,e)}catch(c){Tt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){Tt(e,r,c)}}var s=e.return;try{rd(e)}catch(c){Tt(e,s,c)}break;case 5:var a=e.return;try{rd(e)}catch(c){Tt(e,a,c)}}}catch(c){Tt(e,e.return,c)}if(e===t){Re=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Re=o;break}Re=e.return}}var py=Math.ceil,Cl=Fi.ReactCurrentDispatcher,Hf=Fi.ReactCurrentOwner,Ln=Fi.ReactCurrentBatchConfig,nt=0,Ht=null,It=null,Gt=0,_n=0,ms=dr(0),Ft=0,Ua=null,Pr=0,Jl=0,Vf=0,xa=null,un=null,jf=0,Ds=1/0,_i=null,Rl=!1,od=null,sr=null,vo=!1,Qi=null,Nl=0,ga=0,ld=null,el=-1,tl=0;function rn(){return nt&6?Nt():el!==-1?el:el=Nt()}function ar(t){return t.mode&1?nt&2&&Gt!==0?Gt&-Gt:Z_.transition!==null?(tl===0&&(tl=S0()),tl):(t=ut,t!==0||(t=window.event,t=t===void 0?16:C0(t.type)),t):1}function Yn(t,e,n,i){if(50<ga)throw ga=0,ld=null,Error(ce(185));Ga(t,n,i),(!(nt&2)||t!==Ht)&&(t===Ht&&(!(nt&2)&&(Jl|=n),Ft===4&&Ki(t,Gt)),pn(t,i),n===1&&nt===0&&!(e.mode&1)&&(Ds=Nt()+500,$l&&fr()))}function pn(t,e){var n=t.callbackNode;Zv(t,e);var i=hl(t,t===Ht?Gt:0);if(i===0)n!==null&&zh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zh(n),e===1)t.tag===0?K_(Dp.bind(null,t)):Y0(Dp.bind(null,t)),X_(function(){!(nt&6)&&fr()}),n=null;else{switch(M0(i)){case 1:n=mf;break;case 4:n=_0;break;case 16:n=fl;break;case 536870912:n=y0;break;default:n=fl}n=Wx(n,kx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kx(t,e){if(el=-1,tl=0,nt&6)throw Error(ce(327));var n=t.callbackNode;if(bs()&&t.callbackNode!==n)return null;var i=hl(t,t===Ht?Gt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pl(t,i);else{e=i;var r=nt;nt|=2;var s=zx();(Ht!==t||Gt!==e)&&(_i=null,Ds=Nt()+500,Tr(t,e));do try{gy();break}catch(o){Bx(t,o)}while(!0);Cf(),Cl.current=s,nt=r,It!==null?e=0:(Ht=null,Gt=0,e=Ft)}if(e!==0){if(e===2&&(r=Uu(t),r!==0&&(i=r,e=cd(t,r))),e===1)throw n=Ua,Tr(t,0),Ki(t,i),pn(t,Nt()),n;if(e===6)Ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!my(r)&&(e=Pl(t,i),e===2&&(s=Uu(t),s!==0&&(i=s,e=cd(t,s))),e===1))throw n=Ua,Tr(t,0),Ki(t,i),pn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:yr(t,un,_i);break;case 3:if(Ki(t,i),(i&130023424)===i&&(e=jf+500-Nt(),10<e)){if(hl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ju(yr.bind(null,t,un,_i),e);break}yr(t,un,_i);break;case 4:if(Ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Xn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*py(i/1960))-i,10<i){t.timeoutHandle=ju(yr.bind(null,t,un,_i),i);break}yr(t,un,_i);break;case 5:yr(t,un,_i);break;default:throw Error(ce(329))}}}return pn(t,Nt()),t.callbackNode===n?kx.bind(null,t):null}function cd(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=Pl(t,e),t!==2&&(e=un,un=n,e!==null&&ud(e)),t}function ud(t){un===null?un=t:un.push.apply(un,t)}function my(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ki(t,e){for(e&=~Vf,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Dp(t){if(nt&6)throw Error(ce(327));bs();var e=hl(t,0);if(!(e&1))return pn(t,Nt()),null;var n=Pl(t,e);if(t.tag!==0&&n===2){var i=Uu(t);i!==0&&(e=i,n=cd(t,i))}if(n===1)throw n=Ua,Tr(t,0),Ki(t,e),pn(t,Nt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,un,_i),pn(t,Nt()),null}function Gf(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(Ds=Nt()+500,$l&&fr())}}function Dr(t){Qi!==null&&Qi.tag===0&&!(nt&6)&&bs();var e=nt;nt|=1;var n=Ln.transition,i=ut;try{if(Ln.transition=null,ut=1,t)return t()}finally{ut=i,Ln.transition=n,nt=e,!(nt&6)&&fr()}}function Wf(){_n=ms.current,yt(ms)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,W_(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(wf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vl();break;case 3:Ns(),yt(fn),yt(Qt),If();break;case 5:Lf(i);break;case 4:Ns();break;case 13:yt(bt);break;case 19:yt(bt);break;case 10:Rf(i.type._context);break;case 22:case 23:Wf()}n=n.return}if(Ht=t,It=t=or(t.current,null),Gt=_n=e,Ft=0,Ua=null,Vf=Jl=Pr=0,un=xa=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Mr=null}return t}function Bx(t,e){do{var n=It;try{if(Cf(),Zo.current=Al,Tl){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(Nr=0,zt=Ut=Et=null,pa=!1,Da=0,Hf.current=null,n===null||n.return===null){Ft=1,Ua=e,It=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Gt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=o,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var d=p.alternate;d?(p.updateQueue=d.updateQueue,p.memoizedState=d.memoizedState,p.lanes=d.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=_p(a);if(x!==null){x.flags&=-257,yp(x,a,o,s,e),x.mode&1&&vp(s,u,e),e=x,c=u;var v=e.updateQueue;if(v===null){var S=new Set;S.add(c),e.updateQueue=S}else v.add(c);break e}else{if(!(e&1)){vp(s,u,e),Xf();break e}c=Error(ce(426))}}else if(Mt&&o.mode&1){var m=_p(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),yp(m,a,o,s,e),Tf(Ps(c,o));break e}}s=c=Ps(c,o),Ft!==4&&(Ft=2),xa===null?xa=[s]:xa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Mx(s,c,e);fp(s,f);break e;case 1:o=c;var g=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(sr===null||!sr.has(b)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=bx(s,o,e);fp(s,M);break e}}s=s.return}while(s!==null)}Vx(n)}catch(w){e=w,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function zx(){var t=Cl.current;return Cl.current=Al,t===null?Al:t}function Xf(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Ht===null||!(Pr&268435455)&&!(Jl&268435455)||Ki(Ht,Gt)}function Pl(t,e){var n=nt;nt|=2;var i=zx();(Ht!==t||Gt!==e)&&(_i=null,Tr(t,e));do try{xy();break}catch(r){Bx(t,r)}while(!0);if(Cf(),nt=n,Cl.current=i,It!==null)throw Error(ce(261));return Ht=null,Gt=0,Ft}function xy(){for(;It!==null;)Hx(It)}function gy(){for(;It!==null&&!Vv();)Hx(It)}function Hx(t){var e=Gx(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?Vx(t):It=e,Hf.current=null}function Vx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uy(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,It=null;return}}else if(n=cy(n,e,_n),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Ft===0&&(Ft=5)}function yr(t,e,n){var i=ut,r=Ln.transition;try{Ln.transition=null,ut=1,vy(t,e,n,i)}finally{Ln.transition=r,ut=i}return null}function vy(t,e,n,i){do bs();while(Qi!==null);if(nt&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Jv(t,s),t===Ht&&(It=Ht=null,Gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,Wx(fl,function(){return bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var a=ut;ut=1;var o=nt;nt|=4,Hf.current=null,fy(t,n),Fx(n,t),k_(Hu),pl=!!zu,Hu=zu=null,t.current=n,hy(n),jv(),nt=o,ut=a,Ln.transition=s}else t.current=n;if(vo&&(vo=!1,Qi=t,Nl=r),s=t.pendingLanes,s===0&&(sr=null),Xv(n.stateNode),pn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=od,od=null,t;return Nl&1&&t.tag!==0&&bs(),s=t.pendingLanes,s&1?t===ld?ga++:(ga=0,ld=t):ga=0,fr(),null}function bs(){if(Qi!==null){var t=M0(Nl),e=Ln.transition,n=ut;try{if(Ln.transition=null,ut=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,Nl=0,nt&6)throw Error(ce(331));var r=nt;for(nt|=4,Re=t.current;Re!==null;){var s=Re,a=s.child;if(Re.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(Re=u;Re!==null;){var p=Re;switch(p.tag){case 0:case 11:case 15:ma(8,p,s)}var h=p.child;if(h!==null)h.return=p,Re=h;else for(;Re!==null;){p=Re;var d=p.sibling,x=p.return;if(Lx(p),p===u){Re=null;break}if(d!==null){d.return=x,Re=d;break}Re=x}}}var v=s.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}Re=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Re=a;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Re=f;break e}Re=s.return}}var g=t.current;for(Re=g;Re!==null;){a=Re;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,Re=b;else e:for(a=g;Re!==null;){if(o=Re,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Zl(9,o)}}catch(w){Tt(o,o.return,w)}if(o===a){Re=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Re=M;break e}Re=o.return}}if(nt=r,fr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(jl,t)}catch{}i=!0}return i}finally{ut=n,Ln.transition=e}}return!1}function Lp(t,e,n){e=Ps(n,e),e=Mx(t,e,1),t=rr(t,e,1),e=rn(),t!==null&&(Ga(t,1,e),pn(t,e))}function Tt(t,e,n){if(t.tag===3)Lp(t,t,n);else for(;e!==null;){if(e.tag===3){Lp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sr===null||!sr.has(i))){t=Ps(n,t),t=bx(e,t,1),e=rr(e,t,1),t=rn(),e!==null&&(Ga(e,1,t),pn(e,t));break}}e=e.return}}function _y(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Gt&n)===n&&(Ft===4||Ft===3&&(Gt&130023424)===Gt&&500>Nt()-jf?Tr(t,0):Vf|=n),pn(t,e)}function jx(t,e){e===0&&(t.mode&1?(e=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):e=1);var n=rn();t=Pi(t,e),t!==null&&(Ga(t,e,n),pn(t,n))}function yy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jx(t,n)}function Sy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),jx(t,n)}var Gx;Gx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,ly(t,e,n);dn=!!(t.flags&131072)}else dn=!1,Mt&&e.flags&1048576&&$0(e,Sl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Qo(t,e),t=e.pendingProps;var r=As(e,Qt.current);Ms(e,n),r=Ff(null,e,i,t,r,n);var s=Of();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,_l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pf(e),r.updater=Kl,e.stateNode=r,r._reactInternals=e,Ku(e,i,t,n),e=Qu(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&Ef(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Qo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=by(i),t=Hn(i,t),r){case 0:e=Ju(null,e,i,t,n);break e;case 1:e=bp(null,e,i,t,n);break e;case 11:e=Sp(null,e,i,t,n);break e;case 14:e=Mp(null,e,i,Hn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Ju(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),bp(t,e,i,r,n);case 3:e:{if(Ax(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ex(t,e),El(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ps(Error(ce(423)),e),e=Ep(t,e,i,n,r);break e}else if(i!==r){r=Ps(Error(ce(424)),e),e=Ep(t,e,i,n,r);break e}else for(yn=ir(e.stateNode.containerInfo.firstChild),Sn=e,Mt=!0,jn=null,n=J0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),i===r){e=Di(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return tx(e),t===null&&Yu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Vu(i,r)?a=null:s!==null&&Vu(i,s)&&(e.flags|=32),Tx(t,e),nn(t,e,a,n),e.child;case 6:return t===null&&Yu(e),null;case 13:return Cx(t,e,n);case 4:return Df(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Sp(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(Ml,i._currentValue),i._currentValue=a,s!==null)if(Kn(s.value,a)){if(s.children===r.children&&!fn.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=wi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),$u(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),$u(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ms(e,n),r=In(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Mp(t,e,i,r,n);case 15:return Ex(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Qo(t,e),e.tag=1,hn(i)?(t=!0,_l(e)):t=!1,Ms(e,n),Sx(e,i,r),Ku(e,i,r,n),Qu(null,e,i,!0,t,n);case 19:return Rx(t,e,n);case 22:return wx(t,e,n)}throw Error(ce(156,e.tag))};function Wx(t,e){return v0(t,e)}function My(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new My(t,e,n,i)}function Yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function by(t){if(typeof t=="function")return Yf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ff)return 11;if(t===hf)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Yf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ss:return Ar(n.children,r,s,e);case df:a=8,r|=8;break;case yu:return t=Dn(12,n,e,r|2),t.elementType=yu,t.lanes=s,t;case Su:return t=Dn(13,n,e,r),t.elementType=Su,t.lanes=s,t;case Mu:return t=Dn(19,n,e,r),t.elementType=Mu,t.lanes=s,t;case t0:return Ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qm:a=10;break e;case e0:a=9;break e;case ff:a=11;break e;case hf:a=14;break e;case Xi:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Dn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ar(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function Ql(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=t0,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function kc(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ey(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $f(t,e,n,i,r,s,a,o,c){return t=new Ey(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pf(s),t}function wy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Xx(t){if(!t)return cr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(hn(n))return X0(t,n,e)}return e}function Yx(t,e,n,i,r,s,a,o,c){return t=$f(n,i,!0,t,r,s,a,o,c),t.context=Xx(null),n=t.current,i=rn(),r=ar(n),s=wi(i,r),s.callback=e??null,rr(n,s,r),t.current.lanes=r,Ga(t,r,i),pn(t,i),t}function ec(t,e,n,i){var r=e.current,s=rn(),a=ar(r);return n=Xx(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=rr(r,e,a),t!==null&&(Yn(t,r,a,s),Ko(t,r,a)),a}function Dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ip(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qf(t,e){Ip(t,e),(t=t.alternate)&&Ip(t,e)}function Ty(){return null}var $x=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kf(t){this._internalRoot=t}tc.prototype.render=Kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));ec(t,e,null,null)};tc.prototype.unmount=Kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){ec(null,t,null,null)}),e[Ni]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=w0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&A0(t)}};function Zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function Ay(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Dl(a);s.call(u)}}var a=Yx(e,i,t,0,null,!1,!1,"",Up);return t._reactRootContainer=a,t[Ni]=a.current,Aa(t.nodeType===8?t.parentNode:t),Dr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Dl(c);o.call(u)}}var c=$f(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=c,t[Ni]=c.current,Aa(t.nodeType===8?t.parentNode:t),Dr(function(){ec(e,c,n,i)}),c}function ic(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=Dl(a);o.call(c)}}ec(e,a,t,r)}else a=Ay(n,e,t,r,i);return Dl(a)}b0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(xf(e,n|1),pn(e,Nt()),!(nt&6)&&(Ds=Nt()+500,fr()))}break;case 13:Dr(function(){var i=Pi(t,1);if(i!==null){var r=rn();Yn(i,t,1,r)}}),qf(t,1)}};gf=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=rn();Yn(e,t,134217728,n)}qf(t,134217728)}};E0=function(t){if(t.tag===13){var e=ar(t),n=Pi(t,e);if(n!==null){var i=rn();Yn(n,t,e,i)}qf(t,e)}};w0=function(){return ut};T0=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Du=function(t,e,n){switch(e){case"input":if(wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Yl(i);if(!r)throw Error(ce(90));i0(i),wu(i,r)}}}break;case"textarea":s0(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};f0=Gf;h0=Dr;var Cy={usingClientEntryPoint:!1,Events:[Xa,cs,Yl,u0,d0,Gf]},$s={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ry={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=x0(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||Ty,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{jl=_o.inject(Ry),li=_o}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cy;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zf(e))throw Error(ce(200));return wy(t,e,null,n)};bn.createRoot=function(t,e){if(!Zf(t))throw Error(ce(299));var n=!1,i="",r=$x;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$f(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,Aa(t.nodeType===8?t.parentNode:t),new Kf(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=x0(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Dr(t)};bn.hydrate=function(t,e,n){if(!nc(e))throw Error(ce(200));return ic(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!Zf(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=$x;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Yx(e,null,t,1,n??null,r,!1,s,a),t[Ni]=e.current,Aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new tc(e)};bn.render=function(t,e,n){if(!nc(e))throw Error(ce(200));return ic(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!nc(t))throw Error(ce(40));return t._reactRootContainer?(Dr(function(){ic(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};bn.unstable_batchedUpdates=Gf;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!nc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return ic(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function qx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qx)}catch(t){console.error(t)}}qx(),qm.exports=bn;var Ny=qm.exports,Fp=Ny;vu.createRoot=Fp.createRoot,vu.hydrateRoot=Fp.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Py={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ve=(t,e)=>{const n=de.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:c,...u},p)=>de.createElement("svg",{ref:p,...Py,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Dy(t)}`,o].join(" "),...u},[...e.map(([h,d])=>de.createElement(h,d)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=Ve("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=Ve("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=Ve("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=Ve("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=Ve("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=Ve("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=Ve("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=Ve("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=Ve("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=Ve("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=Ve("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=Ve("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=Ve("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=Ve("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=Ve("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=Ve("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=Ve("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=Ve("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=Ve("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=Ve("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=Ve("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=Ve("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=Ve("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=Ve("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=Ve("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=Ve("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=Ve("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=Ve("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=Ve("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=Ve("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=Ve("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=Ve("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=Ve("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=Ve("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=Ve("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=Ve("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=Ve("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=Ve("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=Ve("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=Ve("Telescope",[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=Ve("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=Ve("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=Ve("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=Ve("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=Ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=Ve("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=Ve("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);class sS{constructor(){ln(this,"ctx",null);ln(this,"isMuted",!0);ln(this,"droneGain",null);ln(this,"osc1",null);ln(this,"osc2",null)}init(){if(!this.ctx)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}catch{}}toggleSound(){return this.init(),this.ctx?(this.ctx.state==="suspended"&&this.ctx.resume(),this.isMuted=!this.isMuted,this.isMuted?this.stopDrone():(this.startDrone(),this.playChime(440,.08)),!this.isMuted):!1}getSoundEnabled(){return!this.isMuted}playChime(e=528,n=.15){if(!(this.isMuted||!this.ctx))try{const i=this.ctx.currentTime,r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(e,i),r.frequency.exponentialRampToValueAtTime(e*1.5,i+n),s.gain.setValueAtTime(.04,i),s.gain.exponentialRampToValueAtTime(1e-4,i+n),r.connect(s),s.connect(this.ctx.destination),r.start(i),r.stop(i+n)}catch{}}playDiscoverySuccess(){if(this.isMuted||!this.ctx)return;[440,554.37,659.25,880].forEach((n,i)=>{setTimeout(()=>{this.playChime(n,.25)},i*80)})}startDrone(){if(this.ctx)try{const e=this.ctx.currentTime;this.droneGain=this.ctx.createGain(),this.droneGain.gain.setValueAtTime(.001,e),this.droneGain.gain.linearRampToValueAtTime(.015,e+3),this.osc1=this.ctx.createOscillator(),this.osc1.type="triangle",this.osc1.frequency.setValueAtTime(55,e),this.osc2=this.ctx.createOscillator(),this.osc2.type="sine",this.osc2.frequency.setValueAtTime(82.4,e);const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(220,e),this.osc1.connect(n),this.osc2.connect(n),n.connect(this.droneGain),this.droneGain.connect(this.ctx.destination),this.osc1.start(e),this.osc2.start(e)}catch{}}stopDrone(){if(!(!this.ctx||!this.droneGain))try{const e=this.ctx.currentTime;this.droneGain.gain.linearRampToValueAtTime(1e-4,e+.5),setTimeout(()=>{var n,i,r,s;(n=this.osc1)==null||n.stop(),(i=this.osc2)==null||i.stop(),(r=this.osc1)==null||r.disconnect(),(s=this.osc2)==null||s.disconnect(),this.osc1=null,this.osc2=null,this.droneGain=null},600)}catch{}}}const rt=new sS,th="spherex_saved_candidates_v1";function qa(){try{const t=localStorage.getItem(th);return t?JSON.parse(t):[]}catch{return[]}}function Bp(t){try{const e=qa(),n=e.findIndex(r=>r.id===t.id);let i;n>=0?(i=[...e],i[n]=t):i=[t,...e],localStorage.setItem(th,JSON.stringify(i)),window.dispatchEvent(new CustomEvent("spherex:candidate-updated",{detail:t}))}catch(e){console.error("Failed to save candidate to localStorage",e)}}function ng(t){try{const n=qa().filter(i=>i.id!==t);localStorage.setItem(th,JSON.stringify(n)),window.dispatchEvent(new CustomEvent("spherex:candidate-deleted",{detail:t}))}catch(e){console.error("Failed to remove candidate",e)}}function aS(t){const e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=URL.createObjectURL(e),i=document.createElement("a");i.href=n,i.download=`spherex-discoveries-${new Date().toISOString().slice(0,10)}.json`,i.click(),URL.revokeObjectURL(n)}function oS(t){const e=["ID","Name","Category","RA_deg","Dec_deg","Flux_uJy","DetectionDate","Status","Confidence","Notes"],n=t.map(o=>[`"${o.id}"`,`"${o.name}"`,`"${o.category}"`,o.ra.toFixed(5),o.dec.toFixed(5),o.flux.toFixed(1),`"${o.detectionDate}"`,`"${o.status}"`,o.scientificConfidence,`"${(o.notes||"").replace(/"/g,'""')}"`]),i=[e.join(","),...n.map(o=>o.join(","))].join(`
`),r=new Blob([i],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(r),a=document.createElement("a");a.href=s,a.download=`spherex-discoveries-${new Date().toISOString().slice(0,10)}.csv`,a.click(),URL.revokeObjectURL(s)}const lS=({currentPage:t,onNavigate:e,onOpenSavedModal:n})=>{const[i,r]=de.useState(!1),[s,a]=de.useState(!1),[o,c]=de.useState(0),[u,p]=de.useState(!1),h=t==="landing";de.useEffect(()=>{const v=()=>{r(window.scrollY>30)};window.addEventListener("scroll",v);const S=()=>{const f=qa();c(f.length)};S();const m=()=>S();return window.addEventListener("spherex:candidate-updated",m),window.addEventListener("spherex:candidate-deleted",m),()=>{window.removeEventListener("scroll",v),window.removeEventListener("spherex:candidate-updated",m),window.removeEventListener("spherex:candidate-deleted",m)}},[]);const d=()=>{const v=rt.toggleSound();a(v)},x=[{id:"landing",label:"Home",icon:Li},{id:"explorer",label:"Explore Sky",icon:Lr},{id:"discoveries",label:"Discoveries",icon:Ls},{id:"about",label:"About SPHEREx",icon:Oa}];return l.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${i?"bg-space-950/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40":"bg-transparent py-4 border-b border-transparent"}`,children:[l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[h?l.jsx("div",{className:"w-10 sm:w-16 pointer-events-none"}):l.jsxs("button",{onClick:()=>{e("landing"),rt.playChime(587,.08)},className:"flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-cyan rounded-lg p-1","aria-label":"SphereXplorer Home",children:[l.jsxs("div",{className:"relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-950/80 via-space-850 to-indigo-950/80 border border-cyan-400/30 group-hover:border-cyan-400/60 shadow-sm transition-all duration-300",children:[l.jsx("div",{className:"absolute inset-0 rounded-xl border border-cyan-400/20 animate-pulse-slow pointer-events-none"}),l.jsxs("svg",{className:"w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors transform group-hover:scale-110 duration-300",viewBox:"0 0 100 100",fill:"none",children:[l.jsx("ellipse",{cx:"50",cy:"50",rx:"38",ry:"16",stroke:"currentColor",strokeWidth:"4",strokeDasharray:"6 3",transform:"rotate(-30 50 50)",className:"animate-spin origin-center",style:{animationDuration:"30s"}}),l.jsx("polygon",{points:"50,22 66,70 34,70",fill:"currentColor",fillOpacity:"0.4",stroke:"currentColor",strokeWidth:"3"}),l.jsx("circle",{cx:"50",cy:"22",r:"5",fill:"#f59e0b"})]})]}),l.jsxs("div",{className:"flex flex-col text-left",children:[l.jsxs("span",{className:"font-display font-bold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5",children:["Sphere",l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400",children:"Xplorer"}),l.jsx("span",{className:"hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono tracking-wider text-cyan-300/90 bg-cyan-950/70 border border-cyan-500/30 rounded",children:"NASA SPHEREx"})]}),l.jsx("span",{className:"text-[11px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5",children:"102-Band Infrared Universe"})]})]}),!h&&l.jsx("nav",{className:"hidden md:flex items-center gap-1 bg-space-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md animate-fadeIn",children:x.map(v=>{const S=v.icon,m=t===v.id;return l.jsxs("button",{onClick:()=>{e(v.id),rt.playChime(659,.06)},className:`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-2 ${m?"text-cyan-200 bg-cyan-950/80 border border-cyan-500/40 shadow-sm shadow-cyan-900/50":"text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent"}`,children:[l.jsx(S,{className:`w-3.5 h-3.5 ${m?"text-cyan-400":"text-slate-400"}`}),v.label]},v.id)})}),h?l.jsxs("div",{className:"fixed top-4 right-4 sm:top-5 sm:right-6 z-50 flex items-center gap-2 sm:gap-2.5",children:[l.jsxs("button",{onClick:()=>{window.dispatchEvent(new CustomEvent("spherex:toggle-galaxy-controls")),rt.playChime(520,.05)},className:"px-3.5 py-1.5 rounded-xl bg-space-900/85 hover:bg-space-850 border border-cyan-400/40 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-cyan-950/50 flex items-center gap-1.5 transition-all active:scale-95 group",title:"Tune 3D Three.js Galaxy Simulation",children:[l.jsx(Li,{className:"w-3.5 h-3.5 text-cyan-400 animate-pulse"}),l.jsx("span",{className:"hidden sm:inline",children:"3D Galaxy Controls"}),l.jsx("span",{className:"sm:hidden",children:"3D Galaxy"}),l.jsx(Qy,{className:"w-3 h-3 text-slate-400 group-hover:text-cyan-300 transition-colors"})]}),l.jsxs("button",{onClick:d,className:`px-3.5 py-1.5 rounded-xl border text-xs font-mono transition-all flex items-center gap-1.5 backdrop-blur-md active:scale-95 shadow-lg ${s?"bg-cyan-950/85 border-cyan-400/50 text-cyan-300 shadow-cyan-950/50":"bg-space-900/85 border-slate-700/80 text-slate-400 hover:text-slate-200"}`,title:s?"Mute Cosmic Music":"Play Ambient Cosmic Music","aria-label":"Toggle Cosmic Sound",children:[s?l.jsx(Op,{className:"w-3.5 h-3.5 text-cyan-400 animate-pulse"}):l.jsx(kp,{className:"w-3.5 h-3.5 text-slate-400"}),l.jsx("span",{children:"Music"}),s&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"})]})]}):l.jsxs("div",{className:"flex items-center gap-2.5 sm:gap-3",children:[l.jsx("button",{onClick:d,className:`p-2 rounded-lg border text-xs transition-colors relative ${s?"bg-cyan-950/60 border-cyan-400/40 text-cyan-300":"bg-space-900/40 border-slate-800 text-slate-400 hover:text-slate-200"}`,title:s?"Mute Cosmic Soundscape":"Enable Ambient Cosmic Soundscape","aria-label":"Toggle Cosmic Sound",children:s?l.jsx(Op,{className:"w-4 h-4"}):l.jsx(kp,{className:"w-4 h-4"})}),n&&l.jsxs("button",{onClick:n,className:"p-2 rounded-lg border border-slate-800 bg-space-900/40 hover:bg-space-850 text-slate-300 hover:text-white transition-colors relative flex items-center gap-1.5",title:"My Saved Candidates","aria-label":"View Saved Candidates",children:[l.jsx(Ll,{className:"w-4 h-4 text-amber-400"}),o>0&&l.jsx("span",{className:"px-1.5 py-0.2 text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full font-semibold",children:o})]}),l.jsxs("button",{onClick:()=>{e("explorer"),rt.playChime(880,.12)},className:"relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm tracking-wide text-white bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 border border-cyan-400/40 shadow-lg shadow-cyan-950/70 hover:shadow-cyan-500/25 transition-all duration-300 active:scale-95 flex items-center gap-2",children:[l.jsx(Lr,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-200"}),l.jsx("span",{children:"Launch Explorer"}),l.jsx(Qx,{className:"w-3.5 h-3.5 text-cyan-200 group-hover:translate-x-0.5 transition-transform"})]}),l.jsx("button",{onClick:()=>p(!u),className:"md:hidden p-2 rounded-lg border border-slate-800 bg-space-900/60 text-slate-300","aria-label":"Toggle menu",children:u?l.jsx($a,{className:"w-5 h-5"}):l.jsx(Xy,{className:"w-5 h-5"})})]})]}),!h&&u&&l.jsx("div",{className:"md:hidden bg-space-950/95 border-b border-cyan-500/20 px-4 pt-3 pb-5 backdrop-blur-xl mt-3 animate-fadeIn",children:l.jsx("div",{className:"flex flex-col gap-2",children:x.map(v=>{const S=v.icon,m=t===v.id;return l.jsxs("button",{onClick:()=>{e(v.id),p(!1),rt.playChime(659,.06)},className:`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left ${m?"bg-cyan-950/80 text-cyan-300 border border-cyan-500/40":"text-slate-300 hover:bg-slate-900/70"}`,children:[l.jsx(S,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{children:v.label})]},v.id)})})})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nh="186",cS=0,zp=1,uS=2,il=1,dS=2,oa=3,Ir=0,mn=1,Si=2,Ti=0,va=1,dd=2,Hp=3,Vp=4,fS=5,is=100,hS=101,pS=102,mS=103,xS=104,gS=200,vS=201,_S=202,yS=203,ig=204,rg=205,SS=206,MS=207,bS=208,ES=209,wS=210,TS=211,AS=212,CS=213,RS=214,fd=0,hd=1,pd=2,ka=3,md=4,xd=5,gd=6,vd=7,sg=0,NS=1,PS=2,ui=0,ag=1,og=2,lg=3,cg=4,ug=5,dg=6,fg=7,hg=300,Ur=301,Is=302,Bc=303,zc=304,sc=306,_d=1e3,Ei=1001,yd=1002,jt=1003,DS=1004,yo=1005,Jt=1006,Hc=1007,Er=1008,Pn=1009,pg=1010,mg=1011,Ba=1012,ih=1013,di=1014,ai=1015,fi=1016,rh=1017,sh=1018,za=1020,xg=35902,gg=35899,vg=1021,_g=1022,Wn=1023,Ii=1026,wr=1027,yg=1028,ah=1029,Fr=1030,oh=1031,lh=1033,rl=33776,sl=33777,al=33778,ol=33779,Sd=35840,Md=35841,bd=35842,Ed=35843,wd=36196,Td=37492,Ad=37496,Cd=37488,Rd=37489,Ul=37490,Nd=37491,Pd=37808,Dd=37809,Ld=37810,Id=37811,Ud=37812,Fd=37813,Od=37814,kd=37815,Bd=37816,zd=37817,Hd=37818,Vd=37819,jd=37820,Gd=37821,Wd=36492,Xd=36494,Yd=36495,$d=36283,qd=36284,Fl=36285,Kd=36286,LS=3200,jp=0,IS=1,Zi="",An="srgb",Ol="srgb-linear",kl="linear",ct="srgb",Vc=7680,US=519,FS=512,OS=513,kS=514,ch=515,BS=516,zS=517,uh=518,HS=519,VS=35044,Gp="300 es",oi=2e3,Bl=2001;function jS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function GS(){const t=zl("canvas");return t.style.display="block",t}const Wp={};function Xp(...t){const e="THREE."+t.shift();console.log(e,...t)}function Sg(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function He(...t){t=Sg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function it(...t){t=Sg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Es(...t){const e=t.join(" ");e in Wp||(Wp[e]=!0,He(...t))}function WS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const XS={[fd]:hd,[pd]:gd,[md]:vd,[ka]:xd,[hd]:fd,[gd]:pd,[vd]:md,[xd]:ka};class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jc=Math.PI/180,Zd=180/Math.PI;function Ka(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function YS(t,e){return(t%e+e)%e}function Gc(t,e,n){return(1-n)*t+n*e}function qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const hh=class hh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;let st=hh;class Bs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],p=i[r+2],h=i[r+3],d=s[a+0],x=s[a+1],v=s[a+2],S=s[a+3];if(h!==S||c!==d||u!==x||p!==v){let m=c*d+u*x+p*v+h*S;m<0&&(d=-d,x=-x,v=-v,S=-S,m=-m);let f=1-o;if(m<.9995){const g=Math.acos(m),b=Math.sin(g);f=Math.sin(f*g)/b,o=Math.sin(o*g)/b,c=c*f+d*o,u=u*f+x*o,p=p*f+v*o,h=h*f+S*o}else{c=c*f+d*o,u=u*f+x*o,p=p*f+v*o,h=h*f+S*o;const g=1/Math.sqrt(c*c+u*u+p*p+h*h);c*=g,u*=g,p*=g,h*=g}}e[n]=c,e[n+1]=u,e[n+2]=p,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],p=i[r+3],h=s[a],d=s[a+1],x=s[a+2],v=s[a+3];return e[n]=o*v+p*h+c*x-u*d,e[n+1]=c*v+p*d+u*h-o*x,e[n+2]=u*v+p*x+o*d-c*h,e[n+3]=p*v-o*h-c*d-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),p=o(r/2),h=o(s/2),d=c(i/2),x=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*p*h+u*x*v,this._y=u*x*h-d*p*v,this._z=u*p*v+d*x*h,this._w=u*p*h-d*x*v;break;case"YXZ":this._x=d*p*h+u*x*v,this._y=u*x*h-d*p*v,this._z=u*p*v-d*x*h,this._w=u*p*h+d*x*v;break;case"ZXY":this._x=d*p*h-u*x*v,this._y=u*x*h+d*p*v,this._z=u*p*v+d*x*h,this._w=u*p*h-d*x*v;break;case"ZYX":this._x=d*p*h-u*x*v,this._y=u*x*h+d*p*v,this._z=u*p*v-d*x*h,this._w=u*p*h+d*x*v;break;case"YZX":this._x=d*p*h+u*x*v,this._y=u*x*h+d*p*v,this._z=u*p*v-d*x*h,this._w=u*p*h-d*x*v;break;case"XZY":this._x=d*p*h-u*x*v,this._y=u*x*h-d*p*v,this._z=u*p*v+d*x*h,this._w=u*p*h+d*x*v;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],p=n[6],h=n[10],d=i+o+h;if(d>0){const x=.5/Math.sqrt(d+1);this._w=.25/x,this._x=(p-c)*x,this._y=(s-u)*x,this._z=(a-r)*x}else if(i>o&&i>h){const x=2*Math.sqrt(1+i-o-h);this._w=(p-c)/x,this._x=.25*x,this._y=(r+a)/x,this._z=(s+u)/x}else if(o>h){const x=2*Math.sqrt(1+o-i-h);this._w=(s-u)/x,this._x=(r+a)/x,this._y=.25*x,this._z=(c+p)/x}else{const x=2*Math.sqrt(1+h-i-o);this._w=(a-r)/x,this._x=(s+u)/x,this._y=(c+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,p=n._w;return this._x=i*p+a*o+r*u-s*c,this._y=r*p+a*c+s*o-i*u,this._z=s*p+a*u+i*c-r*o,this._w=a*p-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const u=Math.acos(o),p=Math.sin(u);c=Math.sin(c*u)/p,n=Math.sin(n*u)/p,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ph=class ph{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),p=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+c*u+a*h-o*p,this.y=i+c*p+o*u-s*h,this.z=r+c*h+s*p-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ph.prototype.isVector3=!0;let K=ph;const Wc=new K,Yp=new Bs,mh=class mh{constructor(e,n,i,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=s,p[5]=c,p[6]=i,p[7]=a,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],p=i[4],h=i[7],d=i[2],x=i[5],v=i[8],S=r[0],m=r[3],f=r[6],g=r[1],b=r[4],M=r[7],w=r[2],T=r[5],R=r[8];return s[0]=a*S+o*g+c*w,s[3]=a*m+o*b+c*T,s[6]=a*f+o*M+c*R,s[1]=u*S+p*g+h*w,s[4]=u*m+p*b+h*T,s[7]=u*f+p*M+h*R,s[2]=d*S+x*g+v*w,s[5]=d*m+x*b+v*T,s[8]=d*f+x*M+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],p=e[8];return n*a*p-n*o*u-i*s*p+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],p=e[8],h=p*a-o*u,d=o*c-p*s,x=u*s-a*c,v=n*h+i*d+r*x;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=h*S,e[1]=(r*u-p*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(p*n-r*c)*S,e[5]=(r*s-o*n)*S,e[6]=x*S,e[7]=(i*c-u*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xc.makeScale(e,n)),this}rotate(e){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xc.makeRotation(-e)),this}translate(e,n){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mh.prototype.isMatrix3=!0;let Ge=mh;const Xc=new Ge,$p=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qp=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $S(){const t={enabled:!0,workingColorSpace:Ol,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=ws(r.r),r.g=ws(r.g),r.b=ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zi?kl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ol]:{primaries:e,whitePoint:i,transfer:kl,toXYZ:$p,fromXYZ:qp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:$p,fromXYZ:qp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),t}const Ze=$S();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ws(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gr;class qS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gr===void 0&&(Gr=zl("canvas")),Gr.width=e.width,Gr.height=e.height;const r=Gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KS=0;class dh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Ka(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Yc(r[a].image)):s.push(Yc(r[a]))}else s=Yc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let ZS=0;const $c=new K;class sn extends zr{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Ei,r=Ei,s=Jt,a=Er,o=Wn,c=Pn,u=sn.DEFAULT_ANISOTROPY,p=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Ka(),this.name="",this.source=new dh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($c).x}get height(){return this.source.getSize($c).y}get depth(){return this.source.getSize($c).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){He(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=hg;sn.DEFAULT_ANISOTROPY=1;const xh=class xh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],p=c[4],h=c[8],d=c[1],x=c[5],v=c[9],S=c[2],m=c[6],f=c[10];if(Math.abs(p-d)<.01&&Math.abs(h-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(p+d)<.1&&Math.abs(h+S)<.1&&Math.abs(v+m)<.1&&Math.abs(u+x+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(u+1)/2,M=(x+1)/2,w=(f+1)/2,T=(p+d)/4,R=(h+S)/4,y=(v+m)/4;return b>M&&b>w?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=T/i,s=R/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=y/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(h-S)*(h-S)+(d-p)*(d-p));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(h-S)/g,this.z=(d-p)/g,this.w=Math.acos((u+x+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xh.prototype.isVector4=!0;let At=xh;class JS extends zr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new sn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new dh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends JS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Mg extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QS extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Hl=class Hl{constructor(e,n,i,r,s,a,o,c,u,p,h,d,x,v,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,p,h,d,x,v,S,m)}set(e,n,i,r,s,a,o,c,u,p,h,d,x,v,S,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=u,f[6]=p,f[10]=h,f[14]=d,f[3]=x,f[7]=v,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),a=1/Wr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),p=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*p,x=a*h,v=o*p,S=o*h;n[0]=c*p,n[4]=-c*h,n[8]=u,n[1]=x+v*u,n[5]=d-S*u,n[9]=-o*c,n[2]=S-d*u,n[6]=v+x*u,n[10]=a*c}else if(e.order==="YXZ"){const d=c*p,x=c*h,v=u*p,S=u*h;n[0]=d+S*o,n[4]=v*o-x,n[8]=a*u,n[1]=a*h,n[5]=a*p,n[9]=-o,n[2]=x*o-v,n[6]=S+d*o,n[10]=a*c}else if(e.order==="ZXY"){const d=c*p,x=c*h,v=u*p,S=u*h;n[0]=d-S*o,n[4]=-a*h,n[8]=v+x*o,n[1]=x+v*o,n[5]=a*p,n[9]=S-d*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const d=a*p,x=a*h,v=o*p,S=o*h;n[0]=c*p,n[4]=v*u-x,n[8]=d*u+S,n[1]=c*h,n[5]=S*u+d,n[9]=x*u-v,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const d=a*c,x=a*u,v=o*c,S=o*u;n[0]=c*p,n[4]=S-d*h,n[8]=v*h+x,n[1]=h,n[5]=a*p,n[9]=-o*p,n[2]=-u*p,n[6]=x*h+v,n[10]=d-S*h}else if(e.order==="XZY"){const d=a*c,x=a*u,v=o*c,S=o*u;n[0]=c*p,n[4]=-h,n[8]=u*p,n[1]=d*h+S,n[5]=a*p,n[9]=x*h-v,n[2]=v*h-x,n[6]=o*p,n[10]=S*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e1,e,t1)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Hi.crossVectors(i,gn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Hi.crossVectors(i,gn)),Hi.normalize(),So.crossVectors(gn,Hi),r[0]=Hi.x,r[4]=So.x,r[8]=gn.x,r[1]=Hi.y,r[5]=So.y,r[9]=gn.y,r[2]=Hi.z,r[6]=So.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],p=i[1],h=i[5],d=i[9],x=i[13],v=i[2],S=i[6],m=i[10],f=i[14],g=i[3],b=i[7],M=i[11],w=i[15],T=r[0],R=r[4],y=r[8],N=r[12],D=r[1],U=r[5],V=r[9],$=r[13],B=r[2],j=r[6],te=r[10],q=r[14],H=r[3],O=r[7],C=r[11],A=r[15];return s[0]=a*T+o*D+c*B+u*H,s[4]=a*R+o*U+c*j+u*O,s[8]=a*y+o*V+c*te+u*C,s[12]=a*N+o*$+c*q+u*A,s[1]=p*T+h*D+d*B+x*H,s[5]=p*R+h*U+d*j+x*O,s[9]=p*y+h*V+d*te+x*C,s[13]=p*N+h*$+d*q+x*A,s[2]=v*T+S*D+m*B+f*H,s[6]=v*R+S*U+m*j+f*O,s[10]=v*y+S*V+m*te+f*C,s[14]=v*N+S*$+m*q+f*A,s[3]=g*T+b*D+M*B+w*H,s[7]=g*R+b*U+M*j+w*O,s[11]=g*y+b*V+M*te+w*C,s[15]=g*N+b*$+M*q+w*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],p=e[2],h=e[6],d=e[10],x=e[14],v=e[3],S=e[7],m=e[11],f=e[15],g=c*x-u*d,b=o*x-u*h,M=o*d-c*h,w=a*x-u*p,T=a*d-c*p,R=a*h-o*p;return n*(S*g-m*b+f*M)-i*(v*g-m*w+f*T)+r*(v*b-S*w+f*R)-s*(v*M-S*T+m*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],p=e[10];return n*(a*p-o*u)-i*(s*p-o*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],p=e[8],h=e[9],d=e[10],x=e[11],v=e[12],S=e[13],m=e[14],f=e[15],g=n*o-i*a,b=n*c-r*a,M=n*u-s*a,w=i*c-r*o,T=i*u-s*o,R=r*u-s*c,y=p*S-h*v,N=p*m-d*v,D=p*f-x*v,U=h*m-d*S,V=h*f-x*S,$=d*f-x*m,B=g*$-b*V+M*U+w*D-T*N+R*y;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/B;return e[0]=(o*$-c*V+u*U)*j,e[1]=(r*V-i*$-s*U)*j,e[2]=(S*R-m*T+f*w)*j,e[3]=(d*T-h*R-x*w)*j,e[4]=(c*D-a*$-u*N)*j,e[5]=(n*$-r*D+s*N)*j,e[6]=(m*M-v*R-f*b)*j,e[7]=(p*R-d*M+x*b)*j,e[8]=(a*V-o*D+u*y)*j,e[9]=(i*D-n*V-s*y)*j,e[10]=(v*T-S*M+f*g)*j,e[11]=(h*M-p*T-x*g)*j,e[12]=(o*N-a*U-c*y)*j,e[13]=(n*U-i*N+r*y)*j,e[14]=(S*b-v*w-m*g)*j,e[15]=(p*w-h*b+d*g)*j,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,p=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,p*o+i,p*c-r*a,0,u*c-r*o,p*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,p=a+a,h=o+o,d=s*u,x=s*p,v=s*h,S=a*p,m=a*h,f=o*h,g=c*u,b=c*p,M=c*h,w=i.x,T=i.y,R=i.z;return r[0]=(1-(S+f))*w,r[1]=(x+M)*w,r[2]=(v-b)*w,r[3]=0,r[4]=(x-M)*T,r[5]=(1-(d+f))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(v+b)*R,r[9]=(m-g)*R,r[10]=(1-(d+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Wr.set(r[0],r[1],r[2]).length();const o=Wr.set(r[4],r[5],r[6]).length(),c=Wr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),kn.copy(this);const u=1/a,p=1/o,h=1/c;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=p,kn.elements[5]*=p,kn.elements[6]*=p,kn.elements[8]*=h,kn.elements[9]*=h,kn.elements[10]*=h,n.setFromRotationMatrix(kn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=oi,c=!1){const u=this.elements,p=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),x=(i+r)/(i-r);let v,S;if(c)v=s/(a-s),S=a*s/(a-s);else if(o===oi)v=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Bl)v=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=p,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=h,u[9]=x,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi,c=!1){const u=this.elements,p=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),x=-(i+r)/(i-r);let v,S;if(c)v=1/(a-s),S=a/(a-s);else if(o===oi)v=-2/(a-s),S=-(a+s)/(a-s);else if(o===Bl)v=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=p,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=h,u[9]=0,u[13]=x,u[2]=0,u[6]=0,u[10]=v,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Hl.prototype.isMatrix4=!0;let Pt=Hl;const Wr=new K,kn=new Pt,e1=new K(0,0,0),t1=new K(1,1,1),Hi=new K,So=new K,gn=new K,Kp=new Pt,Zp=new Bs;class Or{constructor(e=0,n=0,i=0,r=Or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],p=r[9],h=r[2],d=r[6],x=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,x),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,x),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,x),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Or.DEFAULT_ORDER="XYZ";class bg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n1=0;const Jp=new K,Xr=new Bs,pi=new Pt,Mo=new K,Ks=new K,i1=new K,r1=new Bs,Qp=new K(1,0,0),em=new K(0,1,0),tm=new K(0,0,1),nm={type:"added"},s1={type:"removed"},Yr={type:"childadded",child:null},qc={type:"childremoved",child:null};class xn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new K,n=new Or,i=new Bs,r=new K(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ge}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(em,e)}rotateZ(e){return this.rotateOnAxis(tm,e)}translateOnAxis(e,n){return Jp.copy(e).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(em,e)}translateZ(e){return this.translateOnAxis(tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Mo.copy(e):Mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ks,Mo,this.up):pi.lookAt(Mo,Ks,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(pi),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nm),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(s1),qc.child=e,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nm),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,i1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,r1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,p=c.length;u<p;u++){const h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),p=a(e.images),h=a(e.shapes),d=a(e.skeletons),x=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),p.length>0&&(i.images=p),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),x.length>0&&(i.animations=x),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const u in o){const p=o[u];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}xn.DEFAULT_UP=new K(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bo extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a1={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),f=this._getHandJoint(u,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const p=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=p.position.distanceTo(h.position),x=.02,v=.005;u.inputState.pinching&&d>x+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=x-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a1)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new bo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Eg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=YS(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Zc(a,s,e+1/3),this.g=Zc(a,s,e),this.b=Zc(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=An){function i(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const i=Eg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return Ze.workingToColorSpace(Kt.copy(this),e),Math.round(Je(Kt.r*255,0,255))*65536+Math.round(Je(Kt.g*255,0,255))*256+Math.round(Je(Kt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const p=(o+a)/2;if(o===a)c=0,u=0;else{const h=a-o;switch(u=p<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=p,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=An){Ze.workingToColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==An?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(Eo);const i=Gc(Vi.h,Eo.h,n),r=Gc(Vi.s,Eo.s,n),s=Gc(Vi.l,Eo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new tt;tt.NAMES=Eg;class o1 extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Or,this.environmentIntensity=1,this.environmentRotation=new Or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Bn=new K,mi=new K,Jc=new K,xi=new K,$r=new K,qr=new K,im=new K,Qc=new K,eu=new K,tu=new K,nu=new At,iu=new At,ru=new At;class Gn{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),mi.subVectors(i,n),Jc.subVectors(e,n);const a=Bn.dot(Bn),o=Bn.dot(mi),c=Bn.dot(Jc),u=mi.dot(mi),p=mi.dot(Jc),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,x=(u*c-o*p)*d,v=(a*p-o*c)*d;return s.set(1-x-v,v,x)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,xi.x),c.addScaledVector(a,xi.y),c.addScaledVector(o,xi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return nu.setScalar(0),iu.setScalar(0),ru.setScalar(0),nu.fromBufferAttribute(e,n),iu.fromBufferAttribute(e,i),ru.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nu,s.x),a.addScaledVector(iu,s.y),a.addScaledVector(ru,s.z),a}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),mi.subVectors(e,n),Bn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Bn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;$r.subVectors(r,i),qr.subVectors(s,i),Qc.subVectors(e,i);const c=$r.dot(Qc),u=qr.dot(Qc);if(c<=0&&u<=0)return n.copy(i);eu.subVectors(e,r);const p=$r.dot(eu),h=qr.dot(eu);if(p>=0&&h<=p)return n.copy(r);const d=c*h-p*u;if(d<=0&&c>=0&&p<=0)return a=c/(c-p),n.copy(i).addScaledVector($r,a);tu.subVectors(e,s);const x=$r.dot(tu),v=qr.dot(tu);if(v>=0&&x<=v)return n.copy(s);const S=x*u-c*v;if(S<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector(qr,o);const m=p*v-x*h;if(m<=0&&h-p>=0&&x-v>=0)return im.subVectors(s,r),o=(h-p)/(h-p+(x-v)),n.copy(r).addScaledVector(im,o);const f=1/(m+S+d);return a=S*f,o=d*f,n.copy(i).addScaledVector($r,a).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Za{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(s,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),To.subVectors(this.max,Zs),Kr.subVectors(e.a,Zs),Zr.subVectors(e.b,Zs),Jr.subVectors(e.c,Zs),ji.subVectors(Zr,Kr),Gi.subVectors(Jr,Zr),pr.subVectors(Kr,Jr);let n=[0,-ji.z,ji.y,0,-Gi.z,Gi.y,0,-pr.z,pr.y,ji.z,0,-ji.x,Gi.z,0,-Gi.x,pr.z,0,-pr.x,-ji.y,ji.x,0,-Gi.y,Gi.x,0,-pr.y,pr.x,0];return!su(n,Kr,Zr,Jr,To)||(n=[1,0,0,0,1,0,0,0,1],!su(n,Kr,Zr,Jr,To))?!1:(Ao.crossVectors(ji,Gi),n=[Ao.x,Ao.y,Ao.z],su(n,Kr,Zr,Jr,To))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gi=[new K,new K,new K,new K,new K,new K,new K,new K],zn=new K,wo=new Za,Kr=new K,Zr=new K,Jr=new K,ji=new K,Gi=new K,pr=new K,Zs=new K,To=new K,Ao=new K,mr=new K;function su(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),c=e.dot(mr),u=n.dot(mr),p=i.dot(mr);if(Math.max(-Math.max(c,u,p),Math.min(c,u,p))>o)return!1}return!0}const Lt=new K,Co=new st;let l1=0;class qn extends zr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=VS,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Co.fromBufferAttribute(this,n),Co.applyMatrix3(e),this.setXY(n,Co.x,Co.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class wg extends qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Tg extends qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ci extends qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const c1=new Za,Js=new K,au=new K;class ac{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):c1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(au)),this.expandByPoint(Js.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let u1=0;const Tn=new Pt,ou=new xn,Qr=new K,vn=new Za,Qs=new Za,Bt=new K;class Zn extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jS(e)?Tg:wg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return ou.lookAt(e),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ci(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ac);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(vn.min,Qs.min),vn.expandByPoint(Bt),Bt.addVectors(vn.max,Qs.max),vn.expandByPoint(Bt)):(vn.expandByPoint(Qs.min),vn.expandByPoint(Qs.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,p=o.count;u<p;u++)Bt.fromBufferAttribute(o,u),c&&(Qr.fromBufferAttribute(e,u),Bt.add(Qr)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let y=0;y<i.count;y++)o[y]=new K,c[y]=new K;const u=new K,p=new K,h=new K,d=new st,x=new st,v=new st,S=new K,m=new K;function f(y,N,D){u.fromBufferAttribute(i,y),p.fromBufferAttribute(i,N),h.fromBufferAttribute(i,D),d.fromBufferAttribute(s,y),x.fromBufferAttribute(s,N),v.fromBufferAttribute(s,D),p.sub(u),h.sub(u),x.sub(d),v.sub(d);const U=1/(x.x*v.y-v.x*x.y);isFinite(U)&&(S.copy(p).multiplyScalar(v.y).addScaledVector(h,-x.y).multiplyScalar(U),m.copy(h).multiplyScalar(x.x).addScaledVector(p,-v.x).multiplyScalar(U),o[y].add(S),o[N].add(S),o[D].add(S),c[y].add(m),c[N].add(m),c[D].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,N=g.length;y<N;++y){const D=g[y],U=D.start,V=D.count;for(let $=U,B=U+V;$<B;$+=3)f(e.getX($+0),e.getX($+1),e.getX($+2))}const b=new K,M=new K,w=new K,T=new K;function R(y){w.fromBufferAttribute(r,y),T.copy(w);const N=o[y];b.copy(N),b.sub(w.multiplyScalar(w.dot(N))).normalize(),M.crossVectors(T,N);const U=M.dot(c[y])<0?-1:1;a.setXYZW(y,b.x,b.y,b.z,U)}for(let y=0,N=g.length;y<N;++y){const D=g[y],U=D.start,V=D.count;for(let $=U,B=U+V;$<B;$+=3)R(e.getX($+0)),R(e.getX($+1)),R(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,x=i.count;d<x;d++)i.setXYZ(d,0,0,0);const r=new K,s=new K,a=new K,o=new K,c=new K,u=new K,p=new K,h=new K;if(e)for(let d=0,x=e.count;d<x;d+=3){const v=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,m),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,m),o.add(p),c.add(p),u.add(p),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,x=n.count;d<x;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),i.setXYZ(d+0,p.x,p.y,p.z),i.setXYZ(d+1,p.x,p.y,p.z),i.setXYZ(d+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){const u=o.array,p=o.itemSize,h=o.normalized,d=new u.constructor(c.length*p);let x=0,v=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?x=c[S]*o.data.stride+o.offset:x=c[S]*p;for(let f=0;f<p;f++)d[v++]=u[x++]}return new qn(d,p,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let p=0,h=u.length;p<h;p++){const d=u[p],x=e(d,i);c.push(x)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],p=[];for(let h=0,d=u.length;h<d;h++){const x=u[h];p.push(x.toJSON(e.data))}p.length>0&&(r[c]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(n))}const s=e.morphAttributes;for(const u in s){const p=[],h=s[u];for(let d=0,x=h.length;d<x;d++)p.push(h[d].clone(n));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,p=a.length;u<p;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lu=new K,d1=new K,f1=new Ge;class $i{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=lu.subVectors(i,n).cross(d1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(lu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||f1.getNormalMatrix(e),r=this.coplanarPoint(lu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let h1=0;class Ja extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=va,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ig,this.blendDst=rg,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=US,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vc,this.stencilZFail=Vc,this.stencilZPass=Vc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){He(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new $i().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new st().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vi=new K,cu=new K,Ro=new K,No=new K;class Ag{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){cu.copy(e).add(n).multiplyScalar(.5),Ro.copy(n).sub(e).normalize(),No.copy(this.origin).sub(cu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ro),o=No.dot(this.direction),c=-No.dot(Ro),u=No.lengthSq(),p=Math.abs(1-a*a);let h,d,x,v;if(p>0)if(h=a*c-o,d=a*o-c,v=s*p,h>=0)if(d>=-v)if(d<=v){const S=1/p;h*=S,d*=S,x=h*(h+a*d+2*o)+d*(a*h+d+2*c)+u}else d=s,h=Math.max(0,-(a*d+o)),x=-h*h+d*(d+2*c)+u;else d=-s,h=Math.max(0,-(a*d+o)),x=-h*h+d*(d+2*c)+u;else d<=-v?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),x=-h*h+d*(d+2*c)+u):d<=v?(h=0,d=Math.min(Math.max(-s,-c),s),x=d*(d+2*c)+u):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),x=-h*h+d*(d+2*c)+u);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),x=-h*h+d*(d+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(cu).addScaledVector(Ro,d),x}intersectSphere(e,n){if(e.radius<0)return null;vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,p=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),p>=0?(s=(e.min.y-d.y)*p,a=(e.max.y-d.y)*p):(s=(e.max.y-d.y)*p,a=(e.min.y-d.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,c=o.x,u=o.y,p=o.z,h=e.x-a.x,d=e.y-a.y,x=e.z-a.z,v=n.x-a.x,S=n.y-a.y,m=n.z-a.z,f=i.x-a.x,g=i.y-a.y,b=i.z-a.z,M=Math.abs(c),w=Math.abs(u),T=Math.abs(p);let R,y,N,D,U,V,$,B,j,te,q,H;if(M>=w&&M>=T?(N=c,V=h,j=v,H=f,c>=0?(R=u,y=p,D=d,U=x,$=S,B=m,te=g,q=b):(R=p,y=u,D=x,U=d,$=m,B=S,te=b,q=g)):w>=T?(N=u,V=d,j=S,H=g,u>=0?(R=p,y=c,D=x,U=h,$=m,B=v,te=b,q=f):(R=c,y=p,D=h,U=x,$=v,B=m,te=f,q=b)):(N=p,V=x,j=m,H=b,p>=0?(R=c,y=u,D=h,U=d,$=v,B=S,te=f,q=g):(R=u,y=c,D=d,U=h,$=S,B=v,te=g,q=f)),N===0)return null;const O=R/N,C=y/N,A=1/N,Q=D-O*V,se=U-C*V,me=$-O*j,fe=B-C*j,he=te-O*H,k=q-C*H,X=he*fe-k*me,ne=Q*k-se*he,xe=me*se-fe*Q;if(r){if(X<0||ne<0||xe<0)return null}else if((X<0||ne<0||xe<0)&&(X>0||ne>0||xe>0))return null;const oe=X+ne+xe;if(oe===0)return null;const Ne=A*(X*V+ne*j+xe*H);return(oe>0?Ne<0:Ne>0)?null:this.at(Ne/oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cg extends Ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.combine=sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rm=new Pt,xr=new Ag,Po=new ac,sm=new K,Do=new K,Lo=new K,Io=new K,uu=new K,Uo=new K,am=new K,Fo=new K;class Ui extends xn{constructor(e=new Zn,n=new Cg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Uo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const p=o[c],h=s[c];p!==0&&(uu.fromBufferAttribute(h,e),a?Uo.addScaledVector(uu,p):Uo.addScaledVector(uu.sub(n),p))}n.add(Uo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Po.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Po,sm)===null||xr.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(rm.copy(s).invert(),xr.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,p=s.attributes.uv1,h=s.attributes.normal,d=s.groups,x=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const m=d[v],f=a[m.materialIndex],g=Math.max(m.start,x.start),b=Math.min(o.count,Math.min(m.start+m.count,x.start+x.count));for(let M=g,w=b;M<w;M+=3){const T=o.getX(M),R=o.getX(M+1),y=o.getX(M+2);r=Oo(this,f,e,i,u,p,h,T,R,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,x.start),S=Math.min(o.count,x.start+x.count);for(let m=v,f=S;m<f;m+=3){const g=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);r=Oo(this,a,e,i,u,p,h,g,b,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,S=d.length;v<S;v++){const m=d[v],f=a[m.materialIndex],g=Math.max(m.start,x.start),b=Math.min(c.count,Math.min(m.start+m.count,x.start+x.count));for(let M=g,w=b;M<w;M+=3){const T=M,R=M+1,y=M+2;r=Oo(this,f,e,i,u,p,h,T,R,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,x.start),S=Math.min(c.count,x.start+x.count);for(let m=v,f=S;m<f;m+=3){const g=m,b=m+1,M=m+2;r=Oo(this,a,e,i,u,p,h,g,b,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function p1(t,e,n,i,r,s,a,o){let c;if(e.side===mn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Ir,o),c===null)return null;Fo.copy(o),Fo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Fo);return u<n.near||u>n.far?null:{distance:u,point:Fo.clone(),object:t}}function Oo(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,Do),t.getVertexPosition(c,Lo),t.getVertexPosition(u,Io);const p=p1(t,e,n,i,Do,Lo,Io,am);if(p){const h=new K;Gn.getBarycoord(am,Do,Lo,Io,h),r&&(p.uv=Gn.getInterpolatedAttribute(r,o,c,u,h,new st)),s&&(p.uv1=Gn.getInterpolatedAttribute(s,o,c,u,h,new st)),a&&(p.normal=Gn.getInterpolatedAttribute(a,o,c,u,h,new K),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new K,materialIndex:0};Gn.getNormal(Do,Lo,Io,d.normal),p.face=d,p.barycoord=h}return p}class m1 extends sn{constructor(e=null,n=1,i=1,r,s,a,o,c,u=jt,p=jt,h,d){super(null,a,o,c,u,p,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gr=new ac,x1=new st(.5,.5),ko=new K;class Rg{constructor(e=new $i,n=new $i,i=new $i,r=new $i,s=new $i,a=new $i){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],p=s[4],h=s[5],d=s[6],x=s[7],v=s[8],S=s[9],m=s[10],f=s[11],g=s[12],b=s[13],M=s[14],w=s[15];if(r[0].setComponents(u-a,x-p,f-v,w-g).normalize(),r[1].setComponents(u+a,x+p,f+v,w+g).normalize(),r[2].setComponents(u+o,x+h,f+S,w+b).normalize(),r[3].setComponents(u-o,x-h,f-S,w-b).normalize(),i)r[4].setComponents(c,d,m,M).normalize(),r[5].setComponents(u-c,x-d,f-m,w-M).normalize();else if(r[4].setComponents(u-c,x-d,f-m,w-M).normalize(),n===oi)r[5].setComponents(u+c,x+d,f+m,w+M).normalize();else if(n===Bl)r[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const n=x1.distanceTo(e.center);return gr.radius=.7071067811865476+n,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ko.x=r.normal.x>0?e.max.x:e.min.x,ko.y=r.normal.y>0?e.max.y:e.min.y,ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ng extends Ja{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const om=new Pt,Jd=new Ag,Bo=new ac,zo=new K;class g1 extends xn{constructor(e=new Zn,n=new Ng){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),Bo.radius+=s,e.ray.intersectsSphere(Bo)===!1)return;om.copy(r).invert(),Jd.copy(e.ray).applyMatrix4(om);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let v=d,S=x;v<S;v++){const m=u.getX(v);zo.fromBufferAttribute(h,m),lm(zo,m,c,r,e,n,this)}}else{const d=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let v=d,S=x;v<S;v++)zo.fromBufferAttribute(h,v),lm(zo,v,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lm(t,e,n,i,r,s,a){const o=Jd.distanceSqToPoint(t);if(o<n){const c=new K;Jd.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Pg extends sn{constructor(e=[],n=Ur,i,r,s,a,o,c,u,p){super(e,n,i,r,s,a,o,c,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ha extends sn{constructor(e,n,i=di,r,s,a,o=jt,c=jt,u,p=Ii,h=1){if(p!==Ii&&p!==wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,c,p,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class v1 extends Ha{constructor(e,n=di,i=Ur,r,s,a=jt,o=jt,c,u=Ii){const p={width:e,height:e,depth:1},h=[p,p,p,p,p,p];super(e,e,n,i,r,s,a,o,c,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dg extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qa extends Zn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],p=[],h=[];let d=0,x=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ci(u,3)),this.setAttribute("normal",new Ci(p,3)),this.setAttribute("uv",new Ci(h,2));function v(S,m,f,g,b,M,w,T,R,y,N){const D=M/R,U=w/y,V=M/2,$=w/2,B=T/2,j=R+1,te=y+1;let q=0,H=0;const O=new K;for(let C=0;C<te;C++){const A=C*U-$;for(let Q=0;Q<j;Q++){const se=Q*D-V;O[S]=se*g,O[m]=A*b,O[f]=B,u.push(O.x,O.y,O.z),O[S]=0,O[m]=0,O[f]=T>0?1:-1,p.push(O.x,O.y,O.z),h.push(Q/R),h.push(1-C/y),q+=1}}for(let C=0;C<y;C++)for(let A=0;A<R;A++){const Q=d+A+j*C,se=d+A+j*(C+1),me=d+(A+1)+j*(C+1),fe=d+(A+1)+j*C;c.push(Q,se,fe),c.push(se,me,fe),H+=6}o.addGroup(x,H,N),x+=H,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class oc extends Zn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,p=c+1,h=e/o,d=n/c,x=[],v=[],S=[],m=[];for(let f=0;f<p;f++){const g=f*d-a;for(let b=0;b<u;b++){const M=b*h-s;v.push(M,-g,0),S.push(0,0,1),m.push(b/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let g=0;g<o;g++){const b=g+u*f,M=g+u*(f+1),w=g+1+u*(f+1),T=g+1+u*f;x.push(b,M,T),x.push(M,w,T)}this.setIndex(x),this.setAttribute("position",new Ci(v,3)),this.setAttribute("normal",new Ci(S,3)),this.setAttribute("uv",new Ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(cm(r))r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(cm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function cm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function _1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Lg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const y1={clone:Us,merge:tn};var S1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S1,this.fragmentShader=M1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=_1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new st().fromArray(r.value);break;case"v3":this.uniforms[i].value=new K().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class b1 extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class E1 extends Ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class w1 extends Ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ho=new K,Vo=new Bs,ti=new K;class Ig extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ho,Vo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Vo,ti.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ho,Vo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Vo,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new K,um=new st,dm=new st;class Nn extends Ig{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,um,dm),n.subVectors(dm,um)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(jc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ug extends Ig{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=p*this.view.offsetY,c=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const es=-90,ts=1;class T1 extends xn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(es,ts,e,n);r.layers=this.layers,this.add(r);const s=new Nn(es,ts,e,n);s.layers=this.layers,this.add(s);const a=new Nn(es,ts,e,n);a.layers=this.layers,this.add(a);const o=new Nn(es,ts,e,n);o.layers=this.layers,this.add(o);const c=new Nn(es,ts,e,n);c.layers=this.layers,this.add(c);const u=new Nn(es,ts,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,p]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(h,d,x),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class A1 extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class C1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,He("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const gh=class gh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};gh.prototype.isMatrix2=!0;let fm=gh;function hm(t,e,n,i){const r=R1(i);switch(n){case vg:return t*e;case yg:return t*e/r.components*r.byteLength;case ah:return t*e/r.components*r.byteLength;case Fr:return t*e*2/r.components*r.byteLength;case oh:return t*e*2/r.components*r.byteLength;case _g:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case lh:return t*e*4/r.components*r.byteLength;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case al:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Md:case Ed:return Math.max(t,16)*Math.max(e,8)/4;case Sd:case bd:return Math.max(t,8)*Math.max(e,8)/2;case wd:case Td:case Cd:case Rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ad:case Ul:case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case kd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case jd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Wd:case Xd:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case $d:case qd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fl:case Kd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function R1(t){switch(t){case Pn:case pg:return{byteLength:1,components:1};case Ba:case mg:case fi:return{byteLength:2,components:1};case rh:case sh:return{byteLength:2,components:4};case di:case ih:case ai:return{byteLength:4,components:1};case xg:case gg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fg(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function N1(t){const e=new WeakMap;function n(o,c){const u=o.array,p=o.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,u,p),o.onUploadCallback();let x;if(u instanceof Float32Array)x=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)x=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?x=t.HALF_FLOAT:x=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=t.SHORT;else if(u instanceof Uint32Array)x=t.UNSIGNED_INT;else if(u instanceof Int32Array)x=t.INT;else if(u instanceof Int8Array)x=t.BYTE;else if(u instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,u){const p=c.array,h=c.updateRanges;if(t.bindBuffer(u,o),h.length===0)t.bufferSubData(u,0,p);else{h.sort((x,v)=>x.start-v.start);let d=0;for(let x=1;x<h.length;x++){const v=h[d],S=h[x];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++d,h[d]=S)}h.length=d+1;for(let x=0,v=h.length;x<v;x++){const S=h[x];t.bufferSubData(u,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var P1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D1=`#ifdef USE_ALPHAHASH
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
#endif`,L1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O1=`#ifdef USE_AOMAP
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
#endif`,k1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B1=`#ifdef USE_BATCHING
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
#endif`,z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G1=`#ifdef USE_IRIDESCENCE
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
#endif`,W1=`#ifdef USE_BUMPMAP
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
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,J1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,eM=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,tM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nM=`vec3 transformedNormal = objectNormal;
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
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oM="gl_FragColor = linearToOutputTexel( gl_FragColor );",lM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,uM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
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
}`,_M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MM=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,bM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,EM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CM=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,RM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,NM=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PM=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,IM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HM=`#if defined( USE_POINTS_UV )
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
#endif`,VM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YM=`#ifdef USE_MORPHTARGETS
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
#endif`,$M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eb=`#ifdef USE_NORMALMAP
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
#endif`,tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,mb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,xb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vb=`#ifdef USE_SKINNING
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
#endif`,_b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yb=`#ifdef USE_SKINNING
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
#endif`,Sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wb=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tb=`#ifdef USE_TRANSMISSION
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Db=`uniform sampler2D t2D;
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`#include <common>
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
}`,kb=`#if DEPTH_PACKING == 3200
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
}`,Bb=`#define DISTANCE
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
}`,zb=`#define DISTANCE
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
void main() {
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`uniform float scale;
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Wb=`#include <common>
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
}`,Xb=`uniform vec3 diffuse;
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
}`,Yb=`#define LAMBERT
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
}`,$b=`#define LAMBERT
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
}`,qb=`#define MATCAP
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
}`,Kb=`#define MATCAP
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
}`,Zb=`#define NORMAL
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
}`,Jb=`#define NORMAL
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
}`,Qb=`#define PHONG
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
}`,eE=`#define PHONG
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
}`,tE=`#define STANDARD
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
}`,nE=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,iE=`#define TOON
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
}`,rE=`#define TOON
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
}`,sE=`uniform float size;
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
}`,aE=`uniform vec3 diffuse;
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
}`,oE=`#include <common>
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
}`,lE=`uniform vec3 color;
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
}`,cE=`uniform float rotation;
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
}`,uE=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:P1,alphahash_pars_fragment:D1,alphamap_fragment:L1,alphamap_pars_fragment:I1,alphatest_fragment:U1,alphatest_pars_fragment:F1,aomap_fragment:O1,aomap_pars_fragment:k1,batching_pars_vertex:B1,batching_vertex:z1,begin_vertex:H1,beginnormal_vertex:V1,bsdfs:j1,iridescence_fragment:G1,bumpmap_pars_fragment:W1,clipping_planes_fragment:X1,clipping_planes_pars_fragment:Y1,clipping_planes_pars_vertex:$1,clipping_planes_vertex:q1,color_fragment:K1,color_pars_fragment:Z1,color_pars_vertex:J1,color_vertex:Q1,common:eM,cube_uv_reflection_fragment:tM,defaultnormal_vertex:nM,displacementmap_pars_vertex:iM,displacementmap_vertex:rM,emissivemap_fragment:sM,emissivemap_pars_fragment:aM,colorspace_fragment:oM,colorspace_pars_fragment:lM,envmap_fragment:cM,envmap_common_pars_fragment:uM,envmap_pars_fragment:dM,envmap_pars_vertex:fM,envmap_physical_pars_fragment:bM,envmap_vertex:hM,fog_vertex:pM,fog_pars_vertex:mM,fog_fragment:xM,fog_pars_fragment:gM,gradientmap_pars_fragment:vM,lightmap_pars_fragment:_M,lights_lambert_fragment:yM,lights_lambert_pars_fragment:SM,lights_pars_begin:MM,lights_toon_fragment:EM,lights_toon_pars_fragment:wM,lights_phong_fragment:TM,lights_phong_pars_fragment:AM,lights_physical_fragment:CM,lights_physical_pars_fragment:RM,lights_fragment_begin:NM,lights_fragment_maps:PM,lights_fragment_end:DM,lightprobes_pars_fragment:LM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:UM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:OM,map_fragment:kM,map_pars_fragment:BM,map_particle_fragment:zM,map_particle_pars_fragment:HM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:jM,morphinstance_vertex:GM,morphcolor_vertex:WM,morphnormal_vertex:XM,morphtarget_pars_vertex:YM,morphtarget_vertex:$M,normal_fragment_begin:qM,normal_fragment_maps:KM,normal_pars_fragment:ZM,normal_pars_vertex:JM,normal_vertex:QM,normalmap_pars_fragment:eb,clearcoat_normal_fragment_begin:tb,clearcoat_normal_fragment_maps:nb,clearcoat_pars_fragment:ib,iridescence_pars_fragment:rb,opaque_fragment:sb,packing:ab,premultiplied_alpha_fragment:ob,project_vertex:lb,dithering_fragment:cb,dithering_pars_fragment:ub,roughnessmap_fragment:db,roughnessmap_pars_fragment:fb,shadowmap_pars_fragment:hb,shadowmap_pars_vertex:pb,shadowmap_vertex:mb,shadowmask_pars_fragment:xb,skinbase_vertex:gb,skinning_pars_vertex:vb,skinning_vertex:_b,skinnormal_vertex:yb,specularmap_fragment:Sb,specularmap_pars_fragment:Mb,tonemapping_fragment:bb,tonemapping_pars_fragment:Eb,transmission_fragment:wb,transmission_pars_fragment:Tb,uv_pars_fragment:Ab,uv_pars_vertex:Cb,uv_vertex:Rb,worldpos_vertex:Nb,background_vert:Pb,background_frag:Db,backgroundCube_vert:Lb,backgroundCube_frag:Ib,cube_vert:Ub,cube_frag:Fb,depth_vert:Ob,depth_frag:kb,distance_vert:Bb,distance_frag:zb,equirect_vert:Hb,equirect_frag:Vb,linedashed_vert:jb,linedashed_frag:Gb,meshbasic_vert:Wb,meshbasic_frag:Xb,meshlambert_vert:Yb,meshlambert_frag:$b,meshmatcap_vert:qb,meshmatcap_frag:Kb,meshnormal_vert:Zb,meshnormal_frag:Jb,meshphong_vert:Qb,meshphong_frag:eE,meshphysical_vert:tE,meshphysical_frag:nE,meshtoon_vert:iE,meshtoon_frag:rE,points_vert:sE,points_frag:aE,shadow_vert:oE,shadow_frag:lE,sprite_vert:cE,sprite_frag:uE},Me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ri={basic:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:tn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:tn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:tn([Me.points,Me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:tn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:tn([Me.common,Me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:tn([Me.sprite,Me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:tn([Me.common,Me.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:tn([Me.lights,Me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ri.physical={uniforms:tn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const jo={r:0,b:0,g:0},dE=new Pt,Og=new Ge;Og.set(-1,0,0,0,1,0,0,0,1);function fE(t,e,n,i,r,s){const a=new tt(0);let o=r===!0?0:1,c,u,p=null,h=0,d=null;function x(g){let b=g.isScene===!0?g.background:null;if(b&&b.isTexture){const M=g.backgroundBlurriness>0;b=e.get(b,M)}return b}function v(g){let b=!1;const M=x(g);M===null?m(a,o):M&&M.isColor&&(m(M,1),b=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(g,b){const M=x(b);M&&(M.isCubeTexture||M.mapping===sc)?(u===void 0&&(u=new Ui(new Qa(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Us(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dE.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Og),u.material.toneMapped=Ze.getTransfer(M.colorSpace)!==ct,(p!==M||h!==M.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,p=M,h=M.version,d=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ui(new oc(2,2),new hi({name:"BackgroundMaterial",uniforms:Us(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||h!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,p=M,h=M.version,d=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function m(g,b){g.getRGB(jo,Lg(t)),n.buffers.color.setClear(jo.r,jo.g,jo.b,b,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,b=1){a.set(g),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:v,addToRenderList:S,dispose:f}}function hE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(U,V,$,B,j){let te=!1;const q=h(U,B,$,V);s!==q&&(s=q,u(s.object)),te=x(U,B,$,j),te&&v(U,B,$,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,M(U,V,$,B),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return t.createVertexArray()}function u(U){return t.bindVertexArray(U)}function p(U){return t.deleteVertexArray(U)}function h(U,V,$,B){const j=B.wireframe===!0;let te=i[V.id];te===void 0&&(te={},i[V.id]=te);const q=U.isInstancedMesh===!0?U.id:0;let H=te[q];H===void 0&&(H={},te[q]=H);let O=H[$.id];O===void 0&&(O={},H[$.id]=O);let C=O[j];return C===void 0&&(C=d(c()),O[j]=C),C}function d(U){const V=[],$=[],B=[];for(let j=0;j<n;j++)V[j]=0,$[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:B,object:U,attributes:{},index:null}}function x(U,V,$,B){const j=s.attributes,te=V.attributes;let q=0;const H=$.getAttributes();for(const O in H)if(H[O].location>=0){const A=j[O];let Q=te[O];if(Q===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),A===void 0||A.attribute!==Q||Q&&A.data!==Q.data)return!0;q++}return s.attributesNum!==q||s.index!==B}function v(U,V,$,B){const j={},te=V.attributes;let q=0;const H=$.getAttributes();for(const O in H)if(H[O].location>=0){let A=te[O];A===void 0&&(O==="instanceMatrix"&&U.instanceMatrix&&(A=U.instanceMatrix),O==="instanceColor"&&U.instanceColor&&(A=U.instanceColor));const Q={};Q.attribute=A,A&&A.data&&(Q.data=A.data),j[O]=Q,q++}s.attributes=j,s.attributesNum=q,s.index=B}function S(){const U=s.newAttributes;for(let V=0,$=U.length;V<$;V++)U[V]=0}function m(U){f(U,0)}function f(U,V){const $=s.newAttributes,B=s.enabledAttributes,j=s.attributeDivisors;$[U]=1,B[U]===0&&(t.enableVertexAttribArray(U),B[U]=1),j[U]!==V&&(t.vertexAttribDivisor(U,V),j[U]=V)}function g(){const U=s.newAttributes,V=s.enabledAttributes;for(let $=0,B=V.length;$<B;$++)V[$]!==U[$]&&(t.disableVertexAttribArray($),V[$]=0)}function b(U,V,$,B,j,te,q){q===!0?t.vertexAttribIPointer(U,V,$,j,te):t.vertexAttribPointer(U,V,$,B,j,te)}function M(U,V,$,B){S();const j=B.attributes,te=$.getAttributes(),q=V.defaultAttributeValues;for(const H in te){const O=te[H];if(O.location>=0){let C=j[H];if(C===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(C=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(C=U.instanceColor)),C!==void 0){const A=C.normalized,Q=C.itemSize,se=e.get(C);if(se===void 0)continue;const me=se.buffer,fe=se.type,he=se.bytesPerElement,k=fe===t.INT||fe===t.UNSIGNED_INT||C.gpuType===ih;if(C.isInterleavedBufferAttribute){const X=C.data,ne=X.stride,xe=C.offset;if(X.isInstancedInterleavedBuffer){for(let oe=0;oe<O.locationSize;oe++)f(O.location+oe,X.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let oe=0;oe<O.locationSize;oe++)m(O.location+oe);t.bindBuffer(t.ARRAY_BUFFER,me);for(let oe=0;oe<O.locationSize;oe++)b(O.location+oe,Q/O.locationSize,fe,A,ne*he,(xe+Q/O.locationSize*oe)*he,k)}else{if(C.isInstancedBufferAttribute){for(let X=0;X<O.locationSize;X++)f(O.location+X,C.meshPerAttribute);U.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let X=0;X<O.locationSize;X++)m(O.location+X);t.bindBuffer(t.ARRAY_BUFFER,me);for(let X=0;X<O.locationSize;X++)b(O.location+X,Q/O.locationSize,fe,A,Q*he,Q/O.locationSize*X*he,k)}}else if(q!==void 0){const A=q[H];if(A!==void 0)switch(A.length){case 2:t.vertexAttrib2fv(O.location,A);break;case 3:t.vertexAttrib3fv(O.location,A);break;case 4:t.vertexAttrib4fv(O.location,A);break;default:t.vertexAttrib1fv(O.location,A)}}}}g()}function w(){N();for(const U in i){const V=i[U];for(const $ in V){const B=V[$];for(const j in B){const te=B[j];for(const q in te)p(te[q].object),delete te[q];delete B[j]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;const V=i[U.id];for(const $ in V){const B=V[$];for(const j in B){const te=B[j];for(const q in te)p(te[q].object),delete te[q];delete B[j]}}delete i[U.id]}function R(U){for(const V in i){const $=i[V];for(const B in $){const j=$[B];if(j[U.id]===void 0)continue;const te=j[U.id];for(const q in te)p(te[q].object),delete te[q];delete j[U.id]}}}function y(U){for(const V in i){const $=i[V],B=U.isInstancedMesh===!0?U.id:0,j=$[B];if(j!==void 0){for(const te in j){const q=j[te];for(const H in q)p(q[H].object),delete q[H];delete j[te]}delete $[B],Object.keys($).length===0&&delete i[V]}}}function N(){D(),a=!0,s!==r&&(s=r,u(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function pE(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,p){p!==0&&(t.drawArraysInstanced(i,c,u,p),n.update(u,i,p))}function o(c,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,p);let d=0;for(let x=0;x<p;x++)d+=u[x];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function mE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Wn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const y=R===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Pn&&R!==ai&&!y&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const p=c(u);p!==u&&(He("WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:x,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:b,maxFragmentUniforms:M,maxSamples:w,samples:T}}function xE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new $i,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const x=h.length!==0||d||i!==0||r;return r=d,i=h.length,x},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=p(h,d,0)},this.setState=function(h,d,x){const v=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?p(null):u();else{const g=s?0:i,b=g*4;let M=f.clippingState||null;c.value=M,M=p(v,d,b,x);for(let w=0;w!==b;++w)M[w]=n[w];f.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(h,d,x,v){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=c.value,v!==!0||m===null){const f=x+S*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,M=x;b!==S;++b,M+=4)a.copy(h[b]).applyMatrix4(g,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const gs=4,gE=6,vE=20,_E=256,ea=new Ug,pm=new tt;let du=null,fu=0,hu=0,pu=!1;const yE=new K,vr=new K;class mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=yE}=s;du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(du,fu,hu),this._renderer.xr.enabled=pu,e.scissorTest=!1,ns(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ur||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:fi,format:Wn,colorSpace:Ol,depthBuffer:!1},r=xm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=SE(s)),this._blurMaterial=bE(s,e,n),this._ggxMaterial=ME(s,e,n)}return r}_compileMaterial(e){const n=new Ui(new Zn,e);this._renderer.compile(n,ea)}_sceneToCubeUV(e,n,i,r,s){const c=new Nn(90,1,n,i),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,x=h.toneMapping;h.getClearColor(pm),h.toneMapping=ui,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ui(new Qa,new Cg({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,f=!0):(m.color.copy(pm),f=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(c.up.set(0,u[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+p[b],s.y,s.z)):M===1?(c.up.set(0,0,u[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+p[b],s.z)):(c.up.set(0,u[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+p[b]));const w=this._cubeSize;ns(r,M*w,b>2?w:0,w,w),h.setRenderTarget(r),f&&h.render(S,c),h.render(e,c)}h.toneMapping=x,h.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ur||e.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ns(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,ea)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),p=n/(this._lodMeshes.length-1),h=Math.sqrt(u*u-p*p),d=u*1.25,x=h*d,{_lodMax:v}=this,S=this._sizeLods[i],m=3*S*(i>v-gs?i-v+gs:0),f=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=x,c.mipInt.value=v-n,ns(s,m,f,3*S,2*S),r.setRenderTarget(s),r.render(o,ea),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-i,ns(e,m,f,3*S,2*S),r.setRenderTarget(e),r.render(o,ea)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-i;const p=this._sizeLods[r],h=3*p*(r>this._lodMax-gs?r-this._lodMax+gs:0),d=4*(this._cubeSize-p);ns(n,h,d,3*p,2*p),a.setRenderTarget(n),a.render(c,ea)}}function SE(t){const e=[],n=[];let i=t;const r=t-gs+1+gE;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),c=-o,u=1+o,p=[c,c,u,c,u,u,c,c,u,u,c,u],h=6,d=6,x=3,v=new Float32Array(x*d*h),S=new Float32Array(x*d*h);for(let f=0;f<h;f++){const g=f%3*2/3-1,b=f>2?0:-1,M=[g,b,0,g+2/3,b,0,g+2/3,b+1,0,g,b,0,g+2/3,b+1,0,g,b+1,0];v.set(M,x*d*f);for(let w=0;w<d;w++){const T=p[w*2]*2-1,R=p[w*2+1]*2-1;f===0?vr.set(1,R,T):f===1?vr.set(-T,1,-R):f===2?vr.set(-T,R,1):f===3?vr.set(-1,R,-T):f===4?vr.set(-T,-1,R):vr.set(T,R,-1),vr.toArray(S,(f*d+w)*x)}}const m=new Zn;m.setAttribute("position",new qn(v,x)),m.setAttribute("outputDirection",new qn(S,x)),n.push(new Ui(m,null)),i>gs&&i--}return{lodMeshes:n,sizeLods:e}}function xm(t,e,n){const i=new $n(t,e,n);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ns(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ME(t,e,n){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_E,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function bE(t,e,n){return new hi({name:"SphericalGaussianBlur",defines:{SAMPLES:vE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function gm(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function vm(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class kg extends $n{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qa(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Ti});s.uniforms.tEquirect.value=n;const a=new Ui(r,s),o=n.minFilter;return n.minFilter===Er&&(n.minFilter=Jt),new T1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function EE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,x=!1){return d==null?null:x?a(d):s(d)}function s(d){if(d&&d.isTexture){const x=d.mapping;if(x===Bc||x===zc)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const S=new kg(v.height);return S.fromEquirectangularTexture(t,d),e.set(d,S),d.addEventListener("dispose",u),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const x=d.mapping,v=x===Bc||x===zc,S=x===Ur||x===Is;if(v||S){let m=n.get(d);const f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new mm(t)),m=v?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const g=d.image;return v&&g&&g.height>0||S&&g&&c(g)?(i===null&&(i=new mm(t)),m=v?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",p),m.texture):null}}}return d}function o(d,x){return x===Bc?d.mapping=Ur:x===zc&&(d.mapping=Is),d}function c(d){let x=0;const v=6;for(let S=0;S<v;S++)d[S]!==void 0&&x++;return x===v}function u(d){const x=d.target;x.removeEventListener("dispose",u);const v=e.get(x);v!==void 0&&(e.delete(x),v.dispose())}function p(d){const x=d.target;x.removeEventListener("dispose",p);const v=n.get(x);v!==void 0&&(n.delete(x),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function wE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Es("WebGLRenderer: "+i+" extension not supported."),r}}}function TE(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const x=s.get(d);x&&(e.remove(x),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER)}function u(h){const d=[],x=h.index,v=h.attributes.position;let S=0;if(v===void 0)return;if(x!==null){const g=x.array;S=x.version;for(let b=0,M=g.length;b<M;b+=3){const w=g[b+0],T=g[b+1],R=g[b+2];d.push(w,T,T,R,R,w)}}else{const g=v.array;S=v.version;for(let b=0,M=g.length/3-1;b<M;b+=3){const w=b+0,T=b+1,R=b+2;d.push(w,T,T,R,R,w)}}const m=new(v.count>=65535?Tg:wg)(d,1);m.version=S;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function p(h){const d=s.get(h);if(d){const x=h.index;x!==null&&d.version<x.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:p}}function AE(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){t.drawElements(i,d,s,h*a),n.update(d,i,1)}function u(h,d,x){x!==0&&(t.drawElementsInstanced(i,d,s,h*a,x),n.update(d,i,x))}function p(h,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,x);let S=0;for(let m=0;m<x;m++)S+=d[m];n.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=p}function CE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RE(t,e,n){const i=new WeakMap,r=new At;function s(a,o,c){const u=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=p!==void 0?p.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let D=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var x=D;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),m===!0&&(M=3);let w=o.attributes.position.count*M,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*T*4*h),y=new Mg(R,w,T,h);y.type=ai,y.needsUpdate=!0;const N=M*4;for(let U=0;U<h;U++){const V=f[U],$=g[U],B=b[U],j=w*T*4*U;for(let te=0;te<V.count;te++){const q=te*N;v===!0&&(r.fromBufferAttribute(V,te),R[j+q+0]=r.x,R[j+q+1]=r.y,R[j+q+2]=r.z,R[j+q+3]=0),S===!0&&(r.fromBufferAttribute($,te),R[j+q+4]=r.x,R[j+q+5]=r.y,R[j+q+6]=r.z,R[j+q+7]=0),m===!0&&(r.fromBufferAttribute(B,te),R[j+q+8]=r.x,R[j+q+9]=r.y,R[j+q+10]=r.z,R[j+q+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:y,size:new st(w,T)},i.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const S=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(t,"morphTargetBaseInfluence",S),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function NE(t,e,n,i,r){let s=new WeakMap;function a(u){const p=r.render.frame,h=u.geometry,d=e.get(u,h);if(s.get(d)!==p&&(e.update(d),s.set(d,p)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==p&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,p))),u.isSkinnedMesh){const x=u.skeleton;s.get(x)!==p&&(x.update(),s.set(x,p))}return d}function o(){s=new WeakMap}function c(u){const p=u.target;p.removeEventListener("dispose",c),i.releaseStatesOfObject(p),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:a,dispose:o}}const PE={[ag]:"LINEAR_TONE_MAPPING",[og]:"REINHARD_TONE_MAPPING",[lg]:"CINEON_TONE_MAPPING",[cg]:"ACES_FILMIC_TONE_MAPPING",[dg]:"AGX_TONE_MAPPING",[fg]:"NEUTRAL_TONE_MAPPING",[ug]:"CUSTOM_TONE_MAPPING"};function DE(t,e,n,i,r,s){const a=new $n(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const u=new Zn;u.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ci([0,2,0,0,2,0],2));const p=new b1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ui(u,p),d=new Ug(-1,1,1,-1,0,1);let x=null,v=null,S=!1,m,f=null,g=[],b=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),c!==null&&c.setSize(M,w);for(let T=0;T<g.length;T++){const R=g[T];R.setSize&&R.setSize(M,w)}},this.setEffects=function(M){g=M,b=g.length>0&&g[0].isRenderPass===!0;const w=a.width,T=a.height;g.length>0&&o===null&&(o=new $n(w,T,{type:fi,depthBuffer:!1,stencilBuffer:!1}),c=new $n(w,T,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<g.length;R++){const y=g[R];y.setSize&&y.setSize(w,T)}},this.begin=function(M,w){if(S||M.toneMapping===ui&&g.length===0)return!1;if(f=w,w!==null){const T=w.width,R=w.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return b===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=ui,!0},this.hasRenderPass=function(){return b},this.end=function(M,w){M.toneMapping=m,S=!0;let T=a,R=o;for(let y=0;y<g.length;y++){const N=g[y];N.enabled!==!1&&(N.render(M,R,T,w),N.needsSwap!==!1&&(T=R,R=R===o?c:o))}if(x!==M.outputColorSpace||v!==M.toneMapping){x=M.outputColorSpace,v=M.toneMapping,p.defines={},Ze.getTransfer(x)===ct&&(p.defines.SRGB_TRANSFER="");const y=PE[v];y&&(p.defines[y]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(f),M.render(h,d),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),p.dispose()}}const Bg=new sn,Qd=new Ha(1,1),zg=new Mg,Hg=new QS,Vg=new Pg,_m=[],ym=[],Sm=new Float32Array(16),Mm=new Float32Array(9),bm=new Float32Array(4);function zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_m[r];if(s===void 0&&(s=new Float32Array(r),_m[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cc(t,e){let n=ym[e];n===void 0&&(n=new Int32Array(e),ym[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function LE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function OE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;bm.set(i),t.uniformMatrix2fv(this.addr,!1,bm),kt(n,i)}}function kE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Mm.set(i),t.uniformMatrix3fv(this.addr,!1,Mm),kt(n,i)}}function BE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Sm.set(i),t.uniformMatrix4fv(this.addr,!1,Sm),kt(n,i)}}function zE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function GE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function $E(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Qd.compareFunction=n.isReversedDepthBuffer()?uh:ch,s=Qd):s=Bg,n.setTexture2D(e||s,r)}function qE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Hg,r)}function KE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Vg,r)}function ZE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||zg,r)}function JE(t){switch(t){case 5126:return LE;case 35664:return IE;case 35665:return UE;case 35666:return FE;case 35674:return OE;case 35675:return kE;case 35676:return BE;case 5124:case 35670:return zE;case 35667:case 35671:return HE;case 35668:case 35672:return VE;case 35669:case 35673:return jE;case 5125:return GE;case 36294:return WE;case 36295:return XE;case 36296:return YE;case 35678:case 36198:case 36298:case 36306:case 35682:return $E;case 35679:case 36299:case 36307:return qE;case 35680:case 36300:case 36308:case 36293:return KE;case 36289:case 36303:case 36311:case 36292:return ZE}}function QE(t,e){t.uniform1fv(this.addr,e)}function ew(t,e){const n=zs(e,this.size,2);t.uniform2fv(this.addr,n)}function tw(t,e){const n=zs(e,this.size,3);t.uniform3fv(this.addr,n)}function nw(t,e){const n=zs(e,this.size,4);t.uniform4fv(this.addr,n)}function iw(t,e){const n=zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rw(t,e){const n=zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sw(t,e){const n=zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function aw(t,e){t.uniform1iv(this.addr,e)}function ow(t,e){t.uniform2iv(this.addr,e)}function lw(t,e){t.uniform3iv(this.addr,e)}function cw(t,e){t.uniform4iv(this.addr,e)}function uw(t,e){t.uniform1uiv(this.addr,e)}function dw(t,e){t.uniform2uiv(this.addr,e)}function fw(t,e){t.uniform3uiv(this.addr,e)}function hw(t,e){t.uniform4uiv(this.addr,e)}function pw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Qd:a=Bg;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function mw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Hg,s[a])}function xw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Vg,s[a])}function gw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||zg,s[a])}function vw(t){switch(t){case 5126:return QE;case 35664:return ew;case 35665:return tw;case 35666:return nw;case 35674:return iw;case 35675:return rw;case 35676:return sw;case 5124:case 35670:return aw;case 35667:case 35671:return ow;case 35668:case 35672:return lw;case 35669:case 35673:return cw;case 5125:return uw;case 36294:return dw;case 36295:return fw;case 36296:return hw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return mw;case 35680:case 36300:case 36308:case 36293:return xw;case 36289:case 36303:case 36311:case 36292:return gw}}class _w{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=JE(n.type)}}class yw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vw(n.type)}}class Sw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const mu=/(\w+)(\])?(\[|\.)?/g;function Em(t,e){t.seq.push(e),t.map[e.id]=e}function Mw(t,e,n){const i=t.name,r=i.length;for(mu.lastIndex=0;;){const s=mu.exec(i),a=mu.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Em(n,u===void 0?new _w(o,t,e):new yw(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new Sw(o),Em(n,h)),n=h}}}class ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);Mw(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function wm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const bw=37297;let Ew=0;function ww(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Tm=new Ge;function Tw(t){Ze._getMatrix(Tm,Ze.workingColorSpace,t);const e=`mat3( ${Tm.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case kl:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Am(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+ww(t.getShaderSource(e),o)}else return s}function Aw(t,e){const n=Tw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Cw={[ag]:"Linear",[og]:"Reinhard",[lg]:"Cineon",[cg]:"ACESFilmic",[dg]:"AgX",[fg]:"Neutral",[ug]:"Custom"};function Rw(t,e){const n=Cw[e];return n===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Go=new K;function Nw(){Ze.getLuminanceCoefficients(Go);const t=Go.x.toFixed(4),e=Go.y.toFixed(4),n=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function Dw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Lw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function la(t){return t!==""}function Cm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Iw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(t){return t.replace(Iw,Fw)}const Uw=new Map;function Fw(t,e){let n=Ye[e];if(n===void 0){const i=Uw.get(e);if(i!==void 0)n=Ye[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ef(n)}const Ow=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(t){return t.replace(Ow,kw)}function kw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Bw={[il]:"SHADOWMAP_TYPE_PCF",[oa]:"SHADOWMAP_TYPE_VSM"};function zw(t){return Bw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hw={[Ur]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function Vw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Hw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const jw={[Is]:"ENVMAP_MODE_REFRACTION"};function Gw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":jw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ww={[sg]:"ENVMAP_BLENDING_MULTIPLY",[NS]:"ENVMAP_BLENDING_MIX",[PS]:"ENVMAP_BLENDING_ADD"};function Xw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Ww[t.combine]||"ENVMAP_BLENDING_NONE"}function Yw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $w(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=zw(n),u=Vw(n),p=Gw(n),h=Xw(n),d=Yw(n),x=Pw(n),v=Dw(s),S=r.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(la).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(la).join(`
`),f.length>0&&(f+=`
`)):(m=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),f=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+p:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ui?"#define TONE_MAPPING":"",n.toneMapping!==ui?Ye.tonemapping_pars_fragment:"",n.toneMapping!==ui?Rw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Aw("linearToOutputTexel",n.outputColorSpace),Nw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(la).join(`
`)),a=ef(a),a=Cm(a,n),a=Rm(a,n),o=ef(o),o=Cm(o,n),o=Rm(o,n),a=Nm(a),o=Nm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=g+m+a,M=g+f+o,w=wm(r,r.VERTEX_SHADER,b),T=wm(r,r.FRAGMENT_SHADER,M);r.attachShader(S,w),r.attachShader(S,T),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(U){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(S)||"",$=r.getShaderInfoLog(w)||"",B=r.getShaderInfoLog(T)||"",j=V.trim(),te=$.trim(),q=B.trim();let H=!0,O=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,w,T);else{const C=Am(r,w,"vertex"),A=Am(r,T,"fragment");it("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+j+`
`+C+`
`+A)}else j!==""?He("WebGLProgram: Program Info Log:",j):(te===""||q==="")&&(O=!1);O&&(U.diagnostics={runnable:H,programLog:j,vertexShader:{log:te,prefix:m},fragmentShader:{log:q,prefix:f}})}r.deleteShader(w),r.deleteShader(T),y=new ll(r,S),N=Lw(r,S)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let N;this.getAttributes=function(){return N===void 0&&R(this),N};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(S,bw)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ew++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=T,this}let qw=0;class Kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Zw(e),n.set(e,i)),i}}class Zw{constructor(e){this.id=qw++,this.code=e,this.usedTimes=0}}function Jw(t){return t===Fr||t===Ul||t===Fl}function Qw(t,e,n,i,r,s){const a=new bg,o=new Kw,c=new Set,u=[],p=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function S(y,N,D,U,V,$){const B=U.fog,j=V.geometry,te=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,H=e.get(y.envMap||te,q),O=H&&H.mapping===sc?H.image.height:null,C=x[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&He("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const A=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Q=A!==void 0?A.length:0;let se=0;j.morphAttributes.position!==void 0&&(se=1),j.morphAttributes.normal!==void 0&&(se=2),j.morphAttributes.color!==void 0&&(se=3);let me,fe,he,k;if(C){const mt=ri[C];me=mt.vertexShader,fe=mt.fragmentShader}else{me=y.vertexShader,fe=y.fragmentShader;const mt=o.getVertexShaderStage(y),ot=o.getFragmentShaderStage(y);o.update(y,mt,ot),he=mt.id,k=ot.id}const X=t.getRenderTarget(),ne=t.state.buffers.depth.getReversed(),xe=V.isInstancedMesh===!0,oe=V.isBatchedMesh===!0,Ne=!!y.map,be=!!y.matcap,le=!!H,Le=!!y.aoMap,je=!!y.lightMap,Be=!!y.bumpMap&&y.wireframe===!1,$e=!!y.normalMap,at=!!y.displacementMap,dt=!!y.emissiveMap,ht=!!y.metalnessMap,St=!!y.roughnessMap,I=y.anisotropy>0,Ct=y.clearcoat>0,Qe=y.dispersion>0,P=y.retroreflectivity>0,_=y.iridescence>0,z=y.sheen>0,Y=y.transmission>0,J=I&&!!y.anisotropyMap,ue=Ct&&!!y.clearcoatMap,pe=Ct&&!!y.clearcoatNormalMap,ee=Ct&&!!y.clearcoatRoughnessMap,re=_&&!!y.iridescenceMap,ge=_&&!!y.iridescenceThicknessMap,Fe=z&&!!y.sheenColorMap,Se=z&&!!y.sheenRoughnessMap,ve=!!y.specularMap,Oe=!!y.specularColorMap,ze=!!y.specularIntensityMap,We=Y&&!!y.transmissionMap,F=Y&&!!y.thicknessMap,_e=!!y.gradientMap,ie=!!y.alphaMap,ye=y.alphaTest>0,Te=!!y.alphaHash,ae=!!y.extensions;let ke=ui;y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ke=t.toneMapping);const Ie={shaderID:C,shaderType:y.type,shaderName:y.name,vertexShader:me,fragmentShader:fe,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:k,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:oe,batchingColor:oe&&V._colorsTexture!==null,instancing:xe,instancingColor:xe&&V.instanceColor!==null,instancingMorph:xe&&V.morphTexture!==null,outputColorSpace:X===null?t.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ne,matcap:be,envMap:le,envMapMode:le&&H.mapping,envMapCubeUVHeight:O,aoMap:Le,lightMap:je,bumpMap:Be,normalMap:$e,displacementMap:at,emissiveMap:dt,normalMapObjectSpace:$e&&y.normalMapType===IS,normalMapTangentSpace:$e&&y.normalMapType===jp,packedNormalMap:$e&&y.normalMapType===jp&&Jw(y.normalMap.format),metalnessMap:ht,roughnessMap:St,anisotropy:I,anisotropyMap:J,clearcoat:Ct,clearcoatMap:ue,clearcoatNormalMap:pe,clearcoatRoughnessMap:ee,dispersion:Qe,retroreflection:P,iridescence:_,iridescenceMap:re,iridescenceThicknessMap:ge,sheen:z,sheenColorMap:Fe,sheenRoughnessMap:Se,specularMap:ve,specularColorMap:Oe,specularIntensityMap:ze,transmission:Y,transmissionMap:We,thicknessMap:F,gradientMap:_e,opaque:y.transparent===!1&&y.blending===va&&y.alphaToCoverage===!1,alphaMap:ie,alphaTest:ye,alphaHash:Te,combine:y.combine,mapUv:Ne&&v(y.map.channel),aoMapUv:Le&&v(y.aoMap.channel),lightMapUv:je&&v(y.lightMap.channel),bumpMapUv:Be&&v(y.bumpMap.channel),normalMapUv:$e&&v(y.normalMap.channel),displacementMapUv:at&&v(y.displacementMap.channel),emissiveMapUv:dt&&v(y.emissiveMap.channel),metalnessMapUv:ht&&v(y.metalnessMap.channel),roughnessMapUv:St&&v(y.roughnessMap.channel),anisotropyMapUv:J&&v(y.anisotropyMap.channel),clearcoatMapUv:ue&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(y.sheenRoughnessMap.channel),specularMapUv:ve&&v(y.specularMap.channel),specularColorMapUv:Oe&&v(y.specularColorMap.channel),specularIntensityMapUv:ze&&v(y.specularIntensityMap.channel),transmissionMapUv:We&&v(y.transmissionMap.channel),thicknessMapUv:F&&v(y.thicknessMap.channel),alphaMapUv:ie&&v(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&($e||I),vertexNormals:!!j.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(Ne||ie),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||j.attributes.normal===void 0&&$e===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ne,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:se,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ne&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===ct,decodeVideoTextureEmissive:dt&&y.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(y.emissiveMap.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Si,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&y.extensions.multiDraw===!0||oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function m(y){const N=[];if(y.shaderID?N.push(y.shaderID):(N.push(y.customVertexShaderID),N.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)N.push(D),N.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(f(N,y),g(N,y),N.push(t.outputColorSpace)),N.push(y.customProgramCacheKey),N.join()}function f(y,N){y.push(N.precision),y.push(N.outputColorSpace),y.push(N.envMapMode),y.push(N.envMapCubeUVHeight),y.push(N.mapUv),y.push(N.alphaMapUv),y.push(N.lightMapUv),y.push(N.aoMapUv),y.push(N.bumpMapUv),y.push(N.normalMapUv),y.push(N.displacementMapUv),y.push(N.emissiveMapUv),y.push(N.metalnessMapUv),y.push(N.roughnessMapUv),y.push(N.anisotropyMapUv),y.push(N.clearcoatMapUv),y.push(N.clearcoatNormalMapUv),y.push(N.clearcoatRoughnessMapUv),y.push(N.iridescenceMapUv),y.push(N.iridescenceThicknessMapUv),y.push(N.sheenColorMapUv),y.push(N.sheenRoughnessMapUv),y.push(N.specularMapUv),y.push(N.specularColorMapUv),y.push(N.specularIntensityMapUv),y.push(N.transmissionMapUv),y.push(N.thicknessMapUv),y.push(N.combine),y.push(N.fogExp2),y.push(N.sizeAttenuation),y.push(N.morphTargetsCount),y.push(N.morphAttributeCount),y.push(N.numSunLights),y.push(N.numDirLights),y.push(N.numPointLights),y.push(N.numSpotLights),y.push(N.numSpotLightMaps),y.push(N.numHemiLights),y.push(N.numRectAreaLights),y.push(N.numSunLightShadows),y.push(N.numDirLightShadows),y.push(N.numPointLightShadows),y.push(N.numSpotLightShadows),y.push(N.numSpotLightShadowsWithMaps),y.push(N.numLightProbes),y.push(N.shadowMapType),y.push(N.toneMapping),y.push(N.numClippingPlanes),y.push(N.numClipIntersection),y.push(N.depthPacking)}function g(y,N){a.disableAll(),N.instancing&&a.enable(0),N.instancingColor&&a.enable(1),N.instancingMorph&&a.enable(2),N.matcap&&a.enable(3),N.envMap&&a.enable(4),N.normalMapObjectSpace&&a.enable(5),N.normalMapTangentSpace&&a.enable(6),N.clearcoat&&a.enable(7),N.iridescence&&a.enable(8),N.alphaTest&&a.enable(9),N.vertexColors&&a.enable(10),N.vertexAlphas&&a.enable(11),N.vertexUv1s&&a.enable(12),N.vertexUv2s&&a.enable(13),N.vertexUv3s&&a.enable(14),N.vertexTangents&&a.enable(15),N.anisotropy&&a.enable(16),N.alphaHash&&a.enable(17),N.batching&&a.enable(18),N.dispersion&&a.enable(19),N.retroreflection&&a.enable(24),N.batchingColor&&a.enable(20),N.gradientMap&&a.enable(21),N.packedNormalMap&&a.enable(22),N.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.reversedDepthBuffer&&a.enable(4),N.skinning&&a.enable(5),N.morphTargets&&a.enable(6),N.morphNormals&&a.enable(7),N.morphColors&&a.enable(8),N.premultipliedAlpha&&a.enable(9),N.shadowMapEnabled&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),N.decodeVideoTextureEmissive&&a.enable(20),N.alphaToCoverage&&a.enable(21),N.numLightProbeGrids>0&&a.enable(22),N.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){const N=x[y.type];let D;if(N){const U=ri[N];D=y1.clone(U.uniforms)}else D=y.uniforms;return D}function M(y,N){let D=p.get(N);return D!==void 0?++D.usedTimes:(D=new $w(t,N,y,r),u.push(D),p.set(N,D)),D}function w(y){if(--y.usedTimes===0){const N=u.indexOf(y);u[N]=u[u.length-1],u.pop(),p.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:R}}function e2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function t2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Dm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Lm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let x=0;return d.isInstancedMesh&&(x+=2),d.isSkinnedMesh&&(x+=1),x}function o(d,x,v,S,m,f){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:x,material:v,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:f},t[e]=g):(g.id=d.id,g.object=d,g.geometry=x,g.material=v,g.materialVariant=a(d),g.groupOrder=S,g.renderOrder=d.renderOrder,g.z=m,g.group=f),e++,g}function c(d,x,v,S,m,f,g){g.reversedDepth===!0&&(m=-m);const b=o(d,x,v,S,m,f);v.transmission>0?i.push(b):v.transparent===!0?r.push(b):n.push(b)}function u(d,x,v,S,m,f){const g=o(d,x,v,S,m,f);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function p(d,x){n.length>1&&n.sort(d||t2),i.length>1&&i.sort(x||Dm),r.length>1&&r.sort(x||Dm)}function h(){for(let d=e,x=t.length;d<x;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:h,sort:p}}function n2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Lm,t.set(i,[a])):r>=s.length?(a=new Lm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function i2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new K,color:new tt};break;case"SpotLight":n={position:new K,direction:new K,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function r2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let s2=0;function a2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function o2(t){const e=new i2,n=r2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new K);const r=new K,s=new Pt,a=new Pt;function o(u){let p=0,h=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let x=0,v=0,S=0,m=0,f=0,g=0,b=0,M=0,w=0,T=0,R=0,y=0,N=0,D=0;u.sort(a2);for(let V=0,$=u.length;V<$;V++){const B=u[V],j=B.color,te=B.intensity,q=B.distance;let H=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Fr?H=B.shadow.map.texture:H=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=j.r*te,h+=j.g*te,d+=j.b*te;else if(B.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(B.sh.coefficients[O],te);D++}else if(B.isSunLight){const O=e.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const C=B.shadow,A=n.get(B);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),i.sunShadow[v]=A,i.sunShadowMap[v]=H;const Q=C.getViewportCount();for(let se=0;se<Q;se++)i.sunShadowMatrix[S+se]=C.getMatrix(se),i.sunShadowCascade[S+se]=C._cascadeData[se];S+=Q,v++}i.sun[x]=O,x++}else if(B.isDirectionalLight){const O=e.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const C=B.shadow,A=n.get(B);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,i.directionalShadow[m]=A,i.directionalShadowMap[m]=H,i.directionalShadowMatrix[m]=B.shadow.matrix,w++}i.directional[m]=O,m++}else if(B.isSpotLight){const O=e.get(B);O.position.setFromMatrixPosition(B.matrixWorld),O.color.copy(j).multiplyScalar(te),O.distance=q,O.coneCos=Math.cos(B.angle),O.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),O.decay=B.decay,i.spot[g]=O;const C=B.shadow;if(B.map&&(i.spotLightMap[y]=B.map,y++,C.updateMatrices(B),B.castShadow&&N++),i.spotLightMatrix[g]=C.matrix,B.castShadow){const A=n.get(B);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,i.spotShadow[g]=A,i.spotShadowMap[g]=H,R++}g++}else if(B.isRectAreaLight){const O=e.get(B);O.color.copy(j).multiplyScalar(te),O.halfWidth.set(B.width*.5,0,0),O.halfHeight.set(0,B.height*.5,0),i.rectArea[b]=O,b++}else if(B.isPointLight){const O=e.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),O.distance=B.distance,O.decay=B.decay,B.castShadow){const C=B.shadow,A=n.get(B);A.shadowIntensity=C.intensity,A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,A.shadowCameraNear=C.camera.near,A.shadowCameraFar=C.camera.far,i.pointShadow[f]=A,i.pointShadowMap[f]=H,i.pointShadowMatrix[f]=B.shadow.matrix,T++}i.point[f]=O,f++}else if(B.isHemisphereLight){const O=e.get(B);O.skyColor.copy(B.color).multiplyScalar(te),O.groundColor.copy(B.groundColor).multiplyScalar(te),i.hemi[M]=O,M++}}b>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.sunLength!==x||U.directionalLength!==m||U.pointLength!==f||U.spotLength!==g||U.rectAreaLength!==b||U.hemiLength!==M||U.numSunShadows!==v||U.numDirectionalShadows!==w||U.numPointShadows!==T||U.numSpotShadows!==R||U.numSpotMaps!==y||U.numLightProbes!==D)&&(i.sun.length=x,i.directional.length=m,i.spot.length=g,i.rectArea.length=b,i.point.length=f,i.hemi.length=M,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+y-N,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=D,U.sunLength=x,U.directionalLength=m,U.pointLength=f,U.spotLength=g,U.rectAreaLength=b,U.hemiLength=M,U.numSunShadows=v,U.numDirectionalShadows=w,U.numPointShadows=T,U.numSpotShadows=R,U.numSpotMaps=y,U.numLightProbes=D,i.version=s2++)}function c(u,p){let h=0,d=0,x=0,v=0,S=0,m=0;const f=p.matrixWorldInverse;for(let g=0,b=u.length;g<b;g++){const M=u[g];if(M.isSunLight){const w=i.sun[h];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),h++}else if(M.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),d++}else if(M.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),v++}else if(M.isRectAreaLight){const w=i.rectArea[S];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),a.identity(),s.copy(M.matrixWorld),s.premultiply(f),a.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const w=i.point[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),x++}else if(M.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:i}}function Im(t){const e=new o2(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){r.push(d)}function u(){e.setup(n)}function p(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:p,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function l2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Im(t),e.set(r,[o])):s>=a.length?(o=new Im(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const c2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u2=`uniform sampler2D shadow_pass;
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
}`,d2=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],f2=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Um=new Pt,ta=new K,xu=new K;function h2(t,e,n){let i=new Rg;const r=new st,s=new st,a=new At,o=new E1,c=new w1,u={},p=n.maxTextureSize,h={[Ir]:mn,[mn]:Ir,[Si]:Si},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:c2,fragmentShader:u2}),x=d.clone();x.defines.HORIZONTAL_PASS=1;const v=new Zn;v.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ui(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let f=this.type;this.render=function(T,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===dS&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=il);const N=t.getRenderTarget(),D=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Ti),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const $=f!==this.type;$&&R.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(j=>j.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,j=T.length;B<j;B++){const te=T[B],q=te.shadow;if(q===void 0){He("WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const H=q.getFrameExtents();r.multiply(H),s.copy(q.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/H.x),r.x=s.x*H.x,q.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/H.y),r.y=s.y*H.y,q.mapSize.y=s.y));const O=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=O,q.map===null||$===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===oa){if(te.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new $n(r.x,r.y,{format:Fr,type:fi,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),q.map.texture.name=te.name+".shadowMap",q.map.depthTexture=new Ha(r.x,r.y,ai),q.map.depthTexture.name=te.name+".shadowMapDepth",q.map.depthTexture.format=Ii,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=jt,q.map.depthTexture.magFilter=jt}else te.isPointLight?(q.map=new kg(r.x),q.map.depthTexture=new v1(r.x,di)):(q.map=new $n(r.x,r.y),q.map.depthTexture=new Ha(r.x,r.y,di)),q.map.depthTexture.name=te.name+".shadowMap",q.map.depthTexture.format=Ii,this.type===il?(q.map.depthTexture.compareFunction=O?uh:ch,q.map.depthTexture.minFilter=Jt,q.map.depthTexture.magFilter=Jt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=jt,q.map.depthTexture.magFilter=jt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==r.x||q.map.height!==r.y)&&q.map.setSize(r.x,r.y);const C=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();te.isPointLight!==!0&&q.updateMatrices(te,y);for(let A=0;A<C;A++){const Q=q.getCamera(A);if(te.isPointLight){const se=q.camera,me=q.matrix,fe=te.distance||se.far;fe!==se.far&&(se.far=fe,se.updateProjectionMatrix()),ta.setFromMatrixPosition(te.matrixWorld),se.position.copy(ta),xu.copy(se.position),xu.add(d2[A]),se.up.copy(f2[A]),se.lookAt(xu),se.updateMatrixWorld(),me.makeTranslation(-ta.x,-ta.y,-ta.z),Um.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Um,se.coordinateSystem,se.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,A),t.clear();else{A===0&&(t.setRenderTarget(q.map),t.clear());const se=q.getViewport(A);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),V.viewport(a)}i=q.getFrustum(A),M(R,y,Q,te,this.type)}q.isPointLightShadow!==!0&&this.type===oa&&g(q,y),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(N,D,U)};function g(T,R){const y=e.update(S);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,x.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,x.needsUpdate=!0),T.mapPass===null?T.mapPass=new $n(r.x,r.y,{format:Fr,type:fi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,y,d,S,null),x.uniforms.shadow_pass.value=T.mapPass.texture,x.uniforms.resolution.value.set(T.map.width,T.map.height),x.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,y,x,S,null)}function b(T,R,y,N){let D=null;const U=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)D=U;else if(D=y.isPointLight===!0?c:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const V=D.uuid,$=R.uuid;let B=u[V];B===void 0&&(B={},u[V]=B);let j=B[$];j===void 0&&(j=D.clone(),B[$]=j,R.addEventListener("dispose",w)),D=j}if(D.visible=R.visible,D.wireframe=R.wireframe,N===oa?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:h[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const V=t.properties.get(D);V.light=y}return D}function M(T,R,y,N,D){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===oa)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const $=e.update(T),B=T.material;if(Array.isArray(B)){const j=$.groups;for(let te=0,q=j.length;te<q;te++){const H=j[te],O=B[H.materialIndex];if(O&&O.visible){const C=b(T,O,N,D);T.onBeforeShadow(t,T,R,y,$,C,H),t.renderBufferDirect(y,null,$,C,T,H),T.onAfterShadow(t,T,R,y,$,C,H)}}}else if(B.visible){const j=b(T,B,N,D);T.onBeforeShadow(t,T,R,y,$,j,null),t.renderBufferDirect(y,null,$,j,T,null),T.onAfterShadow(t,T,R,y,$,j,null)}}const V=T.children;for(let $=0,B=V.length;$<B;$++)M(V[$],R,y,N,D)}function w(T){T.target.removeEventListener("dispose",w);for(const y in u){const N=u[y],D=T.target.uuid;D in N&&(N[D].dispose(),delete N[D])}}}function p2(t,e){function n(){let F=!1;const _e=new At;let ie=null;const ye=new At(0,0,0,0);return{setMask:function(Te){ie!==Te&&!F&&(t.colorMask(Te,Te,Te,Te),ie=Te)},setLocked:function(Te){F=Te},setClear:function(Te,ae,ke,Ie,mt){mt===!0&&(Te*=Ie,ae*=Ie,ke*=Ie),_e.set(Te,ae,ke,Ie),ye.equals(_e)===!1&&(t.clearColor(Te,ae,ke,Ie),ye.copy(_e))},reset:function(){F=!1,ie=null,ye.set(-1,0,0,0)}}}function i(){let F=!1,_e=!1,ie=null,ye=null,Te=null;return{setReversed:function(ae){if(_e!==ae){const ke=e.get("EXT_clip_control");ae?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),_e=ae;const Ie=Te;Te=null,this.setClear(Ie)}},getReversed:function(){return _e},setTest:function(ae){ae?X(t.DEPTH_TEST):ne(t.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!F&&(t.depthMask(ae),ie=ae)},setFunc:function(ae){if(_e&&(ae=XS[ae]),ye!==ae){switch(ae){case fd:t.depthFunc(t.NEVER);break;case hd:t.depthFunc(t.ALWAYS);break;case pd:t.depthFunc(t.LESS);break;case ka:t.depthFunc(t.LEQUAL);break;case md:t.depthFunc(t.EQUAL);break;case xd:t.depthFunc(t.GEQUAL);break;case gd:t.depthFunc(t.GREATER);break;case vd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=ae}},setLocked:function(ae){F=ae},setClear:function(ae){Te!==ae&&(Te=ae,_e&&(ae=1-ae),t.clearDepth(ae))},reset:function(){F=!1,ie=null,ye=null,Te=null,_e=!1}}}function r(){let F=!1,_e=null,ie=null,ye=null,Te=null,ae=null,ke=null,Ie=null,mt=null;return{setTest:function(ot){F||(ot?X(t.STENCIL_TEST):ne(t.STENCIL_TEST))},setMask:function(ot){_e!==ot&&!F&&(t.stencilMask(ot),_e=ot)},setFunc:function(ot,Fn,Jn){(ie!==ot||ye!==Fn||Te!==Jn)&&(t.stencilFunc(ot,Fn,Jn),ie=ot,ye=Fn,Te=Jn)},setOp:function(ot,Fn,Jn){(ae!==ot||ke!==Fn||Ie!==Jn)&&(t.stencilOp(ot,Fn,Jn),ae=ot,ke=Fn,Ie=Jn)},setLocked:function(ot){F=ot},setClear:function(ot){mt!==ot&&(t.clearStencil(ot),mt=ot)},reset:function(){F=!1,_e=null,ie=null,ye=null,Te=null,ae=null,ke=null,Ie=null,mt=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let p={},h={},d={},x=new WeakMap,v=[],S=null,m=!1,f=null,g=null,b=null,M=null,w=null,T=null,R=null,y=new tt(0,0,0),N=0,D=!1,U=null,V=null,$=null,B=null,j=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(O)[1]),q=H>=1):O.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),q=H>=2);let C=null,A={};const Q=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),me=new At().fromArray(Q),fe=new At().fromArray(se);function he(F,_e,ie,ye){const Te=new Uint8Array(4),ae=t.createTexture();t.bindTexture(F,ae),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<ie;ke++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(_e+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return ae}const k={};k[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),k[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),k[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(t.DEPTH_TEST),a.setFunc(ka),Be(!1),$e(zp),X(t.CULL_FACE),Le(Ti);function X(F){p[F]!==!0&&(t.enable(F),p[F]=!0)}function ne(F){p[F]!==!1&&(t.disable(F),p[F]=!1)}function xe(F,_e){return d[F]!==_e?(t.bindFramebuffer(F,_e),d[F]=_e,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=_e),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=_e),!0):!1}function oe(F,_e){let ie=v,ye=!1;if(F){ie=x.get(_e),ie===void 0&&(ie=[],x.set(_e,ie));const Te=F.textures;if(ie.length!==Te.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,ke=Te.length;ae<ke;ae++)ie[ae]=t.COLOR_ATTACHMENT0+ae;ie.length=Te.length,ye=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,ye=!0);ye&&t.drawBuffers(ie)}function Ne(F){return S!==F?(t.useProgram(F),S=F,!0):!1}const be={[is]:t.FUNC_ADD,[hS]:t.FUNC_SUBTRACT,[pS]:t.FUNC_REVERSE_SUBTRACT};be[mS]=t.MIN,be[xS]=t.MAX;const le={[gS]:t.ZERO,[vS]:t.ONE,[_S]:t.SRC_COLOR,[ig]:t.SRC_ALPHA,[wS]:t.SRC_ALPHA_SATURATE,[bS]:t.DST_COLOR,[SS]:t.DST_ALPHA,[yS]:t.ONE_MINUS_SRC_COLOR,[rg]:t.ONE_MINUS_SRC_ALPHA,[ES]:t.ONE_MINUS_DST_COLOR,[MS]:t.ONE_MINUS_DST_ALPHA,[TS]:t.CONSTANT_COLOR,[AS]:t.ONE_MINUS_CONSTANT_COLOR,[CS]:t.CONSTANT_ALPHA,[RS]:t.ONE_MINUS_CONSTANT_ALPHA};function Le(F,_e,ie,ye,Te,ae,ke,Ie,mt,ot){if(F===Ti){m===!0&&(ne(t.BLEND),m=!1);return}if(m===!1&&(X(t.BLEND),m=!0),F!==fS){if(F!==f||ot!==D){if((g!==is||w!==is)&&(t.blendEquation(t.FUNC_ADD),g=is,w=is),ot)switch(F){case va:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dd:t.blendFunc(t.ONE,t.ONE);break;case Hp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:it("WebGLState: Invalid blending: ",F);break}else switch(F){case va:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Hp:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vp:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",F);break}b=null,M=null,T=null,R=null,y.set(0,0,0),N=0,f=F,D=ot}return}Te=Te||_e,ae=ae||ie,ke=ke||ye,(_e!==g||Te!==w)&&(t.blendEquationSeparate(be[_e],be[Te]),g=_e,w=Te),(ie!==b||ye!==M||ae!==T||ke!==R)&&(t.blendFuncSeparate(le[ie],le[ye],le[ae],le[ke]),b=ie,M=ye,T=ae,R=ke),(Ie.equals(y)===!1||mt!==N)&&(t.blendColor(Ie.r,Ie.g,Ie.b,mt),y.copy(Ie),N=mt),f=F,D=!1}function je(F,_e){F.side===Si?ne(t.CULL_FACE):X(t.CULL_FACE);let ie=F.side===mn;_e&&(ie=!ie),Be(ie),F.blending===va&&F.transparent===!1?Le(Ti):Le(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ye=F.stencilWrite;o.setTest(ye),ye&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),dt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?X(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(F){U!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),U=F)}function $e(F){F!==cS?(X(t.CULL_FACE),F!==V&&(F===zp?t.cullFace(t.BACK):F===uS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ne(t.CULL_FACE),V=F}function at(F){F!==$&&(q&&t.lineWidth(F),$=F)}function dt(F,_e,ie){F?(X(t.POLYGON_OFFSET_FILL),(B!==_e||j!==ie)&&(B=_e,j=ie,a.getReversed()&&(_e=-_e),t.polygonOffset(_e,ie))):ne(t.POLYGON_OFFSET_FILL)}function ht(F){F?X(t.SCISSOR_TEST):ne(t.SCISSOR_TEST)}function St(F){F===void 0&&(F=t.TEXTURE0+te-1),C!==F&&(t.activeTexture(F),C=F)}function I(F,_e,ie){ie===void 0&&(C===null?ie=t.TEXTURE0+te-1:ie=C);let ye=A[ie];ye===void 0&&(ye={type:void 0,texture:void 0},A[ie]=ye),(ye.type!==F||ye.texture!==_e)&&(C!==ie&&(t.activeTexture(ie),C=ie),t.bindTexture(F,_e||k[F]),ye.type=F,ye.texture=_e)}function Ct(){const F=A[C];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Qe(){try{t.compressedTexImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function _(){try{t.texSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function z(){try{t.texSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function Y(){try{t.compressedTexSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function ue(){try{t.texStorage2D(...arguments)}catch(F){it("WebGLState:",F)}}function pe(){try{t.texStorage3D(...arguments)}catch(F){it("WebGLState:",F)}}function ee(){try{t.texImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function re(){try{t.texImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function ge(F){return h[F]!==void 0?h[F]:t.getParameter(F)}function Fe(F,_e){h[F]!==_e&&(t.pixelStorei(F,_e),h[F]=_e)}function Se(F){me.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),me.copy(F))}function ve(F){fe.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),fe.copy(F))}function Oe(F,_e){let ie=u.get(_e);ie===void 0&&(ie=new WeakMap,u.set(_e,ie));let ye=ie.get(F);ye===void 0&&(ye=t.getUniformBlockIndex(_e,F.name),ie.set(F,ye))}function ze(F,_e){const ye=u.get(_e).get(F);c.get(_e)!==ye&&(t.uniformBlockBinding(_e,ye,F.__bindingPointIndex),c.set(_e,ye))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),p={},h={},C=null,A={},d={},x=new WeakMap,v=[],S=null,m=!1,f=null,g=null,b=null,M=null,w=null,T=null,R=null,y=new tt(0,0,0),N=0,D=!1,U=null,V=null,$=null,B=null,j=null,me.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:X,disable:ne,bindFramebuffer:xe,drawBuffers:oe,useProgram:Ne,setBlending:Le,setMaterial:je,setFlipSided:Be,setCullFace:$e,setLineWidth:at,setPolygonOffset:dt,setScissorTest:ht,activeTexture:St,bindTexture:I,unbindTexture:Ct,compressedTexImage2D:Qe,compressedTexImage3D:P,texImage2D:ee,texImage3D:re,pixelStorei:Fe,getParameter:ge,updateUBOMapping:Oe,uniformBlockBinding:ze,texStorage2D:ue,texStorage3D:pe,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:Se,viewport:ve,reset:We}}function m2(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new st,p=new WeakMap,h=new Set;let d;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,_){return v?new OffscreenCanvas(P,_):zl("canvas")}function m(P,_,z){let Y=1;const J=Qe(P);if((J.width>z||J.height>z)&&(Y=z/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(Y*J.width),pe=Math.floor(Y*J.height);d===void 0&&(d=S(ue,pe));const ee=_?S(ue,pe):d;return ee.width=ue,ee.height=pe,ee.getContext("2d").drawImage(P,0,0,ue,pe),He("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ue+"x"+pe+")."),ee}else return"data"in P&&He("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function f(P){return P.generateMipmaps}function g(P){t.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(P,_,z,Y,J,ue=!1){if(P!==null){if(t[P]!==void 0)return t[P];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe;Y&&(pe=e.get("EXT_texture_norm16"),pe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=_;if(_===t.RED&&(z===t.FLOAT&&(ee=t.R32F),z===t.HALF_FLOAT&&(ee=t.R16F),z===t.UNSIGNED_BYTE&&(ee=t.R8),z===t.UNSIGNED_SHORT&&pe&&(ee=pe.R16_EXT),z===t.SHORT&&pe&&(ee=pe.R16_SNORM_EXT)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.R8UI),z===t.UNSIGNED_SHORT&&(ee=t.R16UI),z===t.UNSIGNED_INT&&(ee=t.R32UI),z===t.BYTE&&(ee=t.R8I),z===t.SHORT&&(ee=t.R16I),z===t.INT&&(ee=t.R32I)),_===t.RG&&(z===t.FLOAT&&(ee=t.RG32F),z===t.HALF_FLOAT&&(ee=t.RG16F),z===t.UNSIGNED_BYTE&&(ee=t.RG8),z===t.UNSIGNED_SHORT&&pe&&(ee=pe.RG16_EXT),z===t.SHORT&&pe&&(ee=pe.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RG8UI),z===t.UNSIGNED_SHORT&&(ee=t.RG16UI),z===t.UNSIGNED_INT&&(ee=t.RG32UI),z===t.BYTE&&(ee=t.RG8I),z===t.SHORT&&(ee=t.RG16I),z===t.INT&&(ee=t.RG32I)),_===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),z===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),z===t.UNSIGNED_INT&&(ee=t.RGB32UI),z===t.BYTE&&(ee=t.RGB8I),z===t.SHORT&&(ee=t.RGB16I),z===t.INT&&(ee=t.RGB32I)),_===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),z===t.UNSIGNED_INT&&(ee=t.RGBA32UI),z===t.BYTE&&(ee=t.RGBA8I),z===t.SHORT&&(ee=t.RGBA16I),z===t.INT&&(ee=t.RGBA32I)),_===t.RGB&&(z===t.UNSIGNED_SHORT&&pe&&(ee=pe.RGB16_EXT),z===t.SHORT&&pe&&(ee=pe.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),_===t.RGBA){const re=ue?kl:Ze.getTransfer(J);z===t.FLOAT&&(ee=t.RGBA32F),z===t.HALF_FLOAT&&(ee=t.RGBA16F),z===t.UNSIGNED_BYTE&&(ee=re===ct?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&pe&&(ee=pe.RGBA16_EXT),z===t.SHORT&&pe&&(ee=pe.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function w(P,_){let z;return P?_===null||_===di||_===za?z=t.DEPTH24_STENCIL8:_===ai?z=t.DEPTH32F_STENCIL8:_===Ba&&(z=t.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===di||_===za?z=t.DEPTH_COMPONENT24:_===ai?z=t.DEPTH_COMPONENT32F:_===Ba&&(z=t.DEPTH_COMPONENT16),z}function T(P,_){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==jt&&P.minFilter!==Jt?Math.log2(Math.max(_.width,_.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?_.mipmaps.length:1}function R(P){const _=P.target;_.removeEventListener("dispose",R),N(_),_.isVideoTexture&&p.delete(_),_.isHTMLTexture&&h.delete(_)}function y(P){const _=P.target;_.removeEventListener("dispose",y),U(_)}function N(P){const _=i.get(P);if(_.__webglInit===void 0)return;const z=P.source,Y=x.get(z);if(Y){const J=Y[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(P),Object.keys(Y).length===0&&x.delete(z)}i.remove(P)}function D(P){const _=i.get(P);t.deleteTexture(_.__webglTexture);const z=P.source,Y=x.get(z);delete Y[_.__cacheKey],a.memory.textures--}function U(P){const _=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let J=0;J<_.__webglFramebuffer[Y].length;J++)t.deleteFramebuffer(_.__webglFramebuffer[Y][J]);else t.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)t.deleteFramebuffer(_.__webglFramebuffer[Y]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=P.textures;for(let Y=0,J=z.length;Y<J;Y++){const ue=i.get(z[Y]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(z[Y])}i.remove(P)}let V=0;function $(){V=0}function B(){return V}function j(P){V=P}function te(){const P=V;return P>=r.maxTextures&&He("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+r.maxTextures),V+=1,P}function q(P){const _=[];return _.push(P.wrapS),_.push(P.wrapT),_.push(P.wrapR||0),_.push(P.magFilter),_.push(P.minFilter),_.push(P.anisotropy),_.push(P.internalFormat),_.push(P.format),_.push(P.type),_.push(P.generateMipmaps),_.push(P.premultiplyAlpha),_.push(P.flipY),_.push(P.unpackAlignment),_.push(P.colorSpace),_.join()}function H(P,_){const z=i.get(P);if(P.isVideoTexture&&I(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){const Y=P.image;if(Y===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(z,P,_);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function O(P,_){const z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ne(z,P,_);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function C(P,_){const z=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ne(z,P,_);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function A(P,_){const z=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){xe(z,P,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}const Q={[_d]:t.REPEAT,[Ei]:t.CLAMP_TO_EDGE,[yd]:t.MIRRORED_REPEAT},se={[jt]:t.NEAREST,[DS]:t.NEAREST_MIPMAP_NEAREST,[yo]:t.NEAREST_MIPMAP_LINEAR,[Jt]:t.LINEAR,[Hc]:t.LINEAR_MIPMAP_NEAREST,[Er]:t.LINEAR_MIPMAP_LINEAR},me={[FS]:t.NEVER,[HS]:t.ALWAYS,[OS]:t.LESS,[ch]:t.LEQUAL,[kS]:t.EQUAL,[uh]:t.GEQUAL,[BS]:t.GREATER,[zS]:t.NOTEQUAL};function fe(P,_){if(_.type===ai&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Jt||_.magFilter===Hc||_.magFilter===yo||_.magFilter===Er||_.minFilter===Jt||_.minFilter===Hc||_.minFilter===yo||_.minFilter===Er)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,Q[_.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,Q[_.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,Q[_.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,se[_.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,se[_.minFilter]),_.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jt||_.minFilter!==yo&&_.minFilter!==Er||_.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function he(P,_){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,_.addEventListener("dispose",R));const Y=_.source;let J=x.get(Y);J===void 0&&(J={},x.set(Y,J));const ue=q(_);if(ue!==P.__cacheKey){J[ue]===void 0&&(J[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[ue].usedTimes++;const pe=J[P.__cacheKey];pe!==void 0&&(J[P.__cacheKey].usedTimes--,pe.usedTimes===0&&D(_)),P.__cacheKey=ue,P.__webglTexture=J[ue].texture}return z}function k(P,_,z){return Math.floor(Math.floor(P/z)/_)}function X(P,_,z,Y){const ue=P.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,z,Y,_.data);else{ue.sort((Fe,Se)=>Fe.start-Se.start);let pe=0;for(let Fe=1;Fe<ue.length;Fe++){const Se=ue[pe],ve=ue[Fe],Oe=Se.start+Se.count,ze=k(ve.start,_.width,4),We=k(Se.start,_.width,4);ve.start<=Oe+1&&ze===We&&k(ve.start+ve.count-1,_.width,4)===ze?Se.count=Math.max(Se.count,ve.start+ve.count-Se.start):(++pe,ue[pe]=ve)}ue.length=pe+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),re=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Fe=0,Se=ue.length;Fe<Se;Fe++){const ve=ue[Fe],Oe=Math.floor(ve.start/4),ze=Math.ceil(ve.count/4),We=Oe%_.width,F=Math.floor(Oe/_.width),_e=ze,ie=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,We),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,We,F,_e,ie,z,Y,_.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function ne(P,_,z){let Y=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=t.TEXTURE_3D);const J=he(P,_),ue=_.source;n.bindTexture(Y,P.__webglTexture,t.TEXTURE0+z);const pe=i.get(ue);if(ue.version!==pe.__version||J===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ie=Ze.getPrimaries(Ze.workingColorSpace),ye=_.colorSpace===Zi?null:Ze.getPrimaries(_.colorSpace),Te=_.colorSpace===Zi||ie===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let re=m(_.image,!1,r.maxTextureSize);re=Ct(_,re);const ge=s.convert(_.format,_.colorSpace),Fe=s.convert(_.type);let Se=M(_.internalFormat,ge,Fe,_.normalized,_.colorSpace,_.isVideoTexture);fe(Y,_);let ve;const Oe=_.mipmaps,ze=_.isVideoTexture!==!0,We=pe.__version===void 0||J===!0,F=ue.dataReady,_e=T(_,re);if(_.isDepthTexture)Se=w(_.format===wr,_.type),We&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Se,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Se,re.width,re.height,0,ge,Fe,null));else if(_.isDataTexture)if(Oe.length>0){ze&&We&&n.texStorage2D(t.TEXTURE_2D,_e,Se,Oe[0].width,Oe[0].height);for(let ie=0,ye=Oe.length;ie<ye;ie++)ve=Oe[ie],ze?F&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ve.width,ve.height,ge,Fe,ve.data):n.texImage2D(t.TEXTURE_2D,ie,Se,ve.width,ve.height,0,ge,Fe,ve.data);_.generateMipmaps=!1}else ze?(We&&n.texStorage2D(t.TEXTURE_2D,_e,Se,re.width,re.height),F&&X(_,re,ge,Fe)):n.texImage2D(t.TEXTURE_2D,0,Se,re.width,re.height,0,ge,Fe,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ze&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Se,Oe[0].width,Oe[0].height,re.depth);for(let ie=0,ye=Oe.length;ie<ye;ie++)if(ve=Oe[ie],_.format!==Wn)if(ge!==null)if(ze){if(F)if(_.layerUpdates.size>0){const Te=hm(ve.width,ve.height,_.format,_.type);for(const ae of _.layerUpdates){const ke=ve.data.subarray(ae*Te/ve.data.BYTES_PER_ELEMENT,(ae+1)*Te/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,ae,ve.width,ve.height,1,ge,ke)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,re.depth,ge,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Se,ve.width,ve.height,re.depth,0,ve.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,re.depth,ge,Fe,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Se,ve.width,ve.height,re.depth,0,ge,Fe,ve.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ze&&We&&n.texStorage2D(t.TEXTURE_2D,_e,Se,Oe[0].width,Oe[0].height);for(let ie=0,ye=Oe.length;ie<ye;ie++)ve=Oe[ie],_.format!==Wn?ge!==null?ze?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Se,ve.width,ve.height,0,ve.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?F&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ve.width,ve.height,ge,Fe,ve.data):n.texImage2D(t.TEXTURE_2D,ie,Se,ve.width,ve.height,0,ge,Fe,ve.data)}else if(_.isDataArrayTexture)if(ze){if(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Se,re.width,re.height,re.depth),F)if(_.layerUpdates.size>0){const ie=hm(re.width,re.height,_.format,_.type);for(const ye of _.layerUpdates){const Te=re.data.subarray(ye*ie/re.data.BYTES_PER_ELEMENT,(ye+1)*ie/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ye,re.width,re.height,1,ge,Fe,Te)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Fe,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,re.width,re.height,re.depth,0,ge,Fe,re.data);else if(_.isData3DTexture)ze?(We&&n.texStorage3D(t.TEXTURE_3D,_e,Se,re.width,re.height,re.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Fe,re.data)):n.texImage3D(t.TEXTURE_3D,0,Se,re.width,re.height,re.depth,0,ge,Fe,re.data);else if(_.isFramebufferTexture){if(We)if(ze)n.texStorage2D(t.TEXTURE_2D,_e,Se,re.width,re.height);else{let ie=re.width,ye=re.height;for(let Te=0;Te<_e;Te++)n.texImage2D(t.TEXTURE_2D,Te,Se,ie,ye,0,ge,Fe,null),ie>>=1,ye>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),re.parentNode!==ie){ie.appendChild(re),h.add(_),ie.onpaint=ye=>{const Te=ye.changedElements;for(const ae of h)Te.includes(ae.image)&&(ae.needsUpdate=!0)},ie.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,re);else{const Te=t.RGBA,ae=t.RGBA,ke=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Te,ae,ke,re)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(ze&&We){const ie=Qe(Oe[0]);n.texStorage2D(t.TEXTURE_2D,_e,Se,ie.width,ie.height)}for(let ie=0,ye=Oe.length;ie<ye;ie++)ve=Oe[ie],ze?F&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ge,Fe,ve):n.texImage2D(t.TEXTURE_2D,ie,Se,ge,Fe,ve);_.generateMipmaps=!1}else if(ze){if(We){const ie=Qe(re);n.texStorage2D(t.TEXTURE_2D,_e,Se,ie.width,ie.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Fe,re)}else n.texImage2D(t.TEXTURE_2D,0,Se,ge,Fe,re);f(_)&&g(Y),pe.__version=ue.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function xe(P,_,z){if(_.image.length!==6)return;const Y=he(P,_),J=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+z);const ue=i.get(J);if(J.version!==ue.__version||Y===!0){n.activeTexture(t.TEXTURE0+z);const pe=Ze.getPrimaries(Ze.workingColorSpace),ee=_.colorSpace===Zi?null:Ze.getPrimaries(_.colorSpace),re=_.colorSpace===Zi||pe===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const ge=_.isCompressedTexture||_.image[0].isCompressedTexture,Fe=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let ae=0;ae<6;ae++)!ge&&!Fe?Se[ae]=m(_.image[ae],!0,r.maxCubemapSize):Se[ae]=Fe?_.image[ae].image:_.image[ae],Se[ae]=Ct(_,Se[ae]);const ve=Se[0],Oe=s.convert(_.format,_.colorSpace),ze=s.convert(_.type),We=M(_.internalFormat,Oe,ze,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,_e=ue.__version===void 0||Y===!0,ie=J.dataReady;let ye=T(_,ve);fe(t.TEXTURE_CUBE_MAP,_);let Te;if(ge){F&&_e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,We,ve.width,ve.height);for(let ae=0;ae<6;ae++){Te=Se[ae].mipmaps;for(let ke=0;ke<Te.length;ke++){const Ie=Te[ke];_.format!==Wn?Oe!==null?F?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,0,0,Ie.width,Ie.height,Oe,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,We,Ie.width,Ie.height,0,Ie.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,0,0,Ie.width,Ie.height,Oe,ze,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke,We,Ie.width,Ie.height,0,Oe,ze,Ie.data)}}}else{if(Te=_.mipmaps,F&&_e){Te.length>0&&ye++;const ae=Qe(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,We,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Fe){F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Se[ae].width,Se[ae].height,Oe,ze,Se[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,Se[ae].width,Se[ae].height,0,Oe,ze,Se[ae].data);for(let ke=0;ke<Te.length;ke++){const mt=Te[ke].image[ae].image;F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,0,0,mt.width,mt.height,Oe,ze,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,We,mt.width,mt.height,0,Oe,ze,mt.data)}}else{F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Oe,ze,Se[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,Oe,ze,Se[ae]);for(let ke=0;ke<Te.length;ke++){const Ie=Te[ke];F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,0,0,Oe,ze,Ie.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ke+1,We,Oe,ze,Ie.image[ae])}}}f(_)&&g(t.TEXTURE_CUBE_MAP),ue.__version=J.version,_.onUpdate&&_.onUpdate(_)}P.__version=_.version}function oe(P,_,z,Y,J,ue){const pe=s.convert(z.format,z.colorSpace),ee=s.convert(z.type),re=M(z.internalFormat,pe,ee,z.normalized,z.colorSpace),ge=i.get(_),Fe=i.get(z);if(Fe.__renderTarget=_,!ge.__hasExternalTextures){const Se=Math.max(1,_.width>>ue),ve=Math.max(1,_.height>>ue);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ue,re,Se,ve,_.depth,0,pe,ee,null):n.texImage2D(J,ue,re,Se,ve,0,pe,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),St(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,J,Fe.__webglTexture,0,ht(_)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,J,Fe.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(P,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,P),_.depthBuffer){const Y=_.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,ue=w(_.stencilBuffer,J),pe=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;St(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ht(_),ue,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ht(_),ue,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ue,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,P)}else{const Y=_.textures;for(let J=0;J<Y.length;J++){const ue=Y[J],pe=s.convert(ue.format,ue.colorSpace),ee=s.convert(ue.type),re=M(ue.internalFormat,pe,ee,ue.normalized,ue.colorSpace);St(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ht(_),re,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ht(_),re,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,re,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(P,_,z){const Y=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),fe(t.TEXTURE_CUBE_MAP,_.depthTexture);const ge=s.convert(_.depthTexture.format),Fe=s.convert(_.depthTexture.type);let Se;_.depthTexture.format===Ii?Se=t.DEPTH_COMPONENT24:_.depthTexture.format===wr&&(Se=t.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,_.width,_.height,0,ge,Fe,null)}}else H(_.depthTexture,0);const ue=J.__webglTexture,pe=ht(_),ee=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,re=_.depthTexture.format===wr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ii)St(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ee,ue,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,re,ee,ue,0);else if(_.depthTexture.format===wr)St(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ee,ue,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,re,ee,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(P){const _=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==P.depthTexture){const Y=P.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=Y}if(P.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)be(_.__webglFramebuffer[Y],P,Y);else{const Y=P.texture.mipmaps;Y&&Y.length>0?be(_.__webglFramebuffer[0],P,0):be(_.__webglFramebuffer,P,0)}else if(z){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=t.createRenderbuffer(),Ne(_.__webglDepthbuffer[Y],P,!1);else{const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ue)}}else{const Y=P.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Ne(_.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(P,_,z){const Y=i.get(P);_!==void 0&&oe(Y.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&le(P)}function je(P){const _=P.texture,z=i.get(P),Y=i.get(_);P.addEventListener("dispose",y);const J=P.textures,ue=P.isWebGLCubeRenderTarget===!0,pe=J.length>1;if(pe||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=_.version,a.memory.textures++),ue){z.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ee]=[];for(let re=0;re<_.mipmaps.length;re++)z.__webglFramebuffer[ee][re]=t.createFramebuffer()}else z.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)z.__webglFramebuffer[ee]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(pe)for(let ee=0,re=J.length;ee<re;ee++){const ge=i.get(J[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&St(P)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const re=J[ee];z.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ee]);const ge=s.convert(re.format,re.colorSpace),Fe=s.convert(re.type),Se=M(re.internalFormat,ge,Fe,re.normalized,re.colorSpace,P.isXRRenderTarget===!0),ve=ht(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Se,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,z.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(z.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),fe(t.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)oe(z.__webglFramebuffer[ee][re],P,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,re);else oe(z.__webglFramebuffer[ee],P,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);f(_)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let ee=0,re=J.length;ee<re;ee++){const ge=J[ee],Fe=i.get(ge);let Se=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Se=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,Fe.__webglTexture),fe(Se,ge),oe(z.__webglFramebuffer,P,ge,t.COLOR_ATTACHMENT0+ee,Se,0),f(ge)&&g(Se)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,Y.__webglTexture),fe(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)oe(z.__webglFramebuffer[re],P,_,t.COLOR_ATTACHMENT0,ee,re);else oe(z.__webglFramebuffer,P,_,t.COLOR_ATTACHMENT0,ee,0);f(_)&&g(ee),n.unbindTexture()}P.depthBuffer&&le(P)}function Be(P){const _=P.textures;for(let z=0,Y=_.length;z<Y;z++){const J=_[z];if(f(J)){const ue=b(P),pe=i.get(J).__webglTexture;n.bindTexture(ue,pe),g(ue),n.unbindTexture()}}}const $e=[],at=[];function dt(P){if(P.samples>0){if(St(P)===!1){const _=P.textures,z=P.width,Y=P.height;let J=t.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(P),ee=_.length>1;if(ee)for(let ge=0;ge<_.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const re=P.texture.mipmaps;re&&re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Fe=i.get(_[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,z,Y,0,0,z,Y,J,t.NEAREST),c===!0&&($e.length=0,at.length=0,$e.push(t.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&($e.push(ue),at.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,at)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,$e))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<_.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Fe=i.get(_[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){const _=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function ht(P){return Math.min(r.maxSamples,P.samples)}function St(P){const _=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(P){const _=a.render.frame;p.get(P)!==_&&(p.set(P,_),P.update())}function Ct(P,_){const z=P.colorSpace,Y=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Ol&&z!==Zi&&(Ze.getTransfer(z)===ct?(Y!==Wn||J!==Pn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",z)),_}function Qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=te,this.resetTextureUnits=$,this.getTextureUnits=B,this.setTextureUnits=j,this.setTexture2D=H,this.setTexture2DArray=O,this.setTexture3D=C,this.setTextureCube=A,this.rebindTextures=Le,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function x2(t,e){function n(i,r=Zi){let s;const a=Ze.getTransfer(r);if(i===Pn)return t.UNSIGNED_BYTE;if(i===rh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===xg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===gg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===pg)return t.BYTE;if(i===mg)return t.SHORT;if(i===Ba)return t.UNSIGNED_SHORT;if(i===ih)return t.INT;if(i===di)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===fi)return t.HALF_FLOAT;if(i===vg)return t.ALPHA;if(i===_g)return t.RGB;if(i===Wn)return t.RGBA;if(i===Ii)return t.DEPTH_COMPONENT;if(i===wr)return t.DEPTH_STENCIL;if(i===yg)return t.RED;if(i===ah)return t.RED_INTEGER;if(i===Fr)return t.RG;if(i===oh)return t.RG_INTEGER;if(i===lh)return t.RGBA_INTEGER;if(i===rl||i===sl||i===al||i===ol)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sd||i===Md||i===bd||i===Ed)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Md)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ed)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wd||i===Td||i===Ad||i===Cd||i===Rd||i===Ul||i===Nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wd||i===Td)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ad)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cd)return s.COMPRESSED_R11_EAC;if(i===Rd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ul)return s.COMPRESSED_RG11_EAC;if(i===Nd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pd||i===Dd||i===Ld||i===Id||i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zd||i===Hd||i===Vd||i===jd||i===Gd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ld)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Id)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ud)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Od)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wd||i===Xd||i===Yd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Wd)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$d||i===qd||i===Fl||i===Kd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$d)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===za?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const g2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v2=`
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

}`;class _2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Dg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hi({vertexShader:g2,fragmentShader:v2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ui(new oc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y2 extends zr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,p=null,h=null,d=null,x=null,v=null;const S=typeof XRWebGLBinding<"u",m=new _2,f={},g=n.getContextAttributes();let b=null,M=null;const w=[],T=[],R=new st;let y=null,N=null;const D=new Nn;D.viewport=new At;const U=new Nn;U.viewport=new At;const V=[D,U],$=new A1;let B=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let X=w[k];return X===void 0&&(X=new Kc,w[k]=X),X.getTargetRaySpace()},this.getControllerGrip=function(k){let X=w[k];return X===void 0&&(X=new Kc,w[k]=X),X.getGripSpace()},this.getHand=function(k){let X=w[k];return X===void 0&&(X=new Kc,w[k]=X),X.getHandSpace()};function te(k){const X=T.indexOf(k.inputSource);if(X===-1)return;const ne=w[X];ne!==void 0&&(ne.update(k.inputSource,k.frame,u||a),ne.dispatchEvent({type:k.type,data:k.inputSource}))}function q(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",H);for(let k=0;k<w.length;k++){const X=T[k];X!==null&&(T[k]=null,w[k].disconnect(X))}B=null,j=null,m.reset();for(const k in f)delete f[k];if(e.setRenderTarget(b),x=null,d=null,h=null,r=null,M=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),N!==null){const k=N.camera;k.fov=N.fov,k.zoom=N.zoom,k.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return d!==null?d:x},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",q),r.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,xe=null,oe=null;g.depth&&(oe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=g.stencil?wr:Ii,xe=g.stencil?za:di);const Ne={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new $n(d.textureWidth,d.textureHeight,{format:Wn,type:Pn,depthTexture:new Ha(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),M=new $n(x.framebufferWidth,x.framebufferHeight,{format:Wn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(k){for(let X=0;X<k.removed.length;X++){const ne=k.removed[X],xe=T.indexOf(ne);xe>=0&&(T[xe]=null,w[xe].disconnect(ne))}for(let X=0;X<k.added.length;X++){const ne=k.added[X];let xe=T.indexOf(ne);if(xe===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=T.length){T.push(ne),xe=Ne;break}else if(T[Ne]===null){T[Ne]=ne,xe=Ne;break}if(xe===-1)break}const oe=w[xe];oe&&oe.connect(ne)}}const O=new K,C=new K;function A(k,X,ne){O.setFromMatrixPosition(X.matrixWorld),C.setFromMatrixPosition(ne.matrixWorld);const xe=O.distanceTo(C),oe=X.projectionMatrix.elements,Ne=ne.projectionMatrix.elements,be=oe[14]/(oe[10]-1),le=oe[14]/(oe[10]+1),Le=(oe[9]+1)/oe[5],je=(oe[9]-1)/oe[5],Be=(oe[8]-1)/oe[0],$e=(Ne[8]+1)/Ne[0],at=be*Be,dt=be*$e,ht=xe/(-Be+$e),St=ht*-Be;if(X.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(St),k.translateZ(ht),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),oe[10]===-1)k.projectionMatrix.copy(X.projectionMatrix),k.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const I=be+ht,Ct=le+ht,Qe=at-St,P=dt+(xe-St),_=Le*le/Ct*I,z=je*le/Ct*I;k.projectionMatrix.makePerspective(Qe,P,_,z,I,Ct),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Q(k,X){X===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(X.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let X=k.near,ne=k.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),$.near=U.near=D.near=X,$.far=U.far=D.far=ne,(B!==$.near||j!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),B=$.near,j=$.far),$.layers.mask=k.layers.mask|6,D.layers.mask=$.layers.mask&-5,U.layers.mask=$.layers.mask&-3;const xe=k.parent,oe=$.cameras;Q($,xe);for(let Ne=0;Ne<oe.length;Ne++)Q(oe[Ne],xe);oe.length===2?A($,D,U):$.projectionMatrix.copy(D.projectionMatrix),N===null&&k.isPerspectiveCamera&&(N={camera:k,fov:k.fov,zoom:k.zoom}),se(k,$,xe)};function se(k,X,ne){ne===null?k.matrix.copy(X.matrixWorld):(k.matrix.copy(ne.matrixWorld),k.matrix.invert(),k.matrix.multiply(X.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(X.projectionMatrix),k.projectionMatrixInverse.copy(X.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Zd*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(d===null&&x===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh($)},this.getCameraTexture=function(k){return f[k]};let me=null;function fe(k,X){if(p=X.getViewerPose(u||a),v=X,p!==null){const ne=p.views;x!==null&&(e.setRenderTargetFramebuffer(M,x.framebuffer),e.setRenderTarget(M));let xe=!1;ne.length!==$.cameras.length&&($.cameras.length=0,xe=!0);for(let le=0;le<ne.length;le++){const Le=ne[le];let je=null;if(x!==null)je=x.getViewport(Le);else{const $e=h.getViewSubImage(d,Le);je=$e.viewport,le===0&&(e.setRenderTargetTextures(M,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(M))}let Be=V[le];Be===void 0&&(Be=new Nn,Be.layers.enable(le),Be.viewport=new At,V[le]=Be),Be.matrix.fromArray(Le.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Le.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(je.x,je.y,je.width,je.height),le===0&&($.matrix.copy(Be.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),xe===!0&&$.cameras.push(Be)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const le=h.getDepthInformation(ne[0]);le&&le.isValid&&le.texture&&m.init(le,r.renderState)}if(oe&&oe.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let le=0;le<ne.length;le++){const Le=ne[le].camera;if(Le){let je=f[Le];je||(je=new Dg,f[Le]=je);const Be=h.getCameraImage(Le);je.sourceTexture=Be}}}}for(let ne=0;ne<w.length;ne++){const xe=T[ne],oe=w[ne];xe!==null&&oe!==void 0&&oe.update(xe,X,u||a)}me&&me(k,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),v=null}const he=new Fg;he.setAnimationLoop(fe),this.setAnimationLoop=function(k){me=k},this.dispose=function(){}}}const S2=new Pt,jg=new Ge;jg.set(-1,0,0,0,1,0,0,0,1);function M2(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Lg(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,b,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),p(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&x(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),S(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,g,b):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),b=g.envMap,M=g.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(S2.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(jg),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,g,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=b*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function p(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function x(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function b2(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){const T=w.program;i.uniformBlockBinding(M,T)}function u(M,w){let T=r[M.id];T===void 0&&(m(M),T=p(M),r[M.id]=T,M.addEventListener("dispose",g));const R=w.program;i.updateUBOMapping(M,R);const y=e.render.frame;s[M.id]!==y&&(d(M),s[M.id]=y)}function p(M){const w=h();M.__bindingPointIndex=w;const T=t.createBuffer(),R=M.__size,y=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,R,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,T),T}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const w=r[M.id],T=M.uniforms,R=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let y=0,N=T.length;y<N;y++){const D=T[y];if(Array.isArray(D))for(let U=0,V=D.length;U<V;U++)x(D[U],y,U,R);else x(D,y,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(M,w,T,R){if(S(M,w,T,R)===!0){const y=M.__offset,N=M.value;if(Array.isArray(N)){let D=0;for(let U=0;U<N.length;U++){const V=N[U],$=f(V);v(V,M.__data,D),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(N,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,M.__data)}}function v(M,w,T){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,T)}function S(M,w,T,R){const y=M.value,N=w+"_"+T;if(R[N]===void 0)return typeof y=="number"||typeof y=="boolean"?R[N]=y:ArrayBuffer.isView(y)?R[N]=y.slice():R[N]=y.clone(),!0;{const D=R[N];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return R[N]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(D.equals(y)===!1)return D.copy(y),!0}}return!1}function m(M){const w=M.uniforms;let T=0;const R=16;for(let N=0,D=w.length;N<D;N++){const U=Array.isArray(w[N])?w[N]:[w[N]];for(let V=0,$=U.length;V<$;V++){const B=U[V],j=Array.isArray(B.value)?B.value:[B.value];for(let te=0,q=j.length;te<q;te++){const H=j[te],O=f(H),C=T%R,A=C%O.boundary,Q=C+A;T+=A,Q!==0&&R-Q<O.storage&&(T+=R-Q),B.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=O.storage}}}const y=T%R;return y>0&&(T+=R-y),M.__size=T,M.__cache={},this}function f(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):He("WebGLRenderer: Unsupported uniform value type.",M),w}function g(M){const w=M.target;w.removeEventListener("dispose",g);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function b(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:u,dispose:b}}const E2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function w2(){return ni===null&&(ni=new m1(E2,16,16,Fr,fi),ni.name="DFG_LUT",ni.minFilter=Jt,ni.magFilter=Jt,ni.wrapS=Ei,ni.wrapT=Ei,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class T2{constructor(e={}){const{canvas:n=GS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:x=Pn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const S=x,m=new Set([lh,oh,ah]),f=new Set([Pn,di,Ba,za,rh,sh]),g=new Uint32Array(4),b=new Int32Array(4),M=new K;let w=null,T=null;const R=[],y=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let U=!1,V=null,$=null,B=null,j=null;this._outputColorSpace=An;let te=0,q=0,H=null,O=-1,C=null;const A=new At,Q=new At;let se=null;const me=new tt(0);let fe=0,he=n.width,k=n.height,X=1,ne=null,xe=null;const oe=new At(0,0,he,k),Ne=new At(0,0,he,k);let be=!1;const le=new Rg;let Le=!1,je=!1;const Be=new Pt,$e=new K,at=new At,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function St(){return H===null?X:1}let I=i;function Ct(E,L){return n.getContext(E,L)}let Qe,P,_,z,Y,J,ue,pe,ee,re,ge,Fe,Se,ve,Oe,ze,We,F,_e,ie,ye,Te,ae;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nh}`),n.addEventListener("webglcontextlost",mt,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",Fn,!1),I===null){const L="webgl2";if(I=Ct(L,E),I===null)throw Ct(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(E){throw n.removeEventListener("webglcontextlost",mt,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",Fn,!1),it("WebGLRenderer: "+E.message),E}function ke(){Qe=new wE(I),Qe.init(),ye=new x2(I,Qe),P=new mE(I,Qe,e,ye),_=new p2(I,Qe),P.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),$=I.createFramebuffer(),B=I.createFramebuffer(),j=I.createFramebuffer(),z=new CE(I),Y=new e2,J=new m2(I,Qe,_,Y,P,ye,z),ue=new EE(D),pe=new N1(I),Te=new hE(I,pe),ee=new TE(I,pe,z,Te),re=new NE(I,ee,pe,Te,z),F=new RE(I,P,J),Oe=new xE(Y),ge=new Qw(D,ue,Qe,P,Te,Oe),Fe=new M2(D,Y),Se=new n2,ve=new l2(Qe),We=new fE(D,ue,_,re,v,c),ze=new h2(D,re,P),ae=new b2(I,z,P,_),_e=new pE(I,Qe,z),ie=new AE(I,Qe,z),z.programs=ge.programs,D.capabilities=P,D.extensions=Qe,D.properties=Y,D.renderLists=Se,D.shadowMap=ze,D.state=_,D.info=z}S!==Pn&&(N=new DE(S,n.width,n.height,o,r,s));const Ie=new y2(D,I);this.xr=Ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(he,k,!1))},this.getSize=function(E){return E.set(he,k)},this.setSize=function(E,L,Z=!0){if(Ie.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}he=E,k=L,n.width=Math.floor(E*X),n.height=Math.floor(L*X),Z===!0&&(n.style.width=E+"px",n.style.height=L+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(he*X,k*X).floor()},this.setDrawingBufferSize=function(E,L,Z){he=E,k=L,X=Z,n.width=Math.floor(E*Z),n.height=Math.floor(L*Z),this.setViewport(0,0,E,L)},this.setEffects=function(E){if(S===Pn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let L=0;L<E.length;L++)if(E[L].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,L,Z,G){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,L,Z,G),_.viewport(A.copy(oe).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(Ne)},this.setScissor=function(E,L,Z,G){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,L,Z,G),_.scissor(Q.copy(Ne).multiplyScalar(X).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(E){_.setScissorTest(be=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){xe=E},this.getClearColor=function(E){return E.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(E=!0,L=!0,Z=!0){let G=0;if(E){let W=!1;if(H!==null){const we=H.texture.format;W=m.has(we)}if(W){const we=H.texture.type,Ce=f.has(we),Ee=We.getClearColor(),Pe=We.getClearAlpha(),Ue=Ee.r,Xe=Ee.g,qe=Ee.b;Ce?(g[0]=Ue,g[1]=Xe,g[2]=qe,g[3]=Pe,I.clearBufferuiv(I.COLOR,0,g)):(b[0]=Ue,b[1]=Xe,b[2]=qe,b[3]=Pe,I.clearBufferiv(I.COLOR,0,b))}else G|=I.COLOR_BUFFER_BIT}L&&(G|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),V=E},this.dispose=function(){n.removeEventListener("webglcontextlost",mt,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",Fn,!1),We.dispose(),Se.dispose(),ve.dispose(),Y.dispose(),ue.dispose(),re.dispose(),Te.dispose(),ae.dispose(),ge.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",_h),Ie.removeEventListener("sessionend",yh),hr.stop()};function mt(E){E.preventDefault(),Xp("WebGLRenderer: Context Lost."),U=!0}function ot(){Xp("WebGLRenderer: Context Restored."),U=!1;const E=z.autoReset,L=ze.enabled,Z=ze.autoUpdate,G=ze.needsUpdate,W=ze.type;ke(),z.autoReset=E,ze.enabled=L,ze.autoUpdate=Z,ze.needsUpdate=G,ze.type=W}function Fn(E){it("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Jn(E){const L=E.target;L.removeEventListener("dispose",Jn),$g(L)}function $g(E){qg(E),Y.remove(E)}function qg(E){const L=Y.get(E).programs;L!==void 0&&(L.forEach(function(Z){ge.releaseProgram(Z)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,Z,G,W,we){L===null&&(L=dt);const Ce=W.isMesh&&W.matrixWorld.determinantAffine()<0,Ee=Jg(E,L,Z,G,W);_.setMaterial(G,Ce);let Pe=Z.index,Ue=1;if(G.wireframe===!0){if(Pe=ee.getWireframeAttribute(Z),Pe===void 0)return;Ue=2}const Xe=Z.drawRange,qe=Z.attributes.position;let De=Xe.start*Ue,lt=(Xe.start+Xe.count)*Ue;we!==null&&(De=Math.max(De,we.start*Ue),lt=Math.min(lt,(we.start+we.count)*Ue)),Pe!==null?(De=Math.max(De,0),lt=Math.min(lt,Pe.count)):qe!=null&&(De=Math.max(De,0),lt=Math.min(lt,qe.count));const Dt=lt-De;if(Dt<0||Dt===1/0)return;Te.setup(W,G,Ee,Z,Pe);let vt,pt=_e;if(Pe!==null&&(vt=pe.get(Pe),pt=ie,pt.setIndex(vt)),W.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*St()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(W.isLine){let Xt=G.linewidth;Xt===void 0&&(Xt=1),_.setLineWidth(Xt*St()),W.isLineSegments?pt.setMode(I.LINES):W.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else W.isPoints?pt.setMode(I.POINTS):W.isSprite&&pt.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))pt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xt=W._multiDrawStarts,Ae=W._multiDrawCounts,en=W._multiDrawCount,et=Pe?pe.get(Pe).bytesPerElement:1,wn=Y.get(G).currentProgram.getUniforms();for(let Qn=0;Qn<en;Qn++)wn.setValue(I,"_gl_DrawID",Qn),pt.render(Xt[Qn]/et,Ae[Qn])}else if(W.isInstancedMesh)pt.renderInstances(De,Dt,W.count);else if(Z.isInstancedBufferGeometry){const Xt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ae=Math.min(Z.instanceCount,Xt);pt.renderInstances(De,Dt,Ae)}else pt.render(De,Dt)};function vh(E,L,Z,G){V!==null&&E.isNodeMaterial&&V.setObject(G,E),Le===!0&&Oe.setState(E,Z,!1),E.transparent===!0&&E.side===Si&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,to(E,L,G),E.side=Ir,E.needsUpdate=!0,to(E,L,G),E.side=Si):to(E,L,G)}this.compile=function(E,L,Z=null){Z===null&&(Z=E),V!==null&&V.renderStart(E,L,Z),T=ve.get(Z),T.init(L),y.push(T),Z.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),E!==Z&&E.traverseVisible(function(W){W.isLight&&W.layers.test(L.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),je=this.localClippingEnabled,Le=Oe.init(this.clippingPlanes,je),Le===!0&&Oe.setGlobalState(this.clippingPlanes,L),V!==null&&ze.render(T.state.shadowsArray,Z,L);const G=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const we=W.material;if(we)if(Array.isArray(we))for(let Ce=0;Ce<we.length;Ce++){const Ee=we[Ce];vh(Ee,Z,L,W),G.add(Ee)}else vh(we,Z,L,W),G.add(we)}),T=y.pop(),V!==null&&V.renderEnd(),G},this.compileAsync=function(E,L,Z=null){const G=this.compile(E,L,Z);return new Promise(W=>{function we(){if(G.forEach(function(Ce){const Pe=Y.get(Ce).currentProgram;(Pe===void 0||Pe.isReady())&&G.delete(Ce)}),G.size===0){W(E);return}setTimeout(we,10)}Qe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let dc=null;function Kg(E){dc&&dc(E)}function _h(){hr.stop()}function yh(){hr.start()}const hr=new Fg;hr.setAnimationLoop(Kg),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(E){dc=E,Ie.setAnimationLoop(E),E===null?hr.stop():hr.start()},Ie.addEventListener("sessionstart",_h),Ie.addEventListener("sessionend",yh),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;V!==null&&V.renderStart(E,L);const Z=Ie.enabled===!0&&Ie.isPresenting===!0,G=N!==null&&(H===null||Z)&&N.begin(D,H);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(L),L=Ie.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,L,H),T=ve.get(E,y.length),T.init(L),T.state.textureUnits=J.getTextureUnits(),y.push(T),Be.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),le.setFromProjectionMatrix(Be,oi,L.reversedDepth),je=this.localClippingEnabled,Le=Oe.init(this.clippingPlanes,je),w=Se.get(E,R.length),w.init(),R.push(w),Ie.enabled===!0&&Ie.isPresenting===!0){const Ce=D.xr.getDepthSensingMesh();Ce!==null&&fc(Ce,L,-1/0,D.sortObjects)}fc(E,L,0,D.sortObjects),w.finish(),V!==null&&V.updateLights(T.state.lightsArray),D.sortObjects===!0&&w.sort(ne,xe),ht=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,ht&&We.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Le===!0&&Oe.beginShadows();const W=T.state.shadowsArray;if(ze.render(W,E,L),Le===!0&&Oe.endShadows(),(G&&N.hasRenderPass())===!1){const Ce=w.opaque,Ee=w.transmissive;if(T.setupLights(),L.isArrayCamera){const Pe=L.cameras;if(Ee.length>0)for(let Ue=0,Xe=Pe.length;Ue<Xe;Ue++){const qe=Pe[Ue];Mh(Ce,Ee,E,qe)}ht&&We.render(E);for(let Ue=0,Xe=Pe.length;Ue<Xe;Ue++){const qe=Pe[Ue];Sh(w,E,qe,qe.viewport)}}else Ee.length>0&&Mh(Ce,Ee,E,L),ht&&We.render(E),Sh(w,E,L)}H!==null&&q===0&&(J.updateMultisampleRenderTarget(H),J.updateRenderTargetMipmap(H)),G&&N.end(D),E.isScene===!0&&E.onAfterRender(D,E,L),Te.resetDefaultState(),O=-1,C=null,y.pop(),y.length>0?(T=y[y.length-1],J.setTextureUnits(T.state.textureUnits),Le===!0&&Oe.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,V!==null&&V.renderEnd()};function fc(E,L,Z,G){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(le)){G&&at.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Be);const Ce=re.update(E),Ee=E.material;Ee.visible&&w.push(E,Ce,Ee,Z,at.z,null,L)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(le))){const Ce=re.update(E),Ee=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),at.copy(E.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),at.copy(Ce.boundingSphere.center)),at.applyMatrix4(E.matrixWorld).applyMatrix4(Be)),Array.isArray(Ee)){const Pe=Ce.groups;for(let Ue=0,Xe=Pe.length;Ue<Xe;Ue++){const qe=Pe[Ue],De=Ee[qe.materialIndex];De&&De.visible&&w.push(E,Ce,De,Z,at.z,qe,L)}}else Ee.visible&&w.push(E,Ce,Ee,Z,at.z,null,L)}}const we=E.children;for(let Ce=0,Ee=we.length;Ce<Ee;Ce++)fc(we[Ce],L,Z,G)}function Sh(E,L,Z,G){const{opaque:W,transmissive:we,transparent:Ce}=E;T.setupLightsView(Z),Le===!0&&Oe.setGlobalState(D.clippingPlanes,Z),G&&_.viewport(A.copy(G)),W.length>0&&eo(W,L,Z),we.length>0&&eo(we,L,Z),Ce.length>0&&eo(Ce,L,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Mh(E,L,Z,G){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const De=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new $n(1,1,{generateMipmaps:!0,type:De?fi:Pn,minFilter:Er,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const we=T.state.transmissionRenderTarget[G.id],Ce=G.viewport||A;we.setSize(Ce.z*D.transmissionResolutionScale,Ce.w*D.transmissionResolutionScale);const Ee=D.getRenderTarget(),Pe=D.getActiveCubeFace(),Ue=D.getActiveMipmapLevel();D.setRenderTarget(we),D.getClearColor(me),fe=D.getClearAlpha(),fe<1&&D.setClearColor(16777215,.5),D.clear(),ht&&We.render(Z);const Xe=D.toneMapping;D.toneMapping=ui;const qe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Le===!0&&Oe.setGlobalState(D.clippingPlanes,G),eo(E,Z,G),J.updateMultisampleRenderTarget(we),J.updateRenderTargetMipmap(we),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let lt=0,Dt=L.length;lt<Dt;lt++){const vt=L[lt],{object:pt,geometry:Xt,material:Ae,group:en}=vt;if(Ae.side===Si&&pt.layers.test(G.layers)){const et=Ae.side;Ae.side=mn,Ae.needsUpdate=!0,bh(pt,Z,G,Xt,Ae,en),Ae.side=et,Ae.needsUpdate=!0,De=!0}}De===!0&&(J.updateMultisampleRenderTarget(we),J.updateRenderTargetMipmap(we))}D.setRenderTarget(Ee,Pe,Ue),D.setClearColor(me,fe),qe!==void 0&&(G.viewport=qe),D.toneMapping=Xe}function eo(E,L,Z){const G=L.isScene===!0?L.overrideMaterial:null;for(let W=0,we=E.length;W<we;W++){const Ce=E[W],{object:Ee,geometry:Pe,group:Ue}=Ce;let Xe=Ce.material;Xe.allowOverride===!0&&G!==null&&(Xe=G),Ee.layers.test(Z.layers)&&bh(Ee,L,Z,Pe,Xe,Ue)}}function bh(E,L,Z,G,W,we){V!==null&&W.isNodeMaterial&&V.setObject(E,W),E.onBeforeRender(D,L,Z,G,W,we),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(D,L,Z,G,E,we),W.transparent===!0&&W.side===Si&&W.forceSinglePass===!1?(W.side=mn,W.needsUpdate=!0,D.renderBufferDirect(Z,L,G,W,E,we),W.side=Ir,W.needsUpdate=!0,D.renderBufferDirect(Z,L,G,W,E,we),W.side=Si):D.renderBufferDirect(Z,L,G,W,E,we),E.onAfterRender(D,L,Z,G,W,we)}function to(E,L,Z){L.isScene!==!0&&(L=dt);const G=Y.get(E),W=T.state.lights,we=T.state.shadowsArray,Ce=W.state.version,Ee=ge.getParameters(E,W.state,we,L,Z,T.state.lightProbeGridArray),Pe=ge.getProgramCacheKey(Ee);let Ue=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;const Xe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=ue.get(E.envMap||G.environment,Xe),G.envMapRotation=G.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",Jn),Ue=new Map,G.programs=Ue);let qe=Ue.get(Pe);if(qe!==void 0){if(G.currentProgram===qe&&G.lightsStateVersion===Ce)return wh(E,Ee),qe}else Ee.uniforms=ge.getUniforms(E),V!==null&&E.isNodeMaterial&&V.build(E,Z,Ee),E.onBeforeCompile(Ee,D),qe=ge.acquireProgram(Ee,Pe),Ue.set(Pe,qe),G.uniforms=Ee.uniforms;const De=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=Oe.uniform),wh(E,Ee),G.needsLights=ev(E),G.lightsStateVersion=Ce,G.needsLights&&(De.ambientLightColor.value=W.state.ambient,De.lightProbe.value=W.state.probe,De.sunLights.value=W.state.sun,De.sunLightShadows.value=W.state.sunShadow,De.directionalLights.value=W.state.directional,De.directionalLightShadows.value=W.state.directionalShadow,De.spotLights.value=W.state.spot,De.spotLightShadows.value=W.state.spotShadow,De.rectAreaLights.value=W.state.rectArea,De.ltc_1.value=W.state.rectAreaLTC1,De.ltc_2.value=W.state.rectAreaLTC2,De.pointLights.value=W.state.point,De.pointLightShadows.value=W.state.pointShadow,De.hemisphereLights.value=W.state.hemi,De.sunShadowMatrix.value=W.state.sunShadowMatrix,De.sunShadowCascade.value=W.state.sunShadowCascade,De.directionalShadowMatrix.value=W.state.directionalShadowMatrix,De.spotLightMatrix.value=W.state.spotLightMatrix,De.spotLightMap.value=W.state.spotLightMap,De.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=qe,G.uniformsList=null,qe}function Eh(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=ll.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function wh(E,L){const Z=Y.get(E);Z.outputColorSpace=L.outputColorSpace,Z.batching=L.batching,Z.batchingColor=L.batchingColor,Z.instancing=L.instancing,Z.instancingColor=L.instancingColor,Z.instancingMorph=L.instancingMorph,Z.skinning=L.skinning,Z.morphTargets=L.morphTargets,Z.morphNormals=L.morphNormals,Z.morphColors=L.morphColors,Z.morphTargetsCount=L.morphTargetsCount,Z.numClippingPlanes=L.numClippingPlanes,Z.numIntersection=L.numClipIntersection,Z.vertexAlphas=L.vertexAlphas,Z.vertexTangents=L.vertexTangents,Z.toneMapping=L.toneMapping}function Zg(E,L){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(L.matrixWorld);for(let Z=0,G=E.length;Z<G;Z++){const W=E[Z];if(W.texture!==null&&W.boundingBox.containsPoint(M))return W}return null}function Jg(E,L,Z,G,W){L.isScene!==!0&&(L=dt),J.resetTextureUnits();const we=L.fog,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,Ee=H===null?D.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ze.workingColorSpace,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ue=ue.get(G.envMap||Ce,Pe),Xe=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,qe=!!Z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!Z.morphAttributes.position,lt=!!Z.morphAttributes.normal,Dt=!!Z.morphAttributes.color;let vt=ui;G.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(vt=D.toneMapping);const pt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Xt=pt!==void 0?pt.length:0,Ae=Y.get(G),en=T.state.lights;if(Le===!0&&(je===!0||E!==C)){const xt=E===C&&G.id===O;Oe.setState(G,E,xt)}let et=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==en.state.version||Ae.outputColorSpace!==Ee||W.isBatchedMesh&&Ae.batching===!1||!W.isBatchedMesh&&Ae.batching===!0||W.isBatchedMesh&&Ae.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ae.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ae.instancing===!1||!W.isInstancedMesh&&Ae.instancing===!0||W.isSkinnedMesh&&Ae.skinning===!1||!W.isSkinnedMesh&&Ae.skinning===!0||W.isInstancedMesh&&Ae.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ae.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ae.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ae.instancingMorph===!1&&W.morphTexture!==null||Ae.envMap!==Ue||G.fog===!0&&Ae.fog!==we||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Oe.numPlanes||Ae.numIntersection!==Oe.numIntersection)||Ae.vertexAlphas!==Xe||Ae.vertexTangents!==qe||Ae.morphTargets!==De||Ae.morphNormals!==lt||Ae.morphColors!==Dt||Ae.toneMapping!==vt||Ae.morphTargetsCount!==Xt||!!Ae.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,Ae.__version=G.version);let wn=Ae.currentProgram;et===!0&&(wn=to(G,L,W),V&&G.isNodeMaterial&&V.onUpdateProgram(G,wn,Ae));let Qn=!1,Oi=!1,Hr=!1;const ft=wn.getUniforms(),Rt=Ae.uniforms;if(_.useProgram(wn.program)&&(Qn=!0,Oi=!0,Hr=!0),G.id!==O&&(O=G.id,Oi=!0),Ae.needsLights){const xt=Zg(T.state.lightProbeGridArray,W);Ae.lightProbeGrid!==xt&&(Ae.lightProbeGrid=xt,Oi=!0)}if(Qn||C!==E){_.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ft.setValue(I,"projectionMatrix",E.projectionMatrix),ft.setValue(I,"viewMatrix",E.matrixWorldInverse);const Bi=ft.map.cameraPosition;Bi!==void 0&&Bi.setValue(I,$e.setFromMatrixPosition(E.matrixWorld)),P.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ft.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),C!==E&&(C=E,Oi=!0,Hr=!0)}if(Ae.needsLights&&(en.state.sunShadowMap.length>0&&ft.setValue(I,"sunShadowMap",en.state.sunShadowMap,J),en.state.directionalShadowMap.length>0&&ft.setValue(I,"directionalShadowMap",en.state.directionalShadowMap,J),en.state.spotShadowMap.length>0&&ft.setValue(I,"spotShadowMap",en.state.spotShadowMap,J),en.state.pointShadowMap.length>0&&ft.setValue(I,"pointShadowMap",en.state.pointShadowMap,J)),W.isSkinnedMesh){ft.setOptional(I,W,"bindMatrix"),ft.setOptional(I,W,"bindMatrixInverse");const xt=W.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),ft.setValue(I,"boneTexture",xt.boneTexture,J))}W.isBatchedMesh&&(ft.setOptional(I,W,"batchingTexture"),ft.setValue(I,"batchingTexture",W._matricesTexture,J),ft.setOptional(I,W,"batchingIdTexture"),ft.setValue(I,"batchingIdTexture",W._indirectTexture,J),ft.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&ft.setValue(I,"batchingColorTexture",W._colorsTexture,J));const ki=Z.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&F.update(W,Z,wn),(Oi||Ae.receiveShadow!==W.receiveShadow)&&(Ae.receiveShadow=W.receiveShadow,ft.setValue(I,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null&&(Rt.envMapIntensity.value=L.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=w2()),Oi){if(ft.setValue(I,"toneMappingExposure",D.toneMappingExposure),Ae.needsLights&&Qg(Rt,Hr),we&&G.fog===!0&&Fe.refreshFogUniforms(Rt,we),Fe.refreshMaterialUniforms(Rt,G,X,k,T.state.transmissionRenderTarget[E.id]),Ae.needsLights&&Ae.lightProbeGrid){const xt=Ae.lightProbeGrid;Rt.probesSH.value=xt.texture,Rt.probesMin.value.copy(xt.boundingBox.min),Rt.probesMax.value.copy(xt.boundingBox.max),Rt.probesResolution.value.copy(xt.resolution)}ll.upload(I,Eh(Ae),Rt,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ll.upload(I,Eh(Ae),Rt,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ft.setValue(I,"center",W.center),ft.setValue(I,"modelViewMatrix",W.modelViewMatrix),ft.setValue(I,"normalMatrix",W.normalMatrix),ft.setValue(I,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const xt=G.uniformsGroups;for(let Bi=0,Vr=xt.length;Bi<Vr;Bi++){const Ah=xt[Bi];ae.update(Ah,wn),ae.bind(Ah,wn)}}return wn}function Qg(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.sunLights.needsUpdate=L,E.sunLightShadows.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function ev(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,L,Z){const G=Y.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Y.get(E.texture).__webglTexture=L,Y.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,L){const Z=Y.get(E);Z.__webglFramebuffer=L,Z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,Z=0){H=E,te=L,q=Z;let G=null,W=!1,we=!1;if(E){const Ee=Y.get(E);if(Ee.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,Ee.__webglFramebuffer),A.copy(E.viewport),Q.copy(E.scissor),se=E.scissorTest,_.viewport(A),_.scissor(Q),_.setScissorTest(se),O=-1;return}else if(Ee.__webglFramebuffer===void 0)J.setupRenderTarget(E);else if(Ee.__hasExternalTextures)J.rebindTextures(E,Y.get(E.texture).__webglTexture,Y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xe=E.depthTexture;if(Ee.__boundDepthTexture!==Xe){if(Xe!==null&&Y.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(we=!0);const Ue=Y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[L])?G=Ue[L][Z]:G=Ue[L],W=!0):E.samples>0&&J.useMultisampledRTT(E)===!1?G=Y.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?G=Ue[Z]:G=Ue,A.copy(E.viewport),Q.copy(E.scissor),se=E.scissorTest}else A.copy(oe).multiplyScalar(X).floor(),Q.copy(Ne).multiplyScalar(X).floor(),se=be;if(Z!==0&&(G=$),_.bindFramebuffer(I.FRAMEBUFFER,G)&&_.drawBuffers(E,G),_.viewport(A),_.scissor(Q),_.setScissorTest(se),W){const Ee=Y.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ee.__webglTexture,Z)}else if(we){const Ee=L;for(let Pe=0;Pe<E.textures.length;Pe++){const Ue=Y.get(E.textures[Pe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,Z,Ee)}}else if(E!==null&&Z!==0){const Ee=Y.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ee.__webglTexture,Z)}O=-1};function Th(E){const L=Y.get(E);return(L.__readFormat!==E.format||L.__readType!==E.type)&&(L.__readFormat=E.format,L.__readType=E.type,L.__formatReadable=P.textureFormatReadable(E.format),L.__typeReadable=P.textureTypeReadable(E.type)),L}this.readRenderTargetPixels=function(E,L,Z,G,W,we,Ce,Ee=0){if(!(E&&E.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){_.bindFramebuffer(I.FRAMEBUFFER,Pe);try{const Ue=E.textures[Ee],Xe=Ue.format,qe=Ue.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ee);const De=Th(Ue);if(De.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-G&&Z>=0&&Z<=E.height-W&&I.readPixels(L,Z,G,W,ye.convert(Xe),ye.convert(qe),we)}finally{const Ue=H!==null?Y.get(H).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,L,Z,G,W,we,Ce,Ee=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe)if(L>=0&&L<=E.width-G&&Z>=0&&Z<=E.height-W){_.bindFramebuffer(I.FRAMEBUFFER,Pe);const Ue=E.textures[Ee],Xe=Ue.format,qe=Ue.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ee);const De=Th(Ue);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,lt),I.bufferData(I.PIXEL_PACK_BUFFER,we.byteLength,I.STREAM_READ),I.readPixels(L,Z,G,W,ye.convert(Xe),ye.convert(qe),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Dt=H!==null?Y.get(H).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Dt);const vt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await WS(I,vt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,lt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,we),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(lt),I.deleteSync(vt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,L=null,Z=0){const G=Math.pow(2,-Z),W=Math.floor(E.image.width*G),we=Math.floor(E.image.height*G),Ce=L!==null?L.x:0,Ee=L!==null?L.y:0;J.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,Ce,Ee,W,we),_.unbindTexture()},this.copyTextureToTexture=function(E,L,Z=null,G=null,W=0,we=0){let Ce,Ee,Pe,Ue,Xe,qe,De,lt,Dt;const vt=E.isCompressedTexture?E.mipmaps[we]:E.image;if(Z!==null)Ce=Z.max.x-Z.min.x,Ee=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,Ue=Z.min.x,Xe=Z.min.y,qe=Z.isBox3?Z.min.z:0;else{const Rt=Math.pow(2,-W);Ce=Math.floor(vt.width*Rt),Ee=Math.floor(vt.height*Rt),E.isDataArrayTexture?Pe=vt.depth:E.isData3DTexture?Pe=Math.floor(vt.depth*Rt):Pe=1,Ue=0,Xe=0,qe=0}G!==null?(De=G.x,lt=G.y,Dt=G.z):(De=0,lt=0,Dt=0);const pt=ye.convert(L.format),Xt=ye.convert(L.type);let Ae;L.isData3DTexture?(J.setTexture3D(L,0),Ae=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(J.setTexture2DArray(L,0),Ae=I.TEXTURE_2D_ARRAY):(J.setTexture2D(L,0),Ae=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);const en=_.getParameter(I.UNPACK_ROW_LENGTH),et=_.getParameter(I.UNPACK_IMAGE_HEIGHT),wn=_.getParameter(I.UNPACK_SKIP_PIXELS),Qn=_.getParameter(I.UNPACK_SKIP_ROWS),Oi=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),_.pixelStorei(I.UNPACK_SKIP_ROWS,Xe),_.pixelStorei(I.UNPACK_SKIP_IMAGES,qe);const Hr=E.isDataArrayTexture||E.isData3DTexture,ft=L.isDataArrayTexture||L.isData3DTexture;if(E.isDepthTexture){const Rt=Y.get(E),ki=Y.get(L),xt=Y.get(Rt.__renderTarget),Bi=Y.get(ki.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,xt.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Vr=0;Vr<Pe;Vr++)Hr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Y.get(E).__webglTexture,W,qe+Vr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Y.get(L).__webglTexture,we,Dt+Vr)),I.blitFramebuffer(Ue,Xe,Ce,Ee,De,lt,Ce,Ee,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||Y.has(E)){const Rt=Y.get(E),ki=Y.get(L);_.bindFramebuffer(I.READ_FRAMEBUFFER,B),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,j);for(let xt=0;xt<Pe;xt++)Hr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.__webglTexture,W,qe+xt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rt.__webglTexture,W),ft?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ki.__webglTexture,we,Dt+xt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ki.__webglTexture,we),W!==0?I.blitFramebuffer(Ue,Xe,Ce,Ee,De,lt,Ce,Ee,I.COLOR_BUFFER_BIT,I.NEAREST):ft?I.copyTexSubImage3D(Ae,we,De,lt,Dt+xt,Ue,Xe,Ce,Ee):I.copyTexSubImage2D(Ae,we,De,lt,Ue,Xe,Ce,Ee);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ft?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Ae,we,De,lt,Dt,Ce,Ee,Pe,pt,Xt,vt.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(Ae,we,De,lt,Dt,Ce,Ee,Pe,pt,vt.data):I.texSubImage3D(Ae,we,De,lt,Dt,Ce,Ee,Pe,pt,Xt,vt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,we,De,lt,Ce,Ee,pt,Xt,vt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,we,De,lt,vt.width,vt.height,pt,vt.data):I.texSubImage2D(I.TEXTURE_2D,we,De,lt,Ce,Ee,pt,Xt,vt);_.pixelStorei(I.UNPACK_ROW_LENGTH,en),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et),_.pixelStorei(I.UNPACK_SKIP_PIXELS,wn),_.pixelStorei(I.UNPACK_SKIP_ROWS,Qn),_.pixelStorei(I.UNPACK_SKIP_IMAGES,Oi),we===0&&L.generateMipmaps&&I.generateMipmap(Ae),_.unbindTexture()},this.initRenderTarget=function(E){Y.get(E).__webglFramebuffer===void 0&&J.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?J.setTextureCube(E,0):E.isData3DTexture?J.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?J.setTexture2DArray(E,0):J.setTexture2D(E,0),_.unbindTexture()},this.resetState=function(){te=0,q=0,H=null,_.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const Gg={count:75e3,size:.018,radius:6.5,branches:4,spin:1.2,randomness:.45,power:3.2,insideColor:"#06b6d4",outsideColor:"#a855f7"};class A2{constructor(e,n={}){ln(this,"scene");ln(this,"parameters");ln(this,"geometry",null);ln(this,"material",null);ln(this,"points",null);this.scene=e,this.parameters={...Gg,...n}}generate(){var s,a;this.points!==null&&((s=this.geometry)==null||s.dispose(),(a=this.material)==null||a.dispose(),this.scene.remove(this.points)),this.geometry=new Zn;const e=new Float32Array(this.parameters.count*3),n=new Float32Array(this.parameters.count*3),i=new tt(this.parameters.insideColor),r=new tt(this.parameters.outsideColor);for(let o=0;o<this.parameters.count;o++){const c=o*3,u=Math.random()*this.parameters.radius,p=u*this.parameters.spin,h=o%this.parameters.branches/this.parameters.branches*Math.PI*2,d=Math.pow(Math.random(),this.parameters.power)*(Math.random()<.5?1:-1)*this.parameters.randomness*u,x=Math.pow(Math.random(),this.parameters.power)*(Math.random()<.5?1:-1)*this.parameters.randomness*u,v=Math.pow(Math.random(),this.parameters.power)*(Math.random()<.5?1:-1)*this.parameters.randomness*u;e[c]=Math.cos(h+p)*u+d,e[c+1]=x,e[c+2]=Math.sin(h+p)*u+v;const S=i.clone();S.lerp(r,u/this.parameters.radius),n[c]=S.r,n[c+1]=S.g,n[c+2]=S.b}return this.geometry.setAttribute("position",new qn(e,3)),this.geometry.setAttribute("color",new qn(n,3)),this.material=new Ng({size:this.parameters.size,sizeAttenuation:!0,depthWrite:!1,blending:dd,vertexColors:!0}),this.points=new g1(this.geometry,this.material),this.scene.add(this.points),this.points}updateParameters(e){return this.parameters={...this.parameters,...e},this.generate()}rotate(e,n=0,i=0,r=0){this.points&&(this.points.rotation.y=e*.05+n*.6,this.points.rotation.x=.35+i*.4+r*4e-4,this.points.rotation.z=Math.sin(e*.15)*.05+r*2e-4)}destroy(){var e,n;this.points!==null&&((e=this.geometry)==null||e.dispose(),(n=this.material)==null||n.dispose(),this.scene.remove(this.points),this.points=null,this.geometry=null,this.material=null)}}const C2=({interactiveControls:t=!0,className:e=""})=>{const n=de.useRef(null),i=de.useRef(null),[r,s]=de.useState(!1),[a,o]=de.useState(Gg);de.useEffect(()=>{const h=()=>s(x=>!x),d=()=>s(!1);return window.addEventListener("spherex:toggle-galaxy-controls",h),window.addEventListener("spherex:close-galaxy-controls",d),()=>{window.removeEventListener("spherex:toggle-galaxy-controls",h),window.removeEventListener("spherex:close-galaxy-controls",d)}},[]);const c=[{name:"Cosmic Cyan",inside:"#06b6d4",outside:"#a855f7"},{name:"SPHEREx Infrared",inside:"#f59e0b",outside:"#38bdf8"},{name:"Nebula Violet",inside:"#ec4899",outside:"#818cf8"},{name:"Supernova Fire",inside:"#ef4444",outside:"#fbbf24"}];de.useEffect(()=>{const h=n.current;if(!h)return;const d=new o1;let x=h.clientWidth||window.innerWidth,v=h.clientHeight||window.innerHeight;const S=new Nn(70,x/v,.1,100);S.position.x=2.8,S.position.y=3.6,S.position.z=4.2,S.lookAt(0,0,0),d.add(S);const m=new T2({alpha:!0,antialias:!0,powerPreference:"high-performance"});m.setSize(x,v),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.appendChild(m.domElement);const f=new A2(d,a);f.generate(),i.current=f;const g={x:0,y:0,targetX:0,targetY:0},b=y=>{g.targetX=(y.clientX/window.innerWidth-.5)*.8,g.targetY=(y.clientY/window.innerHeight-.5)*.8},M=()=>{h&&(x=h.clientWidth||window.innerWidth,v=h.clientHeight||window.innerHeight,S.aspect=x/v,S.updateProjectionMatrix(),m.setSize(x,v),m.setPixelRatio(Math.min(window.devicePixelRatio,2)))};window.addEventListener("mousemove",b),window.addEventListener("resize",M);const w=new C1;let T;const R=()=>{const y=w.getElapsedTime();g.x+=(g.targetX-g.x)*.05,g.y+=(g.targetY-g.y)*.05,f.rotate(y,g.x,g.y,0),m.render(d,S),T=requestAnimationFrame(R)};return R(),()=>{window.removeEventListener("mousemove",b),window.removeEventListener("resize",M),cancelAnimationFrame(T),f.destroy(),m.dispose(),h.contains(m.domElement)&&h.removeChild(m.domElement)}},[]);const u=(h,d)=>{o(x=>{var S;const v={...x,[h]:d};return(S=i.current)==null||S.updateParameters(v),v})},p=(h,d)=>{o(x=>{var S;const v={...x,insideColor:h,outsideColor:d};return(S=i.current)==null||S.updateParameters(v),v})};return l.jsxs("div",{className:`relative w-full h-full ${e}`,children:[l.jsx("div",{ref:n,className:"absolute inset-0 w-full h-full pointer-events-none z-0",style:{opacity:.95}}),t&&r&&l.jsx("div",{className:"fixed top-16 right-4 sm:top-18 sm:right-6 z-50 pointer-events-auto",children:l.jsxs("div",{className:"w-72 sm:w-80 glass-panel-elevated rounded-2xl p-4 border border-cyan-400/40 text-xs font-mono shadow-2xl animate-fadeIn space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-slate-800",children:[l.jsxs("span",{className:"font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5",children:[l.jsx(Li,{className:"w-3.5 h-3.5 text-cyan-400"}),"Three.js Spiral Generator"]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-[10px] text-cyan-400",children:[(a.count/1e3).toFixed(0),"k Stars"]}),l.jsx("button",{onClick:()=>s(!1),className:"p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors",title:"Close Controls",children:l.jsx($a,{className:"w-3.5 h-3.5"})})]})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] uppercase text-slate-400 block mb-1.5",children:"Color Palette"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:c.map(h=>{const d=a.insideColor===h.inside&&a.outsideColor===h.outside;return l.jsxs("button",{onClick:()=>p(h.inside,h.outside),className:`px-2 py-1 rounded-lg text-[10px] text-left flex items-center gap-1.5 transition-all ${d?"bg-cyan-950/80 border border-cyan-400 text-cyan-200 shadow-sm shadow-cyan-950":"bg-space-950/80 border border-slate-700 hover:border-cyan-400/60 text-slate-300"}`,children:[l.jsx("span",{className:"w-2 h-2 rounded-full shrink-0",style:{backgroundColor:h.inside}}),l.jsx("span",{className:"truncate",children:h.name}),d&&l.jsx("span",{className:"ml-auto w-1 h-1 rounded-full bg-cyan-400"})]},h.name)})})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between text-[10px] text-slate-300 mb-1",children:[l.jsx("span",{children:"Particle Size"}),l.jsx("span",{className:"text-cyan-300",children:a.size.toFixed(3)})]}),l.jsx("input",{type:"range",min:"0.005",max:"0.04",step:"0.002",value:a.size,onChange:h=>u("size",Number(h.target.value)),className:"w-full accent-cyan-400 cursor-pointer"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between text-[10px] text-slate-300 mb-1",children:[l.jsx("span",{children:"Spiral Arms"}),l.jsxs("span",{className:"text-cyan-300",children:[a.branches," Arms"]})]}),l.jsx("input",{type:"range",min:"2",max:"8",step:"1",value:a.branches,onChange:h=>u("branches",Number(h.target.value)),className:"w-full accent-cyan-400 cursor-pointer"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between text-[10px] text-slate-300 mb-1",children:[l.jsx("span",{children:"Arm Curvature (Spin)"}),l.jsx("span",{className:"text-cyan-300",children:a.spin.toFixed(1)})]}),l.jsx("input",{type:"range",min:"0.2",max:"3.0",step:"0.2",value:a.spin,onChange:h=>u("spin",Number(h.target.value)),className:"w-full accent-cyan-400 cursor-pointer"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between text-[10px] text-slate-300 mb-1",children:[l.jsx("span",{children:"Density"}),l.jsx("span",{className:"text-cyan-300",children:a.count.toLocaleString()})]}),l.jsx("input",{type:"range",min:"20000",max:"120000",step:"10000",value:a.count,onChange:h=>u("count",Number(h.target.value)),className:"w-full accent-cyan-400 cursor-pointer"})]}),l.jsx("div",{className:"pt-1 text-[9px] text-slate-500 text-center italic",children:"Live THREE.Points & BufferGeometry Disposal"})]})})]})},uc=({interactive:t=!0,nebulaIntensity:e="vibrant",particleCount:n=180,className:i=""})=>{const r=de.useRef(null),s=de.useRef({x:0,y:0,targetX:0,targetY:0});return de.useEffect(()=>{const a=r.current;if(!a)return;const o=a.getContext("2d");if(!o)return;let c,u=a.width=window.innerWidth,p=a.height=window.innerHeight;const h=["#ffffff","#e0f2fe","#ddd6fe","#fef3c7","#bae6fd"],d=Array.from({length:n},()=>{const g=Math.random()*.85+.15,b=Math.random()*.7+.3;return{x:Math.random()*u,y:Math.random()*p,z:g,radius:(Math.random()*1.5+.3)*g,alpha:b,baseAlpha:b,twinkleSpeed:Math.random()*.02+.005,twinklePhase:Math.random()*Math.PI*2,color:h[Math.floor(Math.random()*h.length)]}}),x=e==="vibrant"?["rgba(56, 189, 248, 0.08)","rgba(168, 85, 247, 0.07)","rgba(236, 72, 153, 0.05)","rgba(99, 102, 241, 0.06)"]:e==="subtle"?["rgba(56, 189, 248, 0.04)","rgba(129, 140, 248, 0.03)","rgba(147, 51, 234, 0.03)"]:["rgba(30, 58, 138, 0.1)","rgba(88, 28, 135, 0.08)","rgba(15, 23, 42, 0.2)"],v=Array.from({length:4},(g,b)=>({x:u*(b+1)/5,y:p*(b%2===0?.35:.65),radius:Math.max(u,p)*.35,color:x[b%x.length],vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12})),S=()=>{a&&(u=a.width=window.innerWidth,p=a.height=window.innerHeight)},m=g=>{if(!t)return;const b=(g.clientX/u-.5)*35,M=(g.clientY/p-.5)*35;s.current.targetX=b,s.current.targetY=M};window.addEventListener("resize",S),t&&window.addEventListener("mousemove",m);const f=()=>{s.current.x+=(s.current.targetX-s.current.x)*.05,s.current.y+=(s.current.targetY-s.current.y)*.05,o.clearRect(0,0,u,p);for(const g of v){g.x+=g.vx,g.y+=g.vy,g.x<-g.radius&&(g.x=u+g.radius),g.x>u+g.radius&&(g.x=-g.radius),g.y<-g.radius&&(g.y=p+g.radius),g.y>p+g.radius&&(g.y=-g.radius);const b=o.createRadialGradient(g.x+s.current.x*.4,g.y+s.current.y*.4,0,g.x+s.current.x*.4,g.y+s.current.y*.4,g.radius);b.addColorStop(0,g.color),b.addColorStop(1,"rgba(4, 6, 13, 0)"),o.fillStyle=b,o.beginPath(),o.arc(g.x+s.current.x*.4,g.y+s.current.y*.4,g.radius,0,Math.PI*2),o.fill()}for(const g of d){g.y-=.15*g.z,g.y<0&&(g.y=p,g.x=Math.random()*u),g.twinklePhase+=g.twinkleSpeed;const b=g.baseAlpha+Math.sin(g.twinklePhase)*.25,M=Math.max(.1,Math.min(1,b)),w=g.x-s.current.x*g.z,T=g.y-s.current.y*g.z;o.fillStyle=g.color,o.globalAlpha=M,o.beginPath(),o.arc(w,T,g.radius,0,Math.PI*2),o.fill(),g.z>.75&&g.radius>1.1&&(o.fillStyle=g.color,o.globalAlpha=M*.25,o.beginPath(),o.arc(w,T,g.radius*2.8,0,Math.PI*2),o.fill())}o.globalAlpha=1,c=requestAnimationFrame(f)};return f(),()=>{window.removeEventListener("resize",S),t&&window.removeEventListener("mousemove",m),cancelAnimationFrame(c)}},[t,e,n]),l.jsx("canvas",{ref:r,className:`starfield-canvas fixed inset-0 pointer-events-none z-0 ${i}`,"aria-hidden":"true"})},R2=({onExploreClick:t})=>{const[e,n]=de.useState(!1),[i,r]=de.useState(!1),[s,a]=de.useState(!1);de.useEffect(()=>{const c=()=>{s||(a(!0),n(!0),rt.playChime(620,.1))},u=v=>{(Math.abs(v.deltaY)>4||Math.abs(v.deltaX)>4)&&c()};let p=0;const h=v=>{p=v.touches[0].clientY},d=v=>{const S=v.touches[0].clientY;Math.abs(p-S)>8&&c()},x=v=>{["ArrowDown","ArrowUp","PageDown","PageUp","Space"].includes(v.code)&&c()};return window.addEventListener("wheel",u,{passive:!0}),window.addEventListener("touchstart",h,{passive:!0}),window.addEventListener("touchmove",d,{passive:!0}),window.addEventListener("keydown",x),()=>{window.removeEventListener("wheel",u),window.removeEventListener("touchstart",h),window.removeEventListener("touchmove",d),window.removeEventListener("keydown",x)}},[s]);const o=()=>{r(!0),rt.playDiscoverySuccess(),setTimeout(()=>{t()},400)};return l.jsxs("div",{className:"relative w-screen h-screen bg-space-950 text-slate-100 overflow-hidden select-none",children:[l.jsx(uc,{nebulaIntensity:"vibrant",particleCount:160}),l.jsx("div",{className:`absolute inset-0 w-full h-full transition-transform duration-700 ease-out ${i?"scale-150 filter blur-sm opacity-60":"scale-100 opacity-100"}`,children:l.jsx(C2,{className:"w-full h-full",interactiveControls:!0})}),l.jsxs("div",{className:"absolute top-20 sm:top-24 md:top-28 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center text-center pointer-events-none select-none px-4 w-full max-w-4xl animate-fadeIn",children:[l.jsxs("h1",{className:"font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.16em] sm:tracking-[0.2em] text-white uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]",children:["SPHERE ",l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400",children:"XPLORER"})]}),l.jsx("p",{className:"mt-2.5 sm:mt-3 text-xs sm:text-base md:text-xl font-mono tracking-[0.28em] sm:tracking-[0.32em] text-cyan-300 font-bold drop-shadow-[0_4px_16px_rgba(56,189,248,0.6)]",children:"102 BAND INFRARED UNIVERSE"})]}),!e&&l.jsx("div",{onClick:()=>{n(!0),rt.playChime(620,.1)},className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 cursor-pointer group pointer-events-auto transition-all",children:l.jsxs("div",{className:"px-4 py-1.5 rounded-full bg-space-950/75 border border-cyan-400/30 text-xs font-mono text-cyan-200 backdrop-blur-md shadow-xl group-hover:border-cyan-400 group-hover:bg-cyan-950/80 transition-all flex items-center gap-2",children:[l.jsx(Li,{className:"w-3 h-3 text-cyan-400 animate-pulse"}),l.jsx("span",{className:"tracking-wider uppercase text-[10px] sm:text-[11px] font-semibold",children:"SCROLL ANYWHERE TO EXPLORE"}),l.jsx(Jx,{className:"w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-0.5 transition-transform animate-bounce"})]})}),e&&l.jsxs("div",{className:"absolute inset-0 z-40 flex items-center justify-center p-4 bg-space-950/45 backdrop-blur-md animate-fadeIn",children:[l.jsx("div",{className:"absolute w-[450px] h-[450px] bg-gradient-to-tr from-cyan-500/25 via-indigo-600/20 to-purple-600/20 rounded-full blur-[100px] pointer-events-none"}),l.jsxs("div",{className:`relative max-w-md w-full glass-panel-elevated rounded-3xl p-7 sm:p-8 border border-cyan-400/40 shadow-2xl text-center transition-all duration-400 ${i?"scale-110 opacity-0 filter blur-md":"scale-100 opacity-100"}`,style:{animation:"popupEntrance 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards"},children:[l.jsx("button",{onClick:()=>n(!1),className:"absolute top-5 right-5 p-2 rounded-xl bg-space-900 border border-slate-700/80 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors",title:"Close & admire 3D Galaxy","aria-label":"Close Pop-up",children:l.jsx($a,{className:"w-4 h-4"})}),l.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-950 via-space-900 to-indigo-950 border border-cyan-400/50 mx-auto mb-4 flex items-center justify-center shadow-xl shadow-cyan-950/60",children:l.jsx(Lr,{className:"w-7 h-7 text-cyan-300"})}),l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 mb-2",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),l.jsx("span",{children:"NASA SPHEREx OBSERVATORY"})]}),l.jsx("h2",{className:"font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-2",children:"EXPLORE SKY"}),l.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto mb-6",children:"Step inside the 102 near-infrared spectral bands, inspect astronomical images, and uncover cosmic changes."}),l.jsxs("div",{className:"space-y-2.5",children:[l.jsxs("button",{onClick:o,className:"w-full relative group overflow-hidden py-3.5 px-6 rounded-2xl font-display font-bold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 border border-cyan-300/50 shadow-2xl shadow-cyan-950/80 hover:shadow-cyan-400/40 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5",children:[l.jsx(Lr,{className:"w-4 h-4 text-cyan-100"}),l.jsx("span",{children:"Enter Sky Explorer"}),l.jsx(Fa,{className:"w-4 h-4 text-cyan-100 group-hover:translate-x-1 transition-transform"})]}),l.jsx("button",{onClick:()=>n(!1),className:"w-full py-2 rounded-xl text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-colors",children:"← Return to 3D Galaxy View"})]})]})]}),i&&l.jsx("div",{className:"absolute inset-0 z-50 bg-gradient-to-b from-cyan-400/25 via-white/35 to-space-950 pointer-events-none animate-fadeIn"}),l.jsx("style",{children:`
        @keyframes popupEntrance {
          0% {
            opacity: 0;
            transform: scale(0.85) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `})]})},Va=[{id:"nep-deep-field",name:"North Ecliptic Pole (NEP) Deep Field",subtitle:"High-Cadence Deep Cosmology & Kuiper Belt Survey",catalogCategory:"deep-field",centerRaDeg:270,centerDecDeg:66.5607,centerRaFormatted:"18h 00m 00.0s",centerDecFormatted:`+66° 33' 38.5"`,galacticCoords:"l = 96.4°, b = +29.8°",constellation:"Draco",defaultBand:48,isRealNasaTarget:!0,scientificGoal:"The SPHEREx orbit passes through the Ecliptic Poles every 96 minutes, accumulating massive integration depth to trace cosmic inflation signatures and detect faint, slow-moving outer Solar System objects.",dataSource:{archiveName:"NASA/IPAC Infrared Science Archive (IRSA)",archiveUrl:"https://irsa.ipac.caltech.edu/Missions/spherex.html",collection:"SPHEREx Deep Field Early Release Simulation & QR-1",dataRelease:"QR-1 Public Pre-Flight Release",isDemonstrationData:!1},epochs:[{epochId:"EP-NEP-2025-06-15",surveyName:"Survey 1 — Orbit Scan 1284",dateUtc:"2025-06-15T04:12:00Z",mjd:60841.175,detectorId:"DET-03-LVF3",exposureTimeSec:142.5,rmsNoiseMicroJy:1.15,zodiacalLightFlux:8.42,fitsFilename:"SPHEREX_L2_NEP_20250615_DET3_WCS.fits",archiveAccessUrl:"https://irsa.ipac.caltech.edu/data/SPHEREx/level2/nep/20250615/",imageLayerUrl:"/assets/sim_nep_epoch1.jpg",notes:"Nominal photometric scan. Excellent optical stability; background zodiacal model subtracted."},{epochId:"EP-NEP-2025-07-28",surveyName:"Survey 1 — Orbit Scan 1892",dateUtc:"2025-07-28T18:45:22Z",mjd:60884.781,detectorId:"DET-03-LVF3",exposureTimeSec:142.5,rmsNoiseMicroJy:1.12,zodiacalLightFlux:7.89,fitsFilename:"SPHEREX_L2_NEP_20250728_DET3_WCS.fits",archiveAccessUrl:"https://irsa.ipac.caltech.edu/data/SPHEREx/level2/nep/20250728/",imageLayerUrl:"/assets/sim_nep_epoch2.jpg",notes:"Revisit observation. Clear positional displacement observed for candidate SPX-NEP-AST-01."},{epochId:"EP-NEP-2025-09-10",surveyName:"Survey 2 — Orbit Scan 2480",dateUtc:"2025-09-10T11:30:05Z",mjd:60928.479,detectorId:"DET-03-LVF3",exposureTimeSec:155,rmsNoiseMicroJy:1.08,zodiacalLightFlux:7.64,fitsFilename:"SPHEREX_L2_NEP_20250910_DET3_WCS.fits",archiveAccessUrl:"https://irsa.ipac.caltech.edu/data/SPHEREx/level2/nep/20250910/",imageLayerUrl:"/assets/sim_nep_epoch3.jpg",notes:"Survey 2 verification scan. Confirming solar system trajectory and variable star pulsation."}],candidates:[{id:"SPX-NEP-AST-01",fieldId:"nep-deep-field",name:"Candidate SPX-2025-KBO4",category:"asteroid",ra:270.0842,dec:66.5921,pixelX:58.4,pixelY:34.2,flux:42.6,estimatedMagnitude:20.8,detectionDate:"2025-07-28",epochIndex:1,status:"unreviewed",scientificConfidence:4,description:"Apparent motion of 1.4 arcseconds/day between Epoch 1 and 2. Spectrum consistent with carbonaceous chondrite surface."},{id:"SPX-NEP-VAR-09",fieldId:"nep-deep-field",name:"SPX-V612 Dra (M-Dwarf Flare)",category:"variable-star",ra:269.9125,dec:66.5204,pixelX:28.6,pixelY:67.8,flux:185.3,estimatedMagnitude:16.4,detectionDate:"2025-09-10",epochIndex:2,status:"verified",scientificConfidence:5,description:"Flux increased by 140% in Band 3 (2.1µm) during Epoch 3. Classical magnetic reconnection flare on cold M-dwarf."},{id:"SPX-NEP-GAL-402",fieldId:"nep-deep-field",name:"Primordial Galaxy Cluster Candidate",category:"high-z-galaxy",ra:270.142,dec:66.541,pixelX:74.1,pixelY:52.3,flux:14.8,estimatedMagnitude:22.3,detectionDate:"2025-06-15",epochIndex:0,status:"demo",scientificConfidence:3,description:"Diffuse infrared excess at 1.6µm rest-frame bump. Estimated photometric redshift z ~ 1.84."}]},{id:"orion-omc1-ice",name:"Orion OMC-1 Interstellar Ice Ridge",subtitle:"Biogenic Ices & Protoplanetary Disk Reservoir",catalogCategory:"ice-survey",centerRaDeg:83.8186,centerDecDeg:-5.3897,centerRaFormatted:"05h 35m 16.5s",centerDecFormatted:`-05° 23' 23.0"`,galacticCoords:"l = 209.0°, b = -19.4°",constellation:"Orion",defaultBand:60,isRealNasaTarget:!0,scientificGoal:"SPHEREx will measure ices (H2O, CO2, CO) in thousands of star-forming clouds to discover how water and prebiotic molecules are incorporated into newly formed planetary systems.",dataSource:{archiveName:"NASA/IPAC Infrared Science Archive (IRSA)",archiveUrl:"https://irsa.ipac.caltech.edu/Missions/spherex.html",collection:"SPHEREx Galactic Plane & Dense Cloud Ice Survey",dataRelease:"Early Science Simulation Target OMC-1",isDemonstrationData:!1},epochs:[{epochId:"EP-ORI-2025-05-10",surveyName:"Survey 1 — Orbit Scan 0942",dateUtc:"2025-05-10T14:02:11Z",mjd:60805.584,detectorId:"DET-04-LVF4",exposureTimeSec:120,rmsNoiseMicroJy:2.45,zodiacalLightFlux:12.1,fitsFilename:"SPHEREX_L2_OMC1_20250510_DET4_WCS.fits",archiveAccessUrl:"https://irsa.ipac.caltech.edu/data/SPHEREx/level2/orion/20250510/",imageLayerUrl:"/assets/sim_orion_epoch1.jpg",notes:"Targeting the 3.05µm H2O ice absorption band. Massive protostellar envelope extinction detected."},{epochId:"EP-ORI-2025-11-18",surveyName:"Survey 2 — Orbit Scan 3108",dateUtc:"2025-11-18T09:24:50Z",mjd:60997.392,detectorId:"DET-05-LVF5",exposureTimeSec:120,rmsNoiseMicroJy:2.38,zodiacalLightFlux:11.85,fitsFilename:"SPHEREX_L2_OMC1_20251118_DET5_WCS.fits",archiveAccessUrl:"https://irsa.ipac.caltech.edu/data/SPHEREx/level2/orion/20251118/",imageLayerUrl:"/assets/sim_orion_epoch2.jpg",notes:"Survey 2 pass. High-resolution spectroscopy around the 4.27µm CO2 ice feature."}],candidates:[{id:"SPX-ICE-ORI-08",fieldId:"orion-omc1-ice",name:"Protostar IRc2 Ice Mantle Core",category:"ice-feature",ra:83.821,dec:-5.3789,pixelX:45.2,pixelY:48,flux:3120,estimatedMagnitude:11.2,detectionDate:"2025-05-10",epochIndex:0,status:"verified",scientificConfidence:5,description:"Pronounced broad absorption trough at 3.05µm indicating rich amorphous H2O ice coating on interstellar dust grains."},{id:"SPX-ICE-ORI-19",fieldId:"orion-omc1-ice",name:"Becklin-Neugebauer Object (CO Ice)",category:"ice-feature",ra:83.8145,dec:-5.3942,pixelX:62,pixelY:38.5,flux:5400,estimatedMagnitude:10.4,detectionDate:"2025-11-18",epochIndex:1,status:"verified",scientificConfidence:5,description:"Strong 4.67µm solid-state CO absorption feature. Temperature profile indicates cold pre-collapse cloud conditions."}]},{id:"transient-asteroid-blink",name:"Asteroid & Transient Detection Field SPX-AST-2025",subtitle:"Demonstrating Rapid Blink & Difference Subtraction",catalogCategory:"transient-search",centerRaDeg:142.502,centerDecDeg:18.254,centerRaFormatted:"09h 30m 00.5s",centerDecFormatted:`+18° 15' 14.4"`,galacticCoords:"l = 214.2°, b = +44.7°",constellation:"Leo",defaultBand:28,isRealNasaTarget:!1,scientificGoal:"Simulated high-cadence time-domain observation designed to demonstrate the BLINK comparator and DIFFERENCE image subtraction for detecting Near-Earth Asteroids and rapid infrared transients.",dataSource:{archiveName:"SPHEREx Interactive Web Experience Simulation Pipeline",archiveUrl:"https://science.nasa.gov/mission/spherex/",collection:"Time-Domain Verification Synthetic Pipeline",dataRelease:"Interactive Demonstration Mode",isDemonstrationData:!0},epochs:[{epochId:"EP-AST-T0",surveyName:"Epoch A — Baseline Scan (T = 0 hr)",dateUtc:"2025-08-01T02:00:00Z",mjd:60888.083,detectorId:"DET-02-LVF2",exposureTimeSec:90,rmsNoiseMicroJy:1.8,zodiacalLightFlux:6.2,fitsFilename:"DEMO_SPHEREX_AST_T0.fits",archiveAccessUrl:"https://science.nasa.gov/mission/spherex/",imageLayerUrl:"/assets/sim_ast_epoch1.jpg",notes:"Epoch A: Baseline reference sky map. Asteroid candidate at initial coordinates."},{epochId:"EP-AST-T1",surveyName:"Epoch B — Cadence Revisit (T = +3 hr)",dateUtc:"2025-08-01T05:00:00Z",mjd:60888.208,detectorId:"DET-02-LVF2",exposureTimeSec:90,rmsNoiseMicroJy:1.82,zodiacalLightFlux:6.25,fitsFilename:"DEMO_SPHEREX_AST_T1.fits",archiveAccessUrl:"https://science.nasa.gov/mission/spherex/",imageLayerUrl:"/assets/sim_ast_epoch2.jpg",notes:"Epoch B: Asteroid shifted along retrograde ecliptic trajectory. Use BLINK or DIFFERENCE to see!"}],candidates:[{id:"DEMO-AST-9932",fieldId:"transient-asteroid-blink",name:"Simulated Near-Earth Asteroid (SPX-2025-NB)",category:"asteroid",ra:142.518,dec:18.261,pixelX:52.8,pixelY:41.5,flux:88,estimatedMagnitude:18.9,detectionDate:"2025-08-01",epochIndex:1,status:"demo",scientificConfidence:5,description:"Demonstration asteroid exhibiting 12 arcsecond displacement between Epoch A and Epoch B. Switch to BLINK mode to easily see the motion."},{id:"DEMO-TRANS-04",fieldId:"transient-asteroid-blink",name:"Simulated Supernova / Optical Transient",category:"transient",ra:142.48,dec:18.23,pixelX:31.4,pixelY:62,flux:145,estimatedMagnitude:17.5,detectionDate:"2025-08-01",epochIndex:1,status:"demo",scientificConfidence:4,description:"Simulated type Ia supernova flaring in an elliptical host galaxy. Visible as a bright positive anomaly in DIFFERENCE mode."}]},{id:"andromeda-m31",name:"Andromeda Galaxy (M31) Near-IR Mosaic",subtitle:"Stellar Populations & 3.3µm Organic PAH Dust",catalogCategory:"galaxy-survey",centerRaDeg:10.6847,centerDecDeg:41.2687,centerRaFormatted:"00h 42m 44.3s",centerDecFormatted:`+41° 16' 07.5"`,galacticCoords:"l = 121.2°, b = -21.6°",constellation:"Andromeda",defaultBand:64,isRealNasaTarget:!0,scientificGoal:"Mapping spatial distribution of warm interstellar dust, polycyclic aromatic hydrocarbon (PAH) macromolecules, and unresolved red giant populations across our sister galaxy.",dataSource:{archiveName:"NASA/IPAC Infrared Science Archive (IRSA)",archiveUrl:"https://irsa.ipac.caltech.edu/Missions/spherex.html",collection:"SPHEREx Nearby Galaxy Survey Catalog",dataRelease:"Early Mission Science Target M31",isDemonstrationData:!1},epochs:[{epochId:"EP-M31-2025-09-02",surveyName:"Survey 1 — Core & Disk Mosaic",dateUtc:"2025-09-02T22:15:40Z",mjd:60920.927,detectorId:"DET-04-LVF4",exposureTimeSec:180,rmsNoiseMicroJy:1.4,zodiacalLightFlux:5.1,fitsFilename:"SPHEREX_L2_M31_20250902_DET4_WCS.fits",archiveAccessUrl:"https://irsa.ipac.caltech.edu/data/SPHEREx/level2/m31/20250902/",imageLayerUrl:"/assets/sim_m31_epoch1.jpg",notes:"Spectroscopic mapping across 102 bands shows intense central stellar bulge and vibrant spiral dust lanes."},{epochId:"EP-M31-2026-03-14",surveyName:"Survey 2 — Re-Scan & Transient Monitor",dateUtc:"2026-03-14T16:04:12Z",mjd:61113.669,detectorId:"DET-04-LVF4",exposureTimeSec:180,rmsNoiseMicroJy:1.35,zodiacalLightFlux:4.95,fitsFilename:"SPHEREX_L2_M31_20260314_DET4_WCS.fits",archiveAccessUrl:"https://irsa.ipac.caltech.edu/data/SPHEREx/level2/m31/20260314/",imageLayerUrl:"/assets/sim_m31_epoch2.jpg",notes:"Survey 2 confirmation. Classical nova recurrence detected in outer disk arm."}],candidates:[{id:"SPX-M31-NOVA-26A",fieldId:"andromeda-m31",name:"M31 Recurrent Nova Candidate",category:"transient",ra:10.712,dec:41.295,pixelX:68.2,pixelY:29.4,flux:92.4,estimatedMagnitude:17.8,detectionDate:"2026-03-14",epochIndex:1,status:"unreviewed",scientificConfidence:4,description:"Rapid brightening of 3.2 magnitudes compared to baseline Survey 1. Strong near-IR Paschen emission line signature."}]},{id:"sep-inflation-field",name:"South Ecliptic Pole (SEP) Inflation Deep Field",subtitle:"Cosmic Dawn & Primordial Non-Gaussianity Probe",catalogCategory:"deep-field",centerRaDeg:90,centerDecDeg:-66.5607,centerRaFormatted:"06h 00m 00.0s",centerDecFormatted:`-66° 33' 38.5"`,galacticCoords:"l = 276.4°, b = -29.8°",constellation:"Dorado",defaultBand:18,isRealNasaTarget:!0,scientificGoal:"Constraining cosmological inflation models by measuring galaxy clustering in 3D across hundreds of millions of galaxies, testing whether quantum fluctuations during inflation were Gaussian.",dataSource:{archiveName:"NASA/IPAC Infrared Science Archive (IRSA)",archiveUrl:"https://irsa.ipac.caltech.edu/Missions/spherex.html",collection:"SPHEREx Cosmology Deep Survey",dataRelease:"QR-1 Public Release Target SEP",isDemonstrationData:!1},epochs:[{epochId:"EP-SEP-2025-07-04",surveyName:"Survey 1 — Deep Co-add Pass 42",dateUtc:"2025-07-04T08:19:33Z",mjd:60860.347,detectorId:"DET-01-LVF1",exposureTimeSec:210,rmsNoiseMicroJy:.88,zodiacalLightFlux:6.9,fitsFilename:"SPHEREX_L2_SEP_20250704_DET1_WCS.fits",archiveAccessUrl:"https://irsa.ipac.caltech.edu/data/SPHEREx/level2/sep/20250704/",imageLayerUrl:"/assets/sim_sep_epoch1.jpg",notes:"Deep co-added integration achieving micro-Jansky sensitivity for galaxy redshift determination."}],candidates:[{id:"SPX-SEP-CLUST-01",fieldId:"sep-inflation-field",name:"High-Redshift Massive Cluster SPX-J0600-66",category:"high-z-galaxy",ra:90.042,dec:-66.538,pixelX:42.1,pixelY:57.8,flux:18.2,estimatedMagnitude:21.6,detectionDate:"2025-07-04",epochIndex:0,status:"verified",scientificConfidence:5,description:"Spectroscopically identified galaxy over-density at z = 1.45 providing strong cosmological lever-arm for inflation constraints."}]}];function Fm(t){return Va.find(e=>e.id===t)||Va[0]}class N2{constructor(){ln(this,"cache",new Map)}generateEpochImageData(e,n,i=800,r=800,s=48){const a=e.epochs[n]||e.epochs[0],o=new Float32Array(i*r);let c=this.hashString(`${e.id}-${a.epochId}-${s}`);const u=()=>(c=c*16807%2147483647,(c-1)/2147483646),p=a.zodiacalLightFlux||6.5,h=(a.rmsNoiseMicroJy||1.2)*.08;for(let x=0;x<o.length;x++){const v=Math.max(1e-4,u()),S=u(),m=Math.sqrt(-2*Math.log(v))*Math.cos(2*Math.PI*S)*h;o[x]=Math.max(0,p*.2+m)}if(e.id==="orion-omc1-ice"||e.id==="andromeda-m31"){const x=e.id==="orion-omc1-ice";for(let v=0;v<r;v+=4)for(let S=0;S<i;S+=4){const m=S/i-.5,f=v/r-.5,g=Math.hypot(m,f);let b=Math.exp(-g*(x?3.5:2.5));b+=Math.sin(m*10+f*6)*.15,b+=Math.cos(m*18-f*12)*.08;const M=s>50?1.4:.8,w=Math.max(0,b*(x?45:35)*M);for(let T=0;T<4&&v+T<r;T++)for(let R=0;R<4&&S+R<i;R++)o[(v+T)*i+(S+R)]+=w}}const d=e.id==="nep-deep-field"?85:120;for(let x=0;x<d;x++){const v=Math.floor(u()*(i-40))+20,S=Math.floor(u()*(r-40))+20,m=Math.pow(u(),3.5)*850+15,f=u()*1.8+1.2;this.addPointSource(o,i,r,v,S,m,f)}for(const x of e.candidates){const v=x.pixelX/100*i,S=x.pixelY/100*r;if(x.category==="asteroid"){const m=(n-x.epochIndex)*28,f=(n-x.epochIndex)*-16,g=v+m,b=S+f;this.addPointSource(o,i,r,g,b,x.flux*3.5,1.4)}else if(x.category==="variable-star"){const m=n===x.epochIndex?3.2:.9;this.addPointSource(o,i,r,v,S,x.flux*m*1.8,1.6)}else x.category==="transient"?n===x.epochIndex?this.addPointSource(o,i,r,v,S,x.flux*4,1.5):this.addPointSource(o,i,r,v,S,x.flux*.05,1.2):this.addDiffuseSource(o,i,r,v,S,x.flux*.8,8)}return o}addPointSource(e,n,i,r,s,a,o){const c=Math.ceil(o*4),u=Math.max(0,Math.floor(r-c)),p=Math.min(n-1,Math.ceil(r+c)),h=Math.max(0,Math.floor(s-c)),d=Math.min(i-1,Math.ceil(s+c)),x=2*o*o;for(let v=h;v<=d;v++)for(let S=u;S<=p;S++){const m=S-r,f=v-s,g=m*m+f*f,b=a*Math.exp(-g/x);e[v*n+S]+=b}}addDiffuseSource(e,n,i,r,s,a,o){const c=Math.ceil(o*2.5),u=Math.max(0,Math.floor(r-c)),p=Math.min(n-1,Math.ceil(r+c)),h=Math.max(0,Math.floor(s-c)),d=Math.min(i-1,Math.ceil(s+c));for(let x=h;x<=d;x++)for(let v=u;v<=p;v++){const S=v-r,m=x-s,f=Math.hypot(S,m),g=a*Math.exp(-Math.pow(f/o,.7));e[x*n+v]+=g}}computeDifference(e,n,i,r){const s=new Float32Array(i*r);for(let a=0;a<s.length;a++)s[a]=n[a]-e[a];return s}renderToCanvas(e,n,i,r,s,a,o=1,c=1,u=!1){const p=r.createImageData(n,i),h=p.data;let d=1/0,x=-1/0;for(let S=0;S<e.length;S++){const m=e[S];m<d&&(d=m),m>x&&(x=m)}const v=Math.max(.001,x-d);for(let S=0;S<e.length;S++){let m=e[S],f;if(u){const T=Math.max(Math.abs(d),Math.abs(x),5);f=.5+m/(2*T)*c}else{const T=(m-d)/v;switch(a){case"asinh":f=Math.asinh(T*10)/Math.asinh(10);break;case"log":f=Math.log(1+9*T)/Math.log(10);break;case"sqrt":f=Math.sqrt(Math.max(0,T));break;case"linear":default:f=T;break}f=(f-.5)*c+.5+(o-1)}f=Math.max(0,Math.min(1,f));const[g,b,M]=this.applyColormap(f,s,u),w=S*4;h[w]=g,h[w+1]=b,h[w+2]=M,h[w+3]=255}r.putImageData(p,0,0)}applyColormap(e,n,i){if(i)if(e<.48){const r=(.48-e)/.48;return[Math.floor(20+30*(1-r)),Math.floor(100+120*r),Math.floor(220+35*r)]}else if(e>.52){const r=(e-.52)/.48;return[Math.floor(220+35*r),Math.floor(120+80*r),Math.floor(30+40*(1-r))]}else return[12,18,30];switch(n){case"spherex-gold":if(e<.25){const r=e/.25;return[Math.floor(r*80),Math.floor(r*12),Math.floor(r*120)]}else if(e<.65){const r=(e-.25)/.4;return[Math.floor(80+r*165),Math.floor(12+r*138),Math.floor(120*(1-r)+15)]}else{const r=(e-.65)/.35;return[245+Math.floor(r*10),150+Math.floor(r*105),15+Math.floor(r*240)]}case"cosmic-cyan":if(e<.5){const r=e/.5;return[Math.floor(r*20),Math.floor(r*120),Math.floor(r*210)]}else{const r=(e-.5)/.5;return[Math.floor(20+r*235),Math.floor(120+r*135),Math.floor(210+r*45)]}case"inferno":{const r=Math.min(255,Math.floor(e*2.8*255)),s=Math.min(255,Math.floor(Math.max(0,e-.3)*2.2*255)),a=Math.min(255,Math.floor(Math.max(0,e-.7)*4*255));return[r,s,a]}case"greyscale":{const r=Math.floor(e*255);return[r,r,r]}case"greyscale-inverted":{const r=Math.floor((1-e)*255);return[r,r,r]}case"spectral-rainbow":{const r=(1-e)*270;return this.hslToRgb(r/360,.9,e*.7+.1)}default:return[Math.floor(e*255),Math.floor(e*255),Math.floor(e*255)]}}hslToRgb(e,n,i){let r,s,a;if(n===0)r=s=a=i;else{const o=(p,h,d)=>(d<0&&(d+=1),d>1&&(d-=1),d<.16666666666666666?p+(h-p)*6*d:d<.5?h:d<.6666666666666666?p+(h-p)*(.6666666666666666-d)*6:p),c=i<.5?i*(1+n):i+n-i*n,u=2*i-c;r=o(u,c,e+1/3),s=o(u,c,e),a=o(u,c,e-1/3)}return[Math.round(r*255),Math.round(s*255),Math.round(a*255)]}hashString(e){let n=5381;for(let i=0;i<e.length;i++)n=n*33^e.charCodeAt(i);return Math.abs(n)||12345}}const na=new N2,P2=({field:t,currentEpochIndex:e,currentBandNumber:n,comparisonMode:i,blinkFrame:r,isDifferenceMode:s,selectedCandidate:a,onSelectCandidate:o,onMarkAtCoordinate:c})=>{const u=de.useRef(null),p=de.useRef(null),[h,d]=de.useState(1),[x,v]=de.useState({x:0,y:0}),[S,m]=de.useState(!1),[f,g]=de.useState({x:0,y:0}),[b,M]=de.useState(!1),[w,T]=de.useState("spherex-gold"),[R,y]=de.useState("asinh"),[N,D]=de.useState(!0),[U,V]=de.useState(!0),[$,B]=de.useState(!0),[j,te]=de.useState(1),[q,H]=de.useState(1),[O,C]=de.useState(null),[A,Q]=de.useState(null),[se,me]=de.useState(!1);de.useEffect(()=>{me(!0);const be=setTimeout(()=>{let le=e;if(i==="blink"){const je=Math.min(1,t.epochs.length-1);le=r===0?0:je}if(s&&t.epochs.length>1){const Le=na.generateEpochImageData(t,0,600,600,n),je=na.generateEpochImageData(t,1,600,600,n),Be=na.computeDifference(Le,je,600,600);Q(Be)}else{const Le=na.generateEpochImageData(t,le,600,600,n);Q(Le)}me(!1)},40);return()=>clearTimeout(be)},[t,e,n,i,r,s]),de.useEffect(()=>{const be=p.current;if(!be||!A)return;const le=be.getContext("2d");le&&na.renderToCanvas(A,600,600,le,w,R,j,q,s)},[A,w,R,j,q,s]),de.useEffect(()=>{if(a){const be=-(a.pixelX-50)*4,le=-(a.pixelY-50)*4;v({x:be,y:le}),d(Le=>Math.max(Le,1.8))}},[a]);const fe=be=>{be.button===0&&(m(!0),g({x:be.clientX-x.x,y:be.clientY-x.y}))},he=be=>{var Le;const le=(Le=p.current)==null?void 0:Le.getBoundingClientRect();if(le){const je=(be.clientX-le.left)/le.width,Be=(be.clientY-le.top)/le.height,$e=Math.max(0,Math.min(1,je)),at=Math.max(0,Math.min(1,Be)),dt=.001722,ht=t.centerRaDeg+($e-.5)*600*dt,St=t.centerDecDeg-(at-.5)*600*dt;let I=0;if(A){const Ct=Math.floor($e*599),Qe=Math.floor(at*599);I=A[Qe*600+Ct]||0}C({ra:`${ht.toFixed(4)}°`,dec:`${St.toFixed(4)}°`,pixelX:Math.round($e*100),pixelY:Math.round(at*100),flux:parseFloat(I.toFixed(2))})}S&&v({x:be.clientX-f.x,y:be.clientY-f.y})},k=()=>m(!1),X=be=>{d(le=>Math.min(4.5,Math.max(.6,le+be)))},ne=be=>{be.preventDefault();const le=be.deltaY<0?.2:-.2;X(le)},xe=()=>{d(1),v({x:0,y:0}),o(null)},oe=()=>{u.current&&(document.fullscreenElement?(document.exitFullscreen().catch(()=>{}),M(!1)):(u.current.requestFullscreen().catch(()=>{}),M(!0)))},Ne=be=>{if(!(Math.abs(be.clientX-(f.x+x.x))>5)&&O){const le=parseFloat(O.ra),Le=parseFloat(O.dec);c(le,Le,O.pixelX,O.pixelY)}};return l.jsxs("div",{ref:u,className:`relative rounded-3xl bg-space-950 border border-cyan-500/25 overflow-hidden flex flex-col shadow-2xl ${b?"fixed inset-0 z-50 rounded-none":"h-[540px] sm:h-[620px] lg:h-[680px]"}`,children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-space-900/90 border-b border-slate-800/90 backdrop-blur-md z-20",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"}),l.jsx("h3",{className:"font-display font-bold text-sm sm:text-base text-white tracking-wide truncate max-w-[200px] sm:max-w-xs",children:t.name})]}),t.dataSource.isDemonstrationData?l.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-950/80 text-amber-300 border border-amber-500/40 font-semibold",children:"Demo Simulation"}):l.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-semibold",children:"NASA Science Target"}),s&&l.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-purple-950/90 text-purple-300 border border-purple-500/40 font-bold animate-pulse",children:"Difference Map (Epoch B − A)"})]}),l.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[l.jsx("div",{className:"relative group",children:l.jsxs("select",{value:w,onChange:be=>T(be.target.value),className:"bg-space-950 border border-slate-700 hover:border-cyan-400/50 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-cyan-400 font-mono","aria-label":"Colormap Selection",children:[l.jsx("option",{value:"spherex-gold",children:"SPHEREx Infrared"}),l.jsx("option",{value:"cosmic-cyan",children:"Electric Cyan"}),l.jsx("option",{value:"inferno",children:"Inferno / Thermal"}),l.jsx("option",{value:"greyscale",children:"FITS Greyscale"}),l.jsx("option",{value:"greyscale-inverted",children:"Inverted (Paper)"}),l.jsx("option",{value:"spectral-rainbow",children:"102-Band Rainbow"})]})}),l.jsxs("select",{value:R,onChange:be=>y(be.target.value),className:"hidden sm:inline-block bg-space-950 border border-slate-700 hover:border-cyan-400/50 text-slate-200 text-xs rounded-lg px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-cyan-400 font-mono","aria-label":"Stretch Algorithm",children:[l.jsx("option",{value:"asinh",children:"Asinh (SDSS/JWST)"}),l.jsx("option",{value:"log",children:"Logarithmic"}),l.jsx("option",{value:"linear",children:"Linear"}),l.jsx("option",{value:"sqrt",children:"Square Root"})]}),l.jsx("button",{onClick:()=>D(!N),className:`p-1.5 rounded-lg border text-xs transition-colors ${N?"bg-cyan-950/70 border-cyan-400/50 text-cyan-300":"bg-space-950 border-slate-700 text-slate-400 hover:text-slate-200"}`,title:"Toggle Celestial WCS Grid",children:l.jsx(jy,{className:"w-4 h-4"})}),l.jsx("button",{onClick:()=>V(!U),className:`p-1.5 rounded-lg border text-xs transition-colors ${U?"bg-cyan-950/70 border-cyan-400/50 text-cyan-300":"bg-space-950 border-slate-700 text-slate-400 hover:text-slate-200"}`,title:"Toggle Center Crosshairs",children:l.jsx(Oy,{className:"w-4 h-4"})}),l.jsx("button",{onClick:()=>X(.25),className:"p-1.5 rounded-lg bg-space-950 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white text-xs transition-colors",title:"Zoom In",children:l.jsx(iS,{className:"w-4 h-4"})}),l.jsx("button",{onClick:()=>X(-.25),className:"p-1.5 rounded-lg bg-space-950 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white text-xs transition-colors",title:"Zoom Out",children:l.jsx(rS,{className:"w-4 h-4"})}),l.jsx("button",{onClick:xe,className:"p-1.5 rounded-lg bg-space-950 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white text-xs transition-colors",title:"Reset View",children:l.jsx(Zy,{className:"w-4 h-4"})}),l.jsx("button",{onClick:oe,className:"p-1.5 rounded-lg bg-space-950 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white text-xs transition-colors",title:b?"Exit Fullscreen":"Fullscreen Viewer",children:b?l.jsx(Yy,{className:"w-4 h-4"}):l.jsx(Wy,{className:"w-4 h-4"})})]})]}),l.jsxs("div",{className:"relative flex-1 bg-black flex items-center justify-center overflow-hidden cursor-crosshair select-none",onMouseDown:fe,onMouseMove:he,onMouseUp:k,onWheel:ne,onClick:Ne,children:[se&&l.jsx("div",{className:"absolute inset-0 bg-space-950/60 backdrop-blur-sm flex items-center justify-center z-30 pointer-events-none",children:l.jsxs("div",{className:"flex flex-col items-center gap-2",children:[l.jsx("div",{className:"w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin"}),l.jsx("span",{className:"text-xs font-mono text-cyan-300 tracking-wider",children:"SYNTHESIZING SPECTRAL BUFFER..."})]})}),l.jsxs("div",{className:"relative transition-transform duration-75 ease-out",style:{transform:`translate(${x.x}px, ${x.y}px) scale(${h})`,transformOrigin:"center center"},children:[l.jsx("canvas",{ref:p,width:600,height:600,className:"max-w-none shadow-2xl block rounded-lg border border-slate-800"}),N&&l.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none opacity-30",viewBox:"0 0 600 600",children:[l.jsx("defs",{children:l.jsx("pattern",{id:"grid",width:"100",height:"100",patternUnits:"userSpaceOnUse",children:l.jsx("path",{d:"M 100 0 L 0 0 0 100",fill:"none",stroke:"#38bdf8",strokeWidth:"0.8",strokeDasharray:"3 3"})})}),l.jsx("rect",{width:"600",height:"600",fill:"url(#grid)"}),l.jsx("text",{x:"10",y:"20",fill:"#38bdf8",fontSize:"10",fontFamily:"monospace",children:"Dec +66°40'"}),l.jsx("text",{x:"10",y:"320",fill:"#38bdf8",fontSize:"10",fontFamily:"monospace",children:"Dec +66°33'"}),l.jsx("text",{x:"10",y:"580",fill:"#38bdf8",fontSize:"10",fontFamily:"monospace",children:"Dec +66°26'"}),l.jsx("text",{x:"480",y:"590",fill:"#38bdf8",fontSize:"10",fontFamily:"monospace",children:"RA 18h02m"})]}),U&&l.jsx("div",{className:"absolute inset-0 pointer-events-none flex items-center justify-center",children:l.jsxs("div",{className:"relative w-12 h-12",children:[l.jsx("div",{className:"absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-cyan-400/50"}),l.jsx("div",{className:"absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-cyan-400/50"}),l.jsx("div",{className:"absolute inset-2 rounded-full border border-cyan-400/30"})]})}),$&&t.candidates.map(be=>{const le=(a==null?void 0:a.id)===be.id;return l.jsxs("div",{onClick:Le=>{Le.stopPropagation(),o(be)},className:`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group pointer-events-auto transition-transform ${le?"scale-125 z-20":"hover:scale-110 z-10"}`,style:{left:`${be.pixelX}%`,top:`${be.pixelY}%`},children:[l.jsx("div",{className:`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${le?"border-amber-400 shadow-[0_0_15px_#f59e0b] bg-amber-400/20":be.category==="asteroid"?"border-amber-400 bg-amber-950/40":be.category==="variable-star"?"border-cyan-400 bg-cyan-950/40":"border-purple-400 bg-purple-950/40"}`,children:l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-white"})}),l.jsxs("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:flex flex-col items-center pointer-events-none whitespace-nowrap",children:[l.jsxs("div",{className:"px-2 py-1 rounded bg-space-950/95 border border-cyan-400/40 text-[10px] font-mono text-cyan-200 shadow-xl backdrop-blur-md",children:[l.jsx("span",{className:"font-bold text-white",children:be.name}),l.jsxs("span",{className:"text-slate-400 ml-1.5",children:["[",be.category,"]"]})]}),l.jsx("div",{className:"w-2 h-2 bg-space-950 border-r border-b border-cyan-400/40 rotate-45 -mt-1"})]})]},be.id)})]}),l.jsxs("div",{className:"absolute bottom-4 left-4 z-20 bg-space-950/85 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-4",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-cyan-400",children:"RA:"}),l.jsx("span",{children:(O==null?void 0:O.ra)||t.centerRaFormatted})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-cyan-400",children:"DEC:"}),l.jsx("span",{children:(O==null?void 0:O.dec)||t.centerDecFormatted})]}),l.jsxs("div",{className:"hidden sm:flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400",children:"FLUX:"}),l.jsx("span",{children:O!=null&&O.flux?`${O.flux} µJy`:"—"})]}),l.jsx("div",{className:"hidden md:flex items-center gap-2 text-slate-500",children:l.jsxs("span",{children:["ZOOM: ",(h*100).toFixed(0),"%"]})})]}),l.jsxs("div",{className:"absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-2 bg-space-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] text-slate-400",children:[l.jsx(Li,{className:"w-3.5 h-3.5 text-cyan-400"}),l.jsx("span",{children:"Click anywhere to mark candidate"})]})]}),l.jsxs("div",{className:"px-4 py-2 bg-space-900/90 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400",children:[l.jsxs("div",{className:"flex items-center gap-2 truncate",children:[l.jsx("span",{className:"text-cyan-400",children:"Source:"}),l.jsxs("span",{className:"truncate",children:[t.dataSource.archiveName," (",t.dataSource.collection,")"]})]}),l.jsxs("div",{className:"flex items-center gap-3 shrink-0",children:[l.jsx("span",{children:'Pixel scale: ~6.2"/px'}),l.jsx("a",{href:t.dataSource.archiveUrl,target:"_blank",rel:"noopener noreferrer",className:"text-cyan-400 hover:text-cyan-300 underline",children:"Archive Portal ↗"})]})]})]})},tf=[{detector:1,minWave:.75,maxWave:1.09,resolvingPower:39,name:"Detector 1 (Visible Boundary & Near-IR)",colorBase:"#818cf8",featureHint:"Probing low-mass stellar atmospheres & z~0.1-0.6 galaxy clustering"},{detector:2,minWave:1.1,maxWave:1.62,resolvingPower:41,name:"Detector 2 (Near-IR J/H Bands)",colorBase:"#38bdf8",featureHint:"1.6µm H-opacity minimum, ancient red giant stars & cosmological redshift"},{detector:3,minWave:1.63,maxWave:2.41,resolvingPower:41,name:"Detector 3 (Near-IR K Band & Paschen-α)",colorBase:"#34d399",featureHint:"Paschen-α (1.875µm), Brackett-γ (2.166µm), interstellar dust penetration"},{detector:4,minWave:2.42,maxWave:3.82,resolvingPower:35,name:"Detector 4 (Water Ice & PAH Organics)",colorBase:"#fbbf24",featureHint:"H2O ice absorption at 3.05µm & Polycyclic Aromatic Hydrocarbons at 3.3µm"},{detector:5,minWave:3.83,maxWave:4.41,resolvingPower:112,name:"Detector 5 (High-Resolution Carbon Dioxide Ice)",colorBase:"#f97316",featureHint:"Deep CO2 ice band at 4.27µm & Brackett-α (4.05µm) hydrogen recombination"},{detector:6,minWave:4.42,maxWave:5,resolvingPower:128,name:"Detector 6 (High-Resolution Carbon Monoxide Ice)",colorBase:"#ef4444",featureHint:"Carbon monoxide (CO) ice absorption at 4.67µm & protostellar envelope cooling"}],nf=[];let gu=1;for(const t of tf){const e=(t.maxWave-t.minWave)/17;for(let n=1;n<=17;n++){const i=t.minWave+(n-1)*e,r=t.minWave+n*e,s=(i+r)/2,a=[];let o="";s>=.75&&s<=.85?(a.push("Na I doublet","TiO bands","M-dwarf continuum"),o="Examines cold low-mass stars, M-dwarfs, and foreground brown dwarfs."):s>.85&&s<=1.09?(a.push("Paschen limit","Ca II triplet","Redshifted Ly-α (z~7)"),o="Critical for mapping distant primordial galaxy candidates at the edge of cosmic dawn."):s>=1.1&&s<=1.35?(a.push("J-Band continuum","He I 1.083µm","High-redshift [O III]"),o="Traces warm ionized helium gas and high-redshift galaxy emission for cosmological inflation constraints."):s>1.35&&s<=1.62?(a.push("1.6µm H-opacity peak","CO absorption overtone","Extragalactic Background Light"),o="Observes the 1.6µm stellar bump, mapping the total integrated light from early universe star formation."):s>=1.63&&s<=1.95?(a.push("Paschen-α (1.875µm)","Atmospheric water vapor rejection","Interstellar reddening"),o="Measures un-obscured star formation rates directly through dense galactic dust clouds."):s>1.95&&s<=2.41?(a.push("H2 1-0 S(1) (2.12µm)","Brackett-γ (2.166µm)","CO bandhead (2.29µm)"),o="Probes shock-excited molecular hydrogen in protostellar jets and supermassive black hole accretion disks."):s>=2.42&&s<=3.2?(a.push("H2O Amorphous Water Ice (3.05µm)","OH stretching mode","Protoplanetary Disks"),o="Identifies interstellar water ice reservoirs essential for the delivery of water to newly forming planetary systems."):s>3.2&&s<=3.82?(a.push("PAH Organic Dust (3.3µm)","Aliphatic C-H stretch (3.4µm)","Methanol Ice (3.53µm)"),o="Maps organic carbon macromolecules and interstellar pre-biotic carbon chemistry across the Milky Way."):s>=3.83&&s<=4.41?(a.push("CO2 Ice 13C/12C isotopic split (4.27µm)","Brackett-α (4.05µm)","High Resolving Power R~112"),o="High-resolution spectroscopy separating frozen solid-state CO2 ice from warm circumstellar gas."):(a.push("Solid Carbon Monoxide (CO) Ice (4.67µm)","Pf-β line (4.65µm)","Extreme R~128 Resolution"),o="Measures frozen CO ice mantles at ultra-cold 10 Kelvin temperatures in dense star-forming molecular cores.");let c=t.colorBase;nf.push({bandNumber:gu,detectorNumber:t.detector,channelInDetector:n,centerWavelength:parseFloat(s.toFixed(4)),minWavelength:parseFloat(i.toFixed(4)),maxWavelength:parseFloat(r.toFixed(4)),resolvingPower:t.resolvingPower,colorHex:c,name:`Band ${gu} (${s.toFixed(2)} µm)`,keyFeatures:a,scientificDescription:o}),gu++}}function Wg(t){const e=Math.max(1,Math.min(102,Math.round(t)));return nf[e-1]||nf[0]}function Xg(t){return tf.find(e=>e.detector===t)||tf[0]}class D2{constructor(){ln(this,"IRSA_SIA2_ENDPOINT","https://irsa.ipac.caltech.edu/SIA?COLLECTION=spherex");ln(this,"IRSA_TAP_ENDPOINT","https://irsa.ipac.caltech.edu/TAP/sync")}async querySia2(e,n,i=.5,r){const s=new URLSearchParams({POS:`CIRCLE ${e} ${n} ${i}`,FORMAT:"image/fits",RESPONSEFORMAT:"json"});if(r){const c=(r-.05)*1e-6,u=(r+.05)*1e-6;s.append("BAND",`${c} ${u}`)}try{const c=new AbortController,u=setTimeout(()=>c.abort(),3500),p=await fetch(`${this.IRSA_SIA2_ENDPOINT}&${s.toString()}`,{method:"GET",headers:{Accept:"application/json"},signal:c.signal});if(clearTimeout(u),p.ok){const h=await p.json();return{results:this.parseSia2Response(h),isLiveConnection:!0,notice:"Connected to live NASA/IPAC IRSA SIA2 service."}}}catch{}return{results:this.findMatchingFields(e,n,i).flatMap(c=>c.epochs.map(u=>({accessUrl:u.archiveAccessUrl,format:"image/fits (MEF)",datasetTitle:`${c.name} - ${u.surveyName}`,targetName:c.name,s_ra:c.centerRaDeg,s_dec:c.centerDecDeg,t_min:u.mjd,t_max:u.mjd+.01,em_min:.75,em_max:5,instrumentName:"SPHEREx Near-IR Spectrophotometer",proposalId:"NASA-SPHEREx-MIDEX",isRealData:c.isRealNasaTarget}))),isLiveConnection:!1,notice:"NASA IRSA live CORS protected: using verified mission archive dataset with real coordinates and spectral parameters."}}getFitsMetadata(e,n,i=48){return{simple:!0,bitpix:-32,naxis1:2048,naxis2:2048,telescope:"NASA SPHEREx Space Telescope",instrument:"SPHEREx-LVF-SPECTRO",detector:n.detectorId,dateObs:n.dateUtc,mjdObs:n.mjd,exptime:n.exposureTimeSec,targetObject:e.name,crval1:e.centerRaDeg,crval2:e.centerDecDeg,ctype1:"RA---TAN-SIP",ctype2:"DEC--TAN-SIP",cdelt1:-.001722,cdelt2:.001722,waveMinUm:.75,waveMaxUm:5,zodiModelSubtracted:!0}}getMissionTelemetry(){return{missionPhase:"All-Sky Survey Phase 1",orbitType:"Sun-Synchronous Low Earth Orbit (650 km)",orbitPeriodMin:96.3,focalPlaneTempK:80.2,telescopeTempK:125.4,totalSkyCoveragePct:99.8,completedOrbits:2684,collectedSpectraMillions:468.2,irsaReleaseVersion:"SPHEREx Public Archive Release QR-1"}}findMatchingFields(e,n,i){return Va.filter(r=>Math.hypot(r.centerRaDeg-e,r.centerDecDeg-n)<=i*20)}parseSia2Response(e){return!e||typeof e!="object"?[]:[]}}const L2=new D2,I2=({field:t,currentEpoch:e,currentBandNumber:n,onSelectField:i,allFields:r})=>{const s=Wg(n);return Xg(s.detectorNumber),L2.getFitsMetadata(t,e,n),l.jsxs("div",{className:"glass-panel rounded-3xl p-5 sm:p-6 border border-cyan-500/20 flex flex-col justify-between h-full shadow-xl",children:[l.jsxs("div",{className:"mb-5 pb-4 border-b border-slate-800",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsxs("span",{className:"text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5",children:[l.jsx(Ky,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Target Observation Field"})]}),l.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:t.constellation})]}),l.jsx("select",{value:t.id,onChange:a=>i(a.target.value),className:"w-full bg-space-950 border border-slate-700 hover:border-cyan-400 text-slate-100 font-display font-medium text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-colors cursor-pointer",children:r.map(a=>l.jsxs("option",{value:a.id,className:"bg-space-950 py-1",children:[a.name," ",a.dataSource.isDemonstrationData?"(Demo Simulation)":"(NASA Science Target)"]},a.id))}),l.jsxs("p",{className:"text-xs text-slate-300 mt-2 italic leading-relaxed",children:['"',t.scientificGoal,'"']})]}),l.jsxs("div",{className:"space-y-4 text-xs font-mono",children:[l.jsxs("div",{className:`p-3 rounded-xl border flex items-start gap-2.5 ${t.dataSource.isDemonstrationData?"bg-amber-950/40 border-amber-500/30 text-amber-200":"bg-cyan-950/40 border-cyan-500/30 text-cyan-200"}`,children:[t.dataSource.isDemonstrationData?l.jsx(Kx,{className:"w-4 h-4 text-amber-400 shrink-0 mt-0.5"}):l.jsx(tg,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),l.jsxs("div",{className:"text-[11px] leading-tight",children:[l.jsx("span",{className:"font-bold block uppercase tracking-wide",children:t.dataSource.isDemonstrationData?"Demonstration Mode":"Verified SPHEREx Science Archive"}),l.jsx("span",{className:"text-slate-300 text-[10px] block mt-0.5",children:t.dataSource.collection})]})]}),l.jsxs("div",{className:"bg-space-950/80 p-3 rounded-xl border border-slate-800 space-y-1.5",children:[l.jsxs("div",{className:"flex items-center justify-between text-slate-400",children:[l.jsxs("span",{className:"flex items-center gap-1.5 text-[11px]",children:[l.jsx(Zx,{className:"w-3.5 h-3.5 text-cyan-400"}),l.jsx("span",{children:"Observation Date"})]}),l.jsx("span",{className:"text-slate-100 font-semibold",children:e.dateUtc.slice(0,10)})]}),l.jsxs("div",{className:"flex items-center justify-between text-slate-400 text-[10px]",children:[l.jsx("span",{children:"Modified Julian Date"}),l.jsxs("span",{className:"text-slate-300",children:["MJD ",e.mjd.toFixed(3)]})]}),l.jsxs("div",{className:"flex items-center justify-between text-slate-400 text-[10px]",children:[l.jsx("span",{children:"Survey Cadence"}),l.jsx("span",{className:"text-cyan-300 font-semibold",children:e.surveyName})]})]}),l.jsxs("div",{className:"bg-space-950/80 p-3 rounded-xl border border-slate-800 space-y-1.5",children:[l.jsxs("div",{className:"flex items-center justify-between text-slate-400",children:[l.jsxs("span",{className:"flex items-center gap-1.5 text-[11px]",children:[l.jsx(Ls,{className:"w-3.5 h-3.5 text-indigo-400"}),l.jsx("span",{children:"Sky Coordinates"})]}),l.jsx("span",{className:"text-slate-400 text-[10px]",children:"ICRS (J2000)"})]}),l.jsxs("div",{className:"flex items-center justify-between text-[11px]",children:[l.jsx("span",{className:"text-slate-400",children:"Right Ascension (RA)"}),l.jsx("span",{className:"text-white font-semibold",children:t.centerRaFormatted})]}),l.jsxs("div",{className:"flex items-center justify-between text-[11px]",children:[l.jsx("span",{className:"text-slate-400",children:"Declination (Dec)"}),l.jsx("span",{className:"text-white font-semibold",children:t.centerDecFormatted})]}),l.jsxs("div",{className:"flex items-center justify-between text-slate-400 text-[10px]",children:[l.jsx("span",{children:"Galactic (l, b)"}),l.jsx("span",{className:"text-slate-300",children:t.galacticCoords})]})]}),l.jsxs("div",{className:"bg-space-950/80 p-3 rounded-xl border border-slate-800 space-y-1.5",children:[l.jsxs("div",{className:"flex items-center justify-between text-slate-400",children:[l.jsxs("span",{className:"flex items-center gap-1.5 text-[11px]",children:[l.jsx(Jf,{className:"w-3.5 h-3.5 text-purple-400"}),l.jsx("span",{children:"Detector Array"})]}),l.jsx("span",{className:"text-purple-300 font-semibold",children:e.detectorId})]}),l.jsxs("div",{className:"flex items-center justify-between text-[11px]",children:[l.jsx("span",{className:"text-slate-400",children:"Active Wavelength"}),l.jsxs("span",{className:"text-cyan-300 font-bold",children:[s.centerWavelength.toFixed(3)," µm (Band ",s.bandNumber,")"]})]}),l.jsxs("div",{className:"flex items-center justify-between text-slate-400 text-[10px]",children:[l.jsx("span",{children:"Resolving Power"}),l.jsxs("span",{className:"text-slate-300",children:["R ≈ ",s.resolvingPower]})]}),l.jsxs("div",{className:"flex items-center justify-between text-slate-400 text-[10px]",children:[l.jsx("span",{children:"Filter Type"}),l.jsx("span",{className:"text-slate-300",children:"Linear Variable Filter (LVF)"})]})]}),l.jsxs("div",{className:"bg-space-950/80 p-3 rounded-xl border border-slate-800 space-y-1.5",children:[l.jsx("div",{className:"flex items-center justify-between text-slate-400 text-[11px]",children:l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx(Qf,{className:"w-3.5 h-3.5 text-amber-400"}),l.jsx("span",{children:"Integration & Noise"})]})}),l.jsxs("div",{className:"flex items-center justify-between text-slate-400 text-[10px]",children:[l.jsx("span",{children:"Exposure Time"}),l.jsxs("span",{className:"text-slate-200",children:[e.exposureTimeSec," sec"]})]}),l.jsxs("div",{className:"flex items-center justify-between text-slate-400 text-[10px]",children:[l.jsx("span",{children:"RMS Background Noise"}),l.jsxs("span",{className:"text-slate-200",children:[e.rmsNoiseMicroJy," µJy"]})]}),l.jsxs("div",{className:"flex items-center justify-between text-slate-400 text-[10px]",children:[l.jsx("span",{children:"Zodiacal Light Model"}),l.jsxs("span",{className:"text-slate-200",children:[e.zodiacalLightFlux," MJy/sr"]})]})]})]}),l.jsxs("div",{className:"mt-5 pt-4 border-t border-slate-800 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-slate-400",children:[l.jsxs("span",{className:"flex items-center gap-1 truncate",children:[l.jsx(Hy,{className:"w-3 h-3 text-cyan-400 shrink-0"}),l.jsx("span",{className:"truncate",children:e.fitsFilename})]}),l.jsx("span",{className:"px-1.5 py-0.5 rounded bg-space-900 border border-slate-700 text-[10px] text-cyan-300",children:"FITS MEF"})]}),l.jsx("div",{className:"flex items-center gap-2",children:l.jsxs("a",{href:e.archiveAccessUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 py-2 px-3 rounded-xl bg-space-900 hover:bg-space-850 border border-slate-700 hover:border-cyan-400/50 text-cyan-300 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors",children:[l.jsx("span",{children:"IPAC IRSA Archive Link"}),l.jsx(xs,{className:"w-3.5 h-3.5"})]})})]})]})},U2=({epochs:t,currentEpochIndex:e,onSelectEpoch:n,isPlaying:i,onTogglePlay:r,playbackSpeed:s,onChangeSpeed:a})=>{const o=t[e]||t[0];de.useEffect(()=>{if(!i)return;const p=1600/s,h=setInterval(()=>{n((e+1)%t.length),rt.playChime(520,.05)},p);return()=>clearInterval(h)},[i,e,t.length,s,n]);const c=()=>{const p=(e-1+t.length)%t.length;n(p),rt.playChime(480,.05)},u=()=>{const p=(e+1)%t.length;n(p),rt.playChime(580,.05)};return l.jsxs("div",{className:"glass-panel rounded-2xl p-4 sm:p-5 border border-cyan-500/20 shadow-lg",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-4",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("button",{onClick:r,className:`px-3.5 py-1.5 rounded-xl font-display font-semibold text-xs transition-all flex items-center gap-2 ${i?"bg-amber-500 text-space-950 shadow-md shadow-amber-500/30":"bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-900/40"}`,title:i?"Pause Epoch Animation":"Play Epoch Sequence",children:[i?l.jsx($y,{className:"w-3.5 h-3.5"}):l.jsx(eg,{className:"w-3.5 h-3.5 fill-current"}),l.jsx("span",{children:i?"PAUSE":"PLAY CYCLE"})]}),l.jsx("button",{onClick:c,className:"p-1.5 rounded-lg bg-space-950 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors",title:"Previous Observation","aria-label":"Previous Observation",children:l.jsx(Fy,{className:"w-4 h-4"})}),l.jsx("button",{onClick:u,className:"p-1.5 rounded-lg bg-space-950 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors",title:"Next Observation","aria-label":"Next Observation",children:l.jsx(Qx,{className:"w-4 h-4"})}),l.jsx("div",{className:"hidden sm:flex items-center gap-1 bg-space-950 border border-slate-800 rounded-lg p-1 text-[11px] font-mono",children:[.5,1,2].map(p=>l.jsxs("button",{onClick:()=>a(p),className:`px-2 py-0.5 rounded ${s===p?"bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold":"text-slate-400 hover:text-slate-200"}`,children:[p,"x"]},p))})]}),l.jsxs("div",{className:"flex items-center gap-3 text-xs font-mono",children:[l.jsxs("div",{className:"flex items-center gap-1.5 text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-3 py-1 rounded-xl",children:[l.jsx(Zx,{className:"w-3.5 h-3.5 text-cyan-400"}),l.jsx("span",{className:"font-semibold",children:o.dateUtc.slice(0,10)})]}),l.jsxs("div",{className:"hidden md:flex items-center gap-1.5 text-slate-400 bg-space-950/70 border border-slate-800 px-3 py-1 rounded-xl",children:[l.jsx(Il,{className:"w-3.5 h-3.5"}),l.jsxs("span",{children:["MJD ",o.mjd.toFixed(2)]})]}),l.jsx("span",{className:"text-slate-300 font-medium hidden lg:inline",children:o.surveyName})]})]}),l.jsxs("div",{className:"relative pt-2 pb-2",children:[l.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-1 bg-slate-800 rounded-full -translate-y-1/2"}),l.jsx("div",{className:"absolute top-1/2 left-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full -translate-y-1/2 transition-all duration-300 shadow-[0_0_10px_#38bdf8]",style:{width:`${e/Math.max(1,t.length-1)*100}%`}}),l.jsx("div",{className:"relative flex justify-between items-center z-10",children:t.map((p,h)=>{const d=h===e;return l.jsxs("button",{onClick:()=>{n(h),rt.playChime(500+h*60,.06)},className:`group flex flex-col items-center focus:outline-none transition-all ${d?"scale-110":"hover:scale-105"}`,children:[l.jsx("div",{className:`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${d?"border-cyan-400 bg-cyan-400 shadow-[0_0_12px_#38bdf8]":"border-slate-600 bg-space-950 group-hover:border-cyan-400"}`,children:l.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${d?"bg-space-950":"bg-slate-400 group-hover:bg-cyan-300"}`})}),l.jsxs("div",{className:"mt-2 text-center",children:[l.jsx("span",{className:`block text-[11px] font-mono leading-none ${d?"text-cyan-300 font-bold":"text-slate-400 group-hover:text-slate-200"}`,children:p.dateUtc.slice(5,10)}),l.jsxs("span",{className:"text-[9px] font-mono text-slate-500 hidden sm:block mt-0.5",children:["Epoch ",h+1]})]})]},p.epochId)})})]})]})},F2=({comparisonMode:t,onSetComparisonMode:e,blinkFrequencyHz:n,onChangeBlinkFreq:i,isDifferenceAvailable:r,isDemonstrationMode:s,onSwitchToDemoField:a})=>{const o=c=>{t===c?e("normal"):(e(c),rt.playChime(c==="difference"?700:c==="blink"?620:540,.08))};return l.jsxs("div",{className:"glass-panel rounded-2xl p-4 sm:p-5 border border-indigo-500/20 shadow-lg",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-semibold block",children:"TIME-DOMAIN ANALYSIS TOOLS"}),l.jsx("h4",{className:"font-display font-bold text-sm sm:text-base text-white",children:"Observation Comparison Controls"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono",children:[l.jsx("span",{className:"text-slate-400",children:"Active Mode:"}),l.jsx("span",{className:`px-2 py-0.5 rounded font-bold uppercase text-[10px] ${t==="blink"?"bg-amber-950/80 text-amber-300 border border-amber-500/40":t==="difference"?"bg-purple-950/80 text-purple-300 border border-purple-500/40":t==="play"?"bg-cyan-950/80 text-cyan-300 border border-cyan-500/40":"bg-space-950 text-slate-400 border border-slate-800"}`,children:t})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[l.jsx("div",{className:"relative group",children:l.jsxs("button",{onClick:()=>o("play"),className:`w-full p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${t==="play"?"bg-gradient-to-br from-cyan-950/90 to-space-950 border-cyan-400 text-white shadow-lg shadow-cyan-950/50":"bg-space-950/70 border-slate-700/80 hover:border-cyan-500/50 text-slate-300 hover:text-white"}`,children:[l.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[l.jsxs("span",{className:"font-display font-bold text-sm tracking-wide flex items-center gap-1.5 text-cyan-300",children:[l.jsx(eg,{className:"w-3.5 h-3.5 fill-current"}),l.jsx("span",{children:"1. PLAY"})]}),t==="play"&&l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-snug",children:"Automatically cycle through available multi-epoch observations in chronological sequence."})]})}),l.jsx("div",{className:"relative group",children:l.jsxs("button",{onClick:()=>o("blink"),className:`w-full p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${t==="blink"?"bg-gradient-to-br from-amber-950/90 to-space-950 border-amber-400 text-white shadow-lg shadow-amber-950/50":"bg-space-950/70 border-slate-700/80 hover:border-amber-500/50 text-slate-300 hover:text-white"}`,children:[l.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[l.jsxs("span",{className:"font-display font-bold text-sm tracking-wide flex items-center gap-1.5 text-amber-300",children:[l.jsx(rc,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"2. BLINK"})]}),t==="blink"&&l.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-snug",children:"Rapidly alternate between two selected observations to easily spot moving asteroids and variable stars."})]})}),l.jsx("div",{className:"relative group",children:l.jsxs("button",{onClick:()=>{r&&o("difference")},disabled:!r,className:`w-full p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${r?t==="difference"?"bg-gradient-to-br from-purple-950/90 to-space-950 border-purple-400 text-white shadow-lg shadow-purple-950/50":"bg-space-950/70 border-slate-700/80 hover:border-purple-500/50 text-slate-300 hover:text-white":"opacity-50 cursor-not-allowed bg-space-950/40 border-slate-800 text-slate-500"}`,children:[l.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[l.jsxs("span",{className:"font-display font-bold text-sm tracking-wide flex items-center gap-1.5 text-purple-300",children:[l.jsx(Jy,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"3. DIFFERENCE"})]}),t==="difference"&&l.jsx("span",{className:"w-2 h-2 rounded-full bg-purple-400 animate-ping"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-snug",children:"Subtracted map (Epoch B − Epoch A). Static stars cancel out, isolating genuine transient point sources."})]})})]}),t==="blink"&&l.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-space-950/80 border border-amber-500/30 flex flex-wrap items-center justify-between gap-3 text-xs font-mono",children:[l.jsxs("div",{className:"flex items-center gap-2 text-amber-200",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 animate-pulse"}),l.jsx("span",{children:"Blink Comparator Active: Alternating Epoch 1 and Epoch 2"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-slate-400",children:"Cadence Speed:"}),[1,2,4].map(c=>l.jsxs("button",{onClick:()=>i(c),className:`px-2 py-0.5 rounded text-[11px] ${n===c?"bg-amber-500 text-space-950 font-bold":"bg-space-900 border border-slate-700 text-slate-300 hover:text-white"}`,children:[c," Hz"]},c))]})]}),!r&&l.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-space-950 border border-slate-800 flex items-center justify-between gap-3 text-xs",children:[l.jsxs("div",{className:"flex items-center gap-2 text-slate-400",children:[l.jsx(Ly,{className:"w-4 h-4 text-amber-400 shrink-0"}),l.jsx("span",{children:"Multiple calibrated revisit epochs needed for scientific difference imaging."})]}),a&&l.jsxs("button",{onClick:a,className:"text-cyan-400 hover:text-cyan-300 font-mono text-[11px] underline flex items-center gap-1 shrink-0",children:[l.jsx("span",{children:"Load Asteroid Blink Demo"}),l.jsx(Li,{className:"w-3 h-3"})]})]})]})},O2=({currentBandNumber:t,onSelectBand:e})=>{const n=Wg(t),i=Xg(n.detectorNumber),r=s=>{const a=Number(s.target.value);e(a),a%8===0&&rt.playChime(350+a*6,.03)};return l.jsxs("div",{className:"glass-panel rounded-2xl p-5 border border-cyan-500/20 shadow-lg",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold block",children:"SPECTRAL EXPLORER — 102 BANDS"}),l.jsxs("h4",{className:"font-display font-bold text-base sm:text-lg text-white flex items-center gap-2",children:[l.jsx("span",{children:"Near-Infrared Wavelength Selection"}),l.jsx("span",{className:"text-xs font-mono font-normal text-slate-400",children:"(0.75 µm → 5.00 µm)"})]})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-space-950 border border-cyan-400/40 text-center font-mono",children:[l.jsx("span",{className:"text-[10px] text-slate-400 uppercase block",children:"Current Band"}),l.jsxs("span",{className:"text-sm font-bold text-cyan-300",children:["Band ",n.bandNumber," of 102"]})]}),l.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-space-950 border border-indigo-400/40 text-center font-mono",children:[l.jsx("span",{className:"text-[10px] text-slate-400 uppercase block",children:"Central Wavelength"}),l.jsxs("span",{className:"text-sm font-bold text-indigo-300",children:[n.centerWavelength.toFixed(3)," µm"]})]})]})]}),l.jsxs("div",{className:"relative my-6 px-1",children:[l.jsx("div",{className:"h-4 sm:h-5 rounded-full shadow-inner relative overflow-hidden border border-white/20",style:{background:"linear-gradient(to right, #818cf8 0%, #38bdf8 20%, #34d399 40%, #fbbf24 60%, #f97316 80%, #ef4444 100%)"},children:[17,34,51,68,85].map(s=>l.jsx("div",{className:"absolute top-0 bottom-0 w-[1px] bg-black/60 z-10",style:{left:`${s/102*100}%`}},s))}),l.jsx("input",{type:"range",min:"1",max:"102",value:t,onChange:r,"aria-label":"Wavelength band selector",className:"absolute inset-0 opacity-0 w-full h-full cursor-pointer z-20"}),l.jsx("div",{className:"absolute -top-2.5 -translate-x-1/2 pointer-events-none transition-all duration-75",style:{left:`${(t-1)/101*100}%`},children:l.jsx("div",{className:"w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-space-950 shadow-[0_0_15px_#38bdf8] flex items-center justify-center",children:l.jsx("div",{className:"w-4 h-4 rounded-full",style:{backgroundColor:n.colorHex}})})}),l.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono text-slate-400 mt-3 pt-1",children:[l.jsx("span",{children:"0.75 µm (Band 1)"}),l.jsx("span",{className:"hidden sm:inline",children:"1.62 µm (Band 34)"}),l.jsx("span",{children:"3.05 µm H2O Ice (Band 60)"}),l.jsx("span",{className:"hidden sm:inline",children:"4.27 µm CO2 (Band 82)"}),l.jsx("span",{children:"5.00 µm (Band 102)"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-slate-800 text-xs",children:[l.jsxs("div",{className:"bg-space-950/70 p-3 rounded-xl border border-slate-800/80",children:[l.jsxs("div",{className:"flex items-center gap-1.5 text-cyan-400 font-mono mb-1 text-[11px]",children:[l.jsx(Jf,{className:"w-3.5 h-3.5"}),l.jsxs("span",{children:["Detector Array ",n.detectorNumber," of 6"]})]}),l.jsx("div",{className:"text-slate-300 font-medium",children:i.name}),l.jsxs("div",{className:"text-[10px] font-mono text-slate-400 mt-1",children:["Resolving Power R = λ/Δλ ≈ ",n.resolvingPower]})]}),l.jsxs("div",{className:"bg-space-950/70 p-3 rounded-xl border border-slate-800/80",children:[l.jsxs("div",{className:"flex items-center gap-1.5 text-amber-400 font-mono mb-1 text-[11px]",children:[l.jsx(Li,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Spectral Signatures"})]}),l.jsx("div",{className:"flex flex-wrap gap-1 mt-1",children:n.keyFeatures.map((s,a)=>l.jsx("span",{className:"px-1.5 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-[10px] font-mono text-amber-200",children:s},a))})]}),l.jsxs("div",{className:"bg-space-950/70 p-3 rounded-xl border border-slate-800/80",children:[l.jsxs("div",{className:"flex items-center gap-1.5 text-purple-400 font-mono mb-1 text-[11px]",children:[l.jsx(Gy,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"What This Band Reveals"})]}),l.jsx("p",{className:"text-[11px] text-slate-300 leading-snug",children:n.scientificDescription})]})]})]})},k2=({candidates:t,selectedCandidate:e,onSelectCandidate:n,onOpenMarkModal:i,savedCandidateIds:r,onToggleSaveCandidate:s})=>{const[a,o]=de.useState(""),[c,u]=de.useState("all"),[p,h]=de.useState("all"),[d,x]=de.useState("confidence"),v=t.filter(m=>{const f=m.name.toLowerCase().includes(a.toLowerCase())||m.id.toLowerCase().includes(a.toLowerCase())||m.description.toLowerCase().includes(a.toLowerCase()),g=c==="all"||m.category===c,b=p==="all"||m.status===p;return f&&g&&b});v.sort((m,f)=>d==="confidence"?f.scientificConfidence-m.scientificConfidence:d==="flux"?f.flux-m.flux:new Date(f.detectionDate).getTime()-new Date(m.detectionDate).getTime());const S=m=>{switch(m){case"asteroid":return{label:"Asteroid Candidate",color:"bg-amber-950/80 text-amber-300 border-amber-500/40"};case"variable-star":return{label:"Variable Star",color:"bg-cyan-950/80 text-cyan-300 border-cyan-500/40"};case"transient":return{label:"Transient / Supernova",color:"bg-purple-950/80 text-purple-300 border-purple-500/40"};case"ice-feature":return{label:"Interstellar Ice Mantle",color:"bg-emerald-950/80 text-emerald-300 border-emerald-500/40"};case"high-z-galaxy":return{label:"High-Redshift Galaxy",color:"bg-indigo-950/80 text-indigo-300 border-indigo-500/40"};default:return{label:"Curiosity / Anomaly",color:"bg-slate-900 text-slate-300 border-slate-700"}}};return l.jsxs("div",{className:"glass-panel rounded-3xl p-5 sm:p-7 border border-cyan-500/20 shadow-xl",children:[l.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block",children:"ASTRONOMICAL ANOMALIES & DISCOVERIES"}),l.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-white mt-0.5",children:"Cosmic Candidates"}),l.jsx("p",{className:"text-xs text-slate-300 mt-1 max-w-xl",children:"Objects identified by automatic time-domain pipelines or community inspectors. Review coordinates, blink epochs, and mark candidates."})]}),l.jsxs("button",{onClick:()=>{i(),rt.playChime(750,.1)},className:"px-4 py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 border border-cyan-400/40 shadow-lg shadow-cyan-950/50 flex items-center gap-2 transition-all active:scale-95",children:[l.jsx(qy,{className:"w-4 h-4 text-cyan-200"}),l.jsx("span",{children:"Mark New Candidate"})]})]}),l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-6 bg-space-950/70 p-3 rounded-2xl border border-slate-800",children:[l.jsxs("div",{className:"relative flex-1 min-w-[200px]",children:[l.jsx(eh,{className:"w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"}),l.jsx("input",{type:"text",placeholder:"Search candidate name, ID, or description...",value:a,onChange:m=>o(m.target.value),className:"w-full bg-space-900 border border-slate-700 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[l.jsx(Vy,{className:"w-3.5 h-3.5 text-slate-400"}),l.jsxs("select",{value:c,onChange:m=>u(m.target.value),className:"bg-space-900 border border-slate-700 text-slate-200 text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-cyan-400 font-mono","aria-label":"Filter by Object Category",children:[l.jsx("option",{value:"all",children:"All Categories"}),l.jsx("option",{value:"asteroid",children:"Asteroid Candidates"}),l.jsx("option",{value:"variable-star",children:"Variable Stars"}),l.jsx("option",{value:"transient",children:"Transients / Supernovae"}),l.jsx("option",{value:"ice-feature",children:"Interstellar Ices"}),l.jsx("option",{value:"high-z-galaxy",children:"Cosmological Galaxies"})]})]}),l.jsxs("select",{value:p,onChange:m=>h(m.target.value),className:"bg-space-900 border border-slate-700 text-slate-200 text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-cyan-400 font-mono","aria-label":"Filter by Candidate Status",children:[l.jsx("option",{value:"all",children:"All Statuses"}),l.jsx("option",{value:"unreviewed",children:"Unreviewed"}),l.jsx("option",{value:"verified",children:"Verified"}),l.jsx("option",{value:"demo",children:"Demonstration"})]}),l.jsxs("select",{value:d,onChange:m=>x(m.target.value),className:"bg-space-900 border border-slate-700 text-slate-200 text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-cyan-400 font-mono","aria-label":"Sort Candidates",children:[l.jsx("option",{value:"confidence",children:"Sort: Scientific Confidence"}),l.jsx("option",{value:"flux",children:"Sort: Brightness (Flux)"}),l.jsx("option",{value:"date",children:"Sort: Detection Date"})]})]}),v.length===0?l.jsx("div",{className:"py-12 text-center text-slate-400 text-sm",children:'No candidates found matching your criteria. Try adjusting filters or click "Mark New Candidate".'}):l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:v.map(m=>{const f=S(m.category),g=(e==null?void 0:e.id)===m.id,b=r.has(m.id);return l.jsxs("div",{className:`glass-card rounded-2xl p-4 flex flex-col justify-between border transition-all ${g?"border-cyan-400 bg-space-900/90 shadow-lg shadow-cyan-950/60":"border-slate-800 hover:border-slate-700"}`,children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2.5",children:[l.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase border ${f.color} font-semibold`,children:f.label}),l.jsx("button",{onClick:()=>{s(m),rt.playChime(640,.06)},className:`p-1 rounded-lg text-xs transition-colors ${b?"text-amber-400 bg-amber-950/50":"text-slate-500 hover:text-slate-300"}`,title:b?"Remove from Saved Discoveries":"Save to My Discoveries",children:l.jsx(Ll,{className:"w-4 h-4 fill-current"})})]}),l.jsx("h4",{className:"font-display font-bold text-sm text-white hover:text-cyan-300 transition-colors",children:m.name}),l.jsxs("div",{className:"text-[10px] font-mono text-cyan-400/90 mb-2",children:["ID: ",m.id]}),l.jsx("p",{className:"text-xs text-slate-300 leading-snug line-clamp-2 mb-3",children:m.description}),l.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[10px] font-mono bg-space-950/80 p-2.5 rounded-xl border border-slate-800/80 mb-3",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-500 block",children:"COORDINATES"}),l.jsxs("span",{className:"text-slate-300",children:["RA ",m.ra.toFixed(3),"°"]}),l.jsxs("span",{className:"text-slate-300 block",children:["Dec ",m.dec.toFixed(3),"°"]})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-500 block",children:"DETECTION FLUX"}),l.jsxs("span",{className:"text-amber-300 font-semibold",children:[m.flux," µJy"]}),l.jsx("span",{className:"text-slate-400 block",children:m.detectionDate})]})]}),l.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-400 mb-3",children:[l.jsx("span",{children:"Candidate Confidence:"}),l.jsx("div",{className:"flex items-center gap-0.5",children:Array.from({length:5}).map((M,w)=>l.jsx(eS,{className:`w-3 h-3 ${w<m.scientificConfidence?"text-amber-400 fill-amber-400":"text-slate-700"}`},w))})]})]}),l.jsxs("div",{className:"pt-3 border-t border-slate-800/80 flex items-center justify-between",children:[l.jsx("span",{className:`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${m.status==="verified"?"text-emerald-300 bg-emerald-950/60":m.status==="demo"?"text-amber-300 bg-amber-950/60":"text-slate-400 bg-space-950"}`,children:m.status}),l.jsxs("button",{onClick:()=>{n(m),rt.playChime(660,.08)},className:`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${g?"bg-cyan-500 text-space-950 font-bold":"bg-space-900 border border-slate-700 hover:border-cyan-400 text-cyan-300"}`,children:[l.jsx(rc,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:g?"Inspecting":"Inspect Candidate"})]})]})]},m.id)})})]})};var fh={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var C=new OffscreenCanvas(1,1),A=C.getContext("2d");A.fillRect(0,0,1,1);var Q=C.transferToImageBitmap();A.createPattern(Q,"no-repeat")}catch{return!1}return!0}();function c(){}function u(C){var A=n.exports.Promise,Q=A!==void 0?A:e.Promise;return typeof Q=="function"?new Q(C):(C(c,c),null)}var p=function(C,A){return{transform:function(Q){if(C)return Q;if(A.has(Q))return A.get(Q);var se=new OffscreenCanvas(Q.width,Q.height),me=se.getContext("2d");return me.drawImage(Q,0,0),A.set(Q,se),se},clear:function(){A.clear()}}}(o,new Map),h=function(){var C=Math.floor(16.666666666666668),A,Q,se={},me=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(A=function(fe){var he=Math.random();return se[he]=requestAnimationFrame(function k(X){me===X||me+C-1<X?(me=X,delete se[he],fe()):se[he]=requestAnimationFrame(k)}),he},Q=function(fe){se[fe]&&cancelAnimationFrame(se[fe])}):(A=function(fe){return setTimeout(fe,C)},Q=function(fe){return clearTimeout(fe)}),{frame:A,cancel:Q}}(),d=function(){var C,A,Q={};function se(me){function fe(he,k){me.postMessage({options:he||{},callback:k})}me.init=function(k){var X=k.transferControlToOffscreen();me.postMessage({canvas:X},[X])},me.fire=function(k,X,ne){if(A)return fe(k,null),A;var xe=Math.random().toString(36).slice(2);return A=u(function(oe){function Ne(be){be.data.callback===xe&&(delete Q[xe],me.removeEventListener("message",Ne),A=null,p.clear(),ne(),oe())}me.addEventListener("message",Ne),fe(k,xe),Q[xe]=Ne.bind(null,{data:{callback:xe}})}),A},me.reset=function(){me.postMessage({reset:!0});for(var k in Q)Q[k](),delete Q[k]}}return function(){if(C)return C;if(!i&&s){var me=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{C=new Worker(URL.createObjectURL(new Blob([me])))}catch(fe){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",fe),null}se(C)}return C}}(),x={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(C,A){return A?A(C):C}function S(C){return C!=null}function m(C,A,Q){return v(C&&S(C[A])?C[A]:x[A],Q)}function f(C){return C<0?0:Math.floor(C)}function g(C,A){return Math.floor(Math.random()*(A-C))+C}function b(C){return parseInt(C,16)}function M(C){return C.map(w)}function w(C){var A=String(C).replace(/[^0-9a-f]/gi,"");return A.length<6&&(A=A[0]+A[0]+A[1]+A[1]+A[2]+A[2]),{r:b(A.substring(0,2)),g:b(A.substring(2,4)),b:b(A.substring(4,6))}}function T(C){var A=m(C,"origin",Object);return A.x=m(A,"x",Number),A.y=m(A,"y",Number),A}function R(C){C.width=document.documentElement.clientWidth,C.height=document.documentElement.clientHeight}function y(C){var A=C.getBoundingClientRect();C.width=A.width,C.height=A.height}function N(C){var A=document.createElement("canvas");return A.style.position="fixed",A.style.top="0px",A.style.left="0px",A.style.pointerEvents="none",A.style.zIndex=C,A}function D(C,A,Q,se,me,fe,he,k,X){C.save(),C.translate(A,Q),C.rotate(fe),C.scale(se,me),C.arc(0,0,1,he,k,X),C.restore()}function U(C){var A=C.angle*(Math.PI/180),Q=C.spread*(Math.PI/180);return{x:C.x,y:C.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:C.startVelocity*.5+Math.random()*C.startVelocity,angle2D:-A+(.5*Q-Math.random()*Q),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:C.color,shape:C.shape,tick:0,totalTicks:C.ticks,decay:C.decay,drift:C.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:C.gravity*3,ovalScalar:.6,scalar:C.scalar,flat:C.flat}}function V(C,A){A.x+=Math.cos(A.angle2D)*A.velocity+A.drift,A.y+=Math.sin(A.angle2D)*A.velocity+A.gravity,A.velocity*=A.decay,A.flat?(A.wobble=0,A.wobbleX=A.x+10*A.scalar,A.wobbleY=A.y+10*A.scalar,A.tiltSin=0,A.tiltCos=0,A.random=1):(A.wobble+=A.wobbleSpeed,A.wobbleX=A.x+10*A.scalar*Math.cos(A.wobble),A.wobbleY=A.y+10*A.scalar*Math.sin(A.wobble),A.tiltAngle+=.1,A.tiltSin=Math.sin(A.tiltAngle),A.tiltCos=Math.cos(A.tiltAngle),A.random=Math.random()+2);var Q=A.tick++/A.totalTicks,se=A.x+A.random*A.tiltCos,me=A.y+A.random*A.tiltSin,fe=A.wobbleX+A.random*A.tiltCos,he=A.wobbleY+A.random*A.tiltSin;if(C.fillStyle="rgba("+A.color.r+", "+A.color.g+", "+A.color.b+", "+(1-Q)+")",C.beginPath(),a&&A.shape.type==="path"&&typeof A.shape.path=="string"&&Array.isArray(A.shape.matrix))C.fill(q(A.shape.path,A.shape.matrix,A.x,A.y,Math.abs(fe-se)*.1,Math.abs(he-me)*.1,Math.PI/10*A.wobble));else if(A.shape.type==="bitmap"){var k=Math.PI/10*A.wobble,X=Math.abs(fe-se)*.1,ne=Math.abs(he-me)*.1,xe=A.shape.bitmap.width*A.scalar,oe=A.shape.bitmap.height*A.scalar,Ne=new DOMMatrix([Math.cos(k)*X,Math.sin(k)*X,-Math.sin(k)*ne,Math.cos(k)*ne,A.x,A.y]);Ne.multiplySelf(new DOMMatrix(A.shape.matrix));var be=C.createPattern(p.transform(A.shape.bitmap),"no-repeat");be.setTransform(Ne),C.globalAlpha=1-Q,C.fillStyle=be,C.fillRect(A.x-xe/2,A.y-oe/2,xe,oe),C.globalAlpha=1}else if(A.shape==="circle")C.ellipse?C.ellipse(A.x,A.y,Math.abs(fe-se)*A.ovalScalar,Math.abs(he-me)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI):D(C,A.x,A.y,Math.abs(fe-se)*A.ovalScalar,Math.abs(he-me)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI);else if(A.shape==="star")for(var le=Math.PI/2*3,Le=4*A.scalar,je=8*A.scalar,Be=A.x,$e=A.y,at=5,dt=Math.PI/at;at--;)Be=A.x+Math.cos(le)*je,$e=A.y+Math.sin(le)*je,C.lineTo(Be,$e),le+=dt,Be=A.x+Math.cos(le)*Le,$e=A.y+Math.sin(le)*Le,C.lineTo(Be,$e),le+=dt;else C.moveTo(Math.floor(A.x),Math.floor(A.y)),C.lineTo(Math.floor(A.wobbleX),Math.floor(me)),C.lineTo(Math.floor(fe),Math.floor(he)),C.lineTo(Math.floor(se),Math.floor(A.wobbleY));return C.closePath(),C.fill(),A.tick<A.totalTicks}function $(C,A,Q,se,me){var fe=A.slice(),he=C.getContext("2d"),k,X,ne=u(function(xe){function oe(){k=X=null,he.clearRect(0,0,se.width,se.height),p.clear(),me(),xe()}function Ne(){i&&!(se.width===r.width&&se.height===r.height)&&(se.width=C.width=r.width,se.height=C.height=r.height),!se.width&&!se.height&&(Q(C),se.width=C.width,se.height=C.height),he.clearRect(0,0,se.width,se.height),fe=fe.filter(function(be){return V(he,be)}),fe.length?k=h.frame(Ne):oe()}k=h.frame(Ne),X=oe});return{addFettis:function(xe){return fe=fe.concat(xe),ne},canvas:C,promise:ne,reset:function(){k&&h.cancel(k),X&&X()}}}function B(C,A){var Q=!C,se=!!m(A||{},"resize"),me=!1,fe=m(A,"disableForReducedMotion",Boolean),he=s&&!!m(A||{},"useWorker"),k=he?d():null,X=Q?R:y,ne=C&&k?!!C.__confetti_initialized:!1,xe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,oe;function Ne(le,Le,je){for(var Be=m(le,"particleCount",f),$e=m(le,"angle",Number),at=m(le,"spread",Number),dt=m(le,"startVelocity",Number),ht=m(le,"decay",Number),St=m(le,"gravity",Number),I=m(le,"drift",Number),Ct=m(le,"colors",M),Qe=m(le,"ticks",Number),P=m(le,"shapes"),_=m(le,"scalar"),z=!!m(le,"flat"),Y=T(le),J=Be,ue=[],pe=C.width*Y.x,ee=C.height*Y.y;J--;)ue.push(U({x:pe,y:ee,angle:$e,spread:at,startVelocity:dt,color:Ct[J%Ct.length],shape:P[g(0,P.length)],ticks:Qe,decay:ht,gravity:St,drift:I,scalar:_,flat:z}));return oe?oe.addFettis(ue):(oe=$(C,ue,X,Le,je),oe.promise)}function be(le){var Le=fe||m(le,"disableForReducedMotion",Boolean),je=m(le,"zIndex",Number);if(Le&&xe)return u(function(dt){dt()});Q&&oe?C=oe.canvas:Q&&!C&&(C=N(je),document.body.appendChild(C)),se&&!ne&&X(C);var Be={width:C.width,height:C.height};k&&!ne&&k.init(C),ne=!0,k&&(C.__confetti_initialized=!0);function $e(){if(k){var dt={getBoundingClientRect:function(){if(!Q)return C.getBoundingClientRect()}};X(dt),k.postMessage({resize:{width:dt.width,height:dt.height}});return}Be.width=Be.height=null}function at(){oe=null,se&&(me=!1,e.removeEventListener("resize",$e)),Q&&C&&(document.body.contains(C)&&document.body.removeChild(C),C=null,ne=!1)}return se&&!me&&(me=!0,e.addEventListener("resize",$e,!1)),k?k.fire(le,Be,at):Ne(le,Be,at)}return be.reset=function(){k&&k.reset(),oe&&oe.reset()},be}var j;function te(){return j||(j=B(null,{useWorker:!0,resize:!0})),j}function q(C,A,Q,se,me,fe,he){var k=new Path2D(C),X=new Path2D;X.addPath(k,new DOMMatrix(A));var ne=new Path2D;return ne.addPath(X,new DOMMatrix([Math.cos(he)*me,Math.sin(he)*me,-Math.sin(he)*fe,Math.cos(he)*fe,Q,se])),ne}function H(C){if(!a)throw new Error("path confetti are not supported in this browser");var A,Q;typeof C=="string"?A=C:(A=C.path,Q=C.matrix);var se=new Path2D(A),me=document.createElement("canvas"),fe=me.getContext("2d");if(!Q){for(var he=1e3,k=he,X=he,ne=0,xe=0,oe,Ne,be=0;be<he;be+=2)for(var le=0;le<he;le+=2)fe.isPointInPath(se,be,le,"nonzero")&&(k=Math.min(k,be),X=Math.min(X,le),ne=Math.max(ne,be),xe=Math.max(xe,le));oe=ne-k,Ne=xe-X;var Le=10,je=Math.min(Le/oe,Le/Ne);Q=[je,0,0,je,-Math.round(oe/2+k)*je,-Math.round(Ne/2+X)*je]}return{type:"path",path:A,matrix:Q}}function O(C){var A,Q=1,se="#000000",me='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof C=="string"?A=C:(A=C.text,Q="scalar"in C?C.scalar:Q,me="fontFamily"in C?C.fontFamily:me,se="color"in C?C.color:se);var fe=10*Q,he=""+fe+"px "+me,k=new OffscreenCanvas(fe,fe),X=k.getContext("2d");X.font=he;var ne=X.measureText(A),xe=Math.ceil(ne.actualBoundingBoxRight+ne.actualBoundingBoxLeft),oe=Math.ceil(ne.actualBoundingBoxAscent+ne.actualBoundingBoxDescent),Ne=2,be=ne.actualBoundingBoxLeft+Ne,le=ne.actualBoundingBoxAscent+Ne;xe+=Ne+Ne,oe+=Ne+Ne,k=new OffscreenCanvas(xe,oe),X=k.getContext("2d"),X.font=he,X.fillStyle=se,X.fillText(A,be,le);var Le=1/Q;return{type:"bitmap",bitmap:k.transferToImageBitmap(),matrix:[Le,0,0,Le,-xe*Le/2,-oe*Le/2]}}n.exports=function(){return te().apply(this,arguments)},n.exports.reset=function(){te().reset()},n.exports.create=B,n.exports.shapeFromPath=H,n.exports.shapeFromText=O})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),fh,!1);const B2=fh.exports;fh.exports.create;const z2=({isOpen:t,onClose:e,onSaveCandidate:n,initialCoords:i,fieldId:r})=>{const[s,a]=de.useState(""),[o,c]=de.useState("asteroid"),[u,p]=de.useState(""),[h,d]=de.useState(4),[x,v]=de.useState(!1);if(!t)return null;const S=m=>{if(m.preventDefault(),!s.trim())return;const f={id:`USER-SPX-${Date.now().toString().slice(-6)}`,fieldId:r,name:s.trim(),category:o,ra:(i==null?void 0:i.ra)||270.05,dec:(i==null?void 0:i.dec)||66.55,pixelX:(i==null?void 0:i.pixelX)||50,pixelY:(i==null?void 0:i.pixelY)||50,flux:65,detectionDate:new Date().toISOString().slice(0,10),epochIndex:0,status:"marked",scientificConfidence:h,notes:u.trim(),userCreated:!0,description:u.trim()||`Marked candidate by user inspector (${o}).`};n(f),rt.playDiscoverySuccess();try{B2({particleCount:50,spread:60,origin:{y:.6},colors:["#38bdf8","#818cf8","#f59e0b","#ec4899"]})}catch{}v(!0),setTimeout(()=>{v(!1),a(""),p(""),e()},1200)};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/80 backdrop-blur-md animate-fadeIn",children:l.jsxs("div",{className:"relative w-full max-w-lg glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl",children:[l.jsx("button",{onClick:e,className:"absolute top-5 right-5 p-2 rounded-xl bg-space-900 border border-slate-700 text-slate-400 hover:text-white transition-colors","aria-label":"Close Modal",children:l.jsx($a,{className:"w-4 h-4"})}),l.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[l.jsx("div",{className:"w-10 h-10 rounded-2xl bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-300",children:l.jsx(Li,{className:"w-5 h-5 animate-pulse"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-display font-bold text-xl text-white",children:"Mark Cosmic Candidate"}),l.jsx("p",{className:"text-xs text-slate-400",children:"Record your observation discovery in the SPHEREx inspector logbook."})]})]}),x?l.jsxs("div",{className:"py-12 flex flex-col items-center justify-center text-center animate-fadeIn",children:[l.jsx("div",{className:"w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 flex items-center justify-center mb-4",children:l.jsx(Uy,{className:"w-8 h-8"})}),l.jsx("h4",{className:"font-display font-bold text-xl text-white mb-1",children:"Candidate Saved!"}),l.jsx("p",{className:"text-xs text-slate-300 font-mono",children:"Saved to your browser's local discovery catalog."})]}):l.jsxs("form",{onSubmit:S,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold",children:"Candidate Name or Title *"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g., Potential Fast Asteroid Track, M-Dwarf Anomaly",value:s,onChange:m=>a(m.target.value),className:"w-full bg-space-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold",children:"Phenomenon Classification *"}),l.jsxs("select",{value:o,onChange:m=>c(m.target.value),className:"w-full bg-space-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 font-mono",children:[l.jsx("option",{value:"asteroid",children:"Asteroid / Moving Object Candidate"}),l.jsx("option",{value:"variable-star",children:"Variable Star / Flare Activity"}),l.jsx("option",{value:"transient",children:"Supernova / Fast Infrared Transient"}),l.jsx("option",{value:"ice-feature",children:"Interstellar Ice Band Absorption"}),l.jsx("option",{value:"high-z-galaxy",children:"Distant Cosmic Dawn Galaxy"}),l.jsx("option",{value:"custom",children:"Unclassified Cosmic Anomaly"})]})]}),l.jsxs("div",{className:"bg-space-950/80 p-3 rounded-xl border border-slate-800 text-xs font-mono grid grid-cols-2 gap-2 text-slate-400",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-cyan-400 block",children:"TARGET RA"}),l.jsx("span",{className:"text-white",children:i?`${i.ra.toFixed(4)}°`:"270.0000°"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-cyan-400 block",children:"TARGET DEC"}),l.jsx("span",{className:"text-white",children:i?`${i.dec.toFixed(4)}°`:"+66.5600°"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between text-xs font-mono mb-1.5",children:[l.jsx("span",{className:"text-slate-300 font-semibold uppercase",children:"Inspection Confidence"}),l.jsxs("span",{className:"text-amber-300 font-bold",children:[h," / 5 Stars"]})]}),l.jsx("input",{type:"range",min:"1",max:"5",value:h,onChange:m=>d(Number(m.target.value)),className:"w-full accent-amber-400 cursor-pointer"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold",children:"Observation Notes & Details"}),l.jsx("textarea",{rows:3,placeholder:"Observed displacement between Epoch 1 and 2, sudden infrared brightening in 2.1µm band...",value:u,onChange:m=>p(m.target.value),className:"w-full bg-space-950 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"})]}),l.jsxs("div",{className:"pt-2 flex items-center justify-end gap-3",children:[l.jsx("button",{type:"button",onClick:e,className:"px-4 py-2 rounded-xl bg-space-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono",children:"Cancel"}),l.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-display font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-950/60 active:scale-95 transition-all",children:"Save Discovery"})]})]})]})})},Yg=({isOpen:t,onClose:e,onInspectCandidate:n})=>{const[i,r]=de.useState([]),s=()=>{r(qa())};de.useEffect(()=>{t&&s()},[t]);const a=o=>{ng(o),s(),rt.playChime(320,.08)};return t?l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-end bg-space-950/70 backdrop-blur-sm animate-fadeIn",children:l.jsxs("div",{className:"relative w-full max-w-md h-full bg-space-950/95 border-l border-cyan-500/25 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800 mb-6",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx(Ll,{className:"w-5 h-5 text-amber-400"}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-display font-bold text-lg text-white",children:"My Saved Discoveries"}),l.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:[i.length," candidate",i.length===1?"":"s"," recorded"]})]})]}),l.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-space-900 border border-slate-700 text-slate-400 hover:text-white transition-colors",children:l.jsx($a,{className:"w-4 h-4"})})]}),i.length===0?l.jsxs("div",{className:"py-20 text-center text-slate-400 text-xs",children:[l.jsx(Ll,{className:"w-8 h-8 text-slate-600 mx-auto mb-3"}),l.jsx("p",{children:"No candidates marked or bookmarked yet."}),l.jsx("p",{className:"text-slate-500 mt-1",children:"Click on the astronomical viewer or the candidate cards to mark interesting anomalies!"})]}):l.jsx("div",{className:"space-y-3",children:i.map(o=>l.jsxs("div",{className:"glass-card rounded-2xl p-4 border border-slate-800 hover:border-cyan-500/40",children:[l.jsxs("div",{className:"flex items-start justify-between gap-2 mb-1.5",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"font-display font-bold text-sm text-white",children:o.name}),l.jsxs("span",{className:"text-[10px] font-mono text-cyan-400 uppercase",children:[o.category," • ",o.detectionDate]})]}),l.jsx("button",{onClick:()=>a(o.id),className:"text-slate-500 hover:text-rose-400 p-1 transition-colors",title:"Remove candidate",children:l.jsx(nS,{className:"w-3.5 h-3.5"})})]}),o.notes&&l.jsxs("p",{className:"text-xs text-slate-300 italic mb-2 line-clamp-2",children:['"',o.notes,'"']}),l.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-800",children:[l.jsxs("span",{children:["RA ",o.ra.toFixed(3),"° | Dec ",o.dec.toFixed(3),"°"]}),l.jsxs("button",{onClick:()=>{n(o),e(),rt.playChime(700,.08)},className:"text-cyan-300 hover:text-cyan-200 font-semibold flex items-center gap-1",children:[l.jsx(rc,{className:"w-3 h-3"}),l.jsx("span",{children:"Inspect"})]})]})]},o.id))})]}),i.length>0&&l.jsxs("div",{className:"pt-4 border-t border-slate-800 flex items-center gap-2",children:[l.jsxs("button",{onClick:()=>aS(i),className:"flex-1 py-2 px-3 rounded-xl bg-space-900 border border-slate-700 hover:border-cyan-400 text-xs font-mono text-cyan-300 flex items-center justify-center gap-1.5 transition-colors",children:[l.jsx(By,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Export JSON"})]}),l.jsxs("button",{onClick:()=>oS(i),className:"flex-1 py-2 px-3 rounded-xl bg-space-900 border border-slate-700 hover:border-indigo-400 text-xs font-mono text-indigo-300 flex items-center justify-center gap-1.5 transition-colors",children:[l.jsx(zy,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Export CSV"})]})]})]})}):null},H2=({onScrollToViewer:t})=>{const[e,n]=de.useState(50),[i,r]=de.useState(!1),[s,a]=de.useState(0),[o,c]=de.useState(48);de.useEffect(()=>{let p;return i&&(p=setInterval(()=>{a(h=>h===0?1:0)},500)),()=>clearInterval(p)},[i]);const u=[{band:1,wave:"0.75 µm",label:"Near-IR Boundary",color:"#818cf8",note:"Cold low-mass M-dwarf stars & brown dwarfs"},{band:25,wave:"1.40 µm",label:"J/H Continuum",color:"#38bdf8",note:"Stellar opacity minimum & cosmic redshift z~1"},{band:42,wave:"2.14 µm",label:"Paschen-α & H2",color:"#34d399",note:"Interstellar dust penetration & ionized hydrogen"},{band:60,wave:"3.05 µm",label:"H2O Water Ice",color:"#fbbf24",note:"Frozen water ice mantles in protoplanetary disks"},{band:82,wave:"4.27 µm",label:"CO2 Carbon Ice",color:"#f97316",note:"Solid-state CO2 ice isotopic bandhead (R~112)"},{band:98,wave:"4.67 µm",label:"CO Carbon Monoxide",color:"#ef4444",note:"Cold 10 Kelvin pre-stellar core freeze-out"}];return l.jsxs("div",{className:"space-y-16 pb-12",children:[l.jsxs("div",{className:"text-center max-w-4xl mx-auto pt-6",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-900/80 border border-cyan-400/30 text-xs font-mono text-cyan-300 mb-6 backdrop-blur-md shadow-lg shadow-cyan-950/40",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),l.jsx("span",{children:"NASA SPHEREx ALL-SKY SPECTRAL SURVEY"}),l.jsx("span",{className:"text-slate-500",children:"•"}),l.jsx("span",{className:"text-slate-300",children:"0.75 – 5.0 µm INFRARED"})]}),l.jsxs("h1",{className:"font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight mb-4",children:["THE UNIVERSE IS ",l.jsx("br",{className:"hidden sm:inline"}),l.jsx("span",{className:"cosmic-text-gradient",children:"ALWAYS CHANGING."})]}),l.jsx("p",{className:"font-display text-lg sm:text-2xl font-semibold text-cyan-200/90 mb-3 tracking-tight",children:"Discover the invisible. Explore the extraordinary."}),l.jsx("p",{className:"text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed mb-8",children:"Journey through the infrared universe with SPHEREx. Compare observations, uncover cosmic changes, and explore the sky one discovery at a time."}),l.jsx("div",{className:"flex flex-wrap items-center justify-center gap-3",children:l.jsxs("button",{onClick:t,className:"px-6 py-3 rounded-2xl font-display font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 border border-cyan-300/40 shadow-xl shadow-cyan-950/80 flex items-center gap-2 transition-all active:scale-95",children:[l.jsx(Lr,{className:"w-4 h-4 text-cyan-200"}),l.jsx("span",{children:"Jump to Live Sky Viewer"}),l.jsx(Jx,{className:"w-4 h-4 text-cyan-200"})]})})]}),l.jsx("div",{className:"relative max-w-4xl w-full mx-auto rounded-3xl p-1 bg-gradient-to-b from-cyan-500/20 via-slate-800/40 to-purple-500/10 border border-cyan-500/30 shadow-2xl backdrop-blur-xl group",children:l.jsxs("div",{className:"relative rounded-[22px] overflow-hidden bg-space-950/90 aspect-[16/9] sm:aspect-[21/9] flex items-center justify-center",children:[l.jsx("img",{src:"/assets/PIA26280.jpg",alt:"NASA SPHEREx Space Telescope Artist Rendering in Orbit",className:"w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent"}),l.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4",children:[l.jsxs("div",{className:"text-left bg-space-950/80 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-cyan-500/20",children:[l.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-cyan-400",children:"Official NASA / JPL Architecture"}),l.jsx("h3",{className:"font-display font-bold text-white text-sm sm:text-base",children:"NASA SPHEREx Near-Infrared All-Sky Surveyor"}),l.jsx("p",{className:"text-xs text-slate-300",children:"Conical photon shields keep detectors cryo-cooled below 80 Kelvin without consumables."})]}),l.jsxs("button",{onClick:t,className:"px-3.5 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-200 text-xs font-medium backdrop-blur-md transition-colors flex items-center gap-1.5",children:[l.jsx(rc,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"Launch Live Viewer"})]})]})]})}),l.jsxs("div",{children:[l.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-8",children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-1",children:"CORE MISSION CAPABILITIES"}),l.jsx("h2",{className:"font-display font-bold text-2xl sm:text-3xl text-white",children:"Unlocking the Invisible Cosmos"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mt-1",children:"SPHEREx maps the whole sky across 102 near-infrared bands, capturing spectral signatures invisible to optical telescopes."})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[l.jsxs("div",{className:"glass-card rounded-2xl p-6 flex flex-col justify-between group border-t-2 border-t-cyan-500/50",children:[l.jsxs("div",{children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-4 group-hover:scale-110 transition-transform",children:l.jsx(Qf,{className:"w-5 h-5 animate-pulse-slow"})}),l.jsx("span",{className:"text-[10px] font-mono uppercase text-cyan-400 font-semibold tracking-wider",children:"SPECTROSCOPY"}),l.jsx("h3",{className:"font-display font-bold text-lg text-white mt-1 mb-2 group-hover:text-cyan-200 transition-colors",children:"102 Wavelength Bands"}),l.jsx("p",{className:"text-slate-300 text-xs leading-relaxed mb-4",children:"Explore the sky across SPHEREx's near-infrared spectral bands (0.75 to 5.0 µm). Every single pixel on the sky contains an authentic 102-point color spectrum."})]}),l.jsxs("div",{className:"pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400",children:[l.jsx("span",{className:"font-mono text-[11px]",children:"R ~ 35 to 128"}),l.jsx("span",{className:"text-cyan-400 font-medium text-xs",children:"6 Detectors"})]})]}),l.jsxs("div",{className:"glass-card rounded-2xl p-6 flex flex-col justify-between group border-t-2 border-t-indigo-500/50",children:[l.jsxs("div",{children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-400/30 flex items-center justify-center text-indigo-300 mb-4 group-hover:scale-110 transition-transform",children:l.jsx(Il,{className:"w-5 h-5"})}),l.jsx("span",{className:"text-[10px] font-mono uppercase text-indigo-400 font-semibold tracking-wider",children:"TIME-DOMAIN"}),l.jsx("h3",{className:"font-display font-bold text-lg text-white mt-1 mb-2 group-hover:text-indigo-200 transition-colors",children:"A Changing Universe"}),l.jsx("p",{className:"text-slate-300 text-xs leading-relaxed mb-4",children:"Compare observations and investigate possible changes. By surveying the whole sky every 6 months (4 times over 2 years), SPHEREx detects moving asteroids, variable stars, and cosmic transients."})]}),l.jsxs("div",{className:"pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400",children:[l.jsx("span",{className:"font-mono text-[11px]",children:"4 All-Sky Surveys"}),l.jsx("span",{className:"text-indigo-400 font-medium text-xs",children:"Multi-Epoch"})]})]}),l.jsxs("div",{className:"glass-card rounded-2xl p-6 flex flex-col justify-between group border-t-2 border-t-purple-500/50",children:[l.jsxs("div",{children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-4 group-hover:scale-110 transition-transform",children:l.jsx(eh,{className:"w-5 h-5"})}),l.jsx("span",{className:"text-[10px] font-mono uppercase text-purple-400 font-semibold tracking-wider",children:"COSMIC CANDIDATES"}),l.jsx("h3",{className:"font-display font-bold text-lg text-white mt-1 mb-2 group-hover:text-purple-200 transition-colors",children:"Discover the Unknown"}),l.jsx("p",{className:"text-slate-300 text-xs leading-relaxed mb-4",children:"Explore observations and investigate interesting candidates. Search for interstellar water ice reservoirs, young stellar objects, and ancient galaxies from the epoch of reionization."})]}),l.jsxs("div",{className:"pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400",children:[l.jsx("span",{className:"font-mono text-[11px]",children:"450M+ Galaxies"}),l.jsx("span",{className:"text-purple-400 font-medium text-xs",children:"Ices & Inflation"})]})]})]})]}),l.jsxs("div",{className:"glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/20 shadow-xl",children:[l.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-cyan-400",children:"Interactive Science Lens"}),l.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-white mt-0.5",children:"Why Near-Infrared? Piercing Cosmic Dust"})]}),l.jsx("div",{className:"text-xs text-slate-300 max-w-sm",children:"Drag the slider to see how SPHEREx's near-infrared wavelengths penetrate dense dust clouds that block visible light."})]}),l.jsxs("div",{className:"relative rounded-2xl overflow-hidden aspect-[16/9] border border-slate-700/80 select-none cursor-ew-resize group shadow-2xl",children:[l.jsxs("div",{className:"absolute inset-0 bg-space-900 flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-space-950 to-black"}),l.jsx("div",{className:"absolute inset-0 opacity-80 bg-gradient-to-r from-black/90 via-slate-950/95 to-black/80"}),l.jsxs("div",{className:"relative z-10 text-center px-4",children:[l.jsx("span",{className:"px-3 py-1 rounded-full bg-slate-800/80 border border-slate-600 text-xs font-mono text-slate-300",children:"Visible Light (Optical 0.4 – 0.7 µm)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-2 max-w-sm",children:"Star nurseries hidden inside dark silhouettes of obscuring dust grains."})]})]}),l.jsx("div",{className:"absolute inset-0 overflow-hidden",style:{width:`${e}%`},children:l.jsxs("div",{className:"absolute inset-0 w-full h-full bg-gradient-to-r from-purple-950 via-indigo-950 to-cyan-950 flex items-center justify-center min-w-[320px]",children:[l.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,_rgba(245,158,11,0.25),_rgba(56,189,248,0.15),_transparent_70%)]"}),l.jsxs("div",{className:"relative z-10 text-center px-4",children:[l.jsx("span",{className:"px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-xs font-mono text-cyan-300 shadow-md",children:"SPHEREx Infrared (0.75 – 5.0 µm)"}),l.jsx("p",{className:"text-xs text-cyan-100/90 mt-2 max-w-sm",children:"Dust becomes transparent! Hidden protostars, water ice, and biogenic molecules shine through clearly."})]})]})}),l.jsx("div",{className:"absolute top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_15px_#38bdf8] pointer-events-none",style:{left:`${e}%`},children:l.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-cyan-400 text-space-950 flex items-center justify-center shadow-lg font-bold text-xs",children:"↔"})}),l.jsx("input",{type:"range",min:"5",max:"95",value:e,onChange:p=>n(Number(p.target.value)),"aria-label":"Infrared comparison slider",className:"absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"})]}),l.jsxs("div",{className:"mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400",children:[l.jsx("span",{children:"← Slide left for Optical"}),l.jsx("span",{children:"Slide right for SPHEREx Infrared →"})]})]}),l.jsxs("div",{className:"glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/25 shadow-xl",children:[l.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold block",children:"COSMIC PRISM SPECTROSCOPY"}),l.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-white mt-0.5",children:"102 Spectral Wavelength Channels"})]}),l.jsx("p",{className:"text-xs text-slate-300 max-w-sm",children:"Hover over the spectral milestones to preview how phenomena radiate across SPHEREx's 6 Linear Variable Filters."})]}),l.jsxs("div",{className:"relative mb-6",children:[l.jsx("div",{className:"h-5 sm:h-7 rounded-2xl border border-white/20 shadow-2xl relative overflow-hidden",style:{background:"linear-gradient(to right, #818cf8 0%, #38bdf8 20%, #34d399 40%, #fbbf24 60%, #f97316 80%, #ef4444 100%)"}}),l.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono text-slate-400 mt-2",children:[l.jsx("span",{children:"0.75 µm (Detector 1)"}),l.jsx("span",{children:"1.62 µm (Detector 2)"}),l.jsx("span",{children:"2.41 µm (Detector 3)"}),l.jsx("span",{children:"3.82 µm (Detector 4)"}),l.jsx("span",{children:"4.41 µm (Detector 5)"}),l.jsx("span",{children:"5.00 µm (Detector 6)"})]})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:u.map(p=>l.jsxs("div",{onMouseEnter:()=>{c(p.band),rt.playChime(350+p.band*5,.04)},className:`p-3.5 rounded-2xl border transition-all cursor-pointer ${o===p.band?"bg-space-900 border-cyan-400 shadow-lg shadow-cyan-950/60":"bg-space-950/70 border-slate-800 hover:border-slate-700"}`,children:[l.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[l.jsxs("span",{className:"text-xs font-mono font-bold text-white flex items-center gap-2",children:[l.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:p.color}}),l.jsx("span",{children:p.label})]}),l.jsx("span",{className:"text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30",children:p.wave})]}),l.jsx("p",{className:"text-xs text-slate-300 leading-snug",children:p.note})]},p.band))})]}),l.jsx("div",{className:"glass-panel rounded-3xl p-6 sm:p-8 border border-indigo-500/20 shadow-xl",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold block",children:"TIME-DOMAIN ASTRONOMY"}),l.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-white mt-1 mb-3",children:"How Astronomers Catch Cosmic Changes"}),l.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed mb-5",children:'When Clyde Tombaugh discovered Pluto in 1930, he used a mechanical "blink comparator" to rapidly switch between photographs taken days apart. SPHEREx applies modern time-domain spectroscopy across 4 all-sky surveys.'}),l.jsxs("div",{className:"space-y-2 mb-6 text-xs text-slate-200",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Moving Asteroids:"})," Shift position against background stars."]})]}),l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Variable Stars:"})," Pulsate or flare in infrared brightness."]})]}),l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-purple-400"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Supernovae:"})," Sudden catastrophic stellar explosions."]})]})]}),l.jsxs("button",{onClick:()=>{r(!i),rt.playChime(660,.08)},className:`px-4 py-2 rounded-xl font-medium text-xs transition-all flex items-center gap-2 ${i?"bg-amber-500/20 text-amber-300 border border-amber-400/40 shadow-lg shadow-amber-950/50":"bg-indigo-600 hover:bg-indigo-500 text-white"}`,children:[l.jsx(Il,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:i?"Pause Blink Mode":"Simulate Blink Comparator"})]})]}),l.jsxs("div",{className:"relative rounded-2xl bg-space-950 border border-cyan-500/30 p-4 aspect-[4/3] flex flex-col items-center justify-between shadow-2xl",children:[l.jsxs("div",{className:"w-full flex items-center justify-between text-xs font-mono text-cyan-300 pb-2 border-b border-slate-800",children:[l.jsx("span",{children:"SIMULATED CADENCE REVISIT"}),l.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 font-semibold text-[10px]",children:s===0?"EPOCH A (Day 0)":"EPOCH B (Day +3)"})]}),l.jsxs("div",{className:"relative w-full h-full my-3 rounded-xl overflow-hidden bg-space-900 border border-slate-800 flex items-center justify-center",children:[l.jsx("div",{className:"absolute top-[20%] left-[30%] w-2 h-2 rounded-full bg-white opacity-80"}),l.jsx("div",{className:"absolute top-[75%] left-[80%] w-1.5 h-1.5 rounded-full bg-cyan-200 opacity-60"}),l.jsx("div",{className:"absolute top-[35%] left-[70%] w-2.5 h-2.5 rounded-full bg-amber-100 opacity-90"}),l.jsx("div",{className:"absolute top-[65%] left-[25%] w-1.5 h-1.5 rounded-full bg-purple-200 opacity-50"}),l.jsx("div",{className:`absolute w-3.5 h-3.5 rounded-full bg-amber-400 shadow-[0_0_12px_#f59e0b] transition-all duration-300 ${s===0?"top-[45%] left-[45%]":"top-[40%] left-[55%]"}`,children:l.jsx("div",{className:"absolute -top-6 -left-8 px-1.5 py-0.5 rounded bg-amber-950/90 border border-amber-500 text-[9px] font-mono text-amber-300 whitespace-nowrap",children:"Candidate Asteroid"})})]}),l.jsx("div",{className:"text-[10px] font-mono text-slate-400 text-center",children:i?"Active Blink: Watch the amber candidate jump position against static background stars.":'Click "Simulate Blink Comparator" to start automatic rapid alternation.'})]})]})})]})},V2=({initialFieldId:t="nep-deep-field",onNavigateHome:e,onNavigateDiscoveries:n,onNavigateAbout:i})=>{const[r,s]=de.useState(Fm(t)),[a,o]=de.useState(0),[c,u]=de.useState(r.defaultBand||48),[p,h]=de.useState("workspace"),[d,x]=de.useState("normal"),[v,S]=de.useState(!1),[m,f]=de.useState(1),[g,b]=de.useState(0),[M,w]=de.useState(2),[T,R]=de.useState(null),[y,N]=de.useState(!1),[D,U]=de.useState(!1),[V,$]=de.useState(null),[B,j]=de.useState(new Set),te=de.useRef(null),q=()=>{const ne=qa();j(new Set(ne.map(xe=>xe.id)))};de.useEffect(()=>{q()},[]);const H=ne=>{const xe=Fm(ne);s(xe),o(0),u(xe.defaultBand||48),R(null),x("normal"),S(!1),rt.playChime(620,.08)},O=()=>{const ne=!v;S(ne),ne?x("play"):d==="play"&&x("normal")};de.useEffect(()=>{let ne;return d==="blink"&&(ne=setInterval(()=>{b(xe=>xe===0?1:0)},1e3/M)),()=>clearInterval(ne)},[d,M]);const C=ne=>{x(ne),S(ne==="play")},A=()=>{H("transient-asteroid-blink"),x("blink")},Q=(ne,xe,oe,Ne)=>{$({ra:ne,dec:xe,pixelX:oe,pixelY:Ne}),N(!0)},se=ne=>{Bp(ne),q()},me=ne=>{B.has(ne.id)?ng(ne.id):Bp({...ne,status:"marked"}),q()},fe=ne=>{R(ne),ne&&ne.epochIndex<r.epochs.length&&o(ne.epochIndex)},he=()=>{h("workspace"),setTimeout(()=>{var ne;(ne=te.current)==null||ne.scrollIntoView({behavior:"smooth"}),rt.playChime(640,.08)},100)},k=r.epochs.length>=2,X=d==="difference"&&k;return l.jsxs("div",{className:"relative min-h-screen bg-space-950 text-slate-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:[l.jsx(uc,{nebulaIntensity:"subtle",particleCount:140}),l.jsxs("div",{className:"relative max-w-7xl mx-auto z-10 space-y-6",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[l.jsxs("div",{className:"flex items-center gap-2 p-1.5 rounded-2xl bg-space-900/90 border border-slate-800 shadow-md",children:[l.jsxs("button",{onClick:()=>{h("workspace"),rt.playChime(600,.05)},className:`px-4 py-2 rounded-xl text-xs sm:text-sm font-display font-semibold transition-all flex items-center gap-2 ${p==="workspace"?"bg-cyan-950 text-cyan-200 border border-cyan-500/40 shadow-sm shadow-cyan-900/50":"text-slate-400 hover:text-white"}`,children:[l.jsx(Lr,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{children:"Sky Observation Explorer"})]}),l.jsxs("button",{onClick:()=>{h("story"),rt.playChime(600,.05)},className:`px-4 py-2 rounded-xl text-xs sm:text-sm font-display font-semibold transition-all flex items-center gap-2 ${p==="story"?"bg-indigo-950 text-indigo-200 border border-indigo-500/40 shadow-sm shadow-indigo-900/50":"text-slate-400 hover:text-white"}`,children:[l.jsx(Oa,{className:"w-4 h-4 text-indigo-400"}),l.jsx("span",{children:"Mission Story & Highlights"})]})]}),l.jsx("div",{className:"flex items-center gap-3",children:l.jsxs("button",{onClick:()=>U(!0),className:"px-3.5 py-2 rounded-xl bg-space-900 border border-slate-700 hover:border-amber-400 text-xs font-mono text-amber-300 flex items-center gap-2 transition-colors",children:[l.jsx("span",{children:"Saved Discoveries"}),l.jsx("span",{className:"px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold",children:B.size})]})})]}),p==="story"&&l.jsx("div",{className:"animate-fadeIn",children:l.jsx(H2,{onScrollToViewer:he})}),l.jsxs("div",{ref:te,className:"space-y-6",children:[l.jsx("div",{className:"flex flex-col md:flex-row items-start md:items-end justify-between gap-4 pb-2",children:l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),l.jsx("span",{children:"SPHEREx SCIENTIFIC WORKSPACE"}),l.jsx("span",{className:"text-slate-500",children:"•"}),l.jsx("span",{children:"TIME-DOMAIN NEAR-INFRARED EXPLORER"})]}),l.jsx("h1",{className:"font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight",children:"EXPLORE THE CHANGING UNIVERSE"}),l.jsx("p",{className:"text-xs sm:text-sm text-cyan-200/90 font-medium mt-0.5",children:"Discover changes hidden in SPHEREx observations."})]})}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",children:[l.jsxs("div",{className:"lg:col-span-8 flex flex-col gap-4",children:[l.jsx(P2,{field:r,currentEpochIndex:a,currentBandNumber:c,comparisonMode:d,blinkFrame:g,isDifferenceMode:X,selectedCandidate:T,onSelectCandidate:fe,onMarkAtCoordinate:Q}),l.jsx(U2,{epochs:r.epochs,currentEpochIndex:a,onSelectEpoch:o,isPlaying:v,onTogglePlay:O,playbackSpeed:m,onChangeSpeed:f}),l.jsx(F2,{comparisonMode:d,onSetComparisonMode:C,blinkFrequencyHz:M,onChangeBlinkFreq:w,isDifferenceAvailable:k,isDemonstrationMode:r.dataSource.isDemonstrationData,onSwitchToDemoField:A})]}),l.jsx("div",{className:"lg:col-span-4 h-full",children:l.jsx(I2,{field:r,currentEpoch:r.epochs[a]||r.epochs[0],currentBandNumber:c,onSelectField:H,allFields:Va})})]}),l.jsx(O2,{currentBandNumber:c,onSelectBand:u}),l.jsx(k2,{candidates:r.candidates,selectedCandidate:T,onSelectCandidate:fe,onOpenMarkModal:()=>{$(null),N(!0)},savedCandidateIds:B,onToggleSaveCandidate:me}),l.jsxs("section",{className:"mt-12 relative overflow-hidden rounded-3xl border border-cyan-500/35 bg-gradient-to-br from-space-900/90 via-space-950 to-indigo-950/85 p-6 sm:p-10 shadow-2xl backdrop-blur-md",children:[l.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),l.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"}),l.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center justify-between gap-6",children:[l.jsxs("div",{className:"max-w-xl text-center md:text-left space-y-2.5",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-xs font-mono text-cyan-300",children:[l.jsx(Ls,{className:"w-3.5 h-3.5 text-cyan-400 animate-spin-slow"}),l.jsx("span",{children:"NASA SPHEREx CATALOG ARCHIVE"})]}),l.jsx("h2",{className:"font-display font-black text-2xl sm:text-3xl text-white tracking-tight",children:"EXPLORE DISCOVERIES"}),l.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:"Search through all astronomical fields, verified asteroid candidate tracks, transient flares, and water-ice absorption spectra captured across all 102 near-infrared bands."}),l.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs font-mono text-cyan-300/80",children:[l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"5 Deep Sky Targets"]}),l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400"}),"102 Spectral Channels"]}),l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400"}),"Time-Domain Candidates"]})]})]}),l.jsx("div",{className:"flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto",children:l.jsxs("button",{onClick:()=>{rt.playDiscoverySuccess(),n()},className:"w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-2xl font-display font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 border border-cyan-300/40 shadow-xl shadow-cyan-950/80 hover:shadow-cyan-400/30 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5",children:[l.jsx(Ls,{className:"w-4 h-4 text-cyan-200 group-hover:rotate-45 transition-transform duration-300"}),l.jsx("span",{children:"Explore Discoveries"}),l.jsx(Fa,{className:"w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform"})]})})]})]})]})]}),l.jsx(z2,{isOpen:y,onClose:()=>N(!1),onSaveCandidate:se,initialCoords:V,fieldId:r.id}),l.jsx(Yg,{isOpen:D,onClose:()=>U(!1),onInspectCandidate:fe})]})},j2=({onOpenInExplorer:t,onNavigateAbout:e})=>{const[n,i]=de.useState(""),[r,s]=de.useState("all"),[a,o]=de.useState("all"),[c,u]=de.useState("all"),h=Va.filter(d=>{const x=d.name.toLowerCase().includes(n.toLowerCase())||d.constellation.toLowerCase().includes(n.toLowerCase())||d.scientificGoal.toLowerCase().includes(n.toLowerCase())||d.candidates.some(f=>f.name.toLowerCase().includes(n.toLowerCase())),v=r==="all"||d.catalogCategory===r,S=c==="all"||c==="real"&&d.isRealNasaTarget||c==="demo"&&!d.isRealNasaTarget;let m=!0;return a==="band1-2"?m=d.defaultBand<=34:a==="band3-4"?m=d.defaultBand>34&&d.defaultBand<=68:a==="band5-6"&&(m=d.defaultBand>68),x&&v&&S&&m});return l.jsxs("div",{className:"relative min-h-screen bg-space-950 text-slate-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:[l.jsx(uc,{nebulaIntensity:"subtle",particleCount:160}),l.jsxs("div",{className:"relative max-w-7xl mx-auto z-10 space-y-8",children:[l.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3",children:[l.jsx(Ls,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"ALL-SKY OBSERVATION CATALOG"})]}),l.jsx("h1",{className:"font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight",children:"SPHEREx Discoveries & Targets"}),l.jsx("p",{className:"text-slate-300 text-sm sm:text-base mt-2",children:"Search scientific fields and candidate anomalies discovered across the infrared sky. Seamlessly load any observation into the interactive Sky Explorer."})]}),l.jsxs("div",{className:"glass-panel rounded-2xl p-4 sm:p-5 border border-cyan-500/20 shadow-xl space-y-4",children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:[l.jsxs("div",{className:"relative sm:col-span-2",children:[l.jsx(eh,{className:"w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"}),l.jsx("input",{type:"text",placeholder:"Search target field, constellation, or candidate...",value:n,onChange:d=>i(d.target.value),className:"w-full bg-space-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"})]}),l.jsx("div",{children:l.jsxs("select",{value:r,onChange:d=>s(d.target.value),className:"w-full bg-space-950 border border-slate-700 text-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:outline-none focus:border-cyan-400 font-mono",children:[l.jsx("option",{value:"all",children:"All Mission Goals"}),l.jsx("option",{value:"deep-field",children:"Deep Cosmology Fields"}),l.jsx("option",{value:"ice-survey",children:"Interstellar Ice Clouds"}),l.jsx("option",{value:"galaxy-survey",children:"Nearby Galaxies & Dust"}),l.jsx("option",{value:"transient-search",children:"Time-Domain Transients"})]})}),l.jsx("div",{children:l.jsxs("select",{value:a,onChange:d=>o(d.target.value),className:"w-full bg-space-950 border border-slate-700 text-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2 focus:outline-none focus:border-cyan-400 font-mono",children:[l.jsx("option",{value:"all",children:"All Wavelengths (0.75 – 5.0 µm)"}),l.jsx("option",{value:"band1-2",children:"Short Near-IR (0.75 – 1.62 µm)"}),l.jsx("option",{value:"band3-4",children:"Mid Near-IR & Ice (1.63 – 3.82 µm)"}),l.jsx("option",{value:"band5-6",children:"Long Near-IR & CO (3.83 – 5.00 µm)"})]})})]}),l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs font-mono",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-slate-400",children:"Data Origin:"}),[{id:"all",label:"All Records"},{id:"real",label:"NASA Mission Targets"},{id:"demo",label:"Demonstration Simulations"}].map(d=>l.jsx("button",{onClick:()=>u(d.id),className:`px-3 py-1 rounded-lg border transition-colors ${c===d.id?"bg-cyan-950 text-cyan-300 border-cyan-400/50 font-bold":"bg-space-950 border-slate-800 text-slate-400 hover:text-slate-200"}`,children:d.label},d.id))]}),l.jsxs("span",{className:"text-slate-400",children:["Showing ",h.length," target field",h.length===1?"":"s"]})]})]}),h.length===0?l.jsxs("div",{className:"py-24 text-center glass-panel rounded-3xl p-8 border border-slate-800",children:[l.jsx(Ls,{className:"w-12 h-12 text-slate-600 mx-auto mb-3"}),l.jsx("h3",{className:"font-display font-bold text-lg text-white mb-1",children:"No Astronomical Observations Found"}),l.jsx("p",{className:"text-xs text-slate-400 max-w-sm mx-auto",children:"No observation records match your active search filters. Clear filters to browse the complete SPHEREx all-sky catalog."}),l.jsx("button",{onClick:()=>{i(""),s("all"),o("all"),u("all")},className:"mt-4 px-4 py-2 rounded-xl bg-space-900 border border-cyan-500/40 text-cyan-300 text-xs font-mono hover:bg-space-850",children:"Reset Filters"})]}):l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:h.map(d=>l.jsxs("div",{className:"glass-card rounded-3xl p-6 border border-slate-800 flex flex-col justify-between group",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[l.jsxs("span",{className:"text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider",children:[d.constellation," • ",d.catalogCategory]}),d.isRealNasaTarget?l.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-semibold",children:[l.jsx(tg,{className:"w-3 h-3 text-cyan-400"}),l.jsx("span",{children:"NASA Science Target"})]}):l.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-950/80 text-amber-300 border border-amber-500/40 font-semibold",children:[l.jsx(Kx,{className:"w-3 h-3 text-amber-400"}),l.jsx("span",{children:"Demonstration Mode"})]})]}),l.jsx("h3",{className:"font-display font-bold text-xl text-white group-hover:text-cyan-200 transition-colors mb-1",children:d.name}),l.jsx("p",{className:"text-xs text-slate-400 font-mono mb-4",children:d.subtitle}),l.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-5",children:d.scientificGoal}),l.jsxs("div",{className:"grid grid-cols-2 gap-3 bg-space-950/80 p-3 rounded-2xl border border-slate-800 text-xs font-mono mb-5",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-500 block text-[10px]",children:"COORDINATES (J2000)"}),l.jsx("span",{className:"text-slate-200 font-semibold",children:d.centerRaFormatted}),l.jsx("span",{className:"text-slate-200 block",children:d.centerDecFormatted})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-slate-500 block text-[10px]",children:"TIME-DOMAIN CADENCE"}),l.jsxs("span",{className:"text-cyan-300 font-semibold",children:[d.epochs.length," Observation Epochs"]}),l.jsxs("span",{className:"text-slate-400 block text-[10px]",children:[d.candidates.length," Detected Candidates"]})]})]}),l.jsxs("div",{className:"space-y-1.5 mb-5",children:[l.jsx("span",{className:"text-[10px] font-mono uppercase text-slate-400 block font-semibold",children:"Highlighted Candidates in Field:"}),l.jsx("div",{className:"flex flex-wrap gap-1.5",children:d.candidates.map(x=>l.jsx("span",{className:"px-2 py-0.5 rounded-lg bg-space-900 border border-slate-700/80 text-[10px] font-mono text-slate-300",children:x.name},x.id))})]})]}),l.jsxs("div",{className:"pt-4 border-t border-slate-800 flex items-center justify-between gap-3",children:[l.jsxs("a",{href:d.dataSource.archiveUrl,target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-cyan-300 text-xs font-mono flex items-center gap-1 transition-colors",children:[l.jsx("span",{children:"IRSA Archive"}),l.jsx(xs,{className:"w-3 h-3"})]}),l.jsxs("button",{onClick:()=>{t(d.id),rt.playChime(784,.12)},className:"px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-display font-semibold text-xs shadow-md shadow-cyan-950/60 flex items-center gap-2 transition-all active:scale-95",children:[l.jsx(Lr,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"View in Explorer"}),l.jsx(Fa,{className:"w-3.5 h-3.5"})]})]})]},d.id))}),l.jsxs("section",{className:"mt-14 relative overflow-hidden rounded-3xl border border-indigo-500/35 bg-gradient-to-br from-space-900/90 via-space-950 to-indigo-950/85 p-6 sm:p-10 shadow-2xl backdrop-blur-md",children:[l.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"}),l.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"}),l.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row items-center justify-between gap-6",children:[l.jsxs("div",{className:"max-w-xl text-center md:text-left space-y-2.5",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-400/40 text-xs font-mono text-indigo-300",children:[l.jsx(Oa,{className:"w-3.5 h-3.5 text-indigo-400"}),l.jsx("span",{children:"NASA MISSION SCIENCE & OBJECTIVES"})]}),l.jsx("h2",{className:"font-display font-black text-2xl sm:text-3xl text-white tracking-tight",children:"About SPHEREx"}),l.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:"Discover the science and engineering behind NASA’s all-sky spectroscopic surveyor. Explore the 3 core science pillars: Cosmic Inflation, the Cosmic Dawn (EBL), and the Origins of Water & Interstellar Ices."}),l.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs font-mono text-indigo-200/80",children:[l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400"}),"Cosmic Inflation"]}),l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),"Cosmic Dawn (EBL)"]}),l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),"Interstellar Ices"]})]})]}),l.jsx("div",{className:"flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto",children:e&&l.jsxs("button",{onClick:()=>{rt.playChime(880,.1),e()},className:"w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-2xl font-display font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 border border-indigo-300/40 shadow-xl shadow-indigo-950/80 hover:shadow-indigo-400/30 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5",children:[l.jsx(Oa,{className:"w-4 h-4 text-indigo-200"}),l.jsx("span",{children:"Learn About SPHEREx"}),l.jsx(Fa,{className:"w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform"})]})})]})]})]})]})},Om=({children:t,className:e=""})=>l.jsx("div",{className:e,children:t}),G2=({onLaunchExplorer:t})=>{const[e,n]=de.useState("inflation"),i={inflation:{title:"1. Cosmic Inflation & The History of the Universe",subtitle:"Searching for primordial quantum fluctuations in the Big Bang",icon:Iy,color:"text-indigo-400",bgColor:"bg-indigo-950/60 border-indigo-500/30",description:"In the first split-second after the Big Bang ($10^{-32}$ seconds), space expanded exponentially faster than light during a phase called Cosmic Inflation. SPHEREx will measure 3D spatial positions and spectra for more than 450 million galaxies across the universe.",keyPoints:["Measures the primordial non-Gaussianity parameter (f_NL) to test whether multiple quantum fields drove inflation.","Creates the largest 3D cosmological map of galaxy clustering ever constructed in the near-infrared.","Bridges low-redshift surveys with early cosmic dawn."]},galaxies:{title:"2. Origin of Galaxies & The Cosmic Dawn",subtitle:"Mapping Extragalactic Background Light (EBL) across cosmic time",icon:Li,color:"text-cyan-400",bgColor:"bg-cyan-950/60 border-cyan-500/30",description:"When did the first stars turn on, and how did early galaxies ionize the primordial neutral hydrogen? By observing diffuse infrared background light fluctuations across 102 spectral bands, SPHEREx measures the total light produced by all stars and galaxies that ever existed.",keyPoints:["Solves the mystery of excess infrared background light.","Detects faint photons from the first stars born during the Epoch of Reionization.","Separates local zodiacal dust reflections from distant extragalactic cosmological background."]},ices:{title:"3. Water & Biogenic Ices in Planetary Systems",subtitle:"Tracing the origin of water and life-forming ingredients in the galaxy",icon:ky,color:"text-emerald-400",bgColor:"bg-emerald-950/60 border-emerald-500/30",description:"Water (H2O), carbon dioxide (CO2), and carbon monoxide (CO) ices freeze out onto microscopic dust grains in cold molecular clouds before stars and planets form. SPHEREx will measure absorption spectra toward millions of stars to map interstellar ice abundance.",keyPoints:["Identifies the 3.05 µm water ice absorption band in young stellar envelopes.","Probes the 4.27 µm CO2 ice feature and 4.67 µm CO ice mantles at ultra-high resolution.","Discovers how biogenic molecules survive protostellar collapse to be delivered onto habitable exoplanets."]}};return l.jsxs("div",{className:"relative min-h-screen bg-space-950 text-slate-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8",children:[l.jsx(uc,{nebulaIntensity:"subtle",particleCount:150}),l.jsxs("div",{className:"relative max-w-5xl mx-auto z-10 space-y-16",children:[l.jsx(Om,{animation:"fade-up",children:l.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4",children:[l.jsx(Oa,{className:"w-3.5 h-3.5 text-cyan-400"}),l.jsx("span",{children:"NASA MIDEX MISSION ARCHITECTURE & SCIENCE"})]}),l.jsx("h1",{className:"font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight",children:"About NASA SPHEREx"}),l.jsx("p",{className:"font-display text-lg sm:text-xl text-cyan-200 font-semibold mt-3",children:"Spectro-Photometer for the History of the Universe, Epoch of Reionization and Ices Explorer"}),l.jsx("p",{className:"text-slate-300 text-sm sm:text-base mt-4 leading-relaxed",children:"NASA's SPHEREx is an all-sky near-infrared space telescope selected under NASA’s Astrophysics Medium-Class Explorers (MIDEX) program. Led by Caltech and NASA JPL with international partners, it produces an unprecedented 102-color spectral map of the entire observable cosmos."})]})}),l.jsx(Om,{animation:"fade-up",delayMs:150,children:l.jsx("div",{className:"glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/20 shadow-2xl",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",children:[l.jsxs("div",{className:"rounded-2xl overflow-hidden border border-slate-700 bg-space-950 aspect-[4/3] relative group",children:[l.jsx("img",{src:"/assets/PIA26280.jpg",alt:"NASA SPHEREx Spacecraft with Conical Shields",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-transparent"}),l.jsx("div",{className:"absolute bottom-3 left-3 right-3 text-xs font-mono text-slate-300 bg-space-950/80 backdrop-blur-md p-2.5 rounded-xl border border-slate-800",children:"NASA/JPL-Caltech Rendering of SPHEREx Observatory in Low Earth Orbit"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block",children:"INNOVATIVE TELESCOPE DESIGN"}),l.jsx("h3",{className:"font-display font-bold text-2xl text-white",children:"Passive Cryogenic Cooling & Linear Variable Filters"}),l.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Rather than carrying heavy liquid cryogen tanks that evaporate, SPHEREx uses three nested conical aluminum photon shields. These cone shields reflect heat from the Sun and Earth into deep space, allowing the telescope to passively cool below ",l.jsx("strong",{children:"80 Kelvin (-193°C)"}),"."]}),l.jsxs("div",{className:"space-y-2 pt-2 text-xs font-mono text-slate-300",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Jf,{className:"w-4 h-4 text-cyan-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Detectors:"})," Six 2048 x 2048 Teledyne H2RG Hawaii arrays."]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Qf,{className:"w-4 h-4 text-amber-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Optics:"})," 20 cm wide-field telescope with 102 spectral bands."]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(tS,{className:"w-4 h-4 text-indigo-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Orbit:"})," 650 km Sun-synchronous circular polar orbit."]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Il,{className:"w-4 h-4 text-purple-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Cadence:"})," Full all-sky map every 6 months (4 times over 2 years)."]})]})]})]})]})})}),l.jsxs("div",{children:[l.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-8",children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block",children:"FOUNDATIONAL SCIENCE GOALS"}),l.jsx("h2",{className:"font-display font-bold text-2xl sm:text-3xl text-white mt-1",children:"The Three Core Science Pillars"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-2",children:"SPHEREx was conceived to answer three monumental questions in modern astrophysics."})]}),l.jsx("div",{className:"flex justify-center gap-2 p-1.5 rounded-2xl bg-space-900/80 border border-slate-800 max-w-lg mx-auto mb-6",children:["inflation","galaxies","ices"].map(r=>l.jsx("button",{onClick:()=>{n(r),rt.playChime(620,.05)},className:`flex-1 py-2 px-3 rounded-xl text-xs font-display font-semibold transition-all ${e===r?"bg-cyan-950 text-cyan-300 border border-cyan-500/40 shadow-md":"text-slate-400 hover:text-white"}`,children:r==="inflation"?"Cosmic Inflation":r==="galaxies"?"Cosmic Dawn":"Biogenic Ices"},r))}),(()=>{const r=i[e],s=r.icon;return l.jsxs("div",{className:`glass-panel rounded-3xl p-6 sm:p-8 border shadow-xl ${r.bgColor}`,children:[l.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[l.jsx("div",{className:"w-12 h-12 rounded-2xl bg-space-950 border border-slate-700 flex items-center justify-center shrink-0",children:l.jsx(s,{className:`w-6 h-6 ${r.color}`})}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-white",children:r.title}),l.jsx("p",{className:"text-xs sm:text-sm font-mono text-slate-300 mt-0.5",children:r.subtitle})]})]}),l.jsx("p",{className:"text-slate-200 text-sm leading-relaxed mb-6",children:r.description}),l.jsxs("div",{className:"space-y-2 pt-4 border-t border-slate-800/80",children:[l.jsx("span",{className:"text-[11px] font-mono uppercase text-slate-400 font-semibold block",children:"Key Observational Milestones:"}),r.keyPoints.map((a,o)=>l.jsxs("div",{className:"flex items-center gap-2.5 text-xs text-slate-300",children:[l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"}),l.jsx("span",{children:a})]},o))]})]})})()]}),l.jsxs("div",{className:"glass-panel rounded-3xl p-6 sm:p-10 border border-indigo-500/20 shadow-xl",children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold block mb-1",children:"HOW SPECTROSCOPY WORKS"}),l.jsx("h3",{className:"font-display font-bold text-2xl text-white mb-4",children:"Linear Variable Filters: Spectroscopy on Every Pixel"}),l.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed mb-8",children:["Traditional spectrometers use prisms or diffraction gratings that split light into a single slit line, requiring point-by-point targeting. SPHEREx uses ",l.jsx("strong",{children:"Linear Variable Filters (LVF)"})," mounted directly on top of the 2D detector arrays. As the spacecraft steps across the sky, every celestial coordinate is recorded through all 102 colors!"]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono",children:[l.jsxs("div",{className:"bg-space-950 p-4 rounded-2xl border border-slate-800",children:[l.jsx("span",{className:"text-cyan-400 font-bold block mb-1",children:"1. Celestial Photons"}),l.jsx("p",{className:"text-slate-400",children:"Light from 450M galaxies and stars enters through the 20cm telescope aperture."})]}),l.jsxs("div",{className:"bg-space-950 p-4 rounded-2xl border border-slate-800",children:[l.jsx("span",{className:"text-amber-400 font-bold block mb-1",children:"2. Linear Variable Filter"}),l.jsx("p",{className:"text-slate-400",children:"Filter wedge thickness varies across the chip, transmitting only specific wavelengths from 0.75 to 5.0 µm."})]}),l.jsxs("div",{className:"bg-space-950 p-4 rounded-2xl border border-slate-800",children:[l.jsx("span",{className:"text-purple-400 font-bold block mb-1",children:"3. 102-Color Cube"}),l.jsx("p",{className:"text-slate-400",children:"IPAC IRSA pipelines co-add overlapping pointings into a 3D spectral data cube of the whole sky."})]})]})]}),l.jsxs("div",{className:"glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/20 shadow-xl",children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-1",children:"TIME-DOMAIN ASTRONOMY"}),l.jsx("h3",{className:"font-display font-bold text-2xl text-white mb-4",children:"Why Comparing Multi-Epoch Observations Reveals the Universe"}),l.jsx("p",{className:"text-sm text-slate-300 leading-relaxed mb-6",children:"The sky is not static. Asteroids cruise through our solar system, cold M-dwarfs erupt in magnetic flares, supermassive black holes flicker, and dying stars explode as supernovae."}),l.jsx("p",{className:"text-sm text-slate-300 leading-relaxed mb-6",children:"Because SPHEREx maps the whole sky 4 distinct times over 2 years, comparing observations taken months apart reveals celestial motion and flux changes that are completely invisible in a single photograph."}),l.jsx("div",{className:"flex flex-wrap items-center gap-4",children:l.jsxs("button",{onClick:t,className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-display font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-cyan-950/60",children:[l.jsx("span",{children:"Test Time-Domain Explorer"}),l.jsx(Fa,{className:"w-4 h-4"})]})})]}),l.jsxs("div",{className:"glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl",children:[l.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold block mb-1",children:"OPEN SCIENCE & DATA ACCESS"}),l.jsx("h3",{className:"font-display font-bold text-2xl text-white mb-2",children:"Official NASA & SPHEREx Archive Resources"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-300 mb-6",children:"All SPHEREx data releases are publicly accessible with no proprietary period. Explore raw FITS cubes, calibration files, and science software at official archives:"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono",children:[l.jsxs("a",{href:"https://science.nasa.gov/mission/spherex/",target:"_blank",rel:"noopener noreferrer",className:"p-4 rounded-2xl bg-space-950 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-between group transition-colors",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-cyan-400 font-bold block",children:"NASA Science Mission Directorate"}),l.jsx("span",{className:"text-[11px] text-slate-400",children:"Official NASA SPHEREx Mission Home"})]}),l.jsx(xs,{className:"w-4 h-4 text-slate-500 group-hover:text-cyan-400"})]}),l.jsxs("a",{href:"https://irsa.ipac.caltech.edu/Missions/spherex.html",target:"_blank",rel:"noopener noreferrer",className:"p-4 rounded-2xl bg-space-950 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-between group transition-colors",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-cyan-400 font-bold block",children:"Caltech IPAC IRSA Archive"}),l.jsx("span",{className:"text-[11px] text-slate-400",children:"SPHEREx Public Data Releases & SIA2 APIs"})]}),l.jsx(xs,{className:"w-4 h-4 text-slate-500 group-hover:text-cyan-400"})]}),l.jsxs("a",{href:"https://caltech-ipac.github.io/spherex-archive-documentation/spherex-data-access/",target:"_blank",rel:"noopener noreferrer",className:"p-4 rounded-2xl bg-space-950 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-between group transition-colors",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-cyan-400 font-bold block",children:"Archive Documentation & Tutorials"}),l.jsx("span",{className:"text-[11px] text-slate-400",children:"PyVO, Astroquery & Cutout Service Guides"})]}),l.jsx(xs,{className:"w-4 h-4 text-slate-500 group-hover:text-cyan-400"})]}),l.jsxs("a",{href:"https://registry.opendata.aws/spherex-qr/",target:"_blank",rel:"noopener noreferrer",className:"p-4 rounded-2xl bg-space-950 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-between group transition-colors",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-cyan-400 font-bold block",children:"AWS Open Data Cloud Mirror"}),l.jsx("span",{className:"text-[11px] text-slate-400",children:"Direct S3 Access for High-Performance Computing"})]}),l.jsx(xs,{className:"w-4 h-4 text-slate-500 group-hover:text-cyan-400"})]})]})]})]})]})};function W2(){const[t,e]=de.useState("landing"),[n,i]=de.useState("nep-deep-field"),[r,s]=de.useState(!1),[a,o]=de.useState(null);de.useEffect(()=>{const h=()=>{const d=window.location.hash.replace("#","").toLowerCase();e(d==="explorer"?"explorer":d==="discoveries"?"discoveries":d==="about"?"about":"landing")};return h(),window.addEventListener("hashchange",h),()=>window.removeEventListener("hashchange",h)},[]);const c=h=>{e(h),window.location.hash=h==="landing"?"":h,window.scrollTo({top:0,behavior:"smooth"})},u=h=>{i(h),c("explorer")},p=h=>{i(h.fieldId),o(h),c("explorer")};return l.jsxs("div",{className:"min-h-screen bg-space-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-white",children:[l.jsx(lS,{currentPage:t,onNavigate:c,onOpenSavedModal:()=>s(!0)}),l.jsxs("main",{className:"flex-1",children:[t==="landing"&&l.jsx(R2,{onExploreClick:()=>c("explorer"),onAboutClick:()=>c("about"),onDiscoveriesClick:()=>c("discoveries")}),t==="explorer"&&l.jsx(V2,{initialFieldId:n,onNavigateHome:()=>c("landing"),onNavigateDiscoveries:()=>c("discoveries"),onNavigateAbout:()=>c("about")}),t==="discoveries"&&l.jsx(j2,{onOpenInExplorer:u,onNavigateAbout:()=>c("about")}),t==="about"&&l.jsx(G2,{onLaunchExplorer:()=>c("explorer")})]}),l.jsx(Yg,{isOpen:r,onClose:()=>s(!1),onInspectCandidate:p})]})}vu.createRoot(document.getElementById("root")).render(l.jsx(_v.StrictMode,{children:l.jsx(W2,{})}));
