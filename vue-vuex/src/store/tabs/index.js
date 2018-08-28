import axios from 'axios'

const state = {       //初始化数据
	tagList: []
}

const mutations = {
	SET_TAGLIST(state, v){
		state.tagList = v
	}
}

const actions = {
	getTagList: function(context){    // context =>$store
		axios.get('http://localhost:8081/static/tagList.json')
			 .then(data => {
			 	context.commit('SET_TAGLIST', data.data)
			 })
	}
}

export default{
	state,
	mutations,
	actions
}