import { observable, action } from "mobx-miniprogram";

export const store = observable({
  // 数据字段
  token: wx.getStorageSync("token") || "",
  role: wx.getStorageSync("role") || "",
  userInfo: wx.getStorageSync("userInfo") || {},
  groupId: wx.getStorageSync("groupId") || "",

  // 计算属性
  get isLogin() {
    return this.token != "";
  },

  // actions
  setToken: action(function (token) {
    this.token = token;
    token ? wx.setStorageSync("token", token) : wx.removeStorageSync("token");
  }),
  setRole: action(function (role) {
    this.role = role;
    role ? wx.setStorageSync("role", role) : wx.removeStorageSync("role");
  }),
  setUserInfo: action(function (userInfo) {
    this.userInfo = userInfo;
    userInfo
      ? wx.setStorageSync("userInfo", userInfo)
      : wx.removeStorageSync("userInfo");
  }),
  setGroupId: action(function (groupId) {
    this.groupId = groupId;
    groupId
      ? wx.setStorageSync("groupId", groupId)
      : wx.removeStorageSync("groupId");
  })
});
