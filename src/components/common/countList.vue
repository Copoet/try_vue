<template lang="html">
    <el-col :span="6">
      <div class="show-count">
          <div class="show-icon" :style="{background:color}">
            <span><i :class="iconType"></i></span>
          </div>
          <div class="show-text">
            <p :style="{color: color}">{{startVal}}</p>
            <span><strong>{{introText}}</strong></span>
          </div>
      </div>
    </el-col>
</template>

<script>
export default {
  date(){
    return {
      startVal:'',
      introText:'',
    }
  },
  props: {
        color: String,
        icon:String,
        iconType: String,
        introText: String,
        startVal: {
            type: Number,
            default: 1000,
        },
    },
}
</script>
<style scoped>
.show-count {
  height: 100px;
  width: 100%;
  background: #ffffff;
  font-size: 14px;
  color: #999;
  box-shadow: 0px 2px 12px 0 #e2e2e2;
}
.show-icon{
  width: 68px;
  height: 100%;
  display: block;
  float: left;
}
.show-icon span{
  font-size: 44px;
  color: #ffffff;
  display: block;
  float: left;
  padding-top: 18px;
  padding-left: 10px;
}
.show-text{
  position: absolute;
  text-align: center;
  padding-left: 80px;
  padding-top: 10px;
}
.show-text p{
  font-size: 18px;
  font-weight: 800;
}
</style>
