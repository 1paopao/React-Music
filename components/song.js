import React,{Component} from 'react';
import {Router,Route,Link,hashHistory} from 'react-router';
import { Row, Col ,Icon} from 'antd';
import $ from 'jquery';

import '../style/song.scss';

class Song extends Component {
	constructor (props) {
		super(props);
		this.state = {
			lyric:'',
			songid:'',
			songname:'',
			singname:'',
			songpic:'',
			songurl:''
		}
	}
	
	componentDidMount() {
		var _this = this;
		//取出传来的歌手的歌曲信息
		var 
			songid = this.props.location.query.sid,     //歌曲id
			songname = this.props.location.query.sname,  //歌曲名字
			singname = this.props.location.query.singer, //歌手名字
			songpic  = this.props.location.query.spic,   //专辑图片
			songurl  = this.props.location.query.surl;   //播放地址
		
		//存在状态里面
		this.setState({
			songid:songid,
			songname:songname,
			singname:singname,
			songpic:songpic,
			songurl:songurl
		})
		
		//通过歌曲id查询歌词
		$.ajax({
			type:"get",
			url:"http://route.showapi.com/213-2?showapi_appid=47789&showapi_sign=3e57857a6b224dd4beb6b1773085ca93&musicid="+songid,
			success:function(data){
				var slyric = data.showapi_res_body.lyric_txt;
				_this.setState({lyric:slyric})
			}
		});
	}
	

	
	render () {
		var jsx = [];
		jsx.push(<div className="song-top" key={1}>
					<Row className='scont'>
				      <Col span={14}  className='scont-left'>
				      		<div className="sl-top">
								<h2>{this.state.songname}</h2>
								<p>专 辑 : <span>{this.state.songname}</span>&nbsp;&nbsp; 歌 手 : <span>{this.state.singname}</span>&nbsp;&nbsp; 分享 : <span><Icon type="share-alt" style={{cursor:'pointer'}}/></span>&nbsp;&nbsp; </p>
							</div>
							
							<div className="sl-bot">
								<div className="song-word" dangerouslySetInnerHTML={{__html:this.state.lyric}}>
								</div>
							</div>
				      </Col>
				      <Col span={8} offset={2} className='scont-right'>
				      		<div className="songer">
				      			<img src={this.state.songpic} alt="" />
				      		</div>
				      		<div className="aud">
								<audio src={this.state.songurl} controls="controls"  loop="loop" style={{width:'505px',overflow:'hidden'}} autoPlay="autoPlay">
								</audio>
							</div>
				      </Col>
				    </Row>
				</div>);
		
		return (
			<div className='song-cont'>
				{/**<div className="song-top">
					<Row className='scont'>
				      <Col span={14}  className='scont-left'>
				      		<div className="sl-top">
								<h2>等你等到我心痛</h2>
								<p>专 辑 : <span>等你等到我心痛</span>&nbsp;&nbsp; 歌 手 : <span>张学友</span>&nbsp;&nbsp; 分享 : <span><Icon type="share-alt" style={{cursor:'pointer'}}/></span>&nbsp;&nbsp; </p>
							</div>
							
							<div className="sl-bot">
								<div className="song-word">
									<p>在着美丽的夜里</p>
									<p>等你等到我心脆</p>
									<p>怎么不见旧爱侣</p>
									<p>问问我为何空虚</p>
									<p>在着美丽的夜里</p>
									<p>在着美丽的夜里</p>
									<p>来将心窝我占据</p>
									<p>在着美丽的夜里</p>
								</div>
							</div>
				      </Col>
				      <Col span={8} offset={2} className='scont-right'>
				      		<div className="songer">
				      			<img src={require('../pics/songer.jpg')} alt="" />
				      		</div>
				      		<div className="aud">
								<audio src={require('../hm.mp3')} controls="controls"  loop="loop" style={{width:'450px',overflow:'hidden'}}>
								</audio>
							</div>
				      </Col>
				    </Row>
				</div>**/}
				{jsx}
			</div>
		)
	}
}

export default Song;
