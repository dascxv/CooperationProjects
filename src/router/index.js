import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chenshuaibo',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/chenshuaibo.vue')
  },
  {
    path: '/zhengxinle',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/zhengxinle.vue')
  },
  {
    path: '/gongkexin',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/gongkexin.vue')
  },
  {
    path: '/list10',
    name: 'list10',

    component: () => import(/* webpackChunkName: "about" */ '../views/zhangpanpan.vue')
  }
  ,
  {
    path: '/effect04',
    name: "/effect04",
    component: () => import('../views/zp02.vue')
  },
  {
    path: '/details07',
    name: "/details07",
    component: () => import('../views/zp03.vue')
  },{
    path:'/Designer09',
    name:'Designer',
    component:()=>import('../views/zp04.vue')
  },{
    path:'/Designer12',
    name:"Designer12",
    component:()=>import('../views/zp05.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
