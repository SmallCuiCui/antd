import React,{Component} from "react"
import {Route} from "react-router-dom"

export default class Myroute extends Component{
  render () {
    const {path, component: Com,users} = this.props
    var hasPermission = users.some((item)=>item === sessionStorage.getItem("user"))
    return <Route path={path} render={(props)=>{
      return hasPermission ? <Com /> : <div>没有权限</div>
    }} />
  }
}

