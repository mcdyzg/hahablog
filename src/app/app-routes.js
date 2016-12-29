import React from 'react'
import {Route,Redirect,IndexRoute,IndexRedirect} from 'react-router'
import App from '../pages/App'
import Article from '../pages/Article'
import Add from '../pages/Add'
import Login from '../pages/Login'
import FontEnd from '../pages/FontEnd'
import Register from '../pages/Register'
import Admin from '../pages/Admin'

const AppRoutes = (
	<Route path='/' component={App}>
		<IndexRedirect to="/article" />
		<Route path='fontend' component={FontEnd}>
			<Route path='/article' component={Article} />
		</Route> 
		<Route path='add' component={Add} />
		<Route path='login' component={Login} />
		<Route path='register' component={Register} />
		<Route path='admin' component={Admin} />
	</Route>
	)

export default AppRoutes;
// <IndexRoute component={Lesson}/>
		// <Route path='lesson' component={Lesson}/>