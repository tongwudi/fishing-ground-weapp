// pages/species/add/add.js
import { postPrivateFishAdminFishTypeAdd } from "@/api/index";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    fields: [{ key: "name" }],
    form: {},
    count: 0
  },

  handleChange(event) {
    const { field } = event.currentTarget.dataset;
    const value = event.detail;
    const { form } = this.data;
    this.setData({ form: { ...form, [field]: value } });
  },
  addField() {
    let { fields, count } = this.data;
    count++;
    this.setData({
      fields: [...fields, { key: "name" + count }],
      count
    });
  },
  delField(event) {
    const { field } = event.currentTarget.dataset;
    const { fields } = this.data;
    const idx = fields.findIndex(v => v.key == field);
    fields.splice(idx, 1);
    this.setData({ fields });
  },
  async handleSave() {
    const { fields, form, groupId } = this.data;
    const values = Object.values(form);
    if (fields.length == 0 || values.length == 0) {
      wx.showToast({
        title: "至少需要填写一条数据！",
        icon: "none"
      });
      return;
    }
    const params = fields.reduce((a, n) => {
      const name = form[n.key];
      name && a.push({ name, angling_site_id: groupId });
      return a;
    }, []);
    await postPrivateFishAdminFishTypeAdd(params);
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
