import{d as e,aG as s,aB as t,K as i,bQ as r,h as a,o,i as p,j as n,w as m,b0 as d,aL as l,aM as u,a7 as c,bx as f}from"./index.f6ab8b82.js";import{I as g}from"./index.18589081.js";import{_ as j}from"./index.32c247c7.js";import"./vendor.3b1829c7.js";import"./LeftOutlined.6591dd09.js";import"./RightOutlined.984a2567.js";import"./index.d14b8a91.js";import"./index.9f6ca6fb.js";import"./EllipsisOutlined.67d25fe6.js";import"./types.a1f593da.js";import"./isEqual.342bd97b.js";import"./toInteger.fe2536de.js";import"./DownOutlined.851157e1.js";/* empty css              */import"./index.d48b5972.js";import"./usePageContext.367642f4.js";import"./transButton.c5b4ef9a.js";import"./ArrowLeftOutlined.9cf601da.js";var b=e({name:"ImagePreview",components:{Image:g,PreviewGroup:g.PreviewGroup},props:{functional:s.bool,imageList:{type:Array}},setup(e){const{prefixCls:s}=t("image-preview");return{prefixCls:s,getImageList:i((()=>{const{imageList:s}=e;return s?s.map((e=>r(e)?{src:e,placeholder:!1}:e)):[]}))}}});b.render=function(e,s,t,i,r,g){const j=a("Image"),b=a("PreviewGroup");return o(),p("div",{class:e.prefixCls},[n(b,null,{default:m((()=>[!e.imageList||e.$slots.default?d(e.$slots,"default",{key:0}):(o(!0),p(l,{key:1},u(e.getImageList,(e=>(o(),p(j,c({key:e.src},e),f({_:2},[e.placeholder?{name:"placeholder",fn:m((()=>[n(j,c(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:1})],2)};const v=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var x=e({components:{PageWrapper:j,ImagePreview:b},setup:()=>({imgList:v})});x.render=function(e,s,t,i,r,d){const l=a("ImagePreview"),u=a("PageWrapper");return o(),p(u,{title:"图片预览示例"},{default:m((()=>[n(l,{imageList:e.imgList},null,8,["imageList"])])),_:1})};export default x;
