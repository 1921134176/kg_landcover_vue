import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Login' }, // 路由重定向
  { path: '/Login', component: Login },
  { path: '/Home', component: Home }
]

const router = new VueRouter({
  routes
})

export default router
