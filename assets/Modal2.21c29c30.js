import{_ as e,b as o}from"./useModal.48ad3b85.js";import{d as s,h as t,o as r,i as a,w as i,j as l,a7 as d,m as n}from"./index.41be92f1.js";import"./useTimeout.b575b9d4.js";import"./useWindowSizeFn.a1fff282.js";import"./ScrollContainer.5baac586.js";import"./index.2171726d.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./RightOutlined.3aed54ec.js";/* empty css              */import"./useScrollTo.d04f868c.js";import"./FullscreenOutlined.6f1a37a8.js";import"./isEqual.e72cf159.js";import"./vendor.3b1829c7.js";var c=s({components:{BasicModal:e},setup(){const[e,{closeModal:s,setModalProps:t}]=o();return{register:e,closeModal:s,setModalProps:()=>{t({title:"Modal New Title"})}}}});const p=n(" 从内部关闭弹窗 "),m=n(" 从内部修改title ");c.render=function(e,o,s,n,c,u){const f=t("a-button"),j=t("BasicModal");return r(),a(j,d(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:i((()=>[l(f,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:i((()=>[p])),_:1},8,["onClick"]),l(f,{type:"primary",onClick:e.setModalProps},{default:i((()=>[m])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default c;