import { env } from "./env";

class Request {
  defaults = {
    baseURL: "", // 默认请求路径
    method: "GET", // 默认请求方法
    timeout: 60000, // 默认超时时间是 60000，一分钟
    header: { "Content-type": "application/json" } // 默认数据交互格式
  };
  // 定义拦截器对象，包含请求拦截器和响应拦截器方法，方便在请求或响应之前进行处理。
  interceptors = {
    // 请求拦截器
    request: config => config,
    // 响应拦截器
    response: response => response
  };

  constructor(params = {}) {
    this.defaultOptions = {
      ...this.defaults,
      ...params
    };
  }

  _request(options) {
    // 拼接完整的请求地址
    const url = this.defaultOptions.baseURL + options.url;

    // 在发送请求之前调用请求拦截器
    options = this.interceptors.request({ ...options, url });

    // 使用 Promise 封装异步请求
    return new Promise((resolve, reject) => {
      wx.request({
        ...options,

        // 接口调用成功的回调函数
        success: res => {
          const mergeRes = { ...res, config: options };
          resolve(this.interceptors.response(mergeRes));
        },

        // 接口调用失败的回调函数
        fail: err => {
          const mergeErr = { ...err, config: options };
          reject(this.interceptors.response(mergeErr));
        }
      });
    });
  }

  // 封装 GET 实例方法
  get(url, data = {}, config = {}) {
    return this._request(Object.assign({ url, data, method: "GET" }, config));
  }

  // 封装 POST 实例方法
  post(url, data = {}, config = {}) {
    return this._request(Object.assign({ url, data, method: "POST" }, config));
  }

  // 封装 PUT 实例方法
  put(url, data = {}, config = {}) {
    return this._request(Object.assign({ url, data, method: "PUT" }, config));
  }

  // 封装 DELETE 实例方法
  delete(url, data = {}, config = {}) {
    return this._request(
      Object.assign({ url, data, method: "DELETE" }, config)
    );
  }
}

// 对 Request 进行实例化
const instance = new Request({
  baseURL: env.baseURL,
  timeout: 10000
});

// 设置请求拦截器
instance.interceptors.request = config => {
  // 从本地获取 token
  const token = wx.getStorageSync("token");
  token && (config.header["token"] = token);

  console.log("执行请求拦截器", config);
  return config;
};

// 设置响应拦截器
instance.interceptors.response = response => {
  console.log("执行响应拦截器", response);
  return response.data;
};

// 将 WxRequest 的实例通过模块化的方式暴露出去
export default instance;
