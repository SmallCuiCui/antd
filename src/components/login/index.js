import React,{Component} from "react"
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import {getLogin} from "../../api"

class login extends Component{
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        getLogin(values.username, values.password).then(resp => {
          if(resp.data.status === 0){
            sessionStorage.setItem("token",resp.data.data.token)
            this.props.history.push("/")
          }
        })
      }
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return <Card title="登录" bordered={false} style={{"width": "40%","margin": "100px auto"}}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>

    </Card>
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(login);
export default WrappedNormalLoginForm