<template>
  <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="浏览记录" name="first">
      <ul>
        <li>浏览记录浏览记录浏览记录浏览记录浏览记录浏览记录</li>
        <li>浏览记录浏览记录浏览记录浏览记录浏览记录浏览记录</li>
        <li>浏览记录浏览记录浏览记录浏览记录浏览记录浏览记录</li>
        <li>浏览记录浏览记录浏览记录浏览记录浏览记录浏览记录</li>
        <li>浏览记录浏览记录浏览记录浏览记录浏览记录浏览记录</li>
        <li>浏览记录浏览记录浏览记录浏览记录浏览记录浏览记录</li>
        <li>浏览记录浏览记录浏览记录浏览记录浏览记录浏览记录</li>
        <li>浏览记录浏览记录浏览记录浏览记录浏览记录浏览记录</li>
        <li>浏览记录浏览记录浏览记录浏览记录浏览记录浏览记录</li>
        <li>浏览记录浏览记录浏览记录浏览记录浏览记录浏览记录</li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
      <ul>
        <li>配置管理</li>
        <li>配置管理</li>
        <li>配置管理</li>
        <li>配置管理</li>
        <li>配置管理</li>
        <li>配置管理</li>
        <li>配置管理</li>
        <li>配置管理</li>
        <li>配置管理</li>
        <li>配置管理</li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
      <ul>
        <li>角色管理</li>
        <li>角色管理</li>
        <li>角色管理</li>
        <li>角色管理</li>
        <li>角色管理</li>
        <li>角色管理</li>
        <li>角色管理</li>
        <li>角色管理</li>
        <li>角色管理</li>
        <li>角色管理角色管理角色管理角色管理角色管理</li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">
      <ul>
        <li>定时任务补偿</li>
        <li>定时任务补偿</li>
        <li>定时任务补偿</li>
        <li>定时任务补偿</li>
        <li>定时任务补偿</li>
        <li>定时任务补偿</li>
        <li>定时任务补偿</li>
        <li>定时任务补偿</li>
        <li>定时任务补偿</li>
        <li>定时任务补偿</li>
      </ul>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style scoped>
ul {
  padding: 0px;
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
</style>
