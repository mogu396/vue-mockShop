import request from '@/plugins/axios/request'

export function getHomeInfo(){
  return request({
    url:'/home/multidata',
    method:'get'
  })
}
