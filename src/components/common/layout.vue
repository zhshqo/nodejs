//布局文件
<template>
 <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <div class="header-wrapper">
      <myHeader></myHeader>
    </div>
    <div class="body-wrapper">
      <div class="sidebar-wrapper">
        <mySidebar class="sidebar-container"></mySidebar>
      </div>
      <div class="main-wrapper">
        <myNavbar class="main-container-header"></myNavbar>
        <myContent class="main-container-body"></myContent>
      </div>
    </div>
  </div>
</template>

<script>

import mySidebar from '@/components/sidebar'
import myHeader from '@/components/common/header'
import myNavbar from '@/components/common/navbar'
import myContent from '@/components/common/routerviewholder'

export default {
  name: "app",
  data() {
    return {
    };
  },
  computed: {
    sidebar() {
      console.log("this.$store.state.app.sidebar :"+this.$store.state.app.sidebar.opened);
      return this.$store.state.app.sidebar
    }
  },
  components: {
    mySidebar,
    myNavbar,
    myContent,
    myHeader
  },
  created:function(){
       //this.$router.push('/welcome'); // 页面加载时跳转
  }
};
</script>

<style scoped>
  .app-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .hideSidebar .sidebar-wrapper {
      transform: translate(-180px, 0);
  }
  .hideSidebar .main-wrapper {
      margin-left: 0px;
  }
  .header-wrapper {
    width: 100%;
    height: 50px;
    z-index: 1000;
    position: fixed;
    float: left;
  }
  .body-wrapper {
    width: 100%;
    margin-top: 50px;
    float: left;
  }
  .sidebar-wrapper {
      width: 180px;
      height: 100%;
      position: fixed;
      left: 0;
      z-index: 1;
      overflow: hidden;
      transition: all .28s ease-out;
  }
  .sidebar-container {
      transition: all .28s ease-out;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: -17px;
      // overflow-y: scroll;
  }
  .main-wrapper {
      height: 100%;
      min-height: 100%;
      transition: all .28s ease-out;
      margin-left: 180px;
      padding-left: 5px;
      overflow: hidden;
  }
  .main-wrapper .main-container-header {
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: fixed;
    z-index:1;
    background-color: white;
    border-bottom: solid 1px #e6e6e6;
    display: inline-block;
  }
  .main-wrapper .main-container-body {
    margin-top: 40px;
    width: 100%;
    display: inline-block;
  }
</style>
