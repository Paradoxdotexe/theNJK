import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import DevelopmentPage from '@/pages/DevelopmentPage.vue';
import DesignPage from '@/pages/DesignPage.vue';
import CoverService from "@/services/CoverService";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/development',
    name: 'Development',
    component: DevelopmentPage
  },
  {
    path: '/design',
    name: 'Design',
    component: DesignPage
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[]
});

router.beforeEach((to, _from, next) => {
  window.scrollTo(0, 0); // returns to top of the page
  window.document.title =
    to.name !== 'Home'
      ? `theNJK - ${String(to.name)}`
      : 'theNJK - Portfolio of Nathan J Klingensmith'; // dynamically set website title
  CoverService.removeCover();
  next();
});

export default router;
