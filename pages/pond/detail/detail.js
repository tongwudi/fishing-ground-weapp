// pages/pond/detail/detail.js
import { getPublicFishPond, postPrivateFishAdminPondAdd } from "@/api/index"
import { env } from "@/utils/env"
import { mainBehavior } from "@/store/behaviors"

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    form: {
      status: 1,
    },
    fileList: [],
    standard: 1,
    rules: [
      {
        fish: "",
        price: "",
        duration: "",
      },
    ],
    originRules: [{ fish: "", price: "", duration: "" }],
  },

  async getData(id) {
    const { data } = await getPublicFishPond({ id })
    const { files = [], ...form } = data
    const fileList = files.map((v) => ({ id: v.id, url: v.path }))
    this.setData({
      form,
      fileList,
      standard: data.charge_rule?.[0]?.fish?.length > 0 ? 2 : 1,
      rules: data.charge_rule || [{ fish: "", price: "", duration: "" }],
      originRules: data.charge_rule || [{ fish: "", price: "", duration: "" }],
    })
  },
  handleChange(event) {
    const { field } = event.currentTarget.dataset
    const value = event.detail
    this.setData({ [`form.${field}`]: value })
  },
  handleRuleChange(event) {
    const value = event.detail
    if (value === 1) {
      this.setData({ rules: [{ fish: "", price: "", duration: "" }] })
    } else {
      this.setData({ rules: [...this.data.originRules] })
    }
    this.setData({ standard: value })
  },
  handleRuleField(event) {
    const { field, index } = event.currentTarget.dataset
    const value = event.detail
    this.data.rules[index][field] = value
    this.setData({ rules: this.data.rules })
  },
  handleRuleDelete(event) {
    console.log(event);
    const { index } = event.currentTarget.dataset
    this.data.rules.splice(index, 1)
    this.setData({ rules: this.data.rules })
  },
  afterRead(event) {
    const { file } = event.detail
    const { fileList } = this.data
    const that = this
    wx.uploadFile({
      url: env.baseURL + "/private/fish/admin/photo/add",
      filePath: file.url,
      name: "file",
      header: { "x-token": wx.getStorageSync("token") },
      success(res) {
        const { data, code } = JSON.parse(res.data)
        if (code != 200) {
          wx.showToast({
            title: "上传失败请重试",
            icon: "none",
          })
          return
        }
        // 上传完成需要更新 fileList
        fileList.push({ id: data.id, url: data.url })
        that.setData({ fileList })
      },
    })
  },
  addNewRule() {
    this.data.rules.push({
      fish: "",
      price: "",
      duration: "",
    })
    this.setData({ rules: this.data.rules })
  },
  async handleSave() {
    const { groupId, form, fileList } = this.data
    const photo_ids = fileList.map((v) => v.id)
    if (this.data.standard === 1) {
      this.data.rules.forEach((item) => {
        delete item.fish
      })
      this.setData({ rules: this.data.rules })
    }
    const params = {
      angling_site_id: groupId,
      ...form,
      photo_ids,
      size: +form.size,
      position_num: +form.position_num,
      charge_rule: this.data.rules,
      // water_depth: +form.water_depth
    }
    await postPrivateFishAdminPondAdd(params)
    wx.showToast({
      title: form.id ? "修改成功" : "新增成功",
      success() {
        setTimeout(() => {
          wx.navigateBack()
        }, 1000)
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({ title: options.id ? "修改塘口" : "新增塘口" })
    options.id && this.getData(options.id)
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
  onShareAppMessage() {},
})
