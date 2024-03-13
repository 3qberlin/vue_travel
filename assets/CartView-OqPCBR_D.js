import{_ as v,m as w,a as $,c as d,b as t,g as u,F as q,j as E,e as i,d as y,w as f,k as P,v as T,t as r,r as g,o as a}from"./index-YOhsVg5-.js";import{c as k}from"./cartPinia-K9wrGaXr.js";import{a as l}from"./axios-G2rPRu76.js";var V={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_API_NAME:"berlin",BASE_URL:"/vue_week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:p,VITE_API_NAME:_}=V,I={computed:{...w(k,["carts","final_total","total"])},methods:{...$(k,["getCarts","pinia_carts","carts"]),addProduct(o){const s={product_id:o.product_id,qty:o.qty+1},n=`${p}/api/${_}/cart/${o.id}`;l.put(n,{data:s}).then(()=>{this.carts.qty=s.qty,this.getCarts()})},reduceProduct(o){const s=o.qty;if(console.log("condition",s),s===1)alert("訂房數量最低為1間，欲刪除整筆請點擊紅色按鈕");else{const n={product_id:o.product_id,qty:o.qty-1},h=`${p}/api/${_}/cart/${o.id}`;l.put(h,{data:n}).then(()=>{this.carts.qty=n.qty,this.getCarts()})}},delCartItem(o){const s=`${p}/api/${_}/cart/${o}`;l.delete(s).then(()=>{this.getCarts()}).catch(n=>{alert(n.response.data.message)})},couponTicket(){const o={code:this.couponContent},s=`${p}/api/${_}/coupon`;l.post(s,{data:o}).then(n=>{this.final_total=n.data.data.final_total,this.noneCoupon="已套用優惠券",this.getCarts()}).catch(n=>{this.noneCoupon=n.response.data.message})}},mounted(){this.getCarts(),console.log("this.carts",this.carts)},data(){return{couponContent:"",noneCoupon:""}}},A={class:"container"},N={class:"mt-3"},R=t("h3",{class:"mt-3 mb-4"},"購物車",-1),L={class:"row"},D={class:"col-md-8"},S={class:"table"},U={key:0},B=t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0"},"品項"),t("th",{scope:"col",class:"border-0"},"數量"),t("th",{scope:"col",class:"border-0"},"單價"),t("th",{scope:"col",class:"border-0"})],-1),M=[B],j={key:1},F={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},O=["src"],z={class:"mb-0 fw-bold ms-3 d-inline-block"},G={class:"border-0 align-middle",style:{"max-width":"160px"}},H={class:"input-group pe-5"},J={class:"input-group-prepend"},K={class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1"},Q=["onClick"],W=["value","id"],X={class:"input-group-append"},Y={class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2"},Z=["onClick"],tt={class:"border-0 align-middle"},ot={class:"mb-0 ms-auto"},st={class:"border-0 align-middle"},et=["onClick"],nt={key:2},dt={class:"fs-5 text-center"},at={key:0,class:"input-group w-50 mb-3"},ct={class:"input-group-append"},rt={class:"btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0",type:"button",id:"button-addon2"},it={key:0},lt={class:"col-md-4"},pt={class:"border p-4 mb-4"},_t=t("h4",{class:"fw-bold mb-4"},"訂單資料",-1),ut={class:"table text-muted border-bottom"},ht=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"}," 小計 ",-1),bt={class:"text-end border-0 px-0 pt-4"},mt=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"}," 付款方式 "),t("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"LinePay")],-1),yt={class:"d-flex justify-content-between mt-4"},ft=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),gt={class:"mb-0 h4 fw-bold"};function kt(o,s,n,h,b,c){const x=g("router-link"),C=g("RouterLink");return a(),d("div",A,[t("div",N,[R,t("div",L,[t("div",D,[t("table",S,[this.carts.length>=1?(a(),d("thead",U,M)):u("",!0),this.carts.length>=1?(a(),d("tbody",j,[(a(!0),d(q,null,E(o.carts,e=>(a(),d("tr",{class:"border-bottom border-top",key:e},[t("th",F,[t("img",{src:e.product.imagesUrl,alt:"",style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,O),t("p",z,r(e.product.title),1)]),t("td",G,[t("div",H,[t("div",J,[t("button",K,[t("i",{class:"bi bi-dash",onClick:m=>c.reduceProduct(e)},null,8,Q)])]),t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",value:e.qty,id:e.id},null,8,W),t("div",X,[t("button",Y,[t("i",{class:"bi bi-plus-lg",onClick:m=>c.addProduct(e)},null,8,Z)])])])]),t("td",tt,[t("p",ot,r(e.qty*e.product.price),1)]),t("td",st,[t("i",{class:"bi bi-trash3 text-danger",style:{cursor:"pointer"},onClick:m=>c.delCartItem(e.id)},null,8,et)])]))),128))])):(a(),d("tbody",nt,[t("p",dt,[i("沒有任何商品，去"),y(x,{to:"/products",class:"text-dark fw-bold mx-1 text-muted text-decoration-none"},{default:f(()=>[i("產品一覽")]),_:1}),i("挑一個吧！")])]))]),this.carts.length>=1?(a(),d("div",at,[P(t("input",{type:"text",class:"form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none",placeholder:"Coupon Code","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":s[0]||(s[0]=e=>b.couponContent=e)},null,512),[[T,b.couponContent]]),t("div",ct,[t("button",rt,[t("i",{class:"bi bi-ticket-perforated",onClick:s[1]||(s[1]=(...e)=>c.couponTicket&&c.couponTicket(...e))})]),this.noneCoupon?(a(),d("span",it,r(this.noneCoupon),1)):u("",!0)])])):u("",!0)]),t("div",lt,[t("div",pt,[_t,t("table",ut,[t("tbody",null,[t("tr",null,[ht,t("td",bt,"NT$"+r(this.total),1)]),mt])]),t("div",yt,[ft,t("p",gt,"NT$"+r(this.final_total),1)]),y(C,{to:"/checkout",class:"btn btn-dark w-100 mt-4"},{default:f(()=>[i("送出訂單")]),_:1})])])])])])}const wt=v(I,[["render",kt]]);export{wt as default};
