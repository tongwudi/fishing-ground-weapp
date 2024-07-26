// pages/details/details.js
import { fishPondList } from "@/api/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      {
        url:
          "https://img95.699pic.com/xsj/0w/39/0n.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast"
      }
    ],
    tabs: [
      { id: 1, title: "大混养", content: "大混养" },
      { id: 2, title: "斤塘", content: "斤塘" },
      { id: 3, title: "新手塘", content: "新手塘" }
    ],
    loading: false,
    active: 1
  },

  async getList(id) {
    const res = await fishPondList({ id });
    console.log(res, 'ress');
    this.setData({
      tabs: res,
      loading: false
    });
    console.log(this.data.tabs);
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: "none"
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getList(options.id);
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
