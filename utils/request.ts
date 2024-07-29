/*
 * @Author: wangzhongjie
 * @Date: 2023-12-14 14:36:23
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2023-12-14 15:06:48
 * @Description:
 * @Email: UvDream@163.com
 */
import axios from "axios";
import {message} from "antd";

export async function request<T>(
    url: string,
    config: {
        method: string;
        params?: any;
        data?: any;
        [key: string]: any
    }
): Promise<T> {
    const {method, params, data, ...options} = config;

    const instance = axios.create({
        // baseURL: "http://88.22.24.24:8989",
        baseURL: "http://localhost:8989",
        timeout: 60000,
        headers: {
            "x-token": localStorage.getItem("token")
        }
    });
    instance.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    instance.interceptors.response.use(
        (response) => {
            if (response.data.code === 50000) {
                message.error("登录过期，请重新登录")
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                localStorage.removeItem("user");
                //     退出登录页面
                window.location.href = "/login"
            }
            if (response.data.code !== 200) {
                message.error(response.data.msg)
                return Promise.reject(response.data.msg);
            }

            return response.data;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return instance.request({
        url,
        method,
        params,
        data,
        ...options,
    });
}
