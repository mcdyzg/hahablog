import React from 'react'
import ReactDOM from 'react-dom'

import './Login.scss'

export default class Login extends React.Component {
	constructor(props,context) {
		super(props,context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount(){
		
	}

	render() {
		let t = this;
		return (
			<div className='login flex-h ai-center' style={{minHeight:$(window).height()+'px'}}>
				<div className='login-wrap'>
					afsdf
				</div>
			</div>
		);
	}
}


