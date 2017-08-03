// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.scss'
import '../static/font-awesome-4.7.0/css/font-awesome.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'

import { Rate, Badge } from 'element-ui'
Vue.use(Rate)
Vue.use(Badge)
// // 引入美腿上下拉插件
import dom from '@/components/dom'
import { Loadmore, InfiniteScroll } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
Vue.use(InfiniteScroll)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  store,
  components: { App }
})
