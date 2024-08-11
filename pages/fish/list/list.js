// pages/species/list/list.js
import { getMyGroupList, getFishList } from "@/api/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    groupId: "",
    list: []
  },

  async getData() {
    const groundList = await getMyGroupList();
    if (groundList.length == 0) return;
    const groupInfo = groundList[0];
    const { id } = groupInfo;
    const list = await getFishList({ id });
    this.setData({ groupId: groupInfo.id, list });
  },
  goPage(event) {
    const { groupId } = this.data;
    const url = `/pages/fish/add/add?groupId=${groupId}`;
    wx.navigateTo({ url });
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
