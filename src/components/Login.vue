<template>
  <div>
    <el-row :gutter="10" type="flex" justify="center">
      <el-col :span="8" class="outer">
        <el-form ref="form" :model="form" label-width="80px" class="form">
          <el-form-item label="用户名" class="form_item">
            <el-input v-model="form.username" placeholder="请输入用户名" class="form_input"></el-input>
          </el-form-item>
          <el-form-item label="密码" class="form_item">
            <el-input type="password" v-model="form.password" placeholder="请输入密码" class="form_input"></el-input>
          </el-form-item>
          <el-form-item >
            <el-button @click="login()">登录</el-button>
          </el-form-item>
        </el-form>    
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name:'Login',
  data() {
    return{
      form:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    login(){
      console.log(this.form)
      this.$router.replace('/home')
    }
  }
}
</script>
<style scoped>
  .outer{
    background-color: cadetblue;
    padding: 20px 20px;
    box-sizing: border-box;
    text-align: center;
  }
  .form_item{
    width: 60%;
    text-align: center;
    margin-left: 80px;
  }
</style>
