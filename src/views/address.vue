<template>
    <!--顾客的收货人地址-->
  <div id="address" class="address">
    <el-row>
      <!--显示收获地址相关信息，因为有地址个数限制，所以取消头部操作栏，直接新增-->
      <div>
        <el-table
          row-style="line-height:30px;height:30px;" size="mini" :data="cusAddress.data" border style="width: 100%" highlight-current-row class="address_table">
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column type="index" width="40" ></el-table-column>
          <el-table-column v-for="(item,index) in cusAddress.columns" :key="index" :label="item.label" :prop="item.prop" :width="item.width" >
            <template slot-scope="scope">
             <span v-if="scope.row.isSet">
               <el-input size="mini" placeholder="In..." v-model="cusAddress.sel[item.prop]"></el-input>
             </span>
              <span v-else>{{scope.row[item.prop]}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="">
            <template slot-scope="scope">
             <span class="el-tag el-tag--success el-tag--mini" style="cursor: pointer;">
               确定
             </span>
              <span class="el-tag el-tag--primary el-tag--mini" style="cursor: pointer;">
               编辑
             </span>
              <span class="el-tag el-tag--danger el-tag--mini" style="cursor: pointer;">
               删除
             </span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!--直接在表格底部显示新增按钮-->
      <el-col :span="24">
      <div class="el-table-add-row" style="width: 99.2%;"><span>+ 添加</span></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "address",
      data(){
          return{
            cusAddress:{
              sel: null, //选中行
              //属性
              columns:[
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
                  prop:'toPhone', //仅支持手机号码
                  width:'120px'
                },
                {
                  label:'寄花人',
                  prop:'fromPer',
                  width:'120px'
                },
              ],
              //数据
              data:[
                {
                  fromPer: '寄花人1',
                  toPer: '收花人1',
                  address: '江西南昌',
                  toPhone: '13177889900'
                },
                {
                  fromPer: '寄花人2',
                  toPer: '收花人2',
                  address: '江西南昌',
                  toPhone: '13177889902'
                },
                {
                  fromPer: '寄花人3',
                  toPer: '收花人3',
                  address: '江西南昌',
                  toPhone: '13177889903'
                }
              ]
            }
          }
      }
    }
</script>

<style scoped>
  .address{
    overflow: auto;
   height:400px ;
  }
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
  .address_table{
    border-radius: 5px 5px 0 0;
  }
</style>
