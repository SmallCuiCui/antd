import React,{Component} from "react"
import { Form, Icon, Input, Button, message, Card } from 'antd';
import {getadd} from "../../api"

class register extends Component{
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        getadd(values.name, values.age).then(resp => {
          if(resp.data.status ===0 && resp.data.data){
            message.success("添加成功")
            this.props.history.push("/home/list")
          }
        })
      }
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return <Card title="添加用户" bordered={false} style={{"width": "50%","margin": "50px auto"}}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="name"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please input age!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="age"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">添加</Button>
        </Form.Item>
      </Form>

    </Card>
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(register);
export default WrappedNormalLoginForm