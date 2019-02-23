<template>
   <div id="viewAllCustomer">
     <el-row>
       <!--搜索栏-->
       <el-col :span="24" class="toolbar">
         <el-form :inline="true" :model="filters" style="float: left;" size="small">
           <el-form-item>
             <el-input v-model="filters.name" placeholder="用户名/电话"></el-input>
           </el-form-item>
           <el-form-item>
             <el-button type="primary">用户名查询</el-button>
           </el-form-item>
           <el-form-item>
             <el-button type="primary">电话查询</el-button>
           </el-form-item>
         </el-form>
       </el-col>
       <!--列表-->
       <div>
         <el-table row-style="line-height:40px;height:40px;" size="mini" :data="cusList.data" border style="width: 100%;margin-bottom: 10px" highlight-current-row>
           <el-table-column type="selection" width="80" ></el-table-column>
           <el-table-column type="index" width="60"></el-table-column>
           <el-table-column v-for="(item,index) in cusList.columns" :key="index" :label="item.label" :prop="item.prop" :width="item.width">
             <!--<template slot-scope="scope">-->
             <!--<span v-if="scope.row.isSet">-->
               <!--<el-input size="mini" placeholder="In..." v-model="cusList.sel[item.prop]">-->
               <!--</el-input>-->
             <!--</span>-->
               <!--<span v-else>{{scope.row[item.prop]}}</span>-->
             <!--</template>-->
           </el-table-column>
           <el-table-column label="操作">
             <template slot-scope="scope">
               <span class="el-tag el-tag--danger el-tag--mini" style="cursor: pointer;">
               删除
             </span>
             </template>
           </el-table-column>
         </el-table>
       </div>

       <!--工具条-->
       <el-col :span="24" class="toolbar">
         <el-pagination  layout="prev, pager, next" style="float:right;" class="page"></el-pagination>
         <el-button type="danger" style="float: left;" size="small">批量删除</el-button>
       </el-col>
     </el-row>
   </div>
</template>

<script>
    export default {
        name: "viewAllCustomer",
      data(){
          return{
            filters:{name:''},
            cusList:{
              sel: null, //选中行
              columns: [
                {
                  prop: "name",
                  label: "顾客名",
                  width: 200,
                },
                {
                  prop: "sex",
                  label: "性别",
                  width: 100,
                },
                {
                  prop: "birthDate",
                  label: "生日",
                  width: 150,
                },
                {
                  prop: "phone",
                  label: "电话",
                  width: 180,
                },
                {
                  prop:'rank',
                  label:'等级',
                  width:150
                }
              ],
              data: [
                {
                  name:'雨霖铃',
                  sex:'女',
                  birthDate:'1981-1-1',
                  phone:'13578963729',
                  rank:'迎春'
                },
                {
                  name:'春风得意',
                  sex:'男',
                  birthDate:'',
                  phone:'',
                  rank:'向日葵'
                },
                {
                  name:'葡萄美酒夜光杯',
                  sex:'女',
                  birthDate:'',
                  phone:'',
                  rank:'海棠'
                },
                {
                  name:'看尽长安花',
                  sex:'',
                  birthDate:'',
                  phone:'',
                  rank:'玫瑰'
                },
                {
                  name:'13采薇',
                  sex:'10',
                  birthDate:'21',
                  phone:'束',
                  rank:'虞美人'
                },
                {
                  name:'破楼兰',
                  sex:'',
                  birthDate:'',
                  phone:'',
                  rank:'茉莉'
                },
                {
                  name:'风景旧曾谙',
                  sex:'男',
                  birthDate:'1997-2-2',
                  phone:'',
                  rank:'桂花'
                },
                {
                  name:'行路难',
                  sex:'',
                  birthDate:'',
                  phone:'',
                  rank:'兰花'
                },
                {
                  name:'一片冰心在玉壶',
                  sex:'女',
                  birthDate:'',
                  phone:'束',
                  rank:'百花仙子'
                }
              ],
            }
          }
      }
    }
</script>

<style scoped>
  .toolbar{
    background: #f2f2f2;
    padding: 10px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
  }
  .page{
    font-family: SimSun;
    color: #a2a2a2;
  }
</style>
