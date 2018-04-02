import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Indexs from '@/page/index/index'
import Home from '@/page/home/home'
import Login from '@/page/login/login'
import forms from '@/page/form/form'
import tables from '@/page/table/table'
import mkedit from '@/page/mkedit/mkedit'
import dialogs from '@/page/dialog/dialog'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'index',
          component: Indexs
        },
        {
          path: '/home/forms',
          name: 'forms',
          component: forms
        },
        {
          path: '/home/table',
          name: 'table',
          component: tables
        },
        {
          path: '/home/mkedit',
          name: 'mkedit',
          component: mkedit
        },
        {
          path: '/home/dialogs',
          name: 'dialogs',
          component: dialogs
        },
      ]
    },
  ]
})
