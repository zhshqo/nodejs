<template>
    <el-breadcrumb class="myBreadcrumb" separator="/">
        <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
        <router-link v-if='item.redirect==="noredirect"||index==levelList.length-1' to="" class="no-redirect">{{item.name}}</router-link>
        <router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>

export default {
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && (first.name !== 'Home' || first.path !== '')) {
        matched = [{ name: 'Home', path: '/' }].concat(matched)
      }
      this.levelList = matched
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  }
}
</script>

<style scoped>

.myBreadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  margin:0px auto;
}
.no-redirect {
    font-weight: 400;
    color: #606266;
    cursor: text;
}
.no-redirect:hover {
    color: #606266;
    cursor: text;
}
.router-link-active {
    text-decoration: none;
}
</style>
