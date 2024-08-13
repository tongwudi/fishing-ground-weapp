// @ts-ignore
/* eslint-disable */
import { request } from '../utils/request';

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

/** 获取鱼种列表 GET /private/fish/admin/fish/list */
export async function getPrivateFishAdminFishList(options?: { [key: string]: any }) {
  return request<API.Response & { code?: number; data?: API.FishesPondFish[]; message?: string }>(
    '/private/fish/admin/fish/list',
    {
      method: 'GET',
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

/** 新增鱼种 POST /private/fish/admin/fish/type/add */
export async function postPrivateFishAdminFishTypeAdd(
  body: API.FishesPondFish[],
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: API.FishesPondFish[]; message?: string }>(
    '/private/fish/admin/fish/type/add',
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

/** 删除鱼种 POST /private/fish/admin/fish/type/delete */
export async function postPrivateFishAdminFishTypeOpenApiDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postPrivateFishAdminFishType_openAPI_deleteParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: string; message?: string }>(
    '/private/fish/admin/fish/type/delete',
    {
      method: 'POST',
      params: {
        ...params,
      },
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

/** 添加图片 POST /private/fish/admin/photo/add */
export async function postPrivateFishAdminPhotoAdd(
  body: {
    /** 来源 */
    source: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: string; message?: string }>(
    '/private/fish/admin/photo/add',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: body,
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

/** 删除鱼塘 POST /private/fish/admin/pond/delete */
export async function postPrivateFishAdminPondOpenApiDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postPrivateFishAdminPond_openAPI_deleteParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: string; message?: string }>(
    '/private/fish/admin/pond/delete',
    {
      method: 'POST',
      params: {
        ...params,
      },
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

/** 转让钓场 POST /private/fish/admin/transfer */
export async function postPrivateFishAdminTransfer(
  body: API.TransferFishingGroundRequest,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.TransferFishingGroundRequest; message?: string }
  >('/private/fish/admin/transfer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 视频上传 POST /private/fish/admin/video/add */
export async function postPrivateFishAdminVideoAdd(
  body: {
    /** 文件名 */
    name: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: string; message?: string }>(
    '/private/fish/admin/video/add',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: body,
      ...(options || {}),
    },
  );
}
