import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

const MenuArr: any = [
  {
    path: 'MainPage',
    name: 'MainPage',
    meta: { rName: "/主页" },
    component: () => import(/* webpackChunkName: "about" */ '../views/Business/MainPage.vue')
  },


]
let routes: Array<RouteRecordRaw> = [
  {
    path: '/Login',
    name: 'Login', meta: { requiresAuth: true },
    component: () => import('../views/Login.vue')
  },

  {
    path: '/',
    name: 'Home1',
    meta: { rName: "/首页/", requiresAuth: true },
    //component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    redirect: "/Home/MainPage"
  },



  {
    path: '/Home',
    name: 'Home',
    meta: { rName: "/首页/", requiresAuth: true },
    component: () => import('../views/Home.vue'),
    children: MenuArr
  },
]



const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router