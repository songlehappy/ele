<template>
    <div class="index-footer_Gtduid_">
        <a href="#/msite" class="index-footerTab_bl0lbJN" :active="tag" @click="change()">
            <svg class="index-footerTabIcon_1EbB8wS" v-if="tag">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index.18edf5a"></use>
            </svg>
            <svg class="index-footerTabIcon_1EbB8wS" v-else>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index-regular.b245d60"></use>
            </svg>
            <span :class="tag?'acticve':''" class="index-footerTabText_1It8yh0 index-footerTabTextActive_3gjOLc6">
                外卖
            </span>
        </a>
        <a href="#/Discover" class="index-footerTab_bl0lbJN" :active="tag1" @click="change1()">
            <svg class="index-footerTabIcon_1EbB8wS" v-if="tag1">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover.5811137"></use>
            </svg>
            <svg class="index-footerTabIcon_1EbB8wS" v-else>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover-regular.8ef537f"></use>
            </svg>
            <span class="index-footerTabText_1It8yh0" :class="tag1?'acticve':''">
                发现
            </span>
        </a>
        <a href="#/order" class="index-footerTab_bl0lbJN" @click="change2()">
            <svg class="index-footerTabIcon_1EbB8wS" v-if="tag2">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order.070ae2a"></use>
            </svg>
            <svg class="index-footerTabIcon_1EbB8wS" v-else>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order-regular.41c17f8"></use>
            </svg>
            <span class="index-footerTabText_1It8yh0" :class="tag2?'acticve':''">
                订单
            </span>
        </a>
        <a href="#/profile" class="index-footerTab_bl0lbJN" @click="change3()">
            <svg class="index-footerTabIcon_1EbB8wS" v-if="tag3">
                 <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile.dbc5ebf"></use>
            </svg>
            <svg class="index-footerTabIcon_1EbB8wS" v-else>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile-regular.c151d62"></use>
            </svg>
            <span class="index-footerTabText_1It8yh0" :class="tag3?'acticve':''">
                我的
            </span>
        </a>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            tag: true,
            tag1: false,
            tag2: false,
            tag3: false
        }
    },
    methods: {
        change() {
            //console.log(11);
            this.tag = true;
            this.tag1 = false;
            this.tag2 = false;
            this.tag3 = false;
        },
        change1() {
            //console.log(11);
            this.tag = false;
            this.tag1 = true;
            this.tag2 = false;
            this.tag3 = false;
        },
        change2() {
            //console.log(11);
            this.tag = false;
            this.tag1 = false;
            this.tag2 = true;
            this.tag3 = false;
        },
        change3() {
            //console.log(11);
            this.tag = false;
            this.tag1 = false;
            this.tag2 = false;
            this.tag3 = true;
        }
    }
}
</script>
<style scoped>
.index-footer_Gtduid_ {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
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
    padding-top: .12rem;
    background-color: #fff;
    height: 1.333333rem;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, .1);
}

.index-footerTab_bl0lbJN {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    text-align: center;
    line-height: 1.2;
    width: 187.5px;
    height: 69px;
    font-size: 24px;
    text-decoration: none;
}

.index-footerTabIcon_1EbB8wS {
    width: .533333rem;
    height: .533333rem;
}

.index-footerTabTextActive_3gjOLc6 {
    color: #0089dc;
}

.acticve {
    color: #0089dc!important;
}

.index-footerTabText_1It8yh0 {
    display: block;
    color: #666;
    font-size: .266667rem;
}
</style>

