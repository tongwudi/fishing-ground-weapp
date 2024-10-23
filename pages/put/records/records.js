import { getPublicFishPond, getPublicFishRecord } from "@/api/index";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    recordList: []
  },

  async getData(id) {
    const [{ data: info }, { data: recordList }] = await Promise.all([
      getPublicFishPond({ id }),
      getPublicFishRecord({ id })
    ]);
    this.setData({ info, recordList });
  },
  onClickLeft() {
    // const { info } = this.data;
    const pages = getCurrentPages();
    pages.length > 1
      ? wx.navigateBack()
      : wx.switchTab({ url: "/pages/home/home" });
    //  : wx.navigateTo({ url: `/pages/pond/display/display?pondId=${info.pondId}` });
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
    const { info } = this.data;
    const { angling_site, name, pondId } = info;
    return {
      title: angling_site.name + "(" + name + ")",
      path: `/pages/put/records/records?id=${pondId}`,
      imageUrl: "https://pic.imgdb.cn/item/66bc67d9d9c307b7e9878f2d.jpg"
    };
  }
});
