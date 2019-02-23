<template>
  <div id="adminInfo">
    <!--编辑个人信息表单-->
    <el-form ref="form" :model="admin" label-width="100px" style="margin:20px auto auto auto;width:40%;min-width:500px;">
      <el-form-item label="账户：">
        <span v-text="admin.id" class="span-word"></span>
      </el-form-item>
      <el-form-item label="用户名：">
        <el-input v-model="admin.name"></el-input>
      </el-form-item>
      <el-form-item label="性别：">
        <span v-text="admin.sex" class="span-word"></span>
      </el-form-item>
      <el-form-item label="出生年月：">
        <span v-text="admin.birthDate" class="span-word"></span>
      </el-form-item>
      <el-form-item label="联系电话：">
        <el-input v-model="admin.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="width: 100%">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "adminInfo",
      data() {
        return {
          admin: {
            id:'Y00001',
            name: 'admin1',
            sex:'男',
            birthDate:'1992-12-2',
            phoneNumber:'13179662739'
          }
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
          console.log(this.admin.phoneNumber);
        }
      }
    }
</script>

<style scoped>
  .span-word{float: left;}
</style>
