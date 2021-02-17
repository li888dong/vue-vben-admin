import{f as e}from"./BasicForm.1ccffcd5.js";import{u as o}from"./useForm.c8d1bc5f.js";import{d as t}from"./ScrollContainer.f5667a12.js";import{_ as i}from"./index.32c247c7.js";import{d as l,h as s,o as p,i as n,w as r,j as a}from"./index.f6ab8b82.js";import"./index.a5b17467.js";import"./index.d1ebf712.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.9e49c85e.js";import"./isEqual.342bd97b.js";import"./get.e9184908.js";import"./_baseProperty.74f89655.js";import"./toInteger.fe2536de.js";import"./index.bd391284.js";import"./index.80d28e9e.js";import"./SearchOutlined.d49843fd.js";import"./EyeOutlined.08ac592c.js";import"./index.3e4667b6.js";import"./CheckOutlined.eb38e39d.js";import"./DownOutlined.851157e1.js";import"./index.2cfa05aa.js";import"./index.1551733f.js";import"./UpOutlined.d0aa5985.js";import"./index.f95ee533.js";import"./RightOutlined.984a2567.js";import"./RedoOutlined.0474473a.js";import"./index.9f6ca6fb.js";import"./EllipsisOutlined.67d25fe6.js";import"./types.a1f593da.js";import"./Tree.4726acb0.js";import"./util.a2889e7f.js";/* empty css              */import"./uuid.ac42918a.js";import"./index.57b5d53b.js";import"./DeleteOutlined.d76eb117.js";import"./index.d538ceae.js";import"./useModal.057bab1e.js";import"./useTimeout.53caa6d5.js";import"./useWindowSizeFn.4d1a1242.js";import"./FullscreenOutlined.57d4b87c.js";import"./index.1067be7b.js";import"./Dropdown.d6c9fca6.js";import"./index.18589081.js";import"./LeftOutlined.6591dd09.js";import"./download.c8bef705.js";import"./domUtils.6368f693.js";import"./_stringToArray.ba8c06ed.js";import"./index.f5f9866d.js";import"./useScrollTo.437039b0.js";import"./index.d14b8a91.js";import"./index.d48b5972.js";import"./usePageContext.367642f4.js";import"./transButton.c5b4ef9a.js";import"./ArrowLeftOutlined.9cf601da.js";var d=l({components:{BasicForm:e,CollapseContainer:t,PageWrapper:i},setup(){const[e]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[t]=o({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:t}}});d.render=function(e,o,t,i,l,d){const c=s("BasicForm"),m=s("CollapseContainer"),f=s("PageWrapper");return p(),n(f,{title:"可折叠表单示例"},{default:r((()=>[a(m,{title:"基础收缩示例"},{default:r((()=>[a(c,{onRegister:e.register},null,8,["onRegister"])])),_:1}),a(m,{title:"超过3行自动收起",class:"mt-4"},{default:r((()=>[a(c,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default d;