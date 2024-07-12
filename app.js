// app.js
import { login } from "@/api/index";

App({
  onLaunch() {
    wx.login({
      async success(res) {
        console.log("wx.login：", res);
        if (res.code) {
          const data = await login({ code: res.code });
          // wx.setStorageSync("openid", data.token);
          // wx.setStorageSync("sessionKey", data.session_key);
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      }
    });
  },
  globalData: {
    userInfo: null
  }
});
