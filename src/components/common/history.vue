<template lang="html">
  <div class="box-aside">
    <el-card>
      <el-row>
        <el-col :span="10">
          <img src="@/assets/images/p6.jpg">
        </el-col>
        <el-col :span="14" class="login-name">
           <ul>
             <li>罗罗诺亚·索隆</li>
             <li>新世界剑豪</li>
           </ul>
        </el-col>
      </el-row>
      <div class="login-record">
        <ul>
          <li>
            <strong>登录时间:</strong>
            <span>2018.03.30-13:32:20</span>
          </li>
          <li>
            <strong>登录地址:</strong>
            <span>110.110.110.110</span>
          </li>
          <li>
            <strong>登录地点:</strong>
            <span>鱼人岛</span>
          </li>
        </ul>
      </div>
     </el-card>
  </div>
</template>
<script>
export default {


}
</script>
<style scoped>
.box-aside img {
  height: 100px;
  text-align: center;
  padding-bottom: 10px;
}

.login-record {
  border-top: 2px solid #e2e2e2;
}

.login-name {
  font-size: 14px;
  color: #999;
}

li {
  font-size: 14px;
  color: #999;
  display: block;
  float: left;
  list-style: none;
  width: 100%;
  margin-bottom: 10px;
}

.login-name>ul li {
  width: 100%;
  margin-top: 12px;
  padding-left: 30px;
}

.login-record>ul li>span {
  padding-left: 40px;
}
</style>
