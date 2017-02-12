import _assign from 'lodash/assign'
import _map from 'lodash/map'
import 'whatwg-fetch'

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

            let temData = '';
            let temConfig = {
                method : config.type,
                credentials:config.credentials || 'omit',
                headers: {
                    'Content-Type': config.contentType || 'application/x-www-form-urlencoded',
                },
            };
            if(config.type === 'GET'){
                _map(querys,(value,name)=>{
                    temData += `${name}=${value}&`
                })
            }else if(config.type === 'POST'){
                temConfig.body = JSON.stringify(querys);
            }

            fetch(`${DBF.get('urlPrefix')}${config.url}${config.type==='GET'?'?'+temData:''}`,temConfig)
            .then(parseJSON)
            .then((res)=>{
                resolve(DBF.get('defaultParsePesp')(res))
            },(err)=>{
                reject({
                    status: '404',
                    msg:'请求失败，请稍后重试',
                    err:err,
                })
            })

            
        })
    }
}

function parseJSON(response) {
  return response.json()
}

export default DBF