import{_ as e,F as i}from"./index.267cb4f5.js";import{getCustomHeaderColumns as s}from"./tableData.252346e9.js";import{d as t}from"./table.39e5099c.js";import{B as o}from"./ScrollContainer.f5667a12.js";import{d as r,h as d,o as m,i as p,j as a,w as n,m as j}from"./index.f6ab8b82.js";import{u as c}from"./useTable.2ee5f570.js";import"./index.3e4667b6.js";import"./SearchOutlined.d49843fd.js";import"./CheckOutlined.eb38e39d.js";import"./DownOutlined.851157e1.js";import"./BasicForm.1ccffcd5.js";import"./index.a5b17467.js";import"./index.d1ebf712.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.9e49c85e.js";import"./isEqual.342bd97b.js";import"./get.e9184908.js";import"./_baseProperty.74f89655.js";import"./toInteger.fe2536de.js";import"./index.bd391284.js";import"./index.80d28e9e.js";import"./EyeOutlined.08ac592c.js";import"./index.2cfa05aa.js";import"./index.1551733f.js";import"./UpOutlined.d0aa5985.js";import"./index.f95ee533.js";import"./RightOutlined.984a2567.js";import"./RedoOutlined.0474473a.js";import"./index.9f6ca6fb.js";import"./EllipsisOutlined.67d25fe6.js";import"./types.a1f593da.js";import"./Tree.4726acb0.js";import"./util.a2889e7f.js";/* empty css              */import"./uuid.ac42918a.js";import"./index.57b5d53b.js";import"./DeleteOutlined.d76eb117.js";import"./index.d538ceae.js";import"./useModal.057bab1e.js";import"./useTimeout.53caa6d5.js";import"./useWindowSizeFn.4d1a1242.js";import"./FullscreenOutlined.57d4b87c.js";import"./index.1067be7b.js";import"./Dropdown.d6c9fca6.js";import"./index.18589081.js";import"./LeftOutlined.6591dd09.js";import"./download.c8bef705.js";import"./domUtils.6368f693.js";import"./_stringToArray.ba8c06ed.js";import"./index.ecbd3bc0.js";import"./DoubleLeftOutlined.3ce46edf.js";import"./DoubleRightOutlined.c79eaa7e.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.c5b4ef9a.js";import"./CaretDownFilled.c4e74c44.js";import"./useForm.c8d1bc5f.js";import"./clickOutside.fd27adc0.js";import"./useSortable.adeb65dd.js";import"./useExpose.09774893.js";import"./index.f5f9866d.js";import"./useScrollTo.437039b0.js";var l=r({components:{BasicTable:e,FormOutlined:i,BasicHelp:o},setup(){const[e]=c({title:"定高/头部自定义",api:t,columns:s(),canResize:!1,scroll:{y:100}});return{registerTable:e}}});const f={class:"p-4"},u=j(" 姓名 "),b=j(" 地址 ");l.render=function(e,i,s,t,o,r){const j=d("BasicHelp"),c=d("FormOutlined"),l=d("BasicTable");return m(),p("div",f,[a(l,{onRegister:e.registerTable},{customTitle:n((()=>[a("span",null,[u,a(j,{class:"ml-2",text:"姓名"})])])),customAddress:n((()=>[b,a(c,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default l;