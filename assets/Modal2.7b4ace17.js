import{_ as o,b as s}from"./useModal.057bab1e.js";import{d as t,h as e,o as a,i as r,w as i,j as l,a7 as d,m as n}from"./index.f6ab8b82.js";import"./useTimeout.53caa6d5.js";import"./useWindowSizeFn.4d1a1242.js";import"./ScrollContainer.f5667a12.js";import"./index.f5f9866d.js";import"./domUtils.6368f693.js";import"./_stringToArray.ba8c06ed.js";import"./RightOutlined.984a2567.js";/* empty css              */import"./useScrollTo.437039b0.js";import"./FullscreenOutlined.57d4b87c.js";import"./isEqual.342bd97b.js";import"./vendor.3b1829c7.js";var p=t({components:{BasicModal:o},setup(){const[o,{closeModal:t,setModalProps:e}]=s();return{register:o,closeModal:t,setModalProps:()=>{e({title:"Modal New Title"})}}}});const m=n(" 从内部关闭弹窗 "),c=n(" 从内部修改title ");p.render=function(o,s,t,n,p,u){const j=e("a-button"),b=e("BasicModal");return a(),r(b,d(o.$attrs,{onRegister:o.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:i((()=>[l(j,{type:"primary",onClick:o.closeModal,class:"mr-2"},{default:i((()=>[m])),_:1},8,["onClick"]),l(j,{type:"primary",onClick:o.setModalProps},{default:i((()=>[c])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default p;