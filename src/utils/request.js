// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1. 剥离无效数据  2. 处理token失效
// 4. 导出一个函数，调用当前的axsio实例发请求，返回值promise

import axios from 'axios'
import store from '@/store';
import router from '@/router'
// 导出基准地址，原因其他地方也有可能用到基准路径，eg: 图片
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'

const API = axios.create({
  baseURL: baseURL,
  timeout: 5000
});

// 拦截业务逻辑，所有接口 都要添加token
API.interceptors.request.use(
  function (config) {
    const { profile } = store.state.user
    if (profile.token) {
      config.headers.Authorization = `Bearer${profile.token}`
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// 响应业务逻辑
API.interceptors.response.use(
  function (response) {
    // 调用接口的时候直接就拿到了实际数据
    return response.data;
  },
  function (error) {
    // Do something with response error
    // 401 状态码 error.response是为了排除投后台接口没有响应
    if (error.response && error.response.status === 401) {
      // 1、清空本地的无效用户信息
      store.commit('user/setUser', {})
      // 2、跳转到登陆页面
      // 3、登陆完之后，还要跳到原来的页面（购物车页面因为没有登陆-->跳到登陆页-->登陆 完成再跳回来）  

      // 当前路由地址获取:

      // 在组件里面：$route.path   弊端： `/user?a=10`  $route.path只能拿到'/user'
      // 所以有了 $route.full.fullpath 可以拿到 '/user?a=10'

      // 在js模块中: router.currentRoute.fullPath 就是当前路由地址----vue2中
      // 在vue3中router.currentRoute已经是一个ref声明的响应是数据，所以要 outer.currentRoute.value.fullPath

      // 有一个隐患如果地址是这样的'/user?a=10&b=12'  &有特殊字符，需要转码要是不转码可能就只能拿到'/user?a=10'
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
      
      router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(error);
  }
);
/**
 * 返回一个请求
 * @param {String} url
 * @param {String} method
 * @param {Object} submitData
 */
export default (url, method, submitData) => {
  return API({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
