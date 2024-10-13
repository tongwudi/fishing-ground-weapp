// pages/settings/startFish/startFish.ts
import { formatTime } from "@/utils/util";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    form: {
      currentTime: ""
    }
  },

  handleChange(event) {
    const { field } = event.currentTarget.dataset;
    const value = event.detail;
    this.setData({ [`form.${field}`]: value });
  },
  handleSave() {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.data.timer = setInterval(() => {
      this.setData({ "form.currentTime": formatTime(new Date()) });
    });
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
  onUnload() {
    this.data.timer && clearInterval(this.data.timer);
  },

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
