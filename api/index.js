import http from "@/utils/request";

// 微信登录（获取微信唯一标识）
export const authorize = params => http.get("/base/system/wx/openid", params);
// 账号登录
export const login = params => http.post("/base/system/login", params);
// 获取钓场列表
export const getGroupList = () => http.get("/public/fish/list");
// 获取钓场信息
export const groupDetails = params => http.get("/public/fish/grounds", params);
// 新增钓场
export const addGroup = params => http.post("/private/fish/admin/add", params);
// 获取塘口列表
export const getFishPondList = params => http.get("/private/fish/admin/pond/list", params);
// 获取塘口信息
export const fishPondDetails = params => http.get("/public/fish/pond", params);
// 新增塘口
export const addFishPond = params => http.post("/private/fish/admin/pond/add", params);
// 获取鱼种列表
export const getFishList = () => http.get("/private/fish/admin/fish/list");
// 新增鱼种
export const addFish = params => http.post("/private/fish/admin/fish/type/add", params);
// 获取放鱼记录列表
export const getPutFishList = () => http.get("/private/fish/admin/fish/record");
// 新增放鱼记录
export const addPutFish = params => http.post("/private/fish/admin/fish/add", params);
