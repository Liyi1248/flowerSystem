<template>
    <!--顾客信息完善:表单的label字体需改小-->
  <div id="completeCusInfo" class="completeCusInfo">
    <el-form :model="customer" ref="customer" label-width="100px" class="form" size="medium" status-icon>
      <el-form-item label="用户名">
        <el-input v-model="customer.username" readonly disabled></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="customer.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker v-model="customer.birthDate" editable="false" placeholder="不支持手动输入" style="width: 100%"></el-date-picker>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="customer.phone" ></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="customer.mail">
          <el-select v-model="customer.mailW" slot="append" placeholder="邮箱类型" style="width: 100px;font-size: 12px;color: #f00">
            <el-option label="@163.com" value="1"></el-option>
            <el-option label="@126.com" value="2"></el-option>
            <el-option label="@qq.com" value="3"></el-option>
            <el-option label="@souhu.com" value="4"></el-option>
            <el-option label="@sina.com" value="5"></el-option>
            <el-option label="@yeah.net" value="6"></el-option>
            <el-option label="@139.com" value="7"></el-option>
            <el-option label="@hotmail.com" value="8"></el-option>
            <el-option label="@189.com" value="9"></el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "completeCusInfo",
      data(){
        return{
          customer:{
            username:'账户名XX',  //只显示不修改
            sex:'',
            birthDate:'',
            phone:'',
            mail:'', //邮箱不包括@及之后部分
            mailW:''//邮箱后缀
          },
        }
      }

    }
</script>
<!--style加上scope就无法更改el-form中的label样式，但是没有scope，.completeCusInfo也没有用-->
<!--不加scope，更改element UI的默认样式-->
<style>
  /*@import "../css/templatemo_style.css";*/
  /*@import "../css/ddsmoothmenu.css";*/
  .el-form-item{ width: 100%;}
 .el-form-item__label{
    font-size: 12px;
  }
</style>
<!--加上scope，自定义的css样式-->
<style scoped>
  .completeCusInfo{}
  .completeCusInfo .form{
    font-size: 12px;
    width: 400px;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
  }
  .completeCusInfo .btn{
    align-self: center;
    color: #fff;
    background-color: #79d179;
    font-weight: bolder;
    width: 100%;
    border: none;
  }
  .completeCusInfo .btn:hover{
    background-color: #4dd151;
    color: #f00;
  }
</style>
