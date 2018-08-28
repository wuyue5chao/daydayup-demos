<template>
	<div class="tabs">
		<button class="tags-btn" 
		  :class="{'tags-active': i===index}" 
		  v-for="(item, i) in tagList" 
		  :key="i"
		  @click="index=i">{{item.tagName}}</button>
		<div class="con" v-for="(item,i) in tagList"  v-show="i===index">
			<p v-for="(info, i) in item.newsList">
				<a href="info.newHref">{{info.newTitle}}</a>
			</p>
		</div>
	</div>
</template>
<script>
// import axios from 'axios'
import {mapState, mapActions} from 'vuex'

export default {
	name: 'Tabs',
	data(){
	  return {
	  	index: 0,
	  	// tagList: []
	  }
	},
	computed: {
		// ...mapState(['tagList'])
		...mapState({
			tagList(state){
				return state.tabs.tagList
			}
		})
	},
	methods:{
		...mapActions(['getTagList'])
	},
	mounted(){
		// axios.get('http://localhost:8084/static/tagList.json')
		// 	 .then(data => {
		// 	 	// this.tagList = data.data
		// 	 	this.$store.commit('SET_TAGLIST', data.data)
		// 	 })

		// this.$store.dispatch('getTagList');

		this.getTagList()
	}
}
</script>
<style scoped>
.tabs{
	text-align: left;
	margin-bottom: 30px;
}
.tags-btn{
	margin: 5px;
}

.tags-active{
	background: red;
	color: #fff;
}

.con{
	border: 1px solid #ddd;
	padding: 10px;
}
</style>