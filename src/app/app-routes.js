import React from 'react'
import {Route,Redirect,IndexRoute} from 'react-router'
import App from '../pages/App'
import Article from '../pages/Article'
import Admin from '../pages/Admin'

const AppRoutes = (
	<Route path='/' component={App}>
		<IndexRoute component={Article}/>
		<Route path='article' component={Article} />
		<Route path='admin' component={Admin} />
	</Route>
	)

export default AppRoutes;
// <IndexRoute component={Lesson}/>
		// <Route path='lesson' component={Lesson}/>