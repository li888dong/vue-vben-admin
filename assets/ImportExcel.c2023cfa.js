import{I as e}from"./index.64f80dd4.js";import{_ as t}from"./index.24079ee8.js";import{_ as i}from"./index.1656dc96.js";import{d as s,r as o,h as r,o as d,i as a,w as m,j as p,aL as n,aM as c,m as j}from"./index.31a6bf2e.js";import"./vendor.3b1829c7.js";import"./index.2bbd1659.js";import"./SearchOutlined.0d9f3d80.js";import"./CheckOutlined.0ebd038f.js";import"./DownOutlined.1e403334.js";import"./index.5e157f19.js";import"./index.968ffacb.js";import"./index.601921e0.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.1a727248.js";import"./isEqual.fe28526e.js";import"./get.7abf870e.js";import"./_baseProperty.74f89655.js";import"./toInteger.619adbee.js";import"./index.dfdd072a.js";import"./index.e23ba3a4.js";import"./EyeOutlined.1bac4c18.js";import"./index.b14eca62.js";import"./index.fbf0a767.js";import"./UpOutlined.8b6433c2.js";import"./index.02b72559.js";import"./RightOutlined.98400bb6.js";import"./RedoOutlined.c145b92f.js";import"./index.73c084f5.js";import"./EllipsisOutlined.f0621b27.js";import"./types.b304e151.js";import"./Tree.d50af26d.js";import"./util.6faf4612.js";/* empty css              */import"./uuid.e9f7de08.js";import"./index.e66974d5.js";import"./DeleteOutlined.57b0c53e.js";import"./index.ca43b57f.js";import"./index.b703360e.js";import"./useTimeout.d1efb3cd.js";import"./useWindowSizeFn.a92604ed.js";import"./index.81c7e8d3.js";import"./index.38622004.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./FullscreenOutlined.3ef66bbe.js";import"./index.5db0d006.js";import"./index.5aab3f9d.js";import"./index.c98520d1.js";import"./LeftOutlined.d2b7f4de.js";import"./download.5aeeacfe.js";import"./index.a107ffc5.js";import"./DoubleLeftOutlined.d85e33ee.js";import"./DoubleRightOutlined.def848d7.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.4f753738.js";import"./CaretDownFilled.69102767.js";import"./clickOutside.06955467.js";import"./useSortable.3482cfd3.js";import"./SettingOutlined.192ef0e3.js";import"./useExpose.12cfcd07.js";import"./useForm.9cf29718.js";import"./index.775a650d.js";import"./index.b24fa441.js";import"./usePageContext.c01714fa.js";import"./ArrowLeftOutlined.74abacd3.js";var l=s({components:{BasicTable:t,ImpExcel:e,PageWrapper:i},setup(){const e=o([]);return{loadDataSuccess:function(t){e.value=[];for(const i of t){const{header:t,results:s,meta:{sheetName:o}}=i,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:s,columns:r})}},tableListRef:e}}});const f=j(" 导入Excel ");l.render=function(e,t,i,s,o,j){const l=r("a-button"),u=r("ImpExcel"),b=r("BasicTable"),x=r("PageWrapper");return d(),a(x,{title:"excel数据导入示例"},{default:m((()=>[p(u,{onSuccess:e.loadDataSuccess},{default:m((()=>[p(l,{class:"m-3"},{default:m((()=>[f])),_:1})])),_:1},8,["onSuccess"]),(d(!0),a(n,null,c(e.tableListRef,((e,t)=>(d(),a(b,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default l;