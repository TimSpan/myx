"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2740],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},i="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),i=u(t),m=a,y=i["".concat(s,".").concat(m)]||i[m]||g[m]||o;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[i]="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=t(8168),a=(t(6540),t(5680));const o={sidebar_position:8},l="Vue3Composition-API",p={unversionedId:"Vue3Composition-API",id:"Vue3Composition-API",title:"Vue3Composition-API",description:"setup",source:"@site/docs/Vue3Composition-API.md",sourceDirName:".",slug:"/Vue3Composition-API",permalink:"/docs/Vue3Composition-API",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Vue3Composition-API.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Vue-Router4",permalink:"/docs/Vue-Router4"},next:{title:"Vuex3",permalink:"/docs/VueX"}},s={},u=[{value:"setup",id:"setup",level:2},{value:"setup\u54cd\u5e94\u5f0f",id:"setup\u54cd\u5e94\u5f0f",level:3},{value:"\u5e26ref\u7684\u54cd\u5e94\u5f0f\u53d8\u91cf",id:"\u5e26ref\u7684\u54cd\u5e94\u5f0f\u53d8\u91cf",level:3},{value:"\u90a3\u5982\u679c\u60f3\u5b9a\u4e49\u4e00\u4e2a\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5462\uff1freactive\uff0c\u800c\u4e0d\u662fref\u4e86",id:"\u90a3\u5982\u679c\u60f3\u5b9a\u4e49\u4e00\u4e2a\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5462reactive\u800c\u4e0d\u662fref\u4e86",level:3},{value:"toRefs\u8ba9\u89e3\u6784\u540e\u7684\u6570\u636e\u91cd\u65b0\u83b7\u5f97\u54cd\u5e94\u5f0f",id:"torefs\u8ba9\u89e3\u6784\u540e\u7684\u6570\u636e\u91cd\u65b0\u83b7\u5f97\u54cd\u5e94\u5f0f",level:3},{value:"\u5728setup\u4e2d\u4f7f\u7528watch\u548cwatchEffect",id:"\u5728setup\u4e2d\u4f7f\u7528watch\u548cwatcheffect",level:3},{value:"\u5728setup\u4e2d\u4f7f\u7528computed",id:"\u5728setup\u4e2d\u4f7f\u7528computed",level:3},{value:"setup\u7b2c\u4e8c\u4e2a\u53c2\u6570context",id:"setup\u7b2c\u4e8c\u4e2a\u53c2\u6570context",level:3},{value:"setup\u8bbf\u95ee\u4ee5\u4e0b\u7684property",id:"setup\u8bbf\u95ee\u4ee5\u4e0b\u7684property",level:3},{value:"script setup \u8bed\u6cd5\u7cd6",id:"script-setup-\u8bed\u6cd5\u7cd6",level:3},{value:"\u4f7f\u7528fetch\u83b7\u53d6\u6570\u636e",id:"\u4f7f\u7528fetch\u83b7\u53d6\u6570\u636e",level:2},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:2},{value:"\u4f20\u9012props",id:"\u4f20\u9012props",level:3}],c={toc:u},i="wrapper";function g(e){let{components:n,...o}=e;return(0,a.yg)(i,(0,r.A)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"vue3composition-api"},"Vue3Composition-API"),(0,a.yg)("h2",{id:"setup"},"setup"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u7ec4\u5408\u5f0fAPI"),"  ",(0,a.yg)("strong",{parentName:"p"},"\u5c06\u540c\u4e00\u4e2a\u903b\u8f91\u5173\u6ce8\u70b9\u76f8\u5173\u4ee3\u7801\u6536\u96c6\u5728\u4e00\u5757")),(0,a.yg)("p",null,"\u7ec4\u4ef6\u521b\u5efa\u4e4b\u524d\u88ab\u6267\u884c\uff0c\u4e0d\u9700\u8981\u4f7f\u7528this"),(0,a.yg)("admonition",{title:"TIP",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"setup \u662f\u56f4\u7ed5beforeCreate \u548ccreated \u751f\u547d\u5468\u671f\u8fd0\u884c\u7684\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u663e\u793a\u7684\u5b9a\u4e49\u5b83\u4eec\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u5728\u8fd9\u4e9b\u94a9\u5b50\u51fd\u6570\u4e2d\u7f16\u5199\u7684\u4efb\u4f55\u4ee3\u7801\u90fd\u5e94\u8be5\u76f4\u63a5\u5728setup \u51fd\u6570\u4e2d\u7f16\u5199"),(0,a.yg)("p",{parentName:"admonition"},"\u5728setup\u4e2d\u4f60\u5e94\u8be5\u907f\u514d\u4f7f\u7528this,\u56e0\u4e3a\u5b83\u4e0d\u4f1a\u627e\u5230\u7ec4\u4ef6\u5b9e\u4f8b. setup \u7684\u8c03\u7528\u53d1\u751f\u5728date, computed \u6216 methods\u88ab\u89e3\u6790\u4e4b\u524d,\u6240\u4ee5\u5b83\u4eec\u65e0\u6cd5\u5728setup\u4e2d\u88ab\u83b7\u53d6")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"  setup() {\n    console.log('setup');\n    let msg = 'hello'\n    console.log(msg);\n    function changeMSG() {\n      msg = '\u4f60\u597d'\n      console.log(msg);//\u6570\u636e\u4e0d\u662f\u54cd\u5e94\u5f0f\n    }\n    return { msg, changeMSG }\n  },\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'    <button @click="changeMSG">changeMSG</button>\n\n')),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(345).A,width:"638",height:"293"})),(0,a.yg)("h3",{id:"setup\u54cd\u5e94\u5f0f"},"setup\u54cd\u5e94\u5f0f"),(0,a.yg)("h3",{id:"\u5e26ref\u7684\u54cd\u5e94\u5f0f\u53d8\u91cf"},"\u5e26ref\u7684\u54cd\u5e94\u5f0f\u53d8\u91cf"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},"    \x3c!-- \u6a21\u677f\u81ea\u52a8\u89e3\u6790value\u503c --\x3e\n    <h2>{{count}}</h2>\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"  setup() {\n    console.log('setup');\n    let msg = 'hello'\n    console.log(msg);\n    function changeMSG() {\n      msg = '\u4f60\u597d'\n      console.log(msg);//\u6570\u636e\u4e0d\u662f\u54cd\u5e94\u5f0f\n    }\n    // ref\u5b9a\u4e49\u54cd\u5e94\u5f0f\u53d8\u91cf\n    // highlight-next-line\n    // ref\u51fd\u6570\u8fd4\u56de\u5e26\u6709value\u5c5e\u6027\u7684\u5bf9\u8c61\n    // highlight-next-line\n    const count = ref(0);\n    function changeCOUNT() {\n      count.value++\n    }\n    // highlight-next-line\n    return { msg, changeMSG, count, changeCOUNT }//\u5728setup\u91cc\u5b9a\u4e49\u7684\u53d8\u91cf\u4e00\u5b9a\u8981\u66b4\u9732\u51fa\u53bb\n  },\n")),(0,a.yg)("p",null,"ref \u63a5\u6536\u4e00\u4e2a\u53c2\u6570\u5e76\u5c06\u5176\u5305\u88f9\u5728\u4e00\u4e2a\u5e26\u6709",(0,a.yg)("inlineCode",{parentName:"p"},"value")," property\u7684\u5bf9\u8c61\u4e2d\u8fd4\u56de\uff0c\u7136\u540e\u53ef\u4ee5\u4f7f\u7528\u8be5 property\u8bbf\u95ee\u6216\u66f4\u6539\u54cd\u5e94\u5f0f\u53d8\u91cf\u7684\u503c"),(0,a.yg)("admonition",{title:"TIP",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u5c06\u503c\u5c01\u88c5\u5728\u4e00\u4e2a\u5bf9\u8c61\u4e2d\uff0c\u770b\u4f3c\u6ca1\u5fc5\u8981\uff0c\u4f46\u4e3a\u4e86\u4fdd\u6301JavaScript\u4e2d\u4e0d\u540c\u6570\u636e\u7c7b\u578b\u7684\u884c\u4e3a\u7edf\u4e00\uff0c\u8fd9\u662f\u5fc5\u987b\u7684\uff0c\u8fd9\u662f\u56e0\u4e3a\u5728JavaScript\u4e2d\uff0cNumber \u6216 String \u7b49\u57fa\u672c\u7c7b\u578b\u901a\u8fc7\u503c \u800c\u975e\u5f15\u7528\u4f20\u9012\u7684"),(0,a.yg)("p",{parentName:"admonition"},"\u6362\u53e5\u8bdd\u8bf4\uff0cref \u4e3a\u6211\u4eec\u7684\u503c\u521b\u5efa\u4e86\u4e00\u4e2a",(0,a.yg)("strong",{parentName:"p"},"\u54cd\u5e94\u5f0f\u5f15\u7528"),"\uff0c\u5728\u6574\u4e2a\u7ec4\u5408\u5f0fAPI \u4e2d\u4f1a\u7ecf\u5e38\u4f7f\u7528",(0,a.yg)("strong",{parentName:"p"},"\u5f15\u7528"),"\u7684\u6982\u5ff5")),(0,a.yg)("h3",{id:"\u90a3\u5982\u679c\u60f3\u5b9a\u4e49\u4e00\u4e2a\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5462reactive\u800c\u4e0d\u662fref\u4e86"},"\u90a3\u5982\u679c\u60f3\u5b9a\u4e49\u4e00\u4e2a\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5462\uff1freactive\uff0c\u800c\u4e0d\u662fref\u4e86"),(0,a.yg)("p",null,"\u901a\u8fc7reactive\u5b9a\u4e8e\u5f15\u7528\u7c7b\u578b\u7684\u6570\u636e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import { ref ,reactive } from 'vue';\n\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"    const obj = reactive({\n      name: 'xxx',\n      age: 20\n    })\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"...obj")," ",(0,a.yg)("strong",{parentName:"p"},"\u89e3\u6784\u4f1a\u5931\u53bb\u54cd\u5e94\u6027")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"return { msg, changeMSG, count, changeCOUNT ,...obj}\n")),(0,a.yg)("h3",{id:"torefs\u8ba9\u89e3\u6784\u540e\u7684\u6570\u636e\u91cd\u65b0\u83b7\u5f97\u54cd\u5e94\u5f0f"},"toRefs\u8ba9\u89e3\u6784\u540e\u7684\u6570\u636e\u91cd\u65b0\u83b7\u5f97\u54cd\u5e94\u5f0f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"return { msg, changeMSG, count, changeCOUNT, ...toRefs(obj)\uff0cname }\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"let {name,children} = toRefs(obj)\n")),(0,a.yg)("h3",{id:"\u5728setup\u4e2d\u4f7f\u7528watch\u548cwatcheffect"},"\u5728setup\u4e2d\u4f7f\u7528watch\u548cwatchEffect"),(0,a.yg)("p",null,"\u8fc7\u53bb\u7684\u9009\u9879\u5f0fAPI"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"  data() {\n    return {\n      message: '\u4f60\u597d',\n    };\n  },\n  //\u9009\u9879\u5f0fAPI\n  watch: {\n    message: function (newVal, oldVal) {\n\n    }\n  },\n")),(0,a.yg)("p",null,"watch\u54cd\u5e94\u5f0f\u66f4\u6539"),(0,a.yg)("p",null,"\u5b83\u63a5\u65363\u4e2a\u53c2\u6570\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4e00\u4e2a\u60f3\u8981\u4fa6\u542c\u7684 \u54cd\u5e94\u5f0f\u5f15\u7528 \u6216 getter\u51fd\u6570"),(0,a.yg)("li",{parentName:"ul"},"\u4e00\u4e2a\u56de\u8c03"),(0,a.yg)("li",{parentName:"ul"},"\u53ef\u9009\u7684\u914d\u7f6e\u9009\u9879")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import { watch } from 'vue';\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\n    <h2>{{ counter }}</h2>\n    <button @click=\"changeCounter\">\u6539\u53d8counter</button>\n    <h2>{{ user.name }}</h2>\n    <button @click=\"changeUser\">\u6539\u53d8use\u7684\u540d\u5b57</button>\n  </div>\n</template>\n\n<script>\nimport { ref, reactive, toRefs, watch, watchEffect } from 'vue';\nexport default {\n  setup() {\n    const counter = ref(0)\n    function changeCounter() {\n      counter.value++\n    }\n    const user = reactive({\n      name: 'KEVIN',\n      age: 20,\n    })\n    function changeUser() {\n      user.name = 'KKKKK'\n    }\n    //\u4fa6\u542ccounter\n    // highlight-next-line\n    //watch(\u4fa6\u542c\u7684\u54cd\u5e94\u5f0f\u5f15\u7528,\u56de\u8c03\u51fd\u6570)\n    // highlight-next-line \n    watch(counter, (newVal, oldVal) => {\n      console.log('\u65b0\u503c-----', newVal);\n      console.log('\u65e7\u503c-----', oldVal);\n\n    })\n    // highlight-start\n    //watchEffect(\u56de\u8c03\u51fd\u6570)\n    //\u4e0d\u9700\u8981\u6307\u5b9a\u76d1\u542c\u7684\u5c5e\u6027\uff0c\u7ec4\u4ef6\u521d\u59cb\u5316\u7684\u65f6\u5019\u4f1a\u6267\u884c\u4e00\u6b21\u56de\u8c03\u51fd\u6570\n    //\u81ea\u52a8\u6536\u96c6\u4f9d\u8d56\n    watchEffect(() => {\n      console.log(user.name);\n    })\n    //watch \u548c watchEffect \u533a\u522b\n    // 1\u2014\u2014 watchEffect\u4e0d\u9700\u8981\u6307\u5b9a\u76d1\u542c\u7684\u5c5e\u6027\uff0c\u81ea\u52a8\u6536\u96c6\u4f9d\u8d56\uff0c\u53ea\u8981\u5728\u56de\u8c03\u4e2d\u5f15\u7528\u5230\u4e86\u54cd\u5e94\u5f0f\u7684\u5c5e\u6027\uff0c\u56de\u8c03\u5c31\u4f1a\u6267\u884c\n    // 2\u2014\u2014 watch\u53ea\u80fd\u4fa6\u542c\u6307\u5b9a\u7684\u5c5e\u6027\n    // highlight-end\n\n    return { counter, user, changeCounter, changeUser }\n  },\n};\n<\/script>\n")),(0,a.yg)("h3",{id:"\u5728setup\u4e2d\u4f7f\u7528computed"},"\u5728setup\u4e2d\u4f7f\u7528computed"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},"<script>\nimport { computed, ref, reactive, toRefs, watch, watchEffect, } from 'vue';\nexport default {\n  data() {\n    return {\n      message: 'hello'\n    }\n  },\n  setup() {\n    const msg = ref('hello------')\n    const reverseMSG = computed(() => {//\u8fd4\u56de\u4e00\u4e2a\u5e26\u6709value\u5c5e\u6027\u7684\u5bf9\u8c61\n      return msg.value.split('').reverse().join('')\n    })\n    console.log(reverseMSG.value);\n\n\n    //\u5728\u5bf9\u8c61\u91cc\n    const user = reactive({\n      name: 'KEVIN',\n      age: 20,\n      reverseMSG: computed(() => {\n        return msg.value.split('').reverse().join('')\n      })\n    })\n    console.log(user.reverseMSG);\n  },\n    \n  //\u5bf9\u6bd4\u9009\u9879\u5f0fAPI\n  computed: {\n    reverseMSG: function () {\n      return this.message.split('').reverse().join('')\n    }\n  }\n};\n<\/script>\n\n")),(0,a.yg)("h3",{id:"setup\u7b2c\u4e8c\u4e2a\u53c2\u6570context"},"setup\u7b2c\u4e8c\u4e2a\u53c2\u6570context"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"context"),"\u662f\u4e00\u4e2a\u666e\u901a\u7684JavaScript\u5bf9\u8c61\u3002\u66b4\u9732\u4e86\u5176\u4ed6\u53ef\u80fd\u5728setup\u4e2d\u6709\u7528\u7684\u503c"),(0,a.yg)("p",null,"\u4f20\u5165 ",(0,a.yg)("inlineCode",{parentName:"p"},"setup")," \u51fd\u6570\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a ",(0,a.yg)("strong",{parentName:"p"},"Setup \u4e0a\u4e0b\u6587"),"\u5bf9\u8c61\u3002\u4e0a\u4e0b\u6587\u5bf9\u8c61\u66b4\u9732\u4e86\u5176\u4ed6\u4e00\u4e9b\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"setup")," \u4e2d\u53ef\u80fd\u4f1a\u7528\u5230\u7684\u503c\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"export default {\n  setup(props, context) {\n    // \u900f\u4f20 Attributes\uff08\u975e\u54cd\u5e94\u5f0f\u7684\u5bf9\u8c61\uff0c\u7b49\u4ef7\u4e8e $attrs\uff09\n    console.log(context.attrs)\n\n    // \u63d2\u69fd\uff08\u975e\u54cd\u5e94\u5f0f\u7684\u5bf9\u8c61\uff0c\u7b49\u4ef7\u4e8e $slots\uff09\n    console.log(context.slots)\n\n    // \u89e6\u53d1\u4e8b\u4ef6\uff08\u51fd\u6570\uff0c\u7b49\u4ef7\u4e8e $emit\uff09\n    console.log(context.emit)\n\n    // \u66b4\u9732\u516c\u5171\u5c5e\u6027\uff08\u51fd\u6570\uff09\n    console.log(context.expose)\n  }\n}\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"context"),"\u662f\u4e00\u4e2a\u666e\u901a\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"JavaScript"),"\u5bf9\u8c61\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u4e0d\u662f\u975e\u54cd\u5e94\u5f0f\u7684\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u5b89\u5168\u7684\u5bf9",(0,a.yg)("inlineCode",{parentName:"p"},"context")," \u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"ES6"),"\u89e3\u6784\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"export default {\n  setup(props, { attrs, slots, emit, expose }) {\n    ...\n  }\n}\n")),(0,a.yg)("h3",{id:"setup\u8bbf\u95ee\u4ee5\u4e0b\u7684property"},"setup\u8bbf\u95ee\u4ee5\u4e0b\u7684property"),(0,a.yg)("p",null,"\u6267\u884csetup\u65f6\uff0c\u4f60\u53ea\u80fd\u8bbf\u95ee\u4ee5\u4e0bproperty\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"props"),(0,a.yg)("li",{parentName:"ul"},"attrs"),(0,a.yg)("li",{parentName:"ul"},"slots"),(0,a.yg)("li",{parentName:"ul"},"emit")),(0,a.yg)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u4f60\u5c06\u65e0\u6cd5\u8bbf\u95ee\u4ee5\u4e0b\u7ec4\u4ef6\u9009\u9879\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"data"),(0,a.yg)("li",{parentName:"ul"},"computed"),(0,a.yg)("li",{parentName:"ul"},"methods"),(0,a.yg)("li",{parentName:"ul"},"refs")),(0,a.yg)("h3",{id:"script-setup-\u8bed\u6cd5\u7cd6"},"script setup \u8bed\u6cd5\u7cd6"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\n    <Content />\n    <h2>A\u503c\u4e3a: {{ A }}</h2>\n    <button @click=\"changeA\">\u6539\u53d8A</button>\n  </div>\n</template>\n\n<script setup>\n// \u5f15\u5165\u7ec4\u4ef6\u4e0d\u9700\u8981\u6ce8\u518c\u3001\u548cReact\u4e00\u6837\nimport Content from './Content.vue'\n// \u5b9a\u4e49\u53d8\u91cf\uff0c\u5728\u6a21\u677f\u4e2d\u4e0d\u9700\u8981\u66b4\u9732\u51fa\u53bb\uff0c\u6a21\u677f\u76f4\u63a5\u4f7f\u7528\n// \u5b9a\u4e49\u54cd\u5e94\u5f0f\u7684\u53d8\u91cf\uff0c\u8fd8\u662f\u9700\u8981\u4ecevue\u4e2d\u5f15\u5165\nimport { ref } from 'vue'\nconst A = ref(20);\nfunction changeA() {\n  A.value++\n}\n<\/script>\n\n")),(0,a.yg)("h2",{id:"\u4f7f\u7528fetch\u83b7\u53d6\u6570\u636e"},"\u4f7f\u7528fetch\u83b7\u53d6\u6570\u636e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"  created() {\n    fetch('https://wangyiyun-api-six.vercel.app/banner?type=2').then((res) => {\n      return res.json()\n      // console.log(res.json());\n    }).then((res) => {\n      this.images = res.banners\n      // console.log(res);\n    })\n  },\n")),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(8198).A,width:"1524",height:"622"})),(0,a.yg)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,a.yg)("p",null,"\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"<script setup>"),"\uff0c\u5bfc\u5165\u7684\u7ec4\u4ef6\u90fd\u5728\u6a21\u677f\u4e2d\u76f4\u63a5\u53ef\u7528\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},"<script setup>\nimport ButtonCounter from './ButtonCounter.vue'\n<\/script>\n\n<template>\n  <h1>Here is a child component!</h1>\n  <ButtonCounter />\n</template>\n")),(0,a.yg)("h3",{id:"\u4f20\u9012props"},"\u4f20\u9012props"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},"\x3c!-- BlogPost.vue --\x3e\n<script setup>\ndefineProps(['title'])\n<\/script>\n\n<template>\n  <h4>{{ title }}</h4>\n</template>\n")),(0,a.yg)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"<script setup>"),"\uff0cprops \u5fc5\u987b\u4ee5 ",(0,a.yg)("inlineCode",{parentName:"p"},"props")," \u9009\u9879\u7684\u65b9\u5f0f\u58f0\u660e\uff0cprops \u5bf9\u8c61\u4f1a\u4f5c\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"setup()")," \u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u88ab\u4f20\u5165\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"export default {\n  props: ['title'],\n  setup(props) {\n    console.log(props.title)\n  }\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<BlogPost title="My journey with Vue" />\n<BlogPost title="Blogging with Vue" />\n<BlogPost title="Why Vue is so fun" />\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<BlogPost\n  v-for="post in posts"\n  :key="post.id"\n  :title="post.title"\n />\n')))}g.isMDXComponent=!0},8198:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/fetch-3c24402dbb9c106e1f1cece505c26aa6.jpg"},345:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/setup-00723b7072fc96853318895e8c345c25.png"}}]);