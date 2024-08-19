import { getPublicFishGrounds, getPublicFishPond } from "@/api/index";

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
    groupInfo: {},
    pondInfo: {},
    active: ""
  },

  async getData(id) {
    const { data: groupInfo } = await getPublicFishGrounds({ id });
    this.setData({ groupInfo });
    if (groupInfo.fishes_pond.length == 0) return;
    const pondId = groupInfo.fishes_pond[0].id;
    this.getPondInfo(pondId);
  },
  handleChange(event) {
    const id = event.detail.name;
    this.getPondInfo(id);
  },
  async getPondInfo(id) {
    const { data: pondInfo } = await getPublicFishPond({ id });
    this.setData({
      pondInfo,
      active: id
    });
  },
  goPage(event) {
    const { id, type } = event.currentTarget.dataset;
    if (type == "plan") {
      wx.navigateTo({ url: `/pages/plan/list/list?id=${id}` });
    } else {
      wx.navigateTo({ url: `/pages/put/records/records?id=${id}` });
    }
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
