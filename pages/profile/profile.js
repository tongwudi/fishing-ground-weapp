// pages/profile/profile.js
import { getPrivateUserInfo, putPrivateUserProfileUpdate } from "@/api/index";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: "https://pic.imgdb.cn/item/64c0cc451ddac507ccd49532.png",
    nickname: undefined
  },

  async getUserInfo() {
    const { data } = await getPrivateUserInfo();
    this.setUserInfo(data);
    this.setData({
      avatarUrl: data.avatar,
      nickname: data.nick_name
    });
  },
  async onChooseAvatar(e) {
    const { avatarUrl } = e.detail;
    this.setData({ avatarUrl });
  },
  async handleSave() {
    const { avatarUrl, nickname } = this.data;
    if (!nickname) {
      wx.showToast({
        title: "请填写昵称",
        icon: "none"
      });
      return;
    }
    const params = {
      avatar: avatarUrl,
      nick_name: nickname
    };
    await putPrivateUserProfileUpdate(params);
    wx.showToast({ title: "修改成功" });
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
  onShow() {
    this.getUserInfo();
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
