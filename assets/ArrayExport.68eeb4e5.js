import{_ as i}from"./index.00fa045a.js";import"./index.f6731d38.js";import{c as e,d as t,a as o,b as s,e as a}from"./data.e844138d.js";import{_ as d}from"./index.9ef011db.js";import{d as r,i as n,o as m,j as p,w as c,k as j,n as f}from"./index.a1da5219.js";import"./index.47fbc714.js";import"./index.f935c75b.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.9c4a2f87.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.21ee0d6a.js";import"./useTimeout.fc5397ab.js";import"./useWindowSizeFn.9d6f6d4a.js";import"./index.d913b92a.js";import"./index.7eaf0b8a.js";import"./domUtils.941be389.js";import"./RightOutlined.0ff6c3f8.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./FullscreenOutlined.f3bd68b1.js";import"./index.a45b2b74.js";import"./index.b062bb5c.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.75a30ff9.js";import"./index.27bb0464.js";import"./clickOutside.1bc34f02.js";import"./CheckOutlined.861808da.js";import"./useSortable.bb766778.js";import"./SettingOutlined.bc0a42f6.js";import"./useExpose.4342ccc1.js";import"./useForm.cb0543c4.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.40689edc.js";var x=r({components:{BasicTable:i,PageWrapper:d},setup:()=>({aoaToExcel:function(){o({data:s,header:a,filename:"二维数组方式导出excel.xlsx"})},columns:e,data:t})});const b=f("导出");x.render=function(i,e,t,o,s,a){const d=n("a-button"),r=n("BasicTable"),f=n("PageWrapper");return m(),p(f,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:c((()=>[j(r,{title:"基础表格",columns:i.columns,dataSource:i.data},{toolbar:c((()=>[j(d,{onClick:i.aoaToExcel},{default:c((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default x;