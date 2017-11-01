//首页的样式
import React,{Component} from 'react';
import { Row, Col,Menu, Icon ,Button,Table} from 'antd';
import { Router,Route,Link,hashHistory } from 'react-router';
import 'antd/dist/antd.css';
import '../style/ranklist.scss';
import $ from 'jquery';



const SubMenu = Menu.SubMenu;


class Ranklist extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			rootSubmenuKeys:['sub1'],
		    openKeys: ['sub1'],
		    arr:[]
		};
	}
	
	
	//左侧菜单栏锁打开的面板
	onOpenChange (openKeys)  {
	    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
	    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
	      this.setState({ openKeys });
	    } else {
	      this.setState({
	        openKeys: latestOpenKey ? [latestOpenKey] : [],
	      });
	    }
	}
	 
	 
	componentDidMount() {
		var _this = this;
		var stypeId = sessionStorage.getItem('typeid');
		
		//获取不同的typeid对应的数据
		$.ajax({
			url:"http://route.showapi.com/213-4?showapi_appid=47789&showapi_sign=3e57857a6b224dd4beb6b1773085ca93&topid="+stypeId,
			success:function(data){ 
//				console.log(data);
				var sdata = data.showapi_res_body.pagebean.songlist;
				//存放在状态里
				_this.setState({arr:sdata}); 
			}
		});
		
		//点击左侧的面板
		$('.ant-menu-sub li').click(function(){
				//获取typeid
				var sId = $(this).find('span').attr('name');
				//获取数据，刷新table表格
				$.ajax({
					url:"http://route.showapi.com/213-4?showapi_appid=47789&showapi_sign=3e57857a6b224dd4beb6b1773085ca93&topid="+sId,
					success:function(data){ 
						var sdata = data.showapi_res_body.pagebean.songlist;
						//存放在状态里
						_this.setState({arr:sdata}); 
					}
				});
		})
	}
	  
	 
	  
	render() {
		const { loading, selectedRowKeys } = this.state;
   	    const rowSelection = {
	      selectedRowKeys,
	      onChange: this.onSelectChange,
	    };
		
		{/**表格头部信息**/}
		const columns = [{
		  title: ' ',
		  dataIndex: 'sortid',
		},
		{
		  title: '歌曲',
		  dataIndex: 'songname',
		  onCellClick:(record, event)=>{
		  	alert(12);
		  }
		}, {
		  title: '歌手',
		  dataIndex: 'singer',
		}, {
		  title: '',
		  dataIndex: 'cz'
		}];

		{/**遍历音乐**/}
		const data = [];
		for (var i = 0; i < this.state.arr.length; i++) {
		  data.push({
			    key: i,
			    sortid:`${i+1}`,
			    songname: `${this.state.arr[i].songname}`,
			    singer: `${this.state.arr[i].singername}`,
			    cz:<div>
				      <Link to={{pathname:'/song',query:{sid:`${this.state.arr[i].songid}`,sname:`${this.state.arr[i].songname}`,singer:`${this.state.arr[i].singername}`,spic:`${this.state.arr[i].albumpic_big}`,surl:`${this.state.arr[i].url}`}}} className='icons'><Icon type="caret-right" /></Link>&nbsp;&nbsp;&nbsp;
				      {/**<Link to={`${this.state.arr[i].downUrl}`} className='icons'><Icon type="download" /></Link>&nbsp;&nbsp;&nbsp;**/}
				      <span  className='icons'><Icon type="share-alt" /></span>
				    </div>
			  });
		}
		
		
		return (
			<div className='ranklist-cont'>
				{/**利用栅栏布局**/}
				<Row>
			      <Col span={4} className='cols-left'>
			      	<Menu
				        mode="inline"
				        openKeys={this.state.openKeys}
				        onOpenChange={this.onOpenChange.bind(this)}
				        style={{ width: 240 }}
				      >
				        <SubMenu key="sub1" title={<span><span className='tit'>分类榜</span></span>}>
				          <Menu.Item key="1"><img src={require('../pics/bdl10.png')} /><span name='27'>酷我新歌</span></Menu.Item>
				          <Menu.Item key="2"><img src={require('../pics/bdl11.png')} /><span name='4'>流行榜</span></Menu.Item>
				          <Menu.Item key="3"><img src={require('../pics/bdl06.png')} /><span name='26'>热歌</span></Menu.Item>
				          <Menu.Item key="4"><img src={require('../pics/bdl12.png')} /><span name='5'>内地</span></Menu.Item>
				          <Menu.Item key="5"><img src={require('../pics/bdl08.png')} /><span name='6'>港台</span></Menu.Item>
				          <Menu.Item key="6"><img src={require('../pics/bdl02.png')} /><span name='16'>韩国</span></Menu.Item>
				          <Menu.Item key="7"><img src={require('../pics/bdl07.png')} /><span name='17'>日本</span></Menu.Item>
				          <Menu.Item key="8"><img src={require('../pics/bdl14.png')} /><span name='28'>网络歌曲</span></Menu.Item>
				          <Menu.Item key="9"><img src={require('../pics/bdl05.png')} /><span name='32'>音乐人</span></Menu.Item>
				          <Menu.Item key="10"><img src={require('../pics/bdl13.png')} /><span name='36'>k歌金曲</span></Menu.Item>
				          <Menu.Item key="11"><img src={require('../pics/bdl03.png')} /><span name='3'>欧美</span></Menu.Item>
				        </SubMenu>
				      </Menu>
			      </Col>
			      
			      {/**歌曲列表**/}
			      <Col span={19} offset={1} className='cols-right'>
			      	{/**歌曲类型图片
			      	<div className="rank-pic">
						<img src={require('../pics/fltit.jpg')} alt="" />
					</div>**/}
					{/**下载歌曲**/}
					<div className='rank-downall' style={{margin: '15px 0'}}>
						 <Button type="primary" icon="download">全部下载</Button>&nbsp;&nbsp;
						 <Button>全部播放</Button>
					</div>
					{/**榜单列表**/}
					<div className="ranklist-table">
						{/**调用table组件**/}
				        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
					</div>
			      </Col>
			    </Row>
			</div>
		)
	}
}



export default Ranklist;
