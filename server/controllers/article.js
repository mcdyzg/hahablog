import fs from 'fs'

function article(router){
	router.post('/article/insert',function*(next){
		if(U.isEmptyObject(this.request.body)) {
			console.log('无内容')
			return yield next;
		}

		yield M.article.create(this.request.body,function(err, obj){
			if(err) {
				console.log('错了')
				return;
			}
			console.log(obj)
		})

		yield M.article.find({category:'Web'},function(err, obj){
			if(err){
				console.log('出错')
			}
			console.log(obj)
		})
		this.status = 200;
		console.log('finash')
		this.body = {
			status:'ok'
		}
		// yield next;
	}).get('/category/find',function*(next){
		fs.readdirSync(C.category,function(err,files){
			if(err){
				console.log('出错了')
				return;
			}
		}).forEach(function(name){
			if (path.extname(name) === '') {
	      	  	console.log(name)
	      	}
		})
		// this.body = yield M.article.find();
	})
} 
export default article;