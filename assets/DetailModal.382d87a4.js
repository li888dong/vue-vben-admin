import{_ as e}from"./useModal.48ad3b85.js";import{D as t}from"./index.d30021a9.js";import{u as s}from"./useDescription.1c753e57.js";import{d as o,u as r,h as i,o as a,i as n,w as d,j as m,a7 as p}from"./index.41be92f1.js";import{getDescSchema as c}from"./data.bfa7695a.js";import"./useTimeout.b575b9d4.js";import"./useWindowSizeFn.a1fff282.js";import"./ScrollContainer.5baac586.js";import"./index.2171726d.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./RightOutlined.3aed54ec.js";/* empty css              */import"./useScrollTo.d04f868c.js";import"./FullscreenOutlined.6f1a37a8.js";import"./isEqual.e72cf159.js";import"./index.5e6035f5.js";import"./responsiveObserve.c545f1cc.js";import"./get.84c2e3a2.js";import"./vendor.3b1829c7.js";import"./index.795d984c.js";var l=o({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:t},props:{info:{type:Object,default:null}},setup(){const{t:e}=r(),[t]=s({column:2,schema:c()});return{register:t,useI18n:r,t:e}}});l.render=function(e,t,s,o,r,c){const l=i("Description"),f=i("BasicModal");return a(),n(f,p({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:d((()=>[m(l,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;