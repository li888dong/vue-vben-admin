import{d as e}from"./ScrollContainer.5baac586.js";import{r as t,e as r,a1 as o,a$ as n,d as a,h as s,o as i,i as l,w as d,j as m,m as c}from"./index.41be92f1.js";import{_ as p}from"./index.f4701c19.js";import"./index.2171726d.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./RightOutlined.3aed54ec.js";/* empty css              */import"./useTimeout.b575b9d4.js";import"./useScrollTo.d04f868c.js";import"./vendor.3b1829c7.js";import"./index.c773b8e7.js";import"./index.22704268.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./isEqual.e72cf159.js";import"./toInteger.e5093268.js";import"./DownOutlined.53f083db.js";import"./index.29417513.js";import"./usePageContext.ad6a9e64.js";import"./transButton.07e10db0.js";import"./ArrowLeftOutlined.4891e66a.js";const u=Symbol("watermark-dom");var f=a({components:{CollapseContainer:e,PageWrapper:p},setup(){const e=t(null),{setWatermark:a,clear:s}=function(e=t(document.body)){let a=()=>{};const s=u.toString(),i=()=>{const t=document.getElementById(s);if(t){const o=r(e);o&&o.removeChild(t)}window.removeEventListener("resize",a)},l=t=>{i();const o=document.createElement("canvas");o.width=300,o.height=240;const n=o.getContext("2d");n&&(n.rotate(-20*Math.PI/120),n.font="15px Vedana",n.fillStyle="rgba(0, 0, 0, 0.15)",n.textAlign="left",n.textBaseline="middle",n.fillText(t,o.width/20,o.height));const a=document.createElement("div");a.id=s,a.style.pointerEvents="none",a.style.top="3px",a.style.left="0px",a.style.position="absolute",a.style.zIndex="100000",a.style.width=document.documentElement.clientWidth+"px",a.style.height=document.documentElement.clientHeight+"px",a.style.background="url("+o.toDataURL("image/png")+") left top repeat";const l=r(e);return l&&l.appendChild(a),s};return{setWatermark:function(e){l(e),a=()=>{l(e)},window.addEventListener("resize",a),n()&&o((()=>{i()}))},clear:i}}();return{setWatermark:a,clear:s,areaRef:e}}});const j=c(" Create "),g=c(" Clear "),b=c(" Reset ");f.render=function(e,t,r,o,n,a){const c=s("a-button"),p=s("CollapseContainer"),u=s("PageWrapper");return i(),l(u,{title:"水印示例"},{default:d((()=>[m(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:d((()=>[m(c,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:d((()=>[j])),_:1}),m(c,{color:"error",class:"mr-2",onClick:e.clear},{default:d((()=>[g])),_:1},8,["onClick"]),m(c,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:d((()=>[b])),_:1})])),_:1})])),_:1})};export default f;