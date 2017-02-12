import React from 'react'
import ReactDOM from 'react-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import 'whatwg-fetch'


import DB from '../../app/db';
import './Register.scss'

export default class Register extends React.Component {
	constructor(props,context) {
		super(props,context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state={
			open: false,
			msg:'',
			name:'',
			pwd:'',
			confirmPwd:'',
		}
	}

	static contextTypes = {
	    router: React.PropTypes.object,
	};

	handleTouchTap = () => {
	    // this.setState({
	    //   open: true,
	    // });
	    
	    if(!this.state.name){
	    	this.errorMsg('壮士请留名')
	    	return;
	    }
	    if(!this.state.pwd){
	    	this.errorMsg('忘填密码了！！')
	    	return;
	    }
	    if(this.state.pwd !== this.state.confirmPwd){
	    	this.errorMsg('两次输得密码不一样啊')
	    	return;
	    }
	    

	    DB.Blog.signup({
		 	name: this.state.name,
		    pwd: this.state.pwd,
		}).then((res)=>{
			if(res.status === 'success'){
				this.context.router.push('/admin')
			}else {
				this.errorMsg(res.msg)
			}
		},(err)=>{
			console.log(err)
		})

	 //    fetch('//localhost:3000/signup', {
		//   method: 'POST',
		//   // 允许跨域传递cookie,需要在服务器也设置相同头信息才能使用
		//   credentials:"include",
		//   headers: {
		//     'Content-Type': 'application/json'
		//   },
		//   body: JSON.stringify({
		//     name: this.state.name,
		//     pwd: this.state.pwd,
		//   })
		// })
	}

	handleRequestClose = () => {
	    this.setState({
	      open: false,
	    });
	}

	errorMsg = (msg) =>{
		this.setState({
			open:true,
			msg:msg
		})
	}

	render() {
		let t = this;
		return (
			<div className='login flex-h ai-center' style={{minHeight:$(window).height()+'px'}}>
				<div className='login-wrap flex-v jc-center ai-center'>
					<TextField
						onChange={(e,name)=>this.setState({name})}
				      hintText="please enter your name"
				      floatingLabelText="Name"
				    />
				    <TextField
				    	type='password'
				    	onChange={(e,pwd)=>this.setState({pwd})}
				      hintText="please enter your password"
				      floatingLabelText="Password"
				    />
				    <TextField
				    	type='password'
				    	onChange={(e,confirmPwd)=>this.setState({confirmPwd})}
				      hintText="confirm your password"
				      floatingLabelText="ConfirmPassword"
				    />
				    <RaisedButton 
				    	onTouchTap={this.handleTouchTap}
				    	label="REGISTER" 
				    	primary={true} 
				    	style={{width:257,height:40,margin:'40px 0 50px'}} />
				</div>
				<Snackbar
		          open={this.state.open}
		          message={this.state.msg}
		          autoHideDuration={4000}
		          onRequestClose={this.handleRequestClose}
		        />
			</div>
		);
	}
}


