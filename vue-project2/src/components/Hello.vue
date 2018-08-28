<template>
  <div class="hello">
    <Nav></Nav>
    <router-link to="/shopping"><li>shopping</li></router-link>
    <!--<router-link to="/tab/helloworld"><li>helloworld</li></router-link>-->
    <router-view/>
    <h1>{{ msg }}</h1>
    <h2>test</h2>
    <!--<Tab></Tab>-->
  </div>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Hello',
  data () {
    return {
      msg: 'vue!'
    }
  },
  components: {
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }*/
  .hello{
    text-align: center;
  }
</style>
