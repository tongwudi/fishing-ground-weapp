// pages/put/add/add.js
import {
  getPrivateFishAdminFishList,
  postPrivateFishAdminFishAdd
} from "@/api/index";
import {
  mainBehavior
} from "@/store/behaviors";
Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    fishList: [],
    form: {}
  },
  async getFishOption() {
    const { data: fishList } = await getPrivateFishAdminFishList();
    this.setData({ fishList });
  },
  handleChange(event) {
    const { field } = event.currentTarget.dataset;
    const value = event.detail;
    this.setData({ [`form.${field}`]: value });
  },
  afterRead(event) {
    const { file } = event.detail;
    const { fileList } = this.data;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: env.baseURL + "/private/fish/admin/photo/add", // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: "file",
      header: { "x-token": wx.getStorageSync("token") },
      success(res) {
        const { data } = JSON.parse(res.data);
        fileList.push({ url: `https://${data.url}`, id: data.id });
        this.setData({
          "form.photo_ids": fileList.map(item => item.id),
          fileList: fileList
        });
      }
    });
  },
  async handleSave() {
    const { form } = this.data;
    const params = { ...form };
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
