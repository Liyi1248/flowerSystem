<template>
   <div id="changeAccountCustomer">
     <div style="color: #409EFF;text-align: center; font-size: 20px;">
       顾客变化情况（表1当月新增和流失顾客，表2：按年龄分布顾客，表3性别分布）
     </div>
     <div style="width: 600px;height: 300px;background-color: #a4e7ff;" id="myChart">
     </div>

   </div>
</template>

<script>
    export default {
        name: "changeAccountCustomer",
      mounted(){
        this.drawLine();
      },
      methods:{
        drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
          });
        }
      }
    }
</script>

<style scoped>

</style>
