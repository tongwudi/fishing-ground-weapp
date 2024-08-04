import { BehaviorWithStore } from "mobx-miniprogram-bindings";
import { store } from "@/store/index";

export const loginBehavior = BehaviorWithStore({
  storeBindings: {
    store,
    actions: ["setToken", "setRole", "setUserInfo"]
  },
})

export const mineBehavior = BehaviorWithStore({
  storeBindings: {
    store,
    fields: ["isLogin", "userInfo"],
    actions: ["setToken", "setRole", "setUserInfo"]
  },
})

export const groupBehavior = BehaviorWithStore({
  storeBindings: {
    store,
    fields: ["userInfo"],
  },
})