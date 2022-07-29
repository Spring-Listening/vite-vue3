/*
 * @Descripttion:
 * @version:
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-03-29 16:59:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-04 11:13:47
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 创建axios实例
// 创建请求时可以用的配置选项

const instance = axios.create({
  withCredentials: true,
  timeout: 1000,
  baseURL: ''
})
// axios的全局配置
instance.defaults.headers.post = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
instance.defaults.headers.common = {
  'Auth-Type': 'company-web',
  'X-Requested-With': 'XMLHttpRequest',
  token: 'sdfjlsdfjlsdjflsjflsfjlskd'
}

// 添加请求拦截器(post只能接受字符串类型数据)
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

const errorHandle = (status: number, other: any) => {
  switch (status) {
    case 400:
      ElMessage.error('信息校验失败')
      break
    case 401:
      ElMessage.error('认证失败')
      break
    case 403:
      ElMessage.error('token校验失败')
      break
    case 404:
      ElMessage.error('请求的资源不存在')
      break
    default:
      ElMessage.error(other)
      break
  }
}

// 添加响应拦截器
instance.interceptors.response.use(
  // 响应包含以下信息data,status,statusText,headers,config
  (res) => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  (err) => {
    ElMessage.error(err)
    const { response } = err
    if (response) {
      errorHandle(response.status, response.data)
      return Promise.reject(response)
    }
    ElMessage.error('请求失败')
    return true
  }
)

export default instance
