import { createStore } from 'reflux';
import Action from './action';
import DB from '../../app/db'

export default createStore({

    listenables: [Action],

    init() {
        this.state = {
            open: false,
            openModal:false,
            openSnack:false,
            msg:'',
            add:'',
            chipData: [],
            articleList:[],
            userName:'',
        };
    },

    onGetName(){
        const t = this;
        DB.Blog.getName().then((res)=>{
            if(res.status === 'success') {
                t.state.userName = res.data.name;
                t.updateComponent();
            }
        });
    },

    onFindCategory(){
        const t = this;
        DB.Blog.findCategory({
            type:'dashboard'
        }).then((res)=>{
            if(res.status === 'success') {
                t.state.chipData = res.data
                t.updateComponent();
            }
        });
    },

    findArticle(){
        const t = this;
        DB.Blog.findArticle({
            type:'dashboard'
        }).then((res)=>{
            if(res.status === 'success') {
                t.state.articleList = res.data
                t.updateComponent();
            }
        });
    },

    updateComponent() {
        this.trigger(this.state);
    }
});