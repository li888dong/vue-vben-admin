import{_ as e,F as i}from"./index.3b640060.js";import{getCustomHeaderColumns as s}from"./tableData.252346e9.js";import{d as t}from"./table.8fe731e1.js";import{B as o}from"./ScrollContainer.5baac586.js";import{d as r,h as d,o as m,i as p,j as a,w as n,m as j}from"./index.41be92f1.js";import{u as l}from"./useTable.778e9748.js";import"./index.bae81d9f.js";import"./SearchOutlined.3fc1b6fa.js";import"./CheckOutlined.fe96bf3a.js";import"./DownOutlined.53f083db.js";import"./BasicForm.9cd9c448.js";import"./index.d4aad386.js";import"./index.db893cd5.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.0e9e2104.js";import"./isEqual.e72cf159.js";import"./get.84c2e3a2.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5093268.js";import"./index.4ed7cd6b.js";import"./index.af08b3bd.js";import"./EyeOutlined.1c6e9165.js";import"./index.795d984c.js";import"./index.9e860acd.js";import"./UpOutlined.f8099382.js";import"./index.023d2b7e.js";import"./RightOutlined.3aed54ec.js";import"./RedoOutlined.46403121.js";import"./index.22704268.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./Tree.819df2d6.js";import"./util.cef41d7b.js";/* empty css              */import"./uuid.993ba7f2.js";import"./index.75c7d506.js";import"./DeleteOutlined.3856c40d.js";import"./index.7ddc5d25.js";import"./useModal.48ad3b85.js";import"./useTimeout.b575b9d4.js";import"./useWindowSizeFn.a1fff282.js";import"./FullscreenOutlined.6f1a37a8.js";import"./index.6b94a76a.js";import"./Dropdown.1e5f78a1.js";import"./index.3b68a10f.js";import"./LeftOutlined.4068ffc4.js";import"./download.95ca2ef5.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./index.e2903347.js";import"./DoubleLeftOutlined.e3dc0472.js";import"./DoubleRightOutlined.29a60a56.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.07e10db0.js";import"./CaretDownFilled.8bbebea4.js";import"./useForm.1e9d3d2f.js";import"./clickOutside.6cea1ff3.js";import"./useSortable.9e128bf1.js";import"./useExpose.b601eeb9.js";import"./index.2171726d.js";import"./useScrollTo.d04f868c.js";var c=r({components:{BasicTable:e,FormOutlined:i,BasicHelp:o},setup(){const[e]=l({title:"定高/头部自定义",api:t,columns:s(),canResize:!1,scroll:{y:100}});return{registerTable:e}}});const f={class:"p-4"},u=j(" 姓名 "),b=j(" 地址 ");c.render=function(e,i,s,t,o,r){const j=d("BasicHelp"),l=d("FormOutlined"),c=d("BasicTable");return m(),p("div",f,[a(c,{onRegister:e.registerTable},{customTitle:n((()=>[a("span",null,[u,a(j,{class:"ml-2",text:"姓名"})])])),customAddress:n((()=>[b,a(l,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default c;