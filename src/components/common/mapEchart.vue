<template>
<div id="mapChart" :style="{width: '780px', height: '600px'}"></div>
</template>
<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js';
export default {
  name: 'mapChart',
  data() {
    return {}
  },
  mounted() {
    this.drawGauge();
  },
  methods: {
    drawGauge() {

      let mapChart = echarts.init(document.getElementById('mapChart')),
        option = {
          title: {
            text: '会员分布'
          },
          series: [{
            type: 'map',
            map: 'china',

            itemStyle: {
              normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
              },
              emphasis: {
                areaColor: '#2a333d'
              }
            },
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: '#fff'
                },
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: '#fff'
                },
              },
            },
          }],
        };
      mapChart.setOption(option);
    }
  }
  }
</script>
