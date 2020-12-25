import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import ShopCart from '../views/ShopCart.vue'
import User from '../views/User.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import ProductDetail from '../views/ProductDetail.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/productdetail/:productcode',
    name: 'Product',
    component: ProductDetail
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
  // ...
  const auth = ['/user', '/shopcart']

  if (auth.includes(to.fullPath)) {
    // console.log('验证token')
    if (!localStorage.getItem('user')) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
