import React from 'react'
import ReactDOM from 'react-dom'
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'
import {Router ,browserHistory} from 'react-router'
import AppRoutes from './app-routes'


injectTapEventPlugin();

ReactDOM.render(
	<Router
		history={browserHistory}
		onUpdate={() => window.scrollTo(0,0)}>
		{AppRoutes}
	</Router>,document.getElementById('app')
	)

