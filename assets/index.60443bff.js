import{d as e,h as t,o,i,w as r,j as s}from"./index.41be92f1.js";import{e as n,S as d}from"./ScrollContainer.5baac586.js";import a from"./TargetContent.96508bdd.js";import{_ as p}from"./index.f4701c19.js";import"./vendor.3b1829c7.js";import"./index.2171726d.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./RightOutlined.3aed54ec.js";/* empty css              */import"./useTimeout.b575b9d4.js";import"./useScrollTo.d04f868c.js";import"./index.29f2f298.js";import"./index.3bb2b6d4.js";import"./UpOutlined.f8099382.js";import"./LeftOutlined.4068ffc4.js";import"./DownOutlined.53f083db.js";import"./PlusOutlined.2fb02abb.js";import"./index.4ed7cd6b.js";import"./index.db893cd5.js";import"./responsiveObserve.c545f1cc.js";import"./index.c773b8e7.js";import"./index.22704268.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./isEqual.e72cf159.js";import"./toInteger.e5093268.js";import"./index.29417513.js";import"./usePageContext.ad6a9e64.js";import"./transButton.07e10db0.js";import"./ArrowLeftOutlined.4891e66a.js";var m=e({components:{LazyContainer:n,PageWrapper:p,TargetContent:a,Skeleton:d}});const j={class:"lazy-base-demo-wrap"},l=s("h1",null,"向下滚动",-1),b={class:"lazy-base-demo-box"};m.render=function(e,n,d,a,p,m){const c=t("TargetContent"),f=t("Skeleton"),u=t("LazyContainer"),x=t("PageWrapper");return o(),i(x,{title:"懒加载基础示例",content:"向下滚动到可见区域才会加载组件"},{default:r((()=>[s("div",j,[l,s("div",b,[s(u,null,{skeleton:r((()=>[s(f,{rows:10})])),default:r((()=>[s(c)])),_:1})])])])),_:1})};export default m;