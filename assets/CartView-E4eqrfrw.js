import{_ as m,m as y,a as g,c,b as t,F as C,j as f,k as v,v as x,t as d,g as k,d as w,w as P,r as $,o as r,e as q}from"./index-Mk1JWw8N.js";import{c as h}from"./cartPinia-E1XoNkUx.js";import{a as i}from"./axios-G2rPRu76.js";var E={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_API_NAME:"berlin",BASE_URL:"/vue_week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:l,VITE_API_NAME:p}=E,T={computed:{...y(h,["carts","final_total","total"])},methods:{...g(h,["getCarts","pinia_carts","carts"]),addProduct(e){const o={product_id:e.product_id,qty:e.qty+1};console.log("cart",o);const n=`${l}/api/${p}/cart/${e.id}`;i.put(n,{data:o}).then(()=>{this.carts.qty=o.qty,console.log("this.carts.addProduct",this.carts.qty),this.getCarts()})},reduceProduct(e){const o={product_id:e.product_id,qty:e.qty-1};console.log("cart",o);const n=`${l}/api/${p}/cart/${e.id}`;i.put(n,{data:o}).then(()=>{this.carts.qty=o.qty,console.log("this.carts.reduceProduct",this.carts.qty),this.getCarts()})},delCartItem(e){const o=`${l}/api/${p}/cart/${e}`;i.delete(o).then(()=>{this.getCarts()}).catch(n=>{alert(n.response.data.message)})},couponTicket(){const e={code:this.couponContent},o=`${l}/api/${p}/coupon`;i.post(o,{data:e}).then(n=>{this.final_total=n.data.data.final_total,console.log("couponRes",n),this.noneCoupon="已套用優惠券",this.getCarts()}).catch(n=>{this.noneCoupon=n.response.data.message})}},mounted(){this.getCarts()},data(){return{couponContent:"",noneCoupon:""}}},V={class:"container"},I={class:"mt-3"},R=t("h3",{class:"mt-3 mb-4"},"購物車",-1),A={class:"row"},N={class:"col-md-8"},L={class:"table"},D=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0"},"品項"),t("th",{scope:"col",class:"border-0"},"數量"),t("th",{scope:"col",class:"border-0"},"單價"),t("th",{scope:"col",class:"border-0"})])],-1),S={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},U=["src"],B={class:"mb-0 fw-bold ms-3 d-inline-block"},M={class:"border-0 align-middle",style:{"max-width":"160px"}},j={class:"input-group pe-5"},F={class:"input-group-prepend"},O={class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1"},z=["onClick"],G=["value","id"],H={class:"input-group-append"},J={class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2"},K=["onClick"],Q={class:"border-0 align-middle"},W={class:"mb-0 ms-auto"},X={class:"border-0 align-middle"},Y=["onClick"],Z={class:"input-group w-50 mb-3"},tt={class:"input-group-append"},ot={class:"btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0",type:"button",id:"button-addon2"},st={key:0},et={class:"col-md-4"},nt={class:"border p-4 mb-4"},at=t("h4",{class:"fw-bold mb-4"},"訂單資料",-1),dt={class:"table text-muted border-bottom"},ct=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"}," 小計 ",-1),rt={class:"text-end border-0 px-0 pt-4"},it=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"}," 付款方式 "),t("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"LinePay")],-1),lt={class:"d-flex justify-content-between mt-4"},pt=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),ut={class:"mb-0 h4 fw-bold"};function _t(e,o,n,ht,u,a){const b=$("RouterLink");return r(),c("div",V,[t("div",I,[R,t("div",A,[t("div",N,[t("table",L,[D,t("tbody",null,[(r(!0),c(C,null,f(e.carts,s=>(r(),c("tr",{class:"border-bottom border-top",key:s},[t("th",S,[t("img",{src:s.product.imagesUrl,alt:"",style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,U),t("p",B,d(s.product.title),1)]),t("td",M,[t("div",j,[t("div",F,[t("button",O,[t("i",{class:"bi bi-dash",onClick:_=>a.reduceProduct(s)},null,8,z)])]),t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",value:s.qty,id:s.id},null,8,G),t("div",H,[t("button",J,[t("i",{class:"bi bi-plus-lg",onClick:_=>a.addProduct(s)},null,8,K)])])])]),t("td",Q,[t("p",W,d(s.qty*s.product.price),1)]),t("td",X,[t("i",{class:"bi bi-trash3 text-danger",style:{cursor:"pointer"},onClick:_=>a.delCartItem(s.id)},null,8,Y)])]))),128))])]),t("div",Z,[v(t("input",{type:"text",class:"form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none",placeholder:"Coupon Code","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":o[0]||(o[0]=s=>u.couponContent=s)},null,512),[[x,u.couponContent]]),t("div",tt,[t("button",ot,[t("i",{class:"bi bi-ticket-perforated",onClick:o[1]||(o[1]=(...s)=>a.couponTicket&&a.couponTicket(...s))})]),this.noneCoupon?(r(),c("span",st,d(this.noneCoupon),1)):k("",!0)])])]),t("div",et,[t("div",nt,[at,t("table",dt,[t("tbody",null,[t("tr",null,[ct,t("td",rt,"NT$"+d(this.total),1)]),it])]),t("div",lt,[pt,t("p",ut,"NT$"+d(this.final_total),1)]),w(b,{to:"/checkout",class:"btn btn-dark w-100 mt-4"},{default:P(()=>[q("送出訂單")]),_:1})])])])])])}const gt=m(T,[["render",_t]]);export{gt as default};
