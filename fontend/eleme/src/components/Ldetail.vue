<template>
    <div>
        <header data-v-3d8ac645="" class="ElemeHeader-root_lOpLxr-_0">
            <div class="ElemeHeader-wrapper_2rUT4SE_0 ElemeHeader-gradientBg_3_Tu-JD_0">
                <div class="ElemeHeader-left_7jLVUf9_0" @click="back">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
                    </svg>
                </div>
                <h1 class="ElemeHeader-center_2hbxfGq_0">{{this.params.target_name}}</h1>
            </div>
        </header>
        <aside data-v-98a11d7e="" data-v-3d8ac645="" class="filter">
            <div data-v-98a11d7e="" class="filter-header">
                <a data-v-98a11d7e="" href="javascript:" class="filter-nav" @click="getSort">
                    <span data-v-98a11d7e="">分类</span>
                    <svg data-v-98a11d7e="" viewBox="0 0 72 32">
                        <path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path>
                    </svg>
                </a>
                <a data-v-98a11d7e="" href="javascript:" class="filter-nav" @click="openKey">
                    <span data-v-98a11d7e="">排序</span>
                    <svg data-v-98a11d7e="" viewBox="0 0 72 32">
                        <path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path>
                    </svg>
                </a>
                <a data-v-98a11d7e="" href="javascript:" class="filter-nav filter-nav-more" @click="openKey1">
                    <span data-v-98a11d7e="">筛选</span>
                    <svg data-v-98a11d7e="" viewBox="0 0 72 32">
                        <path data-v-98a11d7e="" d="M36 32l36-32h-72z"></path>
                    </svg>
                </a>
            </div>
            <section class="filter-extend filter-category" :class="open1?'open':''">
                <div class="filter-scroller">
                    <ul>
                        <li v-for="(item,key) in shopSort" :key='key+"123"' @click="changeList(key)">
                            <span>{{item.name}}</span>
                            <span class="count">{{item.count}}</span>
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(item,key) in sortShopList" :key="'key'+key" style="line-height:50px">
                            <img :src="item.image_url|imgSrc">
                            <span>{{item.name}}</span>
                            <span class="count">{{item.count}}</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="filter-extend filter-sort" :class="open2?'open':''" >
                <ul data-v-fd238482="">
                    <li data-v-fd238482="" class="active">
                        <svg data-v-fd238482="">
                            <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#default"></use>
                        </svg>
                        <span data-v-fd238482="">智能排序</span>
                        <svg data-v-fd238482="" class="selected">
                            <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                        </svg>
                    </li>
                    <li data-v-fd238482="" class="">
                        <svg data-v-fd238482="">
                            <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#distance"></use>
                        </svg>
                        <span data-v-fd238482="">距离最近</span>
                        <svg data-v-fd238482="" class="selected">
                            <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                        </svg>
                    </li>
                    <li data-v-fd238482="" class="">
                        <svg data-v-fd238482="">
                            <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#hot"></use>
                        </svg>
                        <span data-v-fd238482="">销量最高</span>
                        <svg data-v-fd238482="" class="selected">
                            <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                        </svg>
                    </li>
                    <li data-v-fd238482="" class="">
                        <svg data-v-fd238482="">
                            <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#price"></use>
                        </svg>
                        <span data-v-fd238482="">起送价最低</span>
                        <svg data-v-fd238482="" class="selected">
                            <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                        </svg>
                    </li>
                    <li data-v-fd238482="" class="">
                        <svg data-v-fd238482="">
                            <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#speed"></use>
                        </svg>
                        <span data-v-fd238482="">配送速度最快</span>
                        <svg data-v-fd238482="" class="selected">
                            <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                        </svg>
                    </li>
                    <li data-v-fd238482="" class="">
                        <svg data-v-fd238482="">
                            <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating"></use>
                        </svg>
                        <span data-v-fd238482="">评分最高</span>
                        <svg data-v-fd238482="" class="selected">
                            <use data-v-fd238482="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                        </svg>
                    </li>
                </ul>
            </section>
            <section class="filter-extend filter-more" :class="open3?'open':''"></section>
            <section data-v-98a11d7e="" class="filter-modal" :class="openall?'open':''"></section>
        </aside>
    
    </div>
</template>
<script>
import { Actionsheet } from 'mint-ui';
import Vue from 'vue';

export default {
    components: {
        Actionsheet
    },
    filters: {
        imgSrc: function (src) {
            if (/jpeg/.test(src)) {
                return "//fuss10.elemecdn.com/" + src.substr(0, 1) + "/" + src.substr(1, 2) + "/" + src.substr(3) + ".jpeg?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/";
            } else {
                return "//fuss10.elemecdn.com/" + src.substr(0, 1) + "/" + src.substr(1, 2) + "/" + src.substr(3) + ".png?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/";
            }
        }
    },
    data: function () {
        var params = {};
        var PList = this.$route.params.Id.split("&");
        for (let i = 0; i < PList.length; i++) {
            var OAlist = PList[i].split("=");
            params[OAlist[0]] = OAlist[1];
        }
        console.log(params);
        return {
            params: params,
            sortShopList: [],
            open1: false,
            open2: false,
            open3: false,
            openall: false,
        }
    },
    methods: {
        openKey(){ 
            this.open1 = this.open3 = false;
            this.open2 = this.openall = !this.open2;
        },
        openKey1(){ 
            this.open1 = this.open2 = false;
            this.open3 = this.openall = !this.open3;
        },
        getSort() {
            //console.log(this.$store.state.sortShopList);
            this.$store.dispatch('getSortShop');
            this.open2 = this.open3 = false;
            this.open1 = this.openall = !this.open1;
        },
        back() {
            window.history.back();
        },
        changeList(idex) {
            if (this.shopSort[idex].sub_categories) {
                this.sortShopList = this.shopSort[idex].sub_categories;
            }
            else {
                this.sortShopList = [];
            }
        }
    },
    computed: {
        shopSort: function () {
            if (this.$store.state.sortShopList.length > 1) {
                console.log(this.$store.state.sortShopList);
                return this.$store.state.sortShopList;
            } else {
                return [];
            }

        }
    },
    mounted: function () {
    }
}
</script>
<style scoped>
ul[data-v-fd238482] {
    list-style: none;
    margin: 0;
    padding: 0;
}
.filter-sort li.active[data-v-fd238482] {
    color: #0089dc;
}
.filter-sort li[data-v-fd238482] {
    position: relative;
    padding-left: .4rem;
    line-height: 1.333333rem;
}
.filter-sort svg[data-v-fd238482] {
    width: .4rem;
    height: .4rem;
    margin-right: .266667rem;
    vertical-align: middle;
}
.ElemeHeader-root_lOpLxr-_0 {
    height: 1.173333rem;
}

.filter-modal.open {
    opacity: 1;
    visibility: visible;
}

.filter-modal {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(0, 0, 0, .2);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}

.ElemeHeader-wrapper_2rUT4SE_0 {
    position: relative;
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
    width: 100%;
    height: 1.173333rem;
    color: #fff;
    font-size: .48rem;
    background: #2395ff;
}

.filter-category ul:nth-of-type(2) img {
    margin-right: .2rem;
    width: .666667rem;
    height: .666667rem;
    vertical-align: middle;
}

.filter-category ul:nth-of-type(2) span {
    vertical-align: middle;
}

.ElemeHeader-gradientBg_3_Tu-JD_0 {
    background-image: -webkit-linear-gradient(left, #0af, #0085ff);
    background-image: linear-gradient(90deg, #0af, #0085ff);
}

.ElemeHeader-left_7jLVUf9_0 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 1.173333rem;
    height: 1.173333rem;
}

.ElemeHeader-center_2hbxfGq_0 {
    position: absolute;
    top: 0;
    left: 50%;
    height: 1.173333rem;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 1em;
    line-height: 1.173333rem;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}

.ElemeHeader-left_7jLVUf9_0 svg {
    display: block;
    width: .586667rem;
    height: .586667rem;
}

.filter[data-v-98a11d7e] {
    position: relative;
    border-bottom: 1px solid #ddd;
    height: 1.066667rem;
    line-height: 1.04rem;
    z-index: 100;
}

.filter-header {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 3;
    background-color: #fff;
}

.filter-nav {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    color: #666;
    position: relative;
    font-size: .346667rem;
    line-height: 1.04rem;
    text-decoration: none;
}

.filter-nav>svg {
    width: .24rem;
    height: .106667rem;
    margin-bottom: .053333rem;
    fill: #999;
    will-change: transform;
    -webkit-transition: all .3s;
    transition: all .3s;
}

.filter-extend.open {
    opacity: 1;
    visibility: visible;
    max-height: 1000%;
}

.filter-category {
    height: 1000%;
}

.filter-extend {
    left: 0;
    right: 0;
    top: 100%;
    border-top: 1px solid #ddd;
    position: absolute;
    max-height: 0;
    background-color: #fff;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    visibility: hidden;
    overflow: auto;
    opacity: 0;
    z-index: 3;
}

.filter-category {
    z-index: 200;
    padding-bottom: 0;
    color: #666;
}

.filter-category .filter-scroller,
.filter-category .loading {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
}

.filter-category ul:first-child {
    background-color: #fafafa;
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    -ms-flex: 2;
    flex: 2;
}

.filter-category ul {
    -webkit-box-flex: 3;
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

.filter-category ul:nth-of-type(2) {
    margin-left: .4rem;
    padding-right: .133333rem;
}

.filter-category ul {
    -webkit-box-flex: 3;
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

.filter-category ul:first-child li {
    padding: 0 .133333rem 0 .266667rem;
}

.filter-category li.active {
    background-color: #fff;
}

.filter-category li {
    position: relative;
    line-height: 40px;
    height: 78px;
}

.filter-category li span {
    font-size: 24px;
    line-height: .373333rem;
}

.filter-category ul:nth-of-type(2) {
    margin-left: .4rem;
    padding-right: .133333rem;
}

.filter-extend.open {
    opacity: 1;
    visibility: visible;
    max-height: 1000%;
}

.filter-category .count {
    position: absolute;
    right: .266667rem;
    line-height: .373333rem;
    top: 50%;
    margin-top: -.186667rem;
    border-radius: .266667rem;
    border: .013333rem solid #eee;
    background-color: #fff;
    padding: 0 .133333rem;
    font-size: .293333rem;
}
</style>
