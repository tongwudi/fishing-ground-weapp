import { observable, action } from "mobx-miniprogram";

export const store = observable({
  // 数据字段
  isNewUser: wx.getStorageSync("isNewUser") || "",
  token: wx.getStorageSync("token") || "",
  role: wx.getStorageSync("role") || "",
  userInfo: wx.getStorageSync("userInfo") || {},

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
  resetStore: action(function () {
    this.token = "";
    this.role = "";
    this.userInfo = {};
    wx.clearStorageSync();
  }),
});
