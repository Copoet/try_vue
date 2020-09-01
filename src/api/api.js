import request from '@/api/request'

export default {
  login(param) {
    return request({
      url: '/login',
      method: 'post',
      data: {
        name: param.name,
        password: param.password
      }
    })
  },
  checkLoginStatus() {
    let userToken = localStorage.getItem('token');
    if (userToken == '') {
      return false;
    } else {
      return true;
    }
  },
  getSortTree() {
    return new Promise(function (resolve, reject) {
      request({
        url: '/page=1&pageSize=10&typeid=33&key=',
        data: {}
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
    //获取系统参数
  getSystemData(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  //系统参数添加
  addSystemData(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/systemAdd',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  //系统参数删除
  deleteSystemData(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/systemDle',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  //系统参数更新
  updateSystemData(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/systemEdit',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  //后台左侧菜单管理
  getMenu(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/sideMenuTree',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  //菜单列表数据
  getMenuList(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  // menu addData
  addMenu(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/menuAdd',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  editMenu(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/menuEdit',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  delMenu(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/menuDle',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  getMenuTree() {
    return new Promise(function (resolve, reject) {
      request({
        url: '/menuTree',
        data: {}
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  //文章管理
  getArticle(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/articleList',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  addArticle(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/articleAdd',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  editArticle(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/articleEdit',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  delArticle(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/articleDle',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },

  //文章分类管理
  getArticleSort(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/articleSortList',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  addArticleSort(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/articleSortAdd',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  editArticleSort(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/articleSortEdit',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
  delArticleSort(param) {
    return new Promise(function (resolve, reject) {
      request({
        url: '/articleSortDle',
        data: param
      }).then(function (res) {
        resolve(res.data)
      }).catch(function (err) {
        reject(err)
      });
    })
  },
}
