// pages/activity/detail/detail.ts
import { getPrivateFishAdminFishList } from "@/api/index";
import { env } from "@/utils/env";
import { formatTime } from "@/utils/util";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    pickerConfig: {
      show: false,
      timeKey: ""
    },
    fishesPicker: {
      show: false,
      selectIndex: 0
    },
    fishList: [],
    fileList: [],
    form: {
      type:"0"
    }
  },

  async getData() {
    const { data: fishList } = await getPrivateFishAdminFishList();
    this.setData({ fishList });
  },
  handleChange(event) {
    const { field } = event.currentTarget.dataset;
    const value = event.detail;
    this.setData({ [`form.${field}`]: value });
  },
  openPicker(event) {
    const { field } = event.currentTarget.dataset;
    this.setData({
      "pickerConfig.show": true,
      "pickerConfig.timeKey": field
    });
  },
  confirmTimePicker(event) {
    const time = event.detail;
    const { pickerConfig } = this.data;
    this.setData({
      [`form.${pickerConfig.timeKey}`]: time,
      "pickerConfig.show": false
    });
  },
  closePicker() {
    this.setData({ "pickerConfig.show": false });
  },
  openFishesPicker() {
    const { fishList, form } = this.data;
    const selectIndex = fishList.findIndex(v => form.fishes == v.name);
    const fishesPicker = {
      show: true,
      selectIndex
    };
    this.setData({ fishesPicker });
  },
  closeFishesPicker() {
    this.setData({ ["fishesPicker.show"]: false });
  },
  confirmFishesPicker(event) {
    const { value } = event.detail;
    this.setData({
      [`form.fishes`]: value.name,
      ["fishesPicker.show"]: false
    });
  },
  async afterRead(event) {
    const { file } = event.detail;
    const { fileList, anglingSiteName } = this.data;
    const that = this;
    wx.uploadFile({
      url: env.baseURL + "/private/fish/admin/video/add",
      filePath: file.url,
      name: "file",
      formData: { name: anglingSiteName, source: "boss" },
      header: { "x-token": wx.getStorageSync("token") },
      success(res) {
        const { data, code } = JSON.parse(res.data);
        if (code != 200) {
          wx.showToast({
            title: "上传失败请重试",
            icon: "none"
          });
          return;
        }
        fileList.push({ id: data.id, url: data.url });
        that.setData({ fileList });
      }
    });
  },
  handleUnitClick() {},
  handleSave() {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getData();
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
