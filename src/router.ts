import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import DevelopmentPage from '@/pages/DevelopmentPage.vue';
import DesignPage from '@/pages/DesignPage.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[]
});

export default router;
