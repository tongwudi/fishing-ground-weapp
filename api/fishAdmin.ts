import { request } from '../utils/request';
import API from "./typings"
/** 新增钓场 POST /private/fish/admin/add */
export async function postPrivateFishAdminAdd(
  body: API.AnglingSite,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: API.AnglingSite; message?: string }>(
    '/private/fish/admin/add',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 获取黑坑列表 GET /private/fish/admin/black/list */
export async function getPrivateFishAdminBlackList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateFishAdminBlackListParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: API.AnglingSite[]; message?: string }>(
    '/private/fish/admin/black/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 放鱼 POST /private/fish/admin/fish/add */
export async function postPrivateFishAdminFishAdd(
  body: API.PutFishRecord,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: API.PutFishRecord; message?: string }>(
    '/private/fish/admin/fish/add',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 放鱼计划 POST /private/fish/admin/fish/plan */
export async function postPrivateFishAdminFishPlan(
  body: API.PutFishPlan[],
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: API.PutFishPlan[]; message?: string }>(
    '/private/fish/admin/fish/plan',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 钓场列表 GET /private/fish/admin/list */
export async function getPrivateFishAdminList(options?: { [key: string]: any }) {
  return request<API.Response & { code?: number; data?: API.AnglingSite[]; message?: string }>(
    '/private/fish/admin/list',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 新增鱼塘 POST /private/fish/admin/pond/add */
export async function postPrivateFishAdminPondAdd(
  body: API.FishesPond,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: API.FishesPond; message?: string }>(
    '/private/fish/admin/pond/add',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 塘口列表 GET /private/fish/admin/pond/list */
export async function getPrivateFishAdminPondList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateFishAdminPondListParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: API.FishesPond[]; message?: string }>(
    '/private/fish/admin/pond/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
