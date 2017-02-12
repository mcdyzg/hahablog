import React from 'react'
import ReactDOM from 'react-dom'
import {Component} from 'reflux'
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


import _map from 'lodash/map'
import DB from '../../app/db';
import Action from './action'
import Store from './store'
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

export default class Add extends Component {
	constructor(props,context) {
		super(props,context)
		this.state = {
		}
		this.store = Store
		Action.findCategory()
	}

	static contextTypes = {
	    router: React.PropTypes.object,
	};

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
		DB.Blog.addArticle({
			title:t.state.title,
			category:t.state.category,
			introduction:t.state.introduction,
			content:t.state.content,
		}).then((res)=>{
			if(res.status === 'success'){
				this.context.router.push('/admin')
			}
		},(err)=>{
			console.log(err)
		})

		// fetch('//localhost:3000/article/insert',{
		// 	method: 'POST',
		// 	headers: {
		// 	  	'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(this.state)
		// }).then(function(resp){
		// 	console.log(resp)
		// })
		// this.handleClose();
	}

	errorMsg = (message) => this.setState({openMsg:true,errorMsg:message})

	handleErrorClose = () => this.setState({openMsg: false})

	getCategoryContent(){
		let temArr = []
		_map(this.state.categoryList,(item,index)=>{
			temArr.push(<MenuItem key={index} value={item.category} primaryText={item.category} />)
		})
		return temArr
	}

	render() {
		const t = this;
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
				      	hintText="Hint Text"
				      	value={this.state.title}
				      	floatingLabelText="Give me a title"
				      	onChange={this.handleChange.bind(this,'title')}
				    />
				    <br />
				    <TextField
				    	value={this.state.introduction}
				      	hintText="Brief Introduction"
				      	multiLine={true}
				      	rowsMax={4}
				      	onChange={this.handleChange.bind(this,'introduction')}
				    />
				    <br />
				    <SelectField
			          	floatingLabelText="Choose a category"
			          	value={this.state.category}
			          	onChange={this.handleChange.bind(this,'category')}
			        >
			        {
			        	t.getCategoryContent()
			        }
			        </SelectField>
			        <br />
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


