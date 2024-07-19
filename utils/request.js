import { env } from "./env";

class Request {
  constructor(params = {}) {
    this.defaultOptions = {
      // 默认请求路径
      baseURL: "",
      // 默认超时时间是 60000，一分钟
      timeout: 60000,
      // 默认数据交互格式
      header: { "Content-type": "application/json" },
      isLoading: true,
      ...params
    };
    // 定义拦截器对象，方便在请求前或响应后进行处理。
    this.interceptors = {
      // 请求拦截器
      request: config => config,
      // 响应拦截器
      response: response => response
    };
    // 初始化 queue 数组，用于存储请求队列
    this.queue = [];
  }

  _request(options) {
    // 拼接完整的请求地址
    options.url = this.defaultOptions.baseURL + options.url;

    // 在发送请求之前调用请求拦截器
    options = this.interceptors.request({ ...this.defaultOptions, ...options });

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
    return this._request({ url, data, method: "GET", ...config });
  }

  // 封装 POST 实例方法
  post(url, data = {}, config = {}) {
    return this._request({ url, data, method: "POST", ...config });
  }

  // 封装 PUT 实例方法
  put(url, data = {}, config = {}) {
    return this._request({ url, data, method: "PUT", ...config });
  }

  // 封装 DELETE 实例方法
  delete(url, data = {}, config = {}) {
    return this._request({ url, data, method: "DELETE", ...config });
  }
}

// 对 Request 进行实例化
const instance = new Request({
  baseURL: env.baseURL,
  timeout: 10000
});

// 设置请求拦截器
instance.interceptors.request = config => {
  // console.log("执行请求拦截器", config);

  if (config.isLoading) {
    // 发送请求之前添加 loading
    instance.queue.length === 0 && wx.showLoading();
    // 然后向队列中添加一个请求标识，代表需要发送一次新请求
    instance.queue.push(config.url);
  }

  // 设置 token
  const token = wx.getStorageSync("token");
  token && (config.header["x-token"] = token);
  return config;
};

// 设置响应拦截器
instance.interceptors.response = response => {
  // console.log("执行响应拦截器", response);
  const { statusCode, data, config } = response;

  if (config.isLoading) {
    // 每次请求结束后，从队列中删除一个请求标识
    instance.queue.pop();
    // 所有请求执行完以后隐藏 loading
    instance.queue.length === 0 && wx.hideLoading();
  }

  // 处理返回状态
  if (statusCode != 200) {
    wx.showToast({ title: "网络异常！", icon: "error" });
    return Promise.reject(data);
  }
  switch (data.code) {
    case 0:
      return data.data;
    case 200:
      return data.data;
    case 50001:
      wx.showModal({
        title: "提示",
        content: "登录授权过期，请重新授权",
        success(res) {
          if (res.confirm) {
            console.log("用户点击确定");
            wx.clearStorageSync();
            // wx.navigateTo({ url: "/pages/login/login" });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    default:
      wx.showToast({ title: data.msg, icon: "none" });
      return Promise.reject(response);
  }
};
// 将 WxRequest 的实例通过模块化的方式暴露出去
export default instance;
