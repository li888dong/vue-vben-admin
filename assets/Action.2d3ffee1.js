import{_ as s}from"./ScrollContainer.5baac586.js";import{_ as o}from"./index.f4701c19.js";import{d as r,r as t,e as l,dn as e,dp as a,h as i,o as n,i as c,j as d,aL as p,aM as m,l as u,bw as f,m as j}from"./index.41be92f1.js";import"./index.2171726d.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./RightOutlined.3aed54ec.js";/* empty css              */import"./useTimeout.b575b9d4.js";import"./useScrollTo.d04f868c.js";import"./index.c773b8e7.js";import"./index.22704268.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./isEqual.e72cf159.js";import"./toInteger.e5093268.js";import"./DownOutlined.53f083db.js";import"./index.29417513.js";import"./usePageContext.ad6a9e64.js";import"./transButton.07e10db0.js";import"./ArrowLeftOutlined.4891e66a.js";import"./vendor.3b1829c7.js";var b=r({components:{ScrollContainer:s,PageWrapper:o},setup(){const s=t(null),o=()=>{const o=l(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const x=f("data-v-331a2139");e("data-v-331a2139");const _={class:"my-4"},C=j(" 滚动到100px位置 "),T=j(" 滚动到800px位置 "),v=j(" 滚动到顶部 "),g=j(" 滚动到底部 "),w={class:"scroll-wrap"},k={class:"p-3"};a();const y=x(((s,o,r,t,l,e)=>{const a=i("a-button"),f=i("ScrollContainer"),j=i("PageWrapper");return n(),c(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:x((()=>[d("div",_,[d(a,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:x((()=>[C])),_:1}),d(a,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:x((()=>[T])),_:1}),d(a,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:x((()=>[v])),_:1}),d(a,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:x((()=>[g])),_:1})]),d("div",w,[d(f,{class:"mt-4",ref:"scrollRef"},{default:x((()=>[d("ul",k,[(n(),c(p,null,m(100,(s=>d("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},u(s),1))),64))])])),_:1},512)])])),_:1})}));b.render=y,b.__scopeId="data-v-331a2139";export default b;