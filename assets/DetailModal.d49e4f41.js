import{_ as t}from"./useModal.057bab1e.js";import{D as s}from"./index.4d971f5c.js";import{u as e}from"./useDescription.e2b6de5c.js";import{d as o,u as r,h as i,o as a,i as n,w as d,j as m,a7 as p}from"./index.f6ab8b82.js";import{getDescSchema as c}from"./data.20a67534.js";import"./useTimeout.53caa6d5.js";import"./useWindowSizeFn.4d1a1242.js";import"./ScrollContainer.f5667a12.js";import"./index.f5f9866d.js";import"./domUtils.6368f693.js";import"./_stringToArray.ba8c06ed.js";import"./RightOutlined.984a2567.js";/* empty css              */import"./useScrollTo.437039b0.js";import"./FullscreenOutlined.57d4b87c.js";import"./isEqual.342bd97b.js";import"./index.c0976d42.js";import"./responsiveObserve.c545f1cc.js";import"./get.e9184908.js";import"./vendor.3b1829c7.js";import"./index.2cfa05aa.js";var l=o({name:"ErrorLogDetailModal",components:{BasicModal:t,Description:s},props:{info:{type:Object,default:null}},setup(){const{t:t}=r(),[s]=e({column:2,schema:c()});return{register:s,useI18n:r,t:t}}});l.render=function(t,s,e,o,r,c){const l=i("Description"),j=i("BasicModal");return a(),n(j,p({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:d((()=>[m(l,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;