<template>
    <div class="shop-comment-score">
        <section class="shop-score">
            <div class="score-left">
                <strong>4.4</strong>
                <div>综合评价</div>
                <p>高于周边商家46.9%</p>
            </div>
            <div class="score-right">
                <div>
                    <span>服务态度</span>
                    <el-rate v-model="value5" disabled text-color="#ff9900" text-template="{value}"></el-rate>
                    <span>1</span>
                </div>
                <div>
                    <span>菜品评价</span>
                    <el-rate v-model="value5" disabled text-color="#ff9900" text-template="{value}"></el-rate>
                    <span>1</span>
                </div>
                <div>
                    <span>送达时间</span>
                    <span>1</span>
                </div>
            </div>
        </section>
        <section class="shop-tag">
            <div class="tag-top"></div>
        </section>
    </div>
</template>

<script>
// 引入辅助函数mapstate
import { mapState } from 'vuex'
export default {
    data() {
        return {
            value5: 1,
        }
    },
    mounted() {
        //请求综合分数/标签
        var id = this.$route.params.id;
        this.$store.dispatch('getShopScoreData', id);
        this.$store.dispatch('getShopTagData', id);
    },
    computed: {
        //得到状态信息
        ...mapState(['shopComment', 'shopScore', 'shopTag']),
    }
}

</script>

<style scoped lang='scss'>
.shop-comment-score {
    background: #f1f1f1;
    height: 13.066666rem;
    overflow: auto;
}

.shop-score {
    background-color: #fff;
    margin-bottom: .266667rem;
    padding: .4rem;
    font-size: .36rem;
    display: flex;
    align-items: center;
    color: #666;
    .score-left {
        display: flex;
        height: 2rem;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding-right: .4rem;
        border-right: 1px solid #ddd;
        strong {
            font-size: .8rem;
            color: #f60;
        }
        p {
            font-size: .266667rem;
            color: #999;
        }
    }
    .score-right {
        flex: 1;
        height: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        div {
            display: flex;
            align-items: center;
            span {
                padding-left: 0.5rem;
            }
            .el-rate {
                padding-left: 0.5rem;
            }
            span:last-child {
                color: #f60;
            }
        }
    }
}

.shop-tag {
    background-color: #fff;
    padding: .266667rem .32rem 0;
    font-size: .36rem;
    .tag-top {
        padding-bottom: .266667rem;
        border-bottom: 1px solid #ddd;
    }
}
</style>
