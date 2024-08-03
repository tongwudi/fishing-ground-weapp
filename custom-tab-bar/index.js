const app = getApp();

Component({
  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    tabbar: [],
  },

  /**
   * 组件生命周期函数-在组件实例进入页面节点树时执行
   */
  attached() {
    this.setData({ tabbar: app.globalData.tabbar });
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(event) {
      const { tabbar } = this.data;
      this.setData({ active: event.detail });
      wx.switchTab({ url: tabbar[event.detail].pagePath });
    },
    init() {
      const page = getCurrentPages().pop();
      const { tabbar } = this.data;
      this.setData({ active: tabbar.findIndex(v => v.pagePath === `/${page.route}`) });
    }
  }
});
