import{m as h,a as f,_ as r,o as n,c as d,b as t,d as e,w as o,e as i,f as g,t as x,g as w,r as l,F as k,h as N}from"./index-YFXBDX5x.js";import{c}from"./cartPinia-2DZBaLUm.js";import"./axios-G2rPRu76.js";const $={computed:{...h(c,["carts","final_total","total"])},methods:{...f(c,["getCarts","pinia_carts","carts"])},mounted(){this.getCarts()}},y={class:"container d-flex flex-column"},C={class:"navbar navbar-expand-lg navbar-light"},V=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),A={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},j={class:"navbar-nav"},B={class:"bi bi-cart position-absolute"},S={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},T=t("span",{class:"visually-hidden"},"unread messages",-1);function F(p,m,b,v,_,u){const a=l("router-link");return n(),d("div",y,[t("nav",C,[e(a,{to:"/home",class:"navbar-brand"},{default:o(()=>[i("首頁")]),_:1}),V,t("div",A,[t("div",j,[e(a,{to:"/about",class:"nav-item nav-link me-4 active"},{default:o(()=>[i("關於我們")]),_:1}),e(a,{to:"/products",class:"nav-item nav-link me-4 active"},{default:o(()=>[i("產品一覽")]),_:1}),this.carts?(n(),g(a,{key:0,to:"/cart",class:"nav-item nav-link"},{default:o(()=>{var s;return[t("i",B,[t("span",S,[i(x((s=this.carts)==null?void 0:s.length)+" ",1),T])])]}),_:1})):w("",!0)])])])])}const M=r($,[["render",F]]),q={components:{NavComponent:M}},E=N('<footer><div class="bg-dark py-5"><div class="container"><div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"><img src="https://hackmd.io/_uploads/S1atYtYap.png" alt="logo" style="width:140px;object-fit:cover;cursor:pointer;"><ul class="d-flex list-unstyled mb-0 h4"><li><a href="#" class="text-white mx-3"><i class="bi bi-facebook"></i></a></li><li><a href="#" class="text-white mx-3"><i class="bi bi-instagram"></i></a></li><li><a href="#" class="text-white ms-3"><i class="bi bi-line"></i></a></li><li class="ms-3 d-flex flex-wrap"><a href="https://3qberlin.github.io/vue_week7/#/" class="text-white ms-3 d-flex flex-wrap"><i class="bi bi-door-open"></i></a><a class="fs-6 d-block-block w-100 text-white text-decoration-none" href="https://3qberlin.github.io/vue_week7/#/">管理者</a></li></ul></div><div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"><div class="mb-md-0 mb-1"><p class="mb-0">02-3456-7890</p><p class="mb-0">serviceTravel@gmail.com</p></div><p class="mb-0">© 2024 Home Travel All Rights Reserved.</p></div></div></div></footer>',1);function R(p,m,b,v,_,u){const a=l("NavComponent"),s=l("router-view");return n(),d(k,null,[e(a),e(s),E],64)}const P=r(q,[["render",R]]);export{P as default};
