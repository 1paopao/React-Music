import React,{Component}  from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,hashHistory,IndexRoute} from 'react-router';
import { Avatar,Layout,Icon, Input,Form,Checkbox, AutoComplete,Menu,Button,Carousel, Modal } from 'antd';
import $ from 'jquery';


//导入导航栏的页面
import Home      from './components/home.js';
import Song      from './components/song.js';
import Singer    from './components/singer.js';
import Ranklist  from './components/ranklist.js';
import Songlist  from './components/songlist.js';
import RegForm   from './components/register.js';
import LoginForm from './components/form.js';
import Singerself  from './components/singerself.js';


//antd.css
import 'antd/dist/antd.css';
import './style/nav.scss';
import './style/home.scss';


const { Header, Footer, Sider, Content } = Layout;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;


//头部
class Music extends Component {
	constructor(props) {
		super(props);
		this.tap   = this.tap.bind(this);
		this.login = this.login.bind(this);
		this.register = this.register.bind(this);
		this.handleOk = this.handleOk.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		
		this.state = {
		    current: 'home',
		    visible: false,
		    ss:false
		}
	}
	
	
	//点击导航
	tap(e) {
		//修改状态值
		this.setState({
			current: e.key
		})
	}
	
	//登录
	login () {
		this.setState({
	      visible: true,
	    });
	}
	
	//注册，注意修改状态，否则后者会覆盖前者
	register() {
		this.setState({
	      ss: true          //控制注册窗口的弹出       
	    });
	}
	
	
	handleOk (e)  {
	    this.setState({
	      visible: false           
	    });
	}
	
	handleCancel (e)  {
	    this.setState({
	      visible: false,   //控制登录的窗口
	      ss:false          //控制注册的窗口
	    });
	}
	
	//搜索功能
	search() {
		var _this = this;
		var str = $('.ant-input').val();
		//跳转到搜索的页面
		hashHistory.push({pathname:'/songlist/'+str});
	}
	
	//解决刷新页面(登录)第一次页面自动刷新
	componentWillReceiveProps(e) {
		console.log(e);
		if(localStorage.getItem('isLogin')) {
			$('.loginBtn').hide();
		    $('.regBtn').hide();
			var sname = localStorage.getItem('sname');
			console.log(sname);
			//将用户的名字显示在里面
			$('.loginuser').css('display','block');
			$('.user').text(sname);
		}
	}
	
	//再次刷新的时候（防止登录状态消失）
	componentDidMount() {
		if(localStorage.getItem('isLogin')) {
			$('.loginBtn').hide();
		    $('.regBtn').hide();
			var sname = localStorage.getItem('sname');
			//将用户的名字显示在里面
			$('.loginuser').css('display','block');
			$('.user').text(sname);
		}
	}
	
	
	//退出
	back() {
		//清除本地的存储
		localStorage.removeItem('sname');	
		localStorage.removeItem('isLogin');	
		$('.loginuser').css('display','none');
		//登录，注册按钮显示
		$('.loginBtn').show();
	    $('.regBtn').show();
	}
	
	render () {
		return (
			<div>
			   	<Layout>
			      <Header className='header-wrap'>
			      	<div className='header-inner'>
			      		{/**header-left**/}
				      	<div className='header-left'>
				      		{/**logo**/}
				      		<h1>
					      		<Link to="/home">
									<img src={require('./pics/logo.jpg')} alt=''/>
								</Link>
				      		</h1>
				      		{/**nav**/}
							<Menu
								onClick={this.tap}
						        selectedKeys={[this.state.current]}
						        mode="horizontal" className='header-nav'>
						        <Menu.Item key="home" className="menu-item" >
						          <Link to='/home' className='nav-color'>首页</Link>
						        </Menu.Item>
						        <Menu.Item key="singer" className="menu-item">
						          <Link to='/singer' className='nav-color'>歌手</Link>
						        </Menu.Item>
						        <Menu.Item key="ranklist" className="menu-item">
						          <Link to='/ranklist' className='nav-color'>榜单</Link>
						        </Menu.Item>
						    </Menu>
				      	</div>
						
						{/**search**/}
					    <div className='header-right'>
					    	{/**登录**/}
						     <Button type="primary" ghost onClick={this.login} className='loginBtn'>登录</Button>
						      	<Modal
						          title="登 录"
						          visible={this.state.visible}
						          onOk={this.handleOk}
						          onCancel={this.handleCancel} className='loginForm'>
						      	  <div className='loginform'>
						          	<LoginForm visible={this.state.visible}/>
						          </div>
						        </Modal>
						     {/**注册**/}
						     <Button type="primary" ghost onClick={this.register} className='regBtn'>注册
						     	<Modal
						          title="注 册"
						          visible={this.state.ss}
						          onOk={this.handleOk}
						          onCancel={this.handleCancel}  className='regform'>
						      	  <div>
						          	<RegForm />
						          </div>
						        </Modal>
						     </Button>
						     <Search className="header-search"
							    placeholder="输入要搜索的歌曲"
							    style={{ width: 200}}
							    onSearch={this.search.bind(this)}
							  />
						     
						     <div className='loginuser'>
								<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
								<p className='user'></p>
								<span className="outBtn"  onClick={this.back.bind(this)}>退出</span>
						     </div>
					    </div>
			      	</div>
					</Header>
			      
			      {/**内容区域**/}
			      <Content className='cont-wrap'>
			      	{this.props.children}
			      </Content>
			      
			      
			      {/**底部区域**/}
			      <Footer className='footer'>
			      	<p>全力做好网上治安秩序打击整治专项行动，打造晴朗网络空间</p>
					<p>网站地图  | 联系我们 | 广告服务 | 诚聘英才 | 用户服务协议 | 隐私政策 | 酷我音乐网站免责声明 | 酷我音乐网站著作保护声明 | 未成年人家长监护工程</p>
					<p>北京酷我科技有限公司版权所有   网络文化经营许可证： 京网文[2015]0525-205号 信息网络传播视听节目许可证0109362号 增值电信业务经营许可证B2-20090418 京ICP证060261号</p>
					<p>广播电视节目制作经营许可证京字第2037号 营业性演出许可证京市演1574  京公网安备 11010502030216号  京ICP备09014827号</p>
			      </Footer>
			      
			      
					
			    </Layout>
			</div>
		)
	}
}

ReactDOM.render(<Router history={hashHistory}>
					<Route path='/' component={Music}>
						<IndexRoute component={Home} />
						<Route path='/home' component={Home}>
							<Route path='/singer/:id' component={Singerself}>
							</Route>
						</Route>
						<Route path='/singer' component={Singer}>
						</Route>
						<Route path='/ranklist' component={Ranklist}></Route>
						<Route path='/song' component={Song}></Route>
						<Route path='/singerself/:id/:name' component={Singerself}></Route>
						<Route path='/songlist/:asongs' component={Songlist}></Route>
					</Route>
				</Router>,document.getElementById('box'));
