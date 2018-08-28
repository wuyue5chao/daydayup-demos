<template>
  <div>
    first page  -- Vuex
    <p>{{$store.state.count}}</p>
    <p>
      <button @click="$store.commit('increment')">++</button>
      <button @click="$store.commit('decrement')">--</button>
    </p>
    <p>{{count}}</p>
    <p>
      <button @click="increment">++</button>
      <button @click="decrement">--</button>
    </p>
  </div>
</template>

<script>
import store from '@/store'
import {mapState} from 'vuex'
  export default{
    name: 'First',
    computed: {
      /*count(){
        return store.state.count
      },*/
      ...mapState({
        count(state){
          console.log('mapState')
          return state.count
        }
      })
    },
    methods: {
      increment: function(){
        store.commit('increment')
      },
      decrement: function(){
        store.commit('decrement')
      }
    },
    store
  }
</script>
