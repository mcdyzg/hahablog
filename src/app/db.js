import DBF from './dbFactory'
import { browserHistory } from 'react-router'

// 设置全局的`url`前缀
// 开发环境
if (__LOCAL__) {   
    var urlPrefix= 
   	'//localhost:3002/API/';
}

// 生产环境
if (__PRO__) {  
    var urlPrefix = 
    '//139.224.128.149:3002/API/';
}

DBF.set('urlPrefix', urlPrefix);

DBF.set('defaultParsePesp', (resp)=>{
	if(resp.status === 'userNotLogin'){
		browserHistory.push('/login')
	}
	if(resp.status !== 'success'){
		alert(resp.msg)
	}
    return resp;
});

DBF.create('Blog', {
	signin:{
		url       			:'signin',
		type      			:'POST',
		credentials			:'include',
		contentType			:'application/json',
	},
	signup:{
		url       			:'signup',
		type      			:'POST',
		credentials			:'include',
		contentType			:'application/json',
	},
	addArticle:{
		url       			:'addArticle',
		type      			:'POST',
		credentials			:'include',
		contentType			:'application/json',
	},
	findCategory:{
		url       			:'findCategory',
		type      			:'POST',
		credentials			:'include',
		contentType			:'application/json',
	},
	addCategory:{
		url       			:'addCategory',
		type      			:'POST',
		credentials			:'include',
		contentType			:'application/json',
	},
	removeCategory:{
		url       			:'removeCategory',
		type      			:'POST',
		credentials			:'include',
		contentType			:'application/json',
	},
	findArticle:{
		url       			:'findArticle',
		type      			:'POST',
		credentials			:'include',
		contentType			:'application/json',
	},
	findSomeArticle:{
		url       			:'findSomeArticle',
		type      			:'POST',
		credentials			:'include',
		contentType			:'application/json',
	},
});

export default DBF.context;