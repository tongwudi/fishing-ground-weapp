// @ts-ignore
/* eslint-disable */
import { request } from '../utils/request';

/** 获取自己所有的钓鱼记录 GET /private/fish/admin/record/fish */
export async function getPrivateFishAdminRecordFish(options?: { [key: string]: any }) {
  return request<
    API.Response & { code?: number; data?: API.FishingTimeRecord[]; message?: string }
  >('/private/fish/admin/record/fish', {
    method: 'GET',
    ...(options || {}),
  });
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
