import { createStore } from 'reflux';
import Reflux from 'reflux'
import Action from './action';
import DB from '../../app/db'

export default class Store extends Reflux.Store{
    constructor() {
        super();
        this.listenables = [Action];
        this.state = {
            articleList:[],
        };
    }

    findArticle(){
        const t = this;
        DB.Blog.findArticle({}).then((res)=>{
            if(res.status === 'success') {
                t.setState({
                    articleList:res.data
                })
            }
        });
    }
}