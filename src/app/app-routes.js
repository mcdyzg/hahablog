import React from 'react'
import {Route,Redirect,IndexRoute,IndexRedirect} from 'react-router'
import App from '../pages/App'
import Article from '../pages/Article'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import FontEnd from '../pages/FontEnd'

const AppRoutes = (
	<Route path='/' component={App}>
		<IndexRedirect to="/article" />
		<Route path='fontend' component={FontEnd}>
			<Route path='/article' component={Article} />
		</Route>
		<Route path='admin' component={Admin} />
		<Route path='login' component={Login} />
	</Route>
	)

export default AppRoutes;
// <IndexRoute component={Lesson}/>
		// <Route path='lesson' component={Lesson}/>