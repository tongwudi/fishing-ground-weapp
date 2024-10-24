import { getPublicFishPond } from "@/api/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    pondInfo: {}
  },

  async getData(id) {
    const { data: pondInfo } = await getPublicFishPond({ id });
    const { files = [] } = pondInfo;
    const imgPath = "https://pic.imgdb.cn/item/66b9a438d9c307b7e99a980c.jpg";
    pondInfo.banner = files.length == 0 ? [imgPath] : files.map(v => v.path);
    this.setData({ pondInfo });
  },
  previewImage() {
    const { pondInfo } = this.data;
    wx.previewImage({ urls: pondInfo.banner });
  },
  handleGridClick(event) {
    const { key } = event.currentTarget.dataset;
    const { pondInfo } = this.data;
    switch (key) {
      case "放鱼记录":
        wx.navigateTo({ url: `/pages/put/records/records?id=${pondInfo.id}` });
        break;
      case "放鱼计划":
        wx.navigateTo({ url: `/pages/plan/records/records?id=${pondInfo.id}` });
        break;
    }
  },
  goPage() {
    const { isLogin } = this.data;
    if (!isLogin) {
      wx.showModal({
        title: "提示",
        content: "用户未登录，是否去登录？",
        success(res) {
          res.confirm && wx.switchTab({ url: "/pages/mine/mine" });
        }
      });
      return;
    }
    wx.navigateTo({ url: "/pages/tool/startFish/startFish" });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData(options.pondId);
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
