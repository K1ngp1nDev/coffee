import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Coffee from '../components/Coffee.vue'
import Pleasure from '../components/Pleasure.vue'
import Header from '../components/Header.vue'
import About from '../components/About.vue'
import Card from '../components/Card.vue'
import Video from '../components/Video.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'header',
    component: Header,
      children: [
        {
          path: '/',
          name: 'main',
          component: Main
        },
        {
          path: '/coffee',
          name: 'coffee',
          component: Coffee
        },
        {
          path: '/pleasure',
          name: 'pleasure',
          component: Pleasure
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        }        ,
        {
          path: '/video',
          name: 'video',
          component: Video,
        }
      ]
    },
    {
      path: '/card',
      name: 'card',
      component: Card,
    }
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
