import React from 'react'
import ReactDOM from 'react-dom'
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'
import Header from '../pages/Header'
import {Router ,hashHistory} from 'react-router'
import AppRoutes from './app-routes'


injectTapEventPlugin();

ReactDOM.render(
	<Router
		history={hashHistory}
		onUpdate={() => window.scrollTo(0,0)}>
		{AppRoutes}
	</Router>,document.getElementById('app')
	)

