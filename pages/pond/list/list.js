// pages/pond/list/list.js
import {
  getPrivateFishAdminPondList
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
    list: []
  },

  async getData() {
    const id = this.data.groupId;
    console.log(this.data);
    const res = await getPrivateFishAdminPondList({
      id
    });
    console.log("222",res.data)
    this.setData({
      list: res.data
    });
  },
  goPage(event) {
    const {
      id
    } = event.currentTarget.dataset;
    const {
      groupId
    } = this.data;
    const url = `/pages/pond/detail/detail?groupId=${groupId}`;
    wx.navigateTo({
      url: id ? `${url}&id=${id}` : url
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getData();
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