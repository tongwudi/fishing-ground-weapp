// pages/register/register.ts
import { postBaseSystemRegister } from "@/api/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {},

  async register() {
    const { user_name, nick_name, password } = this.data;
    if (!user_name || !nick_name || !password) {
      wx.showToast({
        title: "请输入注册所需信息",
        icon: "none"
      });
      return;
    }
    const params = {
      avatar: "https://pic.imgdb.cn/item/64c0cc451ddac507ccd49532.png",
      user_name,
      nick_name,
      password
    };
    await postBaseSystemRegister(params);
    wx.showToast({
      title: "注册成功",
      success() {
        setTimeout(() => {
          wx.navigateBack();
        }, 1000);
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {},

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
