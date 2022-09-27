// 该文件用于模拟虚拟资源
// 引入mockjs
import Mock from 'mockjs'
// 引入JSON文件,不需要对外暴露
// import demo1 from './demo1.json'

// mock数据 第一个个参数是请求的地址，第二个参数是你请求数据
//登录
Mock.mock('/mock/login', {
    code: 200,
    data:"登录成功！"
})

Mock.mock('/mock/demo1', {
  code: 200,
  data: 'jj'
})