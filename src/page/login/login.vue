<template>
  <div id="login-body">
    <div id="login-box">
      <!-- <div class="box-group group-top">
      <div class="site-img">
        <h3><img src="@/assets/images/logo.png" alt="Logo" /></h3>
      </div>
      </div>-->
      <div class="box-group">
        <div class="controls">
          <div class="controls-box">
            <span class="add-on bg-lu">
              <i class="icon-user"></i>
            </span>
            <el-input v-model="username" placeholder="请输入用户名"></el-input>
          </div>
        </div>
        <div class="controls">
          <div class="controls-box">
            <span class="add-on bg-lg">
              <i class="icon-lock"></i>
            </span>
            <el-input
              placeholder="请输入密码"
              v-model="pass"
              type="password"
              @keyup.enter.native="loginRequest"
            ></el-input>
          </div>
        </div>
      </div>
      <!-- <div class="box-group">
        
      </div> -->
      <div class="box-group group-top">
        <el-button type="success" class="login-btm" @click="loginRequest()">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/api";
export default {
  data() {
    return {
      username: "",
      pass: ""
    };
  },
  methods: {
    loginRequest() {
      if (this.username == "" || this.pass == "") {
        this.$notify.warning({
          title: "info",
          message: "用户名密码不能为空"
        });
      } else {
        let data = {
          username: this.username,
          password: this.pass
        };
        api.login(data).then(res => {
          if (res.data.code == 200) {
            if (window.localStorage) {
              localStorage.setItem("token", JSON.stringify(res.data.list));
            } else {
              Cookie.write("token", res.data.list);
            }
            this.$router.replace("/home");
          }
        });
      }
    }
  }
};
</script>
<style>
html {
  /* background: #2E363F; */
  background-image: url("../../assets/images/05.jpg");
  background-size: cover;
}
#login-body {
  /* background: #3f4954; */
  height: 100%;
}
#login-box {
  padding-top: 20%;
  width: 30%;
  margin-left: 60%;
  /* margin-right: 10%; */
  /* position: relative; */
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
  line-height: 30px;
  border-radius: 0px;
  width: 80%;
  display: block;
  float: right;
  position: absolute;
  margin-top: -59px;
  margin-left: 48px;
  height: 42px;
}

.add-on {
  padding: 10px;
  height: 22px;
  width: 30px;
  color: #fff;
  display: block;
}

.bg-lu {
  background: #28b779;
}

.bg-lg {
  background: #ffb848;
}

.group-top {
  margin-bottom: 0;
  background: none;
}

.login-btm {
  display: inline-block;
  float: right;
  margin-top: 18px;
}
/* .el-input__inner{
  border: 0px;
} */
</style>
