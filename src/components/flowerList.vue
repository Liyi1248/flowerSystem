<template>
  <div id="flowerList">
    <el-row>
      <!--搜索栏-->
      <el-col :span="24" class="toolbar">
        <el-form :inline="true" :model="filters" style="float: left;">
          <el-form-item>
            <el-input v-model="filters.name" placeholder="鲜花名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="getUser()">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="add()">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--列表-->
      <div>
        <el-table
          row-style="line-height:40px;height:40px;" size="mini" :data="master_user.data.slice((currentPage-1)*pageSize,currentPage*pageSize)" border style="width: 100%" highlight-current-row>
          <el-table-column type="selection" width="40" ></el-table-column>
          <el-table-column type="index" ></el-table-column>
          <el-table-column v-for="item in master_user.columns.slice(0,6)" :key="item.id" :label="item.label" :prop="item.prop" :width="item.width">
            <template slot-scope="scope">
             <span v-if="scope.row.isSet">
               <el-input size="mini" placeholder="In..." v-model="master_user.sel[item.prop]">
               </el-input>
             </span>
              <span v-else>{{scope.row[item.prop]}}</span>
            </template>
          </el-table-column>
          <el-table-column  label="特价" width="100" >
            <template slot-scope="scope">
              <el-switch v-model="scope.row.specialPrice" active-color="#13ce66" class="medium">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="">
            <template slot-scope="scope">
             <span class="el-tag el-tag--success el-tag--mini" style="cursor: pointer;" @click.stop="saveRow(scope.row,scope.$index)">
               确定
             </span>
              <span class="el-tag el-tag--primary el-tag--mini" style="cursor: pointer;" @click="editRow(scope.row,scope.$index)">
               编辑
             </span>
              <span class="el-tag el-tag--danger el-tag--mini" style="cursor: pointer;" @click="deleteRow(scope.$index,master_user.data)">
               删除
             </span>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!--工具条-->
      <el-col :span="24" class="toolbar">
        <el-pagination  layout="prev, pager, next" style="float:right;" :total="master_user.data.length" :page-size="pageSize" :page-count="2"
                        @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" class="page"></el-pagination>
        <el-button type="danger" style="float: left;" @click="batchDel">批量删除</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "flowerList",
      data:function() {
        return {
          filters:{
            name:''
          },
          currentPage:1, //初始页
          pageSize:3, //每页显示的数据
          master_user: {
            sel: null, //选中行
            columns: [
              {
                prop:"id",
                label:"编号",
                width:150,
              },
              {
                prop: "name",
                label: "鲜花名",
                width: 120,
              },
              {
                prop: "account",
                label: "数量",
                width: 60,
              },
              {
                prop: "price",
                label: "价格",
                width: 80,
              },
              {
                prop: "unite",
                label: "单位",
                width: 80,
              },
              {
                prop: "explain",
                label: "描述",
                width:200,
              },
              {
                prop:"specialPrice",
                label:"特价",
                width:50
              }
            ],
            data: [
              {
                id:'0001',
                name:'满天星',
                account:'10',
                price:'21',
                unite:'束',
                explain:'浪漫，祝愿，美好',
                specialPrice:false
              },
              {
                id:'0003',
                name:'水仙',
                account:'5',
                price:'27',
                unite:'盆',
                explain:'高洁，祝愿，美好',
                specialPrice:false
              },
              {
                id:'0003',
                name:'月季',
                account:'12',
                price:'30',
                unite:'支',
                explain:'美丽，祝愿，美好',
                specialPrice:true
              },
              {
                id:'0004',
                name:'满天星',
                account:'10',
                price:'21',
                unite:'束',
                explain:'浪漫，祝愿，美好',
                specialPrice:false
              },
              {
                id:'0005',
                name:'水仙',
                account:'5',
                price:'27',
                unite:'盆',
                explain:'高洁，祝愿，美好',
                specialPrice:false
              },
              {
                id:'0006',
                name:'月季',
                account:'12',
                price:'30',
                unite:'支',
                explain:'美丽，祝愿，美好',
                specialPrice:true
              },
              {
                id:'0007',
                name:'满天星',
                account:'10',
                price:'21',
                unite:'束',
                explain:'浪漫，祝愿，美好',
                specialPrice:false
              },
              {
                id:'0008',
                name:'水仙',
                account:'5',
                price:'27',
                unite:'盆',
                explain:'高洁，祝愿，美好',
                specialPrice:false
              },
              {
                id:'0009',
                name:'月季',
                account:'12',
                price:'30',
                unite:'支',
                explain:'美丽，祝愿，美好',
                specialPrice:true
              }
            ],
          },
        }
      },
      methods:{
        getUser:function(){
          let temp=this.master_user.data;
          // this.master_user.data = temp.filter( item => (~item.name.indexOf(val)));
          // let para = {
          //   page: this.page,
          //   name: this.filters.name
          // };
          // getUserListPage(para).then((res) => {
          //   this.flowers.length = res.data.total;
          //   this.master_user = res.data.master_user;
          // });
        },
        add() {
          for (let i of this.master_user.data) {
            if (i.isSet) return this.$message.warning("请先保存当前编辑项");
          }
          let j = {
            name:'',
            account:'0',
            price:'',
            unite:'束',
            explain:'浪漫，祝愿，美好',
            specialPrice:false,
            isSet: true,
          };
          this.master_user.data.push(j);
          this.master_user.sel = JSON.parse(JSON.stringify(j));
        },
        saveRow(row, index) { //保存
          let data = JSON.parse(JSON.stringify(this.master_user.sel));
          for (let k in data) {
            row[k] = data[k] //将sel里面的value赋值给这一行。ps(for....in..)的妙用，细心的同学发现这里我并没有循环对象row
          }
          row.isSet = false;
        },
        editRow(row) { //编辑
          for (let i of this.master_user.data) {
            if (i.isSet) return this.$message.warning("请先保存当前编辑11项");
          }
          this.master_user.sel = row
          row.isSet = true
        },
        deleteRow(index, rows) { //删除
          rows.splice(index, 1)
        },
        //批量删除
        batchDel(){

        },
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
    height: 60px;
    margin-bottom: 10px;
  }
  .page{
    font-family: SimSun;
    color: #a2a2a2;
  }
  th{height: 40px; line-height: 40px;overflow: hidden;}
</style>
