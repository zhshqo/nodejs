<template>
  <div style="line-height:50px;overflow: hidden;background-color:#304156;border-bottom:solid 1px #e6e6e6;">
      <span class="demonstration" style="float:left;color:white;margin-left:1%">
          网站标志
      </span>
      <span class="demonstration" style="float:right;margin-right:1%;color:white;cursor:pointer">
          <el-dropdown trigger="click" style="margin-right:5px;">
            <span class="el-dropdown-link" style="color:white;">
              用户<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link class='inlineBlock' to="/">
                <el-dropdown-item>Home</el-dropdown-item>
              </router-link>
              <el-dropdown-item divided><span @click="logout" style="display:block;">LogOut</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </span>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()  // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
};
</script>

<style scoped>

</style>
