import Vue from 'vue'
import Router from 'vue-router'
import Index from 'PAGES/Index'
import Playlists from 'PAGES/Playlists'
import Playlist from 'PAGES/Playlist'
import Customizer from 'PAGES/Customizer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/playlists', name: 'playlists', component: Playlists },
    { path: '/playlist/:name', name: 'playlist', component: Playlist },
    { path: '/customizer', name: 'customizer', component: Customizer },
  ]
})
