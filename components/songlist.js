import React,{Component} from 'react';
import { Row, Col,Menu, Icon ,Button,Table} from 'antd';
import { Router,Route,Link,hashHistory } from 'react-router';
import $ from 'jquery';
import './../style/songlist.scss';

class Songlist extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			rootSubmenuKeys:['sub1'],
		    openKeys: ['sub1'],
		    asongs:[]
		};
	}
	
	componentDidMount() {
		var _this = this;
		//获取搜索的值
		var str = this.props.params.asongs;
		$.ajax({
			url:'http://route.showapi.com/213-1?showapi_appid=47789&showapi_sign=3e57857a6b224dd4beb6b1773085ca93&keyword='+str+'&page=1&',
			success:function(data) {
				var asongs = data.showapi_res_body.pagebean.contentlist;
				console.log(asongs);
				_this.setState({asongs:asongs});
			}
		})
	}
	
	
	render() {
		
		{/**表格每行**/}
		const { loading, selectedRowKeys } = this.state;
   	    const rowSelection = {
	      selectedRowKeys,
	      onChange: this.onSelectChange,
	    };
		
		{/**设置表格头部信息**/}
		{/**表格头部信息**/}
		const columns = [{
		  title: ' ',
		  dataIndex: 'sortid',
		},
		{
		  title: '歌曲',
		  dataIndex: 'songname',
		}, {
		  title: '歌手',
		  dataIndex: 'singer',
		}, {
		  title: '试听',
		  dataIndex: 'cz'
		}];
		
		{/**遍历得到的音乐**/}
		const data = [];
		for (var i = 0; i < this.state.asongs.length; i++) {
		  data.push({
			    key: i,
			    sortid:`${i+1}`,
			    songname: `${this.state.asongs[i].songname}`,
			    singer: `${this.state.asongs[i].singername}`,
			    cz:<span>
				      <Link to={{pathname:'/song',query:{sid:`${this.state.asongs[i].songid}`,sname:`${this.state.asongs[i].songname}`,singer:`${this.state.asongs[i].singername}`,spic:`${this.state.asongs[i].albumpic_big}`,surl:`${this.state.asongs[i].m4a}`}}} className='icons'><Icon type="caret-right" /></Link>&nbsp;&nbsp;&nbsp;
				   </span>
			  });
		}
		
		
		return (
			<div className='songlist-cont'>
			    {/**调用table组件**/}
		        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
			</div>
		)
	}
}


export default Songlist;
