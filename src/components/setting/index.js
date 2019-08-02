import React,{Component} from "react"
import { Upload, Icon } from "antd"
import axios from "axios"

export default class Setting extends Component{
	constructor(props){
		super(props)
		this.state = {
			loading: false,
			imageUrl: ""
		}
	}
	upload = ({file}) => {
		var data = new FormData()
		data.append("Token","3b95a41115d54c6caacf0d66dd1cf13609a2e5e0:RpniAp263lptXUF5WQRG6hLvcn0=:eyJkZWFkbGluZSI6MTU2NDcxNDgyOCwiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNjk1ODg3IiwiYWlkIjoiMTYxOTg1NyIsImZyb20iOiJmaWxlIn0=")
		data.append("file",file)
		axios.post("http://up.imgapi.com/",data).then(resp => {
			console.log(resp)
			if(resp.status === 200){
				this.setState({
					imageUrl: resp.data.linkurl
				})
			}
		})
	}
	render(){
		return <div>
			<Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
				showUploadList={false}
				customRequest={this.upload} 
      >
        {
				this.state.imageUrl ? 
				<img style={{width: "200px",height: "200px"}} alt="" src={this.state.imageUrl} /> : 
				<div>
					<Icon type={this.state.loading ? 'loading' : 'plus'} />
					<div className="ant-upload-text">Upload</div>
				</div>
			}
      </Upload>
			
		</div>
	}
}