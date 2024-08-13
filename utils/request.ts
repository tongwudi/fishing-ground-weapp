/*
 * @Author: wangzhongjie
 * @Date: 2023-12-14 14:36:23
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2023-12-14 15:06:48
 * @Description:
 * @Email: UvDream@163.com
 */

import { env } from './env'

function responseInterceptors<T>(response: any) {
  const { statusCode, data, config } = response;

  // 处理请求状态
  if (statusCode != 200) {
    wx.showToast({ title: "网络异常！", icon: "error" });
    return Promise.reject(data.errMsg);
  }

  // 处理服务器返回状态
  switch (data.code) {
    case 0:
      return Promise.resolve(data as T);
    case 200:
      return Promise.resolve(data as T);
    case 50000:
      wx.showModal({
        title: "提示",
        content: "用户未登录，是否去登录？",
        success(res) {
          if (res.confirm) {
            wx.clearStorageSync();
            wx.navigateTo({ url: "/pages/login/login" });
          }
        }
      });
      return Promise.reject()
    case 50001:
      wx.showModal({
        title: "提示",
        content: "登录授权过期，请重新授权",
        success(res) {
          if (res.confirm) {
            wx.clearStorageSync();
            // wx.navigateTo({ url: "/pages/login/login" });
          }
        }
      });
      return Promise.reject()
    default:
      wx.showToast({ title: data.msg, icon: "none" });
      return Promise.reject(data.msg);
  }
}

function requestInterceptors(config: any) {
  const token = wx.getStorageSync("token") || "";
  if (!config.header) {
    config.header = {}
  }
  config.header["x-token"] = token;
  return config;
}

export async function request<T>(
  url: string,
  config: {
    method: string;
    params?: any;
    data?: any;
    [key: string]: any
  }
): Promise<T> {
  const defaultOptions = {
    baseURL: env.baseURL,
    timeout: 60000,
    header: { "Content-type": "application/json" },
    isLoading: true,
  }
  const options = requestInterceptors(config);
  console.log(options);

  return new Promise((resolve, reject) => {
    wx.request({
      url: defaultOptions.baseURL + url,
      ...options,
      data: options.params || options.data || {},
      success: res => {
        const mergeRes = { ...res, config: options };
        resolve(responseInterceptors(mergeRes));
      },
      fail: err => {
        const mergeErr = { ...err, config: options };
        reject(responseInterceptors(mergeErr));
      }
    })
  })
}

