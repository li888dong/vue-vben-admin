import{d as t,aQ as e,K as r,e as a,h as s,o as n,i,w as o,m as p,l as m,j as d}from"./index.f6ab8b82.js";import{_ as u}from"./index.32c247c7.js";import"./vendor.3b1829c7.js";import"./index.d14b8a91.js";import"./index.9f6ca6fb.js";import"./RightOutlined.984a2567.js";import"./EllipsisOutlined.67d25fe6.js";import"./types.a1f593da.js";import"./isEqual.342bd97b.js";import"./toInteger.fe2536de.js";import"./DownOutlined.851157e1.js";/* empty css              */import"./index.d48b5972.js";import"./usePageContext.367642f4.js";import"./transButton.c5b4ef9a.js";import"./ArrowLeftOutlined.9cf601da.js";var l=t({name:"TestTab",components:{PageWrapper:u},setup(){const{currentRoute:t}=e();return{params:r((()=>a(t).params))}}});const j=d("br",null,null,-1),f=p(" Keep Alive "),b=d("input",null,null,-1);l.render=function(t,e,r,a,d,u){const l=s("PageWrapper");return n(),i(l,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:o((()=>[p(" Current Param : "+m(t.params)+" ",1),j,f,b])),_:1})};export default l;