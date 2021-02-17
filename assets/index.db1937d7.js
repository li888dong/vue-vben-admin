import{d as e}from"./ScrollContainer.f5667a12.js";import{d as o,g as n,h as s,o as r,i as a,w as t,j as i,m as l}from"./index.f6ab8b82.js";import{_ as c}from"./index.32c247c7.js";import"./index.f5f9866d.js";import"./domUtils.6368f693.js";import"./_stringToArray.ba8c06ed.js";import"./RightOutlined.984a2567.js";/* empty css              */import"./useTimeout.53caa6d5.js";import"./useScrollTo.437039b0.js";import"./vendor.3b1829c7.js";import"./index.d14b8a91.js";import"./index.9f6ca6fb.js";import"./EllipsisOutlined.67d25fe6.js";import"./types.a1f593da.js";import"./isEqual.342bd97b.js";import"./toInteger.fe2536de.js";import"./DownOutlined.851157e1.js";import"./index.d48b5972.js";import"./usePageContext.367642f4.js";import"./transButton.c5b4ef9a.js";import"./ArrowLeftOutlined.9cf601da.js";var d=o({components:{CollapseContainer:e,PageWrapper:c},setup(){const{createMessage:e,createConfirm:o,createSuccessModal:s,createInfoModal:r,createErrorModal:a,createWarningModal:t,notification:i}=n(),{info:l,success:c,warning:d,error:f}=e;return{infoMsg:l,successMsg:c,warningMsg:d,errorMsg:f,handleLoading:function(){e.loading("Loading...")},handleConfirm:function(e){o({iconType:e,title:"Tip",content:"content message..."})},handleSuccessModal:function(){s({title:"Tip",content:"content message..."})},handleErrorModal:function(){a({title:"Tip",content:"content message..."})},handleWarningModal:function(){t({title:"Tip",content:"content message..."})},handleInfoModal:function(){r({title:"Tip",content:"content message..."})},handleNotify:function(){i.success({message:"Tip",description:"content message..."})}}}});const f=l(" Info "),m=l(" Success "),u=l(" Warning "),g=l(" Error "),p=l(" Loading "),C=l(" Info "),h=l(" Warning "),j=l(" Success "),M=l(" Error "),_=l(" Info "),k=l(" Success "),w=l(" Error "),b=l(" Warning "),S=l(" Success ");d.render=function(e,o,n,l,c,d){const T=s("a-button"),x=s("CollapseContainer"),E=s("PageWrapper");return r(),a(E,{title:"消息示例"},{default:t((()=>[i(x,{class:"w-full h-32 bg-white rounded-md",title:"Message"},{default:t((()=>[i(T,{onClick:o[1]||(o[1]=o=>e.infoMsg("Info message")),class:"mr-2"},{default:t((()=>[f])),_:1}),i(T,{onClick:o[2]||(o[2]=o=>e.successMsg("Success message")),class:"mr-2",color:"success"},{default:t((()=>[m])),_:1}),i(T,{onClick:o[3]||(o[3]=o=>e.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:t((()=>[u])),_:1}),i(T,{onClick:o[4]||(o[4]=o=>e.errorMsg("Error message")),class:"mr-2",color:"error"},{default:t((()=>[g])),_:1}),i(T,{onClick:e.handleLoading,class:"mr-2",type:"primary"},{default:t((()=>[p])),_:1},8,["onClick"])])),_:1}),i(x,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Comfirm"},{default:t((()=>[i(T,{onClick:o[5]||(o[5]=o=>e.handleConfirm("info")),class:"mr-2"},{default:t((()=>[C])),_:1}),i(T,{onClick:o[6]||(o[6]=o=>e.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:t((()=>[h])),_:1}),i(T,{onClick:o[7]||(o[7]=o=>e.handleConfirm("success")),color:"success",class:"mr-2"},{default:t((()=>[j])),_:1}),i(T,{onClick:o[8]||(o[8]=o=>e.handleConfirm("error")),color:"error",class:"mr-2"},{default:t((()=>[M])),_:1})])),_:1}),i(x,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Modal"},{default:t((()=>[i(T,{onClick:e.handleInfoModal,class:"mr-2"},{default:t((()=>[_])),_:1},8,["onClick"]),i(T,{onClick:e.handleSuccessModal,color:"success",class:"mr-2"},{default:t((()=>[k])),_:1},8,["onClick"]),i(T,{onClick:e.handleErrorModal,color:"error",class:"mr-2"},{default:t((()=>[w])),_:1},8,["onClick"]),i(T,{onClick:e.handleWarningModal,color:"warning",class:"mr-2"},{default:t((()=>[b])),_:1},8,["onClick"])])),_:1}),i(x,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Notification 用法与上面一致"},{default:t((()=>[i(T,{onClick:e.handleNotify,color:"success",class:"mr-2"},{default:t((()=>[S])),_:1},8,["onClick"])])),_:1})])),_:1})};export default d;