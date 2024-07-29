import http from "@/utils/request";

// 获取微信唯一标识
const authorize = params => http.get("/base/system/wx/openid", params);
// 登录
const login = params => http.post("/base/system/login", params);
// 获取钓场列表
const groupList = () => http.get("/public/fish/list");
// 获取钓场信息
const groupDetails = params => http.get("/public/fish/grounds", params);
// 新增钓场
const addGroup = params => http.post("/private/fish/admin/add", params);
// 获取塘口列表
const fishPondList = params =>
  http.get("/private/fish/admin/pond/list", params);
// 获取塘口信息
const fishPondDetails = params => http.get("/public/fish/pond", params);
// 新增塘口
const addFishPond = params => http.post("/private/fish/admin/pond/add", params);

export {
  authorize,
  login,
  groupList,
  groupDetails,
  addGroup,
  fishPondList,
  fishPondDetails,
  addFishPond
};
