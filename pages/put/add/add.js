// pages/put/add/add.js
import {
  getPrivateFishAdminPondList,
  getPrivateFishAdminFishList,
  postPrivateFishAdminFishAdd
} from "@/api/index";
import { env } from "@/utils/env";

Page({
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
    form: {},
    fileList: []
  },

  async getData() {
    const { form, groupId: id } = this.data;
    const [{ data: pondList }, { data: fishList }] = await Promise.all([
      getPrivateFishAdminPondList({ id }),
      getPrivateFishAdminFishList()
    ]);
    if (pondList.length > 0) {
      form.pond = pondList[0].name;
      form.fishes_pond_id = pondList[0].id;
    }
    this.setData({ pondList, fishList, form });
  },
  handleChange(event) {
    const { field } = event.currentTarget.dataset;
    const value = event.detail;
    this.setData({ [`form.${field}`]: value });
  },
  openPondPicker() {
    const { pondList, form } = this.data;
    const selectIndex = pondList.findIndex(v => form.fishes_pond_id == v.id);
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
  handleDelete(event) {
    const { index } = event.detail;
    const { fileList } = this.data;
    fileList.splice(index, 1);
    this.setData({ fileList });
  },
  async handleSave() {
    const { form, fileList } = this.data;
    const video_ids = fileList.map(v => v.id);
    const params = {
      ...form,
      video_ids
    };
    await postPrivateFishAdminFishAdd(params);
    wx.showToast({ title: "放鱼成功" });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({ groupId: options.groupId });
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
