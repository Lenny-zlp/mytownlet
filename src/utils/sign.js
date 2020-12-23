import md5 from 'js-md5'
import qs from 'qs'
// 对参数进行加密处理
export function getSign (parms) {
  const base = { key: 'JiBaoAppKey' }
  let ordered = {}
  let sign = ''
  if (parms) {
    Object.keys(parms).sort().forEach(function (key) {
      ordered[key] = parms[key]
    })
  } else {
    ordered = {}
  }
  const obj = { ...ordered, ...base }
  if (Object.keys(obj).length === 1) {
    sign = md5(obj).toUpperCase()
  } else {
    sign = md5(qs.stringify(obj)).toUpperCase()
  }
  const data = qs.stringify({ ...ordered, sign })
  return data
}
