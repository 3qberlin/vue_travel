import{m as u,a as h,_ as r,o as i,c as d,b as a,d as e,w as o,e as n,f as g,t as x,g as k,r as l,F as w,h as N}from"./index-Mk1JWw8N.js";import{c}from"./cartPinia-E1XoNkUx.js";import"./axios-G2rPRu76.js";const $={computed:{...u(c,["carts","final_total","total"])},methods:{...h(c,["getCarts","pinia_carts","carts"])},mounted(){this.getCarts()}},y={class:"container d-flex flex-column"},C={class:"navbar navbar-expand-lg navbar-light"},V=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),A={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},j={class:"navbar-nav"},B={class:"bi bi-cart position-absolute"},S={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"},F=a("span",{class:"visually-hidden"},"unread messages",-1);function M(m,p,v,_,b,f){const t=l("router-link");return i(),d("div",y,[a("nav",C,[e(t,{to:"/home",class:"navbar-brand"},{default:o(()=>[n("首頁")]),_:1}),V,a("div",A,[a("div",j,[e(t,{to:"/about",class:"nav-item nav-link me-4 active"},{default:o(()=>[n("關於我們")]),_:1}),e(t,{to:"/products",class:"nav-item nav-link me-4 active"},{default:o(()=>[n("產品一覽")]),_:1}),this.carts?(i(),g(t,{key:0,to:"/cart",class:"nav-item nav-link"},{default:o(()=>{var s;return[a("i",B,[a("span",S,[n(x((s=this.carts)==null?void 0:s.length)+" ",1),F])])]}),_:1})):k("",!0)])])])])}const T=r($,[["render",M]]),E={components:{NavComponent:T}},O=N('<footer><div class="bg-dark py-5"><div class="container"><div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"><img src="https://hackmd.io/_uploads/S1atYtYap.png" alt="logo" style="width:140px;object-fit:cover;"><ul class="d-flex list-unstyled mb-0 h4"><li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li><li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li><li><a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a></li></ul></div><div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"><div class="mb-md-0 mb-1"><p class="mb-0">02-3456-7890</p><p class="mb-0">serviceTravel@gmail.com</p></div><p class="mb-0">© 2024 LOGO All Rights Reserved.</p></div></div></div></footer>',1);function R(m,p,v,_,b,f){const t=l("NavComponent"),s=l("router-view");return i(),d(w,null,[e(t),e(s),O],64)}const L=r(E,[["render",R]]);export{L as default};
