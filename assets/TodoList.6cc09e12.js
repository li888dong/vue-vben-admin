import{d as t,b1 as e,cp as s,cq as i,h as o,o as a,i as l,j as d,aL as m,aM as n,l as r,m as p,bw as c}from"./index.25b7b5fc.js";import"./index.95c10fda.js";import{T as u}from"./index.eefcbda4.js";import{L as f}from"./index.53c5e1c6.js";import"./index.290ee578.js";import"./index.2ed87d0a.js";import"./index.3e59d4ea.js";import{a as j}from"./index.6c4bbdf5.js";import{t as b}from"./data.aa527d47.js";import{E as _}from"./EllipsisOutlined.3ddff257.js";import"./vendor.3b1829c7.js";import"./colors.e7a38d90.js";import"./SearchOutlined.b66fbfbe.js";import"./CheckOutlined.858b435e.js";import"./DownOutlined.8796a279.js";import"./LeftOutlined.06ccfb10.js";import"./RightOutlined.80d69337.js";import"./DoubleLeftOutlined.fe18de41.js";import"./DoubleRightOutlined.ee82da45.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";import"./index.d317f8e9.js";import"./domUtils.7252317e.js";import"./_stringToArray.fd7cea8c.js";import"./useTimeout.4101b58e.js";import"./useScrollTo.3e27ea8f.js";import"./animation.5c6ea99a.js";var L=t({name:"TodoList",components:{CollapseContainer:j,List:f,ListItem:f.Item,ListItemMeta:f.Item.Meta,Tag:u,Tooltip:e,EllipsisOutlined:_},setup:()=>({todoList:b})});const x=c("data-v-5ec25b45");s("data-v-5ec25b45");const O=d("span",null,[p(" 待办事项 "),d("span",{class:"todo-list__total"},"30")],-1),v={class:"todo-list__item-title"},T={class:"todo-list__item-memo"},h={class:"todo-list__item-desc"},I=d("br",null,null,-1),g=p("待审批"),C={class:"todo-list__all"},E=p("查看更多");i();const M=x(((t,e,s,i,c,u)=>{const f=o("ListItemMeta"),j=o("Tag"),b=o("a-button"),_=o("ListItem"),L=o("List"),M=o("EllipsisOutlined"),k=o("Tooltip"),y=o("CollapseContainer");return a(),l(y,{class:"todo-list",title:"待办事项",canExpan:!1},{title:x((()=>[O])),default:x((()=>[d(L,null,{default:x((()=>[(a(!0),l(m,null,n(t.todoList,(t=>(a(),l(_,{key:t.id,class:"todo-list__item"},{default:x((()=>[d(f,null,{title:x((()=>[d("div",null,[d("span",v,r(t.title),1),d("span",T,r(t.memo),1)])])),description:x((()=>[d("div",h,[p(" 提交人："+r(t.sbmter)+" ",1),I,p(" 提交时间："+r(t.sbmtTime),1)])])),_:2},1024),d(b,{type:"link"},{default:x((()=>[d(j,{color:"blue"},{default:x((()=>[g])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),d("div",C,[d(k,{placement:"topRight"},{title:x((()=>[E])),default:x((()=>[d(M)])),_:1})])])),_:1})}));L.render=M,L.__scopeId="data-v-5ec25b45";export default L;