<template>
  <header class="header">
    <router-link id="logo" to="/home/first">{{logo}}</router-link>
    <ul class="nav">
      <li v-for="nav in navs">
        <router-link :to="nav.route" tag="span">{{nav.li}}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default{
    name: 'Header',
    data(){
      return{
        navs: [
          {li: '主页', route: '/'},
          {li: '日志1', route: '/home/first'},
          {li: '说说2', route: '/home/second'},
          {li: '登录', route: '/home/'}
        ]
      }
    },

    props: ['logo']
  }
</script>
