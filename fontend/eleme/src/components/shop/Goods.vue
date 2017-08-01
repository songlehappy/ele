<template>
    <div>
        <div class="goods-content">
            <div class="goods-left">
                <a :key="index" v-for="(item,index) in shopGoods">
                    <span>{{item.name}}</span>
                </a>
            </div>
            <div class="goods-right">
                <div class="sub-right" :id='index' :key="index" v-for="(item,index) in shopGoods">
                    <div class="right-title">
                        <strong>{{item.name}}</strong>
                        <span>{{item.description}}</span>
                    </div>
                    <div class="right-food" :key="num" v-for="(str,num) in item.foods">
                        <img :src="'https://fuss10.elemecdn.com/'+str.image_path+(/png$/.test(str.image_path)?'.png':'.jpeg')">
                        <section>
                            <div>{{str.name}}</div>
                            <div>{{str.description}}</div>
                            <div>
                                <span>月售{{str.month_sales}}份 </span>
                                <span>好评率{{str.satisfy_rate}}%</span>
                            </div>
                            <div>
                                <span>￥{{str.specfoods[0].price}}</span>
                                <svg viewBox="0 0 44 44" id="cart-minus" width="100%" height="100%">
                                    <path fill="none" d="M0 0h44v44H0z"></path>
                                    <path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <div class="shop-car">
            <div class="car"></div>
            <div class="car-left">
                <p>￥0</p>
                <span>配送费￥{{shopHead.float_delivery_fee}}</span>
            </div>
            <div class="car-right">￥{{shopHead.float_minimum_order_amount}}起送</div>
        </div>
    </div>
</template>

<script>
// 引入辅助函数mapstate
import { mapState } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        //得到状态信息
        ...mapState(['shopGoods', 'shopHead']),
    }
}
</script>


<style scoped lang='scss'>
.goods-content {
    height: 11.78666rem;
    overflow: auto;
    display: flex;
    .goods-left {
        height: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        width: 2.266667rem;
        background: #f5f5f5;

        a {
            display: block;
            text-decoration: none;
            span {
                display: block;
                position: relative;
                padding: .466667rem .2rem;
                border-bottom: 1px solid #ededed;
                font-size: .346667rem;
                color: #666;
            }
        }
    }
    .goods-right {
        height: 100%;
        overflow: auto;
        flex: 1;
        display: flex;
        flex-direction: column;
        .sub-right {
            .right-title {
                height: 1rem;
                background: #f1f1f1;
                strong {
                    position: relative;
                    top: -35%;
                    left: 5%;
                    margin-right: 0.133333rem;
                    font-size: 0.373333rem;
                    color: #666;
                }
                span {
                    position: relative;
                    top: -35%;
                    color: #999;
                    font-size: 0.266667rem;
                }
            }
            .right-food {
                background-color: #fff;
                padding: .4rem .266667rem;
                margin-bottom: 1px;
                display: flex;
                min-height: 2.933333rem;
                display: flex;
                border-bottom: 1px solid #ededed;
                img {
                    width: 104px;
                    height: 104px;
                }
                section {
                    flex: 1;
                    margin-left: 4%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    div:nth-child(1) {
                        font-size: .4rem;
                        font-weight: 700;
                        width: 5.5rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    div:nth-child(2) {
                        font-size: .253333rem;
                        color: #999;
                        width: 5.5rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    div:nth-child(3) {
                        color: #666;
                        font-size: .293333rem;
                    }
                    div:nth-child(4) {
                        display: flex;
                        justify-content: space-between;
                        span {
                            font-weight: 700;
                            font-size: .426667rem;
                            color: #f60;
                        }
                        svg {
                            width: 40px;
                            height: 40px;
                            fill: #3190e8;
                        }
                    }
                }
            }
        }
    }
}

.shop-car {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    padding-left: 2.106667rem;
    background-color: #3d3d3f;
    height: 1.28rem;
    opacity: .95;
    color: #fff;
    .car{
        position:absolute;
        top:-20%;
        left: 5%;
        border:0.1rem solid #666;
        border-radius: 50%;
        width:1.28rem;
        height: 1.28rem;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjNUY1RjYzIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiNFQkVFRjMiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG9wYWNpdHk9Ii4wNSIgbWFzaz0idXJsKCNjKSIvPjwvZz48cGF0aCBzdHJva2U9IiM1RjVGNjMiIHN0cm9rZS13aWR0aD0iNiIgZD0iTTkuMzc0IDE4LjcyMlM3Ljg2OCAxMS4yODMgNy4zMjMgOC43MUM2Ljc3OCA2LjEzNiA1Ljg2IDUuMzMgMy45NzggNC41MiAyLjA5NiAzLjcxMy4zNjcgMi4yODYuMzY3IDIuMjg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI0NiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjNUY1RjYzIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI1MSIgcj0iNCIgZmlsbD0iIzVGNUY2MyIvPjwvZz48L3N2Zz4=) no-repeat center;
        background-size: 70% 70%;
        background-color: #3d3d3f;
    }
    .car-left {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p {
            font-size: 0.48rem;
        }
        span {
            font-size: 0.266667rem;
        }
    }
    .car-right {
        width: 2.8rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .4rem;
        font-weight: 700;
        background: #535356;
    }
}
</style>
