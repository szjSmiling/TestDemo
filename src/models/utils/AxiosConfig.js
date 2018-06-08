import axios from 'axios';

export const AxiosConfig = {
  init(){// 添加请求拦截器(POST传参序列化)
    axios.interceptors.response.use(
      function(response) {////在发送请求之前做某件事
        return response.data;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
  }
}