Component({
  data: {
    active: 0,
    tabbar: [
      {
        pagePath: "/pages/home/home",
        iconPath: "/assets/tabbar/home.png",
        selectedIconPath: "/assets/tabbar/home-active.png",
        text: "首页"
      },
      {
        pagePath: "/pages/activity/list/list",
        iconPath: "/assets/tabbar/fish.png",
        selectedIconPath: "/assets/tabbar/fish-active.png",
        text: "活动"
      },
      {
        pagePath: "/pages/mine/mine",
        iconPath: "/assets/tabbar/mine.png",
        selectedIconPath: "/assets/tabbar/mine-active.png",
        text: "我的"
      }
    ]
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
