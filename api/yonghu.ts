// @ts-ignore
/* eslint-disable */
import { request } from '../utils/request';

/** 登陆 登陆 POST /base/system/login */
export async function postBaseSystemLogin(body: API.User, options?: { [key: string]: any }) {
  return request<
    API.Response & { code?: number; data?: API.LoginResponse; msg?: string; success?: boolean }
  >('/base/system/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册 注册 POST /base/system/register */
export async function postBaseSystemRegister(
  body: API.UserRequest,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.User; msg?: string; success?: boolean }
  >('/base/system/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取微信唯一标识 获取微信唯一标识 GET /base/system/wx/openid */
export async function getBaseSystemWxOpenid(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBaseSystemWxOpenidParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: string; msg?: string; success?: boolean }>(
    '/base/system/wx/openid',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取用户信息 获取用户信息 GET /private/user/info */
export async function getPrivateUserInfo(options?: { [key: string]: any }) {
  return request<
    API.Response & { code?: number; data?: API.User; msg?: string; success?: boolean }
  >('/private/user/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取用户列表 获取用户列表 GET /private/user/list */
export async function getPrivateUserList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateUserListParams,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.User; msg?: string; success?: boolean }
  >('/private/user/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增权限 POST /private/user/permission/create */
export async function postPrivateUserPermissionCreate(
  body: API.Permission,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: string; msg?: string; success?: boolean }>(
    '/private/user/permission/create',
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

/** 获取当前用户权限 GET /private/user/permission/current */
export async function getPrivateUserPermissionCurrent(options?: { [key: string]: any }) {
  return request<
    API.Response & { code?: number; data?: API.Permission[]; msg?: string; success?: boolean }
  >('/private/user/permission/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 删除权限 DELETE /private/user/permission/delete */
export async function deletePrivateUserPermissionOpenApiDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePrivateUserPermission_openAPI_deleteParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: string; msg?: string; success?: boolean }>(
    '/private/user/permission/delete',
    {
      method: 'DELETE',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取权限详情 GET /private/user/permission/info */
export async function getPrivateUserPermissionInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateUserPermissionInfoParams,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.Permission; msg?: string; success?: boolean }
  >('/private/user/permission/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取权限列表 GET /private/user/permission/list */
export async function getPrivateUserPermissionList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateUserPermissionListParams,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.Permission[]; msg?: string; success?: boolean }
  >('/private/user/permission/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑权限 PUT /private/user/permission/update */
export async function putPrivateUserPermissionUpdate(
  body: API.Permission,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: string; msg?: string; success?: boolean }>(
    '/private/user/permission/update',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 编辑个人资料 编辑个人资料 PUT /private/user/profile/update */
export async function putPrivateUserProfileUpdate(
  body: API.User,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.User; msg?: string; success?: boolean }
  >('/private/user/profile/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增角色 新增角色 POST /private/user/role/create */
export async function postPrivateUserRoleCreate(body: API.Role, options?: { [key: string]: any }) {
  return request<
    API.Response & { code?: number; data?: API.Role; msg?: string; success?: boolean }
  >('/private/user/role/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前用户角色 获取当前用户角色 GET /private/user/role/current */
export async function getPrivateUserRoleCurrent(options?: { [key: string]: any }) {
  return request<API.Response & { code?: number; data?: string; msg?: string; success?: boolean }>(
    '/private/user/role/current',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 删除角色 删除角色 DELETE /private/user/role/delete */
export async function deletePrivateUserRoleOpenApiDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePrivateUserRole_openAPI_deleteParams,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.Role; msg?: string; success?: boolean }
  >('/private/user/role/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取角色详情 获取角色详情 GET /private/user/role/info */
export async function getPrivateUserRoleInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateUserRoleInfoParams,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.Role; msg?: string; success?: boolean }
  >('/private/user/role/info', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 角色列表 角色列表 GET /private/user/role/list */
export async function getPrivateUserRoleList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateUserRoleListParams,
  options?: { [key: string]: any },
) {
  return request<
    API.Response & { code?: number; data?: API.Role; msg?: string; success?: boolean }
  >('/private/user/role/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 编辑角色 编辑角色 PUT /private/user/role/update */
export async function putPrivateUserRoleUpdate(body: API.Role, options?: { [key: string]: any }) {
  return request<
    API.Response & { code?: number; data?: API.Role; msg?: string; success?: boolean }
  >('/private/user/role/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据用户id获取角色 根据用户id获取角色 GET /private/user/role/user */
export async function getPrivateUserRoleUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPrivateUserRoleUserParams,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: string; msg?: string; success?: boolean }>(
    '/private/user/role/user',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 分配用户角色 分配用户角色 POST /private/user/role/user */
export async function postPrivateUserRoleUser(
  body: API.UserRoleRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: string; msg?: string; success?: boolean }>(
    '/private/user/role/user',
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

/** 保存微信用户信息 该接口用于保存微信用户信息 POST /private/user/wx/save */
export async function postPrivateUserWxSave(
  body: API.WxUserRequest,
  options?: { [key: string]: any },
) {
  return request<API.Response & { code?: number; data?: string; msg?: string; success?: boolean }>(
    '/private/user/wx/save',
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
