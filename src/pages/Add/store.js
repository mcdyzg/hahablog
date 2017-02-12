import { createStore } from 'reflux';
import Action from './action';
import DB from '../../app/db'

export default createStore({

    listenables: [Action],

    init() {
        this.state = {
            content:'',
            open:false,
            category:'',
            title:'',
            introduction:'',
            openMsg:false,
            errorMsg:'',
            categoryList:[],
        };
    },

    onFindCategory(){
        const t = this;
        DB.Blog.findCategory({}).then((res)=>{
            if(res.status === 'success') {
                t.state.categoryList = res.data
                t.updateComponent();
            }
        });
    },

    updateComponent() {
        this.trigger(this.state);
    }
});