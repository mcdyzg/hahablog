import React from 'react'
import ReactDOM from 'react-dom'
import Reflux from 'reflux'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Moment from 'moment'
import marked from 'marked'

import Action from './action'
import Store from './Store'
import Header from '../../modules/Header'
import Article from '../../modules/Article'
import DB from '../../app/db'
import './ArticleDetail.scss'
import './MarkDown.scss'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

export default class ArticleDetail extends Reflux.Component {
	constructor(props,context) {
		super(props,context)
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {};
		this.store = Store
		Action.findSomeArticle(this.props.params.id)
	}

	static contextTypes = {
	    router: React.PropTypes.object,
	};

	componentDidMount(){
		
	}

	chooseCategory = (category) =>{
		this.context.router.push('/article')
	}

	render() {
		const t = this;
		return (
			<div className=''>
				<Header onChoose={t.chooseCategory} />
				<div style={{height:'64px'}}></div>

				<div className='Article'>
					<div className='a-head'>
					</div>
					<Paper className='ad-paper' zDepth={2}>
						<div className='ad-title'>
							<div className=''>
								{t.state.articleDetail.length !== 0?t.state.articleDetail[0].title:'~~'}
							</div>
							
							{t.state.articleDetail.length !== 0?Moment(t.state.articleDetail[0].date).format('YYYY-MM-DD') + ' ':'~~ '}
							by {t.state.articleDetail.length !== 0?t.state.articleDetail[0].author:'~~'}
						</div>
						<Divider />
						<div className='ad-content'>
							{t.state.articleDetail.length !== 0? 
								<div dangerouslySetInnerHTML={{__html:marked(t.state.articleDetail[0].content)}} className=''>
								</div>:'~~'}
						</div>
						
					</Paper>
				</div>

			</div>
			
		);
	}
}

// <div dangerouslySetInnerHTML={{__html:marked(t.state.content)}} className='right-part'>
					// </div>
