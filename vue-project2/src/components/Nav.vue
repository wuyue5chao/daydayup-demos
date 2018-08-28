<template>
  <div>
    <ul class="navigition">
      <router-link to="/"><li>home</li></router-link>
      <router-link to="/shopping"><li>shopping</li></router-link>
      <router-link to="/todolist"><li>todolist</li></router-link>
      <router-link to="/tab"><li>tab</li></router-link>
    </ul>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'Nav'
}
</script>
<style scoped>
  ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .navigition{
    background: #f7f7f7;
    height: 40px;
    width: 100%;
    margin-bottom: 50px;
  }
  .navigition li{
    float: left;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .navigition li:hover{
    background: #eee;
  }
</style>
