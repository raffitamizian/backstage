/*! For license information please see 0c8fa0a3.a2feef2d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[588031],{779269:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var n=t(824246),o=t(511151);const c={id:"backend-plugin-api.rootservicefactoryconfig",title:"RootServiceFactoryConfig",description:"API reference for RootServiceFactoryConfig"},i=void 0,s={id:"reference/backend-plugin-api.rootservicefactoryconfig",title:"RootServiceFactoryConfig",description:"API reference for RootServiceFactoryConfig",source:"@site/../docs/reference/backend-plugin-api.rootservicefactoryconfig.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.rootservicefactoryconfig",permalink:"/docs/reference/backend-plugin-api.rootservicefactoryconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.rootservicefactoryconfig.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.rootservicefactoryconfig",title:"RootServiceFactoryConfig",description:"API reference for RootServiceFactoryConfig"}},a={},u=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryconfig",children:(0,n.jsx)(r.code,{children:"RootServiceFactoryConfig"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export interface RootServiceFactoryConfig<TService, TImpl extends TService, TDeps extends {\n    [name in string]: ServiceRef<unknown>;\n}> \n"})}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Modifiers"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryconfig.deps",children:"deps"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"TDeps"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryconfig.initialization",children:"initialization?"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"'always' | 'lazy'"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," The initialization strategy for the service factory. This service is root scoped and will use ",(0,n.jsx)(r.code,{children:"always"})," by default."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryconfig.service",children:"service"})}),(0,n.jsx)(r.td,{}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.serviceref",children:"ServiceRef"}),"<TService, 'root'>"]}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Method"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.rootservicefactoryconfig.factory",children:"factory(deps)"})}),(0,n.jsx)(r.td,{})]})})]})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,c={},u=null,l=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!a.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:u,ref:l,props:c,_owner:s.current}}r.Fragment=c,r.jsx=u,r.jsxs=u},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function b(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}function m(){}function x(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var j=x.prototype=new m;j.constructor=x,h(j,b.prototype),j.isPureReactComponent=!0;var g=Array.isArray,_=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,n){var o,c={},i=null,s=null;if(null!=r)for(o in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(i=""+r.key),r)_.call(r,o)&&!k.hasOwnProperty(o)&&(c[o]=r[o]);var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];c.children=u}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:t,type:e,key:i,ref:s,props:c,_owner:S.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function E(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function $(e,r,o,c,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case n:a=!0}}if(a)return i=i(a=e),e=""===c?"."+E(a,0):c,g(i)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(i,r,o,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),r.push(i)),1;if(a=0,c=""===c?".":c+":",g(e))for(var u=0;u<e.length;u++){var l=c+E(s=e[u],u);a+=$(s,r,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)a+=$(s=s.value,r,o,l=c+E(s,u++),i);else if("object"===s)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function P(e,r,t){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},F={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};r.Children={map:P,forEach:function(e,r,t){P(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=o,r.Profiler=i,r.PureComponent=x,r.StrictMode=c,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,i=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,s=S.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in r)_.call(r,u)&&!k.hasOwnProperty(u)&&(o[u]=void 0===r[u]&&void 0!==a?a[u]:r[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:t,type:e.type,key:c,ref:i,props:o,_owner:s}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=C,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return T.current.useCallback(e,r)},r.useContext=function(e){return T.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return T.current.useDeferredValue(e)},r.useEffect=function(e,r){return T.current.useEffect(e,r)},r.useId=function(){return T.current.useId()},r.useImperativeHandle=function(e,r,t){return T.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return T.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return T.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return T.current.useMemo(e,r)},r.useReducer=function(e,r,t){return T.current.useReducer(e,r,t)},r.useRef=function(e){return T.current.useRef(e)},r.useState=function(e){return T.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return T.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return T.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>i});var n=t(667294);const o={},c=n.createContext(o);function i(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);