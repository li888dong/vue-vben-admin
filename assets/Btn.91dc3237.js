import{d as e,bb as s,bH as o,dA as a,dB as t,cp as r,cq as i,h as d,bA as n,o as c,i as m,bw as l,j as u,l as p,k as f,a3 as b,m as _}from"./index.24307e55.js";import{A as j}from"./index.279fddc5.js";import{D as x}from"./index.d91c8c4a.js";import y from"./CurrentPermissionMode.7beef5db.js";import{_ as P}from"./index.b0192475.js";import{_ as h}from"./index.8fbcdc3e.js";import"./vendor.3b1829c7.js";import"./index.721a3e8f.js";import"./index.431dabb1.js";import"./RightOutlined.b19e71a7.js";import"./EllipsisOutlined.e8a93345.js";import"./types.1fed049d.js";import"./isEqual.b01a20c4.js";import"./toInteger.9a5a9d5a.js";import"./DownOutlined.47b7c2c1.js";/* empty css              */import"./index.1b435b11.js";import"./usePageContext.4b2bc254.js";import"./transButton.4e6639d4.js";import"./ArrowLeftOutlined.e39c5bbd.js";var g=e({components:{Alert:j,PageWrapper:h,CurrentPermissionMode:y,Divider:x,Authority:P},setup(){const{hasPermission:e}=a();async function r(e){const o=await t({userId:e});s.commitPermCodeListState(o)}return r("1"),{hasPermission:e,permissionStore:s,changePermissionCode:r,PermissionModeEnum:o}}});const C=l("data-v-66db6f51");r("data-v-66db6f51");const v=_(" 当前拥有的code列表: "),A=_(" 点击切换按钮权限(用户id为2) "),k=_(" 点击切换按钮权限(用户id为1,默认) "),w=_("组件方式判断权限"),D=_(" 拥有code ['1000']权限可见 "),M=_(" 拥有code ['2000']权限可见 "),O=_(" 拥有code ['1000','2000']角色权限可见 "),S=_("函数方式方式判断权限"),B=_(" 拥有code ['1000']权限可见 "),E=_(" 拥有code ['2000']权限可见 "),I=_(" 拥有code ['1000','2000']角色权限可见 "),L=_("指令方式方式判断权限(该方式不能动态修改权限.)"),q=_(" 拥有code ['1000']权限可见 "),W=_(" 拥有code ['2000']权限可见 "),H=_(" 拥有code ['1000','2000']角色权限可见 ");i();const R=C(((e,s,o,a,t,r)=>{const i=d("Alert"),l=d("CurrentPermissionMode"),_=d("Divider"),j=d("a-button"),x=d("Authority"),y=d("PageWrapper"),P=n("auth");return c(),m(y,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:C((()=>[u(i,{message:"刷新后会还原","show-icon":""}),u(l),u("p",null,[v,u("a",null,p(e.permissionStore.getPermCodeListState),1)]),u(_),u(i,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),u(_),u(j,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.changePermissionCode("2"))},{default:C((()=>[A])),_:1}),u(j,{type:"primary",onClick:s[2]||(s[2]=s=>e.changePermissionCode("1"))},{default:C((()=>[k])),_:1}),u(_,null,{default:C((()=>[w])),_:1}),u(x,{value:"1000"},{default:C((()=>[u(j,{type:"primary",class:"mx-4"},{default:C((()=>[D])),_:1})])),_:1}),u(x,{value:"2000"},{default:C((()=>[u(j,{color:"success",class:"mx-4"},{default:C((()=>[M])),_:1})])),_:1}),u(x,{value:["1000","2000"]},{default:C((()=>[u(j,{color:"error",class:"mx-4"},{default:C((()=>[O])),_:1})])),_:1}),u(_,null,{default:C((()=>[S])),_:1}),e.hasPermission("1000")?(c(),m(j,{key:0,type:"primary",class:"mx-4"},{default:C((()=>[B])),_:1})):f("",!0),e.hasPermission("2000")?(c(),m(j,{key:1,color:"success",class:"mx-4"},{default:C((()=>[E])),_:1})):f("",!0),e.hasPermission(["1000","2000"])?(c(),m(j,{key:2,color:"error",class:"mx-4"},{default:C((()=>[I])),_:1})):f("",!0),u(_,null,{default:C((()=>[L])),_:1}),b(u(j,{type:"primary",class:"mx-4"},{default:C((()=>[q])),_:1},512),[[P,"1000"]]),b(u(j,{color:"success",class:"mx-4"},{default:C((()=>[W])),_:1},512),[[P,"2000"]]),b(u(j,{color:"error",class:"mx-4"},{default:C((()=>[H])),_:1},512),[[P,["1000","2000"]]])])),_:1})}));g.render=R,g.__scopeId="data-v-66db6f51";export default g;