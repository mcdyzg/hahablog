import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from 'material-ui/Avatar';

import './Article.scss'

export default class Article extends React.Component {
	constructor(props,context) {
		super(props,context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount(){
		
	}

	render() {
		let t = this;
		return (
			<div className='Article'>
				<div className='a-head'>
					Update Lately
				</div>
				<div className='a-body'>
					<div className='a-content'>
						<div className='a-item flex-h jc-start'>
							<div className='left-list'>
								<Avatar
						          	color='#FFF'
						          	backgroundColor='#26A69A'
						          	size={56}
						          	style={{width:'4.5rem',height:'4.5rem',fontSize:'40px'}}
						        >
						          A
						        </Avatar>
							</div>
							<div className='right-content'>
								<div className='rc-title'>
									Design is EveryThing
								</div>
								<div className='rc-time'>
									2016.10.28 | mcdyzg
								</div>
								<div className='rc-content'>
									dddddddddddddddddddddddddd
								</div>
							</div>
						</div>

						<div className='a-item flex-h jc-start'>
							<div className='left-list'>
								<Avatar
						          	color='#FFF'
						          	backgroundColor='#26A69A'
						          	size={56}
						          	style={{width:'4.5rem',height:'4.5rem',fontSize:'40px'}}
						        >
						          A
						        </Avatar>
							</div>
							<div className='right-content'>
								<div className='rc-title'>
									Design is EveryThing
								</div>
								<div className='rc-time'>
									2016.10.28 | mcdyzg
								</div>
								<div className='rc-content'>
									dddddddddddddddddddddddddd
								</div>
							</div>
						</div>

						<div className='a-item flex-h jc-start'>
							<div className='left-list'>
								<Avatar
						          	color='#FFF'
						          	backgroundColor='#26A69A'
						          	size={56}
						          	style={{width:'4.5rem',height:'4.5rem',fontSize:'40px'}}
						        >
						          A
						        </Avatar>
							</div>
							<div className='right-content'>
								<div className='rc-title'>
									Design is EveryThing
								</div>
								<div className='rc-time'>
									2016.10.28 | mcdyzg
								</div>
								<div className='rc-content'>
									dddddddddddddddddddddddddd
								</div>
							</div>
						</div>

						<div className='a-item flex-h jc-start'>
							<div className='left-list'>
								<Avatar
						          	color='#FFF'
						          	backgroundColor='#26A69A'
						          	size={56}
						          	style={{width:'4.5rem',height:'4.5rem',fontSize:'40px'}}
						        >
						          A
						        </Avatar>
							</div>
							<div className='right-content'>
								<div className='rc-title'>
									Design is EveryThing
								</div>
								<div className='rc-time'>
									2016.10.28 | mcdyzg
								</div>
								<div className='rc-content'>
									dddddddddddddddddddddddddd
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


