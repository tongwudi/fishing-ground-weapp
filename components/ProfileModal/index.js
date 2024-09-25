import { postPrivateUserWxSave } from "@/api/index";
import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "@/store/index";

Component({
  behaviors: [storeBindingsBehavior],
  storeBindings: { store },

  /**
   * 组件的对外属性，是属性名到属性设置的映射表
   */
  properties: {
    // avatarUrl: String,
    // nickname: String,
    show: Boolean
  },

  /**
   * 组件的内部数据，和 properties 一同用于组件的模板渲染
   */
  data: {
    avatarUrl: "https://pic.imgdb.cn/item/64c0cc451ddac507ccd49532.png",
    nickname: ""
  },

  /**
   * 组件数据字段监听器，用于监听 properties 和 data 的变化
   */
  observers: {},

  /**
   * 组件生命周期声明对象
   */
  lifetimes: {
    // attached() {
    //   const { nickname } = this.data;
    //   this.setData({ nickname: nickname });
    // }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    jumpClick() {
      this.setData({ show: false });
    },
    async onChooseAvatar(e) {
      const { avatarUrl } = e.detail;
      this.setData({ avatarUrl });
    },
    async handleSave() {
      const { avatarUrl, nickname } = this.data;
      if (!nickname) {
        wx.showToast({
          title: "请填写昵称",
          icon: "none"
        });
        return;
      }
      const params = {
        avatar: avatarUrl,
        nick_name: nickname
      };
      await postPrivateUserWxSave(params);
      store.setUserInfo(params);
      store.setIsNewUser(false);
      this.setData({ show: false });
      wx.showToast({ title: "保存成功" });
    }
  }
});
