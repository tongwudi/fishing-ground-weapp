import { observable, action } from "mobx-miniprogram";

export const store = observable({
  // 数据字段
  isNewUser: wx.getStorageSync("isNewUser") || "",
  token: wx.getStorageSync("token") || "",
  role: wx.getStorageSync("role") || "",
  userInfo: wx.getStorageSync("userInfo") || {},
  groupId: wx.getStorageSync("groupId") || "",
  anglingSiteName: wx.getStorageSync("anglingSiteName") || "",

  // 计算属性
  get isLogin() {
    return this.token != "";
  },
  get isFish() {
    return this.role.split(",").includes("fish");
  },

  // actions
  setIsNewUser: action(function (isNewUser) {
    this.isNewUser = isNewUser;
    wx.setStorageSync("isNewUser", isNewUser);
  }),
  resetStore: action(function () {
    this.token = "";
    this.role = "";
    this.userInfo = {};
    this.groupId = "";
    this.anglingSiteName = "";
    wx.clearStorageSync();
  }),
  setToken: action(function (token) {
    this.token = token;
    wx.setStorageSync("token", token);
  }),
  setRole: action(function (role) {
    this.role = role;
    wx.setStorageSync("role", role);
  }),
  setUserInfo: action(function (userInfo) {
    this.userInfo = { ...this.userInfo, ...userInfo };
    wx.setStorageSync("userInfo", this.userInfo);
  }),
  setGroupId: action(function (groupId) {
    this.groupId = groupId;
    wx.setStorageSync("groupId", groupId);
  }),
  setAnglingSiteName: action(function (val) {
    this.anglingSiteName = val;
    wx.setStorageSync("anglingSiteName", val);
  })
});
