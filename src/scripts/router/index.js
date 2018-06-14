import Vue from 'vue'
import Router from 'vue-router'
import Index from 'PAGES/Index'
import Playlists from 'PAGES/Playlists'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/playlists', name: 'playlists', component: Playlists },
  ]
})
