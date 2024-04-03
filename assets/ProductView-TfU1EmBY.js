import{_ as x,a as g,r as u,o as a,c as n,d as l,b as t,F as b,j as v,w as _,t as s,l as f,h as m,e as c,n as w}from"./index--3Zfb01x.js";import{c as y}from"./cartPinia-fA1gqTR3.js";import{a as k}from"./axios-G2rPRu76.js";import{T as E}from"./TravelConditions-Z69Z5D46.js";var T={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_API_NAME:"berlin",BASE_URL:"/vue_week8/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API_URL:V,VITE_API_NAME:P}=T,C={data(){return{product:[]}},methods:{getProduct(){const{id:i}=this.$route.params;k.get(`${V}/api/${P}/product/${i}`).then(o=>{this.product=o.data.product})},...g(y,["addToCart"])},mounted(){this.getProduct(),this.$refs.nextButton.click()},components:{TravelConditions:E}},N={class:"container"},A={class:"row align-items-center"},I=t("div",{class:"collapse",id:"collapseExample"},[t("div",{class:"card card-body"}," Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. ")],-1),j={class:"col-md-7"},R={id:"carouselExample",class:"carousel slide","data-bs-ride":"carousel"},B={class:"carousel-inner",style:{"max-height":"500px"}},L=["src"],S=t("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExample","data-bs-slide":"prev"},[t("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),t("span",{class:"visually-hidden"},"Previous")],-1),U={class:"carousel-control-next",type:"button","data-bs-target":"#carouselExample","data-bs-slide":"next",ref:"nextButton"},D=t("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1),M=t("span",{class:"visually-hidden"},"Next",-1),$=[D,M],F={class:"col-md-5"},O={"aria-label":"breadcrumb"},z={class:"breadcrumb bg-white px-0 mb-0 py-3"},W={class:"breadcrumb-item"},q={class:"breadcrumb-item"},G=t("li",{class:"breadcrumb-item active","aria-current":"page"},"單一產品說明",-1),H={class:"fw-bold h1 mb-1"},J={class:"mb-0 text-muted text-end"},K={class:"h4 fw-bold text-end"},Q={class:"row align-items-center"},X=m('<div class="col-6"><div class="input-group my-3 bg-light rounded"><div class="input-group-prepend"><button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1"></button></div><input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light position-relative" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1" disabled><div class="input-group-append"><button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2"></button></div><span class="position-absolute ms-3 mt-5 text-center text-dark mt-2"> 預設房數<span class="text-primary mx-1">1</span>筆，數量調整請至購物車 </span></div></div>',1),Y={class:"col-6"},Z={class:"fw-bold mt-5 px-md-11 lh-base mt-7",style:{"letter-spacing":"2px"}},tt={class:"swiper-container mt-4 mb-5"},et={class:"swiper-wrapper"},st={class:"swiper-slide"},ot={class:"card border-0 mb-4 position-relative position-relative"},it=["src"],at=t("a",{href:"#",class:"text-dark"},null,-1),nt={class:"card-body p-0"},lt=t("h4",{class:"mb-0 mt-3"},[t("a",{href:"#"})],-1),ct=t("p",{class:"card-text mb-0 fs-5 mt-5 px-md-11 lh-base"},[c(" 介紹 "),t("span",{class:"text-muted"})],-1),dt={class:"px-md-11 lh-lg mt-2",style:{"letter-spacing":"3px"}},rt=m('<p class="text-muted mt-3 fs-5 px-md-11 lh-base text-end">房間設施</p><ul class="list-unstyled d-flex px-md-11 justify-content-end"><li class="col-auto border rounded-1 px-2 d-flex bg-info flex-column flex-wrap justify-content-center align-items-center"><i class="bi bi-droplet-fill bg-info"></i><span class="d-inline-block w-100 bg-light px-1 rounded-5">飲用水</span></li><li class="col-auto border rounded-1 px-2 d-flex bg-warning flex-column flex-wrap justify-content-center align-items-center ms-2"><i class="bi bi bi-badge-hd bg-warning"></i><span class="d-inline-block w-100 bg-light px-1 rounded-5">TV</span></li><li class="col-auto border rounded-1 px-2 d-flex bg-primary flex-column flex-wrap justify-content-center align-items-center ms-2"><i class="bi bi bi-wind bg-primary text-white"></i><span class="d-inline-block w-100 bg-light px-1 rounded-5">吹風機</span></li><li class="col-auto border rounded-1 px-2 d-flex bg-secondary flex-column flex-wrap justify-content-center align-items-center ms-2"><i class="bi bi bi-wifi bg-secondary text-white"></i><span class="d-inline-block w-100 bg-light px-1 rounded-5">WiFi</span></li></ul>',2);function pt(i,o,ut,bt,e,_t){const h=u("Travel-Conditions"),d=u("RouterLink");return a(),n(b,null,[l(h),t("div",N,[t("div",A,[I,t("div",j,[t("div",R,[t("div",B,[(a(!0),n(b,null,v(e.product.imagesUrl,(r,p)=>(a(),n("div",{class:w(["carousel-item",{active:p===0}]),"data-bs-interval":"4000",key:p},[t("img",{src:r,class:"d-block w-100 object-fit-cover",alt:"images"},null,8,L)],2))),128))]),S,t("button",U,$,512)])]),t("div",F,[t("nav",O,[t("ol",z,[t("li",W,[l(d,{to:"/home",class:"text-secondary"},{default:_(()=>[c("首頁")]),_:1})]),t("li",q,[l(d,{to:"/products",class:"text-secondary"},{default:_(()=>[c("產品一覽")]),_:1})]),G])]),t("h2",H,s(e.product.title),1),t("p",J,[t("del",null,"NT$"+s(e.product.origin_price),1)]),t("p",K,"NT$"+s(e.product.price),1),t("div",Q,[X,t("div",Y,[t("a",{class:"text-nowrap btn btn-dark w-100 py-2",onClick:o[0]||(o[0]=f(r=>i.addToCart(e.product.id),["prevent"]))},"加入購物車")])])])]),t("h5",Z,s(e.product.description),1),t("div",tt,[t("div",et,[t("div",st,[t("div",ot,[t("img",{src:e.product.imageUrl,class:"card-img-top rounded-0 px-md-11",alt:"images"},null,8,it),at,t("div",nt,[lt,ct,t("p",dt,s(e.product.content),1),rt])])])])])])],64)}const vt=x(C,[["render",pt]]);export{vt as default};