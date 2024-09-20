declare namespace API {
  type AnglingSite = {
    /** 钓场地址 */
    address?: string;
    /** 钓场地址名 */
    address_name?: string;
    /** 营业时间 */
    business_hours?: string;
    create_time?: string;
    delete_time?: DeletedAt;
    /** 钓场描述 */
    description?: string;
    /** 钓场图片url */
    files?: File[];
    /** 塘口 */
    fishes_pond?: FishesPond[];
    id?: string;
    /** 钓场纬度 */
    latitude?: string;
    /** 钓场经度 */
    longitude?: string;
    /** 钓场名 */
    name?: string;
    /** 钓场联系电话 */
    phone?: string;
    /** 图片 */
    photo_ids?: string[];
    /** 认证状态 0 未认证 1 认证 */
    status?: string;
    update_time?: string;
    /** 塘主 */
    user?: User;
    /** 塘主 */
    user_id?: string;
  };

  type DeletedAt = {
    time?: string;
    /** Valid is true if Time is not NULL */
    valid?: boolean;
  };

  type deletePrivateOtherFile_openAPI_deleteParams = {
    /** 文件id */
    id: string;
  };

  type deletePrivateUserPermission_openAPI_deleteParams = {
    /** 权限ID */
    id: string;
  };

  type deletePrivateUserRole_openAPI_deleteParams = {
    /** 角色ID */
    id: string;
  };

  type File = {
    create_time?: string;
    delete_time?: DeletedAt;
    id?: string;
    /** 文件名 */
    name?: string;
    /** 文件路径 */
    path?: string;
    /** 存储地方 */
    position?: string;
    /** 文件大小 */
    size?: number;
    /** 来源 */
    source?: string;
    /** 文件类型 */
    type?: string;
    update_time?: string;
    user?: User;
    /** 上传者 */
    user_id?: string;
    /** 视频处理状态默认处理中为0 处理完成为1 */
    video_status?: number;
  };

  type FileRequest = {
    path?: string;
  };

  type FishedConfig = {
    create_time?: string;
    delete_time?: DeletedAt;
    id?: string;
    /** 是否上线 */
    is_online?: boolean;
    update_time?: string;
  };

  type FishesCommonRequest = {
    id?: string;
  };

  type FishesPond = {
    /** 钓场ID */
    angling_site_id?: string;
    /** 收费标准 */
    charge_standard?: string;
    create_time?: string;
    delete_time?: DeletedAt;
    /** 塘口描述 */
    description?: string;
    /** 时长 */
    duration?: number;
    /** FishesPondPhotos []FishesPondPhoto `json:"fishes_pond_photos"` */
    files?: File[];
    /** 鱼种,不关联,直接拿前端存储 */
    fishes?: string;
    id?: string;
    /** 塘口名 */
    name?: string;
    /** 前端提交使用 */
    photo_ids?: string[];
    photos?: string[];
    /** 钓位数 */
    position_num?: number;
    put_fish_plans?: PutFishPlan[];
    /** 放鱼记录 */
    put_fish_records?: PutFishRecord[];
    /** 回鱼规则 */
    return_fish_rule?: string;
    /** 限竿规则 */
    rod_limit?: string;
    /** 塘口规则 */
    rule?: string;
    /** 塘口大小 */
    size?: number;
    /** 状态 */
    status?: number;
    update_time?: string;
    /** 水深 */
    water_depth?: string;
    /** 根据塘口设置视频水印还是钓场 */
    where_watermark?: number;
  };

  type FishesPondFish = {
    /** 钓场id */
    angling_site_id?: string;
    create_time?: string;
    delete_time?: DeletedAt;
    id?: string;
    /** 鱼种 */
    name?: string;
    update_time?: string;
  };

  type FishingDuration = {
    /** 时长 */
    duration?: number;
    /** 塘口id */
    pond_id?: string;
  };

  type FishingTimeRecord = {
    angling_site?: AnglingSite;
    angling_site_id?: string;
    create_time?: string;
    delete_time?: DeletedAt;
    /** 塘口 */
    fishes_pond?: FishesPond;
    /** 塘口id */
    fishes_pond_id?: string;
    id?: string;
    /** 座位号 */
    position_num?: number;
    /** 时长 */
    time?: string;
    update_time?: string;
    user?: User;
    user_id?: string;
  };

  type FishingTimeRecordAdmin = {
    /** 塘口 */
    fishes_pond?: FishesPond;
    /** 塘口id */
    fishes_pond_id?: string;
    fishing_time_record?: FishingTimeRecord[];
  };

  type getBaseSystemWxOpenidParams = {
    /** 微信code */
    code: string;
  };

  type getPrivateFishAdminBlackListParams = {
    /** 页码 */
    page: number;
    /** 每页数量 */
    page_size: number;
    /** 名称 */
    name?: string;
    /** 地址 */
    address?: string;
    /** 电话 */
    phone?: string;
  };

  type getPrivateFishAdminPondListParams = {
    /** 钓场id */
    id: string;
  };

  type getPrivateFishAdminRecordFishingParams = {
    /** 钓场ID */
    angling_site_id?: string;
  };

  type getPrivateFishAdminRecordTodayParams = {
    /** 钓场ID */
    angling_site_id?: string;
  };

  type getPrivateOtherFileListParams = {
    /** 页码 */
    page?: number;
    /** 每页数量 */
    page_size?: number;
    /** 文件名 */
    name?: string;
  };

  type getPrivateUserListParams = {
    /** 用户名 */
    user_name?: string;
    /** 昵称 */
    nick_name?: string;
    /** 手机号 */
    phone?: string;
    /** 邮箱 */
    email?: string;
    /** 性别 */
    gender?: string;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    page_size?: number;
  };

  type getPrivateUserPermissionInfoParams = {
    /** 权限ID */
    id: string;
  };

  type getPrivateUserPermissionListParams = {
    /** 权限名 */
    name?: string;
    /** 权限key */
    key?: string;
    /** 备注 */
    remark?: string;
    /** 页码 */
    page: number;
    /** 每页数量 */
    page_size: number;
  };

  type getPrivateUserRoleInfoParams = {
    /** 角色ID */
    id: string;
  };

  type getPrivateUserRoleListParams = {
    /** 角色标识 */
    key?: string;
    /** 角色备注 */
    remark?: string;
    /** 角色名称 */
    name?: string;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    page_size?: number;
  };

  type getPrivateUserRoleUserParams = {
    /** 用户ID */
    userId: string;
  };

  type getPublicFishGroundsParams = {
    /** 钓场id */
    id: string;
  };

  type getPublicFishListParams = {
    /** 页码 */
    page: number;
    /** 每页数量 */
    page_size: number;
    /** 钓场名称 */
    name?: string;
  };

  type getPublicFishPlanParams = {
    /** 塘口id */
    id: string;
  };

  type getPublicFishPondParams = {
    /** 塘口id */
    id: string;
  };

  type getPublicFishRecordParams = {
    /** 塘口id */
    id: string;
  };

  type LoginResponse = {
    role?: Role[];
    token?: string;
    user?: User;
  };

  type Permission = {
    chat_prefix?: string;
    create_time?: string;
    delete_time?: DeletedAt;
    id?: string;
    key?: string;
    name?: string;
    remark?: string;
    update_time?: string;
  };

  type PutFishPlan = {
    create_time?: string;
    delete_time?: DeletedAt;
    /** 鱼种 */
    fishes?: string;
    /** 塘口ID */
    fishes_pond_id?: string;
    id?: string;
    /** 数量 */
    num?: string;
    /** 放鱼时间 */
    put_time?: string;
    update_time?: string;
  };

  type PutFishRecord = {
    create_time?: string;
    delete_time?: DeletedAt;
    /** 放鱼视频 */
    files?: File[];
    /** 鱼种 */
    fishes?: string;
    /** 鱼塘id */
    fishes_pond_id?: string;
    id?: string;
    /** 放鱼数量 */
    put_num?: string;
    /** 备注 */
    remark?: string;
    update_time?: string;
    video_ids?: string[];
  };

  type Response = {
    code?: number;
    data?: any;
    msg?: string;
    success?: boolean;
  };

  type Role = {
    create_time?: string;
    delete_time?: DeletedAt;
    id?: string;
    /** 0 否 1 是 */
    is_default?: string;
    key?: string;
    menu_arr?: string[];
    name?: string;
    /** 权限ID */
    permission_ids?: string[];
    /** 关联到权限表 */
    permissions?: Permission[];
    remark?: string;
    update_time?: string;
  };

  type TransferFishingGroundRequest = {
    /** 钓场ID */
    angling_site_id?: string;
    /** 目标用户ID */
    target_user_id?: string;
    user_id?: string;
  };

  type User = {
    /** 头像 */
    avatar?: string;
    create_time?: string;
    delete_time?: DeletedAt;
    /** 邮箱 */
    email?: string;
    /** 性别 0 男 1 女 2 未知 */
    gender?: string;
    id?: string;
    /** 昵称 */
    nick_name?: string;
    /** 微信openid */
    open_id?: string;
    /** 密码 */
    password?: string;
    /** 手机号 */
    phone?: string;
    /** 微信二维码地址 */
    qr_code?: string;
    /** 推荐码 */
    recommend_code?: string;
    /** 个人简介 */
    remark?: string;
    roles?: Role[];
    /** 来源 */
    source?: string;
    update_time?: string;
    /** 用户名 */
    user_name?: string;
  };

  type UserRequest = {
    /** 头像 */
    avatar?: string;
    /** 邮箱 */
    email?: string;
    /** 性别 0 男 1 女 2 未知 */
    gender?: string;
    /** 昵称 */
    nick_name?: string;
    /** 密码 */
    password?: string;
    /** 手机号 */
    phone?: string;
    /** 推荐码 */
    recommend_code?: string;
    /** 个人简介 */
    remark?: string;
    /** 角色ID */
    role_ids?: string[];
    /** 来源 */
    source?: string;
    /** 用户名 */
    user_name?: string;
  };

  type UserRoleRequest = {
    role_ids?: string[];
    user_id?: string;
  };

  type VideoConfig = {
    path?: string;
  };

  type WxUserRequest = {
    /** 头像 */
    avatar?: string;
    /** 昵称 */
    nick_name?: string;
  };
}
