import { getPublicFishGrounds, getPublicFishPond } from "@/api/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner: ["https://pic.imgdb.cn/item/66b9a438d9c307b7e99a980c.jpg"],
    groupInfo: {},
    pondInfo: {},
    active: ""
  },

  async getData(id) {
    let { banner } = this.data;
    const { data } = await getPublicFishGrounds({ id });
    const { files = [], ...groupInfo } = data;
    files.length > 0 && (banner = files.map(v => v.path));
    this.setData({
      banner,
      groupInfo
    });
    // 是否存在塘口
    if (groupInfo.fishes_pond.length == 0) return;
    const pondId = groupInfo.fishes_pond[0].id;
    this.getPondInfo(pondId);
  },
  previewImage() {
    const { banner } = this.data;
    wx.previewImage({ urls: banner });
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
  callPhone() {
    const { groupInfo } = this.data;
    wx.makePhoneCall({ phoneNumber: groupInfo.phone });
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
      wx.navigateTo({ url: `/pages/plan/records/records?id=${id}` });
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
