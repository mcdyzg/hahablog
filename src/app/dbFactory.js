import _assign from 'lodash/assign'
import _map from 'lodash/map'
// import 'whatwg-fetch'
import superagent from 'superagent'

let DBF = {
    __: {},

    set(key, value) {
        this.__[key] = value;
    },
    get(key) {
        return this.__[key];
    },
    create(name, methods) {
        this.context[name] = new DB(methods);
    },
    context: {
        link: data => this.context.Data = data,
        Data: {}
    }
}

class DB {
    constructor(methods) {
        _map(methods, (config, method) => this[method] = query => new request(config, query));
    }
}

class request {
    constructor(config, querys) {
        return new Promise((resolve, reject)=> {


            // 使用fetch,有时会出现后台显示请求成功，前台请求不成功，所以换成superagent,暂时没发现问题
            // let temData = '';
            // let temConfig = {
            //     method : config.type,
            //     credentials:config.credentials || 'same-origin',
            //     headers: {
            //         'Content-Type': config.contentType || 'application/json;charset=UTF-8',
            //     },
            // };
            // if(config.type === 'GET'){
            //     _map(querys,(value,name)=>{
            //         temData += `${name}=${value}&`
            //     })
            // }else if(config.type === 'POST'){
            //     temConfig.body = JSON.stringify(querys);
            // }

            // fetch(`${DBF.get('urlPrefix')}${config.url}${config.type==='GET'?'?'+temData:''}`,temConfig)
            // .then(parseJSON)
            // .then((res)=>{
            //     resolve(DBF.get('defaultParsePesp')(res))
            // },(err)=>{
            //     reject({
            //         status: '404',
            //         msg:'请求失败，请稍后重试',
            //         err:err,
            //     })
            // })




            superagent
                .post(`${DBF.get('urlPrefix')}${config.url}`)
                .send(querys)
                .end((err, res)=>{
                    if(err){
                        reject({
                            status: '404',
                            msg:'请求失败，请稍后重试',
                            err:err,
                        })
                    }else{
                        resolve(DBF.get('defaultParsePesp')(res.body))
                    }
                })
            
        })
    }
}

function parseJSON(response) {
  return response.json()
}

export default DBF