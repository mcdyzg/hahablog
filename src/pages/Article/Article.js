import React from 'react'
import ReactDOM from 'react-dom'
import Reflux from 'reflux'

import Action from './action'
import Store from './Store'
import Header from '../../modules/Header'
import Article from '../../modules/Article'
import DB from '../../app/db'

export default class ArticlePage extends Reflux.Component {
	constructor(props,context) {
		super(props,context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {};
		this.store = Store
		Action.findArticle()
	}

	componentDidMount(){
		
	}

	chooseCategory = (category) =>{
		DB.Blog.findSomeArticle({
			category:category,
		}).then((res)=>{
			if(res.status === 'success'){
				this.setState({
					articleList:res.data
				})
			}
		})
	}

	render() {
		const t = this;
		return (
			<div className=''>
				<Header onChoose={t.chooseCategory} />
				<div style={{height:'64px'}}></div>
				<Article data={t.state.articleList} />
			</div>
			
		);
	}
}


