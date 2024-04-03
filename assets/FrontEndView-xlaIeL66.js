import{m as f,a as g,_ as p,r as c,o as r,c as u,b as t,d as a,w as l,e as m,f as x,t as w,g as k,h as y,F as $}from"./index--3Zfb01x.js";import{c as h}from"./cartPinia-fA1gqTR3.js";import"./axios-G2rPRu76.js";const C={computed:{...f(h,["final_total","total","carts"])},methods:{...g(h,["getCarts","pinia_carts"]),closeMenu(){const n=document.querySelector(".navbar-toggler");document.querySelectorAll(".nav-item").forEach(i=>{i.addEventListener("click",()=>{n.click()})})}},mounted(){this.getCarts()}},N={class:"container d-flex flex-column"},T={class:"navbar navbar-expand-lg navbar-light position-relative fixed-top"},q=t("img",{src:"https://hackmd.io/_uploads/Sy1UT4q1R.png",alt:"logo",style:{width:"96px"}},null,-1),S=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),A={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},F={class:"navbar-nav text-center"},V={class:"bi bi-cart position-absolute"},j={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},M=t("span",{class:"visually-hidden"},"unread messages",-1);function B(n,s,i,_,v,d){const e=c("router-link");return r(),u("div",N,[t("nav",T,[a(e,{to:"/home",class:"navbar-brand"},{default:l(()=>[q]),_:1}),S,t("div",A,[t("div",F,[a(e,{to:"/about",class:"nav-item nav-link my-3 mx-1"},{default:l(()=>[m("關於我們")]),_:1}),a(e,{to:"/products",class:"nav-item nav-link my-3 mx-1",onClick:s[0]||(s[0]=o=>d.closeMenu())},{default:l(()=>[m("產品一覽")]),_:1}),this.carts?(r(),x(e,{key:0,to:"/cart",class:"nav-item nav-link d-flex justify-content-center my-3 mx-2"},{default:l(()=>{var o;return[t("i",V,[t("span",j,[m(w((o=this.carts)==null?void 0:o.length)+" ",1),M])])]}),_:1})):k("",!0)])])])])}const E=p(C,[["render",B]]),R={},I=y('<div class="bg-dark py-5"><div class="container"><div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"><a href="https://3qberlin.github.io/vue_week8/#/home"><img src="https://hackmd.io/_uploads/Sy1UT4q1R.png" alt="logo" style="width:100px;object-fit:cover;cursor:pointer;"></a><ul class="d-flex list-unstyled mb-0 h4"><li><a href="#" class="text-white mx-3"><i class="bi bi-facebook"></i></a></li><li><a href="#" class="text-white mx-3"><i class="bi bi-instagram"></i></a></li><li><a href="#" class="text-white ms-3"><i class="bi bi-line"></i></a></li><li class="ms-3 d-flex flex-wrap"><a href="https://3qberlin.github.io/vue_week7/#/" class="text-white ms-3 d-flex flex-wrap"><i class="bi bi-door-open"></i></a><a class="fs-6 d-block-block w-100 text-white text-decoration-none" href="https://3qberlin.github.io/vue_week7/#/">管理者</a></li></ul></div><div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"><ul><li><a href=":tel:02-3456-7890" class="text-white text-decoration-none">02-3456-7890</a></li><li><a href="mailto:serviceTravel@gmail.com" class="text-white text-decoration-none">serviceTravel@gmail.com</a></li></ul><p class="mb-0">© 2024 Home Travel All Rights Reserved.</p></div></div></div>',1),U=[I];function D(n,s,i,_,v,d){return r(),u("footer",null,U)}const H=p(R,[["render",D]]),L={components:{NavComponent:E,FooterComponent:H}};function P(n,s,i,_,v,d){const e=c("NavComponent"),o=c("router-view"),b=c("FooterComponent");return r(),u($,null,[a(e),a(o),a(b)],64)}const K=p(L,[["render",P]]);export{K as default};