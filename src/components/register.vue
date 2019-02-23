<template>
  <!--注册-->
    <div id="register" class="login">
      <el-container style="height: 100vh;">
        <el-header class="header">账号注册页</el-header>
        <el-main class="main">
          <el-form :model="ReUser" ref="ReUser" class="ReForm" label-width="80px" status-icon="true">
            <el-form-item label="设置账号">
              <el-input v-model="ReUser.username"></el-input>
            </el-form-item>
            <el-form-item label="设置密码">
              <el-input type="password" v-model="ReUser.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input type="password" v-model="ReUser.password2"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input type="password" v-model="ReUser.verify"></el-input>
              <p style="color: #f00;font-size: 11px;line-height: 10px;margin-top: 5px">此项为注册管理员必填项，选择顾客身份则请忽略此项</p>
            </el-form-item>
            <!--提交按钮-->
            <el-form-item>
              <el-button  style="width: 100%;" @click="handleSubmit" :loading="logining" class="loginBtn">立即注册</el-button>
            </el-form-item>
          </el-form>
        </el-main>
        <el-footer class="footer">
            <div style="text-align: right;float: right;font-size: 11px">
              <p style="margin: 12px 5px 0 auto;"><router-link to="/home">产品系列</router-link>&nbsp;|&nbsp;<router-link to="/about">店铺公告</router-link></p>
              <p style="margin: 10px 5px auto auto;">Copyright © 2019  | Collect from <a href="#" title="学号">8000115266</a></p>
            </div>
        </el-footer>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "register",
      data(){
        return {
          ReUser: {
            username: '',
            password: '',
            password2:'',
            verify:''  //管理员注册验证项，假设输入g88888888则为店主给出的验证码
          },
          rules: {
            username: [{required: true, message: 'please enter your account', trigger: 'blur'}],
            password: [{required: true, message: 'enter your password', trigger: 'blur'}]
          },
        }
      },
      methods: {
        handleSubmit(event){
          this.$refs.ruleForm2.validate((valid) => {
            if(valid){
              this.logining = true;
              if(this.ruleForm2.username === 'admin' &&
                this.ruleForm2.password === '123456'){
                this.logining = false;
                sessionStorage.setItem('user', this.ruleForm2.username);
                this.$router.push({path: '/'});
              }else{
                this.logining = false;
                this.$alert('username or password wrong!', 'info', {
                  confirmButtonText: 'ok'
                })
              }
            }else{
              console.log('error submit!');
              return false;
            }
          })
        }
      }
    }
</script>

<style scoped>
  @import "../css/templatemo_style.css";
  /*背景设置*/
  .login{
    background: url("../assets/loginBck.jpg");
    background-size: 100% 100%; /*背景铺满全屏*/
    height: 100vh;  /*高度全屏*/
    overflow-y: auto;
  }
  /*布局头部*/
  .header{
    text-align: center;
    background-color: #ffffff;
    line-height: 60px;  /*60是默认的header高度*/
    border-bottom: 3px solid #79d179;
  }
  /*主体部分*/
  .main{
    background: #fff;
    opacity: 0.5;  /*透明度设置*/
    height: 100%;
  }
  /*底部*/
  .footer{
    background-color: #263238;
  }
  /*注册表单样式：大小*/
  .ReForm{
    width: 500px;
    margin: 20px auto auto auto;
  }
  label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
  }
  .loginBtn{
    background-color: #57d160;
    font-weight: bold;
    font-size: 16px;
    margin-top: 25px;
    letter-spacing: 5px;
    color: #fff;
  }
  .loginBtn:hover{background-color: #2bd130
  }
  /*注册提示*/
  .tips{
    font-size: 11px;
    margin-top: 2px;
    letter-spacing: 1px;
    color: #575757;
  }
</style>
