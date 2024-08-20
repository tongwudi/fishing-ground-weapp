import { BehaviorWithStore } from "mobx-miniprogram-bindings";
import { store } from "@/store/index";

export const mainBehavior = BehaviorWithStore({
  storeBindings: {
    store,
    fields: [
      "token",
      "role",
      "userInfo",
      "groupId",
      "anglingSiteName",
      "isOnline",
      "isLogin",
      "isFish"
    ],
    actions: [
      "resetStore",
      "setToken",
      "setRole",
      "setUserInfo",
      "setGroupId",
      "setAnglingSiteName",
      "setIsOnline"
    ]
  }
});
