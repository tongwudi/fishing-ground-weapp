// app.js
import { authorize, login } from "@/api/index";

App({
  onLaunch() {
    wx.login({
      async success(res) {
        console.log("wx.login：", res);
        if (res.code) {
          const authRes = await authorize({ code: res.code });
          const loginRes = await login({
            user_name: "wzj1",
            password: "123456"
          });
          // wx.setStorageSync("openid", authRes.openid);
          // wx.setStorageSync("sessionKey", authRes.session_key);
          wx.setStorageSync("token", loginRes.token);
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
