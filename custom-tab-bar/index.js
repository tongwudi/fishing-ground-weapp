import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "@/store/index";

Component({
  behaviors: [storeBindingsBehavior],
  data: {
    active: 0,
    userTabbar: [
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
    ],
    fishTabbar: [
      {
        pagePath: "/pages/home/home",
        // pagePath: "/pages/group/my/my",
        text: "我的钓场",
        iconPath: "../assets/images/home.png",
        selectedIconPath: "../assets/images/home-active.png"
      },
      {
        pagePath: "/pages/mine/mine",
        text: "钓场管理",
        iconPath: "../assets/images/mine.png",
        selectedIconPath: "../assets/images/mine-active.png"
      },
      {
        pagePath: "/pages/put/add/add",
        text: "放鱼",
        iconPath: "../assets/images/fish.png",
        selectedIconPath: "../assets/images/fish-active.png",
        isCenter: true
      }
    ],
    tabbar: []
  },
  storeBindings: {
    store,
    fields: ["role"]
  },
  observers: {
    role: function (val) {
      const { userTabbar, fishTabbar } = this.data;
      const roles = val.split(",");
      const tabbar = roles.includes("fish") ? fishTabbar : userTabbar;
      this.setData({ tabbar });
    }
  },

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
