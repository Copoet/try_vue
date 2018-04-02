import request from '@/api/request'

export default {
   login(param) {
    return request({
      url: '/login',
      method: 'post',
      data: {
        name:param.username,
        pass:param.password
      }
    })
  }
}
