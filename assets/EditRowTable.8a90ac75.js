import{_ as e}from"./index.267cb4f5.js";import{o as t}from"./select.bbf3757b.js";import{d as i}from"./table.39e5099c.js";import{d as o,r as d,h as n,o as a,i as s,j as r,w as l}from"./index.f6ab8b82.js";import{_ as m}from"./BasicForm.1ccffcd5.js";import{u as p}from"./useTable.2ee5f570.js";import"./index.3e4667b6.js";import"./SearchOutlined.d49843fd.js";import"./CheckOutlined.eb38e39d.js";import"./DownOutlined.851157e1.js";import"./index.a5b17467.js";import"./index.d1ebf712.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.9e49c85e.js";import"./isEqual.342bd97b.js";import"./get.e9184908.js";import"./_baseProperty.74f89655.js";import"./toInteger.fe2536de.js";import"./index.9f6ca6fb.js";import"./RightOutlined.984a2567.js";import"./EllipsisOutlined.67d25fe6.js";import"./types.a1f593da.js";import"./index.ecbd3bc0.js";import"./LeftOutlined.6591dd09.js";import"./DoubleLeftOutlined.3ce46edf.js";import"./DoubleRightOutlined.c79eaa7e.js";import"./zh_CN.8094f4d6.js";import"./uuid.ac42918a.js";import"./index.57b5d53b.js";import"./util.a2889e7f.js";import"./DeleteOutlined.d76eb117.js";import"./EyeOutlined.08ac592c.js";import"./Dropdown.d6c9fca6.js";/* empty css              */import"./scrollTo.c1e0f75f.js";import"./transButton.c5b4ef9a.js";import"./CaretDownFilled.c4e74c44.js";import"./useForm.c8d1bc5f.js";import"./clickOutside.fd27adc0.js";import"./domUtils.6368f693.js";import"./_stringToArray.ba8c06ed.js";import"./index.80d28e9e.js";import"./index.1551733f.js";import"./UpOutlined.d0aa5985.js";import"./index.f95ee533.js";import"./useSortable.adeb65dd.js";import"./useTimeout.53caa6d5.js";import"./useWindowSizeFn.4d1a1242.js";import"./useModal.057bab1e.js";import"./ScrollContainer.f5667a12.js";import"./index.f5f9866d.js";import"./useScrollTo.437039b0.js";import"./FullscreenOutlined.57d4b87c.js";import"./index.1067be7b.js";import"./useExpose.09774893.js";import"./index.bd391284.js";import"./index.2cfa05aa.js";import"./RedoOutlined.0474473a.js";import"./Tree.4726acb0.js";import"./index.d538ceae.js";import"./index.18589081.js";import"./download.c8bef705.js";const c=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:200},{title:"输入框校验",dataIndex:"name1",editRow:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:t},width:200},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var u=o({components:{BasicTable:e,TableAction:m},setup(){const e=d(""),[t]=p({title:"可编辑行示例",api:i,columns:c,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function o(t){var i;e.value=t.key,null==(i=t.onEdit)||i.call(t,!0)}function n(t){var i;e.value="",null==(i=t.onEdit)||i.call(t,!1,!1)}async function a(t){var i;await(null==(i=t.onEdit)?void 0:i.call(t,!1,!0))&&(e.value="")}return{registerTable:t,handleEdit:o,createActions:function(t,i){return t.editable?[{label:"保存",onClick:a.bind(null,t,i)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:n.bind(null,t,i)}}]:[{label:"编辑",disabled:!!e.value&&e.value!==t.key,onClick:o.bind(null,t)}]}}}});const j={class:"p-4"};u.render=function(e,t,i,o,d,m){const p=n("TableAction"),c=n("BasicTable");return a(),s("div",j,[r(c,{onRegister:e.registerTable},{action:l((({record:t,column:i})=>[r(p,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"])])};export default u;