// import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
// import { store } from "@/store/index";
// const app = getApp();

Component({
  // behaviors: [storeBindingsBehavior],
  // storeBindings: {
  //   store,
  //   fields: ["role"]
  // },
  data: {
    active: 0,
    tabbar: [
      {
        pagePath: "/pages/home/home",
        text: "首页",
        iconPath: "/assets/images/home.png",
        selectedIconPath: "/assets/images/home-active.png"
      },
      {
        pagePath: "/pages/mine/mine",
        text: "我的",
        iconPath: "/assets/images/mine.png",
        selectedIconPath: "/assets/images/mine-active.png"
      }
    ]
  },
  // observers: {
  //   role: function (val) {
  //     const { userTabbar, fishTabbar } = app.globalData;
  //     const roles = val.split(",");
  //     const tabbar = roles.includes("fish") ? fishTabbar : userTabbar;
  //     this.setData({ tabbar });
  //   }
  // },
  methods: {
    switchTab(event) {
      const { tabbar } = this.data;
      const index = event.detail;
      this.setData({ active: index });
      wx.switchTab({ url: tabbar[index].pagePath });
    },
    init() {
      const page = getCurrentPages().pop();
      const { tabbar } = this.data;
      this.setData({
        active: tabbar.findIndex(v => v.pagePath === `/${page.route}`)
      });
    }
  }
});
