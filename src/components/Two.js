import React,{Component} from "react"
import {withRouter} from "react-router-dom"
@withRouter
class Two extends Component{
	render(){
		console.log(this.props)
		return <div>
			two
		</div>
	}
}
export default Two