<template>
    <div>
        <mt-swipe :show-indicators="true" :continuous="true" :auto="0">
            <mt-swipe-item v-for="(item,key) in foodList.list" :key='key'>
                <a :href="im.link|productLink" v-for="(im,ke) in foodList.list[key]" :key="ke+key">
                    <div class="container">
                        <img :src="im.image_hash|imgSrc">
                    </div>
                    <span class="title">{{im.name}}</span>
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    filters: {
        productLink:function(link){
            return link.replace('eleme://restaurants?','#/LDetail/');
        },
        imgSrc: function (src) {
            if (/jpeg/.test(src)) {
                return "//fuss10.elemecdn.com/" + src.substr(0, 1) + "/" + src.substr(1, 2) + "/" + src.substr(3) + ".jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/";
            } else {
                return "//fuss10.elemecdn.com/" + src.substr(0, 1) + "/" + src.substr(1, 2) + "/" + src.substr(3) + ".png?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/";
            }
        }
    },
    computed: {
        foodList: function () {
            var getList = this.$store.state.foodList[0];
            if (getList) {
                console.log(getList);
                var length = Math.ceil(getList.entries.length / 8);
                var list = new Array(length);
                for (let i = 0; i < length; i++) {
                    list[i] = getList.entries.slice(8 * i, 8 * i + 8);
                }
                // console.log(list);
                return { list: list, length: list };
            } else {
                return {
                    list: [], length: []
                }
            }
        }
    }
}
</script>
<style>
.mint-swipe {
    overflow: hidden;
    height: 4.72rem;
    background-color: #fff;
    text-align: center;
    font-size: 24px;
}

.mint-swipe-items-wrap {
    overflow: hidden;
    position: relative;
    height: 100%;
}

.mint-swipe-items-wrap>div {
    position: absolute;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    display: none;
}

.mint-swipe-items-wrap a {
    position: relative;
    float: left;
    margin-top: .293333rem;
    width: 25%;
    text-decoration: none;
    box-sizing: border-box;
    font-size: 24px;
    height:127.98px;
}

.title {
    display: block;
    margin-top: .1rem;
    color: #666;
    font-size: .32rem;
    text-decoration: none;
    box-sizing: border-box;
    line-height: 1.2;
}
.container {
    position: relative;
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
}
.mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}

</style>
