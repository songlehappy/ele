import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/components/Msite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Msite',
      component: Msite
    },
    {
      path:"*",
      redirect:"/msite/"
    }
  ]
})
