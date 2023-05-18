import axios, { AxiosInstance } from 'axios';

// 设置默认的 baseURL
axios.defaults.baseURL = 'http://localhost:3000';

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
  (config) => {
    console.log('axios 请求拦截器', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * 响应拦截器
 */
axios.interceptors.response.use(
  (response) => {
    console.log('axios 响应拦截器', response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * 创建axios实例
 */
const apiHttpClient: AxiosInstance = axios.create();

export { axios, apiHttpClient };
