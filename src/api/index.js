import axios from "axios"
// import { config } from "_rxjs@6.5.2@rxjs";

var instance = axios.create({
  baseURL: "/hd",
  headers: {"content-type":"application/json"}
})

instance.interceptors.request.use(config => {
  if(sessionStorage.getItem("token")){
    config.headers["token"] = sessionStorage.getItem("token")
  }
  return config
})

instance.interceptors.response.use(resp => {
  // 后端做了拦截，如果请求中携带过去的token验证失败，或者没有token，都无法请求到数据，
  // 并且返回携带message的data。根据这个message进行页面跳转
  if(resp.data.message){
    window.location.href = "/login"
  }
  return resp
})

export const getList = (page,pageSize) => {
  return instance.get("/pageList",{params:{page,pageSize}})
}

export const getLogin = (username,password) => {
  return instance.post("/users/login",{username,password})
}

export const getadd = (name,age) => {
  return instance.post("add",{name,age})
}

export const Logout = () => {
  return instance.post("/users/quit")
}

export const dell = (id) => {
  return instance.post("/del",{id})
}