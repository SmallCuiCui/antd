import React,{Component} from "react"
import { Card, Table, Button } from 'antd';
import {getList} from "../../api"

export default class List extends Component{
	constructor(props){
		super(props)
		this.state = {
			list: [],
			count: 0,
			columns : [
				{
					title: 'name',
					dataIndex: 'name',
					width: '35%',
					editable: true,
				},
				{
					title: 'age',
					dataIndex: 'age',
					width: '35%',
					editable: true,
				},
				{
					title: 'Action',
					key: 'action',
					width: "30%",
					render: () =><Button>删除</Button>
				}
			]
		}
		this.getData = this.getData.bind(this)
		this.page = this.page.bind(this)
	}
	componentDidMount(){
		this.getData(1,10)
	}
	getData(page,pageSize){
		getList(page,pageSize).then(resp => {
			if(resp.data.status === 0){
				var list = resp.data.list.map(item => {
					return {
						"key":item._id,
   					"name":item.name,
   					"age":item.ag
					}
				})

				this.setState({
					list: list,
					count: resp.data.count
				})
			}
		})
	}
	page(page,pageSize){
		this.getData(page,pageSize)
	}
	render(){
		return  <div>
			<Card title="用户列表" bordered={false}>
			<Table dataSource={this.state.list} columns={this.state.columns} 
				pagination={{total:this.state.count,pageSize:4,onChange:this.page}} /> 
			</Card>
  </div>
	}
}