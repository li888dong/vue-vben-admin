import{_ as e,a as s}from"./index.b703360e.js";import{d as o,h as t,o as i,i as r,w as a,j as l,a7 as d,m as n}from"./index.31a6bf2e.js";import"./useTimeout.d1efb3cd.js";import"./useWindowSizeFn.a92604ed.js";import"./index.81c7e8d3.js";import"./index.38622004.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./RightOutlined.98400bb6.js";/* empty css              */import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./FullscreenOutlined.3ef66bbe.js";import"./isEqual.fe28526e.js";import"./vendor.3b1829c7.js";var p=o({components:{BasicModal:e},setup(){const[e,{closeModal:o,setModalProps:t}]=s();return{register:e,closeModal:o,setModalProps:()=>{t({title:"Modal New Title"})}}}});const m=n(" 从内部关闭弹窗 "),c=n(" 从内部修改title ");p.render=function(e,s,o,n,p,u){const f=t("a-button"),j=t("BasicModal");return i(),r(j,d(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:a((()=>[l(f,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:a((()=>[m])),_:1},8,["onClick"]),l(f,{type:"primary",onClick:e.setModalProps},{default:a((()=>[c])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default p;