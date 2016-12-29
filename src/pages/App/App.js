import React from 'react'
import ReactDOM from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Header'
import { Scrollbars } from 'react-custom-scrollbars';

import './App.scss'

const muiTheme = getMuiTheme({
  fontFamily:'"Roboto Mono","Microsoft Yahei"',
  palette:{
  	primary1Color:'#03A9F4'
  }
});

export default class App extends React.Component {
	constructor(props,context) {
		super(props,context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount(){
		
	}

	render() {
		return (
			<MuiThemeProvider  muiTheme={muiTheme}>
				<Scrollbars autoHide style={{ width: $(window).width(), height: $(window).height() }}>
		        	<div className='app-wrap' style={{background:'#fafafa'}}>
						{this.props.children}
					</div>
		      	</Scrollbars>
				
			</MuiThemeProvider>
		);
	}
}
