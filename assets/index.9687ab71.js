import{d as e,bQ as r,i,o,j as s,w as a,k as t,n}from"./index.a1da5219.js";import"./index.f4c035d6.js";import{u as p}from"./index.259530a3.js";import d from"./Drawer1.c5b358a4.js";import m from"./Drawer2.70e3b285.js";import c from"./Drawer3.507716c9.js";import f from"./Drawer4.d499ac6f.js";import w from"./Drawer5.215d1d38.js";import{_ as l}from"./index.9ef011db.js";import"./index.6f7c662f.js";import"./index.d913b92a.js";import"./index.7eaf0b8a.js";import"./domUtils.941be389.js";import"./RightOutlined.0ff6c3f8.js";import"./index.8d91dadc.js";import"./useTimeout.fc5397ab.js";import"./useScrollTo.d6397d0a.js";import"./animation.faff1b9d.js";import"./useAttrs.9c4a2f87.js";import"./index.f935c75b.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.21ee0d6a.js";import"./useWindowSizeFn.9d6f6d4a.js";import"./FullscreenOutlined.f3bd68b1.js";import"./index.a45b2b74.js";import"./index.b062bb5c.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.75a30ff9.js";import"./useForm.cb0543c4.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.40689edc.js";var j=e({components:{Alert:r,PageWrapper:l,Drawer1:d,Drawer2:m,Drawer3:c,Drawer4:f,Drawer5:w},setup(){const[e,{openDrawer:r,setDrawerProps:i}]=p(),[o,{openDrawer:s}]=p(),[a,{openDrawer:t}]=p(),[n,{openDrawer:d}]=p(),[m,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:o,openDrawer2:s,register3:a,openDrawer3:t,register4:n,register5:m,openDrawer5:c,send:function(){d(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const D=n("打开Drawer"),u=n("打开Drawer"),g=n("打开Drawer"),x=n("打开Drawer并传递数据"),b=n("打开详情Drawer");j.render=function(e,r,n,p,d,m){const c=i("Alert"),f=i("a-button"),w=i("Drawer1"),l=i("Drawer2"),j=i("Drawer3"),y=i("Drawer4"),R=i("Drawer5"),k=i("PageWrapper");return o(),s(k,{title:"抽屉组件使用示例"},{default:a((()=>[t(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:a((()=>[D])),_:1},8,["onClick"]),t(c,{message:"内外同时控制显示隐藏","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:r[1]||(r[1]=r=>e.openDrawer2(!0))},{default:a((()=>[u])),_:1}),t(c,{message:"自适应高度/显示footer","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:r[2]||(r[2]=r=>e.openDrawer3(!0))},{default:a((()=>[g])),_:1}),t(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:e.send},{default:a((()=>[x])),_:1},8,["onClick"]),t(c,{message:"详情页模式","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:r[3]||(r[3]=r=>e.openDrawer5(!0))},{default:a((()=>[b])),_:1}),t(w,{onRegister:e.register1},null,8,["onRegister"]),t(l,{onRegister:e.register2},null,8,["onRegister"]),t(j,{onRegister:e.register3},null,8,["onRegister"]),t(y,{onRegister:e.register4},null,8,["onRegister"]),t(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default j;