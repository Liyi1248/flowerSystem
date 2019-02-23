import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
//自己配置的信息
import Login from '../components/login'
import Register from '../components/register'

import  FlowerList from '../components/FlowerList'
import  ShopInfo from '../components/shopInfo'
import  AdminInfo from '../components/adminInfo'
import  ChangePwd from '../components/changePwd'
import ViewAllCustomer from '../components/viewAllCustomer'
import ChangeAccountCustomer from '../components/changeAccountCustomer'
import  Sale from '../components/sale'
import OrderList from '../components/orderList'
import OrderAwaitAdmin from '../components/orderAwaitAdmin'  //待发货
import OrderSentAdmin from '../components/orderSentAdmin'   //已发货
import OrderHisAdmin from '../components/orderHisAdmin'     //历史订单

//views文件下
import  Home from '../views/home' //鲜花
import  About from '../views/about'  //店铺首页
import  Order from '../views/order'  //顾客订单中心
import  OrderSent from '../views/orderSent'  //顾客订单-已发货
import  OrderAwait from '../views/orderAwait' //顾客订单-待发货
import  OrderHistory from '../views/orderHistory' //顾客订单中心-历史订单
import  ShoppingCart from '../views/shoppingCart'  //购物车
import  PersonInfo from '../views/PersonInfo'  //个人中心
import  CompleteCusInfo from '../views/completeCusInfo'  //个人中心-完善个人信息
import  CusChangePwd from  '../views/cusChangePwd'  //个人中心-修改密码
import  Address from  '../views/address'  //个人中心-收货人地址


Vue.use(Router)

export default new Router({
  routes: [


    //views文件下，顾客
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    //订单中心
    {
      path:'/order',
      name:'Order',
      component:Order,
      children:[
        {path:'/order/orderSent',name:'OrderSent',component:OrderSent},
        {path:'/order/orderAwait',name:'OrderAwait',component:OrderAwait},
        {path:'/order/orderHistory',name:'OrderHistory',component:OrderHistory}]
    },
    {
      path:'/shoppingCart',
      name:'ShoppingCart',
      component:ShoppingCart
    },
    {  //个人中心
      path:'/personInfo',
      name:'PersonInfo',
      menuShow:true,
      component:PersonInfo,
      children: [
        {path: '/personInfo/completeCusInfo', component: CompleteCusInfo, name: 'CompleteCusInfo', menuShow: true},  //此项设置为默认页面
        {path: '/personInfo/changePwd', component: CusChangePwd, name: 'CusChangePwd', menuShow: true},
        {path: '/personInfo/address', component: Address, name: 'Address', menuShow: true}
      ]
    },
    //登录
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    //后台
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { //店铺上新
      path:'/',
      name:'店铺上新',
      menuShow:true,
      component:HelloWorld,
      children: [
        {path: '/admin/flowerList', component: FlowerList, name: '鲜花列表', menuShow: true},
        {path: '/admin/shopInfo', component: ShopInfo, name: '编辑店铺信息', menuShow: true}
      ]
    },
    {  //修改个人信息
      path:'/',
      name:'个人信息',
      component:HelloWorld,
      menuShow:true,
      children:[
        {path:'/admin/adminInfo',component:AdminInfo,name:'基础信息',menuShow:true},
        {path:'/admin/changePwd',component:ChangePwd,name:'修改密码',menuShow:true}
      ]
    },
    {
      path:'/',
      name:'顾客信息',
      component:HelloWorld,
      menuShow:true,
      children: [
        {path: '/admin/viewAllCustomer', component: ViewAllCustomer, name: '浏览全部顾客', menuShow: true},
        {path: '/admin/changeAccountCustomer', component: ChangeAccountCustomer, name: '当月客户变化情况', menuShow: true}
      ]
    },
    {
      path:'/',
      name:'销售分析',
      component:HelloWorld,
      isLeaf:true,
      menuShow:true,
      children:[
        {path:'/admin/sale',component:Sale,name:'Sale',menuShow:true}
      ]
    },
    {
      path:'/',
      name:'订单管理',
      component:HelloWorld,
      isLeaf:true,
      menuShow:true,
      children:[
        {path:'/admin/orderList',component:OrderList,name:'OrderList',menuShow:true},
        {path:'/admin/orderAwaitAdmin',component:OrderAwaitAdmin,name:'OrderAwaitAdmin',menuShow:true},
        {path:'/admin/orderSentAdmin',component:OrderSentAdmin,name:'OrderSentAdmin',menuShow:true},
        {path:'/admin/orderHisAdmin',component:OrderHisAdmin,name:'OrderHisAdmin',menuShow:true}
      ]
    },

  ]
})


