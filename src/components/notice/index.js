import React,{Component} from "react"
import {Card, List, Avatar, Button, Spin, Badge} from "antd"
import {connect} from "react-redux"
import actionCreator from "../../store/actionCreator"
var mapState = (state)=>({
	count: state.list.filter(item => !item.read).length,
	list: state.list,
	loading: state.loading
})

@connect(mapState,actionCreator)
class notice extends Component{
	constructor(props){
		super(props)
		this.state = {
		}
	}
	set(id){
		this.props.markById(id)
	}
	render(){
		return <div>
		<Spin spinning={this.props.loading}>
			<Card title="通知中心" bordered={false} extra={<Button onClick={this.props.markAll}>全部标记为已读</Button>}>
		      <List
			    itemLayout="horizontal"
			    dataSource={this.props.list}
			    renderItem={item => (
				      <List.Item extra={<Button disabled={item.read} onClick={this.set.bind(this,item.id)}>标记为已读</Button>}>
				        <List.Item.Meta
				          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
				          title={<a href="https://ant.design">{item.title}<Badge dot={!item.read}></Badge></a>}
				          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
				        />
				      </List.Item>
				    )}
			  />
		    </Card>
		</Spin>
	</div>
	}
}
export default notice