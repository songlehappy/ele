<template>
    <div>
        <div class="shop-top" v-if="flag">
            <div class="bg-pic" :style="'background-image: url(https://fuss10.elemecdn.com/'+shopHead.image_path+(/png$/.test(shopHead.image_path)?'.png':'.jpeg')+'?imageMogr/format/webp/thumbnail/!40p/blur/50x40/)'"></div>
            <div class="back-index">
                <a href="JavaScript:history.go(-1)">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
                    </svg>
                </a>
            </div>
            <div class="shop-content" @click="goShop()">
                <img :src="'https://fuss10.elemecdn.com/'+shopHead.image_path+(/png$/.test(shopHead.image_path)?'.png':'.jpeg')" :alt="shopHead.name">
                <div class="shop-intrduce">
                    <div>{{shopHead.name}}</div>
                    <div>
                        <span v-if="shopHead.delivery_mode">蜂鸟专送</span>
                        <span v-if="!shopHead.delivery_mode">商家配送</span>
                        <span class="shop-slash">{{shopHead.order_lead_time}}分钟送达</span>
                        <span class="shop-slash">配送费￥{{shopHead.float_delivery_fee}}</span>
                    </div>
                    <div>
                        <span>公告:</span>
                        <span class="three-point">{{shopHead.promotion_info}}</span>
                    </div>
                </div>
            </div>
            <div class="shop-activity" @click="goActivity()">
                <span>
                    <i>{{shopHead.activities[0].icon_name}}</i>{{shopHead.activities[0].tips}}</span>
                <span>{{shopHead.activities.length}}个活动</span>
            </div>
        </div>
        <div class="shop-tab">
            <a :href="'#/shop/'+id+'/goods'" @click="addUnderline(0)">
                <span :class="{'under-line':underline===0}">商品</span>
            </a>
            <a :href="'#/shop/'+id+'/comment'" @click="addUnderline(1)">
                <span :class="{'under-line':underline===1}">评价</span>
            </a>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
// 引入辅助函数mapstate
import { mapState } from 'vuex'
import { Loading } from 'element-ui';
export default {
    name: 'Shop',
    data() {
        return {
            flag: false,
            active: 'tab-container2',
            id: '',
            underline: 0,
            fullscreenLoading: false,
        }
    },

    mounted: function () {
        let loadingInstance = Loading.service();
        // 页面加载等待时间

        setTimeout(function () {
            loadingInstance.close()
        }, 1000)

        this.id = this.$route.params.id;
        var id = this.id;
        // console.log(this.$route.params.id )
        //传入id获取店面头部信息--商品信息--品论信息
        this.$store.dispatch('getShopHeadData', id);
        this.$store.dispatch('getShopGoodsData', id);
        // this.$store.dispatch('getShopCommentData', id);
        //以下为判定shopHead数据是否传过来？
        var that = this;
        this.timer = setInterval(function () {
            if (that.shopHead !== '') {
                that.flag = true;
            }
            if (that.flag === true) {
                clearInterval(that.timer);
            }
        }, 30)
    },
    methods: {
        goShop() {
            console.log(1);
        },
        goActivity() {
            console.log(2);
        },
        addUnderline(num) {
            this.underline = num;
        }
    },
    computed: {
        //得到状态信息
        ...mapState(['shopHead']),
    }
}
</script>

<style scoped lang='scss' >
.shop-top {
    position: relative;
    color: #fff;
    font-size: 0.293333rem;
}

.bg-pic {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #3190e8;
    background-size: cover;
    background-repeat: no-repeat;
    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(119, 103, 137, .43);
    }
}

.back-index {
    position: relative;
    padding: 0.106667rem 0.266667rem;
    svg {
        fill: rgb(255, 255, 255);
        width: 0.666667rem;
        height: 0.666667rem;
    }
}

.shop-content {
    position: relative;
    display: flex;
    img {
        width: 1.733333rem;
        height: 1.733333rem;
        border: 1px solid #fff;
        border-radius: 0.106667rem;
        margin: 0 0.266667rem;
    }
    .shop-intrduce {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 0.293333rem;
        div:nth-child(1) {
            font-size: 0.466667rem;
            line-height: 1.2em;
            font-weight: 700;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}

.shop-activity {
    position: relative;
    height: 0.8rem;
    padding: 0.266667rem;
    display: flex;
    justify-content: space-between;
    span {
        i {
            background-color: rgb(112, 188, 70);
            color: rgb(255, 255, 255);
            border-color: rgb(112, 188, 70);
            margin-right: 0.133333rem;
        }
    }
}

.shop-tab {
    display: flex;
    font-size: 0.373333rem;
    line-height: 1.2rem;
    border-bottom: 1px solid #ddd;

    a {
        text-decoration: none;
        color: #666;
        flex: 1;
        display: flex;
        justify-content: center;
    }
}

.under-line {
    color: #3190e8;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        height: 0.1rem;
        left: 0;
        right: 0;
        bottom: 0.1rem;
        background: #3190e8;
    }
}

// 斜杠的伪类
.shop-slash {
    &:before {
        content: '/';
        margin: 0 0.2rem 0 0;
        color: #ddd;
    }
}

//...的类
.three-point {
    position: relative;
    top: 0.05rem;
    display: inline-block;
    width: 6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
