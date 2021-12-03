import request from '@/plugins/axios/request'

export function getDetailInfo(){
  return request({
    url:'/detail',
    method:'get'
  })
}