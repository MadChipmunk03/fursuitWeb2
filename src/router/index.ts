import MerchView from '@/views/MerchView.vue';
import AboutUsView from '@/views/AboutUsView.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PriceQuoteView from '../views/PriceQuoteView.vue';
import ComissionsView from '@/views/ComissionsView.vue';

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
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
