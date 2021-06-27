import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../views/landing/Landing.vue';

const routes = [
  {
    path: '/',
    component: Landing,
  },
  {
    path: '/auth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Landing
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
