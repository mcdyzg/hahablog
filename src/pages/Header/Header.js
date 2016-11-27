import React from 'react'
import ReactDOM from 'react-dom'
import Ripple from '../../components/Ripple'
import SvgIcon from 'material-ui/SvgIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import ActionHome from 'material-ui/svg-icons/action/home';
import ActionHttp from 'material-ui/svg-icons/action/language';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionLabel from 'material-ui/svg-icons/action/label';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionMood from 'material-ui/svg-icons/social/mood';


import './Header.scss'

export default class Header extends React.Component {
	constructor(props,context) {
		super(props,context)
		this.state = {
			open:false,
			background:'#4285f4'
		}
	}

	handleToggle = () => this.setState({open: !this.state.open});

  	handleClose = () => this.setState({open: false});

	changeBg=(data)=>{
		let t = this;
		let tem = {}
		tem.background = data
		t.setState(tem)

		if(data === '#34a853') {
			t.handleToggle();
		}
	}

	componentDidMount(){
		
	}

	render() {
		let t = this;
		return (
			<div className='header' style={{background:t.state.background}}>
				<div className='header-bar flex-h'>
					<div className='left-wrap'>
						<Ripple color='rgba(255,255,255,.6)' className='left-item'>
							Haha <span className='title-dot'></span> Blog <span className='title-return'></span>
						</Ripple>
					</div>

					<div className='flex-h jc-start'>
						<Ripple onClick={t.changeBg.bind(this, '#ea4335')} color='rgba(255,255,255,.6)' className='h-item'>
							ARTICLES
						</Ripple>
						<Ripple onClick={t.changeBg.bind(this, '#34a853')} color='rgba(255,255,255,.6)' className='h-item'>
							CATEGORY
						</Ripple>
						<Ripple onClick={t.changeBg.bind(this, '#4285f4')} color='rgba(255,255,255,.6)' className='h-item'>
							ABOUT
						</Ripple>
						<Ripple onClick={t.changeBg.bind(this, '#fbbc05')} color='rgba(255,255,255,.6)' className='h-item'>
							<SvgIcon viewBox='0 0 1024 1024' color='#FFF'>
							    <path d="M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z" />
							</SvgIcon>
						</Ripple>
					</div>
				</div>
				
				<Drawer
		          	docked={false}
		          	open={this.state.open}
		          	onRequestChange={(open) => this.setState({open})}
		        >
		          	<div className='draw-header'>
		          		haha
		          	</div>
					<List>
					      <Subheader>Categorys</Subheader>
					      <ListItem
					        primaryText="Go Home"
					        leftIcon={<ActionHome />}
					      />
					      <ListItem
					        primaryText="All Article"
					        leftIcon={<ActionMood />}
					      />
					      <ListItem
					        primaryText="Do It Youself"
					        leftIcon={<ActionBuild />}
					      />
					      <ListItem
					        primaryText="Web Dev"
					        leftIcon={<ActionHttp />}
					      />
					      <ListItem
					        primaryText="About Me"
					        leftIcon={<ActionFace />}
					      />
					    </List>
					    <Divider />
					    <List>
					      <Subheader>Links</Subheader>
					      <ListItem
					        primaryText="Github"
					        leftIcon={<ActionLabel />}
					      />
					      <ListItem
					        primaryText="Thank You"
					        leftIcon={<ActionLabel />}
					      />
					</List>
		        </Drawer>
			</div>
		);
	}
}

