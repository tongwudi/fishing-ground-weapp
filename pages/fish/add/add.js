// pages/species/add/add.js
import { addFish } from "@/api/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    fields: [{ key: "name" }],
    form: {}
  },

  handleChange(event) {
    const { field } = event.currentTarget.dataset;
    const value = event.detail;
    const { form } = this.data;
    this.setData({ form: { ...form, [field]: value } });
  },
  addField() {
    const { fields } = this.data;
    this.setData({ fields: [...fields, { key: "name" + fields.length }] });
  },
  async handleSave() {
    const { fields, form } = this.data;
    const params = fields.reduce((a, n) => {
      a.push({ name: form[n.key], angling_site_id: form.angling_site_id });
      return a;
    }, []);
    await addFish(params);
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
  onLoad(options) {
    this.setData({ ["form.angling_site_id"]: options.groupId });
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
