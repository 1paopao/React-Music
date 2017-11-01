import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox,Spin  } from 'antd';
import $ from 'jquery';

import '../style/form.scss';


const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(props) {
  	super(props);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }
	

  handleSubmit(e) {
    e.preventDefault();
    //显示加载按钮
    $('.example').fadeIn(300);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        //获取注册的名字和密码
      }
      })
    
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <Button type="primary" htmlType="submit" className="login-form-button">
            register 
          </Button>
        </FormItem>
      </Form>
    );
  }
}


const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm;