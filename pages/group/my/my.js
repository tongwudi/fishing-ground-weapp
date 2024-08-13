import {
  getPublicFishGrounds
} from "@/api/index";
import {
  groupIdBehavior
} from "@/store/behaviors";

Page({
  behaviors: [groupIdBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    banner: [{
      url: "https://img95.699pic.com/xsj/0w/39/0n.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast"
    }],
    groupInfo: {},
    tabs: {},
    active: 0
  },
  async getData() {
    const id = this.data.groupId;
    const groupInfo = await getPublicFishGrounds({
      id
    });
    this.setData({
      groupInfo: groupInfo.data
    });
  },
  handleChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: "none"
    });
  },
  goPage() {
    wx.navigateTo({
      url: "/pages/put/records/records"
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData();
  },

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