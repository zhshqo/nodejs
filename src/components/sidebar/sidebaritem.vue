//利用递归显示多级菜单，props中的变量从父组件利用属性传递到子组件，upperpath用来传递带“/”的上级路径，routes用来传递路由列表
<template>
  <div>
    <template v-for="item in routes">
      <template v-if="!item.hidden&&item.noDropdown&&item.children.length>0">
        <el-menu-item :index="item.path.indexOf('/')>=0?item.path:upperpath+'/'+item.children[0].path"><i :class="item.icon"></i>{{item.children[0].name}}</el-menu-item>
      </template>
      <template v-if="!item.hidden&&!item.noDropdown">
        <el-submenu :index="item.name">
            <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
            <template v-for="child in item.children" v-if='!child.hidden'>
              <sidebar-item v-if="child.children&&child.children.length>0" :routes="[child]" :upperpath="item.path+'/'+child.path"></sidebar-item>
              <el-menu-item v-else :index="child.name" :route="item.path.indexOf('/')>=0?item.path:upperpath+'/'+child.path"><i :class="child.icon"></i>{{child.name}}</el-menu-item>
            </template>
        </el-submenu>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    routes: {
      type: Array
    },
    upperpath: {
      type: String
    }
  },
  created: function() {}
};
</script>

<style scoped>

</style>

