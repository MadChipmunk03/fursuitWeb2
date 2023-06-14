import MerchView from '@/views/MerchView.vue';
import AboutUsView from '@/views/AboutUsView.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PriceQuoteView from '../views/PriceQuoteView.vue';
import ComissionsView from '@/views/ComissionsView.vue';
import TosViewVue from '@/views/TosView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/merch',
    name: 'merch',
    component: MerchView,
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: PriceQuoteView,
  },
  {
    path: '/comissions',
    name: 'comissions',
    component: ComissionsView,
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUsView,
  },
  {
    path: '/terms-of-service',
    name: 'terms-of-service',
    component: TosViewVue,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
}
});

export default router;
