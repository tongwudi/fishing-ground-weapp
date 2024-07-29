import { request } from '../utils/request';
import API from "./typings"
/** 获取钓场信息 GET /public/fish/grounds */
export async function getPublicFishGrounds(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPublicFishGroundsParams,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/public/fish/grounds', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取钓场列表 GET /public/fish/list */
export async function getPublicFishList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPublicFishListParams,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/public/fish/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取塘口信息 GET /public/fish/pond */
export async function getPublicFishPond(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPublicFishPondParams,
  options?: { [key: string]: any },
) {
  return request<API.Response>('/public/fish/pond', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
