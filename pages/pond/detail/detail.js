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
    form: {
      status: 1
    },
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
      photo_ids,
      size: +form.size,
      position_num: +form.position_num,
      water_depth: +form.water_depth,
      status: 1
    };
    await postPrivateFishAdminPondAdd(params);
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
