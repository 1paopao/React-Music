//首页的样式
import React,{Component} from 'react';
import {Router,Route,Link,hashHistory} from 'react-router';
import { Carousel } from 'antd';
import $ from 'jquery';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			aSingers:[],
			aSongs:[]
		}
	}
	
	
	//存放点击的歌单的id
	componentDidMount() {
		var _this = this;
		
		$('.homesec3-detail dl').click(function (){
			//存储在本地
			sessionStorage.setItem('typeid',$(this).attr('name'))
		})
		
		//获取歌手的列表
		$.ajax({
			url:'http://route.showapi.com/1143-2?showapi_appid=47789&showapi_sign=3e57857a6b224dd4beb6b1773085ca93&song_type=real-time&page=1&',
			success:function(data) {
				var aSingers = data.showapi_res_body.contentlist;
				_this.setState({aSingers:aSingers});
			}
		})
	}
	
	
	render() {
		var jsx2 = [];
		for(var  i = 2; i < this.state.aSingers.length; i++) {
			if(i < 12) {
				jsx2.push(<dl key={i}>
							<dt>
								<Link to={`/singerself/${this.state.aSingers[i].artistId}/${this.state.aSingers[i].singerName}`}>
									<img src={this.state.aSingers[i].artistLogo} alt="" />
								</Link>
								<div className='home-singer'>
									<p><span>{this.state.aSingers[i].singerName}</span></p>
									<p>代表作 : <span>{this.state.aSingers[i].songName}</span></p>
									<p><span id="">{this.state.aSingers[i].totalScore}</span>&nbsp;&nbsp;</p>
								</div>
							</dt>
							{/**滑动效果**/}
							<dd>
								{/**<p className='homesing-tit'>
										<span>
											热门歌曲
										</span>
										<Link to=''>
											查看全部
										</Link>
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
										<li>
											<Link to=''>
												<span>6.Boom5</span>
											</Link>
										</li>
										<li>
											<Link to=''>
												<span>7.Boom6</span>
											</Link>
										</li>
										<li>
											<Link to=''>
												<span>8.Boom7</span>
											</Link>
										</li>
									</ul>
									
								<button>播放全部</button>**/}
							</dd>
						</dl>);
			    }
		    }
		
		
		return (
			<div className='home-cont'>
				{/**轮播区域**/}
	      		<section className='swipes'>
					<Carousel autoplay effect="fade">
					    <div>
					    	<h3>
					    		<Link to=''>
					    			<img src={require('./../pics/swipe1.jpg')} alt=''/>
					    		</Link>
					    	</h3>
					    </div>
					    <div>
					    	<h3>
					    		<Link to=''>
					    			<img src={require('./../pics/swipe2.jpg')} alt=''/>
					    		</Link>
					    	</h3>
					    </div>
					    <div>
					    	<h3>
					    		<Link to=''>
					    			<img src={require('./../pics/swipe3.jpg')} alt=''/>
					    		</Link>
					    	</h3>
					    </div>
					    <div>
					    	<h3>
					    		<Link to=''>
					    			<img src={require('./../pics/swipe4.jpg')} alt=''/>
					    		</Link>
					    	</h3>
					    </div>
					</Carousel>
				</section>
				
				{/**两张专辑**/}
				<section className='homesec2-wrap'>
					<div className='homesec2-inner'>
						<span>
							<Link to=''> 
								<img src={require('./../pics/pic01.jpg')}/>
							</Link>
						</span>
						<span>
							<Link to=''> 
								<img src={require('./../pics/big.jpg')}/>
							</Link>
						</span>
					</div>
				</section>
				
				{/**歌单**/}
				<section className='homesec3-inner'>
					<div>
						<h2>歌单</h2>
						<span><Link to='/ranklist'>查看更多 </Link></span>
					</div>
					{/**图片列表**/}
					<div className='homesec3-detail'>
						<dl name="27">
							<dt>
								<Link to='/ranklist'>
									<img src={require('./../pics/pic02.jpg')} alt="" />
								</Link>
								<span className='listen'>
									90764
								</span>
								<span className='listenbtn'>
								</span>
							</dt>
							<dd>
								<Link to='/ranklist'>
									新 歌
								</Link>
							</dd>
						</dl>
						<dl name='26'>
							<dt>
								<Link to='/ranklist'>
									<img src={require('./../pics/bd02.jpg')} alt="" />
								</Link>
								<span className='listen'>
									934565
								</span>
								<span className='listenbtn'>
								</span>
							</dt>
							<dd>
								<Link to='/ranklist'>
									热 歌
								</Link>
							</dd>
						</dl>
						<dl name='16'>
							<dt>
								<Link to='/ranklist'>
									<img src={require('./../pics/bd03.jpg')} alt="" />
								</Link>
								<span className='listen'>
									23445
								</span>
								<span className='listenbtn'>
								</span>
							</dt>
							<dd>
								<Link to='/ranklist'>
									韩 国
								</Link>
							</dd>
						</dl>
						<dl name='6'>
							<dt>
								<Link to='/ranklist'>
									<img src={require('./../pics/bd04.jpg')} alt="" />
								</Link>
								<span className='listen'>
									98766
								</span>
								<span className='listenbtn'>
								</span>
							</dt>
							<dd>
								<Link to='/ranklist'>
									港 台
								</Link>
							</dd>
						</dl>
						<dl name='5'>
							<dt>
								<Link to='/ranklist'>
									<img src={require('./../pics/bd05.jpg')} alt="" />
								</Link>
								<span className='listen'>
									67888
								</span>
								<span className='listenbtn'>
								</span>
							</dt>
							<dd>
								<Link to='/ranklist'>
									内 地
								</Link>
							</dd>
						</dl>
						<dl name='17'>
							<dt>
								<Link to='/ranklist'>
									<img src={require('./../pics/bd06.jpg')} alt="" />
								</Link>
								<span className='listen'>
									344565
								</span>
								<span className='listenbtn'>
								</span>
							</dt>
							<dd>
								<Link to='/ranklist'>
									日 本
								</Link>
							</dd>
						</dl>
						<dl name='36'>
							<dt>
								<Link to='/ranklist'>
									<img src={require('./../pics/bd07.jpg')} alt="" />
								</Link>
								<span className='listen'>
									96656
								</span>
								<span className='listenbtn'>
								</span>
							</dt>
							<dd>
								<Link to='/ranklist'>
									K歌 金 曲
								</Link>
							</dd>
						</dl>
						<dl name='32'>
							<dt>
								<Link to='/ranklist'>
									<img src={require('./../pics/bd08.jpg')} alt="" />
								</Link>
								<span className='listen'>
									56677
								</span>
								<span className='listenbtn'>
								</span>
							</dt>
							<dd>
								<Link to='/ranklist'>
									音 乐 人
								</Link>
							</dd>
						</dl>
						<dl name='3'>
							<dt>
								<Link to='/ranklist'>
									<img src={require('./../pics/bd09.jpg')} alt="" />
								</Link>
								<span className='listen'>
									83940
								</span>
								<span className='listenbtn'>
								</span>
							</dt>
							<dd>
								<Link to='/ranklist'>
									欧 美
								</Link>
							</dd>
						</dl>
						<dl name='28'>
							<dt>
								<Link to='/ranklist'>
									<img src={require('./../pics/bd10.jpg')} alt="" />
								</Link>
								<span className='listen'>
									12890
								</span>
								<span className='listenbtn'>
								</span>
							</dt>
							<dd>
								<Link to='/ranklist'>
									网 络 歌 曲
								</Link>
							</dd>
						</dl>
					</div>
					
					{/**歌手**/}
					<section className='homesec4-inner'>
						<div className='tit'>
							<h2>歌手</h2>
							<span><Link to='/singer'>查看更多 </Link></span>
						</div>
						{/**图片列表**/}
						<div className='homesec4-detail'>
							{/**<dl>
								<dt>
									<Link to=''>
										<img src={require('./../pics/pic04.jpg')} alt="" />
									</Link>
									<div className='home-singer'>
										<p><span>周杰伦</span></p>
										<p>代表作 : <span>稻香</span></p>
										<p><span id="">1779800</span>&nbsp;&nbsp;<span id="">822363</span></p>
									</div>
								</dt>
								<dd>
									<p className='homesing-tit'>
											<span>
												热门歌曲
											</span>
											<Link to=''>
												查看全部
											</Link>
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
											<li>
												<Link to=''>
													<span>6.Boom5</span>
												</Link>
											</li>
											<li>
												<Link to=''>
													<span>7.Boom6</span>
												</Link>
											</li>
											<li>
												<Link to=''>
													<span>8.Boom7</span>
												</Link>
											</li>
										</ul>
										
									<button>播放全部</button>
								</dd>
							</dl>
							
								<dl>
								<dt>
									<Link to=''>
										<img src={require('./../pics/pic04.jpg')} alt="" />
									</Link>
									<div className='home-singer'>
										<p><span>周杰伦</span></p>
										<p>代表作 : <span>稻香</span></p>
										<p><span id="">1779800</span>&nbsp;&nbsp;<span id="">822363</span></p>
									</div>
								</dt>
								<dd>
									<p className='homesing-tit'>
											<span>
												热门歌曲
											</span>
											<Link to=''>
												查看全部
											</Link>
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
											<li>
												<Link to=''>
													<span>6.Boom5</span>
												</Link>
											</li>
											<li>
												<Link to=''>
													<span>7.Boom6</span>
												</Link>
											</li>
											<li>
												<Link to=''>
													<span>8.Boom7</span>
												</Link>
											</li>
										</ul>
										
									<button>播放全部</button>
								</dd>
							</dl>
							
								<dl>
								<dt>
									<Link to=''>
										<img src={require('./../pics/pic04.jpg')} alt="" />
									</Link>
									<div className='home-singer'>
										<p><span>周杰伦</span></p>
										<p>代表作 : <span>稻香</span></p>
										<p><span id="">1779800</span>&nbsp;&nbsp;<span id="">822363</span></p>
									</div>
								</dt>
								<dd>
									<p className='homesing-tit'>
											<span>
												热门歌曲
											</span>
											<Link to=''>
												查看全部
											</Link>
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
											<li>
												<Link to=''>
													<span>6.Boom5</span>
												</Link>
											</li>
											<li>
												<Link to=''>
													<span>7.Boom6</span>
												</Link>
											</li>
											<li>
												<Link to=''>
													<span>8.Boom7</span>
												</Link>
											</li>
										</ul>
										
									<button>播放全部</button>
								</dd>
							</dl>
							
								<dl>
								<dt>
									<Link to=''>
										<img src={require('./../pics/pic04.jpg')} alt="" />
									</Link>
									<div className='home-singer'>
										<p><span>周杰伦</span></p>
										<p>代表作 : <span>稻香</span></p>
										<p><span id="">1779800</span>&nbsp;&nbsp;<span id="">822363</span></p>
									</div>
								</dt>
								<dd>
									<p className='homesing-tit'>
											<span>
												热门歌曲
											</span>
											<Link to=''>
												查看全部
											</Link>
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
											<li>
												<Link to=''>
													<span>6.Boom5</span>
												</Link>
											</li>
											<li>
												<Link to=''>
													<span>7.Boom6</span>
												</Link>
											</li>
											<li>
												<Link to=''>
													<span>8.Boom7</span>
												</Link>
											</li>
										</ul>
										
									<button>播放全部</button>
								</dd>
							</dl>
								<dl>
								<dt>
									<Link to=''>
										<img src={require('./../pics/pic04.jpg')} alt="" />
									</Link>
									<div className='home-singer'>
										<p><span>周杰伦</span></p>
										<p>代表作 : <span>稻香</span></p>
										<p><span id="">1779800</span>&nbsp;&nbsp;<span id="">822363</span></p>
									</div>
								</dt>
								<dd>
									<p className='homesing-tit'>
											<span>
												热门歌曲
											</span>
											<Link to=''>
												查看全部
											</Link>
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
											<li>
												<Link to=''>
													<span>6.Boom5</span>
												</Link>
											</li>
											<li>
												<Link to=''>
													<span>7.Boom6</span>
												</Link>
											</li>
											<li>
												<Link to=''>
													<span>8.Boom7</span>
												</Link>
											</li>
										</ul>
										
									<button>播放全部</button>
								</dd>
							</dl>
								<dl>
								<dt>
									<Link to=''>
										<img src={require('./../pics/pic04.jpg')} alt="" />
									</Link>
									<div className='home-singer'>
										<p><span>周杰伦</span></p>
										<p>代表作 : <span>稻香</span></p>
										<p><span id="">1779800</span>&nbsp;&nbsp;<span id="">822363</span></p>
									</div>
								</dt>
								<dd>
									<p className='homesing-tit'>
											<span>
												热门歌曲
											</span>
											<Link to=''>
												查看全部
											</Link>
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
											<li>
												<Link to=''>
													<span>6.Boom5</span>
												</Link>
											</li>
											<li>
												<Link to=''>
													<span>7.Boom6</span>
												</Link>
											</li>
											<li>
												<Link to=''>
													<span>8.Boom7</span>
												</Link>
											</li>
										</ul>
										
									<button>播放全部</button>
								</dd>
							</dl>
							**/}
							{jsx2}
						</div>
					</section>
					
				</section>
			</div>
		)
	}
}



export default Home;
