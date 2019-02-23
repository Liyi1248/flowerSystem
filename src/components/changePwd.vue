<template>
    <div id="changePwd">
      <!--还没有做原密码验证-->
      <el-form :model="changePwd" status-icon :rules="rules2" ref="changePwd" label-width="100px" style="margin:20px auto;width:40%;min-width:300px;">
        <el-form-item label="原密码" prop="pass">
          <el-input type="password" v-model="changePwd.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="passNew">
          <el-input type="password" v-model="changePwd.passNew" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="changePwd.checkPass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('changePwd')">提交</el-button>
          <el-button @click="resetForm('changePwd')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "changePwd",
      data() {
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.changePwd.checkPass !== '') {
              this.$refs.changePwd.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.changePwd.passNew) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          changePwd: {
            pass:'',
            passNew: '',
            checkPass: '',
          },
          rules2: {
            pass:[
              {required:true}
            ],
            passNew: [
              { required:true,validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { required:true,validator: validatePass2, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
              console.log(this.changePwd.passNew,this.changePwd.checkPass);
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
