// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1. 剥离无效数据  2. 处理token失效
// 4. 导出一个函数，调用当前的axsio实例发请求，返回值promise

import axios from 'axios'
import store from '@/store';
// 导出基准地址，原因其他地方也有可能用到基准路径，eg: 图片
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'

const API = axios.create({
  baseURL: baseURL,
  timeout: 5000
});

// 拦截业务逻辑
API.interceptors.request.use(
  function (config) {
    const { profile } = store.state.user
    if(profile.token) {
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
    return response.data;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);