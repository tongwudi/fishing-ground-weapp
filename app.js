// app.js
import { authorize, login } from "@/api/index";

App({
  async onLaunch() {
    // // 微信登陆
    // wx.login({
    //   async success(res) {
    //     console.log("wx.login：", res);
    //     if (res.code) {
    //       const authRes = await authorize({ code: res.code });
    //       // wx.setStorageSync("openid", authRes.openid);
    //       // wx.setStorageSync("sessionKey", authRes.session_key);
    //     } else {
    //       console.log("登录失败！" + res.errMsg);
    //     }
    //   }
    // });
    // // 账号登陆
    // const loginRes = await login({
    //   user_name: "wzj1",
    //   password: "123456"
    // });
    // wx.setStorageSync("token", loginRes.token);
    // this.globalData.userRole = loginRes.role.filter(v => v.key);
    // this.setData({
    //   userRole: app.globalData.userRole
    // });
  },
  globalData: {
    userInfo: null,
    userRole: null, // 用户角色
    tabbar: []
  }
});
