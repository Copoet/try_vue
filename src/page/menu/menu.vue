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
      <el-table-column prop="name" label="菜单名称">
      </el-table-column>
      <el-table-column prop="url" label="url链接">
      </el-table-column>
      <el-table-column prop="parent_title" label="所属菜单">
      </el-table-column>
      <el-table-column prop="status_name" label="状态" width="60">
      </el-table-column>
      <el-table-column label="添加日期" width="180">
        <template slot-scope="scope">{{ scope.row.addtime }}</template>
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
    <el-dialog title="参数添加" :visible.sync="addDialog">
      <el-form>
        <el-form-item label="菜单名称" :label-width="formLabelWidth">
          <el-input v-model="addForm.name" auto-complete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="url地址" :label-width="formLabelWidth">
          <el-input v-model="addForm.url" auto-complete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="图标" :label-width="formLabelWidth">
          <el-input v-model="addForm.icon" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-radio v-model="addForm.status" label="1">启用</el-radio>
          <el-radio v-model="addForm.status" label="2">禁用</el-radio>
        </el-form-item>
        <el-form-item label="所属菜单" :label-width="formLabelWidth">
          <div class="tree">
            <el-tree show-checkbox check-strictly :data="menuTree" node-key="id" ref="addtree" accordion>
            </el-tree>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false" size="small">取 消</el-button>
        <el-button type="primary" @click="addData()" size="small">确 定</el-button>
      </div>
    </el-dialog>
  </div>
  <div class="edit-dialog">
    <el-dialog title="菜单编辑" :visible.sync="editDialog">
      <el-form :model="editForm">
        <el-form-item label="菜单名称" :label-width="formLabelWidth">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="url" :label-width="formLabelWidth">
          <el-input v-model="editForm.url" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="图标" :label-width="formLabelWidth">
          <el-input v-model="editForm.icon" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-radio-group v-model="editForm.status">
            <el-radio :label="1">启用</el-radio>
            <el-radio :label="2">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="所属菜单" :label-width="formLabelWidth">
          <div class="tree">
            <el-tree show-checkbox check-strictly :data="menuTree" node-key="id" ref="tree" :default-expanded-keys="[this.editForm.parent_id]" accordion>
            </el-tree>
          </div>
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
        parent_id: '',
      },
      editForm: {},
      formLabelWidth: '120px',
      multipleSelection: [],
      totalData: 0,
      page: 1,
      menuList: '',
      menuTree: [],
      checkMenu: '',
    }
  },
  beforeMount() {
    this.getDataList();
    this.getMenuTree();
  },
  methods: {
    tableSelectionChange(val) {
      this.multipleSelection = val;
    },
    tableEdit(index, row) {
      this.editDialog = true;
      this.editForm = this.tableData[index];
      this.chooseMenu();
    },
    tableDelete(index, row) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let delData = [row.id];
        http.deleteSystemData(delData).then(res => {
          if (res.code == 20000) {
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
      http.getMenuList(data).then(res => {
        if (res.code == 20000) {
          this.tableData = res.data.list;
          this.totalData = res.data.total;
        }
      })
    },
    addData() {
      this.addForm.parent_id = this.$refs.addtree.getCheckedKeys()[0];
      let addData = this.addForm
      http.addMenu(addData).then(res => {
        if (res.code == 20000) {
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
          deleteObj.forEach(function(value, key, map) {
            selectIds[key] = value.id;
          });
          http.deleteSystemData(deleteObj).then(res => {
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
      http.editMenu(addData).then(res => {
        if (res.code == 20000) {
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
    getMenuTree() {
      let data = {};
      http.getMenuTree(data).then(res => {
        if (res.code == 20000) {
          this.menuTree = res.data;

        }
      })
    },
    chooseMenu() {
      let data = {};
      http.getSortTree(data).then(res => {
        if (res.code == 20000) {
          this.menuTree = res.data;
          this.$refs.tree.setCheckedKeys([this.editForm.parent_id]);
        }
      })
    },
  }
}
</script>
<style scoped>
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

.tree {
  padding-top: 18px;
}
</style>
