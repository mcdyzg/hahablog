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
        };
    },

    onFindCategory(){
        const t = this;
        DB.Blog.findCategory({}).then((res)=>{
            if(res.status === 'success') {
                t.state.chipData = res.data
                t.updateComponent();
            }
        });
    },

    findArticle(){
        const t = this;
        DB.Blog.findArticle({}).then((res)=>{
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