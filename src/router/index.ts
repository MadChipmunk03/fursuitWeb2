import MerchView from '@/views/MerchView.vue';
import AboutUsView from '@/views/AboutUsView.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PriceQuoteView from '../views/PriceQuoteView.vue';

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
    path: '/commision',
    name: 'commision',
    component: PriceQuoteView,
  },
  {
    path: '/about-us',
    name: 'aboutUs',
    component: AboutUsView,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
