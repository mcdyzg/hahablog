import React from 'react'
import ReactDOM from 'react-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

import DB from '../../app/db';
import Toast from '../../components/Toast'


import './Login.scss'



function parseJSON(response) {
  return response.json()
}

export default class Login extends React.Component {
	constructor(props,context) {
		super(props,context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state={
			open: false,
			msg:'',
			name:'',
			pwd:'',
		}
	}

	static contextTypes = {
	    router: React.PropTypes.object,
	};

	handleTouchTap = () => {
	    // this.setState({
	    //   open: true,
	    // });
	    
		
		DB.Blog.signin({
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
		
		
		// $.ajax('//localhost:3000/signup',{
		// 	type:'POST',
		// 	contentType:'application/json',
		// 	data:JSON.stringify({
		// 		    name: this.state.name,
		// 		    pwd: this.state.pwd,
		// 		  })
		// }).done(function(res){
		// 	console.log(res)
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
				      onChange={(e,name)=>this.setState({name})}
				    />
				    <TextField
				    	type='password'
				      hintText="please enter your password"
				      floatingLabelText="Password"
				      onChange={(e,pwd)=>this.setState({pwd})}
				    />
				    <RaisedButton 
				    	onTouchTap={this.handleTouchTap}
				    	label="LOGIN" 
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


