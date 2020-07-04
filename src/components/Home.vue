<template>
  <div>
    <router-view></router-view>
    
    <div class="nav_bar">
      <el-row :gutter="10" type="flex" justify="center">
        <el-col :span="24" >
          <el-menu :default-active="activeIndex" class="home-el-menu" mode="horizontal" @select="handleSelect" router>
            <el-menu-item index="/home/contentlist">首页</el-menu-item>
            <el-menu-item index="/home/messagelist">消息</el-menu-item>
            <el-menu-item index="/home/profile">我</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name:'home',
  data() {
    return{
      activeIndex:'/home/contentlist'
    }
  },
  methods:{
    handleSelect(){
      console.log('dian')
    }
  }
}
</script>
<style scoped>
  .nav_bar{
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: crimson;
  }
  .home-el-menu{
    width:100%;
  }
</style>