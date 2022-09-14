import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PriceQuoteView from "../views/PriceQuoteView.vue"

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
    component: PriceQuoteView,
  },
  {
    path: '/commision',
    name: 'commision',
    component: PriceQuoteView,
  },
  {
    path: '/social-media',
    name: 'socialMedia',
    component: PriceQuoteView,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
