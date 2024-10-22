// @ts-ignore
/* eslint-disable */
import { request } from '../utils/request';

/** 取消正钓报名 POST /private/fish/admin/cancel/registration */
export async function postPrivateFishAdminCancelRegistration(
  body: API.FishingRegistration,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; message?: string }>(
    '/private/fish/admin/cancel/registration',
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

/** 接龙 POST /private/fish/admin/connection */
export async function postPrivateFishAdminConnection(
  body: API.Connection,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; message?: string }>(
    '/private/fish/admin/connection',
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

/** 设置接龙配置 POST /private/fish/admin/connection/configuration */
export async function postPrivateFishAdminConnectionConfiguration(
  body: API.ConnectionConfiguration,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; message?: string }>(
    '/private/fish/admin/connection/configuration',
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

/** 获取接龙配置列表 GET /private/fish/admin/connection/list */
export async function getPrivateFishAdminConnectionList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateFishAdminConnectionListParams,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.ConnectionConfiguration[]; message?: string }
  >('/private/fish/admin/connection/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 正钓抽号 GET /private/fish/admin/draw */
export async function getPrivateFishAdminDraw(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateFishAdminDrawParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; message?: string }>('/private/fish/admin/draw', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取自己抽号情况 GET /private/fish/admin/draw/self */
export async function getPrivateFishAdminDrawSelf(options?: { [key: string]: any }) {
  return request<API.Response & { code?: number; data?: API.DrawRecord; message?: string }>(
    '/private/fish/admin/draw/self',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 获取钓位抽号情况 GET /private/fish/admin/draw/spot */
export async function getPrivateFishAdminDrawSpot(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateFishAdminDrawSpotParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: API.FishingSpot[]; message?: string }>(
    '/private/fish/admin/draw/spot',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 清除钓位占用情况 DELETE /private/fish/admin/draw/spot */
export async function deletePrivateFishAdminDrawSpot(options?: { [key: string]: any }) {
  return request<API.Response & { code?: number; message?: string }>(
    '/private/fish/admin/draw/spot',
    {
      method: 'DELETE',
      ...(options || {}),
    },
  );
}

/** 获取自己所有的钓鱼记录 GET /private/fish/admin/record/fish */
export async function getPrivateFishAdminRecordFish(options?: { [key: string]: any }) {
  return request<
    API.Response & { code?: number; data?: API.FishingTimeRecord[]; message?: string }
  >('/private/fish/admin/record/fish', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据塘口id查询正在开钓的记录 GET /private/fish/admin/record/fish/pond */
export async function getPrivateFishAdminRecordFishPond(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateFishAdminRecordFishPondParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: API.FishingTimeRecord; message?: string }>(
    '/private/fish/admin/record/fish/pond',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 钓场老板获取目前在钓的人列表 GET /private/fish/admin/record/fishing */
export async function getPrivateFishAdminRecordFishing(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateFishAdminRecordFishingParams,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.FishingTimeRecordAdmin[]; message?: string }
  >('/private/fish/admin/record/fishing', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 钓场老板获取塘口在钓列表 GET /private/fish/admin/record/pond/fishing */
export async function getPrivateFishAdminRecordPondFishing(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateFishAdminRecordPondFishingParams,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.FishingTimeRecord[]; message?: string }
  >('/private/fish/admin/record/pond/fishing', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取今日鱼情 GET /private/fish/admin/record/today */
export async function getPrivateFishAdminRecordToday(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateFishAdminRecordTodayParams,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.FishingTimeRecordAdmin[]; message?: string }
  >('/private/fish/admin/record/today', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 正钓报名 POST /private/fish/admin/registration */
export async function postPrivateFishAdminRegistration(
  body: API.FishingRegistration,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; message?: string }>(
    '/private/fish/admin/registration',
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

/** 开始计时钓鱼 POST /private/fish/admin/start/fish */
export async function postPrivateFishAdminStartFish(
  body: API.FishingTimeRecord,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: string; message?: string }>(
    '/private/fish/admin/start/fish',
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

/** 分页查询活动列表 GET /public/fish/activity/list */
export async function getPublicFishActivityList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPublicFishActivityListParams,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & {
      code?: number;
      data?: API.ConnectionConfiguration[];
      message?: string;
      total?: number;
    }
  >('/public/fish/activity/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取接龙配置 GET /public/fish/connection */
export async function getPublicFishConnection(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPublicFishConnectionParams,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.ConnectionConfiguration; message?: string }
  >('/public/fish/connection', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
