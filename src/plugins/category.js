import request from '@/plugins/axios/request'

export function getCategoryInfo(){
  return request({
    url:'/category',
    method:'get'
  })
}