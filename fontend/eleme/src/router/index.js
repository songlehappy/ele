import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/components/Msite'
import Discover from '@/components/Discover'
import Profile from '@/components/Profile'
import Order from '@/components/Order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'Msite',
      component: Msite
    },
    {
      path:'/discover',
      name:'Discover',
      component:Discover
    },
     {
      path:'/profile',
      name:'Discover',
      component:Profile
    },
     {
      path:'/order',
      name:'Order',
      component:Order
    },
    {
      path:"*",
      redirect:"/msite/"
    }
  ]
})
