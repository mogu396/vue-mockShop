import axios from "axios";
const My_BASE_URL ='http://localhost:8090'
export function request(config) {
  const instance = axios.create({
    baseURL: My_BASE_URL,
    timeout: 5000
  });

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return Promise.reject(err)
  })

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    return Promise.reject(err)
  });

  return instance(config);
}

export default request
