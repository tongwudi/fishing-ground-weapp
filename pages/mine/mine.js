// pages/mine/mine.js
import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "@/store/index";

Component({
  behaviors: [storeBindingsBehavior],
  data: {
    defaultUserInfo: {
      avatar: "https://pic.imgdb.cn/item/64c0cc451ddac507ccd49532.png",
      nick_name: "登录 / 注册"
    }
  },
  storeBindings: {
    store,
    fields: ["isLogin", "userInfo"],
    actions: ["setToken", "setRole", "setUserInfo"]
  },

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === "function") {
        this.getTabBar().init();
      }
    }
  },

  methods: {
    goPage() {
      const { isLogin } = this.data;
      if (isLogin) {
        wx.navigateTo({ url: "/pages/group/profile/profile" });
      } else {
        wx.navigateTo({ url: "/pages/login/login" });
      }
    },
    async logout() {
      const res = await wx.showModal({ content: "确定要退出登录吗？" });
      if (res.confirm) {
        this.setToken("");
        this.setRole("");
        this.setUserInfo("");
        wx.clearStorageSync();
      }
    }
  }
});
