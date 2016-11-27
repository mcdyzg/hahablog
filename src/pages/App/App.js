import React from 'react'
import ReactDOM from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Header'

import './App.scss'

const muiTheme = getMuiTheme({
  fontFamily:'"Roboto Mono","Microsoft Yahei"'
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
				<div className='' style={{background:'#fafafa'}}>
					<Header />
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}
