// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.scss'
import '../static/font-awesome-4.7.0/css/font-awesome.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from  './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App }
})
