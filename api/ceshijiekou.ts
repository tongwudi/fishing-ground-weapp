import { request } from '../utils/request';
/** 接口测试接口 接口测试接口 GET /public/base/test */
export async function getPublicBaseTest(options?: { [key: string]: any }) {
  return request<string>('/public/base/test', {
    method: 'GET',
    ...(options || {}),
  });
}
