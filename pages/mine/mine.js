// pages/mine/mine.js
import {
  getBaseSystemWxOpenid,
  postPrivateUserWxSave,
  getPrivateUserInfo
} from "@/api/index";
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
    actions: [{ name: "微信登录" }, { name: "账号登录" }],
  },

  // // 获取用户信息弹框
  // const params = {
  //   avatar: userInfo.avatarUrl,
  //   nick_name: userInfo.nickName
  // };
  // await postPrivateUserWxSave(params);
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
    } else {
      const that = this;
      // 微信登陆
      wx.login({
        async success({ code }) {
          if (code) {
            const { data } = await getBaseSystemWxOpenid({ code });
            that.setToken(data.token);
            that.setIsNewUser(data.isNewUser);
            data.isNewUser ? that.openActionSheet() : that.getUserInfo();
          } else {
            wx.showToast({ title: "授权失败，请重新授权", icon: "error" });
          }
        }
      });
    }
    this.closeActionSheet();
  },
  goProfile() {
    wx.navigateTo({ url: "/pages/profile/profile" });
  },
  async getUserInfo() {
    const { data } = await getPrivateUserInfo();
    const userRole = data.roles.map(v => v.key).filter(Boolean);
    this.setRole(userRole.join());
    this.setUserInfo(data);
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
