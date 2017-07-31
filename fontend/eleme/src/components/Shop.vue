<template>
    <div>
        <div class="shop-top">
            <div class="bg-pic"></div>
            <div class="back-index">
                <router-link to="/">
                    <svg>
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
                    </svg>
                </router-link>
            </div>
            <div class="shop-content">
                <img src="https://fuss10.elemecdn.com/1/94/20fab1f210839ac1121cf7740906cjpeg.jpeg" alt="">
                <div class="shop-intrduce">
                    <div>学府店</div>
                    <div>商家配送</div>
                    <div>公告</div>
                </div>
            </div>
            <div class="shop-activity">
                <span>
                    <i>新</i>新用户下单立减27.0元(不与其它活动同享)</span>
                <span>6个活动</span>
            </div>
        </div>
        <div class="shop-tab">
            <a href="#/shop/goods"><span>商品</span></a>
            <a href="#/shop/comment"><span>评价</span></a>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Shop',
    data() {
        return {
            active: 'tab-container2',
        }
    },
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
}
.shop-tab{
    display: flex;
    font-size: 0.373333rem;
    line-height: 1.2rem;
    border-bottom: 1px solid #ddd;
    
    a{
        text-decoration: none;
        color:#666;
        flex: 1;
        display: flex;
        justify-content: center;
    }
}

</style>
