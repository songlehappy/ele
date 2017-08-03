<template>
    <div>
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-for="(item,key) in list" :key="'list'+key" class="index-container_2XMzI">
                <div class="logo-container_1XLJl_0">
                    <div class="logo-main_1kulr_0">
                        <img :alt="item.name" class="logo-logo_2XR1m_0" :src="item.image_path|imgSrc">
                        <!---->
                    </div>
                    <!---->
                </div>
                <div class="index-main_2HHPe">
                    <section class="index-line_1Zyr1">
                        <h3 class="index-shopname_3_J4F">
                            <span>{{item.name}}}</span>
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
                            <!---->
                            <!---->
                        </div>
                    </section>
                    <section class="index-line_1Zyr1">
                        <div class="index-moneylimit_1xDf3">
                            <span>¥{{item.float_delivery_fee}}起送</span>
                            <span>
                                免配送费
                            </span>
                            <!---->
                        </div>
                        <div class="index-timedistanceWrap_2RmAM">
                            <span class="index-distanceWrap_HYwgP">2.01km</span>
                            <span class="index-timeWrap_1pa5y">
                                37分钟
                            </span>
                        </div>
                    </section>
                    <section class="index-activities_6HU-0">
                        <div class="index-activityList_2Ihd7 index-needexpand_3F_4C">
                            <div class="activity-container_2EaDo_0 activity-containerWrap_12dyC_0">
                                <i class="activity-activityIcon_1iJyG_0" style="background-color: rgb(112, 188, 70); color: rgb(255, 255, 255); border-color: rgb(112, 188, 70);">
                                    新
                                </i>
                                <span class="activity-description_2q8qg_0">
                                    <span>新用户下单立减20.0元</span>
                                </span>
                            </div>
                            <div class="activity-container_2EaDo_0 activity-containerWrap_12dyC_0">
                                <i class="activity-activityIcon_1iJyG_0" style="background-color: rgb(240, 115, 115); color: rgb(255, 255, 255); border-color: rgb(240, 115, 115);">
                                    减
                                </i>
                                <span class="activity-description_2q8qg_0">
                                    <span>满35减2，满45减4，满55减6</span>
                                </span>
                            </div>
                            <div class="activity-container_2EaDo_0 activity-containerWrap_12dyC_0" style="display: none;">
                                <i class="activity-activityIcon_1iJyG_0" style="background-color: rgb(240, 115, 115); color: rgb(255, 255, 255); border-color: rgb(240, 115, 115);">
                                    特
                                </i>
                                <span class="activity-description_2q8qg_0">
                                    <span>本周特价</span>
                                </span>
                            </div>
                            <div class="activity-container_2EaDo_0 activity-containerWrap_12dyC_0" style="display: none;">
                                <i class="activity-activityIcon_1iJyG_0" style="background-color: rgb(60, 199, 145); color: rgb(255, 255, 255); border-color: rgb(60, 199, 145);">
                                    赠
                                </i>
                                <span class="activity-description_2q8qg_0">
                                    <span>满35.0元赠送鲜榨西瓜汁1份</span>
                                </span>
                            </div>
                            <div class="activity-container_2EaDo_0 activity-containerWrap_12dyC_0" style="display: none;">
                                <i class="activity-activityIcon_1iJyG_0" style="background-color: rgb(241, 136, 79); color: rgb(255, 255, 255); border-color: rgb(241, 136, 79);">
                                    特
                                </i>
                                <span class="activity-description_2q8qg_0">
                                    <span>本周特价</span>
                                </span>
                            </div>
                            <div class="activity-container_2EaDo_0 activity-containerWrap_12dyC_0" style="display: none;">
                                <i class="activity-activityIcon_1iJyG_0" style="background-color: rgb(240, 115, 115); color: rgb(255, 255, 255); border-color: rgb(240, 115, 115);">
                                    特
                                </i>
                                <span class="activity-description_2q8qg_0">
                                    <span>下午茶点特价</span>
                                </span>
                            </div>
                        </div>
                        <div class="index-activityBtn_3neB_">
                            6个活动
                            <svg class="">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#activity-more"></use>
                            </svg>
                        </div>
                    </section>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui';
import Vue from 'vue';
Vue.use(InfiniteScroll);
export default {
    filters: {
        imgSrc: function (src) {
            if (/jpeg/.test(src)) {
                return "//fuss10.elemecdn.com/" + src.substr(0, 1) + "/" + src.substr(1, 2) + "/" + src.substr(3) + ".jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/";
            } else {
                return "//fuss10.elemecdn.com/" + src.substr(0, 1) + "/" + src.substr(1, 2) + "/" + src.substr(3) + ".png?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/";
            }
        }
    },
    mounted: function () {

    },
    methods: {
        loadMore() {
            this.$store.dispatch('updateSortList');
        },
    },
    computed: {
        list: function () {
            console.log(this.$store.state.orderShopList);
            return this.$store.state.orderShopList;
        }
    }
}
</script>
<style scoped>
.index-container_2XMzI,
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
</style>
