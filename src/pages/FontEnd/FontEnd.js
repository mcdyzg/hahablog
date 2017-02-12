import React from 'react'
import ReactDOM from 'react-dom'

import './FontEnd.scss'


export default class FontEnd extends React.Component {
	constructor(props,context) {
		super(props,context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount(){
		
	}

	render() {
		return (
			<div className='' style={{background:'#fafafa'}}>
				{this.props.children}
			</div>
		);
	}
}
