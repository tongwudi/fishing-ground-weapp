import http from "@/utils/request";

export const userList = () => http.get("/private/user/list");
