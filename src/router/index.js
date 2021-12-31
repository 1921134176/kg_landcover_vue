import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Home' }, // 路由重定向
  { path: '/Home', component: Home }
]

const router = new VueRouter({
  routes
})

export default router
