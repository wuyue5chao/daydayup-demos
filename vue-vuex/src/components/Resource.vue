<template>
  <div>
  	vue-resource
  	<!-- <p>{{msg}}</p> -->
  	<ul class="lists">
  		<li v-for="(item, index) in gridData" :key="index">
  			{{item.name}}: {{item.age}}
  		</li>
  	</ul>
  	
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default{
  name: 'Resource',
  data(){
  	return {
  	  gridData: [
  	    {
  	      "name": "Lily",
          "age": 23
  	    }
  	  ],
  	  msg: 'hello',
  	  apiUrl: 'http://127.0.0.1:8081/static/test.json'
  	}
  },
  mounted: function(){
  	// this.getCustomers()
  	// this.setDD()
  },
  methods:{
  	setDD: function(){
		  this.$set(this.gridData, 'name', 'jJjl')
  	},
  	getCustomers: function(){
  		this.$http.get(this.apiUrl)
  		    .then(response => {
  		    	console.log(response.data)
  		    	// this.$set('gridData', response.data)
  		    })
  		    .catch(function(response){
  		    	console.log(response)
  		    })
  	}

  }
}
</script>

<style scoped>
.lists{text-align: left;}
</style>