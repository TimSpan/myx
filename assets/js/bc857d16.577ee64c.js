"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8951],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>f});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,f=p["".concat(l,".").concat(g)]||p[g]||m[g]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(8168),a=(r(6540),r(5680));const o={slug:"Go",title:"Go",authors:{name:"Kevin",title:"Go",url:"https://github.com/timspan",image_url:"https://foruda.gitee.com/avatar/1693540335318510496/5351116_timspan_1693540335.png!avatar100"},tags:["hola","docusaurus"]},i="Go",c={permalink:"/blog/Go",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Go\u57fa\u7840\u8bed\u6cd5.md",source:"@site/blog/Go\u57fa\u7840\u8bed\u6cd5.md",title:"Go",description:"\u5b9a\u4e49\u53d8\u91cf",date:"2023-09-12T11:49:34.000Z",formattedDate:"September 12, 2023",tags:[{label:"hola",permalink:"/blog/tags/hola"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.625,hasTruncateMarker:!1,authors:[{name:"Kevin",title:"Go",url:"https://github.com/timspan",image_url:"https://foruda.gitee.com/avatar/1693540335318510496/5351116_timspan_1693540335.png!avatar100",imageURL:"https://foruda.gitee.com/avatar/1693540335318510496/5351116_timspan_1693540335.png!avatar100"}],frontMatter:{slug:"Go",title:"Go",authors:{name:"Kevin",title:"Go",url:"https://github.com/timspan",image_url:"https://foruda.gitee.com/avatar/1693540335318510496/5351116_timspan_1693540335.png!avatar100",imageURL:"https://foruda.gitee.com/avatar/1693540335318510496/5351116_timspan_1693540335.png!avatar100"},tags:["hola","docusaurus"]},nextItem:{title:"Taro-RN\u7aef\u6837\u5f0f\u4ee5\u53ca\u6ce8\u610f\u4e8b\u9879",permalink:"/blog/Taro-RN\u7aef\u6837\u5f0f\u4ee5\u53ca\u6ce8\u610f\u4e8b\u9879"}},l={authorsImageUrls:[void 0]},u=[{value:"\u5b9a\u4e49\u53d8\u91cf",id:"\u5b9a\u4e49\u53d8\u91cf",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u5b9a\u4e49\u53d8\u91cf"},"\u5b9a\u4e49\u53d8\u91cf"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    var a int\n    var text string\n    fmt.Printf("%d %q\\n", a, text) //\u8fd9\u6837\u5c31\u53ef\u4ee5\u6253\u5370\u51fa\u7a7a\u5b57\u7b26\u4e32\n    // \u5b9a\u4e49\u7684\u53d8\u91cf\u5fc5\u987b\u4f7f\u7528\u6389\n    fmt.Println(\n        a, text, // \u7a7a\u5b57\u7b26\u4e32\u6253\u5370\u4e0d\u51fa\u6765\n    )\n    test()\n    varShort()\n}\n\nfunc test() {\n    //\u4e0d\u56fa\u5b9a\u7c7b\u578b\u53ef\u4ee5\u5199\u5728\u4e00\u884c\n    var a, b, c, d = 3, 4, true, "def"\n    fmt.Println(\n        a, b, c, d,\n    )\n}\n\nfunc varShort() { //\u66f4\u7b80\u6d01\u7684\u5b9a\u4e49\u53d8\u91cf\n    a, b, c := 1, 2, 3\n    b = 10\n    fmt.Println(\n        a, b, c,\n    )\n}\n\n')))}m.isMDXComponent=!0}}]);