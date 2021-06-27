import { createRouter, createWebHistory } from 'vue-router';

import Landing from '../views/landing/Landing.vue';
import Auth from '../views/auth/Auth.vue';
import Privacy from '../views/privacy/Privacy.vue';
import Terms from '../views/terms/Terms.vue';

const routes = [
  {
    path: '/',
    component: Landing,
  },
  {
    path: '/auth',
    component: Auth,
  },
  {
    path: '/privacy',
    component: Privacy,
  },
  {
    path: '/legal',
    component: Terms,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
