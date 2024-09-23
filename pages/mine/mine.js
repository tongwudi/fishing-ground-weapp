// pages/mine/mine.js
import { getBaseSystemWxOpenid, postPrivateUserWxSave } from "@/api/index";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    overlayShow: false,
    popupShow: false,
    radio: ""
  },

  handleLogin() {
    const { isLogin } = this.data;
    !isLogin ? this.openPopup() : this.goProfile();
  },
  onChange(event) {
    const value = event.detail;
    if (value == 2) {
      wx.navigateTo({ url: "/pages/login/login" });
    } else if (value == 3) {
      this.getUserInfo();
    } else {
      const that = this;
      // 微信登陆
      wx.login({
        async success({ code }) {
          if (code) {
            const { data } = await getBaseSystemWxOpenid({ code });
            that.setToken(data.token);
            that.setIsNewUser(data.isNewUser);
            data.isNewUser ? that.openPopup() : that.getUserInfo();
          } else {
            wx.showToast({ title: "授权失败，请重新授权", icon: "error" });
          }
        }
      });
    }
    this.closePopup();
  },
  openPopup() {
    this.setData({ popupShow: true });
  },
  closePopup() {
    this.setData({ popupShow: false });
  },
  goProfile() {
    wx.navigateTo({ url: "/pages/profile/profile" });
  },
  getUserInfo() {
    wx.getUserInfo({
      async success(res) {
        console.log("wx.getUserInfo", res);
        const { userInfo } = res;
        const params = {
          avatar: userInfo.avatarUrl,
          nick_name: userInfo.nickName
        };
        const { data } = await postPrivateUserWxSave(params);
        console.log(data);
      }
    });
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
