<template>
    <!--前端首页（店铺首页）-->
  <div id="home" class="main">
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
              <li><a href="#" class="selected">鲜花</a></li>
              <li><router-link to="/order">订单中心</router-link></li>
              <li><router-link to="/shoppingCart">购物车</router-link></li>
              <li><router-link to="/personInfo">个人中心</router-link></li>
              <li><a href="#">注销退出</a></li>
            </ul>
            <div id="templatemo_search">
              <form action="#" method="get">
                <input type="text" value="搜索" name="keyword" id="keyword" title="keyword"
                       onfocus="clearText(this)" onblur="clearText(this)" class="txt_field" />
                <input type="submit" name="Search" value="" alt="Search" id="searchbutton" title="Search" class="sub_btn" />
              </form>
            </div>
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
            <h2>鲜花</h2>
             <div class="product_box">
              <a href="#"><img src="../assets/views/product/01.jpg" alt="floral set 1" /></a>
              <h3>鲜花</h3>
              <p class="product_price">240</p>
              <p class="add_to_cart">
                <a href="#">详情</a>
                <a href="#">加购</a>
              </p>
            </div>
            <div class="product_box">
              <a href="#"><img src="../assets/views/product/02.jpg" alt="flowers 2" /></a>
              <h3>鲜花</h3>
              <p class="product_price">160</p>
              <p class="add_to_cart">
                <a href="#">详情</a>
                <a href="#">加购</a>
              </p>
            </div>
            <div class="product_box">
              <a href="#"><img src="../assets/views/product/03.jpg" alt="floral 3" /></a>
              <h3>鲜花</h3>
              <p class="product_price">140</p>
              <p class="add_to_cart">
                <a href="#">详情</a>
                <a href="#">加购</a>
              </p>
            </div>
            <div class="product_box no_margin_right">
              <a href="#"><img src="../assets/views/product/04.jpg" alt="flowers 4" /></a>
              <h3>鲜花</h3>
              <p class="product_price">320</p>
              <p class="add_to_cart">
                <a href="#">详情</a>
                <a href="#">加购</a>
              </p>
            </div>

            <div class="product_box">
              <a href="#"><img src="../assets/views/product/05.jpg" alt="floral set 5" /></a>
              <h3>鲜花</h3>
              <p class="product_price">150</p>
              <p class="add_to_cart">
                <a href="#">详情</a>
                <a href="#">加购</a>
              </p>
            </div>
            <div class="product_box">
              <a href="#"><img src="../assets/views/product/07.jpg" alt="flowers 7" /></a>
              <h3>鲜花</h3>
              <p class="product_price">110</p>
              <p class="add_to_cart">
                <a href="#">详情</a>
                <a href="#">加购</a>
              </p>
            </div>
            <div class="product_box">
              <a href="#"><img src="../assets/views/product/06.jpg" alt="flower set 6" /></a>
              <h3>鲜花</h3>
              <p class="product_price">130</p>
              <p class="add_to_cart">
                <a href="#">详情</a>
                <a href="#">加购</a>
              </p>
            </div>
            <div class="product_box no_margin_right">
              <a href="#"><img src="../assets/views/product/08.jpg" alt="floral 8" /></a>
              <h3>鲜花</h3>
              <p class="product_price">170</p>
              <p class="add_to_cart">
                <a href="#">详情</a>
                <a href="#">加购</a>
              </p>
            </div>
            <div class="blank_box">
              <a href="#" class="button left">上一页</a>
              <a href="#" class="button right">下一页</a>
            </div>
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
import {ddsmoothmenu} from '../js/ddsmoothmenu.js'
    export default {
        name: "home",
      data:{
        order:'cdf'
      },
      methods:{
        clearText:function(field){
          if (field.defaultValue == field.value) field.value = '';
          else if (field.value == '') field.value = field.defaultValue;
        },
      }
    }



</script>

<style scoped>
  @import "../css/templatemo_style.css";
  @import "../css/ddsmoothmenu.css";
</style>
