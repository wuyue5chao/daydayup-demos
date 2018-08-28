<template>
  <div>
    <Nav></Nav>
    <div class="main">
      <h2>小目标列表</h2>
      <div class="list">
        <h3>添加小目标</h3>
        <input type="text" class="text-keyword" placeholder="输入小目标后，按回车确认" @keyup.13="addList" v-model="addText"/>
        <p>共有{{prolist.length}}个目标, {{noend == 0 ? '全部完成了' : '已完成' + (prolist.length - noend) + ', 还有' + noend +'条未完成。'}}</p>
        <p>
          <input type="radio" name="chooseType" checked="true" @click="chooseList(1)"/><label>所有目标</label>
          <input type="radio" name="chooseType" @click="chooseList(2)"/><label>已完成目标</label>
          <input type="radio" name="chooseType" @click="chooseList(3)"/><label>未完成目标</label>
        </p>
      </div>
      <ul>
        <li class="li1" v-for="(item, index) in newList" :key="index" :class="{'eidting': curIndex===index}">
          <div>
            <span class="status-span" @click="changeType(index)" :class="{'status-end': item.status}"></span>
            <span @dblclick="curIndex=index">{{item.name}}</span>
            <span class="close" @click="delectList(item)">X</span>
          </div>
          <input type="text" class="text2" v-model="item.name" @keyup.esc="cancelEdit(item)" @blur="edited" @focus="editBefore(item.name)" @keyup.enter="edited" v-focus />
        </li>
      </ul>
      <div v-show="prolist.length == 0">还有小目标噢~</div>
    </div>
  </div>
</template>
<script>
import Nav from './Nav'
export default {
  name: 'TodoList',
  data () {
    return {
      addText: '',
      prolist: [
        {name: 'html5', status: false},
        {name: 'css3', status: false},
        {name: 'vue', status: false},
        {name: 'react', status: false}
      ],
      newList: [],
      curIndex: '',
      beforeEditText: '',
      curType: 0
    }
  },
  components: {
    Nav
  },
  computed: {
    noend: function () {
      return this.prolist.filter(function (item) {
        return !item.status
      }).length
    }
  },
  methods: {
    addList () {
      this.prolist.push({
        name: this.addText,
        status: false
      })
      this.addText = ''
    },
    chooseList (type) {
      switch (type) {
        case 1: this.newList = this.prolist; break
        case 2: this.newList = this.prolist.filter(function (item) { return item.status }); break
        case 3: this.newList = this.prolist.filter(function (item) { return !item.status }); break
      }
    },
    changeType (index) {
      this.newList[index].status = !this.newList.status
      this.chooseList(this.curType)
    },
    delectList (list) {
      var index = this.prolist.indexOf(list)
      this.prolist.splice(index, 1)
      this.chooseList(this.curType)
    },
    editBefore (name) {
      this.beforeEditText = name
    },
    edited () {
      this.curIndex = ''
    },
    cancelEdit (val) {
      val.name = this.beforeEditText
      this.curIndex = ''
    }
  },
  mounted: function () {
    this.newList = this.prolist
  },
  directives: {
    'focus': {
      update (el) {
        el.focus()
      }
    }
  }
}
</script>
<style scoped>
  input{font-size: 14px;}
  /*body,ul,div,html{padding: 0;margin: 0;}*/
  .hidden{display: none;}
  .main{width: 500px;margin: 0 auto;}
  .main li{list-style-type: none;line-height: 40px;position: relative;border: 1px solid transparent;padding: 0 20px;}
  .main li .status-span{display: block;width: 10px;height: 10px;background: #ccc;margin: 14px 10px 0 0 ;float: left;}
  .main li .status-span.status-end{
    background: #09f;
  }
  .main li .close{position: absolute;color: #f00;font-size: 20px;line-height: 40px;height: 40px;right: 20px;cursor: pointer;display: none;top: 0;}
  .main li:hover{border: 1px solid #09f;}
  .main li:hover .close{display: block;}
  .main li div{display: block;}
  .main li.eidting div{display: none;}
  .main li .text2{height: 40px;padding-left: 10px;box-sizing: border-box;margin-left: 10px;width: 80%;display: none;}
  .main li.eidting .text2{display: block;}
  .main li .text-keyword{height: 40px;padding-left: 10px;box-sizing: border-box;margin-left: 10px;width: 80%;display: none;}
  .main .text-keyword{box-sizing: border-box;width: 100%;height: 40px;padding-left: 10px;outline: none;}
</style>
