<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <button 
      :class="{active: isRed}"
      @click="change">改变红色</button>

    <button 
      :class="{active2: $store.state.others.isBlue}"
      @click="$store.state.others.isBlue = !$store.state.others.isBlue">改变蓝色</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['isRed'],
  data () {
    return {
      msg: '子组件 - child'
    }
  },
  methods: {
    change: function(){
      console.log(222)
      this.$emit('update:isRed', !this.isRed)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background: #f5f6f7;
  padding: 20px;
}

.active{
  background: red;
  color: #fff;
}

.active2{
  background: blue;
  color: #fff;
}

h1, h2 {
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
}
</style>
