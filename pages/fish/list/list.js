// pages/species/list/list.js
import { getPrivateFishAdminFishList } from "@/api/index";
import { groupIdBehavior } from "@/store/behaviors";

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
    const { data: list } = await getPrivateFishAdminFishList({ id });
    this.setData({ list });
  },
  goPage() {
    const { groupId } = this.data;
    wx.navigateTo({ url: `/pages/fish/add/add?groupId=${groupId}` });
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