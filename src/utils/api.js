import request from '@/utils/request'
import { getSign } from '@/utils/sign'

// 登录
export function login (parms) {
  return request.post('', getSign(parms))
}
// 首页数据
export function page (parms) {
  return request.post('/shop/page?appversion=3', getSign(parms))
}
// 首页分类数据
export function topic (parms) {
  return request.post('/shop/Topic', getSign(parms))
}
// 分类
export function getnavs (parms) {
  return request.get('/Product/Category?' + getSign(parms))
}
// 分类内容
export function getlist (parms) {
  return request.get('/Product/CategoryProducts?' + getSign(parms))
}
