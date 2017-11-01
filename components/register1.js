import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox} from 'antd';
import $ from 'jquery';  


import '../style/form.scss';

const FormItem = Form.Item;

class NormalRegForm extends React.Component {
  constructor(props) {
  	super(props);
  	this.handlereg = this.handlereg.bind(this);
  }
	

  handlereg(e) {
    e.preventDefault();
    //显示加载按钮
    $('.example').fadeIn(300);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //获取注册的名字和密码
        var 
        		sname = values.userName,
        		spsw  = values.password;
        //查看数据库中是否存在
        $.ajax({
        	 url:'http://datainfo.duapp.com/shopdata/userinfo.php',
        	 data:{
        	 		status:'register',
        	 		userID:sname,
        	 		password:spsw
        	 },
        	 dataType:'JSON',
        	 success:function(data) {
        	 		console.log(data);
        	 		if (data == '0') {
        	 			$('.example').fadeOut(300);
        	 			alert('用户已经存在！');
        	 		} else if (data == '1') {
        	 			$('.example').fadeOut(300);
        	 			alert('注册成功！');
        	 		} else {
        	 			 $('.example').fadeOut(300);
        	 			 alert('注册失败！');
        	 		}
        	 }
        })
      }
    });
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handlereg} className="login-form">
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
            rules:[{required: true,message: '请先同意用户协议!'}]
          })(
            <Checkbox>同意用户协议</Checkbox>
          )}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}


const RegForm = Form.create()(NormalRegForm);

export default RegForm;