import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import HelloWorld from '@/components/HelloWorld'
import Tab from '@/components/Tab.vue'
import ShoppingCart from '@/components/ShoppingCart'
import TodoList from '@/components/TodoList'

// build/webpack.base.conf.js文件中找到@
// '@': resolve('src') 指向src文件夹
// ../当前目录
// ../父级目录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/tab',
      name: 'Tab',
      component: Tab,
      children: [{
        path: '/tab/helloworld',
        name: 'HelloWorld',
        component: HelloWorld
      }]
    },
    {
      path: '/shopping',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/todolist',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
