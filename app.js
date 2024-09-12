// app.js
import { store } from "@/store/index";
import { getPrivateFishAdminList } from "@/api/index";
// import { authorize } from "@/api/index";

App({
  onLaunch() {
    if (store.isFish) {
      // 如果是钓场身份，获取第一个钓场
      this.getGroupList();
      // 如果是钓场身份，跳转到钓场首页
      wx.reLaunch({ url: "/pages/group/my/my" });
    }

    // // 微信登陆
    // wx.login({
    //   async success({ code }) {
    //     console.log("wx.login：", res);
    //     if (code) {
    //       const authRes = await authorize({ code });
    //       // wx.setStorageSync("openid", authRes.openid);
    //       // wx.setStorageSync("sessionKey", authRes.session_key);
    //     } else {
    //       wx.showToast({ title: "授权失败，请重新授权", icon: "error" });
    //     }
    //   }
    // });
  },
  async getGroupList() {
    const { data: groundList } = await getPrivateFishAdminList();
    if (groundList.length == 0) return;
    store.setGroupId(groundList[0].id);
    store.setAnglingSiteName(groundList[0].name);
  },
  globalData: {
    userTabbar: [
      {
        pagePath: "/pages/home/home",
        text: "首页",
        iconPath: "/assets/images/home.png",
        selectedIconPath: "/assets/images/home-active.png"
      },
      {
        pagePath: "/pages/mine/mine",
        text: "我的",
        iconPath: "/assets/images/mine.png",
        selectedIconPath: "/assets/images/mine-active.png"
      }
    ],
    fishTabbar: [
      {
        pagePath: "/pages/group/my/my",
        text: "我的钓场",
        iconPath: "../assets/images/home.png",
        selectedIconPath: "../assets/images/home-active.png"
      },
      {
        pagePath: "/pages/mine/mine",
        text: "钓场管理",
        iconPath: "../assets/images/mine.png",
        selectedIconPath: "../assets/images/mine-active.png"
      },
      {
        pagePath: "/pages/put/add/add",
        text: "放鱼",
        iconPath: "../assets/images/fish.png",
        selectedIconPath: "../assets/images/fish-active.png",
        isCenter: true
      }
    ]
  }
});
