import Vue from 'vue'
import Router from 'vue-router'
import usermanage from '@/components/usermanage'
import layout from '@/components/common/layout'
import welcome from '@/components/welcome'
import login from '@/components/login/index'
import page404 from '@/components/common/404'
import dashboard from '@/components/dashboard'

Vue.use(Router)

//以下路由是所有角色必须的
export const constantRouterMap = [
  { path: '/login', component: login, hidden: true },
  { path: '/404', component: page404, hidden: true },
  {
    path: '/',
    component: layout,//这里需要设置router-view所在的组件名称
    redirect: '/dashboard',//将dashboard装载到layout的route-view中
    name: 'Home',//加上名字，在breadcrumb中会单独作为一级显示出来
    hidden: true,//设置为true就不会显示在菜单中，如果为false，则需要设置noDropdown
    children: [
      {path: 'dashboard',name: '开始页',component: dashboard}//children里不能以/开头
    ]
  }
]

//以下是不同角色的路由
export const asyncRouterMap = [
  {
    path: '/monitor',
    component: layout,
    redirect: 'noredirect',//设置为noredirect，在breadcrumb中不会显示为手指形状
    name: '监控',
    icon: 'el-icon-view',
    hidden: false,
    noDropdown: false,
    children: [{
      path: 'welcome',
      name: '内存',
      component: welcome,
      icon:'el-icon-service',
      meta:{role: ['guest']},
      noDropdown: false,
      hidden: false}
    ]
  },

  {
    path: '/sysadmin',
    component: layout,
    redirect: '/sysadmin/usermanage',
    icon: 'el-icon-setting',
    hidden: false,
    noDropdown: true,
    children: [
      {path: 'usermanage',name: '用户管理',component: usermanage,meta:{role: ['admin']}}
    ]
  }
]


export default new Router({
  routes: constantRouterMap
})
