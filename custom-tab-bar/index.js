import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "@/store/index";
const app = getApp();

Component({
  behaviors: [storeBindingsBehavior],
  data: {
    active: 0,
    tabbar: []
  },
  storeBindings: {
    store,
    fields: ["role"]
  },
  observers: {
    role: function (val) {
      const { userTabbar, fishTabbar } = app.globalData;
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
