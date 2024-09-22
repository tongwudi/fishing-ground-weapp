import { getPublicFishGrounds } from "@/api/index";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    banner: ["https://pic.imgdb.cn/item/66b9a438d9c307b7e99a980c.jpg"],
    groupInfo: {},
    active: 0
  },
  async getData() {
    let { groupId: id, banner } = this.data;
    const { data } = await getPublicFishGrounds({ id });
    const { files = [], ...groupInfo } = data;
    files.length > 0 && (banner = files.map(v => v.path));
    this.setData({
      groupInfo,
      banner,
      active: 0
    });
  },
  callPosition() {
    const { groupInfo } = this.data;
    wx.openLocation({
      latitude: +groupInfo.latitude,
      longitude: +groupInfo.longitude,
      scale: 18,
      name: groupInfo.address_name,
      address: groupInfo.address
    });
  },
  handleChange(event) {
    const id = event.detail.name;
    this.setData({ active: id });
  },
  goPage(event) {
    const { id, type } = event.currentTarget.dataset;
    if (type == "plan") {
      wx.navigateTo({ url: `/pages/plan/records/records?id=${id}` });
    } else {
      wx.navigateTo({ url: `/pages/put/records/records?id=${id}` });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    const { groupInfo, groupId } = this.data;
    if (!groupInfo.id || !groupId || groupInfo.id == groupId) return;
    this.getData();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === "function") {
      this.getTabBar().init();
    }
    const { groupInfo, groupId } = this.data;
    if (!groupInfo.id || !groupId || groupInfo.id == groupId) return;
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
  async onPullDownRefresh() {
    await this.getData();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
});
