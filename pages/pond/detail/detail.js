// pages/pond/detail/detail.js
import { fishPondDetails, addFishPond } from "@/api/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    form: {
      name: "",
      status: "",
      size: "",
      position_num: "",
      water_depth: "",
      fileList: [],
      charge_standard: "",
      return_fish_rule: "",
      rule: ""
    }
  },

  handleChange(event) {
    const { field } = event.currentTarget.dataset;
    const value = event.detail;
    this.setData({ [`form.${field}`]: value });
  },
  afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: "https://example.weixin.qq.com/upload", // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: "file",
      formData: { user: "test" },
      success(res) {
        // 上传完成需要更新 fileList
        const { form } = this.data;
        form.fileList.push({ ...file, url: res.data });
        this.setData({ "form.fileList": fileList });
      }
    });
  },
  async handleSave() {
    // console.log(this.data.form, "form");
    // return;
    const params = {
      angling_site_id: "b964e320757c47d9931a4addb910a039",
      charge_standard: "ad Lorem Ut",
      description:
        "结之转她商我联我大市律无物格算。算信华商斗战育直音近务强什叫。等家电第明加又消养物由山术阶走受。电记其界起实西光和存年管众石设统长水。九原张报基些深接地无公层市空南。产基已外么面图子文布同认知花别其。",
      fishes: "laborum eiusmod aute",
      name: "测试塘口44",
      photo_ids: ["30fedcea22a343b9b904d0b5fb23d73c"],
      position_num: 53,
      return_fish_rule: "aute",
      rod_limit: "tempor",
      rule: "aute",
      size: 9,
      status: 12,
      water_depth: 66
    };
    const res = await addFishPond(params);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // fishPondDetails({ id: options.id });
    wx.setNavigationBarTitle({
      title: "" ? "新增塘口" : "编辑塘口"
    });
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
