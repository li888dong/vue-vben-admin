import{_ as e}from"./index.00fa045a.js";import{d as i}from"./table.e9c07f32.js";import{d as t,i as o,o as d,j as n,k as s,w as a}from"./index.a1da5219.js";import{f as r}from"./index.f935c75b.js";import{u as c}from"./useTable.ad41099a.js";import"./index.47fbc714.js";import"./index.fdcc7c21.js";import"./index.673364b0.js";import"./index.27bb0464.js";import"./RightOutlined.0ff6c3f8.js";import"./clickOutside.1bc34f02.js";import"./domUtils.941be389.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.21ee0d6a.js";import"./useTimeout.fc5397ab.js";import"./useAttrs.9c4a2f87.js";import"./useWindowSizeFn.9d6f6d4a.js";import"./index.d913b92a.js";import"./index.7eaf0b8a.js";import"./index.8d91dadc.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./FullscreenOutlined.f3bd68b1.js";import"./CheckOutlined.861808da.js";import"./uuid.467c825e.js";import"./index.a45b2b74.js";import"./useSortable.bb766778.js";import"./SettingOutlined.bc0a42f6.js";import"./useExpose.4342ccc1.js";import"./useForm.cb0543c4.js";import"./index.38c8e961.js";import"./index.9284d4e4.js";import"./index.f4c035d6.js";import"./index.d469528e.js";import"./index.b062bb5c.js";import"./index.643da10c.js";import"./download.75a30ff9.js";const l=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var m=t({components:{BasicTable:e,TableAction:r},setup(){const[e]=c({title:"TableAction组件及固定列示例",api:i,columns:l,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const p={class:"p-4"};m.render=function(e,i,t,r,c,l){const m=o("TableAction"),j=o("BasicTable");return d(),n("div",p,[s(j,{onRegister:e.registerTable},{action:a((({record:i})=>[s(m,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,i)}],dropDownActions:[{label:"启用",onClick:e.handleOpen.bind(null,i)}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default m;