import axios from "axios"

var instance = axios.create({
  baseURL: "/hd",
  headers: {"content-type":"application/json"}
})

export const getList = (page,pageSize) => {
  return instance.get("/pageList",{params:{page,pageSize}})
}

export const login = (username,password) => {
  return instance.posh("/users/login",{username,password})
}