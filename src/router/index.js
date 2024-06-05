import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/FrontEndView.vue'),
    children: [
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/FrontEnd/AboutView.vue'),
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('../views/FrontEnd/CheckoutView.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/FrontEnd/ProductsView.vue'),
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/FrontEnd/ProductView.vue'),
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/FrontEnd/HomeView.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/FrontEnd/CartView.vue'),
      },
      {
        path: 'checkoutSuccess',
        name: 'checkoutSuccess',
        component: () => import('../views/FrontEnd/CheckoutSuccessView.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/FrontEnd/PageNotFoundView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

setTimeout(() => {
  router.push('/home');
}, 100);

export default router;
