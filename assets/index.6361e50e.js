import{u as e}from"./useContextMenu.067ee662.js";import{d as t}from"./ScrollContainer.f5667a12.js";import{d as i,g as n,h as o,o as s,i as l,w as a,j as r,m as p}from"./index.f6ab8b82.js";import{_ as d}from"./index.32c247c7.js";import"./index.9f6ca6fb.js";import"./RightOutlined.984a2567.js";import"./EllipsisOutlined.67d25fe6.js";import"./types.a1f593da.js";import"./isEqual.342bd97b.js";import"./toInteger.fe2536de.js";/* empty css              */import"./index.1067be7b.js";import"./index.f5f9866d.js";import"./domUtils.6368f693.js";import"./_stringToArray.ba8c06ed.js";import"./useTimeout.53caa6d5.js";import"./useScrollTo.437039b0.js";import"./vendor.3b1829c7.js";import"./index.d14b8a91.js";import"./DownOutlined.851157e1.js";import"./index.d48b5972.js";import"./usePageContext.367642f4.js";import"./transButton.c5b4ef9a.js";import"./ArrowLeftOutlined.9cf601da.js";var m=i({components:{CollapseContainer:t,PageWrapper:d},setup(){const[t]=e(),{createMessage:i}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const c=p(" Right Click on me "),u=p(" Right Click on me ");m.render=function(e,t,i,n,p,d){const m=o("a-button"),b=o("CollapseContainer"),f=o("PageWrapper");return s(),l(f,{title:"右键菜单示例"},{default:a((()=>[r(b,{title:"Simple"},{default:a((()=>[r(m,{type:"primary",onContextmenu:e.handleContext},{default:a((()=>[c])),_:1},8,["onContextmenu"])])),_:1}),r(b,{title:"Multiple",class:"mt-4"},{default:a((()=>[r(m,{type:"primary",onContextmenu:e.handleMultipleContext},{default:a((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default m;