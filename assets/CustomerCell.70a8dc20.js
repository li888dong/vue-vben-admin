import{d as e,h as t,o as i,i as s,j as o,w as d,m as r,l as n}from"./index.31a6bf2e.js";import{T as m}from"./index.b14eca62.js";import{_ as a,T as p}from"./index.24079ee8.js";import{d as l}from"./table.9f42af39.js";import{u as j}from"./useTable.a4fd8e2b.js";import"./vendor.3b1829c7.js";import"./index.2bbd1659.js";import"./SearchOutlined.0d9f3d80.js";import"./CheckOutlined.0ebd038f.js";import"./DownOutlined.1e403334.js";import"./index.5e157f19.js";import"./index.968ffacb.js";import"./index.601921e0.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.1a727248.js";import"./isEqual.fe28526e.js";import"./get.7abf870e.js";import"./_baseProperty.74f89655.js";import"./toInteger.619adbee.js";import"./index.dfdd072a.js";import"./index.e23ba3a4.js";import"./EyeOutlined.1bac4c18.js";import"./index.fbf0a767.js";import"./UpOutlined.8b6433c2.js";import"./index.02b72559.js";import"./RightOutlined.98400bb6.js";import"./RedoOutlined.c145b92f.js";import"./index.73c084f5.js";import"./EllipsisOutlined.f0621b27.js";import"./types.b304e151.js";import"./Tree.d50af26d.js";import"./util.6faf4612.js";/* empty css              */import"./uuid.e9f7de08.js";import"./index.e66974d5.js";import"./DeleteOutlined.57b0c53e.js";import"./index.ca43b57f.js";import"./index.b703360e.js";import"./useTimeout.d1efb3cd.js";import"./useWindowSizeFn.a92604ed.js";import"./index.81c7e8d3.js";import"./index.38622004.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./FullscreenOutlined.3ef66bbe.js";import"./index.5db0d006.js";import"./index.5aab3f9d.js";import"./index.c98520d1.js";import"./LeftOutlined.d2b7f4de.js";import"./download.5aeeacfe.js";import"./index.a107ffc5.js";import"./DoubleLeftOutlined.d85e33ee.js";import"./DoubleRightOutlined.def848d7.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.4f753738.js";import"./CaretDownFilled.69102767.js";import"./clickOutside.06955467.js";import"./useSortable.3482cfd3.js";import"./SettingOutlined.192ef0e3.js";import"./useExpose.12cfcd07.js";import"./useForm.9cf29718.js";const c=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var f=e({components:{BasicTable:a,TableImg:p,Tag:m},setup(){const[e]=j({title:"自定义列内容",api:l,columns:c,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const u={class:"p-4"};f.render=function(e,m,a,p,l,j){const c=t("Tag"),f=t("TableImg"),b=t("BasicTable");return i(),s("div",u,[o(b,{onRegister:e.registerTable},{id:d((({record:e})=>[r(" ID: "+n(e.id),1)])),no:d((({record:e})=>[o(c,{color:"green"},{default:d((()=>[r(n(e.no),1)])),_:2},1024)])),img:d((()=>[o(f,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:d((({record:e})=>[o(c,{color:"green"},{default:d((()=>[r(n(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default f;