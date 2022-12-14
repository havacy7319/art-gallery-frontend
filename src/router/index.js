import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },

    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/LogoutView.vue')
    },

    {
      path: '/items',
      name: 'items',
      component: () => import('../views/ItemsView.vue')
    },

    {
      path: '/authors',
      name: 'authors',
      component: () => import('../views/AuthorsView.vue')
    },

    {
      path: '/author/:id',
      name: 'author',
      props: true,
      component: () => import('../views/AuthorView.vue')
    },

    {
      path: '/publish',
      name: 'publish',
      props: true,
      component: () => import('../views/PublishItemView.vue')
    },

    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },

    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
  ]
})