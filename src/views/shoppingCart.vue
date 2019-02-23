<template>
    <!--购物车-->
  <div id="shoppingCart" class="main">
    <div id="templatemo_wrapper_sp">
      <div id="templatemo_header_wsp">
        <div id="templatemo_header" class="header_subpage">
          <div id="site_title"><a href="#" title="美丽心情">logo</a></div>
          <div id="templatemo_menu" class="ddsmoothmenu">
            <ul>
              <li><router-link to="/about" >店铺公告</router-link></li>
              <li><router-link to="/">鲜花</router-link></li>
              <li><router-link to="/order">订单中心</router-link></li>
              <li><a href="#" class="selected">购物车</a></li>
              <li><router-link to="/login">注册登录</router-link></li>
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
            <h2>购物车</h2>
            <table width="700" border="0" cellpadding="5" cellspacing="0">
              <tr bgcolor="#395015">
                <th width="168" align="left">宝贝</th>
                <th width="188" align="left">描述</th>
                <th width="60" align="center">数量</th>
                <th width="80" align="right">单价</th>
                <th width="80" align="right">总价</th>
                <th width="64"> </th>
              </tr>
              <tr bgcolor="#41581B">
                <td><img src="../assets/views/product/01.jpg" alt="flower image 1" /></td>
                <td>鲜花</td>
                <td align="center"><input name="quantity1" type="text" id="quantity1" value="1" size="6" maxlength="2" /> </td>
                <td align="right">240</td>
                <td align="right">240</td>
                <td align="center"> <a href="#"><img src="../assets/views/remove.png" alt="remove" /><br />移除</a> </td>
              </tr>
              <tr bgcolor="#41581B">
                <td><img src="../assets/views/product/02.jpg" alt="flower image 2" /> </td>
                <td>鲜花)</td>
                <td align="center"><input name="quantity2" type="text" id="quantity2" value="2" size="6" maxlength="2" />  </td>
                <td align="right">160</td>
                <td align="right">320</td>
                <td align="center"> <a href="#"><img src="../assets/views/remove.png" alt="remove" /><br />移除</a>  </td>
              </tr>
              <tr bgcolor="#41581B">
                <td colspan="3">如果您有加购宝贝有疑问，请点击此处 <router-link to="/shoppingCart"><strong>刷新</strong></router-link>&nbsp;&nbsp;</td>
                <td align="right"><h4>总价:</h4></td>
                <td align="right"><h4>560</h4></td>
                <td> </td>
              </tr>
            </table>
            <div class="cleaner h20"></div>
            <div class="right"><router-link to="/order">订单中心</router-link></div>
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
        name: "shoppingCart"
    }
</script>

<style scoped>
  @import "../css/templatemo_style.css";
  @import "../css/ddsmoothmenu.css";
</style>
