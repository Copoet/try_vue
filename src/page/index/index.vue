<template lang="html">
  <div class="home-main">
   <el-row :gutter="10">
      <!-- <el-col :span="8">
        <el-row :gutter="10">
          <el-col :span="24">
          <login-history></login-history>
          </el-col>
          <el-col :span="24" class="tables-main">
            <main-table></main-table>
          </el-col>
        </el-row>
      </el-col> -->
      <el-col :span="24">
          <count-list :startVal="2000"
                      iconType="icon-pushpin"
                      color="#2f96b4"
                      intro-text="访问量">
          </count-list>
          <count-list :startVal="1000"
                      iconType="icon-globe"
                      color="#f89406"
                      intro-text="用户互动">
          </count-list>
          <count-list :startVal="3000"
                      iconType="icon-eye-open"
                      color="#409EFF"
                      intro-text="数据采集">
          </count-list>
          <count-list :startVal="5000"
                      iconType="icon-fire"
                      color="#F56C6C"
                      intro-text="服务调用">
          </count-list>
      </el-col>
   </el-row>
   <el-row :gutter="10" class="chart-main" >
     <el-col :span="12" >
       <div class="box-card">
          <gauge-chart></gauge-chart>
       </div>
     </el-col>
     <el-col :span="12">
       <div class="box-card">
          <pie-chart></pie-chart>
       </div>
     </el-col>
     <el-col :span="24" class="tab-main">
       <div class="box-card">
          <bar-chart></bar-chart>
       </div>
     </el-col>
     <el-col :span="24" class="tab-main">
           <div class="box-card ">
           <tab-main></tab-main>
           </div>
          </el-col>
    </el-row>
     <el-col :span="24">
       <div class="box-card map-box">
          <map-chart></map-chart>
        </div>
     </el-col>
     
  </div>
</template>
<script>
import countList from '@/components/common/countList'
import loginHistory from '@/components/common/history'
import tabMain from '@/components/common/tab'
import mainTable from '@/components/common/tables'
import gaugeChart from '@/components/common/gaugeEchart'
import pieChart from '@/components/common/pieEchart'
import barChart from '@/components/common/barEchart'
import mapChart from '@/components/common/mapEchart'
export default {
  data() {
    return {};
  },
  components: {
    countList,
    loginHistory,
    tabMain,
    mainTable,
    gaugeChart,
    barChart,
    pieChart,
    mapChart,
  },
}
</script>

<style scoped>
.home-main {
  height: 100%;
  background: #f0f0f0;
  padding-top: 6px;
  width: 100%;
}

.tab-main {
  margin-top: 20px;
}

.tables-main {
  margin-top: 16px;
}

.chart-main {
  margin-top: 16px;
}

.box-card {
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0px 2px 12px 0 #e2e2e2;
}
.map-box{
  margin-top: 10px;
}
</style>
