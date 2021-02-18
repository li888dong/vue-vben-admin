import e from"./DetailModal.382d87a4.js";import{_ as r}from"./index.3b640060.js";import{u as o}from"./useModal.48ad3b85.js";import{ci as i,d as t,r as s,u as a,aT as n,x as d,N as l,cj as m,h as p,o as c,i as j,aL as f,aM as u,a3 as b,b8 as x,j as g,w as E,m as y,l as D}from"./index.41be92f1.js";import{getColumns as O}from"./data.bfa7695a.js";import{_ as T}from"./BasicForm.9cd9c448.js";import{u as h}from"./useTable.778e9748.js";import"./index.d30021a9.js";import"./index.5e6035f5.js";import"./responsiveObserve.c545f1cc.js";import"./ScrollContainer.5baac586.js";import"./index.2171726d.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./RightOutlined.3aed54ec.js";/* empty css              */import"./useTimeout.b575b9d4.js";import"./useScrollTo.d04f868c.js";import"./get.84c2e3a2.js";import"./useDescription.1c753e57.js";import"./index.bae81d9f.js";import"./SearchOutlined.3fc1b6fa.js";import"./CheckOutlined.fe96bf3a.js";import"./DownOutlined.53f083db.js";import"./index.d4aad386.js";import"./index.db893cd5.js";import"./vendor.3b1829c7.js";import"./findIndex.0e9e2104.js";import"./isEqual.e72cf159.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5093268.js";import"./index.22704268.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./index.e2903347.js";import"./LeftOutlined.4068ffc4.js";import"./DoubleLeftOutlined.e3dc0472.js";import"./DoubleRightOutlined.29a60a56.js";import"./zh_CN.8094f4d6.js";import"./uuid.993ba7f2.js";import"./index.75c7d506.js";import"./util.cef41d7b.js";import"./DeleteOutlined.3856c40d.js";import"./EyeOutlined.1c6e9165.js";import"./Dropdown.1e5f78a1.js";import"./scrollTo.c1e0f75f.js";import"./transButton.07e10db0.js";import"./CaretDownFilled.8bbebea4.js";import"./useForm.1e9d3d2f.js";import"./clickOutside.6cea1ff3.js";import"./index.af08b3bd.js";import"./index.9e860acd.js";import"./UpOutlined.f8099382.js";import"./index.023d2b7e.js";import"./useSortable.9e128bf1.js";import"./useWindowSizeFn.a1fff282.js";import"./index.6b94a76a.js";import"./useExpose.b601eeb9.js";import"./FullscreenOutlined.6f1a37a8.js";import"./index.795d984c.js";import"./index.4ed7cd6b.js";import"./RedoOutlined.46403121.js";import"./Tree.819df2d6.js";import"./index.7ddc5d25.js";import"./index.3b68a10f.js";import"./download.95ca2ef5.js";var w;(w||(w={})).Error="/error";var C=t({name:"ErrorHandler",components:{DetailModal:e,BasicTable:r,TableAction:T},setup(){const e=s(),r=s([]),{t:t}=a(),[p,{setTableData:c}]=h({title:t("sys.errorLog.tableTitle"),columns:O(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[j,{openModal:f}]=o();return n((()=>m.getErrorInfoState),(e=>{d((()=>{c(l(e))}))}),{immediate:!0}),{register:p,registerModal:j,handleDetail:function(r){e.value=r,f(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){r.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await i.request({url:w.Error,method:"GET"})},imgList:r,rowInfo:e,t:t}}});const R={class:"p-4"};C.render=function(e,r,o,i,t,s){const a=p("DetailModal"),n=p("a-button"),d=p("TableAction"),l=p("BasicTable");return c(),j("div",R,[(c(!0),j(f,null,u(e.imgList,(e=>b((c(),j("img",{key:e,src:e},null,8,["src"])),[[x,!1]]))),128)),g(a,{info:e.rowInfo,onRegister:e.registerModal},null,8,["info","onRegister"]),g(l,{onRegister:e.register,class:"error-handle-table"},{toolbar:E((()=>[g(n,{onClick:e.fireVueError,type:"primary"},{default:E((()=>[y(D(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),g(n,{onClick:e.fireResourceError,type:"primary"},{default:E((()=>[y(D(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),g(n,{onClick:e.fireAjaxError,type:"primary"},{default:E((()=>[y(D(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:E((({record:r})=>[g(d,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default C;