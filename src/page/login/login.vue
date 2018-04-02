<template>
<div id="login-box">
  <div class="box-group group-top">
    <div class="site-img">
      <h3><img src="@/assets/images/logo.png" alt="Logo" /></h3>
    </div>
  </div>
  <div class="box-group">
    <div class="controls">
      <div class="controls-box">
        <span class="add-on bg-lu">
              <i class="icon-user"></i>
            </span>
        <el-input v-model="username" placeholder="Username"></el-input>
      </div>
    </div>
  </div>
  <div class="box-group">
    <div class="controls">
      <div class="controls-box">
        <span class="add-on bg-lg">
            <i class="icon-lock"></i>
          </span>
        <el-input placeholder="Password" v-model="pass" type="password" @keyup.enter.native="loginRequest"></el-input>
      </div>
    </div>
  </div>
  <div class="box-group group-top">
    <el-button type="success" class="login-btm" @click="loginRequest()">Login</el-button>
  </div>
</div>
</template>
<script>
import api from '@/api/api'
export default {
  data() {
    return {
      username: '',
      pass: ''
    }
  },
  methods: {
    loginRequest() {
      if (this.username == '' || this.pass == '') {
        this.$notify.warning({
          title: 'info',
          message: '用户名密码不能为空',
        });
      } else {
        let data = {
          username: this.username,
          password: this.pass
        }
        api.login(data).then(res => {
          if (res.data.code == 200) {
            if(window.localStorage){
              localStorage.setItem('token',JSON.stringify(res.data.list));
            }else{
              Cookie.write('token',res.data.list)
            }
            this.$router.replace('/home')
          }
        })
      }
    }
  }
}
</script>
<style>
html{
   background: #2E363F;
}
#login-box {
  padding-top: 10%;
  width: 32%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.site-img {
  margin: 10px 0;
  text-align: center;
}

h3 img {
  max-width: 15%;
  text-rendering: optimizeLegibility;
}

.controls {
  text-align: center;
}

.controls-box {
  margin-bottom: 30px;
}

.controls input {
  height: 41px;
  line-height: 30px;
  border-radius: 0px;
  width: 86%;
  display: block;
  float: right;
  position: absolute;
  margin-top: -58px;
  margin-left: 48px;
}

.add-on {
  padding: 9px 9px;
  height: 23px;
  width: 30px;
  color: #fff;
  display: block;
}

.bg-lu {
  background: #28b779;
}

.bg-lg {
  background: #ffb848
}

.group-top {
  margin-bottom: 0;
  background: none;
  border-top: 1px solid #3f4954;
}

.login-btm {
  display: inline-block;
  float: right;
  margin-top: 18px;
}
</style>
