import Vue from 'vue'
import Router from 'vue-router'
import csgo from './views/csgo.vue'
import streamers from './views/streamers.vue'
import organizers from './views/organizers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'csgo',
      component: csgo
    },
    {
      path: '/dota',
      name: 'dota',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/dota.vue')
    },
    {
      path: '/streamers',
      name: 'streamers',
      component: streamers
    },
    {
      path: '/organizers',
      name: 'organizers',
      component: organizers
    },
  ]
})
