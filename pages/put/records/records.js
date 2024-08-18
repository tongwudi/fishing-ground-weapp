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
    const { role } = this.data;
    const isFish = role.split(",").includes("fish");
    wx.switchTab({ url: isFish ? "/pages/group/my/my" : "/pages/home/home" });
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
    const { anglingSiteName, info, pondId } = this.data;
    return {
      title: anglingSiteName + "钓场" + info.name,
      path: `/pages/put/records/records?id=${pondId}`,
      imageUrl: "https://pic.imgdb.cn/item/66bc67d9d9c307b7e9878f2d.jpg"
    };
  }
});
