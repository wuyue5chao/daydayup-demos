import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {       //初始化数据
	isBlue: true,
	nodeVoteCount: 0,    
	vueVoteCount: 0,
	tagList: []
}

// mutations用大写常量来表示

const mutations = {
	ADDNODEVOTE(state, n=1){
		// state.nodeVoteCount++
		state.nodeVoteCount += n
	},
	ADDVUEVOTE(state, n=1){
		// state.vueVoteCount++
		state.vueVoteCount += n
	},

	SET_TAGLIST(state, v){
		state.tagList = v
	}
}

const actions = {
	getTagList: function(context){    // context =>$store
		axios.get('http://localhost:8084/static/tagList.json')
			 .then(data => {
			 	context.commit('SET_TAGLIST', data.data)
			 })
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})