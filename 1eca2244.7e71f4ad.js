(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),m=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||l[b]||a;return n?c.a.createElement(f,i(i({ref:t},u),{},{components:n})):c.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},176:function(e,t,n){"use strict";n.r(t),t.default="data:image/jpeg;base64,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"},177:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Done-073c08908be3c2ec0e5115dbbfdf313f.png"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(2),c=n(6),a=(n(0),n(122)),o={id:null,title:null,sidebar_label:"References",slug:"/references.md"},i={unversionedId:"references",id:"version-1.1.2/references",isDocsHomePage:!1,title:"references",description:"* References *",source:"@site/versioned_docs\\version-1.1.2\\references.md",slug:"/references.md",permalink:"/Docusaurus/docs/references.md",editUrl:"https://github.com/SurendraRedd/Docusaurus/versioned_docs/version-1.1.2/references.md",version:"1.1.2",sidebar_label:"References",sidebar:"version-1.1.2/someSidebar",previous:{title:"mlapps",permalink:"/Docusaurus/docs/mlapps.md"},next:{title:"bestpractices",permalink:"/Docusaurus/docs/bestpractices.md"}},s=[],u={rightToc:s};function m(e){var t=e.components,o=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"references"},Object(a.b)("center",null,Object(a.b)("img",{src:n(176).default}),Object(a.b)("strong",{parentName:"h1"}," References "))),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://surendraredd.github.io/Books/"}),"\ud83d\udc49 GitHub Location")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.streamlit.io/en/stable/"}),"docs")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.streamlit.io/en/stable/api.html"}),"API Reference")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/marcskovmadsen/awesome-streamlit"}),"Website")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.streamlit.io/components"}),"Components"))),Object(a.b)("hr",null),Object(a.b)("h1",{id:"happylearning"},Object(a.b)("center",null,Object(a.b)("img",{src:n(177).default}),Object(a.b)("strong",{parentName:"h1"}," HappyLearning! "))),Object(a.b)("hr",null))}m.isMDXComponent=!0}}]);