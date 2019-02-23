<template>
    <div id="sale">
      <div style="width: 100%;height: 350px;">
        <!--饼状图显示昨天的各种花的销售额和销售数量-->
        <div id="sale_yesterday">
          <!--<h3>昨日销售额/量</h3>-->
          <div id="sale_yesterday_echart" style="width: 100%;height: 80%;"></div>
        </div>
        <!--当月和上月销售额比较，柱形图-->
        <div id="month">
          <!--<h3>当月和上月销售额</h3>-->
          <div id="month_echart" style="width: 100%;height: 100%;"></div>
        </div>
      </div>

      <!--查询显示某月的销售额，折线图显示-->
      <div id="search_show">
        <div style="width: 35%;"></div>
        <h3>查询显示某月的销售额，默认显示上月销售额</h3>
        <div id="search_show_echart" style="width: 60%;height: 100%;">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "sale",
      mounted(){
          this.drawYEchart();
      },
      methods:{
          drawYEchart(){
            let y_echart=this.$echarts.init(document.getElementById('sale_yesterday_echart'));
            y_echart.setOption({
              title : {
                text: '昨天销售情况',
                // subtext: '纯属虚构',
                x:'center'
              },
              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
              },
              series : [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                  ],
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }]

            });
          }
      }
    }
</script>

<style scoped>
  #sale{}
  #sale_yesterday,#month{
    float: left;
    width: 45%;
    height: 100%;
    border: 1px solid #409eff;
    padding: 10px 20px;
    margin-bottom: 20px;
  }
  #month{
  }
  #search_show{
    width: 100%;
    height: 200px;
    background-color: aquamarine;
    clear: both;
  }
</style>
