import { getPublicFishBanner, getPublicFishList } from "@/api/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    total: 0,
    list: []
  },

  async getBanner() {
    const { data } = await getPublicFishBanner();
    const banner = data.map(v => v.path);
    this.setData({ banner });
  },
  async getData() {
    const { data } = await getPublicFishList();
    const list = data.list.map(v => {
      const imgPath = "https://pic.imgdb.cn/item/66b9a438d9c307b7e99a980c.jpg";
      v.imgPath = v.files[0]?.path || imgPath;
      return v;
    });
    this.setData({
      list: list,
      total: data.total
    });
  },
  goPage(event) {
    const { id } = event.currentTarget.dataset;
    wx.navigateTo({ url: `/pages/group/display/display?id=${id}` });
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
    this.getData();
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
  async onPullDownRefresh() {
    await this.getData();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
});
