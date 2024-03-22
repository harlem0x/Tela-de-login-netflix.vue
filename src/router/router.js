import { createRouter, createWebHistory } from 'vue-router';

import Projetos from '../views/Projetos.vue';
import LoginNetflix from '../views/LoginNetflix.vue';
import Conversao from '../views/Conversao.vue';

const routes = [
  { path: '/', component: Projetos },
  { path: '/loginnetflix', component: LoginNetflix },
  { path: '/conversao', component: Conversao },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
