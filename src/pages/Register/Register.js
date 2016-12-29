import React from 'react'
import ReactDOM from 'react-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './Register.scss'

export default class Register extends React.Component {
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
				<div className='login-wrap flex-v jc-center ai-center'>
					<TextField
				      hintText="please enter your name"
				      floatingLabelText="Name"
				    />
				    <TextField
				    	type='password'
				      hintText="please enter your password"
				      floatingLabelText="Password"
				    />
				    <TextField
				    	type='password'
				      hintText="confirm your password"
				      floatingLabelText="ConfirmPassword"
				    />
				    <RaisedButton label="REGISTER" primary={true} style={{width:257,height:40,margin:'40px 0 50px'}} />
				</div>
			</div>
		);
	}
}


