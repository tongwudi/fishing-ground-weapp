import { postBaseSystemLogin, getPrivateFishAdminList } from "@/api/index";
import { mainBehavior } from "@/store/behaviors";

Page({
  behaviors: [mainBehavior],
  /**
   * 页面的初始数据
   */
  data: {},

  goRegister() {
    wx.navigateTo({ url: "/pages/register/register" });
  },
  async login() {
    const { user_name, password } = this.data;
    if (!user_name || !password) {
      wx.showToast({
        title: "请输入用户名和密码",
        icon: "none"
      });
      return;
    }
    const { data } = await postBaseSystemLogin({ user_name, password });
    const userRole = data.role.map(v => v.key).filter(Boolean);
    this.setToken(data.token);
    this.setRole(userRole.join());
    this.setUserInfo(data.user);
    // 默认每个钓场身份的账号只有一个钓场，所以把请求钓场列表接口放到登录来做
    if (userRole.includes("fish")) {
      this.getGroupList();
    }
    wx.navigateBack();
  },
  async getGroupList() {
    const { data: groundList } = await getPrivateFishAdminList();
    if (groundList.length == 0) return;
    this.setGroupId(groundList[0].id);
    this.setAnglingSiteName(groundList[0].name);
  }
});
