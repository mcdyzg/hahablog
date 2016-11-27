import path from 'path'

function config(root){
	return {
		controllers : path.normalize(root+'/controllers/'),
		models:path.normalize(root+'/models/'),
		db:'mongodb://localhost:27017'
	}
}

export default config;