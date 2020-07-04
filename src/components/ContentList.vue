<template>
  <div class="clearfix">
    <el-row :gutter="10" class="top-menu ">
      <el-col :span="24">
        <el-menu :default-active="activeIndex" mode="horizontal" router >
          <el-menu-item index="/home/contentlist/follow">关注</el-menu-item>
          <el-menu-item index="/home/contentlist/watcher">发现</el-menu-item>
          <el-menu-item index="/home/contentlist/city">上海</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>
  
</template>
<script>
export default {
  name:'ContentList',
  data() {
    return{
      activeIndex:'/home/contentlist/watcher'
    }
  },
  methods:{}
}
</script>
<style scoped>
  /* .top-menu{
    position: fixed;
    top: 0;
  } */
  
  .clearfix:after {
      display: block;
      height: 0;
      visibility: hidden;
      content: "";
      clear: both;
  }
  
</style>