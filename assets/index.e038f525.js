import{d as e,h as o,o as i,i as t,w as r,j as s,m as d}from"./index.31a6bf2e.js";import{A as a}from"./index.ca43b57f.js";import{b as n}from"./index.b703360e.js";import p from"./Modal1.e4afec0b.js";import m from"./Modal2.65891972.js";import l from"./Modal3.e6561d87.js";import f from"./Modal4.b3242e0f.js";import{_ as j}from"./index.1656dc96.js";import"./vendor.3b1829c7.js";import"./useTimeout.d1efb3cd.js";import"./useWindowSizeFn.a92604ed.js";import"./index.81c7e8d3.js";import"./index.38622004.js";import"./domUtils.cfcd673e.js";import"./_stringToArray.78ac2a72.js";import"./RightOutlined.98400bb6.js";/* empty css              */import"./useScrollTo.e85df803.js";import"./animation.f78d9cfa.js";import"./FullscreenOutlined.3ef66bbe.js";import"./isEqual.fe28526e.js";import"./index.5e157f19.js";import"./index.968ffacb.js";import"./index.601921e0.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.1a727248.js";import"./get.7abf870e.js";import"./_baseProperty.74f89655.js";import"./toInteger.619adbee.js";import"./index.dfdd072a.js";import"./index.e23ba3a4.js";import"./SearchOutlined.0d9f3d80.js";import"./EyeOutlined.1bac4c18.js";import"./index.2bbd1659.js";import"./CheckOutlined.0ebd038f.js";import"./DownOutlined.1e403334.js";import"./index.b14eca62.js";import"./index.fbf0a767.js";import"./UpOutlined.8b6433c2.js";import"./index.02b72559.js";import"./RedoOutlined.c145b92f.js";import"./index.73c084f5.js";import"./EllipsisOutlined.f0621b27.js";import"./types.b304e151.js";import"./Tree.d50af26d.js";import"./util.6faf4612.js";import"./uuid.e9f7de08.js";import"./index.e66974d5.js";import"./DeleteOutlined.57b0c53e.js";import"./index.5db0d006.js";import"./index.5aab3f9d.js";import"./index.c98520d1.js";import"./LeftOutlined.d2b7f4de.js";import"./download.5aeeacfe.js";import"./useForm.9cf29718.js";import"./index.775a650d.js";import"./index.b24fa441.js";import"./usePageContext.c01714fa.js";import"./transButton.4f753738.js";import"./ArrowLeftOutlined.74abacd3.js";var c=e({components:{Alert:a,Modal1:p,Modal2:m,Modal3:l,Modal4:f,PageWrapper:j},setup(){const[e,{openModal:o,setModalProps:i}]=n(),[t,{openModal:r}]=n(),[s,{openModal:d}]=n(),[a,{openModal:p}]=n();return{register1:e,openModal1:o,register2:t,openModal2:r,register3:s,openModal3:d,register4:a,openModal4:p,send:function(){p(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=d(" 打开弹窗 默认可以拖动/全屏 "),b=d(" 打开弹窗 "),g=d(" 打开弹窗 "),M=d(" 打开弹窗并传递数据 ");c.render=function(e,d,a,n,p,m){const l=o("Alert"),f=o("a-button"),j=o("Modal1"),c=o("Modal2"),x=o("Modal3"),y=o("Modal4"),O=o("PageWrapper");return i(),t(O,{title:"modal组件使用示例"},{default:r((()=>[s(l,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:r((()=>[u])),_:1},8,["onClick"]),s(l,{message:"内外同时同时显示隐藏","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:e.openModal2},{default:r((()=>[b])),_:1},8,["onClick"]),s(l,{message:"自适应高度","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:e.openModal3},{default:r((()=>[g])),_:1},8,["onClick"]),s(l,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(f,{type:"primary",class:"my-4",onClick:e.send},{default:r((()=>[M])),_:1},8,["onClick"]),s(j,{onRegister:e.register1},null,8,["onRegister"]),s(c,{onRegister:e.register2},null,8,["onRegister"]),s(x,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default c;