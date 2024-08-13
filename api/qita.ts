// @ts-ignore
/* eslint-disable */
import { request } from '../utils/request';

/** 存储视频路径到数据库 存储视频路径到数据库 POST /base/system/save/video */
export async function postBaseSystemSaveVideo(
  body: API.VideoConfig,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.File; msg?: string; success?: boolean }
  >('/base/system/save/video', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除文件 DELETE /private/other/file/delete */
export async function deletePrivateOtherFileOpenApiDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePrivateOtherFile_openAPI_deleteParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: string; msg?: string; success?: boolean }>(
    '/private/other/file/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 文件列表 GET /private/other/file/list */
export async function getPrivateOtherFileList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateOtherFileListParams,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.File[]; msg?: string; success?: boolean }
  >('/private/other/file/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 文件上传 POST /private/other/file/upload */
export async function postPrivateOtherFileUpload(body: {}, options?: { [key: string]: any }) {
  return request<API.Response & { code?: number; data?: string; msg?: string; success?: boolean }>(
    '/private/other/file/upload',
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
