<template>
    <header>
        <div class="index-MAORp">
            <div class="index-3vsmj">
                <svg class="index-3guVd">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
                </svg>
                <span class="index-1cnKa">{{getL}}</span>
                <svg class="index-9eIfV">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use>
                </svg>
            </div>
            <aside class="index-2LvmP">
                <div>
                    <h2 class="index-17uRU">{{getWT}}</h2>
                    <p class="index-p">{{getWS}}</p>
                </div>
                <img alt="天气图标" class="index-wRPUE" :src="getWI" />
            </aside>
        </div>
        <a href="/search/#/">
            <input type="text" placeholder="搜索商家、商品" aria-label="搜索商家、商品" class="index-20Oji">
        </a>
        <div class="index-1NhZ1">
            <a v-for="(item,key) in getKW" :key="key" href="#">
                {{item.search_word}}
            </a>
        </div>
    </header>
</template>

<script>
export default {
    mounted: function () {
        //console.log(this.$store);
        //console.log('着是mounted');
        this.$store.dispatch('getTude');
    },
    computed: {
        getL: function () {
            //console.log(this.$store.state.point);

            return this.$store.state.point;
        },
        getWS: function () {
            if (this.$store.state.weather.description) {
                return this.$store.state.weather.description;
            }
            else {
                return "晴"
            }

        },
        getWT: function () {
            if (this.$store.state.weather.temperature) {
                return this.$store.state.weather.temperature + "°";
            }
            else {
                return "31°";
            }
        },
        getWI: function () {
            if (this.$store.state.weather.image_hash) {
                var str = this.$store.state.weather.image_hash;
                return "//fuss10.elemecdn.com/" + str[0] + "/" + str.substr(1, 2) + "/" + str.substr(3) + ".png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/";
            }
            else {
                return "//fuss10.elemecdn.com/3/73/19e992e612e983f517e2690cb3e16png.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/";
            }
        },
        getKW: function () {
            //console.log(this.$store.state.keyWords);
            return (this.$store.state.keyWords);
        }
    }
}
</script>
<style scoped>
header {
    padding: .266667rem .373333rem;
    background-image: -webkit-linear-gradient(left, #0af, #0085ff);
    background-image: linear-gradient(90deg, #0af, #0085ff);
    color: #fff;
    height: 3.253333rem;
    box-sizing: border-box;
}

.index-3guVd {
    width: .346667rem;
    height: .413333rem;
    fill: #fff;
    box-sizing: inherit;
}

.index-MAORp {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.index-MAORp {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: .92rem;
}

.index-3vsmj {
    width: 60%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}

.index-1cnKa {
    margin: 0 .133333rem;
    font-size: .48rem;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.index-p {
    font-size: 24px;
    text-align: center;
}

.index-9eIfV {
    width: .186667rem;
    height: .093333rem;
    fill: #fff;
}

.index-1NhZ1 {
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    height: 28px;
    color:#fff;
    font-size: 24px;
}

.index-1NhZ1 a:not(:last-child) {
    margin-right: .4rem;
}

.index-1NhZ1 a {
    color: currentColor;
    font-size: 24px;
    line-height: 24px;
    text-decoration: none;
}

.index-2LvmP {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: right;
    box-sizing: border-box;
}

.index-17uRU {
    font-size: .373333rem;
}

.index-20Oji {
    display: block;
    margin: .2rem 0;
    width: 100%;
    height: .96rem;
    text-align: center;
    border-radius: .96rem;
    box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0, 0, 0, .2);
    color: #333;
    font-size: .346667rem;
    outline: none;
    border:none;
}
</style>
