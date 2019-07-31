import React,{Component} from "react"
import { Layout, Menu, Icon, Dropdown, Badge } from 'antd';
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
const { Header, Content, Sider } = Layout;

var mapState = (state)=>({
	count: state.list.filter(item => !item.read).length
})
@withRouter
@connect(mapState)

class Admin extends Component{
	constructor(props){
		super(props)
		this.state = {
		}
		this.go = this.go.bind(this)
	}
	go({item,key,keyPath, domEvent}){
		this.props.history.push(key)
	}
	menu = ()=> {
		return (
		  <Menu>
		    <Menu.Item key="/home/notice" onClick={this.go}>
		      <span>通知中心</span><Badge dot={ this.props.count!==0 }></Badge>
		    </Menu.Item>
		    <Menu.Item key="/home/setting" onClick={this.go}>
		      <span>设置</span>
		    </Menu.Item>
		   <Menu.Item key="/home/quit" onClick={this.go}>
		      <span>退出</span>
		    </Menu.Item>
		  </Menu>
		);
	}
	render(){
		return <Layout>
	    <Header className="header" style={{color: "#fff",display: "flex"}}>
	    	<div style={{width: "90%"}}>国际科达信息系统</div>
	    	<Dropdown overlay={this.menu()} trigger={['click']}>
	    		
				    <span className="ant-dropdown-link" href="#">
				    	<Badge count={this.props.count} offset={[0,-12]}>
				      		导航目录<Icon type="down" />
				      	</Badge>
				    </span>
			    
			</Dropdown>
	    </Header>
	    <Layout>
	      <Sider width={200} style={{ background: '#fff' }}>
	         <Menu
	         theme="dark"
	         mode="inline"
	         style={{height: '100%'}}
	         selectedKeys={[this.props.location.pathname]}
	         defaultOpenKeys={['/home/list']}>
	            <Menu.Item key="/home/list" onClick={this.go}>
	              <Icon type="unordered-list" />
	              <span>列表</span>
	            </Menu.Item>
	            <Menu.Item key="/home/dashboard" onClick={this.go}>
	              <Icon type="dashboard" />
	              <span>仪表盘</span>
	            </Menu.Item>
	            <Menu.Item key="/home/setting" onClick={this.go}>
	             <Icon type="setting" />
	              <span>设置</span>
	            </Menu.Item>
             </Menu>
	      </Sider>
	      <Layout style={{ padding: '0 24px 24px' }}>
	        <Content
	          style={{
	            background: '#fff',
	            padding: 24,
	            margin: 0,
	            minHeight: 280,
	          }}
	        >
	          {this.props.children}
	        </Content>
	      </Layout>
	    </Layout>
	  </Layout>
	}
}
export default Admin