import{d as o,u as t,aQ as e,aK as i,$ as s,bf as r,e as a,bg as d,cp as n,cq as p,h as l,o as m,i as c,j as f,l as u,k as j,bw as b}from"./index.1d8b385f.js";import{L as x}from"./index.e8887515.js";import{D as _,G as g,S as C}from"./siteSetting.c485f07c.js";import{G as F}from"./GithubFilled.6971870b.js";import"./vendor.3b1829c7.js";import"./isNumeric.2bec345d.js";import"./RightOutlined.04567b90.js";import"./LeftOutlined.e3b02fdb.js";import"./index.feda83ad.js";import"./EllipsisOutlined.2068088a.js";import"./types.40ed6fdc.js";import"./isEqual.93fdd584.js";import"./toInteger.416f421e.js";import"./index.95c10fda.js";import"./useTimeout.b2101222.js";import"./useHeaderSetting.f804b134.js";import"./domUtils.ddd08864.js";import"./_stringToArray.cc49bdca.js";import"./useSortable.39d3cc6b.js";import"./index.fd2324d6.js";import"./index.e2a60846.js";import"./useScrollTo.ff4d48ef.js";import"./animation.dd9fb5c4.js";import"./index.a0ffcd92.js";import"./useWindowSizeFn.e30cf532.js";import"./usePageContext.93c5f1fd.js";import"./index.463f5903.js";import"./clickOutside.ae0da015.js";import"./index.58c4abd2.js";import"./UpOutlined.69059219.js";import"./DownOutlined.012ff21f.js";import"./PlusOutlined.cf1e984a.js";import"./index.559970a4.js";var h=o({name:"LayoutFooter",components:{Footer:x.Footer,GithubFilled:F},setup(){const{t:o}=t(),{getShowFooter:n}=d(),{currentRoute:p}=e(),{prefixCls:l}=i("layout-footer");return{getShowLayoutFooter:s((()=>{var o;return a(n)&&!(null==(o=a(p).meta)?void 0:o.hiddenFooter)})),prefixCls:l,t:o,DOC_URL:_,GITHUB_URL:g,SITE_URL:C,openWindow:r}}});const w=b("data-v-47369c67");n("data-v-47369c67");const L=f("div",null,"Copyright ©2020 Vben Admin",-1);p();const S=w(((o,t,e,i,s,r)=>{const a=l("GithubFilled"),d=l("Footer");return o.getShowLayoutFooter?(m(),c(d,{key:0,class:o.prefixCls},{default:w((()=>[f("div",{class:`${o.prefixCls}__links`},[f("a",{onClick:t[1]||(t[1]=t=>o.openWindow(o.SITE_URL))},u(o.t("layout.footer.onlinePreview")),1),f(a,{onClick:t[2]||(t[2]=t=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),f("a",{onClick:t[3]||(t[3]=t=>o.openWindow(o.DOC_URL))},u(o.t("layout.footer.onlineDocument")),1)],2),L])),_:1},8,["class"])):j("",!0)}));h.render=S,h.__scopeId="data-v-47369c67";export default h;