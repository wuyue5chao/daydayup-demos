<template>
  <section>
    <div class="login">
      <label>
        <span>用户名：</span>
        <input v-model="username" @change="setUser"/>
      </label>
    </div>
  </section>
</template>

<script>
/*
1、父组件可以使用 props 把数据传给子组件
2、子组件可以使用 $emit 触发父组件的自定义事件
    vm.$emit(event, arg)   //触发当前实例上的事件
    vm.$on(event, fn)      //监听event事件后运行fn
 
*/

  export default{
    name: 'Login',
    props: ['message'],
    data(){
      return {
        username: ''
      }
    },
    methods:{
      setUser: function(){
        this.$emit('transferUser', this.username)
        // console.log(this.username)
      }
    }
  }
</script>
