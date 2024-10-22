// @ts-ignore
/* eslint-disable */
import { request } from '../utils/request';

/** 编辑/新增钓位 POST /private/fish/admin/spot/edit */
export async function postPrivateFishAdminSpotEdit(
  body: API.FishingSpotEdit,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; message?: string }>(
    '/private/fish/admin/spot/edit',
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

/** 获取塘口钓位列表 GET /private/fish/admin/spot/list */
export async function getPrivateFishAdminSpotList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateFishAdminSpotListParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: API.FishingSpot[]; message?: string }>(
    '/private/fish/admin/spot/list',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}
