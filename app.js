// app.js
// import { authorize } from "@/api/index";

App({
  async onLaunch() {
    console.log(111);
    // // 微信登陆
    // wx.login({
    //   async success({ code }) {
    //     console.log("wx.login：", res);
    //     if (code) {
    //       const authRes = await authorize({ code });
    //       // wx.setStorageSync("openid", authRes.openid);
    //       // wx.setStorageSync("sessionKey", authRes.session_key);
    //     } else {
    //       wx.showToast({ title: "授权失败，请重新授权", icon: "error" });
    //     }
    //   }
    // });
  },
  globalData: {}
});
