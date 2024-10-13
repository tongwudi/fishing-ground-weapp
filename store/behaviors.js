import { BehaviorWithStore } from "mobx-miniprogram-bindings";
import { store } from "@/store/index";

export const mainBehavior = BehaviorWithStore({
  storeBindings: {
    store,
    fields: [
      "token",
      "isNewUser",
      "role",
      "userInfo",
      "groupId",
      "anglingSiteName",
      "isLogin",
      "isFish"
    ],
    actions: [
      "resetStore",
      "setToken",
      "setIsNewUser",
      "setRole",
      "setUserInfo",
      "setGroupId",
      "setAnglingSiteName"
    ]
  }
});
