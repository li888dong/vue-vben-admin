import{d as e,b1 as i,u as t,h as s,o,i as r,w as n,j as l,l as d}from"./index.f6ab8b82.js";/* empty css              */import{u as p}from"./BasicForm.1ccffcd5.js";import{u as m}from"./useFullScreen.8b455659.js";import{F as a,a as u}from"./FullscreenOutlined.57d4b87c.js";import"./vendor.3b1829c7.js";import"./index.a5b17467.js";import"./index.d1ebf712.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.9e49c85e.js";import"./isEqual.342bd97b.js";import"./get.e9184908.js";import"./_baseProperty.74f89655.js";import"./toInteger.fe2536de.js";import"./index.bd391284.js";import"./index.80d28e9e.js";import"./SearchOutlined.d49843fd.js";import"./EyeOutlined.08ac592c.js";import"./index.3e4667b6.js";import"./CheckOutlined.eb38e39d.js";import"./DownOutlined.851157e1.js";import"./index.2cfa05aa.js";import"./index.1551733f.js";import"./UpOutlined.d0aa5985.js";import"./index.f95ee533.js";import"./RightOutlined.984a2567.js";import"./RedoOutlined.0474473a.js";import"./index.9f6ca6fb.js";import"./EllipsisOutlined.67d25fe6.js";import"./types.a1f593da.js";import"./Tree.4726acb0.js";import"./util.a2889e7f.js";import"./uuid.ac42918a.js";import"./index.57b5d53b.js";import"./DeleteOutlined.d76eb117.js";import"./index.d538ceae.js";import"./useModal.057bab1e.js";import"./useTimeout.53caa6d5.js";import"./useWindowSizeFn.4d1a1242.js";import"./ScrollContainer.f5667a12.js";import"./index.f5f9866d.js";import"./domUtils.6368f693.js";import"./_stringToArray.ba8c06ed.js";import"./useScrollTo.437039b0.js";import"./index.1067be7b.js";import"./Dropdown.d6c9fca6.js";import"./index.18589081.js";import"./LeftOutlined.6591dd09.js";import"./download.c8bef705.js";var c=e({name:"FullScreenSetting",components:{FullscreenExitOutlined:a,FullscreenOutlined:u,Tooltip:i},setup(){const e=p(),{t:i}=t(),{toggleFullscreen:s,isFullscreenRef:o}=m(e.wrapRef);return{handleFullScreen:function(){s()},isFullscreenRef:o,t:i}}});c.render=function(e,i,t,p,m,a){const u=s("FullscreenOutlined"),c=s("FullscreenExitOutlined"),j=s("Tooltip");return o(),r(j,{placement:"top"},{title:n((()=>[l("span",null,d(e.t("component.table.settingFullScreen")),1)])),default:n((()=>[e.isFullscreenRef?(o(),r(c,{key:1,onClick:e.handleFullScreen},null,8,["onClick"])):(o(),r(u,{key:0,onClick:e.handleFullScreen},null,8,["onClick"]))])),_:1})};export default c;