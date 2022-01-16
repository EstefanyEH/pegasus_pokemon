import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Favoritos from '../views/Favoritos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokemones',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pokemones.vue')
  },
  {
    path: '/favoritos',
    component: Favoritos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
