import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from 'material-ui/Avatar';
import _map from 'lodash/map';
import Moment from 'moment'
import {Link} from 'react-router'

import './Article.scss'

export default class Article extends React.Component {
	constructor(props,context) {
		super(props,context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount(){
		
	}

	getContent(data){
		let temArr = []
		_map(data,(item,index)=>{
			temArr.push(
				<Link key={index} to={'/article/'+item._id}>
				<div key={index} className='a-item flex-h jc-start'>
					<div className='left-list'>
						<Avatar
				          	color='#FFF'
				          	backgroundColor='#26A69A'
				          	size={56}
				          	style={{width:'4.5rem',height:'4.5rem',fontSize:'40px'}}
				        >
				          {item.title.substr(0,1)}
				        </Avatar>
					</div>
					<div className='right-content'>
						<div className='rc-title'>
							{item.title}
						</div>
						<div className='rc-time'>
							{Moment(item.date).format('YYYY-MM-DD')} | {item.author}
						</div>
						<div className='rc-content'>
							{item.introduction}
						</div>
					</div>
				</div>
				</Link>
				)
		})
		return temArr;
	}

	render() {
		const t = this;
		const {data} = this.props
		return (
			<div className='Article'>
				<div className='a-head'>
					Update Lately
				</div>
				<div className='a-body'>
					<div className='a-content'>
					{
						data.length === 0?null:t.getContent(data)
					}
						
					</div>
				</div>
			</div>
		);
	}
}


