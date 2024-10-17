/*
 * @Author: wangzhongjie
 * @Date: 2024-10-14 08:53:37
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2024-10-17 16:15:43
 * @Description: 
 * @Email: shutdown0630@163.com
 */
import { getPublicFishPond } from "@/api/index";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    pondId: ""
  },

  async getData(id) {
    const { data: info } = await getPublicFishPond({ id });
    this.setData({ info });
  },
  onClickLeft() {
    wx.switchTab({ url: "/pages/home/home" });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({ pondId: options.id });
    this.getData(options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.hideHomeButton();
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
  onShareAppMessage() {
    const {  info, pondId } = this.data;
    return {
      title: info.angling_site.name + "(" + info.name + ")",
      path: `/pages/put/records/records?id=${pondId}`,
      imageUrl: "https://pic.imgdb.cn/item/66c2f945d9c307b7e9c67324.jpg"
    };
  }
});
