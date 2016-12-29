import React from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import 'whatwg-fetch'

import './Add.scss'
import './MarkDown.scss'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

export default class Add extends React.Component {
	constructor(props,context) {
		super(props,context)
		this.state = {
			content:'',
			open:false,
			category:'',
			title:'',
			author:'',
			introduction:'',
			openMsg:false,
			errorMsg:''
		}
	}

	componentDidMount(){
		
	}

	changeWord = (e) => {
		let t = this;
		t.setState({
			content:e.target.value
		})
	}

	handleOpen = () => this.setState({open: true})
	

	handleClose = () => this.setState({open: false})
	

	handleChange = (key, event, index, value) => {
		let tem = {};
		tem[key] = value || index;
		this.setState(tem)
	}

	submit = () => {
		const t = this;
		if(!t.state.title) {
			t.errorMsg('标题还没写')
			return;
		}
		if(!t.state.author) {
			t.errorMsg('告诉我作者是谁呀')
			return;
		}
		if(!t.state.category) {
			t.errorMsg('选个分类吧')
			return;
		}
		if(!t.state.introduction) {
			t.errorMsg('写个简介吧')
			return;
		}
		if(!t.state.content) {
			t.errorMsg('写点内容呗')
			return;
		}
		fetch('//localhost:3000/article/insert',{
			method: 'POST',
			headers: {
			  	'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state)
		}).then(function(resp){
			console.log(resp)
		})
		this.handleClose();
	}

	errorMsg = (message) => this.setState({openMsg:true,errorMsg:message})

	handleErrorClose = () => this.setState({openMsg: false})

	render() {
		let t = this;
		const actions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onTouchTap={this.handleClose}
	      />,
	      <FlatButton
	        label="Submit"
	        primary={true}
	        onTouchTap={this.submit}
	      />,
	    ];
		return (
			<div className='Admin'>
				<div className='left-wrap'>
					<div className=''>
						
					</div>
					<textarea className='left-part' onChange={t.changeWord} />
				</div>
				<div className='right-wrap'>
					<div dangerouslySetInnerHTML={{__html:marked(t.state.content)}} className='right-part'>
					</div>
				</div>
				
				<div className='btn-wrap'>
					<FloatingActionButton onTouchTap={this.handleOpen} backgroundColor='#f8bb39'>
      					<ContentAdd />
    				</FloatingActionButton>
				</div>
				<Dialog
		          	title="Add new article"
		          	actions={actions}
		          	modal={false}
		          	open={this.state.open}
		          	onRequestClose={this.handleClose}
		        >
		          	<TextField
		          		style={{float:'left'}}
				      	hintText="Hint Text"
				      	value={this.state.title}
				      	floatingLabelText="Give me a title"
				      	onChange={this.handleChange.bind(this,'title')}
				    />
				    <TextField
				    	value={this.state.author}
				    	style={{marginLeft:50,float:'left'}}
				      	hintText="Hint Text"
				      	floatingLabelText="Tell me what's your name"
				      	onChange={this.handleChange.bind(this,'author')}
				    /><br />
				    <SelectField
				    	style={{marginTop:30,float:'left'}}
			          	floatingLabelText="Choose a category"
			          	value={this.state.category}
			          	onChange={this.handleChange.bind(this,'category')}
			        >
			          	<MenuItem value="Web" primaryText="Web" />
			          	<MenuItem value="Node" primaryText="Node" />
			          	<MenuItem value="Mongo" primaryText="Mongo" />
			          	<MenuItem value="React" primaryText="React" />
			          	<MenuItem value="Phaser" primaryText="Phaser" />
			        </SelectField>
				    <TextField
				    	value={this.state.introduction}
				    	style={{marginTop:55,marginLeft:50,float:'left'}}
				      	hintText="Brief Introduction"
				      	multiLine={true}
				      	rowsMax={4}
				      	onChange={this.handleChange.bind(this,'introduction')}
				    /><br />
		        </Dialog>
		        <Snackbar
		          	open={this.state.openMsg}
		          	message={this.state.errorMsg}
		          	autoHideDuration={4000}
		          	onRequestClose={this.handleErrorClose} />
			</div>
		);
	}
}


