import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,hashHistory} from 'react-router';
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
//      console.log('Received values of form: ', values);
        //获取注册的名字和密码
        var 
        		sname = values.userName,
        		spsw  = values.password;
        //查看数据库中是否存在
		        $.ajax({
		        	 url:'http://datainfo.duapp.com/shopdata/userinfo.php',
		        	 data:{
		        	 		status:'login',
		        	 		userID:sname,
		        	 		password:spsw
		        	 },
		        	 dataType:'JSON',
		        	 success:function(data) {
		        	 		if (data == '0') {
		        	 			$('.example').fadeOut(300);
		        	 			alert('用户不存在！');
		        	 		} else if (data == '2') {
		        	 			$('.example').fadeOut(300);
		        	 			alert('用户名密码不符！');
		        	 		} else {
		        	 			$('.example').fadeOut(300);
		        	 			alert('登录成功！');
	        	 			  //将信息存储到本地
	        	 			  localStorage.setItem('isLogin','1');
	        	 			  localStorage.setItem('sname',sname);
	        	 			  //关闭弹出框
	        	 			  $('.ant-modal-mask').hide();
	        	 			  $('.ant-modal-wrap').hide();  
	        	 			  //跳转到首页去
	        	 			  hashHistory.push('/');
		        	 		}
		        	 }
		        })
      }
    });
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
            Log in
          </Button>
        {/**Or <a href="">register now!</a>**/}
        </FormItem>
        
        <div className="example">
			    <Spin />
			  </div>
      </Form>
    );
  }
}


const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm;