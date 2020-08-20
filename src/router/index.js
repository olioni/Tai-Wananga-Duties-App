import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kitchen from '../views/Kitchen.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Kitchen',
    name: 'Kitchen',
    component: Kitchen 
  }                                                                                                                             
  ]

const router = new VueRouter({
  routes
})

export default router
