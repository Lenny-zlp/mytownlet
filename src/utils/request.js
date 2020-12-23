/**
 * 封装 axios 请求模块
 */
import axios from 'axios'
// import jsonBig from 'json-bigint'
import store from '@/store'
// axios.create 方法：复制一个 axios (创建一个单例)
const request = axios.create({
  // baseURL: 'https://api.jiangxinxiaozhen.com/', // 基本路径
  // baseURL: 'http://192.168.0.7:8082/',
  // baseURL: 'http://192.168.0.7:8080/',
  // baseURL: VUE_APP_BASEURL,
  // timeout: 5000// 超时时间
})

// /**
//  * 配置处理后端返回数据中超出 js 安全整数范围问题
//  */
// request.defaults.transformResponse = [function (data) {
//   try {
//     return jsonBig.parse(data)
//   } catch (err) {
//     return {}
//   }
// }]

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    const user = store.state.user
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default request
