<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">消息</el-menu-item>
      <el-menu-item index="3"><router-link to="">我</router-link></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name:'tabbar',
  data() {
    return{
      activeIndex:1
    }
  },
  methods:{}
}
</script>
<style scoped>

</style>
