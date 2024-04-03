import{_ as $,m as y,a as w,L as B,r as m,o as n,c as a,f as C,g as l,b as t,F as x,j as E,k as S,v as N,t as r,w as k,e as f,d as v}from"./index-0QPgSgeM.js";import{S as g,c as T}from"./cartPinia-Q8tnsmU_.js";import{a as p}from"./axios-G2rPRu76.js";import{T as A,t as L}from"./TravelConditions-I59bKu1B.js";var R={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_API_NAME:"berlin",BASE_URL:"/vue_week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:_,VITE_API_NAME:h}=R,U={computed:{...y(T,["final_total","total","carts"]),...y(L,["selectedPeople","startTime","endTime"])},methods:{...w(T,["getCarts","pinia_carts"]),...w(L,["setPeople"]),addProduct(o){const e={product_id:o.product_id,qty:o.qty+1};this.showLoading(),setTimeout(()=>{const i=`${_}/api/${h}/cart/${o.id}`;p.put(i,{data:e}).then(()=>{this.carts.qty=e.qty,this.getCarts()})},500)},showLoading(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},900)},reduceProduct(o){if(o.qty===1)g.fire({title:"最低數量為1筆",showClass:{popup:`
      animate__animated
      animate__fadeInUp
      animate__faster
    `},hideClass:{popup:`
      animate__animated
      animate__fadeOutDown
      animate__faster
    `}});else{const i={product_id:o.product_id,qty:o.qty-1};this.showLoading();const u=`${_}/api/${h}/cart/${o.id}`;p.put(u,{data:i}).then(()=>{this.carts.qty=i.qty,this.getCarts()})}},delCartItem(o){this.showLoading();const e=`${_}/api/${h}/cart/${o}`;p.delete(e).then(()=>{this.getCarts()}).catch(()=>{})},couponTicket(){const o={code:this.couponContent},e=`${_}/api/${h}/coupon`;this.showLoading(),p.post(e,{data:o}).then(i=>{this.final_total=i.data.data.final_total,this.noneCoupon="已套用優惠券",this.couponStatus=!0,this.getCarts()}).catch(i=>{this.noneCoupon=i.response.data.message,this.final_total=this.total,this.couponStatus=!1,this.getCarts()})},delCarts(){const o=`${_}/api/${h}/carts`;g.fire({title:"刪除確認",text:"確定刪除全部商品？",icon:"warning",showCancelButton:!0,reverseButtons:!0,confirmButtonColor:"#d33",cancelButtonColor:"gray",cancelButtonText:"取消",confirmButtonText:"確認刪除"}).then(e=>{e.isConfirmed&&p.delete(o).then(()=>{this.getCarts(),g.fire({title:"購物車已清空",text:"商品清空",icon:"success"})}).catch(()=>{})})},updateQty(o,e){const i=parseInt(o.target.value,10),u=`${_}/api/${h}/cart/${e.id}`,d={product_id:e.product_id,qty:i};i>=1&&i<=20?p.put(u,{data:d}).then(()=>{this.carts.qty=d.qty,this.getCarts()}):g.fire("請輸入1以上，20以內的數量")}},mounted(){this.getCarts(),this.showLoading()},data(){return{couponContent:"",noneCoupon:"",countTotal:0,couponStatus:!1,isLoading:!1,fullPage:!0,qty:0}},components:{Loading:B,TravelConditions:A}},D={class:"container"},M={class:"mt-3"},j=t("h3",{class:"mt-3 mb-4"},"購物車",-1),O={class:"row"},F={class:"col-md-8 table-responsive"},Q={class:"table table-hover"},z={key:0},G={class:"text-nowrap"},H=t("th",{scope:"col",class:"border-0 ps-0"},"品項",-1),J=t("th",{scope:"col",class:"border-0"},"數量",-1),K=t("th",{scope:"col",class:"border-0"},"單價",-1),W=t("th",{scope:"col",class:"border-0"},"刪除",-1),X={scope:"col",class:"border-0 text-danger"},Y={key:1},Z={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},tt=["src"],ot={class:"mb-0 fw-bold ms-3 d-inline-block"},et={class:"border-0 align-middle",style:{"max-width":"160px"}},st={class:"input-group pe-5"},nt={class:"input-group-prepend"},at=["onClick"],it=t("i",{class:"bi bi-dash"},null,-1),dt=[it],rt=["value","id","qty","onChange"],ct={class:"input-group-append"},lt=["onClick"],pt=t("i",{class:"bi bi-plus-lg"},null,-1),_t=[pt],ht={class:"border-0 align-middle"},ut={class:"mb-0 ms-auto"},bt={class:"border-0 align-middle text-center"},mt=["onClick"],gt=t("td",null,null,-1),ft={key:0,class:"input-group w-50 mb-3"},yt={class:"input-group-append"},wt={class:"btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0",type:"button",id:"button-addon2"},Ct={key:0},xt={key:0,class:"col-md-4"},kt={class:"border p-4 mb-4"},vt=t("h4",{class:"fw-bold mb-4"},"訂單資料",-1),Tt={class:"table text-muted border-bottom"},Lt=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal d-flex flex-grow-1"}," 旅遊期間 ",-1),qt={key:0,class:"text-end border-0 px-0 pt-4"},Pt={key:1,class:"text-end border-0 px-0 pt-3 d-flex flex-wrap w-100"},It={class:"w-100"},Vt={class:"w-100"},$t=t("th",{scope:"row",class:"border-0 px-0 pt-3 font-weight-normal"}," 人數 ",-1),Bt={key:0,class:"text-end border-0 px-0 pt-4"},Et={key:1,class:"text-end border-0 px-0 pt-3"},St=t("th",{scope:"row",class:"border-0 px-0 font-weight-normal"}," 小計 ",-1),Nt={class:"text-end border-0 px-0"},At=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 pt-2 font-weight-normal"}," 付款方式 "),t("td",{class:"text-end border-0 px-0 pt-0 pb-4 pt-2"},"LinePay")],-1),Rt={class:"d-flex justify-content-between mt-4"},Ut=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),Dt={key:0,class:"mb-0 h4 fw-bold"},Mt={key:1,class:"mb-0 h4 fw-bold"},jt={key:0,class:"btn btn-dark w-100 mt-4",disabled:"",tabindex:"-1"},Ot=t("button",{class:"btn btn-dark w-100 mt-4"},"送出訂單",-1),Ft={key:0,class:"fs-5 text-center my-13"};function Qt(o,e,i,u,d,c){const q=m("TravelConditions"),P=m("RouterLink"),I=m("router-link"),V=m("loading");return n(),a(x,null,[this.carts.length>=1?(n(),C(q,{key:0})):l("",!0),t("div",D,[t("div",M,[j,t("div",O,[t("div",F,[t("table",Q,[this.carts.length>=1?(n(),a("thead",z,[t("tr",G,[H,J,K,W,t("th",X,[t("div",{class:"badge bg-danger fw-normal",onClick:e[0]||(e[0]=(...s)=>c.delCarts&&c.delCarts(...s)),style:{cursor:"pointer"}}," 全刪 ")])])])):l("",!0),this.carts.length>=1?(n(),a("tbody",Y,[(n(!0),a(x,null,E(o.carts,s=>(n(),a("tr",{class:"border-bottom border-top",key:s},[t("th",Z,[t("img",{src:s.product.imagesUrl,alt:"images",style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,tt),t("p",ot,r(s.product.title),1)]),t("td",et,[t("div",st,[t("div",nt,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",onClick:b=>c.reduceProduct(s)},dt,8,at)]),t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",value:s.qty,id:s.id,qty:s.qty,onChange:b=>c.updateQty(b,s)},null,40,rt),t("div",ct,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:b=>c.addProduct(s)},_t,8,lt)])])]),t("td",ht,[t("p",ut,r(s.qty*s.product.price),1)]),t("td",bt,[t("i",{class:"bi bi-trash3 text-danger",style:{cursor:"pointer"},onClick:b=>c.delCartItem(s.id)},null,8,mt)]),gt]))),128))])):l("",!0)]),this.carts.length>=1?(n(),a("div",ft,[S(t("input",{type:"text",class:"form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none",placeholder:"Coupon Code","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":e[1]||(e[1]=s=>d.couponContent=s)},null,512),[[N,d.couponContent]]),t("div",yt,[t("button",wt,[t("i",{class:"bi bi-ticket-perforated",onClick:e[2]||(e[2]=(...s)=>c.couponTicket&&c.couponTicket(...s))})]),this.noneCoupon?(n(),a("span",Ct,r(this.noneCoupon),1)):l("",!0)])])):l("",!0)]),this.carts.length>=1?(n(),a("div",xt,[t("div",kt,[vt,t("table",Tt,[t("tbody",null,[t("tr",null,[Lt,!o.startTime||!o.endTime?(n(),a("td",qt," 請選擇日期 ")):(n(),a("td",Pt,[t("div",It,r(o.startTime),1),t("div",Vt,r(o.endTime),1)]))]),t("tr",null,[$t,o.selectedPeople==="隨便"?(n(),a("td",Bt," 0 ")):(n(),a("td",Et,r(o.selectedPeople),1))]),t("tr",null,[St,t("td",Nt,"NT$"+r(this.total),1)]),At])]),t("div",Rt,[Ut,d.couponStatus?(n(),a("p",Dt," NT$"+r(this.final_total),1)):(n(),a("p",Mt,"NT$"+r(this.total),1))]),this.carts.length<=0?(n(),a("button",jt," 先選購商品吧 ")):(n(),C(P,{key:1,to:"/checkout",class:"text-white text-decoration-none w-100"},{default:k(()=>[Ot]),_:1}))])])):l("",!0)])]),this.carts.length<=0?(n(),a("p",Ft,[f(" 沒有任何商品，去"),v(I,{to:"/products",class:"fw-normal text-decoration-none btn btn-sm bg-dark mx-3 text-white"},{default:k(()=>[f("產品一覽")]),_:1}),f("挑一個吧！ ")])):l("",!0)]),v(V,{active:d.isLoading,"onUpdate:active":e[3]||(e[3]=s=>d.isLoading=s),"can-cancel":!0,"is-full-page":d.fullPage},null,8,["active","is-full-page"])],64)}const Kt=$(U,[["render",Qt]]);export{Kt as default};
