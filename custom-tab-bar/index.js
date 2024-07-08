// components/BasicTabbar/BasicTabbar.js
const computedBehavior = require("miniprogram-computed").behavior;
Component({
  behaviors: [computedBehavior],
  /**
   * 组件的初始数据
   */
  data: {
    role: "user",
    selected: 0,
    color: "#646566",
    selectedColor: "#1989fa",
  },
  computed: {
    tabbar(data) {
      const list = [
        {
          pagePath: "/pages/home/home",
          text: "首页",
          iconPath: "../assets/images/home.png",
          selectedIconPath: "../assets/images/home-active.png",
          role: "user",
        },
        {
          pagePath: "/pages/mine/mine",
          text: "我的",
          iconPath: "../assets/images/mine.png",
          selectedIconPath: "../assets/images/mine-active.png",
          role: "user",
        },
        {
          pagePath: "/pages/mine/mine",
          text: "我的钓场",
          iconPath: "../assets/images/mine.png",
          selectedIconPath: "../assets/images/mine-active.png",
          role: "owner",
        },
        {
          pagePath: "/pages/mine/mine",
          text: "钓场管理",
          iconPath: "../assets/images/mine.png",
          selectedIconPath: "../assets/images/mine-active.png",
          role: "owner",
        },
        {
          pagePath: "/pages/put/put",
          text: "放鱼",
          iconPath: "../assets/images/fish.png",
          selectedIconPath: "../assets/images/fish-active.png",
          role: "user",
          isCenter: true,
        },
      ];
      return list.filter((v) => v.role == data.role);
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      const idx = data.index;
      wx.switchTab({ url });
      this.setData({ selected: idx });
    },
    init() {
      const page = getCurrentPages().pop();
      const { tabbar } = this.data;
      this.setData({
        selected: tabbar.findIndex((v) => v.pagePath === `/${page.route}`),
      });
    },
  },
});
