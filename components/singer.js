//首页的样式
import React,{Component} from 'react';
import {Router,Route,Link,hashHistory} from 'react-router';
import { Row, Col ,Tabs, Select, Pagination } from 'antd';
import $ from 'jquery';

import '../style/singer.scss';

const TabPane = Tabs.TabPane;
const Option = Select.Option;







class Singer extends Component {
	constructor(props) {
		super(props);
		this.state = {
		    tabPosition: 'left',
		    aData:[]
		}
		this.changeTabPosition = this.changeTabPosition.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	
	//切换卡片
	changeTabPosition (tabPosition) {
	    this.setState({ tabPosition: tabPosition});
	}
	
	//分页按钮
	onChange(pageNumber) {
//	  console.log('Page: ', pageNumber);
	}
	
	//加载歌手信息
	componentDidMount() {
		var _this = this;
		
		//获取歌手数据
		$.ajax({
			type:"get",
			url:"http://route.showapi.com/1143-2?showapi_appid=47789&showapi_sign=3e57857a6b224dd4beb6b1773085ca93&song_type=real-time&page=2&",
			success:function(data) {
				var aData = data.showapi_res_body.contentlist;
				_this.setState({aData:aData});
			}
		});
	}
	
	
	
	render() {
		{/**console.log(this.state.aData);**/}
		//存取歌手的信息
		var jsx = [];
		for(var i = 0; i < this.state.aData.length; i++) {
			jsx.push(<dl className="singers-list" key={i}>
						<dt>
							<Link to={`/singerself/${this.state.aData[i].artistId}/${this.state.aData[i].singerName}`}>
								<img src={this.state.aData[i].artistLogo} alt="图片未知" />
							</Link>
							<strong>{this.state.aData[i].singerName}</strong>
						</dt>
					</dl>);
		}
		
		return (
			<div className='singer-cont'>
				<Tabs tabPosition={this.state.tabPosition}>
		          <TabPane tab="华语歌手" key="1" className='singer-tab'>
		            <div className="singers">
		          	{/**<dl className="singers-list">
						<dt>
							<Link to='/singerself'>
								<img src={require('../pics/zjl.jpg')} alt="" />
							</Link>
							<strong>周杰伦</strong>
						</dt>
					</dl>
					<dl className="singers-list">
						<dt>
							<Link to=''>
								<img src={require('../pics/zjl.jpg')} alt="" />
							</Link>
							<strong>周杰伦</strong>
						</dt>
						<dd>
							<p className='singer-tit'>
								<span>热门歌曲</span>
								<Link to=''>专辑</Link>
							</p>
							
							<ul>
								<li>
									<Link to=''>
										<span>1.Rolling in world</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>2.Boom</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>3.Boom2</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>4.Boom3</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>5.Boom4</span>
									</Link>
								</li>
							</ul>
						</dd>
					</dl>
					<dl className="singers-list">
						<dt>
							<Link to=''>
								<img src={require('../pics/zjl.jpg')} alt="" />
							</Link>
							<strong>周杰伦</strong>
						</dt>
						<dd>
							<p className='singer-tit'>
								<span>热门歌曲</span>
								<Link to=''>专辑</Link>
							</p>
							
							<ul>
								<li>
									<Link to=''>
										<span>1.Rolling in world</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>2.Boom</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>3.Boom2</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>4.Boom3</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>5.Boom4</span>
									</Link>
								</li>
							</ul>
						</dd>
					</dl>
					<dl className="singers-list">
						<dt>
							<Link to=''>
								<img src={require('../pics/zjl.jpg')} alt="" />
							</Link>
							<strong>周杰伦</strong>
						</dt>
						<dd>
							<p className='singer-tit'>
								<span>热门歌曲</span>
								<Link to=''>专辑</Link>
							</p>
							
							<ul>
								<li>
									<Link to=''>
										<span>1.Rolling in world</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>2.Boom</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>3.Boom2</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>4.Boom3</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>5.Boom4</span>
									</Link>
								</li>
							</ul>
						</dd>
					</dl>
					<dl className="singers-list">
						<dt>
							<Link to=''>
								<img src={require('../pics/zjl.jpg')} alt="" />
							</Link>
							<strong>周杰伦</strong>
						</dt>
						<dd>
							<p className='singer-tit'>
								<span>热门歌曲</span>
								<Link to=''>专辑</Link>
							</p>
							
							<ul>
								<li>
									<Link to=''>
										<span>1.Rolling in world</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>2.Boom</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>3.Boom2</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>4.Boom3</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>5.Boom4</span>
									</Link>
								</li>
							</ul>
						</dd>
					</dl>
					<dl className="singers-list">
						<dt>
							<Link to=''>
								<img src={require('../pics/zjl.jpg')} alt="" />
							</Link>
							<strong>周杰伦</strong>
						</dt>
						<dd>
							<p className='singer-tit'>
								<span>热门歌曲</span>
								<Link to=''>专辑</Link>
							</p>
							
							<ul>
								<li>
									<Link to=''>
										<span>1.Rolling in world</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>2.Boom</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>3.Boom2</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>4.Boom3</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>5.Boom4</span>
									</Link>
								</li>
							</ul>
						</dd>
					</dl>
					<dl className="singers-list">
						<dt>
							<Link to=''>
								<img src={require('../pics/zjl.jpg')} alt="" />
							</Link>
							<strong>周杰伦</strong>
						</dt>
						<dd>
							<p className='singer-tit'>
								<span>热门歌曲</span>
								<Link to=''>专辑</Link>
							</p>
							
							<ul>
								<li>
									<Link to=''>
										<span>1.Rolling in world</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>2.Boom</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>3.Boom2</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>4.Boom3</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>5.Boom4</span>
									</Link>
								</li>
							</ul>
						</dd>
					</dl>
					<dl className="singers-list">
						<dt>
							<Link to=''>
								<img src={require('../pics/zjl.jpg')} alt="" />
							</Link>
							<strong>周杰伦</strong>
						</dt>
						<dd>
							<p className='singer-tit'>
								<span>热门歌曲</span>
								<Link to=''>专辑</Link>
							</p>
							
							<ul>
								<li>
									<Link to=''>
										<span>1.Rolling in world</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>2.Boom</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>3.Boom2</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>4.Boom3</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>5.Boom4</span>
									</Link>
								</li>
							</ul>
						</dd>
					</dl>
						<dl className="singers-list">
						<dt>
							<Link to=''>
								<img src={require('../pics/zjl.jpg')} alt="" />
							</Link>
							<strong>周杰伦</strong>
						</dt>
						<dd>
							<p className='singer-tit'>
								<span>热门歌曲</span>
								<Link to=''>专辑</Link>
							</p>
							
							<ul>
								<li>
									<Link to=''>
										<span>1.Rolling in world</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>2.Boom</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>3.Boom2</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>4.Boom3</span>
									</Link>
								</li>
								<li>
									<Link to=''>
										<span>5.Boom4</span>
									</Link>
								</li>
							</ul>
						</dd>
					</dl>**/}
		          	
		          	{jsx}
					</div>
					
					{/**分页按钮**/}
					<div className='pagebtn'> 
						<Pagination  defaultCurrent={1} total={this.state.aData.length} onChange={this.onChange} />
					</div>
		          </TabPane>
		          {/**<TabPane tab="日韩歌手" key="2">Content of Tab 2</TabPane>
		          <TabPane tab="欧美歌手" key="3">Content of Tab 3</TabPane>**/}
		        </Tabs>
		        
			</div>
		)
	}
}



export default Singer;
