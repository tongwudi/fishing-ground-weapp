import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "@/store/index";
import { login } from "@/api/index";

Component({
  behaviors: [storeBindingsBehavior],
  data: {
    username: "wzj1",
    password: "123456"
  },
  storeBindings: {
    store,
    actions: ["setToken", "setRole", "setUserInfo"]
  },

  methods: {
    startLogin: async function () {
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
      wx.navigateBack();
    },
    bindInput(event) {
      const { field } = event.currentTarget.dataset;
      const { value } = event.detail;
      this.setData({ [field]: value });
    }
  }
});
