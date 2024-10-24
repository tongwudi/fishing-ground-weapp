Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: "xxxxxxx活动",
        price: "168/5小时",
        fish: "鲫鱼",
        lotteryTime: "2024-10-21 12:12:21",
        startTime: "2024-10-21 12:12:21",
        type: "0"
      }
    ]
  },

  goPage(event) {
    const { type } = event.currentTarget.dataset;
    const url =
      type === "1"
        ? "/pages/solitaire/detail/detail"
        : "/pages/solitaire/detail/detail";
    wx.navigateTo({ url });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

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
