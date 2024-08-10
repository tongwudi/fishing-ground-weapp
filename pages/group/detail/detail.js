import { groupDetail, getFishPondList } from "@/api/index";

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
    info: {},
    tabs: [],
    active: 0
  },

  async getData(id) {
    const [info, list] = await Promise.all([
      groupDetail({ id }),
      getFishPondList({ id })
    ]);
    // const info = await groupDetail({ id });
    // const list = await getFishPondList({ id });
    this.setData({
      info,
      tabs: list
    });
  },

  handleChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: "none"
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData(options.id);
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
