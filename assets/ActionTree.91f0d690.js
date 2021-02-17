import{B as e,t}from"./data.c578bb62.js";import{d as a}from"./ScrollContainer.f5667a12.js";import{d as n,r as s,g as l,e as o,h as r,o as d,i,w as c,j as p,m as u}from"./index.f6ab8b82.js";import{_ as f}from"./index.32c247c7.js";import"./index.f5f9866d.js";import"./domUtils.6368f693.js";import"./_stringToArray.ba8c06ed.js";import"./RightOutlined.984a2567.js";/* empty css              */import"./useTimeout.53caa6d5.js";import"./useScrollTo.437039b0.js";import"./vendor.3b1829c7.js";import"./index.d14b8a91.js";import"./index.9f6ca6fb.js";import"./EllipsisOutlined.67d25fe6.js";import"./types.a1f593da.js";import"./isEqual.342bd97b.js";import"./toInteger.fe2536de.js";import"./DownOutlined.851157e1.js";import"./index.d48b5972.js";import"./usePageContext.367642f4.js";import"./transButton.c5b4ef9a.js";import"./ArrowLeftOutlined.9cf601da.js";var m=n({components:{BasicTree:e,CollapseContainer:a,PageWrapper:f},setup(){const e=s(null),{createMessage:a}=l();function n(){const t=o(e);if(!t)throw new Error("tree is null!");return t}return{treeData:t,treeRef:e,handleLevel:function(e){n().filterByLevel(e)},handleSetCheckData:function(){n().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=n().getCheckedKeys();a.success(JSON.stringify(e))},handleSetSelectData:function(){n().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=n().getSelectedKeys();a.success(JSON.stringify(e))},handleSetExpandData:function(){n().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=n().getExpandedKeys();a.success(JSON.stringify(e))},appendNodeByKey:function(e=null){n().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){n().deleteNodeByKey(e)},updateNodeByKey:function(e){n().updateNodeByKey(e,{title:"parent2-new"})}}}});const y={class:"mb-4"},C=u(" 显示到第2级 "),h=u(" 显示到第1级 "),k=u(" 设置勾选数据 "),j=u(" 获取勾选数据 "),b=u(" 设置选中数据 "),D=u(" 获取选中数据 "),K=u(" 设置展开数据 "),S=u(" 获取展开数据 "),x={class:"mb-4"},B=u(" 添加根节点 "),_=u(" 添加在parent3内添加节点 "),g=u(" 删除parent3节点 "),N=u(" 更新parent2节点 ");m.render=function(e,t,a,n,s,l){const o=r("a-button"),u=r("BasicTree"),f=r("CollapseContainer"),m=r("PageWrapper");return d(),i(m,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:c((()=>[p("div",y,[p(o,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:c((()=>[C])),_:1}),p(o,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:c((()=>[h])),_:1}),p(o,{onClick:e.handleSetCheckData,class:"mr-2"},{default:c((()=>[k])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetCheckData,class:"mr-2"},{default:c((()=>[j])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetSelectData,class:"mr-2"},{default:c((()=>[b])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetSelectData,class:"mr-2"},{default:c((()=>[D])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetExpandData,class:"mr-2"},{default:c((()=>[K])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetExpandData,class:"mr-2"},{default:c((()=>[S])),_:1},8,["onClick"])]),p("div",x,[p(o,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:c((()=>[B])),_:1}),p(o,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:c((()=>[_])),_:1}),p(o,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:c((()=>[g])),_:1}),p(o,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:c((()=>[N])),_:1})]),p(f,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:c((()=>[p(u,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])),_:1})};export default m;