const state = {       //初始化数据
	isBlue: true,
	nodeVoteCount: 0,    
	vueVoteCount: 0
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
	}
}

export default{
	state,
	mutations,
}