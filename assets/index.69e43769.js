import{d as e,ce as a,aG as t,r as s,aB as n,K as r,a0 as i,e as o,x as l,h as f,o as c,i as p,j as m,bw as d}from"./index.41be92f1.js";import{g as u}from"./domUtils.e41c06df.js";import{u as g}from"./useWindowSizeFn.a1fff282.js";import"./vendor.3b1829c7.js";import"./_stringToArray.38ce1be5.js";var v=e({name:"IFrame",components:{Spin:a},props:{frameSrc:t.string.def("")},setup(){const e=s(!1),a=s(50),t=s(window.innerHeight),f=s(null),{prefixCls:c}=n("iframe-page");g(m,150,{immediate:!0});const p=r((()=>({height:`${o(t)}px`})));function m(){const e=o(f);if(!e)return;let{top:s}=u(e);s+=20,a.value=s,t.value=window.innerHeight-s;const n=document.documentElement.clientHeight-s;e.style.height=`${n}px`}function d(){e.value=!1,m()}return i((()=>{e.value=!0,l((()=>{const e=o(f);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",(()=>{d()})):e.onload=()=>{d()}}))})),{getWrapStyle:p,loading:e,frameRef:f,prefixCls:c}}});const h=d("data-v-10f18273"),x=h(((e,a,t,s,n,r)=>{const i=f("Spin");return c(),p("div",{class:e.prefixCls,style:e.getWrapStyle},[m(i,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:h((()=>[m("iframe",{src:e.frameSrc,class:`${e.prefixCls}__main`,ref:"frameRef"},null,10,["src"])])),_:1},8,["spinning","style"])],6)}));v.render=x,v.__scopeId="data-v-10f18273";export default v;