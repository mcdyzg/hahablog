import { createStore } from 'reflux';
import Reflux from 'reflux'
import Action from './action';
import DB from '../../app/db'

export default class Store extends Reflux.Store{
    constructor() {
        super();
        this.listenables = [Action];
        this.state = {
            articleDetail:[],
        };
    }

    findSomeArticle(id){
        const t = this;
        DB.Blog.findSomeArticle({
            _id:id
        }).then((res)=>{
            if(res.status === 'success') {
                t.setState({
                    articleDetail:res.data
                })
            }
        });
    }
}