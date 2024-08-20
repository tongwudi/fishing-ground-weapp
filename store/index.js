import { observable, action } from "mobx-miniprogram";

const defaultUserInfo = {
  avatar: "https://pic.imgdb.cn/item/64c0cc451ddac507ccd49532.png",
  nick_name: "登录 / 注册"
};
export const store = observable({
  // 数据字段
  token: wx.getStorageSync("token") || "",
  role: wx.getStorageSync("role") || "",
  userInfo: wx.getStorageSync("userInfo") || defaultUserInfo,
  groupId: wx.getStorageSync("groupId") || "",
  anglingSiteName: wx.getStorageSync("anglingSiteName") || "",
  isOnline: wx.getStorageSync("isOnline") || false,

  // 计算属性
  get isLogin() {
    return this.token != "";
  },
  get isFish() {
    return this.role.split(",").includes("fish");
  },

  // actions
  resetStore: action(function () {
    this.token = "";
    this.role = "";
    this.userInfo = defaultUserInfo;
    this.groupId = "";
    this.isOnline = false;
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
    this.userInfo = userInfo;
    wx.setStorageSync("userInfo", userInfo);
  }),
  setGroupId: action(function (groupId) {
    this.groupId = groupId;
    wx.setStorageSync("groupId", groupId);
  }),
  setIsOnline: action(function (isOnline) {
    this.isOnline = isOnline;
    wx.setStorageSync("isOnline", isOnline);
  }),
  setAnglingSiteName: action(function (val) {
    this.anglingSiteName = val;
    wx.setStorageSync("anglingSiteName", val);
  })
});
