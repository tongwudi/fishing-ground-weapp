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
// 获取塘口信息
export const fishPondDetails = (params) => http.get("/public/fish/pond", params);
// 获取塘口列表
export const fishPondList = (params) => http.get("/private/fish/admin/pond/list", params);
// 新增塘口
export const addFishPond = (params) => http.post("/private/fish/admin/pond/add", params);