import { BehaviorWithStore } from "mobx-miniprogram-bindings";
import { store } from "@/store/index";

export const loginBehavior = BehaviorWithStore({
  storeBindings: {
    store,
    actions: ["setToken", "setRole", "setUserInfo", "setGroupId","setAnglingSiteName"]
  }
});

export const mineBehavior = BehaviorWithStore({
  storeBindings: {
    store,
    fields: ["isLogin", "userInfo"],
    actions: ["resetStore"]
  }
});

export const groupIdBehavior = BehaviorWithStore({
  storeBindings: {
    store,
    fields: ["groupId"]
  }
});
