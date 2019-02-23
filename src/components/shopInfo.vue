<template>
  <div id="shopInfo">
    <el-form v-model="shop.data" label-width="100px" class="shopInfo_form" ref="shop.data">
      <el-form-item label="店名：">
        <el-input v-model="shop.data.name"></el-input>
      </el-form-item>
      <el-form-item label="地址：">
        <el-input v-model="shop.data.address"></el-input>
      </el-form-item>
      <el-form-item label="营业时间：" >
        <el-time-picker is-range arrow-control :editable="false" format="" v-model="shop.data.time" :picker-options="{format:'HH:mm'}"
                        range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围" style="width: 100%">
        </el-time-picker>
      </el-form-item>
      <el-form-item label="宗旨：">
        <el-input type="textarea" v-model="shop.data.aim"></el-input>
      </el-form-item>
      <el-form-item label="售后电话：">
        <el-input v-model="shop.data.servicePhone"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="btn" type="primary">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "shopInfo",
      data(){
          return{
            shop:{
              sel:null,  //是否选中修改
              data:{
                name:'快乐花店',
                address:'江西省南昌市南京东路',
                time:'',
                aim:'桃之夭夭，灼灼其华，花儿来点缀生活',
                servicePhone:'18012345678'
              }
            }
          }
      }
    }
</script>

<style scoped>
.shopInfo_form{
  width: 500px;
  margin: 20px auto auto auto;
}
  .shopInfo_form .btn{
    width: 100%;
  }

</style>
