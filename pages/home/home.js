import { getPublicFishBanner, getPublicFishList } from "@/api/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      {
        url:
          "https://img95.699pic.com/xsj/0w/39/0n.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast"
      },
      {
        url:
          "https://img0.baidu.com/it/u=100080021,1406455647&fm=253&fmt=auto&app=120&f=JPEG?w=756&h=500"
      }
    ],
    total: 0,
    list: [],
    isRefreshing: false
  },

  async getBanner() {
    const { data } = await getPublicFishBanner();
    if (data?.length == 0) return;
    const banner = data.map(v => ({ id: v.id, url: v.path }));
    this.setData({ banner });
  },
  async getList() {
    const { data } = await getPublicFishList();
    this.setData({
      list: data.list,
      total: data.total
    });
  },
  async handleRefresherRefresh() {
    await this.getList();
    this.setData({ isRefreshing: false });
  },
  goPage(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({ url: `/pages/group/detail/detail?id=${id}` });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getBanner();
    this.getList();
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
