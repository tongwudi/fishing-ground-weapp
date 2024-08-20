// pages/profile/profile.js
import { postPrivateFishAdminAdd } from "@/api/index";
import { env } from "@/utils/env";
import { formatDate } from "@/utils/util";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    pickerConfig: {
      show: false,
      activeKey: ""
    },
    form: {},
    fileList: []
  },

  handleChange(event) {
    const { field } = event.currentTarget.dataset;
    const value = event.detail;
    this.setData({ [`form.${field}`]: value });
  },
  openPicker(event) {
    const { field } = event.currentTarget.dataset;
    const pickerConfig = {
      show: true,
      activeKey: field
    };
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
  async handleRightIconClick() {
    // await wx.chooseLocation()
    const { authSetting } = await wx.getSetting();
    if (authSetting["scope.userLocation"] === false) {
      wx.showModal({
        title: "授权提示",
        content: "需要获取位置信息，请确认授权",
        complete: async res => {
          if (res.cancel) {
            wx.showToast({ title: "您拒绝了授权", icon: "none" });
            return;
          }

          const { authSetting } = await wx.openSetting();
          if (authSetting["scope.userLocation"] === false) {
            wx.showToast({ title: "您拒绝了授权", icon: "none" });
          }
        }
      });
    } else {
      try {
        const res = await wx.getLocation();
        console.log(res);
      } catch (error) {
        wx.showToast({ title: "您拒绝了授权", icon: "none" });
      }
    }
  },
  afterRead(event) {
    const { file } = event.detail;
    const { fileList } = this.data;
    const that = this;
    wx.uploadFile({
      url: env.baseURL + "/private/fish/admin/photo/add",
      filePath: file.url,
      name: "file",
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
        // 上传完成需要更新 fileList
        fileList.push({ id: data.id, url: data.url });
        that.setData({ fileList });
      }
    });
  },
  async handleSave() {
    const { form, fileList } = this.data;
    const photo_ids = fileList.map(v => v.id);
    const params = {
      ...form,
      photo_ids
    };
    await postPrivateFishAdminAdd(params);
    wx.showToast({
      title: "新增成功",
      success() {
        setTimeout(() => {
          wx.navigateBack();
        }, 1000);
      }
    });
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
    // const res = await groupDetail(params);
    // console.log(res, "groupDetail");
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
