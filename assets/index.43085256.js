import{d as t,r as i,a as e,K as r,e as s,aT as n,a0 as a,x as l,cC as h,j as m,bS as o}from"./index.f6ab8b82.js";import"./vendor.3b1829c7.js";function c(t,i="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${i}`}var u=t({name:"VirtualScroll",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},setup(t,{slots:u}){const g=i(null),d=e({first:0,last:0,scrollTop:0}),p=r((()=>parseInt(t.bench,10))),f=r((()=>parseInt(t.itemHeight,10))),b=r((()=>Math.max(0,d.first-s(p)))),x=r((()=>Math.min((t.items||[]).length,d.last+s(p)))),N=r((()=>({height:c((t.items||[]).length*s(f))}))),S=r((()=>{const i={},e=c(t.height),r=c(t.minHeight),s=c(t.minWidth),n=c(t.maxHeight),a=c(t.maxWidth),l=c(t.width);return e&&(i.height=e),r&&(i.minHeight=r),s&&(i.minWidth=s),n&&(i.maxHeight=n),a&&(i.maxWidth=a),l&&(i.width=l),i}));function H(i){const e=s(g);if(!e)return 0;const r=parseInt(t.height||0,10)||e.clientHeight;return i+Math.ceil(r/s(f))}function v(){const t=s(g);t&&(d.scrollTop=t.scrollTop,d.first=Math.floor(d.scrollTop/s(f)),d.last=H(d.first))}function y(){const{items:i=[]}=t;return i.slice(s(b),s(x)).map(W)}function W(t,i){const e=c((i+=s(b))*s(f));return m("div",{class:"virtual-scroll__item",style:{top:e},key:i},[o(u,"default",{index:i,item:t})])}return n([()=>t.itemHeight,()=>t.height],(()=>{v()})),a((()=>{d.last=H(0),l((()=>{const t=s(g);t&&h({el:t,name:"scroll",listener:v,wait:0})}))})),()=>m("div",{class:"virtual-scroll",style:s(S),ref:g},[m("div",{class:"virtual-scroll__container",style:s(N)},[y()])])}});export default u;