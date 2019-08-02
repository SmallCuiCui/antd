import React,{Component} from "react"
import { Card, Table, Button, message, Modal } from 'antd';
import {getList, dell} from "../../api"

const { confirm } = Modal;

export default class List extends Component{
	constructor(props){
		super(props)
		var that = this
		this.state = {
			list: [],
			count: 0,
			page: 1,
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
					render: (text, record) =><Button onClick={that.remove.bind(that,record.key)}>删除</Button>
				}
			]
		}
		this.getData = this.getData.bind(this)
		this.page = this.page.bind(this)
	}
	remove = (id)=>{
		this.showConfirm(id)
	}
	showConfirm = (id)=> {
		let that = this
		confirm({
			title: '你确定删除此条记录吗？',
			content: 'Some descriptions',
			onOk() {
				dell(id).then(resp => {
					if(resp.data.status === 0){
						message.success("删除成功")
						that.getData(that.state.page,4)
					}
				})
			},
			onCancel() {
				// console.log('Cancel');
			},
		});
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
		this.setState({
			page: page
		})
		this.getData(page,pageSize)
	}
	goAdd = () =>{
		this.props.history.push("/home/add")
	}
	render(){
		return  <div>
			<Card title="用户列表" bordered={false} extra={<Button onClick={this.goAdd}>添加</Button>}>
				<Table dataSource={this.state.list} columns={this.state.columns} 
					pagination={{total:this.state.count,pageSize:4,onChange:this.page}} /> 
			</Card>
  </div>
	}
}