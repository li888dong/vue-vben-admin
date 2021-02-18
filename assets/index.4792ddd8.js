import{d as e,h as o,o as i,i as t,w as r,j as s,m as d}from"./index.41be92f1.js";import{A as a}from"./index.7ddc5d25.js";import{u as n}from"./useModal.48ad3b85.js";import p from"./Modal1.e569f84f.js";import m from"./Modal2.21c29c30.js";import l from"./Modal3.cd6f9700.js";import c from"./Modal4.0dc8f864.js";import{_ as j}from"./index.f4701c19.js";import"./vendor.3b1829c7.js";import"./useTimeout.b575b9d4.js";import"./useWindowSizeFn.a1fff282.js";import"./ScrollContainer.5baac586.js";import"./index.2171726d.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./RightOutlined.3aed54ec.js";/* empty css              */import"./useScrollTo.d04f868c.js";import"./FullscreenOutlined.6f1a37a8.js";import"./isEqual.e72cf159.js";import"./BasicForm.9cd9c448.js";import"./index.d4aad386.js";import"./index.db893cd5.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.0e9e2104.js";import"./get.84c2e3a2.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5093268.js";import"./index.4ed7cd6b.js";import"./index.af08b3bd.js";import"./SearchOutlined.3fc1b6fa.js";import"./EyeOutlined.1c6e9165.js";import"./index.bae81d9f.js";import"./CheckOutlined.fe96bf3a.js";import"./DownOutlined.53f083db.js";import"./index.795d984c.js";import"./index.9e860acd.js";import"./UpOutlined.f8099382.js";import"./index.023d2b7e.js";import"./RedoOutlined.46403121.js";import"./index.22704268.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./Tree.819df2d6.js";import"./util.cef41d7b.js";import"./uuid.993ba7f2.js";import"./index.75c7d506.js";import"./DeleteOutlined.3856c40d.js";import"./index.6b94a76a.js";import"./Dropdown.1e5f78a1.js";import"./index.3b68a10f.js";import"./LeftOutlined.4068ffc4.js";import"./download.95ca2ef5.js";import"./useForm.1e9d3d2f.js";import"./index.c773b8e7.js";import"./index.29417513.js";import"./usePageContext.ad6a9e64.js";import"./transButton.07e10db0.js";import"./ArrowLeftOutlined.4891e66a.js";var f=e({components:{Alert:a,Modal1:p,Modal2:m,Modal3:l,Modal4:c,PageWrapper:j},setup(){const[e,{openModal:o,setModalProps:i}]=n(),[t,{openModal:r}]=n(),[s,{openModal:d}]=n(),[a,{openModal:p}]=n();return{register1:e,openModal1:o,register2:t,openModal2:r,register3:s,openModal3:d,register4:a,openModal4:p,send:function(){p(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=d(" 打开弹窗 默认可以拖动/全屏 "),g=d(" 打开弹窗 "),b=d(" 打开弹窗 "),M=d(" 打开弹窗并传递数据 ");f.render=function(e,d,a,n,p,m){const l=o("Alert"),c=o("a-button"),j=o("Modal1"),f=o("Modal2"),x=o("Modal3"),y=o("Modal4"),O=o("PageWrapper");return i(),t(O,{title:"modal组件使用示例"},{default:r((()=>[s(l,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:r((()=>[u])),_:1},8,["onClick"]),s(l,{message:"内外同时同时显示隐藏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:r((()=>[g])),_:1},8,["onClick"]),s(l,{message:"自适应高度","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:r((()=>[b])),_:1},8,["onClick"]),s(l,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.send},{default:r((()=>[M])),_:1},8,["onClick"]),s(j,{onRegister:e.register1},null,8,["onRegister"]),s(f,{onRegister:e.register2},null,8,["onRegister"]),s(x,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default f;