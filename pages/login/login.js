import { postBaseSystemLogin, getPrivateFishAdminList } from "@/api/index";
import { loginBehavior } from "@/store/behaviors";

Page({
  behaviors: [loginBehavior],
  data: {
    user_name: "wzj1",
    password: "123456"
  },

  bindInput(event) {
    const { field } = event.currentTarget.dataset;
    const { value } = event.detail;
    this.setData({ [field]: value });
  },
  async login() {
    const { user_name, password } = this.data;
    if (user_name.length == 0 || password.length == 0) {
      wx.showModal({
        title: "错误信息",
        content: "请输入用户名和密码",
        showCancel: false
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
      const { data: groundList } = await getPrivateFishAdminList();
      if (groundList.length == 0) return;
      this.setGroupId(groundList[0].id);
      this.setAnglingSiteName(groundList[0].name)
    }
    wx.navigateBack();
  }
});
