import{d as e,aK as i,h as t,o as s,i as r,aL as o,aM as n,j as a}from"./index.31a6bf2e.js";import{b as d}from"./index.11f65cac.js";import{C as p}from"./CheckOutlined.0ebd038f.js";import"./vendor.3b1829c7.js";import"./index.5db0d006.js";import"./index.39de9779.js";import"./index.13f3ec4a.js";import"./index.81c7e8d3.js";import"./index.38622004.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./RightOutlined.98400bb6.js";/* empty css              */import"./useTimeout.d1efb3cd.js";import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./ArrowLeftOutlined.74abacd3.js";import"./isEqual.fe28526e.js";import"./useHeaderSetting.9124fbba.js";import"./SettingOutlined.192ef0e3.js";var m=e({name:"ThemePicker",components:{CheckOutlined:p},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:t}=i("setting-theme-picker");return{prefixCls:t,handleClick:function(i){e.event&&d(e.event,i)}}}});m.render=function(e,i,d,p,m,c){const l=t("CheckOutlined");return s(),r("div",{class:e.prefixCls},[(s(!0),r(o,null,n(e.colorList||[],(i=>(s(),r("span",{key:i,onClick:t=>e.handleClick(i),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===i}],style:{background:i}},[a(l)],14,["onClick"])))),128))],2)};export default m;