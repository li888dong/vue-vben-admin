import{_ as e}from"./index.5e157f19.js";import{d as t,g as o,h as i,o as s,i as r,bw as n,j as p}from"./index.31a6bf2e.js";import{_ as a}from"./index.1656dc96.js";import{u as d}from"./useForm.9cf29718.js";import"./index.968ffacb.js";import"./index.601921e0.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.1a727248.js";import"./isEqual.fe28526e.js";import"./get.7abf870e.js";import"./_baseProperty.74f89655.js";import"./toInteger.619adbee.js";import"./index.dfdd072a.js";import"./index.e23ba3a4.js";import"./SearchOutlined.0d9f3d80.js";import"./EyeOutlined.1bac4c18.js";import"./index.2bbd1659.js";import"./CheckOutlined.0ebd038f.js";import"./DownOutlined.1e403334.js";import"./index.b14eca62.js";import"./index.fbf0a767.js";import"./UpOutlined.8b6433c2.js";import"./index.02b72559.js";import"./RightOutlined.98400bb6.js";import"./RedoOutlined.c145b92f.js";import"./index.73c084f5.js";import"./EllipsisOutlined.f0621b27.js";import"./types.b304e151.js";import"./Tree.d50af26d.js";import"./util.6faf4612.js";/* empty css              */import"./uuid.e9f7de08.js";import"./index.e66974d5.js";import"./DeleteOutlined.57b0c53e.js";import"./index.ca43b57f.js";import"./index.b703360e.js";import"./useTimeout.d1efb3cd.js";import"./useWindowSizeFn.a92604ed.js";import"./index.81c7e8d3.js";import"./index.38622004.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./FullscreenOutlined.3ef66bbe.js";import"./index.5db0d006.js";import"./index.5aab3f9d.js";import"./index.c98520d1.js";import"./LeftOutlined.d2b7f4de.js";import"./download.5aeeacfe.js";import"./index.775a650d.js";import"./index.b24fa441.js";import"./usePageContext.c01714fa.js";import"./transButton.4f753738.js";import"./ArrowLeftOutlined.74abacd3.js";const l=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var m=t({components:{BasicForm:e,PageWrapper:a},setup(){const{createMessage:e}=o(),[t,{validate:i,setProps:s}]=d({labelCol:{span:7},wrapperCol:{span:10},schemas:l,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await i(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(t){}}});return{register:t}}});const c=n("data-v-5cbaa0f1"),u=c(((e,t,o,n,a,d)=>{const l=i("BasicForm"),m=i("PageWrapper");return s(),r(m,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:c((()=>[p(l,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));m.render=u,m.__scopeId="data-v-5cbaa0f1";export default m;