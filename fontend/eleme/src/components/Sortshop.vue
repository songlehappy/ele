<template>
    <div>
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-for="(item,key) in list" :key="'list'+key" class="index-container_2XMzI" @click="goToDetail(item.id)">
                <div class="logo-container_1XLJl_0">
                    <div class="logo-main_1kulr_0">
                        <img :alt="item.name" class="logo-logo_2XR1m_0" :src="item.image_path|imgSrc">
                        <!---->
                    </div>
                    <div class="logo-newShop_1NvWt_0" v-if='item.is_new'><span>新店</span></div>
                    <!---->
                </div>
                <div class="index-main_2HHPe">
                    <section class="index-line_1Zyr1">
                        <h3 class="index-shopname_3_J4F" :class="item.is_premium?'before':''">
                            <span>{{item.name}}</span>
                        </h3>
                        <div class="index-supportWrap_VWrQG">
                            <div class="activity-container_2EaDo_0 activity-containerNoWrap_2zBBg_0">
                                <i v-for="(v,k) in item.supports" :key="k+'s'" class="activity-activityIcon_1iJyG_0 activity-icononly_3QM3P_0" :style="{color:'#'+v.icon_color,borderColor:'rgb(221, 221, 221)'}">
                                    {{v.icon_name}}
                                </i>
                                <!---->
                            </div>
                        </div>
                    </section>
                    <section class="index-line_1Zyr1">
                        <div class="index-rateWrap_3sCb3">
                            <div class="rating-wrapper_36aX1_0">
                                <div class="rating-max_1MKzt_0">
                                    <svg>
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                                    </svg>
                                    <svg>
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                                    </svg>
                                    <svg>
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                                    </svg>
                                    <svg>
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                                    </svg>
                                    <svg>
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                                    </svg>
                                </div>
                                <div class="rating-rating_1ZAfX_0" :style="parseInt(item.rating/5*100)+'%'">
                                    <svg>
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                                    </svg>
                                    <svg>
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                                    </svg>
                                    <svg>
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                                    </svg>
                                    <svg>
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                                    </svg>
                                    <svg>
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
                                    </svg>
                                </div>
                            </div>
                            <span class="index-rate_2O_yP">4.5</span>
                            <span>月售{{item.recent_order_num}}单</span>
                        </div>
                        <div class="index-deliveryWrap_1Q_ky">
                            <span class="index-iconDelivery_267-X index-hollow_lqvFq" v-if="item.delivery_mode"><span>蜂鸟快递</span></span>
                        </div>
                    </section>
                    <section class="index-line_1Zyr1">
                        <div class="index-moneylimit_1xDf3">
                            <span>¥{{item.float_minimum_order_amount}}起送</span>
                            <span v-if='item.float_delivery_fee==0'>
                                免配送费
                            </span>
                            <span v-else>{{item.piecewise_agent_fee.description}}</span>
                            <!---->
                        </div>
                        <div class="index-timedistanceWrap_2RmAM">
                            <span class="index-distanceWrap_HYwgP">{{item.distance|Km}}</span>
                            <span class="index-timeWrap_1pa5y">
                                {{item.order_lead_time}}分钟
                            </span>
                        </div>
                    </section>
                    <section class="index-activities_6HU-0">
                        <div class="index-activityList_2Ihd7 index-needexpand_3F_4C">
                            <div v-for="(el,onum) in item.activities" :key="onum+'ac'" v-show="onum>1?item.isshow:true" class="activity-container_2EaDo_0 activity-containerWrap_12dyC_0">
                                <i  class="activity-activityIcon_1iJyG_0" :style="{backgroundColor: '#'+el.icon_color, color: 'rgb(255, 255, 255)', borderColor: '#'+el.icon_color}">
                                    {{el.icon_name}}
                                </i>
                                <span class="activity-description_2q8qg_0">
                                    <span>{{el.tips}}</span>
                                </span>
                            </div>
                        </div>
                        <div class="index-activityBtn_3neB_" v-if="item.activities.length!=0" @click="changeToShow(key)">
                            {{item.activities.length}}个活动
                            <svg class="">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#activity-more"></use>
                            </svg>
                        </div>
                    </section>
                </div>
            </li>
            <li v-show="loaderMoreTag">
                加载中。。。。
            </li>
        </ul>
    </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui';
import Vue from 'vue';
Vue.use(InfiniteScroll);
export default {
    filters:{

        Km:function(data){
            if(data<1000)
            {
                return data.toFixed(2)+"m";
            }
            else{
                return (data/1000).toFixed(2)+"km";
            }
        },
        imgSrc: function (src) {
            if (/jpeg/.test(src)) {
                return "//fuss10.elemecdn.com/" + src.substr(0, 1) + "/" + src.substr(1, 2) + "/" + src.substr(3) + ".jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/";
            } else {
                return "//fuss10.elemecdn.com/" + src.substr(0, 1) + "/" + src.substr(1, 2) + "/" + src.substr(3) + ".png?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/";
            }
        }
    },
    data:function(){
        return {
            
        } 
    },
    methods: {
        goToDetail(id){
            window.location.href="http://localhost:8080/#/shop/"+id+"/goods";
        },
        changeToShow(key){
        //    this.$store.state.orderShopList[key].isshow=!this.$store.state.orderShopList[key].isshow;
            // console.log(this.isshow);
            this.$store.commit("CACS",key);
        },
        loadMore() {
            this.$store.commit("CLMT",true)
            this.$store.dispatch('updateSortList');
        },
    },
    computed: {
        list: function () {
            console.log(this.$store.state.orderShopList);
           
            return this.$store.state.orderShopList;
        },
        loaderMoreTag:function(){
            return this.$store.state.lodemoreTag;
        }
    }
}
</script>
<style scoped>
.before:before {
    margin-right: .133333rem;
    padding: 0 .066667rem;
    height: .4rem;
    border-radius: .053333rem;
    background-color: #ffd930;
    color: #52250a;
    content: "\54C1\724C";
    vertical-align: top;
    text-align: center;
    white-space: nowrap;
    font-weight: 700;
    font-size: .293333rem;
    line-height: .4rem;
}
.index-container_2XMzI, .index-main_2HHPe {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.index-container_2XMzI {
    position: relative;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    color: #666;
    list-style: none;
    font-size: .293333rem;
}
.logo-container_1XLJl_0 {
    position: relative;
    padding: .4rem .266667rem;
}
.logo-main_1kulr_0 {
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
}
.logo-logo_2XR1m_0 {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: .053333rem;
}
img {
    max-width: 100%;
}
.index-main_2HHPe {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: .4rem .266667rem .4rem 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.index-main_2HHPe {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.index-line_1Zyr1 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.index-shopname_3_J4F {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0;
    padding: 0;
    max-width: 5rem;
    height: .426667rem;
    color: #333;
    font-weight: 700;
    font-size: .4rem;
}
.logo-newShop_1NvWt_0 span {
    position: absolute;
    top: .133333rem;
    left: .026667rem;
    display: block;
    color: #fff;
    font-weight: 700;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.logo-newShop_1NvWt_0 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    width: .853333rem;
    height: .853333rem;
    background-image: -webkit-linear-gradient(315deg,#26ce61,#26ce61 50%,transparent 0);
    background-image: linear-gradient(135deg,#26ce61,#26ce61 50%,transparent 0);
    font-size: .24rem;
}
.index-shopname_3_J4F span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.index-supportWrap_VWrQG {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.index-supportWrap_VWrQG {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.activity-containerNoWrap_2zBBg_0 {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.activity-container_2EaDo_0 {
    line-height: .426667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: .266667rem;
}
.activity-activityIcon_1iJyG_0.activity-icononly_3QM3P_0 {
    margin-right: 0;
}
.activity-containerNoWrap_2zBBg_0 .activity-icononly_3QM3P_0 {
    margin-left: .066667rem;
}
.activity-activityIcon_1iJyG_0 {
    margin-right: .133333rem;
    font-size: .266667rem;
    font-style: normal;
    line-height: 1;
    height: .293333rem;
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid;
    border-radius: .04rem;
}
.index-line_1Zyr1:nth-child(2) {
    margin-top: .2rem;
}
.index-rateWrap_3sCb3 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.rating-wrapper_36aX1_0 {
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
}
.rating-max_1MKzt_0, .rating-rating_1ZAfX_0 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.rating-max_1MKzt_0 svg {
    fill: #ddd;
}
.rating-max_1MKzt_0 svg, .rating-rating_1ZAfX_0 svg {
    display: block;
    margin: 0 1px;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    width: .266667rem;
    height: .266667rem;
}
.rating-rating_1ZAfX_0 {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}
.rating-rating_1ZAfX_0 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.rating-rating_1ZAfX_0 svg {
    fill: #ffaa0c;
}
.rating-max_1MKzt_0 svg, .rating-rating_1ZAfX_0 svg {
    display: block;
    margin: 0 1px;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    width: .266667rem;
    height: .266667rem;
}
.index-rate_2O_yP {
    margin: 0 .106667rem;
    color: #ff6000;
}
.index-deliveryWrap_1Q_ky {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.index-iconDelivery_267-X.index-hollow_lqvFq {
    background-color: #2395ff;
    color: #fff;
}
.index-iconDelivery_267-X {
    padding: 0 .053333rem;
    border: 1px solid #44a5ff;
    border-radius: .053333rem;
    background-color: #fff;
    color: #2395ff;
    font-size: .266667rem;
    line-height: .346667rem;
}
.index-line_1Zyr1:nth-child(3) {
    margin-top: .226667rem;
    line-height: .32rem;
}
.index-line_1Zyr1 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.index-moneylimit_1xDf3 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
}
.index-moneylimit_1xDf3 span+span:before {
    margin: 0 .08rem;
    color: #ddd;
    content: "/";
}
.index-moneylimit_1xDf3 span:nth-of-type(2) {
    overflow: hidden;
    max-width: 2.666667rem;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.index-timedistanceWrap_2RmAM {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.index-distanceWrap_HYwgP {
    color: #999;
}
.index-timedistanceWrap_2RmAM span+span:before {
    margin: 0 .08rem;
    color: #ddd;
    content: "/";
}
.index-timeWrap_1pa5y {
    color: #2395ff;
}
.index-activities_6HU-0, .index-supportWrap_VWrQG {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.index-activities_6HU-0 {
    position: relative;
    margin-top: .2rem;
    border-top: 1px solid #eee;
    color: #939393;
}
.index-activityList_2Ihd7 {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding-top: .133333rem;
}
.index-activityBtn_3neB_ {
    position: absolute;
    right: 0;
    padding: .266667rem 0 .2rem;
    height: 100%;
    color: #999;
    text-align: right;
    font-size: .266667rem;
    line-height: 1;
}
.index-activityList_2Ihd7.index-needexpand_3F_4C div:first-child {
    padding-right: 1.866667rem;
}
.index-activityList_2Ihd7 div {
    margin-top: .066667rem;
}
.activity-container_2EaDo_0 {
    line-height: .426667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: .266667rem;
}
.index-activityBtn_3neB_ {
    position: absolute;
    right: 0;
    padding: .266667rem 0 .2rem;
    height: 100%;
    color: #999;
    text-align: right;
    font-size: .266667rem;
    line-height: 1;
}
.index-activityBtn_3neB_ svg {
    width: .173333rem;
    height: .173333rem;
    opacity: .9;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    fill: currentColor;
    will-change: transform;
}
</style>
