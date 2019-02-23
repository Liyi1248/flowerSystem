<template>
    <!--店铺公告-->
  <div id="about" class="main">
    <div id="templatemo_wrapper_sp">
      <div id="templatemo_header_wsp">
        <div style="float: right; margin:30px 30px auto auto;">
          <router-link tag="a" target="_blank" to="/login" style="color: #f00;font-size: 12px;">登录2</router-link>&nbsp;|

          <router-link to="/register" style="color: #f00;font-size: 12px;">注册</router-link>
        </div>
        <div id="templatemo_header" class="header_subpage">
          <div id="site_title"><a href="#" title="美丽心情">logo</a></div>
          <div id="templatemo_menu" class="ddsmoothmenu">
            <ul>
              <li><a href="#" class="selected">店铺公告</a></li>
              <li><router-link to="/">鲜花</router-link></li>
              <li><router-link to="/order">订单中心</router-link></li>
              <li><router-link to="/shoppingCart">购物车</router-link></li>
              <li><router-link to="/personInfo">个人中心</router-link></li>
              <li><a href="#">注销退出</a></li>
            </ul>
            <br style="clear: left" />
          </div>
          <!-- end of templatemo_menu -->
        </div> <!-- END of header -->
      </div> <!-- END of header wrapper -->
      <div id="templatemo_main_wrapper">
        <div id="templatemo_main">
          <div id="sidebar" class="left">
            <div class="sidebar_box"><span class="bottom"></span>
              <h3>经营系列</h3>
              <div class="content">
                <ul class="sidebar_list">
                  <li><a href="#">爱情用花</a></li>
                  <li><a href="#">生日用花</a></li>
                  <li><a href="#">慰问用花</a></li>
                  <li><a href="#">摆设用花</a></li>
                  <li><a href="#">商业用花</a></li>
                  <li><a href="#">多肉宠</a></li>
                </ul>
              </div>
            </div>
            <div class="sidebar_box"><span class="bottom"></span>
              <h3>特价</h3>
              <div class="content special">
                <img src="../assets/views/templatemo_image_01.jpg" alt="Flowers" />
                <a href="#">柑橘花束</a>
                <p>
                  Price:
                  <span class="price normal_price">160</span>&nbsp;&nbsp;
                  <span class="price special_price">100</span>
                </p>
              </div>
            </div>
          </div>

          <div id="content" class="right">
            <h2>店铺首页</h2>
            <p>桃之夭夭，灼灼其华。千言万语尽在花里，让花抒情畅意！本店经营各种鲜花，无论您是想送人还是装饰亦或摆设，本店都可以满足您，并支持在配送范围内支持配送。若您在收到商品后有任何疑问，可在营业时间按照下方通过下方的售后电话致电本店，及时解决您的问题</p>
            <p>线下店铺地址：XXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>营业时间：XXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>售后电话：XXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <div class="cleaner h20"></div>
            <h3>鲜花，多肉养护小技巧</h3>
            <p>拿花时，动作轻柔。</p>
            <p>注意每天换水清洁</p>
            <p>定期清理花材。如果花瓣或叶子出现腐烂状态，要及时摘取，以免传染给新鲜的地方。</p>
            <p>注意温度。适宜的温度储存可以使鲜花寿命延长，一般适宜的温度为10度-20度左右。</p>
            <p>避免阳光直射</p>
            <div class="cleaner"></div>
            <blockquote>祝您快乐生活每一天，每天都有花儿一样的心情.
            </blockquote>
          </div>
          <div class="cleaner"></div>
        </div> <!-- END of main -->
      </div> <!-- END of main wrapper -->

      <div id="templatemo_footer_wrapper">
        <div id="templatemo_footer">
          <div class="footer_right">
            <p><a href="home.vue">产品系列</a> | <a href="about.vue">店铺公告</a></p>
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
        name: "about"
    }
</script>

<style scoped>
  @import "../css/templatemo_style.css";
  @import "../css/ddsmoothmenu.css";
  .main{	margin: 0;
    padding: 0;
    color: #d6dbce;
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-size: 11px;
    line-height: 20px;
    background-color: #ffffff;
    background: url(../assets/views/templatemo_main.png) repeat;}
</style>
