// @ts-ignore
/* eslint-disable */
import { request } from '../utils/request';

/** 获取轮播图 GET /public/fish/banner */
export async function getPublicFishBanner(options?: { [key: string]: any }) {
  return request<API.Response>('/public/fish/banner', {
    method: 'GET',
    ...(options || {}),
  });
}

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

/** 查询用户名下钓场列表 GET /public/fish/list/user */
export async function getPublicFishListUser(options?: { [key: string]: any }) {
  return request<API.Response & { code?: number; data?: API.AnglingSite[]; message?: string }>(
    '/public/fish/list/user',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 获取放鱼计划 GET /public/fish/plan */
export async function getPublicFishPlan(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPublicFishPlanParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: API.PutFishPlan[]; message?: string }>(
    '/public/fish/plan',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
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

/** 获取塘口放鱼记录 GET /public/fish/record */
export async function getPublicFishRecord(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPublicFishRecordParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: API.PutFishRecord[]; message?: string }>(
    '/public/fish/record',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取设置 GET /public/fish/setting */
export async function getPublicFishSetting(options?: { [key: string]: any }) {
  return request<API.Response & { code?: number; data?: API.FishedConfig; message?: string }>(
    '/public/fish/setting',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
