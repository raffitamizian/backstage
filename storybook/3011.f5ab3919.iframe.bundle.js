(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3011],{"../node_modules/@material-ui/icons/OpenInNew.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("../node_modules/@babel/runtime/helpers/interopRequireDefault.js"),_interopRequireWildcard=__webpack_require__("../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");exports.Z=void 0;var React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_default=(0,_interopRequireDefault(__webpack_require__("../node_modules/@material-ui/icons/utils/createSvgIcon.js")).default)(React.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew");exports.Z=_default},"../node_modules/lodash/_unescapeHtmlChar.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unescapeHtmlChar=__webpack_require__("../node_modules/lodash/_basePropertyOf.js")({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});module.exports=unescapeHtmlChar},"../node_modules/lodash/unescape.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("../node_modules/lodash/toString.js"),unescapeHtmlChar=__webpack_require__("../node_modules/lodash/_unescapeHtmlChar.js"),reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reHasEscapedHtml=RegExp(reEscapedHtml.source);module.exports=function unescape(string){return(string=toString(string))&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string}},"../plugins/stack-overflow/src/home/StackOverflowQuestions/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Content:()=>Content});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),useApi=__webpack_require__("../packages/core-plugin-api/src/apis/system/useApi.tsx"),Link=__webpack_require__("../packages/core-components/src/components/Link/Link.tsx"),List=__webpack_require__("../node_modules/@material-ui/core/esm/List/List.js"),ListItem=__webpack_require__("../node_modules/@material-ui/core/esm/ListItem/ListItem.js"),ListItemIcon=__webpack_require__("../node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js"),ListItemText=__webpack_require__("../node_modules/@material-ui/core/esm/ListItemText/ListItemText.js"),ListItemSecondaryAction=__webpack_require__("../node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js"),IconButton=__webpack_require__("../node_modules/@material-ui/core/esm/IconButton/IconButton.js"),Typography=__webpack_require__("../node_modules/@material-ui/core/esm/Typography/Typography.js"),OpenInNew=__webpack_require__("../node_modules/@material-ui/icons/OpenInNew.js"),useAsync=__webpack_require__("../node_modules/react-use/lib/useAsync.js"),lodash_unescape=__webpack_require__("../node_modules/lodash/unescape.js"),unescape_default=__webpack_require__.n(lodash_unescape),StackOverflowApi=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("../plugins/stack-overflow/src/api/StackOverflowApi.ts"));const Content=props=>{const{requestParams}=props,stackOverflowApi=(0,useApi.h_)(StackOverflowApi.n),{value,loading,error}=(0,useAsync.Z)((async()=>await stackOverflowApi.listQuestions({requestParams})),[]);if(loading)return(0,jsx_runtime.jsx)(Typography.Z,{paragraph:!0,children:"loading..."});if(error||!value||!value.length)return(0,jsx_runtime.jsx)(Typography.Z,{paragraph:!0,children:"could not load questions"});return(0,jsx_runtime.jsx)(List.Z,{children:value.map((question=>{return(0,jsx_runtime.jsx)(Link.rU,{to:question.link,children:(0,jsx_runtime.jsxs)(ListItem.Z,{children:[props.icon&&(0,jsx_runtime.jsx)(ListItemIcon.Z,{children:props.icon}),(0,jsx_runtime.jsx)(ListItemText.Z,{primary:unescape_default()(question.title),secondary:(answer_count=question.answer_count,answer_count>1?`${answer_count} answers`:`${answer_count} answer`)}),(0,jsx_runtime.jsx)(ListItemSecondaryAction.Z,{children:(0,jsx_runtime.jsx)(IconButton.Z,{edge:"end","aria-label":"external-link",children:(0,jsx_runtime.jsx)(OpenInNew.Z,{})})})]},question.link)});var answer_count}))})};try{Content.displayName="Content",Content.__docgenInfo={description:"A component to display a list of stack overflow questions on the homepage.",displayName:"Content",props:{requestParams:{defaultValue:null,description:"",name:"requestParams",required:!0,type:{name:"StackOverflowQuestionsRequestParams"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/stack-overflow/src/home/StackOverflowQuestions/Content.tsx#Content"]={docgenInfo:Content.__docgenInfo,name:"Content",path:"../plugins/stack-overflow/src/home/StackOverflowQuestions/Content.tsx#Content"})}catch(__react_docgen_typescript_loader_error){}}}]);