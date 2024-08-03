import { login } from "@/api/index";
const app = getApp();

Page({
  data: {
    username: "wzj1",
    password: "123456"
  },

  startLogin: async function () {
    if (this.data.password.length < 1 || this.data.username.length < 1) {
      wx.showModal({
        title: "错误信息",
        content: "请输入用户名和密码",
        showCancel: false
      });
      return false;
    }

    const loginRes = await login({
      user_name: this.data.username,
      password: this.data.password
    });
    wx.setStorageSync("token", loginRes.token);
    const list = [
      {
        pagePath: "/pages/home/home",
        text: "首页",
        iconPath: "../assets/images/home.png",
        selectedIconPath: "../assets/images/home-active.png",
        role: "fish"
      },
      {
        pagePath: "/pages/mine/mine",
        text: "我的",
        iconPath: "../assets/images/mine.png",
        selectedIconPath: "../assets/images/mine-active.png",
        role: "fish"
      },
      {
        pagePath: "/pages/mine/mine",
        text: "我的钓场",
        iconPath: "../assets/images/mine.png",
        selectedIconPath: "../assets/images/mine-active.png",
        role: "user"
      },
      {
        pagePath: "/pages/mine/mine",
        text: "钓场管理",
        iconPath: "../assets/images/mine.png",
        selectedIconPath: "../assets/images/mine-active.png",
        role: "user"
      },
      {
        pagePath: "/pages/put/add/add",
        text: "放鱼",
        iconPath: "../assets/images/fish.png",
        selectedIconPath: "../assets/images/fish-active.png",
        role: "fish",
        isCenter: true
      }
    ];
    const userRole = loginRes.role.map(v => v.key).filter(Boolean);
    const tabbar = list.filter(v => userRole.includes(v.role));
    app.globalData.userInfo = loginRes.user;
    app.globalData.userRole = userRole;
    app.globalData.tabbar = tabbar;

    this.getTabBar(tabBar => tabBar.setData({ tabbar, selected: 0 }));
    wx.switchTab({ url: tabbar[0].pagePath });
  },
  bindUsernameInput(e) {
    this.setData({
      username: e.detail.value
    });
  },
  bindPasswordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },

  onLoad(options) {},

  onReady() {},

  onShow() {
    this.setData({
      userInfo: app.globalData.userInfo
    });
  },

  onHide() {},

  onUnload() {}
});
