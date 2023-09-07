/*! For license information please see 5a66928e.d1a21b77.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[685947],{280844:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>a});var t=n(824246),o=n(511151);const s={id:"plugin-splunk-on-call.oncallsresponse",title:"OnCallsResponse",description:"API reference for OnCallsResponse"},c=void 0,u={unversionedId:"reference/plugin-splunk-on-call.oncallsresponse",id:"reference/plugin-splunk-on-call.oncallsresponse",title:"OnCallsResponse",description:"API reference for OnCallsResponse",source:"@site/../docs/reference/plugin-splunk-on-call.oncallsresponse.md",sourceDirName:"reference",slug:"/reference/plugin-splunk-on-call.oncallsresponse",permalink:"/docs/reference/plugin-splunk-on-call.oncallsresponse",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-splunk-on-call.oncallsresponse.md",tags:[],version:"current",frontMatter:{id:"plugin-splunk-on-call.oncallsresponse",title:"OnCallsResponse",description:"API reference for OnCallsResponse"}},l={},a=[];function i(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-splunk-on-call",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-splunk-on-call"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-splunk-on-call.oncallsresponse",children:(0,t.jsx)(r.code,{children:"OnCallsResponse"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type OnCallsResponse = {\n    teamsOnCall: OnCall[];\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-splunk-on-call.oncall",children:"OnCall"})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,c,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var a in s=Object(arguments[l]))n.call(s,a)&&(u[a]=s[a]);if(r){c=r(s);for(var i=0;i<c.length;i++)t.call(s,c[i])&&(u[c[i]]=s[c[i]])}}return u}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),r.Fragment=s("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,s={},a=null,i=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(i=r.ref),r)u.call(r,t)&&!l.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:a,ref:i,props:s,_owner:c.current}}r.jsx=a,r.jsxs=a},541535:(e,r,n)=>{var t=n(862525),o=60103,s=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,u=60110,l=60112;r.Suspense=60113;var a=60115,i=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),s=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),c=f("react.provider"),u=f("react.context"),l=f("react.forward_ref"),r.Suspense=f("react.suspense"),a=f("react.memo"),i=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function v(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||y}function m(){}function g(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var _=g.prototype=new m;_.constructor=g,t(_,v.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function O(e,r,n){var t,s={},c=null,u=null;if(null!=r)for(t in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)j.call(r,t)&&!k.hasOwnProperty(t)&&(s[t]=r[t]);var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){for(var a=Array(l),i=0;i<l;i++)a[i]=arguments[i+2];s.children=a}if(e&&e.defaultProps)for(t in l=e.defaultProps)void 0===s[t]&&(s[t]=l[t]);return{$$typeof:o,type:e,key:c,ref:u,props:s,_owner:b.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function x(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,n,t,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var l=!1;if(null===e)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case s:l=!0}}if(l)return c=c(l=e),e=""===t?"."+x(l,0):t,Array.isArray(c)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),R(c,r,n,"",(function(e){return e}))):null!=c&&(C(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),r.push(c)),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var i=t+x(u=e[a],a);l+=R(u,r,n,i,c)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),a=0;!(u=e.next()).done;)l+=R(u=u.value,r,n,i=t+x(u,a++),c);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function S(e,r,n){if(null==e)return e;var t=[],o=0;return R(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:S,forEach:function(e,r,n){S(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(d(143));return e}},r.Component=v,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var s=t({},e.props),c=e.key,u=e.ref,l=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,l=b.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(i in r)j.call(r,i)&&!k.hasOwnProperty(i)&&(s[i]=void 0===r[i]&&void 0!==a?a[i]:r[i])}var i=arguments.length-2;if(1===i)s.children=n;else if(1<i){a=Array(i);for(var f=0;f<i;f++)a[f]=arguments[f+2];s.children=a}return{$$typeof:o,type:e.type,key:c,ref:u,props:s,_owner:l}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=O,r.createFactory=function(e){var r=O.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=C,r.lazy=function(e){return{$$typeof:i,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>u,ah:()=>s});var t=n(667294);const o=t.createContext({});function s(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function u({components:e,children:r,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||c:s(e),t.createElement(o.Provider,{value:u},r)}}}]);