import{d as e,J as l,K as s,N as t,s as a,i as n,o as r,j as i,w as o,m as u,l as d,Q as p,n as c}from"./index.a1da5219.js";var _=e({name:"TableHeaderCell",components:{EditTableHeaderCell:l((()=>s((()=>__import__("./index.00fa045a.js").then((function(e){return e.E}))),["/assets/index.00fa045a.js","/assets/index.9c2a7c5a.css","/assets/index.a1da5219.js","/assets/index.94daecd6.css","/assets/index.47fbc714.js","/assets/index.7b57da44.css","/assets/index.f935c75b.js","/assets/index.2b304eea.css","/assets/index.38c8e961.js","/assets/index.0edc9df2.css","/assets/index.fdcc7c21.js","/assets/index.f678ce3d.css","/assets/index.925fe361.js","/assets/index.ecfff4ee.css","/assets/index.eae08916.js","/assets/index.ad8bb6c4.css","/assets/index.61099513.js","/assets/index.ea8fd93a.css","/assets/index.9284d4e4.js","/assets/index.48b906c0.css","/assets/useAttrs.9c4a2f87.js","/assets/index.8d91dadc.js","/assets/index.0b3c95d7.css","/assets/index.f4c035d6.js","/assets/index.9c2623aa.css","/assets/uuid.467c825e.js","/assets/uuid.df3997ee.css","/assets/index.d469528e.js","/assets/index.081a05c9.css","/assets/index.21ee0d6a.js","/assets/index.ca1a8c37.css","/assets/useTimeout.fc5397ab.js","/assets/useWindowSizeFn.9d6f6d4a.js","/assets/index.d913b92a.js","/assets/index.f0b9f139.css","/assets/index.7eaf0b8a.js","/assets/index.121e7eba.css","/assets/domUtils.941be389.js","/assets/RightOutlined.0ff6c3f8.js","/assets/useScrollTo.d6397d0a.js","/assets/animation.faff1b9d.js","/assets/FullscreenOutlined.f3bd68b1.js","/assets/index.a45b2b74.js","/assets/index.5692a970.css","/assets/index.b062bb5c.js","/assets/index.673364b0.js","/assets/index.bfe6e815.css","/assets/index.643da10c.js","/assets/index.1d888746.css","/assets/download.75a30ff9.js","/assets/index.27bb0464.js","/assets/index.ce151150.css","/assets/clickOutside.1bc34f02.js","/assets/CheckOutlined.861808da.js","/assets/useSortable.bb766778.js","/assets/SettingOutlined.bc0a42f6.js","/assets/useExpose.4342ccc1.js","/assets/useForm.cb0543c4.js"]))),BasicHelp:l((()=>s((()=>__import__("./BasicHelp.9ba34d4c.js")),["/assets/BasicHelp.9ba34d4c.js","/assets/index.d913b92a.js","/assets/index.f0b9f139.css","/assets/index.a1da5219.js","/assets/index.94daecd6.css","/assets/index.7eaf0b8a.js","/assets/index.121e7eba.css","/assets/domUtils.941be389.js","/assets/RightOutlined.0ff6c3f8.js","/assets/index.8d91dadc.js","/assets/index.0b3c95d7.css","/assets/useTimeout.fc5397ab.js","/assets/useScrollTo.d6397d0a.js","/assets/animation.faff1b9d.js"])))},props:{column:{type:Object,default:{}}},setup(e){const{prefixCls:l}=t("basic-table-header-cell");return{prefixCls:l,getIsEdit:a((()=>{var l;return!!(null==(l=e.column)?void 0:l.edit)})),getTitle:a((()=>{var l;return null==(l=e.column)?void 0:l.customTitle})),getHelpMessage:a((()=>{var l;return null==(l=e.column)?void 0:l.helpMessage}))}}});const g={key:1};_.render=function(e,l,s,t,a,_){const m=n("EditTableHeaderCell"),f=n("BasicHelp");return r(),i(p,null,[e.getIsEdit?(r(),i(m,{key:0},{default:o((()=>[c(u(e.getTitle),1)])),_:1})):(r(),i("span",g,u(e.getTitle),1)),e.getHelpMessage?(r(),i(f,{key:2,text:e.getHelpMessage,class:`${e.prefixCls}__help`},null,8,["text","class"])):d("",!0)],64)};export default _;