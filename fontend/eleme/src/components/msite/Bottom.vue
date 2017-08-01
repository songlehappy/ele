<template>
    <div>
        <h3>推荐商家</h3>
        <div class="index-container" :key="index" v-for="(item,index) in indexShopData" @click="goDetial(item.id)">
            <div class="index-logo">
                <img :src="'https://fuss10.elemecdn.com/'+item.image_path+(/png$/.test(item.image_path)?'.png':'.jpeg')" :alt="item.name" />
            </div>
            <div class="index-main">
                <section>
                    <div class="shopname">
                        <b :class="item.is_premium?'index-premium':''">{{item.name}}</b>
                    </div>
                    <div class="support">
                        <i :key='num' v-for="(str, num) in item.supports"> {{str.icon_name}} </i>
                    </div>
                </section>
                <section>
                    <div class="rate">
                        <el-rate v-model="item.rating" allow-half disabled show-text text-color="#ff9900"></el-rate>
                        <span>月售{{item.recent_order_num}}单</span>
                    </div>
                    <div class="bus" v-if="item.delivery_mode">蜂鸟专送</div>
                </section>
                <section>
                    <div class="money">
                        <span>¥{{item.float_minimum_order_amount}}起送</span>
                        <span class="index-slash">配送费¥{{Math.round(item.float_delivery_fee)}}</span>
                        <span class="index-slash">{{item.average_cost}}</span>
                    </div>
                    <div class="distance">
                        <span>{{Math.round(item.distance/10)/100}}km</span>
                        <span class="index-slash">{{item.order_lead_time}}分钟</span>
                    </div>
                </section>
                <section>
                    <div class="activity">
                        <span :key="num" v-for="(str, num) in item.activities" v-show="item.isActivity || num < 2 ">
                            <i>{{str.icon_name}}</i>{{str.tips}}
                        </span>
                    </div>
                    <div class="activeNum" v-if="item.activities.length>2?true:false" @click.stop="changeActivity(index)">
                        <span>{{item.activities.length}}个活动</span>
                        <svg class="" ref="icosvg">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#activity-more"></use>
                        </svg>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
// 引入辅助函数mapstate,mapgetters,mapMutations
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
    name: 'Bottom',
    data() {
        return {

        }
    },
    methods: {
        //去详情页
        goDetial(id) {
            window.open('http://localhost:8080/#/shop/'+id,'_self');
        },
        ...mapMutations({
            changeActivity: 'changeActivity',
        })
    },
    computed: {
        ...mapState(['indexShopData', 'indexShopNum']),
        ...mapGetters({ 'pic': 'mixPic' })
    }
}
</script>

<style scoped lang="scss">
h3 {
    margin-top: .266667rem;
    line-height: .906667rem;
    font-weight: 600;
    border-bottom: 1px solid #eee;
    font-size: 0.4rem;
    padding-left: 0.4rem;
}

// 每个店面内容的
.index-container {
    display: flex;
    justify-content: space-between;
    font-size: 0.293333rem;
    color: #666;
    border-bottom: 1px solid #eee; // 以下店面左边区域
    .index-logo {
        padding: 0.4rem 0.266667rem;
        img {
            width: 1.6rem;
            height: 1.6rem;
        }
    } // 以下店面右边区域
    .index-main {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-around;
        padding: 0.4rem 0.266667rem 0.4rem 0;
        section {
            display: flex;
            justify-content: space-between;
            position: relative;
            margin-top: 0.2rem;
        }
        section:nth-child(3) {
            padding-bottom: 0.2rem;
            border-bottom: 1px solid #eee;
        }
    }
}

// ---------------------------------=======================-----------------
.index-main {
    // 以下店铺名
    .shopname {
        font-size: 0.4rem;
        color: #333;
    } //票、保
    .support {
        i {
            margin-right: 0.1rem;
            color: #999;
        }
    } // 以下评分
    .rate {
        display: flex;
        span {
            padding-left: 0.2rem;
        }
        .el-rate__text {
            font-size: 22px;
        }
    } //蜂鸟专送
    .bus {
        background-color: #2395ff;
        color: #fff;
        padding: 0 0.1rem;
    } //距离
    .distance {
        span:last-child {
            color: #2395ff;
        }
    } // 以下活动数量
    .activeNum {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        svg {
            width: 0.173333rem;
            height: 0.173333rem;
            opacity: 0.9;
        }
    } // 以下活动内容
    .activity {
        flex: 1;
        display: flex;
        flex-direction: column;
        line-height: 0.426667rem;
        font-size: 0.266667rem;
        color: #939393;
        span {
            display: block;
            width: 6rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        span:first-child {
            i {
                background-color: rgb(112, 188, 70);
                color: rgb(255, 255, 255);
                border-color: rgb(112, 188, 70);
            }
        }
        i {
            background-color: rgb(240, 115, 115);
            color: rgb(255, 255, 255);
            border-color: rgb(240, 115, 115);
            margin-right: 0.133333rem;
        }
    }
}

// -------------------------==================-------------------------
// 品牌伪类
.index-premium {
    &:before {
        content: "品牌";
        margin-right: 0.133333rem;
        padding: 0 0.066667rem;
        height: 0.4rem;
        border-radius: 0.053333rem;
        background-color: #ffd930;
        color: #52250a;
        text-align: center;
        font-weight: 700;
        font-size: 0.293333rem;
        line-height: 0.4rem;
    }
}

// 斜杠的伪类
.index-slash {
    &:before {
        content: '/';
        margin: 0 0.2rem 0 0;
        color: #ddd;
    }
}
</style>
