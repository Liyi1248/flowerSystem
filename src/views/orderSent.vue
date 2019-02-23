<template>
    <!--已发货订单-->
  <div id="orderSent">
    <el-table row-style="line-height:30px;height:30px;" size="mini" :data="order.data" border style="border-radius: 5px 5px 0 0;width: 100%;" highlight-current-row class="order_table">
      <el-table-column type="index" ></el-table-column>
      <el-table-column v-for="(item,index) in order.columns.slice(1,6)" :key="index" :label="item.label" :prop="item.prop" :width="item.width" ></el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        name: "orderSent",
      data(){
        return{
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
                state:'sent',
                toPer:'收花人1',
                address:'江西南昌',
                toPhone:'13177889900',
                fromPer:'jiahuren1'
              },
              {
                id:'1111111112',
                state:'sent',
                toPer:'收花人2',
                address:'江西南昌',
                toPhone:'13177889900',
                fromPer:'jiahuren1'
              },
              {
                id:'1111111113',
                state:'await',
                toPer:'收花人3',
                address:'江西南昌',
                toPhone:'13177889900',
                fromPer:'jiahuren1'
              },
              {
                id:'1111111113',
                state:'await',
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

</style>
