// pages/group/list/list.js
import {
  getPrivateFishAdminList,
  deletePrivateFishAdminOpenApiDelete
} from "@/api/index";
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
    // 若之前没有默认钓场，则选中第一个钓场
    const { groupId } = this.data;
    if (groupId || list.length == 0) return;
    this.setGroupId(list[0].id);
    this.setAnglingSiteName(list[0].name);
  },
  goPage(event) {
    const { id } = event.currentTarget.dataset;
    const url = "/pages/group/profile/profile";
    wx.navigateTo({ url: id ? `${url}?id=${id}` : url });
  },
  handleChange(event) {
    const { id, name } = event.currentTarget.dataset;
    const { groupId } = this.data;
    if (id === groupId) return;
    this.setGroupId(id);
    this.setAnglingSiteName(name);
  },
  handleEdit() {
    wx.navigateTo({ url: "/pages/group/profile/profile" });
  },
  async handleDelete(event) {
    const { id } = event.currentTarget.dataset;
    const res = await wx.showModal({ content: "确定要删除该钓场吗？" });
    if (res.confirm) {
      await deletePrivateFishAdminOpenApiDelete({ id });
      this.getData();
      wx.showToast({ title: "删除成功" });
    }
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
