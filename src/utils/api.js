import request from '@/utils/request'
import { getSign } from '@/utils/sign'

// 登录
export function login (parms) {
  return request({
    method: 'POST',
    url: '/product/product',
    data: getSign(parms)
  })
}
// 首页数据
export function page (parms) {
  return request({
    method: 'POST',
    url: '/shop/page?appversion=3',
    data: getSign(parms)
  })
}
