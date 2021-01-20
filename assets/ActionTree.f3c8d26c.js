import{B as e,t}from"./data.bf746b7c.js";import{a}from"./index.d913b92a.js";import{d as n,r as s,h as l,f as d,i as c,o,j as i,w as r,k as f,n as u}from"./index.a1da5219.js";import{_ as p}from"./index.9ef011db.js";import"./index.7eaf0b8a.js";import"./domUtils.941be389.js";import"./RightOutlined.0ff6c3f8.js";import"./index.8d91dadc.js";import"./useTimeout.fc5397ab.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.9fbd6c39.js";import"./usePageContext.40689edc.js";var m=n({components:{BasicTree:e,CollapseContainer:a,PageWrapper:p},setup(){const e=s(null),{createMessage:a}=l();function n(){const t=d(e);if(!t)throw new Error("tree is null!");return t}return{treeData:t,treeRef:e,handleLevel:function(e){n().filterByLevel(e)},handleSetCheckData:function(){n().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=n().getCheckedKeys();a.success(JSON.stringify(e))},handleSetSelectData:function(){n().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=n().getSelectedKeys();a.success(JSON.stringify(e))},handleSetExpandData:function(){n().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=n().getExpandedKeys();a.success(JSON.stringify(e))},appendNodeByKey:function(e=null){n().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){n().deleteNodeByKey(e)},updateNodeByKey:function(e){n().updateNodeByKey(e,{title:"parent2-new"})}}}});const y={class:"mb-4"},C=u("显示到第2级"),h=u("显示到第1级"),k=u("设置勾选数据"),x=u("获取勾选数据"),K=u("设置选中数据"),j=u("获取选中数据"),D=u("设置展开数据"),S=u("获取展开数据"),b={class:"mb-4"},B=u("添加根节点"),_=u("添加在parent3内添加节点"),N=u("删除parent3节点"),g=u("更新parent2节点");m.render=function(e,t,a,n,s,l){const d=c("a-button"),u=c("BasicTree"),p=c("CollapseContainer"),m=c("PageWrapper");return o(),i(m,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:r((()=>[f("div",y,[f(d,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:r((()=>[C])),_:1}),f(d,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:r((()=>[h])),_:1}),f(d,{onClick:e.handleSetCheckData,class:"mr-2"},{default:r((()=>[k])),_:1},8,["onClick"]),f(d,{onClick:e.handleGetCheckData,class:"mr-2"},{default:r((()=>[x])),_:1},8,["onClick"]),f(d,{onClick:e.handleSetSelectData,class:"mr-2"},{default:r((()=>[K])),_:1},8,["onClick"]),f(d,{onClick:e.handleGetSelectData,class:"mr-2"},{default:r((()=>[j])),_:1},8,["onClick"]),f(d,{onClick:e.handleSetExpandData,class:"mr-2"},{default:r((()=>[D])),_:1},8,["onClick"]),f(d,{onClick:e.handleGetExpandData,class:"mr-2"},{default:r((()=>[S])),_:1},8,["onClick"])]),f("div",b,[f(d,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:r((()=>[B])),_:1}),f(d,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:r((()=>[_])),_:1}),f(d,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:r((()=>[N])),_:1}),f(d,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:r((()=>[g])),_:1})]),f(p,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:r((()=>[f(u,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])),_:1})};export default m;