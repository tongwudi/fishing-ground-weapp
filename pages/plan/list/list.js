import {
  getPrivateFishAdminPondList
} from "@/api/index";
import {
  mineBehavior
} from "@/store/behaviors";
Page({
  behaviors: [mineBehavior],
  /**
   * 页面的初始数据
   */
  data: {
    selectAreaVisible: false,
    selectArea: "",
    areas: [{
        text: "渔场1"
      },
      {
        text: "渔场2"
      },
      {
        text: "渔场3"
      },
      {
        text: "渔场4"
      },
      {
        text: "渔场4"
      },
    ]
  },
  onLoad(options) {
  },
  onReady() {
    this.getAreaList()
  },
  onShow() {
  },
  onHide() {
  },
  onUnload() {
  },
  onPullDownRefresh() {
  },

  onReachBottom() {
  },
  getAreaList() {
    getPrivateFishAdminPondList({
      id: this.data.userInfo.id
    }).then(res => {
      console.log(res);
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  onSelectAreaOpen() {
    this.setData({
      selectAreaVisible: true
    })
  },
  onSelectAreaClose() {
    console.log(1111111);
    this.setData({
      selectAreaVisible: false
    })
  },
  onAreaSelect(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    this.setData({
      selectArea: value.text,
      selectAreaVisible: false
    })
  }
})