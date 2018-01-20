//只能显示两级菜单
<template>
  <div>
    <template v-for="item in routes">
      <template v-if="!item.hidden&&item.noDropdown&&item.children.length>0">
        <el-menu-item :index="item.path+'/'+item.children[0].path"><i :class="item.icon"></i>{{item.children[0].name}}</el-menu-item>
      </template>
      <template v-if="!item.noDropdown&&!item.hidden">
        <el-submenu :index="item.name">
            <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
            <template v-for="child in item.children" v-if='!child.hidden'>
              <el-menu-item :index="child.name" :route="item.path+'/'+child.path"><i :class="child.icon"></i>{{child.name}}</el-menu-item>
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
    }
  },
  created: function() {}
};
</script>

<style scoped>

</style>

