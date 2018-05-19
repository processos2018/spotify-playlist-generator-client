// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueHead from 'vue-head'
import App from './App'
import router from './scripts/router'

Vue.config.productionTip = false

// Rola a página para o topo sempre que há
// mudança na rota através do vue-router
router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next()
})

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueAnalytics, {
    id: process.env.SITE_ANALYTICS,
    router
  })
}

Vue.use(VueHead)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// Configurações para teste de performance
// Chrome: https://chrome.google.com/webstore/detail/vue-performance-devtool/koljilikekcjfeecjefimopfffhkjbne
// Firefox: https://addons.mozilla.org/en-US/firefox/addon/vue-performance-devtool/
Vue.config.devtools = true
Vue.config.performance = true
