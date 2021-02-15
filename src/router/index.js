import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DutyDashboard from '../views/DutyDashboard.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DutyDashboard',
    name: 'DutyDashboard',
    component: DutyDashboard 
  }                                                                                                                
  ]

const router = new VueRouter({
  routes
})

export default router
