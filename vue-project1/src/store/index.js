import Vue from 'vue'
import Vuex from 'vuex'
import {mapState} from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	count: 3
  },
  mutation: {
  	increment: state => state.count++,
  	decrement: state => state.count--
  }
})