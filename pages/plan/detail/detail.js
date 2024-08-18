// pages/plan/detail/detail.js
import {
  getPublicFishPlan,
  getPrivateFishAdminFishList,
  postPrivateFishAdminFishPlan
} from "@/api/index";
import { formatDate } from "@/utils/util";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    pondId: "",
    pickerConfig: {
      show: false,
      index: 0,
      selectIndex: 0
    },
    showCalendar: false,
    fishList: [],
    form: []
  },

  async getData(id) {
    const { data: form } = await getPublicFishPlan({ id });
    this.setData({ form });
  },
  async getFishOption() {
    const { data: fishList } = await getPrivateFishAdminFishList();
    this.setData({ fishList });
  },
  openCalendar() {
    this.setData({ showCalendar: true });
  },
  closeCalendar() {
    this.setData({ showCalendar: false });
  },
  addField(event) {
    const date = formatDate(event.detail);
    let { form } = this.data;
    this.setData({
      showCalendar: false,
      form: [...form, { put_time: date }]
    });
  },
  delField(event) {
    const { index } = event.currentTarget.dataset;
    const { form } = this.data;
    form.splice(index, 1);
    this.setData({ form });
  },
  handleChange(event) {
    const { index, field } = event.currentTarget.dataset;
    const value = event.detail;
    this.setData({ [`form[${index}].${field}`]: value });
  },
  openPicker(event) {
    const { index } = event.currentTarget.dataset;
    const { fishList, form } = this.data;
    const selectIndex = fishList.findIndex(v => form[index].fishes == v.name);
    const pickerConfig = {
      show: true,
      index,
      selectIndex
    };
    this.setData({ pickerConfig });
  },
  closePicker() {
    this.setData({ ["pickerConfig.show"]: false });
  },
  confirmPicker(event) {
    const { value } = event.detail;
    const { index } = this.data.pickerConfig;
    this.setData({
      [`form[${index}].fishes`]: value.name,
      ["pickerConfig.show"]: false
    });
  },
  async handleSave() {
    const { form, pondId } = this.data;
    if (form.length == 0) {
      wx.showToast({
        title: "至少需要填写一条数据！",
        icon: "none"
      });
      return;
    }
    const params = form.map(v => {
      v.fishes_pond_id = pondId;
      return v;
    });
    await postPrivateFishAdminFishPlan(params);
    wx.showToast({
      title: "保存成功",
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
    this.setData({ pondId: options.pondId });
    this.getFishOption();
    this.getData(options.pondId);
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
