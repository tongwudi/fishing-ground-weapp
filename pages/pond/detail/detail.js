// pages/pond/detail/detail.js
import { getPublicFishPond, postPrivateFishAdminPondAdd } from "@/api/index";
import { env } from "@/utils/env";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    form: {},
    fileList: []
  },

  async getData(id) {
    const { data: form } = await getPublicFishPond({ id });
    this.setData({ form });
  },
  handleChange(event) {
    const { field } = event.currentTarget.dataset;
    const value = event.detail;
    this.setData({ [`form.${field}`]: value });
  },
  afterRead(event) {
    const _this = this;
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: env.baseURL + "/private/fish/admin/photo/add", // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: "file",
      header: {
        "x-token": wx.getStorageSync("token")
      },
      formData: {
        user: "test"
      },
      success(res) {
        const result = JSON.parse(res.data);
        _this.data.fileList.push({
          url: "https://" + result.data.url,
          id: result.data.id
        });
        _this.setData({
          "form.photo_ids": _this.data.fileList.map(item => item.id),
          fileList: _this.data.fileList
        });
      }
    });
  },
  async handleSave() {
    const { form } = this.data;
    await postPrivateFishAdminPondAdd({ ...form });
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
    if (options.id) {
      this.getData(options.id);
      wx.setNavigationBarTitle({ title: "修改塘口" });
    } else {
      const { groupId } = this.data;
      this.setData({ ["form.angling_site_id"]: groupId });
      wx.setNavigationBarTitle({ title: "新增塘口" });
    }
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
