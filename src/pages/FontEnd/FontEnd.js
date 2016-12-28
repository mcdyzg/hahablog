import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../Header'

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
				<Header />
				{this.props.children}
			</div>
		);
	}
}
