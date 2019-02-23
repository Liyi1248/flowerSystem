<template>
    <!--历史订单-->
  <div id="orderHistory">
    <el-row>
      <!--搜索栏-->
      <el-col :span="24" class="toolbar">
        <el-form :inline="true" :model="filters" style="float: right" size="mini">
          <el-form-item>
            <el-input v-model="filters.name" placeholder="收花人"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--列表-->
      <div>
        <el-table row-style="line-height:30px;height:30px;" size="mini" :data="order.data" border style="border-radius: 5px 5px 0 0;width: 100%;margin-bottom: 10px" highlight-current-row class="order_table">
          <el-table-column type="selection" width="40" ></el-table-column>
          <el-table-column type="index" ></el-table-column>
          <el-table-column v-for="(item,index) in order.columns.slice(1,6)" :key="index" :label="item.label" :prop="item.prop" :width="item.width"></el-table-column>
          <el-table-column label="操作" width="">
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
        <el-pagination  layout="prev, pager, next" style="float:right;"  class="page"></el-pagination>
        <el-button type="danger" style="float: left;" size="mini">批量删除</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "orderHistory",
      data(){
        return{
          filters:{
            name:''
          },
          order:{
            columns:[
              {
                label:'状态',
                prop:'state',
                width:'80px'
              },
              {
                label:'订单号(放置鼠标显示商品图片，数量)',
                prop:'id',
                width:'180px'
              },
              //以下的信息从顾客的地址中得到，两个表连表查询，
              {
                label:'收花人',
                prop:'toPer',
                width:'120px'
              },
              {
                label:'地址',
                prop:'address',
                width:'230px'
              },
              {
                label:'收花人联系电话',
                prop:'toPhone',
                width:'120px'
              },
              {
                label:'寄花人',
                prop:'fromPer',
                width:'120px'
              },
            ],
            data:[
              {
                id:'1111111111',
                state:'his',
                toPer:'收花人1',
                address:'江西南昌',
                toPhone:'13177889900',
                fromPer:'jiahuren1'
              },
              {
                id:'1111111112',
                state:'his',
                toPer:'收花人2',
                address:'江西南昌',
                toPhone:'13177889900',
                fromPer:'jiahuren1'
              },
              {
                id:'1111111113',
                state:'his',
                toPer:'收花人3',
                address:'江西南昌',
                toPhone:'13177889900',
                fromPer:'jiahuren1'
              },
              {
                id:'1111111113',
                state:'his',
                toPer:'收花人4',
                address:'江西南昌',
                toPhone:'13177889900',
                fromPer:'jiahuren1'
              }
            ]
          }
        }
      }
    }
</script>

<style scoped>
  .toolbar{
    background: #f2f2f2;
    padding: 10px;
    height: 45px;
    margin-bottom: 10px;
  }
</style>
