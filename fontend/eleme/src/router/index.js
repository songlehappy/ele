import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/components/Msite'
import Profile from '@/components/Profile'
import Order from '@/components/Order'
//以下为shop所需组件
import Shop from '@/components/Shop'
import Goods from '@/components/shop/Goods'
import Comment from '@/components/shop/Comment'
import LinkR from '@/components/FRouter.vue'
import LDetail from '@/components/LDetail.vue'
import Discover from '@/components/Discover'
import Search from '@/components/Search'
import SearchPage from '@/components/search/Searchpage'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/msite',
            name: 'Msite',
            components: {
                Body: Msite,
                Footer: LinkR
            }
        },
        {
            path: '/discover',
            name: 'Discover',
            components: {
                Body: Discover,
                Footer: LinkR
            }
        },
        {
            path: '/profile',
            name: 'Profile',
            components: {
                Body: Profile,
                Footer: LinkR
            }
        },
        {
            path: '/order',
            name: 'Order',
            components: {
                Body: Order,
                Footer: LinkR 
            }
        },
        {
            path: '/LDetail/:Id',
            name: 'LDetail',
            components: {
                Body: LDetail,
            }
        },
        {
            path: '/Search',
            name: 'search',
            components: {
                Body:Search
            }
        },
        {
            path: "/SearchPage",
            name: 'SearchPage',
            components: {
                Body:SearchPage
            }
        },
        {
            path: "/Discover",
            name: 'Discover',
            component: Discover
        },
        //以下为详情页路由
        {
            path: '/shop/:id',
            components: {
                Body: Shop,  
            },
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
                    path: '/',
                    redirect: "goods"
                }
            ]
        },
        {
            path: "*",
            redirect: "/msite/"
        },
    ]
})
