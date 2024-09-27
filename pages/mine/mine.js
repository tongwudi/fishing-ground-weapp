// pages/mine/mine.js
import { getBaseSystemWxOpenid, getPrivateUserInfo } from "@/api/index";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    defaultAvatar: "https://pic.imgdb.cn/item/64c0cc451ddac507ccd49532.png",
    overlayShow: false,
    actionSheetShow: false,
    actions: [{ name: "微信登录" }, { name: "账号登录" }, { name: "账号注册" }],
    profileModalShow: false
  },

  handleLogin() {
    const { isLogin } = this.data;
    !isLogin ? this.openActionSheet() : this.goProfile();
  },
  openActionSheet() {
    this.setData({ actionSheetShow: true });
  },
  closeActionSheet() {
    this.setData({ actionSheetShow: false });
  },
  selectLoginMethod(event) {
    const { name } = event.detail;
    if (name == "账号登录") {
      wx.navigateTo({ url: "/pages/login/login" });
    } else if (name == "微信登录") {
      const that = this;
      wx.login({
        async success({ code }) {
          if (code) {
            const { data } = await getBaseSystemWxOpenid({ code });
            that.setToken(data.token);
            that.setIsNewUser(data.isNewUser);
            that.getUserInfo();
            data.isNewUser && that.openProfileModal();
          } else {
            wx.showToast({ title: "授权失败，请重新授权", icon: "error" });
          }
        }
      });
    } else if (name == "账号注册") {
      wx.navigateTo({ url: "/pages/register/register" });
    }
    this.closeActionSheet();
  },
  async getUserInfo() {
    const { data } = await getPrivateUserInfo();
    const userRole = data.roles.map(v => v.key).filter(Boolean);
    this.setRole(userRole.join());
    this.setUserInfo(data);
  },
  openProfileModal() {
    this.setData({ profileModalShow: true });
  },
  goProfile() {
    wx.navigateTo({ url: "/pages/profile/profile" });
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.isNewUser && this.openProfileModal();
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
