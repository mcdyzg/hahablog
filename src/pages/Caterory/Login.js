import React from 'react'
import ReactDOM from 'react-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

import Toast from '../../components/Toast'

import './Login.scss'

export default class Login extends React.Component {
	constructor(props,context) {
		super(props,context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state={
			open: false,
		}
	}

	handleTouchTap = () => {
	    this.setState({
	      open: true,
	    });
	}

	handleRequestClose = () => {
	    this.setState({
	      open: false,
	    });
	}

	componentDidMount(){
		
	}

	render() {
		let t = this;
		return (
			<div className='login flex-h ai-center' style={{minHeight:window.innerHeight+'px'}}>
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
				    <RaisedButton 
				    	onClick={this.handleTouchTap}
				    	label="LOGIN" 
				    	primary={true} 
				    	style={{width:257,height:40,margin:'40px 0 50px'}} />
				</div>
				<Snackbar
		          open={this.state.open}
		          message="输入账号"
		          autoHideDuration={4000}
		          onRequestClose={this.handleRequestClose}
		        />
			</div>
		);
	}
}


