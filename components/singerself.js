import React,{Component} from 'react';
import {Router,Route,Link,hashHistory} from 'react-router';
import $ from 'jquery';

import '../style/self.scss';

class Singerself extends Component {
	constructor (props) {
		super(props);
		this.state = {
			oData:{},      //存放要取出的对象
			spic:'',
			spries:''
		}
	}
	
	//获取歌手的id
	componentDidMount() {
		var _this = this;
		//获取歌手的id,姓名
		var 
			sid = _this.props.params.id;
		var 
			sname = _this.props.params.name;
		//获取歌手的详细信息
		$.ajax({
			url:"http://route.showapi.com/1143-3?showapi_appid=47789&showapi_sign=3e57857a6b224dd4beb6b1773085ca93&artistId="+sid,
			success:function(data) {
			    var 
			    	oData = data.showapi_res_body.artist,      //歌手的信息
				    spic = oData.logo.split('@')[0],        	//将图片存取到一个状态值里（因为图片多了后面的@）
				    spries = oData.profile.split('艺人档案')[1];   //截取个人简历
				    
				_this.setState({oData:oData,spic:spic,spries:spries});  //存放需要的值
			}
		});
	}
	
	
	render () {
		//利用jsx数组
		var 
			jsx = [],
			sname = this.props.params.name;  //歌手的名字
			
		jsx.push(<div key={1} className='self-inner'>
				   <div className="top">
						<p><img src={this.state.spic}/></p>
						<h1>{this.props.params.name}</h1>
					</div>
					<div className="bottom">
						<h2>个人简介</h2>
						<p>姓名: {this.props.params.name}</p>
						<p>地区: {this.state.oData.area}</p>
						<p>风格: {this.state.oData.style}</p>
						<p>资料: {this.state.spries}</p>
					</div>
				</div>);
		
		return (
			<div className='self-cont'>
				{/**<div className="top">
					<p><img src={require('../pics/bd03.jpg')}/></p>
					<h1>周杰伦</h1>
				</div>
				
				<div className="bottom">
					<h2>个人简介</h2>
					<p>姓名:周杰伦</p>
					<p>地区:香港</p>
					<p>风格:香港</p>
					<p>资料:香港</p>
				</div>**/}
				{jsx}
			</div>
		)
	}
	
}

export default Singerself;