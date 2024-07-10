// 获取小程序帐号信息
const { miniProgram } = wx.getAccountInfoSync();
// 获取小程序版本
const { envVersion } = miniProgram;

// 小程序版本对照路径
const baseApi = {
  // 开发版
  develop: "http://124.223.8.237:8980",
  // 体验版  mock数据
  trial: "http://127.0.0.1:4523/m1/3772395-3404252-default",
  // 正式版
  release: "https://release.com"
};

const env = {};
if (!envVersion) {
  // 当手机处于低版本的情况下
  console.log("当前环境异常");
  env.baseURL = "https://release.com";
} else {
  env.baseURL = baseApi[envVersion];
}

export { env };
