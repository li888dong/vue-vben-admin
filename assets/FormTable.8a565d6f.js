import{_ as i}from"./index.00fa045a.js";import{getBasicColumns as e,getFormConfig as t}from"./tableData.7aa0192c.js";import{d as s}from"./table.e9c07f32.js";import{d as o,i as r,o as m,j as d,w as a,n}from"./index.a1da5219.js";import{u as p}from"./useTable.ad41099a.js";import"./index.47fbc714.js";import"./index.f935c75b.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.9c4a2f87.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.21ee0d6a.js";import"./useTimeout.fc5397ab.js";import"./useWindowSizeFn.9d6f6d4a.js";import"./index.d913b92a.js";import"./index.7eaf0b8a.js";import"./domUtils.941be389.js";import"./RightOutlined.0ff6c3f8.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./FullscreenOutlined.f3bd68b1.js";import"./index.a45b2b74.js";import"./index.b062bb5c.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.75a30ff9.js";import"./index.27bb0464.js";import"./clickOutside.1bc34f02.js";import"./CheckOutlined.861808da.js";import"./useSortable.bb766778.js";import"./SettingOutlined.bc0a42f6.js";import"./useExpose.4342ccc1.js";import"./useForm.cb0543c4.js";var c=o({components:{BasicTable:i},setup(){const[i]=p({title:"开启搜索区域",api:s,columns:e(),useSearchForm:!0,formConfig:t(),showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:i}}});const j=n(" custom-slot");c.render=function(i,e,t,s,o,n){const p=r("BasicTable");return m(),d(p,{onRegister:i.registerTable},{"form-custom":a((()=>[j])),_:1},8,["onRegister"])};export default c;