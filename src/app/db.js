import DBF from './dbFactory'
import { browserHistory } from 'react-router'

// 设置全局的`url`前缀
// 开发环境
if (__LOCAL__) {   
    var urlPrefix= 
   	'/API/';
}

// 生产环境
if (__PRO__) {  
    var urlPrefix = 
    '/API/';
    // '//139.224.128.149:3002/API/';
}

DBF.set('urlPrefix', urlPrefix);

DBF.set('defaultParsePesp', (resp)=>{
	if(resp.status === 'userNotLogin'){
		browserHistory.push('/login')
	}
	if(resp.status !== 'success'){
		// alert(resp.msg)
	}
    return resp;
});

DBF.create('Blog', {
	getName:{
		url       			:'getName',
		type      			:'POST',
	},
	signin:{
		url       			:'signin',
		type      			:'POST',
	},
	signup:{
		url       			:'signup',
		type      			:'POST',
	},
	signout:{
		url       			:'signout',
		type      			:'POST',
	},
	addArticle:{
		url       			:'addArticle',
		type      			:'POST',
	},
	findCategory:{
		url       			:'findCategory',
		type      			:'POST',
	},
	addCategory:{
		url       			:'addCategory',
		type      			:'POST',
	},
	removeCategory:{
		url       			:'removeCategory',
		type      			:'POST',
	},
	findMyArticle:{
		url       			:'findMyArticle',
		type      			:'POST',
	},
	findArticle:{
		url       			:'findArticle',
		type      			:'POST',
	},
	findSomeArticle:{
		url       			:'findSomeArticle',
		type      			:'POST',
	},
});

export default DBF.context;