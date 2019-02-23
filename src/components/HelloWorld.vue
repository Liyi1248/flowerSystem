<template>
  <div id="HelloWorld">
    <el-container  style="height: 100vh;">
      <el-aside width="200px" style="background-color: #2F4050;">
        <el-menu :default-active="this.$route.path" :collapse="collapsed" @select="handleSelect" background-color="#2F4050" text-color="#fff" active-text-color="#ffd04b" unique-opened router>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>店铺上新</span>
            </template>
            <el-menu-item index="/admin/flowerList">鲜花列表</el-menu-item>
            <el-menu-item index="/admin/shopInfo">编辑店铺信息</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span slot="title">个人信息</span>
            </template>
            <el-menu-item index="/admin/adminInfo">基础信息</el-menu-item>
            <el-menu-item index="/admin/changePwd">修改密码</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-search"></i>
              <span slot="title">顾客信息</span>
            </template>
            <el-menu-item index="/admin/viewAllCustomer">浏览全部顾客</el-menu-item>
            <el-menu-item index="/admin/changeAccountCustomer">当月客户变化情况</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">订单管理</span>
            </template>
            <el-menu-item index="/admin/orderList">浏览全部订单</el-menu-item>
            <el-menu-item index="/admin/orderAwaitAdmin">待发货</el-menu-item>
            <el-menu-item index="/admin/orderSentAdmin">已发货</el-menu-item>
            <el-menu-item index="/admin/orderHisAdmin">历史订单</el-menu-item>
          </el-submenu>

          <el-menu-item index="/admin/sale">
            <i class="el-icon-view"></i>
            <span slot="title">销售分析</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <!--右边布局-->
      <el-container>
        <el-header style="text-align: right; font-size: 12px">

          <el-dropdown trigger="hover">
            <span><!--img :src="sysUserAvatar"/--> {{sysUserName}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <!--信息显示域-->
        <el-main style="background-color:#fff;">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        sysName:'VUEADMIN',
        collapsed:false,
        sysUserName: '王小虎',
        sysUserAvatar: '@/assets/user.png',
        collapsed: false,
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(index){
        this.defaultActiveIndex = index;
      },
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /**line-height: 40px;**/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  /*新增样式*/
  .el-menu{
  }


  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }

</style>
