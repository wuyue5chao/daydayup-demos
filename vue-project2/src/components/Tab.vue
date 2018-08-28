<template>
  <div>
    <Nav></Nav>
    <router-link to="/tab/helloworld"><li>helloworld</li></router-link>
    <router-view/>
    <div class="tab">
      <div class="tab-tit">
        <a href="javascript:;" @click="curId=0" :class="{'cur': curId===0}">html</a>
        <a href="javascript:;" @click="curId=1" :class="{'cur': curId===1}">css</a>
        <a href="javascript:;" @click="curId=2" :class="{'cur': curId===2}">js</a>
        <a href="javascript:;" @click="curId=3" :class="{'cur': curId===3}">vue</a>
      </div>
      <div class="tab-con">
        <div v-show="curId===0">html</div>
        <div v-show="curId===1">css</div>
        <div v-show="curId===2">js</div>
        <div v-show="curId===3">vue</div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './Nav'
export default {
  name: 'Tab',
  data () {
    return {
      curId: 0
    }
  },
  components: {
    Nav
  },
  computed: {

  },
  methods: {

  },
  mounted: function () {

  }
}
</script>

<style scoped>
  .tab{
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .tab-tit{
    font-size: 0;
    width: 100%;
  }
  .tab-tit a{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    width: 25%;
    text-align: center;
    background: #ccc;
    color: #333;
    text-decoration: none;
  }
  .tab-tit .cur{
    background: #09f;
    color: #fff;
  }
  .tab-con div{
    border: 1px solid #ccc;
    height: 100px;
    padding-top: 20px;
  }
</style>
