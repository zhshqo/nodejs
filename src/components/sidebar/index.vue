<template>
  <scroll-bar>
    <el-menu mode="vertical" theme="dark" router :default-active="$route.path" 
      background-color="#304156" 
      text-color="rgb(255, 255, 255)"
      active-text-color="rgb(64, 158, 255)">
      <sidebar-item :routes='permission_routers'></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './sidebaritem'
import ScrollBar from '@/components/scrollbar'
export default {
  components: { 
    SidebarItem,
    ScrollBar
  },
  computed: {
    ...mapGetters([
      'permission_routers'
    ])
  }
}
</script>

<style scoped>
.el-menu {
  min-height: 100%;
  width: 180px;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track-piece {
background: #d3dce6;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
width: 5px;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
background: #99a9bf;
border-radius: 20px;
}
</style>
