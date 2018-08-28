<template>
	<!-- <div class="vote">
      <p>总票数：{{$store.state.nodeVoteCount + $store.state.vueVoteCount}}</p>
      <div class="item">
        <h4>如何通过node.js对数据进行MD5加密</h4>
        <button @click="$store.state.nodeVoteCount++">投票</button> 票数：{{$store.state.nodeVoteCount}}
      </div>
      <div class="item">
        <h4>真正掌握vuex的使用方法（一）</h4>
        <button @click="$store.state.vueVoteCount++">投票</button> 票数：{{$store.state.vueVoteCount}}
      </div>
    </div> -->

    <!-- 直接写状态名 -->
    <!-- 通过store.commit来调用mutation里的方法 -->
    <!-- <div class="vote">
      <p>总票数：{{nodeVoteCount + vueVoteCount}}</p>
      <div class="item">
        <h4>如何通过node.js对数据进行MD5加密</h4>
        <button @click="$store.commit('ADDNODEVOTE')">投票</button>
        <button @click="$store.commit('ADDNODEVOTE', 2)">+2票</button>
         票数：{{nodeVoteCount}}
      </div>
      <div class="item">
        <h4>真正掌握vuex的使用方法（一）</h4>
        <button @click="$store.commit('ADDVUEVOTE')">投票</button>
        <button @click="$store.commit('ADDVUEVOTE', 2)">+2票</button>
         票数：{{vueVoteCount}}
      </div>
    </div> -->

    <!-- mutation里的操作必须是同步的 -->
	<div class="vote">
      <p>总票数：{{nodeVoteCount + vueVoteCount}}</p>
      <div class="item">
        <h4>如何通过node.js对数据进行MD5加密</h4>
        <button @click="ADDNODEVOTE()">投票</button>
        <button @click="ADDNODEVOTE(2)">+2票</button>
         票数：{{nodeVoteCount}}
      </div>
      <div class="item">
        <h4>真正掌握vuex的使用方法（一）</h4>
        <button @click="ADDVUEVOTE()">投票</button>
        <button @click="ADDVUEVOTE(2)">+2票</button>
         票数：{{vueVoteCount}}
      </div>
    </div>
</template>

<script type="text/javascript">
import Vuex from 'vuex'
import {mapState, mapMutations} from 'vuex'   

export default {
	name: 'Vote',
	data(){
		return {

		}
	},
	computed: {
	    // ...mapState(['nodeVoteCount', 'vueVoteCount']),
      ...mapState({
        nodeVoteCount(state){
          console.log(state)
          return state.others.nodeVoteCount
        },
        vueVoteCount(state){
          return state.others.vueVoteCount
        },
      }),
	    ...{
	      //自己的计算属性
	    }
	},
	methods: {
	    ...mapMutations(['ADDNODEVOTE', 'ADDVUEVOTE']),
	    ...{
	      // ...
	    }
	  }

}
</script>

<style type="text/css" scoped>
.vote{
  background: #efefef;
  padding:20px;
  text-align: left;
}
.vote .item{
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
}
</style>