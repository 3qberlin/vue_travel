import{x as v,a as h,m as f,_ as b,r as i,o as m,c as p,d as a,w as u,b as e,n as r,l as T,F as V,j as y,t as C,e as c}from"./index--3Zfb01x.js";const _=v("travelConditionsPinia",{state:()=>({selectedPeople:0,location:["卡托卡尼","伊斯坦堡","聖保羅","布德瓦","本地治里市","克雷塔羅","波扎諾","Castel Hörtenberg","亞庇","艾美度假酒店"],startTime:"",endTime:""}),actions:{setPeople(s){this.selectedPeople=s},getStart(s){this.startTime=s.target.value},getEnd(s){this.endTime=s.target.value}}}),w={methods:{...h(_,["setPeople","getStart","getEnd"])},computed:{...f(_,["selectedPeople","startTime","endTime"])}},P={class:"container mt-4"},k=e("h3",{class:"mb-3"},"旅行條件設定",-1),x={class:"row g-12"},E={class:"col- col-lg-4"},S={class:"p-2"},D={for:"startDate",class:"text-muted mb-0 w-100"},B=e("span",{class:"text-danger"},[c("* "),e("span",{style:{color:"black"},class:"py-2 d-inline-block"},"出發日")],-1),$={class:"col- col-lg-4"},q={class:"p-2"},M={for:"endDate",class:"text-muted mb-0 w-100"},N=e("span",{class:"text-danger"},[c("* "),e("span",{style:{color:"black"},class:"py-2 d-inline-block"},"回程")],-1),U={class:"col- col-lg-4"},F={class:"p-2"},j={for:"people",class:"text-muted mb-0 w-100"},z=e("span",{class:"text-danger"},[c("* "),e("span",{style:{color:"black"},class:"py-2 d-inline-block"},"人數：孩童視為成人，以一位計算")],-1),A=["value"];function H(s,o,L,G,I,J){const l=i("v-field"),n=i("ErrorMessage"),g=i("v-form");return m(),p("div",P,[k,a(g,{class:"mb-4"},{default:u(({errors:d})=>[e("div",x,[e("div",E,[e("div",S,[e("label",D,[B,a(l,{name:"出發日",type:"date",rules:"required",class:r(["form-control w-100",{"is-invalid":d.出發日}]),id:"startDate",placeholder:"2022-01-01",modelValue:s.startTime,"onUpdate:modelValue":o[0]||(o[0]=t=>s.startTime=t),onChange:s.getStart},null,8,["modelValue","class","onChange"])]),a(n,{class:"text-danger",name:"出發日"})])]),e("div",$,[e("div",q,[e("label",M,[N,a(l,{name:"回程",type:"date",rules:"required",class:r(["form-control w-100",{"is-invalid":d.回程}]),id:"endDate",placeholder:"2022-01-01",modelValue:s.endTime,"onUpdate:modelValue":o[1]||(o[1]=t=>s.endTime=t),onChange:s.getEnd},null,8,["modelValue","class","onChange"])]),a(n,{class:"text-danger",name:"回程"})])]),e("div",U,[e("div",F,[e("label",j,[z,a(l,{as:"select",name:"人數",type:"select",rules:"required",class:r(["form-control w-100",{"is-invalid":d.人數}]),id:"people",placeholder:"暫不接受所有寵物入住",modelValue:s.selectedPeople,"onUpdate:modelValue":o[2]||(o[2]=t=>s.selectedPeople=t),onBlur:o[3]||(o[3]=T(t=>s.setPeople(t.target.value),["prevent"]))},{default:u(()=>[(m(),p(V,null,y(10,t=>e("option",{key:t,value:t},C(t),9,A)),64))]),_:2},1032,["modelValue","class"])]),a(n,{class:"text-danger",name:"人數"})])])])]),_:1})])}const O=b(w,[["render",H]]);export{O as T,_ as t};
