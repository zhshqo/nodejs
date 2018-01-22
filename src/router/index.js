import Vue from 'vue'
import Router from 'vue-router'
import usermanage from '@/components/usermanage'
import layout from '@/components/common/layout'
import welcome from '@/components/welcome'
import login from '@/components/login/index'
import page404 from '@/components/common/404'
import dashboard from '@/components/dashboard'
import routerviewholder from '@/components/common/routerviewholder'

Vue.use(Router)

//以下路由是所有角色必须的
export const constantRouterMap = [
  { path: '/login', component: login, hidden: true },
  { path: '/404', component: page404, hidden: true },
  {
    path: '/',
    component: layout,//这里表示将layout渲染到顶级出口中
    redirect: '/dashboard',//先将layout渲染到顶级出口中，然后将dashboard装载到layout的route-view中
    name: 'Home',//name在breadcrumb中会单独作为一级显示出来，或者菜单显示需要
    hidden: true,//设置为true就不会显示在菜单中，如果为false，则需要设置noDropdown
    children: [
      {path: 'dashboard',name: '开始页',component: dashboard}//children里不能以/开头
    ]
  }
]

//以下是不同角色的路由
export const asyncRouterMap = [
  {//多级路由按以下格式
    path: '/monitor',
    component: layout,
    redirect: 'noredirect',//设置为noredirect，在breadcrumb中不会显示为手指形状
    name: '监控',
    icon: 'el-icon-view',
    hidden: false,
    noDropdown: false,
    children: [{
      path: 'hw',
      name: '硬件',
      redirect: 'noredirect',
      component: routerviewholder,
      icon:'el-icon-service',
      noDropdown: false,
      hidden: false,
      children: [{
        path: 'memory',
        name: '内存',
        component: welcome,
        icon:'el-icon-service',
        meta:{role: ['guest']}}
      ]
    }
    ]
  },
  {//一级菜单必须按以下格式
    path: '/sysadmin',
    component: layout,
    redirect: '/sysadmin/usermanage',
    icon: 'el-icon-setting',
    hidden: false,
    noDropdown: true,//表示没有下级菜单，且默认会获取第一个children的信息作为当前节点，所以必须有children
    children: [
      {path: 'usermanage',name: '用户管理',component: usermanage,meta:{role: ['admin']}}
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]


export default new Router({
  routes: constantRouterMap
})
