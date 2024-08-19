// pages/group/list/list.js
import { getPrivateFishAdminList } from "@/api/index";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  async getData() {
    const { data: list } = await getPrivateFishAdminList();
    this.setData({ list });
  },
  goPage() {
    wx.navigateTo({ url: "/pages/group/profile/profile" });
  },
  handleChange(event) {
    const { id, name } = event.currentTarget.dataset;
    const { groupId } = this.data;
    if (id === groupId) return;
    this.setGroupId(id);
    this.setAnglingSiteName(name);
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
