// 获取小程序帐号信息
const { miniProgram } = wx.getAccountInfoSync();
// 获取小程序版本
const { envVersion } = miniProgram;

// 小程序版本对照路径
const baseApi = {
  // 开发版
  develop: "https://uvdream.cn/fish",
  // 体验版  mock数据
  trial: "https://uvdream.cn/fish",
  // 正式版
  release: "https://uvdream.cn/fish"
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
