import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from "@/pages/HomePage.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/development',
    name: 'Development',
    component: HomePage
  },
  {
    path: '/design',
    name: 'Design',
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[]
});

export default router;
