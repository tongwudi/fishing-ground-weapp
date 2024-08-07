import { fishPondDetail } from "@/api/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    info: {}
  },

  async getData(id) {
    const info = await fishPondDetail({ id });
    this.setData({ info });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData("173e89b178554429a75d948d1a66c44c");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

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
