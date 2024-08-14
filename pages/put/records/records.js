import { getPublicFishPond } from "@/api/index";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    info: {}
  },

  async getData(id) {
    const { data: info } = await getPublicFishPond({ id });
    // const { data: info } = await getPublicFishRecord({ id });
    console.log(info,"放鱼记录")
    this.setData({ info });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
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
  onShareAppMessage() {
    return {
      title:this.data.anglingSiteName+"钓场"+this.data.info.name,
      path:"/pages/put/records/records",
      imageUrl:"https://pic.imgdb.cn/item/66bc08e8d9c307b7e9008959.jpg"
    }
  }
});
