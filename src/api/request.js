import axios from 'axios'
import {
  Message,
  Notification
} from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Accept': 'application/json',
  } 
})

service.interceptors.request.use(function(config) {
    //在请求发出之前进行一些操作
    return config;
  },
  function(err) {
    //Do something with request error
    // return Promise.reject(error);
  });
//添加一个响应拦截器
service.interceptors.response.use(
  res => { //在这里对返回的数据进行处理
    if (res.data.code == 200) {
      Notification.success({
        title: 'success',
        message: res.data.msg,
      })
    } else {
      Notification.error({
        title: 'error',
        message: res.data.msg,
      })
    }
    return res;
  },
  function(err) {
    //Do something with response error
    return Promise.reject(error);
  })



export default service
