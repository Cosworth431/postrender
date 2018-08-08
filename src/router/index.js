import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Intro from '@/components/Intro'
import Posts from '@/components/Posts'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
