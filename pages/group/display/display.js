import { getPublicFishGrounds } from "@/api/index";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    groupInfo: {}
  },

  async getData(id) {
    const { data: groupInfo } = await getPublicFishGrounds({ id });
    const { files = [] } = groupInfo;
    const imgPath = "https://pic.imgdb.cn/item/66b9a438d9c307b7e99a980c.jpg";
    groupInfo.banner = files.length == 0 ? [imgPath] : files.map(v => v.path);
    this.setData({ groupInfo });
  },
  previewImage() {
    const { groupInfo } = this.data;
    wx.previewImage({ urls: groupInfo.banner });
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
  handleGridClick(event) {
    const { key, index } = event.currentTarget.dataset;
    const { groupInfo, isLogin } = this.data;
    const { id: pondId, name: pondName } = groupInfo.fishes_pond[index];
    switch (key) {
      case "开钓":
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
        break;
      case "放鱼":
        const url = `/pages/put/add/add?pondId=${pondId}&pondName=${pondName}`;
        wx.navigateTo({ url });
        break;
      case "查看":
        wx.navigateTo({ url: `/pages/pond/display/display?pondId=${pondId}` });
        break;
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
