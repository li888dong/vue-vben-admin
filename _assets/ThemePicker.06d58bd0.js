let e=document.createElement("style");e.innerHTML=".vben-setting-theme-picker{display:flex;flex-wrap:wrap;margin:16px 0;justify-content:space-around}.vben-setting-theme-picker__item{width:20px;height:20px;cursor:pointer;border:1px solid #ddd;border-radius:2px}.vben-setting-theme-picker__item svg{display:none}.vben-setting-theme-picker__item--active{border:1px solid #31a5fe}.vben-setting-theme-picker__item--active svg{display:inline-block;margin:0 0 3px 3px;font-size:12px;fill:#fff!important}",document.head.appendChild(e);import{a as t,au as i,i as n,o as r,j as s,ad as a,aH as p,k as c}from"./index.247b4d5c.js";import"./xlsx.a48e520c.js";import"./index.f5b6f6ca.js";import{C as d}from"./CheckOutlined.fc1d12c2.js";import"./SettingOutlined.10ef9f35.js";import"./index.cffe7315.js";import"./useHeaderSetting.38c8c494.js";import{b as o}from"./index.f526bed4.js";var l=t({name:"ThemePicker",components:{CheckOutlined:d},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:t}=i("setting-theme-picker");return{prefixCls:t,handleClick:function(t){e.event&&o(e.event,t)}}}});l.render=function(e,t,i,d,o,l){const m=n("CheckOutlined");return r(),s("div",{class:e.prefixCls},[(r(!0),s(a,null,p(e.colorList||[],(t=>(r(),s("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[c(m)],14,["onClick"])))),128))],2)};export default l;