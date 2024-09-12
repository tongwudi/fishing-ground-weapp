// pages/profile/profile.js
import { postPrivateFishAdminAdd, getPublicFishGrounds } from "@/api/index";
import { env } from "@/utils/env";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    pickerConfig: {
      time: 1,
      show: false,
      activeKey: "",
      start: "9:00",
      end: "18:00",
      timeKey: "start"
    },
    form: {},
    fileList: []
  },

  async getData(id) {
    const { data } = await getPublicFishGrounds({ id });
    const { user, files = [], ...form } = data;
    const fileList = files.map(v => ({ id: v.id, url: v.path }));
    this.setData({
      "pickerConfig.time": form.business_hours == "随到随钓" ? 1 : 2,
      form,
      fileList
    });
  },
  handleChange(event) {
    const { field } = event.currentTarget.dataset;
    const value = event.detail;
    this.setData({ [`form.${field}`]: value });
  },
  async handleAddressClick() {
    try {
      const res = await wx.chooseLocation();
      this.setData({
        "form.address_name": res.name ? res.name : res.address,
        "form.address": res.address,
        "form.latitude": res.latitude + "",
        "form.longitude": res.longitude + ""
      });
    } catch (error) {}
    // const { authSetting } = await wx.getSetting();
    // if (authSetting["scope.userLocation"] === false) {
    //   wx.showModal({
    //     title: "授权提示",
    //     content: "需要获取位置信息，请确认授权",
    //     complete: async res => {
    //       if (res.cancel) {
    //         wx.showToast({ title: "您拒绝了授权", icon: "none" });
    //         return;
    //       }
    //       const { authSetting } = await wx.openSetting();
    //       if (authSetting["scope.userLocation"] === false) {
    //         wx.showToast({ title: "您拒绝了授权", icon: "none" });
    //       }
    //     }
    //   });
    // } else {
    //   try {
    //     const res = await wx.getLocation();
    //     console.log(res);
    //   } catch (error) {
    //     wx.showToast({ title: "您拒绝了授权", icon: "none" });
    //   }
    // }
  },
  handleTimeClick(event) {
    const value = event.detail;
    this.setData({
      "form.business_hours": value === 1 ? "随到随钓" : "",
      "pickerConfig.time": value
    });
  },
  openPicker(event) {
    const { field } = event.currentTarget.dataset;
    this.setData({
      "pickerConfig.show": true,
      "pickerConfig.activeKey": field
    });
  },
  handleTap(event) {
    const { field } = event.currentTarget.dataset;
    this.setData({ "pickerConfig.timeKey": field });
  },
  handleChangeTime(event) {
    const time = event.detail;
    const { pickerConfig } = this.data;
    this.setData({ [`pickerConfig.${pickerConfig.timeKey}`]: time });
  },
  closePicker() {
    this.setData({ "pickerConfig.show": false });
  },
  confirmPicker() {
    const { pickerConfig } = this.data;
    const dateStr = `${pickerConfig.start} ~ ${pickerConfig.end}`;
    this.setData({
      [`form.${pickerConfig.activeKey}`]: dateStr,
      "pickerConfig.show": false
    });
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
      title: form.id ? "修改成功" : "新增成功",
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
  onLoad(options) {
    wx.setNavigationBarTitle({ title: options.id ? "修改钓场" : "新增钓场" });
    options.id && this.getData(options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  async onReady() {},

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
