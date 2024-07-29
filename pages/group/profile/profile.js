// pages/profile/profile.js
import { groupDetails, addGroup } from "@/api/index";
import { formatDate } from "@/utils/util";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    pickerConfig: {
      show: false,
      activeKey: ""
    },
    form: {
      fileList: []
    }
  },

  handleChange(event) {
    const { field } = event.currentTarget.dataset;
    const value = event.detail;
    this.setData({ [`form.${field}`]: value });
  },
  openPicker(event) {
    const { field } = event.currentTarget.dataset;
    const { pickerConfig } = this.data;
    pickerConfig.show = true;
    pickerConfig.activeKey = field;
    this.setData({ pickerConfig });
  },
  closePicker() {
    this.setData({ "pickerConfig.show": false });
  },
  confirmPicker(event) {
    const [start, end] = event.detail;
    const dateStr = `${formatDate(start)} ~ ${formatDate(end)}`;
    const { pickerConfig } = this.data;
    this.setData({
      "pickerConfig.show": false,
      [`form.${pickerConfig.activeKey}`]: dateStr
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
    const { form } = this.data;
    const res = await addGroup({ ...form });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  async onReady() {
    // const params = { id: "25905b018cb148beb67bcdad0dd93a80" };
    // const res = await groupDetails(params);
    // console.log(res, "groupDetails");
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
