import Vue from 'vue'
import Router from 'vue-router'
import Index from 'PAGES/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Index', component: Index },
  ]
})
