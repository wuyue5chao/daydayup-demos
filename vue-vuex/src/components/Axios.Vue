<template>
  <div>
  	vue-axios 跨域问题
  	<!-- <p>{{msg}}</p>	 -->
  	<ul class="lists">
  		<li v-for="(item, index) in lists" :key="index">
  			{{item.name}}: {{item.age}}
  		</li>
  	</ul>

    <div class="thickbox">
      <h4>{{noticeCon.title}}</h4>
      <p>{{noticeCon.content}}</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default{
  name: 'Axios',
  data(){
  	return {
  	  msg: 'hello',
  	  // apiUrl: '/static/test.json',
  	  // apiUrl: 'http://127.0.0.1:8081/static/test.json',
  	  apiUrl: '/api/static/test.json',
      crossDomainUrl: 'http://a.ylot.net/api?m=system.appInfo.notice',
  	  lists: [],
      noticeCon: {
        content: 'wwew',
        title: '123'
      }
  	}
  },
  mounted: function(){
  	this.getData();
    this.getNotice();
  },
  methods:{
  	getData: function(){
      console.log(this.apiUrl);
  		axios.get(this.apiUrl)
  			.then(res => {
          console.log(res.data)
  				this.lists = res.data
  			})
  	},
    getNotice: function(){
      console.log(this.crossDomainUrl)
      axios.get(this.crossDomainUrl)
         .then(res => {
            console.log(res.data)
            this.noticeCon = res.data
         })
    }
  }
}
</script>

<style scoped>
.lists{text-align: left;}
.thickbox{width: 250px; padding: 0 10px; margin: 0 auto; border: 1px solid #ddd;}
.thickbox > h4{border-bottom: 1px solid #ddd; padding-bottom: 5px;}
.thickbox > p{ text-align: left; }
</style>