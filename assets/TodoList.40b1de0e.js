import{d as t,b1 as s,dn as i,dp as e,h as o,o as a,i as l,j as d,aL as n,aM as m,l as r,m as p,bw as c}from"./index.f6ab8b82.js";import{L as u}from"./index.35f9a60e.js";import"./index.3e4667b6.js";import"./index.ecbd3bc0.js";import"./index.d1ebf712.js";import{T as f}from"./index.2cfa05aa.js";/* empty css              */import{d as j}from"./ScrollContainer.f5667a12.js";import{t as _}from"./data.aa527d47.js";import{E as b}from"./EllipsisOutlined.67d25fe6.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.d49843fd.js";import"./CheckOutlined.eb38e39d.js";import"./DownOutlined.851157e1.js";import"./LeftOutlined.6591dd09.js";import"./RightOutlined.984a2567.js";import"./DoubleLeftOutlined.3ce46edf.js";import"./DoubleRightOutlined.c79eaa7e.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./index.f5f9866d.js";import"./domUtils.6368f693.js";import"./_stringToArray.ba8c06ed.js";import"./useTimeout.53caa6d5.js";import"./useScrollTo.437039b0.js";var L=t({name:"TodoList",components:{CollapseContainer:j,List:u,ListItem:u.Item,ListItemMeta:u.Item.Meta,Tag:f,Tooltip:s,EllipsisOutlined:b},setup:()=>({todoList:_})});const O=c("data-v-579679d3");i("data-v-579679d3");const v=d("span",null,[p(" 待办事项 "),d("span",{class:"todo-list__total"},"30")],-1),x={class:"todo-list__item-title"},T={class:"todo-list__item-memo"},h={class:"todo-list__item-desc"},C=d("br",null,null,-1),I=p(" 待审批 "),g={class:"todo-list__all"},E=p(" 查看更多 ");e();const M=O(((t,s,i,e,c,u)=>{const f=o("ListItemMeta"),j=o("Tag"),_=o("a-button"),b=o("ListItem"),L=o("List"),M=o("EllipsisOutlined"),k=o("Tooltip"),y=o("CollapseContainer");return a(),l(y,{class:"todo-list",title:"待办事项",canExpan:!1},{title:O((()=>[v])),default:O((()=>[d(L,null,{default:O((()=>[(a(!0),l(n,null,m(t.todoList,(t=>(a(),l(b,{key:t.id,class:"todo-list__item"},{default:O((()=>[d(f,null,{title:O((()=>[d("div",null,[d("span",x,r(t.title),1),d("span",T,r(t.memo),1)])])),description:O((()=>[d("div",h,[p(" 提交人："+r(t.sbmter)+" ",1),C,p(" 提交时间："+r(t.sbmtTime),1)])])),_:2},1024),d(_,{type:"link"},{default:O((()=>[d(j,{color:"blue"},{default:O((()=>[I])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),d("div",g,[d(k,{placement:"topRight"},{title:O((()=>[E])),default:O((()=>[d(M)])),_:1})])])),_:1})}));L.render=M,L.__scopeId="data-v-579679d3";export default L;
