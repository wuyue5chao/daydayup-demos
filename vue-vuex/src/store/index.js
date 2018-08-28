import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import tabs from './tabs'
import others from './others'

Vue.use(Vuex)


// 通过 modules 导出两个模块
export default new Vuex.Store({
	modules: {
		tabs,
		others
	}
})