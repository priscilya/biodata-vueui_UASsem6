import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/stok/Home.vue'
import Tentangsaya from '../views/stok/Tentangsaya.vue'
import Pendidikansaya from '../views/stok/Pendidikansaya.vue'
import Kerjasaya from '../views/stok/Kerjasaya.vue'
import Kontaksaya from '../views/stok/Kontaksaya.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tentangsaya',
    name: 'Tentangsaya',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Tentangsaya
  },
  {
    path: '/pendidikansaya',
    name: 'Pendidikansaya',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Pendidikansaya
  },
  {
    path: '/kerjasaya',
    name: 'Kerjasaya',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Kerjasaya
  },
  {
    path: '/kontaksaya',
    name: 'Kontaksaya',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Kontaksaya
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
