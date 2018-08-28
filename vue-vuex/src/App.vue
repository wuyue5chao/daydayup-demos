<template>
  <div id="app">
    <h4>父组件 - home</h4>
    <p>组件自定义事件 {{isred}}</p>
    <p>来自vuex-store {{$store.state.others.isBlue}}</p>
    <HelloWorld :isRed.sync='isred'></HelloWorld>
    <hr/>
    <Axios></Axios>
    <hr/>
    <Resource></Resource>
    <hr/>
    <Tabs></Tabs>
    <Vote></Vote>
  </div>
</template>

<script>
import Vuex from 'vuex'
import {mapState, mapMutations} from 'vuex'  


import HelloWorld from '@/components/HelloWorld'
import Vote from '@/components/Vote'
import Tabs from '@/components/Tabs'
import Resource from '@/components/Resource'
import Axios from '@/components/Axios'

export default {
  name: 'App',
  data(){
    return {
      isred: false
    }
  },
  components: {
    HelloWorld,
    Vote,
    Tabs,
    Resource,
    Axios
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
