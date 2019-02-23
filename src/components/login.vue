<template>
  <div id="login" class="login">
    <div>
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="login-page">
        <p class="title">账号登录</p>
        <el-form-item prop="username">
          <el-input type="text" v-model="ruleForm2.username" auto-complete="off" aria-placeholder="请输入">
            <template slot="prepend">账号</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm2.password" auto-complete="off" aria-placeholder="请输入">
          <template slot="prepend">密码</template>
        </el-input>
      </el-form-item>
      <el-form-item label="身份：" label-width="80px">
        <el-radio-group v-model="ruleForm2.role"  auto-complete="off">
          <el-radio label="admin">管理员</el-radio>
          <el-radio label="customer" checked>顾客</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item style="width: 100%;">
        <el-button  style="width: 100%;" @click="handleSubmit" :loading="logining" class="loginBtn">登录</el-button>
        <p class="tips">还没有账号？立即<router-link to="/register" style="color: #f00;text-decoration: none;">注册</router-link></p>
      </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
        return {
          logining: false,
          ruleForm2: {
            username: 'admin',
            password: '123456',
            role:'customer'
          },
          rules2: {
            username: [{required: true, message: 'please enter your account', trigger: 'blur'}],
            password: [{required: true, message: 'enter your password', trigger: 'blur'}]
          },
          checked: false
        }
      },
      methods: {
        handleSubmit(event){
          this.$refs.ruleForm2.validate((valid) => {
            if(valid){
              this.logining = true;
              if(this.ruleForm2.username === 'admin' &&
                this.ruleForm2.password === '123456' && this.ruleForm2.role=='admin'){
                this.logining = false;
              //  sessionStorage.setItem('user', this.ruleForm2.username);
                this.$router.push({path: '/helloWorld'});  //转向后台操作路由
              }else{
                this.$router.push({path: '/'});  //转向顾客页面路由
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
  .login{
    background: url("../assets/loginBck.jpg");
    background-size: 100% 100%; /*背景铺满全屏*/
    height: 100vh;  /*高度全屏*/
    overflow-y: auto;
  }
  .title{
    color: #575757;
  }
  .login-page {
    float: right;
    margin-right: 50px;
    margin-top: 60px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    width: 280px;
    padding: 15px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    opacity: 0.9;
  }
  label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
  }
  .loginBtn{
    background-color: #79d179;
    box-shadow: 2px 2px 2px 0 #d2d2d2;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 5px;
    color: #fff;
  }
  .loginBtn:hover{background-color: #4dd151
  }
  /*注册提示*/
  .tips{
    font-size: 11px;
    margin-top: 5px;
    letter-spacing: 1px;
    line-height: 10px;
  }
</style>
