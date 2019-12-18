import Vue from 'vue'
import VueRouter from 'vue-router'
import studentList from '../views/studentList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/studentList',
    name: 'studentList',
    component: studentList,
    meta:{
      login:true,
    },
  },
  {
    path: '/addStutent',
    name: 'addStutent',
    meta:{
      login:true,
    },
    component: () => import( '../views/addStudent.vue')
  },
  {
    path:'*',
    redirect:'/studentList'
  },
  {
    name:'login',
    path:'/login',
    component:()=> import("../views/Login.vue")
  },
  {
    name:'register',
    path:'/register',
    component:()=> import("../views/register.vue")


  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
