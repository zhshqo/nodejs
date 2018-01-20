<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="myhamburger" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb class="mybreadcrumb"></breadcrumb>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import breadcrumb from '@/components/common/breadcrumb'
import Hamburger from '@/components/common/hamburger'

export default {
  components: {
    breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()  // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style scoped>
.navbar {
    height: 40px;
    line-height: 40px;
    border-radius: 0px !important;
    border-bottom: solid 1px #e6e6e6;
}
.navbar .myhamburger {
    line-height: 48px;
    height: 40px;
    float: left;
    padding: 0 10px;
}
.navbar .mybreadcrumb {
    line-height: 40px;
    height: 40px;
    margin:0px auto;
}
</style>

