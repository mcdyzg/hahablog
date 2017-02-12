import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import {Component} from 'reflux'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap.css';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
 
import Article from '../../modules/Article'
import Store from './store';
import Action from './action'
import DB from '../../app/db'


import './Admin.scss'

export default class Admin extends Component {
	constructor(props,context) {
		super(props,context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state={
			
		}
		this.store = Store;
		Action.findCategory()
		Action.findArticle()
	}

	handleToggle = () => this.setState({open: !this.state.open})

  	handleClose = () => this.setState({open: false})

	handleRequestDelete = (value) => {
		DB.Blog.removeCategory({
			category:value
		}).then((res)=>{
			if(res.status === 'success'){
				Action.findCategory();
			}
		})
	    // if (key === 3) {
	    //   alert('Why would you want to delete React?! :)');
	    //   return;
	    // }

	    // this.chipData = this.state.chipData;
	    // const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
	    // this.chipData.splice(chipToDelete, 1);
	    // this.setState({chipData: this.chipData});
	}

	handleClose = () => {
	    this.setState({openModal: false});
	}

	handleSearch(value){
		const t = this;
		DB.Blog.findSomeArticle({
			category:value,
		}).then((res)=>{
			if(res.status === 'success'){
				t.setState({
					articleList:res.data
				})
			}
		})
	}

	renderChip(data,index) {
	    return (
	      <Chip
	      	style={{margin:'4px 5px'}}
	        key={index}
	        onTouchTap={() => this.handleSearch(data.category)}
	        onRequestDelete={() => this.handleRequestDelete(data.category)}
	      >
	        {data.category}
	      </Chip>
	    );
	}

	addCategory = () =>{
		const t = this;
		DB.Blog.addCategory({
			category:t.state.add
		}).then((res)=>{
			if(res.status === 'success'){
				t.setState({
					add:''
				})
				Action.findCategory()
			}
			if(res.status === 'error'){
				t.setState({
					msg:res.msg,
					openSnack:true
				})
			}
		})
	}

	render() {
		let t = this;
		return (
			<div className='' style={{minHeight:$(window).height()+'px'}}>
				<div className='admin-wrap'>
					<AppBar
					    title="Admin"
					    onLeftIconButtonTouchTap={this.handleToggle}
					    iconElementRight={<FlatButton label="Sign Out" />}
					/>
					<div className='adwrap-content'>
						<div className='adchip-wrap'>
							<FloatingActionButton 
								zDepth={1}
								mini={true} 
								onTouchTap={()=>this.setState({openModal:true})}
								style={{marginRight:15}}>
						      	<ContentAdd />
						    </FloatingActionButton>
							{this.state.chipData.map(this.renderChip, this)}

						</div>
						<Paper 
							className='adwrap-paper' 
							zDepth={2}>
							<Article data={this.state.articleList} />
						</Paper>
					</div>
				</div>
				<Tooltip
					placement="left"
					overlay={'add a new article'}>
					<Link to="/add">
						<FloatingActionButton 
							className='admin-write'
							zDepth={2}>
						  	<ContentAdd />
						</FloatingActionButton>
					</Link>
				</Tooltip>
				<Drawer
		          docked={false}
		          open={this.state.open}
		          onRequestChange={(open) => this.setState({open})}
		        >
		          	<AppBar showMenuIconButton={false} title="Hello" />
		        </Drawer>
		        <Dialog
		          	title="添加一个分类吧"
		          	modal={false}
		          	open={this.state.openModal}
		          	onRequestClose={this.handleClose}
		        >
		          	<TextField
		          		value={this.state.add}
		     			onChange={(e)=>this.setState({add:e.target.value})}
				      	hintText="add a new category"
				    /><br />
				    <RaisedButton 
				    	onTouchTap={this.addCategory}
				    	label="添加" 
				    	primary={true} 
				    	style={{marginTop:'20px'}} />
		        </Dialog>
		        <Snackbar
		          	open={this.state.openSnack}
		          	message={this.state.msg}
		          	autoHideDuration={4000}
		          	onRequestClose={()=>this.setState({openSnack:false})}
		        />
			</div>
		);
	}
}


