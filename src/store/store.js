import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/store/modules/app'
import user from '@/store/modules/user'
import router from '@/store/modules/router'
import breadlist from '@/store/modules/breadlist'

Vue.use(Vuex)

const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routers: state => state.router.routers,
  addRouters: state => state.router.addRouters
}

const store = new Vuex.Store({
  modules: {
    app,
    user,
    router,
    breadlist
  },
  getters
})

export default store