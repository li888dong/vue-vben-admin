import{d as e,aB as s,h as i,o as r,i as t,j as a,w as l,k as n,aL as o,aM as m}from"./index.f6ab8b82.js";import{I as p}from"./index.18589081.js";import"./vendor.3b1829c7.js";import"./LeftOutlined.6591dd09.js";import"./RightOutlined.984a2567.js";var u=e({name:"TableImage",components:{Image:p,PreviewGroup:p.PreviewGroup},props:{imgList:{type:Array,default:null},size:{type:Number,default:40}},setup(){const{prefixCls:e}=s("basic-table-img");return{prefixCls:e}}});u.render=function(e,s,p,u,d,f){const g=i("Image"),c=i("PreviewGroup");return e.imgList&&e.imgList.length?(r(),t("div",{key:0,class:e.prefixCls},[a(c,null,{default:l((()=>[(r(!0),t(o,null,m(e.imgList,(s=>(r(),t(g,{key:s,width:e.size,src:s},null,8,["width","src"])))),128))])),_:1})],2)):n("",!0)};export default u;