// app.js

import { login } from "@/api/index";
App({
  async onLaunch() {
    // // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // wx.setStorageSync('logs', logs)

    // 登录
    const res = await login({ user_name: "wzj1", password: "123456" });
    wx.setStorageSync("token", res.token);
    this.globalData.userInfo = res.user
  },
  globalData: {
    userInfo: null
  }
});
