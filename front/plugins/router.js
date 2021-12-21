import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home')
  },
  {
    path: '/About',
    component: () => import('@/pages/About')
  },
];

const router = new VueRouter({
//   mode: 'history',
  routes
});

export default router;
