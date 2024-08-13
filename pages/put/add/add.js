// pages/put/add/add.js
import {
  getPrivateFishAdminFishList,
  postPrivateFishAdminFishAdd
} from "@/api/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    fishList: [],
    form: {}
  },
  async getFishOption() {
    const fishList = await getPrivateFishAdminFishList();
    this.setData({
      fishList: fishList.data
    });
  },
  handleChange(event) {
    const {
      field
    } = event.currentTarget.dataset;
    const value = event.detail;
    this.setData({
      [`form.${field}`]: value
    });
  },
  async handleSave() {
    const {
      form
    } = this.data;
    const params = {
      ...form
    };
    console.log(params);
    return;
    const res = await postPrivateFishAdminFishAdd(params);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getFishOption();
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