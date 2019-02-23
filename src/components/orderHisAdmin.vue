<template>
  <div id="orderhisAdmin">
    <el-row>
      <!--搜索栏-->
      <el-col :span="24" class="toolbar">
        <el-form :inline="true" :model="filters" style="float: left;" size="small">
          <el-form-item>
            <el-input v-model="filters.name" placeholder="鲜花名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--列表-->
      <div>
        <el-table row-style="line-height:30px;height:30px;" size="mini" :data="order.data.slice((currentPage-1)*pageSize,currentPage*pageSize)" border style="border-radius: 5px 5px 0 0;width: 100%;margin-bottom: 10px" highlight-current-row class="order_table">
          <el-table-column type="index" ></el-table-column>
          <el-table-column v-for="(item,index) in order.columns" :key="index" :label="item.label" :prop="item.prop" :width="item.width"></el-table-column>
        </el-table>

      </div>

      <!--工具条-->
      <el-col :span="24" class="toolbar">
        <el-pagination  layout="prev, pager, next" style="float:right;" :total="order.data.length" :page-size="pageSize" :page-count="2"
                        @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" class="page"></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'orderhisAdmin',
    data(){
      return{
        filters:{
          name:''
        },
        currentPage:1, //初始页
        pageSize:3, //每页显示的数据
        order:{
          columns:[
            {
              label:'状态',
              prop:'state',
              width:'80px'
            },
            {
              label:'订单号',
              prop:'id',
              width:'180px'
            },
            {
              label:'数量',
              prop:'amount',
              width:'60px'
            },
            //以下的信息从顾客的地址中得到，两个表连表查询，
            {
              label:'收花人',
              prop:'toPer',
              width:'120px'
            },
            {
              label:'地址',
              prop:'address'
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
              fromPer:'jiahuren1',
              amount:1
            },
            {
              id:'1111111112',
              state:'待收货',
              toPer:'收花人2',
              address:'江西南昌',
              toPhone:'13177889900',
              fromPer:'jiahuren1',
              amount:1
            },
            {
              id:'1111111113',
              state:'his',
              toPer:'收花人3',
              address:'江西南昌',
              toPhone:'13177889900',
              fromPer:'jiahuren1',
              amount:3
            },
            {
              id:'1111111113',
              state:'his',
              toPer:'收花人4',
              address:'江西南昌',
              toPhone:'13177889900',
              fromPer:'jiahuren1',
              amount:2
            }
          ]
        }
      }
    },
    methods:{
      //分页
      // 初始页currentPage、初始每页数据数pagesize和数据data
      handleSizeChange: function (size) {
        this.pageSize = size;
        //  console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
        //  console.log(this.currentPage)  //点击第几页
      },
    },
    components: {}
  }
</script>

<style scoped>
  .el-table-add-row {
    margin-top: 10px;
    width: 100%;
    height: 34px;
    border: 1px dashed #c1c1cd;
    border-radius: 3px;
    cursor: pointer;
    justify-content: center;
    display: flex;
    line-height: 34px;
  }
  .toolbar{
    background: #f2f2f2;
    padding: 10px;
    height: 50px;
    margin-bottom: 10px;
  }
  .page{
    font-family: SimSun;
    color: #a2a2a2;
  }
  th{height: 40px; line-height: 40px;overflow: hidden;}
</style>


