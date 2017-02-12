import React from 'react'
import ReactDOM from 'react-dom'

import Header from '../../modules/Header'
import FlatButton from 'material-ui/FlatButton';
import DB from '../../app/db';

import hithand from '../../img/hithand.png'
import pintu from '../../img/pintu.png'
import chaiqinglv from '../../img/chaiqinglv.png'
import dafeiji from '../../img/dafeiji.png'
import './GameList.scss'


export default class GameList extends React.Component {
	constructor(props,context) {
		super(props,context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state={
			open: false,
			msg:'',
		}
	}

	static contextTypes = {
	    router: React.PropTypes.object,
	};

	chooseCategory = (category) =>{
		this.context.router.push('/article')
	}

	render() {
		let t = this;
		return (
			<div className='' style={{minHeight:$(window).height()+'px'}}>
				<Header  onChoose={t.chooseCategory} />
				<div style={{height:'64px'}}></div>
				
				<div className='game-wrap'>
					<div className='game-item'>
						<img src={hithand} className='gi-img' />
						<div className='gi-title'>
							小猫打手
						</div>
						<div className='gi-word'>
							小猫打手的游戏，玩家扮演守的一方，坚持30秒没有被打到就是胜利，只有五次缩手的机会哦
						</div>
						<div className='gi-btn'>
							<a href='//139.224.128.149:3000/hithand' >
							<FlatButton label="READ MORE" secondary={true} />
							</a>
						</div>
					</div>
					<div className='game-item'>
						<img src={chaiqinglv} className='gi-img' />
						<div className='gi-title'>
							拆散小情侣
						</div>
						<div className='gi-word'>
							天降正义，点击情侣让他们变成狗男女，25秒内尽可能多的点吧
						</div>
						<div className='gi-btn'>
							<a href='//139.224.128.149:3000/chaiqinglv' >
							<FlatButton label="READ MORE" secondary={true} />
							</a>
						</div>
					</div>
					<div className='game-item'>
						<img src={pintu} className='gi-img' />
						<div className='gi-title'>
							拼图游戏
						</div>
						<div className='gi-word'>
							拼图游戏，15秒内完成拼图就是胜利，挑战下吧
						</div>
						<div className='gi-btn'>
							<a href='//139.224.128.149:3000/pintu' >
							<FlatButton label="READ MORE" secondary={true} />
							</a>
						</div>
					</div>
					<div className='game-item'>
						<img src={dafeiji} className='gi-img' />
						<div className='gi-title'>
							经典打飞机
						</div>
						<div className='gi-word'>
							经典打飞机游戏，有boss关卡，打爆敌人可以获得奖励。
						</div>
						<div className='gi-btn'>
							<a href='//139.224.128.149:3000/dafeiji' >
							<FlatButton label="READ MORE" secondary={true} />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


