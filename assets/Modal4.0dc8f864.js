import{_ as e,b as i}from"./useModal.48ad3b85.js";import{f as o}from"./BasicForm.9cd9c448.js";import{u as t}from"./useForm.1e9d3d2f.js";import{d as s,r,h as d,o as m,i as n,w as p,j as a,a7 as l}from"./index.41be92f1.js";import"./useTimeout.b575b9d4.js";import"./useWindowSizeFn.a1fff282.js";import"./ScrollContainer.5baac586.js";import"./index.2171726d.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./RightOutlined.3aed54ec.js";/* empty css              */import"./useScrollTo.d04f868c.js";import"./FullscreenOutlined.6f1a37a8.js";import"./isEqual.e72cf159.js";import"./index.d4aad386.js";import"./index.db893cd5.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.0e9e2104.js";import"./get.84c2e3a2.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5093268.js";import"./index.4ed7cd6b.js";import"./index.af08b3bd.js";import"./SearchOutlined.3fc1b6fa.js";import"./EyeOutlined.1c6e9165.js";import"./index.bae81d9f.js";import"./CheckOutlined.fe96bf3a.js";import"./DownOutlined.53f083db.js";import"./index.795d984c.js";import"./index.9e860acd.js";import"./UpOutlined.f8099382.js";import"./index.023d2b7e.js";import"./RedoOutlined.46403121.js";import"./index.22704268.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./Tree.819df2d6.js";import"./util.cef41d7b.js";import"./uuid.993ba7f2.js";import"./index.75c7d506.js";import"./DeleteOutlined.3856c40d.js";import"./index.7ddc5d25.js";import"./index.6b94a76a.js";import"./Dropdown.1e5f78a1.js";import"./index.3b68a10f.js";import"./LeftOutlined.4068ffc4.js";import"./download.95ca2ef5.js";const j=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=s({components:{BasicModal:e,BasicForm:o},setup(){const e=r({}),[o,{}]=t({labelWidth:120,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=i((i=>{e.value={field2:i.data,field1:i.info}}));return{register:s,schemas:j,registerForm:o,model:e}}});c.render=function(e,i,o,t,s,r){const j=d("BasicForm"),c=d("BasicModal");return m(),n(c,l(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:p((()=>[a(j,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default c;