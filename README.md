# hahablog
react做的博客

### Usage

```
1. npm install
2. npm start
3. open localhost:8081
```
	
### Features

* react
* react-router
* reflux
* superagent
* material-ui
* marked
* webpack



### 目录结构
```
├── dist
├── src
│   ├── app   	
│   ├── components						
│   ├── modules	
│   ├── pages
│   ├── img
├── test
├── package.json
└── README
```

### Explation

1. 使用封装在一起的db模块，请求url都在同一个文件配置，省力。
2. 起初使用fetch，后台发现请求不定时有问题，改用superagent，暂时没发现
3. 可以在webpack里定义多entry，打包的时候会打出多个包



