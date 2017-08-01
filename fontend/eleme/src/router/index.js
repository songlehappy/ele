import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/components/Msite'
import Discover from '@/components/Discover'
import Profile from '@/components/Profile'
import Order from '@/components/Order'
//以下为shop所需组件
import Shop from '@/components/Shop'
import Goods from '@/components/shop/Goods'
import Comment from '@/components/shop/Comment'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      name: 'Msite',
      component: Msite
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/profile',
      name: 'Discover',
      component: Profile
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    //以下为详情页路由
    {
      path: '/shop/:id',
      component: Shop,
      //以下为详情页 子路由
      children: [
        {
          path: 'goods',
          component: Goods
        },
        {
          path: 'comment',
          component: Comment
        },
        {
          path:'/',
          redirect: Goods
        }
      ]
    },
    {
      path: "*",
      redirect: "/msite/"
    },
  ]
})
