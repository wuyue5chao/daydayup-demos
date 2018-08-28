import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/children/Login'
import First from '@/components/children/First'
import Second from '@/components/children/Second'
import SecondEnter from '@/components/children/second/SecondEnter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
      	{
      		path: '/',
      		component: First
      	}
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
      	{
      		path: '/',
      		name: 'login',
      		component: Login
      	},
      	{
      		path: 'first',
      		name: 'first',
      		component: First
      	},
      	{
      		path: 'second',
      		name: 'second',
      		component: Second,
          children: [
            {
              path: 'second-enter',
              name: 'second-enter',
              component: SecondEnter
            }
          ]
      	}
      ]
    }
  ]
})
