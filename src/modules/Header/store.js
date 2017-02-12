import { createStore } from 'reflux';
import Reflux from 'reflux'
import Action from './action';
import DB from '../../app/db'

export default class HeaderStore extends Reflux.Store{
    constructor() {
        super();
        this.listenables = [Action];
        this.state = {
            open:false,
            background:'#4285f4',
            categoryList:[],
        };
    }

    onFindCategory(){
        const t = this;
        DB.Blog.findCategory({}).then((res)=>{
            if(res.status === 'success') {
                t.setState({
                    categoryList:res.data
                })
            }
        });
    }
}