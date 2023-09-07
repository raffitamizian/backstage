/*! For license information please see b7c66840.10d49f61.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[394748],{479824:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=t(824246),o=t(511151);const i={id:"core-app-api.signinpageprops",title:"SignInPageProps",description:"API reference for SignInPageProps"},c=void 0,a={unversionedId:"reference/core-app-api.signinpageprops",id:"reference/core-app-api.signinpageprops",title:"SignInPageProps",description:"API reference for SignInPageProps",source:"@site/../docs/reference/core-app-api.signinpageprops.md",sourceDirName:"reference",slug:"/reference/core-app-api.signinpageprops",permalink:"/docs/reference/core-app-api.signinpageprops",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.signinpageprops.md",tags:[],version:"current",frontMatter:{id:"core-app-api.signinpageprops",title:"SignInPageProps",description:"API reference for SignInPageProps"}},s={},u=[];function p(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.signinpageprops",children:(0,n.jsx)(r.code,{children:"SignInPageProps"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Props for the ",(0,n.jsx)(r.code,{children:"SignInPage"})," component of ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.appcomponents",children:"AppComponents"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type SignInPageProps = PropsWithChildren<{\n    onSignInSuccess(identityApi: IdentityApi): void;\n}>;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.identityapi",children:"IdentityApi"})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(p,e)})):p(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))t.call(i,u)&&(a[u]=i[u]);if(r){c=r(i);for(var p=0;p<c.length;p++)n.call(i,c[p])&&(a[c[p]]=i[c[p]])}}return a}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,i={},u=null,p=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(p=r.ref),r)a.call(r,n)&&!s.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:u,ref:p,props:i,_owner:c.current}}r.jsx=u,r.jsxs=u},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,a=60110,s=60112;r.Suspense=60113;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),c=f("react.provider"),a=f("react.context"),s=f("react.forward_ref"),r.Suspense=f("react.suspense"),u=f("react.memo"),p=f("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}function v(){}function m(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var _=m.prototype=new v;_.constructor=m,n(_,h.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,t){var n,i={},c=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(c=""+r.key),r)j.call(r,n)&&!P.hasOwnProperty(n)&&(i[n]=r[n]);var s=arguments.length-2;if(1===s)i.children=t;else if(1<s){for(var u=Array(s),p=0;p<s;p++)u[p]=arguments[p+2];i.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:o,type:e,key:c,ref:a,props:i,_owner:b.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,t,n,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return c=c(s=e),e=""===n?"."+w(s,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(k,"$&/")+"/"),x(c,r,t,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(k,"$&/")+"/")+e)),r.push(c)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=n+w(a=e[u],u);s+=x(a,r,t,p,c)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(a=e.next()).done;)s+=x(a=a.value,r,t,p=n+w(a,u++),c);else if("object"===a)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function C(e,r,t){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function R(){var e=I.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=m,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var i=n({},e.props),c=e.key,a=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,s=b.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in r)j.call(r,p)&&!P.hasOwnProperty(p)&&(i[p]=void 0===r[p]&&void 0!==u?u[p]:r[p])}var p=arguments.length-2;if(1===p)i.children=t;else if(1<p){u=Array(p);for(var f=0;f<p;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:o,type:e.type,key:c,ref:a,props:i,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:u,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return R().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,t){return R().useReducer(e,r,t)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>i});var n=t(667294);const o=n.createContext({});function i(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||c:i(e),n.createElement(o.Provider,{value:a},r)}}}]);