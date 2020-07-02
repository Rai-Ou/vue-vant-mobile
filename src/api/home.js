import request from "@/utils/request";

// 更新新添加接口
export function add(query) {
  return request({
    url: "/ipcshopping/advertise/update/add",
    method: "post",
    data: query
  });
}
// 分页获取商品列表
export function list(query) {
  return request({
    url: "/ipcshopping/advertise/page/list",
    method: "post",
    data: query
  });
}
