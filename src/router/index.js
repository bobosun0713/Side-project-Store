import Vue from 'vue'
import VueRouter from 'vue-router'

// 頁面
import Home from '../views/Home.vue'
import OrderList from '../views/order/OrderList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'order/list',
        name: 'OrderList',
        component: OrderList,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
