import { login, getMyGroupList } from "@/api/index";
import { loginBehavior } from "@/store/behaviors";

Page({
  behaviors: [loginBehavior],
  data: {
    username: "wzj1",
    password: "123456"
  },

  bindInput(event) {
    const { field } = event.currentTarget.dataset;
    const { value } = event.detail;
    this.setData({ [field]: value });
  },
  async login() {
    const { username, password } = this.data;
    if (username.length == 0 || password.length == 0) {
      wx.showModal({
        title: "错误信息",
        content: "请输入用户名和密码",
        showCancel: false
      });
      return;
    }
    const res = await login({ user_name: username, password });
    const userRole = res.role.map(v => v.key).filter(Boolean);
    this.setToken(res.token);
    this.setRole(userRole.join());
    this.setUserInfo(res.user);
    // 默认每个钓场身份的账号只有一个钓场，所以把请求钓场列表接口放到登录来做
    if (userRole.includes("fish")) {
      const groundList = await getMyGroupList();
      if (groundList.length == 0) return;
      this.setGroupId(groundList[0].id);
    }
    wx.navigateBack();
  }
});
