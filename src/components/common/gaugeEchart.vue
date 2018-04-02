<template>
    <div id="myChart" :style="{width: '380px', height: '400px'}"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'gaugeEchart',
  data() {
    return {
    }
  },
  mounted(){
    this.drawGauge();
  },
  methods: {
    drawGauge() {
      let myChart = echarts.init(document.getElementById('myChart')),
        option = {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
          },
          toolbox: {
          },
          series: [{
            name: '业务指标',
            type: 'gauge',
            detail: {
              formatter: '{value}%'
            },
            data: [{
              value: 50,
              name: '完成率'
            }]
          }]
        };
        setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myChart.setOption(option, true);
    },2000);
    }
  }
}
</script>
<style lang="css">
</style>
