import store from '@/store';
import { authenticationNamespace } from '@/store/authentication';
import { IS_AUTHENTICATED } from '@/store/authentication/getters';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const ROUTES = {
  about: 'about',
  home: 'home',
  login: 'login',
  notFound: 'not-found',
};

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: ROUTES.home,
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: ROUTES.about,
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: ROUTES.login,
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
      meta: { guest: true },
    },
    {
      path: '*',
      name: ROUTES.notFound,
      component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue'),
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, _, next) => {
  const isAuthenticated = store.getters[`${authenticationNamespace}/${IS_AUTHENTICATED}`];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isAuthenticated) {
      next();
    } else {
      next({
        name: ROUTES.login,
        params: { nextUrl: to.fullPath },
      });
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (isAuthenticated) {
      next({ name: ROUTES.home });
    } else {
      next();
    }
  } else {
    next();
  }
});

export {
  router,
  ROUTES,
};
