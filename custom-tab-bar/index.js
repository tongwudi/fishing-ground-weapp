const app = getApp();

Component({
  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#646566",
    selectedColor: "#1989fa",
    tabbar: []
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
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const { path, idx } = data;
      wx.switchTab({ url: path });
      this.setData({ selected: idx });
    },
    init() {
      const page = getCurrentPages().pop();
      const { tabbar } = this.data;
      this.setData({
        selected: tabbar.findIndex(v => v.pagePath === `/${page.route}`)
      });
    }
  }
});
