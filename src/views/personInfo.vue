<template>
    <!--顾客信息完善-->
  <div id="personInfo" class="main">
    <div id="templatemo_wrapper_sp">
      <div id="templatemo_header_wsp">
        <div style="float: right; margin:30px 30px auto auto;">
          <router-link to="/login" style="color: #f00;font-size: 12px;">登录</router-link>&nbsp;|
          <router-link to="/register" style="color: #f00;font-size: 12px;">注册</router-link>
        </div>
        <div id="templatemo_header" class="header_subpage">
          <div id="site_title"><a href="#" title="美丽心情">logo</a></div>
          <div id="templatemo_menu" class="ddsmoothmenu">
            <ul>
              <li><router-link to="/about">店铺公告</router-link></li>
              <li><router-link to="/">鲜花</router-link></li>
              <li><router-link to="/order">订单中心</router-link></li>
              <li><router-link to="/shoppingCart">购物车</router-link></li>
              <li><a href="#" class="selected">个人中心</a></li>
              <li><a href="#">注销退出</a></li>
            </ul>
            <br style="clear: left" />
          </div>
          <!-- end of templatemo_menu -->
        </div> <!-- END of header -->
      </div><!-- END of header wrapper -->
      <div id="templatemo_main_wrapper">
        <div id="templatemo_main" style="width: 1100px;">
          <div id="sidebar" class="left">
            <div class="sidebar_box"><span class="bottom"></span>
              <h3>个人中心</h3>
              <div class="content" >
                <el-menu default-active="/personInfo/completeCusInfo" class="sidebar_list" router text-color="#fff" active-text-color="#5d7c29">
                  <el-menu-item index="/personInfo/completeCusInfo"><span slot="title">完善个人信息</span></el-menu-item>
                  <el-menu-item index="/personInfo/changePwd"><span>修改密码</span></el-menu-item>
                  <el-menu-item index="/personInfo/address"><span>收获地址管理</span></el-menu-item>
                </el-menu>
              </div>
            </div>
          </div>

          <div id="content" class="right" style="width: 820px;background-color: #ffffff;border-radius:5px 5px 0 0;min-height: 500px">
            <router-view></router-view>
          </div>
          <div class="cleaner"></div>
        </div> <!-- END of main -->
      </div> <!-- END of main wrapper -->

      <div id="templatemo_footer_wrapper">
        <div id="templatemo_footer">
          <div class="footer_right">
            <p><router-link to="/">产品系列</router-link> | <router-link to="/about">店铺公告</router-link></p>
            <p>Copyright © 2019 <a href="#"></a> | Collect from <a href="#" title="学号">8000115266</a></p>
          </div>
          <div class="cleaner"></div>
        </div> <!-- END of footer -->
      </div> <!-- END of footer wrapper -->
    </div>
  </div>
</template>

<script>
  export default {
    name:'personInfo',
  }
</script>

<style scoped>
  @import "../css/templatemo_style.css";
  @import "../css/ddsmoothmenu.css";
  /*设置左侧菜单样式*/
  .el-menu{
    background-color:rgba(0,0,0,0);
    min-height: 200px;
  }
  .el-menu-item{
    margin: 0; padding: 5px 0;
    background: url(../assets/views/templatemo_list.png) left center no-repeat;
    font-size: 11px;
    height: 35px;
    line-height: 35px;
    letter-spacing: 1px;
  }
</style>

