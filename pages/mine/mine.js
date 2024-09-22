// pages/mine/mine.js
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    overlayShow: false,
    popupShow: false
  },

  loginClick() {
    const { isLogin } = this.data;
    if (isLogin) {
      return;
    }
    wx.navigateTo({ url: "/pages/login/login" });
  },
  handleCellClick(event) {
    const { key } = event.currentTarget.dataset;
    switch (key) {
      case "authentication":
        this.openOverlay();
        break;
      case "logout":
        this.logout();
        break;
    }
  },
  openOverlay() {
    this.setData({ overlayShow: true });
  },
  closeOverlay() {
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
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
});
