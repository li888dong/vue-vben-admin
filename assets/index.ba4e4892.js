import{u as e}from"./useContextMenu.c6b3ce11.js";import{a as t}from"./index.81c7e8d3.js";import{d as i,g as n,h as o,o as s,i as a,w as l,j as r,m as p}from"./index.31a6bf2e.js";import{_ as d}from"./index.1656dc96.js";import"./index.73c084f5.js";import"./RightOutlined.98400bb6.js";import"./EllipsisOutlined.f0621b27.js";import"./types.b304e151.js";import"./isEqual.fe28526e.js";import"./toInteger.619adbee.js";/* empty css              */import"./index.5db0d006.js";import"./index.38622004.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./useTimeout.d1efb3cd.js";import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./vendor.3b1829c7.js";import"./index.775a650d.js";import"./DownOutlined.1e403334.js";import"./index.b24fa441.js";import"./usePageContext.c01714fa.js";import"./transButton.4f753738.js";import"./ArrowLeftOutlined.74abacd3.js";var m=i({components:{CollapseContainer:t,PageWrapper:d},setup(){const[t]=e(),{createMessage:i}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const c=p(" Right Click on me "),u=p(" Right Click on me ");m.render=function(e,t,i,n,p,d){const m=o("a-button"),b=o("CollapseContainer"),f=o("PageWrapper");return s(),a(f,{title:"右键菜单示例"},{default:l((()=>[r(b,{title:"Simple"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[c])),_:1},8,["onContextmenu"])])),_:1}),r(b,{title:"Multiple",class:"mt-4"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default m;