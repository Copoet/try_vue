<template>
<div class="tables">
  <div class="search">
    <el-input v-model="search" placeholder="请输入搜索内容" clearable style="width: 20%" size="small"></el-input>
    <el-button icon="el-icon-search" type="primary" size="small" @click="getDataList">搜索</el-button>
    <el-button icon="el-icon-plus" type="success" size="small" @click="addDialog = true">新增</el-button>
    <el-button icon="el-icon-delete" type="danger" size="small" @click="deleteData">删除</el-button>
  </div>
  <div class="main-table">
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="tableSelectionChange" border>
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="Id" width="50">
      </el-table-column>
      <el-table-column prop="username" label="用户名">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column prop="phone" label="手机">
      </el-table-column>
      <el-table-column prop="status_name" label="状态" width="60">
      </el-table-column>
      <el-table-column prop="is_delete" label="是否删除" width="80">
      </el-table-column>
      <el-table-column label="添加日期" width="180">
        <template slot-scope="scope">{{ scope.row.add_time }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button
              size="mini"
              @click="tableEdit(scope.$index,scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="tableDelete(scope.$index,scope.row)">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="page-block">
    <el-pagination @current-change="pageChange" :page-size="20" layout="total, prev, pager, next, jumper" :total="totalData">
    </el-pagination>
  </div>
  <div class="add-dialog">
    <el-dialog title="用户资料添加" :visible.sync="addDialog">
      <el-form>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="addForm.name" auto-complete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="addForm.pass" auto-complete="off" placeholder="请输入内容" type="password"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="addForm.phone" auto-complete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="addForm.email" auto-complete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-radio v-model="addForm.status" label="1">启用</el-radio>
          <el-radio v-model="addForm.status" label="2">禁用</el-radio>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false" size="small">取 消</el-button>
        <el-button type="primary" @click="addData()" size="small">确 定</el-button>
      </div>
    </el-dialog>
  </div>
  <div class="edit-dialog">
    <el-dialog title="用户资料编辑" :visible.sync="editDialog">
      <el-form :model="editForm">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="editForm.username" auto-complete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="editForm.pass" auto-complete="off" placeholder="请输入内容" type="password"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="editForm.phone" auto-complete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="editForm.email" auto-complete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-radio-group v-model="editForm.status">
            <el-radio :label="1">启用</el-radio>
            <el-radio :label="2">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false" size="small">取 消</el-button>
        <el-button type="primary" @click="editData()" size="small">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</div>
</template>
<script>
import http from '@/api/http'
export default {
  data() {
    return {
      search: '',
      tableData: [],
      editDialog: false,
      addDialog: false,
      addForm: {
        status: '1',
      },
      editForm: {},
      formLabelWidth: '120px',
      multipleSelection: [],
      totalData: 0,
      page: 1,
    }
  },
  beforeMount() {
    this.getDataList();
  },
  methods: {
    tableSelectionChange(val) {
      this.multipleSelection = val;
    },
    tableEdit(index, row) {
      this.editDialog = true;
      this.editForm = this.tableData[index];
    },
    tableDelete(index, row) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let delData = [row.id];
        http.deleteSystemData(delData).then(res => {
          if (res.code == 2000) {
            this.$notify.success({
              title: 'success',
              message: res.msg,
            })
            this.tableData.splice(index, 1);
          } else {
            this.$notify.error({
              title: 'waring',
              message: res.msg,
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    pageChange(val) {
      this.page = val;
      this.getDataList();
    },
    getDataList() {
      let data = {
        page: this.page,
        keyWords: this.search
      }
      let url = '/userList'
      http.requestApiTool(url, data).then(res => {
        if (res.code == 2000) {
          this.tableData = res.data.list;
          this.totalData = res.data.total;
        }
      })
    },
    addData() {
      let addData = this.addForm;
      let url = '/userAdd';
      http.requestApiTool(url, addData).then(res => {
        if (res.code == 2000) {
          this.$notify.success({
            title: 'success',
            message: res.msg,
          })
          this.addDialog = false;
          this.addFrom = '';
        } else {
          this.$notify.error({
            title: 'waring',
            message: res.msg,
          })
        }
      })
    },
    deleteData() {
      let deleteObj = this.multipleSelection;
      if (deleteObj.length == 0) {
        this.$notify.warning({
          title: 'waring',
          message: '请选择要操作的选项!',
        })
      } else {
        this.$confirm('是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let selectIds = [];
          let url = '/userDle';
          deleteObj.forEach(function(value, key, map) {
            selectIds[key] = value.id;
          });
          http.requestApiTool(url, deleteObj).then(res => {
            if (res.code == 2000) {
              this.$notify.success({
                title: 'success',
                message: res.msg,
              })
              this.addFrom = '';
            } else {
              this.$notify.error({
                title: 'waring',
                message: res.msg,
              })
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    editData() {
      let addData = this.editForm;
      let url = '/userEdit';
      http.requestApiTool(url, addData).then(res => {
        if (res.code == 2000) {
          this.$notify.success({
            title: 'success',
            message: res.msg,
          })
          this.editDialog = false;
        } else {
          this.$notify.error({
            title: 'waring',
            message: res.msg,
          })
        }
      })
    },
  }
}
</script>
<style>
.tables {
  background: #ffffff;
  min-height: 100%;
  border: 1px solid #e2e2e2;
}

.main-table {
  margin: 8px;
}

.tables:hover {
  overflow: hidden;
  box-shadow: 0px 2px 12px 0 #BDC1C8;
}

.search {
  padding-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
}

.page-block {
  height: 40px;
  margin-top: 30px;
  padding-bottom: 20px;
}

.el-pagination {
  display: block;
  float: right;
  padding-right: 20px;
}
</style>
