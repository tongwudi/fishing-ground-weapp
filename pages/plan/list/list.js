import {
  getPrivateFishAdminPondList
} from "@/api/fishAdmin";
import {
  groupIdBehavior
} from "@/store/behaviors";
Page({
  behaviors: [groupIdBehavior],
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
  onLoad(options) {},
  onReady() {
    this.getAreaList()
  },
  onShow() {},
  onHide() {},
  onUnload() {},
  onPullDownRefresh() {},
  onReachBottom() {},
  getAreaList() {
    getPrivateFishAdminPondList({
      id: this.data.groupId
    }).then(res => {
      this.setData({
        areas: res.data.map(item => {
          return {
            text: item.name,
            ...item
          }
        })
      })
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