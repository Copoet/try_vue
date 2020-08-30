<template>
  <el-container>
    <div id="menu">
      <el-menu
        default-active="menu"
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#000000"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <div class="header-box">
          <span class="heder-img" v-show="isShow">
            <img alt="users-images" class="img-circle" src="@/assets/images/users.jpg" />
          </span>
        </div>
        <el-submenu v-for="menu in menuList" :index="menu.id" :key="menu.id">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{menu.title}}</span>
          </template>
          <el-submenu
            v-if="menu.childArr"
            v-for="item in menu.childArr"
            :index="item.id"
            :key="item.id"
          >
            <span slot="title">
              <i class="el-icon-edit"></i>
              {{item.title}}
            </span>
            <el-menu-item
              v-if="item.childArr"
              v-for="items in item.childArr"
              :index="items.id"
              :key="items.id"
            >
              <i class="el-icon-edit"></i>
              {{items.title}}
            </el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </div>
    <el-container>
      <el-header>
        <el-row class="navbar-top">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-col :span="8">
              <div
                class="close-btn"
                v-model="isCollapse"
                @click="show()"
                :class="{'on-choose':this.isCollapse}"
              >
                <i class="icon-reorder"></i>
              </div>
              <div class="navbar-tips">
                <el-breadcrumb-item :to="{ path: '/home/' }">主页</el-breadcrumb-item>
                <el-breadcrumb-item>时间轴</el-breadcrumb-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="navbar-msg">
                <ul>
                  <li>
                    <el-tooltip class="item" effect="dark" content="未读邮件信息3条" placement="top-end">
                      <i class="el-icon-message"></i>
                    </el-tooltip>
                  </li>
                  <li>
                    <el-tooltip class="item" effect="dark" content="通知消息4条" placement="bottom-end">
                      <i class="el-icon-bell"></i>
                    </el-tooltip>
                  </li>
                  <li>
                    <el-tooltip
                      class="item"
                      effect="dark"
                      content="未读服务消息3条"
                      placement="bottom-end"
                    >
                      <i class="el-icon-service"></i>
                    </el-tooltip>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="4">
              <el-dropdown @command="signOut">
                <span class="el-dropdown-link">
                  <img alt="users-images" class="img-circle" src="@/assets/images/users.jpg" />
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu size="small" slot="dropdown">
                  <el-dropdown-item command="logout">SignOut</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-breadcrumb>
        </el-row>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <public-footer></public-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>
import publicFooter from "@/components/footer/footer";
export default {
  data() {
    return {
      isCollapse: false,
      isShow: true,
      menuList: [
        {
          id: "1",
          title: "系统管理",
          childArr: [
            {
              id: "1-1",
              title: "系统管理",
              childArr: [
                {
                  id: "/home/forms",
                  title: "表单组件"
                },
                {
                  id: "/home/table",
                  title: "表格组件"
                },
                {
                  id: "/home/mkedit",
                  title: "MK编辑器"
                },
                {
                  id: "/home/dialogs",
                  title: "对话框"
                }
              ]
            }
          ]
        },
        {
          id: "3",
          title: "内容管理",
          childArr: [
            {
              id: "3-1",
              title: "表单列表"
            },
            {
              id: "3-2",
              title: "文章发布"
            }
          ]
        }
      ]
    };
  },
  components: {
    publicFooter
  },
  methods: {
    handleOpen(key, keyPath) {
      var x = 2;
      console.log(x);
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    show() {
      this.isCollapse = !this.isCollapse;
      this.isShow = !this.isCollapse;
    },
    signOut(command) {
      if (command == "logout") {
        localStorage.removeItem("token");
        var userToken = localStorage.getItem("token");
        if (userToken == null) {
          this.$notify.success({
            title: "success",
            message: "退出成功"
          });
          this.$router.replace("/login");
        }
      } else {
        this.$router.replace("/home");
      }
    }
  }
};
</script>
<style scoped>
.el-container {
  background: #ffffff;
}

.el-aside {
  max-width: 212px;
  height: 100%;
}

.el-main {
  margin-top: 36px;
  border-top: 1px solid #e2e2e2;
  background: #f0f0f0;
}

.el-footer {
  border-top: 1px solid #e2e2e2;
}
/**menu */

#menu {
  height: 2200px;
  background: #000000;
}

.el-menu {
  background: #2e363f;
  border-right: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.el-menu-item {
  height: 65px;
}

.el-switch__core {
  margin-bottom: 10px;
}

.heder-img {
  height: 50px;
  text-align: center;
  padding-bottom: 20px;
  padding-left: 60px;
}

.img-circle {
  border-radius: 50%;
}

.el-header {
  padding: 0;
}

.el-dropdown {
  display: block;
  float: right;
  padding-right: 10px;
}

/**tips**/

.navbar-tips {
  margin-top: 30px;
  line-height: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
}

.navbar-top {
  margin-top: 10px;
  border-bottom: 1px solid #e2e2e2;
}

/***btn**/

.close-btn {
  width: 40px;
  height: 40px;
  display: block;
  float: left;
  padding-top: 25px;
  padding-left: 30px;
}

.header-box {
  padding-top: 20px;
}

.show-btn {
  text-align: center;
}

.on-choose {
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.close-btn .icon-reorder {
  font-size: 26px;
}

.navbar-msg {
  display: block;
  float: right;
  font-size: 22px;
  color: #409eff;
}

.navbar-msg > ul li {
  float: right;
  list-style: none;
  margin-left: 26px;
}
</style>
