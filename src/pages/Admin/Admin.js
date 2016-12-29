import React from 'react'
import ReactDOM from 'react-dom'

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
 
import Article from '../Article'


import './Admin.scss'

export default class Admin extends React.Component {
	constructor(props,context) {
		super(props,context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state={
			open: false,
			chipData: [
		      {key: 0, label: 'Angular'},
		      {key: 1, label: 'JQuery'},
		      {key: 2, label: 'Polymer'},
		      {key: 3, label: 'ReactJS'},
		    ],
		    paperDepth:1,
		}
	}

	handleToggle = () => this.setState({open: !this.state.open})

  	handleClose = () => this.setState({open: false})

	handleRequestDelete = (key) => {
	    if (key === 3) {
	      alert('Why would you want to delete React?! :)');
	      return;
	    }

	    this.chipData = this.state.chipData;
	    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
	    this.chipData.splice(chipToDelete, 1);
	    this.setState({chipData: this.chipData});
	}

	renderChip(data) {
	    return (
	      <Chip
	      	style={{margin:'4px 5px'}}
	        key={data.key}
	        onRequestDelete={() => this.handleRequestDelete(data.key)}
	      >
	        {data.label}
	      </Chip>
	    );
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
								style={{marginRight:15}}>
						      	<ContentAdd />
						    </FloatingActionButton>
							{this.state.chipData.map(this.renderChip, this)}

						</div>
						<Paper 
							onMouseOver={()=>{this.setState({paperDepth:3})}} 
							onMouseOut={()=>{this.setState({paperDepth:1})}} 
							className='adwrap-paper' 
							zDepth={this.state.paperDepth}>
							<Article />
						</Paper>
					</div>
				</div>
				<Tooltip
					placement="left"
					overlay={'add a new article'}>
					<FloatingActionButton 
						className='admin-write'
						zDepth={2}>
					  	<ContentAdd />
					</FloatingActionButton>
				</Tooltip>
				<Drawer
		          docked={false}
		          open={this.state.open}
		          onRequestChange={(open) => this.setState({open})}
		        >
		          	<AppBar showMenuIconButton={false} title="Hello" />
		        </Drawer>
			</div>
		);
	}
}


