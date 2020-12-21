let e=document.createElement("style");e.innerHTML=".vben-header-lock-modal__entry{position:relative;height:240px;padding:130px 30px 60px;background:#fff;border-radius:10px}.vben-header-lock-modal__header{position:absolute;top:0;left:calc(50% - 45px);width:auto;text-align:center}.vben-header-lock-modal__header-img{width:70px;border-radius:50%}.vben-header-lock-modal__header-name{margin-top:5px}.vben-header-lock-modal__footer{text-align:center}",document.head.appendChild(e);import{a as r,u as a,au as s,s as t,dn as o,g as i,i as d,o as n,j as l,w as c,k as p,n as m,p as u,v as f}from"./index.247b4d5c.js";import"./xlsx.a48e520c.js";import"./index.1c7fa85c.js";import"./Trigger.455696d5.js";import"./omit.c3408158.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.1146322b.js";import"./CheckOutlined.24bcfa51.js";import{s as x}from"./index.abd25a23.js";import"./colors.f2807cc8.js";import"./RightOutlined.f62c5ce2.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7125d4e8.js";import"./index.d9d25bcd.js";import"./index.a172b251.js";import"./index.f0bc60c2.js";import"./UpOutlined.9349b0f9.js";import"./index.0a240057.js";import"./index.a3477a19.js";import"./index.855b8b9a.js";import"./index.c667da3b.js";import"./useDebounce.bc3eb614.js";import"./useEventListener.2200551d.js";import"./useBreakpoint.a030ce03.js";import{_ as j}from"./header.0299ae16.js";import"./index.04a7b444.js";import"./tsxHelper.907e86d2.js";import"./index.81ea157a.js";import"./index.e5f3b34f.js";import{u as b}from"./useForm.7dd57826.js";import{B as h,a as g}from"./index.fa30f249.js";var _=r({name:"LockModal",components:{BasicModal:h,BasicForm:x},setup(){const{t:e}=a(),{prefixCls:r}=s("header-lock-modal"),d=t((()=>{var e;return null==(e=i.getUserInfoState)?void 0:e.realName})),[n,{closeModal:l}]=g(),[c,{validateFields:p,resetFields:m}]=b({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:r,getRealName:d,register:n,registerForm:c,handleLock:async function(){const e=(await p()).password;l(),o.commitLockInfoState({isLock:!0,pwd:e}),await m()}}}});_.render=function(e,r,a,s,t,o){const i=d("BasicForm"),x=d("a-button"),b=d("BasicModal");return n(),l(b,f({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:c((()=>[p("div",{class:`${e.prefixCls}__entry`},[p("div",{class:`${e.prefixCls}__header`},[p("img",{src:j,class:`${e.prefixCls}__header-img`},null,2),p("p",{class:`${e.prefixCls}__header-name`},m(e.getRealName),3)],2),p(i,{onRegister:e.registerForm,layout:"vertical"},null,8,["onRegister"]),p("div",{class:`${e.prefixCls}__footer`},[p(x,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:c((()=>[u(m(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default _;