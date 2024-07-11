// pages/profile/profile.js
import { fishPlaceDetails, addFishPlace } from "@/api/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    form: {
      fileList: []
    },
    show: false
  },

  handleCalendar() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    const [start, end] = event.detail;
    this.setData({
      show: false,
      "form.time": `${this.formatDate(start)} - ${this.formatDate(end)}`
    });
  },
  afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: "https://example.weixin.qq.com/upload", // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: "file",
      formData: { user: "test" },
      success(res) {
        // 上传完成需要更新 fileList
        const { form } = this.data;
        form.fileList.push({ ...file, url: res.data });
        this.setData({ "form.fileList": fileList });
      }
    });
  },
  async handleSave() {
    const res = await addFishPlace({ name: "九寨沟" });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  async onReady() {
    const params = { id: "20f2c6abdad4417494855242da6a39b9" };
    const res = await fishPlaceDetails(params);
    console.log(res, "fishPlaceDetails");
  },

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
