//mock的数据
import request from './http'

// 登录接口
export function login() {
    return request({
      url: '/login',
      method: 'post'
    })
}