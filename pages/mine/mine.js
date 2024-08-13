// pages/mine/mine.js
import { mineBehavior } from "@/store/behaviors";

Page({
  behaviors: [mineBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    overlayShow: false
  },

  goPage() {
    const { isLogin } = this.data;
    if (isLogin) {
      // wx.navigateTo({ url: "/pages/group/profile/profile" });
      return;
    }
    wx.navigateTo({ url: "/pages/login/login" });
  },
  handleClick(event) {
    const { key } = event.currentTarget.dataset;
    switch (key) {
      case "authentication":
        this.openModal();
        break;
      case "logout":
        this.logout();
        break;
    }
  },
  openModal() {
    this.setData({ overlayShow: true });
  },
  closeModal() {
    this.setData({ overlayShow: false });
  },
  async logout() {
    const res = await wx.showModal({ content: "确定要退出登录吗？" });
    res.confirm && this.resetStore();
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
