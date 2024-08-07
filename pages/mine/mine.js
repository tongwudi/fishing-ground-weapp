// pages/mine/mine.js
import { mineBehavior } from "@/store/behaviors";

Page({
  behaviors: [mineBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    defaultUserInfo: {
      avatar: "https://pic.imgdb.cn/item/64c0cc451ddac507ccd49532.png",
      nick_name: "登录 / 注册"
    }
  },

  goPage() {
    const { isLogin } = this.data;
    if (isLogin) {
      wx.navigateTo({ url: "/pages/group/profile/profile" });
    } else {
      wx.navigateTo({ url: "/pages/login/login" });
    }
  },
  async logout() {
    const res = await wx.showModal({ content: "确定要退出登录吗？" });
    if (res.confirm) {
      this.setToken("");
      this.setRole("");
      this.setUserInfo("");
      wx.clearStorageSync();
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === "function") {
      this.getTabBar().init();
    }
  }
});
