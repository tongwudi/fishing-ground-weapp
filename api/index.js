import http from "@/utils/request";

// 获取授权
export const authorize = (params) => http.get("/base/system/wx/openid", params);
// 登录
export const login = (params) => http.post("/base/system/login", params);
// 获取钓场信息
export const fishPlaceDetails = (params) => http.get("/public/fish/grounds", params);
// 获取钓场列表
export const fishPlaceList = () => http.get("/public/fish/list");
// 新增钓场
export const addFishPlace = (params) => http.post("/private/fish/admin/add", params);
