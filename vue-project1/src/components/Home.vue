<template>
  <div id="app">
    <Header :logo="logoMsg"></Header>
    <!-- <Login @transferUser="getUser"></Login>
    <p>用户名：{{user}}</p> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Login from './children/Login.vue'
  import '../../static/css/normalize.css'

  export default{
    name: 'App',
    data(){
      return{
        logoMsg: 'wisewrong',
        user: ''
      }
    },
    components: {
      Header,
      Login
    },
    methods:{
      getUser: function(msg){
        this.user = msg
      }
    }

  }
</script>

<style lang="scss">
  $light:#aaa;
  $white:#fff;

  body{
    background:#f5f6f7;
  }

  .header{
    background: $light;
    color: $white;
    display:flex;
    justify-content: space-between;
    align-items:center;
  }
  .logo{
    padding:10px;
  }
  .nav{
    flex:4;
    display: flex;
  }
  .nav li{
    flex: 1;
    padding:0 5px;
    list-style: none;
  }
  .nav li .on{
    background:#eee;
  }

  .login{
    width:80%;
    margin: 20px auto;
    padding:20px;
    box-sizing:border-box;
    background: #ccc;
  }
  .login input{
    width:60%;
  }
</style>
