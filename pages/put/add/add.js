// pages/put/add/add.js
import {
  getPrivateFishAdminPondList,
  getPrivateFishAdminFishList,
  postPrivateFishAdminFishAdd
} from "@/api/index";
import { env } from "@/utils/env";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    pondPicker: {
      show: false,
      selectIndex: 0
    },
    fishesPicker: {
      show: false,
      selectIndex: 0
    },
    pondList: [],
    fishList: [],
    form: {}
  },

  async getData() {
    const id = this.data.groupId;
    const [{ data: pondList }, { data: fishList }] = await Promise.all([
      getPrivateFishAdminPondList({ id }),
      getPrivateFishAdminFishList()
    ]);
    this.setData({ pondList, fishList });
  },
  handleChange(event) {
    const { field } = event.currentTarget.dataset;
    const value = event.detail;
    this.setData({ [`form.${field}`]: value });
  },
  openPondPicker() {
    const { fishList, form } = this.data;
    const selectIndex = fishList.findIndex(v => form.fishes == v.name);
    const pondPicker = {
      show: true,
      selectIndex
    };
    this.setData({ pondPicker });
  },
  closePondPicker() {
    this.setData({ ["pondPicker.show"]: false });
  },
  confirmPondPicker(event) {
    const { value } = event.detail;
    this.setData({
      "form.pond": value.name,
      "form.fishes_pond_id": value.id,
      "pondPicker.show": false
    });
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
    const { anglingSiteName } = this.data;
    const that = this;
    wx.uploadFile({
      url: env.baseURL + "/private/fish/admin/video/add", // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: "file",
      formData: { name: `${anglingSiteName}_${Date.now()}` },
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
        const videos = [{ id: data.id, url: "https://" + data.url }];
        that.setData({ "form.put_fish_videos": videos });
      }
    });
  },
  handleDelete() {
    this.setData({ "form.put_fish_videos": [] });
  },
  async handleSave() {
    const { form } = this.data;
    await postPrivateFishAdminFishAdd(form);
    wx.showToast({ title: "放鱼成功" });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

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
    this.getData();
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
