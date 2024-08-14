import { BehaviorWithStore } from "mobx-miniprogram-bindings";
import { store } from "@/store/index";

export const loginBehavior = BehaviorWithStore({
  storeBindings: {
    store,
    fields:["anglingSiteName"],
    actions: ["setToken", "setRole", "setUserInfo", "setGroupId", "setIsOnline","setAnglingSiteName"]
  }
});

export const mineBehavior = BehaviorWithStore({
  storeBindings: {
    store,
    fields: ["isLogin", "userInfo", "isOnline"],
    actions: ["resetStore"]
  }
});

export const groupIdBehavior = BehaviorWithStore({
  storeBindings: {
    store,
    fields: ["groupId","isOnline"]
  }
});
