import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../views/landing/Landing.vue';
import Auth from '../views/auth/Auth.vue';

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
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
