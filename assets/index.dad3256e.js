import{d as e,aQ as t,K as r,e as s,h as a,o as n,i,w as o,m as p,l as m,j as d}from"./index.41be92f1.js";import{_ as u}from"./index.f4701c19.js";import"./vendor.3b1829c7.js";import"./index.c773b8e7.js";import"./index.22704268.js";import"./RightOutlined.3aed54ec.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./isEqual.e72cf159.js";import"./toInteger.e5093268.js";import"./DownOutlined.53f083db.js";/* empty css              */import"./index.29417513.js";import"./usePageContext.ad6a9e64.js";import"./transButton.07e10db0.js";import"./ArrowLeftOutlined.4891e66a.js";var l=e({name:"TestTab",components:{PageWrapper:u},setup(){const{currentRoute:e}=t();return{params:r((()=>s(e).params))}}});const j=d("br",null,null,-1),c=p(" Keep Alive "),f=d("input",null,null,-1);l.render=function(e,t,r,s,d,u){const l=a("PageWrapper");return n(),i(l,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:o((()=>[p(" Current Param : "+m(e.params)+" ",1),j,c,f])),_:1})};export default l;