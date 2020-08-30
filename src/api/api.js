import request from '@/api/request'

export default {
   login(param) {
    return request({
      url: '/login',
      method: 'post',
      data: {
        name:param.name,
        password:param.password
      }
    })
  }
}
