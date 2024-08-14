import { BehaviorWithStore } from "mobx-miniprogram-bindings";
import { store } from "@/store/index";

export const mainBehavior = BehaviorWithStore({
  storeBindings: {
    store,
    fields: [
      "anglingSiteName",
      "isLogin",
      "userInfo",
      "isOnline",
      "groupId",
      "token",
      "role"
    ],
    actions: [
      "setToken",
      "setRole",
      "setUserInfo",
      "setGroupId",
      "setIsOnline",
      "setAnglingSiteName",
      "resetStore"
    ]
  }
});
